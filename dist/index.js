import { h as he, defineComponent as de, inject as Se, ref as p, computed as le, openBlock as d, createElementBlock as c, Fragment as B, createBlock as N, Teleport as te, unref as o, createVNode as C, createCommentVNode as w, createElementVNode as e, normalizeClass as K, toDisplayString as k, renderList as Q, withDirectives as E, vModelText as U, normalizeStyle as F, createTextVNode as j, withModifiers as me, watch as we, resolveDynamicComponent as De, vModelSelect as ce, onMounted as $e, onUnmounted as Ue } from "vue";
import { u as ue } from "./useDevInspector-CZrBEzak.js";
import { a as xs } from "./useDevInspector-CZrBEzak.js";
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ae = {
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
const Ve = (b) => b.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), M = (b, l) => ({ size: r, strokeWidth: x = 2, absoluteStrokeWidth: _, color: T, class: L, ...q }, { attrs: h, slots: m }) => he(
  "svg",
  {
    ...ae,
    width: r || ae.width,
    height: r || ae.height,
    stroke: T || ae.stroke,
    "stroke-width": _ ? Number(x) * 24 / Number(r) : x,
    ...h,
    class: ["lucide", `lucide-${Ve(b)}`],
    ...q
  },
  [
    ...l.map((G) => he(...G)),
    ...m.default ? [m.default()] : []
  ]
);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Le = M("AlertCircleIcon", [
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
const Ae = M("AlertTriangleIcon", [
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
const Be = M("CheckSquareIcon", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fe = M("CodeIcon", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Re = M("DatabaseIcon", [
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
const ve = M("DownloadIcon", [
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
const je = M("ExternalLinkIcon", [
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
const Oe = M("FileSpreadsheetIcon", [
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
const ke = M("FileTextIcon", [
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
const qe = M("GitBranchIcon", [
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
const He = M("GlobeIcon", [
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
const ze = M("HelpCircleIcon", [
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
const Ne = M("InfoIcon", [
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
const Fe = M("LinkIcon", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pe = M("Loader2Icon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ge = M("MessageSquareIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xe = M("MousePointer2Icon", [
  ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xe = M("PenLineIcon", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ke = M("SaveIcon", [
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
const ye = M("ScanIcon", [
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
const ge = M("ServerIcon", [
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
const Ye = M("Settings2Icon", [
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
const Ce = M("Trash2Icon", [
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
const Ze = M("UploadIcon", [
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
const Je = M("Wand2Icon", [
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
const Ie = M("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const We = M("ZapIcon", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
]);
async function Qe(b, l, r = {}) {
  var f;
  const x = await import("./xlsx-BopDBbWb.js"), { systemName: _ = "System", author: T = "" } = r, L = /* @__PURE__ */ new Date(), q = `${L.getFullYear()}/${L.getMonth() + 1}/${L.getDate()}`, h = x.utils.book_new(), m = [];
  m.push([
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
    (b == null ? void 0 : b.name) || "",
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
    q
  ]), m.push([]), m.push([
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
    (b == null ? void 0 : b.componentPath) || "",
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
    (b == null ? void 0 : b.figmaUrl) || ""
  ]), m.push([]), m.push(["機能概要"]), m.push([(b == null ? void 0 : b.description) || ""]), m.push([]), m.push(["画面レイアウト　figmaURL"]), m.push([(b == null ? void 0 : b.figmaUrl) || ""]), m.push([]), b != null && b.apis && b.apis.length > 0 && (m.push(["API一覧"]), m.push(["", "メソッド", "", "エンドポイント", "", "", "", "", "", "", "", "説明"]), b.apis.forEach((a) => {
    m.push(["", a.method, "", a.endpoint, "", "", "", "", "", "", "", a.description]);
  }), m.push([])), m.push(["画面項目　ヘッダーフッターは省く"]), m.push([
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
  ]), Object.values(l).forEach((a, i) => {
    var R, S, D;
    const g = a.id;
    let $ = "", P = "", y = "";
    if ((R = a.note) != null && R.text && ($ = a.note.text), a.fieldInfo && ($ += $ ? `
` : "", $ += `DB: ${a.fieldInfo.table}.${a.fieldInfo.column}`, a.fieldInfo.type && ($ += ` (${a.fieldInfo.type})`), a.fieldInfo.description && ($ += `
${a.fieldInfo.description}`)), a.actionInfo && (y = `[${{
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行"
    }[a.actionInfo.type] || a.actionInfo.type}]`, a.actionInfo.target && (y += ` ${a.actionInfo.method || ""} ${a.actionInfo.target}`), a.actionInfo.description && (y += `
${a.actionInfo.description}`)), a.links) {
      const I = [];
      a.links.testPath && I.push(`テスト: ${a.links.testPath}`), a.links.figmaUrl && I.push(`Figma: ${a.links.figmaUrl}`), a.links.githubIssue && I.push(`Issue: ${a.links.githubIssue}`), a.links.githubPr && I.push(`PR: ${a.links.githubPr}`), I.length > 0 && (y += y ? `

` : "", y += I.join(`
`));
    }
    if (a.devMeta) {
      const I = [];
      (S = a.devMeta.usedStores) != null && S.length && I.push(`Store: ${a.devMeta.usedStores.join(", ")}`), (D = a.devMeta.usedComponents) != null && D.length && I.push(`Components: ${a.devMeta.usedComponents.join(", ")}`), a.devMeta.accessibility && I.push(`A11y: ${a.devMeta.accessibility}`), a.devMeta.responsive && I.push(`Responsive: ${a.devMeta.responsive}`), I.length > 0 && (y += y ? `

` : "", y += `[開発情報]
` + I.join(`
`));
    }
    m.push([
      "",
      i + 1,
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
      P,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      y
    ]);
  });
  const X = x.utils.aoa_to_sheet(m);
  X["!cols"] = [
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
  ], x.utils.book_append_sheet(h, X, "画面設計書");
  const H = `画面仕様書_${((f = b == null ? void 0 : b.name) == null ? void 0 : f.replace(/[/\\?%*:|"<>]/g, "-")) || "screen"}_${q.replace(/\//g, "")}.xlsx`;
  return x.writeFile(h, H), H;
}
const et = {
  key: 0,
  class: "di-panel",
  "data-dev-inspector": ""
}, tt = { class: "di-header" }, lt = { class: "di-header-title" }, st = { class: "di-edit-section" }, ot = { class: "di-edit-row" }, nt = { class: "di-edit-label" }, it = { class: "di-scan-section" }, at = ["disabled"], dt = ["disabled"], ut = { class: "di-scan-section" }, rt = ["disabled", "title"], ct = {
  key: 0,
  class: "di-scan-results"
}, vt = {
  key: 0,
  class: "di-scan-result-item"
}, pt = { class: "di-scan-result-count" }, yt = { class: "di-scan-result-count" }, mt = { class: "di-analysis-section" }, bt = { class: "di-analysis-header" }, ht = { class: "di-analysis-input" }, ft = { class: "di-analysis-buttons" }, kt = ["disabled"], xt = ["disabled"], gt = {
  key: 0,
  class: "di-analysis-error"
}, wt = {
  key: 1,
  class: "di-analysis-status"
}, $t = { class: "di-analysis-count" }, Ct = { class: "di-content" }, It = { class: "di-section" }, Mt = { class: "di-screen-name" }, Et = { class: "di-screen-desc" }, _t = { class: "di-card" }, Pt = { class: "di-card-label" }, Tt = { class: "di-code-blue" }, St = {
  key: 0,
  class: "di-card"
}, Dt = { class: "di-card-label" }, Ut = ["href"], Vt = {
  key: 1,
  class: "di-card"
}, Lt = { class: "di-card-label" }, At = { class: "di-api-list" }, Bt = { class: "di-api-info" }, Rt = { class: "di-api-endpoint" }, jt = { class: "di-api-desc" }, Ot = {
  key: 2,
  class: "di-card"
}, qt = { class: "di-card-label" }, Ht = { class: "di-notes-list" }, zt = {
  key: 1,
  class: "di-no-spec"
}, Nt = { class: "di-card" }, Ft = { class: "di-card-header" }, Gt = { class: "di-card-label" }, Xt = { class: "di-count-badge" }, Kt = {
  key: 0,
  class: "di-export-buttons"
}, Yt = {
  key: 1,
  class: "di-export-hint"
}, Zt = { class: "di-action-buttons" }, Jt = {
  key: 0,
  class: "di-indicator",
  "data-dev-inspector": ""
}, Wt = {
  key: 0,
  class: "di-indicator-edit"
}, Qt = { class: "di-modal" }, el = ["value"], tl = { class: "di-modal-actions" }, ll = { class: "di-modal" }, sl = { class: "di-file-drop" }, ol = {
  key: 0,
  class: "di-error"
}, nl = { class: "di-modal-actions" }, il = ["disabled"], al = /* @__PURE__ */ de({
  __name: "DevPanel",
  setup(b) {
    const l = ue(), r = Se("router", null), x = p(!1), _ = p(!1), T = p(""), L = p(""), q = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, h = le(() => l.currentScreenSpec), m = le(() => Object.keys(l.elementConfigs).length);
    function G() {
      const V = l.exportConfigs();
      navigator.clipboard.writeText(V), x.value = !1;
    }
    function X() {
      const V = l.exportConfigs(), s = new Blob([V], { type: "application/json" }), A = URL.createObjectURL(s), v = document.createElement("a");
      v.href = A, v.download = "dev-mode-configs.json", v.click(), URL.revokeObjectURL(A), x.value = !1;
    }
    function z() {
      l.downloadAnnotations();
    }
    async function H() {
      try {
        await Qe(
          l.currentScreenSpec,
          l.elementConfigs,
          { systemName: "System" }
        );
      } catch (V) {
        console.error("Failed to export xlsx:", V), alert("xlsx export failed. Make sure xlsx package is installed.");
      }
    }
    function f() {
      try {
        l.importConfigs(T.value), T.value = "", L.value = "", _.value = !1;
      } catch {
        L.value = "JSONの形式が正しくありません";
      }
    }
    function a(V) {
      var Y;
      const A = (Y = V.target.files) == null ? void 0 : Y[0];
      if (!A) return;
      const v = new FileReader();
      v.onload = (re) => {
        var oe;
        T.value = (oe = re.target) == null ? void 0 : oe.result;
      }, v.readAsText(A);
    }
    function i() {
      confirm("すべての要素設定を削除しますか？") && l.clearAllConfigs();
    }
    const g = p(0), $ = p(!1), P = p([]);
    async function y(V = !1) {
      $.value = !0, g.value = await l.scanCurrentPage({ rescan: V });
    }
    async function R() {
      if (!r) {
        alert("Vue Routerが見つかりません。全ページスキャンにはVue Routerが必要です。");
        return;
      }
      confirm("全ページをスキャンします。ページ遷移が発生しますがよろしいですか？") && ($.value = !0, P.value = await l.scanAllPages(r));
    }
    const S = p("/dev-inspector-analysis.json"), D = p(!1), I = p(""), J = p(0);
    async function O() {
      D.value = !0, I.value = "";
      try {
        if (await l.loadAnalysisData(S.value), l.analysisData) {
          const V = Object.values(l.analysisData.components).reduce((s, A) => s + A.elements.length, 0);
          alert(`分析データを読み込みました（${Object.keys(l.analysisData.components).length}コンポーネント、${V}要素）`);
        } else
          I.value = "分析データの読み込みに失敗しました";
      } catch (V) {
        I.value = `読み込みエラー: ${V}`;
      } finally {
        D.value = !1;
      }
    }
    async function ee() {
      if (!l.analysisData) {
        alert("先に分析データを読み込んでください");
        return;
      }
      J.value = await l.applyAnalysisToPage();
    }
    return (V, s) => {
      var A;
      return d(), c(B, null, [
        (d(), N(te, { to: "body" }, [
          o(l).isEnabled && !o(l).isPanelOpen ? (d(), c("button", {
            key: 0,
            onClick: s[0] || (s[0] = //@ts-ignore
            (...v) => o(l).openPanel && o(l).openPanel(...v)),
            class: "di-fab",
            title: "画面仕様を表示",
            "data-dev-inspector": ""
          }, [
            C(o(ke), { style: { width: "20px", height: "20px" } })
          ])) : w("", !0)
        ])),
        (d(), N(te, { to: "body" }, [
          o(l).isEnabled && o(l).isPanelOpen ? (d(), c("div", et, [
            e("div", tt, [
              e("div", lt, [
                C(o(fe), { style: { width: "20px", height: "20px", color: "#60a5fa" } }),
                s[15] || (s[15] = e("span", null, "Developer Mode", -1))
              ]),
              e("button", {
                onClick: s[1] || (s[1] = //@ts-ignore
                (...v) => o(l).closePanel && o(l).closePanel(...v)),
                class: "di-close-btn"
              }, [
                C(o(Ie), { style: { width: "20px", height: "20px" } })
              ])
            ]),
            e("div", st, [
              e("div", ot, [
                e("div", nt, [
                  C(o(xe), { style: { width: "16px", height: "16px", color: "#fbbf24" } }),
                  s[16] || (s[16] = e("span", null, "編集モード", -1))
                ]),
                e("button", {
                  onClick: s[2] || (s[2] = //@ts-ignore
                  (...v) => o(l).toggleEditMode && o(l).toggleEditMode(...v)),
                  class: K(["di-toggle", { active: o(l).isEditMode }])
                }, [
                  e("span", {
                    class: K(["di-toggle-knob", { active: o(l).isEditMode }])
                  }, null, 2)
                ], 2)
              ]),
              s[22] || (s[22] = e("p", { class: "di-edit-hint" }, "ONにすると、要素をクリックして情報を編集できます", -1)),
              e("button", {
                onClick: s[3] || (s[3] = //@ts-ignore
                (...v) => o(l).togglePickMode && o(l).togglePickMode(...v)),
                class: K(["di-pick-btn", { active: o(l).isPickMode }])
              }, [
                C(o(Xe), { style: { width: "16px", height: "16px" } }),
                e("span", null, k(o(l).isPickMode ? "要素選択中..." : "任意の要素にメモを追加"), 1)
              ], 2),
              e("div", it, [
                e("button", {
                  onClick: s[4] || (s[4] = (v) => y(!1)),
                  class: "di-scan-btn",
                  disabled: o(l).isScanning,
                  title: "新規要素のみスキャン"
                }, [
                  o(l).isScanning && !o(l).currentScanPage ? (d(), N(o(pe), {
                    key: 0,
                    class: "di-spin",
                    style: { width: "16px", height: "16px" }
                  })) : (d(), N(o(ye), {
                    key: 1,
                    style: { width: "16px", height: "16px" }
                  })),
                  e("span", null, k(o(l).isScanning && !o(l).currentScanPage ? `${o(l).scanProgress}%` : "スキャン"), 1)
                ], 8, at),
                e("button", {
                  onClick: s[5] || (s[5] = (v) => y(!0)),
                  class: "di-scan-btn di-scan-btn-rescan",
                  disabled: o(l).isScanning,
                  title: "既存の設定をクリアして再スキャン"
                }, [
                  C(o(ye), { style: { width: "16px", height: "16px" } }),
                  s[17] || (s[17] = e("span", null, "再スキャン", -1))
                ], 8, dt)
              ]),
              e("div", ut, [
                e("button", {
                  onClick: R,
                  class: "di-scan-btn di-scan-btn-all",
                  disabled: o(l).isScanning,
                  title: o(r) ? "全ページをスキャン" : "Vue Routerが必要です"
                }, [
                  o(l).isScanning && o(l).currentScanPage ? (d(), N(o(pe), {
                    key: 0,
                    class: "di-spin",
                    style: { width: "16px", height: "16px" }
                  })) : (d(), N(o(He), {
                    key: 1,
                    style: { width: "16px", height: "16px" }
                  })),
                  e("span", null, k(o(l).currentScanPage ? `${o(l).currentScanPage}` : "全ページスキャン"), 1)
                ], 8, rt)
              ]),
              $.value && (g.value > 0 || P.value.length > 0) ? (d(), c("div", ct, [
                g.value > 0 ? (d(), c("div", vt, [
                  e("span", pt, k(g.value), 1),
                  s[18] || (s[18] = e("span", null, "件の要素を検出・登録しました", -1))
                ])) : w("", !0),
                (d(!0), c(B, null, Q(P.value, (v) => (d(), c("div", {
                  key: v.page,
                  class: "di-scan-result-item"
                }, [
                  e("code", null, k(v.page), 1),
                  e("span", yt, k(v.count), 1)
                ]))), 128)),
                e("button", {
                  onClick: s[6] || (s[6] = (v) => {
                    $.value = !1, P.value = [];
                  }),
                  class: "di-scan-close"
                }, " 閉じる ")
              ])) : w("", !0),
              e("div", mt, [
                e("div", bt, [
                  C(o(ge), { style: { width: "16px", height: "16px", color: "#3b82f6" } }),
                  s[19] || (s[19] = e("span", null, "CLIソース解析", -1))
                ]),
                e("div", ht, [
                  E(e("input", {
                    "onUpdate:modelValue": s[7] || (s[7] = (v) => S.value = v),
                    type: "text",
                    class: "di-analysis-url",
                    placeholder: "/dev-inspector-analysis.json"
                  }, null, 512), [
                    [U, S.value]
                  ])
                ]),
                e("div", ft, [
                  e("button", {
                    onClick: O,
                    class: "di-analysis-btn",
                    disabled: D.value
                  }, [
                    D.value ? (d(), N(o(pe), {
                      key: 0,
                      class: "di-spin",
                      style: { width: "14px", height: "14px" }
                    })) : (d(), N(o(ve), {
                      key: 1,
                      style: { width: "14px", height: "14px" }
                    })),
                    s[20] || (s[20] = e("span", null, "読み込み", -1))
                  ], 8, kt),
                  e("button", {
                    onClick: ee,
                    class: "di-analysis-btn di-analysis-btn-apply",
                    disabled: !o(l).analysisData
                  }, [
                    C(o(ye), { style: { width: "14px", height: "14px" } }),
                    s[21] || (s[21] = e("span", null, "ページに適用", -1))
                  ], 8, xt)
                ]),
                I.value ? (d(), c("div", gt, k(I.value), 1)) : w("", !0),
                o(l).analysisResults.length > 0 ? (d(), c("div", wt, [
                  e("span", $t, k(o(l).analysisResults.filter((v) => v.matched).length), 1),
                  e("span", null, "/ " + k(o(l).analysisResults.length) + " 要素がマッチ", 1)
                ])) : w("", !0)
              ])
            ]),
            e("div", Ct, [
              h.value ? (d(), c(B, { key: 0 }, [
                e("div", It, [
                  e("h2", Mt, k(h.value.name), 1),
                  e("p", Et, k(h.value.description), 1)
                ]),
                e("div", _t, [
                  e("div", Pt, [
                    C(o(fe), { style: { width: "16px", height: "16px" } }),
                    s[23] || (s[23] = e("span", null, "Component Path", -1))
                  ]),
                  e("code", Tt, k(h.value.componentPath), 1)
                ]),
                h.value.figmaUrl ? (d(), c("div", St, [
                  e("div", Dt, [
                    C(o(je), { style: { width: "16px", height: "16px" } }),
                    s[24] || (s[24] = e("span", null, "Figma Design", -1))
                  ]),
                  e("a", {
                    href: h.value.figmaUrl,
                    target: "_blank",
                    class: "di-link-purple"
                  }, k(h.value.figmaUrl), 9, Ut)
                ])) : w("", !0),
                h.value.apis.length ? (d(), c("div", Vt, [
                  e("div", Lt, [
                    C(o(ge), { style: { width: "16px", height: "16px" } }),
                    s[25] || (s[25] = e("span", null, "API Endpoints", -1))
                  ]),
                  e("div", At, [
                    (d(!0), c(B, null, Q(h.value.apis, (v, Y) => (d(), c("div", {
                      key: Y,
                      class: "di-api-item"
                    }, [
                      e("span", {
                        class: "di-method-badge",
                        style: F({ backgroundColor: q[v.method] + "20", color: q[v.method] })
                      }, k(v.method), 5),
                      e("div", Bt, [
                        e("code", Rt, k(v.endpoint), 1),
                        e("p", jt, k(v.description), 1)
                      ])
                    ]))), 128))
                  ])
                ])) : w("", !0),
                (A = h.value.notes) != null && A.length ? (d(), c("div", Ot, [
                  e("div", qt, [
                    C(o(Le), { style: { width: "16px", height: "16px" } }),
                    s[26] || (s[26] = e("span", null, "Notes", -1))
                  ]),
                  e("ul", Ht, [
                    (d(!0), c(B, null, Q(h.value.notes, (v, Y) => (d(), c("li", {
                      key: Y,
                      class: "di-note-item"
                    }, [
                      s[27] || (s[27] = e("span", { class: "di-bullet" }, "•", -1)),
                      e("span", null, k(v), 1)
                    ]))), 128))
                  ])
                ])) : w("", !0)
              ], 64)) : (d(), c("div", zt, [
                C(o(ke), { style: { width: "48px", height: "48px", color: "#334155" } }),
                s[28] || (s[28] = e("p", null, [
                  j("この画面の仕様情報は"),
                  e("br"),
                  j("まだ登録されていません")
                ], -1))
              ])),
              e("div", Nt, [
                e("div", Ft, [
                  e("div", Gt, [
                    C(o(xe), { style: { width: "16px", height: "16px" } }),
                    s[29] || (s[29] = e("span", null, "登録済み要素", -1)),
                    e("span", Xt, k(m.value), 1)
                  ])
                ]),
                m.value > 0 ? (d(), c("div", Kt, [
                  e("button", {
                    onClick: z,
                    class: "di-btn-green"
                  }, [
                    C(o(qe), { style: { width: "16px", height: "16px" } }),
                    s[30] || (s[30] = j(" Git管理用に保存 ", -1))
                  ]),
                  e("button", {
                    onClick: H,
                    class: "di-btn-blue"
                  }, [
                    C(o(Oe), { style: { width: "16px", height: "16px" } }),
                    s[31] || (s[31] = j(" 画面仕様書 (xlsx) 出力 ", -1))
                  ])
                ])) : w("", !0),
                m.value > 0 ? (d(), c("p", Yt, [...s[32] || (s[32] = [
                  j(" JSON: ", -1),
                  e("code", null, "dev-annotations.json", -1),
                  j(" に配置してcommit ", -1)
                ])])) : w("", !0),
                e("div", Zt, [
                  e("button", {
                    onClick: s[8] || (s[8] = (v) => x.value = !0),
                    class: "di-btn-small"
                  }, [
                    C(o(ve), { style: { width: "14px", height: "14px" } }),
                    s[33] || (s[33] = j(" エクスポート ", -1))
                  ]),
                  e("button", {
                    onClick: s[9] || (s[9] = (v) => _.value = !0),
                    class: "di-btn-small"
                  }, [
                    C(o(Ze), { style: { width: "14px", height: "14px" } }),
                    s[34] || (s[34] = j(" インポート ", -1))
                  ]),
                  m.value > 0 ? (d(), c("button", {
                    key: 0,
                    onClick: i,
                    class: "di-btn-small di-btn-danger"
                  }, [
                    C(o(Ce), { style: { width: "14px", height: "14px" } }),
                    s[35] || (s[35] = j(" 全削除 ", -1))
                  ])) : w("", !0)
                ])
              ])
            ]),
            s[36] || (s[36] = e("div", { class: "di-footer" }, [
              e("kbd", null, "Ctrl"),
              e("span", null, "+"),
              e("kbd", null, "Shift"),
              e("span", null, "+"),
              e("kbd", null, "D"),
              e("span", { class: "di-footer-text" }, "で開発者モード切替")
            ], -1))
          ])) : w("", !0)
        ])),
        (d(), N(te, { to: "body" }, [
          o(l).isEnabled ? (d(), c("div", Jt, [
            s[37] || (s[37] = e("span", { class: "di-indicator-dot" }, null, -1)),
            s[38] || (s[38] = j(" Developer Mode ", -1)),
            o(l).isEditMode ? (d(), c("span", Wt, "• 編集中")) : w("", !0)
          ])) : w("", !0)
        ])),
        (d(), N(te, { to: "body" }, [
          x.value ? (d(), c("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: s[11] || (s[11] = me((v) => x.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", Qt, [
              s[40] || (s[40] = e("h3", { class: "di-modal-title" }, "設定をエクスポート", -1)),
              e("textarea", {
                readonly: "",
                value: o(l).exportConfigs(),
                class: "di-modal-textarea"
              }, null, 8, el),
              e("div", tl, [
                e("button", {
                  onClick: s[10] || (s[10] = (v) => x.value = !1),
                  class: "di-btn-small"
                }, "閉じる"),
                e("button", {
                  onClick: X,
                  class: "di-btn-small di-btn-gray"
                }, [
                  C(o(ve), { style: { width: "14px", height: "14px" } }),
                  s[39] || (s[39] = j(" ファイル保存 ", -1))
                ]),
                e("button", {
                  onClick: G,
                  class: "di-btn-small di-btn-primary"
                }, "コピー")
              ])
            ])
          ])) : w("", !0)
        ])),
        (d(), N(te, { to: "body" }, [
          _.value ? (d(), c("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: s[14] || (s[14] = me((v) => _.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", ll, [
              s[42] || (s[42] = e("h3", { class: "di-modal-title" }, "設定をインポート", -1)),
              e("label", sl, [
                e("input", {
                  type: "file",
                  accept: ".json",
                  onChange: a
                }, null, 32),
                s[41] || (s[41] = e("span", null, "JSONファイルをドラッグまたはクリック", -1))
              ]),
              E(e("textarea", {
                "onUpdate:modelValue": s[12] || (s[12] = (v) => T.value = v),
                placeholder: "またはJSONを直接貼り付け...",
                class: "di-modal-textarea di-modal-textarea-input"
              }, null, 512), [
                [U, T.value]
              ]),
              L.value ? (d(), c("p", ol, k(L.value), 1)) : w("", !0),
              e("div", nl, [
                e("button", {
                  onClick: s[13] || (s[13] = (v) => {
                    _.value = !1, T.value = "", L.value = "";
                  }),
                  class: "di-btn-small"
                }, " キャンセル "),
                e("button", {
                  onClick: f,
                  disabled: !T.value,
                  class: "di-btn-small di-btn-primary"
                }, " インポート ", 8, il)
              ])
            ])
          ])) : w("", !0)
        ]))
      ], 64);
    };
  }
}), be = (b, l) => {
  const r = b.__vccOpts || b;
  for (const [x, _] of l)
    r[x] = _;
  return r;
}, dl = /* @__PURE__ */ be(al, [["__scopeId", "data-v-c2cf18da"]]), ul = { class: "di-editor-modal" }, rl = { class: "di-editor-header" }, cl = { class: "di-header-actions" }, vl = {
  key: 0,
  class: "di-static-indicator"
}, pl = {
  key: 1,
  class: "di-binding-indicator"
}, yl = {
  key: 0,
  class: "di-binding-source"
}, ml = { class: "di-editor-tabs" }, bl = { class: "di-editor-content" }, hl = { class: "di-form-group" }, fl = { class: "di-note-types" }, kl = ["onClick"], xl = { class: "di-form-group" }, gl = { class: "di-form-group" }, wl = { class: "di-form-row" }, $l = { class: "di-form-group" }, Cl = { class: "di-form-group" }, Il = { class: "di-form-group" }, Ml = ["value"], El = { class: "di-form-group" }, _l = { class: "di-form-group" }, Pl = { class: "di-form-group" }, Tl = ["value"], Sl = {
  key: 0,
  class: "di-form-row"
}, Dl = {
  class: "di-form-group",
  style: { flex: "0 0 100px" }
}, Ul = ["value"], Vl = {
  class: "di-form-group",
  style: { flex: "1" }
}, Ll = {
  key: 1,
  class: "di-form-group"
}, Al = { class: "di-form-label" }, Bl = ["placeholder"], Rl = { class: "di-form-group" }, jl = { class: "di-form-group" }, Ol = { class: "di-form-group" }, ql = { class: "di-form-row" }, Hl = { class: "di-form-group" }, zl = { class: "di-form-group" }, Nl = { class: "di-form-group" }, Fl = { class: "di-form-group" }, Gl = { class: "di-form-group" }, Xl = { class: "di-form-group" }, Kl = { class: "di-form-group" }, Yl = { class: "di-form-group" }, Zl = { class: "di-form-group" }, Jl = { class: "di-editor-footer" }, Wl = { class: "di-editor-actions" }, Ql = /* @__PURE__ */ de({
  __name: "DevElementEditor",
  setup(b) {
    const l = ue(), r = p("note"), x = p(""), _ = p(""), T = p(""), L = p(""), q = p(""), h = p("navigate"), m = p(""), G = p("GET"), X = p(""), z = p(""), H = p(""), f = p("info"), a = p(""), i = p(""), g = p(""), $ = p(""), P = p(""), y = p(""), R = p(""), S = p(""), D = p(""), I = p(""), J = p(""), O = p(""), ee = p(""), V = p(!1), s = le(() => l.editingElementId !== null), A = le(() => l.editingElementId);
    we(A, (W) => {
      var t, n, se, ne, ie, Z;
      if (W) {
        const u = l.getElementConfig(W);
        u != null && u.fieldInfo && (x.value = u.fieldInfo.table || "", _.value = u.fieldInfo.column || "", T.value = u.fieldInfo.type || "", L.value = ((t = u.fieldInfo.validation) == null ? void 0 : t.join(", ")) || "", q.value = u.fieldInfo.description || ""), u != null && u.actionInfo && (h.value = u.actionInfo.type || "navigate", m.value = u.actionInfo.target || "", G.value = u.actionInfo.method || "GET", X.value = u.actionInfo.description || ""), u != null && u.note && (z.value = u.note.text || "", H.value = u.note.author || "", f.value = u.note.type || "info"), u != null && u.links && (a.value = u.links.testPath || "", i.value = u.links.figmaUrl || "", g.value = u.links.githubIssue || "", $.value = u.links.githubPr || "", P.value = u.links.relatedDocs || ""), u != null && u.devMeta && (y.value = ((n = u.devMeta.usedStores) == null ? void 0 : n.join(", ")) || "", R.value = ((se = u.devMeta.usedComponents) == null ? void 0 : se.join(", ")) || "", S.value = ((ne = u.devMeta.i18nKeys) == null ? void 0 : ne.join(", ")) || "", D.value = ((ie = u.devMeta.designTokens) == null ? void 0 : ie.join(", ")) || "", I.value = u.devMeta.accessibility || "", J.value = u.devMeta.responsive || ""), u != null && u.sourceBinding && (O.value = u.sourceBinding.type || "", ee.value = u.sourceBinding.source || "", V.value = u.sourceBinding.isStatic || !1), (Z = u == null ? void 0 : u.note) != null && Z.text ? r.value = "note" : u != null && u.fieldInfo ? r.value = "field" : u != null && u.actionInfo ? r.value = "action" : u != null && u.links ? r.value = "links" : u != null && u.devMeta ? r.value = "meta" : r.value = "note";
      } else
        v();
    });
    function v() {
      x.value = "", _.value = "", T.value = "", L.value = "", q.value = "", h.value = "navigate", m.value = "", G.value = "GET", X.value = "", z.value = "", H.value = "", f.value = "info", a.value = "", i.value = "", g.value = "", $.value = "", P.value = "", y.value = "", R.value = "", S.value = "", D.value = "", I.value = "", J.value = "", O.value = "", ee.value = "", V.value = !1, r.value = "note";
    }
    function Y() {
      l.stopEditing(), v();
    }
    function re() {
      if (A.value)
        try {
          const W = document.querySelector(A.value);
          if (!W) return;
          const t = l.autoDetectElementInfo(W, A.value);
          t.sourceBinding && (O.value = t.sourceBinding.type || "", ee.value = t.sourceBinding.source || "", V.value = t.sourceBinding.isStatic || !1, t.sourceBinding.isStatic && !z.value && (z.value = "固定文言", f.value = "info"));
        } catch (W) {
          console.error("[DevInspector] Auto-detect failed:", W);
        }
    }
    function oe() {
      if (!A.value) return;
      const W = x.value && _.value ? {
        table: x.value,
        column: _.value,
        type: T.value || void 0,
        validation: L.value ? L.value.split(",").map((Z) => Z.trim()) : void 0,
        description: q.value || void 0
      } : void 0, t = m.value ? {
        type: h.value,
        target: m.value,
        method: h.value === "api" ? G.value : void 0,
        description: X.value || void 0
      } : void 0, n = z.value ? {
        text: z.value,
        author: H.value || void 0,
        type: f.value
      } : void 0, se = a.value || i.value || g.value || $.value || P.value ? {
        testPath: a.value || void 0,
        figmaUrl: i.value || void 0,
        githubIssue: g.value || void 0,
        githubPr: $.value || void 0,
        relatedDocs: P.value || void 0
      } : void 0, ne = y.value || R.value || S.value || D.value || I.value || J.value ? {
        usedStores: y.value ? y.value.split(",").map((Z) => Z.trim()) : void 0,
        usedComponents: R.value ? R.value.split(",").map((Z) => Z.trim()) : void 0,
        i18nKeys: S.value ? S.value.split(",").map((Z) => Z.trim()) : void 0,
        designTokens: D.value ? D.value.split(",").map((Z) => Z.trim()) : void 0,
        accessibility: I.value || void 0,
        responsive: J.value || void 0
      } : void 0, ie = O.value ? {
        type: O.value,
        source: ee.value || void 0,
        isStatic: V.value
      } : void 0;
      l.setElementConfig(A.value, {
        fieldInfo: W,
        actionInfo: t,
        note: n,
        links: se,
        devMeta: ne,
        sourceBinding: ie
      }), Y();
    }
    function Me() {
      A.value && (l.deleteElementConfig(A.value), Y());
    }
    const Ee = ["VARCHAR", "TEXT", "INT", "BIGINT", "BOOLEAN", "DATE", "DATETIME", "TIMESTAMP", "JSON"], _e = [
      { value: "navigate", label: "画面遷移" },
      { value: "api", label: "API呼び出し" },
      { value: "modal", label: "モーダル表示" },
      { value: "emit", label: "イベント発火" },
      { value: "function", label: "関数実行" }
    ], Pe = ["GET", "POST", "PUT", "DELETE", "PATCH"], Te = [
      { value: "info", label: "情報", icon: Ne, color: "#60a5fa" },
      { value: "warning", label: "注意", icon: Ae, color: "#fbbf24" },
      { value: "todo", label: "TODO", icon: Be, color: "#10b981" },
      { value: "question", label: "質問", icon: ze, color: "#a78bfa" }
    ];
    return (W, t) => (d(), N(te, { to: "body" }, [
      s.value ? (d(), c("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: me(Y, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", ul, [
          e("div", rl, [
            t[28] || (t[28] = e("h3", null, "要素情報を編集", -1)),
            e("div", cl, [
              e("button", {
                onClick: re,
                class: "di-btn-auto",
                title: "自動検出"
              }, [
                C(o(Je), { style: { width: "16px", height: "16px" } })
              ]),
              e("button", {
                onClick: Y,
                class: "di-editor-close"
              }, [
                C(o(Ie), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          V.value ? (d(), c("div", vl, [...t[29] || (t[29] = [
            e("span", { class: "di-static-badge" }, "固定文言", -1),
            e("span", { class: "di-static-hint" }, "このテキストはソースコードに直接記述されています", -1)
          ])])) : O.value ? (d(), c("div", pl, [
            e("span", {
              class: K(["di-binding-badge", "di-binding-" + O.value])
            }, k(O.value), 3),
            ee.value ? (d(), c("span", yl, k(ee.value), 1)) : w("", !0)
          ])) : w("", !0),
          e("div", ml, [
            e("button", {
              onClick: t[0] || (t[0] = (n) => r.value = "note"),
              class: K(["di-editor-tab", { active: r.value === "note" }]),
              style: F(r.value === "note" ? { color: "#10b981", borderColor: "#10b981", background: "rgba(16, 185, 129, 0.1)" } : {})
            }, [
              C(o(Ge), { style: { width: "12px", height: "12px" } }),
              t[30] || (t[30] = j(" メモ ", -1))
            ], 6),
            e("button", {
              onClick: t[1] || (t[1] = (n) => r.value = "field"),
              class: K(["di-editor-tab", { active: r.value === "field" }]),
              style: F(r.value === "field" ? { color: "#60a5fa", borderColor: "#60a5fa", background: "rgba(96, 165, 250, 0.1)" } : {})
            }, [
              C(o(Re), { style: { width: "12px", height: "12px" } }),
              t[31] || (t[31] = j(" データ ", -1))
            ], 6),
            e("button", {
              onClick: t[2] || (t[2] = (n) => r.value = "action"),
              class: K(["di-editor-tab", { active: r.value === "action" }]),
              style: F(r.value === "action" ? { color: "#a78bfa", borderColor: "#a78bfa", background: "rgba(167, 139, 250, 0.1)" } : {})
            }, [
              C(o(We), { style: { width: "12px", height: "12px" } }),
              t[32] || (t[32] = j(" アクション ", -1))
            ], 6),
            e("button", {
              onClick: t[3] || (t[3] = (n) => r.value = "links"),
              class: K(["di-editor-tab", { active: r.value === "links" }]),
              style: F(r.value === "links" ? { color: "#f59e0b", borderColor: "#f59e0b", background: "rgba(245, 158, 11, 0.1)" } : {})
            }, [
              C(o(Fe), { style: { width: "12px", height: "12px" } }),
              t[33] || (t[33] = j(" リンク ", -1))
            ], 6),
            e("button", {
              onClick: t[4] || (t[4] = (n) => r.value = "meta"),
              class: K(["di-editor-tab", { active: r.value === "meta" }]),
              style: F(r.value === "meta" ? { color: "#ec4899", borderColor: "#ec4899", background: "rgba(236, 72, 153, 0.1)" } : {})
            }, [
              C(o(Ye), { style: { width: "12px", height: "12px" } }),
              t[34] || (t[34] = j(" 開発情報 ", -1))
            ], 6)
          ]),
          e("div", bl, [
            r.value === "note" ? (d(), c(B, { key: 0 }, [
              e("div", hl, [
                t[35] || (t[35] = e("label", { class: "di-form-label" }, "タイプ", -1)),
                e("div", fl, [
                  (d(), c(B, null, Q(Te, (n) => e("button", {
                    key: n.value,
                    onClick: (se) => f.value = n.value,
                    class: "di-note-type-btn",
                    style: F(f.value === n.value ? { color: n.color, borderColor: n.color, background: n.color + "15" } : {})
                  }, [
                    (d(), N(De(n.icon), {
                      style: F([{ width: "16px", height: "16px" }, { color: f.value === n.value ? n.color : "#64748b" }])
                    }, null, 8, ["style"])),
                    e("span", {
                      style: F({ color: f.value === n.value ? n.color : "#94a3b8" })
                    }, k(n.label), 5)
                  ], 12, kl)), 64))
                ])
              ]),
              e("div", xl, [
                t[36] || (t[36] = e("label", { class: "di-form-label" }, "メモ内容 *", -1)),
                E(e("textarea", {
                  "onUpdate:modelValue": t[5] || (t[5] = (n) => z.value = n),
                  rows: "4",
                  placeholder: "この要素についてのメモ、説明、注意事項など...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, z.value]
                ])
              ]),
              e("div", gl, [
                t[37] || (t[37] = e("label", { class: "di-form-label" }, "記入者（オプション）", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[6] || (t[6] = (n) => H.value = n),
                  type: "text",
                  placeholder: "名前",
                  class: "di-input"
                }, null, 512), [
                  [U, H.value]
                ])
              ])
            ], 64)) : w("", !0),
            r.value === "field" ? (d(), c(B, { key: 1 }, [
              e("div", wl, [
                e("div", $l, [
                  t[38] || (t[38] = e("label", { class: "di-form-label" }, "テーブル名 *", -1)),
                  E(e("input", {
                    "onUpdate:modelValue": t[7] || (t[7] = (n) => x.value = n),
                    type: "text",
                    placeholder: "users",
                    class: "di-input"
                  }, null, 512), [
                    [U, x.value]
                  ])
                ]),
                e("div", Cl, [
                  t[39] || (t[39] = e("label", { class: "di-form-label" }, "カラム名 *", -1)),
                  E(e("input", {
                    "onUpdate:modelValue": t[8] || (t[8] = (n) => _.value = n),
                    type: "text",
                    placeholder: "name",
                    class: "di-input"
                  }, null, 512), [
                    [U, _.value]
                  ])
                ])
              ]),
              e("div", Il, [
                t[41] || (t[41] = e("label", { class: "di-form-label" }, "データ型", -1)),
                E(e("select", {
                  "onUpdate:modelValue": t[9] || (t[9] = (n) => T.value = n),
                  class: "di-select"
                }, [
                  t[40] || (t[40] = e("option", { value: "" }, "選択してください", -1)),
                  (d(), c(B, null, Q(Ee, (n) => e("option", {
                    key: n,
                    value: n
                  }, k(n), 9, Ml)), 64))
                ], 512), [
                  [ce, T.value]
                ])
              ]),
              e("div", El, [
                t[42] || (t[42] = e("label", { class: "di-form-label" }, "バリデーション (カンマ区切り)", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[10] || (t[10] = (n) => L.value = n),
                  type: "text",
                  placeholder: "required, max:255",
                  class: "di-input"
                }, null, 512), [
                  [U, L.value]
                ])
              ]),
              e("div", _l, [
                t[43] || (t[43] = e("label", { class: "di-form-label" }, "説明", -1)),
                E(e("textarea", {
                  "onUpdate:modelValue": t[11] || (t[11] = (n) => q.value = n),
                  rows: "2",
                  placeholder: "このフィールドの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, q.value]
                ])
              ])
            ], 64)) : w("", !0),
            r.value === "action" ? (d(), c(B, { key: 2 }, [
              e("div", Pl, [
                t[44] || (t[44] = e("label", { class: "di-form-label" }, "アクションタイプ", -1)),
                E(e("select", {
                  "onUpdate:modelValue": t[12] || (t[12] = (n) => h.value = n),
                  class: "di-select"
                }, [
                  (d(), c(B, null, Q(_e, (n) => e("option", {
                    key: n.value,
                    value: n.value
                  }, k(n.label), 9, Tl)), 64))
                ], 512), [
                  [ce, h.value]
                ])
              ]),
              h.value === "api" ? (d(), c("div", Sl, [
                e("div", Dl, [
                  t[45] || (t[45] = e("label", { class: "di-form-label" }, "メソッド", -1)),
                  E(e("select", {
                    "onUpdate:modelValue": t[13] || (t[13] = (n) => G.value = n),
                    class: "di-select"
                  }, [
                    (d(), c(B, null, Q(Pe, (n) => e("option", {
                      key: n,
                      value: n
                    }, k(n), 9, Ul)), 64))
                  ], 512), [
                    [ce, G.value]
                  ])
                ]),
                e("div", Vl, [
                  t[46] || (t[46] = e("label", { class: "di-form-label" }, "エンドポイント", -1)),
                  E(e("input", {
                    "onUpdate:modelValue": t[14] || (t[14] = (n) => m.value = n),
                    type: "text",
                    placeholder: "/api/tasks",
                    class: "di-input"
                  }, null, 512), [
                    [U, m.value]
                  ])
                ])
              ])) : (d(), c("div", Ll, [
                e("label", Al, k(h.value === "navigate" ? "遷移先パス" : h.value === "modal" ? "モーダル名" : h.value === "emit" ? "イベント名" : "関数名"), 1),
                E(e("input", {
                  "onUpdate:modelValue": t[15] || (t[15] = (n) => m.value = n),
                  type: "text",
                  placeholder: h.value === "navigate" ? "/tasks" : h.value === "modal" ? "ConfirmDialog" : h.value === "emit" ? "onSubmit" : "handleClick",
                  class: "di-input"
                }, null, 8, Bl), [
                  [U, m.value]
                ])
              ])),
              e("div", Rl, [
                t[47] || (t[47] = e("label", { class: "di-form-label" }, "説明", -1)),
                E(e("textarea", {
                  "onUpdate:modelValue": t[16] || (t[16] = (n) => X.value = n),
                  rows: "2",
                  placeholder: "このアクションの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, X.value]
                ])
              ])
            ], 64)) : w("", !0),
            r.value === "links" ? (d(), c(B, { key: 3 }, [
              e("div", jl, [
                t[48] || (t[48] = e("label", { class: "di-form-label" }, "テストファイルパス", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[17] || (t[17] = (n) => a.value = n),
                  type: "text",
                  placeholder: "src/__tests__/components/MyComponent.test.ts",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, a.value]
                ])
              ]),
              e("div", Ol, [
                t[49] || (t[49] = e("label", { class: "di-form-label" }, "Figma URL", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[18] || (t[18] = (n) => i.value = n),
                  type: "text",
                  placeholder: "https://www.figma.com/design/...",
                  class: "di-input"
                }, null, 512), [
                  [U, i.value]
                ])
              ]),
              e("div", ql, [
                e("div", Hl, [
                  t[50] || (t[50] = e("label", { class: "di-form-label" }, "GitHub Issue", -1)),
                  E(e("input", {
                    "onUpdate:modelValue": t[19] || (t[19] = (n) => g.value = n),
                    type: "text",
                    placeholder: "#123",
                    class: "di-input"
                  }, null, 512), [
                    [U, g.value]
                  ])
                ]),
                e("div", zl, [
                  t[51] || (t[51] = e("label", { class: "di-form-label" }, "GitHub PR", -1)),
                  E(e("input", {
                    "onUpdate:modelValue": t[20] || (t[20] = (n) => $.value = n),
                    type: "text",
                    placeholder: "#456",
                    class: "di-input"
                  }, null, 512), [
                    [U, $.value]
                  ])
                ])
              ]),
              e("div", Nl, [
                t[52] || (t[52] = e("label", { class: "di-form-label" }, "関連ドキュメント", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[21] || (t[21] = (n) => P.value = n),
                  type: "text",
                  placeholder: "https://docs.example.com/...",
                  class: "di-input"
                }, null, 512), [
                  [U, P.value]
                ])
              ])
            ], 64)) : w("", !0),
            r.value === "meta" ? (d(), c(B, { key: 4 }, [
              e("div", Fl, [
                t[53] || (t[53] = e("label", { class: "di-form-label" }, "使用Piniaストア (カンマ区切り)", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[22] || (t[22] = (n) => y.value = n),
                  type: "text",
                  placeholder: "useUserStore, useThemeStore",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, y.value]
                ])
              ]),
              e("div", Gl, [
                t[54] || (t[54] = e("label", { class: "di-form-label" }, "使用コンポーネント (カンマ区切り)", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[23] || (t[23] = (n) => R.value = n),
                  type: "text",
                  placeholder: "Button, Modal, Input",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, R.value]
                ])
              ]),
              e("div", Xl, [
                t[55] || (t[55] = e("label", { class: "di-form-label" }, "i18nキー (カンマ区切り)", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[24] || (t[24] = (n) => S.value = n),
                  type: "text",
                  placeholder: "common.save, errors.required",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, S.value]
                ])
              ]),
              e("div", Kl, [
                t[56] || (t[56] = e("label", { class: "di-form-label" }, "デザイントークン (カンマ区切り)", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[25] || (t[25] = (n) => D.value = n),
                  type: "text",
                  placeholder: "primaryColor, secondaryColor",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, D.value]
                ])
              ]),
              e("div", Yl, [
                t[57] || (t[57] = e("label", { class: "di-form-label" }, "アクセシビリティ", -1)),
                E(e("textarea", {
                  "onUpdate:modelValue": t[26] || (t[26] = (n) => I.value = n),
                  rows: "2",
                  placeholder: "キーボード操作、スクリーンリーダー対応などのメモ...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, I.value]
                ])
              ]),
              e("div", Zl, [
                t[58] || (t[58] = e("label", { class: "di-form-label" }, "レスポンシブ動作", -1)),
                E(e("textarea", {
                  "onUpdate:modelValue": t[27] || (t[27] = (n) => J.value = n),
                  rows: "2",
                  placeholder: "モバイルでの表示変更、ブレークポイントなど...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, J.value]
                ])
              ])
            ], 64)) : w("", !0)
          ]),
          e("div", Jl, [
            e("button", {
              onClick: Me,
              class: "di-btn-delete"
            }, [
              C(o(Ce), { style: { width: "14px", height: "14px" } }),
              t[59] || (t[59] = j(" 削除 ", -1))
            ]),
            e("div", Wl, [
              e("button", {
                onClick: Y,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: oe,
                class: "di-btn-save"
              }, [
                C(o(Ke), { style: { width: "14px", height: "14px" } }),
                t[60] || (t[60] = j(" 保存 ", -1))
              ])
            ])
          ])
        ])
      ])) : w("", !0)
    ]));
  }
}), es = /* @__PURE__ */ be(Ql, [["__scopeId", "data-v-fdafa9a6"]]), ts = { class: "di-highlight-label" }, ls = {
  key: 1,
  "data-dev-inspector": "",
  class: "di-pick-banner"
}, ss = ["onClick"], os = ["onClick"], ns = {
  "data-dev-inspector": "",
  class: "di-scan-banner"
}, is = ["onClick"], as = { class: "di-analysis-type" }, ds = {
  key: 0,
  class: "di-analysis-db"
}, us = {
  key: 0,
  class: "di-analysis-text"
}, rs = {
  "data-dev-inspector": "",
  class: "di-analysis-banner"
}, cs = /* @__PURE__ */ de({
  __name: "DevPickOverlay",
  setup(b) {
    const l = ue(), r = p(null), x = p(null), _ = p(0), T = p(0);
    function L(f) {
      var i;
      const a = l.getElementConfig(f);
      if (!(a != null && a.sourceBinding)) {
        const g = ((i = a == null ? void 0 : a.note) == null ? void 0 : i.type) || "info";
        return {
          info: "#60a5fa",
          warning: "#fbbf24",
          todo: "#10b981",
          question: "#a78bfa"
        }[g] || "#60a5fa";
      }
      return a.sourceBinding.isStatic ? "#10b981" : a.sourceBinding.type === "v-model" ? "#8b5cf6" : a.sourceBinding.type === "api" ? "#f59e0b" : "#60a5fa";
    }
    const q = le(() => {
      var $, P;
      const f = _.value, a = T.value, i = [];
      if (!l.isEnabled) return i;
      const g = l.getConfiguredSelectors();
      for (const y of g)
        try {
          const R = document.querySelector(y);
          if (R) {
            const S = R.getBoundingClientRect(), D = l.getElementConfig(y), I = (($ = D == null ? void 0 : D.sourceBinding) == null ? void 0 : $.isStatic) || !1, J = ((P = D == null ? void 0 : D.sourceBinding) == null ? void 0 : P.type) || "";
            let O = "";
            I ? O = "固定" : J === "v-model" ? O = "フォーム" : J === "api" ? O = "データ" : O = "メモ", i.push({
              selector: y,
              top: `${S.top + f}px`,
              left: `${S.left + a}px`,
              width: `${S.width}px`,
              height: `${S.height}px`,
              color: L(y),
              isStatic: I,
              label: O
            });
          }
        } catch {
        }
      return i;
    }), h = le(() => {
      var g;
      const f = _.value, a = T.value, i = [];
      if (!l.isEnabled || l.scanResults.length === 0) return i;
      for (const $ of l.scanResults)
        try {
          const P = document.querySelector($.selector);
          if (P) {
            const y = P.getBoundingClientRect();
            i.push({
              selector: $.selector,
              top: `${y.top + f}px`,
              left: `${y.left + a}px`,
              width: `${y.width}px`,
              height: `${y.height}px`,
              isStatic: ((g = $.detected.sourceBinding) == null ? void 0 : g.isStatic) || !1
            });
          }
        } catch {
        }
      return i;
    }), m = le(() => {
      const f = _.value, a = T.value, i = [];
      if (!l.isEnabled || l.analysisResults.length === 0) return i;
      for (const g of l.analysisResults)
        if (g.matched)
          try {
            const $ = document.querySelector(g.selector);
            if ($) {
              const P = $.getBoundingClientRect(), y = g.element;
              let R = "";
              y.db && (R = `${y.db.table}.${y.db.column}`);
              let S = "";
              y.api && (S = `${y.api.method} ${y.api.endpoint}`), i.push({
                selector: g.selector,
                top: `${P.top + f}px`,
                left: `${P.left + a}px`,
                width: `${P.width}px`,
                height: `${P.height}px`,
                type: y.type,
                text: y.text || y.binding || "",
                dbInfo: R,
                apiInfo: S
              });
            }
          } catch {
          }
      return i;
    });
    function G(f) {
      if (!l.isPickMode) return;
      if (f.target.closest("[data-dev-inspector]")) {
        r.value = null, x.value = null, l.setHoveredSelector(null);
        return;
      }
      const i = document.elementFromPoint(f.clientX, f.clientY);
      if (!i || i === document.body || i === document.documentElement) {
        r.value = null, x.value = null, l.setHoveredSelector(null);
        return;
      }
      if (i.closest("[data-dev-inspector]"))
        return;
      x.value = i;
      const g = i.getBoundingClientRect();
      r.value = {
        top: `${g.top + window.scrollY}px`,
        left: `${g.left + window.scrollX}px`,
        width: `${g.width}px`,
        height: `${g.height}px`
      };
      const $ = l.generateSelector(i);
      l.setHoveredSelector($);
    }
    function X(f) {
      if (!(!l.isPickMode || f.target.closest("[data-dev-inspector]")) && (f.preventDefault(), f.stopPropagation(), x.value)) {
        const i = l.generateSelector(x.value);
        l.startEditing(i), l.togglePickMode();
      }
    }
    function z(f) {
      f.key === "Escape" && l.isPickMode && l.togglePickMode();
    }
    function H() {
      _.value = window.scrollY, T.value = window.scrollX;
    }
    return $e(() => {
      window.addEventListener("mousemove", G, !0), window.addEventListener("click", X, !0), window.addEventListener("keydown", z), window.addEventListener("scroll", H), window.addEventListener("resize", H);
    }), Ue(() => {
      window.removeEventListener("mousemove", G, !0), window.removeEventListener("click", X, !0), window.removeEventListener("keydown", z), window.removeEventListener("scroll", H), window.removeEventListener("resize", H);
    }), we(() => l.isPickMode, (f) => {
      f || (r.value = null, x.value = null);
    }), (f, a) => (d(), N(te, { to: "body" }, [
      o(l).isPickMode && r.value ? (d(), c("div", {
        key: 0,
        "data-dev-inspector": "",
        class: "di-highlight",
        style: F({
          top: r.value.top,
          left: r.value.left,
          width: r.value.width,
          height: r.value.height
        })
      }, [
        e("div", ts, k(o(l).hoveredSelector), 1)
      ], 4)) : w("", !0),
      o(l).isPickMode ? (d(), c("div", ls, [...a[2] || (a[2] = [
        e("span", null, "要素をクリックしてメモを追加", -1),
        e("kbd", null, "ESC", -1),
        e("span", { class: "di-pick-hint" }, "でキャンセル", -1)
      ])])) : w("", !0),
      o(l).isEnabled && !o(l).isPickMode && !o(l).isEditMode && !o(l).editingElementId && o(l).scanResults.length === 0 ? (d(!0), c(B, { key: 2 }, Q(q.value, (i) => (d(), c("div", {
        key: i.selector,
        "data-dev-inspector": "",
        class: "di-annotation-box",
        style: F({
          top: i.top,
          left: i.left,
          width: i.width,
          height: i.height,
          borderColor: i.color,
          backgroundColor: i.color + "15"
        }),
        onClick: (g) => o(l).startEditing(i.selector)
      }, [
        e("div", {
          class: "di-annotation-label",
          style: F({ backgroundColor: i.color })
        }, k(i.label), 5)
      ], 12, ss))), 128)) : w("", !0),
      o(l).isEnabled && !o(l).editingElementId && h.value.length > 0 ? (d(), c(B, { key: 3 }, [
        (d(!0), c(B, null, Q(h.value, (i) => (d(), c("div", {
          key: "scan-" + i.selector,
          "data-dev-inspector": "",
          class: K(["di-scan-highlight", { "di-scan-static": i.isStatic }]),
          style: F({
            top: i.top,
            left: i.left,
            width: i.width,
            height: i.height
          }),
          onClick: (g) => o(l).startEditing(i.selector)
        }, [
          e("div", {
            class: K(["di-scan-label", { "di-scan-label-static": i.isStatic }])
          }, k(i.isStatic ? "固定文言" : "動的データ"), 3)
        ], 14, os))), 128)),
        e("div", ns, [
          e("span", null, k(h.value.length) + "件の要素を検出", 1),
          e("button", {
            onClick: a[0] || (a[0] = (i) => o(l).clearScanResults()),
            class: "di-scan-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : w("", !0),
      o(l).isEnabled && !o(l).editingElementId && m.value.length > 0 ? (d(), c(B, { key: 4 }, [
        (d(!0), c(B, null, Q(m.value, (i) => (d(), c("div", {
          key: "analysis-" + i.selector,
          "data-dev-inspector": "",
          class: K(["di-analysis-highlight", {
            "di-analysis-static": i.type === "static",
            "di-analysis-data": i.type === "data",
            "di-analysis-form": i.type === "form",
            "di-analysis-button": i.type === "button",
            "di-analysis-link": i.type === "link"
          }]),
          style: F({
            top: i.top,
            left: i.left,
            width: i.width,
            height: i.height
          }),
          onClick: (g) => o(l).startEditing(i.selector)
        }, [
          e("div", {
            class: K(["di-analysis-label", "di-analysis-label-" + i.type])
          }, [
            e("span", as, k(i.type === "static" ? "固定" : i.type === "data" ? "DB" : i.type), 1),
            i.dbInfo ? (d(), c("span", ds, k(i.dbInfo), 1)) : w("", !0)
          ], 2),
          i.text && i.text.length < 30 ? (d(), c("div", us, k(i.text), 1)) : w("", !0)
        ], 14, is))), 128)),
        e("div", rs, [
          e("span", null, "📊 分析データ: " + k(m.value.length) + "件の要素", 1),
          e("button", {
            onClick: a[1] || (a[1] = (i) => o(l).clearAnalysisResults()),
            class: "di-analysis-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : w("", !0)
    ]));
  }
}), vs = /* @__PURE__ */ be(cs, [["__scopeId", "data-v-5af39d12"]]), ps = {
  key: 0,
  "data-dev-inspector": ""
}, ys = /* @__PURE__ */ de({
  __name: "DevInspector",
  props: {
    storageKey: { default: "devInspector:elementConfigs" },
    enabledInProduction: { type: Boolean, default: !1 },
    initialAnnotations: {},
    analysisData: {}
  },
  setup(b) {
    const l = b, r = ue();
    return $e(() => {
      r.init({
        storageKey: l.storageKey,
        enabledInProduction: l.enabledInProduction,
        initialAnnotations: l.initialAnnotations
      });
    }), (x, _) => o(r).isAvailable ? (d(), c("div", ps, [
      C(dl),
      C(es),
      C(vs)
    ])) : w("", !0);
  }
}), hs = {
  install(b, l = {}) {
    const { autoRegister: r = !0, ...x } = l;
    r && b.component("DevInspector", ys), b.provide("devInspectorOptions", x);
  }
};
export {
  es as DevElementEditor,
  ys as DevInspector,
  dl as DevPanel,
  vs as DevPickOverlay,
  hs as VueDevInspector,
  hs as default,
  xs as useDevInspector,
  ue as useDevInspectorStore
};
