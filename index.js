import { geoMercator, geoPath } from "d3-geo"
import { select } from "d3-selection"
import { dsv } from "d3-fetch"
import { extent } from "d3-array"
import { transition } from "d3-transition"
import { scaleQuantile } from "d3-scale"
import { schemeGreens } from "d3-scale-chromatic"
import { feature } from "topojson-client"
import data from "./data/valladolid.topo.json"

// constants
const INTERVAL_TIME = 1000
const DELIMITER = ";"
const REPORT_PATH = "./data/report.csv"

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
const parser = ({ name, a, b, date: d }) => ({ name, result: +b !== 0 ? 1 - (+a/+b) : 0, date: new Date(d) })

// projections
const projection = geoMercator()
const path = geoPath(projection)
const feat = feature(data, data.objects.valladolid)

// static elements
const map = styler(select("#map"), { width: "100%", height: "100%" })
const svg = map.append("svg")
const gi = svg.append("g") //mitems
const gl = svg.append("g") //legend
const gm = svg.append("g") //month
const tooltip = styler(map.append("div"), {
  opacity: 0,
  position: "absolute",
  background: "#fff",
  border: "1px solid #eee",
  padding: "5px",
  "box-shadow": "0px 0px 10px 0px rgba(0,0,0,0.75)",
  "border-radius": "5px",
  "transition": "opacity 250ms"
})

// render functions
const size = (fn = x => x) => {
  ({ width: width, height: height } = map.node().getBoundingClientRect())
  svg.attr("viewBox", [0, 0, width, height])
  projection.fitSize([width,height], feat);

  return fn()
}

const render = (data = [], { year: currentYear = 0, month: currentMonth = 0 } = {}) => {
  const { features } = feat
  // merge geodata with csvdata
  const edited = features.map(f => {
    const { properties: { nombre }} = f
    const match = data.find(({ name, date }) => name === nombre && date.getMonth() === currentMonth && date.getFullYear() === currentYear)

    return { ...f, properties: { ...f.properties, ...match }}
  })

  feat.features = edited

  const range = schemeGreens[5]
  const color = scaleQuantile(range).domain(extent(data, ({ result }) => result))
  
  // draw elements
  const items = gi.selectAll("path").data(feat.features)
  const legend = gl.selectAll("rect").data(range)
  const month = gm.selectAll("text").data([{ currentYear, currentMonth }])
  const monthEnter = month.enter().append("text")
  const rectEnter = legend.enter().append("rect")
  const textEnter = legend.enter().append("text")
  const pathEnter = items.enter().append("path")
  
  legend
    .merge(rectEnter)
    .transition()
    .attr("width", "1em")
    .attr("height", "1em")
    .attr("x", width * 0.8)
    .attr("y", (_, i) => `${1.2 * i}em`)
    .attr("fill", d => d)
    .attr("transform", "translate(0 30)")
  
  legend
    .merge(textEnter)
    .transition()
    .attr("dominant-baseline", "hanging")
    .attr("x", width * 0.8)
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
    .attr("x", width * 0.75)
    .attr("dominant-baseline", "hanging")
    .attr("font-size", "3em")
    .attr("text-anchor", "end")
    .attr("transform", "translate(0 30)")
    .text(({ currentYear, currentMonth }) => {
      const date = new Date()
      date.setMonth(currentMonth)
      date.setFullYear(currentYear)
      return formatDate(date, { year: "2-digit", month: "short" })
    })

  items
    .on("mouseenter", ({ pageX, pageY }, { properties: {name, date, result} }) => {
      styler(tooltip, { opacity: 1, top: `${pageY}px`, left: `${pageX}px` })
      tooltip.html(`${name}: <em>${percent(result)}</em>`)
    })
    .on("mouseleave", (e) => styler(tooltip, { opacity: 0 }))
    .merge(pathEnter)
    .transition()
    .attr("d", d => path(d))
    .attr("fill", ({ properties: { result } = {}} = {}) => color(result))
    .attr("stroke","white")

  items
    .exit()
    .remove()
}

// request data
dsv(DELIMITER, REPORT_PATH, parser).then(r => {
  const months = [... new Set(r.map(({ date }) => JSON.stringify({ year: date.getFullYear(), month: date.getMonth() })))]
    .map(JSON.parse)
    .sort((a, b) => {
      if (a.year > b.year) return 1
      if (a.year < b.year) return -1
      if (a.month > b.month) return 1
      if (a.month < b.month) return -1
    })

  let i = 0
  // initial call with sizes
  size(() => render(r, months[i]))
  const interval = setInterval(() => {
    render(r, months[i++])
    if (i >= months.length) clearInterval(interval)
  }, INTERVAL_TIME)
  
  window.addEventListener("resize", () => size(() => render(r, months[i])))
})
