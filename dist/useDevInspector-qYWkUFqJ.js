import { ref as p, computed as te, watch as xe, nextTick as F } from "vue";
import { defineStore as ke } from "pinia";
const Re = {}, _e = "devInspector:elementConfigs", je = ke("devInspector", () => {
  const I = p({}), N = p(!1), E = p(!1), P = p(!1), B = p(!1), k = p(null), O = p(!1), d = p({}), T = p(null), z = p(null), H = te(() => I.value.storageKey || _e), h = p(null), ne = p("all"), $ = p(/* @__PURE__ */ new Set()), J = "devInspector:hiddenAnalysisSelectors", R = te(() => I.value.enabledInProduction ? !0 : typeof import.meta < "u" && Re ? !1 : process.env.NODE_ENV === "development"), M = p(!1);
  function oe(e = {}) {
    I.value = e, le(), we(), e.analysisData && (h.value = e.analysisData);
    const n = e.analysisDataUrl ?? "/dev-inspector-analysis.json";
    e.autoLoadAnalysis !== !1 && R.value && W(n);
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
  function ae(e) {
    if (!h.value) return null;
    for (const n of Object.values(h.value.components)) {
      const t = n.elements.find((a) => a.selector === e);
      if (t) return t;
    }
    return null;
  }
  function se(e) {
    if (!h.value) return [];
    const n = [];
    for (const [t, a] of Object.entries(h.value.components))
      (!e || t.includes(e)) && n.push(...a.elements);
    return n;
  }
  function le() {
    try {
      const e = I.value.initialAnnotations || {};
      if (typeof window < "u") {
        const n = localStorage.getItem(H.value), t = n ? JSON.parse(n) : {};
        d.value = { ...e, ...t };
      } else
        d.value = e;
    } catch (e) {
      console.error("[DevInspector] Failed to load configs:", e);
    }
  }
  function _() {
    try {
      if (typeof window < "u") {
        const e = JSON.stringify(d.value);
        localStorage.setItem(H.value, e), console.log("[DevInspector] Saved configs:", Object.keys(d.value).length, "items");
      }
    } catch (e) {
      console.error("[DevInspector] Failed to save configs:", e);
    }
  }
  xe(d, () => {
    F(() => {
      _();
    });
  }, { deep: !0 });
  async function ce() {
    R.value && (N.value ? (N.value = !1, E.value = !1, T.value = null) : await X());
  }
  async function X() {
    if (!R.value) return;
    if (h.value && !M.value && I.value.autoApplyAnalysis !== !1) {
      B.value = !0, N.value = !0;
      try {
        await new Promise((n) => setTimeout(n, 300)), Q(), M.value = !0;
      } finally {
        B.value = !1;
      }
    } else
      N.value = !0;
  }
  function ie() {
    N.value = !1, E.value = !1, T.value = null;
  }
  function re() {
    E.value = !E.value, E.value || (T.value = null), E.value && (P.value = !1);
  }
  function ue() {
    P.value = !P.value, P.value && (E.value = !1), z.value = null;
  }
  function fe(e) {
    z.value = e;
  }
  function C(e) {
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
      const i = t.parentElement;
      if (i) {
        const o = Array.from(i.children).filter(
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
    return Object.keys(d.value).filter((n) => {
      const t = d.value[n];
      return t ? (n.includes(">") || n.startsWith("#") || n.startsWith("[") || n.startsWith(".")) && (!t.componentPath || t.componentPath.includes(e) || e === "/") : !1;
    });
  }
  function pe(e) {
    k.value = e;
  }
  function me() {
    k.value = null;
  }
  function ve() {
    O.value = !O.value;
  }
  function he() {
    O.value = !0;
  }
  function ge() {
    O.value = !1;
  }
  function ye(e) {
    return d.value[e];
  }
  function Z(e, n) {
    var i;
    const t = (/* @__PURE__ */ new Date()).toISOString(), a = d.value[e], l = {
      ...a,
      ...n,
      id: e,
      componentPath: n.componentPath || ((i = k.value) == null ? void 0 : i.componentPath) || "",
      createdAt: (a == null ? void 0 : a.createdAt) || t,
      updatedAt: t
    };
    d.value = {
      ...d.value,
      [e]: l
    }, F(() => _());
  }
  function Se(e) {
    const { [e]: n, ...t } = d.value;
    d.value = t, F(() => _());
  }
  function K(e) {
    var U;
    const n = ((U = e.textContent) == null ? void 0 : U.trim()) || "", t = e.tagName.toUpperCase();
    if (!n && t !== "INPUT" && t !== "SELECT" && t !== "TEXTAREA")
      return null;
    const a = e.__vueParentComponent;
    if (a) {
      const v = a.props || {}, y = a.attrs || {};
      if ("modelValue" in v || "model-value" in y)
        return {
          type: "v-model",
          source: "form binding detected",
          isStatic: !1
        };
    }
    if (t === "INPUT" || t === "SELECT" || t === "TEXTAREA") {
      const v = e.type || "text", y = e.placeholder || "";
      return {
        type: "v-model",
        source: `${t.toLowerCase()}[type=${v}]${y ? ` placeholder="${y}"` : ""}`,
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
    const i = e.closest('ul, ol, [role="list"]');
    if (i && i.children.length > 1)
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
      const y = e.closest(v);
      if (y) {
        const S = y.parentElement;
        if (S && Array.from(S.children).filter(
          (w) => w !== y && w.className === y.className
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
      const v = e.parentElement, S = Array.from(v.children).filter((b) => b.tagName === e.tagName);
      if (S.length >= 2 && S.filter(
        (w) => w.children.length === e.children.length
      ).length >= 2)
        return {
          type: "api",
          source: "repeated element",
          isStatic: !1
        };
    }
    const u = [
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
    for (const v of u)
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
    const f = ["LABEL", "TH", "LEGEND", "FIGCAPTION"].includes(t), g = [
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
    return f || g || x && n.length < 20 ? {
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
    var l, i, o, s, u;
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
        const c = e.tagName.toUpperCase();
        if (c === "INPUT" || c === "SELECT" || c === "TEXTAREA") {
          const f = e.placeholder || "", m = ((o = (i = e.closest("label")) == null ? void 0 : i.textContent) == null ? void 0 : o.trim()) || e.getAttribute("aria-label") || ((u = (s = document.querySelector(`label[for="${e.id}"]`)) == null ? void 0 : s.textContent) == null ? void 0 : u.trim()) || "";
          a.note = {
            type: "todo",
            text: `【フォーム要素】${m || f || c.toLowerCase()}`
          };
        }
      } else t.type === "api" && (a.note = {
        type: "question",
        text: `【動的データ】${r.substring(0, 100)}${r.length > 100 ? "..." : ""}`
      });
    }
    return a;
  }
  const D = p(!1), L = p(0), j = p([]);
  async function V(e = {}) {
    D.value = !0, L.value = 0, j.value = [];
    const { rescan: n = !1 } = e;
    if (n) {
      const t = typeof window < "u" ? window.location.pathname : "/", a = Object.keys(d.value).filter((l) => {
        const i = d.value[l];
        return !i.componentPath || i.componentPath.includes(t);
      });
      for (const l of a)
        delete d.value[l];
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
        var y;
        const c = r;
        if (c.closest("[data-dev-inspector]")) return;
        const f = window.getComputedStyle(c);
        if (f.display === "none" || f.visibility === "hidden" || f.opacity === "0") return;
        const m = C(c);
        if (d.value[m]) return;
        const g = c.tagName.toUpperCase(), x = ((y = c.textContent) == null ? void 0 : y.trim()) || "";
        if (g === "INPUT" || g === "SELECT" || g === "TEXTAREA") {
          l.push(c);
          return;
        }
        if (x.length > 300 || x.length === 0 || g === "DIV" && (Array.from(c.childNodes).filter((b) => b.nodeType === Node.TEXT_NODE).map((b) => {
          var w;
          return ((w = b.textContent) == null ? void 0 : w.trim()) || "";
        }).join("").trim().length === 0 || c.children.length > 3))
          return;
        const U = Array.from(c.childNodes).some((S) => {
          var b;
          return S.nodeType === Node.TEXT_NODE && (((b = S.textContent) == null ? void 0 : b.trim()) || "").length > 0;
        }), v = !Array.from(c.children).some((S) => ["DIV", "P", "UL", "OL", "TABLE", "SECTION", "ARTICLE"].includes(S.tagName));
        (U || c.children.length === 0 && x.length > 0 || v) && l.push(c);
      });
      const i = l.length;
      let o = 0, s = 0;
      const u = 20;
      for (let r = 0; r < l.length; r += u) {
        const c = l.slice(r, r + u);
        for (const f of c) {
          const m = C(f), g = G(f, m);
          g.sourceBinding && (j.value.push({ selector: m, element: f, detected: g }), Z(m, g), s++), o++, L.value = Math.round(o / i * 100);
        }
        await new Promise((f) => setTimeout(f, 10));
      }
      return s;
    } finally {
      D.value = !1, L.value = 100;
    }
  }
  const Y = p([]), q = p("");
  async function be(e) {
    var t;
    if (!e)
      return console.warn("[DevInspector] Router not provided for all pages scan"), [];
    D.value = !0;
    const n = [];
    try {
      const a = e.getRoutes(), l = [];
      for (const i of a)
        i.path.includes(":") && !i.path.includes("?") || i.redirect || i.path !== "/:pathMatch(.*)*" && ((t = i.meta) != null && t.devInspectorSkip || l.push(i.path));
      Y.value = l;
      for (const i of l) {
        q.value = i;
        try {
          await e.push(i), await new Promise((s) => setTimeout(s, 500));
          const o = await V();
          n.push({ page: i, count: o });
        } catch (o) {
          console.warn(`[DevInspector] Failed to scan page ${i}:`, o), n.push({ page: i, count: 0 });
        }
      }
      return n;
    } finally {
      D.value = !1, q.value = "";
    }
  }
  function Ae() {
    j.value = [], L.value = 0;
  }
  const A = p([]);
  async function Q() {
    var i;
    if (!h.value)
      return console.warn("[DevInspector] No analysis data loaded. Call loadAnalysisData first."), 0;
    A.value = [];
    const e = typeof window < "u" ? window.location.pathname : "/", n = (o) => {
      if (!h.value) return null;
      for (const [s, u] of Object.entries(h.value.components))
        if (u.componentName === o || u.componentName.toLowerCase() === o.toLowerCase() || s.toLowerCase().includes(`/${o.toLowerCase()}.vue`))
          return u;
      return null;
    }, t = (o, s = /* @__PURE__ */ new Set()) => {
      const u = [];
      if (s.has(o.componentName)) return u;
      if (s.add(o.componentName), u.push(...o.elements), o.usedComponents)
        for (const r of o.usedComponents) {
          const c = n(r);
          c && u.push(...t(c, s));
        }
      return u;
    }, a = [], l = /* @__PURE__ */ new Set();
    for (const [o, s] of Object.entries(h.value.components)) {
      const u = o.replace(/^pages/, "").replace(/\.vue$/, "").replace(/\/index$/, "").replace(/\[.*?\]/g, "[^/]+");
      let r = !1;
      if ((e === "/" && o.includes("index") || o.includes("pages/") && e.match(new RegExp(`^${u}$`))) && (r = !0), r) {
        const c = t(s);
        a.push(...c), l.add(s.componentName), s.usedComponents && s.usedComponents.forEach((f) => l.add(f));
      }
    }
    for (const [o, s] of Object.entries(h.value.components))
      o.includes("components/") && !l.has(s.componentName) && a.push(...s.elements);
    for (const o of a) {
      if ($.value.has(o.selector))
        continue;
      let s = !1, u = o.selector;
      try {
        document.querySelector(o.selector) && (s = !0);
      } catch {
      }
      if (!s && o.type === "static" && o.text) {
        const r = o.text.replace(/\[コメント\]\s*/, ""), c = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT,
          null
        );
        for (; c.nextNode(); ) {
          const f = c.currentNode;
          if ((i = f.textContent) != null && i.includes(r)) {
            const m = f.parentElement;
            if (m) {
              s = !0, u = C(m);
              break;
            }
          }
        }
      }
      if (!s && o.selector.includes(".")) {
        const r = o.selector.match(/^(\w+)\.(.+)$/);
        if (r) {
          const [, c, f] = r, m = document.querySelectorAll(`${c}.${f.split(".")[0]}`);
          m.length > 0 && (s = !0, u = C(m[0]));
        }
      }
      if (!s && o.type === "data" && o.binding) {
        const r = o.binding.split("."), f = `[data-field="${r[r.length - 1]}"], [data-bind="${o.binding}"]`;
        try {
          const m = document.querySelector(f);
          m && (s = !0, u = C(m));
        } catch {
        }
      }
      if (!s && o.db) {
        const r = o.db.column, c = o.db.table, f = [
          `[class*="${r}"]`,
          `[class*="${c.replace(/s$/, "")}"]`,
          // users -> user
          `[data-testid*="${r}"]`
        ];
        for (const m of f)
          try {
            const g = document.querySelector(m);
            if (g) {
              s = !0, u = C(g);
              break;
            }
          } catch {
          }
      }
      A.value.push({
        selector: u,
        element: o,
        matched: s
      });
    }
    return console.log(`[DevInspector] Applied analysis: ${A.value.filter((o) => o.matched).length}/${A.value.length} elements matched`), A.value.filter((o) => o.matched).length;
  }
  function Ee() {
    A.value = [];
  }
  function Ce(e) {
    A.value = A.value.filter((n) => n.selector !== e), $.value.add(e), Ne();
  }
  function we() {
    try {
      const e = localStorage.getItem(J);
      e && ($.value = new Set(JSON.parse(e)));
    } catch {
    }
  }
  function Ne() {
    try {
      localStorage.setItem(
        J,
        JSON.stringify([...$.value])
      );
    } catch {
    }
  }
  function Te() {
    $.value.clear(), localStorage.removeItem(J);
  }
  function $e(e) {
    T.value = e;
  }
  function Ie() {
    T.value = null;
  }
  function Pe() {
    return JSON.stringify(d.value, null, 2);
  }
  function ee() {
    const e = {
      _meta: {
        version: "1.0.0",
        description: "Dev Inspector annotations",
        lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
      },
      annotations: d.value
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
      d.value = { ...d.value, ...t };
    } catch (n) {
      throw console.error("[DevInspector] Failed to import configs:", n), new Error("Invalid JSON format");
    }
  }
  function Le() {
    d.value = {};
  }
  return {
    // State
    isEnabled: N,
    isAvailable: R,
    isEditMode: E,
    isPickMode: P,
    isInitializing: B,
    hoveredSelector: z,
    currentScreenSpec: k,
    isPanelOpen: O,
    elementConfigs: d,
    editingElementId: T,
    // Actions
    init: oe,
    toggle: ce,
    enable: X,
    disable: ie,
    toggleEditMode: re,
    togglePickMode: ue,
    setHoveredSelector: fe,
    generateSelector: C,
    getConfiguredSelectors: de,
    setScreenSpec: pe,
    clearScreenSpec: me,
    togglePanel: ve,
    openPanel: he,
    closePanel: ge,
    getElementConfig: ye,
    setElementConfig: Z,
    deleteElementConfig: Se,
    startEditing: $e,
    stopEditing: Ie,
    exportConfigs: Pe,
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
    scanAllPages: be,
    allPagesRoutes: Y,
    currentScanPage: q,
    clearScanResults: Ae,
    // Analysis data
    analysisData: h,
    loadAnalysisData: W,
    getAnalyzedElement: ae,
    getAnalyzedElementsForPage: se,
    analysisResults: A,
    applyAnalysisToPage: Q,
    clearAnalysisResults: Ee,
    removeAnalysisResult: Ce,
    clearHiddenSelectors: Te,
    hiddenAnalysisSelectors: $,
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
