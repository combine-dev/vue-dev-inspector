import { h as ve, defineComponent as ie, inject as Le, ref as h, computed as te, openBlock as d, createElementBlock as r, Fragment as B, createBlock as R, Teleport as W, unref as i, createVNode as b, createCommentVNode as x, createElementVNode as e, normalizeClass as X, toDisplayString as C, renderList as J, normalizeStyle as F, createTextVNode as D, withModifiers as de, withDirectives as M, vModelText as E, watch as fe, resolveDynamicComponent as ke, vModelSelect as ae, onMounted as be, onUnmounted as Se } from "vue";
import { u as ne } from "./useDevInspector-Chv_euOr.js";
import { a as lo } from "./useDevInspector-Chv_euOr.js";
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
const Ae = (c) => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), w = (c, o) => ({ size: u, strokeWidth: m = 2, absoluteStrokeWidth: P, color: _, class: T, ...A }, { attrs: f, slots: p }) => ve(
  "svg",
  {
    ...se,
    width: u || se.width,
    height: u || se.height,
    stroke: _ || se.stroke,
    "stroke-width": P ? Number(m) * 24 / Number(u) : m,
    ...f,
    class: ["lucide", `lucide-${Ae(c)}`],
    ...A
  },
  [
    ...o.map((O) => ve(...O)),
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
const ce = w("CodeIcon", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qe = w("DatabaseIcon", [
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
const Be = w("ExternalLinkIcon", [
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
const Oe = w("FileSpreadsheetIcon", [
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
const ze = w("GitBranchIcon", [
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
const Re = w("GlobeIcon", [
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
const Me = w("Trash2Icon", [
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
async function Qe(c, o, u = {}) {
  var y;
  const m = await import("./xlsx-BopDBbWb.js"), { systemName: P = "System", author: _ = "" } = u, T = /* @__PURE__ */ new Date(), A = `${T.getFullYear()}/${T.getMonth() + 1}/${T.getDate()}`, f = m.utils.book_new(), p = [];
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
    (c == null ? void 0 : c.name) || "",
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
    A
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
    (c == null ? void 0 : c.componentPath) || "",
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
    (c == null ? void 0 : c.figmaUrl) || ""
  ]), p.push([]), p.push(["機能概要"]), p.push([(c == null ? void 0 : c.description) || ""]), p.push([]), p.push(["画面レイアウト　figmaURL"]), p.push([(c == null ? void 0 : c.figmaUrl) || ""]), p.push([]), c != null && c.apis && c.apis.length > 0 && (p.push(["API一覧"]), p.push(["", "メソッド", "", "エンドポイント", "", "", "", "", "", "", "", "説明"]), c.apis.forEach((n) => {
    p.push(["", n.method, "", n.endpoint, "", "", "", "", "", "", "", n.description]);
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
  ]), Object.values(o).forEach((n, S) => {
    var H, V, l;
    const L = n.id;
    let $ = "", z = "", U = "";
    if ((H = n.note) != null && H.text && ($ = n.note.text), n.fieldInfo && ($ += $ ? `
` : "", $ += `DB: ${n.fieldInfo.table}.${n.fieldInfo.column}`, n.fieldInfo.type && ($ += ` (${n.fieldInfo.type})`), n.fieldInfo.description && ($ += `
${n.fieldInfo.description}`)), n.actionInfo && (U = `[${{
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行"
    }[n.actionInfo.type] || n.actionInfo.type}]`, n.actionInfo.target && (U += ` ${n.actionInfo.method || ""} ${n.actionInfo.target}`), n.actionInfo.description && (U += `
${n.actionInfo.description}`)), n.links) {
      const k = [];
      n.links.testPath && k.push(`テスト: ${n.links.testPath}`), n.links.figmaUrl && k.push(`Figma: ${n.links.figmaUrl}`), n.links.githubIssue && k.push(`Issue: ${n.links.githubIssue}`), n.links.githubPr && k.push(`PR: ${n.links.githubPr}`), k.length > 0 && (U += U ? `

` : "", U += k.join(`
`));
    }
    if (n.devMeta) {
      const k = [];
      (V = n.devMeta.usedStores) != null && V.length && k.push(`Store: ${n.devMeta.usedStores.join(", ")}`), (l = n.devMeta.usedComponents) != null && l.length && k.push(`Components: ${n.devMeta.usedComponents.join(", ")}`), n.devMeta.accessibility && k.push(`A11y: ${n.devMeta.accessibility}`), n.devMeta.responsive && k.push(`Responsive: ${n.devMeta.responsive}`), k.length > 0 && (U += U ? `

` : "", U += `[開発情報]
` + k.join(`
`));
    }
    p.push([
      "",
      S + 1,
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
      z,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      U
    ]);
  });
  const j = m.utils.aoa_to_sheet(p);
  j["!cols"] = [
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
  ], m.utils.book_append_sheet(f, j, "画面設計書");
  const I = `画面仕様書_${((y = c == null ? void 0 : c.name) == null ? void 0 : y.replace(/[/\\?%*:|"<>]/g, "-")) || "screen"}_${A.replace(/\//g, "")}.xlsx`;
  return m.writeFile(f, I), I;
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
}, vt = { class: "di-scan-result-count" }, ct = { class: "di-scan-result-count" }, pt = { class: "di-content" }, yt = { class: "di-section" }, ht = { class: "di-screen-name" }, mt = { class: "di-screen-desc" }, ft = { class: "di-card" }, kt = { class: "di-card-label" }, bt = { class: "di-code-blue" }, gt = {
  key: 0,
  class: "di-card"
}, xt = { class: "di-card-label" }, wt = ["href"], It = {
  key: 1,
  class: "di-card"
}, Mt = { class: "di-card-label" }, Ct = { class: "di-api-list" }, $t = { class: "di-api-info" }, Pt = { class: "di-api-endpoint" }, Et = { class: "di-api-desc" }, _t = {
  key: 2,
  class: "di-card"
}, Tt = { class: "di-card-label" }, Ut = { class: "di-notes-list" }, Vt = {
  key: 1,
  class: "di-no-spec"
}, Dt = { class: "di-card" }, Lt = { class: "di-card-header" }, St = { class: "di-card-label" }, At = { class: "di-count-badge" }, jt = {
  key: 0,
  class: "di-export-buttons"
}, qt = {
  key: 1,
  class: "di-export-hint"
}, Bt = { class: "di-action-buttons" }, Ot = {
  key: 0,
  class: "di-indicator",
  "data-dev-inspector": ""
}, zt = {
  key: 0,
  class: "di-indicator-edit"
}, Rt = { class: "di-modal" }, Ht = ["value"], Nt = { class: "di-modal-actions" }, Ft = { class: "di-modal" }, Gt = { class: "di-file-drop" }, Xt = {
  key: 0,
  class: "di-error"
}, Kt = { class: "di-modal-actions" }, Yt = ["disabled"], Zt = /* @__PURE__ */ ie({
  __name: "DevPanel",
  setup(c) {
    const o = ne(), u = Le("router", null), m = h(!1), P = h(!1), _ = h(""), T = h(""), A = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, f = te(() => o.currentScreenSpec), p = te(() => Object.keys(o.elementConfigs).length);
    function O() {
      const V = o.exportConfigs();
      navigator.clipboard.writeText(V), m.value = !1;
    }
    function j() {
      const V = o.exportConfigs(), l = new Blob([V], { type: "application/json" }), k = URL.createObjectURL(l), v = document.createElement("a");
      v.href = k, v.download = "dev-mode-configs.json", v.click(), URL.revokeObjectURL(k), m.value = !1;
    }
    function g() {
      o.downloadAnnotations();
    }
    async function I() {
      try {
        await Qe(
          o.currentScreenSpec,
          o.elementConfigs,
          { systemName: "System" }
        );
      } catch (V) {
        console.error("Failed to export xlsx:", V), alert("xlsx export failed. Make sure xlsx package is installed.");
      }
    }
    function y() {
      try {
        o.importConfigs(_.value), _.value = "", T.value = "", P.value = !1;
      } catch {
        T.value = "JSONの形式が正しくありません";
      }
    }
    function n(V) {
      var q;
      const k = (q = V.target.files) == null ? void 0 : q[0];
      if (!k) return;
      const v = new FileReader();
      v.onload = (K) => {
        var Y;
        _.value = (Y = K.target) == null ? void 0 : Y.result;
      }, v.readAsText(k);
    }
    function S() {
      confirm("すべての要素設定を削除しますか？") && o.clearAllConfigs();
    }
    const L = h(0), $ = h(!1), z = h([]);
    async function U() {
      $.value = !0, L.value = await o.scanCurrentPage();
    }
    async function H() {
      if (!u) {
        alert("Vue Routerが見つかりません。全ページスキャンにはVue Routerが必要です。");
        return;
      }
      confirm("全ページをスキャンします。ページ遷移が発生しますがよろしいですか？") && ($.value = !0, z.value = await o.scanAllPages(u));
    }
    return (V, l) => {
      var k;
      return d(), r(B, null, [
        (d(), R(W, { to: "body" }, [
          i(o).isEnabled && !i(o).isPanelOpen ? (d(), r("button", {
            key: 0,
            onClick: l[0] || (l[0] = //@ts-ignore
            (...v) => i(o).openPanel && i(o).openPanel(...v)),
            class: "di-fab",
            title: "画面仕様を表示",
            "data-dev-inspector": ""
          }, [
            b(i(ye), { style: { width: "20px", height: "20px" } })
          ])) : x("", !0)
        ])),
        (d(), R(W, { to: "body" }, [
          i(o).isEnabled && i(o).isPanelOpen ? (d(), r("div", et, [
            e("div", tt, [
              e("div", lt, [
                b(i(ce), { style: { width: "20px", height: "20px", color: "#60a5fa" } }),
                l[12] || (l[12] = e("span", null, "Developer Mode", -1))
              ]),
              e("button", {
                onClick: l[1] || (l[1] = //@ts-ignore
                (...v) => i(o).closePanel && i(o).closePanel(...v)),
                class: "di-close-btn"
              }, [
                b(i(Ce), { style: { width: "20px", height: "20px" } })
              ])
            ]),
            e("div", ot, [
              e("div", st, [
                e("div", it, [
                  b(i(me), { style: { width: "16px", height: "16px", color: "#fbbf24" } }),
                  l[13] || (l[13] = e("span", null, "編集モード", -1))
                ]),
                e("button", {
                  onClick: l[2] || (l[2] = //@ts-ignore
                  (...v) => i(o).toggleEditMode && i(o).toggleEditMode(...v)),
                  class: X(["di-toggle", { active: i(o).isEditMode }])
                }, [
                  e("span", {
                    class: X(["di-toggle-knob", { active: i(o).isEditMode }])
                  }, null, 2)
                ], 2)
              ]),
              l[15] || (l[15] = e("p", { class: "di-edit-hint" }, "ONにすると、要素をクリックして情報を編集できます", -1)),
              e("button", {
                onClick: l[3] || (l[3] = //@ts-ignore
                (...v) => i(o).togglePickMode && i(o).togglePickMode(...v)),
                class: X(["di-pick-btn", { active: i(o).isPickMode }])
              }, [
                b(i(Fe), { style: { width: "16px", height: "16px" } }),
                e("span", null, C(i(o).isPickMode ? "要素選択中..." : "任意の要素にメモを追加"), 1)
              ], 2),
              e("div", nt, [
                e("button", {
                  onClick: U,
                  class: "di-scan-btn",
                  disabled: i(o).isScanning
                }, [
                  i(o).isScanning && !i(o).currentScanPage ? (d(), R(i(he), {
                    key: 0,
                    class: "di-spin",
                    style: { width: "16px", height: "16px" }
                  })) : (d(), R(i(Xe), {
                    key: 1,
                    style: { width: "16px", height: "16px" }
                  })),
                  e("span", null, C(i(o).isScanning && !i(o).currentScanPage ? `スキャン中... ${i(o).scanProgress}%` : "ページ全体をスキャン"), 1)
                ], 8, at),
                e("button", {
                  onClick: H,
                  class: "di-scan-btn di-scan-btn-all",
                  disabled: i(o).isScanning,
                  title: i(u) ? "全ページをスキャン" : "Vue Routerが必要です"
                }, [
                  i(o).isScanning && i(o).currentScanPage ? (d(), R(i(he), {
                    key: 0,
                    class: "di-spin",
                    style: { width: "16px", height: "16px" }
                  })) : (d(), R(i(Re), {
                    key: 1,
                    style: { width: "16px", height: "16px" }
                  })),
                  e("span", null, C(i(o).currentScanPage ? `${i(o).currentScanPage}` : "全ページスキャン"), 1)
                ], 8, dt)
              ]),
              $.value && (L.value > 0 || z.value.length > 0) ? (d(), r("div", ut, [
                L.value > 0 ? (d(), r("div", rt, [
                  e("span", vt, C(L.value), 1),
                  l[14] || (l[14] = e("span", null, "件の要素を検出・登録しました", -1))
                ])) : x("", !0),
                (d(!0), r(B, null, J(z.value, (v) => (d(), r("div", {
                  key: v.page,
                  class: "di-scan-result-item"
                }, [
                  e("code", null, C(v.page), 1),
                  e("span", ct, C(v.count), 1)
                ]))), 128)),
                e("button", {
                  onClick: l[4] || (l[4] = (v) => {
                    $.value = !1, z.value = [];
                  }),
                  class: "di-scan-close"
                }, " 閉じる ")
              ])) : x("", !0)
            ]),
            e("div", pt, [
              f.value ? (d(), r(B, { key: 0 }, [
                e("div", yt, [
                  e("h2", ht, C(f.value.name), 1),
                  e("p", mt, C(f.value.description), 1)
                ]),
                e("div", ft, [
                  e("div", kt, [
                    b(i(ce), { style: { width: "16px", height: "16px" } }),
                    l[16] || (l[16] = e("span", null, "Component Path", -1))
                  ]),
                  e("code", bt, C(f.value.componentPath), 1)
                ]),
                f.value.figmaUrl ? (d(), r("div", gt, [
                  e("div", xt, [
                    b(i(Be), { style: { width: "16px", height: "16px" } }),
                    l[17] || (l[17] = e("span", null, "Figma Design", -1))
                  ]),
                  e("a", {
                    href: f.value.figmaUrl,
                    target: "_blank",
                    class: "di-link-purple"
                  }, C(f.value.figmaUrl), 9, wt)
                ])) : x("", !0),
                f.value.apis.length ? (d(), r("div", It, [
                  e("div", Mt, [
                    b(i(Ke), { style: { width: "16px", height: "16px" } }),
                    l[18] || (l[18] = e("span", null, "API Endpoints", -1))
                  ]),
                  e("div", Ct, [
                    (d(!0), r(B, null, J(f.value.apis, (v, q) => (d(), r("div", {
                      key: q,
                      class: "di-api-item"
                    }, [
                      e("span", {
                        class: "di-method-badge",
                        style: F({ backgroundColor: A[v.method] + "20", color: A[v.method] })
                      }, C(v.method), 5),
                      e("div", $t, [
                        e("code", Pt, C(v.endpoint), 1),
                        e("p", Et, C(v.description), 1)
                      ])
                    ]))), 128))
                  ])
                ])) : x("", !0),
                (k = f.value.notes) != null && k.length ? (d(), r("div", _t, [
                  e("div", Tt, [
                    b(i(je), { style: { width: "16px", height: "16px" } }),
                    l[19] || (l[19] = e("span", null, "Notes", -1))
                  ]),
                  e("ul", Ut, [
                    (d(!0), r(B, null, J(f.value.notes, (v, q) => (d(), r("li", {
                      key: q,
                      class: "di-note-item"
                    }, [
                      l[20] || (l[20] = e("span", { class: "di-bullet" }, "•", -1)),
                      e("span", null, C(v), 1)
                    ]))), 128))
                  ])
                ])) : x("", !0)
              ], 64)) : (d(), r("div", Vt, [
                b(i(ye), { style: { width: "48px", height: "48px", color: "#334155" } }),
                l[21] || (l[21] = e("p", null, [
                  D("この画面の仕様情報は"),
                  e("br"),
                  D("まだ登録されていません")
                ], -1))
              ])),
              e("div", Dt, [
                e("div", Lt, [
                  e("div", St, [
                    b(i(me), { style: { width: "16px", height: "16px" } }),
                    l[22] || (l[22] = e("span", null, "登録済み要素", -1)),
                    e("span", At, C(p.value), 1)
                  ])
                ]),
                p.value > 0 ? (d(), r("div", jt, [
                  e("button", {
                    onClick: g,
                    class: "di-btn-green"
                  }, [
                    b(i(ze), { style: { width: "16px", height: "16px" } }),
                    l[23] || (l[23] = D(" Git管理用に保存 ", -1))
                  ]),
                  e("button", {
                    onClick: I,
                    class: "di-btn-blue"
                  }, [
                    b(i(Oe), { style: { width: "16px", height: "16px" } }),
                    l[24] || (l[24] = D(" 画面仕様書 (xlsx) 出力 ", -1))
                  ])
                ])) : x("", !0),
                p.value > 0 ? (d(), r("p", qt, [...l[25] || (l[25] = [
                  D(" JSON: ", -1),
                  e("code", null, "dev-annotations.json", -1),
                  D(" に配置してcommit ", -1)
                ])])) : x("", !0),
                e("div", Bt, [
                  e("button", {
                    onClick: l[5] || (l[5] = (v) => m.value = !0),
                    class: "di-btn-small"
                  }, [
                    b(i(pe), { style: { width: "14px", height: "14px" } }),
                    l[26] || (l[26] = D(" エクスポート ", -1))
                  ]),
                  e("button", {
                    onClick: l[6] || (l[6] = (v) => P.value = !0),
                    class: "di-btn-small"
                  }, [
                    b(i(Ze), { style: { width: "14px", height: "14px" } }),
                    l[27] || (l[27] = D(" インポート ", -1))
                  ]),
                  p.value > 0 ? (d(), r("button", {
                    key: 0,
                    onClick: S,
                    class: "di-btn-small di-btn-danger"
                  }, [
                    b(i(Me), { style: { width: "14px", height: "14px" } }),
                    l[28] || (l[28] = D(" 全削除 ", -1))
                  ])) : x("", !0)
                ])
              ])
            ]),
            l[29] || (l[29] = e("div", { class: "di-footer" }, [
              e("kbd", null, "Ctrl"),
              e("span", null, "+"),
              e("kbd", null, "Shift"),
              e("span", null, "+"),
              e("kbd", null, "D"),
              e("span", { class: "di-footer-text" }, "で開発者モード切替")
            ], -1))
          ])) : x("", !0)
        ])),
        (d(), R(W, { to: "body" }, [
          i(o).isEnabled ? (d(), r("div", Ot, [
            l[30] || (l[30] = e("span", { class: "di-indicator-dot" }, null, -1)),
            l[31] || (l[31] = D(" Developer Mode ", -1)),
            i(o).isEditMode ? (d(), r("span", zt, "• 編集中")) : x("", !0)
          ])) : x("", !0)
        ])),
        (d(), R(W, { to: "body" }, [
          m.value ? (d(), r("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: l[8] || (l[8] = de((v) => m.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", Rt, [
              l[33] || (l[33] = e("h3", { class: "di-modal-title" }, "設定をエクスポート", -1)),
              e("textarea", {
                readonly: "",
                value: i(o).exportConfigs(),
                class: "di-modal-textarea"
              }, null, 8, Ht),
              e("div", Nt, [
                e("button", {
                  onClick: l[7] || (l[7] = (v) => m.value = !1),
                  class: "di-btn-small"
                }, "閉じる"),
                e("button", {
                  onClick: j,
                  class: "di-btn-small di-btn-gray"
                }, [
                  b(i(pe), { style: { width: "14px", height: "14px" } }),
                  l[32] || (l[32] = D(" ファイル保存 ", -1))
                ]),
                e("button", {
                  onClick: O,
                  class: "di-btn-small di-btn-primary"
                }, "コピー")
              ])
            ])
          ])) : x("", !0)
        ])),
        (d(), R(W, { to: "body" }, [
          P.value ? (d(), r("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: l[11] || (l[11] = de((v) => P.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", Ft, [
              l[35] || (l[35] = e("h3", { class: "di-modal-title" }, "設定をインポート", -1)),
              e("label", Gt, [
                e("input", {
                  type: "file",
                  accept: ".json",
                  onChange: n
                }, null, 32),
                l[34] || (l[34] = e("span", null, "JSONファイルをドラッグまたはクリック", -1))
              ]),
              M(e("textarea", {
                "onUpdate:modelValue": l[9] || (l[9] = (v) => _.value = v),
                placeholder: "またはJSONを直接貼り付け...",
                class: "di-modal-textarea di-modal-textarea-input"
              }, null, 512), [
                [E, _.value]
              ]),
              T.value ? (d(), r("p", Xt, C(T.value), 1)) : x("", !0),
              e("div", Kt, [
                e("button", {
                  onClick: l[10] || (l[10] = (v) => {
                    P.value = !1, _.value = "", T.value = "";
                  }),
                  class: "di-btn-small"
                }, " キャンセル "),
                e("button", {
                  onClick: y,
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
}), ue = (c, o) => {
  const u = c.__vccOpts || c;
  for (const [m, P] of o)
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
}, sl = { class: "di-editor-tabs" }, il = { class: "di-editor-content" }, nl = { class: "di-form-group" }, al = { class: "di-note-types" }, dl = ["onClick"], ul = { class: "di-form-group" }, rl = { class: "di-form-group" }, vl = { class: "di-form-row" }, cl = { class: "di-form-group" }, pl = { class: "di-form-group" }, yl = { class: "di-form-group" }, hl = ["value"], ml = { class: "di-form-group" }, fl = { class: "di-form-group" }, kl = { class: "di-form-group" }, bl = ["value"], gl = {
  key: 0,
  class: "di-form-row"
}, xl = {
  class: "di-form-group",
  style: { flex: "0 0 100px" }
}, wl = ["value"], Il = {
  class: "di-form-group",
  style: { flex: "1" }
}, Ml = {
  key: 1,
  class: "di-form-group"
}, Cl = { class: "di-form-label" }, $l = ["placeholder"], Pl = { class: "di-form-group" }, El = { class: "di-form-group" }, _l = { class: "di-form-group" }, Tl = { class: "di-form-row" }, Ul = { class: "di-form-group" }, Vl = { class: "di-form-group" }, Dl = { class: "di-form-group" }, Ll = { class: "di-form-group" }, Sl = { class: "di-form-group" }, Al = { class: "di-form-group" }, jl = { class: "di-form-group" }, ql = { class: "di-form-group" }, Bl = { class: "di-form-group" }, Ol = { class: "di-editor-footer" }, zl = { class: "di-editor-actions" }, Rl = /* @__PURE__ */ ie({
  __name: "DevElementEditor",
  setup(c) {
    const o = ne(), u = h("note"), m = h(""), P = h(""), _ = h(""), T = h(""), A = h(""), f = h("navigate"), p = h(""), O = h("GET"), j = h(""), g = h(""), I = h(""), y = h("info"), n = h(""), S = h(""), L = h(""), $ = h(""), z = h(""), U = h(""), H = h(""), V = h(""), l = h(""), k = h(""), v = h(""), q = h(""), K = h(""), Y = h(!1), $e = te(() => o.editingElementId !== null), Z = te(() => o.editingElementId);
    fe(Z, (G) => {
      var t, s, ee, le, oe, N;
      if (G) {
        const a = o.getElementConfig(G);
        a != null && a.fieldInfo && (m.value = a.fieldInfo.table || "", P.value = a.fieldInfo.column || "", _.value = a.fieldInfo.type || "", T.value = ((t = a.fieldInfo.validation) == null ? void 0 : t.join(", ")) || "", A.value = a.fieldInfo.description || ""), a != null && a.actionInfo && (f.value = a.actionInfo.type || "navigate", p.value = a.actionInfo.target || "", O.value = a.actionInfo.method || "GET", j.value = a.actionInfo.description || ""), a != null && a.note && (g.value = a.note.text || "", I.value = a.note.author || "", y.value = a.note.type || "info"), a != null && a.links && (n.value = a.links.testPath || "", S.value = a.links.figmaUrl || "", L.value = a.links.githubIssue || "", $.value = a.links.githubPr || "", z.value = a.links.relatedDocs || ""), a != null && a.devMeta && (U.value = ((s = a.devMeta.usedStores) == null ? void 0 : s.join(", ")) || "", H.value = ((ee = a.devMeta.usedComponents) == null ? void 0 : ee.join(", ")) || "", V.value = ((le = a.devMeta.i18nKeys) == null ? void 0 : le.join(", ")) || "", l.value = ((oe = a.devMeta.designTokens) == null ? void 0 : oe.join(", ")) || "", k.value = a.devMeta.accessibility || "", v.value = a.devMeta.responsive || ""), a != null && a.sourceBinding && (q.value = a.sourceBinding.type || "", K.value = a.sourceBinding.source || "", Y.value = a.sourceBinding.isStatic || !1), (N = a == null ? void 0 : a.note) != null && N.text ? u.value = "note" : a != null && a.fieldInfo ? u.value = "field" : a != null && a.actionInfo ? u.value = "action" : a != null && a.links ? u.value = "links" : a != null && a.devMeta ? u.value = "meta" : u.value = "note";
      } else
        re();
    });
    function re() {
      m.value = "", P.value = "", _.value = "", T.value = "", A.value = "", f.value = "navigate", p.value = "", O.value = "GET", j.value = "", g.value = "", I.value = "", y.value = "info", n.value = "", S.value = "", L.value = "", $.value = "", z.value = "", U.value = "", H.value = "", V.value = "", l.value = "", k.value = "", v.value = "", q.value = "", K.value = "", Y.value = !1, u.value = "note";
    }
    function Q() {
      o.stopEditing(), re();
    }
    function Pe() {
      if (Z.value)
        try {
          const G = document.querySelector(Z.value);
          if (!G) return;
          const t = o.autoDetectElementInfo(G, Z.value);
          t.sourceBinding && (q.value = t.sourceBinding.type || "", K.value = t.sourceBinding.source || "", Y.value = t.sourceBinding.isStatic || !1, t.sourceBinding.isStatic && !g.value && (g.value = "固定文言", y.value = "info"));
        } catch (G) {
          console.error("[DevInspector] Auto-detect failed:", G);
        }
    }
    function Ee() {
      if (!Z.value) return;
      const G = m.value && P.value ? {
        table: m.value,
        column: P.value,
        type: _.value || void 0,
        validation: T.value ? T.value.split(",").map((N) => N.trim()) : void 0,
        description: A.value || void 0
      } : void 0, t = p.value ? {
        type: f.value,
        target: p.value,
        method: f.value === "api" ? O.value : void 0,
        description: j.value || void 0
      } : void 0, s = g.value ? {
        text: g.value,
        author: I.value || void 0,
        type: y.value
      } : void 0, ee = n.value || S.value || L.value || $.value || z.value ? {
        testPath: n.value || void 0,
        figmaUrl: S.value || void 0,
        githubIssue: L.value || void 0,
        githubPr: $.value || void 0,
        relatedDocs: z.value || void 0
      } : void 0, le = U.value || H.value || V.value || l.value || k.value || v.value ? {
        usedStores: U.value ? U.value.split(",").map((N) => N.trim()) : void 0,
        usedComponents: H.value ? H.value.split(",").map((N) => N.trim()) : void 0,
        i18nKeys: V.value ? V.value.split(",").map((N) => N.trim()) : void 0,
        designTokens: l.value ? l.value.split(",").map((N) => N.trim()) : void 0,
        accessibility: k.value || void 0,
        responsive: v.value || void 0
      } : void 0, oe = q.value ? {
        type: q.value,
        source: K.value || void 0,
        isStatic: Y.value
      } : void 0;
      o.setElementConfig(Z.value, {
        fieldInfo: G,
        actionInfo: t,
        note: s,
        links: ee,
        devMeta: le,
        sourceBinding: oe
      }), Q();
    }
    function _e() {
      Z.value && (o.deleteElementConfig(Z.value), Q());
    }
    const Te = ["VARCHAR", "TEXT", "INT", "BIGINT", "BOOLEAN", "DATE", "DATETIME", "TIMESTAMP", "JSON"], Ue = [
      { value: "navigate", label: "画面遷移" },
      { value: "api", label: "API呼び出し" },
      { value: "modal", label: "モーダル表示" },
      { value: "emit", label: "イベント発火" },
      { value: "function", label: "関数実行" }
    ], Ve = ["GET", "POST", "PUT", "DELETE", "PATCH"], De = [
      { value: "info", label: "情報", icon: Ie, color: "#60a5fa" },
      { value: "warning", label: "注意", icon: ge, color: "#fbbf24" },
      { value: "todo", label: "TODO", icon: xe, color: "#10b981" },
      { value: "question", label: "質問", icon: we, color: "#a78bfa" }
    ];
    return (G, t) => (d(), R(W, { to: "body" }, [
      $e.value ? (d(), r("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: de(Q, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", Wt, [
          e("div", Qt, [
            t[28] || (t[28] = e("h3", null, "要素情報を編集", -1)),
            e("div", el, [
              e("button", {
                onClick: Pe,
                class: "di-btn-auto",
                title: "自動検出"
              }, [
                b(i(Je), { style: { width: "16px", height: "16px" } })
              ]),
              e("button", {
                onClick: Q,
                class: "di-editor-close"
              }, [
                b(i(Ce), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          Y.value ? (d(), r("div", tl, [...t[29] || (t[29] = [
            e("span", { class: "di-static-badge" }, "固定文言", -1),
            e("span", { class: "di-static-hint" }, "このテキストはソースコードに直接記述されています", -1)
          ])])) : q.value ? (d(), r("div", ll, [
            e("span", {
              class: X(["di-binding-badge", "di-binding-" + q.value])
            }, C(q.value), 3),
            K.value ? (d(), r("span", ol, C(K.value), 1)) : x("", !0)
          ])) : x("", !0),
          e("div", sl, [
            e("button", {
              onClick: t[0] || (t[0] = (s) => u.value = "note"),
              class: X(["di-editor-tab", { active: u.value === "note" }]),
              style: F(u.value === "note" ? { color: "#10b981", borderColor: "#10b981", background: "rgba(16, 185, 129, 0.1)" } : {})
            }, [
              b(i(Ne), { style: { width: "12px", height: "12px" } }),
              t[30] || (t[30] = D(" メモ ", -1))
            ], 6),
            e("button", {
              onClick: t[1] || (t[1] = (s) => u.value = "field"),
              class: X(["di-editor-tab", { active: u.value === "field" }]),
              style: F(u.value === "field" ? { color: "#60a5fa", borderColor: "#60a5fa", background: "rgba(96, 165, 250, 0.1)" } : {})
            }, [
              b(i(qe), { style: { width: "12px", height: "12px" } }),
              t[31] || (t[31] = D(" データ ", -1))
            ], 6),
            e("button", {
              onClick: t[2] || (t[2] = (s) => u.value = "action"),
              class: X(["di-editor-tab", { active: u.value === "action" }]),
              style: F(u.value === "action" ? { color: "#a78bfa", borderColor: "#a78bfa", background: "rgba(167, 139, 250, 0.1)" } : {})
            }, [
              b(i(We), { style: { width: "12px", height: "12px" } }),
              t[32] || (t[32] = D(" アクション ", -1))
            ], 6),
            e("button", {
              onClick: t[3] || (t[3] = (s) => u.value = "links"),
              class: X(["di-editor-tab", { active: u.value === "links" }]),
              style: F(u.value === "links" ? { color: "#f59e0b", borderColor: "#f59e0b", background: "rgba(245, 158, 11, 0.1)" } : {})
            }, [
              b(i(He), { style: { width: "12px", height: "12px" } }),
              t[33] || (t[33] = D(" リンク ", -1))
            ], 6),
            e("button", {
              onClick: t[4] || (t[4] = (s) => u.value = "meta"),
              class: X(["di-editor-tab", { active: u.value === "meta" }]),
              style: F(u.value === "meta" ? { color: "#ec4899", borderColor: "#ec4899", background: "rgba(236, 72, 153, 0.1)" } : {})
            }, [
              b(i(Ye), { style: { width: "12px", height: "12px" } }),
              t[34] || (t[34] = D(" 開発情報 ", -1))
            ], 6)
          ]),
          e("div", il, [
            u.value === "note" ? (d(), r(B, { key: 0 }, [
              e("div", nl, [
                t[35] || (t[35] = e("label", { class: "di-form-label" }, "タイプ", -1)),
                e("div", al, [
                  (d(), r(B, null, J(De, (s) => e("button", {
                    key: s.value,
                    onClick: (ee) => y.value = s.value,
                    class: "di-note-type-btn",
                    style: F(y.value === s.value ? { color: s.color, borderColor: s.color, background: s.color + "15" } : {})
                  }, [
                    (d(), R(ke(s.icon), {
                      style: F([{ width: "16px", height: "16px" }, { color: y.value === s.value ? s.color : "#64748b" }])
                    }, null, 8, ["style"])),
                    e("span", {
                      style: F({ color: y.value === s.value ? s.color : "#94a3b8" })
                    }, C(s.label), 5)
                  ], 12, dl)), 64))
                ])
              ]),
              e("div", ul, [
                t[36] || (t[36] = e("label", { class: "di-form-label" }, "メモ内容 *", -1)),
                M(e("textarea", {
                  "onUpdate:modelValue": t[5] || (t[5] = (s) => g.value = s),
                  rows: "4",
                  placeholder: "この要素についてのメモ、説明、注意事項など...",
                  class: "di-textarea"
                }, null, 512), [
                  [E, g.value]
                ])
              ]),
              e("div", rl, [
                t[37] || (t[37] = e("label", { class: "di-form-label" }, "記入者（オプション）", -1)),
                M(e("input", {
                  "onUpdate:modelValue": t[6] || (t[6] = (s) => I.value = s),
                  type: "text",
                  placeholder: "名前",
                  class: "di-input"
                }, null, 512), [
                  [E, I.value]
                ])
              ])
            ], 64)) : x("", !0),
            u.value === "field" ? (d(), r(B, { key: 1 }, [
              e("div", vl, [
                e("div", cl, [
                  t[38] || (t[38] = e("label", { class: "di-form-label" }, "テーブル名 *", -1)),
                  M(e("input", {
                    "onUpdate:modelValue": t[7] || (t[7] = (s) => m.value = s),
                    type: "text",
                    placeholder: "users",
                    class: "di-input"
                  }, null, 512), [
                    [E, m.value]
                  ])
                ]),
                e("div", pl, [
                  t[39] || (t[39] = e("label", { class: "di-form-label" }, "カラム名 *", -1)),
                  M(e("input", {
                    "onUpdate:modelValue": t[8] || (t[8] = (s) => P.value = s),
                    type: "text",
                    placeholder: "name",
                    class: "di-input"
                  }, null, 512), [
                    [E, P.value]
                  ])
                ])
              ]),
              e("div", yl, [
                t[41] || (t[41] = e("label", { class: "di-form-label" }, "データ型", -1)),
                M(e("select", {
                  "onUpdate:modelValue": t[9] || (t[9] = (s) => _.value = s),
                  class: "di-select"
                }, [
                  t[40] || (t[40] = e("option", { value: "" }, "選択してください", -1)),
                  (d(), r(B, null, J(Te, (s) => e("option", {
                    key: s,
                    value: s
                  }, C(s), 9, hl)), 64))
                ], 512), [
                  [ae, _.value]
                ])
              ]),
              e("div", ml, [
                t[42] || (t[42] = e("label", { class: "di-form-label" }, "バリデーション (カンマ区切り)", -1)),
                M(e("input", {
                  "onUpdate:modelValue": t[10] || (t[10] = (s) => T.value = s),
                  type: "text",
                  placeholder: "required, max:255",
                  class: "di-input"
                }, null, 512), [
                  [E, T.value]
                ])
              ]),
              e("div", fl, [
                t[43] || (t[43] = e("label", { class: "di-form-label" }, "説明", -1)),
                M(e("textarea", {
                  "onUpdate:modelValue": t[11] || (t[11] = (s) => A.value = s),
                  rows: "2",
                  placeholder: "このフィールドの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [E, A.value]
                ])
              ])
            ], 64)) : x("", !0),
            u.value === "action" ? (d(), r(B, { key: 2 }, [
              e("div", kl, [
                t[44] || (t[44] = e("label", { class: "di-form-label" }, "アクションタイプ", -1)),
                M(e("select", {
                  "onUpdate:modelValue": t[12] || (t[12] = (s) => f.value = s),
                  class: "di-select"
                }, [
                  (d(), r(B, null, J(Ue, (s) => e("option", {
                    key: s.value,
                    value: s.value
                  }, C(s.label), 9, bl)), 64))
                ], 512), [
                  [ae, f.value]
                ])
              ]),
              f.value === "api" ? (d(), r("div", gl, [
                e("div", xl, [
                  t[45] || (t[45] = e("label", { class: "di-form-label" }, "メソッド", -1)),
                  M(e("select", {
                    "onUpdate:modelValue": t[13] || (t[13] = (s) => O.value = s),
                    class: "di-select"
                  }, [
                    (d(), r(B, null, J(Ve, (s) => e("option", {
                      key: s,
                      value: s
                    }, C(s), 9, wl)), 64))
                  ], 512), [
                    [ae, O.value]
                  ])
                ]),
                e("div", Il, [
                  t[46] || (t[46] = e("label", { class: "di-form-label" }, "エンドポイント", -1)),
                  M(e("input", {
                    "onUpdate:modelValue": t[14] || (t[14] = (s) => p.value = s),
                    type: "text",
                    placeholder: "/api/tasks",
                    class: "di-input"
                  }, null, 512), [
                    [E, p.value]
                  ])
                ])
              ])) : (d(), r("div", Ml, [
                e("label", Cl, C(f.value === "navigate" ? "遷移先パス" : f.value === "modal" ? "モーダル名" : f.value === "emit" ? "イベント名" : "関数名"), 1),
                M(e("input", {
                  "onUpdate:modelValue": t[15] || (t[15] = (s) => p.value = s),
                  type: "text",
                  placeholder: f.value === "navigate" ? "/tasks" : f.value === "modal" ? "ConfirmDialog" : f.value === "emit" ? "onSubmit" : "handleClick",
                  class: "di-input"
                }, null, 8, $l), [
                  [E, p.value]
                ])
              ])),
              e("div", Pl, [
                t[47] || (t[47] = e("label", { class: "di-form-label" }, "説明", -1)),
                M(e("textarea", {
                  "onUpdate:modelValue": t[16] || (t[16] = (s) => j.value = s),
                  rows: "2",
                  placeholder: "このアクションの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [E, j.value]
                ])
              ])
            ], 64)) : x("", !0),
            u.value === "links" ? (d(), r(B, { key: 3 }, [
              e("div", El, [
                t[48] || (t[48] = e("label", { class: "di-form-label" }, "テストファイルパス", -1)),
                M(e("input", {
                  "onUpdate:modelValue": t[17] || (t[17] = (s) => n.value = s),
                  type: "text",
                  placeholder: "src/__tests__/components/MyComponent.test.ts",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [E, n.value]
                ])
              ]),
              e("div", _l, [
                t[49] || (t[49] = e("label", { class: "di-form-label" }, "Figma URL", -1)),
                M(e("input", {
                  "onUpdate:modelValue": t[18] || (t[18] = (s) => S.value = s),
                  type: "text",
                  placeholder: "https://www.figma.com/design/...",
                  class: "di-input"
                }, null, 512), [
                  [E, S.value]
                ])
              ]),
              e("div", Tl, [
                e("div", Ul, [
                  t[50] || (t[50] = e("label", { class: "di-form-label" }, "GitHub Issue", -1)),
                  M(e("input", {
                    "onUpdate:modelValue": t[19] || (t[19] = (s) => L.value = s),
                    type: "text",
                    placeholder: "#123",
                    class: "di-input"
                  }, null, 512), [
                    [E, L.value]
                  ])
                ]),
                e("div", Vl, [
                  t[51] || (t[51] = e("label", { class: "di-form-label" }, "GitHub PR", -1)),
                  M(e("input", {
                    "onUpdate:modelValue": t[20] || (t[20] = (s) => $.value = s),
                    type: "text",
                    placeholder: "#456",
                    class: "di-input"
                  }, null, 512), [
                    [E, $.value]
                  ])
                ])
              ]),
              e("div", Dl, [
                t[52] || (t[52] = e("label", { class: "di-form-label" }, "関連ドキュメント", -1)),
                M(e("input", {
                  "onUpdate:modelValue": t[21] || (t[21] = (s) => z.value = s),
                  type: "text",
                  placeholder: "https://docs.example.com/...",
                  class: "di-input"
                }, null, 512), [
                  [E, z.value]
                ])
              ])
            ], 64)) : x("", !0),
            u.value === "meta" ? (d(), r(B, { key: 4 }, [
              e("div", Ll, [
                t[53] || (t[53] = e("label", { class: "di-form-label" }, "使用Piniaストア (カンマ区切り)", -1)),
                M(e("input", {
                  "onUpdate:modelValue": t[22] || (t[22] = (s) => U.value = s),
                  type: "text",
                  placeholder: "useUserStore, useThemeStore",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [E, U.value]
                ])
              ]),
              e("div", Sl, [
                t[54] || (t[54] = e("label", { class: "di-form-label" }, "使用コンポーネント (カンマ区切り)", -1)),
                M(e("input", {
                  "onUpdate:modelValue": t[23] || (t[23] = (s) => H.value = s),
                  type: "text",
                  placeholder: "Button, Modal, Input",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [E, H.value]
                ])
              ]),
              e("div", Al, [
                t[55] || (t[55] = e("label", { class: "di-form-label" }, "i18nキー (カンマ区切り)", -1)),
                M(e("input", {
                  "onUpdate:modelValue": t[24] || (t[24] = (s) => V.value = s),
                  type: "text",
                  placeholder: "common.save, errors.required",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [E, V.value]
                ])
              ]),
              e("div", jl, [
                t[56] || (t[56] = e("label", { class: "di-form-label" }, "デザイントークン (カンマ区切り)", -1)),
                M(e("input", {
                  "onUpdate:modelValue": t[25] || (t[25] = (s) => l.value = s),
                  type: "text",
                  placeholder: "primaryColor, secondaryColor",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [E, l.value]
                ])
              ]),
              e("div", ql, [
                t[57] || (t[57] = e("label", { class: "di-form-label" }, "アクセシビリティ", -1)),
                M(e("textarea", {
                  "onUpdate:modelValue": t[26] || (t[26] = (s) => k.value = s),
                  rows: "2",
                  placeholder: "キーボード操作、スクリーンリーダー対応などのメモ...",
                  class: "di-textarea"
                }, null, 512), [
                  [E, k.value]
                ])
              ]),
              e("div", Bl, [
                t[58] || (t[58] = e("label", { class: "di-form-label" }, "レスポンシブ動作", -1)),
                M(e("textarea", {
                  "onUpdate:modelValue": t[27] || (t[27] = (s) => v.value = s),
                  rows: "2",
                  placeholder: "モバイルでの表示変更、ブレークポイントなど...",
                  class: "di-textarea"
                }, null, 512), [
                  [E, v.value]
                ])
              ])
            ], 64)) : x("", !0)
          ]),
          e("div", Ol, [
            e("button", {
              onClick: _e,
              class: "di-btn-delete"
            }, [
              b(i(Me), { style: { width: "14px", height: "14px" } }),
              t[59] || (t[59] = D(" 削除 ", -1))
            ]),
            e("div", zl, [
              e("button", {
                onClick: Q,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: Ee,
                class: "di-btn-save"
              }, [
                b(i(Ge), { style: { width: "14px", height: "14px" } }),
                t[60] || (t[60] = D(" 保存 ", -1))
              ])
            ])
          ])
        ])
      ])) : x("", !0)
    ]));
  }
}), Hl = /* @__PURE__ */ ue(Rl, [["__scopeId", "data-v-fdafa9a6"]]), Nl = { class: "di-highlight-label" }, Fl = {
  key: 1,
  "data-dev-inspector": "",
  class: "di-pick-banner"
}, Gl = ["title", "onClick"], Xl = /* @__PURE__ */ ie({
  __name: "DevPickOverlay",
  setup(c) {
    const o = ne(), u = h(null), m = h(null);
    function P(g) {
      const I = o.getElementConfig(g);
      if (!(I != null && I.note)) return null;
      const y = {
        info: Ie,
        warning: ge,
        todo: xe,
        question: we
      }, n = {
        info: "#60a5fa",
        warning: "#fbbf24",
        todo: "#10b981",
        question: "#a78bfa"
      };
      return {
        icon: y[I.note.type || "info"],
        color: n[I.note.type || "info"],
        text: I.note.text
      };
    }
    const _ = h(0), T = h(0), A = te(() => {
      const g = _.value, I = T.value, y = [];
      if (!o.isEnabled) return y;
      const n = o.getConfiguredSelectors();
      for (const S of n)
        try {
          const L = document.querySelector(S);
          if (L) {
            const $ = L.getBoundingClientRect();
            y.push({
              selector: S,
              element: L,
              top: $.top + g - 4,
              left: $.right + I + 4,
              noteInfo: P(S)
            });
          }
        } catch {
        }
      return y;
    });
    function f(g) {
      if (!o.isPickMode) return;
      if (g.target.closest("[data-dev-inspector]")) {
        u.value = null, m.value = null, o.setHoveredSelector(null);
        return;
      }
      const y = document.elementFromPoint(g.clientX, g.clientY);
      if (!y || y === document.body || y === document.documentElement) {
        u.value = null, m.value = null, o.setHoveredSelector(null);
        return;
      }
      if (y.closest("[data-dev-inspector]"))
        return;
      m.value = y;
      const n = y.getBoundingClientRect();
      u.value = {
        top: `${n.top + window.scrollY}px`,
        left: `${n.left + window.scrollX}px`,
        width: `${n.width}px`,
        height: `${n.height}px`
      };
      const S = o.generateSelector(y);
      o.setHoveredSelector(S);
    }
    function p(g) {
      if (!(!o.isPickMode || g.target.closest("[data-dev-inspector]")) && (g.preventDefault(), g.stopPropagation(), m.value)) {
        const y = o.generateSelector(m.value);
        o.startEditing(y), o.togglePickMode();
      }
    }
    function O(g) {
      g.key === "Escape" && o.isPickMode && o.togglePickMode();
    }
    function j() {
      _.value = window.scrollY, T.value = window.scrollX;
    }
    return be(() => {
      window.addEventListener("mousemove", f, !0), window.addEventListener("click", p, !0), window.addEventListener("keydown", O), window.addEventListener("scroll", j), window.addEventListener("resize", j);
    }), Se(() => {
      window.removeEventListener("mousemove", f, !0), window.removeEventListener("click", p, !0), window.removeEventListener("keydown", O), window.removeEventListener("scroll", j), window.removeEventListener("resize", j);
    }), fe(() => o.isPickMode, (g) => {
      g || (u.value = null, m.value = null);
    }), (g, I) => (d(), R(W, { to: "body" }, [
      i(o).isPickMode && u.value ? (d(), r("div", {
        key: 0,
        "data-dev-inspector": "",
        class: "di-highlight",
        style: F({
          top: u.value.top,
          left: u.value.left,
          width: u.value.width,
          height: u.value.height
        })
      }, [
        e("div", Nl, C(i(o).hoveredSelector), 1)
      ], 4)) : x("", !0),
      i(o).isPickMode ? (d(), r("div", Fl, [...I[0] || (I[0] = [
        e("span", null, "要素をクリックしてメモを追加", -1),
        e("kbd", null, "ESC", -1),
        e("span", { class: "di-pick-hint" }, "でキャンセル", -1)
      ])])) : x("", !0),
      i(o).isEnabled && !i(o).isPickMode && !i(o).isEditMode ? (d(!0), r(B, { key: 2 }, J(A.value, (y) => (d(), r("div", {
        key: y.selector,
        "data-dev-inspector": "",
        class: "di-annotation-marker",
        style: F({
          top: `${y.top}px`,
          left: `${y.left}px`
        })
      }, [
        y.noteInfo ? (d(), r("div", {
          key: 0,
          class: "di-marker-dot",
          style: F({ backgroundColor: y.noteInfo.color }),
          title: y.noteInfo.text,
          onClick: (n) => i(o).startEditing(y.selector)
        }, [
          (d(), R(ke(y.noteInfo.icon), { style: { width: "10px", height: "10px", color: "white" } }))
        ], 12, Gl)) : x("", !0)
      ], 4))), 128)) : x("", !0)
    ]));
  }
}), Kl = /* @__PURE__ */ ue(Xl, [["__scopeId", "data-v-bd3c953f"]]), Yl = {
  key: 0,
  "data-dev-inspector": ""
}, Zl = /* @__PURE__ */ ie({
  __name: "DevInspector",
  props: {
    storageKey: { default: "devInspector:elementConfigs" },
    enabledInProduction: { type: Boolean, default: !1 },
    initialAnnotations: {}
  },
  setup(c) {
    const o = c, u = ne();
    return be(() => {
      u.init({
        storageKey: o.storageKey,
        enabledInProduction: o.enabledInProduction,
        initialAnnotations: o.initialAnnotations
      });
    }), (m, P) => i(u).isAvailable ? (d(), r("div", Yl, [
      b(Jt),
      b(Hl),
      b(Kl)
    ])) : x("", !0);
  }
}), Ql = {
  install(c, o = {}) {
    const { autoRegister: u = !0, ...m } = o;
    u && c.component("DevInspector", Zl), c.provide("devInspectorOptions", m);
  }
};
export {
  Hl as DevElementEditor,
  Zl as DevInspector,
  Jt as DevPanel,
  Kl as DevPickOverlay,
  Ql as VueDevInspector,
  Ql as default,
  lo as useDevInspector,
  ne as useDevInspectorStore
};
