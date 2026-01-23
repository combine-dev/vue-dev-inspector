import { ref as l, computed as U, watch as le, nextTick as A } from "vue";
import { defineStore as re } from "pinia";
const ue = {}, fe = "devInspector:elementConfigs", de = re("devInspector", () => {
  const m = l({}), f = l(!1), u = l(!1), v = l(!1), S = l(null), p = l(!1), i = l({}), d = l(null), E = l(null), O = U(() => m.value.storageKey || fe), C = U(() => m.value.enabledInProduction ? !0 : typeof import.meta < "u" && ue ? !1 : process.env.NODE_ENV === "development");
  function $(e = {}) {
    m.value = e, B();
  }
  function B() {
    try {
      const e = m.value.initialAnnotations || {};
      if (typeof window < "u") {
        const t = localStorage.getItem(O.value), n = t ? JSON.parse(t) : {};
        i.value = { ...e, ...n };
      } else
        i.value = e;
    } catch (e) {
      console.error("[DevInspector] Failed to load configs:", e);
    }
  }
  function N() {
    try {
      if (typeof window < "u") {
        const e = JSON.stringify(i.value);
        localStorage.setItem(O.value, e), console.log("[DevInspector] Saved configs:", Object.keys(i.value).length, "items");
      }
    } catch (e) {
      console.error("[DevInspector] Failed to save configs:", e);
    }
  }
  le(i, () => {
    A(() => {
      N();
    });
  }, { deep: !0 });
  function F() {
    C.value && (f.value = !f.value, f.value || (u.value = !1, d.value = null));
  }
  function J() {
    C.value && (f.value = !0);
  }
  function M() {
    f.value = !1, u.value = !1, d.value = null;
  }
  function H() {
    u.value = !u.value, u.value || (d.value = null), u.value && (v.value = !1);
  }
  function W() {
    v.value = !v.value, v.value && (u.value = !1), E.value = null;
  }
  function K(e) {
    E.value = e;
  }
  function P(e) {
    if (e.id)
      return `#${e.id}`;
    if (e.dataset.devId)
      return `[data-dev-id="${e.dataset.devId}"]`;
    const t = [];
    let n = e;
    for (; n && n !== document.body; ) {
      let a = n.tagName.toLowerCase();
      if (n.id) {
        a = `#${n.id}`, t.unshift(a);
        break;
      }
      const c = Array.from(n.classList).filter((s) => !s.startsWith("hover:") && !s.startsWith("focus:")).slice(0, 2);
      c.length > 0 && (a += "." + c.join("."));
      const o = n.parentElement;
      if (o) {
        const s = Array.from(o.children).filter(
          (r) => r.tagName === n.tagName
        );
        if (s.length > 1) {
          const r = s.indexOf(n) + 1;
          a += `:nth-child(${r})`;
        }
      }
      t.unshift(a), n = n.parentElement;
    }
    return t.join(" > ");
  }
  function V() {
    const e = typeof window < "u" ? window.location.pathname : "/";
    return Object.keys(i.value).filter((t) => {
      const n = i.value[t];
      return n ? (t.includes(">") || t.startsWith("#") || t.startsWith("[") || t.startsWith(".")) && (!n.componentPath || n.componentPath.includes(e) || e === "/") : !1;
    });
  }
  function q(e) {
    S.value = e;
  }
  function G() {
    S.value = null;
  }
  function X() {
    p.value = !p.value;
  }
  function Y() {
    p.value = !0;
  }
  function z() {
    p.value = !1;
  }
  function Q(e) {
    return i.value[e];
  }
  function x(e, t) {
    var o;
    const n = (/* @__PURE__ */ new Date()).toISOString(), a = i.value[e], c = {
      ...a,
      ...t,
      id: e,
      componentPath: t.componentPath || ((o = S.value) == null ? void 0 : o.componentPath) || "",
      createdAt: (a == null ? void 0 : a.createdAt) || n,
      updatedAt: n
    };
    i.value = {
      ...i.value,
      [e]: c
    }, A(() => N());
  }
  function Z(e) {
    const { [e]: t, ...n } = i.value;
    i.value = n, A(() => N());
  }
  function D(e) {
    var o;
    const t = ((o = e.textContent) == null ? void 0 : o.trim()) || "", n = e.__vueParentComponent;
    if (n) {
      const s = n.props || {}, r = n.attrs || {};
      if ("modelValue" in s || "model-value" in r)
        return {
          type: "v-model",
          source: "form binding detected",
          isStatic: !1
        };
    }
    const a = e.dataset.source || e.dataset.field || e.dataset.bind;
    return a ? {
      type: "prop",
      source: a,
      isStatic: !1
    } : t.length > 0 && t.length < 100 && !t.includes("{{") && !t.match(/^\d+$/) && // Not just a number
    !t.match(/^\d{4}[-/]\d{2}[-/]\d{2}/) && // Not a date
    e.children.length === 0 && // No child elements
    !e.closest("[v-for]") && // Not inside a loop
    !e.hasAttribute(":") && // No dynamic bindings visible
    (e.tagName === "SPAN" || e.tagName === "LABEL" || e.tagName === "P" || e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "TH" || e.tagName === "BUTTON") ? {
      type: "static",
      isStatic: !0
    } : t.match(/^\d+$/) || t.match(/^\d{4}[-/]\d{2}[-/]\d{2}/) ? {
      type: "api",
      isStatic: !1
    } : null;
  }
  function _(e, t) {
    const n = D(e), a = {};
    return n && (a.sourceBinding = n, n.isStatic && (a.note = {
      type: "info",
      text: "固定文言"
    })), a;
  }
  const g = l(!1), h = l(0), y = l([]);
  async function T() {
    g.value = !0, h.value = 0, y.value = [];
    try {
      const e = document.querySelectorAll("body *:not([data-dev-inspector]):not(script):not(style):not(noscript)"), t = [];
      e.forEach((o) => {
        var R;
        const s = o, r = P(s);
        if (i.value[r]) return;
        const w = ((R = s.textContent) == null ? void 0 : R.trim()) || "";
        w.length > 0 && w.length < 200 && (Array.from(s.childNodes).filter((b) => b.nodeType === Node.TEXT_NODE).map((b) => {
          var j;
          return ((j = b.textContent) == null ? void 0 : j.trim()) || "";
        }).join("").length > 0 || s.children.length === 0) && t.push(s);
      });
      const n = t.length;
      let a = 0, c = 0;
      for (const o of t) {
        const s = P(o), r = _(o, s);
        r.sourceBinding && (y.value.push({ selector: s, element: o, detected: r }), x(s, r), c++), a++, h.value = Math.round(a / n * 100), a % 10 === 0 && await new Promise((w) => setTimeout(w, 0));
      }
      return c;
    } finally {
      g.value = !1, h.value = 100;
    }
  }
  const k = l([]), I = l("");
  async function ee(e) {
    var n;
    if (!e)
      return console.warn("[DevInspector] Router not provided for all pages scan"), [];
    g.value = !0;
    const t = [];
    try {
      const a = e.getRoutes(), c = [];
      for (const o of a)
        o.path.includes(":") && !o.path.includes("?") || o.redirect || o.path !== "/:pathMatch(.*)*" && ((n = o.meta) != null && n.devInspectorSkip || c.push(o.path));
      k.value = c;
      for (const o of c) {
        I.value = o;
        try {
          await e.push(o), await new Promise((r) => setTimeout(r, 500));
          const s = await T();
          t.push({ page: o, count: s });
        } catch (s) {
          console.warn(`[DevInspector] Failed to scan page ${o}:`, s), t.push({ page: o, count: 0 });
        }
      }
      return t;
    } finally {
      g.value = !1, I.value = "";
    }
  }
  function te() {
    y.value = [], h.value = 0;
  }
  function ne(e) {
    d.value = e;
  }
  function oe() {
    d.value = null;
  }
  function ae() {
    return JSON.stringify(i.value, null, 2);
  }
  function L() {
    const e = {
      _meta: {
        version: "1.0.0",
        description: "Dev Inspector annotations",
        lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
      },
      annotations: i.value
    };
    return JSON.stringify(e, null, 2);
  }
  function se(e = "dev-annotations.json") {
    const t = L(), n = new Blob([t], { type: "application/json" }), a = URL.createObjectURL(n), c = document.createElement("a");
    c.href = a, c.download = e, document.body.appendChild(c), c.click(), document.body.removeChild(c), URL.revokeObjectURL(a);
  }
  function ie(e) {
    try {
      const t = JSON.parse(e), n = t.annotations || t;
      i.value = { ...i.value, ...n };
    } catch (t) {
      throw console.error("[DevInspector] Failed to import configs:", t), new Error("Invalid JSON format");
    }
  }
  function ce() {
    i.value = {};
  }
  return {
    // State
    isEnabled: f,
    isAvailable: C,
    isEditMode: u,
    isPickMode: v,
    hoveredSelector: E,
    currentScreenSpec: S,
    isPanelOpen: p,
    elementConfigs: i,
    editingElementId: d,
    // Actions
    init: $,
    toggle: F,
    enable: J,
    disable: M,
    toggleEditMode: H,
    togglePickMode: W,
    setHoveredSelector: K,
    generateSelector: P,
    getConfiguredSelectors: V,
    setScreenSpec: q,
    clearScreenSpec: G,
    togglePanel: X,
    openPanel: Y,
    closePanel: z,
    getElementConfig: Q,
    setElementConfig: x,
    deleteElementConfig: Z,
    startEditing: ne,
    stopEditing: oe,
    exportConfigs: ae,
    exportAsFile: L,
    downloadAnnotations: se,
    importConfigs: ie,
    clearAllConfigs: ce,
    detectSourceBinding: D,
    autoDetectElementInfo: _,
    // Scan
    isScanning: g,
    scanProgress: h,
    scanResults: y,
    scanCurrentPage: T,
    scanAllPages: ee,
    allPagesRoutes: k,
    currentScanPage: I,
    clearScanResults: te
  };
});
function he() {
  return de();
}
export {
  he as a,
  de as u
};
