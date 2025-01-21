export const percent = (num) =>
  num?.toLocaleString(undefined, { style: "percent" })
export const formatDate = (date, opts = {}) =>
  date?.toLocaleDateString(undefined, opts)
export const getProp = (...props) => obj => props.reduce(
  (objNode, prop) => objNode && objNode[prop]
    ? objNode[prop]
    : null,
  obj
)
export const getMonthRange = (startDate, endDate) => {
  let start = new Date(startDate)
  let end = new Date(endDate)
  let monthRange = []

  // Ensure startDate is set to the first day of the month (in UTC)
  start.setUTCDate(1)
  start.setUTCHours(0, 0, 0, 0) // Normalize to the first day of the month at midnight (UTC)

  // Ensure endDate is set to the first day of the month (in UTC)
  end.setUTCDate(1)
  end.setUTCHours(0, 0, 0, 0) // Normalize to the first day of the month at midnight (UTC)

  while (start <= end) {
    monthRange.push(new Date(start))
    start.setUTCMonth(start.getUTCMonth() + 1) // Increment month (in UTC)
  }

  return monthRange
}