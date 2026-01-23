import { ref as u, computed as W, watch as mt, nextTick as _ } from "vue";
import { defineStore as yt } from "pinia";
const St = {}, Et = "devInspector:elementConfigs", bt = yt("devInspector", () => {
  const $ = u({}), C = u(!1), y = u(!1), A = u(!1), x = u(null), w = u(!1), i = u({}), T = u(null), R = u(null), B = W(() => $.value.storageKey || Et), k = W(() => $.value.enabledInProduction ? !0 : typeof import.meta < "u" && St ? !1 : process.env.NODE_ENV === "development");
  function G(t = {}) {
    $.value = t, K();
  }
  function K() {
    try {
      const t = $.value.initialAnnotations || {};
      if (typeof window < "u") {
        const n = localStorage.getItem(B.value), e = n ? JSON.parse(n) : {};
        i.value = { ...t, ...e };
      } else
        i.value = t;
    } catch (t) {
      console.error("[DevInspector] Failed to load configs:", t);
    }
  }
  function L() {
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
    _(() => {
      L();
    });
  }, { deep: !0 });
  function V() {
    k.value && (C.value = !C.value, C.value || (y.value = !1, T.value = null));
  }
  function q() {
    k.value && (C.value = !0);
  }
  function H() {
    C.value = !1, y.value = !1, T.value = null;
  }
  function Y() {
    y.value = !y.value, y.value || (T.value = null), y.value && (A.value = !1);
  }
  function Q() {
    A.value = !A.value, A.value && (y.value = !1), R.value = null;
  }
  function tt(t) {
    R.value = t;
  }
  function U(t) {
    if (t.id)
      return `#${t.id}`;
    if (t.dataset.devId)
      return `[data-dev-id="${t.dataset.devId}"]`;
    const n = [];
    let e = t;
    for (; e && e !== document.body; ) {
      let a = e.tagName.toLowerCase();
      if (e.id) {
        a = `#${e.id}`, n.unshift(a);
        break;
      }
      const o = Array.from(e.classList).filter((c) => !c.startsWith("hover:") && !c.startsWith("focus:")).slice(0, 2);
      o.length > 0 && (a += "." + o.join("."));
      const s = e.parentElement;
      if (s) {
        const c = Array.from(s.children).filter(
          (p) => p.tagName === e.tagName
        );
        if (c.length > 1) {
          const p = c.indexOf(e) + 1;
          a += `:nth-child(${p})`;
        }
      }
      n.unshift(a), e = e.parentElement;
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
    x.value = t;
  }
  function ot() {
    x.value = null;
  }
  function at() {
    w.value = !w.value;
  }
  function st() {
    w.value = !0;
  }
  function it() {
    w.value = !1;
  }
  function rt(t) {
    return i.value[t];
  }
  function F(t, n) {
    var s;
    const e = (/* @__PURE__ */ new Date()).toISOString(), a = i.value[t], o = {
      ...a,
      ...n,
      id: t,
      componentPath: n.componentPath || ((s = x.value) == null ? void 0 : s.componentPath) || "",
      createdAt: (a == null ? void 0 : a.createdAt) || e,
      updatedAt: e
    };
    i.value = {
      ...i.value,
      [t]: o
    }, _(() => L());
  }
  function ct(t) {
    const { [t]: n, ...e } = i.value;
    i.value = e, _(() => L());
  }
  function z(t) {
    var D;
    const n = ((D = t.textContent) == null ? void 0 : D.trim()) || "", e = t.tagName.toUpperCase();
    if (!n && e !== "INPUT" && e !== "SELECT" && e !== "TEXTAREA")
      return null;
    const a = t.__vueParentComponent;
    if (a) {
      const l = a.props || {}, d = a.attrs || {};
      if ("modelValue" in l || "model-value" in d)
        return {
          type: "v-model",
          source: "form binding detected",
          isStatic: !1
        };
    }
    if (e === "INPUT" || e === "SELECT" || e === "TEXTAREA") {
      const l = t.type || "text", d = t.placeholder || "";
      return {
        type: "v-model",
        source: `${e.toLowerCase()}[type=${l}]${d ? ` placeholder="${d}"` : ""}`,
        isStatic: !1
      };
    }
    const o = t.dataset.source || t.dataset.field || t.dataset.bind;
    if (o)
      return {
        type: "prop",
        source: o,
        isStatic: !1
      };
    if (t.closest("tbody") || t.closest('[role="rowgroup"]'))
      return {
        type: "api",
        source: "table data",
        isStatic: !1
      };
    const s = t.closest('ul, ol, [role="list"]');
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
    for (const l of c) {
      const d = t.closest(l);
      if (d) {
        const g = d.parentElement;
        if (g && Array.from(g.children).filter(
          (b) => b !== d && b.className === d.className
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
      const l = t.parentElement, g = Array.from(l.children).filter((m) => m.tagName === t.tagName);
      if (g.length >= 2 && g.filter(
        (b) => b.children.length === t.children.length
      ).length >= 2)
        return {
          type: "api",
          source: "repeated element",
          isStatic: !1
        };
    }
    const E = [
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
    for (const l of E)
      if (l.test(n))
        return {
          type: "api",
          source: "dynamic data pattern",
          isStatic: !1
        };
    const v = [
      /^[\u4e00-\u9faf]{2,4}$/,
      // Japanese Kanji names (2-4 chars)
      /^[\u3040-\u309f\u30a0-\u30ff]{2,6}$/,
      // Hiragana/Katakana names
      /^[A-Z][a-z]+ [A-Z][a-z]+$/
      // English names like "John Smith"
    ];
    for (const l of v)
      if (l.test(n))
        return {
          type: "api",
          source: "name pattern",
          isStatic: !1
        };
    const f = ["LABEL", "TH", "LEGEND", "FIGCAPTION"].includes(e), h = [
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
    ].some((l) => l.test(n)), I = e === "BUTTON" || t.closest("button") !== null || t.getAttribute("role") === "button";
    return f || h || I && n.length < 20 ? {
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
    var o, s, c, p, E;
    const e = z(t), a = {};
    if (e) {
      a.sourceBinding = e;
      const v = ((o = t.textContent) == null ? void 0 : o.trim()) || "";
      if (e.isStatic)
        a.note = {
          type: "info",
          text: `【固定文言】${v}`
        };
      else if (e.type === "v-model") {
        const r = t.tagName.toUpperCase();
        if (r === "INPUT" || r === "SELECT" || r === "TEXTAREA") {
          const f = t.placeholder || "", S = ((c = (s = t.closest("label")) == null ? void 0 : s.textContent) == null ? void 0 : c.trim()) || t.getAttribute("aria-label") || ((E = (p = document.querySelector(`label[for="${t.id}"]`)) == null ? void 0 : p.textContent) == null ? void 0 : E.trim()) || "";
          a.note = {
            type: "todo",
            text: `【フォーム要素】${S || f || r.toLowerCase()}`
          };
        }
      } else e.type === "api" && (a.note = {
        type: "question",
        text: `【動的データ】${v.substring(0, 100)}${v.length > 100 ? "..." : ""}`
      });
    }
    return a;
  }
  const N = u(!1), P = u(0), O = u([]);
  async function M(t = {}) {
    N.value = !0, P.value = 0, O.value = [];
    const { rescan: n = !1 } = t;
    if (n) {
      const e = typeof window < "u" ? window.location.pathname : "/", a = Object.keys(i.value).filter((o) => {
        const s = i.value[o];
        return !s.componentPath || s.componentPath.includes(e);
      });
      for (const o of a)
        delete i.value[o];
      _(() => L());
    }
    try {
      const e = [
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
      ].join(","), a = document.querySelectorAll(e), o = [];
      a.forEach((v) => {
        var d;
        const r = v;
        if (r.closest("[data-dev-inspector]")) return;
        const f = window.getComputedStyle(r);
        if (f.display === "none" || f.visibility === "hidden" || f.opacity === "0") return;
        const S = U(r);
        if (i.value[S]) return;
        const h = r.tagName.toUpperCase(), I = ((d = r.textContent) == null ? void 0 : d.trim()) || "";
        if (h === "INPUT" || h === "SELECT" || h === "TEXTAREA") {
          o.push(r);
          return;
        }
        if (I.length > 300 || I.length === 0 || h === "DIV" && (Array.from(r.childNodes).filter((m) => m.nodeType === Node.TEXT_NODE).map((m) => {
          var b;
          return ((b = m.textContent) == null ? void 0 : b.trim()) || "";
        }).join("").trim().length === 0 || r.children.length > 3))
          return;
        const D = Array.from(r.childNodes).some((g) => {
          var m;
          return g.nodeType === Node.TEXT_NODE && (((m = g.textContent) == null ? void 0 : m.trim()) || "").length > 0;
        }), l = !Array.from(r.children).some((g) => ["DIV", "P", "UL", "OL", "TABLE", "SECTION", "ARTICLE"].includes(g.tagName));
        (D || r.children.length === 0 && I.length > 0 || l) && o.push(r);
      });
      const s = o.length;
      let c = 0, p = 0;
      const E = 20;
      for (let v = 0; v < o.length; v += E) {
        const r = o.slice(v, v + E);
        for (const f of r) {
          const S = U(f), h = J(f, S);
          h.sourceBinding && (O.value.push({ selector: S, element: f, detected: h }), F(S, h), p++), c++, P.value = Math.round(c / s * 100);
        }
        await new Promise((f) => setTimeout(f, 10));
      }
      return p;
    } finally {
      N.value = !1, P.value = 100;
    }
  }
  const X = u([]), j = u("");
  async function lt(t) {
    var e;
    if (!t)
      return console.warn("[DevInspector] Router not provided for all pages scan"), [];
    N.value = !0;
    const n = [];
    try {
      const a = t.getRoutes(), o = [];
      for (const s of a)
        s.path.includes(":") && !s.path.includes("?") || s.redirect || s.path !== "/:pathMatch(.*)*" && ((e = s.meta) != null && e.devInspectorSkip || o.push(s.path));
      X.value = o;
      for (const s of o) {
        j.value = s;
        try {
          await t.push(s), await new Promise((p) => setTimeout(p, 500));
          const c = await M();
          n.push({ page: s, count: c });
        } catch (c) {
          console.warn(`[DevInspector] Failed to scan page ${s}:`, c), n.push({ page: s, count: 0 });
        }
      }
      return n;
    } finally {
      N.value = !1, j.value = "";
    }
  }
  function ut() {
    O.value = [], P.value = 0;
  }
  function ft(t) {
    T.value = t;
  }
  function dt() {
    T.value = null;
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
  function vt(t = "dev-annotations.json") {
    const n = Z(), e = new Blob([n], { type: "application/json" }), a = URL.createObjectURL(e), o = document.createElement("a");
    o.href = a, o.download = t, document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(a);
  }
  function gt(t) {
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
    isEnabled: C,
    isAvailable: k,
    isEditMode: y,
    isPickMode: A,
    hoveredSelector: R,
    currentScreenSpec: x,
    isPanelOpen: w,
    elementConfigs: i,
    editingElementId: T,
    // Actions
    init: G,
    toggle: V,
    enable: q,
    disable: H,
    toggleEditMode: Y,
    togglePickMode: Q,
    setHoveredSelector: tt,
    generateSelector: U,
    getConfiguredSelectors: et,
    setScreenSpec: nt,
    clearScreenSpec: ot,
    togglePanel: at,
    openPanel: st,
    closePanel: it,
    getElementConfig: rt,
    setElementConfig: F,
    deleteElementConfig: ct,
    startEditing: ft,
    stopEditing: dt,
    exportConfigs: pt,
    exportAsFile: Z,
    downloadAnnotations: vt,
    importConfigs: gt,
    clearAllConfigs: ht,
    detectSourceBinding: z,
    autoDetectElementInfo: J,
    // Scan
    isScanning: N,
    scanProgress: P,
    scanResults: O,
    scanCurrentPage: M,
    scanAllPages: lt,
    allPagesRoutes: X,
    currentScanPage: j,
    clearScanResults: ut
  };
});
function At() {
  return bt();
}
export {
  At as a,
  bt as u
};
