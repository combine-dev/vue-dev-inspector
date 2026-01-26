import { h as Se, defineComponent as he, inject as Fe, ref as p, computed as ne, openBlock as a, createElementBlock as u, Fragment as V, createBlock as N, Teleport as oe, unref as n, createVNode as I, createCommentVNode as f, createElementVNode as e, normalizeClass as Z, toDisplayString as y, renderList as Q, withDirectives as D, vModelText as T, normalizeStyle as X, createTextVNode as R, withModifiers as me, watch as Ve, resolveDynamicComponent as Ne, vModelSelect as Ce, onMounted as Be, onUnmounted as Ge } from "vue";
import { u as ke } from "./useDevInspector-C3YPKzQm.js";
import { a as Zs } from "./useDevInspector-C3YPKzQm.js";
import { default as Ws } from "./vite.js";
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ye = {
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
const Xe = (m) => m.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), E = (m, l) => ({ size: c, strokeWidth: h = 2, absoluteStrokeWidth: _, color: A, class: B, ...j }, { attrs: w, slots: b }) => Se(
  "svg",
  {
    ...ye,
    width: c || ye.width,
    height: c || ye.height,
    stroke: A || ye.stroke,
    "stroke-width": _ ? Number(h) * 24 / Number(c) : h,
    ...w,
    class: ["lucide", `lucide-${Xe(m)}`],
    ...j
  },
  [
    ...l.map((K) => Se(...K)),
    ...b.default ? [b.default()] : []
  ]
);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ke = E("AlertCircleIcon", [
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
const Ye = E("AlertTriangleIcon", [
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
const Ze = E("CheckSquareIcon", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ae = E("CodeIcon", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Te = E("DatabaseIcon", [
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
const be = E("DownloadIcon", [
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
const Je = E("ExternalLinkIcon", [
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
const We = E("FileSpreadsheetIcon", [
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
const Ue = E("FileTextIcon", [
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
const Qe = E("GitBranchIcon", [
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
const et = E("GlobeIcon", [
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
const tt = E("HelpCircleIcon", [
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
const lt = E("InfoIcon", [
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
const st = E("LinkIcon", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fe = E("Loader2Icon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nt = E("MessageSquareIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const it = E("MousePointer2Icon", [
  ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ot = E("PenLineIcon", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const at = E("SaveIcon", [
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
const Ie = E("ScanIcon", [
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
const Le = E("ServerIcon", [
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
const dt = E("Settings2Icon", [
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
const Re = E("Trash2Icon", [
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
const ut = E("UploadIcon", [
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
const rt = E("Wand2Icon", [
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
const ct = E("ZapIcon", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
]);
async function vt(m, l, c = {}) {
  var k;
  const h = await import("./xlsx-BopDBbWb.js"), { systemName: _ = "System", author: A = "" } = c, B = /* @__PURE__ */ new Date(), j = `${B.getFullYear()}/${B.getMonth() + 1}/${B.getDate()}`, w = h.utils.book_new(), b = [];
  b.push([
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
    _,
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
    (m == null ? void 0 : m.name) || "",
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
    A,
    "",
    "作成日",
    "",
    "",
    "",
    "",
    j
  ]), b.push([]), b.push([
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
    (m == null ? void 0 : m.componentPath) || "",
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
    (m == null ? void 0 : m.figmaUrl) || ""
  ]), b.push([]), b.push(["機能概要"]), b.push([(m == null ? void 0 : m.description) || ""]), b.push([]), b.push(["画面レイアウト　figmaURL"]), b.push([(m == null ? void 0 : m.figmaUrl) || ""]), b.push([]), m != null && m.apis && m.apis.length > 0 && (b.push(["API一覧"]), b.push(["", "メソッド", "", "エンドポイント", "", "", "", "", "", "", "", "説明"]), m.apis.forEach((d) => {
    b.push(["", d.method, "", d.endpoint, "", "", "", "", "", "", "", d.description]);
  }), b.push([])), b.push(["画面項目　ヘッダーフッターは省く"]), b.push([
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
  ]), Object.values(l).forEach((d, o) => {
    var L, U, S;
    const x = d.id;
    let $ = "", g = "", C = "";
    if ((L = d.note) != null && L.text && ($ = d.note.text), d.fieldInfo && ($ += $ ? `
` : "", $ += `DB: ${d.fieldInfo.table}.${d.fieldInfo.column}`, d.fieldInfo.type && ($ += ` (${d.fieldInfo.type})`), d.fieldInfo.description && ($ += `
${d.fieldInfo.description}`)), d.actionInfo && (C = `[${{
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行"
    }[d.actionInfo.type] || d.actionInfo.type}]`, d.actionInfo.target && (C += ` ${d.actionInfo.method || ""} ${d.actionInfo.target}`), d.actionInfo.description && (C += `
${d.actionInfo.description}`)), d.links) {
      const M = [];
      d.links.testPath && M.push(`テスト: ${d.links.testPath}`), d.links.figmaUrl && M.push(`Figma: ${d.links.figmaUrl}`), d.links.githubIssue && M.push(`Issue: ${d.links.githubIssue}`), d.links.githubPr && M.push(`PR: ${d.links.githubPr}`), M.length > 0 && (C += C ? `

` : "", C += M.join(`
`));
    }
    if (d.devMeta) {
      const M = [];
      (U = d.devMeta.usedStores) != null && U.length && M.push(`Store: ${d.devMeta.usedStores.join(", ")}`), (S = d.devMeta.usedComponents) != null && S.length && M.push(`Components: ${d.devMeta.usedComponents.join(", ")}`), d.devMeta.accessibility && M.push(`A11y: ${d.devMeta.accessibility}`), d.devMeta.responsive && M.push(`Responsive: ${d.devMeta.responsive}`), M.length > 0 && (C += C ? `

` : "", C += `[開発情報]
` + M.join(`
`));
    }
    b.push([
      "",
      o + 1,
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
      $,
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
      g,
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
      C
    ]);
  });
  const Y = h.utils.aoa_to_sheet(b);
  Y["!cols"] = [
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
  ], h.utils.book_append_sheet(w, Y, "画面設計書");
  const z = `画面仕様書_${((k = m == null ? void 0 : m.name) == null ? void 0 : k.replace(/[/\\?%*:|"<>]/g, "-")) || "screen"}_${j.replace(/\//g, "")}.xlsx`;
  return h.writeFile(w, z), z;
}
const pt = {
  key: 0,
  class: "di-panel",
  "data-dev-inspector": ""
}, yt = { class: "di-header" }, bt = { class: "di-header-title" }, ft = { class: "di-edit-section" }, mt = { class: "di-scan-section" }, ht = ["disabled"], kt = ["disabled"], gt = { class: "di-scan-section" }, xt = ["disabled", "title"], wt = {
  key: 0,
  class: "di-scan-results"
}, $t = {
  key: 0,
  class: "di-scan-result-item"
}, Ct = { class: "di-scan-result-count" }, It = { class: "di-scan-result-count" }, Mt = { class: "di-analysis-section" }, _t = { class: "di-analysis-header" }, Et = { class: "di-analysis-input" }, Pt = { class: "di-analysis-buttons" }, Dt = ["disabled"], St = ["disabled"], At = {
  key: 0,
  class: "di-analysis-error"
}, Tt = {
  key: 1,
  class: "di-analysis-status"
}, Ut = { class: "di-analysis-count" }, Lt = {
  key: 2,
  class: "di-analysis-filter"
}, Vt = { class: "di-filter-buttons" }, Bt = ["onClick"], Rt = {
  key: 0,
  class: "di-hidden-actions"
}, jt = ["disabled"], qt = { key: 1 }, Ht = { key: 2 }, Ot = { class: "di-content" }, zt = { class: "di-section" }, Ft = { class: "di-screen-name" }, Nt = { class: "di-screen-desc" }, Gt = { class: "di-card" }, Xt = { class: "di-card-label" }, Kt = { class: "di-code-blue" }, Yt = {
  key: 0,
  class: "di-card"
}, Zt = { class: "di-card-label" }, Jt = ["href"], Wt = {
  key: 1,
  class: "di-card"
}, Qt = { class: "di-card-label" }, el = { class: "di-api-list" }, tl = { class: "di-api-info" }, ll = { class: "di-api-endpoint" }, sl = { class: "di-api-desc" }, nl = {
  key: 2,
  class: "di-card"
}, il = { class: "di-card-label" }, ol = { class: "di-notes-list" }, al = {
  key: 1,
  class: "di-no-spec"
}, dl = { class: "di-card" }, ul = { class: "di-card-header" }, rl = { class: "di-card-label" }, cl = { class: "di-count-badge" }, vl = {
  key: 0,
  class: "di-export-buttons"
}, pl = {
  key: 1,
  class: "di-export-hint"
}, yl = { class: "di-action-buttons" }, bl = {
  key: 0,
  class: "di-indicator",
  "data-dev-inspector": ""
}, fl = { class: "di-modal" }, ml = ["value"], hl = { class: "di-modal-actions" }, kl = { class: "di-modal" }, gl = { class: "di-file-drop" }, xl = {
  key: 0,
  class: "di-error"
}, wl = { class: "di-modal-actions" }, $l = ["disabled"], Cl = /* @__PURE__ */ he({
  __name: "DevPanel",
  setup(m) {
    const l = ke(), c = Fe("router", null), h = p(!1), _ = p(!1), A = p(""), B = p(""), j = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, w = ne(() => l.currentScreenSpec), b = ne(() => Object.keys(l.elementConfigs).length);
    function K() {
      const O = l.exportConfigs();
      navigator.clipboard.writeText(O), h.value = !1;
    }
    function Y() {
      const O = l.exportConfigs(), i = new Blob([O], { type: "application/json" }), J = URL.createObjectURL(i), v = document.createElement("a");
      v.href = J, v.download = "dev-mode-configs.json", v.click(), URL.revokeObjectURL(J), h.value = !1;
    }
    function H() {
      l.downloadAnnotations();
    }
    async function z() {
      try {
        await vt(
          l.currentScreenSpec,
          l.elementConfigs,
          { systemName: "System" }
        );
      } catch (O) {
        console.error("Failed to export xlsx:", O), alert("xlsx export failed. Make sure xlsx package is installed.");
      }
    }
    function k() {
      try {
        l.importConfigs(A.value), A.value = "", B.value = "", _.value = !1;
      } catch {
        B.value = "JSONの形式が正しくありません";
      }
    }
    function d(O) {
      var le;
      const J = (le = O.target.files) == null ? void 0 : le[0];
      if (!J) return;
      const v = new FileReader();
      v.onload = (xe) => {
        var te;
        A.value = (te = xe.target) == null ? void 0 : te.result;
      }, v.readAsText(J);
    }
    function o() {
      confirm("すべての要素設定を削除しますか？") && l.clearAllConfigs();
    }
    const x = p(0), $ = p(!1), g = p([]);
    async function C(O = !1) {
      $.value = !0, x.value = await l.scanCurrentPage({ rescan: O });
    }
    async function L() {
      if (!c) {
        alert("Vue Routerが見つかりません。全ページスキャンにはVue Routerが必要です。");
        return;
      }
      confirm("全ページをスキャンします。ページ遷移が発生しますがよろしいですか？") && ($.value = !0, g.value = await l.scanAllPages(c));
    }
    const U = p("/dev-inspector-analysis.json"), S = p(!1), M = p(""), q = p(0), P = p(!1), G = [
      { value: "all", label: "すべて" },
      { value: "db-api", label: "DB/API" },
      { value: "static", label: "固定文言" },
      { value: "data", label: "動的データ" },
      { value: "other", label: "その他" },
      { value: "none", label: "非表示" }
    ];
    async function se() {
      S.value = !0, M.value = "";
      try {
        if (await l.loadAnalysisData(U.value), l.analysisData) {
          const O = Object.values(l.analysisData.components).reduce((i, J) => i + J.elements.length, 0);
          alert(`分析データを読み込みました（${Object.keys(l.analysisData.components).length}コンポーネント、${O}要素）`);
        } else
          M.value = "分析データの読み込みに失敗しました";
      } catch (O) {
        M.value = `読み込みエラー: ${O}`;
      } finally {
        S.value = !1;
      }
    }
    async function ge() {
      if (!l.analysisData) {
        alert("先に分析データを読み込んでください");
        return;
      }
      q.value = await l.applyAnalysisToPage();
    }
    async function ee() {
      P.value = !0;
      try {
        l.clearHiddenSelectors(), l.analysisData && await l.applyAnalysisToPage();
      } finally {
        P.value = !1;
      }
    }
    return (O, i) => {
      var J;
      return a(), u(V, null, [
        (a(), N(oe, { to: "body" }, [
          n(l).isEnabled && !n(l).isPanelOpen ? (a(), u("button", {
            key: 0,
            onClick: i[0] || (i[0] = //@ts-ignore
            (...v) => n(l).openPanel && n(l).openPanel(...v)),
            class: "di-fab",
            title: "画面仕様を表示",
            "data-dev-inspector": ""
          }, [
            I(n(Ue), { style: { width: "20px", height: "20px" } })
          ])) : f("", !0)
        ])),
        (a(), N(oe, { to: "body" }, [
          n(l).isEnabled && n(l).isPanelOpen ? (a(), u("div", pt, [
            e("div", yt, [
              e("div", bt, [
                I(n(Ae), { style: { width: "20px", height: "20px", color: "#60a5fa" } }),
                i[15] || (i[15] = e("span", null, "Developer Mode", -1))
              ]),
              e("button", {
                onClick: i[1] || (i[1] = //@ts-ignore
                (...v) => n(l).closePanel && n(l).closePanel(...v)),
                class: "di-close-btn"
              }, [
                I(n(Me), { style: { width: "20px", height: "20px" } })
              ])
            ]),
            e("div", ft, [
              e("button", {
                onClick: i[2] || (i[2] = //@ts-ignore
                (...v) => n(l).togglePickMode && n(l).togglePickMode(...v)),
                class: Z(["di-pick-btn", { active: n(l).isPickMode }])
              }, [
                I(n(it), { style: { width: "16px", height: "16px" } }),
                e("span", null, y(n(l).isPickMode ? "要素選択中..." : "任意の要素にメモを追加"), 1)
              ], 2),
              e("div", mt, [
                e("button", {
                  onClick: i[3] || (i[3] = (v) => C(!1)),
                  class: "di-scan-btn",
                  disabled: n(l).isScanning,
                  title: "新規要素のみスキャン"
                }, [
                  n(l).isScanning && !n(l).currentScanPage ? (a(), N(n(fe), {
                    key: 0,
                    class: "di-spin",
                    style: { width: "16px", height: "16px" }
                  })) : (a(), N(n(Ie), {
                    key: 1,
                    style: { width: "16px", height: "16px" }
                  })),
                  e("span", null, y(n(l).isScanning && !n(l).currentScanPage ? `${n(l).scanProgress}%` : "スキャン"), 1)
                ], 8, ht),
                e("button", {
                  onClick: i[4] || (i[4] = (v) => C(!0)),
                  class: "di-scan-btn di-scan-btn-rescan",
                  disabled: n(l).isScanning,
                  title: "既存の設定をクリアして再スキャン"
                }, [
                  I(n(Ie), { style: { width: "16px", height: "16px" } }),
                  i[16] || (i[16] = e("span", null, "再スキャン", -1))
                ], 8, kt)
              ]),
              e("div", gt, [
                e("button", {
                  onClick: L,
                  class: "di-scan-btn di-scan-btn-all",
                  disabled: n(l).isScanning,
                  title: n(c) ? "全ページをスキャン" : "Vue Routerが必要です"
                }, [
                  n(l).isScanning && n(l).currentScanPage ? (a(), N(n(fe), {
                    key: 0,
                    class: "di-spin",
                    style: { width: "16px", height: "16px" }
                  })) : (a(), N(n(et), {
                    key: 1,
                    style: { width: "16px", height: "16px" }
                  })),
                  e("span", null, y(n(l).currentScanPage ? `${n(l).currentScanPage}` : "全ページスキャン"), 1)
                ], 8, xt)
              ]),
              $.value && (x.value > 0 || g.value.length > 0) ? (a(), u("div", wt, [
                x.value > 0 ? (a(), u("div", $t, [
                  e("span", Ct, y(x.value), 1),
                  i[17] || (i[17] = e("span", null, "件の要素を検出・登録しました", -1))
                ])) : f("", !0),
                (a(!0), u(V, null, Q(g.value, (v) => (a(), u("div", {
                  key: v.page,
                  class: "di-scan-result-item"
                }, [
                  e("code", null, y(v.page), 1),
                  e("span", It, y(v.count), 1)
                ]))), 128)),
                e("button", {
                  onClick: i[5] || (i[5] = (v) => {
                    $.value = !1, g.value = [];
                  }),
                  class: "di-scan-close"
                }, " 閉じる ")
              ])) : f("", !0),
              e("div", Mt, [
                e("div", _t, [
                  I(n(Le), { style: { width: "16px", height: "16px", color: "#3b82f6" } }),
                  i[18] || (i[18] = e("span", null, "CLIソース解析", -1))
                ]),
                e("div", Et, [
                  D(e("input", {
                    "onUpdate:modelValue": i[6] || (i[6] = (v) => U.value = v),
                    type: "text",
                    class: "di-analysis-url",
                    placeholder: "/dev-inspector-analysis.json"
                  }, null, 512), [
                    [T, U.value]
                  ])
                ]),
                e("div", Pt, [
                  e("button", {
                    onClick: se,
                    class: "di-analysis-btn",
                    disabled: S.value
                  }, [
                    S.value ? (a(), N(n(fe), {
                      key: 0,
                      class: "di-spin",
                      style: { width: "14px", height: "14px" }
                    })) : (a(), N(n(be), {
                      key: 1,
                      style: { width: "14px", height: "14px" }
                    })),
                    i[19] || (i[19] = e("span", null, "読み込み", -1))
                  ], 8, Dt),
                  e("button", {
                    onClick: ge,
                    class: "di-analysis-btn di-analysis-btn-apply",
                    disabled: !n(l).analysisData
                  }, [
                    I(n(Ie), { style: { width: "14px", height: "14px" } }),
                    i[20] || (i[20] = e("span", null, "ページに適用", -1))
                  ], 8, St)
                ]),
                M.value ? (a(), u("div", At, y(M.value), 1)) : f("", !0),
                n(l).analysisResults.length > 0 ? (a(), u("div", Tt, [
                  e("span", Ut, y(n(l).analysisResults.filter((v) => v.matched).length), 1),
                  e("span", null, "/ " + y(n(l).analysisResults.length) + " 要素がマッチ", 1)
                ])) : f("", !0),
                n(l).analysisResults.length > 0 ? (a(), u("div", Lt, [
                  i[22] || (i[22] = e("span", { class: "di-filter-label" }, "表示フィルター:", -1)),
                  e("div", Vt, [
                    (a(), u(V, null, Q(G, (v) => e("button", {
                      key: v.value,
                      onClick: (le) => n(l).analysisFilter = v.value,
                      class: Z(["di-filter-btn", { active: n(l).analysisFilter === v.value }])
                    }, y(v.label), 11, Bt)), 64))
                  ]),
                  n(l).hiddenAnalysisSelectors.size > 0 ? (a(), u("div", Rt, [
                    e("button", {
                      onClick: ee,
                      class: "di-restore-btn",
                      disabled: P.value
                    }, [
                      P.value ? (a(), N(n(fe), {
                        key: 0,
                        class: "di-spin",
                        style: { width: "12px", height: "12px" }
                      })) : f("", !0),
                      P.value ? (a(), u("span", qt, "リセット中...")) : (a(), u("span", Ht, "非表示 (" + y(n(l).hiddenAnalysisSelectors.size) + ") をリセット", 1))
                    ], 8, jt),
                    e("button", {
                      onClick: i[7] || (i[7] = (v) => n(l).downloadChanges()),
                      class: "di-export-changes-btn",
                      title: "削除した要素をエクスポート (CLI merge用)"
                    }, [
                      I(n(be), { style: { width: "12px", height: "12px" } }),
                      i[21] || (i[21] = e("span", null, "変更をエクスポート", -1))
                    ])
                  ])) : f("", !0)
                ])) : f("", !0)
              ])
            ]),
            e("div", Ot, [
              w.value ? (a(), u(V, { key: 0 }, [
                e("div", zt, [
                  e("h2", Ft, y(w.value.name), 1),
                  e("p", Nt, y(w.value.description), 1)
                ]),
                e("div", Gt, [
                  e("div", Xt, [
                    I(n(Ae), { style: { width: "16px", height: "16px" } }),
                    i[23] || (i[23] = e("span", null, "Component Path", -1))
                  ]),
                  e("code", Kt, y(w.value.componentPath), 1)
                ]),
                w.value.figmaUrl ? (a(), u("div", Yt, [
                  e("div", Zt, [
                    I(n(Je), { style: { width: "16px", height: "16px" } }),
                    i[24] || (i[24] = e("span", null, "Figma Design", -1))
                  ]),
                  e("a", {
                    href: w.value.figmaUrl,
                    target: "_blank",
                    class: "di-link-purple"
                  }, y(w.value.figmaUrl), 9, Jt)
                ])) : f("", !0),
                w.value.apis.length ? (a(), u("div", Wt, [
                  e("div", Qt, [
                    I(n(Le), { style: { width: "16px", height: "16px" } }),
                    i[25] || (i[25] = e("span", null, "API Endpoints", -1))
                  ]),
                  e("div", el, [
                    (a(!0), u(V, null, Q(w.value.apis, (v, le) => (a(), u("div", {
                      key: le,
                      class: "di-api-item"
                    }, [
                      e("span", {
                        class: "di-method-badge",
                        style: X({ backgroundColor: j[v.method] + "20", color: j[v.method] })
                      }, y(v.method), 5),
                      e("div", tl, [
                        e("code", ll, y(v.endpoint), 1),
                        e("p", sl, y(v.description), 1)
                      ])
                    ]))), 128))
                  ])
                ])) : f("", !0),
                (J = w.value.notes) != null && J.length ? (a(), u("div", nl, [
                  e("div", il, [
                    I(n(Ke), { style: { width: "16px", height: "16px" } }),
                    i[26] || (i[26] = e("span", null, "Notes", -1))
                  ]),
                  e("ul", ol, [
                    (a(!0), u(V, null, Q(w.value.notes, (v, le) => (a(), u("li", {
                      key: le,
                      class: "di-note-item"
                    }, [
                      i[27] || (i[27] = e("span", { class: "di-bullet" }, "•", -1)),
                      e("span", null, y(v), 1)
                    ]))), 128))
                  ])
                ])) : f("", !0)
              ], 64)) : (a(), u("div", al, [
                I(n(Ue), { style: { width: "48px", height: "48px", color: "#334155" } }),
                i[28] || (i[28] = e("p", null, [
                  R("この画面の仕様情報は"),
                  e("br"),
                  R("まだ登録されていません")
                ], -1))
              ])),
              e("div", dl, [
                e("div", ul, [
                  e("div", rl, [
                    I(n(ot), { style: { width: "16px", height: "16px" } }),
                    i[29] || (i[29] = e("span", null, "登録済み要素", -1)),
                    e("span", cl, y(b.value), 1)
                  ])
                ]),
                b.value > 0 ? (a(), u("div", vl, [
                  e("button", {
                    onClick: H,
                    class: "di-btn-green"
                  }, [
                    I(n(Qe), { style: { width: "16px", height: "16px" } }),
                    i[30] || (i[30] = R(" Git管理用に保存 ", -1))
                  ]),
                  e("button", {
                    onClick: z,
                    class: "di-btn-blue"
                  }, [
                    I(n(We), { style: { width: "16px", height: "16px" } }),
                    i[31] || (i[31] = R(" 画面仕様書 (xlsx) 出力 ", -1))
                  ])
                ])) : f("", !0),
                b.value > 0 ? (a(), u("p", pl, [...i[32] || (i[32] = [
                  R(" JSON: ", -1),
                  e("code", null, "dev-annotations.json", -1),
                  R(" に配置してcommit ", -1)
                ])])) : f("", !0),
                e("div", yl, [
                  e("button", {
                    onClick: i[8] || (i[8] = (v) => h.value = !0),
                    class: "di-btn-small"
                  }, [
                    I(n(be), { style: { width: "14px", height: "14px" } }),
                    i[33] || (i[33] = R(" エクスポート ", -1))
                  ]),
                  e("button", {
                    onClick: i[9] || (i[9] = (v) => _.value = !0),
                    class: "di-btn-small"
                  }, [
                    I(n(ut), { style: { width: "14px", height: "14px" } }),
                    i[34] || (i[34] = R(" インポート ", -1))
                  ]),
                  b.value > 0 ? (a(), u("button", {
                    key: 0,
                    onClick: o,
                    class: "di-btn-small di-btn-danger"
                  }, [
                    I(n(Re), { style: { width: "14px", height: "14px" } }),
                    i[35] || (i[35] = R(" 全削除 ", -1))
                  ])) : f("", !0)
                ])
              ])
            ]),
            i[36] || (i[36] = e("div", { class: "di-footer" }, [
              e("kbd", null, "Ctrl"),
              e("span", null, "+"),
              e("kbd", null, "Shift"),
              e("span", null, "+"),
              e("kbd", null, "D"),
              e("span", { class: "di-footer-text" }, "で開発者モード切替")
            ], -1))
          ])) : f("", !0)
        ])),
        (a(), N(oe, { to: "body" }, [
          n(l).isEnabled ? (a(), u("div", bl, [...i[37] || (i[37] = [
            e("span", { class: "di-indicator-dot" }, null, -1),
            R(" Developer Mode ", -1)
          ])])) : f("", !0)
        ])),
        (a(), N(oe, { to: "body" }, [
          h.value ? (a(), u("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: i[11] || (i[11] = me((v) => h.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", fl, [
              i[39] || (i[39] = e("h3", { class: "di-modal-title" }, "設定をエクスポート", -1)),
              e("textarea", {
                readonly: "",
                value: n(l).exportConfigs(),
                class: "di-modal-textarea"
              }, null, 8, ml),
              e("div", hl, [
                e("button", {
                  onClick: i[10] || (i[10] = (v) => h.value = !1),
                  class: "di-btn-small"
                }, "閉じる"),
                e("button", {
                  onClick: Y,
                  class: "di-btn-small di-btn-gray"
                }, [
                  I(n(be), { style: { width: "14px", height: "14px" } }),
                  i[38] || (i[38] = R(" ファイル保存 ", -1))
                ]),
                e("button", {
                  onClick: K,
                  class: "di-btn-small di-btn-primary"
                }, "コピー")
              ])
            ])
          ])) : f("", !0)
        ])),
        (a(), N(oe, { to: "body" }, [
          _.value ? (a(), u("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: i[14] || (i[14] = me((v) => _.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", kl, [
              i[41] || (i[41] = e("h3", { class: "di-modal-title" }, "設定をインポート", -1)),
              e("label", gl, [
                e("input", {
                  type: "file",
                  accept: ".json",
                  onChange: d
                }, null, 32),
                i[40] || (i[40] = e("span", null, "JSONファイルをドラッグまたはクリック", -1))
              ]),
              D(e("textarea", {
                "onUpdate:modelValue": i[12] || (i[12] = (v) => A.value = v),
                placeholder: "またはJSONを直接貼り付け...",
                class: "di-modal-textarea di-modal-textarea-input"
              }, null, 512), [
                [T, A.value]
              ]),
              B.value ? (a(), u("p", xl, y(B.value), 1)) : f("", !0),
              e("div", wl, [
                e("button", {
                  onClick: i[13] || (i[13] = (v) => {
                    _.value = !1, A.value = "", B.value = "";
                  }),
                  class: "di-btn-small"
                }, " キャンセル "),
                e("button", {
                  onClick: k,
                  disabled: !A.value,
                  class: "di-btn-small di-btn-primary"
                }, " インポート ", 8, $l)
              ])
            ])
          ])) : f("", !0)
        ]))
      ], 64);
    };
  }
}), _e = (m, l) => {
  const c = m.__vccOpts || m;
  for (const [h, _] of l)
    c[h] = _;
  return c;
}, Il = /* @__PURE__ */ _e(Cl, [["__scopeId", "data-v-d57ef689"]]), Ml = { class: "di-editor-modal" }, _l = { class: "di-editor-header" }, El = { class: "di-header-actions" }, Pl = {
  key: 0,
  class: "di-static-indicator"
}, Dl = {
  key: 1,
  class: "di-binding-indicator"
}, Sl = {
  key: 0,
  class: "di-binding-source"
}, Al = { class: "di-editor-tabs" }, Tl = { class: "di-editor-content" }, Ul = { class: "di-form-group" }, Ll = { class: "di-note-types" }, Vl = ["onClick"], Bl = { class: "di-form-group" }, Rl = { class: "di-form-group" }, jl = { class: "di-binding-selector" }, ql = { class: "di-form-group" }, Hl = { class: "di-form-label" }, Ol = { class: "di-binding-search-wrapper" }, zl = {
  key: 0,
  class: "di-binding-list"
}, Fl = ["onClick"], Nl = { class: "di-binding-item-main" }, Gl = { class: "di-binding-name" }, Xl = {
  key: 0,
  class: "di-binding-db"
}, Kl = { class: "di-binding-component" }, Yl = {
  key: 1,
  class: "di-binding-empty"
}, Zl = { class: "di-form-row" }, Jl = { class: "di-form-group" }, Wl = { class: "di-form-group" }, Ql = { class: "di-form-group" }, es = ["value"], ts = { class: "di-form-group" }, ls = { class: "di-form-group" }, ss = { class: "di-form-group" }, ns = ["value"], is = {
  key: 0,
  class: "di-form-row"
}, os = {
  class: "di-form-group",
  style: { flex: "0 0 100px" }
}, as = ["value"], ds = {
  class: "di-form-group",
  style: { flex: "1" }
}, us = {
  key: 1,
  class: "di-form-group"
}, rs = { class: "di-form-label" }, cs = ["placeholder"], vs = { class: "di-form-group" }, ps = { class: "di-form-group" }, ys = { class: "di-form-group" }, bs = { class: "di-form-row" }, fs = { class: "di-form-group" }, ms = { class: "di-form-group" }, hs = { class: "di-form-group" }, ks = { class: "di-form-group" }, gs = { class: "di-form-group" }, xs = { class: "di-form-group" }, ws = { class: "di-form-group" }, $s = { class: "di-form-group" }, Cs = { class: "di-form-group" }, Is = { class: "di-editor-footer" }, Ms = { class: "di-editor-actions" }, _s = /* @__PURE__ */ he({
  __name: "DevElementEditor",
  setup(m) {
    const l = ke(), c = p("note"), h = p(""), _ = p(""), A = p(""), B = p(""), j = p(""), w = p("navigate"), b = p(""), K = p("GET"), Y = p(""), H = p(""), z = p(""), k = p("info"), d = p(""), o = p(""), x = p(""), $ = p(""), g = p(""), C = p(""), L = p(""), U = p(""), S = p(""), M = p(""), q = p(""), P = p(""), G = p(""), se = p(!1), ge = ne(() => l.editingElementId !== null), ee = ne(() => l.editingElementId);
    Ve(ee, (F) => {
      var t, s, ae, re, ce, W;
      if (F) {
        const r = l.getElementConfig(F);
        let ve = !1;
        try {
          const ie = document.querySelector(F);
          if (ie) {
            const ue = ie.querySelector("[data-di-binding]") || (ie.hasAttribute("data-di-binding") ? ie : null) || ie.closest("[data-di-binding]");
            if (ue) {
              const $e = ue.getAttribute("data-di-binding"), pe = ue.getAttribute("data-di-db"), Ee = ue.getAttribute("data-di-component"), ze = ue.getAttribute("data-di-db-comment");
              if ($e && (G.value = $e, P.value = "api", se.value = !1, ve = !0), pe) {
                const [Pe, De] = pe.split(".");
                Pe && De && (h.value = Pe, _.value = De, j.value = ze || "", ve = !0);
              }
              Ee && (L.value = Ee), ve && (H.value = `【データバインディング】${$e}${pe ? ` → ${pe}` : ""}`, k.value = "info", c.value = "field");
            }
          }
        } catch (ie) {
          console.warn("[DevInspector] Failed to read data-di-* attributes:", ie);
        }
        r != null && r.fieldInfo && (h.value = r.fieldInfo.table || h.value, _.value = r.fieldInfo.column || _.value, A.value = r.fieldInfo.type || "", B.value = ((t = r.fieldInfo.validation) == null ? void 0 : t.join(", ")) || "", j.value = r.fieldInfo.description || j.value), r != null && r.actionInfo && (w.value = r.actionInfo.type || "navigate", b.value = r.actionInfo.target || "", K.value = r.actionInfo.method || "GET", Y.value = r.actionInfo.description || ""), r != null && r.note && (H.value = r.note.text || H.value, z.value = r.note.author || "", k.value = r.note.type || "info"), r != null && r.links && (d.value = r.links.testPath || "", o.value = r.links.figmaUrl || "", x.value = r.links.githubIssue || "", $.value = r.links.githubPr || "", g.value = r.links.relatedDocs || ""), r != null && r.devMeta && (C.value = ((s = r.devMeta.usedStores) == null ? void 0 : s.join(", ")) || "", L.value = ((ae = r.devMeta.usedComponents) == null ? void 0 : ae.join(", ")) || L.value, U.value = ((re = r.devMeta.i18nKeys) == null ? void 0 : re.join(", ")) || "", S.value = ((ce = r.devMeta.designTokens) == null ? void 0 : ce.join(", ")) || "", M.value = r.devMeta.accessibility || "", q.value = r.devMeta.responsive || ""), r != null && r.sourceBinding && (P.value = r.sourceBinding.type || P.value, G.value = r.sourceBinding.source || G.value, se.value = r.sourceBinding.isStatic || !1), ve || ((W = r == null ? void 0 : r.note) != null && W.text ? c.value = "note" : r != null && r.fieldInfo ? c.value = "field" : r != null && r.actionInfo ? c.value = "action" : r != null && r.links ? c.value = "links" : r != null && r.devMeta ? c.value = "meta" : c.value = "note");
      } else
        O();
    });
    function O() {
      h.value = "", _.value = "", A.value = "", B.value = "", j.value = "", w.value = "navigate", b.value = "", K.value = "GET", Y.value = "", H.value = "", z.value = "", k.value = "info", d.value = "", o.value = "", x.value = "", $.value = "", g.value = "", C.value = "", L.value = "", U.value = "", S.value = "", M.value = "", q.value = "", P.value = "", G.value = "", se.value = !1, c.value = "note";
    }
    function i() {
      l.stopEditing(), O();
    }
    function J() {
      var F;
      if (ee.value)
        try {
          const t = document.querySelector(ee.value);
          if (!t) return;
          const s = l.autoDetectElementInfo(t, ee.value);
          s.sourceBinding && (P.value = s.sourceBinding.type || "", G.value = s.sourceBinding.source || "", se.value = s.sourceBinding.isStatic || !1, s.sourceBinding.isStatic && !H.value && (H.value = "固定文言", k.value = "info")), s.fieldInfo && (h.value = s.fieldInfo.table || "", _.value = s.fieldInfo.column || "", j.value = s.fieldInfo.description || "", c.value = "field"), s.note && (H.value = s.note.text || "", k.value = s.note.type || "info"), (F = s.devMeta) != null && F.usedComponents && (L.value = s.devMeta.usedComponents.join(", "));
        } catch (t) {
          console.error("[DevInspector] Auto-detect failed:", t);
        }
    }
    function v() {
      if (!ee.value) return;
      const F = h.value && _.value ? {
        table: h.value,
        column: _.value,
        type: A.value || void 0,
        validation: B.value ? B.value.split(",").map((W) => W.trim()) : void 0,
        description: j.value || void 0
      } : void 0, t = b.value ? {
        type: w.value,
        target: b.value,
        method: w.value === "api" ? K.value : void 0,
        description: Y.value || void 0
      } : void 0, s = H.value ? {
        text: H.value,
        author: z.value || void 0,
        type: k.value
      } : void 0, ae = d.value || o.value || x.value || $.value || g.value ? {
        testPath: d.value || void 0,
        figmaUrl: o.value || void 0,
        githubIssue: x.value || void 0,
        githubPr: $.value || void 0,
        relatedDocs: g.value || void 0
      } : void 0, re = C.value || L.value || U.value || S.value || M.value || q.value ? {
        usedStores: C.value ? C.value.split(",").map((W) => W.trim()) : void 0,
        usedComponents: L.value ? L.value.split(",").map((W) => W.trim()) : void 0,
        i18nKeys: U.value ? U.value.split(",").map((W) => W.trim()) : void 0,
        designTokens: S.value ? S.value.split(",").map((W) => W.trim()) : void 0,
        accessibility: M.value || void 0,
        responsive: q.value || void 0
      } : void 0, ce = P.value ? {
        type: P.value,
        source: G.value || void 0,
        isStatic: se.value
      } : void 0;
      l.setElementConfig(ee.value, {
        fieldInfo: F,
        actionInfo: t,
        note: s,
        links: ae,
        devMeta: re,
        sourceBinding: ce
      }), i();
    }
    function le() {
      ee.value && (l.deleteElementConfig(ee.value), i());
    }
    const xe = ["VARCHAR", "TEXT", "INT", "BIGINT", "BOOLEAN", "DATE", "DATETIME", "TIMESTAMP", "JSON"], te = p(""), de = p(!1), we = ne(() => l.searchBindings(te.value).slice(0, 20));
    function je(F) {
      F.db && (h.value = F.db.table, _.value = F.db.column, A.value = F.db.type || ""), G.value = F.binding, P.value = "api", de.value = !1, te.value = "";
    }
    const qe = [
      { value: "navigate", label: "画面遷移" },
      { value: "api", label: "API呼び出し" },
      { value: "modal", label: "モーダル表示" },
      { value: "emit", label: "イベント発火" },
      { value: "function", label: "関数実行" }
    ], He = ["GET", "POST", "PUT", "DELETE", "PATCH"], Oe = [
      { value: "info", label: "情報", icon: lt, color: "#60a5fa" },
      { value: "warning", label: "注意", icon: Ye, color: "#fbbf24" },
      { value: "todo", label: "TODO", icon: Ze, color: "#10b981" },
      { value: "question", label: "質問", icon: tt, color: "#a78bfa" }
    ];
    return (F, t) => (a(), N(oe, { to: "body" }, [
      ge.value ? (a(), u("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: me(i, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", Ml, [
          e("div", _l, [
            t[31] || (t[31] = e("h3", null, "要素情報を編集", -1)),
            e("div", El, [
              e("button", {
                onClick: J,
                class: "di-btn-auto",
                title: "自動検出"
              }, [
                I(n(rt), { style: { width: "16px", height: "16px" } })
              ]),
              e("button", {
                onClick: i,
                class: "di-editor-close"
              }, [
                I(n(Me), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          se.value ? (a(), u("div", Pl, [...t[32] || (t[32] = [
            e("span", { class: "di-static-badge" }, "固定文言", -1),
            e("span", { class: "di-static-hint" }, "このテキストはソースコードに直接記述されています", -1)
          ])])) : P.value ? (a(), u("div", Dl, [
            e("span", {
              class: Z(["di-binding-badge", "di-binding-" + P.value])
            }, y(P.value), 3),
            G.value ? (a(), u("span", Sl, y(G.value), 1)) : f("", !0)
          ])) : f("", !0),
          e("div", Al, [
            e("button", {
              onClick: t[0] || (t[0] = (s) => c.value = "note"),
              class: Z(["di-editor-tab", { active: c.value === "note" }]),
              style: X(c.value === "note" ? { color: "#10b981", borderColor: "#10b981", background: "rgba(16, 185, 129, 0.1)" } : {})
            }, [
              I(n(nt), { style: { width: "12px", height: "12px" } }),
              t[33] || (t[33] = R(" メモ ", -1))
            ], 6),
            e("button", {
              onClick: t[1] || (t[1] = (s) => c.value = "field"),
              class: Z(["di-editor-tab", { active: c.value === "field" }]),
              style: X(c.value === "field" ? { color: "#60a5fa", borderColor: "#60a5fa", background: "rgba(96, 165, 250, 0.1)" } : {})
            }, [
              I(n(Te), { style: { width: "12px", height: "12px" } }),
              t[34] || (t[34] = R(" データ ", -1))
            ], 6),
            e("button", {
              onClick: t[2] || (t[2] = (s) => c.value = "action"),
              class: Z(["di-editor-tab", { active: c.value === "action" }]),
              style: X(c.value === "action" ? { color: "#a78bfa", borderColor: "#a78bfa", background: "rgba(167, 139, 250, 0.1)" } : {})
            }, [
              I(n(ct), { style: { width: "12px", height: "12px" } }),
              t[35] || (t[35] = R(" アクション ", -1))
            ], 6),
            e("button", {
              onClick: t[3] || (t[3] = (s) => c.value = "links"),
              class: Z(["di-editor-tab", { active: c.value === "links" }]),
              style: X(c.value === "links" ? { color: "#f59e0b", borderColor: "#f59e0b", background: "rgba(245, 158, 11, 0.1)" } : {})
            }, [
              I(n(st), { style: { width: "12px", height: "12px" } }),
              t[36] || (t[36] = R(" リンク ", -1))
            ], 6),
            e("button", {
              onClick: t[4] || (t[4] = (s) => c.value = "meta"),
              class: Z(["di-editor-tab", { active: c.value === "meta" }]),
              style: X(c.value === "meta" ? { color: "#ec4899", borderColor: "#ec4899", background: "rgba(236, 72, 153, 0.1)" } : {})
            }, [
              I(n(dt), { style: { width: "12px", height: "12px" } }),
              t[37] || (t[37] = R(" 開発情報 ", -1))
            ], 6)
          ]),
          e("div", Tl, [
            c.value === "note" ? (a(), u(V, { key: 0 }, [
              e("div", Ul, [
                t[38] || (t[38] = e("label", { class: "di-form-label" }, "タイプ", -1)),
                e("div", Ll, [
                  (a(), u(V, null, Q(Oe, (s) => e("button", {
                    key: s.value,
                    onClick: (ae) => k.value = s.value,
                    class: "di-note-type-btn",
                    style: X(k.value === s.value ? { color: s.color, borderColor: s.color, background: s.color + "15" } : {})
                  }, [
                    (a(), N(Ne(s.icon), {
                      style: X([{ width: "16px", height: "16px" }, { color: k.value === s.value ? s.color : "#64748b" }])
                    }, null, 8, ["style"])),
                    e("span", {
                      style: X({ color: k.value === s.value ? s.color : "#94a3b8" })
                    }, y(s.label), 5)
                  ], 12, Vl)), 64))
                ])
              ]),
              e("div", Bl, [
                t[39] || (t[39] = e("label", { class: "di-form-label" }, "メモ内容 *", -1)),
                D(e("textarea", {
                  "onUpdate:modelValue": t[5] || (t[5] = (s) => H.value = s),
                  rows: "4",
                  placeholder: "この要素についてのメモ、説明、注意事項など...",
                  class: "di-textarea"
                }, null, 512), [
                  [T, H.value]
                ])
              ]),
              e("div", Rl, [
                t[40] || (t[40] = e("label", { class: "di-form-label" }, "記入者（オプション）", -1)),
                D(e("input", {
                  "onUpdate:modelValue": t[6] || (t[6] = (s) => z.value = s),
                  type: "text",
                  placeholder: "名前",
                  class: "di-input"
                }, null, 512), [
                  [T, z.value]
                ])
              ])
            ], 64)) : f("", !0),
            c.value === "field" ? (a(), u(V, { key: 1 }, [
              e("div", jl, [
                e("div", ql, [
                  e("label", Hl, [
                    I(n(Te), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[41] || (t[41] = R(" CLI解析から選択 ", -1))
                  ]),
                  e("div", Ol, [
                    D(e("input", {
                      "onUpdate:modelValue": t[7] || (t[7] = (s) => te.value = s),
                      onFocus: t[8] || (t[8] = (s) => de.value = !0),
                      type: "text",
                      placeholder: "バインディングを検索... (例: notification, user.name)",
                      class: "di-input di-binding-search"
                    }, null, 544), [
                      [T, te.value]
                    ]),
                    te.value ? (a(), u("button", {
                      key: 0,
                      onClick: t[9] || (t[9] = (s) => {
                        te.value = "", de.value = !1;
                      }),
                      class: "di-binding-clear"
                    }, [
                      I(n(Me), { style: { width: "14px", height: "14px" } })
                    ])) : f("", !0)
                  ]),
                  de.value && we.value.length > 0 ? (a(), u("div", zl, [
                    (a(!0), u(V, null, Q(we.value, (s) => (a(), u("button", {
                      key: s.binding,
                      onClick: (ae) => je(s),
                      class: Z(["di-binding-item", { "has-db": !!s.db }])
                    }, [
                      e("div", Nl, [
                        e("span", Gl, y(s.binding), 1),
                        s.db ? (a(), u("span", Xl, y(s.db.table) + "." + y(s.db.column), 1)) : f("", !0)
                      ]),
                      e("span", Kl, y(s.component), 1)
                    ], 10, Fl))), 128))
                  ])) : de.value && te.value && we.value.length === 0 ? (a(), u("div", Yl, " 該当するバインディングが見つかりません ")) : f("", !0)
                ])
              ]),
              t[48] || (t[48] = e("div", { class: "di-form-divider" }, [
                e("span", null, "または手動入力")
              ], -1)),
              e("div", Zl, [
                e("div", Jl, [
                  t[42] || (t[42] = e("label", { class: "di-form-label" }, "テーブル名 *", -1)),
                  D(e("input", {
                    "onUpdate:modelValue": t[10] || (t[10] = (s) => h.value = s),
                    type: "text",
                    placeholder: "users",
                    class: "di-input"
                  }, null, 512), [
                    [T, h.value]
                  ])
                ]),
                e("div", Wl, [
                  t[43] || (t[43] = e("label", { class: "di-form-label" }, "カラム名 *", -1)),
                  D(e("input", {
                    "onUpdate:modelValue": t[11] || (t[11] = (s) => _.value = s),
                    type: "text",
                    placeholder: "name",
                    class: "di-input"
                  }, null, 512), [
                    [T, _.value]
                  ])
                ])
              ]),
              e("div", Ql, [
                t[45] || (t[45] = e("label", { class: "di-form-label" }, "データ型", -1)),
                D(e("select", {
                  "onUpdate:modelValue": t[12] || (t[12] = (s) => A.value = s),
                  class: "di-select"
                }, [
                  t[44] || (t[44] = e("option", { value: "" }, "選択してください", -1)),
                  (a(), u(V, null, Q(xe, (s) => e("option", {
                    key: s,
                    value: s
                  }, y(s), 9, es)), 64))
                ], 512), [
                  [Ce, A.value]
                ])
              ]),
              e("div", ts, [
                t[46] || (t[46] = e("label", { class: "di-form-label" }, "バリデーション (カンマ区切り)", -1)),
                D(e("input", {
                  "onUpdate:modelValue": t[13] || (t[13] = (s) => B.value = s),
                  type: "text",
                  placeholder: "required, max:255",
                  class: "di-input"
                }, null, 512), [
                  [T, B.value]
                ])
              ]),
              e("div", ls, [
                t[47] || (t[47] = e("label", { class: "di-form-label" }, "説明", -1)),
                D(e("textarea", {
                  "onUpdate:modelValue": t[14] || (t[14] = (s) => j.value = s),
                  rows: "2",
                  placeholder: "このフィールドの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [T, j.value]
                ])
              ])
            ], 64)) : f("", !0),
            c.value === "action" ? (a(), u(V, { key: 2 }, [
              e("div", ss, [
                t[49] || (t[49] = e("label", { class: "di-form-label" }, "アクションタイプ", -1)),
                D(e("select", {
                  "onUpdate:modelValue": t[15] || (t[15] = (s) => w.value = s),
                  class: "di-select"
                }, [
                  (a(), u(V, null, Q(qe, (s) => e("option", {
                    key: s.value,
                    value: s.value
                  }, y(s.label), 9, ns)), 64))
                ], 512), [
                  [Ce, w.value]
                ])
              ]),
              w.value === "api" ? (a(), u("div", is, [
                e("div", os, [
                  t[50] || (t[50] = e("label", { class: "di-form-label" }, "メソッド", -1)),
                  D(e("select", {
                    "onUpdate:modelValue": t[16] || (t[16] = (s) => K.value = s),
                    class: "di-select"
                  }, [
                    (a(), u(V, null, Q(He, (s) => e("option", {
                      key: s,
                      value: s
                    }, y(s), 9, as)), 64))
                  ], 512), [
                    [Ce, K.value]
                  ])
                ]),
                e("div", ds, [
                  t[51] || (t[51] = e("label", { class: "di-form-label" }, "エンドポイント", -1)),
                  D(e("input", {
                    "onUpdate:modelValue": t[17] || (t[17] = (s) => b.value = s),
                    type: "text",
                    placeholder: "/api/tasks",
                    class: "di-input"
                  }, null, 512), [
                    [T, b.value]
                  ])
                ])
              ])) : (a(), u("div", us, [
                e("label", rs, y(w.value === "navigate" ? "遷移先パス" : w.value === "modal" ? "モーダル名" : w.value === "emit" ? "イベント名" : "関数名"), 1),
                D(e("input", {
                  "onUpdate:modelValue": t[18] || (t[18] = (s) => b.value = s),
                  type: "text",
                  placeholder: w.value === "navigate" ? "/tasks" : w.value === "modal" ? "ConfirmDialog" : w.value === "emit" ? "onSubmit" : "handleClick",
                  class: "di-input"
                }, null, 8, cs), [
                  [T, b.value]
                ])
              ])),
              e("div", vs, [
                t[52] || (t[52] = e("label", { class: "di-form-label" }, "説明", -1)),
                D(e("textarea", {
                  "onUpdate:modelValue": t[19] || (t[19] = (s) => Y.value = s),
                  rows: "2",
                  placeholder: "このアクションの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [T, Y.value]
                ])
              ])
            ], 64)) : f("", !0),
            c.value === "links" ? (a(), u(V, { key: 3 }, [
              e("div", ps, [
                t[53] || (t[53] = e("label", { class: "di-form-label" }, "テストファイルパス", -1)),
                D(e("input", {
                  "onUpdate:modelValue": t[20] || (t[20] = (s) => d.value = s),
                  type: "text",
                  placeholder: "src/__tests__/components/MyComponent.test.ts",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [T, d.value]
                ])
              ]),
              e("div", ys, [
                t[54] || (t[54] = e("label", { class: "di-form-label" }, "Figma URL", -1)),
                D(e("input", {
                  "onUpdate:modelValue": t[21] || (t[21] = (s) => o.value = s),
                  type: "text",
                  placeholder: "https://www.figma.com/design/...",
                  class: "di-input"
                }, null, 512), [
                  [T, o.value]
                ])
              ]),
              e("div", bs, [
                e("div", fs, [
                  t[55] || (t[55] = e("label", { class: "di-form-label" }, "GitHub Issue", -1)),
                  D(e("input", {
                    "onUpdate:modelValue": t[22] || (t[22] = (s) => x.value = s),
                    type: "text",
                    placeholder: "#123",
                    class: "di-input"
                  }, null, 512), [
                    [T, x.value]
                  ])
                ]),
                e("div", ms, [
                  t[56] || (t[56] = e("label", { class: "di-form-label" }, "GitHub PR", -1)),
                  D(e("input", {
                    "onUpdate:modelValue": t[23] || (t[23] = (s) => $.value = s),
                    type: "text",
                    placeholder: "#456",
                    class: "di-input"
                  }, null, 512), [
                    [T, $.value]
                  ])
                ])
              ]),
              e("div", hs, [
                t[57] || (t[57] = e("label", { class: "di-form-label" }, "関連ドキュメント", -1)),
                D(e("input", {
                  "onUpdate:modelValue": t[24] || (t[24] = (s) => g.value = s),
                  type: "text",
                  placeholder: "https://docs.example.com/...",
                  class: "di-input"
                }, null, 512), [
                  [T, g.value]
                ])
              ])
            ], 64)) : f("", !0),
            c.value === "meta" ? (a(), u(V, { key: 4 }, [
              e("div", ks, [
                t[58] || (t[58] = e("label", { class: "di-form-label" }, "使用Piniaストア (カンマ区切り)", -1)),
                D(e("input", {
                  "onUpdate:modelValue": t[25] || (t[25] = (s) => C.value = s),
                  type: "text",
                  placeholder: "useUserStore, useThemeStore",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [T, C.value]
                ])
              ]),
              e("div", gs, [
                t[59] || (t[59] = e("label", { class: "di-form-label" }, "使用コンポーネント (カンマ区切り)", -1)),
                D(e("input", {
                  "onUpdate:modelValue": t[26] || (t[26] = (s) => L.value = s),
                  type: "text",
                  placeholder: "Button, Modal, Input",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [T, L.value]
                ])
              ]),
              e("div", xs, [
                t[60] || (t[60] = e("label", { class: "di-form-label" }, "i18nキー (カンマ区切り)", -1)),
                D(e("input", {
                  "onUpdate:modelValue": t[27] || (t[27] = (s) => U.value = s),
                  type: "text",
                  placeholder: "common.save, errors.required",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [T, U.value]
                ])
              ]),
              e("div", ws, [
                t[61] || (t[61] = e("label", { class: "di-form-label" }, "デザイントークン (カンマ区切り)", -1)),
                D(e("input", {
                  "onUpdate:modelValue": t[28] || (t[28] = (s) => S.value = s),
                  type: "text",
                  placeholder: "primaryColor, secondaryColor",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [T, S.value]
                ])
              ]),
              e("div", $s, [
                t[62] || (t[62] = e("label", { class: "di-form-label" }, "アクセシビリティ", -1)),
                D(e("textarea", {
                  "onUpdate:modelValue": t[29] || (t[29] = (s) => M.value = s),
                  rows: "2",
                  placeholder: "キーボード操作、スクリーンリーダー対応などのメモ...",
                  class: "di-textarea"
                }, null, 512), [
                  [T, M.value]
                ])
              ]),
              e("div", Cs, [
                t[63] || (t[63] = e("label", { class: "di-form-label" }, "レスポンシブ動作", -1)),
                D(e("textarea", {
                  "onUpdate:modelValue": t[30] || (t[30] = (s) => q.value = s),
                  rows: "2",
                  placeholder: "モバイルでの表示変更、ブレークポイントなど...",
                  class: "di-textarea"
                }, null, 512), [
                  [T, q.value]
                ])
              ])
            ], 64)) : f("", !0)
          ]),
          e("div", Is, [
            e("button", {
              onClick: le,
              class: "di-btn-delete"
            }, [
              I(n(Re), { style: { width: "14px", height: "14px" } }),
              t[64] || (t[64] = R(" 削除 ", -1))
            ]),
            e("div", Ms, [
              e("button", {
                onClick: i,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: v,
                class: "di-btn-save"
              }, [
                I(n(at), { style: { width: "14px", height: "14px" } }),
                t[65] || (t[65] = R(" 保存 ", -1))
              ])
            ])
          ])
        ])
      ])) : f("", !0)
    ]));
  }
}), Es = /* @__PURE__ */ _e(_s, [["__scopeId", "data-v-72683dbd"]]), Ps = {
  key: 0,
  "data-dev-inspector": "",
  class: "di-loading-overlay"
}, Ds = { class: "di-highlight-label" }, Ss = {
  key: 2,
  "data-dev-inspector": "",
  class: "di-pick-banner"
}, As = ["onClick"], Ts = ["onClick"], Us = {
  "data-dev-inspector": "",
  class: "di-scan-banner"
}, Ls = ["onClick"], Vs = { class: "di-analysis-type" }, Bs = {
  key: 0,
  class: "di-analysis-db"
}, Rs = ["onClick"], js = {
  key: 0,
  class: "di-analysis-text"
}, qs = {
  "data-dev-inspector": "",
  class: "di-analysis-banner"
}, Hs = /* @__PURE__ */ he({
  __name: "DevPickOverlay",
  setup(m) {
    const l = ke(), c = p(null), h = p(null), _ = p(0), A = p(0);
    function B(k) {
      var o;
      const d = l.getElementConfig(k);
      if (!(d != null && d.sourceBinding)) {
        const x = ((o = d == null ? void 0 : d.note) == null ? void 0 : o.type) || "info";
        return {
          info: "#60a5fa",
          warning: "#fbbf24",
          todo: "#10b981",
          question: "#a78bfa"
        }[x] || "#60a5fa";
      }
      return d.sourceBinding.isStatic ? "#10b981" : d.sourceBinding.type === "v-model" ? "#8b5cf6" : d.sourceBinding.type === "api" ? "#f59e0b" : "#60a5fa";
    }
    const j = ne(() => {
      var $, g;
      const k = _.value, d = A.value, o = [];
      if (!l.isEnabled) return o;
      const x = l.getConfiguredSelectors();
      for (const C of x)
        try {
          const L = document.querySelector(C);
          if (L) {
            const U = L.getBoundingClientRect(), S = l.getElementConfig(C), M = (($ = S == null ? void 0 : S.sourceBinding) == null ? void 0 : $.isStatic) || !1, q = ((g = S == null ? void 0 : S.sourceBinding) == null ? void 0 : g.type) || "";
            let P = "";
            M ? P = "固定" : q === "v-model" ? P = "フォーム" : q === "api" ? P = "データ" : P = "メモ", o.push({
              selector: C,
              top: `${U.top + k}px`,
              left: `${U.left + d}px`,
              width: `${U.width}px`,
              height: `${U.height}px`,
              color: B(C),
              isStatic: M,
              label: P
            });
          }
        } catch {
        }
      return o;
    }), w = ne(() => {
      var x;
      const k = _.value, d = A.value, o = [];
      if (!l.isEnabled || l.scanResults.length === 0) return o;
      for (const $ of l.scanResults)
        try {
          const g = document.querySelector($.selector);
          if (g) {
            const C = g.getBoundingClientRect();
            o.push({
              selector: $.selector,
              top: `${C.top + k}px`,
              left: `${C.left + d}px`,
              width: `${C.width}px`,
              height: `${C.height}px`,
              isStatic: ((x = $.detected.sourceBinding) == null ? void 0 : x.isStatic) || !1
            });
          }
        } catch {
        }
      return o;
    }), b = ne(() => {
      const k = _.value, d = A.value, o = [], x = l.analysisFilter;
      if (x === "none" || !l.isEnabled || l.analysisResults.length === 0) return o;
      for (const $ of l.analysisResults) {
        if (!$.matched) continue;
        const g = $.element, C = g.db && (g.db.table || g.db.column), L = g.api && g.api.endpoint, U = g.type === "static", S = g.type === "data";
        if (x === "db-api") {
          if (!C && !L) continue;
        } else if (x === "static") {
          if (!U) continue;
        } else if (x === "data") {
          if (!S) continue;
        } else if (x === "other" && (C || L || U || S))
          continue;
        try {
          const M = document.querySelector($.selector);
          if (M) {
            const q = M.getBoundingClientRect();
            if (q.width > window.innerWidth * 0.8 || q.height > window.innerHeight * 0.5)
              continue;
            let P = "";
            g.db && (P = `${g.db.table}.${g.db.column}`);
            let G = "";
            g.api && (G = `${g.api.method} ${g.api.endpoint}`), o.push({
              selector: $.selector,
              top: `${q.top + k}px`,
              left: `${q.left + d}px`,
              width: `${q.width}px`,
              height: `${q.height}px`,
              type: g.type,
              text: g.text || g.binding || "",
              dbInfo: P,
              apiInfo: G
            });
          }
        } catch {
        }
      }
      return o;
    });
    function K(k) {
      if (!l.isPickMode) return;
      if (k.target.closest("[data-dev-inspector]")) {
        c.value = null, h.value = null, l.setHoveredSelector(null);
        return;
      }
      const o = document.elementFromPoint(k.clientX, k.clientY);
      if (!o || o === document.body || o === document.documentElement) {
        c.value = null, h.value = null, l.setHoveredSelector(null);
        return;
      }
      if (o.closest("[data-dev-inspector]"))
        return;
      h.value = o;
      const x = o.getBoundingClientRect();
      c.value = {
        top: `${x.top + window.scrollY}px`,
        left: `${x.left + window.scrollX}px`,
        width: `${x.width}px`,
        height: `${x.height}px`
      };
      const $ = l.generateSelector(o);
      l.setHoveredSelector($);
    }
    function Y(k) {
      if (!(!l.isPickMode || k.target.closest("[data-dev-inspector]")) && (k.preventDefault(), k.stopPropagation(), h.value)) {
        const o = l.generateSelector(h.value);
        l.startEditing(o), l.togglePickMode();
      }
    }
    function H(k) {
      k.key === "Escape" && l.isPickMode && l.togglePickMode();
    }
    function z() {
      _.value = window.scrollY, A.value = window.scrollX;
    }
    return Be(() => {
      window.addEventListener("mousemove", K, !0), window.addEventListener("click", Y, !0), window.addEventListener("keydown", H), window.addEventListener("scroll", z), window.addEventListener("resize", z);
    }), Ge(() => {
      window.removeEventListener("mousemove", K, !0), window.removeEventListener("click", Y, !0), window.removeEventListener("keydown", H), window.removeEventListener("scroll", z), window.removeEventListener("resize", z);
    }), Ve(() => l.isPickMode, (k) => {
      k || (c.value = null, h.value = null);
    }), (k, d) => (a(), N(oe, { to: "body" }, [
      n(l).isInitializing ? (a(), u("div", Ps, [...d[2] || (d[2] = [
        e("div", { class: "di-loading-content" }, [
          e("div", { class: "di-loading-spinner" }),
          e("span", { class: "di-loading-text" }, "Developer Mode 起動中...")
        ], -1)
      ])])) : f("", !0),
      n(l).isPickMode && c.value ? (a(), u("div", {
        key: 1,
        "data-dev-inspector": "",
        class: "di-highlight",
        style: X({
          top: c.value.top,
          left: c.value.left,
          width: c.value.width,
          height: c.value.height
        })
      }, [
        e("div", Ds, y(n(l).hoveredSelector), 1)
      ], 4)) : f("", !0),
      n(l).isPickMode ? (a(), u("div", Ss, [...d[3] || (d[3] = [
        e("span", null, "要素をクリックしてメモを追加", -1),
        e("kbd", null, "ESC", -1),
        e("span", { class: "di-pick-hint" }, "でキャンセル", -1)
      ])])) : f("", !0),
      n(l).isEnabled && !n(l).isPickMode && !n(l).editingElementId && n(l).scanResults.length === 0 && n(l).analysisResults.length === 0 ? (a(!0), u(V, { key: 3 }, Q(j.value, (o) => (a(), u("div", {
        key: o.selector,
        "data-dev-inspector": "",
        class: "di-annotation-box",
        style: X({
          top: o.top,
          left: o.left,
          width: o.width,
          height: o.height,
          borderColor: o.color,
          backgroundColor: o.color + "15"
        }),
        onClick: (x) => n(l).startEditing(o.selector)
      }, [
        e("div", {
          class: "di-annotation-label",
          style: X({ backgroundColor: o.color })
        }, y(o.label), 5)
      ], 12, As))), 128)) : f("", !0),
      n(l).isEnabled && !n(l).editingElementId && w.value.length > 0 && n(l).analysisResults.length === 0 ? (a(), u(V, { key: 4 }, [
        (a(!0), u(V, null, Q(w.value, (o) => (a(), u("div", {
          key: "scan-" + o.selector,
          "data-dev-inspector": "",
          class: Z(["di-scan-highlight", { "di-scan-static": o.isStatic }]),
          style: X({
            top: o.top,
            left: o.left,
            width: o.width,
            height: o.height
          }),
          onClick: (x) => n(l).startEditing(o.selector)
        }, [
          e("div", {
            class: Z(["di-scan-label", { "di-scan-label-static": o.isStatic }])
          }, y(o.isStatic ? "固定文言" : "動的データ"), 3)
        ], 14, Ts))), 128)),
        e("div", Us, [
          e("span", null, y(w.value.length) + "件の要素を検出", 1),
          e("button", {
            onClick: d[0] || (d[0] = (o) => n(l).clearScanResults()),
            class: "di-scan-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : f("", !0),
      n(l).isEnabled && !n(l).editingElementId && b.value.length > 0 ? (a(), u(V, { key: 5 }, [
        (a(!0), u(V, null, Q(b.value, (o) => (a(), u("div", {
          key: "analysis-" + o.selector,
          "data-dev-inspector": "",
          class: Z(["di-analysis-highlight", {
            "di-analysis-static": o.type === "static",
            "di-analysis-data": o.type === "data",
            "di-analysis-form": o.type === "form",
            "di-analysis-button": o.type === "button",
            "di-analysis-link": o.type === "link"
          }]),
          style: X({
            top: o.top,
            left: o.left,
            width: o.width,
            height: o.height
          }),
          onClick: (x) => n(l).startEditing(o.selector)
        }, [
          e("div", {
            class: Z(["di-analysis-label", "di-analysis-label-" + (o.dbInfo ? "db" : o.type)])
          }, [
            e("span", Vs, y(o.dbInfo ? "DB" : o.type === "static" ? "固定" : o.type === "data" ? "データ" : o.type), 1),
            o.dbInfo ? (a(), u("span", Bs, y(o.dbInfo), 1)) : f("", !0),
            e("button", {
              class: "di-analysis-delete",
              onClick: me((x) => n(l).removeAnalysisResult(o.selector), ["stop"]),
              title: "この要素を非表示"
            }, "×", 8, Rs)
          ], 2),
          o.text && o.text.length < 30 ? (a(), u("div", js, y(o.text), 1)) : f("", !0)
        ], 14, Ls))), 128)),
        e("div", qs, [
          e("span", null, "📊 分析データ: " + y(b.value.length) + "件の要素", 1),
          e("button", {
            onClick: d[1] || (d[1] = (o) => n(l).clearAnalysisResults()),
            class: "di-analysis-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : f("", !0)
    ]));
  }
}), Os = /* @__PURE__ */ _e(Hs, [["__scopeId", "data-v-6de853d4"]]), zs = {
  key: 0,
  "data-dev-inspector": ""
}, Fs = /* @__PURE__ */ he({
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
  setup(m) {
    const l = m, c = ke();
    return Be(() => {
      c.init({
        storageKey: l.storageKey,
        enabledInProduction: l.enabledInProduction,
        initialAnnotations: l.initialAnnotations
      });
    }), (h, _) => n(c).isAvailable ? (a(), u("div", zs, [
      I(Il),
      I(Es),
      I(Os)
    ])) : f("", !0);
  }
}), Xs = {
  install(m, l = {}) {
    const { autoRegister: c = !0, ...h } = l;
    c && m.component("DevInspector", Fs), m.provide("devInspectorOptions", h);
  }
};
export {
  Es as DevElementEditor,
  Fs as DevInspector,
  Il as DevPanel,
  Os as DevPickOverlay,
  Xs as VueDevInspector,
  Xs as default,
  Zs as useDevInspector,
  ke as useDevInspectorStore,
  Ws as vitePluginDevInspector
};
