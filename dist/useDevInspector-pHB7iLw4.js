import { ref as f, computed as V, watch as Ce, nextTick as U } from "vue";
import { defineStore as Te } from "pinia";
const Ne = {}, Pe = "devInspector:elementConfigs", $e = Te("devInspector", () => {
  const L = f({}), C = f(!1), E = f(!1), N = f(!1), O = f(null), P = f(!1), l = f({}), T = f(null), F = f(null), z = V(() => L.value.storageKey || Pe), h = f(null), k = V(() => L.value.enabledInProduction ? !0 : typeof import.meta < "u" && Ne ? !1 : process.env.NODE_ENV === "development");
  function H(e = {}) {
    L.value = e, ee(), e.analysisData && (h.value = e.analysisData);
    const n = e.analysisDataUrl ?? "/dev-inspector-analysis.json";
    e.autoLoadAnalysis !== !1 && k.value && W(n).then(() => {
      h.value && e.autoApplyAnalysis !== !1 && setTimeout(() => {
        G();
      }, 500);
    });
  }
  async function W(e) {
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
  function Y(e) {
    if (!h.value) return null;
    for (const n of Object.values(h.value.components)) {
      const t = n.elements.find((o) => o.selector === e);
      if (t) return t;
    }
    return null;
  }
  function Q(e) {
    if (!h.value) return [];
    const n = [];
    for (const [t, o] of Object.entries(h.value.components))
      (!e || t.includes(e)) && n.push(...o.elements);
    return n;
  }
  function ee() {
    try {
      const e = L.value.initialAnnotations || {};
      if (typeof window < "u") {
        const n = localStorage.getItem(z.value), t = n ? JSON.parse(n) : {};
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
        localStorage.setItem(z.value, e), console.log("[DevInspector] Saved configs:", Object.keys(l.value).length, "items");
      }
    } catch (e) {
      console.error("[DevInspector] Failed to save configs:", e);
    }
  }
  Ce(l, () => {
    U(() => {
      R();
    });
  }, { deep: !0 });
  function te() {
    k.value && (C.value = !C.value, C.value || (E.value = !1, T.value = null));
  }
  function ne() {
    k.value && (C.value = !0);
  }
  function oe() {
    C.value = !1, E.value = !1, T.value = null;
  }
  function ae() {
    E.value = !E.value, E.value || (T.value = null), E.value && (N.value = !1);
  }
  function se() {
    N.value = !N.value, N.value && (E.value = !1), F.value = null;
  }
  function le(e) {
    F.value = e;
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
      const a = Array.from(t.classList).filter((c) => !c.startsWith("hover:") && !c.startsWith("focus:")).slice(0, 2);
      a.length > 0 && (o += "." + a.join("."));
      const s = t.parentElement;
      if (s) {
        const c = Array.from(s.children).filter(
          (u) => u.tagName === t.tagName
        );
        if (c.length > 1) {
          const u = c.indexOf(t) + 1;
          o += `:nth-child(${u})`;
        }
      }
      n.unshift(o), t = t.parentElement;
    }
    return n.join(" > ");
  }
  function ce() {
    const e = typeof window < "u" ? window.location.pathname : "/";
    return Object.keys(l.value).filter((n) => {
      const t = l.value[n];
      return t ? (n.includes(">") || n.startsWith("#") || n.startsWith("[") || n.startsWith(".")) && (!t.componentPath || t.componentPath.includes(e) || e === "/") : !1;
    });
  }
  function ie(e) {
    O.value = e;
  }
  function re() {
    O.value = null;
  }
  function ue() {
    P.value = !P.value;
  }
  function fe() {
    P.value = !0;
  }
  function de() {
    P.value = !1;
  }
  function pe(e) {
    return l.value[e];
  }
  function X(e, n) {
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
  function ve(e) {
    const { [e]: n, ...t } = l.value;
    l.value = t, U(() => R());
  }
  function J(e) {
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
    const c = [
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
    for (const d of c) {
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
  function M(e, n) {
    var a, s, c, u, g;
    const t = J(e), o = {};
    if (t) {
      o.sourceBinding = t;
      const r = ((a = e.textContent) == null ? void 0 : a.trim()) || "";
      if (t.isStatic)
        o.note = {
          type: "info",
          text: `【固定文言】${r}`
        };
      else if (t.type === "v-model") {
        const i = e.tagName.toUpperCase();
        if (i === "INPUT" || i === "SELECT" || i === "TEXTAREA") {
          const p = e.placeholder || "", A = ((c = (s = e.closest("label")) == null ? void 0 : s.textContent) == null ? void 0 : c.trim()) || e.getAttribute("aria-label") || ((g = (u = document.querySelector(`label[for="${e.id}"]`)) == null ? void 0 : u.textContent) == null ? void 0 : g.trim()) || "";
          o.note = {
            type: "todo",
            text: `【フォーム要素】${A || p || i.toLowerCase()}`
          };
        }
      } else t.type === "api" && (o.note = {
        type: "question",
        text: `【動的データ】${r.substring(0, 100)}${r.length > 100 ? "..." : ""}`
      });
    }
    return o;
  }
  const I = f(!1), x = f(0), _ = f([]);
  async function Z(e = {}) {
    I.value = !0, x.value = 0, _.value = [];
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
        const i = r;
        if (i.closest("[data-dev-inspector]")) return;
        const p = window.getComputedStyle(i);
        if (p.display === "none" || p.visibility === "hidden" || p.opacity === "0") return;
        const A = $(i);
        if (l.value[A]) return;
        const y = i.tagName.toUpperCase(), D = ((v = i.textContent) == null ? void 0 : v.trim()) || "";
        if (y === "INPUT" || y === "SELECT" || y === "TEXTAREA") {
          a.push(i);
          return;
        }
        if (D.length > 300 || D.length === 0 || y === "DIV" && (Array.from(i.childNodes).filter((S) => S.nodeType === Node.TEXT_NODE).map((S) => {
          var w;
          return ((w = S.textContent) == null ? void 0 : w.trim()) || "";
        }).join("").trim().length === 0 || i.children.length > 3))
          return;
        const j = Array.from(i.childNodes).some((m) => {
          var S;
          return m.nodeType === Node.TEXT_NODE && (((S = m.textContent) == null ? void 0 : S.trim()) || "").length > 0;
        }), d = !Array.from(i.children).some((m) => ["DIV", "P", "UL", "OL", "TABLE", "SECTION", "ARTICLE"].includes(m.tagName));
        (j || i.children.length === 0 && D.length > 0 || d) && a.push(i);
      });
      const s = a.length;
      let c = 0, u = 0;
      const g = 20;
      for (let r = 0; r < a.length; r += g) {
        const i = a.slice(r, r + g);
        for (const p of i) {
          const A = $(p), y = M(p, A);
          y.sourceBinding && (_.value.push({ selector: A, element: p, detected: y }), X(A, y), u++), c++, x.value = Math.round(c / s * 100);
        }
        await new Promise((p) => setTimeout(p, 10));
      }
      return u;
    } finally {
      I.value = !1, x.value = 100;
    }
  }
  const q = f([]), B = f("");
  async function ge(e) {
    var t;
    if (!e)
      return console.warn("[DevInspector] Router not provided for all pages scan"), [];
    I.value = !0;
    const n = [];
    try {
      const o = e.getRoutes(), a = [];
      for (const s of o)
        s.path.includes(":") && !s.path.includes("?") || s.redirect || s.path !== "/:pathMatch(.*)*" && ((t = s.meta) != null && t.devInspectorSkip || a.push(s.path));
      q.value = a;
      for (const s of a) {
        B.value = s;
        try {
          await e.push(s), await new Promise((u) => setTimeout(u, 500));
          const c = await Z();
          n.push({ page: s, count: c });
        } catch (c) {
          console.warn(`[DevInspector] Failed to scan page ${s}:`, c), n.push({ page: s, count: 0 });
        }
      }
      return n;
    } finally {
      I.value = !1, B.value = "";
    }
  }
  function he() {
    _.value = [], x.value = 0;
  }
  const b = f([]);
  async function G() {
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
        const c = o.text.replace(/\[コメント\]\s*/, ""), u = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT,
          null
        );
        for (; u.nextNode(); ) {
          const g = u.currentNode;
          if ((t = g.textContent) != null && t.includes(c)) {
            const r = g.parentElement;
            if (r) {
              a = !0, s = $(r);
              break;
            }
          }
        }
      }
      if (!a && o.selector.includes(".")) {
        const c = o.selector.match(/^(\w+)\.(.+)$/);
        if (c) {
          const [, u, g] = c, r = document.querySelectorAll(`${u}.${g.split(".")[0]}`);
          r.length > 0 && (a = !0, s = $(r[0]));
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
  function me() {
    b.value = [];
  }
  function ye(e) {
    T.value = e;
  }
  function Se() {
    T.value = null;
  }
  function Ee() {
    return JSON.stringify(l.value, null, 2);
  }
  function K() {
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
  function Ae(e = "dev-annotations.json") {
    const n = K(), t = new Blob([n], { type: "application/json" }), o = URL.createObjectURL(t), a = document.createElement("a");
    a.href = o, a.download = e, document.body.appendChild(a), a.click(), document.body.removeChild(a), URL.revokeObjectURL(o);
  }
  function be(e) {
    try {
      const n = JSON.parse(e), t = n.annotations || n;
      l.value = { ...l.value, ...t };
    } catch (n) {
      throw console.error("[DevInspector] Failed to import configs:", n), new Error("Invalid JSON format");
    }
  }
  function we() {
    l.value = {};
  }
  return {
    // State
    isEnabled: C,
    isAvailable: k,
    isEditMode: E,
    isPickMode: N,
    hoveredSelector: F,
    currentScreenSpec: O,
    isPanelOpen: P,
    elementConfigs: l,
    editingElementId: T,
    // Actions
    init: H,
    toggle: te,
    enable: ne,
    disable: oe,
    toggleEditMode: ae,
    togglePickMode: se,
    setHoveredSelector: le,
    generateSelector: $,
    getConfiguredSelectors: ce,
    setScreenSpec: ie,
    clearScreenSpec: re,
    togglePanel: ue,
    openPanel: fe,
    closePanel: de,
    getElementConfig: pe,
    setElementConfig: X,
    deleteElementConfig: ve,
    startEditing: ye,
    stopEditing: Se,
    exportConfigs: Ee,
    exportAsFile: K,
    downloadAnnotations: Ae,
    importConfigs: be,
    clearAllConfigs: we,
    detectSourceBinding: J,
    autoDetectElementInfo: M,
    // Scan
    isScanning: I,
    scanProgress: x,
    scanResults: _,
    scanCurrentPage: Z,
    scanAllPages: ge,
    allPagesRoutes: q,
    currentScanPage: B,
    clearScanResults: he,
    // Analysis data
    analysisData: h,
    loadAnalysisData: W,
    getAnalyzedElement: Y,
    getAnalyzedElementsForPage: Q,
    analysisResults: b,
    applyAnalysisToPage: G,
    clearAnalysisResults: me
  };
});
function De() {
  return $e();
}
export {
  De as a,
  $e as u
};
