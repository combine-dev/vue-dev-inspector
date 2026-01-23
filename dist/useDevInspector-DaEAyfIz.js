import { ref as p, computed as W, watch as mt, nextTick as j } from "vue";
import { defineStore as yt } from "pinia";
const St = {}, Et = "devInspector:elementConfigs", Ct = yt("devInspector", () => {
  const w = p({}), y = p(!1), h = p(!1), C = p(!1), I = p(null), b = p(!1), i = p({}), S = p(null), x = p(null), B = W(() => w.value.storageKey || Et), L = W(() => w.value.enabledInProduction ? !0 : typeof import.meta < "u" && St ? !1 : process.env.NODE_ENV === "development");
  function G(t = {}) {
    w.value = t, K();
  }
  function K() {
    try {
      const t = w.value.initialAnnotations || {};
      if (typeof window < "u") {
        const n = localStorage.getItem(B.value), e = n ? JSON.parse(n) : {};
        i.value = { ...t, ...e };
      } else
        i.value = t;
    } catch (t) {
      console.error("[DevInspector] Failed to load configs:", t);
    }
  }
  function O() {
    try {
      if (typeof window < "u") {
        const t = JSON.stringify(i.value);
        localStorage.setItem(B.value, t), console.log("[DevInspector] Saved configs:", Object.keys(i.value).length, "items");
      }
    } catch (t) {
      console.error("[DevInspector] Failed to save configs:", t);
    }
  }
  mt(i, () => {
    j(() => {
      O();
    });
  }, { deep: !0 });
  function V() {
    L.value && (y.value = !y.value, y.value || (h.value = !1, S.value = null));
  }
  function q() {
    L.value && (y.value = !0);
  }
  function H() {
    y.value = !1, h.value = !1, S.value = null;
  }
  function Y() {
    h.value = !h.value, h.value || (S.value = null), h.value && (C.value = !1);
  }
  function Q() {
    C.value = !C.value, C.value && (h.value = !1), x.value = null;
  }
  function tt(t) {
    x.value = t;
  }
  function D(t) {
    if (t.id)
      return `#${t.id}`;
    if (t.dataset.devId)
      return `[data-dev-id="${t.dataset.devId}"]`;
    const n = [];
    let e = t;
    for (; e && e !== document.body; ) {
      let o = e.tagName.toLowerCase();
      if (e.id) {
        o = `#${e.id}`, n.unshift(o);
        break;
      }
      const s = Array.from(e.classList).filter((c) => !c.startsWith("hover:") && !c.startsWith("focus:")).slice(0, 2);
      s.length > 0 && (o += "." + s.join("."));
      const a = e.parentElement;
      if (a) {
        const c = Array.from(a.children).filter(
          (f) => f.tagName === e.tagName
        );
        if (c.length > 1) {
          const f = c.indexOf(e) + 1;
          o += `:nth-child(${f})`;
        }
      }
      n.unshift(o), e = e.parentElement;
    }
    return n.join(" > ");
  }
  function et() {
    const t = typeof window < "u" ? window.location.pathname : "/";
    return Object.keys(i.value).filter((n) => {
      const e = i.value[n];
      return e ? (n.includes(">") || n.startsWith("#") || n.startsWith("[") || n.startsWith(".")) && (!e.componentPath || e.componentPath.includes(t) || t === "/") : !1;
    });
  }
  function nt(t) {
    I.value = t;
  }
  function ot() {
    I.value = null;
  }
  function at() {
    b.value = !b.value;
  }
  function st() {
    b.value = !0;
  }
  function it() {
    b.value = !1;
  }
  function rt(t) {
    return i.value[t];
  }
  function F(t, n) {
    var a;
    const e = (/* @__PURE__ */ new Date()).toISOString(), o = i.value[t], s = {
      ...o,
      ...n,
      id: t,
      componentPath: n.componentPath || ((a = I.value) == null ? void 0 : a.componentPath) || "",
      createdAt: (o == null ? void 0 : o.createdAt) || e,
      updatedAt: e
    };
    i.value = {
      ...i.value,
      [t]: s
    }, j(() => O());
  }
  function lt(t) {
    const { [t]: n, ...e } = i.value;
    i.value = e, j(() => O());
  }
  function z(t) {
    var N;
    const n = ((N = t.textContent) == null ? void 0 : N.trim()) || "", e = t.tagName.toUpperCase();
    if (!n && e !== "INPUT" && e !== "SELECT" && e !== "TEXTAREA")
      return null;
    const o = t.__vueParentComponent;
    if (o) {
      const l = o.props || {}, u = o.attrs || {};
      if ("modelValue" in l || "model-value" in u)
        return {
          type: "v-model",
          source: "form binding detected",
          isStatic: !1
        };
    }
    if (e === "INPUT" || e === "SELECT" || e === "TEXTAREA") {
      const l = t.type || "text", u = t.placeholder || "";
      return {
        type: "v-model",
        source: `${e.toLowerCase()}[type=${l}]${u ? ` placeholder="${u}"` : ""}`,
        isStatic: !1
      };
    }
    const s = t.dataset.source || t.dataset.field || t.dataset.bind;
    if (s)
      return {
        type: "prop",
        source: s,
        isStatic: !1
      };
    if (t.closest("tbody") || t.closest('[role="rowgroup"]'))
      return {
        type: "api",
        source: "table data",
        isStatic: !1
      };
    const a = t.closest('ul, ol, [role="list"]');
    if (a && a.children.length > 1)
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
    for (const l of c) {
      const u = t.closest(l);
      if (u) {
        const m = u.parentElement;
        if (m && Array.from(m.children).filter(
          ($) => $ !== u && $.className === u.className
        ).length > 0)
          return {
            type: "api",
            source: "repeated container",
            isStatic: !1
          };
      }
    }
    if (t.closest("[v-for]") !== null || t.closest("[data-v-for]") !== null)
      return {
        type: "api",
        source: "loop item",
        isStatic: !1
      };
    if (t.parentElement) {
      const l = t.parentElement, m = Array.from(l.children).filter((k) => k.tagName === t.tagName);
      if (m.length >= 2 && m.filter(
        ($) => $.children.length === t.children.length
      ).length >= 2)
        return {
          type: "api",
          source: "repeated element",
          isStatic: !1
        };
    }
    const r = [
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
    for (const l of r)
      if (l.test(n))
        return {
          type: "api",
          source: "dynamic data pattern",
          isStatic: !1
        };
    const d = [
      /^[\u4e00-\u9faf]{2,4}$/,
      // Japanese Kanji names (2-4 chars)
      /^[\u3040-\u309f\u30a0-\u30ff]{2,6}$/,
      // Hiragana/Katakana names
      /^[A-Z][a-z]+ [A-Z][a-z]+$/
      // English names like "John Smith"
    ];
    for (const l of d)
      if (l.test(n))
        return {
          type: "api",
          source: "name pattern",
          isStatic: !1
        };
    const g = ["LABEL", "TH", "LEGEND", "FIGCAPTION"].includes(e), R = [
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
    ].some((l) => l.test(n)), U = e === "BUTTON" || t.closest("button") !== null || t.getAttribute("role") === "button";
    return g || R || U && n.length < 20 ? {
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
  function J(t, n) {
    var s, a, c, f, r;
    const e = z(t), o = {};
    if (e) {
      o.sourceBinding = e;
      const d = ((s = t.textContent) == null ? void 0 : s.trim()) || "";
      if (e.isStatic)
        o.note = {
          type: "info",
          text: `【固定文言】${d}`
        };
      else if (e.type === "v-model") {
        const v = t.tagName.toUpperCase();
        if (v === "INPUT" || v === "SELECT" || v === "TEXTAREA") {
          const g = t.placeholder || "", E = ((c = (a = t.closest("label")) == null ? void 0 : a.textContent) == null ? void 0 : c.trim()) || t.getAttribute("aria-label") || ((r = (f = document.querySelector(`label[for="${t.id}"]`)) == null ? void 0 : f.textContent) == null ? void 0 : r.trim()) || "";
          o.note = {
            type: "todo",
            text: `【フォーム要素】${E || g || v.toLowerCase()}`
          };
        }
      } else e.type === "api" && (o.note = {
        type: "question",
        text: `【動的データ】${d.substring(0, 100)}${d.length > 100 ? "..." : ""}`
      });
    }
    return o;
  }
  const T = p(!1), A = p(0), P = p([]);
  async function M() {
    T.value = !0, A.value = 0, P.value = [];
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
      ].join(","), n = document.querySelectorAll(t), e = [];
      n.forEach((f) => {
        var N;
        const r = f;
        if (r.closest("[data-dev-inspector]")) return;
        const d = window.getComputedStyle(r);
        if (d.display === "none" || d.visibility === "hidden" || d.opacity === "0") return;
        const v = D(r);
        if (i.value[v]) return;
        const g = r.tagName.toUpperCase(), E = ((N = r.textContent) == null ? void 0 : N.trim()) || "";
        if (g === "INPUT" || g === "SELECT" || g === "TEXTAREA") {
          e.push(r);
          return;
        }
        if (E.length > 300 || E.length === 0 || g === "DIV" && (Array.from(r.childNodes).filter((u) => u.nodeType === Node.TEXT_NODE).map((u) => {
          var m;
          return ((m = u.textContent) == null ? void 0 : m.trim()) || "";
        }).join("").trim().length === 0 || r.children.length > 3))
          return;
        const R = Array.from(r.childNodes).some((l) => {
          var u;
          return l.nodeType === Node.TEXT_NODE && (((u = l.textContent) == null ? void 0 : u.trim()) || "").length > 0;
        }), U = !Array.from(r.children).some((l) => ["DIV", "P", "UL", "OL", "TABLE", "SECTION", "ARTICLE"].includes(l.tagName));
        (R || r.children.length === 0 && E.length > 0 || U) && e.push(r);
      });
      const o = e.length;
      let s = 0, a = 0;
      const c = 20;
      for (let f = 0; f < e.length; f += c) {
        const r = e.slice(f, f + c);
        for (const d of r) {
          const v = D(d), g = J(d, v);
          g.sourceBinding && (P.value.push({ selector: v, element: d, detected: g }), F(v, g), a++), s++, A.value = Math.round(s / o * 100);
        }
        await new Promise((d) => setTimeout(d, 10));
      }
      return a;
    } finally {
      T.value = !1, A.value = 100;
    }
  }
  const X = p([]), _ = p("");
  async function ct(t) {
    var e;
    if (!t)
      return console.warn("[DevInspector] Router not provided for all pages scan"), [];
    T.value = !0;
    const n = [];
    try {
      const o = t.getRoutes(), s = [];
      for (const a of o)
        a.path.includes(":") && !a.path.includes("?") || a.redirect || a.path !== "/:pathMatch(.*)*" && ((e = a.meta) != null && e.devInspectorSkip || s.push(a.path));
      X.value = s;
      for (const a of s) {
        _.value = a;
        try {
          await t.push(a), await new Promise((f) => setTimeout(f, 500));
          const c = await M();
          n.push({ page: a, count: c });
        } catch (c) {
          console.warn(`[DevInspector] Failed to scan page ${a}:`, c), n.push({ page: a, count: 0 });
        }
      }
      return n;
    } finally {
      T.value = !1, _.value = "";
    }
  }
  function ut() {
    P.value = [], A.value = 0;
  }
  function ft(t) {
    S.value = t;
  }
  function dt() {
    S.value = null;
  }
  function pt() {
    return JSON.stringify(i.value, null, 2);
  }
  function Z() {
    const t = {
      _meta: {
        version: "1.0.0",
        description: "Dev Inspector annotations",
        lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
      },
      annotations: i.value
    };
    return JSON.stringify(t, null, 2);
  }
  function gt(t = "dev-annotations.json") {
    const n = Z(), e = new Blob([n], { type: "application/json" }), o = URL.createObjectURL(e), s = document.createElement("a");
    s.href = o, s.download = t, document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL(o);
  }
  function vt(t) {
    try {
      const n = JSON.parse(t), e = n.annotations || n;
      i.value = { ...i.value, ...e };
    } catch (n) {
      throw console.error("[DevInspector] Failed to import configs:", n), new Error("Invalid JSON format");
    }
  }
  function ht() {
    i.value = {};
  }
  return {
    // State
    isEnabled: y,
    isAvailable: L,
    isEditMode: h,
    isPickMode: C,
    hoveredSelector: x,
    currentScreenSpec: I,
    isPanelOpen: b,
    elementConfigs: i,
    editingElementId: S,
    // Actions
    init: G,
    toggle: V,
    enable: q,
    disable: H,
    toggleEditMode: Y,
    togglePickMode: Q,
    setHoveredSelector: tt,
    generateSelector: D,
    getConfiguredSelectors: et,
    setScreenSpec: nt,
    clearScreenSpec: ot,
    togglePanel: at,
    openPanel: st,
    closePanel: it,
    getElementConfig: rt,
    setElementConfig: F,
    deleteElementConfig: lt,
    startEditing: ft,
    stopEditing: dt,
    exportConfigs: pt,
    exportAsFile: Z,
    downloadAnnotations: gt,
    importConfigs: vt,
    clearAllConfigs: ht,
    detectSourceBinding: z,
    autoDetectElementInfo: J,
    // Scan
    isScanning: T,
    scanProgress: A,
    scanResults: P,
    scanCurrentPage: M,
    scanAllPages: ct,
    allPagesRoutes: X,
    currentScanPage: _,
    clearScanResults: ut
  };
});
function At() {
  return Ct();
}
export {
  At as a,
  Ct as u
};
