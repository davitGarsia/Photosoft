(() => {
  "use strict";
  var e = {
      843: (e, t, r) => {
        r.d(t, { Z: () => n });
        var o = r(645),
          u = r.n(o)()(function (e) {
            return e[1];
          });
        u.push([e.id, "", ""]);
        const n = u;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var r = e(t);
                return t[2] ? "@media ".concat(t[2], " {").concat(r, "}") : r;
              }).join("");
            }),
            (t.i = function (e, r, o) {
              "string" == typeof e && (e = [[null, e, ""]]);
              var u = {};
              if (o)
                for (var n = 0; n < this.length; n++) {
                  var c = this[n][0];
                  null != c && (u[c] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var s = [].concat(e[l]);
                (o && u[s[0]]) ||
                  (r &&
                    (s[2]
                      ? (s[2] = "".concat(r, " and ").concat(s[2]))
                      : (s[2] = r)),
                  t.push(s));
              }
            }),
            t
          );
        };
      },
      734: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e, t) {
            if (t.length < e)
              throw new TypeError(
                e +
                  " argument" +
                  (e > 1 ? "s" : "") +
                  " required, but only " +
                  t.length +
                  " present"
              );
          }),
          (e.exports = t.default);
      },
      84: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            if (null === e || !0 === e || !1 === e) return NaN;
            var t = Number(e);
            return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
          }),
          (e.exports = t.default);
      },
      514: (e, t, r) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            (0, n.default)(1, arguments);
            var t = (0, u.default)(e);
            return (0, o.default)(1e3 * t);
          });
        var o = c(r(171)),
          u = c(r(84)),
          n = c(r(734));
        function c(e) {
          return e && e.__esModule ? e : { default: e };
        }
        e.exports = t.default;
      },
      171: (e, t, r) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            (0, u.default)(1, arguments);
            var t = Object.prototype.toString.call(e);
            return e instanceof Date ||
              ("object" == typeof e && "[object Date]" === t)
              ? new Date(e.getTime())
              : "number" == typeof e || "[object Number]" === t
              ? new Date(e)
              : (("string" != typeof e && "[object String]" !== t) ||
                  "undefined" == typeof console ||
                  (console.warn(
                    "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"
                  ),
                  console.warn(new Error().stack)),
                new Date(NaN));
          });
        var o,
          u = (o = r(734)) && o.__esModule ? o : { default: o };
        e.exports = t.default;
      },
      379: (e, t, r) => {
        var o,
          u = (function () {
            var e = {};
            return function (t) {
              if (void 0 === e[t]) {
                var r = document.querySelector(t);
                if (
                  window.HTMLIFrameElement &&
                  r instanceof window.HTMLIFrameElement
                )
                  try {
                    r = r.contentDocument.head;
                  } catch (e) {
                    r = null;
                  }
                e[t] = r;
              }
              return e[t];
            };
          })(),
          n = [];
        function c(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function l(e, t) {
          for (var r = {}, o = [], u = 0; u < e.length; u++) {
            var l = e[u],
              s = t.base ? l[0] + t.base : l[0],
              a = r[s] || 0,
              i = "".concat(s, " ").concat(a);
            r[s] = a + 1;
            var d = c(i),
              y = { css: l[1], media: l[2], sourceMap: l[3] };
            -1 !== d
              ? (n[d].references++, n[d].updater(y))
              : n.push({ identifier: i, updater: m(y, t), references: 1 }),
              o.push(i);
          }
          return o;
        }
        function s(e) {
          var t = document.createElement("style"),
            o = e.attributes || {};
          if (void 0 === o.nonce) {
            var n = r.nc;
            n && (o.nonce = n);
          }
          if (
            (Object.keys(o).forEach(function (e) {
              t.setAttribute(e, o[e]);
            }),
            "function" == typeof e.insert)
          )
            e.insert(t);
          else {
            var c = u(e.insert || "head");
            if (!c)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            c.appendChild(t);
          }
          return t;
        }
        var a,
          i =
            ((a = []),
            function (e, t) {
              return (a[e] = t), a.filter(Boolean).join("\n");
            });
        function d(e, t, r, o) {
          var u = r
            ? ""
            : o.media
            ? "@media ".concat(o.media, " {").concat(o.css, "}")
            : o.css;
          if (e.styleSheet) e.styleSheet.cssText = i(t, u);
          else {
            var n = document.createTextNode(u),
              c = e.childNodes;
            c[t] && e.removeChild(c[t]),
              c.length ? e.insertBefore(n, c[t]) : e.appendChild(n);
          }
        }
        function y(e, t, r) {
          var o = r.css,
            u = r.media,
            n = r.sourceMap;
          if (
            (u ? e.setAttribute("media", u) : e.removeAttribute("media"),
            n &&
              "undefined" != typeof btoa &&
              (o +=
                "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
                  " */"
                )),
            e.styleSheet)
          )
            e.styleSheet.cssText = o;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(o));
          }
        }
        var h = null,
          f = 0;
        function m(e, t) {
          var r, o, u;
          if (t.singleton) {
            var n = f++;
            (r = h || (h = s(t))),
              (o = d.bind(null, r, n, !1)),
              (u = d.bind(null, r, n, !0));
          } else
            (r = s(t)),
              (o = y.bind(null, r, t)),
              (u = function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(r);
              });
          return (
            o(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap
                )
                  return;
                o((e = t));
              } else u();
            }
          );
        }
        e.exports = function (e, t) {
          (t = t || {}).singleton ||
            "boolean" == typeof t.singleton ||
            (t.singleton =
              (void 0 === o &&
                (o = Boolean(
                  window && document && document.all && !window.atob
                )),
              o));
          var r = l((e = e || []), t);
          return function (e) {
            if (
              ((e = e || []),
              "[object Array]" === Object.prototype.toString.call(e))
            ) {
              for (var o = 0; o < r.length; o++) {
                var u = c(r[o]);
                n[u].references--;
              }
              for (var s = l(e, t), a = 0; a < r.length; a++) {
                var i = c(r[a]);
                0 === n[i].references && (n[i].updater(), n.splice(i, 1));
              }
              r = s;
            }
          };
        };
      },
    },
    t = {};
  function r(o) {
    if (t[o]) return t[o].exports;
    var u = (t[o] = { id: o, exports: {} });
    return e[o](u, u.exports, r), u.exports;
  }
  (r.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (var o in t)
        r.o(t, o) &&
          !r.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = r(379),
        t = r.n(e),
        o = r(843);
      t()(o.Z, { insert: "head", singleton: !1 }), o.Z.locals;
      var u = r(514),
        n = r.n(u);
      function c(e, t, r = "full") {
        const o = n()(e + t).toUTCString();
        let u = o.slice(0, 3),
          c = o.slice(5, 7);
        const l = o.slice(8, 11),
          s = o.slice(14, 16);
        let a;
        return (
          c < 10 && (c = c.slice(1)),
          (a =
            "1" === c.slice(-1)
              ? "st"
              : "2" === c.slice(-1)
              ? "nd"
              : "3" === c.slice(-1)
              ? "rd"
              : "th"),
          c > 3 && c < 21 && (a = "th"),
          "Mon" === u
            ? (u = "Monday")
            : "Tue" === u
            ? (u = "Tuesday")
            : "Wed" === u
            ? (u = "Wednesday")
            : "Thu" === u
            ? (u = "Thursday")
            : "Fri" === u
            ? (u = "Friday")
            : "Sat" === u
            ? (u = "Saturday")
            : "Sun" === u && (u = "Sunday"),
          "day" === r ? u : `${u}, ${c}${a} ${l} '${s}`
        );
      }
      function l(e, t, r = "full") {
        const o = n()(e + t).toUTCString();
        let u = o.slice(17, 19);
        const c = o.slice(20, 22);
        let l;
        return (
          (l = u > 11 ? "pm" : "am"),
          u > 12 && (u -= 12),
          u < 10 && "am" === l && (u = u.slice(1, 2)),
          "0" === u && (u = 12),
          "hour" === r ? `${u} ${l}` : `${u}:${c} ${l}`
        );
      }
      function s(e) {
        return "01d" === e
          ? '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="3 3 26 26">\n    <title>sun</title>\n    <path d="M16 9c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7c0-3.859-3.141-7-7-7zM16 21c-2.762 0-5-2.238-5-5s2.238-5 5-5 5 2.238 5 5-2.238 5-5 5zM16 7c0.552 0 1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2c0 0.552 0.448 1 1 1zM16 25c-0.552 0-1 0.448-1 1v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.552-0.448-1-1-1zM23.777 9.635l1.414-1.414c0.391-0.391 0.391-1.023 0-1.414s-1.023-0.391-1.414 0l-1.414 1.414c-0.391 0.391-0.391 1.023 0 1.414s1.023 0.391 1.414 0zM8.223 22.365l-1.414 1.414c-0.391 0.391-0.391 1.023 0 1.414s1.023 0.391 1.414 0l1.414-1.414c0.391-0.392 0.391-1.023 0-1.414s-1.023-0.392-1.414 0zM7 16c0-0.552-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1h2c0.552 0 1-0.448 1-1zM28 15h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1h2c0.552 0 1-0.448 1-1s-0.448-1-1-1zM8.221 9.635c0.391 0.391 1.024 0.391 1.414 0s0.391-1.023 0-1.414l-1.414-1.414c-0.391-0.391-1.023-0.391-1.414 0s-0.391 1.023 0 1.414l1.414 1.414zM23.779 22.363c-0.392-0.391-1.023-0.391-1.414 0s-0.392 1.023 0 1.414l1.414 1.414c0.391 0.391 1.023 0.391 1.414 0s0.391-1.023 0-1.414l-1.414-1.414z"/>\n    </svg>'
          : "01n" === e
          ? '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="8.21 8.21 15.57 15.57">\n    <title>moon</title>\n    <path d="M21.866 21.447c-3.117 3.12-8.193 3.12-11.313 0s-3.12-8.195 0-11.314c0.826-0.824 1.832-1.453 2.989-1.863 0.365-0.128 0.768-0.035 1.039 0.237 0.274 0.273 0.366 0.677 0.237 1.039-0.784 2.211-0.25 4.604 1.391 6.245 1.638 1.639 4.031 2.172 6.245 1.391 0.362-0.129 0.767-0.036 1.039 0.237 0.273 0.271 0.365 0.676 0.236 1.039-0.408 1.157-1.038 2.164-1.863 2.989zM11.967 11.547c-2.34 2.34-2.34 6.147 0 8.486 2.5 2.501 6.758 2.276 8.937-0.51-2.247 0.141-4.461-0.671-6.109-2.318s-2.458-3.861-2.318-6.108c-0.18 0.141-0.35 0.29-0.51 0.451z"/>\n    </svg>'
          : "02d" === e
          ? '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 0 32 32">\n    <title>cloudy-day</title>\n    <path d="M13 4c0.552 0 1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2c0 0.552 0.448 1 1 1zM20.777 6.635l1.414-1.414c0.391-0.391 0.391-1.023 0-1.414s-1.023-0.391-1.414 0l-1.414 1.414c-0.391 0.391-0.391 1.023 0 1.414s1.023 0.391 1.414 0zM1 14h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1zM22 13c0 0.552 0.448 1 1 1h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1zM5.221 6.635c0.391 0.391 1.024 0.391 1.414 0s0.391-1.023 0-1.414l-1.414-1.414c-0.391-0.391-1.023-0.391-1.414 0s-0.391 1.023 0 1.414l1.414 1.414zM25 16c-0.332 0-0.66 0.023-0.987 0.070-1.048-1.43-2.445-2.521-4.029-3.219-0.081-3.789-3.176-6.852-6.984-6.852-3.859 0-7 3.141-7 7 0 1.090 0.271 2.109 0.719 3.027-3.727 0.152-6.719 3.211-6.719 6.973 0 3.859 3.141 7 7 7 0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7s-3.141-7-7-7zM13 8c2.488 0 4.535 1.823 4.919 4.203-0.626-0.125-1.266-0.203-1.919-0.203-2.871 0-5.531 1.238-7.398 3.328-0.371-0.698-0.602-1.482-0.602-2.328 0-2.762 2.238-5 5-5zM25 28c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.484 0 0.941 0.091 1.383 0.221 0.176 0.049 0.354 0.089 0.52 0.158 0.273-0.535 0.617-1.025 0.999-1.484 1.461-1.758 3.634-2.895 6.099-2.895 0.633 0 1.24 0.091 1.828 0.232 0.66 0.156 1.284 0.393 1.865 0.706 1.456 0.773 2.651 1.971 3.404 3.441 0.587-0.242 1.229-0.379 1.904-0.379 2.762 0 5 2.238 5 5s-2.238 5-5 5z"/>\n    </svg>'
          : "02n" === e
          ? '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 2.42 32 29.57">\n    <title>cloudy-night</title>\n    <path d="M27.191 16.385c0.305-0.227 0.613-0.449 0.889-0.725 0.826-0.827 1.454-1.833 1.862-2.991 0.13-0.362 0.038-0.768-0.236-1.039-0.272-0.273-0.676-0.366-1.039-0.237-2.212 0.781-4.605 0.25-6.244-1.391-1.641-1.641-2.174-4.033-1.391-6.244 0.128-0.363 0.036-0.767-0.237-1.040-0.271-0.271-0.676-0.365-1.039-0.237-1.159 0.411-2.164 1.039-2.99 1.864-2.096 2.094-2.749 5.063-2.030 7.737-2.703 0.345-5.133 1.781-6.751 3.987-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7 0-3.090-2.026-5.689-4.809-6.615zM18.182 5.76c0.159-0.161 0.329-0.311 0.509-0.452-0.141 2.249 0.671 4.461 2.319 6.108 1.648 1.648 3.861 2.458 6.109 2.319-0.862 1.099-2.050 1.783-3.32 2.074-1.711-2.172-4.225-3.539-6.997-3.762-0.767-2.122-0.318-4.59 1.38-6.288zM25 28c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.137 1.902 0.379 1.262-2.46 3.734-4.181 6.645-4.346 0.152-0.009 0.301-0.033 0.453-0.033 0.807 0 1.582 0.126 2.313 0.349 0.987 0.302 1.887 0.794 2.668 1.428 0.746 0.605 1.371 1.348 1.863 2.181 0.083 0.141 0.177 0.273 0.253 0.421 0.587-0.242 1.229-0.379 1.904-0.379 2.762 0 5 2.238 5 5s-2.238 5-5 5z"/>\n    </svg>'
          : "03d" === e || "03n" === e
          ? '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 6 32 20">\n    <title>cloud</title>\n    <path d="M25 10c-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070s-6.145 1.526-8.013 4.070c-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7s-3.141-7-7-7zM25 22c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.138 1.902 0.38 1.327-2.588 3.991-4.38 7.098-4.38s5.771 1.792 7.096 4.38c0.587-0.242 1.229-0.38 1.904-0.38 2.762 0 5 2.238 5 5s-2.238 5-5 5z"/>\n    </svg>'
          : "04d" === e || "04n" === e
          ? '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 6.57 32 25.43">\n    <title>cloudy</title>\n    <path d="M32 15c0-3.073-2.5-5.572-5.573-5.572-0.15 0-0.298 0.007-0.447 0.018-1.445-1.803-3.624-2.874-5.98-2.874-2.355 0-4.535 1.070-5.98 2.874-0.148-0.012-0.298-0.018-0.449-0.018-3.070-0-5.57 2.499-5.57 5.572 0 0.322 0.043 0.631 0.094 0.94-0.034 0.044-0.074 0.085-0.107 0.13-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7 0-1.605-0.565-3.068-1.479-4.25 0.911-0.994 1.479-2.302 1.479-3.75zM25 28c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.137 1.902 0.379 0.035-0.066 0.078-0.125 0.113-0.189 0.352-0.642 0.785-1.23 1.292-1.753 1.443-1.495 3.448-2.438 5.693-2.438 3.107 0 5.771 1.792 7.096 4.379 0.353-0.145 0.729-0.238 1.117-0.301l0.787-0.078c0.771 0 1.492 0.19 2.145 0.5 0.707 0.338 1.314 0.836 1.79 1.449 0.656 0.845 1.065 1.897 1.065 3.051 0 2.762-2.238 5-5 5zM29.098 17.352c-1.155-0.841-2.563-1.352-4.098-1.352-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070-2.133 0-4.145 0.69-5.809 1.896 0.467-1.428 1.796-2.467 3.379-2.467 0.484 0 0.941 0.098 1.359 0.271 0.949-1.848 2.852-3.126 5.070-3.126s4.122 1.279 5.068 3.126c0.421-0.173 0.88-0.271 1.359-0.271 1.974 0 3.573 1.599 3.573 3.572 0 0.905-0.348 1.721-0.902 2.351z"/>\n    </svg>'
          : "09d" === e || "09n" === e || "10d" === e || "10n" === e
          ? '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 0 32 32">\n    <title>rainy</title>\n    <path d="M25 4c-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070s-6.145 1.526-8.013 4.070c-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7s-3.141-7-7-7zM25 16c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.138 1.902 0.38 1.327-2.588 3.991-4.38 7.098-4.38s5.771 1.792 7.096 4.38c0.587-0.242 1.229-0.38 1.904-0.38 2.762 0 5 2.238 5 5s-2.238 5-5 5zM14.063 30c0 1.105 0.895 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4zM22 28c0 1.105 0.895 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4zM6 24c0 1.105 0.894 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4z"/>\n    </svg>'
          : "11d" === e || "11n" === e
          ? '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 0 32 32">\n    <title>lightning</title>\n    <path d="M12 24l2 2-2 6 6-6-2-2 2-4-6 4zM32 8.427c0-3.072-2.5-5.57-5.573-5.57-0.15 0-0.298 0.005-0.447 0.017-1.445-1.802-3.624-2.874-5.98-2.874-2.355 0-4.535 1.072-5.98 2.874-0.148-0.012-0.298-0.017-0.449-0.017-3.070 0-5.57 2.499-5.57 5.57 0 0.322 0.043 0.633 0.094 0.94-0.034 0.044-0.074 0.085-0.107 0.13-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 0.069 0.060 0.151 0.102 0.221 0.16l1.77-1.18c-0.59-0.418-1.141-0.883-1.602-1.438-0.813 0.572-1.801 0.915-2.871 0.915-2.762 0-5-2.237-5-5 0-2.76 2.238-5 5-5 0.676 0 1.316 0.138 1.902 0.38 0.035-0.068 0.078-0.125 0.113-0.19 0.352-0.642 0.785-1.229 1.292-1.753 1.443-1.493 3.448-2.438 5.693-2.438 3.107 0 5.771 1.792 7.096 4.38 0.353-0.146 0.729-0.24 1.117-0.302l0.787-0.078c0.771 0 1.492 0.19 2.145 0.5 0.707 0.339 1.314 0.836 1.79 1.45 0.656 0.845 1.065 1.896 1.065 3.050 0 2.763-2.238 5-5 5-1.070 0-2.057-0.344-2.871-0.915-0.875 1.055-2.027 1.848-3.322 2.348l-0.374 0.746 1.141 1.141c1.066-0.415 2.064-1.012 2.944-1.777 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7 0-1.604-0.565-3.068-1.479-4.25 0.911-0.992 1.479-2.301 1.479-3.75zM29.098 10.779c-1.155-0.84-2.563-1.352-4.098-1.352-0.332 0-0.66 0.023-0.987 0.070-1.867-2.543-4.814-4.070-8.013-4.070-2.133 0-4.145 0.691-5.809 1.897 0.467-1.428 1.796-2.467 3.379-2.467 0.484 0 0.941 0.098 1.359 0.271 0.949-1.849 2.852-3.128 5.070-3.128s4.122 1.279 5.068 3.128c0.421-0.173 0.88-0.271 1.359-0.271 1.974 0 3.573 1.599 3.573 3.57 0 0.906-0.348 1.723-0.902 2.352z"/>\n    </svg>'
          : "13d" === e || "13n" === e
          ? '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0.5 1 47.01 47.01">\n    <title>snow</title>\n    <path d="M14.5 24.502c0 1 0.16 1.97 0.44 2.871l-4.080 2.35-7.26-1.94c-1.31-0.35-2.66 0.43-3.020 1.729-0.35 1.311 0.43 2.65 1.75 3l5.87 1.57-1.58 5.84c-0.35 1.301 0.43 2.65 1.74 3 1.32 0.35 2.67-0.43 3.020-1.738l1.94-7.221 4.27-2.451c1.11 1.010 2.46 1.771 3.95 2.172v5.5l-5.32 4.488c-0.96 0.99-0.96 2.59 0 3.59 0.96 0.99 2.52 0.99 3.48 0l4.3-4.439 4.3 4.439c0.96 0.99 2.52 0.99 3.479 0 0.961-1 0.961-2.6 0-3.59l-5.319-4.488v-5.5c1.49-0.4 2.84-1.162 3.95-2.172l4.27 2.451 1.94 7.221c0.35 1.309 1.699 2.088 3.020 1.738 1.311-0.35 2.091-1.699 1.74-3l-1.58-5.84 5.87-1.57c1.32-0.35 2.1-1.689 1.75-3-0.359-1.299-1.71-2.078-3.020-1.729l-7.261 1.939-4.079-2.35c0.279-0.9 0.439-1.871 0.439-2.871s-0.16-1.97-0.439-2.88l4.079-2.34 7.261 1.94c1.31 0.35 2.66-0.431 3.020-1.73 0.35-1.31-0.43-2.65-1.75-3l-5.87-1.57 1.58-5.84c0.351-1.3-0.43-2.649-1.74-3-1.32-0.35-2.67 0.43-3.020 1.74l-1.94 7.22-4.27 2.45c-1.11-1.010-2.46-1.77-3.95-2.17v-4.5l5.319-5.49c0.961-0.99 0.961-2.59 0-3.59-0.96-0.99-2.52-0.99-3.479 0l-4.3 4.442-4.3-4.44c-0.96-0.99-2.52-0.99-3.48 0-0.96 1-0.96 2.6 0 3.59l5.32 5.49v4.5c-1.49 0.4-2.84 1.16-3.95 2.17l-4.27-2.45-1.94-7.22c-0.35-1.311-1.7-2.090-3.020-1.74-1.31 0.351-2.090 1.7-1.74 3l1.58 5.84-5.87 1.57c-1.32 0.35-2.1 1.69-1.75 3 0.36 1.3 1.71 2.080 3.020 1.73l7.26-1.94 4.080 2.34c-0.28 0.91-0.44 1.879-0.44 2.879zM24 29.002c-2.49 0-4.5-2.010-4.5-4.5s2.010-4.5 4.5-4.5 4.5 2.010 4.5 4.5c0 2.49-2.010 4.5-4.5 4.5z"/>\n    </svg>'
          : "50d" === e || "50n" === e
          ? '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="1.94 5.94 30 18">\n    <title>mist</title>\n    <path d="M30.938 13.938h-5.102c-0.504-4.487-4.277-8-8.898-8-3.113 0-5.859 1.591-7.477 4h-6.523c-0.552 0-1 0.448-1 1s0.448 1 1 1h5.552c-0.226 0.638-0.374 1.306-0.45 2h-3.102c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.102c0.077 0.693 0.224 1.363 0.45 2h-5.37c-0.654 0-1.182 0.448-1.182 1s0.529 1 1.182 1h6.341c1.617 2.41 4.363 4 7.477 4s5.859-1.59 7.477-4h2.341c0.654 0 1.182-0.448 1.182-1s-0.529-1-1.182-1h-1.37c0.227-0.637 0.372-1.307 0.451-2h5.102c0.552 0 1-0.448 1-1s-0.448-1-1-1zM10.639 11.938h6.298c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4.884c1.263-1.233 2.983-2 4.884-2 3.518 0 6.409 2.617 6.898 6h-13.797c0.102-0.707 0.302-1.378 0.6-2zM16.938 21.938c-1.901 0-3.621-0.768-4.884-2h9.767c-1.262 1.232-2.982 2-4.883 2zM23.234 17.938h-12.595c-0.298-0.622-0.499-1.293-0.6-2h13.797c-0.102 0.707-0.302 1.378-0.602 2z"/>\n    </svg>'
          : "";
      }
      function a(e) {
        const t = document.querySelectorAll(".forecast-hourly"),
          r = document.querySelectorAll(".dot"),
          o = document.querySelector(".dot1"),
          u = document.querySelector(".dot2"),
          n = document.querySelector(".dot3");
        t.forEach((e) => {
          e.style.display = "none";
        }),
          r.forEach((e) => {
            e.classList.remove("dot-selected");
          }),
          1 === e &&
            ((document.querySelector("#current-hour-plus-1").style.display =
              "flex"),
            (document.querySelector("#current-hour-plus-2").style.display =
              "flex"),
            (document.querySelector("#current-hour-plus-3").style.display =
              "flex"),
            (document.querySelector("#current-hour-plus-4").style.display =
              "flex"),
            (document.querySelector("#current-hour-plus-5").style.display =
              "flex"),
            (document.querySelector("#current-hour-plus-6").style.display =
              "flex"),
            (document.querySelector("#current-hour-plus-7").style.display =
              "flex"),
            (document.querySelector("#current-hour-plus-8").style.display =
              "flex"),
            o.classList.add("dot-selected")),
          2 === e &&
            ((document.querySelector("#current-hour-plus-9").style.display =
              "flex"),
            (document.querySelector("#current-hour-plus-10").style.display =
              "flex"),
            (document.querySelector("#current-hour-plus-11").style.display =
              "flex"),
            (document.querySelector("#current-hour-plus-12").style.display =
              "flex"),
            (document.querySelector("#current-hour-plus-13").style.display =
              "flex"),
            (document.querySelector("#current-hour-plus-14").style.display =
              "flex"),
            (document.querySelector("#current-hour-plus-15").style.display =
              "flex"),
            (document.querySelector("#current-hour-plus-16").style.display =
              "flex"),
            u.classList.add("dot-selected")),
          3 === e &&
            ((document.querySelector("#current-hour-plus-17").style.display =
              "flex"),
            (document.querySelector("#current-hour-plus-18").style.display =
              "flex"),
            (document.querySelector("#current-hour-plus-19").style.display =
              "flex"),
            (document.querySelector("#current-hour-plus-20").style.display =
              "flex"),
            (document.querySelector("#current-hour-plus-21").style.display =
              "flex"),
            (document.querySelector("#current-hour-plus-22").style.display =
              "flex"),
            (document.querySelector("#current-hour-plus-23").style.display =
              "flex"),
            (document.querySelector("#current-hour-plus-24").style.display =
              "flex"),
            n.classList.add("dot-selected"));
      }
      const i = document.querySelector(".search-box-input"),
        d = document.querySelector(".search"),
        y = document.querySelector(".weather-info__units-f"),
        h = document.querySelector(".weather-info__units-c");
      let f = "metric";
      const m = document.querySelector(".daily-btn"),
        p = document.querySelector(".hourly-btn"),
        _ = document.querySelector(".change-hours__left"),
        S = document.querySelector(".change-hours__right"),
        q = document.querySelectorAll(".dot");
      let x = 1,
        v = !1,
        w = "auckland";
      async function M(e, t = !1) {
        try {
          let r;
          if (
            ((r = t
              ? "auckland"
              : (function () {
                  const e = document.querySelector(".search-box-input").value;
                  return e
                    ? e
                        .replace(/(\s+$|^\s+)/g, "")
                        .replace(/(,\s+)/g, ",")
                        .replace(/(\s+,)/g, ",")
                        .replace(/\s+/g, "+")
                    : "";
                })()),
            !r)
          )
            return;
          v && (r = w), (w = r);
          const o = (function (e) {
              return `https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=20f7632ffc2c022654e4093c6947b4f4`;
            })(r),
            u = await (async function (e) {
              const t = await fetch(e),
                r = await t.json(),
                { coord: o } = r;
              return (o.name = r.name), (o.country = r.sys.country), o;
            })(o),
            n = (function (e, t) {
              return `https://api.openweathermap.org/data/2.5/onecall?lat=${e.lat}&lon=${e.lon}&exclude=minutely,alerts&units=${t}&appid=20f7632ffc2c022654e4093c6947b4f4`;
            })(u, e),
            a = await (async function (e) {
              const t = await fetch(e);
              return await t.json();
            })(n);
          (a.name = u.name),
            (a.country = u.country),
            (document.querySelector(".error-msg").style.visibility = "hidden"),
            (function (e, t) {
              !(function (e, t) {
                let r = "°C";
                "imperial" === t && (r = "°F"),
                  (document.querySelector(
                    ".weather-info__description"
                  ).textContent = (function (e) {
                    const t = e.toLowerCase().split(" ");
                    for (let e = 0; e < t.length; e++)
                      t[e] = t[e].charAt(0).toUpperCase() + t[e].substring(1);
                    return t.join(" ");
                  })(e.current.weather[0].description)),
                  (document.querySelector(".weather-info__city").textContent =
                    e.name),
                  (document.querySelector(".weather-info__date").textContent =
                    c(e.current.dt, e.timezone_offset)),
                  (document.querySelector(".weather-info__time").textContent =
                    l(e.current.dt, e.timezone_offset)),
                  (document.querySelector(
                    ".weather-info__temperature"
                  ).textContent = `${Math.round(e.current.temp)} ${r}`),
                  (document.querySelector(".weather-info__icon").innerHTML = s(
                    e.current.weather[0].icon
                  ));
              })(e, t),
                (function (e, t) {
                  let r = "°C",
                    o = "km/h";
                  "imperial" === t && ((r = "°F"), (o = "mph")),
                    "metric" === t && (e.current.wind_speed *= 3.6),
                    (document.querySelector(
                      "#feels-like"
                    ).textContent = `${Math.round(e.current.feels_like)} ${r}`),
                    (document.querySelector(
                      "#humidity"
                    ).textContent = `${e.current.humidity} %`),
                    (document.querySelector(
                      "#chance-of-rain"
                    ).textContent = `${e.daily[0].pop} %`),
                    (document.querySelector("#wind-speed").textContent = `${
                      Math.round(10 * e.current.wind_speed) / 10
                    } ${o}`);
                })(e, t),
                (function (e, t) {
                  let r = "°C";
                  "imperial" === t && (r = "°F"),
                    (document.querySelector(
                      "#current-day-plus-one .forecast-daily__day"
                    ).textContent = c(e.daily[1].dt, e.timezone_offset, "day")),
                    (document.querySelector(
                      "#current-day-plus-two .forecast-daily__day"
                    ).textContent = c(e.daily[2].dt, e.timezone_offset, "day")),
                    (document.querySelector(
                      "#current-day-plus-three .forecast-daily__day"
                    ).textContent = c(e.daily[3].dt, e.timezone_offset, "day")),
                    (document.querySelector(
                      "#current-day-plus-four .forecast-daily__day"
                    ).textContent = c(e.daily[4].dt, e.timezone_offset, "day")),
                    (document.querySelector(
                      "#current-day-plus-five .forecast-daily__day"
                    ).textContent = c(e.daily[5].dt, e.timezone_offset, "day")),
                    (document.querySelector(
                      "#current-day-plus-six .forecast-daily__day"
                    ).textContent = c(e.daily[6].dt, e.timezone_offset, "day")),
                    (document.querySelector(
                      "#current-day-plus-seven .forecast-daily__day"
                    ).textContent = c(e.daily[7].dt, e.timezone_offset, "day")),
                    (document.querySelector(
                      "#current-day-plus-one .forecast-daily__temperature-high"
                    ).textContent = `${Math.round(e.daily[1].temp.max)} ${r}`),
                    (document.querySelector(
                      "#current-day-plus-two .forecast-daily__temperature-high"
                    ).textContent = `${Math.round(e.daily[2].temp.max)} ${r}`),
                    (document.querySelector(
                      "#current-day-plus-three .forecast-daily__temperature-high"
                    ).textContent = `${Math.round(e.daily[3].temp.max)} ${r}`),
                    (document.querySelector(
                      "#current-day-plus-four .forecast-daily__temperature-high"
                    ).textContent = `${Math.round(e.daily[4].temp.max)} ${r}`),
                    (document.querySelector(
                      "#current-day-plus-five .forecast-daily__temperature-high"
                    ).textContent = `${Math.round(e.daily[5].temp.max)} ${r}`),
                    (document.querySelector(
                      "#current-day-plus-six .forecast-daily__temperature-high"
                    ).textContent = `${Math.round(e.daily[6].temp.max)} ${r}`),
                    (document.querySelector(
                      "#current-day-plus-seven .forecast-daily__temperature-high"
                    ).textContent = `${Math.round(e.daily[7].temp.max)} ${r}`),
                    (document.querySelector(
                      "#current-day-plus-one .forecast-daily__temperature-low"
                    ).textContent = `${Math.round(e.daily[1].temp.min)} ${r}`),
                    (document.querySelector(
                      "#current-day-plus-two .forecast-daily__temperature-low"
                    ).textContent = `${Math.round(e.daily[2].temp.min)} ${r}`),
                    (document.querySelector(
                      "#current-day-plus-three .forecast-daily__temperature-low"
                    ).textContent = `${Math.round(e.daily[3].temp.min)} ${r}`),
                    (document.querySelector(
                      "#current-day-plus-four .forecast-daily__temperature-low"
                    ).textContent = `${Math.round(e.daily[4].temp.min)} ${r}`),
                    (document.querySelector(
                      "#current-day-plus-five .forecast-daily__temperature-low"
                    ).textContent = `${Math.round(e.daily[5].temp.min)} ${r}`),
                    (document.querySelector(
                      "#current-day-plus-six .forecast-daily__temperature-low"
                    ).textContent = `${Math.round(e.daily[6].temp.min)} ${r}`),
                    (document.querySelector(
                      "#current-day-plus-seven .forecast-daily__temperature-low"
                    ).textContent = `${Math.round(e.daily[7].temp.min)} ${r}`),
                    (document.querySelector(
                      "#current-day-plus-one .forecast-daily__icon"
                    ).innerHTML = s(e.daily[1].weather[0].icon)),
                    (document.querySelector(
                      "#current-day-plus-two .forecast-daily__icon"
                    ).innerHTML = s(e.daily[2].weather[0].icon)),
                    (document.querySelector(
                      "#current-day-plus-three .forecast-daily__icon"
                    ).innerHTML = s(e.daily[3].weather[0].icon)),
                    (document.querySelector(
                      "#current-day-plus-four .forecast-daily__icon"
                    ).innerHTML = s(e.daily[4].weather[0].icon)),
                    (document.querySelector(
                      "#current-day-plus-five .forecast-daily__icon"
                    ).innerHTML = s(e.daily[5].weather[0].icon)),
                    (document.querySelector(
                      "#current-day-plus-six .forecast-daily__icon"
                    ).innerHTML = s(e.daily[6].weather[0].icon)),
                    (document.querySelector(
                      "#current-day-plus-seven .forecast-daily__icon"
                    ).innerHTML = s(e.daily[7].weather[0].icon));
                })(e, t),
                (function (e, t) {
                  let r = "°C";
                  "imperial" === t && (r = "°F"),
                    (document.querySelector(
                      "#current-hour-plus-1 .forecast-hourly__day"
                    ).textContent = l(
                      e.hourly[1].dt,
                      e.timezone_offset,
                      "hour"
                    )),
                    (document.querySelector(
                      "#current-hour-plus-2 .forecast-hourly__day"
                    ).textContent = l(
                      e.hourly[2].dt,
                      e.timezone_offset,
                      "hour"
                    )),
                    (document.querySelector(
                      "#current-hour-plus-3 .forecast-hourly__day"
                    ).textContent = l(
                      e.hourly[3].dt,
                      e.timezone_offset,
                      "hour"
                    )),
                    (document.querySelector(
                      "#current-hour-plus-4 .forecast-hourly__day"
                    ).textContent = l(
                      e.hourly[4].dt,
                      e.timezone_offset,
                      "hour"
                    )),
                    (document.querySelector(
                      "#current-hour-plus-5 .forecast-hourly__day"
                    ).textContent = l(
                      e.hourly[5].dt,
                      e.timezone_offset,
                      "hour"
                    )),
                    (document.querySelector(
                      "#current-hour-plus-6 .forecast-hourly__day"
                    ).textContent = l(
                      e.hourly[6].dt,
                      e.timezone_offset,
                      "hour"
                    )),
                    (document.querySelector(
                      "#current-hour-plus-7 .forecast-hourly__day"
                    ).textContent = l(
                      e.hourly[7].dt,
                      e.timezone_offset,
                      "hour"
                    )),
                    (document.querySelector(
                      "#current-hour-plus-8 .forecast-hourly__day"
                    ).textContent = l(
                      e.hourly[8].dt,
                      e.timezone_offset,
                      "hour"
                    )),
                    (document.querySelector(
                      "#current-hour-plus-9 .forecast-hourly__day"
                    ).textContent = l(
                      e.hourly[9].dt,
                      e.timezone_offset,
                      "hour"
                    )),
                    (document.querySelector(
                      "#current-hour-plus-10 .forecast-hourly__day"
                    ).textContent = l(
                      e.hourly[10].dt,
                      e.timezone_offset,
                      "hour"
                    )),
                    (document.querySelector(
                      "#current-hour-plus-11 .forecast-hourly__day"
                    ).textContent = l(
                      e.hourly[11].dt,
                      e.timezone_offset,
                      "hour"
                    )),
                    (document.querySelector(
                      "#current-hour-plus-12 .forecast-hourly__day"
                    ).textContent = l(
                      e.hourly[12].dt,
                      e.timezone_offset,
                      "hour"
                    )),
                    (document.querySelector(
                      "#current-hour-plus-13 .forecast-hourly__day"
                    ).textContent = l(
                      e.hourly[13].dt,
                      e.timezone_offset,
                      "hour"
                    )),
                    (document.querySelector(
                      "#current-hour-plus-14 .forecast-hourly__day"
                    ).textContent = l(
                      e.hourly[14].dt,
                      e.timezone_offset,
                      "hour"
                    )),
                    (document.querySelector(
                      "#current-hour-plus-15 .forecast-hourly__day"
                    ).textContent = l(
                      e.hourly[15].dt,
                      e.timezone_offset,
                      "hour"
                    )),
                    (document.querySelector(
                      "#current-hour-plus-16 .forecast-hourly__day"
                    ).textContent = l(
                      e.hourly[16].dt,
                      e.timezone_offset,
                      "hour"
                    )),
                    (document.querySelector(
                      "#current-hour-plus-17 .forecast-hourly__day"
                    ).textContent = l(
                      e.hourly[17].dt,
                      e.timezone_offset,
                      "hour"
                    )),
                    (document.querySelector(
                      "#current-hour-plus-18 .forecast-hourly__day"
                    ).textContent = l(
                      e.hourly[18].dt,
                      e.timezone_offset,
                      "hour"
                    )),
                    (document.querySelector(
                      "#current-hour-plus-19 .forecast-hourly__day"
                    ).textContent = l(
                      e.hourly[19].dt,
                      e.timezone_offset,
                      "hour"
                    )),
                    (document.querySelector(
                      "#current-hour-plus-20 .forecast-hourly__day"
                    ).textContent = l(
                      e.hourly[20].dt,
                      e.timezone_offset,
                      "hour"
                    )),
                    (document.querySelector(
                      "#current-hour-plus-21 .forecast-hourly__day"
                    ).textContent = l(
                      e.hourly[21].dt,
                      e.timezone_offset,
                      "hour"
                    )),
                    (document.querySelector(
                      "#current-hour-plus-22 .forecast-hourly__day"
                    ).textContent = l(
                      e.hourly[22].dt,
                      e.timezone_offset,
                      "hour"
                    )),
                    (document.querySelector(
                      "#current-hour-plus-23 .forecast-hourly__day"
                    ).textContent = l(
                      e.hourly[23].dt,
                      e.timezone_offset,
                      "hour"
                    )),
                    (document.querySelector(
                      "#current-hour-plus-24 .forecast-hourly__day"
                    ).textContent = l(
                      e.hourly[24].dt,
                      e.timezone_offset,
                      "hour"
                    )),
                    (document.querySelector(
                      "#current-hour-plus-1 .forecast-hourly__temperature-high"
                    ).textContent = `${Math.round(e.hourly[1].temp)} ${r}`),
                    (document.querySelector(
                      "#current-hour-plus-2 .forecast-hourly__temperature-high"
                    ).textContent = `${Math.round(e.hourly[2].temp)} ${r}`),
                    (document.querySelector(
                      "#current-hour-plus-3 .forecast-hourly__temperature-high"
                    ).textContent = `${Math.round(e.hourly[3].temp)} ${r}`),
                    (document.querySelector(
                      "#current-hour-plus-4 .forecast-hourly__temperature-high"
                    ).textContent = `${Math.round(e.hourly[4].temp)} ${r}`),
                    (document.querySelector(
                      "#current-hour-plus-5 .forecast-hourly__temperature-high"
                    ).textContent = `${Math.round(e.hourly[5].temp)} ${r}`),
                    (document.querySelector(
                      "#current-hour-plus-6 .forecast-hourly__temperature-high"
                    ).textContent = `${Math.round(e.hourly[6].temp)} ${r}`),
                    (document.querySelector(
                      "#current-hour-plus-7 .forecast-hourly__temperature-high"
                    ).textContent = `${Math.round(e.hourly[7].temp)} ${r}`),
                    (document.querySelector(
                      "#current-hour-plus-8 .forecast-hourly__temperature-high"
                    ).textContent = `${Math.round(e.hourly[8].temp)} ${r}`),
                    (document.querySelector(
                      "#current-hour-plus-9 .forecast-hourly__temperature-high"
                    ).textContent = `${Math.round(e.hourly[9].temp)} ${r}`),
                    (document.querySelector(
                      "#current-hour-plus-10 .forecast-hourly__temperature-high"
                    ).textContent = `${Math.round(e.hourly[10].temp)} ${r}`),
                    (document.querySelector(
                      "#current-hour-plus-11 .forecast-hourly__temperature-high"
                    ).textContent = `${Math.round(e.hourly[11].temp)} ${r}`),
                    (document.querySelector(
                      "#current-hour-plus-12 .forecast-hourly__temperature-high"
                    ).textContent = `${Math.round(e.hourly[12].temp)} ${r}`),
                    (document.querySelector(
                      "#current-hour-plus-13 .forecast-hourly__temperature-high"
                    ).textContent = `${Math.round(e.hourly[13].temp)} ${r}`),
                    (document.querySelector(
                      "#current-hour-plus-14 .forecast-hourly__temperature-high"
                    ).textContent = `${Math.round(e.hourly[14].temp)} ${r}`),
                    (document.querySelector(
                      "#current-hour-plus-15 .forecast-hourly__temperature-high"
                    ).textContent = `${Math.round(e.hourly[15].temp)} ${r}`),
                    (document.querySelector(
                      "#current-hour-plus-16 .forecast-hourly__temperature-high"
                    ).textContent = `${Math.round(e.hourly[16].temp)} ${r}`),
                    (document.querySelector(
                      "#current-hour-plus-17 .forecast-hourly__temperature-high"
                    ).textContent = `${Math.round(e.hourly[17].temp)} ${r}`),
                    (document.querySelector(
                      "#current-hour-plus-18 .forecast-hourly__temperature-high"
                    ).textContent = `${Math.round(e.hourly[18].temp)} ${r}`),
                    (document.querySelector(
                      "#current-hour-plus-19 .forecast-hourly__temperature-high"
                    ).textContent = `${Math.round(e.hourly[19].temp)} ${r}`),
                    (document.querySelector(
                      "#current-hour-plus-20 .forecast-hourly__temperature-high"
                    ).textContent = `${Math.round(e.hourly[20].temp)} ${r}`),
                    (document.querySelector(
                      "#current-hour-plus-21 .forecast-hourly__temperature-high"
                    ).textContent = `${Math.round(e.hourly[21].temp)} ${r}`),
                    (document.querySelector(
                      "#current-hour-plus-22 .forecast-hourly__temperature-high"
                    ).textContent = `${Math.round(e.hourly[22].temp)} ${r}`),
                    (document.querySelector(
                      "#current-hour-plus-23 .forecast-hourly__temperature-high"
                    ).textContent = `${Math.round(e.hourly[23].temp)} ${r}`),
                    (document.querySelector(
                      "#current-hour-plus-24 .forecast-hourly__temperature-high"
                    ).textContent = `${Math.round(e.hourly[24].temp)} ${r}`),
                    (document.querySelector(
                      "#current-hour-plus-1 .forecast-hourly__icon"
                    ).innerHTML = s(e.hourly[1].weather[0].icon)),
                    (document.querySelector(
                      "#current-hour-plus-2 .forecast-hourly__icon"
                    ).innerHTML = s(e.hourly[2].weather[0].icon)),
                    (document.querySelector(
                      "#current-hour-plus-3 .forecast-hourly__icon"
                    ).innerHTML = s(e.hourly[3].weather[0].icon)),
                    (document.querySelector(
                      "#current-hour-plus-4 .forecast-hourly__icon"
                    ).innerHTML = s(e.hourly[4].weather[0].icon)),
                    (document.querySelector(
                      "#current-hour-plus-5 .forecast-hourly__icon"
                    ).innerHTML = s(e.hourly[5].weather[0].icon)),
                    (document.querySelector(
                      "#current-hour-plus-6 .forecast-hourly__icon"
                    ).innerHTML = s(e.hourly[6].weather[0].icon)),
                    (document.querySelector(
                      "#current-hour-plus-7 .forecast-hourly__icon"
                    ).innerHTML = s(e.hourly[7].weather[0].icon)),
                    (document.querySelector(
                      "#current-hour-plus-8 .forecast-hourly__icon"
                    ).innerHTML = s(e.hourly[8].weather[0].icon)),
                    (document.querySelector(
                      "#current-hour-plus-9 .forecast-hourly__icon"
                    ).innerHTML = s(e.hourly[9].weather[0].icon)),
                    (document.querySelector(
                      "#current-hour-plus-10 .forecast-hourly__icon"
                    ).innerHTML = s(e.hourly[10].weather[0].icon)),
                    (document.querySelector(
                      "#current-hour-plus-11 .forecast-hourly__icon"
                    ).innerHTML = s(e.hourly[11].weather[0].icon)),
                    (document.querySelector(
                      "#current-hour-plus-12 .forecast-hourly__icon"
                    ).innerHTML = s(e.hourly[12].weather[0].icon)),
                    (document.querySelector(
                      "#current-hour-plus-13 .forecast-hourly__icon"
                    ).innerHTML = s(e.hourly[13].weather[0].icon)),
                    (document.querySelector(
                      "#current-hour-plus-14 .forecast-hourly__icon"
                    ).innerHTML = s(e.hourly[14].weather[0].icon)),
                    (document.querySelector(
                      "#current-hour-plus-15 .forecast-hourly__icon"
                    ).innerHTML = s(e.hourly[15].weather[0].icon)),
                    (document.querySelector(
                      "#current-hour-plus-16 .forecast-hourly__icon"
                    ).innerHTML = s(e.hourly[16].weather[0].icon)),
                    (document.querySelector(
                      "#current-hour-plus-17 .forecast-hourly__icon"
                    ).innerHTML = s(e.hourly[17].weather[0].icon)),
                    (document.querySelector(
                      "#current-hour-plus-18 .forecast-hourly__icon"
                    ).innerHTML = s(e.hourly[18].weather[0].icon)),
                    (document.querySelector(
                      "#current-hour-plus-19 .forecast-hourly__icon"
                    ).innerHTML = s(e.hourly[19].weather[0].icon)),
                    (document.querySelector(
                      "#current-hour-plus-20 .forecast-hourly__icon"
                    ).innerHTML = s(e.hourly[20].weather[0].icon)),
                    (document.querySelector(
                      "#current-hour-plus-21 .forecast-hourly__icon"
                    ).innerHTML = s(e.hourly[21].weather[0].icon)),
                    (document.querySelector(
                      "#current-hour-plus-22 .forecast-hourly__icon"
                    ).innerHTML = s(e.hourly[22].weather[0].icon)),
                    (document.querySelector(
                      "#current-hour-plus-23 .forecast-hourly__icon"
                    ).innerHTML = s(e.hourly[23].weather[0].icon)),
                    (document.querySelector(
                      "#current-hour-plus-24 .forecast-hourly__icon"
                    ).innerHTML = s(e.hourly[24].weather[0].icon));
                })(e, t);
            })(a, e),
            (v = !1),
            (document.querySelector("body").style.visibility = "visible");
        } catch (e) {
          document.querySelector(".error-msg").style.visibility = "visible";
        }
        document.querySelector(".search-box-input").value = "";
      }
      (document.querySelector("body").style.visibility = "hidden"),
        M(f, !0),
        d.addEventListener("click", () => {
          M(f);
        }),
        i.addEventListener("keydown", (e) => {
          "Enter" === e.key && M(f);
        }),
        m.addEventListener("click", function () {
          document
            .querySelector(".hourly-btn")
            .classList.toggle("forecast-selected"),
            document
              .querySelector(".daily-btn")
              .classList.toggle("forecast-selected"),
            (document.querySelector(
              ".forecast-hourly-outer-container"
            ).style.display = "none"),
            (document.querySelector(".forecast-daily-container").style.display =
              "flex"),
            (document.querySelector(".change-hours").style.display = "none");
        }),
        p.addEventListener("click", function () {
          document
            .querySelector(".hourly-btn")
            .classList.toggle("forecast-selected"),
            document
              .querySelector(".daily-btn")
              .classList.toggle("forecast-selected"),
            (document.querySelector(".forecast-daily-container").style.display =
              "none"),
            (document.querySelector(
              ".forecast-hourly-outer-container"
            ).style.display = "block"),
            (document.querySelector(".change-hours").style.display = "flex");
        }),
        _.addEventListener("click", () => {
          x > 1 && (x--, a(x));
        }),
        S.addEventListener("click", () => {
          x < 3 && (x++, a(x));
        }),
        q.forEach((e) => {
          e.addEventListener("click", (e) => {
            (x = parseInt(e.target.dataset.dot, 10)), a(x);
          });
        }),
        h.addEventListener("click", async () => {
          (f = "metric"),
            (v = !0),
            await M(f, !0),
            (h.style.display = "none"),
            (y.style.display = "block");
        }),
        y.addEventListener("click", async () => {
          (f = "imperial"),
            (v = !0),
            await M(f, !0),
            (y.style.display = "none"),
            (h.style.display = "block");
        });
    })();
})();
