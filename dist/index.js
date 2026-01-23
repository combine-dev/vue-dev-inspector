import { h as ce, defineComponent as ie, inject as Te, ref as y, computed as Q, openBlock as d, createElementBlock as c, Fragment as B, createBlock as F, Teleport as W, unref as n, createVNode as k, createCommentVNode as w, createElementVNode as e, normalizeClass as G, toDisplayString as $, renderList as K, normalizeStyle as H, createTextVNode as L, withModifiers as de, withDirectives as P, vModelText as V, watch as fe, resolveDynamicComponent as Se, vModelSelect as ae, onMounted as ke, onUnmounted as Ue } from "vue";
import { u as ne } from "./useDevInspector-BJOD4iUs.js";
import { a as no } from "./useDevInspector-BJOD4iUs.js";
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
const Ve = (v) => v.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), C = (v, l) => ({ size: u, strokeWidth: b = 2, absoluteStrokeWidth: _, color: U, class: D, ...R }, { attrs: h, slots: p }) => ce(
  "svg",
  {
    ...se,
    width: u || se.width,
    height: u || se.height,
    stroke: U || se.stroke,
    "stroke-width": _ ? Number(b) * 24 / Number(u) : b,
    ...h,
    class: ["lucide", `lucide-${Ve(v)}`],
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
const De = C("AlertCircleIcon", [
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
const Le = C("AlertTriangleIcon", [
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
const Ae = C("CheckSquareIcon", [
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
const Be = C("DatabaseIcon", [
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
const je = C("ExternalLinkIcon", [
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
const Re = C("FileSpreadsheetIcon", [
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
const qe = C("GitBranchIcon", [
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
const Oe = C("GlobeIcon", [
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
const ze = C("HelpCircleIcon", [
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
const He = C("InfoIcon", [
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
const Ne = C("LinkIcon", [
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
const Fe = C("MessageSquareIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ge = C("MousePointer2Icon", [
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
const Xe = C("SaveIcon", [
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
const be = C("ScanIcon", [
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
const ge = C("Trash2Icon", [
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
const xe = C("XIcon", [
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
  const b = await import("./xlsx-BopDBbWb.js"), { systemName: _ = "System", author: U = "" } = u, D = /* @__PURE__ */ new Date(), R = `${D.getFullYear()}/${D.getMonth() + 1}/${D.getDate()}`, h = b.utils.book_new(), p = [];
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
  ]), p.push([]), p.push(["機能概要"]), p.push([(v == null ? void 0 : v.description) || ""]), p.push([]), p.push(["画面レイアウト　figmaURL"]), p.push([(v == null ? void 0 : v.figmaUrl) || ""]), p.push([]), v != null && v.apis && v.apis.length > 0 && (p.push(["API一覧"]), p.push(["", "メソッド", "", "エンドポイント", "", "", "", "", "", "", "", "説明"]), v.apis.forEach((s) => {
    p.push(["", s.method, "", s.endpoint, "", "", "", "", "", "", "", s.description]);
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
  ]), Object.values(l).forEach((s, M) => {
    var A, x, o;
    const T = s.id;
    let I = "", S = "", E = "";
    if ((A = s.note) != null && A.text && (I = s.note.text), s.fieldInfo && (I += I ? `
` : "", I += `DB: ${s.fieldInfo.table}.${s.fieldInfo.column}`, s.fieldInfo.type && (I += ` (${s.fieldInfo.type})`), s.fieldInfo.description && (I += `
${s.fieldInfo.description}`)), s.actionInfo && (E = `[${{
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行"
    }[s.actionInfo.type] || s.actionInfo.type}]`, s.actionInfo.target && (E += ` ${s.actionInfo.method || ""} ${s.actionInfo.target}`), s.actionInfo.description && (E += `
${s.actionInfo.description}`)), s.links) {
      const f = [];
      s.links.testPath && f.push(`テスト: ${s.links.testPath}`), s.links.figmaUrl && f.push(`Figma: ${s.links.figmaUrl}`), s.links.githubIssue && f.push(`Issue: ${s.links.githubIssue}`), s.links.githubPr && f.push(`PR: ${s.links.githubPr}`), f.length > 0 && (E += E ? `

` : "", E += f.join(`
`));
    }
    if (s.devMeta) {
      const f = [];
      (x = s.devMeta.usedStores) != null && x.length && f.push(`Store: ${s.devMeta.usedStores.join(", ")}`), (o = s.devMeta.usedComponents) != null && o.length && f.push(`Components: ${s.devMeta.usedComponents.join(", ")}`), s.devMeta.accessibility && f.push(`A11y: ${s.devMeta.accessibility}`), s.devMeta.responsive && f.push(`Responsive: ${s.devMeta.responsive}`), f.length > 0 && (E += E ? `

` : "", E += `[開発情報]
` + f.join(`
`));
    }
    p.push([
      "",
      M + 1,
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
      S,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      E
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
  const g = `画面仕様書_${((m = v == null ? void 0 : v.name) == null ? void 0 : m.replace(/[/\\?%*:|"<>]/g, "-")) || "screen"}_${R.replace(/\//g, "")}.xlsx`;
  return b.writeFile(h, g), g;
}
const et = {
  key: 0,
  class: "di-panel",
  "data-dev-inspector": ""
}, tt = { class: "di-header" }, lt = { class: "di-header-title" }, ot = { class: "di-edit-section" }, st = { class: "di-edit-row" }, it = { class: "di-edit-label" }, nt = { class: "di-scan-section" }, at = ["disabled"], dt = ["disabled"], ut = { class: "di-scan-section" }, rt = ["disabled", "title"], ct = {
  key: 0,
  class: "di-scan-results"
}, vt = {
  key: 0,
  class: "di-scan-result-item"
}, pt = { class: "di-scan-result-count" }, yt = { class: "di-scan-result-count" }, ht = { class: "di-content" }, mt = { class: "di-section" }, bt = { class: "di-screen-name" }, ft = { class: "di-screen-desc" }, kt = { class: "di-card" }, gt = { class: "di-card-label" }, xt = { class: "di-code-blue" }, wt = {
  key: 0,
  class: "di-card"
}, $t = { class: "di-card-label" }, Ct = ["href"], It = {
  key: 1,
  class: "di-card"
}, Mt = { class: "di-card-label" }, Et = { class: "di-api-list" }, Pt = { class: "di-api-info" }, _t = { class: "di-api-endpoint" }, Tt = { class: "di-api-desc" }, St = {
  key: 2,
  class: "di-card"
}, Ut = { class: "di-card-label" }, Vt = { class: "di-notes-list" }, Dt = {
  key: 1,
  class: "di-no-spec"
}, Lt = { class: "di-card" }, At = { class: "di-card-header" }, Bt = { class: "di-card-label" }, jt = { class: "di-count-badge" }, Rt = {
  key: 0,
  class: "di-export-buttons"
}, qt = {
  key: 1,
  class: "di-export-hint"
}, Ot = { class: "di-action-buttons" }, zt = {
  key: 0,
  class: "di-indicator",
  "data-dev-inspector": ""
}, Ht = {
  key: 0,
  class: "di-indicator-edit"
}, Nt = { class: "di-modal" }, Ft = ["value"], Gt = { class: "di-modal-actions" }, Xt = { class: "di-modal" }, Kt = { class: "di-file-drop" }, Yt = {
  key: 0,
  class: "di-error"
}, Zt = { class: "di-modal-actions" }, Jt = ["disabled"], Wt = /* @__PURE__ */ ie({
  __name: "DevPanel",
  setup(v) {
    const l = ne(), u = Te("router", null), b = y(!1), _ = y(!1), U = y(""), D = y(""), R = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, h = Q(() => l.currentScreenSpec), p = Q(() => Object.keys(l.elementConfigs).length);
    function O() {
      const x = l.exportConfigs();
      navigator.clipboard.writeText(x), b.value = !1;
    }
    function z() {
      const x = l.exportConfigs(), o = new Blob([x], { type: "application/json" }), f = URL.createObjectURL(o), r = document.createElement("a");
      r.href = f, r.download = "dev-mode-configs.json", r.click(), URL.revokeObjectURL(f), b.value = !1;
    }
    function j() {
      l.downloadAnnotations();
    }
    async function g() {
      try {
        await Qe(
          l.currentScreenSpec,
          l.elementConfigs,
          { systemName: "System" }
        );
      } catch (x) {
        console.error("Failed to export xlsx:", x), alert("xlsx export failed. Make sure xlsx package is installed.");
      }
    }
    function m() {
      try {
        l.importConfigs(U.value), U.value = "", D.value = "", _.value = !1;
      } catch {
        D.value = "JSONの形式が正しくありません";
      }
    }
    function s(x) {
      var q;
      const f = (q = x.target.files) == null ? void 0 : q[0];
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
    const T = y(0), I = y(!1), S = y([]);
    async function E(x = !1) {
      I.value = !0, T.value = await l.scanCurrentPage({ rescan: x });
    }
    async function A() {
      if (!u) {
        alert("Vue Routerが見つかりません。全ページスキャンにはVue Routerが必要です。");
        return;
      }
      confirm("全ページをスキャンします。ページ遷移が発生しますがよろしいですか？") && (I.value = !0, S.value = await l.scanAllPages(u));
    }
    return (x, o) => {
      var f;
      return d(), c(B, null, [
        (d(), F(W, { to: "body" }, [
          n(l).isEnabled && !n(l).isPanelOpen ? (d(), c("button", {
            key: 0,
            onClick: o[0] || (o[0] = //@ts-ignore
            (...r) => n(l).openPanel && n(l).openPanel(...r)),
            class: "di-fab",
            title: "画面仕様を表示",
            "data-dev-inspector": ""
          }, [
            k(n(ye), { style: { width: "20px", height: "20px" } })
          ])) : w("", !0)
        ])),
        (d(), F(W, { to: "body" }, [
          n(l).isEnabled && n(l).isPanelOpen ? (d(), c("div", et, [
            e("div", tt, [
              e("div", lt, [
                k(n(ve), { style: { width: "20px", height: "20px", color: "#60a5fa" } }),
                o[14] || (o[14] = e("span", null, "Developer Mode", -1))
              ]),
              e("button", {
                onClick: o[1] || (o[1] = //@ts-ignore
                (...r) => n(l).closePanel && n(l).closePanel(...r)),
                class: "di-close-btn"
              }, [
                k(n(xe), { style: { width: "20px", height: "20px" } })
              ])
            ]),
            e("div", ot, [
              e("div", st, [
                e("div", it, [
                  k(n(me), { style: { width: "16px", height: "16px", color: "#fbbf24" } }),
                  o[15] || (o[15] = e("span", null, "編集モード", -1))
                ]),
                e("button", {
                  onClick: o[2] || (o[2] = //@ts-ignore
                  (...r) => n(l).toggleEditMode && n(l).toggleEditMode(...r)),
                  class: G(["di-toggle", { active: n(l).isEditMode }])
                }, [
                  e("span", {
                    class: G(["di-toggle-knob", { active: n(l).isEditMode }])
                  }, null, 2)
                ], 2)
              ]),
              o[18] || (o[18] = e("p", { class: "di-edit-hint" }, "ONにすると、要素をクリックして情報を編集できます", -1)),
              e("button", {
                onClick: o[3] || (o[3] = //@ts-ignore
                (...r) => n(l).togglePickMode && n(l).togglePickMode(...r)),
                class: G(["di-pick-btn", { active: n(l).isPickMode }])
              }, [
                k(n(Ge), { style: { width: "16px", height: "16px" } }),
                e("span", null, $(n(l).isPickMode ? "要素選択中..." : "任意の要素にメモを追加"), 1)
              ], 2),
              e("div", nt, [
                e("button", {
                  onClick: o[4] || (o[4] = (r) => E(!1)),
                  class: "di-scan-btn",
                  disabled: n(l).isScanning,
                  title: "新規要素のみスキャン"
                }, [
                  n(l).isScanning && !n(l).currentScanPage ? (d(), F(n(he), {
                    key: 0,
                    class: "di-spin",
                    style: { width: "16px", height: "16px" }
                  })) : (d(), F(n(be), {
                    key: 1,
                    style: { width: "16px", height: "16px" }
                  })),
                  e("span", null, $(n(l).isScanning && !n(l).currentScanPage ? `${n(l).scanProgress}%` : "スキャン"), 1)
                ], 8, at),
                e("button", {
                  onClick: o[5] || (o[5] = (r) => E(!0)),
                  class: "di-scan-btn di-scan-btn-rescan",
                  disabled: n(l).isScanning,
                  title: "既存の設定をクリアして再スキャン"
                }, [
                  k(n(be), { style: { width: "16px", height: "16px" } }),
                  o[16] || (o[16] = e("span", null, "再スキャン", -1))
                ], 8, dt)
              ]),
              e("div", ut, [
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
                  })) : (d(), F(n(Oe), {
                    key: 1,
                    style: { width: "16px", height: "16px" }
                  })),
                  e("span", null, $(n(l).currentScanPage ? `${n(l).currentScanPage}` : "全ページスキャン"), 1)
                ], 8, rt)
              ]),
              I.value && (T.value > 0 || S.value.length > 0) ? (d(), c("div", ct, [
                T.value > 0 ? (d(), c("div", vt, [
                  e("span", pt, $(T.value), 1),
                  o[17] || (o[17] = e("span", null, "件の要素を検出・登録しました", -1))
                ])) : w("", !0),
                (d(!0), c(B, null, K(S.value, (r) => (d(), c("div", {
                  key: r.page,
                  class: "di-scan-result-item"
                }, [
                  e("code", null, $(r.page), 1),
                  e("span", yt, $(r.count), 1)
                ]))), 128)),
                e("button", {
                  onClick: o[6] || (o[6] = (r) => {
                    I.value = !1, S.value = [];
                  }),
                  class: "di-scan-close"
                }, " 閉じる ")
              ])) : w("", !0)
            ]),
            e("div", ht, [
              h.value ? (d(), c(B, { key: 0 }, [
                e("div", mt, [
                  e("h2", bt, $(h.value.name), 1),
                  e("p", ft, $(h.value.description), 1)
                ]),
                e("div", kt, [
                  e("div", gt, [
                    k(n(ve), { style: { width: "16px", height: "16px" } }),
                    o[19] || (o[19] = e("span", null, "Component Path", -1))
                  ]),
                  e("code", xt, $(h.value.componentPath), 1)
                ]),
                h.value.figmaUrl ? (d(), c("div", wt, [
                  e("div", $t, [
                    k(n(je), { style: { width: "16px", height: "16px" } }),
                    o[20] || (o[20] = e("span", null, "Figma Design", -1))
                  ]),
                  e("a", {
                    href: h.value.figmaUrl,
                    target: "_blank",
                    class: "di-link-purple"
                  }, $(h.value.figmaUrl), 9, Ct)
                ])) : w("", !0),
                h.value.apis.length ? (d(), c("div", It, [
                  e("div", Mt, [
                    k(n(Ke), { style: { width: "16px", height: "16px" } }),
                    o[21] || (o[21] = e("span", null, "API Endpoints", -1))
                  ]),
                  e("div", Et, [
                    (d(!0), c(B, null, K(h.value.apis, (r, q) => (d(), c("div", {
                      key: q,
                      class: "di-api-item"
                    }, [
                      e("span", {
                        class: "di-method-badge",
                        style: H({ backgroundColor: R[r.method] + "20", color: R[r.method] })
                      }, $(r.method), 5),
                      e("div", Pt, [
                        e("code", _t, $(r.endpoint), 1),
                        e("p", Tt, $(r.description), 1)
                      ])
                    ]))), 128))
                  ])
                ])) : w("", !0),
                (f = h.value.notes) != null && f.length ? (d(), c("div", St, [
                  e("div", Ut, [
                    k(n(De), { style: { width: "16px", height: "16px" } }),
                    o[22] || (o[22] = e("span", null, "Notes", -1))
                  ]),
                  e("ul", Vt, [
                    (d(!0), c(B, null, K(h.value.notes, (r, q) => (d(), c("li", {
                      key: q,
                      class: "di-note-item"
                    }, [
                      o[23] || (o[23] = e("span", { class: "di-bullet" }, "•", -1)),
                      e("span", null, $(r), 1)
                    ]))), 128))
                  ])
                ])) : w("", !0)
              ], 64)) : (d(), c("div", Dt, [
                k(n(ye), { style: { width: "48px", height: "48px", color: "#334155" } }),
                o[24] || (o[24] = e("p", null, [
                  L("この画面の仕様情報は"),
                  e("br"),
                  L("まだ登録されていません")
                ], -1))
              ])),
              e("div", Lt, [
                e("div", At, [
                  e("div", Bt, [
                    k(n(me), { style: { width: "16px", height: "16px" } }),
                    o[25] || (o[25] = e("span", null, "登録済み要素", -1)),
                    e("span", jt, $(p.value), 1)
                  ])
                ]),
                p.value > 0 ? (d(), c("div", Rt, [
                  e("button", {
                    onClick: j,
                    class: "di-btn-green"
                  }, [
                    k(n(qe), { style: { width: "16px", height: "16px" } }),
                    o[26] || (o[26] = L(" Git管理用に保存 ", -1))
                  ]),
                  e("button", {
                    onClick: g,
                    class: "di-btn-blue"
                  }, [
                    k(n(Re), { style: { width: "16px", height: "16px" } }),
                    o[27] || (o[27] = L(" 画面仕様書 (xlsx) 出力 ", -1))
                  ])
                ])) : w("", !0),
                p.value > 0 ? (d(), c("p", qt, [...o[28] || (o[28] = [
                  L(" JSON: ", -1),
                  e("code", null, "dev-annotations.json", -1),
                  L(" に配置してcommit ", -1)
                ])])) : w("", !0),
                e("div", Ot, [
                  e("button", {
                    onClick: o[7] || (o[7] = (r) => b.value = !0),
                    class: "di-btn-small"
                  }, [
                    k(n(pe), { style: { width: "14px", height: "14px" } }),
                    o[29] || (o[29] = L(" エクスポート ", -1))
                  ]),
                  e("button", {
                    onClick: o[8] || (o[8] = (r) => _.value = !0),
                    class: "di-btn-small"
                  }, [
                    k(n(Ze), { style: { width: "14px", height: "14px" } }),
                    o[30] || (o[30] = L(" インポート ", -1))
                  ]),
                  p.value > 0 ? (d(), c("button", {
                    key: 0,
                    onClick: M,
                    class: "di-btn-small di-btn-danger"
                  }, [
                    k(n(ge), { style: { width: "14px", height: "14px" } }),
                    o[31] || (o[31] = L(" 全削除 ", -1))
                  ])) : w("", !0)
                ])
              ])
            ]),
            o[32] || (o[32] = e("div", { class: "di-footer" }, [
              e("kbd", null, "Ctrl"),
              e("span", null, "+"),
              e("kbd", null, "Shift"),
              e("span", null, "+"),
              e("kbd", null, "D"),
              e("span", { class: "di-footer-text" }, "で開発者モード切替")
            ], -1))
          ])) : w("", !0)
        ])),
        (d(), F(W, { to: "body" }, [
          n(l).isEnabled ? (d(), c("div", zt, [
            o[33] || (o[33] = e("span", { class: "di-indicator-dot" }, null, -1)),
            o[34] || (o[34] = L(" Developer Mode ", -1)),
            n(l).isEditMode ? (d(), c("span", Ht, "• 編集中")) : w("", !0)
          ])) : w("", !0)
        ])),
        (d(), F(W, { to: "body" }, [
          b.value ? (d(), c("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: o[10] || (o[10] = de((r) => b.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", Nt, [
              o[36] || (o[36] = e("h3", { class: "di-modal-title" }, "設定をエクスポート", -1)),
              e("textarea", {
                readonly: "",
                value: n(l).exportConfigs(),
                class: "di-modal-textarea"
              }, null, 8, Ft),
              e("div", Gt, [
                e("button", {
                  onClick: o[9] || (o[9] = (r) => b.value = !1),
                  class: "di-btn-small"
                }, "閉じる"),
                e("button", {
                  onClick: z,
                  class: "di-btn-small di-btn-gray"
                }, [
                  k(n(pe), { style: { width: "14px", height: "14px" } }),
                  o[35] || (o[35] = L(" ファイル保存 ", -1))
                ]),
                e("button", {
                  onClick: O,
                  class: "di-btn-small di-btn-primary"
                }, "コピー")
              ])
            ])
          ])) : w("", !0)
        ])),
        (d(), F(W, { to: "body" }, [
          _.value ? (d(), c("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: o[13] || (o[13] = de((r) => _.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", Xt, [
              o[38] || (o[38] = e("h3", { class: "di-modal-title" }, "設定をインポート", -1)),
              e("label", Kt, [
                e("input", {
                  type: "file",
                  accept: ".json",
                  onChange: s
                }, null, 32),
                o[37] || (o[37] = e("span", null, "JSONファイルをドラッグまたはクリック", -1))
              ]),
              P(e("textarea", {
                "onUpdate:modelValue": o[11] || (o[11] = (r) => U.value = r),
                placeholder: "またはJSONを直接貼り付け...",
                class: "di-modal-textarea di-modal-textarea-input"
              }, null, 512), [
                [V, U.value]
              ]),
              D.value ? (d(), c("p", Yt, $(D.value), 1)) : w("", !0),
              e("div", Zt, [
                e("button", {
                  onClick: o[12] || (o[12] = (r) => {
                    _.value = !1, U.value = "", D.value = "";
                  }),
                  class: "di-btn-small"
                }, " キャンセル "),
                e("button", {
                  onClick: m,
                  disabled: !U.value,
                  class: "di-btn-small di-btn-primary"
                }, " インポート ", 8, Jt)
              ])
            ])
          ])) : w("", !0)
        ]))
      ], 64);
    };
  }
}), ue = (v, l) => {
  const u = v.__vccOpts || v;
  for (const [b, _] of l)
    u[b] = _;
  return u;
}, Qt = /* @__PURE__ */ ue(Wt, [["__scopeId", "data-v-d1679917"]]), el = { class: "di-editor-modal" }, tl = { class: "di-editor-header" }, ll = { class: "di-header-actions" }, ol = {
  key: 0,
  class: "di-static-indicator"
}, sl = {
  key: 1,
  class: "di-binding-indicator"
}, il = {
  key: 0,
  class: "di-binding-source"
}, nl = { class: "di-editor-tabs" }, al = { class: "di-editor-content" }, dl = { class: "di-form-group" }, ul = { class: "di-note-types" }, rl = ["onClick"], cl = { class: "di-form-group" }, vl = { class: "di-form-group" }, pl = { class: "di-form-row" }, yl = { class: "di-form-group" }, hl = { class: "di-form-group" }, ml = { class: "di-form-group" }, bl = ["value"], fl = { class: "di-form-group" }, kl = { class: "di-form-group" }, gl = { class: "di-form-group" }, xl = ["value"], wl = {
  key: 0,
  class: "di-form-row"
}, $l = {
  class: "di-form-group",
  style: { flex: "0 0 100px" }
}, Cl = ["value"], Il = {
  class: "di-form-group",
  style: { flex: "1" }
}, Ml = {
  key: 1,
  class: "di-form-group"
}, El = { class: "di-form-label" }, Pl = ["placeholder"], _l = { class: "di-form-group" }, Tl = { class: "di-form-group" }, Sl = { class: "di-form-group" }, Ul = { class: "di-form-row" }, Vl = { class: "di-form-group" }, Dl = { class: "di-form-group" }, Ll = { class: "di-form-group" }, Al = { class: "di-form-group" }, Bl = { class: "di-form-group" }, jl = { class: "di-form-group" }, Rl = { class: "di-form-group" }, ql = { class: "di-form-group" }, Ol = { class: "di-form-group" }, zl = { class: "di-editor-footer" }, Hl = { class: "di-editor-actions" }, Nl = /* @__PURE__ */ ie({
  __name: "DevElementEditor",
  setup(v) {
    const l = ne(), u = y("note"), b = y(""), _ = y(""), U = y(""), D = y(""), R = y(""), h = y("navigate"), p = y(""), O = y("GET"), z = y(""), j = y(""), g = y(""), m = y("info"), s = y(""), M = y(""), T = y(""), I = y(""), S = y(""), E = y(""), A = y(""), x = y(""), o = y(""), f = y(""), r = y(""), q = y(""), Y = y(""), Z = y(!1), we = Q(() => l.editingElementId !== null), J = Q(() => l.editingElementId);
    fe(J, (X) => {
      var t, i, te, le, oe, N;
      if (X) {
        const a = l.getElementConfig(X);
        a != null && a.fieldInfo && (b.value = a.fieldInfo.table || "", _.value = a.fieldInfo.column || "", U.value = a.fieldInfo.type || "", D.value = ((t = a.fieldInfo.validation) == null ? void 0 : t.join(", ")) || "", R.value = a.fieldInfo.description || ""), a != null && a.actionInfo && (h.value = a.actionInfo.type || "navigate", p.value = a.actionInfo.target || "", O.value = a.actionInfo.method || "GET", z.value = a.actionInfo.description || ""), a != null && a.note && (j.value = a.note.text || "", g.value = a.note.author || "", m.value = a.note.type || "info"), a != null && a.links && (s.value = a.links.testPath || "", M.value = a.links.figmaUrl || "", T.value = a.links.githubIssue || "", I.value = a.links.githubPr || "", S.value = a.links.relatedDocs || ""), a != null && a.devMeta && (E.value = ((i = a.devMeta.usedStores) == null ? void 0 : i.join(", ")) || "", A.value = ((te = a.devMeta.usedComponents) == null ? void 0 : te.join(", ")) || "", x.value = ((le = a.devMeta.i18nKeys) == null ? void 0 : le.join(", ")) || "", o.value = ((oe = a.devMeta.designTokens) == null ? void 0 : oe.join(", ")) || "", f.value = a.devMeta.accessibility || "", r.value = a.devMeta.responsive || ""), a != null && a.sourceBinding && (q.value = a.sourceBinding.type || "", Y.value = a.sourceBinding.source || "", Z.value = a.sourceBinding.isStatic || !1), (N = a == null ? void 0 : a.note) != null && N.text ? u.value = "note" : a != null && a.fieldInfo ? u.value = "field" : a != null && a.actionInfo ? u.value = "action" : a != null && a.links ? u.value = "links" : a != null && a.devMeta ? u.value = "meta" : u.value = "note";
      } else
        re();
    });
    function re() {
      b.value = "", _.value = "", U.value = "", D.value = "", R.value = "", h.value = "navigate", p.value = "", O.value = "GET", z.value = "", j.value = "", g.value = "", m.value = "info", s.value = "", M.value = "", T.value = "", I.value = "", S.value = "", E.value = "", A.value = "", x.value = "", o.value = "", f.value = "", r.value = "", q.value = "", Y.value = "", Z.value = !1, u.value = "note";
    }
    function ee() {
      l.stopEditing(), re();
    }
    function $e() {
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
      const X = b.value && _.value ? {
        table: b.value,
        column: _.value,
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
        author: g.value || void 0,
        type: m.value
      } : void 0, te = s.value || M.value || T.value || I.value || S.value ? {
        testPath: s.value || void 0,
        figmaUrl: M.value || void 0,
        githubIssue: T.value || void 0,
        githubPr: I.value || void 0,
        relatedDocs: S.value || void 0
      } : void 0, le = E.value || A.value || x.value || o.value || f.value || r.value ? {
        usedStores: E.value ? E.value.split(",").map((N) => N.trim()) : void 0,
        usedComponents: A.value ? A.value.split(",").map((N) => N.trim()) : void 0,
        i18nKeys: x.value ? x.value.split(",").map((N) => N.trim()) : void 0,
        designTokens: o.value ? o.value.split(",").map((N) => N.trim()) : void 0,
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
    function Ie() {
      J.value && (l.deleteElementConfig(J.value), ee());
    }
    const Me = ["VARCHAR", "TEXT", "INT", "BIGINT", "BOOLEAN", "DATE", "DATETIME", "TIMESTAMP", "JSON"], Ee = [
      { value: "navigate", label: "画面遷移" },
      { value: "api", label: "API呼び出し" },
      { value: "modal", label: "モーダル表示" },
      { value: "emit", label: "イベント発火" },
      { value: "function", label: "関数実行" }
    ], Pe = ["GET", "POST", "PUT", "DELETE", "PATCH"], _e = [
      { value: "info", label: "情報", icon: He, color: "#60a5fa" },
      { value: "warning", label: "注意", icon: Le, color: "#fbbf24" },
      { value: "todo", label: "TODO", icon: Ae, color: "#10b981" },
      { value: "question", label: "質問", icon: ze, color: "#a78bfa" }
    ];
    return (X, t) => (d(), F(W, { to: "body" }, [
      we.value ? (d(), c("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: de(ee, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", el, [
          e("div", tl, [
            t[28] || (t[28] = e("h3", null, "要素情報を編集", -1)),
            e("div", ll, [
              e("button", {
                onClick: $e,
                class: "di-btn-auto",
                title: "自動検出"
              }, [
                k(n(Je), { style: { width: "16px", height: "16px" } })
              ]),
              e("button", {
                onClick: ee,
                class: "di-editor-close"
              }, [
                k(n(xe), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          Z.value ? (d(), c("div", ol, [...t[29] || (t[29] = [
            e("span", { class: "di-static-badge" }, "固定文言", -1),
            e("span", { class: "di-static-hint" }, "このテキストはソースコードに直接記述されています", -1)
          ])])) : q.value ? (d(), c("div", sl, [
            e("span", {
              class: G(["di-binding-badge", "di-binding-" + q.value])
            }, $(q.value), 3),
            Y.value ? (d(), c("span", il, $(Y.value), 1)) : w("", !0)
          ])) : w("", !0),
          e("div", nl, [
            e("button", {
              onClick: t[0] || (t[0] = (i) => u.value = "note"),
              class: G(["di-editor-tab", { active: u.value === "note" }]),
              style: H(u.value === "note" ? { color: "#10b981", borderColor: "#10b981", background: "rgba(16, 185, 129, 0.1)" } : {})
            }, [
              k(n(Fe), { style: { width: "12px", height: "12px" } }),
              t[30] || (t[30] = L(" メモ ", -1))
            ], 6),
            e("button", {
              onClick: t[1] || (t[1] = (i) => u.value = "field"),
              class: G(["di-editor-tab", { active: u.value === "field" }]),
              style: H(u.value === "field" ? { color: "#60a5fa", borderColor: "#60a5fa", background: "rgba(96, 165, 250, 0.1)" } : {})
            }, [
              k(n(Be), { style: { width: "12px", height: "12px" } }),
              t[31] || (t[31] = L(" データ ", -1))
            ], 6),
            e("button", {
              onClick: t[2] || (t[2] = (i) => u.value = "action"),
              class: G(["di-editor-tab", { active: u.value === "action" }]),
              style: H(u.value === "action" ? { color: "#a78bfa", borderColor: "#a78bfa", background: "rgba(167, 139, 250, 0.1)" } : {})
            }, [
              k(n(We), { style: { width: "12px", height: "12px" } }),
              t[32] || (t[32] = L(" アクション ", -1))
            ], 6),
            e("button", {
              onClick: t[3] || (t[3] = (i) => u.value = "links"),
              class: G(["di-editor-tab", { active: u.value === "links" }]),
              style: H(u.value === "links" ? { color: "#f59e0b", borderColor: "#f59e0b", background: "rgba(245, 158, 11, 0.1)" } : {})
            }, [
              k(n(Ne), { style: { width: "12px", height: "12px" } }),
              t[33] || (t[33] = L(" リンク ", -1))
            ], 6),
            e("button", {
              onClick: t[4] || (t[4] = (i) => u.value = "meta"),
              class: G(["di-editor-tab", { active: u.value === "meta" }]),
              style: H(u.value === "meta" ? { color: "#ec4899", borderColor: "#ec4899", background: "rgba(236, 72, 153, 0.1)" } : {})
            }, [
              k(n(Ye), { style: { width: "12px", height: "12px" } }),
              t[34] || (t[34] = L(" 開発情報 ", -1))
            ], 6)
          ]),
          e("div", al, [
            u.value === "note" ? (d(), c(B, { key: 0 }, [
              e("div", dl, [
                t[35] || (t[35] = e("label", { class: "di-form-label" }, "タイプ", -1)),
                e("div", ul, [
                  (d(), c(B, null, K(_e, (i) => e("button", {
                    key: i.value,
                    onClick: (te) => m.value = i.value,
                    class: "di-note-type-btn",
                    style: H(m.value === i.value ? { color: i.color, borderColor: i.color, background: i.color + "15" } : {})
                  }, [
                    (d(), F(Se(i.icon), {
                      style: H([{ width: "16px", height: "16px" }, { color: m.value === i.value ? i.color : "#64748b" }])
                    }, null, 8, ["style"])),
                    e("span", {
                      style: H({ color: m.value === i.value ? i.color : "#94a3b8" })
                    }, $(i.label), 5)
                  ], 12, rl)), 64))
                ])
              ]),
              e("div", cl, [
                t[36] || (t[36] = e("label", { class: "di-form-label" }, "メモ内容 *", -1)),
                P(e("textarea", {
                  "onUpdate:modelValue": t[5] || (t[5] = (i) => j.value = i),
                  rows: "4",
                  placeholder: "この要素についてのメモ、説明、注意事項など...",
                  class: "di-textarea"
                }, null, 512), [
                  [V, j.value]
                ])
              ]),
              e("div", vl, [
                t[37] || (t[37] = e("label", { class: "di-form-label" }, "記入者（オプション）", -1)),
                P(e("input", {
                  "onUpdate:modelValue": t[6] || (t[6] = (i) => g.value = i),
                  type: "text",
                  placeholder: "名前",
                  class: "di-input"
                }, null, 512), [
                  [V, g.value]
                ])
              ])
            ], 64)) : w("", !0),
            u.value === "field" ? (d(), c(B, { key: 1 }, [
              e("div", pl, [
                e("div", yl, [
                  t[38] || (t[38] = e("label", { class: "di-form-label" }, "テーブル名 *", -1)),
                  P(e("input", {
                    "onUpdate:modelValue": t[7] || (t[7] = (i) => b.value = i),
                    type: "text",
                    placeholder: "users",
                    class: "di-input"
                  }, null, 512), [
                    [V, b.value]
                  ])
                ]),
                e("div", hl, [
                  t[39] || (t[39] = e("label", { class: "di-form-label" }, "カラム名 *", -1)),
                  P(e("input", {
                    "onUpdate:modelValue": t[8] || (t[8] = (i) => _.value = i),
                    type: "text",
                    placeholder: "name",
                    class: "di-input"
                  }, null, 512), [
                    [V, _.value]
                  ])
                ])
              ]),
              e("div", ml, [
                t[41] || (t[41] = e("label", { class: "di-form-label" }, "データ型", -1)),
                P(e("select", {
                  "onUpdate:modelValue": t[9] || (t[9] = (i) => U.value = i),
                  class: "di-select"
                }, [
                  t[40] || (t[40] = e("option", { value: "" }, "選択してください", -1)),
                  (d(), c(B, null, K(Me, (i) => e("option", {
                    key: i,
                    value: i
                  }, $(i), 9, bl)), 64))
                ], 512), [
                  [ae, U.value]
                ])
              ]),
              e("div", fl, [
                t[42] || (t[42] = e("label", { class: "di-form-label" }, "バリデーション (カンマ区切り)", -1)),
                P(e("input", {
                  "onUpdate:modelValue": t[10] || (t[10] = (i) => D.value = i),
                  type: "text",
                  placeholder: "required, max:255",
                  class: "di-input"
                }, null, 512), [
                  [V, D.value]
                ])
              ]),
              e("div", kl, [
                t[43] || (t[43] = e("label", { class: "di-form-label" }, "説明", -1)),
                P(e("textarea", {
                  "onUpdate:modelValue": t[11] || (t[11] = (i) => R.value = i),
                  rows: "2",
                  placeholder: "このフィールドの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [V, R.value]
                ])
              ])
            ], 64)) : w("", !0),
            u.value === "action" ? (d(), c(B, { key: 2 }, [
              e("div", gl, [
                t[44] || (t[44] = e("label", { class: "di-form-label" }, "アクションタイプ", -1)),
                P(e("select", {
                  "onUpdate:modelValue": t[12] || (t[12] = (i) => h.value = i),
                  class: "di-select"
                }, [
                  (d(), c(B, null, K(Ee, (i) => e("option", {
                    key: i.value,
                    value: i.value
                  }, $(i.label), 9, xl)), 64))
                ], 512), [
                  [ae, h.value]
                ])
              ]),
              h.value === "api" ? (d(), c("div", wl, [
                e("div", $l, [
                  t[45] || (t[45] = e("label", { class: "di-form-label" }, "メソッド", -1)),
                  P(e("select", {
                    "onUpdate:modelValue": t[13] || (t[13] = (i) => O.value = i),
                    class: "di-select"
                  }, [
                    (d(), c(B, null, K(Pe, (i) => e("option", {
                      key: i,
                      value: i
                    }, $(i), 9, Cl)), 64))
                  ], 512), [
                    [ae, O.value]
                  ])
                ]),
                e("div", Il, [
                  t[46] || (t[46] = e("label", { class: "di-form-label" }, "エンドポイント", -1)),
                  P(e("input", {
                    "onUpdate:modelValue": t[14] || (t[14] = (i) => p.value = i),
                    type: "text",
                    placeholder: "/api/tasks",
                    class: "di-input"
                  }, null, 512), [
                    [V, p.value]
                  ])
                ])
              ])) : (d(), c("div", Ml, [
                e("label", El, $(h.value === "navigate" ? "遷移先パス" : h.value === "modal" ? "モーダル名" : h.value === "emit" ? "イベント名" : "関数名"), 1),
                P(e("input", {
                  "onUpdate:modelValue": t[15] || (t[15] = (i) => p.value = i),
                  type: "text",
                  placeholder: h.value === "navigate" ? "/tasks" : h.value === "modal" ? "ConfirmDialog" : h.value === "emit" ? "onSubmit" : "handleClick",
                  class: "di-input"
                }, null, 8, Pl), [
                  [V, p.value]
                ])
              ])),
              e("div", _l, [
                t[47] || (t[47] = e("label", { class: "di-form-label" }, "説明", -1)),
                P(e("textarea", {
                  "onUpdate:modelValue": t[16] || (t[16] = (i) => z.value = i),
                  rows: "2",
                  placeholder: "このアクションの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [V, z.value]
                ])
              ])
            ], 64)) : w("", !0),
            u.value === "links" ? (d(), c(B, { key: 3 }, [
              e("div", Tl, [
                t[48] || (t[48] = e("label", { class: "di-form-label" }, "テストファイルパス", -1)),
                P(e("input", {
                  "onUpdate:modelValue": t[17] || (t[17] = (i) => s.value = i),
                  type: "text",
                  placeholder: "src/__tests__/components/MyComponent.test.ts",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [V, s.value]
                ])
              ]),
              e("div", Sl, [
                t[49] || (t[49] = e("label", { class: "di-form-label" }, "Figma URL", -1)),
                P(e("input", {
                  "onUpdate:modelValue": t[18] || (t[18] = (i) => M.value = i),
                  type: "text",
                  placeholder: "https://www.figma.com/design/...",
                  class: "di-input"
                }, null, 512), [
                  [V, M.value]
                ])
              ]),
              e("div", Ul, [
                e("div", Vl, [
                  t[50] || (t[50] = e("label", { class: "di-form-label" }, "GitHub Issue", -1)),
                  P(e("input", {
                    "onUpdate:modelValue": t[19] || (t[19] = (i) => T.value = i),
                    type: "text",
                    placeholder: "#123",
                    class: "di-input"
                  }, null, 512), [
                    [V, T.value]
                  ])
                ]),
                e("div", Dl, [
                  t[51] || (t[51] = e("label", { class: "di-form-label" }, "GitHub PR", -1)),
                  P(e("input", {
                    "onUpdate:modelValue": t[20] || (t[20] = (i) => I.value = i),
                    type: "text",
                    placeholder: "#456",
                    class: "di-input"
                  }, null, 512), [
                    [V, I.value]
                  ])
                ])
              ]),
              e("div", Ll, [
                t[52] || (t[52] = e("label", { class: "di-form-label" }, "関連ドキュメント", -1)),
                P(e("input", {
                  "onUpdate:modelValue": t[21] || (t[21] = (i) => S.value = i),
                  type: "text",
                  placeholder: "https://docs.example.com/...",
                  class: "di-input"
                }, null, 512), [
                  [V, S.value]
                ])
              ])
            ], 64)) : w("", !0),
            u.value === "meta" ? (d(), c(B, { key: 4 }, [
              e("div", Al, [
                t[53] || (t[53] = e("label", { class: "di-form-label" }, "使用Piniaストア (カンマ区切り)", -1)),
                P(e("input", {
                  "onUpdate:modelValue": t[22] || (t[22] = (i) => E.value = i),
                  type: "text",
                  placeholder: "useUserStore, useThemeStore",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [V, E.value]
                ])
              ]),
              e("div", Bl, [
                t[54] || (t[54] = e("label", { class: "di-form-label" }, "使用コンポーネント (カンマ区切り)", -1)),
                P(e("input", {
                  "onUpdate:modelValue": t[23] || (t[23] = (i) => A.value = i),
                  type: "text",
                  placeholder: "Button, Modal, Input",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [V, A.value]
                ])
              ]),
              e("div", jl, [
                t[55] || (t[55] = e("label", { class: "di-form-label" }, "i18nキー (カンマ区切り)", -1)),
                P(e("input", {
                  "onUpdate:modelValue": t[24] || (t[24] = (i) => x.value = i),
                  type: "text",
                  placeholder: "common.save, errors.required",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [V, x.value]
                ])
              ]),
              e("div", Rl, [
                t[56] || (t[56] = e("label", { class: "di-form-label" }, "デザイントークン (カンマ区切り)", -1)),
                P(e("input", {
                  "onUpdate:modelValue": t[25] || (t[25] = (i) => o.value = i),
                  type: "text",
                  placeholder: "primaryColor, secondaryColor",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [V, o.value]
                ])
              ]),
              e("div", ql, [
                t[57] || (t[57] = e("label", { class: "di-form-label" }, "アクセシビリティ", -1)),
                P(e("textarea", {
                  "onUpdate:modelValue": t[26] || (t[26] = (i) => f.value = i),
                  rows: "2",
                  placeholder: "キーボード操作、スクリーンリーダー対応などのメモ...",
                  class: "di-textarea"
                }, null, 512), [
                  [V, f.value]
                ])
              ]),
              e("div", Ol, [
                t[58] || (t[58] = e("label", { class: "di-form-label" }, "レスポンシブ動作", -1)),
                P(e("textarea", {
                  "onUpdate:modelValue": t[27] || (t[27] = (i) => r.value = i),
                  rows: "2",
                  placeholder: "モバイルでの表示変更、ブレークポイントなど...",
                  class: "di-textarea"
                }, null, 512), [
                  [V, r.value]
                ])
              ])
            ], 64)) : w("", !0)
          ]),
          e("div", zl, [
            e("button", {
              onClick: Ie,
              class: "di-btn-delete"
            }, [
              k(n(ge), { style: { width: "14px", height: "14px" } }),
              t[59] || (t[59] = L(" 削除 ", -1))
            ]),
            e("div", Hl, [
              e("button", {
                onClick: ee,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: Ce,
                class: "di-btn-save"
              }, [
                k(n(Xe), { style: { width: "14px", height: "14px" } }),
                t[60] || (t[60] = L(" 保存 ", -1))
              ])
            ])
          ])
        ])
      ])) : w("", !0)
    ]));
  }
}), Fl = /* @__PURE__ */ ue(Nl, [["__scopeId", "data-v-fdafa9a6"]]), Gl = { class: "di-highlight-label" }, Xl = {
  key: 1,
  "data-dev-inspector": "",
  class: "di-pick-banner"
}, Kl = ["onClick"], Yl = ["onClick"], Zl = {
  "data-dev-inspector": "",
  class: "di-scan-banner"
}, Jl = /* @__PURE__ */ ie({
  __name: "DevPickOverlay",
  setup(v) {
    const l = ne(), u = y(null), b = y(null), _ = y(0), U = y(0);
    function D(g) {
      var s;
      const m = l.getElementConfig(g);
      if (!(m != null && m.sourceBinding)) {
        const M = ((s = m == null ? void 0 : m.note) == null ? void 0 : s.type) || "info";
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
      var T, I;
      const g = _.value, m = U.value, s = [];
      if (!l.isEnabled) return s;
      const M = l.getConfiguredSelectors();
      for (const S of M)
        try {
          const E = document.querySelector(S);
          if (E) {
            const A = E.getBoundingClientRect(), x = l.getElementConfig(S), o = ((T = x == null ? void 0 : x.sourceBinding) == null ? void 0 : T.isStatic) || !1, f = ((I = x == null ? void 0 : x.sourceBinding) == null ? void 0 : I.type) || "";
            let r = "";
            o ? r = "固定" : f === "v-model" ? r = "フォーム" : f === "api" ? r = "データ" : r = "メモ", s.push({
              selector: S,
              top: `${A.top + g}px`,
              left: `${A.left + m}px`,
              width: `${A.width}px`,
              height: `${A.height}px`,
              color: D(S),
              isStatic: o,
              label: r
            });
          }
        } catch {
        }
      return s;
    }), h = Q(() => {
      var M;
      const g = _.value, m = U.value, s = [];
      if (!l.isEnabled || l.scanResults.length === 0) return s;
      for (const T of l.scanResults)
        try {
          const I = document.querySelector(T.selector);
          if (I) {
            const S = I.getBoundingClientRect();
            s.push({
              selector: T.selector,
              top: `${S.top + g}px`,
              left: `${S.left + m}px`,
              width: `${S.width}px`,
              height: `${S.height}px`,
              isStatic: ((M = T.detected.sourceBinding) == null ? void 0 : M.isStatic) || !1
            });
          }
        } catch {
        }
      return s;
    });
    function p(g) {
      if (!l.isPickMode) return;
      if (g.target.closest("[data-dev-inspector]")) {
        u.value = null, b.value = null, l.setHoveredSelector(null);
        return;
      }
      const s = document.elementFromPoint(g.clientX, g.clientY);
      if (!s || s === document.body || s === document.documentElement) {
        u.value = null, b.value = null, l.setHoveredSelector(null);
        return;
      }
      if (s.closest("[data-dev-inspector]"))
        return;
      b.value = s;
      const M = s.getBoundingClientRect();
      u.value = {
        top: `${M.top + window.scrollY}px`,
        left: `${M.left + window.scrollX}px`,
        width: `${M.width}px`,
        height: `${M.height}px`
      };
      const T = l.generateSelector(s);
      l.setHoveredSelector(T);
    }
    function O(g) {
      if (!(!l.isPickMode || g.target.closest("[data-dev-inspector]")) && (g.preventDefault(), g.stopPropagation(), b.value)) {
        const s = l.generateSelector(b.value);
        l.startEditing(s), l.togglePickMode();
      }
    }
    function z(g) {
      g.key === "Escape" && l.isPickMode && l.togglePickMode();
    }
    function j() {
      _.value = window.scrollY, U.value = window.scrollX;
    }
    return ke(() => {
      window.addEventListener("mousemove", p, !0), window.addEventListener("click", O, !0), window.addEventListener("keydown", z), window.addEventListener("scroll", j), window.addEventListener("resize", j);
    }), Ue(() => {
      window.removeEventListener("mousemove", p, !0), window.removeEventListener("click", O, !0), window.removeEventListener("keydown", z), window.removeEventListener("scroll", j), window.removeEventListener("resize", j);
    }), fe(() => l.isPickMode, (g) => {
      g || (u.value = null, b.value = null);
    }), (g, m) => (d(), F(W, { to: "body" }, [
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
        e("div", Gl, $(n(l).hoveredSelector), 1)
      ], 4)) : w("", !0),
      n(l).isPickMode ? (d(), c("div", Xl, [...m[1] || (m[1] = [
        e("span", null, "要素をクリックしてメモを追加", -1),
        e("kbd", null, "ESC", -1),
        e("span", { class: "di-pick-hint" }, "でキャンセル", -1)
      ])])) : w("", !0),
      n(l).isEnabled && !n(l).isPickMode && !n(l).isEditMode && !n(l).editingElementId && n(l).scanResults.length === 0 ? (d(!0), c(B, { key: 2 }, K(R.value, (s) => (d(), c("div", {
        key: s.selector,
        "data-dev-inspector": "",
        class: "di-annotation-box",
        style: H({
          top: s.top,
          left: s.left,
          width: s.width,
          height: s.height,
          borderColor: s.color,
          backgroundColor: s.color + "15"
        }),
        onClick: (M) => n(l).startEditing(s.selector)
      }, [
        e("div", {
          class: "di-annotation-label",
          style: H({ backgroundColor: s.color })
        }, $(s.label), 5)
      ], 12, Kl))), 128)) : w("", !0),
      n(l).isEnabled && !n(l).editingElementId && h.value.length > 0 ? (d(), c(B, { key: 3 }, [
        (d(!0), c(B, null, K(h.value, (s) => (d(), c("div", {
          key: "scan-" + s.selector,
          "data-dev-inspector": "",
          class: G(["di-scan-highlight", { "di-scan-static": s.isStatic }]),
          style: H({
            top: s.top,
            left: s.left,
            width: s.width,
            height: s.height
          }),
          onClick: (M) => n(l).startEditing(s.selector)
        }, [
          e("div", {
            class: G(["di-scan-label", { "di-scan-label-static": s.isStatic }])
          }, $(s.isStatic ? "固定文言" : "動的データ"), 3)
        ], 14, Yl))), 128)),
        e("div", Zl, [
          e("span", null, $(h.value.length) + "件の要素を検出", 1),
          e("button", {
            onClick: m[0] || (m[0] = (s) => n(l).clearScanResults()),
            class: "di-scan-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : w("", !0)
    ]));
  }
}), Wl = /* @__PURE__ */ ue(Jl, [["__scopeId", "data-v-355cdd92"]]), Ql = {
  key: 0,
  "data-dev-inspector": ""
}, eo = /* @__PURE__ */ ie({
  __name: "DevInspector",
  props: {
    storageKey: { default: "devInspector:elementConfigs" },
    enabledInProduction: { type: Boolean, default: !1 },
    initialAnnotations: {}
  },
  setup(v) {
    const l = v, u = ne();
    return ke(() => {
      u.init({
        storageKey: l.storageKey,
        enabledInProduction: l.enabledInProduction,
        initialAnnotations: l.initialAnnotations
      });
    }), (b, _) => n(u).isAvailable ? (d(), c("div", Ql, [
      k(Qt),
      k(Fl),
      k(Wl)
    ])) : w("", !0);
  }
}), oo = {
  install(v, l = {}) {
    const { autoRegister: u = !0, ...b } = l;
    u && v.component("DevInspector", eo), v.provide("devInspectorOptions", b);
  }
};
export {
  Fl as DevElementEditor,
  eo as DevInspector,
  Qt as DevPanel,
  Wl as DevPickOverlay,
  oo as VueDevInspector,
  oo as default,
  no as useDevInspector,
  ne as useDevInspectorStore
};
