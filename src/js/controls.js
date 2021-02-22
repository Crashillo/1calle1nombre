import { select } from "d3-selection"

export default class Controls {
  constructor(node, { play, stop }) {
    node
      .append("div")
      .attr("class", "controls card")
      .selectAll("button")
      .data(["stop", "play"])
      .join("button")
      .attr("id", d => d)
      .attr("class", "control__button")
      .on("click", e => this.onButtonClick(e))
      .append("span")
      .attr("class", d => `control__button-${d}`)
      
    this.onPlay = play
    this.onStop = stop
  }
  
  onButtonClick({ target }) {
    select("#play").classed("pause", false)
    
    if (target.id === "play") {
      select(target).classed("pause", true)
      this.onPlay()
    } else if (target.id === "stop") {
      this.onStop()
    }
  }
  
  stop() {
    select("#play").classed("pause", false)
  }
}
