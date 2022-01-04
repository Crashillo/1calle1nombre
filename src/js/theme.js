import { sunBtn, moonBtn } from "./icons"

export default class Theme {
  constructor(node) {
    const storedTheme = localStorage.getItem("theme")

    if (storedTheme === "dark") {
      document.documentElement.setAttribute("theme", "dark")
    } else if (storedTheme === "light") {
      document.documentElement.setAttribute("theme", "light")
    }

    const currentTheme = document.documentElement.getAttribute("theme")
    this.prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")

    this.container = node
      .append("div")
      .attr("class", "theme card")
      .append("button")
      .attr("class", "control__button")
      .on("click", e => this.onClick(e))
      .html(currentTheme
        ? currentTheme === "light"
          ? moonBtn
          : sunBtn
        : this.prefersDarkScheme.matches
          ? sunBtn
          : moonBtn)
  }
  
  onClick() {
    const prevTheme = document.documentElement.getAttribute("theme")
    
    let theme = null
    if (!prevTheme) {
      theme = this.prefersDarkScheme.matches ? "light" : "dark"
      document.documentElement.setAttribute("theme", theme)
    } else {
      theme = prevTheme === "dark" ? "light" : "dark"
      document.documentElement.setAttribute("theme", theme)
    }
    
    localStorage.setItem("theme", theme)
    this.container.html(theme === "light" ? moonBtn : sunBtn)
  }
}
