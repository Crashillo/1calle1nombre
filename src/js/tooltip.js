export default class Tooltip {
  constructor(node, { content }) {
    this.tooltip = node
      .append("div")
      .attr("class", "tooltip card")
      
    this.content = content
  }
  
  show({ pageX, pageY }, data) {
    const x = window.innerWidth / 2 < pageX ? "-125%" : "25%"
    const y = window.innerHeight / 2 < pageY ? "-125%" : "25%"
    this.tooltip
      .style("opacity", 1)
      .style("top", `${pageY}px`)
      .style("left", `${pageX}px`)
      .style("transform", `translate(${x}, ${y})`)
      .html(this.content(data))
  }
  
  hide() {
    this.tooltip.style("opacity", 0)
  }
}
