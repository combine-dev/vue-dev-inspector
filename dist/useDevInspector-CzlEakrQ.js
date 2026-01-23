import { ref as u, computed as G, watch as bt, nextTick as _ } from "vue";
import { defineStore as Ct } from "pinia";
const At = {}, wt = "devInspector:elementConfigs", Tt = Ct("devInspector", () => {
  const D = u({}), A = u(!1), y = u(!1), T = u(!1), O = u(null), N = u(!1), i = u({}), w = u(null), R = u(null), F = G(() => D.value.storageKey || wt), S = u(null), j = G(() => D.value.enabledInProduction ? !0 : typeof import.meta < "u" && At ? !1 : process.env.NODE_ENV === "development");
  function K(t = {}) {
    D.value = t, Y(), t.analysisData && (S.value = t.analysisData);
  }
  async function V(t) {
    var n;
    try {
      const e = await fetch(t);
      e.ok && (S.value = await e.json(), console.log("[DevInspector] Analysis data loaded:", Object.keys(((n = S.value) == null ? void 0 : n.components) || {}).length, "components"));
    } catch (e) {
      console.warn("[DevInspector] Failed to load analysis data:", e);
    }
  }
  function q(t) {
    if (!S.value) return null;
    for (const n of Object.values(S.value.components)) {
      const e = n.elements.find((o) => o.selector === t);
      if (e) return e;
    }
    return null;
  }
  function H(t) {
    if (!S.value) return [];
    const n = [];
    for (const [e, o] of Object.entries(S.value.components))
      (!t || e.includes(t)) && n.push(...o.elements);
    return n;
  }
  function Y() {
    try {
      const t = D.value.initialAnnotations || {};
      if (typeof window < "u") {
        const n = localStorage.getItem(F.value), e = n ? JSON.parse(n) : {};
        i.value = { ...t, ...e };
      } else
        i.value = t;
    } catch (t) {
      console.error("[DevInspector] Failed to load configs:", t);
    }
  }
  function x() {
    try {
      if (typeof window < "u") {
        const t = JSON.stringify(i.value);
        localStorage.setItem(F.value, t), console.log("[DevInspector] Saved configs:", Object.keys(i.value).length, "items");
      }
    } catch (t) {
      console.error("[DevInspector] Failed to save configs:", t);
    }
  }
  bt(i, () => {
    _(() => {
      x();
    });
  }, { deep: !0 });
  function Q() {
    j.value && (A.value = !A.value, A.value || (y.value = !1, w.value = null));
  }
  function tt() {
    j.value && (A.value = !0);
  }
  function et() {
    A.value = !1, y.value = !1, w.value = null;
  }
  function nt() {
    y.value = !y.value, y.value || (w.value = null), y.value && (T.value = !1);
  }
  function ot() {
    T.value = !T.value, T.value && (y.value = !1), R.value = null;
  }
  function at(t) {
    R.value = t;
  }
  function U(t) {
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
      const a = Array.from(e.classList).filter((r) => !r.startsWith("hover:") && !r.startsWith("focus:")).slice(0, 2);
      a.length > 0 && (o += "." + a.join("."));
      const s = e.parentElement;
      if (s) {
        const r = Array.from(s.children).filter(
          (p) => p.tagName === e.tagName
        );
        if (r.length > 1) {
          const p = r.indexOf(e) + 1;
          o += `:nth-child(${p})`;
        }
      }
      n.unshift(o), e = e.parentElement;
    }
    return n.join(" > ");
  }
  function st() {
    const t = typeof window < "u" ? window.location.pathname : "/";
    return Object.keys(i.value).filter((n) => {
      const e = i.value[n];
      return e ? (n.includes(">") || n.startsWith("#") || n.startsWith("[") || n.startsWith(".")) && (!e.componentPath || e.componentPath.includes(t) || t === "/") : !1;
    });
  }
  function it(t) {
    O.value = t;
  }
  function lt() {
    O.value = null;
  }
  function rt() {
    N.value = !N.value;
  }
  function ct() {
    N.value = !0;
  }
  function ut() {
    N.value = !1;
  }
  function ft(t) {
    return i.value[t];
  }
  function z(t, n) {
    var s;
    const e = (/* @__PURE__ */ new Date()).toISOString(), o = i.value[t], a = {
      ...o,
      ...n,
      id: t,
      componentPath: n.componentPath || ((s = O.value) == null ? void 0 : s.componentPath) || "",
      createdAt: (o == null ? void 0 : o.createdAt) || e,
      updatedAt: e
    };
    i.value = {
      ...i.value,
      [t]: a
    }, _(() => x());
  }
  function dt(t) {
    const { [t]: n, ...e } = i.value;
    i.value = e, _(() => x());
  }
  function J(t) {
    var k;
    const n = ((k = t.textContent) == null ? void 0 : k.trim()) || "", e = t.tagName.toUpperCase();
    if (!n && e !== "INPUT" && e !== "SELECT" && e !== "TEXTAREA")
      return null;
    const o = t.__vueParentComponent;
    if (o) {
      const c = o.props || {}, d = o.attrs || {};
      if ("modelValue" in c || "model-value" in d)
        return {
          type: "v-model",
          source: "form binding detected",
          isStatic: !1
        };
    }
    if (e === "INPUT" || e === "SELECT" || e === "TEXTAREA") {
      const c = t.type || "text", d = t.placeholder || "";
      return {
        type: "v-model",
        source: `${e.toLowerCase()}[type=${c}]${d ? ` placeholder="${d}"` : ""}`,
        isStatic: !1
      };
    }
    const a = t.dataset.source || t.dataset.field || t.dataset.bind;
    if (a)
      return {
        type: "prop",
        source: a,
        isStatic: !1
      };
    if (t.closest("tbody") || t.closest('[role="rowgroup"]'))
      return {
        type: "api",
        source: "table data",
        isStatic: !1
      };
    const s = t.closest('ul, ol, [role="list"]');
    if (s && s.children.length > 1)
      return {
        type: "api",
        source: "list item",
        isStatic: !1
      };
    const r = [
      '[class*="card"]',
      '[class*="Card"]',
      '[class*="item"]',
      '[class*="Item"]',
      '[class*="row"]',
      '[class*="Row"]',
      '[class*="list"]',
      '[class*="List"]',
      '[class*="grid"]',
      '[class*="Grid"]',
      '[role="listitem"]',
      '[role="row"]',
      '[role="gridcell"]'
    ];
    for (const c of r) {
      const d = t.closest(c);
      if (d) {
        const g = d.parentElement;
        if (g && Array.from(g.children).filter(
          (C) => C !== d && C.className === d.className
        ).length > 0)
          return {
            type: "api",
            source: "repeated container",
            isStatic: !1
          };
      }
    }
    if (t.closest("[v-for]") !== null || t.closest("[data-v-for]") !== null)
      return {
        type: "api",
        source: "loop item",
        isStatic: !1
      };
    if (t.parentElement) {
      const c = t.parentElement, g = Array.from(c.children).filter((m) => m.tagName === t.tagName);
      if (g.length >= 2 && g.filter(
        (C) => C.children.length === t.children.length
      ).length >= 2)
        return {
          type: "api",
          source: "repeated element",
          isStatic: !1
        };
    }
    const b = [
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
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      // Emails
      /^\d+件$/,
      // Japanese count
      /^\d+個$/,
      // Japanese count
      /^第?\d+/
      // Numbered items
    ];
    for (const c of b)
      if (c.test(n))
        return {
          type: "api",
          source: "dynamic data pattern",
          isStatic: !1
        };
    const v = [
      /^[\u4e00-\u9faf]{2,4}$/,
      // Japanese Kanji names (2-4 chars)
      /^[\u3040-\u309f\u30a0-\u30ff]{2,6}$/,
      // Hiragana/Katakana names
      /^[A-Z][a-z]+ [A-Z][a-z]+$/
      // English names like "John Smith"
    ];
    for (const c of v)
      if (c.test(n))
        return {
          type: "api",
          source: "name pattern",
          isStatic: !1
        };
    const f = ["LABEL", "TH", "LEGEND", "FIGCAPTION"].includes(e), h = [
      /^(保存|キャンセル|閉じる|開く|編集|削除|追加|検索|送信|確認|戻る|次へ|完了|OK|Yes|No|Cancel|Save|Submit|Close|Open|Edit|Delete|Add|Search|Back|Next|Done)$/,
      /^[\u30a0-\u30ff]+$/,
      // Pure katakana (often UI labels)
      /項目$/,
      // Ends with 項目
      /一覧$/,
      // Ends with 一覧
      /設定$/,
      // Ends with 設定
      /情報$/
      // Ends with 情報
    ].some((c) => c.test(n)), $ = e === "BUTTON" || t.closest("button") !== null || t.getAttribute("role") === "button";
    return f || h || $ && n.length < 20 ? {
      type: "static",
      source: n.substring(0, 50) + (n.length > 50 ? "..." : ""),
      isStatic: !0
    } : n.length <= 10 && /^[\u3040-\u30ff\u4e00-\u9faf]+$/.test(n) ? {
      type: "prop",
      source: "short text (verify manually)",
      isStatic: !1
    } : n.length > 0 && n.length < 200 ? {
      type: "api",
      source: "content (assumed dynamic)",
      isStatic: !1
    } : null;
  }
  function M(t, n) {
    var a, s, r, p, b;
    const e = J(t), o = {};
    if (e) {
      o.sourceBinding = e;
      const v = ((a = t.textContent) == null ? void 0 : a.trim()) || "";
      if (e.isStatic)
        o.note = {
          type: "info",
          text: `【固定文言】${v}`
        };
      else if (e.type === "v-model") {
        const l = t.tagName.toUpperCase();
        if (l === "INPUT" || l === "SELECT" || l === "TEXTAREA") {
          const f = t.placeholder || "", E = ((r = (s = t.closest("label")) == null ? void 0 : s.textContent) == null ? void 0 : r.trim()) || t.getAttribute("aria-label") || ((b = (p = document.querySelector(`label[for="${t.id}"]`)) == null ? void 0 : p.textContent) == null ? void 0 : b.trim()) || "";
          o.note = {
            type: "todo",
            text: `【フォーム要素】${E || f || l.toLowerCase()}`
          };
        }
      } else e.type === "api" && (o.note = {
        type: "question",
        text: `【動的データ】${v.substring(0, 100)}${v.length > 100 ? "..." : ""}`
      });
    }
    return o;
  }
  const I = u(!1), P = u(0), L = u([]);
  async function X(t = {}) {
    I.value = !0, P.value = 0, L.value = [];
    const { rescan: n = !1 } = t;
    if (n) {
      const e = typeof window < "u" ? window.location.pathname : "/", o = Object.keys(i.value).filter((a) => {
        const s = i.value[a];
        return !s.componentPath || s.componentPath.includes(e);
      });
      for (const a of o)
        delete i.value[a];
      _(() => x());
    }
    try {
      const e = [
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
      ].join(","), o = document.querySelectorAll(e), a = [];
      o.forEach((v) => {
        var d;
        const l = v;
        if (l.closest("[data-dev-inspector]")) return;
        const f = window.getComputedStyle(l);
        if (f.display === "none" || f.visibility === "hidden" || f.opacity === "0") return;
        const E = U(l);
        if (i.value[E]) return;
        const h = l.tagName.toUpperCase(), $ = ((d = l.textContent) == null ? void 0 : d.trim()) || "";
        if (h === "INPUT" || h === "SELECT" || h === "TEXTAREA") {
          a.push(l);
          return;
        }
        if ($.length > 300 || $.length === 0 || h === "DIV" && (Array.from(l.childNodes).filter((m) => m.nodeType === Node.TEXT_NODE).map((m) => {
          var C;
          return ((C = m.textContent) == null ? void 0 : C.trim()) || "";
        }).join("").trim().length === 0 || l.children.length > 3))
          return;
        const k = Array.from(l.childNodes).some((g) => {
          var m;
          return g.nodeType === Node.TEXT_NODE && (((m = g.textContent) == null ? void 0 : m.trim()) || "").length > 0;
        }), c = !Array.from(l.children).some((g) => ["DIV", "P", "UL", "OL", "TABLE", "SECTION", "ARTICLE"].includes(g.tagName));
        (k || l.children.length === 0 && $.length > 0 || c) && a.push(l);
      });
      const s = a.length;
      let r = 0, p = 0;
      const b = 20;
      for (let v = 0; v < a.length; v += b) {
        const l = a.slice(v, v + b);
        for (const f of l) {
          const E = U(f), h = M(f, E);
          h.sourceBinding && (L.value.push({ selector: E, element: f, detected: h }), z(E, h), p++), r++, P.value = Math.round(r / s * 100);
        }
        await new Promise((f) => setTimeout(f, 10));
      }
      return p;
    } finally {
      I.value = !1, P.value = 100;
    }
  }
  const Z = u([]), B = u("");
  async function pt(t) {
    var e;
    if (!t)
      return console.warn("[DevInspector] Router not provided for all pages scan"), [];
    I.value = !0;
    const n = [];
    try {
      const o = t.getRoutes(), a = [];
      for (const s of o)
        s.path.includes(":") && !s.path.includes("?") || s.redirect || s.path !== "/:pathMatch(.*)*" && ((e = s.meta) != null && e.devInspectorSkip || a.push(s.path));
      Z.value = a;
      for (const s of a) {
        B.value = s;
        try {
          await t.push(s), await new Promise((p) => setTimeout(p, 500));
          const r = await X();
          n.push({ page: s, count: r });
        } catch (r) {
          console.warn(`[DevInspector] Failed to scan page ${s}:`, r), n.push({ page: s, count: 0 });
        }
      }
      return n;
    } finally {
      I.value = !1, B.value = "";
    }
  }
  function vt() {
    L.value = [], P.value = 0;
  }
  function gt(t) {
    w.value = t;
  }
  function ht() {
    w.value = null;
  }
  function mt() {
    return JSON.stringify(i.value, null, 2);
  }
  function W() {
    const t = {
      _meta: {
        version: "1.0.0",
        description: "Dev Inspector annotations",
        lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
      },
      annotations: i.value
    };
    return JSON.stringify(t, null, 2);
  }
  function yt(t = "dev-annotations.json") {
    const n = W(), e = new Blob([n], { type: "application/json" }), o = URL.createObjectURL(e), a = document.createElement("a");
    a.href = o, a.download = t, document.body.appendChild(a), a.click(), document.body.removeChild(a), URL.revokeObjectURL(o);
  }
  function St(t) {
    try {
      const n = JSON.parse(t), e = n.annotations || n;
      i.value = { ...i.value, ...e };
    } catch (n) {
      throw console.error("[DevInspector] Failed to import configs:", n), new Error("Invalid JSON format");
    }
  }
  function Et() {
    i.value = {};
  }
  return {
    // State
    isEnabled: A,
    isAvailable: j,
    isEditMode: y,
    isPickMode: T,
    hoveredSelector: R,
    currentScreenSpec: O,
    isPanelOpen: N,
    elementConfigs: i,
    editingElementId: w,
    // Actions
    init: K,
    toggle: Q,
    enable: tt,
    disable: et,
    toggleEditMode: nt,
    togglePickMode: ot,
    setHoveredSelector: at,
    generateSelector: U,
    getConfiguredSelectors: st,
    setScreenSpec: it,
    clearScreenSpec: lt,
    togglePanel: rt,
    openPanel: ct,
    closePanel: ut,
    getElementConfig: ft,
    setElementConfig: z,
    deleteElementConfig: dt,
    startEditing: gt,
    stopEditing: ht,
    exportConfigs: mt,
    exportAsFile: W,
    downloadAnnotations: yt,
    importConfigs: St,
    clearAllConfigs: Et,
    detectSourceBinding: J,
    autoDetectElementInfo: M,
    // Scan
    isScanning: I,
    scanProgress: P,
    scanResults: L,
    scanCurrentPage: X,
    scanAllPages: pt,
    allPagesRoutes: Z,
    currentScanPage: B,
    clearScanResults: vt,
    // Analysis data
    analysisData: S,
    loadAnalysisData: V,
    getAnalyzedElement: q,
    getAnalyzedElementsForPage: H
  };
});
function Pt() {
  return Tt();
}
export {
  Pt as a,
  Tt as u
};
