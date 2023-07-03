import { select } from "d3-selection"
import { stopBtn, playBtn, pauseBtn } from "./icons"

export default class Controls {
  constructor(node, { play, stop }) {
    node
      .append("div")
      .attr("class", "controls card")
      .selectAll("button")
      .data(["stop", "play"])
      .join("button")
      .attr("id", d => d)
      .attr("class", "control-button")
      .on("click", e => this.onButtonClick(e))
      .html(d => d === "stop" ? stopBtn : playBtn)
      
    this.onPlay = play
    this.onStop = stop
  }
  
  onButtonClick({ target }) {
    select("#play").html(playBtn)
    
    if (target.id === "play") {
      select(target).html(pauseBtn)
      this.onPlay()
    } else if (target.id === "stop") {
      this.onStop()
    }
  }
  
  stop() {
    select("#play").html(playBtn)
  }
}
