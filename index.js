import { geoMercator, geoPath } from "d3-geo"
import { select } from "d3-selection"
import { dsv } from "d3-fetch"
import { extent } from "d3-array"
import { scaleQuantile } from "d3-scale"
import { schemeGreens } from "d3-scale-chromatic"
import { feature } from "topojson-client"
import data from "./data/valladolid.topo.json"

const projection = geoMercator()
const path = geoPath(projection)
const feat = feature(data, data.objects.valladolid)

const styler = (node, style = {}) => Object.entries(style).forEach(([prop,val]) => node.style(prop,val))

const map = select("#map")
styler(map, { width: "100%", height: "100%" })

const { width, height } = map.node().getBoundingClientRect()
const svg = map
  .append("svg")
  .attr("viewBox", [0, 0, width, height])

const tooltip = map.append("div")
  .style("position", "absolute")
  .style("opacity", 0)

dsv(";", "./data/report.202012.csv", ({ name, a, b, date: d }) => ({ name, result: +b !== 0 ? 1 - (+a/+b) : 0, date: new Date(d) })).then(r => {

  const months = [... new Set(r.map(({ date }) => date.getMonth()))].sort()
  const [currentMonth] = months.slice(-1)
  const { features } = feat
  const edited = features.map(f => {
    const { properties: { nombre }} = f
    const match = r.find(({ name, date }) => name === nombre && date.getMonth() === currentMonth)

    return { ...f, properties: { ...f.properties, ...match }}
  })

  feat.features = edited
  projection.fitSize([width,height], feat);

  const range = schemeGreens[5]
  const color = scaleQuantile(range).domain(extent(r, d => d.result))
  const items = svg.append("g").selectAll("path").data(feat.features)
  const legend = svg.append("g").selectAll("rect").data(range)
  
  legend
    .enter()
    .append("rect")
    .attr("width", "10px")
    .attr("height", "10px")
    .attr("y", (_, i) => `${i}em`)
    .attr("fill", d => d)
  
  legend
    .enter()
    .append("text")
    .attr("dominant-baseline", "hanging")
    .attr("dx", "15px")
    .attr("dy", (_, i) => `${i}em`)
    .text(d => {
      const [start, end] = color.invertExtent(d)
      const percent = (num = 0)=> num.toLocaleString(undefined, { style: "percent" })
      return `${percent(start)} - ${percent(end)}`
    })
    
  legend
    .exit()
    .remove()

  items
    .enter()
    .append("path")
    .attr("d", d => path(d))
    .attr("fill", ({ properties: { result }}) => color(result))
    .attr("stroke","steelblue")
    .on("mouseenter", ({ pageX, pageY }, { properties: {name, date, result} }) => {
       styler(tooltip, { opacity: 1, top: `${pageY}px`, left: `${pageX}px`, background: "#fff", border: "1px solid #eee", padding: "5px", "box-shadow": "0px 0px 10px 0px rgba(0,0,0,0.75)", "border-radius": "5px", "transition": "opacity 250ms" })
       
       tooltip.html(`${name} (${date.toLocaleDateString(undefined, { year: "2-digit", month: "short"})}): ${result.toLocaleString(undefined, { style: "percent" })}`)
    })
    .on("mouseleave", (e) => {
      styler(tooltip, { opacity: 0 })
    })

  items
    .exit()
    .remove()
})

