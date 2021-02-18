import { percent } from "./helpers"

export default class Legend {
  constructor(node, { range, colorScale }) {
    const legendRanges = node
      .append("div")
      .attr("class", "legend card")
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
}
