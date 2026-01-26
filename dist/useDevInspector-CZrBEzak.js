import { ref as f, computed as G, watch as Ce, nextTick as j } from "vue";
import { defineStore as Te } from "pinia";
const Ne = {}, Pe = "devInspector:elementConfigs", $e = Te("devInspector", () => {
  const O = f({}), C = f(!1), E = f(!1), N = f(!1), L = f(null), P = f(!1), l = f({}), T = f(null), U = f(null), z = G(() => O.value.storageKey || Pe), m = f(null), F = G(() => O.value.enabledInProduction ? !0 : typeof import.meta < "u" && Ne ? !1 : process.env.NODE_ENV === "development");
  function K(e = {}) {
    O.value = e, Q(), e.analysisData && (m.value = e.analysisData);
  }
  async function V(e) {
    var n;
    try {
      const t = await fetch(e);
      t.ok && (m.value = await t.json(), console.log("[DevInspector] Analysis data loaded:", Object.keys(((n = m.value) == null ? void 0 : n.components) || {}).length, "components"));
    } catch (t) {
      console.warn("[DevInspector] Failed to load analysis data:", t);
    }
  }
  function H(e) {
    if (!m.value) return null;
    for (const n of Object.values(m.value.components)) {
      const t = n.elements.find((o) => o.selector === e);
      if (t) return t;
    }
    return null;
  }
  function Y(e) {
    if (!m.value) return [];
    const n = [];
    for (const [t, o] of Object.entries(m.value.components))
      (!e || t.includes(e)) && n.push(...o.elements);
    return n;
  }
  function Q() {
    try {
      const e = O.value.initialAnnotations || {};
      if (typeof window < "u") {
        const n = localStorage.getItem(z.value), t = n ? JSON.parse(n) : {};
        l.value = { ...e, ...t };
      } else
        l.value = e;
    } catch (e) {
      console.error("[DevInspector] Failed to load configs:", e);
    }
  }
  function k() {
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
    j(() => {
      k();
    });
  }, { deep: !0 });
  function ee() {
    F.value && (C.value = !C.value, C.value || (E.value = !1, T.value = null));
  }
  function te() {
    F.value && (C.value = !0);
  }
  function ne() {
    C.value = !1, E.value = !1, T.value = null;
  }
  function oe() {
    E.value = !E.value, E.value || (T.value = null), E.value && (N.value = !1);
  }
  function ae() {
    N.value = !N.value, N.value && (E.value = !1), U.value = null;
  }
  function se(e) {
    U.value = e;
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
  function le() {
    const e = typeof window < "u" ? window.location.pathname : "/";
    return Object.keys(l.value).filter((n) => {
      const t = l.value[n];
      return t ? (n.includes(">") || n.startsWith("#") || n.startsWith("[") || n.startsWith(".")) && (!t.componentPath || t.componentPath.includes(e) || e === "/") : !1;
    });
  }
  function ce(e) {
    L.value = e;
  }
  function ie() {
    L.value = null;
  }
  function re() {
    P.value = !P.value;
  }
  function ue() {
    P.value = !0;
  }
  function fe() {
    P.value = !1;
  }
  function de(e) {
    return l.value[e];
  }
  function W(e, n) {
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
    }, j(() => k());
  }
  function pe(e) {
    const { [e]: n, ...t } = l.value;
    l.value = t, j(() => k());
  }
  function X(e) {
    var _;
    const n = ((_ = e.textContent) == null ? void 0 : _.trim()) || "", t = e.tagName.toUpperCase();
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
        const h = v.parentElement;
        if (h && Array.from(h.children).filter(
          (A) => A !== v && A.className === v.className
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
      const d = e.parentElement, h = Array.from(d.children).filter((S) => S.tagName === e.tagName);
      if (h.length >= 2 && h.filter(
        (A) => A.children.length === e.children.length
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
  function J(e, n) {
    var a, s, c, u, g;
    const t = X(e), o = {};
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
          const p = e.placeholder || "", b = ((c = (s = e.closest("label")) == null ? void 0 : s.textContent) == null ? void 0 : c.trim()) || e.getAttribute("aria-label") || ((g = (u = document.querySelector(`label[for="${e.id}"]`)) == null ? void 0 : u.textContent) == null ? void 0 : g.trim()) || "";
          o.note = {
            type: "todo",
            text: `【フォーム要素】${b || p || i.toLowerCase()}`
          };
        }
      } else t.type === "api" && (o.note = {
        type: "question",
        text: `【動的データ】${r.substring(0, 100)}${r.length > 100 ? "..." : ""}`
      });
    }
    return o;
  }
  const I = f(!1), x = f(0), R = f([]);
  async function M(e = {}) {
    I.value = !0, x.value = 0, R.value = [];
    const { rescan: n = !1 } = e;
    if (n) {
      const t = typeof window < "u" ? window.location.pathname : "/", o = Object.keys(l.value).filter((a) => {
        const s = l.value[a];
        return !s.componentPath || s.componentPath.includes(t);
      });
      for (const a of o)
        delete l.value[a];
      j(() => k());
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
        const b = $(i);
        if (l.value[b]) return;
        const y = i.tagName.toUpperCase(), D = ((v = i.textContent) == null ? void 0 : v.trim()) || "";
        if (y === "INPUT" || y === "SELECT" || y === "TEXTAREA") {
          a.push(i);
          return;
        }
        if (D.length > 300 || D.length === 0 || y === "DIV" && (Array.from(i.childNodes).filter((S) => S.nodeType === Node.TEXT_NODE).map((S) => {
          var A;
          return ((A = S.textContent) == null ? void 0 : A.trim()) || "";
        }).join("").trim().length === 0 || i.children.length > 3))
          return;
        const _ = Array.from(i.childNodes).some((h) => {
          var S;
          return h.nodeType === Node.TEXT_NODE && (((S = h.textContent) == null ? void 0 : S.trim()) || "").length > 0;
        }), d = !Array.from(i.children).some((h) => ["DIV", "P", "UL", "OL", "TABLE", "SECTION", "ARTICLE"].includes(h.tagName));
        (_ || i.children.length === 0 && D.length > 0 || d) && a.push(i);
      });
      const s = a.length;
      let c = 0, u = 0;
      const g = 20;
      for (let r = 0; r < a.length; r += g) {
        const i = a.slice(r, r + g);
        for (const p of i) {
          const b = $(p), y = J(p, b);
          y.sourceBinding && (R.value.push({ selector: b, element: p, detected: y }), W(b, y), u++), c++, x.value = Math.round(c / s * 100);
        }
        await new Promise((p) => setTimeout(p, 10));
      }
      return u;
    } finally {
      I.value = !1, x.value = 100;
    }
  }
  const Z = f([]), B = f("");
  async function ve(e) {
    var t;
    if (!e)
      return console.warn("[DevInspector] Router not provided for all pages scan"), [];
    I.value = !0;
    const n = [];
    try {
      const o = e.getRoutes(), a = [];
      for (const s of o)
        s.path.includes(":") && !s.path.includes("?") || s.redirect || s.path !== "/:pathMatch(.*)*" && ((t = s.meta) != null && t.devInspectorSkip || a.push(s.path));
      Z.value = a;
      for (const s of a) {
        B.value = s;
        try {
          await e.push(s), await new Promise((u) => setTimeout(u, 500));
          const c = await M();
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
  function ge() {
    R.value = [], x.value = 0;
  }
  const w = f([]);
  async function he() {
    var t;
    if (!m.value)
      return console.warn("[DevInspector] No analysis data loaded. Call loadAnalysisData first."), 0;
    w.value = [];
    const e = typeof window < "u" ? window.location.pathname : "/", n = [];
    for (const [o, a] of Object.entries(m.value.components)) {
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
      w.value.push({
        selector: s,
        element: o,
        matched: a
      });
    }
    return console.log(`[DevInspector] Applied analysis: ${w.value.filter((o) => o.matched).length}/${w.value.length} elements matched`), w.value.filter((o) => o.matched).length;
  }
  function me() {
    w.value = [];
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
  function q() {
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
  function be(e = "dev-annotations.json") {
    const n = q(), t = new Blob([n], { type: "application/json" }), o = URL.createObjectURL(t), a = document.createElement("a");
    a.href = o, a.download = e, document.body.appendChild(a), a.click(), document.body.removeChild(a), URL.revokeObjectURL(o);
  }
  function we(e) {
    try {
      const n = JSON.parse(e), t = n.annotations || n;
      l.value = { ...l.value, ...t };
    } catch (n) {
      throw console.error("[DevInspector] Failed to import configs:", n), new Error("Invalid JSON format");
    }
  }
  function Ae() {
    l.value = {};
  }
  return {
    // State
    isEnabled: C,
    isAvailable: F,
    isEditMode: E,
    isPickMode: N,
    hoveredSelector: U,
    currentScreenSpec: L,
    isPanelOpen: P,
    elementConfigs: l,
    editingElementId: T,
    // Actions
    init: K,
    toggle: ee,
    enable: te,
    disable: ne,
    toggleEditMode: oe,
    togglePickMode: ae,
    setHoveredSelector: se,
    generateSelector: $,
    getConfiguredSelectors: le,
    setScreenSpec: ce,
    clearScreenSpec: ie,
    togglePanel: re,
    openPanel: ue,
    closePanel: fe,
    getElementConfig: de,
    setElementConfig: W,
    deleteElementConfig: pe,
    startEditing: ye,
    stopEditing: Se,
    exportConfigs: Ee,
    exportAsFile: q,
    downloadAnnotations: be,
    importConfigs: we,
    clearAllConfigs: Ae,
    detectSourceBinding: X,
    autoDetectElementInfo: J,
    // Scan
    isScanning: I,
    scanProgress: x,
    scanResults: R,
    scanCurrentPage: M,
    scanAllPages: ve,
    allPagesRoutes: Z,
    currentScanPage: B,
    clearScanResults: ge,
    // Analysis data
    analysisData: m,
    loadAnalysisData: V,
    getAnalyzedElement: H,
    getAnalyzedElementsForPage: Y,
    analysisResults: w,
    applyAnalysisToPage: he,
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
