import { ref as f, computed as oe, watch as Ue, nextTick as B } from "vue";
import { defineStore as _e } from "pinia";
const Be = {}, Fe = "devInspector:elementConfigs", ze = _e("devInspector", () => {
  const L = f({}), N = f(!1), w = f(!1), P = f(!1), F = f(!1), R = f(null), O = f(!1), u = f({}), T = f(null), z = f(null), M = oe(() => L.value.storageKey || Fe), m = f(null), ae = f("all"), A = f(/* @__PURE__ */ new Set()), J = "devInspector:hiddenAnalysisSelectors", j = oe(() => L.value.enabledInProduction ? !0 : typeof import.meta < "u" && Be ? !1 : process.env.NODE_ENV === "development"), W = f(!1);
  function se(e = {}) {
    L.value = e, ie(), Te(), e.analysisData && (m.value = e.analysisData);
    const n = e.analysisDataUrl ?? "/dev-inspector-analysis.json";
    e.autoLoadAnalysis !== !1 && j.value && X(n);
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
  function le(e) {
    if (!m.value) return null;
    for (const n of Object.values(m.value.components)) {
      const t = n.elements.find((o) => o.selector === e);
      if (t) return t;
    }
    return null;
  }
  function ce(e) {
    if (!m.value) return [];
    const n = [];
    for (const [t, o] of Object.entries(m.value.components))
      (!e || t.includes(e)) && n.push(...o.elements);
    return n;
  }
  function ie() {
    try {
      const e = L.value.initialAnnotations || {};
      if (typeof window < "u") {
        const n = localStorage.getItem(M.value), t = n ? JSON.parse(n) : {};
        u.value = { ...e, ...t };
      } else
        u.value = e;
    } catch (e) {
      console.error("[DevInspector] Failed to load configs:", e);
    }
  }
  function k() {
    try {
      if (typeof window < "u") {
        const e = JSON.stringify(u.value);
        localStorage.setItem(M.value, e), console.log("[DevInspector] Saved configs:", Object.keys(u.value).length, "items");
      }
    } catch (e) {
      console.error("[DevInspector] Failed to save configs:", e);
    }
  }
  Ue(u, () => {
    B(() => {
      k();
    });
  }, { deep: !0 });
  async function re() {
    j.value && (N.value ? (N.value = !1, w.value = !1, T.value = null) : await q());
  }
  async function q() {
    if (!j.value) return;
    if (m.value && !W.value && L.value.autoApplyAnalysis !== !1) {
      F.value = !0, N.value = !0;
      try {
        await new Promise((n) => setTimeout(n, 300)), Q(), W.value = !0;
      } finally {
        F.value = !1;
      }
    } else
      N.value = !0;
  }
  function ue() {
    N.value = !1, w.value = !1, T.value = null;
  }
  function de() {
    w.value = !w.value, w.value || (T.value = null), w.value && (P.value = !1);
  }
  function fe() {
    P.value = !P.value, P.value && (w.value = !1), z.value = null;
  }
  function pe(e) {
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
      const s = Array.from(t.classList).filter((a) => !a.startsWith("hover:") && !a.startsWith("focus:")).slice(0, 2);
      s.length > 0 && (o += "." + s.join("."));
      const l = t.parentElement;
      if (l) {
        const a = Array.from(l.children).filter(
          (c) => c.tagName === t.tagName
        );
        if (a.length > 1) {
          const c = a.indexOf(t) + 1;
          o += `:nth-child(${c})`;
        }
      }
      n.unshift(o), t = t.parentElement;
    }
    return n.join(" > ");
  }
  function me() {
    const e = typeof window < "u" ? window.location.pathname : "/";
    return Object.keys(u.value).filter((n) => {
      const t = u.value[n];
      return t ? (n.includes(">") || n.startsWith("#") || n.startsWith("[") || n.startsWith(".")) && (!t.componentPath || t.componentPath.includes(e) || e === "/") : !1;
    });
  }
  function ve(e) {
    R.value = e;
  }
  function ge() {
    R.value = null;
  }
  function he() {
    O.value = !O.value;
  }
  function ye() {
    O.value = !0;
  }
  function Se() {
    O.value = !1;
  }
  function be(e) {
    return u.value[e];
  }
  function Z(e, n) {
    var l;
    const t = (/* @__PURE__ */ new Date()).toISOString(), o = u.value[e], s = {
      ...o,
      ...n,
      id: e,
      componentPath: n.componentPath || ((l = R.value) == null ? void 0 : l.componentPath) || "",
      createdAt: (o == null ? void 0 : o.createdAt) || t,
      updatedAt: t
    };
    u.value = {
      ...u.value,
      [e]: s
    }, B(() => k());
  }
  function Ce(e) {
    const { [e]: n, ...t } = u.value;
    u.value = t, B(() => k());
  }
  function K(e) {
    var _;
    const n = ((_ = e.textContent) == null ? void 0 : _.trim()) || "", t = e.tagName.toUpperCase();
    if (!n && t !== "INPUT" && t !== "SELECT" && t !== "TEXTAREA")
      return null;
    const o = e.__vueParentComponent;
    if (o) {
      const v = o.props || {}, h = o.attrs || {};
      if ("modelValue" in v || "model-value" in h)
        return {
          type: "v-model",
          source: "form binding detected",
          isStatic: !1
        };
    }
    if (t === "INPUT" || t === "SELECT" || t === "TEXTAREA") {
      const v = e.type || "text", h = e.placeholder || "";
      return {
        type: "v-model",
        source: `${t.toLowerCase()}[type=${v}]${h ? ` placeholder="${h}"` : ""}`,
        isStatic: !1
      };
    }
    const s = e.dataset.source || e.dataset.field || e.dataset.bind;
    if (s)
      return {
        type: "prop",
        source: s,
        isStatic: !1
      };
    if (e.closest("tbody") || e.closest('[role="rowgroup"]'))
      return {
        type: "api",
        source: "table data",
        isStatic: !1
      };
    const l = e.closest('ul, ol, [role="list"]');
    if (l && l.children.length > 1)
      return {
        type: "api",
        source: "list item",
        isStatic: !1
      };
    const a = [
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
    for (const v of a) {
      const h = e.closest(v);
      if (h) {
        const y = h.parentElement;
        if (y && Array.from(y.children).filter(
          (E) => E !== h && E.className === h.className
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
      const v = e.parentElement, y = Array.from(v.children).filter((b) => b.tagName === e.tagName);
      if (y.length >= 2 && y.filter(
        (E) => E.children.length === e.children.length
      ).length >= 2)
        return {
          type: "api",
          source: "repeated element",
          isStatic: !1
        };
    }
    const d = [
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
    for (const v of d)
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
    ].some((v) => v.test(n)), D = t === "BUTTON" || e.closest("button") !== null || e.getAttribute("role") === "button";
    return p || S || D && n.length < 20 ? {
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
    var s, l, a, c, d;
    const t = K(e), o = {};
    if (t) {
      o.sourceBinding = t;
      const r = ((s = e.textContent) == null ? void 0 : s.trim()) || "";
      if (t.isStatic)
        o.note = {
          type: "info",
          text: `【固定文言】${r}`
        };
      else if (t.type === "v-model") {
        const i = e.tagName.toUpperCase();
        if (i === "INPUT" || i === "SELECT" || i === "TEXTAREA") {
          const p = e.placeholder || "", g = ((a = (l = e.closest("label")) == null ? void 0 : l.textContent) == null ? void 0 : a.trim()) || e.getAttribute("aria-label") || ((d = (c = document.querySelector(`label[for="${e.id}"]`)) == null ? void 0 : c.textContent) == null ? void 0 : d.trim()) || "";
          o.note = {
            type: "todo",
            text: `【フォーム要素】${g || p || i.toLowerCase()}`
          };
        }
      } else t.type === "api" && (o.note = {
        type: "question",
        text: `【動的データ】${r.substring(0, 100)}${r.length > 100 ? "..." : ""}`
      });
    }
    return o;
  }
  const $ = f(!1), x = f(0), U = f([]);
  async function V(e = {}) {
    $.value = !0, x.value = 0, U.value = [];
    const { rescan: n = !1 } = e;
    if (n) {
      const t = typeof window < "u" ? window.location.pathname : "/", o = Object.keys(u.value).filter((s) => {
        const l = u.value[s];
        return !l.componentPath || l.componentPath.includes(t);
      });
      for (const s of o)
        delete u.value[s];
      B(() => k());
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
      ].join(","), o = document.querySelectorAll(t), s = [];
      o.forEach((r) => {
        var h;
        const i = r;
        if (i.closest("[data-dev-inspector]")) return;
        const p = window.getComputedStyle(i);
        if (p.display === "none" || p.visibility === "hidden" || p.opacity === "0") return;
        const g = I(i);
        if (u.value[g]) return;
        const S = i.tagName.toUpperCase(), D = ((h = i.textContent) == null ? void 0 : h.trim()) || "";
        if (S === "INPUT" || S === "SELECT" || S === "TEXTAREA") {
          s.push(i);
          return;
        }
        if (D.length > 300 || D.length === 0 || S === "DIV" && (Array.from(i.childNodes).filter((b) => b.nodeType === Node.TEXT_NODE).map((b) => {
          var E;
          return ((E = b.textContent) == null ? void 0 : E.trim()) || "";
        }).join("").trim().length === 0 || i.children.length > 3))
          return;
        const _ = Array.from(i.childNodes).some((y) => {
          var b;
          return y.nodeType === Node.TEXT_NODE && (((b = y.textContent) == null ? void 0 : b.trim()) || "").length > 0;
        }), v = !Array.from(i.children).some((y) => ["DIV", "P", "UL", "OL", "TABLE", "SECTION", "ARTICLE"].includes(y.tagName));
        (_ || i.children.length === 0 && D.length > 0 || v) && s.push(i);
      });
      const l = s.length;
      let a = 0, c = 0;
      const d = 20;
      for (let r = 0; r < s.length; r += d) {
        const i = s.slice(r, r + d);
        for (const p of i) {
          const g = I(p), S = G(p, g);
          S.sourceBinding && (U.value.push({ selector: g, element: p, detected: S }), Z(g, S), c++), a++, x.value = Math.round(a / l * 100);
        }
        await new Promise((p) => setTimeout(p, 10));
      }
      return c;
    } finally {
      $.value = !1, x.value = 100;
    }
  }
  const Y = f([]), H = f("");
  async function we(e) {
    var t;
    if (!e)
      return console.warn("[DevInspector] Router not provided for all pages scan"), [];
    $.value = !0;
    const n = [];
    try {
      const o = e.getRoutes(), s = [];
      for (const l of o)
        l.path.includes(":") && !l.path.includes("?") || l.redirect || l.path !== "/:pathMatch(.*)*" && ((t = l.meta) != null && t.devInspectorSkip || s.push(l.path));
      Y.value = s;
      for (const l of s) {
        H.value = l;
        try {
          await e.push(l), await new Promise((c) => setTimeout(c, 500));
          const a = await V();
          n.push({ page: l, count: a });
        } catch (a) {
          console.warn(`[DevInspector] Failed to scan page ${l}:`, a), n.push({ page: l, count: 0 });
        }
      }
      return n;
    } finally {
      $.value = !1, H.value = "";
    }
  }
  function Ae() {
    U.value = [], x.value = 0;
  }
  const C = f([]);
  async function Q() {
    var l;
    if (!m.value)
      return console.warn("[DevInspector] No analysis data loaded. Call loadAnalysisData first."), 0;
    C.value = [];
    const e = typeof window < "u" ? window.location.pathname : "/", n = (a) => {
      if (!m.value) return null;
      for (const [c, d] of Object.entries(m.value.components))
        if (d.componentName === a || d.componentName.toLowerCase() === a.toLowerCase() || c.toLowerCase().includes(`/${a.toLowerCase()}.vue`))
          return d;
      return null;
    }, t = (a, c = /* @__PURE__ */ new Set()) => {
      const d = [];
      if (c.has(a.componentName)) return d;
      if (c.add(a.componentName), d.push(...a.elements), a.usedComponents)
        for (const r of a.usedComponents) {
          const i = n(r);
          i && d.push(...t(i, c));
        }
      return d;
    }, o = [], s = /* @__PURE__ */ new Set();
    for (const [a, c] of Object.entries(m.value.components)) {
      const d = a.replace(/^pages/, "").replace(/\.vue$/, "").replace(/\/index$/, "").replace(/\[.*?\]/g, "[^/]+");
      let r = !1;
      if ((e === "/" && a.includes("index") || a.includes("pages/") && e.match(new RegExp(`^${d}$`))) && (r = !0), r) {
        const i = t(c);
        o.push(...i), s.add(c.componentName), c.usedComponents && c.usedComponents.forEach((p) => s.add(p));
      }
    }
    for (const [a, c] of Object.entries(m.value.components))
      a.includes("components/") && !s.has(c.componentName) && o.push(...c.elements);
    for (const a of o) {
      if (A.value.has(a.selector))
        continue;
      let c = !1, d = a.selector;
      try {
        document.querySelector(a.selector) && (c = !0);
      } catch {
      }
      if (!c && a.type === "static" && a.text) {
        const r = a.text.replace(/\[コメント\]\s*/, ""), i = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT,
          null
        );
        for (; i.nextNode(); ) {
          const p = i.currentNode;
          if ((l = p.textContent) != null && l.includes(r)) {
            const g = p.parentElement;
            if (g) {
              c = !0, d = I(g);
              break;
            }
          }
        }
      }
      if (!c && a.selector.includes(".")) {
        const r = a.selector.match(/^(\w+)\.(.+)$/);
        if (r) {
          const [, i, p] = r;
          try {
            const g = document.querySelector(a.selector);
            g && (c = !0, d = I(g));
          } catch {
          }
        }
      }
      if (!c && a.type === "data" && a.binding) {
        const r = `[data-bind="${a.binding}"]`;
        try {
          const i = document.querySelector(r);
          i && (c = !0, d = I(i));
        } catch {
        }
      }
      C.value.push({
        selector: d,
        element: a,
        matched: c
      });
    }
    return console.log(`[DevInspector] Applied analysis: ${C.value.filter((a) => a.matched).length}/${C.value.length} elements matched`), C.value.filter((a) => a.matched).length;
  }
  function Ee() {
    C.value = [];
  }
  function Ne(e) {
    C.value = C.value.filter((n) => n.selector !== e), A.value.add(e), Ie();
  }
  function Te() {
    try {
      const e = localStorage.getItem(J);
      e && (A.value = new Set(JSON.parse(e)));
    } catch {
    }
  }
  function Ie() {
    try {
      localStorage.setItem(
        J,
        JSON.stringify([...A.value])
      );
    } catch {
    }
  }
  function Le() {
    A.value.clear(), localStorage.removeItem(J);
  }
  function ee() {
    const e = {
      removed: [...A.value],
      exportedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    return JSON.stringify(e, null, 2);
  }
  function Pe(e = "dev-inspector-changes.json") {
    const n = ee(), t = new Blob([n], { type: "application/json" }), o = URL.createObjectURL(t), s = document.createElement("a");
    s.href = o, s.download = e, document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL(o);
  }
  function te() {
    if (!m.value) return [];
    const e = [], n = /* @__PURE__ */ new Set();
    for (const t of Object.values(m.value.components))
      for (const o of t.elements)
        o.binding && !n.has(o.binding) && (n.add(o.binding), e.push({
          binding: o.binding,
          db: o.db,
          api: o.api,
          component: t.componentName
        }));
    return e.sort((t, o) => t.db && !o.db ? -1 : !t.db && o.db ? 1 : t.binding.localeCompare(o.binding));
  }
  function Oe(e) {
    const n = te();
    if (!e) return n;
    const t = e.toLowerCase();
    return n.filter(
      (o) => {
        var s, l;
        return o.binding.toLowerCase().includes(t) || ((s = o.db) == null ? void 0 : s.table.toLowerCase().includes(t)) || ((l = o.db) == null ? void 0 : l.column.toLowerCase().includes(t)) || o.component.toLowerCase().includes(t);
      }
    );
  }
  function $e(e) {
    T.value = e;
  }
  function xe() {
    T.value = null;
  }
  function De() {
    return JSON.stringify(u.value, null, 2);
  }
  function ne() {
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
  function Re(e = "dev-annotations.json") {
    const n = ne(), t = new Blob([n], { type: "application/json" }), o = URL.createObjectURL(t), s = document.createElement("a");
    s.href = o, s.download = e, document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL(o);
  }
  function je(e) {
    try {
      const n = JSON.parse(e), t = n.annotations || n;
      u.value = { ...u.value, ...t };
    } catch (n) {
      throw console.error("[DevInspector] Failed to import configs:", n), new Error("Invalid JSON format");
    }
  }
  function ke() {
    u.value = {};
  }
  return {
    // State
    isEnabled: N,
    isAvailable: j,
    isEditMode: w,
    isPickMode: P,
    isInitializing: F,
    hoveredSelector: z,
    currentScreenSpec: R,
    isPanelOpen: O,
    elementConfigs: u,
    editingElementId: T,
    // Actions
    init: se,
    toggle: re,
    enable: q,
    disable: ue,
    toggleEditMode: de,
    togglePickMode: fe,
    setHoveredSelector: pe,
    generateSelector: I,
    getConfiguredSelectors: me,
    setScreenSpec: ve,
    clearScreenSpec: ge,
    togglePanel: he,
    openPanel: ye,
    closePanel: Se,
    getElementConfig: be,
    setElementConfig: Z,
    deleteElementConfig: Ce,
    startEditing: $e,
    stopEditing: xe,
    exportConfigs: De,
    exportAsFile: ne,
    downloadAnnotations: Re,
    importConfigs: je,
    clearAllConfigs: ke,
    detectSourceBinding: K,
    autoDetectElementInfo: G,
    // Scan
    isScanning: $,
    scanProgress: x,
    scanResults: U,
    scanCurrentPage: V,
    scanAllPages: we,
    allPagesRoutes: Y,
    currentScanPage: H,
    clearScanResults: Ae,
    // Analysis data
    analysisData: m,
    loadAnalysisData: X,
    getAnalyzedElement: le,
    getAnalyzedElementsForPage: ce,
    analysisResults: C,
    applyAnalysisToPage: Q,
    clearAnalysisResults: Ee,
    removeAnalysisResult: Ne,
    clearHiddenSelectors: Le,
    hiddenAnalysisSelectors: A,
    analysisFilter: ae,
    exportChangesForCli: ee,
    downloadChanges: Pe,
    getAvailableBindings: te,
    searchBindings: Oe
  };
});
function Me() {
  return ze();
}
export {
  Me as a,
  ze as u
};
