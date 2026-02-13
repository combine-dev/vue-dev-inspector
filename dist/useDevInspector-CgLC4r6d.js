import { ref as L, computed as Te, watch as Ee, nextTick as X } from "vue";
import { defineStore as Gt } from "pinia";
function u(y) {
  return y.replace(/\|/g, "\\|").replace(/\n/g, " ");
}
function Ke(y) {
  const C = {};
  for (const [q, B] of Object.entries(y)) {
    const t = B.pagePath || "/";
    C[t] || (C[t] = []), C[t].push({ selector: q, config: B });
  }
  return C;
}
function Wt(y) {
  var C, q, B, t, W, Z;
  return y.elementType === "form" ? "入力" : y.elementType === "action" ? ((C = y.actionInfo) == null ? void 0 : C.type) === "navigate" ? "リンク" : (((q = y.actionInfo) == null ? void 0 : q.type) === "modal", "ボタン") : y.fieldInfo || ((B = y.note) == null ? void 0 : B.displayType) === "db_direct" || ((t = y.note) == null ? void 0 : t.displayType) === "db_formatted" ? "表示" : ((W = y.note) == null ? void 0 : W.displayType) === "calculated" ? "表示(計算)" : ((Z = y.note) == null ? void 0 : Z.displayType) === "static" ? "表示(固定)" : "表示";
}
function zt(y) {
  var C, q, B, t;
  return (C = y.note) != null && C.text ? y.note.text : (q = y.fieldInfo) != null && q.description ? y.fieldInfo.description : y.fieldInfo ? `${y.fieldInfo.table}.${y.fieldInfo.column}` : (B = y.actionInfo) != null && B.description ? y.actionInfo.description : (t = y.formInfo) != null && t.description ? y.formInfo.description : y.id;
}
function Kt(y) {
  var q, B;
  const C = [];
  if (y.fieldInfo && C.push(`DBの${y.fieldInfo.table}.${y.fieldInfo.column}を表示`), ((q = y.note) == null ? void 0 : q.displayType) === "calculated" && y.note.calcDescription && C.push(y.note.calcDescription), y.actionInfo) {
    const W = {
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行",
      csv_export: "CSV出力",
      csv_import: "CSV取込",
      email: "メール送信"
    }[y.actionInfo.type] || y.actionInfo.type;
    C.push(`${W}${y.actionInfo.target ? `: ${y.actionInfo.target}` : ""}`);
  }
  return (B = y.formInfo) != null && B.description && C.push(y.formInfo.description), C.join(" / ");
}
function Ye(y) {
  var Z, b, z;
  const C = [], q = /* @__PURE__ */ new Set();
  for (const J of Object.values(y))
    if ((Z = J.auth) != null && Z.roles)
      for (const x of J.auth.roles)
        q.add(x);
  const B = [...q].sort();
  if (B.length === 0 && !Object.values(y).some((J) => J.auth))
    return C;
  C.push("## 権限マトリクス");
  const t = B.map((J) => ` ${J} `).join("|");
  C.push(`| 画面 | パス | 認証 |${t ? t + "|" : ""}`);
  const W = B.map(() => "------").join("|");
  C.push(`|------|------|------|${W ? W + "|" : ""}`);
  for (const [J, x] of Object.entries(y)) {
    const ie = x.name || J, H = (b = x.auth) != null && b.required ? "必須" : "不要";
    if ((z = x.auth) != null && z.required) {
      const A = x.auth.roles || [], O = B.map((T) => A.length === 0 || A.includes(T) ? " ○ " : " × ").join("|");
      C.push(`| ${u(ie)} | ${u(J)} | ${H} |${O ? O + "|" : ""}`);
    } else {
      const A = B.map(() => " - ").join("|");
      C.push(`| ${u(ie)} | ${u(J)} | ${H} |${A ? A + "|" : ""}`);
    }
  }
  return C.push(""), C;
}
function Yt(y, C, q, B = {}) {
  var ie, H, A, O, T, ae, Q, le, E, M, R, re, ee, te, Y, U;
  const t = [];
  t.push("# 画面仕様（SDD）"), t.push("");
  const W = Ke(y), Z = /* @__PURE__ */ new Set([...Object.keys(C), ...Object.keys(W)]);
  for (const f of Z) {
    const v = C[f], G = W[f] || [];
    if (t.push(`## ${f} — ${(v == null ? void 0 : v.name) || f}`), t.push(""), t.push("### 画面情報"), v != null && v.auth) {
      const $ = (ie = v.auth.roles) != null && ie.length ? ` (${v.auth.roles.join(", ")})` : "";
      t.push(`- 認証: ${v.auth.required ? "必須" : "不要"}${$}`);
    }
    v != null && v.componentPath && t.push(`- コンポーネント: ${v.componentPath}`), v != null && v.description && t.push(`- 概要: ${v.description}`), t.push("");
    const he = (v == null ? void 0 : v.apis) || [];
    if (he.length > 0) {
      t.push("### API"), t.push("| メソッド | エンドポイント | タイミング | 説明 |"), t.push("|---------|-------------|----------|------|");
      for (const $ of he) {
        const P = $.loadTiming || "";
        t.push(`| ${$.method} | ${u($.endpoint)} | ${P} | ${u($.description || "")} |`);
      }
      t.push("");
    }
    const de = G.filter(($) => $.config.elementType === "datasource" || !$.config.elementType && $.config.fieldInfo), me = G.filter(($) => $.config.elementType === "action" || !$.config.elementType && $.config.actionInfo && !$.config.fieldInfo), ue = G.filter(($) => $.config.elementType === "form" || !$.config.elementType && $.config.formInfo && !$.config.fieldInfo && !$.config.actionInfo), Se = G.filter(
      ($) => !de.includes($) && !me.includes($) && !ue.includes($)
    );
    if (de.length > 0 || Se.length > 0) {
      t.push("### データソース"), t.push("| セレクタ | DB | 型 | NULL時 | 表示形式 | 計算ロジック |"), t.push("|---------|-----|-----|--------|---------|------------|");
      for (const { selector: $, config: P } of [...de, ...Se]) {
        const i = P.fieldInfo, ne = i ? `${i.table}.${i.column}` : "", oe = (i == null ? void 0 : i.type) || "", K = ((H = P.note) == null ? void 0 : H.nullDisplay) || "-", F = ((A = P.note) == null ? void 0 : A.displayFormat) || "";
        let _ = "";
        ((O = P.note) == null ? void 0 : O.displayType) === "calculated" && P.note.calcDescription && (_ = P.note.calcDescription), (T = P.note) != null && T.storedCalc && P.note.storedCalcLogic && (_ = P.note.storedCalcLogic), t.push(`| ${u($)} | ${u(ne)} | ${u(oe)} | ${u(K)} | ${u(F)} | ${u(_)} |`);
      }
      t.push("");
    }
    if (me.length > 0) {
      t.push("### アクション"), t.push("| セレクタ | タイプ | 遷移先/API | 説明 |"), t.push("|---------|--------|-----------|------|");
      for (const { selector: $, config: P } of me) {
        const i = P.actionInfo, ne = (i == null ? void 0 : i.type) || "";
        let oe = (i == null ? void 0 : i.target) || "";
        i != null && i.method && (oe = `${i.method} ${oe}`);
        const K = (i == null ? void 0 : i.description) || ((ae = P.note) == null ? void 0 : ae.text) || "";
        t.push(`| ${u($)} | ${u(ne)} | ${u(oe)} | ${u(K)} |`);
      }
      t.push("");
    }
    if (ue.length > 0) {
      t.push("### フォーム"), t.push("| セレクタ | DB | 入力タイプ | 必須 | バリデーション | 初期値 |"), t.push("|---------|-----|----------|------|--------------|--------|");
      for (const { selector: $, config: P } of ue) {
        const i = P.fieldInfo, ne = i ? `${i.table}.${i.column}` : "", oe = ((Q = P.formInfo) == null ? void 0 : Q.inputType) || "", K = (le = P.formInfo) != null && le.required ? "Yes" : "", F = [
          ...((E = P.formInfo) == null ? void 0 : E.validation) || [],
          ...(i == null ? void 0 : i.validation) || []
        ].join(", "), _ = ((M = P.formInfo) == null ? void 0 : M.defaultValue) || "";
        t.push(`| ${u($)} | ${u(ne)} | ${u(oe)} | ${K} | ${u(F)} | ${u(_)} |`);
      }
      t.push("");
    }
    const fe = G.filter(
      ($) => {
        var P, i;
        return ((P = $.config.actionInfo) == null ? void 0 : P.type) === "csv_export" || ((i = $.config.actionInfo) == null ? void 0 : i.type) === "csv_import";
      }
    );
    if (fe.length > 0) {
      t.push("### CSV仕様");
      for (const { config: $ } of fe) {
        const P = $.actionInfo, i = P.csvSpec, ne = P.type === "csv_export" ? "CSV出力" : "CSV取込", oe = P.description || ((R = $.note) == null ? void 0 : R.text) || "";
        if (t.push(`#### ${ne}: ${oe}`), t.push(""), i) {
          const K = [];
          if (i.encoding && K.push(`- エンコーディング: ${i.encoding}`), i.delimiter) {
            const F = { ",": "カンマ", "	": "タブ", "|": "パイプ" };
            K.push(`- 区切り文字: ${F[i.delimiter] || i.delimiter}`);
          }
          if (i.hasHeaderRow !== void 0 && K.push(`- ヘッダー行: ${i.hasHeaderRow ? "あり" : "なし"}`), i.filenamePattern && K.push(`- ファイル名: ${i.filenamePattern}`), K.length > 0 && (t.push("**ファイル設定**"), t.push(...K), t.push("")), i.columns.length > 0 && (i.columns.some((_) => _.processing) ? (t.push("| No | 項目名 | DBマッピング | 加工ロジック | 型 | 必須 | バリデーション | フォーマット | 説明 |"), t.push("|----|--------|-------------|------------|-----|------|--------------|------------|------|"), i.columns.forEach((_, ge) => {
            t.push(`| ${ge + 1} | ${u(_.name)} | ${u(_.dbMapping || "")} | ${u(_.processing || "")} | ${u(_.type || "")} | ${_.required ? "Yes" : ""} | ${u(_.validation || "")} | ${u(_.format || "")} | ${u(_.description || "")} |`);
          })) : (t.push("| No | 項目名 | DBマッピング | 型 | 必須 | バリデーション | フォーマット | 説明 |"), t.push("|----|--------|-------------|-----|------|--------------|------------|------|"), i.columns.forEach((_, ge) => {
            t.push(`| ${ge + 1} | ${u(_.name)} | ${u(_.dbMapping || "")} | ${u(_.type || "")} | ${_.required ? "Yes" : ""} | ${u(_.validation || "")} | ${u(_.format || "")} | ${u(_.description || "")} |`);
          })), t.push("")), P.type === "csv_export") {
            const F = [];
            i.sortOrder && F.push(`- ソート: ${i.sortOrder}`), i.filterCondition && F.push(`- 抽出条件: ${i.filterCondition}`), i.maxRows && F.push(`- 最大行数: ${i.maxRows}`), F.length > 0 && (t.push("**出力オプション**"), t.push(...F), t.push(""));
          }
          if (P.type === "csv_import") {
            const F = [], _ = {
              stop_on_first: "最初のエラーで停止",
              skip_and_continue: "スキップして続行",
              collect_all: "全エラー収集"
            }, ge = {
              skip: "スキップ",
              overwrite: "上書き",
              error: "エラー"
            };
            i.errorHandling && F.push(`- エラー処理: ${_[i.errorHandling] || i.errorHandling}`), i.duplicateHandling && F.push(`- 重複処理: ${ge[i.duplicateHandling] || i.duplicateHandling}`), i.preValidation && F.push(`- 事前バリデーション: ${i.preValidation}`), F.length > 0 && (t.push("**取込オプション**"), t.push(...F), t.push(""));
          }
          if (i.errorDefs && i.errorDefs.length > 0) {
            t.push("**エラー定義**"), t.push("| 対象列 | エラー条件 | エラーメッセージ | 種別 |"), t.push("|--------|----------|----------------|------|");
            for (const F of i.errorDefs) {
              const _ = F.severity === "warning" ? "警告" : "エラー";
              t.push(`| ${u(F.column || "（全体）")} | ${u(F.condition)} | ${u(F.message)} | ${_} |`);
            }
            t.push("");
          }
        }
      }
    }
    const we = G.filter(($) => {
      var P;
      return ((P = $.config.actionInfo) == null ? void 0 : P.type) === "email";
    });
    if (we.length > 0) {
      t.push("### メール送信仕様");
      for (const { config: $ } of we) {
        const P = $.actionInfo, i = P.emailSpec, ne = P.description || ((re = $.note) == null ? void 0 : re.text) || "";
        t.push(`#### メール送信: ${ne}`), i && (i.trigger && t.push(`- トリガー: ${i.trigger}`), i.to && t.push(`- 宛先: ${i.to}`), i.cc && t.push(`- CC: ${i.cc}`), i.bcc && t.push(`- BCC: ${i.bcc}`), i.subject && t.push(`- 件名: ${i.subject}`), i.bodyTemplate && t.push(`- 本文概要: ${i.bodyTemplate}`), i.templatePath && t.push(`- テンプレート: ${i.templatePath}`), i.variables && i.variables.length > 0 && t.push(`- 差し込み変数: ${i.variables.join(", ")}`), i.attachments && t.push(`- 添付ファイル: ${i.attachments}`), i.conditions && t.push(`- 送信条件: ${i.conditions}`), i.errorHandling && t.push(`- エラー処理: ${i.errorHandling}`)), t.push("");
      }
    }
    t.push("---"), t.push("");
  }
  const b = Ye(C);
  b.length > 0 && t.push(...b);
  const z = [];
  for (const [f, v] of Object.entries(y))
    if (((ee = v.actionInfo) == null ? void 0 : ee.type) === "navigate" && v.actionInfo.target) {
      const G = v.pagePath || "/";
      z.push({
        from: G,
        to: v.actionInfo.target,
        trigger: v.actionInfo.description || ((te = v.note) == null ? void 0 : te.text) || f
      });
    }
  if (z.length > 0) {
    t.push("## 画面フロー"), t.push("| 遷移元 | 遷移先 | トリガー |"), t.push("|--------|--------|---------|");
    for (const f of z) {
      const v = ((Y = C[f.from]) == null ? void 0 : Y.name) || f.from, G = ((U = C[f.to]) == null ? void 0 : U.name) || f.to;
      t.push(`| ${u(v)} (${u(f.from)}) | ${u(G)} (${u(f.to)}) | ${u(f.trigger)} |`);
    }
    t.push("");
  }
  const J = Object.values(q);
  if (J.length > 0) {
    t.push("## マスタ定義"), t.push("");
    for (const f of J) {
      t.push(`### ${f.id} — ${f.name} (${f.columnType || ""})`), f.description && (t.push(f.description), t.push("")), t.push("| 値 | ラベル | 説明 |"), t.push("|----|--------|------|");
      for (const v of f.entries)
        t.push(`| ${u(v.value)} | ${u(v.label)} | ${u(v.description || "")} |`);
      if (t.push(""), f.transitions && f.transitions.length > 0) {
        t.push("**状態遷移**"), t.push("| 遷移元 | 遷移先 | トリガー | 条件 |"), t.push("|--------|--------|---------|------|");
        for (const v of f.transitions) {
          const G = f.entries.find((ue) => ue.value === v.from), he = f.entries.find((ue) => ue.value === v.to), de = G ? `${G.label} (${v.from})` : v.from, me = he ? `${he.label} (${v.to})` : v.to;
          t.push(`| ${u(de)} | ${u(me)} | ${u(v.trigger)} | ${u(v.condition || "")} |`);
        }
        t.push("");
      }
    }
  }
  const x = Object.values(B);
  if (x.length > 0) {
    t.push("## バッチ処理定義"), t.push("");
    for (const f of x) {
      if (t.push(`### ${f.name}`), f.schedule && t.push(`- スケジュール: ${f.schedule}`), f.trigger && t.push(`- トリガー: ${f.trigger}`), f.description && t.push(`- 概要: ${f.description}`), f.timeout && t.push(`- タイムアウト: ${f.timeout}`), f.retryPolicy && t.push(`- リトライ: ${f.retryPolicy}`), f.inputTables && f.inputTables.length > 0 && t.push(`- 入力: ${f.inputTables.join(", ")}`), f.outputTables && f.outputTables.length > 0 && t.push(`- 出力: ${f.outputTables.join(", ")}`), t.push(""), f.steps.length > 0) {
        t.push("**処理ステップ**"), t.push("| No | 処理内容 | 対象 | 種別 | エラー時 |"), t.push("|----|---------|------|------|---------|");
        for (const v of f.steps)
          t.push(`| ${v.order} | ${u(v.description)} | ${u(v.target || "-")} | ${u(v.type || "")} | ${u(v.errorHandling || "")} |`);
        t.push("");
      }
      f.notifyOnError && t.push(`- エラー通知: ${f.notifyOnError}`), f.notifyOnComplete && t.push(`- 完了通知: ${f.notifyOnComplete}`), (f.notifyOnError || f.notifyOnComplete) && t.push("");
    }
  }
  return t.join(`
`);
}
function Xt(y, C, q, B = {}) {
  var x, ie, H;
  const t = [];
  t.push("# 画面仕様書"), t.push("");
  const W = Ke(y), Z = /* @__PURE__ */ new Set([...Object.keys(C), ...Object.keys(W)]);
  for (const A of Z) {
    const O = C[A], T = W[A] || [];
    if (t.push(`## ${(O == null ? void 0 : O.name) || A}`), t.push(`**URL:** ${A}`), t.push(""), O != null && O.description && (t.push("### 概要"), t.push(O.description), t.push("")), O != null && O.auth) {
      if (t.push("### 認証"), t.push(`- ${O.auth.required ? "ログイン必須" : "ログイン不要"}`), (x = O.auth.roles) != null && x.length) {
        const E = O.auth.roles.map((M) => ({ admin: "管理者", manager: "マネージャー", user: "ユーザー" })[M] || M);
        t.push(`- 権限: ${E.join("、")}`);
      }
      t.push("");
    }
    T.length > 0 && (t.push("### 画面項目"), t.push("| No | 項目名 | 種別 | 説明 | 必須 | 備考 |"), t.push("|----|--------|------|------|------|------|"), T.forEach(({ config: E }, M) => {
      var U, f, v, G;
      const R = zt(E), re = Wt(E), ee = Kt(E), te = (U = E.formInfo) != null && U.required ? "必須" : "", Y = [];
      (f = E.note) != null && f.condition && Y.push(E.note.condition), (v = E.note) != null && v.unit && Y.push(`単位: ${E.note.unit}`), (G = E.note) != null && G.nullDisplay && E.note.nullDisplay !== "-" && Y.push(`空欄時: ${E.note.nullDisplay}`), t.push(`| ${M + 1} | ${u(R)} | ${re} | ${u(ee)} | ${te} | ${u(Y.join(" / "))} |`);
    }), t.push(""));
    const ae = (O == null ? void 0 : O.apis) || [];
    if (ae.length > 0) {
      t.push("### 使用API"), t.push("| メソッド | エンドポイント | 説明 |"), t.push("|---------|-------------|------|");
      for (const E of ae)
        t.push(`| ${E.method} | ${u(E.endpoint)} | ${u(E.description || "")} |`);
      t.push("");
    }
    const Q = T.filter(
      (E) => {
        var M, R;
        return ((M = E.config.actionInfo) == null ? void 0 : M.type) === "csv_export" || ((R = E.config.actionInfo) == null ? void 0 : R.type) === "csv_import";
      }
    );
    if (Q.length > 0) {
      t.push("### CSV入出力仕様");
      for (const { config: E } of Q) {
        const M = E.actionInfo, R = M.csvSpec, re = M.type === "csv_export" ? "CSV出力" : "CSV取込", ee = M.description || ((ie = E.note) == null ? void 0 : ie.text) || "";
        if (t.push(`#### ${re}: ${ee}`), t.push(""), R) {
          const te = [];
          if (R.encoding && te.push(`- エンコーディング: ${R.encoding}`), R.filenamePattern && te.push(`- ファイル名: ${R.filenamePattern}`), te.length > 0 && (t.push(...te), t.push("")), R.columns.length > 0 && (R.columns.some((U) => U.processing) ? (t.push("| No | 項目名 | 加工 | 型 | 必須 | 説明 |"), t.push("|----|--------|------|-----|------|------|"), R.columns.forEach((U, f) => {
            t.push(`| ${f + 1} | ${u(U.name)} | ${u(U.processing || "")} | ${u(U.type || "")} | ${U.required ? "必須" : ""} | ${u(U.description || "")} |`);
          })) : (t.push("| No | 項目名 | 型 | 必須 | 説明 |"), t.push("|----|--------|-----|------|------|"), R.columns.forEach((U, f) => {
            t.push(`| ${f + 1} | ${u(U.name)} | ${u(U.type || "")} | ${U.required ? "必須" : ""} | ${u(U.description || "")} |`);
          })), t.push("")), R.errorDefs && R.errorDefs.length > 0) {
            t.push("**エラー時の動作**"), t.push("| エラー条件 | メッセージ |"), t.push("|----------|----------|");
            for (const Y of R.errorDefs) {
              const U = Y.column ? `[${Y.column}] ` : "";
              t.push(`| ${u(U + Y.condition)} | ${u(Y.message)} |`);
            }
            t.push("");
          }
        }
      }
    }
    const le = T.filter((E) => {
      var M;
      return ((M = E.config.actionInfo) == null ? void 0 : M.type) === "email";
    });
    if (le.length > 0) {
      t.push("### メール送信");
      for (const { config: E } of le) {
        const M = E.actionInfo, R = M.emailSpec, re = M.description || ((H = E.note) == null ? void 0 : H.text) || "";
        t.push(`#### ${re}`), R && (R.trigger && t.push(`- タイミング: ${R.trigger}`), R.to && t.push(`- 宛先: ${R.to}`), R.subject && t.push(`- 件名: ${R.subject}`)), t.push("");
      }
    }
    O != null && O.notes && (t.push("### 備考"), t.push(O.notes), t.push("")), t.push("---"), t.push("");
  }
  const b = Object.values(q).filter((A) => A.transitions && A.transitions.length > 0);
  if (b.length > 0) {
    t.push("## 状態遷移");
    for (const A of b) {
      t.push(`### ${A.name}`), t.push("| 遷移元 | 遷移先 | 操作 | 条件 |"), t.push("|--------|--------|------|------|");
      for (const O of A.transitions) {
        const T = A.entries.find((E) => E.value === O.from), ae = A.entries.find((E) => E.value === O.to), Q = T ? T.label : O.from, le = ae ? ae.label : O.to;
        t.push(`| ${u(Q)} | ${u(le)} | ${u(O.trigger)} | ${u(O.condition || "")} |`);
      }
      t.push("");
    }
  }
  const z = Object.values(B);
  if (z.length > 0) {
    t.push("## バッチ処理"), t.push("");
    for (const A of z)
      t.push(`### ${A.name}`), A.schedule && t.push(`- 実行タイミング: ${A.schedule}`), A.description && t.push(`- 概要: ${A.description}`), t.push("");
  }
  const J = Ye(C);
  return J.length > 0 && t.push(...J), t.join(`
`);
}
const Zt = {}, Qt = "devInspector:elementConfigs", Ge = "devInspector:screenConfigs", We = "devInspector:masterDefinitions", ze = "devInspector:batchDefinitions", en = Gt("devInspector", () => {
  const y = L({}), C = L(!1), q = L(!1), B = L(!1), t = L(!1), W = L(null), Z = L(!1), b = L({}), z = L(null), J = L(null), x = L({}), ie = L(!1), H = L({}), A = L({}), O = Te(() => y.value.storageKey || Qt), T = L(null), ae = L("all"), Q = L(!0), le = L("all"), E = L(!1), M = L(""), R = L("column"), re = L(!1), ee = L([]), te = L(null), Y = L(!1), U = L(/* @__PURE__ */ new Set()), f = "devInspector:hiddenAnalysisSelectors", v = Te(() => y.value.enabledInProduction ? !0 : typeof import.meta < "u" && Zt ? !1 : process.env.NODE_ENV === "development"), G = L(!1);
  function he(e = {}) {
    y.value = e, Se(), we(), oe(), Qe(), Ct(), e.analysisData && (T.value = e.analysisData);
    const n = e.analysisDataUrl ?? "/dev-inspector-analysis.json";
    e.autoLoadAnalysis !== !1 && v.value && de(n);
  }
  async function de(e) {
    var n;
    try {
      const o = await fetch(e);
      if (o.ok)
        return T.value = await o.json(), console.log("[DevInspector] Analysis data loaded:", Object.keys(((n = T.value) == null ? void 0 : n.components) || {}).length, "components"), !0;
    } catch {
      console.debug("[DevInspector] Analysis data not found at", e);
    }
    return !1;
  }
  function me(e) {
    if (!T.value) return null;
    for (const n of Object.values(T.value.components)) {
      const o = n.elements.find((s) => s.selector === e);
      if (o) return o;
    }
    return null;
  }
  function ue(e) {
    if (!T.value) return [];
    const n = [];
    for (const [o, s] of Object.entries(T.value.components))
      (!e || o.includes(e)) && n.push(...s.elements);
    return n;
  }
  function Se() {
    try {
      const e = y.value.initialAnnotations || {};
      if (typeof window < "u") {
        const n = localStorage.getItem(O.value), o = n ? JSON.parse(n) : {};
        b.value = { ...e, ...o };
      } else
        b.value = e;
    } catch (e) {
      console.error("[DevInspector] Failed to load configs:", e);
    }
  }
  function fe() {
    try {
      if (typeof window < "u") {
        const e = JSON.stringify(b.value);
        localStorage.setItem(O.value, e), console.log("[DevInspector] Saved configs:", Object.keys(b.value).length, "items");
      }
    } catch (e) {
      console.error("[DevInspector] Failed to save configs:", e);
    }
  }
  Ee(b, () => {
    X(() => {
      fe();
    });
  }, { deep: !0 });
  function we() {
    try {
      if (typeof window < "u") {
        const e = localStorage.getItem(Ge);
        e && (x.value = JSON.parse(e));
      }
    } catch (e) {
      console.error("[DevInspector] Failed to load screen configs:", e);
    }
  }
  function $() {
    try {
      if (typeof window < "u") {
        const e = JSON.stringify(x.value);
        localStorage.setItem(Ge, e);
      }
    } catch (e) {
      console.error("[DevInspector] Failed to save screen configs:", e);
    }
  }
  Ee(x, () => {
    X(() => {
      $();
    });
  }, { deep: !0 });
  function P(e) {
    const n = e || (typeof window < "u" ? window.location.pathname : "/");
    return x.value[n];
  }
  function i(e) {
    x.value = {
      ...x.value,
      [e.path]: e
    }, X(() => $());
  }
  function ne(e) {
    const { [e]: n, ...o } = x.value;
    x.value = o, X(() => $());
  }
  function oe() {
    try {
      if (typeof window < "u") {
        const e = localStorage.getItem(We);
        e && (H.value = JSON.parse(e));
      }
    } catch (e) {
      console.error("[DevInspector] Failed to load master definitions:", e);
    }
  }
  function K() {
    try {
      typeof window < "u" && localStorage.setItem(We, JSON.stringify(H.value));
    } catch (e) {
      console.error("[DevInspector] Failed to save master definitions:", e);
    }
  }
  Ee(H, () => {
    X(() => {
      K();
    });
  }, { deep: !0 });
  function F(e) {
    return H.value[e];
  }
  function _(e) {
    H.value = {
      ...H.value,
      [e.id]: { ...e, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }
    }, X(() => K());
  }
  function ge(e) {
    const { [e]: n, ...o } = H.value;
    H.value = o, X(() => K());
  }
  function Xe(e) {
    return Object.values(H.value).filter((n) => n.table === e);
  }
  function Ze(e) {
    var n;
    return ((n = H.value[e]) == null ? void 0 : n.entries) || [];
  }
  function Qe() {
    try {
      if (typeof window < "u") {
        const e = localStorage.getItem(ze);
        e && (A.value = JSON.parse(e));
      }
    } catch (e) {
      console.error("[DevInspector] Failed to load batch definitions:", e);
    }
  }
  function Pe() {
    try {
      typeof window < "u" && localStorage.setItem(ze, JSON.stringify(A.value));
    } catch (e) {
      console.error("[DevInspector] Failed to save batch definitions:", e);
    }
  }
  Ee(A, () => {
    X(() => {
      Pe();
    });
  }, { deep: !0 });
  function et(e) {
    return A.value[e];
  }
  function tt(e) {
    A.value = {
      ...A.value,
      [e.id]: { ...e, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }
    }, X(() => Pe());
  }
  function nt(e) {
    const { [e]: n, ...o } = A.value;
    A.value = o, X(() => Pe());
  }
  function ot() {
    var s, r, h, c, m;
    const e = [], n = /* @__PURE__ */ new Set(), o = {};
    for (const d of Object.values(b.value)) {
      const S = d.fieldInfoList || (d.fieldInfo ? [d.fieldInfo] : []), p = ((s = d.sourceBinding) == null ? void 0 : s.type) === "v-model";
      for (const a of S)
        a.table && (o[a.table] || (o[a.table] = { read: !1, write: !1, isList: !1 }), o[a.table].read = !0, p && (o[a.table].write = !0));
      if (((r = d.note) == null ? void 0 : r.displayType) === "db_direct" || ((h = d.note) == null ? void 0 : h.displayType) === "db_formatted")
        for (const a of S)
          a.table && o[a.table] && (d.id.includes("tbody") || d.id.includes(" tr") || d.id.includes(" td")) && (o[a.table].isList = !0);
      if (((c = d.actionInfo) == null ? void 0 : c.type) === "api" && d.actionInfo.target) {
        const a = `${d.actionInfo.method || "GET"}:${d.actionInfo.target}`;
        n.has(a) || (n.add(a), e.push({
          method: d.actionInfo.method || "GET",
          endpoint: d.actionInfo.target,
          description: d.actionInfo.description || "",
          loadTiming: "action"
        }));
      }
    }
    for (const [d, S] of Object.entries(o)) {
      if (S.read) {
        const p = S.isList ? `/api/${d}` : `/api/${d}/:id`, a = `GET:${p}`;
        n.has(a) || (n.add(a), e.push({
          method: "GET",
          endpoint: p,
          description: S.isList ? `${d} 一覧取得` : `${d} 詳細取得`,
          loadTiming: "onMount"
        }));
      }
      if (S.write) {
        const p = `/api/${d}/:id`, a = `PUT:${p}`;
        n.has(a) || (n.add(a), e.push({
          method: "PUT",
          endpoint: p,
          description: `${d} 更新`,
          loadTiming: "action"
        }));
      }
    }
    if ((m = T.value) != null && m.components) {
      const d = typeof window < "u" ? window.location.pathname : "/";
      for (const [S, p] of Object.entries(T.value.components)) {
        const a = S.replace(/^pages/, "").replace(/\.vue$/, "").replace(/\/index$/, "").replace(/\[.*?\]/g, "[^/]+");
        let l = !1;
        if (d === "/" && S.includes("index"))
          l = !0;
        else if (S.includes("pages/"))
          try {
            l = !!d.match(new RegExp(`^${a}$`));
          } catch {
          }
        if (l && p.apis)
          for (const g of p.apis) {
            if (!g.endpoint) continue;
            const k = `${g.method}:${g.endpoint}`;
            n.has(k) || (n.add(k), e.push({
              method: g.method,
              endpoint: g.endpoint,
              description: g.variable ? `→ ${g.variable}` : "",
              loadTiming: ["onMount", "useFetch", "useAsyncData"].includes(g.loadTrigger) ? "onMount" : "action"
            }));
          }
      }
    }
    return e;
  }
  const st = Te(() => {
    var s, r, h, c, m, d, S, p, a, l, g, k, j, I, D;
    const e = M.value.trim().toLowerCase();
    if (!e) return [];
    const n = R.value, o = [];
    for (const [N, w] of Object.entries(b.value)) {
      const V = w.pagePath || "/", ye = x.value[V], Ie = (ye == null ? void 0 : ye.name) || V;
      if (n === "column") {
        const Ne = (s = w.fieldInfoList) != null && s.length ? w.fieldInfoList : w.fieldInfo ? [w.fieldInfo] : [];
        for (const se of Ne)
          (`${se.table}.${se.column}`.toLowerCase().includes(e) || se.table.toLowerCase().includes(e) || se.column.toLowerCase().includes(e)) && o.push({
            pagePath: V,
            pageName: Ie,
            selector: N,
            elementType: w.elementType,
            matchedField: `${se.table}.${se.column}`,
            matchContext: `${se.type || ""} ${se.description || ""}`.trim()
          });
        const Ae = ((r = w.note) == null ? void 0 : r.calcSources) || [], Jt = ((h = w.note) == null ? void 0 : h.storedCalcSources) || [];
        for (const se of [...Ae, ...Jt])
          se.toLowerCase().includes(e) && o.push({
            pagePath: V,
            pageName: Ie,
            selector: N,
            elementType: w.elementType,
            matchedField: se,
            matchContext: ((c = w.note) == null ? void 0 : c.calcDescription) || ((m = w.note) == null ? void 0 : m.storedCalcLogic) || "参照元"
          });
      } else if (n === "api")
        (S = (d = w.actionInfo) == null ? void 0 : d.target) != null && S.toLowerCase().includes(e) && o.push({
          pagePath: V,
          pageName: Ie,
          selector: N,
          elementType: w.elementType,
          matchedField: `${w.actionInfo.method || ""} ${w.actionInfo.target}`.trim(),
          matchContext: w.actionInfo.description || w.actionInfo.type
        });
      else if (n === "text") {
        const Ne = [
          (p = w.note) == null ? void 0 : p.text,
          (a = w.note) == null ? void 0 : a.calcDescription,
          (l = w.note) == null ? void 0 : l.formatDescription,
          (g = w.note) == null ? void 0 : g.condition,
          (k = w.actionInfo) == null ? void 0 : k.description,
          (j = w.formInfo) == null ? void 0 : j.description,
          N
          // selector itself
        ].filter(Boolean);
        for (const Ae of Ne)
          if (Ae.toLowerCase().includes(e)) {
            o.push({
              pagePath: V,
              pageName: Ie,
              selector: N,
              elementType: w.elementType,
              matchedField: Ae.substring(0, 60),
              matchContext: ((D = (I = w.note) == null ? void 0 : I.text) == null ? void 0 : D.substring(0, 40)) || ""
            });
            break;
          }
      }
    }
    if (n === "api")
      for (const [N, w] of Object.entries(x.value))
        for (const V of w.apis || [])
          V.endpoint.toLowerCase().includes(e) && o.push({
            pagePath: N,
            pageName: w.name || N,
            selector: "",
            elementType: void 0,
            matchedField: `${V.method} ${V.endpoint}`,
            matchContext: V.description || "画面API"
          });
    return o;
  });
  function it() {
    if (typeof document > "u") return [];
    const e = typeof window < "u" ? window.location.pathname : "/", n = /* @__PURE__ */ new Set();
    for (const [a, l] of Object.entries(b.value))
      (!l.pagePath || l.pagePath === e) && n.add(a);
    const o = /* @__PURE__ */ new Set();
    for (const a of n)
      try {
        const l = document.querySelector(a);
        l && o.add(l);
      } catch {
      }
    const s = [], r = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
    function m(a) {
      if (a.closest("[data-dev-inspector]")) return !0;
      const l = pe(a);
      if (n.has(l) || r.has(l)) return !0;
      for (const g of o)
        if (g.contains(a) && g !== a) return !0;
      return !1;
    }
    function d(a, l, g, k) {
      const j = pe(a);
      r.add(j), c.add(a), s.push({ selector: j, tagName: a.tagName.toLowerCase(), category: l, text: g.substring(0, 50), suggestedType: k });
    }
    document.querySelectorAll("[data-di-binding]").forEach((a) => {
      var k;
      const l = a;
      if (l.closest("[data-dev-inspector]")) return;
      const g = l.getAttribute("data-di-binding") || "";
      h.has(g) || m(l) || (h.add(g), d(l, "binding", ((k = l.textContent) == null ? void 0 : k.trim()) || "", "datasource"));
    }), document.querySelectorAll("table").forEach((a) => {
      if (a.closest("[data-dev-inspector]")) return;
      const l = window.getComputedStyle(a);
      if (l.display === "none" || l.visibility === "hidden") return;
      const g = [];
      if (a.querySelectorAll("thead th, thead td").forEach((I) => {
        var D;
        g.push(((D = I.textContent) == null ? void 0 : D.trim()) || "");
      }), g.length === 0) {
        const I = a.querySelector("tr");
        I && I.querySelectorAll("th, td").forEach((D) => {
          var N;
          g.push(((N = D.textContent) == null ? void 0 : N.trim()) || "");
        });
      }
      const k = a.querySelector("tbody tr") || a.querySelectorAll("tr")[g.length > 0 ? 1 : 0];
      if (!k) return;
      k.querySelectorAll("td").forEach((I, D) => {
        var ye;
        const N = I, w = ((ye = N.textContent) == null ? void 0 : ye.trim()) || "";
        if (!w || N.querySelector("[data-di-binding]") || m(N)) return;
        const V = g[D] || `列${D + 1}`;
        d(N, "binding", `${V}: ${w}`, "datasource");
      });
    }), document.querySelectorAll("input, select, textarea").forEach((a) => {
      var j, I;
      const l = a;
      if (l.closest("[data-dev-inspector]") || l.type === "hidden") return;
      const g = window.getComputedStyle(l);
      if (g.display === "none" || g.visibility === "hidden" || m(l)) return;
      const k = ((I = (j = l.closest("label")) == null ? void 0 : j.textContent) == null ? void 0 : I.trim()) || l.getAttribute("aria-label") || l.placeholder || l.name || l.tagName.toLowerCase();
      d(l, "form", k || "", "form");
    });
    const S = /* @__PURE__ */ new Set();
    document.querySelectorAll("table").forEach((a) => {
      const l = a.querySelector("tbody tr") || a.querySelectorAll("tr")[1];
      l && S.add(l);
    }), document.querySelectorAll('button, a[href], [role="button"]').forEach((a) => {
      var I;
      const l = a;
      if (l.closest("[data-dev-inspector]")) return;
      const g = ((I = l.textContent) == null ? void 0 : I.trim()) || "";
      if (!g) return;
      const k = window.getComputedStyle(l);
      if (k.display === "none" || k.visibility === "hidden") return;
      const j = l.closest("tr");
      j && j.closest("table") && !S.has(j) || m(l) || d(l, "action", g, "action");
    });
    const p = s.filter((a) => {
      try {
        const l = document.querySelector(a.selector);
        if (!l) return !0;
        for (const g of c)
          if (g !== l && g.contains(l))
            return !1;
        return !0;
      } catch {
        return !0;
      }
    });
    return ee.value = p, p;
  }
  function at(e, n) {
    const o = {
      elementType: n,
      pagePath: typeof window < "u" ? window.location.pathname : "/",
      note: { text: "", type: "todo" }
    };
    n === "action" ? o.actionInfo = { type: "function", description: "" } : n === "form" && (o.formInfo = { inputType: "text" }), De(e, o), z.value = e, ee.value = ee.value.filter((s) => s.selector !== e);
  }
  const rt = Te(() => {
    var c, m, d, S;
    const e = /* @__PURE__ */ new Map(), n = [], o = /* @__PURE__ */ new Set();
    for (const [p, a] of Object.entries(x.value))
      e.set(p, {
        path: p,
        name: a.name || p,
        annotationCount: Object.values(b.value).filter((l) => l.pagePath === p).length
      });
    for (const [p, a] of Object.entries(b.value))
      if (((c = a.actionInfo) == null ? void 0 : c.type) === "navigate" && a.actionInfo.target) {
        const l = a.pagePath || "/", g = a.actionInfo.target, k = `${l}→${g}`;
        if (!e.has(l)) {
          const j = x.value[l];
          e.set(l, {
            path: l,
            name: (j == null ? void 0 : j.name) || l,
            annotationCount: Object.values(b.value).filter((I) => I.pagePath === l).length
          });
        }
        if (!e.has(g)) {
          const j = x.value[g];
          e.set(g, {
            path: g,
            name: (j == null ? void 0 : j.name) || g,
            annotationCount: Object.values(b.value).filter((I) => I.pagePath === g).length
          });
        }
        if (!o.has(k)) {
          o.add(k);
          let j = a.actionInfo.description || ((m = a.note) == null ? void 0 : m.text) || "";
          if (!j && typeof document < "u")
            try {
              const I = document.querySelector(p);
              I && (j = ((S = (d = I.textContent) == null ? void 0 : d.trim()) == null ? void 0 : S.substring(0, 20)) || "");
            } catch {
            }
          n.push({
            from: l,
            to: g,
            label: j,
            selector: p
          });
        }
      }
    const s = Array.from(e.values()), r = /* @__PURE__ */ new Set();
    for (const p of n)
      r.add(p.from), r.add(p.to);
    const h = s.filter((p) => !r.has(p.path));
    return { nodes: s, edges: n, orphanPages: h };
  });
  async function ct() {
    v.value && (C.value ? (C.value = !1, q.value = !1, z.value = null) : await xe());
  }
  async function xe() {
    if (!v.value) return;
    if (T.value && !G.value && y.value.autoApplyAnalysis !== !1) {
      t.value = !0, C.value = !0;
      try {
        await new Promise((n) => setTimeout(n, 300)), qe(), G.value = !0;
      } finally {
        t.value = !1;
      }
    } else
      C.value = !0;
  }
  function lt() {
    C.value = !1, q.value = !1, z.value = null;
  }
  function ut() {
    q.value = !q.value, q.value || (z.value = null), q.value && (B.value = !1);
  }
  function ft() {
    B.value = !B.value, B.value && (q.value = !1), J.value = null;
  }
  function dt(e) {
    J.value = e;
  }
  function pe(e) {
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
      const r = Array.from(o.classList).filter(
        (c) => !c.startsWith("hover:") && !c.startsWith("focus:") && !c.startsWith("-") && !/[/\[\]()!@#$%^&*=+{}|\\:'"<>,?.~]/.test(c)
      ).slice(0, 2);
      r.length > 0 && (s += "." + r.join("."));
      const h = o.parentElement;
      if (h) {
        const c = Array.from(h.children).filter(
          (m) => m.tagName === o.tagName
        );
        if (c.length > 1) {
          const m = c.indexOf(o) + 1;
          s += `:nth-of-type(${m})`;
        }
      }
      n.unshift(s), o = o.parentElement;
    }
    return n.join(" > ");
  }
  function pt() {
    const e = typeof window < "u" ? window.location.pathname : "/";
    return Object.keys(b.value).filter((n) => {
      const o = b.value[n];
      return o ? (n.includes(">") || n.startsWith("#") || n.startsWith("[") || n.startsWith(".")) && (!o.componentPath || o.componentPath.includes(e) || e === "/") : !1;
    });
  }
  function ht(e) {
    W.value = e;
  }
  function mt() {
    W.value = null;
  }
  function gt() {
    Z.value ? Oe() : Re();
  }
  function je() {
    [0, 50, 100, 150, 200, 250, 320].forEach((n) => setTimeout(() => window.dispatchEvent(new Event("resize")), n));
  }
  function Re() {
    Z.value = !0, typeof document < "u" && (document.body.style.transition = "margin-right 0.3s ease", document.body.style.marginRight = "360px", je());
  }
  function Oe() {
    Z.value = !1, typeof document < "u" && (document.body.style.transition = "margin-right 0.3s ease", document.body.style.marginRight = "", je());
  }
  function vt(e) {
    return b.value[e];
  }
  function De(e, n) {
    var c;
    const o = (/* @__PURE__ */ new Date()).toISOString(), s = b.value[e], r = typeof window < "u" ? window.location.pathname : "/", h = {
      ...s,
      ...n,
      id: e,
      pagePath: n.pagePath || (s == null ? void 0 : s.pagePath) || r,
      componentPath: n.componentPath || ((c = W.value) == null ? void 0 : c.componentPath) || "",
      createdAt: (s == null ? void 0 : s.createdAt) || o,
      updatedAt: o
    };
    b.value = {
      ...b.value,
      [e]: h
    }, X(() => fe());
  }
  function yt(e) {
    const { [e]: n, ...o } = b.value;
    b.value = o, X(() => fe());
  }
  function _e(e) {
    var j;
    const n = ((j = e.textContent) == null ? void 0 : j.trim()) || "", o = e.tagName.toUpperCase();
    if (!n && o !== "INPUT" && o !== "SELECT" && o !== "TEXTAREA")
      return null;
    const s = e.__vueParentComponent;
    if (s) {
      const I = s.props || {}, D = s.attrs || {};
      if ("modelValue" in I || "model-value" in D)
        return {
          type: "v-model",
          source: "form binding detected",
          isStatic: !1
        };
    }
    if (o === "INPUT" || o === "SELECT" || o === "TEXTAREA") {
      const I = e.type || "text", D = e.placeholder || "";
      return {
        type: "v-model",
        source: `${o.toLowerCase()}[type=${I}]${D ? ` placeholder="${D}"` : ""}`,
        isStatic: !1
      };
    }
    const r = e.dataset.source || e.dataset.field || e.dataset.bind;
    if (r)
      return {
        type: "prop",
        source: r,
        isStatic: !1
      };
    if (e.closest("tbody") || e.closest('[role="rowgroup"]'))
      return {
        type: "api",
        source: "table data",
        isStatic: !1
      };
    const h = e.closest('ul, ol, [role="list"]');
    if (h && h.children.length > 1)
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
    for (const I of c) {
      const D = e.closest(I);
      if (D) {
        const N = D.parentElement;
        if (N && Array.from(N.children).filter(
          (V) => V !== D && V.className === D.className
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
      const I = e.parentElement, N = Array.from(I.children).filter((w) => w.tagName === e.tagName);
      if (N.length >= 2 && N.filter(
        (V) => V.children.length === e.children.length
      ).length >= 2)
        return {
          type: "api",
          source: "repeated element",
          isStatic: !1
        };
    }
    const d = [
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
    for (const I of d)
      if (I.test(n))
        return {
          type: "api",
          source: "dynamic data pattern",
          isStatic: !1
        };
    const S = [
      /^[\u4e00-\u9faf]{2,4}$/,
      // Japanese Kanji names (2-4 chars)
      /^[\u3040-\u309f\u30a0-\u30ff]{2,6}$/,
      // Hiragana/Katakana names
      /^[A-Z][a-z]+ [A-Z][a-z]+$/
      // English names like "John Smith"
    ];
    for (const I of S)
      if (I.test(n))
        return {
          type: "api",
          source: "name pattern",
          isStatic: !1
        };
    const a = ["LABEL", "TH", "LEGEND", "FIGCAPTION"].includes(o), g = [
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
    ].some((I) => I.test(n)), k = o === "BUTTON" || e.closest("button") !== null || e.getAttribute("role") === "button";
    return a || g || k && n.length < 20 ? {
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
  function ke(e, n) {
    var l, g, k, j, I;
    const o = {}, s = ((l = e.textContent) == null ? void 0 : l.trim()) || "", r = e.getAttribute("data-di-binding");
    e.getAttribute("data-di-db"), e.getAttribute("data-di-component"), e.getAttribute("data-di-db-comment");
    let h = e;
    if (!r) {
      const D = e.closest("[data-di-binding]");
      D && (h = D);
    }
    const c = h.getAttribute("data-di-binding"), m = h.getAttribute("data-di-db"), d = h.getAttribute("data-di-component"), S = h.getAttribute("data-di-db-type"), p = h.getAttribute("data-di-db-comment");
    if (c || m) {
      if (o.sourceBinding = {
        type: "api",
        source: c || void 0,
        isStatic: !1
      }, m) {
        const [D, N] = m.split(".");
        D && N && (o.fieldInfo = {
          table: D,
          column: N,
          type: S || void 0,
          description: p || void 0
        });
      }
      return d && (o.devMeta = {
        usedComponents: [d]
      }), o.note = {
        type: "info",
        text: `【データバインディング】${c}${m ? ` → ${m}` : ""}`
      }, o;
    }
    const a = _e(e);
    if (a)
      if (o.sourceBinding = a, a.isStatic)
        o.note = {
          type: "info",
          text: `【固定文言】${s}`
        };
      else if (a.type === "v-model") {
        const D = e.tagName.toUpperCase();
        if (D === "INPUT" || D === "SELECT" || D === "TEXTAREA") {
          const N = e.placeholder || "", w = ((k = (g = e.closest("label")) == null ? void 0 : g.textContent) == null ? void 0 : k.trim()) || e.getAttribute("aria-label") || ((I = (j = document.querySelector(`label[for="${e.id}"]`)) == null ? void 0 : j.textContent) == null ? void 0 : I.trim()) || "";
          o.note = {
            type: "todo",
            text: `【フォーム要素】${w || N || D.toLowerCase()}`
          };
        }
      } else a.type === "api" && (o.note = {
        type: "question",
        text: `【動的データ】${s.substring(0, 100)}${s.length > 100 ? "..." : ""}`
      });
    return o;
  }
  const be = L(!1), $e = L(0), Ce = L([]);
  async function Be(e = {}) {
    be.value = !0, $e.value = 0, Ce.value = [];
    const { rescan: n = !1 } = e;
    if (n) {
      const o = typeof window < "u" ? window.location.pathname : "/", s = Object.keys(b.value).filter((r) => {
        const h = b.value[r];
        return !h.componentPath || h.componentPath.includes(o);
      });
      for (const r of s)
        delete b.value[r];
      X(() => fe());
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
      ].join(","), s = document.querySelectorAll(o), r = [];
      s.forEach((S) => {
        var D;
        const p = S;
        if (p.closest("[data-dev-inspector]")) return;
        const a = window.getComputedStyle(p);
        if (a.display === "none" || a.visibility === "hidden" || a.opacity === "0") return;
        const l = pe(p);
        if (b.value[l]) return;
        const g = p.tagName.toUpperCase(), k = ((D = p.textContent) == null ? void 0 : D.trim()) || "";
        if (g === "INPUT" || g === "SELECT" || g === "TEXTAREA") {
          r.push(p);
          return;
        }
        if (k.length > 300 || k.length === 0 || g === "DIV" && (Array.from(p.childNodes).filter((w) => w.nodeType === Node.TEXT_NODE).map((w) => {
          var V;
          return ((V = w.textContent) == null ? void 0 : V.trim()) || "";
        }).join("").trim().length === 0 || p.children.length > 3))
          return;
        const j = Array.from(p.childNodes).some((N) => {
          var w;
          return N.nodeType === Node.TEXT_NODE && (((w = N.textContent) == null ? void 0 : w.trim()) || "").length > 0;
        }), I = !Array.from(p.children).some((N) => ["DIV", "P", "UL", "OL", "TABLE", "SECTION", "ARTICLE"].includes(N.tagName));
        (j || p.children.length === 0 && k.length > 0 || I) && r.push(p);
      });
      const h = r.length;
      let c = 0, m = 0;
      const d = 20;
      for (let S = 0; S < r.length; S += d) {
        const p = r.slice(S, S + d);
        for (const a of p) {
          const l = pe(a), g = ke(a, l);
          g.sourceBinding && (Ce.value.push({ selector: l, element: a, detected: g }), De(l, g), m++), c++, $e.value = Math.round(c / h * 100);
        }
        await new Promise((a) => setTimeout(a, 10));
      }
      return m;
    } finally {
      be.value = !1, $e.value = 100;
    }
  }
  const Ue = L([]), Le = L("");
  async function bt(e) {
    var o;
    if (!e)
      return console.warn("[DevInspector] Router not provided for all pages scan"), [];
    be.value = !0;
    const n = [];
    try {
      const s = e.getRoutes(), r = [];
      for (const h of s)
        h.path.includes(":") && !h.path.includes("?") || h.redirect || h.path !== "/:pathMatch(.*)*" && ((o = h.meta) != null && o.devInspectorSkip || r.push(h.path));
      Ue.value = r;
      for (const h of r) {
        Le.value = h;
        try {
          await e.push(h), await new Promise((m) => setTimeout(m, 500));
          const c = await Be();
          n.push({ page: h, count: c });
        } catch (c) {
          console.warn(`[DevInspector] Failed to scan page ${h}:`, c), n.push({ page: h, count: 0 });
        }
      }
      return n;
    } finally {
      be.value = !1, Le.value = "";
    }
  }
  function $t() {
    Ce.value = [], $e.value = 0;
  }
  const ce = L([]);
  async function qe() {
    var h;
    if (!T.value)
      return console.warn("[DevInspector] No analysis data loaded. Call loadAnalysisData first."), 0;
    ce.value = [];
    const e = typeof window < "u" ? window.location.pathname : "/", n = (c) => {
      if (!T.value) return null;
      for (const [m, d] of Object.entries(T.value.components))
        if (d.componentName === c || d.componentName.toLowerCase() === c.toLowerCase() || m.toLowerCase().includes(`/${c.toLowerCase()}.vue`))
          return d;
      return null;
    }, o = (c, m = /* @__PURE__ */ new Set()) => {
      const d = [];
      if (m.has(c.componentName)) return d;
      if (m.add(c.componentName), d.push(...c.elements), c.usedComponents)
        for (const S of c.usedComponents) {
          const p = n(S);
          p && d.push(...o(p, m));
        }
      return d;
    }, s = [], r = /* @__PURE__ */ new Set();
    for (const [c, m] of Object.entries(T.value.components)) {
      const d = c.replace(/^pages/, "").replace(/\.vue$/, "").replace(/\/index$/, "").replace(/\[.*?\]/g, "[^/]+");
      let S = !1;
      if ((e === "/" && c.includes("index") || c.includes("pages/") && e.match(new RegExp(`^${d}$`))) && (S = !0), S) {
        const p = o(m);
        s.push(...p), r.add(m.componentName), m.usedComponents && m.usedComponents.forEach((a) => r.add(a));
      }
    }
    for (const [c, m] of Object.entries(T.value.components))
      c.includes("components/") && !r.has(m.componentName) && s.push(...m.elements);
    for (const c of s) {
      if (U.value.has(c.selector))
        continue;
      let m = !1, d = c.selector;
      try {
        document.querySelector(c.selector) && (m = !0);
      } catch {
      }
      if (!m && c.text && !c.binding) {
        const S = c.text.replace(/\[コメント\]\s*/, ""), p = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT,
          null
        );
        for (; p.nextNode(); ) {
          const a = p.currentNode;
          if ((h = a.textContent) != null && h.includes(S)) {
            const l = a.parentElement;
            if (l) {
              m = !0, d = pe(l);
              break;
            }
          }
        }
      }
      if (!m && c.selector.includes(".")) {
        const S = c.selector.match(/^(\w+)\.(.+)$/);
        if (S) {
          const [, p, a] = S;
          try {
            const l = document.querySelector(c.selector);
            l && (m = !0, d = pe(l));
          } catch {
          }
        }
      }
      if (!m && c.binding) {
        const S = `[data-bind="${c.binding}"]`;
        try {
          const p = document.querySelector(S);
          p && (m = !0, d = pe(p));
        } catch {
        }
      }
      ce.value.push({
        selector: d,
        element: c,
        matched: m
      });
    }
    return console.log(`[DevInspector] Applied analysis: ${ce.value.filter((c) => c.matched).length}/${ce.value.length} elements matched`), ce.value.filter((c) => c.matched).length;
  }
  function St() {
    ce.value = [];
  }
  function wt(e) {
    ce.value = ce.value.filter((n) => n.selector !== e), U.value.add(e), It();
  }
  function Ct() {
    try {
      const e = localStorage.getItem(f);
      e && (U.value = new Set(JSON.parse(e)));
    } catch {
    }
  }
  function It() {
    try {
      localStorage.setItem(
        f,
        JSON.stringify([...U.value])
      );
    } catch {
    }
  }
  function At() {
    U.value.clear(), localStorage.removeItem(f);
  }
  function Fe() {
    const e = {
      removed: [...U.value],
      exportedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    return JSON.stringify(e, null, 2);
  }
  function Tt(e = "dev-inspector-changes.json") {
    const n = Fe(), o = new Blob([n], { type: "application/json" }), s = URL.createObjectURL(o), r = document.createElement("a");
    r.href = s, r.download = e, document.body.appendChild(r), r.click(), document.body.removeChild(r), URL.revokeObjectURL(s);
  }
  function Me() {
    if (!T.value) return [];
    const e = [], n = /* @__PURE__ */ new Set();
    for (const o of Object.values(T.value.components))
      for (const s of o.elements)
        s.binding && !n.has(s.binding) && (n.add(s.binding), e.push({
          binding: s.binding,
          db: s.db,
          api: s.api,
          component: o.componentName
        }));
    return e.sort((o, s) => o.db && !s.db ? -1 : !o.db && s.db ? 1 : o.binding.localeCompare(s.binding));
  }
  function Et(e) {
    const n = Me();
    if (!e) return n;
    const o = e.toLowerCase();
    return n.filter(
      (s) => {
        var r, h;
        return s.binding.toLowerCase().includes(o) || ((r = s.db) == null ? void 0 : r.table.toLowerCase().includes(o)) || ((h = s.db) == null ? void 0 : h.column.toLowerCase().includes(o)) || s.component.toLowerCase().includes(o);
      }
    );
  }
  function He() {
    var n, o;
    if (!((o = (n = T.value) == null ? void 0 : n.dbSchema) != null && o.tables)) return [];
    const e = [];
    for (const [s, r] of Object.entries(T.value.dbSchema.tables))
      for (const [h, c] of Object.entries(r.columns))
        e.push({
          table: s,
          column: h,
          type: c.type,
          comment: c.comment,
          fullName: `${s}.${h}`
        });
    return e.sort((s, r) => s.table !== r.table ? s.table.localeCompare(r.table) : s.column.localeCompare(r.column));
  }
  function Pt(e) {
    const n = He();
    if (!e) return n;
    const o = e.toLowerCase();
    return n.filter(
      (s) => {
        var r;
        return s.table.toLowerCase().includes(o) || s.column.toLowerCase().includes(o) || s.fullName.toLowerCase().includes(o) || ((r = s.comment) == null ? void 0 : r.toLowerCase().includes(o));
      }
    );
  }
  function Ot() {
    var o, s;
    const e = [], n = [];
    if (!((o = T.value) != null && o.components)) return { pageLoad: e, action: n };
    for (const r of ce.value) {
      if (!r.matched) continue;
      const h = r.element.component;
      if (h && ((s = T.value.components[h]) != null && s.apis))
        for (const c of T.value.components[h].apis)
          ["onMount", "useFetch", "useAsyncData"].includes(c.loadTrigger) ? e.some((m) => m.endpoint === c.endpoint && m.method === c.method) || e.push(c) : c.loadTrigger === "action" && (n.some((m) => m.endpoint === c.endpoint && m.method === c.method) || n.push(c));
    }
    return { pageLoad: e, action: n };
  }
  function Dt(e) {
    var n;
    if (!((n = T.value) != null && n.components)) return null;
    for (const o of Object.values(T.value.components))
      if (o.apis) {
        for (const s of o.apis)
          if (s.variable && e.startsWith(s.variable))
            return s;
      }
    return null;
  }
  function Lt(e) {
    const n = e.tagName.toUpperCase();
    return n === "INPUT" || n === "SELECT" || n === "TEXTAREA" ? "form" : n === "BUTTON" || n === "A" && e.hasAttribute("href") || e.getAttribute("role") === "button" || e.closest("button") || e.closest("a[href]") ? "action" : "datasource";
  }
  const ve = L([]), Ve = L(null);
  function Nt() {
    if (typeof document > "u") return [];
    const e = typeof window < "u" ? window.location.pathname : "/", n = [];
    for (const [o, s] of Object.entries(b.value))
      if (!(s.componentPath && !s.componentPath.includes(e) && e !== "/"))
        try {
          document.querySelector(o) || n.push(o);
        } catch {
          n.push(o);
        }
    return ve.value = n, n;
  }
  function xt(e, n) {
    const o = b.value[e];
    if (!o) return;
    const { [e]: s, ...r } = b.value;
    b.value = {
      ...r,
      [n]: { ...o, id: n, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }
    }, ve.value = ve.value.filter((h) => h !== e), X(() => fe());
  }
  function jt(e) {
    Ve.value = e, B.value = !0, q.value = !1, Oe();
  }
  function Rt() {
    const e = ve.value;
    if (e.length === 0) return;
    const n = { ...b.value };
    for (const o of e)
      delete n[o];
    b.value = n, ve.value = [], X(() => fe());
  }
  function _t() {
    Q.value = !Q.value;
  }
  function kt(e) {
    z.value = e;
  }
  function Bt() {
    z.value = null;
  }
  function Ut() {
    return JSON.stringify({
      elementConfigs: b.value,
      screenConfigs: x.value
    }, null, 2);
  }
  function Je() {
    const e = {
      _meta: {
        version: "1.0.0",
        description: "Dev Inspector annotations",
        lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
      },
      annotations: b.value,
      screenConfigs: x.value
    };
    return JSON.stringify(e, null, 2);
  }
  function qt(e = "dev-annotations.json") {
    const n = Je(), o = new Blob([n], { type: "application/json" }), s = URL.createObjectURL(o), r = document.createElement("a");
    r.href = s, r.download = e, document.body.appendChild(r), r.click(), document.body.removeChild(r), URL.revokeObjectURL(s);
  }
  function Ft(e) {
    try {
      const n = JSON.parse(e), o = n.annotations || n.elementConfigs || n;
      b.value = { ...b.value, ...o }, n.screenConfigs && (x.value = { ...x.value, ...n.screenConfigs });
    } catch (n) {
      throw console.error("[DevInspector] Failed to import configs:", n), new Error("Invalid JSON format");
    }
  }
  function Mt() {
    b.value = {};
  }
  function Ht(e = "screen-spec-sdd.md") {
    const n = Yt(b.value, x.value, H.value, A.value), o = new Blob([n], { type: "text/markdown;charset=utf-8" }), s = URL.createObjectURL(o), r = document.createElement("a");
    r.href = s, r.download = e, document.body.appendChild(r), r.click(), document.body.removeChild(r), URL.revokeObjectURL(s);
  }
  function Vt(e = "screen-spec-client.md") {
    const n = Xt(b.value, x.value, H.value, A.value), o = new Blob([n], { type: "text/markdown;charset=utf-8" }), s = URL.createObjectURL(o), r = document.createElement("a");
    r.href = s, r.download = e, document.body.appendChild(r), r.click(), document.body.removeChild(r), URL.revokeObjectURL(s);
  }
  return {
    // State
    isEnabled: C,
    isAvailable: v,
    isEditMode: q,
    isPickMode: B,
    isInitializing: t,
    hoveredSelector: J,
    currentScreenSpec: W,
    isPanelOpen: Z,
    elementConfigs: b,
    editingElementId: z,
    // Screen configs
    screenConfigs: x,
    editingScreen: ie,
    getScreenConfig: P,
    setScreenConfig: i,
    deleteScreenConfig: ne,
    suggestScreenApis: ot,
    // Actions
    init: he,
    toggle: ct,
    enable: xe,
    disable: lt,
    toggleEditMode: ut,
    togglePickMode: ft,
    setHoveredSelector: dt,
    generateSelector: pe,
    getConfiguredSelectors: pt,
    setScreenSpec: ht,
    clearScreenSpec: mt,
    togglePanel: gt,
    openPanel: Re,
    closePanel: Oe,
    getElementConfig: vt,
    setElementConfig: De,
    deleteElementConfig: yt,
    startEditing: kt,
    stopEditing: Bt,
    exportConfigs: Ut,
    exportAsFile: Je,
    downloadAnnotations: qt,
    downloadSddSpec: Ht,
    downloadClientSpec: Vt,
    importConfigs: Ft,
    clearAllConfigs: Mt,
    detectSourceBinding: _e,
    autoDetectElementInfo: ke,
    // Scan
    isScanning: be,
    scanProgress: $e,
    scanResults: Ce,
    scanCurrentPage: Be,
    scanAllPages: bt,
    allPagesRoutes: Ue,
    currentScanPage: Le,
    clearScanResults: $t,
    // Analysis data
    analysisData: T,
    loadAnalysisData: de,
    getAnalyzedElement: me,
    getAnalyzedElementsForPage: ue,
    analysisResults: ce,
    applyAnalysisToPage: qe,
    clearAnalysisResults: St,
    removeAnalysisResult: wt,
    clearHiddenSelectors: At,
    hiddenAnalysisSelectors: U,
    analysisFilter: ae,
    exportChangesForCli: Fe,
    downloadChanges: Tt,
    getAvailableBindings: Me,
    searchBindings: Et,
    getSchemaColumns: He,
    searchSchemaColumns: Pt,
    getCurrentPageApis: Ot,
    getApiSourceForBinding: Dt,
    // Note highlights
    showNoteHighlights: Q,
    toggleNoteHighlights: _t,
    noteHighlightFilter: le,
    // Element type detection
    detectElementType: Lt,
    // Master definitions
    masterDefinitions: H,
    getMasterDefinition: F,
    setMasterDefinition: _,
    deleteMasterDefinition: ge,
    getMastersForTable: Xe,
    getMasterEntries: Ze,
    // Batch definitions
    batchDefinitions: A,
    getBatchDefinition: et,
    setBatchDefinition: tt,
    deleteBatchDefinition: nt,
    // Broken annotation detection
    brokenAnnotations: ve,
    remapTargetId: Ve,
    detectBrokenAnnotations: Nt,
    remapAnnotation: xt,
    startRemap: jt,
    deleteBrokenAnnotations: Rt,
    // Cross Search
    showCrossSearch: E,
    crossSearchQuery: M,
    crossSearchMode: R,
    crossSearchResults: st,
    // Unannotated Detection
    showUnannotatedDetection: re,
    unannotatedElements: ee,
    hoveredUnannotatedSelector: te,
    detectUnannotatedElements: it,
    quickAnnotate: at,
    // Screen Flow
    showScreenFlow: Y,
    screenFlowData: rt
  };
});
function sn() {
  return en();
}
export {
  sn as a,
  en as u
};
