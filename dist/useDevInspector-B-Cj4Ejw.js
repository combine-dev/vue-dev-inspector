import { ref as N, computed as Oe, watch as ze, nextTick as ce } from "vue";
import { defineStore as bn } from "pinia";
function p(v) {
  return v.replace(/\|/g, "\\|").replace(/\n/g, " ");
}
function vt(v) {
  const I = {};
  for (const [k, D] of Object.entries(v)) {
    const t = D.pagePath || "/";
    I[t] || (I[t] = []), I[t].push({ selector: k, config: D });
  }
  return I;
}
function yn(v) {
  var I, k, D, t, W, Z;
  return v.elementType === "chart" ? "チャート" : v.elementType === "form" ? "入力" : v.elementType === "action" ? ((I = v.actionInfo) == null ? void 0 : I.type) === "navigate" ? "リンク" : (((k = v.actionInfo) == null ? void 0 : k.type) === "modal", "ボタン") : v.fieldInfo || ((D = v.note) == null ? void 0 : D.displayType) === "db_direct" || ((t = v.note) == null ? void 0 : t.displayType) === "db_formatted" ? "表示" : ((W = v.note) == null ? void 0 : W.displayType) === "calculated" ? "表示(計算)" : ((Z = v.note) == null ? void 0 : Z.displayType) === "static" ? "表示(固定)" : "表示";
}
function $n(v) {
  var I, k, D, t;
  return (I = v.note) != null && I.text ? v.note.text : (k = v.fieldInfo) != null && k.description ? v.fieldInfo.description : v.fieldInfo ? `${v.fieldInfo.table}.${v.fieldInfo.column}` : (D = v.actionInfo) != null && D.description ? v.actionInfo.description : (t = v.formInfo) != null && t.description ? v.formInfo.description : v.id;
}
function Sn(v) {
  var k, D;
  const I = [];
  if (v.fieldInfo && I.push(`DBの${v.fieldInfo.table}.${v.fieldInfo.column}を表示`), ((k = v.note) == null ? void 0 : k.displayType) === "calculated" && v.note.calcDescription && I.push(v.note.calcDescription), v.actionInfo) {
    const W = {
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行",
      csv_export: "CSV出力",
      csv_import: "CSV取込",
      email: "メール送信"
    }[v.actionInfo.type] || v.actionInfo.type;
    I.push(`${W}${v.actionInfo.target ? `: ${v.actionInfo.target}` : ""}`);
  }
  return (D = v.formInfo) != null && D.description && I.push(v.formInfo.description), I.join(" / ");
}
function bt(v) {
  const I = [], k = {}, D = {}, t = [];
  for (const W of v)
    if (W.config.isConditional) {
      const Z = W.config.modalName;
      Z ? (D[Z] || (D[Z] = []), D[Z].push(W)) : t.push(W);
    } else if (W.config.tabContext) {
      const Z = W.config.tabContext;
      k[Z] || (k[Z] = []), k[Z].push(W);
    } else
      I.push(W);
  return { common: I, tabs: k, modals: D, unnamedModals: t };
}
function yt(v) {
  var Z, S, ae;
  const I = [], k = /* @__PURE__ */ new Set();
  for (const se of Object.values(v))
    if ((Z = se.auth) != null && Z.roles)
      for (const P of se.auth.roles)
        k.add(P);
  const D = [...k].sort();
  if (D.length === 0 && !Object.values(v).some((se) => se.auth))
    return I;
  I.push("## 権限マトリクス");
  const t = D.map((se) => ` ${se} `).join("|");
  I.push(`| 画面 | パス | 認証 |${t ? t + "|" : ""}`);
  const W = D.map(() => "------").join("|");
  I.push(`|------|------|------|${W ? W + "|" : ""}`);
  for (const [se, P] of Object.entries(v)) {
    const he = P.name || se, ne = (S = P.auth) != null && S.required ? "必須" : "不要";
    if ((ae = P.auth) != null && ae.required) {
      const Q = P.auth.roles || [], re = D.map((j) => Q.length === 0 || Q.includes(j) ? " ○ " : " × ").join("|");
      I.push(`| ${p(he)} | ${p(se)} | ${ne} |${re ? re + "|" : ""}`);
    } else {
      const Q = D.map(() => " - ").join("|");
      I.push(`| ${p(he)} | ${p(se)} | ${ne} |${Q ? Q + "|" : ""}`);
    }
  }
  return I.push(""), I;
}
function wn(v, I, k, D = {}) {
  var he, ne, Q, re, j, Te, ve, ee, _, z, me, te, be, le, Se, E;
  const t = [];
  t.push("# 画面仕様（SDD）"), t.push("");
  const W = vt(v), Z = /* @__PURE__ */ new Set([...Object.keys(I), ...Object.keys(W)]);
  for (const r of Z) {
    let m = function(T, y) {
      var M, B, ue, xe, Le, Fe, Ue, He, Ge;
      const h = T.filter((X) => X.config.elementType === "datasource" || !X.config.elementType && X.config.fieldInfo), H = T.filter((X) => X.config.elementType === "action" || !X.config.elementType && X.config.actionInfo && !X.config.fieldInfo), J = T.filter((X) => X.config.elementType === "form" || !X.config.elementType && X.config.formInfo && !X.config.fieldInfo && !X.config.actionInfo), q = T.filter(
        (X) => !h.includes(X) && !H.includes(X) && !J.includes(X)
      );
      if (h.length > 0 || q.length > 0) {
        t.push(`${y} データソース`), t.push("| セレクタ | DB | 型 | NULL時 | 表示形式 | 計算ロジック |"), t.push("|---------|-----|-----|--------|---------|------------|");
        for (const { selector: X, config: ie } of [...h, ...q]) {
          const V = ie.fieldInfo, Ee = V ? `${V.table}.${V.column}` : "", $e = (V == null ? void 0 : V.type) || "", Ie = ((M = ie.note) == null ? void 0 : M.nullDisplay) || "-", ke = ((B = ie.note) == null ? void 0 : B.displayFormat) || "";
          let Ne = "";
          ((ue = ie.note) == null ? void 0 : ue.displayType) === "calculated" && ie.note.calcDescription && (Ne = ie.note.calcDescription), (xe = ie.note) != null && xe.storedCalc && ie.note.storedCalcLogic && (Ne = ie.note.storedCalcLogic), t.push(`| ${p(X)} | ${p(Ee)} | ${p($e)} | ${p(Ie)} | ${p(ke)} | ${p(Ne)} |`);
        }
        t.push("");
      }
      if (H.length > 0) {
        t.push(`${y} アクション`), t.push("| セレクタ | タイプ | 遷移先/API | 説明 |"), t.push("|---------|--------|-----------|------|");
        for (const { selector: X, config: ie } of H) {
          const V = ie.actionInfo, Ee = (V == null ? void 0 : V.type) || "";
          let $e = (V == null ? void 0 : V.target) || "";
          V != null && V.method && ($e = `${V.method} ${$e}`);
          const Ie = (V == null ? void 0 : V.description) || ((Le = ie.note) == null ? void 0 : Le.text) || "";
          t.push(`| ${p(X)} | ${p(Ee)} | ${p($e)} | ${p(Ie)} |`);
        }
        t.push("");
      }
      if (J.length > 0) {
        t.push(`${y} フォーム`), t.push("| セレクタ | DB | 入力タイプ | 必須 | バリデーション | 初期値 |"), t.push("|---------|-----|----------|------|--------------|--------|");
        for (const { selector: X, config: ie } of J) {
          const V = ie.fieldInfo, Ee = V ? `${V.table}.${V.column}` : "", $e = ((Fe = ie.formInfo) == null ? void 0 : Fe.inputType) || "", Ie = (Ue = ie.formInfo) != null && Ue.required ? "Yes" : "", ke = [
            ...((He = ie.formInfo) == null ? void 0 : He.validation) || [],
            ...(V == null ? void 0 : V.validation) || []
          ].join(", "), Ne = ((Ge = ie.formInfo) == null ? void 0 : Ge.defaultValue) || "";
          t.push(`| ${p(X)} | ${p(Ee)} | ${p($e)} | ${Ie} | ${p(ke)} | ${p(Ne)} |`);
        }
        t.push("");
      }
    };
    const $ = I[r], O = W[r] || [];
    if (t.push(`## ${r} — ${($ == null ? void 0 : $.name) || r}`), t.push(""), t.push("### 画面情報"), $ != null && $.auth) {
      const T = (he = $.auth.roles) != null && he.length ? ` (${$.auth.roles.join(", ")})` : "";
      t.push(`- 認証: ${$.auth.required ? "必須" : "不要"}${T}`);
    }
    $ != null && $.componentPath && t.push(`- コンポーネント: ${$.componentPath}`), $ != null && $.description && t.push(`- 概要: ${$.description}`), t.push("");
    const F = ($ == null ? void 0 : $.apis) || [];
    if (F.length > 0) {
      t.push("### API"), t.push("| メソッド | エンドポイント | タイミング | 説明 |"), t.push("|---------|-------------|----------|------|");
      for (const T of F) {
        const y = T.loadTiming || "";
        t.push(`| ${T.method} | ${p(T.endpoint)} | ${y} | ${p(T.description || "")} |`);
      }
      t.push("");
    }
    const { common: K, tabs: U, modals: Y, unnamedModals: we } = bt(O), je = Object.keys(U).length > 0, Re = Object.keys(Y).length > 0 || we.length > 0;
    if (je || Re) {
      K.length > 0 && (t.push("### ページ共通"), t.push(""), m(K, "####"));
      for (const [T, y] of Object.entries(U))
        t.push(`### ${T}タブ`), t.push(""), m(y, "####");
      for (const [T, y] of Object.entries(Y))
        t.push(`### モーダル: ${T}`), t.push(""), m(y, "####");
      we.length > 0 && (t.push("### モーダル要素"), t.push(""), m(we, "####"));
    } else
      m(K, "###");
    const fe = O.filter(
      (T) => {
        var y, h;
        return ((y = T.config.actionInfo) == null ? void 0 : y.type) === "csv_export" || ((h = T.config.actionInfo) == null ? void 0 : h.type) === "csv_import";
      }
    );
    if (fe.length > 0) {
      t.push("### CSV仕様");
      for (const { config: T } of fe) {
        const y = T.actionInfo, h = y.csvSpec, H = y.type === "csv_export" ? "CSV出力" : "CSV取込", J = y.description || ((ne = T.note) == null ? void 0 : ne.text) || "";
        if (t.push(`#### ${H}: ${J}`), t.push(""), h) {
          const q = [];
          if (h.encoding && q.push(`- エンコーディング: ${h.encoding}`), h.delimiter) {
            const M = { ",": "カンマ", "	": "タブ", "|": "パイプ" };
            q.push(`- 区切り文字: ${M[h.delimiter] || h.delimiter}`);
          }
          if (h.hasHeaderRow !== void 0 && q.push(`- ヘッダー行: ${h.hasHeaderRow ? "あり" : "なし"}`), h.filenamePattern && q.push(`- ファイル名: ${h.filenamePattern}`), q.length > 0 && (t.push("**ファイル設定**"), t.push(...q), t.push("")), h.columns.length > 0 && (h.columns.some((B) => B.processing) ? (t.push("| No | 項目名 | DBマッピング | 加工ロジック | 型 | 必須 | バリデーション | フォーマット | 説明 |"), t.push("|----|--------|-------------|------------|-----|------|--------------|------------|------|"), h.columns.forEach((B, ue) => {
            t.push(`| ${ue + 1} | ${p(B.name)} | ${p(B.dbMapping || "")} | ${p(B.processing || "")} | ${p(B.type || "")} | ${B.required ? "Yes" : ""} | ${p(B.validation || "")} | ${p(B.format || "")} | ${p(B.description || "")} |`);
          })) : (t.push("| No | 項目名 | DBマッピング | 型 | 必須 | バリデーション | フォーマット | 説明 |"), t.push("|----|--------|-------------|-----|------|--------------|------------|------|"), h.columns.forEach((B, ue) => {
            t.push(`| ${ue + 1} | ${p(B.name)} | ${p(B.dbMapping || "")} | ${p(B.type || "")} | ${B.required ? "Yes" : ""} | ${p(B.validation || "")} | ${p(B.format || "")} | ${p(B.description || "")} |`);
          })), t.push("")), y.type === "csv_export") {
            const M = [];
            h.sortOrder && M.push(`- ソート: ${h.sortOrder}`), h.filterCondition && M.push(`- 抽出条件: ${h.filterCondition}`), h.maxRows && M.push(`- 最大行数: ${h.maxRows}`), M.length > 0 && (t.push("**出力オプション**"), t.push(...M), t.push(""));
          }
          if (y.type === "csv_import") {
            const M = [], B = {
              stop_on_first: "最初のエラーで停止",
              skip_and_continue: "スキップして続行",
              collect_all: "全エラー収集"
            }, ue = {
              skip: "スキップ",
              overwrite: "上書き",
              error: "エラー"
            };
            h.errorHandling && M.push(`- エラー処理: ${B[h.errorHandling] || h.errorHandling}`), h.duplicateHandling && M.push(`- 重複処理: ${ue[h.duplicateHandling] || h.duplicateHandling}`), h.preValidation && M.push(`- 事前バリデーション: ${h.preValidation}`), M.length > 0 && (t.push("**取込オプション**"), t.push(...M), t.push(""));
          }
          if (h.errorDefs && h.errorDefs.length > 0) {
            t.push("**エラー定義**"), t.push("| 対象列 | エラー条件 | エラーメッセージ | 種別 |"), t.push("|--------|----------|----------------|------|");
            for (const M of h.errorDefs) {
              const B = M.severity === "warning" ? "警告" : "エラー";
              t.push(`| ${p(M.column || "（全体）")} | ${p(M.condition)} | ${p(M.message)} | ${B} |`);
            }
            t.push("");
          }
        }
      }
    }
    const ye = O.filter((T) => {
      var y;
      return ((y = T.config.actionInfo) == null ? void 0 : y.type) === "email";
    });
    if (ye.length > 0) {
      t.push("### メール送信仕様");
      for (const { config: T } of ye) {
        const y = T.actionInfo, h = y.emailSpec, H = y.description || ((Q = T.note) == null ? void 0 : Q.text) || "";
        t.push(`#### メール送信: ${H}`), h && (h.trigger && t.push(`- トリガー: ${h.trigger}`), h.to && t.push(`- 宛先: ${h.to}`), h.cc && t.push(`- CC: ${h.cc}`), h.bcc && t.push(`- BCC: ${h.bcc}`), h.subject && t.push(`- 件名: ${h.subject}`), h.bodyTemplate && t.push(`- 本文概要: ${h.bodyTemplate}`), h.templatePath && t.push(`- テンプレート: ${h.templatePath}`), h.variables && h.variables.length > 0 && t.push(`- 差し込み変数: ${h.variables.join(", ")}`), h.attachments && t.push(`- 添付ファイル: ${h.attachments}`), h.conditions && t.push(`- 送信条件: ${h.conditions}`), h.errorHandling && t.push(`- エラー処理: ${h.errorHandling}`)), t.push("");
      }
    }
    const de = O.filter((T) => {
      var y, h;
      return ((y = T.config.actionInfo) == null ? void 0 : y.type) === "sort" && ((h = T.config.actionInfo) == null ? void 0 : h.sortSpec);
    });
    if (de.length > 0) {
      t.push("### ソート定義");
      const T = (Te = (j = (re = de.find((H) => {
        var J, q;
        return (q = (J = H.config.actionInfo) == null ? void 0 : J.sortSpec) == null ? void 0 : q.unsortedOrder;
      })) == null ? void 0 : re.config.actionInfo) == null ? void 0 : j.sortSpec) == null ? void 0 : Te.unsortedOrder;
      T && (t.push(`- 未ソート時の並び順: ${T}`), t.push(""));
      const y = de.find((H) => {
        var J, q;
        return (q = (J = H.config.actionInfo) == null ? void 0 : J.sortSpec) == null ? void 0 : q.isDefaultSort;
      });
      if (y) {
        const H = y.config.actionInfo.sortSpec, J = H.defaultDirection === "desc" ? "降順" : "昇順";
        t.push(`- デフォルトソート: ${H.sortKey || ((ve = y.config.actionInfo) == null ? void 0 : ve.description) || y.selector} (${J})`), t.push("");
      }
      const h = de.filter((H) => {
        var J, q;
        return (q = (J = H.config.actionInfo) == null ? void 0 : J.sortSpec) == null ? void 0 : q.sortable;
      });
      if (h.length > 0) {
        t.push("| 項目 | ソートキー | データ型 | デフォルト方向 | 備考 |"), t.push("|------|----------|---------|-------------|------|");
        for (const { config: H } of h) {
          const J = H.actionInfo.sortSpec, q = (ee = H.actionInfo) != null && ee.description || (_ = H.note) != null && _.text || H.fieldInfo ? `${(z = H.fieldInfo) == null ? void 0 : z.table}.${(me = H.fieldInfo) == null ? void 0 : me.column}` : H.id, M = { string: "文字列", number: "数値", date: "日付", custom: "カスタム" }, B = J.sortType ? M[J.sortType] || J.sortType : "", ue = J.defaultDirection === "desc" ? "降順" : J.defaultDirection === "asc" ? "昇順" : "", xe = [
            J.isDefaultSort ? "初期ソート" : "",
            J.description || ""
          ].filter(Boolean).join(" / ");
          t.push(`| ${p(q)} | ${p(J.sortKey || "")} | ${B} | ${ue} | ${p(xe)} |`);
        }
        t.push("");
      }
    }
    const Ae = O.filter((T) => T.config.elementType === "chart" && T.config.chartSpec);
    if (Ae.length > 0) {
      t.push("### チャート仕様");
      for (const { config: T } of Ae) {
        const y = T.chartSpec, H = {
          bar: "棒グラフ",
          line: "折れ線グラフ",
          pie: "円グラフ",
          area: "エリアチャート",
          scatter: "散布図",
          doughnut: "ドーナツ",
          radar: "レーダー",
          other: "その他"
        }[y.chartType] || y.chartType, J = y.title || ((te = T.note) == null ? void 0 : te.text) || "";
        t.push(`#### ${H}: ${J}`), t.push("");
        const q = [];
        if (y.xAxis && q.push(["X軸", y.xAxis]), y.yAxis && q.push(["Y軸", y.yAxis]), y.dataSource && q.push(["データ取得", y.dataSource]), y.aggregation && q.push(["集計", y.aggregation]), y.filters && q.push(["フィルタ", y.filters]), y.description && q.push(["説明", y.description]), q.length > 0) {
          t.push("| 項目 | 内容 |"), t.push("|------|------|");
          for (const [M, B] of q)
            t.push(`| ${M} | ${p(B)} |`);
          t.push("");
        }
        if (y.series && y.series.length > 0) {
          t.push("| 系列名 | フィールド | 色 |"), t.push("|--------|-----------|-----|");
          for (const M of y.series)
            t.push(`| ${p(M.label)} | ${p(M.field)} | ${p(M.color || "")} |`);
          t.push("");
        }
      }
    }
    t.push("---"), t.push("");
  }
  const S = yt(I);
  S.length > 0 && t.push(...S);
  const ae = [];
  for (const [r, m] of Object.entries(v))
    if (((be = m.actionInfo) == null ? void 0 : be.type) === "navigate" && m.actionInfo.target) {
      const $ = m.pagePath || "/";
      ae.push({
        from: $,
        to: m.actionInfo.target,
        trigger: m.actionInfo.description || ((le = m.note) == null ? void 0 : le.text) || r
      });
    }
  if (ae.length > 0) {
    t.push("## 画面フロー"), t.push("| 遷移元 | 遷移先 | トリガー |"), t.push("|--------|--------|---------|");
    for (const r of ae) {
      const m = ((Se = I[r.from]) == null ? void 0 : Se.name) || r.from, $ = ((E = I[r.to]) == null ? void 0 : E.name) || r.to;
      t.push(`| ${p(m)} (${p(r.from)}) | ${p($)} (${p(r.to)}) | ${p(r.trigger)} |`);
    }
    t.push("");
  }
  const se = Object.values(k);
  if (se.length > 0) {
    t.push("## マスタ定義"), t.push("");
    for (const r of se) {
      t.push(`### ${r.id} — ${r.name} (${r.columnType || ""})`), r.description && (t.push(r.description), t.push("")), t.push("| 値 | ラベル | 説明 |"), t.push("|----|--------|------|");
      for (const m of r.entries)
        t.push(`| ${p(m.value)} | ${p(m.label)} | ${p(m.description || "")} |`);
      if (t.push(""), r.transitions && r.transitions.length > 0) {
        t.push("**状態遷移**"), t.push("| 遷移元 | 遷移先 | トリガー | 条件 |"), t.push("|--------|--------|---------|------|");
        for (const m of r.transitions) {
          const $ = r.entries.find((U) => U.value === m.from), O = r.entries.find((U) => U.value === m.to), F = $ ? `${$.label} (${m.from})` : m.from, K = O ? `${O.label} (${m.to})` : m.to;
          t.push(`| ${p(F)} | ${p(K)} | ${p(m.trigger)} | ${p(m.condition || "")} |`);
        }
        t.push("");
      }
    }
  }
  const P = Object.values(D);
  if (P.length > 0) {
    t.push("## バッチ処理定義"), t.push("");
    for (const r of P) {
      if (t.push(`### ${r.name}`), r.schedule && t.push(`- スケジュール: ${r.schedule}`), r.trigger && t.push(`- トリガー: ${r.trigger}`), r.description && t.push(`- 概要: ${r.description}`), r.timeout && t.push(`- タイムアウト: ${r.timeout}`), r.retryPolicy && t.push(`- リトライ: ${r.retryPolicy}`), r.inputTables && r.inputTables.length > 0 && t.push(`- 入力: ${r.inputTables.join(", ")}`), r.outputTables && r.outputTables.length > 0 && t.push(`- 出力: ${r.outputTables.join(", ")}`), t.push(""), r.steps.length > 0) {
        t.push("**処理ステップ**"), t.push("| No | 処理内容 | 対象 | 種別 | エラー時 |"), t.push("|----|---------|------|------|---------|");
        for (const m of r.steps)
          t.push(`| ${m.order} | ${p(m.description)} | ${p(m.target || "-")} | ${p(m.type || "")} | ${p(m.errorHandling || "")} |`);
        t.push("");
      }
      r.notifyOnError && t.push(`- エラー通知: ${r.notifyOnError}`), r.notifyOnComplete && t.push(`- 完了通知: ${r.notifyOnComplete}`), (r.notifyOnError || r.notifyOnComplete) && t.push("");
    }
  }
  return t.join(`
`);
}
function In(v, I, k, D = {}) {
  var P, he, ne, Q, re, j, Te, ve;
  const t = [];
  t.push("# 画面仕様書"), t.push("");
  const W = vt(v), Z = /* @__PURE__ */ new Set([...Object.keys(I), ...Object.keys(W)]);
  for (const ee of Z) {
    const _ = I[ee], z = W[ee] || [];
    if (t.push(`## ${(_ == null ? void 0 : _.name) || ee}`), t.push(`**URL:** ${ee}`), t.push(""), _ != null && _.description && (t.push("### 概要"), t.push(_.description), t.push("")), _ != null && _.auth) {
      if (t.push("### 認証"), t.push(`- ${_.auth.required ? "ログイン必須" : "ログイン不要"}`), (P = _.auth.roles) != null && P.length) {
        const E = _.auth.roles.map((r) => ({ admin: "管理者", manager: "マネージャー", user: "ユーザー" })[r] || r);
        t.push(`- 権限: ${E.join("、")}`);
      }
      t.push("");
    }
    if (z.length > 0) {
      let E = function(K, U) {
        t.push("| No | 項目名 | 種別 | 説明 | 必須 | 備考 |"), t.push("|----|--------|------|------|------|------|"), K.forEach(({ config: Y }, we) => {
          var de, Ae, T, y;
          const je = $n(Y), Re = yn(Y), Be = Sn(Y), fe = (de = Y.formInfo) != null && de.required ? "必須" : "", ye = [];
          (Ae = Y.note) != null && Ae.condition && ye.push(Y.note.condition), (T = Y.note) != null && T.unit && ye.push(`単位: ${Y.note.unit}`), (y = Y.note) != null && y.nullDisplay && Y.note.nullDisplay !== "-" && ye.push(`空欄時: ${Y.note.nullDisplay}`), t.push(`| ${U + we} | ${p(je)} | ${Re} | ${p(Be)} | ${fe} | ${p(ye.join(" / "))} |`);
        }), t.push("");
      };
      const { common: r, tabs: m, modals: $, unnamedModals: O } = bt(z);
      if (Object.keys(m).length > 0 || Object.keys($).length > 0 || O.length > 0) {
        t.push("### 画面項目"), t.push("");
        let K = 1;
        r.length > 0 && (t.push("#### ページ共通"), E(r, K), K += r.length);
        for (const [U, Y] of Object.entries(m))
          t.push(`#### ${U}タブ`), E(Y, K), K += Y.length;
        for (const [U, Y] of Object.entries($))
          t.push(`#### モーダル: ${U}`), E(Y, K), K += Y.length;
        O.length > 0 && (t.push("#### モーダル要素"), E(O, K));
      } else
        t.push("### 画面項目"), E(r, 1);
    }
    const me = (_ == null ? void 0 : _.apis) || [];
    if (me.length > 0) {
      t.push("### 使用API"), t.push("| メソッド | エンドポイント | 説明 |"), t.push("|---------|-------------|------|");
      for (const E of me)
        t.push(`| ${E.method} | ${p(E.endpoint)} | ${p(E.description || "")} |`);
      t.push("");
    }
    const te = z.filter(
      (E) => {
        var r, m;
        return ((r = E.config.actionInfo) == null ? void 0 : r.type) === "csv_export" || ((m = E.config.actionInfo) == null ? void 0 : m.type) === "csv_import";
      }
    );
    if (te.length > 0) {
      t.push("### CSV入出力仕様");
      for (const { config: E } of te) {
        const r = E.actionInfo, m = r.csvSpec, $ = r.type === "csv_export" ? "CSV出力" : "CSV取込", O = r.description || ((he = E.note) == null ? void 0 : he.text) || "";
        if (t.push(`#### ${$}: ${O}`), t.push(""), m) {
          const F = [];
          if (m.encoding && F.push(`- エンコーディング: ${m.encoding}`), m.filenamePattern && F.push(`- ファイル名: ${m.filenamePattern}`), F.length > 0 && (t.push(...F), t.push("")), m.columns.length > 0 && (m.columns.some((U) => U.processing) ? (t.push("| No | 項目名 | 加工 | 型 | 必須 | 説明 |"), t.push("|----|--------|------|-----|------|------|"), m.columns.forEach((U, Y) => {
            t.push(`| ${Y + 1} | ${p(U.name)} | ${p(U.processing || "")} | ${p(U.type || "")} | ${U.required ? "必須" : ""} | ${p(U.description || "")} |`);
          })) : (t.push("| No | 項目名 | 型 | 必須 | 説明 |"), t.push("|----|--------|-----|------|------|"), m.columns.forEach((U, Y) => {
            t.push(`| ${Y + 1} | ${p(U.name)} | ${p(U.type || "")} | ${U.required ? "必須" : ""} | ${p(U.description || "")} |`);
          })), t.push("")), m.errorDefs && m.errorDefs.length > 0) {
            t.push("**エラー時の動作**"), t.push("| エラー条件 | メッセージ |"), t.push("|----------|----------|");
            for (const K of m.errorDefs) {
              const U = K.column ? `[${K.column}] ` : "";
              t.push(`| ${p(U + K.condition)} | ${p(K.message)} |`);
            }
            t.push("");
          }
        }
      }
    }
    const be = z.filter((E) => {
      var r;
      return ((r = E.config.actionInfo) == null ? void 0 : r.type) === "email";
    });
    if (be.length > 0) {
      t.push("### メール送信");
      for (const { config: E } of be) {
        const r = E.actionInfo, m = r.emailSpec, $ = r.description || ((ne = E.note) == null ? void 0 : ne.text) || "";
        t.push(`#### ${$}`), m && (m.trigger && t.push(`- タイミング: ${m.trigger}`), m.to && t.push(`- 宛先: ${m.to}`), m.subject && t.push(`- 件名: ${m.subject}`)), t.push("");
      }
    }
    const le = z.filter((E) => {
      var r, m;
      return ((r = E.config.actionInfo) == null ? void 0 : r.type) === "sort" && ((m = E.config.actionInfo) == null ? void 0 : m.sortSpec);
    });
    if (le.length > 0) {
      t.push("### ソート");
      const E = (j = (re = (Q = le.find(($) => {
        var O, F;
        return (F = (O = $.config.actionInfo) == null ? void 0 : O.sortSpec) == null ? void 0 : F.unsortedOrder;
      })) == null ? void 0 : Q.config.actionInfo) == null ? void 0 : re.sortSpec) == null ? void 0 : j.unsortedOrder;
      E && t.push(`- 初期並び順: ${E}`);
      const r = le.filter(($) => {
        var O, F;
        return (F = (O = $.config.actionInfo) == null ? void 0 : O.sortSpec) == null ? void 0 : F.sortable;
      });
      r.length > 0 && t.push(`- ソート可能項目: ${r.map(($) => {
        var O, F;
        return ((O = $.config.note) == null ? void 0 : O.text) || ((F = $.config.fieldInfo) == null ? void 0 : F.column) || $.selector;
      }).join("、")}`);
      const m = le.find(($) => {
        var O, F;
        return (F = (O = $.config.actionInfo) == null ? void 0 : O.sortSpec) == null ? void 0 : F.isDefaultSort;
      });
      if (m) {
        const $ = m.config.actionInfo.sortSpec, O = $.defaultDirection === "desc" ? "降順" : "昇順";
        t.push(`- デフォルト: ${((Te = m.config.note) == null ? void 0 : Te.text) || $.sortKey || ""} ${O}`);
      }
      t.push("");
    }
    const Se = z.filter((E) => E.config.elementType === "chart" && E.config.chartSpec);
    if (Se.length > 0) {
      t.push("### チャート");
      for (const { config: E } of Se) {
        const r = E.chartSpec, $ = {
          bar: "棒グラフ",
          line: "折れ線グラフ",
          pie: "円グラフ",
          area: "エリアチャート",
          scatter: "散布図",
          doughnut: "ドーナツ",
          radar: "レーダー",
          other: "その他"
        }[r.chartType] || r.chartType, O = r.title || ((ve = E.note) == null ? void 0 : ve.text) || "";
        if (t.push(`#### ${$}: ${O}`), r.xAxis || r.yAxis) {
          const F = [r.xAxis ? `X軸: ${r.xAxis}` : "", r.yAxis ? `Y軸: ${r.yAxis}` : ""].filter(Boolean);
          t.push(`- ${F.join(" / ")}`);
        }
        r.series && r.series.length > 0 && t.push(`- 系列: ${r.series.map((F) => F.label).join("、")}`), r.description && t.push(`- ${r.description}`), t.push("");
      }
    }
    _ != null && _.notes && (t.push("### 備考"), t.push(_.notes), t.push("")), t.push("---"), t.push("");
  }
  const S = Object.values(k).filter((ee) => ee.transitions && ee.transitions.length > 0);
  if (S.length > 0) {
    t.push("## 状態遷移");
    for (const ee of S) {
      t.push(`### ${ee.name}`), t.push("| 遷移元 | 遷移先 | 操作 | 条件 |"), t.push("|--------|--------|------|------|");
      for (const _ of ee.transitions) {
        const z = ee.entries.find((le) => le.value === _.from), me = ee.entries.find((le) => le.value === _.to), te = z ? z.label : _.from, be = me ? me.label : _.to;
        t.push(`| ${p(te)} | ${p(be)} | ${p(_.trigger)} | ${p(_.condition || "")} |`);
      }
      t.push("");
    }
  }
  const ae = Object.values(D);
  if (ae.length > 0) {
    t.push("## バッチ処理"), t.push("");
    for (const ee of ae)
      t.push(`### ${ee.name}`), ee.schedule && t.push(`- 実行タイミング: ${ee.schedule}`), ee.description && t.push(`- 概要: ${ee.description}`), t.push("");
  }
  const se = yt(I);
  return se.length > 0 && t.push(...se), t.join(`
`);
}
const Cn = {}, Tn = "devInspector:elementConfigs", ht = "devInspector:screenConfigs", mt = "devInspector:masterDefinitions", gt = "devInspector:batchDefinitions", An = bn("devInspector", () => {
  const v = N({}), I = N(!1), k = N(!1), D = N(!1), t = N(!1), W = N(null), Z = N(!1), S = N({}), ae = N(null), se = N(null), P = N({}), he = N(!1), ne = N({}), Q = N({}), re = Oe(() => v.value.storageKey || Tn), j = N(null), Te = N("all"), ve = N(!0), ee = N("all"), _ = N("all"), z = N([]), me = N(null), te = N([]), be = N(!1), le = N(""), Se = N("column"), E = N(!1), r = N([]), m = N(null), $ = N(!1), O = N(/* @__PURE__ */ new Set()), F = "devInspector:hiddenAnalysisSelectors", K = Oe(() => v.value.enabledInProduction ? !0 : typeof import.meta < "u" && Cn ? !1 : process.env.NODE_ENV === "development"), U = N(!1);
  function Y(e = {}) {
    v.value = e, Be(), ye(), h(), xe(), Mt(), fn(), dn(), e.analysisData && (j.value = e.analysisData);
    const n = e.analysisDataUrl ?? "/dev-inspector-analysis.json";
    e.autoLoadAnalysis !== !1 && K.value && we(n);
  }
  async function we(e) {
    var n;
    try {
      const o = await fetch(e);
      if (o.ok)
        return j.value = await o.json(), console.log("[DevInspector] Analysis data loaded:", Object.keys(((n = j.value) == null ? void 0 : n.components) || {}).length, "components"), !0;
    } catch {
      console.debug("[DevInspector] Analysis data not found at", e);
    }
    return !1;
  }
  function je(e) {
    if (!j.value) return null;
    for (const n of Object.values(j.value.components)) {
      const o = n.elements.find((s) => s.selector === e);
      if (o) return o;
    }
    return null;
  }
  function Re(e) {
    if (!j.value) return [];
    const n = [];
    for (const [o, s] of Object.entries(j.value.components))
      (!e || o.includes(e)) && n.push(...s.elements);
    return n;
  }
  function Be() {
    try {
      const e = v.value.initialAnnotations || {};
      if (typeof window < "u") {
        const n = localStorage.getItem(re.value), o = n ? JSON.parse(n) : {};
        S.value = { ...e, ...o };
      } else
        S.value = e;
    } catch (e) {
      console.error("[DevInspector] Failed to load configs:", e);
    }
  }
  function fe() {
    try {
      if (typeof window < "u") {
        const e = JSON.stringify(S.value);
        localStorage.setItem(re.value, e), console.log("[DevInspector] Saved configs:", Object.keys(S.value).length, "items");
      }
    } catch (e) {
      console.error("[DevInspector] Failed to save configs:", e);
    }
  }
  ze(S, () => {
    ce(() => {
      fe();
    });
  }, { deep: !0 });
  function ye() {
    try {
      if (typeof window < "u") {
        const e = localStorage.getItem(ht);
        e && (P.value = JSON.parse(e));
      }
    } catch (e) {
      console.error("[DevInspector] Failed to load screen configs:", e);
    }
  }
  function de() {
    try {
      if (typeof window < "u") {
        const e = JSON.stringify(P.value);
        localStorage.setItem(ht, e);
      }
    } catch (e) {
      console.error("[DevInspector] Failed to save screen configs:", e);
    }
  }
  ze(P, () => {
    ce(() => {
      de();
    });
  }, { deep: !0 });
  function Ae(e) {
    const n = e || (typeof window < "u" ? window.location.pathname : "/");
    return P.value[n];
  }
  function T(e) {
    P.value = {
      ...P.value,
      [e.path]: e
    }, ce(() => de());
  }
  function y(e) {
    const { [e]: n, ...o } = P.value;
    P.value = o, ce(() => de());
  }
  function h() {
    try {
      if (typeof window < "u") {
        const e = localStorage.getItem(mt);
        e && (ne.value = JSON.parse(e));
      }
    } catch (e) {
      console.error("[DevInspector] Failed to load master definitions:", e);
    }
  }
  function H() {
    try {
      typeof window < "u" && localStorage.setItem(mt, JSON.stringify(ne.value));
    } catch (e) {
      console.error("[DevInspector] Failed to save master definitions:", e);
    }
  }
  ze(ne, () => {
    ce(() => {
      H();
    });
  }, { deep: !0 });
  function J(e) {
    return ne.value[e];
  }
  function q(e) {
    ne.value = {
      ...ne.value,
      [e.id]: { ...e, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }
    }, ce(() => H());
  }
  function M(e) {
    const { [e]: n, ...o } = ne.value;
    ne.value = o, ce(() => H());
  }
  function B(e) {
    return Object.values(ne.value).filter((n) => n.table === e);
  }
  function ue(e) {
    var n;
    return ((n = ne.value[e]) == null ? void 0 : n.entries) || [];
  }
  function xe() {
    try {
      if (typeof window < "u") {
        const e = localStorage.getItem(gt);
        e && (Q.value = JSON.parse(e));
      }
    } catch (e) {
      console.error("[DevInspector] Failed to load batch definitions:", e);
    }
  }
  function Le() {
    try {
      typeof window < "u" && localStorage.setItem(gt, JSON.stringify(Q.value));
    } catch (e) {
      console.error("[DevInspector] Failed to save batch definitions:", e);
    }
  }
  ze(Q, () => {
    ce(() => {
      Le();
    });
  }, { deep: !0 });
  function Fe(e) {
    return Q.value[e];
  }
  function Ue(e) {
    Q.value = {
      ...Q.value,
      [e.id]: { ...e, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }
    }, ce(() => Le());
  }
  function He(e) {
    const { [e]: n, ...o } = Q.value;
    Q.value = o, ce(() => Le());
  }
  function Ge() {
    var s, i, c, a, u;
    const e = [], n = /* @__PURE__ */ new Set(), o = {};
    for (const f of Object.values(S.value)) {
      const w = f.fieldInfoList || (f.fieldInfo ? [f.fieldInfo] : []), g = ((s = f.sourceBinding) == null ? void 0 : s.type) === "v-model";
      for (const l of w)
        l.table && (o[l.table] || (o[l.table] = { read: !1, write: !1, isList: !1 }), o[l.table].read = !0, g && (o[l.table].write = !0));
      if (((i = f.note) == null ? void 0 : i.displayType) === "db_direct" || ((c = f.note) == null ? void 0 : c.displayType) === "db_formatted")
        for (const l of w)
          l.table && o[l.table] && (f.id.includes("tbody") || f.id.includes(" tr") || f.id.includes(" td")) && (o[l.table].isList = !0);
      if (((a = f.actionInfo) == null ? void 0 : a.type) === "api" && f.actionInfo.target) {
        const l = `${f.actionInfo.method || "GET"}:${f.actionInfo.target}`;
        n.has(l) || (n.add(l), e.push({
          method: f.actionInfo.method || "GET",
          endpoint: f.actionInfo.target,
          description: f.actionInfo.description || "",
          loadTiming: "action"
        }));
      }
    }
    for (const [f, w] of Object.entries(o)) {
      if (w.read) {
        const g = w.isList ? `/api/${f}` : `/api/${f}/:id`, l = `GET:${g}`;
        n.has(l) || (n.add(l), e.push({
          method: "GET",
          endpoint: g,
          description: w.isList ? `${f} 一覧取得` : `${f} 詳細取得`,
          loadTiming: "onMount"
        }));
      }
      if (w.write) {
        const g = `/api/${f}/:id`, l = `PUT:${g}`;
        n.has(l) || (n.add(l), e.push({
          method: "PUT",
          endpoint: g,
          description: `${f} 更新`,
          loadTiming: "action"
        }));
      }
    }
    if ((u = j.value) != null && u.components) {
      const f = typeof window < "u" ? window.location.pathname : "/";
      for (const [w, g] of Object.entries(j.value.components)) {
        const l = w.replace(/^pages/, "").replace(/\.vue$/, "").replace(/\/index$/, "").replace(/\[.*?\]/g, "[^/]+");
        let d = !1;
        if (f === "/" && w.includes("index"))
          d = !0;
        else if (w.includes("pages/"))
          try {
            d = !!f.match(new RegExp(`^${l}$`));
          } catch {
          }
        if (d && g.apis)
          for (const b of g.apis) {
            if (!b.endpoint) continue;
            const G = `${b.method}:${b.endpoint}`;
            n.has(G) || (n.add(G), e.push({
              method: b.method,
              endpoint: b.endpoint,
              description: b.variable ? `→ ${b.variable}` : "",
              loadTiming: ["onMount", "useFetch", "useAsyncData"].includes(b.loadTrigger) ? "onMount" : "action"
            }));
          }
      }
    }
    return e;
  }
  const X = Oe(() => {
    var s, i, c, a, u, f, w, g, l, d, b, G, R, A, x;
    const e = le.value.trim().toLowerCase();
    if (!e) return [];
    const n = Se.value, o = [];
    for (const [L, C] of Object.entries(S.value)) {
      const oe = C.pagePath || "/", Pe = P.value[oe], Ve = (Pe == null ? void 0 : Pe.name) || oe;
      if (n === "column") {
        const Qe = (s = C.fieldInfoList) != null && s.length ? C.fieldInfoList : C.fieldInfo ? [C.fieldInfo] : [];
        for (const pe of Qe)
          (`${pe.table}.${pe.column}`.toLowerCase().includes(e) || pe.table.toLowerCase().includes(e) || pe.column.toLowerCase().includes(e)) && o.push({
            pagePath: oe,
            pageName: Ve,
            selector: L,
            elementType: C.elementType,
            matchedField: `${pe.table}.${pe.column}`,
            matchContext: `${pe.type || ""} ${pe.description || ""}`.trim()
          });
        const We = ((i = C.note) == null ? void 0 : i.calcSources) || [], vn = ((c = C.note) == null ? void 0 : c.storedCalcSources) || [];
        for (const pe of [...We, ...vn])
          pe.toLowerCase().includes(e) && o.push({
            pagePath: oe,
            pageName: Ve,
            selector: L,
            elementType: C.elementType,
            matchedField: pe,
            matchContext: ((a = C.note) == null ? void 0 : a.calcDescription) || ((u = C.note) == null ? void 0 : u.storedCalcLogic) || "参照元"
          });
      } else if (n === "api")
        (w = (f = C.actionInfo) == null ? void 0 : f.target) != null && w.toLowerCase().includes(e) && o.push({
          pagePath: oe,
          pageName: Ve,
          selector: L,
          elementType: C.elementType,
          matchedField: `${C.actionInfo.method || ""} ${C.actionInfo.target}`.trim(),
          matchContext: C.actionInfo.description || C.actionInfo.type
        });
      else if (n === "text") {
        const Qe = [
          (g = C.note) == null ? void 0 : g.text,
          (l = C.note) == null ? void 0 : l.calcDescription,
          (d = C.note) == null ? void 0 : d.formatDescription,
          (b = C.note) == null ? void 0 : b.condition,
          (G = C.actionInfo) == null ? void 0 : G.description,
          (R = C.formInfo) == null ? void 0 : R.description,
          L
          // selector itself
        ].filter(Boolean);
        for (const We of Qe)
          if (We.toLowerCase().includes(e)) {
            o.push({
              pagePath: oe,
              pageName: Ve,
              selector: L,
              elementType: C.elementType,
              matchedField: We.substring(0, 60),
              matchContext: ((x = (A = C.note) == null ? void 0 : A.text) == null ? void 0 : x.substring(0, 40)) || ""
            });
            break;
          }
      }
    }
    if (n === "api")
      for (const [L, C] of Object.entries(P.value))
        for (const oe of C.apis || [])
          oe.endpoint.toLowerCase().includes(e) && o.push({
            pagePath: L,
            pageName: C.name || L,
            selector: "",
            elementType: void 0,
            matchedField: `${oe.method} ${oe.endpoint}`,
            matchContext: oe.description || "画面API"
          });
    return o;
  });
  function ie() {
    if (typeof document > "u") return [];
    const e = typeof window < "u" ? window.location.pathname : "/", n = /* @__PURE__ */ new Set();
    for (const [l, d] of Object.entries(S.value))
      (!d.pagePath || d.pagePath === e) && n.add(l);
    const o = /* @__PURE__ */ new Set();
    for (const l of n)
      try {
        const d = document.querySelector(l);
        d && o.add(d);
      } catch {
      }
    const s = [], i = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set();
    function u(l) {
      if (l.closest("[data-dev-inspector]")) return !0;
      const d = Ce(l);
      if (n.has(d) || i.has(d)) return !0;
      for (const b of o)
        if (b.contains(l) && b !== l) return !0;
      return !1;
    }
    function f(l, d, b, G) {
      const R = Ce(l);
      i.add(R), a.add(l), s.push({ selector: R, tagName: l.tagName.toLowerCase(), category: d, text: b.substring(0, 50), suggestedType: G });
    }
    document.querySelectorAll("[data-di-binding]").forEach((l) => {
      var G;
      const d = l;
      if (d.closest("[data-dev-inspector]")) return;
      const b = d.getAttribute("data-di-binding") || "";
      c.has(b) || u(d) || (c.add(b), f(d, "binding", ((G = d.textContent) == null ? void 0 : G.trim()) || "", "datasource"));
    }), document.querySelectorAll("table").forEach((l) => {
      if (l.closest("[data-dev-inspector]")) return;
      const d = window.getComputedStyle(l);
      if (d.display === "none" || d.visibility === "hidden") return;
      const b = [];
      if (l.querySelectorAll("thead th, thead td").forEach((A) => {
        var x;
        b.push(((x = A.textContent) == null ? void 0 : x.trim()) || "");
      }), b.length === 0) {
        const A = l.querySelector("tr");
        A && A.querySelectorAll("th, td").forEach((x) => {
          var L;
          b.push(((L = x.textContent) == null ? void 0 : L.trim()) || "");
        });
      }
      const G = l.querySelector("tbody tr") || l.querySelectorAll("tr")[b.length > 0 ? 1 : 0];
      if (!G) return;
      G.querySelectorAll("td").forEach((A, x) => {
        var Pe;
        const L = A, C = ((Pe = L.textContent) == null ? void 0 : Pe.trim()) || "";
        if (!C || L.querySelector("[data-di-binding]") || u(L)) return;
        const oe = b[x] || `列${x + 1}`;
        f(L, "binding", `${oe}: ${C}`, "datasource");
      });
    }), document.querySelectorAll("input, select, textarea").forEach((l) => {
      var R, A;
      const d = l;
      if (d.closest("[data-dev-inspector]") || d.type === "hidden") return;
      const b = window.getComputedStyle(d);
      if (b.display === "none" || b.visibility === "hidden" || u(d)) return;
      const G = ((A = (R = d.closest("label")) == null ? void 0 : R.textContent) == null ? void 0 : A.trim()) || d.getAttribute("aria-label") || d.placeholder || d.name || d.tagName.toLowerCase();
      f(d, "form", G || "", "form");
    });
    const w = /* @__PURE__ */ new Set();
    document.querySelectorAll("table").forEach((l) => {
      const d = l.querySelector("tbody tr") || l.querySelectorAll("tr")[1];
      d && w.add(d);
    }), document.querySelectorAll('button, a[href], [role="button"]').forEach((l) => {
      var A;
      const d = l;
      if (d.closest("[data-dev-inspector]")) return;
      const b = ((A = d.textContent) == null ? void 0 : A.trim()) || "";
      if (!b) return;
      const G = window.getComputedStyle(d);
      if (G.display === "none" || G.visibility === "hidden") return;
      const R = d.closest("tr");
      R && R.closest("table") && !w.has(R) || u(d) || f(d, "action", b, "action");
    });
    const g = s.filter((l) => {
      try {
        const d = document.querySelector(l.selector);
        if (!d) return !0;
        for (const b of a)
          if (b !== d && b.contains(d))
            return !1;
        return !0;
      } catch {
        return !0;
      }
    });
    return r.value = g, g;
  }
  function V(e, n) {
    const o = {
      elementType: n,
      pagePath: typeof window < "u" ? window.location.pathname : "/",
      note: { text: "", type: "todo" }
    };
    n === "action" ? o.actionInfo = { type: "function", description: "" } : n === "form" && (o.formInfo = { inputType: "text" }), Ye(e, o), ae.value = e, r.value = r.value.filter((s) => s.selector !== e);
  }
  const Ee = Oe(() => {
    var a, u, f, w;
    const e = /* @__PURE__ */ new Map(), n = [], o = /* @__PURE__ */ new Set();
    for (const [g, l] of Object.entries(P.value))
      e.set(g, {
        path: g,
        name: l.name || g,
        annotationCount: Object.values(S.value).filter((d) => d.pagePath === g).length
      });
    for (const [g, l] of Object.entries(S.value))
      if (((a = l.actionInfo) == null ? void 0 : a.type) === "navigate" && l.actionInfo.target) {
        const d = l.pagePath || "/", b = l.actionInfo.target, G = `${d}→${b}`;
        if (!e.has(d)) {
          const R = P.value[d];
          e.set(d, {
            path: d,
            name: (R == null ? void 0 : R.name) || d,
            annotationCount: Object.values(S.value).filter((A) => A.pagePath === d).length
          });
        }
        if (!e.has(b)) {
          const R = P.value[b];
          e.set(b, {
            path: b,
            name: (R == null ? void 0 : R.name) || b,
            annotationCount: Object.values(S.value).filter((A) => A.pagePath === b).length
          });
        }
        if (!o.has(G)) {
          o.add(G);
          let R = l.actionInfo.description || ((u = l.note) == null ? void 0 : u.text) || "";
          if (!R && typeof document < "u")
            try {
              const A = document.querySelector(g);
              A && (R = ((w = (f = A.textContent) == null ? void 0 : f.trim()) == null ? void 0 : w.substring(0, 20)) || "");
            } catch {
            }
          n.push({
            from: d,
            to: b,
            label: R,
            selector: g
          });
        }
      }
    const s = Array.from(e.values()), i = /* @__PURE__ */ new Set();
    for (const g of n)
      i.add(g.from), i.add(g.to);
    const c = s.filter((g) => !i.has(g.path));
    return { nodes: s, edges: n, orphanPages: c };
  });
  async function $e() {
    K.value && (I.value ? (I.value = !1, k.value = !1, ae.value = null) : await Ie());
  }
  async function Ie() {
    if (!K.value) return;
    if (j.value && !U.value && v.value.autoApplyAnalysis !== !1) {
      t.value = !0, I.value = !0;
      try {
        await new Promise((n) => setTimeout(n, 300)), rt(), U.value = !0;
      } finally {
        t.value = !1;
      }
    } else
      I.value = !0;
  }
  function ke() {
    I.value = !1, k.value = !1, ae.value = null;
  }
  function Ne() {
    k.value = !k.value, k.value || (ae.value = null), k.value && (D.value = !1);
  }
  function $t() {
    D.value = !D.value, D.value && (k.value = !1), se.value = null;
  }
  function St(e) {
    se.value = e;
  }
  function Ce(e) {
    if (e.id)
      return `#${e.id}`;
    if (e.dataset.devId)
      return `[data-dev-id="${e.dataset.devId}"]`;
    const n = [];
    let o = e;
    for (; o && o !== document.body; ) {
      let s = o.tagName.toLowerCase();
      if (o.id) {
        s = `#${o.id}`, n.unshift(s);
        break;
      }
      const i = Array.from(o.classList).filter(
        (a) => !a.startsWith("hover:") && !a.startsWith("focus:") && !a.startsWith("-") && !/[/\[\]()!@#$%^&*=+{}|\\:'"<>,?.~]/.test(a)
      ).slice(0, 2);
      i.length > 0 && (s += "." + i.join("."));
      const c = o.parentElement;
      if (c) {
        const a = Array.from(c.children).filter(
          (u) => u.tagName === o.tagName
        );
        if (a.length > 1) {
          const u = a.indexOf(o) + 1;
          s += `:nth-of-type(${u})`;
        }
      }
      n.unshift(s), o = o.parentElement;
    }
    return n.join(" > ");
  }
  function wt() {
    const e = typeof window < "u" ? window.location.pathname : "/";
    return Object.keys(S.value).filter((n) => {
      const o = S.value[n];
      return o ? (n.includes(">") || n.startsWith("#") || n.startsWith("[") || n.startsWith(".")) && (!o.componentPath || o.componentPath.includes(e) || e === "/") : !1;
    });
  }
  function It(e) {
    W.value = e;
  }
  function Ct() {
    W.value = null;
  }
  function Tt() {
    Z.value ? Ke() : tt();
  }
  function et() {
    [0, 50, 100, 150, 200, 250, 320].forEach((n) => setTimeout(() => window.dispatchEvent(new Event("resize")), n));
  }
  function tt() {
    Z.value = !0, typeof document < "u" && (document.body.style.transition = "margin-right 0.3s ease", document.body.style.marginRight = "360px", et());
  }
  function Ke() {
    Z.value = !1, typeof document < "u" && (document.body.style.transition = "margin-right 0.3s ease", document.body.style.marginRight = "", et());
  }
  function At(e) {
    return S.value[e];
  }
  function Et(e) {
    if (typeof document > "u") return !1;
    try {
      const n = document.querySelector(e);
      if (!n) return !1;
      let o = n.parentElement;
      for (; o && o !== document.body; ) {
        if (o.tagName === "DIALOG") return !0;
        const s = o.getAttribute("role");
        if (s === "dialog" || s === "alertdialog") return !0;
        const i = o.className || "";
        if (typeof i == "string" && /\b(modal|dialog|v-dialog|el-dialog|v-overlay|drawer)\b/i.test(i) || o.id === "teleported" || o.hasAttribute("data-teleport")) return !0;
        if (typeof i == "string") {
          const c = window.getComputedStyle(o);
          if (c.position === "fixed") {
            const a = parseInt(c.zIndex, 10);
            if (!isNaN(a) && a >= 40) {
              const u = o.getBoundingClientRect();
              if (u.width >= window.innerWidth * 0.9 && u.height >= window.innerHeight * 0.9)
                return !0;
            }
          }
        }
        o = o.parentElement;
      }
    } catch {
    }
    return !1;
  }
  function Nt(e) {
    if (!(typeof document > "u"))
      try {
        const n = document.querySelector(e);
        if (!n) return;
        const o = [];
        let s = n.parentElement;
        for (; s && s !== document.body; ) {
          const i = s.getAttribute("role"), c = s.className || "";
          let a = s.tagName === "DIALOG" || i === "dialog" || i === "alertdialog" || typeof c == "string" && /\b(modal|dialog|v-dialog|el-dialog|drawer)\b/i.test(c) || s.id === "teleported" || s.hasAttribute("data-teleport");
          if (!a && typeof c == "string") {
            const u = window.getComputedStyle(s);
            if (u.position === "fixed") {
              const f = parseInt(u.zIndex, 10);
              if (!isNaN(f) && f >= 40) {
                const w = s.getBoundingClientRect();
                w.width >= window.innerWidth * 0.9 && w.height >= window.innerHeight * 0.9 && (a = !0);
              }
            }
          }
          if (a) {
            const u = Ot(s);
            u && o.push(u);
          }
          s = s.parentElement;
        }
        return o.length === 0 ? void 0 : (o.reverse(), o.join(" > "));
      } catch {
      }
  }
  function Ot(e) {
    var o;
    const n = e.querySelectorAll('h1, h2, h3, h4, [class*="title"], [class*="header"] h1, [class*="header"] h2, [class*="header"] h3, [class*="header"] span');
    for (const s of n) {
      let i = s.parentElement, c = !1;
      for (; i && i !== e; ) {
        const u = i.getAttribute("role"), f = i.className || "";
        if (i.tagName === "DIALOG" || u === "dialog" || u === "alertdialog" || typeof f == "string" && /\b(modal|dialog|v-dialog|el-dialog|drawer)\b/i.test(f)) {
          c = !0;
          break;
        }
        i = i.parentElement;
      }
      if (c) continue;
      const a = (o = s.textContent) == null ? void 0 : o.trim();
      if (a && a.length <= 30) return a;
    }
  }
  function xt(e, n) {
    if (e.getAttribute("aria-selected") === "true" || e.classList.contains("active") || e.classList.contains("is-active")) return !0;
    const o = e.className || "";
    return !!(/border-[tb]-[2-9]/.test(o) || /\b(bg-blue|bg-primary|bg-indigo)\b/.test(o) || /\btext-white\b/.test(o) && n.some((s) => s !== e && !/\btext-white\b/.test(s.className || "")) || /\b(bg-white|bg-surface)\b/.test(o) && !/shadow-inset|shadow-\[inset/.test(o) && n.some((s) => s !== e && !/\b(bg-white|bg-surface)\b/.test(s.className || "")));
  }
  function nt(e) {
    var o;
    const n = [...e.querySelectorAll(':scope > button, :scope > a, :scope > [role="tab"]')];
    if (!(n.length < 2 || n.length > 12)) {
      for (const s of n)
        if (xt(s, n)) {
          const i = (o = s.textContent) == null ? void 0 : o.trim();
          if (i && i.length <= 30) return i;
        }
    }
  }
  function Lt(e) {
    let n = nt(e);
    if (n) return n;
    for (const o of e.children)
      if (n = nt(o), n) return n;
  }
  function Dt(e) {
    if (!(typeof document > "u"))
      try {
        const n = document.querySelector(e);
        if (!n) return;
        const o = [], s = /* @__PURE__ */ new Set();
        let i = n.parentElement;
        for (; i && i !== document.body; ) {
          let c = i.previousElementSibling;
          for (; c; ) {
            if (!s.has(c)) {
              s.add(c);
              const a = Lt(c);
              if (a) {
                o.push(a);
                break;
              }
            }
            c = c.previousElementSibling;
          }
          i = i.parentElement;
        }
        return o.length === 0 ? void 0 : (o.reverse(), o.join(" > "));
      } catch {
      }
  }
  function Ye(e, n) {
    var g;
    const o = (/* @__PURE__ */ new Date()).toISOString(), s = S.value[e], i = typeof window < "u" ? window.location.pathname : "/", c = n.isConditional ?? (s == null ? void 0 : s.isConditional) ?? Et(e), a = "modalName" in n ? n.modalName : s == null ? void 0 : s.modalName, u = "tabContext" in n ? n.tabContext : s == null ? void 0 : s.tabContext, f = "chartSpec" in n ? n.chartSpec : s == null ? void 0 : s.chartSpec, w = {
      ...s,
      ...n,
      id: e,
      isConditional: c,
      modalName: a,
      tabContext: u,
      chartSpec: f,
      pagePath: n.pagePath || (s == null ? void 0 : s.pagePath) || i,
      componentPath: n.componentPath || ((g = W.value) == null ? void 0 : g.componentPath) || "",
      createdAt: (s == null ? void 0 : s.createdAt) || o,
      updatedAt: o
    };
    S.value = {
      ...S.value,
      [e]: w
    }, ce(() => fe());
  }
  function Pt(e) {
    const { [e]: n, ...o } = S.value;
    S.value = o, ce(() => fe());
  }
  function ot(e) {
    var R;
    const n = ((R = e.textContent) == null ? void 0 : R.trim()) || "", o = e.tagName.toUpperCase();
    if (!n && o !== "INPUT" && o !== "SELECT" && o !== "TEXTAREA")
      return null;
    const s = e.__vueParentComponent;
    if (s) {
      const A = s.props || {}, x = s.attrs || {};
      if ("modelValue" in A || "model-value" in x)
        return {
          type: "v-model",
          source: "form binding detected",
          isStatic: !1
        };
    }
    if (o === "INPUT" || o === "SELECT" || o === "TEXTAREA") {
      const A = e.type || "text", x = e.placeholder || "";
      return {
        type: "v-model",
        source: `${o.toLowerCase()}[type=${A}]${x ? ` placeholder="${x}"` : ""}`,
        isStatic: !1
      };
    }
    const i = e.dataset.source || e.dataset.field || e.dataset.bind;
    if (i)
      return {
        type: "prop",
        source: i,
        isStatic: !1
      };
    if (e.closest("tbody") || e.closest('[role="rowgroup"]'))
      return {
        type: "data",
        source: "table data",
        isStatic: !1
      };
    const c = e.closest('ul, ol, [role="list"]');
    if (c && c.children.length > 1)
      return {
        type: "data",
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
    for (const A of a) {
      const x = e.closest(A);
      if (x) {
        const L = x.parentElement;
        if (L && Array.from(L.children).filter(
          (oe) => oe !== x && oe.className === x.className
        ).length > 0)
          return {
            type: "data",
            source: "repeated container",
            isStatic: !1
          };
      }
    }
    if (e.closest("[v-for]") !== null || e.closest("[data-v-for]") !== null)
      return {
        type: "data",
        source: "loop item",
        isStatic: !1
      };
    if (e.parentElement) {
      const A = e.parentElement, L = Array.from(A.children).filter((C) => C.tagName === e.tagName);
      if (L.length >= 2 && L.filter(
        (oe) => oe.children.length === e.children.length
      ).length >= 2)
        return {
          type: "data",
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
    for (const A of f)
      if (A.test(n))
        return {
          type: "data",
          source: "dynamic data pattern",
          isStatic: !1
        };
    const w = [
      /^[\u4e00-\u9faf]{2,4}$/,
      // Japanese Kanji names (2-4 chars)
      /^[\u3040-\u309f\u30a0-\u30ff]{2,6}$/,
      // Hiragana/Katakana names
      /^[A-Z][a-z]+ [A-Z][a-z]+$/
      // English names like "John Smith"
    ];
    for (const A of w)
      if (A.test(n))
        return {
          type: "data",
          source: "name pattern",
          isStatic: !1
        };
    const l = ["LABEL", "TH", "LEGEND", "FIGCAPTION"].includes(o), b = [
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
    ].some((A) => A.test(n)), G = o === "BUTTON" || e.closest("button") !== null || e.getAttribute("role") === "button";
    return l || b || G && n.length < 20 ? {
      type: "static",
      source: n.substring(0, 50) + (n.length > 50 ? "..." : ""),
      isStatic: !0
    } : n.length <= 10 && /^[\u3040-\u30ff\u4e00-\u9faf]+$/.test(n) ? {
      type: "prop",
      source: "short text (verify manually)",
      isStatic: !1
    } : n.length > 0 && n.length < 200 ? {
      type: "data",
      source: "content (assumed dynamic)",
      isStatic: !1
    } : null;
  }
  function st(e, n) {
    var d, b, G, R, A;
    const o = {}, s = ((d = e.textContent) == null ? void 0 : d.trim()) || "", i = e.getAttribute("data-di-binding");
    e.getAttribute("data-di-db"), e.getAttribute("data-di-component"), e.getAttribute("data-di-db-comment");
    let c = e;
    if (!i) {
      const x = e.closest("[data-di-binding]");
      x && (c = x);
    }
    const a = c.getAttribute("data-di-binding"), u = c.getAttribute("data-di-db"), f = c.getAttribute("data-di-component"), w = c.getAttribute("data-di-db-type"), g = c.getAttribute("data-di-db-comment");
    if (a || u) {
      if (o.sourceBinding = {
        type: "api",
        source: a || void 0,
        isStatic: !1
      }, u) {
        const [x, L] = u.split(".");
        x && L && (o.fieldInfo = {
          table: x,
          column: L,
          type: w || void 0,
          description: g || void 0
        });
      }
      return f && (o.devMeta = {
        usedComponents: [f]
      }), o.note = {
        type: "info",
        text: `【データバインディング】${a}${u ? ` → ${u}` : ""}`
      }, o;
    }
    const l = ot(e);
    if (l)
      if (o.sourceBinding = l, l.isStatic)
        o.note = {
          type: "info",
          text: `【固定文言】${s}`
        };
      else if (l.type === "v-model") {
        const x = e.tagName.toUpperCase();
        if (x === "INPUT" || x === "SELECT" || x === "TEXTAREA") {
          const L = e.placeholder || "", C = ((G = (b = e.closest("label")) == null ? void 0 : b.textContent) == null ? void 0 : G.trim()) || e.getAttribute("aria-label") || ((A = (R = document.querySelector(`label[for="${e.id}"]`)) == null ? void 0 : R.textContent) == null ? void 0 : A.trim()) || "";
          o.note = {
            type: "todo",
            text: `【フォーム要素】${C || L || x.toLowerCase()}`
          };
        }
      } else l.type === "api" && (o.note = {
        type: "question",
        text: `【動的データ】${s.substring(0, 100)}${s.length > 100 ? "..." : ""}`
      });
    return o;
  }
  const _e = N(!1), Me = N(0), Je = N([]);
  async function it(e = {}) {
    _e.value = !0, Me.value = 0, Je.value = [];
    const { rescan: n = !1 } = e;
    if (n) {
      const o = typeof window < "u" ? window.location.pathname : "/", s = Object.keys(S.value).filter((i) => {
        const c = S.value[i];
        return !c.componentPath || c.componentPath.includes(o);
      });
      for (const i of s)
        delete S.value[i];
      ce(() => fe());
    }
    try {
      const o = [
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
      ].join(","), s = document.querySelectorAll(o), i = [];
      s.forEach((w) => {
        var x;
        const g = w;
        if (g.closest("[data-dev-inspector]")) return;
        const l = window.getComputedStyle(g);
        if (l.display === "none" || l.visibility === "hidden" || l.opacity === "0") return;
        const d = Ce(g);
        if (S.value[d]) return;
        const b = g.tagName.toUpperCase(), G = ((x = g.textContent) == null ? void 0 : x.trim()) || "";
        if (b === "INPUT" || b === "SELECT" || b === "TEXTAREA") {
          i.push(g);
          return;
        }
        if (G.length > 300 || G.length === 0 || b === "DIV" && (Array.from(g.childNodes).filter((C) => C.nodeType === Node.TEXT_NODE).map((C) => {
          var oe;
          return ((oe = C.textContent) == null ? void 0 : oe.trim()) || "";
        }).join("").trim().length === 0 || g.children.length > 3))
          return;
        const R = Array.from(g.childNodes).some((L) => {
          var C;
          return L.nodeType === Node.TEXT_NODE && (((C = L.textContent) == null ? void 0 : C.trim()) || "").length > 0;
        }), A = !Array.from(g.children).some((L) => ["DIV", "P", "UL", "OL", "TABLE", "SECTION", "ARTICLE"].includes(L.tagName));
        (R || g.children.length === 0 && G.length > 0 || A) && i.push(g);
      });
      const c = i.length;
      let a = 0, u = 0;
      const f = 20;
      for (let w = 0; w < i.length; w += f) {
        const g = i.slice(w, w + f);
        for (const l of g) {
          const d = Ce(l), b = st(l, d);
          b.sourceBinding && (Je.value.push({ selector: d, element: l, detected: b }), Ye(d, b), u++), a++, Me.value = Math.round(a / c * 100);
        }
        await new Promise((l) => setTimeout(l, 10));
      }
      return u;
    } finally {
      _e.value = !1, Me.value = 100;
    }
  }
  const at = N([]), Xe = N("");
  async function jt(e) {
    var o;
    if (!e)
      return console.warn("[DevInspector] Router not provided for all pages scan"), [];
    _e.value = !0;
    const n = [];
    try {
      const s = e.getRoutes(), i = [];
      for (const c of s)
        c.path.includes(":") && !c.path.includes("?") || c.redirect || c.path !== "/:pathMatch(.*)*" && ((o = c.meta) != null && o.devInspectorSkip || i.push(c.path));
      at.value = i;
      for (const c of i) {
        Xe.value = c;
        try {
          await e.push(c), await new Promise((u) => setTimeout(u, 500));
          const a = await it();
          n.push({ page: c, count: a });
        } catch (a) {
          console.warn(`[DevInspector] Failed to scan page ${c}:`, a), n.push({ page: c, count: 0 });
        }
      }
      return n;
    } finally {
      _e.value = !1, Xe.value = "";
    }
  }
  function Rt() {
    Je.value = [], Me.value = 0;
  }
  const ge = N([]);
  async function rt() {
    var c;
    if (!j.value)
      return console.warn("[DevInspector] No analysis data loaded. Call loadAnalysisData first."), 0;
    ge.value = [];
    const e = typeof window < "u" ? window.location.pathname : "/", n = (a) => {
      if (!j.value) return null;
      for (const [u, f] of Object.entries(j.value.components))
        if (f.componentName === a || f.componentName.toLowerCase() === a.toLowerCase() || u.toLowerCase().includes(`/${a.toLowerCase()}.vue`))
          return f;
      return null;
    }, o = (a, u = /* @__PURE__ */ new Set()) => {
      const f = [];
      if (u.has(a.componentName)) return f;
      if (u.add(a.componentName), f.push(...a.elements), a.usedComponents)
        for (const w of a.usedComponents) {
          const g = n(w);
          g && f.push(...o(g, u));
        }
      return f;
    }, s = [], i = /* @__PURE__ */ new Set();
    for (const [a, u] of Object.entries(j.value.components)) {
      const f = a.replace(/^pages/, "").replace(/\.vue$/, "").replace(/\/index$/, "").replace(/\[.*?\]/g, "[^/]+");
      let w = !1;
      if ((e === "/" && a.includes("index") || a.includes("pages/") && e.match(new RegExp(`^${f}$`))) && (w = !0), w) {
        const g = o(u);
        s.push(...g), i.add(u.componentName), u.usedComponents && u.usedComponents.forEach((l) => i.add(l));
      }
    }
    for (const [a, u] of Object.entries(j.value.components))
      a.includes("components/") && !i.has(u.componentName) && s.push(...u.elements);
    for (const a of s) {
      if (O.value.has(a.selector))
        continue;
      let u = !1, f = a.selector;
      try {
        document.querySelector(a.selector) && (u = !0);
      } catch {
      }
      if (!u && a.text && !a.binding) {
        const w = a.text.replace(/\[コメント\]\s*/, ""), g = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT,
          null
        );
        for (; g.nextNode(); ) {
          const l = g.currentNode;
          if ((c = l.textContent) != null && c.includes(w)) {
            const d = l.parentElement;
            if (d) {
              u = !0, f = Ce(d);
              break;
            }
          }
        }
      }
      if (!u && a.selector.includes(".")) {
        const w = a.selector.match(/^(\w+)\.(.+)$/);
        if (w) {
          const [, g, l] = w;
          try {
            const d = document.querySelector(a.selector);
            d && (u = !0, f = Ce(d));
          } catch {
          }
        }
      }
      if (!u && a.binding) {
        const w = `[data-bind="${a.binding}"]`;
        try {
          const g = document.querySelector(w);
          g && (u = !0, f = Ce(g));
        } catch {
        }
      }
      ge.value.push({
        selector: f,
        element: a,
        matched: u
      });
    }
    return console.log(`[DevInspector] Applied analysis: ${ge.value.filter((a) => a.matched).length}/${ge.value.length} elements matched`), ge.value.filter((a) => a.matched).length;
  }
  function kt() {
    ge.value = [];
  }
  function _t(e) {
    ge.value = ge.value.filter((n) => n.selector !== e), O.value.add(e), qt();
  }
  function Mt() {
    try {
      const e = localStorage.getItem(F);
      e && (O.value = new Set(JSON.parse(e)));
    } catch {
    }
  }
  function qt() {
    try {
      localStorage.setItem(
        F,
        JSON.stringify([...O.value])
      );
    } catch {
    }
  }
  function Bt() {
    O.value.clear(), localStorage.removeItem(F);
  }
  function ct() {
    const e = {
      removed: [...O.value],
      exportedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    return JSON.stringify(e, null, 2);
  }
  function Ft(e = "dev-inspector-changes.json") {
    const n = ct(), o = new Blob([n], { type: "application/json" }), s = URL.createObjectURL(o), i = document.createElement("a");
    i.href = s, i.download = e, document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL(s);
  }
  function lt() {
    if (!j.value) return [];
    const e = [], n = /* @__PURE__ */ new Set();
    for (const o of Object.values(j.value.components))
      for (const s of o.elements)
        s.binding && !n.has(s.binding) && (n.add(s.binding), e.push({
          binding: s.binding,
          db: s.db,
          api: s.api,
          component: o.componentName
        }));
    return e.sort((o, s) => o.db && !s.db ? -1 : !o.db && s.db ? 1 : o.binding.localeCompare(s.binding));
  }
  function Ut(e) {
    const n = lt();
    if (!e) return n;
    const o = e.toLowerCase();
    return n.filter(
      (s) => {
        var i, c;
        return s.binding.toLowerCase().includes(o) || ((i = s.db) == null ? void 0 : i.table.toLowerCase().includes(o)) || ((c = s.db) == null ? void 0 : c.column.toLowerCase().includes(o)) || s.component.toLowerCase().includes(o);
      }
    );
  }
  function ut() {
    var n, o;
    if (!((o = (n = j.value) == null ? void 0 : n.dbSchema) != null && o.tables)) return [];
    const e = [];
    for (const [s, i] of Object.entries(j.value.dbSchema.tables))
      for (const [c, a] of Object.entries(i.columns))
        e.push({
          table: s,
          column: c,
          type: a.type,
          comment: a.comment,
          fullName: `${s}.${c}`
        });
    return e.sort((s, i) => s.table !== i.table ? s.table.localeCompare(i.table) : s.column.localeCompare(i.column));
  }
  function Ht(e) {
    const n = ut();
    if (!e) return n;
    const o = e.toLowerCase();
    return n.filter(
      (s) => {
        var i;
        return s.table.toLowerCase().includes(o) || s.column.toLowerCase().includes(o) || s.fullName.toLowerCase().includes(o) || ((i = s.comment) == null ? void 0 : i.toLowerCase().includes(o));
      }
    );
  }
  function Gt() {
    var o, s;
    const e = [], n = [];
    if (!((o = j.value) != null && o.components)) return { pageLoad: e, action: n };
    for (const i of ge.value) {
      if (!i.matched) continue;
      const c = i.element.component;
      if (c && ((s = j.value.components[c]) != null && s.apis))
        for (const a of j.value.components[c].apis)
          ["onMount", "useFetch", "useAsyncData"].includes(a.loadTrigger) ? e.some((u) => u.endpoint === a.endpoint && u.method === a.method) || e.push(a) : a.loadTrigger === "action" && (n.some((u) => u.endpoint === a.endpoint && u.method === a.method) || n.push(a));
    }
    return { pageLoad: e, action: n };
  }
  function Jt(e) {
    var n;
    if (!((n = j.value) != null && n.components)) return null;
    for (const o of Object.values(j.value.components))
      if (o.apis) {
        for (const s of o.apis)
          if (s.variable && e.startsWith(s.variable))
            return s;
      }
    return null;
  }
  function Vt(e) {
    const n = e.tagName.toUpperCase();
    return n === "INPUT" || n === "SELECT" || n === "TEXTAREA" ? "form" : n === "BUTTON" || n === "A" && e.hasAttribute("href") || e.getAttribute("role") === "button" || e.closest("button") || e.closest("a[href]") ? "action" : "datasource";
  }
  const De = N([]), ft = N(null);
  function Wt() {
    if (typeof document > "u") return [];
    const e = typeof window < "u" ? window.location.pathname : "/", n = [];
    for (const [o, s] of Object.entries(S.value))
      if (!(s.componentPath && !s.componentPath.includes(e) && e !== "/") && !s.isConditional && !s.tabContext)
        try {
          document.querySelector(o) || n.push(o);
        } catch {
          n.push(o);
        }
    return De.value = n, n;
  }
  function zt(e, n) {
    const o = S.value[e];
    if (!o) return;
    const { [e]: s, ...i } = S.value;
    S.value = {
      ...i,
      [n]: { ...o, id: n, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }
    }, De.value = De.value.filter((c) => c !== e), ce(() => fe());
  }
  function Kt(e) {
    ft.value = e, D.value = !0, k.value = !1, Ke();
  }
  function Yt() {
    const e = De.value;
    if (e.length === 0) return;
    const n = { ...S.value };
    for (const o of e)
      delete n[o];
    S.value = n, De.value = [], ce(() => fe());
  }
  function Xt() {
    ve.value = !ve.value;
  }
  function Zt(e) {
    ae.value = e;
  }
  function Qt() {
    ae.value = null;
  }
  function en() {
    return JSON.stringify({
      elementConfigs: S.value,
      screenConfigs: P.value,
      manualTables: te.value,
      tableRelations: z.value
    }, null, 2);
  }
  function dt() {
    const e = {
      _meta: {
        version: "1.0.0",
        description: "Dev Inspector annotations",
        lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
      },
      annotations: S.value,
      screenConfigs: P.value,
      manualTables: te.value,
      tableRelations: z.value
    };
    return JSON.stringify(e, null, 2);
  }
  function tn(e = "dev-annotations.json") {
    const n = dt(), o = new Blob([n], { type: "application/json" }), s = URL.createObjectURL(o), i = document.createElement("a");
    i.href = s, i.download = e, document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL(s);
  }
  function nn(e) {
    var n, o;
    try {
      const s = JSON.parse(e), i = s.annotations || s.elementConfigs || s;
      if (S.value = { ...S.value, ...i }, s.screenConfigs && (P.value = { ...P.value, ...s.screenConfigs }), (n = s.manualTables) != null && n.length) {
        for (const c of s.manualTables)
          te.value.some((a) => a.name === c.name) || te.value.push(c);
        qe();
      }
      if ((o = s.tableRelations) != null && o.length) {
        for (const c of s.tableRelations)
          z.value.some((a) => a.id === c.id) || z.value.push(c);
        Ze();
      }
    } catch (s) {
      throw console.error("[DevInspector] Failed to import configs:", s), new Error("Invalid JSON format");
    }
  }
  function on() {
    S.value = {};
  }
  function sn(e = "screen-spec-sdd.md") {
    const n = wn(S.value, P.value, ne.value, Q.value), o = new Blob([n], { type: "text/markdown;charset=utf-8" }), s = URL.createObjectURL(o), i = document.createElement("a");
    i.href = s, i.download = e, document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL(s);
  }
  function an(e = "screen-spec-client.md") {
    const n = In(S.value, P.value, ne.value, Q.value), o = new Blob([n], { type: "text/markdown;charset=utf-8" }), s = URL.createObjectURL(o), i = document.createElement("a");
    i.href = s, i.download = e, document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL(s);
  }
  const pt = Oe(() => {
    var n;
    const e = /* @__PURE__ */ new Set();
    for (const o of Object.values(S.value)) {
      if ((n = o.fieldInfo) != null && n.table) {
        const s = o.fieldInfo.table.split(".");
        s.forEach((i, c) => e.add(s.slice(0, c + 1).join(".")));
      }
      if (o.fieldInfoList) {
        for (const s of o.fieldInfoList)
          if (s.table) {
            const i = s.table.split(".");
            i.forEach((c, a) => e.add(i.slice(0, a + 1).join(".")));
          }
      }
    }
    for (const o of te.value)
      e.add(o.name);
    return [...e].sort();
  }), rn = Oe(() => {
    var s;
    const e = [], n = /* @__PURE__ */ new Set(), o = pt.value;
    for (const i of o) {
      const c = i.split(".");
      if (c.length >= 2) {
        const a = c.slice(0, -1).join("."), u = i, f = `${a}->${u}`;
        n.has(f) || (n.add(f), e.push({
          id: f,
          fromTable: a,
          toTable: u,
          type: "has_many",
          inferred: !0
        }));
      }
    }
    for (const i of Object.values(S.value)) {
      const c = i.fieldInfoList || (i.fieldInfo ? [i.fieldInfo] : []);
      for (const a of c)
        if ((s = a.column) != null && s.endsWith("_id") && a.table) {
          const u = a.column.slice(0, -3) + "s";
          if (o.includes(u) || o.some((f) => f.endsWith("." + u))) {
            const f = `${a.table}->${u}`;
            n.has(f) || (n.add(f), e.push({
              id: f,
              fromTable: a.table,
              toTable: u,
              type: "belongs_to",
              foreignKey: a.column,
              inferred: !0
            }));
          }
        }
    }
    for (const i of z.value)
      n.has(i.id) || (n.add(i.id), e.push(i));
    return e;
  }), cn = Oe(() => {
    const e = {};
    for (const n of Object.values(S.value)) {
      const o = n.fieldInfoList || (n.fieldInfo ? [n.fieldInfo] : []);
      for (const s of o)
        s.table && (e[s.table] || (e[s.table] = []), e[s.table].some((i) => i.column === s.column) || e[s.table].push({ column: s.column, type: s.type }));
    }
    for (const n of te.value) {
      e[n.name] || (e[n.name] = []);
      for (const o of n.columns)
        e[n.name].some((s) => s.column === o.column) || e[n.name].push({ column: o.column, type: o.type });
    }
    return e;
  });
  function ln(e) {
    const n = `${e.fromTable}->${e.toTable}`, o = z.value.findIndex((i) => i.id === n), s = { ...e, id: n, inferred: !1 };
    o >= 0 ? z.value[o] = s : z.value.push(s), Ze();
  }
  function un(e) {
    z.value = z.value.filter((n) => n.id !== e), Ze();
  }
  function Ze() {
    try {
      typeof window < "u" && localStorage.setItem(`${re.value}:tableRelations`, JSON.stringify(z.value));
    } catch (e) {
      console.error("[DevInspector] Failed to save table relations:", e);
    }
  }
  function fn() {
    try {
      if (typeof window < "u") {
        const e = localStorage.getItem(`${re.value}:tableRelations`);
        e && (z.value = JSON.parse(e));
      }
    } catch (e) {
      console.error("[DevInspector] Failed to load table relations:", e);
    }
  }
  function qe() {
    try {
      typeof window < "u" && localStorage.setItem(`${re.value}:manualTables`, JSON.stringify(te.value));
    } catch (e) {
      console.error("[DevInspector] Failed to save manual tables:", e);
    }
  }
  function dn() {
    try {
      if (typeof window < "u") {
        const e = localStorage.getItem(`${re.value}:manualTables`);
        e && (te.value = JSON.parse(e));
      }
    } catch (e) {
      console.error("[DevInspector] Failed to load manual tables:", e);
    }
  }
  function pn(e) {
    !e || te.value.some((n) => n.name === e) || (te.value.push({ name: e, columns: [] }), qe());
  }
  function hn(e) {
    te.value = te.value.filter((n) => n.name !== e), qe();
  }
  function mn(e, n, o) {
    const s = te.value.find((i) => i.name === e);
    !s || s.columns.some((i) => i.column === n) || (s.columns.push({ column: n, type: o }), qe());
  }
  function gn(e, n) {
    const o = te.value.find((s) => s.name === e);
    o && (o.columns = o.columns.filter((s) => s.column !== n), qe());
  }
  return {
    // State
    isEnabled: I,
    isAvailable: K,
    isEditMode: k,
    isPickMode: D,
    isInitializing: t,
    hoveredSelector: se,
    currentScreenSpec: W,
    isPanelOpen: Z,
    elementConfigs: S,
    editingElementId: ae,
    // Screen configs
    screenConfigs: P,
    editingScreen: he,
    getScreenConfig: Ae,
    setScreenConfig: T,
    deleteScreenConfig: y,
    suggestScreenApis: Ge,
    // Actions
    init: Y,
    toggle: $e,
    enable: Ie,
    disable: ke,
    toggleEditMode: Ne,
    togglePickMode: $t,
    setHoveredSelector: St,
    generateSelector: Ce,
    getConfiguredSelectors: wt,
    setScreenSpec: It,
    clearScreenSpec: Ct,
    togglePanel: Tt,
    openPanel: tt,
    closePanel: Ke,
    getElementConfig: At,
    setElementConfig: Ye,
    deleteElementConfig: Pt,
    startEditing: Zt,
    stopEditing: Qt,
    exportConfigs: en,
    exportAsFile: dt,
    downloadAnnotations: tn,
    downloadSddSpec: sn,
    downloadClientSpec: an,
    importConfigs: nn,
    clearAllConfigs: on,
    detectSourceBinding: ot,
    autoDetectElementInfo: st,
    // Scan
    isScanning: _e,
    scanProgress: Me,
    scanResults: Je,
    scanCurrentPage: it,
    scanAllPages: jt,
    allPagesRoutes: at,
    currentScanPage: Xe,
    clearScanResults: Rt,
    // Analysis data
    analysisData: j,
    loadAnalysisData: we,
    getAnalyzedElement: je,
    getAnalyzedElementsForPage: Re,
    analysisResults: ge,
    applyAnalysisToPage: rt,
    clearAnalysisResults: kt,
    removeAnalysisResult: _t,
    clearHiddenSelectors: Bt,
    hiddenAnalysisSelectors: O,
    analysisFilter: Te,
    exportChangesForCli: ct,
    downloadChanges: Ft,
    getAvailableBindings: lt,
    searchBindings: Ut,
    getSchemaColumns: ut,
    searchSchemaColumns: Ht,
    getCurrentPageApis: Gt,
    getApiSourceForBinding: Jt,
    // Note highlights
    showNoteHighlights: ve,
    toggleNoteHighlights: Xt,
    noteHighlightFilter: ee,
    noteTableFilter: _,
    // Element type detection
    detectElementType: Vt,
    // Master definitions
    masterDefinitions: ne,
    getMasterDefinition: J,
    setMasterDefinition: q,
    deleteMasterDefinition: M,
    getMastersForTable: B,
    getMasterEntries: ue,
    // Batch definitions
    batchDefinitions: Q,
    getBatchDefinition: Fe,
    setBatchDefinition: Ue,
    deleteBatchDefinition: He,
    // Broken annotation detection
    brokenAnnotations: De,
    remapTargetId: ft,
    detectBrokenAnnotations: Wt,
    detectModalName: Nt,
    detectTabContext: Dt,
    remapAnnotation: zt,
    startRemap: Kt,
    deleteBrokenAnnotations: Yt,
    // Cross Search
    showCrossSearch: be,
    crossSearchQuery: le,
    crossSearchMode: Se,
    crossSearchResults: X,
    // Unannotated Detection
    showUnannotatedDetection: E,
    unannotatedElements: r,
    hoveredUnannotatedSelector: m,
    detectUnannotatedElements: ie,
    quickAnnotate: V,
    // Screen Flow
    showScreenFlow: $,
    screenFlowData: Ee,
    // ER diagram
    erTables: pt,
    erRelations: rn,
    erTableColumns: cn,
    erFocusTable: me,
    tableRelations: z,
    addTableRelation: ln,
    removeTableRelation: un,
    // Manual tables
    manualTables: te,
    addManualTable: pn,
    removeManualTable: hn,
    addManualColumn: mn,
    removeManualColumn: gn
  };
});
function xn() {
  return An();
}
export {
  An as a,
  xn as u
};
