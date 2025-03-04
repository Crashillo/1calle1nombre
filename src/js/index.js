/* global process */
import Viewer from "./viewer"
import { URLS } from "./config"

const build = new Date(process.env.BUILD * 1e3 || null).toISOString()
console.info(`Last build: ${build}`)

const viewer = new Viewer({ build })

// init app
const [{ url: ccaa }] = URLS // ES
fetch(ccaa).then(r => r.json()).then((features) => viewer.load(features))
