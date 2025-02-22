var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// .wrangler/tmp/bundle-zutZdU/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
__name(checkURL, "checkURL");
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// .wrangler/tmp/pages-3FJCs6/bundledWorker-0.8330414394578152.mjs
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
import("node:buffer").then(({ Buffer: Buffer2 }) => {
  globalThis.Buffer = Buffer2;
}).catch(() => null);
var __ALSes_PROMISE__ = import("node:async_hooks").then(({ AsyncLocalStorage }) => {
  globalThis.AsyncLocalStorage = AsyncLocalStorage;
  const envAsyncLocalStorage = new AsyncLocalStorage();
  const requestContextAsyncLocalStorage = new AsyncLocalStorage();
  globalThis.process = {
    env: new Proxy(
      {},
      {
        ownKeys: () => Reflect.ownKeys(envAsyncLocalStorage.getStore()),
        getOwnPropertyDescriptor: (_2, ...args) => Reflect.getOwnPropertyDescriptor(envAsyncLocalStorage.getStore(), ...args),
        get: (_2, property) => Reflect.get(envAsyncLocalStorage.getStore(), property),
        set: (_2, property, value) => Reflect.set(envAsyncLocalStorage.getStore(), property, value)
      }
    )
  };
  globalThis[Symbol.for("__cloudflare-request-context__")] = new Proxy(
    {},
    {
      ownKeys: () => Reflect.ownKeys(requestContextAsyncLocalStorage.getStore()),
      getOwnPropertyDescriptor: (_2, ...args) => Reflect.getOwnPropertyDescriptor(requestContextAsyncLocalStorage.getStore(), ...args),
      get: (_2, property) => Reflect.get(requestContextAsyncLocalStorage.getStore(), property),
      set: (_2, property, value) => Reflect.set(requestContextAsyncLocalStorage.getStore(), property, value)
    }
  );
  return { envAsyncLocalStorage, requestContextAsyncLocalStorage };
}).catch(() => null);
var se = Object.create;
var U = Object.defineProperty;
var ae = Object.getOwnPropertyDescriptor;
var re = Object.getOwnPropertyNames;
var ie = Object.getPrototypeOf;
var ne = Object.prototype.hasOwnProperty;
var T = /* @__PURE__ */ __name2((e, t) => () => (e && (t = e(e = 0)), t), "T");
var V = /* @__PURE__ */ __name2((e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), "V");
var oe = /* @__PURE__ */ __name2((e, t, a, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of re(t))
      !ne.call(e, i) && i !== a && U(e, i, { get: () => t[i], enumerable: !(s = ae(t, i)) || s.enumerable });
  return e;
}, "oe");
var F = /* @__PURE__ */ __name2((e, t, a) => (a = e != null ? se(ie(e)) : {}, oe(t || !e || !e.__esModule ? U(a, "default", { value: e, enumerable: true }) : a, e)), "F");
var g;
var l = T(() => {
  g = { collectedLocales: [] };
});
var f;
var u = T(() => {
  f = { version: 3, routes: { none: [{ src: "^/_next/__private/trace$", dest: "/404", status: 404, continue: true }, { src: "^/404/?$", status: 404, continue: true }, { src: "^(?:/((?!\\.well-known(?:/.*)?)(?:[^/]+/)*[^/]+\\.\\w+))/$", headers: { Location: "/$1" }, status: 308, missing: [{ type: "header", key: "x-nextjs-data" }] }, { src: "^(?:/((?!\\.well-known(?:/.*)?)(?:[^/]+/)*[^/\\.]+))$", headers: { Location: "/$1/" }, status: 308 }], filesystem: [{ src: "^/_next/data/(.*)$", dest: "/_next/data/$1", check: true }, { src: "^/_next/data/(.*)$", status: 404 }], miss: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media)/.+$", status: 404, check: true, dest: "$0" }], rewrite: [], resource: [{ src: "^/.*$", status: 404 }], hit: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media|TuupvGusZMFHJrAff\\-p0m)/.+$", headers: { "cache-control": "public,max-age=31536000,immutable" }, continue: true, important: true }], error: [{ status: 404, src: "^.*$", dest: "/404" }] }, overrides: { "404.html": { path: "404", contentType: "text/html; charset=utf-8" }, "404/index.html": { path: "404/index", contentType: "text/html; charset=utf-8" }, "about/index.html": { path: "about/index", contentType: "text/html; charset=utf-8" }, "allies/index.html": { path: "allies/index", contentType: "text/html; charset=utf-8" }, "index.html": { path: "index", contentType: "text/html; charset=utf-8" }, "portfolio/index.html": { path: "portfolio/index", contentType: "text/html; charset=utf-8" } }, framework: { version: "15.1.7" }, crons: [] };
});
var m;
var h = T(() => {
  m = { "/404/index.html": { type: "override", path: "/404/index.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/404.html": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/_next/static/TuupvGusZMFHJrAff-p0m/_buildManifest.js": { type: "static" }, "/_next/static/TuupvGusZMFHJrAff-p0m/_ssgManifest.js": { type: "static" }, "/_next/static/chunks/173-ef8b4a9c06a99680.js": { type: "static" }, "/_next/static/chunks/221-404fe4309964f77f.js": { type: "static" }, "/_next/static/chunks/4bd1b696-927b5d87d2664d33.js": { type: "static" }, "/_next/static/chunks/517-c3c09e21b5760218.js": { type: "static" }, "/_next/static/chunks/565-9007d020a0237e57.js": { type: "static" }, "/_next/static/chunks/app/_not-found/page-d0fbfad21229a527.js": { type: "static" }, "/_next/static/chunks/app/about/page-5baf78899bf29eed.js": { type: "static" }, "/_next/static/chunks/app/allies/page-057ddb9cd7ce8a24.js": { type: "static" }, "/_next/static/chunks/app/layout-fcfac0c2ed091a82.js": { type: "static" }, "/_next/static/chunks/app/not-found-473cd4b57fa24a24.js": { type: "static" }, "/_next/static/chunks/app/page-2aae1e792cad5bb7.js": { type: "static" }, "/_next/static/chunks/app/portfolio/page-5885a8a0f5503799.js": { type: "static" }, "/_next/static/chunks/framework-6b27c2b7aa38af2d.js": { type: "static" }, "/_next/static/chunks/main-2b3ec5760f2b8278.js": { type: "static" }, "/_next/static/chunks/main-app-9573d0cebb762c0d.js": { type: "static" }, "/_next/static/chunks/pages/_app-d23763e3e6c904ff.js": { type: "static" }, "/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js": { type: "static" }, "/_next/static/chunks/polyfills-42372ed130431b0a.js": { type: "static" }, "/_next/static/chunks/webpack-d776d5103da773ec.js": { type: "static" }, "/_next/static/css/01996629a4622d29.css": { type: "static" }, "/_next/static/media/26a46d62cd723877-s.woff2": { type: "static" }, "/_next/static/media/2d141e1a38819612-s.p.woff2": { type: "static" }, "/_next/static/media/55c55f0601d81cf3-s.woff2": { type: "static" }, "/_next/static/media/581909926a08bbc8-s.woff2": { type: "static" }, "/_next/static/media/62328fecf9e80426-s.woff2": { type: "static" }, "/_next/static/media/6d93bde91c0c2823-s.woff2": { type: "static" }, "/_next/static/media/97e0cb1ae144a2a9-s.woff2": { type: "static" }, "/_next/static/media/a34f9d1faa5f3315-s.p.woff2": { type: "static" }, "/_next/static/media/c7eb187887c48af6-s.woff2": { type: "static" }, "/_next/static/media/df0a9ae256c0569c-s.woff2": { type: "static" }, "/_worker.js": { type: "static" }, "/about/index.html": { type: "override", path: "/about/index.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/about/index.txt": { type: "static" }, "/allies/index.html": { type: "override", path: "/allies/index.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/allies/index.txt": { type: "static" }, "/favicon.ico": { type: "static" }, "/file.svg": { type: "static" }, "/globe.svg": { type: "static" }, "/images/badges/bloomberg-logo.svg": { type: "static" }, "/images/badges/forbes-logo.svg": { type: "static" }, "/images/badges/ft-logo.svg": { type: "static" }, "/images/badges/iso-logo.svg": { type: "static" }, "/images/hero-fallback.svg": { type: "static" }, "/images/partners/asia-pacific.svg": { type: "static" }, "/images/partners/crypto-ventures.svg": { type: "static" }, "/images/partners/global-energy.svg": { type: "static" }, "/images/partners/global-ventures.svg": { type: "static" }, "/images/partners/mena-investments.svg": { type: "static" }, "/images/partners/oil-gas-global.svg": { type: "static" }, "/images/partners/placeholder.svg": { type: "static" }, "/images/partners/realestate-prime.svg": { type: "static" }, "/images/partners/strategic-solutions.svg": { type: "static" }, "/images/partners/sustainable-future.svg": { type: "static" }, "/images/partners/tech-innovate.svg": { type: "static" }, "/images/partners/tech-ventures.svg": { type: "static" }, "/images/partners/trade-alliance.svg": { type: "static" }, "/images/portfolio/placeholder.svg": { type: "static" }, "/images/success/energy-success.svg": { type: "static" }, "/images/success/real-estate-success.svg": { type: "static" }, "/images/success/tech-success.svg": { type: "static" }, "/images/team/placeholder.svg": { type: "static" }, "/index.html": { type: "override", path: "/index.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/index.txt": { type: "static" }, "/next.svg": { type: "static" }, "/portfolio/index.html": { type: "override", path: "/portfolio/index.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/portfolio/index.txt": { type: "static" }, "/vercel.svg": { type: "static" }, "/videos/hero-background.mp4": { type: "static" }, "/window.svg": { type: "static" }, "/404": { type: "override", path: "/404/index.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/404/index": { type: "override", path: "/404/index.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/about/index": { type: "override", path: "/about/index.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/about": { type: "override", path: "/about/index.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/allies/index": { type: "override", path: "/allies/index.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/allies": { type: "override", path: "/allies/index.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/index": { type: "override", path: "/index.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/": { type: "override", path: "/index.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/portfolio/index": { type: "override", path: "/portfolio/index.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/portfolio": { type: "override", path: "/portfolio/index.html", headers: { "content-type": "text/html; charset=utf-8" } } };
});
var q = V((Ge, $) => {
  "use strict";
  l();
  u();
  h();
  function R(e, t) {
    e = String(e || "").trim();
    let a = e, s, i = "";
    if (/^[^a-zA-Z\\\s]/.test(e)) {
      s = e[0];
      let o = e.lastIndexOf(s);
      i += e.substring(o + 1), e = e.substring(1, o);
    }
    let r = 0;
    return e = ue(e, (o) => {
      if (/^\(\?[P<']/.test(o)) {
        let c = /^\(\?P?[<']([^>']+)[>']/.exec(o);
        if (!c)
          throw new Error(`Failed to extract named captures from ${JSON.stringify(o)}`);
        let d = o.substring(c[0].length, o.length - 1);
        return t && (t[r] = c[1]), r++, `(${d})`;
      }
      return o.substring(0, 3) === "(?:" || r++, o;
    }), e = e.replace(/\[:([^:]+):\]/g, (o, c) => R.characterClasses[c] || o), new R.PCRE(e, i, a, i, s);
  }
  __name(R, "R");
  __name2(R, "R");
  function ue(e, t) {
    let a = 0, s = 0, i = false;
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      if (i) {
        i = false;
        continue;
      }
      switch (r) {
        case "(":
          s === 0 && (a = n), s++;
          break;
        case ")":
          if (s > 0 && (s--, s === 0)) {
            let o = n + 1, c = a === 0 ? "" : e.substring(0, a), d = e.substring(o), p = String(t(e.substring(a, o)));
            e = c + p + d, n = a;
          }
          break;
        case "\\":
          i = true;
          break;
        default:
          break;
      }
    }
    return e;
  }
  __name(ue, "ue");
  __name2(ue, "ue");
  (function(e) {
    class t extends RegExp {
      constructor(s, i, n, r, o) {
        super(s, i), this.pcrePattern = n, this.pcreFlags = r, this.delimiter = o;
      }
    }
    __name(t, "t");
    __name2(t, "t");
    e.PCRE = t, e.characterClasses = { alnum: "[A-Za-z0-9]", word: "[A-Za-z0-9_]", alpha: "[A-Za-z]", blank: "[ \\t]", cntrl: "[\\x00-\\x1F\\x7F]", digit: "\\d", graph: "[\\x21-\\x7E]", lower: "[a-z]", print: "[\\x20-\\x7E]", punct: "[\\]\\[!\"#$%&'()*+,./:;<=>?@\\\\^_`{|}~-]", space: "\\s", upper: "[A-Z]", xdigit: "[A-Fa-f0-9]" };
  })(R || (R = {}));
  R.prototype = R.PCRE.prototype;
  $.exports = R;
});
var X = V((O) => {
  "use strict";
  l();
  u();
  h();
  O.parse = be;
  O.serialize = Pe;
  var ve = Object.prototype.toString, E = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  function be(e, t) {
    if (typeof e != "string")
      throw new TypeError("argument str must be a string");
    for (var a = {}, s = t || {}, i = s.decode || _e, n = 0; n < e.length; ) {
      var r = e.indexOf("=", n);
      if (r === -1)
        break;
      var o = e.indexOf(";", n);
      if (o === -1)
        o = e.length;
      else if (o < r) {
        n = e.lastIndexOf(";", r - 1) + 1;
        continue;
      }
      var c = e.slice(n, r).trim();
      if (a[c] === void 0) {
        var d = e.slice(r + 1, o).trim();
        d.charCodeAt(0) === 34 && (d = d.slice(1, -1)), a[c] = ke(d, i);
      }
      n = o + 1;
    }
    return a;
  }
  __name(be, "be");
  __name2(be, "be");
  function Pe(e, t, a) {
    var s = a || {}, i = s.encode || Se;
    if (typeof i != "function")
      throw new TypeError("option encode is invalid");
    if (!E.test(e))
      throw new TypeError("argument name is invalid");
    var n = i(t);
    if (n && !E.test(n))
      throw new TypeError("argument val is invalid");
    var r = e + "=" + n;
    if (s.maxAge != null) {
      var o = s.maxAge - 0;
      if (isNaN(o) || !isFinite(o))
        throw new TypeError("option maxAge is invalid");
      r += "; Max-Age=" + Math.floor(o);
    }
    if (s.domain) {
      if (!E.test(s.domain))
        throw new TypeError("option domain is invalid");
      r += "; Domain=" + s.domain;
    }
    if (s.path) {
      if (!E.test(s.path))
        throw new TypeError("option path is invalid");
      r += "; Path=" + s.path;
    }
    if (s.expires) {
      var c = s.expires;
      if (!Ce(c) || isNaN(c.valueOf()))
        throw new TypeError("option expires is invalid");
      r += "; Expires=" + c.toUTCString();
    }
    if (s.httpOnly && (r += "; HttpOnly"), s.secure && (r += "; Secure"), s.priority) {
      var d = typeof s.priority == "string" ? s.priority.toLowerCase() : s.priority;
      switch (d) {
        case "low":
          r += "; Priority=Low";
          break;
        case "medium":
          r += "; Priority=Medium";
          break;
        case "high":
          r += "; Priority=High";
          break;
        default:
          throw new TypeError("option priority is invalid");
      }
    }
    if (s.sameSite) {
      var p = typeof s.sameSite == "string" ? s.sameSite.toLowerCase() : s.sameSite;
      switch (p) {
        case true:
          r += "; SameSite=Strict";
          break;
        case "lax":
          r += "; SameSite=Lax";
          break;
        case "strict":
          r += "; SameSite=Strict";
          break;
        case "none":
          r += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return r;
  }
  __name(Pe, "Pe");
  __name2(Pe, "Pe");
  function _e(e) {
    return e.indexOf("%") !== -1 ? decodeURIComponent(e) : e;
  }
  __name(_e, "_e");
  __name2(_e, "_e");
  function Se(e) {
    return encodeURIComponent(e);
  }
  __name(Se, "Se");
  __name2(Se, "Se");
  function Ce(e) {
    return ve.call(e) === "[object Date]" || e instanceof Date;
  }
  __name(Ce, "Ce");
  __name2(Ce, "Ce");
  function ke(e, t) {
    try {
      return t(e);
    } catch {
      return e;
    }
  }
  __name(ke, "ke");
  __name2(ke, "ke");
});
l();
u();
h();
l();
u();
h();
l();
u();
h();
var b = "INTERNAL_SUSPENSE_CACHE_HOSTNAME.local";
l();
u();
h();
l();
u();
h();
l();
u();
h();
l();
u();
h();
var D = F(q());
function C(e, t, a) {
  if (t == null)
    return { match: null, captureGroupKeys: [] };
  let s = a ? "" : "i", i = [];
  return { match: (0, D.default)(`%${e}%${s}`, i).exec(t), captureGroupKeys: i };
}
__name(C, "C");
__name2(C, "C");
function P(e, t, a, { namedOnly: s } = {}) {
  return e.replace(/\$([a-zA-Z0-9_]+)/g, (i, n) => {
    let r = a.indexOf(n);
    return s && r === -1 ? i : (r === -1 ? t[parseInt(n, 10)] : t[r + 1]) || "";
  });
}
__name(P, "P");
__name2(P, "P");
function L(e, { url: t, cookies: a, headers: s, routeDest: i }) {
  switch (e.type) {
    case "host":
      return { valid: t.hostname === e.value };
    case "header":
      return e.value !== void 0 ? I(e.value, s.get(e.key), i) : { valid: s.has(e.key) };
    case "cookie": {
      let n = a[e.key];
      return n && e.value !== void 0 ? I(e.value, n, i) : { valid: n !== void 0 };
    }
    case "query":
      return e.value !== void 0 ? I(e.value, t.searchParams.get(e.key), i) : { valid: t.searchParams.has(e.key) };
  }
}
__name(L, "L");
__name2(L, "L");
function I(e, t, a) {
  let { match: s, captureGroupKeys: i } = C(e, t);
  return a && s && i.length ? { valid: !!s, newRouteDest: P(a, s, i, { namedOnly: true }) } : { valid: !!s };
}
__name(I, "I");
__name2(I, "I");
l();
u();
h();
function j(e) {
  let t = new Headers(e.headers);
  return e.cf && (t.set("x-vercel-ip-city", encodeURIComponent(e.cf.city)), t.set("x-vercel-ip-country", e.cf.country), t.set("x-vercel-ip-country-region", e.cf.regionCode), t.set("x-vercel-ip-latitude", e.cf.latitude), t.set("x-vercel-ip-longitude", e.cf.longitude)), t.set("x-vercel-sc-host", b), new Request(e, { headers: t });
}
__name(j, "j");
__name2(j, "j");
l();
u();
h();
function x(e, t, a) {
  let s = t instanceof Headers ? t.entries() : Object.entries(t);
  for (let [i, n] of s) {
    let r = i.toLowerCase(), o = a?.match ? P(n, a.match, a.captureGroupKeys) : n;
    r === "set-cookie" ? e.append(r, o) : e.set(r, o);
  }
}
__name(x, "x");
__name2(x, "x");
function _(e) {
  return /^https?:\/\//.test(e);
}
__name(_, "_");
__name2(_, "_");
function w(e, t) {
  for (let [a, s] of t.entries()) {
    let i = /^nxtP(.+)$/.exec(a), n = /^nxtI(.+)$/.exec(a);
    i?.[1] ? (e.set(a, s), e.set(i[1], s)) : n?.[1] ? e.set(n[1], s.replace(/(\(\.+\))+/, "")) : (!e.has(a) || !!s && !e.getAll(a).includes(s)) && e.append(a, s);
  }
}
__name(w, "w");
__name2(w, "w");
function A(e, t) {
  let a = new URL(t, e.url);
  return w(a.searchParams, new URL(e.url).searchParams), a.pathname = a.pathname.replace(/\/index.html$/, "/").replace(/\.html$/, ""), new Request(a, e);
}
__name(A, "A");
__name2(A, "A");
function S(e) {
  return new Response(e.body, e);
}
__name(S, "S");
__name2(S, "S");
function H(e) {
  return e.split(",").map((t) => {
    let [a, s] = t.split(";"), i = parseFloat((s ?? "q=1").replace(/q *= */gi, ""));
    return [a.trim(), isNaN(i) ? 1 : i];
  }).sort((t, a) => a[1] - t[1]).map(([t]) => t === "*" || t === "" ? [] : t).flat();
}
__name(H, "H");
__name2(H, "H");
l();
u();
h();
function N(e) {
  switch (e) {
    case "none":
      return "filesystem";
    case "filesystem":
      return "rewrite";
    case "rewrite":
      return "resource";
    case "resource":
      return "miss";
    default:
      return "miss";
  }
}
__name(N, "N");
__name2(N, "N");
async function k(e, { request: t, assetsFetcher: a, ctx: s }, { path: i, searchParams: n }) {
  let r, o = new URL(t.url);
  w(o.searchParams, n);
  let c = new Request(o, t);
  try {
    switch (e?.type) {
      case "function":
      case "middleware": {
        let d = await import(e.entrypoint);
        try {
          r = await d.default(c, s);
        } catch (p) {
          let y = p;
          throw y.name === "TypeError" && y.message.endsWith("default is not a function") ? new Error(`An error occurred while evaluating the target edge function (${e.entrypoint})`) : p;
        }
        break;
      }
      case "override": {
        r = S(await a.fetch(A(c, e.path ?? i))), e.headers && x(r.headers, e.headers);
        break;
      }
      case "static": {
        r = await a.fetch(A(c, i));
        break;
      }
      default:
        r = new Response("Not Found", { status: 404 });
    }
  } catch (d) {
    return console.error(d), new Response("Internal Server Error", { status: 500 });
  }
  return S(r);
}
__name(k, "k");
__name2(k, "k");
function B(e, t) {
  let a = "^//?(?:", s = ")/(.*)$";
  return !e.startsWith(a) || !e.endsWith(s) ? false : e.slice(a.length, -s.length).split("|").every((n) => t.has(n));
}
__name(B, "B");
__name2(B, "B");
l();
u();
h();
function he(e, { protocol: t, hostname: a, port: s, pathname: i }) {
  return !(t && e.protocol.replace(/:$/, "") !== t || !new RegExp(a).test(e.hostname) || s && !new RegExp(s).test(e.port) || i && !new RegExp(i).test(e.pathname));
}
__name(he, "he");
__name2(he, "he");
function de(e, t) {
  if (e.method !== "GET")
    return;
  let { origin: a, searchParams: s } = new URL(e.url), i = s.get("url"), n = Number.parseInt(s.get("w") ?? "", 10), r = Number.parseInt(s.get("q") ?? "75", 10);
  if (!i || Number.isNaN(n) || Number.isNaN(r) || !t?.sizes?.includes(n) || r < 0 || r > 100)
    return;
  let o = new URL(i, a);
  if (o.pathname.endsWith(".svg") && !t?.dangerouslyAllowSVG)
    return;
  let c = i.startsWith("//"), d = i.startsWith("/") && !c;
  if (!d && !t?.domains?.includes(o.hostname) && !t?.remotePatterns?.find((v) => he(o, v)))
    return;
  let p = e.headers.get("Accept") ?? "", y = t?.formats?.find((v) => p.includes(v))?.replace("image/", "");
  return { isRelative: d, imageUrl: o, options: { width: n, quality: r, format: y } };
}
__name(de, "de");
__name2(de, "de");
function pe(e, t, a) {
  let s = new Headers();
  if (a?.contentSecurityPolicy && s.set("Content-Security-Policy", a.contentSecurityPolicy), a?.contentDispositionType) {
    let n = t.pathname.split("/").pop(), r = n ? `${a.contentDispositionType}; filename="${n}"` : a.contentDispositionType;
    s.set("Content-Disposition", r);
  }
  e.headers.has("Cache-Control") || s.set("Cache-Control", `public, max-age=${a?.minimumCacheTTL ?? 60}`);
  let i = S(e);
  return x(i.headers, s), i;
}
__name(pe, "pe");
__name2(pe, "pe");
async function G(e, { buildOutput: t, assetsFetcher: a, imagesConfig: s }) {
  let i = de(e, s);
  if (!i)
    return new Response("Invalid image resizing request", { status: 400 });
  let { isRelative: n, imageUrl: r } = i, c = await (n && r.pathname in t ? a.fetch.bind(a) : fetch)(r);
  return pe(c, r, s);
}
__name(G, "G");
__name2(G, "G");
l();
u();
h();
l();
u();
h();
var fe = "x-vercel-cache-tags";
var me = "x-next-cache-soft-tags";
var ge = Symbol.for("__cloudflare-request-context__");
async function z(e) {
  let t = `https://${b}/v1/suspense-cache/`;
  if (!e.url.startsWith(t))
    return null;
  try {
    let a = new URL(e.url), s = await ye();
    if (a.pathname === "/v1/suspense-cache/revalidate") {
      let n = a.searchParams.get("tags")?.split(",") ?? [];
      for (let r of n)
        await s.revalidateTag(r);
      return new Response(null, { status: 200 });
    }
    let i = a.pathname.replace("/v1/suspense-cache/", "");
    if (!i.length)
      return new Response("Invalid cache key", { status: 400 });
    switch (e.method) {
      case "GET": {
        let n = K(e, me), r = await s.get(i, { softTags: n });
        return r ? new Response(JSON.stringify(r.value), { status: 200, headers: { "Content-Type": "application/json", "x-vercel-cache-state": "fresh", age: `${(Date.now() - (r.lastModified ?? Date.now())) / 1e3}` } }) : new Response(null, { status: 404 });
      }
      case "POST": {
        let n = globalThis[ge], r = /* @__PURE__ */ __name2(async () => {
          let o = await e.json();
          o.data.tags === void 0 && (o.tags ??= K(e, fe) ?? []), await s.set(i, o);
        }, "r");
        return n ? n.ctx.waitUntil(r()) : await r(), new Response(null, { status: 200 });
      }
      default:
        return new Response(null, { status: 405 });
    }
  } catch (a) {
    return console.error(a), new Response("Error handling cache request", { status: 500 });
  }
}
__name(z, "z");
__name2(z, "z");
async function ye() {
  return process.env.__NEXT_ON_PAGES__KV_SUSPENSE_CACHE ? W("kv") : W("cache-api");
}
__name(ye, "ye");
__name2(ye, "ye");
async function W(e) {
  let a = await import(`./__next-on-pages-dist__/cache/${e}.js`);
  return new a.default();
}
__name(W, "W");
__name2(W, "W");
function K(e, t) {
  return e.headers.get(t)?.split(",")?.filter(Boolean);
}
__name(K, "K");
__name2(K, "K");
function Z() {
  globalThis[J] || (xe(), globalThis[J] = true);
}
__name(Z, "Z");
__name2(Z, "Z");
function xe() {
  let e = globalThis.fetch;
  globalThis.fetch = async (...t) => {
    let a = new Request(...t), s = await we(a);
    return s || (s = await z(a), s) ? s : (Re(a), e(a));
  };
}
__name(xe, "xe");
__name2(xe, "xe");
async function we(e) {
  if (e.url.startsWith("blob:"))
    try {
      let s = (await import(`./__next-on-pages-dist__/assets/${new URL(e.url).pathname}.bin`)).default, i = { async arrayBuffer() {
        return s;
      }, get body() {
        return new ReadableStream({ start(n) {
          let r = Buffer.from(s);
          n.enqueue(r), n.close();
        } });
      }, async text() {
        return Buffer.from(s).toString();
      }, async json() {
        let n = Buffer.from(s);
        return JSON.stringify(n.toString());
      }, async blob() {
        return new Blob(s);
      } };
      return i.clone = () => ({ ...i }), i;
    } catch {
    }
  return null;
}
__name(we, "we");
__name2(we, "we");
function Re(e) {
  e.headers.has("user-agent") || e.headers.set("user-agent", "Next.js Middleware");
}
__name(Re, "Re");
__name2(Re, "Re");
var J = Symbol.for("next-on-pages fetch patch");
l();
u();
h();
var Q = F(X());
var M = /* @__PURE__ */ __name2(class {
  constructor(t, a, s, i, n) {
    this.routes = t;
    this.output = a;
    this.reqCtx = s;
    this.url = new URL(s.request.url), this.cookies = (0, Q.parse)(s.request.headers.get("cookie") || ""), this.path = this.url.pathname || "/", this.headers = { normal: new Headers(), important: new Headers() }, this.searchParams = new URLSearchParams(), w(this.searchParams, this.url.searchParams), this.checkPhaseCounter = 0, this.middlewareInvoked = [], this.wildcardMatch = n?.find((r) => r.domain === this.url.hostname), this.locales = new Set(i.collectedLocales);
  }
  url;
  cookies;
  wildcardMatch;
  path;
  status;
  headers;
  searchParams;
  body;
  checkPhaseCounter;
  middlewareInvoked;
  locales;
  checkRouteMatch(t, { checkStatus: a, checkIntercept: s }) {
    let i = C(t.src, this.path, t.caseSensitive);
    if (!i.match || t.methods && !t.methods.map((r) => r.toUpperCase()).includes(this.reqCtx.request.method.toUpperCase()))
      return;
    let n = { url: this.url, cookies: this.cookies, headers: this.reqCtx.request.headers, routeDest: t.dest };
    if (!t.has?.find((r) => {
      let o = L(r, n);
      return o.newRouteDest && (n.routeDest = o.newRouteDest), !o.valid;
    }) && !t.missing?.find((r) => L(r, n).valid) && !(a && t.status !== this.status)) {
      if (s && t.dest) {
        let r = /\/(\(\.+\))+/, o = r.test(t.dest), c = r.test(this.path);
        if (o && !c)
          return;
      }
      return { routeMatch: i, routeDest: n.routeDest };
    }
  }
  processMiddlewareResp(t) {
    let a = "x-middleware-override-headers", s = t.headers.get(a);
    if (s) {
      let c = new Set(s.split(",").map((d) => d.trim()));
      for (let d of c.keys()) {
        let p = `x-middleware-request-${d}`, y = t.headers.get(p);
        this.reqCtx.request.headers.get(d) !== y && (y ? this.reqCtx.request.headers.set(d, y) : this.reqCtx.request.headers.delete(d)), t.headers.delete(p);
      }
      t.headers.delete(a);
    }
    let i = "x-middleware-rewrite", n = t.headers.get(i);
    if (n) {
      let c = new URL(n, this.url), d = this.url.hostname !== c.hostname;
      this.path = d ? `${c}` : c.pathname, w(this.searchParams, c.searchParams), t.headers.delete(i);
    }
    let r = "x-middleware-next";
    t.headers.get(r) ? t.headers.delete(r) : !n && !t.headers.has("location") ? (this.body = t.body, this.status = t.status) : t.headers.has("location") && t.status >= 300 && t.status < 400 && (this.status = t.status), x(this.reqCtx.request.headers, t.headers), x(this.headers.normal, t.headers), this.headers.middlewareLocation = t.headers.get("location");
  }
  async runRouteMiddleware(t) {
    if (!t)
      return true;
    let a = t && this.output[t];
    if (!a || a.type !== "middleware")
      return this.status = 500, false;
    let s = await k(a, this.reqCtx, { path: this.path, searchParams: this.searchParams, headers: this.headers, status: this.status });
    return this.middlewareInvoked.push(t), s.status === 500 ? (this.status = s.status, false) : (this.processMiddlewareResp(s), true);
  }
  applyRouteOverrides(t) {
    !t.override || (this.status = void 0, this.headers.normal = new Headers(), this.headers.important = new Headers());
  }
  applyRouteHeaders(t, a, s) {
    !t.headers || (x(this.headers.normal, t.headers, { match: a, captureGroupKeys: s }), t.important && x(this.headers.important, t.headers, { match: a, captureGroupKeys: s }));
  }
  applyRouteStatus(t) {
    !t.status || (this.status = t.status);
  }
  applyRouteDest(t, a, s) {
    if (!t.dest)
      return this.path;
    let i = this.path, n = t.dest;
    this.wildcardMatch && /\$wildcard/.test(n) && (n = n.replace(/\$wildcard/g, this.wildcardMatch.value)), this.path = P(n, a, s);
    let r = /\/index\.rsc$/i.test(this.path), o = /^\/(?:index)?$/i.test(i), c = /^\/__index\.prefetch\.rsc$/i.test(i);
    r && !o && !c && (this.path = i);
    let d = /\.rsc$/i.test(this.path), p = /\.prefetch\.rsc$/i.test(this.path), y = this.path in this.output;
    d && !p && !y && (this.path = this.path.replace(/\.rsc/i, ""));
    let v = new URL(this.path, this.url);
    return w(this.searchParams, v.searchParams), _(this.path) || (this.path = v.pathname), i;
  }
  applyLocaleRedirects(t) {
    if (!t.locale?.redirect || !/^\^(.)*$/.test(t.src) && t.src !== this.path || this.headers.normal.has("location"))
      return;
    let { locale: { redirect: s, cookie: i } } = t, n = i && this.cookies[i], r = H(n ?? ""), o = H(this.reqCtx.request.headers.get("accept-language") ?? ""), p = [...r, ...o].map((y) => s[y]).filter(Boolean)[0];
    if (p) {
      !this.path.startsWith(p) && (this.headers.normal.set("location", p), this.status = 307);
      return;
    }
  }
  getLocaleFriendlyRoute(t, a) {
    return !this.locales || a !== "miss" ? t : B(t.src, this.locales) ? { ...t, src: t.src.replace(/\/\(\.\*\)\$$/, "(?:/(.*))?$") } : t;
  }
  async checkRoute(t, a) {
    let s = this.getLocaleFriendlyRoute(a, t), { routeMatch: i, routeDest: n } = this.checkRouteMatch(s, { checkStatus: t === "error", checkIntercept: t === "rewrite" }) ?? {}, r = { ...s, dest: n };
    if (!i?.match || r.middlewarePath && this.middlewareInvoked.includes(r.middlewarePath))
      return "skip";
    let { match: o, captureGroupKeys: c } = i;
    if (this.applyRouteOverrides(r), this.applyLocaleRedirects(r), !await this.runRouteMiddleware(r.middlewarePath))
      return "error";
    if (this.body !== void 0 || this.headers.middlewareLocation)
      return "done";
    this.applyRouteHeaders(r, o, c), this.applyRouteStatus(r);
    let p = this.applyRouteDest(r, o, c);
    if (r.check && !_(this.path))
      if (p === this.path) {
        if (t !== "miss")
          return this.checkPhase(N(t));
        this.status = 404;
      } else if (t === "miss") {
        if (!(this.path in this.output) && !(this.path.replace(/\/$/, "") in this.output))
          return this.checkPhase("filesystem");
        this.status === 404 && (this.status = void 0);
      } else
        return this.checkPhase("none");
    return !r.continue || r.status && r.status >= 300 && r.status <= 399 ? "done" : "next";
  }
  async checkPhase(t) {
    if (this.checkPhaseCounter++ >= 50)
      return console.error(`Routing encountered an infinite loop while checking ${this.url.pathname}`), this.status = 500, "error";
    this.middlewareInvoked = [];
    let a = true;
    for (let n of this.routes[t]) {
      let r = await this.checkRoute(t, n);
      if (r === "error")
        return "error";
      if (r === "done") {
        a = false;
        break;
      }
    }
    if (t === "hit" || _(this.path) || this.headers.normal.has("location") || !!this.body)
      return "done";
    if (t === "none")
      for (let n of this.locales) {
        let r = new RegExp(`/${n}(/.*)`), c = this.path.match(r)?.[1];
        if (c && c in this.output) {
          this.path = c;
          break;
        }
      }
    let s = this.path in this.output;
    if (!s && this.path.endsWith("/")) {
      let n = this.path.replace(/\/$/, "");
      s = n in this.output, s && (this.path = n);
    }
    if (t === "miss" && !s) {
      let n = !this.status || this.status < 400;
      this.status = n ? 404 : this.status;
    }
    let i = "miss";
    return s || t === "miss" || t === "error" ? i = "hit" : a && (i = N(t)), this.checkPhase(i);
  }
  async run(t = "none") {
    this.checkPhaseCounter = 0;
    let a = await this.checkPhase(t);
    return this.headers.normal.has("location") && (!this.status || this.status < 300 || this.status >= 400) && (this.status = 307), a;
  }
}, "M");
async function Y(e, t, a, s) {
  let i = new M(t.routes, a, e, s, t.wildcard), n = await ee(i);
  return Ee(e, n, a);
}
__name(Y, "Y");
__name2(Y, "Y");
async function ee(e, t = "none", a = false) {
  return await e.run(t) === "error" || !a && e.status && e.status >= 400 ? ee(e, "error", true) : { path: e.path, status: e.status, headers: e.headers, searchParams: e.searchParams, body: e.body };
}
__name(ee, "ee");
__name2(ee, "ee");
async function Ee(e, { path: t = "/404", status: a, headers: s, searchParams: i, body: n }, r) {
  let o = s.normal.get("location");
  if (o) {
    if (o !== s.middlewareLocation) {
      let p = [...i.keys()].length ? `?${i.toString()}` : "";
      s.normal.set("location", `${o ?? "/"}${p}`);
    }
    return new Response(null, { status: a, headers: s.normal });
  }
  let c;
  if (n !== void 0)
    c = new Response(n, { status: a });
  else if (_(t)) {
    let p = new URL(t);
    w(p.searchParams, i), c = await fetch(p, e.request);
  } else
    c = await k(r[t], e, { path: t, status: a, headers: s, searchParams: i });
  let d = s.normal;
  return x(d, c.headers), x(d, s.important), c = new Response(c.body, { ...c, status: a || c.status, headers: d }), c;
}
__name(Ee, "Ee");
__name2(Ee, "Ee");
l();
u();
h();
function te() {
  globalThis.__nextOnPagesRoutesIsolation ??= { _map: /* @__PURE__ */ new Map(), getProxyFor: Me };
}
__name(te, "te");
__name2(te, "te");
function Me(e) {
  let t = globalThis.__nextOnPagesRoutesIsolation._map.get(e);
  if (t)
    return t;
  let a = Te();
  return globalThis.__nextOnPagesRoutesIsolation._map.set(e, a), a;
}
__name(Me, "Me");
__name2(Me, "Me");
function Te() {
  let e = /* @__PURE__ */ new Map();
  return new Proxy(globalThis, { get: (t, a) => e.has(a) ? e.get(a) : Reflect.get(globalThis, a), set: (t, a, s) => Ie.has(a) ? Reflect.set(globalThis, a, s) : (e.set(a, s), true) });
}
__name(Te, "Te");
__name2(Te, "Te");
var Ie = /* @__PURE__ */ new Set(["_nextOriginalFetch", "fetch", "__incrementalCache"]);
var ms = { async fetch(e, t, a) {
  te(), Z();
  let s = await __ALSes_PROMISE__;
  if (!s) {
    let r = new URL(e.url), o = await t.ASSETS.fetch(`${r.protocol}//${r.host}/cdn-cgi/errors/no-nodejs_compat.html`), c = o.ok ? o.body : "Error: Could not access built-in Node.js modules. Please make sure that your Cloudflare Pages project has the 'nodejs_compat' compatibility flag set.";
    return new Response(c, { status: 503 });
  }
  let { envAsyncLocalStorage: i, requestContextAsyncLocalStorage: n } = s;
  return i.run({ ...t, NODE_ENV: "production", SUSPENSE_CACHE_URL: b }, async () => n.run({ env: t, ctx: a, cf: e.cf }, async () => {
    if (new URL(e.url).pathname.startsWith("/_next/image"))
      return G(e, { buildOutput: m, assetsFetcher: t.ASSETS, imagesConfig: f.images });
    let o = j(e);
    return Y({ request: o, ctx: a, assetsFetcher: t.ASSETS }, f, m, g);
  }));
} };

// node_modules/wrangler/templates/pages-dev-util.ts
function isRoutingRuleMatch(pathname, routingRule) {
  if (!pathname) {
    throw new Error("Pathname is undefined.");
  }
  if (!routingRule) {
    throw new Error("Routing rule is undefined.");
  }
  const ruleRegExp = transformRoutingRuleToRegExp(routingRule);
  return pathname.match(ruleRegExp) !== null;
}
__name(isRoutingRuleMatch, "isRoutingRuleMatch");
function transformRoutingRuleToRegExp(rule) {
  let transformedRule;
  if (rule === "/" || rule === "/*") {
    transformedRule = rule;
  } else if (rule.endsWith("/*")) {
    transformedRule = `${rule.substring(0, rule.length - 2)}(/*)?`;
  } else if (rule.endsWith("/")) {
    transformedRule = `${rule.substring(0, rule.length - 1)}(/)?`;
  } else if (rule.endsWith("*")) {
    transformedRule = rule;
  } else {
    transformedRule = `${rule}(/)?`;
  }
  transformedRule = `^${transformedRule.replaceAll(/\./g, "\\.").replaceAll(/\*/g, ".*")}$`;
  return new RegExp(transformedRule);
}
__name(transformRoutingRuleToRegExp, "transformRoutingRuleToRegExp");

// .wrangler/tmp/pages-3FJCs6/15auv335of.js
var define_ROUTES_default = { version: 1, description: "Built with @cloudflare/next-on-pages@1.13.8.", include: ["/*"], exclude: ["/_next/static/*"] };
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (ms.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return ms.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-zutZdU/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = pages_dev_pipeline_default;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-zutZdU/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
__name(__Facade_ScheduledController__, "__Facade_ScheduledController__");
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
//# sourceMappingURL=15auv335of.js.map
