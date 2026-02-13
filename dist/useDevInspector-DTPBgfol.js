import { ref as O, computed as Re, watch as _e, nextTick as se } from "vue";
import { defineStore as zt } from "pinia";
function u(y) {
  return y.replace(/\|/g, "\\|").replace(/\n/g, " ");
}
function st(y) {
  const A = {};
  for (const [F, q] of Object.entries(y)) {
    const t = q.pagePath || "/";
    A[t] || (A[t] = []), A[t].push({ selector: F, config: q });
  }
  return A;
}
function Gt(y) {
  var A, F, q, t, Q, ie;
  return y.elementType === "form" ? "入力" : y.elementType === "action" ? ((A = y.actionInfo) == null ? void 0 : A.type) === "navigate" ? "リンク" : (((F = y.actionInfo) == null ? void 0 : F.type) === "modal", "ボタン") : y.fieldInfo || ((q = y.note) == null ? void 0 : q.displayType) === "db_direct" || ((t = y.note) == null ? void 0 : t.displayType) === "db_formatted" ? "表示" : ((Q = y.note) == null ? void 0 : Q.displayType) === "calculated" ? "表示(計算)" : ((ie = y.note) == null ? void 0 : ie.displayType) === "static" ? "表示(固定)" : "表示";
}
function Wt(y) {
  var A, F, q, t;
  return (A = y.note) != null && A.text ? y.note.text : (F = y.fieldInfo) != null && F.description ? y.fieldInfo.description : y.fieldInfo ? `${y.fieldInfo.table}.${y.fieldInfo.column}` : (q = y.actionInfo) != null && q.description ? y.actionInfo.description : (t = y.formInfo) != null && t.description ? y.formInfo.description : y.id;
}
function Yt(y) {
  var F, q;
  const A = [];
  if (y.fieldInfo && A.push(`DBの${y.fieldInfo.table}.${y.fieldInfo.column}を表示`), ((F = y.note) == null ? void 0 : F.displayType) === "calculated" && y.note.calcDescription && A.push(y.note.calcDescription), y.actionInfo) {
    const Q = {
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行",
      csv_export: "CSV出力",
      csv_import: "CSV取込",
      email: "メール送信"
    }[y.actionInfo.type] || y.actionInfo.type;
    A.push(`${Q}${y.actionInfo.target ? `: ${y.actionInfo.target}` : ""}`);
  }
  return (q = y.formInfo) != null && q.description && A.push(y.formInfo.description), A.join(" / ");
}
function it(y) {
  var ie, $, te;
  const A = [], F = /* @__PURE__ */ new Set();
  for (const Z of Object.values(y))
    if ((ie = Z.auth) != null && ie.roles)
      for (const P of Z.auth.roles)
        F.add(P);
  const q = [...F].sort();
  if (q.length === 0 && !Object.values(y).some((Z) => Z.auth))
    return A;
  A.push("## 権限マトリクス");
  const t = q.map((Z) => ` ${Z} `).join("|");
  A.push(`| 画面 | パス | 認証 |${t ? t + "|" : ""}`);
  const Q = q.map(() => "------").join("|");
  A.push(`|------|------|------|${Q ? Q + "|" : ""}`);
  for (const [Z, P] of Object.entries(y)) {
    const fe = P.name || Z, Y = ($ = P.auth) != null && $.required ? "必須" : "不要";
    if ((te = P.auth) != null && te.required) {
      const G = P.auth.roles || [], re = q.map((N) => G.length === 0 || G.includes(N) ? " ○ " : " × ").join("|");
      A.push(`| ${u(fe)} | ${u(Z)} | ${Y} |${re ? re + "|" : ""}`);
    } else {
      const G = q.map(() => " - ").join("|");
      A.push(`| ${u(fe)} | ${u(Z)} | ${Y} |${G ? G + "|" : ""}`);
    }
  }
  return A.push(""), A;
}
function Xt(y, A, F, q = {}) {
  var fe, Y, G, re, N, ve, H, j, ae, ce, de, he, ne, T, U, I, V, J, z, oe, W, le, be, $e;
  const t = [];
  t.push("# 画面仕様（SDD）"), t.push("");
  const Q = st(y), ie = /* @__PURE__ */ new Set([...Object.keys(A), ...Object.keys(Q)]);
  for (const h of ie) {
    const v = A[h], ee = Q[h] || [];
    if (t.push(`## ${h} — ${(v == null ? void 0 : v.name) || h}`), t.push(""), t.push("### 画面情報"), v != null && v.auth) {
      const b = (fe = v.auth.roles) != null && fe.length ? ` (${v.auth.roles.join(", ")})` : "";
      t.push(`- 認証: ${v.auth.required ? "必須" : "不要"}${b}`);
    }
    v != null && v.componentPath && t.push(`- コンポーネント: ${v.componentPath}`), v != null && v.description && t.push(`- 概要: ${v.description}`), t.push("");
    const Se = (v == null ? void 0 : v.apis) || [];
    if (Se.length > 0) {
      t.push("### API"), t.push("| メソッド | エンドポイント | タイミング | 説明 |"), t.push("|---------|-------------|----------|------|");
      for (const b of Se) {
        const S = b.loadTiming || "";
        t.push(`| ${b.method} | ${u(b.endpoint)} | ${S} | ${u(b.description || "")} |`);
      }
      t.push("");
    }
    const we = ee.filter((b) => b.config.elementType === "datasource" || !b.config.elementType && b.config.fieldInfo), Ie = ee.filter((b) => b.config.elementType === "action" || !b.config.elementType && b.config.actionInfo && !b.config.fieldInfo), me = ee.filter((b) => b.config.elementType === "form" || !b.config.elementType && b.config.formInfo && !b.config.fieldInfo && !b.config.actionInfo), Ce = ee.filter(
      (b) => !we.includes(b) && !Ie.includes(b) && !me.includes(b)
    );
    if (we.length > 0 || Ce.length > 0) {
      t.push("### データソース"), t.push("| セレクタ | DB | 型 | NULL時 | 表示形式 | 計算ロジック |"), t.push("|---------|-----|-----|--------|---------|------------|");
      for (const { selector: b, config: S } of [...we, ...Ce]) {
        const i = S.fieldInfo, k = i ? `${i.table}.${i.column}` : "", _ = (i == null ? void 0 : i.type) || "", K = ((Y = S.note) == null ? void 0 : Y.nullDisplay) || "-", M = ((G = S.note) == null ? void 0 : G.displayFormat) || "";
        let R = "";
        ((re = S.note) == null ? void 0 : re.displayType) === "calculated" && S.note.calcDescription && (R = S.note.calcDescription), (N = S.note) != null && N.storedCalc && S.note.storedCalcLogic && (R = S.note.storedCalcLogic), t.push(`| ${u(b)} | ${u(k)} | ${u(_)} | ${u(K)} | ${u(M)} | ${u(R)} |`);
      }
      t.push("");
    }
    if (Ie.length > 0) {
      t.push("### アクション"), t.push("| セレクタ | タイプ | 遷移先/API | 説明 |"), t.push("|---------|--------|-----------|------|");
      for (const { selector: b, config: S } of Ie) {
        const i = S.actionInfo, k = (i == null ? void 0 : i.type) || "";
        let _ = (i == null ? void 0 : i.target) || "";
        i != null && i.method && (_ = `${i.method} ${_}`);
        const K = (i == null ? void 0 : i.description) || ((ve = S.note) == null ? void 0 : ve.text) || "";
        t.push(`| ${u(b)} | ${u(k)} | ${u(_)} | ${u(K)} |`);
      }
      t.push("");
    }
    if (me.length > 0) {
      t.push("### フォーム"), t.push("| セレクタ | DB | 入力タイプ | 必須 | バリデーション | 初期値 |"), t.push("|---------|-----|----------|------|--------------|--------|");
      for (const { selector: b, config: S } of me) {
        const i = S.fieldInfo, k = i ? `${i.table}.${i.column}` : "", _ = ((H = S.formInfo) == null ? void 0 : H.inputType) || "", K = (j = S.formInfo) != null && j.required ? "Yes" : "", M = [
          ...((ae = S.formInfo) == null ? void 0 : ae.validation) || [],
          ...(i == null ? void 0 : i.validation) || []
        ].join(", "), R = ((ce = S.formInfo) == null ? void 0 : ce.defaultValue) || "";
        t.push(`| ${u(b)} | ${u(k)} | ${u(_)} | ${K} | ${u(M)} | ${u(R)} |`);
      }
      t.push("");
    }
    const Le = ee.filter(
      (b) => {
        var S, i;
        return ((S = b.config.actionInfo) == null ? void 0 : S.type) === "csv_export" || ((i = b.config.actionInfo) == null ? void 0 : i.type) === "csv_import";
      }
    );
    if (Le.length > 0) {
      t.push("### CSV仕様");
      for (const { config: b } of Le) {
        const S = b.actionInfo, i = S.csvSpec, k = S.type === "csv_export" ? "CSV出力" : "CSV取込", _ = S.description || ((de = b.note) == null ? void 0 : de.text) || "";
        if (t.push(`#### ${k}: ${_}`), t.push(""), i) {
          const K = [];
          if (i.encoding && K.push(`- エンコーディング: ${i.encoding}`), i.delimiter) {
            const M = { ",": "カンマ", "	": "タブ", "|": "パイプ" };
            K.push(`- 区切り文字: ${M[i.delimiter] || i.delimiter}`);
          }
          if (i.hasHeaderRow !== void 0 && K.push(`- ヘッダー行: ${i.hasHeaderRow ? "あり" : "なし"}`), i.filenamePattern && K.push(`- ファイル名: ${i.filenamePattern}`), K.length > 0 && (t.push("**ファイル設定**"), t.push(...K), t.push("")), i.columns.length > 0 && (i.columns.some((R) => R.processing) ? (t.push("| No | 項目名 | DBマッピング | 加工ロジック | 型 | 必須 | バリデーション | フォーマット | 説明 |"), t.push("|----|--------|-------------|------------|-----|------|--------------|------------|------|"), i.columns.forEach((R, ge) => {
            t.push(`| ${ge + 1} | ${u(R.name)} | ${u(R.dbMapping || "")} | ${u(R.processing || "")} | ${u(R.type || "")} | ${R.required ? "Yes" : ""} | ${u(R.validation || "")} | ${u(R.format || "")} | ${u(R.description || "")} |`);
          })) : (t.push("| No | 項目名 | DBマッピング | 型 | 必須 | バリデーション | フォーマット | 説明 |"), t.push("|----|--------|-------------|-----|------|--------------|------------|------|"), i.columns.forEach((R, ge) => {
            t.push(`| ${ge + 1} | ${u(R.name)} | ${u(R.dbMapping || "")} | ${u(R.type || "")} | ${R.required ? "Yes" : ""} | ${u(R.validation || "")} | ${u(R.format || "")} | ${u(R.description || "")} |`);
          })), t.push("")), S.type === "csv_export") {
            const M = [];
            i.sortOrder && M.push(`- ソート: ${i.sortOrder}`), i.filterCondition && M.push(`- 抽出条件: ${i.filterCondition}`), i.maxRows && M.push(`- 最大行数: ${i.maxRows}`), M.length > 0 && (t.push("**出力オプション**"), t.push(...M), t.push(""));
          }
          if (S.type === "csv_import") {
            const M = [], R = {
              stop_on_first: "最初のエラーで停止",
              skip_and_continue: "スキップして続行",
              collect_all: "全エラー収集"
            }, ge = {
              skip: "スキップ",
              overwrite: "上書き",
              error: "エラー"
            };
            i.errorHandling && M.push(`- エラー処理: ${R[i.errorHandling] || i.errorHandling}`), i.duplicateHandling && M.push(`- 重複処理: ${ge[i.duplicateHandling] || i.duplicateHandling}`), i.preValidation && M.push(`- 事前バリデーション: ${i.preValidation}`), M.length > 0 && (t.push("**取込オプション**"), t.push(...M), t.push(""));
          }
          if (i.errorDefs && i.errorDefs.length > 0) {
            t.push("**エラー定義**"), t.push("| 対象列 | エラー条件 | エラーメッセージ | 種別 |"), t.push("|--------|----------|----------------|------|");
            for (const M of i.errorDefs) {
              const R = M.severity === "warning" ? "警告" : "エラー";
              t.push(`| ${u(M.column || "（全体）")} | ${u(M.condition)} | ${u(M.message)} | ${R} |`);
            }
            t.push("");
          }
        }
      }
    }
    const Pe = ee.filter((b) => {
      var S;
      return ((S = b.config.actionInfo) == null ? void 0 : S.type) === "email";
    });
    if (Pe.length > 0) {
      t.push("### メール送信仕様");
      for (const { config: b } of Pe) {
        const S = b.actionInfo, i = S.emailSpec, k = S.description || ((he = b.note) == null ? void 0 : he.text) || "";
        t.push(`#### メール送信: ${k}`), i && (i.trigger && t.push(`- トリガー: ${i.trigger}`), i.to && t.push(`- 宛先: ${i.to}`), i.cc && t.push(`- CC: ${i.cc}`), i.bcc && t.push(`- BCC: ${i.bcc}`), i.subject && t.push(`- 件名: ${i.subject}`), i.bodyTemplate && t.push(`- 本文概要: ${i.bodyTemplate}`), i.templatePath && t.push(`- テンプレート: ${i.templatePath}`), i.variables && i.variables.length > 0 && t.push(`- 差し込み変数: ${i.variables.join(", ")}`), i.attachments && t.push(`- 添付ファイル: ${i.attachments}`), i.conditions && t.push(`- 送信条件: ${i.conditions}`), i.errorHandling && t.push(`- エラー処理: ${i.errorHandling}`)), t.push("");
      }
    }
    const Ae = ee.filter((b) => {
      var S, i;
      return ((S = b.config.actionInfo) == null ? void 0 : S.type) === "sort" && ((i = b.config.actionInfo) == null ? void 0 : i.sortSpec);
    });
    if (Ae.length > 0) {
      t.push("### ソート定義");
      const b = (U = (T = (ne = Ae.find((k) => {
        var _, K;
        return (K = (_ = k.config.actionInfo) == null ? void 0 : _.sortSpec) == null ? void 0 : K.unsortedOrder;
      })) == null ? void 0 : ne.config.actionInfo) == null ? void 0 : T.sortSpec) == null ? void 0 : U.unsortedOrder;
      b && (t.push(`- 未ソート時の並び順: ${b}`), t.push(""));
      const S = Ae.find((k) => {
        var _, K;
        return (K = (_ = k.config.actionInfo) == null ? void 0 : _.sortSpec) == null ? void 0 : K.isDefaultSort;
      });
      if (S) {
        const k = S.config.actionInfo.sortSpec, _ = k.defaultDirection === "desc" ? "降順" : "昇順";
        t.push(`- デフォルトソート: ${k.sortKey || ((I = S.config.actionInfo) == null ? void 0 : I.description) || S.selector} (${_})`), t.push("");
      }
      const i = Ae.filter((k) => {
        var _, K;
        return (K = (_ = k.config.actionInfo) == null ? void 0 : _.sortSpec) == null ? void 0 : K.sortable;
      });
      if (i.length > 0) {
        t.push("| 項目 | ソートキー | データ型 | デフォルト方向 | 備考 |"), t.push("|------|----------|---------|-------------|------|");
        for (const { config: k } of i) {
          const _ = k.actionInfo.sortSpec, K = (V = k.actionInfo) != null && V.description || (J = k.note) != null && J.text || k.fieldInfo ? `${(z = k.fieldInfo) == null ? void 0 : z.table}.${(oe = k.fieldInfo) == null ? void 0 : oe.column}` : k.id, M = { string: "文字列", number: "数値", date: "日付", custom: "カスタム" }, R = _.sortType ? M[_.sortType] || _.sortType : "", ge = _.defaultDirection === "desc" ? "降順" : _.defaultDirection === "asc" ? "昇順" : "", ke = [
            _.isDefaultSort ? "初期ソート" : "",
            _.description || ""
          ].filter(Boolean).join(" / ");
          t.push(`| ${u(K)} | ${u(_.sortKey || "")} | ${R} | ${ge} | ${u(ke)} |`);
        }
        t.push("");
      }
    }
    t.push("---"), t.push("");
  }
  const $ = it(A);
  $.length > 0 && t.push(...$);
  const te = [];
  for (const [h, v] of Object.entries(y))
    if (((W = v.actionInfo) == null ? void 0 : W.type) === "navigate" && v.actionInfo.target) {
      const ee = v.pagePath || "/";
      te.push({
        from: ee,
        to: v.actionInfo.target,
        trigger: v.actionInfo.description || ((le = v.note) == null ? void 0 : le.text) || h
      });
    }
  if (te.length > 0) {
    t.push("## 画面フロー"), t.push("| 遷移元 | 遷移先 | トリガー |"), t.push("|--------|--------|---------|");
    for (const h of te) {
      const v = ((be = A[h.from]) == null ? void 0 : be.name) || h.from, ee = (($e = A[h.to]) == null ? void 0 : $e.name) || h.to;
      t.push(`| ${u(v)} (${u(h.from)}) | ${u(ee)} (${u(h.to)}) | ${u(h.trigger)} |`);
    }
    t.push("");
  }
  const Z = Object.values(F);
  if (Z.length > 0) {
    t.push("## マスタ定義"), t.push("");
    for (const h of Z) {
      t.push(`### ${h.id} — ${h.name} (${h.columnType || ""})`), h.description && (t.push(h.description), t.push("")), t.push("| 値 | ラベル | 説明 |"), t.push("|----|--------|------|");
      for (const v of h.entries)
        t.push(`| ${u(v.value)} | ${u(v.label)} | ${u(v.description || "")} |`);
      if (t.push(""), h.transitions && h.transitions.length > 0) {
        t.push("**状態遷移**"), t.push("| 遷移元 | 遷移先 | トリガー | 条件 |"), t.push("|--------|--------|---------|------|");
        for (const v of h.transitions) {
          const ee = h.entries.find((me) => me.value === v.from), Se = h.entries.find((me) => me.value === v.to), we = ee ? `${ee.label} (${v.from})` : v.from, Ie = Se ? `${Se.label} (${v.to})` : v.to;
          t.push(`| ${u(we)} | ${u(Ie)} | ${u(v.trigger)} | ${u(v.condition || "")} |`);
        }
        t.push("");
      }
    }
  }
  const P = Object.values(q);
  if (P.length > 0) {
    t.push("## バッチ処理定義"), t.push("");
    for (const h of P) {
      if (t.push(`### ${h.name}`), h.schedule && t.push(`- スケジュール: ${h.schedule}`), h.trigger && t.push(`- トリガー: ${h.trigger}`), h.description && t.push(`- 概要: ${h.description}`), h.timeout && t.push(`- タイムアウト: ${h.timeout}`), h.retryPolicy && t.push(`- リトライ: ${h.retryPolicy}`), h.inputTables && h.inputTables.length > 0 && t.push(`- 入力: ${h.inputTables.join(", ")}`), h.outputTables && h.outputTables.length > 0 && t.push(`- 出力: ${h.outputTables.join(", ")}`), t.push(""), h.steps.length > 0) {
        t.push("**処理ステップ**"), t.push("| No | 処理内容 | 対象 | 種別 | エラー時 |"), t.push("|----|---------|------|------|---------|");
        for (const v of h.steps)
          t.push(`| ${v.order} | ${u(v.description)} | ${u(v.target || "-")} | ${u(v.type || "")} | ${u(v.errorHandling || "")} |`);
        t.push("");
      }
      h.notifyOnError && t.push(`- エラー通知: ${h.notifyOnError}`), h.notifyOnComplete && t.push(`- 完了通知: ${h.notifyOnComplete}`), (h.notifyOnError || h.notifyOnComplete) && t.push("");
    }
  }
  return t.join(`
`);
}
function Zt(y, A, F, q = {}) {
  var P, fe, Y, G, re, N, ve;
  const t = [];
  t.push("# 画面仕様書"), t.push("");
  const Q = st(y), ie = /* @__PURE__ */ new Set([...Object.keys(A), ...Object.keys(Q)]);
  for (const H of ie) {
    const j = A[H], ae = Q[H] || [];
    if (t.push(`## ${(j == null ? void 0 : j.name) || H}`), t.push(`**URL:** ${H}`), t.push(""), j != null && j.description && (t.push("### 概要"), t.push(j.description), t.push("")), j != null && j.auth) {
      if (t.push("### 認証"), t.push(`- ${j.auth.required ? "ログイン必須" : "ログイン不要"}`), (P = j.auth.roles) != null && P.length) {
        const T = j.auth.roles.map((U) => ({ admin: "管理者", manager: "マネージャー", user: "ユーザー" })[U] || U);
        t.push(`- 権限: ${T.join("、")}`);
      }
      t.push("");
    }
    ae.length > 0 && (t.push("### 画面項目"), t.push("| No | 項目名 | 種別 | 説明 | 必須 | 備考 |"), t.push("|----|--------|------|------|------|------|"), ae.forEach(({ config: T }, U) => {
      var W, le, be, $e;
      const I = Wt(T), V = Gt(T), J = Yt(T), z = (W = T.formInfo) != null && W.required ? "必須" : "", oe = [];
      (le = T.note) != null && le.condition && oe.push(T.note.condition), (be = T.note) != null && be.unit && oe.push(`単位: ${T.note.unit}`), ($e = T.note) != null && $e.nullDisplay && T.note.nullDisplay !== "-" && oe.push(`空欄時: ${T.note.nullDisplay}`), t.push(`| ${U + 1} | ${u(I)} | ${V} | ${u(J)} | ${z} | ${u(oe.join(" / "))} |`);
    }), t.push(""));
    const ce = (j == null ? void 0 : j.apis) || [];
    if (ce.length > 0) {
      t.push("### 使用API"), t.push("| メソッド | エンドポイント | 説明 |"), t.push("|---------|-------------|------|");
      for (const T of ce)
        t.push(`| ${T.method} | ${u(T.endpoint)} | ${u(T.description || "")} |`);
      t.push("");
    }
    const de = ae.filter(
      (T) => {
        var U, I;
        return ((U = T.config.actionInfo) == null ? void 0 : U.type) === "csv_export" || ((I = T.config.actionInfo) == null ? void 0 : I.type) === "csv_import";
      }
    );
    if (de.length > 0) {
      t.push("### CSV入出力仕様");
      for (const { config: T } of de) {
        const U = T.actionInfo, I = U.csvSpec, V = U.type === "csv_export" ? "CSV出力" : "CSV取込", J = U.description || ((fe = T.note) == null ? void 0 : fe.text) || "";
        if (t.push(`#### ${V}: ${J}`), t.push(""), I) {
          const z = [];
          if (I.encoding && z.push(`- エンコーディング: ${I.encoding}`), I.filenamePattern && z.push(`- ファイル名: ${I.filenamePattern}`), z.length > 0 && (t.push(...z), t.push("")), I.columns.length > 0 && (I.columns.some((W) => W.processing) ? (t.push("| No | 項目名 | 加工 | 型 | 必須 | 説明 |"), t.push("|----|--------|------|-----|------|------|"), I.columns.forEach((W, le) => {
            t.push(`| ${le + 1} | ${u(W.name)} | ${u(W.processing || "")} | ${u(W.type || "")} | ${W.required ? "必須" : ""} | ${u(W.description || "")} |`);
          })) : (t.push("| No | 項目名 | 型 | 必須 | 説明 |"), t.push("|----|--------|-----|------|------|"), I.columns.forEach((W, le) => {
            t.push(`| ${le + 1} | ${u(W.name)} | ${u(W.type || "")} | ${W.required ? "必須" : ""} | ${u(W.description || "")} |`);
          })), t.push("")), I.errorDefs && I.errorDefs.length > 0) {
            t.push("**エラー時の動作**"), t.push("| エラー条件 | メッセージ |"), t.push("|----------|----------|");
            for (const oe of I.errorDefs) {
              const W = oe.column ? `[${oe.column}] ` : "";
              t.push(`| ${u(W + oe.condition)} | ${u(oe.message)} |`);
            }
            t.push("");
          }
        }
      }
    }
    const he = ae.filter((T) => {
      var U;
      return ((U = T.config.actionInfo) == null ? void 0 : U.type) === "email";
    });
    if (he.length > 0) {
      t.push("### メール送信");
      for (const { config: T } of he) {
        const U = T.actionInfo, I = U.emailSpec, V = U.description || ((Y = T.note) == null ? void 0 : Y.text) || "";
        t.push(`#### ${V}`), I && (I.trigger && t.push(`- タイミング: ${I.trigger}`), I.to && t.push(`- 宛先: ${I.to}`), I.subject && t.push(`- 件名: ${I.subject}`)), t.push("");
      }
    }
    const ne = ae.filter((T) => {
      var U, I;
      return ((U = T.config.actionInfo) == null ? void 0 : U.type) === "sort" && ((I = T.config.actionInfo) == null ? void 0 : I.sortSpec);
    });
    if (ne.length > 0) {
      t.push("### ソート");
      const T = (N = (re = (G = ne.find((V) => {
        var J, z;
        return (z = (J = V.config.actionInfo) == null ? void 0 : J.sortSpec) == null ? void 0 : z.unsortedOrder;
      })) == null ? void 0 : G.config.actionInfo) == null ? void 0 : re.sortSpec) == null ? void 0 : N.unsortedOrder;
      T && t.push(`- 初期並び順: ${T}`);
      const U = ne.filter((V) => {
        var J, z;
        return (z = (J = V.config.actionInfo) == null ? void 0 : J.sortSpec) == null ? void 0 : z.sortable;
      });
      U.length > 0 && t.push(`- ソート可能項目: ${U.map((V) => {
        var J, z;
        return ((J = V.config.note) == null ? void 0 : J.text) || ((z = V.config.fieldInfo) == null ? void 0 : z.column) || V.selector;
      }).join("、")}`);
      const I = ne.find((V) => {
        var J, z;
        return (z = (J = V.config.actionInfo) == null ? void 0 : J.sortSpec) == null ? void 0 : z.isDefaultSort;
      });
      if (I) {
        const V = I.config.actionInfo.sortSpec, J = V.defaultDirection === "desc" ? "降順" : "昇順";
        t.push(`- デフォルト: ${((ve = I.config.note) == null ? void 0 : ve.text) || V.sortKey || ""} ${J}`);
      }
      t.push("");
    }
    j != null && j.notes && (t.push("### 備考"), t.push(j.notes), t.push("")), t.push("---"), t.push("");
  }
  const $ = Object.values(F).filter((H) => H.transitions && H.transitions.length > 0);
  if ($.length > 0) {
    t.push("## 状態遷移");
    for (const H of $) {
      t.push(`### ${H.name}`), t.push("| 遷移元 | 遷移先 | 操作 | 条件 |"), t.push("|--------|--------|------|------|");
      for (const j of H.transitions) {
        const ae = H.entries.find((ne) => ne.value === j.from), ce = H.entries.find((ne) => ne.value === j.to), de = ae ? ae.label : j.from, he = ce ? ce.label : j.to;
        t.push(`| ${u(de)} | ${u(he)} | ${u(j.trigger)} | ${u(j.condition || "")} |`);
      }
      t.push("");
    }
  }
  const te = Object.values(q);
  if (te.length > 0) {
    t.push("## バッチ処理"), t.push("");
    for (const H of te)
      t.push(`### ${H.name}`), H.schedule && t.push(`- 実行タイミング: ${H.schedule}`), H.description && t.push(`- 概要: ${H.description}`), t.push("");
  }
  const Z = it(A);
  return Z.length > 0 && t.push(...Z), t.join(`
`);
}
const Qt = {}, en = "devInspector:elementConfigs", tt = "devInspector:screenConfigs", nt = "devInspector:masterDefinitions", ot = "devInspector:batchDefinitions", tn = zt("devInspector", () => {
  const y = O({}), A = O(!1), F = O(!1), q = O(!1), t = O(!1), Q = O(null), ie = O(!1), $ = O({}), te = O(null), Z = O(null), P = O({}), fe = O(!1), Y = O({}), G = O({}), re = Re(() => y.value.storageKey || en), N = O(null), ve = O("all"), H = O(!0), j = O("all"), ae = O(!1), ce = O(""), de = O("column"), he = O(!1), ne = O([]), T = O(null), U = O(!1), I = O(/* @__PURE__ */ new Set()), V = "devInspector:hiddenAnalysisSelectors", J = Re(() => y.value.enabledInProduction ? !0 : typeof import.meta < "u" && Qt ? !1 : process.env.NODE_ENV === "development"), z = O(!1);
  function oe(e = {}) {
    y.value = e, $e(), v(), me(), i(), Ct(), e.analysisData && (N.value = e.analysisData);
    const o = e.analysisDataUrl ?? "/dev-inspector-analysis.json";
    e.autoLoadAnalysis !== !1 && J.value && W(o);
  }
  async function W(e) {
    var o;
    try {
      const n = await fetch(e);
      if (n.ok)
        return N.value = await n.json(), console.log("[DevInspector] Analysis data loaded:", Object.keys(((o = N.value) == null ? void 0 : o.components) || {}).length, "components"), !0;
    } catch {
      console.debug("[DevInspector] Analysis data not found at", e);
    }
    return !1;
  }
  function le(e) {
    if (!N.value) return null;
    for (const o of Object.values(N.value.components)) {
      const n = o.elements.find((s) => s.selector === e);
      if (n) return n;
    }
    return null;
  }
  function be(e) {
    if (!N.value) return [];
    const o = [];
    for (const [n, s] of Object.entries(N.value.components))
      (!e || n.includes(e)) && o.push(...s.elements);
    return o;
  }
  function $e() {
    try {
      const e = y.value.initialAnnotations || {};
      if (typeof window < "u") {
        const o = localStorage.getItem(re.value), n = o ? JSON.parse(o) : {};
        $.value = { ...e, ...n };
      } else
        $.value = e;
    } catch (e) {
      console.error("[DevInspector] Failed to load configs:", e);
    }
  }
  function h() {
    try {
      if (typeof window < "u") {
        const e = JSON.stringify($.value);
        localStorage.setItem(re.value, e), console.log("[DevInspector] Saved configs:", Object.keys($.value).length, "items");
      }
    } catch (e) {
      console.error("[DevInspector] Failed to save configs:", e);
    }
  }
  _e($, () => {
    se(() => {
      h();
    });
  }, { deep: !0 });
  function v() {
    try {
      if (typeof window < "u") {
        const e = localStorage.getItem(tt);
        e && (P.value = JSON.parse(e));
      }
    } catch (e) {
      console.error("[DevInspector] Failed to load screen configs:", e);
    }
  }
  function ee() {
    try {
      if (typeof window < "u") {
        const e = JSON.stringify(P.value);
        localStorage.setItem(tt, e);
      }
    } catch (e) {
      console.error("[DevInspector] Failed to save screen configs:", e);
    }
  }
  _e(P, () => {
    se(() => {
      ee();
    });
  }, { deep: !0 });
  function Se(e) {
    const o = e || (typeof window < "u" ? window.location.pathname : "/");
    return P.value[o];
  }
  function we(e) {
    P.value = {
      ...P.value,
      [e.path]: e
    }, se(() => ee());
  }
  function Ie(e) {
    const { [e]: o, ...n } = P.value;
    P.value = n, se(() => ee());
  }
  function me() {
    try {
      if (typeof window < "u") {
        const e = localStorage.getItem(nt);
        e && (Y.value = JSON.parse(e));
      }
    } catch (e) {
      console.error("[DevInspector] Failed to load master definitions:", e);
    }
  }
  function Ce() {
    try {
      typeof window < "u" && localStorage.setItem(nt, JSON.stringify(Y.value));
    } catch (e) {
      console.error("[DevInspector] Failed to save master definitions:", e);
    }
  }
  _e(Y, () => {
    se(() => {
      Ce();
    });
  }, { deep: !0 });
  function Le(e) {
    return Y.value[e];
  }
  function Pe(e) {
    Y.value = {
      ...Y.value,
      [e.id]: { ...e, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }
    }, se(() => Ce());
  }
  function Ae(e) {
    const { [e]: o, ...n } = Y.value;
    Y.value = n, se(() => Ce());
  }
  function b(e) {
    return Object.values(Y.value).filter((o) => o.table === e);
  }
  function S(e) {
    var o;
    return ((o = Y.value[e]) == null ? void 0 : o.entries) || [];
  }
  function i() {
    try {
      if (typeof window < "u") {
        const e = localStorage.getItem(ot);
        e && (G.value = JSON.parse(e));
      }
    } catch (e) {
      console.error("[DevInspector] Failed to load batch definitions:", e);
    }
  }
  function k() {
    try {
      typeof window < "u" && localStorage.setItem(ot, JSON.stringify(G.value));
    } catch (e) {
      console.error("[DevInspector] Failed to save batch definitions:", e);
    }
  }
  _e(G, () => {
    se(() => {
      k();
    });
  }, { deep: !0 });
  function _(e) {
    return G.value[e];
  }
  function K(e) {
    G.value = {
      ...G.value,
      [e.id]: { ...e, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }
    }, se(() => k());
  }
  function M(e) {
    const { [e]: o, ...n } = G.value;
    G.value = n, se(() => k());
  }
  function R() {
    var s, r, d, c, f;
    const e = [], o = /* @__PURE__ */ new Set(), n = {};
    for (const p of Object.values($.value)) {
      const w = p.fieldInfoList || (p.fieldInfo ? [p.fieldInfo] : []), m = ((s = p.sourceBinding) == null ? void 0 : s.type) === "v-model";
      for (const a of w)
        a.table && (n[a.table] || (n[a.table] = { read: !1, write: !1, isList: !1 }), n[a.table].read = !0, m && (n[a.table].write = !0));
      if (((r = p.note) == null ? void 0 : r.displayType) === "db_direct" || ((d = p.note) == null ? void 0 : d.displayType) === "db_formatted")
        for (const a of w)
          a.table && n[a.table] && (p.id.includes("tbody") || p.id.includes(" tr") || p.id.includes(" td")) && (n[a.table].isList = !0);
      if (((c = p.actionInfo) == null ? void 0 : c.type) === "api" && p.actionInfo.target) {
        const a = `${p.actionInfo.method || "GET"}:${p.actionInfo.target}`;
        o.has(a) || (o.add(a), e.push({
          method: p.actionInfo.method || "GET",
          endpoint: p.actionInfo.target,
          description: p.actionInfo.description || "",
          loadTiming: "action"
        }));
      }
    }
    for (const [p, w] of Object.entries(n)) {
      if (w.read) {
        const m = w.isList ? `/api/${p}` : `/api/${p}/:id`, a = `GET:${m}`;
        o.has(a) || (o.add(a), e.push({
          method: "GET",
          endpoint: m,
          description: w.isList ? `${p} 一覧取得` : `${p} 詳細取得`,
          loadTiming: "onMount"
        }));
      }
      if (w.write) {
        const m = `/api/${p}/:id`, a = `PUT:${m}`;
        o.has(a) || (o.add(a), e.push({
          method: "PUT",
          endpoint: m,
          description: `${p} 更新`,
          loadTiming: "action"
        }));
      }
    }
    if ((f = N.value) != null && f.components) {
      const p = typeof window < "u" ? window.location.pathname : "/";
      for (const [w, m] of Object.entries(N.value.components)) {
        const a = w.replace(/^pages/, "").replace(/\.vue$/, "").replace(/\/index$/, "").replace(/\[.*?\]/g, "[^/]+");
        let l = !1;
        if (p === "/" && w.includes("index"))
          l = !0;
        else if (w.includes("pages/"))
          try {
            l = !!p.match(new RegExp(`^${a}$`));
          } catch {
          }
        if (l && m.apis)
          for (const g of m.apis) {
            if (!g.endpoint) continue;
            const B = `${g.method}:${g.endpoint}`;
            o.has(B) || (o.add(B), e.push({
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
  const ge = Re(() => {
    var s, r, d, c, f, p, w, m, a, l, g, B, x, E, D;
    const e = ce.value.trim().toLowerCase();
    if (!e) return [];
    const o = de.value, n = [];
    for (const [L, C] of Object.entries($.value)) {
      const X = C.pagePath || "/", Te = P.value[X], xe = (Te == null ? void 0 : Te.name) || X;
      if (o === "column") {
        const Fe = (s = C.fieldInfoList) != null && s.length ? C.fieldInfoList : C.fieldInfo ? [C.fieldInfo] : [];
        for (const ue of Fe)
          (`${ue.table}.${ue.column}`.toLowerCase().includes(e) || ue.table.toLowerCase().includes(e) || ue.column.toLowerCase().includes(e)) && n.push({
            pagePath: X,
            pageName: xe,
            selector: L,
            elementType: C.elementType,
            matchedField: `${ue.table}.${ue.column}`,
            matchContext: `${ue.type || ""} ${ue.description || ""}`.trim()
          });
        const je = ((r = C.note) == null ? void 0 : r.calcSources) || [], Kt = ((d = C.note) == null ? void 0 : d.storedCalcSources) || [];
        for (const ue of [...je, ...Kt])
          ue.toLowerCase().includes(e) && n.push({
            pagePath: X,
            pageName: xe,
            selector: L,
            elementType: C.elementType,
            matchedField: ue,
            matchContext: ((c = C.note) == null ? void 0 : c.calcDescription) || ((f = C.note) == null ? void 0 : f.storedCalcLogic) || "参照元"
          });
      } else if (o === "api")
        (w = (p = C.actionInfo) == null ? void 0 : p.target) != null && w.toLowerCase().includes(e) && n.push({
          pagePath: X,
          pageName: xe,
          selector: L,
          elementType: C.elementType,
          matchedField: `${C.actionInfo.method || ""} ${C.actionInfo.target}`.trim(),
          matchContext: C.actionInfo.description || C.actionInfo.type
        });
      else if (o === "text") {
        const Fe = [
          (m = C.note) == null ? void 0 : m.text,
          (a = C.note) == null ? void 0 : a.calcDescription,
          (l = C.note) == null ? void 0 : l.formatDescription,
          (g = C.note) == null ? void 0 : g.condition,
          (B = C.actionInfo) == null ? void 0 : B.description,
          (x = C.formInfo) == null ? void 0 : x.description,
          L
          // selector itself
        ].filter(Boolean);
        for (const je of Fe)
          if (je.toLowerCase().includes(e)) {
            n.push({
              pagePath: X,
              pageName: xe,
              selector: L,
              elementType: C.elementType,
              matchedField: je.substring(0, 60),
              matchContext: ((D = (E = C.note) == null ? void 0 : E.text) == null ? void 0 : D.substring(0, 40)) || ""
            });
            break;
          }
      }
    }
    if (o === "api")
      for (const [L, C] of Object.entries(P.value))
        for (const X of C.apis || [])
          X.endpoint.toLowerCase().includes(e) && n.push({
            pagePath: L,
            pageName: C.name || L,
            selector: "",
            elementType: void 0,
            matchedField: `${X.method} ${X.endpoint}`,
            matchContext: X.description || "画面API"
          });
    return n;
  });
  function ke() {
    if (typeof document > "u") return [];
    const e = typeof window < "u" ? window.location.pathname : "/", o = /* @__PURE__ */ new Set();
    for (const [a, l] of Object.entries($.value))
      (!l.pagePath || l.pagePath === e) && o.add(a);
    const n = /* @__PURE__ */ new Set();
    for (const a of o)
      try {
        const l = document.querySelector(a);
        l && n.add(l);
      } catch {
      }
    const s = [], r = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
    function f(a) {
      if (a.closest("[data-dev-inspector]")) return !0;
      const l = ye(a);
      if (o.has(l) || r.has(l)) return !0;
      for (const g of n)
        if (g.contains(a) && g !== a) return !0;
      return !1;
    }
    function p(a, l, g, B) {
      const x = ye(a);
      r.add(x), c.add(a), s.push({ selector: x, tagName: a.tagName.toLowerCase(), category: l, text: g.substring(0, 50), suggestedType: B });
    }
    document.querySelectorAll("[data-di-binding]").forEach((a) => {
      var B;
      const l = a;
      if (l.closest("[data-dev-inspector]")) return;
      const g = l.getAttribute("data-di-binding") || "";
      d.has(g) || f(l) || (d.add(g), p(l, "binding", ((B = l.textContent) == null ? void 0 : B.trim()) || "", "datasource"));
    }), document.querySelectorAll("table").forEach((a) => {
      if (a.closest("[data-dev-inspector]")) return;
      const l = window.getComputedStyle(a);
      if (l.display === "none" || l.visibility === "hidden") return;
      const g = [];
      if (a.querySelectorAll("thead th, thead td").forEach((E) => {
        var D;
        g.push(((D = E.textContent) == null ? void 0 : D.trim()) || "");
      }), g.length === 0) {
        const E = a.querySelector("tr");
        E && E.querySelectorAll("th, td").forEach((D) => {
          var L;
          g.push(((L = D.textContent) == null ? void 0 : L.trim()) || "");
        });
      }
      const B = a.querySelector("tbody tr") || a.querySelectorAll("tr")[g.length > 0 ? 1 : 0];
      if (!B) return;
      B.querySelectorAll("td").forEach((E, D) => {
        var Te;
        const L = E, C = ((Te = L.textContent) == null ? void 0 : Te.trim()) || "";
        if (!C || L.querySelector("[data-di-binding]") || f(L)) return;
        const X = g[D] || `列${D + 1}`;
        p(L, "binding", `${X}: ${C}`, "datasource");
      });
    }), document.querySelectorAll("input, select, textarea").forEach((a) => {
      var x, E;
      const l = a;
      if (l.closest("[data-dev-inspector]") || l.type === "hidden") return;
      const g = window.getComputedStyle(l);
      if (g.display === "none" || g.visibility === "hidden" || f(l)) return;
      const B = ((E = (x = l.closest("label")) == null ? void 0 : x.textContent) == null ? void 0 : E.trim()) || l.getAttribute("aria-label") || l.placeholder || l.name || l.tagName.toLowerCase();
      p(l, "form", B || "", "form");
    });
    const w = /* @__PURE__ */ new Set();
    document.querySelectorAll("table").forEach((a) => {
      const l = a.querySelector("tbody tr") || a.querySelectorAll("tr")[1];
      l && w.add(l);
    }), document.querySelectorAll('button, a[href], [role="button"]').forEach((a) => {
      var E;
      const l = a;
      if (l.closest("[data-dev-inspector]")) return;
      const g = ((E = l.textContent) == null ? void 0 : E.trim()) || "";
      if (!g) return;
      const B = window.getComputedStyle(l);
      if (B.display === "none" || B.visibility === "hidden") return;
      const x = l.closest("tr");
      x && x.closest("table") && !w.has(x) || f(l) || p(l, "action", g, "action");
    });
    const m = s.filter((a) => {
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
    return ne.value = m, m;
  }
  function at(e, o) {
    const n = {
      elementType: o,
      pagePath: typeof window < "u" ? window.location.pathname : "/",
      note: { text: "", type: "todo" }
    };
    o === "action" ? n.actionInfo = { type: "function", description: "" } : o === "form" && (n.formInfo = { inputType: "text" }), qe(e, n), te.value = e, ne.value = ne.value.filter((s) => s.selector !== e);
  }
  const rt = Re(() => {
    var c, f, p, w;
    const e = /* @__PURE__ */ new Map(), o = [], n = /* @__PURE__ */ new Set();
    for (const [m, a] of Object.entries(P.value))
      e.set(m, {
        path: m,
        name: a.name || m,
        annotationCount: Object.values($.value).filter((l) => l.pagePath === m).length
      });
    for (const [m, a] of Object.entries($.value))
      if (((c = a.actionInfo) == null ? void 0 : c.type) === "navigate" && a.actionInfo.target) {
        const l = a.pagePath || "/", g = a.actionInfo.target, B = `${l}→${g}`;
        if (!e.has(l)) {
          const x = P.value[l];
          e.set(l, {
            path: l,
            name: (x == null ? void 0 : x.name) || l,
            annotationCount: Object.values($.value).filter((E) => E.pagePath === l).length
          });
        }
        if (!e.has(g)) {
          const x = P.value[g];
          e.set(g, {
            path: g,
            name: (x == null ? void 0 : x.name) || g,
            annotationCount: Object.values($.value).filter((E) => E.pagePath === g).length
          });
        }
        if (!n.has(B)) {
          n.add(B);
          let x = a.actionInfo.description || ((f = a.note) == null ? void 0 : f.text) || "";
          if (!x && typeof document < "u")
            try {
              const E = document.querySelector(m);
              E && (x = ((w = (p = E.textContent) == null ? void 0 : p.trim()) == null ? void 0 : w.substring(0, 20)) || "");
            } catch {
            }
          o.push({
            from: l,
            to: g,
            label: x,
            selector: m
          });
        }
      }
    const s = Array.from(e.values()), r = /* @__PURE__ */ new Set();
    for (const m of o)
      r.add(m.from), r.add(m.to);
    const d = s.filter((m) => !r.has(m.path));
    return { nodes: s, edges: o, orphanPages: d };
  });
  async function ct() {
    J.value && (A.value ? (A.value = !1, F.value = !1, te.value = null) : await Me());
  }
  async function Me() {
    if (!J.value) return;
    if (N.value && !z.value && y.value.autoApplyAnalysis !== !1) {
      t.value = !0, A.value = !0;
      try {
        await new Promise((o) => setTimeout(o, 300)), We(), z.value = !0;
      } finally {
        t.value = !1;
      }
    } else
      A.value = !0;
  }
  function lt() {
    A.value = !1, F.value = !1, te.value = null;
  }
  function ut() {
    F.value = !F.value, F.value || (te.value = null), F.value && (q.value = !1);
  }
  function ft() {
    q.value = !q.value, q.value && (F.value = !1), Z.value = null;
  }
  function dt(e) {
    Z.value = e;
  }
  function ye(e) {
    if (e.id)
      return `#${e.id}`;
    if (e.dataset.devId)
      return `[data-dev-id="${e.dataset.devId}"]`;
    const o = [];
    let n = e;
    for (; n && n !== document.body; ) {
      let s = n.tagName.toLowerCase();
      if (n.id) {
        s = `#${n.id}`, o.unshift(s);
        break;
      }
      const r = Array.from(n.classList).filter(
        (c) => !c.startsWith("hover:") && !c.startsWith("focus:") && !c.startsWith("-") && !/[/\[\]()!@#$%^&*=+{}|\\:'"<>,?.~]/.test(c)
      ).slice(0, 2);
      r.length > 0 && (s += "." + r.join("."));
      const d = n.parentElement;
      if (d) {
        const c = Array.from(d.children).filter(
          (f) => f.tagName === n.tagName
        );
        if (c.length > 1) {
          const f = c.indexOf(n) + 1;
          s += `:nth-of-type(${f})`;
        }
      }
      o.unshift(s), n = n.parentElement;
    }
    return o.join(" > ");
  }
  function pt() {
    const e = typeof window < "u" ? window.location.pathname : "/";
    return Object.keys($.value).filter((o) => {
      const n = $.value[o];
      return n ? (o.includes(">") || o.startsWith("#") || o.startsWith("[") || o.startsWith(".")) && (!n.componentPath || n.componentPath.includes(e) || e === "/") : !1;
    });
  }
  function ht(e) {
    Q.value = e;
  }
  function mt() {
    Q.value = null;
  }
  function gt() {
    ie.value ? Be() : Ve();
  }
  function He() {
    [0, 50, 100, 150, 200, 250, 320].forEach((o) => setTimeout(() => window.dispatchEvent(new Event("resize")), o));
  }
  function Ve() {
    ie.value = !0, typeof document < "u" && (document.body.style.transition = "margin-right 0.3s ease", document.body.style.marginRight = "360px", He());
  }
  function Be() {
    ie.value = !1, typeof document < "u" && (document.body.style.transition = "margin-right 0.3s ease", document.body.style.marginRight = "", He());
  }
  function yt(e) {
    return $.value[e];
  }
  function vt(e) {
    if (typeof document > "u") return !1;
    try {
      const o = document.querySelector(e);
      if (!o) return !1;
      let n = o.parentElement;
      for (; n && n !== document.body; ) {
        if (n.tagName === "DIALOG") return !0;
        const s = n.getAttribute("role");
        if (s === "dialog" || s === "alertdialog") return !0;
        const r = n.className || "";
        if (typeof r == "string" && /\b(modal|dialog|v-dialog|el-dialog|v-overlay|drawer)\b/i.test(r) || n.id === "teleported" || n.hasAttribute("data-teleport")) return !0;
        if (typeof r == "string") {
          const d = window.getComputedStyle(n);
          if (d.position === "fixed") {
            const c = parseInt(d.zIndex, 10);
            if (!isNaN(c) && c >= 40) {
              const f = n.getBoundingClientRect();
              if (f.width >= window.innerWidth * 0.9 && f.height >= window.innerHeight * 0.9)
                return !0;
            }
          }
        }
        n = n.parentElement;
      }
    } catch {
    }
    return !1;
  }
  function qe(e, o) {
    var f;
    const n = (/* @__PURE__ */ new Date()).toISOString(), s = $.value[e], r = typeof window < "u" ? window.location.pathname : "/", d = o.isConditional ?? (s == null ? void 0 : s.isConditional) ?? vt(e), c = {
      ...s,
      ...o,
      id: e,
      isConditional: d,
      pagePath: o.pagePath || (s == null ? void 0 : s.pagePath) || r,
      componentPath: o.componentPath || ((f = Q.value) == null ? void 0 : f.componentPath) || "",
      createdAt: (s == null ? void 0 : s.createdAt) || n,
      updatedAt: n
    };
    $.value = {
      ...$.value,
      [e]: c
    }, se(() => h());
  }
  function bt(e) {
    const { [e]: o, ...n } = $.value;
    $.value = n, se(() => h());
  }
  function Je(e) {
    var x;
    const o = ((x = e.textContent) == null ? void 0 : x.trim()) || "", n = e.tagName.toUpperCase();
    if (!o && n !== "INPUT" && n !== "SELECT" && n !== "TEXTAREA")
      return null;
    const s = e.__vueParentComponent;
    if (s) {
      const E = s.props || {}, D = s.attrs || {};
      if ("modelValue" in E || "model-value" in D)
        return {
          type: "v-model",
          source: "form binding detected",
          isStatic: !1
        };
    }
    if (n === "INPUT" || n === "SELECT" || n === "TEXTAREA") {
      const E = e.type || "text", D = e.placeholder || "";
      return {
        type: "v-model",
        source: `${n.toLowerCase()}[type=${E}]${D ? ` placeholder="${D}"` : ""}`,
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
    const d = e.closest('ul, ol, [role="list"]');
    if (d && d.children.length > 1)
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
    for (const E of c) {
      const D = e.closest(E);
      if (D) {
        const L = D.parentElement;
        if (L && Array.from(L.children).filter(
          (X) => X !== D && X.className === D.className
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
      const E = e.parentElement, L = Array.from(E.children).filter((C) => C.tagName === e.tagName);
      if (L.length >= 2 && L.filter(
        (X) => X.children.length === e.children.length
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
    for (const E of p)
      if (E.test(o))
        return {
          type: "api",
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
      if (E.test(o))
        return {
          type: "api",
          source: "name pattern",
          isStatic: !1
        };
    const a = ["LABEL", "TH", "LEGEND", "FIGCAPTION"].includes(n), g = [
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
    ].some((E) => E.test(o)), B = n === "BUTTON" || e.closest("button") !== null || e.getAttribute("role") === "button";
    return a || g || B && o.length < 20 ? {
      type: "static",
      source: o.substring(0, 50) + (o.length > 50 ? "..." : ""),
      isStatic: !0
    } : o.length <= 10 && /^[\u3040-\u30ff\u4e00-\u9faf]+$/.test(o) ? {
      type: "prop",
      source: "short text (verify manually)",
      isStatic: !1
    } : o.length > 0 && o.length < 200 ? {
      type: "api",
      source: "content (assumed dynamic)",
      isStatic: !1
    } : null;
  }
  function Ke(e, o) {
    var l, g, B, x, E;
    const n = {}, s = ((l = e.textContent) == null ? void 0 : l.trim()) || "", r = e.getAttribute("data-di-binding");
    e.getAttribute("data-di-db"), e.getAttribute("data-di-component"), e.getAttribute("data-di-db-comment");
    let d = e;
    if (!r) {
      const D = e.closest("[data-di-binding]");
      D && (d = D);
    }
    const c = d.getAttribute("data-di-binding"), f = d.getAttribute("data-di-db"), p = d.getAttribute("data-di-component"), w = d.getAttribute("data-di-db-type"), m = d.getAttribute("data-di-db-comment");
    if (c || f) {
      if (n.sourceBinding = {
        type: "api",
        source: c || void 0,
        isStatic: !1
      }, f) {
        const [D, L] = f.split(".");
        D && L && (n.fieldInfo = {
          table: D,
          column: L,
          type: w || void 0,
          description: m || void 0
        });
      }
      return p && (n.devMeta = {
        usedComponents: [p]
      }), n.note = {
        type: "info",
        text: `【データバインディング】${c}${f ? ` → ${f}` : ""}`
      }, n;
    }
    const a = Je(e);
    if (a)
      if (n.sourceBinding = a, a.isStatic)
        n.note = {
          type: "info",
          text: `【固定文言】${s}`
        };
      else if (a.type === "v-model") {
        const D = e.tagName.toUpperCase();
        if (D === "INPUT" || D === "SELECT" || D === "TEXTAREA") {
          const L = e.placeholder || "", C = ((B = (g = e.closest("label")) == null ? void 0 : g.textContent) == null ? void 0 : B.trim()) || e.getAttribute("aria-label") || ((E = (x = document.querySelector(`label[for="${e.id}"]`)) == null ? void 0 : x.textContent) == null ? void 0 : E.trim()) || "";
          n.note = {
            type: "todo",
            text: `【フォーム要素】${C || L || D.toLowerCase()}`
          };
        }
      } else a.type === "api" && (n.note = {
        type: "question",
        text: `【動的データ】${s.substring(0, 100)}${s.length > 100 ? "..." : ""}`
      });
    return n;
  }
  const De = O(!1), Oe = O(0), Ne = O([]);
  async function ze(e = {}) {
    De.value = !0, Oe.value = 0, Ne.value = [];
    const { rescan: o = !1 } = e;
    if (o) {
      const n = typeof window < "u" ? window.location.pathname : "/", s = Object.keys($.value).filter((r) => {
        const d = $.value[r];
        return !d.componentPath || d.componentPath.includes(n);
      });
      for (const r of s)
        delete $.value[r];
      se(() => h());
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
      ].join(","), s = document.querySelectorAll(n), r = [];
      s.forEach((w) => {
        var D;
        const m = w;
        if (m.closest("[data-dev-inspector]")) return;
        const a = window.getComputedStyle(m);
        if (a.display === "none" || a.visibility === "hidden" || a.opacity === "0") return;
        const l = ye(m);
        if ($.value[l]) return;
        const g = m.tagName.toUpperCase(), B = ((D = m.textContent) == null ? void 0 : D.trim()) || "";
        if (g === "INPUT" || g === "SELECT" || g === "TEXTAREA") {
          r.push(m);
          return;
        }
        if (B.length > 300 || B.length === 0 || g === "DIV" && (Array.from(m.childNodes).filter((C) => C.nodeType === Node.TEXT_NODE).map((C) => {
          var X;
          return ((X = C.textContent) == null ? void 0 : X.trim()) || "";
        }).join("").trim().length === 0 || m.children.length > 3))
          return;
        const x = Array.from(m.childNodes).some((L) => {
          var C;
          return L.nodeType === Node.TEXT_NODE && (((C = L.textContent) == null ? void 0 : C.trim()) || "").length > 0;
        }), E = !Array.from(m.children).some((L) => ["DIV", "P", "UL", "OL", "TABLE", "SECTION", "ARTICLE"].includes(L.tagName));
        (x || m.children.length === 0 && B.length > 0 || E) && r.push(m);
      });
      const d = r.length;
      let c = 0, f = 0;
      const p = 20;
      for (let w = 0; w < r.length; w += p) {
        const m = r.slice(w, w + p);
        for (const a of m) {
          const l = ye(a), g = Ke(a, l);
          g.sourceBinding && (Ne.value.push({ selector: l, element: a, detected: g }), qe(l, g), f++), c++, Oe.value = Math.round(c / d * 100);
        }
        await new Promise((a) => setTimeout(a, 10));
      }
      return f;
    } finally {
      De.value = !1, Oe.value = 100;
    }
  }
  const Ge = O([]), Ue = O("");
  async function $t(e) {
    var n;
    if (!e)
      return console.warn("[DevInspector] Router not provided for all pages scan"), [];
    De.value = !0;
    const o = [];
    try {
      const s = e.getRoutes(), r = [];
      for (const d of s)
        d.path.includes(":") && !d.path.includes("?") || d.redirect || d.path !== "/:pathMatch(.*)*" && ((n = d.meta) != null && n.devInspectorSkip || r.push(d.path));
      Ge.value = r;
      for (const d of r) {
        Ue.value = d;
        try {
          await e.push(d), await new Promise((f) => setTimeout(f, 500));
          const c = await ze();
          o.push({ page: d, count: c });
        } catch (c) {
          console.warn(`[DevInspector] Failed to scan page ${d}:`, c), o.push({ page: d, count: 0 });
        }
      }
      return o;
    } finally {
      De.value = !1, Ue.value = "";
    }
  }
  function St() {
    Ne.value = [], Oe.value = 0;
  }
  const pe = O([]);
  async function We() {
    var d;
    if (!N.value)
      return console.warn("[DevInspector] No analysis data loaded. Call loadAnalysisData first."), 0;
    pe.value = [];
    const e = typeof window < "u" ? window.location.pathname : "/", o = (c) => {
      if (!N.value) return null;
      for (const [f, p] of Object.entries(N.value.components))
        if (p.componentName === c || p.componentName.toLowerCase() === c.toLowerCase() || f.toLowerCase().includes(`/${c.toLowerCase()}.vue`))
          return p;
      return null;
    }, n = (c, f = /* @__PURE__ */ new Set()) => {
      const p = [];
      if (f.has(c.componentName)) return p;
      if (f.add(c.componentName), p.push(...c.elements), c.usedComponents)
        for (const w of c.usedComponents) {
          const m = o(w);
          m && p.push(...n(m, f));
        }
      return p;
    }, s = [], r = /* @__PURE__ */ new Set();
    for (const [c, f] of Object.entries(N.value.components)) {
      const p = c.replace(/^pages/, "").replace(/\.vue$/, "").replace(/\/index$/, "").replace(/\[.*?\]/g, "[^/]+");
      let w = !1;
      if ((e === "/" && c.includes("index") || c.includes("pages/") && e.match(new RegExp(`^${p}$`))) && (w = !0), w) {
        const m = n(f);
        s.push(...m), r.add(f.componentName), f.usedComponents && f.usedComponents.forEach((a) => r.add(a));
      }
    }
    for (const [c, f] of Object.entries(N.value.components))
      c.includes("components/") && !r.has(f.componentName) && s.push(...f.elements);
    for (const c of s) {
      if (I.value.has(c.selector))
        continue;
      let f = !1, p = c.selector;
      try {
        document.querySelector(c.selector) && (f = !0);
      } catch {
      }
      if (!f && c.text && !c.binding) {
        const w = c.text.replace(/\[コメント\]\s*/, ""), m = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT,
          null
        );
        for (; m.nextNode(); ) {
          const a = m.currentNode;
          if ((d = a.textContent) != null && d.includes(w)) {
            const l = a.parentElement;
            if (l) {
              f = !0, p = ye(l);
              break;
            }
          }
        }
      }
      if (!f && c.selector.includes(".")) {
        const w = c.selector.match(/^(\w+)\.(.+)$/);
        if (w) {
          const [, m, a] = w;
          try {
            const l = document.querySelector(c.selector);
            l && (f = !0, p = ye(l));
          } catch {
          }
        }
      }
      if (!f && c.binding) {
        const w = `[data-bind="${c.binding}"]`;
        try {
          const m = document.querySelector(w);
          m && (f = !0, p = ye(m));
        } catch {
        }
      }
      pe.value.push({
        selector: p,
        element: c,
        matched: f
      });
    }
    return console.log(`[DevInspector] Applied analysis: ${pe.value.filter((c) => c.matched).length}/${pe.value.length} elements matched`), pe.value.filter((c) => c.matched).length;
  }
  function wt() {
    pe.value = [];
  }
  function It(e) {
    pe.value = pe.value.filter((o) => o.selector !== e), I.value.add(e), At();
  }
  function Ct() {
    try {
      const e = localStorage.getItem(V);
      e && (I.value = new Set(JSON.parse(e)));
    } catch {
    }
  }
  function At() {
    try {
      localStorage.setItem(
        V,
        JSON.stringify([...I.value])
      );
    } catch {
    }
  }
  function Et() {
    I.value.clear(), localStorage.removeItem(V);
  }
  function Ye() {
    const e = {
      removed: [...I.value],
      exportedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    return JSON.stringify(e, null, 2);
  }
  function Tt(e = "dev-inspector-changes.json") {
    const o = Ye(), n = new Blob([o], { type: "application/json" }), s = URL.createObjectURL(n), r = document.createElement("a");
    r.href = s, r.download = e, document.body.appendChild(r), r.click(), document.body.removeChild(r), URL.revokeObjectURL(s);
  }
  function Xe() {
    if (!N.value) return [];
    const e = [], o = /* @__PURE__ */ new Set();
    for (const n of Object.values(N.value.components))
      for (const s of n.elements)
        s.binding && !o.has(s.binding) && (o.add(s.binding), e.push({
          binding: s.binding,
          db: s.db,
          api: s.api,
          component: n.componentName
        }));
    return e.sort((n, s) => n.db && !s.db ? -1 : !n.db && s.db ? 1 : n.binding.localeCompare(s.binding));
  }
  function Dt(e) {
    const o = Xe();
    if (!e) return o;
    const n = e.toLowerCase();
    return o.filter(
      (s) => {
        var r, d;
        return s.binding.toLowerCase().includes(n) || ((r = s.db) == null ? void 0 : r.table.toLowerCase().includes(n)) || ((d = s.db) == null ? void 0 : d.column.toLowerCase().includes(n)) || s.component.toLowerCase().includes(n);
      }
    );
  }
  function Ze() {
    var o, n;
    if (!((n = (o = N.value) == null ? void 0 : o.dbSchema) != null && n.tables)) return [];
    const e = [];
    for (const [s, r] of Object.entries(N.value.dbSchema.tables))
      for (const [d, c] of Object.entries(r.columns))
        e.push({
          table: s,
          column: d,
          type: c.type,
          comment: c.comment,
          fullName: `${s}.${d}`
        });
    return e.sort((s, r) => s.table !== r.table ? s.table.localeCompare(r.table) : s.column.localeCompare(r.column));
  }
  function Ot(e) {
    const o = Ze();
    if (!e) return o;
    const n = e.toLowerCase();
    return o.filter(
      (s) => {
        var r;
        return s.table.toLowerCase().includes(n) || s.column.toLowerCase().includes(n) || s.fullName.toLowerCase().includes(n) || ((r = s.comment) == null ? void 0 : r.toLowerCase().includes(n));
      }
    );
  }
  function Lt() {
    var n, s;
    const e = [], o = [];
    if (!((n = N.value) != null && n.components)) return { pageLoad: e, action: o };
    for (const r of pe.value) {
      if (!r.matched) continue;
      const d = r.element.component;
      if (d && ((s = N.value.components[d]) != null && s.apis))
        for (const c of N.value.components[d].apis)
          ["onMount", "useFetch", "useAsyncData"].includes(c.loadTrigger) ? e.some((f) => f.endpoint === c.endpoint && f.method === c.method) || e.push(c) : c.loadTrigger === "action" && (o.some((f) => f.endpoint === c.endpoint && f.method === c.method) || o.push(c));
    }
    return { pageLoad: e, action: o };
  }
  function Pt(e) {
    var o;
    if (!((o = N.value) != null && o.components)) return null;
    for (const n of Object.values(N.value.components))
      if (n.apis) {
        for (const s of n.apis)
          if (s.variable && e.startsWith(s.variable))
            return s;
      }
    return null;
  }
  function Nt(e) {
    const o = e.tagName.toUpperCase();
    return o === "INPUT" || o === "SELECT" || o === "TEXTAREA" ? "form" : o === "BUTTON" || o === "A" && e.hasAttribute("href") || e.getAttribute("role") === "button" || e.closest("button") || e.closest("a[href]") ? "action" : "datasource";
  }
  const Ee = O([]), Qe = O(null);
  function xt() {
    if (typeof document > "u") return [];
    const e = typeof window < "u" ? window.location.pathname : "/", o = [];
    for (const [n, s] of Object.entries($.value))
      if (!(s.componentPath && !s.componentPath.includes(e) && e !== "/") && !s.isConditional)
        try {
          document.querySelector(n) || o.push(n);
        } catch {
          o.push(n);
        }
    return Ee.value = o, o;
  }
  function jt(e, o) {
    const n = $.value[e];
    if (!n) return;
    const { [e]: s, ...r } = $.value;
    $.value = {
      ...r,
      [o]: { ...n, id: o, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }
    }, Ee.value = Ee.value.filter((d) => d !== e), se(() => h());
  }
  function Rt(e) {
    Qe.value = e, q.value = !0, F.value = !1, Be();
  }
  function _t() {
    const e = Ee.value;
    if (e.length === 0) return;
    const o = { ...$.value };
    for (const n of e)
      delete o[n];
    $.value = o, Ee.value = [], se(() => h());
  }
  function kt() {
    H.value = !H.value;
  }
  function Bt(e) {
    te.value = e;
  }
  function qt() {
    te.value = null;
  }
  function Ut() {
    return JSON.stringify({
      elementConfigs: $.value,
      screenConfigs: P.value
    }, null, 2);
  }
  function et() {
    const e = {
      _meta: {
        version: "1.0.0",
        description: "Dev Inspector annotations",
        lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
      },
      annotations: $.value,
      screenConfigs: P.value
    };
    return JSON.stringify(e, null, 2);
  }
  function Ft(e = "dev-annotations.json") {
    const o = et(), n = new Blob([o], { type: "application/json" }), s = URL.createObjectURL(n), r = document.createElement("a");
    r.href = s, r.download = e, document.body.appendChild(r), r.click(), document.body.removeChild(r), URL.revokeObjectURL(s);
  }
  function Mt(e) {
    try {
      const o = JSON.parse(e), n = o.annotations || o.elementConfigs || o;
      $.value = { ...$.value, ...n }, o.screenConfigs && (P.value = { ...P.value, ...o.screenConfigs });
    } catch (o) {
      throw console.error("[DevInspector] Failed to import configs:", o), new Error("Invalid JSON format");
    }
  }
  function Ht() {
    $.value = {};
  }
  function Vt(e = "screen-spec-sdd.md") {
    const o = Xt($.value, P.value, Y.value, G.value), n = new Blob([o], { type: "text/markdown;charset=utf-8" }), s = URL.createObjectURL(n), r = document.createElement("a");
    r.href = s, r.download = e, document.body.appendChild(r), r.click(), document.body.removeChild(r), URL.revokeObjectURL(s);
  }
  function Jt(e = "screen-spec-client.md") {
    const o = Zt($.value, P.value, Y.value, G.value), n = new Blob([o], { type: "text/markdown;charset=utf-8" }), s = URL.createObjectURL(n), r = document.createElement("a");
    r.href = s, r.download = e, document.body.appendChild(r), r.click(), document.body.removeChild(r), URL.revokeObjectURL(s);
  }
  return {
    // State
    isEnabled: A,
    isAvailable: J,
    isEditMode: F,
    isPickMode: q,
    isInitializing: t,
    hoveredSelector: Z,
    currentScreenSpec: Q,
    isPanelOpen: ie,
    elementConfigs: $,
    editingElementId: te,
    // Screen configs
    screenConfigs: P,
    editingScreen: fe,
    getScreenConfig: Se,
    setScreenConfig: we,
    deleteScreenConfig: Ie,
    suggestScreenApis: R,
    // Actions
    init: oe,
    toggle: ct,
    enable: Me,
    disable: lt,
    toggleEditMode: ut,
    togglePickMode: ft,
    setHoveredSelector: dt,
    generateSelector: ye,
    getConfiguredSelectors: pt,
    setScreenSpec: ht,
    clearScreenSpec: mt,
    togglePanel: gt,
    openPanel: Ve,
    closePanel: Be,
    getElementConfig: yt,
    setElementConfig: qe,
    deleteElementConfig: bt,
    startEditing: Bt,
    stopEditing: qt,
    exportConfigs: Ut,
    exportAsFile: et,
    downloadAnnotations: Ft,
    downloadSddSpec: Vt,
    downloadClientSpec: Jt,
    importConfigs: Mt,
    clearAllConfigs: Ht,
    detectSourceBinding: Je,
    autoDetectElementInfo: Ke,
    // Scan
    isScanning: De,
    scanProgress: Oe,
    scanResults: Ne,
    scanCurrentPage: ze,
    scanAllPages: $t,
    allPagesRoutes: Ge,
    currentScanPage: Ue,
    clearScanResults: St,
    // Analysis data
    analysisData: N,
    loadAnalysisData: W,
    getAnalyzedElement: le,
    getAnalyzedElementsForPage: be,
    analysisResults: pe,
    applyAnalysisToPage: We,
    clearAnalysisResults: wt,
    removeAnalysisResult: It,
    clearHiddenSelectors: Et,
    hiddenAnalysisSelectors: I,
    analysisFilter: ve,
    exportChangesForCli: Ye,
    downloadChanges: Tt,
    getAvailableBindings: Xe,
    searchBindings: Dt,
    getSchemaColumns: Ze,
    searchSchemaColumns: Ot,
    getCurrentPageApis: Lt,
    getApiSourceForBinding: Pt,
    // Note highlights
    showNoteHighlights: H,
    toggleNoteHighlights: kt,
    noteHighlightFilter: j,
    // Element type detection
    detectElementType: Nt,
    // Master definitions
    masterDefinitions: Y,
    getMasterDefinition: Le,
    setMasterDefinition: Pe,
    deleteMasterDefinition: Ae,
    getMastersForTable: b,
    getMasterEntries: S,
    // Batch definitions
    batchDefinitions: G,
    getBatchDefinition: _,
    setBatchDefinition: K,
    deleteBatchDefinition: M,
    // Broken annotation detection
    brokenAnnotations: Ee,
    remapTargetId: Qe,
    detectBrokenAnnotations: xt,
    remapAnnotation: jt,
    startRemap: Rt,
    deleteBrokenAnnotations: _t,
    // Cross Search
    showCrossSearch: ae,
    crossSearchQuery: ce,
    crossSearchMode: de,
    crossSearchResults: ge,
    // Unannotated Detection
    showUnannotatedDetection: he,
    unannotatedElements: ne,
    hoveredUnannotatedSelector: T,
    detectUnannotatedElements: ke,
    quickAnnotate: at,
    // Screen Flow
    showScreenFlow: U,
    screenFlowData: rt
  };
});
function an() {
  return tn();
}
export {
  an as a,
  tn as u
};
