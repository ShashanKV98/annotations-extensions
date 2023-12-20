function ze() {
}
function kt(e, t) {
  for (const n in t)
    e[n] = t[n];
  return e;
}
function Ot(e) {
  return e();
}
function it() {
  return /* @__PURE__ */ Object.create(null);
}
function _e(e) {
  e.forEach(Ot);
}
function Q(e) {
  return typeof e == "function";
}
function Qe(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function Bt(e) {
  return Object.keys(e).length === 0;
}
function Ft(e, t, n, o) {
  if (e) {
    const r = bt(e, t, n, o);
    return e[0](r);
  }
}
function bt(e, t, n, o) {
  return e[1] && o ? kt(n.ctx.slice(), e[1](o(t))) : n.ctx;
}
function Yt(e, t, n, o) {
  if (e[2] && o) {
    const r = e[2](o(n));
    if (t.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const l = [], a = Math.max(t.dirty.length, r.length);
      for (let u = 0; u < a; u += 1)
        l[u] = t.dirty[u] | r[u];
      return l;
    }
    return t.dirty | r;
  }
  return t.dirty;
}
function Nt(e, t, n, o, r, l) {
  if (r) {
    const a = bt(t, n, o, l);
    e.p(a, r);
  }
}
function jt(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let o = 0; o < n; o++)
      t[o] = -1;
    return t;
  }
  return -1;
}
function D(e, t, n) {
  e.insertBefore(t, n || null);
}
function $(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Xt(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function C(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function Pt(e) {
  return document.createTextNode(e);
}
function x() {
  return Pt(" ");
}
function $t() {
  return Pt("");
}
function Z(e, t, n, o) {
  return e.addEventListener(t, n, o), () => e.removeEventListener(t, n, o);
}
function d(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function Ut(e) {
  return Array.from(e.childNodes);
}
function Dt(e, t, { bubbles: n = !1, cancelable: o = !1 } = {}) {
  const r = document.createEvent("CustomEvent");
  return r.initCustomEvent(e, n, o, t), r;
}
let He;
function Le(e) {
  He = e;
}
function zt() {
  if (!He)
    throw new Error("Function called outside component initialization");
  return He;
}
function Kt() {
  const e = zt();
  return (t, n, { cancelable: o = !1 } = {}) => {
    const r = e.$$.callbacks[t];
    if (r) {
      const l = Dt(t, n, { cancelable: o });
      return r.slice().forEach((a) => {
        a.call(e, l);
      }), !l.defaultPrevented;
    }
    return !0;
  };
}
function Oe(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((o) => o.call(this, t));
}
const Ee = [], lt = [];
let be = [];
const at = [], Vt = /* @__PURE__ */ Promise.resolve();
let Ke = !1;
function qt() {
  Ke || (Ke = !0, Vt.then(St));
}
function Ve(e) {
  be.push(e);
}
const Ue = /* @__PURE__ */ new Set();
let ge = 0;
function St() {
  if (ge !== 0)
    return;
  const e = He;
  do {
    try {
      for (; ge < Ee.length; ) {
        const t = Ee[ge];
        ge++, Le(t), Wt(t.$$);
      }
    } catch (t) {
      throw Ee.length = 0, ge = 0, t;
    }
    for (Le(null), Ee.length = 0, ge = 0; lt.length; )
      lt.pop()();
    for (let t = 0; t < be.length; t += 1) {
      const n = be[t];
      Ue.has(n) || (Ue.add(n), n());
    }
    be.length = 0;
  } while (Ee.length);
  for (; at.length; )
    at.pop()();
  Ke = !1, Ue.clear(), Le(e);
}
function Wt(e) {
  if (e.fragment !== null) {
    e.update(), _e(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Ve);
  }
}
function Jt(e) {
  const t = [], n = [];
  be.forEach((o) => e.indexOf(o) === -1 ? t.push(o) : n.push(o)), n.forEach((o) => o()), be = t;
}
const Fe = /* @__PURE__ */ new Set();
let Qt;
function Ne(e, t) {
  e && e.i && (Fe.delete(e), e.i(t));
}
function Ze(e, t, n, o) {
  if (e && e.o) {
    if (Fe.has(e))
      return;
    Fe.add(e), Qt.c.push(() => {
      Fe.delete(e), o && (n && e.d(1), o());
    }), e.o(t);
  } else
    o && o();
}
function Mt(e) {
  e && e.c();
}
function Ce(e, t, n, o) {
  const { fragment: r, after_update: l } = e.$$;
  r && r.m(t, n), o || Ve(() => {
    const a = e.$$.on_mount.map(Ot).filter(Q);
    e.$$.on_destroy ? e.$$.on_destroy.push(...a) : _e(a), e.$$.on_mount = [];
  }), l.forEach(Ve);
}
function xe(e, t) {
  const n = e.$$;
  n.fragment !== null && (Jt(n.after_update), _e(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Zt(e, t) {
  e.$$.dirty[0] === -1 && (Ee.push(e), qt(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function et(e, t, n, o, r, l, a, u = [-1]) {
  const f = He;
  Le(e);
  const m = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: ze,
    not_equal: r,
    bound: it(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: it(),
    dirty: u,
    skip_bound: !1,
    root: t.target || f.$$.root
  };
  a && a(m.root);
  let w = !1;
  if (m.ctx = n ? n(e, t.props || {}, (y, h, ...i) => {
    const _ = i.length ? i[0] : h;
    return m.ctx && r(m.ctx[y], m.ctx[y] = _) && (!m.skip_bound && m.bound[y] && m.bound[y](_), w && Zt(e, y)), h;
  }) : [], m.update(), w = !0, _e(m.before_update), m.fragment = o ? o(m.ctx) : !1, t.target) {
    if (t.hydrate) {
      const y = Ut(t.target);
      m.fragment && m.fragment.l(y), y.forEach($);
    } else
      m.fragment && m.fragment.c();
    t.intro && Ne(e.$$.fragment), Ce(e, t.target, t.anchor, t.customElement), St();
  }
  Le(f);
}
class tt {
  $destroy() {
    xe(this, 1), this.$destroy = ze;
  }
  $on(t, n) {
    if (!Q(n))
      return ze;
    const o = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return o.push(n), () => {
      const r = o.indexOf(n);
      r !== -1 && o.splice(r, 1);
    };
  }
  $set(t) {
    this.$$set && !Bt(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
var ue = /* @__PURE__ */ ((e) => (e.ELLIPSE = "ELLIPSE", e.POLYGON = "POLYGON", e.RECTANGLE = "RECTANGLE", e))(ue || {});
const nt = (e, t) => t, Ct = (e) => {
  let t = 1 / 0, n = 1 / 0, o = -1 / 0, r = -1 / 0;
  return e.forEach(([l, a]) => {
    t = Math.min(t, l), n = Math.min(n, a), o = Math.max(o, l), r = Math.max(r, a);
  }), { minX: t, minY: n, maxX: o, maxY: r };
}, xt = {
  area: (e) => Math.PI * e.geometry.rx * e.geometry.ry,
  intersects: (e, t, n) => {
    const { cx: o, cy: r, rx: l, ry: a } = e.geometry, u = 0, f = Math.cos(u), m = Math.sin(u), w = t - o, y = n - r, h = f * w + m * y, i = m * w - f * y;
    return h * h / (l * l) + i * i / (a * a) <= 1;
  }
};
nt(ue.ELLIPSE, xt);
const en = {
  area: (e) => {
    const { points: t } = e.geometry;
    let n = 0, o = t.length - 1;
    for (let r = 0; r < t.length; r++)
      n += (t[o][0] + t[r][0]) * (t[o][1] - t[r][1]), o = r;
    return Math.abs(0.5 * n);
  },
  intersects: (e, t, n) => {
    const { points: o } = e.geometry;
    let r = !1;
    for (let l = 0, a = o.length - 1; l < o.length; a = l++) {
      const u = o[l][0], f = o[l][1], m = o[a][0], w = o[a][1];
      f > n != w > n && t < (m - u) * (n - f) / (w - f) + u && (r = !r);
    }
    return r;
  }
};
nt(ue.POLYGON, en);
const tn = {
  area: (e) => e.geometry.w * e.geometry.h,
  intersects: (e, t, n) => t >= e.geometry.x && t <= e.geometry.x + e.geometry.w && n >= e.geometry.y && n <= e.geometry.y + e.geometry.h
};
nt(ue.RECTANGLE, tn);
const nn = [];
for (let e = 0; e < 256; ++e)
  nn.push((e + 256).toString(16).slice(1));
typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
let on = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
on();
function ft(e, t, n) {
  const o = e.slice();
  return o[11] = t[n], o[13] = n, o;
}
function ut(e) {
  let t, n, o, r, l;
  return {
    c() {
      t = C("rect"), d(t, "class", "a9s-corner-handle"), d(t, "x", n = /*point*/
      e[11][0] - /*handleSize*/
      e[3] / 2), d(t, "y", o = /*point*/
      e[11][1] - /*handleSize*/
      e[3] / 2), d(
        t,
        "height",
        /*handleSize*/
        e[3]
      ), d(
        t,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    m(a, u) {
      D(a, t, u), r || (l = Z(t, "pointerdown", function() {
        Q(
          /*grab*/
          e[10](S(
            /*idx*/
            e[13]
          ))
        ) && e[10](S(
          /*idx*/
          e[13]
        )).apply(this, arguments);
      }), r = !0);
    },
    p(a, u) {
      e = a, u & /*geom, handleSize*/
      24 && n !== (n = /*point*/
      e[11][0] - /*handleSize*/
      e[3] / 2) && d(t, "x", n), u & /*geom, handleSize*/
      24 && o !== (o = /*point*/
      e[11][1] - /*handleSize*/
      e[3] / 2) && d(t, "y", o), u & /*handleSize*/
      8 && d(
        t,
        "height",
        /*handleSize*/
        e[3]
      ), u & /*handleSize*/
      8 && d(
        t,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    d(a) {
      a && $(t), r = !1, l();
    }
  };
}
function rn(e) {
  let t, n, o, r, l, a, u, f, m, w, y = (
    /*geom*/
    e[4].points
  ), h = [];
  for (let i = 0; i < y.length; i += 1)
    h[i] = ut(ft(e, y, i));
  return {
    c() {
      t = C("polygon"), r = x(), l = C("polygon"), u = x();
      for (let i = 0; i < h.length; i += 1)
        h[i].c();
      f = $t(), d(t, "class", "a9s-outer"), d(t, "style", n = /*computedStyle*/
      e[1] ? "display:none;" : void 0), d(t, "points", o = /*geom*/
      e[4].points.map(ct).join(" ")), d(l, "class", "a9s-inner a9s-shape-handle"), d(
        l,
        "style",
        /*computedStyle*/
        e[1]
      ), d(l, "points", a = /*geom*/
      e[4].points.map(ht).join(" "));
    },
    m(i, _) {
      D(i, t, _), D(i, r, _), D(i, l, _), D(i, u, _);
      for (let p = 0; p < h.length; p += 1)
        h[p] && h[p].m(i, _);
      D(i, f, _), m || (w = [
        Z(t, "pointerdown", function() {
          Q(
            /*grab*/
            e[10](S.SHAPE)
          ) && e[10](S.SHAPE).apply(this, arguments);
        }),
        Z(l, "pointerdown", function() {
          Q(
            /*grab*/
            e[10](S.SHAPE)
          ) && e[10](S.SHAPE).apply(this, arguments);
        })
      ], m = !0);
    },
    p(i, _) {
      if (e = i, _ & /*computedStyle*/
      2 && n !== (n = /*computedStyle*/
      e[1] ? "display:none;" : void 0) && d(t, "style", n), _ & /*geom*/
      16 && o !== (o = /*geom*/
      e[4].points.map(ct).join(" ")) && d(t, "points", o), _ & /*computedStyle*/
      2 && d(
        l,
        "style",
        /*computedStyle*/
        e[1]
      ), _ & /*geom*/
      16 && a !== (a = /*geom*/
      e[4].points.map(ht).join(" ")) && d(l, "points", a), _ & /*geom, handleSize, grab, Handle*/
      1048) {
        y = /*geom*/
        e[4].points;
        let p;
        for (p = 0; p < y.length; p += 1) {
          const T = ft(e, y, p);
          h[p] ? h[p].p(T, _) : (h[p] = ut(T), h[p].c(), h[p].m(f.parentNode, f));
        }
        for (; p < h.length; p += 1)
          h[p].d(1);
        h.length = y.length;
      }
    },
    d(i) {
      i && $(t), i && $(r), i && $(l), i && $(u), Xt(h, i), i && $(f), m = !1, _e(w);
    }
  };
}
function sn(e) {
  let t, n;
  return t = new Lt({
    props: {
      shape: (
        /*shape*/
        e[0]
      ),
      transform: (
        /*transform*/
        e[2]
      ),
      editor: (
        /*editor*/
        e[5]
      ),
      $$slots: {
        default: [
          rn,
          ({ grab: o }) => ({ 10: o }),
          ({ grab: o }) => o ? 1024 : 0
        ]
      },
      $$scope: { ctx: e }
    }
  }), t.$on(
    "change",
    /*change_handler*/
    e[7]
  ), t.$on(
    "grab",
    /*grab_handler*/
    e[8]
  ), t.$on(
    "release",
    /*release_handler*/
    e[9]
  ), {
    c() {
      Mt(t.$$.fragment);
    },
    m(o, r) {
      Ce(t, o, r), n = !0;
    },
    p(o, [r]) {
      const l = {};
      r & /*shape*/
      1 && (l.shape = /*shape*/
      o[0]), r & /*transform*/
      4 && (l.transform = /*transform*/
      o[2]), r & /*$$scope, geom, handleSize, grab, computedStyle*/
      17434 && (l.$$scope = { dirty: r, ctx: o }), t.$set(l);
    },
    i(o) {
      n || (Ne(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Ze(t.$$.fragment, o), n = !1;
    },
    d(o) {
      xe(t, o);
    }
  };
}
const ct = (e) => e.join(","), ht = (e) => e.join(",");
function ln(e, t, n) {
  let o, r, { shape: l } = t, { computedStyle: a = void 0 } = t, { transform: u } = t, { viewportScale: f = 1 } = t;
  const m = (i, _, p) => {
    let T;
    _ === S.SHAPE ? T = i.geometry.points.map(([L, b]) => [L + p[0], b + p[1]]) : T = i.geometry.points.map(([L, b], A) => _ === S(A) ? [L + p[0], b + p[1]] : [L, b]);
    const P = Ct(T);
    return { ...i, geometry: { points: T, bounds: P } };
  };
  function w(i) {
    Oe.call(this, e, i);
  }
  function y(i) {
    Oe.call(this, e, i);
  }
  function h(i) {
    Oe.call(this, e, i);
  }
  return e.$$set = (i) => {
    "shape" in i && n(0, l = i.shape), "computedStyle" in i && n(1, a = i.computedStyle), "transform" in i && n(2, u = i.transform), "viewportScale" in i && n(6, f = i.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(4, o = l.geometry), e.$$.dirty & /*viewportScale*/
    64 && n(3, r = 10 / f);
  }, [
    l,
    a,
    u,
    r,
    o,
    m,
    f,
    w,
    y,
    h
  ];
}
class an extends tt {
  constructor(t) {
    super(), et(this, t, ln, sn, Qe, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
function fn(e) {
  let t, n, o, r, l, a, u, f, m, w, y, h, i, _, p, T, P, L, b, A, H, k, U, v, O, F, K, W, B, R, M, ee, he, Y, te, ne, de, N, oe, re, pe, j, se, ie, me, X, le, ae, ye, Me;
  return {
    c() {
      t = C("rect"), u = x(), f = C("rect"), i = x(), _ = C("rect"), L = x(), b = C("rect"), U = x(), v = C("rect"), W = x(), B = C("rect"), he = x(), Y = C("rect"), de = x(), N = C("rect"), pe = x(), j = C("rect"), me = x(), X = C("rect"), d(t, "class", "a9s-outer"), d(t, "style", n = /*computedStyle*/
      e[1] ? "display:none;" : void 0), d(t, "x", o = /*geom*/
      e[4].x), d(t, "y", r = /*geom*/
      e[4].y), d(t, "width", l = /*geom*/
      e[4].w), d(t, "height", a = /*geom*/
      e[4].h), d(f, "class", "a9s-inner a9s-shape-handle"), d(
        f,
        "style",
        /*computedStyle*/
        e[1]
      ), d(f, "x", m = /*geom*/
      e[4].x), d(f, "y", w = /*geom*/
      e[4].y), d(f, "width", y = /*geom*/
      e[4].w), d(f, "height", h = /*geom*/
      e[4].h), d(_, "class", "a9s-edge-handle a9s-edge-handle-top"), d(_, "x", p = /*geom*/
      e[4].x), d(_, "y", T = /*geom*/
      e[4].y), d(_, "height", 1), d(_, "width", P = /*geom*/
      e[4].w), d(b, "class", "a9s-edge-handle a9s-edge-handle-right"), d(b, "x", A = /*geom*/
      e[4].x + /*geom*/
      e[4].w), d(b, "y", H = /*geom*/
      e[4].y), d(b, "height", k = /*geom*/
      e[4].h), d(b, "width", 1), d(v, "class", "a9s-edge-handle a9s-edge-handle-bottom"), d(v, "x", O = /*geom*/
      e[4].x), d(v, "y", F = /*geom*/
      e[4].y + /*geom*/
      e[4].h), d(v, "height", 1), d(v, "width", K = /*geom*/
      e[4].w), d(B, "class", "a9s-edge-handle a9s-edge-handle-left"), d(B, "x", R = /*geom*/
      e[4].x), d(B, "y", M = /*geom*/
      e[4].y), d(B, "height", ee = /*geom*/
      e[4].h), d(B, "width", 1), d(Y, "class", "a9s-corner-handle a9s-corner-handle-topleft"), d(Y, "x", te = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2), d(Y, "y", ne = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2), d(
        Y,
        "height",
        /*handleSize*/
        e[3]
      ), d(
        Y,
        "width",
        /*handleSize*/
        e[3]
      ), d(N, "class", "a9s-corner-handle a9s-corner-handle-topright"), d(N, "x", oe = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2), d(N, "y", re = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2), d(
        N,
        "height",
        /*handleSize*/
        e[3]
      ), d(
        N,
        "width",
        /*handleSize*/
        e[3]
      ), d(j, "class", "a9s-corner-handle a9s-corner-handle-bottomright"), d(j, "x", se = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2), d(j, "y", ie = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2), d(
        j,
        "height",
        /*handleSize*/
        e[3]
      ), d(
        j,
        "width",
        /*handleSize*/
        e[3]
      ), d(X, "class", "a9s-corner-handle a9s-corner-handle-bottomleft"), d(X, "x", le = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2), d(X, "y", ae = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2), d(
        X,
        "height",
        /*handleSize*/
        e[3]
      ), d(
        X,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    m(g, c) {
      D(g, t, c), D(g, u, c), D(g, f, c), D(g, i, c), D(g, _, c), D(g, L, c), D(g, b, c), D(g, U, c), D(g, v, c), D(g, W, c), D(g, B, c), D(g, he, c), D(g, Y, c), D(g, de, c), D(g, N, c), D(g, pe, c), D(g, j, c), D(g, me, c), D(g, X, c), ye || (Me = [
        Z(t, "pointerdown", function() {
          Q(
            /*grab*/
            e[10](S.SHAPE)
          ) && e[10](S.SHAPE).apply(this, arguments);
        }),
        Z(f, "pointerdown", function() {
          Q(
            /*grab*/
            e[10](S.SHAPE)
          ) && e[10](S.SHAPE).apply(this, arguments);
        }),
        Z(_, "pointerdown", function() {
          Q(
            /*grab*/
            e[10](S.TOP)
          ) && e[10](S.TOP).apply(this, arguments);
        }),
        Z(b, "pointerdown", function() {
          Q(
            /*grab*/
            e[10](S.RIGHT)
          ) && e[10](S.RIGHT).apply(this, arguments);
        }),
        Z(v, "pointerdown", function() {
          Q(
            /*grab*/
            e[10](S.BOTTOM)
          ) && e[10](S.BOTTOM).apply(this, arguments);
        }),
        Z(B, "pointerdown", function() {
          Q(
            /*grab*/
            e[10](S.LEFT)
          ) && e[10](S.LEFT).apply(this, arguments);
        }),
        Z(Y, "pointerdown", function() {
          Q(
            /*grab*/
            e[10](S.TOP_LEFT)
          ) && e[10](S.TOP_LEFT).apply(this, arguments);
        }),
        Z(N, "pointerdown", function() {
          Q(
            /*grab*/
            e[10](S.TOP_RIGHT)
          ) && e[10](S.TOP_RIGHT).apply(this, arguments);
        }),
        Z(j, "pointerdown", function() {
          Q(
            /*grab*/
            e[10](S.BOTTOM_RIGHT)
          ) && e[10](S.BOTTOM_RIGHT).apply(this, arguments);
        }),
        Z(X, "pointerdown", function() {
          Q(
            /*grab*/
            e[10](S.BOTTOM_LEFT)
          ) && e[10](S.BOTTOM_LEFT).apply(this, arguments);
        })
      ], ye = !0);
    },
    p(g, c) {
      e = g, c & /*computedStyle*/
      2 && n !== (n = /*computedStyle*/
      e[1] ? "display:none;" : void 0) && d(t, "style", n), c & /*geom*/
      16 && o !== (o = /*geom*/
      e[4].x) && d(t, "x", o), c & /*geom*/
      16 && r !== (r = /*geom*/
      e[4].y) && d(t, "y", r), c & /*geom*/
      16 && l !== (l = /*geom*/
      e[4].w) && d(t, "width", l), c & /*geom*/
      16 && a !== (a = /*geom*/
      e[4].h) && d(t, "height", a), c & /*computedStyle*/
      2 && d(
        f,
        "style",
        /*computedStyle*/
        e[1]
      ), c & /*geom*/
      16 && m !== (m = /*geom*/
      e[4].x) && d(f, "x", m), c & /*geom*/
      16 && w !== (w = /*geom*/
      e[4].y) && d(f, "y", w), c & /*geom*/
      16 && y !== (y = /*geom*/
      e[4].w) && d(f, "width", y), c & /*geom*/
      16 && h !== (h = /*geom*/
      e[4].h) && d(f, "height", h), c & /*geom*/
      16 && p !== (p = /*geom*/
      e[4].x) && d(_, "x", p), c & /*geom*/
      16 && T !== (T = /*geom*/
      e[4].y) && d(_, "y", T), c & /*geom*/
      16 && P !== (P = /*geom*/
      e[4].w) && d(_, "width", P), c & /*geom*/
      16 && A !== (A = /*geom*/
      e[4].x + /*geom*/
      e[4].w) && d(b, "x", A), c & /*geom*/
      16 && H !== (H = /*geom*/
      e[4].y) && d(b, "y", H), c & /*geom*/
      16 && k !== (k = /*geom*/
      e[4].h) && d(b, "height", k), c & /*geom*/
      16 && O !== (O = /*geom*/
      e[4].x) && d(v, "x", O), c & /*geom*/
      16 && F !== (F = /*geom*/
      e[4].y + /*geom*/
      e[4].h) && d(v, "y", F), c & /*geom*/
      16 && K !== (K = /*geom*/
      e[4].w) && d(v, "width", K), c & /*geom*/
      16 && R !== (R = /*geom*/
      e[4].x) && d(B, "x", R), c & /*geom*/
      16 && M !== (M = /*geom*/
      e[4].y) && d(B, "y", M), c & /*geom*/
      16 && ee !== (ee = /*geom*/
      e[4].h) && d(B, "height", ee), c & /*geom, handleSize*/
      24 && te !== (te = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2) && d(Y, "x", te), c & /*geom, handleSize*/
      24 && ne !== (ne = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2) && d(Y, "y", ne), c & /*handleSize*/
      8 && d(
        Y,
        "height",
        /*handleSize*/
        e[3]
      ), c & /*handleSize*/
      8 && d(
        Y,
        "width",
        /*handleSize*/
        e[3]
      ), c & /*geom, handleSize*/
      24 && oe !== (oe = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2) && d(N, "x", oe), c & /*geom, handleSize*/
      24 && re !== (re = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2) && d(N, "y", re), c & /*handleSize*/
      8 && d(
        N,
        "height",
        /*handleSize*/
        e[3]
      ), c & /*handleSize*/
      8 && d(
        N,
        "width",
        /*handleSize*/
        e[3]
      ), c & /*geom, handleSize*/
      24 && se !== (se = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2) && d(j, "x", se), c & /*geom, handleSize*/
      24 && ie !== (ie = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2) && d(j, "y", ie), c & /*handleSize*/
      8 && d(
        j,
        "height",
        /*handleSize*/
        e[3]
      ), c & /*handleSize*/
      8 && d(
        j,
        "width",
        /*handleSize*/
        e[3]
      ), c & /*geom, handleSize*/
      24 && le !== (le = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2) && d(X, "x", le), c & /*geom, handleSize*/
      24 && ae !== (ae = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2) && d(X, "y", ae), c & /*handleSize*/
      8 && d(
        X,
        "height",
        /*handleSize*/
        e[3]
      ), c & /*handleSize*/
      8 && d(
        X,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    d(g) {
      g && $(t), g && $(u), g && $(f), g && $(i), g && $(_), g && $(L), g && $(b), g && $(U), g && $(v), g && $(W), g && $(B), g && $(he), g && $(Y), g && $(de), g && $(N), g && $(pe), g && $(j), g && $(me), g && $(X), ye = !1, _e(Me);
    }
  };
}
function un(e) {
  let t, n;
  return t = new Lt({
    props: {
      shape: (
        /*shape*/
        e[0]
      ),
      transform: (
        /*transform*/
        e[2]
      ),
      editor: (
        /*editor*/
        e[5]
      ),
      $$slots: {
        default: [
          fn,
          ({ grab: o }) => ({ 10: o }),
          ({ grab: o }) => o ? 1024 : 0
        ]
      },
      $$scope: { ctx: e }
    }
  }), t.$on(
    "grab",
    /*grab_handler*/
    e[7]
  ), t.$on(
    "change",
    /*change_handler*/
    e[8]
  ), t.$on(
    "release",
    /*release_handler*/
    e[9]
  ), {
    c() {
      Mt(t.$$.fragment);
    },
    m(o, r) {
      Ce(t, o, r), n = !0;
    },
    p(o, [r]) {
      const l = {};
      r & /*shape*/
      1 && (l.shape = /*shape*/
      o[0]), r & /*transform*/
      4 && (l.transform = /*transform*/
      o[2]), r & /*$$scope, geom, handleSize, grab, computedStyle*/
      3098 && (l.$$scope = { dirty: r, ctx: o }), t.$set(l);
    },
    i(o) {
      n || (Ne(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Ze(t.$$.fragment, o), n = !1;
    },
    d(o) {
      xe(t, o);
    }
  };
}
function cn(e, t, n) {
  let o, r, { shape: l } = t, { computedStyle: a = void 0 } = t, { transform: u } = t, { viewportScale: f = 1 } = t;
  const m = (i, _, p) => {
    const T = i.geometry.bounds;
    let [P, L] = [T.minX, T.minY], [b, A] = [T.maxX, T.maxY];
    const [H, k] = p;
    if (_ === S.SHAPE)
      P += H, b += H, L += k, A += k;
    else {
      switch (_) {
        case S.TOP:
        case S.TOP_LEFT:
        case S.TOP_RIGHT: {
          L += k;
          break;
        }
        case S.BOTTOM:
        case S.BOTTOM_LEFT:
        case S.BOTTOM_RIGHT: {
          A += k;
          break;
        }
      }
      switch (_) {
        case S.LEFT:
        case S.TOP_LEFT:
        case S.BOTTOM_LEFT: {
          P += H;
          break;
        }
        case S.RIGHT:
        case S.TOP_RIGHT:
        case S.BOTTOM_RIGHT: {
          b += H;
          break;
        }
      }
    }
    const U = Math.min(P, b), v = Math.min(L, A), O = Math.abs(b - P), F = Math.abs(A - L);
    return {
      ...i,
      geometry: {
        x: U,
        y: v,
        w: O,
        h: F,
        bounds: {
          minX: U,
          minY: v,
          maxX: U + O,
          maxY: v + F
        }
      }
    };
  };
  function w(i) {
    Oe.call(this, e, i);
  }
  function y(i) {
    Oe.call(this, e, i);
  }
  function h(i) {
    Oe.call(this, e, i);
  }
  return e.$$set = (i) => {
    "shape" in i && n(0, l = i.shape), "computedStyle" in i && n(1, a = i.computedStyle), "transform" in i && n(2, u = i.transform), "viewportScale" in i && n(6, f = i.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(4, o = l.geometry), e.$$.dirty & /*viewportScale*/
    64 && n(3, r = 10 / f);
  }, [
    l,
    a,
    u,
    r,
    o,
    m,
    f,
    w,
    y,
    h
  ];
}
class hn extends tt {
  constructor(t) {
    super(), et(this, t, cn, un, Qe, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
ue.RECTANGLE, ue.POLYGON;
const S = (e) => `HANDLE-${e}`;
S.SHAPE = "SHAPE";
S.TOP = "TOP";
S.RIGHT = "RIGHT";
S.BOTTOM = "BOTTOM";
S.LEFT = "LEFT";
S.TOP_LEFT = "TOP_LEFT";
S.TOP_RIGHT = "TOP_RIGHT";
S.BOTTOM_RIGHT = "BOTTOM_RIGHT";
S.BOTTOM_LEFT = "BOTTOM_LEFT";
const dn = (e) => ({}), dt = (e) => ({ grab: (
  /*onGrab*/
  e[0]
) });
function pn(e) {
  let t, n, o, r;
  const l = (
    /*#slots*/
    e[7].default
  ), a = Ft(
    l,
    e,
    /*$$scope*/
    e[6],
    dt
  );
  return {
    c() {
      t = C("g"), a && a.c(), d(t, "class", "a9s-annotation selected");
    },
    m(u, f) {
      D(u, t, f), a && a.m(t, null), n = !0, o || (r = [
        Z(
          t,
          "pointerup",
          /*onRelease*/
          e[2]
        ),
        Z(
          t,
          "pointermove",
          /*onPointerMove*/
          e[1]
        )
      ], o = !0);
    },
    p(u, [f]) {
      a && a.p && (!n || f & /*$$scope*/
      64) && Nt(
        a,
        l,
        u,
        /*$$scope*/
        u[6],
        n ? Yt(
          l,
          /*$$scope*/
          u[6],
          f,
          dn
        ) : jt(
          /*$$scope*/
          u[6]
        ),
        dt
      );
    },
    i(u) {
      n || (Ne(a, u), n = !0);
    },
    o(u) {
      Ze(a, u), n = !1;
    },
    d(u) {
      u && $(t), a && a.d(u), o = !1, _e(r);
    }
  };
}
function mn(e, t, n) {
  let { $$slots: o = {}, $$scope: r } = t;
  const l = Kt();
  let { shape: a } = t, { editor: u } = t, { transform: f } = t, m = null, w, y = null;
  const h = (p) => (T) => {
    m = p, w = f.elementToImage(T.offsetX, T.offsetY), y = a, T.target.setPointerCapture(T.pointerId), l("grab");
  }, i = (p) => {
    if (m) {
      const [T, P] = f.elementToImage(p.offsetX, p.offsetY), L = [T - w[0], P - w[1]];
      n(3, a = u(y, m, L)), l("change", a);
    }
  }, _ = (p) => {
    p.target.releasePointerCapture(p.pointerId), m = null, y = a, l("release");
  };
  return e.$$set = (p) => {
    "shape" in p && n(3, a = p.shape), "editor" in p && n(4, u = p.editor), "transform" in p && n(5, f = p.transform), "$$scope" in p && n(6, r = p.$$scope);
  }, [h, i, _, a, u, f, r, o];
}
class Lt extends tt {
  constructor(t) {
    super(), et(this, t, mn, pn, Qe, { shape: 3, editor: 4, transform: 5 });
  }
}
function Ie() {
}
function yn(e, t) {
  for (const n in t)
    e[n] = t[n];
  return e;
}
function vt(e) {
  return e();
}
function pt() {
  return /* @__PURE__ */ Object.create(null);
}
function ce(e) {
  e.forEach(vt);
}
function V(e) {
  return typeof e == "function";
}
function Re(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function _n(e) {
  return Object.keys(e).length === 0;
}
function gn(e, t, n, o) {
  if (e) {
    const r = Ht(e, t, n, o);
    return e[0](r);
  }
}
function Ht(e, t, n, o) {
  return e[1] && o ? yn(n.ctx.slice(), e[1](o(t))) : n.ctx;
}
function wn(e, t, n, o) {
  if (e[2] && o) {
    const r = e[2](o(n));
    if (t.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const l = [], a = Math.max(t.dirty.length, r.length);
      for (let u = 0; u < a; u += 1)
        l[u] = t.dirty[u] | r[u];
      return l;
    }
    return t.dirty | r;
  }
  return t.dirty;
}
function En(e, t, n, o, r, l) {
  if (r) {
    const a = Ht(t, n, o, l);
    e.p(a, r);
  }
}
function Tn(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let o = 0; o < n; o++)
      t[o] = -1;
    return t;
  }
  return -1;
}
function G(e, t, n) {
  e.insertBefore(t, n || null);
}
function I(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function On(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function z(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function It(e) {
  return document.createTextNode(e);
}
function J() {
  return It(" ");
}
function bn() {
  return It("");
}
function q(e, t, n, o) {
  return e.addEventListener(t, n, o), () => e.removeEventListener(t, n, o);
}
function s(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function Pn(e) {
  return Array.from(e.childNodes);
}
function Sn(e, t, { bubbles: n = !1, cancelable: o = !1 } = {}) {
  const r = document.createEvent("CustomEvent");
  return r.initCustomEvent(e, n, o, t), r;
}
let Ge;
function ve(e) {
  Ge = e;
}
function Gt() {
  if (!Ge)
    throw new Error("Function called outside component initialization");
  return Ge;
}
function Mn(e) {
  Gt().$$.on_mount.push(e);
}
function Rt() {
  const e = Gt();
  return (t, n, { cancelable: o = !1 } = {}) => {
    const r = e.$$.callbacks[t];
    if (r) {
      const l = Sn(t, n, { cancelable: o });
      return r.slice().forEach((a) => {
        a.call(e, l);
      }), !l.defaultPrevented;
    }
    return !0;
  };
}
function fe(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((o) => o.call(this, t));
}
const Te = [], qe = [];
let Pe = [];
const mt = [], Ln = /* @__PURE__ */ Promise.resolve();
let We = !1;
function vn() {
  We || (We = !0, Ln.then(At));
}
function Je(e) {
  Pe.push(e);
}
const De = /* @__PURE__ */ new Set();
let we = 0;
function At() {
  if (we !== 0)
    return;
  const e = Ge;
  do {
    try {
      for (; we < Te.length; ) {
        const t = Te[we];
        we++, ve(t), Hn(t.$$);
      }
    } catch (t) {
      throw Te.length = 0, we = 0, t;
    }
    for (ve(null), Te.length = 0, we = 0; qe.length; )
      qe.pop()();
    for (let t = 0; t < Pe.length; t += 1) {
      const n = Pe[t];
      De.has(n) || (De.add(n), n());
    }
    Pe.length = 0;
  } while (Te.length);
  for (; mt.length; )
    mt.pop()();
  We = !1, De.clear(), ve(e);
}
function Hn(e) {
  if (e.fragment !== null) {
    e.update(), ce(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Je);
  }
}
function In(e) {
  const t = [], n = [];
  Pe.forEach((o) => e.indexOf(o) === -1 ? t.push(o) : n.push(o)), n.forEach((o) => o()), Pe = t;
}
const Ye = /* @__PURE__ */ new Set();
let Gn;
function Ae(e, t) {
  e && e.i && (Ye.delete(e), e.i(t));
}
function je(e, t, n, o) {
  if (e && e.o) {
    if (Ye.has(e))
      return;
    Ye.add(e), Gn.c.push(() => {
      Ye.delete(e), o && (n && e.d(1), o());
    }), e.o(t);
  } else
    o && o();
}
function ot(e) {
  e && e.c();
}
function Xe(e, t, n, o) {
  const { fragment: r, after_update: l } = e.$$;
  r && r.m(t, n), o || Je(() => {
    const a = e.$$.on_mount.map(vt).filter(V);
    e.$$.on_destroy ? e.$$.on_destroy.push(...a) : ce(a), e.$$.on_mount = [];
  }), l.forEach(Je);
}
function $e(e, t) {
  const n = e.$$;
  n.fragment !== null && (In(n.after_update), ce(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Rn(e, t) {
  e.$$.dirty[0] === -1 && (Te.push(e), vn(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ke(e, t, n, o, r, l, a, u = [-1]) {
  const f = Ge;
  ve(e);
  const m = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: Ie,
    not_equal: r,
    bound: pt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: pt(),
    dirty: u,
    skip_bound: !1,
    root: t.target || f.$$.root
  };
  a && a(m.root);
  let w = !1;
  if (m.ctx = n ? n(e, t.props || {}, (y, h, ...i) => {
    const _ = i.length ? i[0] : h;
    return m.ctx && r(m.ctx[y], m.ctx[y] = _) && (!m.skip_bound && m.bound[y] && m.bound[y](_), w && Rn(e, y)), h;
  }) : [], m.update(), w = !0, ce(m.before_update), m.fragment = o ? o(m.ctx) : !1, t.target) {
    if (t.hydrate) {
      const y = Pn(t.target);
      m.fragment && m.fragment.l(y), y.forEach(I);
    } else
      m.fragment && m.fragment.c();
    t.intro && Ae(e.$$.fragment), Xe(e, t.target, t.anchor, t.customElement), At();
  }
  ve(f);
}
class Be {
  $destroy() {
    $e(this, 1), this.$destroy = Ie;
  }
  $on(t, n) {
    if (!V(n))
      return Ie;
    const o = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return o.push(n), () => {
      const r = o.indexOf(n);
      r !== -1 && o.splice(r, 1);
    };
  }
  $set(t) {
    this.$$set && !_n(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
var Se = /* @__PURE__ */ ((e) => (e.ELLIPSE = "ELLIPSE", e.POLYGON = "POLYGON", e.RECTANGLE = "RECTANGLE", e))(Se || {});
const rt = (e, t) => t, An = (e) => {
  let t = 1 / 0, n = 1 / 0, o = -1 / 0, r = -1 / 0;
  return e.forEach(([l, a]) => {
    t = Math.min(t, l), n = Math.min(n, a), o = Math.max(o, l), r = Math.max(r, a);
  }), { minX: t, minY: n, maxX: o, maxY: r };
}, kn = {
  area: (e) => Math.PI * e.geometry.rx * e.geometry.ry,
  intersects: (e, t, n) => {
    const { cx: o, cy: r, rx: l, ry: a } = e.geometry, u = 0, f = Math.cos(u), m = Math.sin(u), w = t - o, y = n - r, h = f * w + m * y, i = m * w - f * y;
    return h * h / (l * l) + i * i / (a * a) <= 1;
  }
};
rt(Se.ELLIPSE, kn);
const Bn = {
  area: (e) => {
    const { points: t } = e.geometry;
    let n = 0, o = t.length - 1;
    for (let r = 0; r < t.length; r++)
      n += (t[o][0] + t[r][0]) * (t[o][1] - t[r][1]), o = r;
    return Math.abs(0.5 * n);
  },
  intersects: (e, t, n) => {
    const { points: o } = e.geometry;
    let r = !1;
    for (let l = 0, a = o.length - 1; l < o.length; a = l++) {
      const u = o[l][0], f = o[l][1], m = o[a][0], w = o[a][1];
      f > n != w > n && t < (m - u) * (n - f) / (w - f) + u && (r = !r);
    }
    return r;
  }
};
rt(Se.POLYGON, Bn);
const Fn = {
  area: (e) => e.geometry.w * e.geometry.h,
  intersects: (e, t, n) => t >= e.geometry.x && t <= e.geometry.x + e.geometry.w && n >= e.geometry.y && n <= e.geometry.y + e.geometry.h
};
rt(Se.RECTANGLE, Fn);
let Yn = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
Yn();
function yt(e, t, n) {
  const o = e.slice();
  return o[11] = t[n], o[13] = n, o;
}
function _t(e) {
  let t, n, o, r, l;
  return {
    c() {
      t = z("rect"), s(t, "class", "a9s-corner-handle"), s(t, "x", n = /*point*/
      e[11][0] - /*handleSize*/
      e[3] / 2), s(t, "y", o = /*point*/
      e[11][1] - /*handleSize*/
      e[3] / 2), s(
        t,
        "height",
        /*handleSize*/
        e[3]
      ), s(
        t,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    m(a, u) {
      G(a, t, u), r || (l = q(t, "pointerdown", function() {
        V(
          /*grab*/
          e[10](E(
            /*idx*/
            e[13]
          ))
        ) && e[10](E(
          /*idx*/
          e[13]
        )).apply(this, arguments);
      }), r = !0);
    },
    p(a, u) {
      e = a, u & /*geom, handleSize*/
      24 && n !== (n = /*point*/
      e[11][0] - /*handleSize*/
      e[3] / 2) && s(t, "x", n), u & /*geom, handleSize*/
      24 && o !== (o = /*point*/
      e[11][1] - /*handleSize*/
      e[3] / 2) && s(t, "y", o), u & /*handleSize*/
      8 && s(
        t,
        "height",
        /*handleSize*/
        e[3]
      ), u & /*handleSize*/
      8 && s(
        t,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    d(a) {
      a && I(t), r = !1, l();
    }
  };
}
function Nn(e) {
  let t, n, o, r, l, a, u, f, m, w, y = (
    /*geom*/
    e[4].points
  ), h = [];
  for (let i = 0; i < y.length; i += 1)
    h[i] = _t(yt(e, y, i));
  return {
    c() {
      t = z("polygon"), r = J(), l = z("polygon"), u = J();
      for (let i = 0; i < h.length; i += 1)
        h[i].c();
      f = bn(), s(t, "class", "a9s-outer"), s(t, "style", n = /*computedStyle*/
      e[1] ? "display:none;" : void 0), s(t, "points", o = /*geom*/
      e[4].points.map(gt).join(" ")), s(l, "class", "a9s-inner a9s-shape-handle"), s(
        l,
        "style",
        /*computedStyle*/
        e[1]
      ), s(l, "points", a = /*geom*/
      e[4].points.map(wt).join(" "));
    },
    m(i, _) {
      G(i, t, _), G(i, r, _), G(i, l, _), G(i, u, _);
      for (let p = 0; p < h.length; p += 1)
        h[p] && h[p].m(i, _);
      G(i, f, _), m || (w = [
        q(t, "pointerdown", function() {
          V(
            /*grab*/
            e[10](E.SHAPE)
          ) && e[10](E.SHAPE).apply(this, arguments);
        }),
        q(l, "pointerdown", function() {
          V(
            /*grab*/
            e[10](E.SHAPE)
          ) && e[10](E.SHAPE).apply(this, arguments);
        })
      ], m = !0);
    },
    p(i, _) {
      if (e = i, _ & /*computedStyle*/
      2 && n !== (n = /*computedStyle*/
      e[1] ? "display:none;" : void 0) && s(t, "style", n), _ & /*geom*/
      16 && o !== (o = /*geom*/
      e[4].points.map(gt).join(" ")) && s(t, "points", o), _ & /*computedStyle*/
      2 && s(
        l,
        "style",
        /*computedStyle*/
        e[1]
      ), _ & /*geom*/
      16 && a !== (a = /*geom*/
      e[4].points.map(wt).join(" ")) && s(l, "points", a), _ & /*geom, handleSize, grab, Handle*/
      1048) {
        y = /*geom*/
        e[4].points;
        let p;
        for (p = 0; p < y.length; p += 1) {
          const T = yt(e, y, p);
          h[p] ? h[p].p(T, _) : (h[p] = _t(T), h[p].c(), h[p].m(f.parentNode, f));
        }
        for (; p < h.length; p += 1)
          h[p].d(1);
        h.length = y.length;
      }
    },
    d(i) {
      i && I(t), i && I(r), i && I(l), i && I(u), On(h, i), i && I(f), m = !1, ce(w);
    }
  };
}
function jn(e) {
  let t, n;
  return t = new st({
    props: {
      shape: (
        /*shape*/
        e[0]
      ),
      transform: (
        /*transform*/
        e[2]
      ),
      editor: (
        /*editor*/
        e[5]
      ),
      $$slots: {
        default: [
          Nn,
          ({ grab: o }) => ({ 10: o }),
          ({ grab: o }) => o ? 1024 : 0
        ]
      },
      $$scope: { ctx: e }
    }
  }), t.$on(
    "change",
    /*change_handler*/
    e[7]
  ), t.$on(
    "grab",
    /*grab_handler*/
    e[8]
  ), t.$on(
    "release",
    /*release_handler*/
    e[9]
  ), {
    c() {
      ot(t.$$.fragment);
    },
    m(o, r) {
      Xe(t, o, r), n = !0;
    },
    p(o, [r]) {
      const l = {};
      r & /*shape*/
      1 && (l.shape = /*shape*/
      o[0]), r & /*transform*/
      4 && (l.transform = /*transform*/
      o[2]), r & /*$$scope, geom, handleSize, grab, computedStyle*/
      17434 && (l.$$scope = { dirty: r, ctx: o }), t.$set(l);
    },
    i(o) {
      n || (Ae(t.$$.fragment, o), n = !0);
    },
    o(o) {
      je(t.$$.fragment, o), n = !1;
    },
    d(o) {
      $e(t, o);
    }
  };
}
const gt = (e) => e.join(","), wt = (e) => e.join(",");
function Xn(e, t, n) {
  let o, r, { shape: l } = t, { computedStyle: a = void 0 } = t, { transform: u } = t, { viewportScale: f = 1 } = t;
  const m = (i, _, p) => {
    let T;
    _ === E.SHAPE ? T = i.geometry.points.map(([L, b]) => [L + p[0], b + p[1]]) : T = i.geometry.points.map(([L, b], A) => _ === E(A) ? [L + p[0], b + p[1]] : [L, b]);
    const P = An(T);
    return { ...i, geometry: { points: T, bounds: P } };
  };
  function w(i) {
    fe.call(this, e, i);
  }
  function y(i) {
    fe.call(this, e, i);
  }
  function h(i) {
    fe.call(this, e, i);
  }
  return e.$$set = (i) => {
    "shape" in i && n(0, l = i.shape), "computedStyle" in i && n(1, a = i.computedStyle), "transform" in i && n(2, u = i.transform), "viewportScale" in i && n(6, f = i.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(4, o = l.geometry), e.$$.dirty & /*viewportScale*/
    64 && n(3, r = 10 / f);
  }, [
    l,
    a,
    u,
    r,
    o,
    m,
    f,
    w,
    y,
    h
  ];
}
class $n extends Be {
  constructor(t) {
    super(), ke(this, t, Xn, jn, Re, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
function Un(e) {
  let t, n, o, r, l, a, u, f, m, w, y, h, i, _, p, T, P, L, b, A, H, k, U, v, O, F, K, W, B, R, M, ee, he, Y, te, ne, de, N, oe, re, pe, j, se, ie, me, X, le, ae, ye, Me;
  return {
    c() {
      t = z("rect"), u = J(), f = z("rect"), i = J(), _ = z("rect"), L = J(), b = z("rect"), U = J(), v = z("rect"), W = J(), B = z("rect"), he = J(), Y = z("rect"), de = J(), N = z("rect"), pe = J(), j = z("rect"), me = J(), X = z("rect"), s(t, "class", "a9s-outer"), s(t, "style", n = /*computedStyle*/
      e[1] ? "display:none;" : void 0), s(t, "x", o = /*geom*/
      e[4].x), s(t, "y", r = /*geom*/
      e[4].y), s(t, "width", l = /*geom*/
      e[4].w), s(t, "height", a = /*geom*/
      e[4].h), s(f, "class", "a9s-inner a9s-shape-handle"), s(
        f,
        "style",
        /*computedStyle*/
        e[1]
      ), s(f, "x", m = /*geom*/
      e[4].x), s(f, "y", w = /*geom*/
      e[4].y), s(f, "width", y = /*geom*/
      e[4].w), s(f, "height", h = /*geom*/
      e[4].h), s(_, "class", "a9s-edge-handle a9s-edge-handle-top"), s(_, "x", p = /*geom*/
      e[4].x), s(_, "y", T = /*geom*/
      e[4].y), s(_, "height", 1), s(_, "width", P = /*geom*/
      e[4].w), s(b, "class", "a9s-edge-handle a9s-edge-handle-right"), s(b, "x", A = /*geom*/
      e[4].x + /*geom*/
      e[4].w), s(b, "y", H = /*geom*/
      e[4].y), s(b, "height", k = /*geom*/
      e[4].h), s(b, "width", 1), s(v, "class", "a9s-edge-handle a9s-edge-handle-bottom"), s(v, "x", O = /*geom*/
      e[4].x), s(v, "y", F = /*geom*/
      e[4].y + /*geom*/
      e[4].h), s(v, "height", 1), s(v, "width", K = /*geom*/
      e[4].w), s(B, "class", "a9s-edge-handle a9s-edge-handle-left"), s(B, "x", R = /*geom*/
      e[4].x), s(B, "y", M = /*geom*/
      e[4].y), s(B, "height", ee = /*geom*/
      e[4].h), s(B, "width", 1), s(Y, "class", "a9s-corner-handle a9s-corner-handle-topleft"), s(Y, "x", te = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2), s(Y, "y", ne = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2), s(
        Y,
        "height",
        /*handleSize*/
        e[3]
      ), s(
        Y,
        "width",
        /*handleSize*/
        e[3]
      ), s(N, "class", "a9s-corner-handle a9s-corner-handle-topright"), s(N, "x", oe = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2), s(N, "y", re = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2), s(
        N,
        "height",
        /*handleSize*/
        e[3]
      ), s(
        N,
        "width",
        /*handleSize*/
        e[3]
      ), s(j, "class", "a9s-corner-handle a9s-corner-handle-bottomright"), s(j, "x", se = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2), s(j, "y", ie = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2), s(
        j,
        "height",
        /*handleSize*/
        e[3]
      ), s(
        j,
        "width",
        /*handleSize*/
        e[3]
      ), s(X, "class", "a9s-corner-handle a9s-corner-handle-bottomleft"), s(X, "x", le = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2), s(X, "y", ae = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2), s(
        X,
        "height",
        /*handleSize*/
        e[3]
      ), s(
        X,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    m(g, c) {
      G(g, t, c), G(g, u, c), G(g, f, c), G(g, i, c), G(g, _, c), G(g, L, c), G(g, b, c), G(g, U, c), G(g, v, c), G(g, W, c), G(g, B, c), G(g, he, c), G(g, Y, c), G(g, de, c), G(g, N, c), G(g, pe, c), G(g, j, c), G(g, me, c), G(g, X, c), ye || (Me = [
        q(t, "pointerdown", function() {
          V(
            /*grab*/
            e[10](E.SHAPE)
          ) && e[10](E.SHAPE).apply(this, arguments);
        }),
        q(f, "pointerdown", function() {
          V(
            /*grab*/
            e[10](E.SHAPE)
          ) && e[10](E.SHAPE).apply(this, arguments);
        }),
        q(_, "pointerdown", function() {
          V(
            /*grab*/
            e[10](E.TOP)
          ) && e[10](E.TOP).apply(this, arguments);
        }),
        q(b, "pointerdown", function() {
          V(
            /*grab*/
            e[10](E.RIGHT)
          ) && e[10](E.RIGHT).apply(this, arguments);
        }),
        q(v, "pointerdown", function() {
          V(
            /*grab*/
            e[10](E.BOTTOM)
          ) && e[10](E.BOTTOM).apply(this, arguments);
        }),
        q(B, "pointerdown", function() {
          V(
            /*grab*/
            e[10](E.LEFT)
          ) && e[10](E.LEFT).apply(this, arguments);
        }),
        q(Y, "pointerdown", function() {
          V(
            /*grab*/
            e[10](E.TOP_LEFT)
          ) && e[10](E.TOP_LEFT).apply(this, arguments);
        }),
        q(N, "pointerdown", function() {
          V(
            /*grab*/
            e[10](E.TOP_RIGHT)
          ) && e[10](E.TOP_RIGHT).apply(this, arguments);
        }),
        q(j, "pointerdown", function() {
          V(
            /*grab*/
            e[10](E.BOTTOM_RIGHT)
          ) && e[10](E.BOTTOM_RIGHT).apply(this, arguments);
        }),
        q(X, "pointerdown", function() {
          V(
            /*grab*/
            e[10](E.BOTTOM_LEFT)
          ) && e[10](E.BOTTOM_LEFT).apply(this, arguments);
        })
      ], ye = !0);
    },
    p(g, c) {
      e = g, c & /*computedStyle*/
      2 && n !== (n = /*computedStyle*/
      e[1] ? "display:none;" : void 0) && s(t, "style", n), c & /*geom*/
      16 && o !== (o = /*geom*/
      e[4].x) && s(t, "x", o), c & /*geom*/
      16 && r !== (r = /*geom*/
      e[4].y) && s(t, "y", r), c & /*geom*/
      16 && l !== (l = /*geom*/
      e[4].w) && s(t, "width", l), c & /*geom*/
      16 && a !== (a = /*geom*/
      e[4].h) && s(t, "height", a), c & /*computedStyle*/
      2 && s(
        f,
        "style",
        /*computedStyle*/
        e[1]
      ), c & /*geom*/
      16 && m !== (m = /*geom*/
      e[4].x) && s(f, "x", m), c & /*geom*/
      16 && w !== (w = /*geom*/
      e[4].y) && s(f, "y", w), c & /*geom*/
      16 && y !== (y = /*geom*/
      e[4].w) && s(f, "width", y), c & /*geom*/
      16 && h !== (h = /*geom*/
      e[4].h) && s(f, "height", h), c & /*geom*/
      16 && p !== (p = /*geom*/
      e[4].x) && s(_, "x", p), c & /*geom*/
      16 && T !== (T = /*geom*/
      e[4].y) && s(_, "y", T), c & /*geom*/
      16 && P !== (P = /*geom*/
      e[4].w) && s(_, "width", P), c & /*geom*/
      16 && A !== (A = /*geom*/
      e[4].x + /*geom*/
      e[4].w) && s(b, "x", A), c & /*geom*/
      16 && H !== (H = /*geom*/
      e[4].y) && s(b, "y", H), c & /*geom*/
      16 && k !== (k = /*geom*/
      e[4].h) && s(b, "height", k), c & /*geom*/
      16 && O !== (O = /*geom*/
      e[4].x) && s(v, "x", O), c & /*geom*/
      16 && F !== (F = /*geom*/
      e[4].y + /*geom*/
      e[4].h) && s(v, "y", F), c & /*geom*/
      16 && K !== (K = /*geom*/
      e[4].w) && s(v, "width", K), c & /*geom*/
      16 && R !== (R = /*geom*/
      e[4].x) && s(B, "x", R), c & /*geom*/
      16 && M !== (M = /*geom*/
      e[4].y) && s(B, "y", M), c & /*geom*/
      16 && ee !== (ee = /*geom*/
      e[4].h) && s(B, "height", ee), c & /*geom, handleSize*/
      24 && te !== (te = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2) && s(Y, "x", te), c & /*geom, handleSize*/
      24 && ne !== (ne = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2) && s(Y, "y", ne), c & /*handleSize*/
      8 && s(
        Y,
        "height",
        /*handleSize*/
        e[3]
      ), c & /*handleSize*/
      8 && s(
        Y,
        "width",
        /*handleSize*/
        e[3]
      ), c & /*geom, handleSize*/
      24 && oe !== (oe = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2) && s(N, "x", oe), c & /*geom, handleSize*/
      24 && re !== (re = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2) && s(N, "y", re), c & /*handleSize*/
      8 && s(
        N,
        "height",
        /*handleSize*/
        e[3]
      ), c & /*handleSize*/
      8 && s(
        N,
        "width",
        /*handleSize*/
        e[3]
      ), c & /*geom, handleSize*/
      24 && se !== (se = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2) && s(j, "x", se), c & /*geom, handleSize*/
      24 && ie !== (ie = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2) && s(j, "y", ie), c & /*handleSize*/
      8 && s(
        j,
        "height",
        /*handleSize*/
        e[3]
      ), c & /*handleSize*/
      8 && s(
        j,
        "width",
        /*handleSize*/
        e[3]
      ), c & /*geom, handleSize*/
      24 && le !== (le = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2) && s(X, "x", le), c & /*geom, handleSize*/
      24 && ae !== (ae = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2) && s(X, "y", ae), c & /*handleSize*/
      8 && s(
        X,
        "height",
        /*handleSize*/
        e[3]
      ), c & /*handleSize*/
      8 && s(
        X,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    d(g) {
      g && I(t), g && I(u), g && I(f), g && I(i), g && I(_), g && I(L), g && I(b), g && I(U), g && I(v), g && I(W), g && I(B), g && I(he), g && I(Y), g && I(de), g && I(N), g && I(pe), g && I(j), g && I(me), g && I(X), ye = !1, ce(Me);
    }
  };
}
function Dn(e) {
  let t, n;
  return t = new st({
    props: {
      shape: (
        /*shape*/
        e[0]
      ),
      transform: (
        /*transform*/
        e[2]
      ),
      editor: (
        /*editor*/
        e[5]
      ),
      $$slots: {
        default: [
          Un,
          ({ grab: o }) => ({ 10: o }),
          ({ grab: o }) => o ? 1024 : 0
        ]
      },
      $$scope: { ctx: e }
    }
  }), t.$on(
    "grab",
    /*grab_handler*/
    e[7]
  ), t.$on(
    "change",
    /*change_handler*/
    e[8]
  ), t.$on(
    "release",
    /*release_handler*/
    e[9]
  ), {
    c() {
      ot(t.$$.fragment);
    },
    m(o, r) {
      Xe(t, o, r), n = !0;
    },
    p(o, [r]) {
      const l = {};
      r & /*shape*/
      1 && (l.shape = /*shape*/
      o[0]), r & /*transform*/
      4 && (l.transform = /*transform*/
      o[2]), r & /*$$scope, geom, handleSize, grab, computedStyle*/
      3098 && (l.$$scope = { dirty: r, ctx: o }), t.$set(l);
    },
    i(o) {
      n || (Ae(t.$$.fragment, o), n = !0);
    },
    o(o) {
      je(t.$$.fragment, o), n = !1;
    },
    d(o) {
      $e(t, o);
    }
  };
}
function zn(e, t, n) {
  let o, r, { shape: l } = t, { computedStyle: a = void 0 } = t, { transform: u } = t, { viewportScale: f = 1 } = t;
  const m = (i, _, p) => {
    const T = i.geometry.bounds;
    let [P, L] = [T.minX, T.minY], [b, A] = [T.maxX, T.maxY];
    const [H, k] = p;
    if (_ === E.SHAPE)
      P += H, b += H, L += k, A += k;
    else {
      switch (_) {
        case E.TOP:
        case E.TOP_LEFT:
        case E.TOP_RIGHT: {
          L += k;
          break;
        }
        case E.BOTTOM:
        case E.BOTTOM_LEFT:
        case E.BOTTOM_RIGHT: {
          A += k;
          break;
        }
      }
      switch (_) {
        case E.LEFT:
        case E.TOP_LEFT:
        case E.BOTTOM_LEFT: {
          P += H;
          break;
        }
        case E.RIGHT:
        case E.TOP_RIGHT:
        case E.BOTTOM_RIGHT: {
          b += H;
          break;
        }
      }
    }
    const U = Math.min(P, b), v = Math.min(L, A), O = Math.abs(b - P), F = Math.abs(A - L);
    return {
      ...i,
      geometry: {
        x: U,
        y: v,
        w: O,
        h: F,
        bounds: {
          minX: U,
          minY: v,
          maxX: U + O,
          maxY: v + F
        }
      }
    };
  };
  function w(i) {
    fe.call(this, e, i);
  }
  function y(i) {
    fe.call(this, e, i);
  }
  function h(i) {
    fe.call(this, e, i);
  }
  return e.$$set = (i) => {
    "shape" in i && n(0, l = i.shape), "computedStyle" in i && n(1, a = i.computedStyle), "transform" in i && n(2, u = i.transform), "viewportScale" in i && n(6, f = i.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(4, o = l.geometry), e.$$.dirty & /*viewportScale*/
    64 && n(3, r = 10 / f);
  }, [
    l,
    a,
    u,
    r,
    o,
    m,
    f,
    w,
    y,
    h
  ];
}
class Kn extends Be {
  constructor(t) {
    super(), ke(this, t, zn, Dn, Re, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
Se.RECTANGLE, Se.POLYGON;
const E = (e) => `HANDLE-${e}`;
E.SHAPE = "SHAPE";
E.TOP = "TOP";
E.RIGHT = "RIGHT";
E.BOTTOM = "BOTTOM";
E.LEFT = "LEFT";
E.TOP_LEFT = "TOP_LEFT";
E.TOP_RIGHT = "TOP_RIGHT";
E.BOTTOM_RIGHT = "BOTTOM_RIGHT";
E.BOTTOM_LEFT = "BOTTOM_LEFT";
const Vn = (e) => ({}), Et = (e) => ({ grab: (
  /*onGrab*/
  e[0]
) });
function qn(e) {
  let t, n, o, r;
  const l = (
    /*#slots*/
    e[7].default
  ), a = gn(
    l,
    e,
    /*$$scope*/
    e[6],
    Et
  );
  return {
    c() {
      t = z("g"), a && a.c(), s(t, "class", "a9s-annotation selected");
    },
    m(u, f) {
      G(u, t, f), a && a.m(t, null), n = !0, o || (r = [
        q(
          t,
          "pointerup",
          /*onRelease*/
          e[2]
        ),
        q(
          t,
          "pointermove",
          /*onPointerMove*/
          e[1]
        )
      ], o = !0);
    },
    p(u, [f]) {
      a && a.p && (!n || f & /*$$scope*/
      64) && En(
        a,
        l,
        u,
        /*$$scope*/
        u[6],
        n ? wn(
          l,
          /*$$scope*/
          u[6],
          f,
          Vn
        ) : Tn(
          /*$$scope*/
          u[6]
        ),
        Et
      );
    },
    i(u) {
      n || (Ae(a, u), n = !0);
    },
    o(u) {
      je(a, u), n = !1;
    },
    d(u) {
      u && I(t), a && a.d(u), o = !1, ce(r);
    }
  };
}
function Wn(e, t, n) {
  let { $$slots: o = {}, $$scope: r } = t;
  const l = Rt();
  let { shape: a } = t, { editor: u } = t, { transform: f } = t, m = null, w, y = null;
  const h = (p) => (T) => {
    m = p, w = f.elementToImage(T.offsetX, T.offsetY), y = a, T.target.setPointerCapture(T.pointerId), l("grab");
  }, i = (p) => {
    if (m) {
      const [T, P] = f.elementToImage(p.offsetX, p.offsetY), L = [T - w[0], P - w[1]];
      n(3, a = u(y, m, L)), l("change", a);
    }
  }, _ = (p) => {
    p.target.releasePointerCapture(p.pointerId), m = null, y = a, l("release");
  };
  return e.$$set = (p) => {
    "shape" in p && n(3, a = p.shape), "editor" in p && n(4, u = p.editor), "transform" in p && n(5, f = p.transform), "$$scope" in p && n(6, r = p.$$scope);
  }, [h, i, _, a, u, f, r, o];
}
class st extends Be {
  constructor(t) {
    super(), ke(this, t, Wn, qn, Re, { shape: 3, editor: 4, transform: 5 });
  }
}
function Jn(e) {
  let t, n, o, r, l, a, u, f, m, w, y, h, i, _, p, T, P, L, b, A, H, k, U, v, O, F, K, W, B;
  return {
    c() {
      t = z("ellipse"), a = J(), u = z("ellipse"), h = J(), i = z("rect"), T = J(), P = z("rect"), A = J(), H = z("rect"), v = J(), O = z("rect"), s(t, "class", "a9s-outer"), s(t, "cx", n = /*geom*/
      e[3].cx), s(t, "cy", o = /*geom*/
      e[3].cy), s(t, "rx", r = /*geom*/
      e[3].rx), s(t, "ry", l = /*geom*/
      e[3].ry), s(u, "class", "a9s-inner a9s-shape-handle"), s(u, "cx", f = /*geom*/
      e[3].cx), s(u, "cy", m = /*geom*/
      e[3].cy), s(u, "rx", w = /*geom*/
      e[3].rx), s(u, "ry", y = /*geom*/
      e[3].ry), s(i, "class", "a9s-corner-handle a9s-corner-top"), s(i, "x", _ = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2), s(i, "y", p = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2 - /*geom*/
      e[3].ry), s(
        i,
        "height",
        /*handleSize*/
        e[2]
      ), s(
        i,
        "width",
        /*handleSize*/
        e[2]
      ), s(P, "class", "a9s-corner-handle a9s-corner-handle-right"), s(P, "x", L = /*geom*/
      e[3].cx + /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2), s(P, "y", b = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2), s(
        P,
        "height",
        /*handleSize*/
        e[2]
      ), s(
        P,
        "width",
        /*handleSize*/
        e[2]
      ), s(H, "class", "a9s-corner-handle a9s-corner-handle-bottom"), s(H, "x", k = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2), s(H, "y", U = /*geom*/
      e[3].cy + /*geom*/
      e[3].ry - /*handleSize*/
      e[2] / 2), s(
        H,
        "height",
        /*handleSize*/
        e[2]
      ), s(
        H,
        "width",
        /*handleSize*/
        e[2]
      ), s(O, "class", "a9s-corner-handle a9s-corner-handle-left"), s(O, "x", F = /*geom*/
      e[3].cx - /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2), s(O, "y", K = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2), s(
        O,
        "height",
        /*handleSize*/
        e[2]
      ), s(
        O,
        "width",
        /*handleSize*/
        e[2]
      );
    },
    m(R, M) {
      G(R, t, M), G(R, a, M), G(R, u, M), G(R, h, M), G(R, i, M), G(R, T, M), G(R, P, M), G(R, A, M), G(R, H, M), G(R, v, M), G(R, O, M), W || (B = [
        q(t, "pointerdown", function() {
          V(
            /*grab*/
            e[9](E.SHAPE)
          ) && e[9](E.SHAPE).apply(this, arguments);
        }),
        q(u, "pointerdown", function() {
          V(
            /*grab*/
            e[9](E.SHAPE)
          ) && e[9](E.SHAPE).apply(this, arguments);
        }),
        q(i, "pointerdown", function() {
          V(
            /*grab*/
            e[9](E.TOP)
          ) && e[9](E.TOP).apply(this, arguments);
        }),
        q(P, "pointerdown", function() {
          V(
            /*grab*/
            e[9](E.RIGHT)
          ) && e[9](E.RIGHT).apply(this, arguments);
        }),
        q(H, "pointerdown", function() {
          V(
            /*grab*/
            e[9](E.BOTTOM)
          ) && e[9](E.BOTTOM).apply(this, arguments);
        }),
        q(O, "pointerdown", function() {
          V(
            /*grab*/
            e[9](E.LEFT)
          ) && e[9](E.LEFT).apply(this, arguments);
        })
      ], W = !0);
    },
    p(R, M) {
      e = R, M & /*geom*/
      8 && n !== (n = /*geom*/
      e[3].cx) && s(t, "cx", n), M & /*geom*/
      8 && o !== (o = /*geom*/
      e[3].cy) && s(t, "cy", o), M & /*geom*/
      8 && r !== (r = /*geom*/
      e[3].rx) && s(t, "rx", r), M & /*geom*/
      8 && l !== (l = /*geom*/
      e[3].ry) && s(t, "ry", l), M & /*geom*/
      8 && f !== (f = /*geom*/
      e[3].cx) && s(u, "cx", f), M & /*geom*/
      8 && m !== (m = /*geom*/
      e[3].cy) && s(u, "cy", m), M & /*geom*/
      8 && w !== (w = /*geom*/
      e[3].rx) && s(u, "rx", w), M & /*geom*/
      8 && y !== (y = /*geom*/
      e[3].ry) && s(u, "ry", y), M & /*geom, handleSize*/
      12 && _ !== (_ = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2) && s(i, "x", _), M & /*geom, handleSize*/
      12 && p !== (p = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2 - /*geom*/
      e[3].ry) && s(i, "y", p), M & /*handleSize*/
      4 && s(
        i,
        "height",
        /*handleSize*/
        e[2]
      ), M & /*handleSize*/
      4 && s(
        i,
        "width",
        /*handleSize*/
        e[2]
      ), M & /*geom, handleSize*/
      12 && L !== (L = /*geom*/
      e[3].cx + /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2) && s(P, "x", L), M & /*geom, handleSize*/
      12 && b !== (b = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2) && s(P, "y", b), M & /*handleSize*/
      4 && s(
        P,
        "height",
        /*handleSize*/
        e[2]
      ), M & /*handleSize*/
      4 && s(
        P,
        "width",
        /*handleSize*/
        e[2]
      ), M & /*geom, handleSize*/
      12 && k !== (k = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2) && s(H, "x", k), M & /*geom, handleSize*/
      12 && U !== (U = /*geom*/
      e[3].cy + /*geom*/
      e[3].ry - /*handleSize*/
      e[2] / 2) && s(H, "y", U), M & /*handleSize*/
      4 && s(
        H,
        "height",
        /*handleSize*/
        e[2]
      ), M & /*handleSize*/
      4 && s(
        H,
        "width",
        /*handleSize*/
        e[2]
      ), M & /*geom, handleSize*/
      12 && F !== (F = /*geom*/
      e[3].cx - /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2) && s(O, "x", F), M & /*geom, handleSize*/
      12 && K !== (K = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2) && s(O, "y", K), M & /*handleSize*/
      4 && s(
        O,
        "height",
        /*handleSize*/
        e[2]
      ), M & /*handleSize*/
      4 && s(
        O,
        "width",
        /*handleSize*/
        e[2]
      );
    },
    d(R) {
      R && I(t), R && I(a), R && I(u), R && I(h), R && I(i), R && I(T), R && I(P), R && I(A), R && I(H), R && I(v), R && I(O), W = !1, ce(B);
    }
  };
}
function Qn(e) {
  let t, n;
  return t = new st({
    props: {
      shape: (
        /*shape*/
        e[0]
      ),
      transform: (
        /*transform*/
        e[1]
      ),
      editor: (
        /*editor*/
        e[4]
      ),
      $$slots: {
        default: [
          Jn,
          ({ grab: o }) => ({ 9: o }),
          ({ grab: o }) => o ? 512 : 0
        ]
      },
      $$scope: { ctx: e }
    }
  }), t.$on(
    "grab",
    /*grab_handler*/
    e[6]
  ), t.$on(
    "change",
    /*change_handler*/
    e[7]
  ), t.$on(
    "release",
    /*release_handler*/
    e[8]
  ), {
    c() {
      ot(t.$$.fragment);
    },
    m(o, r) {
      Xe(t, o, r), n = !0;
    },
    p(o, [r]) {
      const l = {};
      r & /*shape*/
      1 && (l.shape = /*shape*/
      o[0]), r & /*transform*/
      2 && (l.transform = /*transform*/
      o[1]), r & /*$$scope, geom, handleSize, grab*/
      1548 && (l.$$scope = { dirty: r, ctx: o }), t.$set(l);
    },
    i(o) {
      n || (Ae(t.$$.fragment, o), n = !0);
    },
    o(o) {
      je(t.$$.fragment, o), n = !1;
    },
    d(o) {
      $e(t, o);
    }
  };
}
function Zn(e, t, n) {
  let o, r, { shape: l } = t, { transform: a } = t, { viewportScale: u = 1 } = t;
  const f = (h, i, _) => {
    const p = h.geometry.bounds;
    let [T, P] = [p.minX, p.minY], [L, b] = [p.maxX, p.maxY];
    const [A, H] = _;
    if (i === E.SHAPE)
      T += A, L += A, P += H, b += H;
    else
      switch (i) {
        case E.TOP: {
          P += H;
          break;
        }
        case E.BOTTOM: {
          b += H;
          break;
        }
        case E.LEFT: {
          T += A;
          break;
        }
        case E.RIGHT: {
          L += A;
          break;
        }
      }
    const k = Math.min(T, L), U = Math.min(P, b), v = Math.abs(L - T), O = Math.abs(b - P), F = (T + L) / 2, K = (P + b) / 2, W = v / 2, B = O / 2;
    return {
      ...h,
      geometry: {
        ...h.geometry,
        cx: F,
        cy: K,
        rx: W,
        ry: B,
        bounds: {
          minX: k,
          minY: U,
          maxX: k + v,
          maxY: U + O
        }
      }
    };
  };
  function m(h) {
    fe.call(this, e, h);
  }
  function w(h) {
    fe.call(this, e, h);
  }
  function y(h) {
    fe.call(this, e, h);
  }
  return e.$$set = (h) => {
    "shape" in h && n(0, l = h.shape), "transform" in h && n(1, a = h.transform), "viewportScale" in h && n(5, u = h.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(3, o = l.geometry), e.$$.dirty & /*viewportScale*/
    32 && n(2, r = 10 / u);
  }, [
    l,
    a,
    r,
    o,
    f,
    u,
    m,
    w,
    y
  ];
}
class Cn extends Be {
  constructor(t) {
    super(), ke(this, t, Zn, Qn, Re, { shape: 0, transform: 1, viewportScale: 5 });
  }
}
function Tt(e) {
  let t, n, o, r, l, a, u, f, m, w;
  return {
    c() {
      t = z("ellipse"), a = z("ellipse"), s(t, "class", "a9s-outer"), s(t, "cx", n = /*x*/
      e[2] + /*w*/
      e[4] / 2), s(t, "cy", o = /*y*/
      e[3] + /*h*/
      e[5] / 2), s(t, "rx", r = /*w*/
      e[4] / 2), s(t, "ry", l = /*h*/
      e[5] / 2), s(a, "class", "a9s-inner"), s(a, "cx", u = /*x*/
      e[2] + /*w*/
      e[4] / 2), s(a, "cy", f = /*y*/
      e[3] + /*h*/
      e[5] / 2), s(a, "rx", m = /*w*/
      e[4] / 2), s(a, "ry", w = /*h*/
      e[5] / 2);
    },
    m(y, h) {
      G(y, t, h), G(y, a, h);
    },
    p(y, h) {
      h & /*x, w*/
      20 && n !== (n = /*x*/
      y[2] + /*w*/
      y[4] / 2) && s(t, "cx", n), h & /*y, h*/
      40 && o !== (o = /*y*/
      y[3] + /*h*/
      y[5] / 2) && s(t, "cy", o), h & /*w*/
      16 && r !== (r = /*w*/
      y[4] / 2) && s(t, "rx", r), h & /*h*/
      32 && l !== (l = /*h*/
      y[5] / 2) && s(t, "ry", l), h & /*x, w*/
      20 && u !== (u = /*x*/
      y[2] + /*w*/
      y[4] / 2) && s(a, "cx", u), h & /*y, h*/
      40 && f !== (f = /*y*/
      y[3] + /*h*/
      y[5] / 2) && s(a, "cy", f), h & /*w*/
      16 && m !== (m = /*w*/
      y[4] / 2) && s(a, "rx", m), h & /*h*/
      32 && w !== (w = /*h*/
      y[5] / 2) && s(a, "ry", w);
    },
    d(y) {
      y && I(t), y && I(a);
    }
  };
}
function xn(e) {
  let t, n = (
    /*origin*/
    e[1] && Tt(e)
  );
  return {
    c() {
      t = z("g"), n && n.c(), s(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, r) {
      G(o, t, r), n && n.m(t, null), e[9](t);
    },
    p(o, [r]) {
      /*origin*/
      o[1] ? n ? n.p(o, r) : (n = Tt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: Ie,
    o: Ie,
    d(o) {
      o && I(t), n && n.d(), e[9](null);
    }
  };
}
function eo(e, t, n) {
  const o = Rt();
  let { addEventListener: r } = t, { drawingMode: l } = t, { transform: a } = t, u, f, m, w, y, h, i, _ = !1, p = !1, T, P;
  const L = (O) => {
    T = performance.now(), l === "drag" && (n(1, f = a.elementToImage(O.offsetX, O.offsetY)), m = f, n(2, w = f[0]), n(3, y = f[1]), n(4, h = 1), n(5, i = 1));
  }, b = (O) => {
    const F = O || P;
    if (f)
      if (m = a.elementToImage(F.offsetX, F.offsetY), p) {
        const K = 2 * Math.abs(m[0] - f[0]), W = 2 * Math.abs(m[1] - f[1]);
        n(4, h = _ ? Math.max(K, W) : K), n(5, i = _ ? h : W), n(2, w = Math.min(m[0], f[0] - h / 2)), n(3, y = Math.min(m[1], f[1] - i / 2));
      } else {
        const K = Math.abs(m[0] - f[0]), W = Math.abs(m[1] - f[1]);
        n(4, h = _ ? Math.max(K, W) : K), n(5, i = _ ? h : W), n(2, w = Math.min(m[0], f[0])), n(3, y = Math.min(m[1], f[1]));
      }
    O && (P = O);
  }, A = (O) => {
    l === "click" && O.stopImmediatePropagation();
    const F = performance.now() - T;
    if (l === "click") {
      if (F > 300)
        return;
      O.stopPropagation(), f ? H() : (n(1, f = a.elementToImage(O.offsetX, O.offsetY)), m = f, n(2, w = f[0]), n(3, y = f[1]), n(4, h = 1), n(5, i = 1));
    } else
      f && (F > 300 || h * i > 100 ? (O.stopPropagation(), H()) : (n(1, f = null), m = null, P = void 0));
  }, H = () => {
    if (h * i > 15) {
      const O = {
        type: ue.ELLIPSE,
        geometry: {
          bounds: {
            minX: w,
            minY: y,
            maxX: w + h,
            maxY: y + i
          },
          cx: w + h / 2,
          cy: y + i / 2,
          rx: h / 2,
          ry: i / 2
        }
      };
      o("create", O);
    }
    n(1, f = null), m = null, P = void 0;
  }, k = (O) => {
    O.key === "Shift" && (_ = !0, b()), O.key === "Control" && (p = !0, b());
  }, U = (O) => {
    O.key === "Shift" && (_ = !1, b()), O.key === "Control" && (p = !1, b());
  };
  Mn(() => (document.addEventListener("keyup", U), document.addEventListener("keydown", k), r("pointerdown", L), r("pointermove", b), r("pointerup", A), () => {
    document.removeEventListener("keyup", U), document.removeEventListener("keydown", k);
  }));
  function v(O) {
    qe[O ? "unshift" : "push"](() => {
      u = O, n(0, u);
    });
  }
  return e.$$set = (O) => {
    "addEventListener" in O && n(6, r = O.addEventListener), "drawingMode" in O && n(7, l = O.drawingMode), "transform" in O && n(8, a = O.transform);
  }, [
    u,
    f,
    w,
    y,
    h,
    i,
    r,
    l,
    a,
    v
  ];
}
class to extends Be {
  constructor(t) {
    super(), ke(this, t, eo, xn, Re, {
      addEventListener: 6,
      drawingMode: 7,
      transform: 8
    });
  }
}
const no = (e) => {
  e.registerDrawingTool("ellipse", to), e.registerShapeEditor(ue.ELLIPSE, Cn);
};
export {
  no as mountExtension
};
//# sourceMappingURL=annotorious-selector-pack.es.js.map
