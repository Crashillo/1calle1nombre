import { percent } from "./helpers"

export default class Legend {
  constructor(node, { range, colorScale }) {
    this.container = node
      .append("div")
      .attr("class", "legend card")
      .on("click", e => this.onClick(e))

    this.scale = colorScale
    this.range = range
    this.render()
  }
  
  render() {
    this.container
      .selectAll(".legend__range")
      .data(this.range)
      .join(
        enter => {
          const legendRanges = enter
            .append("div")
            .attr("class", "legend__range")
          
          legendRanges
            .append("i")
            .attr("class", "legend__range-square")
            .style("background-color", d => d)
            
          legendRanges
            .append("span")
            .text(d => {
              const [start, end] = this.scale.invertExtent(d)
              return `${percent(start)} - ${percent(end)}`
            })
        },
        update => update
          .selectAll("span")
          .text(d => {
              const [start, end] = this.scale.invertExtent(d)
              return `${percent(start)} - ${percent(end)}`
            })
      )

    //~ legendRanges
      //~ .append("i")
      //~ .attr("class", "legend__range-square")
      //~ .style("background-color", d => d)

    //~ legendRanges
      //~ .append("span")
      //~ .text(d => {
      //~ const [start, end] = this.scale.invertExtent(d)
      //~ return `${percent(start)} - ${percent(end)}`
    //~ })
  }
  
  onClick() {
    this.container.classed("hidden", !this.container.classed("hidden"))
  }
}
