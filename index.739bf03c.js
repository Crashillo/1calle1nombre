// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"j9r0q":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"ebWYT":[function(require,module,exports) {
/* global process */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _viewer = require("./viewer");
var _viewerDefault = parcelHelpers.interopDefault(_viewer);
var _config = require("./config");
const viewer = new (0, _viewerDefault.default)();
// init app
const [[{ url: ccaa }, { url: prov }]] = (0, _config.URLS // ES
);
Promise.all([
    fetch(ccaa).then((r)=>r.json()),
    fetch(prov).then((r)=>r.json())
]).then(([features, lines])=>viewer.load({
        features,
        lines
    }));

},{"./viewer":"avgRe","./config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"avgRe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Geo = require("d3-geo");
var _d3Selection = require("d3-selection");
var _d3Timer = require("d3-timer");
var _d3Transition = require("d3-transition");
var _d3Scale = require("d3-scale");
var _d3ScaleChromatic = require("d3-scale-chromatic");
var _d3Zoom = require("d3-zoom");
var _d3CompositeProjections = require("d3-composite-projections");
var _topojsonClient = require("topojson-client");
var _helpers = require("./helpers");
var _icons = require("./icons");
var _config = require("./config");
var _legend = require("./legend");
var _legendDefault = parcelHelpers.interopDefault(_legend);
var _controls = require("./controls");
var _controlsDefault = parcelHelpers.interopDefault(_controls);
var _slider = require("./slider");
var _sliderDefault = parcelHelpers.interopDefault(_slider);
var _tooltip = require("./tooltip");
var _tooltipDefault = parcelHelpers.interopDefault(_tooltip);
var _theme = require("./theme");
var _themeDefault = parcelHelpers.interopDefault(_theme);
// helpers
const getId = (0, _helpers.getProp)("properties", (0, _config.FEATURE_ID));
const getValues = (0, _helpers.getProp)("properties", (0, _config.FEATURE_VALUES));
const getDesc = (0, _helpers.getProp)("properties", (0, _config.FEATURE_DESC));
const getCode = (0, _helpers.getProp)("properties", (0, _config.FEATURE_CODE));
class Visor {
    constructor(){
        this.build();
        this.resize();
        this.tooltip = new (0, _tooltipDefault.default)(this.map, {
            content: (e)=>this.onTooltipContent(e)
        });
        new (0, _themeDefault.default)(this.sidebar);
        this.sidebar.append("div").attr("class", "info card").append("a").attr("class", "control-button").attr("href", "https://wiki.openstreetmap.org/wiki/ES:Espa%C3%B1a/1Calle1Nombre").attr("target", "_blank").html((0, _icons.infoBtn));
        addEventListener("resize", ()=>this.onResize());
    }
    build() {
        // static elements
        this.map = (0, _d3Selection.select)("#map");
        this.svg = this.map.append("svg").attr("preserveAspectRatio", "xMinYMin meet").on("click", (e)=>this.onMapClick(e));
        this.g = this.svg.append("g");
        this.gBase = this.g.append("g");
        this.gFeatures = this.g.append("g");
        this.gSlider = this.svg.append("g");
        this.sidebar = this.map.append("div").attr("class", "sidebar");
        this.gAttribution = this.map.append("div").attr("class", "attribution").html('&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors');
        // common functions
        this.z = (0, _d3Zoom.zoom)().scaleExtent([
            1,
            40
        ]);
        this.z.on("zoom", (e)=>this.onZoom(e));
        this.projection = (0, _d3CompositeProjections.geoConicConformalSpain)();
        this.timeScale = (0, _d3Scale.scalePoint)();
        this.range = (0, _d3ScaleChromatic.schemeGreens)[9];
        this.colorScale = (0, _d3Scale.scaleQuantile)(this.range);
        this.tick = null;
        this.INTERVAL_TIME = 1500;
        this.marginBase = 0.02;
        // variables
        this.currentGroup = null;
        this.currentCode = null;
    }
    resize() {
        ({ width: this.width, height: this.height } = this.map.node().getBoundingClientRect());
        this.svg.attr("viewBox", [
            0,
            0,
            this.width,
            this.height
        ]);
    }
    load({ features, lines }) {
        const [featureProp] = Object.keys(features.objects);
        const [linesProp] = Object.keys(lines.objects);
        this.baseData = (0, _topojsonClient.feature)(features, features.objects[featureProp]);
        this.baseLines = (0, _topojsonClient.mesh)(lines, lines.objects[linesProp]);
        // set the differents month-year tuples
        this.currentMonths = [
            ...new Set(this.baseData.features.flatMap(({ properties: { values } })=>Object.keys(values)))
        ].sort().filter(Boolean);
        // set the most up to date month
        this.currentMonthIx = this.currentMonths.length - 1;
        this.timeScale.domain(this.currentMonths);
        if (!this.legend) this.legend = new (0, _legendDefault.default)(this.sidebar, {
            range: this.range,
            colorScale: this.colorScale
        });
        if (!this.controls) this.controls = new (0, _controlsDefault.default)(this.sidebar, {
            play: ()=>this.onPlay(),
            stop: ()=>this.onStop()
        });
        if (!this.slider) {
            this.slider = new (0, _sliderDefault.default)(this.gSlider, {
                drag: (e)=>this.onDrag(e),
                timeScale: this.timeScale,
                container: this.svg,
                speed: this.INTERVAL_TIME
            });
            this.slider.render({
                index: this.currentMonthIx,
                months: this.currentMonths
            });
        }
        this.renderBase();
    }
    async reload(url) {
        const blob = await fetch(url);
        const topojson = await blob.json();
        const [prop] = Object.keys(topojson.objects);
        this.currentFeature = (0, _topojsonClient.feature)(topojson, topojson.objects[prop]);
        this.renderFeature();
    }
    renderBase() {
        const ne = [
            this.width * this.marginBase,
            this.height * this.marginBase
        ];
        const sw = [
            this.width * (1 - this.marginBase),
            this.height * (1 - this.marginBase)
        ];
        this.projection.fitExtent([
            ne,
            sw
        ], this.baseData);
        this.setLegend(this.baseData.features);
        const t = (0, _d3Transition.transition)().duration(this.INTERVAL_TIME * 0.9);
        const [[x0, y0], [x1, y1]] = (0, _d3Geo.geoPath)(this.projection).bounds({
            ...this.baseData,
            features: this.baseData.features.filter((d)=>!this.currentGroup || getId(d) === this.currentGroup)
        });
        this.currentSize = [
            [
                x0,
                y0
            ],
            [
                x1,
                y1
            ]
        ];
        this.svg.call(this.z);
        this.svg.transition(t).call(this.z.transform, (0, _d3Zoom.zoomIdentity).translate(this.width / 2, this.height / 2).scale(Math.min(8, 0.9 / Math.max((x1 - x0) / this.width, (y1 - y0) / this.height))).translate(-(x0 + x1) / 2, -(y0 + y1) / 2));
        this.gBase.selectAll("path").data(this.baseData.features, getId).join((enter)=>enter.append("path").attr("d", (0, _d3Geo.geoPath)(this.projection)).attr("cursor", "pointer").attr("fill-opacity", 1).on("click", (_, d)=>this.onBaseClick(d)).call((enter)=>enter.transition(t).attr("fill", (d)=>this.setColor(d))).on("mouseenter", (e, feature)=>this.onBaseMouseenter(e, {
                    feature,
                    months: this.currentMonths,
                    current: this.currentMonths[this.currentMonthIx]
                })).on("mouseleave", (e)=>this.onBaseMouseleave(e)), (update)=>{
            if (this.currentGroup) update.transition(t).attr("fill-opacity", 0.2).attr("fill", "#000").style("pointer-events", "none");
            else update.call((update)=>update.transition(t).attr("d", (0, _d3Geo.geoPath)(this.projection)).attr("fill", (d)=>this.setColor(d)).attr("fill-opacity", 1).style("pointer-events", "auto"));
        });
        this.gBase.append("path").datum(this.baseLines).attr("d", (0, _d3Geo.geoPath)(this.projection)).attr("fill", "none").attr("stroke", "#003545").attr("stroke-width", 0.5).attr("stroke-linejoin", "round").style("pointer-events", "none");
    }
    renderFeature() {
        this.projection.fitExtent(this.currentSize, this.currentFeature);
        const isFeatureActive = (d)=>{
            if (!this.currentCode) return true;
            return this.currentCode === getCode(d);
        };
        const t = (0, _d3Transition.transition)().duration(this.INTERVAL_TIME * 0.9);
        if (this.currentFeature) {
            const subset = this.currentFeature.features.filter(isFeatureActive);
            this.setLegend(subset);
            const [[x0, y0], [x1, y1]] = (0, _d3Geo.geoPath)(this.projection).bounds({
                ...this.currentFeature,
                features: subset
            });
            this.svg.call(this.z);
            this.svg.transition(t).call(this.z.transform, (0, _d3Zoom.zoomIdentity).translate(this.width / 2, this.height / 2).scale(Math.min(8, 0.9 / Math.max((x1 - x0) / this.width, (y1 - y0) / this.height))).translate(-(x0 + x1) / 2, -(y0 + y1) / 2));
        }
        this.gFeatures.selectAll("path").data(this.currentFeature ? this.currentFeature.features.map((d)=>({
                ...d,
                activated: isFeatureActive(d)
            })) : [], getId).join((enter)=>enter.append("path").attr("d", (0, _d3Geo.geoPath)(this.projection)).attr("fill", "#000").attr("stroke", "#000").attr("stroke-alignment", "inner").attr("cursor", "pointer").style("vector-effect", "non-scaling-stroke").style("pointer-events", "auto").call((enter)=>enter.transition(t).attr("fill", (d)=>this.setColor(d)).attr("stroke", (d)=>this.setColor(d))).on("mouseenter", (e, feature)=>this.onFeatureMouseenter(e, {
                    feature,
                    months: this.currentMonths,
                    current: this.currentMonths[this.currentMonthIx]
                })).on("mouseleave", (e)=>this.onFeatureMouseleave(e)).on("click", (e, feature)=>this.onFeatureClick(e, {
                    feature
                })), (update)=>{
            // reduce the number of transitions
            update.filter(({ activated })=>!activated).attr("d", (0, _d3Geo.geoPath)(this.projection)).attr("fill", "#000").attr("stroke", "var(--bg)").style("pointer-events", "none");
            return update.filter(({ activated })=>!!activated).filter((d)=>{
                const [current, previous] = [
                    this.currentMonths[this.currentMonthIx],
                    this.currentMonths[this.currentMonthIx - 1]
                ];
                const values = getValues(d);
                return values[current] !== values[previous];
            }).call((update)=>update.transition(t).attr("d", (0, _d3Geo.geoPath)(this.projection)).attr("fill", (d)=>this.setColor(d)).attr("stroke", (d)=>this.setColor(d)).style("pointer-events", "auto"));
        }, (exit)=>exit.call((exit)=>exit.attr("stroke", "none").transition(t).attr("fill-opacity", 0).remove()));
    }
    setColor(feature) {
        return this.colorScale(getValues(feature)[this.currentMonths[this.currentMonthIx]] || 0);
    }
    setLegend(features) {
        const values = features.flatMap(({ properties: { values } })=>Object.values(values));
        const [min, max] = [
            Math.max(0, Math.min(...values)),
            Math.min(0.99, Math.max(...values))
        ];
        this.colorScale.domain([
            ...Array.from({
                length: this.range.length - 1
            }, (_, i)=>min + i * ((max - min) / (this.range.length - 2))),
            1
        ]);
        this.legend.render();
    }
    onMapClick({ target }) {
        if (this.svg.node() === target) {
            this.svg.transition().duration(this.INTERVAL_TIME * 0.9).call(this.z.transform, (0, _d3Zoom.zoomIdentity));
            this.currentGroup = null;
            this.renderBase();
            this.currentFeature = null;
            this.renderFeature();
            this.legend.render();
        }
    }
    onZoom({ transform }) {
        this.g.attr("transform", transform);
    }
    onBaseClick(feature) {
        // search in 2nd array
        const { url, code } = (0, _config.URLS)[1].find((x)=>x.code === getId(feature));
        this.currentGroup = code;
        this.renderBase();
        this.reload(url);
    }
    onBaseMouseenter(event, data) {
        (0, _d3Selection.select)(event.target).transition("mouse").duration(this.INTERVAL_TIME / 4).attr("fill", "#0dc5c1");
        this.tooltip.show(event, data);
    }
    onBaseMouseleave({ target }) {
        (0, _d3Selection.select)(target).transition("mouse").duration(this.INTERVAL_TIME / 4).attr("fill", (d)=>this.setColor(d));
        this.tooltip.hide();
    }
    onFeatureMouseenter(event, data) {
        (0, _d3Selection.select)(event.target).raise().attr("stroke-width", 5).transition("mouse").duration(this.INTERVAL_TIME / 4).attr("fill", "#ffcaba").attr("stroke", "#310234");
        this.tooltip.show(event, data);
    }
    onFeatureMouseleave({ target }) {
        (0, _d3Selection.select)(target).attr("stroke-width", 0).attr("stroke", "#000").transition("mouse").duration(this.INTERVAL_TIME / 4).attr("fill", (d)=>this.setColor(d)).attr("stroke", (d)=>this.setColor(d));
        this.tooltip.hide();
    }
    onFeatureClick(_, { feature }) {
        this.currentCode = getCode(feature);
        this.renderFeature();
    }
    onResize() {
        this.resize();
        this.renderBase();
        if (this.currentFeature) this.renderFeature();
    }
    onPlay() {
        // click in play while was running
        if (this.tick !== null) {
            this.tick.stop();
            this.tick = null;
            this.controls.stop();
            return;
        }
        if (this.currentMonthIx === this.currentMonths.length - 1) {
            this.currentMonthIx = 0;
            this.slider.render({
                index: this.currentMonthIx,
                months: this.currentMonths
            });
            this.currentFeature ? this.renderFeature() : this.renderBase();
        }
        this.tick = (0, _d3Timer.interval)(()=>{
            this.currentMonthIx++;
            this.currentFeature ? this.renderFeature() : this.renderBase();
            this.slider.render({
                index: this.currentMonthIx,
                months: this.currentMonths
            });
            if (this.currentMonthIx === this.currentMonths.length - 1) {
                this.tick.stop();
                this.controls.stop();
            }
        }, this.INTERVAL_TIME);
    }
    onStop() {
        this.currentMonthIx = this.currentMonths.length - 1;
        if (this.tick !== null) {
            this.tick.stop();
            this.tick = null;
        }
        this.slider.render({
            index: this.currentMonthIx,
            months: this.currentMonths
        });
        this.currentFeature ? this.renderFeature() : this.renderBase();
    }
    onDrag(x) {
        const ix = Math.max(0, Math.min(Math.floor(x / this.timeScale.step()), this.currentMonths.length - 1));
        if (ix !== this.currentMonthIx) {
            this.currentMonthIx = ix;
            this.currentFeature ? this.renderFeature() : this.renderBase();
            this.slider.render({
                index: this.currentMonthIx,
                months: this.currentMonths
            });
        }
    }
    onTooltipContent({ feature, months, current }) {
        const dateCell = (cell)=>(0, _helpers.formatDate)(new Date(cell), {
                month: "short",
                year: "2-digit"
            });
        const valueCell = (cell)=>(0, _helpers.percent)(getValues(feature)[cell]) || "--";
        const tr = (row, isCurrent)=>`<tr ${isCurrent ? 'class="current"' : ""}><td>${dateCell(row)}</td><td>${valueCell(row)}</td></tr>`;
        const caption = `<caption>${getDesc(feature)}</caption>`;
        const thead = "<thead><th>Mes</th><th>%</th></thead>";
        const ellipsis = '<tr><td colspan="2">...</td></tr>';
        const table = (content)=>`<table>${caption}${thead}<tbody>${content}</tbody></table>`;
        let content = "";
        if (!months.slice(-6).includes(current)) content = `${ellipsis}${tr(current, true)}${ellipsis}${months.slice(-3).map((m)=>tr(m, current === m)).join("")}`;
        else content = months.slice(-6).map((m)=>tr(m, current === m)).join("");
        return table(content);
    }
}
exports.default = Visor;

},{"d3-composite-projections":"4XLj6","topojson-client":"ciUQq","./helpers":"hGI1E","./icons":"khRpZ","./config":"k5Hzs","./legend":"ieevi","./controls":"1Ohk6","./slider":"aMYz0","./tooltip":"7F96J","./theme":"bTBbp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","d3-geo":"01Z75","d3-selection":"gn9gd","d3-timer":"7TEss","d3-transition":"4lorl","d3-scale":"UQ8g3","d3-scale-chromatic":"dfCpU","d3-zoom":"hQoq0"}],"4XLj6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "geoAlbersUsa", ()=>(0, _albersUsaDefault.default));
parcelHelpers.export(exports, "geoAlbersUsaTerritories", ()=>(0, _albersUsaTerritoriesDefault.default));
parcelHelpers.export(exports, "geoConicConformalSpain", ()=>(0, _conicConformalSpainDefault.default));
parcelHelpers.export(exports, "geoConicConformalPortugal", ()=>(0, _conicConformalPortugalDefault.default));
parcelHelpers.export(exports, "geoMercatorEcuador", ()=>(0, _mercatorEcuadorDefault.default));
parcelHelpers.export(exports, "geoTransverseMercatorChile", ()=>(0, _transverseMercatorChileDefault.default));
parcelHelpers.export(exports, "geoConicEquidistantJapan", ()=>(0, _conicEquidistantJapanDefault.default));
parcelHelpers.export(exports, "geoConicConformalFrance", ()=>(0, _conicConformalFranceDefault.default));
parcelHelpers.export(exports, "geoConicConformalEurope", ()=>(0, _conicConformalEuropeDefault.default));
parcelHelpers.export(exports, "geoConicConformalNetherlands", ()=>(0, _conicConformalNetherlandsDefault.default));
parcelHelpers.export(exports, "geoMercatorMalaysia", ()=>(0, _mercatorMalaysiaDefault.default));
parcelHelpers.export(exports, "geoMercatorEquatorialGuinea", ()=>(0, _mercatorEquatorialGuineaDefault.default));
parcelHelpers.export(exports, "geoAlbersUk", ()=>(0, _albersUkDefault.default));
var _albersUsa = require("./src/albersUsa");
var _albersUsaDefault = parcelHelpers.interopDefault(_albersUsa);
var _albersUsaTerritories = require("./src/albersUsaTerritories");
var _albersUsaTerritoriesDefault = parcelHelpers.interopDefault(_albersUsaTerritories);
var _conicConformalSpain = require("./src/conicConformalSpain");
var _conicConformalSpainDefault = parcelHelpers.interopDefault(_conicConformalSpain);
var _conicConformalPortugal = require("./src/conicConformalPortugal");
var _conicConformalPortugalDefault = parcelHelpers.interopDefault(_conicConformalPortugal);
var _mercatorEcuador = require("./src/mercatorEcuador");
var _mercatorEcuadorDefault = parcelHelpers.interopDefault(_mercatorEcuador);
var _transverseMercatorChile = require("./src/transverseMercatorChile");
var _transverseMercatorChileDefault = parcelHelpers.interopDefault(_transverseMercatorChile);
var _conicEquidistantJapan = require("./src/conicEquidistantJapan");
var _conicEquidistantJapanDefault = parcelHelpers.interopDefault(_conicEquidistantJapan);
var _conicConformalFrance = require("./src/conicConformalFrance");
var _conicConformalFranceDefault = parcelHelpers.interopDefault(_conicConformalFrance);
var _conicConformalEurope = require("./src/conicConformalEurope");
var _conicConformalEuropeDefault = parcelHelpers.interopDefault(_conicConformalEurope);
var _conicConformalNetherlands = require("./src/conicConformalNetherlands");
var _conicConformalNetherlandsDefault = parcelHelpers.interopDefault(_conicConformalNetherlands);
var _mercatorMalaysia = require("./src/mercatorMalaysia");
var _mercatorMalaysiaDefault = parcelHelpers.interopDefault(_mercatorMalaysia);
var _mercatorEquatorialGuinea = require("./src/mercatorEquatorialGuinea");
var _mercatorEquatorialGuineaDefault = parcelHelpers.interopDefault(_mercatorEquatorialGuinea);
var _albersUk = require("./src/albersUk");
var _albersUkDefault = parcelHelpers.interopDefault(_albersUk);

},{"./src/albersUsa":"iyTjC","./src/albersUsaTerritories":"ciZaS","./src/conicConformalSpain":"8JD9b","./src/conicConformalPortugal":"8bpyQ","./src/mercatorEcuador":"8U11G","./src/transverseMercatorChile":"1EMba","./src/conicEquidistantJapan":"aj6SB","./src/conicConformalFrance":"8vb7W","./src/conicConformalEurope":"4okiV","./src/conicConformalNetherlands":"exuOZ","./src/mercatorMalaysia":"asODv","./src/mercatorEquatorialGuinea":"9BGVG","./src/albersUk":"5D1NJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iyTjC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// A composite projection for the United States, configured by default for
// 960×500. The projection also works quite well at 960×600 if you change the
// scale to 1285 and adjust the translate accordingly. The set of standard
// parallels for each region comes from USGS, which is published here:
// http://egsc.usgs.gov/isb/pubs/MapProjections/projections.html#albers
parcelHelpers.export(exports, "default", ()=>function() {
        var cache, cacheStream, lower48 = (0, _d3Geo.geoAlbers)(), lower48Point, alaska = (0, _d3Geo.geoConicEqualArea)().rotate([
            154,
            0
        ]).center([
            -2,
            58.5
        ]).parallels([
            55,
            65
        ]), alaskaPoint, hawaii = (0, _d3Geo.geoConicEqualArea)().rotate([
            157,
            0
        ]).center([
            -3,
            19.9
        ]).parallels([
            8,
            18
        ]), hawaiiPoint, point, pointStream = {
            point: function(x, y) {
                point = [
                    x,
                    y
                ];
            }
        };
        function albersUsa(coordinates) {
            var x = coordinates[0], y = coordinates[1];
            return point = null, (lower48Point.point(x, y), point) || (alaskaPoint.point(x, y), point) || (hawaiiPoint.point(x, y), point);
        }
        albersUsa.invert = function(coordinates) {
            var k = lower48.scale(), t = lower48.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
            return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii : lower48).invert(coordinates);
        };
        albersUsa.stream = function(stream) {
            return cache && cacheStream === stream ? cache : cache = multiplex([
                lower48.stream(cacheStream = stream),
                alaska.stream(stream),
                hawaii.stream(stream)
            ]);
        };
        albersUsa.precision = function(_) {
            if (!arguments.length) return lower48.precision();
            lower48.precision(_), alaska.precision(_), hawaii.precision(_);
            return reset();
        };
        albersUsa.scale = function(_) {
            if (!arguments.length) return lower48.scale();
            lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
            return albersUsa.translate(lower48.translate());
        };
        albersUsa.translate = function(_) {
            if (!arguments.length) return lower48.translate();
            var k = lower48.scale(), x = +_[0], y = +_[1];
            lower48Point = lower48.translate(_).clipExtent([
                [
                    x - 0.455 * k,
                    y - 0.238 * k
                ],
                [
                    x + 0.455 * k,
                    y + 0.238 * k
                ]
            ]).stream(pointStream);
            alaskaPoint = alaska.translate([
                x - 0.307 * k,
                y + 0.201 * k
            ]).clipExtent([
                [
                    x - 0.425 * k + (0, _math.epsilon),
                    y + 0.120 * k + (0, _math.epsilon)
                ],
                [
                    x - 0.214 * k - (0, _math.epsilon),
                    y + 0.234 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            hawaiiPoint = hawaii.translate([
                x - 0.205 * k,
                y + 0.212 * k
            ]).clipExtent([
                [
                    x - 0.214 * k + (0, _math.epsilon),
                    y + 0.166 * k + (0, _math.epsilon)
                ],
                [
                    x - 0.115 * k - (0, _math.epsilon),
                    y + 0.234 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            return reset();
        };
        albersUsa.fitExtent = function(extent, object) {
            return (0, _fit.fitExtent)(albersUsa, extent, object);
        };
        albersUsa.fitSize = function(size, object) {
            return (0, _fit.fitSize)(albersUsa, size, object);
        };
        function reset() {
            cache = cacheStream = null;
            return albersUsa;
        }
        albersUsa.drawCompositionBorders = function(context) {
            var hawaii1 = lower48([
                -102.91,
                26.3
            ]);
            var hawaii2 = lower48([
                -104,
                27.5
            ]);
            var hawaii3 = lower48([
                -108,
                29.1
            ]);
            var hawaii4 = lower48([
                -110,
                29.1
            ]);
            var alaska1 = lower48([
                -110,
                26.7
            ]);
            var alaska2 = lower48([
                -112.8,
                27.6
            ]);
            var alaska3 = lower48([
                -114.3,
                30.6
            ]);
            var alaska4 = lower48([
                -119.3,
                30.1
            ]);
            context.moveTo(hawaii1[0], hawaii1[1]);
            context.lineTo(hawaii2[0], hawaii2[1]);
            context.lineTo(hawaii3[0], hawaii3[1]);
            context.lineTo(hawaii4[0], hawaii4[1]);
            context.moveTo(alaska1[0], alaska1[1]);
            context.lineTo(alaska2[0], alaska2[1]);
            context.lineTo(alaska3[0], alaska3[1]);
            context.lineTo(alaska4[0], alaska4[1]);
        };
        albersUsa.getCompositionBorders = function() {
            var context = (0, _d3Path.path)();
            this.drawCompositionBorders(context);
            return context.toString();
        };
        return albersUsa.scale(1070);
    });
var _math = require("./math");
var _d3Geo = require("d3-geo");
var _fit = require("./fit");
var _d3Path = require("d3-path");
// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function multiplex(streams) {
    var n = streams.length;
    return {
        point: function(x, y) {
            var i = -1;
            while(++i < n)streams[i].point(x, y);
        },
        sphere: function() {
            var i = -1;
            while(++i < n)streams[i].sphere();
        },
        lineStart: function() {
            var i = -1;
            while(++i < n)streams[i].lineStart();
        },
        lineEnd: function() {
            var i = -1;
            while(++i < n)streams[i].lineEnd();
        },
        polygonStart: function() {
            var i = -1;
            while(++i < n)streams[i].polygonStart();
        },
        polygonEnd: function() {
            var i = -1;
            while(++i < n)streams[i].polygonEnd();
        }
    };
}

},{"./math":"e6zZ7","d3-geo":"8r6MJ","./fit":"3PIRf","d3-path":"fDKwR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e6zZ7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "epsilon", ()=>epsilon);
var epsilon = 1e-6;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8r6MJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "geoArea", ()=>(0, _areaJsDefault.default));
parcelHelpers.export(exports, "geoBounds", ()=>(0, _boundsJsDefault.default));
parcelHelpers.export(exports, "geoCentroid", ()=>(0, _centroidJsDefault.default));
parcelHelpers.export(exports, "geoCircle", ()=>(0, _circleJsDefault.default));
parcelHelpers.export(exports, "geoClipAntimeridian", ()=>(0, _antimeridianJsDefault.default));
parcelHelpers.export(exports, "geoClipCircle", ()=>(0, _circleJsDefault1.default));
parcelHelpers.export(exports, "geoClipExtent", ()=>(0, _extentJsDefault.default)) // DEPRECATED! Use d3.geoIdentity().clipExtent(…).
;
parcelHelpers.export(exports, "geoClipRectangle", ()=>(0, _rectangleJsDefault.default));
parcelHelpers.export(exports, "geoContains", ()=>(0, _containsJsDefault.default));
parcelHelpers.export(exports, "geoDistance", ()=>(0, _distanceJsDefault.default));
parcelHelpers.export(exports, "geoGraticule", ()=>(0, _graticuleJsDefault.default));
parcelHelpers.export(exports, "geoGraticule10", ()=>(0, _graticuleJs.graticule10));
parcelHelpers.export(exports, "geoInterpolate", ()=>(0, _interpolateJsDefault.default));
parcelHelpers.export(exports, "geoLength", ()=>(0, _lengthJsDefault.default));
parcelHelpers.export(exports, "geoPath", ()=>(0, _indexJsDefault.default));
parcelHelpers.export(exports, "geoAlbers", ()=>(0, _albersJsDefault.default));
parcelHelpers.export(exports, "geoAlbersUsa", ()=>(0, _albersUsaJsDefault.default));
parcelHelpers.export(exports, "geoAzimuthalEqualArea", ()=>(0, _azimuthalEqualAreaJsDefault.default));
parcelHelpers.export(exports, "geoAzimuthalEqualAreaRaw", ()=>(0, _azimuthalEqualAreaJs.azimuthalEqualAreaRaw));
parcelHelpers.export(exports, "geoAzimuthalEquidistant", ()=>(0, _azimuthalEquidistantJsDefault.default));
parcelHelpers.export(exports, "geoAzimuthalEquidistantRaw", ()=>(0, _azimuthalEquidistantJs.azimuthalEquidistantRaw));
parcelHelpers.export(exports, "geoConicConformal", ()=>(0, _conicConformalJsDefault.default));
parcelHelpers.export(exports, "geoConicConformalRaw", ()=>(0, _conicConformalJs.conicConformalRaw));
parcelHelpers.export(exports, "geoConicEqualArea", ()=>(0, _conicEqualAreaJsDefault.default));
parcelHelpers.export(exports, "geoConicEqualAreaRaw", ()=>(0, _conicEqualAreaJs.conicEqualAreaRaw));
parcelHelpers.export(exports, "geoConicEquidistant", ()=>(0, _conicEquidistantJsDefault.default));
parcelHelpers.export(exports, "geoConicEquidistantRaw", ()=>(0, _conicEquidistantJs.conicEquidistantRaw));
parcelHelpers.export(exports, "geoEqualEarth", ()=>(0, _equalEarthJsDefault.default));
parcelHelpers.export(exports, "geoEqualEarthRaw", ()=>(0, _equalEarthJs.equalEarthRaw));
parcelHelpers.export(exports, "geoEquirectangular", ()=>(0, _equirectangularJsDefault.default));
parcelHelpers.export(exports, "geoEquirectangularRaw", ()=>(0, _equirectangularJs.equirectangularRaw));
parcelHelpers.export(exports, "geoGnomonic", ()=>(0, _gnomonicJsDefault.default));
parcelHelpers.export(exports, "geoGnomonicRaw", ()=>(0, _gnomonicJs.gnomonicRaw));
parcelHelpers.export(exports, "geoIdentity", ()=>(0, _identityJsDefault.default));
parcelHelpers.export(exports, "geoProjection", ()=>(0, _indexJsDefault1.default));
parcelHelpers.export(exports, "geoProjectionMutator", ()=>(0, _indexJs1.projectionMutator));
parcelHelpers.export(exports, "geoMercator", ()=>(0, _mercatorJsDefault.default));
parcelHelpers.export(exports, "geoMercatorRaw", ()=>(0, _mercatorJs.mercatorRaw));
parcelHelpers.export(exports, "geoNaturalEarth1", ()=>(0, _naturalEarth1JsDefault.default));
parcelHelpers.export(exports, "geoNaturalEarth1Raw", ()=>(0, _naturalEarth1Js.naturalEarth1Raw));
parcelHelpers.export(exports, "geoOrthographic", ()=>(0, _orthographicJsDefault.default));
parcelHelpers.export(exports, "geoOrthographicRaw", ()=>(0, _orthographicJs.orthographicRaw));
parcelHelpers.export(exports, "geoStereographic", ()=>(0, _stereographicJsDefault.default));
parcelHelpers.export(exports, "geoStereographicRaw", ()=>(0, _stereographicJs.stereographicRaw));
parcelHelpers.export(exports, "geoTransverseMercator", ()=>(0, _transverseMercatorJsDefault.default));
parcelHelpers.export(exports, "geoTransverseMercatorRaw", ()=>(0, _transverseMercatorJs.transverseMercatorRaw));
parcelHelpers.export(exports, "geoRotation", ()=>(0, _rotationJsDefault.default));
parcelHelpers.export(exports, "geoStream", ()=>(0, _streamJsDefault.default));
parcelHelpers.export(exports, "geoTransform", ()=>(0, _transformJsDefault.default));
var _areaJs = require("./area.js");
var _areaJsDefault = parcelHelpers.interopDefault(_areaJs);
var _boundsJs = require("./bounds.js");
var _boundsJsDefault = parcelHelpers.interopDefault(_boundsJs);
var _centroidJs = require("./centroid.js");
var _centroidJsDefault = parcelHelpers.interopDefault(_centroidJs);
var _circleJs = require("./circle.js");
var _circleJsDefault = parcelHelpers.interopDefault(_circleJs);
var _antimeridianJs = require("./clip/antimeridian.js");
var _antimeridianJsDefault = parcelHelpers.interopDefault(_antimeridianJs);
var _circleJs1 = require("./clip/circle.js");
var _circleJsDefault1 = parcelHelpers.interopDefault(_circleJs1);
var _extentJs = require("./clip/extent.js");
var _extentJsDefault = parcelHelpers.interopDefault(_extentJs);
var _rectangleJs = require("./clip/rectangle.js");
var _rectangleJsDefault = parcelHelpers.interopDefault(_rectangleJs);
var _containsJs = require("./contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _distanceJs = require("./distance.js");
var _distanceJsDefault = parcelHelpers.interopDefault(_distanceJs);
var _graticuleJs = require("./graticule.js");
var _graticuleJsDefault = parcelHelpers.interopDefault(_graticuleJs);
var _interpolateJs = require("./interpolate.js");
var _interpolateJsDefault = parcelHelpers.interopDefault(_interpolateJs);
var _lengthJs = require("./length.js");
var _lengthJsDefault = parcelHelpers.interopDefault(_lengthJs);
var _indexJs = require("./path/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _albersJs = require("./projection/albers.js");
var _albersJsDefault = parcelHelpers.interopDefault(_albersJs);
var _albersUsaJs = require("./projection/albersUsa.js");
var _albersUsaJsDefault = parcelHelpers.interopDefault(_albersUsaJs);
var _azimuthalEqualAreaJs = require("./projection/azimuthalEqualArea.js");
var _azimuthalEqualAreaJsDefault = parcelHelpers.interopDefault(_azimuthalEqualAreaJs);
var _azimuthalEquidistantJs = require("./projection/azimuthalEquidistant.js");
var _azimuthalEquidistantJsDefault = parcelHelpers.interopDefault(_azimuthalEquidistantJs);
var _conicConformalJs = require("./projection/conicConformal.js");
var _conicConformalJsDefault = parcelHelpers.interopDefault(_conicConformalJs);
var _conicEqualAreaJs = require("./projection/conicEqualArea.js");
var _conicEqualAreaJsDefault = parcelHelpers.interopDefault(_conicEqualAreaJs);
var _conicEquidistantJs = require("./projection/conicEquidistant.js");
var _conicEquidistantJsDefault = parcelHelpers.interopDefault(_conicEquidistantJs);
var _equalEarthJs = require("./projection/equalEarth.js");
var _equalEarthJsDefault = parcelHelpers.interopDefault(_equalEarthJs);
var _equirectangularJs = require("./projection/equirectangular.js");
var _equirectangularJsDefault = parcelHelpers.interopDefault(_equirectangularJs);
var _gnomonicJs = require("./projection/gnomonic.js");
var _gnomonicJsDefault = parcelHelpers.interopDefault(_gnomonicJs);
var _identityJs = require("./projection/identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _indexJs1 = require("./projection/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _mercatorJs = require("./projection/mercator.js");
var _mercatorJsDefault = parcelHelpers.interopDefault(_mercatorJs);
var _naturalEarth1Js = require("./projection/naturalEarth1.js");
var _naturalEarth1JsDefault = parcelHelpers.interopDefault(_naturalEarth1Js);
var _orthographicJs = require("./projection/orthographic.js");
var _orthographicJsDefault = parcelHelpers.interopDefault(_orthographicJs);
var _stereographicJs = require("./projection/stereographic.js");
var _stereographicJsDefault = parcelHelpers.interopDefault(_stereographicJs);
var _transverseMercatorJs = require("./projection/transverseMercator.js");
var _transverseMercatorJsDefault = parcelHelpers.interopDefault(_transverseMercatorJs);
var _rotationJs = require("./rotation.js");
var _rotationJsDefault = parcelHelpers.interopDefault(_rotationJs);
var _streamJs = require("./stream.js");
var _streamJsDefault = parcelHelpers.interopDefault(_streamJs);
var _transformJs = require("./transform.js");
var _transformJsDefault = parcelHelpers.interopDefault(_transformJs);

},{"./area.js":false,"./bounds.js":false,"./centroid.js":false,"./circle.js":false,"./clip/antimeridian.js":false,"./clip/circle.js":false,"./clip/extent.js":false,"./clip/rectangle.js":false,"./contains.js":false,"./distance.js":false,"./graticule.js":false,"./interpolate.js":false,"./length.js":false,"./path/index.js":false,"./projection/albers.js":"lcyxr","./projection/albersUsa.js":false,"./projection/azimuthalEqualArea.js":false,"./projection/azimuthalEquidistant.js":false,"./projection/conicConformal.js":"apams","./projection/conicEqualArea.js":"e6Lsj","./projection/conicEquidistant.js":"iqJt5","./projection/equalEarth.js":false,"./projection/equirectangular.js":"44g0N","./projection/gnomonic.js":false,"./projection/identity.js":false,"./projection/index.js":false,"./projection/mercator.js":"85uKE","./projection/naturalEarth1.js":false,"./projection/orthographic.js":false,"./projection/stereographic.js":"d27wm","./projection/transverseMercator.js":"lNfCc","./rotation.js":false,"./stream.js":"f6Rdi","./transform.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dAD4R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Generates a circle centered at [0°, 0°], with a given radius and precision.
parcelHelpers.export(exports, "circleStream", ()=>circleStream);
parcelHelpers.export(exports, "default", ()=>function() {
        var center = (0, _constantJsDefault.default)([
            0,
            0
        ]), radius = (0, _constantJsDefault.default)(90), precision = (0, _constantJsDefault.default)(6), ring, rotate, stream = {
            point: point
        };
        function point(x, y) {
            ring.push(x = rotate(x, y));
            x[0] *= (0, _mathJs.degrees), x[1] *= (0, _mathJs.degrees);
        }
        function circle() {
            var c = center.apply(this, arguments), r = radius.apply(this, arguments) * (0, _mathJs.radians), p = precision.apply(this, arguments) * (0, _mathJs.radians);
            ring = [];
            rotate = (0, _rotationJs.rotateRadians)(-c[0] * (0, _mathJs.radians), -c[1] * (0, _mathJs.radians), 0).invert;
            circleStream(stream, r, p, 1);
            c = {
                type: "Polygon",
                coordinates: [
                    ring
                ]
            };
            ring = rotate = null;
            return c;
        }
        circle.center = function(_) {
            return arguments.length ? (center = typeof _ === "function" ? _ : (0, _constantJsDefault.default)([
                +_[0],
                +_[1]
            ]), circle) : center;
        };
        circle.radius = function(_) {
            return arguments.length ? (radius = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(+_), circle) : radius;
        };
        circle.precision = function(_) {
            return arguments.length ? (precision = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(+_), circle) : precision;
        };
        return circle;
    });
var _cartesianJs = require("./cartesian.js");
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _mathJs = require("./math.js");
var _rotationJs = require("./rotation.js");
function circleStream(stream, radius, delta, direction, t0, t1) {
    if (!delta) return;
    var cosRadius = (0, _mathJs.cos)(radius), sinRadius = (0, _mathJs.sin)(radius), step = direction * delta;
    if (t0 == null) {
        t0 = radius + direction * (0, _mathJs.tau);
        t1 = radius - step / 2;
    } else {
        t0 = circleRadius(cosRadius, t0);
        t1 = circleRadius(cosRadius, t1);
        if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * (0, _mathJs.tau);
    }
    for(var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step){
        point = (0, _cartesianJs.spherical)([
            cosRadius,
            -sinRadius * (0, _mathJs.cos)(t),
            -sinRadius * (0, _mathJs.sin)(t)
        ]);
        stream.point(point[0], point[1]);
    }
}
// Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
function circleRadius(cosRadius, point) {
    point = (0, _cartesianJs.cartesian)(point), point[0] -= cosRadius;
    (0, _cartesianJs.cartesianNormalizeInPlace)(point);
    var radius = (0, _mathJs.acos)(-point[1]);
    return ((-point[2] < 0 ? -radius : radius) + (0, _mathJs.tau) - (0, _mathJs.epsilon)) % (0, _mathJs.tau);
}

},{"./cartesian.js":"eMI3W","./constant.js":"2wn2I","./math.js":"2Fcwq","./rotation.js":"fcyx3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eMI3W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "spherical", ()=>spherical);
parcelHelpers.export(exports, "cartesian", ()=>cartesian);
parcelHelpers.export(exports, "cartesianDot", ()=>cartesianDot);
parcelHelpers.export(exports, "cartesianCross", ()=>cartesianCross);
// TODO return a
parcelHelpers.export(exports, "cartesianAddInPlace", ()=>cartesianAddInPlace);
parcelHelpers.export(exports, "cartesianScale", ()=>cartesianScale);
// TODO return d
parcelHelpers.export(exports, "cartesianNormalizeInPlace", ()=>cartesianNormalizeInPlace);
var _mathJs = require("./math.js");
function spherical(cartesian) {
    return [
        (0, _mathJs.atan2)(cartesian[1], cartesian[0]),
        (0, _mathJs.asin)(cartesian[2])
    ];
}
function cartesian(spherical) {
    var lambda = spherical[0], phi = spherical[1], cosPhi = (0, _mathJs.cos)(phi);
    return [
        cosPhi * (0, _mathJs.cos)(lambda),
        cosPhi * (0, _mathJs.sin)(lambda),
        (0, _mathJs.sin)(phi)
    ];
}
function cartesianDot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cartesianCross(a, b) {
    return [
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0]
    ];
}
function cartesianAddInPlace(a, b) {
    a[0] += b[0], a[1] += b[1], a[2] += b[2];
}
function cartesianScale(vector, k) {
    return [
        vector[0] * k,
        vector[1] * k,
        vector[2] * k
    ];
}
function cartesianNormalizeInPlace(d) {
    var l = (0, _mathJs.sqrt)(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    d[0] /= l, d[1] /= l, d[2] /= l;
}

},{"./math.js":"2Fcwq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Fcwq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "epsilon", ()=>epsilon);
parcelHelpers.export(exports, "epsilon2", ()=>epsilon2);
parcelHelpers.export(exports, "pi", ()=>pi);
parcelHelpers.export(exports, "halfPi", ()=>halfPi);
parcelHelpers.export(exports, "quarterPi", ()=>quarterPi);
parcelHelpers.export(exports, "tau", ()=>tau);
parcelHelpers.export(exports, "degrees", ()=>degrees);
parcelHelpers.export(exports, "radians", ()=>radians);
parcelHelpers.export(exports, "abs", ()=>abs);
parcelHelpers.export(exports, "atan", ()=>atan);
parcelHelpers.export(exports, "atan2", ()=>atan2);
parcelHelpers.export(exports, "cos", ()=>cos);
parcelHelpers.export(exports, "ceil", ()=>ceil);
parcelHelpers.export(exports, "exp", ()=>exp);
parcelHelpers.export(exports, "floor", ()=>floor);
parcelHelpers.export(exports, "hypot", ()=>hypot);
parcelHelpers.export(exports, "log", ()=>log);
parcelHelpers.export(exports, "pow", ()=>pow);
parcelHelpers.export(exports, "sin", ()=>sin);
parcelHelpers.export(exports, "sign", ()=>sign);
parcelHelpers.export(exports, "sqrt", ()=>sqrt);
parcelHelpers.export(exports, "tan", ()=>tan);
parcelHelpers.export(exports, "acos", ()=>acos);
parcelHelpers.export(exports, "asin", ()=>asin);
parcelHelpers.export(exports, "haversin", ()=>haversin);
var epsilon = 1e-6;
var epsilon2 = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var tau = pi * 2;
var degrees = 180 / pi;
var radians = pi / 180;
var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos = Math.cos;
var ceil = Math.ceil;
var exp = Math.exp;
var floor = Math.floor;
var hypot = Math.hypot;
var log = Math.log;
var pow = Math.pow;
var sin = Math.sin;
var sign = Math.sign || function(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
};
var sqrt = Math.sqrt;
var tan = Math.tan;
function acos(x) {
    return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}
function asin(x) {
    return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}
function haversin(x) {
    return (x = sin(x / 2)) * x;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2wn2I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(x) {
        return function() {
            return x;
        };
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fcyx3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rotateRadians", ()=>rotateRadians);
parcelHelpers.export(exports, "default", ()=>function(rotate) {
        rotate = rotateRadians(rotate[0] * (0, _mathJs.radians), rotate[1] * (0, _mathJs.radians), rotate.length > 2 ? rotate[2] * (0, _mathJs.radians) : 0);
        function forward(coordinates) {
            coordinates = rotate(coordinates[0] * (0, _mathJs.radians), coordinates[1] * (0, _mathJs.radians));
            return coordinates[0] *= (0, _mathJs.degrees), coordinates[1] *= (0, _mathJs.degrees), coordinates;
        }
        forward.invert = function(coordinates) {
            coordinates = rotate.invert(coordinates[0] * (0, _mathJs.radians), coordinates[1] * (0, _mathJs.radians));
            return coordinates[0] *= (0, _mathJs.degrees), coordinates[1] *= (0, _mathJs.degrees), coordinates;
        };
        return forward;
    });
var _composeJs = require("./compose.js");
var _composeJsDefault = parcelHelpers.interopDefault(_composeJs);
var _mathJs = require("./math.js");
function rotationIdentity(lambda, phi) {
    return [
        (0, _mathJs.abs)(lambda) > (0, _mathJs.pi) ? lambda + Math.round(-lambda / (0, _mathJs.tau)) * (0, _mathJs.tau) : lambda,
        phi
    ];
}
rotationIdentity.invert = rotationIdentity;
function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
    return (deltaLambda %= (0, _mathJs.tau)) ? deltaPhi || deltaGamma ? (0, _composeJsDefault.default)(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma)) : rotationLambda(deltaLambda) : deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma) : rotationIdentity;
}
function forwardRotationLambda(deltaLambda) {
    return function(lambda, phi) {
        return lambda += deltaLambda, [
            lambda > (0, _mathJs.pi) ? lambda - (0, _mathJs.tau) : lambda < -(0, _mathJs.pi) ? lambda + (0, _mathJs.tau) : lambda,
            phi
        ];
    };
}
function rotationLambda(deltaLambda) {
    var rotation = forwardRotationLambda(deltaLambda);
    rotation.invert = forwardRotationLambda(-deltaLambda);
    return rotation;
}
function rotationPhiGamma(deltaPhi, deltaGamma) {
    var cosDeltaPhi = (0, _mathJs.cos)(deltaPhi), sinDeltaPhi = (0, _mathJs.sin)(deltaPhi), cosDeltaGamma = (0, _mathJs.cos)(deltaGamma), sinDeltaGamma = (0, _mathJs.sin)(deltaGamma);
    function rotation(lambda, phi) {
        var cosPhi = (0, _mathJs.cos)(phi), x = (0, _mathJs.cos)(lambda) * cosPhi, y = (0, _mathJs.sin)(lambda) * cosPhi, z = (0, _mathJs.sin)(phi), k = z * cosDeltaPhi + x * sinDeltaPhi;
        return [
            (0, _mathJs.atan2)(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
            (0, _mathJs.asin)(k * cosDeltaGamma + y * sinDeltaGamma)
        ];
    }
    rotation.invert = function(lambda, phi) {
        var cosPhi = (0, _mathJs.cos)(phi), x = (0, _mathJs.cos)(lambda) * cosPhi, y = (0, _mathJs.sin)(lambda) * cosPhi, z = (0, _mathJs.sin)(phi), k = z * cosDeltaGamma - y * sinDeltaGamma;
        return [
            (0, _mathJs.atan2)(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
            (0, _mathJs.asin)(k * cosDeltaPhi - x * sinDeltaPhi)
        ];
    };
    return rotation;
}

},{"./compose.js":"1uk1Z","./math.js":"2Fcwq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1uk1Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, b) {
        function compose(x, y) {
            return x = a(x, y), b(x[0], x[1]);
        }
        if (a.invert && b.invert) compose.invert = function(x, y) {
            return x = b.invert(x, y), x && a.invert(x[0], x[1]);
        };
        return compose;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"klRvq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _mathJs = require("../math.js");
exports.default = (0, _indexJsDefault.default)(function() {
    return true;
}, clipAntimeridianLine, clipAntimeridianInterpolate, [
    -(0, _mathJs.pi),
    -(0, _mathJs.halfPi)
]);
// Takes a line and cuts into visible segments. Return values: 0 - there were
// intersections or the line was empty; 1 - no intersections; 2 - there were
// intersections, and the first and last segments should be rejoined.
function clipAntimeridianLine(stream) {
    var lambda0 = NaN, phi0 = NaN, sign0 = NaN, clean; // no intersections
    return {
        lineStart: function() {
            stream.lineStart();
            clean = 1;
        },
        point: function(lambda1, phi1) {
            var sign1 = lambda1 > 0 ? (0, _mathJs.pi) : -(0, _mathJs.pi), delta = (0, _mathJs.abs)(lambda1 - lambda0);
            if ((0, _mathJs.abs)(delta - (0, _mathJs.pi)) < (0, _mathJs.epsilon)) {
                stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? (0, _mathJs.halfPi) : -(0, _mathJs.halfPi));
                stream.point(sign0, phi0);
                stream.lineEnd();
                stream.lineStart();
                stream.point(sign1, phi0);
                stream.point(lambda1, phi0);
                clean = 0;
            } else if (sign0 !== sign1 && delta >= (0, _mathJs.pi)) {
                if ((0, _mathJs.abs)(lambda0 - sign0) < (0, _mathJs.epsilon)) lambda0 -= sign0 * (0, _mathJs.epsilon); // handle degeneracies
                if ((0, _mathJs.abs)(lambda1 - sign1) < (0, _mathJs.epsilon)) lambda1 -= sign1 * (0, _mathJs.epsilon);
                phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
                stream.point(sign0, phi0);
                stream.lineEnd();
                stream.lineStart();
                stream.point(sign1, phi0);
                clean = 0;
            }
            stream.point(lambda0 = lambda1, phi0 = phi1);
            sign0 = sign1;
        },
        lineEnd: function() {
            stream.lineEnd();
            lambda0 = phi0 = NaN;
        },
        clean: function() {
            return 2 - clean; // if intersections, rejoin first and last segments
        }
    };
}
function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
    var cosPhi0, cosPhi1, sinLambda0Lambda1 = (0, _mathJs.sin)(lambda0 - lambda1);
    return (0, _mathJs.abs)(sinLambda0Lambda1) > (0, _mathJs.epsilon) ? (0, _mathJs.atan)(((0, _mathJs.sin)(phi0) * (cosPhi1 = (0, _mathJs.cos)(phi1)) * (0, _mathJs.sin)(lambda1) - (0, _mathJs.sin)(phi1) * (cosPhi0 = (0, _mathJs.cos)(phi0)) * (0, _mathJs.sin)(lambda0)) / (cosPhi0 * cosPhi1 * sinLambda0Lambda1)) : (phi0 + phi1) / 2;
}
function clipAntimeridianInterpolate(from, to, direction, stream) {
    var phi;
    if (from == null) {
        phi = direction * (0, _mathJs.halfPi);
        stream.point(-(0, _mathJs.pi), phi);
        stream.point(0, phi);
        stream.point((0, _mathJs.pi), phi);
        stream.point((0, _mathJs.pi), 0);
        stream.point((0, _mathJs.pi), -phi);
        stream.point(0, -phi);
        stream.point(-(0, _mathJs.pi), -phi);
        stream.point(-(0, _mathJs.pi), 0);
        stream.point(-(0, _mathJs.pi), phi);
    } else if ((0, _mathJs.abs)(from[0] - to[0]) > (0, _mathJs.epsilon)) {
        var lambda = from[0] < to[0] ? (0, _mathJs.pi) : -(0, _mathJs.pi);
        phi = direction * lambda / 2;
        stream.point(-lambda, phi);
        stream.point(0, phi);
        stream.point(lambda, phi);
    } else stream.point(to[0], to[1]);
}

},{"./index.js":"gEapZ","../math.js":"2Fcwq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gEapZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(pointVisible, clipLine, interpolate, start) {
        return function(sink) {
            var line = clipLine(sink), ringBuffer = (0, _bufferJsDefault.default)(), ringSink = clipLine(ringBuffer), polygonStarted = false, polygon, segments, ring;
            var clip = {
                point: point,
                lineStart: lineStart,
                lineEnd: lineEnd,
                polygonStart: function() {
                    clip.point = pointRing;
                    clip.lineStart = ringStart;
                    clip.lineEnd = ringEnd;
                    segments = [];
                    polygon = [];
                },
                polygonEnd: function() {
                    clip.point = point;
                    clip.lineStart = lineStart;
                    clip.lineEnd = lineEnd;
                    segments = (0, _d3Array.merge)(segments);
                    var startInside = (0, _polygonContainsJsDefault.default)(polygon, start);
                    if (segments.length) {
                        if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                        (0, _rejoinJsDefault.default)(segments, compareIntersection, startInside, interpolate, sink);
                    } else if (startInside) {
                        if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                        sink.lineStart();
                        interpolate(null, null, 1, sink);
                        sink.lineEnd();
                    }
                    if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
                    segments = polygon = null;
                },
                sphere: function() {
                    sink.polygonStart();
                    sink.lineStart();
                    interpolate(null, null, 1, sink);
                    sink.lineEnd();
                    sink.polygonEnd();
                }
            };
            function point(lambda, phi) {
                if (pointVisible(lambda, phi)) sink.point(lambda, phi);
            }
            function pointLine(lambda, phi) {
                line.point(lambda, phi);
            }
            function lineStart() {
                clip.point = pointLine;
                line.lineStart();
            }
            function lineEnd() {
                clip.point = point;
                line.lineEnd();
            }
            function pointRing(lambda, phi) {
                ring.push([
                    lambda,
                    phi
                ]);
                ringSink.point(lambda, phi);
            }
            function ringStart() {
                ringSink.lineStart();
                ring = [];
            }
            function ringEnd() {
                pointRing(ring[0][0], ring[0][1]);
                ringSink.lineEnd();
                var clean = ringSink.clean(), ringSegments = ringBuffer.result(), i, n = ringSegments.length, m, segment, point;
                ring.pop();
                polygon.push(ring);
                ring = null;
                if (!n) return;
                // No intersections.
                if (clean & 1) {
                    segment = ringSegments[0];
                    if ((m = segment.length - 1) > 0) {
                        if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                        sink.lineStart();
                        for(i = 0; i < m; ++i)sink.point((point = segment[i])[0], point[1]);
                        sink.lineEnd();
                    }
                    return;
                }
                // Rejoin connected segments.
                // TODO reuse ringBuffer.rejoin()?
                if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
                segments.push(ringSegments.filter(validSegment));
            }
            return clip;
        };
    });
var _bufferJs = require("./buffer.js");
var _bufferJsDefault = parcelHelpers.interopDefault(_bufferJs);
var _rejoinJs = require("./rejoin.js");
var _rejoinJsDefault = parcelHelpers.interopDefault(_rejoinJs);
var _mathJs = require("../math.js");
var _polygonContainsJs = require("../polygonContains.js");
var _polygonContainsJsDefault = parcelHelpers.interopDefault(_polygonContainsJs);
var _d3Array = require("d3-array");
function validSegment(segment) {
    return segment.length > 1;
}
// Intersections are sorted along the clip edge. For both antimeridian cutting
// and circle clipping, the same comparison is used.
function compareIntersection(a, b) {
    return ((a = a.x)[0] < 0 ? a[1] - (0, _mathJs.halfPi) - (0, _mathJs.epsilon) : (0, _mathJs.halfPi) - a[1]) - ((b = b.x)[0] < 0 ? b[1] - (0, _mathJs.halfPi) - (0, _mathJs.epsilon) : (0, _mathJs.halfPi) - b[1]);
}

},{"./buffer.js":"39brN","./rejoin.js":"7AHoo","../math.js":"2Fcwq","../polygonContains.js":"iopQd","d3-array":"D1ltS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"39brN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        var lines = [], line;
        return {
            point: function(x, y, m) {
                line.push([
                    x,
                    y,
                    m
                ]);
            },
            lineStart: function() {
                lines.push(line = []);
            },
            lineEnd: (0, _noopJsDefault.default),
            rejoin: function() {
                if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
            },
            result: function() {
                var result = lines;
                lines = [];
                line = null;
                return result;
            }
        };
    });
var _noopJs = require("../noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);

},{"../noop.js":"k0hkP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k0hkP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>noop);
function noop() {}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7AHoo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// A generalized polygon clipping algorithm: given a polygon that has been cut
// into its visible line segments, and rejoins the segments by interpolating
// along the clip edge.
parcelHelpers.export(exports, "default", ()=>function(segments, compareIntersection, startInside, interpolate, stream) {
        var subject = [], clip = [], i, n;
        segments.forEach(function(segment) {
            if ((n = segment.length - 1) <= 0) return;
            var n, p0 = segment[0], p1 = segment[n], x;
            if ((0, _pointEqualJsDefault.default)(p0, p1)) {
                if (!p0[2] && !p1[2]) {
                    stream.lineStart();
                    for(i = 0; i < n; ++i)stream.point((p0 = segment[i])[0], p0[1]);
                    stream.lineEnd();
                    return;
                }
                // handle degenerate cases by moving the point
                p1[0] += 2 * (0, _mathJs.epsilon);
            }
            subject.push(x = new Intersection(p0, segment, null, true));
            clip.push(x.o = new Intersection(p0, null, x, false));
            subject.push(x = new Intersection(p1, segment, null, false));
            clip.push(x.o = new Intersection(p1, null, x, true));
        });
        if (!subject.length) return;
        clip.sort(compareIntersection);
        link(subject);
        link(clip);
        for(i = 0, n = clip.length; i < n; ++i)clip[i].e = startInside = !startInside;
        var start = subject[0], points, point;
        while(true){
            // Find first unvisited intersection.
            var current = start, isSubject = true;
            while(current.v)if ((current = current.n) === start) return;
            points = current.z;
            stream.lineStart();
            do {
                current.v = current.o.v = true;
                if (current.e) {
                    if (isSubject) for(i = 0, n = points.length; i < n; ++i)stream.point((point = points[i])[0], point[1]);
                    else interpolate(current.x, current.n.x, 1, stream);
                    current = current.n;
                } else {
                    if (isSubject) {
                        points = current.p.z;
                        for(i = points.length - 1; i >= 0; --i)stream.point((point = points[i])[0], point[1]);
                    } else interpolate(current.x, current.p.x, -1, stream);
                    current = current.p;
                }
                current = current.o;
                points = current.z;
                isSubject = !isSubject;
            }while (!current.v);
            stream.lineEnd();
        }
    });
var _pointEqualJs = require("../pointEqual.js");
var _pointEqualJsDefault = parcelHelpers.interopDefault(_pointEqualJs);
var _mathJs = require("../math.js");
function Intersection(point, points, other, entry) {
    this.x = point;
    this.z = points;
    this.o = other; // another intersection
    this.e = entry; // is an entry?
    this.v = false; // visited
    this.n = this.p = null; // next & previous
}
function link(array) {
    if (!(n = array.length)) return;
    var n, i = 0, a = array[0], b;
    while(++i < n){
        a.n = b = array[i];
        b.p = a;
        a = b;
    }
    a.n = b = array[0];
    b.p = a;
}

},{"../pointEqual.js":"cVyki","../math.js":"2Fcwq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cVyki":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, b) {
        return (0, _mathJs.abs)(a[0] - b[0]) < (0, _mathJs.epsilon) && (0, _mathJs.abs)(a[1] - b[1]) < (0, _mathJs.epsilon);
    });
var _mathJs = require("./math.js");

},{"./math.js":"2Fcwq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iopQd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(polygon, point) {
        var lambda = longitude(point), phi = point[1], sinPhi = (0, _mathJs.sin)(phi), normal = [
            (0, _mathJs.sin)(lambda),
            -(0, _mathJs.cos)(lambda),
            0
        ], angle = 0, winding = 0;
        var sum = new (0, _d3Array.Adder)();
        if (sinPhi === 1) phi = (0, _mathJs.halfPi) + (0, _mathJs.epsilon);
        else if (sinPhi === -1) phi = -(0, _mathJs.halfPi) - (0, _mathJs.epsilon);
        for(var i = 0, n = polygon.length; i < n; ++i){
            if (!(m = (ring = polygon[i]).length)) continue;
            var ring, m, point0 = ring[m - 1], lambda0 = longitude(point0), phi0 = point0[1] / 2 + (0, _mathJs.quarterPi), sinPhi0 = (0, _mathJs.sin)(phi0), cosPhi0 = (0, _mathJs.cos)(phi0);
            for(var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1){
                var point1 = ring[j], lambda1 = longitude(point1), phi1 = point1[1] / 2 + (0, _mathJs.quarterPi), sinPhi1 = (0, _mathJs.sin)(phi1), cosPhi1 = (0, _mathJs.cos)(phi1), delta = lambda1 - lambda0, sign = delta >= 0 ? 1 : -1, absDelta = sign * delta, antimeridian = absDelta > (0, _mathJs.pi), k = sinPhi0 * sinPhi1;
                sum.add((0, _mathJs.atan2)(k * sign * (0, _mathJs.sin)(absDelta), cosPhi0 * cosPhi1 + k * (0, _mathJs.cos)(absDelta)));
                angle += antimeridian ? delta + sign * (0, _mathJs.tau) : delta;
                // Are the longitudes either side of the point’s meridian (lambda),
                // and are the latitudes smaller than the parallel (phi)?
                if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
                    var arc = (0, _cartesianJs.cartesianCross)((0, _cartesianJs.cartesian)(point0), (0, _cartesianJs.cartesian)(point1));
                    (0, _cartesianJs.cartesianNormalizeInPlace)(arc);
                    var intersection = (0, _cartesianJs.cartesianCross)(normal, arc);
                    (0, _cartesianJs.cartesianNormalizeInPlace)(intersection);
                    var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * (0, _mathJs.asin)(intersection[2]);
                    if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) winding += antimeridian ^ delta >= 0 ? 1 : -1;
                }
            }
        }
        // First, determine whether the South pole is inside or outside:
        //
        // It is inside if:
        // * the polygon winds around it in a clockwise direction.
        // * the polygon does not (cumulatively) wind around it, but has a negative
        //   (counter-clockwise) area.
        //
        // Second, count the (signed) number of times a segment crosses a lambda
        // from the point to the South pole.  If it is zero, then the point is the
        // same side as the South pole.
        return (angle < -(0, _mathJs.epsilon) || angle < (0, _mathJs.epsilon) && sum < -(0, _mathJs.epsilon2)) ^ winding & 1;
    });
var _d3Array = require("d3-array");
var _cartesianJs = require("./cartesian.js");
var _mathJs = require("./math.js");
function longitude(point) {
    if ((0, _mathJs.abs)(point[0]) <= (0, _mathJs.pi)) return point[0];
    else return (0, _mathJs.sign)(point[0]) * (((0, _mathJs.abs)(point[0]) + (0, _mathJs.pi)) % (0, _mathJs.tau) - (0, _mathJs.pi));
}

},{"d3-array":"D1ltS","./cartesian.js":"eMI3W","./math.js":"2Fcwq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"D1ltS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bisect", ()=>(0, _bisectJsDefault.default));
parcelHelpers.export(exports, "bisectRight", ()=>(0, _bisectJs.bisectRight));
parcelHelpers.export(exports, "bisectLeft", ()=>(0, _bisectJs.bisectLeft));
parcelHelpers.export(exports, "bisectCenter", ()=>(0, _bisectJs.bisectCenter));
parcelHelpers.export(exports, "ascending", ()=>(0, _ascendingJsDefault.default));
parcelHelpers.export(exports, "bisector", ()=>(0, _bisectorJsDefault.default));
parcelHelpers.export(exports, "count", ()=>(0, _countJsDefault.default));
parcelHelpers.export(exports, "cross", ()=>(0, _crossJsDefault.default));
parcelHelpers.export(exports, "cumsum", ()=>(0, _cumsumJsDefault.default));
parcelHelpers.export(exports, "descending", ()=>(0, _descendingJsDefault.default));
parcelHelpers.export(exports, "deviation", ()=>(0, _deviationJsDefault.default));
parcelHelpers.export(exports, "extent", ()=>(0, _extentJsDefault.default));
parcelHelpers.export(exports, "Adder", ()=>(0, _fsumJs.Adder));
parcelHelpers.export(exports, "fsum", ()=>(0, _fsumJs.fsum));
parcelHelpers.export(exports, "fcumsum", ()=>(0, _fsumJs.fcumsum));
parcelHelpers.export(exports, "group", ()=>(0, _groupJsDefault.default));
parcelHelpers.export(exports, "groups", ()=>(0, _groupJs.groups));
parcelHelpers.export(exports, "index", ()=>(0, _groupJs.index));
parcelHelpers.export(exports, "indexes", ()=>(0, _groupJs.indexes));
parcelHelpers.export(exports, "rollup", ()=>(0, _groupJs.rollup));
parcelHelpers.export(exports, "rollups", ()=>(0, _groupJs.rollups));
parcelHelpers.export(exports, "groupSort", ()=>(0, _groupSortJsDefault.default));
parcelHelpers.export(exports, "bin", ()=>(0, _binJsDefault.default)) // Deprecated; use bin.
;
parcelHelpers.export(exports, "histogram", ()=>(0, _binJsDefault.default));
parcelHelpers.export(exports, "thresholdFreedmanDiaconis", ()=>(0, _freedmanDiaconisJsDefault.default));
parcelHelpers.export(exports, "thresholdScott", ()=>(0, _scottJsDefault.default));
parcelHelpers.export(exports, "thresholdSturges", ()=>(0, _sturgesJsDefault.default));
parcelHelpers.export(exports, "max", ()=>(0, _maxJsDefault.default));
parcelHelpers.export(exports, "maxIndex", ()=>(0, _maxIndexJsDefault.default));
parcelHelpers.export(exports, "mean", ()=>(0, _meanJsDefault.default));
parcelHelpers.export(exports, "median", ()=>(0, _medianJsDefault.default));
parcelHelpers.export(exports, "merge", ()=>(0, _mergeJsDefault.default));
parcelHelpers.export(exports, "min", ()=>(0, _minJsDefault.default));
parcelHelpers.export(exports, "minIndex", ()=>(0, _minIndexJsDefault.default));
parcelHelpers.export(exports, "nice", ()=>(0, _niceJsDefault.default));
parcelHelpers.export(exports, "pairs", ()=>(0, _pairsJsDefault.default));
parcelHelpers.export(exports, "permute", ()=>(0, _permuteJsDefault.default));
parcelHelpers.export(exports, "quantile", ()=>(0, _quantileJsDefault.default));
parcelHelpers.export(exports, "quantileSorted", ()=>(0, _quantileJs.quantileSorted));
parcelHelpers.export(exports, "quickselect", ()=>(0, _quickselectJsDefault.default));
parcelHelpers.export(exports, "range", ()=>(0, _rangeJsDefault.default));
parcelHelpers.export(exports, "least", ()=>(0, _leastJsDefault.default));
parcelHelpers.export(exports, "leastIndex", ()=>(0, _leastIndexJsDefault.default));
parcelHelpers.export(exports, "greatest", ()=>(0, _greatestJsDefault.default));
parcelHelpers.export(exports, "greatestIndex", ()=>(0, _greatestIndexJsDefault.default));
parcelHelpers.export(exports, "scan", ()=>(0, _scanJsDefault.default)) // Deprecated; use leastIndex.
;
parcelHelpers.export(exports, "shuffle", ()=>(0, _shuffleJsDefault.default));
parcelHelpers.export(exports, "shuffler", ()=>(0, _shuffleJs.shuffler));
parcelHelpers.export(exports, "sum", ()=>(0, _sumJsDefault.default));
parcelHelpers.export(exports, "ticks", ()=>(0, _ticksJsDefault.default));
parcelHelpers.export(exports, "tickIncrement", ()=>(0, _ticksJs.tickIncrement));
parcelHelpers.export(exports, "tickStep", ()=>(0, _ticksJs.tickStep));
parcelHelpers.export(exports, "transpose", ()=>(0, _transposeJsDefault.default));
parcelHelpers.export(exports, "variance", ()=>(0, _varianceJsDefault.default));
parcelHelpers.export(exports, "zip", ()=>(0, _zipJsDefault.default));
parcelHelpers.export(exports, "every", ()=>(0, _everyJsDefault.default));
parcelHelpers.export(exports, "some", ()=>(0, _someJsDefault.default));
parcelHelpers.export(exports, "filter", ()=>(0, _filterJsDefault.default));
parcelHelpers.export(exports, "map", ()=>(0, _mapJsDefault.default));
parcelHelpers.export(exports, "reduce", ()=>(0, _reduceJsDefault.default));
parcelHelpers.export(exports, "reverse", ()=>(0, _reverseJsDefault.default));
parcelHelpers.export(exports, "sort", ()=>(0, _sortJsDefault.default));
parcelHelpers.export(exports, "difference", ()=>(0, _differenceJsDefault.default));
parcelHelpers.export(exports, "disjoint", ()=>(0, _disjointJsDefault.default));
parcelHelpers.export(exports, "intersection", ()=>(0, _intersectionJsDefault.default));
parcelHelpers.export(exports, "subset", ()=>(0, _subsetJsDefault.default));
parcelHelpers.export(exports, "superset", ()=>(0, _supersetJsDefault.default));
parcelHelpers.export(exports, "union", ()=>(0, _unionJsDefault.default));
parcelHelpers.export(exports, "InternMap", ()=>(0, _internmap.InternMap));
parcelHelpers.export(exports, "InternSet", ()=>(0, _internmap.InternSet));
var _bisectJs = require("./bisect.js");
var _bisectJsDefault = parcelHelpers.interopDefault(_bisectJs);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
var _bisectorJs = require("./bisector.js");
var _bisectorJsDefault = parcelHelpers.interopDefault(_bisectorJs);
var _countJs = require("./count.js");
var _countJsDefault = parcelHelpers.interopDefault(_countJs);
var _crossJs = require("./cross.js");
var _crossJsDefault = parcelHelpers.interopDefault(_crossJs);
var _cumsumJs = require("./cumsum.js");
var _cumsumJsDefault = parcelHelpers.interopDefault(_cumsumJs);
var _descendingJs = require("./descending.js");
var _descendingJsDefault = parcelHelpers.interopDefault(_descendingJs);
var _deviationJs = require("./deviation.js");
var _deviationJsDefault = parcelHelpers.interopDefault(_deviationJs);
var _extentJs = require("./extent.js");
var _extentJsDefault = parcelHelpers.interopDefault(_extentJs);
var _fsumJs = require("./fsum.js");
var _groupJs = require("./group.js");
var _groupJsDefault = parcelHelpers.interopDefault(_groupJs);
var _groupSortJs = require("./groupSort.js");
var _groupSortJsDefault = parcelHelpers.interopDefault(_groupSortJs);
var _binJs = require("./bin.js");
var _binJsDefault = parcelHelpers.interopDefault(_binJs);
var _freedmanDiaconisJs = require("./threshold/freedmanDiaconis.js");
var _freedmanDiaconisJsDefault = parcelHelpers.interopDefault(_freedmanDiaconisJs);
var _scottJs = require("./threshold/scott.js");
var _scottJsDefault = parcelHelpers.interopDefault(_scottJs);
var _sturgesJs = require("./threshold/sturges.js");
var _sturgesJsDefault = parcelHelpers.interopDefault(_sturgesJs);
var _maxJs = require("./max.js");
var _maxJsDefault = parcelHelpers.interopDefault(_maxJs);
var _maxIndexJs = require("./maxIndex.js");
var _maxIndexJsDefault = parcelHelpers.interopDefault(_maxIndexJs);
var _meanJs = require("./mean.js");
var _meanJsDefault = parcelHelpers.interopDefault(_meanJs);
var _medianJs = require("./median.js");
var _medianJsDefault = parcelHelpers.interopDefault(_medianJs);
var _mergeJs = require("./merge.js");
var _mergeJsDefault = parcelHelpers.interopDefault(_mergeJs);
var _minJs = require("./min.js");
var _minJsDefault = parcelHelpers.interopDefault(_minJs);
var _minIndexJs = require("./minIndex.js");
var _minIndexJsDefault = parcelHelpers.interopDefault(_minIndexJs);
var _niceJs = require("./nice.js");
var _niceJsDefault = parcelHelpers.interopDefault(_niceJs);
var _pairsJs = require("./pairs.js");
var _pairsJsDefault = parcelHelpers.interopDefault(_pairsJs);
var _permuteJs = require("./permute.js");
var _permuteJsDefault = parcelHelpers.interopDefault(_permuteJs);
var _quantileJs = require("./quantile.js");
var _quantileJsDefault = parcelHelpers.interopDefault(_quantileJs);
var _quickselectJs = require("./quickselect.js");
var _quickselectJsDefault = parcelHelpers.interopDefault(_quickselectJs);
var _rangeJs = require("./range.js");
var _rangeJsDefault = parcelHelpers.interopDefault(_rangeJs);
var _leastJs = require("./least.js");
var _leastJsDefault = parcelHelpers.interopDefault(_leastJs);
var _leastIndexJs = require("./leastIndex.js");
var _leastIndexJsDefault = parcelHelpers.interopDefault(_leastIndexJs);
var _greatestJs = require("./greatest.js");
var _greatestJsDefault = parcelHelpers.interopDefault(_greatestJs);
var _greatestIndexJs = require("./greatestIndex.js");
var _greatestIndexJsDefault = parcelHelpers.interopDefault(_greatestIndexJs);
var _scanJs = require("./scan.js");
var _scanJsDefault = parcelHelpers.interopDefault(_scanJs);
var _shuffleJs = require("./shuffle.js");
var _shuffleJsDefault = parcelHelpers.interopDefault(_shuffleJs);
var _sumJs = require("./sum.js");
var _sumJsDefault = parcelHelpers.interopDefault(_sumJs);
var _ticksJs = require("./ticks.js");
var _ticksJsDefault = parcelHelpers.interopDefault(_ticksJs);
var _transposeJs = require("./transpose.js");
var _transposeJsDefault = parcelHelpers.interopDefault(_transposeJs);
var _varianceJs = require("./variance.js");
var _varianceJsDefault = parcelHelpers.interopDefault(_varianceJs);
var _zipJs = require("./zip.js");
var _zipJsDefault = parcelHelpers.interopDefault(_zipJs);
var _everyJs = require("./every.js");
var _everyJsDefault = parcelHelpers.interopDefault(_everyJs);
var _someJs = require("./some.js");
var _someJsDefault = parcelHelpers.interopDefault(_someJs);
var _filterJs = require("./filter.js");
var _filterJsDefault = parcelHelpers.interopDefault(_filterJs);
var _mapJs = require("./map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _reduceJs = require("./reduce.js");
var _reduceJsDefault = parcelHelpers.interopDefault(_reduceJs);
var _reverseJs = require("./reverse.js");
var _reverseJsDefault = parcelHelpers.interopDefault(_reverseJs);
var _sortJs = require("./sort.js");
var _sortJsDefault = parcelHelpers.interopDefault(_sortJs);
var _differenceJs = require("./difference.js");
var _differenceJsDefault = parcelHelpers.interopDefault(_differenceJs);
var _disjointJs = require("./disjoint.js");
var _disjointJsDefault = parcelHelpers.interopDefault(_disjointJs);
var _intersectionJs = require("./intersection.js");
var _intersectionJsDefault = parcelHelpers.interopDefault(_intersectionJs);
var _subsetJs = require("./subset.js");
var _subsetJsDefault = parcelHelpers.interopDefault(_subsetJs);
var _supersetJs = require("./superset.js");
var _supersetJsDefault = parcelHelpers.interopDefault(_supersetJs);
var _unionJs = require("./union.js");
var _unionJsDefault = parcelHelpers.interopDefault(_unionJs);
var _internmap = require("internmap");

},{"./bisect.js":false,"./ascending.js":false,"./bisector.js":false,"./count.js":false,"./cross.js":false,"./cumsum.js":false,"./descending.js":false,"./deviation.js":false,"./extent.js":false,"./fsum.js":"8tOOh","./group.js":false,"./groupSort.js":false,"./bin.js":false,"./threshold/freedmanDiaconis.js":false,"./threshold/scott.js":false,"./threshold/sturges.js":false,"./max.js":false,"./maxIndex.js":false,"./mean.js":false,"./median.js":false,"./merge.js":"7lsCB","./min.js":false,"./minIndex.js":false,"./nice.js":false,"./pairs.js":false,"./permute.js":false,"./quantile.js":false,"./quickselect.js":false,"./range.js":false,"./least.js":false,"./leastIndex.js":false,"./greatest.js":false,"./greatestIndex.js":false,"./scan.js":false,"./shuffle.js":false,"./sum.js":false,"./ticks.js":false,"./transpose.js":false,"./variance.js":false,"./zip.js":false,"./every.js":false,"./some.js":false,"./filter.js":false,"./map.js":false,"./reduce.js":false,"./reverse.js":false,"./sort.js":false,"./difference.js":false,"./disjoint.js":false,"./intersection.js":false,"./subset.js":false,"./superset.js":false,"./union.js":false,"internmap":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8tOOh":[function(require,module,exports) {
// https://github.com/python/cpython/blob/a74eea238f5baba15797e2e8b570d153bc8690a7/Modules/mathmodule.c#L1423
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Adder", ()=>Adder);
parcelHelpers.export(exports, "fsum", ()=>fsum);
parcelHelpers.export(exports, "fcumsum", ()=>fcumsum);
class Adder {
    constructor(){
        this._partials = new Float64Array(32);
        this._n = 0;
    }
    add(x) {
        const p = this._partials;
        let i = 0;
        for(let j = 0; j < this._n && j < 32; j++){
            const y = p[j], hi = x + y, lo = Math.abs(x) < Math.abs(y) ? x - (hi - y) : y - (hi - x);
            if (lo) p[i++] = lo;
            x = hi;
        }
        p[i] = x;
        this._n = i + 1;
        return this;
    }
    valueOf() {
        const p = this._partials;
        let n = this._n, x, y, lo, hi = 0;
        if (n > 0) {
            hi = p[--n];
            while(n > 0){
                x = hi;
                y = p[--n];
                hi = x + y;
                lo = y - (hi - x);
                if (lo) break;
            }
            if (n > 0 && (lo < 0 && p[n - 1] < 0 || lo > 0 && p[n - 1] > 0)) {
                y = lo * 2;
                x = hi + y;
                if (y == x - hi) hi = x;
            }
        }
        return hi;
    }
}
function fsum(values, valueof) {
    const adder = new Adder();
    if (valueof === undefined) {
        for (let value of values)if (value = +value) adder.add(value);
    } else {
        let index = -1;
        for (let value of values)if (value = +valueof(value, ++index, values)) adder.add(value);
    }
    return +adder;
}
function fcumsum(values, valueof) {
    const adder = new Adder();
    let index = -1;
    return Float64Array.from(values, valueof === undefined ? (v)=>adder.add(+v || 0) : (v)=>adder.add(+valueof(v, ++index, values) || 0));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7lsCB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>merge);
function* flatten(arrays) {
    for (const array of arrays)yield* array;
}
function merge(arrays) {
    return Array.from(flatten(arrays));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b6uNv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(radius) {
        var cr = (0, _mathJs.cos)(radius), delta = 6 * (0, _mathJs.radians), smallRadius = cr > 0, notHemisphere = (0, _mathJs.abs)(cr) > (0, _mathJs.epsilon); // TODO optimise for this common case
        function interpolate(from, to, direction, stream) {
            (0, _circleJs.circleStream)(stream, radius, delta, direction, from, to);
        }
        function visible(lambda, phi) {
            return (0, _mathJs.cos)(lambda) * (0, _mathJs.cos)(phi) > cr;
        }
        // Takes a line and cuts into visible segments. Return values used for polygon
        // clipping: 0 - there were intersections or the line was empty; 1 - no
        // intersections 2 - there were intersections, and the first and last segments
        // should be rejoined.
        function clipLine(stream) {
            var point0, c0, v0, v00, clean; // no intersections
            return {
                lineStart: function() {
                    v00 = v0 = false;
                    clean = 1;
                },
                point: function(lambda, phi) {
                    var point1 = [
                        lambda,
                        phi
                    ], point2, v = visible(lambda, phi), c = smallRadius ? v ? 0 : code(lambda, phi) : v ? code(lambda + (lambda < 0 ? (0, _mathJs.pi) : -(0, _mathJs.pi)), phi) : 0;
                    if (!point0 && (v00 = v0 = v)) stream.lineStart();
                    if (v !== v0) {
                        point2 = intersect(point0, point1);
                        if (!point2 || (0, _pointEqualJsDefault.default)(point0, point2) || (0, _pointEqualJsDefault.default)(point1, point2)) point1[2] = 1;
                    }
                    if (v !== v0) {
                        clean = 0;
                        if (v) {
                            // outside going in
                            stream.lineStart();
                            point2 = intersect(point1, point0);
                            stream.point(point2[0], point2[1]);
                        } else {
                            // inside going out
                            point2 = intersect(point0, point1);
                            stream.point(point2[0], point2[1], 2);
                            stream.lineEnd();
                        }
                        point0 = point2;
                    } else if (notHemisphere && point0 && smallRadius ^ v) {
                        var t;
                        // If the codes for two points are different, or are both zero,
                        // and there this segment intersects with the small circle.
                        if (!(c & c0) && (t = intersect(point1, point0, true))) {
                            clean = 0;
                            if (smallRadius) {
                                stream.lineStart();
                                stream.point(t[0][0], t[0][1]);
                                stream.point(t[1][0], t[1][1]);
                                stream.lineEnd();
                            } else {
                                stream.point(t[1][0], t[1][1]);
                                stream.lineEnd();
                                stream.lineStart();
                                stream.point(t[0][0], t[0][1], 3);
                            }
                        }
                    }
                    if (v && (!point0 || !(0, _pointEqualJsDefault.default)(point0, point1))) stream.point(point1[0], point1[1]);
                    point0 = point1, v0 = v, c0 = c;
                },
                lineEnd: function() {
                    if (v0) stream.lineEnd();
                    point0 = null;
                },
                // Rejoin first and last segments if there were intersections and the first
                // and last points were visible.
                clean: function() {
                    return clean | (v00 && v0) << 1;
                }
            };
        }
        // Intersects the great circle between a and b with the clip circle.
        function intersect(a, b, two) {
            var pa = (0, _cartesianJs.cartesian)(a), pb = (0, _cartesianJs.cartesian)(b);
            // We have two planes, n1.p = d1 and n2.p = d2.
            // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
            var n1 = [
                1,
                0,
                0
            ], n2 = (0, _cartesianJs.cartesianCross)(pa, pb), n2n2 = (0, _cartesianJs.cartesianDot)(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
            // Two polar points.
            if (!determinant) return !two && a;
            var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = (0, _cartesianJs.cartesianCross)(n1, n2), A = (0, _cartesianJs.cartesianScale)(n1, c1), B = (0, _cartesianJs.cartesianScale)(n2, c2);
            (0, _cartesianJs.cartesianAddInPlace)(A, B);
            // Solve |p(t)|^2 = 1.
            var u = n1xn2, w = (0, _cartesianJs.cartesianDot)(A, u), uu = (0, _cartesianJs.cartesianDot)(u, u), t2 = w * w - uu * ((0, _cartesianJs.cartesianDot)(A, A) - 1);
            if (t2 < 0) return;
            var t = (0, _mathJs.sqrt)(t2), q = (0, _cartesianJs.cartesianScale)(u, (-w - t) / uu);
            (0, _cartesianJs.cartesianAddInPlace)(q, A);
            q = (0, _cartesianJs.spherical)(q);
            if (!two) return q;
            // Two intersection points.
            var lambda0 = a[0], lambda1 = b[0], phi0 = a[1], phi1 = b[1], z;
            if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;
            var delta = lambda1 - lambda0, polar = (0, _mathJs.abs)(delta - (0, _mathJs.pi)) < (0, _mathJs.epsilon), meridian = polar || delta < (0, _mathJs.epsilon);
            if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;
            // Check that the first point is between a and b.
            if (meridian ? polar ? phi0 + phi1 > 0 ^ q[1] < ((0, _mathJs.abs)(q[0] - lambda0) < (0, _mathJs.epsilon) ? phi0 : phi1) : phi0 <= q[1] && q[1] <= phi1 : delta > (0, _mathJs.pi) ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
                var q1 = (0, _cartesianJs.cartesianScale)(u, (-w + t) / uu);
                (0, _cartesianJs.cartesianAddInPlace)(q1, A);
                return [
                    q,
                    (0, _cartesianJs.spherical)(q1)
                ];
            }
        }
        // Generates a 4-bit vector representing the location of a point relative to
        // the small circle's bounding box.
        function code(lambda, phi) {
            var r = smallRadius ? radius : (0, _mathJs.pi) - radius, code = 0;
            if (lambda < -r) code |= 1; // left
            else if (lambda > r) code |= 2; // right
            if (phi < -r) code |= 4; // below
            else if (phi > r) code |= 8; // above
            return code;
        }
        return (0, _indexJsDefault.default)(visible, clipLine, interpolate, smallRadius ? [
            0,
            -radius
        ] : [
            -(0, _mathJs.pi),
            radius - (0, _mathJs.pi)
        ]);
    });
var _cartesianJs = require("../cartesian.js");
var _circleJs = require("../circle.js");
var _mathJs = require("../math.js");
var _pointEqualJs = require("../pointEqual.js");
var _pointEqualJsDefault = parcelHelpers.interopDefault(_pointEqualJs);
var _indexJs = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);

},{"../cartesian.js":"eMI3W","../circle.js":"dAD4R","../math.js":"2Fcwq","../pointEqual.js":"cVyki","./index.js":"gEapZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aac8P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>clipRectangle);
var _mathJs = require("../math.js");
var _bufferJs = require("./buffer.js");
var _bufferJsDefault = parcelHelpers.interopDefault(_bufferJs);
var _lineJs = require("./line.js");
var _lineJsDefault = parcelHelpers.interopDefault(_lineJs);
var _rejoinJs = require("./rejoin.js");
var _rejoinJsDefault = parcelHelpers.interopDefault(_rejoinJs);
var _d3Array = require("d3-array");
var clipMax = 1e9, clipMin = -clipMax;
function clipRectangle(x0, y0, x1, y1) {
    function visible(x, y) {
        return x0 <= x && x <= x1 && y0 <= y && y <= y1;
    }
    function interpolate(from, to, direction, stream) {
        var a = 0, a1 = 0;
        if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoint(from, to) < 0 ^ direction > 0) do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
        while ((a = (a + direction + 4) % 4) !== a1);
        else stream.point(to[0], to[1]);
    }
    function corner(p, direction) {
        return (0, _mathJs.abs)(p[0] - x0) < (0, _mathJs.epsilon) ? direction > 0 ? 0 : 3 : (0, _mathJs.abs)(p[0] - x1) < (0, _mathJs.epsilon) ? direction > 0 ? 2 : 1 : (0, _mathJs.abs)(p[1] - y0) < (0, _mathJs.epsilon) ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
    }
    function compareIntersection(a, b) {
        return comparePoint(a.x, b.x);
    }
    function comparePoint(a, b) {
        var ca = corner(a, 1), cb = corner(b, 1);
        return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
    }
    return function(stream) {
        var activeStream = stream, bufferStream = (0, _bufferJsDefault.default)(), segments, polygon, ring, x__, y__, v__, x_, y_, v_, first, clean;
        var clipStream = {
            point: point,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: polygonStart,
            polygonEnd: polygonEnd
        };
        function point(x, y) {
            if (visible(x, y)) activeStream.point(x, y);
        }
        function polygonInside() {
            var winding = 0;
            for(var i = 0, n = polygon.length; i < n; ++i)for(var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j){
                a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
                if (a1 <= y1) {
                    if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding;
                } else if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding;
            }
            return winding;
        }
        // Buffer geometry within a polygon and then clip it en masse.
        function polygonStart() {
            activeStream = bufferStream, segments = [], polygon = [], clean = true;
        }
        function polygonEnd() {
            var startInside = polygonInside(), cleanInside = clean && startInside, visible = (segments = (0, _d3Array.merge)(segments)).length;
            if (cleanInside || visible) {
                stream.polygonStart();
                if (cleanInside) {
                    stream.lineStart();
                    interpolate(null, null, 1, stream);
                    stream.lineEnd();
                }
                if (visible) (0, _rejoinJsDefault.default)(segments, compareIntersection, startInside, interpolate, stream);
                stream.polygonEnd();
            }
            activeStream = stream, segments = polygon = ring = null;
        }
        function lineStart() {
            clipStream.point = linePoint;
            if (polygon) polygon.push(ring = []);
            first = true;
            v_ = false;
            x_ = y_ = NaN;
        }
        // TODO rather than special-case polygons, simply handle them separately.
        // Ideally, coincident intersection points should be jittered to avoid
        // clipping issues.
        function lineEnd() {
            if (segments) {
                linePoint(x__, y__);
                if (v__ && v_) bufferStream.rejoin();
                segments.push(bufferStream.result());
            }
            clipStream.point = point;
            if (v_) activeStream.lineEnd();
        }
        function linePoint(x, y) {
            var v = visible(x, y);
            if (polygon) ring.push([
                x,
                y
            ]);
            if (first) {
                x__ = x, y__ = y, v__ = v;
                first = false;
                if (v) {
                    activeStream.lineStart();
                    activeStream.point(x, y);
                }
            } else if (v && v_) activeStream.point(x, y);
            else {
                var a = [
                    x_ = Math.max(clipMin, Math.min(clipMax, x_)),
                    y_ = Math.max(clipMin, Math.min(clipMax, y_))
                ], b = [
                    x = Math.max(clipMin, Math.min(clipMax, x)),
                    y = Math.max(clipMin, Math.min(clipMax, y))
                ];
                if ((0, _lineJsDefault.default)(a, b, x0, y0, x1, y1)) {
                    if (!v_) {
                        activeStream.lineStart();
                        activeStream.point(a[0], a[1]);
                    }
                    activeStream.point(b[0], b[1]);
                    if (!v) activeStream.lineEnd();
                    clean = false;
                } else if (v) {
                    activeStream.lineStart();
                    activeStream.point(x, y);
                    clean = false;
                }
            }
            x_ = x, y_ = y, v_ = v;
        }
        return clipStream;
    };
}

},{"../math.js":"2Fcwq","./buffer.js":"39brN","./line.js":"3DN8f","./rejoin.js":"7AHoo","d3-array":"D1ltS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3DN8f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, b, x0, y0, x1, y1) {
        var ax = a[0], ay = a[1], bx = b[0], by = b[1], t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
        r = x0 - ax;
        if (!dx && r > 0) return;
        r /= dx;
        if (dx < 0) {
            if (r < t0) return;
            if (r < t1) t1 = r;
        } else if (dx > 0) {
            if (r > t1) return;
            if (r > t0) t0 = r;
        }
        r = x1 - ax;
        if (!dx && r < 0) return;
        r /= dx;
        if (dx < 0) {
            if (r > t1) return;
            if (r > t0) t0 = r;
        } else if (dx > 0) {
            if (r < t0) return;
            if (r < t1) t1 = r;
        }
        r = y0 - ay;
        if (!dy && r > 0) return;
        r /= dy;
        if (dy < 0) {
            if (r < t0) return;
            if (r < t1) t1 = r;
        } else if (dy > 0) {
            if (r > t1) return;
            if (r > t0) t0 = r;
        }
        r = y1 - ay;
        if (!dy && r < 0) return;
        r /= dy;
        if (dy < 0) {
            if (r > t1) return;
            if (r > t0) t0 = r;
        } else if (dy > 0) {
            if (r < t0) return;
            if (r < t1) t1 = r;
        }
        if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
        if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
        return true;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lcyxr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return (0, _conicEqualAreaJsDefault.default)().parallels([
            29.5,
            45.5
        ]).scale(1070).translate([
            480,
            250
        ]).rotate([
            96,
            0
        ]).center([
            -0.6,
            38.7
        ]);
    });
var _conicEqualAreaJs = require("./conicEqualArea.js");
var _conicEqualAreaJsDefault = parcelHelpers.interopDefault(_conicEqualAreaJs);

},{"./conicEqualArea.js":"e6Lsj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e6Lsj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "conicEqualAreaRaw", ()=>conicEqualAreaRaw);
parcelHelpers.export(exports, "default", ()=>function() {
        return (0, _conicJs.conicProjection)(conicEqualAreaRaw).scale(155.424).center([
            0,
            33.6442
        ]);
    });
var _mathJs = require("../math.js");
var _conicJs = require("./conic.js");
var _cylindricalEqualAreaJs = require("./cylindricalEqualArea.js");
function conicEqualAreaRaw(y0, y1) {
    var sy0 = (0, _mathJs.sin)(y0), n = (sy0 + (0, _mathJs.sin)(y1)) / 2;
    // Are the parallels symmetrical around the Equator?
    if ((0, _mathJs.abs)(n) < (0, _mathJs.epsilon)) return (0, _cylindricalEqualAreaJs.cylindricalEqualAreaRaw)(y0);
    var c = 1 + sy0 * (2 * n - sy0), r0 = (0, _mathJs.sqrt)(c) / n;
    function project(x, y) {
        var r = (0, _mathJs.sqrt)(c - 2 * n * (0, _mathJs.sin)(y)) / n;
        return [
            r * (0, _mathJs.sin)(x *= n),
            r0 - r * (0, _mathJs.cos)(x)
        ];
    }
    project.invert = function(x, y) {
        var r0y = r0 - y, l = (0, _mathJs.atan2)(x, (0, _mathJs.abs)(r0y)) * (0, _mathJs.sign)(r0y);
        if (r0y * n < 0) l -= (0, _mathJs.pi) * (0, _mathJs.sign)(x) * (0, _mathJs.sign)(r0y);
        return [
            l / n,
            (0, _mathJs.asin)((c - (x * x + r0y * r0y) * n * n) / (2 * n))
        ];
    };
    return project;
}

},{"../math.js":"2Fcwq","./conic.js":"6aGqj","./cylindricalEqualArea.js":"2b4oA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6aGqj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "conicProjection", ()=>conicProjection);
var _mathJs = require("../math.js");
var _indexJs = require("./index.js");
function conicProjection(projectAt) {
    var phi0 = 0, phi1 = (0, _mathJs.pi) / 3, m = (0, _indexJs.projectionMutator)(projectAt), p = m(phi0, phi1);
    p.parallels = function(_) {
        return arguments.length ? m(phi0 = _[0] * (0, _mathJs.radians), phi1 = _[1] * (0, _mathJs.radians)) : [
            phi0 * (0, _mathJs.degrees),
            phi1 * (0, _mathJs.degrees)
        ];
    };
    return p;
}

},{"../math.js":"2Fcwq","./index.js":"39Dan","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"39Dan":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>projection);
parcelHelpers.export(exports, "projectionMutator", ()=>projectionMutator);
var _antimeridianJs = require("../clip/antimeridian.js");
var _antimeridianJsDefault = parcelHelpers.interopDefault(_antimeridianJs);
var _circleJs = require("../clip/circle.js");
var _circleJsDefault = parcelHelpers.interopDefault(_circleJs);
var _rectangleJs = require("../clip/rectangle.js");
var _rectangleJsDefault = parcelHelpers.interopDefault(_rectangleJs);
var _composeJs = require("../compose.js");
var _composeJsDefault = parcelHelpers.interopDefault(_composeJs);
var _identityJs = require("../identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _mathJs = require("../math.js");
var _rotationJs = require("../rotation.js");
var _transformJs = require("../transform.js");
var _fitJs = require("./fit.js");
var _resampleJs = require("./resample.js");
var _resampleJsDefault = parcelHelpers.interopDefault(_resampleJs);
var transformRadians = (0, _transformJs.transformer)({
    point: function(x, y) {
        this.stream.point(x * (0, _mathJs.radians), y * (0, _mathJs.radians));
    }
});
function transformRotate(rotate) {
    return (0, _transformJs.transformer)({
        point: function(x, y) {
            var r = rotate(x, y);
            return this.stream.point(r[0], r[1]);
        }
    });
}
function scaleTranslate(k, dx, dy, sx, sy) {
    function transform(x, y) {
        x *= sx;
        y *= sy;
        return [
            dx + k * x,
            dy - k * y
        ];
    }
    transform.invert = function(x, y) {
        return [
            (x - dx) / k * sx,
            (dy - y) / k * sy
        ];
    };
    return transform;
}
function scaleTranslateRotate(k, dx, dy, sx, sy, alpha) {
    if (!alpha) return scaleTranslate(k, dx, dy, sx, sy);
    var cosAlpha = (0, _mathJs.cos)(alpha), sinAlpha = (0, _mathJs.sin)(alpha), a = cosAlpha * k, b = sinAlpha * k, ai = cosAlpha / k, bi = sinAlpha / k, ci = (sinAlpha * dy - cosAlpha * dx) / k, fi = (sinAlpha * dx + cosAlpha * dy) / k;
    function transform(x, y) {
        x *= sx;
        y *= sy;
        return [
            a * x - b * y + dx,
            dy - b * x - a * y
        ];
    }
    transform.invert = function(x, y) {
        return [
            sx * (ai * x - bi * y + ci),
            sy * (fi - bi * x - ai * y)
        ];
    };
    return transform;
}
function projection(project) {
    return projectionMutator(function() {
        return project;
    })();
}
function projectionMutator(projectAt) {
    var project, k = 150, x = 480, y = 250, lambda = 0, phi = 0, deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, alpha = 0, sx = 1, sy = 1, theta = null, preclip = (0, _antimeridianJsDefault.default), x0 = null, y0, x1, y1, postclip = (0, _identityJsDefault.default), delta2 = 0.5, projectResample, projectTransform, projectRotateTransform, cache, cacheStream;
    function projection(point) {
        return projectRotateTransform(point[0] * (0, _mathJs.radians), point[1] * (0, _mathJs.radians));
    }
    function invert(point) {
        point = projectRotateTransform.invert(point[0], point[1]);
        return point && [
            point[0] * (0, _mathJs.degrees),
            point[1] * (0, _mathJs.degrees)
        ];
    }
    projection.stream = function(stream) {
        return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
    };
    projection.preclip = function(_) {
        return arguments.length ? (preclip = _, theta = undefined, reset()) : preclip;
    };
    projection.postclip = function(_) {
        return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
    };
    projection.clipAngle = function(_) {
        return arguments.length ? (preclip = +_ ? (0, _circleJsDefault.default)(theta = _ * (0, _mathJs.radians)) : (theta = null, _antimeridianJsDefault.default), reset()) : theta * (0, _mathJs.degrees);
    };
    projection.clipExtent = function(_) {
        return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, _identityJsDefault.default) : (0, _rectangleJsDefault.default)(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [
            [
                x0,
                y0
            ],
            [
                x1,
                y1
            ]
        ];
    };
    projection.scale = function(_) {
        return arguments.length ? (k = +_, recenter()) : k;
    };
    projection.translate = function(_) {
        return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [
            x,
            y
        ];
    };
    projection.center = function(_) {
        return arguments.length ? (lambda = _[0] % 360 * (0, _mathJs.radians), phi = _[1] % 360 * (0, _mathJs.radians), recenter()) : [
            lambda * (0, _mathJs.degrees),
            phi * (0, _mathJs.degrees)
        ];
    };
    projection.rotate = function(_) {
        return arguments.length ? (deltaLambda = _[0] % 360 * (0, _mathJs.radians), deltaPhi = _[1] % 360 * (0, _mathJs.radians), deltaGamma = _.length > 2 ? _[2] % 360 * (0, _mathJs.radians) : 0, recenter()) : [
            deltaLambda * (0, _mathJs.degrees),
            deltaPhi * (0, _mathJs.degrees),
            deltaGamma * (0, _mathJs.degrees)
        ];
    };
    projection.angle = function(_) {
        return arguments.length ? (alpha = _ % 360 * (0, _mathJs.radians), recenter()) : alpha * (0, _mathJs.degrees);
    };
    projection.reflectX = function(_) {
        return arguments.length ? (sx = _ ? -1 : 1, recenter()) : sx < 0;
    };
    projection.reflectY = function(_) {
        return arguments.length ? (sy = _ ? -1 : 1, recenter()) : sy < 0;
    };
    projection.precision = function(_) {
        return arguments.length ? (projectResample = (0, _resampleJsDefault.default)(projectTransform, delta2 = _ * _), reset()) : (0, _mathJs.sqrt)(delta2);
    };
    projection.fitExtent = function(extent, object) {
        return (0, _fitJs.fitExtent)(projection, extent, object);
    };
    projection.fitSize = function(size, object) {
        return (0, _fitJs.fitSize)(projection, size, object);
    };
    projection.fitWidth = function(width, object) {
        return (0, _fitJs.fitWidth)(projection, width, object);
    };
    projection.fitHeight = function(height, object) {
        return (0, _fitJs.fitHeight)(projection, height, object);
    };
    function recenter() {
        var center = scaleTranslateRotate(k, 0, 0, sx, sy, alpha).apply(null, project(lambda, phi)), transform = scaleTranslateRotate(k, x - center[0], y - center[1], sx, sy, alpha);
        rotate = (0, _rotationJs.rotateRadians)(deltaLambda, deltaPhi, deltaGamma);
        projectTransform = (0, _composeJsDefault.default)(project, transform);
        projectRotateTransform = (0, _composeJsDefault.default)(rotate, projectTransform);
        projectResample = (0, _resampleJsDefault.default)(projectTransform, delta2);
        return reset();
    }
    function reset() {
        cache = cacheStream = null;
        return projection;
    }
    return function() {
        project = projectAt.apply(this, arguments);
        projection.invert = project.invert && invert;
        return recenter();
    };
}

},{"../clip/antimeridian.js":"klRvq","../clip/circle.js":"b6uNv","../clip/rectangle.js":"aac8P","../compose.js":"1uk1Z","../identity.js":"dbxI5","../math.js":"2Fcwq","../rotation.js":"fcyx3","../transform.js":"aQH99","./fit.js":"huGLx","./resample.js":"2PQge","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dbxI5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (x)=>x;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aQH99":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(methods) {
        return {
            stream: transformer(methods)
        };
    });
parcelHelpers.export(exports, "transformer", ()=>transformer);
function transformer(methods) {
    return function(stream) {
        var s = new TransformStream;
        for(var key in methods)s[key] = methods[key];
        s.stream = stream;
        return s;
    };
}
function TransformStream() {}
TransformStream.prototype = {
    constructor: TransformStream,
    point: function(x, y) {
        this.stream.point(x, y);
    },
    sphere: function() {
        this.stream.sphere();
    },
    lineStart: function() {
        this.stream.lineStart();
    },
    lineEnd: function() {
        this.stream.lineEnd();
    },
    polygonStart: function() {
        this.stream.polygonStart();
    },
    polygonEnd: function() {
        this.stream.polygonEnd();
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"huGLx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fitExtent", ()=>fitExtent);
parcelHelpers.export(exports, "fitSize", ()=>fitSize);
parcelHelpers.export(exports, "fitWidth", ()=>fitWidth);
parcelHelpers.export(exports, "fitHeight", ()=>fitHeight);
var _streamJs = require("../stream.js");
var _streamJsDefault = parcelHelpers.interopDefault(_streamJs);
var _boundsJs = require("../path/bounds.js");
var _boundsJsDefault = parcelHelpers.interopDefault(_boundsJs);
function fit(projection, fitBounds, object) {
    var clip = projection.clipExtent && projection.clipExtent();
    projection.scale(150).translate([
        0,
        0
    ]);
    if (clip != null) projection.clipExtent(null);
    (0, _streamJsDefault.default)(object, projection.stream((0, _boundsJsDefault.default)));
    fitBounds((0, _boundsJsDefault.default).result());
    if (clip != null) projection.clipExtent(clip);
    return projection;
}
function fitExtent(projection, extent, object) {
    return fit(projection, function(b) {
        var w = extent[1][0] - extent[0][0], h = extent[1][1] - extent[0][1], k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])), x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2, y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
        projection.scale(150 * k).translate([
            x,
            y
        ]);
    }, object);
}
function fitSize(projection, size, object) {
    return fitExtent(projection, [
        [
            0,
            0
        ],
        size
    ], object);
}
function fitWidth(projection, width, object) {
    return fit(projection, function(b) {
        var w = +width, k = w / (b[1][0] - b[0][0]), x = (w - k * (b[1][0] + b[0][0])) / 2, y = -k * b[0][1];
        projection.scale(150 * k).translate([
            x,
            y
        ]);
    }, object);
}
function fitHeight(projection, height, object) {
    return fit(projection, function(b) {
        var h = +height, k = h / (b[1][1] - b[0][1]), x = -k * b[0][0], y = (h - k * (b[1][1] + b[0][1])) / 2;
        projection.scale(150 * k).translate([
            x,
            y
        ]);
    }, object);
}

},{"../stream.js":"f6Rdi","../path/bounds.js":"lFykA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f6Rdi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(object, stream) {
        if (object && streamObjectType.hasOwnProperty(object.type)) streamObjectType[object.type](object, stream);
        else streamGeometry(object, stream);
    });
function streamGeometry(geometry, stream) {
    if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) streamGeometryType[geometry.type](geometry, stream);
}
var streamObjectType = {
    Feature: function(object, stream) {
        streamGeometry(object.geometry, stream);
    },
    FeatureCollection: function(object, stream) {
        var features = object.features, i = -1, n = features.length;
        while(++i < n)streamGeometry(features[i].geometry, stream);
    }
};
var streamGeometryType = {
    Sphere: function(object, stream) {
        stream.sphere();
    },
    Point: function(object, stream) {
        object = object.coordinates;
        stream.point(object[0], object[1], object[2]);
    },
    MultiPoint: function(object, stream) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)object = coordinates[i], stream.point(object[0], object[1], object[2]);
    },
    LineString: function(object, stream) {
        streamLine(object.coordinates, stream, 0);
    },
    MultiLineString: function(object, stream) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)streamLine(coordinates[i], stream, 0);
    },
    Polygon: function(object, stream) {
        streamPolygon(object.coordinates, stream);
    },
    MultiPolygon: function(object, stream) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)streamPolygon(coordinates[i], stream);
    },
    GeometryCollection: function(object, stream) {
        var geometries = object.geometries, i = -1, n = geometries.length;
        while(++i < n)streamGeometry(geometries[i], stream);
    }
};
function streamLine(coordinates, stream, closed) {
    var i = -1, n = coordinates.length - closed, coordinate;
    stream.lineStart();
    while(++i < n)coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
    stream.lineEnd();
}
function streamPolygon(coordinates, stream) {
    var i = -1, n = coordinates.length;
    stream.polygonStart();
    while(++i < n)streamLine(coordinates[i], stream, 1);
    stream.polygonEnd();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lFykA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _noopJs = require("../noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
var x0 = Infinity, y0 = x0, x1 = -x0, y1 = x1;
var boundsStream = {
    point: boundsPoint,
    lineStart: (0, _noopJsDefault.default),
    lineEnd: (0, _noopJsDefault.default),
    polygonStart: (0, _noopJsDefault.default),
    polygonEnd: (0, _noopJsDefault.default),
    result: function() {
        var bounds = [
            [
                x0,
                y0
            ],
            [
                x1,
                y1
            ]
        ];
        x1 = y1 = -(y0 = x0 = Infinity);
        return bounds;
    }
};
function boundsPoint(x, y) {
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
}
exports.default = boundsStream;

},{"../noop.js":"k0hkP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2PQge":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(project, delta2) {
        return +delta2 ? resample(project, delta2) : resampleNone(project);
    });
var _cartesianJs = require("../cartesian.js");
var _mathJs = require("../math.js");
var _transformJs = require("../transform.js");
var maxDepth = 16, cosMinDistance = (0, _mathJs.cos)(30 * (0, _mathJs.radians)); // cos(minimum angular distance)
function resampleNone(project) {
    return (0, _transformJs.transformer)({
        point: function(x, y) {
            x = project(x, y);
            this.stream.point(x[0], x[1]);
        }
    });
}
function resample(project, delta2) {
    function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
        var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
        if (d2 > 4 * delta2 && depth--) {
            var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = (0, _mathJs.sqrt)(a * a + b * b + c * c), phi2 = (0, _mathJs.asin)(c /= m), lambda2 = (0, _mathJs.abs)((0, _mathJs.abs)(c) - 1) < (0, _mathJs.epsilon) || (0, _mathJs.abs)(lambda0 - lambda1) < (0, _mathJs.epsilon) ? (lambda0 + lambda1) / 2 : (0, _mathJs.atan2)(b, a), p = project(lambda2, phi2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
            if (dz * dz / d2 > delta2 // perpendicular projected distance
             || (0, _mathJs.abs)((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
             || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
                resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
                stream.point(x2, y2);
                resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
            }
        }
    }
    return function(stream) {
        var lambda00, x00, y00, a00, b00, c00, lambda0, x0, y0, a0, b0, c0; // previous point
        var resampleStream = {
            point: point,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: function() {
                stream.polygonStart();
                resampleStream.lineStart = ringStart;
            },
            polygonEnd: function() {
                stream.polygonEnd();
                resampleStream.lineStart = lineStart;
            }
        };
        function point(x, y) {
            x = project(x, y);
            stream.point(x[0], x[1]);
        }
        function lineStart() {
            x0 = NaN;
            resampleStream.point = linePoint;
            stream.lineStart();
        }
        function linePoint(lambda, phi) {
            var c = (0, _cartesianJs.cartesian)([
                lambda,
                phi
            ]), p = project(lambda, phi);
            resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
            stream.point(x0, y0);
        }
        function lineEnd() {
            resampleStream.point = point;
            stream.lineEnd();
        }
        function ringStart() {
            lineStart();
            resampleStream.point = ringPoint;
            resampleStream.lineEnd = ringEnd;
        }
        function ringPoint(lambda, phi) {
            linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
            resampleStream.point = linePoint;
        }
        function ringEnd() {
            resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
            resampleStream.lineEnd = lineEnd;
            lineEnd();
        }
        return resampleStream;
    };
}

},{"../cartesian.js":"eMI3W","../math.js":"2Fcwq","../transform.js":"aQH99","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2b4oA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cylindricalEqualAreaRaw", ()=>cylindricalEqualAreaRaw);
var _mathJs = require("../math.js");
function cylindricalEqualAreaRaw(phi0) {
    var cosPhi0 = (0, _mathJs.cos)(phi0);
    function forward(lambda, phi) {
        return [
            lambda * cosPhi0,
            (0, _mathJs.sin)(phi) / cosPhi0
        ];
    }
    forward.invert = function(x, y) {
        return [
            x / cosPhi0,
            (0, _mathJs.asin)(y * cosPhi0)
        ];
    };
    return forward;
}

},{"../math.js":"2Fcwq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"apams":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "conicConformalRaw", ()=>conicConformalRaw);
parcelHelpers.export(exports, "default", ()=>function() {
        return (0, _conicJs.conicProjection)(conicConformalRaw).scale(109.5).parallels([
            30,
            30
        ]);
    });
var _mathJs = require("../math.js");
var _conicJs = require("./conic.js");
var _mercatorJs = require("./mercator.js");
function tany(y) {
    return (0, _mathJs.tan)(((0, _mathJs.halfPi) + y) / 2);
}
function conicConformalRaw(y0, y1) {
    var cy0 = (0, _mathJs.cos)(y0), n = y0 === y1 ? (0, _mathJs.sin)(y0) : (0, _mathJs.log)(cy0 / (0, _mathJs.cos)(y1)) / (0, _mathJs.log)(tany(y1) / tany(y0)), f = cy0 * (0, _mathJs.pow)(tany(y0), n) / n;
    if (!n) return 0, _mercatorJs.mercatorRaw;
    function project(x, y) {
        if (f > 0) {
            if (y < -(0, _mathJs.halfPi) + (0, _mathJs.epsilon)) y = -(0, _mathJs.halfPi) + (0, _mathJs.epsilon);
        } else if (y > (0, _mathJs.halfPi) - (0, _mathJs.epsilon)) y = (0, _mathJs.halfPi) - (0, _mathJs.epsilon);
        var r = f / (0, _mathJs.pow)(tany(y), n);
        return [
            r * (0, _mathJs.sin)(n * x),
            f - r * (0, _mathJs.cos)(n * x)
        ];
    }
    project.invert = function(x, y) {
        var fy = f - y, r = (0, _mathJs.sign)(n) * (0, _mathJs.sqrt)(x * x + fy * fy), l = (0, _mathJs.atan2)(x, (0, _mathJs.abs)(fy)) * (0, _mathJs.sign)(fy);
        if (fy * n < 0) l -= (0, _mathJs.pi) * (0, _mathJs.sign)(x) * (0, _mathJs.sign)(fy);
        return [
            l / n,
            2 * (0, _mathJs.atan)((0, _mathJs.pow)(f / r, 1 / n)) - (0, _mathJs.halfPi)
        ];
    };
    return project;
}

},{"../math.js":"2Fcwq","./conic.js":"6aGqj","./mercator.js":"85uKE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"85uKE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mercatorRaw", ()=>mercatorRaw);
parcelHelpers.export(exports, "default", ()=>function() {
        return mercatorProjection(mercatorRaw).scale(961 / (0, _mathJs.tau));
    });
parcelHelpers.export(exports, "mercatorProjection", ()=>mercatorProjection);
var _mathJs = require("../math.js");
var _rotationJs = require("../rotation.js");
var _rotationJsDefault = parcelHelpers.interopDefault(_rotationJs);
var _indexJs = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function mercatorRaw(lambda, phi) {
    return [
        lambda,
        (0, _mathJs.log)((0, _mathJs.tan)(((0, _mathJs.halfPi) + phi) / 2))
    ];
}
mercatorRaw.invert = function(x, y) {
    return [
        x,
        2 * (0, _mathJs.atan)((0, _mathJs.exp)(y)) - (0, _mathJs.halfPi)
    ];
};
function mercatorProjection(project) {
    var m = (0, _indexJsDefault.default)(project), center = m.center, scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, x0 = null, y0, x1, y1; // clip extent
    m.scale = function(_) {
        return arguments.length ? (scale(_), reclip()) : scale();
    };
    m.translate = function(_) {
        return arguments.length ? (translate(_), reclip()) : translate();
    };
    m.center = function(_) {
        return arguments.length ? (center(_), reclip()) : center();
    };
    m.clipExtent = function(_) {
        return arguments.length ? (_ == null ? x0 = y0 = x1 = y1 = null : (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reclip()) : x0 == null ? null : [
            [
                x0,
                y0
            ],
            [
                x1,
                y1
            ]
        ];
    };
    function reclip() {
        var k = (0, _mathJs.pi) * scale(), t = m((0, _rotationJsDefault.default)(m.rotate()).invert([
            0,
            0
        ]));
        return clipExtent(x0 == null ? [
            [
                t[0] - k,
                t[1] - k
            ],
            [
                t[0] + k,
                t[1] + k
            ]
        ] : project === mercatorRaw ? [
            [
                Math.max(t[0] - k, x0),
                y0
            ],
            [
                Math.min(t[0] + k, x1),
                y1
            ]
        ] : [
            [
                x0,
                Math.max(t[1] - k, y0)
            ],
            [
                x1,
                Math.min(t[1] + k, y1)
            ]
        ]);
    }
    return reclip();
}

},{"../math.js":"2Fcwq","../rotation.js":"fcyx3","./index.js":"39Dan","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iqJt5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "conicEquidistantRaw", ()=>conicEquidistantRaw);
parcelHelpers.export(exports, "default", ()=>function() {
        return (0, _conicJs.conicProjection)(conicEquidistantRaw).scale(131.154).center([
            0,
            13.9389
        ]);
    });
var _mathJs = require("../math.js");
var _conicJs = require("./conic.js");
var _equirectangularJs = require("./equirectangular.js");
function conicEquidistantRaw(y0, y1) {
    var cy0 = (0, _mathJs.cos)(y0), n = y0 === y1 ? (0, _mathJs.sin)(y0) : (cy0 - (0, _mathJs.cos)(y1)) / (y1 - y0), g = cy0 / n + y0;
    if ((0, _mathJs.abs)(n) < (0, _mathJs.epsilon)) return 0, _equirectangularJs.equirectangularRaw;
    function project(x, y) {
        var gy = g - y, nx = n * x;
        return [
            gy * (0, _mathJs.sin)(nx),
            g - gy * (0, _mathJs.cos)(nx)
        ];
    }
    project.invert = function(x, y) {
        var gy = g - y, l = (0, _mathJs.atan2)(x, (0, _mathJs.abs)(gy)) * (0, _mathJs.sign)(gy);
        if (gy * n < 0) l -= (0, _mathJs.pi) * (0, _mathJs.sign)(x) * (0, _mathJs.sign)(gy);
        return [
            l / n,
            g - (0, _mathJs.sign)(n) * (0, _mathJs.sqrt)(x * x + gy * gy)
        ];
    };
    return project;
}

},{"../math.js":"2Fcwq","./conic.js":"6aGqj","./equirectangular.js":"44g0N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"44g0N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "equirectangularRaw", ()=>equirectangularRaw);
parcelHelpers.export(exports, "default", ()=>function() {
        return (0, _indexJsDefault.default)(equirectangularRaw).scale(152.63);
    });
var _indexJs = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function equirectangularRaw(lambda, phi) {
    return [
        lambda,
        phi
    ];
}
equirectangularRaw.invert = equirectangularRaw;

},{"./index.js":"39Dan","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d27wm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stereographicRaw", ()=>stereographicRaw);
parcelHelpers.export(exports, "default", ()=>function() {
        return (0, _indexJsDefault.default)(stereographicRaw).scale(250).clipAngle(142);
    });
var _mathJs = require("../math.js");
var _azimuthalJs = require("./azimuthal.js");
var _indexJs = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function stereographicRaw(x, y) {
    var cy = (0, _mathJs.cos)(y), k = 1 + (0, _mathJs.cos)(x) * cy;
    return [
        cy * (0, _mathJs.sin)(x) / k,
        (0, _mathJs.sin)(y) / k
    ];
}
stereographicRaw.invert = (0, _azimuthalJs.azimuthalInvert)(function(z) {
    return 2 * (0, _mathJs.atan)(z);
});

},{"../math.js":"2Fcwq","./azimuthal.js":"iVtVa","./index.js":"39Dan","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iVtVa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "azimuthalRaw", ()=>azimuthalRaw);
parcelHelpers.export(exports, "azimuthalInvert", ()=>azimuthalInvert);
var _mathJs = require("../math.js");
function azimuthalRaw(scale) {
    return function(x, y) {
        var cx = (0, _mathJs.cos)(x), cy = (0, _mathJs.cos)(y), k = scale(cx * cy);
        if (k === Infinity) return [
            2,
            0
        ];
        return [
            k * cy * (0, _mathJs.sin)(x),
            k * (0, _mathJs.sin)(y)
        ];
    };
}
function azimuthalInvert(angle) {
    return function(x, y) {
        var z = (0, _mathJs.sqrt)(x * x + y * y), c = angle(z), sc = (0, _mathJs.sin)(c), cc = (0, _mathJs.cos)(c);
        return [
            (0, _mathJs.atan2)(x * sc, z * cc),
            (0, _mathJs.asin)(z && y * sc / z)
        ];
    };
}

},{"../math.js":"2Fcwq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lNfCc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transverseMercatorRaw", ()=>transverseMercatorRaw);
parcelHelpers.export(exports, "default", ()=>function() {
        var m = (0, _mercatorJs.mercatorProjection)(transverseMercatorRaw), center = m.center, rotate = m.rotate;
        m.center = function(_) {
            return arguments.length ? center([
                -_[1],
                _[0]
            ]) : (_ = center(), [
                _[1],
                -_[0]
            ]);
        };
        m.rotate = function(_) {
            return arguments.length ? rotate([
                _[0],
                _[1],
                _.length > 2 ? _[2] + 90 : 90
            ]) : (_ = rotate(), [
                _[0],
                _[1],
                _[2] - 90
            ]);
        };
        return rotate([
            0,
            0,
            90
        ]).scale(159.155);
    });
var _mathJs = require("../math.js");
var _mercatorJs = require("./mercator.js");
function transverseMercatorRaw(lambda, phi) {
    return [
        (0, _mathJs.log)((0, _mathJs.tan)(((0, _mathJs.halfPi) + phi) / 2)),
        -lambda
    ];
}
transverseMercatorRaw.invert = function(x, y) {
    return [
        -y,
        2 * (0, _mathJs.atan)((0, _mathJs.exp)(x)) - (0, _mathJs.halfPi)
    ];
};

},{"../math.js":"2Fcwq","./mercator.js":"85uKE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3PIRf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fitExtent", ()=>fitExtent);
parcelHelpers.export(exports, "fitSize", ()=>fitSize);
var _d3Geo = require("d3-geo");
var _bounds = require("./bounds");
var _boundsDefault = parcelHelpers.interopDefault(_bounds);
function fitExtent(projection, extent, object) {
    var w = extent[1][0] - extent[0][0], h = extent[1][1] - extent[0][1], clip = projection.clipExtent && projection.clipExtent();
    projection.scale(150).translate([
        0,
        0
    ]);
    if (clip != null) projection.clipExtent(null);
    (0, _d3Geo.geoStream)(object, projection.stream((0, _boundsDefault.default)));
    var b = (0, _boundsDefault.default).result(), k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])), x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2, y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
    if (clip != null) projection.clipExtent(clip);
    return projection.scale(k * 150).translate([
        x,
        y
    ]);
}
function fitSize(projection, size, object) {
    return fitExtent(projection, [
        [
            0,
            0
        ],
        size
    ], object);
}

},{"d3-geo":"8r6MJ","./bounds":"1pLTx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1pLTx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function noop() {}
var x0 = Infinity, y0 = x0, x1 = -x0, y1 = x1;
var boundsStream = {
    point: boundsPoint,
    lineStart: noop,
    lineEnd: noop,
    polygonStart: noop,
    polygonEnd: noop,
    result: function() {
        var bounds = [
            [
                x0,
                y0
            ],
            [
                x1,
                y1
            ]
        ];
        x1 = y1 = -(y0 = x0 = Infinity);
        return bounds;
    }
};
function boundsPoint(x, y) {
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
}
exports.default = boundsStream;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fDKwR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "path", ()=>(0, _pathJsDefault.default));
var _pathJs = require("./path.js");
var _pathJsDefault = parcelHelpers.interopDefault(_pathJs);

},{"./path.js":"k3FyU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k3FyU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const pi = Math.PI, tau = 2 * pi, epsilon = 1e-6, tauEpsilon = tau - epsilon;
function Path() {
    this._x0 = this._y0 = this._x1 = this._y1 = null; // end of current subpath
    this._ = "";
}
function path() {
    return new Path;
}
Path.prototype = path.prototype = {
    constructor: Path,
    moveTo: function(x, y) {
        this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
    },
    closePath: function() {
        if (this._x1 !== null) {
            this._x1 = this._x0, this._y1 = this._y0;
            this._ += "Z";
        }
    },
    lineTo: function(x, y) {
        this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    quadraticCurveTo: function(x1, y1, x, y) {
        this._ += "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    bezierCurveTo: function(x1, y1, x2, y2, x, y) {
        this._ += "C" + +x1 + "," + +y1 + "," + +x2 + "," + +y2 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    arcTo: function(x1, y1, x2, y2, r) {
        x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
        var x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
        // Is the radius negative? Error.
        if (r < 0) throw new Error("negative radius: " + r);
        // Is this path empty? Move to (x1,y1).
        if (this._x1 === null) this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
        else if (!(l01_2 > epsilon)) ;
        else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
        else {
            var x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
            // If the start tangent is not coincident with (x0,y0), line to.
            if (Math.abs(t01 - 1) > epsilon) this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
            this._ += "A" + r + "," + r + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
        }
    },
    arc: function(x, y, r, a0, a1, ccw) {
        x = +x, y = +y, r = +r, ccw = !!ccw;
        var dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x + dx, y0 = y + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
        // Is the radius negative? Error.
        if (r < 0) throw new Error("negative radius: " + r);
        // Is this path empty? Move to (x0,y0).
        if (this._x1 === null) this._ += "M" + x0 + "," + y0;
        else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) this._ += "L" + x0 + "," + y0;
        // Is this arc empty? We’re done.
        if (!r) return;
        // Does the angle go the wrong way? Flip the direction.
        if (da < 0) da = da % tau + tau;
        // Is this a complete circle? Draw two arcs to complete the circle.
        if (da > tauEpsilon) this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
        else if (da > epsilon) this._ += "A" + r + "," + r + ",0," + +(da >= pi) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    },
    rect: function(x, y, w, h) {
        this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + +w + "v" + +h + "h" + -w + "Z";
    },
    toString: function() {
        return this._;
    }
};
exports.default = path;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ciZaS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// A composite projection for the United States, configured by default for
// 960×500. Also works quite well at 960×600 with scale 1285. The set of
// standard parallels for each region comes from USGS, which is published here:
// http://egsc.usgs.gov/isb/pubs/MapProjections/projections.html#albers
parcelHelpers.export(exports, "default", ()=>function() {
        var cache, cacheStream, lower48 = (0, _d3Geo.geoAlbers)(), lower48Point, alaska = (0, _d3Geo.geoConicEqualArea)().rotate([
            154,
            0
        ]).center([
            -2,
            58.5
        ]).parallels([
            55,
            65
        ]), alaskaPoint, hawaii = (0, _d3Geo.geoConicEqualArea)().rotate([
            157,
            0
        ]).center([
            -3,
            19.9
        ]).parallels([
            8,
            18
        ]), hawaiiPoint, puertoRico = (0, _d3Geo.geoConicEqualArea)().rotate([
            66,
            0
        ]).center([
            0,
            18
        ]).parallels([
            8,
            18
        ]), puertoRicoPoint, samoa = (0, _d3Geo.geoEquirectangular)().rotate([
            173,
            14
        ]), samoaPoint, guam = (0, _d3Geo.geoEquirectangular)().rotate([
            -145,
            -16.8
        ]), guamPoint, point, pointStream = {
            point: function(x, y) {
                point = [
                    x,
                    y
                ];
            }
        };
        /*
      var puertoRicoBbox = [[-68.3, 19], [-63.9, 17]];
      var samoaBbox = [[-171, -14], [-168, -14.8]];
      var guamBbox = [[144, 20.8], [146.5, 12.7]];
      */ function albersUsa(coordinates) {
            var x = coordinates[0], y = coordinates[1];
            return point = null, (lower48Point.point(x, y), point) || (alaskaPoint.point(x, y), point) || (hawaiiPoint.point(x, y), point) || (puertoRicoPoint.point(x, y), point) || (samoaPoint.point(x, y), point) || (guamPoint.point(x, y), point);
        }
        albersUsa.invert = function(coordinates) {
            var k = lower48.scale(), t = lower48.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
            /*
        //How are the return values calculated:
        console.info("******");
        var c0 = puertoRico(puertoRicoBbox[0]);
        var x0 = (c0[0] - t[0]) / k;
        var y0 = (c0[1] - t[1]) / k;

        console.info("p0 puertoRico", x0 + ' - ' + y0);

        var c1 = puertoRico(puertoRicoBbox[1]);
        var x1 = (c1[0] - t[0]) / k;
        var y1 = (c1[1] - t[1]) / k;

        console.info("p1 puertoRico", x1 + ' - ' + y1);

        c0 = samoa(samoaBbox[0]);
        x0 = (c0[0] - t[0]) / k;
        y0 = (c0[1] - t[1]) / k;

        console.info("p0 samoa", x0 + ' - ' + y0);

        c1 = samoa(samoaBbox[1]);
        x1 = (c1[0] - t[0]) / k;
        y1 = (c1[1] - t[1]) / k;

        console.info("p1 samoa", x1 + ' - ' + y1);

        c0 = guam(guamBbox[0]);
        x0 = (c0[0] - t[0]) / k;
        y0 = (c0[1] - t[1]) / k;

        console.info("p0 guam", x0 + ' - ' + y0);

        c1 = guam(guamBbox[1]);
        x1 = (c1[0] - t[0]) / k;
        y1 = (c1[1] - t[1]) / k;

        console.info("p1 guam", x1 + ' - ' + y1);
        */ return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii : y >= 0.2064 && y < 0.2413 && x >= 0.312 && x < 0.385 ? puertoRico : y >= 0.09 && y < 0.1197 && x >= -0.4243 && x < -0.3232 ? samoa : y >= -0.0518 && y < 0.0895 && x >= -0.4243 && x < -0.3824 ? guam : lower48).invert(coordinates);
        };
        albersUsa.stream = function(stream) {
            return cache && cacheStream === stream ? cache : cache = multiplex([
                lower48.stream(cacheStream = stream),
                alaska.stream(stream),
                hawaii.stream(stream),
                puertoRico.stream(stream),
                samoa.stream(stream),
                guam.stream(stream)
            ]);
        };
        albersUsa.precision = function(_) {
            if (!arguments.length) return lower48.precision();
            lower48.precision(_);
            alaska.precision(_);
            hawaii.precision(_);
            puertoRico.precision(_);
            samoa.precision(_);
            guam.precision(_);
            return reset();
        };
        albersUsa.scale = function(_) {
            if (!arguments.length) return lower48.scale();
            lower48.scale(_);
            alaska.scale(_ * 0.35);
            hawaii.scale(_);
            puertoRico.scale(_);
            samoa.scale(_ * 2);
            guam.scale(_);
            return albersUsa.translate(lower48.translate());
        };
        albersUsa.translate = function(_) {
            if (!arguments.length) return lower48.translate();
            var k = lower48.scale(), x = +_[0], y = +_[1];
            /*
    var c0 = puertoRico.translate([x + 0.350 * k, y + 0.224 * k])(puertoRicoBbox[0]);
    var x0 = (x - c0[0]) / k;
    var y0 = (y - c0[1]) / k;

    var c1 = puertoRico.translate([x + 0.350 * k, y + 0.224 * k])(puertoRicoBbox[1]);
    var x1 = (x - c1[0]) / k;
    var y1 = (y - c1[1]) / k;

    console.info('puertoRico: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
    console.info('.clipExtent([[x '+
     (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
     ' * k + epsilon, y '+
     (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
     ' * k + epsilon],[x '+
     (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
     ' * k - epsilon, y '+
     (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
     ' * k - epsilon]])');

      c0 = samoa.translate([x - 0.492 * k, y + 0.09 * k])(samoaBbox[0]);
      x0 = (x - c0[0]) / k;
      y0 = (y - c0[1]) / k;

      c1 = samoa.translate([x - 0.492 * k, y + 0.09 * k])(samoaBbox[1]);
      x1 = (x - c1[0]) / k;
      y1 = (y - c1[1]) / k;

     console.info('samoa: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
     console.info('.clipExtent([[x '+
      (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
      ' * k + epsilon, y '+
      (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
      ' * k + epsilon],[x '+
      (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
      ' * k - epsilon, y '+
      (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
      ' * k - epsilon]])');

      c0 = guam.translate([x - 0.408 * k, y + 0.018 * k])(guamBbox[0]);
      x0 = (x - c0[0]) / k;
      y0 = (y - c0[1]) / k;

      c1 = guam.translate([x - 0.408 * k, y + 0.018 * k])(guamBbox[1]);
      x1 = (x - c1[0]) / k;
      y1 = (y - c1[1]) / k;

     console.info('guam: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
     console.info('.clipExtent([[x '+
      (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
      ' * k + epsilon, y '+
      (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
      ' * k + epsilon],[x '+
      (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
      ' * k - epsilon, y '+
      (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
      ' * k - epsilon]])');
      */ lower48Point = lower48.translate(_).clipExtent([
                [
                    x - 0.455 * k,
                    y - 0.238 * k
                ],
                [
                    x + 0.455 * k,
                    y + 0.238 * k
                ]
            ]).stream(pointStream);
            alaskaPoint = alaska.translate([
                x - 0.307 * k,
                y + 0.201 * k
            ]).clipExtent([
                [
                    x - 0.425 * k + (0, _math.epsilon),
                    y + 0.120 * k + (0, _math.epsilon)
                ],
                [
                    x - 0.214 * k - (0, _math.epsilon),
                    y + 0.233 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            hawaiiPoint = hawaii.translate([
                x - 0.205 * k,
                y + 0.212 * k
            ]).clipExtent([
                [
                    x - 0.214 * k + (0, _math.epsilon),
                    y + 0.166 * k + (0, _math.epsilon)
                ],
                [
                    x - 0.115 * k - (0, _math.epsilon),
                    y + 0.233 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            puertoRicoPoint = puertoRico.translate([
                x + 0.350 * k,
                y + 0.224 * k
            ]).clipExtent([
                [
                    x + 0.312 * k + (0, _math.epsilon),
                    y + 0.2064 * k + (0, _math.epsilon)
                ],
                [
                    x + 0.385 * k - (0, _math.epsilon),
                    y + 0.233 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            samoaPoint = samoa.translate([
                x - 0.492 * k,
                y + 0.09 * k
            ]).clipExtent([
                [
                    x - 0.4243 * k + (0, _math.epsilon),
                    y + 0.0903 * k + (0, _math.epsilon)
                ],
                [
                    x - 0.3233 * k - (0, _math.epsilon),
                    y + 0.1197 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            guamPoint = guam.translate([
                x - 0.408 * k,
                y + 0.018 * k
            ]).clipExtent([
                [
                    x - 0.4244 * k + (0, _math.epsilon),
                    y - 0.0519 * k + (0, _math.epsilon)
                ],
                [
                    x - 0.3824 * k - (0, _math.epsilon),
                    y + 0.0895 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            return reset();
        };
        albersUsa.fitExtent = function(extent, object) {
            return (0, _fit.fitExtent)(albersUsa, extent, object);
        };
        albersUsa.fitSize = function(size, object) {
            return (0, _fit.fitSize)(albersUsa, size, object);
        };
        function reset() {
            cache = cacheStream = null;
            return albersUsa;
        }
        albersUsa.drawCompositionBorders = function(context) {
            /*
    console.info("CLIP EXTENT hawaii: ", hawaii.clipExtent());
    console.info("UL BBOX:", lower48.invert([hawaii.clipExtent()[0][0], hawaii.clipExtent()[0][1]]));
    console.info("UR BBOX:", lower48.invert([hawaii.clipExtent()[1][0], hawaii.clipExtent()[0][1]]));
    console.info("LD BBOX:", lower48.invert([hawaii.clipExtent()[1][0], hawaii.clipExtent()[1][1]]));
    console.info("LL BBOX:", lower48.invert([hawaii.clipExtent()[0][0], hawaii.clipExtent()[1][1]]));

    console.info("CLIP EXTENT alaska: ", alaska.clipExtent());
    console.info("UL BBOX:", lower48.invert([alaska.clipExtent()[0][0], alaska.clipExtent()[0][1]]));
    console.info("UR BBOX:", lower48.invert([alaska.clipExtent()[1][0], alaska.clipExtent()[0][1]]));
    console.info("LD BBOX:", lower48.invert([alaska.clipExtent()[1][0], alaska.clipExtent()[1][1]]));
    console.info("LL BBOX:", lower48.invert([alaska.clipExtent()[0][0], alaska.clipExtent()[1][1]]));

    console.info("CLIP EXTENT puertoRico: ", puertoRico.clipExtent());
    console.info("UL BBOX:", lower48.invert([puertoRico.clipExtent()[0][0], puertoRico.clipExtent()[0][1]]));
    console.info("UR BBOX:", lower48.invert([puertoRico.clipExtent()[1][0], puertoRico.clipExtent()[0][1]]));
    console.info("LD BBOX:", lower48.invert([puertoRico.clipExtent()[1][0], puertoRico.clipExtent()[1][1]]));
    console.info("LL BBOX:", lower48.invert([puertoRico.clipExtent()[0][0], puertoRico.clipExtent()[1][1]]));

    console.info("CLIP EXTENT samoa: ", samoa.clipExtent());
    console.info("UL BBOX:", lower48.invert([samoa.clipExtent()[0][0], samoa.clipExtent()[0][1]]));
    console.info("UR BBOX:", lower48.invert([samoa.clipExtent()[1][0], samoa.clipExtent()[0][1]]));
    console.info("LD BBOX:", lower48.invert([samoa.clipExtent()[1][0], samoa.clipExtent()[1][1]]));
    console.info("LL BBOX:", lower48.invert([samoa.clipExtent()[0][0], samoa.clipExtent()[1][1]]));


    console.info("CLIP EXTENT guam: ", guam.clipExtent());
    console.info("UL BBOX:", lower48.invert([guam.clipExtent()[0][0], guam.clipExtent()[0][1]]));
    console.info("UR BBOX:", lower48.invert([guam.clipExtent()[1][0], guam.clipExtent()[0][1]]));
    console.info("LD BBOX:", lower48.invert([guam.clipExtent()[1][0], guam.clipExtent()[1][1]]));
    console.info("LL BBOX:", lower48.invert([guam.clipExtent()[0][0], guam.clipExtent()[1][1]]));
    */ var ulhawaii = lower48([
                -110.4641,
                28.2805
            ]);
            var urhawaii = lower48([
                -104.0597,
                28.9528
            ]);
            var ldhawaii = lower48([
                -103.7049,
                25.1031
            ]);
            var llhawaii = lower48([
                -109.8337,
                24.4531
            ]);
            var ulalaska = lower48([
                -124.4745,
                28.1407
            ]);
            var uralaska = lower48([
                -110.931,
                30.8844
            ]);
            var ldalaska = lower48([
                -109.8337,
                24.4531
            ]);
            var llalaska = lower48([
                -122.4628,
                21.8562
            ]);
            var ulpuertoRico = lower48([
                -76.8579,
                25.1544
            ]);
            var urpuertoRico = lower48([
                -72.429,
                24.2097
            ]);
            var ldpuertoRico = lower48([
                -72.8265,
                22.7056
            ]);
            var llpuertoRico = lower48([
                -77.1852,
                23.6392
            ]);
            var ulsamoa = lower48([
                -125.0093,
                29.7791
            ]);
            var ursamoa = lower48([
                -118.5193,
                31.3262
            ]);
            var ldsamoa = lower48([
                -118.064,
                29.6912
            ]);
            var llsamoa = lower48([
                -124.4369,
                28.169
            ]);
            var ulguam = lower48([
                -128.1314,
                37.4582
            ]);
            var urguam = lower48([
                -125.2132,
                38.214
            ]);
            var ldguam = lower48([
                -122.3616,
                30.5115
            ]);
            var llguam = lower48([
                -125.0315,
                29.8211
            ]);
            context.moveTo(ulhawaii[0], ulhawaii[1]);
            context.lineTo(urhawaii[0], urhawaii[1]);
            context.lineTo(ldhawaii[0], ldhawaii[1]);
            context.lineTo(ldhawaii[0], ldhawaii[1]);
            context.lineTo(llhawaii[0], llhawaii[1]);
            context.closePath();
            context.moveTo(ulalaska[0], ulalaska[1]);
            context.lineTo(uralaska[0], uralaska[1]);
            context.lineTo(ldalaska[0], ldalaska[1]);
            context.lineTo(ldalaska[0], ldalaska[1]);
            context.lineTo(llalaska[0], llalaska[1]);
            context.closePath();
            context.moveTo(ulpuertoRico[0], ulpuertoRico[1]);
            context.lineTo(urpuertoRico[0], urpuertoRico[1]);
            context.lineTo(ldpuertoRico[0], ldpuertoRico[1]);
            context.lineTo(ldpuertoRico[0], ldpuertoRico[1]);
            context.lineTo(llpuertoRico[0], llpuertoRico[1]);
            context.closePath();
            context.moveTo(ulsamoa[0], ulsamoa[1]);
            context.lineTo(ursamoa[0], ursamoa[1]);
            context.lineTo(ldsamoa[0], ldsamoa[1]);
            context.lineTo(ldsamoa[0], ldsamoa[1]);
            context.lineTo(llsamoa[0], llsamoa[1]);
            context.closePath();
            context.moveTo(ulguam[0], ulguam[1]);
            context.lineTo(urguam[0], urguam[1]);
            context.lineTo(ldguam[0], ldguam[1]);
            context.lineTo(ldguam[0], ldguam[1]);
            context.lineTo(llguam[0], llguam[1]);
            context.closePath();
        };
        albersUsa.getCompositionBorders = function() {
            var context = (0, _d3Path.path)();
            this.drawCompositionBorders(context);
            return context.toString();
        };
        return albersUsa.scale(1070);
    });
var _math = require("./math");
var _d3Geo = require("d3-geo");
var _fit = require("./fit");
var _d3Path = require("d3-path");
// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function multiplex(streams) {
    var n = streams.length;
    return {
        point: function(x, y) {
            var i = -1;
            while(++i < n)streams[i].point(x, y);
        },
        sphere: function() {
            var i = -1;
            while(++i < n)streams[i].sphere();
        },
        lineStart: function() {
            var i = -1;
            while(++i < n)streams[i].lineStart();
        },
        lineEnd: function() {
            var i = -1;
            while(++i < n)streams[i].lineEnd();
        },
        polygonStart: function() {
            var i = -1;
            while(++i < n)streams[i].polygonStart();
        },
        polygonEnd: function() {
            var i = -1;
            while(++i < n)streams[i].polygonEnd();
        }
    };
}

},{"./math":"e6zZ7","d3-geo":"8r6MJ","./fit":"3PIRf","d3-path":"fDKwR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8JD9b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// A composite projection for Spain, configured by default for 960×500.
parcelHelpers.export(exports, "default", ()=>function() {
        var cache, cacheStream, iberianPeninsule = (0, _d3Geo.geoConicConformal)().rotate([
            5,
            -38.6
        ]).parallels([
            0,
            60
        ]), iberianPeninsulePoint, canaryIslands = (0, _d3Geo.geoConicConformal)().rotate([
            5,
            -38.6
        ]).parallels([
            0,
            60
        ]), canaryIslandsPoint, point, pointStream = {
            point: function(x, y) {
                point = [
                    x,
                    y
                ];
            }
        };
        /*
      var iberianPeninsuleBbox = [[-11, 46], [4, 35]];
      var canaryIslandsBbox = [[-19.0, 28.85], [-12.7, 28.1]];
      */ function conicConformalSpain(coordinates) {
            var x = coordinates[0], y = coordinates[1];
            return point = null, (iberianPeninsulePoint.point(x, y), point) || (canaryIslandsPoint.point(x, y), point);
        }
        conicConformalSpain.invert = function(coordinates) {
            var k = iberianPeninsule.scale(), t = iberianPeninsule.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
            return (y >= 0.05346 && y < 0.0897 && x >= -0.13388 && x < -0.0322 ? canaryIslands : iberianPeninsule).invert(coordinates);
        };
        conicConformalSpain.stream = function(stream) {
            return cache && cacheStream === stream ? cache : cache = multiplex([
                iberianPeninsule.stream(cacheStream = stream),
                canaryIslands.stream(stream)
            ]);
        };
        conicConformalSpain.precision = function(_) {
            if (!arguments.length) return iberianPeninsule.precision();
            iberianPeninsule.precision(_);
            canaryIslands.precision(_);
            return reset();
        };
        conicConformalSpain.scale = function(_) {
            if (!arguments.length) return iberianPeninsule.scale();
            iberianPeninsule.scale(_);
            canaryIslands.scale(_);
            return conicConformalSpain.translate(iberianPeninsule.translate());
        };
        conicConformalSpain.translate = function(_) {
            if (!arguments.length) return iberianPeninsule.translate();
            var k = iberianPeninsule.scale(), x = +_[0], y = +_[1];
            /*
    var c0 = iberianPeninsule(iberianPeninsuleBbox[0]);
   var x0 = (x - c0[0]) / k;
   var y0 = (y - c0[1]) / k;

   var c1 = iberianPeninsule(iberianPeninsuleBbox[1]);
   var x1 = (x - c1[0]) / k;
   var y1 = (y - c1[1]) / k;

   console.info('Iberian Peninsula: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);

   c0 = canaryIslands.translate([x + 0.1 * k, y - 0.094 * k])(canaryIslandsBbox[0]);
   x0 = (x - c0[0]) / k;
   y0 = (y - c0[1]) / k;

   c1 = canaryIslands.translate([x + 0.1 * k, y - 0.094 * k])(canaryIslandsBbox[1]);
   x1 = (x - c1[0]) / k;
   y1 = (y - c1[1]) / k;

   console.info('Canry Islands: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
   */ iberianPeninsulePoint = iberianPeninsule.translate(_).clipExtent([
                [
                    x - 0.06857 * k,
                    y - 0.1288 * k
                ],
                [
                    x + 0.13249 * k,
                    y + 0.06 * k
                ]
            ]).stream(pointStream);
            canaryIslandsPoint = canaryIslands.translate([
                x + 0.1 * k,
                y - 0.094 * k
            ]).clipExtent([
                [
                    x - 0.1331 * k + (0, _math.epsilon),
                    y + 0.053457 * k + (0, _math.epsilon)
                ],
                [
                    x - 0.0354 * k - (0, _math.epsilon),
                    y + 0.08969 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            return reset();
        };
        conicConformalSpain.fitExtent = function(extent, object) {
            return (0, _fit.fitExtent)(conicConformalSpain, extent, object);
        };
        conicConformalSpain.fitSize = function(size, object) {
            return (0, _fit.fitSize)(conicConformalSpain, size, object);
        };
        function reset() {
            cache = cacheStream = null;
            return conicConformalSpain;
        }
        conicConformalSpain.drawCompositionBorders = function(context) {
            /*
    console.info("CLIP EXTENT: ", canaryIslands.clipExtent());
    console.info("UL BBOX:", iberianPeninsule.invert([canaryIslands.clipExtent()[0][0], canaryIslands.clipExtent()[0][1]]));
    console.info("UR BBOX:", iberianPeninsule.invert([canaryIslands.clipExtent()[1][0], canaryIslands.clipExtent()[0][1]]));
    console.info("LD BBOX:", iberianPeninsule.invert([canaryIslands.clipExtent()[1][0], canaryIslands.clipExtent()[1][1]]));
    */ var ulCanaryIslands = iberianPeninsule([
                -14.034675,
                34.965007
            ]);
            var urCanaryIslands = iberianPeninsule([
                -7.4208899,
                35.536988
            ]);
            var ldCanaryIslands = iberianPeninsule([
                -7.3148275,
                33.54359
            ]);
            context.moveTo(ulCanaryIslands[0], ulCanaryIslands[1]);
            context.lineTo(urCanaryIslands[0], urCanaryIslands[1]);
            context.lineTo(ldCanaryIslands[0], ldCanaryIslands[1]);
        };
        conicConformalSpain.getCompositionBorders = function() {
            var context = (0, _d3Path.path)();
            this.drawCompositionBorders(context);
            return context.toString();
        };
        return conicConformalSpain.scale(2700);
    });
var _math = require("./math");
var _d3Geo = require("d3-geo");
var _fit = require("./fit");
var _d3Path = require("d3-path");
// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function multiplex(streams) {
    var n = streams.length;
    return {
        point: function(x, y) {
            var i = -1;
            while(++i < n)streams[i].point(x, y);
        },
        sphere: function() {
            var i = -1;
            while(++i < n)streams[i].sphere();
        },
        lineStart: function() {
            var i = -1;
            while(++i < n)streams[i].lineStart();
        },
        lineEnd: function() {
            var i = -1;
            while(++i < n)streams[i].lineEnd();
        },
        polygonStart: function() {
            var i = -1;
            while(++i < n)streams[i].polygonStart();
        },
        polygonEnd: function() {
            var i = -1;
            while(++i < n)streams[i].polygonEnd();
        }
    };
}

},{"./math":"e6zZ7","d3-geo":"8r6MJ","./fit":"3PIRf","d3-path":"fDKwR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8bpyQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// A composite projection for Portugal, configured by default for 960×500.
parcelHelpers.export(exports, "default", ()=>function() {
        var cache, cacheStream, iberianPeninsule = (0, _d3Geo.geoConicConformal)().rotate([
            10,
            -39.3
        ]).parallels([
            0,
            60
        ]), iberianPeninsulePoint, madeira = (0, _d3Geo.geoConicConformal)().rotate([
            17,
            -32.7
        ]).parallels([
            0,
            60
        ]), madeiraPoint, azores = (0, _d3Geo.geoConicConformal)().rotate([
            27.8,
            -38.6
        ]).parallels([
            0,
            60
        ]), azoresPoint, point, pointStream = {
            point: function(x, y) {
                point = [
                    x,
                    y
                ];
            }
        };
        /*
      var iberianPeninsuleBbox = [[-11, 46], [4, 34]];
      var madeiraBbox = [[-17.85, 33.6], [-16, 32.02]];
      var azoresBbox = [[-32, 40.529], [-23.98, 35.75]];
      */ function conicConformalPortugal(coordinates) {
            var x = coordinates[0], y = coordinates[1];
            return point = null, (iberianPeninsulePoint.point(x, y), point) || (madeiraPoint.point(x, y), point) || (azoresPoint.point(x, y), point);
        }
        conicConformalPortugal.invert = function(coordinates) {
            var k = iberianPeninsule.scale(), t = iberianPeninsule.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
            /*
        //How are the return values calculated:
        console.info("******");
        var c0 = madeira(madeiraBbox[0]);
        var x0 = (c0[0] - t[0]) / k;
        var y0 = (c0[1] - t[1]) / k;

        console.info("p0 madeira", x0 + ' - ' + y0);

        var c1 = madeira(madeiraBbox[1]);
        var x1 = (c1[0] - t[0]) / k;
        var y1 = (c1[1] - t[1]) / k;

        console.info("p1 madeira", x1 + ' - ' + y1);

        c0 = azores(azoresBbox[0]);
        x0 = (c0[0] - t[0]) / k;
        y0 = (c0[1] - t[1]) / k;

        console.info("p0 azores", x0 + ' - ' + y0);

        c1 = azores(azoresBbox[1]);
        x1 = (c1[0] - t[0]) / k;
        y1 = (c1[1] - t[1]) / k;

        console.info("p1 azores", x1 + ' - ' + y1);
        */ return (y >= 0.0093 && y < 0.03678 && x >= -0.03875 && x < -0.0116 ? madeira : y >= -0.0412 && y < 0.0091 && x >= -0.07782 && x < -0.01166 ? azores : iberianPeninsule).invert(coordinates);
        };
        conicConformalPortugal.stream = function(stream) {
            return cache && cacheStream === stream ? cache : cache = multiplex([
                iberianPeninsule.stream(cacheStream = stream),
                madeira.stream(stream),
                azores.stream(stream)
            ]);
        };
        conicConformalPortugal.precision = function(_) {
            if (!arguments.length) return iberianPeninsule.precision();
            iberianPeninsule.precision(_);
            madeira.precision(_);
            azores.precision(_);
            return reset();
        };
        conicConformalPortugal.scale = function(_) {
            if (!arguments.length) return iberianPeninsule.scale();
            iberianPeninsule.scale(_);
            madeira.scale(_);
            azores.scale(_ * 0.6);
            return conicConformalPortugal.translate(iberianPeninsule.translate());
        };
        conicConformalPortugal.translate = function(_) {
            if (!arguments.length) return iberianPeninsule.translate();
            var k = iberianPeninsule.scale(), x = +_[0], y = +_[1];
            /*
    var c0 = iberianPeninsule(iberianPeninsuleBbox[0]);
   var x0 = (x - c0[0]) / k;
   var y0 = (y - c0[1]) / k;

   var c1 = iberianPeninsule(iberianPeninsuleBbox[1]);
   var x1 = (x - c1[0]) / k;
   var y1 = (y - c1[1]) / k;

   console.info('Iberian Peninsula: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
   console.info('.clipExtent([[x '+
    (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
    ' * k, y '+
    (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
    ' * k],[x '+
    (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
    ' * k, y '+
    (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
    ' * k]])');

   c0 = madeira.translate([x - 0.0265 * k, y + 0.025 * k])(madeiraBbox[0]);
   x0 = (x - c0[0]) / k;
   y0 = (y - c0[1]) / k;

   c1 = madeira.translate([x - 0.0265 * k, y + 0.025 * k])(madeiraBbox[1]);
   x1 = (x - c1[0]) / k;
   y1 = (y - c1[1]) / k;

   console.info('Madeira: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
   console.info('.clipExtent([[x '+
    (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
    ' * k + epsilon, y '+
    (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
    ' * k + epsilon],[x '+
    (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
    ' * k - epsilon, y '+
    (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
    ' * k - epsilon]])');

    c0 = azores.translate([x - 0.045 * k, y + -0.02 * k])(azoresBbox[0]);
    x0 = (x - c0[0]) / k;
    y0 = (y - c0[1]) / k;

    c1 = azores.translate([x - 0.045 * k, y + -0.02 * k])(azoresBbox[1]);
    x1 = (x - c1[0]) / k;
    y1 = (y - c1[1]) / k;

    console.info('Azores: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
    console.info('.clipExtent([[x '+
     (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
     ' * k + epsilon, y '+
     (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
     ' * k + epsilon],[x '+
     (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
     ' * k - epsilon, y '+
     (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
     ' * k - epsilon]])');
     */ iberianPeninsulePoint = iberianPeninsule.translate(_).clipExtent([
                [
                    x - 0.0115 * k,
                    y - 0.1138 * k
                ],
                [
                    x + 0.2105 * k,
                    y + 0.0673 * k
                ]
            ]).stream(pointStream);
            madeiraPoint = madeira.translate([
                x - 0.0265 * k,
                y + 0.025 * k
            ]).clipExtent([
                [
                    x - 0.0388 * k + (0, _math.epsilon),
                    y + 0.0093 * k + (0, _math.epsilon)
                ],
                [
                    x - 0.0116 * k - (0, _math.epsilon),
                    y + 0.0368 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            azoresPoint = azores.translate([
                x - 0.045 * k,
                y + -0.02 * k
            ]).clipExtent([
                [
                    x - 0.0778 * k + (0, _math.epsilon),
                    y - 0.0413 * k + (0, _math.epsilon)
                ],
                [
                    x - 0.0117 * k - (0, _math.epsilon),
                    y + 0.0091 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            return reset();
        };
        conicConformalPortugal.fitExtent = function(extent, object) {
            return (0, _fit.fitExtent)(conicConformalPortugal, extent, object);
        };
        conicConformalPortugal.fitSize = function(size, object) {
            return (0, _fit.fitSize)(conicConformalPortugal, size, object);
        };
        function reset() {
            cache = cacheStream = null;
            return conicConformalPortugal;
        }
        conicConformalPortugal.drawCompositionBorders = function(context) {
            /*
    console.info("CLIP EXTENT MADEIRA: ", madeira.clipExtent());
    console.info("UL BBOX:", iberianPeninsule.invert([madeira.clipExtent()[0][0], madeira.clipExtent()[0][1]]));
    console.info("UR BBOX:", iberianPeninsule.invert([madeira.clipExtent()[1][0], madeira.clipExtent()[0][1]]));
    console.info("LD BBOX:", iberianPeninsule.invert([madeira.clipExtent()[1][0], madeira.clipExtent()[1][1]]));
    console.info("LL BBOX:", iberianPeninsule.invert([madeira.clipExtent()[0][0], madeira.clipExtent()[1][1]]));

    console.info("CLIP EXTENT AZORES: ", azores.clipExtent());
    console.info("UL BBOX:", iberianPeninsule.invert([azores.clipExtent()[0][0], azores.clipExtent()[0][1]]));
    console.info("UR BBOX:", iberianPeninsule.invert([azores.clipExtent()[1][0], azores.clipExtent()[0][1]]));
    console.info("LD BBOX:", iberianPeninsule.invert([azores.clipExtent()[1][0], azores.clipExtent()[1][1]]));
    console.info("LL BBOX:", iberianPeninsule.invert([azores.clipExtent()[0][0], azores.clipExtent()[1][1]]));
    */ var ulmadeira = iberianPeninsule([
                -12.8351,
                38.7113
            ]);
            var urmadeira = iberianPeninsule([
                -10.8482,
                38.7633
            ]);
            var ldmadeira = iberianPeninsule([
                -10.8181,
                37.2072
            ]);
            var llmadeira = iberianPeninsule([
                -12.7345,
                37.1573
            ]);
            var ulazores = iberianPeninsule([
                -16.0753,
                41.4436
            ]);
            var urazores = iberianPeninsule([
                -10.9168,
                41.6861
            ]);
            var ldazores = iberianPeninsule([
                -10.8557,
                38.7747
            ]);
            var llazores = iberianPeninsule([
                -15.6728,
                38.5505
            ]);
            context.moveTo(ulmadeira[0], ulmadeira[1]);
            context.lineTo(urmadeira[0], urmadeira[1]);
            context.lineTo(ldmadeira[0], ldmadeira[1]);
            context.lineTo(ldmadeira[0], ldmadeira[1]);
            context.lineTo(llmadeira[0], llmadeira[1]);
            context.closePath();
            context.moveTo(ulazores[0], ulazores[1]);
            context.lineTo(urazores[0], urazores[1]);
            context.lineTo(ldazores[0], ldazores[1]);
            context.lineTo(ldazores[0], ldazores[1]);
            context.lineTo(llazores[0], llazores[1]);
            context.closePath();
        };
        conicConformalPortugal.getCompositionBorders = function() {
            var context = (0, _d3Path.path)();
            this.drawCompositionBorders(context);
            return context.toString();
        };
        return conicConformalPortugal.scale(4200);
    });
var _math = require("./math");
var _d3Geo = require("d3-geo");
var _fit = require("./fit");
var _d3Path = require("d3-path");
// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function multiplex(streams) {
    var n = streams.length;
    return {
        point: function(x, y) {
            var i = -1;
            while(++i < n)streams[i].point(x, y);
        },
        sphere: function() {
            var i = -1;
            while(++i < n)streams[i].sphere();
        },
        lineStart: function() {
            var i = -1;
            while(++i < n)streams[i].lineStart();
        },
        lineEnd: function() {
            var i = -1;
            while(++i < n)streams[i].lineEnd();
        },
        polygonStart: function() {
            var i = -1;
            while(++i < n)streams[i].polygonStart();
        },
        polygonEnd: function() {
            var i = -1;
            while(++i < n)streams[i].polygonEnd();
        }
    };
}

},{"./math":"e6zZ7","d3-geo":"8r6MJ","./fit":"3PIRf","d3-path":"fDKwR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8U11G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// A composite projection for Ecuador, configured by default for 960×500.
parcelHelpers.export(exports, "default", ()=>function() {
        var cache, cacheStream, mainland = (0, _d3Geo.geoMercator)().rotate([
            80,
            1.5
        ]), mainlandPoint, galapagos = (0, _d3Geo.geoMercator)().rotate([
            90.73,
            1
        ]), galapagosPoint, point, pointStream = {
            point: function(x, y) {
                point = [
                    x,
                    y
                ];
            }
        };
        /*
      var mainlandBbox = [[-81.5, 2.7], [-70.0, -6.0]];
      var galapagosBbox = [[-92.2, 0.58], [-88.8, -1.8]];
      */ function mercatorEcuador(coordinates) {
            var x = coordinates[0], y = coordinates[1];
            return point = null, (mainlandPoint.point(x, y), point) || (galapagosPoint.point(x, y), point);
        }
        mercatorEcuador.invert = function(coordinates) {
            var k = mainland.scale(), t = mainland.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
            /*
        //How are the return values calculated:
        var c0 = galapagos(galapagosBbox[0]);
        var x0 = (c0[0] - t[0]) / k;
        var y0 = (c0[1] - t[1]) / k;

        console.info("p0 galapagos", x0 + ' - ' + y0);


        var c1 = galapagos(galapagosBbox[1]);
        var x1 = (c1[0] - t[0]) / k;
        var y1 = (c1[1] - t[1]) / k;

        console.info("p1 galapagos", x1 + ' - ' + y1);
        */ return (y >= -0.0676 && y < -0.026 && x >= -0.0857 && x < -0.0263 ? galapagos : mainland).invert(coordinates);
        };
        mercatorEcuador.stream = function(stream) {
            return cache && cacheStream === stream ? cache : cache = multiplex([
                mainland.stream(cacheStream = stream),
                galapagos.stream(stream)
            ]);
        };
        mercatorEcuador.precision = function(_) {
            if (!arguments.length) return mainland.precision();
            mainland.precision(_);
            galapagos.precision(_);
            return reset();
        };
        mercatorEcuador.scale = function(_) {
            if (!arguments.length) return mainland.scale();
            mainland.scale(_);
            galapagos.scale(_);
            return mercatorEcuador.translate(mainland.translate());
        };
        mercatorEcuador.translate = function(_) {
            if (!arguments.length) return mainland.translate();
            var k = mainland.scale(), x = +_[0], y = +_[1];
            /*
    var c0 = mainland(mainlandBbox[0]);
   var x0 = (x - c0[0]) / k;
   var y0 = (y - c0[1]) / k;

   var c1 = mainland(mainlandBbox[1]);
   var x1 = (x - c1[0]) / k;
   var y1 = (y - c1[1]) / k;

   console.info('mainland: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
   console.info('.clipExtent([[x '+
    (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
    ' * k, y '+
    (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
    ' * k],[x '+
    (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
    ' * k, y '+
    (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
    ' * k]])');

   c0 = galapagos.translate([x - 0.06 * k, y - 0.04 * k])(galapagosBbox[0]);
   x0 = (x - c0[0]) / k;
   y0 = (y - c0[1]) / k;

   c1 = galapagos.translate([x - 0.06 * k, y - 0.04 * k])(galapagosBbox[1]);
   x1 = (x - c1[0]) / k;
   y1 = (y - c1[1]) / k;

   console.info('galapagos: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
   console.info('.clipExtent([[x '+
    (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
    ' * k + epsilon, y '+
    (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
    ' * k + epsilon],[x '+
    (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
    ' * k - epsilon, y '+
    (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
    ' * k - epsilon]])');*/ mainlandPoint = mainland.translate(_).clipExtent([
                [
                    x - 0.0262 * k,
                    y - 0.0734 * k
                ],
                [
                    x + 0.1741 * k,
                    y + 0.079 * k
                ]
            ]).stream(pointStream);
            galapagosPoint = galapagos.translate([
                x - 0.06 * k,
                y - 0.04 * k
            ]).clipExtent([
                [
                    x - 0.0857 * k + (0, _math.epsilon),
                    y - 0.0676 * k + (0, _math.epsilon)
                ],
                [
                    x - 0.0263 * k - (0, _math.epsilon),
                    y - 0.026 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            return reset();
        };
        mercatorEcuador.fitExtent = function(extent, object) {
            return (0, _fit.fitExtent)(mercatorEcuador, extent, object);
        };
        mercatorEcuador.fitSize = function(size, object) {
            return (0, _fit.fitSize)(mercatorEcuador, size, object);
        };
        function reset() {
            cache = cacheStream = null;
            return mercatorEcuador;
        }
        mercatorEcuador.drawCompositionBorders = function(context) {
            /*
    console.info("CLIP EXTENT: ", galapagos.clipExtent());
    console.info("UL BBOX:", mainland.invert([galapagos.clipExtent()[0][0], galapagos.clipExtent()[0][1]]));
    console.info("UR BBOX:", mainland.invert([galapagos.clipExtent()[1][0], galapagos.clipExtent()[0][1]]));
    console.info("LD BBOX:", mainland.invert([galapagos.clipExtent()[1][0], galapagos.clipExtent()[1][1]]));
    console.info("LL BBOX:", mainland.invert([galapagos.clipExtent()[0][0], galapagos.clipExtent()[1][1]]));
    */ var ulgalapagos = mainland([
                -84.9032,
                2.3757
            ]);
            var urgalapagos = mainland([
                -81.5047,
                2.3708
            ]);
            var ldgalapagos = mainland([
                -81.5063,
                -0.01
            ]);
            var llgalapagos = mainland([
                -84.9086,
                -0.005
            ]);
            context.moveTo(ulgalapagos[0], ulgalapagos[1]);
            context.lineTo(urgalapagos[0], urgalapagos[1]);
            context.lineTo(ldgalapagos[0], ldgalapagos[1]);
            context.lineTo(llgalapagos[0], llgalapagos[1]);
            context.closePath();
        };
        mercatorEcuador.getCompositionBorders = function() {
            var context = (0, _d3Path.path)();
            this.drawCompositionBorders(context);
            return context.toString();
        };
        return mercatorEcuador.scale(3500);
    });
var _math = require("./math");
var _d3Geo = require("d3-geo");
var _fit = require("./fit");
var _d3Path = require("d3-path");
// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function multiplex(streams) {
    var n = streams.length;
    return {
        point: function(x, y) {
            var i = -1;
            while(++i < n)streams[i].point(x, y);
        },
        sphere: function() {
            var i = -1;
            while(++i < n)streams[i].sphere();
        },
        lineStart: function() {
            var i = -1;
            while(++i < n)streams[i].lineStart();
        },
        lineEnd: function() {
            var i = -1;
            while(++i < n)streams[i].lineEnd();
        },
        polygonStart: function() {
            var i = -1;
            while(++i < n)streams[i].polygonStart();
        },
        polygonEnd: function() {
            var i = -1;
            while(++i < n)streams[i].polygonEnd();
        }
    };
}

},{"./math":"e6zZ7","d3-geo":"8r6MJ","./fit":"3PIRf","d3-path":"fDKwR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1EMba":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// A composite projection for Chile, configured by default for 960×500.
parcelHelpers.export(exports, "default", ()=>function() {
        var cache, cacheStream, mainland = (0, _d3Geo.geoTransverseMercator)().rotate([
            72,
            37
        ]), mainlandPoint, antarctic = (0, _d3Geo.geoStereographic)().rotate([
            72,
            0
        ]), antarcticPoint, juanFernandez = (0, _d3Geo.geoMercator)().rotate([
            80,
            33.5
        ]), juanFernandezPoint, pascua = (0, _d3Geo.geoMercator)().rotate([
            110,
            25
        ]), pascuaPoint, point, pointStream = {
            point: function(x, y) {
                point = [
                    x,
                    y
                ];
            }
        };
        /*
    var mainlandBbox = [[-75.5, -15.0], [-32, -49.0]];
    var antarcticBbox = [[-91.0, -60.0], [-43.0, -90.0]];
    var juanFernandezBbox = [[-81.0, -33.0], [-78.5, -34.0]];
    var pascuaBbox = [[-110, -26.6], [-108.7, -27.5]];
    */ function transverseMercatorChile(coordinates) {
            var x = coordinates[0], y = coordinates[1];
            return point = null, (mainlandPoint.point(x, y), point) || (antarcticPoint.point(x, y), point) || (juanFernandezPoint.point(x, y), point) || (pascuaPoint.point(x, y), point);
        }
        transverseMercatorChile.invert = function(coordinates) {
            var k = mainland.scale(), t = mainland.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
            /*
        //How are the return values calculated:
        console.info("******");
        var c0 = antarctic(antarcticBbox[0]);
        var x0 = (c0[0] - t[0]) / k;
        var y0 = (c0[1] - t[1]) / k;

        console.info("p0 antarctic", x0 + ' - ' + y0);

        var c1 = antarctic(antarcticBbox[1]);
        var x1 = (c1[0] - t[0]) / k;
        var y1 = (c1[1] - t[1]) / k;

        console.info("p1 antarctic", x1 + ' - ' + y1);

        c0 = juanFernandez(juanFernandezBbox[0]);
        x0 = (c0[0] - t[0]) / k;
        y0 = (c0[1] - t[1]) / k;

        console.info("p0 juanFernandez", x0 + ' - ' + y0);

        c1 = juanFernandez(juanFernandezBbox[1]);
        x1 = (c1[0] - t[0]) / k;
        y1 = (c1[1] - t[1]) / k;

        console.info("p1 juanFernandez", x1 + ' - ' + y1);

        c0 = pascua(pascuaBbox[0]);
        x0 = (c0[0] - t[0]) / k;
        y0 = (c0[1] - t[1]) / k;

        console.info("p0 pascua", x0 + ' - ' + y0);

        c1 = pascua(pascuaBbox[1]);
        x1 = (c1[0] - t[0]) / k;
        y1 = (c1[1] - t[1]) / k;

        console.info("p1 pascua", x1 + ' - ' + y1);
        */ return (y >= 0.2582 && y < 0.32 && x >= -0.1036 && x < -0.087 ? antarctic : y >= -0.01298 && y < 0.0133 && x >= -0.11396 && x < -0.05944 ? juanFernandez : y >= 0.01539 && y < 0.03911 && x >= -0.089 && x < -0.0588 ? pascua : mainland).invert(coordinates);
        };
        transverseMercatorChile.stream = function(stream) {
            return cache && cacheStream === stream ? cache : cache = multiplex([
                mainland.stream(cacheStream = stream),
                antarctic.stream(stream),
                juanFernandez.stream(stream),
                pascua.stream(stream)
            ]);
        };
        transverseMercatorChile.precision = function(_) {
            if (!arguments.length) return mainland.precision();
            mainland.precision(_);
            antarctic.precision(_);
            juanFernandez.precision(_);
            pascua.precision(_);
            return reset();
        };
        transverseMercatorChile.scale = function(_) {
            if (!arguments.length) return mainland.scale();
            mainland.scale(_);
            antarctic.scale(_ * 0.15);
            juanFernandez.scale(_ * 1.5);
            pascua.scale(_ * 1.5);
            return transverseMercatorChile.translate(mainland.translate());
        };
        transverseMercatorChile.translate = function(_) {
            if (!arguments.length) return mainland.translate();
            var k = mainland.scale(), x = +_[0], y = +_[1];
            /*
    var c0 = mainland(mainlandBbox[0]);
   var x0 = (x - c0[0]) / k;
   var y0 = (y - c0[1]) / k;

   var c1 = mainland(mainlandBbox[1]);
   var x1 = (x - c1[0]) / k;
   var y1 = (y - c1[1]) / k;

   console.info('Mainland: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
   console.info('.clipExtent([[x '+
    (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
    ' * k, y '+
    (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
    ' * k],[x '+
    (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
    ' * k, y '+
    (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
    ' * k]])');

   c0 = antarctic.translate([x - 0.1 * k, y + 0.17 * k])(antarcticBbox[0]);
   x0 = (x - c0[0]) / k;
   y0 = (y - c0[1]) / k;

   c1 = antarctic.translate([x - 0.1 * k, y + 0.17 * k])(antarcticBbox[1]);
   x1 = (x - c1[0]) / k;
   y1 = (y - c1[1]) / k;

   console.info('antarctic: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
   console.info('Doesn t work due to -90 latitude!' + '.clipExtent([[x '+
    (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
    ' * k + epsilon, y '+
    (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
    ' * k + epsilon],[x '+
    (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
    ' * k - epsilon, y '+
    (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
    ' * k - epsilon]])');

    c0 = juanFernandez.translate([x - 0.092 * k, y -0 * k])(juanFernandezBbox[0]);
    x0 = (x - c0[0]) / k;
    y0 = (y - c0[1]) / k;

    c1 = juanFernandez.translate([x - 0.092 * k, y -0 * k])(juanFernandezBbox[1]);
    x1 = (x - c1[0]) / k;
    y1 = (y - c1[1]) / k;

    console.info('juanFernandez: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
    console.info('.clipExtent([[x '+
     (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
     ' * k + epsilon, y '+
     (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
     ' * k + epsilon],[x '+
     (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
     ' * k - epsilon, y '+
     (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
     ' * k - epsilon]])');

     c0 = pascua.translate([x - 0.089 * k, y -0.0265 * k])(pascuaBbox[0]);
     x0 = (x - c0[0]) / k;
     y0 = (y - c0[1]) / k;

     c1 = pascua.translate([x - 0.089 * k, y -0.0265 * k])(pascuaBbox[1]);
     x1 = (x - c1[0]) / k;
     y1 = (y - c1[1]) / k;

     console.info('pascua: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
     console.info('.clipExtent([[x '+
      (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
      ' * k + epsilon, y '+
      (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
      ' * k + epsilon],[x '+
      (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
      ' * k - epsilon, y '+
      (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
      ' * k - epsilon]])');
      */ mainlandPoint = mainland.translate(_).clipExtent([
                [
                    x - 0.059 * k,
                    y - 0.3835 * k
                ],
                [
                    x + 0.4498 * k,
                    y + 0.3375 * k
                ]
            ]).stream(pointStream);
            antarcticPoint = antarctic.translate([
                x - 0.087 * k,
                y + 0.17 * k
            ]).clipExtent([
                [
                    x - 0.1166 * k + (0, _math.epsilon),
                    y + 0.2582 * k + (0, _math.epsilon)
                ],
                [
                    x - 0.06 * k - (0, _math.epsilon),
                    y + 0.32 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            juanFernandezPoint = juanFernandez.translate([
                x - 0.092 * k,
                y - 0 * k
            ]).clipExtent([
                [
                    x - 0.114 * k + (0, _math.epsilon),
                    y - 0.013 * k + (0, _math.epsilon)
                ],
                [
                    x - 0.0594 * k - (0, _math.epsilon),
                    y + 0.0133 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            pascuaPoint = pascua.translate([
                x - 0.089 * k,
                y - 0.0265 * k
            ]).clipExtent([
                [
                    x - 0.089 * k + (0, _math.epsilon),
                    y + 0.0154 * k + (0, _math.epsilon)
                ],
                [
                    x - 0.0588 * k - (0, _math.epsilon),
                    y + 0.0391 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            return reset();
        };
        transverseMercatorChile.fitExtent = function(extent, object) {
            return (0, _fit.fitExtent)(transverseMercatorChile, extent, object);
        };
        transverseMercatorChile.fitSize = function(size, object) {
            return (0, _fit.fitSize)(transverseMercatorChile, size, object);
        };
        function reset() {
            cache = cacheStream = null;
            return transverseMercatorChile;
        }
        transverseMercatorChile.drawCompositionBorders = function(context) {
            /*
    console.info("CLIP EXTENT antarctic: ", antarctic.clipExtent());
    console.info("UL BBOX:", mainland.invert([antarctic.clipExtent()[0][0], antarctic.clipExtent()[0][1]]));
    console.info("UR BBOX:", mainland.invert([antarctic.clipExtent()[1][0], antarctic.clipExtent()[0][1]]));
    console.info("LD BBOX:", mainland.invert([antarctic.clipExtent()[1][0], antarctic.clipExtent()[1][1]]));
    console.info("LL BBOX:", mainland.invert([antarctic.clipExtent()[0][0], antarctic.clipExtent()[1][1]]));

    console.info("CLIP EXTENT juanFernandez: ", juanFernandez.clipExtent());
    console.info("UL BBOX:", mainland.invert([juanFernandez.clipExtent()[0][0], juanFernandez.clipExtent()[0][1]]));
    console.info("UR BBOX:", mainland.invert([juanFernandez.clipExtent()[1][0], juanFernandez.clipExtent()[0][1]]));
    console.info("LD BBOX:", mainland.invert([juanFernandez.clipExtent()[1][0], juanFernandez.clipExtent()[1][1]]));
    console.info("LL BBOX:", mainland.invert([juanFernandez.clipExtent()[0][0], juanFernandez.clipExtent()[1][1]]));

    console.info("CLIP EXTENT pascua: ", pascua.clipExtent());
    console.info("UL BBOX:", mainland.invert([pascua.clipExtent()[0][0], pascua.clipExtent()[0][1]]));
    console.info("UR BBOX:", mainland.invert([pascua.clipExtent()[1][0], pascua.clipExtent()[0][1]]));
    console.info("LD BBOX:", mainland.invert([pascua.clipExtent()[1][0], pascua.clipExtent()[1][1]]));
    console.info("LL BBOX:", mainland.invert([pascua.clipExtent()[0][0], pascua.clipExtent()[1][1]]));
    */ var ulantarctic = mainland([
                -82.6999,
                -51.3043
            ]);
            var urantarctic = mainland([
                -77.5442,
                -51.6631
            ]);
            var ldantarctic = mainland([
                -78.0254,
                -55.186
            ]);
            var llantarctic = mainland([
                -83.6106,
                -54.7785
            ]);
            var uljuanFernandez = mainland([
                -80.0638,
                -35.984
            ]);
            var urjuanFernandez = mainland([
                -76.2153,
                -36.1811
            ]);
            var ldjuanFernandez = mainland([
                -76.2994,
                -37.6839
            ]);
            var lljuanFernandez = mainland([
                -80.2231,
                -37.4757
            ]);
            var ulpascua = mainland([
                -78.442,
                -37.706
            ]);
            var urpascua = mainland([
                -76.263,
                -37.8054
            ]);
            var ldpascua = mainland([
                -76.344,
                -39.1595
            ]);
            var llpascua = mainland([
                -78.5638,
                -39.0559
            ]);
            context.moveTo(ulantarctic[0], ulantarctic[1]);
            context.lineTo(urantarctic[0], urantarctic[1]);
            context.lineTo(ldantarctic[0], ldantarctic[1]);
            context.lineTo(ldantarctic[0], ldantarctic[1]);
            context.lineTo(llantarctic[0], llantarctic[1]);
            context.closePath();
            context.moveTo(uljuanFernandez[0], uljuanFernandez[1]);
            context.lineTo(urjuanFernandez[0], urjuanFernandez[1]);
            context.lineTo(ldjuanFernandez[0], ldjuanFernandez[1]);
            context.lineTo(ldjuanFernandez[0], ldjuanFernandez[1]);
            context.lineTo(lljuanFernandez[0], lljuanFernandez[1]);
            context.closePath();
            context.moveTo(ulpascua[0], ulpascua[1]);
            context.lineTo(urpascua[0], urpascua[1]);
            context.lineTo(ldpascua[0], ldpascua[1]);
            context.lineTo(ldpascua[0], ldpascua[1]);
            context.lineTo(llpascua[0], llpascua[1]);
            context.closePath();
        };
        transverseMercatorChile.getCompositionBorders = function() {
            var context = (0, _d3Path.path)();
            this.drawCompositionBorders(context);
            return context.toString();
        };
        return transverseMercatorChile.scale(700);
    });
var _math = require("./math");
var _d3Geo = require("d3-geo");
var _fit = require("./fit");
var _d3Path = require("d3-path");
// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function multiplex(streams) {
    var n = streams.length;
    return {
        point: function(x, y) {
            var i = -1;
            while(++i < n)streams[i].point(x, y);
        },
        sphere: function() {
            var i = -1;
            while(++i < n)streams[i].sphere();
        },
        lineStart: function() {
            var i = -1;
            while(++i < n)streams[i].lineStart();
        },
        lineEnd: function() {
            var i = -1;
            while(++i < n)streams[i].lineEnd();
        },
        polygonStart: function() {
            var i = -1;
            while(++i < n)streams[i].polygonStart();
        },
        polygonEnd: function() {
            var i = -1;
            while(++i < n)streams[i].polygonEnd();
        }
    };
}

},{"./math":"e6zZ7","d3-geo":"8r6MJ","./fit":"3PIRf","d3-path":"fDKwR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aj6SB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// A composite projection for Portugal, configured by default for 960×500.
parcelHelpers.export(exports, "default", ()=>function() {
        var cache, cacheStream, mainland = (0, _d3Geo.geoConicEquidistant)().rotate([
            -136,
            -22
        ]).parallels([
            40,
            34
        ]), mainlandPoint, hokkaido = (0, _d3Geo.geoConicEquidistant)().rotate([
            -146,
            -26
        ]).parallels([
            40,
            34
        ]), hokkaidoPoint, okinawa = (0, _d3Geo.geoConicEquidistant)().rotate([
            -126,
            -19
        ]).parallels([
            40,
            34
        ]), okinawaPoint, point, pointStream = {
            point: function(x, y) {
                point = [
                    x,
                    y
                ];
            }
        };
        /*
      var mainlandBbox = [[126.0, 41.606], [142.97, 29.97]];
      var hokkaidoBbox = [[138.7, 45.61], [146.2, 41.2]];
      var okinawaBbox = [[122.6, 29.0], [130, 23.7]];
      */ function conicEquidistantJapan(coordinates) {
            var x = coordinates[0], y = coordinates[1];
            return point = null, (mainlandPoint.point(x, y), point) || (hokkaidoPoint.point(x, y), point) || (okinawaPoint.point(x, y), point);
        }
        conicEquidistantJapan.invert = function(coordinates) {
            var k = mainland.scale(), t = mainland.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
            /*
        //How are the return values calculated:
        console.info("******");
        var c0 = hokkaido(hokkaidoBbox[0]);
        var x0 = (c0[0] - t[0]) / k;
        var y0 = (c0[1] - t[1]) / k;

        console.info("p0 hokkaido", x0 + ' - ' + y0);

        var c1 = hokkaido(hokkaidoBbox[1]);
        var x1 = (c1[0] - t[0]) / k;
        var y1 = (c1[1] - t[1]) / k;

        console.info("p1 hokkaido", x1 + ' - ' + y1);

        c0 = okinawa(okinawaBbox[0]);
        x0 = (c0[0] - t[0]) / k;
        y0 = (c0[1] - t[1]) / k;

        console.info("p0 okinawa", x0 + ' - ' + y0);

        c1 = okinawa(okinawaBbox[1]);
        x1 = (c1[0] - t[0]) / k;
        y1 = (c1[1] - t[1]) / k;

        console.info("p1 okinawa", x1 + ' - ' + y1);
        */ return (y >= -0.10925 && y < -0.02701 && x >= -0.135 && x < -0.0397 ? hokkaido : y >= 0.04713 && y < 0.11138 && x >= -0.03986 && x < 0.051 ? okinawa : mainland).invert(coordinates);
        };
        conicEquidistantJapan.stream = function(stream) {
            return cache && cacheStream === stream ? cache : cache = multiplex([
                mainland.stream(cacheStream = stream),
                hokkaido.stream(stream),
                okinawa.stream(stream)
            ]);
        };
        conicEquidistantJapan.precision = function(_) {
            if (!arguments.length) return mainland.precision();
            mainland.precision(_);
            hokkaido.precision(_);
            okinawa.precision(_);
            return reset();
        };
        conicEquidistantJapan.scale = function(_) {
            if (!arguments.length) return mainland.scale();
            mainland.scale(_);
            hokkaido.scale(_);
            okinawa.scale(_ * 0.7);
            return conicEquidistantJapan.translate(mainland.translate());
        };
        conicEquidistantJapan.translate = function(_) {
            if (!arguments.length) return mainland.translate();
            var k = mainland.scale(), x = +_[0], y = +_[1];
            /*
    var c0 = mainland(mainlandBbox[0]);
   var x0 = (x - c0[0]) / k;
   var y0 = (y - c0[1]) / k;

   var c1 = mainland(mainlandBbox[1]);
   var x1 = (x - c1[0]) / k;
   var y1 = (y - c1[1]) / k;

   console.info('Main: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
   console.info('.clipExtent([[x '+
    (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
    ' * k, y '+
    (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
    ' * k],[x '+
    (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
    ' * k, y '+
    (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
    ' * k]])');

   c0 = hokkaido.translate([x - 0.0425 * k, y - 0.005 * k])(hokkaidoBbox[0]);
   x0 = (x - c0[0]) / k;
   y0 = (y - c0[1]) / k;

   c1 = hokkaido.translate([x - 0.0425 * k, y - 0.005 * k])(hokkaidoBbox[1]);
   x1 = (x - c1[0]) / k;
   y1 = (y - c1[1]) / k;

   console.info('hokkaido: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
   console.info('.clipExtent([[x '+
    (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
    ' * k + epsilon, y '+
    (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
    ' * k + epsilon],[x '+
    (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
    ' * k - epsilon, y '+
    (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
    ' * k - epsilon]])');

    c0 = okinawa.translate([x - 0 * k, y + 0 * k])(okinawaBbox[0]);
    x0 = (x - c0[0]) / k;
    y0 = (y - c0[1]) / k;

    c1 = okinawa.translate([x - 0 * k, y + 0 * k])(okinawaBbox[1]);
    x1 = (x - c1[0]) / k;
    y1 = (y - c1[1]) / k;

    console.info('okinawa: p0: ' + x0 + ', ' + y0 + ' , p1: ' + x1 + ' - ' + y1);
    console.info('.clipExtent([[x '+
     (x0<0?'+ ':'- ') + Math.abs(x0.toFixed(4))+
     ' * k + epsilon, y '+
     (y0<0?'+ ':'- ') + Math.abs(y0.toFixed(4))+
     ' * k + epsilon],[x '+
     (x1<0?'+ ':'- ') + Math.abs(x1.toFixed(4))+
     ' * k - epsilon, y '+
     (y1<0?'+ ':'- ') + Math.abs(y1.toFixed(4))+
     ' * k - epsilon]])');
     */ mainlandPoint = mainland.translate(_).clipExtent([
                [
                    x - 0.1352 * k,
                    y - 0.1091 * k
                ],
                [
                    x + 0.117 * k,
                    y + 0.098 * k
                ]
            ]).stream(pointStream);
            hokkaidoPoint = hokkaido.translate([
                x - 0.0425 * k,
                y - 0.005 * k
            ]).clipExtent([
                [
                    x - 0.135 * k + (0, _math.epsilon),
                    y - 0.1093 * k + (0, _math.epsilon)
                ],
                [
                    x - 0.0397 * k - (0, _math.epsilon),
                    y - 0.027 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            okinawaPoint = okinawa.translate(_).clipExtent([
                [
                    x - 0.0399 * k + (0, _math.epsilon),
                    y + 0.0471 * k + (0, _math.epsilon)
                ],
                [
                    x + 0.051 * k - (0, _math.epsilon),
                    y + 0.1114 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            return reset();
        };
        conicEquidistantJapan.fitExtent = function(extent, object) {
            return (0, _fit.fitExtent)(conicEquidistantJapan, extent, object);
        };
        conicEquidistantJapan.fitSize = function(size, object) {
            return (0, _fit.fitSize)(conicEquidistantJapan, size, object);
        };
        function reset() {
            cache = cacheStream = null;
            return conicEquidistantJapan;
        }
        conicEquidistantJapan.drawCompositionBorders = function(context) {
            /*
    console.info("CLIP EXTENT hokkaido: ", hokkaido.clipExtent());
    console.info("UL BBOX:", mainland.invert([hokkaido.clipExtent()[0][0], hokkaido.clipExtent()[0][1]]));
    console.info("UR BBOX:", mainland.invert([hokkaido.clipExtent()[1][0], hokkaido.clipExtent()[0][1]]));
    console.info("LD BBOX:", mainland.invert([hokkaido.clipExtent()[1][0], hokkaido.clipExtent()[1][1]]));
    console.info("LL BBOX:", mainland.invert([hokkaido.clipExtent()[0][0], hokkaido.clipExtent()[1][1]]));
    */ var ulhokkaido = mainland([
                126.01320483689143,
                41.621090310215585
            ]);
            var urhokkaido = mainland([
                133.04304387025903,
                42.15087523707186
            ]);
            var ldhokkaido = mainland([
                133.3021766080688,
                37.43975444725098
            ]);
            var llhokkaido = mainland([
                126.87889168628224,
                36.95488945159779
            ]);
            var llokinawa = mainland([
                132.9,
                29.8
            ]);
            var lmokinawa = mainland([
                134,
                33
            ]);
            var lrokinawa = mainland([
                139.3,
                33.2
            ]);
            var llrokinawa = mainland([
                139.16,
                30.5
            ]);
            context.moveTo(ulhokkaido[0], ulhokkaido[1]);
            context.lineTo(urhokkaido[0], urhokkaido[1]);
            context.lineTo(ldhokkaido[0], ldhokkaido[1]);
            context.lineTo(llhokkaido[0], llhokkaido[1]);
            context.closePath();
            context.moveTo(llokinawa[0], llokinawa[1]);
            context.lineTo(lmokinawa[0], lmokinawa[1]);
            context.lineTo(lrokinawa[0], lrokinawa[1]);
            context.lineTo(llrokinawa[0], llrokinawa[1]);
        };
        conicEquidistantJapan.getCompositionBorders = function() {
            var context = (0, _d3Path.path)();
            this.drawCompositionBorders(context);
            return context.toString();
        };
        return conicEquidistantJapan.scale(2200);
    });
var _math = require("./math");
var _d3Geo = require("d3-geo");
var _fit = require("./fit");
var _d3Path = require("d3-path");
// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function multiplex(streams) {
    var n = streams.length;
    return {
        point: function(x, y) {
            var i = -1;
            while(++i < n)streams[i].point(x, y);
        },
        sphere: function() {
            var i = -1;
            while(++i < n)streams[i].sphere();
        },
        lineStart: function() {
            var i = -1;
            while(++i < n)streams[i].lineStart();
        },
        lineEnd: function() {
            var i = -1;
            while(++i < n)streams[i].lineEnd();
        },
        polygonStart: function() {
            var i = -1;
            while(++i < n)streams[i].polygonStart();
        },
        polygonEnd: function() {
            var i = -1;
            while(++i < n)streams[i].polygonEnd();
        }
    };
}

},{"./math":"e6zZ7","d3-geo":"8r6MJ","./fit":"3PIRf","d3-path":"fDKwR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8vb7W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// A composite projection for France, configured by default for 960×500.
parcelHelpers.export(exports, "default", ()=>function() {
        var cache, cacheStream, europe = (0, _d3Geo.geoConicConformal)().rotate([
            -3,
            -46.2
        ]).parallels([
            0,
            60
        ]), europePoint, guyane = (0, _d3Geo.geoMercator)().center([
            -53.2,
            3.9
        ]), guyanePoint, martinique = (0, _d3Geo.geoMercator)().center([
            -61.03,
            14.67
        ]), martiniquePoint, guadeloupe = (0, _d3Geo.geoMercator)().center([
            -61.46,
            16.14
        ]), guadeloupePoint, saintBarthelemy = (0, _d3Geo.geoMercator)().center([
            -62.85,
            17.92
        ]), saintBarthelemyPoint, stPierreMiquelon = (0, _d3Geo.geoMercator)().center([
            -56.23,
            46.93
        ]), stPierreMiquelonPoint, mayotte = (0, _d3Geo.geoMercator)().center([
            45.16,
            -12.8
        ]), mayottePoint, reunion = (0, _d3Geo.geoMercator)().center([
            55.52,
            -21.13
        ]), reunionPoint, nouvelleCaledonie = (0, _d3Geo.geoMercator)().center([
            165.8,
            -21.07
        ]), nouvelleCaledoniePoint, wallisFutuna = (0, _d3Geo.geoMercator)().center([
            -178.1,
            -14.3
        ]), wallisFutunaPoint, polynesie = (0, _d3Geo.geoMercator)().center([
            -150.55,
            -17.11
        ]), polynesiePoint, polynesie2 = (0, _d3Geo.geoMercator)().center([
            -150.55,
            -17.11
        ]), polynesie2Point, point, pointStream = {
            point: function(x, y) {
                point = [
                    x,
                    y
                ];
            }
        };
        /*
      var europeBbox = [[-6.5, 51], [10, 41]];
      var guyaneBbox = [[-54.5, 6.29], [-50.9, 1.48]];
      */ function conicConformalFrance(coordinates) {
            var x = coordinates[0], y = coordinates[1];
            return point = null, (europePoint.point(x, y), point) || (guyanePoint.point(x, y), point) || (martiniquePoint.point(x, y), point) || (guadeloupePoint.point(x, y), point) || (saintBarthelemyPoint.point(x, y), point) || (stPierreMiquelonPoint.point(x, y), point) || (mayottePoint.point(x, y), point) || (reunionPoint.point(x, y), point) || (nouvelleCaledoniePoint.point(x, y), point) || (wallisFutunaPoint.point(x, y), point) || (polynesiePoint.point(x, y), point) || (polynesie2Point.point(x, y), point);
        }
        conicConformalFrance.invert = function(coordinates) {
            var k = europe.scale(), t = europe.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
            return (y >= 0.029 && y < 0.0864 && x >= -0.14 && x < -0.0996 ? guyane : y >= 0 && y < 0.029 && x >= -0.14 && x < -0.0996 ? martinique : y >= -0.032 && y < 0 && x >= -0.14 && x < -0.0996 ? guadeloupe : y >= -0.052 && y < -0.032 && x >= -0.14 && x < -0.0996 ? saintBarthelemy : y >= -0.076 && y < 0.052 && x >= -0.14 && x < -0.0996 ? stPierreMiquelon : y >= -0.076 && y < -0.052 && x >= 0.0967 && x < 0.1371 ? mayotte : y >= -0.052 && y < -0.02 && x >= 0.0967 && x < 0.1371 ? reunion : y >= -0.02 && y < 0.012 && x >= 0.0967 && x < 0.1371 ? nouvelleCaledonie : y >= 0.012 && y < 0.033 && x >= 0.0967 && x < 0.1371 ? wallisFutuna : y >= 0.033 && y < 0.0864 && x >= 0.0967 && x < 0.1371 ? polynesie : europe).invert(coordinates);
        };
        conicConformalFrance.stream = function(stream) {
            return cache && cacheStream === stream ? cache : cache = multiplex([
                europe.stream(cacheStream = stream),
                guyane.stream(stream),
                martinique.stream(stream),
                guadeloupe.stream(stream),
                saintBarthelemy.stream(stream),
                stPierreMiquelon.stream(stream),
                mayotte.stream(stream),
                reunion.stream(stream),
                nouvelleCaledonie.stream(stream),
                wallisFutuna.stream(stream),
                polynesie.stream(stream),
                polynesie2.stream(stream)
            ]);
        };
        conicConformalFrance.precision = function(_) {
            if (!arguments.length) return europe.precision();
            europe.precision(_);
            guyane.precision(_);
            martinique.precision(_);
            guadeloupe.precision(_);
            saintBarthelemy.precision(_);
            stPierreMiquelon.precision(_);
            mayotte.precision(_);
            reunion.precision(_);
            nouvelleCaledonie.precision(_);
            wallisFutuna.precision(_);
            polynesie.precision(_);
            polynesie2.precision(_);
            return reset();
        };
        conicConformalFrance.scale = function(_) {
            if (!arguments.length) return europe.scale();
            europe.scale(_);
            guyane.scale(_ * 0.6);
            martinique.scale(_ * 1.6);
            guadeloupe.scale(_ * 1.4);
            saintBarthelemy.scale(_ * 5);
            stPierreMiquelon.scale(_ * 1.3);
            mayotte.scale(_ * 1.6);
            reunion.scale(_ * 1.2);
            nouvelleCaledonie.scale(_ * 0.3);
            wallisFutuna.scale(_ * 2.7);
            polynesie.scale(_ * 0.5);
            polynesie2.scale(_ * 0.06);
            return conicConformalFrance.translate(europe.translate());
        };
        conicConformalFrance.translate = function(_) {
            if (!arguments.length) return europe.translate();
            var k = europe.scale(), x = +_[0], y = +_[1];
            europePoint = europe.translate(_).clipExtent([
                [
                    x - 0.0996 * k,
                    y - 0.0908 * k
                ],
                [
                    x + 0.0967 * k,
                    y + 0.0864 * k
                ]
            ]).stream(pointStream);
            guyanePoint = guyane.translate([
                x - 0.12 * k,
                y + 0.0575 * k
            ]).clipExtent([
                [
                    x - 0.14 * k + (0, _math.epsilon),
                    y + 0.029 * k + (0, _math.epsilon)
                ],
                [
                    x - 0.0996 * k - (0, _math.epsilon),
                    y + 0.0864 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            martiniquePoint = martinique.translate([
                x - 0.12 * k,
                y + 0.013 * k
            ]).clipExtent([
                [
                    x - 0.14 * k + (0, _math.epsilon),
                    y + 0 * k + (0, _math.epsilon)
                ],
                [
                    x - 0.0996 * k - (0, _math.epsilon),
                    y + 0.029 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            guadeloupePoint = guadeloupe.translate([
                x - 0.12 * k,
                y - 0.014 * k
            ]).clipExtent([
                [
                    x - 0.14 * k + (0, _math.epsilon),
                    y - 0.032 * k + (0, _math.epsilon)
                ],
                [
                    x - 0.0996 * k - (0, _math.epsilon),
                    y + 0 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            saintBarthelemyPoint = saintBarthelemy.translate([
                x - 0.12 * k,
                y - 0.044 * k
            ]).clipExtent([
                [
                    x - 0.14 * k + (0, _math.epsilon),
                    y - 0.052 * k + (0, _math.epsilon)
                ],
                [
                    x - 0.0996 * k - (0, _math.epsilon),
                    y - 0.032 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            stPierreMiquelonPoint = stPierreMiquelon.translate([
                x - 0.12 * k,
                y - 0.065 * k
            ]).clipExtent([
                [
                    x - 0.14 * k + (0, _math.epsilon),
                    y - 0.076 * k + (0, _math.epsilon)
                ],
                [
                    x - 0.0996 * k - (0, _math.epsilon),
                    y - 0.052 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            mayottePoint = mayotte.translate([
                x + 0.117 * k,
                y - 0.064 * k
            ]).clipExtent([
                [
                    x + 0.0967 * k + (0, _math.epsilon),
                    y - 0.076 * k + (0, _math.epsilon)
                ],
                [
                    x + 0.1371 * k - (0, _math.epsilon),
                    y - 0.052 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            reunionPoint = reunion.translate([
                x + 0.116 * k,
                y - 0.0355 * k
            ]).clipExtent([
                [
                    x + 0.0967 * k + (0, _math.epsilon),
                    y - 0.052 * k + (0, _math.epsilon)
                ],
                [
                    x + 0.1371 * k - (0, _math.epsilon),
                    y - 0.02 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            nouvelleCaledoniePoint = nouvelleCaledonie.translate([
                x + 0.116 * k,
                y - 0.0048 * k
            ]).clipExtent([
                [
                    x + 0.0967 * k + (0, _math.epsilon),
                    y - 0.02 * k + (0, _math.epsilon)
                ],
                [
                    x + 0.1371 * k - (0, _math.epsilon),
                    y + 0.012 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            wallisFutunaPoint = wallisFutuna.translate([
                x + 0.116 * k,
                y + 0.022 * k
            ]).clipExtent([
                [
                    x + 0.0967 * k + (0, _math.epsilon),
                    y + 0.012 * k + (0, _math.epsilon)
                ],
                [
                    x + 0.1371 * k - (0, _math.epsilon),
                    y + 0.033 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            polynesie2Point = polynesie2.translate([
                x + 0.11 * k,
                y + 0.045 * k
            ]).clipExtent([
                [
                    x + 0.0967 * k + (0, _math.epsilon),
                    y + 0.033 * k + (0, _math.epsilon)
                ],
                [
                    x + 0.1371 * k - (0, _math.epsilon),
                    y + 0.06 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            polynesiePoint = polynesie.translate([
                x + 0.115 * k,
                y + 0.075 * k
            ]).clipExtent([
                [
                    x + 0.0967 * k + (0, _math.epsilon),
                    y + 0.06 * k + (0, _math.epsilon)
                ],
                [
                    x + 0.1371 * k - (0, _math.epsilon),
                    y + 0.0864 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            return reset();
        };
        conicConformalFrance.fitExtent = function(extent, object) {
            return (0, _fit.fitExtent)(conicConformalFrance, extent, object);
        };
        conicConformalFrance.fitSize = function(size, object) {
            return (0, _fit.fitSize)(conicConformalFrance, size, object);
        };
        function reset() {
            cache = cacheStream = null;
            return conicConformalFrance;
        }
        conicConformalFrance.drawCompositionBorders = function(context) {
            /*
    console.log("var ul, ur, ld, ll;");
    var projs = [guyane, martinique, guadeloupe, saintBarthelemy, stPierreMiquelon, mayotte, reunion, nouvelleCaledonie, wallisFutuna, polynesie, polynesie2];
    for (var i in projs){
      var ul = europe.invert([projs[i].clipExtent()[0][0], projs[i].clipExtent()[0][1]]);
      var ur = europe.invert([projs[i].clipExtent()[1][0], projs[i].clipExtent()[0][1]]);
      var ld = europe.invert([projs[i].clipExtent()[1][0], projs[i].clipExtent()[1][1]]);
      var ll = europe.invert([projs[i].clipExtent()[0][0], projs[i].clipExtent()[1][1]]);

      console.log("ul = europe(["+ul+"]);");
      console.log("ur = europe(["+ur+"]);");
      console.log("ld = europe(["+ld+"]);");
      console.log("ll = europe(["+ll+"]);");

      console.log("context.moveTo(ul[0], ul[1]);");
      console.log("context.lineTo(ur[0], ur[1]);");
      console.log("context.lineTo(ld[0], ld[1]);");
      console.log("context.lineTo(ll[0], ll[1]);");
      console.log("context.closePath();");

    }*/ var ul, ur, ld, ll;
            ul = europe([
                -7.938886725111036,
                43.7219460918835
            ]);
            ur = europe([
                -4.832080896458295,
                44.12930268549372
            ]);
            ld = europe([
                -4.205299743793263,
                40.98096346967365
            ]);
            ll = europe([
                -7.071796453126152,
                40.610037319181444
            ]);
            context.moveTo(ul[0], ul[1]);
            context.lineTo(ur[0], ur[1]);
            context.lineTo(ld[0], ld[1]);
            context.lineTo(ll[0], ll[1]);
            context.closePath();
            ul = europe([
                -8.42751373617692,
                45.32889452553031
            ]);
            ur = europe([
                -5.18599305777107,
                45.7566442062976
            ]);
            ld = europe([
                -4.832080905154431,
                44.129302726751426
            ]);
            ll = europe([
                -7.938886737126192,
                43.72194613263854
            ]);
            context.moveTo(ul[0], ul[1]);
            context.lineTo(ur[0], ur[1]);
            context.lineTo(ld[0], ld[1]);
            context.lineTo(ll[0], ll[1]);
            context.closePath();
            ul = europe([
                -9.012656899657046,
                47.127733821030176
            ]);
            ur = europe([
                -5.6105244772793155,
                47.579777861410626
            ]);
            ld = europe([
                -5.185993067168585,
                45.756644248170346
            ]);
            ll = europe([
                -8.427513749141811,
                45.32889456686326
            ]);
            context.moveTo(ul[0], ul[1]);
            context.lineTo(ur[0], ur[1]);
            context.lineTo(ld[0], ld[1]);
            context.lineTo(ll[0], ll[1]);
            context.closePath();
            ul = europe([
                -9.405747558985553,
                48.26506375557457
            ]);
            ur = europe([
                -5.896175018439575,
                48.733352850851624
            ]);
            ld = europe([
                -5.610524487556043,
                47.57977790393761
            ]);
            ll = europe([
                -9.012656913808351,
                47.127733862971255
            ]);
            context.moveTo(ul[0], ul[1]);
            context.lineTo(ur[0], ur[1]);
            context.lineTo(ld[0], ld[1]);
            context.lineTo(ll[0], ll[1]);
            context.closePath();
            ul = europe([
                -9.908436061346974,
                49.642448789505856
            ]);
            ur = europe([
                -6.262026716233124,
                50.131426841787174
            ]);
            ld = europe([
                -5.896175029331232,
                48.73335289377258
            ]);
            ll = europe([
                -9.40574757396393,
                48.26506379787767
            ]);
            context.moveTo(ul[0], ul[1]);
            context.lineTo(ur[0], ur[1]);
            context.lineTo(ld[0], ld[1]);
            context.lineTo(ll[0], ll[1]);
            context.closePath();
            ul = europe([
                11.996907706504462,
                50.16039028163579
            ]);
            ur = europe([
                15.649907879773343,
                49.68279246765253
            ]);
            ld = europe([
                15.156712840526632,
                48.30371557625831
            ]);
            ll = europe([
                11.64122661754411,
                48.761078240546816
            ]);
            context.moveTo(ul[0], ul[1]);
            context.lineTo(ur[0], ur[1]);
            context.lineTo(ld[0], ld[1]);
            context.lineTo(ll[0], ll[1]);
            context.closePath();
            ul = europe([
                11.641226606955788,
                48.7610781975889
            ]);
            ur = europe([
                15.156712825832164,
                48.30371553390465
            ]);
            ld = europe([
                14.549932166241172,
                46.4866532486199
            ]);
            ll = europe([
                11.204443787952183,
                46.91899233914248
            ]);
            context.moveTo(ul[0], ul[1]);
            context.lineTo(ur[0], ur[1]);
            context.lineTo(ld[0], ld[1]);
            context.lineTo(ll[0], ll[1]);
            context.closePath();
            ul = europe([
                11.204443778297161,
                46.918992296823646
            ]);
            ur = europe([
                14.549932152815039,
                46.486653206856396
            ]);
            ld = europe([
                13.994409796764009,
                44.695833444323256
            ]);
            ll = europe([
                10.805306599253848,
                45.105133870684924
            ]);
            context.moveTo(ul[0], ul[1]);
            context.lineTo(ur[0], ur[1]);
            context.lineTo(ld[0], ld[1]);
            context.lineTo(ll[0], ll[1]);
            context.closePath();
            ul = europe([
                10.805306590412085,
                45.10513382903308
            ]);
            ur = europe([
                13.99440978444733,
                44.695833403183606
            ]);
            ld = europe([
                13.654633799024392,
                43.53552468558152
            ]);
            ll = europe([
                10.561516803980956,
                43.930671459798624
            ]);
            context.moveTo(ul[0], ul[1]);
            context.lineTo(ur[0], ur[1]);
            context.lineTo(ld[0], ld[1]);
            context.lineTo(ll[0], ll[1]);
            context.closePath();
            ul = europe([
                10.561516795617383,
                43.93067141859757
            ]);
            ur = europe([
                13.654633787361952,
                43.5355246448671
            ]);
            ld = europe([
                12.867691604239901,
                40.640701985019405
            ]);
            ll = europe([
                9.997809515987688,
                41.00288343254471
            ]);
            context.moveTo(ul[0], ul[1]);
            context.lineTo(ur[0], ur[1]);
            context.lineTo(ld[0], ld[1]);
            context.lineTo(ll[0], ll[1]);
            context.closePath();
            ul = europe([
                10.8,
                42.4
            ]);
            ur = europe([
                12.8,
                42.13
            ]);
            context.moveTo(ul[0], ul[1]);
            context.lineTo(ur[0], ur[1]);
        };
        conicConformalFrance.getCompositionBorders = function() {
            var context = (0, _d3Path.path)();
            this.drawCompositionBorders(context);
            return context.toString();
        };
        return conicConformalFrance.scale(2700);
    });
var _math = require("./math");
var _d3Geo = require("d3-geo");
var _fit = require("./fit");
var _d3Path = require("d3-path");
// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function multiplex(streams) {
    var n = streams.length;
    return {
        point: function(x, y) {
            var i = -1;
            while(++i < n)streams[i].point(x, y);
        },
        sphere: function() {
            var i = -1;
            while(++i < n)streams[i].sphere();
        },
        lineStart: function() {
            var i = -1;
            while(++i < n)streams[i].lineStart();
        },
        lineEnd: function() {
            var i = -1;
            while(++i < n)streams[i].lineEnd();
        },
        polygonStart: function() {
            var i = -1;
            while(++i < n)streams[i].polygonStart();
        },
        polygonEnd: function() {
            var i = -1;
            while(++i < n)streams[i].polygonEnd();
        }
    };
}

},{"./math":"e6zZ7","d3-geo":"8r6MJ","./fit":"3PIRf","d3-path":"fDKwR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4okiV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// A composite projection for Portugal, configured by default for 960×500.
parcelHelpers.export(exports, "default", ()=>function() {
        var cache, cacheStream, europe = (0, _d3Geo.geoConicConformal)().rotate([
            -10,
            -53
        ]).parallels([
            0,
            60
        ]), europePoint, guadeloupe = (0, _d3Geo.geoMercator)().center([
            -61.46,
            16.14
        ]), guadeloupePoint, guyane = (0, _d3Geo.geoMercator)().center([
            -53.2,
            3.9
        ]), guyanePoint, azores = (0, _d3Geo.geoConicConformal)().rotate([
            27.8,
            -38.9
        ]).parallels([
            0,
            60
        ]), azoresPoint, azores2 = (0, _d3Geo.geoConicConformal)().rotate([
            25.43,
            -37.398
        ]).parallels([
            0,
            60
        ]), azores2Point, azores3 = (0, _d3Geo.geoConicConformal)().rotate([
            31.17,
            -39.539
        ]).parallels([
            0,
            60
        ]), azores3Point, madeira = (0, _d3Geo.geoConicConformal)().rotate([
            17,
            -32.7
        ]).parallels([
            0,
            60
        ]), madeiraPoint, canaryIslands = (0, _d3Geo.geoConicConformal)().rotate([
            16,
            -28.5
        ]).parallels([
            0,
            60
        ]), canaryIslandsPoint, martinique = (0, _d3Geo.geoMercator)().center([
            -61.03,
            14.67
        ]), martiniquePoint, mayotte = (0, _d3Geo.geoMercator)().center([
            45.16,
            -12.8
        ]), mayottePoint, reunion = (0, _d3Geo.geoMercator)().center([
            55.52,
            -21.13
        ]), reunionPoint, malta = (0, _d3Geo.geoConicConformal)().rotate([
            -14.4,
            -35.95
        ]).parallels([
            0,
            60
        ]), maltaPoint, point, pointStream = {
            point: function(x, y) {
                point = [
                    x,
                    y
                ];
            }
        };
        /*
      var europeBbox = [[-6.5, 51], [10, 41]];
      var guyaneBbox = [[-54.5, 6.29], [-50.9, 1.48]];
      */ function conicConformalEurope(coordinates) {
            var x = coordinates[0], y = coordinates[1];
            return point = null, (europePoint.point(x, y), point) || (guyanePoint.point(x, y), point) || (martiniquePoint.point(x, y), point) || (guadeloupePoint.point(x, y), point) || (canaryIslandsPoint.point(x, y), point) || (madeiraPoint.point(x, y), point) || (mayottePoint.point(x, y), point) || (reunionPoint.point(x, y), point) || (maltaPoint.point(x, y), point) || (azoresPoint.point(x, y), point) || (azores2Point.point(x, y), point) || (azores3Point.point(x, y), point);
        }
        conicConformalEurope.invert = function(coordinates) {
            var k = europe.scale(), t = europe.translate(), x = (coordinates[0] - (t[0] + 0.08 * k)) / k, y = (coordinates[1] - t[1]) / k;
            return (y >= -0.31 && y < -0.24 && x >= 0.14 && x < 0.24 ? guadeloupe : y >= -0.24 && y < -0.17 && x >= 0.14 && x < 0.24 ? guyane : y >= -0.17 && y < -0.12 && x >= 0.21 && x < 0.24 ? azores2 : y >= -0.17 && y < -0.14 && x >= 0.14 && x < 0.165 ? azores3 : y >= -0.17 && y < -0.1 && x >= 0.14 && x < 0.24 ? azores : y >= -0.1 && y < -0.03 && x >= 0.14 && x < 0.24 ? madeira : y >= -0.03 && y < 0.04 && x >= 0.14 && x < 0.24 ? canaryIslands : y >= -0.31 && y < -0.24 && x >= 0.24 && x < 0.34 ? martinique : y >= -0.24 && y < -0.17 && x >= 0.24 && x < 0.34 ? mayotte : y >= -0.17 && y < -0.1 && x >= 0.24 && x < 0.34 ? reunion : y >= -0.1 && y < -0.03 && x >= 0.24 && x < 0.34 ? malta : europe).invert(coordinates);
        };
        conicConformalEurope.stream = function(stream) {
            return cache && cacheStream === stream ? cache : cache = multiplex([
                europe.stream(cacheStream = stream),
                guyane.stream(stream),
                martinique.stream(stream),
                guadeloupe.stream(stream),
                canaryIslands.stream(stream),
                madeira.stream(stream),
                mayotte.stream(stream),
                reunion.stream(stream),
                malta.stream(stream),
                azores.stream(stream),
                azores2.stream(stream),
                azores3.stream(stream)
            ]);
        };
        conicConformalEurope.precision = function(_) {
            if (!arguments.length) return europe.precision();
            europe.precision(_);
            guyane.precision(_);
            martinique.precision(_);
            guadeloupe.precision(_);
            canaryIslands.precision(_);
            madeira.precision(_);
            mayotte.precision(_);
            reunion.precision(_);
            malta.precision(_);
            azores.precision(_);
            azores2.precision(_);
            azores3.precision(_);
            return reset();
        };
        conicConformalEurope.scale = function(_) {
            if (!arguments.length) return europe.scale();
            europe.scale(_);
            guadeloupe.scale(_ * 3);
            guyane.scale(_ * 0.8);
            martinique.scale(_ * 3.5);
            reunion.scale(_ * 2.7);
            azores.scale(_ * 2);
            azores2.scale(_ * 2);
            azores3.scale(_ * 2);
            madeira.scale(_ * 3);
            canaryIslands.scale(_);
            mayotte.scale(_ * 5.5);
            malta.scale(_ * 6);
            return conicConformalEurope.translate(europe.translate());
        };
        conicConformalEurope.translate = function(_) {
            if (!arguments.length) return europe.translate();
            var k = europe.scale(), x = +_[0], y = +_[1];
            europePoint = europe.translate([
                x - 0.08 * k,
                y
            ]).clipExtent([
                [
                    x - 0.51 * k,
                    y - 0.33 * k
                ],
                [
                    x + 0.5 * k,
                    y + 0.33 * k
                ]
            ]).stream(pointStream);
            guadeloupePoint = guadeloupe.translate([
                x + 0.19 * k,
                y - 0.275 * k
            ]).clipExtent([
                [
                    x + 0.14 * k + (0, _math.epsilon),
                    y - 0.31 * k + (0, _math.epsilon)
                ],
                [
                    x + 0.24 * k - (0, _math.epsilon),
                    y - 0.24 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            guyanePoint = guyane.translate([
                x + 0.19 * k,
                y - 0.205 * k
            ]).clipExtent([
                [
                    x + 0.14 * k + (0, _math.epsilon),
                    y - 0.24 * k + (0, _math.epsilon)
                ],
                [
                    x + 0.24 * k - (0, _math.epsilon),
                    y - 0.17 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            azoresPoint = azores.translate([
                x + 0.19 * k,
                y - 0.135 * k
            ]).clipExtent([
                [
                    x + 0.14 * k + (0, _math.epsilon),
                    y - 0.17 * k + (0, _math.epsilon)
                ],
                [
                    x + 0.24 * k - (0, _math.epsilon),
                    y - 0.1 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            azores2Point = azores2.translate([
                x + 0.225 * k,
                y - 0.147 * k
            ]).clipExtent([
                [
                    x + 0.21 * k + (0, _math.epsilon),
                    y - 0.17 * k + (0, _math.epsilon)
                ],
                [
                    x + 0.24 * k - (0, _math.epsilon),
                    y - 0.12 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            azores3Point = azores3.translate([
                x + 0.153 * k,
                y - 0.15 * k
            ]).clipExtent([
                [
                    x + 0.14 * k + (0, _math.epsilon),
                    y - 0.17 * k + (0, _math.epsilon)
                ],
                [
                    x + 0.165 * k - (0, _math.epsilon),
                    y - 0.14 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            madeiraPoint = madeira.translate([
                x + 0.19 * k,
                y - 0.065 * k
            ]).clipExtent([
                [
                    x + 0.14 * k + (0, _math.epsilon),
                    y - 0.1 * k + (0, _math.epsilon)
                ],
                [
                    x + 0.24 * k - (0, _math.epsilon),
                    y - 0.03 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            canaryIslandsPoint = canaryIslands.translate([
                x + 0.19 * k,
                y + 0.005 * k
            ]).clipExtent([
                [
                    x + 0.14 * k + (0, _math.epsilon),
                    y - 0.03 * k + (0, _math.epsilon)
                ],
                [
                    x + 0.24 * k - (0, _math.epsilon),
                    y + 0.04 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            martiniquePoint = martinique.translate([
                x + 0.29 * k,
                y - 0.275 * k
            ]).clipExtent([
                [
                    x + 0.24 * k + (0, _math.epsilon),
                    y - 0.31 * k + (0, _math.epsilon)
                ],
                [
                    x + 0.34 * k - (0, _math.epsilon),
                    y - 0.24 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            mayottePoint = mayotte.translate([
                x + 0.29 * k,
                y - 0.205 * k
            ]).clipExtent([
                [
                    x + 0.24 * k + (0, _math.epsilon),
                    y - 0.24 * k + (0, _math.epsilon)
                ],
                [
                    x + 0.34 * k - (0, _math.epsilon),
                    y - 0.17 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            reunionPoint = reunion.translate([
                x + 0.29 * k,
                y - 0.135 * k
            ]).clipExtent([
                [
                    x + 0.24 * k + (0, _math.epsilon),
                    y - 0.17 * k + (0, _math.epsilon)
                ],
                [
                    x + 0.34 * k - (0, _math.epsilon),
                    y - 0.1 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            maltaPoint = malta.translate([
                x + 0.29 * k,
                y - 0.065 * k
            ]).clipExtent([
                [
                    x + 0.24 * k + (0, _math.epsilon),
                    y - 0.1 * k + (0, _math.epsilon)
                ],
                [
                    x + 0.34 * k - (0, _math.epsilon),
                    y - 0.03 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            return reset();
        };
        conicConformalEurope.fitExtent = function(extent, object) {
            return (0, _fit.fitExtent)(conicConformalEurope, extent, object);
        };
        conicConformalEurope.fitSize = function(size, object) {
            return (0, _fit.fitSize)(conicConformalEurope, size, object);
        };
        function reset() {
            cache = cacheStream = null;
            return conicConformalEurope;
        }
        conicConformalEurope.drawCompositionBorders = function(context) {
            /*
    console.log("var ul, ur, ld, ll;");
    var projs = [guyane, martinique, guadeloupe, canaryIslands, madeira, mayotte, reunion, malta, azores, azores2, azores3];
    for (var i in projs){
      var ul = europe.invert([projs[i].clipExtent()[0][0], projs[i].clipExtent()[0][1]]);
      var ur = europe.invert([projs[i].clipExtent()[1][0], projs[i].clipExtent()[0][1]]);
      var ld = europe.invert([projs[i].clipExtent()[1][0], projs[i].clipExtent()[1][1]]);
      var ll = europe.invert([projs[i].clipExtent()[0][0], projs[i].clipExtent()[1][1]]);

      console.log("ul = europe(["+ul+"]);");
      console.log("ur = europe(["+ur+"]);");
      console.log("ld = europe(["+ld+"]);");
      console.log("ll = europe(["+ll+"]);");

      console.log("context.moveTo(ul[0], ul[1]);");
      console.log("context.lineTo(ur[0], ur[1]);");
      console.log("context.lineTo(ld[0], ld[1]);");
      console.log("context.lineTo(ll[0], ll[1]);");
      console.log("context.closePath();");

    }*/ var ul, ur, ld, ll;
            ul = europe([
                42.45755610828648,
                63.343658547914934
            ]);
            ur = europe([
                52.65837266667029,
                59.35045080290929
            ]);
            ld = europe([
                47.19754502247785,
                56.12653496548117
            ]);
            ll = europe([
                37.673034273363044,
                59.61638268506111
            ]);
            context.moveTo(ul[0], ul[1]);
            context.lineTo(ur[0], ur[1]);
            context.lineTo(ld[0], ld[1]);
            context.lineTo(ll[0], ll[1]);
            context.closePath();
            ul = europe([
                59.41110754003403,
                62.35069727399336
            ]);
            ur = europe([
                66.75050228640794,
                57.11797303636038
            ]);
            ld = europe([
                60.236065725110436,
                54.63331433818992
            ]);
            ll = europe([
                52.65837313153311,
                59.350450804599355
            ]);
            context.moveTo(ul[0], ul[1]);
            context.lineTo(ur[0], ur[1]);
            context.lineTo(ld[0], ld[1]);
            context.lineTo(ll[0], ll[1]);
            context.closePath();
            ul = europe([
                48.81091130080243,
                66.93353402634641
            ]);
            ur = europe([
                59.41110730654679,
                62.35069740653086
            ]);
            ld = europe([
                52.6583728974441,
                59.3504509222445
            ]);
            ll = europe([
                42.45755631675751,
                63.34365868805821
            ]);
            context.moveTo(ul[0], ul[1]);
            context.lineTo(ur[0], ur[1]);
            context.lineTo(ld[0], ld[1]);
            context.lineTo(ll[0], ll[1]);
            context.closePath();
            ul = europe([
                31.054198418446475,
                52.1080673766184
            ]);
            ur = europe([
                39.09869284884117,
                49.400700047190554
            ]);
            ld = europe([
                36.0580811499175,
                46.02944174908498
            ]);
            ll = europe([
                28.690508588835726,
                48.433126979386415
            ]);
            context.moveTo(ul[0], ul[1]);
            context.lineTo(ur[0], ur[1]);
            context.lineTo(ld[0], ld[1]);
            context.lineTo(ll[0], ll[1]);
            context.closePath();
            ul = europe([
                33.977877745912025,
                55.849945501331
            ]);
            ur = europe([
                42.75328432167726,
                52.78455122462353
            ]);
            ld = europe([
                39.09869297540224,
                49.400700176148625
            ]);
            ll = europe([
                31.05419851807008,
                52.10806751810923
            ]);
            context.moveTo(ul[0], ul[1]);
            context.lineTo(ur[0], ur[1]);
            context.lineTo(ld[0], ld[1]);
            context.lineTo(ll[0], ll[1]);
            context.closePath();
            ul = europe([
                52.658372900759296,
                59.35045068526415
            ]);
            ur = europe([
                60.23606549583304,
                54.63331423800264
            ]);
            ld = europe([
                54.6756370953122,
                51.892298789399455
            ]);
            ll = europe([
                47.19754524788189,
                56.126534861222794
            ]);
            context.moveTo(ul[0], ul[1]);
            context.lineTo(ur[0], ur[1]);
            context.lineTo(ld[0], ld[1]);
            context.lineTo(ll[0], ll[1]);
            context.closePath();
            ul = europe([
                47.19754506082455,
                56.126534735591456
            ]);
            ur = europe([
                54.675636900123514,
                51.892298681337095
            ]);
            ld = europe([
                49.94448648951486,
                48.98775484983285
            ]);
            ll = europe([
                42.75328468716108,
                52.78455126060818
            ]);
            context.moveTo(ul[0], ul[1]);
            context.lineTo(ur[0], ur[1]);
            context.lineTo(ld[0], ld[1]);
            context.lineTo(ll[0], ll[1]);
            context.closePath();
            ul = europe([
                42.75328453416769,
                52.78455113209101
            ]);
            ur = europe([
                49.94448632339758,
                48.98775473706457
            ]);
            ld = europe([
                45.912339990394315,
                45.99361784987003
            ]);
            ll = europe([
                39.09869317356607,
                49.40070009378711
            ]);
            context.moveTo(ul[0], ul[1]);
            context.lineTo(ur[0], ur[1]);
            context.lineTo(ld[0], ld[1]);
            context.lineTo(ll[0], ll[1]);
            context.closePath();
            ul = europe([
                37.673034114296634,
                59.61638254183119
            ]);
            ur = europe([
                47.197544835420544,
                56.126534839849846
            ]);
            ld = europe([
                42.75328447467064,
                52.78455135314068
            ]);
            ll = europe([
                33.977877870363905,
                55.849945644671145
            ]);
            context.moveTo(ul[0], ul[1]);
            context.lineTo(ur[0], ur[1]);
            context.lineTo(ld[0], ld[1]);
            context.lineTo(ll[0], ll[1]);
            context.closePath();
            ul = europe([
                44.56748486446032,
                57.26489367845818
            ]);
            ld = europe([
                43.9335791193588,
                53.746540942601726
            ]);
            ll = europe([
                43,
                56
            ]);
            context.moveTo(ul[0], ul[1]);
            context.lineTo(ur[0], ur[1]);
            context.lineTo(ld[0], ld[1]);
            context.lineTo(ll[0], ll[1]);
            context.closePath();
            ul = europe([
                37.673034114296634,
                59.61638254183119
            ]);
            ur = europe([
                40.25902691953466,
                58.83002044222639
            ]);
            ld = europe([
                38.458270492742024,
                57.26232178028002
            ]);
            ll = europe([
                35.97754948030156,
                58.00266637992386
            ]);
            context.moveTo(ul[0], ul[1]);
            context.lineTo(ur[0], ur[1]);
            context.lineTo(ld[0], ld[1]);
            context.lineTo(ll[0], ll[1]);
            context.closePath();
        };
        conicConformalEurope.getCompositionBorders = function() {
            var context = (0, _d3Path.path)();
            this.drawCompositionBorders(context);
            return context.toString();
        };
        return conicConformalEurope.scale(750);
    });
var _math = require("./math");
var _d3Geo = require("d3-geo");
var _fit = require("./fit");
var _d3Path = require("d3-path");
// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function multiplex(streams) {
    var n = streams.length;
    return {
        point: function(x, y) {
            var i = -1;
            while(++i < n)streams[i].point(x, y);
        },
        sphere: function() {
            var i = -1;
            while(++i < n)streams[i].sphere();
        },
        lineStart: function() {
            var i = -1;
            while(++i < n)streams[i].lineStart();
        },
        lineEnd: function() {
            var i = -1;
            while(++i < n)streams[i].lineEnd();
        },
        polygonStart: function() {
            var i = -1;
            while(++i < n)streams[i].polygonStart();
        },
        polygonEnd: function() {
            var i = -1;
            while(++i < n)streams[i].polygonEnd();
        }
    };
}

},{"./math":"e6zZ7","d3-geo":"8r6MJ","./fit":"3PIRf","d3-path":"fDKwR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"exuOZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// A composite projection for the Netherlands, configured by default for 960×500.
parcelHelpers.export(exports, "default", ()=>function() {
        var cache, cacheStream, netherlandsMainland = (0, _d3Geo.geoConicConformal)().rotate([
            -5.5,
            -52.2
        ]).parallels([
            0,
            60
        ]), netherlandsMainlandPoint, bonaire = (0, _d3Geo.geoMercator)().center([
            -68.25,
            12.20
        ]), bonairePoint, sabaSintEustatius = (0, _d3Geo.geoMercator)().center([
            -63.1,
            17.50
        ]), sabaSintEustatiusPoint, point, pointStream = {
            point: function(x, y) {
                point = [
                    x,
                    y
                ];
            }
        };
        function conicConformalNetherlands(coordinates) {
            const [x, y] = coordinates;
            return point = null, (netherlandsMainlandPoint.point(x, y), point) || (bonairePoint.point(x, y), point) || (sabaSintEustatiusPoint.point(x, y), point);
        }
        conicConformalNetherlands.invert = function(coordinates) {
            var k = netherlandsMainland.scale(), t = netherlandsMainland.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
            return (y >= -0.0067 && y < 0.0015 && x >= -0.0232 && x < -0.0154 ? bonaire : y >= -0.022 && y < -0.014 && x >= -0.023 && x < -0.014 ? sabaSintEustatius : netherlandsMainland).invert(coordinates);
        };
        conicConformalNetherlands.stream = function(stream) {
            return cache && cacheStream === stream ? cache : cache = multiplex([
                netherlandsMainland.stream(cacheStream = stream),
                bonaire.stream(stream),
                sabaSintEustatius.stream(stream)
            ]);
        };
        conicConformalNetherlands.precision = function(_) {
            if (!arguments.length) return netherlandsMainland.precision();
            netherlandsMainland.precision(_);
            bonaire.precision(_);
            sabaSintEustatius.precision(_);
            return reset();
        };
        conicConformalNetherlands.scale = function(_) {
            if (!arguments.length) return netherlandsMainland.scale();
            netherlandsMainland.scale(_);
            bonaire.scale(_);
            sabaSintEustatius.scale(_);
            return conicConformalNetherlands.translate(netherlandsMainland.translate());
        };
        conicConformalNetherlands.translate = function(_) {
            if (!arguments.length) return netherlandsMainland.translate();
            const k = netherlandsMainland.scale(), x = +_[0], y = +_[1];
            netherlandsMainlandPoint = netherlandsMainland.translate(_).clipExtent([
                [
                    x - 0.0245 * k,
                    y - 0.0260 * k
                ],
                [
                    x + 0.0230 * k,
                    y + 0.0260 * k
                ]
            ]).stream(pointStream);
            bonairePoint = bonaire.translate([
                x - 0.0186 * k,
                y - 0.00325 * k
            ]).clipExtent([
                [
                    x - 0.0232 * k + (0, _math.epsilon),
                    y - 0.0067 * k + (0, _math.epsilon)
                ],
                [
                    x - 0.0154 * k - (0, _math.epsilon),
                    y + 0.0015 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            sabaSintEustatiusPoint = sabaSintEustatius.translate([
                x - 0.0185 * k,
                y - 0.017 * k
            ]).clipExtent([
                [
                    x - 0.023 * k + (0, _math.epsilon),
                    y - 0.022 * k + (0, _math.epsilon)
                ],
                [
                    x - 0.014 * k - (0, _math.epsilon),
                    y - 0.014 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            return reset();
        };
        conicConformalNetherlands.fitExtent = function(extent, object) {
            return (0, _fit.fitExtent)(conicConformalNetherlands, extent, object);
        };
        conicConformalNetherlands.fitSize = function(size, object) {
            return (0, _fit.fitSize)(conicConformalNetherlands, size, object);
        };
        function reset() {
            cache = cacheStream = null;
            return conicConformalNetherlands;
        }
        conicConformalNetherlands.drawCompositionBorders = function(context) {
            /* 
    console.table({
      "Clip extent": ["Bonaire", bonaire.clipExtent()],
      "UL BBOX:": netherlandsMainland.invert([bonaire.clipExtent()[0][0], bonaire.clipExtent()[0][1]]),
      "UR BBOX:": netherlandsMainland.invert([bonaire.clipExtent()[1][0], bonaire.clipExtent()[0][1]]),
      "LD BBOX:": netherlandsMainland.invert([bonaire.clipExtent()[1][0], bonaire.clipExtent()[1][1]]),
      "LL BBOX:": netherlandsMainland.invert([bonaire.clipExtent()[0][0], bonaire.clipExtent()[1][1]])
    });
    
    console.table({
      "Clip extent": ["Saba & Sint Eustatius", sabaSintEustatius.clipExtent()],
      "UL BBOX:": netherlandsMainland.invert([sabaSintEustatius.clipExtent()[0][0], sabaSintEustatius.clipExtent()[0][1]]),
      "UR BBOX:": netherlandsMainland.invert([sabaSintEustatius.clipExtent()[1][0], sabaSintEustatius.clipExtent()[0][1]]),
      "LD BBOX:": netherlandsMainland.invert([sabaSintEustatius.clipExtent()[1][0], sabaSintEustatius.clipExtent()[1][1]]),
      "LL BBOX:": netherlandsMainland.invert([sabaSintEustatius.clipExtent()[0][0], sabaSintEustatius.clipExtent()[1][1]])
    }); 
    */ var ulbonaire = netherlandsMainland([
                3.30573,
                52.5562
            ]);
            var urbonaire = netherlandsMainland([
                4.0430,
                52.5720
            ]);
            var ldbonaire = netherlandsMainland([
                4.0646,
                52.1017
            ]);
            var llbonaire = netherlandsMainland([
                3.3382,
                52.0861
            ]);
            var ulsabaSintEustatius = netherlandsMainland([
                3.2620,
                53.4390
            ]);
            var ursabaSintEustatius = netherlandsMainland([
                4.1373,
                53.4571
            ]);
            var ldsabaSintEustatius = netherlandsMainland([
                4.1574,
                52.9946
            ]);
            var llsabaSintEustatius = netherlandsMainland([
                3.2951,
                52.9768
            ]);
            context.moveTo(ulbonaire[0], ulbonaire[1]);
            context.lineTo(urbonaire[0], urbonaire[1]);
            context.lineTo(ldbonaire[0], ldbonaire[1]);
            context.lineTo(ldbonaire[0], ldbonaire[1]);
            context.lineTo(llbonaire[0], llbonaire[1]);
            context.closePath();
            context.moveTo(ulsabaSintEustatius[0], ulsabaSintEustatius[1]);
            context.lineTo(ursabaSintEustatius[0], ursabaSintEustatius[1]);
            context.lineTo(ldsabaSintEustatius[0], ldsabaSintEustatius[1]);
            context.lineTo(ldsabaSintEustatius[0], ldsabaSintEustatius[1]);
            context.lineTo(llsabaSintEustatius[0], llsabaSintEustatius[1]);
            context.closePath();
        };
        conicConformalNetherlands.getCompositionBorders = function() {
            var context = (0, _d3Path.path)();
            this.drawCompositionBorders(context);
            return context.toString();
        };
        return conicConformalNetherlands.scale(4200);
    });
var _math = require("./math");
var _d3Geo = require("d3-geo");
var _fit = require("./fit");
var _d3Path = require("d3-path");
// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function multiplex(streams) {
    var n = streams.length;
    return {
        point: function(x, y) {
            var i = -1;
            while(++i < n)streams[i].point(x, y);
        },
        sphere: function() {
            var i = -1;
            while(++i < n)streams[i].sphere();
        },
        lineStart: function() {
            var i = -1;
            while(++i < n)streams[i].lineStart();
        },
        lineEnd: function() {
            var i = -1;
            while(++i < n)streams[i].lineEnd();
        },
        polygonStart: function() {
            var i = -1;
            while(++i < n)streams[i].polygonStart();
        },
        polygonEnd: function() {
            var i = -1;
            while(++i < n)streams[i].polygonEnd();
        }
    };
}

},{"./math":"e6zZ7","d3-geo":"8r6MJ","./fit":"3PIRf","d3-path":"fDKwR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"asODv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// A composite projection for Malaysia, configured by default for 960×500.
parcelHelpers.export(exports, "default", ()=>function() {
        var cache, cacheStream, peninsular = (0, _d3Geo.geoMercator)().center([
            105.25,
            4.00
        ]), peninsularPoint, borneo = (0, _d3Geo.geoMercator)().center([
            118.65,
            2.86
        ]), borneoPoint, point, pointStream = {
            point: function(x, y) {
                point = [
                    x,
                    y
                ];
            }
        };
        function mercatorMalaysia(coordinates) {
            var x = coordinates[0], y = coordinates[1];
            return point = null, (peninsularPoint.point(x, y), point) || (borneoPoint.point(x, y), point);
        }
        mercatorMalaysia.invert = function(coordinates) {
            var k = peninsular.scale(), t = peninsular.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
            return (y >= -0.0521 && y < 0.0229 && x >= -0.0111 && x < 0.1000 ? borneo : peninsular).invert(coordinates);
        };
        mercatorMalaysia.stream = function(stream) {
            return cache && cacheStream === stream ? cache : cache = multiplex([
                peninsular.stream(cacheStream = stream),
                borneo.stream(stream)
            ]);
        };
        mercatorMalaysia.precision = function(_) {
            if (!arguments.length) return peninsular.precision();
            peninsular.precision(_);
            borneo.precision(_);
            return reset();
        };
        mercatorMalaysia.scale = function(_) {
            if (!arguments.length) return peninsular.scale();
            peninsular.scale(_);
            borneo.scale(_ * 0.615);
            return mercatorMalaysia.translate(peninsular.translate());
        };
        mercatorMalaysia.translate = function(_) {
            if (!arguments.length) return peninsular.translate();
            var k = peninsular.scale(), x = +_[0], y = +_[1];
            peninsularPoint = peninsular.translate(_).clipExtent([
                [
                    x - 0.1100 * k,
                    y - 0.0521 * k
                ],
                [
                    x - 0.0111 * k,
                    y + 0.0521 * k
                ]
            ]).stream(pointStream);
            borneoPoint = borneo.translate([
                x + 0.09000 * k,
                y - 0.00 * k
            ]).clipExtent([
                [
                    x - 0.0111 * k + (0, _math.epsilon),
                    y - 0.0521 * k + (0, _math.epsilon)
                ],
                [
                    x + 0.1000 * k - (0, _math.epsilon),
                    y + 0.024 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            return reset();
        };
        mercatorMalaysia.fitExtent = function(extent, object) {
            return (0, _fit.fitExtent)(mercatorMalaysia, extent, object);
        };
        mercatorMalaysia.fitSize = function(size, object) {
            return (0, _fit.fitSize)(mercatorMalaysia, size, object);
        };
        function reset() {
            cache = cacheStream = null;
            return mercatorMalaysia;
        }
        mercatorMalaysia.drawCompositionBorders = function(context) {
            var llbor = peninsular([
                106.3214,
                2.0228
            ]);
            var lmbor = peninsular([
                105.1843,
                2.3761
            ]);
            var lrbor = peninsular([
                104.2151,
                3.3618
            ]);
            var llrbor = peninsular([
                104.2150,
                4.5651
            ]);
            context.moveTo(llbor[0], llbor[1]);
            context.lineTo(lmbor[0], lmbor[1]);
            context.lineTo(lrbor[0], lrbor[1]);
            context.lineTo(llrbor[0], llrbor[1]);
        };
        mercatorMalaysia.getCompositionBorders = function() {
            var context = (0, _d3Path.path)();
            this.drawCompositionBorders(context);
            return context.toString();
        };
        return mercatorMalaysia.scale(4800);
    });
var _math = require("./math");
var _d3Geo = require("d3-geo");
var _fit = require("./fit");
var _d3Path = require("d3-path");
// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function multiplex(streams) {
    var n = streams.length;
    return {
        point: function(x, y) {
            var i = -1;
            while(++i < n)streams[i].point(x, y);
        },
        sphere: function() {
            var i = -1;
            while(++i < n)streams[i].sphere();
        },
        lineStart: function() {
            var i = -1;
            while(++i < n)streams[i].lineStart();
        },
        lineEnd: function() {
            var i = -1;
            while(++i < n)streams[i].lineEnd();
        },
        polygonStart: function() {
            var i = -1;
            while(++i < n)streams[i].polygonStart();
        },
        polygonEnd: function() {
            var i = -1;
            while(++i < n)streams[i].polygonEnd();
        }
    };
}

},{"./math":"e6zZ7","d3-geo":"8r6MJ","./fit":"3PIRf","d3-path":"fDKwR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9BGVG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// A composite projection for Equatorial Guinea, configured by default for 960×500.
parcelHelpers.export(exports, "default", ()=>function() {
        var cache, cacheStream, continent = (0, _d3Geo.geoMercator)().rotate([
            -9.5,
            -1.5
        ]), continentPoint, bioko = (0, _d3Geo.geoMercator)().rotate([
            -8.6,
            -3.5
        ]), biokoPoint, annobon = (0, _d3Geo.geoMercator)().rotate([
            -5.6,
            1.45
        ]), annobonPoint, point, pointStream = {
            point: function(x, y) {
                point = [
                    x,
                    y
                ];
            }
        };
        function mercatorEquatorialGuinea(coordinates) {
            var x = coordinates[0], y = coordinates[1];
            return point = null, (continentPoint.point(x, y), point) || (biokoPoint.point(x, y), point) || (annobonPoint.point(x, y), point);
        }
        mercatorEquatorialGuinea.invert = function(coordinates) {
            var k = continent.scale(), t = continent.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
            return (y >= -0.02 && y < 0 && x >= -0.038 && x < -0.005 ? bioko : y >= 0 && y < 0.02 && x >= -0.038 && x < -0.005 ? annobon : continent).invert(coordinates);
        };
        mercatorEquatorialGuinea.stream = function(stream) {
            return cache && cacheStream === stream ? cache : cache = multiplex([
                continent.stream(cacheStream = stream),
                bioko.stream(stream),
                annobon.stream(stream)
            ]);
        };
        mercatorEquatorialGuinea.precision = function(_) {
            if (!arguments.length) return continent.precision();
            continent.precision(_);
            bioko.precision(_);
            annobon.precision(_);
            return reset();
        };
        mercatorEquatorialGuinea.scale = function(_) {
            if (!arguments.length) return continent.scale();
            continent.scale(_);
            bioko.scale(_ * 1.5);
            annobon.scale(_ * 4);
            return mercatorEquatorialGuinea.translate(continent.translate());
        };
        mercatorEquatorialGuinea.translate = function(_) {
            if (!arguments.length) return continent.translate();
            var k = continent.scale(), x = +_[0], y = +_[1];
            continentPoint = continent.translate(_).clipExtent([
                [
                    x - 0.005 * k,
                    y - 0.02 * k
                ],
                [
                    x + 0.038 * k,
                    y + 0.02 * k
                ]
            ]).stream(pointStream);
            biokoPoint = bioko.translate([
                x - 0.025 * k,
                y - 0.01 * k
            ]).clipExtent([
                [
                    x - 0.038 * k + (0, _math.epsilon),
                    y - 0.02 * k + (0, _math.epsilon)
                ],
                [
                    x - 0.005 * k - (0, _math.epsilon),
                    y + 0 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            annobonPoint = annobon.translate([
                x - 0.025 * k,
                y + 0.01 * k
            ]).clipExtent([
                [
                    x - 0.038 * k + (0, _math.epsilon),
                    y - 0 * k + (0, _math.epsilon)
                ],
                [
                    x - 0.005 * k - (0, _math.epsilon),
                    y + 0.02 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            return reset();
        };
        mercatorEquatorialGuinea.fitExtent = function(extent, object) {
            return (0, _fit.fitExtent)(mercatorEquatorialGuinea, extent, object);
        };
        mercatorEquatorialGuinea.fitSize = function(size, object) {
            return (0, _fit.fitSize)(mercatorEquatorialGuinea, size, object);
        };
        function reset() {
            cache = cacheStream = null;
            return mercatorEquatorialGuinea;
        }
        mercatorEquatorialGuinea.drawCompositionBorders = function(context) {
            /*
    console.log("var ul, ur, ld, ll;");
    var projs = [continent, bioko, annobon];
    for (var i in projs){
      var ul = continent.invert([projs[i].clipExtent()[0][0], projs[i].clipExtent()[0][1]]);
      var ur = continent.invert([projs[i].clipExtent()[1][0], projs[i].clipExtent()[0][1]]);
      var ld = continent.invert([projs[i].clipExtent()[1][0], projs[i].clipExtent()[1][1]]);
      var ll = continent.invert([projs[i].clipExtent()[0][0], projs[i].clipExtent()[1][1]]);

      console.log("ul = continent(["+ul+"]);");
      console.log("ur = continent(["+ur+"]);");
      console.log("ld = continent(["+ld+"]);");
      console.log("ll = continent(["+ll+"]);");

      console.log("context.moveTo(ul[0], ul[1]);");
      console.log("context.lineTo(ur[0], ur[1]);");
      console.log("context.lineTo(ld[0], ld[1]);");
      console.log("context.lineTo(ll[0], ll[1]);");
      console.log("context.closePath();");

    }*/ var ul, ur, ld, ll;
            ul = continent([
                9.21327272751682,
                2.645820439454123
            ]);
            ur = continent([
                11.679126293239872,
                2.644755519268689
            ]);
            ld = continent([
                11.676845389029227,
                0.35307824637606433
            ]);
            ll = continent([
                9.213572917774014,
                0.35414205204417754
            ]);
            context.moveTo(ul[0], ul[1]);
            context.lineTo(ur[0], ur[1]);
            context.lineTo(ld[0], ld[1]);
            context.lineTo(ll[0], ll[1]);
            context.closePath();
            ul = continent([
                7.320873711543669,
                2.64475551449975
            ]);
            ur = continent([
                9.213272722738658,
                2.645820434679803
            ]);
            ld = continent([
                9.213422896480349,
                1.4999812505283054
            ]);
            ll = continent([
                7.322014760520787,
                1.4989168878985566
            ]);
            context.moveTo(ul[0], ul[1]);
            context.lineTo(ur[0], ur[1]);
            context.lineTo(ld[0], ld[1]);
            context.lineTo(ll[0], ll[1]);
            context.closePath();
            ul = continent([
                7.3220147605302905,
                1.4989168783492766
            ]);
            ur = continent([
                9.213422896481598,
                1.499981240979021
            ]);
            ld = continent([
                9.213572912999604,
                0.354142056817247
            ]);
            ll = continent([
                7.323154615739809,
                0.353078251154504
            ]);
            context.moveTo(ul[0], ul[1]);
            context.lineTo(ur[0], ur[1]);
            context.lineTo(ld[0], ld[1]);
            context.lineTo(ll[0], ll[1]);
            context.closePath();
        };
        mercatorEquatorialGuinea.getCompositionBorders = function() {
            var context = (0, _d3Path.path)();
            this.drawCompositionBorders(context);
            return context.toString();
        };
        return mercatorEquatorialGuinea.scale(12000);
    });
var _math = require("./math");
var _d3Geo = require("d3-geo");
var _fit = require("./fit");
var _d3Path = require("d3-path");
// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function multiplex(streams) {
    var n = streams.length;
    return {
        point: function(x, y) {
            var i = -1;
            while(++i < n)streams[i].point(x, y);
        },
        sphere: function() {
            var i = -1;
            while(++i < n)streams[i].sphere();
        },
        lineStart: function() {
            var i = -1;
            while(++i < n)streams[i].lineStart();
        },
        lineEnd: function() {
            var i = -1;
            while(++i < n)streams[i].lineEnd();
        },
        polygonStart: function() {
            var i = -1;
            while(++i < n)streams[i].polygonStart();
        },
        polygonEnd: function() {
            var i = -1;
            while(++i < n)streams[i].polygonEnd();
        }
    };
}

},{"./math":"e6zZ7","d3-geo":"8r6MJ","./fit":"3PIRf","d3-path":"fDKwR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5D1NJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        var cache, cacheStream, main = (0, _d3Geo.geoAlbers)().rotate([
            4.4,
            0.8
        ]).center([
            0,
            55.4
        ]).parallels([
            50,
            60
        ]), mainPoint, shetland = (0, _d3Geo.geoAlbers)().rotate([
            4.4,
            0.8
        ]).center([
            0,
            55.4
        ]).parallels([
            50,
            60
        ]), shetlandPoint, point, pointStream = {
            point: function(x, y) {
                point = [
                    x,
                    y
                ];
            }
        };
        var shetlandBbox = [
            [
                -2.1,
                70
            ],
            [
                -0.7,
                59.8
            ]
        ];
        function albersUk(coordinates) {
            var x = coordinates[0], y = coordinates[1];
            return point = null, (mainPoint.point(x, y), point) || (shetlandPoint.point(x, y), point);
        }
        albersUk.invert = function(coordinates) {
            var k = main.scale(), t = main.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
            return (y >= -0.089 && y < 0.06 && x >= 0.029 && x < 0.046 ? shetland : main).invert(coordinates);
        };
        albersUk.stream = function(stream) {
            return cache && cacheStream === stream ? cache : cache = multiplex([
                main.stream(cacheStream = stream),
                shetland.stream(stream)
            ]);
        };
        albersUk.precision = function(_) {
            if (!arguments.length) return main.precision();
            main.precision(_), shetland.precision(_);
            return reset();
        };
        albersUk.scale = function(_) {
            if (!arguments.length) return main.scale();
            main.scale(_), shetland.scale(_);
            return albersUk.translate(main.translate());
        };
        albersUk.translate = function(_) {
            if (!arguments.length) return main.translate();
            var k = main.scale(), x = +_[0], y = +_[1];
            mainPoint = main.translate(_).clipExtent([
                [
                    x - 0.065 * k,
                    y - 0.089 * k
                ],
                [
                    x + 0.075 * k,
                    y + 0.089 * k
                ]
            ]).stream(pointStream);
            shetlandPoint = shetland.translate([
                x + 0.01 * k,
                y + 0.025 * k
            ]).clipExtent([
                [
                    x + 0.029 * k + (0, _math.epsilon),
                    y - 0.089 * k + (0, _math.epsilon)
                ],
                [
                    x + 0.046 * k - (0, _math.epsilon),
                    y - 0.06 * k - (0, _math.epsilon)
                ]
            ]).stream(pointStream);
            return reset();
        };
        albersUk.fitExtent = function(extent, object) {
            return (0, _fit.fitExtent)(albersUk, extent, object);
        };
        albersUk.fitSize = function(size, object) {
            return (0, _fit.fitSize)(albersUk, size, object);
        };
        function reset() {
            cache = cacheStream = null;
            return albersUk;
        }
        albersUk.drawCompositionBorders = function(context) {
            /*var ul = main.invert([
      shetland.clipExtent()[0][0],
      shetland.clipExtent()[0][1]
    ]);
    var ur = main.invert([
      shetland.clipExtent()[1][0],
      shetland.clipExtent()[0][1]
    ]);
    var ld = main.invert([
      shetland.clipExtent()[1][0],
      shetland.clipExtent()[1][1]
    ]);
    var ll = main.invert([
      shetland.clipExtent()[0][0],
      shetland.clipExtent()[1][1]
    ]);

    console.log("ul = main([" + ul + "]);");
    console.log("ur = main([" + ur + "]);");
    console.log("ld = main([" + ld + "]);");
    console.log("ll = main([" + ll + "]);");

    console.log("context.moveTo(ul[0], ul[1]);");
    console.log("context.lineTo(ur[0], ur[1]);");
    console.log("context.lineTo(ld[0], ld[1]);");
    console.log("context.lineTo(ll[0], ll[1]);");
    console.log("context.closePath();");*/ var ul, ur, ld, ll;
            ul = main([
                -1.113205870242365,
                59.64920050773357
            ]);
            ur = main([
                0.807899092399606,
                59.59085836472269
            ]);
            ld = main([
                0.5778611961420386,
                57.93467822832577
            ]);
            ll = main([
                -1.25867782078448,
                57.99029450085142
            ]);
            context.moveTo(ul[0], ul[1]);
            context.lineTo(ur[0], ur[1]);
            context.lineTo(ld[0], ld[1]);
            context.lineTo(ll[0], ll[1]);
            context.closePath();
        };
        albersUk.getCompositionBorders = function() {
            var context = (0, _d3Path.path)();
            this.drawCompositionBorders(context);
            return context.toString();
        };
        return albersUk.scale(2800);
    });
var _math = require("./math");
var _d3Geo = require("d3-geo");
var _fit = require("./fit");
var _d3Path = require("d3-path");
function multiplex(streams) {
    var n = streams.length;
    return {
        point: function(x, y) {
            var i = -1;
            while(++i < n)streams[i].point(x, y);
        },
        sphere: function() {
            var i = -1;
            while(++i < n)streams[i].sphere();
        },
        lineStart: function() {
            var i = -1;
            while(++i < n)streams[i].lineStart();
        },
        lineEnd: function() {
            var i = -1;
            while(++i < n)streams[i].lineEnd();
        },
        polygonStart: function() {
            var i = -1;
            while(++i < n)streams[i].polygonStart();
        },
        polygonEnd: function() {
            var i = -1;
            while(++i < n)streams[i].polygonEnd();
        }
    };
}

},{"./math":"e6zZ7","d3-geo":"8r6MJ","./fit":"3PIRf","d3-path":"fDKwR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ciUQq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bbox", ()=>(0, _bboxJsDefault.default));
parcelHelpers.export(exports, "feature", ()=>(0, _featureJsDefault.default));
parcelHelpers.export(exports, "mesh", ()=>(0, _meshJsDefault.default));
parcelHelpers.export(exports, "meshArcs", ()=>(0, _meshJs.meshArcs));
parcelHelpers.export(exports, "merge", ()=>(0, _mergeJsDefault.default));
parcelHelpers.export(exports, "mergeArcs", ()=>(0, _mergeJs.mergeArcs));
parcelHelpers.export(exports, "neighbors", ()=>(0, _neighborsJsDefault.default));
parcelHelpers.export(exports, "quantize", ()=>(0, _quantizeJsDefault.default));
parcelHelpers.export(exports, "transform", ()=>(0, _transformJsDefault.default));
parcelHelpers.export(exports, "untransform", ()=>(0, _untransformJsDefault.default));
var _bboxJs = require("./bbox.js");
var _bboxJsDefault = parcelHelpers.interopDefault(_bboxJs);
var _featureJs = require("./feature.js");
var _featureJsDefault = parcelHelpers.interopDefault(_featureJs);
var _meshJs = require("./mesh.js");
var _meshJsDefault = parcelHelpers.interopDefault(_meshJs);
var _mergeJs = require("./merge.js");
var _mergeJsDefault = parcelHelpers.interopDefault(_mergeJs);
var _neighborsJs = require("./neighbors.js");
var _neighborsJsDefault = parcelHelpers.interopDefault(_neighborsJs);
var _quantizeJs = require("./quantize.js");
var _quantizeJsDefault = parcelHelpers.interopDefault(_quantizeJs);
var _transformJs = require("./transform.js");
var _transformJsDefault = parcelHelpers.interopDefault(_transformJs);
var _untransformJs = require("./untransform.js");
var _untransformJsDefault = parcelHelpers.interopDefault(_untransformJs);

},{"./bbox.js":"uhxVo","./feature.js":"hVcmB","./mesh.js":"7csN8","./merge.js":"gZehY","./neighbors.js":"ggIrQ","./quantize.js":"dZnMF","./transform.js":"hDrZC","./untransform.js":"ioj0t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"uhxVo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(topology) {
        var t = (0, _transformJsDefault.default)(topology.transform), key, x0 = Infinity, y0 = x0, x1 = -x0, y1 = -x0;
        function bboxPoint(p) {
            p = t(p);
            if (p[0] < x0) x0 = p[0];
            if (p[0] > x1) x1 = p[0];
            if (p[1] < y0) y0 = p[1];
            if (p[1] > y1) y1 = p[1];
        }
        function bboxGeometry(o) {
            switch(o.type){
                case "GeometryCollection":
                    o.geometries.forEach(bboxGeometry);
                    break;
                case "Point":
                    bboxPoint(o.coordinates);
                    break;
                case "MultiPoint":
                    o.coordinates.forEach(bboxPoint);
                    break;
            }
        }
        topology.arcs.forEach(function(arc) {
            var i = -1, n = arc.length, p;
            while(++i < n){
                p = t(arc[i], i);
                if (p[0] < x0) x0 = p[0];
                if (p[0] > x1) x1 = p[0];
                if (p[1] < y0) y0 = p[1];
                if (p[1] > y1) y1 = p[1];
            }
        });
        for(key in topology.objects)bboxGeometry(topology.objects[key]);
        return [
            x0,
            y0,
            x1,
            y1
        ];
    });
var _transformJs = require("./transform.js");
var _transformJsDefault = parcelHelpers.interopDefault(_transformJs);

},{"./transform.js":"hDrZC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hDrZC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(transform) {
        if (transform == null) return 0, _identityJsDefault.default;
        var x0, y0, kx = transform.scale[0], ky = transform.scale[1], dx = transform.translate[0], dy = transform.translate[1];
        return function(input, i) {
            if (!i) x0 = y0 = 0;
            var j = 2, n = input.length, output = new Array(n);
            output[0] = (x0 += input[0]) * kx + dx;
            output[1] = (y0 += input[1]) * ky + dy;
            while(j < n)output[j] = input[j], ++j;
            return output;
        };
    });
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);

},{"./identity.js":"2mfyf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2mfyf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(x) {
        return x;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hVcmB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(topology, o) {
        if (typeof o === "string") o = topology.objects[o];
        return o.type === "GeometryCollection" ? {
            type: "FeatureCollection",
            features: o.geometries.map(function(o) {
                return feature(topology, o);
            })
        } : feature(topology, o);
    });
parcelHelpers.export(exports, "object", ()=>object);
var _reverseJs = require("./reverse.js");
var _reverseJsDefault = parcelHelpers.interopDefault(_reverseJs);
var _transformJs = require("./transform.js");
var _transformJsDefault = parcelHelpers.interopDefault(_transformJs);
function feature(topology, o) {
    var id = o.id, bbox = o.bbox, properties = o.properties == null ? {} : o.properties, geometry = object(topology, o);
    return id == null && bbox == null ? {
        type: "Feature",
        properties: properties,
        geometry: geometry
    } : bbox == null ? {
        type: "Feature",
        id: id,
        properties: properties,
        geometry: geometry
    } : {
        type: "Feature",
        id: id,
        bbox: bbox,
        properties: properties,
        geometry: geometry
    };
}
function object(topology, o) {
    var transformPoint = (0, _transformJsDefault.default)(topology.transform), arcs = topology.arcs;
    function arc(i, points) {
        if (points.length) points.pop();
        for(var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k)points.push(transformPoint(a[k], k));
        if (i < 0) (0, _reverseJsDefault.default)(points, n);
    }
    function point(p) {
        return transformPoint(p);
    }
    function line(arcs) {
        var points = [];
        for(var i = 0, n = arcs.length; i < n; ++i)arc(arcs[i], points);
        if (points.length < 2) points.push(points[0]); // This should never happen per the specification.
        return points;
    }
    function ring(arcs) {
        var points = line(arcs);
        while(points.length < 4)points.push(points[0]); // This may happen if an arc has only two points.
        return points;
    }
    function polygon(arcs) {
        return arcs.map(ring);
    }
    function geometry(o) {
        var type = o.type, coordinates;
        switch(type){
            case "GeometryCollection":
                return {
                    type: type,
                    geometries: o.geometries.map(geometry)
                };
            case "Point":
                coordinates = point(o.coordinates);
                break;
            case "MultiPoint":
                coordinates = o.coordinates.map(point);
                break;
            case "LineString":
                coordinates = line(o.arcs);
                break;
            case "MultiLineString":
                coordinates = o.arcs.map(line);
                break;
            case "Polygon":
                coordinates = polygon(o.arcs);
                break;
            case "MultiPolygon":
                coordinates = o.arcs.map(polygon);
                break;
            default:
                return null;
        }
        return {
            type: type,
            coordinates: coordinates
        };
    }
    return geometry(o);
}

},{"./reverse.js":"eTq9J","./transform.js":"hDrZC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eTq9J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(array, n) {
        var t, j = array.length, i = j - n;
        while(i < --j)t = array[i], array[i++] = array[j], array[j] = t;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7csN8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(topology) {
        return (0, _featureJs.object)(topology, meshArcs.apply(this, arguments));
    });
parcelHelpers.export(exports, "meshArcs", ()=>meshArcs);
var _featureJs = require("./feature.js");
var _stitchJs = require("./stitch.js");
var _stitchJsDefault = parcelHelpers.interopDefault(_stitchJs);
function meshArcs(topology, object, filter) {
    var arcs, i, n;
    if (arguments.length > 1) arcs = extractArcs(topology, object, filter);
    else for(i = 0, arcs = new Array(n = topology.arcs.length); i < n; ++i)arcs[i] = i;
    return {
        type: "MultiLineString",
        arcs: (0, _stitchJsDefault.default)(topology, arcs)
    };
}
function extractArcs(topology, object, filter) {
    var arcs = [], geomsByArc = [], geom;
    function extract0(i) {
        var j = i < 0 ? ~i : i;
        (geomsByArc[j] || (geomsByArc[j] = [])).push({
            i: i,
            g: geom
        });
    }
    function extract1(arcs) {
        arcs.forEach(extract0);
    }
    function extract2(arcs) {
        arcs.forEach(extract1);
    }
    function extract3(arcs) {
        arcs.forEach(extract2);
    }
    function geometry(o) {
        switch(geom = o, o.type){
            case "GeometryCollection":
                o.geometries.forEach(geometry);
                break;
            case "LineString":
                extract1(o.arcs);
                break;
            case "MultiLineString":
            case "Polygon":
                extract2(o.arcs);
                break;
            case "MultiPolygon":
                extract3(o.arcs);
                break;
        }
    }
    geometry(object);
    geomsByArc.forEach(filter == null ? function(geoms) {
        arcs.push(geoms[0].i);
    } : function(geoms) {
        if (filter(geoms[0].g, geoms[geoms.length - 1].g)) arcs.push(geoms[0].i);
    });
    return arcs;
}

},{"./feature.js":"hVcmB","./stitch.js":"k5MKi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5MKi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(topology, arcs) {
        var stitchedArcs = {}, fragmentByStart = {}, fragmentByEnd = {}, fragments = [], emptyIndex = -1;
        // Stitch empty arcs first, since they may be subsumed by other arcs.
        arcs.forEach(function(i, j) {
            var arc = topology.arcs[i < 0 ? ~i : i], t;
            if (arc.length < 3 && !arc[1][0] && !arc[1][1]) t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;
        });
        arcs.forEach(function(i) {
            var e = ends(i), start = e[0], end = e[1], f, g;
            if (f = fragmentByEnd[start]) {
                delete fragmentByEnd[f.end];
                f.push(i);
                f.end = end;
                if (g = fragmentByStart[end]) {
                    delete fragmentByStart[g.start];
                    var fg = g === f ? f : f.concat(g);
                    fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;
                } else fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
            } else if (f = fragmentByStart[end]) {
                delete fragmentByStart[f.start];
                f.unshift(i);
                f.start = start;
                if (g = fragmentByEnd[start]) {
                    delete fragmentByEnd[g.end];
                    var gf = g === f ? f : g.concat(f);
                    fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;
                } else fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
            } else {
                f = [
                    i
                ];
                fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;
            }
        });
        function ends(i) {
            var arc = topology.arcs[i < 0 ? ~i : i], p0 = arc[0], p1;
            if (topology.transform) p1 = [
                0,
                0
            ], arc.forEach(function(dp) {
                p1[0] += dp[0], p1[1] += dp[1];
            });
            else p1 = arc[arc.length - 1];
            return i < 0 ? [
                p1,
                p0
            ] : [
                p0,
                p1
            ];
        }
        function flush(fragmentByEnd, fragmentByStart) {
            for(var k in fragmentByEnd){
                var f = fragmentByEnd[k];
                delete fragmentByStart[f.start];
                delete f.start;
                delete f.end;
                f.forEach(function(i) {
                    stitchedArcs[i < 0 ? ~i : i] = 1;
                });
                fragments.push(f);
            }
        }
        flush(fragmentByEnd, fragmentByStart);
        flush(fragmentByStart, fragmentByEnd);
        arcs.forEach(function(i) {
            if (!stitchedArcs[i < 0 ? ~i : i]) fragments.push([
                i
            ]);
        });
        return fragments;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gZehY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(topology) {
        return (0, _featureJs.object)(topology, mergeArcs.apply(this, arguments));
    });
parcelHelpers.export(exports, "mergeArcs", ()=>mergeArcs);
var _featureJs = require("./feature.js");
var _stitchJs = require("./stitch.js");
var _stitchJsDefault = parcelHelpers.interopDefault(_stitchJs);
function planarRingArea(ring) {
    var i = -1, n = ring.length, a, b = ring[n - 1], area = 0;
    while(++i < n)a = b, b = ring[i], area += a[0] * b[1] - a[1] * b[0];
    return Math.abs(area); // Note: doubled area!
}
function mergeArcs(topology, objects) {
    var polygonsByArc = {}, polygons = [], groups = [];
    objects.forEach(geometry);
    function geometry(o) {
        switch(o.type){
            case "GeometryCollection":
                o.geometries.forEach(geometry);
                break;
            case "Polygon":
                extract(o.arcs);
                break;
            case "MultiPolygon":
                o.arcs.forEach(extract);
                break;
        }
    }
    function extract(polygon) {
        polygon.forEach(function(ring) {
            ring.forEach(function(arc) {
                (polygonsByArc[arc = arc < 0 ? ~arc : arc] || (polygonsByArc[arc] = [])).push(polygon);
            });
        });
        polygons.push(polygon);
    }
    function area(ring) {
        return planarRingArea((0, _featureJs.object)(topology, {
            type: "Polygon",
            arcs: [
                ring
            ]
        }).coordinates[0]);
    }
    polygons.forEach(function(polygon) {
        if (!polygon._) {
            var group = [], neighbors = [
                polygon
            ];
            polygon._ = 1;
            groups.push(group);
            while(polygon = neighbors.pop()){
                group.push(polygon);
                polygon.forEach(function(ring) {
                    ring.forEach(function(arc) {
                        polygonsByArc[arc < 0 ? ~arc : arc].forEach(function(polygon) {
                            if (!polygon._) {
                                polygon._ = 1;
                                neighbors.push(polygon);
                            }
                        });
                    });
                });
            }
        }
    });
    polygons.forEach(function(polygon) {
        delete polygon._;
    });
    return {
        type: "MultiPolygon",
        arcs: groups.map(function(polygons) {
            var arcs = [], n;
            // Extract the exterior (unique) arcs.
            polygons.forEach(function(polygon) {
                polygon.forEach(function(ring) {
                    ring.forEach(function(arc) {
                        if (polygonsByArc[arc < 0 ? ~arc : arc].length < 2) arcs.push(arc);
                    });
                });
            });
            // Stitch the arcs into one or more rings.
            arcs = (0, _stitchJsDefault.default)(topology, arcs);
            // If more than one ring is returned,
            // at most one of these rings can be the exterior;
            // choose the one with the greatest absolute area.
            if ((n = arcs.length) > 1) {
                for(var i = 1, k = area(arcs[0]), ki, t; i < n; ++i)if ((ki = area(arcs[i])) > k) t = arcs[0], arcs[0] = arcs[i], arcs[i] = t, k = ki;
            }
            return arcs;
        }).filter(function(arcs) {
            return arcs.length > 0;
        })
    };
}

},{"./feature.js":"hVcmB","./stitch.js":"k5MKi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ggIrQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(objects) {
        var indexesByArc = {}, neighbors = objects.map(function() {
            return [];
        });
        function line(arcs, i) {
            arcs.forEach(function(a) {
                if (a < 0) a = ~a;
                var o = indexesByArc[a];
                if (o) o.push(i);
                else indexesByArc[a] = [
                    i
                ];
            });
        }
        function polygon(arcs, i) {
            arcs.forEach(function(arc) {
                line(arc, i);
            });
        }
        function geometry(o, i) {
            if (o.type === "GeometryCollection") o.geometries.forEach(function(o) {
                geometry(o, i);
            });
            else if (o.type in geometryType) geometryType[o.type](o.arcs, i);
        }
        var geometryType = {
            LineString: line,
            MultiLineString: polygon,
            Polygon: polygon,
            MultiPolygon: function(arcs, i) {
                arcs.forEach(function(arc) {
                    polygon(arc, i);
                });
            }
        };
        objects.forEach(geometry);
        for(var i in indexesByArc){
            for(var indexes = indexesByArc[i], m = indexes.length, j = 0; j < m; ++j)for(var k = j + 1; k < m; ++k){
                var ij = indexes[j], ik = indexes[k], n;
                if ((n = neighbors[ij])[i = (0, _bisectJsDefault.default)(n, ik)] !== ik) n.splice(i, 0, ik);
                if ((n = neighbors[ik])[i = (0, _bisectJsDefault.default)(n, ij)] !== ij) n.splice(i, 0, ij);
            }
        }
        return neighbors;
    });
var _bisectJs = require("./bisect.js");
var _bisectJsDefault = parcelHelpers.interopDefault(_bisectJs);

},{"./bisect.js":"dgF2n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dgF2n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, x) {
        var lo = 0, hi = a.length;
        while(lo < hi){
            var mid = lo + hi >>> 1;
            if (a[mid] < x) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dZnMF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(topology, transform) {
        if (topology.transform) throw new Error("already quantized");
        if (!transform || !transform.scale) {
            if (!((n = Math.floor(transform)) >= 2)) throw new Error("n must be ≥2");
            box = topology.bbox || (0, _bboxJsDefault.default)(topology);
            var x0 = box[0], y0 = box[1], x1 = box[2], y1 = box[3], n;
            transform = {
                scale: [
                    x1 - x0 ? (x1 - x0) / (n - 1) : 1,
                    y1 - y0 ? (y1 - y0) / (n - 1) : 1
                ],
                translate: [
                    x0,
                    y0
                ]
            };
        } else box = topology.bbox;
        var t = (0, _untransformJsDefault.default)(transform), box, key, inputs = topology.objects, outputs = {};
        function quantizePoint(point) {
            return t(point);
        }
        function quantizeGeometry(input) {
            var output;
            switch(input.type){
                case "GeometryCollection":
                    output = {
                        type: "GeometryCollection",
                        geometries: input.geometries.map(quantizeGeometry)
                    };
                    break;
                case "Point":
                    output = {
                        type: "Point",
                        coordinates: quantizePoint(input.coordinates)
                    };
                    break;
                case "MultiPoint":
                    output = {
                        type: "MultiPoint",
                        coordinates: input.coordinates.map(quantizePoint)
                    };
                    break;
                default:
                    return input;
            }
            if (input.id != null) output.id = input.id;
            if (input.bbox != null) output.bbox = input.bbox;
            if (input.properties != null) output.properties = input.properties;
            return output;
        }
        function quantizeArc(input) {
            var i = 0, j = 1, n = input.length, p, output = new Array(n); // pessimistic
            output[0] = t(input[0], 0);
            while(++i < n)if ((p = t(input[i], i))[0] || p[1]) output[j++] = p; // non-coincident points
            if (j === 1) output[j++] = [
                0,
                0
            ]; // an arc must have at least two points
            output.length = j;
            return output;
        }
        for(key in inputs)outputs[key] = quantizeGeometry(inputs[key]);
        return {
            type: "Topology",
            bbox: box,
            transform: transform,
            objects: outputs,
            arcs: topology.arcs.map(quantizeArc)
        };
    });
var _bboxJs = require("./bbox.js");
var _bboxJsDefault = parcelHelpers.interopDefault(_bboxJs);
var _untransformJs = require("./untransform.js");
var _untransformJsDefault = parcelHelpers.interopDefault(_untransformJs);

},{"./bbox.js":"uhxVo","./untransform.js":"ioj0t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ioj0t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(transform) {
        if (transform == null) return 0, _identityJsDefault.default;
        var x0, y0, kx = transform.scale[0], ky = transform.scale[1], dx = transform.translate[0], dy = transform.translate[1];
        return function(input, i) {
            if (!i) x0 = y0 = 0;
            var j = 2, n = input.length, output = new Array(n), x1 = Math.round((input[0] - dx) / kx), y1 = Math.round((input[1] - dy) / ky);
            output[0] = x1 - x0, x0 = x1;
            output[1] = y1 - y0, y0 = y1;
            while(j < n)output[j] = input[j], ++j;
            return output;
        };
    });
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);

},{"./identity.js":"2mfyf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "percent", ()=>percent);
parcelHelpers.export(exports, "formatDate", ()=>formatDate);
parcelHelpers.export(exports, "getProp", ()=>getProp);
const percent = (num)=>num?.toLocaleString(undefined, {
        style: "percent"
    });
const formatDate = (date, opts = {})=>date?.toLocaleDateString(undefined, opts);
const getProp = (...props)=>(obj)=>props.reduce((objNode, prop)=>objNode && objNode[prop] ? objNode[prop] : null, obj);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"khRpZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sunBtn", ()=>sunBtn);
parcelHelpers.export(exports, "moonBtn", ()=>moonBtn);
parcelHelpers.export(exports, "infoBtn", ()=>infoBtn);
parcelHelpers.export(exports, "playBtn", ()=>playBtn);
parcelHelpers.export(exports, "pauseBtn", ()=>pauseBtn);
parcelHelpers.export(exports, "stopBtn", ()=>stopBtn);
const sunBtn = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
const moonBtn = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
const infoBtn = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" stroke="currentColor"><path d="m80 15c-35.88 0-65 29.12-65 65s29.12 65 65 65 65-29.12 65-65-29.12-65-65-65zm0 10c30.36 0 55 24.64 55 55s-24.64 55-55 55-55-24.64-55-55 24.64-55 55-55z"/><path d="m57.373 18.231a9.3834 9.1153 0 1 1 -18.767 0 9.3834 9.1153 0 1 1 18.767 0z" transform="matrix(1.1989 0 0 1.2342 21.214 28.75)"/><path d="m90.665 110.96c-0.069 2.73 1.211 3.5 4.327 3.82l5.008 0.1v5.12h-39.073v-5.12l5.503-0.1c3.291-0.1 4.082-1.38 4.327-3.82v-30.813c0.035-4.879-6.296-4.113-10.757-3.968v-5.074l30.665-1.105"/></svg>';
const playBtn = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>';
const pauseBtn = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>';
const stopBtn = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16"></rect></svg>';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FEATURE_ID", ()=>FEATURE_ID);
parcelHelpers.export(exports, "FEATURE_VALUES", ()=>FEATURE_VALUES);
parcelHelpers.export(exports, "FEATURE_DESC", ()=>FEATURE_DESC);
parcelHelpers.export(exports, "FEATURE_CODE", ()=>FEATURE_CODE);
parcelHelpers.export(exports, "URLS", ()=>URLS);
var _anTopoJson = require("url:../../static/AN.topo.json");
var _anTopoJsonDefault = parcelHelpers.interopDefault(_anTopoJson);
var _asTopoJson = require("url:../../static/AS.topo.json");
var _asTopoJsonDefault = parcelHelpers.interopDefault(_asTopoJson);
var _arTopoJson = require("url:../../static/AR.topo.json");
var _arTopoJsonDefault = parcelHelpers.interopDefault(_arTopoJson);
var _cnTopoJson = require("url:../../static/CN.topo.json");
var _cnTopoJsonDefault = parcelHelpers.interopDefault(_cnTopoJson);
var _cbTopoJson = require("url:../../static/CB.topo.json");
var _cbTopoJsonDefault = parcelHelpers.interopDefault(_cbTopoJson);
var _clTopoJson = require("url:../../static/CL.topo.json");
var _clTopoJsonDefault = parcelHelpers.interopDefault(_clTopoJson);
var _cmTopoJson = require("url:../../static/CM.topo.json");
var _cmTopoJsonDefault = parcelHelpers.interopDefault(_cmTopoJson);
var _ctTopoJson = require("url:../../static/CT.topo.json");
var _ctTopoJsonDefault = parcelHelpers.interopDefault(_ctTopoJson);
var _mdTopoJson = require("url:../../static/MD.topo.json");
var _mdTopoJsonDefault = parcelHelpers.interopDefault(_mdTopoJson);
var _vcTopoJson = require("url:../../static/VC.topo.json");
var _vcTopoJsonDefault = parcelHelpers.interopDefault(_vcTopoJson);
var _pvTopoJson = require("url:../../static/PV.topo.json");
var _pvTopoJsonDefault = parcelHelpers.interopDefault(_pvTopoJson);
var _exTopoJson = require("url:../../static/EX.topo.json");
var _exTopoJsonDefault = parcelHelpers.interopDefault(_exTopoJson);
var _gaTopoJson = require("url:../../static/GA.topo.json");
var _gaTopoJsonDefault = parcelHelpers.interopDefault(_gaTopoJson);
var _ibTopoJson = require("url:../../static/IB.topo.json");
var _ibTopoJsonDefault = parcelHelpers.interopDefault(_ibTopoJson);
var _riTopoJson = require("url:../../static/RI.topo.json");
var _riTopoJsonDefault = parcelHelpers.interopDefault(_riTopoJson);
var _ncTopoJson = require("url:../../static/NC.topo.json");
var _ncTopoJsonDefault = parcelHelpers.interopDefault(_ncTopoJson);
var _mcTopoJson = require("url:../../static/MC.topo.json");
var _mcTopoJsonDefault = parcelHelpers.interopDefault(_mcTopoJson);
var _ceTopoJson = require("url:../../static/CE.topo.json");
var _ceTopoJsonDefault = parcelHelpers.interopDefault(_ceTopoJson);
var _mlTopoJson = require("url:../../static/ML.topo.json");
var _mlTopoJsonDefault = parcelHelpers.interopDefault(_mlTopoJson);
var _esCcaaTopoJson = require("url:../../static/ES.ccaa.topo.json");
var _esCcaaTopoJsonDefault = parcelHelpers.interopDefault(_esCcaaTopoJson);
var _esProvTopoJson = require("url:../../static/ES.prov.topo.json");
var _esProvTopoJsonDefault = parcelHelpers.interopDefault(_esProvTopoJson);
const FEATURE_ID = "id";
const FEATURE_VALUES = "values";
const FEATURE_DESC = "name";
const FEATURE_CODE = "prov";
const URLS = [
    [
        {
            url: (0, _esCcaaTopoJsonDefault.default)
        },
        {
            url: (0, _esProvTopoJsonDefault.default)
        }
    ],
    [
        {
            url: (0, _anTopoJsonDefault.default),
            code: "ES-AN"
        },
        {
            url: (0, _asTopoJsonDefault.default),
            code: "ES-AS"
        },
        {
            url: (0, _arTopoJsonDefault.default),
            code: "ES-AR"
        },
        {
            url: (0, _cnTopoJsonDefault.default),
            code: "ES-CN"
        },
        {
            url: (0, _cbTopoJsonDefault.default),
            code: "ES-CB"
        },
        {
            url: (0, _clTopoJsonDefault.default),
            code: "ES-CL"
        },
        {
            url: (0, _cmTopoJsonDefault.default),
            code: "ES-CM"
        },
        {
            url: (0, _ctTopoJsonDefault.default),
            code: "ES-CT"
        },
        {
            url: (0, _mdTopoJsonDefault.default),
            code: "ES-MD"
        },
        {
            url: (0, _vcTopoJsonDefault.default),
            code: "ES-VC"
        },
        {
            url: (0, _pvTopoJsonDefault.default),
            code: "ES-PV"
        },
        {
            url: (0, _exTopoJsonDefault.default),
            code: "ES-EX"
        },
        {
            url: (0, _gaTopoJsonDefault.default),
            code: "ES-GA"
        },
        {
            url: (0, _ibTopoJsonDefault.default),
            code: "ES-IB"
        },
        {
            url: (0, _riTopoJsonDefault.default),
            code: "ES-RI"
        },
        {
            url: (0, _ncTopoJsonDefault.default),
            code: "ES-NC"
        },
        {
            url: (0, _mcTopoJsonDefault.default),
            code: "ES-MC"
        },
        {
            url: (0, _ceTopoJsonDefault.default),
            code: "ES-CE"
        },
        {
            url: (0, _mlTopoJsonDefault.default),
            code: "ES-ML"
        }
    ]
];

},{"url:../../static/AN.topo.json":"8sMtU","url:../../static/AS.topo.json":"fibMc","url:../../static/AR.topo.json":"kSKRw","url:../../static/CN.topo.json":"60gl0","url:../../static/CB.topo.json":"fJ7Jv","url:../../static/CL.topo.json":"5UlUg","url:../../static/CM.topo.json":"e3V6C","url:../../static/CT.topo.json":"c7cyb","url:../../static/MD.topo.json":"5fehT","url:../../static/VC.topo.json":"lBGtP","url:../../static/PV.topo.json":"471i8","url:../../static/EX.topo.json":"agX2D","url:../../static/GA.topo.json":"7JQh0","url:../../static/IB.topo.json":"fUCO7","url:../../static/RI.topo.json":"fwKX6","url:../../static/NC.topo.json":"7SstK","url:../../static/MC.topo.json":"kPNBA","url:../../static/CE.topo.json":"gOzWJ","url:../../static/ML.topo.json":"LS7UT","url:../../static/ES.ccaa.topo.json":"4WN78","url:../../static/ES.prov.topo.json":"jpssP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8sMtU":[function(require,module,exports) {
module.exports = require("3de1511fa2cb68c0").getBundleURL("g05j8") + "AN.topo.3aa84933.json" + "?" + Date.now();

},{"3de1511fa2cb68c0":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"fibMc":[function(require,module,exports) {
module.exports = require("f3520c0bafc1d704").getBundleURL("g05j8") + "AS.topo.295cfef6.json" + "?" + Date.now();

},{"f3520c0bafc1d704":"lgJ39"}],"kSKRw":[function(require,module,exports) {
module.exports = require("9591149a624b1e7b").getBundleURL("g05j8") + "AR.topo.e9bcfbac.json" + "?" + Date.now();

},{"9591149a624b1e7b":"lgJ39"}],"60gl0":[function(require,module,exports) {
module.exports = require("1b06eb5cb9830b8e").getBundleURL("g05j8") + "CN.topo.52937b1b.json" + "?" + Date.now();

},{"1b06eb5cb9830b8e":"lgJ39"}],"fJ7Jv":[function(require,module,exports) {
module.exports = require("9c8527df926bb315").getBundleURL("g05j8") + "CB.topo.f3247de9.json" + "?" + Date.now();

},{"9c8527df926bb315":"lgJ39"}],"5UlUg":[function(require,module,exports) {
module.exports = require("885900232471b856").getBundleURL("g05j8") + "CL.topo.140d9706.json" + "?" + Date.now();

},{"885900232471b856":"lgJ39"}],"e3V6C":[function(require,module,exports) {
module.exports = require("da62fc9051e4b4fa").getBundleURL("g05j8") + "CM.topo.fe712f41.json" + "?" + Date.now();

},{"da62fc9051e4b4fa":"lgJ39"}],"c7cyb":[function(require,module,exports) {
module.exports = require("719de8a5f38d165e").getBundleURL("g05j8") + "CT.topo.e2bcae28.json" + "?" + Date.now();

},{"719de8a5f38d165e":"lgJ39"}],"5fehT":[function(require,module,exports) {
module.exports = require("eb7e9b49b8fca39e").getBundleURL("g05j8") + "MD.topo.16caa3c9.json" + "?" + Date.now();

},{"eb7e9b49b8fca39e":"lgJ39"}],"lBGtP":[function(require,module,exports) {
module.exports = require("baf42ea865ba6e33").getBundleURL("g05j8") + "VC.topo.2a83bcdc.json" + "?" + Date.now();

},{"baf42ea865ba6e33":"lgJ39"}],"471i8":[function(require,module,exports) {
module.exports = require("bb408d5d98629ee0").getBundleURL("g05j8") + "PV.topo.ef6ab395.json" + "?" + Date.now();

},{"bb408d5d98629ee0":"lgJ39"}],"agX2D":[function(require,module,exports) {
module.exports = require("49478aec11b6ee23").getBundleURL("g05j8") + "EX.topo.fe695bf0.json" + "?" + Date.now();

},{"49478aec11b6ee23":"lgJ39"}],"7JQh0":[function(require,module,exports) {
module.exports = require("d7e82d21371d1f9d").getBundleURL("g05j8") + "GA.topo.6d72df7f.json" + "?" + Date.now();

},{"d7e82d21371d1f9d":"lgJ39"}],"fUCO7":[function(require,module,exports) {
module.exports = require("2de6303dd87a674c").getBundleURL("g05j8") + "IB.topo.d1b6c026.json" + "?" + Date.now();

},{"2de6303dd87a674c":"lgJ39"}],"fwKX6":[function(require,module,exports) {
module.exports = require("67b796ed52164668").getBundleURL("g05j8") + "RI.topo.bdfdfec1.json" + "?" + Date.now();

},{"67b796ed52164668":"lgJ39"}],"7SstK":[function(require,module,exports) {
module.exports = require("f517981a3cfe817d").getBundleURL("g05j8") + "NC.topo.6ab3fbd2.json" + "?" + Date.now();

},{"f517981a3cfe817d":"lgJ39"}],"kPNBA":[function(require,module,exports) {
module.exports = require("b6293db5cfc9d768").getBundleURL("g05j8") + "MC.topo.4a29fbac.json" + "?" + Date.now();

},{"b6293db5cfc9d768":"lgJ39"}],"gOzWJ":[function(require,module,exports) {
module.exports = require("5dd815f7c032300c").getBundleURL("g05j8") + "CE.topo.3a85b3b1.json" + "?" + Date.now();

},{"5dd815f7c032300c":"lgJ39"}],"LS7UT":[function(require,module,exports) {
module.exports = require("89762581b524b2b2").getBundleURL("g05j8") + "ML.topo.2c63d5d8.json" + "?" + Date.now();

},{"89762581b524b2b2":"lgJ39"}],"4WN78":[function(require,module,exports) {
module.exports = require("fe3624fa355bbe07").getBundleURL("g05j8") + "ES.ccaa.topo.90587cb7.json" + "?" + Date.now();

},{"fe3624fa355bbe07":"lgJ39"}],"jpssP":[function(require,module,exports) {
module.exports = require("5927af1f491aa0ad").getBundleURL("g05j8") + "ES.prov.topo.e581f471.json" + "?" + Date.now();

},{"5927af1f491aa0ad":"lgJ39"}],"ieevi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpers = require("./helpers");
class Legend {
    constructor(node, { range, colorScale }){
        this.container = node.append("div").attr("class", "legend card").on("click", (e)=>this.onClick(e));
        this.scale = colorScale;
        this.range = range;
    }
    render() {
        this.container.selectAll(".legend-range").data(this.range).join((enter)=>{
            const legendRanges = enter.append("div").attr("class", "legend-range");
            legendRanges.append("i").attr("class", "legend-range-square").style("background-color", (d)=>d);
            legendRanges.append("span").text((d)=>{
                const [start, end] = this.scale.invertExtent(d);
                return `${(0, _helpers.percent)(start)} - ${(0, _helpers.percent)(end)}`;
            });
        }, (update)=>update.selectAll("span").text((d)=>{
                const [start, end] = this.scale.invertExtent(d);
                return `${(0, _helpers.percent)(start)} - ${(0, _helpers.percent)(end)}`;
            }));
    }
    onClick() {
        this.container.classed("hidden", !this.container.classed("hidden"));
    }
}
exports.default = Legend;

},{"./helpers":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Ohk6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Selection = require("d3-selection");
var _icons = require("./icons");
class Controls {
    constructor(node, { play, stop }){
        node.append("div").attr("class", "controls card").selectAll("button").data([
            "stop",
            "play"
        ]).join("button").attr("id", (d)=>d).attr("class", "control-button").on("click", (e)=>this.onButtonClick(e)).html((d)=>d === "stop" ? (0, _icons.stopBtn) : (0, _icons.playBtn));
        this.onPlay = play;
        this.onStop = stop;
    }
    onButtonClick({ target }) {
        (0, _d3Selection.select)("#play").html((0, _icons.playBtn));
        if (target.id === "play") {
            (0, _d3Selection.select)(target).html((0, _icons.pauseBtn));
            this.onPlay();
        } else if (target.id === "stop") this.onStop();
    }
    stop() {
        (0, _d3Selection.select)("#play").html((0, _icons.playBtn));
    }
}
exports.default = Controls;

},{"./icons":"khRpZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","d3-selection":"gn9gd"}],"gn9gd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "create", ()=>(0, _createJsDefault.default));
parcelHelpers.export(exports, "creator", ()=>(0, _creatorJsDefault.default));
parcelHelpers.export(exports, "local", ()=>(0, _localJsDefault.default));
parcelHelpers.export(exports, "matcher", ()=>(0, _matcherJsDefault.default));
parcelHelpers.export(exports, "namespace", ()=>(0, _namespaceJsDefault.default));
parcelHelpers.export(exports, "namespaces", ()=>(0, _namespacesJsDefault.default));
parcelHelpers.export(exports, "pointer", ()=>(0, _pointerJsDefault.default));
parcelHelpers.export(exports, "pointers", ()=>(0, _pointersJsDefault.default));
parcelHelpers.export(exports, "select", ()=>(0, _selectJsDefault.default));
parcelHelpers.export(exports, "selectAll", ()=>(0, _selectAllJsDefault.default));
parcelHelpers.export(exports, "selection", ()=>(0, _indexJsDefault.default));
parcelHelpers.export(exports, "selector", ()=>(0, _selectorJsDefault.default));
parcelHelpers.export(exports, "selectorAll", ()=>(0, _selectorAllJsDefault.default));
parcelHelpers.export(exports, "style", ()=>(0, _styleJs.styleValue));
parcelHelpers.export(exports, "window", ()=>(0, _windowJsDefault.default));
var _createJs = require("./create.js");
var _createJsDefault = parcelHelpers.interopDefault(_createJs);
var _creatorJs = require("./creator.js");
var _creatorJsDefault = parcelHelpers.interopDefault(_creatorJs);
var _localJs = require("./local.js");
var _localJsDefault = parcelHelpers.interopDefault(_localJs);
var _matcherJs = require("./matcher.js");
var _matcherJsDefault = parcelHelpers.interopDefault(_matcherJs);
var _namespaceJs = require("./namespace.js");
var _namespaceJsDefault = parcelHelpers.interopDefault(_namespaceJs);
var _namespacesJs = require("./namespaces.js");
var _namespacesJsDefault = parcelHelpers.interopDefault(_namespacesJs);
var _pointerJs = require("./pointer.js");
var _pointerJsDefault = parcelHelpers.interopDefault(_pointerJs);
var _pointersJs = require("./pointers.js");
var _pointersJsDefault = parcelHelpers.interopDefault(_pointersJs);
var _selectJs = require("./select.js");
var _selectJsDefault = parcelHelpers.interopDefault(_selectJs);
var _selectAllJs = require("./selectAll.js");
var _selectAllJsDefault = parcelHelpers.interopDefault(_selectAllJs);
var _indexJs = require("./selection/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _selectorJs = require("./selector.js");
var _selectorJsDefault = parcelHelpers.interopDefault(_selectorJs);
var _selectorAllJs = require("./selectorAll.js");
var _selectorAllJsDefault = parcelHelpers.interopDefault(_selectorAllJs);
var _styleJs = require("./selection/style.js");
var _windowJs = require("./window.js");
var _windowJsDefault = parcelHelpers.interopDefault(_windowJs);

},{"./create.js":"e1dzW","./creator.js":"a6062","./local.js":"hcwa6","./matcher.js":"hovSo","./namespace.js":"a23xG","./namespaces.js":"dDfgS","./pointer.js":"bs1Eh","./pointers.js":"fqMp7","./select.js":"4pqgd","./selectAll.js":"eAYBy","./selection/index.js":"fK3Dl","./selector.js":"7VF9r","./selectorAll.js":"2SKTE","./selection/style.js":"GUHZ1","./window.js":"6di7h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e1dzW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name) {
        return (0, _selectJsDefault.default)((0, _creatorJsDefault.default)(name).call(document.documentElement));
    });
var _creatorJs = require("./creator.js");
var _creatorJsDefault = parcelHelpers.interopDefault(_creatorJs);
var _selectJs = require("./select.js");
var _selectJsDefault = parcelHelpers.interopDefault(_selectJs);

},{"./creator.js":"a6062","./select.js":"4pqgd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a6062":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name) {
        var fullname = (0, _namespaceJsDefault.default)(name);
        return (fullname.local ? creatorFixed : creatorInherit)(fullname);
    });
var _namespaceJs = require("./namespace.js");
var _namespaceJsDefault = parcelHelpers.interopDefault(_namespaceJs);
var _namespacesJs = require("./namespaces.js");
function creatorInherit(name) {
    return function() {
        var document = this.ownerDocument, uri = this.namespaceURI;
        return uri === (0, _namespacesJs.xhtml) && document.documentElement.namespaceURI === (0, _namespacesJs.xhtml) ? document.createElement(name) : document.createElementNS(uri, name);
    };
}
function creatorFixed(fullname) {
    return function() {
        return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
}

},{"./namespace.js":"a23xG","./namespaces.js":"dDfgS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a23xG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name) {
        var prefix = name += "", i = prefix.indexOf(":");
        if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
        return (0, _namespacesJsDefault.default).hasOwnProperty(prefix) ? {
            space: (0, _namespacesJsDefault.default)[prefix],
            local: name
        } : name; // eslint-disable-line no-prototype-builtins
    });
var _namespacesJs = require("./namespaces.js");
var _namespacesJsDefault = parcelHelpers.interopDefault(_namespacesJs);

},{"./namespaces.js":"dDfgS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dDfgS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "xhtml", ()=>xhtml);
var xhtml = "http://www.w3.org/1999/xhtml";
exports.default = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4pqgd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(selector) {
        return typeof selector === "string" ? new (0, _indexJs.Selection)([
            [
                document.querySelector(selector)
            ]
        ], [
            document.documentElement
        ]) : new (0, _indexJs.Selection)([
            [
                selector
            ]
        ], (0, _indexJs.root));
    });
var _indexJs = require("./selection/index.js");

},{"./selection/index.js":"fK3Dl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fK3Dl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "root", ()=>root);
parcelHelpers.export(exports, "Selection", ()=>Selection);
var _selectJs = require("./select.js");
var _selectJsDefault = parcelHelpers.interopDefault(_selectJs);
var _selectAllJs = require("./selectAll.js");
var _selectAllJsDefault = parcelHelpers.interopDefault(_selectAllJs);
var _selectChildJs = require("./selectChild.js");
var _selectChildJsDefault = parcelHelpers.interopDefault(_selectChildJs);
var _selectChildrenJs = require("./selectChildren.js");
var _selectChildrenJsDefault = parcelHelpers.interopDefault(_selectChildrenJs);
var _filterJs = require("./filter.js");
var _filterJsDefault = parcelHelpers.interopDefault(_filterJs);
var _dataJs = require("./data.js");
var _dataJsDefault = parcelHelpers.interopDefault(_dataJs);
var _enterJs = require("./enter.js");
var _enterJsDefault = parcelHelpers.interopDefault(_enterJs);
var _exitJs = require("./exit.js");
var _exitJsDefault = parcelHelpers.interopDefault(_exitJs);
var _joinJs = require("./join.js");
var _joinJsDefault = parcelHelpers.interopDefault(_joinJs);
var _mergeJs = require("./merge.js");
var _mergeJsDefault = parcelHelpers.interopDefault(_mergeJs);
var _orderJs = require("./order.js");
var _orderJsDefault = parcelHelpers.interopDefault(_orderJs);
var _sortJs = require("./sort.js");
var _sortJsDefault = parcelHelpers.interopDefault(_sortJs);
var _callJs = require("./call.js");
var _callJsDefault = parcelHelpers.interopDefault(_callJs);
var _nodesJs = require("./nodes.js");
var _nodesJsDefault = parcelHelpers.interopDefault(_nodesJs);
var _nodeJs = require("./node.js");
var _nodeJsDefault = parcelHelpers.interopDefault(_nodeJs);
var _sizeJs = require("./size.js");
var _sizeJsDefault = parcelHelpers.interopDefault(_sizeJs);
var _emptyJs = require("./empty.js");
var _emptyJsDefault = parcelHelpers.interopDefault(_emptyJs);
var _eachJs = require("./each.js");
var _eachJsDefault = parcelHelpers.interopDefault(_eachJs);
var _attrJs = require("./attr.js");
var _attrJsDefault = parcelHelpers.interopDefault(_attrJs);
var _styleJs = require("./style.js");
var _styleJsDefault = parcelHelpers.interopDefault(_styleJs);
var _propertyJs = require("./property.js");
var _propertyJsDefault = parcelHelpers.interopDefault(_propertyJs);
var _classedJs = require("./classed.js");
var _classedJsDefault = parcelHelpers.interopDefault(_classedJs);
var _textJs = require("./text.js");
var _textJsDefault = parcelHelpers.interopDefault(_textJs);
var _htmlJs = require("./html.js");
var _htmlJsDefault = parcelHelpers.interopDefault(_htmlJs);
var _raiseJs = require("./raise.js");
var _raiseJsDefault = parcelHelpers.interopDefault(_raiseJs);
var _lowerJs = require("./lower.js");
var _lowerJsDefault = parcelHelpers.interopDefault(_lowerJs);
var _appendJs = require("./append.js");
var _appendJsDefault = parcelHelpers.interopDefault(_appendJs);
var _insertJs = require("./insert.js");
var _insertJsDefault = parcelHelpers.interopDefault(_insertJs);
var _removeJs = require("./remove.js");
var _removeJsDefault = parcelHelpers.interopDefault(_removeJs);
var _cloneJs = require("./clone.js");
var _cloneJsDefault = parcelHelpers.interopDefault(_cloneJs);
var _datumJs = require("./datum.js");
var _datumJsDefault = parcelHelpers.interopDefault(_datumJs);
var _onJs = require("./on.js");
var _onJsDefault = parcelHelpers.interopDefault(_onJs);
var _dispatchJs = require("./dispatch.js");
var _dispatchJsDefault = parcelHelpers.interopDefault(_dispatchJs);
var _iteratorJs = require("./iterator.js");
var _iteratorJsDefault = parcelHelpers.interopDefault(_iteratorJs);
var root = [
    null
];
function Selection(groups, parents) {
    this._groups = groups;
    this._parents = parents;
}
function selection() {
    return new Selection([
        [
            document.documentElement
        ]
    ], root);
}
function selection_selection() {
    return this;
}
Selection.prototype = selection.prototype = {
    constructor: Selection,
    select: (0, _selectJsDefault.default),
    selectAll: (0, _selectAllJsDefault.default),
    selectChild: (0, _selectChildJsDefault.default),
    selectChildren: (0, _selectChildrenJsDefault.default),
    filter: (0, _filterJsDefault.default),
    data: (0, _dataJsDefault.default),
    enter: (0, _enterJsDefault.default),
    exit: (0, _exitJsDefault.default),
    join: (0, _joinJsDefault.default),
    merge: (0, _mergeJsDefault.default),
    selection: selection_selection,
    order: (0, _orderJsDefault.default),
    sort: (0, _sortJsDefault.default),
    call: (0, _callJsDefault.default),
    nodes: (0, _nodesJsDefault.default),
    node: (0, _nodeJsDefault.default),
    size: (0, _sizeJsDefault.default),
    empty: (0, _emptyJsDefault.default),
    each: (0, _eachJsDefault.default),
    attr: (0, _attrJsDefault.default),
    style: (0, _styleJsDefault.default),
    property: (0, _propertyJsDefault.default),
    classed: (0, _classedJsDefault.default),
    text: (0, _textJsDefault.default),
    html: (0, _htmlJsDefault.default),
    raise: (0, _raiseJsDefault.default),
    lower: (0, _lowerJsDefault.default),
    append: (0, _appendJsDefault.default),
    insert: (0, _insertJsDefault.default),
    remove: (0, _removeJsDefault.default),
    clone: (0, _cloneJsDefault.default),
    datum: (0, _datumJsDefault.default),
    on: (0, _onJsDefault.default),
    dispatch: (0, _dispatchJsDefault.default),
    [Symbol.iterator]: (0, _iteratorJsDefault.default)
};
exports.default = selection;

},{"./select.js":"aK9lB","./selectAll.js":"8U28K","./selectChild.js":"hBGg0","./selectChildren.js":"hnJ1V","./filter.js":"i1GfU","./data.js":"jIP7J","./enter.js":"27tIy","./exit.js":"6ubri","./join.js":"g7QcH","./merge.js":"fXm9Z","./order.js":"cmxvd","./sort.js":"4UUI2","./call.js":"bsAaT","./nodes.js":"jjFrN","./node.js":"gPGkg","./size.js":"coOTw","./empty.js":"8ybxO","./each.js":"9Y1px","./attr.js":"k8cb1","./style.js":"GUHZ1","./property.js":"f4q4V","./classed.js":"jd3ig","./text.js":"dVAdB","./html.js":"egFAg","./raise.js":"4Xi1m","./lower.js":"l1I8n","./append.js":"1GNgv","./insert.js":"3Xphl","./remove.js":"iNsSa","./clone.js":"jfNc9","./datum.js":"lMowl","./on.js":"ktlxw","./dispatch.js":"eZMTj","./iterator.js":"32Fgr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aK9lB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(select) {
        if (typeof select !== "function") select = (0, _selectorJsDefault.default)(select);
        for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
            for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i)if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
                if ("__data__" in node) subnode.__data__ = node.__data__;
                subgroup[i] = subnode;
            }
        }
        return new (0, _indexJs.Selection)(subgroups, this._parents);
    });
var _indexJs = require("./index.js");
var _selectorJs = require("../selector.js");
var _selectorJsDefault = parcelHelpers.interopDefault(_selectorJs);

},{"./index.js":"fK3Dl","../selector.js":"7VF9r","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7VF9r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(selector) {
        return selector == null ? none : function() {
            return this.querySelector(selector);
        };
    });
function none() {}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8U28K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(select) {
        if (typeof select === "function") select = arrayAll(select);
        else select = (0, _selectorAllJsDefault.default)(select);
        for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
            for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
                subgroups.push(select.call(node, node.__data__, i, group));
                parents.push(node);
            }
        }
        return new (0, _indexJs.Selection)(subgroups, parents);
    });
var _indexJs = require("./index.js");
var _arrayJs = require("../array.js");
var _arrayJsDefault = parcelHelpers.interopDefault(_arrayJs);
var _selectorAllJs = require("../selectorAll.js");
var _selectorAllJsDefault = parcelHelpers.interopDefault(_selectorAllJs);
function arrayAll(select) {
    return function() {
        return (0, _arrayJsDefault.default)(select.apply(this, arguments));
    };
}

},{"./index.js":"fK3Dl","../array.js":"9WejU","../selectorAll.js":"2SKTE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9WejU":[function(require,module,exports) {
// Given something array like (or null), returns something that is strictly an
// array. This is used to ensure that array-like objects passed to d3.selectAll
// or selection.selectAll are converted into proper arrays when creating a
// selection; we don’t ever want to create a selection backed by a live
// HTMLCollection or NodeList. However, note that selection.selectAll will use a
// static NodeList as a group, since it safely derived from querySelectorAll.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>array);
function array(x) {
    return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2SKTE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(selector) {
        return selector == null ? empty : function() {
            return this.querySelectorAll(selector);
        };
    });
function empty() {
    return [];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hBGg0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(match) {
        return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : (0, _matcherJs.childMatcher)(match)));
    });
var _matcherJs = require("../matcher.js");
var find = Array.prototype.find;
function childFind(match) {
    return function() {
        return find.call(this.children, match);
    };
}
function childFirst() {
    return this.firstElementChild;
}

},{"../matcher.js":"hovSo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hovSo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(selector) {
        return function() {
            return this.matches(selector);
        };
    });
parcelHelpers.export(exports, "childMatcher", ()=>childMatcher);
function childMatcher(selector) {
    return function(node) {
        return node.matches(selector);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hnJ1V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(match) {
        return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : (0, _matcherJs.childMatcher)(match)));
    });
var _matcherJs = require("../matcher.js");
var filter = Array.prototype.filter;
function children() {
    return Array.from(this.children);
}
function childrenFilter(match) {
    return function() {
        return filter.call(this.children, match);
    };
}

},{"../matcher.js":"hovSo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i1GfU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(match) {
        if (typeof match !== "function") match = (0, _matcherJsDefault.default)(match);
        for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
            for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i)if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
        }
        return new (0, _indexJs.Selection)(subgroups, this._parents);
    });
var _indexJs = require("./index.js");
var _matcherJs = require("../matcher.js");
var _matcherJsDefault = parcelHelpers.interopDefault(_matcherJs);

},{"./index.js":"fK3Dl","../matcher.js":"hovSo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jIP7J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(value, key) {
        if (!arguments.length) return Array.from(this, datum);
        var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
        if (typeof value !== "function") value = (0, _constantJsDefault.default)(value);
        for(var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j){
            var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
            bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
            // Now connect the enter nodes to their following update node, such that
            // appendChild can insert the materialized enter node before this node,
            // rather than at the end of the parent node.
            for(var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0)if (previous = enterGroup[i0]) {
                if (i0 >= i1) i1 = i0 + 1;
                while(!(next = updateGroup[i1]) && ++i1 < dataLength);
                previous._next = next || null;
            }
        }
        update = new (0, _indexJs.Selection)(update, parents);
        update._enter = enter;
        update._exit = exit;
        return update;
    });
var _indexJs = require("./index.js");
var _enterJs = require("./enter.js");
var _constantJs = require("../constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0, node, groupLength = group.length, dataLength = data.length;
    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for(; i < dataLength; ++i)if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
    } else enter[i] = new (0, _enterJs.EnterNode)(parent, data[i]);
    // Put any non-null nodes that don’t fit into exit.
    for(; i < groupLength; ++i)if (node = group[i]) exit[i] = node;
}
function bindKey(parent, group, enter, update, exit, data, key) {
    var i, node, nodeByKeyValue = new Map, groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
    // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for(i = 0; i < groupLength; ++i)if (node = group[i]) {
        keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
        if (nodeByKeyValue.has(keyValue)) exit[i] = node;
        else nodeByKeyValue.set(keyValue, node);
    }
    // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for(i = 0; i < dataLength; ++i){
        keyValue = key.call(parent, data[i], i, data) + "";
        if (node = nodeByKeyValue.get(keyValue)) {
            update[i] = node;
            node.__data__ = data[i];
            nodeByKeyValue.delete(keyValue);
        } else enter[i] = new (0, _enterJs.EnterNode)(parent, data[i]);
    }
    // Add any remaining nodes that were not bound to data to exit.
    for(i = 0; i < groupLength; ++i)if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) exit[i] = node;
}
function datum(node) {
    return node.__data__;
}
// Given some data, this returns an array-like view of it: an object that
// exposes a length property and allows numeric indexing. Note that unlike
// selectAll, this isn’t worried about “live” collections because the resulting
// array will only be used briefly while data is being bound. (It is possible to
// cause the data to change while iterating by using a key function, but please
// don’t; we’d rather avoid a gratuitous copy.)
function arraylike(data) {
    return typeof data === "object" && "length" in data ? data // Array, TypedArray, NodeList, array-like
     : Array.from(data); // Map, Set, iterable, string, or anything else
}

},{"./index.js":"fK3Dl","./enter.js":"27tIy","../constant.js":"1wZol","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"27tIy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return new (0, _indexJs.Selection)(this._enter || this._groups.map((0, _sparseJsDefault.default)), this._parents);
    });
parcelHelpers.export(exports, "EnterNode", ()=>EnterNode);
var _sparseJs = require("./sparse.js");
var _sparseJsDefault = parcelHelpers.interopDefault(_sparseJs);
var _indexJs = require("./index.js");
function EnterNode(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
}
EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function(child) {
        return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function(child, next) {
        return this._parent.insertBefore(child, next);
    },
    querySelector: function(selector) {
        return this._parent.querySelector(selector);
    },
    querySelectorAll: function(selector) {
        return this._parent.querySelectorAll(selector);
    }
};

},{"./sparse.js":"juhNo","./index.js":"fK3Dl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"juhNo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(update) {
        return new Array(update.length);
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1wZol":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(x) {
        return function() {
            return x;
        };
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6ubri":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return new (0, _indexJs.Selection)(this._exit || this._groups.map((0, _sparseJsDefault.default)), this._parents);
    });
var _sparseJs = require("./sparse.js");
var _sparseJsDefault = parcelHelpers.interopDefault(_sparseJs);
var _indexJs = require("./index.js");

},{"./sparse.js":"juhNo","./index.js":"fK3Dl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g7QcH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(onenter, onupdate, onexit) {
        var enter = this.enter(), update = this, exit = this.exit();
        if (typeof onenter === "function") {
            enter = onenter(enter);
            if (enter) enter = enter.selection();
        } else enter = enter.append(onenter + "");
        if (onupdate != null) {
            update = onupdate(update);
            if (update) update = update.selection();
        }
        if (onexit == null) exit.remove();
        else onexit(exit);
        return enter && update ? enter.merge(update).order() : update;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fXm9Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(context) {
        var selection = context.selection ? context.selection() : context;
        for(var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
            for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group0[i] || group1[i]) merge[i] = node;
        }
        for(; j < m0; ++j)merges[j] = groups0[j];
        return new (0, _indexJs.Selection)(merges, this._parents);
    });
var _indexJs = require("./index.js");

},{"./index.js":"fK3Dl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cmxvd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        for(var groups = this._groups, j = -1, m = groups.length; ++j < m;){
            for(var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;)if (node = group[i]) {
                if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
                next = node;
            }
        }
        return this;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4UUI2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(compare) {
        if (!compare) compare = ascending;
        function compareNode(a, b) {
            return a && b ? compare(a.__data__, b.__data__) : !a - !b;
        }
        for(var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j){
            for(var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group[i]) sortgroup[i] = node;
            sortgroup.sort(compareNode);
        }
        return new (0, _indexJs.Selection)(sortgroups, this._parents).order();
    });
var _indexJs = require("./index.js");
function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

},{"./index.js":"fK3Dl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bsAaT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        var callback = arguments[0];
        arguments[0] = this;
        callback.apply(null, arguments);
        return this;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jjFrN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return Array.from(this);
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gPGkg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j)for(var group = groups[j], i = 0, n = group.length; i < n; ++i){
            var node = group[i];
            if (node) return node;
        }
        return null;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"coOTw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        let size = 0;
        for (const node of this)++size; // eslint-disable-line no-unused-vars
        return size;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8ybxO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return !this.node();
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Y1px":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(callback) {
        for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
            for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i)if (node = group[i]) callback.call(node, node.__data__, i, group);
        }
        return this;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k8cb1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, value) {
        var fullname = (0, _namespaceJsDefault.default)(name);
        if (arguments.length < 2) {
            var node = this.node();
            return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
        }
        return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
    });
var _namespaceJs = require("../namespace.js");
var _namespaceJsDefault = parcelHelpers.interopDefault(_namespaceJs);
function attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function attrConstant(name, value) {
    return function() {
        this.setAttribute(name, value);
    };
}
function attrConstantNS(fullname, value) {
    return function() {
        this.setAttributeNS(fullname.space, fullname.local, value);
    };
}
function attrFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttribute(name);
        else this.setAttribute(name, v);
    };
}
function attrFunctionNS(fullname, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
        else this.setAttributeNS(fullname.space, fullname.local, v);
    };
}

},{"../namespace.js":"a23xG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"GUHZ1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, value, priority) {
        return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
    });
parcelHelpers.export(exports, "styleValue", ()=>styleValue);
var _windowJs = require("../window.js");
var _windowJsDefault = parcelHelpers.interopDefault(_windowJs);
function styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function styleConstant(name, value, priority) {
    return function() {
        this.style.setProperty(name, value, priority);
    };
}
function styleFunction(name, value, priority) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.style.removeProperty(name);
        else this.style.setProperty(name, v, priority);
    };
}
function styleValue(node, name) {
    return node.style.getPropertyValue(name) || (0, _windowJsDefault.default)(node).getComputedStyle(node, null).getPropertyValue(name);
}

},{"../window.js":"6di7h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6di7h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(node) {
        return node.ownerDocument && node.ownerDocument.defaultView // node is a Node
         || node.document && node // node is a Window
         || node.defaultView; // node is a Document
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f4q4V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, value) {
        return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
    });
function propertyRemove(name) {
    return function() {
        delete this[name];
    };
}
function propertyConstant(name, value) {
    return function() {
        this[name] = value;
    };
}
function propertyFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) delete this[name];
        else this[name] = v;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jd3ig":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, value) {
        var names = classArray(name + "");
        if (arguments.length < 2) {
            var list = classList(this.node()), i = -1, n = names.length;
            while(++i < n)if (!list.contains(names[i])) return false;
            return true;
        }
        return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
    });
function classArray(string) {
    return string.trim().split(/^|\s+/);
}
function classList(node) {
    return node.classList || new ClassList(node);
}
function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
    add: function(name) {
        var i = this._names.indexOf(name);
        if (i < 0) {
            this._names.push(name);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    remove: function(name) {
        var i = this._names.indexOf(name);
        if (i >= 0) {
            this._names.splice(i, 1);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    contains: function(name) {
        return this._names.indexOf(name) >= 0;
    }
};
function classedAdd(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while(++i < n)list.add(names[i]);
}
function classedRemove(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while(++i < n)list.remove(names[i]);
}
function classedTrue(names) {
    return function() {
        classedAdd(this, names);
    };
}
function classedFalse(names) {
    return function() {
        classedRemove(this, names);
    };
}
function classedFunction(names, value) {
    return function() {
        (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dVAdB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(value) {
        return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
    });
function textRemove() {
    this.textContent = "";
}
function textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function textFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.textContent = v == null ? "" : v;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"egFAg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(value) {
        return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
    });
function htmlRemove() {
    this.innerHTML = "";
}
function htmlConstant(value) {
    return function() {
        this.innerHTML = value;
    };
}
function htmlFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.innerHTML = v == null ? "" : v;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Xi1m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return this.each(raise);
    });
function raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l1I8n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return this.each(lower);
    });
function lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1GNgv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name) {
        var create = typeof name === "function" ? name : (0, _creatorJsDefault.default)(name);
        return this.select(function() {
            return this.appendChild(create.apply(this, arguments));
        });
    });
var _creatorJs = require("../creator.js");
var _creatorJsDefault = parcelHelpers.interopDefault(_creatorJs);

},{"../creator.js":"a6062","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Xphl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, before) {
        var create = typeof name === "function" ? name : (0, _creatorJsDefault.default)(name), select = before == null ? constantNull : typeof before === "function" ? before : (0, _selectorJsDefault.default)(before);
        return this.select(function() {
            return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
        });
    });
var _creatorJs = require("../creator.js");
var _creatorJsDefault = parcelHelpers.interopDefault(_creatorJs);
var _selectorJs = require("../selector.js");
var _selectorJsDefault = parcelHelpers.interopDefault(_selectorJs);
function constantNull() {
    return null;
}

},{"../creator.js":"a6062","../selector.js":"7VF9r","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iNsSa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return this.each(remove);
    });
function remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jfNc9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(deep) {
        return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
    });
function selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lMowl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(value) {
        return arguments.length ? this.property("__data__", value) : this.node().__data__;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ktlxw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(typename, value, options) {
        var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;
        if (arguments.length < 2) {
            var on = this.node().__on;
            if (on) for(var j = 0, m = on.length, o; j < m; ++j)for(i = 0, o = on[j]; i < n; ++i){
                if ((t = typenames[i]).type === o.type && t.name === o.name) return o.value;
            }
            return;
        }
        on = value ? onAdd : onRemove;
        for(i = 0; i < n; ++i)this.each(on(typenames[i], value, options));
        return this;
    });
function contextListener(listener) {
    return function(event) {
        listener.call(this, event, this.__data__);
    };
}
function parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        return {
            type: t,
            name: name
        };
    });
}
function onRemove(typename) {
    return function() {
        var on = this.__on;
        if (!on) return;
        for(var j = 0, i = -1, m = on.length, o; j < m; ++j)if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) this.removeEventListener(o.type, o.listener, o.options);
        else on[++i] = o;
        if (++i) on.length = i;
        else delete this.__on;
    };
}
function onAdd(typename, value, options) {
    return function() {
        var on = this.__on, o, listener = contextListener(value);
        if (on) {
            for(var j = 0, m = on.length; j < m; ++j)if ((o = on[j]).type === typename.type && o.name === typename.name) {
                this.removeEventListener(o.type, o.listener, o.options);
                this.addEventListener(o.type, o.listener = listener, o.options = options);
                o.value = value;
                return;
            }
        }
        this.addEventListener(typename.type, listener, options);
        o = {
            type: typename.type,
            name: typename.name,
            value: value,
            listener: listener,
            options: options
        };
        if (!on) this.__on = [
            o
        ];
        else on.push(o);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eZMTj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(type, params) {
        return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
    });
var _windowJs = require("../window.js");
var _windowJsDefault = parcelHelpers.interopDefault(_windowJs);
function dispatchEvent(node, type, params) {
    var window = (0, _windowJsDefault.default)(node), event = window.CustomEvent;
    if (typeof event === "function") event = new event(type, params);
    else {
        event = window.document.createEvent("Event");
        if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
        else event.initEvent(type, false, false);
    }
    node.dispatchEvent(event);
}
function dispatchConstant(type, params) {
    return function() {
        return dispatchEvent(this, type, params);
    };
}
function dispatchFunction(type, params) {
    return function() {
        return dispatchEvent(this, type, params.apply(this, arguments));
    };
}

},{"../window.js":"6di7h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"32Fgr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function*() {
        for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
            for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i)if (node = group[i]) yield node;
        }
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hcwa6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>local);
var nextId = 0;
function local() {
    return new Local;
}
function Local() {
    this._ = "@" + (++nextId).toString(36);
}
Local.prototype = local.prototype = {
    constructor: Local,
    get: function(node) {
        var id = this._;
        while(!(id in node))if (!(node = node.parentNode)) return;
        return node[id];
    },
    set: function(node, value) {
        return node[this._] = value;
    },
    remove: function(node) {
        return this._ in node && delete node[this._];
    },
    toString: function() {
        return this._;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bs1Eh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(event, node) {
        event = (0, _sourceEventJsDefault.default)(event);
        if (node === undefined) node = event.currentTarget;
        if (node) {
            var svg = node.ownerSVGElement || node;
            if (svg.createSVGPoint) {
                var point = svg.createSVGPoint();
                point.x = event.clientX, point.y = event.clientY;
                point = point.matrixTransform(node.getScreenCTM().inverse());
                return [
                    point.x,
                    point.y
                ];
            }
            if (node.getBoundingClientRect) {
                var rect = node.getBoundingClientRect();
                return [
                    event.clientX - rect.left - node.clientLeft,
                    event.clientY - rect.top - node.clientTop
                ];
            }
        }
        return [
            event.pageX,
            event.pageY
        ];
    });
var _sourceEventJs = require("./sourceEvent.js");
var _sourceEventJsDefault = parcelHelpers.interopDefault(_sourceEventJs);

},{"./sourceEvent.js":"cDi5d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cDi5d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(event) {
        let sourceEvent;
        while(sourceEvent = event.sourceEvent)event = sourceEvent;
        return event;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fqMp7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(events, node) {
        if (events.target) {
            events = (0, _sourceEventJsDefault.default)(events);
            if (node === undefined) node = events.currentTarget;
            events = events.touches || [
                events
            ];
        }
        return Array.from(events, (event)=>(0, _pointerJsDefault.default)(event, node));
    });
var _pointerJs = require("./pointer.js");
var _pointerJsDefault = parcelHelpers.interopDefault(_pointerJs);
var _sourceEventJs = require("./sourceEvent.js");
var _sourceEventJsDefault = parcelHelpers.interopDefault(_sourceEventJs);

},{"./pointer.js":"bs1Eh","./sourceEvent.js":"cDi5d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eAYBy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(selector) {
        return typeof selector === "string" ? new (0, _indexJs.Selection)([
            document.querySelectorAll(selector)
        ], [
            document.documentElement
        ]) : new (0, _indexJs.Selection)([
            (0, _arrayJsDefault.default)(selector)
        ], (0, _indexJs.root));
    });
var _arrayJs = require("./array.js");
var _arrayJsDefault = parcelHelpers.interopDefault(_arrayJs);
var _indexJs = require("./selection/index.js");

},{"./array.js":"9WejU","./selection/index.js":"fK3Dl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aMYz0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Drag = require("d3-drag");
var _d3Transition = require("d3-transition");
var _helpers = require("./helpers");
class Slider {
    constructor(node, { drag, timeScale, container, speed }){
        this.build(node);
        this.timeScale = timeScale;
        this.speed = speed;
        this.container = container;
        this.resize();
        this.onDrag = drag;
        addEventListener("resize", ()=>this.resize());
    }
    build(node) {
        this.node = node;
        this.lineSlider = node.append("line").attr("x1", 0).attr("stroke", "#310234").attr("stroke-width", 10).attr("stroke-linecap", "round");
        this.ghostLineSlider = node.append("line").attr("x1", 0).attr("stroke", "transparent").attr("stroke-width", 100).attr("stroke-linecap", "round").style("cursor", "crosshair").style("pointer-events", "stroke").call((0, _d3Drag.drag)().on("start.interrupt", ()=>node.interrupt()).on("start drag", ({ x })=>this.onDrag(x)));
        this.circle = node.append("circle").attr("r", 10).attr("fill", "var(--color)").attr("stroke", "#310234").attr("stroke-width", 2).style("pointer-events", "none");
    }
    render({ index, months }) {
        const t1 = (0, _d3Transition.transition)().duration(this.speed);
        const t2 = (0, _d3Transition.transition)().duration(this.speed);
        this.circle.transition(t1).attr("cx", index * this.timeScale.step());
        this.node.selectAll("text").data(months.filter((_, ix)=>index === ix), (x)=>x).join((enter)=>enter.append("text").attr("dy", "-1em").attr("text-anchor", "end").attr("fill", "var(--heading)").attr("font-size", "2em").text((d)=>`${(0, _helpers.formatDate)(new Date(d), {
                    month: "long"
                })} '${(0, _helpers.formatDate)(new Date(d), {
                    year: "2-digit"
                })}`).call((enter)=>enter.attr("x", 2 * this.width).transition(t2).attr("x", this.width)), (update)=>update, (exit)=>exit.call((exit)=>exit.transition(t2).style("opacity", 0).attr("x", this.width * 0.5).remove()));
    }
    resize() {
        const [, , w, h] = this.container.attr("viewBox").split(",");
        const [from, to] = [
            w < 640 ? w * 0.05 : w * 0.7,
            w * 0.95
        ];
        this.width = to - from;
        this.timeScale.range([
            from,
            to
        ]);
        this.lineSlider.attr("x2", this.width);
        this.ghostLineSlider.attr("x2", this.width);
        this.node.attr("transform", `translate(${from} ${w < 640 ? h * 0.85 : h * 0.95})`);
    }
}
exports.default = Slider;

},{"./helpers":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","d3-drag":"hGy7N","d3-transition":"4lorl"}],"hGy7N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drag", ()=>(0, _dragJsDefault.default));
parcelHelpers.export(exports, "dragDisable", ()=>(0, _nodragJsDefault.default));
parcelHelpers.export(exports, "dragEnable", ()=>(0, _nodragJs.yesdrag));
var _dragJs = require("./drag.js");
var _dragJsDefault = parcelHelpers.interopDefault(_dragJs);
var _nodragJs = require("./nodrag.js");
var _nodragJsDefault = parcelHelpers.interopDefault(_nodragJs);

},{"./drag.js":"nkoqB","./nodrag.js":"la87z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"nkoqB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        var filter = defaultFilter, container = defaultContainer, subject = defaultSubject, touchable = defaultTouchable, gestures = {}, listeners = (0, _d3Dispatch.dispatch)("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
        function drag(selection) {
            selection.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved, (0, _noeventJs.nonpassive)).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        function mousedowned(event, d) {
            if (touchending || !filter.call(this, event, d)) return;
            var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
            if (!gesture) return;
            (0, _d3Selection.select)(event.view).on("mousemove.drag", mousemoved, (0, _noeventJs.nonpassivecapture)).on("mouseup.drag", mouseupped, (0, _noeventJs.nonpassivecapture));
            (0, _nodragJsDefault.default)(event.view);
            (0, _noeventJs.nopropagation)(event);
            mousemoving = false;
            mousedownx = event.clientX;
            mousedowny = event.clientY;
            gesture("start", event);
        }
        function mousemoved(event) {
            (0, _noeventJsDefault.default)(event);
            if (!mousemoving) {
                var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
                mousemoving = dx * dx + dy * dy > clickDistance2;
            }
            gestures.mouse("drag", event);
        }
        function mouseupped(event) {
            (0, _d3Selection.select)(event.view).on("mousemove.drag mouseup.drag", null);
            (0, _nodragJs.yesdrag)(event.view, mousemoving);
            (0, _noeventJsDefault.default)(event);
            gestures.mouse("end", event);
        }
        function touchstarted(event, d) {
            if (!filter.call(this, event, d)) return;
            var touches = event.changedTouches, c = container.call(this, event, d), n = touches.length, i, gesture;
            for(i = 0; i < n; ++i)if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
                (0, _noeventJs.nopropagation)(event);
                gesture("start", event, touches[i]);
            }
        }
        function touchmoved(event) {
            var touches = event.changedTouches, n = touches.length, i, gesture;
            for(i = 0; i < n; ++i)if (gesture = gestures[touches[i].identifier]) {
                (0, _noeventJsDefault.default)(event);
                gesture("drag", event, touches[i]);
            }
        }
        function touchended(event) {
            var touches = event.changedTouches, n = touches.length, i, gesture;
            if (touchending) clearTimeout(touchending);
            touchending = setTimeout(function() {
                touchending = null;
            }, 500); // Ghost clicks are delayed!
            for(i = 0; i < n; ++i)if (gesture = gestures[touches[i].identifier]) {
                (0, _noeventJs.nopropagation)(event);
                gesture("end", event, touches[i]);
            }
        }
        function beforestart(that, container, event, d, identifier, touch) {
            var dispatch = listeners.copy(), p = (0, _d3Selection.pointer)(touch || event, container), dx, dy, s;
            if ((s = subject.call(that, new (0, _eventJsDefault.default)("beforestart", {
                sourceEvent: event,
                target: drag,
                identifier,
                active,
                x: p[0],
                y: p[1],
                dx: 0,
                dy: 0,
                dispatch
            }), d)) == null) return;
            dx = s.x - p[0] || 0;
            dy = s.y - p[1] || 0;
            return function gesture(type, event, touch) {
                var p0 = p, n;
                switch(type){
                    case "start":
                        gestures[identifier] = gesture, n = active++;
                        break;
                    case "end":
                        delete gestures[identifier], --active; // falls through
                    case "drag":
                        p = (0, _d3Selection.pointer)(touch || event, container), n = active;
                        break;
                }
                dispatch.call(type, that, new (0, _eventJsDefault.default)(type, {
                    sourceEvent: event,
                    subject: s,
                    target: drag,
                    identifier,
                    active: n,
                    x: p[0] + dx,
                    y: p[1] + dy,
                    dx: p[0] - p0[0],
                    dy: p[1] - p0[1],
                    dispatch
                }), d);
            };
        }
        drag.filter = function(_) {
            return arguments.length ? (filter = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(!!_), drag) : filter;
        };
        drag.container = function(_) {
            return arguments.length ? (container = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(_), drag) : container;
        };
        drag.subject = function(_) {
            return arguments.length ? (subject = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(_), drag) : subject;
        };
        drag.touchable = function(_) {
            return arguments.length ? (touchable = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(!!_), drag) : touchable;
        };
        drag.on = function() {
            var value = listeners.on.apply(listeners, arguments);
            return value === listeners ? drag : value;
        };
        drag.clickDistance = function(_) {
            return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
        };
        return drag;
    });
var _d3Dispatch = require("d3-dispatch");
var _d3Selection = require("d3-selection");
var _nodragJs = require("./nodrag.js");
var _nodragJsDefault = parcelHelpers.interopDefault(_nodragJs);
var _noeventJs = require("./noevent.js");
var _noeventJsDefault = parcelHelpers.interopDefault(_noeventJs);
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _eventJs = require("./event.js");
var _eventJsDefault = parcelHelpers.interopDefault(_eventJs);
// Ignore right-click, since that should open the context menu.
function defaultFilter(event) {
    return !event.ctrlKey && !event.button;
}
function defaultContainer() {
    return this.parentNode;
}
function defaultSubject(event, d) {
    return d == null ? {
        x: event.x,
        y: event.y
    } : d;
}
function defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
}

},{"d3-dispatch":"5WtHO","d3-selection":"gn9gd","./nodrag.js":"la87z","./noevent.js":"chHoc","./constant.js":"jkLzs","./event.js":"9jrzj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5WtHO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dispatch", ()=>(0, _dispatchJsDefault.default));
var _dispatchJs = require("./dispatch.js");
var _dispatchJsDefault = parcelHelpers.interopDefault(_dispatchJs);

},{"./dispatch.js":"8Hmyd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Hmyd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var noop = {
    value: ()=>{}
};
function dispatch() {
    for(var i = 0, n = arguments.length, _ = {}, t; i < n; ++i){
        if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
        _[t] = [];
    }
    return new Dispatch(_);
}
function Dispatch(_) {
    this._ = _;
}
function parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        return {
            type: t,
            name: name
        };
    });
}
Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function(typename, callback) {
        var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
        // If no callback was specified, return the callback of the given type and name.
        if (arguments.length < 2) {
            while(++i < n)if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
            return;
        }
        // If a type was specified, set the callback for the given type and name.
        // Otherwise, if a null callback was specified, remove callbacks of the given name.
        if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
        while(++i < n){
            if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
            else if (callback == null) for(t in _)_[t] = set(_[t], typename.name, null);
        }
        return this;
    },
    copy: function() {
        var copy = {}, _ = this._;
        for(var t in _)copy[t] = _[t].slice();
        return new Dispatch(copy);
    },
    call: function(type, that) {
        if ((n = arguments.length - 2) > 0) for(var args = new Array(n), i = 0, n, t; i < n; ++i)args[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    },
    apply: function(type, that, args) {
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(var t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    }
};
function get(type, name) {
    for(var i = 0, n = type.length, c; i < n; ++i){
        if ((c = type[i]).name === name) return c.value;
    }
}
function set(type, name, callback) {
    for(var i = 0, n = type.length; i < n; ++i)if (type[i].name === name) {
        type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
        break;
    }
    if (callback != null) type.push({
        name: name,
        value: callback
    });
    return type;
}
exports.default = dispatch;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"la87z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(view) {
        var root = view.document.documentElement, selection = (0, _d3Selection.select)(view).on("dragstart.drag", (0, _noeventJsDefault.default), (0, _noeventJs.nonpassivecapture));
        if ("onselectstart" in root) selection.on("selectstart.drag", (0, _noeventJsDefault.default), (0, _noeventJs.nonpassivecapture));
        else {
            root.__noselect = root.style.MozUserSelect;
            root.style.MozUserSelect = "none";
        }
    });
parcelHelpers.export(exports, "yesdrag", ()=>yesdrag);
var _d3Selection = require("d3-selection");
var _noeventJs = require("./noevent.js");
var _noeventJsDefault = parcelHelpers.interopDefault(_noeventJs);
function yesdrag(view, noclick) {
    var root = view.document.documentElement, selection = (0, _d3Selection.select)(view).on("dragstart.drag", null);
    if (noclick) {
        selection.on("click.drag", (0, _noeventJsDefault.default), (0, _noeventJs.nonpassivecapture));
        setTimeout(function() {
            selection.on("click.drag", null);
        }, 0);
    }
    if ("onselectstart" in root) selection.on("selectstart.drag", null);
    else {
        root.style.MozUserSelect = root.__noselect;
        delete root.__noselect;
    }
}

},{"d3-selection":"gn9gd","./noevent.js":"chHoc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"chHoc":[function(require,module,exports) {
// These are typically used in conjunction with noevent to ensure that we can
// preventDefault on the event.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nonpassive", ()=>nonpassive);
parcelHelpers.export(exports, "nonpassivecapture", ()=>nonpassivecapture);
parcelHelpers.export(exports, "nopropagation", ()=>nopropagation);
parcelHelpers.export(exports, "default", ()=>function(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
    });
const nonpassive = {
    passive: false
};
const nonpassivecapture = {
    capture: true,
    passive: false
};
function nopropagation(event) {
    event.stopImmediatePropagation();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jkLzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (x)=>()=>x;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9jrzj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>DragEvent);
function DragEvent(type, { sourceEvent, subject, target, identifier, active, x, y, dx, dy, dispatch }) {
    Object.defineProperties(this, {
        type: {
            value: type,
            enumerable: true,
            configurable: true
        },
        sourceEvent: {
            value: sourceEvent,
            enumerable: true,
            configurable: true
        },
        subject: {
            value: subject,
            enumerable: true,
            configurable: true
        },
        target: {
            value: target,
            enumerable: true,
            configurable: true
        },
        identifier: {
            value: identifier,
            enumerable: true,
            configurable: true
        },
        active: {
            value: active,
            enumerable: true,
            configurable: true
        },
        x: {
            value: x,
            enumerable: true,
            configurable: true
        },
        y: {
            value: y,
            enumerable: true,
            configurable: true
        },
        dx: {
            value: dx,
            enumerable: true,
            configurable: true
        },
        dy: {
            value: dy,
            enumerable: true,
            configurable: true
        },
        _: {
            value: dispatch
        }
    });
}
DragEvent.prototype.on = function() {
    var value = this._.on.apply(this._, arguments);
    return value === this._ ? this : value;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4lorl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transition", ()=>(0, _indexJsDefault.default));
parcelHelpers.export(exports, "active", ()=>(0, _activeJsDefault.default));
parcelHelpers.export(exports, "interrupt", ()=>(0, _interruptJsDefault.default));
var _indexJs = require("./selection/index.js");
var _indexJs1 = require("./transition/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
var _activeJs = require("./active.js");
var _activeJsDefault = parcelHelpers.interopDefault(_activeJs);
var _interruptJs = require("./interrupt.js");
var _interruptJsDefault = parcelHelpers.interopDefault(_interruptJs);

},{"./selection/index.js":"heX1u","./transition/index.js":"h2Srb","./active.js":false,"./interrupt.js":"j3g05","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"heX1u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _d3Selection = require("d3-selection");
var _interruptJs = require("./interrupt.js");
var _interruptJsDefault = parcelHelpers.interopDefault(_interruptJs);
var _transitionJs = require("./transition.js");
var _transitionJsDefault = parcelHelpers.interopDefault(_transitionJs);
(0, _d3Selection.selection).prototype.interrupt = (0, _interruptJsDefault.default);
(0, _d3Selection.selection).prototype.transition = (0, _transitionJsDefault.default);

},{"d3-selection":"gn9gd","./interrupt.js":"ecsW0","./transition.js":"aZzEX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ecsW0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name) {
        return this.each(function() {
            (0, _interruptJsDefault.default)(this, name);
        });
    });
var _interruptJs = require("../interrupt.js");
var _interruptJsDefault = parcelHelpers.interopDefault(_interruptJs);

},{"../interrupt.js":"j3g05","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j3g05":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(node, name) {
        var schedules = node.__transition, schedule, active, empty = true, i;
        if (!schedules) return;
        name = name == null ? null : name + "";
        for(i in schedules){
            if ((schedule = schedules[i]).name !== name) {
                empty = false;
                continue;
            }
            active = schedule.state > (0, _scheduleJs.STARTING) && schedule.state < (0, _scheduleJs.ENDING);
            schedule.state = (0, _scheduleJs.ENDED);
            schedule.timer.stop();
            schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
            delete schedules[i];
        }
        if (empty) delete node.__transition;
    });
var _scheduleJs = require("./transition/schedule.js");

},{"./transition/schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"de74c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CREATED", ()=>CREATED);
parcelHelpers.export(exports, "SCHEDULED", ()=>SCHEDULED);
parcelHelpers.export(exports, "STARTING", ()=>STARTING);
parcelHelpers.export(exports, "STARTED", ()=>STARTED);
parcelHelpers.export(exports, "RUNNING", ()=>RUNNING);
parcelHelpers.export(exports, "ENDING", ()=>ENDING);
parcelHelpers.export(exports, "ENDED", ()=>ENDED);
parcelHelpers.export(exports, "default", ()=>function(node, name, id, index, group, timing) {
        var schedules = node.__transition;
        if (!schedules) node.__transition = {};
        else if (id in schedules) return;
        create(node, id, {
            name: name,
            index: index,
            group: group,
            on: emptyOn,
            tween: emptyTween,
            time: timing.time,
            delay: timing.delay,
            duration: timing.duration,
            ease: timing.ease,
            timer: null,
            state: CREATED
        });
    });
parcelHelpers.export(exports, "init", ()=>init);
parcelHelpers.export(exports, "set", ()=>set);
parcelHelpers.export(exports, "get", ()=>get);
var _d3Dispatch = require("d3-dispatch");
var _d3Timer = require("d3-timer");
var emptyOn = (0, _d3Dispatch.dispatch)("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function init(node, id) {
    var schedule = get(node, id);
    if (schedule.state > CREATED) throw new Error("too late; already scheduled");
    return schedule;
}
function set(node, id) {
    var schedule = get(node, id);
    if (schedule.state > STARTED) throw new Error("too late; already running");
    return schedule;
}
function get(node, id) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
    return schedule;
}
function create(node, id, self) {
    var schedules = node.__transition, tween;
    // Initialize the self timer when the transition is created.
    // Note the actual delay is not known until the first callback!
    schedules[id] = self;
    self.timer = (0, _d3Timer.timer)(schedule, 0, self.time);
    function schedule(elapsed) {
        self.state = SCHEDULED;
        self.timer.restart(start, self.delay, self.time);
        // If the elapsed delay is less than our first sleep, start immediately.
        if (self.delay <= elapsed) start(elapsed - self.delay);
    }
    function start(elapsed) {
        var i, j, n, o;
        // If the state is not SCHEDULED, then we previously errored on start.
        if (self.state !== SCHEDULED) return stop();
        for(i in schedules){
            o = schedules[i];
            if (o.name !== self.name) continue;
            // While this element already has a starting transition during this frame,
            // defer starting an interrupting transition until that transition has a
            // chance to tick (and possibly end); see d3/d3-transition#54!
            if (o.state === STARTED) return (0, _d3Timer.timeout)(start);
            // Interrupt the active transition, if any.
            if (o.state === RUNNING) {
                o.state = ENDED;
                o.timer.stop();
                o.on.call("interrupt", node, node.__data__, o.index, o.group);
                delete schedules[i];
            } else if (+i < id) {
                o.state = ENDED;
                o.timer.stop();
                o.on.call("cancel", node, node.__data__, o.index, o.group);
                delete schedules[i];
            }
        }
        // Defer the first tick to end of the current frame; see d3/d3#1576.
        // Note the transition may be canceled after start and before the first tick!
        // Note this must be scheduled before the start event; see d3/d3-transition#16!
        // Assuming this is successful, subsequent callbacks go straight to tick.
        (0, _d3Timer.timeout)(function() {
            if (self.state === STARTED) {
                self.state = RUNNING;
                self.timer.restart(tick, self.delay, self.time);
                tick(elapsed);
            }
        });
        // Dispatch the start event.
        // Note this must be done before the tween are initialized.
        self.state = STARTING;
        self.on.call("start", node, node.__data__, self.index, self.group);
        if (self.state !== STARTING) return; // interrupted
        self.state = STARTED;
        // Initialize the tween, deleting null tween.
        tween = new Array(n = self.tween.length);
        for(i = 0, j = -1; i < n; ++i)if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) tween[++j] = o;
        tween.length = j + 1;
    }
    function tick(elapsed) {
        var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
        while(++i < n)tween[i].call(node, t);
        // Dispatch the end event.
        if (self.state === ENDING) {
            self.on.call("end", node, node.__data__, self.index, self.group);
            stop();
        }
    }
    function stop() {
        self.state = ENDED;
        self.timer.stop();
        delete schedules[id];
        for(var i in schedules)return; // eslint-disable-line no-unused-vars
        delete node.__transition;
    }
}

},{"d3-dispatch":"5WtHO","d3-timer":"7TEss","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7TEss":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "now", ()=>(0, _timerJs.now));
parcelHelpers.export(exports, "timer", ()=>(0, _timerJs.timer));
parcelHelpers.export(exports, "timerFlush", ()=>(0, _timerJs.timerFlush));
parcelHelpers.export(exports, "timeout", ()=>(0, _timeoutJsDefault.default));
parcelHelpers.export(exports, "interval", ()=>(0, _intervalJsDefault.default));
var _timerJs = require("./timer.js");
var _timeoutJs = require("./timeout.js");
var _timeoutJsDefault = parcelHelpers.interopDefault(_timeoutJs);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);

},{"./timer.js":"bfF2F","./timeout.js":"ioM7O","./interval.js":"5wQxk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bfF2F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "now", ()=>now);
parcelHelpers.export(exports, "Timer", ()=>Timer);
parcelHelpers.export(exports, "timer", ()=>timer);
parcelHelpers.export(exports, "timerFlush", ()=>timerFlush);
var frame = 0, timeout = 0, interval = 0, pokeDelay = 1000, taskHead, taskTail, clockLast = 0, clockNow = 0, clockSkew = 0, clock = typeof performance === "object" && performance.now ? performance : Date, setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
    setTimeout(f, 17);
};
function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
    clockNow = 0;
}
function Timer() {
    this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function(callback, delay, time) {
        if (typeof callback !== "function") throw new TypeError("callback is not a function");
        time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
        if (!this._next && taskTail !== this) {
            if (taskTail) taskTail._next = this;
            else taskHead = this;
            taskTail = this;
        }
        this._call = callback;
        this._time = time;
        sleep();
    },
    stop: function() {
        if (this._call) {
            this._call = null;
            this._time = Infinity;
            sleep();
        }
    }
};
function timer(callback, delay, time) {
    var t = new Timer;
    t.restart(callback, delay, time);
    return t;
}
function timerFlush() {
    now(); // Get the current time, if not already set.
    ++frame; // Pretend we’ve set an alarm, if we haven’t already.
    var t = taskHead, e;
    while(t){
        if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
        t = t._next;
    }
    --frame;
}
function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout = 0;
    try {
        timerFlush();
    } finally{
        frame = 0;
        nap();
        clockNow = 0;
    }
}
function poke() {
    var now = clock.now(), delay = now - clockLast;
    if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}
function nap() {
    var t0, t1 = taskHead, t2, time = Infinity;
    while(t1)if (t1._call) {
        if (time > t1._time) time = t1._time;
        t0 = t1, t1 = t1._next;
    } else {
        t2 = t1._next, t1._next = null;
        t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
    taskTail = t0;
    sleep(time);
}
function sleep(time) {
    if (frame) return; // Soonest alarm already set, or will be.
    if (timeout) timeout = clearTimeout(timeout);
    var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
        if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
        if (interval) interval = clearInterval(interval);
    } else {
        if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
        frame = 1, setFrame(wake);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ioM7O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(callback, delay, time) {
        var t = new (0, _timerJs.Timer);
        delay = delay == null ? 0 : +delay;
        t.restart((elapsed)=>{
            t.stop();
            callback(elapsed + delay);
        }, delay, time);
        return t;
    });
var _timerJs = require("./timer.js");

},{"./timer.js":"bfF2F","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5wQxk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(callback, delay, time) {
        var t = new (0, _timerJs.Timer), total = delay;
        if (delay == null) return t.restart(callback, delay, time), t;
        t._restart = t.restart;
        t.restart = function(callback, delay, time) {
            delay = +delay, time = time == null ? (0, _timerJs.now)() : +time;
            t._restart(function tick(elapsed) {
                elapsed += total;
                t._restart(tick, total += delay, time);
                callback(elapsed);
            }, delay, time);
        };
        t.restart(callback, delay, time);
        return t;
    });
var _timerJs = require("./timer.js");

},{"./timer.js":"bfF2F","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aZzEX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name) {
        var id, timing;
        if (name instanceof (0, _indexJs.Transition)) id = name._id, name = name._name;
        else id = (0, _indexJs.newId)(), (timing = defaultTiming).time = (0, _d3Timer.now)(), name = name == null ? null : name + "";
        for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
            for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) (0, _scheduleJsDefault.default)(node, name, id, i, group, timing || inherit(node, id));
        }
        return new (0, _indexJs.Transition)(groups, this._parents, name, id);
    });
var _indexJs = require("../transition/index.js");
var _scheduleJs = require("../transition/schedule.js");
var _scheduleJsDefault = parcelHelpers.interopDefault(_scheduleJs);
var _d3Ease = require("d3-ease");
var _d3Timer = require("d3-timer");
var defaultTiming = {
    time: null,
    delay: 0,
    duration: 250,
    ease: (0, _d3Ease.easeCubicInOut)
};
function inherit(node, id) {
    var timing;
    while(!(timing = node.__transition) || !(timing = timing[id])){
        if (!(node = node.parentNode)) throw new Error(`transition ${id} not found`);
    }
    return timing;
}

},{"../transition/index.js":"h2Srb","../transition/schedule.js":"de74c","d3-ease":"8sCNl","d3-timer":"7TEss","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h2Srb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Transition", ()=>Transition);
parcelHelpers.export(exports, "default", ()=>transition);
parcelHelpers.export(exports, "newId", ()=>newId);
var _d3Selection = require("d3-selection");
var _attrJs = require("./attr.js");
var _attrJsDefault = parcelHelpers.interopDefault(_attrJs);
var _attrTweenJs = require("./attrTween.js");
var _attrTweenJsDefault = parcelHelpers.interopDefault(_attrTweenJs);
var _delayJs = require("./delay.js");
var _delayJsDefault = parcelHelpers.interopDefault(_delayJs);
var _durationJs = require("./duration.js");
var _durationJsDefault = parcelHelpers.interopDefault(_durationJs);
var _easeJs = require("./ease.js");
var _easeJsDefault = parcelHelpers.interopDefault(_easeJs);
var _easeVaryingJs = require("./easeVarying.js");
var _easeVaryingJsDefault = parcelHelpers.interopDefault(_easeVaryingJs);
var _filterJs = require("./filter.js");
var _filterJsDefault = parcelHelpers.interopDefault(_filterJs);
var _mergeJs = require("./merge.js");
var _mergeJsDefault = parcelHelpers.interopDefault(_mergeJs);
var _onJs = require("./on.js");
var _onJsDefault = parcelHelpers.interopDefault(_onJs);
var _removeJs = require("./remove.js");
var _removeJsDefault = parcelHelpers.interopDefault(_removeJs);
var _selectJs = require("./select.js");
var _selectJsDefault = parcelHelpers.interopDefault(_selectJs);
var _selectAllJs = require("./selectAll.js");
var _selectAllJsDefault = parcelHelpers.interopDefault(_selectAllJs);
var _selectionJs = require("./selection.js");
var _selectionJsDefault = parcelHelpers.interopDefault(_selectionJs);
var _styleJs = require("./style.js");
var _styleJsDefault = parcelHelpers.interopDefault(_styleJs);
var _styleTweenJs = require("./styleTween.js");
var _styleTweenJsDefault = parcelHelpers.interopDefault(_styleTweenJs);
var _textJs = require("./text.js");
var _textJsDefault = parcelHelpers.interopDefault(_textJs);
var _textTweenJs = require("./textTween.js");
var _textTweenJsDefault = parcelHelpers.interopDefault(_textTweenJs);
var _transitionJs = require("./transition.js");
var _transitionJsDefault = parcelHelpers.interopDefault(_transitionJs);
var _tweenJs = require("./tween.js");
var _tweenJsDefault = parcelHelpers.interopDefault(_tweenJs);
var _endJs = require("./end.js");
var _endJsDefault = parcelHelpers.interopDefault(_endJs);
var id = 0;
function Transition(groups, parents, name, id) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id;
}
function transition(name) {
    return (0, _d3Selection.selection)().transition(name);
}
function newId() {
    return ++id;
}
var selection_prototype = (0, _d3Selection.selection).prototype;
Transition.prototype = transition.prototype = {
    constructor: Transition,
    select: (0, _selectJsDefault.default),
    selectAll: (0, _selectAllJsDefault.default),
    selectChild: selection_prototype.selectChild,
    selectChildren: selection_prototype.selectChildren,
    filter: (0, _filterJsDefault.default),
    merge: (0, _mergeJsDefault.default),
    selection: (0, _selectionJsDefault.default),
    transition: (0, _transitionJsDefault.default),
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: (0, _onJsDefault.default),
    attr: (0, _attrJsDefault.default),
    attrTween: (0, _attrTweenJsDefault.default),
    style: (0, _styleJsDefault.default),
    styleTween: (0, _styleTweenJsDefault.default),
    text: (0, _textJsDefault.default),
    textTween: (0, _textTweenJsDefault.default),
    remove: (0, _removeJsDefault.default),
    tween: (0, _tweenJsDefault.default),
    delay: (0, _delayJsDefault.default),
    duration: (0, _durationJsDefault.default),
    ease: (0, _easeJsDefault.default),
    easeVarying: (0, _easeVaryingJsDefault.default),
    end: (0, _endJsDefault.default),
    [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

},{"d3-selection":"gn9gd","./attr.js":"9UgA3","./attrTween.js":"1hMpn","./delay.js":"2BzOF","./duration.js":"ei298","./ease.js":"lCGHM","./easeVarying.js":"aju4f","./filter.js":"d3Uia","./merge.js":"9odBi","./on.js":"3XrBC","./remove.js":"aZLkz","./select.js":"bgUUX","./selectAll.js":"lqPi4","./selection.js":"iWTRA","./style.js":"44QDP","./styleTween.js":"42AvL","./text.js":"6mGEx","./textTween.js":"kqC5z","./transition.js":"50tVR","./tween.js":"1Kbbg","./end.js":"ev0ir","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9UgA3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, value) {
        var fullname = (0, _d3Selection.namespace)(name), i = fullname === "transform" ? (0, _d3Interpolate.interpolateTransformSvg) : (0, _interpolateJsDefault.default);
        return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, (0, _tweenJs.tweenValue)(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
    });
var _d3Interpolate = require("d3-interpolate");
var _d3Selection = require("d3-selection");
var _tweenJs = require("./tween.js");
var _interpolateJs = require("./interpolate.js");
var _interpolateJsDefault = parcelHelpers.interopDefault(_interpolateJs);
function attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function attrConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = this.getAttribute(name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function attrConstantNS(fullname, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = this.getAttributeNS(fullname.space, fullname.local);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function attrFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttribute(name);
        string0 = this.getAttribute(name);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function attrFunctionNS(fullname, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
        string0 = this.getAttributeNS(fullname.space, fullname.local);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}

},{"d3-interpolate":"6jJyi","d3-selection":"gn9gd","./tween.js":"1Kbbg","./interpolate.js":"69lgs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6jJyi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "interpolate", ()=>(0, _valueJsDefault.default));
parcelHelpers.export(exports, "interpolateArray", ()=>(0, _arrayJsDefault.default));
parcelHelpers.export(exports, "interpolateBasis", ()=>(0, _basisJsDefault.default));
parcelHelpers.export(exports, "interpolateBasisClosed", ()=>(0, _basisClosedJsDefault.default));
parcelHelpers.export(exports, "interpolateDate", ()=>(0, _dateJsDefault.default));
parcelHelpers.export(exports, "interpolateDiscrete", ()=>(0, _discreteJsDefault.default));
parcelHelpers.export(exports, "interpolateHue", ()=>(0, _hueJsDefault.default));
parcelHelpers.export(exports, "interpolateNumber", ()=>(0, _numberJsDefault.default));
parcelHelpers.export(exports, "interpolateNumberArray", ()=>(0, _numberArrayJsDefault.default));
parcelHelpers.export(exports, "interpolateObject", ()=>(0, _objectJsDefault.default));
parcelHelpers.export(exports, "interpolateRound", ()=>(0, _roundJsDefault.default));
parcelHelpers.export(exports, "interpolateString", ()=>(0, _stringJsDefault.default));
parcelHelpers.export(exports, "interpolateTransformCss", ()=>(0, _indexJs.interpolateTransformCss));
parcelHelpers.export(exports, "interpolateTransformSvg", ()=>(0, _indexJs.interpolateTransformSvg));
parcelHelpers.export(exports, "interpolateZoom", ()=>(0, _zoomJsDefault.default));
parcelHelpers.export(exports, "interpolateRgb", ()=>(0, _rgbJsDefault.default));
parcelHelpers.export(exports, "interpolateRgbBasis", ()=>(0, _rgbJs.rgbBasis));
parcelHelpers.export(exports, "interpolateRgbBasisClosed", ()=>(0, _rgbJs.rgbBasisClosed));
parcelHelpers.export(exports, "interpolateHsl", ()=>(0, _hslJsDefault.default));
parcelHelpers.export(exports, "interpolateHslLong", ()=>(0, _hslJs.hslLong));
parcelHelpers.export(exports, "interpolateLab", ()=>(0, _labJsDefault.default));
parcelHelpers.export(exports, "interpolateHcl", ()=>(0, _hclJsDefault.default));
parcelHelpers.export(exports, "interpolateHclLong", ()=>(0, _hclJs.hclLong));
parcelHelpers.export(exports, "interpolateCubehelix", ()=>(0, _cubehelixJsDefault.default));
parcelHelpers.export(exports, "interpolateCubehelixLong", ()=>(0, _cubehelixJs.cubehelixLong));
parcelHelpers.export(exports, "piecewise", ()=>(0, _piecewiseJsDefault.default));
parcelHelpers.export(exports, "quantize", ()=>(0, _quantizeJsDefault.default));
var _valueJs = require("./value.js");
var _valueJsDefault = parcelHelpers.interopDefault(_valueJs);
var _arrayJs = require("./array.js");
var _arrayJsDefault = parcelHelpers.interopDefault(_arrayJs);
var _basisJs = require("./basis.js");
var _basisJsDefault = parcelHelpers.interopDefault(_basisJs);
var _basisClosedJs = require("./basisClosed.js");
var _basisClosedJsDefault = parcelHelpers.interopDefault(_basisClosedJs);
var _dateJs = require("./date.js");
var _dateJsDefault = parcelHelpers.interopDefault(_dateJs);
var _discreteJs = require("./discrete.js");
var _discreteJsDefault = parcelHelpers.interopDefault(_discreteJs);
var _hueJs = require("./hue.js");
var _hueJsDefault = parcelHelpers.interopDefault(_hueJs);
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var _numberArrayJs = require("./numberArray.js");
var _numberArrayJsDefault = parcelHelpers.interopDefault(_numberArrayJs);
var _objectJs = require("./object.js");
var _objectJsDefault = parcelHelpers.interopDefault(_objectJs);
var _roundJs = require("./round.js");
var _roundJsDefault = parcelHelpers.interopDefault(_roundJs);
var _stringJs = require("./string.js");
var _stringJsDefault = parcelHelpers.interopDefault(_stringJs);
var _indexJs = require("./transform/index.js");
var _zoomJs = require("./zoom.js");
var _zoomJsDefault = parcelHelpers.interopDefault(_zoomJs);
var _rgbJs = require("./rgb.js");
var _rgbJsDefault = parcelHelpers.interopDefault(_rgbJs);
var _hslJs = require("./hsl.js");
var _hslJsDefault = parcelHelpers.interopDefault(_hslJs);
var _labJs = require("./lab.js");
var _labJsDefault = parcelHelpers.interopDefault(_labJs);
var _hclJs = require("./hcl.js");
var _hclJsDefault = parcelHelpers.interopDefault(_hclJs);
var _cubehelixJs = require("./cubehelix.js");
var _cubehelixJsDefault = parcelHelpers.interopDefault(_cubehelixJs);
var _piecewiseJs = require("./piecewise.js");
var _piecewiseJsDefault = parcelHelpers.interopDefault(_piecewiseJs);
var _quantizeJs = require("./quantize.js");
var _quantizeJsDefault = parcelHelpers.interopDefault(_quantizeJs);

},{"./value.js":false,"./array.js":false,"./basis.js":false,"./basisClosed.js":false,"./date.js":false,"./discrete.js":false,"./hue.js":false,"./number.js":"fZAq5","./numberArray.js":false,"./object.js":false,"./round.js":false,"./string.js":"Qre8m","./transform/index.js":"jDBQO","./zoom.js":"7nRsd","./rgb.js":"gHrgo","./hsl.js":false,"./lab.js":false,"./hcl.js":false,"./cubehelix.js":"7oITO","./piecewise.js":false,"./quantize.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"enhcL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "basis", ()=>basis);
parcelHelpers.export(exports, "default", ()=>function(values) {
        var n = values.length - 1;
        return function(t) {
            var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
            return basis((t - i / n) * n, v0, v1, v2, v3);
        };
    });
function basis(t1, v0, v1, v2, v3) {
    var t2 = t1 * t1, t3 = t2 * t1;
    return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gdZAO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(values) {
        var n = values.length;
        return function(t) {
            var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
            return (0, _basisJs.basis)((t - i / n) * n, v0, v1, v2, v3);
        };
    });
var _basisJs = require("./basis.js");

},{"./basis.js":"enhcL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fZAq5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, b) {
        return a = +a, b = +b, function(t) {
            return a * (1 - t) + b * t;
        };
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Qre8m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, b) {
        var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = []; // number interpolators
        // Coerce inputs to strings.
        a = a + "", b = b + "";
        // Interpolate pairs of numbers in a & b.
        while((am = reA.exec(a)) && (bm = reB.exec(b))){
            if ((bs = bm.index) > bi) {
                bs = b.slice(bi, bs);
                if (s[i]) s[i] += bs; // coalesce with previous string
                else s[++i] = bs;
            }
            if ((am = am[0]) === (bm = bm[0])) {
                if (s[i]) s[i] += bm; // coalesce with previous string
                else s[++i] = bm;
            } else {
                s[++i] = null;
                q.push({
                    i: i,
                    x: (0, _numberJsDefault.default)(am, bm)
                });
            }
            bi = reB.lastIndex;
        }
        // Add remains of b.
        if (bi < b.length) {
            bs = b.slice(bi);
            if (s[i]) s[i] += bs; // coalesce with previous string
            else s[++i] = bs;
        }
        // Special optimization for only a single match.
        // Otherwise, interpolate each of the numbers and rejoin the string.
        return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
            for(var i = 0, o; i < b; ++i)s[(o = q[i]).i] = o.x(t);
            return s.join("");
        });
    });
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
function zero(b) {
    return function() {
        return b;
    };
}
function one(b) {
    return function(t) {
        return b(t) + "";
    };
}

},{"./number.js":"fZAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jDBQO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "interpolateTransformCss", ()=>interpolateTransformCss);
parcelHelpers.export(exports, "interpolateTransformSvg", ()=>interpolateTransformSvg);
var _numberJs = require("../number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var _parseJs = require("./parse.js");
function interpolateTransform(parse, pxComma, pxParen, degParen) {
    function pop(s) {
        return s.length ? s.pop() + " " : "";
    }
    function translate(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push("translate(", null, pxComma, null, pxParen);
            q.push({
                i: i - 4,
                x: (0, _numberJsDefault.default)(xa, xb)
            }, {
                i: i - 2,
                x: (0, _numberJsDefault.default)(ya, yb)
            });
        } else if (xb || yb) s.push("translate(" + xb + pxComma + yb + pxParen);
    }
    function rotate(a, b, s, q) {
        if (a !== b) {
            if (a - b > 180) b += 360;
            else if (b - a > 180) a += 360; // shortest path
            q.push({
                i: s.push(pop(s) + "rotate(", null, degParen) - 2,
                x: (0, _numberJsDefault.default)(a, b)
            });
        } else if (b) s.push(pop(s) + "rotate(" + b + degParen);
    }
    function skewX(a, b, s, q) {
        if (a !== b) q.push({
            i: s.push(pop(s) + "skewX(", null, degParen) - 2,
            x: (0, _numberJsDefault.default)(a, b)
        });
        else if (b) s.push(pop(s) + "skewX(" + b + degParen);
    }
    function scale(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push(pop(s) + "scale(", null, ",", null, ")");
            q.push({
                i: i - 4,
                x: (0, _numberJsDefault.default)(xa, xb)
            }, {
                i: i - 2,
                x: (0, _numberJsDefault.default)(ya, yb)
            });
        } else if (xb !== 1 || yb !== 1) s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
    return function(a, b) {
        var s = [], q = []; // number interpolators
        a = parse(a), b = parse(b);
        translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
        rotate(a.rotate, b.rotate, s, q);
        skewX(a.skewX, b.skewX, s, q);
        scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
        a = b = null; // gc
        return function(t) {
            var i = -1, n = q.length, o;
            while(++i < n)s[(o = q[i]).i] = o.x(t);
            return s.join("");
        };
    };
}
var interpolateTransformCss = interpolateTransform((0, _parseJs.parseCss), "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform((0, _parseJs.parseSvg), ", ", ")", ")");

},{"../number.js":"fZAq5","./parse.js":"dwvtF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dwvtF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint-disable no-undef */ parcelHelpers.export(exports, "parseCss", ()=>parseCss);
parcelHelpers.export(exports, "parseSvg", ()=>parseSvg);
var _decomposeJs = require("./decompose.js");
var _decomposeJsDefault = parcelHelpers.interopDefault(_decomposeJs);
var svgNode;
function parseCss(value) {
    const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m.isIdentity ? (0, _decomposeJs.identity) : (0, _decomposeJsDefault.default)(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
    if (value == null) return 0, _decomposeJs.identity;
    if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate())) return 0, _decomposeJs.identity;
    value = value.matrix;
    return (0, _decomposeJsDefault.default)(value.a, value.b, value.c, value.d, value.e, value.f);
}

},{"./decompose.js":"7Ejbr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Ejbr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "identity", ()=>identity);
parcelHelpers.export(exports, "default", ()=>function(a, b, c, d, e, f) {
        var scaleX, scaleY, skewX;
        if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
        if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
        if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
        if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
        return {
            translateX: e,
            translateY: f,
            rotate: Math.atan2(b, a) * degrees,
            skewX: Math.atan(skewX) * degrees,
            scaleX: scaleX,
            scaleY: scaleY
        };
    });
var degrees = 180 / Math.PI;
var identity = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7nRsd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var epsilon2 = 1e-12;
function cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
}
function sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
}
function tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}
exports.default = function zoomRho(rho, rho2, rho4) {
    // p0 = [ux0, uy0, w0]
    // p1 = [ux1, uy1, w1]
    function zoom(p0, p1) {
        var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
        // Special case for u0 ≅ u1.
        if (d2 < epsilon2) {
            S = Math.log(w1 / w0) / rho;
            i = function(t) {
                return [
                    ux0 + t * dx,
                    uy0 + t * dy,
                    w0 * Math.exp(rho * t * S)
                ];
            };
        } else {
            var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
            S = (r1 - r0) / rho;
            i = function(t) {
                var s = t * S, coshr0 = cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
                return [
                    ux0 + u * dx,
                    uy0 + u * dy,
                    w0 * coshr0 / cosh(rho * s + r0)
                ];
            };
        }
        i.duration = S * 1000 * rho / Math.SQRT2;
        return i;
    }
    zoom.rho = function(_) {
        var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
        return zoomRho(_1, _2, _4);
    };
    return zoom;
}(Math.SQRT2, 2, 4);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gHrgo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rgbBasis", ()=>rgbBasis);
parcelHelpers.export(exports, "rgbBasisClosed", ()=>rgbBasisClosed);
var _d3Color = require("d3-color");
var _basisJs = require("./basis.js");
var _basisJsDefault = parcelHelpers.interopDefault(_basisJs);
var _basisClosedJs = require("./basisClosed.js");
var _basisClosedJsDefault = parcelHelpers.interopDefault(_basisClosedJs);
var _colorJs = require("./color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
exports.default = function rgbGamma(y) {
    var color = (0, _colorJs.gamma)(y);
    function rgb(start, end) {
        var r = color((start = (0, _d3Color.rgb)(start)).r, (end = (0, _d3Color.rgb)(end)).r), g = color(start.g, end.g), b = color(start.b, end.b), opacity = (0, _colorJsDefault.default)(start.opacity, end.opacity);
        return function(t) {
            start.r = r(t);
            start.g = g(t);
            start.b = b(t);
            start.opacity = opacity(t);
            return start + "";
        };
    }
    rgb.gamma = rgbGamma;
    return rgb;
}(1);
function rgbSpline(spline) {
    return function(colors) {
        var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color;
        for(i = 0; i < n; ++i){
            color = (0, _d3Color.rgb)(colors[i]);
            r[i] = color.r || 0;
            g[i] = color.g || 0;
            b[i] = color.b || 0;
        }
        r = spline(r);
        g = spline(g);
        b = spline(b);
        color.opacity = 1;
        return function(t) {
            color.r = r(t);
            color.g = g(t);
            color.b = b(t);
            return color + "";
        };
    };
}
var rgbBasis = rgbSpline((0, _basisJsDefault.default));
var rgbBasisClosed = rgbSpline((0, _basisClosedJsDefault.default));

},{"d3-color":"grhaa","./basis.js":"enhcL","./basisClosed.js":"gdZAO","./color.js":"1eZq9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"grhaa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "color", ()=>(0, _colorJsDefault.default));
parcelHelpers.export(exports, "rgb", ()=>(0, _colorJs.rgb));
parcelHelpers.export(exports, "hsl", ()=>(0, _colorJs.hsl));
parcelHelpers.export(exports, "lab", ()=>(0, _labJsDefault.default));
parcelHelpers.export(exports, "hcl", ()=>(0, _labJs.hcl));
parcelHelpers.export(exports, "lch", ()=>(0, _labJs.lch));
parcelHelpers.export(exports, "gray", ()=>(0, _labJs.gray));
parcelHelpers.export(exports, "cubehelix", ()=>(0, _cubehelixJsDefault.default));
var _colorJs = require("./color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _labJs = require("./lab.js");
var _labJsDefault = parcelHelpers.interopDefault(_labJs);
var _cubehelixJs = require("./cubehelix.js");
var _cubehelixJsDefault = parcelHelpers.interopDefault(_cubehelixJs);

},{"./color.js":"cNCyv","./lab.js":false,"./cubehelix.js":"805Dt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cNCyv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Color", ()=>Color);
parcelHelpers.export(exports, "darker", ()=>darker);
parcelHelpers.export(exports, "brighter", ()=>brighter);
parcelHelpers.export(exports, "default", ()=>color);
parcelHelpers.export(exports, "rgbConvert", ()=>rgbConvert);
parcelHelpers.export(exports, "rgb", ()=>rgb);
parcelHelpers.export(exports, "Rgb", ()=>Rgb);
parcelHelpers.export(exports, "hslConvert", ()=>hslConvert);
parcelHelpers.export(exports, "hsl", ()=>hsl);
var _defineJs = require("./define.js");
var _defineJsDefault = parcelHelpers.interopDefault(_defineJs);
function Color() {}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`), reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`), reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`), reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`), reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`), reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
};
(0, _defineJsDefault.default)(Color, color, {
    copy (channels) {
        return Object.assign(new this.constructor, this, channels);
    },
    displayable () {
        return this.rgb().displayable();
    },
    hex: color_formatHex,
    formatHex: color_formatHex,
    formatHex8: color_formatHex8,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
});
function color_formatHex() {
    return this.rgb().formatHex();
}
function color_formatHex8() {
    return this.rgb().formatHex8();
}
function color_formatHsl() {
    return hslConvert(this).formatHsl();
}
function color_formatRgb() {
    return this.rgb().formatRgb();
}
function color(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
     : l === 3 ? new Rgb(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
     : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
     : l === 4 ? rgba(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) // #f000
     : null // invalid hex
    ) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
     : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
     : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
     : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
     : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
     : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
     : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
     : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}
function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb;
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
}
(0, _defineJsDefault.default)(Rgb, rgb, (0, _defineJs.extend)(Color, {
    brighter (k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker (k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb () {
        return this;
    },
    clamp () {
        return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
    },
    displayable () {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: rgb_formatHex,
    formatHex: rgb_formatHex,
    formatHex8: rgb_formatHex8,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
}));
function rgb_formatHex() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa(opacity) {
    return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
    return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
    value = clampi(value);
    return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
}
function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl;
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
    if (s) {
        if (r === max) h = (g - b) / s + (g < b) * 6;
        else if (g === max) h = (b - r) / s + 2;
        else h = (r - g) / s + 4;
        s /= l < 0.5 ? max + min : 2 - max - min;
        h *= 60;
    } else s = l > 0 && l < 1 ? 0 : h;
    return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
(0, _defineJsDefault.default)(Hsl, hsl, (0, _defineJs.extend)(Color, {
    brighter (k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker (k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb () {
        var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
        return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    clamp () {
        return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
    },
    displayable () {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl () {
        const a = clampa(this.opacity);
        return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
    }
}));
function clamph(value) {
    value = (value || 0) % 360;
    return value < 0 ? value + 360 : value;
}
function clampt(value) {
    return Math.max(0, Math.min(1, value || 0));
}
/* From FvD 13.37, CSS Color Module Level 3 */ function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

},{"./define.js":"avQOe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"avQOe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(constructor, factory, prototype) {
        constructor.prototype = factory.prototype = prototype;
        prototype.constructor = constructor;
    });
parcelHelpers.export(exports, "extend", ()=>extend);
function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for(var key in definition)prototype[key] = definition[key];
    return prototype;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"805Dt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>cubehelix);
parcelHelpers.export(exports, "Cubehelix", ()=>Cubehelix);
var _defineJs = require("./define.js");
var _defineJsDefault = parcelHelpers.interopDefault(_defineJs);
var _colorJs = require("./color.js");
var _mathJs = require("./math.js");
var A = -0.14861, B = 1.78277, C = -0.29227, D = -0.90649, E = 1.97294, ED = E * D, EB = E * B, BC_DA = B * C - D * A;
function cubehelixConvert(o) {
    if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof (0, _colorJs.Rgb))) o = (0, _colorJs.rgbConvert)(o);
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB), bl = b - l, k = (E * (g - l) - C * bl) / D, s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), h = s ? Math.atan2(k, bl) * (0, _mathJs.degrees) - 120 : NaN;
    return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}
function cubehelix(h, s, l, opacity) {
    return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}
function Cubehelix(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
(0, _defineJsDefault.default)(Cubehelix, cubehelix, (0, _defineJs.extend)((0, _colorJs.Color), {
    brighter (k) {
        k = k == null ? (0, _colorJs.brighter) : Math.pow((0, _colorJs.brighter), k);
        return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
    },
    darker (k) {
        k = k == null ? (0, _colorJs.darker) : Math.pow((0, _colorJs.darker), k);
        return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
    },
    rgb () {
        var h = isNaN(this.h) ? 0 : (this.h + 120) * (0, _mathJs.radians), l = +this.l, a = isNaN(this.s) ? 0 : this.s * l * (1 - l), cosh = Math.cos(h), sinh = Math.sin(h);
        return new (0, _colorJs.Rgb)(255 * (l + a * (A * cosh + B * sinh)), 255 * (l + a * (C * cosh + D * sinh)), 255 * (l + a * (E * cosh)), this.opacity);
    }
}));

},{"./define.js":"avQOe","./color.js":"cNCyv","./math.js":"beC5A","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"beC5A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "radians", ()=>radians);
parcelHelpers.export(exports, "degrees", ()=>degrees);
const radians = Math.PI / 180;
const degrees = 180 / Math.PI;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1eZq9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hue", ()=>hue);
parcelHelpers.export(exports, "gamma", ()=>gamma);
parcelHelpers.export(exports, "default", ()=>nogamma);
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
function linear(a, d) {
    return function(t) {
        return a + t * d;
    };
}
function exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
        return Math.pow(a + t * b, y);
    };
}
function hue(a, b) {
    var d = b - a;
    return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : (0, _constantJsDefault.default)(isNaN(a) ? b : a);
}
function gamma(y) {
    return (y = +y) === 1 ? nogamma : function(a, b) {
        return b - a ? exponential(a, b, y) : (0, _constantJsDefault.default)(isNaN(a) ? b : a);
    };
}
function nogamma(a, b) {
    var d = b - a;
    return d ? linear(a, d) : (0, _constantJsDefault.default)(isNaN(a) ? b : a);
}

},{"./constant.js":"aXv76","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aXv76":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (x)=>()=>x;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7oITO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cubehelixLong", ()=>cubehelixLong);
var _d3Color = require("d3-color");
var _colorJs = require("./color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
function cubehelix(hue) {
    return function cubehelixGamma(y) {
        y = +y;
        function cubehelix(start, end) {
            var h = hue((start = (0, _d3Color.cubehelix)(start)).h, (end = (0, _d3Color.cubehelix)(end)).h), s = (0, _colorJsDefault.default)(start.s, end.s), l = (0, _colorJsDefault.default)(start.l, end.l), opacity = (0, _colorJsDefault.default)(start.opacity, end.opacity);
            return function(t) {
                start.h = h(t);
                start.s = s(t);
                start.l = l(Math.pow(t, y));
                start.opacity = opacity(t);
                return start + "";
            };
        }
        cubehelix.gamma = cubehelixGamma;
        return cubehelix;
    }(1);
}
exports.default = cubehelix((0, _colorJs.hue));
var cubehelixLong = cubehelix((0, _colorJsDefault.default));

},{"d3-color":"grhaa","./color.js":"1eZq9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Kbbg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, value) {
        var id = this._id;
        name += "";
        if (arguments.length < 2) {
            var tween = (0, _scheduleJs.get)(this.node(), id).tween;
            for(var i = 0, n = tween.length, t; i < n; ++i){
                if ((t = tween[i]).name === name) return t.value;
            }
            return null;
        }
        return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
    });
parcelHelpers.export(exports, "tweenValue", ()=>tweenValue);
var _scheduleJs = require("./schedule.js");
function tweenRemove(id, name) {
    var tween0, tween1;
    return function() {
        var schedule = (0, _scheduleJs.set)(this, id), tween = schedule.tween;
        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
            tween1 = tween0 = tween;
            for(var i = 0, n = tween1.length; i < n; ++i)if (tween1[i].name === name) {
                tween1 = tween1.slice();
                tween1.splice(i, 1);
                break;
            }
        }
        schedule.tween = tween1;
    };
}
function tweenFunction(id, name, value) {
    var tween0, tween1;
    if (typeof value !== "function") throw new Error;
    return function() {
        var schedule = (0, _scheduleJs.set)(this, id), tween = schedule.tween;
        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
            tween1 = (tween0 = tween).slice();
            for(var t = {
                name: name,
                value: value
            }, i = 0, n = tween1.length; i < n; ++i)if (tween1[i].name === name) {
                tween1[i] = t;
                break;
            }
            if (i === n) tween1.push(t);
        }
        schedule.tween = tween1;
    };
}
function tweenValue(transition, name, value) {
    var id = transition._id;
    transition.each(function() {
        var schedule = (0, _scheduleJs.set)(this, id);
        (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });
    return function(node) {
        return (0, _scheduleJs.get)(node, id).value[name];
    };
}

},{"./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"69lgs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, b) {
        var c;
        return (typeof b === "number" ? (0, _d3Interpolate.interpolateNumber) : b instanceof (0, _d3Color.color) ? (0, _d3Interpolate.interpolateRgb) : (c = (0, _d3Color.color)(b)) ? (b = c, _d3Interpolate.interpolateRgb) : (0, _d3Interpolate.interpolateString))(a, b);
    });
var _d3Color = require("d3-color");
var _d3Interpolate = require("d3-interpolate");

},{"d3-color":"grhaa","d3-interpolate":"6jJyi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1hMpn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, value) {
        var key = "attr." + name;
        if (arguments.length < 2) return (key = this.tween(key)) && key._value;
        if (value == null) return this.tween(key, null);
        if (typeof value !== "function") throw new Error;
        var fullname = (0, _d3Selection.namespace)(name);
        return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
    });
var _d3Selection = require("d3-selection");
function attrInterpolate(name, i) {
    return function(t) {
        this.setAttribute(name, i.call(this, t));
    };
}
function attrInterpolateNS(fullname, i) {
    return function(t) {
        this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
    };
}
function attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function attrTween(name, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
        return t0;
    }
    tween._value = value;
    return tween;
}

},{"d3-selection":"gn9gd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2BzOF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(value) {
        var id = this._id;
        return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id, value)) : (0, _scheduleJs.get)(this.node(), id).delay;
    });
var _scheduleJs = require("./schedule.js");
function delayFunction(id, value) {
    return function() {
        (0, _scheduleJs.init)(this, id).delay = +value.apply(this, arguments);
    };
}
function delayConstant(id, value) {
    return value = +value, function() {
        (0, _scheduleJs.init)(this, id).delay = value;
    };
}

},{"./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ei298":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(value) {
        var id = this._id;
        return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id, value)) : (0, _scheduleJs.get)(this.node(), id).duration;
    });
var _scheduleJs = require("./schedule.js");
function durationFunction(id, value) {
    return function() {
        (0, _scheduleJs.set)(this, id).duration = +value.apply(this, arguments);
    };
}
function durationConstant(id, value) {
    return value = +value, function() {
        (0, _scheduleJs.set)(this, id).duration = value;
    };
}

},{"./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lCGHM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(value) {
        var id = this._id;
        return arguments.length ? this.each(easeConstant(id, value)) : (0, _scheduleJs.get)(this.node(), id).ease;
    });
var _scheduleJs = require("./schedule.js");
function easeConstant(id, value) {
    if (typeof value !== "function") throw new Error;
    return function() {
        (0, _scheduleJs.set)(this, id).ease = value;
    };
}

},{"./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aju4f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(value) {
        if (typeof value !== "function") throw new Error;
        return this.each(easeVarying(this._id, value));
    });
var _scheduleJs = require("./schedule.js");
function easeVarying(id, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (typeof v !== "function") throw new Error;
        (0, _scheduleJs.set)(this, id).ease = v;
    };
}

},{"./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d3Uia":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(match) {
        if (typeof match !== "function") match = (0, _d3Selection.matcher)(match);
        for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
            for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i)if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
        }
        return new (0, _indexJs.Transition)(subgroups, this._parents, this._name, this._id);
    });
var _d3Selection = require("d3-selection");
var _indexJs = require("./index.js");

},{"d3-selection":"gn9gd","./index.js":"h2Srb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9odBi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(transition) {
        if (transition._id !== this._id) throw new Error;
        for(var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
            for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group0[i] || group1[i]) merge[i] = node;
        }
        for(; j < m0; ++j)merges[j] = groups0[j];
        return new (0, _indexJs.Transition)(merges, this._parents, this._name, this._id);
    });
var _indexJs = require("./index.js");

},{"./index.js":"h2Srb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3XrBC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, listener) {
        var id = this._id;
        return arguments.length < 2 ? (0, _scheduleJs.get)(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
    });
var _scheduleJs = require("./schedule.js");
function start(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t) {
        var i = t.indexOf(".");
        if (i >= 0) t = t.slice(0, i);
        return !t || t === "start";
    });
}
function onFunction(id, name, listener) {
    var on0, on1, sit = start(name) ? (0, _scheduleJs.init) : (0, _scheduleJs.set);
    return function() {
        var schedule = sit(this, id), on = schedule.on;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
        schedule.on = on1;
    };
}

},{"./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aZLkz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return this.on("end.remove", removeFunction(this._id));
    });
function removeFunction(id) {
    return function() {
        var parent = this.parentNode;
        for(var i in this.__transition)if (+i !== id) return;
        if (parent) parent.removeChild(this);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bgUUX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(select) {
        var name = this._name, id = this._id;
        if (typeof select !== "function") select = (0, _d3Selection.selector)(select);
        for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
            for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i)if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
                if ("__data__" in node) subnode.__data__ = node.__data__;
                subgroup[i] = subnode;
                (0, _scheduleJsDefault.default)(subgroup[i], name, id, i, subgroup, (0, _scheduleJs.get)(node, id));
            }
        }
        return new (0, _indexJs.Transition)(subgroups, this._parents, name, id);
    });
var _d3Selection = require("d3-selection");
var _indexJs = require("./index.js");
var _scheduleJs = require("./schedule.js");
var _scheduleJsDefault = parcelHelpers.interopDefault(_scheduleJs);

},{"d3-selection":"gn9gd","./index.js":"h2Srb","./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lqPi4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(select) {
        var name = this._name, id = this._id;
        if (typeof select !== "function") select = (0, _d3Selection.selectorAll)(select);
        for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
            for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
                for(var children = select.call(node, node.__data__, i, group), child, inherit = (0, _scheduleJs.get)(node, id), k = 0, l = children.length; k < l; ++k)if (child = children[k]) (0, _scheduleJsDefault.default)(child, name, id, k, children, inherit);
                subgroups.push(children);
                parents.push(node);
            }
        }
        return new (0, _indexJs.Transition)(subgroups, parents, name, id);
    });
var _d3Selection = require("d3-selection");
var _indexJs = require("./index.js");
var _scheduleJs = require("./schedule.js");
var _scheduleJsDefault = parcelHelpers.interopDefault(_scheduleJs);

},{"d3-selection":"gn9gd","./index.js":"h2Srb","./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iWTRA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return new Selection(this._groups, this._parents);
    });
var _d3Selection = require("d3-selection");
var Selection = (0, _d3Selection.selection).prototype.constructor;

},{"d3-selection":"gn9gd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"44QDP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, value, priority) {
        var i = (name += "") === "transform" ? (0, _d3Interpolate.interpolateTransformCss) : (0, _interpolateJsDefault.default);
        return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, (0, _tweenJs.tweenValue)(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
    });
var _d3Interpolate = require("d3-interpolate");
var _d3Selection = require("d3-selection");
var _scheduleJs = require("./schedule.js");
var _tweenJs = require("./tween.js");
var _interpolateJs = require("./interpolate.js");
var _interpolateJsDefault = parcelHelpers.interopDefault(_interpolateJs);
function styleNull(name, interpolate) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = (0, _d3Selection.style)(this, name), string1 = (this.style.removeProperty(name), (0, _d3Selection.style)(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
}
function styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function styleConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = (0, _d3Selection.style)(this, name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function styleFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = (0, _d3Selection.style)(this, name), value1 = value(this), string1 = value1 + "";
        if (value1 == null) string1 = value1 = (this.style.removeProperty(name), (0, _d3Selection.style)(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function styleMaybeRemove(id, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
    return function() {
        var schedule = (0, _scheduleJs.set)(this, id), on = schedule.on, listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
        schedule.on = on1;
    };
}

},{"d3-interpolate":"6jJyi","d3-selection":"gn9gd","./schedule.js":"de74c","./tween.js":"1Kbbg","./interpolate.js":"69lgs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"42AvL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, value, priority) {
        var key = "style." + (name += "");
        if (arguments.length < 2) return (key = this.tween(key)) && key._value;
        if (value == null) return this.tween(key, null);
        if (typeof value !== "function") throw new Error;
        return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
    });
function styleInterpolate(name, i, priority) {
    return function(t) {
        this.style.setProperty(name, i.call(this, t), priority);
    };
}
function styleTween(name, value, priority) {
    var t, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
        return t;
    }
    tween._value = value;
    return tween;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6mGEx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(value) {
        return this.tween("text", typeof value === "function" ? textFunction((0, _tweenJs.tweenValue)(this, "text", value)) : textConstant(value == null ? "" : value + ""));
    });
var _tweenJs = require("./tween.js");
function textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function textFunction(value) {
    return function() {
        var value1 = value(this);
        this.textContent = value1 == null ? "" : value1;
    };
}

},{"./tween.js":"1Kbbg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kqC5z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(value) {
        var key = "text";
        if (arguments.length < 1) return (key = this.tween(key)) && key._value;
        if (value == null) return this.tween(key, null);
        if (typeof value !== "function") throw new Error;
        return this.tween(key, textTween(value));
    });
function textInterpolate(i) {
    return function(t) {
        this.textContent = i.call(this, t);
    };
}
function textTween(value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
        return t0;
    }
    tween._value = value;
    return tween;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"50tVR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        var name = this._name, id0 = this._id, id1 = (0, _indexJs.newId)();
        for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
            for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
                var inherit = (0, _scheduleJs.get)(node, id0);
                (0, _scheduleJsDefault.default)(node, name, id1, i, group, {
                    time: inherit.time + inherit.delay + inherit.duration,
                    delay: 0,
                    duration: inherit.duration,
                    ease: inherit.ease
                });
            }
        }
        return new (0, _indexJs.Transition)(groups, this._parents, name, id1);
    });
var _indexJs = require("./index.js");
var _scheduleJs = require("./schedule.js");
var _scheduleJsDefault = parcelHelpers.interopDefault(_scheduleJs);

},{"./index.js":"h2Srb","./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ev0ir":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        var on0, on1, that = this, id = that._id, size = that.size();
        return new Promise(function(resolve, reject) {
            var cancel = {
                value: reject
            }, end = {
                value: function() {
                    if (--size === 0) resolve();
                }
            };
            that.each(function() {
                var schedule = (0, _scheduleJs.set)(this, id), on = schedule.on;
                // If this node shared a dispatch with the previous node,
                // just assign the updated shared dispatch and we’re done!
                // Otherwise, copy-on-write.
                if (on !== on0) {
                    on1 = (on0 = on).copy();
                    on1._.cancel.push(cancel);
                    on1._.interrupt.push(cancel);
                    on1._.end.push(end);
                }
                schedule.on = on1;
            });
            // The selection was empty, resolve end immediately
            if (size === 0) resolve();
        });
    });
var _scheduleJs = require("./schedule.js");

},{"./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8sCNl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "easeLinear", ()=>(0, _linearJs.linear));
parcelHelpers.export(exports, "easeQuad", ()=>(0, _quadJs.quadInOut));
parcelHelpers.export(exports, "easeQuadIn", ()=>(0, _quadJs.quadIn));
parcelHelpers.export(exports, "easeQuadOut", ()=>(0, _quadJs.quadOut));
parcelHelpers.export(exports, "easeQuadInOut", ()=>(0, _quadJs.quadInOut));
parcelHelpers.export(exports, "easeCubic", ()=>(0, _cubicJs.cubicInOut));
parcelHelpers.export(exports, "easeCubicIn", ()=>(0, _cubicJs.cubicIn));
parcelHelpers.export(exports, "easeCubicOut", ()=>(0, _cubicJs.cubicOut));
parcelHelpers.export(exports, "easeCubicInOut", ()=>(0, _cubicJs.cubicInOut));
parcelHelpers.export(exports, "easePoly", ()=>(0, _polyJs.polyInOut));
parcelHelpers.export(exports, "easePolyIn", ()=>(0, _polyJs.polyIn));
parcelHelpers.export(exports, "easePolyOut", ()=>(0, _polyJs.polyOut));
parcelHelpers.export(exports, "easePolyInOut", ()=>(0, _polyJs.polyInOut));
parcelHelpers.export(exports, "easeSin", ()=>(0, _sinJs.sinInOut));
parcelHelpers.export(exports, "easeSinIn", ()=>(0, _sinJs.sinIn));
parcelHelpers.export(exports, "easeSinOut", ()=>(0, _sinJs.sinOut));
parcelHelpers.export(exports, "easeSinInOut", ()=>(0, _sinJs.sinInOut));
parcelHelpers.export(exports, "easeExp", ()=>(0, _expJs.expInOut));
parcelHelpers.export(exports, "easeExpIn", ()=>(0, _expJs.expIn));
parcelHelpers.export(exports, "easeExpOut", ()=>(0, _expJs.expOut));
parcelHelpers.export(exports, "easeExpInOut", ()=>(0, _expJs.expInOut));
parcelHelpers.export(exports, "easeCircle", ()=>(0, _circleJs.circleInOut));
parcelHelpers.export(exports, "easeCircleIn", ()=>(0, _circleJs.circleIn));
parcelHelpers.export(exports, "easeCircleOut", ()=>(0, _circleJs.circleOut));
parcelHelpers.export(exports, "easeCircleInOut", ()=>(0, _circleJs.circleInOut));
parcelHelpers.export(exports, "easeBounce", ()=>(0, _bounceJs.bounceOut));
parcelHelpers.export(exports, "easeBounceIn", ()=>(0, _bounceJs.bounceIn));
parcelHelpers.export(exports, "easeBounceOut", ()=>(0, _bounceJs.bounceOut));
parcelHelpers.export(exports, "easeBounceInOut", ()=>(0, _bounceJs.bounceInOut));
parcelHelpers.export(exports, "easeBack", ()=>(0, _backJs.backInOut));
parcelHelpers.export(exports, "easeBackIn", ()=>(0, _backJs.backIn));
parcelHelpers.export(exports, "easeBackOut", ()=>(0, _backJs.backOut));
parcelHelpers.export(exports, "easeBackInOut", ()=>(0, _backJs.backInOut));
parcelHelpers.export(exports, "easeElastic", ()=>(0, _elasticJs.elasticOut));
parcelHelpers.export(exports, "easeElasticIn", ()=>(0, _elasticJs.elasticIn));
parcelHelpers.export(exports, "easeElasticOut", ()=>(0, _elasticJs.elasticOut));
parcelHelpers.export(exports, "easeElasticInOut", ()=>(0, _elasticJs.elasticInOut));
var _linearJs = require("./linear.js");
var _quadJs = require("./quad.js");
var _cubicJs = require("./cubic.js");
var _polyJs = require("./poly.js");
var _sinJs = require("./sin.js");
var _expJs = require("./exp.js");
var _circleJs = require("./circle.js");
var _bounceJs = require("./bounce.js");
var _backJs = require("./back.js");
var _elasticJs = require("./elastic.js");

},{"./linear.js":false,"./quad.js":false,"./cubic.js":"cGjk7","./poly.js":false,"./sin.js":false,"./exp.js":false,"./circle.js":false,"./bounce.js":false,"./back.js":false,"./elastic.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cGjk7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cubicIn", ()=>cubicIn);
parcelHelpers.export(exports, "cubicOut", ()=>cubicOut);
parcelHelpers.export(exports, "cubicInOut", ()=>cubicInOut);
function cubicIn(t) {
    return t * t * t;
}
function cubicOut(t) {
    return --t * t * t + 1;
}
function cubicInOut(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7F96J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Tooltip {
    constructor(node, { content }){
        this.tooltip = node.append("div").attr("class", "tooltip card").on("click", ()=>this.hide());
        this.content = content;
    }
    show({ pageX, pageY }, data) {
        const x = window.innerWidth / 2 < pageX ? "-125%" : "25%";
        const y = window.innerHeight / 2 < pageY ? "-125%" : "25%";
        this.tooltip.style("opacity", 1).style("top", `${pageY}px`).style("left", `${pageX}px`).style("transform", `translate(${x}, ${y})`).html(this.content(data));
    }
    hide() {
        this.tooltip.style("opacity", 0);
    }
}
exports.default = Tooltip;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bTBbp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _icons = require("./icons");
class Theme {
    constructor(node){
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") document.documentElement.setAttribute("theme", "dark");
        else if (storedTheme === "light") document.documentElement.setAttribute("theme", "light");
        const currentTheme = document.documentElement.getAttribute("theme");
        this.prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        this.container = node.append("div").attr("class", "theme card").append("button").attr("class", "control-button").on("click", (e)=>this.onClick(e)).html(currentTheme ? currentTheme === "light" ? (0, _icons.moonBtn) : (0, _icons.sunBtn) : this.prefersDarkScheme.matches ? (0, _icons.sunBtn) : (0, _icons.moonBtn));
    }
    onClick() {
        const prevTheme = document.documentElement.getAttribute("theme");
        let theme = null;
        if (!prevTheme) {
            theme = this.prefersDarkScheme.matches ? "light" : "dark";
            document.documentElement.setAttribute("theme", theme);
        } else {
            theme = prevTheme === "dark" ? "light" : "dark";
            document.documentElement.setAttribute("theme", theme);
        }
        localStorage.setItem("theme", theme);
        this.container.html(theme === "light" ? (0, _icons.moonBtn) : (0, _icons.sunBtn));
    }
}
exports.default = Theme;

},{"./icons":"khRpZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"01Z75":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "geoArea", ()=>(0, _areaJsDefault.default));
parcelHelpers.export(exports, "geoBounds", ()=>(0, _boundsJsDefault.default));
parcelHelpers.export(exports, "geoCentroid", ()=>(0, _centroidJsDefault.default));
parcelHelpers.export(exports, "geoCircle", ()=>(0, _circleJsDefault.default));
parcelHelpers.export(exports, "geoClipAntimeridian", ()=>(0, _antimeridianJsDefault.default));
parcelHelpers.export(exports, "geoClipCircle", ()=>(0, _circleJsDefault1.default));
parcelHelpers.export(exports, "geoClipExtent", ()=>(0, _extentJsDefault.default)) // DEPRECATED! Use d3.geoIdentity().clipExtent(…).
;
parcelHelpers.export(exports, "geoClipRectangle", ()=>(0, _rectangleJsDefault.default));
parcelHelpers.export(exports, "geoContains", ()=>(0, _containsJsDefault.default));
parcelHelpers.export(exports, "geoDistance", ()=>(0, _distanceJsDefault.default));
parcelHelpers.export(exports, "geoGraticule", ()=>(0, _graticuleJsDefault.default));
parcelHelpers.export(exports, "geoGraticule10", ()=>(0, _graticuleJs.graticule10));
parcelHelpers.export(exports, "geoInterpolate", ()=>(0, _interpolateJsDefault.default));
parcelHelpers.export(exports, "geoLength", ()=>(0, _lengthJsDefault.default));
parcelHelpers.export(exports, "geoPath", ()=>(0, _indexJsDefault.default));
parcelHelpers.export(exports, "geoAlbers", ()=>(0, _albersJsDefault.default));
parcelHelpers.export(exports, "geoAlbersUsa", ()=>(0, _albersUsaJsDefault.default));
parcelHelpers.export(exports, "geoAzimuthalEqualArea", ()=>(0, _azimuthalEqualAreaJsDefault.default));
parcelHelpers.export(exports, "geoAzimuthalEqualAreaRaw", ()=>(0, _azimuthalEqualAreaJs.azimuthalEqualAreaRaw));
parcelHelpers.export(exports, "geoAzimuthalEquidistant", ()=>(0, _azimuthalEquidistantJsDefault.default));
parcelHelpers.export(exports, "geoAzimuthalEquidistantRaw", ()=>(0, _azimuthalEquidistantJs.azimuthalEquidistantRaw));
parcelHelpers.export(exports, "geoConicConformal", ()=>(0, _conicConformalJsDefault.default));
parcelHelpers.export(exports, "geoConicConformalRaw", ()=>(0, _conicConformalJs.conicConformalRaw));
parcelHelpers.export(exports, "geoConicEqualArea", ()=>(0, _conicEqualAreaJsDefault.default));
parcelHelpers.export(exports, "geoConicEqualAreaRaw", ()=>(0, _conicEqualAreaJs.conicEqualAreaRaw));
parcelHelpers.export(exports, "geoConicEquidistant", ()=>(0, _conicEquidistantJsDefault.default));
parcelHelpers.export(exports, "geoConicEquidistantRaw", ()=>(0, _conicEquidistantJs.conicEquidistantRaw));
parcelHelpers.export(exports, "geoEqualEarth", ()=>(0, _equalEarthJsDefault.default));
parcelHelpers.export(exports, "geoEqualEarthRaw", ()=>(0, _equalEarthJs.equalEarthRaw));
parcelHelpers.export(exports, "geoEquirectangular", ()=>(0, _equirectangularJsDefault.default));
parcelHelpers.export(exports, "geoEquirectangularRaw", ()=>(0, _equirectangularJs.equirectangularRaw));
parcelHelpers.export(exports, "geoGnomonic", ()=>(0, _gnomonicJsDefault.default));
parcelHelpers.export(exports, "geoGnomonicRaw", ()=>(0, _gnomonicJs.gnomonicRaw));
parcelHelpers.export(exports, "geoIdentity", ()=>(0, _identityJsDefault.default));
parcelHelpers.export(exports, "geoProjection", ()=>(0, _indexJsDefault1.default));
parcelHelpers.export(exports, "geoProjectionMutator", ()=>(0, _indexJs1.projectionMutator));
parcelHelpers.export(exports, "geoMercator", ()=>(0, _mercatorJsDefault.default));
parcelHelpers.export(exports, "geoMercatorRaw", ()=>(0, _mercatorJs.mercatorRaw));
parcelHelpers.export(exports, "geoNaturalEarth1", ()=>(0, _naturalEarth1JsDefault.default));
parcelHelpers.export(exports, "geoNaturalEarth1Raw", ()=>(0, _naturalEarth1Js.naturalEarth1Raw));
parcelHelpers.export(exports, "geoOrthographic", ()=>(0, _orthographicJsDefault.default));
parcelHelpers.export(exports, "geoOrthographicRaw", ()=>(0, _orthographicJs.orthographicRaw));
parcelHelpers.export(exports, "geoStereographic", ()=>(0, _stereographicJsDefault.default));
parcelHelpers.export(exports, "geoStereographicRaw", ()=>(0, _stereographicJs.stereographicRaw));
parcelHelpers.export(exports, "geoTransverseMercator", ()=>(0, _transverseMercatorJsDefault.default));
parcelHelpers.export(exports, "geoTransverseMercatorRaw", ()=>(0, _transverseMercatorJs.transverseMercatorRaw));
parcelHelpers.export(exports, "geoRotation", ()=>(0, _rotationJsDefault.default));
parcelHelpers.export(exports, "geoStream", ()=>(0, _streamJsDefault.default));
parcelHelpers.export(exports, "geoTransform", ()=>(0, _transformJsDefault.default));
var _areaJs = require("./area.js");
var _areaJsDefault = parcelHelpers.interopDefault(_areaJs);
var _boundsJs = require("./bounds.js");
var _boundsJsDefault = parcelHelpers.interopDefault(_boundsJs);
var _centroidJs = require("./centroid.js");
var _centroidJsDefault = parcelHelpers.interopDefault(_centroidJs);
var _circleJs = require("./circle.js");
var _circleJsDefault = parcelHelpers.interopDefault(_circleJs);
var _antimeridianJs = require("./clip/antimeridian.js");
var _antimeridianJsDefault = parcelHelpers.interopDefault(_antimeridianJs);
var _circleJs1 = require("./clip/circle.js");
var _circleJsDefault1 = parcelHelpers.interopDefault(_circleJs1);
var _extentJs = require("./clip/extent.js");
var _extentJsDefault = parcelHelpers.interopDefault(_extentJs);
var _rectangleJs = require("./clip/rectangle.js");
var _rectangleJsDefault = parcelHelpers.interopDefault(_rectangleJs);
var _containsJs = require("./contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _distanceJs = require("./distance.js");
var _distanceJsDefault = parcelHelpers.interopDefault(_distanceJs);
var _graticuleJs = require("./graticule.js");
var _graticuleJsDefault = parcelHelpers.interopDefault(_graticuleJs);
var _interpolateJs = require("./interpolate.js");
var _interpolateJsDefault = parcelHelpers.interopDefault(_interpolateJs);
var _lengthJs = require("./length.js");
var _lengthJsDefault = parcelHelpers.interopDefault(_lengthJs);
var _indexJs = require("./path/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _albersJs = require("./projection/albers.js");
var _albersJsDefault = parcelHelpers.interopDefault(_albersJs);
var _albersUsaJs = require("./projection/albersUsa.js");
var _albersUsaJsDefault = parcelHelpers.interopDefault(_albersUsaJs);
var _azimuthalEqualAreaJs = require("./projection/azimuthalEqualArea.js");
var _azimuthalEqualAreaJsDefault = parcelHelpers.interopDefault(_azimuthalEqualAreaJs);
var _azimuthalEquidistantJs = require("./projection/azimuthalEquidistant.js");
var _azimuthalEquidistantJsDefault = parcelHelpers.interopDefault(_azimuthalEquidistantJs);
var _conicConformalJs = require("./projection/conicConformal.js");
var _conicConformalJsDefault = parcelHelpers.interopDefault(_conicConformalJs);
var _conicEqualAreaJs = require("./projection/conicEqualArea.js");
var _conicEqualAreaJsDefault = parcelHelpers.interopDefault(_conicEqualAreaJs);
var _conicEquidistantJs = require("./projection/conicEquidistant.js");
var _conicEquidistantJsDefault = parcelHelpers.interopDefault(_conicEquidistantJs);
var _equalEarthJs = require("./projection/equalEarth.js");
var _equalEarthJsDefault = parcelHelpers.interopDefault(_equalEarthJs);
var _equirectangularJs = require("./projection/equirectangular.js");
var _equirectangularJsDefault = parcelHelpers.interopDefault(_equirectangularJs);
var _gnomonicJs = require("./projection/gnomonic.js");
var _gnomonicJsDefault = parcelHelpers.interopDefault(_gnomonicJs);
var _identityJs = require("./projection/identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _indexJs1 = require("./projection/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _mercatorJs = require("./projection/mercator.js");
var _mercatorJsDefault = parcelHelpers.interopDefault(_mercatorJs);
var _naturalEarth1Js = require("./projection/naturalEarth1.js");
var _naturalEarth1JsDefault = parcelHelpers.interopDefault(_naturalEarth1Js);
var _orthographicJs = require("./projection/orthographic.js");
var _orthographicJsDefault = parcelHelpers.interopDefault(_orthographicJs);
var _stereographicJs = require("./projection/stereographic.js");
var _stereographicJsDefault = parcelHelpers.interopDefault(_stereographicJs);
var _transverseMercatorJs = require("./projection/transverseMercator.js");
var _transverseMercatorJsDefault = parcelHelpers.interopDefault(_transverseMercatorJs);
var _rotationJs = require("./rotation.js");
var _rotationJsDefault = parcelHelpers.interopDefault(_rotationJs);
var _streamJs = require("./stream.js");
var _streamJsDefault = parcelHelpers.interopDefault(_streamJs);
var _transformJs = require("./transform.js");
var _transformJsDefault = parcelHelpers.interopDefault(_transformJs);

},{"./area.js":false,"./bounds.js":false,"./centroid.js":false,"./circle.js":false,"./clip/antimeridian.js":false,"./clip/circle.js":false,"./clip/extent.js":false,"./clip/rectangle.js":false,"./contains.js":false,"./distance.js":false,"./graticule.js":false,"./interpolate.js":false,"./length.js":false,"./path/index.js":"lnhfi","./projection/albers.js":false,"./projection/albersUsa.js":false,"./projection/azimuthalEqualArea.js":false,"./projection/azimuthalEquidistant.js":false,"./projection/conicConformal.js":false,"./projection/conicEqualArea.js":false,"./projection/conicEquidistant.js":false,"./projection/equalEarth.js":false,"./projection/equirectangular.js":false,"./projection/gnomonic.js":false,"./projection/identity.js":false,"./projection/index.js":false,"./projection/mercator.js":false,"./projection/naturalEarth1.js":false,"./projection/orthographic.js":false,"./projection/stereographic.js":false,"./projection/transverseMercator.js":false,"./rotation.js":false,"./stream.js":false,"./transform.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lnhfi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(projection, context) {
        let digits = 3, pointRadius = 4.5, projectionStream, contextStream;
        function path(object) {
            if (object) {
                if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
                (0, _streamJsDefault.default)(object, projectionStream(contextStream));
            }
            return contextStream.result();
        }
        path.area = function(object) {
            (0, _streamJsDefault.default)(object, projectionStream((0, _areaJsDefault.default)));
            return (0, _areaJsDefault.default).result();
        };
        path.measure = function(object) {
            (0, _streamJsDefault.default)(object, projectionStream((0, _measureJsDefault.default)));
            return (0, _measureJsDefault.default).result();
        };
        path.bounds = function(object) {
            (0, _streamJsDefault.default)(object, projectionStream((0, _boundsJsDefault.default)));
            return (0, _boundsJsDefault.default).result();
        };
        path.centroid = function(object) {
            (0, _streamJsDefault.default)(object, projectionStream((0, _centroidJsDefault.default)));
            return (0, _centroidJsDefault.default).result();
        };
        path.projection = function(_) {
            if (!arguments.length) return projection;
            projectionStream = _ == null ? (projection = null, _identityJsDefault.default) : (projection = _).stream;
            return path;
        };
        path.context = function(_) {
            if (!arguments.length) return context;
            contextStream = _ == null ? (context = null, new (0, _stringJsDefault.default)(digits)) : new (0, _contextJsDefault.default)(context = _);
            if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
            return path;
        };
        path.pointRadius = function(_) {
            if (!arguments.length) return pointRadius;
            pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
            return path;
        };
        path.digits = function(_) {
            if (!arguments.length) return digits;
            if (_ == null) digits = null;
            else {
                const d = Math.floor(_);
                if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
                digits = d;
            }
            if (context === null) contextStream = new (0, _stringJsDefault.default)(digits);
            return path;
        };
        return path.projection(projection).digits(digits).context(context);
    });
var _identityJs = require("../identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _streamJs = require("../stream.js");
var _streamJsDefault = parcelHelpers.interopDefault(_streamJs);
var _areaJs = require("./area.js");
var _areaJsDefault = parcelHelpers.interopDefault(_areaJs);
var _boundsJs = require("./bounds.js");
var _boundsJsDefault = parcelHelpers.interopDefault(_boundsJs);
var _centroidJs = require("./centroid.js");
var _centroidJsDefault = parcelHelpers.interopDefault(_centroidJs);
var _contextJs = require("./context.js");
var _contextJsDefault = parcelHelpers.interopDefault(_contextJs);
var _measureJs = require("./measure.js");
var _measureJsDefault = parcelHelpers.interopDefault(_measureJs);
var _stringJs = require("./string.js");
var _stringJsDefault = parcelHelpers.interopDefault(_stringJs);

},{"../identity.js":"buAWG","../stream.js":"lpKxD","./area.js":"esEys","./bounds.js":"6inQS","./centroid.js":"hWsH1","./context.js":"bBEPS","./measure.js":"kxo1f","./string.js":"7QFxp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"buAWG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (x)=>x;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lpKxD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(object, stream) {
        if (object && streamObjectType.hasOwnProperty(object.type)) streamObjectType[object.type](object, stream);
        else streamGeometry(object, stream);
    });
function streamGeometry(geometry, stream) {
    if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) streamGeometryType[geometry.type](geometry, stream);
}
var streamObjectType = {
    Feature: function(object, stream) {
        streamGeometry(object.geometry, stream);
    },
    FeatureCollection: function(object, stream) {
        var features = object.features, i = -1, n = features.length;
        while(++i < n)streamGeometry(features[i].geometry, stream);
    }
};
var streamGeometryType = {
    Sphere: function(object, stream) {
        stream.sphere();
    },
    Point: function(object, stream) {
        object = object.coordinates;
        stream.point(object[0], object[1], object[2]);
    },
    MultiPoint: function(object, stream) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)object = coordinates[i], stream.point(object[0], object[1], object[2]);
    },
    LineString: function(object, stream) {
        streamLine(object.coordinates, stream, 0);
    },
    MultiLineString: function(object, stream) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)streamLine(coordinates[i], stream, 0);
    },
    Polygon: function(object, stream) {
        streamPolygon(object.coordinates, stream);
    },
    MultiPolygon: function(object, stream) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)streamPolygon(coordinates[i], stream);
    },
    GeometryCollection: function(object, stream) {
        var geometries = object.geometries, i = -1, n = geometries.length;
        while(++i < n)streamGeometry(geometries[i], stream);
    }
};
function streamLine(coordinates, stream, closed) {
    var i = -1, n = coordinates.length - closed, coordinate;
    stream.lineStart();
    while(++i < n)coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
    stream.lineEnd();
}
function streamPolygon(coordinates, stream) {
    var i = -1, n = coordinates.length;
    stream.polygonStart();
    while(++i < n)streamLine(coordinates[i], stream, 1);
    stream.polygonEnd();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"esEys":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
var _mathJs = require("../math.js");
var _noopJs = require("../noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
var areaSum = new (0, _d3Array.Adder)(), areaRingSum = new (0, _d3Array.Adder)(), x00, y00, x0, y0;
var areaStream = {
    point: (0, _noopJsDefault.default),
    lineStart: (0, _noopJsDefault.default),
    lineEnd: (0, _noopJsDefault.default),
    polygonStart: function() {
        areaStream.lineStart = areaRingStart;
        areaStream.lineEnd = areaRingEnd;
    },
    polygonEnd: function() {
        areaStream.lineStart = areaStream.lineEnd = areaStream.point = (0, _noopJsDefault.default);
        areaSum.add((0, _mathJs.abs)(areaRingSum));
        areaRingSum = new (0, _d3Array.Adder)();
    },
    result: function() {
        var area = areaSum / 2;
        areaSum = new (0, _d3Array.Adder)();
        return area;
    }
};
function areaRingStart() {
    areaStream.point = areaPointFirst;
}
function areaPointFirst(x, y) {
    areaStream.point = areaPoint;
    x00 = x0 = x, y00 = y0 = y;
}
function areaPoint(x, y) {
    areaRingSum.add(y0 * x - x0 * y);
    x0 = x, y0 = y;
}
function areaRingEnd() {
    areaPoint(x00, y00);
}
exports.default = areaStream;

},{"d3-array":"1yX2W","../math.js":"8TMeU","../noop.js":"bROOt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1yX2W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bisect", ()=>(0, _bisectJsDefault.default));
parcelHelpers.export(exports, "bisectRight", ()=>(0, _bisectJs.bisectRight));
parcelHelpers.export(exports, "bisectLeft", ()=>(0, _bisectJs.bisectLeft));
parcelHelpers.export(exports, "bisectCenter", ()=>(0, _bisectJs.bisectCenter));
parcelHelpers.export(exports, "ascending", ()=>(0, _ascendingJsDefault.default));
parcelHelpers.export(exports, "bisector", ()=>(0, _bisectorJsDefault.default));
parcelHelpers.export(exports, "blur", ()=>(0, _blurJs.blur));
parcelHelpers.export(exports, "blur2", ()=>(0, _blurJs.blur2));
parcelHelpers.export(exports, "blurImage", ()=>(0, _blurJs.blurImage));
parcelHelpers.export(exports, "count", ()=>(0, _countJsDefault.default));
parcelHelpers.export(exports, "cross", ()=>(0, _crossJsDefault.default));
parcelHelpers.export(exports, "cumsum", ()=>(0, _cumsumJsDefault.default));
parcelHelpers.export(exports, "descending", ()=>(0, _descendingJsDefault.default));
parcelHelpers.export(exports, "deviation", ()=>(0, _deviationJsDefault.default));
parcelHelpers.export(exports, "extent", ()=>(0, _extentJsDefault.default));
parcelHelpers.export(exports, "Adder", ()=>(0, _fsumJs.Adder));
parcelHelpers.export(exports, "fsum", ()=>(0, _fsumJs.fsum));
parcelHelpers.export(exports, "fcumsum", ()=>(0, _fsumJs.fcumsum));
parcelHelpers.export(exports, "group", ()=>(0, _groupJsDefault.default));
parcelHelpers.export(exports, "flatGroup", ()=>(0, _groupJs.flatGroup));
parcelHelpers.export(exports, "flatRollup", ()=>(0, _groupJs.flatRollup));
parcelHelpers.export(exports, "groups", ()=>(0, _groupJs.groups));
parcelHelpers.export(exports, "index", ()=>(0, _groupJs.index));
parcelHelpers.export(exports, "indexes", ()=>(0, _groupJs.indexes));
parcelHelpers.export(exports, "rollup", ()=>(0, _groupJs.rollup));
parcelHelpers.export(exports, "rollups", ()=>(0, _groupJs.rollups));
parcelHelpers.export(exports, "groupSort", ()=>(0, _groupSortJsDefault.default));
parcelHelpers.export(exports, "bin", ()=>(0, _binJsDefault.default)) // Deprecated; use bin.
;
parcelHelpers.export(exports, "histogram", ()=>(0, _binJsDefault.default));
parcelHelpers.export(exports, "thresholdFreedmanDiaconis", ()=>(0, _freedmanDiaconisJsDefault.default));
parcelHelpers.export(exports, "thresholdScott", ()=>(0, _scottJsDefault.default));
parcelHelpers.export(exports, "thresholdSturges", ()=>(0, _sturgesJsDefault.default));
parcelHelpers.export(exports, "max", ()=>(0, _maxJsDefault.default));
parcelHelpers.export(exports, "maxIndex", ()=>(0, _maxIndexJsDefault.default));
parcelHelpers.export(exports, "mean", ()=>(0, _meanJsDefault.default));
parcelHelpers.export(exports, "median", ()=>(0, _medianJsDefault.default));
parcelHelpers.export(exports, "medianIndex", ()=>(0, _medianJs.medianIndex));
parcelHelpers.export(exports, "merge", ()=>(0, _mergeJsDefault.default));
parcelHelpers.export(exports, "min", ()=>(0, _minJsDefault.default));
parcelHelpers.export(exports, "minIndex", ()=>(0, _minIndexJsDefault.default));
parcelHelpers.export(exports, "mode", ()=>(0, _modeJsDefault.default));
parcelHelpers.export(exports, "nice", ()=>(0, _niceJsDefault.default));
parcelHelpers.export(exports, "pairs", ()=>(0, _pairsJsDefault.default));
parcelHelpers.export(exports, "permute", ()=>(0, _permuteJsDefault.default));
parcelHelpers.export(exports, "quantile", ()=>(0, _quantileJsDefault.default));
parcelHelpers.export(exports, "quantileIndex", ()=>(0, _quantileJs.quantileIndex));
parcelHelpers.export(exports, "quantileSorted", ()=>(0, _quantileJs.quantileSorted));
parcelHelpers.export(exports, "quickselect", ()=>(0, _quickselectJsDefault.default));
parcelHelpers.export(exports, "range", ()=>(0, _rangeJsDefault.default));
parcelHelpers.export(exports, "rank", ()=>(0, _rankJsDefault.default));
parcelHelpers.export(exports, "least", ()=>(0, _leastJsDefault.default));
parcelHelpers.export(exports, "leastIndex", ()=>(0, _leastIndexJsDefault.default));
parcelHelpers.export(exports, "greatest", ()=>(0, _greatestJsDefault.default));
parcelHelpers.export(exports, "greatestIndex", ()=>(0, _greatestIndexJsDefault.default));
parcelHelpers.export(exports, "scan", ()=>(0, _scanJsDefault.default)) // Deprecated; use leastIndex.
;
parcelHelpers.export(exports, "shuffle", ()=>(0, _shuffleJsDefault.default));
parcelHelpers.export(exports, "shuffler", ()=>(0, _shuffleJs.shuffler));
parcelHelpers.export(exports, "sum", ()=>(0, _sumJsDefault.default));
parcelHelpers.export(exports, "ticks", ()=>(0, _ticksJsDefault.default));
parcelHelpers.export(exports, "tickIncrement", ()=>(0, _ticksJs.tickIncrement));
parcelHelpers.export(exports, "tickStep", ()=>(0, _ticksJs.tickStep));
parcelHelpers.export(exports, "transpose", ()=>(0, _transposeJsDefault.default));
parcelHelpers.export(exports, "variance", ()=>(0, _varianceJsDefault.default));
parcelHelpers.export(exports, "zip", ()=>(0, _zipJsDefault.default));
parcelHelpers.export(exports, "every", ()=>(0, _everyJsDefault.default));
parcelHelpers.export(exports, "some", ()=>(0, _someJsDefault.default));
parcelHelpers.export(exports, "filter", ()=>(0, _filterJsDefault.default));
parcelHelpers.export(exports, "map", ()=>(0, _mapJsDefault.default));
parcelHelpers.export(exports, "reduce", ()=>(0, _reduceJsDefault.default));
parcelHelpers.export(exports, "reverse", ()=>(0, _reverseJsDefault.default));
parcelHelpers.export(exports, "sort", ()=>(0, _sortJsDefault.default));
parcelHelpers.export(exports, "difference", ()=>(0, _differenceJsDefault.default));
parcelHelpers.export(exports, "disjoint", ()=>(0, _disjointJsDefault.default));
parcelHelpers.export(exports, "intersection", ()=>(0, _intersectionJsDefault.default));
parcelHelpers.export(exports, "subset", ()=>(0, _subsetJsDefault.default));
parcelHelpers.export(exports, "superset", ()=>(0, _supersetJsDefault.default));
parcelHelpers.export(exports, "union", ()=>(0, _unionJsDefault.default));
parcelHelpers.export(exports, "InternMap", ()=>(0, _internmap.InternMap));
parcelHelpers.export(exports, "InternSet", ()=>(0, _internmap.InternSet));
var _bisectJs = require("./bisect.js");
var _bisectJsDefault = parcelHelpers.interopDefault(_bisectJs);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
var _bisectorJs = require("./bisector.js");
var _bisectorJsDefault = parcelHelpers.interopDefault(_bisectorJs);
var _blurJs = require("./blur.js");
var _countJs = require("./count.js");
var _countJsDefault = parcelHelpers.interopDefault(_countJs);
var _crossJs = require("./cross.js");
var _crossJsDefault = parcelHelpers.interopDefault(_crossJs);
var _cumsumJs = require("./cumsum.js");
var _cumsumJsDefault = parcelHelpers.interopDefault(_cumsumJs);
var _descendingJs = require("./descending.js");
var _descendingJsDefault = parcelHelpers.interopDefault(_descendingJs);
var _deviationJs = require("./deviation.js");
var _deviationJsDefault = parcelHelpers.interopDefault(_deviationJs);
var _extentJs = require("./extent.js");
var _extentJsDefault = parcelHelpers.interopDefault(_extentJs);
var _fsumJs = require("./fsum.js");
var _groupJs = require("./group.js");
var _groupJsDefault = parcelHelpers.interopDefault(_groupJs);
var _groupSortJs = require("./groupSort.js");
var _groupSortJsDefault = parcelHelpers.interopDefault(_groupSortJs);
var _binJs = require("./bin.js");
var _binJsDefault = parcelHelpers.interopDefault(_binJs);
var _freedmanDiaconisJs = require("./threshold/freedmanDiaconis.js");
var _freedmanDiaconisJsDefault = parcelHelpers.interopDefault(_freedmanDiaconisJs);
var _scottJs = require("./threshold/scott.js");
var _scottJsDefault = parcelHelpers.interopDefault(_scottJs);
var _sturgesJs = require("./threshold/sturges.js");
var _sturgesJsDefault = parcelHelpers.interopDefault(_sturgesJs);
var _maxJs = require("./max.js");
var _maxJsDefault = parcelHelpers.interopDefault(_maxJs);
var _maxIndexJs = require("./maxIndex.js");
var _maxIndexJsDefault = parcelHelpers.interopDefault(_maxIndexJs);
var _meanJs = require("./mean.js");
var _meanJsDefault = parcelHelpers.interopDefault(_meanJs);
var _medianJs = require("./median.js");
var _medianJsDefault = parcelHelpers.interopDefault(_medianJs);
var _mergeJs = require("./merge.js");
var _mergeJsDefault = parcelHelpers.interopDefault(_mergeJs);
var _minJs = require("./min.js");
var _minJsDefault = parcelHelpers.interopDefault(_minJs);
var _minIndexJs = require("./minIndex.js");
var _minIndexJsDefault = parcelHelpers.interopDefault(_minIndexJs);
var _modeJs = require("./mode.js");
var _modeJsDefault = parcelHelpers.interopDefault(_modeJs);
var _niceJs = require("./nice.js");
var _niceJsDefault = parcelHelpers.interopDefault(_niceJs);
var _pairsJs = require("./pairs.js");
var _pairsJsDefault = parcelHelpers.interopDefault(_pairsJs);
var _permuteJs = require("./permute.js");
var _permuteJsDefault = parcelHelpers.interopDefault(_permuteJs);
var _quantileJs = require("./quantile.js");
var _quantileJsDefault = parcelHelpers.interopDefault(_quantileJs);
var _quickselectJs = require("./quickselect.js");
var _quickselectJsDefault = parcelHelpers.interopDefault(_quickselectJs);
var _rangeJs = require("./range.js");
var _rangeJsDefault = parcelHelpers.interopDefault(_rangeJs);
var _rankJs = require("./rank.js");
var _rankJsDefault = parcelHelpers.interopDefault(_rankJs);
var _leastJs = require("./least.js");
var _leastJsDefault = parcelHelpers.interopDefault(_leastJs);
var _leastIndexJs = require("./leastIndex.js");
var _leastIndexJsDefault = parcelHelpers.interopDefault(_leastIndexJs);
var _greatestJs = require("./greatest.js");
var _greatestJsDefault = parcelHelpers.interopDefault(_greatestJs);
var _greatestIndexJs = require("./greatestIndex.js");
var _greatestIndexJsDefault = parcelHelpers.interopDefault(_greatestIndexJs);
var _scanJs = require("./scan.js");
var _scanJsDefault = parcelHelpers.interopDefault(_scanJs);
var _shuffleJs = require("./shuffle.js");
var _shuffleJsDefault = parcelHelpers.interopDefault(_shuffleJs);
var _sumJs = require("./sum.js");
var _sumJsDefault = parcelHelpers.interopDefault(_sumJs);
var _ticksJs = require("./ticks.js");
var _ticksJsDefault = parcelHelpers.interopDefault(_ticksJs);
var _transposeJs = require("./transpose.js");
var _transposeJsDefault = parcelHelpers.interopDefault(_transposeJs);
var _varianceJs = require("./variance.js");
var _varianceJsDefault = parcelHelpers.interopDefault(_varianceJs);
var _zipJs = require("./zip.js");
var _zipJsDefault = parcelHelpers.interopDefault(_zipJs);
var _everyJs = require("./every.js");
var _everyJsDefault = parcelHelpers.interopDefault(_everyJs);
var _someJs = require("./some.js");
var _someJsDefault = parcelHelpers.interopDefault(_someJs);
var _filterJs = require("./filter.js");
var _filterJsDefault = parcelHelpers.interopDefault(_filterJs);
var _mapJs = require("./map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _reduceJs = require("./reduce.js");
var _reduceJsDefault = parcelHelpers.interopDefault(_reduceJs);
var _reverseJs = require("./reverse.js");
var _reverseJsDefault = parcelHelpers.interopDefault(_reverseJs);
var _sortJs = require("./sort.js");
var _sortJsDefault = parcelHelpers.interopDefault(_sortJs);
var _differenceJs = require("./difference.js");
var _differenceJsDefault = parcelHelpers.interopDefault(_differenceJs);
var _disjointJs = require("./disjoint.js");
var _disjointJsDefault = parcelHelpers.interopDefault(_disjointJs);
var _intersectionJs = require("./intersection.js");
var _intersectionJsDefault = parcelHelpers.interopDefault(_intersectionJs);
var _subsetJs = require("./subset.js");
var _subsetJsDefault = parcelHelpers.interopDefault(_subsetJs);
var _supersetJs = require("./superset.js");
var _supersetJsDefault = parcelHelpers.interopDefault(_supersetJs);
var _unionJs = require("./union.js");
var _unionJsDefault = parcelHelpers.interopDefault(_unionJs);
var _internmap = require("internmap");

},{"./bisect.js":false,"./ascending.js":"2iZSL","./bisector.js":false,"./blur.js":false,"./count.js":false,"./cross.js":false,"./cumsum.js":false,"./descending.js":false,"./deviation.js":false,"./extent.js":false,"./fsum.js":"7NEFi","./group.js":false,"./groupSort.js":false,"./bin.js":false,"./threshold/freedmanDiaconis.js":false,"./threshold/scott.js":false,"./threshold/sturges.js":false,"./max.js":false,"./maxIndex.js":false,"./mean.js":false,"./median.js":false,"./merge.js":false,"./min.js":false,"./minIndex.js":false,"./mode.js":false,"./nice.js":false,"./pairs.js":false,"./permute.js":false,"./quantile.js":"etiLw","./quickselect.js":false,"./range.js":"kH8Ba","./rank.js":false,"./least.js":false,"./leastIndex.js":false,"./greatest.js":false,"./greatestIndex.js":false,"./scan.js":false,"./shuffle.js":false,"./sum.js":false,"./ticks.js":false,"./transpose.js":false,"./variance.js":false,"./zip.js":false,"./every.js":false,"./some.js":false,"./filter.js":false,"./map.js":false,"./reduce.js":false,"./reverse.js":false,"./sort.js":false,"./difference.js":false,"./disjoint.js":false,"./intersection.js":false,"./subset.js":false,"./superset.js":false,"./union.js":false,"internmap":"a6b0X","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2iZSL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ascending);
function ascending(a, b) {
    return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7NEFi":[function(require,module,exports) {
// https://github.com/python/cpython/blob/a74eea238f5baba15797e2e8b570d153bc8690a7/Modules/mathmodule.c#L1423
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Adder", ()=>Adder);
parcelHelpers.export(exports, "fsum", ()=>fsum);
parcelHelpers.export(exports, "fcumsum", ()=>fcumsum);
class Adder {
    constructor(){
        this._partials = new Float64Array(32);
        this._n = 0;
    }
    add(x) {
        const p = this._partials;
        let i = 0;
        for(let j = 0; j < this._n && j < 32; j++){
            const y = p[j], hi = x + y, lo = Math.abs(x) < Math.abs(y) ? x - (hi - y) : y - (hi - x);
            if (lo) p[i++] = lo;
            x = hi;
        }
        p[i] = x;
        this._n = i + 1;
        return this;
    }
    valueOf() {
        const p = this._partials;
        let n = this._n, x, y, lo, hi = 0;
        if (n > 0) {
            hi = p[--n];
            while(n > 0){
                x = hi;
                y = p[--n];
                hi = x + y;
                lo = y - (hi - x);
                if (lo) break;
            }
            if (n > 0 && (lo < 0 && p[n - 1] < 0 || lo > 0 && p[n - 1] > 0)) {
                y = lo * 2;
                x = hi + y;
                if (y == x - hi) hi = x;
            }
        }
        return hi;
    }
}
function fsum(values, valueof) {
    const adder = new Adder();
    if (valueof === undefined) {
        for (let value of values)if (value = +value) adder.add(value);
    } else {
        let index = -1;
        for (let value of values)if (value = +valueof(value, ++index, values)) adder.add(value);
    }
    return +adder;
}
function fcumsum(values, valueof) {
    const adder = new Adder();
    let index = -1;
    return Float64Array.from(values, valueof === undefined ? (v)=>adder.add(+v || 0) : (v)=>adder.add(+valueof(v, ++index, values) || 0));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6b1uv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>max);
function max(values, valueof) {
    let max;
    if (valueof === undefined) {
        for (const value of values)if (value != null && (max < value || max === undefined && value >= value)) max = value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (max < value || max === undefined && value >= value)) max = value;
    }
    return max;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1pqy7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>maxIndex);
function maxIndex(values, valueof) {
    let max;
    let maxIndex = -1;
    let index = -1;
    if (valueof === undefined) for (const value of values){
        ++index;
        if (value != null && (max < value || max === undefined && value >= value)) max = value, maxIndex = index;
    }
    else {
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (max < value || max === undefined && value >= value)) max = value, maxIndex = index;
    }
    return maxIndex;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1KKa7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>min);
function min(values, valueof) {
    let min;
    if (valueof === undefined) {
        for (const value of values)if (value != null && (min > value || min === undefined && value >= value)) min = value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (min > value || min === undefined && value >= value)) min = value;
    }
    return min;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g6uuQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>minIndex);
function minIndex(values, valueof) {
    let min;
    let minIndex = -1;
    let index = -1;
    if (valueof === undefined) for (const value of values){
        ++index;
        if (value != null && (min > value || min === undefined && value >= value)) min = value, minIndex = index;
    }
    else {
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (min > value || min === undefined && value >= value)) min = value, minIndex = index;
    }
    return minIndex;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"72FE4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>permute);
function permute(source, keys) {
    return Array.from(keys, (key)=>source[key]);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"etiLw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>quantile);
parcelHelpers.export(exports, "quantileSorted", ()=>quantileSorted);
parcelHelpers.export(exports, "quantileIndex", ()=>quantileIndex);
var _maxJs = require("./max.js");
var _maxJsDefault = parcelHelpers.interopDefault(_maxJs);
var _maxIndexJs = require("./maxIndex.js");
var _maxIndexJsDefault = parcelHelpers.interopDefault(_maxIndexJs);
var _minJs = require("./min.js");
var _minJsDefault = parcelHelpers.interopDefault(_minJs);
var _minIndexJs = require("./minIndex.js");
var _minIndexJsDefault = parcelHelpers.interopDefault(_minIndexJs);
var _quickselectJs = require("./quickselect.js");
var _quickselectJsDefault = parcelHelpers.interopDefault(_quickselectJs);
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var _sortJs = require("./sort.js");
var _greatestJs = require("./greatest.js");
var _greatestJsDefault = parcelHelpers.interopDefault(_greatestJs);
function quantile(values, p, valueof) {
    values = Float64Array.from((0, _numberJs.numbers)(values, valueof));
    if (!(n = values.length) || isNaN(p = +p)) return;
    if (p <= 0 || n < 2) return (0, _minJsDefault.default)(values);
    if (p >= 1) return (0, _maxJsDefault.default)(values);
    var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = (0, _maxJsDefault.default)((0, _quickselectJsDefault.default)(values, i0).subarray(0, i0 + 1)), value1 = (0, _minJsDefault.default)(values.subarray(i0 + 1));
    return value0 + (value1 - value0) * (i - i0);
}
function quantileSorted(values, p, valueof = (0, _numberJsDefault.default)) {
    if (!(n = values.length) || isNaN(p = +p)) return;
    if (p <= 0 || n < 2) return +valueof(values[0], 0, values);
    if (p >= 1) return +valueof(values[n - 1], n - 1, values);
    var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = +valueof(values[i0], i0, values), value1 = +valueof(values[i0 + 1], i0 + 1, values);
    return value0 + (value1 - value0) * (i - i0);
}
function quantileIndex(values, p, valueof = (0, _numberJsDefault.default)) {
    if (isNaN(p = +p)) return;
    numbers = Float64Array.from(values, (_, i)=>(0, _numberJsDefault.default)(valueof(values[i], i, values)));
    if (p <= 0) return (0, _minIndexJsDefault.default)(numbers);
    if (p >= 1) return (0, _maxIndexJsDefault.default)(numbers);
    var numbers, index = Uint32Array.from(values, (_, i)=>i), j = numbers.length - 1, i = Math.floor(j * p);
    (0, _quickselectJsDefault.default)(index, i, 0, j, (i, j)=>(0, _sortJs.ascendingDefined)(numbers[i], numbers[j]));
    i = (0, _greatestJsDefault.default)(index.subarray(0, i + 1), (i)=>numbers[i]);
    return i >= 0 ? i : -1;
}

},{"./max.js":"6b1uv","./maxIndex.js":"1pqy7","./min.js":"1KKa7","./minIndex.js":"g6uuQ","./quickselect.js":"4sTUl","./number.js":"imr9T","./sort.js":"ApqXa","./greatest.js":"4LoCm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4sTUl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>quickselect);
var _sortJs = require("./sort.js");
function quickselect(array, k, left = 0, right = Infinity, compare) {
    k = Math.floor(k);
    left = Math.floor(Math.max(0, left));
    right = Math.floor(Math.min(array.length - 1, right));
    if (!(left <= k && k <= right)) return array;
    compare = compare === undefined ? (0, _sortJs.ascendingDefined) : (0, _sortJs.compareDefined)(compare);
    while(right > left){
        if (right - left > 600) {
            const n = right - left + 1;
            const m = k - left + 1;
            const z = Math.log(n);
            const s = 0.5 * Math.exp(2 * z / 3);
            const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
            const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
            const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
            quickselect(array, k, newLeft, newRight, compare);
        }
        const t = array[k];
        let i = left;
        let j = right;
        swap(array, left, k);
        if (compare(array[right], t) > 0) swap(array, left, right);
        while(i < j){
            swap(array, i, j), ++i, --j;
            while(compare(array[i], t) < 0)++i;
            while(compare(array[j], t) > 0)--j;
        }
        if (compare(array[left], t) === 0) swap(array, left, j);
        else ++j, swap(array, j, right);
        if (j <= k) left = j + 1;
        if (k <= j) right = j - 1;
    }
    return array;
}
function swap(array, i, j) {
    const t = array[i];
    array[i] = array[j];
    array[j] = t;
}

},{"./sort.js":"ApqXa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ApqXa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>sort);
parcelHelpers.export(exports, "compareDefined", ()=>compareDefined);
parcelHelpers.export(exports, "ascendingDefined", ()=>ascendingDefined);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
var _permuteJs = require("./permute.js");
var _permuteJsDefault = parcelHelpers.interopDefault(_permuteJs);
function sort(values, ...F) {
    if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
    values = Array.from(values);
    let [f] = F;
    if (f && f.length !== 2 || F.length > 1) {
        const index = Uint32Array.from(values, (d, i)=>i);
        if (F.length > 1) {
            F = F.map((f)=>values.map(f));
            index.sort((i, j)=>{
                for (const f of F){
                    const c = ascendingDefined(f[i], f[j]);
                    if (c) return c;
                }
            });
        } else {
            f = values.map(f);
            index.sort((i, j)=>ascendingDefined(f[i], f[j]));
        }
        return (0, _permuteJsDefault.default)(values, index);
    }
    return values.sort(compareDefined(f));
}
function compareDefined(compare = (0, _ascendingJsDefault.default)) {
    if (compare === (0, _ascendingJsDefault.default)) return ascendingDefined;
    if (typeof compare !== "function") throw new TypeError("compare is not a function");
    return (a, b)=>{
        const x = compare(a, b);
        if (x || x === 0) return x;
        return (compare(b, b) === 0) - (compare(a, a) === 0);
    };
}
function ascendingDefined(a, b) {
    return (a == null || !(a >= a)) - (b == null || !(b >= b)) || (a < b ? -1 : a > b ? 1 : 0);
}

},{"./ascending.js":"2iZSL","./permute.js":"72FE4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"imr9T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>number);
parcelHelpers.export(exports, "numbers", ()=>numbers);
function number(x) {
    return x === null ? NaN : +x;
}
function* numbers(values, valueof) {
    if (valueof === undefined) {
        for (let value of values)if (value != null && (value = +value) >= value) yield value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) yield value;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4LoCm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>greatest);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
function greatest(values, compare = (0, _ascendingJsDefault.default)) {
    let max;
    let defined = false;
    if (compare.length === 1) {
        let maxValue;
        for (const element of values){
            const value = compare(element);
            if (defined ? (0, _ascendingJsDefault.default)(value, maxValue) > 0 : (0, _ascendingJsDefault.default)(value, value) === 0) {
                max = element;
                maxValue = value;
                defined = true;
            }
        }
    } else {
        for (const value of values)if (defined ? compare(value, max) > 0 : compare(value, value) === 0) {
            max = value;
            defined = true;
        }
    }
    return max;
}

},{"./ascending.js":"2iZSL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kH8Ba":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>range);
function range(start, stop, step) {
    start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
    var i = -1, n = Math.max(0, Math.ceil((stop - start) / step)) | 0, range = new Array(n);
    while(++i < n)range[i] = start + i * step;
    return range;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a6b0X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InternMap", ()=>InternMap);
parcelHelpers.export(exports, "InternSet", ()=>InternSet);
class InternMap extends Map {
    constructor(entries, key = keyof){
        super();
        Object.defineProperties(this, {
            _intern: {
                value: new Map()
            },
            _key: {
                value: key
            }
        });
        if (entries != null) for (const [key, value] of entries)this.set(key, value);
    }
    get(key) {
        return super.get(intern_get(this, key));
    }
    has(key) {
        return super.has(intern_get(this, key));
    }
    set(key, value) {
        return super.set(intern_set(this, key), value);
    }
    delete(key) {
        return super.delete(intern_delete(this, key));
    }
}
class InternSet extends Set {
    constructor(values, key = keyof){
        super();
        Object.defineProperties(this, {
            _intern: {
                value: new Map()
            },
            _key: {
                value: key
            }
        });
        if (values != null) for (const value of values)this.add(value);
    }
    has(value) {
        return super.has(intern_get(this, value));
    }
    add(value) {
        return super.add(intern_set(this, value));
    }
    delete(value) {
        return super.delete(intern_delete(this, value));
    }
}
function intern_get({ _intern, _key }, value) {
    const key = _key(value);
    return _intern.has(key) ? _intern.get(key) : value;
}
function intern_set({ _intern, _key }, value) {
    const key = _key(value);
    if (_intern.has(key)) return _intern.get(key);
    _intern.set(key, value);
    return value;
}
function intern_delete({ _intern, _key }, value) {
    const key = _key(value);
    if (_intern.has(key)) {
        value = _intern.get(key);
        _intern.delete(key);
    }
    return value;
}
function keyof(value) {
    return value !== null && typeof value === "object" ? value.valueOf() : value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8TMeU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "epsilon", ()=>epsilon);
parcelHelpers.export(exports, "epsilon2", ()=>epsilon2);
parcelHelpers.export(exports, "pi", ()=>pi);
parcelHelpers.export(exports, "halfPi", ()=>halfPi);
parcelHelpers.export(exports, "quarterPi", ()=>quarterPi);
parcelHelpers.export(exports, "tau", ()=>tau);
parcelHelpers.export(exports, "degrees", ()=>degrees);
parcelHelpers.export(exports, "radians", ()=>radians);
parcelHelpers.export(exports, "abs", ()=>abs);
parcelHelpers.export(exports, "atan", ()=>atan);
parcelHelpers.export(exports, "atan2", ()=>atan2);
parcelHelpers.export(exports, "cos", ()=>cos);
parcelHelpers.export(exports, "ceil", ()=>ceil);
parcelHelpers.export(exports, "exp", ()=>exp);
parcelHelpers.export(exports, "floor", ()=>floor);
parcelHelpers.export(exports, "hypot", ()=>hypot);
parcelHelpers.export(exports, "log", ()=>log);
parcelHelpers.export(exports, "pow", ()=>pow);
parcelHelpers.export(exports, "sin", ()=>sin);
parcelHelpers.export(exports, "sign", ()=>sign);
parcelHelpers.export(exports, "sqrt", ()=>sqrt);
parcelHelpers.export(exports, "tan", ()=>tan);
parcelHelpers.export(exports, "acos", ()=>acos);
parcelHelpers.export(exports, "asin", ()=>asin);
parcelHelpers.export(exports, "haversin", ()=>haversin);
var epsilon = 1e-6;
var epsilon2 = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var tau = pi * 2;
var degrees = 180 / pi;
var radians = pi / 180;
var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos = Math.cos;
var ceil = Math.ceil;
var exp = Math.exp;
var floor = Math.floor;
var hypot = Math.hypot;
var log = Math.log;
var pow = Math.pow;
var sin = Math.sin;
var sign = Math.sign || function(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
};
var sqrt = Math.sqrt;
var tan = Math.tan;
function acos(x) {
    return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}
function asin(x) {
    return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}
function haversin(x) {
    return (x = sin(x / 2)) * x;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bROOt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>noop);
function noop() {}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6inQS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _noopJs = require("../noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
var x0 = Infinity, y0 = x0, x1 = -x0, y1 = x1;
var boundsStream = {
    point: boundsPoint,
    lineStart: (0, _noopJsDefault.default),
    lineEnd: (0, _noopJsDefault.default),
    polygonStart: (0, _noopJsDefault.default),
    polygonEnd: (0, _noopJsDefault.default),
    result: function() {
        var bounds = [
            [
                x0,
                y0
            ],
            [
                x1,
                y1
            ]
        ];
        x1 = y1 = -(y0 = x0 = Infinity);
        return bounds;
    }
};
function boundsPoint(x, y) {
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
}
exports.default = boundsStream;

},{"../noop.js":"bROOt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hWsH1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mathJs = require("../math.js");
// TODO Enforce positive area for exterior, negative area for interior?
var X0 = 0, Y0 = 0, Z0 = 0, X1 = 0, Y1 = 0, Z1 = 0, X2 = 0, Y2 = 0, Z2 = 0, x00, y00, x0, y0;
var centroidStream = {
    point: centroidPoint,
    lineStart: centroidLineStart,
    lineEnd: centroidLineEnd,
    polygonStart: function() {
        centroidStream.lineStart = centroidRingStart;
        centroidStream.lineEnd = centroidRingEnd;
    },
    polygonEnd: function() {
        centroidStream.point = centroidPoint;
        centroidStream.lineStart = centroidLineStart;
        centroidStream.lineEnd = centroidLineEnd;
    },
    result: function() {
        var centroid = Z2 ? [
            X2 / Z2,
            Y2 / Z2
        ] : Z1 ? [
            X1 / Z1,
            Y1 / Z1
        ] : Z0 ? [
            X0 / Z0,
            Y0 / Z0
        ] : [
            NaN,
            NaN
        ];
        X0 = Y0 = Z0 = X1 = Y1 = Z1 = X2 = Y2 = Z2 = 0;
        return centroid;
    }
};
function centroidPoint(x, y) {
    X0 += x;
    Y0 += y;
    ++Z0;
}
function centroidLineStart() {
    centroidStream.point = centroidPointFirstLine;
}
function centroidPointFirstLine(x, y) {
    centroidStream.point = centroidPointLine;
    centroidPoint(x0 = x, y0 = y);
}
function centroidPointLine(x, y) {
    var dx = x - x0, dy = y - y0, z = (0, _mathJs.sqrt)(dx * dx + dy * dy);
    X1 += z * (x0 + x) / 2;
    Y1 += z * (y0 + y) / 2;
    Z1 += z;
    centroidPoint(x0 = x, y0 = y);
}
function centroidLineEnd() {
    centroidStream.point = centroidPoint;
}
function centroidRingStart() {
    centroidStream.point = centroidPointFirstRing;
}
function centroidRingEnd() {
    centroidPointRing(x00, y00);
}
function centroidPointFirstRing(x, y) {
    centroidStream.point = centroidPointRing;
    centroidPoint(x00 = x0 = x, y00 = y0 = y);
}
function centroidPointRing(x, y) {
    var dx = x - x0, dy = y - y0, z = (0, _mathJs.sqrt)(dx * dx + dy * dy);
    X1 += z * (x0 + x) / 2;
    Y1 += z * (y0 + y) / 2;
    Z1 += z;
    z = y0 * x - x0 * y;
    X2 += z * (x0 + x);
    Y2 += z * (y0 + y);
    Z2 += z * 3;
    centroidPoint(x0 = x, y0 = y);
}
exports.default = centroidStream;

},{"../math.js":"8TMeU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bBEPS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>PathContext);
var _mathJs = require("../math.js");
var _noopJs = require("../noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
function PathContext(context) {
    this._context = context;
}
PathContext.prototype = {
    _radius: 4.5,
    pointRadius: function(_) {
        return this._radius = _, this;
    },
    polygonStart: function() {
        this._line = 0;
    },
    polygonEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._point = 0;
    },
    lineEnd: function() {
        if (this._line === 0) this._context.closePath();
        this._point = NaN;
    },
    point: function(x, y) {
        switch(this._point){
            case 0:
                this._context.moveTo(x, y);
                this._point = 1;
                break;
            case 1:
                this._context.lineTo(x, y);
                break;
            default:
                this._context.moveTo(x + this._radius, y);
                this._context.arc(x, y, this._radius, 0, (0, _mathJs.tau));
                break;
        }
    },
    result: (0, _noopJsDefault.default)
};

},{"../math.js":"8TMeU","../noop.js":"bROOt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kxo1f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
var _mathJs = require("../math.js");
var _noopJs = require("../noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
var lengthSum = new (0, _d3Array.Adder)(), lengthRing, x00, y00, x0, y0;
var lengthStream = {
    point: (0, _noopJsDefault.default),
    lineStart: function() {
        lengthStream.point = lengthPointFirst;
    },
    lineEnd: function() {
        if (lengthRing) lengthPoint(x00, y00);
        lengthStream.point = (0, _noopJsDefault.default);
    },
    polygonStart: function() {
        lengthRing = true;
    },
    polygonEnd: function() {
        lengthRing = null;
    },
    result: function() {
        var length = +lengthSum;
        lengthSum = new (0, _d3Array.Adder)();
        return length;
    }
};
function lengthPointFirst(x, y) {
    lengthStream.point = lengthPoint;
    x00 = x0 = x, y00 = y0 = y;
}
function lengthPoint(x, y) {
    x0 -= x, y0 -= y;
    lengthSum.add((0, _mathJs.sqrt)(x0 * x0 + y0 * y0));
    x0 = x, y0 = y;
}
exports.default = lengthStream;

},{"d3-array":"1yX2W","../math.js":"8TMeU","../noop.js":"bROOt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7QFxp":[function(require,module,exports) {
// Simple caching for constant-radius points.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let cacheDigits, cacheAppend, cacheRadius, cacheCircle;
class PathString {
    constructor(digits){
        this._append = digits == null ? append : appendRound(digits);
        this._radius = 4.5;
        this._ = "";
    }
    pointRadius(_) {
        this._radius = +_;
        return this;
    }
    polygonStart() {
        this._line = 0;
    }
    polygonEnd() {
        this._line = NaN;
    }
    lineStart() {
        this._point = 0;
    }
    lineEnd() {
        if (this._line === 0) this._ += "Z";
        this._point = NaN;
    }
    point(x, y) {
        switch(this._point){
            case 0:
                this._append`M${x},${y}`;
                this._point = 1;
                break;
            case 1:
                this._append`L${x},${y}`;
                break;
            default:
                this._append`M${x},${y}`;
                if (this._radius !== cacheRadius || this._append !== cacheAppend) {
                    const r = this._radius;
                    const s = this._;
                    this._ = ""; // stash the old string so we can cache the circle path fragment
                    this._append`m0,${r}a${r},${r} 0 1,1 0,${-2 * r}a${r},${r} 0 1,1 0,${2 * r}z`;
                    cacheRadius = r;
                    cacheAppend = this._append;
                    cacheCircle = this._;
                    this._ = s;
                }
                this._ += cacheCircle;
                break;
        }
    }
    result() {
        const result = this._;
        this._ = "";
        return result.length ? result : null;
    }
}
exports.default = PathString;
function append(strings) {
    let i = 1;
    this._ += strings[0];
    for(const j = strings.length; i < j; ++i)this._ += arguments[i] + strings[i];
}
function appendRound(digits) {
    const d = Math.floor(digits);
    if (!(d >= 0)) throw new RangeError(`invalid digits: ${digits}`);
    if (d > 15) return append;
    if (d !== cacheDigits) {
        const k = 10 ** d;
        cacheDigits = d;
        cacheAppend = function append(strings) {
            let i = 1;
            this._ += strings[0];
            for(const j = strings.length; i < j; ++i)this._ += Math.round(arguments[i] * k) / k + strings[i];
        };
    }
    return cacheAppend;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"UQ8g3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scaleBand", ()=>(0, _bandJsDefault.default));
parcelHelpers.export(exports, "scalePoint", ()=>(0, _bandJs.point));
parcelHelpers.export(exports, "scaleIdentity", ()=>(0, _identityJsDefault.default));
parcelHelpers.export(exports, "scaleLinear", ()=>(0, _linearJsDefault.default));
parcelHelpers.export(exports, "scaleLog", ()=>(0, _logJsDefault.default));
parcelHelpers.export(exports, "scaleSymlog", ()=>(0, _symlogJsDefault.default));
parcelHelpers.export(exports, "scaleOrdinal", ()=>(0, _ordinalJsDefault.default));
parcelHelpers.export(exports, "scaleImplicit", ()=>(0, _ordinalJs.implicit));
parcelHelpers.export(exports, "scalePow", ()=>(0, _powJsDefault.default));
parcelHelpers.export(exports, "scaleSqrt", ()=>(0, _powJs.sqrt));
parcelHelpers.export(exports, "scaleRadial", ()=>(0, _radialJsDefault.default));
parcelHelpers.export(exports, "scaleQuantile", ()=>(0, _quantileJsDefault.default));
parcelHelpers.export(exports, "scaleQuantize", ()=>(0, _quantizeJsDefault.default));
parcelHelpers.export(exports, "scaleThreshold", ()=>(0, _thresholdJsDefault.default));
parcelHelpers.export(exports, "scaleTime", ()=>(0, _timeJsDefault.default));
parcelHelpers.export(exports, "scaleUtc", ()=>(0, _utcTimeJsDefault.default));
parcelHelpers.export(exports, "scaleSequential", ()=>(0, _sequentialJsDefault.default));
parcelHelpers.export(exports, "scaleSequentialLog", ()=>(0, _sequentialJs.sequentialLog));
parcelHelpers.export(exports, "scaleSequentialPow", ()=>(0, _sequentialJs.sequentialPow));
parcelHelpers.export(exports, "scaleSequentialSqrt", ()=>(0, _sequentialJs.sequentialSqrt));
parcelHelpers.export(exports, "scaleSequentialSymlog", ()=>(0, _sequentialJs.sequentialSymlog));
parcelHelpers.export(exports, "scaleSequentialQuantile", ()=>(0, _sequentialQuantileJsDefault.default));
parcelHelpers.export(exports, "scaleDiverging", ()=>(0, _divergingJsDefault.default));
parcelHelpers.export(exports, "scaleDivergingLog", ()=>(0, _divergingJs.divergingLog));
parcelHelpers.export(exports, "scaleDivergingPow", ()=>(0, _divergingJs.divergingPow));
parcelHelpers.export(exports, "scaleDivergingSqrt", ()=>(0, _divergingJs.divergingSqrt));
parcelHelpers.export(exports, "scaleDivergingSymlog", ()=>(0, _divergingJs.divergingSymlog));
parcelHelpers.export(exports, "tickFormat", ()=>(0, _tickFormatJsDefault.default));
var _bandJs = require("./band.js");
var _bandJsDefault = parcelHelpers.interopDefault(_bandJs);
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _linearJs = require("./linear.js");
var _linearJsDefault = parcelHelpers.interopDefault(_linearJs);
var _logJs = require("./log.js");
var _logJsDefault = parcelHelpers.interopDefault(_logJs);
var _symlogJs = require("./symlog.js");
var _symlogJsDefault = parcelHelpers.interopDefault(_symlogJs);
var _ordinalJs = require("./ordinal.js");
var _ordinalJsDefault = parcelHelpers.interopDefault(_ordinalJs);
var _powJs = require("./pow.js");
var _powJsDefault = parcelHelpers.interopDefault(_powJs);
var _radialJs = require("./radial.js");
var _radialJsDefault = parcelHelpers.interopDefault(_radialJs);
var _quantileJs = require("./quantile.js");
var _quantileJsDefault = parcelHelpers.interopDefault(_quantileJs);
var _quantizeJs = require("./quantize.js");
var _quantizeJsDefault = parcelHelpers.interopDefault(_quantizeJs);
var _thresholdJs = require("./threshold.js");
var _thresholdJsDefault = parcelHelpers.interopDefault(_thresholdJs);
var _timeJs = require("./time.js");
var _timeJsDefault = parcelHelpers.interopDefault(_timeJs);
var _utcTimeJs = require("./utcTime.js");
var _utcTimeJsDefault = parcelHelpers.interopDefault(_utcTimeJs);
var _sequentialJs = require("./sequential.js");
var _sequentialJsDefault = parcelHelpers.interopDefault(_sequentialJs);
var _sequentialQuantileJs = require("./sequentialQuantile.js");
var _sequentialQuantileJsDefault = parcelHelpers.interopDefault(_sequentialQuantileJs);
var _divergingJs = require("./diverging.js");
var _divergingJsDefault = parcelHelpers.interopDefault(_divergingJs);
var _tickFormatJs = require("./tickFormat.js");
var _tickFormatJsDefault = parcelHelpers.interopDefault(_tickFormatJs);

},{"./band.js":"4oI5T","./identity.js":false,"./linear.js":false,"./log.js":false,"./symlog.js":false,"./ordinal.js":false,"./pow.js":false,"./radial.js":false,"./quantile.js":"cZUY5","./quantize.js":false,"./threshold.js":false,"./time.js":false,"./utcTime.js":false,"./sequential.js":false,"./sequentialQuantile.js":false,"./diverging.js":false,"./tickFormat.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4oI5T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>band);
parcelHelpers.export(exports, "point", ()=>point);
var _d3Array = require("d3-array");
var _initJs = require("./init.js");
var _ordinalJs = require("./ordinal.js");
var _ordinalJsDefault = parcelHelpers.interopDefault(_ordinalJs);
function band() {
    var scale = (0, _ordinalJsDefault.default)().unknown(undefined), domain = scale.domain, ordinalRange = scale.range, r0 = 0, r1 = 1, step, bandwidth, round = false, paddingInner = 0, paddingOuter = 0, align = 0.5;
    delete scale.unknown;
    function rescale() {
        var n = domain().length, reverse = r1 < r0, start = reverse ? r1 : r0, stop = reverse ? r0 : r1;
        step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
        if (round) step = Math.floor(step);
        start += (stop - start - step * (n - paddingInner)) * align;
        bandwidth = step * (1 - paddingInner);
        if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
        var values = (0, _d3Array.range)(n).map(function(i) {
            return start + step * i;
        });
        return ordinalRange(reverse ? values.reverse() : values);
    }
    scale.domain = function(_) {
        return arguments.length ? (domain(_), rescale()) : domain();
    };
    scale.range = function(_) {
        return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [
            r0,
            r1
        ];
    };
    scale.rangeRound = function(_) {
        return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
    };
    scale.bandwidth = function() {
        return bandwidth;
    };
    scale.step = function() {
        return step;
    };
    scale.round = function(_) {
        return arguments.length ? (round = !!_, rescale()) : round;
    };
    scale.padding = function(_) {
        return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
    };
    scale.paddingInner = function(_) {
        return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
    };
    scale.paddingOuter = function(_) {
        return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
    };
    scale.align = function(_) {
        return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
    };
    scale.copy = function() {
        return band(domain(), [
            r0,
            r1
        ]).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
    };
    return (0, _initJs.initRange).apply(rescale(), arguments);
}
function pointish(scale) {
    var copy = scale.copy;
    scale.padding = scale.paddingOuter;
    delete scale.paddingInner;
    delete scale.paddingOuter;
    scale.copy = function() {
        return pointish(copy());
    };
    return scale;
}
function point() {
    return pointish(band.apply(null, arguments).paddingInner(1));
}

},{"d3-array":"1yX2W","./init.js":"kp8lc","./ordinal.js":"hNjKg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kp8lc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRange", ()=>initRange);
parcelHelpers.export(exports, "initInterpolator", ()=>initInterpolator);
function initRange(domain, range) {
    switch(arguments.length){
        case 0:
            break;
        case 1:
            this.range(domain);
            break;
        default:
            this.range(range).domain(domain);
            break;
    }
    return this;
}
function initInterpolator(domain, interpolator) {
    switch(arguments.length){
        case 0:
            break;
        case 1:
            if (typeof domain === "function") this.interpolator(domain);
            else this.range(domain);
            break;
        default:
            this.domain(domain);
            if (typeof interpolator === "function") this.interpolator(interpolator);
            else this.range(interpolator);
            break;
    }
    return this;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hNjKg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "implicit", ()=>implicit);
parcelHelpers.export(exports, "default", ()=>ordinal);
var _d3Array = require("d3-array");
var _initJs = require("./init.js");
const implicit = Symbol("implicit");
function ordinal() {
    var index = new (0, _d3Array.InternMap)(), domain = [], range = [], unknown = implicit;
    function scale(d) {
        let i = index.get(d);
        if (i === undefined) {
            if (unknown !== implicit) return unknown;
            index.set(d, i = domain.push(d) - 1);
        }
        return range[i % range.length];
    }
    scale.domain = function(_) {
        if (!arguments.length) return domain.slice();
        domain = [], index = new (0, _d3Array.InternMap)();
        for (const value of _){
            if (index.has(value)) continue;
            index.set(value, domain.push(value) - 1);
        }
        return scale;
    };
    scale.range = function(_) {
        return arguments.length ? (range = Array.from(_), scale) : range.slice();
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
        return ordinal(domain, range).unknown(unknown);
    };
    (0, _initJs.initRange).apply(scale, arguments);
    return scale;
}

},{"d3-array":"1yX2W","./init.js":"kp8lc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cZUY5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>quantile);
var _d3Array = require("d3-array");
var _initJs = require("./init.js");
function quantile() {
    var domain = [], range = [], thresholds = [], unknown;
    function rescale() {
        var i = 0, n = Math.max(1, range.length);
        thresholds = new Array(n - 1);
        while(++i < n)thresholds[i - 1] = (0, _d3Array.quantileSorted)(domain, i / n);
        return scale;
    }
    function scale(x) {
        return x == null || isNaN(x = +x) ? unknown : range[(0, _d3Array.bisect)(thresholds, x)];
    }
    scale.invertExtent = function(y) {
        var i = range.indexOf(y);
        return i < 0 ? [
            NaN,
            NaN
        ] : [
            i > 0 ? thresholds[i - 1] : domain[0],
            i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
        ];
    };
    scale.domain = function(_) {
        if (!arguments.length) return domain.slice();
        domain = [];
        for (let d of _)if (d != null && !isNaN(d = +d)) domain.push(d);
        domain.sort((0, _d3Array.ascending));
        return rescale();
    };
    scale.range = function(_) {
        return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.quantiles = function() {
        return thresholds.slice();
    };
    scale.copy = function() {
        return quantile().domain(domain).range(range).unknown(unknown);
    };
    return (0, _initJs.initRange).apply(scale, arguments);
}

},{"d3-array":"1yX2W","./init.js":"kp8lc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dfCpU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "schemeCategory10", ()=>(0, _category10JsDefault.default));
parcelHelpers.export(exports, "schemeAccent", ()=>(0, _accentJsDefault.default));
parcelHelpers.export(exports, "schemeDark2", ()=>(0, _dark2JsDefault.default));
parcelHelpers.export(exports, "schemePaired", ()=>(0, _pairedJsDefault.default));
parcelHelpers.export(exports, "schemePastel1", ()=>(0, _pastel1JsDefault.default));
parcelHelpers.export(exports, "schemePastel2", ()=>(0, _pastel2JsDefault.default));
parcelHelpers.export(exports, "schemeSet1", ()=>(0, _set1JsDefault.default));
parcelHelpers.export(exports, "schemeSet2", ()=>(0, _set2JsDefault.default));
parcelHelpers.export(exports, "schemeSet3", ()=>(0, _set3JsDefault.default));
parcelHelpers.export(exports, "schemeTableau10", ()=>(0, _tableau10JsDefault.default));
parcelHelpers.export(exports, "interpolateBrBG", ()=>(0, _brBGJsDefault.default));
parcelHelpers.export(exports, "schemeBrBG", ()=>(0, _brBGJs.scheme));
parcelHelpers.export(exports, "interpolatePRGn", ()=>(0, _prgnJsDefault.default));
parcelHelpers.export(exports, "schemePRGn", ()=>(0, _prgnJs.scheme));
parcelHelpers.export(exports, "interpolatePiYG", ()=>(0, _piYGJsDefault.default));
parcelHelpers.export(exports, "schemePiYG", ()=>(0, _piYGJs.scheme));
parcelHelpers.export(exports, "interpolatePuOr", ()=>(0, _puOrJsDefault.default));
parcelHelpers.export(exports, "schemePuOr", ()=>(0, _puOrJs.scheme));
parcelHelpers.export(exports, "interpolateRdBu", ()=>(0, _rdBuJsDefault.default));
parcelHelpers.export(exports, "schemeRdBu", ()=>(0, _rdBuJs.scheme));
parcelHelpers.export(exports, "interpolateRdGy", ()=>(0, _rdGyJsDefault.default));
parcelHelpers.export(exports, "schemeRdGy", ()=>(0, _rdGyJs.scheme));
parcelHelpers.export(exports, "interpolateRdYlBu", ()=>(0, _rdYlBuJsDefault.default));
parcelHelpers.export(exports, "schemeRdYlBu", ()=>(0, _rdYlBuJs.scheme));
parcelHelpers.export(exports, "interpolateRdYlGn", ()=>(0, _rdYlGnJsDefault.default));
parcelHelpers.export(exports, "schemeRdYlGn", ()=>(0, _rdYlGnJs.scheme));
parcelHelpers.export(exports, "interpolateSpectral", ()=>(0, _spectralJsDefault.default));
parcelHelpers.export(exports, "schemeSpectral", ()=>(0, _spectralJs.scheme));
parcelHelpers.export(exports, "interpolateBuGn", ()=>(0, _buGnJsDefault.default));
parcelHelpers.export(exports, "schemeBuGn", ()=>(0, _buGnJs.scheme));
parcelHelpers.export(exports, "interpolateBuPu", ()=>(0, _buPuJsDefault.default));
parcelHelpers.export(exports, "schemeBuPu", ()=>(0, _buPuJs.scheme));
parcelHelpers.export(exports, "interpolateGnBu", ()=>(0, _gnBuJsDefault.default));
parcelHelpers.export(exports, "schemeGnBu", ()=>(0, _gnBuJs.scheme));
parcelHelpers.export(exports, "interpolateOrRd", ()=>(0, _orRdJsDefault.default));
parcelHelpers.export(exports, "schemeOrRd", ()=>(0, _orRdJs.scheme));
parcelHelpers.export(exports, "interpolatePuBuGn", ()=>(0, _puBuGnJsDefault.default));
parcelHelpers.export(exports, "schemePuBuGn", ()=>(0, _puBuGnJs.scheme));
parcelHelpers.export(exports, "interpolatePuBu", ()=>(0, _puBuJsDefault.default));
parcelHelpers.export(exports, "schemePuBu", ()=>(0, _puBuJs.scheme));
parcelHelpers.export(exports, "interpolatePuRd", ()=>(0, _puRdJsDefault.default));
parcelHelpers.export(exports, "schemePuRd", ()=>(0, _puRdJs.scheme));
parcelHelpers.export(exports, "interpolateRdPu", ()=>(0, _rdPuJsDefault.default));
parcelHelpers.export(exports, "schemeRdPu", ()=>(0, _rdPuJs.scheme));
parcelHelpers.export(exports, "interpolateYlGnBu", ()=>(0, _ylGnBuJsDefault.default));
parcelHelpers.export(exports, "schemeYlGnBu", ()=>(0, _ylGnBuJs.scheme));
parcelHelpers.export(exports, "interpolateYlGn", ()=>(0, _ylGnJsDefault.default));
parcelHelpers.export(exports, "schemeYlGn", ()=>(0, _ylGnJs.scheme));
parcelHelpers.export(exports, "interpolateYlOrBr", ()=>(0, _ylOrBrJsDefault.default));
parcelHelpers.export(exports, "schemeYlOrBr", ()=>(0, _ylOrBrJs.scheme));
parcelHelpers.export(exports, "interpolateYlOrRd", ()=>(0, _ylOrRdJsDefault.default));
parcelHelpers.export(exports, "schemeYlOrRd", ()=>(0, _ylOrRdJs.scheme));
parcelHelpers.export(exports, "interpolateBlues", ()=>(0, _bluesJsDefault.default));
parcelHelpers.export(exports, "schemeBlues", ()=>(0, _bluesJs.scheme));
parcelHelpers.export(exports, "interpolateGreens", ()=>(0, _greensJsDefault.default));
parcelHelpers.export(exports, "schemeGreens", ()=>(0, _greensJs.scheme));
parcelHelpers.export(exports, "interpolateGreys", ()=>(0, _greysJsDefault.default));
parcelHelpers.export(exports, "schemeGreys", ()=>(0, _greysJs.scheme));
parcelHelpers.export(exports, "interpolatePurples", ()=>(0, _purplesJsDefault.default));
parcelHelpers.export(exports, "schemePurples", ()=>(0, _purplesJs.scheme));
parcelHelpers.export(exports, "interpolateReds", ()=>(0, _redsJsDefault.default));
parcelHelpers.export(exports, "schemeReds", ()=>(0, _redsJs.scheme));
parcelHelpers.export(exports, "interpolateOranges", ()=>(0, _orangesJsDefault.default));
parcelHelpers.export(exports, "schemeOranges", ()=>(0, _orangesJs.scheme));
parcelHelpers.export(exports, "interpolateCividis", ()=>(0, _cividisJsDefault.default));
parcelHelpers.export(exports, "interpolateCubehelixDefault", ()=>(0, _cubehelixJsDefault.default));
parcelHelpers.export(exports, "interpolateRainbow", ()=>(0, _rainbowJsDefault.default));
parcelHelpers.export(exports, "interpolateWarm", ()=>(0, _rainbowJs.warm));
parcelHelpers.export(exports, "interpolateCool", ()=>(0, _rainbowJs.cool));
parcelHelpers.export(exports, "interpolateSinebow", ()=>(0, _sinebowJsDefault.default));
parcelHelpers.export(exports, "interpolateTurbo", ()=>(0, _turboJsDefault.default));
parcelHelpers.export(exports, "interpolateViridis", ()=>(0, _viridisJsDefault.default));
parcelHelpers.export(exports, "interpolateMagma", ()=>(0, _viridisJs.magma));
parcelHelpers.export(exports, "interpolateInferno", ()=>(0, _viridisJs.inferno));
parcelHelpers.export(exports, "interpolatePlasma", ()=>(0, _viridisJs.plasma));
var _category10Js = require("./categorical/category10.js");
var _category10JsDefault = parcelHelpers.interopDefault(_category10Js);
var _accentJs = require("./categorical/Accent.js");
var _accentJsDefault = parcelHelpers.interopDefault(_accentJs);
var _dark2Js = require("./categorical/Dark2.js");
var _dark2JsDefault = parcelHelpers.interopDefault(_dark2Js);
var _pairedJs = require("./categorical/Paired.js");
var _pairedJsDefault = parcelHelpers.interopDefault(_pairedJs);
var _pastel1Js = require("./categorical/Pastel1.js");
var _pastel1JsDefault = parcelHelpers.interopDefault(_pastel1Js);
var _pastel2Js = require("./categorical/Pastel2.js");
var _pastel2JsDefault = parcelHelpers.interopDefault(_pastel2Js);
var _set1Js = require("./categorical/Set1.js");
var _set1JsDefault = parcelHelpers.interopDefault(_set1Js);
var _set2Js = require("./categorical/Set2.js");
var _set2JsDefault = parcelHelpers.interopDefault(_set2Js);
var _set3Js = require("./categorical/Set3.js");
var _set3JsDefault = parcelHelpers.interopDefault(_set3Js);
var _tableau10Js = require("./categorical/Tableau10.js");
var _tableau10JsDefault = parcelHelpers.interopDefault(_tableau10Js);
var _brBGJs = require("./diverging/BrBG.js");
var _brBGJsDefault = parcelHelpers.interopDefault(_brBGJs);
var _prgnJs = require("./diverging/PRGn.js");
var _prgnJsDefault = parcelHelpers.interopDefault(_prgnJs);
var _piYGJs = require("./diverging/PiYG.js");
var _piYGJsDefault = parcelHelpers.interopDefault(_piYGJs);
var _puOrJs = require("./diverging/PuOr.js");
var _puOrJsDefault = parcelHelpers.interopDefault(_puOrJs);
var _rdBuJs = require("./diverging/RdBu.js");
var _rdBuJsDefault = parcelHelpers.interopDefault(_rdBuJs);
var _rdGyJs = require("./diverging/RdGy.js");
var _rdGyJsDefault = parcelHelpers.interopDefault(_rdGyJs);
var _rdYlBuJs = require("./diverging/RdYlBu.js");
var _rdYlBuJsDefault = parcelHelpers.interopDefault(_rdYlBuJs);
var _rdYlGnJs = require("./diverging/RdYlGn.js");
var _rdYlGnJsDefault = parcelHelpers.interopDefault(_rdYlGnJs);
var _spectralJs = require("./diverging/Spectral.js");
var _spectralJsDefault = parcelHelpers.interopDefault(_spectralJs);
var _buGnJs = require("./sequential-multi/BuGn.js");
var _buGnJsDefault = parcelHelpers.interopDefault(_buGnJs);
var _buPuJs = require("./sequential-multi/BuPu.js");
var _buPuJsDefault = parcelHelpers.interopDefault(_buPuJs);
var _gnBuJs = require("./sequential-multi/GnBu.js");
var _gnBuJsDefault = parcelHelpers.interopDefault(_gnBuJs);
var _orRdJs = require("./sequential-multi/OrRd.js");
var _orRdJsDefault = parcelHelpers.interopDefault(_orRdJs);
var _puBuGnJs = require("./sequential-multi/PuBuGn.js");
var _puBuGnJsDefault = parcelHelpers.interopDefault(_puBuGnJs);
var _puBuJs = require("./sequential-multi/PuBu.js");
var _puBuJsDefault = parcelHelpers.interopDefault(_puBuJs);
var _puRdJs = require("./sequential-multi/PuRd.js");
var _puRdJsDefault = parcelHelpers.interopDefault(_puRdJs);
var _rdPuJs = require("./sequential-multi/RdPu.js");
var _rdPuJsDefault = parcelHelpers.interopDefault(_rdPuJs);
var _ylGnBuJs = require("./sequential-multi/YlGnBu.js");
var _ylGnBuJsDefault = parcelHelpers.interopDefault(_ylGnBuJs);
var _ylGnJs = require("./sequential-multi/YlGn.js");
var _ylGnJsDefault = parcelHelpers.interopDefault(_ylGnJs);
var _ylOrBrJs = require("./sequential-multi/YlOrBr.js");
var _ylOrBrJsDefault = parcelHelpers.interopDefault(_ylOrBrJs);
var _ylOrRdJs = require("./sequential-multi/YlOrRd.js");
var _ylOrRdJsDefault = parcelHelpers.interopDefault(_ylOrRdJs);
var _bluesJs = require("./sequential-single/Blues.js");
var _bluesJsDefault = parcelHelpers.interopDefault(_bluesJs);
var _greensJs = require("./sequential-single/Greens.js");
var _greensJsDefault = parcelHelpers.interopDefault(_greensJs);
var _greysJs = require("./sequential-single/Greys.js");
var _greysJsDefault = parcelHelpers.interopDefault(_greysJs);
var _purplesJs = require("./sequential-single/Purples.js");
var _purplesJsDefault = parcelHelpers.interopDefault(_purplesJs);
var _redsJs = require("./sequential-single/Reds.js");
var _redsJsDefault = parcelHelpers.interopDefault(_redsJs);
var _orangesJs = require("./sequential-single/Oranges.js");
var _orangesJsDefault = parcelHelpers.interopDefault(_orangesJs);
var _cividisJs = require("./sequential-multi/cividis.js");
var _cividisJsDefault = parcelHelpers.interopDefault(_cividisJs);
var _cubehelixJs = require("./sequential-multi/cubehelix.js");
var _cubehelixJsDefault = parcelHelpers.interopDefault(_cubehelixJs);
var _rainbowJs = require("./sequential-multi/rainbow.js");
var _rainbowJsDefault = parcelHelpers.interopDefault(_rainbowJs);
var _sinebowJs = require("./sequential-multi/sinebow.js");
var _sinebowJsDefault = parcelHelpers.interopDefault(_sinebowJs);
var _turboJs = require("./sequential-multi/turbo.js");
var _turboJsDefault = parcelHelpers.interopDefault(_turboJs);
var _viridisJs = require("./sequential-multi/viridis.js");
var _viridisJsDefault = parcelHelpers.interopDefault(_viridisJs);

},{"./categorical/category10.js":"j4Teo","./categorical/Accent.js":"lNYV9","./categorical/Dark2.js":"fK6db","./categorical/Paired.js":"7TRFs","./categorical/Pastel1.js":"8GWIR","./categorical/Pastel2.js":"5hLqW","./categorical/Set1.js":"6lXdW","./categorical/Set2.js":"ev0BU","./categorical/Set3.js":"ltDSo","./categorical/Tableau10.js":"gg57L","./diverging/BrBG.js":"aDyxU","./diverging/PRGn.js":"lJrID","./diverging/PiYG.js":"2UPPB","./diverging/PuOr.js":"hn6CX","./diverging/RdBu.js":"aBOAV","./diverging/RdGy.js":"6osTP","./diverging/RdYlBu.js":"hKUs9","./diverging/RdYlGn.js":"eKp3o","./diverging/Spectral.js":"9aNDP","./sequential-multi/BuGn.js":"22lwr","./sequential-multi/BuPu.js":"4irWf","./sequential-multi/GnBu.js":"964kK","./sequential-multi/OrRd.js":"3hdxq","./sequential-multi/PuBuGn.js":"9kVx1","./sequential-multi/PuBu.js":"43RCM","./sequential-multi/PuRd.js":"dhE1L","./sequential-multi/RdPu.js":"4Pqw0","./sequential-multi/YlGnBu.js":"3VnM6","./sequential-multi/YlGn.js":"f9Ai9","./sequential-multi/YlOrBr.js":"eI2jw","./sequential-multi/YlOrRd.js":"ao5E9","./sequential-single/Blues.js":"1pzBn","./sequential-single/Greens.js":"bVmeS","./sequential-single/Greys.js":"jsCuc","./sequential-single/Purples.js":"6Waty","./sequential-single/Reds.js":"2N3E3","./sequential-single/Oranges.js":"gWy5h","./sequential-multi/cividis.js":"2gM4s","./sequential-multi/cubehelix.js":"bK5z7","./sequential-multi/rainbow.js":"bjHKO","./sequential-multi/sinebow.js":"hqiUB","./sequential-multi/turbo.js":"6GvRp","./sequential-multi/viridis.js":"htSS8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j4Teo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
exports.default = (0, _colorsJsDefault.default)("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

},{"../colors.js":"eiYm8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eiYm8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(specifier) {
        var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
        while(i < n)colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
        return colors;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lNYV9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
exports.default = (0, _colorsJsDefault.default)("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");

},{"../colors.js":"eiYm8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fK6db":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
exports.default = (0, _colorsJsDefault.default)("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");

},{"../colors.js":"eiYm8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7TRFs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
exports.default = (0, _colorsJsDefault.default)("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");

},{"../colors.js":"eiYm8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8GWIR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
exports.default = (0, _colorsJsDefault.default)("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");

},{"../colors.js":"eiYm8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5hLqW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
exports.default = (0, _colorsJsDefault.default)("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");

},{"../colors.js":"eiYm8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6lXdW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
exports.default = (0, _colorsJsDefault.default)("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");

},{"../colors.js":"eiYm8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ev0BU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
exports.default = (0, _colorsJsDefault.default)("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");

},{"../colors.js":"eiYm8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ltDSo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
exports.default = (0, _colorsJsDefault.default)("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");

},{"../colors.js":"eiYm8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gg57L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
exports.default = (0, _colorsJsDefault.default)("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");

},{"../colors.js":"eiYm8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aDyxU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"289bX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Interpolate = require("d3-interpolate");
exports.default = (scheme)=>(0, _d3Interpolate.interpolateRgbBasis)(scheme[scheme.length - 1]);

},{"d3-interpolate":"6jJyi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lJrID":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2UPPB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hn6CX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aBOAV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6osTP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hKUs9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eKp3o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9aNDP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"22lwr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4irWf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"964kK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3hdxq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9kVx1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"43RCM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dhE1L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Pqw0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3VnM6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f9Ai9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eI2jw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ao5E9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1pzBn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bVmeS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jsCuc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Waty":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2N3E3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gWy5h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map((0, _colorsJsDefault.default));
exports.default = (0, _rampJsDefault.default)(scheme);

},{"../colors.js":"eiYm8","../ramp.js":"289bX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2gM4s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(t) {
        t = Math.max(0, Math.min(1, t));
        return "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t * (35.34 - t * (2381.73 - t * (6402.7 - t * (7024.72 - t * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t * (170.73 + t * (52.82 - t * (131.46 - t * (176.58 - t * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t * (442.36 - t * (2482.43 - t * (6167.24 - t * (6614.94 - t * 2475.67))))))) + ")";
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bK5z7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Color = require("d3-color");
var _d3Interpolate = require("d3-interpolate");
exports.default = (0, _d3Interpolate.interpolateCubehelixLong)((0, _d3Color.cubehelix)(300, 0.5, 0.0), (0, _d3Color.cubehelix)(-240, 0.5, 1.0));

},{"d3-color":"grhaa","d3-interpolate":"6jJyi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bjHKO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "warm", ()=>warm);
parcelHelpers.export(exports, "cool", ()=>cool);
parcelHelpers.export(exports, "default", ()=>function(t) {
        if (t < 0 || t > 1) t -= Math.floor(t);
        var ts = Math.abs(t - 0.5);
        c.h = 360 * t - 100;
        c.s = 1.5 - 1.5 * ts;
        c.l = 0.8 - 0.9 * ts;
        return c + "";
    });
var _d3Color = require("d3-color");
var _d3Interpolate = require("d3-interpolate");
var warm = (0, _d3Interpolate.interpolateCubehelixLong)((0, _d3Color.cubehelix)(-100, 0.75, 0.35), (0, _d3Color.cubehelix)(80, 1.50, 0.8));
var cool = (0, _d3Interpolate.interpolateCubehelixLong)((0, _d3Color.cubehelix)(260, 0.75, 0.35), (0, _d3Color.cubehelix)(80, 1.50, 0.8));
var c = (0, _d3Color.cubehelix)();

},{"d3-color":"grhaa","d3-interpolate":"6jJyi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hqiUB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(t) {
        var x;
        t = (0.5 - t) * Math.PI;
        c.r = 255 * (x = Math.sin(t)) * x;
        c.g = 255 * (x = Math.sin(t + pi_1_3)) * x;
        c.b = 255 * (x = Math.sin(t + pi_2_3)) * x;
        return c + "";
    });
var _d3Color = require("d3-color");
var c = (0, _d3Color.rgb)(), pi_1_3 = Math.PI / 3, pi_2_3 = Math.PI * 2 / 3;

},{"d3-color":"grhaa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6GvRp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(t) {
        t = Math.max(0, Math.min(1, t));
        return "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t * (1172.33 - t * (10793.56 - t * (33300.12 - t * (38394.49 - t * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t * (557.33 + t * (1225.33 - t * (3574.96 - t * (1073.77 + t * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t * (3211.1 - t * (15327.97 - t * (27814 - t * (22569.18 - t * 6838.66))))))) + ")";
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"htSS8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "magma", ()=>magma);
parcelHelpers.export(exports, "inferno", ()=>inferno);
parcelHelpers.export(exports, "plasma", ()=>plasma);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
function ramp(range) {
    var n = range.length;
    return function(t) {
        return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
    };
}
exports.default = ramp((0, _colorsJsDefault.default)("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
var magma = ramp((0, _colorsJsDefault.default)("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
var inferno = ramp((0, _colorsJsDefault.default)("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
var plasma = ramp((0, _colorsJsDefault.default)("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

},{"../colors.js":"eiYm8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hQoq0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "zoom", ()=>(0, _zoomJsDefault.default));
parcelHelpers.export(exports, "zoomTransform", ()=>(0, _transformJsDefault.default));
parcelHelpers.export(exports, "zoomIdentity", ()=>(0, _transformJs.identity));
parcelHelpers.export(exports, "ZoomTransform", ()=>(0, _transformJs.Transform));
var _zoomJs = require("./zoom.js");
var _zoomJsDefault = parcelHelpers.interopDefault(_zoomJs);
var _transformJs = require("./transform.js");
var _transformJsDefault = parcelHelpers.interopDefault(_transformJs);

},{"./zoom.js":"2QYtg","./transform.js":"2Dxqg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2QYtg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        var filter = defaultFilter, extent = defaultExtent, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable, scaleExtent = [
            0,
            Infinity
        ], translateExtent = [
            [
                -Infinity,
                -Infinity
            ],
            [
                Infinity,
                Infinity
            ]
        ], duration = 250, interpolate = (0, _d3Interpolate.interpolateZoom), listeners = (0, _d3Dispatch.dispatch)("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
        function zoom(selection) {
            selection.property("__zoom", defaultTransform).on("wheel.zoom", wheeled, {
                passive: false
            }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        zoom.transform = function(collection, transform, point, event) {
            var selection = collection.selection ? collection.selection() : collection;
            selection.property("__zoom", defaultTransform);
            if (collection !== selection) schedule(collection, transform, point, event);
            else selection.interrupt().each(function() {
                gesture(this, arguments).event(event).start().zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform).end();
            });
        };
        zoom.scaleBy = function(selection, k, p, event) {
            zoom.scaleTo(selection, function() {
                var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
                return k0 * k1;
            }, p, event);
        };
        zoom.scaleTo = function(selection, k, p, event) {
            zoom.transform(selection, function() {
                var e = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
                return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
            }, p, event);
        };
        zoom.translateBy = function(selection, x, y, event) {
            zoom.transform(selection, function() {
                return constrain(this.__zoom.translate(typeof x === "function" ? x.apply(this, arguments) : x, typeof y === "function" ? y.apply(this, arguments) : y), extent.apply(this, arguments), translateExtent);
            }, null, event);
        };
        zoom.translateTo = function(selection, x, y, p, event) {
            zoom.transform(selection, function() {
                var e = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
                return constrain((0, _transformJs.identity).translate(p0[0], p0[1]).scale(t.k).translate(typeof x === "function" ? -x.apply(this, arguments) : -x, typeof y === "function" ? -y.apply(this, arguments) : -y), e, translateExtent);
            }, p, event);
        };
        function scale(transform, k) {
            k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
            return k === transform.k ? transform : new (0, _transformJs.Transform)(k, transform.x, transform.y);
        }
        function translate(transform, p0, p1) {
            var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
            return x === transform.x && y === transform.y ? transform : new (0, _transformJs.Transform)(transform.k, x, y);
        }
        function centroid(extent) {
            return [
                (+extent[0][0] + +extent[1][0]) / 2,
                (+extent[0][1] + +extent[1][1]) / 2
            ];
        }
        function schedule(transition, transform, point, event) {
            transition.on("start.zoom", function() {
                gesture(this, arguments).event(event).start();
            }).on("interrupt.zoom end.zoom", function() {
                gesture(this, arguments).event(event).end();
            }).tween("zoom", function() {
                var that = this, args = arguments, g = gesture(that, args).event(event), e = extent.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform === "function" ? transform.apply(that, args) : transform, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
                return function(t) {
                    if (t === 1) t = b; // Avoid rounding error on end.
                    else {
                        var l = i(t), k = w / l[2];
                        t = new (0, _transformJs.Transform)(k, p[0] - l[0] * k, p[1] - l[1] * k);
                    }
                    g.zoom(null, t);
                };
            });
        }
        function gesture(that, args, clean) {
            return !clean && that.__zooming || new Gesture(that, args);
        }
        function Gesture(that, args) {
            this.that = that;
            this.args = args;
            this.active = 0;
            this.sourceEvent = null;
            this.extent = extent.apply(that, args);
            this.taps = 0;
        }
        Gesture.prototype = {
            event: function(event) {
                if (event) this.sourceEvent = event;
                return this;
            },
            start: function() {
                if (++this.active === 1) {
                    this.that.__zooming = this;
                    this.emit("start");
                }
                return this;
            },
            zoom: function(key, transform) {
                if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
                if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
                if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
                this.that.__zoom = transform;
                this.emit("zoom");
                return this;
            },
            end: function() {
                if (--this.active === 0) {
                    delete this.that.__zooming;
                    this.emit("end");
                }
                return this;
            },
            emit: function(type) {
                var d = (0, _d3Selection.select)(this.that).datum();
                listeners.call(type, this.that, new (0, _eventJsDefault.default)(type, {
                    sourceEvent: this.sourceEvent,
                    target: zoom,
                    type,
                    transform: this.that.__zoom,
                    dispatch: listeners
                }), d);
            }
        };
        function wheeled(event, ...args) {
            if (!filter.apply(this, arguments)) return;
            var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = (0, _d3Selection.pointer)(event);
            // If the mouse is in the same location as before, reuse it.
            // If there were recent wheel events, reset the wheel idle timeout.
            if (g.wheel) {
                if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) g.mouse[1] = t.invert(g.mouse[0] = p);
                clearTimeout(g.wheel);
            } else if (t.k === k) return;
            else {
                g.mouse = [
                    p,
                    t.invert(p)
                ];
                (0, _d3Transition.interrupt)(this);
                g.start();
            }
            (0, _noeventJsDefault.default)(event);
            g.wheel = setTimeout(wheelidled, wheelDelay);
            g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
            function wheelidled() {
                g.wheel = null;
                g.end();
            }
        }
        function mousedowned(event, ...args) {
            if (touchending || !filter.apply(this, arguments)) return;
            var currentTarget = event.currentTarget, g = gesture(this, args, true).event(event), v = (0, _d3Selection.select)(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = (0, _d3Selection.pointer)(event, currentTarget), x0 = event.clientX, y0 = event.clientY;
            (0, _d3Drag.dragDisable)(event.view);
            (0, _noeventJs.nopropagation)(event);
            g.mouse = [
                p,
                this.__zoom.invert(p)
            ];
            (0, _d3Transition.interrupt)(this);
            g.start();
            function mousemoved(event) {
                (0, _noeventJsDefault.default)(event);
                if (!g.moved) {
                    var dx = event.clientX - x0, dy = event.clientY - y0;
                    g.moved = dx * dx + dy * dy > clickDistance2;
                }
                g.event(event).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = (0, _d3Selection.pointer)(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
            }
            function mouseupped(event) {
                v.on("mousemove.zoom mouseup.zoom", null);
                (0, _d3Drag.dragEnable)(event.view, g.moved);
                (0, _noeventJsDefault.default)(event);
                g.event(event).end();
            }
        }
        function dblclicked(event, ...args) {
            if (!filter.apply(this, arguments)) return;
            var t0 = this.__zoom, p0 = (0, _d3Selection.pointer)(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
            (0, _noeventJsDefault.default)(event);
            if (duration > 0) (0, _d3Selection.select)(this).transition().duration(duration).call(schedule, t1, p0, event);
            else (0, _d3Selection.select)(this).call(zoom.transform, t1, p0, event);
        }
        function touchstarted(event, ...args) {
            if (!filter.apply(this, arguments)) return;
            var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
            (0, _noeventJs.nopropagation)(event);
            for(i = 0; i < n; ++i){
                t = touches[i], p = (0, _d3Selection.pointer)(t, this);
                p = [
                    p,
                    this.__zoom.invert(p),
                    t.identifier
                ];
                if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
                else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
            }
            if (touchstarting) touchstarting = clearTimeout(touchstarting);
            if (started) {
                if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() {
                    touchstarting = null;
                }, touchDelay);
                (0, _d3Transition.interrupt)(this);
                g.start();
            }
        }
        function touchmoved(event, ...args) {
            if (!this.__zooming) return;
            var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
            (0, _noeventJsDefault.default)(event);
            for(i = 0; i < n; ++i){
                t = touches[i], p = (0, _d3Selection.pointer)(t, this);
                if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
                else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
            }
            t = g.that.__zoom;
            if (g.touch1) {
                var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
                t = scale(t, Math.sqrt(dp / dl));
                p = [
                    (p0[0] + p1[0]) / 2,
                    (p0[1] + p1[1]) / 2
                ];
                l = [
                    (l0[0] + l1[0]) / 2,
                    (l0[1] + l1[1]) / 2
                ];
            } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
            else return;
            g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
        }
        function touchended(event, ...args) {
            if (!this.__zooming) return;
            var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
            (0, _noeventJs.nopropagation)(event);
            if (touchending) clearTimeout(touchending);
            touchending = setTimeout(function() {
                touchending = null;
            }, touchDelay);
            for(i = 0; i < n; ++i){
                t = touches[i];
                if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
                else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
            }
            if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
            if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
            else {
                g.end();
                // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
                if (g.taps === 2) {
                    t = (0, _d3Selection.pointer)(t, this);
                    if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
                        var p = (0, _d3Selection.select)(this).on("dblclick.zoom");
                        if (p) p.apply(this, arguments);
                    }
                }
            }
        }
        zoom.wheelDelta = function(_) {
            return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(+_), zoom) : wheelDelta;
        };
        zoom.filter = function(_) {
            return arguments.length ? (filter = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(!!_), zoom) : filter;
        };
        zoom.touchable = function(_) {
            return arguments.length ? (touchable = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(!!_), zoom) : touchable;
        };
        zoom.extent = function(_) {
            return arguments.length ? (extent = typeof _ === "function" ? _ : (0, _constantJsDefault.default)([
                [
                    +_[0][0],
                    +_[0][1]
                ],
                [
                    +_[1][0],
                    +_[1][1]
                ]
            ]), zoom) : extent;
        };
        zoom.scaleExtent = function(_) {
            return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [
                scaleExtent[0],
                scaleExtent[1]
            ];
        };
        zoom.translateExtent = function(_) {
            return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [
                [
                    translateExtent[0][0],
                    translateExtent[0][1]
                ],
                [
                    translateExtent[1][0],
                    translateExtent[1][1]
                ]
            ];
        };
        zoom.constrain = function(_) {
            return arguments.length ? (constrain = _, zoom) : constrain;
        };
        zoom.duration = function(_) {
            return arguments.length ? (duration = +_, zoom) : duration;
        };
        zoom.interpolate = function(_) {
            return arguments.length ? (interpolate = _, zoom) : interpolate;
        };
        zoom.on = function() {
            var value = listeners.on.apply(listeners, arguments);
            return value === listeners ? zoom : value;
        };
        zoom.clickDistance = function(_) {
            return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
        };
        zoom.tapDistance = function(_) {
            return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
        };
        return zoom;
    });
var _d3Dispatch = require("d3-dispatch");
var _d3Drag = require("d3-drag");
var _d3Interpolate = require("d3-interpolate");
var _d3Selection = require("d3-selection");
var _d3Transition = require("d3-transition");
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _eventJs = require("./event.js");
var _eventJsDefault = parcelHelpers.interopDefault(_eventJs);
var _transformJs = require("./transform.js");
var _noeventJs = require("./noevent.js");
var _noeventJsDefault = parcelHelpers.interopDefault(_noeventJs);
// Ignore right-click, since that should open the context menu.
// except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
function defaultFilter(event) {
    return (!event.ctrlKey || event.type === "wheel") && !event.button;
}
function defaultExtent() {
    var e = this;
    if (e instanceof SVGElement) {
        e = e.ownerSVGElement || e;
        if (e.hasAttribute("viewBox")) {
            e = e.viewBox.baseVal;
            return [
                [
                    e.x,
                    e.y
                ],
                [
                    e.x + e.width,
                    e.y + e.height
                ]
            ];
        }
        return [
            [
                0,
                0
            ],
            [
                e.width.baseVal.value,
                e.height.baseVal.value
            ]
        ];
    }
    return [
        [
            0,
            0
        ],
        [
            e.clientWidth,
            e.clientHeight
        ]
    ];
}
function defaultTransform() {
    return this.__zoom || (0, _transformJs.identity);
}
function defaultWheelDelta(event) {
    return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
}
function defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
}
function defaultConstrain(transform, extent, translateExtent) {
    var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
    return transform.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
}

},{"d3-dispatch":"5WtHO","d3-drag":"hGy7N","d3-interpolate":"6jJyi","d3-selection":"gn9gd","d3-transition":"4lorl","./constant.js":"84Lz7","./event.js":"8AEix","./transform.js":"2Dxqg","./noevent.js":"jokv0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"84Lz7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (x)=>()=>x;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8AEix":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ZoomEvent);
function ZoomEvent(type, { sourceEvent, target, transform, dispatch }) {
    Object.defineProperties(this, {
        type: {
            value: type,
            enumerable: true,
            configurable: true
        },
        sourceEvent: {
            value: sourceEvent,
            enumerable: true,
            configurable: true
        },
        target: {
            value: target,
            enumerable: true,
            configurable: true
        },
        transform: {
            value: transform,
            enumerable: true,
            configurable: true
        },
        _: {
            value: dispatch
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Dxqg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Transform", ()=>Transform);
parcelHelpers.export(exports, "identity", ()=>identity);
parcelHelpers.export(exports, "default", ()=>transform);
function Transform(k, x, y) {
    this.k = k;
    this.x = x;
    this.y = y;
}
Transform.prototype = {
    constructor: Transform,
    scale: function(k) {
        return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
    },
    translate: function(x, y) {
        return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
    },
    apply: function(point) {
        return [
            point[0] * this.k + this.x,
            point[1] * this.k + this.y
        ];
    },
    applyX: function(x) {
        return x * this.k + this.x;
    },
    applyY: function(y) {
        return y * this.k + this.y;
    },
    invert: function(location) {
        return [
            (location[0] - this.x) / this.k,
            (location[1] - this.y) / this.k
        ];
    },
    invertX: function(x) {
        return (x - this.x) / this.k;
    },
    invertY: function(y) {
        return (y - this.y) / this.k;
    },
    rescaleX: function(x) {
        return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
    },
    rescaleY: function(y) {
        return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
    },
    toString: function() {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
};
var identity = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node) {
    while(!node.__zoom)if (!(node = node.parentNode)) return identity;
    return node.__zoom;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jokv0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nopropagation", ()=>nopropagation);
parcelHelpers.export(exports, "default", ()=>function(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
    });
function nopropagation(event) {
    event.stopImmediatePropagation();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["j9r0q","ebWYT"], "ebWYT", "parcelRequired02e")

//# sourceMappingURL=index.739bf03c.js.map
