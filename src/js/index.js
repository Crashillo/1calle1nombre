import { geoMercator, geoPath } from "d3-geo"
import { select } from "d3-selection"
import { dsv } from "d3-fetch"
import { extent } from "d3-array"
import { interval } from "d3-timer"
import { transition } from "d3-transition"
import { scaleQuantile } from "d3-scale"
import { schemeGreens } from "d3-scale-chromatic"
import { zoom, zoomIdentity } from "d3-zoom"
import { feature } from "topojson-client"
import { percent, formatDate, parser, parseFeatures } from "./helpers"
import { ELEMENTS } from "./elements"

import REPORT from "url:../static/report.csv"

// constants
const INTERVAL_TIME = 800
const DELIMITER = ";"
const projection = geoMercator()
const range = schemeGreens[5]
const color = scaleQuantile(range).domain([0, 1])
const z = zoom().scaleExtent([1, 8])

// variables
let currentMonthIx = 0
let currentFeatureIx = 0
let geojson = null
let months = null
let w = 0
let h = 0
let t = null

// static elements
const map = select("#map")
const svg = map.append("svg")
const gpath = svg.append("g")
const gmonth = svg.append("g")

const tooltip = map.append("div")
  .attr("class", "tooltip card")

const loader = map.append("div")
  .attr("class", "loader__container")
  .append("div")
  .attr("class", "loader")

const sidebar = map.append("div")
  .attr("class", "sidebar")

const legendRanges = sidebar.append("div")
  .attr("class", "legend card")
  .selectAll(".legend__range")
  .data(range)
  .enter()
  .append("div")
  .attr("class", "legend__range")
  
legendRanges
  .append("i")
  .attr("class", "legend__range-square")
  .style("background-color", d => d)

legendRanges
  .append("span")
  .text(d => {
    const [start, end] = color.invertExtent(d)
    return `${percent(start)} - ${percent(end)}`
  })

sidebar.append("div")
  .attr("class", "controls card")
  .selectAll("button")
  .data(["stop", "play"])
  .enter()
  .append("button")
  .attr("id", d => d)
  .attr("class", "control__button")
  .on("click", ({ target }) => {
    if (target.id === "play") {
      if (currentMonthIx === months.length - 1) currentMonthIx = 0
      t = interval(() => {
        currentMonthIx++
        render()
        if (currentMonthIx === months.length - 1) t.stop()
      }, INTERVAL_TIME)
    } else if (target.id === "stop") {
      currentMonthIx = 0
      t.stop()
      render()
    }
  })
  .append("span")
  .attr("class", d => `control__button-${d}`)

sidebar
  .append("div")
  .attr("class", "selector card")
  .append("select")
  .on("change", ({ target: { value }}) => {
    const ix = ELEMENTS.findIndex(x => x.code === value) 
    currentFeatureIx = ix < 0 ? 0 : ix
    render()
  })
  .selectAll("option")
  .data(ELEMENTS)
  .enter()
  .append("option")
  .attr("value", x => x.code)
  .attr("selected", ({ prop }) => prop === ELEMENTS[currentFeatureIx].prop || null)
  .text(x => x.value)

// map functions
const render = () => {
  const month = gmonth.selectAll("text").data(months.filter((_, ix) => currentMonthIx === ix))
  const filterFeat = ({ properties: { codmun }}) => {
    const { code } = ELEMENTS[currentFeatureIx]
    if (!code) return true
    return code === codmun.substring(0, 2)
  }
  
  const features = geojson.features.filter(filterFeat)
  const featuresIds = features.map(({ properties: { codmun } }) => codmun)
  const paths = gpath.selectAll("path").data(geojson.features)
  const pathEnter = paths.enter().append("path")
  const monthEnter = month.enter().append("text")

  const [[x0, y0], [x1, y1]] = geoPath(projection).bounds({ ...geojson, features })
  
  z.on("zoom", ({ transform }) => gpath.attr("transform", transform))
  
  svg
    .transition()
    .duration(INTERVAL_TIME)
    .call(
      z.transform,
      zoomIdentity
        .translate(w / 2, h / 2)
        .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / w, (y1 - y0) / h)))
        .translate(-(x0 + x1) / 2, -(y0 + y1) / 2)
    );

  paths
    .merge(pathEnter)
    .on("mouseenter", ({ pageX, pageY, target }, { properties: { name, values } }) => {
//      select(target)
//        .raise()
//        .transition()
//        .duration(INTERVAL_TIME)
//        .attr("transform", d => {
//          const [x, y] = geoPath(projection).centroid(d)
//          const scale = 3
//          return `translate(${-x * (scale - 1)} ${-y * (scale - 1)}) scale(${scale})`
//        })
//        .attr("stroke", "steelblue")

      tooltip
        .style("opacity", 1)
        .style("top", `${pageY}px`)
        .style("left", `${pageX}px`)
        .html(`${name}: <em>${percent(values[months[currentMonthIx]])}</em>`)
    })
    .on("mouseleave", ({ target }) => {
//      select(target)
//        .transition()
//        .duration(INTERVAL_TIME)
//        .attr("transform", null)

      tooltip.style("opacity", 0)
    })
    .attr("d", d => geoPath(projection)(d))
    .transition()
    .duration(INTERVAL_TIME)
    .attr("fill", ({ properties: { codmun, values } = {}} = {}) => featuresIds.includes(codmun) ? color(values[months[currentMonthIx]]) : "black")
    .attr("stroke", ({ properties: { codmun, values } = {}} = {}) => featuresIds.includes(codmun) ? "white" : "steelblue")
    .attr("stroke-width", 0.2)

  paths
    .exit()
    .remove()

  const text = month
    .merge(monthEnter)
    .attr("x", w)
    .attr("y", h)
    .attr("dy", "-1em")
    .attr("text-anchor", "end")
    .attr("dominant-baseline", "hanging")
    .attr("fill", "white")
    .attr("font-size", "3em")
    .text(() => {
      const date = new Date(months[currentMonthIx])
      return `${formatDate(date, { month: "long" })} '${formatDate(date, { year: "2-digit" })}`
    })

  text
    .exit()
    .remove()
}

const resize = () => {
  ({ width: w, height: h } = map.node().getBoundingClientRect())
  svg.attr("viewBox", [0, 0, w, h])
  projection.fitSize([w, h], geojson)
  render()
}

const reload = async (...promises) => {
  const [topojson, report] = await Promise.all(promises)
  geojson = feature(topojson, topojson.objects[ELEMENTS[currentFeatureIx].prop])

  // merge geojson with csv
  geojson.features = parseFeatures(geojson.features, report)
  
  // set the differents month-year tuples
  months = [...new Set(report.map(({ date }) => date))].sort()
  
  // fit & render map
  resize()
  
  // hide spinner
  loader.style("opacity", 0)
}

// init app
reload(fetch(ELEMENTS[currentFeatureIx].path).then(r => r.json()), dsv(DELIMITER, REPORT, parser))

addEventListener("resize", resize)
