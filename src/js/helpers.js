export const percent = (num = 0) => num.toLocaleString(undefined, { style: "percent" })
export const formatDate = (date = new Date(), opts = {}) => date.toLocaleDateString(undefined, opts)
export const parser = ({ name, a, b, date }) => ({ name, result: +b !== 0 ? 1 - (+a/+b) : 0, date })
export const parseFeatures = (features, data) => features.map(f => {
  const { properties: { nombre: name }} = f
  const values = data.reduce((acc, { name: dname, date, result }) => {
    if (dname === name) {
      acc[date] = result
    }
    
    return acc
  }, {})

  return { ...f, properties: { ...f.properties, name, values }}
})
