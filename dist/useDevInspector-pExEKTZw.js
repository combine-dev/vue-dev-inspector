import { ref as u, computed as H, watch as Ne, nextTick as U } from "vue";
import { defineStore as Pe } from "pinia";
const Ie = {}, $e = "devInspector:elementConfigs", xe = Pe("devInspector", () => {
  const L = u({}), C = u(!1), E = u(!1), N = u(!1), F = u(!1), O = u(null), P = u(!1), l = u({}), T = u(null), z = u(null), W = H(() => L.value.storageKey || $e), h = u(null), Y = u("db-api"), k = H(() => L.value.enabledInProduction ? !0 : typeof import.meta < "u" && Ie ? !1 : process.env.NODE_ENV === "development");
  async function Q(e = {}) {
    L.value = e, ne(), e.analysisData && (h.value = e.analysisData);
    const n = e.analysisDataUrl ?? "/dev-inspector-analysis.json";
    if (e.autoLoadAnalysis !== !1 && k.value) {
      F.value = !0;
      try {
        await X(n), h.value && e.autoApplyAnalysis !== !1 && (await new Promise((o) => setTimeout(o, 300)), K());
      } finally {
        F.value = !1;
      }
    }
  }
  async function X(e) {
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
  function ee(e) {
    if (!h.value) return null;
    for (const n of Object.values(h.value.components)) {
      const t = n.elements.find((o) => o.selector === e);
      if (t) return t;
    }
    return null;
  }
  function te(e) {
    if (!h.value) return [];
    const n = [];
    for (const [t, o] of Object.entries(h.value.components))
      (!e || t.includes(e)) && n.push(...o.elements);
    return n;
  }
  function ne() {
    try {
      const e = L.value.initialAnnotations || {};
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
  Ne(l, () => {
    U(() => {
      R();
    });
  }, { deep: !0 });
  function oe() {
    k.value && (C.value = !C.value, C.value || (E.value = !1, T.value = null));
  }
  function ae() {
    k.value && (C.value = !0);
  }
  function se() {
    C.value = !1, E.value = !1, T.value = null;
  }
  function le() {
    E.value = !E.value, E.value || (T.value = null), E.value && (N.value = !1);
  }
  function ie() {
    N.value = !N.value, N.value && (E.value = !1), z.value = null;
  }
  function ce(e) {
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
  function re() {
    const e = typeof window < "u" ? window.location.pathname : "/";
    return Object.keys(l.value).filter((n) => {
      const t = l.value[n];
      return t ? (n.includes(">") || n.startsWith("#") || n.startsWith("[") || n.startsWith(".")) && (!t.componentPath || t.componentPath.includes(e) || e === "/") : !1;
    });
  }
  function ue(e) {
    O.value = e;
  }
  function fe() {
    O.value = null;
  }
  function de() {
    P.value = !P.value;
  }
  function pe() {
    P.value = !0;
  }
  function ve() {
    P.value = !1;
  }
  function ge(e) {
    return l.value[e];
  }
  function J(e, n) {
    var s;
    const t = (/* @__PURE__ */ new Date()).toISOString(), o = l.value[e], a = {
      ...o,
      ...n,
      id: e,
      componentPath: n.componentPath || ((s = O.value) == null ? void 0 : s.componentPath) || "",
      createdAt: (o == null ? void 0 : o.createdAt) || t,
      updatedAt: t
    };
    l.value = {
      ...l.value,
      [e]: a
    }, U(() => R());
  }
  function he(e) {
    const { [e]: n, ...t } = l.value;
    l.value = t, U(() => R());
  }
  function M(e) {
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
    const r = [
      /^[\u4e00-\u9faf]{2,4}$/,
      // Japanese Kanji names (2-4 chars)
      /^[\u3040-\u309f\u30a0-\u30ff]{2,6}$/,
      // Hiragana/Katakana names
      /^[A-Z][a-z]+ [A-Z][a-z]+$/
      // English names like "John Smith"
    ];
    for (const d of r)
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
    ].some((d) => d.test(n)), D = t === "BUTTON" || e.closest("button") !== null || e.getAttribute("role") === "button";
    return p || y || D && n.length < 20 ? {
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
  function Z(e, n) {
    var a, s, i, f, g;
    const t = M(e), o = {};
    if (t) {
      o.sourceBinding = t;
      const r = ((a = e.textContent) == null ? void 0 : a.trim()) || "";
      if (t.isStatic)
        o.note = {
          type: "info",
          text: `【固定文言】${r}`
        };
      else if (t.type === "v-model") {
        const c = e.tagName.toUpperCase();
        if (c === "INPUT" || c === "SELECT" || c === "TEXTAREA") {
          const p = e.placeholder || "", A = ((i = (s = e.closest("label")) == null ? void 0 : s.textContent) == null ? void 0 : i.trim()) || e.getAttribute("aria-label") || ((g = (f = document.querySelector(`label[for="${e.id}"]`)) == null ? void 0 : f.textContent) == null ? void 0 : g.trim()) || "";
          o.note = {
            type: "todo",
            text: `【フォーム要素】${A || p || c.toLowerCase()}`
          };
        }
      } else t.type === "api" && (o.note = {
        type: "question",
        text: `【動的データ】${r.substring(0, 100)}${r.length > 100 ? "..." : ""}`
      });
    }
    return o;
  }
  const $ = u(!1), x = u(0), _ = u([]);
  async function q(e = {}) {
    $.value = !0, x.value = 0, _.value = [];
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
      o.forEach((r) => {
        var v;
        const c = r;
        if (c.closest("[data-dev-inspector]")) return;
        const p = window.getComputedStyle(c);
        if (p.display === "none" || p.visibility === "hidden" || p.opacity === "0") return;
        const A = I(c);
        if (l.value[A]) return;
        const y = c.tagName.toUpperCase(), D = ((v = c.textContent) == null ? void 0 : v.trim()) || "";
        if (y === "INPUT" || y === "SELECT" || y === "TEXTAREA") {
          a.push(c);
          return;
        }
        if (D.length > 300 || D.length === 0 || y === "DIV" && (Array.from(c.childNodes).filter((S) => S.nodeType === Node.TEXT_NODE).map((S) => {
          var w;
          return ((w = S.textContent) == null ? void 0 : w.trim()) || "";
        }).join("").trim().length === 0 || c.children.length > 3))
          return;
        const j = Array.from(c.childNodes).some((m) => {
          var S;
          return m.nodeType === Node.TEXT_NODE && (((S = m.textContent) == null ? void 0 : S.trim()) || "").length > 0;
        }), d = !Array.from(c.children).some((m) => ["DIV", "P", "UL", "OL", "TABLE", "SECTION", "ARTICLE"].includes(m.tagName));
        (j || c.children.length === 0 && D.length > 0 || d) && a.push(c);
      });
      const s = a.length;
      let i = 0, f = 0;
      const g = 20;
      for (let r = 0; r < a.length; r += g) {
        const c = a.slice(r, r + g);
        for (const p of c) {
          const A = I(p), y = Z(p, A);
          y.sourceBinding && (_.value.push({ selector: A, element: p, detected: y }), J(A, y), f++), i++, x.value = Math.round(i / s * 100);
        }
        await new Promise((p) => setTimeout(p, 10));
      }
      return f;
    } finally {
      $.value = !1, x.value = 100;
    }
  }
  const G = u([]), B = u("");
  async function me(e) {
    var t;
    if (!e)
      return console.warn("[DevInspector] Router not provided for all pages scan"), [];
    $.value = !0;
    const n = [];
    try {
      const o = e.getRoutes(), a = [];
      for (const s of o)
        s.path.includes(":") && !s.path.includes("?") || s.redirect || s.path !== "/:pathMatch(.*)*" && ((t = s.meta) != null && t.devInspectorSkip || a.push(s.path));
      G.value = a;
      for (const s of a) {
        B.value = s;
        try {
          await e.push(s), await new Promise((f) => setTimeout(f, 500));
          const i = await q();
          n.push({ page: s, count: i });
        } catch (i) {
          console.warn(`[DevInspector] Failed to scan page ${s}:`, i), n.push({ page: s, count: 0 });
        }
      }
      return n;
    } finally {
      $.value = !1, B.value = "";
    }
  }
  function ye() {
    _.value = [], x.value = 0;
  }
  const b = u([]);
  async function K() {
    var t;
    if (!h.value)
      return console.warn("[DevInspector] No analysis data loaded. Call loadAnalysisData first."), 0;
    b.value = [];
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
            const r = g.parentElement;
            if (r) {
              a = !0, s = I(r);
              break;
            }
          }
        }
      }
      if (!a && o.selector.includes(".")) {
        const i = o.selector.match(/^(\w+)\.(.+)$/);
        if (i) {
          const [, f, g] = i, r = document.querySelectorAll(`${f}.${g.split(".")[0]}`);
          r.length > 0 && (a = !0, s = I(r[0]));
        }
      }
      b.value.push({
        selector: s,
        element: o,
        matched: a
      });
    }
    return console.log(`[DevInspector] Applied analysis: ${b.value.filter((o) => o.matched).length}/${b.value.length} elements matched`), b.value.filter((o) => o.matched).length;
  }
  function Se() {
    b.value = [];
  }
  function Ee(e) {
    T.value = e;
  }
  function Ae() {
    T.value = null;
  }
  function be() {
    return JSON.stringify(l.value, null, 2);
  }
  function V() {
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
  function we(e = "dev-annotations.json") {
    const n = V(), t = new Blob([n], { type: "application/json" }), o = URL.createObjectURL(t), a = document.createElement("a");
    a.href = o, a.download = e, document.body.appendChild(a), a.click(), document.body.removeChild(a), URL.revokeObjectURL(o);
  }
  function Ce(e) {
    try {
      const n = JSON.parse(e), t = n.annotations || n;
      l.value = { ...l.value, ...t };
    } catch (n) {
      throw console.error("[DevInspector] Failed to import configs:", n), new Error("Invalid JSON format");
    }
  }
  function Te() {
    l.value = {};
  }
  return {
    // State
    isEnabled: C,
    isAvailable: k,
    isEditMode: E,
    isPickMode: N,
    isInitializing: F,
    hoveredSelector: z,
    currentScreenSpec: O,
    isPanelOpen: P,
    elementConfigs: l,
    editingElementId: T,
    // Actions
    init: Q,
    toggle: oe,
    enable: ae,
    disable: se,
    toggleEditMode: le,
    togglePickMode: ie,
    setHoveredSelector: ce,
    generateSelector: I,
    getConfiguredSelectors: re,
    setScreenSpec: ue,
    clearScreenSpec: fe,
    togglePanel: de,
    openPanel: pe,
    closePanel: ve,
    getElementConfig: ge,
    setElementConfig: J,
    deleteElementConfig: he,
    startEditing: Ee,
    stopEditing: Ae,
    exportConfigs: be,
    exportAsFile: V,
    downloadAnnotations: we,
    importConfigs: Ce,
    clearAllConfigs: Te,
    detectSourceBinding: M,
    autoDetectElementInfo: Z,
    // Scan
    isScanning: $,
    scanProgress: x,
    scanResults: _,
    scanCurrentPage: q,
    scanAllPages: me,
    allPagesRoutes: G,
    currentScanPage: B,
    clearScanResults: ye,
    // Analysis data
    analysisData: h,
    loadAnalysisData: X,
    getAnalyzedElement: ee,
    getAnalyzedElementsForPage: te,
    analysisResults: b,
    applyAnalysisToPage: K,
    clearAnalysisResults: Se,
    analysisFilter: Y
  };
});
function Oe() {
  return xe();
}
export {
  Oe as a,
  xe as u
};
