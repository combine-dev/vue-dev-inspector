import { h as fe, defineComponent as ue, inject as Te, ref as p, computed as se, openBlock as d, createElementBlock as r, Fragment as V, createBlock as z, Teleport as le, unref as o, createVNode as I, createCommentVNode as k, createElementVNode as e, normalizeClass as F, toDisplayString as f, renderList as J, withDirectives as P, vModelText as A, normalizeStyle as N, createTextVNode as B, withModifiers as me, watch as $e, resolveDynamicComponent as Se, vModelSelect as ve, onMounted as Ce, onUnmounted as Ue } from "vue";
import { u as re } from "./useDevInspector-DDBXynb_.js";
import { a as Cs } from "./useDevInspector-DDBXynb_.js";
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var de = {
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
const Ae = (b) => b.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), E = (b, l) => ({ size: c, strokeWidth: $ = 2, absoluteStrokeWidth: D, color: S, class: L, ...O }, { attrs: g, slots: y }) => fe(
  "svg",
  {
    ...de,
    width: c || de.width,
    height: c || de.height,
    stroke: S || de.stroke,
    "stroke-width": D ? Number($) * 24 / Number(c) : $,
    ...g,
    class: ["lucide", `lucide-${Ae(b)}`],
    ...O
  },
  [
    ...l.map((G) => fe(...G)),
    ...y.default ? [y.default()] : []
  ]
);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ve = E("AlertCircleIcon", [
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
const Le = E("AlertTriangleIcon", [
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
const Be = E("CheckSquareIcon", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ke = E("CodeIcon", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Re = E("DatabaseIcon", [
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
const pe = E("DownloadIcon", [
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
const je = E("ExternalLinkIcon", [
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
const Oe = E("FileSpreadsheetIcon", [
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
const ge = E("FileTextIcon", [
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
const qe = E("GitBranchIcon", [
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
const He = E("GlobeIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ze = E("HelpCircleIcon", [
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
const Ne = E("InfoIcon", [
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
const Fe = E("LinkIcon", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ye = E("Loader2Icon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ge = E("MessageSquareIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xe = E("MousePointer2Icon", [
  ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xe = E("PenLineIcon", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ke = E("SaveIcon", [
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
const be = E("ScanIcon", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const we = E("ServerIcon", [
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
const Ye = E("Settings2Icon", [
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
const Ie = E("Trash2Icon", [
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
const Ze = E("UploadIcon", [
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
const Je = E("Wand2Icon", [
  [
    "path",
    {
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",
      key: "1bcowg"
    }
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M5 6v4", key: "ilb8ba" }],
  ["path", { d: "M19 14v4", key: "blhpug" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M7 8H3", key: "zfb6yr" }],
  ["path", { d: "M21 16h-4", key: "1cnmox" }],
  ["path", { d: "M11 3H9", key: "1obp7u" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Me = E("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const We = E("ZapIcon", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
]);
async function Qe(b, l, c = {}) {
  var x;
  const $ = await import("./xlsx-BopDBbWb.js"), { systemName: D = "System", author: S = "" } = c, L = /* @__PURE__ */ new Date(), O = `${L.getFullYear()}/${L.getMonth() + 1}/${L.getDate()}`, g = $.utils.book_new(), y = [];
  y.push([
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
    D,
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
    (b == null ? void 0 : b.name) || "",
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
    S,
    "",
    "作成日",
    "",
    "",
    "",
    "",
    O
  ]), y.push([]), y.push([
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
    (b == null ? void 0 : b.componentPath) || "",
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
    (b == null ? void 0 : b.figmaUrl) || ""
  ]), y.push([]), y.push(["機能概要"]), y.push([(b == null ? void 0 : b.description) || ""]), y.push([]), y.push(["画面レイアウト　figmaURL"]), y.push([(b == null ? void 0 : b.figmaUrl) || ""]), y.push([]), b != null && b.apis && b.apis.length > 0 && (y.push(["API一覧"]), y.push(["", "メソッド", "", "エンドポイント", "", "", "", "", "", "", "", "説明"]), b.apis.forEach((a) => {
    y.push(["", a.method, "", a.endpoint, "", "", "", "", "", "", "", a.description]);
  }), y.push([])), y.push(["画面項目　ヘッダーフッターは省く"]), y.push([
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
  ]), Object.values(l).forEach((a, n) => {
    var T, U, _;
    const C = a.id;
    let w = "", m = "", h = "";
    if ((T = a.note) != null && T.text && (w = a.note.text), a.fieldInfo && (w += w ? `
` : "", w += `DB: ${a.fieldInfo.table}.${a.fieldInfo.column}`, a.fieldInfo.type && (w += ` (${a.fieldInfo.type})`), a.fieldInfo.description && (w += `
${a.fieldInfo.description}`)), a.actionInfo && (h = `[${{
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行"
    }[a.actionInfo.type] || a.actionInfo.type}]`, a.actionInfo.target && (h += ` ${a.actionInfo.method || ""} ${a.actionInfo.target}`), a.actionInfo.description && (h += `
${a.actionInfo.description}`)), a.links) {
      const M = [];
      a.links.testPath && M.push(`テスト: ${a.links.testPath}`), a.links.figmaUrl && M.push(`Figma: ${a.links.figmaUrl}`), a.links.githubIssue && M.push(`Issue: ${a.links.githubIssue}`), a.links.githubPr && M.push(`PR: ${a.links.githubPr}`), M.length > 0 && (h += h ? `

` : "", h += M.join(`
`));
    }
    if (a.devMeta) {
      const M = [];
      (U = a.devMeta.usedStores) != null && U.length && M.push(`Store: ${a.devMeta.usedStores.join(", ")}`), (_ = a.devMeta.usedComponents) != null && _.length && M.push(`Components: ${a.devMeta.usedComponents.join(", ")}`), a.devMeta.accessibility && M.push(`A11y: ${a.devMeta.accessibility}`), a.devMeta.responsive && M.push(`Responsive: ${a.devMeta.responsive}`), M.length > 0 && (h += h ? `

` : "", h += `[開発情報]
` + M.join(`
`));
    }
    y.push([
      "",
      n + 1,
      "",
      C,
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
      w,
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
      m,
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
      h
    ]);
  });
  const X = $.utils.aoa_to_sheet(y);
  X["!cols"] = [
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
  ], $.utils.book_append_sheet(g, X, "画面設計書");
  const q = `画面仕様書_${((x = b == null ? void 0 : b.name) == null ? void 0 : x.replace(/[/\\?%*:|"<>]/g, "-")) || "screen"}_${O.replace(/\//g, "")}.xlsx`;
  return $.writeFile(g, q), q;
}
const et = {
  key: 0,
  class: "di-panel",
  "data-dev-inspector": ""
}, tt = { class: "di-header" }, lt = { class: "di-header-title" }, st = { class: "di-edit-section" }, ot = { class: "di-edit-row" }, nt = { class: "di-edit-label" }, it = { class: "di-scan-section" }, at = ["disabled"], dt = ["disabled"], ut = { class: "di-scan-section" }, rt = ["disabled", "title"], ct = {
  key: 0,
  class: "di-scan-results"
}, vt = {
  key: 0,
  class: "di-scan-result-item"
}, pt = { class: "di-scan-result-count" }, yt = { class: "di-scan-result-count" }, bt = { class: "di-analysis-section" }, mt = { class: "di-analysis-header" }, ht = { class: "di-analysis-input" }, ft = { class: "di-analysis-buttons" }, kt = ["disabled"], gt = ["disabled"], xt = {
  key: 0,
  class: "di-analysis-error"
}, wt = {
  key: 1,
  class: "di-analysis-status"
}, $t = { class: "di-analysis-count" }, Ct = {
  key: 2,
  class: "di-analysis-filter"
}, It = { class: "di-filter-buttons" }, Mt = ["onClick"], Et = { class: "di-content" }, _t = { class: "di-section" }, Pt = { class: "di-screen-name" }, Dt = { class: "di-screen-desc" }, Tt = { class: "di-card" }, St = { class: "di-card-label" }, Ut = { class: "di-code-blue" }, At = {
  key: 0,
  class: "di-card"
}, Vt = { class: "di-card-label" }, Lt = ["href"], Bt = {
  key: 1,
  class: "di-card"
}, Rt = { class: "di-card-label" }, jt = { class: "di-api-list" }, Ot = { class: "di-api-info" }, qt = { class: "di-api-endpoint" }, Ht = { class: "di-api-desc" }, zt = {
  key: 2,
  class: "di-card"
}, Nt = { class: "di-card-label" }, Ft = { class: "di-notes-list" }, Gt = {
  key: 1,
  class: "di-no-spec"
}, Xt = { class: "di-card" }, Kt = { class: "di-card-header" }, Yt = { class: "di-card-label" }, Zt = { class: "di-count-badge" }, Jt = {
  key: 0,
  class: "di-export-buttons"
}, Wt = {
  key: 1,
  class: "di-export-hint"
}, Qt = { class: "di-action-buttons" }, el = {
  key: 0,
  class: "di-indicator",
  "data-dev-inspector": ""
}, tl = {
  key: 0,
  class: "di-indicator-edit"
}, ll = { class: "di-modal" }, sl = ["value"], ol = { class: "di-modal-actions" }, nl = { class: "di-modal" }, il = { class: "di-file-drop" }, al = {
  key: 0,
  class: "di-error"
}, dl = { class: "di-modal-actions" }, ul = ["disabled"], rl = /* @__PURE__ */ ue({
  __name: "DevPanel",
  setup(b) {
    const l = re(), c = Te("router", null), $ = p(!1), D = p(!1), S = p(""), L = p(""), O = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, g = se(() => l.currentScreenSpec), y = se(() => Object.keys(l.elementConfigs).length);
    function G() {
      const j = l.exportConfigs();
      navigator.clipboard.writeText(j), $.value = !1;
    }
    function X() {
      const j = l.exportConfigs(), s = new Blob([j], { type: "application/json" }), K = URL.createObjectURL(s), v = document.createElement("a");
      v.href = K, v.download = "dev-mode-configs.json", v.click(), URL.revokeObjectURL(K), $.value = !1;
    }
    function H() {
      l.downloadAnnotations();
    }
    async function q() {
      try {
        await Qe(
          l.currentScreenSpec,
          l.elementConfigs,
          { systemName: "System" }
        );
      } catch (j) {
        console.error("Failed to export xlsx:", j), alert("xlsx export failed. Make sure xlsx package is installed.");
      }
    }
    function x() {
      try {
        l.importConfigs(S.value), S.value = "", L.value = "", D.value = !1;
      } catch {
        L.value = "JSONの形式が正しくありません";
      }
    }
    function a(j) {
      var Q;
      const K = (Q = j.target.files) == null ? void 0 : Q[0];
      if (!K) return;
      const v = new FileReader();
      v.onload = (ce) => {
        var ne;
        S.value = (ne = ce.target) == null ? void 0 : ne.result;
      }, v.readAsText(K);
    }
    function n() {
      confirm("すべての要素設定を削除しますか？") && l.clearAllConfigs();
    }
    const C = p(0), w = p(!1), m = p([]);
    async function h(j = !1) {
      w.value = !0, C.value = await l.scanCurrentPage({ rescan: j });
    }
    async function T() {
      if (!c) {
        alert("Vue Routerが見つかりません。全ページスキャンにはVue Routerが必要です。");
        return;
      }
      confirm("全ページをスキャンします。ページ遷移が発生しますがよろしいですか？") && (w.value = !0, m.value = await l.scanAllPages(c));
    }
    const U = p("/dev-inspector-analysis.json"), _ = p(!1), M = p(""), Z = p(0), R = [
      { value: "db-api", label: "DB/APIのみ" },
      { value: "all", label: "すべて" },
      { value: "static", label: "固定文言" },
      { value: "data", label: "動的データ" },
      { value: "none", label: "非表示" }
    ];
    async function ee() {
      _.value = !0, M.value = "";
      try {
        if (await l.loadAnalysisData(U.value), l.analysisData) {
          const j = Object.values(l.analysisData.components).reduce((s, K) => s + K.elements.length, 0);
          alert(`分析データを読み込みました（${Object.keys(l.analysisData.components).length}コンポーネント、${j}要素）`);
        } else
          M.value = "分析データの読み込みに失敗しました";
      } catch (j) {
        M.value = `読み込みエラー: ${j}`;
      } finally {
        _.value = !1;
      }
    }
    async function te() {
      if (!l.analysisData) {
        alert("先に分析データを読み込んでください");
        return;
      }
      Z.value = await l.applyAnalysisToPage();
    }
    return (j, s) => {
      var K;
      return d(), r(V, null, [
        (d(), z(le, { to: "body" }, [
          o(l).isEnabled && !o(l).isPanelOpen ? (d(), r("button", {
            key: 0,
            onClick: s[0] || (s[0] = //@ts-ignore
            (...v) => o(l).openPanel && o(l).openPanel(...v)),
            class: "di-fab",
            title: "画面仕様を表示",
            "data-dev-inspector": ""
          }, [
            I(o(ge), { style: { width: "20px", height: "20px" } })
          ])) : k("", !0)
        ])),
        (d(), z(le, { to: "body" }, [
          o(l).isEnabled && o(l).isPanelOpen ? (d(), r("div", et, [
            e("div", tt, [
              e("div", lt, [
                I(o(ke), { style: { width: "20px", height: "20px", color: "#60a5fa" } }),
                s[15] || (s[15] = e("span", null, "Developer Mode", -1))
              ]),
              e("button", {
                onClick: s[1] || (s[1] = //@ts-ignore
                (...v) => o(l).closePanel && o(l).closePanel(...v)),
                class: "di-close-btn"
              }, [
                I(o(Me), { style: { width: "20px", height: "20px" } })
              ])
            ]),
            e("div", st, [
              e("div", ot, [
                e("div", nt, [
                  I(o(xe), { style: { width: "16px", height: "16px", color: "#fbbf24" } }),
                  s[16] || (s[16] = e("span", null, "編集モード", -1))
                ]),
                e("button", {
                  onClick: s[2] || (s[2] = //@ts-ignore
                  (...v) => o(l).toggleEditMode && o(l).toggleEditMode(...v)),
                  class: F(["di-toggle", { active: o(l).isEditMode }])
                }, [
                  e("span", {
                    class: F(["di-toggle-knob", { active: o(l).isEditMode }])
                  }, null, 2)
                ], 2)
              ]),
              s[23] || (s[23] = e("p", { class: "di-edit-hint" }, "ONにすると、要素をクリックして情報を編集できます", -1)),
              e("button", {
                onClick: s[3] || (s[3] = //@ts-ignore
                (...v) => o(l).togglePickMode && o(l).togglePickMode(...v)),
                class: F(["di-pick-btn", { active: o(l).isPickMode }])
              }, [
                I(o(Xe), { style: { width: "16px", height: "16px" } }),
                e("span", null, f(o(l).isPickMode ? "要素選択中..." : "任意の要素にメモを追加"), 1)
              ], 2),
              e("div", it, [
                e("button", {
                  onClick: s[4] || (s[4] = (v) => h(!1)),
                  class: "di-scan-btn",
                  disabled: o(l).isScanning,
                  title: "新規要素のみスキャン"
                }, [
                  o(l).isScanning && !o(l).currentScanPage ? (d(), z(o(ye), {
                    key: 0,
                    class: "di-spin",
                    style: { width: "16px", height: "16px" }
                  })) : (d(), z(o(be), {
                    key: 1,
                    style: { width: "16px", height: "16px" }
                  })),
                  e("span", null, f(o(l).isScanning && !o(l).currentScanPage ? `${o(l).scanProgress}%` : "スキャン"), 1)
                ], 8, at),
                e("button", {
                  onClick: s[5] || (s[5] = (v) => h(!0)),
                  class: "di-scan-btn di-scan-btn-rescan",
                  disabled: o(l).isScanning,
                  title: "既存の設定をクリアして再スキャン"
                }, [
                  I(o(be), { style: { width: "16px", height: "16px" } }),
                  s[17] || (s[17] = e("span", null, "再スキャン", -1))
                ], 8, dt)
              ]),
              e("div", ut, [
                e("button", {
                  onClick: T,
                  class: "di-scan-btn di-scan-btn-all",
                  disabled: o(l).isScanning,
                  title: o(c) ? "全ページをスキャン" : "Vue Routerが必要です"
                }, [
                  o(l).isScanning && o(l).currentScanPage ? (d(), z(o(ye), {
                    key: 0,
                    class: "di-spin",
                    style: { width: "16px", height: "16px" }
                  })) : (d(), z(o(He), {
                    key: 1,
                    style: { width: "16px", height: "16px" }
                  })),
                  e("span", null, f(o(l).currentScanPage ? `${o(l).currentScanPage}` : "全ページスキャン"), 1)
                ], 8, rt)
              ]),
              w.value && (C.value > 0 || m.value.length > 0) ? (d(), r("div", ct, [
                C.value > 0 ? (d(), r("div", vt, [
                  e("span", pt, f(C.value), 1),
                  s[18] || (s[18] = e("span", null, "件の要素を検出・登録しました", -1))
                ])) : k("", !0),
                (d(!0), r(V, null, J(m.value, (v) => (d(), r("div", {
                  key: v.page,
                  class: "di-scan-result-item"
                }, [
                  e("code", null, f(v.page), 1),
                  e("span", yt, f(v.count), 1)
                ]))), 128)),
                e("button", {
                  onClick: s[6] || (s[6] = (v) => {
                    w.value = !1, m.value = [];
                  }),
                  class: "di-scan-close"
                }, " 閉じる ")
              ])) : k("", !0),
              e("div", bt, [
                e("div", mt, [
                  I(o(we), { style: { width: "16px", height: "16px", color: "#3b82f6" } }),
                  s[19] || (s[19] = e("span", null, "CLIソース解析", -1))
                ]),
                e("div", ht, [
                  P(e("input", {
                    "onUpdate:modelValue": s[7] || (s[7] = (v) => U.value = v),
                    type: "text",
                    class: "di-analysis-url",
                    placeholder: "/dev-inspector-analysis.json"
                  }, null, 512), [
                    [A, U.value]
                  ])
                ]),
                e("div", ft, [
                  e("button", {
                    onClick: ee,
                    class: "di-analysis-btn",
                    disabled: _.value
                  }, [
                    _.value ? (d(), z(o(ye), {
                      key: 0,
                      class: "di-spin",
                      style: { width: "14px", height: "14px" }
                    })) : (d(), z(o(pe), {
                      key: 1,
                      style: { width: "14px", height: "14px" }
                    })),
                    s[20] || (s[20] = e("span", null, "読み込み", -1))
                  ], 8, kt),
                  e("button", {
                    onClick: te,
                    class: "di-analysis-btn di-analysis-btn-apply",
                    disabled: !o(l).analysisData
                  }, [
                    I(o(be), { style: { width: "14px", height: "14px" } }),
                    s[21] || (s[21] = e("span", null, "ページに適用", -1))
                  ], 8, gt)
                ]),
                M.value ? (d(), r("div", xt, f(M.value), 1)) : k("", !0),
                o(l).analysisResults.length > 0 ? (d(), r("div", wt, [
                  e("span", $t, f(o(l).analysisResults.filter((v) => v.matched).length), 1),
                  e("span", null, "/ " + f(o(l).analysisResults.length) + " 要素がマッチ", 1)
                ])) : k("", !0),
                o(l).analysisResults.length > 0 ? (d(), r("div", Ct, [
                  s[22] || (s[22] = e("span", { class: "di-filter-label" }, "表示フィルター:", -1)),
                  e("div", It, [
                    (d(), r(V, null, J(R, (v) => e("button", {
                      key: v.value,
                      onClick: (Q) => o(l).analysisFilter = v.value,
                      class: F(["di-filter-btn", { active: o(l).analysisFilter === v.value }])
                    }, f(v.label), 11, Mt)), 64))
                  ])
                ])) : k("", !0)
              ])
            ]),
            e("div", Et, [
              g.value ? (d(), r(V, { key: 0 }, [
                e("div", _t, [
                  e("h2", Pt, f(g.value.name), 1),
                  e("p", Dt, f(g.value.description), 1)
                ]),
                e("div", Tt, [
                  e("div", St, [
                    I(o(ke), { style: { width: "16px", height: "16px" } }),
                    s[24] || (s[24] = e("span", null, "Component Path", -1))
                  ]),
                  e("code", Ut, f(g.value.componentPath), 1)
                ]),
                g.value.figmaUrl ? (d(), r("div", At, [
                  e("div", Vt, [
                    I(o(je), { style: { width: "16px", height: "16px" } }),
                    s[25] || (s[25] = e("span", null, "Figma Design", -1))
                  ]),
                  e("a", {
                    href: g.value.figmaUrl,
                    target: "_blank",
                    class: "di-link-purple"
                  }, f(g.value.figmaUrl), 9, Lt)
                ])) : k("", !0),
                g.value.apis.length ? (d(), r("div", Bt, [
                  e("div", Rt, [
                    I(o(we), { style: { width: "16px", height: "16px" } }),
                    s[26] || (s[26] = e("span", null, "API Endpoints", -1))
                  ]),
                  e("div", jt, [
                    (d(!0), r(V, null, J(g.value.apis, (v, Q) => (d(), r("div", {
                      key: Q,
                      class: "di-api-item"
                    }, [
                      e("span", {
                        class: "di-method-badge",
                        style: N({ backgroundColor: O[v.method] + "20", color: O[v.method] })
                      }, f(v.method), 5),
                      e("div", Ot, [
                        e("code", qt, f(v.endpoint), 1),
                        e("p", Ht, f(v.description), 1)
                      ])
                    ]))), 128))
                  ])
                ])) : k("", !0),
                (K = g.value.notes) != null && K.length ? (d(), r("div", zt, [
                  e("div", Nt, [
                    I(o(Ve), { style: { width: "16px", height: "16px" } }),
                    s[27] || (s[27] = e("span", null, "Notes", -1))
                  ]),
                  e("ul", Ft, [
                    (d(!0), r(V, null, J(g.value.notes, (v, Q) => (d(), r("li", {
                      key: Q,
                      class: "di-note-item"
                    }, [
                      s[28] || (s[28] = e("span", { class: "di-bullet" }, "•", -1)),
                      e("span", null, f(v), 1)
                    ]))), 128))
                  ])
                ])) : k("", !0)
              ], 64)) : (d(), r("div", Gt, [
                I(o(ge), { style: { width: "48px", height: "48px", color: "#334155" } }),
                s[29] || (s[29] = e("p", null, [
                  B("この画面の仕様情報は"),
                  e("br"),
                  B("まだ登録されていません")
                ], -1))
              ])),
              e("div", Xt, [
                e("div", Kt, [
                  e("div", Yt, [
                    I(o(xe), { style: { width: "16px", height: "16px" } }),
                    s[30] || (s[30] = e("span", null, "登録済み要素", -1)),
                    e("span", Zt, f(y.value), 1)
                  ])
                ]),
                y.value > 0 ? (d(), r("div", Jt, [
                  e("button", {
                    onClick: H,
                    class: "di-btn-green"
                  }, [
                    I(o(qe), { style: { width: "16px", height: "16px" } }),
                    s[31] || (s[31] = B(" Git管理用に保存 ", -1))
                  ]),
                  e("button", {
                    onClick: q,
                    class: "di-btn-blue"
                  }, [
                    I(o(Oe), { style: { width: "16px", height: "16px" } }),
                    s[32] || (s[32] = B(" 画面仕様書 (xlsx) 出力 ", -1))
                  ])
                ])) : k("", !0),
                y.value > 0 ? (d(), r("p", Wt, [...s[33] || (s[33] = [
                  B(" JSON: ", -1),
                  e("code", null, "dev-annotations.json", -1),
                  B(" に配置してcommit ", -1)
                ])])) : k("", !0),
                e("div", Qt, [
                  e("button", {
                    onClick: s[8] || (s[8] = (v) => $.value = !0),
                    class: "di-btn-small"
                  }, [
                    I(o(pe), { style: { width: "14px", height: "14px" } }),
                    s[34] || (s[34] = B(" エクスポート ", -1))
                  ]),
                  e("button", {
                    onClick: s[9] || (s[9] = (v) => D.value = !0),
                    class: "di-btn-small"
                  }, [
                    I(o(Ze), { style: { width: "14px", height: "14px" } }),
                    s[35] || (s[35] = B(" インポート ", -1))
                  ]),
                  y.value > 0 ? (d(), r("button", {
                    key: 0,
                    onClick: n,
                    class: "di-btn-small di-btn-danger"
                  }, [
                    I(o(Ie), { style: { width: "14px", height: "14px" } }),
                    s[36] || (s[36] = B(" 全削除 ", -1))
                  ])) : k("", !0)
                ])
              ])
            ]),
            s[37] || (s[37] = e("div", { class: "di-footer" }, [
              e("kbd", null, "Ctrl"),
              e("span", null, "+"),
              e("kbd", null, "Shift"),
              e("span", null, "+"),
              e("kbd", null, "D"),
              e("span", { class: "di-footer-text" }, "で開発者モード切替")
            ], -1))
          ])) : k("", !0)
        ])),
        (d(), z(le, { to: "body" }, [
          o(l).isEnabled ? (d(), r("div", el, [
            s[38] || (s[38] = e("span", { class: "di-indicator-dot" }, null, -1)),
            s[39] || (s[39] = B(" Developer Mode ", -1)),
            o(l).isEditMode ? (d(), r("span", tl, "• 編集中")) : k("", !0)
          ])) : k("", !0)
        ])),
        (d(), z(le, { to: "body" }, [
          $.value ? (d(), r("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: s[11] || (s[11] = me((v) => $.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", ll, [
              s[41] || (s[41] = e("h3", { class: "di-modal-title" }, "設定をエクスポート", -1)),
              e("textarea", {
                readonly: "",
                value: o(l).exportConfigs(),
                class: "di-modal-textarea"
              }, null, 8, sl),
              e("div", ol, [
                e("button", {
                  onClick: s[10] || (s[10] = (v) => $.value = !1),
                  class: "di-btn-small"
                }, "閉じる"),
                e("button", {
                  onClick: X,
                  class: "di-btn-small di-btn-gray"
                }, [
                  I(o(pe), { style: { width: "14px", height: "14px" } }),
                  s[40] || (s[40] = B(" ファイル保存 ", -1))
                ]),
                e("button", {
                  onClick: G,
                  class: "di-btn-small di-btn-primary"
                }, "コピー")
              ])
            ])
          ])) : k("", !0)
        ])),
        (d(), z(le, { to: "body" }, [
          D.value ? (d(), r("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: s[14] || (s[14] = me((v) => D.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", nl, [
              s[43] || (s[43] = e("h3", { class: "di-modal-title" }, "設定をインポート", -1)),
              e("label", il, [
                e("input", {
                  type: "file",
                  accept: ".json",
                  onChange: a
                }, null, 32),
                s[42] || (s[42] = e("span", null, "JSONファイルをドラッグまたはクリック", -1))
              ]),
              P(e("textarea", {
                "onUpdate:modelValue": s[12] || (s[12] = (v) => S.value = v),
                placeholder: "またはJSONを直接貼り付け...",
                class: "di-modal-textarea di-modal-textarea-input"
              }, null, 512), [
                [A, S.value]
              ]),
              L.value ? (d(), r("p", al, f(L.value), 1)) : k("", !0),
              e("div", dl, [
                e("button", {
                  onClick: s[13] || (s[13] = (v) => {
                    D.value = !1, S.value = "", L.value = "";
                  }),
                  class: "di-btn-small"
                }, " キャンセル "),
                e("button", {
                  onClick: x,
                  disabled: !S.value,
                  class: "di-btn-small di-btn-primary"
                }, " インポート ", 8, ul)
              ])
            ])
          ])) : k("", !0)
        ]))
      ], 64);
    };
  }
}), he = (b, l) => {
  const c = b.__vccOpts || b;
  for (const [$, D] of l)
    c[$] = D;
  return c;
}, cl = /* @__PURE__ */ he(rl, [["__scopeId", "data-v-a05979ad"]]), vl = { class: "di-editor-modal" }, pl = { class: "di-editor-header" }, yl = { class: "di-header-actions" }, bl = {
  key: 0,
  class: "di-static-indicator"
}, ml = {
  key: 1,
  class: "di-binding-indicator"
}, hl = {
  key: 0,
  class: "di-binding-source"
}, fl = { class: "di-editor-tabs" }, kl = { class: "di-editor-content" }, gl = { class: "di-form-group" }, xl = { class: "di-note-types" }, wl = ["onClick"], $l = { class: "di-form-group" }, Cl = { class: "di-form-group" }, Il = { class: "di-form-row" }, Ml = { class: "di-form-group" }, El = { class: "di-form-group" }, _l = { class: "di-form-group" }, Pl = ["value"], Dl = { class: "di-form-group" }, Tl = { class: "di-form-group" }, Sl = { class: "di-form-group" }, Ul = ["value"], Al = {
  key: 0,
  class: "di-form-row"
}, Vl = {
  class: "di-form-group",
  style: { flex: "0 0 100px" }
}, Ll = ["value"], Bl = {
  class: "di-form-group",
  style: { flex: "1" }
}, Rl = {
  key: 1,
  class: "di-form-group"
}, jl = { class: "di-form-label" }, Ol = ["placeholder"], ql = { class: "di-form-group" }, Hl = { class: "di-form-group" }, zl = { class: "di-form-group" }, Nl = { class: "di-form-row" }, Fl = { class: "di-form-group" }, Gl = { class: "di-form-group" }, Xl = { class: "di-form-group" }, Kl = { class: "di-form-group" }, Yl = { class: "di-form-group" }, Zl = { class: "di-form-group" }, Jl = { class: "di-form-group" }, Wl = { class: "di-form-group" }, Ql = { class: "di-form-group" }, es = { class: "di-editor-footer" }, ts = { class: "di-editor-actions" }, ls = /* @__PURE__ */ ue({
  __name: "DevElementEditor",
  setup(b) {
    const l = re(), c = p("note"), $ = p(""), D = p(""), S = p(""), L = p(""), O = p(""), g = p("navigate"), y = p(""), G = p("GET"), X = p(""), H = p(""), q = p(""), x = p("info"), a = p(""), n = p(""), C = p(""), w = p(""), m = p(""), h = p(""), T = p(""), U = p(""), _ = p(""), M = p(""), Z = p(""), R = p(""), ee = p(""), te = p(!1), j = se(() => l.editingElementId !== null), s = se(() => l.editingElementId);
    $e(s, (W) => {
      var t, i, oe, ie, ae, Y;
      if (W) {
        const u = l.getElementConfig(W);
        u != null && u.fieldInfo && ($.value = u.fieldInfo.table || "", D.value = u.fieldInfo.column || "", S.value = u.fieldInfo.type || "", L.value = ((t = u.fieldInfo.validation) == null ? void 0 : t.join(", ")) || "", O.value = u.fieldInfo.description || ""), u != null && u.actionInfo && (g.value = u.actionInfo.type || "navigate", y.value = u.actionInfo.target || "", G.value = u.actionInfo.method || "GET", X.value = u.actionInfo.description || ""), u != null && u.note && (H.value = u.note.text || "", q.value = u.note.author || "", x.value = u.note.type || "info"), u != null && u.links && (a.value = u.links.testPath || "", n.value = u.links.figmaUrl || "", C.value = u.links.githubIssue || "", w.value = u.links.githubPr || "", m.value = u.links.relatedDocs || ""), u != null && u.devMeta && (h.value = ((i = u.devMeta.usedStores) == null ? void 0 : i.join(", ")) || "", T.value = ((oe = u.devMeta.usedComponents) == null ? void 0 : oe.join(", ")) || "", U.value = ((ie = u.devMeta.i18nKeys) == null ? void 0 : ie.join(", ")) || "", _.value = ((ae = u.devMeta.designTokens) == null ? void 0 : ae.join(", ")) || "", M.value = u.devMeta.accessibility || "", Z.value = u.devMeta.responsive || ""), u != null && u.sourceBinding && (R.value = u.sourceBinding.type || "", ee.value = u.sourceBinding.source || "", te.value = u.sourceBinding.isStatic || !1), (Y = u == null ? void 0 : u.note) != null && Y.text ? c.value = "note" : u != null && u.fieldInfo ? c.value = "field" : u != null && u.actionInfo ? c.value = "action" : u != null && u.links ? c.value = "links" : u != null && u.devMeta ? c.value = "meta" : c.value = "note";
      } else
        K();
    });
    function K() {
      $.value = "", D.value = "", S.value = "", L.value = "", O.value = "", g.value = "navigate", y.value = "", G.value = "GET", X.value = "", H.value = "", q.value = "", x.value = "info", a.value = "", n.value = "", C.value = "", w.value = "", m.value = "", h.value = "", T.value = "", U.value = "", _.value = "", M.value = "", Z.value = "", R.value = "", ee.value = "", te.value = !1, c.value = "note";
    }
    function v() {
      l.stopEditing(), K();
    }
    function Q() {
      if (s.value)
        try {
          const W = document.querySelector(s.value);
          if (!W) return;
          const t = l.autoDetectElementInfo(W, s.value);
          t.sourceBinding && (R.value = t.sourceBinding.type || "", ee.value = t.sourceBinding.source || "", te.value = t.sourceBinding.isStatic || !1, t.sourceBinding.isStatic && !H.value && (H.value = "固定文言", x.value = "info"));
        } catch (W) {
          console.error("[DevInspector] Auto-detect failed:", W);
        }
    }
    function ce() {
      if (!s.value) return;
      const W = $.value && D.value ? {
        table: $.value,
        column: D.value,
        type: S.value || void 0,
        validation: L.value ? L.value.split(",").map((Y) => Y.trim()) : void 0,
        description: O.value || void 0
      } : void 0, t = y.value ? {
        type: g.value,
        target: y.value,
        method: g.value === "api" ? G.value : void 0,
        description: X.value || void 0
      } : void 0, i = H.value ? {
        text: H.value,
        author: q.value || void 0,
        type: x.value
      } : void 0, oe = a.value || n.value || C.value || w.value || m.value ? {
        testPath: a.value || void 0,
        figmaUrl: n.value || void 0,
        githubIssue: C.value || void 0,
        githubPr: w.value || void 0,
        relatedDocs: m.value || void 0
      } : void 0, ie = h.value || T.value || U.value || _.value || M.value || Z.value ? {
        usedStores: h.value ? h.value.split(",").map((Y) => Y.trim()) : void 0,
        usedComponents: T.value ? T.value.split(",").map((Y) => Y.trim()) : void 0,
        i18nKeys: U.value ? U.value.split(",").map((Y) => Y.trim()) : void 0,
        designTokens: _.value ? _.value.split(",").map((Y) => Y.trim()) : void 0,
        accessibility: M.value || void 0,
        responsive: Z.value || void 0
      } : void 0, ae = R.value ? {
        type: R.value,
        source: ee.value || void 0,
        isStatic: te.value
      } : void 0;
      l.setElementConfig(s.value, {
        fieldInfo: W,
        actionInfo: t,
        note: i,
        links: oe,
        devMeta: ie,
        sourceBinding: ae
      }), v();
    }
    function ne() {
      s.value && (l.deleteElementConfig(s.value), v());
    }
    const Ee = ["VARCHAR", "TEXT", "INT", "BIGINT", "BOOLEAN", "DATE", "DATETIME", "TIMESTAMP", "JSON"], _e = [
      { value: "navigate", label: "画面遷移" },
      { value: "api", label: "API呼び出し" },
      { value: "modal", label: "モーダル表示" },
      { value: "emit", label: "イベント発火" },
      { value: "function", label: "関数実行" }
    ], Pe = ["GET", "POST", "PUT", "DELETE", "PATCH"], De = [
      { value: "info", label: "情報", icon: Ne, color: "#60a5fa" },
      { value: "warning", label: "注意", icon: Le, color: "#fbbf24" },
      { value: "todo", label: "TODO", icon: Be, color: "#10b981" },
      { value: "question", label: "質問", icon: ze, color: "#a78bfa" }
    ];
    return (W, t) => (d(), z(le, { to: "body" }, [
      j.value ? (d(), r("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: me(v, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", vl, [
          e("div", pl, [
            t[28] || (t[28] = e("h3", null, "要素情報を編集", -1)),
            e("div", yl, [
              e("button", {
                onClick: Q,
                class: "di-btn-auto",
                title: "自動検出"
              }, [
                I(o(Je), { style: { width: "16px", height: "16px" } })
              ]),
              e("button", {
                onClick: v,
                class: "di-editor-close"
              }, [
                I(o(Me), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          te.value ? (d(), r("div", bl, [...t[29] || (t[29] = [
            e("span", { class: "di-static-badge" }, "固定文言", -1),
            e("span", { class: "di-static-hint" }, "このテキストはソースコードに直接記述されています", -1)
          ])])) : R.value ? (d(), r("div", ml, [
            e("span", {
              class: F(["di-binding-badge", "di-binding-" + R.value])
            }, f(R.value), 3),
            ee.value ? (d(), r("span", hl, f(ee.value), 1)) : k("", !0)
          ])) : k("", !0),
          e("div", fl, [
            e("button", {
              onClick: t[0] || (t[0] = (i) => c.value = "note"),
              class: F(["di-editor-tab", { active: c.value === "note" }]),
              style: N(c.value === "note" ? { color: "#10b981", borderColor: "#10b981", background: "rgba(16, 185, 129, 0.1)" } : {})
            }, [
              I(o(Ge), { style: { width: "12px", height: "12px" } }),
              t[30] || (t[30] = B(" メモ ", -1))
            ], 6),
            e("button", {
              onClick: t[1] || (t[1] = (i) => c.value = "field"),
              class: F(["di-editor-tab", { active: c.value === "field" }]),
              style: N(c.value === "field" ? { color: "#60a5fa", borderColor: "#60a5fa", background: "rgba(96, 165, 250, 0.1)" } : {})
            }, [
              I(o(Re), { style: { width: "12px", height: "12px" } }),
              t[31] || (t[31] = B(" データ ", -1))
            ], 6),
            e("button", {
              onClick: t[2] || (t[2] = (i) => c.value = "action"),
              class: F(["di-editor-tab", { active: c.value === "action" }]),
              style: N(c.value === "action" ? { color: "#a78bfa", borderColor: "#a78bfa", background: "rgba(167, 139, 250, 0.1)" } : {})
            }, [
              I(o(We), { style: { width: "12px", height: "12px" } }),
              t[32] || (t[32] = B(" アクション ", -1))
            ], 6),
            e("button", {
              onClick: t[3] || (t[3] = (i) => c.value = "links"),
              class: F(["di-editor-tab", { active: c.value === "links" }]),
              style: N(c.value === "links" ? { color: "#f59e0b", borderColor: "#f59e0b", background: "rgba(245, 158, 11, 0.1)" } : {})
            }, [
              I(o(Fe), { style: { width: "12px", height: "12px" } }),
              t[33] || (t[33] = B(" リンク ", -1))
            ], 6),
            e("button", {
              onClick: t[4] || (t[4] = (i) => c.value = "meta"),
              class: F(["di-editor-tab", { active: c.value === "meta" }]),
              style: N(c.value === "meta" ? { color: "#ec4899", borderColor: "#ec4899", background: "rgba(236, 72, 153, 0.1)" } : {})
            }, [
              I(o(Ye), { style: { width: "12px", height: "12px" } }),
              t[34] || (t[34] = B(" 開発情報 ", -1))
            ], 6)
          ]),
          e("div", kl, [
            c.value === "note" ? (d(), r(V, { key: 0 }, [
              e("div", gl, [
                t[35] || (t[35] = e("label", { class: "di-form-label" }, "タイプ", -1)),
                e("div", xl, [
                  (d(), r(V, null, J(De, (i) => e("button", {
                    key: i.value,
                    onClick: (oe) => x.value = i.value,
                    class: "di-note-type-btn",
                    style: N(x.value === i.value ? { color: i.color, borderColor: i.color, background: i.color + "15" } : {})
                  }, [
                    (d(), z(Se(i.icon), {
                      style: N([{ width: "16px", height: "16px" }, { color: x.value === i.value ? i.color : "#64748b" }])
                    }, null, 8, ["style"])),
                    e("span", {
                      style: N({ color: x.value === i.value ? i.color : "#94a3b8" })
                    }, f(i.label), 5)
                  ], 12, wl)), 64))
                ])
              ]),
              e("div", $l, [
                t[36] || (t[36] = e("label", { class: "di-form-label" }, "メモ内容 *", -1)),
                P(e("textarea", {
                  "onUpdate:modelValue": t[5] || (t[5] = (i) => H.value = i),
                  rows: "4",
                  placeholder: "この要素についてのメモ、説明、注意事項など...",
                  class: "di-textarea"
                }, null, 512), [
                  [A, H.value]
                ])
              ]),
              e("div", Cl, [
                t[37] || (t[37] = e("label", { class: "di-form-label" }, "記入者（オプション）", -1)),
                P(e("input", {
                  "onUpdate:modelValue": t[6] || (t[6] = (i) => q.value = i),
                  type: "text",
                  placeholder: "名前",
                  class: "di-input"
                }, null, 512), [
                  [A, q.value]
                ])
              ])
            ], 64)) : k("", !0),
            c.value === "field" ? (d(), r(V, { key: 1 }, [
              e("div", Il, [
                e("div", Ml, [
                  t[38] || (t[38] = e("label", { class: "di-form-label" }, "テーブル名 *", -1)),
                  P(e("input", {
                    "onUpdate:modelValue": t[7] || (t[7] = (i) => $.value = i),
                    type: "text",
                    placeholder: "users",
                    class: "di-input"
                  }, null, 512), [
                    [A, $.value]
                  ])
                ]),
                e("div", El, [
                  t[39] || (t[39] = e("label", { class: "di-form-label" }, "カラム名 *", -1)),
                  P(e("input", {
                    "onUpdate:modelValue": t[8] || (t[8] = (i) => D.value = i),
                    type: "text",
                    placeholder: "name",
                    class: "di-input"
                  }, null, 512), [
                    [A, D.value]
                  ])
                ])
              ]),
              e("div", _l, [
                t[41] || (t[41] = e("label", { class: "di-form-label" }, "データ型", -1)),
                P(e("select", {
                  "onUpdate:modelValue": t[9] || (t[9] = (i) => S.value = i),
                  class: "di-select"
                }, [
                  t[40] || (t[40] = e("option", { value: "" }, "選択してください", -1)),
                  (d(), r(V, null, J(Ee, (i) => e("option", {
                    key: i,
                    value: i
                  }, f(i), 9, Pl)), 64))
                ], 512), [
                  [ve, S.value]
                ])
              ]),
              e("div", Dl, [
                t[42] || (t[42] = e("label", { class: "di-form-label" }, "バリデーション (カンマ区切り)", -1)),
                P(e("input", {
                  "onUpdate:modelValue": t[10] || (t[10] = (i) => L.value = i),
                  type: "text",
                  placeholder: "required, max:255",
                  class: "di-input"
                }, null, 512), [
                  [A, L.value]
                ])
              ]),
              e("div", Tl, [
                t[43] || (t[43] = e("label", { class: "di-form-label" }, "説明", -1)),
                P(e("textarea", {
                  "onUpdate:modelValue": t[11] || (t[11] = (i) => O.value = i),
                  rows: "2",
                  placeholder: "このフィールドの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [A, O.value]
                ])
              ])
            ], 64)) : k("", !0),
            c.value === "action" ? (d(), r(V, { key: 2 }, [
              e("div", Sl, [
                t[44] || (t[44] = e("label", { class: "di-form-label" }, "アクションタイプ", -1)),
                P(e("select", {
                  "onUpdate:modelValue": t[12] || (t[12] = (i) => g.value = i),
                  class: "di-select"
                }, [
                  (d(), r(V, null, J(_e, (i) => e("option", {
                    key: i.value,
                    value: i.value
                  }, f(i.label), 9, Ul)), 64))
                ], 512), [
                  [ve, g.value]
                ])
              ]),
              g.value === "api" ? (d(), r("div", Al, [
                e("div", Vl, [
                  t[45] || (t[45] = e("label", { class: "di-form-label" }, "メソッド", -1)),
                  P(e("select", {
                    "onUpdate:modelValue": t[13] || (t[13] = (i) => G.value = i),
                    class: "di-select"
                  }, [
                    (d(), r(V, null, J(Pe, (i) => e("option", {
                      key: i,
                      value: i
                    }, f(i), 9, Ll)), 64))
                  ], 512), [
                    [ve, G.value]
                  ])
                ]),
                e("div", Bl, [
                  t[46] || (t[46] = e("label", { class: "di-form-label" }, "エンドポイント", -1)),
                  P(e("input", {
                    "onUpdate:modelValue": t[14] || (t[14] = (i) => y.value = i),
                    type: "text",
                    placeholder: "/api/tasks",
                    class: "di-input"
                  }, null, 512), [
                    [A, y.value]
                  ])
                ])
              ])) : (d(), r("div", Rl, [
                e("label", jl, f(g.value === "navigate" ? "遷移先パス" : g.value === "modal" ? "モーダル名" : g.value === "emit" ? "イベント名" : "関数名"), 1),
                P(e("input", {
                  "onUpdate:modelValue": t[15] || (t[15] = (i) => y.value = i),
                  type: "text",
                  placeholder: g.value === "navigate" ? "/tasks" : g.value === "modal" ? "ConfirmDialog" : g.value === "emit" ? "onSubmit" : "handleClick",
                  class: "di-input"
                }, null, 8, Ol), [
                  [A, y.value]
                ])
              ])),
              e("div", ql, [
                t[47] || (t[47] = e("label", { class: "di-form-label" }, "説明", -1)),
                P(e("textarea", {
                  "onUpdate:modelValue": t[16] || (t[16] = (i) => X.value = i),
                  rows: "2",
                  placeholder: "このアクションの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [A, X.value]
                ])
              ])
            ], 64)) : k("", !0),
            c.value === "links" ? (d(), r(V, { key: 3 }, [
              e("div", Hl, [
                t[48] || (t[48] = e("label", { class: "di-form-label" }, "テストファイルパス", -1)),
                P(e("input", {
                  "onUpdate:modelValue": t[17] || (t[17] = (i) => a.value = i),
                  type: "text",
                  placeholder: "src/__tests__/components/MyComponent.test.ts",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [A, a.value]
                ])
              ]),
              e("div", zl, [
                t[49] || (t[49] = e("label", { class: "di-form-label" }, "Figma URL", -1)),
                P(e("input", {
                  "onUpdate:modelValue": t[18] || (t[18] = (i) => n.value = i),
                  type: "text",
                  placeholder: "https://www.figma.com/design/...",
                  class: "di-input"
                }, null, 512), [
                  [A, n.value]
                ])
              ]),
              e("div", Nl, [
                e("div", Fl, [
                  t[50] || (t[50] = e("label", { class: "di-form-label" }, "GitHub Issue", -1)),
                  P(e("input", {
                    "onUpdate:modelValue": t[19] || (t[19] = (i) => C.value = i),
                    type: "text",
                    placeholder: "#123",
                    class: "di-input"
                  }, null, 512), [
                    [A, C.value]
                  ])
                ]),
                e("div", Gl, [
                  t[51] || (t[51] = e("label", { class: "di-form-label" }, "GitHub PR", -1)),
                  P(e("input", {
                    "onUpdate:modelValue": t[20] || (t[20] = (i) => w.value = i),
                    type: "text",
                    placeholder: "#456",
                    class: "di-input"
                  }, null, 512), [
                    [A, w.value]
                  ])
                ])
              ]),
              e("div", Xl, [
                t[52] || (t[52] = e("label", { class: "di-form-label" }, "関連ドキュメント", -1)),
                P(e("input", {
                  "onUpdate:modelValue": t[21] || (t[21] = (i) => m.value = i),
                  type: "text",
                  placeholder: "https://docs.example.com/...",
                  class: "di-input"
                }, null, 512), [
                  [A, m.value]
                ])
              ])
            ], 64)) : k("", !0),
            c.value === "meta" ? (d(), r(V, { key: 4 }, [
              e("div", Kl, [
                t[53] || (t[53] = e("label", { class: "di-form-label" }, "使用Piniaストア (カンマ区切り)", -1)),
                P(e("input", {
                  "onUpdate:modelValue": t[22] || (t[22] = (i) => h.value = i),
                  type: "text",
                  placeholder: "useUserStore, useThemeStore",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [A, h.value]
                ])
              ]),
              e("div", Yl, [
                t[54] || (t[54] = e("label", { class: "di-form-label" }, "使用コンポーネント (カンマ区切り)", -1)),
                P(e("input", {
                  "onUpdate:modelValue": t[23] || (t[23] = (i) => T.value = i),
                  type: "text",
                  placeholder: "Button, Modal, Input",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [A, T.value]
                ])
              ]),
              e("div", Zl, [
                t[55] || (t[55] = e("label", { class: "di-form-label" }, "i18nキー (カンマ区切り)", -1)),
                P(e("input", {
                  "onUpdate:modelValue": t[24] || (t[24] = (i) => U.value = i),
                  type: "text",
                  placeholder: "common.save, errors.required",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [A, U.value]
                ])
              ]),
              e("div", Jl, [
                t[56] || (t[56] = e("label", { class: "di-form-label" }, "デザイントークン (カンマ区切り)", -1)),
                P(e("input", {
                  "onUpdate:modelValue": t[25] || (t[25] = (i) => _.value = i),
                  type: "text",
                  placeholder: "primaryColor, secondaryColor",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [A, _.value]
                ])
              ]),
              e("div", Wl, [
                t[57] || (t[57] = e("label", { class: "di-form-label" }, "アクセシビリティ", -1)),
                P(e("textarea", {
                  "onUpdate:modelValue": t[26] || (t[26] = (i) => M.value = i),
                  rows: "2",
                  placeholder: "キーボード操作、スクリーンリーダー対応などのメモ...",
                  class: "di-textarea"
                }, null, 512), [
                  [A, M.value]
                ])
              ]),
              e("div", Ql, [
                t[58] || (t[58] = e("label", { class: "di-form-label" }, "レスポンシブ動作", -1)),
                P(e("textarea", {
                  "onUpdate:modelValue": t[27] || (t[27] = (i) => Z.value = i),
                  rows: "2",
                  placeholder: "モバイルでの表示変更、ブレークポイントなど...",
                  class: "di-textarea"
                }, null, 512), [
                  [A, Z.value]
                ])
              ])
            ], 64)) : k("", !0)
          ]),
          e("div", es, [
            e("button", {
              onClick: ne,
              class: "di-btn-delete"
            }, [
              I(o(Ie), { style: { width: "14px", height: "14px" } }),
              t[59] || (t[59] = B(" 削除 ", -1))
            ]),
            e("div", ts, [
              e("button", {
                onClick: v,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: ce,
                class: "di-btn-save"
              }, [
                I(o(Ke), { style: { width: "14px", height: "14px" } }),
                t[60] || (t[60] = B(" 保存 ", -1))
              ])
            ])
          ])
        ])
      ])) : k("", !0)
    ]));
  }
}), ss = /* @__PURE__ */ he(ls, [["__scopeId", "data-v-fdafa9a6"]]), os = {
  key: 0,
  "data-dev-inspector": "",
  class: "di-loading-overlay"
}, ns = { class: "di-highlight-label" }, is = {
  key: 2,
  "data-dev-inspector": "",
  class: "di-pick-banner"
}, as = ["onClick"], ds = ["onClick"], us = {
  "data-dev-inspector": "",
  class: "di-scan-banner"
}, rs = ["onClick"], cs = { class: "di-analysis-type" }, vs = {
  key: 0,
  class: "di-analysis-db"
}, ps = {
  key: 0,
  class: "di-analysis-text"
}, ys = {
  "data-dev-inspector": "",
  class: "di-analysis-banner"
}, bs = /* @__PURE__ */ ue({
  __name: "DevPickOverlay",
  setup(b) {
    const l = re(), c = p(null), $ = p(null), D = p(0), S = p(0);
    function L(x) {
      var n;
      const a = l.getElementConfig(x);
      if (!(a != null && a.sourceBinding)) {
        const C = ((n = a == null ? void 0 : a.note) == null ? void 0 : n.type) || "info";
        return {
          info: "#60a5fa",
          warning: "#fbbf24",
          todo: "#10b981",
          question: "#a78bfa"
        }[C] || "#60a5fa";
      }
      return a.sourceBinding.isStatic ? "#10b981" : a.sourceBinding.type === "v-model" ? "#8b5cf6" : a.sourceBinding.type === "api" ? "#f59e0b" : "#60a5fa";
    }
    const O = se(() => {
      var w, m;
      const x = D.value, a = S.value, n = [];
      if (!l.isEnabled) return n;
      const C = l.getConfiguredSelectors();
      for (const h of C)
        try {
          const T = document.querySelector(h);
          if (T) {
            const U = T.getBoundingClientRect(), _ = l.getElementConfig(h), M = ((w = _ == null ? void 0 : _.sourceBinding) == null ? void 0 : w.isStatic) || !1, Z = ((m = _ == null ? void 0 : _.sourceBinding) == null ? void 0 : m.type) || "";
            let R = "";
            M ? R = "固定" : Z === "v-model" ? R = "フォーム" : Z === "api" ? R = "データ" : R = "メモ", n.push({
              selector: h,
              top: `${U.top + x}px`,
              left: `${U.left + a}px`,
              width: `${U.width}px`,
              height: `${U.height}px`,
              color: L(h),
              isStatic: M,
              label: R
            });
          }
        } catch {
        }
      return n;
    }), g = se(() => {
      var C;
      const x = D.value, a = S.value, n = [];
      if (!l.isEnabled || l.scanResults.length === 0) return n;
      for (const w of l.scanResults)
        try {
          const m = document.querySelector(w.selector);
          if (m) {
            const h = m.getBoundingClientRect();
            n.push({
              selector: w.selector,
              top: `${h.top + x}px`,
              left: `${h.left + a}px`,
              width: `${h.width}px`,
              height: `${h.height}px`,
              isStatic: ((C = w.detected.sourceBinding) == null ? void 0 : C.isStatic) || !1
            });
          }
        } catch {
        }
      return n;
    }), y = se(() => {
      const x = D.value, a = S.value, n = [], C = l.analysisFilter;
      if (C === "none" || !l.isEnabled || l.analysisResults.length === 0) return n;
      for (const w of l.analysisResults) {
        if (!w.matched) continue;
        const m = w.element;
        if (C === "db-api") {
          const h = m.db && (m.db.table || m.db.column), T = m.api && m.api.endpoint;
          if (!h && !T) continue;
        } else if (C === "static") {
          if (m.type !== "static") continue;
        } else if (C === "data" && m.type !== "data")
          continue;
        try {
          const h = document.querySelector(w.selector);
          if (h) {
            const T = h.getBoundingClientRect();
            if (T.width > window.innerWidth * 0.8 || T.height > window.innerHeight * 0.5)
              continue;
            let U = "";
            m.db && (U = `${m.db.table}.${m.db.column}`);
            let _ = "";
            m.api && (_ = `${m.api.method} ${m.api.endpoint}`), n.push({
              selector: w.selector,
              top: `${T.top + x}px`,
              left: `${T.left + a}px`,
              width: `${T.width}px`,
              height: `${T.height}px`,
              type: m.type,
              text: m.text || m.binding || "",
              dbInfo: U,
              apiInfo: _
            });
          }
        } catch {
        }
      }
      return n;
    });
    function G(x) {
      if (!l.isPickMode) return;
      if (x.target.closest("[data-dev-inspector]")) {
        c.value = null, $.value = null, l.setHoveredSelector(null);
        return;
      }
      const n = document.elementFromPoint(x.clientX, x.clientY);
      if (!n || n === document.body || n === document.documentElement) {
        c.value = null, $.value = null, l.setHoveredSelector(null);
        return;
      }
      if (n.closest("[data-dev-inspector]"))
        return;
      $.value = n;
      const C = n.getBoundingClientRect();
      c.value = {
        top: `${C.top + window.scrollY}px`,
        left: `${C.left + window.scrollX}px`,
        width: `${C.width}px`,
        height: `${C.height}px`
      };
      const w = l.generateSelector(n);
      l.setHoveredSelector(w);
    }
    function X(x) {
      if (!(!l.isPickMode || x.target.closest("[data-dev-inspector]")) && (x.preventDefault(), x.stopPropagation(), $.value)) {
        const n = l.generateSelector($.value);
        l.startEditing(n), l.togglePickMode();
      }
    }
    function H(x) {
      x.key === "Escape" && l.isPickMode && l.togglePickMode();
    }
    function q() {
      D.value = window.scrollY, S.value = window.scrollX;
    }
    return Ce(() => {
      window.addEventListener("mousemove", G, !0), window.addEventListener("click", X, !0), window.addEventListener("keydown", H), window.addEventListener("scroll", q), window.addEventListener("resize", q);
    }), Ue(() => {
      window.removeEventListener("mousemove", G, !0), window.removeEventListener("click", X, !0), window.removeEventListener("keydown", H), window.removeEventListener("scroll", q), window.removeEventListener("resize", q);
    }), $e(() => l.isPickMode, (x) => {
      x || (c.value = null, $.value = null);
    }), (x, a) => (d(), z(le, { to: "body" }, [
      o(l).isInitializing ? (d(), r("div", os, [...a[2] || (a[2] = [
        e("div", { class: "di-loading-content" }, [
          e("div", { class: "di-loading-spinner" }),
          e("span", { class: "di-loading-text" }, "Developer Mode 起動中...")
        ], -1)
      ])])) : k("", !0),
      o(l).isPickMode && c.value ? (d(), r("div", {
        key: 1,
        "data-dev-inspector": "",
        class: "di-highlight",
        style: N({
          top: c.value.top,
          left: c.value.left,
          width: c.value.width,
          height: c.value.height
        })
      }, [
        e("div", ns, f(o(l).hoveredSelector), 1)
      ], 4)) : k("", !0),
      o(l).isPickMode ? (d(), r("div", is, [...a[3] || (a[3] = [
        e("span", null, "要素をクリックしてメモを追加", -1),
        e("kbd", null, "ESC", -1),
        e("span", { class: "di-pick-hint" }, "でキャンセル", -1)
      ])])) : k("", !0),
      o(l).isEnabled && !o(l).isPickMode && !o(l).isEditMode && !o(l).editingElementId && o(l).scanResults.length === 0 && o(l).analysisResults.length === 0 ? (d(!0), r(V, { key: 3 }, J(O.value, (n) => (d(), r("div", {
        key: n.selector,
        "data-dev-inspector": "",
        class: "di-annotation-box",
        style: N({
          top: n.top,
          left: n.left,
          width: n.width,
          height: n.height,
          borderColor: n.color,
          backgroundColor: n.color + "15"
        }),
        onClick: (C) => o(l).startEditing(n.selector)
      }, [
        e("div", {
          class: "di-annotation-label",
          style: N({ backgroundColor: n.color })
        }, f(n.label), 5)
      ], 12, as))), 128)) : k("", !0),
      o(l).isEnabled && !o(l).editingElementId && g.value.length > 0 && o(l).analysisResults.length === 0 ? (d(), r(V, { key: 4 }, [
        (d(!0), r(V, null, J(g.value, (n) => (d(), r("div", {
          key: "scan-" + n.selector,
          "data-dev-inspector": "",
          class: F(["di-scan-highlight", { "di-scan-static": n.isStatic }]),
          style: N({
            top: n.top,
            left: n.left,
            width: n.width,
            height: n.height
          }),
          onClick: (C) => o(l).startEditing(n.selector)
        }, [
          e("div", {
            class: F(["di-scan-label", { "di-scan-label-static": n.isStatic }])
          }, f(n.isStatic ? "固定文言" : "動的データ"), 3)
        ], 14, ds))), 128)),
        e("div", us, [
          e("span", null, f(g.value.length) + "件の要素を検出", 1),
          e("button", {
            onClick: a[0] || (a[0] = (n) => o(l).clearScanResults()),
            class: "di-scan-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : k("", !0),
      o(l).isEnabled && !o(l).editingElementId && y.value.length > 0 ? (d(), r(V, { key: 5 }, [
        (d(!0), r(V, null, J(y.value, (n) => (d(), r("div", {
          key: "analysis-" + n.selector,
          "data-dev-inspector": "",
          class: F(["di-analysis-highlight", {
            "di-analysis-static": n.type === "static",
            "di-analysis-data": n.type === "data",
            "di-analysis-form": n.type === "form",
            "di-analysis-button": n.type === "button",
            "di-analysis-link": n.type === "link"
          }]),
          style: N({
            top: n.top,
            left: n.left,
            width: n.width,
            height: n.height
          }),
          onClick: (C) => o(l).startEditing(n.selector)
        }, [
          e("div", {
            class: F(["di-analysis-label", "di-analysis-label-" + n.type])
          }, [
            e("span", cs, f(n.type === "static" ? "固定" : n.type === "data" ? "DB" : n.type), 1),
            n.dbInfo ? (d(), r("span", vs, f(n.dbInfo), 1)) : k("", !0)
          ], 2),
          n.text && n.text.length < 30 ? (d(), r("div", ps, f(n.text), 1)) : k("", !0)
        ], 14, rs))), 128)),
        e("div", ys, [
          e("span", null, "📊 分析データ: " + f(y.value.length) + "件の要素", 1),
          e("button", {
            onClick: a[1] || (a[1] = (n) => o(l).clearAnalysisResults()),
            class: "di-analysis-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : k("", !0)
    ]));
  }
}), ms = /* @__PURE__ */ he(bs, [["__scopeId", "data-v-1df4da8a"]]), hs = {
  key: 0,
  "data-dev-inspector": ""
}, fs = /* @__PURE__ */ ue({
  __name: "DevInspector",
  props: {
    storageKey: { default: "devInspector:elementConfigs" },
    enabledInProduction: { type: Boolean, default: !1 },
    initialAnnotations: {},
    analysisData: {},
    analysisDataUrl: {},
    autoLoadAnalysis: { type: Boolean },
    autoApplyAnalysis: { type: Boolean }
  },
  setup(b) {
    const l = b, c = re();
    return Ce(() => {
      c.init({
        storageKey: l.storageKey,
        enabledInProduction: l.enabledInProduction,
        initialAnnotations: l.initialAnnotations
      });
    }), ($, D) => o(c).isAvailable ? (d(), r("div", hs, [
      I(cl),
      I(ss),
      I(ms)
    ])) : k("", !0);
  }
}), xs = {
  install(b, l = {}) {
    const { autoRegister: c = !0, ...$ } = l;
    c && b.component("DevInspector", fs), b.provide("devInspectorOptions", $);
  }
};
export {
  ss as DevElementEditor,
  fs as DevInspector,
  cl as DevPanel,
  ms as DevPickOverlay,
  xs as VueDevInspector,
  xs as default,
  Cs as useDevInspector,
  re as useDevInspectorStore
};
