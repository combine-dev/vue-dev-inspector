import { ref as f, computed as J, watch as gt, nextTick as L } from "vue";
import { defineStore as ht } from "pinia";
const mt = {}, yt = "devInspector:elementConfigs", St = ht("devInspector", () => {
  const I = f({}), m = f(!1), h = f(!1), E = f(!1), b = f(null), C = f(!1), r = f({}), y = f(null), P = f(null), _ = J(() => I.value.storageKey || yt), x = J(() => I.value.enabledInProduction ? !0 : typeof import.meta < "u" && mt ? !1 : process.env.NODE_ENV === "development");
  function W(t = {}) {
    I.value = t, z();
  }
  function z() {
    try {
      const t = I.value.initialAnnotations || {};
      if (typeof window < "u") {
        const n = localStorage.getItem(_.value), e = n ? JSON.parse(n) : {};
        r.value = { ...t, ...e };
      } else
        r.value = t;
    } catch (t) {
      console.error("[DevInspector] Failed to load configs:", t);
    }
  }
  function O() {
    try {
      if (typeof window < "u") {
        const t = JSON.stringify(r.value);
        localStorage.setItem(_.value, t), console.log("[DevInspector] Saved configs:", Object.keys(r.value).length, "items");
      }
    } catch (t) {
      console.error("[DevInspector] Failed to save configs:", t);
    }
  }
  gt(r, () => {
    L(() => {
      O();
    });
  }, { deep: !0 });
  function V() {
    x.value && (m.value = !m.value, m.value || (h.value = !1, y.value = null));
  }
  function Z() {
    x.value && (m.value = !0);
  }
  function q() {
    m.value = !1, h.value = !1, y.value = null;
  }
  function K() {
    h.value = !h.value, h.value || (y.value = null), h.value && (E.value = !1);
  }
  function G() {
    E.value = !E.value, E.value && (h.value = !1), P.value = null;
  }
  function H(t) {
    P.value = t;
  }
  function D(t) {
    if (t.id)
      return `#${t.id}`;
    if (t.dataset.devId)
      return `[data-dev-id="${t.dataset.devId}"]`;
    const n = [];
    let e = t;
    for (; e && e !== document.body; ) {
      let o = e.tagName.toLowerCase();
      if (e.id) {
        o = `#${e.id}`, n.unshift(o);
        break;
      }
      const s = Array.from(e.classList).filter((c) => !c.startsWith("hover:") && !c.startsWith("focus:")).slice(0, 2);
      s.length > 0 && (o += "." + s.join("."));
      const a = e.parentElement;
      if (a) {
        const c = Array.from(a.children).filter(
          (u) => u.tagName === e.tagName
        );
        if (c.length > 1) {
          const u = c.indexOf(e) + 1;
          o += `:nth-child(${u})`;
        }
      }
      n.unshift(o), e = e.parentElement;
    }
    return n.join(" > ");
  }
  function Y() {
    const t = typeof window < "u" ? window.location.pathname : "/";
    return Object.keys(r.value).filter((n) => {
      const e = r.value[n];
      return e ? (n.includes(">") || n.startsWith("#") || n.startsWith("[") || n.startsWith(".")) && (!e.componentPath || e.componentPath.includes(t) || t === "/") : !1;
    });
  }
  function Q(t) {
    b.value = t;
  }
  function tt() {
    b.value = null;
  }
  function et() {
    C.value = !C.value;
  }
  function nt() {
    C.value = !0;
  }
  function ot() {
    C.value = !1;
  }
  function at(t) {
    return r.value[t];
  }
  function R(t, n) {
    var a;
    const e = (/* @__PURE__ */ new Date()).toISOString(), o = r.value[t], s = {
      ...o,
      ...n,
      id: t,
      componentPath: n.componentPath || ((a = b.value) == null ? void 0 : a.componentPath) || "",
      createdAt: (o == null ? void 0 : o.createdAt) || e,
      updatedAt: e
    };
    r.value = {
      ...r.value,
      [t]: s
    }, L(() => O());
  }
  function st(t) {
    const { [t]: n, ...e } = r.value;
    r.value = e, L(() => O());
  }
  function U(t) {
    var p;
    const n = ((p = t.textContent) == null ? void 0 : p.trim()) || "", e = t.tagName.toUpperCase();
    if (!n && e !== "INPUT" && e !== "SELECT" && e !== "TEXTAREA")
      return null;
    const o = t.__vueParentComponent;
    if (o) {
      const l = o.props || {}, g = o.attrs || {};
      if ("modelValue" in l || "model-value" in g)
        return {
          type: "v-model",
          source: "form binding detected",
          isStatic: !1
        };
    }
    if (e === "INPUT" || e === "SELECT" || e === "TEXTAREA") {
      const l = t.type || "text";
      t.value;
      const g = t.placeholder || "";
      return {
        type: "v-model",
        source: `${e.toLowerCase()}[type=${l}]${g ? ` placeholder="${g}"` : ""}`,
        isStatic: !1
      };
    }
    const s = t.dataset.source || t.dataset.field || t.dataset.bind;
    if (s)
      return {
        type: "prop",
        source: s,
        isStatic: !1
      };
    if (t.closest("[v-for]") !== null || t.closest("[data-v-for]") !== null || // Check parent for repeated similar siblings
    t.parentElement && t.parentElement.children.length > 3 && Array.from(t.parentElement.children).filter((l) => l.tagName === t.tagName).length > 2)
      return {
        type: "api",
        source: "loop item",
        isStatic: !1
      };
    const c = [
      /^\d+$/,
      // Just numbers (likely IDs or counts)
      /^\d{4}[-/]\d{1,2}[-/]\d{1,2}/,
      // Dates
      /^\d{1,2}:\d{2}/,
      // Times
      /^¥[\d,]+/,
      // Currency
      /^\$[\d,]+/,
      // Currency USD
      /^[\d,]+円$/,
      // Japanese currency
      /^[a-f0-9]{8}-[a-f0-9]{4}/,
      // UUIDs
      /^[A-Z0-9]{6,}$/,
      // IDs/codes
      /^\d+\.\d+$/,
      // Decimal numbers
      /^https?:\/\//,
      // URLs
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      // Emails
    ];
    for (const l of c)
      if (l.test(n))
        return {
          type: "api",
          source: "dynamic data pattern",
          isStatic: !1
        };
    const i = Array.from(t.childNodes).filter((l) => l.nodeType === Node.TEXT_NODE).map((l) => {
      var g;
      return ((g = l.textContent) == null ? void 0 : g.trim()) || "";
    }).join("").trim().length > 0, d = t.children.length === 0, v = Array.from(t.children).every(
      (l) => ["SPAN", "STRONG", "EM", "B", "I", "A", "BR"].includes(l.tagName)
    );
    return i || d && n.length > 0 || v ? {
      type: "static",
      source: n.substring(0, 50) + (n.length > 50 ? "..." : ""),
      isStatic: !0
    } : n.length > 0 && n.length < 200 ? {
      type: "prop",
      source: "unknown binding",
      isStatic: !1
    } : null;
  }
  function k(t, n) {
    var s, a, c, u, i;
    const e = U(t), o = {};
    if (e) {
      o.sourceBinding = e;
      const d = ((s = t.textContent) == null ? void 0 : s.trim()) || "";
      if (e.isStatic)
        o.note = {
          type: "info",
          text: `【固定文言】${d}`
        };
      else if (e.type === "v-model") {
        const v = t.tagName.toUpperCase();
        if (v === "INPUT" || v === "SELECT" || v === "TEXTAREA") {
          const p = t.placeholder || "", l = ((c = (a = t.closest("label")) == null ? void 0 : a.textContent) == null ? void 0 : c.trim()) || t.getAttribute("aria-label") || ((i = (u = document.querySelector(`label[for="${t.id}"]`)) == null ? void 0 : u.textContent) == null ? void 0 : i.trim()) || "";
          o.note = {
            type: "todo",
            text: `【フォーム要素】${l || p || v.toLowerCase()}`
          };
        }
      } else e.type === "api" && (o.note = {
        type: "question",
        text: `【動的データ】${d.substring(0, 100)}${d.length > 100 ? "..." : ""}`
      });
    }
    return o;
  }
  const T = f(!1), N = f(0), w = f([]);
  async function j() {
    T.value = !0, N.value = 0, w.value = [];
    try {
      const t = [
        // Text elements
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "span",
        "label",
        "a",
        "th",
        "td",
        "li",
        "button",
        "div",
        // Include divs but filter later
        // Form elements
        "input",
        "select",
        "textarea",
        // Other interactive
        '[role="button"]',
        '[role="link"]',
        '[role="menuitem"]'
      ].join(","), n = document.querySelectorAll(t), e = [];
      n.forEach((u) => {
        var X;
        const i = u;
        if (i.closest("[data-dev-inspector]")) return;
        const d = window.getComputedStyle(i);
        if (d.display === "none" || d.visibility === "hidden" || d.opacity === "0") return;
        const v = D(i);
        if (r.value[v]) return;
        const p = i.tagName.toUpperCase(), l = ((X = i.textContent) == null ? void 0 : X.trim()) || "";
        if (p === "INPUT" || p === "SELECT" || p === "TEXTAREA") {
          e.push(i);
          return;
        }
        if (l.length > 300 || l.length === 0 || p === "DIV" && (Array.from(i.childNodes).filter((S) => S.nodeType === Node.TEXT_NODE).map((S) => {
          var F;
          return ((F = S.textContent) == null ? void 0 : F.trim()) || "";
        }).join("").trim().length === 0 || i.children.length > 3))
          return;
        const g = Array.from(i.childNodes).some((A) => {
          var S;
          return A.nodeType === Node.TEXT_NODE && (((S = A.textContent) == null ? void 0 : S.trim()) || "").length > 0;
        }), vt = !Array.from(i.children).some((A) => ["DIV", "P", "UL", "OL", "TABLE", "SECTION", "ARTICLE"].includes(A.tagName));
        (g || i.children.length === 0 && l.length > 0 || vt) && e.push(i);
      });
      const o = e.length;
      let s = 0, a = 0;
      const c = 20;
      for (let u = 0; u < e.length; u += c) {
        const i = e.slice(u, u + c);
        for (const d of i) {
          const v = D(d), p = k(d, v);
          p.sourceBinding && (w.value.push({ selector: v, element: d, detected: p }), R(v, p), a++), s++, N.value = Math.round(s / o * 100);
        }
        await new Promise((d) => setTimeout(d, 10));
      }
      return a;
    } finally {
      T.value = !1, N.value = 100;
    }
  }
  const B = f([]), $ = f("");
  async function rt(t) {
    var e;
    if (!t)
      return console.warn("[DevInspector] Router not provided for all pages scan"), [];
    T.value = !0;
    const n = [];
    try {
      const o = t.getRoutes(), s = [];
      for (const a of o)
        a.path.includes(":") && !a.path.includes("?") || a.redirect || a.path !== "/:pathMatch(.*)*" && ((e = a.meta) != null && e.devInspectorSkip || s.push(a.path));
      B.value = s;
      for (const a of s) {
        $.value = a;
        try {
          await t.push(a), await new Promise((u) => setTimeout(u, 500));
          const c = await j();
          n.push({ page: a, count: c });
        } catch (c) {
          console.warn(`[DevInspector] Failed to scan page ${a}:`, c), n.push({ page: a, count: 0 });
        }
      }
      return n;
    } finally {
      T.value = !1, $.value = "";
    }
  }
  function it() {
    w.value = [], N.value = 0;
  }
  function lt(t) {
    y.value = t;
  }
  function ct() {
    y.value = null;
  }
  function ut() {
    return JSON.stringify(r.value, null, 2);
  }
  function M() {
    const t = {
      _meta: {
        version: "1.0.0",
        description: "Dev Inspector annotations",
        lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
      },
      annotations: r.value
    };
    return JSON.stringify(t, null, 2);
  }
  function dt(t = "dev-annotations.json") {
    const n = M(), e = new Blob([n], { type: "application/json" }), o = URL.createObjectURL(e), s = document.createElement("a");
    s.href = o, s.download = t, document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL(o);
  }
  function ft(t) {
    try {
      const n = JSON.parse(t), e = n.annotations || n;
      r.value = { ...r.value, ...e };
    } catch (n) {
      throw console.error("[DevInspector] Failed to import configs:", n), new Error("Invalid JSON format");
    }
  }
  function pt() {
    r.value = {};
  }
  return {
    // State
    isEnabled: m,
    isAvailable: x,
    isEditMode: h,
    isPickMode: E,
    hoveredSelector: P,
    currentScreenSpec: b,
    isPanelOpen: C,
    elementConfigs: r,
    editingElementId: y,
    // Actions
    init: W,
    toggle: V,
    enable: Z,
    disable: q,
    toggleEditMode: K,
    togglePickMode: G,
    setHoveredSelector: H,
    generateSelector: D,
    getConfiguredSelectors: Y,
    setScreenSpec: Q,
    clearScreenSpec: tt,
    togglePanel: et,
    openPanel: nt,
    closePanel: ot,
    getElementConfig: at,
    setElementConfig: R,
    deleteElementConfig: st,
    startEditing: lt,
    stopEditing: ct,
    exportConfigs: ut,
    exportAsFile: M,
    downloadAnnotations: dt,
    importConfigs: ft,
    clearAllConfigs: pt,
    detectSourceBinding: U,
    autoDetectElementInfo: k,
    // Scan
    isScanning: T,
    scanProgress: N,
    scanResults: w,
    scanCurrentPage: j,
    scanAllPages: rt,
    allPagesRoutes: B,
    currentScanPage: $,
    clearScanResults: it
  };
});
function Tt() {
  return St();
}
export {
  Tt as a,
  St as u
};
