import { h as de, defineComponent as te, ref as h, computed as Q, openBlock as u, createElementBlock as p, Fragment as j, createBlock as F, Teleport as B, unref as d, createVNode as f, createCommentVNode as M, createElementVNode as e, normalizeClass as S, toDisplayString as _, renderList as G, normalizeStyle as z, createTextVNode as D, withModifiers as se, withDirectives as C, vModelText as U, watch as ce, resolveDynamicComponent as me, vModelSelect as oe, onMounted as ye, onUnmounted as Te } from "vue";
import { u as le } from "./useDevInspector-BwEXh74O.js";
import { a as jl } from "./useDevInspector-BwEXh74O.js";
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ee = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ue = (v) => v.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), P = (v, s) => ({ size: n, strokeWidth: y = 2, absoluteStrokeWidth: $, color: V, class: L, ...w }, { attrs: b, slots: m }) => de(
  "svg",
  {
    ...ee,
    width: n || ee.width,
    height: n || ee.height,
    stroke: V || ee.stroke,
    "stroke-width": $ ? Number(y) * 24 / Number(n) : y,
    ...b,
    class: ["lucide", `lucide-${Ue(v)}`],
    ...w
  },
  [
    ...s.map((O) => de(...O)),
    ...m.default ? [m.default()] : []
  ]
);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ve = P("AlertCircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const he = P("AlertTriangleIcon", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fe = P("CheckSquareIcon", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ue = P("CodeIcon", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const De = P("DatabaseIcon", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const re = P("DownloadIcon", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Le = P("ExternalLinkIcon", [
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }],
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["line", { x1: "10", x2: "21", y1: "14", y2: "3", key: "18c3s4" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _e = P("FileSpreadsheetIcon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M8 13h2", key: "yr2amv" }],
  ["path", { d: "M8 17h2", key: "2yhykz" }],
  ["path", { d: "M14 13h2", key: "un5t4a" }],
  ["path", { d: "M14 17h2", key: "10kma7" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ve = P("FileTextIcon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["line", { x1: "16", x2: "8", y1: "13", y2: "13", key: "14keom" }],
  ["line", { x1: "16", x2: "8", y1: "17", y2: "17", key: "17nazh" }],
  ["line", { x1: "10", x2: "8", y1: "9", y2: "9", key: "1a5vjj" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ae = P("GitBranchIcon", [
  ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const be = P("HelpCircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ke = P("InfoIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const je = P("LinkIcon", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oe = P("MessageSquareIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qe = P("MousePointer2Icon", [
  ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pe = P("PenLineIcon", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ne = P("SaveIcon", [
  ["path", { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z", key: "1owoqh" }],
  ["polyline", { points: "17 21 17 13 7 13 7 21", key: "1md35c" }],
  ["polyline", { points: "7 3 7 8 15 8", key: "8nz8an" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const He = P("ServerIcon", [
  ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }],
  ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
  ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ze = P("Settings2Icon", [
  ["path", { d: "M20 7h-9", key: "3s1dr2" }],
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xe = P("Trash2Icon", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Re = P("UploadIcon", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ge = P("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fe = P("ZapIcon", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
]);
async function Se(v, s, n = {}) {
  var c;
  const y = await import("./xlsx-BopDBbWb.js"), { systemName: $ = "System", author: V = "" } = n, L = /* @__PURE__ */ new Date(), w = `${L.getFullYear()}/${L.getMonth() + 1}/${L.getDate()}`, b = y.utils.book_new(), m = [];
  m.push([
    "画面機能仕様書",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "システム名",
    "",
    "",
    "",
    "",
    $,
    "",
    "",
    "",
    "",
    "",
    "画面ID/画面名",
    "",
    "",
    "",
    "",
    (v == null ? void 0 : v.name) || "",
    "",
    "",
    "",
    "",
    "",
    "作成者",
    "",
    "",
    "",
    "",
    V,
    "",
    "作成日",
    "",
    "",
    "",
    "",
    w
  ]), m.push([]), m.push([
    "URL",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "画面英語名",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "View Component",
    "",
    "",
    "",
    "",
    (v == null ? void 0 : v.componentPath) || "",
    "",
    "",
    "",
    "",
    "",
    "Figma URL",
    "",
    "",
    "",
    "",
    (v == null ? void 0 : v.figmaUrl) || ""
  ]), m.push([]), m.push(["機能概要"]), m.push([(v == null ? void 0 : v.description) || ""]), m.push([]), m.push(["画面レイアウト　figmaURL"]), m.push([(v == null ? void 0 : v.figmaUrl) || ""]), m.push([]), v != null && v.apis && v.apis.length > 0 && (m.push(["API一覧"]), m.push(["", "メソッド", "", "エンドポイント", "", "", "", "", "", "", "", "説明"]), v.apis.forEach((i) => {
    m.push(["", i.method, "", i.endpoint, "", "", "", "", "", "", "", i.description]);
  }), m.push([])), m.push(["画面項目　ヘッダーフッターは省く"]), m.push([
    "",
    "No.",
    "",
    "項目名",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "説明",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "表示条件",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "備考"
  ]), Object.values(s).forEach((i, E) => {
    var N, q, R;
    const l = i.id;
    let x = "", r = "", g = "";
    if ((N = i.note) != null && N.text && (x = i.note.text), i.fieldInfo && (x += x ? `
` : "", x += `DB: ${i.fieldInfo.table}.${i.fieldInfo.column}`, i.fieldInfo.type && (x += ` (${i.fieldInfo.type})`), i.fieldInfo.description && (x += `
${i.fieldInfo.description}`)), i.actionInfo && (g = `[${{
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行"
    }[i.actionInfo.type] || i.actionInfo.type}]`, i.actionInfo.target && (g += ` ${i.actionInfo.method || ""} ${i.actionInfo.target}`), i.actionInfo.description && (g += `
${i.actionInfo.description}`)), i.links) {
      const T = [];
      i.links.testPath && T.push(`テスト: ${i.links.testPath}`), i.links.figmaUrl && T.push(`Figma: ${i.links.figmaUrl}`), i.links.githubIssue && T.push(`Issue: ${i.links.githubIssue}`), i.links.githubPr && T.push(`PR: ${i.links.githubPr}`), T.length > 0 && (g += g ? `

` : "", g += T.join(`
`));
    }
    if (i.devMeta) {
      const T = [];
      (q = i.devMeta.usedStores) != null && q.length && T.push(`Store: ${i.devMeta.usedStores.join(", ")}`), (R = i.devMeta.usedComponents) != null && R.length && T.push(`Components: ${i.devMeta.usedComponents.join(", ")}`), i.devMeta.accessibility && T.push(`A11y: ${i.devMeta.accessibility}`), i.devMeta.responsive && T.push(`Responsive: ${i.devMeta.responsive}`), T.length > 0 && (g += g ? `

` : "", g += `[開発情報]
` + T.join(`
`));
    }
    m.push([
      "",
      E + 1,
      "",
      l,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      x,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      r,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      g
    ]);
  });
  const A = y.utils.aoa_to_sheet(m);
  A["!cols"] = [
    { wch: 3 },
    // A
    { wch: 5 },
    // B - No
    { wch: 3 },
    // C
    { wch: 20 },
    // D - 項目名
    { wch: 5 },
    // E
    { wch: 5 },
    // F
    { wch: 5 },
    // G
    { wch: 5 },
    // H
    { wch: 5 },
    // I
    { wch: 5 },
    // J
    { wch: 5 },
    // K
    { wch: 5 },
    // L
    { wch: 5 },
    // M
    { wch: 5 },
    // N
    { wch: 5 },
    // O
    { wch: 30 },
    // P - 説明
    { wch: 5 },
    // Q
    { wch: 5 },
    // R
    { wch: 5 },
    // S
    { wch: 5 },
    // T
    { wch: 5 },
    // U
    { wch: 5 },
    // V
    { wch: 5 },
    // W
    { wch: 5 },
    // X
    { wch: 5 },
    // Y
    { wch: 5 },
    // Z
    { wch: 5 },
    // AA
    { wch: 5 },
    // AB
    { wch: 5 },
    // AC
    { wch: 5 },
    // AD
    { wch: 5 },
    // AE
    { wch: 20 },
    // AF - 表示条件
    { wch: 5 },
    // AG
    { wch: 5 },
    // AH
    { wch: 5 },
    // AI
    { wch: 5 },
    // AJ
    { wch: 5 },
    // AK
    { wch: 5 },
    // AL
    { wch: 5 },
    // AM
    { wch: 5 },
    // AN
    { wch: 5 },
    // AO
    { wch: 5 },
    // AP
    { wch: 5 },
    // AQ
    { wch: 5 },
    // AR
    { wch: 5 },
    // AS
    { wch: 5 },
    // AT
    { wch: 30 }
    // AU - 備考
  ], y.utils.book_append_sheet(b, A, "画面設計書");
  const I = `画面仕様書_${((c = v == null ? void 0 : v.name) == null ? void 0 : c.replace(/[/\\?%*:|"<>]/g, "-")) || "screen"}_${w.replace(/\//g, "")}.xlsx`;
  return y.writeFile(b, I), I;
}
const Be = {
  key: 0,
  class: "di-panel",
  "data-dev-inspector": ""
}, Ge = { class: "di-header" }, Xe = { class: "di-header-title" }, Ke = { class: "di-edit-section" }, Ye = { class: "di-edit-row" }, Je = { class: "di-edit-label" }, Ze = { class: "di-content" }, Qe = { class: "di-section" }, We = { class: "di-screen-name" }, et = { class: "di-screen-desc" }, tt = { class: "di-card" }, lt = { class: "di-card-label" }, ot = { class: "di-code-blue" }, st = {
  key: 0,
  class: "di-card"
}, it = { class: "di-card-label" }, nt = ["href"], at = {
  key: 1,
  class: "di-card"
}, dt = { class: "di-card-label" }, ut = { class: "di-api-list" }, rt = { class: "di-api-info" }, vt = { class: "di-api-endpoint" }, pt = { class: "di-api-desc" }, ct = {
  key: 2,
  class: "di-card"
}, mt = { class: "di-card-label" }, yt = { class: "di-notes-list" }, ht = {
  key: 1,
  class: "di-no-spec"
}, ft = { class: "di-card" }, bt = { class: "di-card-header" }, kt = { class: "di-card-label" }, xt = { class: "di-count-badge" }, gt = {
  key: 0,
  class: "di-export-buttons"
}, wt = {
  key: 1,
  class: "di-export-hint"
}, It = { class: "di-action-buttons" }, Ct = {
  key: 0,
  class: "di-indicator",
  "data-dev-inspector": ""
}, Mt = {
  key: 0,
  class: "di-indicator-edit"
}, $t = { class: "di-modal" }, Et = ["value"], Pt = { class: "di-modal-actions" }, Tt = { class: "di-modal" }, Ut = { class: "di-file-drop" }, Vt = {
  key: 0,
  class: "di-error"
}, Dt = { class: "di-modal-actions" }, Lt = ["disabled"], _t = /* @__PURE__ */ te({
  __name: "DevPanel",
  setup(v) {
    const s = le(), n = h(!1), y = h(!1), $ = h(""), V = h(""), L = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, w = Q(() => s.currentScreenSpec), b = Q(() => Object.keys(s.elementConfigs).length);
    function m() {
      const E = s.exportConfigs();
      navigator.clipboard.writeText(E), n.value = !1;
    }
    function O() {
      const E = s.exportConfigs(), l = new Blob([E], { type: "application/json" }), x = URL.createObjectURL(l), r = document.createElement("a");
      r.href = x, r.download = "dev-mode-configs.json", r.click(), URL.revokeObjectURL(x), n.value = !1;
    }
    function A() {
      s.downloadAnnotations();
    }
    async function k() {
      try {
        await Se(
          s.currentScreenSpec,
          s.elementConfigs,
          { systemName: "System" }
        );
      } catch (E) {
        console.error("Failed to export xlsx:", E), alert("xlsx export failed. Make sure xlsx package is installed.");
      }
    }
    function I() {
      try {
        s.importConfigs($.value), $.value = "", V.value = "", y.value = !1;
      } catch {
        V.value = "JSONの形式が正しくありません";
      }
    }
    function c(E) {
      var g;
      const x = (g = E.target.files) == null ? void 0 : g[0];
      if (!x) return;
      const r = new FileReader();
      r.onload = (N) => {
        var q;
        $.value = (q = N.target) == null ? void 0 : q.result;
      }, r.readAsText(x);
    }
    function i() {
      confirm("すべての要素設定を削除しますか？") && s.clearAllConfigs();
    }
    return (E, l) => {
      var x;
      return u(), p(j, null, [
        (u(), F(B, { to: "body" }, [
          d(s).isEnabled && !d(s).isPanelOpen ? (u(), p("button", {
            key: 0,
            onClick: l[0] || (l[0] = //@ts-ignore
            (...r) => d(s).openPanel && d(s).openPanel(...r)),
            class: "di-fab",
            title: "画面仕様を表示",
            "data-dev-inspector": ""
          }, [
            f(d(ve), { style: { width: "20px", height: "20px" } })
          ])) : M("", !0)
        ])),
        (u(), F(B, { to: "body" }, [
          d(s).isEnabled && d(s).isPanelOpen ? (u(), p("div", Be, [
            e("div", Ge, [
              e("div", Xe, [
                f(d(ue), { style: { width: "20px", height: "20px", color: "#60a5fa" } }),
                l[11] || (l[11] = e("span", null, "Developer Mode", -1))
              ]),
              e("button", {
                onClick: l[1] || (l[1] = //@ts-ignore
                (...r) => d(s).closePanel && d(s).closePanel(...r)),
                class: "di-close-btn"
              }, [
                f(d(ge), { style: { width: "20px", height: "20px" } })
              ])
            ]),
            e("div", Ke, [
              e("div", Ye, [
                e("div", Je, [
                  f(d(pe), { style: { width: "16px", height: "16px", color: "#fbbf24" } }),
                  l[12] || (l[12] = e("span", null, "編集モード", -1))
                ]),
                e("button", {
                  onClick: l[2] || (l[2] = //@ts-ignore
                  (...r) => d(s).toggleEditMode && d(s).toggleEditMode(...r)),
                  class: S(["di-toggle", { active: d(s).isEditMode }])
                }, [
                  e("span", {
                    class: S(["di-toggle-knob", { active: d(s).isEditMode }])
                  }, null, 2)
                ], 2)
              ]),
              l[13] || (l[13] = e("p", { class: "di-edit-hint" }, "ONにすると、要素をクリックして情報を編集できます", -1)),
              e("button", {
                onClick: l[3] || (l[3] = //@ts-ignore
                (...r) => d(s).togglePickMode && d(s).togglePickMode(...r)),
                class: S(["di-pick-btn", { active: d(s).isPickMode }])
              }, [
                f(d(qe), { style: { width: "16px", height: "16px" } }),
                e("span", null, _(d(s).isPickMode ? "要素選択中..." : "任意の要素にメモを追加"), 1)
              ], 2)
            ]),
            e("div", Ze, [
              w.value ? (u(), p(j, { key: 0 }, [
                e("div", Qe, [
                  e("h2", We, _(w.value.name), 1),
                  e("p", et, _(w.value.description), 1)
                ]),
                e("div", tt, [
                  e("div", lt, [
                    f(d(ue), { style: { width: "16px", height: "16px" } }),
                    l[14] || (l[14] = e("span", null, "Component Path", -1))
                  ]),
                  e("code", ot, _(w.value.componentPath), 1)
                ]),
                w.value.figmaUrl ? (u(), p("div", st, [
                  e("div", it, [
                    f(d(Le), { style: { width: "16px", height: "16px" } }),
                    l[15] || (l[15] = e("span", null, "Figma Design", -1))
                  ]),
                  e("a", {
                    href: w.value.figmaUrl,
                    target: "_blank",
                    class: "di-link-purple"
                  }, _(w.value.figmaUrl), 9, nt)
                ])) : M("", !0),
                w.value.apis.length ? (u(), p("div", at, [
                  e("div", dt, [
                    f(d(He), { style: { width: "16px", height: "16px" } }),
                    l[16] || (l[16] = e("span", null, "API Endpoints", -1))
                  ]),
                  e("div", ut, [
                    (u(!0), p(j, null, G(w.value.apis, (r, g) => (u(), p("div", {
                      key: g,
                      class: "di-api-item"
                    }, [
                      e("span", {
                        class: "di-method-badge",
                        style: z({ backgroundColor: L[r.method] + "20", color: L[r.method] })
                      }, _(r.method), 5),
                      e("div", rt, [
                        e("code", vt, _(r.endpoint), 1),
                        e("p", pt, _(r.description), 1)
                      ])
                    ]))), 128))
                  ])
                ])) : M("", !0),
                (x = w.value.notes) != null && x.length ? (u(), p("div", ct, [
                  e("div", mt, [
                    f(d(Ve), { style: { width: "16px", height: "16px" } }),
                    l[17] || (l[17] = e("span", null, "Notes", -1))
                  ]),
                  e("ul", yt, [
                    (u(!0), p(j, null, G(w.value.notes, (r, g) => (u(), p("li", {
                      key: g,
                      class: "di-note-item"
                    }, [
                      l[18] || (l[18] = e("span", { class: "di-bullet" }, "•", -1)),
                      e("span", null, _(r), 1)
                    ]))), 128))
                  ])
                ])) : M("", !0)
              ], 64)) : (u(), p("div", ht, [
                f(d(ve), { style: { width: "48px", height: "48px", color: "#334155" } }),
                l[19] || (l[19] = e("p", null, [
                  D("この画面の仕様情報は"),
                  e("br"),
                  D("まだ登録されていません")
                ], -1))
              ])),
              e("div", ft, [
                e("div", bt, [
                  e("div", kt, [
                    f(d(pe), { style: { width: "16px", height: "16px" } }),
                    l[20] || (l[20] = e("span", null, "登録済み要素", -1)),
                    e("span", xt, _(b.value), 1)
                  ])
                ]),
                b.value > 0 ? (u(), p("div", gt, [
                  e("button", {
                    onClick: A,
                    class: "di-btn-green"
                  }, [
                    f(d(Ae), { style: { width: "16px", height: "16px" } }),
                    l[21] || (l[21] = D(" Git管理用に保存 ", -1))
                  ]),
                  e("button", {
                    onClick: k,
                    class: "di-btn-blue"
                  }, [
                    f(d(_e), { style: { width: "16px", height: "16px" } }),
                    l[22] || (l[22] = D(" 画面仕様書 (xlsx) 出力 ", -1))
                  ])
                ])) : M("", !0),
                b.value > 0 ? (u(), p("p", wt, [...l[23] || (l[23] = [
                  D(" JSON: ", -1),
                  e("code", null, "dev-annotations.json", -1),
                  D(" に配置してcommit ", -1)
                ])])) : M("", !0),
                e("div", It, [
                  e("button", {
                    onClick: l[4] || (l[4] = (r) => n.value = !0),
                    class: "di-btn-small"
                  }, [
                    f(d(re), { style: { width: "14px", height: "14px" } }),
                    l[24] || (l[24] = D(" エクスポート ", -1))
                  ]),
                  e("button", {
                    onClick: l[5] || (l[5] = (r) => y.value = !0),
                    class: "di-btn-small"
                  }, [
                    f(d(Re), { style: { width: "14px", height: "14px" } }),
                    l[25] || (l[25] = D(" インポート ", -1))
                  ]),
                  b.value > 0 ? (u(), p("button", {
                    key: 0,
                    onClick: i,
                    class: "di-btn-small di-btn-danger"
                  }, [
                    f(d(xe), { style: { width: "14px", height: "14px" } }),
                    l[26] || (l[26] = D(" 全削除 ", -1))
                  ])) : M("", !0)
                ])
              ])
            ]),
            l[27] || (l[27] = e("div", { class: "di-footer" }, [
              e("kbd", null, "Ctrl"),
              e("span", null, "+"),
              e("kbd", null, "Shift"),
              e("span", null, "+"),
              e("kbd", null, "D"),
              e("span", { class: "di-footer-text" }, "で開発者モード切替")
            ], -1))
          ])) : M("", !0)
        ])),
        (u(), F(B, { to: "body" }, [
          d(s).isEnabled ? (u(), p("div", Ct, [
            l[28] || (l[28] = e("span", { class: "di-indicator-dot" }, null, -1)),
            l[29] || (l[29] = D(" Developer Mode ", -1)),
            d(s).isEditMode ? (u(), p("span", Mt, "• 編集中")) : M("", !0)
          ])) : M("", !0)
        ])),
        (u(), F(B, { to: "body" }, [
          n.value ? (u(), p("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: l[7] || (l[7] = se((r) => n.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", $t, [
              l[31] || (l[31] = e("h3", { class: "di-modal-title" }, "設定をエクスポート", -1)),
              e("textarea", {
                readonly: "",
                value: d(s).exportConfigs(),
                class: "di-modal-textarea"
              }, null, 8, Et),
              e("div", Pt, [
                e("button", {
                  onClick: l[6] || (l[6] = (r) => n.value = !1),
                  class: "di-btn-small"
                }, "閉じる"),
                e("button", {
                  onClick: O,
                  class: "di-btn-small di-btn-gray"
                }, [
                  f(d(re), { style: { width: "14px", height: "14px" } }),
                  l[30] || (l[30] = D(" ファイル保存 ", -1))
                ]),
                e("button", {
                  onClick: m,
                  class: "di-btn-small di-btn-primary"
                }, "コピー")
              ])
            ])
          ])) : M("", !0)
        ])),
        (u(), F(B, { to: "body" }, [
          y.value ? (u(), p("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: l[10] || (l[10] = se((r) => y.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", Tt, [
              l[33] || (l[33] = e("h3", { class: "di-modal-title" }, "設定をインポート", -1)),
              e("label", Ut, [
                e("input", {
                  type: "file",
                  accept: ".json",
                  onChange: c
                }, null, 32),
                l[32] || (l[32] = e("span", null, "JSONファイルをドラッグまたはクリック", -1))
              ]),
              C(e("textarea", {
                "onUpdate:modelValue": l[8] || (l[8] = (r) => $.value = r),
                placeholder: "またはJSONを直接貼り付け...",
                class: "di-modal-textarea di-modal-textarea-input"
              }, null, 512), [
                [U, $.value]
              ]),
              V.value ? (u(), p("p", Vt, _(V.value), 1)) : M("", !0),
              e("div", Dt, [
                e("button", {
                  onClick: l[9] || (l[9] = (r) => {
                    y.value = !1, $.value = "", V.value = "";
                  }),
                  class: "di-btn-small"
                }, " キャンセル "),
                e("button", {
                  onClick: I,
                  disabled: !$.value,
                  class: "di-btn-small di-btn-primary"
                }, " インポート ", 8, Lt)
              ])
            ])
          ])) : M("", !0)
        ]))
      ], 64);
    };
  }
}), ie = (v, s) => {
  const n = v.__vccOpts || v;
  for (const [y, $] of s)
    n[y] = $;
  return n;
}, At = /* @__PURE__ */ ie(_t, [["__scopeId", "data-v-8d5b1f8b"]]), jt = { class: "di-editor-modal" }, Ot = { class: "di-editor-header" }, qt = { class: "di-editor-tabs" }, Nt = { class: "di-editor-content" }, Ht = { class: "di-form-group" }, zt = { class: "di-note-types" }, Rt = ["onClick"], Ft = { class: "di-form-group" }, St = { class: "di-form-group" }, Bt = { class: "di-form-row" }, Gt = { class: "di-form-group" }, Xt = { class: "di-form-group" }, Kt = { class: "di-form-group" }, Yt = ["value"], Jt = { class: "di-form-group" }, Zt = { class: "di-form-group" }, Qt = { class: "di-form-group" }, Wt = ["value"], el = {
  key: 0,
  class: "di-form-row"
}, tl = {
  class: "di-form-group",
  style: { flex: "0 0 100px" }
}, ll = ["value"], ol = {
  class: "di-form-group",
  style: { flex: "1" }
}, sl = {
  key: 1,
  class: "di-form-group"
}, il = { class: "di-form-label" }, nl = ["placeholder"], al = { class: "di-form-group" }, dl = { class: "di-form-group" }, ul = { class: "di-form-group" }, rl = { class: "di-form-row" }, vl = { class: "di-form-group" }, pl = { class: "di-form-group" }, cl = { class: "di-form-group" }, ml = { class: "di-form-group" }, yl = { class: "di-form-group" }, hl = { class: "di-form-group" }, fl = { class: "di-form-group" }, bl = { class: "di-form-group" }, kl = { class: "di-form-group" }, xl = { class: "di-editor-footer" }, gl = { class: "di-editor-actions" }, wl = /* @__PURE__ */ te({
  __name: "DevElementEditor",
  setup(v) {
    const s = le(), n = h("note"), y = h(""), $ = h(""), V = h(""), L = h(""), w = h(""), b = h("navigate"), m = h(""), O = h("GET"), A = h(""), k = h(""), I = h(""), c = h("info"), i = h(""), E = h(""), l = h(""), x = h(""), r = h(""), g = h(""), N = h(""), q = h(""), R = h(""), T = h(""), X = h(""), we = Q(() => s.editingElementId !== null), K = Q(() => s.editingElementId);
    ce(K, (J) => {
      var t, o, Z, W, H, ae;
      if (J) {
        const a = s.getElementConfig(J);
        a != null && a.fieldInfo && (y.value = a.fieldInfo.table || "", $.value = a.fieldInfo.column || "", V.value = a.fieldInfo.type || "", L.value = ((t = a.fieldInfo.validation) == null ? void 0 : t.join(", ")) || "", w.value = a.fieldInfo.description || ""), a != null && a.actionInfo && (b.value = a.actionInfo.type || "navigate", m.value = a.actionInfo.target || "", O.value = a.actionInfo.method || "GET", A.value = a.actionInfo.description || ""), a != null && a.note && (k.value = a.note.text || "", I.value = a.note.author || "", c.value = a.note.type || "info"), a != null && a.links && (i.value = a.links.testPath || "", E.value = a.links.figmaUrl || "", l.value = a.links.githubIssue || "", x.value = a.links.githubPr || "", r.value = a.links.relatedDocs || ""), a != null && a.devMeta && (g.value = ((o = a.devMeta.usedStores) == null ? void 0 : o.join(", ")) || "", N.value = ((Z = a.devMeta.usedComponents) == null ? void 0 : Z.join(", ")) || "", q.value = ((W = a.devMeta.i18nKeys) == null ? void 0 : W.join(", ")) || "", R.value = ((H = a.devMeta.designTokens) == null ? void 0 : H.join(", ")) || "", T.value = a.devMeta.accessibility || "", X.value = a.devMeta.responsive || ""), (ae = a == null ? void 0 : a.note) != null && ae.text ? n.value = "note" : a != null && a.fieldInfo ? n.value = "field" : a != null && a.actionInfo ? n.value = "action" : a != null && a.links ? n.value = "links" : a != null && a.devMeta ? n.value = "meta" : n.value = "note";
      } else
        ne();
    });
    function ne() {
      y.value = "", $.value = "", V.value = "", L.value = "", w.value = "", b.value = "navigate", m.value = "", O.value = "GET", A.value = "", k.value = "", I.value = "", c.value = "info", i.value = "", E.value = "", l.value = "", x.value = "", r.value = "", g.value = "", N.value = "", q.value = "", R.value = "", T.value = "", X.value = "", n.value = "note";
    }
    function Y() {
      s.stopEditing(), ne();
    }
    function Ie() {
      if (!K.value) return;
      const J = y.value && $.value ? {
        table: y.value,
        column: $.value,
        type: V.value || void 0,
        validation: L.value ? L.value.split(",").map((H) => H.trim()) : void 0,
        description: w.value || void 0
      } : void 0, t = m.value ? {
        type: b.value,
        target: m.value,
        method: b.value === "api" ? O.value : void 0,
        description: A.value || void 0
      } : void 0, o = k.value ? {
        text: k.value,
        author: I.value || void 0,
        type: c.value
      } : void 0, Z = i.value || E.value || l.value || x.value || r.value ? {
        testPath: i.value || void 0,
        figmaUrl: E.value || void 0,
        githubIssue: l.value || void 0,
        githubPr: x.value || void 0,
        relatedDocs: r.value || void 0
      } : void 0, W = g.value || N.value || q.value || R.value || T.value || X.value ? {
        usedStores: g.value ? g.value.split(",").map((H) => H.trim()) : void 0,
        usedComponents: N.value ? N.value.split(",").map((H) => H.trim()) : void 0,
        i18nKeys: q.value ? q.value.split(",").map((H) => H.trim()) : void 0,
        designTokens: R.value ? R.value.split(",").map((H) => H.trim()) : void 0,
        accessibility: T.value || void 0,
        responsive: X.value || void 0
      } : void 0;
      s.setElementConfig(K.value, {
        fieldInfo: J,
        actionInfo: t,
        note: o,
        links: Z,
        devMeta: W
      }), Y();
    }
    function Ce() {
      K.value && (s.deleteElementConfig(K.value), Y());
    }
    const Me = ["VARCHAR", "TEXT", "INT", "BIGINT", "BOOLEAN", "DATE", "DATETIME", "TIMESTAMP", "JSON"], $e = [
      { value: "navigate", label: "画面遷移" },
      { value: "api", label: "API呼び出し" },
      { value: "modal", label: "モーダル表示" },
      { value: "emit", label: "イベント発火" },
      { value: "function", label: "関数実行" }
    ], Ee = ["GET", "POST", "PUT", "DELETE", "PATCH"], Pe = [
      { value: "info", label: "情報", icon: ke, color: "#60a5fa" },
      { value: "warning", label: "注意", icon: he, color: "#fbbf24" },
      { value: "todo", label: "TODO", icon: fe, color: "#10b981" },
      { value: "question", label: "質問", icon: be, color: "#a78bfa" }
    ];
    return (J, t) => (u(), F(B, { to: "body" }, [
      we.value ? (u(), p("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: se(Y, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", jt, [
          e("div", Ot, [
            t[28] || (t[28] = e("h3", null, "要素情報を編集", -1)),
            e("button", {
              onClick: Y,
              class: "di-editor-close"
            }, [
              f(d(ge), { style: { width: "20px", height: "20px" } })
            ])
          ]),
          e("div", qt, [
            e("button", {
              onClick: t[0] || (t[0] = (o) => n.value = "note"),
              class: S(["di-editor-tab", { active: n.value === "note" }]),
              style: z(n.value === "note" ? { color: "#10b981", borderColor: "#10b981", background: "rgba(16, 185, 129, 0.1)" } : {})
            }, [
              f(d(Oe), { style: { width: "12px", height: "12px" } }),
              t[29] || (t[29] = D(" メモ ", -1))
            ], 6),
            e("button", {
              onClick: t[1] || (t[1] = (o) => n.value = "field"),
              class: S(["di-editor-tab", { active: n.value === "field" }]),
              style: z(n.value === "field" ? { color: "#60a5fa", borderColor: "#60a5fa", background: "rgba(96, 165, 250, 0.1)" } : {})
            }, [
              f(d(De), { style: { width: "12px", height: "12px" } }),
              t[30] || (t[30] = D(" データ ", -1))
            ], 6),
            e("button", {
              onClick: t[2] || (t[2] = (o) => n.value = "action"),
              class: S(["di-editor-tab", { active: n.value === "action" }]),
              style: z(n.value === "action" ? { color: "#a78bfa", borderColor: "#a78bfa", background: "rgba(167, 139, 250, 0.1)" } : {})
            }, [
              f(d(Fe), { style: { width: "12px", height: "12px" } }),
              t[31] || (t[31] = D(" アクション ", -1))
            ], 6),
            e("button", {
              onClick: t[3] || (t[3] = (o) => n.value = "links"),
              class: S(["di-editor-tab", { active: n.value === "links" }]),
              style: z(n.value === "links" ? { color: "#f59e0b", borderColor: "#f59e0b", background: "rgba(245, 158, 11, 0.1)" } : {})
            }, [
              f(d(je), { style: { width: "12px", height: "12px" } }),
              t[32] || (t[32] = D(" リンク ", -1))
            ], 6),
            e("button", {
              onClick: t[4] || (t[4] = (o) => n.value = "meta"),
              class: S(["di-editor-tab", { active: n.value === "meta" }]),
              style: z(n.value === "meta" ? { color: "#ec4899", borderColor: "#ec4899", background: "rgba(236, 72, 153, 0.1)" } : {})
            }, [
              f(d(ze), { style: { width: "12px", height: "12px" } }),
              t[33] || (t[33] = D(" 開発情報 ", -1))
            ], 6)
          ]),
          e("div", Nt, [
            n.value === "note" ? (u(), p(j, { key: 0 }, [
              e("div", Ht, [
                t[34] || (t[34] = e("label", { class: "di-form-label" }, "タイプ", -1)),
                e("div", zt, [
                  (u(), p(j, null, G(Pe, (o) => e("button", {
                    key: o.value,
                    onClick: (Z) => c.value = o.value,
                    class: "di-note-type-btn",
                    style: z(c.value === o.value ? { color: o.color, borderColor: o.color, background: o.color + "15" } : {})
                  }, [
                    (u(), F(me(o.icon), {
                      style: z([{ width: "16px", height: "16px" }, { color: c.value === o.value ? o.color : "#64748b" }])
                    }, null, 8, ["style"])),
                    e("span", {
                      style: z({ color: c.value === o.value ? o.color : "#94a3b8" })
                    }, _(o.label), 5)
                  ], 12, Rt)), 64))
                ])
              ]),
              e("div", Ft, [
                t[35] || (t[35] = e("label", { class: "di-form-label" }, "メモ内容 *", -1)),
                C(e("textarea", {
                  "onUpdate:modelValue": t[5] || (t[5] = (o) => k.value = o),
                  rows: "4",
                  placeholder: "この要素についてのメモ、説明、注意事項など...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, k.value]
                ])
              ]),
              e("div", St, [
                t[36] || (t[36] = e("label", { class: "di-form-label" }, "記入者（オプション）", -1)),
                C(e("input", {
                  "onUpdate:modelValue": t[6] || (t[6] = (o) => I.value = o),
                  type: "text",
                  placeholder: "名前",
                  class: "di-input"
                }, null, 512), [
                  [U, I.value]
                ])
              ])
            ], 64)) : M("", !0),
            n.value === "field" ? (u(), p(j, { key: 1 }, [
              e("div", Bt, [
                e("div", Gt, [
                  t[37] || (t[37] = e("label", { class: "di-form-label" }, "テーブル名 *", -1)),
                  C(e("input", {
                    "onUpdate:modelValue": t[7] || (t[7] = (o) => y.value = o),
                    type: "text",
                    placeholder: "users",
                    class: "di-input"
                  }, null, 512), [
                    [U, y.value]
                  ])
                ]),
                e("div", Xt, [
                  t[38] || (t[38] = e("label", { class: "di-form-label" }, "カラム名 *", -1)),
                  C(e("input", {
                    "onUpdate:modelValue": t[8] || (t[8] = (o) => $.value = o),
                    type: "text",
                    placeholder: "name",
                    class: "di-input"
                  }, null, 512), [
                    [U, $.value]
                  ])
                ])
              ]),
              e("div", Kt, [
                t[40] || (t[40] = e("label", { class: "di-form-label" }, "データ型", -1)),
                C(e("select", {
                  "onUpdate:modelValue": t[9] || (t[9] = (o) => V.value = o),
                  class: "di-select"
                }, [
                  t[39] || (t[39] = e("option", { value: "" }, "選択してください", -1)),
                  (u(), p(j, null, G(Me, (o) => e("option", {
                    key: o,
                    value: o
                  }, _(o), 9, Yt)), 64))
                ], 512), [
                  [oe, V.value]
                ])
              ]),
              e("div", Jt, [
                t[41] || (t[41] = e("label", { class: "di-form-label" }, "バリデーション (カンマ区切り)", -1)),
                C(e("input", {
                  "onUpdate:modelValue": t[10] || (t[10] = (o) => L.value = o),
                  type: "text",
                  placeholder: "required, max:255",
                  class: "di-input"
                }, null, 512), [
                  [U, L.value]
                ])
              ]),
              e("div", Zt, [
                t[42] || (t[42] = e("label", { class: "di-form-label" }, "説明", -1)),
                C(e("textarea", {
                  "onUpdate:modelValue": t[11] || (t[11] = (o) => w.value = o),
                  rows: "2",
                  placeholder: "このフィールドの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, w.value]
                ])
              ])
            ], 64)) : M("", !0),
            n.value === "action" ? (u(), p(j, { key: 2 }, [
              e("div", Qt, [
                t[43] || (t[43] = e("label", { class: "di-form-label" }, "アクションタイプ", -1)),
                C(e("select", {
                  "onUpdate:modelValue": t[12] || (t[12] = (o) => b.value = o),
                  class: "di-select"
                }, [
                  (u(), p(j, null, G($e, (o) => e("option", {
                    key: o.value,
                    value: o.value
                  }, _(o.label), 9, Wt)), 64))
                ], 512), [
                  [oe, b.value]
                ])
              ]),
              b.value === "api" ? (u(), p("div", el, [
                e("div", tl, [
                  t[44] || (t[44] = e("label", { class: "di-form-label" }, "メソッド", -1)),
                  C(e("select", {
                    "onUpdate:modelValue": t[13] || (t[13] = (o) => O.value = o),
                    class: "di-select"
                  }, [
                    (u(), p(j, null, G(Ee, (o) => e("option", {
                      key: o,
                      value: o
                    }, _(o), 9, ll)), 64))
                  ], 512), [
                    [oe, O.value]
                  ])
                ]),
                e("div", ol, [
                  t[45] || (t[45] = e("label", { class: "di-form-label" }, "エンドポイント", -1)),
                  C(e("input", {
                    "onUpdate:modelValue": t[14] || (t[14] = (o) => m.value = o),
                    type: "text",
                    placeholder: "/api/tasks",
                    class: "di-input"
                  }, null, 512), [
                    [U, m.value]
                  ])
                ])
              ])) : (u(), p("div", sl, [
                e("label", il, _(b.value === "navigate" ? "遷移先パス" : b.value === "modal" ? "モーダル名" : b.value === "emit" ? "イベント名" : "関数名"), 1),
                C(e("input", {
                  "onUpdate:modelValue": t[15] || (t[15] = (o) => m.value = o),
                  type: "text",
                  placeholder: b.value === "navigate" ? "/tasks" : b.value === "modal" ? "ConfirmDialog" : b.value === "emit" ? "onSubmit" : "handleClick",
                  class: "di-input"
                }, null, 8, nl), [
                  [U, m.value]
                ])
              ])),
              e("div", al, [
                t[46] || (t[46] = e("label", { class: "di-form-label" }, "説明", -1)),
                C(e("textarea", {
                  "onUpdate:modelValue": t[16] || (t[16] = (o) => A.value = o),
                  rows: "2",
                  placeholder: "このアクションの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, A.value]
                ])
              ])
            ], 64)) : M("", !0),
            n.value === "links" ? (u(), p(j, { key: 3 }, [
              e("div", dl, [
                t[47] || (t[47] = e("label", { class: "di-form-label" }, "テストファイルパス", -1)),
                C(e("input", {
                  "onUpdate:modelValue": t[17] || (t[17] = (o) => i.value = o),
                  type: "text",
                  placeholder: "src/__tests__/components/MyComponent.test.ts",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, i.value]
                ])
              ]),
              e("div", ul, [
                t[48] || (t[48] = e("label", { class: "di-form-label" }, "Figma URL", -1)),
                C(e("input", {
                  "onUpdate:modelValue": t[18] || (t[18] = (o) => E.value = o),
                  type: "text",
                  placeholder: "https://www.figma.com/design/...",
                  class: "di-input"
                }, null, 512), [
                  [U, E.value]
                ])
              ]),
              e("div", rl, [
                e("div", vl, [
                  t[49] || (t[49] = e("label", { class: "di-form-label" }, "GitHub Issue", -1)),
                  C(e("input", {
                    "onUpdate:modelValue": t[19] || (t[19] = (o) => l.value = o),
                    type: "text",
                    placeholder: "#123",
                    class: "di-input"
                  }, null, 512), [
                    [U, l.value]
                  ])
                ]),
                e("div", pl, [
                  t[50] || (t[50] = e("label", { class: "di-form-label" }, "GitHub PR", -1)),
                  C(e("input", {
                    "onUpdate:modelValue": t[20] || (t[20] = (o) => x.value = o),
                    type: "text",
                    placeholder: "#456",
                    class: "di-input"
                  }, null, 512), [
                    [U, x.value]
                  ])
                ])
              ]),
              e("div", cl, [
                t[51] || (t[51] = e("label", { class: "di-form-label" }, "関連ドキュメント", -1)),
                C(e("input", {
                  "onUpdate:modelValue": t[21] || (t[21] = (o) => r.value = o),
                  type: "text",
                  placeholder: "https://docs.example.com/...",
                  class: "di-input"
                }, null, 512), [
                  [U, r.value]
                ])
              ])
            ], 64)) : M("", !0),
            n.value === "meta" ? (u(), p(j, { key: 4 }, [
              e("div", ml, [
                t[52] || (t[52] = e("label", { class: "di-form-label" }, "使用Piniaストア (カンマ区切り)", -1)),
                C(e("input", {
                  "onUpdate:modelValue": t[22] || (t[22] = (o) => g.value = o),
                  type: "text",
                  placeholder: "useUserStore, useThemeStore",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, g.value]
                ])
              ]),
              e("div", yl, [
                t[53] || (t[53] = e("label", { class: "di-form-label" }, "使用コンポーネント (カンマ区切り)", -1)),
                C(e("input", {
                  "onUpdate:modelValue": t[23] || (t[23] = (o) => N.value = o),
                  type: "text",
                  placeholder: "Button, Modal, Input",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, N.value]
                ])
              ]),
              e("div", hl, [
                t[54] || (t[54] = e("label", { class: "di-form-label" }, "i18nキー (カンマ区切り)", -1)),
                C(e("input", {
                  "onUpdate:modelValue": t[24] || (t[24] = (o) => q.value = o),
                  type: "text",
                  placeholder: "common.save, errors.required",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, q.value]
                ])
              ]),
              e("div", fl, [
                t[55] || (t[55] = e("label", { class: "di-form-label" }, "デザイントークン (カンマ区切り)", -1)),
                C(e("input", {
                  "onUpdate:modelValue": t[25] || (t[25] = (o) => R.value = o),
                  type: "text",
                  placeholder: "primaryColor, secondaryColor",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, R.value]
                ])
              ]),
              e("div", bl, [
                t[56] || (t[56] = e("label", { class: "di-form-label" }, "アクセシビリティ", -1)),
                C(e("textarea", {
                  "onUpdate:modelValue": t[26] || (t[26] = (o) => T.value = o),
                  rows: "2",
                  placeholder: "キーボード操作、スクリーンリーダー対応などのメモ...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, T.value]
                ])
              ]),
              e("div", kl, [
                t[57] || (t[57] = e("label", { class: "di-form-label" }, "レスポンシブ動作", -1)),
                C(e("textarea", {
                  "onUpdate:modelValue": t[27] || (t[27] = (o) => X.value = o),
                  rows: "2",
                  placeholder: "モバイルでの表示変更、ブレークポイントなど...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, X.value]
                ])
              ])
            ], 64)) : M("", !0)
          ]),
          e("div", xl, [
            e("button", {
              onClick: Ce,
              class: "di-btn-delete"
            }, [
              f(d(xe), { style: { width: "14px", height: "14px" } }),
              t[58] || (t[58] = D(" 削除 ", -1))
            ]),
            e("div", gl, [
              e("button", {
                onClick: Y,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: Ie,
                class: "di-btn-save"
              }, [
                f(d(Ne), { style: { width: "14px", height: "14px" } }),
                t[59] || (t[59] = D(" 保存 ", -1))
              ])
            ])
          ])
        ])
      ])) : M("", !0)
    ]));
  }
}), Il = /* @__PURE__ */ ie(wl, [["__scopeId", "data-v-8d1d33c3"]]), Cl = { class: "di-highlight-label" }, Ml = {
  key: 1,
  "data-dev-inspector": "",
  class: "di-pick-banner"
}, $l = ["title", "onClick"], El = /* @__PURE__ */ te({
  __name: "DevPickOverlay",
  setup(v) {
    const s = le(), n = h(null), y = h(null);
    function $(k) {
      const I = s.getElementConfig(k);
      if (!(I != null && I.note)) return null;
      const c = {
        info: ke,
        warning: he,
        todo: fe,
        question: be
      }, i = {
        info: "#60a5fa",
        warning: "#fbbf24",
        todo: "#10b981",
        question: "#a78bfa"
      };
      return {
        icon: c[I.note.type || "info"],
        color: i[I.note.type || "info"],
        text: I.note.text
      };
    }
    const V = h(0), L = h(0), w = Q(() => {
      const k = V.value, I = L.value, c = [];
      if (!s.isEnabled) return c;
      const i = s.getConfiguredSelectors();
      for (const E of i)
        try {
          const l = document.querySelector(E);
          if (l) {
            const x = l.getBoundingClientRect();
            c.push({
              selector: E,
              element: l,
              top: x.top + k - 4,
              left: x.right + I + 4,
              noteInfo: $(E)
            });
          }
        } catch {
        }
      return c;
    });
    function b(k) {
      if (!s.isPickMode) return;
      if (k.target.closest("[data-dev-inspector]")) {
        n.value = null, y.value = null, s.setHoveredSelector(null);
        return;
      }
      const c = document.elementFromPoint(k.clientX, k.clientY);
      if (!c || c === document.body || c === document.documentElement) {
        n.value = null, y.value = null, s.setHoveredSelector(null);
        return;
      }
      if (c.closest("[data-dev-inspector]"))
        return;
      y.value = c;
      const i = c.getBoundingClientRect();
      n.value = {
        top: `${i.top + window.scrollY}px`,
        left: `${i.left + window.scrollX}px`,
        width: `${i.width}px`,
        height: `${i.height}px`
      };
      const E = s.generateSelector(c);
      s.setHoveredSelector(E);
    }
    function m(k) {
      if (!(!s.isPickMode || k.target.closest("[data-dev-inspector]")) && (k.preventDefault(), k.stopPropagation(), y.value)) {
        const c = s.generateSelector(y.value);
        s.startEditing(c), s.togglePickMode();
      }
    }
    function O(k) {
      k.key === "Escape" && s.isPickMode && s.togglePickMode();
    }
    function A() {
      V.value = window.scrollY, L.value = window.scrollX;
    }
    return ye(() => {
      window.addEventListener("mousemove", b, !0), window.addEventListener("click", m, !0), window.addEventListener("keydown", O), window.addEventListener("scroll", A), window.addEventListener("resize", A);
    }), Te(() => {
      window.removeEventListener("mousemove", b, !0), window.removeEventListener("click", m, !0), window.removeEventListener("keydown", O), window.removeEventListener("scroll", A), window.removeEventListener("resize", A);
    }), ce(() => s.isPickMode, (k) => {
      k || (n.value = null, y.value = null);
    }), (k, I) => (u(), F(B, { to: "body" }, [
      d(s).isPickMode && n.value ? (u(), p("div", {
        key: 0,
        "data-dev-inspector": "",
        class: "di-highlight",
        style: z({
          top: n.value.top,
          left: n.value.left,
          width: n.value.width,
          height: n.value.height
        })
      }, [
        e("div", Cl, _(d(s).hoveredSelector), 1)
      ], 4)) : M("", !0),
      d(s).isPickMode ? (u(), p("div", Ml, [...I[0] || (I[0] = [
        e("span", null, "要素をクリックしてメモを追加", -1),
        e("kbd", null, "ESC", -1),
        e("span", { class: "di-pick-hint" }, "でキャンセル", -1)
      ])])) : M("", !0),
      d(s).isEnabled && !d(s).isPickMode && !d(s).isEditMode ? (u(!0), p(j, { key: 2 }, G(w.value, (c) => (u(), p("div", {
        key: c.selector,
        "data-dev-inspector": "",
        class: "di-annotation-marker",
        style: z({
          top: `${c.top}px`,
          left: `${c.left}px`
        })
      }, [
        c.noteInfo ? (u(), p("div", {
          key: 0,
          class: "di-marker-dot",
          style: z({ backgroundColor: c.noteInfo.color }),
          title: c.noteInfo.text,
          onClick: (i) => d(s).startEditing(c.selector)
        }, [
          (u(), F(me(c.noteInfo.icon), { style: { width: "10px", height: "10px", color: "white" } }))
        ], 12, $l)) : M("", !0)
      ], 4))), 128)) : M("", !0)
    ]));
  }
}), Pl = /* @__PURE__ */ ie(El, [["__scopeId", "data-v-bd3c953f"]]), Tl = {
  key: 0,
  "data-dev-inspector": ""
}, Ul = /* @__PURE__ */ te({
  __name: "DevInspector",
  props: {
    storageKey: { default: "devInspector:elementConfigs" },
    enabledInProduction: { type: Boolean, default: !1 },
    initialAnnotations: {}
  },
  setup(v) {
    const s = v, n = le();
    return ye(() => {
      n.init({
        storageKey: s.storageKey,
        enabledInProduction: s.enabledInProduction,
        initialAnnotations: s.initialAnnotations
      });
    }), (y, $) => d(n).isAvailable ? (u(), p("div", Tl, [
      f(At),
      f(Il),
      f(Pl)
    ])) : M("", !0);
  }
}), Ll = {
  install(v, s = {}) {
    const { autoRegister: n = !0, ...y } = s;
    n && v.component("DevInspector", Ul), v.provide("devInspectorOptions", y);
  }
};
export {
  Il as DevElementEditor,
  Ul as DevInspector,
  At as DevPanel,
  Pl as DevPickOverlay,
  Ll as VueDevInspector,
  Ll as default,
  jl as useDevInspector,
  le as useDevInspectorStore
};
