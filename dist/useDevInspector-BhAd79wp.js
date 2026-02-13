import { ref as C, computed as ve, watch as Ce, nextTick as M } from "vue";
import { defineStore as Ut } from "pinia";
function E(p) {
  return p.replace(/\|/g, "\\|").replace(/\n/g, " ");
}
function Ue(p) {
  const I = {};
  for (const [x, a] of Object.entries(p)) {
    const F = a.pagePath || "/";
    I[F] || (I[F] = []), I[F].push({ selector: x, config: a });
  }
  return I;
}
function Ft(p) {
  var I, x, a, F, _, q;
  return p.elementType === "form" ? "入力" : p.elementType === "action" ? ((I = p.actionInfo) == null ? void 0 : I.type) === "navigate" ? "リンク" : (((x = p.actionInfo) == null ? void 0 : x.type) === "modal", "ボタン") : p.fieldInfo || ((a = p.note) == null ? void 0 : a.displayType) === "db_direct" || ((F = p.note) == null ? void 0 : F.displayType) === "db_formatted" ? "表示" : ((_ = p.note) == null ? void 0 : _.displayType) === "calculated" ? "表示(計算)" : ((q = p.note) == null ? void 0 : q.displayType) === "static" ? "表示(固定)" : "表示";
}
function qt(p) {
  var I, x, a, F;
  return (I = p.note) != null && I.text ? p.note.text : (x = p.fieldInfo) != null && x.description ? p.fieldInfo.description : p.fieldInfo ? `${p.fieldInfo.table}.${p.fieldInfo.column}` : (a = p.actionInfo) != null && a.description ? p.actionInfo.description : (F = p.formInfo) != null && F.description ? p.formInfo.description : p.id;
}
function Bt(p) {
  var x, a;
  const I = [];
  if (p.fieldInfo && I.push(`DBの${p.fieldInfo.table}.${p.fieldInfo.column}を表示`), ((x = p.note) == null ? void 0 : x.displayType) === "calculated" && p.note.calcDescription && I.push(p.note.calcDescription), p.actionInfo) {
    const _ = {
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行"
    }[p.actionInfo.type] || p.actionInfo.type;
    I.push(`${_}${p.actionInfo.target ? `: ${p.actionInfo.target}` : ""}`);
  }
  return (a = p.formInfo) != null && a.description && I.push(p.formInfo.description), I.join(" / ");
}
function _t(p, I, x) {
  var A, z, O, j, U, X, T, re, V, K, te, Y, Z, ne;
  const a = [];
  a.push("# 画面仕様（SDD）"), a.push("");
  const F = Ue(p), _ = /* @__PURE__ */ new Set([...Object.keys(I), ...Object.keys(F)]);
  for (const D of _) {
    const S = I[D], G = F[D] || [];
    if (a.push(`## ${D} — ${(S == null ? void 0 : S.name) || D}`), a.push(""), a.push("### 画面情報"), S != null && S.auth) {
      const $ = (A = S.auth.roles) != null && A.length ? ` (${S.auth.roles.join(", ")})` : "";
      a.push(`- 認証: ${S.auth.required ? "必須" : "不要"}${$}`);
    }
    S != null && S.componentPath && a.push(`- コンポーネント: ${S.componentPath}`), S != null && S.description && a.push(`- 概要: ${S.description}`), a.push("");
    const H = (S == null ? void 0 : S.apis) || [];
    if (H.length > 0) {
      a.push("### API"), a.push("| メソッド | エンドポイント | タイミング | 説明 |"), a.push("|---------|-------------|----------|------|");
      for (const $ of H) {
        const R = $.loadTiming || "";
        a.push(`| ${$.method} | ${E($.endpoint)} | ${R} | ${E($.description || "")} |`);
      }
      a.push("");
    }
    const oe = G.filter(($) => $.config.elementType === "datasource" || !$.config.elementType && $.config.fieldInfo), Q = G.filter(($) => $.config.elementType === "action" || !$.config.elementType && $.config.actionInfo && !$.config.fieldInfo), le = G.filter(($) => $.config.elementType === "form" || !$.config.elementType && $.config.formInfo && !$.config.fieldInfo && !$.config.actionInfo), pe = G.filter(
      ($) => !oe.includes($) && !Q.includes($) && !le.includes($)
    );
    if (oe.length > 0 || pe.length > 0) {
      a.push("### データソース"), a.push("| セレクタ | DB | 型 | NULL時 | 表示形式 | 計算ロジック |"), a.push("|---------|-----|-----|--------|---------|------------|");
      for (const { selector: $, config: R } of [...oe, ...pe]) {
        const N = R.fieldInfo, se = N ? `${N.table}.${N.column}` : "", B = (N == null ? void 0 : N.type) || "", ae = ((z = R.note) == null ? void 0 : z.nullDisplay) || "-", ie = ((O = R.note) == null ? void 0 : O.displayFormat) || "";
        let ce = "";
        ((j = R.note) == null ? void 0 : j.displayType) === "calculated" && R.note.calcDescription && (ce = R.note.calcDescription), (U = R.note) != null && U.storedCalc && R.note.storedCalcLogic && (ce = R.note.storedCalcLogic), a.push(`| ${E($)} | ${E(se)} | ${E(B)} | ${E(ae)} | ${E(ie)} | ${E(ce)} |`);
      }
      a.push("");
    }
    if (Q.length > 0) {
      a.push("### アクション"), a.push("| セレクタ | タイプ | 遷移先/API | 説明 |"), a.push("|---------|--------|-----------|------|");
      for (const { selector: $, config: R } of Q) {
        const N = R.actionInfo, se = (N == null ? void 0 : N.type) || "";
        let B = (N == null ? void 0 : N.target) || "";
        N != null && N.method && (B = `${N.method} ${B}`);
        const ae = (N == null ? void 0 : N.description) || ((X = R.note) == null ? void 0 : X.text) || "";
        a.push(`| ${E($)} | ${E(se)} | ${E(B)} | ${E(ae)} |`);
      }
      a.push("");
    }
    if (le.length > 0) {
      a.push("### フォーム"), a.push("| セレクタ | DB | 入力タイプ | 必須 | バリデーション | 初期値 |"), a.push("|---------|-----|----------|------|--------------|--------|");
      for (const { selector: $, config: R } of le) {
        const N = R.fieldInfo, se = N ? `${N.table}.${N.column}` : "", B = ((T = R.formInfo) == null ? void 0 : T.inputType) || "", ae = (re = R.formInfo) != null && re.required ? "Yes" : "", ie = [
          ...((V = R.formInfo) == null ? void 0 : V.validation) || [],
          ...(N == null ? void 0 : N.validation) || []
        ].join(", "), ce = ((K = R.formInfo) == null ? void 0 : K.defaultValue) || "";
        a.push(`| ${E($)} | ${E(se)} | ${E(B)} | ${ae} | ${E(ie)} | ${E(ce)} |`);
      }
      a.push("");
    }
    a.push("---"), a.push("");
  }
  const q = [];
  for (const [D, S] of Object.entries(p))
    if (((te = S.actionInfo) == null ? void 0 : te.type) === "navigate" && S.actionInfo.target) {
      const G = S.pagePath || "/";
      q.push({
        from: G,
        to: S.actionInfo.target,
        trigger: S.actionInfo.description || ((Y = S.note) == null ? void 0 : Y.text) || D
      });
    }
  if (q.length > 0) {
    a.push("## 画面フロー"), a.push("| 遷移元 | 遷移先 | トリガー |"), a.push("|--------|--------|---------|");
    for (const D of q) {
      const S = ((Z = I[D.from]) == null ? void 0 : Z.name) || D.from, G = ((ne = I[D.to]) == null ? void 0 : ne.name) || D.to;
      a.push(`| ${E(S)} (${E(D.from)}) | ${E(G)} (${E(D.to)}) | ${E(D.trigger)} |`);
    }
    a.push("");
  }
  const m = Object.values(x);
  if (m.length > 0) {
    a.push("## マスタ定義"), a.push("");
    for (const D of m) {
      a.push(`### ${D.id} — ${D.name} (${D.columnType || ""})`), D.description && (a.push(D.description), a.push("")), a.push("| 値 | ラベル | 説明 |"), a.push("|----|--------|------|");
      for (const S of D.entries)
        a.push(`| ${E(S.value)} | ${E(S.label)} | ${E(S.description || "")} |`);
      a.push("");
    }
  }
  return a.join(`
`);
}
function Mt(p, I, x) {
  var q;
  const a = [];
  a.push("# 画面仕様書"), a.push("");
  const F = Ue(p), _ = /* @__PURE__ */ new Set([...Object.keys(I), ...Object.keys(F)]);
  for (const m of _) {
    const A = I[m], z = F[m] || [];
    if (a.push(`## ${(A == null ? void 0 : A.name) || m}`), a.push(`**URL:** ${m}`), a.push(""), A != null && A.description && (a.push("### 概要"), a.push(A.description), a.push("")), A != null && A.auth) {
      if (a.push("### 認証"), a.push(`- ${A.auth.required ? "ログイン必須" : "ログイン不要"}`), (q = A.auth.roles) != null && q.length) {
        const j = A.auth.roles.map((U) => ({ admin: "管理者", manager: "マネージャー", user: "ユーザー" })[U] || U);
        a.push(`- 権限: ${j.join("、")}`);
      }
      a.push("");
    }
    z.length > 0 && (a.push("### 画面項目"), a.push("| No | 項目名 | 種別 | 説明 | 必須 | 備考 |"), a.push("|----|--------|------|------|------|------|"), z.forEach(({ config: j }, U) => {
      var te, Y, Z, ne;
      const X = qt(j), T = Ft(j), re = Bt(j), V = (te = j.formInfo) != null && te.required ? "必須" : "", K = [];
      (Y = j.note) != null && Y.condition && K.push(j.note.condition), (Z = j.note) != null && Z.unit && K.push(`単位: ${j.note.unit}`), (ne = j.note) != null && ne.nullDisplay && j.note.nullDisplay !== "-" && K.push(`空欄時: ${j.note.nullDisplay}`), a.push(`| ${U + 1} | ${E(X)} | ${T} | ${E(re)} | ${V} | ${E(K.join(" / "))} |`);
    }), a.push(""));
    const O = (A == null ? void 0 : A.apis) || [];
    if (O.length > 0) {
      a.push("### 使用API"), a.push("| メソッド | エンドポイント | 説明 |"), a.push("|---------|-------------|------|");
      for (const j of O)
        a.push(`| ${j.method} | ${E(j.endpoint)} | ${E(j.description || "")} |`);
      a.push("");
    }
    A != null && A.notes && (a.push("### 備考"), a.push(A.notes), a.push("")), a.push("---"), a.push("");
  }
  return a.join(`
`);
}
const Jt = {}, Gt = "devInspector:elementConfigs", Re = "devInspector:screenConfigs", ke = "devInspector:masterDefinitions", Ht = Ut("devInspector", () => {
  const p = C({}), I = C(!1), x = C(!1), a = C(!1), F = C(!1), _ = C(null), q = C(!1), m = C({}), A = C(null), z = C(null), O = C({}), j = C(!1), U = C({}), X = ve(() => p.value.storageKey || Gt), T = C(null), re = C("all"), V = C(!0), K = C("all"), te = C(!1), Y = C(""), Z = C("column"), ne = C(!1), D = C([]), S = C(null), G = C(!1), H = C(/* @__PURE__ */ new Set()), oe = "devInspector:hiddenAnalysisSelectors", Q = ve(() => p.value.enabledInProduction ? !0 : typeof import.meta < "u" && Jt ? !1 : process.env.NODE_ENV === "development"), le = C(!1);
  function pe(e = {}) {
    p.value = e, se(), ae(), Be(), ht(), e.analysisData && (T.value = e.analysisData);
    const t = e.analysisDataUrl ?? "/dev-inspector-analysis.json";
    e.autoLoadAnalysis !== !1 && Q.value && $(t);
  }
  async function $(e) {
    var t;
    try {
      const n = await fetch(e);
      if (n.ok)
        return T.value = await n.json(), console.log("[DevInspector] Analysis data loaded:", Object.keys(((t = T.value) == null ? void 0 : t.components) || {}).length, "components"), !0;
    } catch {
      console.debug("[DevInspector] Analysis data not found at", e);
    }
    return !1;
  }
  function R(e) {
    if (!T.value) return null;
    for (const t of Object.values(T.value.components)) {
      const n = t.elements.find((o) => o.selector === e);
      if (n) return n;
    }
    return null;
  }
  function N(e) {
    if (!T.value) return [];
    const t = [];
    for (const [n, o] of Object.entries(T.value.components))
      (!e || n.includes(e)) && t.push(...o.elements);
    return t;
  }
  function se() {
    try {
      const e = p.value.initialAnnotations || {};
      if (typeof window < "u") {
        const t = localStorage.getItem(X.value), n = t ? JSON.parse(t) : {};
        m.value = { ...e, ...n };
      } else
        m.value = e;
    } catch (e) {
      console.error("[DevInspector] Failed to load configs:", e);
    }
  }
  function B() {
    try {
      if (typeof window < "u") {
        const e = JSON.stringify(m.value);
        localStorage.setItem(X.value, e), console.log("[DevInspector] Saved configs:", Object.keys(m.value).length, "items");
      }
    } catch (e) {
      console.error("[DevInspector] Failed to save configs:", e);
    }
  }
  Ce(m, () => {
    M(() => {
      B();
    });
  }, { deep: !0 });
  function ae() {
    try {
      if (typeof window < "u") {
        const e = localStorage.getItem(Re);
        e && (O.value = JSON.parse(e));
      }
    } catch (e) {
      console.error("[DevInspector] Failed to load screen configs:", e);
    }
  }
  function ie() {
    try {
      if (typeof window < "u") {
        const e = JSON.stringify(O.value);
        localStorage.setItem(Re, e);
      }
    } catch (e) {
      console.error("[DevInspector] Failed to save screen configs:", e);
    }
  }
  Ce(O, () => {
    M(() => {
      ie();
    });
  }, { deep: !0 });
  function ce(e) {
    const t = e || (typeof window < "u" ? window.location.pathname : "/");
    return O.value[t];
  }
  function Fe(e) {
    O.value = {
      ...O.value,
      [e.path]: e
    }, M(() => ie());
  }
  function qe(e) {
    const { [e]: t, ...n } = O.value;
    O.value = n, M(() => ie());
  }
  function Be() {
    try {
      if (typeof window < "u") {
        const e = localStorage.getItem(ke);
        e && (U.value = JSON.parse(e));
      }
    } catch (e) {
      console.error("[DevInspector] Failed to load master definitions:", e);
    }
  }
  function ye() {
    try {
      typeof window < "u" && localStorage.setItem(ke, JSON.stringify(U.value));
    } catch (e) {
      console.error("[DevInspector] Failed to save master definitions:", e);
    }
  }
  Ce(U, () => {
    M(() => {
      ye();
    });
  }, { deep: !0 });
  function _e(e) {
    return U.value[e];
  }
  function Me(e) {
    U.value = {
      ...U.value,
      [e.id]: { ...e, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }
    }, M(() => ye());
  }
  function Je(e) {
    const { [e]: t, ...n } = U.value;
    U.value = n, M(() => ye());
  }
  function Ge(e) {
    return Object.values(U.value).filter((t) => t.table === e);
  }
  function He(e) {
    var t;
    return ((t = U.value[e]) == null ? void 0 : t.entries) || [];
  }
  function We() {
    var o, c, u, r, d;
    const e = [], t = /* @__PURE__ */ new Set(), n = {};
    for (const l of Object.values(m.value)) {
      const g = l.fieldInfoList || (l.fieldInfo ? [l.fieldInfo] : []), i = ((o = l.sourceBinding) == null ? void 0 : o.type) === "v-model";
      for (const s of g)
        s.table && (n[s.table] || (n[s.table] = { read: !1, write: !1, isList: !1 }), n[s.table].read = !0, i && (n[s.table].write = !0));
      if (((c = l.note) == null ? void 0 : c.displayType) === "db_direct" || ((u = l.note) == null ? void 0 : u.displayType) === "db_formatted")
        for (const s of g)
          s.table && n[s.table] && (l.id.includes("tbody") || l.id.includes(" tr") || l.id.includes(" td")) && (n[s.table].isList = !0);
      if (((r = l.actionInfo) == null ? void 0 : r.type) === "api" && l.actionInfo.target) {
        const s = `${l.actionInfo.method || "GET"}:${l.actionInfo.target}`;
        t.has(s) || (t.add(s), e.push({
          method: l.actionInfo.method || "GET",
          endpoint: l.actionInfo.target,
          description: l.actionInfo.description || "",
          loadTiming: "action"
        }));
      }
    }
    for (const [l, g] of Object.entries(n)) {
      if (g.read) {
        const i = g.isList ? `/api/${l}` : `/api/${l}/:id`, s = `GET:${i}`;
        t.has(s) || (t.add(s), e.push({
          method: "GET",
          endpoint: i,
          description: g.isList ? `${l} 一覧取得` : `${l} 詳細取得`,
          loadTiming: "onMount"
        }));
      }
      if (g.write) {
        const i = `/api/${l}/:id`, s = `PUT:${i}`;
        t.has(s) || (t.add(s), e.push({
          method: "PUT",
          endpoint: i,
          description: `${l} 更新`,
          loadTiming: "action"
        }));
      }
    }
    if ((d = T.value) != null && d.components) {
      const l = typeof window < "u" ? window.location.pathname : "/";
      for (const [g, i] of Object.entries(T.value.components)) {
        const s = g.replace(/^pages/, "").replace(/\.vue$/, "").replace(/\/index$/, "").replace(/\[.*?\]/g, "[^/]+");
        let f = !1;
        if (l === "/" && g.includes("index"))
          f = !0;
        else if (g.includes("pages/"))
          try {
            f = !!l.match(new RegExp(`^${s}$`));
          } catch {
          }
        if (f && i.apis)
          for (const h of i.apis) {
            if (!h.endpoint) continue;
            const P = `${h.method}:${h.endpoint}`;
            t.has(P) || (t.add(P), e.push({
              method: h.method,
              endpoint: h.endpoint,
              description: h.variable ? `→ ${h.variable}` : "",
              loadTiming: ["onMount", "useFetch", "useAsyncData"].includes(h.loadTrigger) ? "onMount" : "action"
            }));
          }
      }
    }
    return e;
  }
  const ze = ve(() => {
    var o, c, u, r, d, l, g, i, s, f, h, P, w, y, b;
    const e = Y.value.trim().toLowerCase();
    if (!e) return [];
    const t = Z.value, n = [];
    for (const [L, v] of Object.entries(m.value)) {
      const k = v.pagePath || "/", we = O.value[k], me = (we == null ? void 0 : we.name) || k;
      if (t === "column") {
        const $e = (o = v.fieldInfoList) != null && o.length ? v.fieldInfoList : v.fieldInfo ? [v.fieldInfo] : [];
        for (const J of $e)
          (`${J.table}.${J.column}`.toLowerCase().includes(e) || J.table.toLowerCase().includes(e) || J.column.toLowerCase().includes(e)) && n.push({
            pagePath: k,
            pageName: me,
            selector: L,
            elementType: v.elementType,
            matchedField: `${J.table}.${J.column}`,
            matchContext: `${J.type || ""} ${J.description || ""}`.trim()
          });
        const ge = ((c = v.note) == null ? void 0 : c.calcSources) || [], kt = ((u = v.note) == null ? void 0 : u.storedCalcSources) || [];
        for (const J of [...ge, ...kt])
          J.toLowerCase().includes(e) && n.push({
            pagePath: k,
            pageName: me,
            selector: L,
            elementType: v.elementType,
            matchedField: J,
            matchContext: ((r = v.note) == null ? void 0 : r.calcDescription) || ((d = v.note) == null ? void 0 : d.storedCalcLogic) || "参照元"
          });
      } else if (t === "api")
        (g = (l = v.actionInfo) == null ? void 0 : l.target) != null && g.toLowerCase().includes(e) && n.push({
          pagePath: k,
          pageName: me,
          selector: L,
          elementType: v.elementType,
          matchedField: `${v.actionInfo.method || ""} ${v.actionInfo.target}`.trim(),
          matchContext: v.actionInfo.description || v.actionInfo.type
        });
      else if (t === "text") {
        const $e = [
          (i = v.note) == null ? void 0 : i.text,
          (s = v.note) == null ? void 0 : s.calcDescription,
          (f = v.note) == null ? void 0 : f.formatDescription,
          (h = v.note) == null ? void 0 : h.condition,
          (P = v.actionInfo) == null ? void 0 : P.description,
          (w = v.formInfo) == null ? void 0 : w.description,
          L
          // selector itself
        ].filter(Boolean);
        for (const ge of $e)
          if (ge.toLowerCase().includes(e)) {
            n.push({
              pagePath: k,
              pageName: me,
              selector: L,
              elementType: v.elementType,
              matchedField: ge.substring(0, 60),
              matchContext: ((b = (y = v.note) == null ? void 0 : y.text) == null ? void 0 : b.substring(0, 40)) || ""
            });
            break;
          }
      }
    }
    if (t === "api")
      for (const [L, v] of Object.entries(O.value))
        for (const k of v.apis || [])
          k.endpoint.toLowerCase().includes(e) && n.push({
            pagePath: L,
            pageName: v.name || L,
            selector: "",
            elementType: void 0,
            matchedField: `${k.method} ${k.endpoint}`,
            matchContext: k.description || "画面API"
          });
    return n;
  });
  function Ke() {
    if (typeof document > "u") return [];
    const e = typeof window < "u" ? window.location.pathname : "/", t = /* @__PURE__ */ new Set();
    for (const [i, s] of Object.entries(m.value))
      (!s.pagePath || s.pagePath === e) && t.add(i);
    const n = [], o = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
    function r(i) {
      if (i.closest("[data-dev-inspector]")) return !0;
      const s = ee(i);
      return t.has(s) || o.has(s);
    }
    function d(i, s, f, h) {
      const P = ee(i);
      o.add(P), u.add(i), n.push({ selector: P, tagName: i.tagName.toLowerCase(), category: s, text: f.substring(0, 50), suggestedType: h });
    }
    document.querySelectorAll("[data-di-binding]").forEach((i) => {
      var h;
      const s = i;
      if (s.closest("[data-dev-inspector]")) return;
      const f = s.getAttribute("data-di-binding") || "";
      c.has(f) || r(s) || (c.add(f), d(s, "binding", ((h = s.textContent) == null ? void 0 : h.trim()) || "", "datasource"));
    }), document.querySelectorAll("table").forEach((i) => {
      if (i.closest("[data-dev-inspector]")) return;
      const s = window.getComputedStyle(i);
      if (s.display === "none" || s.visibility === "hidden") return;
      const f = [];
      if (i.querySelectorAll("thead th, thead td").forEach((w) => {
        var y;
        f.push(((y = w.textContent) == null ? void 0 : y.trim()) || "");
      }), f.length === 0) {
        const w = i.querySelector("tr");
        w && w.querySelectorAll("th, td").forEach((y) => {
          var b;
          f.push(((b = y.textContent) == null ? void 0 : b.trim()) || "");
        });
      }
      const h = i.querySelector("tbody tr") || i.querySelectorAll("tr")[f.length > 0 ? 1 : 0];
      if (!h) return;
      h.querySelectorAll("td").forEach((w, y) => {
        var k;
        const b = w, L = ((k = b.textContent) == null ? void 0 : k.trim()) || "";
        if (!L || b.querySelector("[data-di-binding]") || r(b)) return;
        const v = f[y] || `列${y + 1}`;
        d(b, "binding", `${v}: ${L}`, "datasource");
      });
    }), document.querySelectorAll("input, select, textarea").forEach((i) => {
      var P, w;
      const s = i;
      if (s.closest("[data-dev-inspector]") || s.type === "hidden") return;
      const f = window.getComputedStyle(s);
      if (f.display === "none" || f.visibility === "hidden" || r(s)) return;
      const h = ((w = (P = s.closest("label")) == null ? void 0 : P.textContent) == null ? void 0 : w.trim()) || s.getAttribute("aria-label") || s.placeholder || s.name || s.tagName.toLowerCase();
      d(s, "form", h || "", "form");
    });
    const l = /* @__PURE__ */ new Set();
    document.querySelectorAll("table").forEach((i) => {
      const s = i.querySelector("tbody tr") || i.querySelectorAll("tr")[1];
      s && l.add(s);
    }), document.querySelectorAll('button, a[href], [role="button"]').forEach((i) => {
      var w;
      const s = i;
      if (s.closest("[data-dev-inspector]")) return;
      const f = ((w = s.textContent) == null ? void 0 : w.trim()) || "";
      if (!f) return;
      const h = window.getComputedStyle(s);
      if (h.display === "none" || h.visibility === "hidden") return;
      const P = s.closest("tr");
      P && P.closest("table") && !l.has(P) || r(s) || d(s, "action", f, "action");
    });
    const g = n.filter((i) => {
      try {
        const s = document.querySelector(i.selector);
        if (!s) return !0;
        for (const f of u)
          if (f !== s && f.contains(s))
            return !1;
        return !0;
      } catch {
        return !0;
      }
    });
    return D.value = g, g;
  }
  function Xe(e, t) {
    const n = {
      elementType: t,
      pagePath: typeof window < "u" ? window.location.pathname : "/",
      note: { text: "", type: "todo" }
    };
    t === "action" ? n.actionInfo = { type: "function", description: "" } : t === "form" && (n.formInfo = { inputType: "text" }), be(e, n), A.value = e, D.value = D.value.filter((o) => o.selector !== e);
  }
  const Ve = ve(() => {
    var r, d, l, g;
    const e = /* @__PURE__ */ new Map(), t = [], n = /* @__PURE__ */ new Set();
    for (const [i, s] of Object.entries(O.value))
      e.set(i, {
        path: i,
        name: s.name || i,
        annotationCount: Object.values(m.value).filter((f) => f.pagePath === i).length
      });
    for (const [i, s] of Object.entries(m.value))
      if (((r = s.actionInfo) == null ? void 0 : r.type) === "navigate" && s.actionInfo.target) {
        const f = s.pagePath || "/", h = s.actionInfo.target, P = `${f}→${h}`;
        if (!e.has(f)) {
          const w = O.value[f];
          e.set(f, {
            path: f,
            name: (w == null ? void 0 : w.name) || f,
            annotationCount: Object.values(m.value).filter((y) => y.pagePath === f).length
          });
        }
        if (!e.has(h)) {
          const w = O.value[h];
          e.set(h, {
            path: h,
            name: (w == null ? void 0 : w.name) || h,
            annotationCount: Object.values(m.value).filter((y) => y.pagePath === h).length
          });
        }
        if (!n.has(P)) {
          n.add(P);
          let w = s.actionInfo.description || ((d = s.note) == null ? void 0 : d.text) || "";
          if (!w && typeof document < "u")
            try {
              const y = document.querySelector(i);
              y && (w = ((g = (l = y.textContent) == null ? void 0 : l.trim()) == null ? void 0 : g.substring(0, 20)) || "");
            } catch {
            }
          t.push({
            from: f,
            to: h,
            label: w,
            selector: i
          });
        }
      }
    const o = Array.from(e.values()), c = /* @__PURE__ */ new Set();
    for (const i of t)
      c.add(i.from), c.add(i.to);
    const u = o.filter((i) => !c.has(i.path));
    return { nodes: o, edges: t, orphanPages: u };
  });
  async function Ye() {
    Q.value && (I.value ? (I.value = !1, x.value = !1, A.value = null) : await Ie());
  }
  async function Ie() {
    if (!Q.value) return;
    if (T.value && !le.value && p.value.autoApplyAnalysis !== !1) {
      F.value = !0, I.value = !0;
      try {
        await new Promise((t) => setTimeout(t, 300)), Pe(), le.value = !0;
      } finally {
        F.value = !1;
      }
    } else
      I.value = !0;
  }
  function Ze() {
    I.value = !1, x.value = !1, A.value = null;
  }
  function Qe() {
    x.value = !x.value, x.value || (A.value = null), x.value && (a.value = !1);
  }
  function et() {
    a.value = !a.value, a.value && (x.value = !1), z.value = null;
  }
  function tt(e) {
    z.value = e;
  }
  function ee(e) {
    if (e.id)
      return `#${e.id}`;
    if (e.dataset.devId)
      return `[data-dev-id="${e.dataset.devId}"]`;
    const t = [];
    let n = e;
    for (; n && n !== document.body; ) {
      let o = n.tagName.toLowerCase();
      if (n.id) {
        o = `#${n.id}`, t.unshift(o);
        break;
      }
      const c = Array.from(n.classList).filter(
        (r) => !r.startsWith("hover:") && !r.startsWith("focus:") && !r.startsWith("-") && !/[/\[\]()!@#$%^&*=+{}|\\:'"<>,?.~]/.test(r)
      ).slice(0, 2);
      c.length > 0 && (o += "." + c.join("."));
      const u = n.parentElement;
      if (u) {
        const r = Array.from(u.children).filter(
          (d) => d.tagName === n.tagName
        );
        if (r.length > 1) {
          const d = r.indexOf(n) + 1;
          o += `:nth-of-type(${d})`;
        }
      }
      t.unshift(o), n = n.parentElement;
    }
    return t.join(" > ");
  }
  function nt() {
    const e = typeof window < "u" ? window.location.pathname : "/";
    return Object.keys(m.value).filter((t) => {
      const n = m.value[t];
      return n ? (t.includes(">") || t.startsWith("#") || t.startsWith("[") || t.startsWith(".")) && (!n.componentPath || n.componentPath.includes(e) || e === "/") : !1;
    });
  }
  function ot(e) {
    _.value = e;
  }
  function st() {
    _.value = null;
  }
  function at() {
    q.value = !q.value;
  }
  function it() {
    q.value = !0;
  }
  function ct() {
    q.value = !1;
  }
  function rt(e) {
    return m.value[e];
  }
  function be(e, t) {
    var r;
    const n = (/* @__PURE__ */ new Date()).toISOString(), o = m.value[e], c = typeof window < "u" ? window.location.pathname : "/", u = {
      ...o,
      ...t,
      id: e,
      pagePath: t.pagePath || (o == null ? void 0 : o.pagePath) || c,
      componentPath: t.componentPath || ((r = _.value) == null ? void 0 : r.componentPath) || "",
      createdAt: (o == null ? void 0 : o.createdAt) || n,
      updatedAt: n
    };
    m.value = {
      ...m.value,
      [e]: u
    }, M(() => B());
  }
  function lt(e) {
    const { [e]: t, ...n } = m.value;
    m.value = n, M(() => B());
  }
  function Ae(e) {
    var w;
    const t = ((w = e.textContent) == null ? void 0 : w.trim()) || "", n = e.tagName.toUpperCase();
    if (!t && n !== "INPUT" && n !== "SELECT" && n !== "TEXTAREA")
      return null;
    const o = e.__vueParentComponent;
    if (o) {
      const y = o.props || {}, b = o.attrs || {};
      if ("modelValue" in y || "model-value" in b)
        return {
          type: "v-model",
          source: "form binding detected",
          isStatic: !1
        };
    }
    if (n === "INPUT" || n === "SELECT" || n === "TEXTAREA") {
      const y = e.type || "text", b = e.placeholder || "";
      return {
        type: "v-model",
        source: `${n.toLowerCase()}[type=${y}]${b ? ` placeholder="${b}"` : ""}`,
        isStatic: !1
      };
    }
    const c = e.dataset.source || e.dataset.field || e.dataset.bind;
    if (c)
      return {
        type: "prop",
        source: c,
        isStatic: !1
      };
    if (e.closest("tbody") || e.closest('[role="rowgroup"]'))
      return {
        type: "api",
        source: "table data",
        isStatic: !1
      };
    const u = e.closest('ul, ol, [role="list"]');
    if (u && u.children.length > 1)
      return {
        type: "api",
        source: "list item",
        isStatic: !1
      };
    const r = [
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
    for (const y of r) {
      const b = e.closest(y);
      if (b) {
        const L = b.parentElement;
        if (L && Array.from(L.children).filter(
          (k) => k !== b && k.className === b.className
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
      const y = e.parentElement, L = Array.from(y.children).filter((v) => v.tagName === e.tagName);
      if (L.length >= 2 && L.filter(
        (k) => k.children.length === e.children.length
      ).length >= 2)
        return {
          type: "api",
          source: "repeated element",
          isStatic: !1
        };
    }
    const l = [
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
    for (const y of l)
      if (y.test(t))
        return {
          type: "api",
          source: "dynamic data pattern",
          isStatic: !1
        };
    const g = [
      /^[\u4e00-\u9faf]{2,4}$/,
      // Japanese Kanji names (2-4 chars)
      /^[\u3040-\u309f\u30a0-\u30ff]{2,6}$/,
      // Hiragana/Katakana names
      /^[A-Z][a-z]+ [A-Z][a-z]+$/
      // English names like "John Smith"
    ];
    for (const y of g)
      if (y.test(t))
        return {
          type: "api",
          source: "name pattern",
          isStatic: !1
        };
    const s = ["LABEL", "TH", "LEGEND", "FIGCAPTION"].includes(n), h = [
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
    ].some((y) => y.test(t)), P = n === "BUTTON" || e.closest("button") !== null || e.getAttribute("role") === "button";
    return s || h || P && t.length < 20 ? {
      type: "static",
      source: t.substring(0, 50) + (t.length > 50 ? "..." : ""),
      isStatic: !0
    } : t.length <= 10 && /^[\u3040-\u30ff\u4e00-\u9faf]+$/.test(t) ? {
      type: "prop",
      source: "short text (verify manually)",
      isStatic: !1
    } : t.length > 0 && t.length < 200 ? {
      type: "api",
      source: "content (assumed dynamic)",
      isStatic: !1
    } : null;
  }
  function Te(e, t) {
    var f, h, P, w, y;
    const n = {}, o = ((f = e.textContent) == null ? void 0 : f.trim()) || "", c = e.getAttribute("data-di-binding");
    e.getAttribute("data-di-db"), e.getAttribute("data-di-component"), e.getAttribute("data-di-db-comment");
    let u = e;
    if (!c) {
      const b = e.closest("[data-di-binding]");
      b && (u = b);
    }
    const r = u.getAttribute("data-di-binding"), d = u.getAttribute("data-di-db"), l = u.getAttribute("data-di-component"), g = u.getAttribute("data-di-db-type"), i = u.getAttribute("data-di-db-comment");
    if (r || d) {
      if (n.sourceBinding = {
        type: "api",
        source: r || void 0,
        isStatic: !1
      }, d) {
        const [b, L] = d.split(".");
        b && L && (n.fieldInfo = {
          table: b,
          column: L,
          type: g || void 0,
          description: i || void 0
        });
      }
      return l && (n.devMeta = {
        usedComponents: [l]
      }), n.note = {
        type: "info",
        text: `【データバインディング】${r}${d ? ` → ${d}` : ""}`
      }, n;
    }
    const s = Ae(e);
    if (s)
      if (n.sourceBinding = s, s.isStatic)
        n.note = {
          type: "info",
          text: `【固定文言】${o}`
        };
      else if (s.type === "v-model") {
        const b = e.tagName.toUpperCase();
        if (b === "INPUT" || b === "SELECT" || b === "TEXTAREA") {
          const L = e.placeholder || "", v = ((P = (h = e.closest("label")) == null ? void 0 : h.textContent) == null ? void 0 : P.trim()) || e.getAttribute("aria-label") || ((y = (w = document.querySelector(`label[for="${e.id}"]`)) == null ? void 0 : w.textContent) == null ? void 0 : y.trim()) || "";
          n.note = {
            type: "todo",
            text: `【フォーム要素】${v || L || b.toLowerCase()}`
          };
        }
      } else s.type === "api" && (n.note = {
        type: "question",
        text: `【動的データ】${o.substring(0, 100)}${o.length > 100 ? "..." : ""}`
      });
    return n;
  }
  const de = C(!1), fe = C(0), he = C([]);
  async function Ee(e = {}) {
    de.value = !0, fe.value = 0, he.value = [];
    const { rescan: t = !1 } = e;
    if (t) {
      const n = typeof window < "u" ? window.location.pathname : "/", o = Object.keys(m.value).filter((c) => {
        const u = m.value[c];
        return !u.componentPath || u.componentPath.includes(n);
      });
      for (const c of o)
        delete m.value[c];
      M(() => B());
    }
    try {
      const n = [
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
      ].join(","), o = document.querySelectorAll(n), c = [];
      o.forEach((g) => {
        var b;
        const i = g;
        if (i.closest("[data-dev-inspector]")) return;
        const s = window.getComputedStyle(i);
        if (s.display === "none" || s.visibility === "hidden" || s.opacity === "0") return;
        const f = ee(i);
        if (m.value[f]) return;
        const h = i.tagName.toUpperCase(), P = ((b = i.textContent) == null ? void 0 : b.trim()) || "";
        if (h === "INPUT" || h === "SELECT" || h === "TEXTAREA") {
          c.push(i);
          return;
        }
        if (P.length > 300 || P.length === 0 || h === "DIV" && (Array.from(i.childNodes).filter((v) => v.nodeType === Node.TEXT_NODE).map((v) => {
          var k;
          return ((k = v.textContent) == null ? void 0 : k.trim()) || "";
        }).join("").trim().length === 0 || i.children.length > 3))
          return;
        const w = Array.from(i.childNodes).some((L) => {
          var v;
          return L.nodeType === Node.TEXT_NODE && (((v = L.textContent) == null ? void 0 : v.trim()) || "").length > 0;
        }), y = !Array.from(i.children).some((L) => ["DIV", "P", "UL", "OL", "TABLE", "SECTION", "ARTICLE"].includes(L.tagName));
        (w || i.children.length === 0 && P.length > 0 || y) && c.push(i);
      });
      const u = c.length;
      let r = 0, d = 0;
      const l = 20;
      for (let g = 0; g < c.length; g += l) {
        const i = c.slice(g, g + l);
        for (const s of i) {
          const f = ee(s), h = Te(s, f);
          h.sourceBinding && (he.value.push({ selector: f, element: s, detected: h }), be(f, h), d++), r++, fe.value = Math.round(r / u * 100);
        }
        await new Promise((s) => setTimeout(s, 10));
      }
      return d;
    } finally {
      de.value = !1, fe.value = 100;
    }
  }
  const Ne = C([]), Se = C("");
  async function ut(e) {
    var n;
    if (!e)
      return console.warn("[DevInspector] Router not provided for all pages scan"), [];
    de.value = !0;
    const t = [];
    try {
      const o = e.getRoutes(), c = [];
      for (const u of o)
        u.path.includes(":") && !u.path.includes("?") || u.redirect || u.path !== "/:pathMatch(.*)*" && ((n = u.meta) != null && n.devInspectorSkip || c.push(u.path));
      Ne.value = c;
      for (const u of c) {
        Se.value = u;
        try {
          await e.push(u), await new Promise((d) => setTimeout(d, 500));
          const r = await Ee();
          t.push({ page: u, count: r });
        } catch (r) {
          console.warn(`[DevInspector] Failed to scan page ${u}:`, r), t.push({ page: u, count: 0 });
        }
      }
      return t;
    } finally {
      de.value = !1, Se.value = "";
    }
  }
  function dt() {
    he.value = [], fe.value = 0;
  }
  const W = C([]);
  async function Pe() {
    var u;
    if (!T.value)
      return console.warn("[DevInspector] No analysis data loaded. Call loadAnalysisData first."), 0;
    W.value = [];
    const e = typeof window < "u" ? window.location.pathname : "/", t = (r) => {
      if (!T.value) return null;
      for (const [d, l] of Object.entries(T.value.components))
        if (l.componentName === r || l.componentName.toLowerCase() === r.toLowerCase() || d.toLowerCase().includes(`/${r.toLowerCase()}.vue`))
          return l;
      return null;
    }, n = (r, d = /* @__PURE__ */ new Set()) => {
      const l = [];
      if (d.has(r.componentName)) return l;
      if (d.add(r.componentName), l.push(...r.elements), r.usedComponents)
        for (const g of r.usedComponents) {
          const i = t(g);
          i && l.push(...n(i, d));
        }
      return l;
    }, o = [], c = /* @__PURE__ */ new Set();
    for (const [r, d] of Object.entries(T.value.components)) {
      const l = r.replace(/^pages/, "").replace(/\.vue$/, "").replace(/\/index$/, "").replace(/\[.*?\]/g, "[^/]+");
      let g = !1;
      if ((e === "/" && r.includes("index") || r.includes("pages/") && e.match(new RegExp(`^${l}$`))) && (g = !0), g) {
        const i = n(d);
        o.push(...i), c.add(d.componentName), d.usedComponents && d.usedComponents.forEach((s) => c.add(s));
      }
    }
    for (const [r, d] of Object.entries(T.value.components))
      r.includes("components/") && !c.has(d.componentName) && o.push(...d.elements);
    for (const r of o) {
      if (H.value.has(r.selector))
        continue;
      let d = !1, l = r.selector;
      try {
        document.querySelector(r.selector) && (d = !0);
      } catch {
      }
      if (!d && r.text && !r.binding) {
        const g = r.text.replace(/\[コメント\]\s*/, ""), i = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT,
          null
        );
        for (; i.nextNode(); ) {
          const s = i.currentNode;
          if ((u = s.textContent) != null && u.includes(g)) {
            const f = s.parentElement;
            if (f) {
              d = !0, l = ee(f);
              break;
            }
          }
        }
      }
      if (!d && r.selector.includes(".")) {
        const g = r.selector.match(/^(\w+)\.(.+)$/);
        if (g) {
          const [, i, s] = g;
          try {
            const f = document.querySelector(r.selector);
            f && (d = !0, l = ee(f));
          } catch {
          }
        }
      }
      if (!d && r.binding) {
        const g = `[data-bind="${r.binding}"]`;
        try {
          const i = document.querySelector(g);
          i && (d = !0, l = ee(i));
        } catch {
        }
      }
      W.value.push({
        selector: l,
        element: r,
        matched: d
      });
    }
    return console.log(`[DevInspector] Applied analysis: ${W.value.filter((r) => r.matched).length}/${W.value.length} elements matched`), W.value.filter((r) => r.matched).length;
  }
  function ft() {
    W.value = [];
  }
  function pt(e) {
    W.value = W.value.filter((t) => t.selector !== e), H.value.add(e), mt();
  }
  function ht() {
    try {
      const e = localStorage.getItem(oe);
      e && (H.value = new Set(JSON.parse(e)));
    } catch {
    }
  }
  function mt() {
    try {
      localStorage.setItem(
        oe,
        JSON.stringify([...H.value])
      );
    } catch {
    }
  }
  function gt() {
    H.value.clear(), localStorage.removeItem(oe);
  }
  function Le() {
    const e = {
      removed: [...H.value],
      exportedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    return JSON.stringify(e, null, 2);
  }
  function vt(e = "dev-inspector-changes.json") {
    const t = Le(), n = new Blob([t], { type: "application/json" }), o = URL.createObjectURL(n), c = document.createElement("a");
    c.href = o, c.download = e, document.body.appendChild(c), c.click(), document.body.removeChild(c), URL.revokeObjectURL(o);
  }
  function Oe() {
    if (!T.value) return [];
    const e = [], t = /* @__PURE__ */ new Set();
    for (const n of Object.values(T.value.components))
      for (const o of n.elements)
        o.binding && !t.has(o.binding) && (t.add(o.binding), e.push({
          binding: o.binding,
          db: o.db,
          api: o.api,
          component: n.componentName
        }));
    return e.sort((n, o) => n.db && !o.db ? -1 : !n.db && o.db ? 1 : n.binding.localeCompare(o.binding));
  }
  function yt(e) {
    const t = Oe();
    if (!e) return t;
    const n = e.toLowerCase();
    return t.filter(
      (o) => {
        var c, u;
        return o.binding.toLowerCase().includes(n) || ((c = o.db) == null ? void 0 : c.table.toLowerCase().includes(n)) || ((u = o.db) == null ? void 0 : u.column.toLowerCase().includes(n)) || o.component.toLowerCase().includes(n);
      }
    );
  }
  function De() {
    var t, n;
    if (!((n = (t = T.value) == null ? void 0 : t.dbSchema) != null && n.tables)) return [];
    const e = [];
    for (const [o, c] of Object.entries(T.value.dbSchema.tables))
      for (const [u, r] of Object.entries(c.columns))
        e.push({
          table: o,
          column: u,
          type: r.type,
          comment: r.comment,
          fullName: `${o}.${u}`
        });
    return e.sort((o, c) => o.table !== c.table ? o.table.localeCompare(c.table) : o.column.localeCompare(c.column));
  }
  function bt(e) {
    const t = De();
    if (!e) return t;
    const n = e.toLowerCase();
    return t.filter(
      (o) => {
        var c;
        return o.table.toLowerCase().includes(n) || o.column.toLowerCase().includes(n) || o.fullName.toLowerCase().includes(n) || ((c = o.comment) == null ? void 0 : c.toLowerCase().includes(n));
      }
    );
  }
  function St() {
    var n, o;
    const e = [], t = [];
    if (!((n = T.value) != null && n.components)) return { pageLoad: e, action: t };
    for (const c of W.value) {
      if (!c.matched) continue;
      const u = c.element.component;
      if (u && ((o = T.value.components[u]) != null && o.apis))
        for (const r of T.value.components[u].apis)
          ["onMount", "useFetch", "useAsyncData"].includes(r.loadTrigger) ? e.some((d) => d.endpoint === r.endpoint && d.method === r.method) || e.push(r) : r.loadTrigger === "action" && (t.some((d) => d.endpoint === r.endpoint && d.method === r.method) || t.push(r));
    }
    return { pageLoad: e, action: t };
  }
  function wt(e) {
    var t;
    if (!((t = T.value) != null && t.components)) return null;
    for (const n of Object.values(T.value.components))
      if (n.apis) {
        for (const o of n.apis)
          if (o.variable && e.startsWith(o.variable))
            return o;
      }
    return null;
  }
  function $t(e) {
    const t = e.tagName.toUpperCase();
    return t === "INPUT" || t === "SELECT" || t === "TEXTAREA" ? "form" : t === "BUTTON" || t === "A" && e.hasAttribute("href") || e.getAttribute("role") === "button" || e.closest("button") || e.closest("a[href]") ? "action" : "datasource";
  }
  const ue = C([]), xe = C(null);
  function Ct() {
    if (typeof document > "u") return [];
    const e = typeof window < "u" ? window.location.pathname : "/", t = [];
    for (const [n, o] of Object.entries(m.value))
      if (!(o.componentPath && !o.componentPath.includes(e) && e !== "/"))
        try {
          document.querySelector(n) || t.push(n);
        } catch {
          t.push(n);
        }
    return ue.value = t, t;
  }
  function It(e, t) {
    const n = m.value[e];
    if (!n) return;
    const { [e]: o, ...c } = m.value;
    m.value = {
      ...c,
      [t]: { ...n, id: t, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }
    }, ue.value = ue.value.filter((u) => u !== e), M(() => B());
  }
  function At(e) {
    xe.value = e, a.value = !0, x.value = !1, q.value = !1;
  }
  function Tt() {
    const e = ue.value;
    if (e.length === 0) return;
    const t = { ...m.value };
    for (const n of e)
      delete t[n];
    m.value = t, ue.value = [], M(() => B());
  }
  function Et() {
    V.value = !V.value;
  }
  function Nt(e) {
    A.value = e;
  }
  function Pt() {
    A.value = null;
  }
  function Lt() {
    return JSON.stringify({
      elementConfigs: m.value,
      screenConfigs: O.value
    }, null, 2);
  }
  function je() {
    const e = {
      _meta: {
        version: "1.0.0",
        description: "Dev Inspector annotations",
        lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
      },
      annotations: m.value,
      screenConfigs: O.value
    };
    return JSON.stringify(e, null, 2);
  }
  function Ot(e = "dev-annotations.json") {
    const t = je(), n = new Blob([t], { type: "application/json" }), o = URL.createObjectURL(n), c = document.createElement("a");
    c.href = o, c.download = e, document.body.appendChild(c), c.click(), document.body.removeChild(c), URL.revokeObjectURL(o);
  }
  function Dt(e) {
    try {
      const t = JSON.parse(e), n = t.annotations || t.elementConfigs || t;
      m.value = { ...m.value, ...n }, t.screenConfigs && (O.value = { ...O.value, ...t.screenConfigs });
    } catch (t) {
      throw console.error("[DevInspector] Failed to import configs:", t), new Error("Invalid JSON format");
    }
  }
  function xt() {
    m.value = {};
  }
  function jt(e = "screen-spec-sdd.md") {
    const t = _t(m.value, O.value, U.value), n = new Blob([t], { type: "text/markdown;charset=utf-8" }), o = URL.createObjectURL(n), c = document.createElement("a");
    c.href = o, c.download = e, document.body.appendChild(c), c.click(), document.body.removeChild(c), URL.revokeObjectURL(o);
  }
  function Rt(e = "screen-spec-client.md") {
    const t = Mt(m.value, O.value, U.value), n = new Blob([t], { type: "text/markdown;charset=utf-8" }), o = URL.createObjectURL(n), c = document.createElement("a");
    c.href = o, c.download = e, document.body.appendChild(c), c.click(), document.body.removeChild(c), URL.revokeObjectURL(o);
  }
  return {
    // State
    isEnabled: I,
    isAvailable: Q,
    isEditMode: x,
    isPickMode: a,
    isInitializing: F,
    hoveredSelector: z,
    currentScreenSpec: _,
    isPanelOpen: q,
    elementConfigs: m,
    editingElementId: A,
    // Screen configs
    screenConfigs: O,
    editingScreen: j,
    getScreenConfig: ce,
    setScreenConfig: Fe,
    deleteScreenConfig: qe,
    suggestScreenApis: We,
    // Actions
    init: pe,
    toggle: Ye,
    enable: Ie,
    disable: Ze,
    toggleEditMode: Qe,
    togglePickMode: et,
    setHoveredSelector: tt,
    generateSelector: ee,
    getConfiguredSelectors: nt,
    setScreenSpec: ot,
    clearScreenSpec: st,
    togglePanel: at,
    openPanel: it,
    closePanel: ct,
    getElementConfig: rt,
    setElementConfig: be,
    deleteElementConfig: lt,
    startEditing: Nt,
    stopEditing: Pt,
    exportConfigs: Lt,
    exportAsFile: je,
    downloadAnnotations: Ot,
    downloadSddSpec: jt,
    downloadClientSpec: Rt,
    importConfigs: Dt,
    clearAllConfigs: xt,
    detectSourceBinding: Ae,
    autoDetectElementInfo: Te,
    // Scan
    isScanning: de,
    scanProgress: fe,
    scanResults: he,
    scanCurrentPage: Ee,
    scanAllPages: ut,
    allPagesRoutes: Ne,
    currentScanPage: Se,
    clearScanResults: dt,
    // Analysis data
    analysisData: T,
    loadAnalysisData: $,
    getAnalyzedElement: R,
    getAnalyzedElementsForPage: N,
    analysisResults: W,
    applyAnalysisToPage: Pe,
    clearAnalysisResults: ft,
    removeAnalysisResult: pt,
    clearHiddenSelectors: gt,
    hiddenAnalysisSelectors: H,
    analysisFilter: re,
    exportChangesForCli: Le,
    downloadChanges: vt,
    getAvailableBindings: Oe,
    searchBindings: yt,
    getSchemaColumns: De,
    searchSchemaColumns: bt,
    getCurrentPageApis: St,
    getApiSourceForBinding: wt,
    // Note highlights
    showNoteHighlights: V,
    toggleNoteHighlights: Et,
    noteHighlightFilter: K,
    // Element type detection
    detectElementType: $t,
    // Master definitions
    masterDefinitions: U,
    getMasterDefinition: _e,
    setMasterDefinition: Me,
    deleteMasterDefinition: Je,
    getMastersForTable: Ge,
    getMasterEntries: He,
    // Broken annotation detection
    brokenAnnotations: ue,
    remapTargetId: xe,
    detectBrokenAnnotations: Ct,
    remapAnnotation: It,
    startRemap: At,
    deleteBrokenAnnotations: Tt,
    // Cross Search
    showCrossSearch: te,
    crossSearchQuery: Y,
    crossSearchMode: Z,
    crossSearchResults: ze,
    // Unannotated Detection
    showUnannotatedDetection: ne,
    unannotatedElements: D,
    hoveredUnannotatedSelector: S,
    detectUnannotatedElements: Ke,
    quickAnnotate: Xe,
    // Screen Flow
    showScreenFlow: G,
    screenFlowData: Ve
  };
});
function Xt() {
  return Ht();
}
export {
  Xt as a,
  Ht as u
};
