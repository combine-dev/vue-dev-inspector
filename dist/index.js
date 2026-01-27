import { h as Ae, defineComponent as ke, inject as Xe, ref as p, computed as ne, openBlock as o, createElementBlock as u, Fragment as V, createBlock as X, Teleport as oe, unref as i, createVNode as _, createCommentVNode as y, createElementVNode as e, normalizeClass as te, toDisplayString as f, renderList as le, withDirectives as D, vModelText as U, normalizeStyle as Z, createTextVNode as O, withModifiers as he, watch as Be, resolveDynamicComponent as Ke, vModelSelect as Ce, onMounted as Re, onUnmounted as Ye } from "vue";
import { u as ge } from "./useDevInspector-DLlKVTZa.js";
import { a as Qs } from "./useDevInspector-DLlKVTZa.js";
import { default as tn } from "./vite.js";
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
const Ze = (h) => h.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), S = (h, l) => ({ size: c, strokeWidth: k = 2, absoluteStrokeWidth: E, color: A, class: R, ...j }, { attrs: C, slots: b }) => Ae(
  "svg",
  {
    ...be,
    width: c || be.width,
    height: c || be.height,
    stroke: A || be.stroke,
    "stroke-width": E ? Number(k) * 24 / Number(c) : k,
    ...C,
    class: ["lucide", `lucide-${Ze(h)}`],
    ...j
  },
  [
    ...l.map((J) => Ae(...J)),
    ...b.default ? [b.default()] : []
  ]
);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Je = S("AlertCircleIcon", [
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
const We = S("AlertTriangleIcon", [
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
const Qe = S("CheckSquareIcon", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Te = S("CodeIcon", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ue = S("DatabaseIcon", [
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
const me = S("DownloadIcon", [
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
const et = S("ExternalLinkIcon", [
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
const tt = S("FileSpreadsheetIcon", [
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
const Le = S("FileTextIcon", [
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
const lt = S("GitBranchIcon", [
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
const st = S("GlobeIcon", [
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
const nt = S("HelpCircleIcon", [
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
const it = S("InfoIcon", [
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
const at = S("LinkIcon", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fe = S("Loader2Icon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ot = S("MessageSquareIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dt = S("MousePointer2Icon", [
  ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ut = S("PenLineIcon", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rt = S("SaveIcon", [
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
const Ie = S("ScanIcon", [
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
const Ve = S("ServerIcon", [
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
const ct = S("Settings2Icon", [
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
const je = S("Trash2Icon", [
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
const vt = S("UploadIcon", [
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
const pt = S("Wand2Icon", [
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
const _e = S("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yt = S("ZapIcon", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
]);
async function bt(h, l, c = {}) {
  var g;
  const k = await import("./xlsx-BopDBbWb.js"), { systemName: E = "System", author: A = "" } = c, R = /* @__PURE__ */ new Date(), j = `${R.getFullYear()}/${R.getMonth() + 1}/${R.getDate()}`, C = k.utils.book_new(), b = [];
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
  ]), b.push([]), b.push(["機能概要"]), b.push([(h == null ? void 0 : h.description) || ""]), b.push([]), b.push(["画面レイアウト　figmaURL"]), b.push([(h == null ? void 0 : h.figmaUrl) || ""]), b.push([]), h != null && h.apis && h.apis.length > 0 && (b.push(["API一覧"]), b.push(["", "メソッド", "", "エンドポイント", "", "", "", "", "", "", "", "説明"]), h.apis.forEach((d) => {
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
  ]), Object.values(l).forEach((d, a) => {
    var T, L, P;
    const w = d.id;
    let I = "", M = "", $ = "";
    if ((T = d.note) != null && T.text && (I = d.note.text), d.fieldInfo && (I += I ? `
` : "", I += `DB: ${d.fieldInfo.table}.${d.fieldInfo.column}`, d.fieldInfo.type && (I += ` (${d.fieldInfo.type})`), d.fieldInfo.description && (I += `
${d.fieldInfo.description}`)), d.actionInfo && ($ = `[${{
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行"
    }[d.actionInfo.type] || d.actionInfo.type}]`, d.actionInfo.target && ($ += ` ${d.actionInfo.method || ""} ${d.actionInfo.target}`), d.actionInfo.description && ($ += `
${d.actionInfo.description}`)), d.links) {
      const x = [];
      d.links.testPath && x.push(`テスト: ${d.links.testPath}`), d.links.figmaUrl && x.push(`Figma: ${d.links.figmaUrl}`), d.links.githubIssue && x.push(`Issue: ${d.links.githubIssue}`), d.links.githubPr && x.push(`PR: ${d.links.githubPr}`), x.length > 0 && ($ += $ ? `

` : "", $ += x.join(`
`));
    }
    if (d.devMeta) {
      const x = [];
      (L = d.devMeta.usedStores) != null && L.length && x.push(`Store: ${d.devMeta.usedStores.join(", ")}`), (P = d.devMeta.usedComponents) != null && P.length && x.push(`Components: ${d.devMeta.usedComponents.join(", ")}`), d.devMeta.accessibility && x.push(`A11y: ${d.devMeta.accessibility}`), d.devMeta.responsive && x.push(`Responsive: ${d.devMeta.responsive}`), x.length > 0 && ($ += $ ? `

` : "", $ += `[開発情報]
` + x.join(`
`));
    }
    b.push([
      "",
      a + 1,
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
      I,
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
      $
    ]);
  });
  const W = k.utils.aoa_to_sheet(b);
  W["!cols"] = [
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
  ], k.utils.book_append_sheet(C, W, "画面設計書");
  const G = `画面仕様書_${((g = h == null ? void 0 : h.name) == null ? void 0 : g.replace(/[/\\?%*:|"<>]/g, "-")) || "screen"}_${j.replace(/\//g, "")}.xlsx`;
  return k.writeFile(C, G), G;
}
const mt = {
  key: 0,
  class: "di-panel",
  "data-dev-inspector": ""
}, ft = { class: "di-header" }, ht = { class: "di-header-title" }, kt = { class: "di-edit-section" }, gt = { class: "di-scan-section" }, xt = ["disabled"], wt = ["disabled"], $t = { class: "di-scan-section" }, Ct = ["disabled", "title"], It = {
  key: 0,
  class: "di-scan-results"
}, _t = {
  key: 0,
  class: "di-scan-result-item"
}, Mt = { class: "di-scan-result-count" }, Et = { class: "di-scan-result-count" }, Pt = { class: "di-analysis-section" }, St = { class: "di-analysis-header" }, Dt = { class: "di-analysis-input" }, At = { class: "di-analysis-buttons" }, Tt = ["disabled"], Ut = ["disabled"], Lt = {
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
}, Ht = ["disabled"], zt = { key: 1 }, Ft = { key: 2 }, Nt = { class: "di-content" }, Gt = { class: "di-section" }, Xt = { class: "di-screen-name" }, Kt = { class: "di-screen-desc" }, Yt = { class: "di-card" }, Zt = { class: "di-card-label" }, Jt = { class: "di-code-blue" }, Wt = {
  key: 0,
  class: "di-card"
}, Qt = { class: "di-card-label" }, el = ["href"], tl = {
  key: 1,
  class: "di-card"
}, ll = { class: "di-card-label" }, sl = { class: "di-api-list" }, nl = { class: "di-api-info" }, il = { class: "di-api-endpoint" }, al = { class: "di-api-desc" }, ol = {
  key: 2,
  class: "di-card"
}, dl = { class: "di-card-label" }, ul = { class: "di-notes-list" }, rl = {
  key: 1,
  class: "di-no-spec"
}, cl = { class: "di-card" }, vl = { class: "di-card-header" }, pl = { class: "di-card-label" }, yl = { class: "di-count-badge" }, bl = {
  key: 0,
  class: "di-export-buttons"
}, ml = {
  key: 1,
  class: "di-export-hint"
}, fl = { class: "di-action-buttons" }, hl = {
  key: 0,
  class: "di-indicator",
  "data-dev-inspector": ""
}, kl = { class: "di-modal" }, gl = ["value"], xl = { class: "di-modal-actions" }, wl = { class: "di-modal" }, $l = { class: "di-file-drop" }, Cl = {
  key: 0,
  class: "di-error"
}, Il = { class: "di-modal-actions" }, _l = ["disabled"], Ml = /* @__PURE__ */ ke({
  __name: "DevPanel",
  setup(h) {
    const l = ge(), c = Xe("router", null), k = p(!1), E = p(!1), A = p(""), R = p(""), j = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, C = ne(() => l.currentScreenSpec), b = ne(() => Object.keys(l.elementConfigs).length);
    function J() {
      const B = l.exportConfigs();
      navigator.clipboard.writeText(B), k.value = !1;
    }
    function W() {
      const B = l.exportConfigs(), n = new Blob([B], { type: "application/json" }), Q = URL.createObjectURL(n), v = document.createElement("a");
      v.href = Q, v.download = "dev-mode-configs.json", v.click(), URL.revokeObjectURL(Q), k.value = !1;
    }
    function H() {
      l.downloadAnnotations();
    }
    async function G() {
      try {
        await bt(
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
      var ie;
      const Q = (ie = B.target.files) == null ? void 0 : ie[0];
      if (!Q) return;
      const v = new FileReader();
      v.onload = (xe) => {
        var se;
        A.value = (se = xe.target) == null ? void 0 : se.result;
      }, v.readAsText(Q);
    }
    function a() {
      confirm("すべての要素設定を削除しますか？") && l.clearAllConfigs();
    }
    const w = p(0), I = p(!1), M = p([]);
    async function $(B = !1) {
      I.value = !0, w.value = await l.scanCurrentPage({ rescan: B });
    }
    async function T() {
      if (!c) {
        alert("Vue Routerが見つかりません。全ページスキャンにはVue Routerが必要です。");
        return;
      }
      confirm("全ページをスキャンします。ページ遷移が発生しますがよろしいですか？") && (I.value = !0, M.value = await l.scanAllPages(c));
    }
    const L = p("/dev-inspector-analysis.json"), P = p(!1), x = p(""), z = p(0), m = p(!1), F = [
      { value: "all", label: "すべて" },
      { value: "db-api", label: "DB/API" },
      { value: "static", label: "固定文言" },
      { value: "data", label: "動的データ" },
      { value: "other", label: "その他" },
      { value: "none", label: "非表示" }
    ];
    async function K() {
      P.value = !0, x.value = "";
      try {
        if (await l.loadAnalysisData(L.value), l.analysisData) {
          const B = Object.values(l.analysisData.components).reduce((n, Q) => n + Q.elements.length, 0);
          alert(`分析データを読み込みました（${Object.keys(l.analysisData.components).length}コンポーネント、${B}要素）`);
        } else
          x.value = "分析データの読み込みに失敗しました";
      } catch (B) {
        x.value = `読み込みエラー: ${B}`;
      } finally {
        P.value = !1;
      }
    }
    async function Y() {
      if (!l.analysisData) {
        alert("先に分析データを読み込んでください");
        return;
      }
      z.value = await l.applyAnalysisToPage();
    }
    async function N() {
      m.value = !0;
      try {
        l.clearHiddenSelectors(), l.analysisData && await l.applyAnalysisToPage();
      } finally {
        m.value = !1;
      }
    }
    return (B, n) => {
      var Q;
      return o(), u(V, null, [
        (o(), X(oe, { to: "body" }, [
          i(l).isEnabled && !i(l).isPanelOpen ? (o(), u("button", {
            key: 0,
            onClick: n[0] || (n[0] = //@ts-ignore
            (...v) => i(l).openPanel && i(l).openPanel(...v)),
            class: "di-fab",
            title: "画面仕様を表示",
            "data-dev-inspector": ""
          }, [
            _(i(Le), { style: { width: "20px", height: "20px" } })
          ])) : y("", !0)
        ])),
        (o(), X(oe, { to: "body" }, [
          i(l).isEnabled && i(l).isPanelOpen ? (o(), u("div", mt, [
            e("div", ft, [
              e("div", ht, [
                _(i(Te), { style: { width: "20px", height: "20px", color: "#60a5fa" } }),
                n[15] || (n[15] = e("span", null, "Developer Mode", -1))
              ]),
              e("button", {
                onClick: n[1] || (n[1] = //@ts-ignore
                (...v) => i(l).closePanel && i(l).closePanel(...v)),
                class: "di-close-btn"
              }, [
                _(i(_e), { style: { width: "20px", height: "20px" } })
              ])
            ]),
            e("div", kt, [
              e("button", {
                onClick: n[2] || (n[2] = //@ts-ignore
                (...v) => i(l).togglePickMode && i(l).togglePickMode(...v)),
                class: te(["di-pick-btn", { active: i(l).isPickMode }])
              }, [
                _(i(dt), { style: { width: "16px", height: "16px" } }),
                e("span", null, f(i(l).isPickMode ? "要素選択中..." : "任意の要素にメモを追加"), 1)
              ], 2),
              e("div", gt, [
                e("button", {
                  onClick: n[3] || (n[3] = (v) => $(!1)),
                  class: "di-scan-btn",
                  disabled: i(l).isScanning,
                  title: "新規要素のみスキャン"
                }, [
                  i(l).isScanning && !i(l).currentScanPage ? (o(), X(i(fe), {
                    key: 0,
                    class: "di-spin",
                    style: { width: "16px", height: "16px" }
                  })) : (o(), X(i(Ie), {
                    key: 1,
                    style: { width: "16px", height: "16px" }
                  })),
                  e("span", null, f(i(l).isScanning && !i(l).currentScanPage ? `${i(l).scanProgress}%` : "スキャン"), 1)
                ], 8, xt),
                e("button", {
                  onClick: n[4] || (n[4] = (v) => $(!0)),
                  class: "di-scan-btn di-scan-btn-rescan",
                  disabled: i(l).isScanning,
                  title: "既存の設定をクリアして再スキャン"
                }, [
                  _(i(Ie), { style: { width: "16px", height: "16px" } }),
                  n[16] || (n[16] = e("span", null, "再スキャン", -1))
                ], 8, wt)
              ]),
              e("div", $t, [
                e("button", {
                  onClick: T,
                  class: "di-scan-btn di-scan-btn-all",
                  disabled: i(l).isScanning,
                  title: i(c) ? "全ページをスキャン" : "Vue Routerが必要です"
                }, [
                  i(l).isScanning && i(l).currentScanPage ? (o(), X(i(fe), {
                    key: 0,
                    class: "di-spin",
                    style: { width: "16px", height: "16px" }
                  })) : (o(), X(i(st), {
                    key: 1,
                    style: { width: "16px", height: "16px" }
                  })),
                  e("span", null, f(i(l).currentScanPage ? `${i(l).currentScanPage}` : "全ページスキャン"), 1)
                ], 8, Ct)
              ]),
              I.value && (w.value > 0 || M.value.length > 0) ? (o(), u("div", It, [
                w.value > 0 ? (o(), u("div", _t, [
                  e("span", Mt, f(w.value), 1),
                  n[17] || (n[17] = e("span", null, "件の要素を検出・登録しました", -1))
                ])) : y("", !0),
                (o(!0), u(V, null, le(M.value, (v) => (o(), u("div", {
                  key: v.page,
                  class: "di-scan-result-item"
                }, [
                  e("code", null, f(v.page), 1),
                  e("span", Et, f(v.count), 1)
                ]))), 128)),
                e("button", {
                  onClick: n[5] || (n[5] = (v) => {
                    I.value = !1, M.value = [];
                  }),
                  class: "di-scan-close"
                }, " 閉じる ")
              ])) : y("", !0),
              e("div", Pt, [
                e("div", St, [
                  _(i(Ve), { style: { width: "16px", height: "16px", color: "#3b82f6" } }),
                  n[18] || (n[18] = e("span", null, "CLIソース解析", -1))
                ]),
                e("div", Dt, [
                  D(e("input", {
                    "onUpdate:modelValue": n[6] || (n[6] = (v) => L.value = v),
                    type: "text",
                    class: "di-analysis-url",
                    placeholder: "/dev-inspector-analysis.json"
                  }, null, 512), [
                    [U, L.value]
                  ])
                ]),
                e("div", At, [
                  e("button", {
                    onClick: K,
                    class: "di-analysis-btn",
                    disabled: P.value
                  }, [
                    P.value ? (o(), X(i(fe), {
                      key: 0,
                      class: "di-spin",
                      style: { width: "14px", height: "14px" }
                    })) : (o(), X(i(me), {
                      key: 1,
                      style: { width: "14px", height: "14px" }
                    })),
                    n[19] || (n[19] = e("span", null, "読み込み", -1))
                  ], 8, Tt),
                  e("button", {
                    onClick: Y,
                    class: "di-analysis-btn di-analysis-btn-apply",
                    disabled: !i(l).analysisData
                  }, [
                    _(i(Ie), { style: { width: "14px", height: "14px" } }),
                    n[20] || (n[20] = e("span", null, "ページに適用", -1))
                  ], 8, Ut)
                ]),
                x.value ? (o(), u("div", Lt, f(x.value), 1)) : y("", !0),
                i(l).analysisResults.length > 0 ? (o(), u("div", Vt, [
                  e("span", Bt, f(i(l).analysisResults.filter((v) => v.matched).length), 1),
                  e("span", null, "/ " + f(i(l).analysisResults.length) + " 要素がマッチ", 1)
                ])) : y("", !0),
                i(l).analysisResults.length > 0 ? (o(), u("div", Rt, [
                  n[22] || (n[22] = e("span", { class: "di-filter-label" }, "表示フィルター:", -1)),
                  e("div", jt, [
                    (o(), u(V, null, le(F, (v) => e("button", {
                      key: v.value,
                      onClick: (ie) => i(l).analysisFilter = v.value,
                      class: te(["di-filter-btn", { active: i(l).analysisFilter === v.value }])
                    }, f(v.label), 11, qt)), 64))
                  ]),
                  i(l).hiddenAnalysisSelectors.size > 0 ? (o(), u("div", Ot, [
                    e("button", {
                      onClick: N,
                      class: "di-restore-btn",
                      disabled: m.value
                    }, [
                      m.value ? (o(), X(i(fe), {
                        key: 0,
                        class: "di-spin",
                        style: { width: "12px", height: "12px" }
                      })) : y("", !0),
                      m.value ? (o(), u("span", zt, "リセット中...")) : (o(), u("span", Ft, "非表示 (" + f(i(l).hiddenAnalysisSelectors.size) + ") をリセット", 1))
                    ], 8, Ht),
                    e("button", {
                      onClick: n[7] || (n[7] = (v) => i(l).downloadChanges()),
                      class: "di-export-changes-btn",
                      title: "削除した要素をエクスポート (CLI merge用)"
                    }, [
                      _(i(me), { style: { width: "12px", height: "12px" } }),
                      n[21] || (n[21] = e("span", null, "変更をエクスポート", -1))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0)
              ])
            ]),
            e("div", Nt, [
              C.value ? (o(), u(V, { key: 0 }, [
                e("div", Gt, [
                  e("h2", Xt, f(C.value.name), 1),
                  e("p", Kt, f(C.value.description), 1)
                ]),
                e("div", Yt, [
                  e("div", Zt, [
                    _(i(Te), { style: { width: "16px", height: "16px" } }),
                    n[23] || (n[23] = e("span", null, "Component Path", -1))
                  ]),
                  e("code", Jt, f(C.value.componentPath), 1)
                ]),
                C.value.figmaUrl ? (o(), u("div", Wt, [
                  e("div", Qt, [
                    _(i(et), { style: { width: "16px", height: "16px" } }),
                    n[24] || (n[24] = e("span", null, "Figma Design", -1))
                  ]),
                  e("a", {
                    href: C.value.figmaUrl,
                    target: "_blank",
                    class: "di-link-purple"
                  }, f(C.value.figmaUrl), 9, el)
                ])) : y("", !0),
                C.value.apis.length ? (o(), u("div", tl, [
                  e("div", ll, [
                    _(i(Ve), { style: { width: "16px", height: "16px" } }),
                    n[25] || (n[25] = e("span", null, "API Endpoints", -1))
                  ]),
                  e("div", sl, [
                    (o(!0), u(V, null, le(C.value.apis, (v, ie) => (o(), u("div", {
                      key: ie,
                      class: "di-api-item"
                    }, [
                      e("span", {
                        class: "di-method-badge",
                        style: Z({ backgroundColor: j[v.method] + "20", color: j[v.method] })
                      }, f(v.method), 5),
                      e("div", nl, [
                        e("code", il, f(v.endpoint), 1),
                        e("p", al, f(v.description), 1)
                      ])
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (Q = C.value.notes) != null && Q.length ? (o(), u("div", ol, [
                  e("div", dl, [
                    _(i(Je), { style: { width: "16px", height: "16px" } }),
                    n[26] || (n[26] = e("span", null, "Notes", -1))
                  ]),
                  e("ul", ul, [
                    (o(!0), u(V, null, le(C.value.notes, (v, ie) => (o(), u("li", {
                      key: ie,
                      class: "di-note-item"
                    }, [
                      n[27] || (n[27] = e("span", { class: "di-bullet" }, "•", -1)),
                      e("span", null, f(v), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0)
              ], 64)) : (o(), u("div", rl, [
                _(i(Le), { style: { width: "48px", height: "48px", color: "#334155" } }),
                n[28] || (n[28] = e("p", null, [
                  O("この画面の仕様情報は"),
                  e("br"),
                  O("まだ登録されていません")
                ], -1))
              ])),
              e("div", cl, [
                e("div", vl, [
                  e("div", pl, [
                    _(i(ut), { style: { width: "16px", height: "16px" } }),
                    n[29] || (n[29] = e("span", null, "登録済み要素", -1)),
                    e("span", yl, f(b.value), 1)
                  ])
                ]),
                b.value > 0 ? (o(), u("div", bl, [
                  e("button", {
                    onClick: H,
                    class: "di-btn-green"
                  }, [
                    _(i(lt), { style: { width: "16px", height: "16px" } }),
                    n[30] || (n[30] = O(" Git管理用に保存 ", -1))
                  ]),
                  e("button", {
                    onClick: G,
                    class: "di-btn-blue"
                  }, [
                    _(i(tt), { style: { width: "16px", height: "16px" } }),
                    n[31] || (n[31] = O(" 画面仕様書 (xlsx) 出力 ", -1))
                  ])
                ])) : y("", !0),
                b.value > 0 ? (o(), u("p", ml, [...n[32] || (n[32] = [
                  O(" JSON: ", -1),
                  e("code", null, "dev-annotations.json", -1),
                  O(" に配置してcommit ", -1)
                ])])) : y("", !0),
                e("div", fl, [
                  e("button", {
                    onClick: n[8] || (n[8] = (v) => k.value = !0),
                    class: "di-btn-small"
                  }, [
                    _(i(me), { style: { width: "14px", height: "14px" } }),
                    n[33] || (n[33] = O(" エクスポート ", -1))
                  ]),
                  e("button", {
                    onClick: n[9] || (n[9] = (v) => E.value = !0),
                    class: "di-btn-small"
                  }, [
                    _(i(vt), { style: { width: "14px", height: "14px" } }),
                    n[34] || (n[34] = O(" インポート ", -1))
                  ]),
                  b.value > 0 ? (o(), u("button", {
                    key: 0,
                    onClick: a,
                    class: "di-btn-small di-btn-danger"
                  }, [
                    _(i(je), { style: { width: "14px", height: "14px" } }),
                    n[35] || (n[35] = O(" 全削除 ", -1))
                  ])) : y("", !0)
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
          ])) : y("", !0)
        ])),
        (o(), X(oe, { to: "body" }, [
          i(l).isEnabled ? (o(), u("div", hl, [...n[37] || (n[37] = [
            e("span", { class: "di-indicator-dot" }, null, -1),
            O(" Developer Mode ", -1)
          ])])) : y("", !0)
        ])),
        (o(), X(oe, { to: "body" }, [
          k.value ? (o(), u("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: n[11] || (n[11] = he((v) => k.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", kl, [
              n[39] || (n[39] = e("h3", { class: "di-modal-title" }, "設定をエクスポート", -1)),
              e("textarea", {
                readonly: "",
                value: i(l).exportConfigs(),
                class: "di-modal-textarea"
              }, null, 8, gl),
              e("div", xl, [
                e("button", {
                  onClick: n[10] || (n[10] = (v) => k.value = !1),
                  class: "di-btn-small"
                }, "閉じる"),
                e("button", {
                  onClick: W,
                  class: "di-btn-small di-btn-gray"
                }, [
                  _(i(me), { style: { width: "14px", height: "14px" } }),
                  n[38] || (n[38] = O(" ファイル保存 ", -1))
                ]),
                e("button", {
                  onClick: J,
                  class: "di-btn-small di-btn-primary"
                }, "コピー")
              ])
            ])
          ])) : y("", !0)
        ])),
        (o(), X(oe, { to: "body" }, [
          E.value ? (o(), u("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: n[14] || (n[14] = he((v) => E.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", wl, [
              n[41] || (n[41] = e("h3", { class: "di-modal-title" }, "設定をインポート", -1)),
              e("label", $l, [
                e("input", {
                  type: "file",
                  accept: ".json",
                  onChange: d
                }, null, 32),
                n[40] || (n[40] = e("span", null, "JSONファイルをドラッグまたはクリック", -1))
              ]),
              D(e("textarea", {
                "onUpdate:modelValue": n[12] || (n[12] = (v) => A.value = v),
                placeholder: "またはJSONを直接貼り付け...",
                class: "di-modal-textarea di-modal-textarea-input"
              }, null, 512), [
                [U, A.value]
              ]),
              R.value ? (o(), u("p", Cl, f(R.value), 1)) : y("", !0),
              e("div", Il, [
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
                }, " インポート ", 8, _l)
              ])
            ])
          ])) : y("", !0)
        ]))
      ], 64);
    };
  }
}), Me = (h, l) => {
  const c = h.__vccOpts || h;
  for (const [k, E] of l)
    c[k] = E;
  return c;
}, El = /* @__PURE__ */ Me(Ml, [["__scopeId", "data-v-d57ef689"]]), Pl = { class: "di-editor-modal" }, Sl = { class: "di-editor-header" }, Dl = { class: "di-header-actions" }, Al = {
  key: 0,
  class: "di-static-indicator"
}, Tl = {
  key: 1,
  class: "di-binding-indicator"
}, Ul = {
  key: 0,
  class: "di-binding-source"
}, Ll = { class: "di-editor-tabs" }, Vl = { class: "di-editor-content" }, Bl = { class: "di-form-group" }, Rl = { class: "di-note-types" }, jl = ["onClick"], ql = { class: "di-form-group" }, Ol = { class: "di-form-group" }, Hl = {
  key: 0,
  class: "di-binding-selector"
}, zl = { class: "di-form-group" }, Fl = { class: "di-form-label" }, Nl = { class: "di-binding-search-wrapper" }, Gl = {
  key: 0,
  class: "di-binding-list"
}, Xl = ["onClick"], Kl = { class: "di-binding-item-main" }, Yl = { class: "di-binding-name" }, Zl = { class: "di-binding-type" }, Jl = {
  key: 0,
  class: "di-binding-component"
}, Wl = {
  key: 1,
  class: "di-binding-empty"
}, Ql = { class: "di-form-row" }, es = { class: "di-form-group" }, ts = { class: "di-form-group" }, ls = { class: "di-form-group" }, ss = ["value"], ns = { class: "di-form-group" }, is = { class: "di-form-group" }, as = { class: "di-form-group" }, os = ["value"], ds = {
  key: 0,
  class: "di-form-row"
}, us = {
  class: "di-form-group",
  style: { flex: "0 0 100px" }
}, rs = ["value"], cs = {
  class: "di-form-group",
  style: { flex: "1" }
}, vs = {
  key: 1,
  class: "di-form-group"
}, ps = { class: "di-form-label" }, ys = ["placeholder"], bs = { class: "di-form-group" }, ms = { class: "di-form-group" }, fs = { class: "di-form-group" }, hs = { class: "di-form-row" }, ks = { class: "di-form-group" }, gs = { class: "di-form-group" }, xs = { class: "di-form-group" }, ws = { class: "di-form-group" }, $s = { class: "di-form-group" }, Cs = { class: "di-form-group" }, Is = { class: "di-form-group" }, _s = { class: "di-form-group" }, Ms = { class: "di-form-group" }, Es = { class: "di-editor-footer" }, Ps = { class: "di-editor-actions" }, Ss = /* @__PURE__ */ ke({
  __name: "DevElementEditor",
  setup(h) {
    const l = ge(), c = p("note"), k = p(""), E = p(""), A = p(""), R = p(""), j = p(""), C = p("navigate"), b = p(""), J = p("GET"), W = p(""), H = p(""), G = p(""), g = p("info"), d = p(""), a = p(""), w = p(""), I = p(""), M = p(""), $ = p(""), T = p(""), L = p(""), P = p(""), x = p(""), z = p(""), m = p(""), F = p(""), K = p(!1), Y = ne(() => l.editingElementId !== null), N = ne(() => l.editingElementId);
    Be(N, (q) => {
      var t, s, de, ce, ve, ee;
      if (q) {
        const r = l.getElementConfig(q);
        let pe = !1;
        try {
          const ae = document.querySelector(q);
          if (ae) {
            const ue = ae.querySelector("[data-di-binding]") || (ae.hasAttribute("data-di-binding") ? ae : null) || ae.closest("[data-di-binding]");
            if (ue) {
              const $e = ue.getAttribute("data-di-binding"), ye = ue.getAttribute("data-di-db"), Pe = ue.getAttribute("data-di-component"), Ne = ue.getAttribute("data-di-db-type"), Ge = ue.getAttribute("data-di-db-comment");
              if ($e && (F.value = $e, m.value = "api", K.value = !1, pe = !0), ye) {
                const [Se, De] = ye.split(".");
                Se && De && (k.value = Se, E.value = De, A.value = Ne || "", j.value = Ge || "", pe = !0);
              }
              Pe && (T.value = Pe), pe && (H.value = `【データバインディング】${$e}${ye ? ` → ${ye}` : ""}`, g.value = "info", c.value = "field");
            }
          }
        } catch (ae) {
          console.warn("[DevInspector] Failed to read data-di-* attributes:", ae);
        }
        r != null && r.fieldInfo && (k.value = r.fieldInfo.table || k.value, E.value = r.fieldInfo.column || E.value, A.value = r.fieldInfo.type || "", R.value = ((t = r.fieldInfo.validation) == null ? void 0 : t.join(", ")) || "", j.value = r.fieldInfo.description || j.value), r != null && r.actionInfo && (C.value = r.actionInfo.type || "navigate", b.value = r.actionInfo.target || "", J.value = r.actionInfo.method || "GET", W.value = r.actionInfo.description || ""), r != null && r.note && (H.value = r.note.text || H.value, G.value = r.note.author || "", g.value = r.note.type || "info"), r != null && r.links && (d.value = r.links.testPath || "", a.value = r.links.figmaUrl || "", w.value = r.links.githubIssue || "", I.value = r.links.githubPr || "", M.value = r.links.relatedDocs || ""), r != null && r.devMeta && ($.value = ((s = r.devMeta.usedStores) == null ? void 0 : s.join(", ")) || "", T.value = ((de = r.devMeta.usedComponents) == null ? void 0 : de.join(", ")) || T.value, L.value = ((ce = r.devMeta.i18nKeys) == null ? void 0 : ce.join(", ")) || "", P.value = ((ve = r.devMeta.designTokens) == null ? void 0 : ve.join(", ")) || "", x.value = r.devMeta.accessibility || "", z.value = r.devMeta.responsive || ""), r != null && r.sourceBinding && (m.value = r.sourceBinding.type || m.value, F.value = r.sourceBinding.source || F.value, K.value = r.sourceBinding.isStatic || !1), pe || ((ee = r == null ? void 0 : r.note) != null && ee.text ? c.value = "note" : r != null && r.fieldInfo ? c.value = "field" : r != null && r.actionInfo ? c.value = "action" : r != null && r.links ? c.value = "links" : r != null && r.devMeta ? c.value = "meta" : c.value = "note");
      } else
        B();
    });
    function B() {
      k.value = "", E.value = "", A.value = "", R.value = "", j.value = "", C.value = "navigate", b.value = "", J.value = "GET", W.value = "", H.value = "", G.value = "", g.value = "info", d.value = "", a.value = "", w.value = "", I.value = "", M.value = "", $.value = "", T.value = "", L.value = "", P.value = "", x.value = "", z.value = "", m.value = "", F.value = "", K.value = !1, c.value = "note";
    }
    function n() {
      l.stopEditing(), B();
    }
    function Q() {
      var q;
      if (N.value)
        try {
          const t = document.querySelector(N.value);
          if (!t) return;
          const s = l.autoDetectElementInfo(t, N.value);
          s.sourceBinding && (m.value = s.sourceBinding.type || "", F.value = s.sourceBinding.source || "", K.value = s.sourceBinding.isStatic || !1, s.sourceBinding.isStatic && !H.value && (H.value = "固定文言", g.value = "info")), s.fieldInfo && (k.value = s.fieldInfo.table || "", E.value = s.fieldInfo.column || "", A.value = s.fieldInfo.type || "", j.value = s.fieldInfo.description || "", c.value = "field"), s.note && (H.value = s.note.text || "", g.value = s.note.type || "info"), (q = s.devMeta) != null && q.usedComponents && (T.value = s.devMeta.usedComponents.join(", "));
        } catch (t) {
          console.error("[DevInspector] Auto-detect failed:", t);
        }
    }
    function v() {
      if (!N.value) return;
      const q = k.value && E.value ? {
        table: k.value,
        column: E.value,
        type: A.value || void 0,
        validation: R.value ? R.value.split(",").map((ee) => ee.trim()) : void 0,
        description: j.value || void 0
      } : void 0, t = b.value ? {
        type: C.value,
        target: b.value,
        method: C.value === "api" ? J.value : void 0,
        description: W.value || void 0
      } : void 0, s = H.value ? {
        text: H.value,
        author: G.value || void 0,
        type: g.value
      } : void 0, de = d.value || a.value || w.value || I.value || M.value ? {
        testPath: d.value || void 0,
        figmaUrl: a.value || void 0,
        githubIssue: w.value || void 0,
        githubPr: I.value || void 0,
        relatedDocs: M.value || void 0
      } : void 0, ce = $.value || T.value || L.value || P.value || x.value || z.value ? {
        usedStores: $.value ? $.value.split(",").map((ee) => ee.trim()) : void 0,
        usedComponents: T.value ? T.value.split(",").map((ee) => ee.trim()) : void 0,
        i18nKeys: L.value ? L.value.split(",").map((ee) => ee.trim()) : void 0,
        designTokens: P.value ? P.value.split(",").map((ee) => ee.trim()) : void 0,
        accessibility: x.value || void 0,
        responsive: z.value || void 0
      } : void 0, ve = m.value ? {
        type: m.value,
        source: F.value || void 0,
        isStatic: K.value
      } : void 0;
      l.setElementConfig(N.value, {
        fieldInfo: q,
        actionInfo: t,
        note: s,
        links: de,
        devMeta: ce,
        sourceBinding: ve
      }), n();
    }
    function ie() {
      N.value && (l.deleteElementConfig(N.value), n());
    }
    const xe = [
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
    ], se = p(""), re = p(!1), we = ne(() => l.searchSchemaColumns(se.value).slice(0, 30));
    function qe(q) {
      k.value = q.table, E.value = q.column, A.value = q.type || "", j.value = q.comment || "", re.value = !1, se.value = "";
    }
    const Oe = ne(() => {
      if (!N.value) return !1;
      try {
        const q = document.querySelector(N.value);
        if (!q) return !1;
        const t = q.querySelector("[data-di-binding]") || (q.hasAttribute("data-di-binding") ? q : null);
        return !!(t != null && t.getAttribute("data-di-db"));
      } catch {
        return !1;
      }
    }), Ee = ne(() => l.getSchemaColumns().length > 0), He = [
      { value: "navigate", label: "画面遷移" },
      { value: "api", label: "API呼び出し" },
      { value: "modal", label: "モーダル表示" },
      { value: "emit", label: "イベント発火" },
      { value: "function", label: "関数実行" }
    ], ze = ["GET", "POST", "PUT", "DELETE", "PATCH"], Fe = [
      { value: "info", label: "情報", icon: it, color: "#60a5fa" },
      { value: "warning", label: "注意", icon: We, color: "#fbbf24" },
      { value: "todo", label: "TODO", icon: Qe, color: "#10b981" },
      { value: "question", label: "質問", icon: nt, color: "#a78bfa" }
    ];
    return (q, t) => (o(), X(oe, { to: "body" }, [
      Y.value ? (o(), u("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: he(n, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", Pl, [
          e("div", Sl, [
            t[31] || (t[31] = e("h3", null, "要素情報を編集", -1)),
            e("div", Dl, [
              e("button", {
                onClick: Q,
                class: "di-btn-auto",
                title: "自動検出"
              }, [
                _(i(pt), { style: { width: "16px", height: "16px" } })
              ]),
              e("button", {
                onClick: n,
                class: "di-editor-close"
              }, [
                _(i(_e), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          K.value ? (o(), u("div", Al, [...t[32] || (t[32] = [
            e("span", { class: "di-static-badge" }, "固定文言", -1),
            e("span", { class: "di-static-hint" }, "このテキストはソースコードに直接記述されています", -1)
          ])])) : m.value ? (o(), u("div", Tl, [
            e("span", {
              class: te(["di-binding-badge", "di-binding-" + m.value])
            }, f(m.value), 3),
            F.value ? (o(), u("span", Ul, f(F.value), 1)) : y("", !0)
          ])) : y("", !0),
          e("div", Ll, [
            e("button", {
              onClick: t[0] || (t[0] = (s) => c.value = "note"),
              class: te(["di-editor-tab", { active: c.value === "note" }]),
              style: Z(c.value === "note" ? { color: "#10b981", borderColor: "#10b981", background: "rgba(16, 185, 129, 0.1)" } : {})
            }, [
              _(i(ot), { style: { width: "12px", height: "12px" } }),
              t[33] || (t[33] = O(" メモ ", -1))
            ], 6),
            Oe.value || Ee.value || k.value ? (o(), u("button", {
              key: 0,
              onClick: t[1] || (t[1] = (s) => c.value = "field"),
              class: te(["di-editor-tab", { active: c.value === "field" }]),
              style: Z(c.value === "field" ? { color: "#60a5fa", borderColor: "#60a5fa", background: "rgba(96, 165, 250, 0.1)" } : {})
            }, [
              _(i(Ue), { style: { width: "12px", height: "12px" } }),
              t[34] || (t[34] = O(" データ ", -1))
            ], 6)) : y("", !0),
            e("button", {
              onClick: t[2] || (t[2] = (s) => c.value = "action"),
              class: te(["di-editor-tab", { active: c.value === "action" }]),
              style: Z(c.value === "action" ? { color: "#a78bfa", borderColor: "#a78bfa", background: "rgba(167, 139, 250, 0.1)" } : {})
            }, [
              _(i(yt), { style: { width: "12px", height: "12px" } }),
              t[35] || (t[35] = O(" アクション ", -1))
            ], 6),
            e("button", {
              onClick: t[3] || (t[3] = (s) => c.value = "links"),
              class: te(["di-editor-tab", { active: c.value === "links" }]),
              style: Z(c.value === "links" ? { color: "#f59e0b", borderColor: "#f59e0b", background: "rgba(245, 158, 11, 0.1)" } : {})
            }, [
              _(i(at), { style: { width: "12px", height: "12px" } }),
              t[36] || (t[36] = O(" リンク ", -1))
            ], 6),
            e("button", {
              onClick: t[4] || (t[4] = (s) => c.value = "meta"),
              class: te(["di-editor-tab", { active: c.value === "meta" }]),
              style: Z(c.value === "meta" ? { color: "#ec4899", borderColor: "#ec4899", background: "rgba(236, 72, 153, 0.1)" } : {})
            }, [
              _(i(ct), { style: { width: "12px", height: "12px" } }),
              t[37] || (t[37] = O(" 開発情報 ", -1))
            ], 6)
          ]),
          e("div", Vl, [
            c.value === "note" ? (o(), u(V, { key: 0 }, [
              e("div", Bl, [
                t[38] || (t[38] = e("label", { class: "di-form-label" }, "タイプ", -1)),
                e("div", Rl, [
                  (o(), u(V, null, le(Fe, (s) => e("button", {
                    key: s.value,
                    onClick: (de) => g.value = s.value,
                    class: "di-note-type-btn",
                    style: Z(g.value === s.value ? { color: s.color, borderColor: s.color, background: s.color + "15" } : {})
                  }, [
                    (o(), X(Ke(s.icon), {
                      style: Z([{ width: "16px", height: "16px" }, { color: g.value === s.value ? s.color : "#64748b" }])
                    }, null, 8, ["style"])),
                    e("span", {
                      style: Z({ color: g.value === s.value ? s.color : "#94a3b8" })
                    }, f(s.label), 5)
                  ], 12, jl)), 64))
                ])
              ]),
              e("div", ql, [
                t[39] || (t[39] = e("label", { class: "di-form-label" }, "メモ内容 *", -1)),
                D(e("textarea", {
                  "onUpdate:modelValue": t[5] || (t[5] = (s) => H.value = s),
                  rows: "4",
                  placeholder: "この要素についてのメモ、説明、注意事項など...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, H.value]
                ])
              ]),
              e("div", Ol, [
                t[40] || (t[40] = e("label", { class: "di-form-label" }, "記入者（オプション）", -1)),
                D(e("input", {
                  "onUpdate:modelValue": t[6] || (t[6] = (s) => G.value = s),
                  type: "text",
                  placeholder: "名前",
                  class: "di-input"
                }, null, 512), [
                  [U, G.value]
                ])
              ])
            ], 64)) : y("", !0),
            c.value === "field" ? (o(), u(V, { key: 1 }, [
              Ee.value ? (o(), u("div", Hl, [
                e("div", zl, [
                  e("label", Fl, [
                    _(i(Ue), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[41] || (t[41] = O(" schema.rb から選択 ", -1))
                  ]),
                  e("div", Nl, [
                    D(e("input", {
                      "onUpdate:modelValue": t[7] || (t[7] = (s) => se.value = s),
                      onFocus: t[8] || (t[8] = (s) => re.value = !0),
                      type: "text",
                      placeholder: "テーブル.カラムを検索... (例: users, email)",
                      class: "di-input di-binding-search"
                    }, null, 544), [
                      [U, se.value]
                    ]),
                    se.value ? (o(), u("button", {
                      key: 0,
                      onClick: t[9] || (t[9] = (s) => {
                        se.value = "", re.value = !1;
                      }),
                      class: "di-binding-clear"
                    }, [
                      _(i(_e), { style: { width: "14px", height: "14px" } })
                    ])) : y("", !0)
                  ]),
                  re.value && we.value.length > 0 ? (o(), u("div", Gl, [
                    (o(!0), u(V, null, le(we.value, (s) => (o(), u("button", {
                      key: s.fullName,
                      onClick: (de) => qe(s),
                      class: "di-binding-item has-db"
                    }, [
                      e("div", Kl, [
                        e("span", Yl, f(s.fullName), 1),
                        e("span", Zl, f(s.type), 1)
                      ]),
                      s.comment ? (o(), u("span", Jl, f(s.comment), 1)) : y("", !0)
                    ], 8, Xl))), 128))
                  ])) : re.value && se.value && we.value.length === 0 ? (o(), u("div", Wl, " 該当するカラムが見つかりません ")) : y("", !0)
                ])
              ])) : y("", !0),
              t[48] || (t[48] = e("div", { class: "di-form-divider" }, [
                e("span", null, "または手動入力")
              ], -1)),
              e("div", Ql, [
                e("div", es, [
                  t[42] || (t[42] = e("label", { class: "di-form-label" }, "テーブル名 *", -1)),
                  D(e("input", {
                    "onUpdate:modelValue": t[10] || (t[10] = (s) => k.value = s),
                    type: "text",
                    placeholder: "users",
                    class: "di-input"
                  }, null, 512), [
                    [U, k.value]
                  ])
                ]),
                e("div", ts, [
                  t[43] || (t[43] = e("label", { class: "di-form-label" }, "カラム名 *", -1)),
                  D(e("input", {
                    "onUpdate:modelValue": t[11] || (t[11] = (s) => E.value = s),
                    type: "text",
                    placeholder: "name",
                    class: "di-input"
                  }, null, 512), [
                    [U, E.value]
                  ])
                ])
              ]),
              e("div", ls, [
                t[45] || (t[45] = e("label", { class: "di-form-label" }, "データ型", -1)),
                D(e("select", {
                  "onUpdate:modelValue": t[12] || (t[12] = (s) => A.value = s),
                  class: "di-select"
                }, [
                  t[44] || (t[44] = e("option", { value: "" }, "選択してください", -1)),
                  (o(), u(V, null, le(xe, (s) => e("option", {
                    key: s,
                    value: s
                  }, f(s), 9, ss)), 64))
                ], 512), [
                  [Ce, A.value]
                ])
              ]),
              e("div", ns, [
                t[46] || (t[46] = e("label", { class: "di-form-label" }, "バリデーション (カンマ区切り)", -1)),
                D(e("input", {
                  "onUpdate:modelValue": t[13] || (t[13] = (s) => R.value = s),
                  type: "text",
                  placeholder: "required, max:255",
                  class: "di-input"
                }, null, 512), [
                  [U, R.value]
                ])
              ]),
              e("div", is, [
                t[47] || (t[47] = e("label", { class: "di-form-label" }, "説明", -1)),
                D(e("textarea", {
                  "onUpdate:modelValue": t[14] || (t[14] = (s) => j.value = s),
                  rows: "2",
                  placeholder: "このフィールドの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, j.value]
                ])
              ])
            ], 64)) : y("", !0),
            c.value === "action" ? (o(), u(V, { key: 2 }, [
              e("div", as, [
                t[49] || (t[49] = e("label", { class: "di-form-label" }, "アクションタイプ", -1)),
                D(e("select", {
                  "onUpdate:modelValue": t[15] || (t[15] = (s) => C.value = s),
                  class: "di-select"
                }, [
                  (o(), u(V, null, le(He, (s) => e("option", {
                    key: s.value,
                    value: s.value
                  }, f(s.label), 9, os)), 64))
                ], 512), [
                  [Ce, C.value]
                ])
              ]),
              C.value === "api" ? (o(), u("div", ds, [
                e("div", us, [
                  t[50] || (t[50] = e("label", { class: "di-form-label" }, "メソッド", -1)),
                  D(e("select", {
                    "onUpdate:modelValue": t[16] || (t[16] = (s) => J.value = s),
                    class: "di-select"
                  }, [
                    (o(), u(V, null, le(ze, (s) => e("option", {
                      key: s,
                      value: s
                    }, f(s), 9, rs)), 64))
                  ], 512), [
                    [Ce, J.value]
                  ])
                ]),
                e("div", cs, [
                  t[51] || (t[51] = e("label", { class: "di-form-label" }, "エンドポイント", -1)),
                  D(e("input", {
                    "onUpdate:modelValue": t[17] || (t[17] = (s) => b.value = s),
                    type: "text",
                    placeholder: "/api/tasks",
                    class: "di-input"
                  }, null, 512), [
                    [U, b.value]
                  ])
                ])
              ])) : (o(), u("div", vs, [
                e("label", ps, f(C.value === "navigate" ? "遷移先パス" : C.value === "modal" ? "モーダル名" : C.value === "emit" ? "イベント名" : "関数名"), 1),
                D(e("input", {
                  "onUpdate:modelValue": t[18] || (t[18] = (s) => b.value = s),
                  type: "text",
                  placeholder: C.value === "navigate" ? "/tasks" : C.value === "modal" ? "ConfirmDialog" : C.value === "emit" ? "onSubmit" : "handleClick",
                  class: "di-input"
                }, null, 8, ys), [
                  [U, b.value]
                ])
              ])),
              e("div", bs, [
                t[52] || (t[52] = e("label", { class: "di-form-label" }, "説明", -1)),
                D(e("textarea", {
                  "onUpdate:modelValue": t[19] || (t[19] = (s) => W.value = s),
                  rows: "2",
                  placeholder: "このアクションの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, W.value]
                ])
              ])
            ], 64)) : y("", !0),
            c.value === "links" ? (o(), u(V, { key: 3 }, [
              e("div", ms, [
                t[53] || (t[53] = e("label", { class: "di-form-label" }, "テストファイルパス", -1)),
                D(e("input", {
                  "onUpdate:modelValue": t[20] || (t[20] = (s) => d.value = s),
                  type: "text",
                  placeholder: "src/__tests__/components/MyComponent.test.ts",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, d.value]
                ])
              ]),
              e("div", fs, [
                t[54] || (t[54] = e("label", { class: "di-form-label" }, "Figma URL", -1)),
                D(e("input", {
                  "onUpdate:modelValue": t[21] || (t[21] = (s) => a.value = s),
                  type: "text",
                  placeholder: "https://www.figma.com/design/...",
                  class: "di-input"
                }, null, 512), [
                  [U, a.value]
                ])
              ]),
              e("div", hs, [
                e("div", ks, [
                  t[55] || (t[55] = e("label", { class: "di-form-label" }, "GitHub Issue", -1)),
                  D(e("input", {
                    "onUpdate:modelValue": t[22] || (t[22] = (s) => w.value = s),
                    type: "text",
                    placeholder: "#123",
                    class: "di-input"
                  }, null, 512), [
                    [U, w.value]
                  ])
                ]),
                e("div", gs, [
                  t[56] || (t[56] = e("label", { class: "di-form-label" }, "GitHub PR", -1)),
                  D(e("input", {
                    "onUpdate:modelValue": t[23] || (t[23] = (s) => I.value = s),
                    type: "text",
                    placeholder: "#456",
                    class: "di-input"
                  }, null, 512), [
                    [U, I.value]
                  ])
                ])
              ]),
              e("div", xs, [
                t[57] || (t[57] = e("label", { class: "di-form-label" }, "関連ドキュメント", -1)),
                D(e("input", {
                  "onUpdate:modelValue": t[24] || (t[24] = (s) => M.value = s),
                  type: "text",
                  placeholder: "https://docs.example.com/...",
                  class: "di-input"
                }, null, 512), [
                  [U, M.value]
                ])
              ])
            ], 64)) : y("", !0),
            c.value === "meta" ? (o(), u(V, { key: 4 }, [
              e("div", ws, [
                t[58] || (t[58] = e("label", { class: "di-form-label" }, "使用Piniaストア (カンマ区切り)", -1)),
                D(e("input", {
                  "onUpdate:modelValue": t[25] || (t[25] = (s) => $.value = s),
                  type: "text",
                  placeholder: "useUserStore, useThemeStore",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, $.value]
                ])
              ]),
              e("div", $s, [
                t[59] || (t[59] = e("label", { class: "di-form-label" }, "使用コンポーネント (カンマ区切り)", -1)),
                D(e("input", {
                  "onUpdate:modelValue": t[26] || (t[26] = (s) => T.value = s),
                  type: "text",
                  placeholder: "Button, Modal, Input",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, T.value]
                ])
              ]),
              e("div", Cs, [
                t[60] || (t[60] = e("label", { class: "di-form-label" }, "i18nキー (カンマ区切り)", -1)),
                D(e("input", {
                  "onUpdate:modelValue": t[27] || (t[27] = (s) => L.value = s),
                  type: "text",
                  placeholder: "common.save, errors.required",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, L.value]
                ])
              ]),
              e("div", Is, [
                t[61] || (t[61] = e("label", { class: "di-form-label" }, "デザイントークン (カンマ区切り)", -1)),
                D(e("input", {
                  "onUpdate:modelValue": t[28] || (t[28] = (s) => P.value = s),
                  type: "text",
                  placeholder: "primaryColor, secondaryColor",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, P.value]
                ])
              ]),
              e("div", _s, [
                t[62] || (t[62] = e("label", { class: "di-form-label" }, "アクセシビリティ", -1)),
                D(e("textarea", {
                  "onUpdate:modelValue": t[29] || (t[29] = (s) => x.value = s),
                  rows: "2",
                  placeholder: "キーボード操作、スクリーンリーダー対応などのメモ...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, x.value]
                ])
              ]),
              e("div", Ms, [
                t[63] || (t[63] = e("label", { class: "di-form-label" }, "レスポンシブ動作", -1)),
                D(e("textarea", {
                  "onUpdate:modelValue": t[30] || (t[30] = (s) => z.value = s),
                  rows: "2",
                  placeholder: "モバイルでの表示変更、ブレークポイントなど...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, z.value]
                ])
              ])
            ], 64)) : y("", !0)
          ]),
          e("div", Es, [
            e("button", {
              onClick: ie,
              class: "di-btn-delete"
            }, [
              _(i(je), { style: { width: "14px", height: "14px" } }),
              t[64] || (t[64] = O(" 削除 ", -1))
            ]),
            e("div", Ps, [
              e("button", {
                onClick: n,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: v,
                class: "di-btn-save"
              }, [
                _(i(rt), { style: { width: "14px", height: "14px" } }),
                t[65] || (t[65] = O(" 保存 ", -1))
              ])
            ])
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), Ds = /* @__PURE__ */ Me(Ss, [["__scopeId", "data-v-28a37438"]]), As = {
  key: 0,
  "data-dev-inspector": "",
  class: "di-loading-overlay"
}, Ts = { class: "di-highlight-label" }, Us = {
  key: 2,
  "data-dev-inspector": "",
  class: "di-pick-banner"
}, Ls = ["onClick"], Vs = ["onClick"], Bs = {
  "data-dev-inspector": "",
  class: "di-scan-banner"
}, Rs = ["onClick"], js = { class: "di-analysis-type" }, qs = {
  key: 0,
  class: "di-analysis-db"
}, Os = ["onClick"], Hs = {
  key: 0,
  class: "di-analysis-text"
}, zs = {
  "data-dev-inspector": "",
  class: "di-analysis-banner"
}, Fs = /* @__PURE__ */ ke({
  __name: "DevPickOverlay",
  setup(h) {
    const l = ge(), c = p(null), k = p(null), E = p(0), A = p(0);
    function R(g) {
      var a;
      const d = l.getElementConfig(g);
      if (!(d != null && d.sourceBinding)) {
        const w = ((a = d == null ? void 0 : d.note) == null ? void 0 : a.type) || "info";
        return {
          info: "#60a5fa",
          warning: "#fbbf24",
          todo: "#10b981",
          question: "#a78bfa"
        }[w] || "#60a5fa";
      }
      return d.sourceBinding.isStatic ? "#10b981" : d.sourceBinding.type === "v-model" ? "#8b5cf6" : d.sourceBinding.type === "api" ? "#f59e0b" : "#60a5fa";
    }
    const j = ne(() => {
      var I, M, $, T, L;
      const g = E.value, d = A.value, a = [];
      if (!l.isEnabled) return a;
      const w = l.getConfiguredSelectors();
      for (const P of w)
        try {
          const x = document.querySelector(P);
          if (x) {
            const z = x.getBoundingClientRect(), m = l.getElementConfig(P), F = ((I = m == null ? void 0 : m.sourceBinding) == null ? void 0 : I.isStatic) || !1, K = ((M = m == null ? void 0 : m.sourceBinding) == null ? void 0 : M.type) || "";
            let Y = "";
            ($ = m == null ? void 0 : m.fieldInfo) != null && $.table && ((T = m == null ? void 0 : m.fieldInfo) != null && T.column) ? Y = `DB: ${m.fieldInfo.table}.${m.fieldInfo.column}` : F ? Y = "固定" : K === "v-model" ? Y = "フォーム" : K === "api" ? Y = "データ" : (L = m == null ? void 0 : m.note) != null && L.type ? Y = {
              info: "情報",
              warning: "注意",
              todo: "TODO",
              question: "質問"
            }[m.note.type] || "メモ" : Y = "メモ", a.push({
              selector: P,
              top: `${z.top + g}px`,
              left: `${z.left + d}px`,
              width: `${z.width}px`,
              height: `${z.height}px`,
              color: R(P),
              isStatic: F,
              label: Y
            });
          }
        } catch {
        }
      return a;
    }), C = ne(() => {
      var w;
      const g = E.value, d = A.value, a = [];
      if (!l.isEnabled || l.scanResults.length === 0) return a;
      for (const I of l.scanResults)
        try {
          const M = document.querySelector(I.selector);
          if (M) {
            const $ = M.getBoundingClientRect();
            a.push({
              selector: I.selector,
              top: `${$.top + g}px`,
              left: `${$.left + d}px`,
              width: `${$.width}px`,
              height: `${$.height}px`,
              isStatic: ((w = I.detected.sourceBinding) == null ? void 0 : w.isStatic) || !1
            });
          }
        } catch {
        }
      return a;
    }), b = ne(() => {
      const g = E.value, d = A.value, a = [], w = l.analysisFilter;
      if (w === "none" || !l.isEnabled || l.analysisResults.length === 0) return a;
      for (const I of l.analysisResults) {
        if (!I.matched) continue;
        const M = I.element;
        try {
          const $ = document.querySelector(I.selector);
          if (!$) continue;
          const T = $.getBoundingClientRect();
          if (T.width > window.innerWidth * 0.8 || T.height > window.innerHeight * 0.5)
            continue;
          const L = $.querySelector("[data-di-binding]") || ($.hasAttribute("data-di-binding") ? $ : null);
          let P = "", x = M.type, z = M.binding || "";
          if (L) {
            const B = L.getAttribute("data-di-db"), n = L.getAttribute("data-di-binding");
            B && (P = B, x = "data"), n && (z = n, P || (x = "data"));
          }
          !P && M.db && (P = `${M.db.table}.${M.db.column}`);
          let m = "";
          M.api && (m = `${M.api.method} ${M.api.endpoint}`);
          const F = !!P, K = !!m, Y = x === "static", N = x === "data";
          if (w === "db-api") {
            if (!F && !K) continue;
          } else if (w === "static") {
            if (!Y) continue;
          } else if (w === "data") {
            if (!N) continue;
          } else if (w === "other" && (F || K || Y || N))
            continue;
          a.push({
            selector: I.selector,
            top: `${T.top + g}px`,
            left: `${T.left + d}px`,
            width: `${T.width}px`,
            height: `${T.height}px`,
            type: x,
            text: M.text || z || "",
            dbInfo: P,
            apiInfo: m
          });
        } catch {
        }
      }
      return a;
    });
    function J(g) {
      if (!l.isPickMode) return;
      if (g.target.closest("[data-dev-inspector]")) {
        c.value = null, k.value = null, l.setHoveredSelector(null);
        return;
      }
      const a = document.elementFromPoint(g.clientX, g.clientY);
      if (!a || a === document.body || a === document.documentElement) {
        c.value = null, k.value = null, l.setHoveredSelector(null);
        return;
      }
      if (a.closest("[data-dev-inspector]"))
        return;
      k.value = a;
      const w = a.getBoundingClientRect();
      c.value = {
        top: `${w.top + window.scrollY}px`,
        left: `${w.left + window.scrollX}px`,
        width: `${w.width}px`,
        height: `${w.height}px`
      };
      const I = l.generateSelector(a);
      l.setHoveredSelector(I);
    }
    function W(g) {
      if (!(!l.isPickMode || g.target.closest("[data-dev-inspector]")) && (g.preventDefault(), g.stopPropagation(), k.value)) {
        const a = l.generateSelector(k.value);
        l.startEditing(a), l.togglePickMode();
      }
    }
    function H(g) {
      g.key === "Escape" && l.isPickMode && l.togglePickMode();
    }
    function G() {
      E.value = window.scrollY, A.value = window.scrollX;
    }
    return Re(() => {
      window.addEventListener("mousemove", J, !0), window.addEventListener("click", W, !0), window.addEventListener("keydown", H), window.addEventListener("scroll", G), window.addEventListener("resize", G);
    }), Ye(() => {
      window.removeEventListener("mousemove", J, !0), window.removeEventListener("click", W, !0), window.removeEventListener("keydown", H), window.removeEventListener("scroll", G), window.removeEventListener("resize", G);
    }), Be(() => l.isPickMode, (g) => {
      g || (c.value = null, k.value = null);
    }), (g, d) => (o(), X(oe, { to: "body" }, [
      i(l).isInitializing ? (o(), u("div", As, [...d[1] || (d[1] = [
        e("div", { class: "di-loading-content" }, [
          e("div", { class: "di-loading-spinner" }),
          e("span", { class: "di-loading-text" }, "Developer Mode 起動中...")
        ], -1)
      ])])) : y("", !0),
      i(l).isPickMode && c.value ? (o(), u("div", {
        key: 1,
        "data-dev-inspector": "",
        class: "di-highlight",
        style: Z({
          top: c.value.top,
          left: c.value.left,
          width: c.value.width,
          height: c.value.height
        })
      }, [
        e("div", Ts, f(i(l).hoveredSelector), 1)
      ], 4)) : y("", !0),
      i(l).isPickMode ? (o(), u("div", Us, [...d[2] || (d[2] = [
        e("span", null, "要素をクリックしてメモを追加", -1),
        e("kbd", null, "ESC", -1),
        e("span", { class: "di-pick-hint" }, "でキャンセル", -1)
      ])])) : y("", !0),
      i(l).isEnabled && !i(l).isPickMode && !i(l).editingElementId ? (o(!0), u(V, { key: 3 }, le(j.value, (a) => (o(), u("div", {
        key: a.selector,
        "data-dev-inspector": "",
        class: "di-annotation-box",
        style: Z({
          top: a.top,
          left: a.left,
          width: a.width,
          height: a.height,
          borderColor: a.color,
          backgroundColor: a.color + "15"
        }),
        onClick: (w) => i(l).startEditing(a.selector)
      }, [
        e("div", {
          class: "di-annotation-label",
          style: Z({ backgroundColor: a.color })
        }, f(a.label), 5)
      ], 12, Ls))), 128)) : y("", !0),
      i(l).isEnabled && !i(l).editingElementId && C.value.length > 0 && i(l).analysisResults.length === 0 ? (o(), u(V, { key: 4 }, [
        (o(!0), u(V, null, le(C.value, (a) => (o(), u("div", {
          key: "scan-" + a.selector,
          "data-dev-inspector": "",
          class: te(["di-scan-highlight", { "di-scan-static": a.isStatic }]),
          style: Z({
            top: a.top,
            left: a.left,
            width: a.width,
            height: a.height
          }),
          onClick: (w) => i(l).startEditing(a.selector)
        }, [
          e("div", {
            class: te(["di-scan-label", { "di-scan-label-static": a.isStatic }])
          }, f(a.isStatic ? "固定文言" : "動的データ"), 3)
        ], 14, Vs))), 128)),
        e("div", Bs, [
          e("span", null, f(C.value.length) + "件の要素を検出", 1),
          e("button", {
            onClick: d[0] || (d[0] = (a) => i(l).clearScanResults()),
            class: "di-scan-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : y("", !0),
      i(l).isEnabled && !i(l).editingElementId && b.value.length > 0 ? (o(), u(V, { key: 5 }, [
        (o(!0), u(V, null, le(b.value, (a) => (o(), u("div", {
          key: "analysis-" + a.selector,
          "data-dev-inspector": "",
          class: te(["di-analysis-highlight", {
            "di-analysis-static": a.type === "static",
            "di-analysis-data": a.type === "data",
            "di-analysis-form": a.type === "form",
            "di-analysis-button": a.type === "button",
            "di-analysis-link": a.type === "link"
          }]),
          style: Z({
            top: a.top,
            left: a.left,
            width: a.width,
            height: a.height
          }),
          onClick: (w) => i(l).startEditing(a.selector)
        }, [
          e("div", {
            class: te(["di-analysis-label", "di-analysis-label-" + (a.dbInfo ? "db" : a.type)])
          }, [
            e("span", js, f(a.dbInfo ? "DB" : a.type === "static" ? "固定" : a.type === "data" ? "データ" : a.type), 1),
            a.dbInfo ? (o(), u("span", qs, f(a.dbInfo), 1)) : y("", !0),
            e("button", {
              class: "di-analysis-delete",
              onClick: he((w) => i(l).removeAnalysisResult(a.selector), ["stop"]),
              title: "この要素を非表示"
            }, "×", 8, Os)
          ], 2),
          a.text && a.text.length < 30 ? (o(), u("div", Hs, f(a.text), 1)) : y("", !0)
        ], 14, Rs))), 128)),
        e("div", zs, [
          e("span", null, "📊 分析データ: " + f(b.value.length) + "件の要素", 1)
        ])
      ], 64)) : y("", !0)
    ]));
  }
}), Ns = /* @__PURE__ */ Me(Fs, [["__scopeId", "data-v-067eaf61"]]), Gs = {
  key: 0,
  "data-dev-inspector": ""
}, Xs = /* @__PURE__ */ ke({
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
    const l = h, c = ge();
    return Re(() => {
      c.init({
        storageKey: l.storageKey,
        enabledInProduction: l.enabledInProduction,
        initialAnnotations: l.initialAnnotations
      });
    }), (k, E) => i(c).isAvailable ? (o(), u("div", Gs, [
      _(El),
      _(Ds),
      _(Ns)
    ])) : y("", !0);
  }
}), Zs = {
  install(h, l = {}) {
    const { autoRegister: c = !0, ...k } = l;
    c && h.component("DevInspector", Xs), h.provide("devInspectorOptions", k);
  }
};
export {
  Ds as DevElementEditor,
  Xs as DevInspector,
  El as DevPanel,
  Ns as DevPickOverlay,
  Zs as VueDevInspector,
  Zs as default,
  Qs as useDevInspector,
  ge as useDevInspectorStore,
  tn as vitePluginDevInspector
};
