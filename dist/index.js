import { h as Ue, defineComponent as _e, inject as Xe, ref as b, computed as oe, openBlock as i, createElementBlock as d, Fragment as R, createBlock as Y, Teleport as ve, unref as o, createVNode as C, createCommentVNode as y, createElementVNode as e, normalizeClass as W, toDisplayString as p, renderList as Q, withDirectives as T, vModelText as B, normalizeStyle as J, createTextVNode as N, withModifiers as Ce, watch as qe, resolveDynamicComponent as Ke, vModelSelect as Ee, onMounted as Oe, onUnmounted as Ye } from "vue";
import { u as Ie } from "./useDevInspector-BPLW4jtW.js";
import { a as hn } from "./useDevInspector-BPLW4jtW.js";
import { default as kn } from "./vite.js";
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var xe = {
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
const Ze = (k) => k.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), A = (k, l) => ({ size: v, strokeWidth: g = 2, absoluteStrokeWidth: E, color: L, class: O, ...H }, { attrs: _, slots: h }) => Ue(
  "svg",
  {
    ...xe,
    width: v || xe.width,
    height: v || xe.height,
    stroke: L || xe.stroke,
    "stroke-width": E ? Number(g) * 24 / Number(v) : g,
    ..._,
    class: ["lucide", `lucide-${Ze(k)}`],
    ...H
  },
  [
    ...l.map((Z) => Ue(...Z)),
    ...h.default ? [h.default()] : []
  ]
);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Je = A("AlertCircleIcon", [
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
const We = A("AlertTriangleIcon", [
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
const Qe = A("CheckSquareIcon", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ve = A("CodeIcon", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Be = A("DatabaseIcon", [
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
const we = A("DownloadIcon", [
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
const et = A("ExternalLinkIcon", [
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
const tt = A("FileSpreadsheetIcon", [
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
const Re = A("FileTextIcon", [
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
const lt = A("GitBranchIcon", [
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
const st = A("GlobeIcon", [
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
const nt = A("HelpCircleIcon", [
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
const it = A("InfoIcon", [
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
const ot = A("LinkIcon", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $e = A("Loader2Icon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const at = A("MessageSquareIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dt = A("MousePointer2Icon", [
  ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ut = A("PenLineIcon", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rt = A("SaveIcon", [
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
const Pe = A("ScanIcon", [
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
const je = A("ServerIcon", [
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
const ct = A("Settings2Icon", [
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
const He = A("Trash2Icon", [
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
const vt = A("UploadIcon", [
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
const pt = A("Wand2Icon", [
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
const Se = A("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yt = A("ZapIcon", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
]);
async function mt(k, l, v = {}) {
  var j;
  const g = await import("./xlsx-BopDBbWb.js"), { systemName: E = "System", author: L = "" } = v, O = /* @__PURE__ */ new Date(), H = `${O.getFullYear()}/${O.getMonth() + 1}/${O.getDate()}`, _ = g.utils.book_new(), h = [];
  h.push([
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
    (k == null ? void 0 : k.name) || "",
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
    L,
    "",
    "作成日",
    "",
    "",
    "",
    "",
    H
  ]), h.push([]), h.push([
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
    (k == null ? void 0 : k.componentPath) || "",
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
    (k == null ? void 0 : k.figmaUrl) || ""
  ]), h.push([]), h.push(["機能概要"]), h.push([(k == null ? void 0 : k.description) || ""]), h.push([]), h.push(["画面レイアウト　figmaURL"]), h.push([(k == null ? void 0 : k.figmaUrl) || ""]), h.push([]), k != null && k.apis && k.apis.length > 0 && (h.push(["API一覧"]), h.push(["", "メソッド", "", "エンドポイント", "", "", "", "", "", "", "", "説明"]), k.apis.forEach((u) => {
    h.push(["", u.method, "", u.endpoint, "", "", "", "", "", "", "", u.description]);
  }), h.push([])), h.push(["画面項目　ヘッダーフッターは省く"]), h.push([
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
  ]), Object.values(l).forEach((u, x) => {
    var P, M, U;
    const a = u.id;
    let m = "", D = "", I = "";
    if ((P = u.note) != null && P.text && (m = u.note.text), u.fieldInfo && (m += m ? `
` : "", m += `DB: ${u.fieldInfo.table}.${u.fieldInfo.column}`, u.fieldInfo.type && (m += ` (${u.fieldInfo.type})`), u.fieldInfo.description && (m += `
${u.fieldInfo.description}`)), u.actionInfo && (I = `[${{
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行"
    }[u.actionInfo.type] || u.actionInfo.type}]`, u.actionInfo.target && (I += ` ${u.actionInfo.method || ""} ${u.actionInfo.target}`), u.actionInfo.description && (I += `
${u.actionInfo.description}`)), u.links) {
      const f = [];
      u.links.testPath && f.push(`テスト: ${u.links.testPath}`), u.links.figmaUrl && f.push(`Figma: ${u.links.figmaUrl}`), u.links.githubIssue && f.push(`Issue: ${u.links.githubIssue}`), u.links.githubPr && f.push(`PR: ${u.links.githubPr}`), f.length > 0 && (I += I ? `

` : "", I += f.join(`
`));
    }
    if (u.devMeta) {
      const f = [];
      (M = u.devMeta.usedStores) != null && M.length && f.push(`Store: ${u.devMeta.usedStores.join(", ")}`), (U = u.devMeta.usedComponents) != null && U.length && f.push(`Components: ${u.devMeta.usedComponents.join(", ")}`), u.devMeta.accessibility && f.push(`A11y: ${u.devMeta.accessibility}`), u.devMeta.responsive && f.push(`Responsive: ${u.devMeta.responsive}`), f.length > 0 && (I += I ? `

` : "", I += `[開発情報]
` + f.join(`
`));
    }
    h.push([
      "",
      x + 1,
      "",
      a,
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
      "",
      D,
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
      I
    ]);
  });
  const ee = g.utils.aoa_to_sheet(h);
  ee["!cols"] = [
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
  ], g.utils.book_append_sheet(_, ee, "画面設計書");
  const te = `画面仕様書_${((j = k == null ? void 0 : k.name) == null ? void 0 : j.replace(/[/\\?%*:|"<>]/g, "-")) || "screen"}_${H.replace(/\//g, "")}.xlsx`;
  return g.writeFile(_, te), te;
}
const bt = {
  key: 0,
  class: "di-panel",
  "data-dev-inspector": ""
}, ht = { class: "di-header" }, ft = { class: "di-header-title" }, kt = { class: "di-edit-section" }, gt = { class: "di-scan-section" }, xt = ["disabled"], wt = ["disabled"], $t = { class: "di-scan-section" }, Ct = ["disabled", "title"], _t = {
  key: 0,
  class: "di-scan-results"
}, It = {
  key: 0,
  class: "di-scan-result-item"
}, Mt = { class: "di-scan-result-count" }, Et = { class: "di-scan-result-count" }, Pt = { class: "di-analysis-section" }, St = { class: "di-analysis-header" }, At = { class: "di-analysis-input" }, Dt = { class: "di-analysis-buttons" }, Tt = ["disabled"], Lt = ["disabled"], Ut = {
  key: 0,
  class: "di-analysis-error"
}, Vt = {
  key: 1,
  class: "di-analysis-status"
}, Bt = { class: "di-analysis-count" }, Rt = {
  key: 2,
  class: "di-analysis-filter"
}, jt = { class: "di-filter-buttons" }, qt = ["onClick"], Ot = {
  key: 0,
  class: "di-hidden-actions"
}, Ht = ["disabled"], Ft = { key: 1 }, zt = { key: 2 }, Nt = {
  key: 3,
  class: "di-page-apis"
}, Gt = {
  key: 0,
  class: "di-api-group"
}, Xt = { class: "di-api-group-header" }, Kt = { class: "di-api-group-count" }, Yt = { class: "di-api-group-list" }, Zt = { class: "di-api-endpoint" }, Jt = {
  key: 0,
  class: "di-api-variable"
}, Wt = { class: "di-api-trigger" }, Qt = {
  key: 1,
  class: "di-api-group"
}, el = { class: "di-api-group-header" }, tl = { class: "di-api-group-count" }, ll = { class: "di-api-group-list" }, sl = { class: "di-api-endpoint" }, nl = {
  key: 0,
  class: "di-api-variable"
}, il = { class: "di-content" }, ol = { class: "di-section" }, al = { class: "di-screen-name" }, dl = { class: "di-screen-desc" }, ul = { class: "di-card" }, rl = { class: "di-card-label" }, cl = { class: "di-code-blue" }, vl = {
  key: 0,
  class: "di-card"
}, pl = { class: "di-card-label" }, yl = ["href"], ml = {
  key: 1,
  class: "di-card"
}, bl = { class: "di-card-label" }, hl = { class: "di-api-list" }, fl = { class: "di-api-info" }, kl = { class: "di-api-endpoint" }, gl = { class: "di-api-desc" }, xl = {
  key: 2,
  class: "di-card"
}, wl = { class: "di-card-label" }, $l = { class: "di-notes-list" }, Cl = {
  key: 1,
  class: "di-no-spec"
}, _l = { class: "di-card" }, Il = { class: "di-card-header" }, Ml = { class: "di-card-label" }, El = { class: "di-count-badge" }, Pl = {
  key: 0,
  class: "di-export-buttons"
}, Sl = {
  key: 1,
  class: "di-export-hint"
}, Al = { class: "di-action-buttons" }, Dl = {
  key: 0,
  class: "di-indicator",
  "data-dev-inspector": ""
}, Tl = { class: "di-modal" }, Ll = ["value"], Ul = { class: "di-modal-actions" }, Vl = { class: "di-modal" }, Bl = { class: "di-file-drop" }, Rl = {
  key: 0,
  class: "di-error"
}, jl = { class: "di-modal-actions" }, ql = ["disabled"], Ol = /* @__PURE__ */ _e({
  __name: "DevPanel",
  setup(k) {
    const l = Ie(), v = Xe("router", null), g = b(!1), E = b(!1), L = b(""), O = b(""), H = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, _ = oe(() => l.currentScreenSpec), h = oe(() => Object.keys(l.elementConfigs).length);
    function Z() {
      const q = l.exportConfigs();
      navigator.clipboard.writeText(q), g.value = !1;
    }
    function ee() {
      const q = l.exportConfigs(), n = new Blob([q], { type: "application/json" }), X = URL.createObjectURL(n), r = document.createElement("a");
      r.href = X, r.download = "dev-mode-configs.json", r.click(), URL.revokeObjectURL(X), g.value = !1;
    }
    function G() {
      l.downloadAnnotations();
    }
    async function te() {
      try {
        await mt(
          l.currentScreenSpec,
          l.elementConfigs,
          { systemName: "System" }
        );
      } catch (q) {
        console.error("Failed to export xlsx:", q), alert("xlsx export failed. Make sure xlsx package is installed.");
      }
    }
    function j() {
      try {
        l.importConfigs(L.value), L.value = "", O.value = "", E.value = !1;
      } catch {
        O.value = "JSONの形式が正しくありません";
      }
    }
    function u(q) {
      var F;
      const X = (F = q.target.files) == null ? void 0 : F[0];
      if (!X) return;
      const r = new FileReader();
      r.onload = (ne) => {
        var de;
        L.value = (de = ne.target) == null ? void 0 : de.result;
      }, r.readAsText(X);
    }
    function x() {
      confirm("すべての要素設定を削除しますか？") && l.clearAllConfigs();
    }
    const a = b(0), m = b(!1), D = b([]);
    async function I(q = !1) {
      m.value = !0, a.value = await l.scanCurrentPage({ rescan: q });
    }
    async function P() {
      if (!v) {
        alert("Vue Routerが見つかりません。全ページスキャンにはVue Routerが必要です。");
        return;
      }
      confirm("全ページをスキャンします。ページ遷移が発生しますがよろしいですか？") && (m.value = !0, D.value = await l.scanAllPages(v));
    }
    const M = b("/dev-inspector-analysis.json"), U = b(!1), f = b(""), K = b(0), S = b(!1), w = [
      { value: "all", label: "すべて" },
      { value: "db-api", label: "DB/API" },
      { value: "form", label: "フォーム" },
      { value: "button", label: "ボタン" },
      { value: "link", label: "リンク" },
      { value: "modal", label: "モーダル" },
      { value: "conditional", label: "条件" },
      { value: "computed", label: "計算" },
      { value: "other", label: "その他" },
      { value: "none", label: "非表示" }
    ], $ = oe(() => l.getCurrentPageApis()), ae = {
      onMount: "画面読込時",
      useFetch: "useFetch",
      useAsyncData: "useAsyncData",
      watch: "watch",
      action: "アクション",
      unknown: "不明"
    };
    async function V() {
      U.value = !0, f.value = "";
      try {
        if (await l.loadAnalysisData(M.value), l.analysisData) {
          const q = Object.values(l.analysisData.components).reduce((n, X) => n + X.elements.length, 0);
          alert(`分析データを読み込みました（${Object.keys(l.analysisData.components).length}コンポーネント、${q}要素）`);
        } else
          f.value = "分析データの読み込みに失敗しました";
      } catch (q) {
        f.value = `読み込みエラー: ${q}`;
      } finally {
        U.value = !1;
      }
    }
    async function re() {
      if (!l.analysisData) {
        alert("先に分析データを読み込んでください");
        return;
      }
      K.value = await l.applyAnalysisToPage();
    }
    async function ue() {
      S.value = !0;
      try {
        l.clearHiddenSelectors(), l.analysisData && await l.applyAnalysisToPage();
      } finally {
        S.value = !1;
      }
    }
    return (q, n) => {
      var X;
      return i(), d(R, null, [
        (i(), Y(ve, { to: "body" }, [
          o(l).isEnabled && !o(l).isPanelOpen ? (i(), d("button", {
            key: 0,
            onClick: n[0] || (n[0] = //@ts-ignore
            (...r) => o(l).openPanel && o(l).openPanel(...r)),
            class: "di-fab",
            title: "画面仕様を表示",
            "data-dev-inspector": ""
          }, [
            C(o(Re), { style: { width: "20px", height: "20px" } })
          ])) : y("", !0)
        ])),
        (i(), Y(ve, { to: "body" }, [
          o(l).isEnabled && o(l).isPanelOpen ? (i(), d("div", bt, [
            e("div", ht, [
              e("div", ft, [
                C(o(Ve), { style: { width: "20px", height: "20px", color: "#60a5fa" } }),
                n[15] || (n[15] = e("span", null, "Developer Mode", -1))
              ]),
              e("button", {
                onClick: n[1] || (n[1] = //@ts-ignore
                (...r) => o(l).closePanel && o(l).closePanel(...r)),
                class: "di-close-btn"
              }, [
                C(o(Se), { style: { width: "20px", height: "20px" } })
              ])
            ]),
            e("div", kt, [
              e("button", {
                onClick: n[2] || (n[2] = //@ts-ignore
                (...r) => o(l).togglePickMode && o(l).togglePickMode(...r)),
                class: W(["di-pick-btn", { active: o(l).isPickMode }])
              }, [
                C(o(dt), { style: { width: "16px", height: "16px" } }),
                e("span", null, p(o(l).isPickMode ? "要素選択中..." : "任意の要素にメモを追加"), 1)
              ], 2),
              e("div", gt, [
                e("button", {
                  onClick: n[3] || (n[3] = (r) => I(!1)),
                  class: "di-scan-btn",
                  disabled: o(l).isScanning,
                  title: "新規要素のみスキャン"
                }, [
                  o(l).isScanning && !o(l).currentScanPage ? (i(), Y(o($e), {
                    key: 0,
                    class: "di-spin",
                    style: { width: "16px", height: "16px" }
                  })) : (i(), Y(o(Pe), {
                    key: 1,
                    style: { width: "16px", height: "16px" }
                  })),
                  e("span", null, p(o(l).isScanning && !o(l).currentScanPage ? `${o(l).scanProgress}%` : "スキャン"), 1)
                ], 8, xt),
                e("button", {
                  onClick: n[4] || (n[4] = (r) => I(!0)),
                  class: "di-scan-btn di-scan-btn-rescan",
                  disabled: o(l).isScanning,
                  title: "既存の設定をクリアして再スキャン"
                }, [
                  C(o(Pe), { style: { width: "16px", height: "16px" } }),
                  n[16] || (n[16] = e("span", null, "再スキャン", -1))
                ], 8, wt)
              ]),
              e("div", $t, [
                e("button", {
                  onClick: P,
                  class: "di-scan-btn di-scan-btn-all",
                  disabled: o(l).isScanning,
                  title: o(v) ? "全ページをスキャン" : "Vue Routerが必要です"
                }, [
                  o(l).isScanning && o(l).currentScanPage ? (i(), Y(o($e), {
                    key: 0,
                    class: "di-spin",
                    style: { width: "16px", height: "16px" }
                  })) : (i(), Y(o(st), {
                    key: 1,
                    style: { width: "16px", height: "16px" }
                  })),
                  e("span", null, p(o(l).currentScanPage ? `${o(l).currentScanPage}` : "全ページスキャン"), 1)
                ], 8, Ct)
              ]),
              m.value && (a.value > 0 || D.value.length > 0) ? (i(), d("div", _t, [
                a.value > 0 ? (i(), d("div", It, [
                  e("span", Mt, p(a.value), 1),
                  n[17] || (n[17] = e("span", null, "件の要素を検出・登録しました", -1))
                ])) : y("", !0),
                (i(!0), d(R, null, Q(D.value, (r) => (i(), d("div", {
                  key: r.page,
                  class: "di-scan-result-item"
                }, [
                  e("code", null, p(r.page), 1),
                  e("span", Et, p(r.count), 1)
                ]))), 128)),
                e("button", {
                  onClick: n[5] || (n[5] = (r) => {
                    m.value = !1, D.value = [];
                  }),
                  class: "di-scan-close"
                }, " 閉じる ")
              ])) : y("", !0),
              e("div", Pt, [
                e("div", St, [
                  C(o(je), { style: { width: "16px", height: "16px", color: "#3b82f6" } }),
                  n[18] || (n[18] = e("span", null, "CLIソース解析", -1))
                ]),
                e("div", At, [
                  T(e("input", {
                    "onUpdate:modelValue": n[6] || (n[6] = (r) => M.value = r),
                    type: "text",
                    class: "di-analysis-url",
                    placeholder: "/dev-inspector-analysis.json"
                  }, null, 512), [
                    [B, M.value]
                  ])
                ]),
                e("div", Dt, [
                  e("button", {
                    onClick: V,
                    class: "di-analysis-btn",
                    disabled: U.value
                  }, [
                    U.value ? (i(), Y(o($e), {
                      key: 0,
                      class: "di-spin",
                      style: { width: "14px", height: "14px" }
                    })) : (i(), Y(o(we), {
                      key: 1,
                      style: { width: "14px", height: "14px" }
                    })),
                    n[19] || (n[19] = e("span", null, "読み込み", -1))
                  ], 8, Tt),
                  e("button", {
                    onClick: re,
                    class: "di-analysis-btn di-analysis-btn-apply",
                    disabled: !o(l).analysisData
                  }, [
                    C(o(Pe), { style: { width: "14px", height: "14px" } }),
                    n[20] || (n[20] = e("span", null, "ページに適用", -1))
                  ], 8, Lt)
                ]),
                f.value ? (i(), d("div", Ut, p(f.value), 1)) : y("", !0),
                o(l).analysisResults.length > 0 ? (i(), d("div", Vt, [
                  e("span", Bt, p(o(l).analysisResults.filter((r) => r.matched).length), 1),
                  e("span", null, "/ " + p(o(l).analysisResults.length) + " 要素がマッチ", 1)
                ])) : y("", !0),
                o(l).analysisResults.length > 0 ? (i(), d("div", Rt, [
                  n[22] || (n[22] = e("span", { class: "di-filter-label" }, "表示フィルター:", -1)),
                  e("div", jt, [
                    (i(), d(R, null, Q(w, (r) => e("button", {
                      key: r.value,
                      onClick: (F) => o(l).analysisFilter = r.value,
                      class: W(["di-filter-btn", { active: o(l).analysisFilter === r.value }])
                    }, p(r.label), 11, qt)), 64))
                  ]),
                  o(l).hiddenAnalysisSelectors.size > 0 ? (i(), d("div", Ot, [
                    e("button", {
                      onClick: ue,
                      class: "di-restore-btn",
                      disabled: S.value
                    }, [
                      S.value ? (i(), Y(o($e), {
                        key: 0,
                        class: "di-spin",
                        style: { width: "12px", height: "12px" }
                      })) : y("", !0),
                      S.value ? (i(), d("span", Ft, "リセット中...")) : (i(), d("span", zt, "非表示 (" + p(o(l).hiddenAnalysisSelectors.size) + ") をリセット", 1))
                    ], 8, Ht),
                    e("button", {
                      onClick: n[7] || (n[7] = (r) => o(l).downloadChanges()),
                      class: "di-export-changes-btn",
                      title: "削除した要素をエクスポート (CLI merge用)"
                    }, [
                      C(o(we), { style: { width: "12px", height: "12px" } }),
                      n[21] || (n[21] = e("span", null, "変更をエクスポート", -1))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                $.value.pageLoad.length > 0 || $.value.action.length > 0 ? (i(), d("div", Nt, [
                  $.value.pageLoad.length > 0 ? (i(), d("div", Gt, [
                    e("div", Xt, [
                      n[23] || (n[23] = e("span", { class: "di-api-group-icon" }, "📡", -1)),
                      n[24] || (n[24] = e("span", null, "画面読込時のAPI", -1)),
                      e("span", Kt, p($.value.pageLoad.length), 1)
                    ]),
                    e("div", Yt, [
                      (i(!0), d(R, null, Q($.value.pageLoad, (r) => (i(), d("div", {
                        key: r.endpoint + r.method,
                        class: "di-api-group-item"
                      }, [
                        e("span", {
                          class: W(["di-api-method", "di-api-method-" + r.method.toLowerCase()])
                        }, p(r.method), 3),
                        e("code", Zt, p(r.endpoint || r.composable), 1),
                        r.variable ? (i(), d("span", Jt, "→ " + p(r.variable), 1)) : y("", !0),
                        e("span", Wt, p(ae[r.loadTrigger]), 1)
                      ]))), 128))
                    ])
                  ])) : y("", !0),
                  $.value.action.length > 0 ? (i(), d("div", Qt, [
                    e("div", el, [
                      n[25] || (n[25] = e("span", { class: "di-api-group-icon" }, "👆", -1)),
                      n[26] || (n[26] = e("span", null, "アクション時のAPI", -1)),
                      e("span", tl, p($.value.action.length), 1)
                    ]),
                    e("div", ll, [
                      (i(!0), d(R, null, Q($.value.action, (r) => (i(), d("div", {
                        key: r.endpoint + r.method,
                        class: "di-api-group-item"
                      }, [
                        e("span", {
                          class: W(["di-api-method", "di-api-method-" + r.method.toLowerCase()])
                        }, p(r.method), 3),
                        e("code", sl, p(r.endpoint || r.composable), 1),
                        r.variable ? (i(), d("span", nl, "→ " + p(r.variable), 1)) : y("", !0)
                      ]))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0)
              ])
            ]),
            e("div", il, [
              _.value ? (i(), d(R, { key: 0 }, [
                e("div", ol, [
                  e("h2", al, p(_.value.name), 1),
                  e("p", dl, p(_.value.description), 1)
                ]),
                e("div", ul, [
                  e("div", rl, [
                    C(o(Ve), { style: { width: "16px", height: "16px" } }),
                    n[27] || (n[27] = e("span", null, "Component Path", -1))
                  ]),
                  e("code", cl, p(_.value.componentPath), 1)
                ]),
                _.value.figmaUrl ? (i(), d("div", vl, [
                  e("div", pl, [
                    C(o(et), { style: { width: "16px", height: "16px" } }),
                    n[28] || (n[28] = e("span", null, "Figma Design", -1))
                  ]),
                  e("a", {
                    href: _.value.figmaUrl,
                    target: "_blank",
                    class: "di-link-purple"
                  }, p(_.value.figmaUrl), 9, yl)
                ])) : y("", !0),
                _.value.apis.length ? (i(), d("div", ml, [
                  e("div", bl, [
                    C(o(je), { style: { width: "16px", height: "16px" } }),
                    n[29] || (n[29] = e("span", null, "API Endpoints", -1))
                  ]),
                  e("div", hl, [
                    (i(!0), d(R, null, Q(_.value.apis, (r, F) => (i(), d("div", {
                      key: F,
                      class: "di-api-item"
                    }, [
                      e("span", {
                        class: "di-method-badge",
                        style: J({ backgroundColor: H[r.method] + "20", color: H[r.method] })
                      }, p(r.method), 5),
                      e("div", fl, [
                        e("code", kl, p(r.endpoint), 1),
                        e("p", gl, p(r.description), 1)
                      ])
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (X = _.value.notes) != null && X.length ? (i(), d("div", xl, [
                  e("div", wl, [
                    C(o(Je), { style: { width: "16px", height: "16px" } }),
                    n[30] || (n[30] = e("span", null, "Notes", -1))
                  ]),
                  e("ul", $l, [
                    (i(!0), d(R, null, Q(_.value.notes, (r, F) => (i(), d("li", {
                      key: F,
                      class: "di-note-item"
                    }, [
                      n[31] || (n[31] = e("span", { class: "di-bullet" }, "•", -1)),
                      e("span", null, p(r), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0)
              ], 64)) : (i(), d("div", Cl, [
                C(o(Re), { style: { width: "48px", height: "48px", color: "#334155" } }),
                n[32] || (n[32] = e("p", null, [
                  N("この画面の仕様情報は"),
                  e("br"),
                  N("まだ登録されていません")
                ], -1))
              ])),
              e("div", _l, [
                e("div", Il, [
                  e("div", Ml, [
                    C(o(ut), { style: { width: "16px", height: "16px" } }),
                    n[33] || (n[33] = e("span", null, "登録済み要素", -1)),
                    e("span", El, p(h.value), 1)
                  ])
                ]),
                h.value > 0 ? (i(), d("div", Pl, [
                  e("button", {
                    onClick: G,
                    class: "di-btn-green"
                  }, [
                    C(o(lt), { style: { width: "16px", height: "16px" } }),
                    n[34] || (n[34] = N(" Git管理用に保存 ", -1))
                  ]),
                  e("button", {
                    onClick: te,
                    class: "di-btn-blue"
                  }, [
                    C(o(tt), { style: { width: "16px", height: "16px" } }),
                    n[35] || (n[35] = N(" 画面仕様書 (xlsx) 出力 ", -1))
                  ])
                ])) : y("", !0),
                h.value > 0 ? (i(), d("p", Sl, [...n[36] || (n[36] = [
                  N(" JSON: ", -1),
                  e("code", null, "dev-annotations.json", -1),
                  N(" に配置してcommit ", -1)
                ])])) : y("", !0),
                e("div", Al, [
                  e("button", {
                    onClick: n[8] || (n[8] = (r) => g.value = !0),
                    class: "di-btn-small"
                  }, [
                    C(o(we), { style: { width: "14px", height: "14px" } }),
                    n[37] || (n[37] = N(" エクスポート ", -1))
                  ]),
                  e("button", {
                    onClick: n[9] || (n[9] = (r) => E.value = !0),
                    class: "di-btn-small"
                  }, [
                    C(o(vt), { style: { width: "14px", height: "14px" } }),
                    n[38] || (n[38] = N(" インポート ", -1))
                  ]),
                  h.value > 0 ? (i(), d("button", {
                    key: 0,
                    onClick: x,
                    class: "di-btn-small di-btn-danger"
                  }, [
                    C(o(He), { style: { width: "14px", height: "14px" } }),
                    n[39] || (n[39] = N(" 全削除 ", -1))
                  ])) : y("", !0)
                ])
              ])
            ]),
            n[40] || (n[40] = e("div", { class: "di-footer" }, [
              e("kbd", null, "Ctrl"),
              e("span", null, "+"),
              e("kbd", null, "Shift"),
              e("span", null, "+"),
              e("kbd", null, "D"),
              e("span", { class: "di-footer-text" }, "で開発者モード切替")
            ], -1))
          ])) : y("", !0)
        ])),
        (i(), Y(ve, { to: "body" }, [
          o(l).isEnabled ? (i(), d("div", Dl, [...n[41] || (n[41] = [
            e("span", { class: "di-indicator-dot" }, null, -1),
            N(" Developer Mode ", -1)
          ])])) : y("", !0)
        ])),
        (i(), Y(ve, { to: "body" }, [
          g.value ? (i(), d("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: n[11] || (n[11] = Ce((r) => g.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", Tl, [
              n[43] || (n[43] = e("h3", { class: "di-modal-title" }, "設定をエクスポート", -1)),
              e("textarea", {
                readonly: "",
                value: o(l).exportConfigs(),
                class: "di-modal-textarea"
              }, null, 8, Ll),
              e("div", Ul, [
                e("button", {
                  onClick: n[10] || (n[10] = (r) => g.value = !1),
                  class: "di-btn-small"
                }, "閉じる"),
                e("button", {
                  onClick: ee,
                  class: "di-btn-small di-btn-gray"
                }, [
                  C(o(we), { style: { width: "14px", height: "14px" } }),
                  n[42] || (n[42] = N(" ファイル保存 ", -1))
                ]),
                e("button", {
                  onClick: Z,
                  class: "di-btn-small di-btn-primary"
                }, "コピー")
              ])
            ])
          ])) : y("", !0)
        ])),
        (i(), Y(ve, { to: "body" }, [
          E.value ? (i(), d("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: n[14] || (n[14] = Ce((r) => E.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", Vl, [
              n[45] || (n[45] = e("h3", { class: "di-modal-title" }, "設定をインポート", -1)),
              e("label", Bl, [
                e("input", {
                  type: "file",
                  accept: ".json",
                  onChange: u
                }, null, 32),
                n[44] || (n[44] = e("span", null, "JSONファイルをドラッグまたはクリック", -1))
              ]),
              T(e("textarea", {
                "onUpdate:modelValue": n[12] || (n[12] = (r) => L.value = r),
                placeholder: "またはJSONを直接貼り付け...",
                class: "di-modal-textarea di-modal-textarea-input"
              }, null, 512), [
                [B, L.value]
              ]),
              O.value ? (i(), d("p", Rl, p(O.value), 1)) : y("", !0),
              e("div", jl, [
                e("button", {
                  onClick: n[13] || (n[13] = (r) => {
                    E.value = !1, L.value = "", O.value = "";
                  }),
                  class: "di-btn-small"
                }, " キャンセル "),
                e("button", {
                  onClick: j,
                  disabled: !L.value,
                  class: "di-btn-small di-btn-primary"
                }, " インポート ", 8, ql)
              ])
            ])
          ])) : y("", !0)
        ]))
      ], 64);
    };
  }
}), Ae = (k, l) => {
  const v = k.__vccOpts || k;
  for (const [g, E] of l)
    v[g] = E;
  return v;
}, Hl = /* @__PURE__ */ Ae(Ol, [["__scopeId", "data-v-8382ab2e"]]), Fl = { class: "di-editor-modal" }, zl = { class: "di-editor-header" }, Nl = { class: "di-header-actions" }, Gl = {
  key: 0,
  class: "di-static-indicator"
}, Xl = {
  key: 1,
  class: "di-binding-indicator"
}, Kl = {
  key: 0,
  class: "di-binding-source"
}, Yl = { class: "di-editor-tabs" }, Zl = { class: "di-editor-content" }, Jl = { class: "di-form-group" }, Wl = { class: "di-note-types" }, Ql = ["onClick"], es = { class: "di-form-group" }, ts = { class: "di-form-group" }, ls = {
  key: 0,
  class: "di-binding-selector"
}, ss = { class: "di-form-group" }, ns = { class: "di-form-label" }, is = { class: "di-binding-search-wrapper" }, os = {
  key: 0,
  class: "di-binding-list"
}, as = ["onClick"], ds = { class: "di-binding-item-main" }, us = { class: "di-binding-name" }, rs = { class: "di-binding-type" }, cs = {
  key: 0,
  class: "di-binding-component"
}, vs = {
  key: 1,
  class: "di-binding-empty"
}, ps = { class: "di-form-row" }, ys = { class: "di-form-group" }, ms = { class: "di-form-group" }, bs = { class: "di-form-group" }, hs = ["value"], fs = { class: "di-form-group" }, ks = { class: "di-form-group" }, gs = { class: "di-form-group" }, xs = ["value"], ws = {
  key: 0,
  class: "di-form-row"
}, $s = {
  class: "di-form-group",
  style: { flex: "0 0 100px" }
}, Cs = ["value"], _s = {
  class: "di-form-group",
  style: { flex: "1" }
}, Is = {
  key: 1,
  class: "di-form-group"
}, Ms = { class: "di-form-label" }, Es = ["placeholder"], Ps = { class: "di-form-group" }, Ss = { class: "di-form-group" }, As = { class: "di-form-group" }, Ds = { class: "di-form-row" }, Ts = { class: "di-form-group" }, Ls = { class: "di-form-group" }, Us = { class: "di-form-group" }, Vs = { class: "di-form-group" }, Bs = { class: "di-form-group" }, Rs = { class: "di-form-group" }, js = { class: "di-form-group" }, qs = { class: "di-form-group" }, Os = { class: "di-form-group" }, Hs = { class: "di-editor-footer" }, Fs = { class: "di-editor-actions" }, zs = /* @__PURE__ */ _e({
  __name: "DevElementEditor",
  setup(k) {
    const l = Ie(), v = b("note"), g = b(""), E = b(""), L = b(""), O = b(""), H = b(""), _ = b("navigate"), h = b(""), Z = b("GET"), ee = b(""), G = b(""), te = b(""), j = b("info"), u = b(""), x = b(""), a = b(""), m = b(""), D = b(""), I = b(""), P = b(""), M = b(""), U = b(""), f = b(""), K = b(""), S = b(""), w = b(""), $ = b(!1), ae = oe(() => l.editingElementId !== null), V = oe(() => l.editingElementId);
    qe(V, (z) => {
      var t, s, pe, he, fe, se;
      if (z) {
        const c = l.getElementConfig(z);
        let ke = !1;
        try {
          const ce = document.querySelector(z);
          if (ce) {
            const ye = ce.querySelector("[data-di-binding]") || (ce.hasAttribute("data-di-binding") ? ce : null) || ce.closest("[data-di-binding]");
            if (ye) {
              const Me = ye.getAttribute("data-di-binding"), ge = ye.getAttribute("data-di-db"), De = ye.getAttribute("data-di-component"), Ne = ye.getAttribute("data-di-db-type"), Ge = ye.getAttribute("data-di-db-comment");
              if (Me && (w.value = Me, S.value = "api", $.value = !1, ke = !0), ge) {
                const [Te, Le] = ge.split(".");
                Te && Le && (g.value = Te, E.value = Le, L.value = Ne || "", H.value = Ge || "", ke = !0);
              }
              De && (P.value = De), ke && (G.value = `【データバインディング】${Me}${ge ? ` → ${ge}` : ""}`, j.value = "info", v.value = "field");
            }
          }
        } catch (ce) {
          console.warn("[DevInspector] Failed to read data-di-* attributes:", ce);
        }
        c != null && c.fieldInfo && (g.value = c.fieldInfo.table || g.value, E.value = c.fieldInfo.column || E.value, L.value = c.fieldInfo.type || "", O.value = ((t = c.fieldInfo.validation) == null ? void 0 : t.join(", ")) || "", H.value = c.fieldInfo.description || H.value), c != null && c.actionInfo && (_.value = c.actionInfo.type || "navigate", h.value = c.actionInfo.target || "", Z.value = c.actionInfo.method || "GET", ee.value = c.actionInfo.description || ""), c != null && c.note && (G.value = c.note.text || G.value, te.value = c.note.author || "", j.value = c.note.type || "info"), c != null && c.links && (u.value = c.links.testPath || "", x.value = c.links.figmaUrl || "", a.value = c.links.githubIssue || "", m.value = c.links.githubPr || "", D.value = c.links.relatedDocs || ""), c != null && c.devMeta && (I.value = ((s = c.devMeta.usedStores) == null ? void 0 : s.join(", ")) || "", P.value = ((pe = c.devMeta.usedComponents) == null ? void 0 : pe.join(", ")) || P.value, M.value = ((he = c.devMeta.i18nKeys) == null ? void 0 : he.join(", ")) || "", U.value = ((fe = c.devMeta.designTokens) == null ? void 0 : fe.join(", ")) || "", f.value = c.devMeta.accessibility || "", K.value = c.devMeta.responsive || ""), c != null && c.sourceBinding && (S.value = c.sourceBinding.type || S.value, w.value = c.sourceBinding.source || w.value, $.value = c.sourceBinding.isStatic || !1), ke || ((se = c == null ? void 0 : c.note) != null && se.text ? v.value = "note" : c != null && c.fieldInfo ? v.value = "field" : c != null && c.actionInfo ? v.value = "action" : c != null && c.links ? v.value = "links" : c != null && c.devMeta ? v.value = "meta" : v.value = "note");
      } else
        re();
    });
    function re() {
      g.value = "", E.value = "", L.value = "", O.value = "", H.value = "", _.value = "navigate", h.value = "", Z.value = "GET", ee.value = "", G.value = "", te.value = "", j.value = "info", u.value = "", x.value = "", a.value = "", m.value = "", D.value = "", I.value = "", P.value = "", M.value = "", U.value = "", f.value = "", K.value = "", S.value = "", w.value = "", $.value = !1, v.value = "note";
    }
    function ue() {
      l.stopEditing(), re();
    }
    function q() {
      var z;
      if (V.value)
        try {
          const t = document.querySelector(V.value);
          if (!t) return;
          const s = l.autoDetectElementInfo(t, V.value);
          s.sourceBinding && (S.value = s.sourceBinding.type || "", w.value = s.sourceBinding.source || "", $.value = s.sourceBinding.isStatic || !1, s.sourceBinding.isStatic && !G.value && (G.value = "固定文言", j.value = "info")), s.fieldInfo && (g.value = s.fieldInfo.table || "", E.value = s.fieldInfo.column || "", L.value = s.fieldInfo.type || "", H.value = s.fieldInfo.description || "", v.value = "field"), s.note && (G.value = s.note.text || "", j.value = s.note.type || "info"), (z = s.devMeta) != null && z.usedComponents && (P.value = s.devMeta.usedComponents.join(", "));
        } catch (t) {
          console.error("[DevInspector] Auto-detect failed:", t);
        }
    }
    function n() {
      if (!V.value) return;
      const z = g.value && E.value ? {
        table: g.value,
        column: E.value,
        type: L.value || void 0,
        validation: O.value ? O.value.split(",").map((se) => se.trim()) : void 0,
        description: H.value || void 0
      } : void 0, t = h.value ? {
        type: _.value,
        target: h.value,
        method: _.value === "api" ? Z.value : void 0,
        description: ee.value || void 0
      } : void 0, s = G.value ? {
        text: G.value,
        author: te.value || void 0,
        type: j.value
      } : void 0, pe = u.value || x.value || a.value || m.value || D.value ? {
        testPath: u.value || void 0,
        figmaUrl: x.value || void 0,
        githubIssue: a.value || void 0,
        githubPr: m.value || void 0,
        relatedDocs: D.value || void 0
      } : void 0, he = I.value || P.value || M.value || U.value || f.value || K.value ? {
        usedStores: I.value ? I.value.split(",").map((se) => se.trim()) : void 0,
        usedComponents: P.value ? P.value.split(",").map((se) => se.trim()) : void 0,
        i18nKeys: M.value ? M.value.split(",").map((se) => se.trim()) : void 0,
        designTokens: U.value ? U.value.split(",").map((se) => se.trim()) : void 0,
        accessibility: f.value || void 0,
        responsive: K.value || void 0
      } : void 0, fe = S.value ? {
        type: S.value,
        source: w.value || void 0,
        isStatic: $.value
      } : void 0;
      l.setElementConfig(V.value, {
        fieldInfo: z,
        actionInfo: t,
        note: s,
        links: pe,
        devMeta: he,
        sourceBinding: fe
      }), ue();
    }
    function X() {
      V.value && (l.deleteElementConfig(V.value), ue());
    }
    const r = [
      // Rails types
      "string",
      "text",
      "integer",
      "bigint",
      "float",
      "decimal",
      "boolean",
      "date",
      "datetime",
      "time",
      "timestamp",
      "binary",
      "json",
      "jsonb",
      // SQL types (for compatibility)
      "VARCHAR",
      "TEXT",
      "INT",
      "BIGINT",
      "BOOLEAN",
      "DATE",
      "DATETIME",
      "TIMESTAMP",
      "JSON"
    ], F = b(""), ne = b(!1), de = oe(() => l.searchSchemaColumns(F.value).slice(0, 30));
    function me(z) {
      g.value = z.table, E.value = z.column, L.value = z.type || "", H.value = z.comment || "", ne.value = !1, F.value = "";
    }
    const ie = oe(() => {
      if (!V.value) return !1;
      try {
        const z = document.querySelector(V.value);
        if (!z) return !1;
        const t = z.querySelector("[data-di-binding]") || (z.hasAttribute("data-di-binding") ? z : null);
        return !!(t != null && t.getAttribute("data-di-db"));
      } catch {
        return !1;
      }
    }), le = oe(() => l.getSchemaColumns().length > 0), be = [
      { value: "navigate", label: "画面遷移" },
      { value: "api", label: "API呼び出し" },
      { value: "modal", label: "モーダル表示" },
      { value: "emit", label: "イベント発火" },
      { value: "function", label: "関数実行" }
    ], Fe = ["GET", "POST", "PUT", "DELETE", "PATCH"], ze = [
      { value: "info", label: "情報", icon: it, color: "#60a5fa" },
      { value: "warning", label: "注意", icon: We, color: "#fbbf24" },
      { value: "todo", label: "TODO", icon: Qe, color: "#10b981" },
      { value: "question", label: "質問", icon: nt, color: "#a78bfa" }
    ];
    return (z, t) => (i(), Y(ve, { to: "body" }, [
      ae.value ? (i(), d("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: Ce(ue, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", Fl, [
          e("div", zl, [
            t[31] || (t[31] = e("h3", null, "要素情報を編集", -1)),
            e("div", Nl, [
              e("button", {
                onClick: q,
                class: "di-btn-auto",
                title: "自動検出"
              }, [
                C(o(pt), { style: { width: "16px", height: "16px" } })
              ]),
              e("button", {
                onClick: ue,
                class: "di-editor-close"
              }, [
                C(o(Se), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          $.value ? (i(), d("div", Gl, [...t[32] || (t[32] = [
            e("span", { class: "di-static-badge" }, "固定文言", -1),
            e("span", { class: "di-static-hint" }, "このテキストはソースコードに直接記述されています", -1)
          ])])) : S.value ? (i(), d("div", Xl, [
            e("span", {
              class: W(["di-binding-badge", "di-binding-" + S.value])
            }, p(S.value), 3),
            w.value ? (i(), d("span", Kl, p(w.value), 1)) : y("", !0)
          ])) : y("", !0),
          e("div", Yl, [
            e("button", {
              onClick: t[0] || (t[0] = (s) => v.value = "note"),
              class: W(["di-editor-tab", { active: v.value === "note" }]),
              style: J(v.value === "note" ? { color: "#10b981", borderColor: "#10b981", background: "rgba(16, 185, 129, 0.1)" } : {})
            }, [
              C(o(at), { style: { width: "12px", height: "12px" } }),
              t[33] || (t[33] = N(" メモ ", -1))
            ], 6),
            ie.value || le.value || g.value ? (i(), d("button", {
              key: 0,
              onClick: t[1] || (t[1] = (s) => v.value = "field"),
              class: W(["di-editor-tab", { active: v.value === "field" }]),
              style: J(v.value === "field" ? { color: "#60a5fa", borderColor: "#60a5fa", background: "rgba(96, 165, 250, 0.1)" } : {})
            }, [
              C(o(Be), { style: { width: "12px", height: "12px" } }),
              t[34] || (t[34] = N(" データ ", -1))
            ], 6)) : y("", !0),
            e("button", {
              onClick: t[2] || (t[2] = (s) => v.value = "action"),
              class: W(["di-editor-tab", { active: v.value === "action" }]),
              style: J(v.value === "action" ? { color: "#a78bfa", borderColor: "#a78bfa", background: "rgba(167, 139, 250, 0.1)" } : {})
            }, [
              C(o(yt), { style: { width: "12px", height: "12px" } }),
              t[35] || (t[35] = N(" アクション ", -1))
            ], 6),
            e("button", {
              onClick: t[3] || (t[3] = (s) => v.value = "links"),
              class: W(["di-editor-tab", { active: v.value === "links" }]),
              style: J(v.value === "links" ? { color: "#f59e0b", borderColor: "#f59e0b", background: "rgba(245, 158, 11, 0.1)" } : {})
            }, [
              C(o(ot), { style: { width: "12px", height: "12px" } }),
              t[36] || (t[36] = N(" リンク ", -1))
            ], 6),
            e("button", {
              onClick: t[4] || (t[4] = (s) => v.value = "meta"),
              class: W(["di-editor-tab", { active: v.value === "meta" }]),
              style: J(v.value === "meta" ? { color: "#ec4899", borderColor: "#ec4899", background: "rgba(236, 72, 153, 0.1)" } : {})
            }, [
              C(o(ct), { style: { width: "12px", height: "12px" } }),
              t[37] || (t[37] = N(" 開発情報 ", -1))
            ], 6)
          ]),
          e("div", Zl, [
            v.value === "note" ? (i(), d(R, { key: 0 }, [
              e("div", Jl, [
                t[38] || (t[38] = e("label", { class: "di-form-label" }, "タイプ", -1)),
                e("div", Wl, [
                  (i(), d(R, null, Q(ze, (s) => e("button", {
                    key: s.value,
                    onClick: (pe) => j.value = s.value,
                    class: "di-note-type-btn",
                    style: J(j.value === s.value ? { color: s.color, borderColor: s.color, background: s.color + "15" } : {})
                  }, [
                    (i(), Y(Ke(s.icon), {
                      style: J([{ width: "16px", height: "16px" }, { color: j.value === s.value ? s.color : "#64748b" }])
                    }, null, 8, ["style"])),
                    e("span", {
                      style: J({ color: j.value === s.value ? s.color : "#94a3b8" })
                    }, p(s.label), 5)
                  ], 12, Ql)), 64))
                ])
              ]),
              e("div", es, [
                t[39] || (t[39] = e("label", { class: "di-form-label" }, "メモ内容 *", -1)),
                T(e("textarea", {
                  "onUpdate:modelValue": t[5] || (t[5] = (s) => G.value = s),
                  rows: "4",
                  placeholder: "この要素についてのメモ、説明、注意事項など...",
                  class: "di-textarea"
                }, null, 512), [
                  [B, G.value]
                ])
              ]),
              e("div", ts, [
                t[40] || (t[40] = e("label", { class: "di-form-label" }, "記入者（オプション）", -1)),
                T(e("input", {
                  "onUpdate:modelValue": t[6] || (t[6] = (s) => te.value = s),
                  type: "text",
                  placeholder: "名前",
                  class: "di-input"
                }, null, 512), [
                  [B, te.value]
                ])
              ])
            ], 64)) : y("", !0),
            v.value === "field" ? (i(), d(R, { key: 1 }, [
              le.value ? (i(), d("div", ls, [
                e("div", ss, [
                  e("label", ns, [
                    C(o(Be), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[41] || (t[41] = N(" schema.rb から選択 ", -1))
                  ]),
                  e("div", is, [
                    T(e("input", {
                      "onUpdate:modelValue": t[7] || (t[7] = (s) => F.value = s),
                      onFocus: t[8] || (t[8] = (s) => ne.value = !0),
                      type: "text",
                      placeholder: "テーブル.カラムを検索... (例: users, email)",
                      class: "di-input di-binding-search"
                    }, null, 544), [
                      [B, F.value]
                    ]),
                    F.value ? (i(), d("button", {
                      key: 0,
                      onClick: t[9] || (t[9] = (s) => {
                        F.value = "", ne.value = !1;
                      }),
                      class: "di-binding-clear"
                    }, [
                      C(o(Se), { style: { width: "14px", height: "14px" } })
                    ])) : y("", !0)
                  ]),
                  ne.value && de.value.length > 0 ? (i(), d("div", os, [
                    (i(!0), d(R, null, Q(de.value, (s) => (i(), d("button", {
                      key: s.fullName,
                      onClick: (pe) => me(s),
                      class: "di-binding-item has-db"
                    }, [
                      e("div", ds, [
                        e("span", us, p(s.fullName), 1),
                        e("span", rs, p(s.type), 1)
                      ]),
                      s.comment ? (i(), d("span", cs, p(s.comment), 1)) : y("", !0)
                    ], 8, as))), 128))
                  ])) : ne.value && F.value && de.value.length === 0 ? (i(), d("div", vs, " 該当するカラムが見つかりません ")) : y("", !0)
                ])
              ])) : y("", !0),
              t[48] || (t[48] = e("div", { class: "di-form-divider" }, [
                e("span", null, "または手動入力")
              ], -1)),
              e("div", ps, [
                e("div", ys, [
                  t[42] || (t[42] = e("label", { class: "di-form-label" }, "テーブル名 *", -1)),
                  T(e("input", {
                    "onUpdate:modelValue": t[10] || (t[10] = (s) => g.value = s),
                    type: "text",
                    placeholder: "users",
                    class: "di-input"
                  }, null, 512), [
                    [B, g.value]
                  ])
                ]),
                e("div", ms, [
                  t[43] || (t[43] = e("label", { class: "di-form-label" }, "カラム名 *", -1)),
                  T(e("input", {
                    "onUpdate:modelValue": t[11] || (t[11] = (s) => E.value = s),
                    type: "text",
                    placeholder: "name",
                    class: "di-input"
                  }, null, 512), [
                    [B, E.value]
                  ])
                ])
              ]),
              e("div", bs, [
                t[45] || (t[45] = e("label", { class: "di-form-label" }, "データ型", -1)),
                T(e("select", {
                  "onUpdate:modelValue": t[12] || (t[12] = (s) => L.value = s),
                  class: "di-select"
                }, [
                  t[44] || (t[44] = e("option", { value: "" }, "選択してください", -1)),
                  (i(), d(R, null, Q(r, (s) => e("option", {
                    key: s,
                    value: s
                  }, p(s), 9, hs)), 64))
                ], 512), [
                  [Ee, L.value]
                ])
              ]),
              e("div", fs, [
                t[46] || (t[46] = e("label", { class: "di-form-label" }, "バリデーション (カンマ区切り)", -1)),
                T(e("input", {
                  "onUpdate:modelValue": t[13] || (t[13] = (s) => O.value = s),
                  type: "text",
                  placeholder: "required, max:255",
                  class: "di-input"
                }, null, 512), [
                  [B, O.value]
                ])
              ]),
              e("div", ks, [
                t[47] || (t[47] = e("label", { class: "di-form-label" }, "説明", -1)),
                T(e("textarea", {
                  "onUpdate:modelValue": t[14] || (t[14] = (s) => H.value = s),
                  rows: "2",
                  placeholder: "このフィールドの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [B, H.value]
                ])
              ])
            ], 64)) : y("", !0),
            v.value === "action" ? (i(), d(R, { key: 2 }, [
              e("div", gs, [
                t[49] || (t[49] = e("label", { class: "di-form-label" }, "アクションタイプ", -1)),
                T(e("select", {
                  "onUpdate:modelValue": t[15] || (t[15] = (s) => _.value = s),
                  class: "di-select"
                }, [
                  (i(), d(R, null, Q(be, (s) => e("option", {
                    key: s.value,
                    value: s.value
                  }, p(s.label), 9, xs)), 64))
                ], 512), [
                  [Ee, _.value]
                ])
              ]),
              _.value === "api" ? (i(), d("div", ws, [
                e("div", $s, [
                  t[50] || (t[50] = e("label", { class: "di-form-label" }, "メソッド", -1)),
                  T(e("select", {
                    "onUpdate:modelValue": t[16] || (t[16] = (s) => Z.value = s),
                    class: "di-select"
                  }, [
                    (i(), d(R, null, Q(Fe, (s) => e("option", {
                      key: s,
                      value: s
                    }, p(s), 9, Cs)), 64))
                  ], 512), [
                    [Ee, Z.value]
                  ])
                ]),
                e("div", _s, [
                  t[51] || (t[51] = e("label", { class: "di-form-label" }, "エンドポイント", -1)),
                  T(e("input", {
                    "onUpdate:modelValue": t[17] || (t[17] = (s) => h.value = s),
                    type: "text",
                    placeholder: "/api/tasks",
                    class: "di-input"
                  }, null, 512), [
                    [B, h.value]
                  ])
                ])
              ])) : (i(), d("div", Is, [
                e("label", Ms, p(_.value === "navigate" ? "遷移先パス" : _.value === "modal" ? "モーダル名" : _.value === "emit" ? "イベント名" : "関数名"), 1),
                T(e("input", {
                  "onUpdate:modelValue": t[18] || (t[18] = (s) => h.value = s),
                  type: "text",
                  placeholder: _.value === "navigate" ? "/tasks" : _.value === "modal" ? "ConfirmDialog" : _.value === "emit" ? "onSubmit" : "handleClick",
                  class: "di-input"
                }, null, 8, Es), [
                  [B, h.value]
                ])
              ])),
              e("div", Ps, [
                t[52] || (t[52] = e("label", { class: "di-form-label" }, "説明", -1)),
                T(e("textarea", {
                  "onUpdate:modelValue": t[19] || (t[19] = (s) => ee.value = s),
                  rows: "2",
                  placeholder: "このアクションの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [B, ee.value]
                ])
              ])
            ], 64)) : y("", !0),
            v.value === "links" ? (i(), d(R, { key: 3 }, [
              e("div", Ss, [
                t[53] || (t[53] = e("label", { class: "di-form-label" }, "テストファイルパス", -1)),
                T(e("input", {
                  "onUpdate:modelValue": t[20] || (t[20] = (s) => u.value = s),
                  type: "text",
                  placeholder: "src/__tests__/components/MyComponent.test.ts",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [B, u.value]
                ])
              ]),
              e("div", As, [
                t[54] || (t[54] = e("label", { class: "di-form-label" }, "Figma URL", -1)),
                T(e("input", {
                  "onUpdate:modelValue": t[21] || (t[21] = (s) => x.value = s),
                  type: "text",
                  placeholder: "https://www.figma.com/design/...",
                  class: "di-input"
                }, null, 512), [
                  [B, x.value]
                ])
              ]),
              e("div", Ds, [
                e("div", Ts, [
                  t[55] || (t[55] = e("label", { class: "di-form-label" }, "GitHub Issue", -1)),
                  T(e("input", {
                    "onUpdate:modelValue": t[22] || (t[22] = (s) => a.value = s),
                    type: "text",
                    placeholder: "#123",
                    class: "di-input"
                  }, null, 512), [
                    [B, a.value]
                  ])
                ]),
                e("div", Ls, [
                  t[56] || (t[56] = e("label", { class: "di-form-label" }, "GitHub PR", -1)),
                  T(e("input", {
                    "onUpdate:modelValue": t[23] || (t[23] = (s) => m.value = s),
                    type: "text",
                    placeholder: "#456",
                    class: "di-input"
                  }, null, 512), [
                    [B, m.value]
                  ])
                ])
              ]),
              e("div", Us, [
                t[57] || (t[57] = e("label", { class: "di-form-label" }, "関連ドキュメント", -1)),
                T(e("input", {
                  "onUpdate:modelValue": t[24] || (t[24] = (s) => D.value = s),
                  type: "text",
                  placeholder: "https://docs.example.com/...",
                  class: "di-input"
                }, null, 512), [
                  [B, D.value]
                ])
              ])
            ], 64)) : y("", !0),
            v.value === "meta" ? (i(), d(R, { key: 4 }, [
              e("div", Vs, [
                t[58] || (t[58] = e("label", { class: "di-form-label" }, "使用Piniaストア (カンマ区切り)", -1)),
                T(e("input", {
                  "onUpdate:modelValue": t[25] || (t[25] = (s) => I.value = s),
                  type: "text",
                  placeholder: "useUserStore, useThemeStore",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [B, I.value]
                ])
              ]),
              e("div", Bs, [
                t[59] || (t[59] = e("label", { class: "di-form-label" }, "使用コンポーネント (カンマ区切り)", -1)),
                T(e("input", {
                  "onUpdate:modelValue": t[26] || (t[26] = (s) => P.value = s),
                  type: "text",
                  placeholder: "Button, Modal, Input",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [B, P.value]
                ])
              ]),
              e("div", Rs, [
                t[60] || (t[60] = e("label", { class: "di-form-label" }, "i18nキー (カンマ区切り)", -1)),
                T(e("input", {
                  "onUpdate:modelValue": t[27] || (t[27] = (s) => M.value = s),
                  type: "text",
                  placeholder: "common.save, errors.required",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [B, M.value]
                ])
              ]),
              e("div", js, [
                t[61] || (t[61] = e("label", { class: "di-form-label" }, "デザイントークン (カンマ区切り)", -1)),
                T(e("input", {
                  "onUpdate:modelValue": t[28] || (t[28] = (s) => U.value = s),
                  type: "text",
                  placeholder: "primaryColor, secondaryColor",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [B, U.value]
                ])
              ]),
              e("div", qs, [
                t[62] || (t[62] = e("label", { class: "di-form-label" }, "アクセシビリティ", -1)),
                T(e("textarea", {
                  "onUpdate:modelValue": t[29] || (t[29] = (s) => f.value = s),
                  rows: "2",
                  placeholder: "キーボード操作、スクリーンリーダー対応などのメモ...",
                  class: "di-textarea"
                }, null, 512), [
                  [B, f.value]
                ])
              ]),
              e("div", Os, [
                t[63] || (t[63] = e("label", { class: "di-form-label" }, "レスポンシブ動作", -1)),
                T(e("textarea", {
                  "onUpdate:modelValue": t[30] || (t[30] = (s) => K.value = s),
                  rows: "2",
                  placeholder: "モバイルでの表示変更、ブレークポイントなど...",
                  class: "di-textarea"
                }, null, 512), [
                  [B, K.value]
                ])
              ])
            ], 64)) : y("", !0)
          ]),
          e("div", Hs, [
            e("button", {
              onClick: X,
              class: "di-btn-delete"
            }, [
              C(o(He), { style: { width: "14px", height: "14px" } }),
              t[64] || (t[64] = N(" 削除 ", -1))
            ]),
            e("div", Fs, [
              e("button", {
                onClick: ue,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: n,
                class: "di-btn-save"
              }, [
                C(o(rt), { style: { width: "14px", height: "14px" } }),
                t[65] || (t[65] = N(" 保存 ", -1))
              ])
            ])
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), Ns = /* @__PURE__ */ Ae(zs, [["__scopeId", "data-v-28a37438"]]), Gs = {
  key: 0,
  "data-dev-inspector": "",
  class: "di-loading-overlay"
}, Xs = { class: "di-highlight-label" }, Ks = {
  key: 2,
  "data-dev-inspector": "",
  class: "di-pick-banner"
}, Ys = ["onClick"], Zs = ["onClick"], Js = {
  "data-dev-inspector": "",
  class: "di-scan-banner"
}, Ws = ["onClick"], Qs = { class: "di-analysis-type" }, en = {
  key: 0,
  class: "di-analysis-tags"
}, tn = {
  key: 1,
  class: "di-analysis-db"
}, ln = {
  key: 2,
  class: "di-analysis-api-source"
}, sn = {
  key: 3,
  class: "di-analysis-conditional"
}, nn = ["onClick"], on = {
  key: 0,
  class: "di-analysis-text"
}, an = {
  "data-dev-inspector": "",
  class: "di-analysis-banner"
}, dn = /* @__PURE__ */ _e({
  __name: "DevPickOverlay",
  setup(k) {
    const l = Ie(), v = b(null), g = b(null), E = b(0), L = b(0);
    function O(u) {
      return {
        db: "DB",
        form: "フォーム",
        button: "ボタン",
        link: "リンク",
        modal: "モーダル",
        conditional: "条件",
        computed: "計算",
        api: "API",
        other: "その他"
      }[u] || u;
    }
    function H(u) {
      var a;
      const x = l.getElementConfig(u);
      if (!(x != null && x.sourceBinding)) {
        const m = ((a = x == null ? void 0 : x.note) == null ? void 0 : a.type) || "info";
        return {
          info: "#60a5fa",
          warning: "#fbbf24",
          todo: "#10b981",
          question: "#a78bfa"
        }[m] || "#60a5fa";
      }
      return x.sourceBinding.isStatic ? "#10b981" : x.sourceBinding.type === "v-model" ? "#8b5cf6" : x.sourceBinding.type === "api" ? "#f59e0b" : "#60a5fa";
    }
    const _ = oe(() => {
      var D, I, P, M, U;
      const u = E.value, x = L.value, a = [];
      if (!l.isEnabled) return a;
      const m = l.getConfiguredSelectors();
      for (const f of m)
        try {
          const K = document.querySelector(f);
          if (K) {
            const S = K.getBoundingClientRect(), w = l.getElementConfig(f), $ = ((D = w == null ? void 0 : w.sourceBinding) == null ? void 0 : D.isStatic) || !1, ae = ((I = w == null ? void 0 : w.sourceBinding) == null ? void 0 : I.type) || "";
            let V = "";
            (P = w == null ? void 0 : w.fieldInfo) != null && P.table && ((M = w == null ? void 0 : w.fieldInfo) != null && M.column) ? V = `DB: ${w.fieldInfo.table}.${w.fieldInfo.column}` : $ ? V = "固定" : ae === "v-model" ? V = "フォーム" : ae === "api" ? V = "データ" : (U = w == null ? void 0 : w.note) != null && U.type ? V = {
              info: "情報",
              warning: "注意",
              todo: "TODO",
              question: "質問"
            }[w.note.type] || "メモ" : V = "メモ", a.push({
              selector: f,
              top: `${S.top + u}px`,
              left: `${S.left + x}px`,
              width: `${S.width}px`,
              height: `${S.height}px`,
              color: H(f),
              isStatic: $,
              label: V
            });
          }
        } catch {
        }
      return a;
    }), h = oe(() => {
      var m;
      const u = E.value, x = L.value, a = [];
      if (!l.isEnabled || l.scanResults.length === 0) return a;
      for (const D of l.scanResults)
        try {
          const I = document.querySelector(D.selector);
          if (I) {
            const P = I.getBoundingClientRect();
            a.push({
              selector: D.selector,
              top: `${P.top + u}px`,
              left: `${P.left + x}px`,
              width: `${P.width}px`,
              height: `${P.height}px`,
              isStatic: ((m = D.detected.sourceBinding) == null ? void 0 : m.isStatic) || !1
            });
          }
        } catch {
        }
      return a;
    }), Z = oe(() => {
      var D, I;
      const u = E.value, x = L.value, a = [], m = l.analysisFilter;
      if (m === "none" || !l.isEnabled || l.analysisResults.length === 0) return a;
      for (const P of l.analysisResults) {
        if (!P.matched) continue;
        const M = P.element;
        try {
          const U = document.querySelector(P.selector);
          if (!U) continue;
          const f = U.getBoundingClientRect();
          if (f.width > window.innerWidth * 0.8 || f.height > window.innerHeight * 0.5)
            continue;
          const K = U.querySelector("[data-di-binding]") || (U.hasAttribute("data-di-binding") ? U : null);
          let S = "", w = M.binding || "";
          const $ = [...M.tags || []];
          if (K) {
            const le = K.getAttribute("data-di-db"), be = K.getAttribute("data-di-binding");
            le && (S = le, $.includes("db") || $.push("db")), be && (w = be);
          }
          !S && M.db && (S = `${M.db.table}.${M.db.column}`, $.includes("db") || $.push("db"));
          let ae = "";
          M.api && (ae = `${M.api.method} ${M.api.endpoint}`, $.includes("api") || $.push("api"));
          let V = "";
          if (w) {
            const le = l.getApiSourceForBinding(w);
            le && le.endpoint ? V = `${le.method || "GET"} ${le.endpoint}` : le && le.composable && (V = le.composable);
          }
          const re = (D = M.conditional) == null ? void 0 : D.expression, ue = (I = M.modal) == null ? void 0 : I.target, q = !!S || $.includes("db"), n = !!ae || $.includes("api"), X = $.includes("form"), r = $.includes("button"), F = $.includes("link"), ne = $.includes("modal"), de = $.includes("conditional"), me = $.includes("computed");
          if (m === "db-api") {
            if (!q && !n) continue;
          } else if (m === "form") {
            if (!X) continue;
          } else if (m === "button") {
            if (!r) continue;
          } else if (m === "link") {
            if (!F) continue;
          } else if (m === "modal") {
            if (!ne) continue;
          } else if (m === "conditional") {
            if (!de) continue;
          } else if (m === "computed") {
            if (!me) continue;
          } else if (m === "other" && (q || n || X || r || F || ne || de || me))
            continue;
          let ie = "other";
          q ? ie = "db" : n ? ie = "api" : X ? ie = "form" : r ? ie = "button" : F ? ie = "link" : ne ? ie = "modal" : de ? ie = "conditional" : me && (ie = "computed"), a.push({
            selector: P.selector,
            top: `${f.top + u}px`,
            left: `${f.left + x}px`,
            width: `${f.width}px`,
            height: `${f.height}px`,
            tags: $,
            primaryTag: ie,
            text: M.text || w || "",
            dbInfo: S,
            apiInfo: ae,
            apiSource: V,
            conditionalExpr: re,
            modalTarget: ue
          });
        } catch {
        }
      }
      return a;
    });
    function ee(u) {
      if (!l.isPickMode) return;
      if (u.target.closest("[data-dev-inspector]")) {
        v.value = null, g.value = null, l.setHoveredSelector(null);
        return;
      }
      const a = document.elementFromPoint(u.clientX, u.clientY);
      if (!a || a === document.body || a === document.documentElement) {
        v.value = null, g.value = null, l.setHoveredSelector(null);
        return;
      }
      if (a.closest("[data-dev-inspector]"))
        return;
      g.value = a;
      const m = a.getBoundingClientRect();
      v.value = {
        top: `${m.top + window.scrollY}px`,
        left: `${m.left + window.scrollX}px`,
        width: `${m.width}px`,
        height: `${m.height}px`
      };
      const D = l.generateSelector(a);
      l.setHoveredSelector(D);
    }
    function G(u) {
      if (!(!l.isPickMode || u.target.closest("[data-dev-inspector]")) && (u.preventDefault(), u.stopPropagation(), g.value)) {
        const a = l.generateSelector(g.value);
        l.startEditing(a), l.togglePickMode();
      }
    }
    function te(u) {
      u.key === "Escape" && l.isPickMode && l.togglePickMode();
    }
    function j() {
      E.value = window.scrollY, L.value = window.scrollX;
    }
    return Oe(() => {
      window.addEventListener("mousemove", ee, !0), window.addEventListener("click", G, !0), window.addEventListener("keydown", te), window.addEventListener("scroll", j), window.addEventListener("resize", j);
    }), Ye(() => {
      window.removeEventListener("mousemove", ee, !0), window.removeEventListener("click", G, !0), window.removeEventListener("keydown", te), window.removeEventListener("scroll", j), window.removeEventListener("resize", j);
    }), qe(() => l.isPickMode, (u) => {
      u || (v.value = null, g.value = null);
    }), (u, x) => (i(), Y(ve, { to: "body" }, [
      o(l).isInitializing ? (i(), d("div", Gs, [...x[1] || (x[1] = [
        e("div", { class: "di-loading-content" }, [
          e("div", { class: "di-loading-spinner" }),
          e("span", { class: "di-loading-text" }, "Developer Mode 起動中...")
        ], -1)
      ])])) : y("", !0),
      o(l).isPickMode && v.value ? (i(), d("div", {
        key: 1,
        "data-dev-inspector": "",
        class: "di-highlight",
        style: J({
          top: v.value.top,
          left: v.value.left,
          width: v.value.width,
          height: v.value.height
        })
      }, [
        e("div", Xs, p(o(l).hoveredSelector), 1)
      ], 4)) : y("", !0),
      o(l).isPickMode ? (i(), d("div", Ks, [...x[2] || (x[2] = [
        e("span", null, "要素をクリックしてメモを追加", -1),
        e("kbd", null, "ESC", -1),
        e("span", { class: "di-pick-hint" }, "でキャンセル", -1)
      ])])) : y("", !0),
      o(l).isEnabled && !o(l).isPickMode && !o(l).editingElementId ? (i(!0), d(R, { key: 3 }, Q(_.value, (a) => (i(), d("div", {
        key: a.selector,
        "data-dev-inspector": "",
        class: "di-annotation-box",
        style: J({
          top: a.top,
          left: a.left,
          width: a.width,
          height: a.height,
          borderColor: a.color,
          backgroundColor: a.color + "15"
        }),
        onClick: (m) => o(l).startEditing(a.selector)
      }, [
        e("div", {
          class: "di-annotation-label",
          style: J({ backgroundColor: a.color })
        }, p(a.label), 5)
      ], 12, Ys))), 128)) : y("", !0),
      o(l).isEnabled && !o(l).editingElementId && h.value.length > 0 && o(l).analysisResults.length === 0 ? (i(), d(R, { key: 4 }, [
        (i(!0), d(R, null, Q(h.value, (a) => (i(), d("div", {
          key: "scan-" + a.selector,
          "data-dev-inspector": "",
          class: W(["di-scan-highlight", { "di-scan-static": a.isStatic }]),
          style: J({
            top: a.top,
            left: a.left,
            width: a.width,
            height: a.height
          }),
          onClick: (m) => o(l).startEditing(a.selector)
        }, [
          e("div", {
            class: W(["di-scan-label", { "di-scan-label-static": a.isStatic }])
          }, p(a.isStatic ? "固定文言" : "動的データ"), 3)
        ], 14, Zs))), 128)),
        e("div", Js, [
          e("span", null, p(h.value.length) + "件の要素を検出", 1),
          e("button", {
            onClick: x[0] || (x[0] = (a) => o(l).clearScanResults()),
            class: "di-scan-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : y("", !0),
      o(l).isEnabled && !o(l).editingElementId && Z.value.length > 0 ? (i(), d(R, { key: 5 }, [
        (i(!0), d(R, null, Q(Z.value, (a) => (i(), d("div", {
          key: "analysis-" + a.selector,
          "data-dev-inspector": "",
          class: W(["di-analysis-highlight", "di-analysis-" + a.primaryTag]),
          style: J({
            top: a.top,
            left: a.left,
            width: a.width,
            height: a.height
          }),
          onClick: (m) => o(l).startEditing(a.selector)
        }, [
          e("div", {
            class: W(["di-analysis-label", "di-analysis-label-" + a.primaryTag])
          }, [
            e("span", Qs, p(O(a.primaryTag)), 1),
            a.tags.length > 1 ? (i(), d("span", en, "+" + p(a.tags.length - 1), 1)) : y("", !0),
            a.dbInfo ? (i(), d("span", tn, p(a.dbInfo), 1)) : y("", !0),
            a.apiSource ? (i(), d("span", ln, "← " + p(a.apiSource), 1)) : y("", !0),
            a.conditionalExpr ? (i(), d("span", sn, p(a.conditionalExpr), 1)) : y("", !0),
            e("button", {
              class: "di-analysis-delete",
              onClick: Ce((m) => o(l).removeAnalysisResult(a.selector), ["stop"]),
              title: "この要素を非表示"
            }, "×", 8, nn)
          ], 2),
          a.text && a.text.length < 30 ? (i(), d("div", on, p(a.text), 1)) : y("", !0)
        ], 14, Ws))), 128)),
        e("div", an, [
          e("span", null, "📊 分析データ: " + p(Z.value.length) + "件の要素", 1)
        ])
      ], 64)) : y("", !0)
    ]));
  }
}), un = /* @__PURE__ */ Ae(dn, [["__scopeId", "data-v-0dfd193e"]]), rn = {
  key: 0,
  "data-dev-inspector": ""
}, cn = /* @__PURE__ */ _e({
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
  setup(k) {
    const l = k, v = Ie();
    return Oe(() => {
      v.init({
        storageKey: l.storageKey,
        enabledInProduction: l.enabledInProduction,
        initialAnnotations: l.initialAnnotations
      });
    }), (g, E) => o(v).isAvailable ? (i(), d("div", rn, [
      C(Hl),
      C(Ns),
      C(un)
    ])) : y("", !0);
  }
}), yn = {
  install(k, l = {}) {
    const { autoRegister: v = !0, ...g } = l;
    v && k.component("DevInspector", cn), k.provide("devInspectorOptions", g);
  }
};
export {
  Ns as DevElementEditor,
  cn as DevInspector,
  Hl as DevPanel,
  un as DevPickOverlay,
  yn as VueDevInspector,
  yn as default,
  hn as useDevInspector,
  Ie as useDevInspectorStore,
  kn as vitePluginDevInspector
};
