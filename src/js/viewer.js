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
import { URLS, FEATURE_ID, FEATURE_VALUES, FEATURE_DESC, FEATURE_CODE } from "./config"
import Legend from "./legend"
import Controls from "./controls"
import Slider from "./slider"
import Tooltip from "./tooltip"
import Theme from "./theme"

// helpers
const getId = getProp("properties", FEATURE_ID)
const getValues = getProp("properties", FEATURE_VALUES)
const getDesc = getProp("properties", FEATURE_DESC)
const getCode = getProp("properties", FEATURE_CODE)

export default class Visor {
  constructor() {
    this.build()
    this.resize()

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
    this.gAttribution = this.map.append("div").attr("class", "attribution")
      .html('&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors')
    // common functions
    this.z = zoom().scaleExtent([1, 40])
    this.z.on("zoom", e => this.onZoom(e))
    this.projection = geoConicConformalSpain()
    this.timeScale = scalePoint()
    this.range = schemeGreens[9]
    this.colorScale = scaleQuantile(this.range)
    this.tick = null
    this.INTERVAL_TIME = 1500
    this.marginBase = 0.02
    // variables
    this.currentGroup = null
    this.currentCode = null
  }
  
  resize() {
    ({ width: this.width, height: this.height } = this.map.node().getBoundingClientRect())
    this.svg.attr("viewBox", [0, 0, this.width, this.height])
  }

  load({ features, lines }) {
    const [featureProp] = Object.keys(features.objects)
    const [linesProp] = Object.keys(lines.objects)
    this.baseData = feature(features, features.objects[featureProp])
    this.baseLines = mesh(lines, lines.objects[linesProp], (a, b) => a !== b)

    // set the differents month-year tuples
    this.currentMonths = [
      ...new Set(this.baseData.features.flatMap(({ properties: { values } }) => Object.keys(values)))
    ].sort()

    // set the most up to date month
    this.currentMonthIx = this.currentMonths.length - 1
    
    this.timeScale.domain(this.currentMonths)

    if (!this.legend) {
      this.legend = new Legend(this.sidebar, {
        range: this.range,
        colorScale: this.colorScale
      })
    }
    
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

      this.slider.render({ index: this.currentMonthIx, months: this.currentMonths })
    }
    
    this.renderBase()
  }
  
  async reload(url) {
    const blob = await fetch(url)
    const topojson = await blob.json()
    const [prop] = Object.keys(topojson.objects)
    this.currentFeature = feature(topojson, topojson.objects[prop])

    this.renderFeature()
  }
  
  renderBase() {
    const ne = [this.width * this.marginBase, this.height * this.marginBase]
    const sw = [this.width * (1 - this.marginBase), this.height * (1 - this.marginBase)]
    this.projection.fitExtent([ne, sw], this.baseData)

    this.setLegend(this.baseData.features)

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
          .attr("fill-opacity", 1)
          .on("click", (_, d) => this.onBaseClick(d))
          .call(enter => enter
            .transition(t)
            .attr("fill", d => this.setColor(d))
          )
          .on("mouseenter", (e, feature) => this.onBaseMouseenter(e, { feature, months: this.currentMonths, current: this.currentMonths[this.currentMonthIx] }))
          .on("mouseleave", e => this.onBaseMouseleave(e)),
        update => {
          if (this.currentGroup) {
            update
              .transition(t)
              .attr("fill-opacity", 0.2)
              .attr("fill", "#000")
              .style("pointer-events", "none")
          } else {
            update.call(update => update
              .transition(t)
              .attr("d", geoPath(this.projection))
              .attr("fill", d => this.setColor(d))
              .attr("fill-opacity", 1)
              .style("pointer-events", "auto")
            )
          }
        }
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

    const isFeatureActive = d => {
      if (!this.currentCode) return true
      return this.currentCode === getCode(d)
    }
    
    const t = transition().duration(this.INTERVAL_TIME * 0.9)

    if (this.currentFeature) {
      const subset = this.currentFeature.features.filter(isFeatureActive)
      this.setLegend(subset)
    
      const [[x0, y0], [x1, y1]] = geoPath(this.projection).bounds({
        ...this.currentFeature,
        features: subset,
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
    }

    this.gFeatures
      .selectAll("path")
      .data(this.currentFeature ? this.currentFeature.features.map(d => ({ ...d, activated: isFeatureActive(d) })) : [], getId)
      .join(
        enter => enter
          .append("path")
          .attr("d", geoPath(this.projection))
          .attr("fill", "#000")
          .attr("stroke", "#000")
          .attr("stroke-alignment", "inner")
          .attr("cursor", "pointer")
          .style("vector-effect", "non-scaling-stroke")
          .style("pointer-events", "auto")
          .call(enter => enter
            .transition(t)
            .attr("fill", d => this.setColor(d))
            .attr("stroke", d => this.setColor(d))
          )
          .on("mouseenter", (e, feature) => this.onFeatureMouseenter(e, { feature, months: this.currentMonths, current: this.currentMonths[this.currentMonthIx] }))
          .on("mouseleave", e => this.onFeatureMouseleave(e))
          .on("click", (e, feature) => this.onFeatureClick(e, { feature })),
        update => {
          // reduce the number of transitions
          update.filter(({ activated }) => !activated)
            .attr("d", geoPath(this.projection))
            .attr("fill", "#000")
            .attr("stroke", "var(--bg)")
            .style("pointer-events", "none")

          return update
            .filter(({ activated }) => !!activated)
            .filter(d => {
              const [current, previous] = [this.currentMonths[this.currentMonthIx], this.currentMonths[this.currentMonthIx-1]]
              const values = getValues(d)

              return values[current] !== values[previous]
            })
            .call(update => update
              .transition(t)
              .attr("d", geoPath(this.projection))
              .attr("fill", d => this.setColor(d))
              .attr("stroke", d => this.setColor(d))
              .style("pointer-events", "auto"))
        },
        exit => exit.call(exit => exit.attr("stroke", "none").transition(t).attr("fill-opacity", 0).remove())
      )
  }

  setColor(feature) {
    return this.colorScale(getValues(feature)[this.currentMonths[this.currentMonthIx]] || 0)
  }

  setLegend(features) {
    const values = features.flatMap(({ properties: { values } }) => Object.values(values))
    const [min, max] = [ Math.max(0, Math.min(...values)), Math.min(0.99, Math.max(...values)) ]
    this.colorScale.domain([ ...Array.from({ length: this.range.length - 1 }, (_, i) => min + (i * ((max - min) / (this.range.length - 2)))), 1 ])
    this.legend.render()
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

      this.currentGroup = null
      this.renderBase()
      this.currentFeature = null
      this.renderFeature()
      this.legend.render()
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
  
  onBaseMouseenter(event, data) {
    select(event.target)
      .transition("mouse")
      .duration(this.INTERVAL_TIME / 4)
      .attr("fill", "#0dc5c1")

    this.tooltip.show(event, data)
  }
  
  onBaseMouseleave({ target }) {
    select(target)
      .transition("mouse")
      .duration(this.INTERVAL_TIME / 4)
      .attr("fill", d => this.setColor(d))

    this.tooltip.hide()
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
  
  onFeatureMouseleave({ target }) {
    select(target)
      .attr("stroke-width", 0)
      .attr("stroke", "#000")
      .transition("mouse")
      .duration(this.INTERVAL_TIME / 4)
      .attr("fill", d => this.setColor(d))
      .attr("stroke", d => this.setColor(d))
      
    this.tooltip.hide()
  }
  
  onFeatureClick(_, { feature }) {
    this.currentCode = getCode(feature)
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
      this.slider.render({ index: this.currentMonthIx, months: this.currentMonths })
      this.currentFeature ? this.renderFeature() : this.renderBase()
    }
    
    this.tick = interval(() => {
      this.currentMonthIx++
      this.currentFeature ? this.renderFeature() : this.renderBase()

      this.slider.render({ index: this.currentMonthIx, months: this.currentMonths })

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

    this.slider.render({ index: this.currentMonthIx, months: this.currentMonths })
    this.currentFeature ? this.renderFeature() : this.renderBase()
  }
  
  onDrag(x) {
    const ix = Math.max(0, Math.min(Math.floor(x / this.timeScale.step()), this.currentMonths.length - 1))

    if (ix !== this.currentMonthIx) {
      this.currentMonthIx = ix
      this.currentFeature ? this.renderFeature() : this.renderBase()
      this.slider.render({ index: this.currentMonthIx, months: this.currentMonths })
    }
  }
  
  onTooltipContent({ feature, months, current }) {
    const dateCell = cell => formatDate(new Date(cell), { month: "short", year: "2-digit" })
    const valueCell = cell => percent(getValues(feature)[cell]) || "--"
    const tr = (row, isCurrent) => `<tr ${isCurrent ? "class=\"current\"": ""}><td>${dateCell(row)}</td><td>${valueCell(row)}</td></tr>`
    const caption = `<caption>${getDesc(feature)}</caption>`
    const thead = "<thead><th>Mes</th><th>%</th></thead>"
    const ellipsis = "<tr><td colspan=\"2\">...</td></tr>"
    const table = content => `<table>${caption}${thead}<tbody>${content}</tbody></table>`
        
    let content = ""
    if (!months.slice(-6).includes(current)) {
      content = `${ellipsis}${tr(current, true)}${ellipsis}${months.slice(-3).map(m => tr(m, current === m)).join("")}`
    } else {
      content = months.slice(-6).map(m => tr(m, current === m)).join("")
    }

    return table(content)
  }
}
