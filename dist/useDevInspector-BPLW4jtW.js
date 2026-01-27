import { ref as g, computed as ae, watch as ze, nextTick as B } from "vue";
import { defineStore as Je } from "pinia";
const Me = {}, We = "devInspector:elementConfigs", He = Je("devInspector", () => {
  const P = g({}), L = g(!1), A = g(!1), O = g(!1), F = g(!1), R = g(null), x = g(!1), d = g({}), I = g(null), z = g(null), W = ae(() => P.value.storageKey || We), f = g(null), se = g("all"), E = g(/* @__PURE__ */ new Set()), J = "devInspector:hiddenAnalysisSelectors", k = ae(() => P.value.enabledInProduction ? !0 : typeof import.meta < "u" && Me ? !1 : process.env.NODE_ENV === "development"), H = g(!1);
  function ie(e = {}) {
    P.value = e, re(), Le(), e.analysisData && (f.value = e.analysisData);
    const n = e.analysisDataUrl ?? "/dev-inspector-analysis.json";
    e.autoLoadAnalysis !== !1 && k.value && X(n);
  }
  async function X(e) {
    var n;
    try {
      const t = await fetch(e);
      if (t.ok)
        return f.value = await t.json(), console.log("[DevInspector] Analysis data loaded:", Object.keys(((n = f.value) == null ? void 0 : n.components) || {}).length, "components"), !0;
    } catch {
      console.debug("[DevInspector] Analysis data not found at", e);
    }
    return !1;
  }
  function le(e) {
    if (!f.value) return null;
    for (const n of Object.values(f.value.components)) {
      const t = n.elements.find((o) => o.selector === e);
      if (t) return t;
    }
    return null;
  }
  function ce(e) {
    if (!f.value) return [];
    const n = [];
    for (const [t, o] of Object.entries(f.value.components))
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
  ze(d, () => {
    B(() => {
      U();
    });
  }, { deep: !0 });
  async function ue() {
    k.value && (L.value ? (L.value = !1, A.value = !1, I.value = null) : await q());
  }
  async function q() {
    if (!k.value) return;
    if (f.value && !H.value && P.value.autoApplyAnalysis !== !1) {
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
    L.value = !1, A.value = !1, I.value = null;
  }
  function fe() {
    A.value = !A.value, A.value || (I.value = null), A.value && (O.value = !1);
  }
  function pe() {
    O.value = !O.value, O.value && (A.value = !1), z.value = null;
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
    var i;
    const t = (/* @__PURE__ */ new Date()).toISOString(), o = d.value[e], s = {
      ...o,
      ...n,
      id: e,
      componentPath: n.componentPath || ((i = R.value) == null ? void 0 : i.componentPath) || "",
      createdAt: (o == null ? void 0 : o.createdAt) || t,
      updatedAt: t
    };
    d.value = {
      ...d.value,
      [e]: s
    }, B(() => U());
  }
  function Ae(e) {
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
    const p = [
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
    for (const v of p)
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
    const m = ["LABEL", "TH", "LEGEND", "FIGCAPTION"].includes(t), b = [
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
    ].some((v) => v.test(n)), w = t === "BUTTON" || e.closest("button") !== null || e.getAttribute("role") === "button";
    return m || b || w && n.length < 20 ? {
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
    var y, b, w, N, v;
    const t = {}, o = ((y = e.textContent) == null ? void 0 : y.trim()) || "", s = e.getAttribute("data-di-binding");
    e.getAttribute("data-di-db"), e.getAttribute("data-di-component"), e.getAttribute("data-di-db-comment");
    let i = e;
    if (!s) {
      const u = e.closest("[data-di-binding]");
      u && (i = u);
    }
    const a = i.getAttribute("data-di-binding"), l = i.getAttribute("data-di-db"), p = i.getAttribute("data-di-component"), r = i.getAttribute("data-di-db-type"), c = i.getAttribute("data-di-db-comment");
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
      return p && (t.devMeta = {
        usedComponents: [p]
      }), t.note = {
        type: "info",
        text: `【データバインディング】${a}${l ? ` → ${l}` : ""}`
      }, t;
    }
    const m = K(e);
    if (m)
      if (t.sourceBinding = m, m.isStatic)
        t.note = {
          type: "info",
          text: `【固定文言】${o}`
        };
      else if (m.type === "v-model") {
        const u = e.tagName.toUpperCase();
        if (u === "INPUT" || u === "SELECT" || u === "TEXTAREA") {
          const h = e.placeholder || "", S = ((w = (b = e.closest("label")) == null ? void 0 : b.textContent) == null ? void 0 : w.trim()) || e.getAttribute("aria-label") || ((v = (N = document.querySelector(`label[for="${e.id}"]`)) == null ? void 0 : N.textContent) == null ? void 0 : v.trim()) || "";
          t.note = {
            type: "todo",
            text: `【フォーム要素】${S || h || u.toLowerCase()}`
          };
        }
      } else m.type === "api" && (t.note = {
        type: "question",
        text: `【動的データ】${o.substring(0, 100)}${o.length > 100 ? "..." : ""}`
      });
    return t;
  }
  const D = g(!1), j = g(0), _ = g([]);
  async function V(e = {}) {
    D.value = !0, j.value = 0, _.value = [];
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
        const m = window.getComputedStyle(c);
        if (m.display === "none" || m.visibility === "hidden" || m.opacity === "0") return;
        const y = $(c);
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
        }), v = !Array.from(c.children).some((h) => ["DIV", "P", "UL", "OL", "TABLE", "SECTION", "ARTICLE"].includes(h.tagName));
        (N || c.children.length === 0 && w.length > 0 || v) && s.push(c);
      });
      const i = s.length;
      let a = 0, l = 0;
      const p = 20;
      for (let r = 0; r < s.length; r += p) {
        const c = s.slice(r, r + p);
        for (const m of c) {
          const y = $(m), b = G(m, y);
          b.sourceBinding && (_.value.push({ selector: y, element: m, detected: b }), Z(y, b), l++), a++, j.value = Math.round(a / i * 100);
        }
        await new Promise((m) => setTimeout(m, 10));
      }
      return l;
    } finally {
      D.value = !1, j.value = 100;
    }
  }
  const Y = g([]), M = g("");
  async function we(e) {
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
  function Ee() {
    _.value = [], j.value = 0;
  }
  const C = g([]);
  async function Q() {
    var i;
    if (!f.value)
      return console.warn("[DevInspector] No analysis data loaded. Call loadAnalysisData first."), 0;
    C.value = [];
    const e = typeof window < "u" ? window.location.pathname : "/", n = (a) => {
      if (!f.value) return null;
      for (const [l, p] of Object.entries(f.value.components))
        if (p.componentName === a || p.componentName.toLowerCase() === a.toLowerCase() || l.toLowerCase().includes(`/${a.toLowerCase()}.vue`))
          return p;
      return null;
    }, t = (a, l = /* @__PURE__ */ new Set()) => {
      const p = [];
      if (l.has(a.componentName)) return p;
      if (l.add(a.componentName), p.push(...a.elements), a.usedComponents)
        for (const r of a.usedComponents) {
          const c = n(r);
          c && p.push(...t(c, l));
        }
      return p;
    }, o = [], s = /* @__PURE__ */ new Set();
    for (const [a, l] of Object.entries(f.value.components)) {
      const p = a.replace(/^pages/, "").replace(/\.vue$/, "").replace(/\/index$/, "").replace(/\[.*?\]/g, "[^/]+");
      let r = !1;
      if ((e === "/" && a.includes("index") || a.includes("pages/") && e.match(new RegExp(`^${p}$`))) && (r = !0), r) {
        const c = t(l);
        o.push(...c), s.add(l.componentName), l.usedComponents && l.usedComponents.forEach((m) => s.add(m));
      }
    }
    for (const [a, l] of Object.entries(f.value.components))
      a.includes("components/") && !s.has(l.componentName) && o.push(...l.elements);
    for (const a of o) {
      if (E.value.has(a.selector))
        continue;
      let l = !1, p = a.selector;
      try {
        document.querySelector(a.selector) && (l = !0);
      } catch {
      }
      if (!l && a.text && !a.binding) {
        const r = a.text.replace(/\[コメント\]\s*/, ""), c = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT,
          null
        );
        for (; c.nextNode(); ) {
          const m = c.currentNode;
          if ((i = m.textContent) != null && i.includes(r)) {
            const y = m.parentElement;
            if (y) {
              l = !0, p = $(y);
              break;
            }
          }
        }
      }
      if (!l && a.selector.includes(".")) {
        const r = a.selector.match(/^(\w+)\.(.+)$/);
        if (r) {
          const [, c, m] = r;
          try {
            const y = document.querySelector(a.selector);
            y && (l = !0, p = $(y));
          } catch {
          }
        }
      }
      if (!l && a.binding) {
        const r = `[data-bind="${a.binding}"]`;
        try {
          const c = document.querySelector(r);
          c && (l = !0, p = $(c));
        } catch {
        }
      }
      C.value.push({
        selector: p,
        element: a,
        matched: l
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
    if (!f.value) return [];
    const e = [], n = /* @__PURE__ */ new Set();
    for (const t of Object.values(f.value.components))
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
        var s, i;
        return o.binding.toLowerCase().includes(t) || ((s = o.db) == null ? void 0 : s.table.toLowerCase().includes(t)) || ((i = o.db) == null ? void 0 : i.column.toLowerCase().includes(t)) || o.component.toLowerCase().includes(t);
      }
    );
  }
  function ne() {
    var n, t;
    if (!((t = (n = f.value) == null ? void 0 : n.dbSchema) != null && t.tables)) return [];
    const e = [];
    for (const [o, s] of Object.entries(f.value.dbSchema.tables))
      for (const [i, a] of Object.entries(s.columns))
        e.push({
          table: o,
          column: i,
          type: a.type,
          comment: a.comment,
          fullName: `${o}.${i}`
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
  function De() {
    var t, o;
    const e = [], n = [];
    if (!((t = f.value) != null && t.components)) return { pageLoad: e, action: n };
    for (const s of C.value) {
      if (!s.matched) continue;
      const i = s.element.component;
      if (i && ((o = f.value.components[i]) != null && o.apis))
        for (const a of f.value.components[i].apis)
          ["onMount", "useFetch", "useAsyncData"].includes(a.loadTrigger) ? e.some((l) => l.endpoint === a.endpoint && l.method === a.method) || e.push(a) : a.loadTrigger === "action" && (n.some((l) => l.endpoint === a.endpoint && l.method === a.method) || n.push(a));
    }
    return { pageLoad: e, action: n };
  }
  function je(e) {
    var n;
    if (!((n = f.value) != null && n.components)) return null;
    for (const t of Object.values(f.value.components))
      if (t.apis) {
        for (const o of t.apis)
          if (o.variable && e.startsWith(o.variable))
            return o;
      }
    return null;
  }
  function Re(e) {
    I.value = e;
  }
  function ke() {
    I.value = null;
  }
  function Ue() {
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
  function _e(e = "dev-annotations.json") {
    const n = oe(), t = new Blob([n], { type: "application/json" }), o = URL.createObjectURL(t), s = document.createElement("a");
    s.href = o, s.download = e, document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL(o);
  }
  function Be(e) {
    try {
      const n = JSON.parse(e), t = n.annotations || n;
      d.value = { ...d.value, ...t };
    } catch (n) {
      throw console.error("[DevInspector] Failed to import configs:", n), new Error("Invalid JSON format");
    }
  }
  function Fe() {
    d.value = {};
  }
  return {
    // State
    isEnabled: L,
    isAvailable: k,
    isEditMode: A,
    isPickMode: O,
    isInitializing: F,
    hoveredSelector: z,
    currentScreenSpec: R,
    isPanelOpen: x,
    elementConfigs: d,
    editingElementId: I,
    // Actions
    init: ie,
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
    deleteElementConfig: Ae,
    startEditing: Re,
    stopEditing: ke,
    exportConfigs: Ue,
    exportAsFile: oe,
    downloadAnnotations: _e,
    importConfigs: Be,
    clearAllConfigs: Fe,
    detectSourceBinding: K,
    autoDetectElementInfo: G,
    // Scan
    isScanning: D,
    scanProgress: j,
    scanResults: _,
    scanCurrentPage: V,
    scanAllPages: we,
    allPagesRoutes: Y,
    currentScanPage: M,
    clearScanResults: Ee,
    // Analysis data
    analysisData: f,
    loadAnalysisData: X,
    getAnalyzedElement: le,
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
    searchSchemaColumns: xe,
    getCurrentPageApis: De,
    getApiSourceForBinding: je
  };
});
function Ze() {
  return He();
}
export {
  Ze as a,
  He as u
};
