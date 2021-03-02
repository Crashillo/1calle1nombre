import { percent } from "./helpers"

export default class Legend {
  constructor(node, { range, colorScale }) {
    this.container = node
      .append("div")
      .attr("class", "legend card")
      .on("click", e => this.onClick(e))
      
    const legendRanges = this.container
      .selectAll(".legend__range")
      .data(range)
      .join("div")
      .attr("class", "legend__range")

    legendRanges
      .append("i")
      .attr("class", "legend__range-square")
      .style("background-color", d => d)

    legendRanges.append("span").text((d) => {
      const [start, end] = colorScale.invertExtent(d)
      return `${percent(start)} - ${percent(end)}`
    })
  }
  
  onClick() {
    this.container.classed("hidden", !this.container.classed("hidden"))
  }
}
