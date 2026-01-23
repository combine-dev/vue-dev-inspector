import { h as ce, defineComponent as ie, inject as _e, ref as y, computed as Q, openBlock as d, createElementBlock as c, Fragment as B, createBlock as F, Teleport as W, unref as n, createVNode as g, createCommentVNode as x, createElementVNode as e, normalizeClass as G, toDisplayString as w, renderList as K, normalizeStyle as H, createTextVNode as L, withModifiers as de, withDirectives as E, vModelText as V, watch as be, resolveDynamicComponent as Te, vModelSelect as ae, onMounted as fe, onUnmounted as Se } from "vue";
import { u as ne } from "./useDevInspector-gxxjoAzI.js";
import { a as so } from "./useDevInspector-gxxjoAzI.js";
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
const Ue = (v) => v.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), C = (v, l) => ({ size: u, strokeWidth: b = 2, absoluteStrokeWidth: P, color: U, class: D, ...R }, { attrs: h, slots: p }) => ce(
  "svg",
  {
    ...se,
    width: u || se.width,
    height: u || se.height,
    stroke: U || se.stroke,
    "stroke-width": P ? Number(b) * 24 / Number(u) : b,
    ...h,
    class: ["lucide", `lucide-${Ue(v)}`],
    ...R
  },
  [
    ...l.map((O) => ce(...O)),
    ...p.default ? [p.default()] : []
  ]
);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ve = C("AlertCircleIcon", [
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
const De = C("AlertTriangleIcon", [
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
const Le = C("CheckSquareIcon", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ve = C("CodeIcon", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ae = C("DatabaseIcon", [
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
const pe = C("DownloadIcon", [
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
const Be = C("ExternalLinkIcon", [
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
const je = C("FileSpreadsheetIcon", [
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
const ye = C("FileTextIcon", [
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
const Re = C("GitBranchIcon", [
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
const qe = C("GlobeIcon", [
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
const Oe = C("HelpCircleIcon", [
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
const ze = C("InfoIcon", [
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
const He = C("LinkIcon", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const he = C("Loader2Icon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ne = C("MessageSquareIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fe = C("MousePointer2Icon", [
  ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const me = C("PenLineIcon", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ge = C("SaveIcon", [
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
const Xe = C("ScanIcon", [
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
const Ke = C("ServerIcon", [
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
const Ye = C("Settings2Icon", [
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
const ke = C("Trash2Icon", [
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
const Ze = C("UploadIcon", [
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
const Je = C("Wand2Icon", [
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
const ge = C("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const We = C("ZapIcon", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
]);
async function Qe(v, l, u = {}) {
  var m;
  const b = await import("./xlsx-BopDBbWb.js"), { systemName: P = "System", author: U = "" } = u, D = /* @__PURE__ */ new Date(), R = `${D.getFullYear()}/${D.getMonth() + 1}/${D.getDate()}`, h = b.utils.book_new(), p = [];
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
    U,
    "",
    "作成日",
    "",
    "",
    "",
    "",
    R
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
  ]), Object.values(l).forEach((o, M) => {
    var A, $, s;
    const _ = o.id;
    let I = "", T = "", S = "";
    if ((A = o.note) != null && A.text && (I = o.note.text), o.fieldInfo && (I += I ? `
` : "", I += `DB: ${o.fieldInfo.table}.${o.fieldInfo.column}`, o.fieldInfo.type && (I += ` (${o.fieldInfo.type})`), o.fieldInfo.description && (I += `
${o.fieldInfo.description}`)), o.actionInfo && (S = `[${{
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行"
    }[o.actionInfo.type] || o.actionInfo.type}]`, o.actionInfo.target && (S += ` ${o.actionInfo.method || ""} ${o.actionInfo.target}`), o.actionInfo.description && (S += `
${o.actionInfo.description}`)), o.links) {
      const f = [];
      o.links.testPath && f.push(`テスト: ${o.links.testPath}`), o.links.figmaUrl && f.push(`Figma: ${o.links.figmaUrl}`), o.links.githubIssue && f.push(`Issue: ${o.links.githubIssue}`), o.links.githubPr && f.push(`PR: ${o.links.githubPr}`), f.length > 0 && (S += S ? `

` : "", S += f.join(`
`));
    }
    if (o.devMeta) {
      const f = [];
      ($ = o.devMeta.usedStores) != null && $.length && f.push(`Store: ${o.devMeta.usedStores.join(", ")}`), (s = o.devMeta.usedComponents) != null && s.length && f.push(`Components: ${o.devMeta.usedComponents.join(", ")}`), o.devMeta.accessibility && f.push(`A11y: ${o.devMeta.accessibility}`), o.devMeta.responsive && f.push(`Responsive: ${o.devMeta.responsive}`), f.length > 0 && (S += S ? `

` : "", S += `[開発情報]
` + f.join(`
`));
    }
    p.push([
      "",
      M + 1,
      "",
      _,
      "",
      "",
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
      T,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      S
    ]);
  });
  const z = b.utils.aoa_to_sheet(p);
  z["!cols"] = [
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
  ], b.utils.book_append_sheet(h, z, "画面設計書");
  const k = `画面仕様書_${((m = v == null ? void 0 : v.name) == null ? void 0 : m.replace(/[/\\?%*:|"<>]/g, "-")) || "screen"}_${R.replace(/\//g, "")}.xlsx`;
  return b.writeFile(h, k), k;
}
const et = {
  key: 0,
  class: "di-panel",
  "data-dev-inspector": ""
}, tt = { class: "di-header" }, lt = { class: "di-header-title" }, ot = { class: "di-edit-section" }, st = { class: "di-edit-row" }, it = { class: "di-edit-label" }, nt = { class: "di-scan-section" }, at = ["disabled"], dt = ["disabled", "title"], ut = {
  key: 0,
  class: "di-scan-results"
}, rt = {
  key: 0,
  class: "di-scan-result-item"
}, ct = { class: "di-scan-result-count" }, vt = { class: "di-scan-result-count" }, pt = { class: "di-content" }, yt = { class: "di-section" }, ht = { class: "di-screen-name" }, mt = { class: "di-screen-desc" }, bt = { class: "di-card" }, ft = { class: "di-card-label" }, kt = { class: "di-code-blue" }, gt = {
  key: 0,
  class: "di-card"
}, xt = { class: "di-card-label" }, wt = ["href"], Ct = {
  key: 1,
  class: "di-card"
}, $t = { class: "di-card-label" }, It = { class: "di-api-list" }, Mt = { class: "di-api-info" }, Et = { class: "di-api-endpoint" }, Pt = { class: "di-api-desc" }, _t = {
  key: 2,
  class: "di-card"
}, Tt = { class: "di-card-label" }, St = { class: "di-notes-list" }, Ut = {
  key: 1,
  class: "di-no-spec"
}, Vt = { class: "di-card" }, Dt = { class: "di-card-header" }, Lt = { class: "di-card-label" }, At = { class: "di-count-badge" }, Bt = {
  key: 0,
  class: "di-export-buttons"
}, jt = {
  key: 1,
  class: "di-export-hint"
}, Rt = { class: "di-action-buttons" }, qt = {
  key: 0,
  class: "di-indicator",
  "data-dev-inspector": ""
}, Ot = {
  key: 0,
  class: "di-indicator-edit"
}, zt = { class: "di-modal" }, Ht = ["value"], Nt = { class: "di-modal-actions" }, Ft = { class: "di-modal" }, Gt = { class: "di-file-drop" }, Xt = {
  key: 0,
  class: "di-error"
}, Kt = { class: "di-modal-actions" }, Yt = ["disabled"], Zt = /* @__PURE__ */ ie({
  __name: "DevPanel",
  setup(v) {
    const l = ne(), u = _e("router", null), b = y(!1), P = y(!1), U = y(""), D = y(""), R = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, h = Q(() => l.currentScreenSpec), p = Q(() => Object.keys(l.elementConfigs).length);
    function O() {
      const $ = l.exportConfigs();
      navigator.clipboard.writeText($), b.value = !1;
    }
    function z() {
      const $ = l.exportConfigs(), s = new Blob([$], { type: "application/json" }), f = URL.createObjectURL(s), r = document.createElement("a");
      r.href = f, r.download = "dev-mode-configs.json", r.click(), URL.revokeObjectURL(f), b.value = !1;
    }
    function j() {
      l.downloadAnnotations();
    }
    async function k() {
      try {
        await Qe(
          l.currentScreenSpec,
          l.elementConfigs,
          { systemName: "System" }
        );
      } catch ($) {
        console.error("Failed to export xlsx:", $), alert("xlsx export failed. Make sure xlsx package is installed.");
      }
    }
    function m() {
      try {
        l.importConfigs(U.value), U.value = "", D.value = "", P.value = !1;
      } catch {
        D.value = "JSONの形式が正しくありません";
      }
    }
    function o($) {
      var q;
      const f = (q = $.target.files) == null ? void 0 : q[0];
      if (!f) return;
      const r = new FileReader();
      r.onload = (Y) => {
        var Z;
        U.value = (Z = Y.target) == null ? void 0 : Z.result;
      }, r.readAsText(f);
    }
    function M() {
      confirm("すべての要素設定を削除しますか？") && l.clearAllConfigs();
    }
    const _ = y(0), I = y(!1), T = y([]);
    async function S() {
      I.value = !0, _.value = await l.scanCurrentPage();
    }
    async function A() {
      if (!u) {
        alert("Vue Routerが見つかりません。全ページスキャンにはVue Routerが必要です。");
        return;
      }
      confirm("全ページをスキャンします。ページ遷移が発生しますがよろしいですか？") && (I.value = !0, T.value = await l.scanAllPages(u));
    }
    return ($, s) => {
      var f;
      return d(), c(B, null, [
        (d(), F(W, { to: "body" }, [
          n(l).isEnabled && !n(l).isPanelOpen ? (d(), c("button", {
            key: 0,
            onClick: s[0] || (s[0] = //@ts-ignore
            (...r) => n(l).openPanel && n(l).openPanel(...r)),
            class: "di-fab",
            title: "画面仕様を表示",
            "data-dev-inspector": ""
          }, [
            g(n(ye), { style: { width: "20px", height: "20px" } })
          ])) : x("", !0)
        ])),
        (d(), F(W, { to: "body" }, [
          n(l).isEnabled && n(l).isPanelOpen ? (d(), c("div", et, [
            e("div", tt, [
              e("div", lt, [
                g(n(ve), { style: { width: "20px", height: "20px", color: "#60a5fa" } }),
                s[12] || (s[12] = e("span", null, "Developer Mode", -1))
              ]),
              e("button", {
                onClick: s[1] || (s[1] = //@ts-ignore
                (...r) => n(l).closePanel && n(l).closePanel(...r)),
                class: "di-close-btn"
              }, [
                g(n(ge), { style: { width: "20px", height: "20px" } })
              ])
            ]),
            e("div", ot, [
              e("div", st, [
                e("div", it, [
                  g(n(me), { style: { width: "16px", height: "16px", color: "#fbbf24" } }),
                  s[13] || (s[13] = e("span", null, "編集モード", -1))
                ]),
                e("button", {
                  onClick: s[2] || (s[2] = //@ts-ignore
                  (...r) => n(l).toggleEditMode && n(l).toggleEditMode(...r)),
                  class: G(["di-toggle", { active: n(l).isEditMode }])
                }, [
                  e("span", {
                    class: G(["di-toggle-knob", { active: n(l).isEditMode }])
                  }, null, 2)
                ], 2)
              ]),
              s[15] || (s[15] = e("p", { class: "di-edit-hint" }, "ONにすると、要素をクリックして情報を編集できます", -1)),
              e("button", {
                onClick: s[3] || (s[3] = //@ts-ignore
                (...r) => n(l).togglePickMode && n(l).togglePickMode(...r)),
                class: G(["di-pick-btn", { active: n(l).isPickMode }])
              }, [
                g(n(Fe), { style: { width: "16px", height: "16px" } }),
                e("span", null, w(n(l).isPickMode ? "要素選択中..." : "任意の要素にメモを追加"), 1)
              ], 2),
              e("div", nt, [
                e("button", {
                  onClick: S,
                  class: "di-scan-btn",
                  disabled: n(l).isScanning
                }, [
                  n(l).isScanning && !n(l).currentScanPage ? (d(), F(n(he), {
                    key: 0,
                    class: "di-spin",
                    style: { width: "16px", height: "16px" }
                  })) : (d(), F(n(Xe), {
                    key: 1,
                    style: { width: "16px", height: "16px" }
                  })),
                  e("span", null, w(n(l).isScanning && !n(l).currentScanPage ? `スキャン中... ${n(l).scanProgress}%` : "ページ全体をスキャン"), 1)
                ], 8, at),
                e("button", {
                  onClick: A,
                  class: "di-scan-btn di-scan-btn-all",
                  disabled: n(l).isScanning,
                  title: n(u) ? "全ページをスキャン" : "Vue Routerが必要です"
                }, [
                  n(l).isScanning && n(l).currentScanPage ? (d(), F(n(he), {
                    key: 0,
                    class: "di-spin",
                    style: { width: "16px", height: "16px" }
                  })) : (d(), F(n(qe), {
                    key: 1,
                    style: { width: "16px", height: "16px" }
                  })),
                  e("span", null, w(n(l).currentScanPage ? `${n(l).currentScanPage}` : "全ページスキャン"), 1)
                ], 8, dt)
              ]),
              I.value && (_.value > 0 || T.value.length > 0) ? (d(), c("div", ut, [
                _.value > 0 ? (d(), c("div", rt, [
                  e("span", ct, w(_.value), 1),
                  s[14] || (s[14] = e("span", null, "件の要素を検出・登録しました", -1))
                ])) : x("", !0),
                (d(!0), c(B, null, K(T.value, (r) => (d(), c("div", {
                  key: r.page,
                  class: "di-scan-result-item"
                }, [
                  e("code", null, w(r.page), 1),
                  e("span", vt, w(r.count), 1)
                ]))), 128)),
                e("button", {
                  onClick: s[4] || (s[4] = (r) => {
                    I.value = !1, T.value = [];
                  }),
                  class: "di-scan-close"
                }, " 閉じる ")
              ])) : x("", !0)
            ]),
            e("div", pt, [
              h.value ? (d(), c(B, { key: 0 }, [
                e("div", yt, [
                  e("h2", ht, w(h.value.name), 1),
                  e("p", mt, w(h.value.description), 1)
                ]),
                e("div", bt, [
                  e("div", ft, [
                    g(n(ve), { style: { width: "16px", height: "16px" } }),
                    s[16] || (s[16] = e("span", null, "Component Path", -1))
                  ]),
                  e("code", kt, w(h.value.componentPath), 1)
                ]),
                h.value.figmaUrl ? (d(), c("div", gt, [
                  e("div", xt, [
                    g(n(Be), { style: { width: "16px", height: "16px" } }),
                    s[17] || (s[17] = e("span", null, "Figma Design", -1))
                  ]),
                  e("a", {
                    href: h.value.figmaUrl,
                    target: "_blank",
                    class: "di-link-purple"
                  }, w(h.value.figmaUrl), 9, wt)
                ])) : x("", !0),
                h.value.apis.length ? (d(), c("div", Ct, [
                  e("div", $t, [
                    g(n(Ke), { style: { width: "16px", height: "16px" } }),
                    s[18] || (s[18] = e("span", null, "API Endpoints", -1))
                  ]),
                  e("div", It, [
                    (d(!0), c(B, null, K(h.value.apis, (r, q) => (d(), c("div", {
                      key: q,
                      class: "di-api-item"
                    }, [
                      e("span", {
                        class: "di-method-badge",
                        style: H({ backgroundColor: R[r.method] + "20", color: R[r.method] })
                      }, w(r.method), 5),
                      e("div", Mt, [
                        e("code", Et, w(r.endpoint), 1),
                        e("p", Pt, w(r.description), 1)
                      ])
                    ]))), 128))
                  ])
                ])) : x("", !0),
                (f = h.value.notes) != null && f.length ? (d(), c("div", _t, [
                  e("div", Tt, [
                    g(n(Ve), { style: { width: "16px", height: "16px" } }),
                    s[19] || (s[19] = e("span", null, "Notes", -1))
                  ]),
                  e("ul", St, [
                    (d(!0), c(B, null, K(h.value.notes, (r, q) => (d(), c("li", {
                      key: q,
                      class: "di-note-item"
                    }, [
                      s[20] || (s[20] = e("span", { class: "di-bullet" }, "•", -1)),
                      e("span", null, w(r), 1)
                    ]))), 128))
                  ])
                ])) : x("", !0)
              ], 64)) : (d(), c("div", Ut, [
                g(n(ye), { style: { width: "48px", height: "48px", color: "#334155" } }),
                s[21] || (s[21] = e("p", null, [
                  L("この画面の仕様情報は"),
                  e("br"),
                  L("まだ登録されていません")
                ], -1))
              ])),
              e("div", Vt, [
                e("div", Dt, [
                  e("div", Lt, [
                    g(n(me), { style: { width: "16px", height: "16px" } }),
                    s[22] || (s[22] = e("span", null, "登録済み要素", -1)),
                    e("span", At, w(p.value), 1)
                  ])
                ]),
                p.value > 0 ? (d(), c("div", Bt, [
                  e("button", {
                    onClick: j,
                    class: "di-btn-green"
                  }, [
                    g(n(Re), { style: { width: "16px", height: "16px" } }),
                    s[23] || (s[23] = L(" Git管理用に保存 ", -1))
                  ]),
                  e("button", {
                    onClick: k,
                    class: "di-btn-blue"
                  }, [
                    g(n(je), { style: { width: "16px", height: "16px" } }),
                    s[24] || (s[24] = L(" 画面仕様書 (xlsx) 出力 ", -1))
                  ])
                ])) : x("", !0),
                p.value > 0 ? (d(), c("p", jt, [...s[25] || (s[25] = [
                  L(" JSON: ", -1),
                  e("code", null, "dev-annotations.json", -1),
                  L(" に配置してcommit ", -1)
                ])])) : x("", !0),
                e("div", Rt, [
                  e("button", {
                    onClick: s[5] || (s[5] = (r) => b.value = !0),
                    class: "di-btn-small"
                  }, [
                    g(n(pe), { style: { width: "14px", height: "14px" } }),
                    s[26] || (s[26] = L(" エクスポート ", -1))
                  ]),
                  e("button", {
                    onClick: s[6] || (s[6] = (r) => P.value = !0),
                    class: "di-btn-small"
                  }, [
                    g(n(Ze), { style: { width: "14px", height: "14px" } }),
                    s[27] || (s[27] = L(" インポート ", -1))
                  ]),
                  p.value > 0 ? (d(), c("button", {
                    key: 0,
                    onClick: M,
                    class: "di-btn-small di-btn-danger"
                  }, [
                    g(n(ke), { style: { width: "14px", height: "14px" } }),
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
        (d(), F(W, { to: "body" }, [
          n(l).isEnabled ? (d(), c("div", qt, [
            s[30] || (s[30] = e("span", { class: "di-indicator-dot" }, null, -1)),
            s[31] || (s[31] = L(" Developer Mode ", -1)),
            n(l).isEditMode ? (d(), c("span", Ot, "• 編集中")) : x("", !0)
          ])) : x("", !0)
        ])),
        (d(), F(W, { to: "body" }, [
          b.value ? (d(), c("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: s[8] || (s[8] = de((r) => b.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", zt, [
              s[33] || (s[33] = e("h3", { class: "di-modal-title" }, "設定をエクスポート", -1)),
              e("textarea", {
                readonly: "",
                value: n(l).exportConfigs(),
                class: "di-modal-textarea"
              }, null, 8, Ht),
              e("div", Nt, [
                e("button", {
                  onClick: s[7] || (s[7] = (r) => b.value = !1),
                  class: "di-btn-small"
                }, "閉じる"),
                e("button", {
                  onClick: z,
                  class: "di-btn-small di-btn-gray"
                }, [
                  g(n(pe), { style: { width: "14px", height: "14px" } }),
                  s[32] || (s[32] = L(" ファイル保存 ", -1))
                ]),
                e("button", {
                  onClick: O,
                  class: "di-btn-small di-btn-primary"
                }, "コピー")
              ])
            ])
          ])) : x("", !0)
        ])),
        (d(), F(W, { to: "body" }, [
          P.value ? (d(), c("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: s[11] || (s[11] = de((r) => P.value = !1, ["self"])),
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
              E(e("textarea", {
                "onUpdate:modelValue": s[9] || (s[9] = (r) => U.value = r),
                placeholder: "またはJSONを直接貼り付け...",
                class: "di-modal-textarea di-modal-textarea-input"
              }, null, 512), [
                [V, U.value]
              ]),
              D.value ? (d(), c("p", Xt, w(D.value), 1)) : x("", !0),
              e("div", Kt, [
                e("button", {
                  onClick: s[10] || (s[10] = (r) => {
                    P.value = !1, U.value = "", D.value = "";
                  }),
                  class: "di-btn-small"
                }, " キャンセル "),
                e("button", {
                  onClick: m,
                  disabled: !U.value,
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
  for (const [b, P] of l)
    u[b] = P;
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
}, sl = { class: "di-editor-tabs" }, il = { class: "di-editor-content" }, nl = { class: "di-form-group" }, al = { class: "di-note-types" }, dl = ["onClick"], ul = { class: "di-form-group" }, rl = { class: "di-form-group" }, cl = { class: "di-form-row" }, vl = { class: "di-form-group" }, pl = { class: "di-form-group" }, yl = { class: "di-form-group" }, hl = ["value"], ml = { class: "di-form-group" }, bl = { class: "di-form-group" }, fl = { class: "di-form-group" }, kl = ["value"], gl = {
  key: 0,
  class: "di-form-row"
}, xl = {
  class: "di-form-group",
  style: { flex: "0 0 100px" }
}, wl = ["value"], Cl = {
  class: "di-form-group",
  style: { flex: "1" }
}, $l = {
  key: 1,
  class: "di-form-group"
}, Il = { class: "di-form-label" }, Ml = ["placeholder"], El = { class: "di-form-group" }, Pl = { class: "di-form-group" }, _l = { class: "di-form-group" }, Tl = { class: "di-form-row" }, Sl = { class: "di-form-group" }, Ul = { class: "di-form-group" }, Vl = { class: "di-form-group" }, Dl = { class: "di-form-group" }, Ll = { class: "di-form-group" }, Al = { class: "di-form-group" }, Bl = { class: "di-form-group" }, jl = { class: "di-form-group" }, Rl = { class: "di-form-group" }, ql = { class: "di-editor-footer" }, Ol = { class: "di-editor-actions" }, zl = /* @__PURE__ */ ie({
  __name: "DevElementEditor",
  setup(v) {
    const l = ne(), u = y("note"), b = y(""), P = y(""), U = y(""), D = y(""), R = y(""), h = y("navigate"), p = y(""), O = y("GET"), z = y(""), j = y(""), k = y(""), m = y("info"), o = y(""), M = y(""), _ = y(""), I = y(""), T = y(""), S = y(""), A = y(""), $ = y(""), s = y(""), f = y(""), r = y(""), q = y(""), Y = y(""), Z = y(!1), xe = Q(() => l.editingElementId !== null), J = Q(() => l.editingElementId);
    be(J, (X) => {
      var t, i, te, le, oe, N;
      if (X) {
        const a = l.getElementConfig(X);
        a != null && a.fieldInfo && (b.value = a.fieldInfo.table || "", P.value = a.fieldInfo.column || "", U.value = a.fieldInfo.type || "", D.value = ((t = a.fieldInfo.validation) == null ? void 0 : t.join(", ")) || "", R.value = a.fieldInfo.description || ""), a != null && a.actionInfo && (h.value = a.actionInfo.type || "navigate", p.value = a.actionInfo.target || "", O.value = a.actionInfo.method || "GET", z.value = a.actionInfo.description || ""), a != null && a.note && (j.value = a.note.text || "", k.value = a.note.author || "", m.value = a.note.type || "info"), a != null && a.links && (o.value = a.links.testPath || "", M.value = a.links.figmaUrl || "", _.value = a.links.githubIssue || "", I.value = a.links.githubPr || "", T.value = a.links.relatedDocs || ""), a != null && a.devMeta && (S.value = ((i = a.devMeta.usedStores) == null ? void 0 : i.join(", ")) || "", A.value = ((te = a.devMeta.usedComponents) == null ? void 0 : te.join(", ")) || "", $.value = ((le = a.devMeta.i18nKeys) == null ? void 0 : le.join(", ")) || "", s.value = ((oe = a.devMeta.designTokens) == null ? void 0 : oe.join(", ")) || "", f.value = a.devMeta.accessibility || "", r.value = a.devMeta.responsive || ""), a != null && a.sourceBinding && (q.value = a.sourceBinding.type || "", Y.value = a.sourceBinding.source || "", Z.value = a.sourceBinding.isStatic || !1), (N = a == null ? void 0 : a.note) != null && N.text ? u.value = "note" : a != null && a.fieldInfo ? u.value = "field" : a != null && a.actionInfo ? u.value = "action" : a != null && a.links ? u.value = "links" : a != null && a.devMeta ? u.value = "meta" : u.value = "note";
      } else
        re();
    });
    function re() {
      b.value = "", P.value = "", U.value = "", D.value = "", R.value = "", h.value = "navigate", p.value = "", O.value = "GET", z.value = "", j.value = "", k.value = "", m.value = "info", o.value = "", M.value = "", _.value = "", I.value = "", T.value = "", S.value = "", A.value = "", $.value = "", s.value = "", f.value = "", r.value = "", q.value = "", Y.value = "", Z.value = !1, u.value = "note";
    }
    function ee() {
      l.stopEditing(), re();
    }
    function we() {
      if (J.value)
        try {
          const X = document.querySelector(J.value);
          if (!X) return;
          const t = l.autoDetectElementInfo(X, J.value);
          t.sourceBinding && (q.value = t.sourceBinding.type || "", Y.value = t.sourceBinding.source || "", Z.value = t.sourceBinding.isStatic || !1, t.sourceBinding.isStatic && !j.value && (j.value = "固定文言", m.value = "info"));
        } catch (X) {
          console.error("[DevInspector] Auto-detect failed:", X);
        }
    }
    function Ce() {
      if (!J.value) return;
      const X = b.value && P.value ? {
        table: b.value,
        column: P.value,
        type: U.value || void 0,
        validation: D.value ? D.value.split(",").map((N) => N.trim()) : void 0,
        description: R.value || void 0
      } : void 0, t = p.value ? {
        type: h.value,
        target: p.value,
        method: h.value === "api" ? O.value : void 0,
        description: z.value || void 0
      } : void 0, i = j.value ? {
        text: j.value,
        author: k.value || void 0,
        type: m.value
      } : void 0, te = o.value || M.value || _.value || I.value || T.value ? {
        testPath: o.value || void 0,
        figmaUrl: M.value || void 0,
        githubIssue: _.value || void 0,
        githubPr: I.value || void 0,
        relatedDocs: T.value || void 0
      } : void 0, le = S.value || A.value || $.value || s.value || f.value || r.value ? {
        usedStores: S.value ? S.value.split(",").map((N) => N.trim()) : void 0,
        usedComponents: A.value ? A.value.split(",").map((N) => N.trim()) : void 0,
        i18nKeys: $.value ? $.value.split(",").map((N) => N.trim()) : void 0,
        designTokens: s.value ? s.value.split(",").map((N) => N.trim()) : void 0,
        accessibility: f.value || void 0,
        responsive: r.value || void 0
      } : void 0, oe = q.value ? {
        type: q.value,
        source: Y.value || void 0,
        isStatic: Z.value
      } : void 0;
      l.setElementConfig(J.value, {
        fieldInfo: X,
        actionInfo: t,
        note: i,
        links: te,
        devMeta: le,
        sourceBinding: oe
      }), ee();
    }
    function $e() {
      J.value && (l.deleteElementConfig(J.value), ee());
    }
    const Ie = ["VARCHAR", "TEXT", "INT", "BIGINT", "BOOLEAN", "DATE", "DATETIME", "TIMESTAMP", "JSON"], Me = [
      { value: "navigate", label: "画面遷移" },
      { value: "api", label: "API呼び出し" },
      { value: "modal", label: "モーダル表示" },
      { value: "emit", label: "イベント発火" },
      { value: "function", label: "関数実行" }
    ], Ee = ["GET", "POST", "PUT", "DELETE", "PATCH"], Pe = [
      { value: "info", label: "情報", icon: ze, color: "#60a5fa" },
      { value: "warning", label: "注意", icon: De, color: "#fbbf24" },
      { value: "todo", label: "TODO", icon: Le, color: "#10b981" },
      { value: "question", label: "質問", icon: Oe, color: "#a78bfa" }
    ];
    return (X, t) => (d(), F(W, { to: "body" }, [
      xe.value ? (d(), c("div", {
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
                onClick: we,
                class: "di-btn-auto",
                title: "自動検出"
              }, [
                g(n(Je), { style: { width: "16px", height: "16px" } })
              ]),
              e("button", {
                onClick: ee,
                class: "di-editor-close"
              }, [
                g(n(ge), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          Z.value ? (d(), c("div", tl, [...t[29] || (t[29] = [
            e("span", { class: "di-static-badge" }, "固定文言", -1),
            e("span", { class: "di-static-hint" }, "このテキストはソースコードに直接記述されています", -1)
          ])])) : q.value ? (d(), c("div", ll, [
            e("span", {
              class: G(["di-binding-badge", "di-binding-" + q.value])
            }, w(q.value), 3),
            Y.value ? (d(), c("span", ol, w(Y.value), 1)) : x("", !0)
          ])) : x("", !0),
          e("div", sl, [
            e("button", {
              onClick: t[0] || (t[0] = (i) => u.value = "note"),
              class: G(["di-editor-tab", { active: u.value === "note" }]),
              style: H(u.value === "note" ? { color: "#10b981", borderColor: "#10b981", background: "rgba(16, 185, 129, 0.1)" } : {})
            }, [
              g(n(Ne), { style: { width: "12px", height: "12px" } }),
              t[30] || (t[30] = L(" メモ ", -1))
            ], 6),
            e("button", {
              onClick: t[1] || (t[1] = (i) => u.value = "field"),
              class: G(["di-editor-tab", { active: u.value === "field" }]),
              style: H(u.value === "field" ? { color: "#60a5fa", borderColor: "#60a5fa", background: "rgba(96, 165, 250, 0.1)" } : {})
            }, [
              g(n(Ae), { style: { width: "12px", height: "12px" } }),
              t[31] || (t[31] = L(" データ ", -1))
            ], 6),
            e("button", {
              onClick: t[2] || (t[2] = (i) => u.value = "action"),
              class: G(["di-editor-tab", { active: u.value === "action" }]),
              style: H(u.value === "action" ? { color: "#a78bfa", borderColor: "#a78bfa", background: "rgba(167, 139, 250, 0.1)" } : {})
            }, [
              g(n(We), { style: { width: "12px", height: "12px" } }),
              t[32] || (t[32] = L(" アクション ", -1))
            ], 6),
            e("button", {
              onClick: t[3] || (t[3] = (i) => u.value = "links"),
              class: G(["di-editor-tab", { active: u.value === "links" }]),
              style: H(u.value === "links" ? { color: "#f59e0b", borderColor: "#f59e0b", background: "rgba(245, 158, 11, 0.1)" } : {})
            }, [
              g(n(He), { style: { width: "12px", height: "12px" } }),
              t[33] || (t[33] = L(" リンク ", -1))
            ], 6),
            e("button", {
              onClick: t[4] || (t[4] = (i) => u.value = "meta"),
              class: G(["di-editor-tab", { active: u.value === "meta" }]),
              style: H(u.value === "meta" ? { color: "#ec4899", borderColor: "#ec4899", background: "rgba(236, 72, 153, 0.1)" } : {})
            }, [
              g(n(Ye), { style: { width: "12px", height: "12px" } }),
              t[34] || (t[34] = L(" 開発情報 ", -1))
            ], 6)
          ]),
          e("div", il, [
            u.value === "note" ? (d(), c(B, { key: 0 }, [
              e("div", nl, [
                t[35] || (t[35] = e("label", { class: "di-form-label" }, "タイプ", -1)),
                e("div", al, [
                  (d(), c(B, null, K(Pe, (i) => e("button", {
                    key: i.value,
                    onClick: (te) => m.value = i.value,
                    class: "di-note-type-btn",
                    style: H(m.value === i.value ? { color: i.color, borderColor: i.color, background: i.color + "15" } : {})
                  }, [
                    (d(), F(Te(i.icon), {
                      style: H([{ width: "16px", height: "16px" }, { color: m.value === i.value ? i.color : "#64748b" }])
                    }, null, 8, ["style"])),
                    e("span", {
                      style: H({ color: m.value === i.value ? i.color : "#94a3b8" })
                    }, w(i.label), 5)
                  ], 12, dl)), 64))
                ])
              ]),
              e("div", ul, [
                t[36] || (t[36] = e("label", { class: "di-form-label" }, "メモ内容 *", -1)),
                E(e("textarea", {
                  "onUpdate:modelValue": t[5] || (t[5] = (i) => j.value = i),
                  rows: "4",
                  placeholder: "この要素についてのメモ、説明、注意事項など...",
                  class: "di-textarea"
                }, null, 512), [
                  [V, j.value]
                ])
              ]),
              e("div", rl, [
                t[37] || (t[37] = e("label", { class: "di-form-label" }, "記入者（オプション）", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[6] || (t[6] = (i) => k.value = i),
                  type: "text",
                  placeholder: "名前",
                  class: "di-input"
                }, null, 512), [
                  [V, k.value]
                ])
              ])
            ], 64)) : x("", !0),
            u.value === "field" ? (d(), c(B, { key: 1 }, [
              e("div", cl, [
                e("div", vl, [
                  t[38] || (t[38] = e("label", { class: "di-form-label" }, "テーブル名 *", -1)),
                  E(e("input", {
                    "onUpdate:modelValue": t[7] || (t[7] = (i) => b.value = i),
                    type: "text",
                    placeholder: "users",
                    class: "di-input"
                  }, null, 512), [
                    [V, b.value]
                  ])
                ]),
                e("div", pl, [
                  t[39] || (t[39] = e("label", { class: "di-form-label" }, "カラム名 *", -1)),
                  E(e("input", {
                    "onUpdate:modelValue": t[8] || (t[8] = (i) => P.value = i),
                    type: "text",
                    placeholder: "name",
                    class: "di-input"
                  }, null, 512), [
                    [V, P.value]
                  ])
                ])
              ]),
              e("div", yl, [
                t[41] || (t[41] = e("label", { class: "di-form-label" }, "データ型", -1)),
                E(e("select", {
                  "onUpdate:modelValue": t[9] || (t[9] = (i) => U.value = i),
                  class: "di-select"
                }, [
                  t[40] || (t[40] = e("option", { value: "" }, "選択してください", -1)),
                  (d(), c(B, null, K(Ie, (i) => e("option", {
                    key: i,
                    value: i
                  }, w(i), 9, hl)), 64))
                ], 512), [
                  [ae, U.value]
                ])
              ]),
              e("div", ml, [
                t[42] || (t[42] = e("label", { class: "di-form-label" }, "バリデーション (カンマ区切り)", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[10] || (t[10] = (i) => D.value = i),
                  type: "text",
                  placeholder: "required, max:255",
                  class: "di-input"
                }, null, 512), [
                  [V, D.value]
                ])
              ]),
              e("div", bl, [
                t[43] || (t[43] = e("label", { class: "di-form-label" }, "説明", -1)),
                E(e("textarea", {
                  "onUpdate:modelValue": t[11] || (t[11] = (i) => R.value = i),
                  rows: "2",
                  placeholder: "このフィールドの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [V, R.value]
                ])
              ])
            ], 64)) : x("", !0),
            u.value === "action" ? (d(), c(B, { key: 2 }, [
              e("div", fl, [
                t[44] || (t[44] = e("label", { class: "di-form-label" }, "アクションタイプ", -1)),
                E(e("select", {
                  "onUpdate:modelValue": t[12] || (t[12] = (i) => h.value = i),
                  class: "di-select"
                }, [
                  (d(), c(B, null, K(Me, (i) => e("option", {
                    key: i.value,
                    value: i.value
                  }, w(i.label), 9, kl)), 64))
                ], 512), [
                  [ae, h.value]
                ])
              ]),
              h.value === "api" ? (d(), c("div", gl, [
                e("div", xl, [
                  t[45] || (t[45] = e("label", { class: "di-form-label" }, "メソッド", -1)),
                  E(e("select", {
                    "onUpdate:modelValue": t[13] || (t[13] = (i) => O.value = i),
                    class: "di-select"
                  }, [
                    (d(), c(B, null, K(Ee, (i) => e("option", {
                      key: i,
                      value: i
                    }, w(i), 9, wl)), 64))
                  ], 512), [
                    [ae, O.value]
                  ])
                ]),
                e("div", Cl, [
                  t[46] || (t[46] = e("label", { class: "di-form-label" }, "エンドポイント", -1)),
                  E(e("input", {
                    "onUpdate:modelValue": t[14] || (t[14] = (i) => p.value = i),
                    type: "text",
                    placeholder: "/api/tasks",
                    class: "di-input"
                  }, null, 512), [
                    [V, p.value]
                  ])
                ])
              ])) : (d(), c("div", $l, [
                e("label", Il, w(h.value === "navigate" ? "遷移先パス" : h.value === "modal" ? "モーダル名" : h.value === "emit" ? "イベント名" : "関数名"), 1),
                E(e("input", {
                  "onUpdate:modelValue": t[15] || (t[15] = (i) => p.value = i),
                  type: "text",
                  placeholder: h.value === "navigate" ? "/tasks" : h.value === "modal" ? "ConfirmDialog" : h.value === "emit" ? "onSubmit" : "handleClick",
                  class: "di-input"
                }, null, 8, Ml), [
                  [V, p.value]
                ])
              ])),
              e("div", El, [
                t[47] || (t[47] = e("label", { class: "di-form-label" }, "説明", -1)),
                E(e("textarea", {
                  "onUpdate:modelValue": t[16] || (t[16] = (i) => z.value = i),
                  rows: "2",
                  placeholder: "このアクションの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [V, z.value]
                ])
              ])
            ], 64)) : x("", !0),
            u.value === "links" ? (d(), c(B, { key: 3 }, [
              e("div", Pl, [
                t[48] || (t[48] = e("label", { class: "di-form-label" }, "テストファイルパス", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[17] || (t[17] = (i) => o.value = i),
                  type: "text",
                  placeholder: "src/__tests__/components/MyComponent.test.ts",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [V, o.value]
                ])
              ]),
              e("div", _l, [
                t[49] || (t[49] = e("label", { class: "di-form-label" }, "Figma URL", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[18] || (t[18] = (i) => M.value = i),
                  type: "text",
                  placeholder: "https://www.figma.com/design/...",
                  class: "di-input"
                }, null, 512), [
                  [V, M.value]
                ])
              ]),
              e("div", Tl, [
                e("div", Sl, [
                  t[50] || (t[50] = e("label", { class: "di-form-label" }, "GitHub Issue", -1)),
                  E(e("input", {
                    "onUpdate:modelValue": t[19] || (t[19] = (i) => _.value = i),
                    type: "text",
                    placeholder: "#123",
                    class: "di-input"
                  }, null, 512), [
                    [V, _.value]
                  ])
                ]),
                e("div", Ul, [
                  t[51] || (t[51] = e("label", { class: "di-form-label" }, "GitHub PR", -1)),
                  E(e("input", {
                    "onUpdate:modelValue": t[20] || (t[20] = (i) => I.value = i),
                    type: "text",
                    placeholder: "#456",
                    class: "di-input"
                  }, null, 512), [
                    [V, I.value]
                  ])
                ])
              ]),
              e("div", Vl, [
                t[52] || (t[52] = e("label", { class: "di-form-label" }, "関連ドキュメント", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[21] || (t[21] = (i) => T.value = i),
                  type: "text",
                  placeholder: "https://docs.example.com/...",
                  class: "di-input"
                }, null, 512), [
                  [V, T.value]
                ])
              ])
            ], 64)) : x("", !0),
            u.value === "meta" ? (d(), c(B, { key: 4 }, [
              e("div", Dl, [
                t[53] || (t[53] = e("label", { class: "di-form-label" }, "使用Piniaストア (カンマ区切り)", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[22] || (t[22] = (i) => S.value = i),
                  type: "text",
                  placeholder: "useUserStore, useThemeStore",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [V, S.value]
                ])
              ]),
              e("div", Ll, [
                t[54] || (t[54] = e("label", { class: "di-form-label" }, "使用コンポーネント (カンマ区切り)", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[23] || (t[23] = (i) => A.value = i),
                  type: "text",
                  placeholder: "Button, Modal, Input",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [V, A.value]
                ])
              ]),
              e("div", Al, [
                t[55] || (t[55] = e("label", { class: "di-form-label" }, "i18nキー (カンマ区切り)", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[24] || (t[24] = (i) => $.value = i),
                  type: "text",
                  placeholder: "common.save, errors.required",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [V, $.value]
                ])
              ]),
              e("div", Bl, [
                t[56] || (t[56] = e("label", { class: "di-form-label" }, "デザイントークン (カンマ区切り)", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[25] || (t[25] = (i) => s.value = i),
                  type: "text",
                  placeholder: "primaryColor, secondaryColor",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [V, s.value]
                ])
              ]),
              e("div", jl, [
                t[57] || (t[57] = e("label", { class: "di-form-label" }, "アクセシビリティ", -1)),
                E(e("textarea", {
                  "onUpdate:modelValue": t[26] || (t[26] = (i) => f.value = i),
                  rows: "2",
                  placeholder: "キーボード操作、スクリーンリーダー対応などのメモ...",
                  class: "di-textarea"
                }, null, 512), [
                  [V, f.value]
                ])
              ]),
              e("div", Rl, [
                t[58] || (t[58] = e("label", { class: "di-form-label" }, "レスポンシブ動作", -1)),
                E(e("textarea", {
                  "onUpdate:modelValue": t[27] || (t[27] = (i) => r.value = i),
                  rows: "2",
                  placeholder: "モバイルでの表示変更、ブレークポイントなど...",
                  class: "di-textarea"
                }, null, 512), [
                  [V, r.value]
                ])
              ])
            ], 64)) : x("", !0)
          ]),
          e("div", ql, [
            e("button", {
              onClick: $e,
              class: "di-btn-delete"
            }, [
              g(n(ke), { style: { width: "14px", height: "14px" } }),
              t[59] || (t[59] = L(" 削除 ", -1))
            ]),
            e("div", Ol, [
              e("button", {
                onClick: ee,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: Ce,
                class: "di-btn-save"
              }, [
                g(n(Ge), { style: { width: "14px", height: "14px" } }),
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
}, Gl = ["onClick"], Xl = ["onClick"], Kl = {
  "data-dev-inspector": "",
  class: "di-scan-banner"
}, Yl = /* @__PURE__ */ ie({
  __name: "DevPickOverlay",
  setup(v) {
    const l = ne(), u = y(null), b = y(null), P = y(0), U = y(0);
    function D(k) {
      var o;
      const m = l.getElementConfig(k);
      if (!(m != null && m.sourceBinding)) {
        const M = ((o = m == null ? void 0 : m.note) == null ? void 0 : o.type) || "info";
        return {
          info: "#60a5fa",
          warning: "#fbbf24",
          todo: "#10b981",
          question: "#a78bfa"
        }[M] || "#60a5fa";
      }
      return m.sourceBinding.isStatic ? "#10b981" : m.sourceBinding.type === "v-model" ? "#8b5cf6" : m.sourceBinding.type === "api" ? "#f59e0b" : "#60a5fa";
    }
    const R = Q(() => {
      var _, I;
      const k = P.value, m = U.value, o = [];
      if (!l.isEnabled) return o;
      const M = l.getConfiguredSelectors();
      for (const T of M)
        try {
          const S = document.querySelector(T);
          if (S) {
            const A = S.getBoundingClientRect(), $ = l.getElementConfig(T), s = ((_ = $ == null ? void 0 : $.sourceBinding) == null ? void 0 : _.isStatic) || !1, f = ((I = $ == null ? void 0 : $.sourceBinding) == null ? void 0 : I.type) || "";
            let r = "";
            s ? r = "固定" : f === "v-model" ? r = "フォーム" : f === "api" ? r = "データ" : r = "メモ", o.push({
              selector: T,
              top: `${A.top + k}px`,
              left: `${A.left + m}px`,
              width: `${A.width}px`,
              height: `${A.height}px`,
              color: D(T),
              isStatic: s,
              label: r
            });
          }
        } catch {
        }
      return o;
    }), h = Q(() => {
      var M;
      const k = P.value, m = U.value, o = [];
      if (!l.isEnabled || l.scanResults.length === 0) return o;
      for (const _ of l.scanResults)
        try {
          const I = document.querySelector(_.selector);
          if (I) {
            const T = I.getBoundingClientRect();
            o.push({
              selector: _.selector,
              top: `${T.top + k}px`,
              left: `${T.left + m}px`,
              width: `${T.width}px`,
              height: `${T.height}px`,
              isStatic: ((M = _.detected.sourceBinding) == null ? void 0 : M.isStatic) || !1
            });
          }
        } catch {
        }
      return o;
    });
    function p(k) {
      if (!l.isPickMode) return;
      if (k.target.closest("[data-dev-inspector]")) {
        u.value = null, b.value = null, l.setHoveredSelector(null);
        return;
      }
      const o = document.elementFromPoint(k.clientX, k.clientY);
      if (!o || o === document.body || o === document.documentElement) {
        u.value = null, b.value = null, l.setHoveredSelector(null);
        return;
      }
      if (o.closest("[data-dev-inspector]"))
        return;
      b.value = o;
      const M = o.getBoundingClientRect();
      u.value = {
        top: `${M.top + window.scrollY}px`,
        left: `${M.left + window.scrollX}px`,
        width: `${M.width}px`,
        height: `${M.height}px`
      };
      const _ = l.generateSelector(o);
      l.setHoveredSelector(_);
    }
    function O(k) {
      if (!(!l.isPickMode || k.target.closest("[data-dev-inspector]")) && (k.preventDefault(), k.stopPropagation(), b.value)) {
        const o = l.generateSelector(b.value);
        l.startEditing(o), l.togglePickMode();
      }
    }
    function z(k) {
      k.key === "Escape" && l.isPickMode && l.togglePickMode();
    }
    function j() {
      P.value = window.scrollY, U.value = window.scrollX;
    }
    return fe(() => {
      window.addEventListener("mousemove", p, !0), window.addEventListener("click", O, !0), window.addEventListener("keydown", z), window.addEventListener("scroll", j), window.addEventListener("resize", j);
    }), Se(() => {
      window.removeEventListener("mousemove", p, !0), window.removeEventListener("click", O, !0), window.removeEventListener("keydown", z), window.removeEventListener("scroll", j), window.removeEventListener("resize", j);
    }), be(() => l.isPickMode, (k) => {
      k || (u.value = null, b.value = null);
    }), (k, m) => (d(), F(W, { to: "body" }, [
      n(l).isPickMode && u.value ? (d(), c("div", {
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
        e("div", Nl, w(n(l).hoveredSelector), 1)
      ], 4)) : x("", !0),
      n(l).isPickMode ? (d(), c("div", Fl, [...m[1] || (m[1] = [
        e("span", null, "要素をクリックしてメモを追加", -1),
        e("kbd", null, "ESC", -1),
        e("span", { class: "di-pick-hint" }, "でキャンセル", -1)
      ])])) : x("", !0),
      n(l).isEnabled && !n(l).isPickMode && !n(l).isEditMode && !n(l).editingElementId && n(l).scanResults.length === 0 ? (d(!0), c(B, { key: 2 }, K(R.value, (o) => (d(), c("div", {
        key: o.selector,
        "data-dev-inspector": "",
        class: "di-annotation-box",
        style: H({
          top: o.top,
          left: o.left,
          width: o.width,
          height: o.height,
          borderColor: o.color,
          backgroundColor: o.color + "15"
        }),
        onClick: (M) => n(l).startEditing(o.selector)
      }, [
        e("div", {
          class: "di-annotation-label",
          style: H({ backgroundColor: o.color })
        }, w(o.label), 5)
      ], 12, Gl))), 128)) : x("", !0),
      n(l).isEnabled && !n(l).editingElementId && h.value.length > 0 ? (d(), c(B, { key: 3 }, [
        (d(!0), c(B, null, K(h.value, (o) => (d(), c("div", {
          key: "scan-" + o.selector,
          "data-dev-inspector": "",
          class: G(["di-scan-highlight", { "di-scan-static": o.isStatic }]),
          style: H({
            top: o.top,
            left: o.left,
            width: o.width,
            height: o.height
          }),
          onClick: (M) => n(l).startEditing(o.selector)
        }, [
          e("div", {
            class: G(["di-scan-label", { "di-scan-label-static": o.isStatic }])
          }, w(o.isStatic ? "固定文言" : "動的データ"), 3)
        ], 14, Xl))), 128)),
        e("div", Kl, [
          e("span", null, w(h.value.length) + "件の要素を検出", 1),
          e("button", {
            onClick: m[0] || (m[0] = (o) => n(l).clearScanResults()),
            class: "di-scan-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : x("", !0)
    ]));
  }
}), Zl = /* @__PURE__ */ ue(Yl, [["__scopeId", "data-v-355cdd92"]]), Jl = {
  key: 0,
  "data-dev-inspector": ""
}, Wl = /* @__PURE__ */ ie({
  __name: "DevInspector",
  props: {
    storageKey: { default: "devInspector:elementConfigs" },
    enabledInProduction: { type: Boolean, default: !1 },
    initialAnnotations: {}
  },
  setup(v) {
    const l = v, u = ne();
    return fe(() => {
      u.init({
        storageKey: l.storageKey,
        enabledInProduction: l.enabledInProduction,
        initialAnnotations: l.initialAnnotations
      });
    }), (b, P) => n(u).isAvailable ? (d(), c("div", Jl, [
      g(Jt),
      g(Hl),
      g(Zl)
    ])) : x("", !0);
  }
}), to = {
  install(v, l = {}) {
    const { autoRegister: u = !0, ...b } = l;
    u && v.component("DevInspector", Wl), v.provide("devInspectorOptions", b);
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
  ne as useDevInspectorStore
};
