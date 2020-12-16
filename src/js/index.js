import { geoMercator, geoPath } from "d3-geo"
import { select } from "d3-selection"
import { dsv } from "d3-fetch"
import { extent } from "d3-array"
import { interval } from "d3-timer"
import { transition } from "d3-transition"
import { scaleQuantile } from "d3-scale"
import { schemeGreens } from "d3-scale-chromatic"
import { interpolate } from "d3-interpolate"
import { feature } from "topojson-client"
import { styler, percent, formatDate, parser, load, parseFeatures } from "./helpers"
import { ELEMENTS } from "./elements"

import REPORT from "url:../static/report.csv"

// constants
const INTERVAL_TIME = 1000
const DELIMITER = ";"
const projection = geoMercator()
const range = schemeGreens[5]
const color = scaleQuantile(range).domain([0, 1])

// variables
let currentMonthIx = 0
let currentFeatureIx = 0
let geojson = null
let months = null
let w = 0
let h = 0

// static elements
const map = select("#map")
const svg = map.append("svg")
const g = svg.append("g")

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
    let t = null
    if (target.id === "play") {
      t = interval(() => {
        currentMonthIx++
        render()
        if (currentMonthIx === months.length - 1) t.stop()
      }, INTERVAL_TIME)
    } else if (target.id === "stop") {
      currentMonthIx = 0
      t.stop()
    }
  })
  .append("span")
  .attr("class", d => `control__button-${d}`)

sidebar
  .append("div")
  .attr("class", "selector__container card")
  .append("select")
  .attr("class", "selector")
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
  const month = g.selectAll("text").data(months.filter((_, ix) => currentMonthIx === ix))
  const filterFeat = ({ properties: { codmun }}) => {
    const { code } = ELEMENTS[currentFeatureIx]
    if (!code) return true
    return code === codmun.substring(0, 2)
  }
  
  const features = geojson.features.filter(filterFeat)
  const paths = g.selectAll("path").data(features)
  const pathEnter = paths.enter().append("path")
  const monthEnter = month.enter().append("text")
  
  // fake zoom
  projection.fitSize([w,h], { ...geojson, features })

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

      styler(tooltip, { opacity: 1, top: `${pageY}px`, left: `${pageX}px` })
      tooltip.html(`${name}: <em>${percent(values[months[currentMonthIx]])}</em>`)
    })
    .on("mouseleave", ({ target }) => {
//      select(target)
//        .transition()
//        .duration(INTERVAL_TIME)
//        .attr("transform", null)

      styler(tooltip, { opacity: 0 })
    })
    .attr("d", d => geoPath(projection)(d))
    .attr("fill", ({ properties: { values } = {}} = {}) => color(values[months[currentMonthIx]]))
    .attr("stroke","white")
    
  paths
    .exit()
    .remove()

  const text = month
    .merge(monthEnter)
    .attr("x", w)
    .attr("fill", "white")
    .attr("font-size", "3em")
    .text(formatDate(new Date(months[currentMonthIx]), { year: "numeric", month: "long" }))
    
  const { height } = text.node().getBoundingClientRect()
  
  text
    .attr("y", h - height)
    .attr("text-anchor", "end")
    
  text
    .exit()
    .remove()
}

const resize = () => {
  ({ width: w, height: h } = map.node().getBoundingClientRect())
  svg.attr("viewBox", [0, 0, w, h])
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
reload(load(ELEMENTS[currentFeatureIx]), dsv(DELIMITER, REPORT, parser))

addEventListener("resize", () => {
  resize()
})
