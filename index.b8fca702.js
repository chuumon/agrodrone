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
})({"8bDoD":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5a1bda1ab8fca702";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_USE_SSE: boolean;
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
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
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
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
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
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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

},{}],"3cYfC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _tippyJs = require("tippy.js");
var _tippyJsDefault = parcelHelpers.interopDefault(_tippyJs);
var _tippyCss = require("tippy.js/dist/tippy.css");
var _aos = require("aos");
var _aosDefault = parcelHelpers.interopDefault(_aos);
var _aosCss = require("aos/dist/aos.css");
var _imask = require("imask");
var _imaskDefault = parcelHelpers.interopDefault(_imask);
document.addEventListener("DOMContentLoaded", ()=>{
    (0, _aosDefault.default).init();
    initPhoneMask();
    onFormSubmit(".consultation__form");
    initContactPopup();
    subscribeOnScroll();
    initBurger();
    initNav();
});
function initPhoneMask() {
    const telInput = document.getElementById("tel");
    const mask = (0, _imaskDefault.default)(telInput, {
        mask: "+{38\\0} 00 000 00 00",
        lazy: false,
        placeholderChar: "X"
    });
    telInput.setCustomValidity("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443");
    mask.on("accept", ()=>{
        telInput.setCustomValidity(mask.masked.isComplete ? "" : "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443");
    });
}
function onFormSubmit(selector) {
    const form = document.querySelector(selector);
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        const formData = new FormData(form);
        fetch("./process-form.php", {
            method: "POST",
            body: formData
        }).then((response)=>response.text()).then((data)=>{}).catch((error)=>{});
    });
}
function initContactPopup() {
    (0, _tippyJsDefault.default)("#contact-popup-trigger", {
        content: document.getElementById("contact-popup"),
        interactive: true
    });
}
function subscribeOnScroll() {
    document.addEventListener("scroll", (e)=>{
        const header = document.querySelector(".header");
        if (window.scrollY > 10) header.classList.add("header--contrast");
        else header.classList.remove("header--contrast");
    });
}
function initBurger() {
    const menuBtn = document.querySelector(".burger");
    const menu = document.querySelector(".burger-menu");
    const closeTriggers = [
        ...Array.from(document.querySelectorAll(".burger-menu__link")),
        document.querySelector(".burger-menu__close")
    ];
    menuBtn.addEventListener("click", function() {
        menu.classList.add("burger-menu--active");
        document.body.classList.toggle("lock-scroll");
    });
    closeTriggers.forEach((menuItem)=>{
        menuItem.addEventListener("click", function() {
            menu.classList.toggle("burger-menu--active");
            document.body.classList.toggle("lock-scroll");
        });
    });
}
function initNav() {
    const headerOffset = 96;
    document.querySelectorAll('a[href^="#"]').forEach((anchor)=>{
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            const sectionPosition = section.getBoundingClientRect().top;
            const offsetPosition = sectionPosition + window.scrollY - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });
}

},{"tippy.js":"ccpCS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","tippy.js/dist/tippy.css":"2hEyg","aos":"eRzTM","aos/dist/aos.css":"iYkXi","imask":"aLznl"}],"ccpCS":[function(require,module,exports) {
/**!
* tippy.js v6.3.7
* (c) 2017-2021 atomiks
* MIT License
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateFill", ()=>animateFill);
parcelHelpers.export(exports, "createSingleton", ()=>createSingleton);
parcelHelpers.export(exports, "delegate", ()=>delegate);
parcelHelpers.export(exports, "followCursor", ()=>followCursor);
parcelHelpers.export(exports, "hideAll", ()=>hideAll);
parcelHelpers.export(exports, "inlinePositioning", ()=>inlinePositioning);
parcelHelpers.export(exports, "roundArrow", ()=>ROUND_ARROW);
parcelHelpers.export(exports, "sticky", ()=>sticky);
var _core = require("@popperjs/core");
var ROUND_ARROW = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
var BOX_CLASS = "tippy-box";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var TOUCH_OPTIONS = {
    passive: true,
    capture: true
};
var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO() {
    return document.body;
};
function hasOwnProperty(obj, key) {
    return ({}).hasOwnProperty.call(obj, key);
}
function getValueAtIndexOrReturn(value, index, defaultValue) {
    if (Array.isArray(value)) {
        var v = value[index];
        return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
    }
    return value;
}
function isType(value, type) {
    var str = ({}).toString.call(value);
    return str.indexOf("[object") === 0 && str.indexOf(type + "]") > -1;
}
function invokeWithArgsOrReturn(value, args) {
    return typeof value === "function" ? value.apply(void 0, args) : value;
}
function debounce(fn, ms) {
    // Avoid wrapping in `setTimeout` if ms is 0 anyway
    if (ms === 0) return fn;
    var timeout;
    return function(arg) {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            fn(arg);
        }, ms);
    };
}
function removeProperties(obj, keys) {
    var clone = Object.assign({}, obj);
    keys.forEach(function(key) {
        delete clone[key];
    });
    return clone;
}
function splitBySpaces(value) {
    return value.split(/\s+/).filter(Boolean);
}
function normalizeToArray(value) {
    return [].concat(value);
}
function pushIfUnique(arr, value) {
    if (arr.indexOf(value) === -1) arr.push(value);
}
function unique(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
}
function getBasePlacement(placement) {
    return placement.split("-")[0];
}
function arrayFrom(value) {
    return [].slice.call(value);
}
function removeUndefinedProps(obj) {
    return Object.keys(obj).reduce(function(acc, key) {
        if (obj[key] !== undefined) acc[key] = obj[key];
        return acc;
    }, {});
}
function div() {
    return document.createElement("div");
}
function isElement(value) {
    return [
        "Element",
        "Fragment"
    ].some(function(type) {
        return isType(value, type);
    });
}
function isNodeList(value) {
    return isType(value, "NodeList");
}
function isMouseEvent(value) {
    return isType(value, "MouseEvent");
}
function isReferenceElement(value) {
    return !!(value && value._tippy && value._tippy.reference === value);
}
function getArrayOfElements(value) {
    if (isElement(value)) return [
        value
    ];
    if (isNodeList(value)) return arrayFrom(value);
    if (Array.isArray(value)) return value;
    return arrayFrom(document.querySelectorAll(value));
}
function setTransitionDuration(els, value) {
    els.forEach(function(el) {
        if (el) el.style.transitionDuration = value + "ms";
    });
}
function setVisibilityState(els, state) {
    els.forEach(function(el) {
        if (el) el.setAttribute("data-state", state);
    });
}
function getOwnerDocument(elementOrElements) {
    var _element$ownerDocumen;
    var _normalizeToArray = normalizeToArray(elementOrElements), element = _normalizeToArray[0]; // Elements created via a <template> have an ownerDocument with no reference to the body
    return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
}
function isCursorOutsideInteractiveBorder(popperTreeData, event) {
    var clientX = event.clientX, clientY = event.clientY;
    return popperTreeData.every(function(_ref) {
        var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
        var interactiveBorder = props.interactiveBorder;
        var basePlacement = getBasePlacement(popperState.placement);
        var offsetData = popperState.modifiersData.offset;
        if (!offsetData) return true;
        var topDistance = basePlacement === "bottom" ? offsetData.top.y : 0;
        var bottomDistance = basePlacement === "top" ? offsetData.bottom.y : 0;
        var leftDistance = basePlacement === "right" ? offsetData.left.x : 0;
        var rightDistance = basePlacement === "left" ? offsetData.right.x : 0;
        var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
        var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
        var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
        var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
        return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
    });
}
function updateTransitionEndListener(box, action, listener) {
    var method = action + "EventListener"; // some browsers apparently support `transition` (unprefixed) but only fire
    // `webkitTransitionEnd`...
    [
        "transitionend",
        "webkitTransitionEnd"
    ].forEach(function(event) {
        box[method](event, listener);
    });
}
/**
 * Compared to xxx.contains, this function works for dom structures with shadow
 * dom
 */ function actualContains(parent, child) {
    var target = child;
    while(target){
        var _target$getRootNode;
        if (parent.contains(target)) return true;
        target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
    }
    return false;
}
var currentInput = {
    isTouch: false
};
var lastMouseMoveTime = 0;
/**
 * When a `touchstart` event is fired, it's assumed the user is using touch
 * input. We'll bind a `mousemove` event listener to listen for mouse input in
 * the future. This way, the `isTouch` property is fully dynamic and will handle
 * hybrid devices that use a mix of touch + mouse input.
 */ function onDocumentTouchStart() {
    if (currentInput.isTouch) return;
    currentInput.isTouch = true;
    if (window.performance) document.addEventListener("mousemove", onDocumentMouseMove);
}
/**
 * When two `mousemove` event are fired consecutively within 20ms, it's assumed
 * the user is using mouse input again. `mousemove` can fire on touch devices as
 * well, but very rarely that quickly.
 */ function onDocumentMouseMove() {
    var now = performance.now();
    if (now - lastMouseMoveTime < 20) {
        currentInput.isTouch = false;
        document.removeEventListener("mousemove", onDocumentMouseMove);
    }
    lastMouseMoveTime = now;
}
/**
 * When an element is in focus and has a tippy, leaving the tab/window and
 * returning causes it to show again. For mouse users this is unexpected, but
 * for keyboard use it makes sense.
 * TODO: find a better technique to solve this problem
 */ function onWindowBlur() {
    var activeElement = document.activeElement;
    if (isReferenceElement(activeElement)) {
        var instance = activeElement._tippy;
        if (activeElement.blur && !instance.state.isVisible) activeElement.blur();
    }
}
function bindGlobalEventListeners() {
    document.addEventListener("touchstart", onDocumentTouchStart, TOUCH_OPTIONS);
    window.addEventListener("blur", onWindowBlur);
}
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
var isIE11 = isBrowser ? !!window.msCrypto : false;
function createMemoryLeakWarning(method) {
    var txt = method === "destroy" ? "n already-" : " ";
    return [
        method + "() was called on a" + txt + "destroyed instance. This is a no-op but",
        "indicates a potential memory leak."
    ].join(" ");
}
function clean(value) {
    var spacesAndTabs = /[ \t]{2,}/g;
    var lineStartWithSpaces = /^[ \t]*/gm;
    return value.replace(spacesAndTabs, " ").replace(lineStartWithSpaces, "").trim();
}
function getDevMessage(message) {
    return clean("\n  %ctippy.js\n\n  %c" + clean(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development-only message. It will be removed in production.\n  ");
}
function getFormattedMessage(message) {
    return [
        getDevMessage(message),
        "color: #00C584; font-size: 1.3em; font-weight: bold;",
        "line-height: 1.5",
        "color: #a6a095;"
    ];
} // Assume warnings and errors never have the same message
var visitedMessages;
resetVisitedMessages();
function resetVisitedMessages() {
    visitedMessages = new Set();
}
function warnWhen(condition, message) {
    if (condition && !visitedMessages.has(message)) {
        var _console;
        visitedMessages.add(message);
        (_console = console).warn.apply(_console, getFormattedMessage(message));
    }
}
function errorWhen(condition, message) {
    if (condition && !visitedMessages.has(message)) {
        var _console2;
        visitedMessages.add(message);
        (_console2 = console).error.apply(_console2, getFormattedMessage(message));
    }
}
function validateTargets(targets) {
    var didPassFalsyValue = !targets;
    var didPassPlainObject = Object.prototype.toString.call(targets) === "[object Object]" && !targets.addEventListener;
    errorWhen(didPassFalsyValue, [
        "tippy() was passed",
        "`" + String(targets) + "`",
        "as its targets (first) argument. Valid types are: String, Element,",
        "Element[], or NodeList."
    ].join(" "));
    errorWhen(didPassPlainObject, [
        "tippy() was passed a plain object which is not supported as an argument",
        "for virtual positioning. Use props.getReferenceClientRect instead."
    ].join(" "));
}
var pluginProps = {
    animateFill: false,
    followCursor: false,
    inlinePositioning: false,
    sticky: false
};
var renderProps = {
    allowHTML: false,
    animation: "fade",
    arrow: true,
    content: "",
    inertia: false,
    maxWidth: 350,
    role: "tooltip",
    theme: "",
    zIndex: 9999
};
var defaultProps = Object.assign({
    appendTo: TIPPY_DEFAULT_APPEND_TO,
    aria: {
        content: "auto",
        expanded: "auto"
    },
    delay: 0,
    duration: [
        300,
        250
    ],
    getReferenceClientRect: null,
    hideOnClick: true,
    ignoreAttributes: false,
    interactive: false,
    interactiveBorder: 2,
    interactiveDebounce: 0,
    moveTransition: "",
    offset: [
        0,
        10
    ],
    onAfterUpdate: function onAfterUpdate() {},
    onBeforeUpdate: function onBeforeUpdate() {},
    onCreate: function onCreate() {},
    onDestroy: function onDestroy() {},
    onHidden: function onHidden() {},
    onHide: function onHide() {},
    onMount: function onMount() {},
    onShow: function onShow() {},
    onShown: function onShown() {},
    onTrigger: function onTrigger() {},
    onUntrigger: function onUntrigger() {},
    onClickOutside: function onClickOutside() {},
    placement: "top",
    plugins: [],
    popperOptions: {},
    render: null,
    showOnCreate: false,
    touch: true,
    trigger: "mouseenter focus",
    triggerTarget: null
}, pluginProps, renderProps);
var defaultKeys = Object.keys(defaultProps);
var setDefaultProps = function setDefaultProps(partialProps) {
    validateProps(partialProps, []);
    var keys = Object.keys(partialProps);
    keys.forEach(function(key) {
        defaultProps[key] = partialProps[key];
    });
};
function getExtendedPassedProps(passedProps) {
    var plugins = passedProps.plugins || [];
    var pluginProps = plugins.reduce(function(acc, plugin) {
        var name = plugin.name, defaultValue = plugin.defaultValue;
        if (name) {
            var _name;
            acc[name] = passedProps[name] !== undefined ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
        }
        return acc;
    }, {});
    return Object.assign({}, passedProps, pluginProps);
}
function getDataAttributeProps(reference, plugins) {
    var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
        plugins: plugins
    }))) : defaultKeys;
    var props = propKeys.reduce(function(acc, key) {
        var valueAsString = (reference.getAttribute("data-tippy-" + key) || "").trim();
        if (!valueAsString) return acc;
        if (key === "content") acc[key] = valueAsString;
        else try {
            acc[key] = JSON.parse(valueAsString);
        } catch (e) {
            acc[key] = valueAsString;
        }
        return acc;
    }, {});
    return props;
}
function evaluateProps(reference, props) {
    var out = Object.assign({}, props, {
        content: invokeWithArgsOrReturn(props.content, [
            reference
        ])
    }, props.ignoreAttributes ? {} : getDataAttributeProps(reference, props.plugins));
    out.aria = Object.assign({}, defaultProps.aria, out.aria);
    out.aria = {
        expanded: out.aria.expanded === "auto" ? props.interactive : out.aria.expanded,
        content: out.aria.content === "auto" ? props.interactive ? null : "describedby" : out.aria.content
    };
    return out;
}
function validateProps(partialProps, plugins) {
    if (partialProps === void 0) partialProps = {};
    if (plugins === void 0) plugins = [];
    var keys = Object.keys(partialProps);
    keys.forEach(function(prop) {
        var nonPluginProps = removeProperties(defaultProps, Object.keys(pluginProps));
        var didPassUnknownProp = !hasOwnProperty(nonPluginProps, prop); // Check if the prop exists in `plugins`
        if (didPassUnknownProp) didPassUnknownProp = plugins.filter(function(plugin) {
            return plugin.name === prop;
        }).length === 0;
        warnWhen(didPassUnknownProp, [
            "`" + prop + "`",
            "is not a valid prop. You may have spelled it incorrectly, or if it's",
            "a plugin, forgot to pass it in an array as props.plugins.",
            "\n\n",
            "All props: https://atomiks.github.io/tippyjs/v6/all-props/\n",
            "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"
        ].join(" "));
    });
}
var innerHTML = function innerHTML() {
    return "innerHTML";
};
function dangerouslySetInnerHTML(element, html) {
    element[innerHTML()] = html;
}
function createArrowElement(value) {
    var arrow = div();
    if (value === true) arrow.className = ARROW_CLASS;
    else {
        arrow.className = SVG_ARROW_CLASS;
        if (isElement(value)) arrow.appendChild(value);
        else dangerouslySetInnerHTML(arrow, value);
    }
    return arrow;
}
function setContent(content, props) {
    if (isElement(props.content)) {
        dangerouslySetInnerHTML(content, "");
        content.appendChild(props.content);
    } else if (typeof props.content !== "function") {
        if (props.allowHTML) dangerouslySetInnerHTML(content, props.content);
        else content.textContent = props.content;
    }
}
function getChildren(popper) {
    var box = popper.firstElementChild;
    var boxChildren = arrayFrom(box.children);
    return {
        box: box,
        content: boxChildren.find(function(node) {
            return node.classList.contains(CONTENT_CLASS);
        }),
        arrow: boxChildren.find(function(node) {
            return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
        }),
        backdrop: boxChildren.find(function(node) {
            return node.classList.contains(BACKDROP_CLASS);
        })
    };
}
function render(instance) {
    var popper = div();
    var box = div();
    box.className = BOX_CLASS;
    box.setAttribute("data-state", "hidden");
    box.setAttribute("tabindex", "-1");
    var content = div();
    content.className = CONTENT_CLASS;
    content.setAttribute("data-state", "hidden");
    setContent(content, instance.props);
    popper.appendChild(box);
    box.appendChild(content);
    onUpdate(instance.props, instance.props);
    function onUpdate(prevProps, nextProps) {
        var _getChildren = getChildren(popper), box = _getChildren.box, content = _getChildren.content, arrow = _getChildren.arrow;
        if (nextProps.theme) box.setAttribute("data-theme", nextProps.theme);
        else box.removeAttribute("data-theme");
        if (typeof nextProps.animation === "string") box.setAttribute("data-animation", nextProps.animation);
        else box.removeAttribute("data-animation");
        if (nextProps.inertia) box.setAttribute("data-inertia", "");
        else box.removeAttribute("data-inertia");
        box.style.maxWidth = typeof nextProps.maxWidth === "number" ? nextProps.maxWidth + "px" : nextProps.maxWidth;
        if (nextProps.role) box.setAttribute("role", nextProps.role);
        else box.removeAttribute("role");
        if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) setContent(content, instance.props);
        if (nextProps.arrow) {
            if (!arrow) box.appendChild(createArrowElement(nextProps.arrow));
            else if (prevProps.arrow !== nextProps.arrow) {
                box.removeChild(arrow);
                box.appendChild(createArrowElement(nextProps.arrow));
            }
        } else if (arrow) box.removeChild(arrow);
    }
    return {
        popper: popper,
        onUpdate: onUpdate
    };
} // Runtime check to identify if the render function is the default one; this
// way we can apply default CSS transitions logic and it can be tree-shaken away
render.$$tippy = true;
var idCounter = 1;
var mouseMoveListeners = []; // Used by `hideAll()`
var mountedInstances = [];
function createTippy(reference, passedProps) {
    var props = evaluateProps(reference, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps)))); // ===========================================================================
    // 🔒 Private members
    // ===========================================================================
    var showTimeout;
    var hideTimeout;
    var scheduleHideAnimationFrame;
    var isVisibleFromClick = false;
    var didHideDueToDocumentMouseDown = false;
    var didTouchMove = false;
    var ignoreOnFirstUpdate = false;
    var lastTriggerEvent;
    var currentTransitionEndListener;
    var onFirstUpdate;
    var listeners = [];
    var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
    var currentTarget; // ===========================================================================
    // 🔑 Public members
    // ===========================================================================
    var id = idCounter++;
    var popperInstance = null;
    var plugins = unique(props.plugins);
    var state = {
        // Is the instance currently enabled?
        isEnabled: true,
        // Is the tippy currently showing and not transitioning out?
        isVisible: false,
        // Has the instance been destroyed?
        isDestroyed: false,
        // Is the tippy currently mounted to the DOM?
        isMounted: false,
        // Has the tippy finished transitioning in?
        isShown: false
    };
    var instance = {
        // properties
        id: id,
        reference: reference,
        popper: div(),
        popperInstance: popperInstance,
        props: props,
        state: state,
        plugins: plugins,
        // methods
        clearDelayTimeouts: clearDelayTimeouts,
        setProps: setProps,
        setContent: setContent,
        show: show,
        hide: hide,
        hideWithInteractivity: hideWithInteractivity,
        enable: enable,
        disable: disable,
        unmount: unmount,
        destroy: destroy
    }; // TODO: Investigate why this early return causes a TDZ error in the tests —
    // it doesn't seem to happen in the browser
    /* istanbul ignore if */ if (!props.render) {
        errorWhen(true, "render() function has not been supplied.");
        return instance;
    } // ===========================================================================
    // Initial mutations
    // ===========================================================================
    var _props$render = props.render(instance), popper = _props$render.popper, onUpdate = _props$render.onUpdate;
    popper.setAttribute("data-tippy-root", "");
    popper.id = "tippy-" + instance.id;
    instance.popper = popper;
    reference._tippy = instance;
    popper._tippy = instance;
    var pluginsHooks = plugins.map(function(plugin) {
        return plugin.fn(instance);
    });
    var hasAriaExpanded = reference.hasAttribute("aria-expanded");
    addListeners();
    handleAriaExpandedAttribute();
    handleStyles();
    invokeHook("onCreate", [
        instance
    ]);
    if (props.showOnCreate) scheduleShow();
     // Prevent a tippy with a delay from hiding if the cursor left then returned
    // before it started hiding
    popper.addEventListener("mouseenter", function() {
        if (instance.props.interactive && instance.state.isVisible) instance.clearDelayTimeouts();
    });
    popper.addEventListener("mouseleave", function() {
        if (instance.props.interactive && instance.props.trigger.indexOf("mouseenter") >= 0) getDocument().addEventListener("mousemove", debouncedOnMouseMove);
    });
    return instance; // ===========================================================================
    // 🔒 Private methods
    // ===========================================================================
    function getNormalizedTouchSettings() {
        var touch = instance.props.touch;
        return Array.isArray(touch) ? touch : [
            touch,
            0
        ];
    }
    function getIsCustomTouchBehavior() {
        return getNormalizedTouchSettings()[0] === "hold";
    }
    function getIsDefaultRenderFn() {
        var _instance$props$rende;
        // @ts-ignore
        return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
    }
    function getCurrentTarget() {
        return currentTarget || reference;
    }
    function getDocument() {
        var parent = getCurrentTarget().parentNode;
        return parent ? getOwnerDocument(parent) : document;
    }
    function getDefaultTemplateChildren() {
        return getChildren(popper);
    }
    function getDelay(isShow) {
        // For touch or keyboard input, force `0` delay for UX reasons
        // Also if the instance is mounted but not visible (transitioning out),
        // ignore delay
        if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === "focus") return 0;
        return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
    }
    function handleStyles(fromHide) {
        if (fromHide === void 0) fromHide = false;
        popper.style.pointerEvents = instance.props.interactive && !fromHide ? "" : "none";
        popper.style.zIndex = "" + instance.props.zIndex;
    }
    function invokeHook(hook, args, shouldInvokePropsHook) {
        if (shouldInvokePropsHook === void 0) shouldInvokePropsHook = true;
        pluginsHooks.forEach(function(pluginHooks) {
            if (pluginHooks[hook]) pluginHooks[hook].apply(pluginHooks, args);
        });
        if (shouldInvokePropsHook) {
            var _instance$props;
            (_instance$props = instance.props)[hook].apply(_instance$props, args);
        }
    }
    function handleAriaContentAttribute() {
        var aria = instance.props.aria;
        if (!aria.content) return;
        var attr = "aria-" + aria.content;
        var id = popper.id;
        var nodes = normalizeToArray(instance.props.triggerTarget || reference);
        nodes.forEach(function(node) {
            var currentValue = node.getAttribute(attr);
            if (instance.state.isVisible) node.setAttribute(attr, currentValue ? currentValue + " " + id : id);
            else {
                var nextValue = currentValue && currentValue.replace(id, "").trim();
                if (nextValue) node.setAttribute(attr, nextValue);
                else node.removeAttribute(attr);
            }
        });
    }
    function handleAriaExpandedAttribute() {
        if (hasAriaExpanded || !instance.props.aria.expanded) return;
        var nodes = normalizeToArray(instance.props.triggerTarget || reference);
        nodes.forEach(function(node) {
            if (instance.props.interactive) node.setAttribute("aria-expanded", instance.state.isVisible && node === getCurrentTarget() ? "true" : "false");
            else node.removeAttribute("aria-expanded");
        });
    }
    function cleanupInteractiveMouseListeners() {
        getDocument().removeEventListener("mousemove", debouncedOnMouseMove);
        mouseMoveListeners = mouseMoveListeners.filter(function(listener) {
            return listener !== debouncedOnMouseMove;
        });
    }
    function onDocumentPress(event) {
        // Moved finger to scroll instead of an intentional tap outside
        if (currentInput.isTouch) {
            if (didTouchMove || event.type === "mousedown") return;
        }
        var actualTarget = event.composedPath && event.composedPath()[0] || event.target; // Clicked on interactive popper
        if (instance.props.interactive && actualContains(popper, actualTarget)) return;
         // Clicked on the event listeners target
        if (normalizeToArray(instance.props.triggerTarget || reference).some(function(el) {
            return actualContains(el, actualTarget);
        })) {
            if (currentInput.isTouch) return;
            if (instance.state.isVisible && instance.props.trigger.indexOf("click") >= 0) return;
        } else invokeHook("onClickOutside", [
            instance,
            event
        ]);
        if (instance.props.hideOnClick === true) {
            instance.clearDelayTimeouts();
            instance.hide(); // `mousedown` event is fired right before `focus` if pressing the
            // currentTarget. This lets a tippy with `focus` trigger know that it
            // should not show
            didHideDueToDocumentMouseDown = true;
            setTimeout(function() {
                didHideDueToDocumentMouseDown = false;
            }); // The listener gets added in `scheduleShow()`, but this may be hiding it
            // before it shows, and hide()'s early bail-out behavior can prevent it
            // from being cleaned up
            if (!instance.state.isMounted) removeDocumentPress();
        }
    }
    function onTouchMove() {
        didTouchMove = true;
    }
    function onTouchStart() {
        didTouchMove = false;
    }
    function addDocumentPress() {
        var doc = getDocument();
        doc.addEventListener("mousedown", onDocumentPress, true);
        doc.addEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
        doc.addEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
        doc.addEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
    }
    function removeDocumentPress() {
        var doc = getDocument();
        doc.removeEventListener("mousedown", onDocumentPress, true);
        doc.removeEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
        doc.removeEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
        doc.removeEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
    }
    function onTransitionedOut(duration, callback) {
        onTransitionEnd(duration, function() {
            if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) callback();
        });
    }
    function onTransitionedIn(duration, callback) {
        onTransitionEnd(duration, callback);
    }
    function onTransitionEnd(duration, callback) {
        var box = getDefaultTemplateChildren().box;
        function listener(event) {
            if (event.target === box) {
                updateTransitionEndListener(box, "remove", listener);
                callback();
            }
        } // Make callback synchronous if duration is 0
        // `transitionend` won't fire otherwise
        if (duration === 0) return callback();
        updateTransitionEndListener(box, "remove", currentTransitionEndListener);
        updateTransitionEndListener(box, "add", listener);
        currentTransitionEndListener = listener;
    }
    function on(eventType, handler, options) {
        if (options === void 0) options = false;
        var nodes = normalizeToArray(instance.props.triggerTarget || reference);
        nodes.forEach(function(node) {
            node.addEventListener(eventType, handler, options);
            listeners.push({
                node: node,
                eventType: eventType,
                handler: handler,
                options: options
            });
        });
    }
    function addListeners() {
        if (getIsCustomTouchBehavior()) {
            on("touchstart", onTrigger, {
                passive: true
            });
            on("touchend", onMouseLeave, {
                passive: true
            });
        }
        splitBySpaces(instance.props.trigger).forEach(function(eventType) {
            if (eventType === "manual") return;
            on(eventType, onTrigger);
            switch(eventType){
                case "mouseenter":
                    on("mouseleave", onMouseLeave);
                    break;
                case "focus":
                    on(isIE11 ? "focusout" : "blur", onBlurOrFocusOut);
                    break;
                case "focusin":
                    on("focusout", onBlurOrFocusOut);
                    break;
            }
        });
    }
    function removeListeners() {
        listeners.forEach(function(_ref) {
            var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
            node.removeEventListener(eventType, handler, options);
        });
        listeners = [];
    }
    function onTrigger(event) {
        var _lastTriggerEvent;
        var shouldScheduleClickHide = false;
        if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) return;
        var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === "focus";
        lastTriggerEvent = event;
        currentTarget = event.currentTarget;
        handleAriaExpandedAttribute();
        if (!instance.state.isVisible && isMouseEvent(event)) // If scrolling, `mouseenter` events can be fired if the cursor lands
        // over a new target, but `mousemove` events don't get fired. This
        // causes interactive tooltips to get stuck open until the cursor is
        // moved
        mouseMoveListeners.forEach(function(listener) {
            return listener(event);
        });
         // Toggle show/hide when clicking click-triggered tooltips
        if (event.type === "click" && (instance.props.trigger.indexOf("mouseenter") < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) shouldScheduleClickHide = true;
        else scheduleShow(event);
        if (event.type === "click") isVisibleFromClick = !shouldScheduleClickHide;
        if (shouldScheduleClickHide && !wasFocused) scheduleHide(event);
    }
    function onMouseMove(event) {
        var target = event.target;
        var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper.contains(target);
        if (event.type === "mousemove" && isCursorOverReferenceOrPopper) return;
        var popperTreeData = getNestedPopperTree().concat(popper).map(function(popper) {
            var _instance$popperInsta;
            var instance = popper._tippy;
            var state = (_instance$popperInsta = instance.popperInstance) == null ? void 0 : _instance$popperInsta.state;
            if (state) return {
                popperRect: popper.getBoundingClientRect(),
                popperState: state,
                props: props
            };
            return null;
        }).filter(Boolean);
        if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
            cleanupInteractiveMouseListeners();
            scheduleHide(event);
        }
    }
    function onMouseLeave(event) {
        var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf("click") >= 0 && isVisibleFromClick;
        if (shouldBail) return;
        if (instance.props.interactive) {
            instance.hideWithInteractivity(event);
            return;
        }
        scheduleHide(event);
    }
    function onBlurOrFocusOut(event) {
        if (instance.props.trigger.indexOf("focusin") < 0 && event.target !== getCurrentTarget()) return;
         // If focus was moved to within the popper
        if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) return;
        scheduleHide(event);
    }
    function isEventListenerStopped(event) {
        return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf("touch") >= 0 : false;
    }
    function createPopperInstance() {
        destroyPopperInstance();
        var _instance$props2 = instance.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
        var arrow = getIsDefaultRenderFn() ? getChildren(popper).arrow : null;
        var computedReference = getReferenceClientRect ? {
            getBoundingClientRect: getReferenceClientRect,
            contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
        } : reference;
        var tippyModifier = {
            name: "$$tippy",
            enabled: true,
            phase: "beforeWrite",
            requires: [
                "computeStyles"
            ],
            fn: function fn(_ref2) {
                var state = _ref2.state;
                if (getIsDefaultRenderFn()) {
                    var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
                    [
                        "placement",
                        "reference-hidden",
                        "escaped"
                    ].forEach(function(attr) {
                        if (attr === "placement") box.setAttribute("data-placement", state.placement);
                        else if (state.attributes.popper["data-popper-" + attr]) box.setAttribute("data-" + attr, "");
                        else box.removeAttribute("data-" + attr);
                    });
                    state.attributes.popper = {};
                }
            }
        };
        var modifiers = [
            {
                name: "offset",
                options: {
                    offset: offset
                }
            },
            {
                name: "preventOverflow",
                options: {
                    padding: {
                        top: 2,
                        bottom: 2,
                        left: 5,
                        right: 5
                    }
                }
            },
            {
                name: "flip",
                options: {
                    padding: 5
                }
            },
            {
                name: "computeStyles",
                options: {
                    adaptive: !moveTransition
                }
            },
            tippyModifier
        ];
        if (getIsDefaultRenderFn() && arrow) modifiers.push({
            name: "arrow",
            options: {
                element: arrow,
                padding: 3
            }
        });
        modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
        instance.popperInstance = (0, _core.createPopper)(computedReference, popper, Object.assign({}, popperOptions, {
            placement: placement,
            onFirstUpdate: onFirstUpdate,
            modifiers: modifiers
        }));
    }
    function destroyPopperInstance() {
        if (instance.popperInstance) {
            instance.popperInstance.destroy();
            instance.popperInstance = null;
        }
    }
    function mount() {
        var appendTo = instance.props.appendTo;
        var parentNode; // By default, we'll append the popper to the triggerTargets's parentNode so
        // it's directly after the reference element so the elements inside the
        // tippy can be tabbed to
        // If there are clipping issues, the user can specify a different appendTo
        // and ensure focus management is handled correctly manually
        var node = getCurrentTarget();
        if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === "parent") parentNode = node.parentNode;
        else parentNode = invokeWithArgsOrReturn(appendTo, [
            node
        ]);
         // The popper element needs to exist on the DOM before its position can be
        // updated as Popper needs to read its dimensions
        if (!parentNode.contains(popper)) parentNode.appendChild(popper);
        instance.state.isMounted = true;
        createPopperInstance();
        // Accessibility check
        warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper, [
            "Interactive tippy element may not be accessible via keyboard",
            "navigation because it is not directly after the reference element",
            "in the DOM source order.",
            "\n\n",
            "Using a wrapper <div> or <span> tag around the reference element",
            "solves this by creating a new parentNode context.",
            "\n\n",
            "Specifying `appendTo: document.body` silences this warning, but it",
            "assumes you are using a focus management solution to handle",
            "keyboard navigation.",
            "\n\n",
            "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"
        ].join(" "));
    }
    function getNestedPopperTree() {
        return arrayFrom(popper.querySelectorAll("[data-tippy-root]"));
    }
    function scheduleShow(event) {
        instance.clearDelayTimeouts();
        if (event) invokeHook("onTrigger", [
            instance,
            event
        ]);
        addDocumentPress();
        var delay = getDelay(true);
        var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
        if (currentInput.isTouch && touchValue === "hold" && touchDelay) delay = touchDelay;
        if (delay) showTimeout = setTimeout(function() {
            instance.show();
        }, delay);
        else instance.show();
    }
    function scheduleHide(event) {
        instance.clearDelayTimeouts();
        invokeHook("onUntrigger", [
            instance,
            event
        ]);
        if (!instance.state.isVisible) {
            removeDocumentPress();
            return;
        } // For interactive tippies, scheduleHide is added to a document.body handler
        // from onMouseLeave so must intercept scheduled hides from mousemove/leave
        // events when trigger contains mouseenter and click, and the tip is
        // currently shown as a result of a click.
        if (instance.props.trigger.indexOf("mouseenter") >= 0 && instance.props.trigger.indexOf("click") >= 0 && [
            "mouseleave",
            "mousemove"
        ].indexOf(event.type) >= 0 && isVisibleFromClick) return;
        var delay = getDelay(false);
        if (delay) hideTimeout = setTimeout(function() {
            if (instance.state.isVisible) instance.hide();
        }, delay);
        else // Fixes a `transitionend` problem when it fires 1 frame too
        // late sometimes, we don't want hide() to be called.
        scheduleHideAnimationFrame = requestAnimationFrame(function() {
            instance.hide();
        });
    } // ===========================================================================
    // 🔑 Public methods
    // ===========================================================================
    function enable() {
        instance.state.isEnabled = true;
    }
    function disable() {
        // Disabling the instance should also hide it
        // https://github.com/atomiks/tippy.js-react/issues/106
        instance.hide();
        instance.state.isEnabled = false;
    }
    function clearDelayTimeouts() {
        clearTimeout(showTimeout);
        clearTimeout(hideTimeout);
        cancelAnimationFrame(scheduleHideAnimationFrame);
    }
    function setProps(partialProps) {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("setProps"));
        if (instance.state.isDestroyed) return;
        invokeHook("onBeforeUpdate", [
            instance,
            partialProps
        ]);
        removeListeners();
        var prevProps = instance.props;
        var nextProps = evaluateProps(reference, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
            ignoreAttributes: true
        }));
        instance.props = nextProps;
        addListeners();
        if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
            cleanupInteractiveMouseListeners();
            debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
        } // Ensure stale aria-expanded attributes are removed
        if (prevProps.triggerTarget && !nextProps.triggerTarget) normalizeToArray(prevProps.triggerTarget).forEach(function(node) {
            node.removeAttribute("aria-expanded");
        });
        else if (nextProps.triggerTarget) reference.removeAttribute("aria-expanded");
        handleAriaExpandedAttribute();
        handleStyles();
        if (onUpdate) onUpdate(prevProps, nextProps);
        if (instance.popperInstance) {
            createPopperInstance(); // Fixes an issue with nested tippies if they are all getting re-rendered,
            // and the nested ones get re-rendered first.
            // https://github.com/atomiks/tippyjs-react/issues/177
            // TODO: find a cleaner / more efficient solution(!)
            getNestedPopperTree().forEach(function(nestedPopper) {
                // React (and other UI libs likely) requires a rAF wrapper as it flushes
                // its work in one
                requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
            });
        }
        invokeHook("onAfterUpdate", [
            instance,
            partialProps
        ]);
    }
    function setContent(content) {
        instance.setProps({
            content: content
        });
    }
    function show() {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("show"));
        var isAlreadyVisible = instance.state.isVisible;
        var isDestroyed = instance.state.isDestroyed;
        var isDisabled = !instance.state.isEnabled;
        var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
        var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
        if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) return;
         // Normalize `disabled` behavior across browsers.
        // Firefox allows events on disabled elements, but Chrome doesn't.
        // Using a wrapper element (i.e. <span>) is recommended.
        if (getCurrentTarget().hasAttribute("disabled")) return;
        invokeHook("onShow", [
            instance
        ], false);
        if (instance.props.onShow(instance) === false) return;
        instance.state.isVisible = true;
        if (getIsDefaultRenderFn()) popper.style.visibility = "visible";
        handleStyles();
        addDocumentPress();
        if (!instance.state.isMounted) popper.style.transition = "none";
         // If flipping to the opposite side after hiding at least once, the
        // animation will use the wrong placement without resetting the duration
        if (getIsDefaultRenderFn()) {
            var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
            setTransitionDuration([
                box,
                content
            ], 0);
        }
        onFirstUpdate = function onFirstUpdate() {
            var _instance$popperInsta2;
            if (!instance.state.isVisible || ignoreOnFirstUpdate) return;
            ignoreOnFirstUpdate = true; // reflow
            popper.offsetHeight;
            popper.style.transition = instance.props.moveTransition;
            if (getIsDefaultRenderFn() && instance.props.animation) {
                var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
                setTransitionDuration([
                    _box,
                    _content
                ], duration);
                setVisibilityState([
                    _box,
                    _content
                ], "visible");
            }
            handleAriaContentAttribute();
            handleAriaExpandedAttribute();
            pushIfUnique(mountedInstances, instance); // certain modifiers (e.g. `maxSize`) require a second update after the
            // popper has been positioned for the first time
            (_instance$popperInsta2 = instance.popperInstance) == null || _instance$popperInsta2.forceUpdate();
            invokeHook("onMount", [
                instance
            ]);
            if (instance.props.animation && getIsDefaultRenderFn()) onTransitionedIn(duration, function() {
                instance.state.isShown = true;
                invokeHook("onShown", [
                    instance
                ]);
            });
        };
        mount();
    }
    function hide() {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("hide"));
        var isAlreadyHidden = !instance.state.isVisible;
        var isDestroyed = instance.state.isDestroyed;
        var isDisabled = !instance.state.isEnabled;
        var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
        if (isAlreadyHidden || isDestroyed || isDisabled) return;
        invokeHook("onHide", [
            instance
        ], false);
        if (instance.props.onHide(instance) === false) return;
        instance.state.isVisible = false;
        instance.state.isShown = false;
        ignoreOnFirstUpdate = false;
        isVisibleFromClick = false;
        if (getIsDefaultRenderFn()) popper.style.visibility = "hidden";
        cleanupInteractiveMouseListeners();
        removeDocumentPress();
        handleStyles(true);
        if (getIsDefaultRenderFn()) {
            var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
            if (instance.props.animation) {
                setTransitionDuration([
                    box,
                    content
                ], duration);
                setVisibilityState([
                    box,
                    content
                ], "hidden");
            }
        }
        handleAriaContentAttribute();
        handleAriaExpandedAttribute();
        if (instance.props.animation) {
            if (getIsDefaultRenderFn()) onTransitionedOut(duration, instance.unmount);
        } else instance.unmount();
    }
    function hideWithInteractivity(event) {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("hideWithInteractivity"));
        getDocument().addEventListener("mousemove", debouncedOnMouseMove);
        pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
        debouncedOnMouseMove(event);
    }
    function unmount() {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("unmount"));
        if (instance.state.isVisible) instance.hide();
        if (!instance.state.isMounted) return;
        destroyPopperInstance(); // If a popper is not interactive, it will be appended outside the popper
        // tree by default. This seems mainly for interactive tippies, but we should
        // find a workaround if possible
        getNestedPopperTree().forEach(function(nestedPopper) {
            nestedPopper._tippy.unmount();
        });
        if (popper.parentNode) popper.parentNode.removeChild(popper);
        mountedInstances = mountedInstances.filter(function(i) {
            return i !== instance;
        });
        instance.state.isMounted = false;
        invokeHook("onHidden", [
            instance
        ]);
    }
    function destroy() {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("destroy"));
        if (instance.state.isDestroyed) return;
        instance.clearDelayTimeouts();
        instance.unmount();
        removeListeners();
        delete reference._tippy;
        instance.state.isDestroyed = true;
        invokeHook("onDestroy", [
            instance
        ]);
    }
}
function tippy(targets, optionalProps) {
    if (optionalProps === void 0) optionalProps = {};
    var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
    validateTargets(targets);
    validateProps(optionalProps, plugins);
    bindGlobalEventListeners();
    var passedProps = Object.assign({}, optionalProps, {
        plugins: plugins
    });
    var elements = getArrayOfElements(targets);
    var isSingleContentElement = isElement(passedProps.content);
    var isMoreThanOneReferenceElement = elements.length > 1;
    warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, [
        "tippy() was passed an Element as the `content` prop, but more than",
        "one tippy instance was created by this invocation. This means the",
        "content element will only be appended to the last tippy instance.",
        "\n\n",
        "Instead, pass the .innerHTML of the element, or use a function that",
        "returns a cloned version of the element instead.",
        "\n\n",
        "1) content: element.innerHTML\n",
        "2) content: () => element.cloneNode(true)"
    ].join(" "));
    var instances = elements.reduce(function(acc, reference) {
        var instance = reference && createTippy(reference, passedProps);
        if (instance) acc.push(instance);
        return acc;
    }, []);
    return isElement(targets) ? instances[0] : instances;
}
tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;
var hideAll = function hideAll(_temp) {
    var _ref = _temp === void 0 ? {} : _temp, excludedReferenceOrInstance = _ref.exclude, duration = _ref.duration;
    mountedInstances.forEach(function(instance) {
        var isExcluded = false;
        if (excludedReferenceOrInstance) isExcluded = isReferenceElement(excludedReferenceOrInstance) ? instance.reference === excludedReferenceOrInstance : instance.popper === excludedReferenceOrInstance.popper;
        if (!isExcluded) {
            var originalDuration = instance.props.duration;
            instance.setProps({
                duration: duration
            });
            instance.hide();
            if (!instance.state.isDestroyed) instance.setProps({
                duration: originalDuration
            });
        }
    });
};
// every time the popper is destroyed (i.e. a new target), removing the styles
// and causing transitions to break for singletons when the console is open, but
// most notably for non-transform styles being used, `gpuAcceleration: false`.
var applyStylesModifier = Object.assign({}, (0, _core.applyStyles), {
    effect: function effect(_ref) {
        var state = _ref.state;
        var initialStyles = {
            popper: {
                position: state.options.strategy,
                left: "0",
                top: "0",
                margin: "0"
            },
            arrow: {
                position: "absolute"
            },
            reference: {}
        };
        Object.assign(state.elements.popper.style, initialStyles.popper);
        state.styles = initialStyles;
        if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
         // intentionally return no cleanup function
    // return () => { ... }
    }
});
var createSingleton = function createSingleton(tippyInstances, optionalProps) {
    var _optionalProps$popper;
    if (optionalProps === void 0) optionalProps = {};
    errorWhen(!Array.isArray(tippyInstances), [
        "The first argument passed to createSingleton() must be an array of",
        "tippy instances. The passed value was",
        String(tippyInstances)
    ].join(" "));
    var individualInstances = tippyInstances;
    var references = [];
    var triggerTargets = [];
    var currentTarget;
    var overrides = optionalProps.overrides;
    var interceptSetPropsCleanups = [];
    var shownOnCreate = false;
    function setTriggerTargets() {
        triggerTargets = individualInstances.map(function(instance) {
            return normalizeToArray(instance.props.triggerTarget || instance.reference);
        }).reduce(function(acc, item) {
            return acc.concat(item);
        }, []);
    }
    function setReferences() {
        references = individualInstances.map(function(instance) {
            return instance.reference;
        });
    }
    function enableInstances(isEnabled) {
        individualInstances.forEach(function(instance) {
            if (isEnabled) instance.enable();
            else instance.disable();
        });
    }
    function interceptSetProps(singleton) {
        return individualInstances.map(function(instance) {
            var originalSetProps = instance.setProps;
            instance.setProps = function(props) {
                originalSetProps(props);
                if (instance.reference === currentTarget) singleton.setProps(props);
            };
            return function() {
                instance.setProps = originalSetProps;
            };
        });
    } // have to pass singleton, as it maybe undefined on first call
    function prepareInstance(singleton, target) {
        var index = triggerTargets.indexOf(target); // bail-out
        if (target === currentTarget) return;
        currentTarget = target;
        var overrideProps = (overrides || []).concat("content").reduce(function(acc, prop) {
            acc[prop] = individualInstances[index].props[prop];
            return acc;
        }, {});
        singleton.setProps(Object.assign({}, overrideProps, {
            getReferenceClientRect: typeof overrideProps.getReferenceClientRect === "function" ? overrideProps.getReferenceClientRect : function() {
                var _references$index;
                return (_references$index = references[index]) == null ? void 0 : _references$index.getBoundingClientRect();
            }
        }));
    }
    enableInstances(false);
    setReferences();
    setTriggerTargets();
    var plugin = {
        fn: function fn() {
            return {
                onDestroy: function onDestroy() {
                    enableInstances(true);
                },
                onHidden: function onHidden() {
                    currentTarget = null;
                },
                onClickOutside: function onClickOutside(instance) {
                    if (instance.props.showOnCreate && !shownOnCreate) {
                        shownOnCreate = true;
                        currentTarget = null;
                    }
                },
                onShow: function onShow(instance) {
                    if (instance.props.showOnCreate && !shownOnCreate) {
                        shownOnCreate = true;
                        prepareInstance(instance, references[0]);
                    }
                },
                onTrigger: function onTrigger(instance, event) {
                    prepareInstance(instance, event.currentTarget);
                }
            };
        }
    };
    var singleton = tippy(div(), Object.assign({}, removeProperties(optionalProps, [
        "overrides"
    ]), {
        plugins: [
            plugin
        ].concat(optionalProps.plugins || []),
        triggerTarget: triggerTargets,
        popperOptions: Object.assign({}, optionalProps.popperOptions, {
            modifiers: [].concat(((_optionalProps$popper = optionalProps.popperOptions) == null ? void 0 : _optionalProps$popper.modifiers) || [], [
                applyStylesModifier
            ])
        })
    }));
    var originalShow = singleton.show;
    singleton.show = function(target) {
        originalShow(); // first time, showOnCreate or programmatic call with no params
        // default to showing first instance
        if (!currentTarget && target == null) return prepareInstance(singleton, references[0]);
         // triggered from event (do nothing as prepareInstance already called by onTrigger)
        // programmatic call with no params when already visible (do nothing again)
        if (currentTarget && target == null) return;
         // target is index of instance
        if (typeof target === "number") return references[target] && prepareInstance(singleton, references[target]);
         // target is a child tippy instance
        if (individualInstances.indexOf(target) >= 0) {
            var ref = target.reference;
            return prepareInstance(singleton, ref);
        } // target is a ReferenceElement
        if (references.indexOf(target) >= 0) return prepareInstance(singleton, target);
    };
    singleton.showNext = function() {
        var first = references[0];
        if (!currentTarget) return singleton.show(0);
        var index = references.indexOf(currentTarget);
        singleton.show(references[index + 1] || first);
    };
    singleton.showPrevious = function() {
        var last = references[references.length - 1];
        if (!currentTarget) return singleton.show(last);
        var index = references.indexOf(currentTarget);
        var target = references[index - 1] || last;
        singleton.show(target);
    };
    var originalSetProps = singleton.setProps;
    singleton.setProps = function(props) {
        overrides = props.overrides || overrides;
        originalSetProps(props);
    };
    singleton.setInstances = function(nextInstances) {
        enableInstances(true);
        interceptSetPropsCleanups.forEach(function(fn) {
            return fn();
        });
        individualInstances = nextInstances;
        enableInstances(false);
        setReferences();
        setTriggerTargets();
        interceptSetPropsCleanups = interceptSetProps(singleton);
        singleton.setProps({
            triggerTarget: triggerTargets
        });
    };
    interceptSetPropsCleanups = interceptSetProps(singleton);
    return singleton;
};
var BUBBLING_EVENTS_MAP = {
    mouseover: "mouseenter",
    focusin: "focus",
    click: "click"
};
/**
 * Creates a delegate instance that controls the creation of tippy instances
 * for child elements (`target` CSS selector).
 */ function delegate(targets, props) {
    errorWhen(!(props && props.target), [
        "You must specity a `target` prop indicating a CSS selector string matching",
        "the target elements that should receive a tippy."
    ].join(" "));
    var listeners = [];
    var childTippyInstances = [];
    var disabled = false;
    var target = props.target;
    var nativeProps = removeProperties(props, [
        "target"
    ]);
    var parentProps = Object.assign({}, nativeProps, {
        trigger: "manual",
        touch: false
    });
    var childProps = Object.assign({
        touch: defaultProps.touch
    }, nativeProps, {
        showOnCreate: true
    });
    var returnValue = tippy(targets, parentProps);
    var normalizedReturnValue = normalizeToArray(returnValue);
    function onTrigger(event) {
        if (!event.target || disabled) return;
        var targetNode = event.target.closest(target);
        if (!targetNode) return;
         // Get relevant trigger with fallbacks:
        // 1. Check `data-tippy-trigger` attribute on target node
        // 2. Fallback to `trigger` passed to `delegate()`
        // 3. Fallback to `defaultProps.trigger`
        var trigger = targetNode.getAttribute("data-tippy-trigger") || props.trigger || defaultProps.trigger; // @ts-ignore
        if (targetNode._tippy) return;
        if (event.type === "touchstart" && typeof childProps.touch === "boolean") return;
        if (event.type !== "touchstart" && trigger.indexOf(BUBBLING_EVENTS_MAP[event.type]) < 0) return;
        var instance = tippy(targetNode, childProps);
        if (instance) childTippyInstances = childTippyInstances.concat(instance);
    }
    function on(node, eventType, handler, options) {
        if (options === void 0) options = false;
        node.addEventListener(eventType, handler, options);
        listeners.push({
            node: node,
            eventType: eventType,
            handler: handler,
            options: options
        });
    }
    function addEventListeners(instance) {
        var reference = instance.reference;
        on(reference, "touchstart", onTrigger, TOUCH_OPTIONS);
        on(reference, "mouseover", onTrigger);
        on(reference, "focusin", onTrigger);
        on(reference, "click", onTrigger);
    }
    function removeEventListeners() {
        listeners.forEach(function(_ref) {
            var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
            node.removeEventListener(eventType, handler, options);
        });
        listeners = [];
    }
    function applyMutations(instance) {
        var originalDestroy = instance.destroy;
        var originalEnable = instance.enable;
        var originalDisable = instance.disable;
        instance.destroy = function(shouldDestroyChildInstances) {
            if (shouldDestroyChildInstances === void 0) shouldDestroyChildInstances = true;
            if (shouldDestroyChildInstances) childTippyInstances.forEach(function(instance) {
                instance.destroy();
            });
            childTippyInstances = [];
            removeEventListeners();
            originalDestroy();
        };
        instance.enable = function() {
            originalEnable();
            childTippyInstances.forEach(function(instance) {
                return instance.enable();
            });
            disabled = false;
        };
        instance.disable = function() {
            originalDisable();
            childTippyInstances.forEach(function(instance) {
                return instance.disable();
            });
            disabled = true;
        };
        addEventListeners(instance);
    }
    normalizedReturnValue.forEach(applyMutations);
    return returnValue;
}
var animateFill = {
    name: "animateFill",
    defaultValue: false,
    fn: function fn(instance) {
        var _instance$props$rende;
        // @ts-ignore
        if (!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy)) {
            errorWhen(instance.props.animateFill, "The `animateFill` plugin requires the default render function.");
            return {};
        }
        var _getChildren = getChildren(instance.popper), box = _getChildren.box, content = _getChildren.content;
        var backdrop = instance.props.animateFill ? createBackdropElement() : null;
        return {
            onCreate: function onCreate() {
                if (backdrop) {
                    box.insertBefore(backdrop, box.firstElementChild);
                    box.setAttribute("data-animatefill", "");
                    box.style.overflow = "hidden";
                    instance.setProps({
                        arrow: false,
                        animation: "shift-away"
                    });
                }
            },
            onMount: function onMount() {
                if (backdrop) {
                    var transitionDuration = box.style.transitionDuration;
                    var duration = Number(transitionDuration.replace("ms", "")); // The content should fade in after the backdrop has mostly filled the
                    // tooltip element. `clip-path` is the other alternative but is not
                    // well-supported and is buggy on some devices.
                    content.style.transitionDelay = Math.round(duration / 10) + "ms";
                    backdrop.style.transitionDuration = transitionDuration;
                    setVisibilityState([
                        backdrop
                    ], "visible");
                }
            },
            onShow: function onShow() {
                if (backdrop) backdrop.style.transitionDuration = "0ms";
            },
            onHide: function onHide() {
                if (backdrop) setVisibilityState([
                    backdrop
                ], "hidden");
            }
        };
    }
};
function createBackdropElement() {
    var backdrop = div();
    backdrop.className = BACKDROP_CLASS;
    setVisibilityState([
        backdrop
    ], "hidden");
    return backdrop;
}
var mouseCoords = {
    clientX: 0,
    clientY: 0
};
var activeInstances = [];
function storeMouseCoords(_ref) {
    var clientX = _ref.clientX, clientY = _ref.clientY;
    mouseCoords = {
        clientX: clientX,
        clientY: clientY
    };
}
function addMouseCoordsListener(doc) {
    doc.addEventListener("mousemove", storeMouseCoords);
}
function removeMouseCoordsListener(doc) {
    doc.removeEventListener("mousemove", storeMouseCoords);
}
var followCursor = {
    name: "followCursor",
    defaultValue: false,
    fn: function fn(instance) {
        var reference = instance.reference;
        var doc = getOwnerDocument(instance.props.triggerTarget || reference);
        var isInternalUpdate = false;
        var wasFocusEvent = false;
        var isUnmounted = true;
        var prevProps = instance.props;
        function getIsInitialBehavior() {
            return instance.props.followCursor === "initial" && instance.state.isVisible;
        }
        function addListener() {
            doc.addEventListener("mousemove", onMouseMove);
        }
        function removeListener() {
            doc.removeEventListener("mousemove", onMouseMove);
        }
        function unsetGetReferenceClientRect() {
            isInternalUpdate = true;
            instance.setProps({
                getReferenceClientRect: null
            });
            isInternalUpdate = false;
        }
        function onMouseMove(event) {
            // If the instance is interactive, avoid updating the position unless it's
            // over the reference element
            var isCursorOverReference = event.target ? reference.contains(event.target) : true;
            var followCursor = instance.props.followCursor;
            var clientX = event.clientX, clientY = event.clientY;
            var rect = reference.getBoundingClientRect();
            var relativeX = clientX - rect.left;
            var relativeY = clientY - rect.top;
            if (isCursorOverReference || !instance.props.interactive) instance.setProps({
                // @ts-ignore - unneeded DOMRect properties
                getReferenceClientRect: function getReferenceClientRect() {
                    var rect = reference.getBoundingClientRect();
                    var x = clientX;
                    var y = clientY;
                    if (followCursor === "initial") {
                        x = rect.left + relativeX;
                        y = rect.top + relativeY;
                    }
                    var top = followCursor === "horizontal" ? rect.top : y;
                    var right = followCursor === "vertical" ? rect.right : x;
                    var bottom = followCursor === "horizontal" ? rect.bottom : y;
                    var left = followCursor === "vertical" ? rect.left : x;
                    return {
                        width: right - left,
                        height: bottom - top,
                        top: top,
                        right: right,
                        bottom: bottom,
                        left: left
                    };
                }
            });
        }
        function create() {
            if (instance.props.followCursor) {
                activeInstances.push({
                    instance: instance,
                    doc: doc
                });
                addMouseCoordsListener(doc);
            }
        }
        function destroy() {
            activeInstances = activeInstances.filter(function(data) {
                return data.instance !== instance;
            });
            if (activeInstances.filter(function(data) {
                return data.doc === doc;
            }).length === 0) removeMouseCoordsListener(doc);
        }
        return {
            onCreate: create,
            onDestroy: destroy,
            onBeforeUpdate: function onBeforeUpdate() {
                prevProps = instance.props;
            },
            onAfterUpdate: function onAfterUpdate(_, _ref2) {
                var followCursor = _ref2.followCursor;
                if (isInternalUpdate) return;
                if (followCursor !== undefined && prevProps.followCursor !== followCursor) {
                    destroy();
                    if (followCursor) {
                        create();
                        if (instance.state.isMounted && !wasFocusEvent && !getIsInitialBehavior()) addListener();
                    } else {
                        removeListener();
                        unsetGetReferenceClientRect();
                    }
                }
            },
            onMount: function onMount() {
                if (instance.props.followCursor && !wasFocusEvent) {
                    if (isUnmounted) {
                        onMouseMove(mouseCoords);
                        isUnmounted = false;
                    }
                    if (!getIsInitialBehavior()) addListener();
                }
            },
            onTrigger: function onTrigger(_, event) {
                if (isMouseEvent(event)) mouseCoords = {
                    clientX: event.clientX,
                    clientY: event.clientY
                };
                wasFocusEvent = event.type === "focus";
            },
            onHidden: function onHidden() {
                if (instance.props.followCursor) {
                    unsetGetReferenceClientRect();
                    removeListener();
                    isUnmounted = true;
                }
            }
        };
    }
};
function getProps(props, modifier) {
    var _props$popperOptions;
    return {
        popperOptions: Object.assign({}, props.popperOptions, {
            modifiers: [].concat((((_props$popperOptions = props.popperOptions) == null ? void 0 : _props$popperOptions.modifiers) || []).filter(function(_ref) {
                var name = _ref.name;
                return name !== modifier.name;
            }), [
                modifier
            ])
        })
    };
}
var inlinePositioning = {
    name: "inlinePositioning",
    defaultValue: false,
    fn: function fn(instance) {
        var reference = instance.reference;
        function isEnabled() {
            return !!instance.props.inlinePositioning;
        }
        var placement;
        var cursorRectIndex = -1;
        var isInternalUpdate = false;
        var triedPlacements = [];
        var modifier = {
            name: "tippyInlinePositioning",
            enabled: true,
            phase: "afterWrite",
            fn: function fn(_ref2) {
                var state = _ref2.state;
                if (isEnabled()) {
                    if (triedPlacements.indexOf(state.placement) !== -1) triedPlacements = [];
                    if (placement !== state.placement && triedPlacements.indexOf(state.placement) === -1) {
                        triedPlacements.push(state.placement);
                        instance.setProps({
                            // @ts-ignore - unneeded DOMRect properties
                            getReferenceClientRect: function getReferenceClientRect() {
                                return _getReferenceClientRect(state.placement);
                            }
                        });
                    }
                    placement = state.placement;
                }
            }
        };
        function _getReferenceClientRect(placement) {
            return getInlineBoundingClientRect(getBasePlacement(placement), reference.getBoundingClientRect(), arrayFrom(reference.getClientRects()), cursorRectIndex);
        }
        function setInternalProps(partialProps) {
            isInternalUpdate = true;
            instance.setProps(partialProps);
            isInternalUpdate = false;
        }
        function addModifier() {
            if (!isInternalUpdate) setInternalProps(getProps(instance.props, modifier));
        }
        return {
            onCreate: addModifier,
            onAfterUpdate: addModifier,
            onTrigger: function onTrigger(_, event) {
                if (isMouseEvent(event)) {
                    var rects = arrayFrom(instance.reference.getClientRects());
                    var cursorRect = rects.find(function(rect) {
                        return rect.left - 2 <= event.clientX && rect.right + 2 >= event.clientX && rect.top - 2 <= event.clientY && rect.bottom + 2 >= event.clientY;
                    });
                    var index = rects.indexOf(cursorRect);
                    cursorRectIndex = index > -1 ? index : cursorRectIndex;
                }
            },
            onHidden: function onHidden() {
                cursorRectIndex = -1;
            }
        };
    }
};
function getInlineBoundingClientRect(currentBasePlacement, boundingRect, clientRects, cursorRectIndex) {
    // Not an inline element, or placement is not yet known
    if (clientRects.length < 2 || currentBasePlacement === null) return boundingRect;
     // There are two rects and they are disjoined
    if (clientRects.length === 2 && cursorRectIndex >= 0 && clientRects[0].left > clientRects[1].right) return clientRects[cursorRectIndex] || boundingRect;
    switch(currentBasePlacement){
        case "top":
        case "bottom":
            var firstRect = clientRects[0];
            var lastRect = clientRects[clientRects.length - 1];
            var isTop = currentBasePlacement === "top";
            var top = firstRect.top;
            var bottom = lastRect.bottom;
            var left = isTop ? firstRect.left : lastRect.left;
            var right = isTop ? firstRect.right : lastRect.right;
            var width = right - left;
            var height = bottom - top;
            return {
                top: top,
                bottom: bottom,
                left: left,
                right: right,
                width: width,
                height: height
            };
        case "left":
        case "right":
            var minLeft = Math.min.apply(Math, clientRects.map(function(rects) {
                return rects.left;
            }));
            var maxRight = Math.max.apply(Math, clientRects.map(function(rects) {
                return rects.right;
            }));
            var measureRects = clientRects.filter(function(rect) {
                return currentBasePlacement === "left" ? rect.left === minLeft : rect.right === maxRight;
            });
            var _top = measureRects[0].top;
            var _bottom = measureRects[measureRects.length - 1].bottom;
            var _left = minLeft;
            var _right = maxRight;
            var _width = _right - _left;
            var _height = _bottom - _top;
            return {
                top: _top,
                bottom: _bottom,
                left: _left,
                right: _right,
                width: _width,
                height: _height
            };
        default:
            return boundingRect;
    }
}
var sticky = {
    name: "sticky",
    defaultValue: false,
    fn: function fn(instance) {
        var reference = instance.reference, popper = instance.popper;
        function getReference() {
            return instance.popperInstance ? instance.popperInstance.state.elements.reference : reference;
        }
        function shouldCheck(value) {
            return instance.props.sticky === true || instance.props.sticky === value;
        }
        var prevRefRect = null;
        var prevPopRect = null;
        function updatePosition() {
            var currentRefRect = shouldCheck("reference") ? getReference().getBoundingClientRect() : null;
            var currentPopRect = shouldCheck("popper") ? popper.getBoundingClientRect() : null;
            if (currentRefRect && areRectsDifferent(prevRefRect, currentRefRect) || currentPopRect && areRectsDifferent(prevPopRect, currentPopRect)) {
                if (instance.popperInstance) instance.popperInstance.update();
            }
            prevRefRect = currentRefRect;
            prevPopRect = currentPopRect;
            if (instance.state.isMounted) requestAnimationFrame(updatePosition);
        }
        return {
            onMount: function onMount() {
                if (instance.props.sticky) updatePosition();
            }
        };
    }
};
function areRectsDifferent(rectA, rectB) {
    if (rectA && rectB) return rectA.top !== rectB.top || rectA.right !== rectB.right || rectA.bottom !== rectB.bottom || rectA.left !== rectB.left;
    return true;
}
tippy.setDefaultProps({
    render: render
});
exports.default = tippy;

},{"@popperjs/core":"7unqC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7unqC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
parcelHelpers.export(exports, "createPopperBase", ()=>(0, _createPopperJs.createPopper));
parcelHelpers.export(exports, "createPopper", ()=>(0, _popperJs.createPopper)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "createPopperLite", ()=>(0, _popperLiteJs.createPopper));
var _enumsJs = require("./enums.js");
parcelHelpers.exportAll(_enumsJs, exports);
var _indexJs = require("./modifiers/index.js"); // eslint-disable-next-line import/no-unused-modules
parcelHelpers.exportAll(_indexJs, exports);
var _createPopperJs = require("./createPopper.js");
var _popperJs = require("./popper.js");
var _popperLiteJs = require("./popper-lite.js");

},{"./enums.js":false,"./modifiers/index.js":"cap3W","./createPopper.js":false,"./popper.js":"1PuRF","./popper-lite.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lCAq5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "top", ()=>top);
parcelHelpers.export(exports, "bottom", ()=>bottom);
parcelHelpers.export(exports, "right", ()=>right);
parcelHelpers.export(exports, "left", ()=>left);
parcelHelpers.export(exports, "auto", ()=>auto);
parcelHelpers.export(exports, "basePlacements", ()=>basePlacements);
parcelHelpers.export(exports, "start", ()=>start);
parcelHelpers.export(exports, "end", ()=>end);
parcelHelpers.export(exports, "clippingParents", ()=>clippingParents);
parcelHelpers.export(exports, "viewport", ()=>viewport);
parcelHelpers.export(exports, "popper", ()=>popper);
parcelHelpers.export(exports, "reference", ()=>reference);
parcelHelpers.export(exports, "variationPlacements", ()=>variationPlacements);
parcelHelpers.export(exports, "placements", ()=>placements);
parcelHelpers.export(exports, "beforeRead", ()=>beforeRead);
parcelHelpers.export(exports, "read", ()=>read);
parcelHelpers.export(exports, "afterRead", ()=>afterRead);
parcelHelpers.export(exports, "beforeMain", ()=>beforeMain);
parcelHelpers.export(exports, "main", ()=>main);
parcelHelpers.export(exports, "afterMain", ()=>afterMain);
parcelHelpers.export(exports, "beforeWrite", ()=>beforeWrite);
parcelHelpers.export(exports, "write", ()=>write);
parcelHelpers.export(exports, "afterWrite", ()=>afterWrite);
parcelHelpers.export(exports, "modifierPhases", ()=>modifierPhases);
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [
    top,
    bottom,
    right,
    left
];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /*#__PURE__*/ basePlacements.reduce(function(acc, placement) {
    return acc.concat([
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []);
var placements = /*#__PURE__*/ [].concat(basePlacements, [
    auto
]).reduce(function(acc, placement) {
    return acc.concat([
        placement,
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []); // modifiers that need to read the DOM
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead"; // pure-logic modifiers
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain"; // modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [
    beforeRead,
    read,
    afterRead,
    beforeMain,
    main,
    afterMain,
    beforeWrite,
    write,
    afterWrite
];

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
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"cap3W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyStyles", ()=>(0, _applyStylesJsDefault.default));
parcelHelpers.export(exports, "arrow", ()=>(0, _arrowJsDefault.default));
parcelHelpers.export(exports, "computeStyles", ()=>(0, _computeStylesJsDefault.default));
parcelHelpers.export(exports, "eventListeners", ()=>(0, _eventListenersJsDefault.default));
parcelHelpers.export(exports, "flip", ()=>(0, _flipJsDefault.default));
parcelHelpers.export(exports, "hide", ()=>(0, _hideJsDefault.default));
parcelHelpers.export(exports, "offset", ()=>(0, _offsetJsDefault.default));
parcelHelpers.export(exports, "popperOffsets", ()=>(0, _popperOffsetsJsDefault.default));
parcelHelpers.export(exports, "preventOverflow", ()=>(0, _preventOverflowJsDefault.default));
var _applyStylesJs = require("./applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var _arrowJs = require("./arrow.js");
var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs);
var _computeStylesJs = require("./computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _eventListenersJs = require("./eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _flipJs = require("./flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _hideJs = require("./hide.js");
var _hideJsDefault = parcelHelpers.interopDefault(_hideJs);
var _offsetJs = require("./offset.js");
var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs);
var _popperOffsetsJs = require("./popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _preventOverflowJs = require("./preventOverflow.js");
var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs);

},{"./applyStyles.js":"4iMn4","./arrow.js":false,"./computeStyles.js":false,"./eventListeners.js":false,"./flip.js":false,"./hide.js":false,"./offset.js":false,"./popperOffsets.js":false,"./preventOverflow.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4iMn4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("../dom-utils/getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("../dom-utils/instanceOf.js"); // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
        var style = state.styles[name] || {};
        var attributes = state.attributes[name] || {};
        var element = state.elements[name]; // arrow is optional + virtual elements
        if (!(0, _instanceOfJs.isHTMLElement)(element) || !(0, _getNodeNameJsDefault.default)(element)) return;
         // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe[cannot-write]
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name) {
            var value = attributes[name];
            if (value === false) element.removeAttribute(name);
            else element.setAttribute(name, value === true ? "" : value);
        });
    });
}
function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
        popper: {
            position: state.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
        },
        arrow: {
            position: "absolute"
        },
        reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
    return function() {
        Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
            var style = styleProperties.reduce(function(style, property) {
                style[property] = "";
                return style;
            }, {}); // arrow is optional + virtual elements
            if (!(0, _instanceOfJs.isHTMLElement)(element) || !(0, _getNodeNameJsDefault.default)(element)) return;
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
                element.removeAttribute(attribute);
            });
        });
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect: effect,
    requires: [
        "computeStyles"
    ]
};

},{"../dom-utils/getNodeName.js":"a2Qom","../dom-utils/instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a2Qom":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getNodeName);
function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gYFUC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isElement", ()=>isElement);
parcelHelpers.export(exports, "isHTMLElement", ()=>isHTMLElement);
parcelHelpers.export(exports, "isShadowRoot", ()=>isShadowRoot);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function isElement(node) {
    var OwnElement = (0, _getWindowJsDefault.default)(node).Element;
    return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
    var OwnElement = (0, _getWindowJsDefault.default)(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === "undefined") return false;
    var OwnElement = (0, _getWindowJsDefault.default)(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2SkOo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getWindow);
function getWindow(node) {
    if (node == null) return window;
    if (node.toString() !== "[object Window]") {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"31HFW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _containsJs = require("../dom-utils/contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _withinJs = require("../utils/within.js");
var _mergePaddingObjectJs = require("../utils/mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("../utils/expandToHashMap.js");
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
var _enumsJs = require("../enums.js"); // eslint-disable-next-line import/no-unused-modules
var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
        placement: state.placement
    })) : padding;
    return (0, _mergePaddingObjectJsDefault.default)(typeof padding !== "number" ? padding : (0, _expandToHashMapJsDefault.default)(padding, (0, _enumsJs.basePlacements)));
};
function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = (0, _getBasePlacementJsDefault.default)(state.placement);
    var axis = (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement);
    var isVertical = [
        (0, _enumsJs.left),
        (0, _enumsJs.right)
    ].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets) return;
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = (0, _getLayoutRectJsDefault.default)(arrowElement);
    var minProp = axis === "y" ? (0, _enumsJs.top) : (0, _enumsJs.left);
    var maxProp = axis === "y" ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = (0, _getOffsetParentJsDefault.default)(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds
    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = (0, _withinJs.within)(min, center, max); // Prevents breaking syntax highlighting...
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function effect(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) return;
     // CSS selector
    if (typeof arrowElement === "string") {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) return;
    }
    if (!(0, _containsJsDefault.default)(state.elements.popper, arrowElement)) return;
    state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: arrow,
    effect: effect,
    requires: [
        "popperOffsets"
    ],
    requiresIfExists: [
        "preventOverflow"
    ]
};

},{"../utils/getBasePlacement.js":"59Wp3","../dom-utils/getLayoutRect.js":"jvjuf","../dom-utils/contains.js":"4QxRR","../dom-utils/getOffsetParent.js":"laoYw","../utils/getMainAxisFromPlacement.js":"1Xlom","../utils/within.js":"3glSz","../utils/mergePaddingObject.js":"lEIf9","../utils/expandToHashMap.js":"iQlH5","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59Wp3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getBasePlacement);
var _enumsJs = require("../enums.js");
function getBasePlacement(placement) {
    return placement.split("-")[0];
}

},{"../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jvjuf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getLayoutRect);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js"); // Returns the layout rect of an element relative to its offsetParent. Layout
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
function getLayoutRect(element) {
    var clientRect = (0, _getBoundingClientRectJsDefault.default)(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
    if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
    return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: width,
        height: height
    };
}

},{"./getBoundingClientRect.js":"9CFSQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9CFSQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getBoundingClientRect);
var _instanceOfJs = require("./instanceOf.js");
var _mathJs = require("../utils/math.js");
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _isLayoutViewportJs = require("./isLayoutViewport.js");
var _isLayoutViewportJsDefault = parcelHelpers.interopDefault(_isLayoutViewportJs);
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) includeScale = false;
    if (isFixedStrategy === void 0) isFixedStrategy = false;
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && (0, _instanceOfJs.isHTMLElement)(element)) {
        scaleX = element.offsetWidth > 0 ? (0, _mathJs.round)(clientRect.width) / element.offsetWidth || 1 : 1;
        scaleY = element.offsetHeight > 0 ? (0, _mathJs.round)(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = (0, _instanceOfJs.isElement)(element) ? (0, _getWindowJsDefault.default)(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !(0, _isLayoutViewportJsDefault.default)() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
        width: width,
        height: height,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x,
        x: x,
        y: y
    };
}

},{"./instanceOf.js":"gYFUC","../utils/math.js":"gQqVe","./getWindow.js":"2SkOo","./isLayoutViewport.js":"3ipHv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gQqVe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "max", ()=>max);
parcelHelpers.export(exports, "min", ()=>min);
parcelHelpers.export(exports, "round", ()=>round);
var max = Math.max;
var min = Math.min;
var round = Math.round;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ipHv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isLayoutViewport);
var _userAgentJs = require("../utils/userAgent.js");
var _userAgentJsDefault = parcelHelpers.interopDefault(_userAgentJs);
function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test((0, _userAgentJsDefault.default)());
}

},{"../utils/userAgent.js":"1hEx0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1hEx0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getUAString);
function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
    }).join(" ");
    return navigator.userAgent;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4QxRR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>contains);
var _instanceOfJs = require("./instanceOf.js");
function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method
    if (parent.contains(child)) return true;
    else if (rootNode && (0, _instanceOfJs.isShadowRoot)(rootNode)) {
        var next = child;
        do {
            if (next && parent.isSameNode(next)) return true;
             // $FlowFixMe[prop-missing]: need a better way to handle this...
            next = next.parentNode || next.host;
        }while (next);
    } // Give up, the result is false
    return false;
}

},{"./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"laoYw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getOffsetParent);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _isTableElementJs = require("./isTableElement.js");
var _isTableElementJsDefault = parcelHelpers.interopDefault(_isTableElementJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _userAgentJs = require("../utils/userAgent.js");
var _userAgentJsDefault = parcelHelpers.interopDefault(_userAgentJs);
function getTrueOffsetParent(element) {
    if (!(0, _instanceOfJs.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
    (0, _getComputedStyleJsDefault.default)(element).position === "fixed") return null;
    return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function getContainingBlock(element) {
    var isFirefox = /firefox/i.test((0, _userAgentJsDefault.default)());
    var isIE = /Trident/i.test((0, _userAgentJsDefault.default)());
    if (isIE && (0, _instanceOfJs.isHTMLElement)(element)) {
        // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
        var elementCss = (0, _getComputedStyleJsDefault.default)(element);
        if (elementCss.position === "fixed") return null;
    }
    var currentNode = (0, _getParentNodeJsDefault.default)(element);
    if ((0, _instanceOfJs.isShadowRoot)(currentNode)) currentNode = currentNode.host;
    while((0, _instanceOfJs.isHTMLElement)(currentNode) && [
        "html",
        "body"
    ].indexOf((0, _getNodeNameJsDefault.default)(currentNode)) < 0){
        var css = (0, _getComputedStyleJsDefault.default)(currentNode); // This is non-exhaustive but covers the most common CSS properties that
        // create a containing block.
        // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
        if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || [
            "transform",
            "perspective"
        ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") return currentNode;
        else currentNode = currentNode.parentNode;
    }
    return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
function getOffsetParent(element) {
    var window = (0, _getWindowJsDefault.default)(element);
    var offsetParent = getTrueOffsetParent(element);
    while(offsetParent && (0, _isTableElementJsDefault.default)(offsetParent) && (0, _getComputedStyleJsDefault.default)(offsetParent).position === "static")offsetParent = getTrueOffsetParent(offsetParent);
    if (offsetParent && ((0, _getNodeNameJsDefault.default)(offsetParent) === "html" || (0, _getNodeNameJsDefault.default)(offsetParent) === "body" && (0, _getComputedStyleJsDefault.default)(offsetParent).position === "static")) return window;
    return offsetParent || getContainingBlock(element) || window;
}

},{"./getWindow.js":"2SkOo","./getNodeName.js":"a2Qom","./getComputedStyle.js":"3mZjB","./instanceOf.js":"gYFUC","./isTableElement.js":"2qBb7","./getParentNode.js":"bIHpd","../utils/userAgent.js":"1hEx0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3mZjB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getComputedStyle);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getComputedStyle(element) {
    return (0, _getWindowJsDefault.default)(element).getComputedStyle(element);
}

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2qBb7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isTableElement);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
function isTableElement(element) {
    return [
        "table",
        "td",
        "th"
    ].indexOf((0, _getNodeNameJsDefault.default)(element)) >= 0;
}

},{"./getNodeName.js":"a2Qom","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bIHpd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getParentNode);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _instanceOfJs = require("./instanceOf.js");
function getParentNode(element) {
    if ((0, _getNodeNameJsDefault.default)(element) === "html") return element;
    return(// $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ((0, _instanceOfJs.isShadowRoot)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0, _getDocumentElementJsDefault.default)(element) // fallback
    );
}

},{"./getNodeName.js":"a2Qom","./getDocumentElement.js":"eJ9Y1","./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eJ9Y1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getDocumentElement);
var _instanceOfJs = require("./instanceOf.js");
function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return (((0, _instanceOfJs.isElement)(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}

},{"./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Xlom":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getMainAxisFromPlacement);
function getMainAxisFromPlacement(placement) {
    return [
        "top",
        "bottom"
    ].indexOf(placement) >= 0 ? "x" : "y";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3glSz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "within", ()=>within);
parcelHelpers.export(exports, "withinMaxClamp", ()=>withinMaxClamp);
var _mathJs = require("./math.js");
function within(min, value, max) {
    return (0, _mathJs.max)(min, (0, _mathJs.min)(value, max));
}
function withinMaxClamp(min, value, max) {
    var v = within(min, value, max);
    return v > max ? max : v;
}

},{"./math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lEIf9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>mergePaddingObject);
var _getFreshSideObjectJs = require("./getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
function mergePaddingObject(paddingObject) {
    return Object.assign({}, (0, _getFreshSideObjectJsDefault.default)(), paddingObject);
}

},{"./getFreshSideObject.js":"g4xOt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g4xOt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getFreshSideObject);
function getFreshSideObject() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iQlH5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>expandToHashMap);
function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
    }, {});
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gDlm2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapToStyles", ()=>mapToStyles);
var _enumsJs = require("../enums.js");
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getWindowJs = require("../dom-utils/getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("../dom-utils/getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _mathJs = require("../utils/math.js"); // eslint-disable-next-line import/no-unused-modules
var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x, y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
        x: (0, _mathJs.round)(x * dpr) / dpr || 0,
        y: (0, _mathJs.round)(y * dpr) / dpr || 0
    };
}
function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = (0, _enumsJs.left);
    var sideY = (0, _enumsJs.top);
    var win = window;
    if (adaptive) {
        var offsetParent = (0, _getOffsetParentJsDefault.default)(popper);
        var heightProp = "clientHeight";
        var widthProp = "clientWidth";
        if (offsetParent === (0, _getWindowJsDefault.default)(popper)) {
            offsetParent = (0, _getDocumentElementJsDefault.default)(popper);
            if ((0, _getComputedStyleJsDefault.default)(offsetParent).position !== "static" && position === "absolute") {
                heightProp = "scrollHeight";
                widthProp = "scrollWidth";
            }
        } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
        offsetParent;
        if (placement === (0, _enumsJs.top) || (placement === (0, _enumsJs.left) || placement === (0, _enumsJs.right)) && variation === (0, _enumsJs.end)) {
            sideY = (0, _enumsJs.bottom);
            var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === (0, _enumsJs.left) || (placement === (0, _enumsJs.top) || placement === (0, _enumsJs.bottom)) && variation === (0, _enumsJs.end)) {
            sideX = (0, _enumsJs.right);
            var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
        }
    }
    var commonStyles = Object.assign({
        position: position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
        x: x,
        y: y
    }, (0, _getWindowJsDefault.default)(popper)) : {
        x: x,
        y: y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
        placement: (0, _getBasePlacementJsDefault.default)(state.placement),
        variation: (0, _getVariationJsDefault.default)(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration,
        isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
    })));
    if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets: roundOffsets
    })));
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-placement": state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
};

},{"../enums.js":"lCAq5","../dom-utils/getOffsetParent.js":"laoYw","../dom-utils/getWindow.js":"2SkOo","../dom-utils/getDocumentElement.js":"eJ9Y1","../dom-utils/getComputedStyle.js":"3mZjB","../utils/getBasePlacement.js":"59Wp3","../utils/getVariation.js":"hIo7Y","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hIo7Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getVariation);
function getVariation(placement) {
    return placement.split("-")[1];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hBKsL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("../dom-utils/getWindow.js"); // eslint-disable-next-line import/no-unused-modules
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var passive = {
    passive: true
};
function effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window = (0, _getWindowJsDefault.default)(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
    });
    if (resize) window.addEventListener("resize", instance.update, passive);
    return function() {
        if (scroll) scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener("scroll", instance.update, passive);
        });
        if (resize) window.removeEventListener("resize", instance.update, passive);
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {},
    effect: effect,
    data: {}
};

},{"../dom-utils/getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fv5wq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getOppositePlacementJs = require("../utils/getOppositePlacement.js");
var _getOppositePlacementJsDefault = parcelHelpers.interopDefault(_getOppositePlacementJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getOppositeVariationPlacementJs = require("../utils/getOppositeVariationPlacement.js");
var _getOppositeVariationPlacementJsDefault = parcelHelpers.interopDefault(_getOppositeVariationPlacementJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _computeAutoPlacementJs = require("../utils/computeAutoPlacement.js");
var _computeAutoPlacementJsDefault = parcelHelpers.interopDefault(_computeAutoPlacementJs);
var _enumsJs = require("../enums.js");
var _getVariationJs = require("../utils/getVariation.js"); // eslint-disable-next-line import/no-unused-modules
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
function getExpandedFallbackPlacements(placement) {
    if ((0, _getBasePlacementJsDefault.default)(placement) === (0, _enumsJs.auto)) return [];
    var oppositePlacement = (0, _getOppositePlacementJsDefault.default)(placement);
    return [
        (0, _getOppositeVariationPlacementJsDefault.default)(placement),
        oppositePlacement,
        (0, _getOppositeVariationPlacementJsDefault.default)(oppositePlacement)
    ];
}
function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) return;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = (0, _getBasePlacementJsDefault.default)(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [
        (0, _getOppositePlacementJsDefault.default)(preferredPlacement)
    ] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [
        preferredPlacement
    ].concat(fallbackPlacements).reduce(function(acc, placement) {
        return acc.concat((0, _getBasePlacementJsDefault.default)(placement) === (0, _enumsJs.auto) ? (0, _computeAutoPlacementJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            flipVariations: flipVariations,
            allowedAutoPlacements: allowedAutoPlacements
        }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];
    for(var i = 0; i < placements.length; i++){
        var placement = placements[i];
        var _basePlacement = (0, _getBasePlacementJsDefault.default)(placement);
        var isStartVariation = (0, _getVariationJsDefault.default)(placement) === (0, _enumsJs.start);
        var isVertical = [
            (0, _enumsJs.top),
            (0, _enumsJs.bottom)
        ].indexOf(_basePlacement) >= 0;
        var len = isVertical ? "width" : "height";
        var overflow = (0, _detectOverflowJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            altBoundary: altBoundary,
            padding: padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? (0, _enumsJs.right) : (0, _enumsJs.left) : isStartVariation ? (0, _enumsJs.bottom) : (0, _enumsJs.top);
        if (referenceRect[len] > popperRect[len]) mainVariationSide = (0, _getOppositePlacementJsDefault.default)(mainVariationSide);
        var altVariationSide = (0, _getOppositePlacementJsDefault.default)(mainVariationSide);
        var checks = [];
        if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
        if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        if (checks.every(function(check) {
            return check;
        })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
        }
        checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
        // `2` may be desired in some cases – research later
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop(_i) {
            var fittingPlacement = placements.find(function(placement) {
                var checks = checksMap.get(placement);
                if (checks) return checks.slice(0, _i).every(function(check) {
                    return check;
                });
            });
            if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
            }
        };
        for(var _i = numberOfChecks; _i > 0; _i--){
            var _ret = _loop(_i);
            if (_ret === "break") break;
        }
    }
    if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
    }
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: [
        "offset"
    ],
    data: {
        _skip: false
    }
};

},{"../utils/getOppositePlacement.js":"a8CY0","../utils/getBasePlacement.js":"59Wp3","../utils/getOppositeVariationPlacement.js":"bKTLC","../utils/detectOverflow.js":"ltCuw","../utils/computeAutoPlacement.js":"gytMj","../enums.js":"lCAq5","../utils/getVariation.js":"hIo7Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a8CY0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getOppositePlacement);
var hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash[matched];
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bKTLC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getOppositeVariationPlacement);
var hash = {
    start: "end",
    end: "start"
};
function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
        return hash[matched];
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ltCuw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>detectOverflow);
var _getClippingRectJs = require("../dom-utils/getClippingRect.js");
var _getClippingRectJsDefault = parcelHelpers.interopDefault(_getClippingRectJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getBoundingClientRectJs = require("../dom-utils/getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _computeOffsetsJs = require("./computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
var _rectToClientRectJs = require("./rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _enumsJs = require("../enums.js");
var _instanceOfJs = require("../dom-utils/instanceOf.js");
var _mergePaddingObjectJs = require("./mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("./expandToHashMap.js"); // eslint-disable-next-line import/no-unused-modules
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
function detectOverflow(state, options) {
    if (options === void 0) options = {};
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? (0, _enumsJs.clippingParents) : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? (0, _enumsJs.viewport) : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? (0, _enumsJs.popper) : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = (0, _mergePaddingObjectJsDefault.default)(typeof padding !== "number" ? padding : (0, _expandToHashMapJsDefault.default)(padding, (0, _enumsJs.basePlacements)));
    var altContext = elementContext === (0, _enumsJs.popper) ? (0, _enumsJs.reference) : (0, _enumsJs.popper);
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = (0, _getClippingRectJsDefault.default)((0, _instanceOfJs.isElement)(element) ? element : element.contextElement || (0, _getDocumentElementJsDefault.default)(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = (0, _getBoundingClientRectJsDefault.default)(state.elements.reference);
    var popperOffsets = (0, _computeOffsetsJsDefault.default)({
        reference: referenceClientRect,
        element: popperRect,
        strategy: "absolute",
        placement: placement
    });
    var popperClientRect = (0, _rectToClientRectJsDefault.default)(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === (0, _enumsJs.popper) ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect
    var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
    if (elementContext === (0, _enumsJs.popper) && offsetData) {
        var offset = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [
                (0, _enumsJs.right),
                (0, _enumsJs.bottom)
            ].indexOf(key) >= 0 ? 1 : -1;
            var axis = [
                (0, _enumsJs.top),
                (0, _enumsJs.bottom)
            ].indexOf(key) >= 0 ? "y" : "x";
            overflowOffsets[key] += offset[axis] * multiply;
        });
    }
    return overflowOffsets;
}

},{"../dom-utils/getClippingRect.js":"eeg2s","../dom-utils/getDocumentElement.js":"eJ9Y1","../dom-utils/getBoundingClientRect.js":"9CFSQ","./computeOffsets.js":"7jtXk","./rectToClientRect.js":"cQ3tg","../enums.js":"lCAq5","../dom-utils/instanceOf.js":"gYFUC","./mergePaddingObject.js":"lEIf9","./expandToHashMap.js":"iQlH5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eeg2s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getClippingRect);
var _enumsJs = require("../enums.js");
var _getViewportRectJs = require("./getViewportRect.js");
var _getViewportRectJsDefault = parcelHelpers.interopDefault(_getViewportRectJs);
var _getDocumentRectJs = require("./getDocumentRect.js");
var _getDocumentRectJsDefault = parcelHelpers.interopDefault(_getDocumentRectJs);
var _listScrollParentsJs = require("./listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _containsJs = require("./contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _rectToClientRectJs = require("../utils/rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _mathJs = require("../utils/math.js");
function getInnerBoundingClientRect(element, strategy) {
    var rect = (0, _getBoundingClientRectJsDefault.default)(element, false, strategy === "fixed");
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === (0, _enumsJs.viewport) ? (0, _rectToClientRectJsDefault.default)((0, _getViewportRectJsDefault.default)(element, strategy)) : (0, _instanceOfJs.isElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : (0, _rectToClientRectJsDefault.default)((0, _getDocumentRectJsDefault.default)((0, _getDocumentElementJsDefault.default)(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents(element) {
    var clippingParents = (0, _listScrollParentsJsDefault.default)((0, _getParentNodeJsDefault.default)(element));
    var canEscapeClipping = [
        "absolute",
        "fixed"
    ].indexOf((0, _getComputedStyleJsDefault.default)(element).position) >= 0;
    var clipperElement = canEscapeClipping && (0, _instanceOfJs.isHTMLElement)(element) ? (0, _getOffsetParentJsDefault.default)(element) : element;
    if (!(0, _instanceOfJs.isElement)(clipperElement)) return [];
     // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
    return clippingParents.filter(function(clippingParent) {
        return (0, _instanceOfJs.isElement)(clippingParent) && (0, _containsJsDefault.default)(clippingParent, clipperElement) && (0, _getNodeNameJsDefault.default)(clippingParent) !== "body";
    });
} // Gets the maximum area that the element is visible in due to any number of
function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [
        rootBoundary
    ]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function(accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element, clippingParent, strategy);
        accRect.top = (0, _mathJs.max)(rect.top, accRect.top);
        accRect.right = (0, _mathJs.min)(rect.right, accRect.right);
        accRect.bottom = (0, _mathJs.min)(rect.bottom, accRect.bottom);
        accRect.left = (0, _mathJs.max)(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
}

},{"../enums.js":"lCAq5","./getViewportRect.js":"cnH2G","./getDocumentRect.js":"d94SC","./listScrollParents.js":"2di3T","./getOffsetParent.js":"laoYw","./getDocumentElement.js":"eJ9Y1","./getComputedStyle.js":"3mZjB","./instanceOf.js":"gYFUC","./getBoundingClientRect.js":"9CFSQ","./getParentNode.js":"bIHpd","./contains.js":"4QxRR","./getNodeName.js":"a2Qom","../utils/rectToClientRect.js":"cQ3tg","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cnH2G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getViewportRect);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _isLayoutViewportJs = require("./isLayoutViewport.js");
var _isLayoutViewportJsDefault = parcelHelpers.interopDefault(_isLayoutViewportJs);
function getViewportRect(element, strategy) {
    var win = (0, _getWindowJsDefault.default)(element);
    var html = (0, _getDocumentElementJsDefault.default)(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        var layoutViewport = (0, _isLayoutViewportJsDefault.default)();
        if (layoutViewport || !layoutViewport && strategy === "fixed") {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width: width,
        height: height,
        x: x + (0, _getWindowScrollBarXJsDefault.default)(element),
        y: y
    };
}

},{"./getWindow.js":"2SkOo","./getDocumentElement.js":"eJ9Y1","./getWindowScrollBarX.js":"sz4Ld","./isLayoutViewport.js":"3ipHv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"sz4Ld":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getWindowScrollBarX);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return (0, _getBoundingClientRectJsDefault.default)((0, _getDocumentElementJsDefault.default)(element)).left + (0, _getWindowScrollJsDefault.default)(element).scrollLeft;
}

},{"./getBoundingClientRect.js":"9CFSQ","./getDocumentElement.js":"eJ9Y1","./getWindowScroll.js":"1XUtN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1XUtN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getWindowScroll);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getWindowScroll(node) {
    var win = (0, _getWindowJsDefault.default)(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    };
}

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d94SC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getDocumentRect);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _mathJs = require("../utils/math.js"); // Gets the entire size of the scrollable document area, even extending outside
function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = (0, _getDocumentElementJsDefault.default)(element);
    var winScroll = (0, _getWindowScrollJsDefault.default)(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = (0, _mathJs.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = (0, _mathJs.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + (0, _getWindowScrollBarXJsDefault.default)(element);
    var y = -winScroll.scrollTop;
    if ((0, _getComputedStyleJsDefault.default)(body || html).direction === "rtl") x += (0, _mathJs.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}

},{"./getDocumentElement.js":"eJ9Y1","./getComputedStyle.js":"3mZjB","./getWindowScrollBarX.js":"sz4Ld","./getWindowScroll.js":"1XUtN","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2di3T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>listScrollParents);
var _getScrollParentJs = require("./getScrollParent.js");
var _getScrollParentJsDefault = parcelHelpers.interopDefault(_getScrollParentJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) list = [];
    var scrollParent = (0, _getScrollParentJsDefault.default)(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = (0, _getWindowJsDefault.default)(scrollParent);
    var target = isBody ? [
        win
    ].concat(win.visualViewport || [], (0, _isScrollParentJsDefault.default)(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat(listScrollParents((0, _getParentNodeJsDefault.default)(target)));
}

},{"./getScrollParent.js":"jy4ZS","./getParentNode.js":"bIHpd","./getWindow.js":"2SkOo","./isScrollParent.js":"9rLGO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jy4ZS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getScrollParent);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
function getScrollParent(node) {
    if ([
        "html",
        "body",
        "#document"
    ].indexOf((0, _getNodeNameJsDefault.default)(node)) >= 0) // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
    if ((0, _instanceOfJs.isHTMLElement)(node) && (0, _isScrollParentJsDefault.default)(node)) return node;
    return getScrollParent((0, _getParentNodeJsDefault.default)(node));
}

},{"./getParentNode.js":"bIHpd","./isScrollParent.js":"9rLGO","./getNodeName.js":"a2Qom","./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9rLGO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isScrollParent);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = (0, _getComputedStyleJsDefault.default)(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

},{"./getComputedStyle.js":"3mZjB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cQ3tg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>rectToClientRect);
function rectToClientRect(rect) {
    return Object.assign({}, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7jtXk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>computeOffsets);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getMainAxisFromPlacementJs = require("./getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _enumsJs = require("../enums.js");
function computeOffsets(_ref) {
    var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? (0, _getBasePlacementJsDefault.default)(placement) : null;
    var variation = placement ? (0, _getVariationJsDefault.default)(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch(basePlacement){
        case 0, _enumsJs.top:
            offsets = {
                x: commonX,
                y: reference.y - element.height
            };
            break;
        case 0, _enumsJs.bottom:
            offsets = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case 0, _enumsJs.right:
            offsets = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case 0, _enumsJs.left:
            offsets = {
                x: reference.x - element.width,
                y: commonY
            };
            break;
        default:
            offsets = {
                x: reference.x,
                y: reference.y
            };
    }
    var mainAxis = basePlacement ? (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement) : null;
    if (mainAxis != null) {
        var len = mainAxis === "y" ? "height" : "width";
        switch(variation){
            case 0, _enumsJs.start:
                offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                break;
            case 0, _enumsJs.end:
                offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                break;
            default:
        }
    }
    return offsets;
}

},{"./getBasePlacement.js":"59Wp3","./getVariation.js":"hIo7Y","./getMainAxisFromPlacement.js":"1Xlom","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gytMj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>computeAutoPlacement);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("./detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
function computeAutoPlacement(state, options) {
    if (options === void 0) options = {};
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? (0, _enumsJs.placements) : _options$allowedAutoP;
    var variation = (0, _getVariationJsDefault.default)(placement);
    var placements = variation ? flipVariations ? (0, _enumsJs.variationPlacements) : (0, _enumsJs.variationPlacements).filter(function(placement) {
        return (0, _getVariationJsDefault.default)(placement) === variation;
    }) : (0, _enumsJs.basePlacements);
    var allowedPlacements = placements.filter(function(placement) {
        return allowedAutoPlacements.indexOf(placement) >= 0;
    });
    if (allowedPlacements.length === 0) allowedPlacements = placements;
     // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
    var overflows = allowedPlacements.reduce(function(acc, placement) {
        acc[placement] = (0, _detectOverflowJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding
        })[(0, _getBasePlacementJsDefault.default)(placement)];
        return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
    });
}

},{"./getVariation.js":"hIo7Y","../enums.js":"lCAq5","./detectOverflow.js":"ltCuw","./getBasePlacement.js":"59Wp3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2g4OF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) preventedOffsets = {
        x: 0,
        y: 0
    };
    return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
    };
}
function isAnySideFullyClipped(overflow) {
    return [
        (0, _enumsJs.top),
        (0, _enumsJs.right),
        (0, _enumsJs.bottom),
        (0, _enumsJs.left)
    ].some(function(side) {
        return overflow[side] >= 0;
    });
}
function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = (0, _detectOverflowJsDefault.default)(state, {
        elementContext: "reference"
    });
    var popperAltOverflow = (0, _detectOverflowJsDefault.default)(state, {
        altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
        referenceClippingOffsets: referenceClippingOffsets,
        popperEscapeOffsets: popperEscapeOffsets,
        isReferenceHidden: isReferenceHidden,
        hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-reference-hidden": isReferenceHidden,
        "data-popper-escaped": hasPopperEscaped
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
        "preventOverflow"
    ],
    fn: hide
};

},{"../enums.js":"lCAq5","../utils/detectOverflow.js":"ltCuw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3GKVY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "distanceAndSkiddingToXY", ()=>distanceAndSkiddingToXY);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _enumsJs = require("../enums.js"); // eslint-disable-next-line import/no-unused-modules
function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = (0, _getBasePlacementJsDefault.default)(placement);
    var invertDistance = [
        (0, _enumsJs.left),
        (0, _enumsJs.top)
    ].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset === "function" ? offset(Object.assign({}, rects, {
        placement: placement
    })) : offset, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [
        (0, _enumsJs.left),
        (0, _enumsJs.right)
    ].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
    } : {
        x: skidding,
        y: distance
    };
}
function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset = _options$offset === void 0 ? [
        0,
        0
    ] : _options$offset;
    var data = (0, _enumsJs.placements).reduce(function(acc, placement) {
        acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
        return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
        "popperOffsets"
    ],
    fn: offset
};

},{"../utils/getBasePlacement.js":"59Wp3","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6I679":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _computeOffsetsJs = require("../utils/computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = (0, _computeOffsetsJsDefault.default)({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: "absolute",
        placement: state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
};

},{"../utils/computeOffsets.js":"7jtXk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1AMhb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _getAltAxisJs = require("../utils/getAltAxis.js");
var _getAltAxisJsDefault = parcelHelpers.interopDefault(_getAltAxisJs);
var _withinJs = require("../utils/within.js");
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getFreshSideObjectJs = require("../utils/getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
var _mathJs = require("../utils/math.js");
function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = (0, _detectOverflowJsDefault.default)(state, {
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        altBoundary: altBoundary
    });
    var basePlacement = (0, _getBasePlacementJsDefault.default)(state.placement);
    var variation = (0, _getVariationJsDefault.default)(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement);
    var altAxis = (0, _getAltAxisJsDefault.default)(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
        placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
        mainAxis: tetherOffsetValue,
        altAxis: tetherOffsetValue
    } : Object.assign({
        mainAxis: 0,
        altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
        x: 0,
        y: 0
    };
    if (!popperOffsets) return;
    if (checkMainAxis) {
        var _offsetModifierState$;
        var mainSide = mainAxis === "y" ? (0, _enumsJs.top) : (0, _enumsJs.left);
        var altSide = mainAxis === "y" ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
        var len = mainAxis === "y" ? "height" : "width";
        var offset = popperOffsets[mainAxis];
        var min = offset + overflow[mainSide];
        var max = offset - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === (0, _enumsJs.start) ? referenceRect[len] : popperRect[len];
        var maxLen = variation === (0, _enumsJs.start) ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
        // outside the reference bounds
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? (0, _getLayoutRectJsDefault.default)(arrowElement) : {
            width: 0,
            height: 0
        };
        var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : (0, _getFreshSideObjectJsDefault.default)();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
        // to include its full size in the calculation. If the reference is small
        // and near the edge of a boundary, the popper can overflow even if the
        // reference is not overflowing as well (e.g. virtual elements with no
        // width or height)
        var arrowLen = (0, _withinJs.within)(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
        var arrowOffsetParent = state.elements.arrow && (0, _getOffsetParentJsDefault.default)(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
        var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = offset + maxOffset - offsetModifierValue;
        var preventedOffset = (0, _withinJs.within)(tether ? (0, _mathJs.min)(min, tetherMin) : min, offset, tether ? (0, _mathJs.max)(max, tetherMax) : max);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
        var _offsetModifierState$2;
        var _mainSide = mainAxis === "x" ? (0, _enumsJs.top) : (0, _enumsJs.left);
        var _altSide = mainAxis === "x" ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
        var _offset = popperOffsets[altAxis];
        var _len = altAxis === "y" ? "height" : "width";
        var _min = _offset + overflow[_mainSide];
        var _max = _offset - overflow[_altSide];
        var isOriginSide = [
            (0, _enumsJs.top),
            (0, _enumsJs.left)
        ].indexOf(basePlacement) !== -1;
        var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
        var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
        var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
        var _preventedOffset = tether && isOriginSide ? (0, _withinJs.withinMaxClamp)(_tetherMin, _offset, _tetherMax) : (0, _withinJs.within)(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: [
        "offset"
    ]
};

},{"../enums.js":"lCAq5","../utils/getBasePlacement.js":"59Wp3","../utils/getMainAxisFromPlacement.js":"1Xlom","../utils/getAltAxis.js":"59FWE","../utils/within.js":"3glSz","../dom-utils/getLayoutRect.js":"jvjuf","../dom-utils/getOffsetParent.js":"laoYw","../utils/detectOverflow.js":"ltCuw","../utils/getVariation.js":"hIo7Y","../utils/getFreshSideObject.js":"g4xOt","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59FWE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getAltAxis);
function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cHuNp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>popperGenerator);
parcelHelpers.export(exports, "createPopper", ()=>createPopper);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _detectOverflowJsDefault.default));
var _getCompositeRectJs = require("./dom-utils/getCompositeRect.js");
var _getCompositeRectJsDefault = parcelHelpers.interopDefault(_getCompositeRectJs);
var _getLayoutRectJs = require("./dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _listScrollParentsJs = require("./dom-utils/listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _orderModifiersJs = require("./utils/orderModifiers.js");
var _orderModifiersJsDefault = parcelHelpers.interopDefault(_orderModifiersJs);
var _debounceJs = require("./utils/debounce.js");
var _debounceJsDefault = parcelHelpers.interopDefault(_debounceJs);
var _mergeByNameJs = require("./utils/mergeByName.js");
var _mergeByNameJsDefault = parcelHelpers.interopDefault(_mergeByNameJs);
var _detectOverflowJs = require("./utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _instanceOfJs = require("./dom-utils/instanceOf.js");
var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};
function areValidElements() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === "function");
    });
}
function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) generatorOptions = {};
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
        if (options === void 0) options = defaultOptions;
        var state = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
                reference: reference,
                popper: popper
            },
            attributes: {},
            styles: {}
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
            state: state,
            setOptions: function setOptions(setOptionsAction) {
                var options = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
                cleanupModifierEffects();
                state.options = Object.assign({}, defaultOptions, state.options, options);
                state.scrollParents = {
                    reference: (0, _instanceOfJs.isElement)(reference) ? (0, _listScrollParentsJsDefault.default)(reference) : reference.contextElement ? (0, _listScrollParentsJsDefault.default)(reference.contextElement) : [],
                    popper: (0, _listScrollParentsJsDefault.default)(popper)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties
                var orderedModifiers = (0, _orderModifiersJsDefault.default)((0, _mergeByNameJsDefault.default)([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers
                state.orderedModifiers = orderedModifiers.filter(function(m) {
                    return m.enabled;
                });
                runModifierEffects();
                return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
                if (isDestroyed) return;
                var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore
                if (!areValidElements(reference, popper)) return;
                 // Store the reference and popper rects to be read by modifiers
                state.rects = {
                    reference: (0, _getCompositeRectJsDefault.default)(reference, (0, _getOffsetParentJsDefault.default)(popper), state.options.strategy === "fixed"),
                    popper: (0, _getLayoutRectJsDefault.default)(popper)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect
                state.reset = false;
                state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`
                state.orderedModifiers.forEach(function(modifier) {
                    return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                });
                for(var index = 0; index < state.orderedModifiers.length; index++){
                    if (state.reset === true) {
                        state.reset = false;
                        index = -1;
                        continue;
                    }
                    var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                    if (typeof fn === "function") state = fn({
                        state: state,
                        options: _options,
                        name: name,
                        instance: instance
                    }) || state;
                }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: (0, _debounceJsDefault.default)(function() {
                return new Promise(function(resolve) {
                    instance.forceUpdate();
                    resolve(state);
                });
            }),
            destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
            }
        };
        if (!areValidElements(reference, popper)) return instance;
        instance.setOptions(options).then(function(state) {
            if (!isDestroyed && options.onFirstUpdate) options.onFirstUpdate(state);
        }); // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.
        function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref) {
                var name = _ref.name, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, effect = _ref.effect;
                if (typeof effect === "function") {
                    var cleanupFn = effect({
                        state: state,
                        name: name,
                        instance: instance,
                        options: options
                    });
                    var noopFn = function noopFn() {};
                    effectCleanupFns.push(cleanupFn || noopFn);
                }
            });
        }
        function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
                return fn();
            });
            effectCleanupFns = [];
        }
        return instance;
    };
}
var createPopper = /*#__PURE__*/ popperGenerator(); // eslint-disable-next-line import/no-unused-modules

},{"./dom-utils/getCompositeRect.js":"ijPls","./dom-utils/getLayoutRect.js":"jvjuf","./dom-utils/listScrollParents.js":"2di3T","./dom-utils/getOffsetParent.js":"laoYw","./utils/orderModifiers.js":"N0VO0","./utils/debounce.js":"g6Chr","./utils/mergeByName.js":"2zTVN","./utils/detectOverflow.js":false,"./dom-utils/instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ijPls":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getCompositeRect);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getNodeScrollJs = require("./getNodeScroll.js");
var _getNodeScrollJsDefault = parcelHelpers.interopDefault(_getNodeScrollJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _mathJs = require("../utils/math.js");
function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = (0, _mathJs.round)(rect.width) / element.offsetWidth || 1;
    var scaleY = (0, _mathJs.round)(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) isFixed = false;
    var isOffsetParentAnElement = (0, _instanceOfJs.isHTMLElement)(offsetParent);
    var offsetParentIsScaled = (0, _instanceOfJs.isHTMLElement)(offsetParent) && isElementScaled(offsetParent);
    var documentElement = (0, _getDocumentElementJsDefault.default)(offsetParent);
    var rect = (0, _getBoundingClientRectJsDefault.default)(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, _getNodeNameJsDefault.default)(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
        (0, _isScrollParentJsDefault.default)(documentElement)) scroll = (0, _getNodeScrollJsDefault.default)(offsetParent);
        if ((0, _instanceOfJs.isHTMLElement)(offsetParent)) {
            offsets = (0, _getBoundingClientRectJsDefault.default)(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
        } else if (documentElement) offsets.x = (0, _getWindowScrollBarXJsDefault.default)(documentElement);
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}

},{"./getBoundingClientRect.js":"9CFSQ","./getNodeScroll.js":"bBjCr","./getNodeName.js":"a2Qom","./instanceOf.js":"gYFUC","./getWindowScrollBarX.js":"sz4Ld","./getDocumentElement.js":"eJ9Y1","./isScrollParent.js":"9rLGO","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bBjCr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getNodeScroll);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _instanceOfJs = require("./instanceOf.js");
var _getHTMLElementScrollJs = require("./getHTMLElementScroll.js");
var _getHTMLElementScrollJsDefault = parcelHelpers.interopDefault(_getHTMLElementScrollJs);
function getNodeScroll(node) {
    if (node === (0, _getWindowJsDefault.default)(node) || !(0, _instanceOfJs.isHTMLElement)(node)) return (0, _getWindowScrollJsDefault.default)(node);
    else return (0, _getHTMLElementScrollJsDefault.default)(node);
}

},{"./getWindowScroll.js":"1XUtN","./getWindow.js":"2SkOo","./instanceOf.js":"gYFUC","./getHTMLElementScroll.js":"6pwY2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6pwY2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getHTMLElementScroll);
function getHTMLElementScroll(element) {
    return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"N0VO0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>orderModifiers);
var _enumsJs = require("../enums.js"); // source: https://stackoverflow.com/questions/49875255
function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively
    function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
            if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) sort(depModifier);
            }
        });
        result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) // check for visited object
        sort(modifier);
    });
    return result;
}
function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase
    return (0, _enumsJs.modifierPhases).reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
        }));
    }, []);
}

},{"../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g6Chr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>debounce);
function debounce(fn) {
    var pending;
    return function() {
        if (!pending) pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
                pending = undefined;
                resolve(fn());
            });
        });
        return pending;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2zTVN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>mergeByName);
function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged, current) {
        var existing = merged[current.name];
        merged[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
        }) : current;
        return merged;
    }, {}); // IE11 does not support Object.values
    return Object.keys(merged).map(function(key) {
        return merged[key];
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1PuRF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopperLite", ()=>(0, _popperLiteJs.createPopper)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "createPopper", ()=>createPopper) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator));
parcelHelpers.export(exports, "defaultModifiers", ()=>defaultModifiers);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
var _createPopperJs = require("./createPopper.js");
var _eventListenersJs = require("./modifiers/eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _popperOffsetsJs = require("./modifiers/popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _computeStylesJs = require("./modifiers/computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _applyStylesJs = require("./modifiers/applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var _offsetJs = require("./modifiers/offset.js");
var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs);
var _flipJs = require("./modifiers/flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _preventOverflowJs = require("./modifiers/preventOverflow.js");
var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs);
var _arrowJs = require("./modifiers/arrow.js");
var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs);
var _hideJs = require("./modifiers/hide.js");
var _hideJsDefault = parcelHelpers.interopDefault(_hideJs);
var _popperLiteJs = require("./popper-lite.js");
var _indexJs = require("./modifiers/index.js");
parcelHelpers.exportAll(_indexJs, exports);
var defaultModifiers = [
    (0, _eventListenersJsDefault.default),
    (0, _popperOffsetsJsDefault.default),
    (0, _computeStylesJsDefault.default),
    (0, _applyStylesJsDefault.default),
    (0, _offsetJsDefault.default),
    (0, _flipJsDefault.default),
    (0, _preventOverflowJsDefault.default),
    (0, _arrowJsDefault.default),
    (0, _hideJsDefault.default)
];
var createPopper = /*#__PURE__*/ (0, _createPopperJs.popperGenerator)({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

},{"./createPopper.js":"cHuNp","./modifiers/eventListeners.js":"hBKsL","./modifiers/popperOffsets.js":"6I679","./modifiers/computeStyles.js":"gDlm2","./modifiers/applyStyles.js":"4iMn4","./modifiers/offset.js":"3GKVY","./modifiers/flip.js":"fv5wq","./modifiers/preventOverflow.js":"1AMhb","./modifiers/arrow.js":"31HFW","./modifiers/hide.js":"2g4OF","./popper-lite.js":false,"./modifiers/index.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2hEyg":[function() {},{}],"eRzTM":[function(require,module,exports) {
var global = arguments[3];
!function(e, t) {
    module.exports = t();
}(this, function() {
    "use strict";
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, t = "Expected a function", n = NaN, o = "[object Symbol]", i = /^\s+|\s+$/g, a = /^[-+]0x[0-9a-f]+$/i, r = /^0b[01]+$/i, c = /^0o[0-7]+$/i, s = parseInt, u = "object" == typeof e && e && e.Object === Object && e, d = "object" == typeof self && self && self.Object === Object && self, l = u || d || Function("return this")(), f = Object.prototype.toString, m = Math.max, p = Math.min, b = function() {
        return l.Date.now();
    };
    function v(e, n, o) {
        var i, a, r, c, s, u, d = 0, l = !1, f = !1, v = !0;
        if ("function" != typeof e) throw new TypeError(t);
        function y(t) {
            var n = i, o = a;
            return i = a = void 0, d = t, c = e.apply(o, n);
        }
        function h(e) {
            var t = e - u;
            return void 0 === u || t >= n || t < 0 || f && e - d >= r;
        }
        function k() {
            var e = b();
            if (h(e)) return x(e);
            s = setTimeout(k, function(e) {
                var t = n - (e - u);
                return f ? p(t, r - (e - d)) : t;
            }(e));
        }
        function x(e) {
            return s = void 0, v && i ? y(e) : (i = a = void 0, c);
        }
        function O() {
            var e = b(), t = h(e);
            if (i = arguments, a = this, u = e, t) {
                if (void 0 === s) return function(e) {
                    return d = e, s = setTimeout(k, n), l ? y(e) : c;
                }(u);
                if (f) return s = setTimeout(k, n), y(u);
            }
            return void 0 === s && (s = setTimeout(k, n)), c;
        }
        return n = w(n) || 0, g(o) && (l = !!o.leading, r = (f = "maxWait" in o) ? m(w(o.maxWait) || 0, n) : r, v = "trailing" in o ? !!o.trailing : v), O.cancel = function() {
            void 0 !== s && clearTimeout(s), d = 0, i = u = a = s = void 0;
        }, O.flush = function() {
            return void 0 === s ? c : x(b());
        }, O;
    }
    function g(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
    }
    function w(e) {
        if ("number" == typeof e) return e;
        if (function(e) {
            return "symbol" == typeof e || function(e) {
                return !!e && "object" == typeof e;
            }(e) && f.call(e) == o;
        }(e)) return n;
        if (g(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = g(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(i, "");
        var u = r.test(e);
        return u || c.test(e) ? s(e.slice(2), u ? 2 : 8) : a.test(e) ? n : +e;
    }
    var y = function(e, n, o) {
        var i = !0, a = !0;
        if ("function" != typeof e) throw new TypeError(t);
        return g(o) && (i = "leading" in o ? !!o.leading : i, a = "trailing" in o ? !!o.trailing : a), v(e, n, {
            leading: i,
            maxWait: n,
            trailing: a
        });
    }, h = "Expected a function", k = NaN, x = "[object Symbol]", O = /^\s+|\s+$/g, j = /^[-+]0x[0-9a-f]+$/i, E = /^0b[01]+$/i, N = /^0o[0-7]+$/i, z = parseInt, C = "object" == typeof e && e && e.Object === Object && e, A = "object" == typeof self && self && self.Object === Object && self, q = C || A || Function("return this")(), L = Object.prototype.toString, T = Math.max, M = Math.min, S = function() {
        return q.Date.now();
    };
    function D(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
    }
    function H(e) {
        if ("number" == typeof e) return e;
        if (function(e) {
            return "symbol" == typeof e || function(e) {
                return !!e && "object" == typeof e;
            }(e) && L.call(e) == x;
        }(e)) return k;
        if (D(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = D(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(O, "");
        var n = E.test(e);
        return n || N.test(e) ? z(e.slice(2), n ? 2 : 8) : j.test(e) ? k : +e;
    }
    var $ = function(e, t, n) {
        var o, i, a, r, c, s, u = 0, d = !1, l = !1, f = !0;
        if ("function" != typeof e) throw new TypeError(h);
        function m(t) {
            var n = o, a = i;
            return o = i = void 0, u = t, r = e.apply(a, n);
        }
        function p(e) {
            var n = e - s;
            return void 0 === s || n >= t || n < 0 || l && e - u >= a;
        }
        function b() {
            var e = S();
            if (p(e)) return v(e);
            c = setTimeout(b, function(e) {
                var n = t - (e - s);
                return l ? M(n, a - (e - u)) : n;
            }(e));
        }
        function v(e) {
            return c = void 0, f && o ? m(e) : (o = i = void 0, r);
        }
        function g() {
            var e = S(), n = p(e);
            if (o = arguments, i = this, s = e, n) {
                if (void 0 === c) return function(e) {
                    return u = e, c = setTimeout(b, t), d ? m(e) : r;
                }(s);
                if (l) return c = setTimeout(b, t), m(s);
            }
            return void 0 === c && (c = setTimeout(b, t)), r;
        }
        return t = H(t) || 0, D(n) && (d = !!n.leading, a = (l = "maxWait" in n) ? T(H(n.maxWait) || 0, t) : a, f = "trailing" in n ? !!n.trailing : f), g.cancel = function() {
            void 0 !== c && clearTimeout(c), u = 0, o = s = i = c = void 0;
        }, g.flush = function() {
            return void 0 === c ? r : v(S());
        }, g;
    }, W = function() {};
    function P(e) {
        e && e.forEach(function(e) {
            var t = Array.prototype.slice.call(e.addedNodes), n = Array.prototype.slice.call(e.removedNodes);
            if (function e(t) {
                var n = void 0, o = void 0;
                for(n = 0; n < t.length; n += 1){
                    if ((o = t[n]).dataset && o.dataset.aos) return !0;
                    if (o.children && e(o.children)) return !0;
                }
                return !1;
            }(t.concat(n))) return W();
        });
    }
    function Y() {
        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    }
    var _ = {
        isSupported: function() {
            return !!Y();
        },
        ready: function(e, t) {
            var n = window.document, o = new (Y())(P);
            W = t, o.observe(n.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0
            });
        }
    }, B = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }, F = function() {
        function e(e, t) {
            for(var n = 0; n < t.length; n++){
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    }(), I = Object.assign || function(e) {
        for(var t = 1; t < arguments.length; t++){
            var n = arguments[t];
            for(var o in n)Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
    }, K = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, G = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, J = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, Q = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
    function R() {
        return navigator.userAgent || navigator.vendor || window.opera || "";
    }
    var U = new (function() {
        function e() {
            B(this, e);
        }
        return F(e, [
            {
                key: "phone",
                value: function() {
                    var e = R();
                    return !(!K.test(e) && !G.test(e.substr(0, 4)));
                }
            },
            {
                key: "mobile",
                value: function() {
                    var e = R();
                    return !(!J.test(e) && !Q.test(e.substr(0, 4)));
                }
            },
            {
                key: "tablet",
                value: function() {
                    return this.mobile() && !this.phone();
                }
            },
            {
                key: "ie11",
                value: function() {
                    return "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style;
                }
            }
        ]), e;
    }()), V = function(e, t) {
        var n = void 0;
        return U.ie11() ? (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, {
            detail: t
        }) : n = new CustomEvent(e, {
            detail: t
        }), document.dispatchEvent(n);
    }, X = function(e) {
        return e.forEach(function(e, t) {
            return function(e, t) {
                var n = e.options, o = e.position, i = e.node, a = (e.data, function() {
                    e.animated && (function(e, t) {
                        t && t.forEach(function(t) {
                            return e.classList.remove(t);
                        });
                    }(i, n.animatedClassNames), V("aos:out", i), e.options.id && V("aos:in:" + e.options.id, i), e.animated = !1);
                });
                n.mirror && t >= o.out && !n.once ? a() : t >= o.in ? e.animated || (function(e, t) {
                    t && t.forEach(function(t) {
                        return e.classList.add(t);
                    });
                }(i, n.animatedClassNames), V("aos:in", i), e.options.id && V("aos:in:" + e.options.id, i), e.animated = !0) : e.animated && !n.once && a();
            }(e, window.pageYOffset);
        });
    }, Z = function(e) {
        for(var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);)t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
        return {
            top: n,
            left: t
        };
    }, ee = function(e, t, n) {
        var o = e.getAttribute("data-aos-" + t);
        if (void 0 !== o) {
            if ("true" === o) return !0;
            if ("false" === o) return !1;
        }
        return o || n;
    }, te = function(e, t) {
        return e.forEach(function(e, n) {
            var o = ee(e.node, "mirror", t.mirror), i = ee(e.node, "once", t.once), a = ee(e.node, "id"), r = t.useClassNames && e.node.getAttribute("data-aos"), c = [
                t.animatedClassName
            ].concat(r ? r.split(" ") : []).filter(function(e) {
                return "string" == typeof e;
            });
            t.initClassName && e.node.classList.add(t.initClassName), e.position = {
                in: function(e, t, n) {
                    var o = window.innerHeight, i = ee(e, "anchor"), a = ee(e, "anchor-placement"), r = Number(ee(e, "offset", a ? 0 : t)), c = a || n, s = e;
                    i && document.querySelectorAll(i) && (s = document.querySelectorAll(i)[0]);
                    var u = Z(s).top - o;
                    switch(c){
                        case "top-bottom":
                            break;
                        case "center-bottom":
                            u += s.offsetHeight / 2;
                            break;
                        case "bottom-bottom":
                            u += s.offsetHeight;
                            break;
                        case "top-center":
                            u += o / 2;
                            break;
                        case "center-center":
                            u += o / 2 + s.offsetHeight / 2;
                            break;
                        case "bottom-center":
                            u += o / 2 + s.offsetHeight;
                            break;
                        case "top-top":
                            u += o;
                            break;
                        case "bottom-top":
                            u += o + s.offsetHeight;
                            break;
                        case "center-top":
                            u += o + s.offsetHeight / 2;
                    }
                    return u + r;
                }(e.node, t.offset, t.anchorPlacement),
                out: o && function(e, t) {
                    window.innerHeight;
                    var n = ee(e, "anchor"), o = ee(e, "offset", t), i = e;
                    return n && document.querySelectorAll(n) && (i = document.querySelectorAll(n)[0]), Z(i).top + i.offsetHeight - o;
                }(e.node, t.offset)
            }, e.options = {
                once: i,
                mirror: o,
                animatedClassNames: c,
                id: a
            };
        }), e;
    }, ne = function() {
        var e = document.querySelectorAll("[data-aos]");
        return Array.prototype.map.call(e, function(e) {
            return {
                node: e
            };
        });
    }, oe = [], ie = !1, ae = {
        offset: 120,
        delay: 0,
        easing: "ease",
        duration: 400,
        disable: !1,
        once: !1,
        mirror: !1,
        anchorPlacement: "top-bottom",
        startEvent: "DOMContentLoaded",
        animatedClassName: "aos-animate",
        initClassName: "aos-init",
        useClassNames: !1,
        disableMutationObserver: !1,
        throttleDelay: 99,
        debounceDelay: 50
    }, re = function() {
        return document.all && !window.atob;
    }, ce = function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (ie = !0), ie && (oe = te(oe, ae), X(oe), window.addEventListener("scroll", y(function() {
            X(oe, ae.once);
        }, ae.throttleDelay)));
    }, se = function() {
        if (oe = ne(), de(ae.disable) || re()) return ue();
        ce();
    }, ue = function() {
        oe.forEach(function(e, t) {
            e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay"), ae.initClassName && e.node.classList.remove(ae.initClassName), ae.animatedClassName && e.node.classList.remove(ae.animatedClassName);
        });
    }, de = function(e) {
        return !0 === e || "mobile" === e && U.mobile() || "phone" === e && U.phone() || "tablet" === e && U.tablet() || "function" == typeof e && !0 === e();
    };
    return {
        init: function(e) {
            return ae = I(ae, e), oe = ne(), ae.disableMutationObserver || _.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), ae.disableMutationObserver = !0), ae.disableMutationObserver || _.ready("[data-aos]", se), de(ae.disable) || re() ? ue() : (document.querySelector("body").setAttribute("data-aos-easing", ae.easing), document.querySelector("body").setAttribute("data-aos-duration", ae.duration), document.querySelector("body").setAttribute("data-aos-delay", ae.delay), -1 === [
                "DOMContentLoaded",
                "load"
            ].indexOf(ae.startEvent) ? document.addEventListener(ae.startEvent, function() {
                ce(!0);
            }) : window.addEventListener("load", function() {
                ce(!0);
            }), "DOMContentLoaded" === ae.startEvent && [
                "complete",
                "interactive"
            ].indexOf(document.readyState) > -1 && ce(!0), window.addEventListener("resize", $(ce, ae.debounceDelay, !0)), window.addEventListener("orientationchange", $(ce, ae.debounceDelay, !0)), oe);
        },
        refresh: ce,
        refreshHard: se
    };
});

},{}],"iYkXi":[function() {},{}],"aLznl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InputMask", ()=>(0, _inputJsDefault.default));
parcelHelpers.export(exports, "HTMLContenteditableMaskElement", ()=>(0, _htmlContenteditableMaskElementJsDefault.default));
parcelHelpers.export(exports, "HTMLInputMaskElement", ()=>(0, _htmlInputMaskElementJsDefault.default));
parcelHelpers.export(exports, "HTMLMaskElement", ()=>(0, _htmlMaskElementJsDefault.default));
parcelHelpers.export(exports, "MaskElement", ()=>(0, _maskElementJsDefault.default));
parcelHelpers.export(exports, "ChangeDetails", ()=>(0, _changeDetailsJsDefault.default));
parcelHelpers.export(exports, "DIRECTION", ()=>(0, _utilsJs.DIRECTION));
parcelHelpers.export(exports, "forceDirection", ()=>(0, _utilsJs.forceDirection));
parcelHelpers.export(exports, "Masked", ()=>(0, _baseJsDefault.default));
parcelHelpers.export(exports, "MaskedDate", ()=>(0, _dateJsDefault.default));
parcelHelpers.export(exports, "MaskedDynamic", ()=>(0, _dynamicJsDefault.default));
parcelHelpers.export(exports, "MaskedEnum", ()=>(0, _enumJsDefault.default));
parcelHelpers.export(exports, "createMask", ()=>(0, _factoryJsDefault.default));
parcelHelpers.export(exports, "normalizeOpts", ()=>(0, _factoryJs.normalizeOpts));
parcelHelpers.export(exports, "MaskedFunction", ()=>(0, _functionJsDefault.default));
parcelHelpers.export(exports, "MaskedNumber", ()=>(0, _numberJsDefault.default));
parcelHelpers.export(exports, "MaskedPattern", ()=>(0, _patternJsDefault.default));
parcelHelpers.export(exports, "ChunksTailDetails", ()=>(0, _chunkTailDetailsJsDefault.default));
parcelHelpers.export(exports, "PatternFixedDefinition", ()=>(0, _fixedDefinitionJsDefault.default));
parcelHelpers.export(exports, "PatternInputDefinition", ()=>(0, _inputDefinitionJsDefault.default));
parcelHelpers.export(exports, "PIPE_TYPE", ()=>(0, _pipeJs.PIPE_TYPE));
parcelHelpers.export(exports, "createPipe", ()=>(0, _pipeJs.createPipe));
parcelHelpers.export(exports, "pipe", ()=>(0, _pipeJs.pipe));
parcelHelpers.export(exports, "MaskedRange", ()=>(0, _rangeJsDefault.default));
parcelHelpers.export(exports, "MaskedRegExp", ()=>(0, _regexpJsDefault.default));
parcelHelpers.export(exports, "RepeatBlock", ()=>(0, _repeatJsDefault.default));
parcelHelpers.export(exports, "default", ()=>(0, _holderJsDefault.default));
var _inputJs = require("./controls/input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _holderJs = require("./core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _htmlContenteditableMaskElementJs = require("./controls/html-contenteditable-mask-element.js");
var _htmlContenteditableMaskElementJsDefault = parcelHelpers.interopDefault(_htmlContenteditableMaskElementJs);
var _htmlInputMaskElementJs = require("./controls/html-input-mask-element.js");
var _htmlInputMaskElementJsDefault = parcelHelpers.interopDefault(_htmlInputMaskElementJs);
var _htmlMaskElementJs = require("./controls/html-mask-element.js");
var _htmlMaskElementJsDefault = parcelHelpers.interopDefault(_htmlMaskElementJs);
var _maskElementJs = require("./controls/mask-element.js");
var _maskElementJsDefault = parcelHelpers.interopDefault(_maskElementJs);
var _changeDetailsJs = require("./core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _utilsJs = require("./core/utils.js");
var _baseJs = require("./masked/base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _dateJs = require("./masked/date.js");
var _dateJsDefault = parcelHelpers.interopDefault(_dateJs);
var _dynamicJs = require("./masked/dynamic.js");
var _dynamicJsDefault = parcelHelpers.interopDefault(_dynamicJs);
var _enumJs = require("./masked/enum.js");
var _enumJsDefault = parcelHelpers.interopDefault(_enumJs);
var _factoryJs = require("./masked/factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _functionJs = require("./masked/function.js");
var _functionJsDefault = parcelHelpers.interopDefault(_functionJs);
var _numberJs = require("./masked/number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var _patternJs = require("./masked/pattern.js");
var _patternJsDefault = parcelHelpers.interopDefault(_patternJs);
var _chunkTailDetailsJs = require("./masked/pattern/chunk-tail-details.js");
var _chunkTailDetailsJsDefault = parcelHelpers.interopDefault(_chunkTailDetailsJs);
var _fixedDefinitionJs = require("./masked/pattern/fixed-definition.js");
var _fixedDefinitionJsDefault = parcelHelpers.interopDefault(_fixedDefinitionJs);
var _inputDefinitionJs = require("./masked/pattern/input-definition.js");
var _inputDefinitionJsDefault = parcelHelpers.interopDefault(_inputDefinitionJs);
var _pipeJs = require("./masked/pipe.js");
var _rangeJs = require("./masked/range.js");
var _rangeJsDefault = parcelHelpers.interopDefault(_rangeJs);
var _regexpJs = require("./masked/regexp.js");
var _regexpJsDefault = parcelHelpers.interopDefault(_regexpJs);
var _repeatJs = require("./masked/repeat.js");
var _repeatJsDefault = parcelHelpers.interopDefault(_repeatJs);
var _actionDetailsJs = require("./core/action-details.js");
var _inputHistoryJs = require("./controls/input-history.js");
var _continuousTailDetailsJs = require("./core/continuous-tail-details.js");
var _cursorJs = require("./masked/pattern/cursor.js");
try {
    globalThis.IMask = (0, _holderJsDefault.default);
} catch  {}

},{"./controls/input.js":"bZfiB","./core/holder.js":"fNs7n","./controls/html-contenteditable-mask-element.js":"l1S15","./controls/html-input-mask-element.js":"2feR7","./controls/html-mask-element.js":"exheL","./controls/mask-element.js":"6dhyp","./core/change-details.js":"cDdFe","./core/utils.js":"hh2Rx","./masked/base.js":"i9dza","./masked/date.js":"1V3CB","./masked/dynamic.js":"kPiRi","./masked/enum.js":"dmeoh","./masked/factory.js":"4c29b","./masked/function.js":"64ffz","./masked/number.js":"gHi3R","./masked/pattern.js":"edg1G","./masked/pattern/chunk-tail-details.js":"a8Q24","./masked/pattern/fixed-definition.js":"fnLC7","./masked/pattern/input-definition.js":"lGvsS","./masked/pipe.js":"knGz0","./masked/range.js":"iHvQL","./masked/regexp.js":"7B25G","./masked/repeat.js":"ccFx2","./core/action-details.js":"cJg34","./controls/input-history.js":"fZNGO","./core/continuous-tail-details.js":"5MbDY","./masked/pattern/cursor.js":"1K9Ff","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bZfiB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>InputMask);
var _utilsJs = require("../core/utils.js");
var _actionDetailsJs = require("../core/action-details.js");
var _actionDetailsJsDefault = parcelHelpers.interopDefault(_actionDetailsJs);
var _factoryJs = require("../masked/factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _maskElementJs = require("./mask-element.js");
var _maskElementJsDefault = parcelHelpers.interopDefault(_maskElementJs);
var _htmlInputMaskElementJs = require("./html-input-mask-element.js");
var _htmlInputMaskElementJsDefault = parcelHelpers.interopDefault(_htmlInputMaskElementJs);
var _htmlContenteditableMaskElementJs = require("./html-contenteditable-mask-element.js");
var _htmlContenteditableMaskElementJsDefault = parcelHelpers.interopDefault(_htmlContenteditableMaskElementJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _inputHistoryJs = require("./input-history.js");
var _inputHistoryJsDefault = parcelHelpers.interopDefault(_inputHistoryJs);
var _htmlMaskElementJs = require("./html-mask-element.js");
/** Listens to element events and controls changes between element and {@link Masked} */ class InputMask {
    /**
    View element
  */ /** Internal {@link Masked} model */ constructor(el, opts){
        this.el = el instanceof (0, _maskElementJsDefault.default) ? el : el.isContentEditable && el.tagName !== "INPUT" && el.tagName !== "TEXTAREA" ? new (0, _htmlContenteditableMaskElementJsDefault.default)(el) : new (0, _htmlInputMaskElementJsDefault.default)(el);
        this.masked = (0, _factoryJsDefault.default)(opts);
        this._listeners = {};
        this._value = "";
        this._unmaskedValue = "";
        this._rawInputValue = "";
        this.history = new (0, _inputHistoryJsDefault.default)();
        this._saveSelection = this._saveSelection.bind(this);
        this._onInput = this._onInput.bind(this);
        this._onChange = this._onChange.bind(this);
        this._onDrop = this._onDrop.bind(this);
        this._onFocus = this._onFocus.bind(this);
        this._onClick = this._onClick.bind(this);
        this._onUndo = this._onUndo.bind(this);
        this._onRedo = this._onRedo.bind(this);
        this.alignCursor = this.alignCursor.bind(this);
        this.alignCursorFriendly = this.alignCursorFriendly.bind(this);
        this._bindEvents();
        // refresh
        this.updateValue();
        this._onChange();
    }
    maskEquals(mask) {
        var _this$masked;
        return mask == null || ((_this$masked = this.masked) == null ? void 0 : _this$masked.maskEquals(mask));
    }
    /** Masked */ get mask() {
        return this.masked.mask;
    }
    set mask(mask) {
        if (this.maskEquals(mask)) return;
        if (!(mask instanceof (0, _holderJsDefault.default).Masked) && this.masked.constructor === (0, _factoryJs.maskedClass)(mask)) {
            // TODO "any" no idea
            this.masked.updateOptions({
                mask
            });
            return;
        }
        const masked = mask instanceof (0, _holderJsDefault.default).Masked ? mask : (0, _factoryJsDefault.default)({
            mask
        });
        masked.unmaskedValue = this.masked.unmaskedValue;
        this.masked = masked;
    }
    /** Raw value */ get value() {
        return this._value;
    }
    set value(str) {
        if (this.value === str) return;
        this.masked.value = str;
        this.updateControl("auto");
    }
    /** Unmasked value */ get unmaskedValue() {
        return this._unmaskedValue;
    }
    set unmaskedValue(str) {
        if (this.unmaskedValue === str) return;
        this.masked.unmaskedValue = str;
        this.updateControl("auto");
    }
    /** Raw input value */ get rawInputValue() {
        return this._rawInputValue;
    }
    set rawInputValue(str) {
        if (this.rawInputValue === str) return;
        this.masked.rawInputValue = str;
        this.updateControl();
        this.alignCursor();
    }
    /** Typed unmasked value */ get typedValue() {
        return this.masked.typedValue;
    }
    set typedValue(val) {
        if (this.masked.typedValueEquals(val)) return;
        this.masked.typedValue = val;
        this.updateControl("auto");
    }
    /** Display value */ get displayValue() {
        return this.masked.displayValue;
    }
    /** Starts listening to element events */ _bindEvents() {
        this.el.bindEvents({
            selectionChange: this._saveSelection,
            input: this._onInput,
            drop: this._onDrop,
            click: this._onClick,
            focus: this._onFocus,
            commit: this._onChange,
            undo: this._onUndo,
            redo: this._onRedo
        });
    }
    /** Stops listening to element events */ _unbindEvents() {
        if (this.el) this.el.unbindEvents();
    }
    /** Fires custom event */ _fireEvent(ev, e) {
        const listeners = this._listeners[ev];
        if (!listeners) return;
        listeners.forEach((l)=>l(e));
    }
    /** Current selection start */ get selectionStart() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
    }
    /** Current cursor position */ get cursorPos() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
    }
    set cursorPos(pos) {
        if (!this.el || !this.el.isActive) return;
        this.el.select(pos, pos);
        this._saveSelection();
    }
    /** Stores current selection */ _saveSelection() {
        if (this.displayValue !== this.el.value) console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."); // eslint-disable-line no-console
        this._selection = {
            start: this.selectionStart,
            end: this.cursorPos
        };
    }
    /** Syncronizes model value from view */ updateValue() {
        this.masked.value = this.el.value;
        this._value = this.masked.value;
        this._unmaskedValue = this.masked.unmaskedValue;
        this._rawInputValue = this.masked.rawInputValue;
    }
    /** Syncronizes view from model value, fires change events */ updateControl(cursorPos) {
        const newUnmaskedValue = this.masked.unmaskedValue;
        const newValue = this.masked.value;
        const newRawInputValue = this.masked.rawInputValue;
        const newDisplayValue = this.displayValue;
        const isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue || this._rawInputValue !== newRawInputValue;
        this._unmaskedValue = newUnmaskedValue;
        this._value = newValue;
        this._rawInputValue = newRawInputValue;
        if (this.el.value !== newDisplayValue) this.el.value = newDisplayValue;
        if (cursorPos === "auto") this.alignCursor();
        else if (cursorPos != null) this.cursorPos = cursorPos;
        if (isChanged) this._fireChangeEvents();
        if (!this._historyChanging && (isChanged || this.history.isEmpty)) this.history.push({
            unmaskedValue: newUnmaskedValue,
            selection: {
                start: this.selectionStart,
                end: this.cursorPos
            }
        });
    }
    /** Updates options with deep equal check, recreates {@link Masked} model if mask type changes */ updateOptions(opts) {
        const { mask, ...restOpts } = opts; // TODO types, yes, mask is optional
        const updateMask = !this.maskEquals(mask);
        const updateOpts = this.masked.optionsIsChanged(restOpts);
        if (updateMask) this.mask = mask;
        if (updateOpts) this.masked.updateOptions(restOpts); // TODO
        if (updateMask || updateOpts) this.updateControl();
    }
    /** Updates cursor */ updateCursor(cursorPos) {
        if (cursorPos == null) return;
        this.cursorPos = cursorPos;
        // also queue change cursor for mobile browsers
        this._delayUpdateCursor(cursorPos);
    }
    /** Delays cursor update to support mobile browsers */ _delayUpdateCursor(cursorPos) {
        this._abortUpdateCursor();
        this._changingCursorPos = cursorPos;
        this._cursorChanging = setTimeout(()=>{
            if (!this.el) return; // if was destroyed
            this.cursorPos = this._changingCursorPos;
            this._abortUpdateCursor();
        }, 10);
    }
    /** Fires custom events */ _fireChangeEvents() {
        this._fireEvent("accept", this._inputEvent);
        if (this.masked.isComplete) this._fireEvent("complete", this._inputEvent);
    }
    /** Aborts delayed cursor update */ _abortUpdateCursor() {
        if (this._cursorChanging) {
            clearTimeout(this._cursorChanging);
            delete this._cursorChanging;
        }
    }
    /** Aligns cursor to nearest available position */ alignCursor() {
        this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, (0, _utilsJs.DIRECTION).LEFT));
    }
    /** Aligns cursor only if selection is empty */ alignCursorFriendly() {
        if (this.selectionStart !== this.cursorPos) return; // skip if range is selected
        this.alignCursor();
    }
    /** Adds listener on custom event */ on(ev, handler) {
        if (!this._listeners[ev]) this._listeners[ev] = [];
        this._listeners[ev].push(handler);
        return this;
    }
    /** Removes custom event listener */ off(ev, handler) {
        if (!this._listeners[ev]) return this;
        if (!handler) {
            delete this._listeners[ev];
            return this;
        }
        const hIndex = this._listeners[ev].indexOf(handler);
        if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
        return this;
    }
    /** Handles view input event */ _onInput(e) {
        this._inputEvent = e;
        this._abortUpdateCursor();
        const details = new (0, _actionDetailsJsDefault.default)({
            // new state
            value: this.el.value,
            cursorPos: this.cursorPos,
            // old state
            oldValue: this.displayValue,
            oldSelection: this._selection
        });
        const oldRawValue = this.masked.rawInputValue;
        const offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection, {
            input: true,
            raw: true
        }).offset;
        // force align in remove direction only if no input chars were removed
        // otherwise we still need to align with NONE (to get out from fixed symbols for instance)
        const removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : (0, _utilsJs.DIRECTION).NONE;
        let cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
        if (removeDirection !== (0, _utilsJs.DIRECTION).NONE) cursorPos = this.masked.nearestInputPos(cursorPos, (0, _utilsJs.DIRECTION).NONE);
        this.updateControl(cursorPos);
        delete this._inputEvent;
    }
    /** Handles view change event and commits model value */ _onChange() {
        if (this.displayValue !== this.el.value) this.updateValue();
        this.masked.doCommit();
        this.updateControl();
        this._saveSelection();
    }
    /** Handles view drop event, prevents by default */ _onDrop(ev) {
        ev.preventDefault();
        ev.stopPropagation();
    }
    /** Restore last selection on focus */ _onFocus(ev) {
        this.alignCursorFriendly();
    }
    /** Restore last selection on focus */ _onClick(ev) {
        this.alignCursorFriendly();
    }
    _onUndo() {
        this._applyHistoryState(this.history.undo());
    }
    _onRedo() {
        this._applyHistoryState(this.history.redo());
    }
    _applyHistoryState(state) {
        if (!state) return;
        this._historyChanging = true;
        this.unmaskedValue = state.unmaskedValue;
        this.el.select(state.selection.start, state.selection.end);
        this._saveSelection();
        this._historyChanging = false;
    }
    /** Unbind view events and removes element reference */ destroy() {
        this._unbindEvents();
        this._listeners.length = 0;
        delete this.el;
    }
}
(0, _holderJsDefault.default).InputMask = InputMask;

},{"../core/utils.js":"hh2Rx","../core/action-details.js":"cJg34","../masked/factory.js":"4c29b","./mask-element.js":"6dhyp","./html-input-mask-element.js":"2feR7","./html-contenteditable-mask-element.js":"l1S15","../core/holder.js":"fNs7n","./input-history.js":"fZNGO","./html-mask-element.js":"exheL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hh2Rx":[function(require,module,exports) {
/** Checks if value is string */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Selection range */ parcelHelpers.export(exports, "DIRECTION", ()=>DIRECTION);
parcelHelpers.export(exports, "escapeRegExp", ()=>escapeRegExp);
parcelHelpers.export(exports, "forceDirection", ()=>forceDirection);
parcelHelpers.export(exports, "isObject", ()=>isObject);
parcelHelpers.export(exports, "isString", ()=>isString);
parcelHelpers.export(exports, "objectIncludes", ()=>objectIncludes);
parcelHelpers.export(exports, "pick", ()=>pick);
function isString(str) {
    return typeof str === "string" || str instanceof String;
}
/** Checks if value is object */ function isObject(obj) {
    var _obj$constructor;
    return typeof obj === "object" && obj != null && (obj == null || (_obj$constructor = obj.constructor) == null ? void 0 : _obj$constructor.name) === "Object";
}
function pick(obj, keys) {
    if (Array.isArray(keys)) return pick(obj, (_, k)=>keys.includes(k));
    return Object.entries(obj).reduce((acc, _ref)=>{
        let [k, v] = _ref;
        if (keys(v, k)) acc[k] = v;
        return acc;
    }, {});
}
/** Direction */ const DIRECTION = {
    NONE: "NONE",
    LEFT: "LEFT",
    FORCE_LEFT: "FORCE_LEFT",
    RIGHT: "RIGHT",
    FORCE_RIGHT: "FORCE_RIGHT"
};
/** Direction */ function forceDirection(direction) {
    switch(direction){
        case DIRECTION.LEFT:
            return DIRECTION.FORCE_LEFT;
        case DIRECTION.RIGHT:
            return DIRECTION.FORCE_RIGHT;
        default:
            return direction;
    }
}
/** Escapes regular expression control chars */ function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
// cloned from https://github.com/epoberezkin/fast-deep-equal with small changes
function objectIncludes(b, a) {
    if (a === b) return true;
    const arrA = Array.isArray(a), arrB = Array.isArray(b);
    let i;
    if (arrA && arrB) {
        if (a.length != b.length) return false;
        for(i = 0; i < a.length; i++)if (!objectIncludes(a[i], b[i])) return false;
        return true;
    }
    if (arrA != arrB) return false;
    if (a && b && typeof a === "object" && typeof b === "object") {
        const dateA = a instanceof Date, dateB = b instanceof Date;
        if (dateA && dateB) return a.getTime() == b.getTime();
        if (dateA != dateB) return false;
        const regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
        if (regexpA && regexpB) return a.toString() == b.toString();
        if (regexpA != regexpB) return false;
        const keys = Object.keys(a);
        // if (keys.length !== Object.keys(b).length) return false;
        for(i = 0; i < keys.length; i++)if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for(i = 0; i < keys.length; i++)if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
        return true;
    } else if (a && b && typeof a === "function" && typeof b === "function") return a.toString() === b.toString();
    return false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cJg34":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ActionDetails);
var _utilsJs = require("./utils.js");
/** Provides details of changing input */ class ActionDetails {
    /** Current input value */ /** Current cursor position */ /** Old input value */ /** Old selection */ constructor(opts){
        Object.assign(this, opts);
        // double check if left part was changed (autofilling, other non-standard input triggers)
        while(this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos))--this.oldSelection.start;
        if (this.insertedCount) {
            // double check right part
            while(this.value.slice(this.cursorPos) !== this.oldValue.slice(this.oldSelection.end))if (this.value.length - this.cursorPos < this.oldValue.length - this.oldSelection.end) ++this.oldSelection.end;
            else ++this.cursorPos;
        }
    }
    /** Start changing position */ get startChangePos() {
        return Math.min(this.cursorPos, this.oldSelection.start);
    }
    /** Inserted symbols count */ get insertedCount() {
        return this.cursorPos - this.startChangePos;
    }
    /** Inserted symbols */ get inserted() {
        return this.value.substr(this.startChangePos, this.insertedCount);
    }
    /** Removed symbols count */ get removedCount() {
        // Math.max for opposite operation
        return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
        this.oldValue.length - this.value.length, 0);
    }
    /** Removed symbols */ get removed() {
        return this.oldValue.substr(this.startChangePos, this.removedCount);
    }
    /** Unchanged head symbols */ get head() {
        return this.value.substring(0, this.startChangePos);
    }
    /** Unchanged tail symbols */ get tail() {
        return this.value.substring(this.startChangePos + this.insertedCount);
    }
    /** Remove direction */ get removeDirection() {
        if (!this.removedCount || this.insertedCount) return (0, _utilsJs.DIRECTION).NONE;
        // align right if delete at right
        return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && // if not range removed (event with backspace)
        this.oldSelection.end === this.oldSelection.start ? (0, _utilsJs.DIRECTION).RIGHT : (0, _utilsJs.DIRECTION).LEFT;
    }
}

},{"./utils.js":"hh2Rx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4c29b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>createMask);
parcelHelpers.export(exports, "maskedClass", ()=>maskedClass);
parcelHelpers.export(exports, "normalizeOpts", ()=>normalizeOpts);
var _utilsJs = require("../core/utils.js");
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
// TODO can't use overloads here because of https://github.com/microsoft/TypeScript/issues/50754
// export function maskedClass(mask: string): typeof MaskedPattern;
// export function maskedClass(mask: DateConstructor): typeof MaskedDate;
// export function maskedClass(mask: NumberConstructor): typeof MaskedNumber;
// export function maskedClass(mask: Array<any> | ArrayConstructor): typeof MaskedDynamic;
// export function maskedClass(mask: MaskedDate): typeof MaskedDate;
// export function maskedClass(mask: MaskedNumber): typeof MaskedNumber;
// export function maskedClass(mask: MaskedEnum): typeof MaskedEnum;
// export function maskedClass(mask: MaskedRange): typeof MaskedRange;
// export function maskedClass(mask: MaskedRegExp): typeof MaskedRegExp;
// export function maskedClass(mask: MaskedFunction): typeof MaskedFunction;
// export function maskedClass(mask: MaskedPattern): typeof MaskedPattern;
// export function maskedClass(mask: MaskedDynamic): typeof MaskedDynamic;
// export function maskedClass(mask: Masked): typeof Masked;
// export function maskedClass(mask: typeof Masked): typeof Masked;
// export function maskedClass(mask: typeof MaskedDate): typeof MaskedDate;
// export function maskedClass(mask: typeof MaskedNumber): typeof MaskedNumber;
// export function maskedClass(mask: typeof MaskedEnum): typeof MaskedEnum;
// export function maskedClass(mask: typeof MaskedRange): typeof MaskedRange;
// export function maskedClass(mask: typeof MaskedRegExp): typeof MaskedRegExp;
// export function maskedClass(mask: typeof MaskedFunction): typeof MaskedFunction;
// export function maskedClass(mask: typeof MaskedPattern): typeof MaskedPattern;
// export function maskedClass(mask: typeof MaskedDynamic): typeof MaskedDynamic;
// export function maskedClass<Mask extends typeof Masked> (mask: Mask): Mask;
// export function maskedClass(mask: RegExp): typeof MaskedRegExp;
// export function maskedClass(mask: (value: string, ...args: any[]) => boolean): typeof MaskedFunction;
/** Get Masked class by mask type */ function maskedClass(mask) /* TODO */ {
    if (mask == null) throw new Error("mask property should be defined");
    if (mask instanceof RegExp) return (0, _holderJsDefault.default).MaskedRegExp;
    if ((0, _utilsJs.isString)(mask)) return (0, _holderJsDefault.default).MaskedPattern;
    if (mask === Date) return (0, _holderJsDefault.default).MaskedDate;
    if (mask === Number) return (0, _holderJsDefault.default).MaskedNumber;
    if (Array.isArray(mask) || mask === Array) return (0, _holderJsDefault.default).MaskedDynamic;
    if ((0, _holderJsDefault.default).Masked && mask.prototype instanceof (0, _holderJsDefault.default).Masked) return mask;
    if ((0, _holderJsDefault.default).Masked && mask instanceof (0, _holderJsDefault.default).Masked) return mask.constructor;
    if (mask instanceof Function) return (0, _holderJsDefault.default).MaskedFunction;
    console.warn("Mask not found for mask", mask); // eslint-disable-line no-console
    return (0, _holderJsDefault.default).Masked;
}
function normalizeOpts(opts) {
    if (!opts) throw new Error("Options in not defined");
    if ((0, _holderJsDefault.default).Masked) {
        if (opts.prototype instanceof (0, _holderJsDefault.default).Masked) return {
            mask: opts
        };
        /*
      handle cases like:
      1) opts = Masked
      2) opts = { mask: Masked, ...instanceOpts }
    */ const { mask, ...instanceOpts } = opts instanceof (0, _holderJsDefault.default).Masked ? {
            mask: opts
        } : (0, _utilsJs.isObject)(opts) && opts.mask instanceof (0, _holderJsDefault.default).Masked ? opts : {};
        if (mask) {
            const _mask = mask.mask;
            return {
                ...(0, _utilsJs.pick)(mask, (_, k)=>!k.startsWith("_")),
                mask: mask.constructor,
                _mask,
                ...instanceOpts
            };
        }
    }
    if (!(0, _utilsJs.isObject)(opts)) return {
        mask: opts
    };
    return {
        ...opts
    };
}
// TODO can't use overloads here because of https://github.com/microsoft/TypeScript/issues/50754
// From masked
// export default function createMask<Opts extends Masked, ReturnMasked=Opts> (opts: Opts): ReturnMasked;
// // From masked class
// export default function createMask<Opts extends MaskedOptions<typeof Masked>, ReturnMasked extends Masked=InstanceType<Opts['mask']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedDate>, ReturnMasked extends MaskedDate=MaskedDate<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedNumber>, ReturnMasked extends MaskedNumber=MaskedNumber<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedEnum>, ReturnMasked extends MaskedEnum=MaskedEnum<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedRange>, ReturnMasked extends MaskedRange=MaskedRange<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedRegExp>, ReturnMasked extends MaskedRegExp=MaskedRegExp<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedFunction>, ReturnMasked extends MaskedFunction=MaskedFunction<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedPattern>, ReturnMasked extends MaskedPattern=MaskedPattern<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedDynamic>, ReturnMasked extends MaskedDynamic=MaskedDynamic<Opts['parent']>> (opts: Opts): ReturnMasked;
// // From mask opts
// export default function createMask<Opts extends MaskedOptions<Masked>, ReturnMasked=Opts extends MaskedOptions<infer M> ? M : never> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedNumberOptions, ReturnMasked extends MaskedNumber=MaskedNumber<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedDateFactoryOptions, ReturnMasked extends MaskedDate=MaskedDate<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedEnumOptions, ReturnMasked extends MaskedEnum=MaskedEnum<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedRangeOptions, ReturnMasked extends MaskedRange=MaskedRange<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedPatternOptions, ReturnMasked extends MaskedPattern=MaskedPattern<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedDynamicOptions, ReturnMasked extends MaskedDynamic=MaskedDynamic<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<RegExp>, ReturnMasked extends MaskedRegExp=MaskedRegExp<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<Function>, ReturnMasked extends MaskedFunction=MaskedFunction<Opts['parent']>> (opts: Opts): ReturnMasked;
/** Creates new {@link Masked} depending on mask type */ function createMask(opts) {
    if ((0, _holderJsDefault.default).Masked && opts instanceof (0, _holderJsDefault.default).Masked) return opts;
    const nOpts = normalizeOpts(opts);
    const MaskedClass = maskedClass(nOpts.mask);
    if (!MaskedClass) throw new Error("Masked class is not found for provided mask " + nOpts.mask + ", appropriate module needs to be imported manually before creating mask.");
    if (nOpts.mask === MaskedClass) delete nOpts.mask;
    if (nOpts._mask) {
        nOpts.mask = nOpts._mask;
        delete nOpts._mask;
    }
    return new MaskedClass(nOpts);
}
(0, _holderJsDefault.default).createMask = createMask;

},{"../core/utils.js":"hh2Rx","../core/holder.js":"fNs7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fNs7n":[function(require,module,exports) {
/** Applies mask on element */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>IMask);
function IMask(el, opts) {
    // currently available only for input-like elements
    return new IMask.InputMask(el, opts);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6dhyp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskElement);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
/**  Generic element API to use with mask */ class MaskElement {
    /** */ /** */ /** */ /** Safely returns selection start */ get selectionStart() {
        let start;
        try {
            start = this._unsafeSelectionStart;
        } catch  {}
        return start != null ? start : this.value.length;
    }
    /** Safely returns selection end */ get selectionEnd() {
        let end;
        try {
            end = this._unsafeSelectionEnd;
        } catch  {}
        return end != null ? end : this.value.length;
    }
    /** Safely sets element selection */ select(start, end) {
        if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;
        try {
            this._unsafeSelect(start, end);
        } catch  {}
    }
    /** */ get isActive() {
        return false;
    }
}
(0, _holderJsDefault.default).MaskElement = MaskElement;

},{"../core/holder.js":"fNs7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2feR7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>HTMLInputMaskElement);
var _htmlMaskElementJs = require("./html-mask-element.js");
var _htmlMaskElementJsDefault = parcelHelpers.interopDefault(_htmlMaskElementJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _maskElementJs = require("./mask-element.js");
/** Bridge between InputElement and {@link Masked} */ class HTMLInputMaskElement extends (0, _htmlMaskElementJsDefault.default) {
    /** InputElement to use mask on */ constructor(input){
        super(input);
        this.input = input;
    }
    /** Returns InputElement selection start */ get _unsafeSelectionStart() {
        return this.input.selectionStart != null ? this.input.selectionStart : this.value.length;
    }
    /** Returns InputElement selection end */ get _unsafeSelectionEnd() {
        return this.input.selectionEnd;
    }
    /** Sets InputElement selection */ _unsafeSelect(start, end) {
        this.input.setSelectionRange(start, end);
    }
    get value() {
        return this.input.value;
    }
    set value(value) {
        this.input.value = value;
    }
}
(0, _holderJsDefault.default).HTMLMaskElement = (0, _htmlMaskElementJsDefault.default);

},{"./html-mask-element.js":"exheL","../core/holder.js":"fNs7n","./mask-element.js":"6dhyp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"exheL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>HTMLMaskElement);
var _maskElementJs = require("./mask-element.js");
var _maskElementJsDefault = parcelHelpers.interopDefault(_maskElementJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
const KEY_Z = 90;
const KEY_Y = 89;
/** Bridge between HTMLElement and {@link Masked} */ class HTMLMaskElement extends (0, _maskElementJsDefault.default) {
    /** HTMLElement to use mask on */ constructor(input){
        super();
        this.input = input;
        this._onKeydown = this._onKeydown.bind(this);
        this._onInput = this._onInput.bind(this);
        this._onBeforeinput = this._onBeforeinput.bind(this);
        this._onCompositionEnd = this._onCompositionEnd.bind(this);
    }
    get rootElement() {
        var _this$input$getRootNo, _this$input$getRootNo2, _this$input;
        return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) == null ? void 0 : _this$input$getRootNo2.call(_this$input)) != null ? _this$input$getRootNo : document;
    }
    /** Is element in focus */ get isActive() {
        return this.input === this.rootElement.activeElement;
    }
    /** Binds HTMLElement events to mask internal events */ bindEvents(handlers) {
        this.input.addEventListener("keydown", this._onKeydown);
        this.input.addEventListener("input", this._onInput);
        this.input.addEventListener("beforeinput", this._onBeforeinput);
        this.input.addEventListener("compositionend", this._onCompositionEnd);
        this.input.addEventListener("drop", handlers.drop);
        this.input.addEventListener("click", handlers.click);
        this.input.addEventListener("focus", handlers.focus);
        this.input.addEventListener("blur", handlers.commit);
        this._handlers = handlers;
    }
    _onKeydown(e) {
        if (this._handlers.redo && (e.keyCode === KEY_Z && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === KEY_Y && e.ctrlKey)) {
            e.preventDefault();
            return this._handlers.redo(e);
        }
        if (this._handlers.undo && e.keyCode === KEY_Z && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            return this._handlers.undo(e);
        }
        if (!e.isComposing) this._handlers.selectionChange(e);
    }
    _onBeforeinput(e) {
        if (e.inputType === "historyUndo" && this._handlers.undo) {
            e.preventDefault();
            return this._handlers.undo(e);
        }
        if (e.inputType === "historyRedo" && this._handlers.redo) {
            e.preventDefault();
            return this._handlers.redo(e);
        }
    }
    _onCompositionEnd(e) {
        this._handlers.input(e);
    }
    _onInput(e) {
        if (!e.isComposing) this._handlers.input(e);
    }
    /** Unbinds HTMLElement events to mask internal events */ unbindEvents() {
        this.input.removeEventListener("keydown", this._onKeydown);
        this.input.removeEventListener("input", this._onInput);
        this.input.removeEventListener("beforeinput", this._onBeforeinput);
        this.input.removeEventListener("compositionend", this._onCompositionEnd);
        this.input.removeEventListener("drop", this._handlers.drop);
        this.input.removeEventListener("click", this._handlers.click);
        this.input.removeEventListener("focus", this._handlers.focus);
        this.input.removeEventListener("blur", this._handlers.commit);
        this._handlers = {};
    }
}
(0, _holderJsDefault.default).HTMLMaskElement = HTMLMaskElement;

},{"./mask-element.js":"6dhyp","../core/holder.js":"fNs7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l1S15":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>HTMLContenteditableMaskElement);
var _htmlMaskElementJs = require("./html-mask-element.js");
var _htmlMaskElementJsDefault = parcelHelpers.interopDefault(_htmlMaskElementJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _maskElementJs = require("./mask-element.js");
class HTMLContenteditableMaskElement extends (0, _htmlMaskElementJsDefault.default) {
    /** Returns HTMLElement selection start */ get _unsafeSelectionStart() {
        const root = this.rootElement;
        const selection = root.getSelection && root.getSelection();
        const anchorOffset = selection && selection.anchorOffset;
        const focusOffset = selection && selection.focusOffset;
        if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) return anchorOffset;
        return focusOffset;
    }
    /** Returns HTMLElement selection end */ get _unsafeSelectionEnd() {
        const root = this.rootElement;
        const selection = root.getSelection && root.getSelection();
        const anchorOffset = selection && selection.anchorOffset;
        const focusOffset = selection && selection.focusOffset;
        if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) return anchorOffset;
        return focusOffset;
    }
    /** Sets HTMLElement selection */ _unsafeSelect(start, end) {
        if (!this.rootElement.createRange) return;
        const range = this.rootElement.createRange();
        range.setStart(this.input.firstChild || this.input, start);
        range.setEnd(this.input.lastChild || this.input, end);
        const root = this.rootElement;
        const selection = root.getSelection && root.getSelection();
        if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
    /** HTMLElement value */ get value() {
        return this.input.textContent || "";
    }
    set value(value) {
        this.input.textContent = value;
    }
}
(0, _holderJsDefault.default).HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;

},{"./html-mask-element.js":"exheL","../core/holder.js":"fNs7n","./mask-element.js":"6dhyp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fZNGO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>InputHistory);
class InputHistory {
    constructor(){
        this.states = [];
        this.currentIndex = 0;
    }
    get currentState() {
        return this.states[this.currentIndex];
    }
    get isEmpty() {
        return this.states.length === 0;
    }
    push(state) {
        // if current index points before the last element then remove the future
        if (this.currentIndex < this.states.length - 1) this.states.length = this.currentIndex + 1;
        this.states.push(state);
        if (this.states.length > InputHistory.MAX_LENGTH) this.states.shift();
        this.currentIndex = this.states.length - 1;
    }
    go(steps) {
        this.currentIndex = Math.min(Math.max(this.currentIndex + steps, 0), this.states.length - 1);
        return this.currentState;
    }
    undo() {
        return this.go(-1);
    }
    redo() {
        return this.go(1);
    }
    clear() {
        this.states.length = 0;
        this.currentIndex = 0;
    }
}
InputHistory.MAX_LENGTH = 100;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cDdFe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ChangeDetails);
var _holderJs = require("./holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
/** Provides details of changing model value */ class ChangeDetails {
    /** Inserted symbols */ /** Additional offset if any changes occurred before tail */ /** Raw inserted is used by dynamic mask */ /** Can skip chars */ static normalize(prep) {
        return Array.isArray(prep) ? prep : [
            prep,
            new ChangeDetails()
        ];
    }
    constructor(details){
        Object.assign(this, {
            inserted: "",
            rawInserted: "",
            tailShift: 0,
            skip: false
        }, details);
    }
    /** Aggregate changes */ aggregate(details) {
        this.inserted += details.inserted;
        this.rawInserted += details.rawInserted;
        this.tailShift += details.tailShift;
        this.skip = this.skip || details.skip;
        return this;
    }
    /** Total offset considering all changes */ get offset() {
        return this.tailShift + this.inserted.length;
    }
    get consumed() {
        return Boolean(this.rawInserted) || this.skip;
    }
    equals(details) {
        return this.inserted === details.inserted && this.tailShift === details.tailShift && this.rawInserted === details.rawInserted && this.skip === details.skip;
    }
}
(0, _holderJsDefault.default).ChangeDetails = ChangeDetails;

},{"./holder.js":"fNs7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i9dza":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Masked);
var _changeDetailsJs = require("../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _continuousTailDetailsJsDefault = parcelHelpers.interopDefault(_continuousTailDetailsJs);
var _utilsJs = require("../core/utils.js");
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
/** Append flags */ /** Extract flags */ // see https://github.com/microsoft/TypeScript/issues/6223
/** Provides common masking stuff */ class Masked {
    /** */ /** */ /** Transforms value before mask processing */ /** Transforms each char before mask processing */ /** Validates if value is acceptable */ /** Does additional processing at the end of editing */ /** Format typed value to string */ /** Parse string to get typed value */ /** Enable characters overwriting */ /** */ /** */ /** */ /** */ constructor(opts){
        this._value = "";
        this._update({
            ...Masked.DEFAULTS,
            ...opts
        });
        this._initialized = true;
    }
    /** Sets and applies new options */ updateOptions(opts) {
        if (!this.optionsIsChanged(opts)) return;
        this.withValueRefresh(this._update.bind(this, opts));
    }
    /** Sets new options */ _update(opts) {
        Object.assign(this, opts);
    }
    /** Mask state */ get state() {
        return {
            _value: this.value,
            _rawInputValue: this.rawInputValue
        };
    }
    set state(state) {
        this._value = state._value;
    }
    /** Resets value */ reset() {
        this._value = "";
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this.resolve(value, {
            input: true
        });
    }
    /** Resolve new value */ resolve(value, flags) {
        if (flags === void 0) flags = {
            input: true
        };
        this.reset();
        this.append(value, flags, "");
        this.doCommit();
    }
    get unmaskedValue() {
        return this.value;
    }
    set unmaskedValue(value) {
        this.resolve(value, {});
    }
    get typedValue() {
        return this.parse ? this.parse(this.value, this) : this.unmaskedValue;
    }
    set typedValue(value) {
        if (this.format) this.value = this.format(value, this);
        else this.unmaskedValue = String(value);
    }
    /** Value that includes raw user input */ get rawInputValue() {
        return this.extractInput(0, this.displayValue.length, {
            raw: true
        });
    }
    set rawInputValue(value) {
        this.resolve(value, {
            raw: true
        });
    }
    get displayValue() {
        return this.value;
    }
    get isComplete() {
        return true;
    }
    get isFilled() {
        return this.isComplete;
    }
    /** Finds nearest input position in direction */ nearestInputPos(cursorPos, direction) {
        return cursorPos;
    }
    totalInputPositions(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.displayValue.length;
        return Math.min(this.displayValue.length, toPos - fromPos);
    }
    /** Extracts value in range considering flags */ extractInput(fromPos, toPos, flags) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.displayValue.length;
        return this.displayValue.slice(fromPos, toPos);
    }
    /** Extracts tail in range */ extractTail(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.displayValue.length;
        return new (0, _continuousTailDetailsJsDefault.default)(this.extractInput(fromPos, toPos), fromPos);
    }
    /** Appends tail */ appendTail(tail) {
        if ((0, _utilsJs.isString)(tail)) tail = new (0, _continuousTailDetailsJsDefault.default)(String(tail));
        return tail.appendTo(this);
    }
    /** Appends char */ _appendCharRaw(ch, flags) {
        if (!ch) return new (0, _changeDetailsJsDefault.default)();
        this._value += ch;
        return new (0, _changeDetailsJsDefault.default)({
            inserted: ch,
            rawInserted: ch
        });
    }
    /** Appends char */ _appendChar(ch, flags, checkTail) {
        if (flags === void 0) flags = {};
        const consistentState = this.state;
        let details;
        [ch, details] = this.doPrepareChar(ch, flags);
        if (ch) {
            details = details.aggregate(this._appendCharRaw(ch, flags));
            // TODO handle `skip`?
            // try `autofix` lookahead
            if (!details.rawInserted && this.autofix === "pad") {
                const noFixState = this.state;
                this.state = consistentState;
                let fixDetails = this.pad(flags);
                const chDetails = this._appendCharRaw(ch, flags);
                fixDetails = fixDetails.aggregate(chDetails);
                // if fix was applied or
                // if details are equal use skip restoring state optimization
                if (chDetails.rawInserted || fixDetails.equals(details)) details = fixDetails;
                else this.state = noFixState;
            }
        }
        if (details.inserted) {
            let consistentTail;
            let appended = this.doValidate(flags) !== false;
            if (appended && checkTail != null) {
                // validation ok, check tail
                const beforeTailState = this.state;
                if (this.overwrite === true) {
                    consistentTail = checkTail.state;
                    for(let i = 0; i < details.rawInserted.length; ++i)checkTail.unshift(this.displayValue.length - details.tailShift);
                }
                let tailDetails = this.appendTail(checkTail);
                appended = tailDetails.rawInserted.length === checkTail.toString().length;
                // not ok, try shift
                if (!(appended && tailDetails.inserted) && this.overwrite === "shift") {
                    this.state = beforeTailState;
                    consistentTail = checkTail.state;
                    for(let i = 0; i < details.rawInserted.length; ++i)checkTail.shift();
                    tailDetails = this.appendTail(checkTail);
                    appended = tailDetails.rawInserted.length === checkTail.toString().length;
                }
                // if ok, rollback state after tail
                if (appended && tailDetails.inserted) this.state = beforeTailState;
            }
            // revert all if something went wrong
            if (!appended) {
                details = new (0, _changeDetailsJsDefault.default)();
                this.state = consistentState;
                if (checkTail && consistentTail) checkTail.state = consistentTail;
            }
        }
        return details;
    }
    /** Appends optional placeholder at the end */ _appendPlaceholder() {
        return new (0, _changeDetailsJsDefault.default)();
    }
    /** Appends optional eager placeholder at the end */ _appendEager() {
        return new (0, _changeDetailsJsDefault.default)();
    }
    /** Appends symbols considering flags */ append(str, flags, tail) {
        if (!(0, _utilsJs.isString)(str)) throw new Error("value should be string");
        const checkTail = (0, _utilsJs.isString)(tail) ? new (0, _continuousTailDetailsJsDefault.default)(String(tail)) : tail;
        if (flags != null && flags.tail) flags._beforeTailState = this.state;
        let details;
        [str, details] = this.doPrepare(str, flags);
        for(let ci = 0; ci < str.length; ++ci){
            const d = this._appendChar(str[ci], flags, checkTail);
            if (!d.rawInserted && !this.doSkipInvalid(str[ci], flags, checkTail)) break;
            details.aggregate(d);
        }
        if ((this.eager === true || this.eager === "append") && flags != null && flags.input && str) details.aggregate(this._appendEager());
        // append tail but aggregate only tailShift
        if (checkTail != null) details.tailShift += this.appendTail(checkTail).tailShift;
        return details;
    }
    remove(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.displayValue.length;
        this._value = this.displayValue.slice(0, fromPos) + this.displayValue.slice(toPos);
        return new (0, _changeDetailsJsDefault.default)();
    }
    /** Calls function and reapplies current value */ withValueRefresh(fn) {
        if (this._refreshing || !this._initialized) return fn();
        this._refreshing = true;
        const rawInput = this.rawInputValue;
        const value = this.value;
        const ret = fn();
        this.rawInputValue = rawInput;
        // append lost trailing chars at the end
        if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
            this.append(value.slice(this.displayValue.length), {}, "");
            this.doCommit();
        }
        delete this._refreshing;
        return ret;
    }
    runIsolated(fn) {
        if (this._isolated || !this._initialized) return fn(this);
        this._isolated = true;
        const state = this.state;
        const ret = fn(this);
        this.state = state;
        delete this._isolated;
        return ret;
    }
    doSkipInvalid(ch, flags, checkTail) {
        return Boolean(this.skipInvalid);
    }
    /** Prepares string before mask processing */ doPrepare(str, flags) {
        if (flags === void 0) flags = {};
        return (0, _changeDetailsJsDefault.default).normalize(this.prepare ? this.prepare(str, this, flags) : str);
    }
    /** Prepares each char before mask processing */ doPrepareChar(str, flags) {
        if (flags === void 0) flags = {};
        return (0, _changeDetailsJsDefault.default).normalize(this.prepareChar ? this.prepareChar(str, this, flags) : str);
    }
    /** Validates if value is acceptable */ doValidate(flags) {
        return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
    }
    /** Does additional processing at the end of editing */ doCommit() {
        if (this.commit) this.commit(this.value, this);
    }
    splice(start, deleteCount, inserted, removeDirection, flags) {
        if (inserted === void 0) inserted = "";
        if (removeDirection === void 0) removeDirection = (0, _utilsJs.DIRECTION).NONE;
        if (flags === void 0) flags = {
            input: true
        };
        const tailPos = start + deleteCount;
        const tail = this.extractTail(tailPos);
        const eagerRemove = this.eager === true || this.eager === "remove";
        let oldRawValue;
        if (eagerRemove) {
            removeDirection = (0, _utilsJs.forceDirection)(removeDirection);
            oldRawValue = this.extractInput(0, tailPos, {
                raw: true
            });
        }
        let startChangePos = start;
        const details = new (0, _changeDetailsJsDefault.default)();
        // if it is just deletion without insertion
        if (removeDirection !== (0, _utilsJs.DIRECTION).NONE) {
            startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !eagerRemove ? (0, _utilsJs.DIRECTION).NONE : removeDirection);
            // adjust tailShift if start was aligned
            details.tailShift = startChangePos - start;
        }
        details.aggregate(this.remove(startChangePos));
        if (eagerRemove && removeDirection !== (0, _utilsJs.DIRECTION).NONE && oldRawValue === this.rawInputValue) {
            if (removeDirection === (0, _utilsJs.DIRECTION).FORCE_LEFT) {
                let valLength;
                while(oldRawValue === this.rawInputValue && (valLength = this.displayValue.length))details.aggregate(new (0, _changeDetailsJsDefault.default)({
                    tailShift: -1
                })).aggregate(this.remove(valLength - 1));
            } else if (removeDirection === (0, _utilsJs.DIRECTION).FORCE_RIGHT) tail.unshift();
        }
        return details.aggregate(this.append(inserted, flags, tail));
    }
    maskEquals(mask) {
        return this.mask === mask;
    }
    optionsIsChanged(opts) {
        return !(0, _utilsJs.objectIncludes)(this, opts);
    }
    typedValueEquals(value) {
        const tval = this.typedValue;
        return value === tval || Masked.EMPTY_VALUES.includes(value) && Masked.EMPTY_VALUES.includes(tval) || (this.format ? this.format(value, this) === this.format(this.typedValue, this) : false);
    }
    pad(flags) {
        return new (0, _changeDetailsJsDefault.default)();
    }
}
Masked.DEFAULTS = {
    skipInvalid: true
};
Masked.EMPTY_VALUES = [
    undefined,
    null,
    ""
];
(0, _holderJsDefault.default).Masked = Masked;

},{"../core/change-details.js":"cDdFe","../core/continuous-tail-details.js":"5MbDY","../core/utils.js":"hh2Rx","../core/holder.js":"fNs7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5MbDY":[function(require,module,exports) {
/** Provides details of continuous extracted tail */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ContinuousTailDetails);
class ContinuousTailDetails {
    /** Tail value as string */ /** Tail start position */ /** Start position */ constructor(value, from, stop){
        if (value === void 0) value = "";
        if (from === void 0) from = 0;
        this.value = value;
        this.from = from;
        this.stop = stop;
    }
    toString() {
        return this.value;
    }
    extend(tail) {
        this.value += String(tail);
    }
    appendTo(masked) {
        return masked.append(this.toString(), {
            tail: true
        }).aggregate(masked._appendPlaceholder());
    }
    get state() {
        return {
            value: this.value,
            from: this.from,
            stop: this.stop
        };
    }
    set state(state) {
        Object.assign(this, state);
    }
    unshift(beforePos) {
        if (!this.value.length || beforePos != null && this.from >= beforePos) return "";
        const shiftChar = this.value[0];
        this.value = this.value.slice(1);
        return shiftChar;
    }
    shift() {
        if (!this.value.length) return "";
        const shiftChar = this.value[this.value.length - 1];
        this.value = this.value.slice(0, -1);
        return shiftChar;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1V3CB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedDate);
var _patternJs = require("./pattern.js");
var _patternJsDefault = parcelHelpers.interopDefault(_patternJs);
var _rangeJs = require("./range.js");
var _rangeJsDefault = parcelHelpers.interopDefault(_rangeJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _utilsJs = require("../core/utils.js");
var _changeDetailsJs = require("../core/change-details.js");
var _baseJs = require("./base.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _factoryJs = require("./factory.js");
var _chunkTailDetailsJs = require("./pattern/chunk-tail-details.js");
var _cursorJs = require("./pattern/cursor.js");
var _fixedDefinitionJs = require("./pattern/fixed-definition.js");
var _inputDefinitionJs = require("./pattern/input-definition.js");
var _regexpJs = require("./regexp.js");
const DefaultPattern = "d{.}`m{.}`Y";
// Make format and parse required when pattern is provided
/** Date mask */ class MaskedDate extends (0, _patternJsDefault.default) {
    static extractPatternOptions(opts) {
        const { mask, pattern, ...patternOpts } = opts;
        return {
            ...patternOpts,
            mask: (0, _utilsJs.isString)(mask) ? mask : pattern
        };
    }
    /** Pattern mask for date according to {@link MaskedDate#format} */ /** Start date */ /** End date */ /** Format typed value to string */ /** Parse string to get typed value */ constructor(opts){
        super(MaskedDate.extractPatternOptions({
            ...MaskedDate.DEFAULTS,
            ...opts
        }));
    }
    updateOptions(opts) {
        super.updateOptions(opts);
    }
    _update(opts) {
        const { mask, pattern, blocks, ...patternOpts } = {
            ...MaskedDate.DEFAULTS,
            ...opts
        };
        const patternBlocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS());
        // adjust year block
        if (opts.min) patternBlocks.Y.from = opts.min.getFullYear();
        if (opts.max) patternBlocks.Y.to = opts.max.getFullYear();
        if (opts.min && opts.max && patternBlocks.Y.from === patternBlocks.Y.to) {
            patternBlocks.m.from = opts.min.getMonth() + 1;
            patternBlocks.m.to = opts.max.getMonth() + 1;
            if (patternBlocks.m.from === patternBlocks.m.to) {
                patternBlocks.d.from = opts.min.getDate();
                patternBlocks.d.to = opts.max.getDate();
            }
        }
        Object.assign(patternBlocks, this.blocks, blocks);
        super._update({
            ...patternOpts,
            mask: (0, _utilsJs.isString)(mask) ? mask : pattern,
            blocks: patternBlocks
        });
    }
    doValidate(flags) {
        const date = this.date;
        return super.doValidate(flags) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
    }
    /** Checks if date is exists */ isDateExist(str) {
        return this.format(this.parse(str, this), this).indexOf(str) >= 0;
    }
    /** Parsed Date */ get date() {
        return this.typedValue;
    }
    set date(date) {
        this.typedValue = date;
    }
    get typedValue() {
        return this.isComplete ? super.typedValue : null;
    }
    set typedValue(value) {
        super.typedValue = value;
    }
    maskEquals(mask) {
        return mask === Date || super.maskEquals(mask);
    }
    optionsIsChanged(opts) {
        return super.optionsIsChanged(MaskedDate.extractPatternOptions(opts));
    }
}
MaskedDate.GET_DEFAULT_BLOCKS = ()=>({
        d: {
            mask: (0, _rangeJsDefault.default),
            from: 1,
            to: 31,
            maxLength: 2
        },
        m: {
            mask: (0, _rangeJsDefault.default),
            from: 1,
            to: 12,
            maxLength: 2
        },
        Y: {
            mask: (0, _rangeJsDefault.default),
            from: 1900,
            to: 9999
        }
    });
MaskedDate.DEFAULTS = {
    ...(0, _patternJsDefault.default).DEFAULTS,
    mask: Date,
    pattern: DefaultPattern,
    format: (date, masked)=>{
        if (!date) return "";
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return [
            day,
            month,
            year
        ].join(".");
    },
    parse: (str, masked)=>{
        const [day, month, year] = str.split(".").map(Number);
        return new Date(year, month - 1, day);
    }
};
(0, _holderJsDefault.default).MaskedDate = MaskedDate;

},{"./pattern.js":"edg1G","./range.js":"iHvQL","../core/holder.js":"fNs7n","../core/utils.js":"hh2Rx","../core/change-details.js":"cDdFe","./base.js":"i9dza","../core/continuous-tail-details.js":"5MbDY","./factory.js":"4c29b","./pattern/chunk-tail-details.js":"a8Q24","./pattern/cursor.js":"1K9Ff","./pattern/fixed-definition.js":"fnLC7","./pattern/input-definition.js":"lGvsS","./regexp.js":"7B25G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"edg1G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedPattern);
var _changeDetailsJs = require("../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _utilsJs = require("../core/utils.js");
var _baseJs = require("./base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _factoryJs = require("./factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _chunkTailDetailsJs = require("./pattern/chunk-tail-details.js");
var _chunkTailDetailsJsDefault = parcelHelpers.interopDefault(_chunkTailDetailsJs);
var _cursorJs = require("./pattern/cursor.js");
var _cursorJsDefault = parcelHelpers.interopDefault(_cursorJs);
var _fixedDefinitionJs = require("./pattern/fixed-definition.js");
var _fixedDefinitionJsDefault = parcelHelpers.interopDefault(_fixedDefinitionJs);
var _inputDefinitionJs = require("./pattern/input-definition.js");
var _inputDefinitionJsDefault = parcelHelpers.interopDefault(_inputDefinitionJs);
var _regexpJs = require("./regexp.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
/** Pattern mask */ class MaskedPattern extends (0, _baseJsDefault.default) {
    /** */ /** */ /** Single char for empty input */ /** Single char for filled input */ /** Show placeholder only when needed */ /** Enable characters overwriting */ /** */ /** */ /** */ constructor(opts){
        super({
            ...MaskedPattern.DEFAULTS,
            ...opts,
            definitions: Object.assign({}, (0, _inputDefinitionJsDefault.default).DEFAULT_DEFINITIONS, opts == null ? void 0 : opts.definitions)
        });
    }
    updateOptions(opts) {
        super.updateOptions(opts);
    }
    _update(opts) {
        opts.definitions = Object.assign({}, this.definitions, opts.definitions);
        super._update(opts);
        this._rebuildMask();
    }
    _rebuildMask() {
        const defs = this.definitions;
        this._blocks = [];
        this.exposeBlock = undefined;
        this._stops = [];
        this._maskedBlocks = {};
        const pattern = this.mask;
        if (!pattern || !defs) return;
        let unmaskingBlock = false;
        let optionalBlock = false;
        for(let i = 0; i < pattern.length; ++i){
            if (this.blocks) {
                const p = pattern.slice(i);
                const bNames = Object.keys(this.blocks).filter((bName)=>p.indexOf(bName) === 0);
                // order by key length
                bNames.sort((a, b)=>b.length - a.length);
                // use block name with max length
                const bName = bNames[0];
                if (bName) {
                    const { expose, repeat, ...bOpts } = (0, _factoryJs.normalizeOpts)(this.blocks[bName]); // TODO type Opts<Arg & Extra>
                    const blockOpts = {
                        lazy: this.lazy,
                        eager: this.eager,
                        placeholderChar: this.placeholderChar,
                        displayChar: this.displayChar,
                        overwrite: this.overwrite,
                        autofix: this.autofix,
                        ...bOpts,
                        repeat,
                        parent: this
                    };
                    const maskedBlock = repeat != null ? new (0, _holderJsDefault.default).RepeatBlock(blockOpts /* TODO */ ) : (0, _factoryJsDefault.default)(blockOpts);
                    if (maskedBlock) {
                        this._blocks.push(maskedBlock);
                        if (expose) this.exposeBlock = maskedBlock;
                        // store block index
                        if (!this._maskedBlocks[bName]) this._maskedBlocks[bName] = [];
                        this._maskedBlocks[bName].push(this._blocks.length - 1);
                    }
                    i += bName.length - 1;
                    continue;
                }
            }
            let char = pattern[i];
            let isInput = char in defs;
            if (char === MaskedPattern.STOP_CHAR) {
                this._stops.push(this._blocks.length);
                continue;
            }
            if (char === "{" || char === "}") {
                unmaskingBlock = !unmaskingBlock;
                continue;
            }
            if (char === "[" || char === "]") {
                optionalBlock = !optionalBlock;
                continue;
            }
            if (char === MaskedPattern.ESCAPE_CHAR) {
                ++i;
                char = pattern[i];
                if (!char) break;
                isInput = false;
            }
            const def = isInput ? new (0, _inputDefinitionJsDefault.default)({
                isOptional: optionalBlock,
                lazy: this.lazy,
                eager: this.eager,
                placeholderChar: this.placeholderChar,
                displayChar: this.displayChar,
                ...(0, _factoryJs.normalizeOpts)(defs[char]),
                parent: this
            }) : new (0, _fixedDefinitionJsDefault.default)({
                char,
                eager: this.eager,
                isUnmasking: unmaskingBlock
            });
            this._blocks.push(def);
        }
    }
    get state() {
        return {
            ...super.state,
            _blocks: this._blocks.map((b)=>b.state)
        };
    }
    set state(state) {
        if (!state) {
            this.reset();
            return;
        }
        const { _blocks, ...maskedState } = state;
        this._blocks.forEach((b, bi)=>b.state = _blocks[bi]);
        super.state = maskedState;
    }
    reset() {
        super.reset();
        this._blocks.forEach((b)=>b.reset());
    }
    get isComplete() {
        return this.exposeBlock ? this.exposeBlock.isComplete : this._blocks.every((b)=>b.isComplete);
    }
    get isFilled() {
        return this._blocks.every((b)=>b.isFilled);
    }
    get isFixed() {
        return this._blocks.every((b)=>b.isFixed);
    }
    get isOptional() {
        return this._blocks.every((b)=>b.isOptional);
    }
    doCommit() {
        this._blocks.forEach((b)=>b.doCommit());
        super.doCommit();
    }
    get unmaskedValue() {
        return this.exposeBlock ? this.exposeBlock.unmaskedValue : this._blocks.reduce((str, b)=>str += b.unmaskedValue, "");
    }
    set unmaskedValue(unmaskedValue) {
        if (this.exposeBlock) {
            const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
            this.exposeBlock.unmaskedValue = unmaskedValue;
            this.appendTail(tail);
            this.doCommit();
        } else super.unmaskedValue = unmaskedValue;
    }
    get value() {
        return this.exposeBlock ? this.exposeBlock.value : // TODO return _value when not in change?
        this._blocks.reduce((str, b)=>str += b.value, "");
    }
    set value(value) {
        if (this.exposeBlock) {
            const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
            this.exposeBlock.value = value;
            this.appendTail(tail);
            this.doCommit();
        } else super.value = value;
    }
    get typedValue() {
        return this.exposeBlock ? this.exposeBlock.typedValue : super.typedValue;
    }
    set typedValue(value) {
        if (this.exposeBlock) {
            const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
            this.exposeBlock.typedValue = value;
            this.appendTail(tail);
            this.doCommit();
        } else super.typedValue = value;
    }
    get displayValue() {
        return this._blocks.reduce((str, b)=>str += b.displayValue, "");
    }
    appendTail(tail) {
        return super.appendTail(tail).aggregate(this._appendPlaceholder());
    }
    _appendEager() {
        var _this$_mapPosToBlock;
        const details = new (0, _changeDetailsJsDefault.default)();
        let startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : _this$_mapPosToBlock.index;
        if (startBlockIndex == null) return details;
        // TODO test if it works for nested pattern masks
        if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex;
        for(let bi = startBlockIndex; bi < this._blocks.length; ++bi){
            const d = this._blocks[bi]._appendEager();
            if (!d.inserted) break;
            details.aggregate(d);
        }
        return details;
    }
    _appendCharRaw(ch, flags) {
        if (flags === void 0) flags = {};
        const blockIter = this._mapPosToBlock(this.displayValue.length);
        const details = new (0, _changeDetailsJsDefault.default)();
        if (!blockIter) return details;
        for(let bi = blockIter.index, block; block = this._blocks[bi]; ++bi){
            var _flags$_beforeTailSta;
            const blockDetails = block._appendChar(ch, {
                ...flags,
                _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) == null || (_flags$_beforeTailSta = _flags$_beforeTailSta._blocks) == null ? void 0 : _flags$_beforeTailSta[bi]
            });
            details.aggregate(blockDetails);
            if (blockDetails.consumed) break; // go next char
        }
        return details;
    }
    extractTail(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.displayValue.length;
        const chunkTail = new (0, _chunkTailDetailsJsDefault.default)();
        if (fromPos === toPos) return chunkTail;
        this._forEachBlocksInRange(fromPos, toPos, (b, bi, bFromPos, bToPos)=>{
            const blockChunk = b.extractTail(bFromPos, bToPos);
            blockChunk.stop = this._findStopBefore(bi);
            blockChunk.from = this._blockStartPos(bi);
            if (blockChunk instanceof (0, _chunkTailDetailsJsDefault.default)) blockChunk.blockIndex = bi;
            chunkTail.extend(blockChunk);
        });
        return chunkTail;
    }
    extractInput(fromPos, toPos, flags) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.displayValue.length;
        if (flags === void 0) flags = {};
        if (fromPos === toPos) return "";
        let input = "";
        this._forEachBlocksInRange(fromPos, toPos, (b, _, fromPos, toPos)=>{
            input += b.extractInput(fromPos, toPos, flags);
        });
        return input;
    }
    _findStopBefore(blockIndex) {
        let stopBefore;
        for(let si = 0; si < this._stops.length; ++si){
            const stop = this._stops[si];
            if (stop <= blockIndex) stopBefore = stop;
            else break;
        }
        return stopBefore;
    }
    /** Appends placeholder depending on laziness */ _appendPlaceholder(toBlockIndex) {
        const details = new (0, _changeDetailsJsDefault.default)();
        if (this.lazy && toBlockIndex == null) return details;
        const startBlockIter = this._mapPosToBlock(this.displayValue.length);
        if (!startBlockIter) return details;
        const startBlockIndex = startBlockIter.index;
        const endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;
        this._blocks.slice(startBlockIndex, endBlockIndex).forEach((b)=>{
            if (!b.lazy || toBlockIndex != null) {
                var _blocks2;
                details.aggregate(b._appendPlaceholder((_blocks2 = b._blocks) == null ? void 0 : _blocks2.length));
            }
        });
        return details;
    }
    /** Finds block in pos */ _mapPosToBlock(pos) {
        let accVal = "";
        for(let bi = 0; bi < this._blocks.length; ++bi){
            const block = this._blocks[bi];
            const blockStartPos = accVal.length;
            accVal += block.displayValue;
            if (pos <= accVal.length) return {
                index: bi,
                offset: pos - blockStartPos
            };
        }
    }
    _blockStartPos(blockIndex) {
        return this._blocks.slice(0, blockIndex).reduce((pos, b)=>pos += b.displayValue.length, 0);
    }
    _forEachBlocksInRange(fromPos, toPos, fn) {
        if (toPos === void 0) toPos = this.displayValue.length;
        const fromBlockIter = this._mapPosToBlock(fromPos);
        if (fromBlockIter) {
            const toBlockIter = this._mapPosToBlock(toPos);
            // process first block
            const isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
            const fromBlockStartPos = fromBlockIter.offset;
            const fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].displayValue.length;
            fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);
            if (toBlockIter && !isSameBlock) {
                // process intermediate blocks
                for(let bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi)fn(this._blocks[bi], bi, 0, this._blocks[bi].displayValue.length);
                // process last block
                fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
            }
        }
    }
    remove(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.displayValue.length;
        const removeDetails = super.remove(fromPos, toPos);
        this._forEachBlocksInRange(fromPos, toPos, (b, _, bFromPos, bToPos)=>{
            removeDetails.aggregate(b.remove(bFromPos, bToPos));
        });
        return removeDetails;
    }
    nearestInputPos(cursorPos, direction) {
        if (direction === void 0) direction = (0, _utilsJs.DIRECTION).NONE;
        if (!this._blocks.length) return 0;
        const cursor = new (0, _cursorJsDefault.default)(this, cursorPos);
        if (direction === (0, _utilsJs.DIRECTION).NONE) {
            // -------------------------------------------------
            // NONE should only go out from fixed to the right!
            // -------------------------------------------------
            if (cursor.pushRightBeforeInput()) return cursor.pos;
            cursor.popState();
            if (cursor.pushLeftBeforeInput()) return cursor.pos;
            return this.displayValue.length;
        }
        // FORCE is only about a|* otherwise is 0
        if (direction === (0, _utilsJs.DIRECTION).LEFT || direction === (0, _utilsJs.DIRECTION).FORCE_LEFT) {
            // try to break fast when *|a
            if (direction === (0, _utilsJs.DIRECTION).LEFT) {
                cursor.pushRightBeforeFilled();
                if (cursor.ok && cursor.pos === cursorPos) return cursorPos;
                cursor.popState();
            }
            // forward flow
            cursor.pushLeftBeforeInput();
            cursor.pushLeftBeforeRequired();
            cursor.pushLeftBeforeFilled();
            // backward flow
            if (direction === (0, _utilsJs.DIRECTION).LEFT) {
                cursor.pushRightBeforeInput();
                cursor.pushRightBeforeRequired();
                if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
                cursor.popState();
                if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
                cursor.popState();
            }
            if (cursor.ok) return cursor.pos;
            if (direction === (0, _utilsJs.DIRECTION).FORCE_LEFT) return 0;
            cursor.popState();
            if (cursor.ok) return cursor.pos;
            cursor.popState();
            if (cursor.ok) return cursor.pos;
            return 0;
        }
        if (direction === (0, _utilsJs.DIRECTION).RIGHT || direction === (0, _utilsJs.DIRECTION).FORCE_RIGHT) {
            // forward flow
            cursor.pushRightBeforeInput();
            cursor.pushRightBeforeRequired();
            if (cursor.pushRightBeforeFilled()) return cursor.pos;
            if (direction === (0, _utilsJs.DIRECTION).FORCE_RIGHT) return this.displayValue.length;
            // backward flow
            cursor.popState();
            if (cursor.ok) return cursor.pos;
            cursor.popState();
            if (cursor.ok) return cursor.pos;
            return this.nearestInputPos(cursorPos, (0, _utilsJs.DIRECTION).LEFT);
        }
        return cursorPos;
    }
    totalInputPositions(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.displayValue.length;
        let total = 0;
        this._forEachBlocksInRange(fromPos, toPos, (b, _, bFromPos, bToPos)=>{
            total += b.totalInputPositions(bFromPos, bToPos);
        });
        return total;
    }
    /** Get block by name */ maskedBlock(name) {
        return this.maskedBlocks(name)[0];
    }
    /** Get all blocks by name */ maskedBlocks(name) {
        const indices = this._maskedBlocks[name];
        if (!indices) return [];
        return indices.map((gi)=>this._blocks[gi]);
    }
    pad(flags) {
        const details = new (0, _changeDetailsJsDefault.default)();
        this._forEachBlocksInRange(0, this.displayValue.length, (b)=>details.aggregate(b.pad(flags)));
        return details;
    }
}
MaskedPattern.DEFAULTS = {
    ...(0, _baseJsDefault.default).DEFAULTS,
    lazy: true,
    placeholderChar: "_"
};
MaskedPattern.STOP_CHAR = "`";
MaskedPattern.ESCAPE_CHAR = "\\";
MaskedPattern.InputDefinition = (0, _inputDefinitionJsDefault.default);
MaskedPattern.FixedDefinition = (0, _fixedDefinitionJsDefault.default);
(0, _holderJsDefault.default).MaskedPattern = MaskedPattern;

},{"../core/change-details.js":"cDdFe","../core/holder.js":"fNs7n","../core/utils.js":"hh2Rx","./base.js":"i9dza","./factory.js":"4c29b","./pattern/chunk-tail-details.js":"a8Q24","./pattern/cursor.js":"1K9Ff","./pattern/fixed-definition.js":"fnLC7","./pattern/input-definition.js":"lGvsS","./regexp.js":"7B25G","../core/continuous-tail-details.js":"5MbDY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a8Q24":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ChunksTailDetails);
var _changeDetailsJs = require("../../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _utilsJs = require("../../core/utils.js");
var _continuousTailDetailsJs = require("../../core/continuous-tail-details.js");
var _continuousTailDetailsJsDefault = parcelHelpers.interopDefault(_continuousTailDetailsJs);
var _holderJs = require("../../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
class ChunksTailDetails {
    /** */ constructor(chunks, from){
        if (chunks === void 0) chunks = [];
        if (from === void 0) from = 0;
        this.chunks = chunks;
        this.from = from;
    }
    toString() {
        return this.chunks.map(String).join("");
    }
    extend(tailChunk) {
        if (!String(tailChunk)) return;
        tailChunk = (0, _utilsJs.isString)(tailChunk) ? new (0, _continuousTailDetailsJsDefault.default)(String(tailChunk)) : tailChunk;
        const lastChunk = this.chunks[this.chunks.length - 1];
        const extendLast = lastChunk && // if stops are same or tail has no stop
        (lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && // if tail chunk goes just after last chunk
        tailChunk.from === lastChunk.from + lastChunk.toString().length;
        if (tailChunk instanceof (0, _continuousTailDetailsJsDefault.default)) {
            // check the ability to extend previous chunk
            if (extendLast) // extend previous chunk
            lastChunk.extend(tailChunk.toString());
            else // append new chunk
            this.chunks.push(tailChunk);
        } else if (tailChunk instanceof ChunksTailDetails) {
            if (tailChunk.stop == null) {
                // unwrap floating chunks to parent, keeping `from` pos
                let firstTailChunk;
                while(tailChunk.chunks.length && tailChunk.chunks[0].stop == null){
                    firstTailChunk = tailChunk.chunks.shift(); // not possible to be `undefined` because length was checked above
                    firstTailChunk.from += tailChunk.from;
                    this.extend(firstTailChunk);
                }
            }
            // if tail chunk still has value
            if (tailChunk.toString()) {
                // if chunks contains stops, then popup stop to container
                tailChunk.stop = tailChunk.blockIndex;
                this.chunks.push(tailChunk);
            }
        }
    }
    appendTo(masked) {
        if (!(masked instanceof (0, _holderJsDefault.default).MaskedPattern)) {
            const tail = new (0, _continuousTailDetailsJsDefault.default)(this.toString());
            return tail.appendTo(masked);
        }
        const details = new (0, _changeDetailsJsDefault.default)();
        for(let ci = 0; ci < this.chunks.length; ++ci){
            const chunk = this.chunks[ci];
            const lastBlockIter = masked._mapPosToBlock(masked.displayValue.length);
            const stop = chunk.stop;
            let chunkBlock;
            if (stop != null && // if block not found or stop is behind lastBlock
            (!lastBlockIter || lastBlockIter.index <= stop)) {
                if (chunk instanceof ChunksTailDetails || // for continuous block also check if stop is exist
                masked._stops.indexOf(stop) >= 0) details.aggregate(masked._appendPlaceholder(stop));
                chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
            }
            if (chunkBlock) {
                const tailDetails = chunkBlock.appendTail(chunk);
                details.aggregate(tailDetails);
                // get not inserted chars
                const remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
                if (remainChars) details.aggregate(masked.append(remainChars, {
                    tail: true
                }));
            } else details.aggregate(masked.append(chunk.toString(), {
                tail: true
            }));
        }
        return details;
    }
    get state() {
        return {
            chunks: this.chunks.map((c)=>c.state),
            from: this.from,
            stop: this.stop,
            blockIndex: this.blockIndex
        };
    }
    set state(state) {
        const { chunks, ...props } = state;
        Object.assign(this, props);
        this.chunks = chunks.map((cstate)=>{
            const chunk = "chunks" in cstate ? new ChunksTailDetails() : new (0, _continuousTailDetailsJsDefault.default)();
            chunk.state = cstate;
            return chunk;
        });
    }
    unshift(beforePos) {
        if (!this.chunks.length || beforePos != null && this.from >= beforePos) return "";
        const chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
        let ci = 0;
        while(ci < this.chunks.length){
            const chunk = this.chunks[ci];
            const shiftChar = chunk.unshift(chunkShiftPos);
            if (chunk.toString()) {
                // chunk still contains value
                // but not shifted - means no more available chars to shift
                if (!shiftChar) break;
                ++ci;
            } else // clean if chunk has no value
            this.chunks.splice(ci, 1);
            if (shiftChar) return shiftChar;
        }
        return "";
    }
    shift() {
        if (!this.chunks.length) return "";
        let ci = this.chunks.length - 1;
        while(0 <= ci){
            const chunk = this.chunks[ci];
            const shiftChar = chunk.shift();
            if (chunk.toString()) {
                // chunk still contains value
                // but not shifted - means no more available chars to shift
                if (!shiftChar) break;
                --ci;
            } else // clean if chunk has no value
            this.chunks.splice(ci, 1);
            if (shiftChar) return shiftChar;
        }
        return "";
    }
}

},{"../../core/change-details.js":"cDdFe","../../core/utils.js":"hh2Rx","../../core/continuous-tail-details.js":"5MbDY","../../core/holder.js":"fNs7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1K9Ff":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>PatternCursor);
var _utilsJs = require("../../core/utils.js");
class PatternCursor {
    constructor(masked, pos){
        this.masked = masked;
        this._log = [];
        const { offset, index } = masked._mapPosToBlock(pos) || (pos < 0 ? // first
        {
            index: 0,
            offset: 0
        } : // last
        {
            index: this.masked._blocks.length,
            offset: 0
        });
        this.offset = offset;
        this.index = index;
        this.ok = false;
    }
    get block() {
        return this.masked._blocks[this.index];
    }
    get pos() {
        return this.masked._blockStartPos(this.index) + this.offset;
    }
    get state() {
        return {
            index: this.index,
            offset: this.offset,
            ok: this.ok
        };
    }
    set state(s) {
        Object.assign(this, s);
    }
    pushState() {
        this._log.push(this.state);
    }
    popState() {
        const s = this._log.pop();
        if (s) this.state = s;
        return s;
    }
    bindBlock() {
        if (this.block) return;
        if (this.index < 0) {
            this.index = 0;
            this.offset = 0;
        }
        if (this.index >= this.masked._blocks.length) {
            this.index = this.masked._blocks.length - 1;
            this.offset = this.block.displayValue.length; // TODO this is stupid type error, `block` depends on index that was changed above
        }
    }
    _pushLeft(fn) {
        this.pushState();
        for(this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((_this$block = this.block) == null ? void 0 : _this$block.displayValue.length) || 0){
            var _this$block;
            if (fn()) return this.ok = true;
        }
        return this.ok = false;
    }
    _pushRight(fn) {
        this.pushState();
        for(this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0){
            if (fn()) return this.ok = true;
        }
        return this.ok = false;
    }
    pushLeftBeforeFilled() {
        return this._pushLeft(()=>{
            if (this.block.isFixed || !this.block.value) return;
            this.offset = this.block.nearestInputPos(this.offset, (0, _utilsJs.DIRECTION).FORCE_LEFT);
            if (this.offset !== 0) return true;
        });
    }
    pushLeftBeforeInput() {
        // cases:
        // filled input: 00|
        // optional empty input: 00[]|
        // nested block: XX<[]>|
        return this._pushLeft(()=>{
            if (this.block.isFixed) return;
            this.offset = this.block.nearestInputPos(this.offset, (0, _utilsJs.DIRECTION).LEFT);
            return true;
        });
    }
    pushLeftBeforeRequired() {
        return this._pushLeft(()=>{
            if (this.block.isFixed || this.block.isOptional && !this.block.value) return;
            this.offset = this.block.nearestInputPos(this.offset, (0, _utilsJs.DIRECTION).LEFT);
            return true;
        });
    }
    pushRightBeforeFilled() {
        return this._pushRight(()=>{
            if (this.block.isFixed || !this.block.value) return;
            this.offset = this.block.nearestInputPos(this.offset, (0, _utilsJs.DIRECTION).FORCE_RIGHT);
            if (this.offset !== this.block.value.length) return true;
        });
    }
    pushRightBeforeInput() {
        return this._pushRight(()=>{
            if (this.block.isFixed) return;
            // const o = this.offset;
            this.offset = this.block.nearestInputPos(this.offset, (0, _utilsJs.DIRECTION).NONE);
            // HACK cases like (STILL DOES NOT WORK FOR NESTED)
            // aa|X
            // aa<X|[]>X_    - this will not work
            // if (o && o === this.offset && this.block instanceof PatternInputDefinition) continue;
            return true;
        });
    }
    pushRightBeforeRequired() {
        return this._pushRight(()=>{
            if (this.block.isFixed || this.block.isOptional && !this.block.value) return;
            // TODO check |[*]XX_
            this.offset = this.block.nearestInputPos(this.offset, (0, _utilsJs.DIRECTION).NONE);
            return true;
        });
    }
}

},{"../../core/utils.js":"hh2Rx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fnLC7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>PatternFixedDefinition);
var _changeDetailsJs = require("../../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _utilsJs = require("../../core/utils.js");
var _continuousTailDetailsJs = require("../../core/continuous-tail-details.js");
var _continuousTailDetailsJsDefault = parcelHelpers.interopDefault(_continuousTailDetailsJs);
var _holderJs = require("../../core/holder.js");
class PatternFixedDefinition {
    /** */ /** */ /** */ /** */ /** */ /** */ constructor(opts){
        Object.assign(this, opts);
        this._value = "";
        this.isFixed = true;
    }
    get value() {
        return this._value;
    }
    get unmaskedValue() {
        return this.isUnmasking ? this.value : "";
    }
    get rawInputValue() {
        return this._isRawInput ? this.value : "";
    }
    get displayValue() {
        return this.value;
    }
    reset() {
        this._isRawInput = false;
        this._value = "";
    }
    remove(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this._value.length;
        this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
        if (!this._value) this._isRawInput = false;
        return new (0, _changeDetailsJsDefault.default)();
    }
    nearestInputPos(cursorPos, direction) {
        if (direction === void 0) direction = (0, _utilsJs.DIRECTION).NONE;
        const minPos = 0;
        const maxPos = this._value.length;
        switch(direction){
            case (0, _utilsJs.DIRECTION).LEFT:
            case (0, _utilsJs.DIRECTION).FORCE_LEFT:
                return minPos;
            case (0, _utilsJs.DIRECTION).NONE:
            case (0, _utilsJs.DIRECTION).RIGHT:
            case (0, _utilsJs.DIRECTION).FORCE_RIGHT:
            default:
                return maxPos;
        }
    }
    totalInputPositions(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this._value.length;
        return this._isRawInput ? toPos - fromPos : 0;
    }
    extractInput(fromPos, toPos, flags) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this._value.length;
        if (flags === void 0) flags = {};
        return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || "";
    }
    get isComplete() {
        return true;
    }
    get isFilled() {
        return Boolean(this._value);
    }
    _appendChar(ch, flags) {
        if (flags === void 0) flags = {};
        if (this.isFilled) return new (0, _changeDetailsJsDefault.default)();
        const appendEager = this.eager === true || this.eager === "append";
        const appended = this.char === ch;
        const isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && (!flags.raw || !appendEager) && !flags.tail;
        const details = new (0, _changeDetailsJsDefault.default)({
            inserted: this.char,
            rawInserted: isResolved ? this.char : ""
        });
        this._value = this.char;
        this._isRawInput = isResolved && (flags.raw || flags.input);
        return details;
    }
    _appendEager() {
        return this._appendChar(this.char, {
            tail: true
        });
    }
    _appendPlaceholder() {
        const details = new (0, _changeDetailsJsDefault.default)();
        if (this.isFilled) return details;
        this._value = details.inserted = this.char;
        return details;
    }
    extractTail() {
        return new (0, _continuousTailDetailsJsDefault.default)("");
    }
    appendTail(tail) {
        if ((0, _utilsJs.isString)(tail)) tail = new (0, _continuousTailDetailsJsDefault.default)(String(tail));
        return tail.appendTo(this);
    }
    append(str, flags, tail) {
        const details = this._appendChar(str[0], flags);
        if (tail != null) details.tailShift += this.appendTail(tail).tailShift;
        return details;
    }
    doCommit() {}
    get state() {
        return {
            _value: this._value,
            _rawInputValue: this.rawInputValue
        };
    }
    set state(state) {
        this._value = state._value;
        this._isRawInput = Boolean(state._rawInputValue);
    }
    pad(flags) {
        return this._appendPlaceholder();
    }
}

},{"../../core/change-details.js":"cDdFe","../../core/utils.js":"hh2Rx","../../core/continuous-tail-details.js":"5MbDY","../../core/holder.js":"fNs7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lGvsS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>PatternInputDefinition);
var _factoryJs = require("../factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _changeDetailsJs = require("../../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _utilsJs = require("../../core/utils.js");
var _holderJs = require("../../core/holder.js");
class PatternInputDefinition {
    /** */ /** */ /** */ /** */ /** */ /** */ /** */ /** */ constructor(opts){
        const { parent, isOptional, placeholderChar, displayChar, lazy, eager, ...maskOpts } = opts;
        this.masked = (0, _factoryJsDefault.default)(maskOpts);
        Object.assign(this, {
            parent,
            isOptional,
            placeholderChar,
            displayChar,
            lazy,
            eager
        });
    }
    reset() {
        this.isFilled = false;
        this.masked.reset();
    }
    remove(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.value.length;
        if (fromPos === 0 && toPos >= 1) {
            this.isFilled = false;
            return this.masked.remove(fromPos, toPos);
        }
        return new (0, _changeDetailsJsDefault.default)();
    }
    get value() {
        return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "");
    }
    get unmaskedValue() {
        return this.masked.unmaskedValue;
    }
    get rawInputValue() {
        return this.masked.rawInputValue;
    }
    get displayValue() {
        return this.masked.value && this.displayChar || this.value;
    }
    get isComplete() {
        return Boolean(this.masked.value) || this.isOptional;
    }
    _appendChar(ch, flags) {
        if (flags === void 0) flags = {};
        if (this.isFilled) return new (0, _changeDetailsJsDefault.default)();
        const state = this.masked.state;
        // simulate input
        let details = this.masked._appendChar(ch, this.currentMaskFlags(flags));
        if (details.inserted && this.doValidate(flags) === false) {
            details = new (0, _changeDetailsJsDefault.default)();
            this.masked.state = state;
        }
        if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) details.inserted = this.placeholderChar;
        details.skip = !details.inserted && !this.isOptional;
        this.isFilled = Boolean(details.inserted);
        return details;
    }
    append(str, flags, tail) {
        // TODO probably should be done via _appendChar
        return this.masked.append(str, this.currentMaskFlags(flags), tail);
    }
    _appendPlaceholder() {
        if (this.isFilled || this.isOptional) return new (0, _changeDetailsJsDefault.default)();
        this.isFilled = true;
        return new (0, _changeDetailsJsDefault.default)({
            inserted: this.placeholderChar
        });
    }
    _appendEager() {
        return new (0, _changeDetailsJsDefault.default)();
    }
    extractTail(fromPos, toPos) {
        return this.masked.extractTail(fromPos, toPos);
    }
    appendTail(tail) {
        return this.masked.appendTail(tail);
    }
    extractInput(fromPos, toPos, flags) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.value.length;
        return this.masked.extractInput(fromPos, toPos, flags);
    }
    nearestInputPos(cursorPos, direction) {
        if (direction === void 0) direction = (0, _utilsJs.DIRECTION).NONE;
        const minPos = 0;
        const maxPos = this.value.length;
        const boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);
        switch(direction){
            case (0, _utilsJs.DIRECTION).LEFT:
            case (0, _utilsJs.DIRECTION).FORCE_LEFT:
                return this.isComplete ? boundPos : minPos;
            case (0, _utilsJs.DIRECTION).RIGHT:
            case (0, _utilsJs.DIRECTION).FORCE_RIGHT:
                return this.isComplete ? boundPos : maxPos;
            case (0, _utilsJs.DIRECTION).NONE:
            default:
                return boundPos;
        }
    }
    totalInputPositions(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.value.length;
        return this.value.slice(fromPos, toPos).length;
    }
    doValidate(flags) {
        return this.masked.doValidate(this.currentMaskFlags(flags)) && (!this.parent || this.parent.doValidate(this.currentMaskFlags(flags)));
    }
    doCommit() {
        this.masked.doCommit();
    }
    get state() {
        return {
            _value: this.value,
            _rawInputValue: this.rawInputValue,
            masked: this.masked.state,
            isFilled: this.isFilled
        };
    }
    set state(state) {
        this.masked.state = state.masked;
        this.isFilled = state.isFilled;
    }
    currentMaskFlags(flags) {
        var _flags$_beforeTailSta;
        return {
            ...flags,
            _beforeTailState: (flags == null || (_flags$_beforeTailSta = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta.masked) || (flags == null ? void 0 : flags._beforeTailState)
        };
    }
    pad(flags) {
        return new (0, _changeDetailsJsDefault.default)();
    }
}
PatternInputDefinition.DEFAULT_DEFINITIONS = {
    "0": /\d/,
    "a": /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    // http://stackoverflow.com/a/22075070
    "*": /./
};

},{"../factory.js":"4c29b","../../core/change-details.js":"cDdFe","../../core/utils.js":"hh2Rx","../../core/holder.js":"fNs7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7B25G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedRegExp);
var _baseJs = require("./base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _changeDetailsJs = require("../core/change-details.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _utilsJs = require("../core/utils.js");
/** Masking by RegExp */ class MaskedRegExp extends (0, _baseJsDefault.default) {
    /** */ /** Enable characters overwriting */ /** */ /** */ /** */ updateOptions(opts) {
        super.updateOptions(opts);
    }
    _update(opts) {
        const mask = opts.mask;
        if (mask) opts.validate = (value)=>value.search(mask) >= 0;
        super._update(opts);
    }
}
(0, _holderJsDefault.default).MaskedRegExp = MaskedRegExp;

},{"./base.js":"i9dza","../core/holder.js":"fNs7n","../core/change-details.js":"cDdFe","../core/continuous-tail-details.js":"5MbDY","../core/utils.js":"hh2Rx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iHvQL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedRange);
var _changeDetailsJs = require("../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _patternJs = require("./pattern.js");
var _patternJsDefault = parcelHelpers.interopDefault(_patternJs);
var _utilsJs = require("../core/utils.js");
var _baseJs = require("./base.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _factoryJs = require("./factory.js");
var _chunkTailDetailsJs = require("./pattern/chunk-tail-details.js");
var _cursorJs = require("./pattern/cursor.js");
var _fixedDefinitionJs = require("./pattern/fixed-definition.js");
var _inputDefinitionJs = require("./pattern/input-definition.js");
var _regexpJs = require("./regexp.js");
/** Pattern which accepts ranges */ class MaskedRange extends (0, _patternJsDefault.default) {
    /**
    Optionally sets max length of pattern.
    Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
  */ /** Min bound */ /** Max bound */ get _matchFrom() {
        return this.maxLength - String(this.from).length;
    }
    constructor(opts){
        super(opts); // mask will be created in _update
    }
    updateOptions(opts) {
        super.updateOptions(opts);
    }
    _update(opts) {
        const { to = this.to || 0, from = this.from || 0, maxLength = this.maxLength || 0, autofix = this.autofix, ...patternOpts } = opts;
        this.to = to;
        this.from = from;
        this.maxLength = Math.max(String(to).length, maxLength);
        this.autofix = autofix;
        const fromStr = String(this.from).padStart(this.maxLength, "0");
        const toStr = String(this.to).padStart(this.maxLength, "0");
        let sameCharsCount = 0;
        while(sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount])++sameCharsCount;
        patternOpts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, "\\0") + "0".repeat(this.maxLength - sameCharsCount);
        super._update(patternOpts);
    }
    get isComplete() {
        return super.isComplete && Boolean(this.value);
    }
    boundaries(str) {
        let minstr = "";
        let maxstr = "";
        const [, placeholder, num] = str.match(/^(\D*)(\d*)(\D*)/) || [];
        if (num) {
            minstr = "0".repeat(placeholder.length) + num;
            maxstr = "9".repeat(placeholder.length) + num;
        }
        minstr = minstr.padEnd(this.maxLength, "0");
        maxstr = maxstr.padEnd(this.maxLength, "9");
        return [
            minstr,
            maxstr
        ];
    }
    doPrepareChar(ch, flags) {
        if (flags === void 0) flags = {};
        let details;
        [ch, details] = super.doPrepareChar(ch.replace(/\D/g, ""), flags);
        if (!ch) details.skip = !this.isComplete;
        return [
            ch,
            details
        ];
    }
    _appendCharRaw(ch, flags) {
        if (flags === void 0) flags = {};
        if (!this.autofix || this.value.length + 1 > this.maxLength) return super._appendCharRaw(ch, flags);
        const fromStr = String(this.from).padStart(this.maxLength, "0");
        const toStr = String(this.to).padStart(this.maxLength, "0");
        const [minstr, maxstr] = this.boundaries(this.value + ch);
        if (Number(maxstr) < this.from) return super._appendCharRaw(fromStr[this.value.length], flags);
        if (Number(minstr) > this.to) {
            if (!flags.tail && this.autofix === "pad" && this.value.length + 1 < this.maxLength) return super._appendCharRaw(fromStr[this.value.length], flags).aggregate(this._appendCharRaw(ch, flags));
            return super._appendCharRaw(toStr[this.value.length], flags);
        }
        return super._appendCharRaw(ch, flags);
    }
    doValidate(flags) {
        const str = this.value;
        const firstNonZero = str.search(/[^0]/);
        if (firstNonZero === -1 && str.length <= this._matchFrom) return true;
        const [minstr, maxstr] = this.boundaries(str);
        return this.from <= Number(maxstr) && Number(minstr) <= this.to && super.doValidate(flags);
    }
    pad(flags) {
        const details = new (0, _changeDetailsJsDefault.default)();
        if (this.value.length === this.maxLength) return details;
        const value = this.value;
        const padLength = this.maxLength - this.value.length;
        if (padLength) {
            this.reset();
            for(let i = 0; i < padLength; ++i)details.aggregate(super._appendCharRaw("0", flags));
            // append tail
            value.split("").forEach((ch)=>this._appendCharRaw(ch));
        }
        return details;
    }
}
(0, _holderJsDefault.default).MaskedRange = MaskedRange;

},{"../core/change-details.js":"cDdFe","../core/holder.js":"fNs7n","./pattern.js":"edg1G","../core/utils.js":"hh2Rx","./base.js":"i9dza","../core/continuous-tail-details.js":"5MbDY","./factory.js":"4c29b","./pattern/chunk-tail-details.js":"a8Q24","./pattern/cursor.js":"1K9Ff","./pattern/fixed-definition.js":"fnLC7","./pattern/input-definition.js":"lGvsS","./regexp.js":"7B25G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kPiRi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedDynamic);
var _utilsJs = require("../core/utils.js");
var _changeDetailsJs = require("../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _factoryJs = require("./factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _baseJs = require("./base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
/** Dynamic mask for choosing appropriate mask in run-time */ class MaskedDynamic extends (0, _baseJsDefault.default) {
    constructor(opts){
        super({
            ...MaskedDynamic.DEFAULTS,
            ...opts
        });
        this.currentMask = undefined;
    }
    updateOptions(opts) {
        super.updateOptions(opts);
    }
    _update(opts) {
        super._update(opts);
        if ("mask" in opts) {
            this.exposeMask = undefined;
            // mask could be totally dynamic with only `dispatch` option
            this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map((m)=>{
                const { expose, ...maskOpts } = (0, _factoryJs.normalizeOpts)(m);
                const masked = (0, _factoryJsDefault.default)({
                    overwrite: this._overwrite,
                    eager: this._eager,
                    skipInvalid: this._skipInvalid,
                    ...maskOpts
                });
                if (expose) this.exposeMask = masked;
                return masked;
            }) : [];
        // this.currentMask = this.doDispatch(''); // probably not needed but lets see
        }
    }
    _appendCharRaw(ch, flags) {
        if (flags === void 0) flags = {};
        const details = this._applyDispatch(ch, flags);
        if (this.currentMask) details.aggregate(this.currentMask._appendChar(ch, this.currentMaskFlags(flags)));
        return details;
    }
    _applyDispatch(appended, flags, tail) {
        if (appended === void 0) appended = "";
        if (flags === void 0) flags = {};
        if (tail === void 0) tail = "";
        const prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
        const inputValue = this.rawInputValue;
        const insertValue = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._rawInputValue : inputValue;
        const tailValue = inputValue.slice(insertValue.length);
        const prevMask = this.currentMask;
        const details = new (0, _changeDetailsJsDefault.default)();
        const prevMaskState = prevMask == null ? void 0 : prevMask.state;
        // clone flags to prevent overwriting `_beforeTailState`
        this.currentMask = this.doDispatch(appended, {
            ...flags
        }, tail);
        // restore state after dispatch
        if (this.currentMask) {
            if (this.currentMask !== prevMask) {
                // if mask changed reapply input
                this.currentMask.reset();
                if (insertValue) {
                    this.currentMask.append(insertValue, {
                        raw: true
                    });
                    details.tailShift = this.currentMask.value.length - prevValueBeforeTail.length;
                }
                if (tailValue) details.tailShift += this.currentMask.append(tailValue, {
                    raw: true,
                    tail: true
                }).tailShift;
            } else if (prevMaskState) // Dispatch can do something bad with state, so
            // restore prev mask state
            this.currentMask.state = prevMaskState;
        }
        return details;
    }
    _appendPlaceholder() {
        const details = this._applyDispatch();
        if (this.currentMask) details.aggregate(this.currentMask._appendPlaceholder());
        return details;
    }
    _appendEager() {
        const details = this._applyDispatch();
        if (this.currentMask) details.aggregate(this.currentMask._appendEager());
        return details;
    }
    appendTail(tail) {
        const details = new (0, _changeDetailsJsDefault.default)();
        if (tail) details.aggregate(this._applyDispatch("", {}, tail));
        return details.aggregate(this.currentMask ? this.currentMask.appendTail(tail) : super.appendTail(tail));
    }
    currentMaskFlags(flags) {
        var _flags$_beforeTailSta, _flags$_beforeTailSta2;
        return {
            ...flags,
            _beforeTailState: ((_flags$_beforeTailSta = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta.currentMaskRef) === this.currentMask && ((_flags$_beforeTailSta2 = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta2.currentMask) || flags._beforeTailState
        };
    }
    doDispatch(appended, flags, tail) {
        if (flags === void 0) flags = {};
        if (tail === void 0) tail = "";
        return this.dispatch(appended, this, flags, tail);
    }
    doValidate(flags) {
        return super.doValidate(flags) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(flags)));
    }
    doPrepare(str, flags) {
        if (flags === void 0) flags = {};
        let [s, details] = super.doPrepare(str, flags);
        if (this.currentMask) {
            let currentDetails;
            [s, currentDetails] = super.doPrepare(s, this.currentMaskFlags(flags));
            details = details.aggregate(currentDetails);
        }
        return [
            s,
            details
        ];
    }
    doPrepareChar(str, flags) {
        if (flags === void 0) flags = {};
        let [s, details] = super.doPrepareChar(str, flags);
        if (this.currentMask) {
            let currentDetails;
            [s, currentDetails] = super.doPrepareChar(s, this.currentMaskFlags(flags));
            details = details.aggregate(currentDetails);
        }
        return [
            s,
            details
        ];
    }
    reset() {
        var _this$currentMask;
        (_this$currentMask = this.currentMask) == null || _this$currentMask.reset();
        this.compiledMasks.forEach((m)=>m.reset());
    }
    get value() {
        return this.exposeMask ? this.exposeMask.value : this.currentMask ? this.currentMask.value : "";
    }
    set value(value) {
        if (this.exposeMask) {
            this.exposeMask.value = value;
            this.currentMask = this.exposeMask;
            this._applyDispatch();
        } else super.value = value;
    }
    get unmaskedValue() {
        return this.exposeMask ? this.exposeMask.unmaskedValue : this.currentMask ? this.currentMask.unmaskedValue : "";
    }
    set unmaskedValue(unmaskedValue) {
        if (this.exposeMask) {
            this.exposeMask.unmaskedValue = unmaskedValue;
            this.currentMask = this.exposeMask;
            this._applyDispatch();
        } else super.unmaskedValue = unmaskedValue;
    }
    get typedValue() {
        return this.exposeMask ? this.exposeMask.typedValue : this.currentMask ? this.currentMask.typedValue : "";
    }
    set typedValue(typedValue) {
        if (this.exposeMask) {
            this.exposeMask.typedValue = typedValue;
            this.currentMask = this.exposeMask;
            this._applyDispatch();
            return;
        }
        let unmaskedValue = String(typedValue);
        // double check it
        if (this.currentMask) {
            this.currentMask.typedValue = typedValue;
            unmaskedValue = this.currentMask.unmaskedValue;
        }
        this.unmaskedValue = unmaskedValue;
    }
    get displayValue() {
        return this.currentMask ? this.currentMask.displayValue : "";
    }
    get isComplete() {
        var _this$currentMask2;
        return Boolean((_this$currentMask2 = this.currentMask) == null ? void 0 : _this$currentMask2.isComplete);
    }
    get isFilled() {
        var _this$currentMask3;
        return Boolean((_this$currentMask3 = this.currentMask) == null ? void 0 : _this$currentMask3.isFilled);
    }
    remove(fromPos, toPos) {
        const details = new (0, _changeDetailsJsDefault.default)();
        if (this.currentMask) details.aggregate(this.currentMask.remove(fromPos, toPos))// update with dispatch
        .aggregate(this._applyDispatch());
        return details;
    }
    get state() {
        var _this$currentMask4;
        return {
            ...super.state,
            _rawInputValue: this.rawInputValue,
            compiledMasks: this.compiledMasks.map((m)=>m.state),
            currentMaskRef: this.currentMask,
            currentMask: (_this$currentMask4 = this.currentMask) == null ? void 0 : _this$currentMask4.state
        };
    }
    set state(state) {
        const { compiledMasks, currentMaskRef, currentMask, ...maskedState } = state;
        if (compiledMasks) this.compiledMasks.forEach((m, mi)=>m.state = compiledMasks[mi]);
        if (currentMaskRef != null) {
            this.currentMask = currentMaskRef;
            this.currentMask.state = currentMask;
        }
        super.state = maskedState;
    }
    extractInput(fromPos, toPos, flags) {
        return this.currentMask ? this.currentMask.extractInput(fromPos, toPos, flags) : "";
    }
    extractTail(fromPos, toPos) {
        return this.currentMask ? this.currentMask.extractTail(fromPos, toPos) : super.extractTail(fromPos, toPos);
    }
    doCommit() {
        if (this.currentMask) this.currentMask.doCommit();
        super.doCommit();
    }
    nearestInputPos(cursorPos, direction) {
        return this.currentMask ? this.currentMask.nearestInputPos(cursorPos, direction) : super.nearestInputPos(cursorPos, direction);
    }
    get overwrite() {
        return this.currentMask ? this.currentMask.overwrite : this._overwrite;
    }
    set overwrite(overwrite) {
        this._overwrite = overwrite;
    }
    get eager() {
        return this.currentMask ? this.currentMask.eager : this._eager;
    }
    set eager(eager) {
        this._eager = eager;
    }
    get skipInvalid() {
        return this.currentMask ? this.currentMask.skipInvalid : this._skipInvalid;
    }
    set skipInvalid(skipInvalid) {
        this._skipInvalid = skipInvalid;
    }
    get autofix() {
        return this.currentMask ? this.currentMask.autofix : this._autofix;
    }
    set autofix(autofix) {
        this._autofix = autofix;
    }
    maskEquals(mask) {
        return Array.isArray(mask) ? this.compiledMasks.every((m, mi)=>{
            if (!mask[mi]) return;
            const { mask: oldMask, ...restOpts } = mask[mi];
            return (0, _utilsJs.objectIncludes)(m, restOpts) && m.maskEquals(oldMask);
        }) : super.maskEquals(mask);
    }
    typedValueEquals(value) {
        var _this$currentMask5;
        return Boolean((_this$currentMask5 = this.currentMask) == null ? void 0 : _this$currentMask5.typedValueEquals(value));
    }
}
/** Currently chosen mask */ /** Currently chosen mask */ /** Compliled {@link Masked} options */ /** Chooses {@link Masked} depending on input value */ MaskedDynamic.DEFAULTS = {
    ...(0, _baseJsDefault.default).DEFAULTS,
    dispatch: (appended, masked, flags, tail)=>{
        if (!masked.compiledMasks.length) return;
        const inputValue = masked.rawInputValue;
        // simulate input
        const inputs = masked.compiledMasks.map((m, index)=>{
            const isCurrent = masked.currentMask === m;
            const startInputPos = isCurrent ? m.displayValue.length : m.nearestInputPos(m.displayValue.length, (0, _utilsJs.DIRECTION).FORCE_LEFT);
            if (m.rawInputValue !== inputValue) {
                m.reset();
                m.append(inputValue, {
                    raw: true
                });
            } else if (!isCurrent) m.remove(startInputPos);
            m.append(appended, masked.currentMaskFlags(flags));
            m.appendTail(tail);
            return {
                index,
                weight: m.rawInputValue.length,
                totalInputPositions: m.totalInputPositions(0, Math.max(startInputPos, m.nearestInputPos(m.displayValue.length, (0, _utilsJs.DIRECTION).FORCE_LEFT)))
            };
        });
        // pop masks with longer values first
        inputs.sort((i1, i2)=>i2.weight - i1.weight || i2.totalInputPositions - i1.totalInputPositions);
        return masked.compiledMasks[inputs[0].index];
    }
};
(0, _holderJsDefault.default).MaskedDynamic = MaskedDynamic;

},{"../core/utils.js":"hh2Rx","../core/change-details.js":"cDdFe","./factory.js":"4c29b","./base.js":"i9dza","../core/holder.js":"fNs7n","../core/continuous-tail-details.js":"5MbDY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dmeoh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedEnum);
var _patternJs = require("./pattern.js");
var _patternJsDefault = parcelHelpers.interopDefault(_patternJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _changeDetailsJs = require("../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _utilsJs = require("../core/utils.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _continuousTailDetailsJsDefault = parcelHelpers.interopDefault(_continuousTailDetailsJs);
var _baseJs = require("./base.js");
var _factoryJs = require("./factory.js");
var _chunkTailDetailsJs = require("./pattern/chunk-tail-details.js");
var _cursorJs = require("./pattern/cursor.js");
var _fixedDefinitionJs = require("./pattern/fixed-definition.js");
var _inputDefinitionJs = require("./pattern/input-definition.js");
var _regexpJs = require("./regexp.js");
/** Pattern which validates enum values */ class MaskedEnum extends (0, _patternJsDefault.default) {
    constructor(opts){
        super({
            ...MaskedEnum.DEFAULTS,
            ...opts
        }); // mask will be created in _update
    }
    updateOptions(opts) {
        super.updateOptions(opts);
    }
    _update(opts) {
        const { enum: enum_, ...eopts } = opts;
        if (enum_) {
            const lengths = enum_.map((e)=>e.length);
            const requiredLength = Math.min(...lengths);
            const optionalLength = Math.max(...lengths) - requiredLength;
            eopts.mask = "*".repeat(requiredLength);
            if (optionalLength) eopts.mask += "[" + "*".repeat(optionalLength) + "]";
            this.enum = enum_;
        }
        super._update(eopts);
    }
    _appendCharRaw(ch, flags) {
        if (flags === void 0) flags = {};
        const matchFrom = Math.min(this.nearestInputPos(0, (0, _utilsJs.DIRECTION).FORCE_RIGHT), this.value.length);
        const matches = this.enum.filter((e)=>this.matchValue(e, this.unmaskedValue + ch, matchFrom));
        if (matches.length) {
            if (matches.length === 1) this._forEachBlocksInRange(0, this.value.length, (b, bi)=>{
                const mch = matches[0][bi];
                if (bi >= this.value.length || mch === b.value) return;
                b.reset();
                b._appendChar(mch, flags);
            });
            const d = super._appendCharRaw(matches[0][this.value.length], flags);
            if (matches.length === 1) matches[0].slice(this.unmaskedValue.length).split("").forEach((mch)=>d.aggregate(super._appendCharRaw(mch)));
            return d;
        }
        return new (0, _changeDetailsJsDefault.default)({
            skip: !this.isComplete
        });
    }
    extractTail(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.displayValue.length;
        // just drop tail
        return new (0, _continuousTailDetailsJsDefault.default)("", fromPos);
    }
    remove(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.displayValue.length;
        if (fromPos === toPos) return new (0, _changeDetailsJsDefault.default)();
        const matchFrom = Math.min(super.nearestInputPos(0, (0, _utilsJs.DIRECTION).FORCE_RIGHT), this.value.length);
        let pos;
        for(pos = fromPos; pos >= 0; --pos){
            const matches = this.enum.filter((e)=>this.matchValue(e, this.value.slice(matchFrom, pos), matchFrom));
            if (matches.length > 1) break;
        }
        const details = super.remove(pos, toPos);
        details.tailShift += pos - fromPos;
        return details;
    }
    get isComplete() {
        return this.enum.indexOf(this.value) >= 0;
    }
}
/** Match enum value */ MaskedEnum.DEFAULTS = {
    ...(0, _patternJsDefault.default).DEFAULTS,
    matchValue: (estr, istr, matchFrom)=>estr.indexOf(istr, matchFrom) === matchFrom
};
(0, _holderJsDefault.default).MaskedEnum = MaskedEnum;

},{"./pattern.js":"edg1G","../core/holder.js":"fNs7n","../core/change-details.js":"cDdFe","../core/utils.js":"hh2Rx","../core/continuous-tail-details.js":"5MbDY","./base.js":"i9dza","./factory.js":"4c29b","./pattern/chunk-tail-details.js":"a8Q24","./pattern/cursor.js":"1K9Ff","./pattern/fixed-definition.js":"fnLC7","./pattern/input-definition.js":"lGvsS","./regexp.js":"7B25G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"64ffz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedFunction);
var _baseJs = require("./base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _changeDetailsJs = require("../core/change-details.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _utilsJs = require("../core/utils.js");
/** Masking by custom Function */ class MaskedFunction extends (0, _baseJsDefault.default) {
    /** */ /** Enable characters overwriting */ /** */ /** */ /** */ updateOptions(opts) {
        super.updateOptions(opts);
    }
    _update(opts) {
        super._update({
            ...opts,
            validate: opts.mask
        });
    }
}
(0, _holderJsDefault.default).MaskedFunction = MaskedFunction;

},{"./base.js":"i9dza","../core/holder.js":"fNs7n","../core/change-details.js":"cDdFe","../core/continuous-tail-details.js":"5MbDY","../core/utils.js":"hh2Rx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gHi3R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedNumber);
var _utilsJs = require("../core/utils.js");
var _changeDetailsJs = require("../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _baseJs = require("./base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _MaskedNumber;
/** Number mask */ class MaskedNumber extends (0, _baseJsDefault.default) {
    /** Single char */ /** Single char */ /** Array of single chars */ /** */ /** */ /** Digits after point */ /** Flag to remove leading and trailing zeros in the end of editing */ /** Flag to pad trailing zeros after point in the end of editing */ /** Enable characters overwriting */ /** */ /** */ /** */ /** Format typed value to string */ /** Parse string to get typed value */ constructor(opts){
        super({
            ...MaskedNumber.DEFAULTS,
            ...opts
        });
    }
    updateOptions(opts) {
        super.updateOptions(opts);
    }
    _update(opts) {
        super._update(opts);
        this._updateRegExps();
    }
    _updateRegExps() {
        const start = "^" + (this.allowNegative ? "[+|\\-]?" : "");
        const mid = "\\d*";
        const end = (this.scale ? "(" + (0, _utilsJs.escapeRegExp)(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
        this._numberRegExp = new RegExp(start + mid + end);
        this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map((0, _utilsJs.escapeRegExp)).join("") + "]", "g");
        this._thousandsSeparatorRegExp = new RegExp((0, _utilsJs.escapeRegExp)(this.thousandsSeparator), "g");
    }
    _removeThousandsSeparators(value) {
        return value.replace(this._thousandsSeparatorRegExp, "");
    }
    _insertThousandsSeparators(value) {
        // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
        const parts = value.split(this.radix);
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        return parts.join(this.radix);
    }
    doPrepareChar(ch, flags) {
        if (flags === void 0) flags = {};
        const [prepCh, details] = super.doPrepareChar(this._removeThousandsSeparators(this.scale && this.mapToRadix.length && /*
      radix should be mapped when
      1) input is done from keyboard = flags.input && flags.raw
      2) unmasked value is set = !flags.input && !flags.raw
      and should not be mapped when
      1) value is set = flags.input && !flags.raw
      2) raw value is set = !flags.input && flags.raw
    */ (flags.input && flags.raw || !flags.input && !flags.raw) ? ch.replace(this._mapToRadixRegExp, this.radix) : ch), flags);
        if (ch && !prepCh) details.skip = true;
        if (prepCh && !this.allowPositive && !this.value && prepCh !== "-") details.aggregate(this._appendChar("-"));
        return [
            prepCh,
            details
        ];
    }
    _separatorsCount(to, extendOnSeparators) {
        if (extendOnSeparators === void 0) extendOnSeparators = false;
        let count = 0;
        for(let pos = 0; pos < to; ++pos)if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
            ++count;
            if (extendOnSeparators) to += this.thousandsSeparator.length;
        }
        return count;
    }
    _separatorsCountFromSlice(slice) {
        if (slice === void 0) slice = this._value;
        return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
    }
    extractInput(fromPos, toPos, flags) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.displayValue.length;
        [fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
        return this._removeThousandsSeparators(super.extractInput(fromPos, toPos, flags));
    }
    _appendCharRaw(ch, flags) {
        if (flags === void 0) flags = {};
        const prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
        const prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);
        this._value = this._removeThousandsSeparators(this.value);
        const oldValue = this._value;
        this._value += ch;
        const num = this.number;
        let accepted = !isNaN(num);
        let skip = false;
        if (accepted) {
            let fixedNum;
            if (this.min != null && this.min < 0 && this.number < this.min) fixedNum = this.min;
            if (this.max != null && this.max > 0 && this.number > this.max) fixedNum = this.max;
            if (fixedNum != null) {
                if (this.autofix) {
                    this._value = this.format(fixedNum, this).replace(MaskedNumber.UNMASKED_RADIX, this.radix);
                    skip || (skip = oldValue === this._value && !flags.tail); // if not changed on tail it's still ok to proceed
                } else accepted = false;
            }
            accepted && (accepted = Boolean(this._value.match(this._numberRegExp)));
        }
        let appendDetails;
        if (!accepted) {
            this._value = oldValue;
            appendDetails = new (0, _changeDetailsJsDefault.default)();
        } else appendDetails = new (0, _changeDetailsJsDefault.default)({
            inserted: this._value.slice(oldValue.length),
            rawInserted: skip ? "" : ch,
            skip
        });
        this._value = this._insertThousandsSeparators(this._value);
        const beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
        const beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);
        appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
        return appendDetails;
    }
    _findSeparatorAround(pos) {
        if (this.thousandsSeparator) {
            const searchFrom = pos - this.thousandsSeparator.length + 1;
            const separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
            if (separatorPos <= pos) return separatorPos;
        }
        return -1;
    }
    _adjustRangeWithSeparators(from, to) {
        const separatorAroundFromPos = this._findSeparatorAround(from);
        if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;
        const separatorAroundToPos = this._findSeparatorAround(to);
        if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
        return [
            from,
            to
        ];
    }
    remove(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.displayValue.length;
        [fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
        const valueBeforePos = this.value.slice(0, fromPos);
        const valueAfterPos = this.value.slice(toPos);
        const prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);
        this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));
        const beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);
        return new (0, _changeDetailsJsDefault.default)({
            tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
        });
    }
    nearestInputPos(cursorPos, direction) {
        if (!this.thousandsSeparator) return cursorPos;
        switch(direction){
            case (0, _utilsJs.DIRECTION).NONE:
            case (0, _utilsJs.DIRECTION).LEFT:
            case (0, _utilsJs.DIRECTION).FORCE_LEFT:
                {
                    const separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);
                    if (separatorAtLeftPos >= 0) {
                        const separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;
                        if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === (0, _utilsJs.DIRECTION).FORCE_LEFT) return separatorAtLeftPos;
                    }
                    break;
                }
            case (0, _utilsJs.DIRECTION).RIGHT:
            case (0, _utilsJs.DIRECTION).FORCE_RIGHT:
                {
                    const separatorAtRightPos = this._findSeparatorAround(cursorPos);
                    if (separatorAtRightPos >= 0) return separatorAtRightPos + this.thousandsSeparator.length;
                }
        }
        return cursorPos;
    }
    doCommit() {
        if (this.value) {
            const number = this.number;
            let validnum = number;
            // check bounds
            if (this.min != null) validnum = Math.max(validnum, this.min);
            if (this.max != null) validnum = Math.min(validnum, this.max);
            if (validnum !== number) this.unmaskedValue = this.format(validnum, this);
            let formatted = this.value;
            if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
            if (this.padFractionalZeros && this.scale > 0) formatted = this._padFractionalZeros(formatted);
            this._value = formatted;
        }
        super.doCommit();
    }
    _normalizeZeros(value) {
        const parts = this._removeThousandsSeparators(value).split(this.radix);
        // remove leading zeros
        parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, (match, sign, zeros, num)=>sign + num);
        // add leading zero
        if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + "0";
        if (parts.length > 1) {
            parts[1] = parts[1].replace(/0*$/, ""); // remove trailing zeros
            if (!parts[1].length) parts.length = 1; // remove fractional
        }
        return this._insertThousandsSeparators(parts.join(this.radix));
    }
    _padFractionalZeros(value) {
        if (!value) return value;
        const parts = value.split(this.radix);
        if (parts.length < 2) parts.push("");
        parts[1] = parts[1].padEnd(this.scale, "0");
        return parts.join(this.radix);
    }
    doSkipInvalid(ch, flags, checkTail) {
        if (flags === void 0) flags = {};
        const dropFractional = this.scale === 0 && ch !== this.thousandsSeparator && (ch === this.radix || ch === MaskedNumber.UNMASKED_RADIX || this.mapToRadix.includes(ch));
        return super.doSkipInvalid(ch, flags, checkTail) && !dropFractional;
    }
    get unmaskedValue() {
        return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, MaskedNumber.UNMASKED_RADIX);
    }
    set unmaskedValue(unmaskedValue) {
        super.unmaskedValue = unmaskedValue;
    }
    get typedValue() {
        return this.parse(this.unmaskedValue, this);
    }
    set typedValue(n) {
        this.rawInputValue = this.format(n, this).replace(MaskedNumber.UNMASKED_RADIX, this.radix);
    }
    /** Parsed Number */ get number() {
        return this.typedValue;
    }
    set number(number) {
        this.typedValue = number;
    }
    get allowNegative() {
        return this.min != null && this.min < 0 || this.max != null && this.max < 0;
    }
    get allowPositive() {
        return this.min != null && this.min > 0 || this.max != null && this.max > 0;
    }
    typedValueEquals(value) {
        // handle  0 -> '' case (typed = 0 even if value = '')
        // for details see https://github.com/uNmAnNeR/imaskjs/issues/134
        return (super.typedValueEquals(value) || MaskedNumber.EMPTY_VALUES.includes(value) && MaskedNumber.EMPTY_VALUES.includes(this.typedValue)) && !(value === 0 && this.value === "");
    }
}
_MaskedNumber = MaskedNumber;
MaskedNumber.UNMASKED_RADIX = ".";
MaskedNumber.EMPTY_VALUES = [
    ...(0, _baseJsDefault.default).EMPTY_VALUES,
    0
];
MaskedNumber.DEFAULTS = {
    ...(0, _baseJsDefault.default).DEFAULTS,
    mask: Number,
    radix: ",",
    thousandsSeparator: "",
    mapToRadix: [
        _MaskedNumber.UNMASKED_RADIX
    ],
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER,
    scale: 2,
    normalizeZeros: true,
    padFractionalZeros: false,
    parse: Number,
    format: (n)=>n.toLocaleString("en-US", {
            useGrouping: false,
            maximumFractionDigits: 20
        })
};
(0, _holderJsDefault.default).MaskedNumber = MaskedNumber;

},{"../core/utils.js":"hh2Rx","../core/change-details.js":"cDdFe","./base.js":"i9dza","../core/holder.js":"fNs7n","../core/continuous-tail-details.js":"5MbDY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"knGz0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PIPE_TYPE", ()=>PIPE_TYPE);
parcelHelpers.export(exports, "createPipe", ()=>createPipe);
parcelHelpers.export(exports, "pipe", ()=>pipe);
var _factoryJs = require("./factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _utilsJs = require("../core/utils.js");
/** Mask pipe source and destination types */ const PIPE_TYPE = {
    MASKED: "value",
    UNMASKED: "unmaskedValue",
    TYPED: "typedValue"
};
/** Creates new pipe function depending on mask type, source and destination options */ function createPipe(arg, from, to) {
    if (from === void 0) from = PIPE_TYPE.MASKED;
    if (to === void 0) to = PIPE_TYPE.MASKED;
    const masked = (0, _factoryJsDefault.default)(arg);
    return (value)=>masked.runIsolated((m)=>{
            m[from] = value;
            return m[to];
        });
}
/** Pipes value through mask depending on mask type, source and destination options */ function pipe(value, mask, from, to) {
    return createPipe(mask, from, to)(value);
}
(0, _holderJsDefault.default).PIPE_TYPE = PIPE_TYPE;
(0, _holderJsDefault.default).createPipe = createPipe;
(0, _holderJsDefault.default).pipe = pipe;

},{"./factory.js":"4c29b","../core/holder.js":"fNs7n","../core/utils.js":"hh2Rx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ccFx2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>RepeatBlock);
var _changeDetailsJs = require("../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _factoryJs = require("./factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _patternJs = require("./pattern.js");
var _patternJsDefault = parcelHelpers.interopDefault(_patternJs);
var _utilsJs = require("../core/utils.js");
var _baseJs = require("./base.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _chunkTailDetailsJs = require("./pattern/chunk-tail-details.js");
var _cursorJs = require("./pattern/cursor.js");
var _fixedDefinitionJs = require("./pattern/fixed-definition.js");
var _inputDefinitionJs = require("./pattern/input-definition.js");
var _regexpJs = require("./regexp.js");
/** Pattern mask */ class RepeatBlock extends (0, _patternJsDefault.default) {
    get repeatFrom() {
        var _ref;
        return (_ref = Array.isArray(this.repeat) ? this.repeat[0] : this.repeat === Infinity ? 0 : this.repeat) != null ? _ref : 0;
    }
    get repeatTo() {
        var _ref2;
        return (_ref2 = Array.isArray(this.repeat) ? this.repeat[1] : this.repeat) != null ? _ref2 : Infinity;
    }
    constructor(opts){
        super(opts);
    }
    updateOptions(opts) {
        super.updateOptions(opts);
    }
    _update(opts) {
        var _ref3, _ref4, _this$_blocks;
        const { repeat, ...blockOpts } = (0, _factoryJs.normalizeOpts)(opts); // TODO type
        this._blockOpts = Object.assign({}, this._blockOpts, blockOpts);
        const block = (0, _factoryJsDefault.default)(this._blockOpts);
        this.repeat = (_ref3 = (_ref4 = repeat != null ? repeat : block.repeat) != null ? _ref4 : this.repeat) != null ? _ref3 : Infinity; // TODO type
        super._update({
            mask: "m".repeat(Math.max(this.repeatTo === Infinity && ((_this$_blocks = this._blocks) == null ? void 0 : _this$_blocks.length) || 0, this.repeatFrom)),
            blocks: {
                m: block
            },
            eager: block.eager,
            overwrite: block.overwrite,
            skipInvalid: block.skipInvalid,
            lazy: block.lazy,
            placeholderChar: block.placeholderChar,
            displayChar: block.displayChar
        });
    }
    _allocateBlock(bi) {
        if (bi < this._blocks.length) return this._blocks[bi];
        if (this.repeatTo === Infinity || this._blocks.length < this.repeatTo) {
            this._blocks.push((0, _factoryJsDefault.default)(this._blockOpts));
            this.mask += "m";
            return this._blocks[this._blocks.length - 1];
        }
    }
    _appendCharRaw(ch, flags) {
        if (flags === void 0) flags = {};
        const details = new (0, _changeDetailsJsDefault.default)();
        for(let bi = (_this$_mapPosToBlock$ = (_this$_mapPosToBlock = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : _this$_mapPosToBlock.index) != null ? _this$_mapPosToBlock$ : Math.max(this._blocks.length - 1, 0), block, allocated; // try to get a block or
        // try to allocate a new block if not allocated already
        block = (_this$_blocks$bi = this._blocks[bi]) != null ? _this$_blocks$bi : allocated = !allocated && this._allocateBlock(bi); ++bi){
            var _this$_mapPosToBlock$, _this$_mapPosToBlock, _this$_blocks$bi, _flags$_beforeTailSta;
            const blockDetails = block._appendChar(ch, {
                ...flags,
                _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) == null || (_flags$_beforeTailSta = _flags$_beforeTailSta._blocks) == null ? void 0 : _flags$_beforeTailSta[bi]
            });
            if (blockDetails.skip && allocated) {
                // remove the last allocated block and break
                this._blocks.pop();
                this.mask = this.mask.slice(1);
                break;
            }
            details.aggregate(blockDetails);
            if (blockDetails.consumed) break; // go next char
        }
        return details;
    }
    _trimEmptyTail(fromPos, toPos) {
        var _this$_mapPosToBlock2, _this$_mapPosToBlock3;
        if (fromPos === void 0) fromPos = 0;
        const firstBlockIndex = Math.max(((_this$_mapPosToBlock2 = this._mapPosToBlock(fromPos)) == null ? void 0 : _this$_mapPosToBlock2.index) || 0, this.repeatFrom, 0);
        let lastBlockIndex;
        if (toPos != null) lastBlockIndex = (_this$_mapPosToBlock3 = this._mapPosToBlock(toPos)) == null ? void 0 : _this$_mapPosToBlock3.index;
        if (lastBlockIndex == null) lastBlockIndex = this._blocks.length - 1;
        let removeCount = 0;
        for(let blockIndex = lastBlockIndex; firstBlockIndex <= blockIndex; --blockIndex, ++removeCount){
            if (this._blocks[blockIndex].unmaskedValue) break;
        }
        if (removeCount) {
            this._blocks.splice(lastBlockIndex - removeCount + 1, removeCount);
            this.mask = this.mask.slice(removeCount);
        }
    }
    reset() {
        super.reset();
        this._trimEmptyTail();
    }
    remove(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.displayValue.length;
        const removeDetails = super.remove(fromPos, toPos);
        this._trimEmptyTail(fromPos, toPos);
        return removeDetails;
    }
    totalInputPositions(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos == null && this.repeatTo === Infinity) return Infinity;
        return super.totalInputPositions(fromPos, toPos);
    }
    get state() {
        return super.state;
    }
    set state(state) {
        this._blocks.length = state._blocks.length;
        this.mask = this.mask.slice(0, this._blocks.length);
        super.state = state;
    }
}
(0, _holderJsDefault.default).RepeatBlock = RepeatBlock;

},{"../core/change-details.js":"cDdFe","../core/holder.js":"fNs7n","./factory.js":"4c29b","./pattern.js":"edg1G","../core/utils.js":"hh2Rx","./base.js":"i9dza","../core/continuous-tail-details.js":"5MbDY","./pattern/chunk-tail-details.js":"a8Q24","./pattern/cursor.js":"1K9Ff","./pattern/fixed-definition.js":"fnLC7","./pattern/input-definition.js":"lGvsS","./regexp.js":"7B25G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8bDoD","3cYfC"], "3cYfC", "parcelRequirefc40")

//# sourceMappingURL=index.b8fca702.js.map
