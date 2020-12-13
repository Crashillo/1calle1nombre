import { geoMercator, geoPath } from "d3-geo"
import { select } from "d3-selection"
import { dsv } from "d3-fetch"
import { extent } from "d3-array"
import { transition } from "d3-transition"
import { scaleQuantile } from "d3-scale"
import { schemeGreens } from "d3-scale-chromatic"
import { feature } from "topojson-client"
import TOPOJSON_PATH from "url:../static/cyl.topo.json"
import REPORT_PATH from "url:../static/report.csv"

// constants
const INTERVAL_TIME = 1000
const DELIMITER = ";"
const TOPOJSON_PROPERTY = "cyl"
const projection = geoMercator()
const range = schemeGreens[5]
const color = scaleQuantile(range).domain([0, 1])

// variables
let width = 0
let height = 0

// helpers
const styler = (node, style = {}) => {
  Object.entries(style).forEach(([prop,val]) => node.style(prop,val))
  return node
}
const percent = (num = 0) => num.toLocaleString(undefined, { style: "percent" })
const formatDate = (date = new Date(), opts = {}) => date.toLocaleDateString(undefined, opts)
const parser = ({ name, a, b, date }) => ({ name, result: +b !== 0 ? 1 - (+a/+b) : 0, date })

// static elements
const map = select("#map")
const svg = map.append("svg")
const gpath = svg.append("g")
const glegend = svg.append("g")
const gmonth = svg.append("g")
const tooltip = map.append("div").attr("class", "tooltip")

// map functions
const size = (fn = x => x, params = {}) => {
  ({ width: width, height: height } = map.node().getBoundingClientRect())
  svg.attr("viewBox", [0, 0, width, height])
  
  const { geojson } = params
  projection.fitSize([width,height], geojson)

  return fn(params)
}

const render = ({ geojson = {}, date }) => {
  const paths = gpath.selectAll("path").data(geojson.features)
  const legend = glegend.selectAll("rect").data(range)
  const month = gmonth.selectAll("text").data([date])
  const monthEnter = month.enter().append("text")
  const rectEnter = legend.enter().append("rect")
  const textEnter = legend.enter().append("text")
  const pathEnter = paths.enter().append("path")
  
  legend
    .merge(rectEnter)
    .transition()
    .attr("width", "1em")
    .attr("height", "1em")
    .attr("x", width * 0.9)
    .attr("y", (_, i) => `${1.2 * i}em`)
    .attr("fill", d => d)
    .attr("transform", "translate(0 30)")
  
  legend
    .merge(textEnter)
    .transition()
    .attr("dominant-baseline", "hanging")
    .attr("x", width * 0.9)
    .attr("y", (_, i) => `${1.2 * i}em`)
    .attr("dx", "1.2em")
    .attr("transform", "translate(0 30)")
    .text(d => {
      const [start, end] = color.invertExtent(d)
      return `${percent(start)} - ${percent(end)}`
    })
    
  legend
    .exit()
    .remove()

  month
    .merge(monthEnter)
    .transition()
    .attr("x", width * 0.85)
    .attr("dominant-baseline", "hanging")
    .attr("font-size", "3em")
    .attr("text-anchor", "end")
    .attr("transform", "translate(0 30)")
    .text(() => formatDate(new Date(date), { year: "2-digit", month: "short" }))

  paths
    .on("mouseenter", ({ pageX, pageY }, { properties: { name, values } }) => {
      styler(tooltip, { opacity: 1, top: `${pageY}px`, left: `${pageX}px` })
      tooltip.html(`${name}: <em>${percent(values[date])}</em>`)
    })
    .on("mouseleave", e => styler(tooltip, { opacity: 0 }))
    .merge(pathEnter)
    .transition()
    .attr("d", d => geoPath(projection)(d))
    .attr("fill", ({ properties: { values } = {}} = {}) => color(values[date]))
    .attr("stroke","white")

  paths
    .exit()
    .remove()
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

    let i = 0
    // initial call to get sizes
    size(render, { geojson, date: months[i] })
    
    if (INTERVAL_TIME) {
      const interval = setInterval(() => {
        render({ geojson, date: months[i++] })
        if (i >= months.length) clearInterval(interval)
      }, INTERVAL_TIME)
    }
    
    window.addEventListener("resize", () => size(render, { geojson, date: months[i] }))
  })
