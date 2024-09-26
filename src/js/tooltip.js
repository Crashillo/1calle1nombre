export default class Tooltip {
  constructor(node, { content }) {
    this.tooltip = node
      .append("div")
      .attr("class", "tooltip card")
      .on("click", () => this.hide())
      
    this.content = content
  }
  
  show(_, data) {
    this.tooltip
      .style("opacity", 1)
      .html(this.content(data))
  }
  
  hide() {
    this.tooltip.style("opacity", 0)
  }
}
