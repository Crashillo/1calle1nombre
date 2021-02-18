import { geoPath } from "d3-geo"
import { select } from "d3-selection"
import { interval } from "d3-timer"
import { transition } from "d3-transition"
import { scaleQuantile, scalePoint } from "d3-scale"
import { schemeGreens } from "d3-scale-chromatic"
import { zoom, zoomIdentity } from "d3-zoom"
import { geoConicConformalSpain } from "d3-composite-projections"
import { feature, mesh } from "topojson-client"
import { percent, formatDate, getProp } from "./helpers"
import { ELEMENTS, URLS, FEATURE_ID, FEATURE_VALUES, FEATURE_DESC } from "./config"
import Legend from "./legend"
import Controls from "./controls"
import Slider from "./slider"

// helpers
const getId = getProp("properties", FEATURE_ID)
const getValues = getProp("properties", FEATURE_VALUES)
const getDesc = getProp("properties", FEATURE_DESC)

export default class Visor {
  constructor({ features, lines, ...DEFAULTS }) {
    this.build(DEFAULTS)
    this.resize()
    
    const [featureProp] = Object.keys(features.objects)
    const [linesProp] = Object.keys(lines.objects)
    this.baseData = feature(features, features.objects[featureProp])
    this.baseLines = mesh(lines, lines.objects[linesProp])
    
    this.renderBase()
    
    this.legend = new Legend(this.sidebar, {
      range: this.range,
      colorScale: this.colorScale
    })
    
    addEventListener('resize', () => this.onResize())
  }
  
  build(values) {
    // static elements
    this.map = select("#map").on("click", e => this.onMapClick(e))
    this.svg = this.map.append("svg")
    this.g = this.svg.append("g")
    this.gBase = this.g.append("g")
    this.gFeatures = this.g.append("g")
    this.gMonth = this.svg.append("g")
    this.gSlider = this.svg.append("g")
    this.tooltip = this.map.append("div").attr("class", "tooltip card")
    this.sidebar = this.map.append("div").attr("class", "sidebar")
    // common functions
    this.z = zoom().scaleExtent([1, 8])
    this.z.on("zoom", e => this.onZoom(e))
    this.projection = geoConicConformalSpain()
    this.timeScale = scalePoint()
    this.range = schemeGreens[5]
    this.colorScale = scaleQuantile(this.range).domain([0, 1])
    this.tick = null
    this.INTERVAL_TIME = 2000
    // variables
    this.currentMonthIx = 0
    this.currentFeatureIx = 0
    this.currentGroup = null
  }
  
  resize() {
    ({ width: this.width, height: this.height } = this.map.node().getBoundingClientRect())
    this.svg.attr("viewBox", [0, 0, this.width, this.height])
  }
  
  async reload(url) {
    const blob = await fetch(url)
    const topojson = await blob.json()
    const [prop] = Object.keys(topojson.objects)
    this.currentFeature = feature(topojson, topojson.objects[prop])

    // set the differents month-year tuples
    this.currentMonths = [
      ...new Set(
        this.currentFeature.features
          .map(({ properties: { values } }) => Object.keys(values))
          .flat()
      ),
    ]

    this.timeScale.domain(this.currentMonths)
    this.renderFeature()
    
    if (this.sidebar.nodes().length === 1) {
      this.controls = new Controls(this.sidebar, {
        play: () => this.onPlay(),
        stop: () => this.onStop()
      })
    }
    
    if (this.gSlider.nodes().length) {    
      this.slider = new Slider(this.gSlider, {
        drag: e => this.onDrag(e),
        timeScale: this.timeScale,
        height: this.height,
        width: this.width
      })
    }
  }
  
  renderBase() {
    this.projection.fitSize([this.width, this.height], this.baseData)
    
    const t = this.svg.transition().duration(this.INTERVAL_TIME * 0.9)

    const [[x0, y0], [x1, y1]] = geoPath(this.projection).bounds({
      ...this.baseData,
      features: this.baseData.features.filter(d => this.currentGroup ? getId(d) === this.currentGroup : true),
    })

    this.svg.call(this.z)
    this.svg
      .transition(t)
      .call(
        this.z.transform,
        zoomIdentity
          .translate(this.width / 2, this.height / 2)
          .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / this.width, (y1 - y0) / this.height)))
          .translate(-(x0 + x1) / 2, -(y0 + y1) / 2)
      )

    this.gBase
      .selectAll("path")
      .data(this.baseData.features, getId)
      .join(
        enter => enter
          .append("path")
          .attr("d", d => geoPath(this.projection)(d))
          .attr("cursor", "pointer")
          .on("click", (_, d) => this.onBaseClick(d))
          .on("mouseenter", e => this.onBaseMouseenter(e))
          .on("mouseleave", e => this.onBaseMouseleave(e)),
        update => update.call(update => 
          update.transition(t).attr("d", d => geoPath(this.projection)(d)))
      )
      
    //~ this.gBase
      //~ .append("path")
      //~ .datum(this.baseLines)
      //~ .attr("d", geoPath(this.projection))
      //~ .attr("fill", "none")
      //~ .attr("pointer-events", "none")
      //~ .attr("stroke", "var(--bg)")
      //~ .attr("stroke-width", 0.1)
      //~ .attr("stroke-linejoin", "round")
  }
  
  renderFeature() {
    this.projection.fitExtent(this.currentSize, this.currentFeature)

    const t = this.svg.transition().duration(this.INTERVAL_TIME * 0.9)

    this.gSlider
      .select("circle")
      .transition(t)
      .attr("cx", this.currentMonthIx * this.timeScale.step())

    this.gMonth
      .selectAll("text")
      .data(this.currentMonths.filter((_, ix) => this.currentMonthIx === ix), x => x)
      .join(
        enter => enter
          .append("text")
          .attr("x", this.width * 2)
          .attr("y", this.width < 640 ? this.height * 0.8 : this.height * 0.9)
          .attr("dy", "-1em")
          .attr("text-anchor", "end")
          .attr("dominant-baseline", "hanging")
          .attr("fill", "white")
          .attr("font-size", "2em")
          .text(d => `${formatDate(new Date(d), { month: "long" })} '${formatDate(new Date(d), { year: "2-digit" })}`)
          .call(enter => enter.transition(t).attr("x", this.width * 0.95)),
        update => update,
        exit => exit.call(exit => exit.transition(t).style("opacity", 0).attr("x", this.width * 0.5).remove())
      )

    // TODO: esto puede sobrar si no filtramos por provincias
    //~ const isFeatureActive = d => {
      //~ const { code } = ELEMENTS[currentFeatureIx]
      //~ // TODO: ojo!
      //~ return true
      //~ if (!code || !currentGroup) return true
      //~ return code === getId(d)?.substring(0, 2)
    //~ }
    
    const [[x0, y0], [x1, y1]] = geoPath(this.projection).bounds({
      ...this.currentFeature,
      features: this.currentFeature.features,
    })

    this.svg.call(this.z)
    this.svg
      .transition(t)
      .call(
        this.z.transform,
        zoomIdentity
          .translate(this.width / 2, this.height / 2)
          .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / this.width, (y1 - y0) / this.height)))
          .translate(-(x0 + x1) / 2, -(y0 + y1) / 2)
      )

    this.gFeatures
      .selectAll("path")
      .data(this.currentFeature.features.map(d => ({ ...d, activated: true })), getId)
      .join(
        enter => enter
          .append("path")
          .attr("d", d => geoPath(this.projection)(d))
          .attr("fill", "black")
          .style("vector-effect", "non-scaling-stroke")
          .style("pointer-events", "auto")
          .call(enter => enter
            .transition(t)
            .attr("fill", d => this.colorScale(getValues(d)[this.currentMonths[this.currentMonthIx]]))
          )
          .on("mouseenter", (e, feature) => this.onFeatureMouseenter(e, { feature, months: this.currentMonths }))
          .on("mouseleave", e => this.onFeatureMouseleave(e, { months: this.currentMonths })),
        update => {
          // reduce the number of transitions
          update.filter(({ activated }) => !activated)
            .attr("fill", "black")
            .style("pointer-events", "none")
          return update
            .filter(({ activated }) => !!activated)
            .call(update => update.transition(t)
              .attr("fill", d => this.colorScale(getValues(d)[this.currentMonths[this.currentMonthIx]]))
              .style("pointer-events", "auto"))
        },
        exit => exit.remove()
      )
  }
  
  onMapClick({ target }) {
    if (!this.map.selectAll("path").nodes().includes(target)) {
      // reset selections
      this.currentGroup = null
      
      this.renderBase()
    }
  }
  
  onZoom({ transform }) {
    this.g.attr("transform", transform)
  }
  
  onBaseClick(feature) {
    // search in 2nd array
    const { url, code } = URLS[1].find(x => x.code === getId(feature))
    this.currentGroup = code

    // size for the children
    this.currentSize = geoPath(this.projection).bounds({
      ...this.baseData,
      features: this.baseData.features.filter(d => getId(d) === code),
    })

    this.renderBase()

    // wait for the zoom
    setTimeout(() => {
      this.reload(url)
    }, this.INTERVAL_TIME * 0.9)
  }
  
  onBaseMouseenter({ target }) {
    const t = this.svg.transition().duration(this.INTERVAL_TIME / 4)
    select(target)
      .transition(t)
      .attr("fill", "#0dc5c1")
  }
  
  onBaseMouseleave({ target }) {
    const t = this.svg.transition().duration(this.INTERVAL_TIME / 4)
    select(target)
      .transition(t)
      .attr("fill", null)
  }
  
  onFeatureMouseenter({ pageX, pageY, target }, { feature, months }) {
    const t = this.svg.transition().duration(this.INTERVAL_TIME / 4)
    select(target)
      .raise()
      .attr("stroke-width", 5)
      .transition(t)
      .attr("fill", "#ffcaba")
      .attr("stroke", "#310234")
      
    this.tooltip
      .style("opacity", 1)
      .style("top", `${pageY}px`)
      .style("left", `${pageX}px`)
      .html(
        `${getDesc(feature)}: <em>${percent(getValues(feature)[this.currentMonths[this.currentMonthIx]])}</em>`
      )
  }
  
  onFeatureMouseleave({ target }, { months }) {
    const t = this.svg.transition().duration(this.INTERVAL_TIME / 4)
    select(target)
      .attr("stroke-width", 0)
      .attr("stroke", null)
      .transition(t)
      .attr("fill", d => this.colorScale(getValues(d)[this.currentMonths[this.currentMonthIx]]))

    this.tooltip.style("opacity", 0)
  }
  
  onResize() {
    this.resize()
    this.renderBase()
    this.slider.resize(this.width, this.height)
  }
  
  onPlay() {
    // click in play while was running
    if (this.tick !== null) {
      this.tick.stop()
      this.tick = null
      return
    }
    
    if (this.currentMonthIx === this.currentMonths.length - 1) this.currentMonthIx = 0
    
    this.tick = interval(() => {
      this.currentMonthIx++
      this.renderFeature()
      if (this.currentMonthIx === this.currentMonths.length - 1) this.tick.stop()
    }, this.INTERVAL_TIME)
  }
  
  onStop() {
    this.currentMonthIx = 0
    if (this.tick !== null) {
      this.tick.stop()
      this.tick = null
    }
    this.renderFeature()
  }
  
  onDrag(x) {
    const ix = Math.max(0, Math.min(Math.floor(x / this.timeScale.step()), this.currentMonths.length - 1))

    if (ix !== this.currentMonthIx) {
      this.currentMonthIx = ix
      this.renderFeature()
    }
  }
}
