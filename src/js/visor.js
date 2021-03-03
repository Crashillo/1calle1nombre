import { geoPath } from "d3-geo"
import { select } from "d3-selection"
import { interval } from "d3-timer"
import { transition } from "d3-transition"
import { scaleQuantile, scalePoint } from "d3-scale"
import { schemeGreens } from "d3-scale-chromatic"
import { zoom, zoomIdentity } from "d3-zoom"
import { geoConicConformalSpain } from "d3-composite-projections"
import { feature, mesh } from "topojson-client"
import { percent, getProp, formatDate } from "./helpers"
import { URLS, FEATURE_ID, FEATURE_VALUES, FEATURE_DESC } from "./config"
import Legend from "./legend"
import Controls from "./controls"
import Slider from "./slider"
import Tooltip from "./tooltip"
import Theme from "./theme"

// helpers
const getId = getProp("properties", FEATURE_ID)
const getValues = getProp("properties", FEATURE_VALUES)
const getDesc = getProp("properties", FEATURE_DESC)

export default class Visor {
  constructor({ features, lines }) {
    this.build()
    this.resize()
    
    const [featureProp] = Object.keys(features.objects)
    const [linesProp] = Object.keys(lines.objects)
    this.baseData = feature(features, features.objects[featureProp])
    this.baseLines = mesh(lines, lines.objects[linesProp], (a, b) => a !== b)
    
    this.renderBase()
    
    this.legend = new Legend(this.sidebar, {
      range: this.range,
      colorScale: this.colorScale
    })
    
    this.tooltip = new Tooltip(this.map, {
      content: e => this.onTooltipContent(e)
    })
    
    new Theme(this.sidebar)
    
    addEventListener("resize", () => this.onResize())
  }
  
  build() {
    // static elements
    this.map = select("#map")
    this.svg = this.map.append("svg").attr("preserveAspectRatio", "xMinYMin meet").on("click", e => this.onMapClick(e))
    this.g = this.svg.append("g")
    this.gBase = this.g.append("g")
    this.gFeatures = this.g.append("g")
    this.gSlider = this.svg.append("g")
    this.sidebar = this.map.append("div").attr("class", "sidebar")
    // common functions
    this.z = zoom().scaleExtent([1, 40])
    this.z.on("zoom", e => this.onZoom(e))
    this.projection = geoConicConformalSpain()
    this.timeScale = scalePoint()
    this.range = schemeGreens[9]
    this.colorScale = scaleQuantile(this.range).domain([0, 1])
    this.tick = null
    this.INTERVAL_TIME = 1500
    this.marginBase = 0.02
    // variables
    this.currentMonthIx = 0
    //~ this.currentFeatureIx = 0
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
    ].sort()
    // set the most up to date month
    this.currentMonthIx = this.currentMonths.length - 1
    
    if (!this.controls) {
      this.controls = new Controls(this.sidebar, {
        play: () => this.onPlay(),
        stop: () => this.onStop()
      })
    }
    
    if (!this.slider) {
      this.slider = new Slider(this.gSlider, {
        drag: e => this.onDrag(e),
        timeScale: this.timeScale,
        container: this.svg,
        speed: this.INTERVAL_TIME
      })
    }
    
    this.timeScale.domain(this.currentMonths)
    this.renderFeature()
  }
  
  renderBase() {
    const ne = [this.width * this.marginBase, this.height * this.marginBase]
    const sw = [this.width * (1 - this.marginBase), this.height * (1 - this.marginBase)]
    this.projection.fitExtent([ne, sw], this.baseData)
    
    const t = transition().duration(this.INTERVAL_TIME * 0.9)

    const [[x0, y0], [x1, y1]] = geoPath(this.projection).bounds({
      ...this.baseData,
      features: this.baseData.features.filter(d => !this.currentGroup || getId(d) === this.currentGroup),
    })
    
    this.currentSize = [[x0, y0], [x1, y1]]

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
          .attr("d", geoPath(this.projection))
          .attr("cursor", "pointer")
          .on("click", (_, d) => this.onBaseClick(d))
          .on("mouseenter", e => this.onBaseMouseenter(e))
          .on("mouseleave", e => this.onBaseMouseleave(e)),
        update => update.call(update => update.transition(t).attr("d", geoPath(this.projection)))
      )
      
    this.gBase
      .append("path")
      .datum(this.baseLines)
      .attr("d", geoPath(this.projection))
      .attr("fill", "none")
      .attr("stroke", "var(--bg)")
      .attr("stroke-width", 0.25)
      .attr("stroke-linejoin", "round")
      .style("pointer-events", "none")
  }
  
  renderFeature() {
    this.projection.fitExtent(this.currentSize, this.currentFeature)
    // update slider, if any   
    this.slider?.render({ month: this.currentMonthIx, months: this.currentMonths })

    // TODO: esto puede sobrar si no filtramos por provincias
    //~ const isFeatureActive = d => {
    //~ const { code } = ELEMENTS[currentFeatureIx]
    //~ if (!code || !currentGroup) return true
    //~ return code === getId(d)?.substring(0, 2)
    //~ }
    
    const t = transition().duration(this.INTERVAL_TIME * 0.9)
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
          .attr("d", geoPath(this.projection))
          .attr("fill", "#000")
          .attr("stroke", "#000")
          .attr("stroke-alignment", "inner")
          .style("vector-effect", "non-scaling-stroke")
          .style("pointer-events", "auto")
          .call(enter => enter
            .transition(t)
            .attr("fill", d => this.colorScale(getValues(d)[this.currentMonths[this.currentMonthIx]] || 0 ))
            .attr("stroke", d => this.colorScale(getValues(d)[this.currentMonths[this.currentMonthIx]] || 0))
          )
          .on("mouseenter", (e, feature) => this.onFeatureMouseenter(e, { feature, months: this.currentMonths }))
          .on("mouseleave", e => this.onFeatureMouseleave(e, { months: this.currentMonths }))
          .on("click", e => this.onFeatureClick(e, { months: this.currentMonths })),
        update => {
          // reduce the number of transitions
          update.filter(({ activated }) => !activated)
            .attr("d", geoPath(this.projection))
            .attr("fill", "#000")
            .style("pointer-events", "none")
          return update
            .filter(({ activated }) => !!activated)
            .call(update => update.transition(t)
              .attr("d", geoPath(this.projection))
              .attr("fill", d => this.colorScale(getValues(d)[this.currentMonths[this.currentMonthIx]] || 0))
              .attr("stroke", d => this.colorScale(getValues(d)[this.currentMonths[this.currentMonthIx]] || 0))
              .style("pointer-events", "auto"))
        },
        exit => exit.call(exit => exit.transition(t).attr("fill", "#000").remove())
      )
  }
  
  onMapClick({ target }) {
    if (this.svg.node() === target) {
      this.svg
        .transition()
        .duration(this.INTERVAL_TIME * 0.9)
        .call(
          this.z.transform,
          zoomIdentity
        )
    }
  }
  
  onZoom({ transform }) {
    this.g.attr("transform", transform)
  }
  
  onBaseClick(feature) {
    // search in 2nd array
    const { url, code } = URLS[1].find(x => x.code === getId(feature))
    this.currentGroup = code

    this.renderBase()
    this.reload(url)
  }
  
  onBaseMouseenter({ target }) {
    select(target)
      .attr("fill", "#000")
      .transition("mouse")
      .duration(this.INTERVAL_TIME / 4)
      .attr("fill", "#0dc5c1")
  }
  
  onBaseMouseleave({ target }) {
    select(target)
      .transition("mouse")
      .duration(this.INTERVAL_TIME / 4)
      .attr("fill", "#000")
  }
  
  onFeatureMouseenter(event, data) {
    select(event.target)
      .raise()
      .attr("stroke-width", 5)
      .transition("mouse")
      .duration(this.INTERVAL_TIME / 4)
      .attr("fill", "#ffcaba")
      .attr("stroke", "#310234")
      
    this.tooltip.show(event, data)
  }
  
  onFeatureMouseleave({ target }, { months }) {
    select(target)
      .attr("stroke-width", 0)
      .attr("stroke", "#000")
      .transition("mouse")
      .duration(this.INTERVAL_TIME / 4)
      .attr("fill", d => this.colorScale(getValues(d)[months[this.currentMonthIx]] || 0))
      .attr("stroke", d => this.colorScale(getValues(d)[months[this.currentMonthIx]] || 0))
      
    this.tooltip.hide()
  }
  
  onFeatureClick() {
    this.renderFeature()
  }
  
  onResize() {
    this.resize()
    this.renderBase()
    if (this.currentFeature) {
      this.renderFeature()
    }
  }
  
  onPlay() {
    // click in play while was running
    if (this.tick !== null) {
      this.tick.stop()
      this.tick = null
      this.controls.stop()
      return
    }
    
    if (this.currentMonthIx === this.currentMonths.length - 1) {
      this.currentMonthIx = 0
      this.renderFeature()
    }
    
    this.tick = interval(() => {
      this.currentMonthIx++
      this.renderFeature()
      if (this.currentMonthIx === this.currentMonths.length - 1) {
        this.tick.stop()
        this.controls.stop()
      }
    }, this.INTERVAL_TIME)
  }
  
  onStop() {
    this.currentMonthIx = this.currentMonths.length - 1
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
  
  onTooltipContent({ feature, months: m }) {
    const months = m.slice(-12) // last year
    const tr = row => `<tr><td>${formatDate(new Date(row), { month: "short", year: "2-digit" })}</td><td>${percent(getValues(feature)[row]) || "--"}</td></tr>`
    const caption = `<caption>${getDesc(feature)}</caption>`
    const thead = `<thead><th>Mes</th><th>%</th></thead>`
    return `<table>${caption}${thead}<tbody>${months.map(m => tr(m)).join("")}</tbody></table>`
  }
}
