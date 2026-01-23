import { h as ve, defineComponent as ie, ref as m, computed as te, openBlock as u, createElementBlock as r, Fragment as j, createBlock as F, Teleport as K, unref as d, createVNode as f, createCommentVNode as x, createElementVNode as e, normalizeClass as R, toDisplayString as _, renderList as Y, normalizeStyle as N, createTextVNode as V, withModifiers as de, withDirectives as C, vModelText as U, watch as he, resolveDynamicComponent as fe, vModelSelect as ae, onMounted as be, onUnmounted as Ve } from "vue";
import { u as ne } from "./useDevInspector-BKv95HiW.js";
import { a as Fl } from "./useDevInspector-BKv95HiW.js";
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
const Le = (p) => p.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), $ = (p, s) => ({ size: a, strokeWidth: h = 2, absoluteStrokeWidth: E, color: D, class: L, ...I }, { attrs: k, slots: y }) => ve(
  "svg",
  {
    ...se,
    width: a || se.width,
    height: a || se.height,
    stroke: D || se.stroke,
    "stroke-width": E ? Number(h) * 24 / Number(a) : h,
    ...k,
    class: ["lucide", `lucide-${Le(p)}`],
    ...I
  },
  [
    ...s.map((B) => ve(...B)),
    ...y.default ? [y.default()] : []
  ]
);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ae = $("AlertCircleIcon", [
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
const ke = $("AlertTriangleIcon", [
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
const ge = $("CheckSquareIcon", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pe = $("CodeIcon", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const je = $("DatabaseIcon", [
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
const ce = $("DownloadIcon", [
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
const Be = $("ExternalLinkIcon", [
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
const Oe = $("FileSpreadsheetIcon", [
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
const ye = $("FileTextIcon", [
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
const qe = $("GitBranchIcon", [
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
const xe = $("HelpCircleIcon", [
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
const we = $("InfoIcon", [
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
const Se = $("LinkIcon", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ne = $("MessageSquareIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const He = $("MousePointer2Icon", [
  ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const me = $("PenLineIcon", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ze = $("SaveIcon", [
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
const Re = $("ServerIcon", [
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
const Fe = $("Settings2Icon", [
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
const Ie = $("Trash2Icon", [
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
const Ge = $("UploadIcon", [
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
const Xe = $("Wand2Icon", [
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
const Me = $("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ke = $("ZapIcon", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
]);
async function Ye(p, s, a = {}) {
  var c;
  const h = await import("./xlsx-BopDBbWb.js"), { systemName: E = "System", author: D = "" } = a, L = /* @__PURE__ */ new Date(), I = `${L.getFullYear()}/${L.getMonth() + 1}/${L.getDate()}`, k = h.utils.book_new(), y = [];
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
    (p == null ? void 0 : p.name) || "",
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
    D,
    "",
    "作成日",
    "",
    "",
    "",
    "",
    I
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
    (p == null ? void 0 : p.componentPath) || "",
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
    (p == null ? void 0 : p.figmaUrl) || ""
  ]), y.push([]), y.push(["機能概要"]), y.push([(p == null ? void 0 : p.description) || ""]), y.push([]), y.push(["画面レイアウト　figmaURL"]), y.push([(p == null ? void 0 : p.figmaUrl) || ""]), y.push([]), p != null && p.apis && p.apis.length > 0 && (y.push(["API一覧"]), y.push(["", "メソッド", "", "エンドポイント", "", "", "", "", "", "", "", "説明"]), p.apis.forEach((i) => {
    y.push(["", i.method, "", i.endpoint, "", "", "", "", "", "", "", i.description]);
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
  ]), Object.values(s).forEach((i, P) => {
    var q, O, H;
    const l = i.id;
    let g = "", v = "", w = "";
    if ((q = i.note) != null && q.text && (g = i.note.text), i.fieldInfo && (g += g ? `
` : "", g += `DB: ${i.fieldInfo.table}.${i.fieldInfo.column}`, i.fieldInfo.type && (g += ` (${i.fieldInfo.type})`), i.fieldInfo.description && (g += `
${i.fieldInfo.description}`)), i.actionInfo && (w = `[${{
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行"
    }[i.actionInfo.type] || i.actionInfo.type}]`, i.actionInfo.target && (w += ` ${i.actionInfo.method || ""} ${i.actionInfo.target}`), i.actionInfo.description && (w += `
${i.actionInfo.description}`)), i.links) {
      const T = [];
      i.links.testPath && T.push(`テスト: ${i.links.testPath}`), i.links.figmaUrl && T.push(`Figma: ${i.links.figmaUrl}`), i.links.githubIssue && T.push(`Issue: ${i.links.githubIssue}`), i.links.githubPr && T.push(`PR: ${i.links.githubPr}`), T.length > 0 && (w += w ? `

` : "", w += T.join(`
`));
    }
    if (i.devMeta) {
      const T = [];
      (O = i.devMeta.usedStores) != null && O.length && T.push(`Store: ${i.devMeta.usedStores.join(", ")}`), (H = i.devMeta.usedComponents) != null && H.length && T.push(`Components: ${i.devMeta.usedComponents.join(", ")}`), i.devMeta.accessibility && T.push(`A11y: ${i.devMeta.accessibility}`), i.devMeta.responsive && T.push(`Responsive: ${i.devMeta.responsive}`), T.length > 0 && (w += w ? `

` : "", w += `[開発情報]
` + T.join(`
`));
    }
    y.push([
      "",
      P + 1,
      "",
      l,
      "",
      "",
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
      "",
      v,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      w
    ]);
  });
  const A = h.utils.aoa_to_sheet(y);
  A["!cols"] = [
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
  ], h.utils.book_append_sheet(k, A, "画面設計書");
  const M = `画面仕様書_${((c = p == null ? void 0 : p.name) == null ? void 0 : c.replace(/[/\\?%*:|"<>]/g, "-")) || "screen"}_${I.replace(/\//g, "")}.xlsx`;
  return h.writeFile(k, M), M;
}
const Ze = {
  key: 0,
  class: "di-panel",
  "data-dev-inspector": ""
}, Je = { class: "di-header" }, We = { class: "di-header-title" }, Qe = { class: "di-edit-section" }, et = { class: "di-edit-row" }, tt = { class: "di-edit-label" }, lt = { class: "di-content" }, ot = { class: "di-section" }, st = { class: "di-screen-name" }, it = { class: "di-screen-desc" }, nt = { class: "di-card" }, at = { class: "di-card-label" }, dt = { class: "di-code-blue" }, ut = {
  key: 0,
  class: "di-card"
}, rt = { class: "di-card-label" }, vt = ["href"], pt = {
  key: 1,
  class: "di-card"
}, ct = { class: "di-card-label" }, yt = { class: "di-api-list" }, mt = { class: "di-api-info" }, ht = { class: "di-api-endpoint" }, ft = { class: "di-api-desc" }, bt = {
  key: 2,
  class: "di-card"
}, kt = { class: "di-card-label" }, gt = { class: "di-notes-list" }, xt = {
  key: 1,
  class: "di-no-spec"
}, wt = { class: "di-card" }, It = { class: "di-card-header" }, Mt = { class: "di-card-label" }, Ct = { class: "di-count-badge" }, $t = {
  key: 0,
  class: "di-export-buttons"
}, Et = {
  key: 1,
  class: "di-export-hint"
}, Pt = { class: "di-action-buttons" }, Tt = {
  key: 0,
  class: "di-indicator",
  "data-dev-inspector": ""
}, Ut = {
  key: 0,
  class: "di-indicator-edit"
}, _t = { class: "di-modal" }, Dt = ["value"], Vt = { class: "di-modal-actions" }, Lt = { class: "di-modal" }, At = { class: "di-file-drop" }, jt = {
  key: 0,
  class: "di-error"
}, Bt = { class: "di-modal-actions" }, Ot = ["disabled"], qt = /* @__PURE__ */ ie({
  __name: "DevPanel",
  setup(p) {
    const s = ne(), a = m(!1), h = m(!1), E = m(""), D = m(""), L = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, I = te(() => s.currentScreenSpec), k = te(() => Object.keys(s.elementConfigs).length);
    function y() {
      const P = s.exportConfigs();
      navigator.clipboard.writeText(P), a.value = !1;
    }
    function B() {
      const P = s.exportConfigs(), l = new Blob([P], { type: "application/json" }), g = URL.createObjectURL(l), v = document.createElement("a");
      v.href = g, v.download = "dev-mode-configs.json", v.click(), URL.revokeObjectURL(g), a.value = !1;
    }
    function A() {
      s.downloadAnnotations();
    }
    async function b() {
      try {
        await Ye(
          s.currentScreenSpec,
          s.elementConfigs,
          { systemName: "System" }
        );
      } catch (P) {
        console.error("Failed to export xlsx:", P), alert("xlsx export failed. Make sure xlsx package is installed.");
      }
    }
    function M() {
      try {
        s.importConfigs(E.value), E.value = "", D.value = "", h.value = !1;
      } catch {
        D.value = "JSONの形式が正しくありません";
      }
    }
    function c(P) {
      var w;
      const g = (w = P.target.files) == null ? void 0 : w[0];
      if (!g) return;
      const v = new FileReader();
      v.onload = (q) => {
        var O;
        E.value = (O = q.target) == null ? void 0 : O.result;
      }, v.readAsText(g);
    }
    function i() {
      confirm("すべての要素設定を削除しますか？") && s.clearAllConfigs();
    }
    return (P, l) => {
      var g;
      return u(), r(j, null, [
        (u(), F(K, { to: "body" }, [
          d(s).isEnabled && !d(s).isPanelOpen ? (u(), r("button", {
            key: 0,
            onClick: l[0] || (l[0] = //@ts-ignore
            (...v) => d(s).openPanel && d(s).openPanel(...v)),
            class: "di-fab",
            title: "画面仕様を表示",
            "data-dev-inspector": ""
          }, [
            f(d(ye), { style: { width: "20px", height: "20px" } })
          ])) : x("", !0)
        ])),
        (u(), F(K, { to: "body" }, [
          d(s).isEnabled && d(s).isPanelOpen ? (u(), r("div", Ze, [
            e("div", Je, [
              e("div", We, [
                f(d(pe), { style: { width: "20px", height: "20px", color: "#60a5fa" } }),
                l[11] || (l[11] = e("span", null, "Developer Mode", -1))
              ]),
              e("button", {
                onClick: l[1] || (l[1] = //@ts-ignore
                (...v) => d(s).closePanel && d(s).closePanel(...v)),
                class: "di-close-btn"
              }, [
                f(d(Me), { style: { width: "20px", height: "20px" } })
              ])
            ]),
            e("div", Qe, [
              e("div", et, [
                e("div", tt, [
                  f(d(me), { style: { width: "16px", height: "16px", color: "#fbbf24" } }),
                  l[12] || (l[12] = e("span", null, "編集モード", -1))
                ]),
                e("button", {
                  onClick: l[2] || (l[2] = //@ts-ignore
                  (...v) => d(s).toggleEditMode && d(s).toggleEditMode(...v)),
                  class: R(["di-toggle", { active: d(s).isEditMode }])
                }, [
                  e("span", {
                    class: R(["di-toggle-knob", { active: d(s).isEditMode }])
                  }, null, 2)
                ], 2)
              ]),
              l[13] || (l[13] = e("p", { class: "di-edit-hint" }, "ONにすると、要素をクリックして情報を編集できます", -1)),
              e("button", {
                onClick: l[3] || (l[3] = //@ts-ignore
                (...v) => d(s).togglePickMode && d(s).togglePickMode(...v)),
                class: R(["di-pick-btn", { active: d(s).isPickMode }])
              }, [
                f(d(He), { style: { width: "16px", height: "16px" } }),
                e("span", null, _(d(s).isPickMode ? "要素選択中..." : "任意の要素にメモを追加"), 1)
              ], 2)
            ]),
            e("div", lt, [
              I.value ? (u(), r(j, { key: 0 }, [
                e("div", ot, [
                  e("h2", st, _(I.value.name), 1),
                  e("p", it, _(I.value.description), 1)
                ]),
                e("div", nt, [
                  e("div", at, [
                    f(d(pe), { style: { width: "16px", height: "16px" } }),
                    l[14] || (l[14] = e("span", null, "Component Path", -1))
                  ]),
                  e("code", dt, _(I.value.componentPath), 1)
                ]),
                I.value.figmaUrl ? (u(), r("div", ut, [
                  e("div", rt, [
                    f(d(Be), { style: { width: "16px", height: "16px" } }),
                    l[15] || (l[15] = e("span", null, "Figma Design", -1))
                  ]),
                  e("a", {
                    href: I.value.figmaUrl,
                    target: "_blank",
                    class: "di-link-purple"
                  }, _(I.value.figmaUrl), 9, vt)
                ])) : x("", !0),
                I.value.apis.length ? (u(), r("div", pt, [
                  e("div", ct, [
                    f(d(Re), { style: { width: "16px", height: "16px" } }),
                    l[16] || (l[16] = e("span", null, "API Endpoints", -1))
                  ]),
                  e("div", yt, [
                    (u(!0), r(j, null, Y(I.value.apis, (v, w) => (u(), r("div", {
                      key: w,
                      class: "di-api-item"
                    }, [
                      e("span", {
                        class: "di-method-badge",
                        style: N({ backgroundColor: L[v.method] + "20", color: L[v.method] })
                      }, _(v.method), 5),
                      e("div", mt, [
                        e("code", ht, _(v.endpoint), 1),
                        e("p", ft, _(v.description), 1)
                      ])
                    ]))), 128))
                  ])
                ])) : x("", !0),
                (g = I.value.notes) != null && g.length ? (u(), r("div", bt, [
                  e("div", kt, [
                    f(d(Ae), { style: { width: "16px", height: "16px" } }),
                    l[17] || (l[17] = e("span", null, "Notes", -1))
                  ]),
                  e("ul", gt, [
                    (u(!0), r(j, null, Y(I.value.notes, (v, w) => (u(), r("li", {
                      key: w,
                      class: "di-note-item"
                    }, [
                      l[18] || (l[18] = e("span", { class: "di-bullet" }, "•", -1)),
                      e("span", null, _(v), 1)
                    ]))), 128))
                  ])
                ])) : x("", !0)
              ], 64)) : (u(), r("div", xt, [
                f(d(ye), { style: { width: "48px", height: "48px", color: "#334155" } }),
                l[19] || (l[19] = e("p", null, [
                  V("この画面の仕様情報は"),
                  e("br"),
                  V("まだ登録されていません")
                ], -1))
              ])),
              e("div", wt, [
                e("div", It, [
                  e("div", Mt, [
                    f(d(me), { style: { width: "16px", height: "16px" } }),
                    l[20] || (l[20] = e("span", null, "登録済み要素", -1)),
                    e("span", Ct, _(k.value), 1)
                  ])
                ]),
                k.value > 0 ? (u(), r("div", $t, [
                  e("button", {
                    onClick: A,
                    class: "di-btn-green"
                  }, [
                    f(d(qe), { style: { width: "16px", height: "16px" } }),
                    l[21] || (l[21] = V(" Git管理用に保存 ", -1))
                  ]),
                  e("button", {
                    onClick: b,
                    class: "di-btn-blue"
                  }, [
                    f(d(Oe), { style: { width: "16px", height: "16px" } }),
                    l[22] || (l[22] = V(" 画面仕様書 (xlsx) 出力 ", -1))
                  ])
                ])) : x("", !0),
                k.value > 0 ? (u(), r("p", Et, [...l[23] || (l[23] = [
                  V(" JSON: ", -1),
                  e("code", null, "dev-annotations.json", -1),
                  V(" に配置してcommit ", -1)
                ])])) : x("", !0),
                e("div", Pt, [
                  e("button", {
                    onClick: l[4] || (l[4] = (v) => a.value = !0),
                    class: "di-btn-small"
                  }, [
                    f(d(ce), { style: { width: "14px", height: "14px" } }),
                    l[24] || (l[24] = V(" エクスポート ", -1))
                  ]),
                  e("button", {
                    onClick: l[5] || (l[5] = (v) => h.value = !0),
                    class: "di-btn-small"
                  }, [
                    f(d(Ge), { style: { width: "14px", height: "14px" } }),
                    l[25] || (l[25] = V(" インポート ", -1))
                  ]),
                  k.value > 0 ? (u(), r("button", {
                    key: 0,
                    onClick: i,
                    class: "di-btn-small di-btn-danger"
                  }, [
                    f(d(Ie), { style: { width: "14px", height: "14px" } }),
                    l[26] || (l[26] = V(" 全削除 ", -1))
                  ])) : x("", !0)
                ])
              ])
            ]),
            l[27] || (l[27] = e("div", { class: "di-footer" }, [
              e("kbd", null, "Ctrl"),
              e("span", null, "+"),
              e("kbd", null, "Shift"),
              e("span", null, "+"),
              e("kbd", null, "D"),
              e("span", { class: "di-footer-text" }, "で開発者モード切替")
            ], -1))
          ])) : x("", !0)
        ])),
        (u(), F(K, { to: "body" }, [
          d(s).isEnabled ? (u(), r("div", Tt, [
            l[28] || (l[28] = e("span", { class: "di-indicator-dot" }, null, -1)),
            l[29] || (l[29] = V(" Developer Mode ", -1)),
            d(s).isEditMode ? (u(), r("span", Ut, "• 編集中")) : x("", !0)
          ])) : x("", !0)
        ])),
        (u(), F(K, { to: "body" }, [
          a.value ? (u(), r("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: l[7] || (l[7] = de((v) => a.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", _t, [
              l[31] || (l[31] = e("h3", { class: "di-modal-title" }, "設定をエクスポート", -1)),
              e("textarea", {
                readonly: "",
                value: d(s).exportConfigs(),
                class: "di-modal-textarea"
              }, null, 8, Dt),
              e("div", Vt, [
                e("button", {
                  onClick: l[6] || (l[6] = (v) => a.value = !1),
                  class: "di-btn-small"
                }, "閉じる"),
                e("button", {
                  onClick: B,
                  class: "di-btn-small di-btn-gray"
                }, [
                  f(d(ce), { style: { width: "14px", height: "14px" } }),
                  l[30] || (l[30] = V(" ファイル保存 ", -1))
                ]),
                e("button", {
                  onClick: y,
                  class: "di-btn-small di-btn-primary"
                }, "コピー")
              ])
            ])
          ])) : x("", !0)
        ])),
        (u(), F(K, { to: "body" }, [
          h.value ? (u(), r("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: l[10] || (l[10] = de((v) => h.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", Lt, [
              l[33] || (l[33] = e("h3", { class: "di-modal-title" }, "設定をインポート", -1)),
              e("label", At, [
                e("input", {
                  type: "file",
                  accept: ".json",
                  onChange: c
                }, null, 32),
                l[32] || (l[32] = e("span", null, "JSONファイルをドラッグまたはクリック", -1))
              ]),
              C(e("textarea", {
                "onUpdate:modelValue": l[8] || (l[8] = (v) => E.value = v),
                placeholder: "またはJSONを直接貼り付け...",
                class: "di-modal-textarea di-modal-textarea-input"
              }, null, 512), [
                [U, E.value]
              ]),
              D.value ? (u(), r("p", jt, _(D.value), 1)) : x("", !0),
              e("div", Bt, [
                e("button", {
                  onClick: l[9] || (l[9] = (v) => {
                    h.value = !1, E.value = "", D.value = "";
                  }),
                  class: "di-btn-small"
                }, " キャンセル "),
                e("button", {
                  onClick: M,
                  disabled: !E.value,
                  class: "di-btn-small di-btn-primary"
                }, " インポート ", 8, Ot)
              ])
            ])
          ])) : x("", !0)
        ]))
      ], 64);
    };
  }
}), ue = (p, s) => {
  const a = p.__vccOpts || p;
  for (const [h, E] of s)
    a[h] = E;
  return a;
}, St = /* @__PURE__ */ ue(qt, [["__scopeId", "data-v-8d5b1f8b"]]), Nt = { class: "di-editor-modal" }, Ht = { class: "di-editor-header" }, zt = { class: "di-header-actions" }, Rt = {
  key: 0,
  class: "di-static-indicator"
}, Ft = {
  key: 1,
  class: "di-binding-indicator"
}, Gt = {
  key: 0,
  class: "di-binding-source"
}, Xt = { class: "di-editor-tabs" }, Kt = { class: "di-editor-content" }, Yt = { class: "di-form-group" }, Zt = { class: "di-note-types" }, Jt = ["onClick"], Wt = { class: "di-form-group" }, Qt = { class: "di-form-group" }, el = { class: "di-form-row" }, tl = { class: "di-form-group" }, ll = { class: "di-form-group" }, ol = { class: "di-form-group" }, sl = ["value"], il = { class: "di-form-group" }, nl = { class: "di-form-group" }, al = { class: "di-form-group" }, dl = ["value"], ul = {
  key: 0,
  class: "di-form-row"
}, rl = {
  class: "di-form-group",
  style: { flex: "0 0 100px" }
}, vl = ["value"], pl = {
  class: "di-form-group",
  style: { flex: "1" }
}, cl = {
  key: 1,
  class: "di-form-group"
}, yl = { class: "di-form-label" }, ml = ["placeholder"], hl = { class: "di-form-group" }, fl = { class: "di-form-group" }, bl = { class: "di-form-group" }, kl = { class: "di-form-row" }, gl = { class: "di-form-group" }, xl = { class: "di-form-group" }, wl = { class: "di-form-group" }, Il = { class: "di-form-group" }, Ml = { class: "di-form-group" }, Cl = { class: "di-form-group" }, $l = { class: "di-form-group" }, El = { class: "di-form-group" }, Pl = { class: "di-form-group" }, Tl = { class: "di-editor-footer" }, Ul = { class: "di-editor-actions" }, _l = /* @__PURE__ */ ie({
  __name: "DevElementEditor",
  setup(p) {
    const s = ne(), a = m("note"), h = m(""), E = m(""), D = m(""), L = m(""), I = m(""), k = m("navigate"), y = m(""), B = m("GET"), A = m(""), b = m(""), M = m(""), c = m("info"), i = m(""), P = m(""), l = m(""), g = m(""), v = m(""), w = m(""), q = m(""), O = m(""), H = m(""), T = m(""), Z = m(""), G = m(""), J = m(""), W = m(!1), Ce = te(() => s.editingElementId !== null), X = te(() => s.editingElementId);
    he(X, (z) => {
      var t, o, ee, le, oe, S;
      if (z) {
        const n = s.getElementConfig(z);
        n != null && n.fieldInfo && (h.value = n.fieldInfo.table || "", E.value = n.fieldInfo.column || "", D.value = n.fieldInfo.type || "", L.value = ((t = n.fieldInfo.validation) == null ? void 0 : t.join(", ")) || "", I.value = n.fieldInfo.description || ""), n != null && n.actionInfo && (k.value = n.actionInfo.type || "navigate", y.value = n.actionInfo.target || "", B.value = n.actionInfo.method || "GET", A.value = n.actionInfo.description || ""), n != null && n.note && (b.value = n.note.text || "", M.value = n.note.author || "", c.value = n.note.type || "info"), n != null && n.links && (i.value = n.links.testPath || "", P.value = n.links.figmaUrl || "", l.value = n.links.githubIssue || "", g.value = n.links.githubPr || "", v.value = n.links.relatedDocs || ""), n != null && n.devMeta && (w.value = ((o = n.devMeta.usedStores) == null ? void 0 : o.join(", ")) || "", q.value = ((ee = n.devMeta.usedComponents) == null ? void 0 : ee.join(", ")) || "", O.value = ((le = n.devMeta.i18nKeys) == null ? void 0 : le.join(", ")) || "", H.value = ((oe = n.devMeta.designTokens) == null ? void 0 : oe.join(", ")) || "", T.value = n.devMeta.accessibility || "", Z.value = n.devMeta.responsive || ""), n != null && n.sourceBinding && (G.value = n.sourceBinding.type || "", J.value = n.sourceBinding.source || "", W.value = n.sourceBinding.isStatic || !1), (S = n == null ? void 0 : n.note) != null && S.text ? a.value = "note" : n != null && n.fieldInfo ? a.value = "field" : n != null && n.actionInfo ? a.value = "action" : n != null && n.links ? a.value = "links" : n != null && n.devMeta ? a.value = "meta" : a.value = "note";
      } else
        re();
    });
    function re() {
      h.value = "", E.value = "", D.value = "", L.value = "", I.value = "", k.value = "navigate", y.value = "", B.value = "GET", A.value = "", b.value = "", M.value = "", c.value = "info", i.value = "", P.value = "", l.value = "", g.value = "", v.value = "", w.value = "", q.value = "", O.value = "", H.value = "", T.value = "", Z.value = "", G.value = "", J.value = "", W.value = !1, a.value = "note";
    }
    function Q() {
      s.stopEditing(), re();
    }
    function $e() {
      if (X.value)
        try {
          const z = document.querySelector(X.value);
          if (!z) return;
          const t = s.autoDetectElementInfo(z, X.value);
          t.sourceBinding && (G.value = t.sourceBinding.type || "", J.value = t.sourceBinding.source || "", W.value = t.sourceBinding.isStatic || !1, t.sourceBinding.isStatic && !b.value && (b.value = "固定文言", c.value = "info"));
        } catch (z) {
          console.error("[DevInspector] Auto-detect failed:", z);
        }
    }
    function Ee() {
      if (!X.value) return;
      const z = h.value && E.value ? {
        table: h.value,
        column: E.value,
        type: D.value || void 0,
        validation: L.value ? L.value.split(",").map((S) => S.trim()) : void 0,
        description: I.value || void 0
      } : void 0, t = y.value ? {
        type: k.value,
        target: y.value,
        method: k.value === "api" ? B.value : void 0,
        description: A.value || void 0
      } : void 0, o = b.value ? {
        text: b.value,
        author: M.value || void 0,
        type: c.value
      } : void 0, ee = i.value || P.value || l.value || g.value || v.value ? {
        testPath: i.value || void 0,
        figmaUrl: P.value || void 0,
        githubIssue: l.value || void 0,
        githubPr: g.value || void 0,
        relatedDocs: v.value || void 0
      } : void 0, le = w.value || q.value || O.value || H.value || T.value || Z.value ? {
        usedStores: w.value ? w.value.split(",").map((S) => S.trim()) : void 0,
        usedComponents: q.value ? q.value.split(",").map((S) => S.trim()) : void 0,
        i18nKeys: O.value ? O.value.split(",").map((S) => S.trim()) : void 0,
        designTokens: H.value ? H.value.split(",").map((S) => S.trim()) : void 0,
        accessibility: T.value || void 0,
        responsive: Z.value || void 0
      } : void 0, oe = G.value ? {
        type: G.value,
        source: J.value || void 0,
        isStatic: W.value
      } : void 0;
      s.setElementConfig(X.value, {
        fieldInfo: z,
        actionInfo: t,
        note: o,
        links: ee,
        devMeta: le,
        sourceBinding: oe
      }), Q();
    }
    function Pe() {
      X.value && (s.deleteElementConfig(X.value), Q());
    }
    const Te = ["VARCHAR", "TEXT", "INT", "BIGINT", "BOOLEAN", "DATE", "DATETIME", "TIMESTAMP", "JSON"], Ue = [
      { value: "navigate", label: "画面遷移" },
      { value: "api", label: "API呼び出し" },
      { value: "modal", label: "モーダル表示" },
      { value: "emit", label: "イベント発火" },
      { value: "function", label: "関数実行" }
    ], _e = ["GET", "POST", "PUT", "DELETE", "PATCH"], De = [
      { value: "info", label: "情報", icon: we, color: "#60a5fa" },
      { value: "warning", label: "注意", icon: ke, color: "#fbbf24" },
      { value: "todo", label: "TODO", icon: ge, color: "#10b981" },
      { value: "question", label: "質問", icon: xe, color: "#a78bfa" }
    ];
    return (z, t) => (u(), F(K, { to: "body" }, [
      Ce.value ? (u(), r("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: de(Q, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", Nt, [
          e("div", Ht, [
            t[28] || (t[28] = e("h3", null, "要素情報を編集", -1)),
            e("div", zt, [
              e("button", {
                onClick: $e,
                class: "di-btn-auto",
                title: "自動検出"
              }, [
                f(d(Xe), { style: { width: "16px", height: "16px" } })
              ]),
              e("button", {
                onClick: Q,
                class: "di-editor-close"
              }, [
                f(d(Me), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          W.value ? (u(), r("div", Rt, [...t[29] || (t[29] = [
            e("span", { class: "di-static-badge" }, "固定文言", -1),
            e("span", { class: "di-static-hint" }, "このテキストはソースコードに直接記述されています", -1)
          ])])) : G.value ? (u(), r("div", Ft, [
            e("span", {
              class: R(["di-binding-badge", "di-binding-" + G.value])
            }, _(G.value), 3),
            J.value ? (u(), r("span", Gt, _(J.value), 1)) : x("", !0)
          ])) : x("", !0),
          e("div", Xt, [
            e("button", {
              onClick: t[0] || (t[0] = (o) => a.value = "note"),
              class: R(["di-editor-tab", { active: a.value === "note" }]),
              style: N(a.value === "note" ? { color: "#10b981", borderColor: "#10b981", background: "rgba(16, 185, 129, 0.1)" } : {})
            }, [
              f(d(Ne), { style: { width: "12px", height: "12px" } }),
              t[30] || (t[30] = V(" メモ ", -1))
            ], 6),
            e("button", {
              onClick: t[1] || (t[1] = (o) => a.value = "field"),
              class: R(["di-editor-tab", { active: a.value === "field" }]),
              style: N(a.value === "field" ? { color: "#60a5fa", borderColor: "#60a5fa", background: "rgba(96, 165, 250, 0.1)" } : {})
            }, [
              f(d(je), { style: { width: "12px", height: "12px" } }),
              t[31] || (t[31] = V(" データ ", -1))
            ], 6),
            e("button", {
              onClick: t[2] || (t[2] = (o) => a.value = "action"),
              class: R(["di-editor-tab", { active: a.value === "action" }]),
              style: N(a.value === "action" ? { color: "#a78bfa", borderColor: "#a78bfa", background: "rgba(167, 139, 250, 0.1)" } : {})
            }, [
              f(d(Ke), { style: { width: "12px", height: "12px" } }),
              t[32] || (t[32] = V(" アクション ", -1))
            ], 6),
            e("button", {
              onClick: t[3] || (t[3] = (o) => a.value = "links"),
              class: R(["di-editor-tab", { active: a.value === "links" }]),
              style: N(a.value === "links" ? { color: "#f59e0b", borderColor: "#f59e0b", background: "rgba(245, 158, 11, 0.1)" } : {})
            }, [
              f(d(Se), { style: { width: "12px", height: "12px" } }),
              t[33] || (t[33] = V(" リンク ", -1))
            ], 6),
            e("button", {
              onClick: t[4] || (t[4] = (o) => a.value = "meta"),
              class: R(["di-editor-tab", { active: a.value === "meta" }]),
              style: N(a.value === "meta" ? { color: "#ec4899", borderColor: "#ec4899", background: "rgba(236, 72, 153, 0.1)" } : {})
            }, [
              f(d(Fe), { style: { width: "12px", height: "12px" } }),
              t[34] || (t[34] = V(" 開発情報 ", -1))
            ], 6)
          ]),
          e("div", Kt, [
            a.value === "note" ? (u(), r(j, { key: 0 }, [
              e("div", Yt, [
                t[35] || (t[35] = e("label", { class: "di-form-label" }, "タイプ", -1)),
                e("div", Zt, [
                  (u(), r(j, null, Y(De, (o) => e("button", {
                    key: o.value,
                    onClick: (ee) => c.value = o.value,
                    class: "di-note-type-btn",
                    style: N(c.value === o.value ? { color: o.color, borderColor: o.color, background: o.color + "15" } : {})
                  }, [
                    (u(), F(fe(o.icon), {
                      style: N([{ width: "16px", height: "16px" }, { color: c.value === o.value ? o.color : "#64748b" }])
                    }, null, 8, ["style"])),
                    e("span", {
                      style: N({ color: c.value === o.value ? o.color : "#94a3b8" })
                    }, _(o.label), 5)
                  ], 12, Jt)), 64))
                ])
              ]),
              e("div", Wt, [
                t[36] || (t[36] = e("label", { class: "di-form-label" }, "メモ内容 *", -1)),
                C(e("textarea", {
                  "onUpdate:modelValue": t[5] || (t[5] = (o) => b.value = o),
                  rows: "4",
                  placeholder: "この要素についてのメモ、説明、注意事項など...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, b.value]
                ])
              ]),
              e("div", Qt, [
                t[37] || (t[37] = e("label", { class: "di-form-label" }, "記入者（オプション）", -1)),
                C(e("input", {
                  "onUpdate:modelValue": t[6] || (t[6] = (o) => M.value = o),
                  type: "text",
                  placeholder: "名前",
                  class: "di-input"
                }, null, 512), [
                  [U, M.value]
                ])
              ])
            ], 64)) : x("", !0),
            a.value === "field" ? (u(), r(j, { key: 1 }, [
              e("div", el, [
                e("div", tl, [
                  t[38] || (t[38] = e("label", { class: "di-form-label" }, "テーブル名 *", -1)),
                  C(e("input", {
                    "onUpdate:modelValue": t[7] || (t[7] = (o) => h.value = o),
                    type: "text",
                    placeholder: "users",
                    class: "di-input"
                  }, null, 512), [
                    [U, h.value]
                  ])
                ]),
                e("div", ll, [
                  t[39] || (t[39] = e("label", { class: "di-form-label" }, "カラム名 *", -1)),
                  C(e("input", {
                    "onUpdate:modelValue": t[8] || (t[8] = (o) => E.value = o),
                    type: "text",
                    placeholder: "name",
                    class: "di-input"
                  }, null, 512), [
                    [U, E.value]
                  ])
                ])
              ]),
              e("div", ol, [
                t[41] || (t[41] = e("label", { class: "di-form-label" }, "データ型", -1)),
                C(e("select", {
                  "onUpdate:modelValue": t[9] || (t[9] = (o) => D.value = o),
                  class: "di-select"
                }, [
                  t[40] || (t[40] = e("option", { value: "" }, "選択してください", -1)),
                  (u(), r(j, null, Y(Te, (o) => e("option", {
                    key: o,
                    value: o
                  }, _(o), 9, sl)), 64))
                ], 512), [
                  [ae, D.value]
                ])
              ]),
              e("div", il, [
                t[42] || (t[42] = e("label", { class: "di-form-label" }, "バリデーション (カンマ区切り)", -1)),
                C(e("input", {
                  "onUpdate:modelValue": t[10] || (t[10] = (o) => L.value = o),
                  type: "text",
                  placeholder: "required, max:255",
                  class: "di-input"
                }, null, 512), [
                  [U, L.value]
                ])
              ]),
              e("div", nl, [
                t[43] || (t[43] = e("label", { class: "di-form-label" }, "説明", -1)),
                C(e("textarea", {
                  "onUpdate:modelValue": t[11] || (t[11] = (o) => I.value = o),
                  rows: "2",
                  placeholder: "このフィールドの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, I.value]
                ])
              ])
            ], 64)) : x("", !0),
            a.value === "action" ? (u(), r(j, { key: 2 }, [
              e("div", al, [
                t[44] || (t[44] = e("label", { class: "di-form-label" }, "アクションタイプ", -1)),
                C(e("select", {
                  "onUpdate:modelValue": t[12] || (t[12] = (o) => k.value = o),
                  class: "di-select"
                }, [
                  (u(), r(j, null, Y(Ue, (o) => e("option", {
                    key: o.value,
                    value: o.value
                  }, _(o.label), 9, dl)), 64))
                ], 512), [
                  [ae, k.value]
                ])
              ]),
              k.value === "api" ? (u(), r("div", ul, [
                e("div", rl, [
                  t[45] || (t[45] = e("label", { class: "di-form-label" }, "メソッド", -1)),
                  C(e("select", {
                    "onUpdate:modelValue": t[13] || (t[13] = (o) => B.value = o),
                    class: "di-select"
                  }, [
                    (u(), r(j, null, Y(_e, (o) => e("option", {
                      key: o,
                      value: o
                    }, _(o), 9, vl)), 64))
                  ], 512), [
                    [ae, B.value]
                  ])
                ]),
                e("div", pl, [
                  t[46] || (t[46] = e("label", { class: "di-form-label" }, "エンドポイント", -1)),
                  C(e("input", {
                    "onUpdate:modelValue": t[14] || (t[14] = (o) => y.value = o),
                    type: "text",
                    placeholder: "/api/tasks",
                    class: "di-input"
                  }, null, 512), [
                    [U, y.value]
                  ])
                ])
              ])) : (u(), r("div", cl, [
                e("label", yl, _(k.value === "navigate" ? "遷移先パス" : k.value === "modal" ? "モーダル名" : k.value === "emit" ? "イベント名" : "関数名"), 1),
                C(e("input", {
                  "onUpdate:modelValue": t[15] || (t[15] = (o) => y.value = o),
                  type: "text",
                  placeholder: k.value === "navigate" ? "/tasks" : k.value === "modal" ? "ConfirmDialog" : k.value === "emit" ? "onSubmit" : "handleClick",
                  class: "di-input"
                }, null, 8, ml), [
                  [U, y.value]
                ])
              ])),
              e("div", hl, [
                t[47] || (t[47] = e("label", { class: "di-form-label" }, "説明", -1)),
                C(e("textarea", {
                  "onUpdate:modelValue": t[16] || (t[16] = (o) => A.value = o),
                  rows: "2",
                  placeholder: "このアクションの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, A.value]
                ])
              ])
            ], 64)) : x("", !0),
            a.value === "links" ? (u(), r(j, { key: 3 }, [
              e("div", fl, [
                t[48] || (t[48] = e("label", { class: "di-form-label" }, "テストファイルパス", -1)),
                C(e("input", {
                  "onUpdate:modelValue": t[17] || (t[17] = (o) => i.value = o),
                  type: "text",
                  placeholder: "src/__tests__/components/MyComponent.test.ts",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, i.value]
                ])
              ]),
              e("div", bl, [
                t[49] || (t[49] = e("label", { class: "di-form-label" }, "Figma URL", -1)),
                C(e("input", {
                  "onUpdate:modelValue": t[18] || (t[18] = (o) => P.value = o),
                  type: "text",
                  placeholder: "https://www.figma.com/design/...",
                  class: "di-input"
                }, null, 512), [
                  [U, P.value]
                ])
              ]),
              e("div", kl, [
                e("div", gl, [
                  t[50] || (t[50] = e("label", { class: "di-form-label" }, "GitHub Issue", -1)),
                  C(e("input", {
                    "onUpdate:modelValue": t[19] || (t[19] = (o) => l.value = o),
                    type: "text",
                    placeholder: "#123",
                    class: "di-input"
                  }, null, 512), [
                    [U, l.value]
                  ])
                ]),
                e("div", xl, [
                  t[51] || (t[51] = e("label", { class: "di-form-label" }, "GitHub PR", -1)),
                  C(e("input", {
                    "onUpdate:modelValue": t[20] || (t[20] = (o) => g.value = o),
                    type: "text",
                    placeholder: "#456",
                    class: "di-input"
                  }, null, 512), [
                    [U, g.value]
                  ])
                ])
              ]),
              e("div", wl, [
                t[52] || (t[52] = e("label", { class: "di-form-label" }, "関連ドキュメント", -1)),
                C(e("input", {
                  "onUpdate:modelValue": t[21] || (t[21] = (o) => v.value = o),
                  type: "text",
                  placeholder: "https://docs.example.com/...",
                  class: "di-input"
                }, null, 512), [
                  [U, v.value]
                ])
              ])
            ], 64)) : x("", !0),
            a.value === "meta" ? (u(), r(j, { key: 4 }, [
              e("div", Il, [
                t[53] || (t[53] = e("label", { class: "di-form-label" }, "使用Piniaストア (カンマ区切り)", -1)),
                C(e("input", {
                  "onUpdate:modelValue": t[22] || (t[22] = (o) => w.value = o),
                  type: "text",
                  placeholder: "useUserStore, useThemeStore",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, w.value]
                ])
              ]),
              e("div", Ml, [
                t[54] || (t[54] = e("label", { class: "di-form-label" }, "使用コンポーネント (カンマ区切り)", -1)),
                C(e("input", {
                  "onUpdate:modelValue": t[23] || (t[23] = (o) => q.value = o),
                  type: "text",
                  placeholder: "Button, Modal, Input",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, q.value]
                ])
              ]),
              e("div", Cl, [
                t[55] || (t[55] = e("label", { class: "di-form-label" }, "i18nキー (カンマ区切り)", -1)),
                C(e("input", {
                  "onUpdate:modelValue": t[24] || (t[24] = (o) => O.value = o),
                  type: "text",
                  placeholder: "common.save, errors.required",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, O.value]
                ])
              ]),
              e("div", $l, [
                t[56] || (t[56] = e("label", { class: "di-form-label" }, "デザイントークン (カンマ区切り)", -1)),
                C(e("input", {
                  "onUpdate:modelValue": t[25] || (t[25] = (o) => H.value = o),
                  type: "text",
                  placeholder: "primaryColor, secondaryColor",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, H.value]
                ])
              ]),
              e("div", El, [
                t[57] || (t[57] = e("label", { class: "di-form-label" }, "アクセシビリティ", -1)),
                C(e("textarea", {
                  "onUpdate:modelValue": t[26] || (t[26] = (o) => T.value = o),
                  rows: "2",
                  placeholder: "キーボード操作、スクリーンリーダー対応などのメモ...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, T.value]
                ])
              ]),
              e("div", Pl, [
                t[58] || (t[58] = e("label", { class: "di-form-label" }, "レスポンシブ動作", -1)),
                C(e("textarea", {
                  "onUpdate:modelValue": t[27] || (t[27] = (o) => Z.value = o),
                  rows: "2",
                  placeholder: "モバイルでの表示変更、ブレークポイントなど...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, Z.value]
                ])
              ])
            ], 64)) : x("", !0)
          ]),
          e("div", Tl, [
            e("button", {
              onClick: Pe,
              class: "di-btn-delete"
            }, [
              f(d(Ie), { style: { width: "14px", height: "14px" } }),
              t[59] || (t[59] = V(" 削除 ", -1))
            ]),
            e("div", Ul, [
              e("button", {
                onClick: Q,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: Ee,
                class: "di-btn-save"
              }, [
                f(d(ze), { style: { width: "14px", height: "14px" } }),
                t[60] || (t[60] = V(" 保存 ", -1))
              ])
            ])
          ])
        ])
      ])) : x("", !0)
    ]));
  }
}), Dl = /* @__PURE__ */ ue(_l, [["__scopeId", "data-v-fdafa9a6"]]), Vl = { class: "di-highlight-label" }, Ll = {
  key: 1,
  "data-dev-inspector": "",
  class: "di-pick-banner"
}, Al = ["title", "onClick"], jl = /* @__PURE__ */ ie({
  __name: "DevPickOverlay",
  setup(p) {
    const s = ne(), a = m(null), h = m(null);
    function E(b) {
      const M = s.getElementConfig(b);
      if (!(M != null && M.note)) return null;
      const c = {
        info: we,
        warning: ke,
        todo: ge,
        question: xe
      }, i = {
        info: "#60a5fa",
        warning: "#fbbf24",
        todo: "#10b981",
        question: "#a78bfa"
      };
      return {
        icon: c[M.note.type || "info"],
        color: i[M.note.type || "info"],
        text: M.note.text
      };
    }
    const D = m(0), L = m(0), I = te(() => {
      const b = D.value, M = L.value, c = [];
      if (!s.isEnabled) return c;
      const i = s.getConfiguredSelectors();
      for (const P of i)
        try {
          const l = document.querySelector(P);
          if (l) {
            const g = l.getBoundingClientRect();
            c.push({
              selector: P,
              element: l,
              top: g.top + b - 4,
              left: g.right + M + 4,
              noteInfo: E(P)
            });
          }
        } catch {
        }
      return c;
    });
    function k(b) {
      if (!s.isPickMode) return;
      if (b.target.closest("[data-dev-inspector]")) {
        a.value = null, h.value = null, s.setHoveredSelector(null);
        return;
      }
      const c = document.elementFromPoint(b.clientX, b.clientY);
      if (!c || c === document.body || c === document.documentElement) {
        a.value = null, h.value = null, s.setHoveredSelector(null);
        return;
      }
      if (c.closest("[data-dev-inspector]"))
        return;
      h.value = c;
      const i = c.getBoundingClientRect();
      a.value = {
        top: `${i.top + window.scrollY}px`,
        left: `${i.left + window.scrollX}px`,
        width: `${i.width}px`,
        height: `${i.height}px`
      };
      const P = s.generateSelector(c);
      s.setHoveredSelector(P);
    }
    function y(b) {
      if (!(!s.isPickMode || b.target.closest("[data-dev-inspector]")) && (b.preventDefault(), b.stopPropagation(), h.value)) {
        const c = s.generateSelector(h.value);
        s.startEditing(c), s.togglePickMode();
      }
    }
    function B(b) {
      b.key === "Escape" && s.isPickMode && s.togglePickMode();
    }
    function A() {
      D.value = window.scrollY, L.value = window.scrollX;
    }
    return be(() => {
      window.addEventListener("mousemove", k, !0), window.addEventListener("click", y, !0), window.addEventListener("keydown", B), window.addEventListener("scroll", A), window.addEventListener("resize", A);
    }), Ve(() => {
      window.removeEventListener("mousemove", k, !0), window.removeEventListener("click", y, !0), window.removeEventListener("keydown", B), window.removeEventListener("scroll", A), window.removeEventListener("resize", A);
    }), he(() => s.isPickMode, (b) => {
      b || (a.value = null, h.value = null);
    }), (b, M) => (u(), F(K, { to: "body" }, [
      d(s).isPickMode && a.value ? (u(), r("div", {
        key: 0,
        "data-dev-inspector": "",
        class: "di-highlight",
        style: N({
          top: a.value.top,
          left: a.value.left,
          width: a.value.width,
          height: a.value.height
        })
      }, [
        e("div", Vl, _(d(s).hoveredSelector), 1)
      ], 4)) : x("", !0),
      d(s).isPickMode ? (u(), r("div", Ll, [...M[0] || (M[0] = [
        e("span", null, "要素をクリックしてメモを追加", -1),
        e("kbd", null, "ESC", -1),
        e("span", { class: "di-pick-hint" }, "でキャンセル", -1)
      ])])) : x("", !0),
      d(s).isEnabled && !d(s).isPickMode && !d(s).isEditMode ? (u(!0), r(j, { key: 2 }, Y(I.value, (c) => (u(), r("div", {
        key: c.selector,
        "data-dev-inspector": "",
        class: "di-annotation-marker",
        style: N({
          top: `${c.top}px`,
          left: `${c.left}px`
        })
      }, [
        c.noteInfo ? (u(), r("div", {
          key: 0,
          class: "di-marker-dot",
          style: N({ backgroundColor: c.noteInfo.color }),
          title: c.noteInfo.text,
          onClick: (i) => d(s).startEditing(c.selector)
        }, [
          (u(), F(fe(c.noteInfo.icon), { style: { width: "10px", height: "10px", color: "white" } }))
        ], 12, Al)) : x("", !0)
      ], 4))), 128)) : x("", !0)
    ]));
  }
}), Bl = /* @__PURE__ */ ue(jl, [["__scopeId", "data-v-bd3c953f"]]), Ol = {
  key: 0,
  "data-dev-inspector": ""
}, ql = /* @__PURE__ */ ie({
  __name: "DevInspector",
  props: {
    storageKey: { default: "devInspector:elementConfigs" },
    enabledInProduction: { type: Boolean, default: !1 },
    initialAnnotations: {}
  },
  setup(p) {
    const s = p, a = ne();
    return be(() => {
      a.init({
        storageKey: s.storageKey,
        enabledInProduction: s.enabledInProduction,
        initialAnnotations: s.initialAnnotations
      });
    }), (h, E) => d(a).isAvailable ? (u(), r("div", Ol, [
      f(St),
      f(Dl),
      f(Bl)
    ])) : x("", !0);
  }
}), Hl = {
  install(p, s = {}) {
    const { autoRegister: a = !0, ...h } = s;
    a && p.component("DevInspector", ql), p.provide("devInspectorOptions", h);
  }
};
export {
  Dl as DevElementEditor,
  ql as DevInspector,
  St as DevPanel,
  Bl as DevPickOverlay,
  Hl as VueDevInspector,
  Hl as default,
  Fl as useDevInspector,
  ne as useDevInspectorStore
};
