import { h as xe, defineComponent as ve, inject as De, ref as p, computed as ne, openBlock as d, createElementBlock as r, Fragment as V, createBlock as z, Teleport as se, unref as s, createVNode as M, createCommentVNode as h, createElementVNode as e, normalizeClass as Z, toDisplayString as f, renderList as W, withDirectives as P, vModelText as A, normalizeStyle as F, createTextVNode as j, withModifiers as ce, watch as Ce, resolveDynamicComponent as Se, vModelSelect as me, onMounted as Ie, onUnmounted as Te } from "vue";
import { u as pe } from "./useDevInspector-CuR6Xe_p.js";
import { a as Is } from "./useDevInspector-CuR6Xe_p.js";
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ue = {
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
const Ue = (b) => b.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), _ = (b, l) => ({ size: c, strokeWidth: C = 2, absoluteStrokeWidth: D, color: T, class: L, ...O }, { attrs: x, slots: y }) => xe(
  "svg",
  {
    ...ue,
    width: c || ue.width,
    height: c || ue.height,
    stroke: T || ue.stroke,
    "stroke-width": D ? Number(C) * 24 / Number(c) : C,
    ...x,
    class: ["lucide", `lucide-${Ue(b)}`],
    ...O
  },
  [
    ...l.map((G) => xe(...G)),
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
const ge = _("CodeIcon", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Re = _("DatabaseIcon", [
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
const fe = _("DownloadIcon", [
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
const Be = _("ExternalLinkIcon", [
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
const we = _("FileTextIcon", [
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
const He = _("GitBranchIcon", [
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
const Oe = _("GlobeIcon", [
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
const qe = _("HelpCircleIcon", [
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
const re = _("Loader2Icon", [
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
const he = _("ScanIcon", [
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
const $e = _("ServerIcon", [
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
const Me = _("Trash2Icon", [
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
const _e = _("XIcon", [
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
  const C = await import("./xlsx-BopDBbWb.js"), { systemName: D = "System", author: T = "" } = c, L = /* @__PURE__ */ new Date(), O = `${L.getFullYear()}/${L.getMonth() + 1}/${L.getDate()}`, x = C.utils.book_new(), y = [];
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
  ]), Object.values(l).forEach((a, o) => {
    var R, U, E;
    const k = a.id;
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
      k,
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
  const X = C.utils.aoa_to_sheet(y);
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
  ], C.utils.book_append_sheet(x, X, "画面設計書");
  const q = `画面仕様書_${((g = b == null ? void 0 : b.name) == null ? void 0 : g.replace(/[/\\?%*:|"<>]/g, "-")) || "screen"}_${O.replace(/\//g, "")}.xlsx`;
  return C.writeFile(x, q), q;
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
}, $t = { class: "di-filter-buttons" }, Ct = ["onClick"], It = ["disabled"], Mt = { key: 1 }, _t = { key: 2 }, Et = { class: "di-content" }, Pt = { class: "di-section" }, Dt = { class: "di-screen-name" }, St = { class: "di-screen-desc" }, Tt = { class: "di-card" }, Ut = { class: "di-card-label" }, At = { class: "di-code-blue" }, Vt = {
  key: 0,
  class: "di-card"
}, Lt = { class: "di-card-label" }, Rt = ["href"], Bt = {
  key: 1,
  class: "di-card"
}, jt = { class: "di-card-label" }, Ht = { class: "di-api-list" }, Ot = { class: "di-api-info" }, qt = { class: "di-api-endpoint" }, zt = { class: "di-api-desc" }, Nt = {
  key: 2,
  class: "di-card"
}, Ft = { class: "di-card-label" }, Gt = { class: "di-notes-list" }, Xt = {
  key: 1,
  class: "di-no-spec"
}, Kt = { class: "di-card" }, Yt = { class: "di-card-header" }, Zt = { class: "di-card-label" }, Jt = { class: "di-count-badge" }, Wt = {
  key: 0,
  class: "di-export-buttons"
}, Qt = {
  key: 1,
  class: "di-export-hint"
}, el = { class: "di-action-buttons" }, tl = {
  key: 0,
  class: "di-indicator",
  "data-dev-inspector": ""
}, ll = { class: "di-modal" }, sl = ["value"], nl = { class: "di-modal-actions" }, ol = { class: "di-modal" }, il = { class: "di-file-drop" }, al = {
  key: 0,
  class: "di-error"
}, dl = { class: "di-modal-actions" }, ul = ["disabled"], rl = /* @__PURE__ */ ve({
  __name: "DevPanel",
  setup(b) {
    const l = pe(), c = De("router", null), C = p(!1), D = p(!1), T = p(""), L = p(""), O = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, x = ne(() => l.currentScreenSpec), y = ne(() => Object.keys(l.elementConfigs).length);
    function G() {
      const H = l.exportConfigs();
      navigator.clipboard.writeText(H), C.value = !1;
    }
    function X() {
      const H = l.exportConfigs(), n = new Blob([H], { type: "application/json" }), K = URL.createObjectURL(n), v = document.createElement("a");
      v.href = K, v.download = "dev-mode-configs.json", v.click(), URL.revokeObjectURL(K), C.value = !1;
    }
    function N() {
      l.downloadAnnotations();
    }
    async function q() {
      try {
        await Qe(
          l.currentScreenSpec,
          l.elementConfigs,
          { systemName: "System" }
        );
      } catch (H) {
        console.error("Failed to export xlsx:", H), alert("xlsx export failed. Make sure xlsx package is installed.");
      }
    }
    function g() {
      try {
        l.importConfigs(T.value), T.value = "", L.value = "", D.value = !1;
      } catch {
        L.value = "JSONの形式が正しくありません";
      }
    }
    function a(H) {
      var te;
      const K = (te = H.target.files) == null ? void 0 : te[0];
      if (!K) return;
      const v = new FileReader();
      v.onload = (be) => {
        var ie;
        T.value = (ie = be.target) == null ? void 0 : ie.result;
      }, v.readAsText(K);
    }
    function o() {
      confirm("すべての要素設定を削除しますか？") && l.clearAllConfigs();
    }
    const k = p(0), w = p(!1), m = p([]);
    async function $(H = !1) {
      w.value = !0, k.value = await l.scanCurrentPage({ rescan: H });
    }
    async function R() {
      if (!c) {
        alert("Vue Routerが見つかりません。全ページスキャンにはVue Routerが必要です。");
        return;
      }
      confirm("全ページをスキャンします。ページ遷移が発生しますがよろしいですか？") && (w.value = !0, m.value = await l.scanAllPages(c));
    }
    const U = p("/dev-inspector-analysis.json"), E = p(!1), I = p(""), B = p(0), S = p(!1), J = [
      { value: "all", label: "すべて" },
      { value: "db-api", label: "DB/API" },
      { value: "static", label: "固定文言" },
      { value: "data", label: "動的データ" },
      { value: "other", label: "その他" },
      { value: "none", label: "非表示" }
    ];
    async function le() {
      E.value = !0, I.value = "";
      try {
        if (await l.loadAnalysisData(U.value), l.analysisData) {
          const H = Object.values(l.analysisData.components).reduce((n, K) => n + K.elements.length, 0);
          alert(`分析データを読み込みました（${Object.keys(l.analysisData.components).length}コンポーネント、${H}要素）`);
        } else
          I.value = "分析データの読み込みに失敗しました";
      } catch (H) {
        I.value = `読み込みエラー: ${H}`;
      } finally {
        E.value = !1;
      }
    }
    async function ye() {
      if (!l.analysisData) {
        alert("先に分析データを読み込んでください");
        return;
      }
      B.value = await l.applyAnalysisToPage();
    }
    async function Q() {
      S.value = !0;
      try {
        l.clearHiddenSelectors(), l.analysisData && await l.applyAnalysisToPage();
      } finally {
        S.value = !1;
      }
    }
    return (H, n) => {
      var K;
      return d(), r(V, null, [
        (d(), z(se, { to: "body" }, [
          s(l).isEnabled && !s(l).isPanelOpen ? (d(), r("button", {
            key: 0,
            onClick: n[0] || (n[0] = //@ts-ignore
            (...v) => s(l).openPanel && s(l).openPanel(...v)),
            class: "di-fab",
            title: "画面仕様を表示",
            "data-dev-inspector": ""
          }, [
            M(s(we), { style: { width: "20px", height: "20px" } })
          ])) : h("", !0)
        ])),
        (d(), z(se, { to: "body" }, [
          s(l).isEnabled && s(l).isPanelOpen ? (d(), r("div", et, [
            e("div", tt, [
              e("div", lt, [
                M(s(ge), { style: { width: "20px", height: "20px", color: "#60a5fa" } }),
                n[14] || (n[14] = e("span", null, "Developer Mode", -1))
              ]),
              e("button", {
                onClick: n[1] || (n[1] = //@ts-ignore
                (...v) => s(l).closePanel && s(l).closePanel(...v)),
                class: "di-close-btn"
              }, [
                M(s(_e), { style: { width: "20px", height: "20px" } })
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
                  s(l).isScanning && !s(l).currentScanPage ? (d(), z(s(re), {
                    key: 0,
                    class: "di-spin",
                    style: { width: "16px", height: "16px" }
                  })) : (d(), z(s(he), {
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
                  M(s(he), { style: { width: "16px", height: "16px" } }),
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
                  s(l).isScanning && s(l).currentScanPage ? (d(), z(s(re), {
                    key: 0,
                    class: "di-spin",
                    style: { width: "16px", height: "16px" }
                  })) : (d(), z(s(Oe), {
                    key: 1,
                    style: { width: "16px", height: "16px" }
                  })),
                  e("span", null, f(s(l).currentScanPage ? `${s(l).currentScanPage}` : "全ページスキャン"), 1)
                ], 8, dt)
              ]),
              w.value && (k.value > 0 || m.value.length > 0) ? (d(), r("div", ut, [
                k.value > 0 ? (d(), r("div", rt, [
                  e("span", ct, f(k.value), 1),
                  n[16] || (n[16] = e("span", null, "件の要素を検出・登録しました", -1))
                ])) : h("", !0),
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
              ])) : h("", !0),
              e("div", pt, [
                e("div", yt, [
                  M(s($e), { style: { width: "16px", height: "16px", color: "#3b82f6" } }),
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
                    onClick: le,
                    class: "di-analysis-btn",
                    disabled: E.value
                  }, [
                    E.value ? (d(), z(s(re), {
                      key: 0,
                      class: "di-spin",
                      style: { width: "14px", height: "14px" }
                    })) : (d(), z(s(fe), {
                      key: 1,
                      style: { width: "14px", height: "14px" }
                    })),
                    n[18] || (n[18] = e("span", null, "読み込み", -1))
                  ], 8, ft),
                  e("button", {
                    onClick: ye,
                    class: "di-analysis-btn di-analysis-btn-apply",
                    disabled: !s(l).analysisData
                  }, [
                    M(s(he), { style: { width: "14px", height: "14px" } }),
                    n[19] || (n[19] = e("span", null, "ページに適用", -1))
                  ], 8, ht)
                ]),
                I.value ? (d(), r("div", kt, f(I.value), 1)) : h("", !0),
                s(l).analysisResults.length > 0 ? (d(), r("div", xt, [
                  e("span", gt, f(s(l).analysisResults.filter((v) => v.matched).length), 1),
                  e("span", null, "/ " + f(s(l).analysisResults.length) + " 要素がマッチ", 1)
                ])) : h("", !0),
                s(l).analysisResults.length > 0 ? (d(), r("div", wt, [
                  n[20] || (n[20] = e("span", { class: "di-filter-label" }, "表示フィルター:", -1)),
                  e("div", $t, [
                    (d(), r(V, null, W(J, (v) => e("button", {
                      key: v.value,
                      onClick: (te) => s(l).analysisFilter = v.value,
                      class: Z(["di-filter-btn", { active: s(l).analysisFilter === v.value }])
                    }, f(v.label), 11, Ct)), 64))
                  ]),
                  s(l).hiddenAnalysisSelectors.size > 0 ? (d(), r("button", {
                    key: 0,
                    onClick: Q,
                    class: "di-restore-btn",
                    disabled: S.value
                  }, [
                    S.value ? (d(), z(s(re), {
                      key: 0,
                      class: "di-spin",
                      style: { width: "12px", height: "12px" }
                    })) : h("", !0),
                    S.value ? (d(), r("span", Mt, "リセット中...")) : (d(), r("span", _t, "非表示 (" + f(s(l).hiddenAnalysisSelectors.size) + ") をリセット", 1))
                  ], 8, It)) : h("", !0)
                ])) : h("", !0)
              ])
            ]),
            e("div", Et, [
              x.value ? (d(), r(V, { key: 0 }, [
                e("div", Pt, [
                  e("h2", Dt, f(x.value.name), 1),
                  e("p", St, f(x.value.description), 1)
                ]),
                e("div", Tt, [
                  e("div", Ut, [
                    M(s(ge), { style: { width: "16px", height: "16px" } }),
                    n[21] || (n[21] = e("span", null, "Component Path", -1))
                  ]),
                  e("code", At, f(x.value.componentPath), 1)
                ]),
                x.value.figmaUrl ? (d(), r("div", Vt, [
                  e("div", Lt, [
                    M(s(Be), { style: { width: "16px", height: "16px" } }),
                    n[22] || (n[22] = e("span", null, "Figma Design", -1))
                  ]),
                  e("a", {
                    href: x.value.figmaUrl,
                    target: "_blank",
                    class: "di-link-purple"
                  }, f(x.value.figmaUrl), 9, Rt)
                ])) : h("", !0),
                x.value.apis.length ? (d(), r("div", Bt, [
                  e("div", jt, [
                    M(s($e), { style: { width: "16px", height: "16px" } }),
                    n[23] || (n[23] = e("span", null, "API Endpoints", -1))
                  ]),
                  e("div", Ht, [
                    (d(!0), r(V, null, W(x.value.apis, (v, te) => (d(), r("div", {
                      key: te,
                      class: "di-api-item"
                    }, [
                      e("span", {
                        class: "di-method-badge",
                        style: F({ backgroundColor: O[v.method] + "20", color: O[v.method] })
                      }, f(v.method), 5),
                      e("div", Ot, [
                        e("code", qt, f(v.endpoint), 1),
                        e("p", zt, f(v.description), 1)
                      ])
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (K = x.value.notes) != null && K.length ? (d(), r("div", Nt, [
                  e("div", Ft, [
                    M(s(Ae), { style: { width: "16px", height: "16px" } }),
                    n[24] || (n[24] = e("span", null, "Notes", -1))
                  ]),
                  e("ul", Gt, [
                    (d(!0), r(V, null, W(x.value.notes, (v, te) => (d(), r("li", {
                      key: te,
                      class: "di-note-item"
                    }, [
                      n[25] || (n[25] = e("span", { class: "di-bullet" }, "•", -1)),
                      e("span", null, f(v), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0)
              ], 64)) : (d(), r("div", Xt, [
                M(s(we), { style: { width: "48px", height: "48px", color: "#334155" } }),
                n[26] || (n[26] = e("p", null, [
                  j("この画面の仕様情報は"),
                  e("br"),
                  j("まだ登録されていません")
                ], -1))
              ])),
              e("div", Kt, [
                e("div", Yt, [
                  e("div", Zt, [
                    M(s(Xe), { style: { width: "16px", height: "16px" } }),
                    n[27] || (n[27] = e("span", null, "登録済み要素", -1)),
                    e("span", Jt, f(y.value), 1)
                  ])
                ]),
                y.value > 0 ? (d(), r("div", Wt, [
                  e("button", {
                    onClick: N,
                    class: "di-btn-green"
                  }, [
                    M(s(He), { style: { width: "16px", height: "16px" } }),
                    n[28] || (n[28] = j(" Git管理用に保存 ", -1))
                  ]),
                  e("button", {
                    onClick: q,
                    class: "di-btn-blue"
                  }, [
                    M(s(je), { style: { width: "16px", height: "16px" } }),
                    n[29] || (n[29] = j(" 画面仕様書 (xlsx) 出力 ", -1))
                  ])
                ])) : h("", !0),
                y.value > 0 ? (d(), r("p", Qt, [...n[30] || (n[30] = [
                  j(" JSON: ", -1),
                  e("code", null, "dev-annotations.json", -1),
                  j(" に配置してcommit ", -1)
                ])])) : h("", !0),
                e("div", el, [
                  e("button", {
                    onClick: n[7] || (n[7] = (v) => C.value = !0),
                    class: "di-btn-small"
                  }, [
                    M(s(fe), { style: { width: "14px", height: "14px" } }),
                    n[31] || (n[31] = j(" エクスポート ", -1))
                  ]),
                  e("button", {
                    onClick: n[8] || (n[8] = (v) => D.value = !0),
                    class: "di-btn-small"
                  }, [
                    M(s(Ze), { style: { width: "14px", height: "14px" } }),
                    n[32] || (n[32] = j(" インポート ", -1))
                  ]),
                  y.value > 0 ? (d(), r("button", {
                    key: 0,
                    onClick: o,
                    class: "di-btn-small di-btn-danger"
                  }, [
                    M(s(Me), { style: { width: "14px", height: "14px" } }),
                    n[33] || (n[33] = j(" 全削除 ", -1))
                  ])) : h("", !0)
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
          ])) : h("", !0)
        ])),
        (d(), z(se, { to: "body" }, [
          s(l).isEnabled ? (d(), r("div", tl, [...n[35] || (n[35] = [
            e("span", { class: "di-indicator-dot" }, null, -1),
            j(" Developer Mode ", -1)
          ])])) : h("", !0)
        ])),
        (d(), z(se, { to: "body" }, [
          C.value ? (d(), r("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: n[10] || (n[10] = ce((v) => C.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", ll, [
              n[37] || (n[37] = e("h3", { class: "di-modal-title" }, "設定をエクスポート", -1)),
              e("textarea", {
                readonly: "",
                value: s(l).exportConfigs(),
                class: "di-modal-textarea"
              }, null, 8, sl),
              e("div", nl, [
                e("button", {
                  onClick: n[9] || (n[9] = (v) => C.value = !1),
                  class: "di-btn-small"
                }, "閉じる"),
                e("button", {
                  onClick: X,
                  class: "di-btn-small di-btn-gray"
                }, [
                  M(s(fe), { style: { width: "14px", height: "14px" } }),
                  n[36] || (n[36] = j(" ファイル保存 ", -1))
                ]),
                e("button", {
                  onClick: G,
                  class: "di-btn-small di-btn-primary"
                }, "コピー")
              ])
            ])
          ])) : h("", !0)
        ])),
        (d(), z(se, { to: "body" }, [
          D.value ? (d(), r("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: n[13] || (n[13] = ce((v) => D.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", ol, [
              n[39] || (n[39] = e("h3", { class: "di-modal-title" }, "設定をインポート", -1)),
              e("label", il, [
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
              L.value ? (d(), r("p", al, f(L.value), 1)) : h("", !0),
              e("div", dl, [
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
                }, " インポート ", 8, ul)
              ])
            ])
          ])) : h("", !0)
        ]))
      ], 64);
    };
  }
}), ke = (b, l) => {
  const c = b.__vccOpts || b;
  for (const [C, D] of l)
    c[C] = D;
  return c;
}, cl = /* @__PURE__ */ ke(rl, [["__scopeId", "data-v-34dc620c"]]), vl = { class: "di-editor-modal" }, pl = { class: "di-editor-header" }, yl = { class: "di-header-actions" }, bl = {
  key: 0,
  class: "di-static-indicator"
}, ml = {
  key: 1,
  class: "di-binding-indicator"
}, fl = {
  key: 0,
  class: "di-binding-source"
}, hl = { class: "di-editor-tabs" }, kl = { class: "di-editor-content" }, xl = { class: "di-form-group" }, gl = { class: "di-note-types" }, wl = ["onClick"], $l = { class: "di-form-group" }, Cl = { class: "di-form-group" }, Il = { class: "di-form-row" }, Ml = { class: "di-form-group" }, _l = { class: "di-form-group" }, El = { class: "di-form-group" }, Pl = ["value"], Dl = { class: "di-form-group" }, Sl = { class: "di-form-group" }, Tl = { class: "di-form-group" }, Ul = ["value"], Al = {
  key: 0,
  class: "di-form-row"
}, Vl = {
  class: "di-form-group",
  style: { flex: "0 0 100px" }
}, Ll = ["value"], Rl = {
  class: "di-form-group",
  style: { flex: "1" }
}, Bl = {
  key: 1,
  class: "di-form-group"
}, jl = { class: "di-form-label" }, Hl = ["placeholder"], Ol = { class: "di-form-group" }, ql = { class: "di-form-group" }, zl = { class: "di-form-group" }, Nl = { class: "di-form-row" }, Fl = { class: "di-form-group" }, Gl = { class: "di-form-group" }, Xl = { class: "di-form-group" }, Kl = { class: "di-form-group" }, Yl = { class: "di-form-group" }, Zl = { class: "di-form-group" }, Jl = { class: "di-form-group" }, Wl = { class: "di-form-group" }, Ql = { class: "di-form-group" }, es = { class: "di-editor-footer" }, ts = { class: "di-editor-actions" }, ls = /* @__PURE__ */ ve({
  __name: "DevElementEditor",
  setup(b) {
    const l = pe(), c = p("note"), C = p(""), D = p(""), T = p(""), L = p(""), O = p(""), x = p("navigate"), y = p(""), G = p("GET"), X = p(""), N = p(""), q = p(""), g = p("info"), a = p(""), o = p(""), k = p(""), w = p(""), m = p(""), $ = p(""), R = p(""), U = p(""), E = p(""), I = p(""), B = p(""), S = p(""), J = p(""), le = p(!1), ye = ne(() => l.editingElementId !== null), Q = ne(() => l.editingElementId);
    Ce(Q, (ee) => {
      var t, i, oe, ae, de, Y;
      if (ee) {
        const u = l.getElementConfig(ee);
        u != null && u.fieldInfo && (C.value = u.fieldInfo.table || "", D.value = u.fieldInfo.column || "", T.value = u.fieldInfo.type || "", L.value = ((t = u.fieldInfo.validation) == null ? void 0 : t.join(", ")) || "", O.value = u.fieldInfo.description || ""), u != null && u.actionInfo && (x.value = u.actionInfo.type || "navigate", y.value = u.actionInfo.target || "", G.value = u.actionInfo.method || "GET", X.value = u.actionInfo.description || ""), u != null && u.note && (N.value = u.note.text || "", q.value = u.note.author || "", g.value = u.note.type || "info"), u != null && u.links && (a.value = u.links.testPath || "", o.value = u.links.figmaUrl || "", k.value = u.links.githubIssue || "", w.value = u.links.githubPr || "", m.value = u.links.relatedDocs || ""), u != null && u.devMeta && ($.value = ((i = u.devMeta.usedStores) == null ? void 0 : i.join(", ")) || "", R.value = ((oe = u.devMeta.usedComponents) == null ? void 0 : oe.join(", ")) || "", U.value = ((ae = u.devMeta.i18nKeys) == null ? void 0 : ae.join(", ")) || "", E.value = ((de = u.devMeta.designTokens) == null ? void 0 : de.join(", ")) || "", I.value = u.devMeta.accessibility || "", B.value = u.devMeta.responsive || ""), u != null && u.sourceBinding && (S.value = u.sourceBinding.type || "", J.value = u.sourceBinding.source || "", le.value = u.sourceBinding.isStatic || !1), (Y = u == null ? void 0 : u.note) != null && Y.text ? c.value = "note" : u != null && u.fieldInfo ? c.value = "field" : u != null && u.actionInfo ? c.value = "action" : u != null && u.links ? c.value = "links" : u != null && u.devMeta ? c.value = "meta" : c.value = "note";
      } else
        H();
    });
    function H() {
      C.value = "", D.value = "", T.value = "", L.value = "", O.value = "", x.value = "navigate", y.value = "", G.value = "GET", X.value = "", N.value = "", q.value = "", g.value = "info", a.value = "", o.value = "", k.value = "", w.value = "", m.value = "", $.value = "", R.value = "", U.value = "", E.value = "", I.value = "", B.value = "", S.value = "", J.value = "", le.value = !1, c.value = "note";
    }
    function n() {
      l.stopEditing(), H();
    }
    function K() {
      if (Q.value)
        try {
          const ee = document.querySelector(Q.value);
          if (!ee) return;
          const t = l.autoDetectElementInfo(ee, Q.value);
          t.sourceBinding && (S.value = t.sourceBinding.type || "", J.value = t.sourceBinding.source || "", le.value = t.sourceBinding.isStatic || !1, t.sourceBinding.isStatic && !N.value && (N.value = "固定文言", g.value = "info"));
        } catch (ee) {
          console.error("[DevInspector] Auto-detect failed:", ee);
        }
    }
    function v() {
      if (!Q.value) return;
      const ee = C.value && D.value ? {
        table: C.value,
        column: D.value,
        type: T.value || void 0,
        validation: L.value ? L.value.split(",").map((Y) => Y.trim()) : void 0,
        description: O.value || void 0
      } : void 0, t = y.value ? {
        type: x.value,
        target: y.value,
        method: x.value === "api" ? G.value : void 0,
        description: X.value || void 0
      } : void 0, i = N.value ? {
        text: N.value,
        author: q.value || void 0,
        type: g.value
      } : void 0, oe = a.value || o.value || k.value || w.value || m.value ? {
        testPath: a.value || void 0,
        figmaUrl: o.value || void 0,
        githubIssue: k.value || void 0,
        githubPr: w.value || void 0,
        relatedDocs: m.value || void 0
      } : void 0, ae = $.value || R.value || U.value || E.value || I.value || B.value ? {
        usedStores: $.value ? $.value.split(",").map((Y) => Y.trim()) : void 0,
        usedComponents: R.value ? R.value.split(",").map((Y) => Y.trim()) : void 0,
        i18nKeys: U.value ? U.value.split(",").map((Y) => Y.trim()) : void 0,
        designTokens: E.value ? E.value.split(",").map((Y) => Y.trim()) : void 0,
        accessibility: I.value || void 0,
        responsive: B.value || void 0
      } : void 0, de = S.value ? {
        type: S.value,
        source: J.value || void 0,
        isStatic: le.value
      } : void 0;
      l.setElementConfig(Q.value, {
        fieldInfo: ee,
        actionInfo: t,
        note: i,
        links: oe,
        devMeta: ae,
        sourceBinding: de
      }), n();
    }
    function te() {
      Q.value && (l.deleteElementConfig(Q.value), n());
    }
    const be = ["VARCHAR", "TEXT", "INT", "BIGINT", "BOOLEAN", "DATE", "DATETIME", "TIMESTAMP", "JSON"], ie = [
      { value: "navigate", label: "画面遷移" },
      { value: "api", label: "API呼び出し" },
      { value: "modal", label: "モーダル表示" },
      { value: "emit", label: "イベント発火" },
      { value: "function", label: "関数実行" }
    ], Ee = ["GET", "POST", "PUT", "DELETE", "PATCH"], Pe = [
      { value: "info", label: "情報", icon: ze, color: "#60a5fa" },
      { value: "warning", label: "注意", icon: Ve, color: "#fbbf24" },
      { value: "todo", label: "TODO", icon: Le, color: "#10b981" },
      { value: "question", label: "質問", icon: qe, color: "#a78bfa" }
    ];
    return (ee, t) => (d(), z(se, { to: "body" }, [
      ye.value ? (d(), r("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: ce(n, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", vl, [
          e("div", pl, [
            t[28] || (t[28] = e("h3", null, "要素情報を編集", -1)),
            e("div", yl, [
              e("button", {
                onClick: K,
                class: "di-btn-auto",
                title: "自動検出"
              }, [
                M(s(Je), { style: { width: "16px", height: "16px" } })
              ]),
              e("button", {
                onClick: n,
                class: "di-editor-close"
              }, [
                M(s(_e), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          le.value ? (d(), r("div", bl, [...t[29] || (t[29] = [
            e("span", { class: "di-static-badge" }, "固定文言", -1),
            e("span", { class: "di-static-hint" }, "このテキストはソースコードに直接記述されています", -1)
          ])])) : S.value ? (d(), r("div", ml, [
            e("span", {
              class: Z(["di-binding-badge", "di-binding-" + S.value])
            }, f(S.value), 3),
            J.value ? (d(), r("span", fl, f(J.value), 1)) : h("", !0)
          ])) : h("", !0),
          e("div", hl, [
            e("button", {
              onClick: t[0] || (t[0] = (i) => c.value = "note"),
              class: Z(["di-editor-tab", { active: c.value === "note" }]),
              style: F(c.value === "note" ? { color: "#10b981", borderColor: "#10b981", background: "rgba(16, 185, 129, 0.1)" } : {})
            }, [
              M(s(Fe), { style: { width: "12px", height: "12px" } }),
              t[30] || (t[30] = j(" メモ ", -1))
            ], 6),
            e("button", {
              onClick: t[1] || (t[1] = (i) => c.value = "field"),
              class: Z(["di-editor-tab", { active: c.value === "field" }]),
              style: F(c.value === "field" ? { color: "#60a5fa", borderColor: "#60a5fa", background: "rgba(96, 165, 250, 0.1)" } : {})
            }, [
              M(s(Re), { style: { width: "12px", height: "12px" } }),
              t[31] || (t[31] = j(" データ ", -1))
            ], 6),
            e("button", {
              onClick: t[2] || (t[2] = (i) => c.value = "action"),
              class: Z(["di-editor-tab", { active: c.value === "action" }]),
              style: F(c.value === "action" ? { color: "#a78bfa", borderColor: "#a78bfa", background: "rgba(167, 139, 250, 0.1)" } : {})
            }, [
              M(s(We), { style: { width: "12px", height: "12px" } }),
              t[32] || (t[32] = j(" アクション ", -1))
            ], 6),
            e("button", {
              onClick: t[3] || (t[3] = (i) => c.value = "links"),
              class: Z(["di-editor-tab", { active: c.value === "links" }]),
              style: F(c.value === "links" ? { color: "#f59e0b", borderColor: "#f59e0b", background: "rgba(245, 158, 11, 0.1)" } : {})
            }, [
              M(s(Ne), { style: { width: "12px", height: "12px" } }),
              t[33] || (t[33] = j(" リンク ", -1))
            ], 6),
            e("button", {
              onClick: t[4] || (t[4] = (i) => c.value = "meta"),
              class: Z(["di-editor-tab", { active: c.value === "meta" }]),
              style: F(c.value === "meta" ? { color: "#ec4899", borderColor: "#ec4899", background: "rgba(236, 72, 153, 0.1)" } : {})
            }, [
              M(s(Ye), { style: { width: "12px", height: "12px" } }),
              t[34] || (t[34] = j(" 開発情報 ", -1))
            ], 6)
          ]),
          e("div", kl, [
            c.value === "note" ? (d(), r(V, { key: 0 }, [
              e("div", xl, [
                t[35] || (t[35] = e("label", { class: "di-form-label" }, "タイプ", -1)),
                e("div", gl, [
                  (d(), r(V, null, W(Pe, (i) => e("button", {
                    key: i.value,
                    onClick: (oe) => g.value = i.value,
                    class: "di-note-type-btn",
                    style: F(g.value === i.value ? { color: i.color, borderColor: i.color, background: i.color + "15" } : {})
                  }, [
                    (d(), z(Se(i.icon), {
                      style: F([{ width: "16px", height: "16px" }, { color: g.value === i.value ? i.color : "#64748b" }])
                    }, null, 8, ["style"])),
                    e("span", {
                      style: F({ color: g.value === i.value ? i.color : "#94a3b8" })
                    }, f(i.label), 5)
                  ], 12, wl)), 64))
                ])
              ]),
              e("div", $l, [
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
            ], 64)) : h("", !0),
            c.value === "field" ? (d(), r(V, { key: 1 }, [
              e("div", Il, [
                e("div", Ml, [
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
                e("div", _l, [
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
              e("div", El, [
                t[41] || (t[41] = e("label", { class: "di-form-label" }, "データ型", -1)),
                P(e("select", {
                  "onUpdate:modelValue": t[9] || (t[9] = (i) => T.value = i),
                  class: "di-select"
                }, [
                  t[40] || (t[40] = e("option", { value: "" }, "選択してください", -1)),
                  (d(), r(V, null, W(be, (i) => e("option", {
                    key: i,
                    value: i
                  }, f(i), 9, Pl)), 64))
                ], 512), [
                  [me, T.value]
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
              e("div", Sl, [
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
            ], 64)) : h("", !0),
            c.value === "action" ? (d(), r(V, { key: 2 }, [
              e("div", Tl, [
                t[44] || (t[44] = e("label", { class: "di-form-label" }, "アクションタイプ", -1)),
                P(e("select", {
                  "onUpdate:modelValue": t[12] || (t[12] = (i) => x.value = i),
                  class: "di-select"
                }, [
                  (d(), r(V, null, W(ie, (i) => e("option", {
                    key: i.value,
                    value: i.value
                  }, f(i.label), 9, Ul)), 64))
                ], 512), [
                  [me, x.value]
                ])
              ]),
              x.value === "api" ? (d(), r("div", Al, [
                e("div", Vl, [
                  t[45] || (t[45] = e("label", { class: "di-form-label" }, "メソッド", -1)),
                  P(e("select", {
                    "onUpdate:modelValue": t[13] || (t[13] = (i) => G.value = i),
                    class: "di-select"
                  }, [
                    (d(), r(V, null, W(Ee, (i) => e("option", {
                      key: i,
                      value: i
                    }, f(i), 9, Ll)), 64))
                  ], 512), [
                    [me, G.value]
                  ])
                ]),
                e("div", Rl, [
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
              ])) : (d(), r("div", Bl, [
                e("label", jl, f(x.value === "navigate" ? "遷移先パス" : x.value === "modal" ? "モーダル名" : x.value === "emit" ? "イベント名" : "関数名"), 1),
                P(e("input", {
                  "onUpdate:modelValue": t[15] || (t[15] = (i) => y.value = i),
                  type: "text",
                  placeholder: x.value === "navigate" ? "/tasks" : x.value === "modal" ? "ConfirmDialog" : x.value === "emit" ? "onSubmit" : "handleClick",
                  class: "di-input"
                }, null, 8, Hl), [
                  [A, y.value]
                ])
              ])),
              e("div", Ol, [
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
            ], 64)) : h("", !0),
            c.value === "links" ? (d(), r(V, { key: 3 }, [
              e("div", ql, [
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
                  "onUpdate:modelValue": t[18] || (t[18] = (i) => o.value = i),
                  type: "text",
                  placeholder: "https://www.figma.com/design/...",
                  class: "di-input"
                }, null, 512), [
                  [A, o.value]
                ])
              ]),
              e("div", Nl, [
                e("div", Fl, [
                  t[50] || (t[50] = e("label", { class: "di-form-label" }, "GitHub Issue", -1)),
                  P(e("input", {
                    "onUpdate:modelValue": t[19] || (t[19] = (i) => k.value = i),
                    type: "text",
                    placeholder: "#123",
                    class: "di-input"
                  }, null, 512), [
                    [A, k.value]
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
            ], 64)) : h("", !0),
            c.value === "meta" ? (d(), r(V, { key: 4 }, [
              e("div", Kl, [
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
              e("div", Yl, [
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
                  "onUpdate:modelValue": t[25] || (t[25] = (i) => E.value = i),
                  type: "text",
                  placeholder: "primaryColor, secondaryColor",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [A, E.value]
                ])
              ]),
              e("div", Wl, [
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
              e("div", Ql, [
                t[58] || (t[58] = e("label", { class: "di-form-label" }, "レスポンシブ動作", -1)),
                P(e("textarea", {
                  "onUpdate:modelValue": t[27] || (t[27] = (i) => B.value = i),
                  rows: "2",
                  placeholder: "モバイルでの表示変更、ブレークポイントなど...",
                  class: "di-textarea"
                }, null, 512), [
                  [A, B.value]
                ])
              ])
            ], 64)) : h("", !0)
          ]),
          e("div", es, [
            e("button", {
              onClick: te,
              class: "di-btn-delete"
            }, [
              M(s(Me), { style: { width: "14px", height: "14px" } }),
              t[59] || (t[59] = j(" 削除 ", -1))
            ]),
            e("div", ts, [
              e("button", {
                onClick: n,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: v,
                class: "di-btn-save"
              }, [
                M(s(Ke), { style: { width: "14px", height: "14px" } }),
                t[60] || (t[60] = j(" 保存 ", -1))
              ])
            ])
          ])
        ])
      ])) : h("", !0)
    ]));
  }
}), ss = /* @__PURE__ */ ke(ls, [["__scopeId", "data-v-fdafa9a6"]]), ns = {
  key: 0,
  "data-dev-inspector": "",
  class: "di-loading-overlay"
}, os = { class: "di-highlight-label" }, is = {
  key: 2,
  "data-dev-inspector": "",
  class: "di-pick-banner"
}, as = ["onClick"], ds = ["onClick"], us = {
  "data-dev-inspector": "",
  class: "di-scan-banner"
}, rs = ["onClick"], cs = { class: "di-analysis-type" }, vs = {
  key: 0,
  class: "di-analysis-db"
}, ps = ["onClick"], ys = {
  key: 0,
  class: "di-analysis-text"
}, bs = {
  "data-dev-inspector": "",
  class: "di-analysis-banner"
}, ms = /* @__PURE__ */ ve({
  __name: "DevPickOverlay",
  setup(b) {
    const l = pe(), c = p(null), C = p(null), D = p(0), T = p(0);
    function L(g) {
      var o;
      const a = l.getElementConfig(g);
      if (!(a != null && a.sourceBinding)) {
        const k = ((o = a == null ? void 0 : a.note) == null ? void 0 : o.type) || "info";
        return {
          info: "#60a5fa",
          warning: "#fbbf24",
          todo: "#10b981",
          question: "#a78bfa"
        }[k] || "#60a5fa";
      }
      return a.sourceBinding.isStatic ? "#10b981" : a.sourceBinding.type === "v-model" ? "#8b5cf6" : a.sourceBinding.type === "api" ? "#f59e0b" : "#60a5fa";
    }
    const O = ne(() => {
      var w, m;
      const g = D.value, a = T.value, o = [];
      if (!l.isEnabled) return o;
      const k = l.getConfiguredSelectors();
      for (const $ of k)
        try {
          const R = document.querySelector($);
          if (R) {
            const U = R.getBoundingClientRect(), E = l.getElementConfig($), I = ((w = E == null ? void 0 : E.sourceBinding) == null ? void 0 : w.isStatic) || !1, B = ((m = E == null ? void 0 : E.sourceBinding) == null ? void 0 : m.type) || "";
            let S = "";
            I ? S = "固定" : B === "v-model" ? S = "フォーム" : B === "api" ? S = "データ" : S = "メモ", o.push({
              selector: $,
              top: `${U.top + g}px`,
              left: `${U.left + a}px`,
              width: `${U.width}px`,
              height: `${U.height}px`,
              color: L($),
              isStatic: I,
              label: S
            });
          }
        } catch {
        }
      return o;
    }), x = ne(() => {
      var k;
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
              isStatic: ((k = w.detected.sourceBinding) == null ? void 0 : k.isStatic) || !1
            });
          }
        } catch {
        }
      return o;
    }), y = ne(() => {
      const g = D.value, a = T.value, o = [], k = l.analysisFilter;
      if (k === "none" || !l.isEnabled || l.analysisResults.length === 0) return o;
      for (const w of l.analysisResults) {
        if (!w.matched) continue;
        const m = w.element, $ = m.db && (m.db.table || m.db.column), R = m.api && m.api.endpoint, U = m.type === "static", E = m.type === "data";
        if (k === "db-api") {
          if (!$ && !R) continue;
        } else if (k === "static") {
          if (!U) continue;
        } else if (k === "data") {
          if (!E) continue;
        } else if (k === "other" && ($ || R || U || E))
          continue;
        try {
          const I = document.querySelector(w.selector);
          if (I) {
            const B = I.getBoundingClientRect();
            if (B.width > window.innerWidth * 0.8 || B.height > window.innerHeight * 0.5)
              continue;
            let S = "";
            m.db && (S = `${m.db.table}.${m.db.column}`);
            let J = "";
            m.api && (J = `${m.api.method} ${m.api.endpoint}`), o.push({
              selector: w.selector,
              top: `${B.top + g}px`,
              left: `${B.left + a}px`,
              width: `${B.width}px`,
              height: `${B.height}px`,
              type: m.type,
              text: m.text || m.binding || "",
              dbInfo: S,
              apiInfo: J
            });
          }
        } catch {
        }
      }
      return o;
    });
    function G(g) {
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
      const k = o.getBoundingClientRect();
      c.value = {
        top: `${k.top + window.scrollY}px`,
        left: `${k.left + window.scrollX}px`,
        width: `${k.width}px`,
        height: `${k.height}px`
      };
      const w = l.generateSelector(o);
      l.setHoveredSelector(w);
    }
    function X(g) {
      if (!(!l.isPickMode || g.target.closest("[data-dev-inspector]")) && (g.preventDefault(), g.stopPropagation(), C.value)) {
        const o = l.generateSelector(C.value);
        l.startEditing(o), l.togglePickMode();
      }
    }
    function N(g) {
      g.key === "Escape" && l.isPickMode && l.togglePickMode();
    }
    function q() {
      D.value = window.scrollY, T.value = window.scrollX;
    }
    return Ie(() => {
      window.addEventListener("mousemove", G, !0), window.addEventListener("click", X, !0), window.addEventListener("keydown", N), window.addEventListener("scroll", q), window.addEventListener("resize", q);
    }), Te(() => {
      window.removeEventListener("mousemove", G, !0), window.removeEventListener("click", X, !0), window.removeEventListener("keydown", N), window.removeEventListener("scroll", q), window.removeEventListener("resize", q);
    }), Ce(() => l.isPickMode, (g) => {
      g || (c.value = null, C.value = null);
    }), (g, a) => (d(), z(se, { to: "body" }, [
      s(l).isInitializing ? (d(), r("div", ns, [...a[2] || (a[2] = [
        e("div", { class: "di-loading-content" }, [
          e("div", { class: "di-loading-spinner" }),
          e("span", { class: "di-loading-text" }, "Developer Mode 起動中...")
        ], -1)
      ])])) : h("", !0),
      s(l).isPickMode && c.value ? (d(), r("div", {
        key: 1,
        "data-dev-inspector": "",
        class: "di-highlight",
        style: F({
          top: c.value.top,
          left: c.value.left,
          width: c.value.width,
          height: c.value.height
        })
      }, [
        e("div", os, f(s(l).hoveredSelector), 1)
      ], 4)) : h("", !0),
      s(l).isPickMode ? (d(), r("div", is, [...a[3] || (a[3] = [
        e("span", null, "要素をクリックしてメモを追加", -1),
        e("kbd", null, "ESC", -1),
        e("span", { class: "di-pick-hint" }, "でキャンセル", -1)
      ])])) : h("", !0),
      s(l).isEnabled && !s(l).isPickMode && !s(l).editingElementId && s(l).scanResults.length === 0 && s(l).analysisResults.length === 0 ? (d(!0), r(V, { key: 3 }, W(O.value, (o) => (d(), r("div", {
        key: o.selector,
        "data-dev-inspector": "",
        class: "di-annotation-box",
        style: F({
          top: o.top,
          left: o.left,
          width: o.width,
          height: o.height,
          borderColor: o.color,
          backgroundColor: o.color + "15"
        }),
        onClick: (k) => s(l).startEditing(o.selector)
      }, [
        e("div", {
          class: "di-annotation-label",
          style: F({ backgroundColor: o.color })
        }, f(o.label), 5)
      ], 12, as))), 128)) : h("", !0),
      s(l).isEnabled && !s(l).editingElementId && x.value.length > 0 && s(l).analysisResults.length === 0 ? (d(), r(V, { key: 4 }, [
        (d(!0), r(V, null, W(x.value, (o) => (d(), r("div", {
          key: "scan-" + o.selector,
          "data-dev-inspector": "",
          class: Z(["di-scan-highlight", { "di-scan-static": o.isStatic }]),
          style: F({
            top: o.top,
            left: o.left,
            width: o.width,
            height: o.height
          }),
          onClick: (k) => s(l).startEditing(o.selector)
        }, [
          e("div", {
            class: Z(["di-scan-label", { "di-scan-label-static": o.isStatic }])
          }, f(o.isStatic ? "固定文言" : "動的データ"), 3)
        ], 14, ds))), 128)),
        e("div", us, [
          e("span", null, f(x.value.length) + "件の要素を検出", 1),
          e("button", {
            onClick: a[0] || (a[0] = (o) => s(l).clearScanResults()),
            class: "di-scan-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : h("", !0),
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
          style: F({
            top: o.top,
            left: o.left,
            width: o.width,
            height: o.height
          }),
          onClick: (k) => s(l).startEditing(o.selector)
        }, [
          e("div", {
            class: Z(["di-analysis-label", "di-analysis-label-" + (o.dbInfo ? "db" : o.type)])
          }, [
            e("span", cs, f(o.dbInfo ? "DB" : o.type === "static" ? "固定" : o.type === "data" ? "データ" : o.type), 1),
            o.dbInfo ? (d(), r("span", vs, f(o.dbInfo), 1)) : h("", !0),
            e("button", {
              class: "di-analysis-delete",
              onClick: ce((k) => s(l).removeAnalysisResult(o.selector), ["stop"]),
              title: "この要素を非表示"
            }, "×", 8, ps)
          ], 2),
          o.text && o.text.length < 30 ? (d(), r("div", ys, f(o.text), 1)) : h("", !0)
        ], 14, rs))), 128)),
        e("div", bs, [
          e("span", null, "📊 分析データ: " + f(y.value.length) + "件の要素", 1),
          e("button", {
            onClick: a[1] || (a[1] = (o) => s(l).clearAnalysisResults()),
            class: "di-analysis-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : h("", !0)
    ]));
  }
}), fs = /* @__PURE__ */ ke(ms, [["__scopeId", "data-v-6de853d4"]]), hs = {
  key: 0,
  "data-dev-inspector": ""
}, ks = /* @__PURE__ */ ve({
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
    const l = b, c = pe();
    return Ie(() => {
      c.init({
        storageKey: l.storageKey,
        enabledInProduction: l.enabledInProduction,
        initialAnnotations: l.initialAnnotations
      });
    }), (C, D) => s(c).isAvailable ? (d(), r("div", hs, [
      M(cl),
      M(ss),
      M(fs)
    ])) : h("", !0);
  }
}), ws = {
  install(b, l = {}) {
    const { autoRegister: c = !0, ...C } = l;
    c && b.component("DevInspector", ks), b.provide("devInspectorOptions", C);
  }
};
export {
  ss as DevElementEditor,
  ks as DevInspector,
  cl as DevPanel,
  fs as DevPickOverlay,
  ws as VueDevInspector,
  ws as default,
  Is as useDevInspector,
  pe as useDevInspectorStore
};
