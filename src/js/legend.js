import { select } from "d3"
import { percent } from "./helpers"

export default class Legend {
  constructor(node, { range, colorScale, svg, setColor }) {
    this.container = node
      .append("div")
      .attr("class", "legend card")

    this.colorScale = colorScale
    this.range = range
    this.svg = svg
    this.setColor = (d) => setColor(d)
  }
  
  render() {
    this.container
      .selectAll(".legend-range")
      .data(this.range)
      .join(
        enter => {
          const legendRanges = enter
            .append("div")
            .attr("class", "legend-range")
            .on("mouseenter touchstart", (e, d) => {
              select(e.target).style("text-shadow", "-0.06ex 0 0 currentColor, 0.06ex 0 0 currentColor")
              this.svg.selectAll("path").dispatch("legend-mouseenter", { detail: this.colorScale.invertExtent(d) })
            })
            .on("mouseleave touchend", (e, d) => {
              select(e.target).style("text-shadow", "none")
              this.svg.selectAll("path").dispatch("legend-mouseleave", { detail: this.colorScale.invertExtent(d) })
            })
          
          legendRanges
            .append("i")
            .attr("class", "legend-range-square")
            .style("background-color", d => d)
            
          legendRanges
            .append("span")
            .text(d => {
              const [start = 0, end] = this.colorScale.invertExtent(d)
              return `${percent(start)} - ${percent(end)}`
            })
        },
        update => update
          .selectAll("span")
          .text(d => {
            const [start, end] = this.colorScale.invertExtent(d)
            return `${percent(start)} - ${percent(end)}`
          })
      )
  }
}
