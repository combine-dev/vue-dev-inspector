import { ref as i, computed as E, watch as V } from "vue";
import { defineStore as Y } from "pinia";
const q = {}, z = "devInspector:elementConfigs", Q = Y("devInspector", () => {
  const v = i({}), s = i(!1), r = i(!1), u = i(!1), p = i(null), f = i(!1), o = i({}), c = i(null), g = i(null), S = E(() => v.value.storageKey || z), m = E(() => v.value.enabledInProduction ? !0 : typeof import.meta < "u" && q ? !1 : process.env.NODE_ENV === "development");
  function C(e = {}) {
    v.value = e, I();
  }
  function I() {
    try {
      const e = v.value.initialAnnotations || {};
      if (typeof window < "u") {
        const n = localStorage.getItem(S.value), t = n ? JSON.parse(n) : {};
        o.value = { ...e, ...t };
      } else
        o.value = e;
    } catch (e) {
      console.error("[DevInspector] Failed to load configs:", e);
    }
  }
  function b() {
    try {
      typeof window < "u" && localStorage.setItem(S.value, JSON.stringify(o.value));
    } catch (e) {
      console.error("[DevInspector] Failed to save configs:", e);
    }
  }
  V(o, b, { deep: !0 });
  function O() {
    m.value && (s.value = !s.value, s.value || (r.value = !1, c.value = null));
  }
  function P() {
    m.value && (s.value = !0);
  }
  function A() {
    s.value = !1, r.value = !1, c.value = null;
  }
  function N() {
    r.value = !r.value, r.value || (c.value = null), r.value && (u.value = !1);
  }
  function _() {
    u.value = !u.value, u.value && (r.value = !1), g.value = null;
  }
  function D(e) {
    g.value = e;
  }
  function j(e) {
    if (e.id)
      return `#${e.id}`;
    if (e.dataset.devId)
      return `[data-dev-id="${e.dataset.devId}"]`;
    const n = [];
    let t = e;
    for (; t && t !== document.body; ) {
      let a = t.tagName.toLowerCase();
      if (t.id) {
        a = `#${t.id}`, n.unshift(a);
        break;
      }
      const l = Array.from(t.classList).filter((d) => !d.startsWith("hover:") && !d.startsWith("focus:")).slice(0, 2);
      l.length > 0 && (a += "." + l.join("."));
      const y = t.parentElement;
      if (y) {
        const d = Array.from(y.children).filter(
          (h) => h.tagName === t.tagName
        );
        if (d.length > 1) {
          const h = d.indexOf(t) + 1;
          a += `:nth-child(${h})`;
        }
      }
      n.unshift(a), t = t.parentElement;
    }
    return n.join(" > ");
  }
  function L() {
    const e = typeof window < "u" ? window.location.pathname : "/";
    return Object.keys(o.value).filter((n) => {
      const t = o.value[n];
      return t ? (n.includes(">") || n.startsWith("#") || n.startsWith("[") || n.startsWith(".")) && (!t.componentPath || t.componentPath.includes(e) || e === "/") : !1;
    });
  }
  function k(e) {
    p.value = e;
  }
  function J() {
    p.value = null;
  }
  function U() {
    f.value = !f.value;
  }
  function F() {
    f.value = !0;
  }
  function R() {
    f.value = !1;
  }
  function W(e) {
    return o.value[e];
  }
  function x(e, n) {
    var l;
    const t = (/* @__PURE__ */ new Date()).toISOString(), a = o.value[e];
    o.value[e] = {
      ...a,
      ...n,
      id: e,
      componentPath: n.componentPath || ((l = p.value) == null ? void 0 : l.componentPath) || "",
      createdAt: (a == null ? void 0 : a.createdAt) || t,
      updatedAt: t
    };
  }
  function M(e) {
    delete o.value[e];
  }
  function $(e) {
    c.value = e;
  }
  function K() {
    c.value = null;
  }
  function T() {
    return JSON.stringify(o.value, null, 2);
  }
  function w() {
    const e = {
      _meta: {
        version: "1.0.0",
        description: "Dev Inspector annotations",
        lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
      },
      annotations: o.value
    };
    return JSON.stringify(e, null, 2);
  }
  function B(e = "dev-annotations.json") {
    const n = w(), t = new Blob([n], { type: "application/json" }), a = URL.createObjectURL(t), l = document.createElement("a");
    l.href = a, l.download = e, document.body.appendChild(l), l.click(), document.body.removeChild(l), URL.revokeObjectURL(a);
  }
  function G(e) {
    try {
      const n = JSON.parse(e), t = n.annotations || n;
      o.value = { ...o.value, ...t };
    } catch (n) {
      throw console.error("[DevInspector] Failed to import configs:", n), new Error("Invalid JSON format");
    }
  }
  function H() {
    o.value = {};
  }
  return {
    // State
    isEnabled: s,
    isAvailable: m,
    isEditMode: r,
    isPickMode: u,
    hoveredSelector: g,
    currentScreenSpec: p,
    isPanelOpen: f,
    elementConfigs: o,
    editingElementId: c,
    // Actions
    init: C,
    toggle: O,
    enable: P,
    disable: A,
    toggleEditMode: N,
    togglePickMode: _,
    setHoveredSelector: D,
    generateSelector: j,
    getConfiguredSelectors: L,
    setScreenSpec: k,
    clearScreenSpec: J,
    togglePanel: U,
    openPanel: F,
    closePanel: R,
    getElementConfig: W,
    setElementConfig: x,
    deleteElementConfig: M,
    startEditing: $,
    stopEditing: K,
    exportConfigs: T,
    exportAsFile: w,
    downloadAnnotations: B,
    importConfigs: G,
    clearAllConfigs: H
  };
});
function ee() {
  return Q();
}
export {
  ee as a,
  Q as u
};
