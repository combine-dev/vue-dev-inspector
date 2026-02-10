import { ref as g, computed as Z, watch as ve, nextTick as A } from "vue";
import { defineStore as Yt } from "pinia";
const Vt = {}, Qt = "devInspector:elementConfigs", _e = "devInspector:screenConfigs", je = "devInspector:masterDefinitions", en = Yt("devInspector", () => {
  const N = g({}), U = g(!1), L = g(!1), M = g(!1), ae = g(!1), Y = g(null), B = g(!1), d = g({}), k = g(null), se = g(null), b = g({}), ke = g(!1), E = g({}), he = Z(() => N.value.storageKey || Qt), ie = Z(() => N.value.storageKey || "shared"), S = g(null), Re = g("all"), ce = g(!0), Fe = g("all"), Ue = g(!1), ye = g(""), be = g("column"), Me = g(!1), V = g([]), Be = g(!1), R = g(/* @__PURE__ */ new Set()), re = "devInspector:hiddenAnalysisSelectors", z = Z(() => N.value.enabledInProduction ? !0 : typeof import.meta < "u" && Vt ? !1 : process.env.NODE_ENV === "development"), Se = g(!1);
  function Je(e = {}) {
    N.value = e, Ke(), Ze(), et(), Ot(), e.analysisData && (S.value = e.analysisData);
    const n = e.analysisDataUrl ?? "/dev-inspector-analysis.json";
    e.autoLoadAnalysis !== !1 && z.value && we(n), F() !== "none" && z.value && (Ce().then((o) => {
      o && console.log(`[DevInspector] ${F()} sync active`);
    }), ct(), We());
  }
  async function we(e) {
    var n;
    try {
      const t = await fetch(e);
      if (t.ok)
        return S.value = await t.json(), console.log("[DevInspector] Analysis data loaded:", Object.keys(((n = S.value) == null ? void 0 : n.components) || {}).length, "components"), !0;
    } catch {
      console.debug("[DevInspector] Analysis data not found at", e);
    }
    return !1;
  }
  function qe(e) {
    if (!S.value) return null;
    for (const n of Object.values(S.value.components)) {
      const t = n.elements.find((o) => o.selector === e);
      if (t) return t;
    }
    return null;
  }
  function He(e) {
    if (!S.value) return [];
    const n = [];
    for (const [t, o] of Object.entries(S.value.components))
      (!e || t.includes(e)) && n.push(...o.elements);
    return n;
  }
  function Ke() {
    try {
      const e = N.value.initialAnnotations || {};
      if (typeof window < "u") {
        const n = localStorage.getItem(he.value), t = n ? JSON.parse(n) : {};
        d.value = { ...e, ...t };
      } else
        d.value = e;
    } catch (e) {
      console.error("[DevInspector] Failed to load configs:", e);
    }
  }
  function D() {
    try {
      if (typeof window < "u") {
        const e = JSON.stringify(d.value);
        localStorage.setItem(he.value, e), console.log("[DevInspector] Saved configs:", Object.keys(d.value).length, "items");
      }
    } catch (e) {
      console.error("[DevInspector] Failed to save configs:", e);
    }
  }
  const _ = g(Math.random().toString(36).slice(2, 10)), $ = g(!1);
  let J = null, q = null, Q = null, j = "";
  function F() {
    var e;
    return (e = N.value.supabase) != null && e.url ? "supabase" : N.value.serverSync !== !1 ? "vite" : "none";
  }
  function le() {
    const e = N.value.supabase;
    return {
      apikey: e.anonKey,
      Authorization: `Bearer ${e.anonKey}`,
      "Content-Type": "application/json",
      Prefer: "return=representation"
    };
  }
  function ue() {
    const e = N.value.supabase, n = e.table || "dev_inspector";
    return `${e.url}/rest/v1/${n}`;
  }
  function ee() {
    return typeof window < "u" ? window.location.pathname : "/";
  }
  function ze(e) {
    const n = {};
    for (const [t, o] of Object.entries(d.value))
      (o.pagePath === e || !o.pagePath && e === "/") && (n[t] = o);
    return n;
  }
  function Ge(e) {
    return b.value[e] || null;
  }
  async function Ce(e) {
    var o;
    const n = F();
    if (n === "none") return !1;
    const t = e || ee();
    try {
      let s = null;
      if (n === "supabase") {
        const a = await fetch(`${ue()}?id=eq.${encodeURIComponent(ie.value)}&select=annotations,screen_configs,updated_at`, {
          headers: le()
        });
        if (!a.ok) return !1;
        const i = await a.json();
        i.length > 0 ? s = {
          annotations: i[0].annotations || {},
          screenConfig: ((o = i[0].screen_configs) == null ? void 0 : o[t]) || null
        } : s = { annotations: {}, screenConfig: null };
      } else {
        const a = await fetch(`/__dev-inspector/annotations?page=${encodeURIComponent(t)}`);
        if (!a.ok) return !1;
        s = await a.json();
      }
      if (s) {
        const a = JSON.stringify(s);
        if (a === j) return !0;
        if (j = a, $.value = !0, n === "supabase")
          s.annotations && (d.value = { ...s.annotations });
        else if (s.annotations) {
          const i = { ...d.value };
          for (const c of Object.keys(i))
            i[c].pagePath === t && delete i[c];
          d.value = { ...i, ...s.annotations };
        }
        return s.screenConfig && (b.value = {
          ...b.value,
          [t]: s.screenConfig
        }), A(() => {
          D(), H(), $.value = !1;
        }), console.log("[DevInspector] Loaded from server:", Object.keys(s.annotations || {}).length, "annotations for", t), !0;
      }
    } catch {
    }
    return !1;
  }
  function fe() {
    if ($.value) return;
    q && clearTimeout(q);
    const e = F();
    e !== "none" && (q = setTimeout(() => {
      const n = ee();
      if (e === "supabase") {
        const t = d.value, o = b.value, s = JSON.stringify({ annotations: t, screenConfigs: o });
        if (s === j) return;
        j = s;
        const a = {
          id: ie.value,
          annotations: t,
          screen_configs: o,
          updated_at: (/* @__PURE__ */ new Date()).toISOString(),
          updated_by: _.value
        };
        fetch(ue(), {
          method: "POST",
          headers: { ...le(), Prefer: "resolution=merge-duplicates" },
          body: JSON.stringify(a)
        }).catch(() => {
        });
      } else {
        const t = ze(n), o = Ge(n), s = JSON.stringify({ annotations: t, screenConfig: o });
        if (s === j) return;
        j = s;
        const a = {
          clientId: _.value,
          page: n,
          annotations: t,
          screenConfig: o,
          _meta: {
            lastUpdated: (/* @__PURE__ */ new Date()).toISOString(),
            updatedBy: _.value
          }
        };
        fetch("/__dev-inspector/annotations", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(a)
        }).catch(() => {
        });
      }
    }, 500));
  }
  function We() {
    var n;
    if (typeof window > "u") return;
    const e = F();
    if (e !== "none")
      if (e === "supabase") {
        const t = ((n = N.value.supabase) == null ? void 0 : n.pollInterval) || 3e3;
        Q = setInterval(async () => {
          try {
            const o = await fetch(`${ue()}?id=eq.${encodeURIComponent(ie.value)}&select=annotations,screen_configs,updated_by`, {
              headers: le()
            });
            if (!o.ok) return;
            const s = await o.json();
            if (s.length === 0) return;
            const a = s[0];
            if (a.updated_by === _.value) return;
            const i = JSON.stringify({ annotations: a.annotations, screenConfigs: a.screen_configs });
            if (i === j) return;
            j = i, $.value = !0, a.annotations && (d.value = { ...a.annotations }), a.screen_configs && (b.value = { ...a.screen_configs }), A(() => {
              D(), H(), $.value = !1;
            }), console.log("[DevInspector] Synced from Supabase");
          } catch {
          }
        }, t), console.log(`[DevInspector] Supabase polling started (${t}ms)`);
      } else {
        if (typeof EventSource > "u") return;
        J = new EventSource("/__dev-inspector/events"), J.onmessage = (t) => {
          try {
            const o = JSON.parse(t.data);
            if (o.type === "connected") {
              console.log("[DevInspector] SSE connected");
              return;
            }
            if (o.type === "update" && o.clientId !== _.value) {
              const s = ee();
              if (o.page && o.page !== s) return;
              if ($.value = !0, o.annotations) {
                const a = { ...d.value };
                for (const i of Object.keys(a))
                  a[i].pagePath === s && delete a[i];
                d.value = { ...a, ...o.annotations };
              }
              o.screenConfig && (b.value = {
                ...b.value,
                [s]: o.screenConfig
              }), A(() => {
                D(), H(), $.value = !1;
              }), console.log("[DevInspector] Synced from another client (page:", s + ")");
            }
            o.type === "masters" && o.clientId !== _.value && ($.value = !0, o.masters && (E.value = { ...o.masters }), A(() => {
              G(), $.value = !1;
            }), console.log("[DevInspector] Masters synced from another client"));
          } catch {
          }
        }, J.onerror = () => {
        };
      }
  }
  function Xe() {
    J && (J.close(), J = null), Q && (clearInterval(Q), Q = null), q && (clearTimeout(q), q = null);
  }
  ve(d, () => {
    A(() => {
      D(), fe();
    });
  }, { deep: !0 });
  function Ze() {
    try {
      if (typeof window < "u") {
        const e = localStorage.getItem(_e);
        e && (b.value = JSON.parse(e));
      }
    } catch (e) {
      console.error("[DevInspector] Failed to load screen configs:", e);
    }
  }
  function H() {
    try {
      if (typeof window < "u") {
        const e = JSON.stringify(b.value);
        localStorage.setItem(_e, e);
      }
    } catch (e) {
      console.error("[DevInspector] Failed to save screen configs:", e);
    }
  }
  ve(b, () => {
    A(() => {
      H(), fe();
    });
  }, { deep: !0 });
  function Ye(e) {
    const n = e || (typeof window < "u" ? window.location.pathname : "/");
    return b.value[n];
  }
  function Ve(e) {
    b.value = {
      ...b.value,
      [e.path]: e
    }, A(() => H());
  }
  function Qe(e) {
    const { [e]: n, ...t } = b.value;
    b.value = t, A(() => H());
  }
  function et() {
    try {
      if (typeof window < "u") {
        const e = localStorage.getItem(je);
        e && (E.value = JSON.parse(e));
      }
    } catch (e) {
      console.error("[DevInspector] Failed to load master definitions:", e);
    }
  }
  function G() {
    try {
      typeof window < "u" && localStorage.setItem(je, JSON.stringify(E.value));
    } catch (e) {
      console.error("[DevInspector] Failed to save master definitions:", e);
    }
  }
  ve(E, () => {
    A(() => {
      G(), it();
    });
  }, { deep: !0 });
  function tt(e) {
    return E.value[e];
  }
  function nt(e) {
    E.value = {
      ...E.value,
      [e.id]: { ...e, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }
    }, A(() => G());
  }
  function ot(e) {
    const { [e]: n, ...t } = E.value;
    E.value = t, A(() => G());
  }
  function at(e) {
    return Object.values(E.value).filter((n) => n.table === e);
  }
  function st(e) {
    var n;
    return ((n = E.value[e]) == null ? void 0 : n.entries) || [];
  }
  function it() {
    if ($.value) return;
    const e = F();
    e !== "none" && e === "vite" && fetch("/__dev-inspector/masters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        clientId: _.value,
        masters: E.value
      })
    }).catch(() => {
    });
  }
  async function ct() {
    if (F() !== "vite") return !1;
    try {
      const n = await fetch("/__dev-inspector/masters");
      if (!n.ok) return !1;
      const t = await n.json();
      return t.masters && (E.value = { ...t.masters }, A(() => G())), !0;
    } catch {
      return !1;
    }
  }
  function rt() {
    var o, s, a, i, c;
    const e = [], n = /* @__PURE__ */ new Set(), t = {};
    for (const r of Object.values(d.value)) {
      const f = r.fieldInfoList || (r.fieldInfo ? [r.fieldInfo] : []), l = ((o = r.sourceBinding) == null ? void 0 : o.type) === "v-model";
      for (const u of f)
        u.table && (t[u.table] || (t[u.table] = { read: !1, write: !1, isList: !1 }), t[u.table].read = !0, l && (t[u.table].write = !0));
      if (((s = r.note) == null ? void 0 : s.displayType) === "db_direct" || ((a = r.note) == null ? void 0 : a.displayType) === "db_formatted")
        for (const u of f)
          u.table && t[u.table] && (r.id.includes("tbody") || r.id.includes(" tr") || r.id.includes(" td")) && (t[u.table].isList = !0);
      if (((i = r.actionInfo) == null ? void 0 : i.type) === "api" && r.actionInfo.target) {
        const u = `${r.actionInfo.method || "GET"}:${r.actionInfo.target}`;
        n.has(u) || (n.add(u), e.push({
          method: r.actionInfo.method || "GET",
          endpoint: r.actionInfo.target,
          description: r.actionInfo.description || "",
          loadTiming: "action"
        }));
      }
    }
    for (const [r, f] of Object.entries(t)) {
      if (f.read) {
        const l = f.isList ? `/api/${r}` : `/api/${r}/:id`, u = `GET:${l}`;
        n.has(u) || (n.add(u), e.push({
          method: "GET",
          endpoint: l,
          description: f.isList ? `${r} 一覧取得` : `${r} 詳細取得`,
          loadTiming: "onMount"
        }));
      }
      if (f.write) {
        const l = `/api/${r}/:id`, u = `PUT:${l}`;
        n.has(u) || (n.add(u), e.push({
          method: "PUT",
          endpoint: l,
          description: `${r} 更新`,
          loadTiming: "action"
        }));
      }
    }
    if ((c = S.value) != null && c.components) {
      const r = typeof window < "u" ? window.location.pathname : "/";
      for (const [f, l] of Object.entries(S.value.components)) {
        const u = f.replace(/^pages/, "").replace(/\.vue$/, "").replace(/\/index$/, "").replace(/\[.*?\]/g, "[^/]+");
        let v = !1;
        if (r === "/" && f.includes("index"))
          v = !0;
        else if (f.includes("pages/"))
          try {
            v = !!r.match(new RegExp(`^${u}$`));
          } catch {
          }
        if (v && l.apis)
          for (const m of l.apis) {
            if (!m.endpoint) continue;
            const T = `${m.method}:${m.endpoint}`;
            n.has(T) || (n.add(T), e.push({
              method: m.method,
              endpoint: m.endpoint,
              description: m.variable ? `→ ${m.variable}` : "",
              loadTiming: ["onMount", "useFetch", "useAsyncData"].includes(m.loadTrigger) ? "onMount" : "action"
            }));
          }
      }
    }
    return e;
  }
  const lt = Z(() => {
    var o, s, a, i, c, r, f, l, u, v, m, T, C, h, y;
    const e = ye.value.trim().toLowerCase();
    if (!e) return [];
    const n = be.value, t = [];
    for (const [w, p] of Object.entries(d.value)) {
      const I = p.pagePath || "/", ge = b.value[I], ne = (ge == null ? void 0 : ge.name) || I;
      if (n === "column") {
        const me = (o = p.fieldInfoList) != null && o.length ? p.fieldInfoList : p.fieldInfo ? [p.fieldInfo] : [];
        for (const P of me)
          (`${P.table}.${P.column}`.toLowerCase().includes(e) || P.table.toLowerCase().includes(e) || P.column.toLowerCase().includes(e)) && t.push({
            pagePath: I,
            pageName: ne,
            selector: w,
            elementType: p.elementType,
            matchedField: `${P.table}.${P.column}`,
            matchContext: `${P.type || ""} ${P.description || ""}`.trim()
          });
        const oe = ((s = p.note) == null ? void 0 : s.calcSources) || [], Zt = ((a = p.note) == null ? void 0 : a.storedCalcSources) || [];
        for (const P of [...oe, ...Zt])
          P.toLowerCase().includes(e) && t.push({
            pagePath: I,
            pageName: ne,
            selector: w,
            elementType: p.elementType,
            matchedField: P,
            matchContext: ((i = p.note) == null ? void 0 : i.calcDescription) || ((c = p.note) == null ? void 0 : c.storedCalcLogic) || "参照元"
          });
      } else if (n === "api")
        (f = (r = p.actionInfo) == null ? void 0 : r.target) != null && f.toLowerCase().includes(e) && t.push({
          pagePath: I,
          pageName: ne,
          selector: w,
          elementType: p.elementType,
          matchedField: `${p.actionInfo.method || ""} ${p.actionInfo.target}`.trim(),
          matchContext: p.actionInfo.description || p.actionInfo.type
        });
      else if (n === "text") {
        const me = [
          (l = p.note) == null ? void 0 : l.text,
          (u = p.note) == null ? void 0 : u.calcDescription,
          (v = p.note) == null ? void 0 : v.formatDescription,
          (m = p.note) == null ? void 0 : m.condition,
          (T = p.actionInfo) == null ? void 0 : T.description,
          (C = p.formInfo) == null ? void 0 : C.description,
          w
          // selector itself
        ].filter(Boolean);
        for (const oe of me)
          if (oe.toLowerCase().includes(e)) {
            t.push({
              pagePath: I,
              pageName: ne,
              selector: w,
              elementType: p.elementType,
              matchedField: oe.substring(0, 60),
              matchContext: ((y = (h = p.note) == null ? void 0 : h.text) == null ? void 0 : y.substring(0, 40)) || ""
            });
            break;
          }
      }
    }
    if (n === "api")
      for (const [w, p] of Object.entries(b.value))
        for (const I of p.apis || [])
          I.endpoint.toLowerCase().includes(e) && t.push({
            pagePath: w,
            pageName: p.name || w,
            selector: "",
            elementType: void 0,
            matchedField: `${I.method} ${I.endpoint}`,
            matchContext: I.description || "画面API"
          });
    return t;
  });
  function ut() {
    if (typeof document > "u") return [];
    const e = typeof window < "u" ? window.location.pathname : "/", n = /* @__PURE__ */ new Set();
    for (const [s, a] of Object.entries(d.value))
      (!a.pagePath || a.pagePath === e) && n.add(s);
    const t = [], o = /* @__PURE__ */ new Set();
    return document.querySelectorAll("[data-di-binding]").forEach((s) => {
      var c;
      const a = s;
      if (a.closest("[data-dev-inspector]")) return;
      const i = x(a);
      n.has(i) || o.has(i) || (o.add(i), t.push({
        selector: i,
        tagName: a.tagName.toLowerCase(),
        category: "binding",
        text: (((c = a.textContent) == null ? void 0 : c.trim()) || "").substring(0, 50),
        suggestedType: "datasource"
      }));
    }), document.querySelectorAll("input, select, textarea").forEach((s) => {
      var f, l;
      const a = s;
      if (a.closest("[data-dev-inspector]") || a.type === "hidden") return;
      const i = window.getComputedStyle(a);
      if (i.display === "none" || i.visibility === "hidden") return;
      const c = x(a);
      if (n.has(c) || o.has(c)) return;
      o.add(c);
      const r = ((l = (f = a.closest("label")) == null ? void 0 : f.textContent) == null ? void 0 : l.trim()) || a.getAttribute("aria-label") || a.placeholder || a.name || a.tagName.toLowerCase();
      t.push({
        selector: c,
        tagName: a.tagName.toLowerCase(),
        category: "form",
        text: (r || "").substring(0, 50),
        suggestedType: "form"
      });
    }), document.querySelectorAll('button, a[href], [role="button"]').forEach((s) => {
      var f;
      const a = s;
      if (a.closest("[data-dev-inspector]")) return;
      const i = ((f = a.textContent) == null ? void 0 : f.trim()) || "";
      if (!i) return;
      const c = window.getComputedStyle(a);
      if (c.display === "none" || c.visibility === "hidden") return;
      const r = x(a);
      n.has(r) || o.has(r) || (o.add(r), t.push({
        selector: r,
        tagName: a.tagName.toLowerCase(),
        category: "action",
        text: i.substring(0, 50),
        suggestedType: "action"
      }));
    }), V.value = t, t;
  }
  function ft(e, n) {
    const t = {
      elementType: n,
      pagePath: ee(),
      note: { text: "", type: "todo" }
    };
    n === "action" ? t.actionInfo = { type: "function", description: "" } : n === "form" && (t.formInfo = { inputType: "text" }), de(e, t), k.value = e, V.value = V.value.filter((o) => o.selector !== e);
  }
  const dt = Z(() => {
    var i, c, r, f;
    const e = /* @__PURE__ */ new Map(), n = [], t = /* @__PURE__ */ new Set();
    for (const [l, u] of Object.entries(b.value))
      e.set(l, {
        path: l,
        name: u.name || l,
        annotationCount: Object.values(d.value).filter((v) => v.pagePath === l).length
      });
    for (const [l, u] of Object.entries(d.value))
      if (((i = u.actionInfo) == null ? void 0 : i.type) === "navigate" && u.actionInfo.target) {
        const v = u.pagePath || "/", m = u.actionInfo.target, T = `${v}→${m}`;
        if (!e.has(v)) {
          const C = b.value[v];
          e.set(v, {
            path: v,
            name: (C == null ? void 0 : C.name) || v,
            annotationCount: Object.values(d.value).filter((h) => h.pagePath === v).length
          });
        }
        if (!e.has(m)) {
          const C = b.value[m];
          e.set(m, {
            path: m,
            name: (C == null ? void 0 : C.name) || m,
            annotationCount: Object.values(d.value).filter((h) => h.pagePath === m).length
          });
        }
        if (!t.has(T)) {
          t.add(T);
          let C = u.actionInfo.description || ((c = u.note) == null ? void 0 : c.text) || "";
          if (!C && typeof document < "u")
            try {
              const h = document.querySelector(l);
              h && (C = ((f = (r = h.textContent) == null ? void 0 : r.trim()) == null ? void 0 : f.substring(0, 20)) || "");
            } catch {
            }
          n.push({
            from: v,
            to: m,
            label: C,
            selector: l
          });
        }
      }
    const o = Array.from(e.values()), s = /* @__PURE__ */ new Set();
    for (const l of n)
      s.add(l.from), s.add(l.to);
    const a = o.filter((l) => !s.has(l.path));
    return { nodes: o, edges: n, orphanPages: a };
  });
  async function pt() {
    z.value && (U.value ? (U.value = !1, L.value = !1, k.value = null) : await Ie());
  }
  async function Ie() {
    if (!z.value) return;
    if (S.value && !Se.value && N.value.autoApplyAnalysis !== !1) {
      ae.value = !0, U.value = !0;
      try {
        await new Promise((n) => setTimeout(n, 300)), Pe(), Se.value = !0;
      } finally {
        ae.value = !1;
      }
    } else
      U.value = !0;
  }
  function gt() {
    U.value = !1, L.value = !1, k.value = null;
  }
  function mt() {
    L.value = !L.value, L.value || (k.value = null), L.value && (M.value = !1);
  }
  function vt() {
    M.value = !M.value, M.value && (L.value = !1), se.value = null;
  }
  function ht(e) {
    se.value = e;
  }
  function x(e) {
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
      const s = Array.from(t.classList).filter(
        (i) => !i.startsWith("hover:") && !i.startsWith("focus:") && !/[/\[\]()!@#$%^&*=+{}|\\:'"<>,?]/.test(i)
      ).slice(0, 2);
      s.length > 0 && (o += "." + s.join("."));
      const a = t.parentElement;
      if (a) {
        const i = Array.from(a.children).filter(
          (c) => c.tagName === t.tagName
        );
        if (i.length > 1) {
          const c = i.indexOf(t) + 1;
          o += `:nth-child(${c})`;
        }
      }
      n.unshift(o), t = t.parentElement;
    }
    return n.join(" > ");
  }
  function yt() {
    const e = typeof window < "u" ? window.location.pathname : "/";
    return Object.keys(d.value).filter((n) => {
      const t = d.value[n];
      return t ? (n.includes(">") || n.startsWith("#") || n.startsWith("[") || n.startsWith(".")) && (!t.componentPath || t.componentPath.includes(e) || e === "/") : !1;
    });
  }
  function bt(e) {
    Y.value = e;
  }
  function St() {
    Y.value = null;
  }
  function wt() {
    B.value = !B.value;
  }
  function Ct() {
    B.value = !0;
  }
  function It() {
    B.value = !1;
  }
  function Tt(e) {
    return d.value[e];
  }
  function de(e, n) {
    var i;
    const t = (/* @__PURE__ */ new Date()).toISOString(), o = d.value[e], s = typeof window < "u" ? window.location.pathname : "/", a = {
      ...o,
      ...n,
      id: e,
      pagePath: n.pagePath || (o == null ? void 0 : o.pagePath) || s,
      componentPath: n.componentPath || ((i = Y.value) == null ? void 0 : i.componentPath) || "",
      createdAt: (o == null ? void 0 : o.createdAt) || t,
      updatedAt: t
    };
    d.value = {
      ...d.value,
      [e]: a
    }, A(() => D());
  }
  function At(e) {
    const { [e]: n, ...t } = d.value;
    d.value = t, A(() => D());
  }
  function Te(e) {
    var C;
    const n = ((C = e.textContent) == null ? void 0 : C.trim()) || "", t = e.tagName.toUpperCase();
    if (!n && t !== "INPUT" && t !== "SELECT" && t !== "TEXTAREA")
      return null;
    const o = e.__vueParentComponent;
    if (o) {
      const h = o.props || {}, y = o.attrs || {};
      if ("modelValue" in h || "model-value" in y)
        return {
          type: "v-model",
          source: "form binding detected",
          isStatic: !1
        };
    }
    if (t === "INPUT" || t === "SELECT" || t === "TEXTAREA") {
      const h = e.type || "text", y = e.placeholder || "";
      return {
        type: "v-model",
        source: `${t.toLowerCase()}[type=${h}]${y ? ` placeholder="${y}"` : ""}`,
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
    const a = e.closest('ul, ol, [role="list"]');
    if (a && a.children.length > 1)
      return {
        type: "api",
        source: "list item",
        isStatic: !1
      };
    const i = [
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
    for (const h of i) {
      const y = e.closest(h);
      if (y) {
        const w = y.parentElement;
        if (w && Array.from(w.children).filter(
          (I) => I !== y && I.className === y.className
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
      const h = e.parentElement, w = Array.from(h.children).filter((p) => p.tagName === e.tagName);
      if (w.length >= 2 && w.filter(
        (I) => I.children.length === e.children.length
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
    for (const h of r)
      if (h.test(n))
        return {
          type: "api",
          source: "dynamic data pattern",
          isStatic: !1
        };
    const f = [
      /^[\u4e00-\u9faf]{2,4}$/,
      // Japanese Kanji names (2-4 chars)
      /^[\u3040-\u309f\u30a0-\u30ff]{2,6}$/,
      // Hiragana/Katakana names
      /^[A-Z][a-z]+ [A-Z][a-z]+$/
      // English names like "John Smith"
    ];
    for (const h of f)
      if (h.test(n))
        return {
          type: "api",
          source: "name pattern",
          isStatic: !1
        };
    const u = ["LABEL", "TH", "LEGEND", "FIGCAPTION"].includes(t), m = [
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
    ].some((h) => h.test(n)), T = t === "BUTTON" || e.closest("button") !== null || e.getAttribute("role") === "button";
    return u || m || T && n.length < 20 ? {
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
  function Ae(e, n) {
    var v, m, T, C, h;
    const t = {}, o = ((v = e.textContent) == null ? void 0 : v.trim()) || "", s = e.getAttribute("data-di-binding");
    e.getAttribute("data-di-db"), e.getAttribute("data-di-component"), e.getAttribute("data-di-db-comment");
    let a = e;
    if (!s) {
      const y = e.closest("[data-di-binding]");
      y && (a = y);
    }
    const i = a.getAttribute("data-di-binding"), c = a.getAttribute("data-di-db"), r = a.getAttribute("data-di-component"), f = a.getAttribute("data-di-db-type"), l = a.getAttribute("data-di-db-comment");
    if (i || c) {
      if (t.sourceBinding = {
        type: "api",
        source: i || void 0,
        isStatic: !1
      }, c) {
        const [y, w] = c.split(".");
        y && w && (t.fieldInfo = {
          table: y,
          column: w,
          type: f || void 0,
          description: l || void 0
        });
      }
      return r && (t.devMeta = {
        usedComponents: [r]
      }), t.note = {
        type: "info",
        text: `【データバインディング】${i}${c ? ` → ${c}` : ""}`
      }, t;
    }
    const u = Te(e);
    if (u)
      if (t.sourceBinding = u, u.isStatic)
        t.note = {
          type: "info",
          text: `【固定文言】${o}`
        };
      else if (u.type === "v-model") {
        const y = e.tagName.toUpperCase();
        if (y === "INPUT" || y === "SELECT" || y === "TEXTAREA") {
          const w = e.placeholder || "", p = ((T = (m = e.closest("label")) == null ? void 0 : m.textContent) == null ? void 0 : T.trim()) || e.getAttribute("aria-label") || ((h = (C = document.querySelector(`label[for="${e.id}"]`)) == null ? void 0 : C.textContent) == null ? void 0 : h.trim()) || "";
          t.note = {
            type: "todo",
            text: `【フォーム要素】${p || w || y.toLowerCase()}`
          };
        }
      } else u.type === "api" && (t.note = {
        type: "question",
        text: `【動的データ】${o.substring(0, 100)}${o.length > 100 ? "..." : ""}`
      });
    return t;
  }
  const W = g(!1), X = g(0), te = g([]);
  async function Ee(e = {}) {
    W.value = !0, X.value = 0, te.value = [];
    const { rescan: n = !1 } = e;
    if (n) {
      const t = typeof window < "u" ? window.location.pathname : "/", o = Object.keys(d.value).filter((s) => {
        const a = d.value[s];
        return !a.componentPath || a.componentPath.includes(t);
      });
      for (const s of o)
        delete d.value[s];
      A(() => D());
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
      o.forEach((f) => {
        var y;
        const l = f;
        if (l.closest("[data-dev-inspector]")) return;
        const u = window.getComputedStyle(l);
        if (u.display === "none" || u.visibility === "hidden" || u.opacity === "0") return;
        const v = x(l);
        if (d.value[v]) return;
        const m = l.tagName.toUpperCase(), T = ((y = l.textContent) == null ? void 0 : y.trim()) || "";
        if (m === "INPUT" || m === "SELECT" || m === "TEXTAREA") {
          s.push(l);
          return;
        }
        if (T.length > 300 || T.length === 0 || m === "DIV" && (Array.from(l.childNodes).filter((p) => p.nodeType === Node.TEXT_NODE).map((p) => {
          var I;
          return ((I = p.textContent) == null ? void 0 : I.trim()) || "";
        }).join("").trim().length === 0 || l.children.length > 3))
          return;
        const C = Array.from(l.childNodes).some((w) => {
          var p;
          return w.nodeType === Node.TEXT_NODE && (((p = w.textContent) == null ? void 0 : p.trim()) || "").length > 0;
        }), h = !Array.from(l.children).some((w) => ["DIV", "P", "UL", "OL", "TABLE", "SECTION", "ARTICLE"].includes(w.tagName));
        (C || l.children.length === 0 && T.length > 0 || h) && s.push(l);
      });
      const a = s.length;
      let i = 0, c = 0;
      const r = 20;
      for (let f = 0; f < s.length; f += r) {
        const l = s.slice(f, f + r);
        for (const u of l) {
          const v = x(u), m = Ae(u, v);
          m.sourceBinding && (te.value.push({ selector: v, element: u, detected: m }), de(v, m), c++), i++, X.value = Math.round(i / a * 100);
        }
        await new Promise((u) => setTimeout(u, 10));
      }
      return c;
    } finally {
      W.value = !1, X.value = 100;
    }
  }
  const Ne = g([]), pe = g("");
  async function Et(e) {
    var t;
    if (!e)
      return console.warn("[DevInspector] Router not provided for all pages scan"), [];
    W.value = !0;
    const n = [];
    try {
      const o = e.getRoutes(), s = [];
      for (const a of o)
        a.path.includes(":") && !a.path.includes("?") || a.redirect || a.path !== "/:pathMatch(.*)*" && ((t = a.meta) != null && t.devInspectorSkip || s.push(a.path));
      Ne.value = s;
      for (const a of s) {
        pe.value = a;
        try {
          await e.push(a), await new Promise((c) => setTimeout(c, 500));
          const i = await Ee();
          n.push({ page: a, count: i });
        } catch (i) {
          console.warn(`[DevInspector] Failed to scan page ${a}:`, i), n.push({ page: a, count: 0 });
        }
      }
      return n;
    } finally {
      W.value = !1, pe.value = "";
    }
  }
  function Nt() {
    te.value = [], X.value = 0;
  }
  const O = g([]);
  async function Pe() {
    var a;
    if (!S.value)
      return console.warn("[DevInspector] No analysis data loaded. Call loadAnalysisData first."), 0;
    O.value = [];
    const e = typeof window < "u" ? window.location.pathname : "/", n = (i) => {
      if (!S.value) return null;
      for (const [c, r] of Object.entries(S.value.components))
        if (r.componentName === i || r.componentName.toLowerCase() === i.toLowerCase() || c.toLowerCase().includes(`/${i.toLowerCase()}.vue`))
          return r;
      return null;
    }, t = (i, c = /* @__PURE__ */ new Set()) => {
      const r = [];
      if (c.has(i.componentName)) return r;
      if (c.add(i.componentName), r.push(...i.elements), i.usedComponents)
        for (const f of i.usedComponents) {
          const l = n(f);
          l && r.push(...t(l, c));
        }
      return r;
    }, o = [], s = /* @__PURE__ */ new Set();
    for (const [i, c] of Object.entries(S.value.components)) {
      const r = i.replace(/^pages/, "").replace(/\.vue$/, "").replace(/\/index$/, "").replace(/\[.*?\]/g, "[^/]+");
      let f = !1;
      if ((e === "/" && i.includes("index") || i.includes("pages/") && e.match(new RegExp(`^${r}$`))) && (f = !0), f) {
        const l = t(c);
        o.push(...l), s.add(c.componentName), c.usedComponents && c.usedComponents.forEach((u) => s.add(u));
      }
    }
    for (const [i, c] of Object.entries(S.value.components))
      i.includes("components/") && !s.has(c.componentName) && o.push(...c.elements);
    for (const i of o) {
      if (R.value.has(i.selector))
        continue;
      let c = !1, r = i.selector;
      try {
        document.querySelector(i.selector) && (c = !0);
      } catch {
      }
      if (!c && i.text && !i.binding) {
        const f = i.text.replace(/\[コメント\]\s*/, ""), l = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT,
          null
        );
        for (; l.nextNode(); ) {
          const u = l.currentNode;
          if ((a = u.textContent) != null && a.includes(f)) {
            const v = u.parentElement;
            if (v) {
              c = !0, r = x(v);
              break;
            }
          }
        }
      }
      if (!c && i.selector.includes(".")) {
        const f = i.selector.match(/^(\w+)\.(.+)$/);
        if (f) {
          const [, l, u] = f;
          try {
            const v = document.querySelector(i.selector);
            v && (c = !0, r = x(v));
          } catch {
          }
        }
      }
      if (!c && i.binding) {
        const f = `[data-bind="${i.binding}"]`;
        try {
          const l = document.querySelector(f);
          l && (c = !0, r = x(l));
        } catch {
        }
      }
      O.value.push({
        selector: r,
        element: i,
        matched: c
      });
    }
    return console.log(`[DevInspector] Applied analysis: ${O.value.filter((i) => i.matched).length}/${O.value.length} elements matched`), O.value.filter((i) => i.matched).length;
  }
  function Pt() {
    O.value = [];
  }
  function $t(e) {
    O.value = O.value.filter((n) => n.selector !== e), R.value.add(e), Lt();
  }
  function Ot() {
    try {
      const e = localStorage.getItem(re);
      e && (R.value = new Set(JSON.parse(e)));
    } catch {
    }
  }
  function Lt() {
    try {
      localStorage.setItem(
        re,
        JSON.stringify([...R.value])
      );
    } catch {
    }
  }
  function Dt() {
    R.value.clear(), localStorage.removeItem(re);
  }
  function $e() {
    const e = {
      removed: [...R.value],
      exportedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    return JSON.stringify(e, null, 2);
  }
  function xt(e = "dev-inspector-changes.json") {
    const n = $e(), t = new Blob([n], { type: "application/json" }), o = URL.createObjectURL(t), s = document.createElement("a");
    s.href = o, s.download = e, document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL(o);
  }
  function Oe() {
    if (!S.value) return [];
    const e = [], n = /* @__PURE__ */ new Set();
    for (const t of Object.values(S.value.components))
      for (const o of t.elements)
        o.binding && !n.has(o.binding) && (n.add(o.binding), e.push({
          binding: o.binding,
          db: o.db,
          api: o.api,
          component: t.componentName
        }));
    return e.sort((t, o) => t.db && !o.db ? -1 : !t.db && o.db ? 1 : t.binding.localeCompare(o.binding));
  }
  function _t(e) {
    const n = Oe();
    if (!e) return n;
    const t = e.toLowerCase();
    return n.filter(
      (o) => {
        var s, a;
        return o.binding.toLowerCase().includes(t) || ((s = o.db) == null ? void 0 : s.table.toLowerCase().includes(t)) || ((a = o.db) == null ? void 0 : a.column.toLowerCase().includes(t)) || o.component.toLowerCase().includes(t);
      }
    );
  }
  function Le() {
    var n, t;
    if (!((t = (n = S.value) == null ? void 0 : n.dbSchema) != null && t.tables)) return [];
    const e = [];
    for (const [o, s] of Object.entries(S.value.dbSchema.tables))
      for (const [a, i] of Object.entries(s.columns))
        e.push({
          table: o,
          column: a,
          type: i.type,
          comment: i.comment,
          fullName: `${o}.${a}`
        });
    return e.sort((o, s) => o.table !== s.table ? o.table.localeCompare(s.table) : o.column.localeCompare(s.column));
  }
  function jt(e) {
    const n = Le();
    if (!e) return n;
    const t = e.toLowerCase();
    return n.filter(
      (o) => {
        var s;
        return o.table.toLowerCase().includes(t) || o.column.toLowerCase().includes(t) || o.fullName.toLowerCase().includes(t) || ((s = o.comment) == null ? void 0 : s.toLowerCase().includes(t));
      }
    );
  }
  function kt() {
    var t, o;
    const e = [], n = [];
    if (!((t = S.value) != null && t.components)) return { pageLoad: e, action: n };
    for (const s of O.value) {
      if (!s.matched) continue;
      const a = s.element.component;
      if (a && ((o = S.value.components[a]) != null && o.apis))
        for (const i of S.value.components[a].apis)
          ["onMount", "useFetch", "useAsyncData"].includes(i.loadTrigger) ? e.some((c) => c.endpoint === i.endpoint && c.method === i.method) || e.push(i) : i.loadTrigger === "action" && (n.some((c) => c.endpoint === i.endpoint && c.method === i.method) || n.push(i));
    }
    return { pageLoad: e, action: n };
  }
  function Rt(e) {
    var n;
    if (!((n = S.value) != null && n.components)) return null;
    for (const t of Object.values(S.value.components))
      if (t.apis) {
        for (const o of t.apis)
          if (o.variable && e.startsWith(o.variable))
            return o;
      }
    return null;
  }
  function Ft(e) {
    const n = e.tagName.toUpperCase();
    return n === "INPUT" || n === "SELECT" || n === "TEXTAREA" ? "form" : n === "BUTTON" || n === "A" && e.hasAttribute("href") || e.getAttribute("role") === "button" || e.closest("button") || e.closest("a[href]") ? "action" : "datasource";
  }
  const K = g([]), De = g(null);
  function Ut() {
    if (typeof document > "u") return [];
    const e = typeof window < "u" ? window.location.pathname : "/", n = [];
    for (const [t, o] of Object.entries(d.value))
      if (!(o.componentPath && !o.componentPath.includes(e) && e !== "/"))
        try {
          document.querySelector(t) || n.push(t);
        } catch {
          n.push(t);
        }
    return K.value = n, n;
  }
  function Mt(e, n) {
    const t = d.value[e];
    if (!t) return;
    const { [e]: o, ...s } = d.value;
    d.value = {
      ...s,
      [n]: { ...t, id: n, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }
    }, K.value = K.value.filter((a) => a !== e), A(() => D());
  }
  function Bt(e) {
    De.value = e, M.value = !0, L.value = !1, B.value = !1;
  }
  function Jt() {
    const e = K.value;
    if (e.length === 0) return;
    const n = { ...d.value };
    for (const t of e)
      delete n[t];
    d.value = n, K.value = [], A(() => D());
  }
  function qt() {
    ce.value = !ce.value;
  }
  function Ht(e) {
    k.value = e;
  }
  function Kt() {
    k.value = null;
  }
  function zt() {
    return JSON.stringify({
      elementConfigs: d.value,
      screenConfigs: b.value
    }, null, 2);
  }
  function xe() {
    const e = {
      _meta: {
        version: "1.0.0",
        description: "Dev Inspector annotations",
        lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
      },
      annotations: d.value,
      screenConfigs: b.value
    };
    return JSON.stringify(e, null, 2);
  }
  function Gt(e = "dev-annotations.json") {
    const n = xe(), t = new Blob([n], { type: "application/json" }), o = URL.createObjectURL(t), s = document.createElement("a");
    s.href = o, s.download = e, document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL(o);
  }
  function Wt(e) {
    try {
      const n = JSON.parse(e), t = n.annotations || n.elementConfigs || n;
      d.value = { ...d.value, ...t }, n.screenConfigs && (b.value = { ...b.value, ...n.screenConfigs });
    } catch (n) {
      throw console.error("[DevInspector] Failed to import configs:", n), new Error("Invalid JSON format");
    }
  }
  function Xt() {
    d.value = {};
  }
  return {
    // State
    isEnabled: U,
    isAvailable: z,
    isEditMode: L,
    isPickMode: M,
    isInitializing: ae,
    hoveredSelector: se,
    currentScreenSpec: Y,
    isPanelOpen: B,
    elementConfigs: d,
    editingElementId: k,
    // Screen configs
    screenConfigs: b,
    editingScreen: ke,
    getScreenConfig: Ye,
    setScreenConfig: Ve,
    deleteScreenConfig: Qe,
    suggestScreenApis: rt,
    // Actions
    init: Je,
    toggle: pt,
    enable: Ie,
    disable: gt,
    toggleEditMode: mt,
    togglePickMode: vt,
    setHoveredSelector: ht,
    generateSelector: x,
    getConfiguredSelectors: yt,
    setScreenSpec: bt,
    clearScreenSpec: St,
    togglePanel: wt,
    openPanel: Ct,
    closePanel: It,
    getElementConfig: Tt,
    setElementConfig: de,
    deleteElementConfig: At,
    startEditing: Ht,
    stopEditing: Kt,
    exportConfigs: zt,
    exportAsFile: xe,
    downloadAnnotations: Gt,
    importConfigs: Wt,
    clearAllConfigs: Xt,
    detectSourceBinding: Te,
    autoDetectElementInfo: Ae,
    // Scan
    isScanning: W,
    scanProgress: X,
    scanResults: te,
    scanCurrentPage: Ee,
    scanAllPages: Et,
    allPagesRoutes: Ne,
    currentScanPage: pe,
    clearScanResults: Nt,
    // Analysis data
    analysisData: S,
    loadAnalysisData: we,
    getAnalyzedElement: qe,
    getAnalyzedElementsForPage: He,
    analysisResults: O,
    applyAnalysisToPage: Pe,
    clearAnalysisResults: Pt,
    removeAnalysisResult: $t,
    clearHiddenSelectors: Dt,
    hiddenAnalysisSelectors: R,
    analysisFilter: Re,
    exportChangesForCli: $e,
    downloadChanges: xt,
    getAvailableBindings: Oe,
    searchBindings: _t,
    getSchemaColumns: Le,
    searchSchemaColumns: jt,
    getCurrentPageApis: kt,
    getApiSourceForBinding: Rt,
    // Note highlights
    showNoteHighlights: ce,
    toggleNoteHighlights: qt,
    noteHighlightFilter: Fe,
    // Element type detection
    detectElementType: Ft,
    // Master definitions
    masterDefinitions: E,
    getMasterDefinition: tt,
    setMasterDefinition: nt,
    deleteMasterDefinition: ot,
    getMastersForTable: at,
    getMasterEntries: st,
    // Broken annotation detection
    brokenAnnotations: K,
    remapTargetId: De,
    detectBrokenAnnotations: Ut,
    remapAnnotation: Mt,
    startRemap: Bt,
    deleteBrokenAnnotations: Jt,
    // Cross Search
    showCrossSearch: Ue,
    crossSearchQuery: ye,
    crossSearchMode: be,
    crossSearchResults: lt,
    // Unannotated Detection
    showUnannotatedDetection: Me,
    unannotatedElements: V,
    detectUnannotatedElements: ut,
    quickAnnotate: ft,
    // Screen Flow
    showScreenFlow: Be,
    screenFlowData: dt,
    // Server sync
    syncClientId: _,
    loadFromServer: Ce,
    saveToServer: fe,
    teardownServerSync: Xe
  };
});
function an() {
  return en();
}
export {
  an as a,
  en as u
};
