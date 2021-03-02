const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.documentElement.setAttribute("theme", "dark")
} else if (currentTheme === "light") {
  document.documentElement.setAttribute("theme", "light")
}

btn?.addEventListener("click", function() {
  const currentTheme = document.documentElement.getAttribute("theme")
  const theme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("theme", theme)
  localStorage.setItem("theme", theme);
});
