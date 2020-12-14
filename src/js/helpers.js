export const styler = (node, style = {}) => {
  Object.entries(style).forEach(([prop,val]) => node.style(prop,val))
  return node
}
export const percent = (num = 0) => num.toLocaleString(undefined, { style: "percent" })
export const formatDate = (date = new Date(), opts = {}) => date.toLocaleDateString(undefined, opts)
export const parser = ({ name, a, b, date }) => ({ name, result: +b !== 0 ? 1 - (+a/+b) : 0, date })
