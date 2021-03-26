const sunBtn = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"5\"></circle><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"3\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line><line x1=\"4.22\" y1=\"4.22\" x2=\"5.64\" y2=\"5.64\"></line><line x1=\"18.36\" y1=\"18.36\" x2=\"19.78\" y2=\"19.78\"></line><line x1=\"1\" y1=\"12\" x2=\"3\" y2=\"12\"></line><line x1=\"21\" y1=\"12\" x2=\"23\" y2=\"12\"></line><line x1=\"4.22\" y1=\"19.78\" x2=\"5.64\" y2=\"18.36\"></line><line x1=\"18.36\" y1=\"5.64\" x2=\"19.78\" y2=\"4.22\"></line></svg>"

const moonBtn = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\"></path></svg>" 

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
