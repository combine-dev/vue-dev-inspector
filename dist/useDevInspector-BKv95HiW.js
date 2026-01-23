import { ref as s, computed as E, watch as z, nextTick as b } from "vue";
import { defineStore as Q } from "pinia";
const X = {}, Z = "devInspector:elementConfigs", tt = Q("devInspector", () => {
  const g = s({}), u = s(!1), c = s(!1), d = s(!1), m = s(null), v = s(!1), a = s({}), f = s(null), h = s(null), C = E(() => g.value.storageKey || Z), S = E(() => g.value.enabledInProduction ? !0 : typeof import.meta < "u" && X ? !1 : process.env.NODE_ENV === "development");
  function I(t = {}) {
    g.value = t, O();
  }
  function O() {
    try {
      const t = g.value.initialAnnotations || {};
      if (typeof window < "u") {
        const n = localStorage.getItem(C.value), e = n ? JSON.parse(n) : {};
        a.value = { ...t, ...e };
      } else
        a.value = t;
    } catch (t) {
      console.error("[DevInspector] Failed to load configs:", t);
    }
  }
  function y() {
    try {
      if (typeof window < "u") {
        const t = JSON.stringify(a.value);
        localStorage.setItem(C.value, t), console.log("[DevInspector] Saved configs:", Object.keys(a.value).length, "items");
      }
    } catch (t) {
      console.error("[DevInspector] Failed to save configs:", t);
    }
  }
  z(a, () => {
    b(() => {
      y();
    });
  }, { deep: !0 });
  function P() {
    S.value && (u.value = !u.value, u.value || (c.value = !1, f.value = null));
  }
  function A() {
    S.value && (u.value = !0);
  }
  function _() {
    u.value = !1, c.value = !1, f.value = null;
  }
  function D() {
    c.value = !c.value, c.value || (f.value = null), c.value && (d.value = !1);
  }
  function L() {
    d.value = !d.value, d.value && (c.value = !1), h.value = null;
  }
  function k(t) {
    h.value = t;
  }
  function j(t) {
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
      const i = Array.from(e.classList).filter((l) => !l.startsWith("hover:") && !l.startsWith("focus:")).slice(0, 2);
      i.length > 0 && (o += "." + i.join("."));
      const r = e.parentElement;
      if (r) {
        const l = Array.from(r.children).filter(
          (p) => p.tagName === e.tagName
        );
        if (l.length > 1) {
          const p = l.indexOf(e) + 1;
          o += `:nth-child(${p})`;
        }
      }
      n.unshift(o), e = e.parentElement;
    }
    return n.join(" > ");
  }
  function x() {
    const t = typeof window < "u" ? window.location.pathname : "/";
    return Object.keys(a.value).filter((n) => {
      const e = a.value[n];
      return e ? (n.includes(">") || n.startsWith("#") || n.startsWith("[") || n.startsWith(".")) && (!e.componentPath || e.componentPath.includes(t) || t === "/") : !1;
    });
  }
  function U(t) {
    m.value = t;
  }
  function J() {
    m.value = null;
  }
  function T() {
    v.value = !v.value;
  }
  function $() {
    v.value = !0;
  }
  function B() {
    v.value = !1;
  }
  function F(t) {
    return a.value[t];
  }
  function H(t, n) {
    var r;
    const e = (/* @__PURE__ */ new Date()).toISOString(), o = a.value[t], i = {
      ...o,
      ...n,
      id: t,
      componentPath: n.componentPath || ((r = m.value) == null ? void 0 : r.componentPath) || "",
      createdAt: (o == null ? void 0 : o.createdAt) || e,
      updatedAt: e
    };
    a.value = {
      ...a.value,
      [t]: i
    }, b(() => y());
  }
  function R(t) {
    const { [t]: n, ...e } = a.value;
    a.value = e, b(() => y());
  }
  function N(t) {
    var r;
    const n = ((r = t.textContent) == null ? void 0 : r.trim()) || "", e = t.__vueParentComponent;
    if (e) {
      const l = e.props || {}, p = e.attrs || {};
      if ("modelValue" in l || "model-value" in p)
        return {
          type: "v-model",
          source: "form binding detected",
          isStatic: !1
        };
    }
    const o = t.dataset.source || t.dataset.field || t.dataset.bind;
    return o ? {
      type: "prop",
      source: o,
      isStatic: !1
    } : n.length > 0 && n.length < 100 && !n.includes("{{") && !n.match(/^\d+$/) && // Not just a number
    !n.match(/^\d{4}[-/]\d{2}[-/]\d{2}/) && // Not a date
    t.children.length === 0 && // No child elements
    !t.closest("[v-for]") && // Not inside a loop
    !t.hasAttribute(":") && // No dynamic bindings visible
    (t.tagName === "SPAN" || t.tagName === "LABEL" || t.tagName === "P" || t.tagName === "H1" || t.tagName === "H2" || t.tagName === "H3" || t.tagName === "TH" || t.tagName === "BUTTON") ? {
      type: "static",
      isStatic: !0
    } : n.match(/^\d+$/) || n.match(/^\d{4}[-/]\d{2}[-/]\d{2}/) ? {
      type: "api",
      isStatic: !1
    } : null;
  }
  function W(t, n) {
    const e = N(t), o = {};
    return e && (o.sourceBinding = e, e.isStatic && (o.note = {
      type: "info",
      text: "固定文言"
    })), o;
  }
  function M(t) {
    f.value = t;
  }
  function K() {
    f.value = null;
  }
  function V() {
    return JSON.stringify(a.value, null, 2);
  }
  function w() {
    const t = {
      _meta: {
        version: "1.0.0",
        description: "Dev Inspector annotations",
        lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
      },
      annotations: a.value
    };
    return JSON.stringify(t, null, 2);
  }
  function G(t = "dev-annotations.json") {
    const n = w(), e = new Blob([n], { type: "application/json" }), o = URL.createObjectURL(e), i = document.createElement("a");
    i.href = o, i.download = t, document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL(o);
  }
  function Y(t) {
    try {
      const n = JSON.parse(t), e = n.annotations || n;
      a.value = { ...a.value, ...e };
    } catch (n) {
      throw console.error("[DevInspector] Failed to import configs:", n), new Error("Invalid JSON format");
    }
  }
  function q() {
    a.value = {};
  }
  return {
    // State
    isEnabled: u,
    isAvailable: S,
    isEditMode: c,
    isPickMode: d,
    hoveredSelector: h,
    currentScreenSpec: m,
    isPanelOpen: v,
    elementConfigs: a,
    editingElementId: f,
    // Actions
    init: I,
    toggle: P,
    enable: A,
    disable: _,
    toggleEditMode: D,
    togglePickMode: L,
    setHoveredSelector: k,
    generateSelector: j,
    getConfiguredSelectors: x,
    setScreenSpec: U,
    clearScreenSpec: J,
    togglePanel: T,
    openPanel: $,
    closePanel: B,
    getElementConfig: F,
    setElementConfig: H,
    deleteElementConfig: R,
    startEditing: M,
    stopEditing: K,
    exportConfigs: V,
    exportAsFile: w,
    downloadAnnotations: G,
    importConfigs: Y,
    clearAllConfigs: q,
    detectSourceBinding: N,
    autoDetectElementInfo: W
  };
});
function ot() {
  return tt();
}
export {
  ot as a,
  tt as u
};
