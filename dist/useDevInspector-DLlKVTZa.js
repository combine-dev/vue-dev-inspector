import { ref as m, computed as ae, watch as Be, nextTick as B } from "vue";
import { defineStore as Fe } from "pinia";
const ze = {}, Je = "devInspector:elementConfigs", Me = Fe("devInspector", () => {
  const P = m({}), L = m(!1), w = m(!1), O = m(!1), F = m(!1), R = m(null), x = m(!1), d = m({}), I = m(null), z = m(null), W = ae(() => P.value.storageKey || Je), g = m(null), se = m("all"), E = m(/* @__PURE__ */ new Set()), J = "devInspector:hiddenAnalysisSelectors", k = ae(() => P.value.enabledInProduction ? !0 : typeof import.meta < "u" && ze ? !1 : process.env.NODE_ENV === "development"), H = m(!1);
  function le(e = {}) {
    P.value = e, re(), Le(), e.analysisData && (g.value = e.analysisData);
    const n = e.analysisDataUrl ?? "/dev-inspector-analysis.json";
    e.autoLoadAnalysis !== !1 && k.value && X(n);
  }
  async function X(e) {
    var n;
    try {
      const t = await fetch(e);
      if (t.ok)
        return g.value = await t.json(), console.log("[DevInspector] Analysis data loaded:", Object.keys(((n = g.value) == null ? void 0 : n.components) || {}).length, "components"), !0;
    } catch {
      console.debug("[DevInspector] Analysis data not found at", e);
    }
    return !1;
  }
  function ie(e) {
    if (!g.value) return null;
    for (const n of Object.values(g.value.components)) {
      const t = n.elements.find((o) => o.selector === e);
      if (t) return t;
    }
    return null;
  }
  function ce(e) {
    if (!g.value) return [];
    const n = [];
    for (const [t, o] of Object.entries(g.value.components))
      (!e || t.includes(e)) && n.push(...o.elements);
    return n;
  }
  function re() {
    try {
      const e = P.value.initialAnnotations || {};
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
  Be(d, () => {
    B(() => {
      U();
    });
  }, { deep: !0 });
  async function ue() {
    k.value && (L.value ? (L.value = !1, w.value = !1, I.value = null) : await q());
  }
  async function q() {
    if (!k.value) return;
    if (g.value && !H.value && P.value.autoApplyAnalysis !== !1) {
      F.value = !0, L.value = !0;
      try {
        await new Promise((n) => setTimeout(n, 300)), Q(), H.value = !0;
      } finally {
        F.value = !1;
      }
    } else
      L.value = !0;
  }
  function de() {
    L.value = !1, w.value = !1, I.value = null;
  }
  function fe() {
    w.value = !w.value, w.value || (I.value = null), w.value && (O.value = !1);
  }
  function pe() {
    O.value = !O.value, O.value && (w.value = !1), z.value = null;
  }
  function me(e) {
    z.value = e;
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
      const s = Array.from(t.classList).filter((a) => !a.startsWith("hover:") && !a.startsWith("focus:")).slice(0, 2);
      s.length > 0 && (o += "." + s.join("."));
      const l = t.parentElement;
      if (l) {
        const a = Array.from(l.children).filter(
          (i) => i.tagName === t.tagName
        );
        if (a.length > 1) {
          const i = a.indexOf(t) + 1;
          o += `:nth-child(${i})`;
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
  function ve(e) {
    R.value = e;
  }
  function he() {
    R.value = null;
  }
  function ye() {
    x.value = !x.value;
  }
  function be() {
    x.value = !0;
  }
  function Se() {
    x.value = !1;
  }
  function Ce(e) {
    return d.value[e];
  }
  function Z(e, n) {
    var l;
    const t = (/* @__PURE__ */ new Date()).toISOString(), o = d.value[e], s = {
      ...o,
      ...n,
      id: e,
      componentPath: n.componentPath || ((l = R.value) == null ? void 0 : l.componentPath) || "",
      createdAt: (o == null ? void 0 : o.createdAt) || t,
      updatedAt: t
    };
    d.value = {
      ...d.value,
      [e]: s
    }, B(() => U());
  }
  function we(e) {
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
      const v = o.props || {}, u = o.attrs || {};
      if ("modelValue" in v || "model-value" in u)
        return {
          type: "v-model",
          source: "form binding detected",
          isStatic: !1
        };
    }
    if (t === "INPUT" || t === "SELECT" || t === "TEXTAREA") {
      const v = e.type || "text", u = e.placeholder || "";
      return {
        type: "v-model",
        source: `${t.toLowerCase()}[type=${v}]${u ? ` placeholder="${u}"` : ""}`,
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
      const u = e.closest(v);
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
      const v = e.parentElement, h = Array.from(v.children).filter((S) => S.tagName === e.tagName);
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
    for (const v of f)
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
    ].some((v) => v.test(n)), A = t === "BUTTON" || e.closest("button") !== null || e.getAttribute("role") === "button";
    return p || b || A && n.length < 20 ? {
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
    var y, b, A, N, v;
    const t = {}, o = ((y = e.textContent) == null ? void 0 : y.trim()) || "", s = e.getAttribute("data-di-binding");
    e.getAttribute("data-di-db"), e.getAttribute("data-di-component"), e.getAttribute("data-di-db-comment");
    let l = e;
    if (!s) {
      const u = e.closest("[data-di-binding]");
      u && (l = u);
    }
    const a = l.getAttribute("data-di-binding"), i = l.getAttribute("data-di-db"), f = l.getAttribute("data-di-component"), r = l.getAttribute("data-di-db-type"), c = l.getAttribute("data-di-db-comment");
    if (a || i) {
      if (t.sourceBinding = {
        type: "api",
        source: a || void 0,
        isStatic: !1
      }, i) {
        const [u, h] = i.split(".");
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
        text: `【データバインディング】${a}${i ? ` → ${i}` : ""}`
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
          const h = e.placeholder || "", S = ((A = (b = e.closest("label")) == null ? void 0 : b.textContent) == null ? void 0 : A.trim()) || e.getAttribute("aria-label") || ((v = (N = document.querySelector(`label[for="${e.id}"]`)) == null ? void 0 : N.textContent) == null ? void 0 : v.trim()) || "";
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
  const D = m(!1), j = m(0), _ = m([]);
  async function V(e = {}) {
    D.value = !0, j.value = 0, _.value = [];
    const { rescan: n = !1 } = e;
    if (n) {
      const t = typeof window < "u" ? window.location.pathname : "/", o = Object.keys(d.value).filter((s) => {
        const l = d.value[s];
        return !l.componentPath || l.componentPath.includes(t);
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
        const y = $(c);
        if (d.value[y]) return;
        const b = c.tagName.toUpperCase(), A = ((u = c.textContent) == null ? void 0 : u.trim()) || "";
        if (b === "INPUT" || b === "SELECT" || b === "TEXTAREA") {
          s.push(c);
          return;
        }
        if (A.length > 300 || A.length === 0 || b === "DIV" && (Array.from(c.childNodes).filter((S) => S.nodeType === Node.TEXT_NODE).map((S) => {
          var T;
          return ((T = S.textContent) == null ? void 0 : T.trim()) || "";
        }).join("").trim().length === 0 || c.children.length > 3))
          return;
        const N = Array.from(c.childNodes).some((h) => {
          var S;
          return h.nodeType === Node.TEXT_NODE && (((S = h.textContent) == null ? void 0 : S.trim()) || "").length > 0;
        }), v = !Array.from(c.children).some((h) => ["DIV", "P", "UL", "OL", "TABLE", "SECTION", "ARTICLE"].includes(h.tagName));
        (N || c.children.length === 0 && A.length > 0 || v) && s.push(c);
      });
      const l = s.length;
      let a = 0, i = 0;
      const f = 20;
      for (let r = 0; r < s.length; r += f) {
        const c = s.slice(r, r + f);
        for (const p of c) {
          const y = $(p), b = G(p, y);
          b.sourceBinding && (_.value.push({ selector: y, element: p, detected: b }), Z(y, b), i++), a++, j.value = Math.round(a / l * 100);
        }
        await new Promise((p) => setTimeout(p, 10));
      }
      return i;
    } finally {
      D.value = !1, j.value = 100;
    }
  }
  const Y = m([]), M = m("");
  async function Ae(e) {
    var t;
    if (!e)
      return console.warn("[DevInspector] Router not provided for all pages scan"), [];
    D.value = !0;
    const n = [];
    try {
      const o = e.getRoutes(), s = [];
      for (const l of o)
        l.path.includes(":") && !l.path.includes("?") || l.redirect || l.path !== "/:pathMatch(.*)*" && ((t = l.meta) != null && t.devInspectorSkip || s.push(l.path));
      Y.value = s;
      for (const l of s) {
        M.value = l;
        try {
          await e.push(l), await new Promise((i) => setTimeout(i, 500));
          const a = await V();
          n.push({ page: l, count: a });
        } catch (a) {
          console.warn(`[DevInspector] Failed to scan page ${l}:`, a), n.push({ page: l, count: 0 });
        }
      }
      return n;
    } finally {
      D.value = !1, M.value = "";
    }
  }
  function Ee() {
    _.value = [], j.value = 0;
  }
  const C = m([]);
  async function Q() {
    var l;
    if (!g.value)
      return console.warn("[DevInspector] No analysis data loaded. Call loadAnalysisData first."), 0;
    C.value = [];
    const e = typeof window < "u" ? window.location.pathname : "/", n = (a) => {
      if (!g.value) return null;
      for (const [i, f] of Object.entries(g.value.components))
        if (f.componentName === a || f.componentName.toLowerCase() === a.toLowerCase() || i.toLowerCase().includes(`/${a.toLowerCase()}.vue`))
          return f;
      return null;
    }, t = (a, i = /* @__PURE__ */ new Set()) => {
      const f = [];
      if (i.has(a.componentName)) return f;
      if (i.add(a.componentName), f.push(...a.elements), a.usedComponents)
        for (const r of a.usedComponents) {
          const c = n(r);
          c && f.push(...t(c, i));
        }
      return f;
    }, o = [], s = /* @__PURE__ */ new Set();
    for (const [a, i] of Object.entries(g.value.components)) {
      const f = a.replace(/^pages/, "").replace(/\.vue$/, "").replace(/\/index$/, "").replace(/\[.*?\]/g, "[^/]+");
      let r = !1;
      if ((e === "/" && a.includes("index") || a.includes("pages/") && e.match(new RegExp(`^${f}$`))) && (r = !0), r) {
        const c = t(i);
        o.push(...c), s.add(i.componentName), i.usedComponents && i.usedComponents.forEach((p) => s.add(p));
      }
    }
    for (const [a, i] of Object.entries(g.value.components))
      a.includes("components/") && !s.has(i.componentName) && o.push(...i.elements);
    for (const a of o) {
      if (E.value.has(a.selector))
        continue;
      let i = !1, f = a.selector;
      try {
        document.querySelector(a.selector) && (i = !0);
      } catch {
      }
      if (!i && a.type === "static" && a.text) {
        const r = a.text.replace(/\[コメント\]\s*/, ""), c = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT,
          null
        );
        for (; c.nextNode(); ) {
          const p = c.currentNode;
          if ((l = p.textContent) != null && l.includes(r)) {
            const y = p.parentElement;
            if (y) {
              i = !0, f = $(y);
              break;
            }
          }
        }
      }
      if (!i && a.selector.includes(".")) {
        const r = a.selector.match(/^(\w+)\.(.+)$/);
        if (r) {
          const [, c, p] = r;
          try {
            const y = document.querySelector(a.selector);
            y && (i = !0, f = $(y));
          } catch {
          }
        }
      }
      if (!i && a.type === "data" && a.binding) {
        const r = `[data-bind="${a.binding}"]`;
        try {
          const c = document.querySelector(r);
          c && (i = !0, f = $(c));
        } catch {
        }
      }
      C.value.push({
        selector: f,
        element: a,
        matched: i
      });
    }
    return console.log(`[DevInspector] Applied analysis: ${C.value.filter((a) => a.matched).length}/${C.value.length} elements matched`), C.value.filter((a) => a.matched).length;
  }
  function Ne() {
    C.value = [];
  }
  function Te(e) {
    C.value = C.value.filter((n) => n.selector !== e), E.value.add(e), Ie();
  }
  function Le() {
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
  function $e() {
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
    if (!g.value) return [];
    const e = [], n = /* @__PURE__ */ new Set();
    for (const t of Object.values(g.value.components))
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
  function ne() {
    var n, t;
    if (!((t = (n = g.value) == null ? void 0 : n.dbSchema) != null && t.tables)) return [];
    const e = [];
    for (const [o, s] of Object.entries(g.value.dbSchema.tables))
      for (const [l, a] of Object.entries(s.columns))
        e.push({
          table: o,
          column: l,
          type: a.type,
          comment: a.comment,
          fullName: `${o}.${l}`
        });
    return e.sort((o, s) => o.table !== s.table ? o.table.localeCompare(s.table) : o.column.localeCompare(s.column));
  }
  function xe(e) {
    const n = ne();
    if (!e) return n;
    const t = e.toLowerCase();
    return n.filter(
      (o) => {
        var s;
        return o.table.toLowerCase().includes(t) || o.column.toLowerCase().includes(t) || o.fullName.toLowerCase().includes(t) || ((s = o.comment) == null ? void 0 : s.toLowerCase().includes(t));
      }
    );
  }
  function De(e) {
    I.value = e;
  }
  function je() {
    I.value = null;
  }
  function Re() {
    return JSON.stringify(d.value, null, 2);
  }
  function oe() {
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
  function ke(e = "dev-annotations.json") {
    const n = oe(), t = new Blob([n], { type: "application/json" }), o = URL.createObjectURL(t), s = document.createElement("a");
    s.href = o, s.download = e, document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL(o);
  }
  function Ue(e) {
    try {
      const n = JSON.parse(e), t = n.annotations || n;
      d.value = { ...d.value, ...t };
    } catch (n) {
      throw console.error("[DevInspector] Failed to import configs:", n), new Error("Invalid JSON format");
    }
  }
  function _e() {
    d.value = {};
  }
  return {
    // State
    isEnabled: L,
    isAvailable: k,
    isEditMode: w,
    isPickMode: O,
    isInitializing: F,
    hoveredSelector: z,
    currentScreenSpec: R,
    isPanelOpen: x,
    elementConfigs: d,
    editingElementId: I,
    // Actions
    init: le,
    toggle: ue,
    enable: q,
    disable: de,
    toggleEditMode: fe,
    togglePickMode: pe,
    setHoveredSelector: me,
    generateSelector: $,
    getConfiguredSelectors: ge,
    setScreenSpec: ve,
    clearScreenSpec: he,
    togglePanel: ye,
    openPanel: be,
    closePanel: Se,
    getElementConfig: Ce,
    setElementConfig: Z,
    deleteElementConfig: we,
    startEditing: De,
    stopEditing: je,
    exportConfigs: Re,
    exportAsFile: oe,
    downloadAnnotations: ke,
    importConfigs: Ue,
    clearAllConfigs: _e,
    detectSourceBinding: K,
    autoDetectElementInfo: G,
    // Scan
    isScanning: D,
    scanProgress: j,
    scanResults: _,
    scanCurrentPage: V,
    scanAllPages: Ae,
    allPagesRoutes: Y,
    currentScanPage: M,
    clearScanResults: Ee,
    // Analysis data
    analysisData: g,
    loadAnalysisData: X,
    getAnalyzedElement: ie,
    getAnalyzedElementsForPage: ce,
    analysisResults: C,
    applyAnalysisToPage: Q,
    clearAnalysisResults: Ne,
    removeAnalysisResult: Te,
    clearHiddenSelectors: $e,
    hiddenAnalysisSelectors: E,
    analysisFilter: se,
    exportChangesForCli: ee,
    downloadChanges: Pe,
    getAvailableBindings: te,
    searchBindings: Oe,
    getSchemaColumns: ne,
    searchSchemaColumns: xe
  };
});
function Xe() {
  return Me();
}
export {
  Xe as a,
  Me as u
};
