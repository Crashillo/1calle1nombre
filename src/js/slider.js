import { drag } from "d3-drag"
import { transition } from "d3-transition"
import { formatDate } from "./helpers"

export default class Slider {
  constructor(node, { drag, timeScale, container, speed }) {
    this.build(node)

    this.timeScale = timeScale
    this.speed = speed
    
    this.container = container
    this.resize()
    
    this.onDrag = drag
    
    addEventListener("resize", () => this.resize())
  }
  
  build(node) {
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
        .on("start drag", ({ x }) => this.onDrag(x)))
      
    this.circle = node
      .append("circle")
      .attr("r", 10)
      .attr("fill", "var(--color)")
      .attr("stroke", "#310234")
      .attr("stroke-width", 2)
      .style("pointer-events", "none")
  }
  
  render({ index, months }) {
    const t1 = transition().duration(this.speed)
    const t2 = transition().duration(this.speed)

    this.circle
      .transition(t1)
      .attr("cx", index * this.timeScale.step())

    this.node
      .selectAll("text")
      .data(months.filter((_, ix) => index === ix), x => x)
      .join(
        enter => enter
          .append("text")
          .attr("dy", "-1em")
          .attr("text-anchor", "end")
          .attr("fill", "#E5E500")
          .attr("font-size", "2em")
          .text(d => `${formatDate(new Date(d), { month: "long" })} '${formatDate(new Date(d), { year: "2-digit" })}`)
          .call(enter => enter
            .attr("x", 2 * this.width)
            .transition(t2)
            .attr("x", this.width)),
        update => update,
        exit => exit.call(exit => exit.transition(t2).style("opacity", 0).attr("x", this.width * 0.5).remove())
      )
  }
  
  resize() {
    const [,,w, h] = this.container.attr("viewBox").split(",")
    const [from, to] = [w < 640 ? w * 0.05 : w * 0.7, w * 0.95]
    
    this.width = to - from
    this.timeScale.range([from, to])
    this.lineSlider.attr("x2", this.width)
    this.ghostLineSlider.attr("x2", this.width)
    this.node.attr("transform", `translate(${from} ${w < 640 ? h * 0.85 : h * 0.95})`)
  }
}
