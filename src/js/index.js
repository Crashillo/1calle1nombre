import Visor from "./visor"
import { URLS } from "./config"

// init app
const [[{ url: ccaa }, { url: mun }]] = URLS // ES
Promise.all([
  fetch(ccaa).then(r => r.json()),
  fetch(mun).then(r => r.json()),
]).then(([features, lines]) => new Visor({ features, lines }))
