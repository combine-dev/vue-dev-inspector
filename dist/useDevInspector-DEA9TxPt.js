import { ref as N, computed as Ve, watch as Je, nextTick as ae } from "vue";
import { defineStore as en } from "pinia";
function u(y) {
  return y.replace(/\|/g, "\\|").replace(/\n/g, " ");
}
function pt(y) {
  const C = {};
  for (const [k, D] of Object.entries(y)) {
    const t = D.pagePath || "/";
    C[t] || (C[t] = []), C[t].push({ selector: k, config: D });
  }
  return C;
}
function tn(y) {
  var C, k, D, t, K, Y;
  return y.elementType === "chart" ? "チャート" : y.elementType === "form" ? "入力" : y.elementType === "action" ? ((C = y.actionInfo) == null ? void 0 : C.type) === "navigate" ? "リンク" : (((k = y.actionInfo) == null ? void 0 : k.type) === "modal", "ボタン") : y.fieldInfo || ((D = y.note) == null ? void 0 : D.displayType) === "db_direct" || ((t = y.note) == null ? void 0 : t.displayType) === "db_formatted" ? "表示" : ((K = y.note) == null ? void 0 : K.displayType) === "calculated" ? "表示(計算)" : ((Y = y.note) == null ? void 0 : Y.displayType) === "static" ? "表示(固定)" : "表示";
}
function nn(y) {
  var C, k, D, t;
  return (C = y.note) != null && C.text ? y.note.text : (k = y.fieldInfo) != null && k.description ? y.fieldInfo.description : y.fieldInfo ? `${y.fieldInfo.table}.${y.fieldInfo.column}` : (D = y.actionInfo) != null && D.description ? y.actionInfo.description : (t = y.formInfo) != null && t.description ? y.formInfo.description : y.id;
}
function on(y) {
  var k, D;
  const C = [];
  if (y.fieldInfo && C.push(`DBの${y.fieldInfo.table}.${y.fieldInfo.column}を表示`), ((k = y.note) == null ? void 0 : k.displayType) === "calculated" && y.note.calcDescription && C.push(y.note.calcDescription), y.actionInfo) {
    const K = {
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行",
      csv_export: "CSV出力",
      csv_import: "CSV取込",
      email: "メール送信"
    }[y.actionInfo.type] || y.actionInfo.type;
    C.push(`${K}${y.actionInfo.target ? `: ${y.actionInfo.target}` : ""}`);
  }
  return (D = y.formInfo) != null && D.description && C.push(y.formInfo.description), C.join(" / ");
}
function ht(y) {
  const C = [], k = {}, D = {}, t = [];
  for (const K of y)
    if (K.config.isConditional) {
      const Y = K.config.modalName;
      Y ? (D[Y] || (D[Y] = []), D[Y].push(K)) : t.push(K);
    } else if (K.config.tabContext) {
      const Y = K.config.tabContext;
      k[Y] || (k[Y] = []), k[Y].push(K);
    } else
      C.push(K);
  return { common: C, tabs: k, modals: D, unnamedModals: t };
}
function mt(y) {
  var Y, S, se;
  const C = [], k = /* @__PURE__ */ new Set();
  for (const oe of Object.values(y))
    if ((Y = oe.auth) != null && Y.roles)
      for (const P of oe.auth.roles)
        k.add(P);
  const D = [...k].sort();
  if (D.length === 0 && !Object.values(y).some((oe) => oe.auth))
    return C;
  C.push("## 権限マトリクス");
  const t = D.map((oe) => ` ${oe} `).join("|");
  C.push(`| 画面 | パス | 認証 |${t ? t + "|" : ""}`);
  const K = D.map(() => "------").join("|");
  C.push(`|------|------|------|${K ? K + "|" : ""}`);
  for (const [oe, P] of Object.entries(y)) {
    const me = P.name || oe, ee = (S = P.auth) != null && S.required ? "必須" : "不要";
    if ((se = P.auth) != null && se.required) {
      const X = P.auth.roles || [], de = D.map((j) => X.length === 0 || X.includes(j) ? " ○ " : " × ").join("|");
      C.push(`| ${u(me)} | ${u(oe)} | ${ee} |${de ? de + "|" : ""}`);
    } else {
      const X = D.map(() => " - ").join("|");
      C.push(`| ${u(me)} | ${u(oe)} | ${ee} |${X ? X + "|" : ""}`);
    }
  }
  return C.push(""), C;
}
function sn(y, C, k, D = {}) {
  var me, ee, X, de, j, Ce, ye, Z, _, ie, pe, ve, ce, re, Ie, I;
  const t = [];
  t.push("# 画面仕様（SDD）"), t.push("");
  const K = pt(y), Y = /* @__PURE__ */ new Set([...Object.keys(C), ...Object.keys(K)]);
  for (const a of Y) {
    let f = function(A, b) {
      var O, U, ue, Oe, _e, qe, Be, Ue, Me;
      const p = A.filter((W) => W.config.elementType === "datasource" || !W.config.elementType && W.config.fieldInfo), J = A.filter((W) => W.config.elementType === "action" || !W.config.elementType && W.config.actionInfo && !W.config.fieldInfo), G = A.filter((W) => W.config.elementType === "form" || !W.config.elementType && W.config.formInfo && !W.config.fieldInfo && !W.config.actionInfo), B = A.filter(
        (W) => !p.includes(W) && !J.includes(W) && !G.includes(W)
      );
      if (p.length > 0 || B.length > 0) {
        t.push(`${b} データソース`), t.push("| セレクタ | DB | 型 | NULL時 | 表示形式 | 計算ロジック |"), t.push("|---------|-----|-----|--------|---------|------------|");
        for (const { selector: W, config: te } of [...p, ...B]) {
          const V = te.fieldInfo, Ae = V ? `${V.table}.${V.column}` : "", we = (V == null ? void 0 : V.type) || "", Ee = ((O = te.note) == null ? void 0 : O.nullDisplay) || "-", fe = ((U = te.note) == null ? void 0 : U.displayFormat) || "";
          let xe = "";
          ((ue = te.note) == null ? void 0 : ue.displayType) === "calculated" && te.note.calcDescription && (xe = te.note.calcDescription), (Oe = te.note) != null && Oe.storedCalc && te.note.storedCalcLogic && (xe = te.note.storedCalcLogic), t.push(`| ${u(W)} | ${u(Ae)} | ${u(we)} | ${u(Ee)} | ${u(fe)} | ${u(xe)} |`);
        }
        t.push("");
      }
      if (J.length > 0) {
        t.push(`${b} アクション`), t.push("| セレクタ | タイプ | 遷移先/API | 説明 |"), t.push("|---------|--------|-----------|------|");
        for (const { selector: W, config: te } of J) {
          const V = te.actionInfo, Ae = (V == null ? void 0 : V.type) || "";
          let we = (V == null ? void 0 : V.target) || "";
          V != null && V.method && (we = `${V.method} ${we}`);
          const Ee = (V == null ? void 0 : V.description) || ((_e = te.note) == null ? void 0 : _e.text) || "";
          t.push(`| ${u(W)} | ${u(Ae)} | ${u(we)} | ${u(Ee)} |`);
        }
        t.push("");
      }
      if (G.length > 0) {
        t.push(`${b} フォーム`), t.push("| セレクタ | DB | 入力タイプ | 必須 | バリデーション | 初期値 |"), t.push("|---------|-----|----------|------|--------------|--------|");
        for (const { selector: W, config: te } of G) {
          const V = te.fieldInfo, Ae = V ? `${V.table}.${V.column}` : "", we = ((qe = te.formInfo) == null ? void 0 : qe.inputType) || "", Ee = (Be = te.formInfo) != null && Be.required ? "Yes" : "", fe = [
            ...((Ue = te.formInfo) == null ? void 0 : Ue.validation) || [],
            ...(V == null ? void 0 : V.validation) || []
          ].join(", "), xe = ((Me = te.formInfo) == null ? void 0 : Me.defaultValue) || "";
          t.push(`| ${u(W)} | ${u(Ae)} | ${u(we)} | ${Ee} | ${u(fe)} | ${u(xe)} |`);
        }
        t.push("");
      }
    };
    const $ = C[a], q = K[a] || [];
    if (t.push(`## ${a} — ${($ == null ? void 0 : $.name) || a}`), t.push(""), t.push("### 画面情報"), $ != null && $.auth) {
      const A = (me = $.auth.roles) != null && me.length ? ` (${$.auth.roles.join(", ")})` : "";
      t.push(`- 認証: ${$.auth.required ? "必須" : "不要"}${A}`);
    }
    $ != null && $.componentPath && t.push(`- コンポーネント: ${$.componentPath}`), $ != null && $.description && t.push(`- 概要: ${$.description}`), t.push("");
    const F = ($ == null ? void 0 : $.apis) || [];
    if (F.length > 0) {
      t.push("### API"), t.push("| メソッド | エンドポイント | タイミング | 説明 |"), t.push("|---------|-------------|----------|------|");
      for (const A of F) {
        const b = A.loadTiming || "";
        t.push(`| ${A.method} | ${u(A.endpoint)} | ${b} | ${u(A.description || "")} |`);
      }
      t.push("");
    }
    const { common: Q, tabs: H, modals: z, unnamedModals: le } = ht(q), Pe = Object.keys(H).length > 0, Te = Object.keys(z).length > 0 || le.length > 0;
    if (Pe || Te) {
      Q.length > 0 && (t.push("### ページ共通"), t.push(""), f(Q, "####"));
      for (const [A, b] of Object.entries(H))
        t.push(`### ${A}タブ`), t.push(""), f(b, "####");
      for (const [A, b] of Object.entries(z))
        t.push(`### モーダル: ${A}`), t.push(""), f(b, "####");
      le.length > 0 && (t.push("### モーダル要素"), t.push(""), f(le, "####"));
    } else
      f(Q, "###");
    const Ne = q.filter(
      (A) => {
        var b, p;
        return ((b = A.config.actionInfo) == null ? void 0 : b.type) === "csv_export" || ((p = A.config.actionInfo) == null ? void 0 : p.type) === "csv_import";
      }
    );
    if (Ne.length > 0) {
      t.push("### CSV仕様");
      for (const { config: A } of Ne) {
        const b = A.actionInfo, p = b.csvSpec, J = b.type === "csv_export" ? "CSV出力" : "CSV取込", G = b.description || ((ee = A.note) == null ? void 0 : ee.text) || "";
        if (t.push(`#### ${J}: ${G}`), t.push(""), p) {
          const B = [];
          if (p.encoding && B.push(`- エンコーディング: ${p.encoding}`), p.delimiter) {
            const O = { ",": "カンマ", "	": "タブ", "|": "パイプ" };
            B.push(`- 区切り文字: ${O[p.delimiter] || p.delimiter}`);
          }
          if (p.hasHeaderRow !== void 0 && B.push(`- ヘッダー行: ${p.hasHeaderRow ? "あり" : "なし"}`), p.filenamePattern && B.push(`- ファイル名: ${p.filenamePattern}`), B.length > 0 && (t.push("**ファイル設定**"), t.push(...B), t.push("")), p.columns.length > 0 && (p.columns.some((U) => U.processing) ? (t.push("| No | 項目名 | DBマッピング | 加工ロジック | 型 | 必須 | バリデーション | フォーマット | 説明 |"), t.push("|----|--------|-------------|------------|-----|------|--------------|------------|------|"), p.columns.forEach((U, ue) => {
            t.push(`| ${ue + 1} | ${u(U.name)} | ${u(U.dbMapping || "")} | ${u(U.processing || "")} | ${u(U.type || "")} | ${U.required ? "Yes" : ""} | ${u(U.validation || "")} | ${u(U.format || "")} | ${u(U.description || "")} |`);
          })) : (t.push("| No | 項目名 | DBマッピング | 型 | 必須 | バリデーション | フォーマット | 説明 |"), t.push("|----|--------|-------------|-----|------|--------------|------------|------|"), p.columns.forEach((U, ue) => {
            t.push(`| ${ue + 1} | ${u(U.name)} | ${u(U.dbMapping || "")} | ${u(U.type || "")} | ${U.required ? "Yes" : ""} | ${u(U.validation || "")} | ${u(U.format || "")} | ${u(U.description || "")} |`);
          })), t.push("")), b.type === "csv_export") {
            const O = [];
            p.sortOrder && O.push(`- ソート: ${p.sortOrder}`), p.filterCondition && O.push(`- 抽出条件: ${p.filterCondition}`), p.maxRows && O.push(`- 最大行数: ${p.maxRows}`), O.length > 0 && (t.push("**出力オプション**"), t.push(...O), t.push(""));
          }
          if (b.type === "csv_import") {
            const O = [], U = {
              stop_on_first: "最初のエラーで停止",
              skip_and_continue: "スキップして続行",
              collect_all: "全エラー収集"
            }, ue = {
              skip: "スキップ",
              overwrite: "上書き",
              error: "エラー"
            };
            p.errorHandling && O.push(`- エラー処理: ${U[p.errorHandling] || p.errorHandling}`), p.duplicateHandling && O.push(`- 重複処理: ${ue[p.duplicateHandling] || p.duplicateHandling}`), p.preValidation && O.push(`- 事前バリデーション: ${p.preValidation}`), O.length > 0 && (t.push("**取込オプション**"), t.push(...O), t.push(""));
          }
          if (p.errorDefs && p.errorDefs.length > 0) {
            t.push("**エラー定義**"), t.push("| 対象列 | エラー条件 | エラーメッセージ | 種別 |"), t.push("|--------|----------|----------------|------|");
            for (const O of p.errorDefs) {
              const U = O.severity === "warning" ? "警告" : "エラー";
              t.push(`| ${u(O.column || "（全体）")} | ${u(O.condition)} | ${u(O.message)} | ${U} |`);
            }
            t.push("");
          }
        }
      }
    }
    const be = q.filter((A) => {
      var b;
      return ((b = A.config.actionInfo) == null ? void 0 : b.type) === "email";
    });
    if (be.length > 0) {
      t.push("### メール送信仕様");
      for (const { config: A } of be) {
        const b = A.actionInfo, p = b.emailSpec, J = b.description || ((X = A.note) == null ? void 0 : X.text) || "";
        t.push(`#### メール送信: ${J}`), p && (p.trigger && t.push(`- トリガー: ${p.trigger}`), p.to && t.push(`- 宛先: ${p.to}`), p.cc && t.push(`- CC: ${p.cc}`), p.bcc && t.push(`- BCC: ${p.bcc}`), p.subject && t.push(`- 件名: ${p.subject}`), p.bodyTemplate && t.push(`- 本文概要: ${p.bodyTemplate}`), p.templatePath && t.push(`- テンプレート: ${p.templatePath}`), p.variables && p.variables.length > 0 && t.push(`- 差し込み変数: ${p.variables.join(", ")}`), p.attachments && t.push(`- 添付ファイル: ${p.attachments}`), p.conditions && t.push(`- 送信条件: ${p.conditions}`), p.errorHandling && t.push(`- エラー処理: ${p.errorHandling}`)), t.push("");
      }
    }
    const $e = q.filter((A) => {
      var b, p;
      return ((b = A.config.actionInfo) == null ? void 0 : b.type) === "sort" && ((p = A.config.actionInfo) == null ? void 0 : p.sortSpec);
    });
    if ($e.length > 0) {
      t.push("### ソート定義");
      const A = (Ce = (j = (de = $e.find((J) => {
        var G, B;
        return (B = (G = J.config.actionInfo) == null ? void 0 : G.sortSpec) == null ? void 0 : B.unsortedOrder;
      })) == null ? void 0 : de.config.actionInfo) == null ? void 0 : j.sortSpec) == null ? void 0 : Ce.unsortedOrder;
      A && (t.push(`- 未ソート時の並び順: ${A}`), t.push(""));
      const b = $e.find((J) => {
        var G, B;
        return (B = (G = J.config.actionInfo) == null ? void 0 : G.sortSpec) == null ? void 0 : B.isDefaultSort;
      });
      if (b) {
        const J = b.config.actionInfo.sortSpec, G = J.defaultDirection === "desc" ? "降順" : "昇順";
        t.push(`- デフォルトソート: ${J.sortKey || ((ye = b.config.actionInfo) == null ? void 0 : ye.description) || b.selector} (${G})`), t.push("");
      }
      const p = $e.filter((J) => {
        var G, B;
        return (B = (G = J.config.actionInfo) == null ? void 0 : G.sortSpec) == null ? void 0 : B.sortable;
      });
      if (p.length > 0) {
        t.push("| 項目 | ソートキー | データ型 | デフォルト方向 | 備考 |"), t.push("|------|----------|---------|-------------|------|");
        for (const { config: J } of p) {
          const G = J.actionInfo.sortSpec, B = (Z = J.actionInfo) != null && Z.description || (_ = J.note) != null && _.text || J.fieldInfo ? `${(ie = J.fieldInfo) == null ? void 0 : ie.table}.${(pe = J.fieldInfo) == null ? void 0 : pe.column}` : J.id, O = { string: "文字列", number: "数値", date: "日付", custom: "カスタム" }, U = G.sortType ? O[G.sortType] || G.sortType : "", ue = G.defaultDirection === "desc" ? "降順" : G.defaultDirection === "asc" ? "昇順" : "", Oe = [
            G.isDefaultSort ? "初期ソート" : "",
            G.description || ""
          ].filter(Boolean).join(" / ");
          t.push(`| ${u(B)} | ${u(G.sortKey || "")} | ${U} | ${ue} | ${u(Oe)} |`);
        }
        t.push("");
      }
    }
    const Se = q.filter((A) => A.config.elementType === "chart" && A.config.chartSpec);
    if (Se.length > 0) {
      t.push("### チャート仕様");
      for (const { config: A } of Se) {
        const b = A.chartSpec, J = {
          bar: "棒グラフ",
          line: "折れ線グラフ",
          pie: "円グラフ",
          area: "エリアチャート",
          scatter: "散布図",
          doughnut: "ドーナツ",
          radar: "レーダー",
          other: "その他"
        }[b.chartType] || b.chartType, G = b.title || ((ve = A.note) == null ? void 0 : ve.text) || "";
        t.push(`#### ${J}: ${G}`), t.push("");
        const B = [];
        if (b.xAxis && B.push(["X軸", b.xAxis]), b.yAxis && B.push(["Y軸", b.yAxis]), b.dataSource && B.push(["データ取得", b.dataSource]), b.aggregation && B.push(["集計", b.aggregation]), b.filters && B.push(["フィルタ", b.filters]), b.description && B.push(["説明", b.description]), B.length > 0) {
          t.push("| 項目 | 内容 |"), t.push("|------|------|");
          for (const [O, U] of B)
            t.push(`| ${O} | ${u(U)} |`);
          t.push("");
        }
        if (b.series && b.series.length > 0) {
          t.push("| 系列名 | フィールド | 色 |"), t.push("|--------|-----------|-----|");
          for (const O of b.series)
            t.push(`| ${u(O.label)} | ${u(O.field)} | ${u(O.color || "")} |`);
          t.push("");
        }
      }
    }
    t.push("---"), t.push("");
  }
  const S = mt(C);
  S.length > 0 && t.push(...S);
  const se = [];
  for (const [a, f] of Object.entries(y))
    if (((ce = f.actionInfo) == null ? void 0 : ce.type) === "navigate" && f.actionInfo.target) {
      const $ = f.pagePath || "/";
      se.push({
        from: $,
        to: f.actionInfo.target,
        trigger: f.actionInfo.description || ((re = f.note) == null ? void 0 : re.text) || a
      });
    }
  if (se.length > 0) {
    t.push("## 画面フロー"), t.push("| 遷移元 | 遷移先 | トリガー |"), t.push("|--------|--------|---------|");
    for (const a of se) {
      const f = ((Ie = C[a.from]) == null ? void 0 : Ie.name) || a.from, $ = ((I = C[a.to]) == null ? void 0 : I.name) || a.to;
      t.push(`| ${u(f)} (${u(a.from)}) | ${u($)} (${u(a.to)}) | ${u(a.trigger)} |`);
    }
    t.push("");
  }
  const oe = Object.values(k);
  if (oe.length > 0) {
    t.push("## マスタ定義"), t.push("");
    for (const a of oe) {
      t.push(`### ${a.id} — ${a.name} (${a.columnType || ""})`), a.description && (t.push(a.description), t.push("")), t.push("| 値 | ラベル | 説明 |"), t.push("|----|--------|------|");
      for (const f of a.entries)
        t.push(`| ${u(f.value)} | ${u(f.label)} | ${u(f.description || "")} |`);
      if (t.push(""), a.transitions && a.transitions.length > 0) {
        t.push("**状態遷移**"), t.push("| 遷移元 | 遷移先 | トリガー | 条件 |"), t.push("|--------|--------|---------|------|");
        for (const f of a.transitions) {
          const $ = a.entries.find((H) => H.value === f.from), q = a.entries.find((H) => H.value === f.to), F = $ ? `${$.label} (${f.from})` : f.from, Q = q ? `${q.label} (${f.to})` : f.to;
          t.push(`| ${u(F)} | ${u(Q)} | ${u(f.trigger)} | ${u(f.condition || "")} |`);
        }
        t.push("");
      }
    }
  }
  const P = Object.values(D);
  if (P.length > 0) {
    t.push("## バッチ処理定義"), t.push("");
    for (const a of P) {
      if (t.push(`### ${a.name}`), a.schedule && t.push(`- スケジュール: ${a.schedule}`), a.trigger && t.push(`- トリガー: ${a.trigger}`), a.description && t.push(`- 概要: ${a.description}`), a.timeout && t.push(`- タイムアウト: ${a.timeout}`), a.retryPolicy && t.push(`- リトライ: ${a.retryPolicy}`), a.inputTables && a.inputTables.length > 0 && t.push(`- 入力: ${a.inputTables.join(", ")}`), a.outputTables && a.outputTables.length > 0 && t.push(`- 出力: ${a.outputTables.join(", ")}`), t.push(""), a.steps.length > 0) {
        t.push("**処理ステップ**"), t.push("| No | 処理内容 | 対象 | 種別 | エラー時 |"), t.push("|----|---------|------|------|---------|");
        for (const f of a.steps)
          t.push(`| ${f.order} | ${u(f.description)} | ${u(f.target || "-")} | ${u(f.type || "")} | ${u(f.errorHandling || "")} |`);
        t.push("");
      }
      a.notifyOnError && t.push(`- エラー通知: ${a.notifyOnError}`), a.notifyOnComplete && t.push(`- 完了通知: ${a.notifyOnComplete}`), (a.notifyOnError || a.notifyOnComplete) && t.push("");
    }
  }
  return t.join(`
`);
}
function an(y, C, k, D = {}) {
  var P, me, ee, X, de, j, Ce, ye;
  const t = [];
  t.push("# 画面仕様書"), t.push("");
  const K = pt(y), Y = /* @__PURE__ */ new Set([...Object.keys(C), ...Object.keys(K)]);
  for (const Z of Y) {
    const _ = C[Z], ie = K[Z] || [];
    if (t.push(`## ${(_ == null ? void 0 : _.name) || Z}`), t.push(`**URL:** ${Z}`), t.push(""), _ != null && _.description && (t.push("### 概要"), t.push(_.description), t.push("")), _ != null && _.auth) {
      if (t.push("### 認証"), t.push(`- ${_.auth.required ? "ログイン必須" : "ログイン不要"}`), (P = _.auth.roles) != null && P.length) {
        const I = _.auth.roles.map((a) => ({ admin: "管理者", manager: "マネージャー", user: "ユーザー" })[a] || a);
        t.push(`- 権限: ${I.join("、")}`);
      }
      t.push("");
    }
    if (ie.length > 0) {
      let I = function(Q, H) {
        t.push("| No | 項目名 | 種別 | 説明 | 必須 | 備考 |"), t.push("|----|--------|------|------|------|------|"), Q.forEach(({ config: z }, le) => {
          var $e, Se, A, b;
          const Pe = nn(z), Te = tn(z), ke = on(z), Ne = ($e = z.formInfo) != null && $e.required ? "必須" : "", be = [];
          (Se = z.note) != null && Se.condition && be.push(z.note.condition), (A = z.note) != null && A.unit && be.push(`単位: ${z.note.unit}`), (b = z.note) != null && b.nullDisplay && z.note.nullDisplay !== "-" && be.push(`空欄時: ${z.note.nullDisplay}`), t.push(`| ${H + le} | ${u(Pe)} | ${Te} | ${u(ke)} | ${Ne} | ${u(be.join(" / "))} |`);
        }), t.push("");
      };
      const { common: a, tabs: f, modals: $, unnamedModals: q } = ht(ie);
      if (Object.keys(f).length > 0 || Object.keys($).length > 0 || q.length > 0) {
        t.push("### 画面項目"), t.push("");
        let Q = 1;
        a.length > 0 && (t.push("#### ページ共通"), I(a, Q), Q += a.length);
        for (const [H, z] of Object.entries(f))
          t.push(`#### ${H}タブ`), I(z, Q), Q += z.length;
        for (const [H, z] of Object.entries($))
          t.push(`#### モーダル: ${H}`), I(z, Q), Q += z.length;
        q.length > 0 && (t.push("#### モーダル要素"), I(q, Q));
      } else
        t.push("### 画面項目"), I(a, 1);
    }
    const pe = (_ == null ? void 0 : _.apis) || [];
    if (pe.length > 0) {
      t.push("### 使用API"), t.push("| メソッド | エンドポイント | 説明 |"), t.push("|---------|-------------|------|");
      for (const I of pe)
        t.push(`| ${I.method} | ${u(I.endpoint)} | ${u(I.description || "")} |`);
      t.push("");
    }
    const ve = ie.filter(
      (I) => {
        var a, f;
        return ((a = I.config.actionInfo) == null ? void 0 : a.type) === "csv_export" || ((f = I.config.actionInfo) == null ? void 0 : f.type) === "csv_import";
      }
    );
    if (ve.length > 0) {
      t.push("### CSV入出力仕様");
      for (const { config: I } of ve) {
        const a = I.actionInfo, f = a.csvSpec, $ = a.type === "csv_export" ? "CSV出力" : "CSV取込", q = a.description || ((me = I.note) == null ? void 0 : me.text) || "";
        if (t.push(`#### ${$}: ${q}`), t.push(""), f) {
          const F = [];
          if (f.encoding && F.push(`- エンコーディング: ${f.encoding}`), f.filenamePattern && F.push(`- ファイル名: ${f.filenamePattern}`), F.length > 0 && (t.push(...F), t.push("")), f.columns.length > 0 && (f.columns.some((H) => H.processing) ? (t.push("| No | 項目名 | 加工 | 型 | 必須 | 説明 |"), t.push("|----|--------|------|-----|------|------|"), f.columns.forEach((H, z) => {
            t.push(`| ${z + 1} | ${u(H.name)} | ${u(H.processing || "")} | ${u(H.type || "")} | ${H.required ? "必須" : ""} | ${u(H.description || "")} |`);
          })) : (t.push("| No | 項目名 | 型 | 必須 | 説明 |"), t.push("|----|--------|-----|------|------|"), f.columns.forEach((H, z) => {
            t.push(`| ${z + 1} | ${u(H.name)} | ${u(H.type || "")} | ${H.required ? "必須" : ""} | ${u(H.description || "")} |`);
          })), t.push("")), f.errorDefs && f.errorDefs.length > 0) {
            t.push("**エラー時の動作**"), t.push("| エラー条件 | メッセージ |"), t.push("|----------|----------|");
            for (const Q of f.errorDefs) {
              const H = Q.column ? `[${Q.column}] ` : "";
              t.push(`| ${u(H + Q.condition)} | ${u(Q.message)} |`);
            }
            t.push("");
          }
        }
      }
    }
    const ce = ie.filter((I) => {
      var a;
      return ((a = I.config.actionInfo) == null ? void 0 : a.type) === "email";
    });
    if (ce.length > 0) {
      t.push("### メール送信");
      for (const { config: I } of ce) {
        const a = I.actionInfo, f = a.emailSpec, $ = a.description || ((ee = I.note) == null ? void 0 : ee.text) || "";
        t.push(`#### ${$}`), f && (f.trigger && t.push(`- タイミング: ${f.trigger}`), f.to && t.push(`- 宛先: ${f.to}`), f.subject && t.push(`- 件名: ${f.subject}`)), t.push("");
      }
    }
    const re = ie.filter((I) => {
      var a, f;
      return ((a = I.config.actionInfo) == null ? void 0 : a.type) === "sort" && ((f = I.config.actionInfo) == null ? void 0 : f.sortSpec);
    });
    if (re.length > 0) {
      t.push("### ソート");
      const I = (j = (de = (X = re.find(($) => {
        var q, F;
        return (F = (q = $.config.actionInfo) == null ? void 0 : q.sortSpec) == null ? void 0 : F.unsortedOrder;
      })) == null ? void 0 : X.config.actionInfo) == null ? void 0 : de.sortSpec) == null ? void 0 : j.unsortedOrder;
      I && t.push(`- 初期並び順: ${I}`);
      const a = re.filter(($) => {
        var q, F;
        return (F = (q = $.config.actionInfo) == null ? void 0 : q.sortSpec) == null ? void 0 : F.sortable;
      });
      a.length > 0 && t.push(`- ソート可能項目: ${a.map(($) => {
        var q, F;
        return ((q = $.config.note) == null ? void 0 : q.text) || ((F = $.config.fieldInfo) == null ? void 0 : F.column) || $.selector;
      }).join("、")}`);
      const f = re.find(($) => {
        var q, F;
        return (F = (q = $.config.actionInfo) == null ? void 0 : q.sortSpec) == null ? void 0 : F.isDefaultSort;
      });
      if (f) {
        const $ = f.config.actionInfo.sortSpec, q = $.defaultDirection === "desc" ? "降順" : "昇順";
        t.push(`- デフォルト: ${((Ce = f.config.note) == null ? void 0 : Ce.text) || $.sortKey || ""} ${q}`);
      }
      t.push("");
    }
    const Ie = ie.filter((I) => I.config.elementType === "chart" && I.config.chartSpec);
    if (Ie.length > 0) {
      t.push("### チャート");
      for (const { config: I } of Ie) {
        const a = I.chartSpec, $ = {
          bar: "棒グラフ",
          line: "折れ線グラフ",
          pie: "円グラフ",
          area: "エリアチャート",
          scatter: "散布図",
          doughnut: "ドーナツ",
          radar: "レーダー",
          other: "その他"
        }[a.chartType] || a.chartType, q = a.title || ((ye = I.note) == null ? void 0 : ye.text) || "";
        if (t.push(`#### ${$}: ${q}`), a.xAxis || a.yAxis) {
          const F = [a.xAxis ? `X軸: ${a.xAxis}` : "", a.yAxis ? `Y軸: ${a.yAxis}` : ""].filter(Boolean);
          t.push(`- ${F.join(" / ")}`);
        }
        a.series && a.series.length > 0 && t.push(`- 系列: ${a.series.map((F) => F.label).join("、")}`), a.description && t.push(`- ${a.description}`), t.push("");
      }
    }
    _ != null && _.notes && (t.push("### 備考"), t.push(_.notes), t.push("")), t.push("---"), t.push("");
  }
  const S = Object.values(k).filter((Z) => Z.transitions && Z.transitions.length > 0);
  if (S.length > 0) {
    t.push("## 状態遷移");
    for (const Z of S) {
      t.push(`### ${Z.name}`), t.push("| 遷移元 | 遷移先 | 操作 | 条件 |"), t.push("|--------|--------|------|------|");
      for (const _ of Z.transitions) {
        const ie = Z.entries.find((re) => re.value === _.from), pe = Z.entries.find((re) => re.value === _.to), ve = ie ? ie.label : _.from, ce = pe ? pe.label : _.to;
        t.push(`| ${u(ve)} | ${u(ce)} | ${u(_.trigger)} | ${u(_.condition || "")} |`);
      }
      t.push("");
    }
  }
  const se = Object.values(D);
  if (se.length > 0) {
    t.push("## バッチ処理"), t.push("");
    for (const Z of se)
      t.push(`### ${Z.name}`), Z.schedule && t.push(`- 実行タイミング: ${Z.schedule}`), Z.description && t.push(`- 概要: ${Z.description}`), t.push("");
  }
  const oe = mt(C);
  return oe.length > 0 && t.push(...oe), t.join(`
`);
}
const rn = {}, cn = "devInspector:elementConfigs", ut = "devInspector:screenConfigs", ft = "devInspector:masterDefinitions", dt = "devInspector:batchDefinitions", ln = en("devInspector", () => {
  const y = N({}), C = N(!1), k = N(!1), D = N(!1), t = N(!1), K = N(null), Y = N(!1), S = N({}), se = N(null), oe = N(null), P = N({}), me = N(!1), ee = N({}), X = N({}), de = Ve(() => y.value.storageKey || cn), j = N(null), Ce = N("all"), ye = N(!0), Z = N("all"), _ = N(!1), ie = N(""), pe = N("column"), ve = N(!1), ce = N([]), re = N(null), Ie = N(!1), I = N(/* @__PURE__ */ new Set()), a = "devInspector:hiddenAnalysisSelectors", f = Ve(() => y.value.enabledInProduction ? !0 : typeof import.meta < "u" && rn ? !1 : process.env.NODE_ENV === "development"), $ = N(!1);
  function q(e = {}) {
    y.value = e, z(), Pe(), $e(), B(), Lt(), e.analysisData && (j.value = e.analysisData);
    const n = e.analysisDataUrl ?? "/dev-inspector-analysis.json";
    e.autoLoadAnalysis !== !1 && f.value && F(n);
  }
  async function F(e) {
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
  function Q(e) {
    if (!j.value) return null;
    for (const n of Object.values(j.value.components)) {
      const o = n.elements.find((s) => s.selector === e);
      if (o) return o;
    }
    return null;
  }
  function H(e) {
    if (!j.value) return [];
    const n = [];
    for (const [o, s] of Object.entries(j.value.components))
      (!e || o.includes(e)) && n.push(...s.elements);
    return n;
  }
  function z() {
    try {
      const e = y.value.initialAnnotations || {};
      if (typeof window < "u") {
        const n = localStorage.getItem(de.value), o = n ? JSON.parse(n) : {};
        S.value = { ...e, ...o };
      } else
        S.value = e;
    } catch (e) {
      console.error("[DevInspector] Failed to load configs:", e);
    }
  }
  function le() {
    try {
      if (typeof window < "u") {
        const e = JSON.stringify(S.value);
        localStorage.setItem(de.value, e), console.log("[DevInspector] Saved configs:", Object.keys(S.value).length, "items");
      }
    } catch (e) {
      console.error("[DevInspector] Failed to save configs:", e);
    }
  }
  Je(S, () => {
    ae(() => {
      le();
    });
  }, { deep: !0 });
  function Pe() {
    try {
      if (typeof window < "u") {
        const e = localStorage.getItem(ut);
        e && (P.value = JSON.parse(e));
      }
    } catch (e) {
      console.error("[DevInspector] Failed to load screen configs:", e);
    }
  }
  function Te() {
    try {
      if (typeof window < "u") {
        const e = JSON.stringify(P.value);
        localStorage.setItem(ut, e);
      }
    } catch (e) {
      console.error("[DevInspector] Failed to save screen configs:", e);
    }
  }
  Je(P, () => {
    ae(() => {
      Te();
    });
  }, { deep: !0 });
  function ke(e) {
    const n = e || (typeof window < "u" ? window.location.pathname : "/");
    return P.value[n];
  }
  function Ne(e) {
    P.value = {
      ...P.value,
      [e.path]: e
    }, ae(() => Te());
  }
  function be(e) {
    const { [e]: n, ...o } = P.value;
    P.value = o, ae(() => Te());
  }
  function $e() {
    try {
      if (typeof window < "u") {
        const e = localStorage.getItem(ft);
        e && (ee.value = JSON.parse(e));
      }
    } catch (e) {
      console.error("[DevInspector] Failed to load master definitions:", e);
    }
  }
  function Se() {
    try {
      typeof window < "u" && localStorage.setItem(ft, JSON.stringify(ee.value));
    } catch (e) {
      console.error("[DevInspector] Failed to save master definitions:", e);
    }
  }
  Je(ee, () => {
    ae(() => {
      Se();
    });
  }, { deep: !0 });
  function A(e) {
    return ee.value[e];
  }
  function b(e) {
    ee.value = {
      ...ee.value,
      [e.id]: { ...e, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }
    }, ae(() => Se());
  }
  function p(e) {
    const { [e]: n, ...o } = ee.value;
    ee.value = o, ae(() => Se());
  }
  function J(e) {
    return Object.values(ee.value).filter((n) => n.table === e);
  }
  function G(e) {
    var n;
    return ((n = ee.value[e]) == null ? void 0 : n.entries) || [];
  }
  function B() {
    try {
      if (typeof window < "u") {
        const e = localStorage.getItem(dt);
        e && (X.value = JSON.parse(e));
      }
    } catch (e) {
      console.error("[DevInspector] Failed to load batch definitions:", e);
    }
  }
  function O() {
    try {
      typeof window < "u" && localStorage.setItem(dt, JSON.stringify(X.value));
    } catch (e) {
      console.error("[DevInspector] Failed to save batch definitions:", e);
    }
  }
  Je(X, () => {
    ae(() => {
      O();
    });
  }, { deep: !0 });
  function U(e) {
    return X.value[e];
  }
  function ue(e) {
    X.value = {
      ...X.value,
      [e.id]: { ...e, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }
    }, ae(() => O());
  }
  function Oe(e) {
    const { [e]: n, ...o } = X.value;
    X.value = o, ae(() => O());
  }
  function _e() {
    var s, i, d, r, h;
    const e = [], n = /* @__PURE__ */ new Set(), o = {};
    for (const m of Object.values(S.value)) {
      const w = m.fieldInfoList || (m.fieldInfo ? [m.fieldInfo] : []), g = ((s = m.sourceBinding) == null ? void 0 : s.type) === "v-model";
      for (const c of w)
        c.table && (o[c.table] || (o[c.table] = { read: !1, write: !1, isList: !1 }), o[c.table].read = !0, g && (o[c.table].write = !0));
      if (((i = m.note) == null ? void 0 : i.displayType) === "db_direct" || ((d = m.note) == null ? void 0 : d.displayType) === "db_formatted")
        for (const c of w)
          c.table && o[c.table] && (m.id.includes("tbody") || m.id.includes(" tr") || m.id.includes(" td")) && (o[c.table].isList = !0);
      if (((r = m.actionInfo) == null ? void 0 : r.type) === "api" && m.actionInfo.target) {
        const c = `${m.actionInfo.method || "GET"}:${m.actionInfo.target}`;
        n.has(c) || (n.add(c), e.push({
          method: m.actionInfo.method || "GET",
          endpoint: m.actionInfo.target,
          description: m.actionInfo.description || "",
          loadTiming: "action"
        }));
      }
    }
    for (const [m, w] of Object.entries(o)) {
      if (w.read) {
        const g = w.isList ? `/api/${m}` : `/api/${m}/:id`, c = `GET:${g}`;
        n.has(c) || (n.add(c), e.push({
          method: "GET",
          endpoint: g,
          description: w.isList ? `${m} 一覧取得` : `${m} 詳細取得`,
          loadTiming: "onMount"
        }));
      }
      if (w.write) {
        const g = `/api/${m}/:id`, c = `PUT:${g}`;
        n.has(c) || (n.add(c), e.push({
          method: "PUT",
          endpoint: g,
          description: `${m} 更新`,
          loadTiming: "action"
        }));
      }
    }
    if ((h = j.value) != null && h.components) {
      const m = typeof window < "u" ? window.location.pathname : "/";
      for (const [w, g] of Object.entries(j.value.components)) {
        const c = w.replace(/^pages/, "").replace(/\.vue$/, "").replace(/\/index$/, "").replace(/\[.*?\]/g, "[^/]+");
        let l = !1;
        if (m === "/" && w.includes("index"))
          l = !0;
        else if (w.includes("pages/"))
          try {
            l = !!m.match(new RegExp(`^${c}$`));
          } catch {
          }
        if (l && g.apis)
          for (const v of g.apis) {
            if (!v.endpoint) continue;
            const M = `${v.method}:${v.endpoint}`;
            n.has(M) || (n.add(M), e.push({
              method: v.method,
              endpoint: v.endpoint,
              description: v.variable ? `→ ${v.variable}` : "",
              loadTiming: ["onMount", "useFetch", "useAsyncData"].includes(v.loadTrigger) ? "onMount" : "action"
            }));
          }
      }
    }
    return e;
  }
  const qe = Ve(() => {
    var s, i, d, r, h, m, w, g, c, l, v, M, R, E, x;
    const e = ie.value.trim().toLowerCase();
    if (!e) return [];
    const n = pe.value, o = [];
    for (const [L, T] of Object.entries(S.value)) {
      const ne = T.pagePath || "/", De = P.value[ne], He = (De == null ? void 0 : De.name) || ne;
      if (n === "column") {
        const Ye = (s = T.fieldInfoList) != null && s.length ? T.fieldInfoList : T.fieldInfo ? [T.fieldInfo] : [];
        for (const he of Ye)
          (`${he.table}.${he.column}`.toLowerCase().includes(e) || he.table.toLowerCase().includes(e) || he.column.toLowerCase().includes(e)) && o.push({
            pagePath: ne,
            pageName: He,
            selector: L,
            elementType: T.elementType,
            matchedField: `${he.table}.${he.column}`,
            matchContext: `${he.type || ""} ${he.description || ""}`.trim()
          });
        const Ge = ((i = T.note) == null ? void 0 : i.calcSources) || [], Qt = ((d = T.note) == null ? void 0 : d.storedCalcSources) || [];
        for (const he of [...Ge, ...Qt])
          he.toLowerCase().includes(e) && o.push({
            pagePath: ne,
            pageName: He,
            selector: L,
            elementType: T.elementType,
            matchedField: he,
            matchContext: ((r = T.note) == null ? void 0 : r.calcDescription) || ((h = T.note) == null ? void 0 : h.storedCalcLogic) || "参照元"
          });
      } else if (n === "api")
        (w = (m = T.actionInfo) == null ? void 0 : m.target) != null && w.toLowerCase().includes(e) && o.push({
          pagePath: ne,
          pageName: He,
          selector: L,
          elementType: T.elementType,
          matchedField: `${T.actionInfo.method || ""} ${T.actionInfo.target}`.trim(),
          matchContext: T.actionInfo.description || T.actionInfo.type
        });
      else if (n === "text") {
        const Ye = [
          (g = T.note) == null ? void 0 : g.text,
          (c = T.note) == null ? void 0 : c.calcDescription,
          (l = T.note) == null ? void 0 : l.formatDescription,
          (v = T.note) == null ? void 0 : v.condition,
          (M = T.actionInfo) == null ? void 0 : M.description,
          (R = T.formInfo) == null ? void 0 : R.description,
          L
          // selector itself
        ].filter(Boolean);
        for (const Ge of Ye)
          if (Ge.toLowerCase().includes(e)) {
            o.push({
              pagePath: ne,
              pageName: He,
              selector: L,
              elementType: T.elementType,
              matchedField: Ge.substring(0, 60),
              matchContext: ((x = (E = T.note) == null ? void 0 : E.text) == null ? void 0 : x.substring(0, 40)) || ""
            });
            break;
          }
      }
    }
    if (n === "api")
      for (const [L, T] of Object.entries(P.value))
        for (const ne of T.apis || [])
          ne.endpoint.toLowerCase().includes(e) && o.push({
            pagePath: L,
            pageName: T.name || L,
            selector: "",
            elementType: void 0,
            matchedField: `${ne.method} ${ne.endpoint}`,
            matchContext: ne.description || "画面API"
          });
    return o;
  });
  function Be() {
    if (typeof document > "u") return [];
    const e = typeof window < "u" ? window.location.pathname : "/", n = /* @__PURE__ */ new Set();
    for (const [c, l] of Object.entries(S.value))
      (!l.pagePath || l.pagePath === e) && n.add(c);
    const o = /* @__PURE__ */ new Set();
    for (const c of n)
      try {
        const l = document.querySelector(c);
        l && o.add(l);
      } catch {
      }
    const s = [], i = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
    function h(c) {
      if (c.closest("[data-dev-inspector]")) return !0;
      const l = fe(c);
      if (n.has(l) || i.has(l)) return !0;
      for (const v of o)
        if (v.contains(c) && v !== c) return !0;
      return !1;
    }
    function m(c, l, v, M) {
      const R = fe(c);
      i.add(R), r.add(c), s.push({ selector: R, tagName: c.tagName.toLowerCase(), category: l, text: v.substring(0, 50), suggestedType: M });
    }
    document.querySelectorAll("[data-di-binding]").forEach((c) => {
      var M;
      const l = c;
      if (l.closest("[data-dev-inspector]")) return;
      const v = l.getAttribute("data-di-binding") || "";
      d.has(v) || h(l) || (d.add(v), m(l, "binding", ((M = l.textContent) == null ? void 0 : M.trim()) || "", "datasource"));
    }), document.querySelectorAll("table").forEach((c) => {
      if (c.closest("[data-dev-inspector]")) return;
      const l = window.getComputedStyle(c);
      if (l.display === "none" || l.visibility === "hidden") return;
      const v = [];
      if (c.querySelectorAll("thead th, thead td").forEach((E) => {
        var x;
        v.push(((x = E.textContent) == null ? void 0 : x.trim()) || "");
      }), v.length === 0) {
        const E = c.querySelector("tr");
        E && E.querySelectorAll("th, td").forEach((x) => {
          var L;
          v.push(((L = x.textContent) == null ? void 0 : L.trim()) || "");
        });
      }
      const M = c.querySelector("tbody tr") || c.querySelectorAll("tr")[v.length > 0 ? 1 : 0];
      if (!M) return;
      M.querySelectorAll("td").forEach((E, x) => {
        var De;
        const L = E, T = ((De = L.textContent) == null ? void 0 : De.trim()) || "";
        if (!T || L.querySelector("[data-di-binding]") || h(L)) return;
        const ne = v[x] || `列${x + 1}`;
        m(L, "binding", `${ne}: ${T}`, "datasource");
      });
    }), document.querySelectorAll("input, select, textarea").forEach((c) => {
      var R, E;
      const l = c;
      if (l.closest("[data-dev-inspector]") || l.type === "hidden") return;
      const v = window.getComputedStyle(l);
      if (v.display === "none" || v.visibility === "hidden" || h(l)) return;
      const M = ((E = (R = l.closest("label")) == null ? void 0 : R.textContent) == null ? void 0 : E.trim()) || l.getAttribute("aria-label") || l.placeholder || l.name || l.tagName.toLowerCase();
      m(l, "form", M || "", "form");
    });
    const w = /* @__PURE__ */ new Set();
    document.querySelectorAll("table").forEach((c) => {
      const l = c.querySelector("tbody tr") || c.querySelectorAll("tr")[1];
      l && w.add(l);
    }), document.querySelectorAll('button, a[href], [role="button"]').forEach((c) => {
      var E;
      const l = c;
      if (l.closest("[data-dev-inspector]")) return;
      const v = ((E = l.textContent) == null ? void 0 : E.trim()) || "";
      if (!v) return;
      const M = window.getComputedStyle(l);
      if (M.display === "none" || M.visibility === "hidden") return;
      const R = l.closest("tr");
      R && R.closest("table") && !w.has(R) || h(l) || m(l, "action", v, "action");
    });
    const g = s.filter((c) => {
      try {
        const l = document.querySelector(c.selector);
        if (!l) return !0;
        for (const v of r)
          if (v !== l && v.contains(l))
            return !1;
        return !0;
      } catch {
        return !0;
      }
    });
    return ce.value = g, g;
  }
  function Ue(e, n) {
    const o = {
      elementType: n,
      pagePath: typeof window < "u" ? window.location.pathname : "/",
      note: { text: "", type: "todo" }
    };
    n === "action" ? o.actionInfo = { type: "function", description: "" } : n === "form" && (o.formInfo = { inputType: "text" }), ze(e, o), se.value = e, ce.value = ce.value.filter((s) => s.selector !== e);
  }
  const Me = Ve(() => {
    var r, h, m, w;
    const e = /* @__PURE__ */ new Map(), n = [], o = /* @__PURE__ */ new Set();
    for (const [g, c] of Object.entries(P.value))
      e.set(g, {
        path: g,
        name: c.name || g,
        annotationCount: Object.values(S.value).filter((l) => l.pagePath === g).length
      });
    for (const [g, c] of Object.entries(S.value))
      if (((r = c.actionInfo) == null ? void 0 : r.type) === "navigate" && c.actionInfo.target) {
        const l = c.pagePath || "/", v = c.actionInfo.target, M = `${l}→${v}`;
        if (!e.has(l)) {
          const R = P.value[l];
          e.set(l, {
            path: l,
            name: (R == null ? void 0 : R.name) || l,
            annotationCount: Object.values(S.value).filter((E) => E.pagePath === l).length
          });
        }
        if (!e.has(v)) {
          const R = P.value[v];
          e.set(v, {
            path: v,
            name: (R == null ? void 0 : R.name) || v,
            annotationCount: Object.values(S.value).filter((E) => E.pagePath === v).length
          });
        }
        if (!o.has(M)) {
          o.add(M);
          let R = c.actionInfo.description || ((h = c.note) == null ? void 0 : h.text) || "";
          if (!R && typeof document < "u")
            try {
              const E = document.querySelector(g);
              E && (R = ((w = (m = E.textContent) == null ? void 0 : m.trim()) == null ? void 0 : w.substring(0, 20)) || "");
            } catch {
            }
          n.push({
            from: l,
            to: v,
            label: R,
            selector: g
          });
        }
      }
    const s = Array.from(e.values()), i = /* @__PURE__ */ new Set();
    for (const g of n)
      i.add(g.from), i.add(g.to);
    const d = s.filter((g) => !i.has(g.path));
    return { nodes: s, edges: n, orphanPages: d };
  });
  async function W() {
    f.value && (C.value ? (C.value = !1, k.value = !1, se.value = null) : await te());
  }
  async function te() {
    if (!f.value) return;
    if (j.value && !$.value && y.value.autoApplyAnalysis !== !1) {
      t.value = !0, C.value = !0;
      try {
        await new Promise((n) => setTimeout(n, 300)), st(), $.value = !0;
      } finally {
        t.value = !1;
      }
    } else
      C.value = !0;
  }
  function V() {
    C.value = !1, k.value = !1, se.value = null;
  }
  function Ae() {
    k.value = !k.value, k.value || (se.value = null), k.value && (D.value = !1);
  }
  function we() {
    D.value = !D.value, D.value && (k.value = !1), oe.value = null;
  }
  function Ee(e) {
    oe.value = e;
  }
  function fe(e) {
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
        (r) => !r.startsWith("hover:") && !r.startsWith("focus:") && !r.startsWith("-") && !/[/\[\]()!@#$%^&*=+{}|\\:'"<>,?.~]/.test(r)
      ).slice(0, 2);
      i.length > 0 && (s += "." + i.join("."));
      const d = o.parentElement;
      if (d) {
        const r = Array.from(d.children).filter(
          (h) => h.tagName === o.tagName
        );
        if (r.length > 1) {
          const h = r.indexOf(o) + 1;
          s += `:nth-of-type(${h})`;
        }
      }
      n.unshift(s), o = o.parentElement;
    }
    return n.join(" > ");
  }
  function xe() {
    const e = typeof window < "u" ? window.location.pathname : "/";
    return Object.keys(S.value).filter((n) => {
      const o = S.value[n];
      return o ? (n.includes(">") || n.startsWith("#") || n.startsWith("[") || n.startsWith(".")) && (!o.componentPath || o.componentPath.includes(e) || e === "/") : !1;
    });
  }
  function gt(e) {
    K.value = e;
  }
  function yt() {
    K.value = null;
  }
  function vt() {
    Y.value ? Ke() : Ze();
  }
  function Xe() {
    [0, 50, 100, 150, 200, 250, 320].forEach((n) => setTimeout(() => window.dispatchEvent(new Event("resize")), n));
  }
  function Ze() {
    Y.value = !0, typeof document < "u" && (document.body.style.transition = "margin-right 0.3s ease", document.body.style.marginRight = "360px", Xe());
  }
  function Ke() {
    Y.value = !1, typeof document < "u" && (document.body.style.transition = "margin-right 0.3s ease", document.body.style.marginRight = "", Xe());
  }
  function bt(e) {
    return S.value[e];
  }
  function $t(e) {
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
          const d = window.getComputedStyle(o);
          if (d.position === "fixed") {
            const r = parseInt(d.zIndex, 10);
            if (!isNaN(r) && r >= 40) {
              const h = o.getBoundingClientRect();
              if (h.width >= window.innerWidth * 0.9 && h.height >= window.innerHeight * 0.9)
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
  function St(e) {
    if (!(typeof document > "u"))
      try {
        const n = document.querySelector(e);
        if (!n) return;
        const o = [];
        let s = n.parentElement;
        for (; s && s !== document.body; ) {
          const i = s.getAttribute("role"), d = s.className || "";
          if (s.tagName === "DIALOG" || i === "dialog" || i === "alertdialog" || typeof d == "string" && /\b(modal|dialog|v-dialog|el-dialog|drawer)\b/i.test(d)) {
            const h = wt(s);
            h && o.push(h);
          }
          s = s.parentElement;
        }
        return o.length === 0 ? void 0 : (o.reverse(), o.join(" > "));
      } catch {
      }
  }
  function wt(e) {
    var o;
    const n = e.querySelectorAll('h1, h2, h3, h4, [class*="title"], [class*="header"] h1, [class*="header"] h2, [class*="header"] h3, [class*="header"] span');
    for (const s of n) {
      let i = s.parentElement, d = !1;
      for (; i && i !== e; ) {
        const h = i.getAttribute("role"), m = i.className || "";
        if (i.tagName === "DIALOG" || h === "dialog" || h === "alertdialog" || typeof m == "string" && /\b(modal|dialog|v-dialog|el-dialog|drawer)\b/i.test(m)) {
          d = !0;
          break;
        }
        i = i.parentElement;
      }
      if (d) continue;
      const r = (o = s.textContent) == null ? void 0 : o.trim();
      if (r && r.length <= 30) return r;
    }
  }
  function Ct(e, n) {
    if (e.getAttribute("aria-selected") === "true" || e.classList.contains("active") || e.classList.contains("is-active")) return !0;
    const o = e.className || "";
    return !!(/border-[tb]-[2-9]/.test(o) || /\b(bg-blue|bg-primary|bg-indigo)\b/.test(o) || /\btext-white\b/.test(o) && n.some((s) => s !== e && !/\btext-white\b/.test(s.className || "")) || /\b(bg-white|bg-surface)\b/.test(o) && !/shadow-inset|shadow-\[inset/.test(o) && n.some((s) => s !== e && !/\b(bg-white|bg-surface)\b/.test(s.className || "")));
  }
  function Qe(e) {
    var o;
    const n = [...e.querySelectorAll(':scope > button, :scope > a, :scope > [role="tab"]')];
    if (!(n.length < 2 || n.length > 12)) {
      for (const s of n)
        if (Ct(s, n)) {
          const i = (o = s.textContent) == null ? void 0 : o.trim();
          if (i && i.length <= 30) return i;
        }
    }
  }
  function It(e) {
    let n = Qe(e);
    if (n) return n;
    for (const o of e.children)
      if (n = Qe(o), n) return n;
  }
  function Tt(e) {
    if (!(typeof document > "u"))
      try {
        const n = document.querySelector(e);
        if (!n) return;
        const o = [], s = /* @__PURE__ */ new Set();
        let i = n.parentElement;
        for (; i && i !== document.body; ) {
          let d = i.previousElementSibling;
          for (; d; ) {
            if (!s.has(d)) {
              s.add(d);
              const r = It(d);
              if (r) {
                o.push(r);
                break;
              }
            }
            d = d.previousElementSibling;
          }
          i = i.parentElement;
        }
        return o.length === 0 ? void 0 : (o.reverse(), o.join(" > "));
      } catch {
      }
  }
  function ze(e, n) {
    var g;
    const o = (/* @__PURE__ */ new Date()).toISOString(), s = S.value[e], i = typeof window < "u" ? window.location.pathname : "/", d = n.isConditional ?? (s == null ? void 0 : s.isConditional) ?? $t(e), r = "modalName" in n ? n.modalName : s == null ? void 0 : s.modalName, h = "tabContext" in n ? n.tabContext : s == null ? void 0 : s.tabContext, m = "chartSpec" in n ? n.chartSpec : s == null ? void 0 : s.chartSpec, w = {
      ...s,
      ...n,
      id: e,
      isConditional: d,
      modalName: r,
      tabContext: h,
      chartSpec: m,
      pagePath: n.pagePath || (s == null ? void 0 : s.pagePath) || i,
      componentPath: n.componentPath || ((g = K.value) == null ? void 0 : g.componentPath) || "",
      createdAt: (s == null ? void 0 : s.createdAt) || o,
      updatedAt: o
    };
    S.value = {
      ...S.value,
      [e]: w
    }, ae(() => le());
  }
  function At(e) {
    const { [e]: n, ...o } = S.value;
    S.value = o, ae(() => le());
  }
  function et(e) {
    var R;
    const n = ((R = e.textContent) == null ? void 0 : R.trim()) || "", o = e.tagName.toUpperCase();
    if (!n && o !== "INPUT" && o !== "SELECT" && o !== "TEXTAREA")
      return null;
    const s = e.__vueParentComponent;
    if (s) {
      const E = s.props || {}, x = s.attrs || {};
      if ("modelValue" in E || "model-value" in x)
        return {
          type: "v-model",
          source: "form binding detected",
          isStatic: !1
        };
    }
    if (o === "INPUT" || o === "SELECT" || o === "TEXTAREA") {
      const E = e.type || "text", x = e.placeholder || "";
      return {
        type: "v-model",
        source: `${o.toLowerCase()}[type=${E}]${x ? ` placeholder="${x}"` : ""}`,
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
    const d = e.closest('ul, ol, [role="list"]');
    if (d && d.children.length > 1)
      return {
        type: "data",
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
    for (const E of r) {
      const x = e.closest(E);
      if (x) {
        const L = x.parentElement;
        if (L && Array.from(L.children).filter(
          (ne) => ne !== x && ne.className === x.className
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
      const E = e.parentElement, L = Array.from(E.children).filter((T) => T.tagName === e.tagName);
      if (L.length >= 2 && L.filter(
        (ne) => ne.children.length === e.children.length
      ).length >= 2)
        return {
          type: "data",
          source: "repeated element",
          isStatic: !1
        };
    }
    const m = [
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
    for (const E of m)
      if (E.test(n))
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
    for (const E of w)
      if (E.test(n))
        return {
          type: "data",
          source: "name pattern",
          isStatic: !1
        };
    const c = ["LABEL", "TH", "LEGEND", "FIGCAPTION"].includes(o), v = [
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
    ].some((E) => E.test(n)), M = o === "BUTTON" || e.closest("button") !== null || e.getAttribute("role") === "button";
    return c || v || M && n.length < 20 ? {
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
  function tt(e, n) {
    var l, v, M, R, E;
    const o = {}, s = ((l = e.textContent) == null ? void 0 : l.trim()) || "", i = e.getAttribute("data-di-binding");
    e.getAttribute("data-di-db"), e.getAttribute("data-di-component"), e.getAttribute("data-di-db-comment");
    let d = e;
    if (!i) {
      const x = e.closest("[data-di-binding]");
      x && (d = x);
    }
    const r = d.getAttribute("data-di-binding"), h = d.getAttribute("data-di-db"), m = d.getAttribute("data-di-component"), w = d.getAttribute("data-di-db-type"), g = d.getAttribute("data-di-db-comment");
    if (r || h) {
      if (o.sourceBinding = {
        type: "api",
        source: r || void 0,
        isStatic: !1
      }, h) {
        const [x, L] = h.split(".");
        x && L && (o.fieldInfo = {
          table: x,
          column: L,
          type: w || void 0,
          description: g || void 0
        });
      }
      return m && (o.devMeta = {
        usedComponents: [m]
      }), o.note = {
        type: "info",
        text: `【データバインディング】${r}${h ? ` → ${h}` : ""}`
      }, o;
    }
    const c = et(e);
    if (c)
      if (o.sourceBinding = c, c.isStatic)
        o.note = {
          type: "info",
          text: `【固定文言】${s}`
        };
      else if (c.type === "v-model") {
        const x = e.tagName.toUpperCase();
        if (x === "INPUT" || x === "SELECT" || x === "TEXTAREA") {
          const L = e.placeholder || "", T = ((M = (v = e.closest("label")) == null ? void 0 : v.textContent) == null ? void 0 : M.trim()) || e.getAttribute("aria-label") || ((E = (R = document.querySelector(`label[for="${e.id}"]`)) == null ? void 0 : R.textContent) == null ? void 0 : E.trim()) || "";
          o.note = {
            type: "todo",
            text: `【フォーム要素】${T || L || x.toLowerCase()}`
          };
        }
      } else c.type === "api" && (o.note = {
        type: "question",
        text: `【動的データ】${s.substring(0, 100)}${s.length > 100 ? "..." : ""}`
      });
    return o;
  }
  const je = N(!1), Re = N(0), Fe = N([]);
  async function nt(e = {}) {
    je.value = !0, Re.value = 0, Fe.value = [];
    const { rescan: n = !1 } = e;
    if (n) {
      const o = typeof window < "u" ? window.location.pathname : "/", s = Object.keys(S.value).filter((i) => {
        const d = S.value[i];
        return !d.componentPath || d.componentPath.includes(o);
      });
      for (const i of s)
        delete S.value[i];
      ae(() => le());
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
        const c = window.getComputedStyle(g);
        if (c.display === "none" || c.visibility === "hidden" || c.opacity === "0") return;
        const l = fe(g);
        if (S.value[l]) return;
        const v = g.tagName.toUpperCase(), M = ((x = g.textContent) == null ? void 0 : x.trim()) || "";
        if (v === "INPUT" || v === "SELECT" || v === "TEXTAREA") {
          i.push(g);
          return;
        }
        if (M.length > 300 || M.length === 0 || v === "DIV" && (Array.from(g.childNodes).filter((T) => T.nodeType === Node.TEXT_NODE).map((T) => {
          var ne;
          return ((ne = T.textContent) == null ? void 0 : ne.trim()) || "";
        }).join("").trim().length === 0 || g.children.length > 3))
          return;
        const R = Array.from(g.childNodes).some((L) => {
          var T;
          return L.nodeType === Node.TEXT_NODE && (((T = L.textContent) == null ? void 0 : T.trim()) || "").length > 0;
        }), E = !Array.from(g.children).some((L) => ["DIV", "P", "UL", "OL", "TABLE", "SECTION", "ARTICLE"].includes(L.tagName));
        (R || g.children.length === 0 && M.length > 0 || E) && i.push(g);
      });
      const d = i.length;
      let r = 0, h = 0;
      const m = 20;
      for (let w = 0; w < i.length; w += m) {
        const g = i.slice(w, w + m);
        for (const c of g) {
          const l = fe(c), v = tt(c, l);
          v.sourceBinding && (Fe.value.push({ selector: l, element: c, detected: v }), ze(l, v), h++), r++, Re.value = Math.round(r / d * 100);
        }
        await new Promise((c) => setTimeout(c, 10));
      }
      return h;
    } finally {
      je.value = !1, Re.value = 100;
    }
  }
  const ot = N([]), We = N("");
  async function Et(e) {
    var o;
    if (!e)
      return console.warn("[DevInspector] Router not provided for all pages scan"), [];
    je.value = !0;
    const n = [];
    try {
      const s = e.getRoutes(), i = [];
      for (const d of s)
        d.path.includes(":") && !d.path.includes("?") || d.redirect || d.path !== "/:pathMatch(.*)*" && ((o = d.meta) != null && o.devInspectorSkip || i.push(d.path));
      ot.value = i;
      for (const d of i) {
        We.value = d;
        try {
          await e.push(d), await new Promise((h) => setTimeout(h, 500));
          const r = await nt();
          n.push({ page: d, count: r });
        } catch (r) {
          console.warn(`[DevInspector] Failed to scan page ${d}:`, r), n.push({ page: d, count: 0 });
        }
      }
      return n;
    } finally {
      je.value = !1, We.value = "";
    }
  }
  function xt() {
    Fe.value = [], Re.value = 0;
  }
  const ge = N([]);
  async function st() {
    var d;
    if (!j.value)
      return console.warn("[DevInspector] No analysis data loaded. Call loadAnalysisData first."), 0;
    ge.value = [];
    const e = typeof window < "u" ? window.location.pathname : "/", n = (r) => {
      if (!j.value) return null;
      for (const [h, m] of Object.entries(j.value.components))
        if (m.componentName === r || m.componentName.toLowerCase() === r.toLowerCase() || h.toLowerCase().includes(`/${r.toLowerCase()}.vue`))
          return m;
      return null;
    }, o = (r, h = /* @__PURE__ */ new Set()) => {
      const m = [];
      if (h.has(r.componentName)) return m;
      if (h.add(r.componentName), m.push(...r.elements), r.usedComponents)
        for (const w of r.usedComponents) {
          const g = n(w);
          g && m.push(...o(g, h));
        }
      return m;
    }, s = [], i = /* @__PURE__ */ new Set();
    for (const [r, h] of Object.entries(j.value.components)) {
      const m = r.replace(/^pages/, "").replace(/\.vue$/, "").replace(/\/index$/, "").replace(/\[.*?\]/g, "[^/]+");
      let w = !1;
      if ((e === "/" && r.includes("index") || r.includes("pages/") && e.match(new RegExp(`^${m}$`))) && (w = !0), w) {
        const g = o(h);
        s.push(...g), i.add(h.componentName), h.usedComponents && h.usedComponents.forEach((c) => i.add(c));
      }
    }
    for (const [r, h] of Object.entries(j.value.components))
      r.includes("components/") && !i.has(h.componentName) && s.push(...h.elements);
    for (const r of s) {
      if (I.value.has(r.selector))
        continue;
      let h = !1, m = r.selector;
      try {
        document.querySelector(r.selector) && (h = !0);
      } catch {
      }
      if (!h && r.text && !r.binding) {
        const w = r.text.replace(/\[コメント\]\s*/, ""), g = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT,
          null
        );
        for (; g.nextNode(); ) {
          const c = g.currentNode;
          if ((d = c.textContent) != null && d.includes(w)) {
            const l = c.parentElement;
            if (l) {
              h = !0, m = fe(l);
              break;
            }
          }
        }
      }
      if (!h && r.selector.includes(".")) {
        const w = r.selector.match(/^(\w+)\.(.+)$/);
        if (w) {
          const [, g, c] = w;
          try {
            const l = document.querySelector(r.selector);
            l && (h = !0, m = fe(l));
          } catch {
          }
        }
      }
      if (!h && r.binding) {
        const w = `[data-bind="${r.binding}"]`;
        try {
          const g = document.querySelector(w);
          g && (h = !0, m = fe(g));
        } catch {
        }
      }
      ge.value.push({
        selector: m,
        element: r,
        matched: h
      });
    }
    return console.log(`[DevInspector] Applied analysis: ${ge.value.filter((r) => r.matched).length}/${ge.value.length} elements matched`), ge.value.filter((r) => r.matched).length;
  }
  function Nt() {
    ge.value = [];
  }
  function Ot(e) {
    ge.value = ge.value.filter((n) => n.selector !== e), I.value.add(e), Dt();
  }
  function Lt() {
    try {
      const e = localStorage.getItem(a);
      e && (I.value = new Set(JSON.parse(e)));
    } catch {
    }
  }
  function Dt() {
    try {
      localStorage.setItem(
        a,
        JSON.stringify([...I.value])
      );
    } catch {
    }
  }
  function Pt() {
    I.value.clear(), localStorage.removeItem(a);
  }
  function it() {
    const e = {
      removed: [...I.value],
      exportedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    return JSON.stringify(e, null, 2);
  }
  function jt(e = "dev-inspector-changes.json") {
    const n = it(), o = new Blob([n], { type: "application/json" }), s = URL.createObjectURL(o), i = document.createElement("a");
    i.href = s, i.download = e, document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL(s);
  }
  function at() {
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
  function Rt(e) {
    const n = at();
    if (!e) return n;
    const o = e.toLowerCase();
    return n.filter(
      (s) => {
        var i, d;
        return s.binding.toLowerCase().includes(o) || ((i = s.db) == null ? void 0 : i.table.toLowerCase().includes(o)) || ((d = s.db) == null ? void 0 : d.column.toLowerCase().includes(o)) || s.component.toLowerCase().includes(o);
      }
    );
  }
  function rt() {
    var n, o;
    if (!((o = (n = j.value) == null ? void 0 : n.dbSchema) != null && o.tables)) return [];
    const e = [];
    for (const [s, i] of Object.entries(j.value.dbSchema.tables))
      for (const [d, r] of Object.entries(i.columns))
        e.push({
          table: s,
          column: d,
          type: r.type,
          comment: r.comment,
          fullName: `${s}.${d}`
        });
    return e.sort((s, i) => s.table !== i.table ? s.table.localeCompare(i.table) : s.column.localeCompare(i.column));
  }
  function kt(e) {
    const n = rt();
    if (!e) return n;
    const o = e.toLowerCase();
    return n.filter(
      (s) => {
        var i;
        return s.table.toLowerCase().includes(o) || s.column.toLowerCase().includes(o) || s.fullName.toLowerCase().includes(o) || ((i = s.comment) == null ? void 0 : i.toLowerCase().includes(o));
      }
    );
  }
  function _t() {
    var o, s;
    const e = [], n = [];
    if (!((o = j.value) != null && o.components)) return { pageLoad: e, action: n };
    for (const i of ge.value) {
      if (!i.matched) continue;
      const d = i.element.component;
      if (d && ((s = j.value.components[d]) != null && s.apis))
        for (const r of j.value.components[d].apis)
          ["onMount", "useFetch", "useAsyncData"].includes(r.loadTrigger) ? e.some((h) => h.endpoint === r.endpoint && h.method === r.method) || e.push(r) : r.loadTrigger === "action" && (n.some((h) => h.endpoint === r.endpoint && h.method === r.method) || n.push(r));
    }
    return { pageLoad: e, action: n };
  }
  function qt(e) {
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
  function Bt(e) {
    const n = e.tagName.toUpperCase();
    return n === "INPUT" || n === "SELECT" || n === "TEXTAREA" ? "form" : n === "BUTTON" || n === "A" && e.hasAttribute("href") || e.getAttribute("role") === "button" || e.closest("button") || e.closest("a[href]") ? "action" : "datasource";
  }
  const Le = N([]), ct = N(null);
  function Ut() {
    if (typeof document > "u") return [];
    const e = typeof window < "u" ? window.location.pathname : "/", n = [];
    for (const [o, s] of Object.entries(S.value))
      if (!(s.componentPath && !s.componentPath.includes(e) && e !== "/") && !s.isConditional && !s.tabContext)
        try {
          document.querySelector(o) || n.push(o);
        } catch {
          n.push(o);
        }
    return Le.value = n, n;
  }
  function Mt(e, n) {
    const o = S.value[e];
    if (!o) return;
    const { [e]: s, ...i } = S.value;
    S.value = {
      ...i,
      [n]: { ...o, id: n, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }
    }, Le.value = Le.value.filter((d) => d !== e), ae(() => le());
  }
  function Ft(e) {
    ct.value = e, D.value = !0, k.value = !1, Ke();
  }
  function Ht() {
    const e = Le.value;
    if (e.length === 0) return;
    const n = { ...S.value };
    for (const o of e)
      delete n[o];
    S.value = n, Le.value = [], ae(() => le());
  }
  function Gt() {
    ye.value = !ye.value;
  }
  function Vt(e) {
    se.value = e;
  }
  function Jt() {
    se.value = null;
  }
  function Kt() {
    return JSON.stringify({
      elementConfigs: S.value,
      screenConfigs: P.value
    }, null, 2);
  }
  function lt() {
    const e = {
      _meta: {
        version: "1.0.0",
        description: "Dev Inspector annotations",
        lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
      },
      annotations: S.value,
      screenConfigs: P.value
    };
    return JSON.stringify(e, null, 2);
  }
  function zt(e = "dev-annotations.json") {
    const n = lt(), o = new Blob([n], { type: "application/json" }), s = URL.createObjectURL(o), i = document.createElement("a");
    i.href = s, i.download = e, document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL(s);
  }
  function Wt(e) {
    try {
      const n = JSON.parse(e), o = n.annotations || n.elementConfigs || n;
      S.value = { ...S.value, ...o }, n.screenConfigs && (P.value = { ...P.value, ...n.screenConfigs });
    } catch (n) {
      throw console.error("[DevInspector] Failed to import configs:", n), new Error("Invalid JSON format");
    }
  }
  function Yt() {
    S.value = {};
  }
  function Xt(e = "screen-spec-sdd.md") {
    const n = sn(S.value, P.value, ee.value, X.value), o = new Blob([n], { type: "text/markdown;charset=utf-8" }), s = URL.createObjectURL(o), i = document.createElement("a");
    i.href = s, i.download = e, document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL(s);
  }
  function Zt(e = "screen-spec-client.md") {
    const n = an(S.value, P.value, ee.value, X.value), o = new Blob([n], { type: "text/markdown;charset=utf-8" }), s = URL.createObjectURL(o), i = document.createElement("a");
    i.href = s, i.download = e, document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL(s);
  }
  return {
    // State
    isEnabled: C,
    isAvailable: f,
    isEditMode: k,
    isPickMode: D,
    isInitializing: t,
    hoveredSelector: oe,
    currentScreenSpec: K,
    isPanelOpen: Y,
    elementConfigs: S,
    editingElementId: se,
    // Screen configs
    screenConfigs: P,
    editingScreen: me,
    getScreenConfig: ke,
    setScreenConfig: Ne,
    deleteScreenConfig: be,
    suggestScreenApis: _e,
    // Actions
    init: q,
    toggle: W,
    enable: te,
    disable: V,
    toggleEditMode: Ae,
    togglePickMode: we,
    setHoveredSelector: Ee,
    generateSelector: fe,
    getConfiguredSelectors: xe,
    setScreenSpec: gt,
    clearScreenSpec: yt,
    togglePanel: vt,
    openPanel: Ze,
    closePanel: Ke,
    getElementConfig: bt,
    setElementConfig: ze,
    deleteElementConfig: At,
    startEditing: Vt,
    stopEditing: Jt,
    exportConfigs: Kt,
    exportAsFile: lt,
    downloadAnnotations: zt,
    downloadSddSpec: Xt,
    downloadClientSpec: Zt,
    importConfigs: Wt,
    clearAllConfigs: Yt,
    detectSourceBinding: et,
    autoDetectElementInfo: tt,
    // Scan
    isScanning: je,
    scanProgress: Re,
    scanResults: Fe,
    scanCurrentPage: nt,
    scanAllPages: Et,
    allPagesRoutes: ot,
    currentScanPage: We,
    clearScanResults: xt,
    // Analysis data
    analysisData: j,
    loadAnalysisData: F,
    getAnalyzedElement: Q,
    getAnalyzedElementsForPage: H,
    analysisResults: ge,
    applyAnalysisToPage: st,
    clearAnalysisResults: Nt,
    removeAnalysisResult: Ot,
    clearHiddenSelectors: Pt,
    hiddenAnalysisSelectors: I,
    analysisFilter: Ce,
    exportChangesForCli: it,
    downloadChanges: jt,
    getAvailableBindings: at,
    searchBindings: Rt,
    getSchemaColumns: rt,
    searchSchemaColumns: kt,
    getCurrentPageApis: _t,
    getApiSourceForBinding: qt,
    // Note highlights
    showNoteHighlights: ye,
    toggleNoteHighlights: Gt,
    noteHighlightFilter: Z,
    // Element type detection
    detectElementType: Bt,
    // Master definitions
    masterDefinitions: ee,
    getMasterDefinition: A,
    setMasterDefinition: b,
    deleteMasterDefinition: p,
    getMastersForTable: J,
    getMasterEntries: G,
    // Batch definitions
    batchDefinitions: X,
    getBatchDefinition: U,
    setBatchDefinition: ue,
    deleteBatchDefinition: Oe,
    // Broken annotation detection
    brokenAnnotations: Le,
    remapTargetId: ct,
    detectBrokenAnnotations: Ut,
    detectModalName: St,
    detectTabContext: Tt,
    remapAnnotation: Mt,
    startRemap: Ft,
    deleteBrokenAnnotations: Ht,
    // Cross Search
    showCrossSearch: _,
    crossSearchQuery: ie,
    crossSearchMode: pe,
    crossSearchResults: qe,
    // Unannotated Detection
    showUnannotatedDetection: ve,
    unannotatedElements: ce,
    hoveredUnannotatedSelector: re,
    detectUnannotatedElements: Be,
    quickAnnotate: Ue,
    // Screen Flow
    showScreenFlow: Ie,
    screenFlowData: Me
  };
});
function pn() {
  return ln();
}
export {
  pn as a,
  ln as u
};
