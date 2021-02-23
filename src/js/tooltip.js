export default class Tooltip {
  constructor(node, { content }) {
    this.tooltip = node
      .append("div")
      .attr("class", "tooltip card")
      
    this.content = content
  }
  
  show({ pageX, pageY }, data) {
    this.tooltip
      .style("opacity", 1)
      .style("top", `${pageY}px`)
      .style("left", `${pageX}px`)
      .html(this.content(data))
  }
  
  hide() {
    this.tooltip.style("opacity", 0)
  }
}
