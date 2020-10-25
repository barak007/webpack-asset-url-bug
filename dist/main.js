(() => {
  "use strict";
  var t = {
      107: (t, r, e) => {
        t.exports = e.p + "ffaf9a4d42c81bfdb595.jpg";
      },
    },
    r = {};
  function e(o) {
    if (r[o]) return r[o].exports;
    var n = (r[o] = { exports: {} });
    return t[o](n, n.exports, e), n.exports;
  }
  (e.m = t),
    (e.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (e.o = (t, r) => Object.prototype.hasOwnProperty.call(t, r)),
    (() => {
      var t;
      e.g.importScripts && (t = e.g.location + "");
      var r = e.g.document;
      if (!t && r && (r.currentScript && (t = r.currentScript.src), !t)) {
        var o = r.getElementsByTagName("script");
        o.length && (t = o[o.length - 1].src);
      }
      if (!t)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (t = t
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (e.p = t);
    })(),
    (e.b = document.baseURI || self.location.href),
    new URL(e(107), e.b);
})();
