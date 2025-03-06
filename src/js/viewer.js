import { geoPath, select, extent, interval, transition, scaleThreshold, scalePoint, schemeGreens, zoom, zoomIdentity } from "d3"
import { geoConicConformalSpain } from "d3-composite-projections"
import { feature, mesh } from "topojson-client"
import { percent, formatDate, getMonthRange, getId, getDesc, getClosestValue } from "./helpers"
import { infoBtn, githubBtn } from "./icons"
import { URLS } from "./config"
import Legend from "./legend"
import Controls from "./controls"
import Slider from "./slider"
import Tooltip from "./tooltip"

export default class Visor {
  constructor(props) {
    this.props = props

    this.build()
    this.resize()

    this.tooltip = new Tooltip(this.map, {
      content: e => {
        const key = [e.feature.properties.id, e.current].join("--")
        if (this.tooltipCached.has(key)) {
          return this.tooltipCached.get(key)
        }

        const tooltip = this.onTooltipContent(e)
        this.tooltipCached.set(key, tooltip)

        return tooltip
      }
    })

    this.sidebar
      .append("div")
      .attr("class", "info card")
      .append("a")
      .attr("class", "control-button")
      .attr("href", "https://github.com/Crashillo/1calle1nombre")
      .attr("target", "_blank")
      .html(githubBtn)

    this.sidebar
      .append("div")
      .attr("class", "info card")
      .append("a")
      .attr("class", "control-button")
      .attr("href", "https://wiki.openstreetmap.org/wiki/ES:Espa%C3%B1a/1Calle1Nombre")
      .attr("target", "_blank")
      .html(infoBtn)

    addEventListener("resize", () => this.onResize())
  }

  build() {
    // static elements
    this.map = select("#map")
    this.svg = this.map.append("svg").attr("preserveAspectRatio", "xMinYMin meet").on("click", e => this.onMapClick(e))
    this.g = this.svg.append("g")
    this.gSlider = this.svg.append("g")
    this.sidebar = this.map.append("div").attr("class", "sidebar")
    this.gAttribution = this.map.append("div").attr("class", "attribution")
      .html("&copy; <a href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\">OpenStreetMap</a> contributors")

    // common functions
    this.z = zoom().scaleExtent([1, 40])
    this.z.on("zoom", e => this.onZoom(e))
    this.projection = geoConicConformalSpain()
    this.timeScale = scalePoint()
    this.range = schemeGreens[9]
    this.colorScale = scaleThreshold(this.range).domain([0.25, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95, 0.99, 1])
    this.tick = null
    this.INTERVAL_TIME = 500
    this.MARGIN_BASE = 0.02

    // performance
    this.urlCached = new Map()
    this.tooltipCached = new Map()
  }

  resize() {
    ({ width: this.width, height: this.height } = this.map.node().getBoundingClientRect())
    this.svg.attr("viewBox", [0, 0, this.width, this.height])
  }

  load(features) {
    const [featureProp] = Object.keys(features.objects)

    this.currentFeature = feature(features, features.objects[featureProp])
    this.currentLines = mesh(features, features.objects[featureProp])

    // store original
    this.urlCached.set(URLS[0].url, [this.currentFeature, this.currentLines])

    // set all possible month-year dates, from the earliest date
    const [a, b] = extent(this.currentFeature.features.flatMap(({ properties: { values } }) => Object.keys(values)))
    this.currentMonths = getMonthRange(a, b).map(x => x.toISOString().substring(0, 10))

    // in case no changes were made for the current month
    // const yyyymm = this.props.build.slice(0, 7)
    // if (!this.currentMonths.includes(`${yyyymm}-01`)) {
    //   console.info("No changes for the current month, pushed manually")
    //   this.currentMonths.push(`${yyyymm}-01`)
    // }

    // set the most up to date month
    this.currentMonthIx = this.currentMonths.length - 1

    this.timeScale.domain(this.currentMonths)

    if (!this.legend) {
      this.legend = new Legend(this.sidebar, {
        range: this.range,
        colorScale: this.colorScale,
        svg: this.svg,
        setColor: this.setColor
      })

      this.legend.render()
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

    this.renderFeature()
  }

  async reload(url) {
    if (!this.urlCached.has(url)) {
      const topojson = await fetch(url).then(r => r.json())
      const [prop] = Object.keys(topojson.objects)

      this.parentLines = this.currentLines

      this.currentFeature = feature(topojson, topojson.objects[prop])
      this.currentLines = mesh(topojson, topojson.objects[prop])
      this.urlCached.set(url, [this.currentFeature, this.currentLines])
    } else {
      const [feature, lines] = this.urlCached.get(url)
      this.currentFeature = feature
      this.currentLines = lines
    }

    this.renderFeature()
  }

  renderFeature() {
    const ne = [this.width * this.MARGIN_BASE, this.height * this.MARGIN_BASE]
    const sw = [this.width * (1 - this.MARGIN_BASE), this.height * (1 - this.MARGIN_BASE)]

    this.projection.fitExtent([ne, sw], this.currentFeature)

    const t = transition().duration(this.INTERVAL_TIME * 0.9)

    if (this.currentFeature) {
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
    }

    this.g
      .selectAll("path")
      .data(this.currentFeature.features, getId)
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
          .on("mouseenter", (e, feature) => this.onMouseenter(e, { feature, months: this.currentMonths, current: this.currentMonths[this.currentMonthIx] }))
          .on("mouseleave", e => this.onMouseleave(e))
          .on("click", (_, d) => this.onFeatureClick(d))
          .on("legend-mouseenter", (e, d) => {
            const [start = 0, end] = e.detail
            const value = getClosestValue({ feature: d, months: this.currentMonths, i: this.currentMonthIx })
            return select(e.target)
              .transition("mouse")
              .filter(() => (start <= value && end >= value))
              .attr("fill", "var(--heading)")
          })
          .on("legend-mouseleave", (e) => select(e.target).transition("mouse").attr("fill", d => this.setColor(d))),
        update => update
          .call(update => update
            .transition(t)
            .attr("d", geoPath(this.projection))
            .attr("fill", d => this.setColor(d))
            .attr("stroke", d => this.setColor(d))
            .style("pointer-events", "auto")),
        exit => exit
          .call(exit => exit.attr("stroke", "none")
            .transition(t)
            .attr("fill-opacity", 0)
            .remove())
      )

    this.g
      .append("path")
      .datum(this.currentLines)
      .attr("id", "current-lines")
      .attr("d", geoPath(this.projection))
      .attr("fill", "none")
      .attr("stroke", "var(--bg)")
      .attr("stroke-width", 0.5)
      .attr("stroke-linejoin", "round")
      .style("pointer-events", "none")

    this.g
      .append("path")
      .datum(this.parentLines)
      .attr("id", "parent-lines")
      .attr("d", geoPath(this.projection))
      .attr("fill", "none")
      .attr("stroke", "var(--color)")
      .attr("stroke-width", 0.5)
      .attr("stroke-linejoin", "round")
      .style("pointer-events", "none")
  }

  setColor(feature) {
    return this.colorScale(getClosestValue({ feature, months: this.currentMonths, i: this.currentMonthIx }) || 0)
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

      // reset to default (ES)
      const [feature, lines] = this.urlCached.get(URLS[0].url)
      this.currentFeature = feature
      this.currentLines = lines
      this.parentLines = undefined

      this.renderFeature()
    }
  }

  onZoom({ transform }) {
    this.g.attr("transform", transform)
  }

  onFeatureClick(feature) {
    const code = getId(feature)
    const { url, lines } = URLS.find(x => x.code === code) || {}

    if (!url) return

    this.reload(url, lines)
  }

  onMouseenter(event, data) {
    select(event.target)
      .transition("mouse")
      .duration(this.INTERVAL_TIME / 4)
      .attr("fill", "var(--heading)")

    this.tooltip.show(event, data)
  }

  onMouseleave({ target }) {
    select(target)
      .transition("mouse")
      .duration(this.INTERVAL_TIME / 4)
      .attr("fill", d => this.setColor(d))

    this.tooltip.hide()
  }

  onResize() {
    this.resize()
    this.renderFeature()
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
      this.renderFeature()
    }

    this.tick = interval(() => {
      this.currentMonthIx++
      this.renderFeature()

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
    this.renderFeature()
  }

  onDrag(x) {
    const ix = Math.max(0, Math.min(Math.floor(x / this.timeScale.step()), this.currentMonths.length - 1))

    if (ix !== this.currentMonthIx) {
      this.currentMonthIx = ix
      this.renderFeature()
      this.slider.render({ index: this.currentMonthIx, months: this.currentMonths })
    }
  }

  onTooltipContent({ feature, months, current }) {
    const dateCell = cell => formatDate(new Date(cell), { month: "short", year: "2-digit" })
    const valueCell = cell => percent(getClosestValue({ feature, months, i: months.indexOf(cell) })) || "--"
    const tr = (row, isCurrent) => `<tr ${isCurrent ? "class=\"current\"" : ""}><td>${dateCell(row)}</td><td>${valueCell(row)}</td></tr>`
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
