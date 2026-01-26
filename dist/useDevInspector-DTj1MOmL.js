import { ref as r, computed as te, watch as Le, nextTick as F } from "vue";
import { defineStore as Re } from "pinia";
const ke = {}, _e = "devInspector:elementConfigs", je = Re("devInspector", () => {
  const I = r({}), C = r(!1), E = r(!1), P = r(!1), z = r(!1), R = r(null), $ = r(!1), l = r({}), T = r(null), B = r(null), W = te(() => I.value.storageKey || _e), h = r(null), ne = r("all"), N = r(/* @__PURE__ */ new Set()), J = "devInspector:hiddenAnalysisSelectors", k = te(() => I.value.enabledInProduction ? !0 : typeof import.meta < "u" && ke ? !1 : process.env.NODE_ENV === "development"), X = r(!1);
  function oe(e = {}) {
    I.value = e, le(), Ce(), e.analysisData && (h.value = e.analysisData);
    const n = e.analysisDataUrl ?? "/dev-inspector-analysis.json";
    e.autoLoadAnalysis !== !1 && k.value && M(n);
  }
  async function M(e) {
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
  function ae(e) {
    if (!h.value) return null;
    for (const n of Object.values(h.value.components)) {
      const t = n.elements.find((o) => o.selector === e);
      if (t) return t;
    }
    return null;
  }
  function se(e) {
    if (!h.value) return [];
    const n = [];
    for (const [t, o] of Object.entries(h.value.components))
      (!e || t.includes(e)) && n.push(...o.elements);
    return n;
  }
  function le() {
    try {
      const e = I.value.initialAnnotations || {};
      if (typeof window < "u") {
        const n = localStorage.getItem(W.value), t = n ? JSON.parse(n) : {};
        l.value = { ...e, ...t };
      } else
        l.value = e;
    } catch (e) {
      console.error("[DevInspector] Failed to load configs:", e);
    }
  }
  function _() {
    try {
      if (typeof window < "u") {
        const e = JSON.stringify(l.value);
        localStorage.setItem(W.value, e), console.log("[DevInspector] Saved configs:", Object.keys(l.value).length, "items");
      }
    } catch (e) {
      console.error("[DevInspector] Failed to save configs:", e);
    }
  }
  Le(l, () => {
    F(() => {
      _();
    });
  }, { deep: !0 });
  async function ce() {
    k.value && (C.value ? (C.value = !1, E.value = !1, T.value = null) : await Z());
  }
  async function Z() {
    if (!k.value) return;
    if (h.value && !X.value && I.value.autoApplyAnalysis !== !1) {
      z.value = !0, C.value = !0;
      try {
        await new Promise((n) => setTimeout(n, 300)), Q(), X.value = !0;
      } finally {
        z.value = !1;
      }
    } else
      C.value = !0;
  }
  function ie() {
    C.value = !1, E.value = !1, T.value = null;
  }
  function re() {
    E.value = !E.value, E.value || (T.value = null), E.value && (P.value = !1);
  }
  function ue() {
    P.value = !P.value, P.value && (E.value = !1), B.value = null;
  }
  function fe(e) {
    B.value = e;
  }
  function D(e) {
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
          (f) => f.tagName === t.tagName
        );
        if (c.length > 1) {
          const f = c.indexOf(t) + 1;
          o += `:nth-child(${f})`;
        }
      }
      n.unshift(o), t = t.parentElement;
    }
    return n.join(" > ");
  }
  function de() {
    const e = typeof window < "u" ? window.location.pathname : "/";
    return Object.keys(l.value).filter((n) => {
      const t = l.value[n];
      return t ? (n.includes(">") || n.startsWith("#") || n.startsWith("[") || n.startsWith(".")) && (!t.componentPath || t.componentPath.includes(e) || e === "/") : !1;
    });
  }
  function pe(e) {
    R.value = e;
  }
  function ve() {
    R.value = null;
  }
  function ge() {
    $.value = !$.value;
  }
  function he() {
    $.value = !0;
  }
  function me() {
    $.value = !1;
  }
  function ye(e) {
    return l.value[e];
  }
  function q(e, n) {
    var s;
    const t = (/* @__PURE__ */ new Date()).toISOString(), o = l.value[e], a = {
      ...o,
      ...n,
      id: e,
      componentPath: n.componentPath || ((s = R.value) == null ? void 0 : s.componentPath) || "",
      createdAt: (o == null ? void 0 : o.createdAt) || t,
      updatedAt: t
    };
    l.value = {
      ...l.value,
      [e]: a
    }, F(() => _());
  }
  function Se(e) {
    const { [e]: n, ...t } = l.value;
    l.value = t, F(() => _());
  }
  function K(e) {
    var U;
    const n = ((U = e.textContent) == null ? void 0 : U.trim()) || "", t = e.tagName.toUpperCase();
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
          (b) => b !== v && b.className === v.className
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
        (b) => b.children.length === e.children.length
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
    ].some((d) => d.test(n)), L = t === "BUTTON" || e.closest("button") !== null || e.getAttribute("role") === "button";
    return p || y || L && n.length < 20 ? {
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
    var a, s, c, f, g;
    const t = K(e), o = {};
    if (t) {
      o.sourceBinding = t;
      const u = ((a = e.textContent) == null ? void 0 : a.trim()) || "";
      if (t.isStatic)
        o.note = {
          type: "info",
          text: `【固定文言】${u}`
        };
      else if (t.type === "v-model") {
        const i = e.tagName.toUpperCase();
        if (i === "INPUT" || i === "SELECT" || i === "TEXTAREA") {
          const p = e.placeholder || "", w = ((c = (s = e.closest("label")) == null ? void 0 : s.textContent) == null ? void 0 : c.trim()) || e.getAttribute("aria-label") || ((g = (f = document.querySelector(`label[for="${e.id}"]`)) == null ? void 0 : f.textContent) == null ? void 0 : g.trim()) || "";
          o.note = {
            type: "todo",
            text: `【フォーム要素】${w || p || i.toLowerCase()}`
          };
        }
      } else t.type === "api" && (o.note = {
        type: "question",
        text: `【動的データ】${u.substring(0, 100)}${u.length > 100 ? "..." : ""}`
      });
    }
    return o;
  }
  const x = r(!1), O = r(0), j = r([]);
  async function V(e = {}) {
    x.value = !0, O.value = 0, j.value = [];
    const { rescan: n = !1 } = e;
    if (n) {
      const t = typeof window < "u" ? window.location.pathname : "/", o = Object.keys(l.value).filter((a) => {
        const s = l.value[a];
        return !s.componentPath || s.componentPath.includes(t);
      });
      for (const a of o)
        delete l.value[a];
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
      ].join(","), o = document.querySelectorAll(t), a = [];
      o.forEach((u) => {
        var v;
        const i = u;
        if (i.closest("[data-dev-inspector]")) return;
        const p = window.getComputedStyle(i);
        if (p.display === "none" || p.visibility === "hidden" || p.opacity === "0") return;
        const w = D(i);
        if (l.value[w]) return;
        const y = i.tagName.toUpperCase(), L = ((v = i.textContent) == null ? void 0 : v.trim()) || "";
        if (y === "INPUT" || y === "SELECT" || y === "TEXTAREA") {
          a.push(i);
          return;
        }
        if (L.length > 300 || L.length === 0 || y === "DIV" && (Array.from(i.childNodes).filter((S) => S.nodeType === Node.TEXT_NODE).map((S) => {
          var b;
          return ((b = S.textContent) == null ? void 0 : b.trim()) || "";
        }).join("").trim().length === 0 || i.children.length > 3))
          return;
        const U = Array.from(i.childNodes).some((m) => {
          var S;
          return m.nodeType === Node.TEXT_NODE && (((S = m.textContent) == null ? void 0 : S.trim()) || "").length > 0;
        }), d = !Array.from(i.children).some((m) => ["DIV", "P", "UL", "OL", "TABLE", "SECTION", "ARTICLE"].includes(m.tagName));
        (U || i.children.length === 0 && L.length > 0 || d) && a.push(i);
      });
      const s = a.length;
      let c = 0, f = 0;
      const g = 20;
      for (let u = 0; u < a.length; u += g) {
        const i = a.slice(u, u + g);
        for (const p of i) {
          const w = D(p), y = G(p, w);
          y.sourceBinding && (j.value.push({ selector: w, element: p, detected: y }), q(w, y), f++), c++, O.value = Math.round(c / s * 100);
        }
        await new Promise((p) => setTimeout(p, 10));
      }
      return f;
    } finally {
      x.value = !1, O.value = 100;
    }
  }
  const Y = r([]), H = r("");
  async function Ae(e) {
    var t;
    if (!e)
      return console.warn("[DevInspector] Router not provided for all pages scan"), [];
    x.value = !0;
    const n = [];
    try {
      const o = e.getRoutes(), a = [];
      for (const s of o)
        s.path.includes(":") && !s.path.includes("?") || s.redirect || s.path !== "/:pathMatch(.*)*" && ((t = s.meta) != null && t.devInspectorSkip || a.push(s.path));
      Y.value = a;
      for (const s of a) {
        H.value = s;
        try {
          await e.push(s), await new Promise((f) => setTimeout(f, 500));
          const c = await V();
          n.push({ page: s, count: c });
        } catch (c) {
          console.warn(`[DevInspector] Failed to scan page ${s}:`, c), n.push({ page: s, count: 0 });
        }
      }
      return n;
    } finally {
      x.value = !1, H.value = "";
    }
  }
  function Ee() {
    j.value = [], O.value = 0;
  }
  const A = r([]);
  async function Q() {
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
      if (N.value.has(o.selector))
        continue;
      let a = !1, s = o.selector;
      try {
        document.querySelector(o.selector) && (a = !0);
      } catch {
      }
      if (!a && o.type === "static" && o.text) {
        const c = o.text.replace(/\[コメント\]\s*/, ""), f = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT,
          null
        );
        for (; f.nextNode(); ) {
          const g = f.currentNode;
          if ((t = g.textContent) != null && t.includes(c)) {
            const u = g.parentElement;
            if (u) {
              a = !0, s = D(u);
              break;
            }
          }
        }
      }
      if (!a && o.selector.includes(".")) {
        const c = o.selector.match(/^(\w+)\.(.+)$/);
        if (c) {
          const [, f, g] = c, u = document.querySelectorAll(`${f}.${g.split(".")[0]}`);
          u.length > 0 && (a = !0, s = D(u[0]));
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
  function we() {
    A.value = [];
  }
  function be(e) {
    A.value = A.value.filter((n) => n.selector !== e), N.value.add(e), Te();
  }
  function Ce() {
    try {
      const e = localStorage.getItem(J);
      e && (N.value = new Set(JSON.parse(e)));
    } catch {
    }
  }
  function Te() {
    try {
      localStorage.setItem(
        J,
        JSON.stringify([...N.value])
      );
    } catch {
    }
  }
  function Ne() {
    N.value.clear(), localStorage.removeItem(J);
  }
  function Ie(e) {
    T.value = e;
  }
  function Pe() {
    T.value = null;
  }
  function $e() {
    return JSON.stringify(l.value, null, 2);
  }
  function ee() {
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
  function De(e = "dev-annotations.json") {
    const n = ee(), t = new Blob([n], { type: "application/json" }), o = URL.createObjectURL(t), a = document.createElement("a");
    a.href = o, a.download = e, document.body.appendChild(a), a.click(), document.body.removeChild(a), URL.revokeObjectURL(o);
  }
  function xe(e) {
    try {
      const n = JSON.parse(e), t = n.annotations || n;
      l.value = { ...l.value, ...t };
    } catch (n) {
      throw console.error("[DevInspector] Failed to import configs:", n), new Error("Invalid JSON format");
    }
  }
  function Oe() {
    l.value = {};
  }
  return {
    // State
    isEnabled: C,
    isAvailable: k,
    isEditMode: E,
    isPickMode: P,
    isInitializing: z,
    hoveredSelector: B,
    currentScreenSpec: R,
    isPanelOpen: $,
    elementConfigs: l,
    editingElementId: T,
    // Actions
    init: oe,
    toggle: ce,
    enable: Z,
    disable: ie,
    toggleEditMode: re,
    togglePickMode: ue,
    setHoveredSelector: fe,
    generateSelector: D,
    getConfiguredSelectors: de,
    setScreenSpec: pe,
    clearScreenSpec: ve,
    togglePanel: ge,
    openPanel: he,
    closePanel: me,
    getElementConfig: ye,
    setElementConfig: q,
    deleteElementConfig: Se,
    startEditing: Ie,
    stopEditing: Pe,
    exportConfigs: $e,
    exportAsFile: ee,
    downloadAnnotations: De,
    importConfigs: xe,
    clearAllConfigs: Oe,
    detectSourceBinding: K,
    autoDetectElementInfo: G,
    // Scan
    isScanning: x,
    scanProgress: O,
    scanResults: j,
    scanCurrentPage: V,
    scanAllPages: Ae,
    allPagesRoutes: Y,
    currentScanPage: H,
    clearScanResults: Ee,
    // Analysis data
    analysisData: h,
    loadAnalysisData: M,
    getAnalyzedElement: ae,
    getAnalyzedElementsForPage: se,
    analysisResults: A,
    applyAnalysisToPage: Q,
    clearAnalysisResults: we,
    removeAnalysisResult: be,
    clearHiddenSelectors: Ne,
    hiddenAnalysisSelectors: N,
    analysisFilter: ne
  };
});
function ze() {
  return je();
}
export {
  ze as a,
  je as u
};
