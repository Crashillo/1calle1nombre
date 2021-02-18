export const percent = (num = 0) =>
  num.toLocaleString(undefined, { style: "percent" })
export const formatDate = (date = new Date(), opts = {}) =>
  date.toLocaleDateString(undefined, opts)
export const getProp = (...props) => obj => props.reduce(
  (objNode, prop) => objNode && objNode[prop]
    ? objNode[prop]
    : null,
  obj
)


