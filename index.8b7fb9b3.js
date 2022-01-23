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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
})({"cSv3F":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "21352e468b7fb9b3";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3auaO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
/* global process */ var _viewer = require("./viewer");
var _viewerDefault = parcelHelpers.interopDefault(_viewer);
var _config = require("./config");
const viewer = new _viewerDefault.default();
// init app
const [[{ url: ccaa  }, { url: prov  }]] = _config.URLS // ES
;
Promise.all([
    fetch(ccaa).then((r)=>r.json()
    ),
    fetch(prov).then((r)=>r.json()
    ), 
]).then(([features, lines])=>viewer.load({
        features,
        lines
    })
);

},{"./viewer":"legg8","./config":"6V52N","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"legg8":[function(require,module,exports) {
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
const getId = _helpers.getProp("properties", _config.FEATURE_ID);
const getValues = _helpers.getProp("properties", _config.FEATURE_VALUES);
const getDesc = _helpers.getProp("properties", _config.FEATURE_DESC);
const getCode = _helpers.getProp("properties", _config.FEATURE_CODE);
class Visor {
    constructor(){
        this.build();
        this.resize();
        this.tooltip = new _tooltipDefault.default(this.map, {
            content: (e)=>this.onTooltipContent(e)
        });
        new _themeDefault.default(this.sidebar);
        this.sidebar.append("div").attr("class", "info card").append("a").attr("class", "control__button").attr("href", "https://wiki.openstreetmap.org/wiki/ES:Espa%C3%B1a/1Calle1Nombre").attr("target", "_blank").html(_icons.infoBtn);
        addEventListener("resize", ()=>this.onResize()
        );
    }
    build() {
        // static elements
        this.map = _d3Selection.select("#map");
        this.svg = this.map.append("svg").attr("preserveAspectRatio", "xMinYMin meet").on("click", (e)=>this.onMapClick(e)
        );
        this.g = this.svg.append("g");
        this.gBase = this.g.append("g");
        this.gFeatures = this.g.append("g");
        this.gSlider = this.svg.append("g");
        this.sidebar = this.map.append("div").attr("class", "sidebar");
        this.gAttribution = this.map.append("div").attr("class", "attribution").html("&copy; <a href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\">OpenStreetMap</a> contributors");
        // common functions
        this.z = _d3Zoom.zoom().scaleExtent([
            1,
            40
        ]);
        this.z.on("zoom", (e)=>this.onZoom(e)
        );
        this.projection = _d3CompositeProjections.geoConicConformalSpain();
        this.timeScale = _d3Scale.scalePoint();
        this.range = _d3ScaleChromatic.schemeGreens[9];
        this.colorScale = _d3Scale.scaleQuantile(this.range);
        this.tick = null;
        this.INTERVAL_TIME = 1500;
        this.marginBase = 0.02;
        // variables
        this.currentGroup = null;
        this.currentCode = null;
    }
    resize() {
        ({ width: this.width , height: this.height  } = this.map.node().getBoundingClientRect());
        this.svg.attr("viewBox", [
            0,
            0,
            this.width,
            this.height
        ]);
    }
    load({ features , lines  }) {
        const [featureProp] = Object.keys(features.objects);
        const [linesProp] = Object.keys(lines.objects);
        this.baseData = _topojsonClient.feature(features, features.objects[featureProp]);
        this.baseLines = _topojsonClient.mesh(lines, lines.objects[linesProp]);
        // set the differents month-year tuples
        this.currentMonths = [
            ...new Set(this.baseData.features.flatMap(({ properties: { values  }  })=>Object.keys(values)
            ))
        ].sort().filter(Boolean);
        // set the most up to date month
        this.currentMonthIx = this.currentMonths.length - 1;
        this.timeScale.domain(this.currentMonths);
        if (!this.legend) this.legend = new _legendDefault.default(this.sidebar, {
            range: this.range,
            colorScale: this.colorScale
        });
        if (!this.controls) this.controls = new _controlsDefault.default(this.sidebar, {
            play: ()=>this.onPlay()
            ,
            stop: ()=>this.onStop()
        });
        if (!this.slider) {
            this.slider = new _sliderDefault.default(this.gSlider, {
                drag: (e)=>this.onDrag(e)
                ,
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
        this.currentFeature = _topojsonClient.feature(topojson, topojson.objects[prop]);
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
        const t = _d3Transition.transition().duration(this.INTERVAL_TIME * 0.9);
        const [[x0, y0], [x1, y1]] = _d3Geo.geoPath(this.projection).bounds({
            ...this.baseData,
            features: this.baseData.features.filter((d)=>!this.currentGroup || getId(d) === this.currentGroup
            )
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
        this.svg.transition(t).call(this.z.transform, _d3Zoom.zoomIdentity.translate(this.width / 2, this.height / 2).scale(Math.min(8, 0.9 / Math.max((x1 - x0) / this.width, (y1 - y0) / this.height))).translate(-(x0 + x1) / 2, -(y0 + y1) / 2));
        this.gBase.selectAll("path").data(this.baseData.features, getId).join((enter1)=>enter1.append("path").attr("d", _d3Geo.geoPath(this.projection)).attr("cursor", "pointer").attr("fill-opacity", 1).on("click", (_, d)=>this.onBaseClick(d)
            ).call((enter)=>enter.transition(t).attr("fill", (d)=>this.setColor(d)
                )
            ).on("mouseenter", (e, feature)=>this.onBaseMouseenter(e, {
                    feature,
                    months: this.currentMonths,
                    current: this.currentMonths[this.currentMonthIx]
                })
            ).on("mouseleave", (e)=>this.onBaseMouseleave(e)
            )
        , (update1)=>{
            if (this.currentGroup) update1.transition(t).attr("fill-opacity", 0.2).attr("fill", "#000").style("pointer-events", "none");
            else update1.call((update)=>update.transition(t).attr("d", _d3Geo.geoPath(this.projection)).attr("fill", (d)=>this.setColor(d)
                ).attr("fill-opacity", 1).style("pointer-events", "auto")
            );
        });
        this.gBase.append("path").datum(this.baseLines).attr("d", _d3Geo.geoPath(this.projection)).attr("fill", "none").attr("stroke", "#003545").attr("stroke-width", 0.5).attr("stroke-linejoin", "round").style("pointer-events", "none");
    }
    renderFeature() {
        this.projection.fitExtent(this.currentSize, this.currentFeature);
        const isFeatureActive = (d)=>{
            if (!this.currentCode) return true;
            return this.currentCode === getCode(d);
        };
        const t = _d3Transition.transition().duration(this.INTERVAL_TIME * 0.9);
        if (this.currentFeature) {
            const subset = this.currentFeature.features.filter(isFeatureActive);
            this.setLegend(subset);
            const [[x0, y0], [x1, y1]] = _d3Geo.geoPath(this.projection).bounds({
                ...this.currentFeature,
                features: subset
            });
            this.svg.call(this.z);
            this.svg.transition(t).call(this.z.transform, _d3Zoom.zoomIdentity.translate(this.width / 2, this.height / 2).scale(Math.min(8, 0.9 / Math.max((x1 - x0) / this.width, (y1 - y0) / this.height))).translate(-(x0 + x1) / 2, -(y0 + y1) / 2));
        }
        this.gFeatures.selectAll("path").data(this.currentFeature ? this.currentFeature.features.map((d)=>({
                ...d,
                activated: isFeatureActive(d)
            })
        ) : [], getId).join((enter2)=>enter2.append("path").attr("d", _d3Geo.geoPath(this.projection)).attr("fill", "#000").attr("stroke", "#000").attr("stroke-alignment", "inner").attr("cursor", "pointer").style("vector-effect", "non-scaling-stroke").style("pointer-events", "auto").call((enter)=>enter.transition(t).attr("fill", (d)=>this.setColor(d)
                ).attr("stroke", (d)=>this.setColor(d)
                )
            ).on("mouseenter", (e, feature)=>this.onFeatureMouseenter(e, {
                    feature,
                    months: this.currentMonths,
                    current: this.currentMonths[this.currentMonthIx]
                })
            ).on("mouseleave", (e)=>this.onFeatureMouseleave(e)
            ).on("click", (e, feature)=>this.onFeatureClick(e, {
                    feature
                })
            )
        , (update2)=>{
            // reduce the number of transitions
            update2.filter(({ activated  })=>!activated
            ).attr("d", _d3Geo.geoPath(this.projection)).attr("fill", "#000").attr("stroke", "var(--bg)").style("pointer-events", "none");
            return update2.filter(({ activated  })=>!!activated
            ).filter((d)=>{
                const [current, previous] = [
                    this.currentMonths[this.currentMonthIx],
                    this.currentMonths[this.currentMonthIx - 1]
                ];
                const values = getValues(d);
                return values[current] !== values[previous];
            }).call((update)=>update.transition(t).attr("d", _d3Geo.geoPath(this.projection)).attr("fill", (d)=>this.setColor(d)
                ).attr("stroke", (d)=>this.setColor(d)
                ).style("pointer-events", "auto")
            );
        }, (exit1)=>exit1.call((exit)=>exit.attr("stroke", "none").transition(t).attr("fill-opacity", 0).remove()
            )
        );
    }
    setColor(feature) {
        return this.colorScale(getValues(feature)[this.currentMonths[this.currentMonthIx]] || 0);
    }
    setLegend(features1) {
        const values1 = features1.flatMap(({ properties: { values  }  })=>Object.values(values)
        );
        const [min, max] = [
            Math.max(0, Math.min(...values1)),
            Math.min(0.99, Math.max(...values1))
        ];
        this.colorScale.domain([
            ...Array.from({
                length: this.range.length - 1
            }, (_, i)=>min + i * ((max - min) / (this.range.length - 2))
            ),
            1
        ]);
        this.legend.render();
    }
    onMapClick({ target  }) {
        if (this.svg.node() === target) {
            this.svg.transition().duration(this.INTERVAL_TIME * 0.9).call(this.z.transform, _d3Zoom.zoomIdentity);
            this.currentGroup = null;
            this.renderBase();
            this.currentFeature = null;
            this.renderFeature();
            this.legend.render();
        }
    }
    onZoom({ transform  }) {
        this.g.attr("transform", transform);
    }
    onBaseClick(feature1) {
        // search in 2nd array
        const { url , code  } = _config.URLS[1].find((x)=>x.code === getId(feature1)
        );
        this.currentGroup = code;
        this.renderBase();
        this.reload(url);
    }
    onBaseMouseenter(event, data) {
        _d3Selection.select(event.target).transition("mouse").duration(this.INTERVAL_TIME / 4).attr("fill", "#0dc5c1");
        this.tooltip.show(event, data);
    }
    onBaseMouseleave({ target: target1  }) {
        _d3Selection.select(target1).transition("mouse").duration(this.INTERVAL_TIME / 4).attr("fill", (d)=>this.setColor(d)
        );
        this.tooltip.hide();
    }
    onFeatureMouseenter(event1, data1) {
        _d3Selection.select(event1.target).raise().attr("stroke-width", 5).transition("mouse").duration(this.INTERVAL_TIME / 4).attr("fill", "#ffcaba").attr("stroke", "#310234");
        this.tooltip.show(event1, data1);
    }
    onFeatureMouseleave({ target: target2  }) {
        _d3Selection.select(target2).attr("stroke-width", 0).attr("stroke", "#000").transition("mouse").duration(this.INTERVAL_TIME / 4).attr("fill", (d)=>this.setColor(d)
        ).attr("stroke", (d)=>this.setColor(d)
        );
        this.tooltip.hide();
    }
    onFeatureClick(_, { feature: feature2  }) {
        this.currentCode = getCode(feature2);
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
        this.tick = _d3Timer.interval(()=>{
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
    onTooltipContent({ feature: feature3 , months , current  }) {
        const dateCell = (cell)=>_helpers.formatDate(new Date(cell), {
                month: "short",
                year: "2-digit"
            })
        ;
        const valueCell = (cell)=>_helpers.percent(getValues(feature3)[cell]) || "--"
        ;
        const tr = (row, isCurrent)=>`<tr ${isCurrent ? "class=\"current\"" : ""}><td>${dateCell(row)}</td><td>${valueCell(row)}</td></tr>`
        ;
        const caption = `<caption>${getDesc(feature3)}</caption>`;
        const thead = "<thead><th>Mes</th><th>%</th></thead>";
        const ellipsis = "<tr><td colspan=\"2\">...</td></tr>";
        const table = (content)=>`<table>${caption}${thead}<tbody>${content}</tbody></table>`
        ;
        let content1 = "";
        if (!months.slice(-6).includes(current)) content1 = `${ellipsis}${tr(current, true)}${ellipsis}${months.slice(-3).map((m)=>tr(m, current === m)
        ).join("")}`;
        else content1 = months.slice(-6).map((m)=>tr(m, current === m)
        ).join("");
        return table(content1);
    }
}
exports.default = Visor;

},{"d3-geo":"euFVP","d3-selection":"hgWtk","d3-timer":"82ygz","d3-transition":"cRYyR","d3-scale":"hrwOn","d3-scale-chromatic":"aFDOR","d3-zoom":"7E00u","d3-composite-projections":"apHmK","topojson-client":"dArDf","./helpers":"9RX9R","./config":"6V52N","./legend":"hYzmz","./controls":"iyhz9","./slider":"1O928","./tooltip":"efeRg","./theme":"6WRXe","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./icons":"bgFL6"}],"euFVP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "geoArea", ()=>_areaJsDefault.default
);
parcelHelpers.export(exports, "geoBounds", ()=>_boundsJsDefault.default
);
parcelHelpers.export(exports, "geoCentroid", ()=>_centroidJsDefault.default
);
parcelHelpers.export(exports, "geoCircle", ()=>_circleJsDefault.default
);
parcelHelpers.export(exports, "geoClipAntimeridian", ()=>_antimeridianJsDefault.default
);
parcelHelpers.export(exports, "geoClipCircle", ()=>_circleJsDefault1.default
);
parcelHelpers.export(exports, "geoClipExtent", ()=>_extentJsDefault.default
) // DEPRECATED! Use d3.geoIdentity().clipExtent(…).
;
parcelHelpers.export(exports, "geoClipRectangle", ()=>_rectangleJsDefault.default
);
parcelHelpers.export(exports, "geoContains", ()=>_containsJsDefault.default
);
parcelHelpers.export(exports, "geoDistance", ()=>_distanceJsDefault.default
);
parcelHelpers.export(exports, "geoGraticule", ()=>_graticuleJsDefault.default
);
parcelHelpers.export(exports, "geoGraticule10", ()=>_graticuleJs.graticule10
);
parcelHelpers.export(exports, "geoInterpolate", ()=>_interpolateJsDefault.default
);
parcelHelpers.export(exports, "geoLength", ()=>_lengthJsDefault.default
);
parcelHelpers.export(exports, "geoPath", ()=>_indexJsDefault.default
);
parcelHelpers.export(exports, "geoAlbers", ()=>_albersJsDefault.default
);
parcelHelpers.export(exports, "geoAlbersUsa", ()=>_albersUsaJsDefault.default
);
parcelHelpers.export(exports, "geoAzimuthalEqualArea", ()=>_azimuthalEqualAreaJsDefault.default
);
parcelHelpers.export(exports, "geoAzimuthalEqualAreaRaw", ()=>_azimuthalEqualAreaJs.azimuthalEqualAreaRaw
);
parcelHelpers.export(exports, "geoAzimuthalEquidistant", ()=>_azimuthalEquidistantJsDefault.default
);
parcelHelpers.export(exports, "geoAzimuthalEquidistantRaw", ()=>_azimuthalEquidistantJs.azimuthalEquidistantRaw
);
parcelHelpers.export(exports, "geoConicConformal", ()=>_conicConformalJsDefault.default
);
parcelHelpers.export(exports, "geoConicConformalRaw", ()=>_conicConformalJs.conicConformalRaw
);
parcelHelpers.export(exports, "geoConicEqualArea", ()=>_conicEqualAreaJsDefault.default
);
parcelHelpers.export(exports, "geoConicEqualAreaRaw", ()=>_conicEqualAreaJs.conicEqualAreaRaw
);
parcelHelpers.export(exports, "geoConicEquidistant", ()=>_conicEquidistantJsDefault.default
);
parcelHelpers.export(exports, "geoConicEquidistantRaw", ()=>_conicEquidistantJs.conicEquidistantRaw
);
parcelHelpers.export(exports, "geoEqualEarth", ()=>_equalEarthJsDefault.default
);
parcelHelpers.export(exports, "geoEqualEarthRaw", ()=>_equalEarthJs.equalEarthRaw
);
parcelHelpers.export(exports, "geoEquirectangular", ()=>_equirectangularJsDefault.default
);
parcelHelpers.export(exports, "geoEquirectangularRaw", ()=>_equirectangularJs.equirectangularRaw
);
parcelHelpers.export(exports, "geoGnomonic", ()=>_gnomonicJsDefault.default
);
parcelHelpers.export(exports, "geoGnomonicRaw", ()=>_gnomonicJs.gnomonicRaw
);
parcelHelpers.export(exports, "geoIdentity", ()=>_identityJsDefault.default
);
parcelHelpers.export(exports, "geoProjection", ()=>_indexJsDefault1.default
);
parcelHelpers.export(exports, "geoProjectionMutator", ()=>_indexJs1.projectionMutator
);
parcelHelpers.export(exports, "geoMercator", ()=>_mercatorJsDefault.default
);
parcelHelpers.export(exports, "geoMercatorRaw", ()=>_mercatorJs.mercatorRaw
);
parcelHelpers.export(exports, "geoNaturalEarth1", ()=>_naturalEarth1JsDefault.default
);
parcelHelpers.export(exports, "geoNaturalEarth1Raw", ()=>_naturalEarth1Js.naturalEarth1Raw
);
parcelHelpers.export(exports, "geoOrthographic", ()=>_orthographicJsDefault.default
);
parcelHelpers.export(exports, "geoOrthographicRaw", ()=>_orthographicJs.orthographicRaw
);
parcelHelpers.export(exports, "geoStereographic", ()=>_stereographicJsDefault.default
);
parcelHelpers.export(exports, "geoStereographicRaw", ()=>_stereographicJs.stereographicRaw
);
parcelHelpers.export(exports, "geoTransverseMercator", ()=>_transverseMercatorJsDefault.default
);
parcelHelpers.export(exports, "geoTransverseMercatorRaw", ()=>_transverseMercatorJs.transverseMercatorRaw
);
parcelHelpers.export(exports, "geoRotation", ()=>_rotationJsDefault.default
);
parcelHelpers.export(exports, "geoStream", ()=>_streamJsDefault.default
);
parcelHelpers.export(exports, "geoTransform", ()=>_transformJsDefault.default
);
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

},{"./area.js":"cBTzh","./bounds.js":"8IvkG","./centroid.js":"hDVEJ","./circle.js":"5kSQi","./clip/antimeridian.js":"5t4iH","./clip/circle.js":"iIbFI","./clip/extent.js":"g626F","./clip/rectangle.js":"2xswT","./contains.js":"eYBc9","./distance.js":"glEIa","./graticule.js":"71CK6","./interpolate.js":"9aGW3","./length.js":"9Miu7","./path/index.js":"k9P5v","./projection/albers.js":"3Xlta","./projection/albersUsa.js":"YtNMK","./projection/azimuthalEqualArea.js":"7HnSn","./projection/azimuthalEquidistant.js":"ggmAs","./projection/conicConformal.js":"qkL9e","./projection/conicEqualArea.js":"c9BXq","./projection/conicEquidistant.js":"i4E3R","./projection/equalEarth.js":"2iIrI","./projection/equirectangular.js":"6r5uk","./projection/gnomonic.js":"gz9Xc","./projection/identity.js":"ipPmW","./projection/index.js":"i24sF","./projection/mercator.js":"fE71g","./projection/naturalEarth1.js":"gQDpu","./projection/orthographic.js":"3Wbli","./projection/stereographic.js":"hIzPd","./projection/transverseMercator.js":"4SRkZ","./rotation.js":"54Lv8","./stream.js":"jck2Y","./transform.js":"feffG","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cBTzh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "areaRingSum", ()=>areaRingSum
);
parcelHelpers.export(exports, "areaStream", ()=>areaStream
);
var _d3Array = require("d3-array");
var _mathJs = require("./math.js");
var _noopJs = require("./noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
var _streamJs = require("./stream.js");
var _streamJsDefault = parcelHelpers.interopDefault(_streamJs);
var areaRingSum = new _d3Array.Adder();
// hello?
var areaSum = new _d3Array.Adder(), lambda00, phi00, lambda0, cosPhi0, sinPhi0;
var areaStream = {
    point: _noopJsDefault.default,
    lineStart: _noopJsDefault.default,
    lineEnd: _noopJsDefault.default,
    polygonStart: function() {
        areaRingSum = new _d3Array.Adder();
        areaStream.lineStart = areaRingStart;
        areaStream.lineEnd = areaRingEnd;
    },
    polygonEnd: function() {
        var areaRing = +areaRingSum;
        areaSum.add(areaRing < 0 ? _mathJs.tau + areaRing : areaRing);
        this.lineStart = this.lineEnd = this.point = _noopJsDefault.default;
    },
    sphere: function() {
        areaSum.add(_mathJs.tau);
    }
};
function areaRingStart() {
    areaStream.point = areaPointFirst;
}
function areaRingEnd() {
    areaPoint(lambda00, phi00);
}
function areaPointFirst(lambda, phi) {
    areaStream.point = areaPoint;
    lambda00 = lambda, phi00 = phi;
    lambda *= _mathJs.radians, phi *= _mathJs.radians;
    lambda0 = lambda, cosPhi0 = _mathJs.cos(phi = phi / 2 + _mathJs.quarterPi), sinPhi0 = _mathJs.sin(phi);
}
function areaPoint(lambda, phi) {
    lambda *= _mathJs.radians, phi *= _mathJs.radians;
    phi = phi / 2 + _mathJs.quarterPi; // half the angular distance from south pole
    // Spherical excess E for a spherical triangle with vertices: south pole,
    // previous point, current point.  Uses a formula derived from Cagnoli’s
    // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
    var dLambda = lambda - lambda0, sdLambda = dLambda >= 0 ? 1 : -1, adLambda = sdLambda * dLambda, cosPhi = _mathJs.cos(phi), sinPhi = _mathJs.sin(phi), k = sinPhi0 * sinPhi, u = cosPhi0 * cosPhi + k * _mathJs.cos(adLambda), v = k * sdLambda * _mathJs.sin(adLambda);
    areaRingSum.add(_mathJs.atan2(v, u));
    // Advance the previous points.
    lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi;
}
exports.default = function(object) {
    areaSum = new _d3Array.Adder();
    _streamJsDefault.default(object, areaStream);
    return areaSum * 2;
};

},{"d3-array":"dclxS","./math.js":"7JyYl","./noop.js":"a5Top","./stream.js":"jck2Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dclxS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bisect", ()=>_bisectJsDefault.default
);
parcelHelpers.export(exports, "bisectRight", ()=>_bisectJs.bisectRight
);
parcelHelpers.export(exports, "bisectLeft", ()=>_bisectJs.bisectLeft
);
parcelHelpers.export(exports, "bisectCenter", ()=>_bisectJs.bisectCenter
);
parcelHelpers.export(exports, "ascending", ()=>_ascendingJsDefault.default
);
parcelHelpers.export(exports, "bisector", ()=>_bisectorJsDefault.default
);
parcelHelpers.export(exports, "count", ()=>_countJsDefault.default
);
parcelHelpers.export(exports, "cross", ()=>_crossJsDefault.default
);
parcelHelpers.export(exports, "cumsum", ()=>_cumsumJsDefault.default
);
parcelHelpers.export(exports, "descending", ()=>_descendingJsDefault.default
);
parcelHelpers.export(exports, "deviation", ()=>_deviationJsDefault.default
);
parcelHelpers.export(exports, "extent", ()=>_extentJsDefault.default
);
parcelHelpers.export(exports, "fsum", ()=>_fsumJsDefault.default
);
parcelHelpers.export(exports, "Adder", ()=>_fsumJs.Adder
);
parcelHelpers.export(exports, "group", ()=>_groupJsDefault.default
);
parcelHelpers.export(exports, "groups", ()=>_groupJs.groups
);
parcelHelpers.export(exports, "index", ()=>_groupJs.index
);
parcelHelpers.export(exports, "indexes", ()=>_groupJs.indexes
);
parcelHelpers.export(exports, "rollup", ()=>_groupJs.rollup
);
parcelHelpers.export(exports, "rollups", ()=>_groupJs.rollups
);
parcelHelpers.export(exports, "bin", ()=>_binJsDefault.default
) // Deprecated; use bin.
;
parcelHelpers.export(exports, "histogram", ()=>_binJsDefault.default
);
parcelHelpers.export(exports, "thresholdFreedmanDiaconis", ()=>_freedmanDiaconisJsDefault.default
);
parcelHelpers.export(exports, "thresholdScott", ()=>_scottJsDefault.default
);
parcelHelpers.export(exports, "thresholdSturges", ()=>_sturgesJsDefault.default
);
parcelHelpers.export(exports, "max", ()=>_maxJsDefault.default
);
parcelHelpers.export(exports, "maxIndex", ()=>_maxIndexJsDefault.default
);
parcelHelpers.export(exports, "mean", ()=>_meanJsDefault.default
);
parcelHelpers.export(exports, "median", ()=>_medianJsDefault.default
);
parcelHelpers.export(exports, "merge", ()=>_mergeJsDefault.default
);
parcelHelpers.export(exports, "min", ()=>_minJsDefault.default
);
parcelHelpers.export(exports, "minIndex", ()=>_minIndexJsDefault.default
);
parcelHelpers.export(exports, "nice", ()=>_niceJsDefault.default
);
parcelHelpers.export(exports, "pairs", ()=>_pairsJsDefault.default
);
parcelHelpers.export(exports, "permute", ()=>_permuteJsDefault.default
);
parcelHelpers.export(exports, "quantile", ()=>_quantileJsDefault.default
);
parcelHelpers.export(exports, "quantileSorted", ()=>_quantileJs.quantileSorted
);
parcelHelpers.export(exports, "quickselect", ()=>_quickselectJsDefault.default
);
parcelHelpers.export(exports, "range", ()=>_rangeJsDefault.default
);
parcelHelpers.export(exports, "least", ()=>_leastJsDefault.default
);
parcelHelpers.export(exports, "leastIndex", ()=>_leastIndexJsDefault.default
);
parcelHelpers.export(exports, "greatest", ()=>_greatestJsDefault.default
);
parcelHelpers.export(exports, "greatestIndex", ()=>_greatestIndexJsDefault.default
);
parcelHelpers.export(exports, "scan", ()=>_scanJsDefault.default
) // Deprecated; use leastIndex.
;
parcelHelpers.export(exports, "shuffle", ()=>_shuffleJsDefault.default
);
parcelHelpers.export(exports, "shuffler", ()=>_shuffleJs.shuffler
);
parcelHelpers.export(exports, "sum", ()=>_sumJsDefault.default
);
parcelHelpers.export(exports, "ticks", ()=>_ticksJsDefault.default
);
parcelHelpers.export(exports, "tickIncrement", ()=>_ticksJs.tickIncrement
);
parcelHelpers.export(exports, "tickStep", ()=>_ticksJs.tickStep
);
parcelHelpers.export(exports, "transpose", ()=>_transposeJsDefault.default
);
parcelHelpers.export(exports, "variance", ()=>_varianceJsDefault.default
);
parcelHelpers.export(exports, "zip", ()=>_zipJsDefault.default
);
parcelHelpers.export(exports, "every", ()=>_everyJsDefault.default
);
parcelHelpers.export(exports, "some", ()=>_someJsDefault.default
);
parcelHelpers.export(exports, "filter", ()=>_filterJsDefault.default
);
parcelHelpers.export(exports, "map", ()=>_mapJsDefault.default
);
parcelHelpers.export(exports, "reduce", ()=>_reduceJsDefault.default
);
parcelHelpers.export(exports, "reverse", ()=>_reverseJsDefault.default
);
parcelHelpers.export(exports, "sort", ()=>_sortJsDefault.default
);
parcelHelpers.export(exports, "difference", ()=>_differenceJsDefault.default
);
parcelHelpers.export(exports, "disjoint", ()=>_disjointJsDefault.default
);
parcelHelpers.export(exports, "intersection", ()=>_intersectionJsDefault.default
);
parcelHelpers.export(exports, "subset", ()=>_subsetJsDefault.default
);
parcelHelpers.export(exports, "superset", ()=>_supersetJsDefault.default
);
parcelHelpers.export(exports, "union", ()=>_unionJsDefault.default
);
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
var _fsumJsDefault = parcelHelpers.interopDefault(_fsumJs);
var _groupJs = require("./group.js");
var _groupJsDefault = parcelHelpers.interopDefault(_groupJs);
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

},{"./bisect.js":"aBOzL","./ascending.js":"is3Cq","./bisector.js":"d0uRQ","./count.js":"3W7W6","./cross.js":"9wmuf","./cumsum.js":"gTBYA","./descending.js":"3aHVG","./deviation.js":"gC5d9","./extent.js":"i65AD","./fsum.js":"kNcPo","./group.js":"9hlDG","./bin.js":"e29mp","./threshold/freedmanDiaconis.js":"YcDJP","./threshold/scott.js":"h9Xie","./threshold/sturges.js":"iBhHB","./max.js":"aKI7F","./maxIndex.js":"cI4hF","./mean.js":"522BH","./median.js":"25KY1","./merge.js":"lLqaS","./min.js":"ah5VG","./minIndex.js":"cjolc","./nice.js":"8MlNU","./pairs.js":"f10CX","./permute.js":"lBJIA","./quantile.js":"g22bz","./quickselect.js":"fusOg","./range.js":"aFuRJ","./least.js":"ewg2M","./leastIndex.js":"hCcEV","./greatest.js":"jX3nM","./greatestIndex.js":"5lFsk","./scan.js":"ek53c","./shuffle.js":"hrDvf","./sum.js":"5x489","./ticks.js":"eP3r2","./transpose.js":"eTl2h","./variance.js":"fFwh7","./zip.js":"g6Swo","./every.js":"j8w8G","./some.js":"258kt","./filter.js":"kmzCm","./map.js":"g8C0v","./reduce.js":"kJqMu","./reverse.js":"c5OzD","./sort.js":"iPqde","./difference.js":"4yCN3","./disjoint.js":"i51B2","./intersection.js":"xQI0g","./subset.js":"bSPhW","./superset.js":"30CTh","./union.js":"byxPk","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aBOzL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bisectRight", ()=>bisectRight
);
parcelHelpers.export(exports, "bisectLeft", ()=>bisectLeft
);
parcelHelpers.export(exports, "bisectCenter", ()=>bisectCenter
);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
var _bisectorJs = require("./bisector.js");
var _bisectorJsDefault = parcelHelpers.interopDefault(_bisectorJs);
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
const ascendingBisect = _bisectorJsDefault.default(_ascendingJsDefault.default);
const bisectRight = ascendingBisect.right;
const bisectLeft = ascendingBisect.left;
const bisectCenter = _bisectorJsDefault.default(_numberJsDefault.default).center;
exports.default = bisectRight;

},{"./ascending.js":"is3Cq","./bisector.js":"d0uRQ","./number.js":"bMc02","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"is3Cq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
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

},{}],"d0uRQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
exports.default = function(f) {
    let delta = f;
    let compare = f;
    if (f.length === 1) {
        delta = (d, x)=>f(d) - x
        ;
        compare = ascendingComparator(f);
    }
    function left(a, x, lo, hi) {
        if (lo == null) lo = 0;
        if (hi == null) hi = a.length;
        while(lo < hi){
            const mid = lo + hi >>> 1;
            if (compare(a[mid], x) < 0) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    }
    function right(a, x, lo, hi) {
        if (lo == null) lo = 0;
        if (hi == null) hi = a.length;
        while(lo < hi){
            const mid = lo + hi >>> 1;
            if (compare(a[mid], x) > 0) hi = mid;
            else lo = mid + 1;
        }
        return lo;
    }
    function center(a, x, lo, hi) {
        if (lo == null) lo = 0;
        if (hi == null) hi = a.length;
        const i = left(a, x, lo, hi - 1);
        return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
    }
    return {
        left,
        center,
        right
    };
};
function ascendingComparator(f) {
    return (d, x)=>_ascendingJsDefault.default(f(d), x)
    ;
}

},{"./ascending.js":"is3Cq","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bMc02":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "numbers", ()=>numbers
);
exports.default = function(x) {
    return x === null ? NaN : +x;
};
function* numbers(values, valueof) {
    if (valueof === undefined) {
        for (let value of values)if (value != null && (value = +value) >= value) yield value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) yield value;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3W7W6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function count1(values, valueof) {
    let count = 0;
    if (valueof === undefined) {
        for (let value of values)if (value != null && (value = +value) >= value) ++count;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) ++count;
    }
    return count;
}
exports.default = count1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9wmuf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function length1(array) {
    return array.length | 0;
}
function empty(length) {
    return !(length > 0);
}
function arrayify(values) {
    return typeof values !== "object" || "length" in values ? values : Array.from(values);
}
function reducer(reduce) {
    return (values)=>reduce(...values)
    ;
}
function cross(...values) {
    const reduce = typeof values[values.length - 1] === "function" && reducer(values.pop());
    values = values.map(arrayify);
    const lengths = values.map(length1);
    const j = values.length - 1;
    const index = new Array(j + 1).fill(0);
    const product = [];
    if (j < 0 || lengths.some(empty)) return product;
    while(true){
        product.push(index.map((j, i)=>values[i][j]
        ));
        let i = j;
        while(++index[i] === lengths[i]){
            if (i === 0) return reduce ? product.map(reduce) : product;
            index[i--] = 0;
        }
    }
}
exports.default = cross;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gTBYA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function cumsum(values, valueof) {
    var sum = 0, index = 0;
    return Float64Array.from(values, valueof === undefined ? (v)=>sum += +v || 0
     : (v)=>sum += +valueof(v, index++, values) || 0
    );
}
exports.default = cumsum;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3aHVG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(a, b) {
    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gC5d9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _varianceJs = require("./variance.js");
var _varianceJsDefault = parcelHelpers.interopDefault(_varianceJs);
function deviation(values, valueof) {
    const v = _varianceJsDefault.default(values, valueof);
    return v ? Math.sqrt(v) : v;
}
exports.default = deviation;

},{"./variance.js":"fFwh7","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fFwh7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function variance(values, valueof) {
    let count = 0;
    let delta;
    let mean = 0;
    let sum = 0;
    if (valueof === undefined) {
        for (let value of values)if (value != null && (value = +value) >= value) {
            delta = value - mean;
            mean += delta / ++count;
            sum += delta * (value - mean);
        }
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
            delta = value - mean;
            mean += delta / ++count;
            sum += delta * (value - mean);
        }
    }
    if (count > 1) return sum / (count - 1);
}
exports.default = variance;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"i65AD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(values, valueof) {
    let min;
    let max;
    if (valueof === undefined) {
        for (const value of values)if (value != null) {
            if (min === undefined) {
                if (value >= value) min = max = value;
            } else {
                if (min > value) min = value;
                if (max < value) max = value;
            }
        }
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null) {
            if (min === undefined) {
                if (value >= value) min = max = value;
            } else {
                if (min > value) min = value;
                if (max < value) max = value;
            }
        }
    }
    return [
        min,
        max
    ];
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kNcPo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// https://github.com/python/cpython/blob/a74eea238f5baba15797e2e8b570d153bc8690a7/Modules/mathmodule.c#L1423
parcelHelpers.export(exports, "Adder", ()=>Adder
);
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
exports.default = function(values, valueof) {
    const adder = new Adder();
    if (valueof === undefined) {
        for (let value of values)if (value = +value) adder.add(value);
    } else {
        let index = -1;
        for (let value of values)if (value = +valueof(value, ++index, values)) adder.add(value);
    }
    return +adder;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9hlDG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "groups", ()=>groups1
);
parcelHelpers.export(exports, "rollup", ()=>rollup
);
parcelHelpers.export(exports, "rollups", ()=>rollups
);
parcelHelpers.export(exports, "index", ()=>index1
);
parcelHelpers.export(exports, "indexes", ()=>indexes
);
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
function group1(values, ...keys) {
    return nest(values, _identityJsDefault.default, _identityJsDefault.default, keys);
}
exports.default = group1;
function groups1(values, ...keys) {
    return nest(values, Array.from, _identityJsDefault.default, keys);
}
function rollup(values, reduce, ...keys) {
    return nest(values, _identityJsDefault.default, reduce, keys);
}
function rollups(values, reduce, ...keys) {
    return nest(values, Array.from, reduce, keys);
}
function index1(values, ...keys) {
    return nest(values, _identityJsDefault.default, unique, keys);
}
function indexes(values, ...keys) {
    return nest(values, Array.from, unique, keys);
}
function unique(values) {
    if (values.length !== 1) throw new Error("duplicate key");
    return values[0];
}
function nest(values2, map, reduce, keys) {
    return (function regroup(values, i) {
        if (i >= keys.length) return reduce(values);
        const groups = new Map();
        const keyof = keys[i++];
        let index = -1;
        for (const value of values){
            const key = keyof(value, ++index, values);
            const group = groups.get(key);
            if (group) group.push(value);
            else groups.set(key, [
                value
            ]);
        }
        for (const [key, values1] of groups)groups.set(key, regroup(values1, i));
        return map(groups);
    })(values2, 0);
}

},{"./identity.js":"4zs3O","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4zs3O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(x) {
    return x;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"e29mp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayJs = require("./array.js");
var _bisectJs = require("./bisect.js");
var _bisectJsDefault = parcelHelpers.interopDefault(_bisectJs);
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _extentJs = require("./extent.js");
var _extentJsDefault = parcelHelpers.interopDefault(_extentJs);
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _niceJs = require("./nice.js");
var _niceJsDefault = parcelHelpers.interopDefault(_niceJs);
var _ticksJs = require("./ticks.js");
var _ticksJsDefault = parcelHelpers.interopDefault(_ticksJs);
var _sturgesJs = require("./threshold/sturges.js");
var _sturgesJsDefault = parcelHelpers.interopDefault(_sturgesJs);
exports.default = function() {
    var value = _identityJsDefault.default, domain = _extentJsDefault.default, threshold = _sturgesJsDefault.default;
    function histogram(data) {
        if (!Array.isArray(data)) data = Array.from(data);
        var i, n = data.length, x, values = new Array(n);
        for(i = 0; i < n; ++i)values[i] = value(data[i], i, data);
        var xz = domain(values), x0 = xz[0], x1 = xz[1], tz = threshold(values, x0, x1);
        // Convert number of thresholds into uniform thresholds, and nice the
        // default domain accordingly.
        if (!Array.isArray(tz)) {
            const max = x1, tn = +tz;
            if (domain === _extentJsDefault.default) [x0, x1] = _niceJsDefault.default(x0, x1, tn);
            tz = _ticksJsDefault.default(x0, x1, tn);
            // If the last threshold is coincident with the domain’s upper bound, the
            // last bin will be zero-width. If the default domain is used, and this
            // last threshold is coincident with the maximum input value, we can
            // extend the niced upper bound by one tick to ensure uniform bin widths;
            // otherwise, we simply remove the last threshold. Note that we don’t
            // coerce values or the domain to numbers, and thus must be careful to
            // compare order (>=) rather than strict equality (===)!
            if (tz[tz.length - 1] >= x1) {
                if (max >= x1 && domain === _extentJsDefault.default) {
                    const step = _ticksJs.tickIncrement(x0, x1, tn);
                    if (isFinite(step)) {
                        if (step > 0) x1 = (Math.floor(x1 / step) + 1) * step;
                        else if (step < 0) x1 = (Math.ceil(x1 * -step) + 1) / -step;
                    }
                } else tz.pop();
            }
        }
        // Remove any thresholds outside the domain.
        var m = tz.length;
        while(tz[0] <= x0)tz.shift(), --m;
        while(tz[m - 1] > x1)tz.pop(), --m;
        var bins = new Array(m + 1), bin;
        // Initialize bins.
        for(i = 0; i <= m; ++i){
            bin = bins[i] = [];
            bin.x0 = i > 0 ? tz[i - 1] : x0;
            bin.x1 = i < m ? tz[i] : x1;
        }
        // Assign data to bins by value, ignoring any outside the domain.
        for(i = 0; i < n; ++i){
            x = values[i];
            if (x0 <= x && x <= x1) bins[_bisectJsDefault.default(tz, x, 0, m)].push(data[i]);
        }
        return bins;
    }
    histogram.value = function(_) {
        return arguments.length ? (value = typeof _ === "function" ? _ : _constantJsDefault.default(_), histogram) : value;
    };
    histogram.domain = function(_) {
        return arguments.length ? (domain = typeof _ === "function" ? _ : _constantJsDefault.default([
            _[0],
            _[1]
        ]), histogram) : domain;
    };
    histogram.thresholds = function(_) {
        return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? _constantJsDefault.default(_arrayJs.slice.call(_)) : _constantJsDefault.default(_), histogram) : threshold;
    };
    return histogram;
};

},{"./array.js":"iz59S","./bisect.js":"aBOzL","./constant.js":"gS2I2","./extent.js":"i65AD","./identity.js":"4zs3O","./nice.js":"8MlNU","./ticks.js":"eP3r2","./threshold/sturges.js":"iBhHB","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iz59S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "slice", ()=>slice
);
parcelHelpers.export(exports, "map", ()=>map
);
var array = Array.prototype;
var slice = array.slice;
var map = array.map;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gS2I2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(x) {
    return function() {
        return x;
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8MlNU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ticksJs = require("./ticks.js");
function nice(start, stop, count) {
    let prestep;
    while(true){
        const step = _ticksJs.tickIncrement(start, stop, count);
        if (step === prestep || step === 0 || !isFinite(step)) return [
            start,
            stop
        ];
        else if (step > 0) {
            start = Math.floor(start / step) * step;
            stop = Math.ceil(stop / step) * step;
        } else if (step < 0) {
            start = Math.ceil(start * step) / step;
            stop = Math.floor(stop * step) / step;
        }
        prestep = step;
    }
}
exports.default = nice;

},{"./ticks.js":"eP3r2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eP3r2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tickIncrement", ()=>tickIncrement
);
parcelHelpers.export(exports, "tickStep", ()=>tickStep
);
var e10 = Math.sqrt(50), e5 = Math.sqrt(10), e2 = Math.sqrt(2);
exports.default = function(start, stop, count) {
    var reverse, i = -1, n, ticks, step;
    stop = +stop, start = +start, count = +count;
    if (start === stop && count > 0) return [
        start
    ];
    if (reverse = stop < start) n = start, start = stop, stop = n;
    if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];
    if (step > 0) {
        start = Math.ceil(start / step);
        stop = Math.floor(stop / step);
        ticks = new Array(n = Math.ceil(stop - start + 1));
        while(++i < n)ticks[i] = (start + i) * step;
    } else {
        step = -step;
        start = Math.ceil(start * step);
        stop = Math.floor(stop * step);
        ticks = new Array(n = Math.ceil(stop - start + 1));
        while(++i < n)ticks[i] = (start + i) / step;
    }
    if (reverse) ticks.reverse();
    return ticks;
};
function tickIncrement(start, stop, count) {
    var step = (stop - start) / Math.max(0, count), power = Math.floor(Math.log(step) / Math.LN10), error = step / Math.pow(10, power);
    return power >= 0 ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}
function tickStep(start, stop, count) {
    var step0 = Math.abs(stop - start) / Math.max(0, count), step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)), error = step0 / step1;
    if (error >= e10) step1 *= 10;
    else if (error >= e5) step1 *= 5;
    else if (error >= e2) step1 *= 2;
    return stop < start ? -step1 : step1;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iBhHB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _countJs = require("../count.js");
var _countJsDefault = parcelHelpers.interopDefault(_countJs);
exports.default = function(values) {
    return Math.ceil(Math.log(_countJsDefault.default(values)) / Math.LN2) + 1;
};

},{"../count.js":"3W7W6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"YcDJP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _countJs = require("../count.js");
var _countJsDefault = parcelHelpers.interopDefault(_countJs);
var _quantileJs = require("../quantile.js");
var _quantileJsDefault = parcelHelpers.interopDefault(_quantileJs);
exports.default = function(values, min, max) {
    return Math.ceil((max - min) / (2 * (_quantileJsDefault.default(values, 0.75) - _quantileJsDefault.default(values, 0.25)) * Math.pow(_countJsDefault.default(values), -1 / 3)));
};

},{"../count.js":"3W7W6","../quantile.js":"g22bz","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"g22bz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "quantileSorted", ()=>quantileSorted
);
var _maxJs = require("./max.js");
var _maxJsDefault = parcelHelpers.interopDefault(_maxJs);
var _minJs = require("./min.js");
var _minJsDefault = parcelHelpers.interopDefault(_minJs);
var _quickselectJs = require("./quickselect.js");
var _quickselectJsDefault = parcelHelpers.interopDefault(_quickselectJs);
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
function quantile(values, p, valueof) {
    values = Float64Array.from(_numberJs.numbers(values, valueof));
    if (!(n = values.length)) return;
    if ((p = +p) <= 0 || n < 2) return _minJsDefault.default(values);
    if (p >= 1) return _maxJsDefault.default(values);
    var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = _maxJsDefault.default(_quickselectJsDefault.default(values, i0).subarray(0, i0 + 1)), value1 = _minJsDefault.default(values.subarray(i0 + 1));
    return value0 + (value1 - value0) * (i - i0);
}
exports.default = quantile;
function quantileSorted(values, p, valueof = _numberJsDefault.default) {
    if (!(n = values.length)) return;
    if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
    if (p >= 1) return +valueof(values[n - 1], n - 1, values);
    var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = +valueof(values[i0], i0, values), value1 = +valueof(values[i0 + 1], i0 + 1, values);
    return value0 + (value1 - value0) * (i - i0);
}

},{"./max.js":"aKI7F","./min.js":"ah5VG","./quickselect.js":"fusOg","./number.js":"bMc02","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aKI7F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function max1(values, valueof) {
    let max;
    if (valueof === undefined) {
        for (const value of values)if (value != null && (max < value || max === undefined && value >= value)) max = value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (max < value || max === undefined && value >= value)) max = value;
    }
    return max;
}
exports.default = max1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ah5VG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function min1(values, valueof) {
    let min;
    if (valueof === undefined) {
        for (const value of values)if (value != null && (min > value || min === undefined && value >= value)) min = value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (min > value || min === undefined && value >= value)) min = value;
    }
    return min;
}
exports.default = min1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fusOg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
function quickselect(array, k, left = 0, right = array.length - 1, compare = _ascendingJsDefault.default) {
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
exports.default = quickselect;
function swap(array, i, j) {
    const t = array[i];
    array[i] = array[j];
    array[j] = t;
}

},{"./ascending.js":"is3Cq","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"h9Xie":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _countJs = require("../count.js");
var _countJsDefault = parcelHelpers.interopDefault(_countJs);
var _deviationJs = require("../deviation.js");
var _deviationJsDefault = parcelHelpers.interopDefault(_deviationJs);
exports.default = function(values, min, max) {
    return Math.ceil((max - min) / (3.5 * _deviationJsDefault.default(values) * Math.pow(_countJsDefault.default(values), -1 / 3)));
};

},{"../count.js":"3W7W6","../deviation.js":"gC5d9","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cI4hF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function maxIndex1(values, valueof) {
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
exports.default = maxIndex1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"522BH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function mean(values, valueof) {
    let count = 0;
    let sum = 0;
    if (valueof === undefined) {
        for (let value of values)if (value != null && (value = +value) >= value) ++count, sum += value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) ++count, sum += value;
    }
    if (count) return sum / count;
}
exports.default = mean;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"25KY1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _quantileJs = require("./quantile.js");
var _quantileJsDefault = parcelHelpers.interopDefault(_quantileJs);
exports.default = function(values, valueof) {
    return _quantileJsDefault.default(values, 0.5, valueof);
};

},{"./quantile.js":"g22bz","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lLqaS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function* flatten(arrays) {
    for (const array of arrays)yield* array;
}
function merge(arrays) {
    return Array.from(flatten(arrays));
}
exports.default = merge;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cjolc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function minIndex1(values, valueof) {
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
exports.default = minIndex1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"f10CX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pair", ()=>pair
);
function pairs1(values, pairof = pair) {
    const pairs = [];
    let previous;
    let first = false;
    for (const value of values){
        if (first) pairs.push(pairof(previous, value));
        previous = value;
        first = true;
    }
    return pairs;
}
exports.default = pairs1;
function pair(a, b) {
    return [
        a,
        b
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lBJIA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(source, keys) {
    return Array.from(keys, (key)=>source[key]
    );
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aFuRJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(start, stop, step) {
    start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
    var i = -1, n = Math.max(0, Math.ceil((stop - start) / step)) | 0, range = new Array(n);
    while(++i < n)range[i] = start + i * step;
    return range;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ewg2M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
function least(values, compare = _ascendingJsDefault.default) {
    let min;
    let defined = false;
    if (compare.length === 1) {
        let minValue;
        for (const element of values){
            const value = compare(element);
            if (defined ? _ascendingJsDefault.default(value, minValue) < 0 : _ascendingJsDefault.default(value, value) === 0) {
                min = element;
                minValue = value;
                defined = true;
            }
        }
    } else {
        for (const value of values)if (defined ? compare(value, min) < 0 : compare(value, value) === 0) {
            min = value;
            defined = true;
        }
    }
    return min;
}
exports.default = least;

},{"./ascending.js":"is3Cq","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hCcEV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
var _minIndexJs = require("./minIndex.js");
var _minIndexJsDefault = parcelHelpers.interopDefault(_minIndexJs);
function leastIndex(values, compare = _ascendingJsDefault.default) {
    if (compare.length === 1) return _minIndexJsDefault.default(values, compare);
    let minValue;
    let min = -1;
    let index = -1;
    for (const value of values){
        ++index;
        if (min < 0 ? compare(value, value) === 0 : compare(value, minValue) < 0) {
            minValue = value;
            min = index;
        }
    }
    return min;
}
exports.default = leastIndex;

},{"./ascending.js":"is3Cq","./minIndex.js":"cjolc","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jX3nM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
function greatest(values, compare = _ascendingJsDefault.default) {
    let max;
    let defined = false;
    if (compare.length === 1) {
        let maxValue;
        for (const element of values){
            const value = compare(element);
            if (defined ? _ascendingJsDefault.default(value, maxValue) > 0 : _ascendingJsDefault.default(value, value) === 0) {
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
exports.default = greatest;

},{"./ascending.js":"is3Cq","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5lFsk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
var _maxIndexJs = require("./maxIndex.js");
var _maxIndexJsDefault = parcelHelpers.interopDefault(_maxIndexJs);
function greatestIndex(values, compare = _ascendingJsDefault.default) {
    if (compare.length === 1) return _maxIndexJsDefault.default(values, compare);
    let maxValue;
    let max = -1;
    let index = -1;
    for (const value of values){
        ++index;
        if (max < 0 ? compare(value, value) === 0 : compare(value, maxValue) > 0) {
            maxValue = value;
            max = index;
        }
    }
    return max;
}
exports.default = greatestIndex;

},{"./ascending.js":"is3Cq","./maxIndex.js":"cI4hF","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ek53c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _leastIndexJs = require("./leastIndex.js");
var _leastIndexJsDefault = parcelHelpers.interopDefault(_leastIndexJs);
function scan(values, compare) {
    const index = _leastIndexJsDefault.default(values, compare);
    return index < 0 ? undefined : index;
}
exports.default = scan;

},{"./leastIndex.js":"hCcEV","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hrDvf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shuffler", ()=>shuffler
);
exports.default = shuffler(Math.random);
function shuffler(random) {
    return function shuffle(array, i0 = 0, i1 = array.length) {
        let m = i1 - (i0 = +i0);
        while(m){
            const i = random() * m-- | 0, t = array[m + i0];
            array[m + i0] = array[i + i0];
            array[i + i0] = t;
        }
        return array;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5x489":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function sum1(values, valueof) {
    let sum = 0;
    if (valueof === undefined) {
        for (let value of values)if (value = +value) sum += value;
    } else {
        let index = -1;
        for (let value of values)if (value = +valueof(value, ++index, values)) sum += value;
    }
    return sum;
}
exports.default = sum1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eTl2h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _minJs = require("./min.js");
var _minJsDefault = parcelHelpers.interopDefault(_minJs);
exports.default = function(matrix) {
    if (!(n = matrix.length)) return [];
    for(var i = -1, m = _minJsDefault.default(matrix, length), transpose = new Array(m); ++i < m;)for(var j = -1, n, row = transpose[i] = new Array(n); ++j < n;)row[j] = matrix[j][i];
    return transpose;
};
function length(d) {
    return d.length;
}

},{"./min.js":"ah5VG","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"g6Swo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _transposeJs = require("./transpose.js");
var _transposeJsDefault = parcelHelpers.interopDefault(_transposeJs);
exports.default = function() {
    return _transposeJsDefault.default(arguments);
};

},{"./transpose.js":"eTl2h","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"j8w8G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function every(values, test) {
    if (typeof test !== "function") throw new TypeError("test is not a function");
    let index = -1;
    for (const value of values){
        if (!test(value, ++index, values)) return false;
    }
    return true;
}
exports.default = every;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"258kt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function some(values, test) {
    if (typeof test !== "function") throw new TypeError("test is not a function");
    let index = -1;
    for (const value of values){
        if (test(value, ++index, values)) return true;
    }
    return false;
}
exports.default = some;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kmzCm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function filter(values, test) {
    if (typeof test !== "function") throw new TypeError("test is not a function");
    const array = [];
    let index = -1;
    for (const value of values)if (test(value, ++index, values)) array.push(value);
    return array;
}
exports.default = filter;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"g8C0v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function map(values, mapper) {
    if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
    if (typeof mapper !== "function") throw new TypeError("mapper is not a function");
    return Array.from(values, (value, index)=>mapper(value, index, values)
    );
}
exports.default = map;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kJqMu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function reduce(values, reducer, value) {
    if (typeof reducer !== "function") throw new TypeError("reducer is not a function");
    const iterator = values[Symbol.iterator]();
    let done, next, index = -1;
    if (arguments.length < 3) {
        ({ done , value  } = iterator.next());
        if (done) return;
        ++index;
    }
    while({ done , value: next  } = iterator.next(), !done)value = reducer(value, next, ++index, values);
    return value;
}
exports.default = reduce;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"c5OzD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function reverse(values) {
    if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
    return Array.from(values).reverse();
}
exports.default = reverse;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iPqde":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
var _permuteJs = require("./permute.js");
var _permuteJsDefault = parcelHelpers.interopDefault(_permuteJs);
function sort(values, f = _ascendingJsDefault.default) {
    if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
    values = Array.from(values);
    if (f.length === 1) {
        f = values.map(f);
        return _permuteJsDefault.default(values, values.map((d, i)=>i
        ).sort((i, j)=>_ascendingJsDefault.default(f[i], f[j])
        ));
    }
    return values.sort(f);
}
exports.default = sort;

},{"./ascending.js":"is3Cq","./permute.js":"lBJIA","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4yCN3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function difference(values, ...others) {
    values = new Set(values);
    for (const other of others)for (const value of other)values.delete(value);
    return values;
}
exports.default = difference;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"i51B2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function disjoint(values, other) {
    const iterator = other[Symbol.iterator](), set = new Set();
    for (const v of values){
        if (set.has(v)) return false;
        let value, done;
        while({ value , done  } = iterator.next()){
            if (done) break;
            if (Object.is(v, value)) return false;
            set.add(value);
        }
    }
    return true;
}
exports.default = disjoint;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"xQI0g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setJs = require("./set.js");
var _setJsDefault = parcelHelpers.interopDefault(_setJs);
function intersection(values, ...others) {
    values = new Set(values);
    others = others.map(_setJsDefault.default);
    out: for (const value of values){
        for (const other of others)if (!other.has(value)) {
            values.delete(value);
            continue out;
        }
    }
    return values;
}
exports.default = intersection;

},{"./set.js":"j3rvb","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"j3rvb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function set(values) {
    return values instanceof Set ? values : new Set(values);
}
exports.default = set;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bSPhW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _supersetJs = require("./superset.js");
var _supersetJsDefault = parcelHelpers.interopDefault(_supersetJs);
function subset(values, other) {
    return _supersetJsDefault.default(other, values);
}
exports.default = subset;

},{"./superset.js":"30CTh","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"30CTh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function superset(values, other) {
    const iterator = values[Symbol.iterator](), set = new Set();
    for (const o of other){
        if (set.has(o)) continue;
        let value, done;
        while({ value , done  } = iterator.next()){
            if (done) return false;
            set.add(value);
            if (Object.is(o, value)) break;
        }
    }
    return true;
}
exports.default = superset;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"byxPk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function union(...others) {
    const set = new Set();
    for (const other of others)for (const o of other)set.add(o);
    return set;
}
exports.default = union;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7JyYl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "epsilon", ()=>epsilon
);
parcelHelpers.export(exports, "epsilon2", ()=>epsilon2
);
parcelHelpers.export(exports, "pi", ()=>pi
);
parcelHelpers.export(exports, "halfPi", ()=>halfPi
);
parcelHelpers.export(exports, "quarterPi", ()=>quarterPi
);
parcelHelpers.export(exports, "tau", ()=>tau
);
parcelHelpers.export(exports, "degrees", ()=>degrees
);
parcelHelpers.export(exports, "radians", ()=>radians
);
parcelHelpers.export(exports, "abs", ()=>abs
);
parcelHelpers.export(exports, "atan", ()=>atan
);
parcelHelpers.export(exports, "atan2", ()=>atan2
);
parcelHelpers.export(exports, "cos", ()=>cos
);
parcelHelpers.export(exports, "ceil", ()=>ceil
);
parcelHelpers.export(exports, "exp", ()=>exp
);
parcelHelpers.export(exports, "floor", ()=>floor
);
parcelHelpers.export(exports, "hypot", ()=>hypot
);
parcelHelpers.export(exports, "log", ()=>log
);
parcelHelpers.export(exports, "pow", ()=>pow
);
parcelHelpers.export(exports, "sin", ()=>sin
);
parcelHelpers.export(exports, "sign", ()=>sign
);
parcelHelpers.export(exports, "sqrt", ()=>sqrt
);
parcelHelpers.export(exports, "tan", ()=>tan
);
parcelHelpers.export(exports, "acos", ()=>acos
);
parcelHelpers.export(exports, "asin", ()=>asin
);
parcelHelpers.export(exports, "haversin", ()=>haversin
);
var epsilon = 0.000001;
var epsilon2 = 0.000000000001;
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"a5Top":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function noop() {
}
exports.default = noop;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jck2Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function(object, stream) {
    if (object && streamObjectType.hasOwnProperty(object.type)) streamObjectType[object.type](object, stream);
    else streamGeometry(object, stream);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8IvkG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
var _areaJs = require("./area.js");
var _cartesianJs = require("./cartesian.js");
var _mathJs = require("./math.js");
var _streamJs = require("./stream.js");
var _streamJsDefault = parcelHelpers.interopDefault(_streamJs);
var lambda01, phi0, lambda11, phi1, lambda2, lambda00, phi00, p0, deltaSum, ranges, range1;
var boundsStream = {
    point: boundsPoint,
    lineStart: boundsLineStart,
    lineEnd: boundsLineEnd,
    polygonStart: function() {
        boundsStream.point = boundsRingPoint;
        boundsStream.lineStart = boundsRingStart;
        boundsStream.lineEnd = boundsRingEnd;
        deltaSum = new _d3Array.Adder();
        _areaJs.areaStream.polygonStart();
    },
    polygonEnd: function() {
        _areaJs.areaStream.polygonEnd();
        boundsStream.point = boundsPoint;
        boundsStream.lineStart = boundsLineStart;
        boundsStream.lineEnd = boundsLineEnd;
        if (_areaJs.areaRingSum < 0) lambda01 = -(lambda11 = 180), phi0 = -(phi1 = 90);
        else if (deltaSum > _mathJs.epsilon) phi1 = 90;
        else if (deltaSum < -_mathJs.epsilon) phi0 = -90;
        range1[0] = lambda01, range1[1] = lambda11;
    },
    sphere: function() {
        lambda01 = -(lambda11 = 180), phi0 = -(phi1 = 90);
    }
};
function boundsPoint(lambda, phi) {
    ranges.push(range1 = [
        lambda01 = lambda,
        lambda11 = lambda
    ]);
    if (phi < phi0) phi0 = phi;
    if (phi > phi1) phi1 = phi;
}
function linePoint(lambda, phi) {
    var p = _cartesianJs.cartesian([
        lambda * _mathJs.radians,
        phi * _mathJs.radians
    ]);
    if (p0) {
        var normal = _cartesianJs.cartesianCross(p0, p), equatorial = [
            normal[1],
            -normal[0],
            0
        ], inflection = _cartesianJs.cartesianCross(equatorial, normal);
        _cartesianJs.cartesianNormalizeInPlace(inflection);
        inflection = _cartesianJs.spherical(inflection);
        var delta = lambda - lambda2, sign = delta > 0 ? 1 : -1, lambdai = inflection[0] * _mathJs.degrees * sign, phii, antimeridian = _mathJs.abs(delta) > 180;
        if (antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
            phii = inflection[1] * _mathJs.degrees;
            if (phii > phi1) phi1 = phii;
        } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
            phii = -inflection[1] * _mathJs.degrees;
            if (phii < phi0) phi0 = phii;
        } else {
            if (phi < phi0) phi0 = phi;
            if (phi > phi1) phi1 = phi;
        }
        if (antimeridian) {
            if (lambda < lambda2) {
                if (angle(lambda01, lambda) > angle(lambda01, lambda11)) lambda11 = lambda;
            } else if (angle(lambda, lambda11) > angle(lambda01, lambda11)) lambda01 = lambda;
        } else if (lambda11 >= lambda01) {
            if (lambda < lambda01) lambda01 = lambda;
            if (lambda > lambda11) lambda11 = lambda;
        } else {
            if (lambda > lambda2) {
                if (angle(lambda01, lambda) > angle(lambda01, lambda11)) lambda11 = lambda;
            } else if (angle(lambda, lambda11) > angle(lambda01, lambda11)) lambda01 = lambda;
        }
    } else ranges.push(range1 = [
        lambda01 = lambda,
        lambda11 = lambda
    ]);
    if (phi < phi0) phi0 = phi;
    if (phi > phi1) phi1 = phi;
    p0 = p, lambda2 = lambda;
}
function boundsLineStart() {
    boundsStream.point = linePoint;
}
function boundsLineEnd() {
    range1[0] = lambda01, range1[1] = lambda11;
    boundsStream.point = boundsPoint;
    p0 = null;
}
function boundsRingPoint(lambda, phi) {
    if (p0) {
        var delta = lambda - lambda2;
        deltaSum.add(_mathJs.abs(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
    } else lambda00 = lambda, phi00 = phi;
    _areaJs.areaStream.point(lambda, phi);
    linePoint(lambda, phi);
}
function boundsRingStart() {
    _areaJs.areaStream.lineStart();
}
function boundsRingEnd() {
    boundsRingPoint(lambda00, phi00);
    _areaJs.areaStream.lineEnd();
    if (_mathJs.abs(deltaSum) > _mathJs.epsilon) lambda01 = -(lambda11 = 180);
    range1[0] = lambda01, range1[1] = lambda11;
    p0 = null;
}
// Finds the left-right distance between two longitudes.
// This is almost the same as (lambda1 - lambda0 + 360°) % 360°, except that we want
// the distance between ±180° to be 360°.
function angle(lambda0, lambda1) {
    return (lambda1 -= lambda0) < 0 ? lambda1 + 360 : lambda1;
}
function rangeCompare(a, b) {
    return a[0] - b[0];
}
function rangeContains(range, x) {
    return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
}
exports.default = function(feature) {
    var i, n, a, b, merged, deltaMax, delta;
    phi1 = lambda11 = -(lambda01 = phi0 = Infinity);
    ranges = [];
    _streamJsDefault.default(feature, boundsStream);
    // First, sort ranges by their minimum longitudes.
    if (n = ranges.length) {
        ranges.sort(rangeCompare);
        // Then, merge any ranges that overlap.
        for(i = 1, a = ranges[0], merged = [
            a
        ]; i < n; ++i){
            b = ranges[i];
            if (rangeContains(a, b[0]) || rangeContains(a, b[1])) {
                if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
                if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
            } else merged.push(a = b);
        }
        // Finally, find the largest gap between the merged ranges.
        // The final bounding box will be the inverse of this gap.
        for(deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, ++i){
            b = merged[i];
            if ((delta = angle(a[1], b[0])) > deltaMax) deltaMax = delta, lambda01 = b[0], lambda11 = a[1];
        }
    }
    ranges = range1 = null;
    return lambda01 === Infinity || phi0 === Infinity ? [
        [
            NaN,
            NaN
        ],
        [
            NaN,
            NaN
        ]
    ] : [
        [
            lambda01,
            phi0
        ],
        [
            lambda11,
            phi1
        ]
    ];
};

},{"d3-array":"dclxS","./area.js":"cBTzh","./cartesian.js":"evaJG","./math.js":"7JyYl","./stream.js":"jck2Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"evaJG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "spherical", ()=>spherical1
);
parcelHelpers.export(exports, "cartesian", ()=>cartesian1
);
parcelHelpers.export(exports, "cartesianDot", ()=>cartesianDot
);
parcelHelpers.export(exports, "cartesianCross", ()=>cartesianCross
);
// TODO return a
parcelHelpers.export(exports, "cartesianAddInPlace", ()=>cartesianAddInPlace
);
parcelHelpers.export(exports, "cartesianScale", ()=>cartesianScale
);
// TODO return d
parcelHelpers.export(exports, "cartesianNormalizeInPlace", ()=>cartesianNormalizeInPlace
);
var _mathJs = require("./math.js");
function spherical1(cartesian) {
    return [
        _mathJs.atan2(cartesian[1], cartesian[0]),
        _mathJs.asin(cartesian[2])
    ];
}
function cartesian1(spherical) {
    var lambda = spherical[0], phi = spherical[1], cosPhi = _mathJs.cos(phi);
    return [
        cosPhi * _mathJs.cos(lambda),
        cosPhi * _mathJs.sin(lambda),
        _mathJs.sin(phi)
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
    var l = _mathJs.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    d[0] /= l, d[1] /= l, d[2] /= l;
}

},{"./math.js":"7JyYl","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hDVEJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
var _mathJs = require("./math.js");
var _noopJs = require("./noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
var _streamJs = require("./stream.js");
var _streamJsDefault = parcelHelpers.interopDefault(_streamJs);
var W0, W1, X0, Y0, Z0, X1, Y1, Z1, X2, Y2, Z2, lambda00, phi00, x0, y0, z0; // previous point
var centroidStream = {
    sphere: _noopJsDefault.default,
    point: centroidPoint,
    lineStart: centroidLineStart,
    lineEnd: centroidLineEnd,
    polygonStart: function() {
        centroidStream.lineStart = centroidRingStart;
        centroidStream.lineEnd = centroidRingEnd;
    },
    polygonEnd: function() {
        centroidStream.lineStart = centroidLineStart;
        centroidStream.lineEnd = centroidLineEnd;
    }
};
// Arithmetic mean of Cartesian vectors.
function centroidPoint(lambda, phi) {
    lambda *= _mathJs.radians, phi *= _mathJs.radians;
    var cosPhi = _mathJs.cos(phi);
    centroidPointCartesian(cosPhi * _mathJs.cos(lambda), cosPhi * _mathJs.sin(lambda), _mathJs.sin(phi));
}
function centroidPointCartesian(x, y, z) {
    ++W0;
    X0 += (x - X0) / W0;
    Y0 += (y - Y0) / W0;
    Z0 += (z - Z0) / W0;
}
function centroidLineStart() {
    centroidStream.point = centroidLinePointFirst;
}
function centroidLinePointFirst(lambda, phi) {
    lambda *= _mathJs.radians, phi *= _mathJs.radians;
    var cosPhi = _mathJs.cos(phi);
    x0 = cosPhi * _mathJs.cos(lambda);
    y0 = cosPhi * _mathJs.sin(lambda);
    z0 = _mathJs.sin(phi);
    centroidStream.point = centroidLinePoint;
    centroidPointCartesian(x0, y0, z0);
}
function centroidLinePoint(lambda, phi) {
    lambda *= _mathJs.radians, phi *= _mathJs.radians;
    var cosPhi = _mathJs.cos(phi), x = cosPhi * _mathJs.cos(lambda), y = cosPhi * _mathJs.sin(lambda), z = _mathJs.sin(phi), w = _mathJs.atan2(_mathJs.sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
    W1 += w;
    X1 += w * (x0 + (x0 = x));
    Y1 += w * (y0 + (y0 = y));
    Z1 += w * (z0 + (z0 = z));
    centroidPointCartesian(x0, y0, z0);
}
function centroidLineEnd() {
    centroidStream.point = centroidPoint;
}
// See J. E. Brock, The Inertia Tensor for a Spherical Triangle,
// J. Applied Mechanics 42, 239 (1975).
function centroidRingStart() {
    centroidStream.point = centroidRingPointFirst;
}
function centroidRingEnd() {
    centroidRingPoint(lambda00, phi00);
    centroidStream.point = centroidPoint;
}
function centroidRingPointFirst(lambda, phi) {
    lambda00 = lambda, phi00 = phi;
    lambda *= _mathJs.radians, phi *= _mathJs.radians;
    centroidStream.point = centroidRingPoint;
    var cosPhi = _mathJs.cos(phi);
    x0 = cosPhi * _mathJs.cos(lambda);
    y0 = cosPhi * _mathJs.sin(lambda);
    z0 = _mathJs.sin(phi);
    centroidPointCartesian(x0, y0, z0);
}
function centroidRingPoint(lambda, phi) {
    lambda *= _mathJs.radians, phi *= _mathJs.radians;
    var cosPhi = _mathJs.cos(phi), x = cosPhi * _mathJs.cos(lambda), y = cosPhi * _mathJs.sin(lambda), z = _mathJs.sin(phi), cx = y0 * z - z0 * y, cy = z0 * x - x0 * z, cz = x0 * y - y0 * x, m = _mathJs.hypot(cx, cy, cz), w = _mathJs.asin(m), v = m && -w / m; // area weight multiplier
    X2.add(v * cx);
    Y2.add(v * cy);
    Z2.add(v * cz);
    W1 += w;
    X1 += w * (x0 + (x0 = x));
    Y1 += w * (y0 + (y0 = y));
    Z1 += w * (z0 + (z0 = z));
    centroidPointCartesian(x0, y0, z0);
}
exports.default = function(object) {
    W0 = W1 = X0 = Y0 = Z0 = X1 = Y1 = Z1 = 0;
    X2 = new _d3Array.Adder();
    Y2 = new _d3Array.Adder();
    Z2 = new _d3Array.Adder();
    _streamJsDefault.default(object, centroidStream);
    var x = +X2, y = +Y2, z = +Z2, m = _mathJs.hypot(x, y, z);
    // If the area-weighted ccentroid is undefined, fall back to length-weighted ccentroid.
    if (m < _mathJs.epsilon2) {
        x = X1, y = Y1, z = Z1;
        // If the feature has zero length, fall back to arithmetic mean of point vectors.
        if (W1 < _mathJs.epsilon) x = X0, y = Y0, z = Z0;
        m = _mathJs.hypot(x, y, z);
        // If the feature still has an undefined ccentroid, then return.
        if (m < _mathJs.epsilon2) return [
            NaN,
            NaN
        ];
    }
    return [
        _mathJs.atan2(y, x) * _mathJs.degrees,
        _mathJs.asin(z / m) * _mathJs.degrees
    ];
};

},{"d3-array":"dclxS","./math.js":"7JyYl","./noop.js":"a5Top","./stream.js":"jck2Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5kSQi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Generates a circle centered at [0°, 0°], with a given radius and precision.
parcelHelpers.export(exports, "circleStream", ()=>circleStream
);
var _cartesianJs = require("./cartesian.js");
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _mathJs = require("./math.js");
var _rotationJs = require("./rotation.js");
function circleStream(stream, radius, delta, direction, t0, t1) {
    if (!delta) return;
    var cosRadius = _mathJs.cos(radius), sinRadius = _mathJs.sin(radius), step = direction * delta;
    if (t0 == null) {
        t0 = radius + direction * _mathJs.tau;
        t1 = radius - step / 2;
    } else {
        t0 = circleRadius(cosRadius, t0);
        t1 = circleRadius(cosRadius, t1);
        if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * _mathJs.tau;
    }
    for(var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step){
        point = _cartesianJs.spherical([
            cosRadius,
            -sinRadius * _mathJs.cos(t),
            -sinRadius * _mathJs.sin(t)
        ]);
        stream.point(point[0], point[1]);
    }
}
// Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
function circleRadius(cosRadius, point) {
    point = _cartesianJs.cartesian(point), point[0] -= cosRadius;
    _cartesianJs.cartesianNormalizeInPlace(point);
    var radius = _mathJs.acos(-point[1]);
    return ((-point[2] < 0 ? -radius : radius) + _mathJs.tau - _mathJs.epsilon) % _mathJs.tau;
}
exports.default = function() {
    var center = _constantJsDefault.default([
        0,
        0
    ]), radius = _constantJsDefault.default(90), precision = _constantJsDefault.default(6), ring, rotate, stream = {
        point: point
    };
    function point(x, y) {
        ring.push(x = rotate(x, y));
        x[0] *= _mathJs.degrees, x[1] *= _mathJs.degrees;
    }
    function circle() {
        var c = center.apply(this, arguments), r = radius.apply(this, arguments) * _mathJs.radians, p = precision.apply(this, arguments) * _mathJs.radians;
        ring = [];
        rotate = _rotationJs.rotateRadians(-c[0] * _mathJs.radians, -c[1] * _mathJs.radians, 0).invert;
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
        return arguments.length ? (center = typeof _ === "function" ? _ : _constantJsDefault.default([
            +_[0],
            +_[1]
        ]), circle) : center;
    };
    circle.radius = function(_) {
        return arguments.length ? (radius = typeof _ === "function" ? _ : _constantJsDefault.default(+_), circle) : radius;
    };
    circle.precision = function(_) {
        return arguments.length ? (precision = typeof _ === "function" ? _ : _constantJsDefault.default(+_), circle) : precision;
    };
    return circle;
};

},{"./cartesian.js":"evaJG","./constant.js":"1mMcT","./math.js":"7JyYl","./rotation.js":"54Lv8","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1mMcT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(x) {
    return function() {
        return x;
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"54Lv8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rotateRadians", ()=>rotateRadians
);
var _composeJs = require("./compose.js");
var _composeJsDefault = parcelHelpers.interopDefault(_composeJs);
var _mathJs = require("./math.js");
function rotationIdentity(lambda, phi) {
    return [
        _mathJs.abs(lambda) > _mathJs.pi ? lambda + Math.round(-lambda / _mathJs.tau) * _mathJs.tau : lambda,
        phi
    ];
}
rotationIdentity.invert = rotationIdentity;
function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
    return (deltaLambda %= _mathJs.tau) ? deltaPhi || deltaGamma ? _composeJsDefault.default(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma)) : rotationLambda(deltaLambda) : deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma) : rotationIdentity;
}
function forwardRotationLambda(deltaLambda) {
    return function(lambda, phi) {
        return lambda += deltaLambda, [
            lambda > _mathJs.pi ? lambda - _mathJs.tau : lambda < -_mathJs.pi ? lambda + _mathJs.tau : lambda,
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
    var cosDeltaPhi = _mathJs.cos(deltaPhi), sinDeltaPhi = _mathJs.sin(deltaPhi), cosDeltaGamma = _mathJs.cos(deltaGamma), sinDeltaGamma = _mathJs.sin(deltaGamma);
    function rotation(lambda, phi) {
        var cosPhi = _mathJs.cos(phi), x = _mathJs.cos(lambda) * cosPhi, y = _mathJs.sin(lambda) * cosPhi, z = _mathJs.sin(phi), k = z * cosDeltaPhi + x * sinDeltaPhi;
        return [
            _mathJs.atan2(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
            _mathJs.asin(k * cosDeltaGamma + y * sinDeltaGamma)
        ];
    }
    rotation.invert = function(lambda, phi) {
        var cosPhi = _mathJs.cos(phi), x = _mathJs.cos(lambda) * cosPhi, y = _mathJs.sin(lambda) * cosPhi, z = _mathJs.sin(phi), k = z * cosDeltaGamma - y * sinDeltaGamma;
        return [
            _mathJs.atan2(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
            _mathJs.asin(k * cosDeltaPhi - x * sinDeltaPhi)
        ];
    };
    return rotation;
}
exports.default = function(rotate) {
    rotate = rotateRadians(rotate[0] * _mathJs.radians, rotate[1] * _mathJs.radians, rotate.length > 2 ? rotate[2] * _mathJs.radians : 0);
    function forward(coordinates) {
        coordinates = rotate(coordinates[0] * _mathJs.radians, coordinates[1] * _mathJs.radians);
        return coordinates[0] *= _mathJs.degrees, coordinates[1] *= _mathJs.degrees, coordinates;
    }
    forward.invert = function(coordinates) {
        coordinates = rotate.invert(coordinates[0] * _mathJs.radians, coordinates[1] * _mathJs.radians);
        return coordinates[0] *= _mathJs.degrees, coordinates[1] *= _mathJs.degrees, coordinates;
    };
    return forward;
};

},{"./compose.js":"hx08x","./math.js":"7JyYl","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hx08x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(a, b) {
    function compose(x, y) {
        return x = a(x, y), b(x[0], x[1]);
    }
    if (a.invert && b.invert) compose.invert = function(x, y) {
        return x = b.invert(x, y), x && a.invert(x[0], x[1]);
    };
    return compose;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5t4iH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _mathJs = require("../math.js");
exports.default = _indexJsDefault.default(function() {
    return true;
}, clipAntimeridianLine, clipAntimeridianInterpolate, [
    -_mathJs.pi,
    -_mathJs.halfPi
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
            var sign1 = lambda1 > 0 ? _mathJs.pi : -_mathJs.pi, delta = _mathJs.abs(lambda1 - lambda0);
            if (_mathJs.abs(delta - _mathJs.pi) < _mathJs.epsilon) {
                stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? _mathJs.halfPi : -_mathJs.halfPi);
                stream.point(sign0, phi0);
                stream.lineEnd();
                stream.lineStart();
                stream.point(sign1, phi0);
                stream.point(lambda1, phi0);
                clean = 0;
            } else if (sign0 !== sign1 && delta >= _mathJs.pi) {
                if (_mathJs.abs(lambda0 - sign0) < _mathJs.epsilon) lambda0 -= sign0 * _mathJs.epsilon; // handle degeneracies
                if (_mathJs.abs(lambda1 - sign1) < _mathJs.epsilon) lambda1 -= sign1 * _mathJs.epsilon;
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
    var cosPhi0, cosPhi1, sinLambda0Lambda1 = _mathJs.sin(lambda0 - lambda1);
    return _mathJs.abs(sinLambda0Lambda1) > _mathJs.epsilon ? _mathJs.atan((_mathJs.sin(phi0) * (cosPhi1 = _mathJs.cos(phi1)) * _mathJs.sin(lambda1) - _mathJs.sin(phi1) * (cosPhi0 = _mathJs.cos(phi0)) * _mathJs.sin(lambda0)) / (cosPhi0 * cosPhi1 * sinLambda0Lambda1)) : (phi0 + phi1) / 2;
}
function clipAntimeridianInterpolate(from, to, direction, stream) {
    var phi;
    if (from == null) {
        phi = direction * _mathJs.halfPi;
        stream.point(-_mathJs.pi, phi);
        stream.point(0, phi);
        stream.point(_mathJs.pi, phi);
        stream.point(_mathJs.pi, 0);
        stream.point(_mathJs.pi, -phi);
        stream.point(0, -phi);
        stream.point(-_mathJs.pi, -phi);
        stream.point(-_mathJs.pi, 0);
        stream.point(-_mathJs.pi, phi);
    } else if (_mathJs.abs(from[0] - to[0]) > _mathJs.epsilon) {
        var lambda = from[0] < to[0] ? _mathJs.pi : -_mathJs.pi;
        phi = direction * lambda / 2;
        stream.point(-lambda, phi);
        stream.point(0, phi);
        stream.point(lambda, phi);
    } else stream.point(to[0], to[1]);
}

},{"./index.js":"fwcyD","../math.js":"7JyYl","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fwcyD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bufferJs = require("./buffer.js");
var _bufferJsDefault = parcelHelpers.interopDefault(_bufferJs);
var _rejoinJs = require("./rejoin.js");
var _rejoinJsDefault = parcelHelpers.interopDefault(_rejoinJs);
var _mathJs = require("../math.js");
var _polygonContainsJs = require("../polygonContains.js");
var _polygonContainsJsDefault = parcelHelpers.interopDefault(_polygonContainsJs);
var _d3Array = require("d3-array");
exports.default = function(pointVisible, clipLine, interpolate, start) {
    return function(sink) {
        var line = clipLine(sink), ringBuffer = _bufferJsDefault.default(), ringSink = clipLine(ringBuffer), polygonStarted = false, polygon, segments, ring;
        var clip = {
            point: point1,
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
                clip.point = point1;
                clip.lineStart = lineStart;
                clip.lineEnd = lineEnd;
                segments = _d3Array.merge(segments);
                var startInside = _polygonContainsJsDefault.default(polygon, start);
                if (segments.length) {
                    if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                    _rejoinJsDefault.default(segments, compareIntersection, startInside, interpolate, sink);
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
        function point1(lambda, phi) {
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
            clip.point = point1;
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
};
function validSegment(segment) {
    return segment.length > 1;
}
// Intersections are sorted along the clip edge. For both antimeridian cutting
// and circle clipping, the same comparison is used.
function compareIntersection(a, b) {
    return ((a = a.x)[0] < 0 ? a[1] - _mathJs.halfPi - _mathJs.epsilon : _mathJs.halfPi - a[1]) - ((b = b.x)[0] < 0 ? b[1] - _mathJs.halfPi - _mathJs.epsilon : _mathJs.halfPi - b[1]);
}

},{"./buffer.js":"1YOxa","./rejoin.js":"a6HiF","../math.js":"7JyYl","../polygonContains.js":"FktDW","d3-array":"dclxS","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1YOxa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _noopJs = require("../noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
exports.default = function() {
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
        lineEnd: _noopJsDefault.default,
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
};

},{"../noop.js":"a5Top","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"a6HiF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function(segments, compareIntersection, startInside, interpolate, stream) {
    var subject = [], clip = [], i, n1;
    segments.forEach(function(segment) {
        if ((n = segment.length - 1) <= 0) return;
        var n, p0 = segment[0], p1 = segment[n], x;
        if (_pointEqualJsDefault.default(p0, p1)) {
            if (!p0[2] && !p1[2]) {
                stream.lineStart();
                for(i = 0; i < n; ++i)stream.point((p0 = segment[i])[0], p0[1]);
                stream.lineEnd();
                return;
            }
            // handle degenerate cases by moving the point
            p1[0] += 2 * _mathJs.epsilon;
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
    for(i = 0, n1 = clip.length; i < n1; ++i)clip[i].e = startInside = !startInside;
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
                if (isSubject) for(i = 0, n1 = points.length; i < n1; ++i)stream.point((point = points[i])[0], point[1]);
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
        }while (!current.v)
        stream.lineEnd();
    }
};
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

},{"../pointEqual.js":"kT0x8","../math.js":"7JyYl","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kT0x8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mathJs = require("./math.js");
exports.default = function(a, b) {
    return _mathJs.abs(a[0] - b[0]) < _mathJs.epsilon && _mathJs.abs(a[1] - b[1]) < _mathJs.epsilon;
};

},{"./math.js":"7JyYl","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"FktDW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
var _cartesianJs = require("./cartesian.js");
var _mathJs = require("./math.js");
function longitude(point) {
    if (_mathJs.abs(point[0]) <= _mathJs.pi) return point[0];
    else return _mathJs.sign(point[0]) * ((_mathJs.abs(point[0]) + _mathJs.pi) % _mathJs.tau - _mathJs.pi);
}
exports.default = function(polygon, point) {
    var lambda = longitude(point), phi = point[1], sinPhi = _mathJs.sin(phi), normal = [
        _mathJs.sin(lambda),
        -_mathJs.cos(lambda),
        0
    ], angle = 0, winding = 0;
    var sum = new _d3Array.Adder();
    if (sinPhi === 1) phi = _mathJs.halfPi + _mathJs.epsilon;
    else if (sinPhi === -1) phi = -_mathJs.halfPi - _mathJs.epsilon;
    for(var i = 0, n = polygon.length; i < n; ++i){
        if (!(m = (ring = polygon[i]).length)) continue;
        var ring, m, point0 = ring[m - 1], lambda0 = longitude(point0), phi0 = point0[1] / 2 + _mathJs.quarterPi, sinPhi0 = _mathJs.sin(phi0), cosPhi0 = _mathJs.cos(phi0);
        for(var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1){
            var point1 = ring[j], lambda1 = longitude(point1), phi1 = point1[1] / 2 + _mathJs.quarterPi, sinPhi1 = _mathJs.sin(phi1), cosPhi1 = _mathJs.cos(phi1), delta = lambda1 - lambda0, sign = delta >= 0 ? 1 : -1, absDelta = sign * delta, antimeridian = absDelta > _mathJs.pi, k = sinPhi0 * sinPhi1;
            sum.add(_mathJs.atan2(k * sign * _mathJs.sin(absDelta), cosPhi0 * cosPhi1 + k * _mathJs.cos(absDelta)));
            angle += antimeridian ? delta + sign * _mathJs.tau : delta;
            // Are the longitudes either side of the point’s meridian (lambda),
            // and are the latitudes smaller than the parallel (phi)?
            if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
                var arc = _cartesianJs.cartesianCross(_cartesianJs.cartesian(point0), _cartesianJs.cartesian(point1));
                _cartesianJs.cartesianNormalizeInPlace(arc);
                var intersection = _cartesianJs.cartesianCross(normal, arc);
                _cartesianJs.cartesianNormalizeInPlace(intersection);
                var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * _mathJs.asin(intersection[2]);
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
    return (angle < -_mathJs.epsilon || angle < _mathJs.epsilon && sum < -_mathJs.epsilon2) ^ winding & 1;
};

},{"d3-array":"dclxS","./cartesian.js":"evaJG","./math.js":"7JyYl","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iIbFI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cartesianJs = require("../cartesian.js");
var _circleJs = require("../circle.js");
var _mathJs = require("../math.js");
var _pointEqualJs = require("../pointEqual.js");
var _pointEqualJsDefault = parcelHelpers.interopDefault(_pointEqualJs);
var _indexJs = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
exports.default = function(radius) {
    var cr = _mathJs.cos(radius), delta1 = 6 * _mathJs.radians, smallRadius = cr > 0, notHemisphere = _mathJs.abs(cr) > _mathJs.epsilon; // TODO optimise for this common case
    function interpolate(from, to, direction, stream) {
        _circleJs.circleStream(stream, radius, delta1, direction, from, to);
    }
    function visible(lambda, phi) {
        return _mathJs.cos(lambda) * _mathJs.cos(phi) > cr;
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
                ], point2, v = visible(lambda, phi), c = smallRadius ? v ? 0 : code1(lambda, phi) : v ? code1(lambda + (lambda < 0 ? _mathJs.pi : -_mathJs.pi), phi) : 0;
                if (!point0 && (v00 = v0 = v)) stream.lineStart();
                if (v !== v0) {
                    point2 = intersect(point0, point1);
                    if (!point2 || _pointEqualJsDefault.default(point0, point2) || _pointEqualJsDefault.default(point1, point2)) point1[2] = 1;
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
                if (v && (!point0 || !_pointEqualJsDefault.default(point0, point1))) stream.point(point1[0], point1[1]);
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
        var pa = _cartesianJs.cartesian(a), pb = _cartesianJs.cartesian(b);
        // We have two planes, n1.p = d1 and n2.p = d2.
        // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
        var n1 = [
            1,
            0,
            0
        ], n2 = _cartesianJs.cartesianCross(pa, pb), n2n2 = _cartesianJs.cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
        // Two polar points.
        if (!determinant) return !two && a;
        var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = _cartesianJs.cartesianCross(n1, n2), A = _cartesianJs.cartesianScale(n1, c1), B = _cartesianJs.cartesianScale(n2, c2);
        _cartesianJs.cartesianAddInPlace(A, B);
        // Solve |p(t)|^2 = 1.
        var u = n1xn2, w = _cartesianJs.cartesianDot(A, u), uu = _cartesianJs.cartesianDot(u, u), t2 = w * w - uu * (_cartesianJs.cartesianDot(A, A) - 1);
        if (t2 < 0) return;
        var t = _mathJs.sqrt(t2), q = _cartesianJs.cartesianScale(u, (-w - t) / uu);
        _cartesianJs.cartesianAddInPlace(q, A);
        q = _cartesianJs.spherical(q);
        if (!two) return q;
        // Two intersection points.
        var lambda0 = a[0], lambda1 = b[0], phi0 = a[1], phi1 = b[1], z;
        if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;
        var delta = lambda1 - lambda0, polar = _mathJs.abs(delta - _mathJs.pi) < _mathJs.epsilon, meridian = polar || delta < _mathJs.epsilon;
        if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;
        // Check that the first point is between a and b.
        if (meridian ? polar ? phi0 + phi1 > 0 ^ q[1] < (_mathJs.abs(q[0] - lambda0) < _mathJs.epsilon ? phi0 : phi1) : phi0 <= q[1] && q[1] <= phi1 : delta > _mathJs.pi ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
            var q1 = _cartesianJs.cartesianScale(u, (-w + t) / uu);
            _cartesianJs.cartesianAddInPlace(q1, A);
            return [
                q,
                _cartesianJs.spherical(q1)
            ];
        }
    }
    // Generates a 4-bit vector representing the location of a point relative to
    // the small circle's bounding box.
    function code1(lambda, phi) {
        var r = smallRadius ? radius : _mathJs.pi - radius, code = 0;
        if (lambda < -r) code |= 1; // left
        else if (lambda > r) code |= 2; // right
        if (phi < -r) code |= 4; // below
        else if (phi > r) code |= 8; // above
        return code;
    }
    return _indexJsDefault.default(visible, clipLine, interpolate, smallRadius ? [
        0,
        -radius
    ] : [
        -_mathJs.pi,
        radius - _mathJs.pi
    ]);
};

},{"../cartesian.js":"evaJG","../circle.js":"5kSQi","../math.js":"7JyYl","../pointEqual.js":"kT0x8","./index.js":"fwcyD","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"g626F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rectangleJs = require("./rectangle.js");
var _rectangleJsDefault = parcelHelpers.interopDefault(_rectangleJs);
exports.default = function() {
    var x0 = 0, y0 = 0, x1 = 960, y1 = 500, cache, cacheStream, clip;
    return clip = {
        stream: function(stream) {
            return cache && cacheStream === stream ? cache : cache = _rectangleJsDefault.default(x0, y0, x1, y1)(cacheStream = stream);
        },
        extent: function(_) {
            return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], cache = cacheStream = null, clip) : [
                [
                    x0,
                    y0
                ],
                [
                    x1,
                    y1
                ]
            ];
        }
    };
};

},{"./rectangle.js":"2xswT","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2xswT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mathJs = require("../math.js");
var _bufferJs = require("./buffer.js");
var _bufferJsDefault = parcelHelpers.interopDefault(_bufferJs);
var _lineJs = require("./line.js");
var _lineJsDefault = parcelHelpers.interopDefault(_lineJs);
var _rejoinJs = require("./rejoin.js");
var _rejoinJsDefault = parcelHelpers.interopDefault(_rejoinJs);
var _d3Array = require("d3-array");
var clipMax = 1000000000, clipMin = -clipMax;
function clipRectangle(x0, y0, x1, y1) {
    function visible1(x, y) {
        return x0 <= x && x <= x1 && y0 <= y && y <= y1;
    }
    function interpolate(from, to, direction, stream) {
        var a = 0, a1 = 0;
        if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoint(from, to) < 0 ^ direction > 0) do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
        while ((a = (a + direction + 4) % 4) !== a1)
        else stream.point(to[0], to[1]);
    }
    function corner(p, direction) {
        return _mathJs.abs(p[0] - x0) < _mathJs.epsilon ? direction > 0 ? 0 : 3 : _mathJs.abs(p[0] - x1) < _mathJs.epsilon ? direction > 0 ? 2 : 1 : _mathJs.abs(p[1] - y0) < _mathJs.epsilon ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
    }
    function compareIntersection(a, b) {
        return comparePoint(a.x, b.x);
    }
    function comparePoint(a, b) {
        var ca = corner(a, 1), cb = corner(b, 1);
        return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
    }
    return function(stream) {
        var activeStream = stream, bufferStream = _bufferJsDefault.default(), segments, polygon, ring1, x__, y__, v__, x_, y_, v_, first, clean;
        var clipStream = {
            point: point1,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: polygonStart,
            polygonEnd: polygonEnd
        };
        function point1(x, y) {
            if (visible1(x, y)) activeStream.point(x, y);
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
            var startInside = polygonInside(), cleanInside = clean && startInside, visible = (segments = _d3Array.merge(segments)).length;
            if (cleanInside || visible) {
                stream.polygonStart();
                if (cleanInside) {
                    stream.lineStart();
                    interpolate(null, null, 1, stream);
                    stream.lineEnd();
                }
                if (visible) _rejoinJsDefault.default(segments, compareIntersection, startInside, interpolate, stream);
                stream.polygonEnd();
            }
            activeStream = stream, segments = polygon = ring1 = null;
        }
        function lineStart() {
            clipStream.point = linePoint;
            if (polygon) polygon.push(ring1 = []);
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
            clipStream.point = point1;
            if (v_) activeStream.lineEnd();
        }
        function linePoint(x, y) {
            var v = visible1(x, y);
            if (polygon) ring1.push([
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
                if (_lineJsDefault.default(a, b, x0, y0, x1, y1)) {
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
exports.default = clipRectangle;

},{"../math.js":"7JyYl","./buffer.js":"1YOxa","./line.js":"7KlnJ","./rejoin.js":"a6HiF","d3-array":"dclxS","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7KlnJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(a, b, x0, y0, x1, y1) {
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
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eYBc9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _polygonContainsJs = require("./polygonContains.js");
var _polygonContainsJsDefault = parcelHelpers.interopDefault(_polygonContainsJs);
var _distanceJs = require("./distance.js");
var _distanceJsDefault = parcelHelpers.interopDefault(_distanceJs);
var _mathJs = require("./math.js");
var containsObjectType = {
    Feature: function(object, point) {
        return containsGeometry(object.geometry, point);
    },
    FeatureCollection: function(object, point) {
        var features = object.features, i = -1, n = features.length;
        while(++i < n)if (containsGeometry(features[i].geometry, point)) return true;
        return false;
    }
};
var containsGeometryType = {
    Sphere: function() {
        return true;
    },
    Point: function(object, point) {
        return containsPoint(object.coordinates, point);
    },
    MultiPoint: function(object, point) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)if (containsPoint(coordinates[i], point)) return true;
        return false;
    },
    LineString: function(object, point) {
        return containsLine(object.coordinates, point);
    },
    MultiLineString: function(object, point) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)if (containsLine(coordinates[i], point)) return true;
        return false;
    },
    Polygon: function(object, point) {
        return containsPolygon(object.coordinates, point);
    },
    MultiPolygon: function(object, point) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)if (containsPolygon(coordinates[i], point)) return true;
        return false;
    },
    GeometryCollection: function(object, point) {
        var geometries = object.geometries, i = -1, n = geometries.length;
        while(++i < n)if (containsGeometry(geometries[i], point)) return true;
        return false;
    }
};
function containsGeometry(geometry, point) {
    return geometry && containsGeometryType.hasOwnProperty(geometry.type) ? containsGeometryType[geometry.type](geometry, point) : false;
}
function containsPoint(coordinates, point) {
    return _distanceJsDefault.default(coordinates, point) === 0;
}
function containsLine(coordinates, point) {
    var ao, bo, ab;
    for(var i = 0, n = coordinates.length; i < n; i++){
        bo = _distanceJsDefault.default(coordinates[i], point);
        if (bo === 0) return true;
        if (i > 0) {
            ab = _distanceJsDefault.default(coordinates[i], coordinates[i - 1]);
            if (ab > 0 && ao <= ab && bo <= ab && (ao + bo - ab) * (1 - Math.pow((ao - bo) / ab, 2)) < _mathJs.epsilon2 * ab) return true;
        }
        ao = bo;
    }
    return false;
}
function containsPolygon(coordinates, point) {
    return !!_polygonContainsJsDefault.default(coordinates.map(ringRadians), pointRadians(point));
}
function ringRadians(ring) {
    return ring = ring.map(pointRadians), ring.pop(), ring;
}
function pointRadians(point) {
    return [
        point[0] * _mathJs.radians,
        point[1] * _mathJs.radians
    ];
}
exports.default = function(object, point) {
    return (object && containsObjectType.hasOwnProperty(object.type) ? containsObjectType[object.type] : containsGeometry)(object, point);
};

},{"./polygonContains.js":"FktDW","./distance.js":"glEIa","./math.js":"7JyYl","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"glEIa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _lengthJs = require("./length.js");
var _lengthJsDefault = parcelHelpers.interopDefault(_lengthJs);
var coordinates = [
    null,
    null
], object = {
    type: "LineString",
    coordinates: coordinates
};
exports.default = function(a, b) {
    coordinates[0] = a;
    coordinates[1] = b;
    return _lengthJsDefault.default(object);
};

},{"./length.js":"9Miu7","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9Miu7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
var _mathJs = require("./math.js");
var _noopJs = require("./noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
var _streamJs = require("./stream.js");
var _streamJsDefault = parcelHelpers.interopDefault(_streamJs);
var lengthSum, lambda0, sinPhi0, cosPhi0;
var lengthStream = {
    sphere: _noopJsDefault.default,
    point: _noopJsDefault.default,
    lineStart: lengthLineStart,
    lineEnd: _noopJsDefault.default,
    polygonStart: _noopJsDefault.default,
    polygonEnd: _noopJsDefault.default
};
function lengthLineStart() {
    lengthStream.point = lengthPointFirst;
    lengthStream.lineEnd = lengthLineEnd;
}
function lengthLineEnd() {
    lengthStream.point = lengthStream.lineEnd = _noopJsDefault.default;
}
function lengthPointFirst(lambda, phi) {
    lambda *= _mathJs.radians, phi *= _mathJs.radians;
    lambda0 = lambda, sinPhi0 = _mathJs.sin(phi), cosPhi0 = _mathJs.cos(phi);
    lengthStream.point = lengthPoint;
}
function lengthPoint(lambda, phi) {
    lambda *= _mathJs.radians, phi *= _mathJs.radians;
    var sinPhi = _mathJs.sin(phi), cosPhi = _mathJs.cos(phi), delta = _mathJs.abs(lambda - lambda0), cosDelta = _mathJs.cos(delta), sinDelta = _mathJs.sin(delta), x = cosPhi * sinDelta, y = cosPhi0 * sinPhi - sinPhi0 * cosPhi * cosDelta, z = sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosDelta;
    lengthSum.add(_mathJs.atan2(_mathJs.sqrt(x * x + y * y), z));
    lambda0 = lambda, sinPhi0 = sinPhi, cosPhi0 = cosPhi;
}
exports.default = function(object) {
    lengthSum = new _d3Array.Adder();
    _streamJsDefault.default(object, lengthStream);
    return +lengthSum;
};

},{"d3-array":"dclxS","./math.js":"7JyYl","./noop.js":"a5Top","./stream.js":"jck2Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"71CK6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "graticule10", ()=>graticule10
);
var _d3Array = require("d3-array");
var _mathJs = require("./math.js");
function graticuleX(y0, y1, dy) {
    var y2 = _d3Array.range(y0, y1 - _mathJs.epsilon, dy).concat(y1);
    return function(x) {
        return y2.map(function(y) {
            return [
                x,
                y
            ];
        });
    };
}
function graticuleY(x0, x1, dx) {
    var x2 = _d3Array.range(x0, x1 - _mathJs.epsilon, dx).concat(x1);
    return function(y) {
        return x2.map(function(x) {
            return [
                x,
                y
            ];
        });
    };
}
function graticule1() {
    var x1, x0, X1, X0, y1, y0, Y1, Y0, dx = 10, dy = dx, DX = 90, DY = 360, x3, y3, X, Y, precision = 2.5;
    function graticule() {
        return {
            type: "MultiLineString",
            coordinates: lines()
        };
    }
    function lines() {
        return _d3Array.range(_mathJs.ceil(X0 / DX) * DX, X1, DX).map(X).concat(_d3Array.range(_mathJs.ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(_d3Array.range(_mathJs.ceil(x0 / dx) * dx, x1, dx).filter(function(x) {
            return _mathJs.abs(x % DX) > _mathJs.epsilon;
        }).map(x3)).concat(_d3Array.range(_mathJs.ceil(y0 / dy) * dy, y1, dy).filter(function(y) {
            return _mathJs.abs(y % DY) > _mathJs.epsilon;
        }).map(y3));
    }
    graticule.lines = function() {
        return lines().map(function(coordinates) {
            return {
                type: "LineString",
                coordinates: coordinates
            };
        });
    };
    graticule.outline = function() {
        return {
            type: "Polygon",
            coordinates: [
                X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1))
            ]
        };
    };
    graticule.extent = function(_) {
        if (!arguments.length) return graticule.extentMinor();
        return graticule.extentMajor(_).extentMinor(_);
    };
    graticule.extentMajor = function(_) {
        if (!arguments.length) return [
            [
                X0,
                Y0
            ],
            [
                X1,
                Y1
            ]
        ];
        X0 = +_[0][0], X1 = +_[1][0];
        Y0 = +_[0][1], Y1 = +_[1][1];
        if (X0 > X1) _ = X0, X0 = X1, X1 = _;
        if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
        return graticule.precision(precision);
    };
    graticule.extentMinor = function(_) {
        if (!arguments.length) return [
            [
                x0,
                y0
            ],
            [
                x1,
                y1
            ]
        ];
        x0 = +_[0][0], x1 = +_[1][0];
        y0 = +_[0][1], y1 = +_[1][1];
        if (x0 > x1) _ = x0, x0 = x1, x1 = _;
        if (y0 > y1) _ = y0, y0 = y1, y1 = _;
        return graticule.precision(precision);
    };
    graticule.step = function(_) {
        if (!arguments.length) return graticule.stepMinor();
        return graticule.stepMajor(_).stepMinor(_);
    };
    graticule.stepMajor = function(_) {
        if (!arguments.length) return [
            DX,
            DY
        ];
        DX = +_[0], DY = +_[1];
        return graticule;
    };
    graticule.stepMinor = function(_) {
        if (!arguments.length) return [
            dx,
            dy
        ];
        dx = +_[0], dy = +_[1];
        return graticule;
    };
    graticule.precision = function(_) {
        if (!arguments.length) return precision;
        precision = +_;
        x3 = graticuleX(y0, y1, 90);
        y3 = graticuleY(x0, x1, precision);
        X = graticuleX(Y0, Y1, 90);
        Y = graticuleY(X0, X1, precision);
        return graticule;
    };
    return graticule.extentMajor([
        [
            -180,
            -90 + _mathJs.epsilon
        ],
        [
            180,
            90 - _mathJs.epsilon
        ]
    ]).extentMinor([
        [
            -180,
            -80 - _mathJs.epsilon
        ],
        [
            180,
            80 + _mathJs.epsilon
        ]
    ]);
}
exports.default = graticule1;
function graticule10() {
    return graticule1()();
}

},{"d3-array":"dclxS","./math.js":"7JyYl","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9aGW3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mathJs = require("./math.js");
exports.default = function(a, b) {
    var x0 = a[0] * _mathJs.radians, y0 = a[1] * _mathJs.radians, x1 = b[0] * _mathJs.radians, y1 = b[1] * _mathJs.radians, cy0 = _mathJs.cos(y0), sy0 = _mathJs.sin(y0), cy1 = _mathJs.cos(y1), sy1 = _mathJs.sin(y1), kx0 = cy0 * _mathJs.cos(x0), ky0 = cy0 * _mathJs.sin(x0), kx1 = cy1 * _mathJs.cos(x1), ky1 = cy1 * _mathJs.sin(x1), d = 2 * _mathJs.asin(_mathJs.sqrt(_mathJs.haversin(y1 - y0) + cy0 * cy1 * _mathJs.haversin(x1 - x0))), k = _mathJs.sin(d);
    var interpolate = d ? function(t) {
        var B = _mathJs.sin(t *= d) / k, A = _mathJs.sin(d - t) / k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
        return [
            _mathJs.atan2(y, x) * _mathJs.degrees,
            _mathJs.atan2(z, _mathJs.sqrt(x * x + y * y)) * _mathJs.degrees
        ];
    } : function() {
        return [
            x0 * _mathJs.degrees,
            y0 * _mathJs.degrees
        ];
    };
    interpolate.distance = d;
    return interpolate;
};

},{"./math.js":"7JyYl","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"k9P5v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function(projection, context) {
    var pointRadius = 4.5, projectionStream, contextStream;
    function path(object) {
        if (object) {
            if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
            _streamJsDefault.default(object, projectionStream(contextStream));
        }
        return contextStream.result();
    }
    path.area = function(object) {
        _streamJsDefault.default(object, projectionStream(_areaJsDefault.default));
        return _areaJsDefault.default.result();
    };
    path.measure = function(object) {
        _streamJsDefault.default(object, projectionStream(_measureJsDefault.default));
        return _measureJsDefault.default.result();
    };
    path.bounds = function(object) {
        _streamJsDefault.default(object, projectionStream(_boundsJsDefault.default));
        return _boundsJsDefault.default.result();
    };
    path.centroid = function(object) {
        _streamJsDefault.default(object, projectionStream(_centroidJsDefault.default));
        return _centroidJsDefault.default.result();
    };
    path.projection = function(_) {
        return arguments.length ? (projectionStream = _ == null ? (projection = null, _identityJsDefault.default) : (projection = _).stream, path) : projection;
    };
    path.context = function(_) {
        if (!arguments.length) return context;
        contextStream = _ == null ? (context = null, new _stringJsDefault.default) : new _contextJsDefault.default(context = _);
        if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
        return path;
    };
    path.pointRadius = function(_) {
        if (!arguments.length) return pointRadius;
        pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
        return path;
    };
    return path.projection(projection).context(context);
};

},{"../identity.js":"kdbfP","../stream.js":"jck2Y","./area.js":"dU6mN","./bounds.js":"bA46O","./centroid.js":"22OCM","./context.js":"g2MCo","./measure.js":"fzRy5","./string.js":"9KApP","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kdbfP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (x)=>x
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dU6mN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
var _mathJs = require("../math.js");
var _noopJs = require("../noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
var areaSum = new _d3Array.Adder(), areaRingSum = new _d3Array.Adder(), x00, y00, x0, y0;
var areaStream = {
    point: _noopJsDefault.default,
    lineStart: _noopJsDefault.default,
    lineEnd: _noopJsDefault.default,
    polygonStart: function() {
        areaStream.lineStart = areaRingStart;
        areaStream.lineEnd = areaRingEnd;
    },
    polygonEnd: function() {
        areaStream.lineStart = areaStream.lineEnd = areaStream.point = _noopJsDefault.default;
        areaSum.add(_mathJs.abs(areaRingSum));
        areaRingSum = new _d3Array.Adder();
    },
    result: function() {
        var area = areaSum / 2;
        areaSum = new _d3Array.Adder();
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

},{"d3-array":"dclxS","../math.js":"7JyYl","../noop.js":"a5Top","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bA46O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _noopJs = require("../noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
var x0 = Infinity, y0 = x0, x1 = -x0, y1 = x1;
var boundsStream = {
    point: boundsPoint,
    lineStart: _noopJsDefault.default,
    lineEnd: _noopJsDefault.default,
    polygonStart: _noopJsDefault.default,
    polygonEnd: _noopJsDefault.default,
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

},{"../noop.js":"a5Top","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"22OCM":[function(require,module,exports) {
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
    var dx = x - x0, dy = y - y0, z = _mathJs.sqrt(dx * dx + dy * dy);
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
    var dx = x - x0, dy = y - y0, z = _mathJs.sqrt(dx * dx + dy * dy);
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

},{"../math.js":"7JyYl","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"g2MCo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mathJs = require("../math.js");
var _noopJs = require("../noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
function PathContext(context) {
    this._context = context;
}
exports.default = PathContext;
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
                this._context.arc(x, y, this._radius, 0, _mathJs.tau);
                break;
        }
    },
    result: _noopJsDefault.default
};

},{"../math.js":"7JyYl","../noop.js":"a5Top","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fzRy5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
var _mathJs = require("../math.js");
var _noopJs = require("../noop.js");
var _noopJsDefault = parcelHelpers.interopDefault(_noopJs);
var lengthSum = new _d3Array.Adder(), lengthRing, x00, y00, x0, y0;
var lengthStream = {
    point: _noopJsDefault.default,
    lineStart: function() {
        lengthStream.point = lengthPointFirst;
    },
    lineEnd: function() {
        if (lengthRing) lengthPoint(x00, y00);
        lengthStream.point = _noopJsDefault.default;
    },
    polygonStart: function() {
        lengthRing = true;
    },
    polygonEnd: function() {
        lengthRing = null;
    },
    result: function() {
        var length = +lengthSum;
        lengthSum = new _d3Array.Adder();
        return length;
    }
};
function lengthPointFirst(x, y) {
    lengthStream.point = lengthPoint;
    x00 = x0 = x, y00 = y0 = y;
}
function lengthPoint(x, y) {
    x0 -= x, y0 -= y;
    lengthSum.add(_mathJs.sqrt(x0 * x0 + y0 * y0));
    x0 = x, y0 = y;
}
exports.default = lengthStream;

},{"d3-array":"dclxS","../math.js":"7JyYl","../noop.js":"a5Top","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9KApP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function PathString() {
    this._string = [];
}
exports.default = PathString;
PathString.prototype = {
    _radius: 4.5,
    _circle: circle(4.5),
    pointRadius: function(_) {
        if ((_ = +_) !== this._radius) this._radius = _, this._circle = null;
        return this;
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
        if (this._line === 0) this._string.push("Z");
        this._point = NaN;
    },
    point: function(x, y) {
        switch(this._point){
            case 0:
                this._string.push("M", x, ",", y);
                this._point = 1;
                break;
            case 1:
                this._string.push("L", x, ",", y);
                break;
            default:
                if (this._circle == null) this._circle = circle(this._radius);
                this._string.push("M", x, ",", y, this._circle);
                break;
        }
    },
    result: function() {
        if (this._string.length) {
            var result = this._string.join("");
            this._string = [];
            return result;
        } else return null;
    }
};
function circle(radius) {
    return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3Xlta":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _conicEqualAreaJs = require("./conicEqualArea.js");
var _conicEqualAreaJsDefault = parcelHelpers.interopDefault(_conicEqualAreaJs);
exports.default = function() {
    return _conicEqualAreaJsDefault.default().parallels([
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
};

},{"./conicEqualArea.js":"c9BXq","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"c9BXq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "conicEqualAreaRaw", ()=>conicEqualAreaRaw
);
var _mathJs = require("../math.js");
var _conicJs = require("./conic.js");
var _cylindricalEqualAreaJs = require("./cylindricalEqualArea.js");
function conicEqualAreaRaw(y0, y1) {
    var sy0 = _mathJs.sin(y0), n = (sy0 + _mathJs.sin(y1)) / 2;
    // Are the parallels symmetrical around the Equator?
    if (_mathJs.abs(n) < _mathJs.epsilon) return _cylindricalEqualAreaJs.cylindricalEqualAreaRaw(y0);
    var c = 1 + sy0 * (2 * n - sy0), r0 = _mathJs.sqrt(c) / n;
    function project(x, y) {
        var r = _mathJs.sqrt(c - 2 * n * _mathJs.sin(y)) / n;
        return [
            r * _mathJs.sin(x *= n),
            r0 - r * _mathJs.cos(x)
        ];
    }
    project.invert = function(x, y) {
        var r0y = r0 - y, l = _mathJs.atan2(x, _mathJs.abs(r0y)) * _mathJs.sign(r0y);
        if (r0y * n < 0) l -= _mathJs.pi * _mathJs.sign(x) * _mathJs.sign(r0y);
        return [
            l / n,
            _mathJs.asin((c - (x * x + r0y * r0y) * n * n) / (2 * n))
        ];
    };
    return project;
}
exports.default = function() {
    return _conicJs.conicProjection(conicEqualAreaRaw).scale(155.424).center([
        0,
        33.6442
    ]);
};

},{"../math.js":"7JyYl","./conic.js":"hA53y","./cylindricalEqualArea.js":"2kWMW","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hA53y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "conicProjection", ()=>conicProjection
);
var _mathJs = require("../math.js");
var _indexJs = require("./index.js");
function conicProjection(projectAt) {
    var phi0 = 0, phi1 = _mathJs.pi / 3, m = _indexJs.projectionMutator(projectAt), p = m(phi0, phi1);
    p.parallels = function(_) {
        return arguments.length ? m(phi0 = _[0] * _mathJs.radians, phi1 = _[1] * _mathJs.radians) : [
            phi0 * _mathJs.degrees,
            phi1 * _mathJs.degrees
        ];
    };
    return p;
}

},{"../math.js":"7JyYl","./index.js":"i24sF","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"i24sF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "projectionMutator", ()=>projectionMutator
);
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
var transformRadians = _transformJs.transformer({
    point: function(x, y) {
        this.stream.point(x * _mathJs.radians, y * _mathJs.radians);
    }
});
function transformRotate(rotate) {
    return _transformJs.transformer({
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
    var cosAlpha = _mathJs.cos(alpha), sinAlpha = _mathJs.sin(alpha), a = cosAlpha * k, b = sinAlpha * k, ai = cosAlpha / k, bi = sinAlpha / k, ci = (sinAlpha * dy - cosAlpha * dx) / k, fi = (sinAlpha * dx + cosAlpha * dy) / k;
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
function projection1(project) {
    return projectionMutator(function() {
        return project;
    })();
}
exports.default = projection1;
function projectionMutator(projectAt) {
    var project, k = 150, x = 480, y = 250, lambda = 0, phi = 0, deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, alpha = 0, sx = 1, sy = 1, theta = null, preclip = _antimeridianJsDefault.default, x0 = null, y0, x1, y1, postclip = _identityJsDefault.default, delta2 = 0.5, projectResample, projectTransform, projectRotateTransform, cache, cacheStream;
    function projection(point) {
        return projectRotateTransform(point[0] * _mathJs.radians, point[1] * _mathJs.radians);
    }
    function invert(point) {
        point = projectRotateTransform.invert(point[0], point[1]);
        return point && [
            point[0] * _mathJs.degrees,
            point[1] * _mathJs.degrees
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
        return arguments.length ? (preclip = +_ ? _circleJsDefault.default(theta = _ * _mathJs.radians) : (theta = null, _antimeridianJsDefault.default), reset()) : theta * _mathJs.degrees;
    };
    projection.clipExtent = function(_) {
        return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, _identityJsDefault.default) : _rectangleJsDefault.default(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [
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
        return arguments.length ? (lambda = _[0] % 360 * _mathJs.radians, phi = _[1] % 360 * _mathJs.radians, recenter()) : [
            lambda * _mathJs.degrees,
            phi * _mathJs.degrees
        ];
    };
    projection.rotate = function(_) {
        return arguments.length ? (deltaLambda = _[0] % 360 * _mathJs.radians, deltaPhi = _[1] % 360 * _mathJs.radians, deltaGamma = _.length > 2 ? _[2] % 360 * _mathJs.radians : 0, recenter()) : [
            deltaLambda * _mathJs.degrees,
            deltaPhi * _mathJs.degrees,
            deltaGamma * _mathJs.degrees
        ];
    };
    projection.angle = function(_) {
        return arguments.length ? (alpha = _ % 360 * _mathJs.radians, recenter()) : alpha * _mathJs.degrees;
    };
    projection.reflectX = function(_) {
        return arguments.length ? (sx = _ ? -1 : 1, recenter()) : sx < 0;
    };
    projection.reflectY = function(_) {
        return arguments.length ? (sy = _ ? -1 : 1, recenter()) : sy < 0;
    };
    projection.precision = function(_) {
        return arguments.length ? (projectResample = _resampleJsDefault.default(projectTransform, delta2 = _ * _), reset()) : _mathJs.sqrt(delta2);
    };
    projection.fitExtent = function(extent, object) {
        return _fitJs.fitExtent(projection, extent, object);
    };
    projection.fitSize = function(size, object) {
        return _fitJs.fitSize(projection, size, object);
    };
    projection.fitWidth = function(width, object) {
        return _fitJs.fitWidth(projection, width, object);
    };
    projection.fitHeight = function(height, object) {
        return _fitJs.fitHeight(projection, height, object);
    };
    function recenter() {
        var center = scaleTranslateRotate(k, 0, 0, sx, sy, alpha).apply(null, project(lambda, phi)), transform = scaleTranslateRotate(k, x - center[0], y - center[1], sx, sy, alpha);
        rotate = _rotationJs.rotateRadians(deltaLambda, deltaPhi, deltaGamma);
        projectTransform = _composeJsDefault.default(project, transform);
        projectRotateTransform = _composeJsDefault.default(rotate, projectTransform);
        projectResample = _resampleJsDefault.default(projectTransform, delta2);
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

},{"../clip/antimeridian.js":"5t4iH","../clip/circle.js":"iIbFI","../clip/rectangle.js":"2xswT","../compose.js":"hx08x","../identity.js":"kdbfP","../math.js":"7JyYl","../rotation.js":"54Lv8","../transform.js":"feffG","./fit.js":"4as5X","./resample.js":"6CVBg","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"feffG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transformer", ()=>transformer
);
exports.default = function(methods) {
    return {
        stream: transformer(methods)
    };
};
function transformer(methods) {
    return function(stream) {
        var s = new TransformStream;
        for(var key in methods)s[key] = methods[key];
        s.stream = stream;
        return s;
    };
}
function TransformStream() {
}
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4as5X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fitExtent", ()=>fitExtent
);
parcelHelpers.export(exports, "fitSize", ()=>fitSize
);
parcelHelpers.export(exports, "fitWidth", ()=>fitWidth
);
parcelHelpers.export(exports, "fitHeight", ()=>fitHeight
);
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
    _streamJsDefault.default(object, projection.stream(_boundsJsDefault.default));
    fitBounds(_boundsJsDefault.default.result());
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

},{"../stream.js":"jck2Y","../path/bounds.js":"bA46O","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6CVBg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cartesianJs = require("../cartesian.js");
var _mathJs = require("../math.js");
var _transformJs = require("../transform.js");
var maxDepth = 16, cosMinDistance = _mathJs.cos(30 * _mathJs.radians); // cos(minimum angular distance)
exports.default = function(project, delta2) {
    return +delta2 ? resample(project, delta2) : resampleNone(project);
};
function resampleNone(project) {
    return _transformJs.transformer({
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
            var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = _mathJs.sqrt(a * a + b * b + c * c), phi2 = _mathJs.asin(c /= m), lambda2 = _mathJs.abs(_mathJs.abs(c) - 1) < _mathJs.epsilon || _mathJs.abs(lambda0 - lambda1) < _mathJs.epsilon ? (lambda0 + lambda1) / 2 : _mathJs.atan2(b, a), p = project(lambda2, phi2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
            if (dz * dz / d2 > delta2 // perpendicular projected distance
             || _mathJs.abs((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
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
            var c = _cartesianJs.cartesian([
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

},{"../cartesian.js":"evaJG","../math.js":"7JyYl","../transform.js":"feffG","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2kWMW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cylindricalEqualAreaRaw", ()=>cylindricalEqualAreaRaw
);
var _mathJs = require("../math.js");
function cylindricalEqualAreaRaw(phi0) {
    var cosPhi0 = _mathJs.cos(phi0);
    function forward(lambda, phi) {
        return [
            lambda * cosPhi0,
            _mathJs.sin(phi) / cosPhi0
        ];
    }
    forward.invert = function(x, y) {
        return [
            x / cosPhi0,
            _mathJs.asin(y * cosPhi0)
        ];
    };
    return forward;
}

},{"../math.js":"7JyYl","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"YtNMK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mathJs = require("../math.js");
var _albersJs = require("./albers.js");
var _albersJsDefault = parcelHelpers.interopDefault(_albersJs);
var _conicEqualAreaJs = require("./conicEqualArea.js");
var _conicEqualAreaJsDefault = parcelHelpers.interopDefault(_conicEqualAreaJs);
var _fitJs = require("./fit.js");
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
exports.default = function() {
    var cache, cacheStream, lower48 = _albersJsDefault.default(), lower48Point, alaska = _conicEqualAreaJsDefault.default().rotate([
        154,
        0
    ]).center([
        -2,
        58.5
    ]).parallels([
        55,
        65
    ]), alaskaPoint, hawaii = _conicEqualAreaJsDefault.default().rotate([
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
        return (y >= 0.12 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii : lower48).invert(coordinates);
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
                x - 0.425 * k + _mathJs.epsilon,
                y + 0.12 * k + _mathJs.epsilon
            ],
            [
                x - 0.214 * k - _mathJs.epsilon,
                y + 0.234 * k - _mathJs.epsilon
            ]
        ]).stream(pointStream);
        hawaiiPoint = hawaii.translate([
            x - 0.205 * k,
            y + 0.212 * k
        ]).clipExtent([
            [
                x - 0.214 * k + _mathJs.epsilon,
                y + 0.166 * k + _mathJs.epsilon
            ],
            [
                x - 0.115 * k - _mathJs.epsilon,
                y + 0.234 * k - _mathJs.epsilon
            ]
        ]).stream(pointStream);
        return reset();
    };
    albersUsa.fitExtent = function(extent, object) {
        return _fitJs.fitExtent(albersUsa, extent, object);
    };
    albersUsa.fitSize = function(size, object) {
        return _fitJs.fitSize(albersUsa, size, object);
    };
    albersUsa.fitWidth = function(width, object) {
        return _fitJs.fitWidth(albersUsa, width, object);
    };
    albersUsa.fitHeight = function(height, object) {
        return _fitJs.fitHeight(albersUsa, height, object);
    };
    function reset() {
        cache = cacheStream = null;
        return albersUsa;
    }
    return albersUsa.scale(1070);
};

},{"../math.js":"7JyYl","./albers.js":"3Xlta","./conicEqualArea.js":"c9BXq","./fit.js":"4as5X","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7HnSn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "azimuthalEqualAreaRaw", ()=>azimuthalEqualAreaRaw
);
var _mathJs = require("../math.js");
var _azimuthalJs = require("./azimuthal.js");
var _indexJs = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var azimuthalEqualAreaRaw = _azimuthalJs.azimuthalRaw(function(cxcy) {
    return _mathJs.sqrt(2 / (1 + cxcy));
});
azimuthalEqualAreaRaw.invert = _azimuthalJs.azimuthalInvert(function(z) {
    return 2 * _mathJs.asin(z / 2);
});
exports.default = function() {
    return _indexJsDefault.default(azimuthalEqualAreaRaw).scale(124.75).clipAngle(179.999);
};

},{"../math.js":"7JyYl","./azimuthal.js":"cX4Jq","./index.js":"i24sF","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cX4Jq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "azimuthalRaw", ()=>azimuthalRaw
);
parcelHelpers.export(exports, "azimuthalInvert", ()=>azimuthalInvert
);
var _mathJs = require("../math.js");
function azimuthalRaw(scale) {
    return function(x, y) {
        var cx = _mathJs.cos(x), cy = _mathJs.cos(y), k = scale(cx * cy);
        if (k === Infinity) return [
            2,
            0
        ];
        return [
            k * cy * _mathJs.sin(x),
            k * _mathJs.sin(y)
        ];
    };
}
function azimuthalInvert(angle) {
    return function(x, y) {
        var z = _mathJs.sqrt(x * x + y * y), c = angle(z), sc = _mathJs.sin(c), cc = _mathJs.cos(c);
        return [
            _mathJs.atan2(x * sc, z * cc),
            _mathJs.asin(z && y * sc / z)
        ];
    };
}

},{"../math.js":"7JyYl","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ggmAs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "azimuthalEquidistantRaw", ()=>azimuthalEquidistantRaw
);
var _mathJs = require("../math.js");
var _azimuthalJs = require("./azimuthal.js");
var _indexJs = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var azimuthalEquidistantRaw = _azimuthalJs.azimuthalRaw(function(c) {
    return (c = _mathJs.acos(c)) && c / _mathJs.sin(c);
});
azimuthalEquidistantRaw.invert = _azimuthalJs.azimuthalInvert(function(z) {
    return z;
});
exports.default = function() {
    return _indexJsDefault.default(azimuthalEquidistantRaw).scale(79.4188).clipAngle(179.999);
};

},{"../math.js":"7JyYl","./azimuthal.js":"cX4Jq","./index.js":"i24sF","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"qkL9e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "conicConformalRaw", ()=>conicConformalRaw
);
var _mathJs = require("../math.js");
var _conicJs = require("./conic.js");
var _mercatorJs = require("./mercator.js");
function tany(y) {
    return _mathJs.tan((_mathJs.halfPi + y) / 2);
}
function conicConformalRaw(y0, y1) {
    var cy0 = _mathJs.cos(y0), n = y0 === y1 ? _mathJs.sin(y0) : _mathJs.log(cy0 / _mathJs.cos(y1)) / _mathJs.log(tany(y1) / tany(y0)), f = cy0 * _mathJs.pow(tany(y0), n) / n;
    if (!n) return _mercatorJs.mercatorRaw;
    function project(x, y) {
        if (f > 0) {
            if (y < -_mathJs.halfPi + _mathJs.epsilon) y = -_mathJs.halfPi + _mathJs.epsilon;
        } else if (y > _mathJs.halfPi - _mathJs.epsilon) y = _mathJs.halfPi - _mathJs.epsilon;
        var r = f / _mathJs.pow(tany(y), n);
        return [
            r * _mathJs.sin(n * x),
            f - r * _mathJs.cos(n * x)
        ];
    }
    project.invert = function(x, y) {
        var fy = f - y, r = _mathJs.sign(n) * _mathJs.sqrt(x * x + fy * fy), l = _mathJs.atan2(x, _mathJs.abs(fy)) * _mathJs.sign(fy);
        if (fy * n < 0) l -= _mathJs.pi * _mathJs.sign(x) * _mathJs.sign(fy);
        return [
            l / n,
            2 * _mathJs.atan(_mathJs.pow(f / r, 1 / n)) - _mathJs.halfPi
        ];
    };
    return project;
}
exports.default = function() {
    return _conicJs.conicProjection(conicConformalRaw).scale(109.5).parallels([
        30,
        30
    ]);
};

},{"../math.js":"7JyYl","./conic.js":"hA53y","./mercator.js":"fE71g","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fE71g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mercatorRaw", ()=>mercatorRaw
);
parcelHelpers.export(exports, "mercatorProjection", ()=>mercatorProjection
);
var _mathJs = require("../math.js");
var _rotationJs = require("../rotation.js");
var _rotationJsDefault = parcelHelpers.interopDefault(_rotationJs);
var _indexJs = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function mercatorRaw(lambda, phi) {
    return [
        lambda,
        _mathJs.log(_mathJs.tan((_mathJs.halfPi + phi) / 2))
    ];
}
mercatorRaw.invert = function(x, y) {
    return [
        x,
        2 * _mathJs.atan(_mathJs.exp(y)) - _mathJs.halfPi
    ];
};
exports.default = function() {
    return mercatorProjection(mercatorRaw).scale(961 / _mathJs.tau);
};
function mercatorProjection(project) {
    var m = _indexJsDefault.default(project), center = m.center, scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, x0 = null, y0, x1, y1; // clip extent
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
        var k = _mathJs.pi * scale(), t = m(_rotationJsDefault.default(m.rotate()).invert([
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

},{"../math.js":"7JyYl","../rotation.js":"54Lv8","./index.js":"i24sF","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"i4E3R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "conicEquidistantRaw", ()=>conicEquidistantRaw
);
var _mathJs = require("../math.js");
var _conicJs = require("./conic.js");
var _equirectangularJs = require("./equirectangular.js");
function conicEquidistantRaw(y0, y1) {
    var cy0 = _mathJs.cos(y0), n = y0 === y1 ? _mathJs.sin(y0) : (cy0 - _mathJs.cos(y1)) / (y1 - y0), g = cy0 / n + y0;
    if (_mathJs.abs(n) < _mathJs.epsilon) return _equirectangularJs.equirectangularRaw;
    function project(x, y) {
        var gy = g - y, nx = n * x;
        return [
            gy * _mathJs.sin(nx),
            g - gy * _mathJs.cos(nx)
        ];
    }
    project.invert = function(x, y) {
        var gy = g - y, l = _mathJs.atan2(x, _mathJs.abs(gy)) * _mathJs.sign(gy);
        if (gy * n < 0) l -= _mathJs.pi * _mathJs.sign(x) * _mathJs.sign(gy);
        return [
            l / n,
            g - _mathJs.sign(n) * _mathJs.sqrt(x * x + gy * gy)
        ];
    };
    return project;
}
exports.default = function() {
    return _conicJs.conicProjection(conicEquidistantRaw).scale(131.154).center([
        0,
        13.9389
    ]);
};

},{"../math.js":"7JyYl","./conic.js":"hA53y","./equirectangular.js":"6r5uk","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6r5uk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "equirectangularRaw", ()=>equirectangularRaw
);
var _indexJs = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function equirectangularRaw(lambda, phi) {
    return [
        lambda,
        phi
    ];
}
equirectangularRaw.invert = equirectangularRaw;
exports.default = function() {
    return _indexJsDefault.default(equirectangularRaw).scale(152.63);
};

},{"./index.js":"i24sF","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2iIrI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "equalEarthRaw", ()=>equalEarthRaw
);
var _indexJs = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _mathJs = require("../math.js");
var A1 = 1.340264, A2 = -0.081106, A3 = 0.000893, A4 = 0.003796, M = _mathJs.sqrt(3) / 2, iterations = 12;
function equalEarthRaw(lambda, phi) {
    var l = _mathJs.asin(M * _mathJs.sin(phi)), l2 = l * l, l6 = l2 * l2 * l2;
    return [
        lambda * _mathJs.cos(l) / (M * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2))),
        l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2))
    ];
}
equalEarthRaw.invert = function(x, y) {
    var l = y, l2 = l * l, l6 = l2 * l2 * l2;
    for(var i = 0, delta, fy, fpy; i < iterations; ++i){
        fy = l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2)) - y;
        fpy = A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2);
        l -= delta = fy / fpy, l2 = l * l, l6 = l2 * l2 * l2;
        if (_mathJs.abs(delta) < _mathJs.epsilon2) break;
    }
    return [
        M * x * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2)) / _mathJs.cos(l),
        _mathJs.asin(_mathJs.sin(l) / M)
    ];
};
exports.default = function() {
    return _indexJsDefault.default(equalEarthRaw).scale(177.158);
};

},{"./index.js":"i24sF","../math.js":"7JyYl","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gz9Xc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gnomonicRaw", ()=>gnomonicRaw
);
var _mathJs = require("../math.js");
var _azimuthalJs = require("./azimuthal.js");
var _indexJs = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function gnomonicRaw(x, y) {
    var cy = _mathJs.cos(y), k = _mathJs.cos(x) * cy;
    return [
        cy * _mathJs.sin(x) / k,
        _mathJs.sin(y) / k
    ];
}
gnomonicRaw.invert = _azimuthalJs.azimuthalInvert(_mathJs.atan);
exports.default = function() {
    return _indexJsDefault.default(gnomonicRaw).scale(144.049).clipAngle(60);
};

},{"../math.js":"7JyYl","./azimuthal.js":"cX4Jq","./index.js":"i24sF","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ipPmW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rectangleJs = require("../clip/rectangle.js");
var _rectangleJsDefault = parcelHelpers.interopDefault(_rectangleJs);
var _identityJs = require("../identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _transformJs = require("../transform.js");
var _fitJs = require("./fit.js");
var _mathJs = require("../math.js");
exports.default = function() {
    var k = 1, tx = 0, ty = 0, sx = 1, sy = 1, alpha = 0, ca, sa, x0 = null, y0, x1, y1, kx = 1, ky = 1, transform = _transformJs.transformer({
        point: function(x, y) {
            var p = projection([
                x,
                y
            ]);
            this.stream.point(p[0], p[1]);
        }
    }), postclip = _identityJsDefault.default, cache, cacheStream;
    function reset() {
        kx = k * sx;
        ky = k * sy;
        cache = cacheStream = null;
        return projection;
    }
    function projection(p) {
        var x = p[0] * kx, y = p[1] * ky;
        if (alpha) {
            var t = y * ca - x * sa;
            x = x * ca + y * sa;
            y = t;
        }
        return [
            x + tx,
            y + ty
        ];
    }
    projection.invert = function(p) {
        var x = p[0] - tx, y = p[1] - ty;
        if (alpha) {
            var t = y * ca + x * sa;
            x = x * ca - y * sa;
            y = t;
        }
        return [
            x / kx,
            y / ky
        ];
    };
    projection.stream = function(stream) {
        return cache && cacheStream === stream ? cache : cache = transform(postclip(cacheStream = stream));
    };
    projection.postclip = function(_) {
        return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
    };
    projection.clipExtent = function(_) {
        return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, _identityJsDefault.default) : _rectangleJsDefault.default(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [
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
        return arguments.length ? (k = +_, reset()) : k;
    };
    projection.translate = function(_) {
        return arguments.length ? (tx = +_[0], ty = +_[1], reset()) : [
            tx,
            ty
        ];
    };
    projection.angle = function(_) {
        return arguments.length ? (alpha = _ % 360 * _mathJs.radians, sa = _mathJs.sin(alpha), ca = _mathJs.cos(alpha), reset()) : alpha * _mathJs.degrees;
    };
    projection.reflectX = function(_) {
        return arguments.length ? (sx = _ ? -1 : 1, reset()) : sx < 0;
    };
    projection.reflectY = function(_) {
        return arguments.length ? (sy = _ ? -1 : 1, reset()) : sy < 0;
    };
    projection.fitExtent = function(extent, object) {
        return _fitJs.fitExtent(projection, extent, object);
    };
    projection.fitSize = function(size, object) {
        return _fitJs.fitSize(projection, size, object);
    };
    projection.fitWidth = function(width, object) {
        return _fitJs.fitWidth(projection, width, object);
    };
    projection.fitHeight = function(height, object) {
        return _fitJs.fitHeight(projection, height, object);
    };
    return projection;
};

},{"../clip/rectangle.js":"2xswT","../identity.js":"kdbfP","../transform.js":"feffG","./fit.js":"4as5X","../math.js":"7JyYl","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gQDpu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "naturalEarth1Raw", ()=>naturalEarth1Raw
);
var _indexJs = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _mathJs = require("../math.js");
function naturalEarth1Raw(lambda, phi) {
    var phi2 = phi * phi, phi4 = phi2 * phi2;
    return [
        lambda * (0.8707 - 0.131979 * phi2 + phi4 * (-0.013791 + phi4 * (0.003971 * phi2 - 0.001529 * phi4))),
        phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4)))
    ];
}
naturalEarth1Raw.invert = function(x, y) {
    var phi = y, i = 25, delta;
    do {
        var phi2 = phi * phi, phi4 = phi2 * phi2;
        phi -= delta = (phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4))) - y) / (1.007226 + phi2 * (0.045255 + phi4 * (-0.311325 + 0.259866 * phi2 - 0.005916 * 11 * phi4)));
    }while (_mathJs.abs(delta) > _mathJs.epsilon && --i > 0)
    return [
        x / (0.8707 + (phi2 = phi * phi) * (-0.131979 + phi2 * (-0.013791 + phi2 * phi2 * phi2 * (0.003971 - 0.001529 * phi2)))),
        phi
    ];
};
exports.default = function() {
    return _indexJsDefault.default(naturalEarth1Raw).scale(175.295);
};

},{"./index.js":"i24sF","../math.js":"7JyYl","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3Wbli":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "orthographicRaw", ()=>orthographicRaw
);
var _mathJs = require("../math.js");
var _azimuthalJs = require("./azimuthal.js");
var _indexJs = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function orthographicRaw(x, y) {
    return [
        _mathJs.cos(y) * _mathJs.sin(x),
        _mathJs.sin(y)
    ];
}
orthographicRaw.invert = _azimuthalJs.azimuthalInvert(_mathJs.asin);
exports.default = function() {
    return _indexJsDefault.default(orthographicRaw).scale(249.5).clipAngle(90 + _mathJs.epsilon);
};

},{"../math.js":"7JyYl","./azimuthal.js":"cX4Jq","./index.js":"i24sF","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hIzPd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stereographicRaw", ()=>stereographicRaw
);
var _mathJs = require("../math.js");
var _azimuthalJs = require("./azimuthal.js");
var _indexJs = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function stereographicRaw(x, y) {
    var cy = _mathJs.cos(y), k = 1 + _mathJs.cos(x) * cy;
    return [
        cy * _mathJs.sin(x) / k,
        _mathJs.sin(y) / k
    ];
}
stereographicRaw.invert = _azimuthalJs.azimuthalInvert(function(z) {
    return 2 * _mathJs.atan(z);
});
exports.default = function() {
    return _indexJsDefault.default(stereographicRaw).scale(250).clipAngle(142);
};

},{"../math.js":"7JyYl","./azimuthal.js":"cX4Jq","./index.js":"i24sF","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4SRkZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transverseMercatorRaw", ()=>transverseMercatorRaw
);
var _mathJs = require("../math.js");
var _mercatorJs = require("./mercator.js");
function transverseMercatorRaw(lambda, phi) {
    return [
        _mathJs.log(_mathJs.tan((_mathJs.halfPi + phi) / 2)),
        -lambda
    ];
}
transverseMercatorRaw.invert = function(x, y) {
    return [
        -y,
        2 * _mathJs.atan(_mathJs.exp(x)) - _mathJs.halfPi
    ];
};
exports.default = function() {
    var m = _mercatorJs.mercatorProjection(transverseMercatorRaw), center = m.center, rotate = m.rotate;
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
};

},{"../math.js":"7JyYl","./mercator.js":"fE71g","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hgWtk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "create", ()=>_createJsDefault.default
);
parcelHelpers.export(exports, "creator", ()=>_creatorJsDefault.default
);
parcelHelpers.export(exports, "local", ()=>_localJsDefault.default
);
parcelHelpers.export(exports, "matcher", ()=>_matcherJsDefault.default
);
parcelHelpers.export(exports, "namespace", ()=>_namespaceJsDefault.default
);
parcelHelpers.export(exports, "namespaces", ()=>_namespacesJsDefault.default
);
parcelHelpers.export(exports, "pointer", ()=>_pointerJsDefault.default
);
parcelHelpers.export(exports, "pointers", ()=>_pointersJsDefault.default
);
parcelHelpers.export(exports, "select", ()=>_selectJsDefault.default
);
parcelHelpers.export(exports, "selectAll", ()=>_selectAllJsDefault.default
);
parcelHelpers.export(exports, "selection", ()=>_indexJsDefault.default
);
parcelHelpers.export(exports, "selector", ()=>_selectorJsDefault.default
);
parcelHelpers.export(exports, "selectorAll", ()=>_selectorAllJsDefault.default
);
parcelHelpers.export(exports, "style", ()=>_styleJs.styleValue
);
parcelHelpers.export(exports, "window", ()=>_windowJsDefault.default
);
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

},{"./create.js":"luWz7","./creator.js":"hzFln","./local.js":"85ofP","./matcher.js":"5hMoc","./namespace.js":"k6t5I","./namespaces.js":"jlwhh","./pointer.js":"lRJOw","./pointers.js":"4HqJY","./select.js":"g0UZK","./selectAll.js":"lhfgm","./selection/index.js":"f38xv","./selector.js":"e9mWc","./selectorAll.js":"6FR5I","./selection/style.js":"lVr8f","./window.js":"c51LV","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"luWz7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _creatorJs = require("./creator.js");
var _creatorJsDefault = parcelHelpers.interopDefault(_creatorJs);
var _selectJs = require("./select.js");
var _selectJsDefault = parcelHelpers.interopDefault(_selectJs);
exports.default = function(name) {
    return _selectJsDefault.default(_creatorJsDefault.default(name).call(document.documentElement));
};

},{"./creator.js":"hzFln","./select.js":"g0UZK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hzFln":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _namespaceJs = require("./namespace.js");
var _namespaceJsDefault = parcelHelpers.interopDefault(_namespaceJs);
var _namespacesJs = require("./namespaces.js");
function creatorInherit(name) {
    return function() {
        var document = this.ownerDocument, uri = this.namespaceURI;
        return uri === _namespacesJs.xhtml && document.documentElement.namespaceURI === _namespacesJs.xhtml ? document.createElement(name) : document.createElementNS(uri, name);
    };
}
function creatorFixed(fullname) {
    return function() {
        return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
}
exports.default = function(name) {
    var fullname = _namespaceJsDefault.default(name);
    return (fullname.local ? creatorFixed : creatorInherit)(fullname);
};

},{"./namespace.js":"k6t5I","./namespaces.js":"jlwhh","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"k6t5I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _namespacesJs = require("./namespaces.js");
var _namespacesJsDefault = parcelHelpers.interopDefault(_namespacesJs);
exports.default = function(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return _namespacesJsDefault.default.hasOwnProperty(prefix) ? {
        space: _namespacesJsDefault.default[prefix],
        local: name
    } : name; // eslint-disable-line no-prototype-builtins
};

},{"./namespaces.js":"jlwhh","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jlwhh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "xhtml", ()=>xhtml
);
var xhtml = "http://www.w3.org/1999/xhtml";
exports.default = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"g0UZK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./selection/index.js");
exports.default = function(selector) {
    return typeof selector === "string" ? new _indexJs.Selection([
        [
            document.querySelector(selector)
        ]
    ], [
        document.documentElement
    ]) : new _indexJs.Selection([
        [
            selector
        ]
    ], _indexJs.root);
};

},{"./selection/index.js":"f38xv","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"f38xv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "root", ()=>root
);
parcelHelpers.export(exports, "Selection", ()=>Selection
);
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
    select: _selectJsDefault.default,
    selectAll: _selectAllJsDefault.default,
    selectChild: _selectChildJsDefault.default,
    selectChildren: _selectChildrenJsDefault.default,
    filter: _filterJsDefault.default,
    data: _dataJsDefault.default,
    enter: _enterJsDefault.default,
    exit: _exitJsDefault.default,
    join: _joinJsDefault.default,
    merge: _mergeJsDefault.default,
    selection: selection_selection,
    order: _orderJsDefault.default,
    sort: _sortJsDefault.default,
    call: _callJsDefault.default,
    nodes: _nodesJsDefault.default,
    node: _nodeJsDefault.default,
    size: _sizeJsDefault.default,
    empty: _emptyJsDefault.default,
    each: _eachJsDefault.default,
    attr: _attrJsDefault.default,
    style: _styleJsDefault.default,
    property: _propertyJsDefault.default,
    classed: _classedJsDefault.default,
    text: _textJsDefault.default,
    html: _htmlJsDefault.default,
    raise: _raiseJsDefault.default,
    lower: _lowerJsDefault.default,
    append: _appendJsDefault.default,
    insert: _insertJsDefault.default,
    remove: _removeJsDefault.default,
    clone: _cloneJsDefault.default,
    datum: _datumJsDefault.default,
    on: _onJsDefault.default,
    dispatch: _dispatchJsDefault.default,
    [Symbol.iterator]: _iteratorJsDefault.default
};
exports.default = selection;

},{"./select.js":"1jbDi","./selectAll.js":"cGFzy","./selectChild.js":"8DwO9","./selectChildren.js":"dHwnc","./filter.js":"79RzA","./data.js":"4ZVP3","./enter.js":"iCNmI","./exit.js":"8hgeS","./join.js":"4nZM4","./merge.js":"2Dn1o","./order.js":"g79rT","./sort.js":"6sxcI","./call.js":"jtSbo","./nodes.js":"56G5R","./node.js":"kRhWy","./size.js":"26GBx","./empty.js":"2pmiA","./each.js":"50lbW","./attr.js":"aUlJ3","./style.js":"lVr8f","./property.js":"49sSE","./classed.js":"6VMaw","./text.js":"ch5qt","./html.js":"jyrYS","./raise.js":"aWlYS","./lower.js":"43Imn","./append.js":"62Ily","./insert.js":"4D2zc","./remove.js":"ezirt","./clone.js":"ERvNe","./datum.js":"cElUS","./on.js":"6sHag","./dispatch.js":"eo73B","./iterator.js":"6AbO6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1jbDi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
var _selectorJs = require("../selector.js");
var _selectorJsDefault = parcelHelpers.interopDefault(_selectorJs);
exports.default = function(select) {
    if (typeof select !== "function") select = _selectorJsDefault.default(select);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i)if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
            if ("__data__" in node) subnode.__data__ = node.__data__;
            subgroup[i] = subnode;
        }
    }
    return new _indexJs.Selection(subgroups, this._parents);
};

},{"./index.js":"f38xv","../selector.js":"e9mWc","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"e9mWc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function none() {
}
exports.default = function(selector) {
    return selector == null ? none : function() {
        return this.querySelector(selector);
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cGFzy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
var _arrayJs = require("../array.js");
var _arrayJsDefault = parcelHelpers.interopDefault(_arrayJs);
var _selectorAllJs = require("../selectorAll.js");
var _selectorAllJsDefault = parcelHelpers.interopDefault(_selectorAllJs);
function arrayAll(select) {
    return function() {
        return _arrayJsDefault.default(select.apply(this, arguments));
    };
}
exports.default = function(select) {
    if (typeof select === "function") select = arrayAll(select);
    else select = _selectorAllJsDefault.default(select);
    for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            subgroups.push(select.call(node, node.__data__, i, group));
            parents.push(node);
        }
    }
    return new _indexJs.Selection(subgroups, parents);
};

},{"./index.js":"f38xv","../array.js":"cirh5","../selectorAll.js":"6FR5I","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cirh5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function array(x) {
    return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}
exports.default = array;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6FR5I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function empty() {
    return [];
}
exports.default = function(selector) {
    return selector == null ? empty : function() {
        return this.querySelectorAll(selector);
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8DwO9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function(match) {
    return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : _matcherJs.childMatcher(match)));
};

},{"../matcher.js":"5hMoc","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5hMoc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "childMatcher", ()=>childMatcher
);
exports.default = function(selector) {
    return function() {
        return this.matches(selector);
    };
};
function childMatcher(selector) {
    return function(node) {
        return node.matches(selector);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dHwnc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function(match) {
    return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : _matcherJs.childMatcher(match)));
};

},{"../matcher.js":"5hMoc","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"79RzA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
var _matcherJs = require("../matcher.js");
var _matcherJsDefault = parcelHelpers.interopDefault(_matcherJs);
exports.default = function(match) {
    if (typeof match !== "function") match = _matcherJsDefault.default(match);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i)if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
    }
    return new _indexJs.Selection(subgroups, this._parents);
};

},{"./index.js":"f38xv","../matcher.js":"5hMoc","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4ZVP3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
    } else enter[i] = new _enterJs.EnterNode(parent, data[i]);
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
        } else enter[i] = new _enterJs.EnterNode(parent, data[i]);
    }
    // Add any remaining nodes that were not bound to data to exit.
    for(i = 0; i < groupLength; ++i)if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) exit[i] = node;
}
function datum(node) {
    return node.__data__;
}
exports.default = function(value, key) {
    if (!arguments.length) return Array.from(this, datum);
    var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
    if (typeof value !== "function") value = _constantJsDefault.default(value);
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
    update = new _indexJs.Selection(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
};
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

},{"./index.js":"f38xv","./enter.js":"iCNmI","../constant.js":"2yBTe","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iCNmI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EnterNode", ()=>EnterNode
);
var _sparseJs = require("./sparse.js");
var _sparseJsDefault = parcelHelpers.interopDefault(_sparseJs);
var _indexJs = require("./index.js");
exports.default = function() {
    return new _indexJs.Selection(this._enter || this._groups.map(_sparseJsDefault.default), this._parents);
};
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

},{"./sparse.js":"bkLEG","./index.js":"f38xv","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bkLEG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(update) {
    return new Array(update.length);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2yBTe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(x) {
    return function() {
        return x;
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8hgeS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _sparseJs = require("./sparse.js");
var _sparseJsDefault = parcelHelpers.interopDefault(_sparseJs);
var _indexJs = require("./index.js");
exports.default = function() {
    return new _indexJs.Selection(this._exit || this._groups.map(_sparseJsDefault.default), this._parents);
};

},{"./sparse.js":"bkLEG","./index.js":"f38xv","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4nZM4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(onenter, onupdate, onexit) {
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
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2Dn1o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
exports.default = function(context) {
    var selection = context.selection ? context.selection() : context;
    for(var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
        for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group0[i] || group1[i]) merge[i] = node;
    }
    for(; j < m0; ++j)merges[j] = groups0[j];
    return new _indexJs.Selection(merges, this._parents);
};

},{"./index.js":"f38xv","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"g79rT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    for(var groups = this._groups, j = -1, m = groups.length; ++j < m;){
        for(var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;)if (node = group[i]) {
            if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
            next = node;
        }
    }
    return this;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6sxcI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
exports.default = function(compare) {
    if (!compare) compare = ascending;
    function compareNode(a, b) {
        return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }
    for(var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group[i]) sortgroup[i] = node;
        sortgroup.sort(compareNode);
    }
    return new _indexJs.Selection(sortgroups, this._parents).order();
};
function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

},{"./index.js":"f38xv","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jtSbo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"56G5R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    return Array.from(this);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kRhWy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j)for(var group = groups[j], i = 0, n = group.length; i < n; ++i){
        var node = group[i];
        if (node) return node;
    }
    return null;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"26GBx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    let size = 0;
    for (const node of this)++size; // eslint-disable-line no-unused-vars
    return size;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2pmiA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    return !this.node();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"50lbW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(callback) {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i)if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
    return this;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aUlJ3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function(name, value) {
    var fullname = _namespaceJsDefault.default(name);
    if (arguments.length < 2) {
        var node = this.node();
        return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
    }
    return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
};

},{"../namespace.js":"k6t5I","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lVr8f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "styleValue", ()=>styleValue
);
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
exports.default = function(name, value, priority) {
    return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
};
function styleValue(node, name) {
    return node.style.getPropertyValue(name) || _windowJsDefault.default(node).getComputedStyle(node, null).getPropertyValue(name);
}

},{"../window.js":"c51LV","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"c51LV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(node) {
    return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView; // node is a Document
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"49sSE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function(name, value) {
    return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6VMaw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function(name, value) {
    var names = classArray(name + "");
    if (arguments.length < 2) {
        var list = classList(this.node()), i = -1, n = names.length;
        while(++i < n)if (!list.contains(names[i])) return false;
        return true;
    }
    return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ch5qt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function(value) {
    return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jyrYS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function(value) {
    return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aWlYS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
}
exports.default = function() {
    return this.each(raise);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"43Imn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
exports.default = function() {
    return this.each(lower);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"62Ily":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _creatorJs = require("../creator.js");
var _creatorJsDefault = parcelHelpers.interopDefault(_creatorJs);
exports.default = function(name) {
    var create = typeof name === "function" ? name : _creatorJsDefault.default(name);
    return this.select(function() {
        return this.appendChild(create.apply(this, arguments));
    });
};

},{"../creator.js":"hzFln","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4D2zc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _creatorJs = require("../creator.js");
var _creatorJsDefault = parcelHelpers.interopDefault(_creatorJs);
var _selectorJs = require("../selector.js");
var _selectorJsDefault = parcelHelpers.interopDefault(_selectorJs);
function constantNull() {
    return null;
}
exports.default = function(name, before) {
    var create = typeof name === "function" ? name : _creatorJsDefault.default(name), select = before == null ? constantNull : typeof before === "function" ? before : _selectorJsDefault.default(before);
    return this.select(function() {
        return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
};

},{"../creator.js":"hzFln","../selector.js":"e9mWc","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ezirt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
}
exports.default = function() {
    return this.each(remove);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ERvNe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
exports.default = function(deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cElUS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6sHag":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function(typename, value, options) {
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
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eo73B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _windowJs = require("../window.js");
var _windowJsDefault = parcelHelpers.interopDefault(_windowJs);
function dispatchEvent(node, type, params) {
    var window = _windowJsDefault.default(node), event = window.CustomEvent;
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
exports.default = function(type, params) {
    return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
};

},{"../window.js":"c51LV","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6AbO6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function*() {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i)if (node = group[i]) yield node;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"85ofP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var nextId = 0;
function local() {
    return new Local;
}
exports.default = local;
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lRJOw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _sourceEventJs = require("./sourceEvent.js");
var _sourceEventJsDefault = parcelHelpers.interopDefault(_sourceEventJs);
exports.default = function(event, node) {
    event = _sourceEventJsDefault.default(event);
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
};

},{"./sourceEvent.js":"3beDu","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3beDu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(event) {
    let sourceEvent;
    while(sourceEvent = event.sourceEvent)event = sourceEvent;
    return event;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4HqJY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pointerJs = require("./pointer.js");
var _pointerJsDefault = parcelHelpers.interopDefault(_pointerJs);
var _sourceEventJs = require("./sourceEvent.js");
var _sourceEventJsDefault = parcelHelpers.interopDefault(_sourceEventJs);
exports.default = function(events, node) {
    if (events.target) {
        events = _sourceEventJsDefault.default(events);
        if (node === undefined) node = events.currentTarget;
        events = events.touches || [
            events
        ];
    }
    return Array.from(events, (event)=>_pointerJsDefault.default(event, node)
    );
};

},{"./pointer.js":"lRJOw","./sourceEvent.js":"3beDu","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lhfgm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayJs = require("./array.js");
var _arrayJsDefault = parcelHelpers.interopDefault(_arrayJs);
var _indexJs = require("./selection/index.js");
exports.default = function(selector) {
    return typeof selector === "string" ? new _indexJs.Selection([
        document.querySelectorAll(selector)
    ], [
        document.documentElement
    ]) : new _indexJs.Selection([
        _arrayJsDefault.default(selector)
    ], _indexJs.root);
};

},{"./array.js":"cirh5","./selection/index.js":"f38xv","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"82ygz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "now", ()=>_timerJs.now
);
parcelHelpers.export(exports, "timer", ()=>_timerJs.timer
);
parcelHelpers.export(exports, "timerFlush", ()=>_timerJs.timerFlush
);
parcelHelpers.export(exports, "timeout", ()=>_timeoutJsDefault.default
);
parcelHelpers.export(exports, "interval", ()=>_intervalJsDefault.default
);
var _timerJs = require("./timer.js");
var _timeoutJs = require("./timeout.js");
var _timeoutJsDefault = parcelHelpers.interopDefault(_timeoutJs);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);

},{"./timer.js":"e5Yqg","./timeout.js":"iPlus","./interval.js":"fIl4w","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"e5Yqg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "now", ()=>now1
);
parcelHelpers.export(exports, "Timer", ()=>Timer
);
parcelHelpers.export(exports, "timer", ()=>timer
);
parcelHelpers.export(exports, "timerFlush", ()=>timerFlush
);
var frame = 0, timeout = 0, interval = 0, pokeDelay = 1000, taskHead, taskTail, clockLast = 0, clockNow = 0, clockSkew = 0, clock = typeof performance === "object" && performance.now ? performance : Date, setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
    setTimeout(f, 17);
};
function now1() {
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
        time = (time == null ? now1() : +time) + (delay == null ? 0 : +delay);
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
    now1(); // Get the current time, if not already set.
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iPlus":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _timerJs = require("./timer.js");
exports.default = function(callback, delay, time) {
    var t = new _timerJs.Timer;
    delay = delay == null ? 0 : +delay;
    t.restart((elapsed)=>{
        t.stop();
        callback(elapsed + delay);
    }, delay, time);
    return t;
};

},{"./timer.js":"e5Yqg","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fIl4w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _timerJs = require("./timer.js");
exports.default = function(callback1, delay1, time1) {
    var t = new _timerJs.Timer, total = delay1;
    if (delay1 == null) return t.restart(callback1, delay1, time1), t;
    t._restart = t.restart;
    t.restart = function(callback, delay, time) {
        delay = +delay, time = time == null ? _timerJs.now() : +time;
        t._restart(function tick(elapsed) {
            elapsed += total;
            t._restart(tick, total += delay, time);
            callback(elapsed);
        }, delay, time);
    };
    t.restart(callback1, delay1, time1);
    return t;
};

},{"./timer.js":"e5Yqg","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cRYyR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transition", ()=>_indexJsDefault.default
);
parcelHelpers.export(exports, "active", ()=>_activeJsDefault.default
);
parcelHelpers.export(exports, "interrupt", ()=>_interruptJsDefault.default
);
var _indexJs = require("./selection/index.js");
var _indexJs1 = require("./transition/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
var _activeJs = require("./active.js");
var _activeJsDefault = parcelHelpers.interopDefault(_activeJs);
var _interruptJs = require("./interrupt.js");
var _interruptJsDefault = parcelHelpers.interopDefault(_interruptJs);

},{"./selection/index.js":"gNdN5","./transition/index.js":"18i1e","./active.js":"e5Mev","./interrupt.js":"d4VjA","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gNdN5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _d3Selection = require("d3-selection");
var _interruptJs = require("./interrupt.js");
var _interruptJsDefault = parcelHelpers.interopDefault(_interruptJs);
var _transitionJs = require("./transition.js");
var _transitionJsDefault = parcelHelpers.interopDefault(_transitionJs);
_d3Selection.selection.prototype.interrupt = _interruptJsDefault.default;
_d3Selection.selection.prototype.transition = _transitionJsDefault.default;

},{"d3-selection":"hgWtk","./interrupt.js":"hoP2s","./transition.js":"7r67v","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hoP2s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _interruptJs = require("../interrupt.js");
var _interruptJsDefault = parcelHelpers.interopDefault(_interruptJs);
exports.default = function(name) {
    return this.each(function() {
        _interruptJsDefault.default(this, name);
    });
};

},{"../interrupt.js":"d4VjA","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"d4VjA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scheduleJs = require("./transition/schedule.js");
exports.default = function(node, name) {
    var schedules = node.__transition, schedule, active, empty = true, i;
    if (!schedules) return;
    name = name == null ? null : name + "";
    for(i in schedules){
        if ((schedule = schedules[i]).name !== name) {
            empty = false;
            continue;
        }
        active = schedule.state > _scheduleJs.STARTING && schedule.state < _scheduleJs.ENDING;
        schedule.state = _scheduleJs.ENDED;
        schedule.timer.stop();
        schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
        delete schedules[i];
    }
    if (empty) delete node.__transition;
};

},{"./transition/schedule.js":"dTpjR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dTpjR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CREATED", ()=>CREATED
);
parcelHelpers.export(exports, "SCHEDULED", ()=>SCHEDULED
);
parcelHelpers.export(exports, "STARTING", ()=>STARTING
);
parcelHelpers.export(exports, "STARTED", ()=>STARTED
);
parcelHelpers.export(exports, "RUNNING", ()=>RUNNING
);
parcelHelpers.export(exports, "ENDING", ()=>ENDING
);
parcelHelpers.export(exports, "ENDED", ()=>ENDED
);
parcelHelpers.export(exports, "init", ()=>init
);
parcelHelpers.export(exports, "set", ()=>set
);
parcelHelpers.export(exports, "get", ()=>get
);
var _d3Dispatch = require("d3-dispatch");
var _d3Timer = require("d3-timer");
var emptyOn = _d3Dispatch.dispatch("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
exports.default = function(node, name, id, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules) node.__transition = {
    };
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
};
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
    self.timer = _d3Timer.timer(schedule, 0, self.time);
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
            if (o.state === STARTED) return _d3Timer.timeout(start);
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
        _d3Timer.timeout(function() {
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

},{"d3-dispatch":"9d2te","d3-timer":"82ygz","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9d2te":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dispatch", ()=>_dispatchJsDefault.default
);
var _dispatchJs = require("./dispatch.js");
var _dispatchJsDefault = parcelHelpers.interopDefault(_dispatchJs);

},{"./dispatch.js":"fEgH3","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fEgH3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var noop = {
    value: ()=>{
    }
};
function dispatch() {
    for(var i = 0, n = arguments.length, _ = {
    }, t; i < n; ++i){
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
        var copy = {
        }, _ = this._;
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7r67v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../transition/index.js");
var _scheduleJs = require("../transition/schedule.js");
var _scheduleJsDefault = parcelHelpers.interopDefault(_scheduleJs);
var _d3Ease = require("d3-ease");
var _d3Timer = require("d3-timer");
var defaultTiming = {
    time: null,
    delay: 0,
    duration: 250,
    ease: _d3Ease.easeCubicInOut
};
function inherit(node, id) {
    var timing;
    while(!(timing = node.__transition) || !(timing = timing[id])){
        if (!(node = node.parentNode)) throw new Error(`transition ${id} not found`);
    }
    return timing;
}
exports.default = function(name) {
    var id, timing;
    if (name instanceof _indexJs.Transition) id = name._id, name = name._name;
    else id = _indexJs.newId(), (timing = defaultTiming).time = _d3Timer.now(), name = name == null ? null : name + "";
    for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) _scheduleJsDefault.default(node, name, id, i, group, timing || inherit(node, id));
    }
    return new _indexJs.Transition(groups, this._parents, name, id);
};

},{"../transition/index.js":"18i1e","../transition/schedule.js":"dTpjR","d3-ease":"elZFc","d3-timer":"82ygz","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"18i1e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Transition", ()=>Transition
);
parcelHelpers.export(exports, "newId", ()=>newId
);
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
var id1 = 0;
function Transition(groups, parents, name, id) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id;
}
function transition(name) {
    return _d3Selection.selection().transition(name);
}
exports.default = transition;
function newId() {
    return ++id1;
}
var selection_prototype = _d3Selection.selection.prototype;
Transition.prototype = transition.prototype = {
    constructor: Transition,
    select: _selectJsDefault.default,
    selectAll: _selectAllJsDefault.default,
    selectChild: selection_prototype.selectChild,
    selectChildren: selection_prototype.selectChildren,
    filter: _filterJsDefault.default,
    merge: _mergeJsDefault.default,
    selection: _selectionJsDefault.default,
    transition: _transitionJsDefault.default,
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: _onJsDefault.default,
    attr: _attrJsDefault.default,
    attrTween: _attrTweenJsDefault.default,
    style: _styleJsDefault.default,
    styleTween: _styleTweenJsDefault.default,
    text: _textJsDefault.default,
    textTween: _textTweenJsDefault.default,
    remove: _removeJsDefault.default,
    tween: _tweenJsDefault.default,
    delay: _delayJsDefault.default,
    duration: _durationJsDefault.default,
    ease: _easeJsDefault.default,
    easeVarying: _easeVaryingJsDefault.default,
    end: _endJsDefault.default,
    [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

},{"d3-selection":"hgWtk","./attr.js":"a88nM","./attrTween.js":"4rwV3","./delay.js":"zwknt","./duration.js":"fXFoC","./ease.js":"d7SOb","./easeVarying.js":"6ms9d","./filter.js":"koiOg","./merge.js":"66rfJ","./on.js":"2whzO","./remove.js":"jdITm","./select.js":"fZfF3","./selectAll.js":"lJAHb","./selection.js":"a9rwa","./style.js":"8dHzR","./styleTween.js":"8Kz8d","./text.js":"hhhZ2","./textTween.js":"ezXKs","./transition.js":"eIPZ1","./tween.js":"8L0br","./end.js":"bGIdi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"a88nM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function(name, value) {
    var fullname = _d3Selection.namespace(name), i = fullname === "transform" ? _d3Interpolate.interpolateTransformSvg : _interpolateJsDefault.default;
    return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, _tweenJs.tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
};

},{"d3-interpolate":"e7XwA","d3-selection":"hgWtk","./tween.js":"8L0br","./interpolate.js":"1aR0B","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"e7XwA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "interpolate", ()=>_valueJsDefault.default
);
parcelHelpers.export(exports, "interpolateArray", ()=>_arrayJsDefault.default
);
parcelHelpers.export(exports, "interpolateBasis", ()=>_basisJsDefault.default
);
parcelHelpers.export(exports, "interpolateBasisClosed", ()=>_basisClosedJsDefault.default
);
parcelHelpers.export(exports, "interpolateDate", ()=>_dateJsDefault.default
);
parcelHelpers.export(exports, "interpolateDiscrete", ()=>_discreteJsDefault.default
);
parcelHelpers.export(exports, "interpolateHue", ()=>_hueJsDefault.default
);
parcelHelpers.export(exports, "interpolateNumber", ()=>_numberJsDefault.default
);
parcelHelpers.export(exports, "interpolateNumberArray", ()=>_numberArrayJsDefault.default
);
parcelHelpers.export(exports, "interpolateObject", ()=>_objectJsDefault.default
);
parcelHelpers.export(exports, "interpolateRound", ()=>_roundJsDefault.default
);
parcelHelpers.export(exports, "interpolateString", ()=>_stringJsDefault.default
);
parcelHelpers.export(exports, "interpolateTransformCss", ()=>_indexJs.interpolateTransformCss
);
parcelHelpers.export(exports, "interpolateTransformSvg", ()=>_indexJs.interpolateTransformSvg
);
parcelHelpers.export(exports, "interpolateZoom", ()=>_zoomJsDefault.default
);
parcelHelpers.export(exports, "interpolateRgb", ()=>_rgbJsDefault.default
);
parcelHelpers.export(exports, "interpolateRgbBasis", ()=>_rgbJs.rgbBasis
);
parcelHelpers.export(exports, "interpolateRgbBasisClosed", ()=>_rgbJs.rgbBasisClosed
);
parcelHelpers.export(exports, "interpolateHsl", ()=>_hslJsDefault.default
);
parcelHelpers.export(exports, "interpolateHslLong", ()=>_hslJs.hslLong
);
parcelHelpers.export(exports, "interpolateLab", ()=>_labJsDefault.default
);
parcelHelpers.export(exports, "interpolateHcl", ()=>_hclJsDefault.default
);
parcelHelpers.export(exports, "interpolateHclLong", ()=>_hclJs.hclLong
);
parcelHelpers.export(exports, "interpolateCubehelix", ()=>_cubehelixJsDefault.default
);
parcelHelpers.export(exports, "interpolateCubehelixLong", ()=>_cubehelixJs.cubehelixLong
);
parcelHelpers.export(exports, "piecewise", ()=>_piecewiseJsDefault.default
);
parcelHelpers.export(exports, "quantize", ()=>_quantizeJsDefault.default
);
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

},{"./value.js":"jfpB7","./array.js":"6pPWc","./basis.js":"1DJ3x","./basisClosed.js":"d28oA","./date.js":"9vQgC","./discrete.js":"kbqZc","./hue.js":"5ldU4","./number.js":"igEfY","./numberArray.js":"lBrzO","./object.js":"cDojd","./round.js":"c4KDA","./string.js":"hmd3K","./transform/index.js":"etDRQ","./zoom.js":"HiDI0","./rgb.js":"9bAoa","./hsl.js":"8lFt4","./lab.js":"h1Bcf","./hcl.js":"1qHkm","./cubehelix.js":"9aK10","./piecewise.js":"bex0T","./quantize.js":"fWEIz","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jfpB7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Color = require("d3-color");
var _rgbJs = require("./rgb.js");
var _rgbJsDefault = parcelHelpers.interopDefault(_rgbJs);
var _arrayJs = require("./array.js");
var _dateJs = require("./date.js");
var _dateJsDefault = parcelHelpers.interopDefault(_dateJs);
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var _objectJs = require("./object.js");
var _objectJsDefault = parcelHelpers.interopDefault(_objectJs);
var _stringJs = require("./string.js");
var _stringJsDefault = parcelHelpers.interopDefault(_stringJs);
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _numberArrayJs = require("./numberArray.js");
var _numberArrayJsDefault = parcelHelpers.interopDefault(_numberArrayJs);
exports.default = function(a, b) {
    var t = typeof b, c;
    return b == null || t === "boolean" ? _constantJsDefault.default(b) : (t === "number" ? _numberJsDefault.default : t === "string" ? (c = _d3Color.color(b)) ? (b = c, _rgbJsDefault.default) : _stringJsDefault.default : b instanceof _d3Color.color ? _rgbJsDefault.default : b instanceof Date ? _dateJsDefault.default : _numberArrayJs.isNumberArray(b) ? _numberArrayJsDefault.default : Array.isArray(b) ? _arrayJs.genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? _objectJsDefault.default : _numberJsDefault.default)(a, b);
};

},{"d3-color":"ap3Jg","./rgb.js":"9bAoa","./array.js":"6pPWc","./date.js":"9vQgC","./number.js":"igEfY","./object.js":"cDojd","./string.js":"hmd3K","./constant.js":"hWtul","./numberArray.js":"lBrzO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ap3Jg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "color", ()=>_colorJsDefault.default
);
parcelHelpers.export(exports, "rgb", ()=>_colorJs.rgb
);
parcelHelpers.export(exports, "hsl", ()=>_colorJs.hsl
);
parcelHelpers.export(exports, "lab", ()=>_labJsDefault.default
);
parcelHelpers.export(exports, "hcl", ()=>_labJs.hcl
);
parcelHelpers.export(exports, "lch", ()=>_labJs.lch
);
parcelHelpers.export(exports, "gray", ()=>_labJs.gray
);
parcelHelpers.export(exports, "cubehelix", ()=>_cubehelixJsDefault.default
);
var _colorJs = require("./color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _labJs = require("./lab.js");
var _labJsDefault = parcelHelpers.interopDefault(_labJs);
var _cubehelixJs = require("./cubehelix.js");
var _cubehelixJsDefault = parcelHelpers.interopDefault(_cubehelixJs);

},{"./color.js":"hAUDV","./lab.js":"50Bjg","./cubehelix.js":"68X6M","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hAUDV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Color", ()=>Color
);
parcelHelpers.export(exports, "darker", ()=>darker
);
parcelHelpers.export(exports, "brighter", ()=>brighter
);
parcelHelpers.export(exports, "rgbConvert", ()=>rgbConvert
);
parcelHelpers.export(exports, "rgb", ()=>rgb
);
parcelHelpers.export(exports, "Rgb", ()=>Rgb
);
parcelHelpers.export(exports, "hslConvert", ()=>hslConvert
);
parcelHelpers.export(exports, "hsl", ()=>hsl
);
var _defineJs = require("./define.js");
var _defineJsDefault = parcelHelpers.interopDefault(_defineJs);
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp("^rgb\\(" + [
    reI,
    reI,
    reI
] + "\\)$"), reRgbPercent = new RegExp("^rgb\\(" + [
    reP,
    reP,
    reP
] + "\\)$"), reRgbaInteger = new RegExp("^rgba\\(" + [
    reI,
    reI,
    reI,
    reN
] + "\\)$"), reRgbaPercent = new RegExp("^rgba\\(" + [
    reP,
    reP,
    reP,
    reN
] + "\\)$"), reHslPercent = new RegExp("^hsl\\(" + [
    reN,
    reP,
    reP
] + "\\)$"), reHslaPercent = new RegExp("^hsla\\(" + [
    reN,
    reP,
    reP,
    reN
] + "\\)$");
var named = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
};
_defineJsDefault.default(Color, color, {
    copy: function(channels) {
        return Object.assign(new this.constructor, this, channels);
    },
    displayable: function() {
        return this.rgb().displayable();
    },
    hex: color_formatHex,
    formatHex: color_formatHex,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
});
function color_formatHex() {
    return this.rgb().formatHex();
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
     : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) // #f00
     : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) // #ff000000
     : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) // #f000
     : null) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
     : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
     : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
     : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
     : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
     : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
     : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
     : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
exports.default = color;
function rgbn(n) {
    return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
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
_defineJsDefault.default(Rgb, rgb, _defineJs.extend(Color, {
    brighter: function(k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker: function(k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb: function() {
        return this;
    },
    displayable: function() {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: rgb_formatHex,
    formatHex: rgb_formatHex,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
}));
function rgb_formatHex() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}
function rgb_formatRgb() {
    var a = this.opacity;
    a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
}
function hex(value) {
    value = Math.max(0, Math.min(255, Math.round(value) || 0));
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
_defineJsDefault.default(Hsl, hsl, _defineJs.extend(Color, {
    brighter: function(k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function(k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function() {
        var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
        return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    displayable: function() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl: function() {
        var a = this.opacity;
        a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
        return (a === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a === 1 ? ")" : ", " + a + ")");
    }
}));
/* From FvD 13.37, CSS Color Module Level 3 */ function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

},{"./define.js":"5yZbK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5yZbK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "extend", ()=>extend
);
exports.default = function(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
};
function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for(var key in definition)prototype[key] = definition[key];
    return prototype;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"50Bjg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gray", ()=>gray
);
parcelHelpers.export(exports, "Lab", ()=>Lab
);
parcelHelpers.export(exports, "lch", ()=>lch
);
parcelHelpers.export(exports, "hcl", ()=>hcl
);
parcelHelpers.export(exports, "Hcl", ()=>Hcl
);
var _defineJs = require("./define.js");
var _defineJsDefault = parcelHelpers.interopDefault(_defineJs);
var _colorJs = require("./color.js");
var _mathJs = require("./math.js");
// https://observablehq.com/@mbostock/lab-and-rgb
const K = 18, Xn = 0.96422, Yn = 1, Zn = 0.82521, t0 = 4 / 29, t1 = 6 / 29, t2 = 3 * t1 * t1, t3 = t1 * t1 * t1;
function labConvert(o) {
    if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
    if (o instanceof Hcl) return hcl2lab(o);
    if (!(o instanceof _colorJs.Rgb)) o = _colorJs.rgbConvert(o);
    var r = rgb2lrgb(o.r), g = rgb2lrgb(o.g), b = rgb2lrgb(o.b), y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
    if (r === g && g === b) x = z = y;
    else {
        x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
        z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
    }
    return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}
function gray(l, opacity) {
    return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}
function lab(l, a, b, opacity) {
    return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}
exports.default = lab;
function Lab(l, a, b, opacity) {
    this.l = +l;
    this.a = +a;
    this.b = +b;
    this.opacity = +opacity;
}
_defineJsDefault.default(Lab, lab, _defineJs.extend(_colorJs.Color, {
    brighter: function(k) {
        return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
    },
    darker: function(k) {
        return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
    },
    rgb: function() {
        var y = (this.l + 16) / 116, x = isNaN(this.a) ? y : y + this.a / 500, z = isNaN(this.b) ? y : y - this.b / 200;
        x = Xn * lab2xyz(x);
        y = Yn * lab2xyz(y);
        z = Zn * lab2xyz(z);
        return new _colorJs.Rgb(lrgb2rgb(3.1338561 * x - 1.6168667 * y - 0.4906146 * z), lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.033454 * z), lrgb2rgb(0.0719453 * x - 0.2289914 * y + 1.4052427 * z), this.opacity);
    }
}));
function xyz2lab(t) {
    return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}
function lab2xyz(t) {
    return t > t1 ? t * t * t : t2 * (t - t0);
}
function lrgb2rgb(x) {
    return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}
function rgb2lrgb(x) {
    return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}
function hclConvert(o) {
    if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
    if (!(o instanceof Lab)) o = labConvert(o);
    if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
    var h = Math.atan2(o.b, o.a) * _mathJs.degrees;
    return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}
function lch(l, c, h, opacity) {
    return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}
function hcl(h, c, l, opacity) {
    return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}
function Hcl(h, c, l, opacity) {
    this.h = +h;
    this.c = +c;
    this.l = +l;
    this.opacity = +opacity;
}
function hcl2lab(o) {
    if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
    var h = o.h * _mathJs.radians;
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
}
_defineJsDefault.default(Hcl, hcl, _defineJs.extend(_colorJs.Color, {
    brighter: function(k) {
        return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
    },
    darker: function(k) {
        return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
    },
    rgb: function() {
        return hcl2lab(this).rgb();
    }
}));

},{"./define.js":"5yZbK","./color.js":"hAUDV","./math.js":"djUwo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"djUwo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "radians", ()=>radians
);
parcelHelpers.export(exports, "degrees", ()=>degrees
);
const radians = Math.PI / 180;
const degrees = 180 / Math.PI;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"68X6M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Cubehelix", ()=>Cubehelix
);
var _defineJs = require("./define.js");
var _defineJsDefault = parcelHelpers.interopDefault(_defineJs);
var _colorJs = require("./color.js");
var _mathJs = require("./math.js");
var A = -0.14861, B = 1.78277, C = -0.29227, D = -0.90649, E = 1.97294, ED = E * D, EB = E * B, BC_DA = B * C - D * A;
function cubehelixConvert(o) {
    if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof _colorJs.Rgb)) o = _colorJs.rgbConvert(o);
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB), bl = b - l, k = (E * (g - l) - C * bl) / D, s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), h = s ? Math.atan2(k, bl) * _mathJs.degrees - 120 : NaN;
    return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}
function cubehelix(h, s, l, opacity) {
    return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}
exports.default = cubehelix;
function Cubehelix(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
_defineJsDefault.default(Cubehelix, cubehelix, _defineJs.extend(_colorJs.Color, {
    brighter: function(k) {
        k = k == null ? _colorJs.brighter : Math.pow(_colorJs.brighter, k);
        return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function(k) {
        k = k == null ? _colorJs.darker : Math.pow(_colorJs.darker, k);
        return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function() {
        var h = isNaN(this.h) ? 0 : (this.h + 120) * _mathJs.radians, l = +this.l, a = isNaN(this.s) ? 0 : this.s * l * (1 - l), cosh = Math.cos(h), sinh = Math.sin(h);
        return new _colorJs.Rgb(255 * (l + a * (A * cosh + B * sinh)), 255 * (l + a * (C * cosh + D * sinh)), 255 * (l + a * (E * cosh)), this.opacity);
    }
}));

},{"./define.js":"5yZbK","./color.js":"hAUDV","./math.js":"djUwo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9bAoa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rgbBasis", ()=>rgbBasis
);
parcelHelpers.export(exports, "rgbBasisClosed", ()=>rgbBasisClosed
);
var _d3Color = require("d3-color");
var _basisJs = require("./basis.js");
var _basisJsDefault = parcelHelpers.interopDefault(_basisJs);
var _basisClosedJs = require("./basisClosed.js");
var _basisClosedJsDefault = parcelHelpers.interopDefault(_basisClosedJs);
var _colorJs = require("./color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
exports.default = (function rgbGamma(y) {
    var color = _colorJs.gamma(y);
    function rgb(start, end) {
        var r = color((start = _d3Color.rgb(start)).r, (end = _d3Color.rgb(end)).r), g = color(start.g, end.g), b = color(start.b, end.b), opacity = _colorJsDefault.default(start.opacity, end.opacity);
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
})(1);
function rgbSpline(spline) {
    return function(colors) {
        var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color;
        for(i = 0; i < n; ++i){
            color = _d3Color.rgb(colors[i]);
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
var rgbBasis = rgbSpline(_basisJsDefault.default);
var rgbBasisClosed = rgbSpline(_basisClosedJsDefault.default);

},{"d3-color":"ap3Jg","./basis.js":"1DJ3x","./basisClosed.js":"d28oA","./color.js":"8Wcc3","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1DJ3x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "basis", ()=>basis
);
function basis(t1, v0, v1, v2, v3) {
    var t2 = t1 * t1, t3 = t2 * t1;
    return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
exports.default = function(values) {
    var n = values.length - 1;
    return function(t) {
        var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
        return basis((t - i / n) * n, v0, v1, v2, v3);
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"d28oA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _basisJs = require("./basis.js");
exports.default = function(values) {
    var n = values.length;
    return function(t) {
        var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
        return _basisJs.basis((t - i / n) * n, v0, v1, v2, v3);
    };
};

},{"./basis.js":"1DJ3x","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8Wcc3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hue", ()=>hue
);
parcelHelpers.export(exports, "gamma", ()=>gamma
);
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
    return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : _constantJsDefault.default(isNaN(a) ? b : a);
}
function gamma(y) {
    return (y = +y) === 1 ? nogamma : function(a, b) {
        return b - a ? exponential(a, b, y) : _constantJsDefault.default(isNaN(a) ? b : a);
    };
}
function nogamma(a, b) {
    var d = b - a;
    return d ? linear(a, d) : _constantJsDefault.default(isNaN(a) ? b : a);
}
exports.default = nogamma;

},{"./constant.js":"hWtul","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hWtul":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (x)=>()=>x
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6pPWc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "genericArray", ()=>genericArray
);
var _valueJs = require("./value.js");
var _valueJsDefault = parcelHelpers.interopDefault(_valueJs);
var _numberArrayJs = require("./numberArray.js");
var _numberArrayJsDefault = parcelHelpers.interopDefault(_numberArrayJs);
exports.default = function(a, b) {
    return (_numberArrayJs.isNumberArray(b) ? _numberArrayJsDefault.default : genericArray)(a, b);
};
function genericArray(a, b) {
    var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;
    for(i = 0; i < na; ++i)x[i] = _valueJsDefault.default(a[i], b[i]);
    for(; i < nb; ++i)c[i] = b[i];
    return function(t) {
        for(i = 0; i < na; ++i)c[i] = x[i](t);
        return c;
    };
}

},{"./value.js":"jfpB7","./numberArray.js":"lBrzO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lBrzO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNumberArray", ()=>isNumberArray
);
exports.default = function(a, b) {
    if (!b) b = [];
    var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
    return function(t) {
        for(i = 0; i < n; ++i)c[i] = a[i] * (1 - t) + b[i] * t;
        return c;
    };
};
function isNumberArray(x) {
    return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9vQgC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(a, b) {
    var d = new Date;
    return a = +a, b = +b, function(t) {
        return d.setTime(a * (1 - t) + b * t), d;
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"igEfY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(a, b) {
    return a = +a, b = +b, function(t) {
        return a * (1 - t) + b * t;
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cDojd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _valueJs = require("./value.js");
var _valueJsDefault = parcelHelpers.interopDefault(_valueJs);
exports.default = function(a, b) {
    var i = {
    }, c = {
    }, k;
    if (a === null || typeof a !== "object") a = {
    };
    if (b === null || typeof b !== "object") b = {
    };
    for(k in b)if (k in a) i[k] = _valueJsDefault.default(a[k], b[k]);
    else c[k] = b[k];
    return function(t) {
        for(k in i)c[k] = i[k](t);
        return c;
    };
};

},{"./value.js":"jfpB7","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hmd3K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function(a, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i1 = -1, s = [], q = []; // number interpolators
    // Coerce inputs to strings.
    a = a + "", b = b + "";
    // Interpolate pairs of numbers in a & b.
    while((am = reA.exec(a)) && (bm = reB.exec(b))){
        if ((bs = bm.index) > bi) {
            bs = b.slice(bi, bs);
            if (s[i1]) s[i1] += bs; // coalesce with previous string
            else s[++i1] = bs;
        }
        if ((am = am[0]) === (bm = bm[0])) {
            if (s[i1]) s[i1] += bm; // coalesce with previous string
            else s[++i1] = bm;
        } else {
            s[++i1] = null;
            q.push({
                i: i1,
                x: _numberJsDefault.default(am, bm)
            });
        }
        bi = reB.lastIndex;
    }
    // Add remains of b.
    if (bi < b.length) {
        bs = b.slice(bi);
        if (s[i1]) s[i1] += bs; // coalesce with previous string
        else s[++i1] = bs;
    }
    // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
        for(var i = 0, o; i < b; ++i)s[(o = q[i]).i] = o.x(t);
        return s.join("");
    });
};

},{"./number.js":"igEfY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kbqZc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(range) {
    var n = range.length;
    return function(t) {
        return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5ldU4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorJs = require("./color.js");
exports.default = function(a, b) {
    var i = _colorJs.hue(+a, +b);
    return function(t) {
        var x = i(t);
        return x - 360 * Math.floor(x / 360);
    };
};

},{"./color.js":"8Wcc3","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"c4KDA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(a, b) {
    return a = +a, b = +b, function(t) {
        return Math.round(a * (1 - t) + b * t);
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"etDRQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "interpolateTransformCss", ()=>interpolateTransformCss
);
parcelHelpers.export(exports, "interpolateTransformSvg", ()=>interpolateTransformSvg
);
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
                x: _numberJsDefault.default(xa, xb)
            }, {
                i: i - 2,
                x: _numberJsDefault.default(ya, yb)
            });
        } else if (xb || yb) s.push("translate(" + xb + pxComma + yb + pxParen);
    }
    function rotate(a, b, s, q) {
        if (a !== b) {
            if (a - b > 180) b += 360;
            else if (b - a > 180) a += 360; // shortest path
            q.push({
                i: s.push(pop(s) + "rotate(", null, degParen) - 2,
                x: _numberJsDefault.default(a, b)
            });
        } else if (b) s.push(pop(s) + "rotate(" + b + degParen);
    }
    function skewX(a, b, s, q) {
        if (a !== b) q.push({
            i: s.push(pop(s) + "skewX(", null, degParen) - 2,
            x: _numberJsDefault.default(a, b)
        });
        else if (b) s.push(pop(s) + "skewX(" + b + degParen);
    }
    function scale(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push(pop(s) + "scale(", null, ",", null, ")");
            q.push({
                i: i - 4,
                x: _numberJsDefault.default(xa, xb)
            }, {
                i: i - 2,
                x: _numberJsDefault.default(ya, yb)
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
var interpolateTransformCss = interpolateTransform(_parseJs.parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(_parseJs.parseSvg, ", ", ")", ")");

},{"../number.js":"igEfY","./parse.js":"TQc0q","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"TQc0q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint-disable no-undef */ parcelHelpers.export(exports, "parseCss", ()=>parseCss
);
parcelHelpers.export(exports, "parseSvg", ()=>parseSvg
);
var _decomposeJs = require("./decompose.js");
var _decomposeJsDefault = parcelHelpers.interopDefault(_decomposeJs);
var svgNode;
function parseCss(value) {
    const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m.isIdentity ? _decomposeJs.identity : _decomposeJsDefault.default(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
    if (value == null) return _decomposeJs.identity;
    if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate())) return _decomposeJs.identity;
    value = value.matrix;
    return _decomposeJsDefault.default(value.a, value.b, value.c, value.d, value.e, value.f);
}

},{"./decompose.js":"CTixW","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"CTixW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "identity", ()=>identity
);
var degrees = 180 / Math.PI;
var identity = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
};
exports.default = function(a, b, c, d, e, f) {
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
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"HiDI0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var epsilon2 = 0.000000000001;
function cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
}
function sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
}
function tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}
exports.default = (function zoomRho(rho, rho2, rho4) {
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
        var _1 = Math.max(0.001, +_), _2 = _1 * _1, _4 = _2 * _2;
        return zoomRho(_1, _2, _4);
    };
    return zoom;
})(Math.SQRT2, 2, 4);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8lFt4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hslLong", ()=>hslLong
);
var _d3Color = require("d3-color");
var _colorJs = require("./color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
function hsl(hue) {
    return function(start, end) {
        var h = hue((start = _d3Color.hsl(start)).h, (end = _d3Color.hsl(end)).h), s = _colorJsDefault.default(start.s, end.s), l = _colorJsDefault.default(start.l, end.l), opacity = _colorJsDefault.default(start.opacity, end.opacity);
        return function(t) {
            start.h = h(t);
            start.s = s(t);
            start.l = l(t);
            start.opacity = opacity(t);
            return start + "";
        };
    };
}
exports.default = hsl(_colorJs.hue);
var hslLong = hsl(_colorJsDefault.default);

},{"d3-color":"ap3Jg","./color.js":"8Wcc3","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"h1Bcf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Color = require("d3-color");
var _colorJs = require("./color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
function lab(start, end) {
    var l = _colorJsDefault.default((start = _d3Color.lab(start)).l, (end = _d3Color.lab(end)).l), a = _colorJsDefault.default(start.a, end.a), b = _colorJsDefault.default(start.b, end.b), opacity = _colorJsDefault.default(start.opacity, end.opacity);
    return function(t) {
        start.l = l(t);
        start.a = a(t);
        start.b = b(t);
        start.opacity = opacity(t);
        return start + "";
    };
}
exports.default = lab;

},{"d3-color":"ap3Jg","./color.js":"8Wcc3","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1qHkm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hclLong", ()=>hclLong
);
var _d3Color = require("d3-color");
var _colorJs = require("./color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
function hcl(hue) {
    return function(start, end) {
        var h = hue((start = _d3Color.hcl(start)).h, (end = _d3Color.hcl(end)).h), c = _colorJsDefault.default(start.c, end.c), l = _colorJsDefault.default(start.l, end.l), opacity = _colorJsDefault.default(start.opacity, end.opacity);
        return function(t) {
            start.h = h(t);
            start.c = c(t);
            start.l = l(t);
            start.opacity = opacity(t);
            return start + "";
        };
    };
}
exports.default = hcl(_colorJs.hue);
var hclLong = hcl(_colorJsDefault.default);

},{"d3-color":"ap3Jg","./color.js":"8Wcc3","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9aK10":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cubehelixLong", ()=>cubehelixLong
);
var _d3Color = require("d3-color");
var _colorJs = require("./color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
function cubehelix1(hue) {
    return (function cubehelixGamma(y) {
        y = +y;
        function cubehelix(start, end) {
            var h = hue((start = _d3Color.cubehelix(start)).h, (end = _d3Color.cubehelix(end)).h), s = _colorJsDefault.default(start.s, end.s), l = _colorJsDefault.default(start.l, end.l), opacity = _colorJsDefault.default(start.opacity, end.opacity);
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
    })(1);
}
exports.default = cubehelix1(_colorJs.hue);
var cubehelixLong = cubehelix1(_colorJsDefault.default);

},{"d3-color":"ap3Jg","./color.js":"8Wcc3","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bex0T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _valueJs = require("./value.js");
var _valueJsDefault = parcelHelpers.interopDefault(_valueJs);
function piecewise(interpolate, values) {
    if (values === undefined) values = interpolate, interpolate = _valueJsDefault.default;
    var i1 = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
    while(i1 < n)I[i1] = interpolate(v, v = values[++i1]);
    return function(t) {
        var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
        return I[i](t - i);
    };
}
exports.default = piecewise;

},{"./value.js":"jfpB7","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fWEIz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(interpolator, n) {
    var samples = new Array(n);
    for(var i = 0; i < n; ++i)samples[i] = interpolator(i / (n - 1));
    return samples;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8L0br":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tweenValue", ()=>tweenValue
);
var _scheduleJs = require("./schedule.js");
function tweenRemove(id, name) {
    var tween0, tween1;
    return function() {
        var schedule = _scheduleJs.set(this, id), tween = schedule.tween;
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
        var schedule = _scheduleJs.set(this, id), tween = schedule.tween;
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
exports.default = function(name, value) {
    var id = this._id;
    name += "";
    if (arguments.length < 2) {
        var tween = _scheduleJs.get(this.node(), id).tween;
        for(var i = 0, n = tween.length, t; i < n; ++i){
            if ((t = tween[i]).name === name) return t.value;
        }
        return null;
    }
    return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
};
function tweenValue(transition, name, value) {
    var id = transition._id;
    transition.each(function() {
        var schedule = _scheduleJs.set(this, id);
        (schedule.value || (schedule.value = {
        }))[name] = value.apply(this, arguments);
    });
    return function(node) {
        return _scheduleJs.get(node, id).value[name];
    };
}

},{"./schedule.js":"dTpjR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1aR0B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Color = require("d3-color");
var _d3Interpolate = require("d3-interpolate");
exports.default = function(a, b) {
    var c;
    return (typeof b === "number" ? _d3Interpolate.interpolateNumber : b instanceof _d3Color.color ? _d3Interpolate.interpolateRgb : (c = _d3Color.color(b)) ? (b = c, _d3Interpolate.interpolateRgb) : _d3Interpolate.interpolateString)(a, b);
};

},{"d3-color":"ap3Jg","d3-interpolate":"e7XwA","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4rwV3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    var fullname = _d3Selection.namespace(name);
    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
};

},{"d3-selection":"hgWtk","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"zwknt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scheduleJs = require("./schedule.js");
function delayFunction(id, value) {
    return function() {
        _scheduleJs.init(this, id).delay = +value.apply(this, arguments);
    };
}
function delayConstant(id, value) {
    return value = +value, function() {
        _scheduleJs.init(this, id).delay = value;
    };
}
exports.default = function(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id, value)) : _scheduleJs.get(this.node(), id).delay;
};

},{"./schedule.js":"dTpjR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fXFoC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scheduleJs = require("./schedule.js");
function durationFunction(id, value) {
    return function() {
        _scheduleJs.set(this, id).duration = +value.apply(this, arguments);
    };
}
function durationConstant(id, value) {
    return value = +value, function() {
        _scheduleJs.set(this, id).duration = value;
    };
}
exports.default = function(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id, value)) : _scheduleJs.get(this.node(), id).duration;
};

},{"./schedule.js":"dTpjR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"d7SOb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scheduleJs = require("./schedule.js");
function easeConstant(id, value) {
    if (typeof value !== "function") throw new Error;
    return function() {
        _scheduleJs.set(this, id).ease = value;
    };
}
exports.default = function(value) {
    var id = this._id;
    return arguments.length ? this.each(easeConstant(id, value)) : _scheduleJs.get(this.node(), id).ease;
};

},{"./schedule.js":"dTpjR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6ms9d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scheduleJs = require("./schedule.js");
function easeVarying(id, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (typeof v !== "function") throw new Error;
        _scheduleJs.set(this, id).ease = v;
    };
}
exports.default = function(value) {
    if (typeof value !== "function") throw new Error;
    return this.each(easeVarying(this._id, value));
};

},{"./schedule.js":"dTpjR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"koiOg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Selection = require("d3-selection");
var _indexJs = require("./index.js");
exports.default = function(match) {
    if (typeof match !== "function") match = _d3Selection.matcher(match);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i)if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
    }
    return new _indexJs.Transition(subgroups, this._parents, this._name, this._id);
};

},{"d3-selection":"hgWtk","./index.js":"18i1e","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"66rfJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
exports.default = function(transition) {
    if (transition._id !== this._id) throw new Error;
    for(var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
        for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group0[i] || group1[i]) merge[i] = node;
    }
    for(; j < m0; ++j)merges[j] = groups0[j];
    return new _indexJs.Transition(merges, this._parents, this._name, this._id);
};

},{"./index.js":"18i1e","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2whzO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scheduleJs = require("./schedule.js");
function start(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t) {
        var i = t.indexOf(".");
        if (i >= 0) t = t.slice(0, i);
        return !t || t === "start";
    });
}
function onFunction(id, name, listener) {
    var on0, on1, sit = start(name) ? _scheduleJs.init : _scheduleJs.set;
    return function() {
        var schedule = sit(this, id), on = schedule.on;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
        schedule.on = on1;
    };
}
exports.default = function(name, listener) {
    var id = this._id;
    return arguments.length < 2 ? _scheduleJs.get(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
};

},{"./schedule.js":"dTpjR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jdITm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function removeFunction(id) {
    return function() {
        var parent = this.parentNode;
        for(var i in this.__transition)if (+i !== id) return;
        if (parent) parent.removeChild(this);
    };
}
exports.default = function() {
    return this.on("end.remove", removeFunction(this._id));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fZfF3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Selection = require("d3-selection");
var _indexJs = require("./index.js");
var _scheduleJs = require("./schedule.js");
var _scheduleJsDefault = parcelHelpers.interopDefault(_scheduleJs);
exports.default = function(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function") select = _d3Selection.selector(select);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i)if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
            if ("__data__" in node) subnode.__data__ = node.__data__;
            subgroup[i] = subnode;
            _scheduleJsDefault.default(subgroup[i], name, id, i, subgroup, _scheduleJs.get(node, id));
        }
    }
    return new _indexJs.Transition(subgroups, this._parents, name, id);
};

},{"d3-selection":"hgWtk","./index.js":"18i1e","./schedule.js":"dTpjR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lJAHb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Selection = require("d3-selection");
var _indexJs = require("./index.js");
var _scheduleJs = require("./schedule.js");
var _scheduleJsDefault = parcelHelpers.interopDefault(_scheduleJs);
exports.default = function(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function") select = _d3Selection.selectorAll(select);
    for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            for(var children = select.call(node, node.__data__, i, group), child, inherit = _scheduleJs.get(node, id), k = 0, l = children.length; k < l; ++k)if (child = children[k]) _scheduleJsDefault.default(child, name, id, k, children, inherit);
            subgroups.push(children);
            parents.push(node);
        }
    }
    return new _indexJs.Transition(subgroups, parents, name, id);
};

},{"d3-selection":"hgWtk","./index.js":"18i1e","./schedule.js":"dTpjR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"a9rwa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Selection = require("d3-selection");
var Selection = _d3Selection.selection.prototype.constructor;
exports.default = function() {
    return new Selection(this._groups, this._parents);
};

},{"d3-selection":"hgWtk","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8dHzR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Interpolate = require("d3-interpolate");
var _d3Selection = require("d3-selection");
var _scheduleJs = require("./schedule.js");
var _tweenJs = require("./tween.js");
var _interpolateJs = require("./interpolate.js");
var _interpolateJsDefault = parcelHelpers.interopDefault(_interpolateJs);
function styleNull(name, interpolate) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = _d3Selection.style(this, name), string1 = (this.style.removeProperty(name), _d3Selection.style(this, name));
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
        var string0 = _d3Selection.style(this, name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function styleFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = _d3Selection.style(this, name), value1 = value(this), string1 = value1 + "";
        if (value1 == null) string1 = value1 = (this.style.removeProperty(name), _d3Selection.style(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function styleMaybeRemove(id, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
    return function() {
        var schedule = _scheduleJs.set(this, id), on = schedule.on, listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
        schedule.on = on1;
    };
}
exports.default = function(name, value, priority) {
    var i = (name += "") === "transform" ? _d3Interpolate.interpolateTransformCss : _interpolateJsDefault.default;
    return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, _tweenJs.tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
};

},{"d3-interpolate":"e7XwA","d3-selection":"hgWtk","./schedule.js":"dTpjR","./tween.js":"8L0br","./interpolate.js":"1aR0B","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8Kz8d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hhhZ2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function(value) {
    return this.tween("text", typeof value === "function" ? textFunction(_tweenJs.tweenValue(this, "text", value)) : textConstant(value == null ? "" : value + ""));
};

},{"./tween.js":"8L0br","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ezXKs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function(value) {
    var key = "text";
    if (arguments.length < 1) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, textTween(value));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eIPZ1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
var _scheduleJs = require("./schedule.js");
var _scheduleJsDefault = parcelHelpers.interopDefault(_scheduleJs);
exports.default = function() {
    var name = this._name, id0 = this._id, id1 = _indexJs.newId();
    for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            var inherit = _scheduleJs.get(node, id0);
            _scheduleJsDefault.default(node, name, id1, i, group, {
                time: inherit.time + inherit.delay + inherit.duration,
                delay: 0,
                duration: inherit.duration,
                ease: inherit.ease
            });
        }
    }
    return new _indexJs.Transition(groups, this._parents, name, id1);
};

},{"./index.js":"18i1e","./schedule.js":"dTpjR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bGIdi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scheduleJs = require("./schedule.js");
exports.default = function() {
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
            var schedule = _scheduleJs.set(this, id), on = schedule.on;
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
};

},{"./schedule.js":"dTpjR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"elZFc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "easeLinear", ()=>_linearJs.linear
);
parcelHelpers.export(exports, "easeQuad", ()=>_quadJs.quadInOut
);
parcelHelpers.export(exports, "easeQuadIn", ()=>_quadJs.quadIn
);
parcelHelpers.export(exports, "easeQuadOut", ()=>_quadJs.quadOut
);
parcelHelpers.export(exports, "easeQuadInOut", ()=>_quadJs.quadInOut
);
parcelHelpers.export(exports, "easeCubic", ()=>_cubicJs.cubicInOut
);
parcelHelpers.export(exports, "easeCubicIn", ()=>_cubicJs.cubicIn
);
parcelHelpers.export(exports, "easeCubicOut", ()=>_cubicJs.cubicOut
);
parcelHelpers.export(exports, "easeCubicInOut", ()=>_cubicJs.cubicInOut
);
parcelHelpers.export(exports, "easePoly", ()=>_polyJs.polyInOut
);
parcelHelpers.export(exports, "easePolyIn", ()=>_polyJs.polyIn
);
parcelHelpers.export(exports, "easePolyOut", ()=>_polyJs.polyOut
);
parcelHelpers.export(exports, "easePolyInOut", ()=>_polyJs.polyInOut
);
parcelHelpers.export(exports, "easeSin", ()=>_sinJs.sinInOut
);
parcelHelpers.export(exports, "easeSinIn", ()=>_sinJs.sinIn
);
parcelHelpers.export(exports, "easeSinOut", ()=>_sinJs.sinOut
);
parcelHelpers.export(exports, "easeSinInOut", ()=>_sinJs.sinInOut
);
parcelHelpers.export(exports, "easeExp", ()=>_expJs.expInOut
);
parcelHelpers.export(exports, "easeExpIn", ()=>_expJs.expIn
);
parcelHelpers.export(exports, "easeExpOut", ()=>_expJs.expOut
);
parcelHelpers.export(exports, "easeExpInOut", ()=>_expJs.expInOut
);
parcelHelpers.export(exports, "easeCircle", ()=>_circleJs.circleInOut
);
parcelHelpers.export(exports, "easeCircleIn", ()=>_circleJs.circleIn
);
parcelHelpers.export(exports, "easeCircleOut", ()=>_circleJs.circleOut
);
parcelHelpers.export(exports, "easeCircleInOut", ()=>_circleJs.circleInOut
);
parcelHelpers.export(exports, "easeBounce", ()=>_bounceJs.bounceOut
);
parcelHelpers.export(exports, "easeBounceIn", ()=>_bounceJs.bounceIn
);
parcelHelpers.export(exports, "easeBounceOut", ()=>_bounceJs.bounceOut
);
parcelHelpers.export(exports, "easeBounceInOut", ()=>_bounceJs.bounceInOut
);
parcelHelpers.export(exports, "easeBack", ()=>_backJs.backInOut
);
parcelHelpers.export(exports, "easeBackIn", ()=>_backJs.backIn
);
parcelHelpers.export(exports, "easeBackOut", ()=>_backJs.backOut
);
parcelHelpers.export(exports, "easeBackInOut", ()=>_backJs.backInOut
);
parcelHelpers.export(exports, "easeElastic", ()=>_elasticJs.elasticOut
);
parcelHelpers.export(exports, "easeElasticIn", ()=>_elasticJs.elasticIn
);
parcelHelpers.export(exports, "easeElasticOut", ()=>_elasticJs.elasticOut
);
parcelHelpers.export(exports, "easeElasticInOut", ()=>_elasticJs.elasticInOut
);
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

},{"./linear.js":"gHm7e","./quad.js":"hYhoX","./cubic.js":"aZIHk","./poly.js":"hNV3X","./sin.js":"zeJJc","./exp.js":"2ovMf","./circle.js":"acQDc","./bounce.js":"21QKc","./back.js":"enxiL","./elastic.js":"eIiW6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gHm7e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "linear", ()=>linear
);
const linear = (t)=>+t
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hYhoX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "quadIn", ()=>quadIn
);
parcelHelpers.export(exports, "quadOut", ()=>quadOut
);
parcelHelpers.export(exports, "quadInOut", ()=>quadInOut
);
function quadIn(t) {
    return t * t;
}
function quadOut(t) {
    return t * (2 - t);
}
function quadInOut(t) {
    return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aZIHk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cubicIn", ()=>cubicIn
);
parcelHelpers.export(exports, "cubicOut", ()=>cubicOut
);
parcelHelpers.export(exports, "cubicInOut", ()=>cubicInOut
);
function cubicIn(t) {
    return t * t * t;
}
function cubicOut(t) {
    return --t * t * t + 1;
}
function cubicInOut(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hNV3X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "polyIn", ()=>polyIn1
);
parcelHelpers.export(exports, "polyOut", ()=>polyOut1
);
parcelHelpers.export(exports, "polyInOut", ()=>polyInOut1
);
var exponent = 3;
var polyIn1 = function custom(e) {
    e = +e;
    function polyIn(t) {
        return Math.pow(t, e);
    }
    polyIn.exponent = custom;
    return polyIn;
}(exponent);
var polyOut1 = function custom(e) {
    e = +e;
    function polyOut(t) {
        return 1 - Math.pow(1 - t, e);
    }
    polyOut.exponent = custom;
    return polyOut;
}(exponent);
var polyInOut1 = function custom(e) {
    e = +e;
    function polyInOut(t) {
        return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
    }
    polyInOut.exponent = custom;
    return polyInOut;
}(exponent);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"zeJJc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sinIn", ()=>sinIn
);
parcelHelpers.export(exports, "sinOut", ()=>sinOut
);
parcelHelpers.export(exports, "sinInOut", ()=>sinInOut
);
var pi = Math.PI, halfPi = pi / 2;
function sinIn(t) {
    return +t === 1 ? 1 : 1 - Math.cos(t * halfPi);
}
function sinOut(t) {
    return Math.sin(t * halfPi);
}
function sinInOut(t) {
    return (1 - Math.cos(pi * t)) / 2;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2ovMf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "expIn", ()=>expIn
);
parcelHelpers.export(exports, "expOut", ()=>expOut
);
parcelHelpers.export(exports, "expInOut", ()=>expInOut
);
var _mathJs = require("./math.js");
function expIn(t) {
    return _mathJs.tpmt(1 - +t);
}
function expOut(t) {
    return 1 - _mathJs.tpmt(t);
}
function expInOut(t) {
    return ((t *= 2) <= 1 ? _mathJs.tpmt(1 - t) : 2 - _mathJs.tpmt(t - 1)) / 2;
}

},{"./math.js":"7Y1a5","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7Y1a5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// tpmt is two power minus ten times t scaled to [0,1]
parcelHelpers.export(exports, "tpmt", ()=>tpmt
);
function tpmt(x) {
    return (Math.pow(2, -10 * x) - 0.0009765625) * 1.0009775171065494;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"acQDc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "circleIn", ()=>circleIn
);
parcelHelpers.export(exports, "circleOut", ()=>circleOut
);
parcelHelpers.export(exports, "circleInOut", ()=>circleInOut
);
function circleIn(t) {
    return 1 - Math.sqrt(1 - t * t);
}
function circleOut(t) {
    return Math.sqrt(1 - --t * t);
}
function circleInOut(t) {
    return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"21QKc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bounceIn", ()=>bounceIn
);
parcelHelpers.export(exports, "bounceOut", ()=>bounceOut
);
parcelHelpers.export(exports, "bounceInOut", ()=>bounceInOut
);
var b1 = 4 / 11, b2 = 6 / 11, b3 = 8 / 11, b4 = 0.75, b5 = 9 / 11, b6 = 10 / 11, b7 = 0.9375, b8 = 21 / 22, b9 = 63 / 64, b0 = 1 / b1 / b1;
function bounceIn(t) {
    return 1 - bounceOut(1 - t);
}
function bounceOut(t) {
    return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}
function bounceInOut(t) {
    return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"enxiL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "backIn", ()=>backIn1
);
parcelHelpers.export(exports, "backOut", ()=>backOut1
);
parcelHelpers.export(exports, "backInOut", ()=>backInOut1
);
var overshoot = 1.70158;
var backIn1 = function custom(s) {
    s = +s;
    function backIn(t) {
        return (t = +t) * t * (s * (t - 1) + t);
    }
    backIn.overshoot = custom;
    return backIn;
}(overshoot);
var backOut1 = function custom(s) {
    s = +s;
    function backOut(t) {
        return --t * t * ((t + 1) * s + t) + 1;
    }
    backOut.overshoot = custom;
    return backOut;
}(overshoot);
var backInOut1 = function custom(s) {
    s = +s;
    function backInOut(t) {
        return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
    }
    backInOut.overshoot = custom;
    return backInOut;
}(overshoot);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eIiW6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "elasticIn", ()=>elasticIn1
);
parcelHelpers.export(exports, "elasticOut", ()=>elasticOut1
);
parcelHelpers.export(exports, "elasticInOut", ()=>elasticInOut1
);
var _mathJs = require("./math.js");
var tau = 2 * Math.PI, amplitude = 1, period = 0.3;
var elasticIn1 = function custom(a1, p1) {
    var s = Math.asin(1 / (a1 = Math.max(1, a1))) * (p1 /= tau);
    function elasticIn(t) {
        return a1 * _mathJs.tpmt(- --t) * Math.sin((s - t) / p1);
    }
    elasticIn.amplitude = function(a) {
        return custom(a, p1 * tau);
    };
    elasticIn.period = function(p) {
        return custom(a1, p);
    };
    return elasticIn;
}(amplitude, period);
var elasticOut1 = function custom(a2, p2) {
    var s = Math.asin(1 / (a2 = Math.max(1, a2))) * (p2 /= tau);
    function elasticOut(t) {
        return 1 - a2 * _mathJs.tpmt(t = +t) * Math.sin((t + s) / p2);
    }
    elasticOut.amplitude = function(a) {
        return custom(a, p2 * tau);
    };
    elasticOut.period = function(p) {
        return custom(a2, p);
    };
    return elasticOut;
}(amplitude, period);
var elasticInOut1 = function custom(a3, p3) {
    var s = Math.asin(1 / (a3 = Math.max(1, a3))) * (p3 /= tau);
    function elasticInOut(t) {
        return ((t = t * 2 - 1) < 0 ? a3 * _mathJs.tpmt(-t) * Math.sin((s - t) / p3) : 2 - a3 * _mathJs.tpmt(t) * Math.sin((s + t) / p3)) / 2;
    }
    elasticInOut.amplitude = function(a) {
        return custom(a, p3 * tau);
    };
    elasticInOut.period = function(p) {
        return custom(a3, p);
    };
    return elasticInOut;
}(amplitude, period);

},{"./math.js":"7Y1a5","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"e5Mev":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./transition/index.js");
var _scheduleJs = require("./transition/schedule.js");
var root = [
    null
];
exports.default = function(node, name) {
    var schedules = node.__transition, schedule, i;
    if (schedules) {
        name = name == null ? null : name + "";
        for(i in schedules){
            if ((schedule = schedules[i]).state > _scheduleJs.SCHEDULED && schedule.name === name) return new _indexJs.Transition([
                [
                    node
                ]
            ], root, name, +i);
        }
    }
    return null;
};

},{"./transition/index.js":"18i1e","./transition/schedule.js":"dTpjR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hrwOn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scaleBand", ()=>_bandJsDefault.default
);
parcelHelpers.export(exports, "scalePoint", ()=>_bandJs.point
);
parcelHelpers.export(exports, "scaleIdentity", ()=>_identityJsDefault.default
);
parcelHelpers.export(exports, "scaleLinear", ()=>_linearJsDefault.default
);
parcelHelpers.export(exports, "scaleLog", ()=>_logJsDefault.default
);
parcelHelpers.export(exports, "scaleSymlog", ()=>_symlogJsDefault.default
);
parcelHelpers.export(exports, "scaleOrdinal", ()=>_ordinalJsDefault.default
);
parcelHelpers.export(exports, "scaleImplicit", ()=>_ordinalJs.implicit
);
parcelHelpers.export(exports, "scalePow", ()=>_powJsDefault.default
);
parcelHelpers.export(exports, "scaleSqrt", ()=>_powJs.sqrt
);
parcelHelpers.export(exports, "scaleRadial", ()=>_radialJsDefault.default
);
parcelHelpers.export(exports, "scaleQuantile", ()=>_quantileJsDefault.default
);
parcelHelpers.export(exports, "scaleQuantize", ()=>_quantizeJsDefault.default
);
parcelHelpers.export(exports, "scaleThreshold", ()=>_thresholdJsDefault.default
);
parcelHelpers.export(exports, "scaleTime", ()=>_timeJsDefault.default
);
parcelHelpers.export(exports, "scaleUtc", ()=>_utcTimeJsDefault.default
);
parcelHelpers.export(exports, "scaleSequential", ()=>_sequentialJsDefault.default
);
parcelHelpers.export(exports, "scaleSequentialLog", ()=>_sequentialJs.sequentialLog
);
parcelHelpers.export(exports, "scaleSequentialPow", ()=>_sequentialJs.sequentialPow
);
parcelHelpers.export(exports, "scaleSequentialSqrt", ()=>_sequentialJs.sequentialSqrt
);
parcelHelpers.export(exports, "scaleSequentialSymlog", ()=>_sequentialJs.sequentialSymlog
);
parcelHelpers.export(exports, "scaleSequentialQuantile", ()=>_sequentialQuantileJsDefault.default
);
parcelHelpers.export(exports, "scaleDiverging", ()=>_divergingJsDefault.default
);
parcelHelpers.export(exports, "scaleDivergingLog", ()=>_divergingJs.divergingLog
);
parcelHelpers.export(exports, "scaleDivergingPow", ()=>_divergingJs.divergingPow
);
parcelHelpers.export(exports, "scaleDivergingSqrt", ()=>_divergingJs.divergingSqrt
);
parcelHelpers.export(exports, "scaleDivergingSymlog", ()=>_divergingJs.divergingSymlog
);
parcelHelpers.export(exports, "tickFormat", ()=>_tickFormatJsDefault.default
);
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

},{"./band.js":"jrhJj","./identity.js":"7A0m5","./linear.js":"iCJmQ","./log.js":"8gycm","./symlog.js":"etHgK","./ordinal.js":"16SNv","./pow.js":"kopvN","./radial.js":"hOBjs","./quantile.js":"iT8CK","./quantize.js":"ec2AM","./threshold.js":"8jaMK","./time.js":"7jFE4","./utcTime.js":"jZmye","./sequential.js":"76Oio","./sequentialQuantile.js":"dMZ3i","./diverging.js":"3lkJJ","./tickFormat.js":"1dqFI","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jrhJj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "point", ()=>point
);
var _d3Array = require("d3-array");
var _initJs = require("./init.js");
var _ordinalJs = require("./ordinal.js");
var _ordinalJsDefault = parcelHelpers.interopDefault(_ordinalJs);
function band() {
    var scale = _ordinalJsDefault.default().unknown(undefined), domain = scale.domain, ordinalRange = scale.range, r0 = 0, r1 = 1, step, bandwidth, round = false, paddingInner = 0, paddingOuter = 0, align = 0.5;
    delete scale.unknown;
    function rescale() {
        var n = domain().length, reverse = r1 < r0, start = reverse ? r1 : r0, stop = reverse ? r0 : r1;
        step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
        if (round) step = Math.floor(step);
        start += (stop - start - step * (n - paddingInner)) * align;
        bandwidth = step * (1 - paddingInner);
        if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
        var values = _d3Array.range(n).map(function(i) {
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
    return _initJs.initRange.apply(rescale(), arguments);
}
exports.default = band;
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

},{"d3-array":"e6yVq","./init.js":"76hF6","./ordinal.js":"16SNv","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"e6yVq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bisect", ()=>_bisectJsDefault.default
);
parcelHelpers.export(exports, "bisectRight", ()=>_bisectJs.bisectRight
);
parcelHelpers.export(exports, "bisectLeft", ()=>_bisectJs.bisectLeft
);
parcelHelpers.export(exports, "bisectCenter", ()=>_bisectJs.bisectCenter
);
parcelHelpers.export(exports, "ascending", ()=>_ascendingJsDefault.default
);
parcelHelpers.export(exports, "bisector", ()=>_bisectorJsDefault.default
);
parcelHelpers.export(exports, "count", ()=>_countJsDefault.default
);
parcelHelpers.export(exports, "cross", ()=>_crossJsDefault.default
);
parcelHelpers.export(exports, "cumsum", ()=>_cumsumJsDefault.default
);
parcelHelpers.export(exports, "descending", ()=>_descendingJsDefault.default
);
parcelHelpers.export(exports, "deviation", ()=>_deviationJsDefault.default
);
parcelHelpers.export(exports, "extent", ()=>_extentJsDefault.default
);
parcelHelpers.export(exports, "Adder", ()=>_fsumJs.Adder
);
parcelHelpers.export(exports, "fsum", ()=>_fsumJs.fsum
);
parcelHelpers.export(exports, "fcumsum", ()=>_fsumJs.fcumsum
);
parcelHelpers.export(exports, "group", ()=>_groupJsDefault.default
);
parcelHelpers.export(exports, "flatGroup", ()=>_groupJs.flatGroup
);
parcelHelpers.export(exports, "flatRollup", ()=>_groupJs.flatRollup
);
parcelHelpers.export(exports, "groups", ()=>_groupJs.groups
);
parcelHelpers.export(exports, "index", ()=>_groupJs.index
);
parcelHelpers.export(exports, "indexes", ()=>_groupJs.indexes
);
parcelHelpers.export(exports, "rollup", ()=>_groupJs.rollup
);
parcelHelpers.export(exports, "rollups", ()=>_groupJs.rollups
);
parcelHelpers.export(exports, "groupSort", ()=>_groupSortJsDefault.default
);
parcelHelpers.export(exports, "bin", ()=>_binJsDefault.default
) // Deprecated; use bin.
;
parcelHelpers.export(exports, "histogram", ()=>_binJsDefault.default
);
parcelHelpers.export(exports, "thresholdFreedmanDiaconis", ()=>_freedmanDiaconisJsDefault.default
);
parcelHelpers.export(exports, "thresholdScott", ()=>_scottJsDefault.default
);
parcelHelpers.export(exports, "thresholdSturges", ()=>_sturgesJsDefault.default
);
parcelHelpers.export(exports, "max", ()=>_maxJsDefault.default
);
parcelHelpers.export(exports, "maxIndex", ()=>_maxIndexJsDefault.default
);
parcelHelpers.export(exports, "mean", ()=>_meanJsDefault.default
);
parcelHelpers.export(exports, "median", ()=>_medianJsDefault.default
);
parcelHelpers.export(exports, "merge", ()=>_mergeJsDefault.default
);
parcelHelpers.export(exports, "min", ()=>_minJsDefault.default
);
parcelHelpers.export(exports, "minIndex", ()=>_minIndexJsDefault.default
);
parcelHelpers.export(exports, "mode", ()=>_modeJsDefault.default
);
parcelHelpers.export(exports, "nice", ()=>_niceJsDefault.default
);
parcelHelpers.export(exports, "pairs", ()=>_pairsJsDefault.default
);
parcelHelpers.export(exports, "permute", ()=>_permuteJsDefault.default
);
parcelHelpers.export(exports, "quantile", ()=>_quantileJsDefault.default
);
parcelHelpers.export(exports, "quantileSorted", ()=>_quantileJs.quantileSorted
);
parcelHelpers.export(exports, "quickselect", ()=>_quickselectJsDefault.default
);
parcelHelpers.export(exports, "range", ()=>_rangeJsDefault.default
);
parcelHelpers.export(exports, "rank", ()=>_rankJsDefault.default
);
parcelHelpers.export(exports, "least", ()=>_leastJsDefault.default
);
parcelHelpers.export(exports, "leastIndex", ()=>_leastIndexJsDefault.default
);
parcelHelpers.export(exports, "greatest", ()=>_greatestJsDefault.default
);
parcelHelpers.export(exports, "greatestIndex", ()=>_greatestIndexJsDefault.default
);
parcelHelpers.export(exports, "scan", ()=>_scanJsDefault.default
) // Deprecated; use leastIndex.
;
parcelHelpers.export(exports, "shuffle", ()=>_shuffleJsDefault.default
);
parcelHelpers.export(exports, "shuffler", ()=>_shuffleJs.shuffler
);
parcelHelpers.export(exports, "sum", ()=>_sumJsDefault.default
);
parcelHelpers.export(exports, "ticks", ()=>_ticksJsDefault.default
);
parcelHelpers.export(exports, "tickIncrement", ()=>_ticksJs.tickIncrement
);
parcelHelpers.export(exports, "tickStep", ()=>_ticksJs.tickStep
);
parcelHelpers.export(exports, "transpose", ()=>_transposeJsDefault.default
);
parcelHelpers.export(exports, "variance", ()=>_varianceJsDefault.default
);
parcelHelpers.export(exports, "zip", ()=>_zipJsDefault.default
);
parcelHelpers.export(exports, "every", ()=>_everyJsDefault.default
);
parcelHelpers.export(exports, "some", ()=>_someJsDefault.default
);
parcelHelpers.export(exports, "filter", ()=>_filterJsDefault.default
);
parcelHelpers.export(exports, "map", ()=>_mapJsDefault.default
);
parcelHelpers.export(exports, "reduce", ()=>_reduceJsDefault.default
);
parcelHelpers.export(exports, "reverse", ()=>_reverseJsDefault.default
);
parcelHelpers.export(exports, "sort", ()=>_sortJsDefault.default
);
parcelHelpers.export(exports, "difference", ()=>_differenceJsDefault.default
);
parcelHelpers.export(exports, "disjoint", ()=>_disjointJsDefault.default
);
parcelHelpers.export(exports, "intersection", ()=>_intersectionJsDefault.default
);
parcelHelpers.export(exports, "subset", ()=>_subsetJsDefault.default
);
parcelHelpers.export(exports, "superset", ()=>_supersetJsDefault.default
);
parcelHelpers.export(exports, "union", ()=>_unionJsDefault.default
);
parcelHelpers.export(exports, "InternMap", ()=>_internmap.InternMap
);
parcelHelpers.export(exports, "InternSet", ()=>_internmap.InternSet
);
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

},{"./bisect.js":"laAUY","./ascending.js":"iXc0L","./bisector.js":"9XfH7","./count.js":"9ewcm","./cross.js":"bGCpY","./cumsum.js":"eS0XV","./descending.js":"91MKy","./deviation.js":"j4GPU","./extent.js":"cKY3R","./fsum.js":"d733x","./group.js":"hyNB7","./groupSort.js":"1S98i","./bin.js":"aBp1P","./threshold/freedmanDiaconis.js":"1oRQu","./threshold/scott.js":"aJYo8","./threshold/sturges.js":"3mxRb","./max.js":"9SJpw","./maxIndex.js":"lpCDr","./mean.js":"9PwDr","./median.js":"kWHES","./merge.js":"ishfN","./min.js":"6RQhi","./minIndex.js":"f29Dl","./mode.js":"j5PaK","./nice.js":"6B7Wc","./pairs.js":"eRggH","./permute.js":"6MO3d","./quantile.js":"gMqrG","./quickselect.js":"iBoee","./range.js":"7OoDR","./rank.js":"lu0q5","./least.js":"1I6oW","./leastIndex.js":"3jpt6","./greatest.js":"5Jwxt","./greatestIndex.js":"f7LI0","./scan.js":"6qGnQ","./shuffle.js":"ipyIK","./sum.js":"fsvFu","./ticks.js":"3u26p","./transpose.js":"5j06d","./variance.js":"ACeRH","./zip.js":"jtzVG","./every.js":"ahrR1","./some.js":"7Y6JS","./filter.js":"2w57V","./map.js":"8kqmS","./reduce.js":"65bIT","./reverse.js":"1S8rc","./sort.js":"4VhmW","./difference.js":"1Vpna","./disjoint.js":"g5oF5","./intersection.js":"kOuDk","./subset.js":"enmO3","./superset.js":"iOifU","./union.js":"iODHt","internmap":"jYc4q","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"laAUY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bisectRight", ()=>bisectRight
);
parcelHelpers.export(exports, "bisectLeft", ()=>bisectLeft
);
parcelHelpers.export(exports, "bisectCenter", ()=>bisectCenter
);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
var _bisectorJs = require("./bisector.js");
var _bisectorJsDefault = parcelHelpers.interopDefault(_bisectorJs);
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
const ascendingBisect = _bisectorJsDefault.default(_ascendingJsDefault.default);
const bisectRight = ascendingBisect.right;
const bisectLeft = ascendingBisect.left;
const bisectCenter = _bisectorJsDefault.default(_numberJsDefault.default).center;
exports.default = bisectRight;

},{"./ascending.js":"iXc0L","./bisector.js":"9XfH7","./number.js":"kz8Sc","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iXc0L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function ascending(a, b) {
    return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
exports.default = ascending;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9XfH7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
function bisector(f) {
    let delta = f;
    let compare1 = f;
    let compare2 = f;
    if (f.length !== 2) {
        delta = (d, x)=>f(d) - x
        ;
        compare1 = _ascendingJsDefault.default;
        compare2 = (d, x)=>_ascendingJsDefault.default(f(d), x)
        ;
    }
    function left(a, x, lo = 0, hi = a.length) {
        if (lo < hi) {
            if (compare1(x, x) !== 0) return hi;
            do {
                const mid = lo + hi >>> 1;
                if (compare2(a[mid], x) < 0) lo = mid + 1;
                else hi = mid;
            }while (lo < hi)
        }
        return lo;
    }
    function right(a, x, lo = 0, hi = a.length) {
        if (lo < hi) {
            if (compare1(x, x) !== 0) return hi;
            do {
                const mid = lo + hi >>> 1;
                if (compare2(a[mid], x) <= 0) lo = mid + 1;
                else hi = mid;
            }while (lo < hi)
        }
        return lo;
    }
    function center(a, x, lo = 0, hi = a.length) {
        const i = left(a, x, lo, hi - 1);
        return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
    }
    return {
        left,
        center,
        right
    };
}
exports.default = bisector;

},{"./ascending.js":"iXc0L","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kz8Sc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "numbers", ()=>numbers
);
function number(x) {
    return x === null ? NaN : +x;
}
exports.default = number;
function* numbers(values, valueof) {
    if (valueof === undefined) {
        for (let value of values)if (value != null && (value = +value) >= value) yield value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) yield value;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9ewcm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function count1(values, valueof) {
    let count = 0;
    if (valueof === undefined) {
        for (let value of values)if (value != null && (value = +value) >= value) ++count;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) ++count;
    }
    return count;
}
exports.default = count1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bGCpY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function length1(array) {
    return array.length | 0;
}
function empty(length) {
    return !(length > 0);
}
function arrayify(values) {
    return typeof values !== "object" || "length" in values ? values : Array.from(values);
}
function reducer(reduce) {
    return (values)=>reduce(...values)
    ;
}
function cross(...values) {
    const reduce = typeof values[values.length - 1] === "function" && reducer(values.pop());
    values = values.map(arrayify);
    const lengths = values.map(length1);
    const j = values.length - 1;
    const index = new Array(j + 1).fill(0);
    const product = [];
    if (j < 0 || lengths.some(empty)) return product;
    while(true){
        product.push(index.map((j, i)=>values[i][j]
        ));
        let i = j;
        while(++index[i] === lengths[i]){
            if (i === 0) return reduce ? product.map(reduce) : product;
            index[i--] = 0;
        }
    }
}
exports.default = cross;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eS0XV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function cumsum(values, valueof) {
    var sum = 0, index = 0;
    return Float64Array.from(values, valueof === undefined ? (v)=>sum += +v || 0
     : (v)=>sum += +valueof(v, index++, values) || 0
    );
}
exports.default = cumsum;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"91MKy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function descending(a, b) {
    return a == null || b == null ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}
exports.default = descending;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"j4GPU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _varianceJs = require("./variance.js");
var _varianceJsDefault = parcelHelpers.interopDefault(_varianceJs);
function deviation(values, valueof) {
    const v = _varianceJsDefault.default(values, valueof);
    return v ? Math.sqrt(v) : v;
}
exports.default = deviation;

},{"./variance.js":"ACeRH","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ACeRH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function variance(values, valueof) {
    let count = 0;
    let delta;
    let mean = 0;
    let sum = 0;
    if (valueof === undefined) {
        for (let value of values)if (value != null && (value = +value) >= value) {
            delta = value - mean;
            mean += delta / ++count;
            sum += delta * (value - mean);
        }
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
            delta = value - mean;
            mean += delta / ++count;
            sum += delta * (value - mean);
        }
    }
    if (count > 1) return sum / (count - 1);
}
exports.default = variance;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cKY3R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function extent(values, valueof) {
    let min;
    let max;
    if (valueof === undefined) {
        for (const value of values)if (value != null) {
            if (min === undefined) {
                if (value >= value) min = max = value;
            } else {
                if (min > value) min = value;
                if (max < value) max = value;
            }
        }
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null) {
            if (min === undefined) {
                if (value >= value) min = max = value;
            } else {
                if (min > value) min = value;
                if (max < value) max = value;
            }
        }
    }
    return [
        min,
        max
    ];
}
exports.default = extent;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"d733x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// https://github.com/python/cpython/blob/a74eea238f5baba15797e2e8b570d153bc8690a7/Modules/mathmodule.c#L1423
parcelHelpers.export(exports, "Adder", ()=>Adder
);
parcelHelpers.export(exports, "fsum", ()=>fsum
);
parcelHelpers.export(exports, "fcumsum", ()=>fcumsum
);
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
    return Float64Array.from(values, valueof === undefined ? (v)=>adder.add(+v || 0)
     : (v)=>adder.add(+valueof(v, ++index, values) || 0)
    );
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hyNB7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "groups", ()=>groups1
);
parcelHelpers.export(exports, "flatGroup", ()=>flatGroup
);
parcelHelpers.export(exports, "flatRollup", ()=>flatRollup
);
parcelHelpers.export(exports, "rollup", ()=>rollup
);
parcelHelpers.export(exports, "rollups", ()=>rollups
);
parcelHelpers.export(exports, "index", ()=>index1
);
parcelHelpers.export(exports, "indexes", ()=>indexes
);
var _internmap = require("internmap");
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
function group1(values, ...keys) {
    return nest(values, _identityJsDefault.default, _identityJsDefault.default, keys);
}
exports.default = group1;
function groups1(values, ...keys) {
    return nest(values, Array.from, _identityJsDefault.default, keys);
}
function flatten(groups, keys) {
    for(let i = 1, n = keys.length; i < n; ++i)groups = groups.flatMap((g)=>g.pop().map(([key, value])=>[
                ...g,
                key,
                value
            ]
        )
    );
    return groups;
}
function flatGroup(values, ...keys) {
    return flatten(groups1(values, ...keys), keys);
}
function flatRollup(values, reduce, ...keys) {
    return flatten(rollups(values, reduce, ...keys), keys);
}
function rollup(values, reduce, ...keys) {
    return nest(values, _identityJsDefault.default, reduce, keys);
}
function rollups(values, reduce, ...keys) {
    return nest(values, Array.from, reduce, keys);
}
function index1(values, ...keys) {
    return nest(values, _identityJsDefault.default, unique, keys);
}
function indexes(values, ...keys) {
    return nest(values, Array.from, unique, keys);
}
function unique(values) {
    if (values.length !== 1) throw new Error("duplicate key");
    return values[0];
}
function nest(values2, map, reduce, keys) {
    return (function regroup(values, i) {
        if (i >= keys.length) return reduce(values);
        const groups = new _internmap.InternMap();
        const keyof = keys[i++];
        let index = -1;
        for (const value of values){
            const key = keyof(value, ++index, values);
            const group = groups.get(key);
            if (group) group.push(value);
            else groups.set(key, [
                value
            ]);
        }
        for (const [key, values1] of groups)groups.set(key, regroup(values1, i));
        return map(groups);
    })(values2, 0);
}

},{"internmap":"jYc4q","./identity.js":"9sa1j","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jYc4q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InternMap", ()=>InternMap
);
parcelHelpers.export(exports, "InternSet", ()=>InternSet
);
class InternMap extends Map {
    constructor(entries, key7 = keyof){
        super();
        Object.defineProperties(this, {
            _intern: {
                value: new Map()
            },
            _key: {
                value: key7
            }
        });
        if (entries != null) for (const [key1, value] of entries)this.set(key1, value);
    }
    get(key2) {
        return super.get(intern_get(this, key2));
    }
    has(key3) {
        return super.has(intern_get(this, key3));
    }
    set(key4, value4) {
        return super.set(intern_set(this, key4), value4);
    }
    delete(key5) {
        return super.delete(intern_delete(this, key5));
    }
}
class InternSet extends Set {
    constructor(values, key6 = keyof){
        super();
        Object.defineProperties(this, {
            _intern: {
                value: new Map()
            },
            _key: {
                value: key6
            }
        });
        if (values != null) for (const value of values)this.add(value);
    }
    has(value1) {
        return super.has(intern_get(this, value1));
    }
    add(value2) {
        return super.add(intern_set(this, value2));
    }
    delete(value3) {
        return super.delete(intern_delete(this, value3));
    }
}
function intern_get({ _intern , _key  }, value) {
    const key = _key(value);
    return _intern.has(key) ? _intern.get(key) : value;
}
function intern_set({ _intern , _key  }, value) {
    const key = _key(value);
    if (_intern.has(key)) return _intern.get(key);
    _intern.set(key, value);
    return value;
}
function intern_delete({ _intern , _key  }, value) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9sa1j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function identity(x) {
    return x;
}
exports.default = identity;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1S98i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
var _groupJs = require("./group.js");
var _groupJsDefault = parcelHelpers.interopDefault(_groupJs);
var _sortJs = require("./sort.js");
var _sortJsDefault = parcelHelpers.interopDefault(_sortJs);
function groupSort(values, reduce, key1) {
    return (reduce.length !== 2 ? _sortJsDefault.default(_groupJs.rollup(values, reduce, key1), ([ak, av], [bk, bv])=>_ascendingJsDefault.default(av, bv) || _ascendingJsDefault.default(ak, bk)
    ) : _sortJsDefault.default(_groupJsDefault.default(values, key1), ([ak, av], [bk, bv])=>reduce(av, bv) || _ascendingJsDefault.default(ak, bk)
    )).map(([key])=>key
    );
}
exports.default = groupSort;

},{"./ascending.js":"iXc0L","./group.js":"hyNB7","./sort.js":"4VhmW","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4VhmW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compareDefined", ()=>compareDefined
);
parcelHelpers.export(exports, "ascendingDefined", ()=>ascendingDefined
);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
var _permuteJs = require("./permute.js");
var _permuteJsDefault = parcelHelpers.interopDefault(_permuteJs);
function sort(values, ...F) {
    if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
    values = Array.from(values);
    let [f1] = F;
    if (f1 && f1.length !== 2 || F.length > 1) {
        const index = Uint32Array.from(values, (d, i)=>i
        );
        if (F.length > 1) {
            F = F.map((f)=>values.map(f)
            );
            index.sort((i, j)=>{
                for (const f of F){
                    const c = ascendingDefined(f[i], f[j]);
                    if (c) return c;
                }
            });
        } else {
            f1 = values.map(f1);
            index.sort((i, j)=>ascendingDefined(f1[i], f1[j])
            );
        }
        return _permuteJsDefault.default(values, index);
    }
    return values.sort(compareDefined(f1));
}
exports.default = sort;
function compareDefined(compare = _ascendingJsDefault.default) {
    if (compare === _ascendingJsDefault.default) return ascendingDefined;
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

},{"./ascending.js":"iXc0L","./permute.js":"6MO3d","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6MO3d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function permute(source, keys) {
    return Array.from(keys, (key)=>source[key]
    );
}
exports.default = permute;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aBp1P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayJs = require("./array.js");
var _bisectJs = require("./bisect.js");
var _bisectJsDefault = parcelHelpers.interopDefault(_bisectJs);
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _extentJs = require("./extent.js");
var _extentJsDefault = parcelHelpers.interopDefault(_extentJs);
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _niceJs = require("./nice.js");
var _niceJsDefault = parcelHelpers.interopDefault(_niceJs);
var _ticksJs = require("./ticks.js");
var _ticksJsDefault = parcelHelpers.interopDefault(_ticksJs);
var _sturgesJs = require("./threshold/sturges.js");
var _sturgesJsDefault = parcelHelpers.interopDefault(_sturgesJs);
function bin1() {
    var value = _identityJsDefault.default, domain = _extentJsDefault.default, threshold = _sturgesJsDefault.default;
    function histogram(data) {
        if (!Array.isArray(data)) data = Array.from(data);
        var i, n = data.length, x, values = new Array(n);
        for(i = 0; i < n; ++i)values[i] = value(data[i], i, data);
        var xz = domain(values), x0 = xz[0], x1 = xz[1], tz = threshold(values, x0, x1);
        // Convert number of thresholds into uniform thresholds, and nice the
        // default domain accordingly.
        if (!Array.isArray(tz)) {
            const max = x1, tn = +tz;
            if (domain === _extentJsDefault.default) [x0, x1] = _niceJsDefault.default(x0, x1, tn);
            tz = _ticksJsDefault.default(x0, x1, tn);
            // If the last threshold is coincident with the domain’s upper bound, the
            // last bin will be zero-width. If the default domain is used, and this
            // last threshold is coincident with the maximum input value, we can
            // extend the niced upper bound by one tick to ensure uniform bin widths;
            // otherwise, we simply remove the last threshold. Note that we don’t
            // coerce values or the domain to numbers, and thus must be careful to
            // compare order (>=) rather than strict equality (===)!
            if (tz[tz.length - 1] >= x1) {
                if (max >= x1 && domain === _extentJsDefault.default) {
                    const step = _ticksJs.tickIncrement(x0, x1, tn);
                    if (isFinite(step)) {
                        if (step > 0) x1 = (Math.floor(x1 / step) + 1) * step;
                        else if (step < 0) x1 = (Math.ceil(x1 * -step) + 1) / -step;
                    }
                } else tz.pop();
            }
        }
        // Remove any thresholds outside the domain.
        var m = tz.length;
        while(tz[0] <= x0)tz.shift(), --m;
        while(tz[m - 1] > x1)tz.pop(), --m;
        var bins = new Array(m + 1), bin;
        // Initialize bins.
        for(i = 0; i <= m; ++i){
            bin = bins[i] = [];
            bin.x0 = i > 0 ? tz[i - 1] : x0;
            bin.x1 = i < m ? tz[i] : x1;
        }
        // Assign data to bins by value, ignoring any outside the domain.
        for(i = 0; i < n; ++i){
            x = values[i];
            if (x != null && x0 <= x && x <= x1) bins[_bisectJsDefault.default(tz, x, 0, m)].push(data[i]);
        }
        return bins;
    }
    histogram.value = function(_) {
        return arguments.length ? (value = typeof _ === "function" ? _ : _constantJsDefault.default(_), histogram) : value;
    };
    histogram.domain = function(_) {
        return arguments.length ? (domain = typeof _ === "function" ? _ : _constantJsDefault.default([
            _[0],
            _[1]
        ]), histogram) : domain;
    };
    histogram.thresholds = function(_) {
        return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? _constantJsDefault.default(_arrayJs.slice.call(_)) : _constantJsDefault.default(_), histogram) : threshold;
    };
    return histogram;
}
exports.default = bin1;

},{"./array.js":"f4r9N","./bisect.js":"laAUY","./constant.js":"UR6Ag","./extent.js":"cKY3R","./identity.js":"9sa1j","./nice.js":"6B7Wc","./ticks.js":"3u26p","./threshold/sturges.js":"3mxRb","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"f4r9N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "slice", ()=>slice
);
parcelHelpers.export(exports, "map", ()=>map
);
var array = Array.prototype;
var slice = array.slice;
var map = array.map;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"UR6Ag":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function constant(x) {
    return ()=>x
    ;
}
exports.default = constant;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6B7Wc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ticksJs = require("./ticks.js");
function nice(start, stop, count) {
    let prestep;
    while(true){
        const step = _ticksJs.tickIncrement(start, stop, count);
        if (step === prestep || step === 0 || !isFinite(step)) return [
            start,
            stop
        ];
        else if (step > 0) {
            start = Math.floor(start / step) * step;
            stop = Math.ceil(stop / step) * step;
        } else if (step < 0) {
            start = Math.ceil(start * step) / step;
            stop = Math.floor(stop * step) / step;
        }
        prestep = step;
    }
}
exports.default = nice;

},{"./ticks.js":"3u26p","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3u26p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tickIncrement", ()=>tickIncrement
);
parcelHelpers.export(exports, "tickStep", ()=>tickStep
);
var e10 = Math.sqrt(50), e5 = Math.sqrt(10), e2 = Math.sqrt(2);
function ticks1(start, stop, count) {
    var reverse, i = -1, n, ticks, step;
    stop = +stop, start = +start, count = +count;
    if (start === stop && count > 0) return [
        start
    ];
    if (reverse = stop < start) n = start, start = stop, stop = n;
    if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];
    if (step > 0) {
        let r0 = Math.round(start / step), r1 = Math.round(stop / step);
        if (r0 * step < start) ++r0;
        if (r1 * step > stop) --r1;
        ticks = new Array(n = r1 - r0 + 1);
        while(++i < n)ticks[i] = (r0 + i) * step;
    } else {
        step = -step;
        let r0 = Math.round(start * step), r1 = Math.round(stop * step);
        if (r0 / step < start) ++r0;
        if (r1 / step > stop) --r1;
        ticks = new Array(n = r1 - r0 + 1);
        while(++i < n)ticks[i] = (r0 + i) / step;
    }
    if (reverse) ticks.reverse();
    return ticks;
}
exports.default = ticks1;
function tickIncrement(start, stop, count) {
    var step = (stop - start) / Math.max(0, count), power = Math.floor(Math.log(step) / Math.LN10), error = step / Math.pow(10, power);
    return power >= 0 ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}
function tickStep(start, stop, count) {
    var step0 = Math.abs(stop - start) / Math.max(0, count), step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)), error = step0 / step1;
    if (error >= e10) step1 *= 10;
    else if (error >= e5) step1 *= 5;
    else if (error >= e2) step1 *= 2;
    return stop < start ? -step1 : step1;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3mxRb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _countJs = require("../count.js");
var _countJsDefault = parcelHelpers.interopDefault(_countJs);
function thresholdSturges(values) {
    return Math.ceil(Math.log(_countJsDefault.default(values)) / Math.LN2) + 1;
}
exports.default = thresholdSturges;

},{"../count.js":"9ewcm","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1oRQu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _countJs = require("../count.js");
var _countJsDefault = parcelHelpers.interopDefault(_countJs);
var _quantileJs = require("../quantile.js");
var _quantileJsDefault = parcelHelpers.interopDefault(_quantileJs);
function thresholdFreedmanDiaconis(values, min, max) {
    return Math.ceil((max - min) / (2 * (_quantileJsDefault.default(values, 0.75) - _quantileJsDefault.default(values, 0.25)) * Math.pow(_countJsDefault.default(values), -1 / 3)));
}
exports.default = thresholdFreedmanDiaconis;

},{"../count.js":"9ewcm","../quantile.js":"gMqrG","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gMqrG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "quantileSorted", ()=>quantileSorted
);
var _maxJs = require("./max.js");
var _maxJsDefault = parcelHelpers.interopDefault(_maxJs);
var _minJs = require("./min.js");
var _minJsDefault = parcelHelpers.interopDefault(_minJs);
var _quickselectJs = require("./quickselect.js");
var _quickselectJsDefault = parcelHelpers.interopDefault(_quickselectJs);
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
function quantile(values, p, valueof) {
    values = Float64Array.from(_numberJs.numbers(values, valueof));
    if (!(n = values.length)) return;
    if ((p = +p) <= 0 || n < 2) return _minJsDefault.default(values);
    if (p >= 1) return _maxJsDefault.default(values);
    var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = _maxJsDefault.default(_quickselectJsDefault.default(values, i0).subarray(0, i0 + 1)), value1 = _minJsDefault.default(values.subarray(i0 + 1));
    return value0 + (value1 - value0) * (i - i0);
}
exports.default = quantile;
function quantileSorted(values, p, valueof = _numberJsDefault.default) {
    if (!(n = values.length)) return;
    if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
    if (p >= 1) return +valueof(values[n - 1], n - 1, values);
    var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = +valueof(values[i0], i0, values), value1 = +valueof(values[i0 + 1], i0 + 1, values);
    return value0 + (value1 - value0) * (i - i0);
}

},{"./max.js":"9SJpw","./min.js":"6RQhi","./quickselect.js":"iBoee","./number.js":"kz8Sc","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9SJpw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function max1(values, valueof) {
    let max;
    if (valueof === undefined) {
        for (const value of values)if (value != null && (max < value || max === undefined && value >= value)) max = value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (max < value || max === undefined && value >= value)) max = value;
    }
    return max;
}
exports.default = max1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6RQhi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function min1(values, valueof) {
    let min;
    if (valueof === undefined) {
        for (const value of values)if (value != null && (min > value || min === undefined && value >= value)) min = value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (min > value || min === undefined && value >= value)) min = value;
    }
    return min;
}
exports.default = min1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iBoee":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _sortJs = require("./sort.js");
function quickselect(array, k, left = 0, right = array.length - 1, compare) {
    compare = compare === undefined ? _sortJs.ascendingDefined : _sortJs.compareDefined(compare);
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
exports.default = quickselect;
function swap(array, i, j) {
    const t = array[i];
    array[i] = array[j];
    array[j] = t;
}

},{"./sort.js":"4VhmW","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aJYo8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _countJs = require("../count.js");
var _countJsDefault = parcelHelpers.interopDefault(_countJs);
var _deviationJs = require("../deviation.js");
var _deviationJsDefault = parcelHelpers.interopDefault(_deviationJs);
function thresholdScott(values, min, max) {
    return Math.ceil((max - min) / (3.5 * _deviationJsDefault.default(values) * Math.pow(_countJsDefault.default(values), -1 / 3)));
}
exports.default = thresholdScott;

},{"../count.js":"9ewcm","../deviation.js":"j4GPU","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lpCDr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function maxIndex1(values, valueof) {
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
exports.default = maxIndex1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9PwDr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function mean(values, valueof) {
    let count = 0;
    let sum = 0;
    if (valueof === undefined) {
        for (let value of values)if (value != null && (value = +value) >= value) ++count, sum += value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) ++count, sum += value;
    }
    if (count) return sum / count;
}
exports.default = mean;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kWHES":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _quantileJs = require("./quantile.js");
var _quantileJsDefault = parcelHelpers.interopDefault(_quantileJs);
function median(values, valueof) {
    return _quantileJsDefault.default(values, 0.5, valueof);
}
exports.default = median;

},{"./quantile.js":"gMqrG","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ishfN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function* flatten(arrays) {
    for (const array of arrays)yield* array;
}
function merge(arrays) {
    return Array.from(flatten(arrays));
}
exports.default = merge;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"f29Dl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function minIndex1(values, valueof) {
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
exports.default = minIndex1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"j5PaK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _internmap = require("internmap");
function mode(values, valueof) {
    const counts = new _internmap.InternMap();
    if (valueof === undefined) {
        for (let value of values)if (value != null && value >= value) counts.set(value, (counts.get(value) || 0) + 1);
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && value >= value) counts.set(value, (counts.get(value) || 0) + 1);
    }
    let modeValue;
    let modeCount = 0;
    for (const [value, count] of counts)if (count > modeCount) {
        modeCount = count;
        modeValue = value;
    }
    return modeValue;
}
exports.default = mode;

},{"internmap":"jYc4q","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eRggH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pair", ()=>pair
);
function pairs1(values, pairof = pair) {
    const pairs = [];
    let previous;
    let first = false;
    for (const value of values){
        if (first) pairs.push(pairof(previous, value));
        previous = value;
        first = true;
    }
    return pairs;
}
exports.default = pairs1;
function pair(a, b) {
    return [
        a,
        b
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7OoDR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function range1(start, stop, step) {
    start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
    var i = -1, n = Math.max(0, Math.ceil((stop - start) / step)) | 0, range = new Array(n);
    while(++i < n)range[i] = start + i * step;
    return range;
}
exports.default = range1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lu0q5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
var _sortJs = require("./sort.js");
function rank(values, valueof = _ascendingJsDefault.default) {
    if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
    let V = Array.from(values);
    const R = new Float64Array(V.length);
    if (valueof.length !== 2) V = V.map(valueof), valueof = _ascendingJsDefault.default;
    const compareIndex = (i, j)=>valueof(V[i], V[j])
    ;
    let k, r;
    Uint32Array.from(V, (_, i)=>i
    ).sort(valueof === _ascendingJsDefault.default ? (i, j)=>_sortJs.ascendingDefined(V[i], V[j])
     : _sortJs.compareDefined(compareIndex)).forEach((j, i)=>{
        const c = compareIndex(j, k === undefined ? j : k);
        if (c >= 0) {
            if (k === undefined || c > 0) k = j, r = i;
            R[j] = r;
        } else R[j] = NaN;
    });
    return R;
}
exports.default = rank;

},{"./ascending.js":"iXc0L","./sort.js":"4VhmW","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1I6oW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
function least(values, compare = _ascendingJsDefault.default) {
    let min;
    let defined = false;
    if (compare.length === 1) {
        let minValue;
        for (const element of values){
            const value = compare(element);
            if (defined ? _ascendingJsDefault.default(value, minValue) < 0 : _ascendingJsDefault.default(value, value) === 0) {
                min = element;
                minValue = value;
                defined = true;
            }
        }
    } else {
        for (const value of values)if (defined ? compare(value, min) < 0 : compare(value, value) === 0) {
            min = value;
            defined = true;
        }
    }
    return min;
}
exports.default = least;

},{"./ascending.js":"iXc0L","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3jpt6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
var _minIndexJs = require("./minIndex.js");
var _minIndexJsDefault = parcelHelpers.interopDefault(_minIndexJs);
function leastIndex(values, compare = _ascendingJsDefault.default) {
    if (compare.length === 1) return _minIndexJsDefault.default(values, compare);
    let minValue;
    let min = -1;
    let index = -1;
    for (const value of values){
        ++index;
        if (min < 0 ? compare(value, value) === 0 : compare(value, minValue) < 0) {
            minValue = value;
            min = index;
        }
    }
    return min;
}
exports.default = leastIndex;

},{"./ascending.js":"iXc0L","./minIndex.js":"f29Dl","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5Jwxt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
function greatest(values, compare = _ascendingJsDefault.default) {
    let max;
    let defined = false;
    if (compare.length === 1) {
        let maxValue;
        for (const element of values){
            const value = compare(element);
            if (defined ? _ascendingJsDefault.default(value, maxValue) > 0 : _ascendingJsDefault.default(value, value) === 0) {
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
exports.default = greatest;

},{"./ascending.js":"iXc0L","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"f7LI0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
var _maxIndexJs = require("./maxIndex.js");
var _maxIndexJsDefault = parcelHelpers.interopDefault(_maxIndexJs);
function greatestIndex(values, compare = _ascendingJsDefault.default) {
    if (compare.length === 1) return _maxIndexJsDefault.default(values, compare);
    let maxValue;
    let max = -1;
    let index = -1;
    for (const value of values){
        ++index;
        if (max < 0 ? compare(value, value) === 0 : compare(value, maxValue) > 0) {
            maxValue = value;
            max = index;
        }
    }
    return max;
}
exports.default = greatestIndex;

},{"./ascending.js":"iXc0L","./maxIndex.js":"lpCDr","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6qGnQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _leastIndexJs = require("./leastIndex.js");
var _leastIndexJsDefault = parcelHelpers.interopDefault(_leastIndexJs);
function scan(values, compare) {
    const index = _leastIndexJsDefault.default(values, compare);
    return index < 0 ? undefined : index;
}
exports.default = scan;

},{"./leastIndex.js":"3jpt6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ipyIK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shuffler", ()=>shuffler
);
exports.default = shuffler(Math.random);
function shuffler(random) {
    return function shuffle(array, i0 = 0, i1 = array.length) {
        let m = i1 - (i0 = +i0);
        while(m){
            const i = random() * m-- | 0, t = array[m + i0];
            array[m + i0] = array[i + i0];
            array[i + i0] = t;
        }
        return array;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fsvFu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function sum1(values, valueof) {
    let sum = 0;
    if (valueof === undefined) {
        for (let value of values)if (value = +value) sum += value;
    } else {
        let index = -1;
        for (let value of values)if (value = +valueof(value, ++index, values)) sum += value;
    }
    return sum;
}
exports.default = sum1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5j06d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _minJs = require("./min.js");
var _minJsDefault = parcelHelpers.interopDefault(_minJs);
function transpose1(matrix) {
    if (!(n = matrix.length)) return [];
    for(var i = -1, m = _minJsDefault.default(matrix, length), transpose = new Array(m); ++i < m;)for(var j = -1, n, row = transpose[i] = new Array(n); ++j < n;)row[j] = matrix[j][i];
    return transpose;
}
exports.default = transpose1;
function length(d) {
    return d.length;
}

},{"./min.js":"6RQhi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jtzVG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _transposeJs = require("./transpose.js");
var _transposeJsDefault = parcelHelpers.interopDefault(_transposeJs);
function zip() {
    return _transposeJsDefault.default(arguments);
}
exports.default = zip;

},{"./transpose.js":"5j06d","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ahrR1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function every(values, test) {
    if (typeof test !== "function") throw new TypeError("test is not a function");
    let index = -1;
    for (const value of values){
        if (!test(value, ++index, values)) return false;
    }
    return true;
}
exports.default = every;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7Y6JS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function some(values, test) {
    if (typeof test !== "function") throw new TypeError("test is not a function");
    let index = -1;
    for (const value of values){
        if (test(value, ++index, values)) return true;
    }
    return false;
}
exports.default = some;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2w57V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function filter(values, test) {
    if (typeof test !== "function") throw new TypeError("test is not a function");
    const array = [];
    let index = -1;
    for (const value of values)if (test(value, ++index, values)) array.push(value);
    return array;
}
exports.default = filter;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8kqmS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function map(values, mapper) {
    if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
    if (typeof mapper !== "function") throw new TypeError("mapper is not a function");
    return Array.from(values, (value, index)=>mapper(value, index, values)
    );
}
exports.default = map;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"65bIT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function reduce(values, reducer, value) {
    if (typeof reducer !== "function") throw new TypeError("reducer is not a function");
    const iterator = values[Symbol.iterator]();
    let done, next, index = -1;
    if (arguments.length < 3) {
        ({ done , value  } = iterator.next());
        if (done) return;
        ++index;
    }
    while({ done , value: next  } = iterator.next(), !done)value = reducer(value, next, ++index, values);
    return value;
}
exports.default = reduce;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1S8rc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function reverse(values) {
    if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
    return Array.from(values).reverse();
}
exports.default = reverse;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1Vpna":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _internmap = require("internmap");
function difference(values, ...others) {
    values = new _internmap.InternSet(values);
    for (const other of others)for (const value of other)values.delete(value);
    return values;
}
exports.default = difference;

},{"internmap":"jYc4q","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"g5oF5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _internmap = require("internmap");
function disjoint(values, other) {
    const iterator = other[Symbol.iterator](), set = new _internmap.InternSet();
    for (const v of values){
        if (set.has(v)) return false;
        let value, done;
        while({ value , done  } = iterator.next()){
            if (done) break;
            if (Object.is(v, value)) return false;
            set.add(value);
        }
    }
    return true;
}
exports.default = disjoint;

},{"internmap":"jYc4q","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kOuDk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _internmap = require("internmap");
function intersection(values, ...others) {
    values = new _internmap.InternSet(values);
    others = others.map(set);
    out: for (const value of values){
        for (const other of others)if (!other.has(value)) {
            values.delete(value);
            continue out;
        }
    }
    return values;
}
exports.default = intersection;
function set(values) {
    return values instanceof _internmap.InternSet ? values : new _internmap.InternSet(values);
}

},{"internmap":"jYc4q","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"enmO3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _supersetJs = require("./superset.js");
var _supersetJsDefault = parcelHelpers.interopDefault(_supersetJs);
function subset(values, other) {
    return _supersetJsDefault.default(other, values);
}
exports.default = subset;

},{"./superset.js":"iOifU","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iOifU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function superset(values, other) {
    const iterator = values[Symbol.iterator](), set = new Set();
    for (const o of other){
        const io = intern(o);
        if (set.has(io)) continue;
        let value, done;
        while({ value , done  } = iterator.next()){
            if (done) return false;
            const ivalue = intern(value);
            set.add(ivalue);
            if (Object.is(io, ivalue)) break;
        }
    }
    return true;
}
exports.default = superset;
function intern(value) {
    return value !== null && typeof value === "object" ? value.valueOf() : value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iODHt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _internmap = require("internmap");
function union(...others) {
    const set = new _internmap.InternSet();
    for (const other of others)for (const o of other)set.add(o);
    return set;
}
exports.default = union;

},{"internmap":"jYc4q","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"76hF6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRange", ()=>initRange
);
parcelHelpers.export(exports, "initInterpolator", ()=>initInterpolator
);
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"16SNv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "implicit", ()=>implicit
);
var _d3Array = require("d3-array");
var _initJs = require("./init.js");
const implicit = Symbol("implicit");
function ordinal() {
    var index = new _d3Array.InternMap(), domain = [], range = [], unknown = implicit;
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
        domain = [], index = new _d3Array.InternMap();
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
    _initJs.initRange.apply(scale, arguments);
    return scale;
}
exports.default = ordinal;

},{"./init.js":"76hF6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","d3-array":"e6yVq"}],"7A0m5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _linearJs = require("./linear.js");
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
function identity(domain) {
    var unknown;
    function scale(x) {
        return x == null || isNaN(x = +x) ? unknown : x;
    }
    scale.invert = scale;
    scale.domain = scale.range = function(_) {
        return arguments.length ? (domain = Array.from(_, _numberJsDefault.default), scale) : domain.slice();
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
        return identity(domain).unknown(unknown);
    };
    domain = arguments.length ? Array.from(domain, _numberJsDefault.default) : [
        0,
        1
    ];
    return _linearJs.linearish(scale);
}
exports.default = identity;

},{"./linear.js":"iCJmQ","./number.js":"1cJLd","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iCJmQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "linearish", ()=>linearish
);
var _d3Array = require("d3-array");
var _continuousJs = require("./continuous.js");
var _continuousJsDefault = parcelHelpers.interopDefault(_continuousJs);
var _initJs = require("./init.js");
var _tickFormatJs = require("./tickFormat.js");
var _tickFormatJsDefault = parcelHelpers.interopDefault(_tickFormatJs);
function linearish(scale) {
    var domain = scale.domain;
    scale.ticks = function(count) {
        var d = domain();
        return _d3Array.ticks(d[0], d[d.length - 1], count == null ? 10 : count);
    };
    scale.tickFormat = function(count, specifier) {
        var d = domain();
        return _tickFormatJsDefault.default(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
    };
    scale.nice = function(count) {
        if (count == null) count = 10;
        var d = domain();
        var i0 = 0;
        var i1 = d.length - 1;
        var start = d[i0];
        var stop = d[i1];
        var prestep;
        var step;
        var maxIter = 10;
        if (stop < start) {
            step = start, start = stop, stop = step;
            step = i0, i0 = i1, i1 = step;
        }
        while(maxIter-- > 0){
            step = _d3Array.tickIncrement(start, stop, count);
            if (step === prestep) {
                d[i0] = start;
                d[i1] = stop;
                return domain(d);
            } else if (step > 0) {
                start = Math.floor(start / step) * step;
                stop = Math.ceil(stop / step) * step;
            } else if (step < 0) {
                start = Math.ceil(start * step) / step;
                stop = Math.floor(stop * step) / step;
            } else break;
            prestep = step;
        }
        return scale;
    };
    return scale;
}
function linear() {
    var scale = _continuousJsDefault.default();
    scale.copy = function() {
        return _continuousJs.copy(scale, linear());
    };
    _initJs.initRange.apply(scale, arguments);
    return linearish(scale);
}
exports.default = linear;

},{"d3-array":"e6yVq","./continuous.js":"btLMJ","./init.js":"76hF6","./tickFormat.js":"1dqFI","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"btLMJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "identity", ()=>identity
);
parcelHelpers.export(exports, "copy", ()=>copy
);
parcelHelpers.export(exports, "transformer", ()=>transformer
);
var _d3Array = require("d3-array");
var _d3Interpolate = require("d3-interpolate");
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var unit = [
    0,
    1
];
function identity(x) {
    return x;
}
function normalize(a, b) {
    return (b -= a = +a) ? function(x) {
        return (x - a) / b;
    } : _constantJsDefault.default(isNaN(b) ? NaN : 0.5);
}
function clamper(a, b) {
    var t;
    if (a > b) t = a, a = b, b = t;
    return function(x) {
        return Math.max(a, Math.min(b, x));
    };
}
// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
    var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
    if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
    else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
    return function(x) {
        return r0(d0(x));
    };
}
function polymap(domain, range, interpolate) {
    var j = Math.min(domain.length, range.length) - 1, d = new Array(j), r = new Array(j), i = -1;
    // Reverse descending domains.
    if (domain[j] < domain[0]) {
        domain = domain.slice().reverse();
        range = range.slice().reverse();
    }
    while(++i < j){
        d[i] = normalize(domain[i], domain[i + 1]);
        r[i] = interpolate(range[i], range[i + 1]);
    }
    return function(x) {
        var i = _d3Array.bisect(domain, x, 1, j) - 1;
        return r[i](d[i](x));
    };
}
function copy(source, target) {
    return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer() {
    var domain = unit, range = unit, interpolate = _d3Interpolate.interpolate, transform, untransform, unknown, clamp = identity, piecewise, output, input;
    function rescale() {
        var n = Math.min(domain.length, range.length);
        if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);
        piecewise = n > 2 ? polymap : bimap;
        output = input = null;
        return scale;
    }
    function scale(x) {
        return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
    }
    scale.invert = function(y) {
        return clamp(untransform((input || (input = piecewise(range, domain.map(transform), _d3Interpolate.interpolateNumber)))(y)));
    };
    scale.domain = function(_) {
        return arguments.length ? (domain = Array.from(_, _numberJsDefault.default), rescale()) : domain.slice();
    };
    scale.range = function(_) {
        return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
    };
    scale.rangeRound = function(_) {
        return range = Array.from(_), interpolate = _d3Interpolate.interpolateRound, rescale();
    };
    scale.clamp = function(_) {
        return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
    };
    scale.interpolate = function(_) {
        return arguments.length ? (interpolate = _, rescale()) : interpolate;
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function(t, u) {
        transform = t, untransform = u;
        return rescale();
    };
}
function continuous() {
    return transformer()(identity, identity);
}
exports.default = continuous;

},{"d3-array":"e6yVq","d3-interpolate":"e7XwA","./constant.js":"a5Wmk","./number.js":"1cJLd","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"a5Wmk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function constants(x) {
    return function() {
        return x;
    };
}
exports.default = constants;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1cJLd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function number(x) {
    return +x;
}
exports.default = number;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1dqFI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
var _d3Format = require("d3-format");
function tickFormat(start, stop, count, specifier) {
    var step = _d3Array.tickStep(start, stop, count), precision;
    specifier = _d3Format.formatSpecifier(specifier == null ? ",f" : specifier);
    switch(specifier.type){
        case "s":
            var value = Math.max(Math.abs(start), Math.abs(stop));
            if (specifier.precision == null && !isNaN(precision = _d3Format.precisionPrefix(step, value))) specifier.precision = precision;
            return _d3Format.formatPrefix(specifier, value);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
            if (specifier.precision == null && !isNaN(precision = _d3Format.precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
            break;
        case "f":
        case "%":
            if (specifier.precision == null && !isNaN(precision = _d3Format.precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
            break;
    }
    return _d3Format.format(specifier);
}
exports.default = tickFormat;

},{"d3-array":"e6yVq","d3-format":"hzInr","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hzInr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatDefaultLocale", ()=>_defaultLocaleJsDefault.default
);
parcelHelpers.export(exports, "format", ()=>_defaultLocaleJs.format
);
parcelHelpers.export(exports, "formatPrefix", ()=>_defaultLocaleJs.formatPrefix
);
parcelHelpers.export(exports, "formatLocale", ()=>_localeJsDefault.default
);
parcelHelpers.export(exports, "formatSpecifier", ()=>_formatSpecifierJsDefault.default
);
parcelHelpers.export(exports, "FormatSpecifier", ()=>_formatSpecifierJs.FormatSpecifier
);
parcelHelpers.export(exports, "precisionFixed", ()=>_precisionFixedJsDefault.default
);
parcelHelpers.export(exports, "precisionPrefix", ()=>_precisionPrefixJsDefault.default
);
parcelHelpers.export(exports, "precisionRound", ()=>_precisionRoundJsDefault.default
);
var _defaultLocaleJs = require("./defaultLocale.js");
var _defaultLocaleJsDefault = parcelHelpers.interopDefault(_defaultLocaleJs);
var _localeJs = require("./locale.js");
var _localeJsDefault = parcelHelpers.interopDefault(_localeJs);
var _formatSpecifierJs = require("./formatSpecifier.js");
var _formatSpecifierJsDefault = parcelHelpers.interopDefault(_formatSpecifierJs);
var _precisionFixedJs = require("./precisionFixed.js");
var _precisionFixedJsDefault = parcelHelpers.interopDefault(_precisionFixedJs);
var _precisionPrefixJs = require("./precisionPrefix.js");
var _precisionPrefixJsDefault = parcelHelpers.interopDefault(_precisionPrefixJs);
var _precisionRoundJs = require("./precisionRound.js");
var _precisionRoundJsDefault = parcelHelpers.interopDefault(_precisionRoundJs);

},{"./defaultLocale.js":"2xO5L","./locale.js":"j5r27","./formatSpecifier.js":"55yO4","./precisionFixed.js":"e3JIq","./precisionPrefix.js":"7GxX5","./precisionRound.js":"1ZF1R","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2xO5L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "format", ()=>format
);
parcelHelpers.export(exports, "formatPrefix", ()=>formatPrefix
);
var _localeJs = require("./locale.js");
var _localeJsDefault = parcelHelpers.interopDefault(_localeJs);
var locale;
var format;
var formatPrefix;
defaultLocale({
    thousands: ",",
    grouping: [
        3
    ],
    currency: [
        "$",
        ""
    ]
});
function defaultLocale(definition) {
    locale = _localeJsDefault.default(definition);
    format = locale.format;
    formatPrefix = locale.formatPrefix;
    return locale;
}
exports.default = defaultLocale;

},{"./locale.js":"j5r27","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"j5r27":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _exponentJs = require("./exponent.js");
var _exponentJsDefault = parcelHelpers.interopDefault(_exponentJs);
var _formatGroupJs = require("./formatGroup.js");
var _formatGroupJsDefault = parcelHelpers.interopDefault(_formatGroupJs);
var _formatNumeralsJs = require("./formatNumerals.js");
var _formatNumeralsJsDefault = parcelHelpers.interopDefault(_formatNumeralsJs);
var _formatSpecifierJs = require("./formatSpecifier.js");
var _formatSpecifierJsDefault = parcelHelpers.interopDefault(_formatSpecifierJs);
var _formatTrimJs = require("./formatTrim.js");
var _formatTrimJsDefault = parcelHelpers.interopDefault(_formatTrimJs);
var _formatTypesJs = require("./formatTypes.js");
var _formatTypesJsDefault = parcelHelpers.interopDefault(_formatTypesJs);
var _formatPrefixAutoJs = require("./formatPrefixAuto.js");
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var map = Array.prototype.map, prefixes = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "µ",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y"
];
exports.default = function(locale) {
    var group = locale.grouping === undefined || locale.thousands === undefined ? _identityJsDefault.default : _formatGroupJsDefault.default(map.call(locale.grouping, Number), locale.thousands + ""), currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "", currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "", decimal = locale.decimal === undefined ? "." : locale.decimal + "", numerals = locale.numerals === undefined ? _identityJsDefault.default : _formatNumeralsJsDefault.default(map.call(locale.numerals, String)), percent = locale.percent === undefined ? "%" : locale.percent + "", minus = locale.minus === undefined ? "−" : locale.minus + "", nan = locale.nan === undefined ? "NaN" : locale.nan + "";
    function newFormat(specifier) {
        specifier = _formatSpecifierJsDefault.default(specifier);
        var fill = specifier.fill, align = specifier.align, sign = specifier.sign, symbol = specifier.symbol, zero = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
        // The "n" type is an alias for ",g".
        if (type === "n") comma = true, type = "g";
        else if (!_formatTypesJsDefault.default[type]) precision === undefined && (precision = 12), trim = true, type = "g";
        // If zero fill is specified, padding goes after sign and before digits.
        if (zero || fill === "0" && align === "=") zero = true, fill = "0", align = "=";
        // Compute the prefix and suffix.
        // For SI-prefix, the suffix is lazily computed.
        var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
        // What format function should we use?
        // Is this an integer type?
        // Can this type generate exponential notation?
        var formatType = _formatTypesJsDefault.default[type], maybeSuffix = /[defgprs%]/.test(type);
        // Set the default precision if not specified,
        // or clamp the specified precision to the supported range.
        // For significant precision, it must be in [1, 21].
        // For fixed precision, it must be in [0, 20].
        precision = precision === undefined ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
        function format(value) {
            var valuePrefix = prefix, valueSuffix = suffix, i, n, c;
            if (type === "c") {
                valueSuffix = formatType(value) + valueSuffix;
                value = "";
            } else {
                value = +value;
                // Determine the sign. -0 is not less than 0, but 1 / -0 is!
                var valueNegative = value < 0 || 1 / value < 0;
                // Perform the initial formatting.
                value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
                // Trim insignificant zeros.
                if (trim) value = _formatTrimJsDefault.default(value);
                // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
                if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;
                // Compute the prefix and suffix.
                valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
                valueSuffix = (type === "s" ? prefixes[8 + _formatPrefixAutoJs.prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");
                // Break the formatted value into the integer “value” part that can be
                // grouped, and fractional or exponential “suffix” part that is not.
                if (maybeSuffix) {
                    i = -1, n = value.length;
                    while(++i < n)if (c = value.charCodeAt(i), 48 > c || c > 57) {
                        valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                        value = value.slice(0, i);
                        break;
                    }
                }
            }
            // If the fill character is not "0", grouping is applied before padding.
            if (comma && !zero) value = group(value, Infinity);
            // Compute the padding.
            var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
            // If the fill character is "0", grouping is applied after padding.
            if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
            // Reconstruct the final output based on the desired alignment.
            switch(align){
                case "<":
                    value = valuePrefix + value + valueSuffix + padding;
                    break;
                case "=":
                    value = valuePrefix + padding + value + valueSuffix;
                    break;
                case "^":
                    value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
                    break;
                default:
                    value = padding + valuePrefix + value + valueSuffix;
                    break;
            }
            return numerals(value);
        }
        format.toString = function() {
            return specifier + "";
        };
        return format;
    }
    function formatPrefix(specifier, value1) {
        var f = newFormat((specifier = _formatSpecifierJsDefault.default(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(_exponentJsDefault.default(value1) / 3))) * 3, k = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
        return function(value) {
            return f(k * value) + prefix;
        };
    }
    return {
        format: newFormat,
        formatPrefix: formatPrefix
    };
};

},{"./exponent.js":"6DGHE","./formatGroup.js":"cmI8S","./formatNumerals.js":"eiMiB","./formatSpecifier.js":"55yO4","./formatTrim.js":"4KDv5","./formatTypes.js":"8CE7u","./formatPrefixAuto.js":"4a8Al","./identity.js":"dcSc8","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6DGHE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _formatDecimalJs = require("./formatDecimal.js");
exports.default = function(x) {
    return x = _formatDecimalJs.formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
};

},{"./formatDecimal.js":"eFLdP","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eFLdP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimalParts(1.23) returns ["123", 0].
parcelHelpers.export(exports, "formatDecimalParts", ()=>formatDecimalParts
);
exports.default = function(x) {
    return Math.abs(x = Math.round(x)) >= 1000000000000000000000 ? x.toLocaleString("en").replace(/,/g, "") : x.toString(10);
};
function formatDecimalParts(x, p) {
    if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
    var i, coefficient = x.slice(0, i);
    // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
    // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
    return [
        coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
        +x.slice(i + 1)
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cmI8S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(grouping, thousands) {
    return function(value, width) {
        var i = value.length, t = [], j = 0, g = grouping[0], length = 0;
        while(i > 0 && g > 0){
            if (length + g + 1 > width) g = Math.max(1, width - length);
            t.push(value.substring(i -= g, i + g));
            if ((length += g + 1) > width) break;
            g = grouping[j = (j + 1) % grouping.length];
        }
        return t.reverse().join(thousands);
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eiMiB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(numerals) {
    return function(value) {
        return value.replace(/[0-9]/g, function(i) {
            return numerals[+i];
        });
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"55yO4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FormatSpecifier", ()=>FormatSpecifier
);
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
    if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
    var match;
    return new FormatSpecifier({
        fill: match[1],
        align: match[2],
        sign: match[3],
        symbol: match[4],
        zero: match[5],
        width: match[6],
        comma: match[7],
        precision: match[8] && match[8].slice(1),
        trim: match[9],
        type: match[10]
    });
}
exports.default = formatSpecifier;
formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof
function FormatSpecifier(specifier) {
    this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
    this.align = specifier.align === undefined ? ">" : specifier.align + "";
    this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
    this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
    this.zero = !!specifier.zero;
    this.width = specifier.width === undefined ? undefined : +specifier.width;
    this.comma = !!specifier.comma;
    this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
    this.trim = !!specifier.trim;
    this.type = specifier.type === undefined ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === undefined ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4KDv5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(s) {
    out: for(var n = s.length, i = 1, i0 = -1, i1; i < n; ++i)switch(s[i]){
        case ".":
            i0 = i1 = i;
            break;
        case "0":
            if (i0 === 0) i0 = i;
            i1 = i;
            break;
        default:
            if (!+s[i]) break out;
            if (i0 > 0) i0 = 0;
            break;
    }
    return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8CE7u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _formatDecimalJs = require("./formatDecimal.js");
var _formatDecimalJsDefault = parcelHelpers.interopDefault(_formatDecimalJs);
var _formatPrefixAutoJs = require("./formatPrefixAuto.js");
var _formatPrefixAutoJsDefault = parcelHelpers.interopDefault(_formatPrefixAutoJs);
var _formatRoundedJs = require("./formatRounded.js");
var _formatRoundedJsDefault = parcelHelpers.interopDefault(_formatRoundedJs);
exports.default = {
    "%": (x, p)=>(x * 100).toFixed(p)
    ,
    "b": (x)=>Math.round(x).toString(2)
    ,
    "c": (x)=>x + ""
    ,
    "d": _formatDecimalJsDefault.default,
    "e": (x, p)=>x.toExponential(p)
    ,
    "f": (x, p)=>x.toFixed(p)
    ,
    "g": (x, p)=>x.toPrecision(p)
    ,
    "o": (x)=>Math.round(x).toString(8)
    ,
    "p": (x, p)=>_formatRoundedJsDefault.default(x * 100, p)
    ,
    "r": _formatRoundedJsDefault.default,
    "s": _formatPrefixAutoJsDefault.default,
    "X": (x)=>Math.round(x).toString(16).toUpperCase()
    ,
    "x": (x)=>Math.round(x).toString(16)
};

},{"./formatDecimal.js":"eFLdP","./formatPrefixAuto.js":"4a8Al","./formatRounded.js":"lzDqS","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4a8Al":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "prefixExponent", ()=>prefixExponent
);
var _formatDecimalJs = require("./formatDecimal.js");
var prefixExponent;
exports.default = function(x, p) {
    var d = _formatDecimalJs.formatDecimalParts(x, p);
    if (!d) return x + "";
    var coefficient = d[0], exponent = d[1], i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n = coefficient.length;
    return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + _formatDecimalJs.formatDecimalParts(x, Math.max(0, p + i - 1))[0]; // less than 1y!
};

},{"./formatDecimal.js":"eFLdP","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lzDqS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _formatDecimalJs = require("./formatDecimal.js");
exports.default = function(x, p) {
    var d = _formatDecimalJs.formatDecimalParts(x, p);
    if (!d) return x + "";
    var coefficient = d[0], exponent = d[1];
    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
};

},{"./formatDecimal.js":"eFLdP","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dcSc8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(x) {
    return x;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"e3JIq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _exponentJs = require("./exponent.js");
var _exponentJsDefault = parcelHelpers.interopDefault(_exponentJs);
exports.default = function(step) {
    return Math.max(0, -_exponentJsDefault.default(Math.abs(step)));
};

},{"./exponent.js":"6DGHE","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7GxX5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _exponentJs = require("./exponent.js");
var _exponentJsDefault = parcelHelpers.interopDefault(_exponentJs);
exports.default = function(step, value) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(_exponentJsDefault.default(value) / 3))) * 3 - _exponentJsDefault.default(Math.abs(step)));
};

},{"./exponent.js":"6DGHE","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1ZF1R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _exponentJs = require("./exponent.js");
var _exponentJsDefault = parcelHelpers.interopDefault(_exponentJs);
exports.default = function(step, max) {
    step = Math.abs(step), max = Math.abs(max) - step;
    return Math.max(0, _exponentJsDefault.default(max) - _exponentJsDefault.default(step)) + 1;
};

},{"./exponent.js":"6DGHE","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8gycm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loggish", ()=>loggish
);
var _d3Array = require("d3-array");
var _d3Format = require("d3-format");
var _niceJs = require("./nice.js");
var _niceJsDefault = parcelHelpers.interopDefault(_niceJs);
var _continuousJs = require("./continuous.js");
var _initJs = require("./init.js");
function transformLog(x) {
    return Math.log(x);
}
function transformExp(x) {
    return Math.exp(x);
}
function transformLogn(x) {
    return -Math.log(-x);
}
function transformExpn(x) {
    return -Math.exp(-x);
}
function pow10(x) {
    return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}
function powp(base) {
    return base === 10 ? pow10 : base === Math.E ? Math.exp : (x)=>Math.pow(base, x)
    ;
}
function logp(base) {
    return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), (x)=>Math.log(x) / base
    );
}
function reflect(f) {
    return (x, k)=>-f(-x, k)
    ;
}
function loggish(transform) {
    const scale = transform(transformLog, transformExp);
    const domain = scale.domain;
    let base = 10;
    let logs;
    let pows;
    function rescale() {
        logs = logp(base), pows = powp(base);
        if (domain()[0] < 0) {
            logs = reflect(logs), pows = reflect(pows);
            transform(transformLogn, transformExpn);
        } else transform(transformLog, transformExp);
        return scale;
    }
    scale.base = function(_) {
        return arguments.length ? (base = +_, rescale()) : base;
    };
    scale.domain = function(_) {
        return arguments.length ? (domain(_), rescale()) : domain();
    };
    scale.ticks = (count)=>{
        const d = domain();
        let u = d[0];
        let v = d[d.length - 1];
        const r = v < u;
        if (r) [u, v] = [
            v,
            u
        ];
        let i = logs(u);
        let j = logs(v);
        let k;
        let t;
        const n = count == null ? 10 : +count;
        let z = [];
        if (!(base % 1) && j - i < n) {
            i = Math.floor(i), j = Math.ceil(j);
            if (u > 0) for(; i <= j; ++i)for(k = 1; k < base; ++k){
                t = i < 0 ? k / pows(-i) : k * pows(i);
                if (t < u) continue;
                if (t > v) break;
                z.push(t);
            }
            else for(; i <= j; ++i)for(k = base - 1; k >= 1; --k){
                t = i > 0 ? k / pows(-i) : k * pows(i);
                if (t < u) continue;
                if (t > v) break;
                z.push(t);
            }
            if (z.length * 2 < n) z = _d3Array.ticks(u, v, n);
        } else z = _d3Array.ticks(i, j, Math.min(j - i, n)).map(pows);
        return r ? z.reverse() : z;
    };
    scale.tickFormat = (count, specifier)=>{
        if (count == null) count = 10;
        if (specifier == null) specifier = base === 10 ? "s" : ",";
        if (typeof specifier !== "function") {
            if (!(base % 1) && (specifier = _d3Format.formatSpecifier(specifier)).precision == null) specifier.trim = true;
            specifier = _d3Format.format(specifier);
        }
        if (count === Infinity) return specifier;
        const k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
        return (d)=>{
            let i = d / pows(Math.round(logs(d)));
            if (i * base < base - 0.5) i *= base;
            return i <= k ? specifier(d) : "";
        };
    };
    scale.nice = ()=>{
        return domain(_niceJsDefault.default(domain(), {
            floor: (x)=>pows(Math.floor(logs(x)))
            ,
            ceil: (x)=>pows(Math.ceil(logs(x)))
        }));
    };
    return scale;
}
function log() {
    const scale = loggish(_continuousJs.transformer()).domain([
        1,
        10
    ]);
    scale.copy = ()=>_continuousJs.copy(scale, log()).base(scale.base())
    ;
    _initJs.initRange.apply(scale, arguments);
    return scale;
}
exports.default = log;

},{"d3-array":"e6yVq","d3-format":"hzInr","./nice.js":"jIY6Z","./continuous.js":"btLMJ","./init.js":"76hF6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jIY6Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function nice(domain, interval) {
    domain = domain.slice();
    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], t;
    if (x1 < x0) {
        t = i0, i0 = i1, i1 = t;
        t = x0, x0 = x1, x1 = t;
    }
    domain[i0] = interval.floor(x0);
    domain[i1] = interval.ceil(x1);
    return domain;
}
exports.default = nice;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"etHgK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "symlogish", ()=>symlogish
);
var _linearJs = require("./linear.js");
var _continuousJs = require("./continuous.js");
var _initJs = require("./init.js");
function transformSymlog(c) {
    return function(x) {
        return Math.sign(x) * Math.log1p(Math.abs(x / c));
    };
}
function transformSymexp(c) {
    return function(x) {
        return Math.sign(x) * Math.expm1(Math.abs(x)) * c;
    };
}
function symlogish(transform) {
    var c = 1, scale = transform(transformSymlog(c), transformSymexp(c));
    scale.constant = function(_) {
        return arguments.length ? transform(transformSymlog(c = +_), transformSymexp(c)) : c;
    };
    return _linearJs.linearish(scale);
}
function symlog() {
    var scale = symlogish(_continuousJs.transformer());
    scale.copy = function() {
        return _continuousJs.copy(scale, symlog()).constant(scale.constant());
    };
    return _initJs.initRange.apply(scale, arguments);
}
exports.default = symlog;

},{"./linear.js":"iCJmQ","./continuous.js":"btLMJ","./init.js":"76hF6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kopvN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "powish", ()=>powish
);
parcelHelpers.export(exports, "sqrt", ()=>sqrt
);
var _linearJs = require("./linear.js");
var _continuousJs = require("./continuous.js");
var _initJs = require("./init.js");
function transformPow(exponent) {
    return function(x) {
        return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
    };
}
function transformSqrt(x) {
    return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
}
function transformSquare(x) {
    return x < 0 ? -x * x : x * x;
}
function powish(transform) {
    var scale = transform(_continuousJs.identity, _continuousJs.identity), exponent = 1;
    function rescale() {
        return exponent === 1 ? transform(_continuousJs.identity, _continuousJs.identity) : exponent === 0.5 ? transform(transformSqrt, transformSquare) : transform(transformPow(exponent), transformPow(1 / exponent));
    }
    scale.exponent = function(_) {
        return arguments.length ? (exponent = +_, rescale()) : exponent;
    };
    return _linearJs.linearish(scale);
}
function pow() {
    var scale = powish(_continuousJs.transformer());
    scale.copy = function() {
        return _continuousJs.copy(scale, pow()).exponent(scale.exponent());
    };
    _initJs.initRange.apply(scale, arguments);
    return scale;
}
exports.default = pow;
function sqrt() {
    return pow.apply(null, arguments).exponent(0.5);
}

},{"./linear.js":"iCJmQ","./continuous.js":"btLMJ","./init.js":"76hF6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hOBjs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _continuousJs = require("./continuous.js");
var _continuousJsDefault = parcelHelpers.interopDefault(_continuousJs);
var _initJs = require("./init.js");
var _linearJs = require("./linear.js");
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
function square(x) {
    return Math.sign(x) * x * x;
}
function unsquare(x) {
    return Math.sign(x) * Math.sqrt(Math.abs(x));
}
function radial() {
    var squared = _continuousJsDefault.default(), range = [
        0,
        1
    ], round = false, unknown;
    function scale(x) {
        var y = unsquare(squared(x));
        return isNaN(y) ? unknown : round ? Math.round(y) : y;
    }
    scale.invert = function(y) {
        return squared.invert(square(y));
    };
    scale.domain = function(_) {
        return arguments.length ? (squared.domain(_), scale) : squared.domain();
    };
    scale.range = function(_) {
        return arguments.length ? (squared.range((range = Array.from(_, _numberJsDefault.default)).map(square)), scale) : range.slice();
    };
    scale.rangeRound = function(_) {
        return scale.range(_).round(true);
    };
    scale.round = function(_) {
        return arguments.length ? (round = !!_, scale) : round;
    };
    scale.clamp = function(_) {
        return arguments.length ? (squared.clamp(_), scale) : squared.clamp();
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
        return radial(squared.domain(), range).round(round).clamp(squared.clamp()).unknown(unknown);
    };
    _initJs.initRange.apply(scale, arguments);
    return _linearJs.linearish(scale);
}
exports.default = radial;

},{"./continuous.js":"btLMJ","./init.js":"76hF6","./linear.js":"iCJmQ","./number.js":"1cJLd","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iT8CK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
var _initJs = require("./init.js");
function quantile() {
    var domain = [], range = [], thresholds = [], unknown;
    function rescale() {
        var i = 0, n = Math.max(1, range.length);
        thresholds = new Array(n - 1);
        while(++i < n)thresholds[i - 1] = _d3Array.quantileSorted(domain, i / n);
        return scale;
    }
    function scale(x) {
        return x == null || isNaN(x = +x) ? unknown : range[_d3Array.bisect(thresholds, x)];
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
        domain.sort(_d3Array.ascending);
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
    return _initJs.initRange.apply(scale, arguments);
}
exports.default = quantile;

},{"d3-array":"e6yVq","./init.js":"76hF6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ec2AM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
var _linearJs = require("./linear.js");
var _initJs = require("./init.js");
function quantize() {
    var x0 = 0, x1 = 1, n = 1, domain = [
        0.5
    ], range = [
        0,
        1
    ], unknown;
    function scale(x) {
        return x != null && x <= x ? range[_d3Array.bisect(domain, x, 0, n)] : unknown;
    }
    function rescale() {
        var i = -1;
        domain = new Array(n);
        while(++i < n)domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
        return scale;
    }
    scale.domain = function(_) {
        return arguments.length ? ([x0, x1] = _, x0 = +x0, x1 = +x1, rescale()) : [
            x0,
            x1
        ];
    };
    scale.range = function(_) {
        return arguments.length ? (n = (range = Array.from(_)).length - 1, rescale()) : range.slice();
    };
    scale.invertExtent = function(y) {
        var i = range.indexOf(y);
        return i < 0 ? [
            NaN,
            NaN
        ] : i < 1 ? [
            x0,
            domain[0]
        ] : i >= n ? [
            domain[n - 1],
            x1
        ] : [
            domain[i - 1],
            domain[i]
        ];
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : scale;
    };
    scale.thresholds = function() {
        return domain.slice();
    };
    scale.copy = function() {
        return quantize().domain([
            x0,
            x1
        ]).range(range).unknown(unknown);
    };
    return _initJs.initRange.apply(_linearJs.linearish(scale), arguments);
}
exports.default = quantize;

},{"d3-array":"e6yVq","./linear.js":"iCJmQ","./init.js":"76hF6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8jaMK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
var _initJs = require("./init.js");
function threshold() {
    var domain = [
        0.5
    ], range = [
        0,
        1
    ], unknown, n = 1;
    function scale(x) {
        return x != null && x <= x ? range[_d3Array.bisect(domain, x, 0, n)] : unknown;
    }
    scale.domain = function(_) {
        return arguments.length ? (domain = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
    };
    scale.range = function(_) {
        return arguments.length ? (range = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
    };
    scale.invertExtent = function(y) {
        var i = range.indexOf(y);
        return [
            domain[i - 1],
            domain[i]
        ];
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
        return threshold().domain(domain).range(range).unknown(unknown);
    };
    return _initJs.initRange.apply(scale, arguments);
}
exports.default = threshold;

},{"d3-array":"e6yVq","./init.js":"76hF6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7jFE4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calendar", ()=>calendar
);
var _d3Time = require("d3-time");
var _d3TimeFormat = require("d3-time-format");
var _continuousJs = require("./continuous.js");
var _continuousJsDefault = parcelHelpers.interopDefault(_continuousJs);
var _initJs = require("./init.js");
var _niceJs = require("./nice.js");
var _niceJsDefault = parcelHelpers.interopDefault(_niceJs);
function date1(t) {
    return new Date(t);
}
function number(t) {
    return t instanceof Date ? +t : +new Date(+t);
}
function calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format) {
    var scale = _continuousJsDefault.default(), invert = scale.invert, domain = scale.domain;
    var formatMillisecond = format(".%L"), formatSecond = format(":%S"), formatMinute = format("%I:%M"), formatHour = format("%I %p"), formatDay = format("%a %d"), formatWeek = format("%b %d"), formatMonth = format("%B"), formatYear = format("%Y");
    function tickFormat(date) {
        return (second(date) < date ? formatMillisecond : minute(date) < date ? formatSecond : hour(date) < date ? formatMinute : day(date) < date ? formatHour : month(date) < date ? week(date) < date ? formatDay : formatWeek : year(date) < date ? formatMonth : formatYear)(date);
    }
    scale.invert = function(y) {
        return new Date(invert(y));
    };
    scale.domain = function(_) {
        return arguments.length ? domain(Array.from(_, number)) : domain().map(date1);
    };
    scale.ticks = function(interval) {
        var d = domain();
        return ticks(d[0], d[d.length - 1], interval == null ? 10 : interval);
    };
    scale.tickFormat = function(count, specifier) {
        return specifier == null ? tickFormat : format(specifier);
    };
    scale.nice = function(interval) {
        var d = domain();
        if (!interval || typeof interval.range !== "function") interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
        return interval ? domain(_niceJsDefault.default(d, interval)) : scale;
    };
    scale.copy = function() {
        return _continuousJs.copy(scale, calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format));
    };
    return scale;
}
function time() {
    return _initJs.initRange.apply(calendar(_d3Time.timeTicks, _d3Time.timeTickInterval, _d3Time.timeYear, _d3Time.timeMonth, _d3Time.timeWeek, _d3Time.timeDay, _d3Time.timeHour, _d3Time.timeMinute, _d3Time.timeSecond, _d3TimeFormat.timeFormat).domain([
        new Date(2000, 0, 1),
        new Date(2000, 0, 2)
    ]), arguments);
}
exports.default = time;

},{"d3-time":"lTNsW","d3-time-format":"ioDBG","./continuous.js":"btLMJ","./init.js":"76hF6","./nice.js":"jIY6Z","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lTNsW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeInterval", ()=>_intervalJsDefault.default
);
parcelHelpers.export(exports, "timeMillisecond", ()=>_millisecondJsDefault.default
);
parcelHelpers.export(exports, "timeMilliseconds", ()=>_millisecondJs.milliseconds
);
parcelHelpers.export(exports, "utcMillisecond", ()=>_millisecondJsDefault.default
);
parcelHelpers.export(exports, "utcMilliseconds", ()=>_millisecondJs.milliseconds
);
parcelHelpers.export(exports, "timeSecond", ()=>_secondJsDefault.default
);
parcelHelpers.export(exports, "timeSeconds", ()=>_secondJs.seconds
);
parcelHelpers.export(exports, "utcSecond", ()=>_secondJsDefault.default
);
parcelHelpers.export(exports, "utcSeconds", ()=>_secondJs.seconds
);
parcelHelpers.export(exports, "timeMinute", ()=>_minuteJsDefault.default
);
parcelHelpers.export(exports, "timeMinutes", ()=>_minuteJs.minutes
);
parcelHelpers.export(exports, "timeHour", ()=>_hourJsDefault.default
);
parcelHelpers.export(exports, "timeHours", ()=>_hourJs.hours
);
parcelHelpers.export(exports, "timeDay", ()=>_dayJsDefault.default
);
parcelHelpers.export(exports, "timeDays", ()=>_dayJs.days
);
parcelHelpers.export(exports, "timeWeek", ()=>_weekJs.sunday
);
parcelHelpers.export(exports, "timeWeeks", ()=>_weekJs.sundays
);
parcelHelpers.export(exports, "timeSunday", ()=>_weekJs.sunday
);
parcelHelpers.export(exports, "timeSundays", ()=>_weekJs.sundays
);
parcelHelpers.export(exports, "timeMonday", ()=>_weekJs.monday
);
parcelHelpers.export(exports, "timeMondays", ()=>_weekJs.mondays
);
parcelHelpers.export(exports, "timeTuesday", ()=>_weekJs.tuesday
);
parcelHelpers.export(exports, "timeTuesdays", ()=>_weekJs.tuesdays
);
parcelHelpers.export(exports, "timeWednesday", ()=>_weekJs.wednesday
);
parcelHelpers.export(exports, "timeWednesdays", ()=>_weekJs.wednesdays
);
parcelHelpers.export(exports, "timeThursday", ()=>_weekJs.thursday
);
parcelHelpers.export(exports, "timeThursdays", ()=>_weekJs.thursdays
);
parcelHelpers.export(exports, "timeFriday", ()=>_weekJs.friday
);
parcelHelpers.export(exports, "timeFridays", ()=>_weekJs.fridays
);
parcelHelpers.export(exports, "timeSaturday", ()=>_weekJs.saturday
);
parcelHelpers.export(exports, "timeSaturdays", ()=>_weekJs.saturdays
);
parcelHelpers.export(exports, "timeMonth", ()=>_monthJsDefault.default
);
parcelHelpers.export(exports, "timeMonths", ()=>_monthJs.months
);
parcelHelpers.export(exports, "timeYear", ()=>_yearJsDefault.default
);
parcelHelpers.export(exports, "timeYears", ()=>_yearJs.years
);
parcelHelpers.export(exports, "utcMinute", ()=>_utcMinuteJsDefault.default
);
parcelHelpers.export(exports, "utcMinutes", ()=>_utcMinuteJs.utcMinutes
);
parcelHelpers.export(exports, "utcHour", ()=>_utcHourJsDefault.default
);
parcelHelpers.export(exports, "utcHours", ()=>_utcHourJs.utcHours
);
parcelHelpers.export(exports, "utcDay", ()=>_utcDayJsDefault.default
);
parcelHelpers.export(exports, "utcDays", ()=>_utcDayJs.utcDays
);
parcelHelpers.export(exports, "utcWeek", ()=>_utcWeekJs.utcSunday
);
parcelHelpers.export(exports, "utcWeeks", ()=>_utcWeekJs.utcSundays
);
parcelHelpers.export(exports, "utcSunday", ()=>_utcWeekJs.utcSunday
);
parcelHelpers.export(exports, "utcSundays", ()=>_utcWeekJs.utcSundays
);
parcelHelpers.export(exports, "utcMonday", ()=>_utcWeekJs.utcMonday
);
parcelHelpers.export(exports, "utcMondays", ()=>_utcWeekJs.utcMondays
);
parcelHelpers.export(exports, "utcTuesday", ()=>_utcWeekJs.utcTuesday
);
parcelHelpers.export(exports, "utcTuesdays", ()=>_utcWeekJs.utcTuesdays
);
parcelHelpers.export(exports, "utcWednesday", ()=>_utcWeekJs.utcWednesday
);
parcelHelpers.export(exports, "utcWednesdays", ()=>_utcWeekJs.utcWednesdays
);
parcelHelpers.export(exports, "utcThursday", ()=>_utcWeekJs.utcThursday
);
parcelHelpers.export(exports, "utcThursdays", ()=>_utcWeekJs.utcThursdays
);
parcelHelpers.export(exports, "utcFriday", ()=>_utcWeekJs.utcFriday
);
parcelHelpers.export(exports, "utcFridays", ()=>_utcWeekJs.utcFridays
);
parcelHelpers.export(exports, "utcSaturday", ()=>_utcWeekJs.utcSaturday
);
parcelHelpers.export(exports, "utcSaturdays", ()=>_utcWeekJs.utcSaturdays
);
parcelHelpers.export(exports, "utcMonth", ()=>_utcMonthJsDefault.default
);
parcelHelpers.export(exports, "utcMonths", ()=>_utcMonthJs.utcMonths
);
parcelHelpers.export(exports, "utcYear", ()=>_utcYearJsDefault.default
);
parcelHelpers.export(exports, "utcYears", ()=>_utcYearJs.utcYears
);
parcelHelpers.export(exports, "utcTicks", ()=>_ticksJs.utcTicks
);
parcelHelpers.export(exports, "utcTickInterval", ()=>_ticksJs.utcTickInterval
);
parcelHelpers.export(exports, "timeTicks", ()=>_ticksJs.timeTicks
);
parcelHelpers.export(exports, "timeTickInterval", ()=>_ticksJs.timeTickInterval
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _millisecondJs = require("./millisecond.js");
var _millisecondJsDefault = parcelHelpers.interopDefault(_millisecondJs);
var _secondJs = require("./second.js");
var _secondJsDefault = parcelHelpers.interopDefault(_secondJs);
var _minuteJs = require("./minute.js");
var _minuteJsDefault = parcelHelpers.interopDefault(_minuteJs);
var _hourJs = require("./hour.js");
var _hourJsDefault = parcelHelpers.interopDefault(_hourJs);
var _dayJs = require("./day.js");
var _dayJsDefault = parcelHelpers.interopDefault(_dayJs);
var _weekJs = require("./week.js");
var _monthJs = require("./month.js");
var _monthJsDefault = parcelHelpers.interopDefault(_monthJs);
var _yearJs = require("./year.js");
var _yearJsDefault = parcelHelpers.interopDefault(_yearJs);
var _utcMinuteJs = require("./utcMinute.js");
var _utcMinuteJsDefault = parcelHelpers.interopDefault(_utcMinuteJs);
var _utcHourJs = require("./utcHour.js");
var _utcHourJsDefault = parcelHelpers.interopDefault(_utcHourJs);
var _utcDayJs = require("./utcDay.js");
var _utcDayJsDefault = parcelHelpers.interopDefault(_utcDayJs);
var _utcWeekJs = require("./utcWeek.js");
var _utcMonthJs = require("./utcMonth.js");
var _utcMonthJsDefault = parcelHelpers.interopDefault(_utcMonthJs);
var _utcYearJs = require("./utcYear.js");
var _utcYearJsDefault = parcelHelpers.interopDefault(_utcYearJs);
var _ticksJs = require("./ticks.js");

},{"./interval.js":"1URbY","./millisecond.js":"66wfU","./second.js":"5eoNm","./minute.js":"aOzRP","./hour.js":"9ciXB","./day.js":"4ezR6","./week.js":"3sfLK","./month.js":"JdgMj","./year.js":"46skd","./utcMinute.js":"bCnA8","./utcHour.js":"aBqtx","./utcDay.js":"aeQbv","./utcWeek.js":"995oO","./utcMonth.js":"8QbLN","./utcYear.js":"92RpU","./ticks.js":"fdOaC","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1URbY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var t0 = new Date, t1 = new Date;
function newInterval(floori, offseti, count, field) {
    function interval(date) {
        return floori(date = arguments.length === 0 ? new Date : new Date(+date)), date;
    }
    interval.floor = function(date) {
        return floori(date = new Date(+date)), date;
    };
    interval.ceil = function(date) {
        return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
    };
    interval.round = function(date) {
        var d0 = interval(date), d1 = interval.ceil(date);
        return date - d0 < d1 - date ? d0 : d1;
    };
    interval.offset = function(date, step) {
        return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
    };
    interval.range = function(start, stop, step) {
        var range = [], previous;
        start = interval.ceil(start);
        step = step == null ? 1 : Math.floor(step);
        if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
        do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
        while (previous < start && start < stop)
        return range;
    };
    interval.filter = function(test) {
        return newInterval(function(date) {
            if (date >= date) while(floori(date), !test(date))date.setTime(date - 1);
        }, function(date, step) {
            if (date >= date) {
                if (step < 0) while(++step <= 0){
                    while(offseti(date, -1), !test(date)); // eslint-disable-line no-empty
                }
                else while(--step >= 0){
                    while(offseti(date, 1), !test(date)); // eslint-disable-line no-empty
                }
            }
        });
    };
    if (count) {
        interval.count = function(start, end) {
            t0.setTime(+start), t1.setTime(+end);
            floori(t0), floori(t1);
            return Math.floor(count(t0, t1));
        };
        interval.every = function(step) {
            step = Math.floor(step);
            return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? function(d) {
                return field(d) % step === 0;
            } : function(d) {
                return interval.count(0, d) % step === 0;
            });
        };
    }
    return interval;
}
exports.default = newInterval;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"66wfU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "milliseconds", ()=>milliseconds
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var millisecond = _intervalJsDefault.default(function() {
// noop
}, function(date, step) {
    date.setTime(+date + step);
}, function(start, end) {
    return end - start;
});
// An optimized implementation for this simple case.
millisecond.every = function(k) {
    k = Math.floor(k);
    if (!isFinite(k) || !(k > 0)) return null;
    if (!(k > 1)) return millisecond;
    return _intervalJsDefault.default(function(date) {
        date.setTime(Math.floor(date / k) * k);
    }, function(date, step) {
        date.setTime(+date + step * k);
    }, function(start, end) {
        return (end - start) / k;
    });
};
exports.default = millisecond;
var milliseconds = millisecond.range;

},{"./interval.js":"1URbY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5eoNm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "seconds", ()=>seconds
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _durationJs = require("./duration.js");
var second = _intervalJsDefault.default(function(date) {
    date.setTime(date - date.getMilliseconds());
}, function(date, step) {
    date.setTime(+date + step * _durationJs.durationSecond);
}, function(start, end) {
    return (end - start) / _durationJs.durationSecond;
}, function(date) {
    return date.getUTCSeconds();
});
exports.default = second;
var seconds = second.range;

},{"./interval.js":"1URbY","./duration.js":"66j9W","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"66j9W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "durationSecond", ()=>durationSecond
);
parcelHelpers.export(exports, "durationMinute", ()=>durationMinute
);
parcelHelpers.export(exports, "durationHour", ()=>durationHour
);
parcelHelpers.export(exports, "durationDay", ()=>durationDay
);
parcelHelpers.export(exports, "durationWeek", ()=>durationWeek
);
parcelHelpers.export(exports, "durationMonth", ()=>durationMonth
);
parcelHelpers.export(exports, "durationYear", ()=>durationYear
);
const durationSecond = 1000;
const durationMinute = durationSecond * 60;
const durationHour = durationMinute * 60;
const durationDay = durationHour * 24;
const durationWeek = durationDay * 7;
const durationMonth = durationDay * 30;
const durationYear = durationDay * 365;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aOzRP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "minutes", ()=>minutes
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _durationJs = require("./duration.js");
var minute = _intervalJsDefault.default(function(date) {
    date.setTime(date - date.getMilliseconds() - date.getSeconds() * _durationJs.durationSecond);
}, function(date, step) {
    date.setTime(+date + step * _durationJs.durationMinute);
}, function(start, end) {
    return (end - start) / _durationJs.durationMinute;
}, function(date) {
    return date.getMinutes();
});
exports.default = minute;
var minutes = minute.range;

},{"./interval.js":"1URbY","./duration.js":"66j9W","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9ciXB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hours", ()=>hours
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _durationJs = require("./duration.js");
var hour = _intervalJsDefault.default(function(date) {
    date.setTime(date - date.getMilliseconds() - date.getSeconds() * _durationJs.durationSecond - date.getMinutes() * _durationJs.durationMinute);
}, function(date, step) {
    date.setTime(+date + step * _durationJs.durationHour);
}, function(start, end) {
    return (end - start) / _durationJs.durationHour;
}, function(date) {
    return date.getHours();
});
exports.default = hour;
var hours = hour.range;

},{"./interval.js":"1URbY","./duration.js":"66j9W","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4ezR6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "days", ()=>days
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _durationJs = require("./duration.js");
var day = _intervalJsDefault.default((date)=>date.setHours(0, 0, 0, 0)
, (date, step)=>date.setDate(date.getDate() + step)
, (start, end)=>(end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _durationJs.durationMinute) / _durationJs.durationDay
, (date)=>date.getDate() - 1
);
exports.default = day;
var days = day.range;

},{"./interval.js":"1URbY","./duration.js":"66j9W","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3sfLK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sunday", ()=>sunday
);
parcelHelpers.export(exports, "monday", ()=>monday
);
parcelHelpers.export(exports, "tuesday", ()=>tuesday
);
parcelHelpers.export(exports, "wednesday", ()=>wednesday
);
parcelHelpers.export(exports, "thursday", ()=>thursday
);
parcelHelpers.export(exports, "friday", ()=>friday
);
parcelHelpers.export(exports, "saturday", ()=>saturday
);
parcelHelpers.export(exports, "sundays", ()=>sundays
);
parcelHelpers.export(exports, "mondays", ()=>mondays
);
parcelHelpers.export(exports, "tuesdays", ()=>tuesdays
);
parcelHelpers.export(exports, "wednesdays", ()=>wednesdays
);
parcelHelpers.export(exports, "thursdays", ()=>thursdays
);
parcelHelpers.export(exports, "fridays", ()=>fridays
);
parcelHelpers.export(exports, "saturdays", ()=>saturdays
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _durationJs = require("./duration.js");
function weekday(i) {
    return _intervalJsDefault.default(function(date) {
        date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
        date.setHours(0, 0, 0, 0);
    }, function(date, step) {
        date.setDate(date.getDate() + step * 7);
    }, function(start, end) {
        return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _durationJs.durationMinute) / _durationJs.durationWeek;
    });
}
var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);
var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;

},{"./interval.js":"1URbY","./duration.js":"66j9W","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"JdgMj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "months", ()=>months
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var month = _intervalJsDefault.default(function(date) {
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
}, function(date, step) {
    date.setMonth(date.getMonth() + step);
}, function(start, end) {
    return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
    return date.getMonth();
});
exports.default = month;
var months = month.range;

},{"./interval.js":"1URbY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"46skd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "years", ()=>years
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var year = _intervalJsDefault.default(function(date) {
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
}, function(date, step) {
    date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
    return end.getFullYear() - start.getFullYear();
}, function(date) {
    return date.getFullYear();
});
// An optimized implementation for this simple case.
year.every = function(k) {
    return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : _intervalJsDefault.default(function(date) {
        date.setFullYear(Math.floor(date.getFullYear() / k) * k);
        date.setMonth(0, 1);
        date.setHours(0, 0, 0, 0);
    }, function(date, step) {
        date.setFullYear(date.getFullYear() + step * k);
    });
};
exports.default = year;
var years = year.range;

},{"./interval.js":"1URbY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bCnA8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "utcMinutes", ()=>utcMinutes
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _durationJs = require("./duration.js");
var utcMinute = _intervalJsDefault.default(function(date) {
    date.setUTCSeconds(0, 0);
}, function(date, step) {
    date.setTime(+date + step * _durationJs.durationMinute);
}, function(start, end) {
    return (end - start) / _durationJs.durationMinute;
}, function(date) {
    return date.getUTCMinutes();
});
exports.default = utcMinute;
var utcMinutes = utcMinute.range;

},{"./interval.js":"1URbY","./duration.js":"66j9W","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aBqtx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "utcHours", ()=>utcHours
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _durationJs = require("./duration.js");
var utcHour = _intervalJsDefault.default(function(date) {
    date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
    date.setTime(+date + step * _durationJs.durationHour);
}, function(start, end) {
    return (end - start) / _durationJs.durationHour;
}, function(date) {
    return date.getUTCHours();
});
exports.default = utcHour;
var utcHours = utcHour.range;

},{"./interval.js":"1URbY","./duration.js":"66j9W","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aeQbv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "utcDays", ()=>utcDays
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _durationJs = require("./duration.js");
var utcDay = _intervalJsDefault.default(function(date) {
    date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
    return (end - start) / _durationJs.durationDay;
}, function(date) {
    return date.getUTCDate() - 1;
});
exports.default = utcDay;
var utcDays = utcDay.range;

},{"./interval.js":"1URbY","./duration.js":"66j9W","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"995oO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "utcSunday", ()=>utcSunday
);
parcelHelpers.export(exports, "utcMonday", ()=>utcMonday
);
parcelHelpers.export(exports, "utcTuesday", ()=>utcTuesday
);
parcelHelpers.export(exports, "utcWednesday", ()=>utcWednesday
);
parcelHelpers.export(exports, "utcThursday", ()=>utcThursday
);
parcelHelpers.export(exports, "utcFriday", ()=>utcFriday
);
parcelHelpers.export(exports, "utcSaturday", ()=>utcSaturday
);
parcelHelpers.export(exports, "utcSundays", ()=>utcSundays
);
parcelHelpers.export(exports, "utcMondays", ()=>utcMondays
);
parcelHelpers.export(exports, "utcTuesdays", ()=>utcTuesdays
);
parcelHelpers.export(exports, "utcWednesdays", ()=>utcWednesdays
);
parcelHelpers.export(exports, "utcThursdays", ()=>utcThursdays
);
parcelHelpers.export(exports, "utcFridays", ()=>utcFridays
);
parcelHelpers.export(exports, "utcSaturdays", ()=>utcSaturdays
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _durationJs = require("./duration.js");
function utcWeekday(i) {
    return _intervalJsDefault.default(function(date) {
        date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
        date.setUTCHours(0, 0, 0, 0);
    }, function(date, step) {
        date.setUTCDate(date.getUTCDate() + step * 7);
    }, function(start, end) {
        return (end - start) / _durationJs.durationWeek;
    });
}
var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);
var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;

},{"./interval.js":"1URbY","./duration.js":"66j9W","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8QbLN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "utcMonths", ()=>utcMonths
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var utcMonth = _intervalJsDefault.default(function(date) {
    date.setUTCDate(1);
    date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
    date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
    return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
    return date.getUTCMonth();
});
exports.default = utcMonth;
var utcMonths = utcMonth.range;

},{"./interval.js":"1URbY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"92RpU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "utcYears", ()=>utcYears
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var utcYear = _intervalJsDefault.default(function(date) {
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
    return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
    return date.getUTCFullYear();
});
// An optimized implementation for this simple case.
utcYear.every = function(k) {
    return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : _intervalJsDefault.default(function(date) {
        date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
        date.setUTCMonth(0, 1);
        date.setUTCHours(0, 0, 0, 0);
    }, function(date, step) {
        date.setUTCFullYear(date.getUTCFullYear() + step * k);
    });
};
exports.default = utcYear;
var utcYears = utcYear.range;

},{"./interval.js":"1URbY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fdOaC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "utcTicks", ()=>utcTicks
);
parcelHelpers.export(exports, "utcTickInterval", ()=>utcTickInterval
);
parcelHelpers.export(exports, "timeTicks", ()=>timeTicks
);
parcelHelpers.export(exports, "timeTickInterval", ()=>timeTickInterval
);
var _d3Array = require("d3-array");
var _durationJs = require("./duration.js");
var _millisecondJs = require("./millisecond.js");
var _millisecondJsDefault = parcelHelpers.interopDefault(_millisecondJs);
var _secondJs = require("./second.js");
var _secondJsDefault = parcelHelpers.interopDefault(_secondJs);
var _minuteJs = require("./minute.js");
var _minuteJsDefault = parcelHelpers.interopDefault(_minuteJs);
var _hourJs = require("./hour.js");
var _hourJsDefault = parcelHelpers.interopDefault(_hourJs);
var _dayJs = require("./day.js");
var _dayJsDefault = parcelHelpers.interopDefault(_dayJs);
var _weekJs = require("./week.js");
var _monthJs = require("./month.js");
var _monthJsDefault = parcelHelpers.interopDefault(_monthJs);
var _yearJs = require("./year.js");
var _yearJsDefault = parcelHelpers.interopDefault(_yearJs);
var _utcMinuteJs = require("./utcMinute.js");
var _utcMinuteJsDefault = parcelHelpers.interopDefault(_utcMinuteJs);
var _utcHourJs = require("./utcHour.js");
var _utcHourJsDefault = parcelHelpers.interopDefault(_utcHourJs);
var _utcDayJs = require("./utcDay.js");
var _utcDayJsDefault = parcelHelpers.interopDefault(_utcDayJs);
var _utcWeekJs = require("./utcWeek.js");
var _utcMonthJs = require("./utcMonth.js");
var _utcMonthJsDefault = parcelHelpers.interopDefault(_utcMonthJs);
var _utcYearJs = require("./utcYear.js");
var _utcYearJsDefault = parcelHelpers.interopDefault(_utcYearJs);
function ticker(year, month, week, day, hour, minute) {
    const tickIntervals = [
        [
            _secondJsDefault.default,
            1,
            _durationJs.durationSecond
        ],
        [
            _secondJsDefault.default,
            5,
            5 * _durationJs.durationSecond
        ],
        [
            _secondJsDefault.default,
            15,
            15 * _durationJs.durationSecond
        ],
        [
            _secondJsDefault.default,
            30,
            30 * _durationJs.durationSecond
        ],
        [
            minute,
            1,
            _durationJs.durationMinute
        ],
        [
            minute,
            5,
            5 * _durationJs.durationMinute
        ],
        [
            minute,
            15,
            15 * _durationJs.durationMinute
        ],
        [
            minute,
            30,
            30 * _durationJs.durationMinute
        ],
        [
            hour,
            1,
            _durationJs.durationHour
        ],
        [
            hour,
            3,
            3 * _durationJs.durationHour
        ],
        [
            hour,
            6,
            6 * _durationJs.durationHour
        ],
        [
            hour,
            12,
            12 * _durationJs.durationHour
        ],
        [
            day,
            1,
            _durationJs.durationDay
        ],
        [
            day,
            2,
            2 * _durationJs.durationDay
        ],
        [
            week,
            1,
            _durationJs.durationWeek
        ],
        [
            month,
            1,
            _durationJs.durationMonth
        ],
        [
            month,
            3,
            3 * _durationJs.durationMonth
        ],
        [
            year,
            1,
            _durationJs.durationYear
        ]
    ];
    function ticks1(start, stop, count) {
        const reverse = stop < start;
        if (reverse) [start, stop] = [
            stop,
            start
        ];
        const interval = count && typeof count.range === "function" ? count : tickInterval(start, stop, count);
        const ticks = interval ? interval.range(start, +stop + 1) : []; // inclusive stop
        return reverse ? ticks.reverse() : ticks;
    }
    function tickInterval(start, stop, count) {
        const target = Math.abs(stop - start) / count;
        const i = _d3Array.bisector(([, , step])=>step
        ).right(tickIntervals, target);
        if (i === tickIntervals.length) return year.every(_d3Array.tickStep(start / _durationJs.durationYear, stop / _durationJs.durationYear, count));
        if (i === 0) return _millisecondJsDefault.default.every(Math.max(_d3Array.tickStep(start, stop, count), 1));
        const [t, step1] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        return t.every(step1);
    }
    return [
        ticks1,
        tickInterval
    ];
}
const [utcTicks, utcTickInterval] = ticker(_utcYearJsDefault.default, _utcMonthJsDefault.default, _utcWeekJs.utcSunday, _utcDayJsDefault.default, _utcHourJsDefault.default, _utcMinuteJsDefault.default);
const [timeTicks, timeTickInterval] = ticker(_yearJsDefault.default, _monthJsDefault.default, _weekJs.sunday, _dayJsDefault.default, _hourJsDefault.default, _minuteJsDefault.default);

},{"d3-array":"dclxS","./duration.js":"66j9W","./millisecond.js":"66wfU","./second.js":"5eoNm","./minute.js":"aOzRP","./hour.js":"9ciXB","./day.js":"4ezR6","./week.js":"3sfLK","./month.js":"JdgMj","./year.js":"46skd","./utcMinute.js":"bCnA8","./utcHour.js":"aBqtx","./utcDay.js":"aeQbv","./utcWeek.js":"995oO","./utcMonth.js":"8QbLN","./utcYear.js":"92RpU","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ioDBG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeFormatDefaultLocale", ()=>_defaultLocaleJsDefault.default
);
parcelHelpers.export(exports, "timeFormat", ()=>_defaultLocaleJs.timeFormat
);
parcelHelpers.export(exports, "timeParse", ()=>_defaultLocaleJs.timeParse
);
parcelHelpers.export(exports, "utcFormat", ()=>_defaultLocaleJs.utcFormat
);
parcelHelpers.export(exports, "utcParse", ()=>_defaultLocaleJs.utcParse
);
parcelHelpers.export(exports, "timeFormatLocale", ()=>_localeJsDefault.default
);
parcelHelpers.export(exports, "isoFormat", ()=>_isoFormatJsDefault.default
);
parcelHelpers.export(exports, "isoParse", ()=>_isoParseJsDefault.default
);
var _defaultLocaleJs = require("./defaultLocale.js");
var _defaultLocaleJsDefault = parcelHelpers.interopDefault(_defaultLocaleJs);
var _localeJs = require("./locale.js");
var _localeJsDefault = parcelHelpers.interopDefault(_localeJs);
var _isoFormatJs = require("./isoFormat.js");
var _isoFormatJsDefault = parcelHelpers.interopDefault(_isoFormatJs);
var _isoParseJs = require("./isoParse.js");
var _isoParseJsDefault = parcelHelpers.interopDefault(_isoParseJs);

},{"./defaultLocale.js":"jvGVG","./locale.js":"iO59a","./isoFormat.js":"eUcDj","./isoParse.js":"9agvx","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jvGVG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeFormat", ()=>timeFormat
);
parcelHelpers.export(exports, "timeParse", ()=>timeParse
);
parcelHelpers.export(exports, "utcFormat", ()=>utcFormat
);
parcelHelpers.export(exports, "utcParse", ()=>utcParse
);
var _localeJs = require("./locale.js");
var _localeJsDefault = parcelHelpers.interopDefault(_localeJs);
var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;
defaultLocale({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: [
        "AM",
        "PM"
    ],
    days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
    shortDays: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    shortMonths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]
});
function defaultLocale(definition) {
    locale = _localeJsDefault.default(definition);
    timeFormat = locale.format;
    timeParse = locale.parse;
    utcFormat = locale.utcFormat;
    utcParse = locale.utcParse;
    return locale;
}
exports.default = defaultLocale;

},{"./locale.js":"iO59a","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iO59a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Time = require("d3-time");
function localDate(d) {
    if (0 <= d.y && d.y < 100) {
        var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
        date.setFullYear(d.y);
        return date;
    }
    return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
function utcDate(d) {
    if (0 <= d.y && d.y < 100) {
        var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
        date.setUTCFullYear(d.y);
        return date;
    }
    return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
function newDate(y, m, d) {
    return {
        y: y,
        m: m,
        d: d,
        H: 0,
        M: 0,
        S: 0,
        L: 0
    };
}
function formatLocale(locale) {
    var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_weekdays = locale.days, locale_shortWeekdays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths;
    var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
    var formats1 = {
        "a": formatShortWeekday,
        "A": formatWeekday,
        "b": formatShortMonth,
        "B": formatMonth,
        "c": null,
        "d": formatDayOfMonth,
        "e": formatDayOfMonth,
        "f": formatMicroseconds,
        "g": formatYearISO,
        "G": formatFullYearISO,
        "H": formatHour24,
        "I": formatHour12,
        "j": formatDayOfYear,
        "L": formatMilliseconds,
        "m": formatMonthNumber,
        "M": formatMinutes,
        "p": formatPeriod,
        "q": formatQuarter,
        "Q": formatUnixTimestamp,
        "s": formatUnixTimestampSeconds,
        "S": formatSeconds,
        "u": formatWeekdayNumberMonday,
        "U": formatWeekNumberSunday,
        "V": formatWeekNumberISO,
        "w": formatWeekdayNumberSunday,
        "W": formatWeekNumberMonday,
        "x": null,
        "X": null,
        "y": formatYear,
        "Y": formatFullYear,
        "Z": formatZone,
        "%": formatLiteralPercent
    };
    var utcFormats = {
        "a": formatUTCShortWeekday,
        "A": formatUTCWeekday,
        "b": formatUTCShortMonth,
        "B": formatUTCMonth,
        "c": null,
        "d": formatUTCDayOfMonth,
        "e": formatUTCDayOfMonth,
        "f": formatUTCMicroseconds,
        "g": formatUTCYearISO,
        "G": formatUTCFullYearISO,
        "H": formatUTCHour24,
        "I": formatUTCHour12,
        "j": formatUTCDayOfYear,
        "L": formatUTCMilliseconds,
        "m": formatUTCMonthNumber,
        "M": formatUTCMinutes,
        "p": formatUTCPeriod,
        "q": formatUTCQuarter,
        "Q": formatUnixTimestamp,
        "s": formatUnixTimestampSeconds,
        "S": formatUTCSeconds,
        "u": formatUTCWeekdayNumberMonday,
        "U": formatUTCWeekNumberSunday,
        "V": formatUTCWeekNumberISO,
        "w": formatUTCWeekdayNumberSunday,
        "W": formatUTCWeekNumberMonday,
        "x": null,
        "X": null,
        "y": formatUTCYear,
        "Y": formatUTCFullYear,
        "Z": formatUTCZone,
        "%": formatLiteralPercent
    };
    var parses = {
        "a": parseShortWeekday,
        "A": parseWeekday,
        "b": parseShortMonth,
        "B": parseMonth,
        "c": parseLocaleDateTime,
        "d": parseDayOfMonth,
        "e": parseDayOfMonth,
        "f": parseMicroseconds,
        "g": parseYear,
        "G": parseFullYear,
        "H": parseHour24,
        "I": parseHour24,
        "j": parseDayOfYear,
        "L": parseMilliseconds,
        "m": parseMonthNumber,
        "M": parseMinutes,
        "p": parsePeriod,
        "q": parseQuarter,
        "Q": parseUnixTimestamp,
        "s": parseUnixTimestampSeconds,
        "S": parseSeconds,
        "u": parseWeekdayNumberMonday,
        "U": parseWeekNumberSunday,
        "V": parseWeekNumberISO,
        "w": parseWeekdayNumberSunday,
        "W": parseWeekNumberMonday,
        "x": parseLocaleDate,
        "X": parseLocaleTime,
        "y": parseYear,
        "Y": parseFullYear,
        "Z": parseZone,
        "%": parseLiteralPercent
    };
    // These recursive directive definitions must be deferred.
    formats1.x = newFormat(locale_date, formats1);
    formats1.X = newFormat(locale_time, formats1);
    formats1.c = newFormat(locale_dateTime, formats1);
    utcFormats.x = newFormat(locale_date, utcFormats);
    utcFormats.X = newFormat(locale_time, utcFormats);
    utcFormats.c = newFormat(locale_dateTime, utcFormats);
    function newFormat(specifier, formats) {
        return function(date) {
            var string = [], i = -1, j = 0, n = specifier.length, c, pad, format;
            if (!(date instanceof Date)) date = new Date(+date);
            while(++i < n)if (specifier.charCodeAt(i) === 37) {
                string.push(specifier.slice(j, i));
                if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
                else pad = c === "e" ? " " : "0";
                if (format = formats[c]) c = format(date, pad);
                string.push(c);
                j = i + 1;
            }
            string.push(specifier.slice(j, i));
            return string.join("");
        };
    }
    function newParse(specifier, Z) {
        return function(string) {
            var d = newDate(1900, undefined, 1), i = parseSpecifier(d, specifier, string += "", 0), week, day;
            if (i != string.length) return null;
            // If a UNIX timestamp is specified, return it.
            if ("Q" in d) return new Date(d.Q);
            if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0));
            // If this is utcParse, never use the local timezone.
            if (Z && !("Z" in d)) d.Z = 0;
            // The am-pm flag is 0 for AM, and 1 for PM.
            if ("p" in d) d.H = d.H % 12 + d.p * 12;
            // If the month was not specified, inherit from the quarter.
            if (d.m === undefined) d.m = "q" in d ? d.q : 0;
            // Convert day-of-week and week-of-year to day-of-year.
            if ("V" in d) {
                if (d.V < 1 || d.V > 53) return null;
                if (!("w" in d)) d.w = 1;
                if ("Z" in d) {
                    week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
                    week = day > 4 || day === 0 ? _d3Time.utcMonday.ceil(week) : _d3Time.utcMonday(week);
                    week = _d3Time.utcDay.offset(week, (d.V - 1) * 7);
                    d.y = week.getUTCFullYear();
                    d.m = week.getUTCMonth();
                    d.d = week.getUTCDate() + (d.w + 6) % 7;
                } else {
                    week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
                    week = day > 4 || day === 0 ? _d3Time.timeMonday.ceil(week) : _d3Time.timeMonday(week);
                    week = _d3Time.timeDay.offset(week, (d.V - 1) * 7);
                    d.y = week.getFullYear();
                    d.m = week.getMonth();
                    d.d = week.getDate() + (d.w + 6) % 7;
                }
            } else if ("W" in d || "U" in d) {
                if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
                day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
                d.m = 0;
                d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
            }
            // If a time zone is specified, all fields are interpreted as UTC and then
            // offset according to the specified time zone.
            if ("Z" in d) {
                d.H += d.Z / 100 | 0;
                d.M += d.Z % 100;
                return utcDate(d);
            }
            // Otherwise, all fields are in local time.
            return localDate(d);
        };
    }
    function parseSpecifier(d, specifier, string, j) {
        var i = 0, n = specifier.length, m = string.length, c, parse;
        while(i < n){
            if (j >= m) return -1;
            c = specifier.charCodeAt(i++);
            if (c === 37) {
                c = specifier.charAt(i++);
                parse = parses[c in pads ? specifier.charAt(i++) : c];
                if (!parse || (j = parse(d, string, j)) < 0) return -1;
            } else if (c != string.charCodeAt(j++)) return -1;
        }
        return j;
    }
    function parsePeriod(d, string, i) {
        var n = periodRe.exec(string.slice(i));
        return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseShortWeekday(d, string, i) {
        var n = shortWeekdayRe.exec(string.slice(i));
        return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseWeekday(d, string, i) {
        var n = weekdayRe.exec(string.slice(i));
        return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseShortMonth(d, string, i) {
        var n = shortMonthRe.exec(string.slice(i));
        return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseMonth(d, string, i) {
        var n = monthRe.exec(string.slice(i));
        return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseLocaleDateTime(d, string, i) {
        return parseSpecifier(d, locale_dateTime, string, i);
    }
    function parseLocaleDate(d, string, i) {
        return parseSpecifier(d, locale_date, string, i);
    }
    function parseLocaleTime(d, string, i) {
        return parseSpecifier(d, locale_time, string, i);
    }
    function formatShortWeekday(d) {
        return locale_shortWeekdays[d.getDay()];
    }
    function formatWeekday(d) {
        return locale_weekdays[d.getDay()];
    }
    function formatShortMonth(d) {
        return locale_shortMonths[d.getMonth()];
    }
    function formatMonth(d) {
        return locale_months[d.getMonth()];
    }
    function formatPeriod(d) {
        return locale_periods[+(d.getHours() >= 12)];
    }
    function formatQuarter(d) {
        return 1 + ~~(d.getMonth() / 3);
    }
    function formatUTCShortWeekday(d) {
        return locale_shortWeekdays[d.getUTCDay()];
    }
    function formatUTCWeekday(d) {
        return locale_weekdays[d.getUTCDay()];
    }
    function formatUTCShortMonth(d) {
        return locale_shortMonths[d.getUTCMonth()];
    }
    function formatUTCMonth(d) {
        return locale_months[d.getUTCMonth()];
    }
    function formatUTCPeriod(d) {
        return locale_periods[+(d.getUTCHours() >= 12)];
    }
    function formatUTCQuarter(d) {
        return 1 + ~~(d.getUTCMonth() / 3);
    }
    return {
        format: function(specifier) {
            var f = newFormat(specifier += "", formats1);
            f.toString = function() {
                return specifier;
            };
            return f;
        },
        parse: function(specifier) {
            var p = newParse(specifier += "", false);
            p.toString = function() {
                return specifier;
            };
            return p;
        },
        utcFormat: function(specifier) {
            var f = newFormat(specifier += "", utcFormats);
            f.toString = function() {
                return specifier;
            };
            return f;
        },
        utcParse: function(specifier) {
            var p = newParse(specifier += "", true);
            p.toString = function() {
                return specifier;
            };
            return p;
        }
    };
}
exports.default = formatLocale;
var pads = {
    "-": "",
    "_": " ",
    "0": "0"
}, numberRe = /^\s*\d+/, percentRe = /^%/, requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad1(value, fill, width) {
    var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}
function requote(s) {
    return s.replace(requoteRe, "\\$&");
}
function formatRe(names) {
    return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
function formatLookup(names) {
    return new Map(names.map((name, i)=>[
            name.toLowerCase(),
            i
        ]
    ));
}
function parseWeekdayNumberSunday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 1));
    return n ? (d.w = +n[0], i + n[0].length) : -1;
}
function parseWeekdayNumberMonday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 1));
    return n ? (d.u = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberSunday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.U = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberISO(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.V = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberMonday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.W = +n[0], i + n[0].length) : -1;
}
function parseFullYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 4));
    return n ? (d.y = +n[0], i + n[0].length) : -1;
}
function parseYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}
function parseZone(d, string, i) {
    var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
    return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}
function parseQuarter(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 1));
    return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}
function parseMonthNumber(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}
function parseDayOfMonth(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.d = +n[0], i + n[0].length) : -1;
}
function parseDayOfYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 3));
    return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}
function parseHour24(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.H = +n[0], i + n[0].length) : -1;
}
function parseMinutes(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.M = +n[0], i + n[0].length) : -1;
}
function parseSeconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.S = +n[0], i + n[0].length) : -1;
}
function parseMilliseconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 3));
    return n ? (d.L = +n[0], i + n[0].length) : -1;
}
function parseMicroseconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 6));
    return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}
function parseLiteralPercent(d, string, i) {
    var n = percentRe.exec(string.slice(i, i + 1));
    return n ? i + n[0].length : -1;
}
function parseUnixTimestamp(d, string, i) {
    var n = numberRe.exec(string.slice(i));
    return n ? (d.Q = +n[0], i + n[0].length) : -1;
}
function parseUnixTimestampSeconds(d, string, i) {
    var n = numberRe.exec(string.slice(i));
    return n ? (d.s = +n[0], i + n[0].length) : -1;
}
function formatDayOfMonth(d, p) {
    return pad1(d.getDate(), p, 2);
}
function formatHour24(d, p) {
    return pad1(d.getHours(), p, 2);
}
function formatHour12(d, p) {
    return pad1(d.getHours() % 12 || 12, p, 2);
}
function formatDayOfYear(d, p) {
    return pad1(1 + _d3Time.timeDay.count(_d3Time.timeYear(d), d), p, 3);
}
function formatMilliseconds(d, p) {
    return pad1(d.getMilliseconds(), p, 3);
}
function formatMicroseconds(d, p) {
    return formatMilliseconds(d, p) + "000";
}
function formatMonthNumber(d, p) {
    return pad1(d.getMonth() + 1, p, 2);
}
function formatMinutes(d, p) {
    return pad1(d.getMinutes(), p, 2);
}
function formatSeconds(d, p) {
    return pad1(d.getSeconds(), p, 2);
}
function formatWeekdayNumberMonday(d) {
    var day = d.getDay();
    return day === 0 ? 7 : day;
}
function formatWeekNumberSunday(d, p) {
    return pad1(_d3Time.timeSunday.count(_d3Time.timeYear(d) - 1, d), p, 2);
}
function dISO(d) {
    var day = d.getDay();
    return day >= 4 || day === 0 ? _d3Time.timeThursday(d) : _d3Time.timeThursday.ceil(d);
}
function formatWeekNumberISO(d, p) {
    d = dISO(d);
    return pad1(_d3Time.timeThursday.count(_d3Time.timeYear(d), d) + (_d3Time.timeYear(d).getDay() === 4), p, 2);
}
function formatWeekdayNumberSunday(d) {
    return d.getDay();
}
function formatWeekNumberMonday(d, p) {
    return pad1(_d3Time.timeMonday.count(_d3Time.timeYear(d) - 1, d), p, 2);
}
function formatYear(d, p) {
    return pad1(d.getFullYear() % 100, p, 2);
}
function formatYearISO(d, p) {
    d = dISO(d);
    return pad1(d.getFullYear() % 100, p, 2);
}
function formatFullYear(d, p) {
    return pad1(d.getFullYear() % 10000, p, 4);
}
function formatFullYearISO(d, p) {
    var day = d.getDay();
    d = day >= 4 || day === 0 ? _d3Time.timeThursday(d) : _d3Time.timeThursday.ceil(d);
    return pad1(d.getFullYear() % 10000, p, 4);
}
function formatZone(d) {
    var z = d.getTimezoneOffset();
    return (z > 0 ? "-" : (z *= -1, "+")) + pad1(z / 60 | 0, "0", 2) + pad1(z % 60, "0", 2);
}
function formatUTCDayOfMonth(d, p) {
    return pad1(d.getUTCDate(), p, 2);
}
function formatUTCHour24(d, p) {
    return pad1(d.getUTCHours(), p, 2);
}
function formatUTCHour12(d, p) {
    return pad1(d.getUTCHours() % 12 || 12, p, 2);
}
function formatUTCDayOfYear(d, p) {
    return pad1(1 + _d3Time.utcDay.count(_d3Time.utcYear(d), d), p, 3);
}
function formatUTCMilliseconds(d, p) {
    return pad1(d.getUTCMilliseconds(), p, 3);
}
function formatUTCMicroseconds(d, p) {
    return formatUTCMilliseconds(d, p) + "000";
}
function formatUTCMonthNumber(d, p) {
    return pad1(d.getUTCMonth() + 1, p, 2);
}
function formatUTCMinutes(d, p) {
    return pad1(d.getUTCMinutes(), p, 2);
}
function formatUTCSeconds(d, p) {
    return pad1(d.getUTCSeconds(), p, 2);
}
function formatUTCWeekdayNumberMonday(d) {
    var dow = d.getUTCDay();
    return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d, p) {
    return pad1(_d3Time.utcSunday.count(_d3Time.utcYear(d) - 1, d), p, 2);
}
function UTCdISO(d) {
    var day = d.getUTCDay();
    return day >= 4 || day === 0 ? _d3Time.utcThursday(d) : _d3Time.utcThursday.ceil(d);
}
function formatUTCWeekNumberISO(d, p) {
    d = UTCdISO(d);
    return pad1(_d3Time.utcThursday.count(_d3Time.utcYear(d), d) + (_d3Time.utcYear(d).getUTCDay() === 4), p, 2);
}
function formatUTCWeekdayNumberSunday(d) {
    return d.getUTCDay();
}
function formatUTCWeekNumberMonday(d, p) {
    return pad1(_d3Time.utcMonday.count(_d3Time.utcYear(d) - 1, d), p, 2);
}
function formatUTCYear(d, p) {
    return pad1(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCYearISO(d, p) {
    d = UTCdISO(d);
    return pad1(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCFullYear(d, p) {
    return pad1(d.getUTCFullYear() % 10000, p, 4);
}
function formatUTCFullYearISO(d, p) {
    var day = d.getUTCDay();
    d = day >= 4 || day === 0 ? _d3Time.utcThursday(d) : _d3Time.utcThursday.ceil(d);
    return pad1(d.getUTCFullYear() % 10000, p, 4);
}
function formatUTCZone() {
    return "+0000";
}
function formatLiteralPercent() {
    return "%";
}
function formatUnixTimestamp(d) {
    return +d;
}
function formatUnixTimestampSeconds(d) {
    return Math.floor(+d / 1000);
}

},{"d3-time":"lTNsW","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eUcDj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isoSpecifier", ()=>isoSpecifier
);
var _defaultLocaleJs = require("./defaultLocale.js");
var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";
function formatIsoNative(date) {
    return date.toISOString();
}
var formatIso = Date.prototype.toISOString ? formatIsoNative : _defaultLocaleJs.utcFormat(isoSpecifier);
exports.default = formatIso;

},{"./defaultLocale.js":"jvGVG","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9agvx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isoFormatJs = require("./isoFormat.js");
var _defaultLocaleJs = require("./defaultLocale.js");
function parseIsoNative(string) {
    var date = new Date(string);
    return isNaN(date) ? null : date;
}
var parseIso = +new Date("2000-01-01T00:00:00.000Z") ? parseIsoNative : _defaultLocaleJs.utcParse(_isoFormatJs.isoSpecifier);
exports.default = parseIso;

},{"./isoFormat.js":"eUcDj","./defaultLocale.js":"jvGVG","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jZmye":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Time = require("d3-time");
var _d3TimeFormat = require("d3-time-format");
var _timeJs = require("./time.js");
var _initJs = require("./init.js");
function utcTime() {
    return _initJs.initRange.apply(_timeJs.calendar(_d3Time.utcTicks, _d3Time.utcTickInterval, _d3Time.utcYear, _d3Time.utcMonth, _d3Time.utcWeek, _d3Time.utcDay, _d3Time.utcHour, _d3Time.utcMinute, _d3Time.utcSecond, _d3TimeFormat.utcFormat).domain([
        Date.UTC(2000, 0, 1),
        Date.UTC(2000, 0, 2)
    ]), arguments);
}
exports.default = utcTime;

},{"d3-time":"lTNsW","d3-time-format":"ioDBG","./time.js":"7jFE4","./init.js":"76hF6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"76Oio":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "copy", ()=>copy
);
parcelHelpers.export(exports, "sequentialLog", ()=>sequentialLog
);
parcelHelpers.export(exports, "sequentialSymlog", ()=>sequentialSymlog
);
parcelHelpers.export(exports, "sequentialPow", ()=>sequentialPow
);
parcelHelpers.export(exports, "sequentialSqrt", ()=>sequentialSqrt
);
var _d3Interpolate = require("d3-interpolate");
var _continuousJs = require("./continuous.js");
var _initJs = require("./init.js");
var _linearJs = require("./linear.js");
var _logJs = require("./log.js");
var _symlogJs = require("./symlog.js");
var _powJs = require("./pow.js");
function transformer() {
    var x0 = 0, x1 = 1, t0, t1, k10, transform, interpolator = _continuousJs.identity, clamp = false, unknown;
    function scale(x) {
        return x == null || isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));
    }
    scale.domain = function(_) {
        return arguments.length ? ([x0, x1] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [
            x0,
            x1
        ];
    };
    scale.clamp = function(_) {
        return arguments.length ? (clamp = !!_, scale) : clamp;
    };
    scale.interpolator = function(_) {
        return arguments.length ? (interpolator = _, scale) : interpolator;
    };
    function range(interpolate) {
        return function(_) {
            var r0, r1;
            return arguments.length ? ([r0, r1] = _, interpolator = interpolate(r0, r1), scale) : [
                interpolator(0),
                interpolator(1)
            ];
        };
    }
    scale.range = range(_d3Interpolate.interpolate);
    scale.rangeRound = range(_d3Interpolate.interpolateRound);
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function(t) {
        transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);
        return scale;
    };
}
function copy(source, target) {
    return target.domain(source.domain()).interpolator(source.interpolator()).clamp(source.clamp()).unknown(source.unknown());
}
function sequential() {
    var scale = _linearJs.linearish(transformer()(_continuousJs.identity));
    scale.copy = function() {
        return copy(scale, sequential());
    };
    return _initJs.initInterpolator.apply(scale, arguments);
}
exports.default = sequential;
function sequentialLog() {
    var scale = _logJs.loggish(transformer()).domain([
        1,
        10
    ]);
    scale.copy = function() {
        return copy(scale, sequentialLog()).base(scale.base());
    };
    return _initJs.initInterpolator.apply(scale, arguments);
}
function sequentialSymlog() {
    var scale = _symlogJs.symlogish(transformer());
    scale.copy = function() {
        return copy(scale, sequentialSymlog()).constant(scale.constant());
    };
    return _initJs.initInterpolator.apply(scale, arguments);
}
function sequentialPow() {
    var scale = _powJs.powish(transformer());
    scale.copy = function() {
        return copy(scale, sequentialPow()).exponent(scale.exponent());
    };
    return _initJs.initInterpolator.apply(scale, arguments);
}
function sequentialSqrt() {
    return sequentialPow.apply(null, arguments).exponent(0.5);
}

},{"d3-interpolate":"e7XwA","./continuous.js":"btLMJ","./init.js":"76hF6","./linear.js":"iCJmQ","./log.js":"8gycm","./symlog.js":"etHgK","./pow.js":"kopvN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dMZ3i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
var _continuousJs = require("./continuous.js");
var _initJs = require("./init.js");
function sequentialQuantile() {
    var domain = [], interpolator = _continuousJs.identity;
    function scale(x) {
        if (x != null && !isNaN(x = +x)) return interpolator((_d3Array.bisect(domain, x, 1) - 1) / (domain.length - 1));
    }
    scale.domain = function(_) {
        if (!arguments.length) return domain.slice();
        domain = [];
        for (let d of _)if (d != null && !isNaN(d = +d)) domain.push(d);
        domain.sort(_d3Array.ascending);
        return scale;
    };
    scale.interpolator = function(_) {
        return arguments.length ? (interpolator = _, scale) : interpolator;
    };
    scale.range = function() {
        return domain.map((d, i)=>interpolator(i / (domain.length - 1))
        );
    };
    scale.quantiles = function(n) {
        return Array.from({
            length: n + 1
        }, (_, i)=>_d3Array.quantile(domain, i / n)
        );
    };
    scale.copy = function() {
        return sequentialQuantile(interpolator).domain(domain);
    };
    return _initJs.initInterpolator.apply(scale, arguments);
}
exports.default = sequentialQuantile;

},{"d3-array":"e6yVq","./continuous.js":"btLMJ","./init.js":"76hF6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3lkJJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "divergingLog", ()=>divergingLog
);
parcelHelpers.export(exports, "divergingSymlog", ()=>divergingSymlog
);
parcelHelpers.export(exports, "divergingPow", ()=>divergingPow
);
parcelHelpers.export(exports, "divergingSqrt", ()=>divergingSqrt
);
var _d3Interpolate = require("d3-interpolate");
var _continuousJs = require("./continuous.js");
var _initJs = require("./init.js");
var _linearJs = require("./linear.js");
var _logJs = require("./log.js");
var _sequentialJs = require("./sequential.js");
var _symlogJs = require("./symlog.js");
var _powJs = require("./pow.js");
function transformer() {
    var x0 = 0, x1 = 0.5, x2 = 1, s = 1, t0, t1, t2, k10, k21, interpolator = _continuousJs.identity, transform, clamp = false, unknown;
    function scale(x) {
        return isNaN(x = +x) ? unknown : (x = 0.5 + ((x = +transform(x)) - t1) * (s * x < s * t1 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x)) : x));
    }
    scale.domain = function(_) {
        return arguments.length ? ([x0, x1, x2] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), t2 = transform(x2 = +x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1, scale) : [
            x0,
            x1,
            x2
        ];
    };
    scale.clamp = function(_) {
        return arguments.length ? (clamp = !!_, scale) : clamp;
    };
    scale.interpolator = function(_) {
        return arguments.length ? (interpolator = _, scale) : interpolator;
    };
    function range(interpolate) {
        return function(_) {
            var r0, r1, r2;
            return arguments.length ? ([r0, r1, r2] = _, interpolator = _d3Interpolate.piecewise(interpolate, [
                r0,
                r1,
                r2
            ]), scale) : [
                interpolator(0),
                interpolator(0.5),
                interpolator(1)
            ];
        };
    }
    scale.range = range(_d3Interpolate.interpolate);
    scale.rangeRound = range(_d3Interpolate.interpolateRound);
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function(t) {
        transform = t, t0 = t(x0), t1 = t(x1), t2 = t(x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1;
        return scale;
    };
}
function diverging() {
    var scale = _linearJs.linearish(transformer()(_continuousJs.identity));
    scale.copy = function() {
        return _sequentialJs.copy(scale, diverging());
    };
    return _initJs.initInterpolator.apply(scale, arguments);
}
exports.default = diverging;
function divergingLog() {
    var scale = _logJs.loggish(transformer()).domain([
        0.1,
        1,
        10
    ]);
    scale.copy = function() {
        return _sequentialJs.copy(scale, divergingLog()).base(scale.base());
    };
    return _initJs.initInterpolator.apply(scale, arguments);
}
function divergingSymlog() {
    var scale = _symlogJs.symlogish(transformer());
    scale.copy = function() {
        return _sequentialJs.copy(scale, divergingSymlog()).constant(scale.constant());
    };
    return _initJs.initInterpolator.apply(scale, arguments);
}
function divergingPow() {
    var scale = _powJs.powish(transformer());
    scale.copy = function() {
        return _sequentialJs.copy(scale, divergingPow()).exponent(scale.exponent());
    };
    return _initJs.initInterpolator.apply(scale, arguments);
}
function divergingSqrt() {
    return divergingPow.apply(null, arguments).exponent(0.5);
}

},{"d3-interpolate":"e7XwA","./continuous.js":"btLMJ","./init.js":"76hF6","./linear.js":"iCJmQ","./log.js":"8gycm","./sequential.js":"76Oio","./symlog.js":"etHgK","./pow.js":"kopvN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aFDOR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "schemeCategory10", ()=>_category10JsDefault.default
);
parcelHelpers.export(exports, "schemeAccent", ()=>_accentJsDefault.default
);
parcelHelpers.export(exports, "schemeDark2", ()=>_dark2JsDefault.default
);
parcelHelpers.export(exports, "schemePaired", ()=>_pairedJsDefault.default
);
parcelHelpers.export(exports, "schemePastel1", ()=>_pastel1JsDefault.default
);
parcelHelpers.export(exports, "schemePastel2", ()=>_pastel2JsDefault.default
);
parcelHelpers.export(exports, "schemeSet1", ()=>_set1JsDefault.default
);
parcelHelpers.export(exports, "schemeSet2", ()=>_set2JsDefault.default
);
parcelHelpers.export(exports, "schemeSet3", ()=>_set3JsDefault.default
);
parcelHelpers.export(exports, "schemeTableau10", ()=>_tableau10JsDefault.default
);
parcelHelpers.export(exports, "interpolateBrBG", ()=>_brBGJsDefault.default
);
parcelHelpers.export(exports, "schemeBrBG", ()=>_brBGJs.scheme
);
parcelHelpers.export(exports, "interpolatePRGn", ()=>_prgnJsDefault.default
);
parcelHelpers.export(exports, "schemePRGn", ()=>_prgnJs.scheme
);
parcelHelpers.export(exports, "interpolatePiYG", ()=>_piYGJsDefault.default
);
parcelHelpers.export(exports, "schemePiYG", ()=>_piYGJs.scheme
);
parcelHelpers.export(exports, "interpolatePuOr", ()=>_puOrJsDefault.default
);
parcelHelpers.export(exports, "schemePuOr", ()=>_puOrJs.scheme
);
parcelHelpers.export(exports, "interpolateRdBu", ()=>_rdBuJsDefault.default
);
parcelHelpers.export(exports, "schemeRdBu", ()=>_rdBuJs.scheme
);
parcelHelpers.export(exports, "interpolateRdGy", ()=>_rdGyJsDefault.default
);
parcelHelpers.export(exports, "schemeRdGy", ()=>_rdGyJs.scheme
);
parcelHelpers.export(exports, "interpolateRdYlBu", ()=>_rdYlBuJsDefault.default
);
parcelHelpers.export(exports, "schemeRdYlBu", ()=>_rdYlBuJs.scheme
);
parcelHelpers.export(exports, "interpolateRdYlGn", ()=>_rdYlGnJsDefault.default
);
parcelHelpers.export(exports, "schemeRdYlGn", ()=>_rdYlGnJs.scheme
);
parcelHelpers.export(exports, "interpolateSpectral", ()=>_spectralJsDefault.default
);
parcelHelpers.export(exports, "schemeSpectral", ()=>_spectralJs.scheme
);
parcelHelpers.export(exports, "interpolateBuGn", ()=>_buGnJsDefault.default
);
parcelHelpers.export(exports, "schemeBuGn", ()=>_buGnJs.scheme
);
parcelHelpers.export(exports, "interpolateBuPu", ()=>_buPuJsDefault.default
);
parcelHelpers.export(exports, "schemeBuPu", ()=>_buPuJs.scheme
);
parcelHelpers.export(exports, "interpolateGnBu", ()=>_gnBuJsDefault.default
);
parcelHelpers.export(exports, "schemeGnBu", ()=>_gnBuJs.scheme
);
parcelHelpers.export(exports, "interpolateOrRd", ()=>_orRdJsDefault.default
);
parcelHelpers.export(exports, "schemeOrRd", ()=>_orRdJs.scheme
);
parcelHelpers.export(exports, "interpolatePuBuGn", ()=>_puBuGnJsDefault.default
);
parcelHelpers.export(exports, "schemePuBuGn", ()=>_puBuGnJs.scheme
);
parcelHelpers.export(exports, "interpolatePuBu", ()=>_puBuJsDefault.default
);
parcelHelpers.export(exports, "schemePuBu", ()=>_puBuJs.scheme
);
parcelHelpers.export(exports, "interpolatePuRd", ()=>_puRdJsDefault.default
);
parcelHelpers.export(exports, "schemePuRd", ()=>_puRdJs.scheme
);
parcelHelpers.export(exports, "interpolateRdPu", ()=>_rdPuJsDefault.default
);
parcelHelpers.export(exports, "schemeRdPu", ()=>_rdPuJs.scheme
);
parcelHelpers.export(exports, "interpolateYlGnBu", ()=>_ylGnBuJsDefault.default
);
parcelHelpers.export(exports, "schemeYlGnBu", ()=>_ylGnBuJs.scheme
);
parcelHelpers.export(exports, "interpolateYlGn", ()=>_ylGnJsDefault.default
);
parcelHelpers.export(exports, "schemeYlGn", ()=>_ylGnJs.scheme
);
parcelHelpers.export(exports, "interpolateYlOrBr", ()=>_ylOrBrJsDefault.default
);
parcelHelpers.export(exports, "schemeYlOrBr", ()=>_ylOrBrJs.scheme
);
parcelHelpers.export(exports, "interpolateYlOrRd", ()=>_ylOrRdJsDefault.default
);
parcelHelpers.export(exports, "schemeYlOrRd", ()=>_ylOrRdJs.scheme
);
parcelHelpers.export(exports, "interpolateBlues", ()=>_bluesJsDefault.default
);
parcelHelpers.export(exports, "schemeBlues", ()=>_bluesJs.scheme
);
parcelHelpers.export(exports, "interpolateGreens", ()=>_greensJsDefault.default
);
parcelHelpers.export(exports, "schemeGreens", ()=>_greensJs.scheme
);
parcelHelpers.export(exports, "interpolateGreys", ()=>_greysJsDefault.default
);
parcelHelpers.export(exports, "schemeGreys", ()=>_greysJs.scheme
);
parcelHelpers.export(exports, "interpolatePurples", ()=>_purplesJsDefault.default
);
parcelHelpers.export(exports, "schemePurples", ()=>_purplesJs.scheme
);
parcelHelpers.export(exports, "interpolateReds", ()=>_redsJsDefault.default
);
parcelHelpers.export(exports, "schemeReds", ()=>_redsJs.scheme
);
parcelHelpers.export(exports, "interpolateOranges", ()=>_orangesJsDefault.default
);
parcelHelpers.export(exports, "schemeOranges", ()=>_orangesJs.scheme
);
parcelHelpers.export(exports, "interpolateCividis", ()=>_cividisJsDefault.default
);
parcelHelpers.export(exports, "interpolateCubehelixDefault", ()=>_cubehelixJsDefault.default
);
parcelHelpers.export(exports, "interpolateRainbow", ()=>_rainbowJsDefault.default
);
parcelHelpers.export(exports, "interpolateWarm", ()=>_rainbowJs.warm
);
parcelHelpers.export(exports, "interpolateCool", ()=>_rainbowJs.cool
);
parcelHelpers.export(exports, "interpolateSinebow", ()=>_sinebowJsDefault.default
);
parcelHelpers.export(exports, "interpolateTurbo", ()=>_turboJsDefault.default
);
parcelHelpers.export(exports, "interpolateViridis", ()=>_viridisJsDefault.default
);
parcelHelpers.export(exports, "interpolateMagma", ()=>_viridisJs.magma
);
parcelHelpers.export(exports, "interpolateInferno", ()=>_viridisJs.inferno
);
parcelHelpers.export(exports, "interpolatePlasma", ()=>_viridisJs.plasma
);
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

},{"./categorical/category10.js":"e2EfC","./categorical/Accent.js":"5q31y","./categorical/Dark2.js":"1H7j0","./categorical/Paired.js":"kt1Ru","./categorical/Pastel1.js":"etPvl","./categorical/Pastel2.js":"hpwvc","./categorical/Set1.js":"aP5Pw","./categorical/Set2.js":"8Nx5T","./categorical/Set3.js":"bxJSO","./categorical/Tableau10.js":"3cnQY","./diverging/BrBG.js":"3WTyC","./diverging/PRGn.js":"1hJlu","./diverging/PiYG.js":"giXBD","./diverging/PuOr.js":"lsRsZ","./diverging/RdBu.js":"9DbpL","./diverging/RdGy.js":"4hj5O","./diverging/RdYlBu.js":"dAVvE","./diverging/RdYlGn.js":"3IYze","./diverging/Spectral.js":"k8Kuh","./sequential-multi/BuGn.js":"cJfjI","./sequential-multi/BuPu.js":"1k17l","./sequential-multi/GnBu.js":"2HodW","./sequential-multi/OrRd.js":"csnWr","./sequential-multi/PuBuGn.js":"e9QKS","./sequential-multi/PuBu.js":"jHWtN","./sequential-multi/PuRd.js":"lbw9C","./sequential-multi/RdPu.js":"44Np6","./sequential-multi/YlGnBu.js":"2VCb3","./sequential-multi/YlGn.js":"u4n0U","./sequential-multi/YlOrBr.js":"4P7Ro","./sequential-multi/YlOrRd.js":"beAzd","./sequential-single/Blues.js":"cIts4","./sequential-single/Greens.js":"d7hUf","./sequential-single/Greys.js":"dJtfS","./sequential-single/Purples.js":"4BUF9","./sequential-single/Reds.js":"kKJoz","./sequential-single/Oranges.js":"6j8Qa","./sequential-multi/cividis.js":"67kb3","./sequential-multi/cubehelix.js":"TokCc","./sequential-multi/rainbow.js":"5bf1U","./sequential-multi/sinebow.js":"3sBQy","./sequential-multi/turbo.js":"kf8Lp","./sequential-multi/viridis.js":"BrDRR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"e2EfC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
exports.default = _colorsJsDefault.default("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

},{"../colors.js":"7m9wq","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7m9wq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(specifier) {
    var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
    while(i < n)colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
    return colors;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5q31y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
exports.default = _colorsJsDefault.default("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");

},{"../colors.js":"7m9wq","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1H7j0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
exports.default = _colorsJsDefault.default("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");

},{"../colors.js":"7m9wq","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kt1Ru":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
exports.default = _colorsJsDefault.default("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");

},{"../colors.js":"7m9wq","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"etPvl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
exports.default = _colorsJsDefault.default("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");

},{"../colors.js":"7m9wq","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hpwvc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
exports.default = _colorsJsDefault.default("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");

},{"../colors.js":"7m9wq","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aP5Pw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
exports.default = _colorsJsDefault.default("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");

},{"../colors.js":"7m9wq","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8Nx5T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
exports.default = _colorsJsDefault.default("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");

},{"../colors.js":"7m9wq","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bxJSO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
exports.default = _colorsJsDefault.default("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");

},{"../colors.js":"7m9wq","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3cnQY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
exports.default = _colorsJsDefault.default("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");

},{"../colors.js":"7m9wq","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3WTyC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme
);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(_colorsJsDefault.default);
exports.default = _rampJsDefault.default(scheme);

},{"../colors.js":"7m9wq","../ramp.js":"3lG5M","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3lG5M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Interpolate = require("d3-interpolate");
exports.default = (scheme)=>_d3Interpolate.interpolateRgbBasis(scheme[scheme.length - 1])
;

},{"d3-interpolate":"e7XwA","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1hJlu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme
);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(_colorsJsDefault.default);
exports.default = _rampJsDefault.default(scheme);

},{"../colors.js":"7m9wq","../ramp.js":"3lG5M","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"giXBD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme
);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(_colorsJsDefault.default);
exports.default = _rampJsDefault.default(scheme);

},{"../colors.js":"7m9wq","../ramp.js":"3lG5M","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lsRsZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme
);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(_colorsJsDefault.default);
exports.default = _rampJsDefault.default(scheme);

},{"../colors.js":"7m9wq","../ramp.js":"3lG5M","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9DbpL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme
);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(_colorsJsDefault.default);
exports.default = _rampJsDefault.default(scheme);

},{"../colors.js":"7m9wq","../ramp.js":"3lG5M","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4hj5O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme
);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(_colorsJsDefault.default);
exports.default = _rampJsDefault.default(scheme);

},{"../colors.js":"7m9wq","../ramp.js":"3lG5M","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dAVvE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme
);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(_colorsJsDefault.default);
exports.default = _rampJsDefault.default(scheme);

},{"../colors.js":"7m9wq","../ramp.js":"3lG5M","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3IYze":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme
);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(_colorsJsDefault.default);
exports.default = _rampJsDefault.default(scheme);

},{"../colors.js":"7m9wq","../ramp.js":"3lG5M","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"k8Kuh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme
);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(_colorsJsDefault.default);
exports.default = _rampJsDefault.default(scheme);

},{"../colors.js":"7m9wq","../ramp.js":"3lG5M","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cJfjI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme
);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(_colorsJsDefault.default);
exports.default = _rampJsDefault.default(scheme);

},{"../colors.js":"7m9wq","../ramp.js":"3lG5M","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1k17l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme
);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(_colorsJsDefault.default);
exports.default = _rampJsDefault.default(scheme);

},{"../colors.js":"7m9wq","../ramp.js":"3lG5M","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2HodW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme
);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(_colorsJsDefault.default);
exports.default = _rampJsDefault.default(scheme);

},{"../colors.js":"7m9wq","../ramp.js":"3lG5M","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"csnWr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme
);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(_colorsJsDefault.default);
exports.default = _rampJsDefault.default(scheme);

},{"../colors.js":"7m9wq","../ramp.js":"3lG5M","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"e9QKS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme
);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(_colorsJsDefault.default);
exports.default = _rampJsDefault.default(scheme);

},{"../colors.js":"7m9wq","../ramp.js":"3lG5M","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jHWtN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme
);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(_colorsJsDefault.default);
exports.default = _rampJsDefault.default(scheme);

},{"../colors.js":"7m9wq","../ramp.js":"3lG5M","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lbw9C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme
);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(_colorsJsDefault.default);
exports.default = _rampJsDefault.default(scheme);

},{"../colors.js":"7m9wq","../ramp.js":"3lG5M","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"44Np6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme
);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(_colorsJsDefault.default);
exports.default = _rampJsDefault.default(scheme);

},{"../colors.js":"7m9wq","../ramp.js":"3lG5M","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2VCb3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme
);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(_colorsJsDefault.default);
exports.default = _rampJsDefault.default(scheme);

},{"../colors.js":"7m9wq","../ramp.js":"3lG5M","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"u4n0U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme
);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(_colorsJsDefault.default);
exports.default = _rampJsDefault.default(scheme);

},{"../colors.js":"7m9wq","../ramp.js":"3lG5M","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4P7Ro":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme
);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(_colorsJsDefault.default);
exports.default = _rampJsDefault.default(scheme);

},{"../colors.js":"7m9wq","../ramp.js":"3lG5M","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"beAzd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme
);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(_colorsJsDefault.default);
exports.default = _rampJsDefault.default(scheme);

},{"../colors.js":"7m9wq","../ramp.js":"3lG5M","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cIts4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme
);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(_colorsJsDefault.default);
exports.default = _rampJsDefault.default(scheme);

},{"../colors.js":"7m9wq","../ramp.js":"3lG5M","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"d7hUf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme
);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(_colorsJsDefault.default);
exports.default = _rampJsDefault.default(scheme);

},{"../colors.js":"7m9wq","../ramp.js":"3lG5M","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dJtfS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme
);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(_colorsJsDefault.default);
exports.default = _rampJsDefault.default(scheme);

},{"../colors.js":"7m9wq","../ramp.js":"3lG5M","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4BUF9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme
);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(_colorsJsDefault.default);
exports.default = _rampJsDefault.default(scheme);

},{"../colors.js":"7m9wq","../ramp.js":"3lG5M","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kKJoz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme
);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(_colorsJsDefault.default);
exports.default = _rampJsDefault.default(scheme);

},{"../colors.js":"7m9wq","../ramp.js":"3lG5M","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6j8Qa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheme", ()=>scheme
);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
var _rampJs = require("../ramp.js");
var _rampJsDefault = parcelHelpers.interopDefault(_rampJs);
var scheme = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(_colorsJsDefault.default);
exports.default = _rampJsDefault.default(scheme);

},{"../colors.js":"7m9wq","../ramp.js":"3lG5M","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"67kb3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(t) {
    t = Math.max(0, Math.min(1, t));
    return "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t * (35.34 - t * (2381.73 - t * (6402.7 - t * (7024.72 - t * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t * (170.73 + t * (52.82 - t * (131.46 - t * (176.58 - t * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t * (442.36 - t * (2482.43 - t * (6167.24 - t * (6614.94 - t * 2475.67))))))) + ")";
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"TokCc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Color = require("d3-color");
var _d3Interpolate = require("d3-interpolate");
exports.default = _d3Interpolate.interpolateCubehelixLong(_d3Color.cubehelix(300, 0.5, 0), _d3Color.cubehelix(-240, 0.5, 1));

},{"d3-color":"ap3Jg","d3-interpolate":"e7XwA","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5bf1U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "warm", ()=>warm
);
parcelHelpers.export(exports, "cool", ()=>cool
);
var _d3Color = require("d3-color");
var _d3Interpolate = require("d3-interpolate");
var warm = _d3Interpolate.interpolateCubehelixLong(_d3Color.cubehelix(-100, 0.75, 0.35), _d3Color.cubehelix(80, 1.5, 0.8));
var cool = _d3Interpolate.interpolateCubehelixLong(_d3Color.cubehelix(260, 0.75, 0.35), _d3Color.cubehelix(80, 1.5, 0.8));
var c = _d3Color.cubehelix();
exports.default = function(t) {
    if (t < 0 || t > 1) t -= Math.floor(t);
    var ts = Math.abs(t - 0.5);
    c.h = 360 * t - 100;
    c.s = 1.5 - 1.5 * ts;
    c.l = 0.8 - 0.9 * ts;
    return c + "";
};

},{"d3-color":"ap3Jg","d3-interpolate":"e7XwA","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3sBQy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Color = require("d3-color");
var c = _d3Color.rgb(), pi_1_3 = Math.PI / 3, pi_2_3 = Math.PI * 2 / 3;
exports.default = function(t) {
    var x;
    t = (0.5 - t) * Math.PI;
    c.r = 255 * (x = Math.sin(t)) * x;
    c.g = 255 * (x = Math.sin(t + pi_1_3)) * x;
    c.b = 255 * (x = Math.sin(t + pi_2_3)) * x;
    return c + "";
};

},{"d3-color":"ap3Jg","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kf8Lp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(t) {
    t = Math.max(0, Math.min(1, t));
    return "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t * (1172.33 - t * (10793.56 - t * (33300.12 - t * (38394.49 - t * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t * (557.33 + t * (1225.33 - t * (3574.96 - t * (1073.77 + t * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t * (3211.1 - t * (15327.97 - t * (27814 - t * (22569.18 - t * 6838.66))))))) + ")";
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"BrDRR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "magma", ()=>magma
);
parcelHelpers.export(exports, "inferno", ()=>inferno
);
parcelHelpers.export(exports, "plasma", ()=>plasma
);
var _colorsJs = require("../colors.js");
var _colorsJsDefault = parcelHelpers.interopDefault(_colorsJs);
function ramp(range) {
    var n = range.length;
    return function(t) {
        return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
    };
}
exports.default = ramp(_colorsJsDefault.default("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
var magma = ramp(_colorsJsDefault.default("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
var inferno = ramp(_colorsJsDefault.default("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
var plasma = ramp(_colorsJsDefault.default("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

},{"../colors.js":"7m9wq","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7E00u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "zoom", ()=>_zoomJsDefault.default
);
parcelHelpers.export(exports, "zoomTransform", ()=>_transformJsDefault.default
);
parcelHelpers.export(exports, "zoomIdentity", ()=>_transformJs.identity
);
parcelHelpers.export(exports, "ZoomTransform", ()=>_transformJs.Transform
);
var _zoomJs = require("./zoom.js");
var _zoomJsDefault = parcelHelpers.interopDefault(_zoomJs);
var _transformJs = require("./transform.js");
var _transformJsDefault = parcelHelpers.interopDefault(_transformJs);

},{"./zoom.js":"lIHvw","./transform.js":"aPs4a","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lIHvw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
    return (!event.ctrlKey || event.type === 'wheel') && !event.button;
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
    return this.__zoom || _transformJs.identity;
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
exports.default = function() {
    var filter = defaultFilter, extent1 = defaultExtent, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable, scaleExtent = [
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
    ], duration = 250, interpolate = _d3Interpolate.interpolateZoom, listeners = _d3Dispatch.dispatch("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
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
            var e = extent1.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
            return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
        }, p, event);
    };
    zoom.translateBy = function(selection, x, y, event) {
        zoom.transform(selection, function() {
            return constrain(this.__zoom.translate(typeof x === "function" ? x.apply(this, arguments) : x, typeof y === "function" ? y.apply(this, arguments) : y), extent1.apply(this, arguments), translateExtent);
        }, null, event);
    };
    zoom.translateTo = function(selection, x, y, p, event) {
        zoom.transform(selection, function() {
            var e = extent1.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
            return constrain(_transformJs.identity.translate(p0[0], p0[1]).scale(t.k).translate(typeof x === "function" ? -x.apply(this, arguments) : -x, typeof y === "function" ? -y.apply(this, arguments) : -y), e, translateExtent);
        }, p, event);
    };
    function scale(transform, k) {
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
        return k === transform.k ? transform : new _transformJs.Transform(k, transform.x, transform.y);
    }
    function translate(transform, p0, p1) {
        var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
        return x === transform.x && y === transform.y ? transform : new _transformJs.Transform(transform.k, x, y);
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
            var that = this, args = arguments, g = gesture(that, args).event(event), e = extent1.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform === "function" ? transform.apply(that, args) : transform, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
            return function(t) {
                if (t === 1) t = b; // Avoid rounding error on end.
                else {
                    var l = i(t), k = w / l[2];
                    t = new _transformJs.Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
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
        this.extent = extent1.apply(that, args);
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
            var d = _d3Selection.select(this.that).datum();
            listeners.call(type, this.that, new _eventJsDefault.default(type, {
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
        var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = _d3Selection.pointer(event);
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
            _d3Transition.interrupt(this);
            g.start();
        }
        _noeventJsDefault.default(event);
        g.wheel = setTimeout(wheelidled, wheelDelay);
        g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
        function wheelidled() {
            g.wheel = null;
            g.end();
        }
    }
    function mousedowned(event1, ...args) {
        if (touchending || !filter.apply(this, arguments)) return;
        var currentTarget = event1.currentTarget, g = gesture(this, args, true).event(event1), v = _d3Selection.select(event1.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = _d3Selection.pointer(event1, currentTarget), x0 = event1.clientX, y0 = event1.clientY;
        _d3Drag.dragDisable(event1.view);
        _noeventJs.nopropagation(event1);
        g.mouse = [
            p,
            this.__zoom.invert(p)
        ];
        _d3Transition.interrupt(this);
        g.start();
        function mousemoved(event) {
            _noeventJsDefault.default(event);
            if (!g.moved) {
                var dx = event.clientX - x0, dy = event.clientY - y0;
                g.moved = dx * dx + dy * dy > clickDistance2;
            }
            g.event(event).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = _d3Selection.pointer(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
        }
        function mouseupped(event) {
            v.on("mousemove.zoom mouseup.zoom", null);
            _d3Drag.dragEnable(event.view, g.moved);
            _noeventJsDefault.default(event);
            g.event(event).end();
        }
    }
    function dblclicked(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var t0 = this.__zoom, p0 = _d3Selection.pointer(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent1.apply(this, args), translateExtent);
        _noeventJsDefault.default(event);
        if (duration > 0) _d3Selection.select(this).transition().duration(duration).call(schedule, t1, p0, event);
        else _d3Selection.select(this).call(zoom.transform, t1, p0, event);
    }
    function touchstarted(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
        _noeventJs.nopropagation(event);
        for(i = 0; i < n; ++i){
            t = touches[i], p = _d3Selection.pointer(t, this);
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
            _d3Transition.interrupt(this);
            g.start();
        }
    }
    function touchmoved(event, ...args) {
        if (!this.__zooming) return;
        var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
        _noeventJsDefault.default(event);
        for(i = 0; i < n; ++i){
            t = touches[i], p = _d3Selection.pointer(t, this);
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
        _noeventJs.nopropagation(event);
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
                t = _d3Selection.pointer(t, this);
                if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
                    var p = _d3Selection.select(this).on("dblclick.zoom");
                    if (p) p.apply(this, arguments);
                }
            }
        }
    }
    zoom.wheelDelta = function(_) {
        return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : _constantJsDefault.default(+_), zoom) : wheelDelta;
    };
    zoom.filter = function(_) {
        return arguments.length ? (filter = typeof _ === "function" ? _ : _constantJsDefault.default(!!_), zoom) : filter;
    };
    zoom.touchable = function(_) {
        return arguments.length ? (touchable = typeof _ === "function" ? _ : _constantJsDefault.default(!!_), zoom) : touchable;
    };
    zoom.extent = function(_) {
        return arguments.length ? (extent1 = typeof _ === "function" ? _ : _constantJsDefault.default([
            [
                +_[0][0],
                +_[0][1]
            ],
            [
                +_[1][0],
                +_[1][1]
            ]
        ]), zoom) : extent1;
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
};

},{"d3-dispatch":"9d2te","d3-drag":"dKCUo","d3-interpolate":"e7XwA","d3-selection":"hgWtk","d3-transition":"cRYyR","./constant.js":"5Itz2","./event.js":"bMq36","./transform.js":"aPs4a","./noevent.js":"cgyVb","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dKCUo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drag", ()=>_dragJsDefault.default
);
parcelHelpers.export(exports, "dragDisable", ()=>_nodragJsDefault.default
);
parcelHelpers.export(exports, "dragEnable", ()=>_nodragJs.yesdrag
);
var _dragJs = require("./drag.js");
var _dragJsDefault = parcelHelpers.interopDefault(_dragJs);
var _nodragJs = require("./nodrag.js");
var _nodragJsDefault = parcelHelpers.interopDefault(_nodragJs);

},{"./drag.js":"7NbwI","./nodrag.js":"1WTbI","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7NbwI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function() {
    var filter = defaultFilter, container1 = defaultContainer, subject = defaultSubject, touchable = defaultTouchable, gestures = {
    }, listeners = _d3Dispatch.dispatch("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
    function drag(selection) {
        selection.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved, _noeventJs.nonpassive).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    function mousedowned(event, d) {
        if (touchending || !filter.call(this, event, d)) return;
        var gesture = beforestart(this, container1.call(this, event, d), event, d, "mouse");
        if (!gesture) return;
        _d3Selection.select(event.view).on("mousemove.drag", mousemoved, _noeventJs.nonpassivecapture).on("mouseup.drag", mouseupped, _noeventJs.nonpassivecapture);
        _nodragJsDefault.default(event.view);
        _noeventJs.nopropagation(event);
        mousemoving = false;
        mousedownx = event.clientX;
        mousedowny = event.clientY;
        gesture("start", event);
    }
    function mousemoved(event) {
        _noeventJsDefault.default(event);
        if (!mousemoving) {
            var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
            mousemoving = dx * dx + dy * dy > clickDistance2;
        }
        gestures.mouse("drag", event);
    }
    function mouseupped(event) {
        _d3Selection.select(event.view).on("mousemove.drag mouseup.drag", null);
        _nodragJs.yesdrag(event.view, mousemoving);
        _noeventJsDefault.default(event);
        gestures.mouse("end", event);
    }
    function touchstarted(event, d) {
        if (!filter.call(this, event, d)) return;
        var touches = event.changedTouches, c = container1.call(this, event, d), n = touches.length, i, gesture;
        for(i = 0; i < n; ++i)if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
            _noeventJs.nopropagation(event);
            gesture("start", event, touches[i]);
        }
    }
    function touchmoved(event) {
        var touches = event.changedTouches, n = touches.length, i, gesture;
        for(i = 0; i < n; ++i)if (gesture = gestures[touches[i].identifier]) {
            _noeventJsDefault.default(event);
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
            _noeventJs.nopropagation(event);
            gesture("end", event, touches[i]);
        }
    }
    function beforestart(that, container, event1, d, identifier, touch1) {
        var dispatch = listeners.copy(), p = _d3Selection.pointer(touch1 || event1, container), dx, dy, s;
        if ((s = subject.call(that, new _eventJsDefault.default("beforestart", {
            sourceEvent: event1,
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
                    p = _d3Selection.pointer(touch || event, container), n = active;
                    break;
            }
            dispatch.call(type, that, new _eventJsDefault.default(type, {
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
        return arguments.length ? (filter = typeof _ === "function" ? _ : _constantJsDefault.default(!!_), drag) : filter;
    };
    drag.container = function(_) {
        return arguments.length ? (container1 = typeof _ === "function" ? _ : _constantJsDefault.default(_), drag) : container1;
    };
    drag.subject = function(_) {
        return arguments.length ? (subject = typeof _ === "function" ? _ : _constantJsDefault.default(_), drag) : subject;
    };
    drag.touchable = function(_) {
        return arguments.length ? (touchable = typeof _ === "function" ? _ : _constantJsDefault.default(!!_), drag) : touchable;
    };
    drag.on = function() {
        var value = listeners.on.apply(listeners, arguments);
        return value === listeners ? drag : value;
    };
    drag.clickDistance = function(_) {
        return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
    };
    return drag;
};

},{"d3-dispatch":"9d2te","d3-selection":"hgWtk","./nodrag.js":"1WTbI","./noevent.js":"hhrgp","./constant.js":"kBgzJ","./event.js":"3Vdpe","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1WTbI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "yesdrag", ()=>yesdrag
);
var _d3Selection = require("d3-selection");
var _noeventJs = require("./noevent.js");
var _noeventJsDefault = parcelHelpers.interopDefault(_noeventJs);
exports.default = function(view) {
    var root = view.document.documentElement, selection = _d3Selection.select(view).on("dragstart.drag", _noeventJsDefault.default, _noeventJs.nonpassivecapture);
    if ("onselectstart" in root) selection.on("selectstart.drag", _noeventJsDefault.default, _noeventJs.nonpassivecapture);
    else {
        root.__noselect = root.style.MozUserSelect;
        root.style.MozUserSelect = "none";
    }
};
function yesdrag(view, noclick) {
    var root = view.document.documentElement, selection = _d3Selection.select(view).on("dragstart.drag", null);
    if (noclick) {
        selection.on("click.drag", _noeventJsDefault.default, _noeventJs.nonpassivecapture);
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

},{"d3-selection":"hgWtk","./noevent.js":"hhrgp","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hhrgp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nonpassive", ()=>nonpassive
);
parcelHelpers.export(exports, "nonpassivecapture", ()=>nonpassivecapture
);
parcelHelpers.export(exports, "nopropagation", ()=>nopropagation
);
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
exports.default = function(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kBgzJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (x)=>()=>x
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3Vdpe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function DragEvent(type, { sourceEvent , subject , target , identifier , active , x , y , dx , dy , dispatch  }) {
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
exports.default = DragEvent;
DragEvent.prototype.on = function() {
    var value = this._.on.apply(this._, arguments);
    return value === this._ ? this : value;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5Itz2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (x)=>()=>x
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bMq36":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function ZoomEvent(type, { sourceEvent , target , transform , dispatch  }) {
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
exports.default = ZoomEvent;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aPs4a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Transform", ()=>Transform
);
parcelHelpers.export(exports, "identity", ()=>identity
);
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
exports.default = transform;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cgyVb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nopropagation", ()=>nopropagation
);
function nopropagation(event) {
    event.stopImmediatePropagation();
}
exports.default = function(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"apHmK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "geoAlbersUsa", ()=>_albersUsaDefault.default
);
parcelHelpers.export(exports, "geoAlbersUsaTerritories", ()=>_albersUsaTerritoriesDefault.default
);
parcelHelpers.export(exports, "geoConicConformalSpain", ()=>_conicConformalSpainDefault.default
);
parcelHelpers.export(exports, "geoConicConformalPortugal", ()=>_conicConformalPortugalDefault.default
);
parcelHelpers.export(exports, "geoMercatorEcuador", ()=>_mercatorEcuadorDefault.default
);
parcelHelpers.export(exports, "geoTransverseMercatorChile", ()=>_transverseMercatorChileDefault.default
);
parcelHelpers.export(exports, "geoConicEquidistantJapan", ()=>_conicEquidistantJapanDefault.default
);
parcelHelpers.export(exports, "geoConicConformalFrance", ()=>_conicConformalFranceDefault.default
);
parcelHelpers.export(exports, "geoConicConformalEurope", ()=>_conicConformalEuropeDefault.default
);
parcelHelpers.export(exports, "geoConicConformalNetherlands", ()=>_conicConformalNetherlandsDefault.default
);
parcelHelpers.export(exports, "geoMercatorMalaysia", ()=>_mercatorMalaysiaDefault.default
);
parcelHelpers.export(exports, "geoMercatorEquatorialGuinea", ()=>_mercatorEquatorialGuineaDefault.default
);
parcelHelpers.export(exports, "geoAlbersUk", ()=>_albersUkDefault.default
);
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

},{"./src/albersUsa":"eSrzH","./src/albersUsaTerritories":"7IcKI","./src/conicConformalSpain":"2pleb","./src/conicConformalPortugal":"5Ezq2","./src/mercatorEcuador":"b1SeC","./src/transverseMercatorChile":"2cwCG","./src/conicEquidistantJapan":"fkY9w","./src/conicConformalFrance":"ez48y","./src/conicConformalEurope":"kFCFZ","./src/conicConformalNetherlands":"eOvZA","./src/mercatorMalaysia":"9IV5K","./src/mercatorEquatorialGuinea":"3rOZc","./src/albersUk":"gNBuy","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eSrzH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function() {
    var cache, cacheStream, lower48 = _d3Geo.geoAlbers(), lower48Point, alaska = _d3Geo.geoConicEqualArea().rotate([
        154,
        0
    ]).center([
        -2,
        58.5
    ]).parallels([
        55,
        65
    ]), alaskaPoint, hawaii = _d3Geo.geoConicEqualArea().rotate([
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
        return (y >= 0.12 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii : lower48).invert(coordinates);
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
                x - 0.425 * k + _math.epsilon,
                y + 0.12 * k + _math.epsilon
            ],
            [
                x - 0.214 * k - _math.epsilon,
                y + 0.234 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        hawaiiPoint = hawaii.translate([
            x - 0.205 * k,
            y + 0.212 * k
        ]).clipExtent([
            [
                x - 0.214 * k + _math.epsilon,
                y + 0.166 * k + _math.epsilon
            ],
            [
                x - 0.115 * k - _math.epsilon,
                y + 0.234 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        return reset();
    };
    albersUsa.fitExtent = function(extent, object) {
        return _fit.fitExtent(albersUsa, extent, object);
    };
    albersUsa.fitSize = function(size, object) {
        return _fit.fitSize(albersUsa, size, object);
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
        var context = _d3Path.path();
        this.drawCompositionBorders(context);
        return context.toString();
    };
    return albersUsa.scale(1070);
};

},{"./math":"836Zq","d3-geo":"euFVP","./fit":"ke3qh","d3-path":"4S67G","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"836Zq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "epsilon", ()=>epsilon
);
var epsilon = 0.000001;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ke3qh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fitExtent", ()=>fitExtent
);
parcelHelpers.export(exports, "fitSize", ()=>fitSize
);
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
    _d3Geo.geoStream(object, projection.stream(_boundsDefault.default));
    var b = _boundsDefault.default.result(), k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])), x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2, y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
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

},{"d3-geo":"euFVP","./bounds":"g6myi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"g6myi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function noop() {
}
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4S67G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "path", ()=>_pathJsDefault.default
);
var _pathJs = require("./path.js");
var _pathJsDefault = parcelHelpers.interopDefault(_pathJs);

},{"./path.js":"5kGUo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5kGUo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const pi = Math.PI, tau = 2 * pi, epsilon = 0.000001, tauEpsilon = tau - epsilon;
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7IcKI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function() {
    var cache, cacheStream, lower48 = _d3Geo.geoAlbers(), lower48Point, alaska = _d3Geo.geoConicEqualArea().rotate([
        154,
        0
    ]).center([
        -2,
        58.5
    ]).parallels([
        55,
        65
    ]), alaskaPoint, hawaii = _d3Geo.geoConicEqualArea().rotate([
        157,
        0
    ]).center([
        -3,
        19.9
    ]).parallels([
        8,
        18
    ]), hawaiiPoint, puertoRico = _d3Geo.geoConicEqualArea().rotate([
        66,
        0
    ]).center([
        0,
        18
    ]).parallels([
        8,
        18
    ]), puertoRicoPoint, samoa = _d3Geo.geoEquirectangular().rotate([
        173,
        14
    ]), samoaPoint, guam = _d3Geo.geoEquirectangular().rotate([
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
        */ return (y >= 0.12 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii : y >= 0.2064 && y < 0.2413 && x >= 0.312 && x < 0.385 ? puertoRico : y >= 0.09 && y < 0.1197 && x >= -0.4243 && x < -0.3232 ? samoa : y >= -0.0518 && y < 0.0895 && x >= -0.4243 && x < -0.3824 ? guam : lower48).invert(coordinates);
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
                x - 0.425 * k + _math.epsilon,
                y + 0.12 * k + _math.epsilon
            ],
            [
                x - 0.214 * k - _math.epsilon,
                y + 0.233 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        hawaiiPoint = hawaii.translate([
            x - 0.205 * k,
            y + 0.212 * k
        ]).clipExtent([
            [
                x - 0.214 * k + _math.epsilon,
                y + 0.166 * k + _math.epsilon
            ],
            [
                x - 0.115 * k - _math.epsilon,
                y + 0.233 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        puertoRicoPoint = puertoRico.translate([
            x + 0.35 * k,
            y + 0.224 * k
        ]).clipExtent([
            [
                x + 0.312 * k + _math.epsilon,
                y + 0.2064 * k + _math.epsilon
            ],
            [
                x + 0.385 * k - _math.epsilon,
                y + 0.233 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        samoaPoint = samoa.translate([
            x - 0.492 * k,
            y + 0.09 * k
        ]).clipExtent([
            [
                x - 0.4243 * k + _math.epsilon,
                y + 0.0903 * k + _math.epsilon
            ],
            [
                x - 0.3233 * k - _math.epsilon,
                y + 0.1197 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        guamPoint = guam.translate([
            x - 0.408 * k,
            y + 0.018 * k
        ]).clipExtent([
            [
                x - 0.4244 * k + _math.epsilon,
                y - 0.0519 * k + _math.epsilon
            ],
            [
                x - 0.3824 * k - _math.epsilon,
                y + 0.0895 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        return reset();
    };
    albersUsa.fitExtent = function(extent, object) {
        return _fit.fitExtent(albersUsa, extent, object);
    };
    albersUsa.fitSize = function(size, object) {
        return _fit.fitSize(albersUsa, size, object);
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
        var context = _d3Path.path();
        this.drawCompositionBorders(context);
        return context.toString();
    };
    return albersUsa.scale(1070);
};

},{"./math":"836Zq","d3-geo":"euFVP","./fit":"ke3qh","d3-path":"4S67G","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2pleb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function() {
    var cache, cacheStream, iberianPeninsule = _d3Geo.geoConicConformal().rotate([
        5,
        -38.6
    ]).parallels([
        0,
        60
    ]), iberianPeninsulePoint, canaryIslands = _d3Geo.geoConicConformal().rotate([
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
                x - 0.1331 * k + _math.epsilon,
                y + 0.053457 * k + _math.epsilon
            ],
            [
                x - 0.0354 * k - _math.epsilon,
                y + 0.08969 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        return reset();
    };
    conicConformalSpain.fitExtent = function(extent, object) {
        return _fit.fitExtent(conicConformalSpain, extent, object);
    };
    conicConformalSpain.fitSize = function(size, object) {
        return _fit.fitSize(conicConformalSpain, size, object);
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
        var context = _d3Path.path();
        this.drawCompositionBorders(context);
        return context.toString();
    };
    return conicConformalSpain.scale(2700);
};

},{"./math":"836Zq","d3-geo":"euFVP","./fit":"ke3qh","d3-path":"4S67G","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5Ezq2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function() {
    var cache, cacheStream, iberianPeninsule = _d3Geo.geoConicConformal().rotate([
        10,
        -39.3
    ]).parallels([
        0,
        60
    ]), iberianPeninsulePoint, madeira = _d3Geo.geoConicConformal().rotate([
        17,
        -32.7
    ]).parallels([
        0,
        60
    ]), madeiraPoint, azores = _d3Geo.geoConicConformal().rotate([
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
                x - 0.0388 * k + _math.epsilon,
                y + 0.0093 * k + _math.epsilon
            ],
            [
                x - 0.0116 * k - _math.epsilon,
                y + 0.0368 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        azoresPoint = azores.translate([
            x - 0.045 * k,
            y + -0.02 * k
        ]).clipExtent([
            [
                x - 0.0778 * k + _math.epsilon,
                y - 0.0413 * k + _math.epsilon
            ],
            [
                x - 0.0117 * k - _math.epsilon,
                y + 0.0091 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        return reset();
    };
    conicConformalPortugal.fitExtent = function(extent, object) {
        return _fit.fitExtent(conicConformalPortugal, extent, object);
    };
    conicConformalPortugal.fitSize = function(size, object) {
        return _fit.fitSize(conicConformalPortugal, size, object);
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
        var context = _d3Path.path();
        this.drawCompositionBorders(context);
        return context.toString();
    };
    return conicConformalPortugal.scale(4200);
};

},{"./math":"836Zq","d3-geo":"euFVP","./fit":"ke3qh","d3-path":"4S67G","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"b1SeC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function() {
    var cache, cacheStream, mainland = _d3Geo.geoMercator().rotate([
        80,
        1.5
    ]), mainlandPoint, galapagos = _d3Geo.geoMercator().rotate([
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
                x - 0.0857 * k + _math.epsilon,
                y - 0.0676 * k + _math.epsilon
            ],
            [
                x - 0.0263 * k - _math.epsilon,
                y - 0.026 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        return reset();
    };
    mercatorEcuador.fitExtent = function(extent, object) {
        return _fit.fitExtent(mercatorEcuador, extent, object);
    };
    mercatorEcuador.fitSize = function(size, object) {
        return _fit.fitSize(mercatorEcuador, size, object);
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
        var context = _d3Path.path();
        this.drawCompositionBorders(context);
        return context.toString();
    };
    return mercatorEcuador.scale(3500);
};

},{"./math":"836Zq","d3-geo":"euFVP","./fit":"ke3qh","d3-path":"4S67G","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2cwCG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function() {
    var cache, cacheStream, mainland = _d3Geo.geoTransverseMercator().rotate([
        72,
        37
    ]), mainlandPoint, antarctic = _d3Geo.geoStereographic().rotate([
        72,
        0
    ]), antarcticPoint, juanFernandez = _d3Geo.geoMercator().rotate([
        80,
        33.5
    ]), juanFernandezPoint, pascua = _d3Geo.geoMercator().rotate([
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
                x - 0.1166 * k + _math.epsilon,
                y + 0.2582 * k + _math.epsilon
            ],
            [
                x - 0.06 * k - _math.epsilon,
                y + 0.32 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        juanFernandezPoint = juanFernandez.translate([
            x - 0.092 * k,
            y - 0 * k
        ]).clipExtent([
            [
                x - 0.114 * k + _math.epsilon,
                y - 0.013 * k + _math.epsilon
            ],
            [
                x - 0.0594 * k - _math.epsilon,
                y + 0.0133 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        pascuaPoint = pascua.translate([
            x - 0.089 * k,
            y - 0.0265 * k
        ]).clipExtent([
            [
                x - 0.089 * k + _math.epsilon,
                y + 0.0154 * k + _math.epsilon
            ],
            [
                x - 0.0588 * k - _math.epsilon,
                y + 0.0391 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        return reset();
    };
    transverseMercatorChile.fitExtent = function(extent, object) {
        return _fit.fitExtent(transverseMercatorChile, extent, object);
    };
    transverseMercatorChile.fitSize = function(size, object) {
        return _fit.fitSize(transverseMercatorChile, size, object);
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
        var context = _d3Path.path();
        this.drawCompositionBorders(context);
        return context.toString();
    };
    return transverseMercatorChile.scale(700);
};

},{"./math":"836Zq","d3-geo":"euFVP","./fit":"ke3qh","d3-path":"4S67G","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fkY9w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function() {
    var cache, cacheStream, mainland = _d3Geo.geoConicEquidistant().rotate([
        -136,
        -22
    ]).parallels([
        40,
        34
    ]), mainlandPoint, hokkaido = _d3Geo.geoConicEquidistant().rotate([
        -146,
        -26
    ]).parallels([
        40,
        34
    ]), hokkaidoPoint, okinawa = _d3Geo.geoConicEquidistant().rotate([
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
                x - 0.135 * k + _math.epsilon,
                y - 0.1093 * k + _math.epsilon
            ],
            [
                x - 0.0397 * k - _math.epsilon,
                y - 0.027 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        okinawaPoint = okinawa.translate(_).clipExtent([
            [
                x - 0.0399 * k + _math.epsilon,
                y + 0.0471 * k + _math.epsilon
            ],
            [
                x + 0.051 * k - _math.epsilon,
                y + 0.1114 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        return reset();
    };
    conicEquidistantJapan.fitExtent = function(extent, object) {
        return _fit.fitExtent(conicEquidistantJapan, extent, object);
    };
    conicEquidistantJapan.fitSize = function(size, object) {
        return _fit.fitSize(conicEquidistantJapan, size, object);
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
        var context = _d3Path.path();
        this.drawCompositionBorders(context);
        return context.toString();
    };
    return conicEquidistantJapan.scale(2200);
};

},{"./math":"836Zq","d3-geo":"euFVP","./fit":"ke3qh","d3-path":"4S67G","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ez48y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function() {
    var cache, cacheStream, europe = _d3Geo.geoConicConformal().rotate([
        -3,
        -46.2
    ]).parallels([
        0,
        60
    ]), europePoint, guyane = _d3Geo.geoMercator().center([
        -53.2,
        3.9
    ]), guyanePoint, martinique = _d3Geo.geoMercator().center([
        -61.03,
        14.67
    ]), martiniquePoint, guadeloupe = _d3Geo.geoMercator().center([
        -61.46,
        16.14
    ]), guadeloupePoint, saintBarthelemy = _d3Geo.geoMercator().center([
        -62.85,
        17.92
    ]), saintBarthelemyPoint, stPierreMiquelon = _d3Geo.geoMercator().center([
        -56.23,
        46.93
    ]), stPierreMiquelonPoint, mayotte = _d3Geo.geoMercator().center([
        45.16,
        -12.8
    ]), mayottePoint, reunion = _d3Geo.geoMercator().center([
        55.52,
        -21.13
    ]), reunionPoint, nouvelleCaledonie = _d3Geo.geoMercator().center([
        165.8,
        -21.07
    ]), nouvelleCaledoniePoint, wallisFutuna = _d3Geo.geoMercator().center([
        -178.1,
        -14.3
    ]), wallisFutunaPoint, polynesie = _d3Geo.geoMercator().center([
        -150.55,
        -17.11
    ]), polynesiePoint, polynesie2 = _d3Geo.geoMercator().center([
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
                x - 0.14 * k + _math.epsilon,
                y + 0.029 * k + _math.epsilon
            ],
            [
                x - 0.0996 * k - _math.epsilon,
                y + 0.0864 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        martiniquePoint = martinique.translate([
            x - 0.12 * k,
            y + 0.013 * k
        ]).clipExtent([
            [
                x - 0.14 * k + _math.epsilon,
                y + 0 * k + _math.epsilon
            ],
            [
                x - 0.0996 * k - _math.epsilon,
                y + 0.029 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        guadeloupePoint = guadeloupe.translate([
            x - 0.12 * k,
            y - 0.014 * k
        ]).clipExtent([
            [
                x - 0.14 * k + _math.epsilon,
                y - 0.032 * k + _math.epsilon
            ],
            [
                x - 0.0996 * k - _math.epsilon,
                y + 0 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        saintBarthelemyPoint = saintBarthelemy.translate([
            x - 0.12 * k,
            y - 0.044 * k
        ]).clipExtent([
            [
                x - 0.14 * k + _math.epsilon,
                y - 0.052 * k + _math.epsilon
            ],
            [
                x - 0.0996 * k - _math.epsilon,
                y - 0.032 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        stPierreMiquelonPoint = stPierreMiquelon.translate([
            x - 0.12 * k,
            y - 0.065 * k
        ]).clipExtent([
            [
                x - 0.14 * k + _math.epsilon,
                y - 0.076 * k + _math.epsilon
            ],
            [
                x - 0.0996 * k - _math.epsilon,
                y - 0.052 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        mayottePoint = mayotte.translate([
            x + 0.117 * k,
            y - 0.064 * k
        ]).clipExtent([
            [
                x + 0.0967 * k + _math.epsilon,
                y - 0.076 * k + _math.epsilon
            ],
            [
                x + 0.1371 * k - _math.epsilon,
                y - 0.052 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        reunionPoint = reunion.translate([
            x + 0.116 * k,
            y - 0.0355 * k
        ]).clipExtent([
            [
                x + 0.0967 * k + _math.epsilon,
                y - 0.052 * k + _math.epsilon
            ],
            [
                x + 0.1371 * k - _math.epsilon,
                y - 0.02 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        nouvelleCaledoniePoint = nouvelleCaledonie.translate([
            x + 0.116 * k,
            y - 0.0048 * k
        ]).clipExtent([
            [
                x + 0.0967 * k + _math.epsilon,
                y - 0.02 * k + _math.epsilon
            ],
            [
                x + 0.1371 * k - _math.epsilon,
                y + 0.012 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        wallisFutunaPoint = wallisFutuna.translate([
            x + 0.116 * k,
            y + 0.022 * k
        ]).clipExtent([
            [
                x + 0.0967 * k + _math.epsilon,
                y + 0.012 * k + _math.epsilon
            ],
            [
                x + 0.1371 * k - _math.epsilon,
                y + 0.033 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        polynesie2Point = polynesie2.translate([
            x + 0.11 * k,
            y + 0.045 * k
        ]).clipExtent([
            [
                x + 0.0967 * k + _math.epsilon,
                y + 0.033 * k + _math.epsilon
            ],
            [
                x + 0.1371 * k - _math.epsilon,
                y + 0.06 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        polynesiePoint = polynesie.translate([
            x + 0.115 * k,
            y + 0.075 * k
        ]).clipExtent([
            [
                x + 0.0967 * k + _math.epsilon,
                y + 0.06 * k + _math.epsilon
            ],
            [
                x + 0.1371 * k - _math.epsilon,
                y + 0.0864 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        return reset();
    };
    conicConformalFrance.fitExtent = function(extent, object) {
        return _fit.fitExtent(conicConformalFrance, extent, object);
    };
    conicConformalFrance.fitSize = function(size, object) {
        return _fit.fitSize(conicConformalFrance, size, object);
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
        var context = _d3Path.path();
        this.drawCompositionBorders(context);
        return context.toString();
    };
    return conicConformalFrance.scale(2700);
};

},{"./math":"836Zq","d3-geo":"euFVP","./fit":"ke3qh","d3-path":"4S67G","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kFCFZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function() {
    var cache, cacheStream, europe = _d3Geo.geoConicConformal().rotate([
        -10,
        -53
    ]).parallels([
        0,
        60
    ]), europePoint, guadeloupe = _d3Geo.geoMercator().center([
        -61.46,
        16.14
    ]), guadeloupePoint, guyane = _d3Geo.geoMercator().center([
        -53.2,
        3.9
    ]), guyanePoint, azores = _d3Geo.geoConicConformal().rotate([
        27.8,
        -38.9
    ]).parallels([
        0,
        60
    ]), azoresPoint, azores2 = _d3Geo.geoConicConformal().rotate([
        25.43,
        -37.398
    ]).parallels([
        0,
        60
    ]), azores2Point, azores3 = _d3Geo.geoConicConformal().rotate([
        31.17,
        -39.539
    ]).parallels([
        0,
        60
    ]), azores3Point, madeira = _d3Geo.geoConicConformal().rotate([
        17,
        -32.7
    ]).parallels([
        0,
        60
    ]), madeiraPoint, canaryIslands = _d3Geo.geoConicConformal().rotate([
        16,
        -28.5
    ]).parallels([
        0,
        60
    ]), canaryIslandsPoint, martinique = _d3Geo.geoMercator().center([
        -61.03,
        14.67
    ]), martiniquePoint, mayotte = _d3Geo.geoMercator().center([
        45.16,
        -12.8
    ]), mayottePoint, reunion = _d3Geo.geoMercator().center([
        55.52,
        -21.13
    ]), reunionPoint, malta = _d3Geo.geoConicConformal().rotate([
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
                x + 0.14 * k + _math.epsilon,
                y - 0.31 * k + _math.epsilon
            ],
            [
                x + 0.24 * k - _math.epsilon,
                y - 0.24 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        guyanePoint = guyane.translate([
            x + 0.19 * k,
            y - 0.205 * k
        ]).clipExtent([
            [
                x + 0.14 * k + _math.epsilon,
                y - 0.24 * k + _math.epsilon
            ],
            [
                x + 0.24 * k - _math.epsilon,
                y - 0.17 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        azoresPoint = azores.translate([
            x + 0.19 * k,
            y - 0.135 * k
        ]).clipExtent([
            [
                x + 0.14 * k + _math.epsilon,
                y - 0.17 * k + _math.epsilon
            ],
            [
                x + 0.24 * k - _math.epsilon,
                y - 0.1 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        azores2Point = azores2.translate([
            x + 0.225 * k,
            y - 0.147 * k
        ]).clipExtent([
            [
                x + 0.21 * k + _math.epsilon,
                y - 0.17 * k + _math.epsilon
            ],
            [
                x + 0.24 * k - _math.epsilon,
                y - 0.12 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        azores3Point = azores3.translate([
            x + 0.153 * k,
            y - 0.15 * k
        ]).clipExtent([
            [
                x + 0.14 * k + _math.epsilon,
                y - 0.17 * k + _math.epsilon
            ],
            [
                x + 0.165 * k - _math.epsilon,
                y - 0.14 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        madeiraPoint = madeira.translate([
            x + 0.19 * k,
            y - 0.065 * k
        ]).clipExtent([
            [
                x + 0.14 * k + _math.epsilon,
                y - 0.1 * k + _math.epsilon
            ],
            [
                x + 0.24 * k - _math.epsilon,
                y - 0.03 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        canaryIslandsPoint = canaryIslands.translate([
            x + 0.19 * k,
            y + 0.005 * k
        ]).clipExtent([
            [
                x + 0.14 * k + _math.epsilon,
                y - 0.03 * k + _math.epsilon
            ],
            [
                x + 0.24 * k - _math.epsilon,
                y + 0.04 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        martiniquePoint = martinique.translate([
            x + 0.29 * k,
            y - 0.275 * k
        ]).clipExtent([
            [
                x + 0.24 * k + _math.epsilon,
                y - 0.31 * k + _math.epsilon
            ],
            [
                x + 0.34 * k - _math.epsilon,
                y - 0.24 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        mayottePoint = mayotte.translate([
            x + 0.29 * k,
            y - 0.205 * k
        ]).clipExtent([
            [
                x + 0.24 * k + _math.epsilon,
                y - 0.24 * k + _math.epsilon
            ],
            [
                x + 0.34 * k - _math.epsilon,
                y - 0.17 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        reunionPoint = reunion.translate([
            x + 0.29 * k,
            y - 0.135 * k
        ]).clipExtent([
            [
                x + 0.24 * k + _math.epsilon,
                y - 0.17 * k + _math.epsilon
            ],
            [
                x + 0.34 * k - _math.epsilon,
                y - 0.1 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        maltaPoint = malta.translate([
            x + 0.29 * k,
            y - 0.065 * k
        ]).clipExtent([
            [
                x + 0.24 * k + _math.epsilon,
                y - 0.1 * k + _math.epsilon
            ],
            [
                x + 0.34 * k - _math.epsilon,
                y - 0.03 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        return reset();
    };
    conicConformalEurope.fitExtent = function(extent, object) {
        return _fit.fitExtent(conicConformalEurope, extent, object);
    };
    conicConformalEurope.fitSize = function(size, object) {
        return _fit.fitSize(conicConformalEurope, size, object);
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
        var context = _d3Path.path();
        this.drawCompositionBorders(context);
        return context.toString();
    };
    return conicConformalEurope.scale(750);
};

},{"./math":"836Zq","d3-geo":"euFVP","./fit":"ke3qh","d3-path":"4S67G","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eOvZA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function() {
    var cache, cacheStream, netherlandsMainland = _d3Geo.geoConicConformal().rotate([
        -5.5,
        -52.2
    ]).parallels([
        0,
        60
    ]), netherlandsMainlandPoint, bonaire = _d3Geo.geoMercator().center([
        -68.25,
        12.2
    ]), bonairePoint, sabaSintEustatius = _d3Geo.geoMercator().center([
        -63.1,
        17.5
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
            sabaSintEustatius.stream(stream), 
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
                y - 0.026 * k
            ],
            [
                x + 0.023 * k,
                y + 0.026 * k
            ], 
        ]).stream(pointStream);
        bonairePoint = bonaire.translate([
            x - 0.0186 * k,
            y - 0.00325 * k
        ]).clipExtent([
            [
                x - 0.0232 * k + _math.epsilon,
                y - 0.0067 * k + _math.epsilon
            ],
            [
                x - 0.0154 * k - _math.epsilon,
                y + 0.0015 * k - _math.epsilon
            ], 
        ]).stream(pointStream);
        sabaSintEustatiusPoint = sabaSintEustatius.translate([
            x - 0.0185 * k,
            y - 0.017 * k
        ]).clipExtent([
            [
                x - 0.023 * k + _math.epsilon,
                y - 0.022 * k + _math.epsilon
            ],
            [
                x - 0.014 * k - _math.epsilon,
                y - 0.014 * k - _math.epsilon
            ], 
        ]).stream(pointStream);
        return reset();
    };
    conicConformalNetherlands.fitExtent = function(extent, object) {
        return _fit.fitExtent(conicConformalNetherlands, extent, object);
    };
    conicConformalNetherlands.fitSize = function(size, object) {
        return _fit.fitSize(conicConformalNetherlands, size, object);
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
            4.043,
            52.572
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
            3.262,
            53.439
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
        var context = _d3Path.path();
        this.drawCompositionBorders(context);
        return context.toString();
    };
    return conicConformalNetherlands.scale(4200);
};

},{"./math":"836Zq","d3-geo":"euFVP","./fit":"ke3qh","d3-path":"4S67G","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9IV5K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function() {
    var cache, cacheStream, peninsular = _d3Geo.geoMercator().center([
        105.25,
        4
    ]), peninsularPoint, borneo = _d3Geo.geoMercator().center([
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
        return (y >= -0.0521 && y < 0.0229 && x >= -0.0111 && x < 0.1 ? borneo : peninsular).invert(coordinates);
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
                x - 0.11 * k,
                y - 0.0521 * k
            ],
            [
                x - 0.0111 * k,
                y + 0.0521 * k
            ]
        ]).stream(pointStream);
        borneoPoint = borneo.translate([
            x + 0.09 * k,
            y - 0 * k
        ]).clipExtent([
            [
                x - 0.0111 * k + _math.epsilon,
                y - 0.0521 * k + _math.epsilon
            ],
            [
                x + 0.1 * k - _math.epsilon,
                y + 0.024 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        return reset();
    };
    mercatorMalaysia.fitExtent = function(extent, object) {
        return _fit.fitExtent(mercatorMalaysia, extent, object);
    };
    mercatorMalaysia.fitSize = function(size, object) {
        return _fit.fitSize(mercatorMalaysia, size, object);
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
            104.215,
            4.5651
        ]);
        context.moveTo(llbor[0], llbor[1]);
        context.lineTo(lmbor[0], lmbor[1]);
        context.lineTo(lrbor[0], lrbor[1]);
        context.lineTo(llrbor[0], llrbor[1]);
    };
    mercatorMalaysia.getCompositionBorders = function() {
        var context = _d3Path.path();
        this.drawCompositionBorders(context);
        return context.toString();
    };
    return mercatorMalaysia.scale(4800);
};

},{"./math":"836Zq","d3-geo":"euFVP","./fit":"ke3qh","d3-path":"4S67G","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3rOZc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function() {
    var cache, cacheStream, continent = _d3Geo.geoMercator().rotate([
        -9.5,
        -1.5
    ]), continentPoint, bioko = _d3Geo.geoMercator().rotate([
        -8.6,
        -3.5
    ]), biokoPoint, annobon = _d3Geo.geoMercator().rotate([
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
                x - 0.038 * k + _math.epsilon,
                y - 0.02 * k + _math.epsilon
            ],
            [
                x - 0.005 * k - _math.epsilon,
                y + 0 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        annobonPoint = annobon.translate([
            x - 0.025 * k,
            y + 0.01 * k
        ]).clipExtent([
            [
                x - 0.038 * k + _math.epsilon,
                y - 0 * k + _math.epsilon
            ],
            [
                x - 0.005 * k - _math.epsilon,
                y + 0.02 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        return reset();
    };
    mercatorEquatorialGuinea.fitExtent = function(extent, object) {
        return _fit.fitExtent(mercatorEquatorialGuinea, extent, object);
    };
    mercatorEquatorialGuinea.fitSize = function(size, object) {
        return _fit.fitSize(mercatorEquatorialGuinea, size, object);
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
        var context = _d3Path.path();
        this.drawCompositionBorders(context);
        return context.toString();
    };
    return mercatorEquatorialGuinea.scale(12000);
};

},{"./math":"836Zq","d3-geo":"euFVP","./fit":"ke3qh","d3-path":"4S67G","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gNBuy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = function() {
    var cache, cacheStream, main = _d3Geo.geoAlbers().rotate([
        4.4,
        0.8
    ]).center([
        0,
        55.4
    ]).parallels([
        50,
        60
    ]), mainPoint, shetland = _d3Geo.geoAlbers().rotate([
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
                x + 0.029 * k + _math.epsilon,
                y - 0.089 * k + _math.epsilon
            ],
            [
                x + 0.046 * k - _math.epsilon,
                y - 0.06 * k - _math.epsilon
            ]
        ]).stream(pointStream);
        return reset();
    };
    albersUk.fitExtent = function(extent, object) {
        return _fit.fitExtent(albersUk, extent, object);
    };
    albersUk.fitSize = function(size, object) {
        return _fit.fitSize(albersUk, size, object);
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
        var context = _d3Path.path();
        this.drawCompositionBorders(context);
        return context.toString();
    };
    return albersUk.scale(2800);
};

},{"./math":"836Zq","d3-geo":"euFVP","./fit":"ke3qh","d3-path":"4S67G","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dArDf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bbox", ()=>_bboxJsDefault.default
);
parcelHelpers.export(exports, "feature", ()=>_featureJsDefault.default
);
parcelHelpers.export(exports, "mesh", ()=>_meshJsDefault.default
);
parcelHelpers.export(exports, "meshArcs", ()=>_meshJs.meshArcs
);
parcelHelpers.export(exports, "merge", ()=>_mergeJsDefault.default
);
parcelHelpers.export(exports, "mergeArcs", ()=>_mergeJs.mergeArcs
);
parcelHelpers.export(exports, "neighbors", ()=>_neighborsJsDefault.default
);
parcelHelpers.export(exports, "quantize", ()=>_quantizeJsDefault.default
);
parcelHelpers.export(exports, "transform", ()=>_transformJsDefault.default
);
parcelHelpers.export(exports, "untransform", ()=>_untransformJsDefault.default
);
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

},{"./bbox.js":"1oy1b","./feature.js":"6f9ml","./mesh.js":"1wvts","./merge.js":"i0R6x","./neighbors.js":"hn7Jm","./quantize.js":"dwhkn","./transform.js":"3WBxE","./untransform.js":"214h8","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1oy1b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _transformJs = require("./transform.js");
var _transformJsDefault = parcelHelpers.interopDefault(_transformJs);
exports.default = function(topology) {
    var t = _transformJsDefault.default(topology.transform), key, x0 = Infinity, y0 = x0, x1 = -x0, y1 = -x0;
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
};

},{"./transform.js":"3WBxE","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3WBxE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
exports.default = function(transform) {
    if (transform == null) return _identityJsDefault.default;
    var x0, y0, kx = transform.scale[0], ky = transform.scale[1], dx = transform.translate[0], dy = transform.translate[1];
    return function(input, i) {
        if (!i) x0 = y0 = 0;
        var j = 2, n = input.length, output = new Array(n);
        output[0] = (x0 += input[0]) * kx + dx;
        output[1] = (y0 += input[1]) * ky + dy;
        while(j < n)output[j] = input[j], ++j;
        return output;
    };
};

},{"./identity.js":"1j8ma","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1j8ma":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(x) {
    return x;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6f9ml":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "object", ()=>object
);
var _reverseJs = require("./reverse.js");
var _reverseJsDefault = parcelHelpers.interopDefault(_reverseJs);
var _transformJs = require("./transform.js");
var _transformJsDefault = parcelHelpers.interopDefault(_transformJs);
exports.default = function(topology, o1) {
    if (typeof o1 === "string") o1 = topology.objects[o1];
    return o1.type === "GeometryCollection" ? {
        type: "FeatureCollection",
        features: o1.geometries.map(function(o) {
            return feature(topology, o);
        })
    } : feature(topology, o1);
};
function feature(topology, o) {
    var id = o.id, bbox = o.bbox, properties = o.properties == null ? {
    } : o.properties, geometry = object(topology, o);
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
function object(topology, o2) {
    var transformPoint = _transformJsDefault.default(topology.transform), arcs1 = topology.arcs;
    function arc(i, points) {
        if (points.length) points.pop();
        for(var a = arcs1[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k)points.push(transformPoint(a[k], k));
        if (i < 0) _reverseJsDefault.default(points, n);
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
    return geometry(o2);
}

},{"./reverse.js":"ayIvy","./transform.js":"3WBxE","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ayIvy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(array, n) {
    var t, j = array.length, i = j - n;
    while(i < --j)t = array[i], array[i++] = array[j], array[j] = t;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1wvts":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "meshArcs", ()=>meshArcs
);
var _featureJs = require("./feature.js");
var _stitchJs = require("./stitch.js");
var _stitchJsDefault = parcelHelpers.interopDefault(_stitchJs);
exports.default = function(topology) {
    return _featureJs.object(topology, meshArcs.apply(this, arguments));
};
function meshArcs(topology, object, filter) {
    var arcs, i, n;
    if (arguments.length > 1) arcs = extractArcs(topology, object, filter);
    else for(i = 0, arcs = new Array(n = topology.arcs.length); i < n; ++i)arcs[i] = i;
    return {
        type: "MultiLineString",
        arcs: _stitchJsDefault.default(topology, arcs)
    };
}
function extractArcs(topology, object, filter) {
    var arcs1 = [], geomsByArc = [], geom;
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
        arcs1.push(geoms[0].i);
    } : function(geoms) {
        if (filter(geoms[0].g, geoms[geoms.length - 1].g)) arcs1.push(geoms[0].i);
    });
    return arcs1;
}

},{"./feature.js":"6f9ml","./stitch.js":"hz1RZ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hz1RZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(topology, arcs) {
    var stitchedArcs = {
    }, fragmentByStart1 = {
    }, fragmentByEnd1 = {
    }, fragments = [], emptyIndex = -1;
    // Stitch empty arcs first, since they may be subsumed by other arcs.
    arcs.forEach(function(i, j) {
        var arc = topology.arcs[i < 0 ? ~i : i], t;
        if (arc.length < 3 && !arc[1][0] && !arc[1][1]) t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;
    });
    arcs.forEach(function(i) {
        var e = ends(i), start = e[0], end = e[1], f, g;
        if (f = fragmentByEnd1[start]) {
            delete fragmentByEnd1[f.end];
            f.push(i);
            f.end = end;
            if (g = fragmentByStart1[end]) {
                delete fragmentByStart1[g.start];
                var fg = g === f ? f : f.concat(g);
                fragmentByStart1[fg.start = f.start] = fragmentByEnd1[fg.end = g.end] = fg;
            } else fragmentByStart1[f.start] = fragmentByEnd1[f.end] = f;
        } else if (f = fragmentByStart1[end]) {
            delete fragmentByStart1[f.start];
            f.unshift(i);
            f.start = start;
            if (g = fragmentByEnd1[start]) {
                delete fragmentByEnd1[g.end];
                var gf = g === f ? f : g.concat(f);
                fragmentByStart1[gf.start = g.start] = fragmentByEnd1[gf.end = f.end] = gf;
            } else fragmentByStart1[f.start] = fragmentByEnd1[f.end] = f;
        } else {
            f = [
                i
            ];
            fragmentByStart1[f.start = start] = fragmentByEnd1[f.end = end] = f;
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
    flush(fragmentByEnd1, fragmentByStart1);
    flush(fragmentByStart1, fragmentByEnd1);
    arcs.forEach(function(i) {
        if (!stitchedArcs[i < 0 ? ~i : i]) fragments.push([
            i
        ]);
    });
    return fragments;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"i0R6x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeArcs", ()=>mergeArcs
);
var _featureJs = require("./feature.js");
var _stitchJs = require("./stitch.js");
var _stitchJsDefault = parcelHelpers.interopDefault(_stitchJs);
function planarRingArea(ring) {
    var i = -1, n = ring.length, a, b = ring[n - 1], area = 0;
    while(++i < n)a = b, b = ring[i], area += a[0] * b[1] - a[1] * b[0];
    return Math.abs(area); // Note: doubled area!
}
exports.default = function(topology) {
    return _featureJs.object(topology, mergeArcs.apply(this, arguments));
};
function mergeArcs(topology, objects) {
    var polygonsByArc = {
    }, polygons1 = [], groups = [];
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
        polygons1.push(polygon);
    }
    function area(ring) {
        return planarRingArea(_featureJs.object(topology, {
            type: "Polygon",
            arcs: [
                ring
            ]
        }).coordinates[0]);
    }
    polygons1.forEach(function(polygon1) {
        if (!polygon1._) {
            var group = [], neighbors = [
                polygon1
            ];
            polygon1._ = 1;
            groups.push(group);
            while(polygon1 = neighbors.pop()){
                group.push(polygon1);
                polygon1.forEach(function(ring) {
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
    polygons1.forEach(function(polygon) {
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
            arcs = _stitchJsDefault.default(topology, arcs);
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

},{"./feature.js":"6f9ml","./stitch.js":"hz1RZ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hn7Jm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bisectJs = require("./bisect.js");
var _bisectJsDefault = parcelHelpers.interopDefault(_bisectJs);
exports.default = function(objects) {
    var indexesByArc = {
    }, neighbors = objects.map(function() {
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
    function geometry(o1, i) {
        if (o1.type === "GeometryCollection") o1.geometries.forEach(function(o) {
            geometry(o, i);
        });
        else if (o1.type in geometryType) geometryType[o1.type](o1.arcs, i);
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
    for(var i1 in indexesByArc){
        for(var indexes = indexesByArc[i1], m = indexes.length, j = 0; j < m; ++j)for(var k = j + 1; k < m; ++k){
            var ij = indexes[j], ik = indexes[k], n;
            if ((n = neighbors[ij])[i1 = _bisectJsDefault.default(n, ik)] !== ik) n.splice(i1, 0, ik);
            if ((n = neighbors[ik])[i1 = _bisectJsDefault.default(n, ij)] !== ij) n.splice(i1, 0, ij);
        }
    }
    return neighbors;
};

},{"./bisect.js":"htLk5","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"htLk5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(a, x) {
    var lo = 0, hi = a.length;
    while(lo < hi){
        var mid = lo + hi >>> 1;
        if (a[mid] < x) lo = mid + 1;
        else hi = mid;
    }
    return lo;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dwhkn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bboxJs = require("./bbox.js");
var _bboxJsDefault = parcelHelpers.interopDefault(_bboxJs);
var _untransformJs = require("./untransform.js");
var _untransformJsDefault = parcelHelpers.interopDefault(_untransformJs);
exports.default = function(topology, transform) {
    if (topology.transform) throw new Error("already quantized");
    if (!transform || !transform.scale) {
        if (!((n = Math.floor(transform)) >= 2)) throw new Error("n must be ≥2");
        box = topology.bbox || _bboxJsDefault.default(topology);
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
    var t = _untransformJsDefault.default(transform), box, key, inputs = topology.objects, outputs = {
    };
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
};

},{"./bbox.js":"1oy1b","./untransform.js":"214h8","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"214h8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
exports.default = function(transform) {
    if (transform == null) return _identityJsDefault.default;
    var x0, y0, kx = transform.scale[0], ky = transform.scale[1], dx = transform.translate[0], dy = transform.translate[1];
    return function(input, i) {
        if (!i) x0 = y0 = 0;
        var j = 2, n = input.length, output = new Array(n), x1 = Math.round((input[0] - dx) / kx), y1 = Math.round((input[1] - dy) / ky);
        output[0] = x1 - x0, x0 = x1;
        output[1] = y1 - y0, y0 = y1;
        while(j < n)output[j] = input[j], ++j;
        return output;
    };
};

},{"./identity.js":"1j8ma","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9RX9R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "percent", ()=>percent
);
parcelHelpers.export(exports, "formatDate", ()=>formatDate
);
parcelHelpers.export(exports, "getProp", ()=>getProp
);
const percent = (num)=>num?.toLocaleString(undefined, {
        style: "percent"
    })
;
const formatDate = (date, opts = {
})=>date?.toLocaleDateString(undefined, opts)
;
const getProp = (...props)=>(obj)=>props.reduce((objNode, prop)=>objNode && objNode[prop] ? objNode[prop] : null
        , obj)
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6V52N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FEATURE_ID", ()=>FEATURE_ID
);
parcelHelpers.export(exports, "FEATURE_VALUES", ()=>FEATURE_VALUES
);
parcelHelpers.export(exports, "FEATURE_DESC", ()=>FEATURE_DESC
);
parcelHelpers.export(exports, "FEATURE_CODE", ()=>FEATURE_CODE
);
parcelHelpers.export(exports, "URLS", ()=>URLS
);
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
            url: _esCcaaTopoJsonDefault.default
        },
        {
            url: _esProvTopoJsonDefault.default
        }
    ],
    [
        {
            url: _anTopoJsonDefault.default,
            code: "ES-AN"
        },
        {
            url: _asTopoJsonDefault.default,
            code: "ES-AS"
        },
        {
            url: _arTopoJsonDefault.default,
            code: "ES-AR"
        },
        {
            url: _cnTopoJsonDefault.default,
            code: "ES-CN"
        },
        {
            url: _cbTopoJsonDefault.default,
            code: "ES-CB"
        },
        {
            url: _clTopoJsonDefault.default,
            code: "ES-CL"
        },
        {
            url: _cmTopoJsonDefault.default,
            code: "ES-CM"
        },
        {
            url: _ctTopoJsonDefault.default,
            code: "ES-CT"
        },
        {
            url: _mdTopoJsonDefault.default,
            code: "ES-MD"
        },
        {
            url: _vcTopoJsonDefault.default,
            code: "ES-VC"
        },
        {
            url: _pvTopoJsonDefault.default,
            code: "ES-PV"
        },
        {
            url: _exTopoJsonDefault.default,
            code: "ES-EX"
        },
        {
            url: _gaTopoJsonDefault.default,
            code: "ES-GA"
        },
        {
            url: _ibTopoJsonDefault.default,
            code: "ES-IB"
        },
        {
            url: _riTopoJsonDefault.default,
            code: "ES-RI"
        },
        {
            url: _ncTopoJsonDefault.default,
            code: "ES-NC"
        },
        {
            url: _mcTopoJsonDefault.default,
            code: "ES-MC"
        },
        {
            url: _ceTopoJsonDefault.default,
            code: "ES-CE"
        },
        {
            url: _mlTopoJsonDefault.default,
            code: "ES-ML"
        }
    ]
];

},{"url:../../static/AN.topo.json":"4uKPR","url:../../static/AS.topo.json":"8GMgS","url:../../static/AR.topo.json":"kO21W","url:../../static/CN.topo.json":"fHdaM","url:../../static/CB.topo.json":"32bTe","url:../../static/CL.topo.json":"fo5MN","url:../../static/CM.topo.json":"emADj","url:../../static/CT.topo.json":"hSSKu","url:../../static/MD.topo.json":"iP9Ab","url:../../static/VC.topo.json":"gaKgW","url:../../static/PV.topo.json":"3xl8U","url:../../static/EX.topo.json":"97Jv8","url:../../static/GA.topo.json":"j6Rvm","url:../../static/IB.topo.json":"iH9rL","url:../../static/RI.topo.json":"4Z9wq","url:../../static/NC.topo.json":"7eJgP","url:../../static/MC.topo.json":"dI7gX","url:../../static/ES.ccaa.topo.json":"enaIi","url:../../static/ES.prov.topo.json":"9zPaM","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","url:../../static/CE.topo.json":"jgj7z","url:../../static/ML.topo.json":"h7KYB"}],"4uKPR":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "AN.topo.12a75f37.json" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"chiK4":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
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
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"8GMgS":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "AS.topo.c504c24c.json" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"kO21W":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "AR.topo.454446a9.json" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"fHdaM":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "CN.topo.67997552.json" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"32bTe":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "CB.topo.88e12fdc.json" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"fo5MN":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "CL.topo.109b803c.json" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"emADj":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "CM.topo.d86b9bd4.json" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"hSSKu":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "CT.topo.d8fa968b.json" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"iP9Ab":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "MD.topo.566d1a10.json" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"gaKgW":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "VC.topo.b2ae067e.json" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"3xl8U":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "PV.topo.28ec467c.json" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"97Jv8":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "EX.topo.8fc20206.json" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"j6Rvm":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "GA.topo.8c63729b.json" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"iH9rL":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "IB.topo.3f5069ad.json" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"4Z9wq":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "RI.topo.dd32f4e0.json" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"7eJgP":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "NC.topo.46af0ef7.json" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"dI7gX":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "MC.topo.aa14d0a7.json" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"enaIi":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "ES.ccaa.topo.8b1f73ae.json" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"9zPaM":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "ES.prov.topo.dbc1d0b1.json" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"jgj7z":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "CE.topo.2410b70d.json" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"h7KYB":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "ML.topo.47fb1f22.json" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"hYzmz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpers = require("./helpers");
class Legend {
    constructor(node, { range , colorScale  }){
        this.container = node.append("div").attr("class", "legend card").on("click", (e)=>this.onClick(e)
        );
        this.scale = colorScale;
        this.range = range;
    }
    render() {
        this.container.selectAll(".legend__range").data(this.range).join((enter)=>{
            const legendRanges = enter.append("div").attr("class", "legend__range");
            legendRanges.append("i").attr("class", "legend__range-square").style("background-color", (d)=>d
            );
            legendRanges.append("span").text((d)=>{
                const [start, end] = this.scale.invertExtent(d);
                return `${_helpers.percent(start)} - ${_helpers.percent(end)}`;
            });
        }, (update)=>update.selectAll("span").text((d)=>{
                const [start, end] = this.scale.invertExtent(d);
                return `${_helpers.percent(start)} - ${_helpers.percent(end)}`;
            })
        );
    }
    onClick() {
        this.container.classed("hidden", !this.container.classed("hidden"));
    }
}
exports.default = Legend;

},{"./helpers":"9RX9R","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iyhz9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Selection = require("d3-selection");
var _icons = require("./icons");
class Controls {
    constructor(node, { play , stop  }){
        node.append("div").attr("class", "controls card").selectAll("button").data([
            "stop",
            "play"
        ]).join("button").attr("id", (d)=>d
        ).attr("class", "control__button").on("click", (e)=>this.onButtonClick(e)
        ).html((d)=>d === "stop" ? _icons.stopBtn : _icons.playBtn
        );
        this.onPlay = play;
        this.onStop = stop;
    }
    onButtonClick({ target  }) {
        _d3Selection.select("#play").html(_icons.playBtn);
        if (target.id === "play") {
            _d3Selection.select(target).html(_icons.pauseBtn);
            this.onPlay();
        } else if (target.id === "stop") this.onStop();
    }
    stop() {
        _d3Selection.select("#play").html(_icons.playBtn);
    }
}
exports.default = Controls;

},{"d3-selection":"hgWtk","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./icons":"bgFL6"}],"bgFL6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sunBtn", ()=>sunBtn
);
parcelHelpers.export(exports, "moonBtn", ()=>moonBtn
);
parcelHelpers.export(exports, "infoBtn", ()=>infoBtn
);
parcelHelpers.export(exports, "playBtn", ()=>playBtn
);
parcelHelpers.export(exports, "pauseBtn", ()=>pauseBtn
);
parcelHelpers.export(exports, "stopBtn", ()=>stopBtn
);
const sunBtn = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"5\"></circle><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"3\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line><line x1=\"4.22\" y1=\"4.22\" x2=\"5.64\" y2=\"5.64\"></line><line x1=\"18.36\" y1=\"18.36\" x2=\"19.78\" y2=\"19.78\"></line><line x1=\"1\" y1=\"12\" x2=\"3\" y2=\"12\"></line><line x1=\"21\" y1=\"12\" x2=\"23\" y2=\"12\"></line><line x1=\"4.22\" y1=\"19.78\" x2=\"5.64\" y2=\"18.36\"></line><line x1=\"18.36\" y1=\"5.64\" x2=\"19.78\" y2=\"4.22\"></line></svg>";
const moonBtn = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\"></path></svg>";
const infoBtn = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 160\" stroke=\"currentColor\"><path d=\"m80 15c-35.88 0-65 29.12-65 65s29.12 65 65 65 65-29.12 65-65-29.12-65-65-65zm0 10c30.36 0 55 24.64 55 55s-24.64 55-55 55-55-24.64-55-55 24.64-55 55-55z\"/><path d=\"m57.373 18.231a9.3834 9.1153 0 1 1 -18.767 0 9.3834 9.1153 0 1 1 18.767 0z\" transform=\"matrix(1.1989 0 0 1.2342 21.214 28.75)\"/><path d=\"m90.665 110.96c-0.069 2.73 1.211 3.5 4.327 3.82l5.008 0.1v5.12h-39.073v-5.12l5.503-0.1c3.291-0.1 4.082-1.38 4.327-3.82v-30.813c0.035-4.879-6.296-4.113-10.757-3.968v-5.074l30.665-1.105\"/></svg>";
const playBtn = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"5 3 19 12 5 21 5 3\"></polygon></svg>";
const pauseBtn = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"6\" y=\"4\" width=\"4\" height=\"16\"></rect><rect x=\"14\" y=\"4\" width=\"4\" height=\"16\"></rect></svg>";
const stopBtn = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\"></rect></svg>";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1O928":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Drag = require("d3-drag");
var _d3Transition = require("d3-transition");
var _helpers = require("./helpers");
class Slider {
    constructor(node, { drag , timeScale , container , speed  }){
        this.build(node);
        this.timeScale = timeScale;
        this.speed = speed;
        this.container = container;
        this.resize();
        this.onDrag = drag;
        addEventListener("resize", ()=>this.resize()
        );
    }
    build(node1) {
        this.node = node1;
        this.lineSlider = node1.append("line").attr("x1", 0).attr("stroke", "#310234").attr("stroke-width", 10).attr("stroke-linecap", "round");
        this.ghostLineSlider = node1.append("line").attr("x1", 0).attr("stroke", "transparent").attr("stroke-width", 100).attr("stroke-linecap", "round").style("cursor", "crosshair").style("pointer-events", "stroke").call(_d3Drag.drag().on("start.interrupt", ()=>node1.interrupt()
        ).on("start drag", ({ x  })=>this.onDrag(x)
        ));
        this.circle = node1.append("circle").attr("r", 10).attr("fill", "var(--color)").attr("stroke", "#310234").attr("stroke-width", 2).style("pointer-events", "none");
    }
    render({ index , months  }) {
        const t1 = _d3Transition.transition().duration(this.speed);
        const t2 = _d3Transition.transition().duration(this.speed);
        this.circle.transition(t1).attr("cx", index * this.timeScale.step());
        this.node.selectAll("text").data(months.filter((_, ix)=>index === ix
        ), (x)=>x
        ).join((enter1)=>enter1.append("text").attr("dy", "-1em").attr("text-anchor", "end").attr("fill", "var(--heading)").attr("font-size", "2em").text((d)=>`${_helpers.formatDate(new Date(d), {
                    month: "long"
                })} '${_helpers.formatDate(new Date(d), {
                    year: "2-digit"
                })}`
            ).call((enter)=>enter.attr("x", 2 * this.width).transition(t2).attr("x", this.width)
            )
        , (update)=>update
        , (exit1)=>exit1.call((exit)=>exit.transition(t2).style("opacity", 0).attr("x", this.width * 0.5).remove()
            )
        );
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

},{"d3-drag":"dKCUo","d3-transition":"cRYyR","./helpers":"9RX9R","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"efeRg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Tooltip {
    constructor(node, { content  }){
        this.tooltip = node.append("div").attr("class", "tooltip card").on("click", ()=>this.hide()
        );
        this.content = content;
    }
    show({ pageX , pageY  }, data) {
        const x = window.innerWidth / 2 < pageX ? "-125%" : "25%";
        const y = window.innerHeight / 2 < pageY ? "-125%" : "25%";
        this.tooltip.style("opacity", 1).style("top", `${pageY}px`).style("left", `${pageX}px`).style("transform", `translate(${x}, ${y})`).html(this.content(data));
    }
    hide() {
        this.tooltip.style("opacity", 0);
    }
}
exports.default = Tooltip;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6WRXe":[function(require,module,exports) {
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
        this.container = node.append("div").attr("class", "theme card").append("button").attr("class", "control__button").on("click", (e)=>this.onClick(e)
        ).html(currentTheme ? currentTheme === "light" ? _icons.moonBtn : _icons.sunBtn : this.prefersDarkScheme.matches ? _icons.sunBtn : _icons.moonBtn);
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
        this.container.html(theme === "light" ? _icons.moonBtn : _icons.sunBtn);
    }
}
exports.default = Theme;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./icons":"bgFL6"}]},["cSv3F","3auaO"], "3auaO", "parcelRequired02e")

//# sourceMappingURL=index.8b7fb9b3.js.map
