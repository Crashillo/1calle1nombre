export const percent = (num = 0) =>
  num.toLocaleString(undefined, { style: "percent" });
export const formatDate = (date = new Date(), opts = {}) =>
  date.toLocaleDateString(undefined, opts);
