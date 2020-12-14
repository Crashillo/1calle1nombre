import { geoMercator, geoPath } from "d3-geo"
import { select } from "d3-selection"
import { dsv } from "d3-fetch"
import { extent } from "d3-array"
import { transition } from "d3-transition"
import { scaleQuantile } from "d3-scale"
import { schemeGreens } from "d3-scale-chromatic"
import { feature } from "topojson-client"
import { styler, percent, formatDate, parser, Timer } from "./helpers"
import TOPOJSON_PATH from "url:../static/zamora.topo.json"
import REPORT_PATH from "url:../static/report.csv"

// constants
const INTERVAL_TIME = 200
const DELIMITER = ";"
const TOPOJSON_PROPERTY = "zamora"
const projection = geoMercator()
const range = schemeGreens[5]
const color = scaleQuantile(range).domain([0, 1])

// variables
let width = 0
let height = 0
let i = 0

// static elements
const map = select("#map")
const svg = map.append("svg")
const g = svg.append("g")
const tooltip = map.append("div").attr("class", "tooltip card")
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
  const play = () => { timer = setInterval(() => i < max ? interval() : clearInterval(timer), INTERVAL_TIME) }
  const pause = () => { clearInterval(timer) }
  const stop = () => { i = 0; clearInterval(timer); interval() }
  const control = value => `<button id="${value}" class="control__button"><span class="control__button-${value}"></span></button>`

  document.addEventListener("click", ({ target }) => {
    const btnPlay = document.querySelector("#play")

    if (target.id === "play" && btnPlay.classList.contains("paused")) {
      pause()
      btnPlay.classList.remove("paused")
    } else if (target.id === "play") {
      play()
      btnPlay.classList.add("paused")
    } else if (target.id === "stop") {
      stop()
      btnPlay.classList.remove("paused")
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
    .attr("x", width)
    .attr("fill", "white")
    .attr("font-size", "3em")
    .text(formatDate(new Date(date), { year: "2-digit", month: "short" }))
    
  const { height: h } = text.node().getBoundingClientRect()
  
  text
    .attr("y", height - h)
    .attr("text-anchor", "end")
}

// request data
Promise.all([fetch(TOPOJSON_PATH).then(r => r.json()), dsv(DELIMITER, REPORT_PATH, parser)])
  .then(([topojson, csv]) => {
    const geojson = feature(topojson, topojson.objects[TOPOJSON_PROPERTY])

    // merge geojson with csv
    geojson.features = geojson.features.map(f => {
      const { properties: { nombre: name }} = f
      const values = csv.reduce((acc, { name: dname, date, result }) => {
        if (dname === name) {
          acc[date] = result
        }
        
        return acc
      }, {})

      return { ...f, properties: { ...f.properties, name, values }}
    })

    const months = [... new Set(csv.map(({ date }) => date))].sort()

    // initial call to get sizes
    size(render, { geojson, date: months[i] })
    // display the legend and controls
    const sidebar = map.append("div").attr("class", "sidebar")
    sidebar.append("div").attr("class", "legend card").html(legendGenerator(range))
    
    if (INTERVAL_TIME) { 
      const interval = () => render({ geojson, date: months[i++] })
      // display the controls
      sidebar.append("div").attr("class", "controls card").html(controlsGenerator(interval, months.length))
    }
    
    addEventListener("resize", () => size(render, { geojson, date: months[i] }))
  })
