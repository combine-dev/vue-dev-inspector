import { h as ke, defineComponent as re, inject as De, ref as p, computed as se, openBlock as d, createElementBlock as r, Fragment as V, createBlock as F, Teleport as le, unref as s, createVNode as M, createCommentVNode as k, createElementVNode as e, normalizeClass as Z, toDisplayString as f, renderList as W, withDirectives as P, vModelText as A, normalizeStyle as G, createTextVNode as O, withModifiers as ue, watch as $e, resolveDynamicComponent as Se, vModelSelect as ye, onMounted as Ce, onUnmounted as Te } from "vue";
import { u as ce } from "./useDevInspector-DTj1MOmL.js";
import { a as ws } from "./useDevInspector-DTj1MOmL.js";
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
const Ue = (b) => b.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), _ = (b, l) => ({ size: c, strokeWidth: C = 2, absoluteStrokeWidth: D, color: T, class: L, ...H }, { attrs: x, slots: y }) => ke(
  "svg",
  {
    ...de,
    width: c || de.width,
    height: c || de.height,
    stroke: T || de.stroke,
    "stroke-width": D ? Number(C) * 24 / Number(c) : C,
    ...x,
    class: ["lucide", `lucide-${Ue(b)}`],
    ...H
  },
  [
    ...l.map((X) => ke(...X)),
    ...y.default ? [y.default()] : []
  ]
);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ae = _("AlertCircleIcon", [
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
const Ve = _("AlertTriangleIcon", [
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
const Le = _("CheckSquareIcon", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xe = _("CodeIcon", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Be = _("DatabaseIcon", [
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
const be = _("DownloadIcon", [
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
const Re = _("ExternalLinkIcon", [
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
const je = _("FileSpreadsheetIcon", [
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
const ge = _("FileTextIcon", [
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
const Oe = _("GitBranchIcon", [
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
const qe = _("GlobeIcon", [
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
const He = _("HelpCircleIcon", [
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
const ze = _("InfoIcon", [
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
const Ne = _("LinkIcon", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const me = _("Loader2Icon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fe = _("MessageSquareIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ge = _("MousePointer2Icon", [
  ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xe = _("PenLineIcon", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ke = _("SaveIcon", [
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
const fe = _("ScanIcon", [
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
const we = _("ServerIcon", [
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
const Ye = _("Settings2Icon", [
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
const Ie = _("Trash2Icon", [
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
const Ze = _("UploadIcon", [
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
const Je = _("Wand2Icon", [
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
const Me = _("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const We = _("ZapIcon", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
]);
async function Qe(b, l, c = {}) {
  var g;
  const C = await import("./xlsx-BopDBbWb.js"), { systemName: D = "System", author: T = "" } = c, L = /* @__PURE__ */ new Date(), H = `${L.getFullYear()}/${L.getMonth() + 1}/${L.getDate()}`, x = C.utils.book_new(), y = [];
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
    T,
    "",
    "作成日",
    "",
    "",
    "",
    "",
    H
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
  ]), Object.values(l).forEach((a, o) => {
    var R, U, E;
    const h = a.id;
    let w = "", m = "", $ = "";
    if ((R = a.note) != null && R.text && (w = a.note.text), a.fieldInfo && (w += w ? `
` : "", w += `DB: ${a.fieldInfo.table}.${a.fieldInfo.column}`, a.fieldInfo.type && (w += ` (${a.fieldInfo.type})`), a.fieldInfo.description && (w += `
${a.fieldInfo.description}`)), a.actionInfo && ($ = `[${{
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行"
    }[a.actionInfo.type] || a.actionInfo.type}]`, a.actionInfo.target && ($ += ` ${a.actionInfo.method || ""} ${a.actionInfo.target}`), a.actionInfo.description && ($ += `
${a.actionInfo.description}`)), a.links) {
      const I = [];
      a.links.testPath && I.push(`テスト: ${a.links.testPath}`), a.links.figmaUrl && I.push(`Figma: ${a.links.figmaUrl}`), a.links.githubIssue && I.push(`Issue: ${a.links.githubIssue}`), a.links.githubPr && I.push(`PR: ${a.links.githubPr}`), I.length > 0 && ($ += $ ? `

` : "", $ += I.join(`
`));
    }
    if (a.devMeta) {
      const I = [];
      (U = a.devMeta.usedStores) != null && U.length && I.push(`Store: ${a.devMeta.usedStores.join(", ")}`), (E = a.devMeta.usedComponents) != null && E.length && I.push(`Components: ${a.devMeta.usedComponents.join(", ")}`), a.devMeta.accessibility && I.push(`A11y: ${a.devMeta.accessibility}`), a.devMeta.responsive && I.push(`Responsive: ${a.devMeta.responsive}`), I.length > 0 && ($ += $ ? `

` : "", $ += `[開発情報]
` + I.join(`
`));
    }
    y.push([
      "",
      o + 1,
      "",
      h,
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
      $
    ]);
  });
  const K = C.utils.aoa_to_sheet(y);
  K["!cols"] = [
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
  ], C.utils.book_append_sheet(x, K, "画面設計書");
  const z = `画面仕様書_${((g = b == null ? void 0 : b.name) == null ? void 0 : g.replace(/[/\\?%*:|"<>]/g, "-")) || "screen"}_${H.replace(/\//g, "")}.xlsx`;
  return C.writeFile(x, z), z;
}
const et = {
  key: 0,
  class: "di-panel",
  "data-dev-inspector": ""
}, tt = { class: "di-header" }, lt = { class: "di-header-title" }, st = { class: "di-edit-section" }, nt = { class: "di-scan-section" }, ot = ["disabled"], it = ["disabled"], at = { class: "di-scan-section" }, dt = ["disabled", "title"], ut = {
  key: 0,
  class: "di-scan-results"
}, rt = {
  key: 0,
  class: "di-scan-result-item"
}, ct = { class: "di-scan-result-count" }, vt = { class: "di-scan-result-count" }, pt = { class: "di-analysis-section" }, yt = { class: "di-analysis-header" }, bt = { class: "di-analysis-input" }, mt = { class: "di-analysis-buttons" }, ft = ["disabled"], ht = ["disabled"], kt = {
  key: 0,
  class: "di-analysis-error"
}, xt = {
  key: 1,
  class: "di-analysis-status"
}, gt = { class: "di-analysis-count" }, wt = {
  key: 2,
  class: "di-analysis-filter"
}, $t = { class: "di-filter-buttons" }, Ct = ["onClick"], It = { class: "di-content" }, Mt = { class: "di-section" }, _t = { class: "di-screen-name" }, Et = { class: "di-screen-desc" }, Pt = { class: "di-card" }, Dt = { class: "di-card-label" }, St = { class: "di-code-blue" }, Tt = {
  key: 0,
  class: "di-card"
}, Ut = { class: "di-card-label" }, At = ["href"], Vt = {
  key: 1,
  class: "di-card"
}, Lt = { class: "di-card-label" }, Bt = { class: "di-api-list" }, Rt = { class: "di-api-info" }, jt = { class: "di-api-endpoint" }, Ot = { class: "di-api-desc" }, qt = {
  key: 2,
  class: "di-card"
}, Ht = { class: "di-card-label" }, zt = { class: "di-notes-list" }, Nt = {
  key: 1,
  class: "di-no-spec"
}, Ft = { class: "di-card" }, Gt = { class: "di-card-header" }, Xt = { class: "di-card-label" }, Kt = { class: "di-count-badge" }, Yt = {
  key: 0,
  class: "di-export-buttons"
}, Zt = {
  key: 1,
  class: "di-export-hint"
}, Jt = { class: "di-action-buttons" }, Wt = {
  key: 0,
  class: "di-indicator",
  "data-dev-inspector": ""
}, Qt = { class: "di-modal" }, el = ["value"], tl = { class: "di-modal-actions" }, ll = { class: "di-modal" }, sl = { class: "di-file-drop" }, nl = {
  key: 0,
  class: "di-error"
}, ol = { class: "di-modal-actions" }, il = ["disabled"], al = /* @__PURE__ */ re({
  __name: "DevPanel",
  setup(b) {
    const l = ce(), c = De("router", null), C = p(!1), D = p(!1), T = p(""), L = p(""), H = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, x = se(() => l.currentScreenSpec), y = se(() => Object.keys(l.elementConfigs).length);
    function X() {
      const S = l.exportConfigs();
      navigator.clipboard.writeText(S), C.value = !1;
    }
    function K() {
      const S = l.exportConfigs(), n = new Blob([S], { type: "application/json" }), q = URL.createObjectURL(n), v = document.createElement("a");
      v.href = q, v.download = "dev-mode-configs.json", v.click(), URL.revokeObjectURL(q), C.value = !1;
    }
    function N() {
      l.downloadAnnotations();
    }
    async function z() {
      try {
        await Qe(
          l.currentScreenSpec,
          l.elementConfigs,
          { systemName: "System" }
        );
      } catch (S) {
        console.error("Failed to export xlsx:", S), alert("xlsx export failed. Make sure xlsx package is installed.");
      }
    }
    function g() {
      try {
        l.importConfigs(T.value), T.value = "", L.value = "", D.value = !1;
      } catch {
        L.value = "JSONの形式が正しくありません";
      }
    }
    function a(S) {
      var ee;
      const q = (ee = S.target.files) == null ? void 0 : ee[0];
      if (!q) return;
      const v = new FileReader();
      v.onload = (pe) => {
        var oe;
        T.value = (oe = pe.target) == null ? void 0 : oe.result;
      }, v.readAsText(q);
    }
    function o() {
      confirm("すべての要素設定を削除しますか？") && l.clearAllConfigs();
    }
    const h = p(0), w = p(!1), m = p([]);
    async function $(S = !1) {
      w.value = !0, h.value = await l.scanCurrentPage({ rescan: S });
    }
    async function R() {
      if (!c) {
        alert("Vue Routerが見つかりません。全ページスキャンにはVue Routerが必要です。");
        return;
      }
      confirm("全ページをスキャンします。ページ遷移が発生しますがよろしいですか？") && (w.value = !0, m.value = await l.scanAllPages(c));
    }
    const U = p("/dev-inspector-analysis.json"), E = p(!1), I = p(""), j = p(0), B = [
      { value: "all", label: "すべて" },
      { value: "db-api", label: "DB/API" },
      { value: "static", label: "固定文言" },
      { value: "data", label: "動的データ" },
      { value: "other", label: "その他" },
      { value: "none", label: "非表示" }
    ];
    async function J() {
      E.value = !0, I.value = "";
      try {
        if (await l.loadAnalysisData(U.value), l.analysisData) {
          const S = Object.values(l.analysisData.components).reduce((n, q) => n + q.elements.length, 0);
          alert(`分析データを読み込みました（${Object.keys(l.analysisData.components).length}コンポーネント、${S}要素）`);
        } else
          I.value = "分析データの読み込みに失敗しました";
      } catch (S) {
        I.value = `読み込みエラー: ${S}`;
      } finally {
        E.value = !1;
      }
    }
    async function te() {
      if (!l.analysisData) {
        alert("先に分析データを読み込んでください");
        return;
      }
      j.value = await l.applyAnalysisToPage();
    }
    async function ve() {
      l.clearHiddenSelectors(), l.analysisData && await l.applyAnalysisToPage();
    }
    return (S, n) => {
      var q;
      return d(), r(V, null, [
        (d(), F(le, { to: "body" }, [
          s(l).isEnabled && !s(l).isPanelOpen ? (d(), r("button", {
            key: 0,
            onClick: n[0] || (n[0] = //@ts-ignore
            (...v) => s(l).openPanel && s(l).openPanel(...v)),
            class: "di-fab",
            title: "画面仕様を表示",
            "data-dev-inspector": ""
          }, [
            M(s(ge), { style: { width: "20px", height: "20px" } })
          ])) : k("", !0)
        ])),
        (d(), F(le, { to: "body" }, [
          s(l).isEnabled && s(l).isPanelOpen ? (d(), r("div", et, [
            e("div", tt, [
              e("div", lt, [
                M(s(xe), { style: { width: "20px", height: "20px", color: "#60a5fa" } }),
                n[14] || (n[14] = e("span", null, "Developer Mode", -1))
              ]),
              e("button", {
                onClick: n[1] || (n[1] = //@ts-ignore
                (...v) => s(l).closePanel && s(l).closePanel(...v)),
                class: "di-close-btn"
              }, [
                M(s(Me), { style: { width: "20px", height: "20px" } })
              ])
            ]),
            e("div", st, [
              e("button", {
                onClick: n[2] || (n[2] = //@ts-ignore
                (...v) => s(l).togglePickMode && s(l).togglePickMode(...v)),
                class: Z(["di-pick-btn", { active: s(l).isPickMode }])
              }, [
                M(s(Ge), { style: { width: "16px", height: "16px" } }),
                e("span", null, f(s(l).isPickMode ? "要素選択中..." : "任意の要素にメモを追加"), 1)
              ], 2),
              e("div", nt, [
                e("button", {
                  onClick: n[3] || (n[3] = (v) => $(!1)),
                  class: "di-scan-btn",
                  disabled: s(l).isScanning,
                  title: "新規要素のみスキャン"
                }, [
                  s(l).isScanning && !s(l).currentScanPage ? (d(), F(s(me), {
                    key: 0,
                    class: "di-spin",
                    style: { width: "16px", height: "16px" }
                  })) : (d(), F(s(fe), {
                    key: 1,
                    style: { width: "16px", height: "16px" }
                  })),
                  e("span", null, f(s(l).isScanning && !s(l).currentScanPage ? `${s(l).scanProgress}%` : "スキャン"), 1)
                ], 8, ot),
                e("button", {
                  onClick: n[4] || (n[4] = (v) => $(!0)),
                  class: "di-scan-btn di-scan-btn-rescan",
                  disabled: s(l).isScanning,
                  title: "既存の設定をクリアして再スキャン"
                }, [
                  M(s(fe), { style: { width: "16px", height: "16px" } }),
                  n[15] || (n[15] = e("span", null, "再スキャン", -1))
                ], 8, it)
              ]),
              e("div", at, [
                e("button", {
                  onClick: R,
                  class: "di-scan-btn di-scan-btn-all",
                  disabled: s(l).isScanning,
                  title: s(c) ? "全ページをスキャン" : "Vue Routerが必要です"
                }, [
                  s(l).isScanning && s(l).currentScanPage ? (d(), F(s(me), {
                    key: 0,
                    class: "di-spin",
                    style: { width: "16px", height: "16px" }
                  })) : (d(), F(s(qe), {
                    key: 1,
                    style: { width: "16px", height: "16px" }
                  })),
                  e("span", null, f(s(l).currentScanPage ? `${s(l).currentScanPage}` : "全ページスキャン"), 1)
                ], 8, dt)
              ]),
              w.value && (h.value > 0 || m.value.length > 0) ? (d(), r("div", ut, [
                h.value > 0 ? (d(), r("div", rt, [
                  e("span", ct, f(h.value), 1),
                  n[16] || (n[16] = e("span", null, "件の要素を検出・登録しました", -1))
                ])) : k("", !0),
                (d(!0), r(V, null, W(m.value, (v) => (d(), r("div", {
                  key: v.page,
                  class: "di-scan-result-item"
                }, [
                  e("code", null, f(v.page), 1),
                  e("span", vt, f(v.count), 1)
                ]))), 128)),
                e("button", {
                  onClick: n[5] || (n[5] = (v) => {
                    w.value = !1, m.value = [];
                  }),
                  class: "di-scan-close"
                }, " 閉じる ")
              ])) : k("", !0),
              e("div", pt, [
                e("div", yt, [
                  M(s(we), { style: { width: "16px", height: "16px", color: "#3b82f6" } }),
                  n[17] || (n[17] = e("span", null, "CLIソース解析", -1))
                ]),
                e("div", bt, [
                  P(e("input", {
                    "onUpdate:modelValue": n[6] || (n[6] = (v) => U.value = v),
                    type: "text",
                    class: "di-analysis-url",
                    placeholder: "/dev-inspector-analysis.json"
                  }, null, 512), [
                    [A, U.value]
                  ])
                ]),
                e("div", mt, [
                  e("button", {
                    onClick: J,
                    class: "di-analysis-btn",
                    disabled: E.value
                  }, [
                    E.value ? (d(), F(s(me), {
                      key: 0,
                      class: "di-spin",
                      style: { width: "14px", height: "14px" }
                    })) : (d(), F(s(be), {
                      key: 1,
                      style: { width: "14px", height: "14px" }
                    })),
                    n[18] || (n[18] = e("span", null, "読み込み", -1))
                  ], 8, ft),
                  e("button", {
                    onClick: te,
                    class: "di-analysis-btn di-analysis-btn-apply",
                    disabled: !s(l).analysisData
                  }, [
                    M(s(fe), { style: { width: "14px", height: "14px" } }),
                    n[19] || (n[19] = e("span", null, "ページに適用", -1))
                  ], 8, ht)
                ]),
                I.value ? (d(), r("div", kt, f(I.value), 1)) : k("", !0),
                s(l).analysisResults.length > 0 ? (d(), r("div", xt, [
                  e("span", gt, f(s(l).analysisResults.filter((v) => v.matched).length), 1),
                  e("span", null, "/ " + f(s(l).analysisResults.length) + " 要素がマッチ", 1)
                ])) : k("", !0),
                s(l).analysisResults.length > 0 ? (d(), r("div", wt, [
                  n[20] || (n[20] = e("span", { class: "di-filter-label" }, "表示フィルター:", -1)),
                  e("div", $t, [
                    (d(), r(V, null, W(B, (v) => e("button", {
                      key: v.value,
                      onClick: (ee) => s(l).analysisFilter = v.value,
                      class: Z(["di-filter-btn", { active: s(l).analysisFilter === v.value }])
                    }, f(v.label), 11, Ct)), 64))
                  ]),
                  s(l).hiddenAnalysisSelectors.size > 0 ? (d(), r("button", {
                    key: 0,
                    onClick: ve,
                    class: "di-restore-btn"
                  }, " 非表示 (" + f(s(l).hiddenAnalysisSelectors.size) + ") をリセット ", 1)) : k("", !0)
                ])) : k("", !0)
              ])
            ]),
            e("div", It, [
              x.value ? (d(), r(V, { key: 0 }, [
                e("div", Mt, [
                  e("h2", _t, f(x.value.name), 1),
                  e("p", Et, f(x.value.description), 1)
                ]),
                e("div", Pt, [
                  e("div", Dt, [
                    M(s(xe), { style: { width: "16px", height: "16px" } }),
                    n[21] || (n[21] = e("span", null, "Component Path", -1))
                  ]),
                  e("code", St, f(x.value.componentPath), 1)
                ]),
                x.value.figmaUrl ? (d(), r("div", Tt, [
                  e("div", Ut, [
                    M(s(Re), { style: { width: "16px", height: "16px" } }),
                    n[22] || (n[22] = e("span", null, "Figma Design", -1))
                  ]),
                  e("a", {
                    href: x.value.figmaUrl,
                    target: "_blank",
                    class: "di-link-purple"
                  }, f(x.value.figmaUrl), 9, At)
                ])) : k("", !0),
                x.value.apis.length ? (d(), r("div", Vt, [
                  e("div", Lt, [
                    M(s(we), { style: { width: "16px", height: "16px" } }),
                    n[23] || (n[23] = e("span", null, "API Endpoints", -1))
                  ]),
                  e("div", Bt, [
                    (d(!0), r(V, null, W(x.value.apis, (v, ee) => (d(), r("div", {
                      key: ee,
                      class: "di-api-item"
                    }, [
                      e("span", {
                        class: "di-method-badge",
                        style: G({ backgroundColor: H[v.method] + "20", color: H[v.method] })
                      }, f(v.method), 5),
                      e("div", Rt, [
                        e("code", jt, f(v.endpoint), 1),
                        e("p", Ot, f(v.description), 1)
                      ])
                    ]))), 128))
                  ])
                ])) : k("", !0),
                (q = x.value.notes) != null && q.length ? (d(), r("div", qt, [
                  e("div", Ht, [
                    M(s(Ae), { style: { width: "16px", height: "16px" } }),
                    n[24] || (n[24] = e("span", null, "Notes", -1))
                  ]),
                  e("ul", zt, [
                    (d(!0), r(V, null, W(x.value.notes, (v, ee) => (d(), r("li", {
                      key: ee,
                      class: "di-note-item"
                    }, [
                      n[25] || (n[25] = e("span", { class: "di-bullet" }, "•", -1)),
                      e("span", null, f(v), 1)
                    ]))), 128))
                  ])
                ])) : k("", !0)
              ], 64)) : (d(), r("div", Nt, [
                M(s(ge), { style: { width: "48px", height: "48px", color: "#334155" } }),
                n[26] || (n[26] = e("p", null, [
                  O("この画面の仕様情報は"),
                  e("br"),
                  O("まだ登録されていません")
                ], -1))
              ])),
              e("div", Ft, [
                e("div", Gt, [
                  e("div", Xt, [
                    M(s(Xe), { style: { width: "16px", height: "16px" } }),
                    n[27] || (n[27] = e("span", null, "登録済み要素", -1)),
                    e("span", Kt, f(y.value), 1)
                  ])
                ]),
                y.value > 0 ? (d(), r("div", Yt, [
                  e("button", {
                    onClick: N,
                    class: "di-btn-green"
                  }, [
                    M(s(Oe), { style: { width: "16px", height: "16px" } }),
                    n[28] || (n[28] = O(" Git管理用に保存 ", -1))
                  ]),
                  e("button", {
                    onClick: z,
                    class: "di-btn-blue"
                  }, [
                    M(s(je), { style: { width: "16px", height: "16px" } }),
                    n[29] || (n[29] = O(" 画面仕様書 (xlsx) 出力 ", -1))
                  ])
                ])) : k("", !0),
                y.value > 0 ? (d(), r("p", Zt, [...n[30] || (n[30] = [
                  O(" JSON: ", -1),
                  e("code", null, "dev-annotations.json", -1),
                  O(" に配置してcommit ", -1)
                ])])) : k("", !0),
                e("div", Jt, [
                  e("button", {
                    onClick: n[7] || (n[7] = (v) => C.value = !0),
                    class: "di-btn-small"
                  }, [
                    M(s(be), { style: { width: "14px", height: "14px" } }),
                    n[31] || (n[31] = O(" エクスポート ", -1))
                  ]),
                  e("button", {
                    onClick: n[8] || (n[8] = (v) => D.value = !0),
                    class: "di-btn-small"
                  }, [
                    M(s(Ze), { style: { width: "14px", height: "14px" } }),
                    n[32] || (n[32] = O(" インポート ", -1))
                  ]),
                  y.value > 0 ? (d(), r("button", {
                    key: 0,
                    onClick: o,
                    class: "di-btn-small di-btn-danger"
                  }, [
                    M(s(Ie), { style: { width: "14px", height: "14px" } }),
                    n[33] || (n[33] = O(" 全削除 ", -1))
                  ])) : k("", !0)
                ])
              ])
            ]),
            n[34] || (n[34] = e("div", { class: "di-footer" }, [
              e("kbd", null, "Ctrl"),
              e("span", null, "+"),
              e("kbd", null, "Shift"),
              e("span", null, "+"),
              e("kbd", null, "D"),
              e("span", { class: "di-footer-text" }, "で開発者モード切替")
            ], -1))
          ])) : k("", !0)
        ])),
        (d(), F(le, { to: "body" }, [
          s(l).isEnabled ? (d(), r("div", Wt, [...n[35] || (n[35] = [
            e("span", { class: "di-indicator-dot" }, null, -1),
            O(" Developer Mode ", -1)
          ])])) : k("", !0)
        ])),
        (d(), F(le, { to: "body" }, [
          C.value ? (d(), r("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: n[10] || (n[10] = ue((v) => C.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", Qt, [
              n[37] || (n[37] = e("h3", { class: "di-modal-title" }, "設定をエクスポート", -1)),
              e("textarea", {
                readonly: "",
                value: s(l).exportConfigs(),
                class: "di-modal-textarea"
              }, null, 8, el),
              e("div", tl, [
                e("button", {
                  onClick: n[9] || (n[9] = (v) => C.value = !1),
                  class: "di-btn-small"
                }, "閉じる"),
                e("button", {
                  onClick: K,
                  class: "di-btn-small di-btn-gray"
                }, [
                  M(s(be), { style: { width: "14px", height: "14px" } }),
                  n[36] || (n[36] = O(" ファイル保存 ", -1))
                ]),
                e("button", {
                  onClick: X,
                  class: "di-btn-small di-btn-primary"
                }, "コピー")
              ])
            ])
          ])) : k("", !0)
        ])),
        (d(), F(le, { to: "body" }, [
          D.value ? (d(), r("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: n[13] || (n[13] = ue((v) => D.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", ll, [
              n[39] || (n[39] = e("h3", { class: "di-modal-title" }, "設定をインポート", -1)),
              e("label", sl, [
                e("input", {
                  type: "file",
                  accept: ".json",
                  onChange: a
                }, null, 32),
                n[38] || (n[38] = e("span", null, "JSONファイルをドラッグまたはクリック", -1))
              ]),
              P(e("textarea", {
                "onUpdate:modelValue": n[11] || (n[11] = (v) => T.value = v),
                placeholder: "またはJSONを直接貼り付け...",
                class: "di-modal-textarea di-modal-textarea-input"
              }, null, 512), [
                [A, T.value]
              ]),
              L.value ? (d(), r("p", nl, f(L.value), 1)) : k("", !0),
              e("div", ol, [
                e("button", {
                  onClick: n[12] || (n[12] = (v) => {
                    D.value = !1, T.value = "", L.value = "";
                  }),
                  class: "di-btn-small"
                }, " キャンセル "),
                e("button", {
                  onClick: g,
                  disabled: !T.value,
                  class: "di-btn-small di-btn-primary"
                }, " インポート ", 8, il)
              ])
            ])
          ])) : k("", !0)
        ]))
      ], 64);
    };
  }
}), he = (b, l) => {
  const c = b.__vccOpts || b;
  for (const [C, D] of l)
    c[C] = D;
  return c;
}, dl = /* @__PURE__ */ he(al, [["__scopeId", "data-v-9f1604f5"]]), ul = { class: "di-editor-modal" }, rl = { class: "di-editor-header" }, cl = { class: "di-header-actions" }, vl = {
  key: 0,
  class: "di-static-indicator"
}, pl = {
  key: 1,
  class: "di-binding-indicator"
}, yl = {
  key: 0,
  class: "di-binding-source"
}, bl = { class: "di-editor-tabs" }, ml = { class: "di-editor-content" }, fl = { class: "di-form-group" }, hl = { class: "di-note-types" }, kl = ["onClick"], xl = { class: "di-form-group" }, gl = { class: "di-form-group" }, wl = { class: "di-form-row" }, $l = { class: "di-form-group" }, Cl = { class: "di-form-group" }, Il = { class: "di-form-group" }, Ml = ["value"], _l = { class: "di-form-group" }, El = { class: "di-form-group" }, Pl = { class: "di-form-group" }, Dl = ["value"], Sl = {
  key: 0,
  class: "di-form-row"
}, Tl = {
  class: "di-form-group",
  style: { flex: "0 0 100px" }
}, Ul = ["value"], Al = {
  class: "di-form-group",
  style: { flex: "1" }
}, Vl = {
  key: 1,
  class: "di-form-group"
}, Ll = { class: "di-form-label" }, Bl = ["placeholder"], Rl = { class: "di-form-group" }, jl = { class: "di-form-group" }, Ol = { class: "di-form-group" }, ql = { class: "di-form-row" }, Hl = { class: "di-form-group" }, zl = { class: "di-form-group" }, Nl = { class: "di-form-group" }, Fl = { class: "di-form-group" }, Gl = { class: "di-form-group" }, Xl = { class: "di-form-group" }, Kl = { class: "di-form-group" }, Yl = { class: "di-form-group" }, Zl = { class: "di-form-group" }, Jl = { class: "di-editor-footer" }, Wl = { class: "di-editor-actions" }, Ql = /* @__PURE__ */ re({
  __name: "DevElementEditor",
  setup(b) {
    const l = ce(), c = p("note"), C = p(""), D = p(""), T = p(""), L = p(""), H = p(""), x = p("navigate"), y = p(""), X = p("GET"), K = p(""), N = p(""), z = p(""), g = p("info"), a = p(""), o = p(""), h = p(""), w = p(""), m = p(""), $ = p(""), R = p(""), U = p(""), E = p(""), I = p(""), j = p(""), B = p(""), J = p(""), te = p(!1), ve = se(() => l.editingElementId !== null), S = se(() => l.editingElementId);
    $e(S, (Q) => {
      var t, i, ne, ie, ae, Y;
      if (Q) {
        const u = l.getElementConfig(Q);
        u != null && u.fieldInfo && (C.value = u.fieldInfo.table || "", D.value = u.fieldInfo.column || "", T.value = u.fieldInfo.type || "", L.value = ((t = u.fieldInfo.validation) == null ? void 0 : t.join(", ")) || "", H.value = u.fieldInfo.description || ""), u != null && u.actionInfo && (x.value = u.actionInfo.type || "navigate", y.value = u.actionInfo.target || "", X.value = u.actionInfo.method || "GET", K.value = u.actionInfo.description || ""), u != null && u.note && (N.value = u.note.text || "", z.value = u.note.author || "", g.value = u.note.type || "info"), u != null && u.links && (a.value = u.links.testPath || "", o.value = u.links.figmaUrl || "", h.value = u.links.githubIssue || "", w.value = u.links.githubPr || "", m.value = u.links.relatedDocs || ""), u != null && u.devMeta && ($.value = ((i = u.devMeta.usedStores) == null ? void 0 : i.join(", ")) || "", R.value = ((ne = u.devMeta.usedComponents) == null ? void 0 : ne.join(", ")) || "", U.value = ((ie = u.devMeta.i18nKeys) == null ? void 0 : ie.join(", ")) || "", E.value = ((ae = u.devMeta.designTokens) == null ? void 0 : ae.join(", ")) || "", I.value = u.devMeta.accessibility || "", j.value = u.devMeta.responsive || ""), u != null && u.sourceBinding && (B.value = u.sourceBinding.type || "", J.value = u.sourceBinding.source || "", te.value = u.sourceBinding.isStatic || !1), (Y = u == null ? void 0 : u.note) != null && Y.text ? c.value = "note" : u != null && u.fieldInfo ? c.value = "field" : u != null && u.actionInfo ? c.value = "action" : u != null && u.links ? c.value = "links" : u != null && u.devMeta ? c.value = "meta" : c.value = "note";
      } else
        n();
    });
    function n() {
      C.value = "", D.value = "", T.value = "", L.value = "", H.value = "", x.value = "navigate", y.value = "", X.value = "GET", K.value = "", N.value = "", z.value = "", g.value = "info", a.value = "", o.value = "", h.value = "", w.value = "", m.value = "", $.value = "", R.value = "", U.value = "", E.value = "", I.value = "", j.value = "", B.value = "", J.value = "", te.value = !1, c.value = "note";
    }
    function q() {
      l.stopEditing(), n();
    }
    function v() {
      if (S.value)
        try {
          const Q = document.querySelector(S.value);
          if (!Q) return;
          const t = l.autoDetectElementInfo(Q, S.value);
          t.sourceBinding && (B.value = t.sourceBinding.type || "", J.value = t.sourceBinding.source || "", te.value = t.sourceBinding.isStatic || !1, t.sourceBinding.isStatic && !N.value && (N.value = "固定文言", g.value = "info"));
        } catch (Q) {
          console.error("[DevInspector] Auto-detect failed:", Q);
        }
    }
    function ee() {
      if (!S.value) return;
      const Q = C.value && D.value ? {
        table: C.value,
        column: D.value,
        type: T.value || void 0,
        validation: L.value ? L.value.split(",").map((Y) => Y.trim()) : void 0,
        description: H.value || void 0
      } : void 0, t = y.value ? {
        type: x.value,
        target: y.value,
        method: x.value === "api" ? X.value : void 0,
        description: K.value || void 0
      } : void 0, i = N.value ? {
        text: N.value,
        author: z.value || void 0,
        type: g.value
      } : void 0, ne = a.value || o.value || h.value || w.value || m.value ? {
        testPath: a.value || void 0,
        figmaUrl: o.value || void 0,
        githubIssue: h.value || void 0,
        githubPr: w.value || void 0,
        relatedDocs: m.value || void 0
      } : void 0, ie = $.value || R.value || U.value || E.value || I.value || j.value ? {
        usedStores: $.value ? $.value.split(",").map((Y) => Y.trim()) : void 0,
        usedComponents: R.value ? R.value.split(",").map((Y) => Y.trim()) : void 0,
        i18nKeys: U.value ? U.value.split(",").map((Y) => Y.trim()) : void 0,
        designTokens: E.value ? E.value.split(",").map((Y) => Y.trim()) : void 0,
        accessibility: I.value || void 0,
        responsive: j.value || void 0
      } : void 0, ae = B.value ? {
        type: B.value,
        source: J.value || void 0,
        isStatic: te.value
      } : void 0;
      l.setElementConfig(S.value, {
        fieldInfo: Q,
        actionInfo: t,
        note: i,
        links: ne,
        devMeta: ie,
        sourceBinding: ae
      }), q();
    }
    function pe() {
      S.value && (l.deleteElementConfig(S.value), q());
    }
    const oe = ["VARCHAR", "TEXT", "INT", "BIGINT", "BOOLEAN", "DATE", "DATETIME", "TIMESTAMP", "JSON"], _e = [
      { value: "navigate", label: "画面遷移" },
      { value: "api", label: "API呼び出し" },
      { value: "modal", label: "モーダル表示" },
      { value: "emit", label: "イベント発火" },
      { value: "function", label: "関数実行" }
    ], Ee = ["GET", "POST", "PUT", "DELETE", "PATCH"], Pe = [
      { value: "info", label: "情報", icon: ze, color: "#60a5fa" },
      { value: "warning", label: "注意", icon: Ve, color: "#fbbf24" },
      { value: "todo", label: "TODO", icon: Le, color: "#10b981" },
      { value: "question", label: "質問", icon: He, color: "#a78bfa" }
    ];
    return (Q, t) => (d(), F(le, { to: "body" }, [
      ve.value ? (d(), r("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: ue(q, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", ul, [
          e("div", rl, [
            t[28] || (t[28] = e("h3", null, "要素情報を編集", -1)),
            e("div", cl, [
              e("button", {
                onClick: v,
                class: "di-btn-auto",
                title: "自動検出"
              }, [
                M(s(Je), { style: { width: "16px", height: "16px" } })
              ]),
              e("button", {
                onClick: q,
                class: "di-editor-close"
              }, [
                M(s(Me), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          te.value ? (d(), r("div", vl, [...t[29] || (t[29] = [
            e("span", { class: "di-static-badge" }, "固定文言", -1),
            e("span", { class: "di-static-hint" }, "このテキストはソースコードに直接記述されています", -1)
          ])])) : B.value ? (d(), r("div", pl, [
            e("span", {
              class: Z(["di-binding-badge", "di-binding-" + B.value])
            }, f(B.value), 3),
            J.value ? (d(), r("span", yl, f(J.value), 1)) : k("", !0)
          ])) : k("", !0),
          e("div", bl, [
            e("button", {
              onClick: t[0] || (t[0] = (i) => c.value = "note"),
              class: Z(["di-editor-tab", { active: c.value === "note" }]),
              style: G(c.value === "note" ? { color: "#10b981", borderColor: "#10b981", background: "rgba(16, 185, 129, 0.1)" } : {})
            }, [
              M(s(Fe), { style: { width: "12px", height: "12px" } }),
              t[30] || (t[30] = O(" メモ ", -1))
            ], 6),
            e("button", {
              onClick: t[1] || (t[1] = (i) => c.value = "field"),
              class: Z(["di-editor-tab", { active: c.value === "field" }]),
              style: G(c.value === "field" ? { color: "#60a5fa", borderColor: "#60a5fa", background: "rgba(96, 165, 250, 0.1)" } : {})
            }, [
              M(s(Be), { style: { width: "12px", height: "12px" } }),
              t[31] || (t[31] = O(" データ ", -1))
            ], 6),
            e("button", {
              onClick: t[2] || (t[2] = (i) => c.value = "action"),
              class: Z(["di-editor-tab", { active: c.value === "action" }]),
              style: G(c.value === "action" ? { color: "#a78bfa", borderColor: "#a78bfa", background: "rgba(167, 139, 250, 0.1)" } : {})
            }, [
              M(s(We), { style: { width: "12px", height: "12px" } }),
              t[32] || (t[32] = O(" アクション ", -1))
            ], 6),
            e("button", {
              onClick: t[3] || (t[3] = (i) => c.value = "links"),
              class: Z(["di-editor-tab", { active: c.value === "links" }]),
              style: G(c.value === "links" ? { color: "#f59e0b", borderColor: "#f59e0b", background: "rgba(245, 158, 11, 0.1)" } : {})
            }, [
              M(s(Ne), { style: { width: "12px", height: "12px" } }),
              t[33] || (t[33] = O(" リンク ", -1))
            ], 6),
            e("button", {
              onClick: t[4] || (t[4] = (i) => c.value = "meta"),
              class: Z(["di-editor-tab", { active: c.value === "meta" }]),
              style: G(c.value === "meta" ? { color: "#ec4899", borderColor: "#ec4899", background: "rgba(236, 72, 153, 0.1)" } : {})
            }, [
              M(s(Ye), { style: { width: "12px", height: "12px" } }),
              t[34] || (t[34] = O(" 開発情報 ", -1))
            ], 6)
          ]),
          e("div", ml, [
            c.value === "note" ? (d(), r(V, { key: 0 }, [
              e("div", fl, [
                t[35] || (t[35] = e("label", { class: "di-form-label" }, "タイプ", -1)),
                e("div", hl, [
                  (d(), r(V, null, W(Pe, (i) => e("button", {
                    key: i.value,
                    onClick: (ne) => g.value = i.value,
                    class: "di-note-type-btn",
                    style: G(g.value === i.value ? { color: i.color, borderColor: i.color, background: i.color + "15" } : {})
                  }, [
                    (d(), F(Se(i.icon), {
                      style: G([{ width: "16px", height: "16px" }, { color: g.value === i.value ? i.color : "#64748b" }])
                    }, null, 8, ["style"])),
                    e("span", {
                      style: G({ color: g.value === i.value ? i.color : "#94a3b8" })
                    }, f(i.label), 5)
                  ], 12, kl)), 64))
                ])
              ]),
              e("div", xl, [
                t[36] || (t[36] = e("label", { class: "di-form-label" }, "メモ内容 *", -1)),
                P(e("textarea", {
                  "onUpdate:modelValue": t[5] || (t[5] = (i) => N.value = i),
                  rows: "4",
                  placeholder: "この要素についてのメモ、説明、注意事項など...",
                  class: "di-textarea"
                }, null, 512), [
                  [A, N.value]
                ])
              ]),
              e("div", gl, [
                t[37] || (t[37] = e("label", { class: "di-form-label" }, "記入者（オプション）", -1)),
                P(e("input", {
                  "onUpdate:modelValue": t[6] || (t[6] = (i) => z.value = i),
                  type: "text",
                  placeholder: "名前",
                  class: "di-input"
                }, null, 512), [
                  [A, z.value]
                ])
              ])
            ], 64)) : k("", !0),
            c.value === "field" ? (d(), r(V, { key: 1 }, [
              e("div", wl, [
                e("div", $l, [
                  t[38] || (t[38] = e("label", { class: "di-form-label" }, "テーブル名 *", -1)),
                  P(e("input", {
                    "onUpdate:modelValue": t[7] || (t[7] = (i) => C.value = i),
                    type: "text",
                    placeholder: "users",
                    class: "di-input"
                  }, null, 512), [
                    [A, C.value]
                  ])
                ]),
                e("div", Cl, [
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
              e("div", Il, [
                t[41] || (t[41] = e("label", { class: "di-form-label" }, "データ型", -1)),
                P(e("select", {
                  "onUpdate:modelValue": t[9] || (t[9] = (i) => T.value = i),
                  class: "di-select"
                }, [
                  t[40] || (t[40] = e("option", { value: "" }, "選択してください", -1)),
                  (d(), r(V, null, W(oe, (i) => e("option", {
                    key: i,
                    value: i
                  }, f(i), 9, Ml)), 64))
                ], 512), [
                  [ye, T.value]
                ])
              ]),
              e("div", _l, [
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
              e("div", El, [
                t[43] || (t[43] = e("label", { class: "di-form-label" }, "説明", -1)),
                P(e("textarea", {
                  "onUpdate:modelValue": t[11] || (t[11] = (i) => H.value = i),
                  rows: "2",
                  placeholder: "このフィールドの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [A, H.value]
                ])
              ])
            ], 64)) : k("", !0),
            c.value === "action" ? (d(), r(V, { key: 2 }, [
              e("div", Pl, [
                t[44] || (t[44] = e("label", { class: "di-form-label" }, "アクションタイプ", -1)),
                P(e("select", {
                  "onUpdate:modelValue": t[12] || (t[12] = (i) => x.value = i),
                  class: "di-select"
                }, [
                  (d(), r(V, null, W(_e, (i) => e("option", {
                    key: i.value,
                    value: i.value
                  }, f(i.label), 9, Dl)), 64))
                ], 512), [
                  [ye, x.value]
                ])
              ]),
              x.value === "api" ? (d(), r("div", Sl, [
                e("div", Tl, [
                  t[45] || (t[45] = e("label", { class: "di-form-label" }, "メソッド", -1)),
                  P(e("select", {
                    "onUpdate:modelValue": t[13] || (t[13] = (i) => X.value = i),
                    class: "di-select"
                  }, [
                    (d(), r(V, null, W(Ee, (i) => e("option", {
                      key: i,
                      value: i
                    }, f(i), 9, Ul)), 64))
                  ], 512), [
                    [ye, X.value]
                  ])
                ]),
                e("div", Al, [
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
              ])) : (d(), r("div", Vl, [
                e("label", Ll, f(x.value === "navigate" ? "遷移先パス" : x.value === "modal" ? "モーダル名" : x.value === "emit" ? "イベント名" : "関数名"), 1),
                P(e("input", {
                  "onUpdate:modelValue": t[15] || (t[15] = (i) => y.value = i),
                  type: "text",
                  placeholder: x.value === "navigate" ? "/tasks" : x.value === "modal" ? "ConfirmDialog" : x.value === "emit" ? "onSubmit" : "handleClick",
                  class: "di-input"
                }, null, 8, Bl), [
                  [A, y.value]
                ])
              ])),
              e("div", Rl, [
                t[47] || (t[47] = e("label", { class: "di-form-label" }, "説明", -1)),
                P(e("textarea", {
                  "onUpdate:modelValue": t[16] || (t[16] = (i) => K.value = i),
                  rows: "2",
                  placeholder: "このアクションの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [A, K.value]
                ])
              ])
            ], 64)) : k("", !0),
            c.value === "links" ? (d(), r(V, { key: 3 }, [
              e("div", jl, [
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
              e("div", Ol, [
                t[49] || (t[49] = e("label", { class: "di-form-label" }, "Figma URL", -1)),
                P(e("input", {
                  "onUpdate:modelValue": t[18] || (t[18] = (i) => o.value = i),
                  type: "text",
                  placeholder: "https://www.figma.com/design/...",
                  class: "di-input"
                }, null, 512), [
                  [A, o.value]
                ])
              ]),
              e("div", ql, [
                e("div", Hl, [
                  t[50] || (t[50] = e("label", { class: "di-form-label" }, "GitHub Issue", -1)),
                  P(e("input", {
                    "onUpdate:modelValue": t[19] || (t[19] = (i) => h.value = i),
                    type: "text",
                    placeholder: "#123",
                    class: "di-input"
                  }, null, 512), [
                    [A, h.value]
                  ])
                ]),
                e("div", zl, [
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
              e("div", Nl, [
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
              e("div", Fl, [
                t[53] || (t[53] = e("label", { class: "di-form-label" }, "使用Piniaストア (カンマ区切り)", -1)),
                P(e("input", {
                  "onUpdate:modelValue": t[22] || (t[22] = (i) => $.value = i),
                  type: "text",
                  placeholder: "useUserStore, useThemeStore",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [A, $.value]
                ])
              ]),
              e("div", Gl, [
                t[54] || (t[54] = e("label", { class: "di-form-label" }, "使用コンポーネント (カンマ区切り)", -1)),
                P(e("input", {
                  "onUpdate:modelValue": t[23] || (t[23] = (i) => R.value = i),
                  type: "text",
                  placeholder: "Button, Modal, Input",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [A, R.value]
                ])
              ]),
              e("div", Xl, [
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
              e("div", Kl, [
                t[56] || (t[56] = e("label", { class: "di-form-label" }, "デザイントークン (カンマ区切り)", -1)),
                P(e("input", {
                  "onUpdate:modelValue": t[25] || (t[25] = (i) => E.value = i),
                  type: "text",
                  placeholder: "primaryColor, secondaryColor",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [A, E.value]
                ])
              ]),
              e("div", Yl, [
                t[57] || (t[57] = e("label", { class: "di-form-label" }, "アクセシビリティ", -1)),
                P(e("textarea", {
                  "onUpdate:modelValue": t[26] || (t[26] = (i) => I.value = i),
                  rows: "2",
                  placeholder: "キーボード操作、スクリーンリーダー対応などのメモ...",
                  class: "di-textarea"
                }, null, 512), [
                  [A, I.value]
                ])
              ]),
              e("div", Zl, [
                t[58] || (t[58] = e("label", { class: "di-form-label" }, "レスポンシブ動作", -1)),
                P(e("textarea", {
                  "onUpdate:modelValue": t[27] || (t[27] = (i) => j.value = i),
                  rows: "2",
                  placeholder: "モバイルでの表示変更、ブレークポイントなど...",
                  class: "di-textarea"
                }, null, 512), [
                  [A, j.value]
                ])
              ])
            ], 64)) : k("", !0)
          ]),
          e("div", Jl, [
            e("button", {
              onClick: pe,
              class: "di-btn-delete"
            }, [
              M(s(Ie), { style: { width: "14px", height: "14px" } }),
              t[59] || (t[59] = O(" 削除 ", -1))
            ]),
            e("div", Wl, [
              e("button", {
                onClick: q,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: ee,
                class: "di-btn-save"
              }, [
                M(s(Ke), { style: { width: "14px", height: "14px" } }),
                t[60] || (t[60] = O(" 保存 ", -1))
              ])
            ])
          ])
        ])
      ])) : k("", !0)
    ]));
  }
}), es = /* @__PURE__ */ he(Ql, [["__scopeId", "data-v-fdafa9a6"]]), ts = {
  key: 0,
  "data-dev-inspector": "",
  class: "di-loading-overlay"
}, ls = { class: "di-highlight-label" }, ss = {
  key: 2,
  "data-dev-inspector": "",
  class: "di-pick-banner"
}, ns = ["onClick"], os = ["onClick"], is = {
  "data-dev-inspector": "",
  class: "di-scan-banner"
}, as = ["onClick"], ds = { class: "di-analysis-type" }, us = {
  key: 0,
  class: "di-analysis-db"
}, rs = ["onClick"], cs = {
  key: 0,
  class: "di-analysis-text"
}, vs = {
  "data-dev-inspector": "",
  class: "di-analysis-banner"
}, ps = /* @__PURE__ */ re({
  __name: "DevPickOverlay",
  setup(b) {
    const l = ce(), c = p(null), C = p(null), D = p(0), T = p(0);
    function L(g) {
      var o;
      const a = l.getElementConfig(g);
      if (!(a != null && a.sourceBinding)) {
        const h = ((o = a == null ? void 0 : a.note) == null ? void 0 : o.type) || "info";
        return {
          info: "#60a5fa",
          warning: "#fbbf24",
          todo: "#10b981",
          question: "#a78bfa"
        }[h] || "#60a5fa";
      }
      return a.sourceBinding.isStatic ? "#10b981" : a.sourceBinding.type === "v-model" ? "#8b5cf6" : a.sourceBinding.type === "api" ? "#f59e0b" : "#60a5fa";
    }
    const H = se(() => {
      var w, m;
      const g = D.value, a = T.value, o = [];
      if (!l.isEnabled) return o;
      const h = l.getConfiguredSelectors();
      for (const $ of h)
        try {
          const R = document.querySelector($);
          if (R) {
            const U = R.getBoundingClientRect(), E = l.getElementConfig($), I = ((w = E == null ? void 0 : E.sourceBinding) == null ? void 0 : w.isStatic) || !1, j = ((m = E == null ? void 0 : E.sourceBinding) == null ? void 0 : m.type) || "";
            let B = "";
            I ? B = "固定" : j === "v-model" ? B = "フォーム" : j === "api" ? B = "データ" : B = "メモ", o.push({
              selector: $,
              top: `${U.top + g}px`,
              left: `${U.left + a}px`,
              width: `${U.width}px`,
              height: `${U.height}px`,
              color: L($),
              isStatic: I,
              label: B
            });
          }
        } catch {
        }
      return o;
    }), x = se(() => {
      var h;
      const g = D.value, a = T.value, o = [];
      if (!l.isEnabled || l.scanResults.length === 0) return o;
      for (const w of l.scanResults)
        try {
          const m = document.querySelector(w.selector);
          if (m) {
            const $ = m.getBoundingClientRect();
            o.push({
              selector: w.selector,
              top: `${$.top + g}px`,
              left: `${$.left + a}px`,
              width: `${$.width}px`,
              height: `${$.height}px`,
              isStatic: ((h = w.detected.sourceBinding) == null ? void 0 : h.isStatic) || !1
            });
          }
        } catch {
        }
      return o;
    }), y = se(() => {
      const g = D.value, a = T.value, o = [], h = l.analysisFilter;
      if (h === "none" || !l.isEnabled || l.analysisResults.length === 0) return o;
      for (const w of l.analysisResults) {
        if (!w.matched) continue;
        const m = w.element, $ = m.db && (m.db.table || m.db.column), R = m.api && m.api.endpoint, U = m.type === "static", E = m.type === "data";
        if (h === "db-api") {
          if (!$ && !R) continue;
        } else if (h === "static") {
          if (!U) continue;
        } else if (h === "data") {
          if (!E) continue;
        } else if (h === "other" && ($ || R || U || E))
          continue;
        try {
          const I = document.querySelector(w.selector);
          if (I) {
            const j = I.getBoundingClientRect();
            if (j.width > window.innerWidth * 0.8 || j.height > window.innerHeight * 0.5)
              continue;
            let B = "";
            m.db && (B = `${m.db.table}.${m.db.column}`);
            let J = "";
            m.api && (J = `${m.api.method} ${m.api.endpoint}`), o.push({
              selector: w.selector,
              top: `${j.top + g}px`,
              left: `${j.left + a}px`,
              width: `${j.width}px`,
              height: `${j.height}px`,
              type: m.type,
              text: m.text || m.binding || "",
              dbInfo: B,
              apiInfo: J
            });
          }
        } catch {
        }
      }
      return o;
    });
    function X(g) {
      if (!l.isPickMode) return;
      if (g.target.closest("[data-dev-inspector]")) {
        c.value = null, C.value = null, l.setHoveredSelector(null);
        return;
      }
      const o = document.elementFromPoint(g.clientX, g.clientY);
      if (!o || o === document.body || o === document.documentElement) {
        c.value = null, C.value = null, l.setHoveredSelector(null);
        return;
      }
      if (o.closest("[data-dev-inspector]"))
        return;
      C.value = o;
      const h = o.getBoundingClientRect();
      c.value = {
        top: `${h.top + window.scrollY}px`,
        left: `${h.left + window.scrollX}px`,
        width: `${h.width}px`,
        height: `${h.height}px`
      };
      const w = l.generateSelector(o);
      l.setHoveredSelector(w);
    }
    function K(g) {
      if (!(!l.isPickMode || g.target.closest("[data-dev-inspector]")) && (g.preventDefault(), g.stopPropagation(), C.value)) {
        const o = l.generateSelector(C.value);
        l.startEditing(o), l.togglePickMode();
      }
    }
    function N(g) {
      g.key === "Escape" && l.isPickMode && l.togglePickMode();
    }
    function z() {
      D.value = window.scrollY, T.value = window.scrollX;
    }
    return Ce(() => {
      window.addEventListener("mousemove", X, !0), window.addEventListener("click", K, !0), window.addEventListener("keydown", N), window.addEventListener("scroll", z), window.addEventListener("resize", z);
    }), Te(() => {
      window.removeEventListener("mousemove", X, !0), window.removeEventListener("click", K, !0), window.removeEventListener("keydown", N), window.removeEventListener("scroll", z), window.removeEventListener("resize", z);
    }), $e(() => l.isPickMode, (g) => {
      g || (c.value = null, C.value = null);
    }), (g, a) => (d(), F(le, { to: "body" }, [
      s(l).isInitializing ? (d(), r("div", ts, [...a[2] || (a[2] = [
        e("div", { class: "di-loading-content" }, [
          e("div", { class: "di-loading-spinner" }),
          e("span", { class: "di-loading-text" }, "Developer Mode 起動中...")
        ], -1)
      ])])) : k("", !0),
      s(l).isPickMode && c.value ? (d(), r("div", {
        key: 1,
        "data-dev-inspector": "",
        class: "di-highlight",
        style: G({
          top: c.value.top,
          left: c.value.left,
          width: c.value.width,
          height: c.value.height
        })
      }, [
        e("div", ls, f(s(l).hoveredSelector), 1)
      ], 4)) : k("", !0),
      s(l).isPickMode ? (d(), r("div", ss, [...a[3] || (a[3] = [
        e("span", null, "要素をクリックしてメモを追加", -1),
        e("kbd", null, "ESC", -1),
        e("span", { class: "di-pick-hint" }, "でキャンセル", -1)
      ])])) : k("", !0),
      s(l).isEnabled && !s(l).isPickMode && !s(l).editingElementId && s(l).scanResults.length === 0 && s(l).analysisResults.length === 0 ? (d(!0), r(V, { key: 3 }, W(H.value, (o) => (d(), r("div", {
        key: o.selector,
        "data-dev-inspector": "",
        class: "di-annotation-box",
        style: G({
          top: o.top,
          left: o.left,
          width: o.width,
          height: o.height,
          borderColor: o.color,
          backgroundColor: o.color + "15"
        }),
        onClick: (h) => s(l).startEditing(o.selector)
      }, [
        e("div", {
          class: "di-annotation-label",
          style: G({ backgroundColor: o.color })
        }, f(o.label), 5)
      ], 12, ns))), 128)) : k("", !0),
      s(l).isEnabled && !s(l).editingElementId && x.value.length > 0 && s(l).analysisResults.length === 0 ? (d(), r(V, { key: 4 }, [
        (d(!0), r(V, null, W(x.value, (o) => (d(), r("div", {
          key: "scan-" + o.selector,
          "data-dev-inspector": "",
          class: Z(["di-scan-highlight", { "di-scan-static": o.isStatic }]),
          style: G({
            top: o.top,
            left: o.left,
            width: o.width,
            height: o.height
          }),
          onClick: (h) => s(l).startEditing(o.selector)
        }, [
          e("div", {
            class: Z(["di-scan-label", { "di-scan-label-static": o.isStatic }])
          }, f(o.isStatic ? "固定文言" : "動的データ"), 3)
        ], 14, os))), 128)),
        e("div", is, [
          e("span", null, f(x.value.length) + "件の要素を検出", 1),
          e("button", {
            onClick: a[0] || (a[0] = (o) => s(l).clearScanResults()),
            class: "di-scan-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : k("", !0),
      s(l).isEnabled && !s(l).editingElementId && y.value.length > 0 ? (d(), r(V, { key: 5 }, [
        (d(!0), r(V, null, W(y.value, (o) => (d(), r("div", {
          key: "analysis-" + o.selector,
          "data-dev-inspector": "",
          class: Z(["di-analysis-highlight", {
            "di-analysis-static": o.type === "static",
            "di-analysis-data": o.type === "data",
            "di-analysis-form": o.type === "form",
            "di-analysis-button": o.type === "button",
            "di-analysis-link": o.type === "link"
          }]),
          style: G({
            top: o.top,
            left: o.left,
            width: o.width,
            height: o.height
          }),
          onClick: (h) => s(l).startEditing(o.selector)
        }, [
          e("div", {
            class: Z(["di-analysis-label", "di-analysis-label-" + (o.dbInfo ? "db" : o.type)])
          }, [
            e("span", ds, f(o.dbInfo ? "DB" : o.type === "static" ? "固定" : o.type === "data" ? "データ" : o.type), 1),
            o.dbInfo ? (d(), r("span", us, f(o.dbInfo), 1)) : k("", !0),
            e("button", {
              class: "di-analysis-delete",
              onClick: ue((h) => s(l).removeAnalysisResult(o.selector), ["stop"]),
              title: "この要素を非表示"
            }, "×", 8, rs)
          ], 2),
          o.text && o.text.length < 30 ? (d(), r("div", cs, f(o.text), 1)) : k("", !0)
        ], 14, as))), 128)),
        e("div", vs, [
          e("span", null, "📊 分析データ: " + f(y.value.length) + "件の要素", 1),
          e("button", {
            onClick: a[1] || (a[1] = (o) => s(l).clearAnalysisResults()),
            class: "di-analysis-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : k("", !0)
    ]));
  }
}), ys = /* @__PURE__ */ he(ps, [["__scopeId", "data-v-f3f09e7e"]]), bs = {
  key: 0,
  "data-dev-inspector": ""
}, ms = /* @__PURE__ */ re({
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
    const l = b, c = ce();
    return Ce(() => {
      c.init({
        storageKey: l.storageKey,
        enabledInProduction: l.enabledInProduction,
        initialAnnotations: l.initialAnnotations
      });
    }), (C, D) => s(c).isAvailable ? (d(), r("div", bs, [
      M(dl),
      M(es),
      M(ys)
    ])) : k("", !0);
  }
}), ks = {
  install(b, l = {}) {
    const { autoRegister: c = !0, ...C } = l;
    c && b.component("DevInspector", ms), b.provide("devInspectorOptions", C);
  }
};
export {
  es as DevElementEditor,
  ms as DevInspector,
  dl as DevPanel,
  ys as DevPickOverlay,
  ks as VueDevInspector,
  ks as default,
  ws as useDevInspector,
  ce as useDevInspectorStore
};
