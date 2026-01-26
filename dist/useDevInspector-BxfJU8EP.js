import { ref as f, computed as ne, watch as je, nextTick as F } from "vue";
import { defineStore as ke } from "pinia";
const Ue = {}, _e = "devInspector:elementConfigs", Fe = ke("devInspector", () => {
  const P = f({}), N = f(!1), w = f(!1), $ = f(!1), B = f(!1), R = f(null), O = f(!1), u = f({}), T = f(null), z = f(null), M = ne(() => P.value.storageKey || _e), m = f(null), oe = f("all"), E = f(/* @__PURE__ */ new Set()), J = "devInspector:hiddenAnalysisSelectors", j = ne(() => P.value.enabledInProduction ? !0 : typeof import.meta < "u" && Ue ? !1 : process.env.NODE_ENV === "development"), W = f(!1);
  function ae(e = {}) {
    P.value = e, ce(), Ne(), e.analysisData && (m.value = e.analysisData);
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
  function se(e) {
    if (!m.value) return null;
    for (const n of Object.values(m.value.components)) {
      const t = n.elements.find((a) => a.selector === e);
      if (t) return t;
    }
    return null;
  }
  function le(e) {
    if (!m.value) return [];
    const n = [];
    for (const [t, a] of Object.entries(m.value.components))
      (!e || t.includes(e)) && n.push(...a.elements);
    return n;
  }
  function ce() {
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
  je(u, () => {
    F(() => {
      k();
    });
  }, { deep: !0 });
  async function re() {
    j.value && (N.value ? (N.value = !1, w.value = !1, T.value = null) : await q());
  }
  async function q() {
    if (!j.value) return;
    if (m.value && !W.value && P.value.autoApplyAnalysis !== !1) {
      B.value = !0, N.value = !0;
      try {
        await new Promise((n) => setTimeout(n, 300)), Q(), W.value = !0;
      } finally {
        B.value = !1;
      }
    } else
      N.value = !0;
  }
  function ie() {
    N.value = !1, w.value = !1, T.value = null;
  }
  function ue() {
    w.value = !w.value, w.value || (T.value = null), w.value && ($.value = !1);
  }
  function de() {
    $.value = !$.value, $.value && (w.value = !1), z.value = null;
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
      const s = Array.from(t.classList).filter((o) => !o.startsWith("hover:") && !o.startsWith("focus:")).slice(0, 2);
      s.length > 0 && (a += "." + s.join("."));
      const c = t.parentElement;
      if (c) {
        const o = Array.from(c.children).filter(
          (l) => l.tagName === t.tagName
        );
        if (o.length > 1) {
          const l = o.indexOf(t) + 1;
          a += `:nth-child(${l})`;
        }
      }
      n.unshift(a), t = t.parentElement;
    }
    return n.join(" > ");
  }
  function pe() {
    const e = typeof window < "u" ? window.location.pathname : "/";
    return Object.keys(u.value).filter((n) => {
      const t = u.value[n];
      return t ? (n.includes(">") || n.startsWith("#") || n.startsWith("[") || n.startsWith(".")) && (!t.componentPath || t.componentPath.includes(e) || e === "/") : !1;
    });
  }
  function ve(e) {
    R.value = e;
  }
  function me() {
    R.value = null;
  }
  function he() {
    O.value = !O.value;
  }
  function ge() {
    O.value = !0;
  }
  function ye() {
    O.value = !1;
  }
  function Se(e) {
    return u.value[e];
  }
  function Z(e, n) {
    var c;
    const t = (/* @__PURE__ */ new Date()).toISOString(), a = u.value[e], s = {
      ...a,
      ...n,
      id: e,
      componentPath: n.componentPath || ((c = R.value) == null ? void 0 : c.componentPath) || "",
      createdAt: (a == null ? void 0 : a.createdAt) || t,
      updatedAt: t
    };
    u.value = {
      ...u.value,
      [e]: s
    }, F(() => k());
  }
  function Ce(e) {
    const { [e]: n, ...t } = u.value;
    u.value = t, F(() => k());
  }
  function K(e) {
    var _;
    const n = ((_ = e.textContent) == null ? void 0 : _.trim()) || "", t = e.tagName.toUpperCase();
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
          (A) => A !== g && A.className === g.className
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
      const v = e.parentElement, y = Array.from(v.children).filter((C) => C.tagName === e.tagName);
      if (y.length >= 2 && y.filter(
        (A) => A.children.length === e.children.length
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
    const i = [
      /^[\u4e00-\u9faf]{2,4}$/,
      // Japanese Kanji names (2-4 chars)
      /^[\u3040-\u309f\u30a0-\u30ff]{2,6}$/,
      // Hiragana/Katakana names
      /^[A-Z][a-z]+ [A-Z][a-z]+$/
      // English names like "John Smith"
    ];
    for (const v of i)
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
    var s, c, o, l, d;
    const t = K(e), a = {};
    if (t) {
      a.sourceBinding = t;
      const i = ((s = e.textContent) == null ? void 0 : s.trim()) || "";
      if (t.isStatic)
        a.note = {
          type: "info",
          text: `【固定文言】${i}`
        };
      else if (t.type === "v-model") {
        const r = e.tagName.toUpperCase();
        if (r === "INPUT" || r === "SELECT" || r === "TEXTAREA") {
          const p = e.placeholder || "", h = ((o = (c = e.closest("label")) == null ? void 0 : c.textContent) == null ? void 0 : o.trim()) || e.getAttribute("aria-label") || ((d = (l = document.querySelector(`label[for="${e.id}"]`)) == null ? void 0 : l.textContent) == null ? void 0 : d.trim()) || "";
          a.note = {
            type: "todo",
            text: `【フォーム要素】${h || p || r.toLowerCase()}`
          };
        }
      } else t.type === "api" && (a.note = {
        type: "question",
        text: `【動的データ】${i.substring(0, 100)}${i.length > 100 ? "..." : ""}`
      });
    }
    return a;
  }
  const L = f(!1), x = f(0), U = f([]);
  async function V(e = {}) {
    L.value = !0, x.value = 0, U.value = [];
    const { rescan: n = !1 } = e;
    if (n) {
      const t = typeof window < "u" ? window.location.pathname : "/", a = Object.keys(u.value).filter((s) => {
        const c = u.value[s];
        return !c.componentPath || c.componentPath.includes(t);
      });
      for (const s of a)
        delete u.value[s];
      F(() => k());
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
      ].join(","), a = document.querySelectorAll(t), s = [];
      a.forEach((i) => {
        var g;
        const r = i;
        if (r.closest("[data-dev-inspector]")) return;
        const p = window.getComputedStyle(r);
        if (p.display === "none" || p.visibility === "hidden" || p.opacity === "0") return;
        const h = I(r);
        if (u.value[h]) return;
        const S = r.tagName.toUpperCase(), D = ((g = r.textContent) == null ? void 0 : g.trim()) || "";
        if (S === "INPUT" || S === "SELECT" || S === "TEXTAREA") {
          s.push(r);
          return;
        }
        if (D.length > 300 || D.length === 0 || S === "DIV" && (Array.from(r.childNodes).filter((C) => C.nodeType === Node.TEXT_NODE).map((C) => {
          var A;
          return ((A = C.textContent) == null ? void 0 : A.trim()) || "";
        }).join("").trim().length === 0 || r.children.length > 3))
          return;
        const _ = Array.from(r.childNodes).some((y) => {
          var C;
          return y.nodeType === Node.TEXT_NODE && (((C = y.textContent) == null ? void 0 : C.trim()) || "").length > 0;
        }), v = !Array.from(r.children).some((y) => ["DIV", "P", "UL", "OL", "TABLE", "SECTION", "ARTICLE"].includes(y.tagName));
        (_ || r.children.length === 0 && D.length > 0 || v) && s.push(r);
      });
      const c = s.length;
      let o = 0, l = 0;
      const d = 20;
      for (let i = 0; i < s.length; i += d) {
        const r = s.slice(i, i + d);
        for (const p of r) {
          const h = I(p), S = G(p, h);
          S.sourceBinding && (U.value.push({ selector: h, element: p, detected: S }), Z(h, S), l++), o++, x.value = Math.round(o / c * 100);
        }
        await new Promise((p) => setTimeout(p, 10));
      }
      return l;
    } finally {
      L.value = !1, x.value = 100;
    }
  }
  const Y = f([]), H = f("");
  async function be(e) {
    var t;
    if (!e)
      return console.warn("[DevInspector] Router not provided for all pages scan"), [];
    L.value = !0;
    const n = [];
    try {
      const a = e.getRoutes(), s = [];
      for (const c of a)
        c.path.includes(":") && !c.path.includes("?") || c.redirect || c.path !== "/:pathMatch(.*)*" && ((t = c.meta) != null && t.devInspectorSkip || s.push(c.path));
      Y.value = s;
      for (const c of s) {
        H.value = c;
        try {
          await e.push(c), await new Promise((l) => setTimeout(l, 500));
          const o = await V();
          n.push({ page: c, count: o });
        } catch (o) {
          console.warn(`[DevInspector] Failed to scan page ${c}:`, o), n.push({ page: c, count: 0 });
        }
      }
      return n;
    } finally {
      L.value = !1, H.value = "";
    }
  }
  function we() {
    U.value = [], x.value = 0;
  }
  const b = f([]);
  async function Q() {
    var c;
    if (!m.value)
      return console.warn("[DevInspector] No analysis data loaded. Call loadAnalysisData first."), 0;
    b.value = [];
    const e = typeof window < "u" ? window.location.pathname : "/", n = (o) => {
      if (!m.value) return null;
      for (const [l, d] of Object.entries(m.value.components))
        if (d.componentName === o || d.componentName.toLowerCase() === o.toLowerCase() || l.toLowerCase().includes(`/${o.toLowerCase()}.vue`))
          return d;
      return null;
    }, t = (o, l = /* @__PURE__ */ new Set()) => {
      const d = [];
      if (l.has(o.componentName)) return d;
      if (l.add(o.componentName), d.push(...o.elements), o.usedComponents)
        for (const i of o.usedComponents) {
          const r = n(i);
          r && d.push(...t(r, l));
        }
      return d;
    }, a = [], s = /* @__PURE__ */ new Set();
    for (const [o, l] of Object.entries(m.value.components)) {
      const d = o.replace(/^pages/, "").replace(/\.vue$/, "").replace(/\/index$/, "").replace(/\[.*?\]/g, "[^/]+");
      let i = !1;
      if ((e === "/" && o.includes("index") || o.includes("pages/") && e.match(new RegExp(`^${d}$`))) && (i = !0), i) {
        const r = t(l);
        a.push(...r), s.add(l.componentName), l.usedComponents && l.usedComponents.forEach((p) => s.add(p));
      }
    }
    for (const [o, l] of Object.entries(m.value.components))
      o.includes("components/") && !s.has(l.componentName) && a.push(...l.elements);
    for (const o of a) {
      if (E.value.has(o.selector))
        continue;
      let l = !1, d = o.selector;
      try {
        document.querySelector(o.selector) && (l = !0);
      } catch {
      }
      if (!l && o.type === "static" && o.text) {
        const i = o.text.replace(/\[コメント\]\s*/, ""), r = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT,
          null
        );
        for (; r.nextNode(); ) {
          const p = r.currentNode;
          if ((c = p.textContent) != null && c.includes(i)) {
            const h = p.parentElement;
            if (h) {
              l = !0, d = I(h);
              break;
            }
          }
        }
      }
      if (!l && o.selector.includes(".")) {
        const i = o.selector.match(/^(\w+)\.(.+)$/);
        if (i) {
          const [, r, p] = i;
          try {
            const h = document.querySelector(o.selector);
            h && (l = !0, d = I(h));
          } catch {
          }
        }
      }
      if (!l && o.type === "data" && o.binding) {
        const i = `[data-bind="${o.binding}"]`;
        try {
          const r = document.querySelector(i);
          r && (l = !0, d = I(r));
        } catch {
        }
      }
      b.value.push({
        selector: d,
        element: o,
        matched: l
      });
    }
    return console.log(`[DevInspector] Applied analysis: ${b.value.filter((o) => o.matched).length}/${b.value.length} elements matched`), b.value.filter((o) => o.matched).length;
  }
  function Ee() {
    b.value = [];
  }
  function Ae(e) {
    b.value = b.value.filter((n) => n.selector !== e), E.value.add(e), Te();
  }
  function Ne() {
    try {
      const e = localStorage.getItem(J);
      e && (E.value = new Set(JSON.parse(e)));
    } catch {
    }
  }
  function Te() {
    try {
      localStorage.setItem(
        J,
        JSON.stringify([...E.value])
      );
    } catch {
    }
  }
  function Ie() {
    E.value.clear(), localStorage.removeItem(J);
  }
  function ee() {
    const e = {
      removed: [...E.value],
      exportedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    return JSON.stringify(e, null, 2);
  }
  function Pe(e = "dev-inspector-changes.json") {
    const n = ee(), t = new Blob([n], { type: "application/json" }), a = URL.createObjectURL(t), s = document.createElement("a");
    s.href = a, s.download = e, document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL(a);
  }
  function $e(e) {
    T.value = e;
  }
  function Oe() {
    T.value = null;
  }
  function Le() {
    return JSON.stringify(u.value, null, 2);
  }
  function te() {
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
  function xe(e = "dev-annotations.json") {
    const n = te(), t = new Blob([n], { type: "application/json" }), a = URL.createObjectURL(t), s = document.createElement("a");
    s.href = a, s.download = e, document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL(a);
  }
  function De(e) {
    try {
      const n = JSON.parse(e), t = n.annotations || n;
      u.value = { ...u.value, ...t };
    } catch (n) {
      throw console.error("[DevInspector] Failed to import configs:", n), new Error("Invalid JSON format");
    }
  }
  function Re() {
    u.value = {};
  }
  return {
    // State
    isEnabled: N,
    isAvailable: j,
    isEditMode: w,
    isPickMode: $,
    isInitializing: B,
    hoveredSelector: z,
    currentScreenSpec: R,
    isPanelOpen: O,
    elementConfigs: u,
    editingElementId: T,
    // Actions
    init: ae,
    toggle: re,
    enable: q,
    disable: ie,
    toggleEditMode: ue,
    togglePickMode: de,
    setHoveredSelector: fe,
    generateSelector: I,
    getConfiguredSelectors: pe,
    setScreenSpec: ve,
    clearScreenSpec: me,
    togglePanel: he,
    openPanel: ge,
    closePanel: ye,
    getElementConfig: Se,
    setElementConfig: Z,
    deleteElementConfig: Ce,
    startEditing: $e,
    stopEditing: Oe,
    exportConfigs: Le,
    exportAsFile: te,
    downloadAnnotations: xe,
    importConfigs: De,
    clearAllConfigs: Re,
    detectSourceBinding: K,
    autoDetectElementInfo: G,
    // Scan
    isScanning: L,
    scanProgress: x,
    scanResults: U,
    scanCurrentPage: V,
    scanAllPages: be,
    allPagesRoutes: Y,
    currentScanPage: H,
    clearScanResults: we,
    // Analysis data
    analysisData: m,
    loadAnalysisData: X,
    getAnalyzedElement: se,
    getAnalyzedElementsForPage: le,
    analysisResults: b,
    applyAnalysisToPage: Q,
    clearAnalysisResults: Ee,
    removeAnalysisResult: Ae,
    clearHiddenSelectors: Ie,
    hiddenAnalysisSelectors: E,
    analysisFilter: oe,
    exportChangesForCli: ee,
    downloadChanges: Pe
  };
});
function Je() {
  return Fe();
}
export {
  Je as a,
  Fe as u
};
