import { h as Le, defineComponent as Ce, ref as f, computed as se, openBlock as o, createElementBlock as u, Fragment as V, createBlock as le, Teleport as ue, unref as d, createVNode as I, createCommentVNode as p, createElementVNode as e, normalizeClass as X, toDisplayString as m, withDirectives as D, vModelText as U, renderList as W, normalizeStyle as G, createTextVNode as O, withModifiers as $e, watch as qe, resolveDynamicComponent as Ge, vModelSelect as Me, onMounted as Re, onUnmounted as Xe } from "vue";
import { u as Ie } from "./useDevInspector-BPLW4jtW.js";
import { a as oi } from "./useDevInspector-BPLW4jtW.js";
import { default as ai } from "./vite.js";
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
const Ke = (h) => h.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), P = (h, s) => ({ size: c, strokeWidth: g = 2, absoluteStrokeWidth: _, color: T, class: F, ...M }, { attrs: A, slots: x }) => Le(
  "svg",
  {
    ...xe,
    width: c || xe.width,
    height: c || xe.height,
    stroke: T || xe.stroke,
    "stroke-width": _ ? Number(g) * 24 / Number(c) : g,
    ...A,
    class: ["lucide", `lucide-${Ke(h)}`],
    ...M
  },
  [
    ...s.map((N) => Le(...N)),
    ...x.default ? [x.default()] : []
  ]
);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ye = P("AlertCircleIcon", [
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
const Ze = P("AlertTriangleIcon", [
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
const Je = P("CheckSquareIcon", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Se = P("CodeIcon", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ue = P("DatabaseIcon", [
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
const we = P("DownloadIcon", [
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
const We = P("ExternalLinkIcon", [
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
const Qe = P("FileSpreadsheetIcon", [
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
const Ve = P("FileTextIcon", [
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
const et = P("GitBranchIcon", [
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
const tt = P("HelpCircleIcon", [
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
const lt = P("InfoIcon", [
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
const st = P("LinkIcon", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Be = P("Loader2Icon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const it = P("MessageSquareIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ot = P("MousePointer2Icon", [
  ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nt = P("PenLineIcon", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const at = P("SaveIcon", [
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
const dt = P("ScanIcon", [
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
const je = P("ServerIcon", [
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
const ut = P("Settings2Icon", [
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
const Oe = P("Trash2Icon", [
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
const rt = P("UploadIcon", [
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
const ct = P("Wand2Icon", [
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
const Ee = P("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vt = P("ZapIcon", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
]);
async function pt(h, s, c = {}) {
  var j;
  const g = await import("./xlsx-BopDBbWb.js"), { systemName: _ = "System", author: T = "" } = c, F = /* @__PURE__ */ new Date(), M = `${F.getFullYear()}/${F.getMonth() + 1}/${F.getDate()}`, A = g.utils.book_new(), x = [];
  x.push([
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
    (h == null ? void 0 : h.name) || "",
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
    M
  ]), x.push([]), x.push([
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
    (h == null ? void 0 : h.componentPath) || "",
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
    (h == null ? void 0 : h.figmaUrl) || ""
  ]), x.push([]), x.push(["機能概要"]), x.push([(h == null ? void 0 : h.description) || ""]), x.push([]), x.push(["画面レイアウト　figmaURL"]), x.push([(h == null ? void 0 : h.figmaUrl) || ""]), x.push([]), h != null && h.apis && h.apis.length > 0 && (x.push(["API一覧"]), x.push(["", "メソッド", "", "エンドポイント", "", "", "", "", "", "", "", "説明"]), h.apis.forEach((r) => {
    x.push(["", r.method, "", r.endpoint, "", "", "", "", "", "", "", r.description]);
  }), x.push([])), x.push(["画面項目　ヘッダーフッターは省く"]), x.push([
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
  ]), Object.values(s).forEach((r, k) => {
    var E, $, B;
    const n = r.id;
    let y = "", L = "", C = "";
    if ((E = r.note) != null && E.text && (y = r.note.text), r.fieldInfo && (y += y ? `
` : "", y += `DB: ${r.fieldInfo.table}.${r.fieldInfo.column}`, r.fieldInfo.type && (y += ` (${r.fieldInfo.type})`), r.fieldInfo.description && (y += `
${r.fieldInfo.description}`)), r.actionInfo && (C = `[${{
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行"
    }[r.actionInfo.type] || r.actionInfo.type}]`, r.actionInfo.target && (C += ` ${r.actionInfo.method || ""} ${r.actionInfo.target}`), r.actionInfo.description && (C += `
${r.actionInfo.description}`)), r.links) {
      const w = [];
      r.links.testPath && w.push(`テスト: ${r.links.testPath}`), r.links.figmaUrl && w.push(`Figma: ${r.links.figmaUrl}`), r.links.githubIssue && w.push(`Issue: ${r.links.githubIssue}`), r.links.githubPr && w.push(`PR: ${r.links.githubPr}`), w.length > 0 && (C += C ? `

` : "", C += w.join(`
`));
    }
    if (r.devMeta) {
      const w = [];
      ($ = r.devMeta.usedStores) != null && $.length && w.push(`Store: ${r.devMeta.usedStores.join(", ")}`), (B = r.devMeta.usedComponents) != null && B.length && w.push(`Components: ${r.devMeta.usedComponents.join(", ")}`), r.devMeta.accessibility && w.push(`A11y: ${r.devMeta.accessibility}`), r.devMeta.responsive && w.push(`Responsive: ${r.devMeta.responsive}`), w.length > 0 && (C += C ? `

` : "", C += `[開発情報]
` + w.join(`
`));
    }
    x.push([
      "",
      k + 1,
      "",
      n,
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
      y,
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
      L,
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
  const K = g.utils.aoa_to_sheet(x);
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
  ], g.utils.book_append_sheet(A, K, "画面設計書");
  const Y = `画面仕様書_${((j = h == null ? void 0 : h.name) == null ? void 0 : j.replace(/[/\\?%*:|"<>]/g, "-")) || "screen"}_${M.replace(/\//g, "")}.xlsx`;
  return g.writeFile(A, Y), Y;
}
const yt = {
  key: 0,
  class: "di-panel",
  "data-dev-inspector": ""
}, mt = { class: "di-header" }, bt = { class: "di-header-title" }, ft = { class: "di-edit-section" }, ht = { class: "di-analysis-section" }, kt = { class: "di-analysis-header" }, gt = { class: "di-analysis-input" }, xt = { class: "di-analysis-buttons" }, wt = ["disabled"], $t = ["disabled"], Ct = {
  key: 0,
  class: "di-analysis-error"
}, It = {
  key: 1,
  class: "di-analysis-status"
}, _t = { class: "di-analysis-count" }, Mt = {
  key: 2,
  class: "di-analysis-filter"
}, Et = { class: "di-filter-buttons" }, Dt = ["onClick"], Pt = {
  key: 0,
  class: "di-hidden-actions"
}, At = ["disabled"], Tt = { key: 1 }, Lt = { key: 2 }, St = {
  key: 3,
  class: "di-page-apis"
}, Ut = {
  key: 0,
  class: "di-api-group"
}, Vt = { class: "di-api-group-header" }, Bt = { class: "di-api-group-count" }, jt = { class: "di-api-group-list" }, qt = { class: "di-api-endpoint" }, Rt = {
  key: 0,
  class: "di-api-variable"
}, Ot = { class: "di-api-trigger" }, Ht = {
  key: 1,
  class: "di-api-group"
}, Ft = { class: "di-api-group-header" }, zt = { class: "di-api-group-count" }, Nt = { class: "di-api-group-list" }, Gt = { class: "di-api-endpoint" }, Xt = {
  key: 0,
  class: "di-api-variable"
}, Kt = { class: "di-content" }, Yt = { class: "di-section" }, Zt = { class: "di-screen-name" }, Jt = { class: "di-screen-desc" }, Wt = { class: "di-card" }, Qt = { class: "di-card-label" }, el = { class: "di-code-blue" }, tl = {
  key: 0,
  class: "di-card"
}, ll = { class: "di-card-label" }, sl = ["href"], il = {
  key: 1,
  class: "di-card"
}, ol = { class: "di-card-label" }, nl = { class: "di-api-list" }, al = { class: "di-api-info" }, dl = { class: "di-api-endpoint" }, ul = { class: "di-api-desc" }, rl = {
  key: 2,
  class: "di-card"
}, cl = { class: "di-card-label" }, vl = { class: "di-notes-list" }, pl = {
  key: 1,
  class: "di-no-spec"
}, yl = { class: "di-card" }, ml = { class: "di-card-header" }, bl = { class: "di-card-label" }, fl = { class: "di-count-badge" }, hl = {
  key: 0,
  class: "di-export-buttons"
}, kl = {
  key: 1,
  class: "di-export-hint"
}, gl = { class: "di-action-buttons" }, xl = {
  key: 0,
  class: "di-indicator",
  "data-dev-inspector": ""
}, wl = { class: "di-modal" }, $l = ["value"], Cl = { class: "di-modal-actions" }, Il = { class: "di-modal" }, _l = { class: "di-file-drop" }, Ml = {
  key: 0,
  class: "di-error"
}, El = { class: "di-modal-actions" }, Dl = ["disabled"], Pl = /* @__PURE__ */ Ce({
  __name: "DevPanel",
  setup(h) {
    const s = Ie(), c = f(!1), g = f(!1), _ = f(""), T = f(""), F = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, M = se(() => s.currentScreenSpec), A = se(() => Object.keys(s.elementConfigs).length);
    function x() {
      const b = s.exportConfigs();
      navigator.clipboard.writeText(b), c.value = !1;
    }
    function N() {
      const b = s.exportConfigs(), l = new Blob([b], { type: "application/json" }), q = URL.createObjectURL(l), a = document.createElement("a");
      a.href = q, a.download = "dev-mode-configs.json", a.click(), URL.revokeObjectURL(q), c.value = !1;
    }
    function K() {
      s.downloadAnnotations();
    }
    async function H() {
      try {
        await pt(
          s.currentScreenSpec,
          s.elementConfigs,
          { systemName: "System" }
        );
      } catch (b) {
        console.error("Failed to export xlsx:", b), alert("xlsx export failed. Make sure xlsx package is installed.");
      }
    }
    function Y() {
      try {
        s.importConfigs(_.value), _.value = "", T.value = "", g.value = !1;
      } catch {
        T.value = "JSONの形式が正しくありません";
      }
    }
    function j(b) {
      var Z;
      const q = (Z = b.target.files) == null ? void 0 : Z[0];
      if (!q) return;
      const a = new FileReader();
      a.onload = (ie) => {
        var ne;
        _.value = (ne = ie.target) == null ? void 0 : ne.result;
      }, a.readAsText(q);
    }
    function r() {
      confirm("すべての要素設定を削除しますか？") && s.clearAllConfigs();
    }
    const k = f("/dev-inspector-analysis.json"), n = f(!1), y = f(""), L = f(0), C = f(!1), E = [
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
    ], $ = se(() => s.getCurrentPageApis()), B = {
      onMount: "画面読込時",
      useFetch: "useFetch",
      useAsyncData: "useAsyncData",
      watch: "watch",
      action: "アクション",
      unknown: "不明"
    };
    async function w() {
      n.value = !0, y.value = "";
      try {
        if (await s.loadAnalysisData(k.value), s.analysisData) {
          const b = Object.values(s.analysisData.components).reduce((l, q) => l + q.elements.length, 0);
          alert(`分析データを読み込みました（${Object.keys(s.analysisData.components).length}コンポーネント、${b}要素）`);
        } else
          y.value = "分析データの読み込みに失敗しました";
      } catch (b) {
        y.value = `読み込みエラー: ${b}`;
      } finally {
        n.value = !1;
      }
    }
    async function z() {
      if (!s.analysisData) {
        alert("先に分析データを読み込んでください");
        return;
      }
      L.value = await s.applyAnalysisToPage();
    }
    async function S() {
      C.value = !0;
      try {
        s.clearHiddenSelectors(), s.analysisData && await s.applyAnalysisToPage();
      } finally {
        C.value = !1;
      }
    }
    return (b, l) => {
      var q;
      return o(), u(V, null, [
        (o(), le(ue, { to: "body" }, [
          d(s).isEnabled && !d(s).isPanelOpen ? (o(), u("button", {
            key: 0,
            onClick: l[0] || (l[0] = //@ts-ignore
            (...a) => d(s).openPanel && d(s).openPanel(...a)),
            class: "di-fab",
            title: "画面仕様を表示",
            "data-dev-inspector": ""
          }, [
            I(d(Ve), { style: { width: "20px", height: "20px" } })
          ])) : p("", !0)
        ])),
        (o(), le(ue, { to: "body" }, [
          d(s).isEnabled && d(s).isPanelOpen ? (o(), u("div", yt, [
            e("div", mt, [
              e("div", bt, [
                I(d(Se), { style: { width: "20px", height: "20px", color: "#60a5fa" } }),
                l[12] || (l[12] = e("span", null, "Developer Mode", -1))
              ]),
              e("button", {
                onClick: l[1] || (l[1] = //@ts-ignore
                (...a) => d(s).closePanel && d(s).closePanel(...a)),
                class: "di-close-btn"
              }, [
                I(d(Ee), { style: { width: "20px", height: "20px" } })
              ])
            ]),
            e("div", ft, [
              e("button", {
                onClick: l[2] || (l[2] = //@ts-ignore
                (...a) => d(s).togglePickMode && d(s).togglePickMode(...a)),
                class: X(["di-pick-btn", { active: d(s).isPickMode }])
              }, [
                I(d(ot), { style: { width: "16px", height: "16px" } }),
                e("span", null, m(d(s).isPickMode ? "要素選択中..." : "任意の要素にメモを追加"), 1)
              ], 2),
              e("div", ht, [
                e("div", kt, [
                  I(d(je), { style: { width: "16px", height: "16px", color: "#3b82f6" } }),
                  l[13] || (l[13] = e("span", null, "CLIソース解析", -1))
                ]),
                e("div", gt, [
                  D(e("input", {
                    "onUpdate:modelValue": l[3] || (l[3] = (a) => k.value = a),
                    type: "text",
                    class: "di-analysis-url",
                    placeholder: "/dev-inspector-analysis.json"
                  }, null, 512), [
                    [U, k.value]
                  ])
                ]),
                e("div", xt, [
                  e("button", {
                    onClick: w,
                    class: "di-analysis-btn",
                    disabled: n.value
                  }, [
                    n.value ? (o(), le(d(Be), {
                      key: 0,
                      class: "di-spin",
                      style: { width: "14px", height: "14px" }
                    })) : (o(), le(d(we), {
                      key: 1,
                      style: { width: "14px", height: "14px" }
                    })),
                    l[14] || (l[14] = e("span", null, "読み込み", -1))
                  ], 8, wt),
                  e("button", {
                    onClick: z,
                    class: "di-analysis-btn di-analysis-btn-apply",
                    disabled: !d(s).analysisData
                  }, [
                    I(d(dt), { style: { width: "14px", height: "14px" } }),
                    l[15] || (l[15] = e("span", null, "ページに適用", -1))
                  ], 8, $t)
                ]),
                y.value ? (o(), u("div", Ct, m(y.value), 1)) : p("", !0),
                d(s).analysisResults.length > 0 ? (o(), u("div", It, [
                  e("span", _t, m(d(s).analysisResults.filter((a) => a.matched).length), 1),
                  e("span", null, "/ " + m(d(s).analysisResults.length) + " 要素がマッチ", 1)
                ])) : p("", !0),
                d(s).analysisResults.length > 0 ? (o(), u("div", Mt, [
                  l[17] || (l[17] = e("span", { class: "di-filter-label" }, "表示フィルター:", -1)),
                  e("div", Et, [
                    (o(), u(V, null, W(E, (a) => e("button", {
                      key: a.value,
                      onClick: (Z) => d(s).analysisFilter = a.value,
                      class: X(["di-filter-btn", { active: d(s).analysisFilter === a.value }])
                    }, m(a.label), 11, Dt)), 64))
                  ]),
                  d(s).hiddenAnalysisSelectors.size > 0 ? (o(), u("div", Pt, [
                    e("button", {
                      onClick: S,
                      class: "di-restore-btn",
                      disabled: C.value
                    }, [
                      C.value ? (o(), le(d(Be), {
                        key: 0,
                        class: "di-spin",
                        style: { width: "12px", height: "12px" }
                      })) : p("", !0),
                      C.value ? (o(), u("span", Tt, "リセット中...")) : (o(), u("span", Lt, "非表示 (" + m(d(s).hiddenAnalysisSelectors.size) + ") をリセット", 1))
                    ], 8, At),
                    e("button", {
                      onClick: l[4] || (l[4] = (a) => d(s).downloadChanges()),
                      class: "di-export-changes-btn",
                      title: "削除した要素をエクスポート (CLI merge用)"
                    }, [
                      I(d(we), { style: { width: "12px", height: "12px" } }),
                      l[16] || (l[16] = e("span", null, "変更をエクスポート", -1))
                    ])
                  ])) : p("", !0)
                ])) : p("", !0),
                $.value.pageLoad.length > 0 || $.value.action.length > 0 ? (o(), u("div", St, [
                  $.value.pageLoad.length > 0 ? (o(), u("div", Ut, [
                    e("div", Vt, [
                      l[18] || (l[18] = e("span", { class: "di-api-group-icon" }, "📡", -1)),
                      l[19] || (l[19] = e("span", null, "画面読込時のAPI", -1)),
                      e("span", Bt, m($.value.pageLoad.length), 1)
                    ]),
                    e("div", jt, [
                      (o(!0), u(V, null, W($.value.pageLoad, (a) => (o(), u("div", {
                        key: a.endpoint + a.method,
                        class: "di-api-group-item"
                      }, [
                        e("span", {
                          class: X(["di-api-method", "di-api-method-" + a.method.toLowerCase()])
                        }, m(a.method), 3),
                        e("code", qt, m(a.endpoint || a.composable), 1),
                        a.variable ? (o(), u("span", Rt, "→ " + m(a.variable), 1)) : p("", !0),
                        e("span", Ot, m(B[a.loadTrigger]), 1)
                      ]))), 128))
                    ])
                  ])) : p("", !0),
                  $.value.action.length > 0 ? (o(), u("div", Ht, [
                    e("div", Ft, [
                      l[20] || (l[20] = e("span", { class: "di-api-group-icon" }, "👆", -1)),
                      l[21] || (l[21] = e("span", null, "アクション時のAPI", -1)),
                      e("span", zt, m($.value.action.length), 1)
                    ]),
                    e("div", Nt, [
                      (o(!0), u(V, null, W($.value.action, (a) => (o(), u("div", {
                        key: a.endpoint + a.method,
                        class: "di-api-group-item"
                      }, [
                        e("span", {
                          class: X(["di-api-method", "di-api-method-" + a.method.toLowerCase()])
                        }, m(a.method), 3),
                        e("code", Gt, m(a.endpoint || a.composable), 1),
                        a.variable ? (o(), u("span", Xt, "→ " + m(a.variable), 1)) : p("", !0)
                      ]))), 128))
                    ])
                  ])) : p("", !0)
                ])) : p("", !0)
              ])
            ]),
            e("div", Kt, [
              M.value ? (o(), u(V, { key: 0 }, [
                e("div", Yt, [
                  e("h2", Zt, m(M.value.name), 1),
                  e("p", Jt, m(M.value.description), 1)
                ]),
                e("div", Wt, [
                  e("div", Qt, [
                    I(d(Se), { style: { width: "16px", height: "16px" } }),
                    l[22] || (l[22] = e("span", null, "Component Path", -1))
                  ]),
                  e("code", el, m(M.value.componentPath), 1)
                ]),
                M.value.figmaUrl ? (o(), u("div", tl, [
                  e("div", ll, [
                    I(d(We), { style: { width: "16px", height: "16px" } }),
                    l[23] || (l[23] = e("span", null, "Figma Design", -1))
                  ]),
                  e("a", {
                    href: M.value.figmaUrl,
                    target: "_blank",
                    class: "di-link-purple"
                  }, m(M.value.figmaUrl), 9, sl)
                ])) : p("", !0),
                M.value.apis.length ? (o(), u("div", il, [
                  e("div", ol, [
                    I(d(je), { style: { width: "16px", height: "16px" } }),
                    l[24] || (l[24] = e("span", null, "API Endpoints", -1))
                  ]),
                  e("div", nl, [
                    (o(!0), u(V, null, W(M.value.apis, (a, Z) => (o(), u("div", {
                      key: Z,
                      class: "di-api-item"
                    }, [
                      e("span", {
                        class: "di-method-badge",
                        style: G({ backgroundColor: F[a.method] + "20", color: F[a.method] })
                      }, m(a.method), 5),
                      e("div", al, [
                        e("code", dl, m(a.endpoint), 1),
                        e("p", ul, m(a.description), 1)
                      ])
                    ]))), 128))
                  ])
                ])) : p("", !0),
                (q = M.value.notes) != null && q.length ? (o(), u("div", rl, [
                  e("div", cl, [
                    I(d(Ye), { style: { width: "16px", height: "16px" } }),
                    l[25] || (l[25] = e("span", null, "Notes", -1))
                  ]),
                  e("ul", vl, [
                    (o(!0), u(V, null, W(M.value.notes, (a, Z) => (o(), u("li", {
                      key: Z,
                      class: "di-note-item"
                    }, [
                      l[26] || (l[26] = e("span", { class: "di-bullet" }, "•", -1)),
                      e("span", null, m(a), 1)
                    ]))), 128))
                  ])
                ])) : p("", !0)
              ], 64)) : (o(), u("div", pl, [
                I(d(Ve), { style: { width: "48px", height: "48px", color: "#334155" } }),
                l[27] || (l[27] = e("p", null, [
                  O("この画面の仕様情報は"),
                  e("br"),
                  O("まだ登録されていません")
                ], -1))
              ])),
              e("div", yl, [
                e("div", ml, [
                  e("div", bl, [
                    I(d(nt), { style: { width: "16px", height: "16px" } }),
                    l[28] || (l[28] = e("span", null, "登録済み要素", -1)),
                    e("span", fl, m(A.value), 1)
                  ])
                ]),
                A.value > 0 ? (o(), u("div", hl, [
                  e("button", {
                    onClick: K,
                    class: "di-btn-green"
                  }, [
                    I(d(et), { style: { width: "16px", height: "16px" } }),
                    l[29] || (l[29] = O(" Git管理用に保存 ", -1))
                  ]),
                  e("button", {
                    onClick: H,
                    class: "di-btn-blue"
                  }, [
                    I(d(Qe), { style: { width: "16px", height: "16px" } }),
                    l[30] || (l[30] = O(" 画面仕様書 (xlsx) 出力 ", -1))
                  ])
                ])) : p("", !0),
                A.value > 0 ? (o(), u("p", kl, [...l[31] || (l[31] = [
                  O(" JSON: ", -1),
                  e("code", null, "dev-annotations.json", -1),
                  O(" に配置してcommit ", -1)
                ])])) : p("", !0),
                e("div", gl, [
                  e("button", {
                    onClick: l[5] || (l[5] = (a) => c.value = !0),
                    class: "di-btn-small"
                  }, [
                    I(d(we), { style: { width: "14px", height: "14px" } }),
                    l[32] || (l[32] = O(" エクスポート ", -1))
                  ]),
                  e("button", {
                    onClick: l[6] || (l[6] = (a) => g.value = !0),
                    class: "di-btn-small"
                  }, [
                    I(d(rt), { style: { width: "14px", height: "14px" } }),
                    l[33] || (l[33] = O(" インポート ", -1))
                  ]),
                  A.value > 0 ? (o(), u("button", {
                    key: 0,
                    onClick: r,
                    class: "di-btn-small di-btn-danger"
                  }, [
                    I(d(Oe), { style: { width: "14px", height: "14px" } }),
                    l[34] || (l[34] = O(" 全削除 ", -1))
                  ])) : p("", !0)
                ])
              ])
            ]),
            l[35] || (l[35] = e("div", { class: "di-footer" }, [
              e("kbd", null, "Ctrl"),
              e("span", null, "+"),
              e("kbd", null, "Shift"),
              e("span", null, "+"),
              e("kbd", null, "D"),
              e("span", { class: "di-footer-text" }, "で開発者モード切替")
            ], -1))
          ])) : p("", !0)
        ])),
        (o(), le(ue, { to: "body" }, [
          d(s).isEnabled ? (o(), u("div", xl, [...l[36] || (l[36] = [
            e("span", { class: "di-indicator-dot" }, null, -1),
            O(" Developer Mode ", -1)
          ])])) : p("", !0)
        ])),
        (o(), le(ue, { to: "body" }, [
          c.value ? (o(), u("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: l[8] || (l[8] = $e((a) => c.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", wl, [
              l[38] || (l[38] = e("h3", { class: "di-modal-title" }, "設定をエクスポート", -1)),
              e("textarea", {
                readonly: "",
                value: d(s).exportConfigs(),
                class: "di-modal-textarea"
              }, null, 8, $l),
              e("div", Cl, [
                e("button", {
                  onClick: l[7] || (l[7] = (a) => c.value = !1),
                  class: "di-btn-small"
                }, "閉じる"),
                e("button", {
                  onClick: N,
                  class: "di-btn-small di-btn-gray"
                }, [
                  I(d(we), { style: { width: "14px", height: "14px" } }),
                  l[37] || (l[37] = O(" ファイル保存 ", -1))
                ]),
                e("button", {
                  onClick: x,
                  class: "di-btn-small di-btn-primary"
                }, "コピー")
              ])
            ])
          ])) : p("", !0)
        ])),
        (o(), le(ue, { to: "body" }, [
          g.value ? (o(), u("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: l[11] || (l[11] = $e((a) => g.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", Il, [
              l[40] || (l[40] = e("h3", { class: "di-modal-title" }, "設定をインポート", -1)),
              e("label", _l, [
                e("input", {
                  type: "file",
                  accept: ".json",
                  onChange: j
                }, null, 32),
                l[39] || (l[39] = e("span", null, "JSONファイルをドラッグまたはクリック", -1))
              ]),
              D(e("textarea", {
                "onUpdate:modelValue": l[9] || (l[9] = (a) => _.value = a),
                placeholder: "またはJSONを直接貼り付け...",
                class: "di-modal-textarea di-modal-textarea-input"
              }, null, 512), [
                [U, _.value]
              ]),
              T.value ? (o(), u("p", Ml, m(T.value), 1)) : p("", !0),
              e("div", El, [
                e("button", {
                  onClick: l[10] || (l[10] = (a) => {
                    g.value = !1, _.value = "", T.value = "";
                  }),
                  class: "di-btn-small"
                }, " キャンセル "),
                e("button", {
                  onClick: Y,
                  disabled: !_.value,
                  class: "di-btn-small di-btn-primary"
                }, " インポート ", 8, Dl)
              ])
            ])
          ])) : p("", !0)
        ]))
      ], 64);
    };
  }
}), De = (h, s) => {
  const c = h.__vccOpts || h;
  for (const [g, _] of s)
    c[g] = _;
  return c;
}, Al = /* @__PURE__ */ De(Pl, [["__scopeId", "data-v-ac058e93"]]), Tl = { class: "di-editor-modal" }, Ll = { class: "di-editor-header" }, Sl = { class: "di-header-actions" }, Ul = {
  key: 0,
  class: "di-static-indicator"
}, Vl = {
  key: 1,
  class: "di-binding-indicator"
}, Bl = {
  key: 0,
  class: "di-binding-source"
}, jl = { class: "di-editor-tabs" }, ql = { class: "di-editor-content" }, Rl = { class: "di-form-group" }, Ol = { class: "di-note-types" }, Hl = ["onClick"], Fl = { class: "di-form-group" }, zl = { class: "di-form-group" }, Nl = {
  key: 0,
  class: "di-binding-selector"
}, Gl = { class: "di-form-group" }, Xl = { class: "di-form-label" }, Kl = { class: "di-binding-search-wrapper" }, Yl = {
  key: 0,
  class: "di-binding-list"
}, Zl = ["onClick"], Jl = { class: "di-binding-item-main" }, Wl = { class: "di-binding-name" }, Ql = { class: "di-binding-type" }, es = {
  key: 0,
  class: "di-binding-component"
}, ts = {
  key: 1,
  class: "di-binding-empty"
}, ls = { class: "di-form-row" }, ss = { class: "di-form-group" }, is = { class: "di-form-group" }, os = { class: "di-form-group" }, ns = ["value"], as = { class: "di-form-group" }, ds = { class: "di-form-group" }, us = { class: "di-form-group" }, rs = ["value"], cs = {
  key: 0,
  class: "di-form-row"
}, vs = {
  class: "di-form-group",
  style: { flex: "0 0 100px" }
}, ps = ["value"], ys = {
  class: "di-form-group",
  style: { flex: "1" }
}, ms = {
  key: 1,
  class: "di-form-group"
}, bs = { class: "di-form-label" }, fs = ["placeholder"], hs = { class: "di-form-group" }, ks = { class: "di-form-group" }, gs = { class: "di-form-group" }, xs = { class: "di-form-row" }, ws = { class: "di-form-group" }, $s = { class: "di-form-group" }, Cs = { class: "di-form-group" }, Is = { class: "di-form-group" }, _s = { class: "di-form-group" }, Ms = { class: "di-form-group" }, Es = { class: "di-form-group" }, Ds = { class: "di-form-group" }, Ps = { class: "di-form-group" }, As = { class: "di-editor-footer" }, Ts = { class: "di-editor-actions" }, Ls = /* @__PURE__ */ Ce({
  __name: "DevElementEditor",
  setup(h) {
    const s = Ie(), c = f("note"), g = f(""), _ = f(""), T = f(""), F = f(""), M = f(""), A = f("navigate"), x = f(""), N = f("GET"), K = f(""), H = f(""), Y = f(""), j = f("info"), r = f(""), k = f(""), n = f(""), y = f(""), L = f(""), C = f(""), E = f(""), $ = f(""), B = f(""), w = f(""), z = f(""), S = f(""), b = f(""), l = f(!1), q = se(() => s.editingElementId !== null), a = se(() => s.editingElementId);
    qe(a, (R) => {
      var t, i, re, fe, he, Q;
      if (R) {
        const v = s.getElementConfig(R);
        let ke = !1;
        try {
          const de = document.querySelector(R);
          if (de) {
            const ce = de.querySelector("[data-di-binding]") || (de.hasAttribute("data-di-binding") ? de : null) || de.closest("[data-di-binding]");
            if (ce) {
              const _e = ce.getAttribute("data-di-binding"), ge = ce.getAttribute("data-di-db"), Pe = ce.getAttribute("data-di-component"), ze = ce.getAttribute("data-di-db-type"), Ne = ce.getAttribute("data-di-db-comment");
              if (_e && (b.value = _e, S.value = "api", l.value = !1, ke = !0), ge) {
                const [Ae, Te] = ge.split(".");
                Ae && Te && (g.value = Ae, _.value = Te, T.value = ze || "", M.value = Ne || "", ke = !0);
              }
              Pe && (E.value = Pe), ke && (H.value = `【データバインディング】${_e}${ge ? ` → ${ge}` : ""}`, j.value = "info", c.value = "field");
            }
          }
        } catch (de) {
          console.warn("[DevInspector] Failed to read data-di-* attributes:", de);
        }
        v != null && v.fieldInfo && (g.value = v.fieldInfo.table || g.value, _.value = v.fieldInfo.column || _.value, T.value = v.fieldInfo.type || "", F.value = ((t = v.fieldInfo.validation) == null ? void 0 : t.join(", ")) || "", M.value = v.fieldInfo.description || M.value), v != null && v.actionInfo && (A.value = v.actionInfo.type || "navigate", x.value = v.actionInfo.target || "", N.value = v.actionInfo.method || "GET", K.value = v.actionInfo.description || ""), v != null && v.note && (H.value = v.note.text || H.value, Y.value = v.note.author || "", j.value = v.note.type || "info"), v != null && v.links && (r.value = v.links.testPath || "", k.value = v.links.figmaUrl || "", n.value = v.links.githubIssue || "", y.value = v.links.githubPr || "", L.value = v.links.relatedDocs || ""), v != null && v.devMeta && (C.value = ((i = v.devMeta.usedStores) == null ? void 0 : i.join(", ")) || "", E.value = ((re = v.devMeta.usedComponents) == null ? void 0 : re.join(", ")) || E.value, $.value = ((fe = v.devMeta.i18nKeys) == null ? void 0 : fe.join(", ")) || "", B.value = ((he = v.devMeta.designTokens) == null ? void 0 : he.join(", ")) || "", w.value = v.devMeta.accessibility || "", z.value = v.devMeta.responsive || ""), v != null && v.sourceBinding && (S.value = v.sourceBinding.type || S.value, b.value = v.sourceBinding.source || b.value, l.value = v.sourceBinding.isStatic || !1), ke || ((Q = v == null ? void 0 : v.note) != null && Q.text ? c.value = "note" : v != null && v.fieldInfo ? c.value = "field" : v != null && v.actionInfo ? c.value = "action" : v != null && v.links ? c.value = "links" : v != null && v.devMeta ? c.value = "meta" : c.value = "note");
      } else
        Z();
    });
    function Z() {
      g.value = "", _.value = "", T.value = "", F.value = "", M.value = "", A.value = "navigate", x.value = "", N.value = "GET", K.value = "", H.value = "", Y.value = "", j.value = "info", r.value = "", k.value = "", n.value = "", y.value = "", L.value = "", C.value = "", E.value = "", $.value = "", B.value = "", w.value = "", z.value = "", S.value = "", b.value = "", l.value = !1, c.value = "note";
    }
    function ie() {
      s.stopEditing(), Z();
    }
    function ne() {
      var R;
      if (a.value)
        try {
          const t = document.querySelector(a.value);
          if (!t) return;
          const i = s.autoDetectElementInfo(t, a.value);
          i.sourceBinding && (S.value = i.sourceBinding.type || "", b.value = i.sourceBinding.source || "", l.value = i.sourceBinding.isStatic || !1, i.sourceBinding.isStatic && !H.value && (H.value = "固定文言", j.value = "info")), i.fieldInfo && (g.value = i.fieldInfo.table || "", _.value = i.fieldInfo.column || "", T.value = i.fieldInfo.type || "", M.value = i.fieldInfo.description || "", c.value = "field"), i.note && (H.value = i.note.text || "", j.value = i.note.type || "info"), (R = i.devMeta) != null && R.usedComponents && (E.value = i.devMeta.usedComponents.join(", "));
        } catch (t) {
          console.error("[DevInspector] Auto-detect failed:", t);
        }
    }
    function ve() {
      if (!a.value) return;
      const R = g.value && _.value ? {
        table: g.value,
        column: _.value,
        type: T.value || void 0,
        validation: F.value ? F.value.split(",").map((Q) => Q.trim()) : void 0,
        description: M.value || void 0
      } : void 0, t = x.value ? {
        type: A.value,
        target: x.value,
        method: A.value === "api" ? N.value : void 0,
        description: K.value || void 0
      } : void 0, i = H.value ? {
        text: H.value,
        author: Y.value || void 0,
        type: j.value
      } : void 0, re = r.value || k.value || n.value || y.value || L.value ? {
        testPath: r.value || void 0,
        figmaUrl: k.value || void 0,
        githubIssue: n.value || void 0,
        githubPr: y.value || void 0,
        relatedDocs: L.value || void 0
      } : void 0, fe = C.value || E.value || $.value || B.value || w.value || z.value ? {
        usedStores: C.value ? C.value.split(",").map((Q) => Q.trim()) : void 0,
        usedComponents: E.value ? E.value.split(",").map((Q) => Q.trim()) : void 0,
        i18nKeys: $.value ? $.value.split(",").map((Q) => Q.trim()) : void 0,
        designTokens: B.value ? B.value.split(",").map((Q) => Q.trim()) : void 0,
        accessibility: w.value || void 0,
        responsive: z.value || void 0
      } : void 0, he = S.value ? {
        type: S.value,
        source: b.value || void 0,
        isStatic: l.value
      } : void 0;
      s.setElementConfig(a.value, {
        fieldInfo: R,
        actionInfo: t,
        note: i,
        links: re,
        devMeta: fe,
        sourceBinding: he
      }), ie();
    }
    function pe() {
      a.value && (s.deleteElementConfig(a.value), ie());
    }
    const ye = [
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
    ], ee = f(""), oe = f(!1), ae = se(() => s.searchSchemaColumns(ee.value).slice(0, 30));
    function me(R) {
      g.value = R.table, _.value = R.column, T.value = R.type || "", M.value = R.comment || "", oe.value = !1, ee.value = "";
    }
    const te = se(() => {
      if (!a.value) return !1;
      try {
        const R = document.querySelector(a.value);
        if (!R) return !1;
        const t = R.querySelector("[data-di-binding]") || (R.hasAttribute("data-di-binding") ? R : null);
        return !!(t != null && t.getAttribute("data-di-db"));
      } catch {
        return !1;
      }
    }), J = se(() => s.getSchemaColumns().length > 0), be = [
      { value: "navigate", label: "画面遷移" },
      { value: "api", label: "API呼び出し" },
      { value: "modal", label: "モーダル表示" },
      { value: "emit", label: "イベント発火" },
      { value: "function", label: "関数実行" }
    ], He = ["GET", "POST", "PUT", "DELETE", "PATCH"], Fe = [
      { value: "info", label: "情報", icon: lt, color: "#60a5fa" },
      { value: "warning", label: "注意", icon: Ze, color: "#fbbf24" },
      { value: "todo", label: "TODO", icon: Je, color: "#10b981" },
      { value: "question", label: "質問", icon: tt, color: "#a78bfa" }
    ];
    return (R, t) => (o(), le(ue, { to: "body" }, [
      q.value ? (o(), u("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: $e(ie, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", Tl, [
          e("div", Ll, [
            t[31] || (t[31] = e("h3", null, "要素情報を編集", -1)),
            e("div", Sl, [
              e("button", {
                onClick: ne,
                class: "di-btn-auto",
                title: "自動検出"
              }, [
                I(d(ct), { style: { width: "16px", height: "16px" } })
              ]),
              e("button", {
                onClick: ie,
                class: "di-editor-close"
              }, [
                I(d(Ee), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          l.value ? (o(), u("div", Ul, [...t[32] || (t[32] = [
            e("span", { class: "di-static-badge" }, "固定文言", -1),
            e("span", { class: "di-static-hint" }, "このテキストはソースコードに直接記述されています", -1)
          ])])) : S.value ? (o(), u("div", Vl, [
            e("span", {
              class: X(["di-binding-badge", "di-binding-" + S.value])
            }, m(S.value), 3),
            b.value ? (o(), u("span", Bl, m(b.value), 1)) : p("", !0)
          ])) : p("", !0),
          e("div", jl, [
            e("button", {
              onClick: t[0] || (t[0] = (i) => c.value = "note"),
              class: X(["di-editor-tab", { active: c.value === "note" }]),
              style: G(c.value === "note" ? { color: "#10b981", borderColor: "#10b981", background: "rgba(16, 185, 129, 0.1)" } : {})
            }, [
              I(d(it), { style: { width: "12px", height: "12px" } }),
              t[33] || (t[33] = O(" メモ ", -1))
            ], 6),
            te.value || J.value || g.value ? (o(), u("button", {
              key: 0,
              onClick: t[1] || (t[1] = (i) => c.value = "field"),
              class: X(["di-editor-tab", { active: c.value === "field" }]),
              style: G(c.value === "field" ? { color: "#60a5fa", borderColor: "#60a5fa", background: "rgba(96, 165, 250, 0.1)" } : {})
            }, [
              I(d(Ue), { style: { width: "12px", height: "12px" } }),
              t[34] || (t[34] = O(" データ ", -1))
            ], 6)) : p("", !0),
            e("button", {
              onClick: t[2] || (t[2] = (i) => c.value = "action"),
              class: X(["di-editor-tab", { active: c.value === "action" }]),
              style: G(c.value === "action" ? { color: "#a78bfa", borderColor: "#a78bfa", background: "rgba(167, 139, 250, 0.1)" } : {})
            }, [
              I(d(vt), { style: { width: "12px", height: "12px" } }),
              t[35] || (t[35] = O(" アクション ", -1))
            ], 6),
            e("button", {
              onClick: t[3] || (t[3] = (i) => c.value = "links"),
              class: X(["di-editor-tab", { active: c.value === "links" }]),
              style: G(c.value === "links" ? { color: "#f59e0b", borderColor: "#f59e0b", background: "rgba(245, 158, 11, 0.1)" } : {})
            }, [
              I(d(st), { style: { width: "12px", height: "12px" } }),
              t[36] || (t[36] = O(" リンク ", -1))
            ], 6),
            e("button", {
              onClick: t[4] || (t[4] = (i) => c.value = "meta"),
              class: X(["di-editor-tab", { active: c.value === "meta" }]),
              style: G(c.value === "meta" ? { color: "#ec4899", borderColor: "#ec4899", background: "rgba(236, 72, 153, 0.1)" } : {})
            }, [
              I(d(ut), { style: { width: "12px", height: "12px" } }),
              t[37] || (t[37] = O(" 開発情報 ", -1))
            ], 6)
          ]),
          e("div", ql, [
            c.value === "note" ? (o(), u(V, { key: 0 }, [
              e("div", Rl, [
                t[38] || (t[38] = e("label", { class: "di-form-label" }, "タイプ", -1)),
                e("div", Ol, [
                  (o(), u(V, null, W(Fe, (i) => e("button", {
                    key: i.value,
                    onClick: (re) => j.value = i.value,
                    class: "di-note-type-btn",
                    style: G(j.value === i.value ? { color: i.color, borderColor: i.color, background: i.color + "15" } : {})
                  }, [
                    (o(), le(Ge(i.icon), {
                      style: G([{ width: "16px", height: "16px" }, { color: j.value === i.value ? i.color : "#64748b" }])
                    }, null, 8, ["style"])),
                    e("span", {
                      style: G({ color: j.value === i.value ? i.color : "#94a3b8" })
                    }, m(i.label), 5)
                  ], 12, Hl)), 64))
                ])
              ]),
              e("div", Fl, [
                t[39] || (t[39] = e("label", { class: "di-form-label" }, "メモ内容 *", -1)),
                D(e("textarea", {
                  "onUpdate:modelValue": t[5] || (t[5] = (i) => H.value = i),
                  rows: "4",
                  placeholder: "この要素についてのメモ、説明、注意事項など...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, H.value]
                ])
              ]),
              e("div", zl, [
                t[40] || (t[40] = e("label", { class: "di-form-label" }, "記入者（オプション）", -1)),
                D(e("input", {
                  "onUpdate:modelValue": t[6] || (t[6] = (i) => Y.value = i),
                  type: "text",
                  placeholder: "名前",
                  class: "di-input"
                }, null, 512), [
                  [U, Y.value]
                ])
              ])
            ], 64)) : p("", !0),
            c.value === "field" ? (o(), u(V, { key: 1 }, [
              J.value ? (o(), u("div", Nl, [
                e("div", Gl, [
                  e("label", Xl, [
                    I(d(Ue), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[41] || (t[41] = O(" schema.rb から選択 ", -1))
                  ]),
                  e("div", Kl, [
                    D(e("input", {
                      "onUpdate:modelValue": t[7] || (t[7] = (i) => ee.value = i),
                      onFocus: t[8] || (t[8] = (i) => oe.value = !0),
                      type: "text",
                      placeholder: "テーブル.カラムを検索... (例: users, email)",
                      class: "di-input di-binding-search"
                    }, null, 544), [
                      [U, ee.value]
                    ]),
                    ee.value ? (o(), u("button", {
                      key: 0,
                      onClick: t[9] || (t[9] = (i) => {
                        ee.value = "", oe.value = !1;
                      }),
                      class: "di-binding-clear"
                    }, [
                      I(d(Ee), { style: { width: "14px", height: "14px" } })
                    ])) : p("", !0)
                  ]),
                  oe.value && ae.value.length > 0 ? (o(), u("div", Yl, [
                    (o(!0), u(V, null, W(ae.value, (i) => (o(), u("button", {
                      key: i.fullName,
                      onClick: (re) => me(i),
                      class: "di-binding-item has-db"
                    }, [
                      e("div", Jl, [
                        e("span", Wl, m(i.fullName), 1),
                        e("span", Ql, m(i.type), 1)
                      ]),
                      i.comment ? (o(), u("span", es, m(i.comment), 1)) : p("", !0)
                    ], 8, Zl))), 128))
                  ])) : oe.value && ee.value && ae.value.length === 0 ? (o(), u("div", ts, " 該当するカラムが見つかりません ")) : p("", !0)
                ])
              ])) : p("", !0),
              t[48] || (t[48] = e("div", { class: "di-form-divider" }, [
                e("span", null, "または手動入力")
              ], -1)),
              e("div", ls, [
                e("div", ss, [
                  t[42] || (t[42] = e("label", { class: "di-form-label" }, "テーブル名 *", -1)),
                  D(e("input", {
                    "onUpdate:modelValue": t[10] || (t[10] = (i) => g.value = i),
                    type: "text",
                    placeholder: "users",
                    class: "di-input"
                  }, null, 512), [
                    [U, g.value]
                  ])
                ]),
                e("div", is, [
                  t[43] || (t[43] = e("label", { class: "di-form-label" }, "カラム名 *", -1)),
                  D(e("input", {
                    "onUpdate:modelValue": t[11] || (t[11] = (i) => _.value = i),
                    type: "text",
                    placeholder: "name",
                    class: "di-input"
                  }, null, 512), [
                    [U, _.value]
                  ])
                ])
              ]),
              e("div", os, [
                t[45] || (t[45] = e("label", { class: "di-form-label" }, "データ型", -1)),
                D(e("select", {
                  "onUpdate:modelValue": t[12] || (t[12] = (i) => T.value = i),
                  class: "di-select"
                }, [
                  t[44] || (t[44] = e("option", { value: "" }, "選択してください", -1)),
                  (o(), u(V, null, W(ye, (i) => e("option", {
                    key: i,
                    value: i
                  }, m(i), 9, ns)), 64))
                ], 512), [
                  [Me, T.value]
                ])
              ]),
              e("div", as, [
                t[46] || (t[46] = e("label", { class: "di-form-label" }, "バリデーション (カンマ区切り)", -1)),
                D(e("input", {
                  "onUpdate:modelValue": t[13] || (t[13] = (i) => F.value = i),
                  type: "text",
                  placeholder: "required, max:255",
                  class: "di-input"
                }, null, 512), [
                  [U, F.value]
                ])
              ]),
              e("div", ds, [
                t[47] || (t[47] = e("label", { class: "di-form-label" }, "説明", -1)),
                D(e("textarea", {
                  "onUpdate:modelValue": t[14] || (t[14] = (i) => M.value = i),
                  rows: "2",
                  placeholder: "このフィールドの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, M.value]
                ])
              ])
            ], 64)) : p("", !0),
            c.value === "action" ? (o(), u(V, { key: 2 }, [
              e("div", us, [
                t[49] || (t[49] = e("label", { class: "di-form-label" }, "アクションタイプ", -1)),
                D(e("select", {
                  "onUpdate:modelValue": t[15] || (t[15] = (i) => A.value = i),
                  class: "di-select"
                }, [
                  (o(), u(V, null, W(be, (i) => e("option", {
                    key: i.value,
                    value: i.value
                  }, m(i.label), 9, rs)), 64))
                ], 512), [
                  [Me, A.value]
                ])
              ]),
              A.value === "api" ? (o(), u("div", cs, [
                e("div", vs, [
                  t[50] || (t[50] = e("label", { class: "di-form-label" }, "メソッド", -1)),
                  D(e("select", {
                    "onUpdate:modelValue": t[16] || (t[16] = (i) => N.value = i),
                    class: "di-select"
                  }, [
                    (o(), u(V, null, W(He, (i) => e("option", {
                      key: i,
                      value: i
                    }, m(i), 9, ps)), 64))
                  ], 512), [
                    [Me, N.value]
                  ])
                ]),
                e("div", ys, [
                  t[51] || (t[51] = e("label", { class: "di-form-label" }, "エンドポイント", -1)),
                  D(e("input", {
                    "onUpdate:modelValue": t[17] || (t[17] = (i) => x.value = i),
                    type: "text",
                    placeholder: "/api/tasks",
                    class: "di-input"
                  }, null, 512), [
                    [U, x.value]
                  ])
                ])
              ])) : (o(), u("div", ms, [
                e("label", bs, m(A.value === "navigate" ? "遷移先パス" : A.value === "modal" ? "モーダル名" : A.value === "emit" ? "イベント名" : "関数名"), 1),
                D(e("input", {
                  "onUpdate:modelValue": t[18] || (t[18] = (i) => x.value = i),
                  type: "text",
                  placeholder: A.value === "navigate" ? "/tasks" : A.value === "modal" ? "ConfirmDialog" : A.value === "emit" ? "onSubmit" : "handleClick",
                  class: "di-input"
                }, null, 8, fs), [
                  [U, x.value]
                ])
              ])),
              e("div", hs, [
                t[52] || (t[52] = e("label", { class: "di-form-label" }, "説明", -1)),
                D(e("textarea", {
                  "onUpdate:modelValue": t[19] || (t[19] = (i) => K.value = i),
                  rows: "2",
                  placeholder: "このアクションの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, K.value]
                ])
              ])
            ], 64)) : p("", !0),
            c.value === "links" ? (o(), u(V, { key: 3 }, [
              e("div", ks, [
                t[53] || (t[53] = e("label", { class: "di-form-label" }, "テストファイルパス", -1)),
                D(e("input", {
                  "onUpdate:modelValue": t[20] || (t[20] = (i) => r.value = i),
                  type: "text",
                  placeholder: "src/__tests__/components/MyComponent.test.ts",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, r.value]
                ])
              ]),
              e("div", gs, [
                t[54] || (t[54] = e("label", { class: "di-form-label" }, "Figma URL", -1)),
                D(e("input", {
                  "onUpdate:modelValue": t[21] || (t[21] = (i) => k.value = i),
                  type: "text",
                  placeholder: "https://www.figma.com/design/...",
                  class: "di-input"
                }, null, 512), [
                  [U, k.value]
                ])
              ]),
              e("div", xs, [
                e("div", ws, [
                  t[55] || (t[55] = e("label", { class: "di-form-label" }, "GitHub Issue", -1)),
                  D(e("input", {
                    "onUpdate:modelValue": t[22] || (t[22] = (i) => n.value = i),
                    type: "text",
                    placeholder: "#123",
                    class: "di-input"
                  }, null, 512), [
                    [U, n.value]
                  ])
                ]),
                e("div", $s, [
                  t[56] || (t[56] = e("label", { class: "di-form-label" }, "GitHub PR", -1)),
                  D(e("input", {
                    "onUpdate:modelValue": t[23] || (t[23] = (i) => y.value = i),
                    type: "text",
                    placeholder: "#456",
                    class: "di-input"
                  }, null, 512), [
                    [U, y.value]
                  ])
                ])
              ]),
              e("div", Cs, [
                t[57] || (t[57] = e("label", { class: "di-form-label" }, "関連ドキュメント", -1)),
                D(e("input", {
                  "onUpdate:modelValue": t[24] || (t[24] = (i) => L.value = i),
                  type: "text",
                  placeholder: "https://docs.example.com/...",
                  class: "di-input"
                }, null, 512), [
                  [U, L.value]
                ])
              ])
            ], 64)) : p("", !0),
            c.value === "meta" ? (o(), u(V, { key: 4 }, [
              e("div", Is, [
                t[58] || (t[58] = e("label", { class: "di-form-label" }, "使用Piniaストア (カンマ区切り)", -1)),
                D(e("input", {
                  "onUpdate:modelValue": t[25] || (t[25] = (i) => C.value = i),
                  type: "text",
                  placeholder: "useUserStore, useThemeStore",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, C.value]
                ])
              ]),
              e("div", _s, [
                t[59] || (t[59] = e("label", { class: "di-form-label" }, "使用コンポーネント (カンマ区切り)", -1)),
                D(e("input", {
                  "onUpdate:modelValue": t[26] || (t[26] = (i) => E.value = i),
                  type: "text",
                  placeholder: "Button, Modal, Input",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, E.value]
                ])
              ]),
              e("div", Ms, [
                t[60] || (t[60] = e("label", { class: "di-form-label" }, "i18nキー (カンマ区切り)", -1)),
                D(e("input", {
                  "onUpdate:modelValue": t[27] || (t[27] = (i) => $.value = i),
                  type: "text",
                  placeholder: "common.save, errors.required",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, $.value]
                ])
              ]),
              e("div", Es, [
                t[61] || (t[61] = e("label", { class: "di-form-label" }, "デザイントークン (カンマ区切り)", -1)),
                D(e("input", {
                  "onUpdate:modelValue": t[28] || (t[28] = (i) => B.value = i),
                  type: "text",
                  placeholder: "primaryColor, secondaryColor",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, B.value]
                ])
              ]),
              e("div", Ds, [
                t[62] || (t[62] = e("label", { class: "di-form-label" }, "アクセシビリティ", -1)),
                D(e("textarea", {
                  "onUpdate:modelValue": t[29] || (t[29] = (i) => w.value = i),
                  rows: "2",
                  placeholder: "キーボード操作、スクリーンリーダー対応などのメモ...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, w.value]
                ])
              ]),
              e("div", Ps, [
                t[63] || (t[63] = e("label", { class: "di-form-label" }, "レスポンシブ動作", -1)),
                D(e("textarea", {
                  "onUpdate:modelValue": t[30] || (t[30] = (i) => z.value = i),
                  rows: "2",
                  placeholder: "モバイルでの表示変更、ブレークポイントなど...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, z.value]
                ])
              ])
            ], 64)) : p("", !0)
          ]),
          e("div", As, [
            e("button", {
              onClick: pe,
              class: "di-btn-delete"
            }, [
              I(d(Oe), { style: { width: "14px", height: "14px" } }),
              t[64] || (t[64] = O(" 削除 ", -1))
            ]),
            e("div", Ts, [
              e("button", {
                onClick: ie,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: ve,
                class: "di-btn-save"
              }, [
                I(d(at), { style: { width: "14px", height: "14px" } }),
                t[65] || (t[65] = O(" 保存 ", -1))
              ])
            ])
          ])
        ])
      ])) : p("", !0)
    ]));
  }
}), Ss = /* @__PURE__ */ De(Ls, [["__scopeId", "data-v-28a37438"]]), Us = {
  key: 0,
  "data-dev-inspector": "",
  class: "di-loading-overlay"
}, Vs = { class: "di-highlight-label" }, Bs = {
  key: 2,
  "data-dev-inspector": "",
  class: "di-pick-banner"
}, js = ["onClick"], qs = ["onClick"], Rs = {
  "data-dev-inspector": "",
  class: "di-scan-banner"
}, Os = ["onClick"], Hs = { class: "di-analysis-type" }, Fs = {
  key: 0,
  class: "di-analysis-tags"
}, zs = {
  key: 1,
  class: "di-analysis-db"
}, Ns = {
  key: 2,
  class: "di-analysis-api-source"
}, Gs = {
  key: 3,
  class: "di-analysis-conditional"
}, Xs = ["onClick"], Ks = {
  key: 0,
  class: "di-analysis-text"
}, Ys = {
  "data-dev-inspector": "",
  class: "di-analysis-banner"
}, Zs = /* @__PURE__ */ Ce({
  __name: "DevPickOverlay",
  setup(h) {
    const s = Ie(), c = f(null), g = f(null), _ = f(0), T = f(0);
    function F(r) {
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
      }[r] || r;
    }
    function M(r) {
      var n;
      const k = s.getElementConfig(r);
      if (!(k != null && k.sourceBinding)) {
        const y = ((n = k == null ? void 0 : k.note) == null ? void 0 : n.type) || "info";
        return {
          info: "#60a5fa",
          warning: "#fbbf24",
          todo: "#10b981",
          question: "#a78bfa"
        }[y] || "#60a5fa";
      }
      return k.sourceBinding.isStatic ? "#10b981" : k.sourceBinding.type === "v-model" ? "#8b5cf6" : k.sourceBinding.type === "api" ? "#f59e0b" : "#60a5fa";
    }
    const A = se(() => {
      var L, C, E, $, B;
      const r = _.value, k = T.value, n = [];
      if (!s.isEnabled) return n;
      const y = s.getConfiguredSelectors();
      for (const w of y)
        try {
          const z = document.querySelector(w);
          if (z) {
            const S = z.getBoundingClientRect(), b = s.getElementConfig(w), l = ((L = b == null ? void 0 : b.sourceBinding) == null ? void 0 : L.isStatic) || !1, q = ((C = b == null ? void 0 : b.sourceBinding) == null ? void 0 : C.type) || "";
            let a = "";
            (E = b == null ? void 0 : b.fieldInfo) != null && E.table && (($ = b == null ? void 0 : b.fieldInfo) != null && $.column) ? a = `DB: ${b.fieldInfo.table}.${b.fieldInfo.column}` : l ? a = "固定" : q === "v-model" ? a = "フォーム" : q === "api" ? a = "データ" : (B = b == null ? void 0 : b.note) != null && B.type ? a = {
              info: "情報",
              warning: "注意",
              todo: "TODO",
              question: "質問"
            }[b.note.type] || "メモ" : a = "メモ", n.push({
              selector: w,
              top: `${S.top + r}px`,
              left: `${S.left + k}px`,
              width: `${S.width}px`,
              height: `${S.height}px`,
              color: M(w),
              isStatic: l,
              label: a
            });
          }
        } catch {
        }
      return n;
    }), x = se(() => {
      var y;
      const r = _.value, k = T.value, n = [];
      if (!s.isEnabled || s.scanResults.length === 0) return n;
      for (const L of s.scanResults)
        try {
          const C = document.querySelector(L.selector);
          if (C) {
            const E = C.getBoundingClientRect();
            n.push({
              selector: L.selector,
              top: `${E.top + r}px`,
              left: `${E.left + k}px`,
              width: `${E.width}px`,
              height: `${E.height}px`,
              isStatic: ((y = L.detected.sourceBinding) == null ? void 0 : y.isStatic) || !1
            });
          }
        } catch {
        }
      return n;
    }), N = se(() => {
      var L, C;
      const r = _.value, k = T.value, n = [], y = s.analysisFilter;
      if (y === "none" || !s.isEnabled || s.analysisResults.length === 0) return n;
      for (const E of s.analysisResults) {
        if (!E.matched) continue;
        const $ = E.element;
        try {
          const B = document.querySelector(E.selector);
          if (!B) continue;
          const w = B.getBoundingClientRect();
          if (w.width > window.innerWidth * 0.8 || w.height > window.innerHeight * 0.5)
            continue;
          const z = B.querySelector("[data-di-binding]") || (B.hasAttribute("data-di-binding") ? B : null);
          let S = "", b = $.binding || "";
          const l = [...$.tags || []];
          if (z) {
            const J = z.getAttribute("data-di-db"), be = z.getAttribute("data-di-binding");
            J && (S = J, l.includes("db") || l.push("db")), be && (b = be);
          }
          !S && $.db && (S = `${$.db.table}.${$.db.column}`, l.includes("db") || l.push("db"));
          let q = "";
          $.api && (q = `${$.api.method} ${$.api.endpoint}`, l.includes("api") || l.push("api"));
          let a = "";
          if (b) {
            const J = s.getApiSourceForBinding(b);
            J && J.endpoint ? a = `${J.method || "GET"} ${J.endpoint}` : J && J.composable && (a = J.composable);
          }
          const Z = (L = $.conditional) == null ? void 0 : L.expression, ie = (C = $.modal) == null ? void 0 : C.target, ne = !!S || l.includes("db"), ve = !!q || l.includes("api"), pe = l.includes("form"), ye = l.includes("button"), ee = l.includes("link"), oe = l.includes("modal"), ae = l.includes("conditional"), me = l.includes("computed");
          if (y === "db-api") {
            if (!ne && !ve) continue;
          } else if (y === "form") {
            if (!pe) continue;
          } else if (y === "button") {
            if (!ye) continue;
          } else if (y === "link") {
            if (!ee) continue;
          } else if (y === "modal") {
            if (!oe) continue;
          } else if (y === "conditional") {
            if (!ae) continue;
          } else if (y === "computed") {
            if (!me) continue;
          } else if (y === "other" && (ne || ve || pe || ye || ee || oe || ae || me))
            continue;
          let te = "other";
          ne ? te = "db" : ve ? te = "api" : pe ? te = "form" : ye ? te = "button" : ee ? te = "link" : oe ? te = "modal" : ae ? te = "conditional" : me && (te = "computed"), n.push({
            selector: E.selector,
            top: `${w.top + r}px`,
            left: `${w.left + k}px`,
            width: `${w.width}px`,
            height: `${w.height}px`,
            tags: l,
            primaryTag: te,
            text: $.text || b || "",
            dbInfo: S,
            apiInfo: q,
            apiSource: a,
            conditionalExpr: Z,
            modalTarget: ie
          });
        } catch {
        }
      }
      return n;
    });
    function K(r) {
      if (!s.isPickMode) return;
      if (r.target.closest("[data-dev-inspector]")) {
        c.value = null, g.value = null, s.setHoveredSelector(null);
        return;
      }
      const n = document.elementFromPoint(r.clientX, r.clientY);
      if (!n || n === document.body || n === document.documentElement) {
        c.value = null, g.value = null, s.setHoveredSelector(null);
        return;
      }
      if (n.closest("[data-dev-inspector]"))
        return;
      g.value = n;
      const y = n.getBoundingClientRect();
      c.value = {
        top: `${y.top + window.scrollY}px`,
        left: `${y.left + window.scrollX}px`,
        width: `${y.width}px`,
        height: `${y.height}px`
      };
      const L = s.generateSelector(n);
      s.setHoveredSelector(L);
    }
    function H(r) {
      if (!(!s.isPickMode || r.target.closest("[data-dev-inspector]")) && (r.preventDefault(), r.stopPropagation(), g.value)) {
        const n = s.generateSelector(g.value);
        s.startEditing(n), s.togglePickMode();
      }
    }
    function Y(r) {
      r.key === "Escape" && s.isPickMode && s.togglePickMode();
    }
    function j() {
      _.value = window.scrollY, T.value = window.scrollX;
    }
    return Re(() => {
      window.addEventListener("mousemove", K, !0), window.addEventListener("click", H, !0), window.addEventListener("keydown", Y), window.addEventListener("scroll", j), window.addEventListener("resize", j);
    }), Xe(() => {
      window.removeEventListener("mousemove", K, !0), window.removeEventListener("click", H, !0), window.removeEventListener("keydown", Y), window.removeEventListener("scroll", j), window.removeEventListener("resize", j);
    }), qe(() => s.isPickMode, (r) => {
      r || (c.value = null, g.value = null);
    }), (r, k) => (o(), le(ue, { to: "body" }, [
      d(s).isInitializing ? (o(), u("div", Us, [...k[1] || (k[1] = [
        e("div", { class: "di-loading-content" }, [
          e("div", { class: "di-loading-spinner" }),
          e("span", { class: "di-loading-text" }, "Developer Mode 起動中...")
        ], -1)
      ])])) : p("", !0),
      d(s).isPickMode && c.value ? (o(), u("div", {
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
        e("div", Vs, m(d(s).hoveredSelector), 1)
      ], 4)) : p("", !0),
      d(s).isPickMode ? (o(), u("div", Bs, [...k[2] || (k[2] = [
        e("span", null, "要素をクリックしてメモを追加", -1),
        e("kbd", null, "ESC", -1),
        e("span", { class: "di-pick-hint" }, "でキャンセル", -1)
      ])])) : p("", !0),
      d(s).isEnabled && !d(s).isPickMode && !d(s).editingElementId ? (o(!0), u(V, { key: 3 }, W(A.value, (n) => (o(), u("div", {
        key: n.selector,
        "data-dev-inspector": "",
        class: "di-annotation-box",
        style: G({
          top: n.top,
          left: n.left,
          width: n.width,
          height: n.height,
          borderColor: n.color,
          backgroundColor: n.color + "15"
        }),
        onClick: (y) => d(s).startEditing(n.selector)
      }, [
        e("div", {
          class: "di-annotation-label",
          style: G({ backgroundColor: n.color })
        }, m(n.label), 5)
      ], 12, js))), 128)) : p("", !0),
      d(s).isEnabled && !d(s).editingElementId && x.value.length > 0 && d(s).analysisResults.length === 0 ? (o(), u(V, { key: 4 }, [
        (o(!0), u(V, null, W(x.value, (n) => (o(), u("div", {
          key: "scan-" + n.selector,
          "data-dev-inspector": "",
          class: X(["di-scan-highlight", { "di-scan-static": n.isStatic }]),
          style: G({
            top: n.top,
            left: n.left,
            width: n.width,
            height: n.height
          }),
          onClick: (y) => d(s).startEditing(n.selector)
        }, [
          e("div", {
            class: X(["di-scan-label", { "di-scan-label-static": n.isStatic }])
          }, m(n.isStatic ? "固定文言" : "動的データ"), 3)
        ], 14, qs))), 128)),
        e("div", Rs, [
          e("span", null, m(x.value.length) + "件の要素を検出", 1),
          e("button", {
            onClick: k[0] || (k[0] = (n) => d(s).clearScanResults()),
            class: "di-scan-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : p("", !0),
      d(s).isEnabled && !d(s).editingElementId && N.value.length > 0 ? (o(), u(V, { key: 5 }, [
        (o(!0), u(V, null, W(N.value, (n) => (o(), u("div", {
          key: "analysis-" + n.selector,
          "data-dev-inspector": "",
          class: X(["di-analysis-highlight", "di-analysis-" + n.primaryTag]),
          style: G({
            top: n.top,
            left: n.left,
            width: n.width,
            height: n.height
          }),
          onClick: (y) => d(s).startEditing(n.selector)
        }, [
          e("div", {
            class: X(["di-analysis-label", "di-analysis-label-" + n.primaryTag])
          }, [
            e("span", Hs, m(F(n.primaryTag)), 1),
            n.tags.length > 1 ? (o(), u("span", Fs, "+" + m(n.tags.length - 1), 1)) : p("", !0),
            n.dbInfo ? (o(), u("span", zs, m(n.dbInfo), 1)) : p("", !0),
            n.apiSource ? (o(), u("span", Ns, "← " + m(n.apiSource), 1)) : p("", !0),
            n.conditionalExpr ? (o(), u("span", Gs, m(n.conditionalExpr), 1)) : p("", !0),
            e("button", {
              class: "di-analysis-delete",
              onClick: $e((y) => d(s).removeAnalysisResult(n.selector), ["stop"]),
              title: "この要素を非表示"
            }, "×", 8, Xs)
          ], 2),
          n.text && n.text.length < 30 ? (o(), u("div", Ks, m(n.text), 1)) : p("", !0)
        ], 14, Os))), 128)),
        e("div", Ys, [
          e("span", null, "📊 分析データ: " + m(N.value.length) + "件の要素", 1)
        ])
      ], 64)) : p("", !0)
    ]));
  }
}), Js = /* @__PURE__ */ De(Zs, [["__scopeId", "data-v-0dfd193e"]]), Ws = {
  key: 0,
  "data-dev-inspector": ""
}, Qs = /* @__PURE__ */ Ce({
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
  setup(h) {
    const s = h, c = Ie();
    return Re(() => {
      c.init({
        storageKey: s.storageKey,
        enabledInProduction: s.enabledInProduction,
        initialAnnotations: s.initialAnnotations
      });
    }), (g, _) => d(c).isAvailable ? (o(), u("div", Ws, [
      I(Al),
      I(Ss),
      I(Js)
    ])) : p("", !0);
  }
}), li = {
  install(h, s = {}) {
    const { autoRegister: c = !0, ...g } = s;
    c && h.component("DevInspector", Qs), h.provide("devInspectorOptions", g);
  }
};
export {
  Ss as DevElementEditor,
  Qs as DevInspector,
  Al as DevPanel,
  Js as DevPickOverlay,
  li as VueDevInspector,
  li as default,
  oi as useDevInspector,
  Ie as useDevInspectorStore,
  ai as vitePluginDevInspector
};
