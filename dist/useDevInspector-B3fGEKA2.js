import { ref as r, computed as Q, watch as Ie, nextTick as U } from "vue";
import { defineStore as $e } from "pinia";
const xe = {}, De = "devInspector:elementConfigs", Oe = $e("devInspector", () => {
  const N = r({}), C = r(!1), E = r(!1), P = r(!1), F = r(!1), L = r(null), I = r(!1), l = r({}), T = r(null), z = r(null), W = Q(() => N.value.storageKey || De), h = r(null), ee = r("all"), k = Q(() => N.value.enabledInProduction ? !0 : typeof import.meta < "u" && xe ? !1 : process.env.NODE_ENV === "development"), X = r(!1);
  function te(e = {}) {
    N.value = e, ae(), e.analysisData && (h.value = e.analysisData);
    const n = e.analysisDataUrl ?? "/dev-inspector-analysis.json";
    e.autoLoadAnalysis !== !1 && k.value && J(n);
  }
  async function J(e) {
    var n;
    try {
      const t = await fetch(e);
      if (t.ok)
        return h.value = await t.json(), console.log("[DevInspector] Analysis data loaded:", Object.keys(((n = h.value) == null ? void 0 : n.components) || {}).length, "components"), !0;
    } catch {
      console.debug("[DevInspector] Analysis data not found at", e);
    }
    return !1;
  }
  function ne(e) {
    if (!h.value) return null;
    for (const n of Object.values(h.value.components)) {
      const t = n.elements.find((o) => o.selector === e);
      if (t) return t;
    }
    return null;
  }
  function oe(e) {
    if (!h.value) return [];
    const n = [];
    for (const [t, o] of Object.entries(h.value.components))
      (!e || t.includes(e)) && n.push(...o.elements);
    return n;
  }
  function ae() {
    try {
      const e = N.value.initialAnnotations || {};
      if (typeof window < "u") {
        const n = localStorage.getItem(W.value), t = n ? JSON.parse(n) : {};
        l.value = { ...e, ...t };
      } else
        l.value = e;
    } catch (e) {
      console.error("[DevInspector] Failed to load configs:", e);
    }
  }
  function R() {
    try {
      if (typeof window < "u") {
        const e = JSON.stringify(l.value);
        localStorage.setItem(W.value, e), console.log("[DevInspector] Saved configs:", Object.keys(l.value).length, "items");
      }
    } catch (e) {
      console.error("[DevInspector] Failed to save configs:", e);
    }
  }
  Ie(l, () => {
    U(() => {
      R();
    });
  }, { deep: !0 });
  async function se() {
    k.value && (C.value ? (C.value = !1, E.value = !1, T.value = null) : await M());
  }
  async function M() {
    if (!k.value) return;
    if (h.value && !X.value && N.value.autoApplyAnalysis !== !1) {
      F.value = !0, C.value = !0;
      try {
        await new Promise((n) => setTimeout(n, 300)), H(), X.value = !0;
      } finally {
        F.value = !1;
      }
    } else
      C.value = !0;
  }
  function le() {
    C.value = !1, E.value = !1, T.value = null;
  }
  function ie() {
    E.value = !E.value, E.value || (T.value = null), E.value && (P.value = !1);
  }
  function ce() {
    P.value = !P.value, P.value && (E.value = !1), z.value = null;
  }
  function re(e) {
    z.value = e;
  }
  function $(e) {
    if (e.id)
      return `#${e.id}`;
    if (e.dataset.devId)
      return `[data-dev-id="${e.dataset.devId}"]`;
    const n = [];
    let t = e;
    for (; t && t !== document.body; ) {
      let o = t.tagName.toLowerCase();
      if (t.id) {
        o = `#${t.id}`, n.unshift(o);
        break;
      }
      const a = Array.from(t.classList).filter((i) => !i.startsWith("hover:") && !i.startsWith("focus:")).slice(0, 2);
      a.length > 0 && (o += "." + a.join("."));
      const s = t.parentElement;
      if (s) {
        const i = Array.from(s.children).filter(
          (f) => f.tagName === t.tagName
        );
        if (i.length > 1) {
          const f = i.indexOf(t) + 1;
          o += `:nth-child(${f})`;
        }
      }
      n.unshift(o), t = t.parentElement;
    }
    return n.join(" > ");
  }
  function ue() {
    const e = typeof window < "u" ? window.location.pathname : "/";
    return Object.keys(l.value).filter((n) => {
      const t = l.value[n];
      return t ? (n.includes(">") || n.startsWith("#") || n.startsWith("[") || n.startsWith(".")) && (!t.componentPath || t.componentPath.includes(e) || e === "/") : !1;
    });
  }
  function fe(e) {
    L.value = e;
  }
  function de() {
    L.value = null;
  }
  function pe() {
    I.value = !I.value;
  }
  function ve() {
    I.value = !0;
  }
  function ge() {
    I.value = !1;
  }
  function he(e) {
    return l.value[e];
  }
  function Z(e, n) {
    var s;
    const t = (/* @__PURE__ */ new Date()).toISOString(), o = l.value[e], a = {
      ...o,
      ...n,
      id: e,
      componentPath: n.componentPath || ((s = L.value) == null ? void 0 : s.componentPath) || "",
      createdAt: (o == null ? void 0 : o.createdAt) || t,
      updatedAt: t
    };
    l.value = {
      ...l.value,
      [e]: a
    }, U(() => R());
  }
  function me(e) {
    const { [e]: n, ...t } = l.value;
    l.value = t, U(() => R());
  }
  function q(e) {
    var j;
    const n = ((j = e.textContent) == null ? void 0 : j.trim()) || "", t = e.tagName.toUpperCase();
    if (!n && t !== "INPUT" && t !== "SELECT" && t !== "TEXTAREA")
      return null;
    const o = e.__vueParentComponent;
    if (o) {
      const d = o.props || {}, v = o.attrs || {};
      if ("modelValue" in d || "model-value" in v)
        return {
          type: "v-model",
          source: "form binding detected",
          isStatic: !1
        };
    }
    if (t === "INPUT" || t === "SELECT" || t === "TEXTAREA") {
      const d = e.type || "text", v = e.placeholder || "";
      return {
        type: "v-model",
        source: `${t.toLowerCase()}[type=${d}]${v ? ` placeholder="${v}"` : ""}`,
        isStatic: !1
      };
    }
    const a = e.dataset.source || e.dataset.field || e.dataset.bind;
    if (a)
      return {
        type: "prop",
        source: a,
        isStatic: !1
      };
    if (e.closest("tbody") || e.closest('[role="rowgroup"]'))
      return {
        type: "api",
        source: "table data",
        isStatic: !1
      };
    const s = e.closest('ul, ol, [role="list"]');
    if (s && s.children.length > 1)
      return {
        type: "api",
        source: "list item",
        isStatic: !1
      };
    const i = [
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
    for (const d of i) {
      const v = e.closest(d);
      if (v) {
        const m = v.parentElement;
        if (m && Array.from(m.children).filter(
          (w) => w !== v && w.className === v.className
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
      const d = e.parentElement, m = Array.from(d.children).filter((S) => S.tagName === e.tagName);
      if (m.length >= 2 && m.filter(
        (w) => w.children.length === e.children.length
      ).length >= 2)
        return {
          type: "api",
          source: "repeated element",
          isStatic: !1
        };
    }
    const g = [
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
    for (const d of g)
      if (d.test(n))
        return {
          type: "api",
          source: "dynamic data pattern",
          isStatic: !1
        };
    const u = [
      /^[\u4e00-\u9faf]{2,4}$/,
      // Japanese Kanji names (2-4 chars)
      /^[\u3040-\u309f\u30a0-\u30ff]{2,6}$/,
      // Hiragana/Katakana names
      /^[A-Z][a-z]+ [A-Z][a-z]+$/
      // English names like "John Smith"
    ];
    for (const d of u)
      if (d.test(n))
        return {
          type: "api",
          source: "name pattern",
          isStatic: !1
        };
    const p = ["LABEL", "TH", "LEGEND", "FIGCAPTION"].includes(t), y = [
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
    ].some((d) => d.test(n)), O = t === "BUTTON" || e.closest("button") !== null || e.getAttribute("role") === "button";
    return p || y || O && n.length < 20 ? {
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
    var a, s, i, f, g;
    const t = q(e), o = {};
    if (t) {
      o.sourceBinding = t;
      const u = ((a = e.textContent) == null ? void 0 : a.trim()) || "";
      if (t.isStatic)
        o.note = {
          type: "info",
          text: `【固定文言】${u}`
        };
      else if (t.type === "v-model") {
        const c = e.tagName.toUpperCase();
        if (c === "INPUT" || c === "SELECT" || c === "TEXTAREA") {
          const p = e.placeholder || "", b = ((i = (s = e.closest("label")) == null ? void 0 : s.textContent) == null ? void 0 : i.trim()) || e.getAttribute("aria-label") || ((g = (f = document.querySelector(`label[for="${e.id}"]`)) == null ? void 0 : f.textContent) == null ? void 0 : g.trim()) || "";
          o.note = {
            type: "todo",
            text: `【フォーム要素】${b || p || c.toLowerCase()}`
          };
        }
      } else t.type === "api" && (o.note = {
        type: "question",
        text: `【動的データ】${u.substring(0, 100)}${u.length > 100 ? "..." : ""}`
      });
    }
    return o;
  }
  const x = r(!1), D = r(0), _ = r([]);
  async function K(e = {}) {
    x.value = !0, D.value = 0, _.value = [];
    const { rescan: n = !1 } = e;
    if (n) {
      const t = typeof window < "u" ? window.location.pathname : "/", o = Object.keys(l.value).filter((a) => {
        const s = l.value[a];
        return !s.componentPath || s.componentPath.includes(t);
      });
      for (const a of o)
        delete l.value[a];
      U(() => R());
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
      ].join(","), o = document.querySelectorAll(t), a = [];
      o.forEach((u) => {
        var v;
        const c = u;
        if (c.closest("[data-dev-inspector]")) return;
        const p = window.getComputedStyle(c);
        if (p.display === "none" || p.visibility === "hidden" || p.opacity === "0") return;
        const b = $(c);
        if (l.value[b]) return;
        const y = c.tagName.toUpperCase(), O = ((v = c.textContent) == null ? void 0 : v.trim()) || "";
        if (y === "INPUT" || y === "SELECT" || y === "TEXTAREA") {
          a.push(c);
          return;
        }
        if (O.length > 300 || O.length === 0 || y === "DIV" && (Array.from(c.childNodes).filter((S) => S.nodeType === Node.TEXT_NODE).map((S) => {
          var w;
          return ((w = S.textContent) == null ? void 0 : w.trim()) || "";
        }).join("").trim().length === 0 || c.children.length > 3))
          return;
        const j = Array.from(c.childNodes).some((m) => {
          var S;
          return m.nodeType === Node.TEXT_NODE && (((S = m.textContent) == null ? void 0 : S.trim()) || "").length > 0;
        }), d = !Array.from(c.children).some((m) => ["DIV", "P", "UL", "OL", "TABLE", "SECTION", "ARTICLE"].includes(m.tagName));
        (j || c.children.length === 0 && O.length > 0 || d) && a.push(c);
      });
      const s = a.length;
      let i = 0, f = 0;
      const g = 20;
      for (let u = 0; u < a.length; u += g) {
        const c = a.slice(u, u + g);
        for (const p of c) {
          const b = $(p), y = G(p, b);
          y.sourceBinding && (_.value.push({ selector: b, element: p, detected: y }), Z(b, y), f++), i++, D.value = Math.round(i / s * 100);
        }
        await new Promise((p) => setTimeout(p, 10));
      }
      return f;
    } finally {
      x.value = !1, D.value = 100;
    }
  }
  const V = r([]), B = r("");
  async function ye(e) {
    var t;
    if (!e)
      return console.warn("[DevInspector] Router not provided for all pages scan"), [];
    x.value = !0;
    const n = [];
    try {
      const o = e.getRoutes(), a = [];
      for (const s of o)
        s.path.includes(":") && !s.path.includes("?") || s.redirect || s.path !== "/:pathMatch(.*)*" && ((t = s.meta) != null && t.devInspectorSkip || a.push(s.path));
      V.value = a;
      for (const s of a) {
        B.value = s;
        try {
          await e.push(s), await new Promise((f) => setTimeout(f, 500));
          const i = await K();
          n.push({ page: s, count: i });
        } catch (i) {
          console.warn(`[DevInspector] Failed to scan page ${s}:`, i), n.push({ page: s, count: 0 });
        }
      }
      return n;
    } finally {
      x.value = !1, B.value = "";
    }
  }
  function Se() {
    _.value = [], D.value = 0;
  }
  const A = r([]);
  async function H() {
    var t;
    if (!h.value)
      return console.warn("[DevInspector] No analysis data loaded. Call loadAnalysisData first."), 0;
    A.value = [];
    const e = typeof window < "u" ? window.location.pathname : "/", n = [];
    for (const [o, a] of Object.entries(h.value.components)) {
      const s = o.replace(/^pages/, "").replace(/\.vue$/, "").replace(/\/index$/, "").replace(/\[.*?\]/g, "[^/]+");
      e === "/" && o.includes("index") ? n.push(...a.elements) : o.includes("pages/") && e.match(new RegExp(`^${s}$`)) ? n.push(...a.elements) : o.includes("components/") && n.push(...a.elements);
    }
    for (const o of n) {
      let a = !1, s = o.selector;
      try {
        document.querySelector(o.selector) && (a = !0);
      } catch {
      }
      if (!a && o.type === "static" && o.text) {
        const i = o.text.replace(/\[コメント\]\s*/, ""), f = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT,
          null
        );
        for (; f.nextNode(); ) {
          const g = f.currentNode;
          if ((t = g.textContent) != null && t.includes(i)) {
            const u = g.parentElement;
            if (u) {
              a = !0, s = $(u);
              break;
            }
          }
        }
      }
      if (!a && o.selector.includes(".")) {
        const i = o.selector.match(/^(\w+)\.(.+)$/);
        if (i) {
          const [, f, g] = i, u = document.querySelectorAll(`${f}.${g.split(".")[0]}`);
          u.length > 0 && (a = !0, s = $(u[0]));
        }
      }
      A.value.push({
        selector: s,
        element: o,
        matched: a
      });
    }
    return console.log(`[DevInspector] Applied analysis: ${A.value.filter((o) => o.matched).length}/${A.value.length} elements matched`), A.value.filter((o) => o.matched).length;
  }
  function Ae() {
    A.value = [];
  }
  function Ee(e) {
    A.value = A.value.filter((n) => n.selector !== e);
  }
  function be(e) {
    T.value = e;
  }
  function we() {
    T.value = null;
  }
  function Ce() {
    return JSON.stringify(l.value, null, 2);
  }
  function Y() {
    const e = {
      _meta: {
        version: "1.0.0",
        description: "Dev Inspector annotations",
        lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
      },
      annotations: l.value
    };
    return JSON.stringify(e, null, 2);
  }
  function Te(e = "dev-annotations.json") {
    const n = Y(), t = new Blob([n], { type: "application/json" }), o = URL.createObjectURL(t), a = document.createElement("a");
    a.href = o, a.download = e, document.body.appendChild(a), a.click(), document.body.removeChild(a), URL.revokeObjectURL(o);
  }
  function Ne(e) {
    try {
      const n = JSON.parse(e), t = n.annotations || n;
      l.value = { ...l.value, ...t };
    } catch (n) {
      throw console.error("[DevInspector] Failed to import configs:", n), new Error("Invalid JSON format");
    }
  }
  function Pe() {
    l.value = {};
  }
  return {
    // State
    isEnabled: C,
    isAvailable: k,
    isEditMode: E,
    isPickMode: P,
    isInitializing: F,
    hoveredSelector: z,
    currentScreenSpec: L,
    isPanelOpen: I,
    elementConfigs: l,
    editingElementId: T,
    // Actions
    init: te,
    toggle: se,
    enable: M,
    disable: le,
    toggleEditMode: ie,
    togglePickMode: ce,
    setHoveredSelector: re,
    generateSelector: $,
    getConfiguredSelectors: ue,
    setScreenSpec: fe,
    clearScreenSpec: de,
    togglePanel: pe,
    openPanel: ve,
    closePanel: ge,
    getElementConfig: he,
    setElementConfig: Z,
    deleteElementConfig: me,
    startEditing: be,
    stopEditing: we,
    exportConfigs: Ce,
    exportAsFile: Y,
    downloadAnnotations: Te,
    importConfigs: Ne,
    clearAllConfigs: Pe,
    detectSourceBinding: q,
    autoDetectElementInfo: G,
    // Scan
    isScanning: x,
    scanProgress: D,
    scanResults: _,
    scanCurrentPage: K,
    scanAllPages: ye,
    allPagesRoutes: V,
    currentScanPage: B,
    clearScanResults: Se,
    // Analysis data
    analysisData: h,
    loadAnalysisData: J,
    getAnalyzedElement: ne,
    getAnalyzedElementsForPage: oe,
    analysisResults: A,
    applyAnalysisToPage: H,
    clearAnalysisResults: Ae,
    removeAnalysisResult: Ee,
    analysisFilter: ee
  };
});
function Re() {
  return Oe();
}
export {
  Re as a,
  Oe as u
};
