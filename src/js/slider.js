import { drag } from "d3-drag"

export default class Slider {
  constructor(node, { drag, timeScale, height, width }) {
    this.render(node)
    
    this.timeScale = timeScale
    this.height = height
    this.width = width
    
    this.resize(this.width, this.height)
    
    this.onDrag = drag
  }
  
  render(node) {
    this.node = node
    this.lineSlider = node
      .append("line")
      .attr("x1", 0)
      .attr("stroke", "#310234")
      .attr("stroke-width", 10)
      .attr("stroke-linecap", "round")
      
    this.ghostLineSlider = node
      .append("line")
      .attr("x1", 0)
      .attr("stroke", "transparent")
      .attr("stroke-width", 100)
      .attr("stroke-linecap", "round")
      .style("cursor", "crosshair")
      .style("pointer-events", "stroke")
      .call(drag()
        .on("start.interrupt", () => node.interrupt())
        .on("start drag", ({ x }) => {
          return this.onDrag(x)
        }))
      
    this.circle = node
      .append("circle")
      .attr("r", 10)
      .attr("fill", "var(--color)")
      .attr("stroke", "#310234")
      .attr("stroke-width", 2)
      .style("pointer-events", "none")
  }
  
  resize(w, h) {
    const [from, to] = [w < 640 ? w * 0.05 : w * 0.7, w * 0.95]
    
    this.timeScale.range([from, to])
    this.lineSlider.attr("x2", to - from)
    this.ghostLineSlider.attr("x2", to - from)
    
    this.node.attr("transform", `translate(${from} ${w < 640 ? h * 0.85 : h * 0.95})`)
  }
}
