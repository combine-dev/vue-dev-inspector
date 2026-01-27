import { ref as g, computed as oe, watch as Ue, nextTick as B } from "vue";
import { defineStore as _e } from "pinia";
const Be = {}, Fe = "devInspector:elementConfigs", ze = _e("devInspector", () => {
  const $ = g({}), I = g(!1), A = g(!1), O = g(!1), F = g(!1), j = g(null), x = g(!1), d = g({}), L = g(null), z = g(null), W = oe(() => $.value.storageKey || Fe), v = g(null), ae = g("all"), E = g(/* @__PURE__ */ new Set()), J = "devInspector:hiddenAnalysisSelectors", k = oe(() => $.value.enabledInProduction ? !0 : typeof import.meta < "u" && Be ? !1 : process.env.NODE_ENV === "development"), H = g(!1);
  function se(e = {}) {
    $.value = e, ce(), Te(), e.analysisData && (v.value = e.analysisData);
    const n = e.analysisDataUrl ?? "/dev-inspector-analysis.json";
    e.autoLoadAnalysis !== !1 && k.value && X(n);
  }
  async function X(e) {
    var n;
    try {
      const t = await fetch(e);
      if (t.ok)
        return v.value = await t.json(), console.log("[DevInspector] Analysis data loaded:", Object.keys(((n = v.value) == null ? void 0 : n.components) || {}).length, "components"), !0;
    } catch {
      console.debug("[DevInspector] Analysis data not found at", e);
    }
    return !1;
  }
  function ie(e) {
    if (!v.value) return null;
    for (const n of Object.values(v.value.components)) {
      const t = n.elements.find((o) => o.selector === e);
      if (t) return t;
    }
    return null;
  }
  function le(e) {
    if (!v.value) return [];
    const n = [];
    for (const [t, o] of Object.entries(v.value.components))
      (!e || t.includes(e)) && n.push(...o.elements);
    return n;
  }
  function ce() {
    try {
      const e = $.value.initialAnnotations || {};
      if (typeof window < "u") {
        const n = localStorage.getItem(W.value), t = n ? JSON.parse(n) : {};
        d.value = { ...e, ...t };
      } else
        d.value = e;
    } catch (e) {
      console.error("[DevInspector] Failed to load configs:", e);
    }
  }
  function U() {
    try {
      if (typeof window < "u") {
        const e = JSON.stringify(d.value);
        localStorage.setItem(W.value, e), console.log("[DevInspector] Saved configs:", Object.keys(d.value).length, "items");
      }
    } catch (e) {
      console.error("[DevInspector] Failed to save configs:", e);
    }
  }
  Ue(d, () => {
    B(() => {
      U();
    });
  }, { deep: !0 });
  async function re() {
    k.value && (I.value ? (I.value = !1, A.value = !1, L.value = null) : await q());
  }
  async function q() {
    if (!k.value) return;
    if (v.value && !H.value && $.value.autoApplyAnalysis !== !1) {
      F.value = !0, I.value = !0;
      try {
        await new Promise((n) => setTimeout(n, 300)), Q(), H.value = !0;
      } finally {
        F.value = !1;
      }
    } else
      I.value = !0;
  }
  function ue() {
    I.value = !1, A.value = !1, L.value = null;
  }
  function de() {
    A.value = !A.value, A.value || (L.value = null), A.value && (O.value = !1);
  }
  function fe() {
    O.value = !O.value, O.value && (A.value = !1), z.value = null;
  }
  function pe(e) {
    z.value = e;
  }
  function P(e) {
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
      const i = t.parentElement;
      if (i) {
        const a = Array.from(i.children).filter(
          (l) => l.tagName === t.tagName
        );
        if (a.length > 1) {
          const l = a.indexOf(t) + 1;
          o += `:nth-child(${l})`;
        }
      }
      n.unshift(o), t = t.parentElement;
    }
    return n.join(" > ");
  }
  function ge() {
    const e = typeof window < "u" ? window.location.pathname : "/";
    return Object.keys(d.value).filter((n) => {
      const t = d.value[n];
      return t ? (n.includes(">") || n.startsWith("#") || n.startsWith("[") || n.startsWith(".")) && (!t.componentPath || t.componentPath.includes(e) || e === "/") : !1;
    });
  }
  function me(e) {
    j.value = e;
  }
  function ve() {
    j.value = null;
  }
  function he() {
    x.value = !x.value;
  }
  function ye() {
    x.value = !0;
  }
  function be() {
    x.value = !1;
  }
  function Se(e) {
    return d.value[e];
  }
  function Z(e, n) {
    var i;
    const t = (/* @__PURE__ */ new Date()).toISOString(), o = d.value[e], s = {
      ...o,
      ...n,
      id: e,
      componentPath: n.componentPath || ((i = j.value) == null ? void 0 : i.componentPath) || "",
      createdAt: (o == null ? void 0 : o.createdAt) || t,
      updatedAt: t
    };
    d.value = {
      ...d.value,
      [e]: s
    }, B(() => U());
  }
  function Ce(e) {
    const { [e]: n, ...t } = d.value;
    d.value = t, B(() => U());
  }
  function K(e) {
    var N;
    const n = ((N = e.textContent) == null ? void 0 : N.trim()) || "", t = e.tagName.toUpperCase();
    if (!n && t !== "INPUT" && t !== "SELECT" && t !== "TEXTAREA")
      return null;
    const o = e.__vueParentComponent;
    if (o) {
      const m = o.props || {}, u = o.attrs || {};
      if ("modelValue" in m || "model-value" in u)
        return {
          type: "v-model",
          source: "form binding detected",
          isStatic: !1
        };
    }
    if (t === "INPUT" || t === "SELECT" || t === "TEXTAREA") {
      const m = e.type || "text", u = e.placeholder || "";
      return {
        type: "v-model",
        source: `${t.toLowerCase()}[type=${m}]${u ? ` placeholder="${u}"` : ""}`,
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
    const i = e.closest('ul, ol, [role="list"]');
    if (i && i.children.length > 1)
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
    for (const m of a) {
      const u = e.closest(m);
      if (u) {
        const h = u.parentElement;
        if (h && Array.from(h.children).filter(
          (T) => T !== u && T.className === u.className
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
      const m = e.parentElement, h = Array.from(m.children).filter((S) => S.tagName === e.tagName);
      if (h.length >= 2 && h.filter(
        (T) => T.children.length === e.children.length
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
    for (const m of f)
      if (m.test(n))
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
    for (const m of r)
      if (m.test(n))
        return {
          type: "api",
          source: "name pattern",
          isStatic: !1
        };
    const p = ["LABEL", "TH", "LEGEND", "FIGCAPTION"].includes(t), b = [
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
    ].some((m) => m.test(n)), w = t === "BUTTON" || e.closest("button") !== null || e.getAttribute("role") === "button";
    return p || b || w && n.length < 20 ? {
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
    var y, b, w, N, m;
    const t = {}, o = ((y = e.textContent) == null ? void 0 : y.trim()) || "", s = e.getAttribute("data-di-binding");
    e.getAttribute("data-di-db"), e.getAttribute("data-di-component"), e.getAttribute("data-di-db-comment");
    let i = e;
    if (!s) {
      const u = e.closest("[data-di-binding]");
      u && (i = u);
    }
    const a = i.getAttribute("data-di-binding"), l = i.getAttribute("data-di-db"), f = i.getAttribute("data-di-component"), r = i.getAttribute("data-di-db-type"), c = i.getAttribute("data-di-db-comment");
    if (a || l) {
      if (t.sourceBinding = {
        type: "api",
        source: a || void 0,
        isStatic: !1
      }, l) {
        const [u, h] = l.split(".");
        u && h && (t.fieldInfo = {
          table: u,
          column: h,
          type: r || void 0,
          description: c || void 0
        });
      }
      return f && (t.devMeta = {
        usedComponents: [f]
      }), t.note = {
        type: "info",
        text: `【データバインディング】${a}${l ? ` → ${l}` : ""}`
      }, t;
    }
    const p = K(e);
    if (p)
      if (t.sourceBinding = p, p.isStatic)
        t.note = {
          type: "info",
          text: `【固定文言】${o}`
        };
      else if (p.type === "v-model") {
        const u = e.tagName.toUpperCase();
        if (u === "INPUT" || u === "SELECT" || u === "TEXTAREA") {
          const h = e.placeholder || "", S = ((w = (b = e.closest("label")) == null ? void 0 : b.textContent) == null ? void 0 : w.trim()) || e.getAttribute("aria-label") || ((m = (N = document.querySelector(`label[for="${e.id}"]`)) == null ? void 0 : N.textContent) == null ? void 0 : m.trim()) || "";
          t.note = {
            type: "todo",
            text: `【フォーム要素】${S || h || u.toLowerCase()}`
          };
        }
      } else p.type === "api" && (t.note = {
        type: "question",
        text: `【動的データ】${o.substring(0, 100)}${o.length > 100 ? "..." : ""}`
      });
    return t;
  }
  const D = g(!1), R = g(0), _ = g([]);
  async function V(e = {}) {
    D.value = !0, R.value = 0, _.value = [];
    const { rescan: n = !1 } = e;
    if (n) {
      const t = typeof window < "u" ? window.location.pathname : "/", o = Object.keys(d.value).filter((s) => {
        const i = d.value[s];
        return !i.componentPath || i.componentPath.includes(t);
      });
      for (const s of o)
        delete d.value[s];
      B(() => U());
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
        var u;
        const c = r;
        if (c.closest("[data-dev-inspector]")) return;
        const p = window.getComputedStyle(c);
        if (p.display === "none" || p.visibility === "hidden" || p.opacity === "0") return;
        const y = P(c);
        if (d.value[y]) return;
        const b = c.tagName.toUpperCase(), w = ((u = c.textContent) == null ? void 0 : u.trim()) || "";
        if (b === "INPUT" || b === "SELECT" || b === "TEXTAREA") {
          s.push(c);
          return;
        }
        if (w.length > 300 || w.length === 0 || b === "DIV" && (Array.from(c.childNodes).filter((S) => S.nodeType === Node.TEXT_NODE).map((S) => {
          var T;
          return ((T = S.textContent) == null ? void 0 : T.trim()) || "";
        }).join("").trim().length === 0 || c.children.length > 3))
          return;
        const N = Array.from(c.childNodes).some((h) => {
          var S;
          return h.nodeType === Node.TEXT_NODE && (((S = h.textContent) == null ? void 0 : S.trim()) || "").length > 0;
        }), m = !Array.from(c.children).some((h) => ["DIV", "P", "UL", "OL", "TABLE", "SECTION", "ARTICLE"].includes(h.tagName));
        (N || c.children.length === 0 && w.length > 0 || m) && s.push(c);
      });
      const i = s.length;
      let a = 0, l = 0;
      const f = 20;
      for (let r = 0; r < s.length; r += f) {
        const c = s.slice(r, r + f);
        for (const p of c) {
          const y = P(p), b = G(p, y);
          b.sourceBinding && (_.value.push({ selector: y, element: p, detected: b }), Z(y, b), l++), a++, R.value = Math.round(a / i * 100);
        }
        await new Promise((p) => setTimeout(p, 10));
      }
      return l;
    } finally {
      D.value = !1, R.value = 100;
    }
  }
  const Y = g([]), M = g("");
  async function Ae(e) {
    var t;
    if (!e)
      return console.warn("[DevInspector] Router not provided for all pages scan"), [];
    D.value = !0;
    const n = [];
    try {
      const o = e.getRoutes(), s = [];
      for (const i of o)
        i.path.includes(":") && !i.path.includes("?") || i.redirect || i.path !== "/:pathMatch(.*)*" && ((t = i.meta) != null && t.devInspectorSkip || s.push(i.path));
      Y.value = s;
      for (const i of s) {
        M.value = i;
        try {
          await e.push(i), await new Promise((l) => setTimeout(l, 500));
          const a = await V();
          n.push({ page: i, count: a });
        } catch (a) {
          console.warn(`[DevInspector] Failed to scan page ${i}:`, a), n.push({ page: i, count: 0 });
        }
      }
      return n;
    } finally {
      D.value = !1, M.value = "";
    }
  }
  function we() {
    _.value = [], R.value = 0;
  }
  const C = g([]);
  async function Q() {
    var i;
    if (!v.value)
      return console.warn("[DevInspector] No analysis data loaded. Call loadAnalysisData first."), 0;
    C.value = [];
    const e = typeof window < "u" ? window.location.pathname : "/", n = (a) => {
      if (!v.value) return null;
      for (const [l, f] of Object.entries(v.value.components))
        if (f.componentName === a || f.componentName.toLowerCase() === a.toLowerCase() || l.toLowerCase().includes(`/${a.toLowerCase()}.vue`))
          return f;
      return null;
    }, t = (a, l = /* @__PURE__ */ new Set()) => {
      const f = [];
      if (l.has(a.componentName)) return f;
      if (l.add(a.componentName), f.push(...a.elements), a.usedComponents)
        for (const r of a.usedComponents) {
          const c = n(r);
          c && f.push(...t(c, l));
        }
      return f;
    }, o = [], s = /* @__PURE__ */ new Set();
    for (const [a, l] of Object.entries(v.value.components)) {
      const f = a.replace(/^pages/, "").replace(/\.vue$/, "").replace(/\/index$/, "").replace(/\[.*?\]/g, "[^/]+");
      let r = !1;
      if ((e === "/" && a.includes("index") || a.includes("pages/") && e.match(new RegExp(`^${f}$`))) && (r = !0), r) {
        const c = t(l);
        o.push(...c), s.add(l.componentName), l.usedComponents && l.usedComponents.forEach((p) => s.add(p));
      }
    }
    for (const [a, l] of Object.entries(v.value.components))
      a.includes("components/") && !s.has(l.componentName) && o.push(...l.elements);
    for (const a of o) {
      if (E.value.has(a.selector))
        continue;
      let l = !1, f = a.selector;
      try {
        document.querySelector(a.selector) && (l = !0);
      } catch {
      }
      if (!l && a.type === "static" && a.text) {
        const r = a.text.replace(/\[コメント\]\s*/, ""), c = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT,
          null
        );
        for (; c.nextNode(); ) {
          const p = c.currentNode;
          if ((i = p.textContent) != null && i.includes(r)) {
            const y = p.parentElement;
            if (y) {
              l = !0, f = P(y);
              break;
            }
          }
        }
      }
      if (!l && a.selector.includes(".")) {
        const r = a.selector.match(/^(\w+)\.(.+)$/);
        if (r) {
          const [, c, p] = r;
          try {
            const y = document.querySelector(a.selector);
            y && (l = !0, f = P(y));
          } catch {
          }
        }
      }
      if (!l && a.type === "data" && a.binding) {
        const r = `[data-bind="${a.binding}"]`;
        try {
          const c = document.querySelector(r);
          c && (l = !0, f = P(c));
        } catch {
        }
      }
      C.value.push({
        selector: f,
        element: a,
        matched: l
      });
    }
    return console.log(`[DevInspector] Applied analysis: ${C.value.filter((a) => a.matched).length}/${C.value.length} elements matched`), C.value.filter((a) => a.matched).length;
  }
  function Ee() {
    C.value = [];
  }
  function Ne(e) {
    C.value = C.value.filter((n) => n.selector !== e), E.value.add(e), Ie();
  }
  function Te() {
    try {
      const e = localStorage.getItem(J);
      e && (E.value = new Set(JSON.parse(e)));
    } catch {
    }
  }
  function Ie() {
    try {
      localStorage.setItem(
        J,
        JSON.stringify([...E.value])
      );
    } catch {
    }
  }
  function Le() {
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
    const n = ee(), t = new Blob([n], { type: "application/json" }), o = URL.createObjectURL(t), s = document.createElement("a");
    s.href = o, s.download = e, document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL(o);
  }
  function te() {
    if (!v.value) return [];
    const e = [], n = /* @__PURE__ */ new Set();
    for (const t of Object.values(v.value.components))
      for (const o of t.elements)
        o.binding && !n.has(o.binding) && (n.add(o.binding), e.push({
          binding: o.binding,
          db: o.db,
          api: o.api,
          component: t.componentName
        }));
    return e.sort((t, o) => t.db && !o.db ? -1 : !t.db && o.db ? 1 : t.binding.localeCompare(o.binding));
  }
  function $e(e) {
    const n = te();
    if (!e) return n;
    const t = e.toLowerCase();
    return n.filter(
      (o) => {
        var s, i;
        return o.binding.toLowerCase().includes(t) || ((s = o.db) == null ? void 0 : s.table.toLowerCase().includes(t)) || ((i = o.db) == null ? void 0 : i.column.toLowerCase().includes(t)) || o.component.toLowerCase().includes(t);
      }
    );
  }
  function Oe(e) {
    L.value = e;
  }
  function xe() {
    L.value = null;
  }
  function De() {
    return JSON.stringify(d.value, null, 2);
  }
  function ne() {
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
  function Re(e = "dev-annotations.json") {
    const n = ne(), t = new Blob([n], { type: "application/json" }), o = URL.createObjectURL(t), s = document.createElement("a");
    s.href = o, s.download = e, document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL(o);
  }
  function je(e) {
    try {
      const n = JSON.parse(e), t = n.annotations || n;
      d.value = { ...d.value, ...t };
    } catch (n) {
      throw console.error("[DevInspector] Failed to import configs:", n), new Error("Invalid JSON format");
    }
  }
  function ke() {
    d.value = {};
  }
  return {
    // State
    isEnabled: I,
    isAvailable: k,
    isEditMode: A,
    isPickMode: O,
    isInitializing: F,
    hoveredSelector: z,
    currentScreenSpec: j,
    isPanelOpen: x,
    elementConfigs: d,
    editingElementId: L,
    // Actions
    init: se,
    toggle: re,
    enable: q,
    disable: ue,
    toggleEditMode: de,
    togglePickMode: fe,
    setHoveredSelector: pe,
    generateSelector: P,
    getConfiguredSelectors: ge,
    setScreenSpec: me,
    clearScreenSpec: ve,
    togglePanel: he,
    openPanel: ye,
    closePanel: be,
    getElementConfig: Se,
    setElementConfig: Z,
    deleteElementConfig: Ce,
    startEditing: Oe,
    stopEditing: xe,
    exportConfigs: De,
    exportAsFile: ne,
    downloadAnnotations: Re,
    importConfigs: je,
    clearAllConfigs: ke,
    detectSourceBinding: K,
    autoDetectElementInfo: G,
    // Scan
    isScanning: D,
    scanProgress: R,
    scanResults: _,
    scanCurrentPage: V,
    scanAllPages: Ae,
    allPagesRoutes: Y,
    currentScanPage: M,
    clearScanResults: we,
    // Analysis data
    analysisData: v,
    loadAnalysisData: X,
    getAnalyzedElement: ie,
    getAnalyzedElementsForPage: le,
    analysisResults: C,
    applyAnalysisToPage: Q,
    clearAnalysisResults: Ee,
    removeAnalysisResult: Ne,
    clearHiddenSelectors: Le,
    hiddenAnalysisSelectors: E,
    analysisFilter: ae,
    exportChangesForCli: ee,
    downloadChanges: Pe,
    getAvailableBindings: te,
    searchBindings: $e
  };
});
function We() {
  return ze();
}
export {
  We as a,
  ze as u
};
