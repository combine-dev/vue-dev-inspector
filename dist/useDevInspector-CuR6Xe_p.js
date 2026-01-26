import { ref as d, computed as te, watch as xe, nextTick as F } from "vue";
import { defineStore as Re } from "pinia";
const ke = {}, _e = "devInspector:elementConfigs", je = Re("devInspector", () => {
  const P = d({}), b = d(!1), C = d(!1), $ = d(!1), B = d(!1), R = d(null), O = d(!1), u = d({}), N = d(null), z = d(null), M = te(() => P.value.storageKey || _e), m = d(null), ne = d("all"), T = d(/* @__PURE__ */ new Set()), J = "devInspector:hiddenAnalysisSelectors", k = te(() => P.value.enabledInProduction ? !0 : typeof import.meta < "u" && ke ? !1 : process.env.NODE_ENV === "development"), W = d(!1);
  function oe(e = {}) {
    P.value = e, le(), be(), e.analysisData && (m.value = e.analysisData);
    const n = e.analysisDataUrl ?? "/dev-inspector-analysis.json";
    e.autoLoadAnalysis !== !1 && k.value && X(n);
  }
  async function X(e) {
    var n;
    try {
      const t = await fetch(e);
      if (t.ok)
        return m.value = await t.json(), console.log("[DevInspector] Analysis data loaded:", Object.keys(((n = m.value) == null ? void 0 : n.components) || {}).length, "components"), !0;
    } catch {
      console.debug("[DevInspector] Analysis data not found at", e);
    }
    return !1;
  }
  function ae(e) {
    if (!m.value) return null;
    for (const n of Object.values(m.value.components)) {
      const t = n.elements.find((a) => a.selector === e);
      if (t) return t;
    }
    return null;
  }
  function se(e) {
    if (!m.value) return [];
    const n = [];
    for (const [t, a] of Object.entries(m.value.components))
      (!e || t.includes(e)) && n.push(...a.elements);
    return n;
  }
  function le() {
    try {
      const e = P.value.initialAnnotations || {};
      if (typeof window < "u") {
        const n = localStorage.getItem(M.value), t = n ? JSON.parse(n) : {};
        u.value = { ...e, ...t };
      } else
        u.value = e;
    } catch (e) {
      console.error("[DevInspector] Failed to load configs:", e);
    }
  }
  function _() {
    try {
      if (typeof window < "u") {
        const e = JSON.stringify(u.value);
        localStorage.setItem(M.value, e), console.log("[DevInspector] Saved configs:", Object.keys(u.value).length, "items");
      }
    } catch (e) {
      console.error("[DevInspector] Failed to save configs:", e);
    }
  }
  xe(u, () => {
    F(() => {
      _();
    });
  }, { deep: !0 });
  async function ce() {
    k.value && (b.value ? (b.value = !1, C.value = !1, N.value = null) : await q());
  }
  async function q() {
    if (!k.value) return;
    if (m.value && !W.value && P.value.autoApplyAnalysis !== !1) {
      B.value = !0, b.value = !0;
      try {
        await new Promise((n) => setTimeout(n, 300)), Q(), W.value = !0;
      } finally {
        B.value = !1;
      }
    } else
      b.value = !0;
  }
  function ie() {
    b.value = !1, C.value = !1, N.value = null;
  }
  function re() {
    C.value = !C.value, C.value || (N.value = null), C.value && ($.value = !1);
  }
  function ue() {
    $.value = !$.value, $.value && (C.value = !1), z.value = null;
  }
  function fe(e) {
    z.value = e;
  }
  function I(e) {
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
      const l = Array.from(t.classList).filter((o) => !o.startsWith("hover:") && !o.startsWith("focus:")).slice(0, 2);
      l.length > 0 && (a += "." + l.join("."));
      const c = t.parentElement;
      if (c) {
        const o = Array.from(c.children).filter(
          (s) => s.tagName === t.tagName
        );
        if (o.length > 1) {
          const s = o.indexOf(t) + 1;
          a += `:nth-child(${s})`;
        }
      }
      n.unshift(a), t = t.parentElement;
    }
    return n.join(" > ");
  }
  function de() {
    const e = typeof window < "u" ? window.location.pathname : "/";
    return Object.keys(u.value).filter((n) => {
      const t = u.value[n];
      return t ? (n.includes(">") || n.startsWith("#") || n.startsWith("[") || n.startsWith(".")) && (!t.componentPath || t.componentPath.includes(e) || e === "/") : !1;
    });
  }
  function pe(e) {
    R.value = e;
  }
  function ve() {
    R.value = null;
  }
  function me() {
    O.value = !O.value;
  }
  function he() {
    O.value = !0;
  }
  function ge() {
    O.value = !1;
  }
  function ye(e) {
    return u.value[e];
  }
  function Z(e, n) {
    var c;
    const t = (/* @__PURE__ */ new Date()).toISOString(), a = u.value[e], l = {
      ...a,
      ...n,
      id: e,
      componentPath: n.componentPath || ((c = R.value) == null ? void 0 : c.componentPath) || "",
      createdAt: (a == null ? void 0 : a.createdAt) || t,
      updatedAt: t
    };
    u.value = {
      ...u.value,
      [e]: l
    }, F(() => _());
  }
  function Se(e) {
    const { [e]: n, ...t } = u.value;
    u.value = t, F(() => _());
  }
  function K(e) {
    var U;
    const n = ((U = e.textContent) == null ? void 0 : U.trim()) || "", t = e.tagName.toUpperCase();
    if (!n && t !== "INPUT" && t !== "SELECT" && t !== "TEXTAREA")
      return null;
    const a = e.__vueParentComponent;
    if (a) {
      const v = a.props || {}, g = a.attrs || {};
      if ("modelValue" in v || "model-value" in g)
        return {
          type: "v-model",
          source: "form binding detected",
          isStatic: !1
        };
    }
    if (t === "INPUT" || t === "SELECT" || t === "TEXTAREA") {
      const v = e.type || "text", g = e.placeholder || "";
      return {
        type: "v-model",
        source: `${t.toLowerCase()}[type=${v}]${g ? ` placeholder="${g}"` : ""}`,
        isStatic: !1
      };
    }
    const l = e.dataset.source || e.dataset.field || e.dataset.bind;
    if (l)
      return {
        type: "prop",
        source: l,
        isStatic: !1
      };
    if (e.closest("tbody") || e.closest('[role="rowgroup"]'))
      return {
        type: "api",
        source: "table data",
        isStatic: !1
      };
    const c = e.closest('ul, ol, [role="list"]');
    if (c && c.children.length > 1)
      return {
        type: "api",
        source: "list item",
        isStatic: !1
      };
    const o = [
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
    for (const v of o) {
      const g = e.closest(v);
      if (g) {
        const y = g.parentElement;
        if (y && Array.from(y.children).filter(
          (w) => w !== g && w.className === g.className
        ).length > 0)
          return {
            type: "api",
            source: "repeated container",
            isStatic: !1
          };
      }
    }
    if (e.closest("[v-for]") !== null || e.closest("[data-v-for]") !== null)
      return {
        type: "api",
        source: "loop item",
        isStatic: !1
      };
    if (e.parentElement) {
      const v = e.parentElement, y = Array.from(v.children).filter((E) => E.tagName === e.tagName);
      if (y.length >= 2 && y.filter(
        (w) => w.children.length === e.children.length
      ).length >= 2)
        return {
          type: "api",
          source: "repeated element",
          isStatic: !1
        };
    }
    const f = [
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
    for (const v of f)
      if (v.test(n))
        return {
          type: "api",
          source: "dynamic data pattern",
          isStatic: !1
        };
    const r = [
      /^[\u4e00-\u9faf]{2,4}$/,
      // Japanese Kanji names (2-4 chars)
      /^[\u3040-\u309f\u30a0-\u30ff]{2,6}$/,
      // Hiragana/Katakana names
      /^[A-Z][a-z]+ [A-Z][a-z]+$/
      // English names like "John Smith"
    ];
    for (const v of r)
      if (v.test(n))
        return {
          type: "api",
          source: "name pattern",
          isStatic: !1
        };
    const p = ["LABEL", "TH", "LEGEND", "FIGCAPTION"].includes(t), S = [
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
    ].some((v) => v.test(n)), x = t === "BUTTON" || e.closest("button") !== null || e.getAttribute("role") === "button";
    return p || S || x && n.length < 20 ? {
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
  function G(e, n) {
    var l, c, o, s, f;
    const t = K(e), a = {};
    if (t) {
      a.sourceBinding = t;
      const r = ((l = e.textContent) == null ? void 0 : l.trim()) || "";
      if (t.isStatic)
        a.note = {
          type: "info",
          text: `【固定文言】${r}`
        };
      else if (t.type === "v-model") {
        const i = e.tagName.toUpperCase();
        if (i === "INPUT" || i === "SELECT" || i === "TEXTAREA") {
          const p = e.placeholder || "", h = ((o = (c = e.closest("label")) == null ? void 0 : c.textContent) == null ? void 0 : o.trim()) || e.getAttribute("aria-label") || ((f = (s = document.querySelector(`label[for="${e.id}"]`)) == null ? void 0 : s.textContent) == null ? void 0 : f.trim()) || "";
          a.note = {
            type: "todo",
            text: `【フォーム要素】${h || p || i.toLowerCase()}`
          };
        }
      } else t.type === "api" && (a.note = {
        type: "question",
        text: `【動的データ】${r.substring(0, 100)}${r.length > 100 ? "..." : ""}`
      });
    }
    return a;
  }
  const D = d(!1), L = d(0), j = d([]);
  async function V(e = {}) {
    D.value = !0, L.value = 0, j.value = [];
    const { rescan: n = !1 } = e;
    if (n) {
      const t = typeof window < "u" ? window.location.pathname : "/", a = Object.keys(u.value).filter((l) => {
        const c = u.value[l];
        return !c.componentPath || c.componentPath.includes(t);
      });
      for (const l of a)
        delete u.value[l];
      F(() => _());
    }
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
      ].join(","), a = document.querySelectorAll(t), l = [];
      a.forEach((r) => {
        var g;
        const i = r;
        if (i.closest("[data-dev-inspector]")) return;
        const p = window.getComputedStyle(i);
        if (p.display === "none" || p.visibility === "hidden" || p.opacity === "0") return;
        const h = I(i);
        if (u.value[h]) return;
        const S = i.tagName.toUpperCase(), x = ((g = i.textContent) == null ? void 0 : g.trim()) || "";
        if (S === "INPUT" || S === "SELECT" || S === "TEXTAREA") {
          l.push(i);
          return;
        }
        if (x.length > 300 || x.length === 0 || S === "DIV" && (Array.from(i.childNodes).filter((E) => E.nodeType === Node.TEXT_NODE).map((E) => {
          var w;
          return ((w = E.textContent) == null ? void 0 : w.trim()) || "";
        }).join("").trim().length === 0 || i.children.length > 3))
          return;
        const U = Array.from(i.childNodes).some((y) => {
          var E;
          return y.nodeType === Node.TEXT_NODE && (((E = y.textContent) == null ? void 0 : E.trim()) || "").length > 0;
        }), v = !Array.from(i.children).some((y) => ["DIV", "P", "UL", "OL", "TABLE", "SECTION", "ARTICLE"].includes(y.tagName));
        (U || i.children.length === 0 && x.length > 0 || v) && l.push(i);
      });
      const c = l.length;
      let o = 0, s = 0;
      const f = 20;
      for (let r = 0; r < l.length; r += f) {
        const i = l.slice(r, r + f);
        for (const p of i) {
          const h = I(p), S = G(p, h);
          S.sourceBinding && (j.value.push({ selector: h, element: p, detected: S }), Z(h, S), s++), o++, L.value = Math.round(o / c * 100);
        }
        await new Promise((p) => setTimeout(p, 10));
      }
      return s;
    } finally {
      D.value = !1, L.value = 100;
    }
  }
  const Y = d([]), H = d("");
  async function Ee(e) {
    var t;
    if (!e)
      return console.warn("[DevInspector] Router not provided for all pages scan"), [];
    D.value = !0;
    const n = [];
    try {
      const a = e.getRoutes(), l = [];
      for (const c of a)
        c.path.includes(":") && !c.path.includes("?") || c.redirect || c.path !== "/:pathMatch(.*)*" && ((t = c.meta) != null && t.devInspectorSkip || l.push(c.path));
      Y.value = l;
      for (const c of l) {
        H.value = c;
        try {
          await e.push(c), await new Promise((s) => setTimeout(s, 500));
          const o = await V();
          n.push({ page: c, count: o });
        } catch (o) {
          console.warn(`[DevInspector] Failed to scan page ${c}:`, o), n.push({ page: c, count: 0 });
        }
      }
      return n;
    } finally {
      D.value = !1, H.value = "";
    }
  }
  function Ae() {
    j.value = [], L.value = 0;
  }
  const A = d([]);
  async function Q() {
    var c;
    if (!m.value)
      return console.warn("[DevInspector] No analysis data loaded. Call loadAnalysisData first."), 0;
    A.value = [];
    const e = typeof window < "u" ? window.location.pathname : "/", n = (o) => {
      if (!m.value) return null;
      for (const [s, f] of Object.entries(m.value.components))
        if (f.componentName === o || f.componentName.toLowerCase() === o.toLowerCase() || s.toLowerCase().includes(`/${o.toLowerCase()}.vue`))
          return f;
      return null;
    }, t = (o, s = /* @__PURE__ */ new Set()) => {
      const f = [];
      if (s.has(o.componentName)) return f;
      if (s.add(o.componentName), f.push(...o.elements), o.usedComponents)
        for (const r of o.usedComponents) {
          const i = n(r);
          i && f.push(...t(i, s));
        }
      return f;
    }, a = [], l = /* @__PURE__ */ new Set();
    for (const [o, s] of Object.entries(m.value.components)) {
      const f = o.replace(/^pages/, "").replace(/\.vue$/, "").replace(/\/index$/, "").replace(/\[.*?\]/g, "[^/]+");
      let r = !1;
      if ((e === "/" && o.includes("index") || o.includes("pages/") && e.match(new RegExp(`^${f}$`))) && (r = !0), r) {
        const i = t(s);
        a.push(...i), l.add(s.componentName), s.usedComponents && s.usedComponents.forEach((p) => l.add(p));
      }
    }
    for (const [o, s] of Object.entries(m.value.components))
      o.includes("components/") && !l.has(s.componentName) && a.push(...s.elements);
    for (const o of a) {
      if (T.value.has(o.selector))
        continue;
      let s = !1, f = o.selector;
      try {
        document.querySelector(o.selector) && (s = !0);
      } catch {
      }
      if (!s && o.type === "static" && o.text) {
        const r = o.text.replace(/\[コメント\]\s*/, ""), i = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT,
          null
        );
        for (; i.nextNode(); ) {
          const p = i.currentNode;
          if ((c = p.textContent) != null && c.includes(r)) {
            const h = p.parentElement;
            if (h) {
              s = !0, f = I(h);
              break;
            }
          }
        }
      }
      if (!s && o.selector.includes(".")) {
        const r = o.selector.match(/^(\w+)\.(.+)$/);
        if (r) {
          const [, i, p] = r;
          try {
            const h = document.querySelector(o.selector);
            h && (s = !0, f = I(h));
          } catch {
          }
        }
      }
      if (!s && o.type === "data" && o.binding) {
        const r = `[data-bind="${o.binding}"]`;
        try {
          const i = document.querySelector(r);
          i && (s = !0, f = I(i));
        } catch {
        }
      }
      A.value.push({
        selector: f,
        element: o,
        matched: s
      });
    }
    return console.log(`[DevInspector] Applied analysis: ${A.value.filter((o) => o.matched).length}/${A.value.length} elements matched`), A.value.filter((o) => o.matched).length;
  }
  function Ce() {
    A.value = [];
  }
  function we(e) {
    A.value = A.value.filter((n) => n.selector !== e), T.value.add(e), Ne();
  }
  function be() {
    try {
      const e = localStorage.getItem(J);
      e && (T.value = new Set(JSON.parse(e)));
    } catch {
    }
  }
  function Ne() {
    try {
      localStorage.setItem(
        J,
        JSON.stringify([...T.value])
      );
    } catch {
    }
  }
  function Te() {
    T.value.clear(), localStorage.removeItem(J);
  }
  function Ie(e) {
    N.value = e;
  }
  function Pe() {
    N.value = null;
  }
  function $e() {
    return JSON.stringify(u.value, null, 2);
  }
  function ee() {
    const e = {
      _meta: {
        version: "1.0.0",
        description: "Dev Inspector annotations",
        lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
      },
      annotations: u.value
    };
    return JSON.stringify(e, null, 2);
  }
  function Oe(e = "dev-annotations.json") {
    const n = ee(), t = new Blob([n], { type: "application/json" }), a = URL.createObjectURL(t), l = document.createElement("a");
    l.href = a, l.download = e, document.body.appendChild(l), l.click(), document.body.removeChild(l), URL.revokeObjectURL(a);
  }
  function De(e) {
    try {
      const n = JSON.parse(e), t = n.annotations || n;
      u.value = { ...u.value, ...t };
    } catch (n) {
      throw console.error("[DevInspector] Failed to import configs:", n), new Error("Invalid JSON format");
    }
  }
  function Le() {
    u.value = {};
  }
  return {
    // State
    isEnabled: b,
    isAvailable: k,
    isEditMode: C,
    isPickMode: $,
    isInitializing: B,
    hoveredSelector: z,
    currentScreenSpec: R,
    isPanelOpen: O,
    elementConfigs: u,
    editingElementId: N,
    // Actions
    init: oe,
    toggle: ce,
    enable: q,
    disable: ie,
    toggleEditMode: re,
    togglePickMode: ue,
    setHoveredSelector: fe,
    generateSelector: I,
    getConfiguredSelectors: de,
    setScreenSpec: pe,
    clearScreenSpec: ve,
    togglePanel: me,
    openPanel: he,
    closePanel: ge,
    getElementConfig: ye,
    setElementConfig: Z,
    deleteElementConfig: Se,
    startEditing: Ie,
    stopEditing: Pe,
    exportConfigs: $e,
    exportAsFile: ee,
    downloadAnnotations: Oe,
    importConfigs: De,
    clearAllConfigs: Le,
    detectSourceBinding: K,
    autoDetectElementInfo: G,
    // Scan
    isScanning: D,
    scanProgress: L,
    scanResults: j,
    scanCurrentPage: V,
    scanAllPages: Ee,
    allPagesRoutes: Y,
    currentScanPage: H,
    clearScanResults: Ae,
    // Analysis data
    analysisData: m,
    loadAnalysisData: X,
    getAnalyzedElement: ae,
    getAnalyzedElementsForPage: se,
    analysisResults: A,
    applyAnalysisToPage: Q,
    clearAnalysisResults: Ce,
    removeAnalysisResult: we,
    clearHiddenSelectors: Te,
    hiddenAnalysisSelectors: T,
    analysisFilter: ne
  };
});
function Be() {
  return je();
}
export {
  Be as a,
  je as u
};
