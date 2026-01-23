import { h as ce, defineComponent as ne, inject as De, ref as y, computed as Q, openBlock as a, createElementBlock as r, Fragment as A, createBlock as z, Teleport as W, unref as i, createVNode as g, createCommentVNode as x, createElementVNode as e, normalizeClass as G, toDisplayString as $, renderList as K, normalizeStyle as H, createTextVNode as L, withModifiers as de, withDirectives as M, vModelText as S, watch as fe, resolveDynamicComponent as ke, vModelSelect as ae, onMounted as be, onUnmounted as Le } from "vue";
import { u as ie } from "./useDevInspector-Chv_euOr.js";
import { a as so } from "./useDevInspector-Chv_euOr.js";
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var se = {
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
const Ae = (v) => v.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), w = (v, l) => ({ size: u, strokeWidth: m = 2, absoluteStrokeWidth: P, color: _, class: T, ...B }, { attrs: h, slots: p }) => ce(
  "svg",
  {
    ...se,
    width: u || se.width,
    height: u || se.height,
    stroke: _ || se.stroke,
    "stroke-width": P ? Number(m) * 24 / Number(u) : m,
    ...h,
    class: ["lucide", `lucide-${Ae(v)}`],
    ...B
  },
  [
    ...l.map((R) => ce(...R)),
    ...p.default ? [p.default()] : []
  ]
);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const je = w("AlertCircleIcon", [
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
const ge = w("AlertTriangleIcon", [
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
const xe = w("CheckSquareIcon", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ve = w("CodeIcon", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Be = w("DatabaseIcon", [
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
const pe = w("DownloadIcon", [
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
const qe = w("ExternalLinkIcon", [
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
const Re = w("FileSpreadsheetIcon", [
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
const ye = w("FileTextIcon", [
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
const Oe = w("GitBranchIcon", [
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
const ze = w("GlobeIcon", [
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
const we = w("HelpCircleIcon", [
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
const Ie = w("InfoIcon", [
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
const He = w("LinkIcon", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const he = w("Loader2Icon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ne = w("MessageSquareIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fe = w("MousePointer2Icon", [
  ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const me = w("PenLineIcon", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ge = w("SaveIcon", [
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
const Xe = w("ScanIcon", [
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
const Ke = w("ServerIcon", [
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
const Ye = w("Settings2Icon", [
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
const $e = w("Trash2Icon", [
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
const Ze = w("UploadIcon", [
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
const Je = w("Wand2Icon", [
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
const Ce = w("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const We = w("ZapIcon", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
]);
async function Qe(v, l, u = {}) {
  var f;
  const m = await import("./xlsx-BopDBbWb.js"), { systemName: P = "System", author: _ = "" } = u, T = /* @__PURE__ */ new Date(), B = `${T.getFullYear()}/${T.getMonth() + 1}/${T.getDate()}`, h = m.utils.book_new(), p = [];
  p.push([
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
    P,
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
    _,
    "",
    "作成日",
    "",
    "",
    "",
    "",
    B
  ]), p.push([]), p.push([
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
  ]), p.push([]), p.push(["機能概要"]), p.push([(v == null ? void 0 : v.description) || ""]), p.push([]), p.push(["画面レイアウト　figmaURL"]), p.push([(v == null ? void 0 : v.figmaUrl) || ""]), p.push([]), v != null && v.apis && v.apis.length > 0 && (p.push(["API一覧"]), p.push(["", "メソッド", "", "エンドポイント", "", "", "", "", "", "", "", "説明"]), v.apis.forEach((o) => {
    p.push(["", o.method, "", o.endpoint, "", "", "", "", "", "", "", o.description]);
  }), p.push([])), p.push(["画面項目　ヘッダーフッターは省く"]), p.push([
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
  ]), Object.values(l).forEach((o, C) => {
    var N, D, s;
    const E = o.id;
    let I = "", U = "", V = "";
    if ((N = o.note) != null && N.text && (I = o.note.text), o.fieldInfo && (I += I ? `
` : "", I += `DB: ${o.fieldInfo.table}.${o.fieldInfo.column}`, o.fieldInfo.type && (I += ` (${o.fieldInfo.type})`), o.fieldInfo.description && (I += `
${o.fieldInfo.description}`)), o.actionInfo && (V = `[${{
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行"
    }[o.actionInfo.type] || o.actionInfo.type}]`, o.actionInfo.target && (V += ` ${o.actionInfo.method || ""} ${o.actionInfo.target}`), o.actionInfo.description && (V += `
${o.actionInfo.description}`)), o.links) {
      const k = [];
      o.links.testPath && k.push(`テスト: ${o.links.testPath}`), o.links.figmaUrl && k.push(`Figma: ${o.links.figmaUrl}`), o.links.githubIssue && k.push(`Issue: ${o.links.githubIssue}`), o.links.githubPr && k.push(`PR: ${o.links.githubPr}`), k.length > 0 && (V += V ? `

` : "", V += k.join(`
`));
    }
    if (o.devMeta) {
      const k = [];
      (D = o.devMeta.usedStores) != null && D.length && k.push(`Store: ${o.devMeta.usedStores.join(", ")}`), (s = o.devMeta.usedComponents) != null && s.length && k.push(`Components: ${o.devMeta.usedComponents.join(", ")}`), o.devMeta.accessibility && k.push(`A11y: ${o.devMeta.accessibility}`), o.devMeta.responsive && k.push(`Responsive: ${o.devMeta.responsive}`), k.length > 0 && (V += V ? `

` : "", V += `[開発情報]
` + k.join(`
`));
    }
    p.push([
      "",
      C + 1,
      "",
      E,
      "",
      "",
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
      U,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      V
    ]);
  });
  const O = m.utils.aoa_to_sheet(p);
  O["!cols"] = [
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
  ], m.utils.book_append_sheet(h, O, "画面設計書");
  const b = `画面仕様書_${((f = v == null ? void 0 : v.name) == null ? void 0 : f.replace(/[/\\?%*:|"<>]/g, "-")) || "screen"}_${B.replace(/\//g, "")}.xlsx`;
  return m.writeFile(h, b), b;
}
const et = {
  key: 0,
  class: "di-panel",
  "data-dev-inspector": ""
}, tt = { class: "di-header" }, lt = { class: "di-header-title" }, ot = { class: "di-edit-section" }, st = { class: "di-edit-row" }, nt = { class: "di-edit-label" }, it = { class: "di-scan-section" }, at = ["disabled"], dt = ["disabled", "title"], ut = {
  key: 0,
  class: "di-scan-results"
}, rt = {
  key: 0,
  class: "di-scan-result-item"
}, ct = { class: "di-scan-result-count" }, vt = { class: "di-scan-result-count" }, pt = { class: "di-content" }, yt = { class: "di-section" }, ht = { class: "di-screen-name" }, mt = { class: "di-screen-desc" }, ft = { class: "di-card" }, kt = { class: "di-card-label" }, bt = { class: "di-code-blue" }, gt = {
  key: 0,
  class: "di-card"
}, xt = { class: "di-card-label" }, wt = ["href"], It = {
  key: 1,
  class: "di-card"
}, $t = { class: "di-card-label" }, Ct = { class: "di-api-list" }, Mt = { class: "di-api-info" }, Et = { class: "di-api-endpoint" }, Pt = { class: "di-api-desc" }, _t = {
  key: 2,
  class: "di-card"
}, Tt = { class: "di-card-label" }, Ut = { class: "di-notes-list" }, St = {
  key: 1,
  class: "di-no-spec"
}, Vt = { class: "di-card" }, Dt = { class: "di-card-header" }, Lt = { class: "di-card-label" }, At = { class: "di-count-badge" }, jt = {
  key: 0,
  class: "di-export-buttons"
}, Bt = {
  key: 1,
  class: "di-export-hint"
}, qt = { class: "di-action-buttons" }, Rt = {
  key: 0,
  class: "di-indicator",
  "data-dev-inspector": ""
}, Ot = {
  key: 0,
  class: "di-indicator-edit"
}, zt = { class: "di-modal" }, Ht = ["value"], Nt = { class: "di-modal-actions" }, Ft = { class: "di-modal" }, Gt = { class: "di-file-drop" }, Xt = {
  key: 0,
  class: "di-error"
}, Kt = { class: "di-modal-actions" }, Yt = ["disabled"], Zt = /* @__PURE__ */ ne({
  __name: "DevPanel",
  setup(v) {
    const l = ie(), u = De("router", null), m = y(!1), P = y(!1), _ = y(""), T = y(""), B = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, h = Q(() => l.currentScreenSpec), p = Q(() => Object.keys(l.elementConfigs).length);
    function R() {
      const D = l.exportConfigs();
      navigator.clipboard.writeText(D), m.value = !1;
    }
    function O() {
      const D = l.exportConfigs(), s = new Blob([D], { type: "application/json" }), k = URL.createObjectURL(s), c = document.createElement("a");
      c.href = k, c.download = "dev-mode-configs.json", c.click(), URL.revokeObjectURL(k), m.value = !1;
    }
    function j() {
      l.downloadAnnotations();
    }
    async function b() {
      try {
        await Qe(
          l.currentScreenSpec,
          l.elementConfigs,
          { systemName: "System" }
        );
      } catch (D) {
        console.error("Failed to export xlsx:", D), alert("xlsx export failed. Make sure xlsx package is installed.");
      }
    }
    function f() {
      try {
        l.importConfigs(_.value), _.value = "", T.value = "", P.value = !1;
      } catch {
        T.value = "JSONの形式が正しくありません";
      }
    }
    function o(D) {
      var q;
      const k = (q = D.target.files) == null ? void 0 : q[0];
      if (!k) return;
      const c = new FileReader();
      c.onload = (Y) => {
        var Z;
        _.value = (Z = Y.target) == null ? void 0 : Z.result;
      }, c.readAsText(k);
    }
    function C() {
      confirm("すべての要素設定を削除しますか？") && l.clearAllConfigs();
    }
    const E = y(0), I = y(!1), U = y([]);
    async function V() {
      I.value = !0, E.value = await l.scanCurrentPage();
    }
    async function N() {
      if (!u) {
        alert("Vue Routerが見つかりません。全ページスキャンにはVue Routerが必要です。");
        return;
      }
      confirm("全ページをスキャンします。ページ遷移が発生しますがよろしいですか？") && (I.value = !0, U.value = await l.scanAllPages(u));
    }
    return (D, s) => {
      var k;
      return a(), r(A, null, [
        (a(), z(W, { to: "body" }, [
          i(l).isEnabled && !i(l).isPanelOpen ? (a(), r("button", {
            key: 0,
            onClick: s[0] || (s[0] = //@ts-ignore
            (...c) => i(l).openPanel && i(l).openPanel(...c)),
            class: "di-fab",
            title: "画面仕様を表示",
            "data-dev-inspector": ""
          }, [
            g(i(ye), { style: { width: "20px", height: "20px" } })
          ])) : x("", !0)
        ])),
        (a(), z(W, { to: "body" }, [
          i(l).isEnabled && i(l).isPanelOpen ? (a(), r("div", et, [
            e("div", tt, [
              e("div", lt, [
                g(i(ve), { style: { width: "20px", height: "20px", color: "#60a5fa" } }),
                s[12] || (s[12] = e("span", null, "Developer Mode", -1))
              ]),
              e("button", {
                onClick: s[1] || (s[1] = //@ts-ignore
                (...c) => i(l).closePanel && i(l).closePanel(...c)),
                class: "di-close-btn"
              }, [
                g(i(Ce), { style: { width: "20px", height: "20px" } })
              ])
            ]),
            e("div", ot, [
              e("div", st, [
                e("div", nt, [
                  g(i(me), { style: { width: "16px", height: "16px", color: "#fbbf24" } }),
                  s[13] || (s[13] = e("span", null, "編集モード", -1))
                ]),
                e("button", {
                  onClick: s[2] || (s[2] = //@ts-ignore
                  (...c) => i(l).toggleEditMode && i(l).toggleEditMode(...c)),
                  class: G(["di-toggle", { active: i(l).isEditMode }])
                }, [
                  e("span", {
                    class: G(["di-toggle-knob", { active: i(l).isEditMode }])
                  }, null, 2)
                ], 2)
              ]),
              s[15] || (s[15] = e("p", { class: "di-edit-hint" }, "ONにすると、要素をクリックして情報を編集できます", -1)),
              e("button", {
                onClick: s[3] || (s[3] = //@ts-ignore
                (...c) => i(l).togglePickMode && i(l).togglePickMode(...c)),
                class: G(["di-pick-btn", { active: i(l).isPickMode }])
              }, [
                g(i(Fe), { style: { width: "16px", height: "16px" } }),
                e("span", null, $(i(l).isPickMode ? "要素選択中..." : "任意の要素にメモを追加"), 1)
              ], 2),
              e("div", it, [
                e("button", {
                  onClick: V,
                  class: "di-scan-btn",
                  disabled: i(l).isScanning
                }, [
                  i(l).isScanning && !i(l).currentScanPage ? (a(), z(i(he), {
                    key: 0,
                    class: "di-spin",
                    style: { width: "16px", height: "16px" }
                  })) : (a(), z(i(Xe), {
                    key: 1,
                    style: { width: "16px", height: "16px" }
                  })),
                  e("span", null, $(i(l).isScanning && !i(l).currentScanPage ? `スキャン中... ${i(l).scanProgress}%` : "ページ全体をスキャン"), 1)
                ], 8, at),
                e("button", {
                  onClick: N,
                  class: "di-scan-btn di-scan-btn-all",
                  disabled: i(l).isScanning,
                  title: i(u) ? "全ページをスキャン" : "Vue Routerが必要です"
                }, [
                  i(l).isScanning && i(l).currentScanPage ? (a(), z(i(he), {
                    key: 0,
                    class: "di-spin",
                    style: { width: "16px", height: "16px" }
                  })) : (a(), z(i(ze), {
                    key: 1,
                    style: { width: "16px", height: "16px" }
                  })),
                  e("span", null, $(i(l).currentScanPage ? `${i(l).currentScanPage}` : "全ページスキャン"), 1)
                ], 8, dt)
              ]),
              I.value && (E.value > 0 || U.value.length > 0) ? (a(), r("div", ut, [
                E.value > 0 ? (a(), r("div", rt, [
                  e("span", ct, $(E.value), 1),
                  s[14] || (s[14] = e("span", null, "件の要素を検出・登録しました", -1))
                ])) : x("", !0),
                (a(!0), r(A, null, K(U.value, (c) => (a(), r("div", {
                  key: c.page,
                  class: "di-scan-result-item"
                }, [
                  e("code", null, $(c.page), 1),
                  e("span", vt, $(c.count), 1)
                ]))), 128)),
                e("button", {
                  onClick: s[4] || (s[4] = (c) => {
                    I.value = !1, U.value = [];
                  }),
                  class: "di-scan-close"
                }, " 閉じる ")
              ])) : x("", !0)
            ]),
            e("div", pt, [
              h.value ? (a(), r(A, { key: 0 }, [
                e("div", yt, [
                  e("h2", ht, $(h.value.name), 1),
                  e("p", mt, $(h.value.description), 1)
                ]),
                e("div", ft, [
                  e("div", kt, [
                    g(i(ve), { style: { width: "16px", height: "16px" } }),
                    s[16] || (s[16] = e("span", null, "Component Path", -1))
                  ]),
                  e("code", bt, $(h.value.componentPath), 1)
                ]),
                h.value.figmaUrl ? (a(), r("div", gt, [
                  e("div", xt, [
                    g(i(qe), { style: { width: "16px", height: "16px" } }),
                    s[17] || (s[17] = e("span", null, "Figma Design", -1))
                  ]),
                  e("a", {
                    href: h.value.figmaUrl,
                    target: "_blank",
                    class: "di-link-purple"
                  }, $(h.value.figmaUrl), 9, wt)
                ])) : x("", !0),
                h.value.apis.length ? (a(), r("div", It, [
                  e("div", $t, [
                    g(i(Ke), { style: { width: "16px", height: "16px" } }),
                    s[18] || (s[18] = e("span", null, "API Endpoints", -1))
                  ]),
                  e("div", Ct, [
                    (a(!0), r(A, null, K(h.value.apis, (c, q) => (a(), r("div", {
                      key: q,
                      class: "di-api-item"
                    }, [
                      e("span", {
                        class: "di-method-badge",
                        style: H({ backgroundColor: B[c.method] + "20", color: B[c.method] })
                      }, $(c.method), 5),
                      e("div", Mt, [
                        e("code", Et, $(c.endpoint), 1),
                        e("p", Pt, $(c.description), 1)
                      ])
                    ]))), 128))
                  ])
                ])) : x("", !0),
                (k = h.value.notes) != null && k.length ? (a(), r("div", _t, [
                  e("div", Tt, [
                    g(i(je), { style: { width: "16px", height: "16px" } }),
                    s[19] || (s[19] = e("span", null, "Notes", -1))
                  ]),
                  e("ul", Ut, [
                    (a(!0), r(A, null, K(h.value.notes, (c, q) => (a(), r("li", {
                      key: q,
                      class: "di-note-item"
                    }, [
                      s[20] || (s[20] = e("span", { class: "di-bullet" }, "•", -1)),
                      e("span", null, $(c), 1)
                    ]))), 128))
                  ])
                ])) : x("", !0)
              ], 64)) : (a(), r("div", St, [
                g(i(ye), { style: { width: "48px", height: "48px", color: "#334155" } }),
                s[21] || (s[21] = e("p", null, [
                  L("この画面の仕様情報は"),
                  e("br"),
                  L("まだ登録されていません")
                ], -1))
              ])),
              e("div", Vt, [
                e("div", Dt, [
                  e("div", Lt, [
                    g(i(me), { style: { width: "16px", height: "16px" } }),
                    s[22] || (s[22] = e("span", null, "登録済み要素", -1)),
                    e("span", At, $(p.value), 1)
                  ])
                ]),
                p.value > 0 ? (a(), r("div", jt, [
                  e("button", {
                    onClick: j,
                    class: "di-btn-green"
                  }, [
                    g(i(Oe), { style: { width: "16px", height: "16px" } }),
                    s[23] || (s[23] = L(" Git管理用に保存 ", -1))
                  ]),
                  e("button", {
                    onClick: b,
                    class: "di-btn-blue"
                  }, [
                    g(i(Re), { style: { width: "16px", height: "16px" } }),
                    s[24] || (s[24] = L(" 画面仕様書 (xlsx) 出力 ", -1))
                  ])
                ])) : x("", !0),
                p.value > 0 ? (a(), r("p", Bt, [...s[25] || (s[25] = [
                  L(" JSON: ", -1),
                  e("code", null, "dev-annotations.json", -1),
                  L(" に配置してcommit ", -1)
                ])])) : x("", !0),
                e("div", qt, [
                  e("button", {
                    onClick: s[5] || (s[5] = (c) => m.value = !0),
                    class: "di-btn-small"
                  }, [
                    g(i(pe), { style: { width: "14px", height: "14px" } }),
                    s[26] || (s[26] = L(" エクスポート ", -1))
                  ]),
                  e("button", {
                    onClick: s[6] || (s[6] = (c) => P.value = !0),
                    class: "di-btn-small"
                  }, [
                    g(i(Ze), { style: { width: "14px", height: "14px" } }),
                    s[27] || (s[27] = L(" インポート ", -1))
                  ]),
                  p.value > 0 ? (a(), r("button", {
                    key: 0,
                    onClick: C,
                    class: "di-btn-small di-btn-danger"
                  }, [
                    g(i($e), { style: { width: "14px", height: "14px" } }),
                    s[28] || (s[28] = L(" 全削除 ", -1))
                  ])) : x("", !0)
                ])
              ])
            ]),
            s[29] || (s[29] = e("div", { class: "di-footer" }, [
              e("kbd", null, "Ctrl"),
              e("span", null, "+"),
              e("kbd", null, "Shift"),
              e("span", null, "+"),
              e("kbd", null, "D"),
              e("span", { class: "di-footer-text" }, "で開発者モード切替")
            ], -1))
          ])) : x("", !0)
        ])),
        (a(), z(W, { to: "body" }, [
          i(l).isEnabled ? (a(), r("div", Rt, [
            s[30] || (s[30] = e("span", { class: "di-indicator-dot" }, null, -1)),
            s[31] || (s[31] = L(" Developer Mode ", -1)),
            i(l).isEditMode ? (a(), r("span", Ot, "• 編集中")) : x("", !0)
          ])) : x("", !0)
        ])),
        (a(), z(W, { to: "body" }, [
          m.value ? (a(), r("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: s[8] || (s[8] = de((c) => m.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", zt, [
              s[33] || (s[33] = e("h3", { class: "di-modal-title" }, "設定をエクスポート", -1)),
              e("textarea", {
                readonly: "",
                value: i(l).exportConfigs(),
                class: "di-modal-textarea"
              }, null, 8, Ht),
              e("div", Nt, [
                e("button", {
                  onClick: s[7] || (s[7] = (c) => m.value = !1),
                  class: "di-btn-small"
                }, "閉じる"),
                e("button", {
                  onClick: O,
                  class: "di-btn-small di-btn-gray"
                }, [
                  g(i(pe), { style: { width: "14px", height: "14px" } }),
                  s[32] || (s[32] = L(" ファイル保存 ", -1))
                ]),
                e("button", {
                  onClick: R,
                  class: "di-btn-small di-btn-primary"
                }, "コピー")
              ])
            ])
          ])) : x("", !0)
        ])),
        (a(), z(W, { to: "body" }, [
          P.value ? (a(), r("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: s[11] || (s[11] = de((c) => P.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", Ft, [
              s[35] || (s[35] = e("h3", { class: "di-modal-title" }, "設定をインポート", -1)),
              e("label", Gt, [
                e("input", {
                  type: "file",
                  accept: ".json",
                  onChange: o
                }, null, 32),
                s[34] || (s[34] = e("span", null, "JSONファイルをドラッグまたはクリック", -1))
              ]),
              M(e("textarea", {
                "onUpdate:modelValue": s[9] || (s[9] = (c) => _.value = c),
                placeholder: "またはJSONを直接貼り付け...",
                class: "di-modal-textarea di-modal-textarea-input"
              }, null, 512), [
                [S, _.value]
              ]),
              T.value ? (a(), r("p", Xt, $(T.value), 1)) : x("", !0),
              e("div", Kt, [
                e("button", {
                  onClick: s[10] || (s[10] = (c) => {
                    P.value = !1, _.value = "", T.value = "";
                  }),
                  class: "di-btn-small"
                }, " キャンセル "),
                e("button", {
                  onClick: f,
                  disabled: !_.value,
                  class: "di-btn-small di-btn-primary"
                }, " インポート ", 8, Yt)
              ])
            ])
          ])) : x("", !0)
        ]))
      ], 64);
    };
  }
}), ue = (v, l) => {
  const u = v.__vccOpts || v;
  for (const [m, P] of l)
    u[m] = P;
  return u;
}, Jt = /* @__PURE__ */ ue(Zt, [["__scopeId", "data-v-b9516dc2"]]), Wt = { class: "di-editor-modal" }, Qt = { class: "di-editor-header" }, el = { class: "di-header-actions" }, tl = {
  key: 0,
  class: "di-static-indicator"
}, ll = {
  key: 1,
  class: "di-binding-indicator"
}, ol = {
  key: 0,
  class: "di-binding-source"
}, sl = { class: "di-editor-tabs" }, nl = { class: "di-editor-content" }, il = { class: "di-form-group" }, al = { class: "di-note-types" }, dl = ["onClick"], ul = { class: "di-form-group" }, rl = { class: "di-form-group" }, cl = { class: "di-form-row" }, vl = { class: "di-form-group" }, pl = { class: "di-form-group" }, yl = { class: "di-form-group" }, hl = ["value"], ml = { class: "di-form-group" }, fl = { class: "di-form-group" }, kl = { class: "di-form-group" }, bl = ["value"], gl = {
  key: 0,
  class: "di-form-row"
}, xl = {
  class: "di-form-group",
  style: { flex: "0 0 100px" }
}, wl = ["value"], Il = {
  class: "di-form-group",
  style: { flex: "1" }
}, $l = {
  key: 1,
  class: "di-form-group"
}, Cl = { class: "di-form-label" }, Ml = ["placeholder"], El = { class: "di-form-group" }, Pl = { class: "di-form-group" }, _l = { class: "di-form-group" }, Tl = { class: "di-form-row" }, Ul = { class: "di-form-group" }, Sl = { class: "di-form-group" }, Vl = { class: "di-form-group" }, Dl = { class: "di-form-group" }, Ll = { class: "di-form-group" }, Al = { class: "di-form-group" }, jl = { class: "di-form-group" }, Bl = { class: "di-form-group" }, ql = { class: "di-form-group" }, Rl = { class: "di-editor-footer" }, Ol = { class: "di-editor-actions" }, zl = /* @__PURE__ */ ne({
  __name: "DevElementEditor",
  setup(v) {
    const l = ie(), u = y("note"), m = y(""), P = y(""), _ = y(""), T = y(""), B = y(""), h = y("navigate"), p = y(""), R = y("GET"), O = y(""), j = y(""), b = y(""), f = y("info"), o = y(""), C = y(""), E = y(""), I = y(""), U = y(""), V = y(""), N = y(""), D = y(""), s = y(""), k = y(""), c = y(""), q = y(""), Y = y(""), Z = y(!1), Me = Q(() => l.editingElementId !== null), J = Q(() => l.editingElementId);
    fe(J, (X) => {
      var t, n, te, le, oe, F;
      if (X) {
        const d = l.getElementConfig(X);
        d != null && d.fieldInfo && (m.value = d.fieldInfo.table || "", P.value = d.fieldInfo.column || "", _.value = d.fieldInfo.type || "", T.value = ((t = d.fieldInfo.validation) == null ? void 0 : t.join(", ")) || "", B.value = d.fieldInfo.description || ""), d != null && d.actionInfo && (h.value = d.actionInfo.type || "navigate", p.value = d.actionInfo.target || "", R.value = d.actionInfo.method || "GET", O.value = d.actionInfo.description || ""), d != null && d.note && (j.value = d.note.text || "", b.value = d.note.author || "", f.value = d.note.type || "info"), d != null && d.links && (o.value = d.links.testPath || "", C.value = d.links.figmaUrl || "", E.value = d.links.githubIssue || "", I.value = d.links.githubPr || "", U.value = d.links.relatedDocs || ""), d != null && d.devMeta && (V.value = ((n = d.devMeta.usedStores) == null ? void 0 : n.join(", ")) || "", N.value = ((te = d.devMeta.usedComponents) == null ? void 0 : te.join(", ")) || "", D.value = ((le = d.devMeta.i18nKeys) == null ? void 0 : le.join(", ")) || "", s.value = ((oe = d.devMeta.designTokens) == null ? void 0 : oe.join(", ")) || "", k.value = d.devMeta.accessibility || "", c.value = d.devMeta.responsive || ""), d != null && d.sourceBinding && (q.value = d.sourceBinding.type || "", Y.value = d.sourceBinding.source || "", Z.value = d.sourceBinding.isStatic || !1), (F = d == null ? void 0 : d.note) != null && F.text ? u.value = "note" : d != null && d.fieldInfo ? u.value = "field" : d != null && d.actionInfo ? u.value = "action" : d != null && d.links ? u.value = "links" : d != null && d.devMeta ? u.value = "meta" : u.value = "note";
      } else
        re();
    });
    function re() {
      m.value = "", P.value = "", _.value = "", T.value = "", B.value = "", h.value = "navigate", p.value = "", R.value = "GET", O.value = "", j.value = "", b.value = "", f.value = "info", o.value = "", C.value = "", E.value = "", I.value = "", U.value = "", V.value = "", N.value = "", D.value = "", s.value = "", k.value = "", c.value = "", q.value = "", Y.value = "", Z.value = !1, u.value = "note";
    }
    function ee() {
      l.stopEditing(), re();
    }
    function Ee() {
      if (J.value)
        try {
          const X = document.querySelector(J.value);
          if (!X) return;
          const t = l.autoDetectElementInfo(X, J.value);
          t.sourceBinding && (q.value = t.sourceBinding.type || "", Y.value = t.sourceBinding.source || "", Z.value = t.sourceBinding.isStatic || !1, t.sourceBinding.isStatic && !j.value && (j.value = "固定文言", f.value = "info"));
        } catch (X) {
          console.error("[DevInspector] Auto-detect failed:", X);
        }
    }
    function Pe() {
      if (!J.value) return;
      const X = m.value && P.value ? {
        table: m.value,
        column: P.value,
        type: _.value || void 0,
        validation: T.value ? T.value.split(",").map((F) => F.trim()) : void 0,
        description: B.value || void 0
      } : void 0, t = p.value ? {
        type: h.value,
        target: p.value,
        method: h.value === "api" ? R.value : void 0,
        description: O.value || void 0
      } : void 0, n = j.value ? {
        text: j.value,
        author: b.value || void 0,
        type: f.value
      } : void 0, te = o.value || C.value || E.value || I.value || U.value ? {
        testPath: o.value || void 0,
        figmaUrl: C.value || void 0,
        githubIssue: E.value || void 0,
        githubPr: I.value || void 0,
        relatedDocs: U.value || void 0
      } : void 0, le = V.value || N.value || D.value || s.value || k.value || c.value ? {
        usedStores: V.value ? V.value.split(",").map((F) => F.trim()) : void 0,
        usedComponents: N.value ? N.value.split(",").map((F) => F.trim()) : void 0,
        i18nKeys: D.value ? D.value.split(",").map((F) => F.trim()) : void 0,
        designTokens: s.value ? s.value.split(",").map((F) => F.trim()) : void 0,
        accessibility: k.value || void 0,
        responsive: c.value || void 0
      } : void 0, oe = q.value ? {
        type: q.value,
        source: Y.value || void 0,
        isStatic: Z.value
      } : void 0;
      l.setElementConfig(J.value, {
        fieldInfo: X,
        actionInfo: t,
        note: n,
        links: te,
        devMeta: le,
        sourceBinding: oe
      }), ee();
    }
    function _e() {
      J.value && (l.deleteElementConfig(J.value), ee());
    }
    const Te = ["VARCHAR", "TEXT", "INT", "BIGINT", "BOOLEAN", "DATE", "DATETIME", "TIMESTAMP", "JSON"], Ue = [
      { value: "navigate", label: "画面遷移" },
      { value: "api", label: "API呼び出し" },
      { value: "modal", label: "モーダル表示" },
      { value: "emit", label: "イベント発火" },
      { value: "function", label: "関数実行" }
    ], Se = ["GET", "POST", "PUT", "DELETE", "PATCH"], Ve = [
      { value: "info", label: "情報", icon: Ie, color: "#60a5fa" },
      { value: "warning", label: "注意", icon: ge, color: "#fbbf24" },
      { value: "todo", label: "TODO", icon: xe, color: "#10b981" },
      { value: "question", label: "質問", icon: we, color: "#a78bfa" }
    ];
    return (X, t) => (a(), z(W, { to: "body" }, [
      Me.value ? (a(), r("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: de(ee, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", Wt, [
          e("div", Qt, [
            t[28] || (t[28] = e("h3", null, "要素情報を編集", -1)),
            e("div", el, [
              e("button", {
                onClick: Ee,
                class: "di-btn-auto",
                title: "自動検出"
              }, [
                g(i(Je), { style: { width: "16px", height: "16px" } })
              ]),
              e("button", {
                onClick: ee,
                class: "di-editor-close"
              }, [
                g(i(Ce), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          Z.value ? (a(), r("div", tl, [...t[29] || (t[29] = [
            e("span", { class: "di-static-badge" }, "固定文言", -1),
            e("span", { class: "di-static-hint" }, "このテキストはソースコードに直接記述されています", -1)
          ])])) : q.value ? (a(), r("div", ll, [
            e("span", {
              class: G(["di-binding-badge", "di-binding-" + q.value])
            }, $(q.value), 3),
            Y.value ? (a(), r("span", ol, $(Y.value), 1)) : x("", !0)
          ])) : x("", !0),
          e("div", sl, [
            e("button", {
              onClick: t[0] || (t[0] = (n) => u.value = "note"),
              class: G(["di-editor-tab", { active: u.value === "note" }]),
              style: H(u.value === "note" ? { color: "#10b981", borderColor: "#10b981", background: "rgba(16, 185, 129, 0.1)" } : {})
            }, [
              g(i(Ne), { style: { width: "12px", height: "12px" } }),
              t[30] || (t[30] = L(" メモ ", -1))
            ], 6),
            e("button", {
              onClick: t[1] || (t[1] = (n) => u.value = "field"),
              class: G(["di-editor-tab", { active: u.value === "field" }]),
              style: H(u.value === "field" ? { color: "#60a5fa", borderColor: "#60a5fa", background: "rgba(96, 165, 250, 0.1)" } : {})
            }, [
              g(i(Be), { style: { width: "12px", height: "12px" } }),
              t[31] || (t[31] = L(" データ ", -1))
            ], 6),
            e("button", {
              onClick: t[2] || (t[2] = (n) => u.value = "action"),
              class: G(["di-editor-tab", { active: u.value === "action" }]),
              style: H(u.value === "action" ? { color: "#a78bfa", borderColor: "#a78bfa", background: "rgba(167, 139, 250, 0.1)" } : {})
            }, [
              g(i(We), { style: { width: "12px", height: "12px" } }),
              t[32] || (t[32] = L(" アクション ", -1))
            ], 6),
            e("button", {
              onClick: t[3] || (t[3] = (n) => u.value = "links"),
              class: G(["di-editor-tab", { active: u.value === "links" }]),
              style: H(u.value === "links" ? { color: "#f59e0b", borderColor: "#f59e0b", background: "rgba(245, 158, 11, 0.1)" } : {})
            }, [
              g(i(He), { style: { width: "12px", height: "12px" } }),
              t[33] || (t[33] = L(" リンク ", -1))
            ], 6),
            e("button", {
              onClick: t[4] || (t[4] = (n) => u.value = "meta"),
              class: G(["di-editor-tab", { active: u.value === "meta" }]),
              style: H(u.value === "meta" ? { color: "#ec4899", borderColor: "#ec4899", background: "rgba(236, 72, 153, 0.1)" } : {})
            }, [
              g(i(Ye), { style: { width: "12px", height: "12px" } }),
              t[34] || (t[34] = L(" 開発情報 ", -1))
            ], 6)
          ]),
          e("div", nl, [
            u.value === "note" ? (a(), r(A, { key: 0 }, [
              e("div", il, [
                t[35] || (t[35] = e("label", { class: "di-form-label" }, "タイプ", -1)),
                e("div", al, [
                  (a(), r(A, null, K(Ve, (n) => e("button", {
                    key: n.value,
                    onClick: (te) => f.value = n.value,
                    class: "di-note-type-btn",
                    style: H(f.value === n.value ? { color: n.color, borderColor: n.color, background: n.color + "15" } : {})
                  }, [
                    (a(), z(ke(n.icon), {
                      style: H([{ width: "16px", height: "16px" }, { color: f.value === n.value ? n.color : "#64748b" }])
                    }, null, 8, ["style"])),
                    e("span", {
                      style: H({ color: f.value === n.value ? n.color : "#94a3b8" })
                    }, $(n.label), 5)
                  ], 12, dl)), 64))
                ])
              ]),
              e("div", ul, [
                t[36] || (t[36] = e("label", { class: "di-form-label" }, "メモ内容 *", -1)),
                M(e("textarea", {
                  "onUpdate:modelValue": t[5] || (t[5] = (n) => j.value = n),
                  rows: "4",
                  placeholder: "この要素についてのメモ、説明、注意事項など...",
                  class: "di-textarea"
                }, null, 512), [
                  [S, j.value]
                ])
              ]),
              e("div", rl, [
                t[37] || (t[37] = e("label", { class: "di-form-label" }, "記入者（オプション）", -1)),
                M(e("input", {
                  "onUpdate:modelValue": t[6] || (t[6] = (n) => b.value = n),
                  type: "text",
                  placeholder: "名前",
                  class: "di-input"
                }, null, 512), [
                  [S, b.value]
                ])
              ])
            ], 64)) : x("", !0),
            u.value === "field" ? (a(), r(A, { key: 1 }, [
              e("div", cl, [
                e("div", vl, [
                  t[38] || (t[38] = e("label", { class: "di-form-label" }, "テーブル名 *", -1)),
                  M(e("input", {
                    "onUpdate:modelValue": t[7] || (t[7] = (n) => m.value = n),
                    type: "text",
                    placeholder: "users",
                    class: "di-input"
                  }, null, 512), [
                    [S, m.value]
                  ])
                ]),
                e("div", pl, [
                  t[39] || (t[39] = e("label", { class: "di-form-label" }, "カラム名 *", -1)),
                  M(e("input", {
                    "onUpdate:modelValue": t[8] || (t[8] = (n) => P.value = n),
                    type: "text",
                    placeholder: "name",
                    class: "di-input"
                  }, null, 512), [
                    [S, P.value]
                  ])
                ])
              ]),
              e("div", yl, [
                t[41] || (t[41] = e("label", { class: "di-form-label" }, "データ型", -1)),
                M(e("select", {
                  "onUpdate:modelValue": t[9] || (t[9] = (n) => _.value = n),
                  class: "di-select"
                }, [
                  t[40] || (t[40] = e("option", { value: "" }, "選択してください", -1)),
                  (a(), r(A, null, K(Te, (n) => e("option", {
                    key: n,
                    value: n
                  }, $(n), 9, hl)), 64))
                ], 512), [
                  [ae, _.value]
                ])
              ]),
              e("div", ml, [
                t[42] || (t[42] = e("label", { class: "di-form-label" }, "バリデーション (カンマ区切り)", -1)),
                M(e("input", {
                  "onUpdate:modelValue": t[10] || (t[10] = (n) => T.value = n),
                  type: "text",
                  placeholder: "required, max:255",
                  class: "di-input"
                }, null, 512), [
                  [S, T.value]
                ])
              ]),
              e("div", fl, [
                t[43] || (t[43] = e("label", { class: "di-form-label" }, "説明", -1)),
                M(e("textarea", {
                  "onUpdate:modelValue": t[11] || (t[11] = (n) => B.value = n),
                  rows: "2",
                  placeholder: "このフィールドの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [S, B.value]
                ])
              ])
            ], 64)) : x("", !0),
            u.value === "action" ? (a(), r(A, { key: 2 }, [
              e("div", kl, [
                t[44] || (t[44] = e("label", { class: "di-form-label" }, "アクションタイプ", -1)),
                M(e("select", {
                  "onUpdate:modelValue": t[12] || (t[12] = (n) => h.value = n),
                  class: "di-select"
                }, [
                  (a(), r(A, null, K(Ue, (n) => e("option", {
                    key: n.value,
                    value: n.value
                  }, $(n.label), 9, bl)), 64))
                ], 512), [
                  [ae, h.value]
                ])
              ]),
              h.value === "api" ? (a(), r("div", gl, [
                e("div", xl, [
                  t[45] || (t[45] = e("label", { class: "di-form-label" }, "メソッド", -1)),
                  M(e("select", {
                    "onUpdate:modelValue": t[13] || (t[13] = (n) => R.value = n),
                    class: "di-select"
                  }, [
                    (a(), r(A, null, K(Se, (n) => e("option", {
                      key: n,
                      value: n
                    }, $(n), 9, wl)), 64))
                  ], 512), [
                    [ae, R.value]
                  ])
                ]),
                e("div", Il, [
                  t[46] || (t[46] = e("label", { class: "di-form-label" }, "エンドポイント", -1)),
                  M(e("input", {
                    "onUpdate:modelValue": t[14] || (t[14] = (n) => p.value = n),
                    type: "text",
                    placeholder: "/api/tasks",
                    class: "di-input"
                  }, null, 512), [
                    [S, p.value]
                  ])
                ])
              ])) : (a(), r("div", $l, [
                e("label", Cl, $(h.value === "navigate" ? "遷移先パス" : h.value === "modal" ? "モーダル名" : h.value === "emit" ? "イベント名" : "関数名"), 1),
                M(e("input", {
                  "onUpdate:modelValue": t[15] || (t[15] = (n) => p.value = n),
                  type: "text",
                  placeholder: h.value === "navigate" ? "/tasks" : h.value === "modal" ? "ConfirmDialog" : h.value === "emit" ? "onSubmit" : "handleClick",
                  class: "di-input"
                }, null, 8, Ml), [
                  [S, p.value]
                ])
              ])),
              e("div", El, [
                t[47] || (t[47] = e("label", { class: "di-form-label" }, "説明", -1)),
                M(e("textarea", {
                  "onUpdate:modelValue": t[16] || (t[16] = (n) => O.value = n),
                  rows: "2",
                  placeholder: "このアクションの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [S, O.value]
                ])
              ])
            ], 64)) : x("", !0),
            u.value === "links" ? (a(), r(A, { key: 3 }, [
              e("div", Pl, [
                t[48] || (t[48] = e("label", { class: "di-form-label" }, "テストファイルパス", -1)),
                M(e("input", {
                  "onUpdate:modelValue": t[17] || (t[17] = (n) => o.value = n),
                  type: "text",
                  placeholder: "src/__tests__/components/MyComponent.test.ts",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [S, o.value]
                ])
              ]),
              e("div", _l, [
                t[49] || (t[49] = e("label", { class: "di-form-label" }, "Figma URL", -1)),
                M(e("input", {
                  "onUpdate:modelValue": t[18] || (t[18] = (n) => C.value = n),
                  type: "text",
                  placeholder: "https://www.figma.com/design/...",
                  class: "di-input"
                }, null, 512), [
                  [S, C.value]
                ])
              ]),
              e("div", Tl, [
                e("div", Ul, [
                  t[50] || (t[50] = e("label", { class: "di-form-label" }, "GitHub Issue", -1)),
                  M(e("input", {
                    "onUpdate:modelValue": t[19] || (t[19] = (n) => E.value = n),
                    type: "text",
                    placeholder: "#123",
                    class: "di-input"
                  }, null, 512), [
                    [S, E.value]
                  ])
                ]),
                e("div", Sl, [
                  t[51] || (t[51] = e("label", { class: "di-form-label" }, "GitHub PR", -1)),
                  M(e("input", {
                    "onUpdate:modelValue": t[20] || (t[20] = (n) => I.value = n),
                    type: "text",
                    placeholder: "#456",
                    class: "di-input"
                  }, null, 512), [
                    [S, I.value]
                  ])
                ])
              ]),
              e("div", Vl, [
                t[52] || (t[52] = e("label", { class: "di-form-label" }, "関連ドキュメント", -1)),
                M(e("input", {
                  "onUpdate:modelValue": t[21] || (t[21] = (n) => U.value = n),
                  type: "text",
                  placeholder: "https://docs.example.com/...",
                  class: "di-input"
                }, null, 512), [
                  [S, U.value]
                ])
              ])
            ], 64)) : x("", !0),
            u.value === "meta" ? (a(), r(A, { key: 4 }, [
              e("div", Dl, [
                t[53] || (t[53] = e("label", { class: "di-form-label" }, "使用Piniaストア (カンマ区切り)", -1)),
                M(e("input", {
                  "onUpdate:modelValue": t[22] || (t[22] = (n) => V.value = n),
                  type: "text",
                  placeholder: "useUserStore, useThemeStore",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [S, V.value]
                ])
              ]),
              e("div", Ll, [
                t[54] || (t[54] = e("label", { class: "di-form-label" }, "使用コンポーネント (カンマ区切り)", -1)),
                M(e("input", {
                  "onUpdate:modelValue": t[23] || (t[23] = (n) => N.value = n),
                  type: "text",
                  placeholder: "Button, Modal, Input",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [S, N.value]
                ])
              ]),
              e("div", Al, [
                t[55] || (t[55] = e("label", { class: "di-form-label" }, "i18nキー (カンマ区切り)", -1)),
                M(e("input", {
                  "onUpdate:modelValue": t[24] || (t[24] = (n) => D.value = n),
                  type: "text",
                  placeholder: "common.save, errors.required",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [S, D.value]
                ])
              ]),
              e("div", jl, [
                t[56] || (t[56] = e("label", { class: "di-form-label" }, "デザイントークン (カンマ区切り)", -1)),
                M(e("input", {
                  "onUpdate:modelValue": t[25] || (t[25] = (n) => s.value = n),
                  type: "text",
                  placeholder: "primaryColor, secondaryColor",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [S, s.value]
                ])
              ]),
              e("div", Bl, [
                t[57] || (t[57] = e("label", { class: "di-form-label" }, "アクセシビリティ", -1)),
                M(e("textarea", {
                  "onUpdate:modelValue": t[26] || (t[26] = (n) => k.value = n),
                  rows: "2",
                  placeholder: "キーボード操作、スクリーンリーダー対応などのメモ...",
                  class: "di-textarea"
                }, null, 512), [
                  [S, k.value]
                ])
              ]),
              e("div", ql, [
                t[58] || (t[58] = e("label", { class: "di-form-label" }, "レスポンシブ動作", -1)),
                M(e("textarea", {
                  "onUpdate:modelValue": t[27] || (t[27] = (n) => c.value = n),
                  rows: "2",
                  placeholder: "モバイルでの表示変更、ブレークポイントなど...",
                  class: "di-textarea"
                }, null, 512), [
                  [S, c.value]
                ])
              ])
            ], 64)) : x("", !0)
          ]),
          e("div", Rl, [
            e("button", {
              onClick: _e,
              class: "di-btn-delete"
            }, [
              g(i($e), { style: { width: "14px", height: "14px" } }),
              t[59] || (t[59] = L(" 削除 ", -1))
            ]),
            e("div", Ol, [
              e("button", {
                onClick: ee,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: Pe,
                class: "di-btn-save"
              }, [
                g(i(Ge), { style: { width: "14px", height: "14px" } }),
                t[60] || (t[60] = L(" 保存 ", -1))
              ])
            ])
          ])
        ])
      ])) : x("", !0)
    ]));
  }
}), Hl = /* @__PURE__ */ ue(zl, [["__scopeId", "data-v-fdafa9a6"]]), Nl = { class: "di-highlight-label" }, Fl = {
  key: 1,
  "data-dev-inspector": "",
  class: "di-pick-banner"
}, Gl = ["title", "onClick"], Xl = ["onClick"], Kl = {
  "data-dev-inspector": "",
  class: "di-scan-banner"
}, Yl = /* @__PURE__ */ ne({
  __name: "DevPickOverlay",
  setup(v) {
    const l = ie(), u = y(null), m = y(null);
    function P(b) {
      const f = l.getElementConfig(b);
      if (!(f != null && f.note)) return null;
      const o = {
        info: Ie,
        warning: ge,
        todo: xe,
        question: we
      }, C = {
        info: "#60a5fa",
        warning: "#fbbf24",
        todo: "#10b981",
        question: "#a78bfa"
      };
      return {
        icon: o[f.note.type || "info"],
        color: C[f.note.type || "info"],
        text: f.note.text
      };
    }
    const _ = y(0), T = y(0), B = Q(() => {
      const b = _.value, f = T.value, o = [];
      if (!l.isEnabled) return o;
      const C = l.getConfiguredSelectors();
      for (const E of C)
        try {
          const I = document.querySelector(E);
          if (I) {
            const U = I.getBoundingClientRect();
            o.push({
              selector: E,
              element: I,
              top: U.top + b - 4,
              left: U.right + f + 4,
              noteInfo: P(E)
            });
          }
        } catch {
        }
      return o;
    }), h = Q(() => {
      var C;
      const b = _.value, f = T.value, o = [];
      if (!l.isEnabled || l.scanResults.length === 0) return o;
      for (const E of l.scanResults)
        try {
          const I = document.querySelector(E.selector);
          if (I) {
            const U = I.getBoundingClientRect();
            o.push({
              selector: E.selector,
              top: `${U.top + b}px`,
              left: `${U.left + f}px`,
              width: `${U.width}px`,
              height: `${U.height}px`,
              isStatic: ((C = E.detected.sourceBinding) == null ? void 0 : C.isStatic) || !1
            });
          }
        } catch {
        }
      return o;
    });
    function p(b) {
      if (!l.isPickMode) return;
      if (b.target.closest("[data-dev-inspector]")) {
        u.value = null, m.value = null, l.setHoveredSelector(null);
        return;
      }
      const o = document.elementFromPoint(b.clientX, b.clientY);
      if (!o || o === document.body || o === document.documentElement) {
        u.value = null, m.value = null, l.setHoveredSelector(null);
        return;
      }
      if (o.closest("[data-dev-inspector]"))
        return;
      m.value = o;
      const C = o.getBoundingClientRect();
      u.value = {
        top: `${C.top + window.scrollY}px`,
        left: `${C.left + window.scrollX}px`,
        width: `${C.width}px`,
        height: `${C.height}px`
      };
      const E = l.generateSelector(o);
      l.setHoveredSelector(E);
    }
    function R(b) {
      if (!(!l.isPickMode || b.target.closest("[data-dev-inspector]")) && (b.preventDefault(), b.stopPropagation(), m.value)) {
        const o = l.generateSelector(m.value);
        l.startEditing(o), l.togglePickMode();
      }
    }
    function O(b) {
      b.key === "Escape" && l.isPickMode && l.togglePickMode();
    }
    function j() {
      _.value = window.scrollY, T.value = window.scrollX;
    }
    return be(() => {
      window.addEventListener("mousemove", p, !0), window.addEventListener("click", R, !0), window.addEventListener("keydown", O), window.addEventListener("scroll", j), window.addEventListener("resize", j);
    }), Le(() => {
      window.removeEventListener("mousemove", p, !0), window.removeEventListener("click", R, !0), window.removeEventListener("keydown", O), window.removeEventListener("scroll", j), window.removeEventListener("resize", j);
    }), fe(() => l.isPickMode, (b) => {
      b || (u.value = null, m.value = null);
    }), (b, f) => (a(), z(W, { to: "body" }, [
      i(l).isPickMode && u.value ? (a(), r("div", {
        key: 0,
        "data-dev-inspector": "",
        class: "di-highlight",
        style: H({
          top: u.value.top,
          left: u.value.left,
          width: u.value.width,
          height: u.value.height
        })
      }, [
        e("div", Nl, $(i(l).hoveredSelector), 1)
      ], 4)) : x("", !0),
      i(l).isPickMode ? (a(), r("div", Fl, [...f[1] || (f[1] = [
        e("span", null, "要素をクリックしてメモを追加", -1),
        e("kbd", null, "ESC", -1),
        e("span", { class: "di-pick-hint" }, "でキャンセル", -1)
      ])])) : x("", !0),
      i(l).isEnabled && !i(l).isPickMode && !i(l).isEditMode ? (a(!0), r(A, { key: 2 }, K(B.value, (o) => (a(), r("div", {
        key: o.selector,
        "data-dev-inspector": "",
        class: "di-annotation-marker",
        style: H({
          top: `${o.top}px`,
          left: `${o.left}px`
        })
      }, [
        o.noteInfo ? (a(), r("div", {
          key: 0,
          class: "di-marker-dot",
          style: H({ backgroundColor: o.noteInfo.color }),
          title: o.noteInfo.text,
          onClick: (C) => i(l).startEditing(o.selector)
        }, [
          (a(), z(ke(o.noteInfo.icon), { style: { width: "10px", height: "10px", color: "white" } }))
        ], 12, Gl)) : x("", !0)
      ], 4))), 128)) : x("", !0),
      i(l).isEnabled && h.value.length > 0 ? (a(), r(A, { key: 3 }, [
        (a(!0), r(A, null, K(h.value, (o) => (a(), r("div", {
          key: "scan-" + o.selector,
          "data-dev-inspector": "",
          class: G(["di-scan-highlight", { "di-scan-static": o.isStatic }]),
          style: H({
            top: o.top,
            left: o.left,
            width: o.width,
            height: o.height
          }),
          onClick: (C) => i(l).startEditing(o.selector)
        }, [
          e("div", {
            class: G(["di-scan-label", { "di-scan-label-static": o.isStatic }])
          }, $(o.isStatic ? "固定文言" : "動的データ"), 3)
        ], 14, Xl))), 128)),
        e("div", Kl, [
          e("span", null, $(h.value.length) + "件の要素を検出", 1),
          e("button", {
            onClick: f[0] || (f[0] = (o) => i(l).clearScanResults()),
            class: "di-scan-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : x("", !0)
    ]));
  }
}), Zl = /* @__PURE__ */ ue(Yl, [["__scopeId", "data-v-5d22a4dd"]]), Jl = {
  key: 0,
  "data-dev-inspector": ""
}, Wl = /* @__PURE__ */ ne({
  __name: "DevInspector",
  props: {
    storageKey: { default: "devInspector:elementConfigs" },
    enabledInProduction: { type: Boolean, default: !1 },
    initialAnnotations: {}
  },
  setup(v) {
    const l = v, u = ie();
    return be(() => {
      u.init({
        storageKey: l.storageKey,
        enabledInProduction: l.enabledInProduction,
        initialAnnotations: l.initialAnnotations
      });
    }), (m, P) => i(u).isAvailable ? (a(), r("div", Jl, [
      g(Jt),
      g(Hl),
      g(Zl)
    ])) : x("", !0);
  }
}), to = {
  install(v, l = {}) {
    const { autoRegister: u = !0, ...m } = l;
    u && v.component("DevInspector", Wl), v.provide("devInspectorOptions", m);
  }
};
export {
  Hl as DevElementEditor,
  Wl as DevInspector,
  Jt as DevPanel,
  Zl as DevPickOverlay,
  to as VueDevInspector,
  to as default,
  so as useDevInspector,
  ie as useDevInspectorStore
};
