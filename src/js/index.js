import { geoMercator, geoPath } from "d3-geo"
import { select } from "d3-selection"
import { dsv } from "d3-fetch"
import { extent } from "d3-array"
import { transition } from "d3-transition"
import { scaleQuantile } from "d3-scale"
import { schemeGreens } from "d3-scale-chromatic"
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
let width = 0
let height = 0
let i = 0
let elementSelected = 1
let { prop: topojsonProp } = ELEMENTS[elementSelected]
let csv = null

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

const legend = sidebar.append("div")
  .attr("class", "legend card")

const controls = sidebar.append("div")
  .attr("class", "controls card")

const selector = sidebar
  .append("div")
  .attr("class", "selector__container card")
  .append("select")
  .attr("class", "selector")
  .on("change", ({ target: { value }}) => {
    const ix = ELEMENTS.findIndex(x => x.value === value) || 0
    const { path, prop } = 
    topojsonProp = ELEMENTS[ix].prop
    reload(load(ELEMENTS[ix]))
  })
const options = selector.selectAll("option").data(ELEMENTS)
const optionsEnter = options.enter().append("option")
options
  .merge(optionsEnter)
  .attr("value", x => x.value)
  .attr("selected", ({ prop }) => prop === topojsonProp || null)
  .text(x => x.value)

// generators
const legendGenerator = (ranges) => {
  const formatRange = d => {
    const [start, end] = color.invertExtent(d)
    return `${percent(start)} - ${percent(end)}`
  }
  const rangeItem = d => `<div class="legend__range"><i class="legend__range-square" style="background-color: ${d}"></i>${formatRange(d)}</div>`
  
  return ranges.map(rangeItem).join("")
}
const controlsGenerator = (interval, max) => {
  let timer = null
  let btn = null
  const play = () => { 
    timer = setInterval(() => {
      if (i === max) {
        i = 0;
        btn.remove("paused");
        return clearInterval(timer);
      }
      
      return interval()
    }, INTERVAL_TIME)
  }
  const pause = () => { clearInterval(timer) }
  const stop = () => { i = 0; clearInterval(timer); interval() }
  const control = value => `<button id="${value}" class="control__button"><span class="control__button-${value}"></span></button>`

  document.addEventListener("click", ({ target }) => {
    btn = document.querySelector("#play").classList

    if (target.id === "play" && btn.contains("paused")) {
      pause()
      btn.remove("paused")
    } else if (target.id === "play") {
      play()
      btn.add("paused")
    } else if (target.id === "stop") {
      stop()
      btn.remove("paused")
    }
  })
  
  return [ "stop", "play" ].map(control).join("")
}

// map functions
const size = (fn = x => x, params = {}) => {
  ({ width: width, height: height } = map.node().getBoundingClientRect())
  svg.attr("viewBox", [0, 0, width, height])
  
  const { geojson } = params
  projection.fitSize([width,height], geojson)

  return fn(params)
}

const render = ({ geojson = {}, date }) => {
  const month = g.selectAll("text").data([date])
  const paths = g.selectAll("path").data(geojson.features)
  const pathEnter = paths.enter().append("path")
  const monthEnter = month.enter().append("text")

  paths
    .on("mouseenter", ({ pageX, pageY }, { properties: { name, values } }) => {
      styler(tooltip, { opacity: 1, top: `${pageY}px`, left: `${pageX}px` })
      tooltip.html(`${name}: <em>${percent(values[date])}</em>`)
    })
    .on("mouseleave", e => styler(tooltip, { opacity: 0 }))
    .merge(pathEnter)
    .transition()
    .duration(INTERVAL_TIME)
    .attr("d", d => geoPath(projection)(d))
    .attr("fill", ({ properties: { values } = {}} = {}) => color(values[date]))
    .attr("stroke","white")

  paths
    .exit()
    .remove()

  const text = month
    .merge(monthEnter)
    .attr("opacity", 0)
    .attr("x", width)
    .attr("fill", "white")
    .attr("font-size", "3em")
    .text(formatDate(new Date(date), { year: "numeric", month: "long" }))
    
  const { height: h } = text.node().getBoundingClientRect()
  
  text
    .attr("y", height - h)
    .transition()
    .duration(INTERVAL_TIME * 0.8)
    .attr("text-anchor", "end")
    .attr("opacity", 1)
    
  text
    .exit()
    .remove()
}

// init app
reload(load(ELEMENTS[elementSelected]), dsv(DELIMITER, REPORT, parser))

async function reload(...promises) {
  styler(loader, { "opacity": 1 })
  
  const [topojson, report] = await Promise.all(promises)
  
  if (!csv) csv = report // set the csv after the first request, from now on
  
  const data = report ?? csv // the data will be fulfilled only at the first time
  const geojson = feature(topojson, topojson.objects[topojsonProp])

  // merge geojson with csv
  geojson.features = parseFeatures(geojson.features, data)

  const months = [...new Set(data.map(({ date }) => date))].sort()

  // initial call to get sizes
  size(render, { geojson, date: months[i] })
  
  // hide spinner
  styler(loader, { "opacity": 0 })
  
  if (INTERVAL_TIME) { 
    const interval = () => render({ geojson, date: months[++i] })
    // add controls
    controls.html(controlsGenerator(interval, months.length - 1))
  }
  
  // add legend
  legend.html(legendGenerator(range))
  
  // TODO actualizar func
  //addEventListener("resize", () => size(render, { geojson, date: months[i] }))
}
