import { select } from "d3-selection"

const playBtn = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`

const pauseBtn = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`

const stopBtn = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16"></rect></svg>` 

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
