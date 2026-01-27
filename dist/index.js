import { h as Se, defineComponent as ke, inject as Ne, ref as p, computed as ne, openBlock as a, createElementBlock as u, Fragment as V, createBlock as F, Teleport as oe, unref as i, createVNode as I, createCommentVNode as f, createElementVNode as e, normalizeClass as J, toDisplayString as y, renderList as ee, withDirectives as S, vModelText as L, normalizeStyle as X, createTextVNode as j, withModifiers as he, watch as Ve, resolveDynamicComponent as Ge, vModelSelect as Ce, onMounted as Be, onUnmounted as Xe } from "vue";
import { u as ge } from "./useDevInspector-DXNC6FIY.js";
import { a as Js } from "./useDevInspector-DXNC6FIY.js";
import { default as Qs } from "./vite.js";
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var be = {
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
const Ke = (m) => m.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), D = (m, l) => ({ size: c, strokeWidth: h = 2, absoluteStrokeWidth: E, color: A, class: R, ...q }, { attrs: $, slots: b }) => Se(
  "svg",
  {
    ...be,
    width: c || be.width,
    height: c || be.height,
    stroke: A || be.stroke,
    "stroke-width": E ? Number(h) * 24 / Number(c) : h,
    ...$,
    class: ["lucide", `lucide-${Ke(m)}`],
    ...q
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
const Ye = D("AlertCircleIcon", [
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
const Ze = D("AlertTriangleIcon", [
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
const Je = D("CheckSquareIcon", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ae = D("CodeIcon", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Te = D("DatabaseIcon", [
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
const fe = D("DownloadIcon", [
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
const We = D("ExternalLinkIcon", [
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
const Qe = D("FileSpreadsheetIcon", [
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
const Ue = D("FileTextIcon", [
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
const et = D("GitBranchIcon", [
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
const tt = D("GlobeIcon", [
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
const lt = D("HelpCircleIcon", [
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
const st = D("InfoIcon", [
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
const nt = D("LinkIcon", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const me = D("Loader2Icon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const it = D("MessageSquareIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ot = D("MousePointer2Icon", [
  ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const at = D("PenLineIcon", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dt = D("SaveIcon", [
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
const Ie = D("ScanIcon", [
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
const Le = D("ServerIcon", [
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
const ut = D("Settings2Icon", [
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
const Re = D("Trash2Icon", [
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
const rt = D("UploadIcon", [
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
const ct = D("Wand2Icon", [
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
const Me = D("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vt = D("ZapIcon", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
]);
async function pt(m, l, c = {}) {
  var g;
  const h = await import("./xlsx-BopDBbWb.js"), { systemName: E = "System", author: A = "" } = c, R = /* @__PURE__ */ new Date(), q = `${R.getFullYear()}/${R.getMonth() + 1}/${R.getDate()}`, $ = h.utils.book_new(), b = [];
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
    E,
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
    q
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
    var T, U, _;
    const w = d.id;
    let C = "", M = "", k = "";
    if ((T = d.note) != null && T.text && (C = d.note.text), d.fieldInfo && (C += C ? `
` : "", C += `DB: ${d.fieldInfo.table}.${d.fieldInfo.column}`, d.fieldInfo.type && (C += ` (${d.fieldInfo.type})`), d.fieldInfo.description && (C += `
${d.fieldInfo.description}`)), d.actionInfo && (k = `[${{
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行"
    }[d.actionInfo.type] || d.actionInfo.type}]`, d.actionInfo.target && (k += ` ${d.actionInfo.method || ""} ${d.actionInfo.target}`), d.actionInfo.description && (k += `
${d.actionInfo.description}`)), d.links) {
      const x = [];
      d.links.testPath && x.push(`テスト: ${d.links.testPath}`), d.links.figmaUrl && x.push(`Figma: ${d.links.figmaUrl}`), d.links.githubIssue && x.push(`Issue: ${d.links.githubIssue}`), d.links.githubPr && x.push(`PR: ${d.links.githubPr}`), x.length > 0 && (k += k ? `

` : "", k += x.join(`
`));
    }
    if (d.devMeta) {
      const x = [];
      (U = d.devMeta.usedStores) != null && U.length && x.push(`Store: ${d.devMeta.usedStores.join(", ")}`), (_ = d.devMeta.usedComponents) != null && _.length && x.push(`Components: ${d.devMeta.usedComponents.join(", ")}`), d.devMeta.accessibility && x.push(`A11y: ${d.devMeta.accessibility}`), d.devMeta.responsive && x.push(`Responsive: ${d.devMeta.responsive}`), x.length > 0 && (k += k ? `

` : "", k += `[開発情報]
` + x.join(`
`));
    }
    b.push([
      "",
      o + 1,
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
      "",
      "",
      "",
      "",
      M,
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
      k
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
  ], h.utils.book_append_sheet($, Y, "画面設計書");
  const O = `画面仕様書_${((g = m == null ? void 0 : m.name) == null ? void 0 : g.replace(/[/\\?%*:|"<>]/g, "-")) || "screen"}_${q.replace(/\//g, "")}.xlsx`;
  return h.writeFile($, O), O;
}
const yt = {
  key: 0,
  class: "di-panel",
  "data-dev-inspector": ""
}, bt = { class: "di-header" }, ft = { class: "di-header-title" }, mt = { class: "di-edit-section" }, ht = { class: "di-scan-section" }, kt = ["disabled"], gt = ["disabled"], xt = { class: "di-scan-section" }, wt = ["disabled", "title"], $t = {
  key: 0,
  class: "di-scan-results"
}, Ct = {
  key: 0,
  class: "di-scan-result-item"
}, It = { class: "di-scan-result-count" }, Mt = { class: "di-scan-result-count" }, _t = { class: "di-analysis-section" }, Et = { class: "di-analysis-header" }, Pt = { class: "di-analysis-input" }, Dt = { class: "di-analysis-buttons" }, St = ["disabled"], At = ["disabled"], Tt = {
  key: 0,
  class: "di-analysis-error"
}, Ut = {
  key: 1,
  class: "di-analysis-status"
}, Lt = { class: "di-analysis-count" }, Vt = {
  key: 2,
  class: "di-analysis-filter"
}, Bt = { class: "di-filter-buttons" }, Rt = ["onClick"], jt = {
  key: 0,
  class: "di-hidden-actions"
}, qt = ["disabled"], Ht = { key: 1 }, Ot = { key: 2 }, zt = { class: "di-content" }, Ft = { class: "di-section" }, Nt = { class: "di-screen-name" }, Gt = { class: "di-screen-desc" }, Xt = { class: "di-card" }, Kt = { class: "di-card-label" }, Yt = { class: "di-code-blue" }, Zt = {
  key: 0,
  class: "di-card"
}, Jt = { class: "di-card-label" }, Wt = ["href"], Qt = {
  key: 1,
  class: "di-card"
}, el = { class: "di-card-label" }, tl = { class: "di-api-list" }, ll = { class: "di-api-info" }, sl = { class: "di-api-endpoint" }, nl = { class: "di-api-desc" }, il = {
  key: 2,
  class: "di-card"
}, ol = { class: "di-card-label" }, al = { class: "di-notes-list" }, dl = {
  key: 1,
  class: "di-no-spec"
}, ul = { class: "di-card" }, rl = { class: "di-card-header" }, cl = { class: "di-card-label" }, vl = { class: "di-count-badge" }, pl = {
  key: 0,
  class: "di-export-buttons"
}, yl = {
  key: 1,
  class: "di-export-hint"
}, bl = { class: "di-action-buttons" }, fl = {
  key: 0,
  class: "di-indicator",
  "data-dev-inspector": ""
}, ml = { class: "di-modal" }, hl = ["value"], kl = { class: "di-modal-actions" }, gl = { class: "di-modal" }, xl = { class: "di-file-drop" }, wl = {
  key: 0,
  class: "di-error"
}, $l = { class: "di-modal-actions" }, Cl = ["disabled"], Il = /* @__PURE__ */ ke({
  __name: "DevPanel",
  setup(m) {
    const l = ge(), c = Ne("router", null), h = p(!1), E = p(!1), A = p(""), R = p(""), q = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, $ = ne(() => l.currentScreenSpec), b = ne(() => Object.keys(l.elementConfigs).length);
    function K() {
      const B = l.exportConfigs();
      navigator.clipboard.writeText(B), h.value = !1;
    }
    function Y() {
      const B = l.exportConfigs(), n = new Blob([B], { type: "application/json" }), W = URL.createObjectURL(n), v = document.createElement("a");
      v.href = W, v.download = "dev-mode-configs.json", v.click(), URL.revokeObjectURL(W), h.value = !1;
    }
    function H() {
      l.downloadAnnotations();
    }
    async function O() {
      try {
        await pt(
          l.currentScreenSpec,
          l.elementConfigs,
          { systemName: "System" }
        );
      } catch (B) {
        console.error("Failed to export xlsx:", B), alert("xlsx export failed. Make sure xlsx package is installed.");
      }
    }
    function g() {
      try {
        l.importConfigs(A.value), A.value = "", R.value = "", E.value = !1;
      } catch {
        R.value = "JSONの形式が正しくありません";
      }
    }
    function d(B) {
      var se;
      const W = (se = B.target.files) == null ? void 0 : se[0];
      if (!W) return;
      const v = new FileReader();
      v.onload = (xe) => {
        var le;
        A.value = (le = xe.target) == null ? void 0 : le.result;
      }, v.readAsText(W);
    }
    function o() {
      confirm("すべての要素設定を削除しますか？") && l.clearAllConfigs();
    }
    const w = p(0), C = p(!1), M = p([]);
    async function k(B = !1) {
      C.value = !0, w.value = await l.scanCurrentPage({ rescan: B });
    }
    async function T() {
      if (!c) {
        alert("Vue Routerが見つかりません。全ページスキャンにはVue Routerが必要です。");
        return;
      }
      confirm("全ページをスキャンします。ページ遷移が発生しますがよろしいですか？") && (C.value = !0, M.value = await l.scanAllPages(c));
    }
    const U = p("/dev-inspector-analysis.json"), _ = p(!1), x = p(""), N = p(0), P = p(!1), G = [
      { value: "all", label: "すべて" },
      { value: "db-api", label: "DB/API" },
      { value: "static", label: "固定文言" },
      { value: "data", label: "動的データ" },
      { value: "other", label: "その他" },
      { value: "none", label: "非表示" }
    ];
    async function te() {
      _.value = !0, x.value = "";
      try {
        if (await l.loadAnalysisData(U.value), l.analysisData) {
          const B = Object.values(l.analysisData.components).reduce((n, W) => n + W.elements.length, 0);
          alert(`分析データを読み込みました（${Object.keys(l.analysisData.components).length}コンポーネント、${B}要素）`);
        } else
          x.value = "分析データの読み込みに失敗しました";
      } catch (B) {
        x.value = `読み込みエラー: ${B}`;
      } finally {
        _.value = !1;
      }
    }
    async function ae() {
      if (!l.analysisData) {
        alert("先に分析データを読み込んでください");
        return;
      }
      N.value = await l.applyAnalysisToPage();
    }
    async function Z() {
      P.value = !0;
      try {
        l.clearHiddenSelectors(), l.analysisData && await l.applyAnalysisToPage();
      } finally {
        P.value = !1;
      }
    }
    return (B, n) => {
      var W;
      return a(), u(V, null, [
        (a(), F(oe, { to: "body" }, [
          i(l).isEnabled && !i(l).isPanelOpen ? (a(), u("button", {
            key: 0,
            onClick: n[0] || (n[0] = //@ts-ignore
            (...v) => i(l).openPanel && i(l).openPanel(...v)),
            class: "di-fab",
            title: "画面仕様を表示",
            "data-dev-inspector": ""
          }, [
            I(i(Ue), { style: { width: "20px", height: "20px" } })
          ])) : f("", !0)
        ])),
        (a(), F(oe, { to: "body" }, [
          i(l).isEnabled && i(l).isPanelOpen ? (a(), u("div", yt, [
            e("div", bt, [
              e("div", ft, [
                I(i(Ae), { style: { width: "20px", height: "20px", color: "#60a5fa" } }),
                n[15] || (n[15] = e("span", null, "Developer Mode", -1))
              ]),
              e("button", {
                onClick: n[1] || (n[1] = //@ts-ignore
                (...v) => i(l).closePanel && i(l).closePanel(...v)),
                class: "di-close-btn"
              }, [
                I(i(Me), { style: { width: "20px", height: "20px" } })
              ])
            ]),
            e("div", mt, [
              e("button", {
                onClick: n[2] || (n[2] = //@ts-ignore
                (...v) => i(l).togglePickMode && i(l).togglePickMode(...v)),
                class: J(["di-pick-btn", { active: i(l).isPickMode }])
              }, [
                I(i(ot), { style: { width: "16px", height: "16px" } }),
                e("span", null, y(i(l).isPickMode ? "要素選択中..." : "任意の要素にメモを追加"), 1)
              ], 2),
              e("div", ht, [
                e("button", {
                  onClick: n[3] || (n[3] = (v) => k(!1)),
                  class: "di-scan-btn",
                  disabled: i(l).isScanning,
                  title: "新規要素のみスキャン"
                }, [
                  i(l).isScanning && !i(l).currentScanPage ? (a(), F(i(me), {
                    key: 0,
                    class: "di-spin",
                    style: { width: "16px", height: "16px" }
                  })) : (a(), F(i(Ie), {
                    key: 1,
                    style: { width: "16px", height: "16px" }
                  })),
                  e("span", null, y(i(l).isScanning && !i(l).currentScanPage ? `${i(l).scanProgress}%` : "スキャン"), 1)
                ], 8, kt),
                e("button", {
                  onClick: n[4] || (n[4] = (v) => k(!0)),
                  class: "di-scan-btn di-scan-btn-rescan",
                  disabled: i(l).isScanning,
                  title: "既存の設定をクリアして再スキャン"
                }, [
                  I(i(Ie), { style: { width: "16px", height: "16px" } }),
                  n[16] || (n[16] = e("span", null, "再スキャン", -1))
                ], 8, gt)
              ]),
              e("div", xt, [
                e("button", {
                  onClick: T,
                  class: "di-scan-btn di-scan-btn-all",
                  disabled: i(l).isScanning,
                  title: i(c) ? "全ページをスキャン" : "Vue Routerが必要です"
                }, [
                  i(l).isScanning && i(l).currentScanPage ? (a(), F(i(me), {
                    key: 0,
                    class: "di-spin",
                    style: { width: "16px", height: "16px" }
                  })) : (a(), F(i(tt), {
                    key: 1,
                    style: { width: "16px", height: "16px" }
                  })),
                  e("span", null, y(i(l).currentScanPage ? `${i(l).currentScanPage}` : "全ページスキャン"), 1)
                ], 8, wt)
              ]),
              C.value && (w.value > 0 || M.value.length > 0) ? (a(), u("div", $t, [
                w.value > 0 ? (a(), u("div", Ct, [
                  e("span", It, y(w.value), 1),
                  n[17] || (n[17] = e("span", null, "件の要素を検出・登録しました", -1))
                ])) : f("", !0),
                (a(!0), u(V, null, ee(M.value, (v) => (a(), u("div", {
                  key: v.page,
                  class: "di-scan-result-item"
                }, [
                  e("code", null, y(v.page), 1),
                  e("span", Mt, y(v.count), 1)
                ]))), 128)),
                e("button", {
                  onClick: n[5] || (n[5] = (v) => {
                    C.value = !1, M.value = [];
                  }),
                  class: "di-scan-close"
                }, " 閉じる ")
              ])) : f("", !0),
              e("div", _t, [
                e("div", Et, [
                  I(i(Le), { style: { width: "16px", height: "16px", color: "#3b82f6" } }),
                  n[18] || (n[18] = e("span", null, "CLIソース解析", -1))
                ]),
                e("div", Pt, [
                  S(e("input", {
                    "onUpdate:modelValue": n[6] || (n[6] = (v) => U.value = v),
                    type: "text",
                    class: "di-analysis-url",
                    placeholder: "/dev-inspector-analysis.json"
                  }, null, 512), [
                    [L, U.value]
                  ])
                ]),
                e("div", Dt, [
                  e("button", {
                    onClick: te,
                    class: "di-analysis-btn",
                    disabled: _.value
                  }, [
                    _.value ? (a(), F(i(me), {
                      key: 0,
                      class: "di-spin",
                      style: { width: "14px", height: "14px" }
                    })) : (a(), F(i(fe), {
                      key: 1,
                      style: { width: "14px", height: "14px" }
                    })),
                    n[19] || (n[19] = e("span", null, "読み込み", -1))
                  ], 8, St),
                  e("button", {
                    onClick: ae,
                    class: "di-analysis-btn di-analysis-btn-apply",
                    disabled: !i(l).analysisData
                  }, [
                    I(i(Ie), { style: { width: "14px", height: "14px" } }),
                    n[20] || (n[20] = e("span", null, "ページに適用", -1))
                  ], 8, At)
                ]),
                x.value ? (a(), u("div", Tt, y(x.value), 1)) : f("", !0),
                i(l).analysisResults.length > 0 ? (a(), u("div", Ut, [
                  e("span", Lt, y(i(l).analysisResults.filter((v) => v.matched).length), 1),
                  e("span", null, "/ " + y(i(l).analysisResults.length) + " 要素がマッチ", 1)
                ])) : f("", !0),
                i(l).analysisResults.length > 0 ? (a(), u("div", Vt, [
                  n[22] || (n[22] = e("span", { class: "di-filter-label" }, "表示フィルター:", -1)),
                  e("div", Bt, [
                    (a(), u(V, null, ee(G, (v) => e("button", {
                      key: v.value,
                      onClick: (se) => i(l).analysisFilter = v.value,
                      class: J(["di-filter-btn", { active: i(l).analysisFilter === v.value }])
                    }, y(v.label), 11, Rt)), 64))
                  ]),
                  i(l).hiddenAnalysisSelectors.size > 0 ? (a(), u("div", jt, [
                    e("button", {
                      onClick: Z,
                      class: "di-restore-btn",
                      disabled: P.value
                    }, [
                      P.value ? (a(), F(i(me), {
                        key: 0,
                        class: "di-spin",
                        style: { width: "12px", height: "12px" }
                      })) : f("", !0),
                      P.value ? (a(), u("span", Ht, "リセット中...")) : (a(), u("span", Ot, "非表示 (" + y(i(l).hiddenAnalysisSelectors.size) + ") をリセット", 1))
                    ], 8, qt),
                    e("button", {
                      onClick: n[7] || (n[7] = (v) => i(l).downloadChanges()),
                      class: "di-export-changes-btn",
                      title: "削除した要素をエクスポート (CLI merge用)"
                    }, [
                      I(i(fe), { style: { width: "12px", height: "12px" } }),
                      n[21] || (n[21] = e("span", null, "変更をエクスポート", -1))
                    ])
                  ])) : f("", !0)
                ])) : f("", !0)
              ])
            ]),
            e("div", zt, [
              $.value ? (a(), u(V, { key: 0 }, [
                e("div", Ft, [
                  e("h2", Nt, y($.value.name), 1),
                  e("p", Gt, y($.value.description), 1)
                ]),
                e("div", Xt, [
                  e("div", Kt, [
                    I(i(Ae), { style: { width: "16px", height: "16px" } }),
                    n[23] || (n[23] = e("span", null, "Component Path", -1))
                  ]),
                  e("code", Yt, y($.value.componentPath), 1)
                ]),
                $.value.figmaUrl ? (a(), u("div", Zt, [
                  e("div", Jt, [
                    I(i(We), { style: { width: "16px", height: "16px" } }),
                    n[24] || (n[24] = e("span", null, "Figma Design", -1))
                  ]),
                  e("a", {
                    href: $.value.figmaUrl,
                    target: "_blank",
                    class: "di-link-purple"
                  }, y($.value.figmaUrl), 9, Wt)
                ])) : f("", !0),
                $.value.apis.length ? (a(), u("div", Qt, [
                  e("div", el, [
                    I(i(Le), { style: { width: "16px", height: "16px" } }),
                    n[25] || (n[25] = e("span", null, "API Endpoints", -1))
                  ]),
                  e("div", tl, [
                    (a(!0), u(V, null, ee($.value.apis, (v, se) => (a(), u("div", {
                      key: se,
                      class: "di-api-item"
                    }, [
                      e("span", {
                        class: "di-method-badge",
                        style: X({ backgroundColor: q[v.method] + "20", color: q[v.method] })
                      }, y(v.method), 5),
                      e("div", ll, [
                        e("code", sl, y(v.endpoint), 1),
                        e("p", nl, y(v.description), 1)
                      ])
                    ]))), 128))
                  ])
                ])) : f("", !0),
                (W = $.value.notes) != null && W.length ? (a(), u("div", il, [
                  e("div", ol, [
                    I(i(Ye), { style: { width: "16px", height: "16px" } }),
                    n[26] || (n[26] = e("span", null, "Notes", -1))
                  ]),
                  e("ul", al, [
                    (a(!0), u(V, null, ee($.value.notes, (v, se) => (a(), u("li", {
                      key: se,
                      class: "di-note-item"
                    }, [
                      n[27] || (n[27] = e("span", { class: "di-bullet" }, "•", -1)),
                      e("span", null, y(v), 1)
                    ]))), 128))
                  ])
                ])) : f("", !0)
              ], 64)) : (a(), u("div", dl, [
                I(i(Ue), { style: { width: "48px", height: "48px", color: "#334155" } }),
                n[28] || (n[28] = e("p", null, [
                  j("この画面の仕様情報は"),
                  e("br"),
                  j("まだ登録されていません")
                ], -1))
              ])),
              e("div", ul, [
                e("div", rl, [
                  e("div", cl, [
                    I(i(at), { style: { width: "16px", height: "16px" } }),
                    n[29] || (n[29] = e("span", null, "登録済み要素", -1)),
                    e("span", vl, y(b.value), 1)
                  ])
                ]),
                b.value > 0 ? (a(), u("div", pl, [
                  e("button", {
                    onClick: H,
                    class: "di-btn-green"
                  }, [
                    I(i(et), { style: { width: "16px", height: "16px" } }),
                    n[30] || (n[30] = j(" Git管理用に保存 ", -1))
                  ]),
                  e("button", {
                    onClick: O,
                    class: "di-btn-blue"
                  }, [
                    I(i(Qe), { style: { width: "16px", height: "16px" } }),
                    n[31] || (n[31] = j(" 画面仕様書 (xlsx) 出力 ", -1))
                  ])
                ])) : f("", !0),
                b.value > 0 ? (a(), u("p", yl, [...n[32] || (n[32] = [
                  j(" JSON: ", -1),
                  e("code", null, "dev-annotations.json", -1),
                  j(" に配置してcommit ", -1)
                ])])) : f("", !0),
                e("div", bl, [
                  e("button", {
                    onClick: n[8] || (n[8] = (v) => h.value = !0),
                    class: "di-btn-small"
                  }, [
                    I(i(fe), { style: { width: "14px", height: "14px" } }),
                    n[33] || (n[33] = j(" エクスポート ", -1))
                  ]),
                  e("button", {
                    onClick: n[9] || (n[9] = (v) => E.value = !0),
                    class: "di-btn-small"
                  }, [
                    I(i(rt), { style: { width: "14px", height: "14px" } }),
                    n[34] || (n[34] = j(" インポート ", -1))
                  ]),
                  b.value > 0 ? (a(), u("button", {
                    key: 0,
                    onClick: o,
                    class: "di-btn-small di-btn-danger"
                  }, [
                    I(i(Re), { style: { width: "14px", height: "14px" } }),
                    n[35] || (n[35] = j(" 全削除 ", -1))
                  ])) : f("", !0)
                ])
              ])
            ]),
            n[36] || (n[36] = e("div", { class: "di-footer" }, [
              e("kbd", null, "Ctrl"),
              e("span", null, "+"),
              e("kbd", null, "Shift"),
              e("span", null, "+"),
              e("kbd", null, "D"),
              e("span", { class: "di-footer-text" }, "で開発者モード切替")
            ], -1))
          ])) : f("", !0)
        ])),
        (a(), F(oe, { to: "body" }, [
          i(l).isEnabled ? (a(), u("div", fl, [...n[37] || (n[37] = [
            e("span", { class: "di-indicator-dot" }, null, -1),
            j(" Developer Mode ", -1)
          ])])) : f("", !0)
        ])),
        (a(), F(oe, { to: "body" }, [
          h.value ? (a(), u("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: n[11] || (n[11] = he((v) => h.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", ml, [
              n[39] || (n[39] = e("h3", { class: "di-modal-title" }, "設定をエクスポート", -1)),
              e("textarea", {
                readonly: "",
                value: i(l).exportConfigs(),
                class: "di-modal-textarea"
              }, null, 8, hl),
              e("div", kl, [
                e("button", {
                  onClick: n[10] || (n[10] = (v) => h.value = !1),
                  class: "di-btn-small"
                }, "閉じる"),
                e("button", {
                  onClick: Y,
                  class: "di-btn-small di-btn-gray"
                }, [
                  I(i(fe), { style: { width: "14px", height: "14px" } }),
                  n[38] || (n[38] = j(" ファイル保存 ", -1))
                ]),
                e("button", {
                  onClick: K,
                  class: "di-btn-small di-btn-primary"
                }, "コピー")
              ])
            ])
          ])) : f("", !0)
        ])),
        (a(), F(oe, { to: "body" }, [
          E.value ? (a(), u("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: n[14] || (n[14] = he((v) => E.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", gl, [
              n[41] || (n[41] = e("h3", { class: "di-modal-title" }, "設定をインポート", -1)),
              e("label", xl, [
                e("input", {
                  type: "file",
                  accept: ".json",
                  onChange: d
                }, null, 32),
                n[40] || (n[40] = e("span", null, "JSONファイルをドラッグまたはクリック", -1))
              ]),
              S(e("textarea", {
                "onUpdate:modelValue": n[12] || (n[12] = (v) => A.value = v),
                placeholder: "またはJSONを直接貼り付け...",
                class: "di-modal-textarea di-modal-textarea-input"
              }, null, 512), [
                [L, A.value]
              ]),
              R.value ? (a(), u("p", wl, y(R.value), 1)) : f("", !0),
              e("div", $l, [
                e("button", {
                  onClick: n[13] || (n[13] = (v) => {
                    E.value = !1, A.value = "", R.value = "";
                  }),
                  class: "di-btn-small"
                }, " キャンセル "),
                e("button", {
                  onClick: g,
                  disabled: !A.value,
                  class: "di-btn-small di-btn-primary"
                }, " インポート ", 8, Cl)
              ])
            ])
          ])) : f("", !0)
        ]))
      ], 64);
    };
  }
}), _e = (m, l) => {
  const c = m.__vccOpts || m;
  for (const [h, E] of l)
    c[h] = E;
  return c;
}, Ml = /* @__PURE__ */ _e(Il, [["__scopeId", "data-v-d57ef689"]]), _l = { class: "di-editor-modal" }, El = { class: "di-editor-header" }, Pl = { class: "di-header-actions" }, Dl = {
  key: 0,
  class: "di-static-indicator"
}, Sl = {
  key: 1,
  class: "di-binding-indicator"
}, Al = {
  key: 0,
  class: "di-binding-source"
}, Tl = { class: "di-editor-tabs" }, Ul = { class: "di-editor-content" }, Ll = { class: "di-form-group" }, Vl = { class: "di-note-types" }, Bl = ["onClick"], Rl = { class: "di-form-group" }, jl = { class: "di-form-group" }, ql = { class: "di-binding-selector" }, Hl = { class: "di-form-group" }, Ol = { class: "di-form-label" }, zl = { class: "di-binding-search-wrapper" }, Fl = {
  key: 0,
  class: "di-binding-list"
}, Nl = ["onClick"], Gl = { class: "di-binding-item-main" }, Xl = { class: "di-binding-name" }, Kl = {
  key: 0,
  class: "di-binding-db"
}, Yl = { class: "di-binding-component" }, Zl = {
  key: 1,
  class: "di-binding-empty"
}, Jl = { class: "di-form-row" }, Wl = { class: "di-form-group" }, Ql = { class: "di-form-group" }, es = { class: "di-form-group" }, ts = ["value"], ls = { class: "di-form-group" }, ss = { class: "di-form-group" }, ns = { class: "di-form-group" }, is = ["value"], os = {
  key: 0,
  class: "di-form-row"
}, as = {
  class: "di-form-group",
  style: { flex: "0 0 100px" }
}, ds = ["value"], us = {
  class: "di-form-group",
  style: { flex: "1" }
}, rs = {
  key: 1,
  class: "di-form-group"
}, cs = { class: "di-form-label" }, vs = ["placeholder"], ps = { class: "di-form-group" }, ys = { class: "di-form-group" }, bs = { class: "di-form-group" }, fs = { class: "di-form-row" }, ms = { class: "di-form-group" }, hs = { class: "di-form-group" }, ks = { class: "di-form-group" }, gs = { class: "di-form-group" }, xs = { class: "di-form-group" }, ws = { class: "di-form-group" }, $s = { class: "di-form-group" }, Cs = { class: "di-form-group" }, Is = { class: "di-form-group" }, Ms = { class: "di-editor-footer" }, _s = { class: "di-editor-actions" }, Es = /* @__PURE__ */ ke({
  __name: "DevElementEditor",
  setup(m) {
    const l = ge(), c = p("note"), h = p(""), E = p(""), A = p(""), R = p(""), q = p(""), $ = p("navigate"), b = p(""), K = p("GET"), Y = p(""), H = p(""), O = p(""), g = p("info"), d = p(""), o = p(""), w = p(""), C = p(""), M = p(""), k = p(""), T = p(""), U = p(""), _ = p(""), x = p(""), N = p(""), P = p(""), G = p(""), te = p(!1), ae = ne(() => l.editingElementId !== null), Z = ne(() => l.editingElementId);
    Ve(Z, (z) => {
      var t, s, de, ce, ve, Q;
      if (z) {
        const r = l.getElementConfig(z);
        let pe = !1;
        try {
          const ie = document.querySelector(z);
          if (ie) {
            const ue = ie.querySelector("[data-di-binding]") || (ie.hasAttribute("data-di-binding") ? ie : null) || ie.closest("[data-di-binding]");
            if (ue) {
              const $e = ue.getAttribute("data-di-binding"), ye = ue.getAttribute("data-di-db"), Ee = ue.getAttribute("data-di-component"), ze = ue.getAttribute("data-di-db-type"), Fe = ue.getAttribute("data-di-db-comment");
              if ($e && (G.value = $e, P.value = "api", te.value = !1, pe = !0), ye) {
                const [Pe, De] = ye.split(".");
                Pe && De && (h.value = Pe, E.value = De, A.value = ze || "", q.value = Fe || "", pe = !0);
              }
              Ee && (T.value = Ee), pe && (H.value = `【データバインディング】${$e}${ye ? ` → ${ye}` : ""}`, g.value = "info", c.value = "field");
            }
          }
        } catch (ie) {
          console.warn("[DevInspector] Failed to read data-di-* attributes:", ie);
        }
        r != null && r.fieldInfo && (h.value = r.fieldInfo.table || h.value, E.value = r.fieldInfo.column || E.value, A.value = r.fieldInfo.type || "", R.value = ((t = r.fieldInfo.validation) == null ? void 0 : t.join(", ")) || "", q.value = r.fieldInfo.description || q.value), r != null && r.actionInfo && ($.value = r.actionInfo.type || "navigate", b.value = r.actionInfo.target || "", K.value = r.actionInfo.method || "GET", Y.value = r.actionInfo.description || ""), r != null && r.note && (H.value = r.note.text || H.value, O.value = r.note.author || "", g.value = r.note.type || "info"), r != null && r.links && (d.value = r.links.testPath || "", o.value = r.links.figmaUrl || "", w.value = r.links.githubIssue || "", C.value = r.links.githubPr || "", M.value = r.links.relatedDocs || ""), r != null && r.devMeta && (k.value = ((s = r.devMeta.usedStores) == null ? void 0 : s.join(", ")) || "", T.value = ((de = r.devMeta.usedComponents) == null ? void 0 : de.join(", ")) || T.value, U.value = ((ce = r.devMeta.i18nKeys) == null ? void 0 : ce.join(", ")) || "", _.value = ((ve = r.devMeta.designTokens) == null ? void 0 : ve.join(", ")) || "", x.value = r.devMeta.accessibility || "", N.value = r.devMeta.responsive || ""), r != null && r.sourceBinding && (P.value = r.sourceBinding.type || P.value, G.value = r.sourceBinding.source || G.value, te.value = r.sourceBinding.isStatic || !1), pe || ((Q = r == null ? void 0 : r.note) != null && Q.text ? c.value = "note" : r != null && r.fieldInfo ? c.value = "field" : r != null && r.actionInfo ? c.value = "action" : r != null && r.links ? c.value = "links" : r != null && r.devMeta ? c.value = "meta" : c.value = "note");
      } else
        B();
    });
    function B() {
      h.value = "", E.value = "", A.value = "", R.value = "", q.value = "", $.value = "navigate", b.value = "", K.value = "GET", Y.value = "", H.value = "", O.value = "", g.value = "info", d.value = "", o.value = "", w.value = "", C.value = "", M.value = "", k.value = "", T.value = "", U.value = "", _.value = "", x.value = "", N.value = "", P.value = "", G.value = "", te.value = !1, c.value = "note";
    }
    function n() {
      l.stopEditing(), B();
    }
    function W() {
      var z;
      if (Z.value)
        try {
          const t = document.querySelector(Z.value);
          if (!t) return;
          const s = l.autoDetectElementInfo(t, Z.value);
          s.sourceBinding && (P.value = s.sourceBinding.type || "", G.value = s.sourceBinding.source || "", te.value = s.sourceBinding.isStatic || !1, s.sourceBinding.isStatic && !H.value && (H.value = "固定文言", g.value = "info")), s.fieldInfo && (h.value = s.fieldInfo.table || "", E.value = s.fieldInfo.column || "", A.value = s.fieldInfo.type || "", q.value = s.fieldInfo.description || "", c.value = "field"), s.note && (H.value = s.note.text || "", g.value = s.note.type || "info"), (z = s.devMeta) != null && z.usedComponents && (T.value = s.devMeta.usedComponents.join(", "));
        } catch (t) {
          console.error("[DevInspector] Auto-detect failed:", t);
        }
    }
    function v() {
      if (!Z.value) return;
      const z = h.value && E.value ? {
        table: h.value,
        column: E.value,
        type: A.value || void 0,
        validation: R.value ? R.value.split(",").map((Q) => Q.trim()) : void 0,
        description: q.value || void 0
      } : void 0, t = b.value ? {
        type: $.value,
        target: b.value,
        method: $.value === "api" ? K.value : void 0,
        description: Y.value || void 0
      } : void 0, s = H.value ? {
        text: H.value,
        author: O.value || void 0,
        type: g.value
      } : void 0, de = d.value || o.value || w.value || C.value || M.value ? {
        testPath: d.value || void 0,
        figmaUrl: o.value || void 0,
        githubIssue: w.value || void 0,
        githubPr: C.value || void 0,
        relatedDocs: M.value || void 0
      } : void 0, ce = k.value || T.value || U.value || _.value || x.value || N.value ? {
        usedStores: k.value ? k.value.split(",").map((Q) => Q.trim()) : void 0,
        usedComponents: T.value ? T.value.split(",").map((Q) => Q.trim()) : void 0,
        i18nKeys: U.value ? U.value.split(",").map((Q) => Q.trim()) : void 0,
        designTokens: _.value ? _.value.split(",").map((Q) => Q.trim()) : void 0,
        accessibility: x.value || void 0,
        responsive: N.value || void 0
      } : void 0, ve = P.value ? {
        type: P.value,
        source: G.value || void 0,
        isStatic: te.value
      } : void 0;
      l.setElementConfig(Z.value, {
        fieldInfo: z,
        actionInfo: t,
        note: s,
        links: de,
        devMeta: ce,
        sourceBinding: ve
      }), n();
    }
    function se() {
      Z.value && (l.deleteElementConfig(Z.value), n());
    }
    const xe = ["VARCHAR", "TEXT", "INT", "BIGINT", "BOOLEAN", "DATE", "DATETIME", "TIMESTAMP", "JSON"], le = p(""), re = p(!1), we = ne(() => l.searchBindings(le.value).slice(0, 20));
    function je(z) {
      z.db && (h.value = z.db.table, E.value = z.db.column, A.value = z.db.type || ""), G.value = z.binding, P.value = "api", re.value = !1, le.value = "";
    }
    const qe = [
      { value: "navigate", label: "画面遷移" },
      { value: "api", label: "API呼び出し" },
      { value: "modal", label: "モーダル表示" },
      { value: "emit", label: "イベント発火" },
      { value: "function", label: "関数実行" }
    ], He = ["GET", "POST", "PUT", "DELETE", "PATCH"], Oe = [
      { value: "info", label: "情報", icon: st, color: "#60a5fa" },
      { value: "warning", label: "注意", icon: Ze, color: "#fbbf24" },
      { value: "todo", label: "TODO", icon: Je, color: "#10b981" },
      { value: "question", label: "質問", icon: lt, color: "#a78bfa" }
    ];
    return (z, t) => (a(), F(oe, { to: "body" }, [
      ae.value ? (a(), u("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: he(n, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", _l, [
          e("div", El, [
            t[31] || (t[31] = e("h3", null, "要素情報を編集", -1)),
            e("div", Pl, [
              e("button", {
                onClick: W,
                class: "di-btn-auto",
                title: "自動検出"
              }, [
                I(i(ct), { style: { width: "16px", height: "16px" } })
              ]),
              e("button", {
                onClick: n,
                class: "di-editor-close"
              }, [
                I(i(Me), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          te.value ? (a(), u("div", Dl, [...t[32] || (t[32] = [
            e("span", { class: "di-static-badge" }, "固定文言", -1),
            e("span", { class: "di-static-hint" }, "このテキストはソースコードに直接記述されています", -1)
          ])])) : P.value ? (a(), u("div", Sl, [
            e("span", {
              class: J(["di-binding-badge", "di-binding-" + P.value])
            }, y(P.value), 3),
            G.value ? (a(), u("span", Al, y(G.value), 1)) : f("", !0)
          ])) : f("", !0),
          e("div", Tl, [
            e("button", {
              onClick: t[0] || (t[0] = (s) => c.value = "note"),
              class: J(["di-editor-tab", { active: c.value === "note" }]),
              style: X(c.value === "note" ? { color: "#10b981", borderColor: "#10b981", background: "rgba(16, 185, 129, 0.1)" } : {})
            }, [
              I(i(it), { style: { width: "12px", height: "12px" } }),
              t[33] || (t[33] = j(" メモ ", -1))
            ], 6),
            e("button", {
              onClick: t[1] || (t[1] = (s) => c.value = "field"),
              class: J(["di-editor-tab", { active: c.value === "field" }]),
              style: X(c.value === "field" ? { color: "#60a5fa", borderColor: "#60a5fa", background: "rgba(96, 165, 250, 0.1)" } : {})
            }, [
              I(i(Te), { style: { width: "12px", height: "12px" } }),
              t[34] || (t[34] = j(" データ ", -1))
            ], 6),
            e("button", {
              onClick: t[2] || (t[2] = (s) => c.value = "action"),
              class: J(["di-editor-tab", { active: c.value === "action" }]),
              style: X(c.value === "action" ? { color: "#a78bfa", borderColor: "#a78bfa", background: "rgba(167, 139, 250, 0.1)" } : {})
            }, [
              I(i(vt), { style: { width: "12px", height: "12px" } }),
              t[35] || (t[35] = j(" アクション ", -1))
            ], 6),
            e("button", {
              onClick: t[3] || (t[3] = (s) => c.value = "links"),
              class: J(["di-editor-tab", { active: c.value === "links" }]),
              style: X(c.value === "links" ? { color: "#f59e0b", borderColor: "#f59e0b", background: "rgba(245, 158, 11, 0.1)" } : {})
            }, [
              I(i(nt), { style: { width: "12px", height: "12px" } }),
              t[36] || (t[36] = j(" リンク ", -1))
            ], 6),
            e("button", {
              onClick: t[4] || (t[4] = (s) => c.value = "meta"),
              class: J(["di-editor-tab", { active: c.value === "meta" }]),
              style: X(c.value === "meta" ? { color: "#ec4899", borderColor: "#ec4899", background: "rgba(236, 72, 153, 0.1)" } : {})
            }, [
              I(i(ut), { style: { width: "12px", height: "12px" } }),
              t[37] || (t[37] = j(" 開発情報 ", -1))
            ], 6)
          ]),
          e("div", Ul, [
            c.value === "note" ? (a(), u(V, { key: 0 }, [
              e("div", Ll, [
                t[38] || (t[38] = e("label", { class: "di-form-label" }, "タイプ", -1)),
                e("div", Vl, [
                  (a(), u(V, null, ee(Oe, (s) => e("button", {
                    key: s.value,
                    onClick: (de) => g.value = s.value,
                    class: "di-note-type-btn",
                    style: X(g.value === s.value ? { color: s.color, borderColor: s.color, background: s.color + "15" } : {})
                  }, [
                    (a(), F(Ge(s.icon), {
                      style: X([{ width: "16px", height: "16px" }, { color: g.value === s.value ? s.color : "#64748b" }])
                    }, null, 8, ["style"])),
                    e("span", {
                      style: X({ color: g.value === s.value ? s.color : "#94a3b8" })
                    }, y(s.label), 5)
                  ], 12, Bl)), 64))
                ])
              ]),
              e("div", Rl, [
                t[39] || (t[39] = e("label", { class: "di-form-label" }, "メモ内容 *", -1)),
                S(e("textarea", {
                  "onUpdate:modelValue": t[5] || (t[5] = (s) => H.value = s),
                  rows: "4",
                  placeholder: "この要素についてのメモ、説明、注意事項など...",
                  class: "di-textarea"
                }, null, 512), [
                  [L, H.value]
                ])
              ]),
              e("div", jl, [
                t[40] || (t[40] = e("label", { class: "di-form-label" }, "記入者（オプション）", -1)),
                S(e("input", {
                  "onUpdate:modelValue": t[6] || (t[6] = (s) => O.value = s),
                  type: "text",
                  placeholder: "名前",
                  class: "di-input"
                }, null, 512), [
                  [L, O.value]
                ])
              ])
            ], 64)) : f("", !0),
            c.value === "field" ? (a(), u(V, { key: 1 }, [
              e("div", ql, [
                e("div", Hl, [
                  e("label", Ol, [
                    I(i(Te), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[41] || (t[41] = j(" CLI解析から選択 ", -1))
                  ]),
                  e("div", zl, [
                    S(e("input", {
                      "onUpdate:modelValue": t[7] || (t[7] = (s) => le.value = s),
                      onFocus: t[8] || (t[8] = (s) => re.value = !0),
                      type: "text",
                      placeholder: "バインディングを検索... (例: notification, user.name)",
                      class: "di-input di-binding-search"
                    }, null, 544), [
                      [L, le.value]
                    ]),
                    le.value ? (a(), u("button", {
                      key: 0,
                      onClick: t[9] || (t[9] = (s) => {
                        le.value = "", re.value = !1;
                      }),
                      class: "di-binding-clear"
                    }, [
                      I(i(Me), { style: { width: "14px", height: "14px" } })
                    ])) : f("", !0)
                  ]),
                  re.value && we.value.length > 0 ? (a(), u("div", Fl, [
                    (a(!0), u(V, null, ee(we.value, (s) => (a(), u("button", {
                      key: s.binding,
                      onClick: (de) => je(s),
                      class: J(["di-binding-item", { "has-db": !!s.db }])
                    }, [
                      e("div", Gl, [
                        e("span", Xl, y(s.binding), 1),
                        s.db ? (a(), u("span", Kl, y(s.db.table) + "." + y(s.db.column), 1)) : f("", !0)
                      ]),
                      e("span", Yl, y(s.component), 1)
                    ], 10, Nl))), 128))
                  ])) : re.value && le.value && we.value.length === 0 ? (a(), u("div", Zl, " 該当するバインディングが見つかりません ")) : f("", !0)
                ])
              ]),
              t[48] || (t[48] = e("div", { class: "di-form-divider" }, [
                e("span", null, "または手動入力")
              ], -1)),
              e("div", Jl, [
                e("div", Wl, [
                  t[42] || (t[42] = e("label", { class: "di-form-label" }, "テーブル名 *", -1)),
                  S(e("input", {
                    "onUpdate:modelValue": t[10] || (t[10] = (s) => h.value = s),
                    type: "text",
                    placeholder: "users",
                    class: "di-input"
                  }, null, 512), [
                    [L, h.value]
                  ])
                ]),
                e("div", Ql, [
                  t[43] || (t[43] = e("label", { class: "di-form-label" }, "カラム名 *", -1)),
                  S(e("input", {
                    "onUpdate:modelValue": t[11] || (t[11] = (s) => E.value = s),
                    type: "text",
                    placeholder: "name",
                    class: "di-input"
                  }, null, 512), [
                    [L, E.value]
                  ])
                ])
              ]),
              e("div", es, [
                t[45] || (t[45] = e("label", { class: "di-form-label" }, "データ型", -1)),
                S(e("select", {
                  "onUpdate:modelValue": t[12] || (t[12] = (s) => A.value = s),
                  class: "di-select"
                }, [
                  t[44] || (t[44] = e("option", { value: "" }, "選択してください", -1)),
                  (a(), u(V, null, ee(xe, (s) => e("option", {
                    key: s,
                    value: s
                  }, y(s), 9, ts)), 64))
                ], 512), [
                  [Ce, A.value]
                ])
              ]),
              e("div", ls, [
                t[46] || (t[46] = e("label", { class: "di-form-label" }, "バリデーション (カンマ区切り)", -1)),
                S(e("input", {
                  "onUpdate:modelValue": t[13] || (t[13] = (s) => R.value = s),
                  type: "text",
                  placeholder: "required, max:255",
                  class: "di-input"
                }, null, 512), [
                  [L, R.value]
                ])
              ]),
              e("div", ss, [
                t[47] || (t[47] = e("label", { class: "di-form-label" }, "説明", -1)),
                S(e("textarea", {
                  "onUpdate:modelValue": t[14] || (t[14] = (s) => q.value = s),
                  rows: "2",
                  placeholder: "このフィールドの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [L, q.value]
                ])
              ])
            ], 64)) : f("", !0),
            c.value === "action" ? (a(), u(V, { key: 2 }, [
              e("div", ns, [
                t[49] || (t[49] = e("label", { class: "di-form-label" }, "アクションタイプ", -1)),
                S(e("select", {
                  "onUpdate:modelValue": t[15] || (t[15] = (s) => $.value = s),
                  class: "di-select"
                }, [
                  (a(), u(V, null, ee(qe, (s) => e("option", {
                    key: s.value,
                    value: s.value
                  }, y(s.label), 9, is)), 64))
                ], 512), [
                  [Ce, $.value]
                ])
              ]),
              $.value === "api" ? (a(), u("div", os, [
                e("div", as, [
                  t[50] || (t[50] = e("label", { class: "di-form-label" }, "メソッド", -1)),
                  S(e("select", {
                    "onUpdate:modelValue": t[16] || (t[16] = (s) => K.value = s),
                    class: "di-select"
                  }, [
                    (a(), u(V, null, ee(He, (s) => e("option", {
                      key: s,
                      value: s
                    }, y(s), 9, ds)), 64))
                  ], 512), [
                    [Ce, K.value]
                  ])
                ]),
                e("div", us, [
                  t[51] || (t[51] = e("label", { class: "di-form-label" }, "エンドポイント", -1)),
                  S(e("input", {
                    "onUpdate:modelValue": t[17] || (t[17] = (s) => b.value = s),
                    type: "text",
                    placeholder: "/api/tasks",
                    class: "di-input"
                  }, null, 512), [
                    [L, b.value]
                  ])
                ])
              ])) : (a(), u("div", rs, [
                e("label", cs, y($.value === "navigate" ? "遷移先パス" : $.value === "modal" ? "モーダル名" : $.value === "emit" ? "イベント名" : "関数名"), 1),
                S(e("input", {
                  "onUpdate:modelValue": t[18] || (t[18] = (s) => b.value = s),
                  type: "text",
                  placeholder: $.value === "navigate" ? "/tasks" : $.value === "modal" ? "ConfirmDialog" : $.value === "emit" ? "onSubmit" : "handleClick",
                  class: "di-input"
                }, null, 8, vs), [
                  [L, b.value]
                ])
              ])),
              e("div", ps, [
                t[52] || (t[52] = e("label", { class: "di-form-label" }, "説明", -1)),
                S(e("textarea", {
                  "onUpdate:modelValue": t[19] || (t[19] = (s) => Y.value = s),
                  rows: "2",
                  placeholder: "このアクションの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [L, Y.value]
                ])
              ])
            ], 64)) : f("", !0),
            c.value === "links" ? (a(), u(V, { key: 3 }, [
              e("div", ys, [
                t[53] || (t[53] = e("label", { class: "di-form-label" }, "テストファイルパス", -1)),
                S(e("input", {
                  "onUpdate:modelValue": t[20] || (t[20] = (s) => d.value = s),
                  type: "text",
                  placeholder: "src/__tests__/components/MyComponent.test.ts",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [L, d.value]
                ])
              ]),
              e("div", bs, [
                t[54] || (t[54] = e("label", { class: "di-form-label" }, "Figma URL", -1)),
                S(e("input", {
                  "onUpdate:modelValue": t[21] || (t[21] = (s) => o.value = s),
                  type: "text",
                  placeholder: "https://www.figma.com/design/...",
                  class: "di-input"
                }, null, 512), [
                  [L, o.value]
                ])
              ]),
              e("div", fs, [
                e("div", ms, [
                  t[55] || (t[55] = e("label", { class: "di-form-label" }, "GitHub Issue", -1)),
                  S(e("input", {
                    "onUpdate:modelValue": t[22] || (t[22] = (s) => w.value = s),
                    type: "text",
                    placeholder: "#123",
                    class: "di-input"
                  }, null, 512), [
                    [L, w.value]
                  ])
                ]),
                e("div", hs, [
                  t[56] || (t[56] = e("label", { class: "di-form-label" }, "GitHub PR", -1)),
                  S(e("input", {
                    "onUpdate:modelValue": t[23] || (t[23] = (s) => C.value = s),
                    type: "text",
                    placeholder: "#456",
                    class: "di-input"
                  }, null, 512), [
                    [L, C.value]
                  ])
                ])
              ]),
              e("div", ks, [
                t[57] || (t[57] = e("label", { class: "di-form-label" }, "関連ドキュメント", -1)),
                S(e("input", {
                  "onUpdate:modelValue": t[24] || (t[24] = (s) => M.value = s),
                  type: "text",
                  placeholder: "https://docs.example.com/...",
                  class: "di-input"
                }, null, 512), [
                  [L, M.value]
                ])
              ])
            ], 64)) : f("", !0),
            c.value === "meta" ? (a(), u(V, { key: 4 }, [
              e("div", gs, [
                t[58] || (t[58] = e("label", { class: "di-form-label" }, "使用Piniaストア (カンマ区切り)", -1)),
                S(e("input", {
                  "onUpdate:modelValue": t[25] || (t[25] = (s) => k.value = s),
                  type: "text",
                  placeholder: "useUserStore, useThemeStore",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [L, k.value]
                ])
              ]),
              e("div", xs, [
                t[59] || (t[59] = e("label", { class: "di-form-label" }, "使用コンポーネント (カンマ区切り)", -1)),
                S(e("input", {
                  "onUpdate:modelValue": t[26] || (t[26] = (s) => T.value = s),
                  type: "text",
                  placeholder: "Button, Modal, Input",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [L, T.value]
                ])
              ]),
              e("div", ws, [
                t[60] || (t[60] = e("label", { class: "di-form-label" }, "i18nキー (カンマ区切り)", -1)),
                S(e("input", {
                  "onUpdate:modelValue": t[27] || (t[27] = (s) => U.value = s),
                  type: "text",
                  placeholder: "common.save, errors.required",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [L, U.value]
                ])
              ]),
              e("div", $s, [
                t[61] || (t[61] = e("label", { class: "di-form-label" }, "デザイントークン (カンマ区切り)", -1)),
                S(e("input", {
                  "onUpdate:modelValue": t[28] || (t[28] = (s) => _.value = s),
                  type: "text",
                  placeholder: "primaryColor, secondaryColor",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [L, _.value]
                ])
              ]),
              e("div", Cs, [
                t[62] || (t[62] = e("label", { class: "di-form-label" }, "アクセシビリティ", -1)),
                S(e("textarea", {
                  "onUpdate:modelValue": t[29] || (t[29] = (s) => x.value = s),
                  rows: "2",
                  placeholder: "キーボード操作、スクリーンリーダー対応などのメモ...",
                  class: "di-textarea"
                }, null, 512), [
                  [L, x.value]
                ])
              ]),
              e("div", Is, [
                t[63] || (t[63] = e("label", { class: "di-form-label" }, "レスポンシブ動作", -1)),
                S(e("textarea", {
                  "onUpdate:modelValue": t[30] || (t[30] = (s) => N.value = s),
                  rows: "2",
                  placeholder: "モバイルでの表示変更、ブレークポイントなど...",
                  class: "di-textarea"
                }, null, 512), [
                  [L, N.value]
                ])
              ])
            ], 64)) : f("", !0)
          ]),
          e("div", Ms, [
            e("button", {
              onClick: se,
              class: "di-btn-delete"
            }, [
              I(i(Re), { style: { width: "14px", height: "14px" } }),
              t[64] || (t[64] = j(" 削除 ", -1))
            ]),
            e("div", _s, [
              e("button", {
                onClick: n,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: v,
                class: "di-btn-save"
              }, [
                I(i(dt), { style: { width: "14px", height: "14px" } }),
                t[65] || (t[65] = j(" 保存 ", -1))
              ])
            ])
          ])
        ])
      ])) : f("", !0)
    ]));
  }
}), Ps = /* @__PURE__ */ _e(Es, [["__scopeId", "data-v-af725971"]]), Ds = {
  key: 0,
  "data-dev-inspector": "",
  class: "di-loading-overlay"
}, Ss = { class: "di-highlight-label" }, As = {
  key: 2,
  "data-dev-inspector": "",
  class: "di-pick-banner"
}, Ts = ["onClick"], Us = ["onClick"], Ls = {
  "data-dev-inspector": "",
  class: "di-scan-banner"
}, Vs = ["onClick"], Bs = { class: "di-analysis-type" }, Rs = {
  key: 0,
  class: "di-analysis-db"
}, js = ["onClick"], qs = {
  key: 0,
  class: "di-analysis-text"
}, Hs = {
  "data-dev-inspector": "",
  class: "di-analysis-banner"
}, Os = /* @__PURE__ */ ke({
  __name: "DevPickOverlay",
  setup(m) {
    const l = ge(), c = p(null), h = p(null), E = p(0), A = p(0);
    function R(g) {
      var o;
      const d = l.getElementConfig(g);
      if (!(d != null && d.sourceBinding)) {
        const w = ((o = d == null ? void 0 : d.note) == null ? void 0 : o.type) || "info";
        return {
          info: "#60a5fa",
          warning: "#fbbf24",
          todo: "#10b981",
          question: "#a78bfa"
        }[w] || "#60a5fa";
      }
      return d.sourceBinding.isStatic ? "#10b981" : d.sourceBinding.type === "v-model" ? "#8b5cf6" : d.sourceBinding.type === "api" ? "#f59e0b" : "#60a5fa";
    }
    const q = ne(() => {
      var C, M;
      const g = E.value, d = A.value, o = [];
      if (!l.isEnabled) return o;
      const w = l.getConfiguredSelectors();
      for (const k of w)
        try {
          const T = document.querySelector(k);
          if (T) {
            const U = T.getBoundingClientRect(), _ = l.getElementConfig(k), x = ((C = _ == null ? void 0 : _.sourceBinding) == null ? void 0 : C.isStatic) || !1, N = ((M = _ == null ? void 0 : _.sourceBinding) == null ? void 0 : M.type) || "";
            let P = "";
            x ? P = "固定" : N === "v-model" ? P = "フォーム" : N === "api" ? P = "データ" : P = "メモ", o.push({
              selector: k,
              top: `${U.top + g}px`,
              left: `${U.left + d}px`,
              width: `${U.width}px`,
              height: `${U.height}px`,
              color: R(k),
              isStatic: x,
              label: P
            });
          }
        } catch {
        }
      return o;
    }), $ = ne(() => {
      var w;
      const g = E.value, d = A.value, o = [];
      if (!l.isEnabled || l.scanResults.length === 0) return o;
      for (const C of l.scanResults)
        try {
          const M = document.querySelector(C.selector);
          if (M) {
            const k = M.getBoundingClientRect();
            o.push({
              selector: C.selector,
              top: `${k.top + g}px`,
              left: `${k.left + d}px`,
              width: `${k.width}px`,
              height: `${k.height}px`,
              isStatic: ((w = C.detected.sourceBinding) == null ? void 0 : w.isStatic) || !1
            });
          }
        } catch {
        }
      return o;
    }), b = ne(() => {
      const g = E.value, d = A.value, o = [], w = l.analysisFilter;
      if (w === "none" || !l.isEnabled || l.analysisResults.length === 0) return o;
      for (const C of l.analysisResults) {
        if (!C.matched) continue;
        const M = C.element;
        try {
          const k = document.querySelector(C.selector);
          if (!k) continue;
          const T = k.getBoundingClientRect();
          if (T.width > window.innerWidth * 0.8 || T.height > window.innerHeight * 0.5)
            continue;
          const U = k.querySelector("[data-di-binding]") || (k.hasAttribute("data-di-binding") ? k : null);
          let _ = "", x = M.type, N = M.binding || "";
          if (U) {
            const B = U.getAttribute("data-di-db"), n = U.getAttribute("data-di-binding");
            B && (_ = B, x = "data"), n && (N = n, _ || (x = "data"));
          }
          !_ && M.db && (_ = `${M.db.table}.${M.db.column}`);
          let P = "";
          M.api && (P = `${M.api.method} ${M.api.endpoint}`);
          const G = !!_, te = !!P, ae = x === "static", Z = x === "data";
          if (w === "db-api") {
            if (!G && !te) continue;
          } else if (w === "static") {
            if (!ae) continue;
          } else if (w === "data") {
            if (!Z) continue;
          } else if (w === "other" && (G || te || ae || Z))
            continue;
          o.push({
            selector: C.selector,
            top: `${T.top + g}px`,
            left: `${T.left + d}px`,
            width: `${T.width}px`,
            height: `${T.height}px`,
            type: x,
            text: M.text || N || "",
            dbInfo: _,
            apiInfo: P
          });
        } catch {
        }
      }
      return o;
    });
    function K(g) {
      if (!l.isPickMode) return;
      if (g.target.closest("[data-dev-inspector]")) {
        c.value = null, h.value = null, l.setHoveredSelector(null);
        return;
      }
      const o = document.elementFromPoint(g.clientX, g.clientY);
      if (!o || o === document.body || o === document.documentElement) {
        c.value = null, h.value = null, l.setHoveredSelector(null);
        return;
      }
      if (o.closest("[data-dev-inspector]"))
        return;
      h.value = o;
      const w = o.getBoundingClientRect();
      c.value = {
        top: `${w.top + window.scrollY}px`,
        left: `${w.left + window.scrollX}px`,
        width: `${w.width}px`,
        height: `${w.height}px`
      };
      const C = l.generateSelector(o);
      l.setHoveredSelector(C);
    }
    function Y(g) {
      if (!(!l.isPickMode || g.target.closest("[data-dev-inspector]")) && (g.preventDefault(), g.stopPropagation(), h.value)) {
        const o = l.generateSelector(h.value);
        l.startEditing(o), l.togglePickMode();
      }
    }
    function H(g) {
      g.key === "Escape" && l.isPickMode && l.togglePickMode();
    }
    function O() {
      E.value = window.scrollY, A.value = window.scrollX;
    }
    return Be(() => {
      window.addEventListener("mousemove", K, !0), window.addEventListener("click", Y, !0), window.addEventListener("keydown", H), window.addEventListener("scroll", O), window.addEventListener("resize", O);
    }), Xe(() => {
      window.removeEventListener("mousemove", K, !0), window.removeEventListener("click", Y, !0), window.removeEventListener("keydown", H), window.removeEventListener("scroll", O), window.removeEventListener("resize", O);
    }), Ve(() => l.isPickMode, (g) => {
      g || (c.value = null, h.value = null);
    }), (g, d) => (a(), F(oe, { to: "body" }, [
      i(l).isInitializing ? (a(), u("div", Ds, [...d[2] || (d[2] = [
        e("div", { class: "di-loading-content" }, [
          e("div", { class: "di-loading-spinner" }),
          e("span", { class: "di-loading-text" }, "Developer Mode 起動中...")
        ], -1)
      ])])) : f("", !0),
      i(l).isPickMode && c.value ? (a(), u("div", {
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
        e("div", Ss, y(i(l).hoveredSelector), 1)
      ], 4)) : f("", !0),
      i(l).isPickMode ? (a(), u("div", As, [...d[3] || (d[3] = [
        e("span", null, "要素をクリックしてメモを追加", -1),
        e("kbd", null, "ESC", -1),
        e("span", { class: "di-pick-hint" }, "でキャンセル", -1)
      ])])) : f("", !0),
      i(l).isEnabled && !i(l).isPickMode && !i(l).editingElementId && i(l).scanResults.length === 0 && i(l).analysisResults.length === 0 ? (a(!0), u(V, { key: 3 }, ee(q.value, (o) => (a(), u("div", {
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
        onClick: (w) => i(l).startEditing(o.selector)
      }, [
        e("div", {
          class: "di-annotation-label",
          style: X({ backgroundColor: o.color })
        }, y(o.label), 5)
      ], 12, Ts))), 128)) : f("", !0),
      i(l).isEnabled && !i(l).editingElementId && $.value.length > 0 && i(l).analysisResults.length === 0 ? (a(), u(V, { key: 4 }, [
        (a(!0), u(V, null, ee($.value, (o) => (a(), u("div", {
          key: "scan-" + o.selector,
          "data-dev-inspector": "",
          class: J(["di-scan-highlight", { "di-scan-static": o.isStatic }]),
          style: X({
            top: o.top,
            left: o.left,
            width: o.width,
            height: o.height
          }),
          onClick: (w) => i(l).startEditing(o.selector)
        }, [
          e("div", {
            class: J(["di-scan-label", { "di-scan-label-static": o.isStatic }])
          }, y(o.isStatic ? "固定文言" : "動的データ"), 3)
        ], 14, Us))), 128)),
        e("div", Ls, [
          e("span", null, y($.value.length) + "件の要素を検出", 1),
          e("button", {
            onClick: d[0] || (d[0] = (o) => i(l).clearScanResults()),
            class: "di-scan-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : f("", !0),
      i(l).isEnabled && !i(l).editingElementId && b.value.length > 0 ? (a(), u(V, { key: 5 }, [
        (a(!0), u(V, null, ee(b.value, (o) => (a(), u("div", {
          key: "analysis-" + o.selector,
          "data-dev-inspector": "",
          class: J(["di-analysis-highlight", {
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
          onClick: (w) => i(l).startEditing(o.selector)
        }, [
          e("div", {
            class: J(["di-analysis-label", "di-analysis-label-" + (o.dbInfo ? "db" : o.type)])
          }, [
            e("span", Bs, y(o.dbInfo ? "DB" : o.type === "static" ? "固定" : o.type === "data" ? "データ" : o.type), 1),
            o.dbInfo ? (a(), u("span", Rs, y(o.dbInfo), 1)) : f("", !0),
            e("button", {
              class: "di-analysis-delete",
              onClick: he((w) => i(l).removeAnalysisResult(o.selector), ["stop"]),
              title: "この要素を非表示"
            }, "×", 8, js)
          ], 2),
          o.text && o.text.length < 30 ? (a(), u("div", qs, y(o.text), 1)) : f("", !0)
        ], 14, Vs))), 128)),
        e("div", Hs, [
          e("span", null, "📊 分析データ: " + y(b.value.length) + "件の要素", 1),
          e("button", {
            onClick: d[1] || (d[1] = (o) => i(l).clearAnalysisResults()),
            class: "di-analysis-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : f("", !0)
    ]));
  }
}), zs = /* @__PURE__ */ _e(Os, [["__scopeId", "data-v-98d5a875"]]), Fs = {
  key: 0,
  "data-dev-inspector": ""
}, Ns = /* @__PURE__ */ ke({
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
    const l = m, c = ge();
    return Be(() => {
      c.init({
        storageKey: l.storageKey,
        enabledInProduction: l.enabledInProduction,
        initialAnnotations: l.initialAnnotations
      });
    }), (h, E) => i(c).isAvailable ? (a(), u("div", Fs, [
      I(Ml),
      I(Ps),
      I(zs)
    ])) : f("", !0);
  }
}), Ks = {
  install(m, l = {}) {
    const { autoRegister: c = !0, ...h } = l;
    c && m.component("DevInspector", Ns), m.provide("devInspectorOptions", h);
  }
};
export {
  Ps as DevElementEditor,
  Ns as DevInspector,
  Ml as DevPanel,
  zs as DevPickOverlay,
  Ks as VueDevInspector,
  Ks as default,
  Js as useDevInspector,
  ge as useDevInspectorStore,
  Qs as vitePluginDevInspector
};
