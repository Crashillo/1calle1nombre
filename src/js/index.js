/* global process */
import Viewer from "./viewer"
import { URLS } from "./config"

if (process.env.BUILD) {
  console.info(`Last build: ${new Date(process.env.BUILD * 1e3).toISOString()}`)
}

const viewer = new Viewer()

// init app
const [[{ url: ccaa }, { url: mun }]] = URLS // ES
Promise.all([
  fetch(ccaa).then(r => r.json()),
  fetch(mun).then(r => r.json()),
]).then(([features, lines]) => viewer.load({ features, lines }))
