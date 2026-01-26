import { h as $e, defineComponent as ye, inject as Le, ref as p, computed as se, openBlock as a, createElementBlock as u, Fragment as L, createBlock as F, Teleport as ie, unref as s, createVNode as I, createCommentVNode as m, createElementVNode as e, normalizeClass as Y, toDisplayString as y, renderList as Q, withDirectives as E, vModelText as U, normalizeStyle as G, createTextVNode as B, withModifiers as pe, watch as Ee, resolveDynamicComponent as Ve, vModelSelect as ke, onMounted as Pe, onUnmounted as Be } from "vue";
import { u as be } from "./useDevInspector-DexQzn4e.js";
import { a as Os } from "./useDevInspector-DexQzn4e.js";
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var re = {
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
const Re = (h) => h.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), M = (h, l) => ({ size: c, strokeWidth: g = 2, absoluteStrokeWidth: P, color: T, class: V, ...q }, { attrs: x, slots: b }) => $e(
  "svg",
  {
    ...re,
    width: c || re.width,
    height: c || re.height,
    stroke: T || re.stroke,
    "stroke-width": P ? Number(g) * 24 / Number(c) : g,
    ...x,
    class: ["lucide", `lucide-${Re(h)}`],
    ...q
  },
  [
    ...l.map((X) => $e(...X)),
    ...b.default ? [b.default()] : []
  ]
);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const je = M("AlertCircleIcon", [
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
const He = M("AlertTriangleIcon", [
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
const Oe = M("CheckSquareIcon", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ce = M("CodeIcon", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ie = M("DatabaseIcon", [
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
const ce = M("DownloadIcon", [
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
const qe = M("ExternalLinkIcon", [
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
const ze = M("FileSpreadsheetIcon", [
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
const _e = M("FileTextIcon", [
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
const Fe = M("GitBranchIcon", [
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
const Ne = M("GlobeIcon", [
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
const Ge = M("HelpCircleIcon", [
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
const Xe = M("InfoIcon", [
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
const Ke = M("LinkIcon", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ve = M("Loader2Icon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ye = M("MessageSquareIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ze = M("MousePointer2Icon", [
  ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Je = M("PenLineIcon", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const We = M("SaveIcon", [
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
const ge = M("ScanIcon", [
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
const Me = M("ServerIcon", [
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
const Qe = M("Settings2Icon", [
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
const Se = M("Trash2Icon", [
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
const et = M("UploadIcon", [
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
const tt = M("Wand2Icon", [
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
const xe = M("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lt = M("ZapIcon", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
]);
async function st(h, l, c = {}) {
  var w;
  const g = await import("./xlsx-BopDBbWb.js"), { systemName: P = "System", author: T = "" } = c, V = /* @__PURE__ */ new Date(), q = `${V.getFullYear()}/${V.getMonth() + 1}/${V.getDate()}`, x = g.utils.book_new(), b = [];
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
  ]), Object.values(l).forEach((d, o) => {
    var R, A, S;
    const k = d.id;
    let $ = "", f = "", C = "";
    if ((R = d.note) != null && R.text && ($ = d.note.text), d.fieldInfo && ($ += $ ? `
` : "", $ += `DB: ${d.fieldInfo.table}.${d.fieldInfo.column}`, d.fieldInfo.type && ($ += ` (${d.fieldInfo.type})`), d.fieldInfo.description && ($ += `
${d.fieldInfo.description}`)), d.actionInfo && (C = `[${{
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行"
    }[d.actionInfo.type] || d.actionInfo.type}]`, d.actionInfo.target && (C += ` ${d.actionInfo.method || ""} ${d.actionInfo.target}`), d.actionInfo.description && (C += `
${d.actionInfo.description}`)), d.links) {
      const _ = [];
      d.links.testPath && _.push(`テスト: ${d.links.testPath}`), d.links.figmaUrl && _.push(`Figma: ${d.links.figmaUrl}`), d.links.githubIssue && _.push(`Issue: ${d.links.githubIssue}`), d.links.githubPr && _.push(`PR: ${d.links.githubPr}`), _.length > 0 && (C += C ? `

` : "", C += _.join(`
`));
    }
    if (d.devMeta) {
      const _ = [];
      (A = d.devMeta.usedStores) != null && A.length && _.push(`Store: ${d.devMeta.usedStores.join(", ")}`), (S = d.devMeta.usedComponents) != null && S.length && _.push(`Components: ${d.devMeta.usedComponents.join(", ")}`), d.devMeta.accessibility && _.push(`A11y: ${d.devMeta.accessibility}`), d.devMeta.responsive && _.push(`Responsive: ${d.devMeta.responsive}`), _.length > 0 && (C += C ? `

` : "", C += `[開発情報]
` + _.join(`
`));
    }
    b.push([
      "",
      o + 1,
      "",
      k,
      "",
      "",
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
      f,
      "",
      "",
      "",
      "",
      "",
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
  const K = g.utils.aoa_to_sheet(b);
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
  ], g.utils.book_append_sheet(x, K, "画面設計書");
  const z = `画面仕様書_${((w = h == null ? void 0 : h.name) == null ? void 0 : w.replace(/[/\\?%*:|"<>]/g, "-")) || "screen"}_${q.replace(/\//g, "")}.xlsx`;
  return g.writeFile(x, z), z;
}
const nt = {
  key: 0,
  class: "di-panel",
  "data-dev-inspector": ""
}, it = { class: "di-header" }, ot = { class: "di-header-title" }, at = { class: "di-edit-section" }, dt = { class: "di-scan-section" }, ut = ["disabled"], rt = ["disabled"], ct = { class: "di-scan-section" }, vt = ["disabled", "title"], pt = {
  key: 0,
  class: "di-scan-results"
}, yt = {
  key: 0,
  class: "di-scan-result-item"
}, bt = { class: "di-scan-result-count" }, mt = { class: "di-scan-result-count" }, ht = { class: "di-analysis-section" }, ft = { class: "di-analysis-header" }, kt = { class: "di-analysis-input" }, gt = { class: "di-analysis-buttons" }, xt = ["disabled"], wt = ["disabled"], $t = {
  key: 0,
  class: "di-analysis-error"
}, Ct = {
  key: 1,
  class: "di-analysis-status"
}, It = { class: "di-analysis-count" }, _t = {
  key: 2,
  class: "di-analysis-filter"
}, Mt = { class: "di-filter-buttons" }, Et = ["onClick"], Pt = {
  key: 0,
  class: "di-hidden-actions"
}, St = ["disabled"], Dt = { key: 1 }, Tt = { key: 2 }, Ut = { class: "di-content" }, At = { class: "di-section" }, Lt = { class: "di-screen-name" }, Vt = { class: "di-screen-desc" }, Bt = { class: "di-card" }, Rt = { class: "di-card-label" }, jt = { class: "di-code-blue" }, Ht = {
  key: 0,
  class: "di-card"
}, Ot = { class: "di-card-label" }, qt = ["href"], zt = {
  key: 1,
  class: "di-card"
}, Ft = { class: "di-card-label" }, Nt = { class: "di-api-list" }, Gt = { class: "di-api-info" }, Xt = { class: "di-api-endpoint" }, Kt = { class: "di-api-desc" }, Yt = {
  key: 2,
  class: "di-card"
}, Zt = { class: "di-card-label" }, Jt = { class: "di-notes-list" }, Wt = {
  key: 1,
  class: "di-no-spec"
}, Qt = { class: "di-card" }, el = { class: "di-card-header" }, tl = { class: "di-card-label" }, ll = { class: "di-count-badge" }, sl = {
  key: 0,
  class: "di-export-buttons"
}, nl = {
  key: 1,
  class: "di-export-hint"
}, il = { class: "di-action-buttons" }, ol = {
  key: 0,
  class: "di-indicator",
  "data-dev-inspector": ""
}, al = { class: "di-modal" }, dl = ["value"], ul = { class: "di-modal-actions" }, rl = { class: "di-modal" }, cl = { class: "di-file-drop" }, vl = {
  key: 0,
  class: "di-error"
}, pl = { class: "di-modal-actions" }, yl = ["disabled"], bl = /* @__PURE__ */ ye({
  __name: "DevPanel",
  setup(h) {
    const l = be(), c = Le("router", null), g = p(!1), P = p(!1), T = p(""), V = p(""), q = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, x = se(() => l.currentScreenSpec), b = se(() => Object.keys(l.elementConfigs).length);
    function X() {
      const H = l.exportConfigs();
      navigator.clipboard.writeText(H), g.value = !1;
    }
    function K() {
      const H = l.exportConfigs(), n = new Blob([H], { type: "application/json" }), J = URL.createObjectURL(n), v = document.createElement("a");
      v.href = J, v.download = "dev-mode-configs.json", v.click(), URL.revokeObjectURL(J), g.value = !1;
    }
    function N() {
      l.downloadAnnotations();
    }
    async function z() {
      try {
        await st(
          l.currentScreenSpec,
          l.elementConfigs,
          { systemName: "System" }
        );
      } catch (H) {
        console.error("Failed to export xlsx:", H), alert("xlsx export failed. Make sure xlsx package is installed.");
      }
    }
    function w() {
      try {
        l.importConfigs(T.value), T.value = "", V.value = "", P.value = !1;
      } catch {
        V.value = "JSONの形式が正しくありません";
      }
    }
    function d(H) {
      var le;
      const J = (le = H.target.files) == null ? void 0 : le[0];
      if (!J) return;
      const v = new FileReader();
      v.onload = (he) => {
        var te;
        T.value = (te = he.target) == null ? void 0 : te.result;
      }, v.readAsText(J);
    }
    function o() {
      confirm("すべての要素設定を削除しますか？") && l.clearAllConfigs();
    }
    const k = p(0), $ = p(!1), f = p([]);
    async function C(H = !1) {
      $.value = !0, k.value = await l.scanCurrentPage({ rescan: H });
    }
    async function R() {
      if (!c) {
        alert("Vue Routerが見つかりません。全ページスキャンにはVue Routerが必要です。");
        return;
      }
      confirm("全ページをスキャンします。ページ遷移が発生しますがよろしいですか？") && ($.value = !0, f.value = await l.scanAllPages(c));
    }
    const A = p("/dev-inspector-analysis.json"), S = p(!1), _ = p(""), j = p(0), D = p(!1), Z = [
      { value: "all", label: "すべて" },
      { value: "db-api", label: "DB/API" },
      { value: "static", label: "固定文言" },
      { value: "data", label: "動的データ" },
      { value: "other", label: "その他" },
      { value: "none", label: "非表示" }
    ];
    async function ne() {
      S.value = !0, _.value = "";
      try {
        if (await l.loadAnalysisData(A.value), l.analysisData) {
          const H = Object.values(l.analysisData.components).reduce((n, J) => n + J.elements.length, 0);
          alert(`分析データを読み込みました（${Object.keys(l.analysisData.components).length}コンポーネント、${H}要素）`);
        } else
          _.value = "分析データの読み込みに失敗しました";
      } catch (H) {
        _.value = `読み込みエラー: ${H}`;
      } finally {
        S.value = !1;
      }
    }
    async function me() {
      if (!l.analysisData) {
        alert("先に分析データを読み込んでください");
        return;
      }
      j.value = await l.applyAnalysisToPage();
    }
    async function ee() {
      D.value = !0;
      try {
        l.clearHiddenSelectors(), l.analysisData && await l.applyAnalysisToPage();
      } finally {
        D.value = !1;
      }
    }
    return (H, n) => {
      var J;
      return a(), u(L, null, [
        (a(), F(ie, { to: "body" }, [
          s(l).isEnabled && !s(l).isPanelOpen ? (a(), u("button", {
            key: 0,
            onClick: n[0] || (n[0] = //@ts-ignore
            (...v) => s(l).openPanel && s(l).openPanel(...v)),
            class: "di-fab",
            title: "画面仕様を表示",
            "data-dev-inspector": ""
          }, [
            I(s(_e), { style: { width: "20px", height: "20px" } })
          ])) : m("", !0)
        ])),
        (a(), F(ie, { to: "body" }, [
          s(l).isEnabled && s(l).isPanelOpen ? (a(), u("div", nt, [
            e("div", it, [
              e("div", ot, [
                I(s(Ce), { style: { width: "20px", height: "20px", color: "#60a5fa" } }),
                n[15] || (n[15] = e("span", null, "Developer Mode", -1))
              ]),
              e("button", {
                onClick: n[1] || (n[1] = //@ts-ignore
                (...v) => s(l).closePanel && s(l).closePanel(...v)),
                class: "di-close-btn"
              }, [
                I(s(xe), { style: { width: "20px", height: "20px" } })
              ])
            ]),
            e("div", at, [
              e("button", {
                onClick: n[2] || (n[2] = //@ts-ignore
                (...v) => s(l).togglePickMode && s(l).togglePickMode(...v)),
                class: Y(["di-pick-btn", { active: s(l).isPickMode }])
              }, [
                I(s(Ze), { style: { width: "16px", height: "16px" } }),
                e("span", null, y(s(l).isPickMode ? "要素選択中..." : "任意の要素にメモを追加"), 1)
              ], 2),
              e("div", dt, [
                e("button", {
                  onClick: n[3] || (n[3] = (v) => C(!1)),
                  class: "di-scan-btn",
                  disabled: s(l).isScanning,
                  title: "新規要素のみスキャン"
                }, [
                  s(l).isScanning && !s(l).currentScanPage ? (a(), F(s(ve), {
                    key: 0,
                    class: "di-spin",
                    style: { width: "16px", height: "16px" }
                  })) : (a(), F(s(ge), {
                    key: 1,
                    style: { width: "16px", height: "16px" }
                  })),
                  e("span", null, y(s(l).isScanning && !s(l).currentScanPage ? `${s(l).scanProgress}%` : "スキャン"), 1)
                ], 8, ut),
                e("button", {
                  onClick: n[4] || (n[4] = (v) => C(!0)),
                  class: "di-scan-btn di-scan-btn-rescan",
                  disabled: s(l).isScanning,
                  title: "既存の設定をクリアして再スキャン"
                }, [
                  I(s(ge), { style: { width: "16px", height: "16px" } }),
                  n[16] || (n[16] = e("span", null, "再スキャン", -1))
                ], 8, rt)
              ]),
              e("div", ct, [
                e("button", {
                  onClick: R,
                  class: "di-scan-btn di-scan-btn-all",
                  disabled: s(l).isScanning,
                  title: s(c) ? "全ページをスキャン" : "Vue Routerが必要です"
                }, [
                  s(l).isScanning && s(l).currentScanPage ? (a(), F(s(ve), {
                    key: 0,
                    class: "di-spin",
                    style: { width: "16px", height: "16px" }
                  })) : (a(), F(s(Ne), {
                    key: 1,
                    style: { width: "16px", height: "16px" }
                  })),
                  e("span", null, y(s(l).currentScanPage ? `${s(l).currentScanPage}` : "全ページスキャン"), 1)
                ], 8, vt)
              ]),
              $.value && (k.value > 0 || f.value.length > 0) ? (a(), u("div", pt, [
                k.value > 0 ? (a(), u("div", yt, [
                  e("span", bt, y(k.value), 1),
                  n[17] || (n[17] = e("span", null, "件の要素を検出・登録しました", -1))
                ])) : m("", !0),
                (a(!0), u(L, null, Q(f.value, (v) => (a(), u("div", {
                  key: v.page,
                  class: "di-scan-result-item"
                }, [
                  e("code", null, y(v.page), 1),
                  e("span", mt, y(v.count), 1)
                ]))), 128)),
                e("button", {
                  onClick: n[5] || (n[5] = (v) => {
                    $.value = !1, f.value = [];
                  }),
                  class: "di-scan-close"
                }, " 閉じる ")
              ])) : m("", !0),
              e("div", ht, [
                e("div", ft, [
                  I(s(Me), { style: { width: "16px", height: "16px", color: "#3b82f6" } }),
                  n[18] || (n[18] = e("span", null, "CLIソース解析", -1))
                ]),
                e("div", kt, [
                  E(e("input", {
                    "onUpdate:modelValue": n[6] || (n[6] = (v) => A.value = v),
                    type: "text",
                    class: "di-analysis-url",
                    placeholder: "/dev-inspector-analysis.json"
                  }, null, 512), [
                    [U, A.value]
                  ])
                ]),
                e("div", gt, [
                  e("button", {
                    onClick: ne,
                    class: "di-analysis-btn",
                    disabled: S.value
                  }, [
                    S.value ? (a(), F(s(ve), {
                      key: 0,
                      class: "di-spin",
                      style: { width: "14px", height: "14px" }
                    })) : (a(), F(s(ce), {
                      key: 1,
                      style: { width: "14px", height: "14px" }
                    })),
                    n[19] || (n[19] = e("span", null, "読み込み", -1))
                  ], 8, xt),
                  e("button", {
                    onClick: me,
                    class: "di-analysis-btn di-analysis-btn-apply",
                    disabled: !s(l).analysisData
                  }, [
                    I(s(ge), { style: { width: "14px", height: "14px" } }),
                    n[20] || (n[20] = e("span", null, "ページに適用", -1))
                  ], 8, wt)
                ]),
                _.value ? (a(), u("div", $t, y(_.value), 1)) : m("", !0),
                s(l).analysisResults.length > 0 ? (a(), u("div", Ct, [
                  e("span", It, y(s(l).analysisResults.filter((v) => v.matched).length), 1),
                  e("span", null, "/ " + y(s(l).analysisResults.length) + " 要素がマッチ", 1)
                ])) : m("", !0),
                s(l).analysisResults.length > 0 ? (a(), u("div", _t, [
                  n[22] || (n[22] = e("span", { class: "di-filter-label" }, "表示フィルター:", -1)),
                  e("div", Mt, [
                    (a(), u(L, null, Q(Z, (v) => e("button", {
                      key: v.value,
                      onClick: (le) => s(l).analysisFilter = v.value,
                      class: Y(["di-filter-btn", { active: s(l).analysisFilter === v.value }])
                    }, y(v.label), 11, Et)), 64))
                  ]),
                  s(l).hiddenAnalysisSelectors.size > 0 ? (a(), u("div", Pt, [
                    e("button", {
                      onClick: ee,
                      class: "di-restore-btn",
                      disabled: D.value
                    }, [
                      D.value ? (a(), F(s(ve), {
                        key: 0,
                        class: "di-spin",
                        style: { width: "12px", height: "12px" }
                      })) : m("", !0),
                      D.value ? (a(), u("span", Dt, "リセット中...")) : (a(), u("span", Tt, "非表示 (" + y(s(l).hiddenAnalysisSelectors.size) + ") をリセット", 1))
                    ], 8, St),
                    e("button", {
                      onClick: n[7] || (n[7] = (v) => s(l).downloadChanges()),
                      class: "di-export-changes-btn",
                      title: "削除した要素をエクスポート (CLI merge用)"
                    }, [
                      I(s(ce), { style: { width: "12px", height: "12px" } }),
                      n[21] || (n[21] = e("span", null, "変更をエクスポート", -1))
                    ])
                  ])) : m("", !0)
                ])) : m("", !0)
              ])
            ]),
            e("div", Ut, [
              x.value ? (a(), u(L, { key: 0 }, [
                e("div", At, [
                  e("h2", Lt, y(x.value.name), 1),
                  e("p", Vt, y(x.value.description), 1)
                ]),
                e("div", Bt, [
                  e("div", Rt, [
                    I(s(Ce), { style: { width: "16px", height: "16px" } }),
                    n[23] || (n[23] = e("span", null, "Component Path", -1))
                  ]),
                  e("code", jt, y(x.value.componentPath), 1)
                ]),
                x.value.figmaUrl ? (a(), u("div", Ht, [
                  e("div", Ot, [
                    I(s(qe), { style: { width: "16px", height: "16px" } }),
                    n[24] || (n[24] = e("span", null, "Figma Design", -1))
                  ]),
                  e("a", {
                    href: x.value.figmaUrl,
                    target: "_blank",
                    class: "di-link-purple"
                  }, y(x.value.figmaUrl), 9, qt)
                ])) : m("", !0),
                x.value.apis.length ? (a(), u("div", zt, [
                  e("div", Ft, [
                    I(s(Me), { style: { width: "16px", height: "16px" } }),
                    n[25] || (n[25] = e("span", null, "API Endpoints", -1))
                  ]),
                  e("div", Nt, [
                    (a(!0), u(L, null, Q(x.value.apis, (v, le) => (a(), u("div", {
                      key: le,
                      class: "di-api-item"
                    }, [
                      e("span", {
                        class: "di-method-badge",
                        style: G({ backgroundColor: q[v.method] + "20", color: q[v.method] })
                      }, y(v.method), 5),
                      e("div", Gt, [
                        e("code", Xt, y(v.endpoint), 1),
                        e("p", Kt, y(v.description), 1)
                      ])
                    ]))), 128))
                  ])
                ])) : m("", !0),
                (J = x.value.notes) != null && J.length ? (a(), u("div", Yt, [
                  e("div", Zt, [
                    I(s(je), { style: { width: "16px", height: "16px" } }),
                    n[26] || (n[26] = e("span", null, "Notes", -1))
                  ]),
                  e("ul", Jt, [
                    (a(!0), u(L, null, Q(x.value.notes, (v, le) => (a(), u("li", {
                      key: le,
                      class: "di-note-item"
                    }, [
                      n[27] || (n[27] = e("span", { class: "di-bullet" }, "•", -1)),
                      e("span", null, y(v), 1)
                    ]))), 128))
                  ])
                ])) : m("", !0)
              ], 64)) : (a(), u("div", Wt, [
                I(s(_e), { style: { width: "48px", height: "48px", color: "#334155" } }),
                n[28] || (n[28] = e("p", null, [
                  B("この画面の仕様情報は"),
                  e("br"),
                  B("まだ登録されていません")
                ], -1))
              ])),
              e("div", Qt, [
                e("div", el, [
                  e("div", tl, [
                    I(s(Je), { style: { width: "16px", height: "16px" } }),
                    n[29] || (n[29] = e("span", null, "登録済み要素", -1)),
                    e("span", ll, y(b.value), 1)
                  ])
                ]),
                b.value > 0 ? (a(), u("div", sl, [
                  e("button", {
                    onClick: N,
                    class: "di-btn-green"
                  }, [
                    I(s(Fe), { style: { width: "16px", height: "16px" } }),
                    n[30] || (n[30] = B(" Git管理用に保存 ", -1))
                  ]),
                  e("button", {
                    onClick: z,
                    class: "di-btn-blue"
                  }, [
                    I(s(ze), { style: { width: "16px", height: "16px" } }),
                    n[31] || (n[31] = B(" 画面仕様書 (xlsx) 出力 ", -1))
                  ])
                ])) : m("", !0),
                b.value > 0 ? (a(), u("p", nl, [...n[32] || (n[32] = [
                  B(" JSON: ", -1),
                  e("code", null, "dev-annotations.json", -1),
                  B(" に配置してcommit ", -1)
                ])])) : m("", !0),
                e("div", il, [
                  e("button", {
                    onClick: n[8] || (n[8] = (v) => g.value = !0),
                    class: "di-btn-small"
                  }, [
                    I(s(ce), { style: { width: "14px", height: "14px" } }),
                    n[33] || (n[33] = B(" エクスポート ", -1))
                  ]),
                  e("button", {
                    onClick: n[9] || (n[9] = (v) => P.value = !0),
                    class: "di-btn-small"
                  }, [
                    I(s(et), { style: { width: "14px", height: "14px" } }),
                    n[34] || (n[34] = B(" インポート ", -1))
                  ]),
                  b.value > 0 ? (a(), u("button", {
                    key: 0,
                    onClick: o,
                    class: "di-btn-small di-btn-danger"
                  }, [
                    I(s(Se), { style: { width: "14px", height: "14px" } }),
                    n[35] || (n[35] = B(" 全削除 ", -1))
                  ])) : m("", !0)
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
          ])) : m("", !0)
        ])),
        (a(), F(ie, { to: "body" }, [
          s(l).isEnabled ? (a(), u("div", ol, [...n[37] || (n[37] = [
            e("span", { class: "di-indicator-dot" }, null, -1),
            B(" Developer Mode ", -1)
          ])])) : m("", !0)
        ])),
        (a(), F(ie, { to: "body" }, [
          g.value ? (a(), u("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: n[11] || (n[11] = pe((v) => g.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", al, [
              n[39] || (n[39] = e("h3", { class: "di-modal-title" }, "設定をエクスポート", -1)),
              e("textarea", {
                readonly: "",
                value: s(l).exportConfigs(),
                class: "di-modal-textarea"
              }, null, 8, dl),
              e("div", ul, [
                e("button", {
                  onClick: n[10] || (n[10] = (v) => g.value = !1),
                  class: "di-btn-small"
                }, "閉じる"),
                e("button", {
                  onClick: K,
                  class: "di-btn-small di-btn-gray"
                }, [
                  I(s(ce), { style: { width: "14px", height: "14px" } }),
                  n[38] || (n[38] = B(" ファイル保存 ", -1))
                ]),
                e("button", {
                  onClick: X,
                  class: "di-btn-small di-btn-primary"
                }, "コピー")
              ])
            ])
          ])) : m("", !0)
        ])),
        (a(), F(ie, { to: "body" }, [
          P.value ? (a(), u("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: n[14] || (n[14] = pe((v) => P.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", rl, [
              n[41] || (n[41] = e("h3", { class: "di-modal-title" }, "設定をインポート", -1)),
              e("label", cl, [
                e("input", {
                  type: "file",
                  accept: ".json",
                  onChange: d
                }, null, 32),
                n[40] || (n[40] = e("span", null, "JSONファイルをドラッグまたはクリック", -1))
              ]),
              E(e("textarea", {
                "onUpdate:modelValue": n[12] || (n[12] = (v) => T.value = v),
                placeholder: "またはJSONを直接貼り付け...",
                class: "di-modal-textarea di-modal-textarea-input"
              }, null, 512), [
                [U, T.value]
              ]),
              V.value ? (a(), u("p", vl, y(V.value), 1)) : m("", !0),
              e("div", pl, [
                e("button", {
                  onClick: n[13] || (n[13] = (v) => {
                    P.value = !1, T.value = "", V.value = "";
                  }),
                  class: "di-btn-small"
                }, " キャンセル "),
                e("button", {
                  onClick: w,
                  disabled: !T.value,
                  class: "di-btn-small di-btn-primary"
                }, " インポート ", 8, yl)
              ])
            ])
          ])) : m("", !0)
        ]))
      ], 64);
    };
  }
}), we = (h, l) => {
  const c = h.__vccOpts || h;
  for (const [g, P] of l)
    c[g] = P;
  return c;
}, ml = /* @__PURE__ */ we(bl, [["__scopeId", "data-v-d57ef689"]]), hl = { class: "di-editor-modal" }, fl = { class: "di-editor-header" }, kl = { class: "di-header-actions" }, gl = {
  key: 0,
  class: "di-static-indicator"
}, xl = {
  key: 1,
  class: "di-binding-indicator"
}, wl = {
  key: 0,
  class: "di-binding-source"
}, $l = { class: "di-editor-tabs" }, Cl = { class: "di-editor-content" }, Il = { class: "di-form-group" }, _l = { class: "di-note-types" }, Ml = ["onClick"], El = { class: "di-form-group" }, Pl = { class: "di-form-group" }, Sl = { class: "di-binding-selector" }, Dl = { class: "di-form-group" }, Tl = { class: "di-form-label" }, Ul = { class: "di-binding-search-wrapper" }, Al = {
  key: 0,
  class: "di-binding-list"
}, Ll = ["onClick"], Vl = { class: "di-binding-item-main" }, Bl = { class: "di-binding-name" }, Rl = {
  key: 0,
  class: "di-binding-db"
}, jl = { class: "di-binding-component" }, Hl = {
  key: 1,
  class: "di-binding-empty"
}, Ol = { class: "di-form-row" }, ql = { class: "di-form-group" }, zl = { class: "di-form-group" }, Fl = { class: "di-form-group" }, Nl = ["value"], Gl = { class: "di-form-group" }, Xl = { class: "di-form-group" }, Kl = { class: "di-form-group" }, Yl = ["value"], Zl = {
  key: 0,
  class: "di-form-row"
}, Jl = {
  class: "di-form-group",
  style: { flex: "0 0 100px" }
}, Wl = ["value"], Ql = {
  class: "di-form-group",
  style: { flex: "1" }
}, es = {
  key: 1,
  class: "di-form-group"
}, ts = { class: "di-form-label" }, ls = ["placeholder"], ss = { class: "di-form-group" }, ns = { class: "di-form-group" }, is = { class: "di-form-group" }, os = { class: "di-form-row" }, as = { class: "di-form-group" }, ds = { class: "di-form-group" }, us = { class: "di-form-group" }, rs = { class: "di-form-group" }, cs = { class: "di-form-group" }, vs = { class: "di-form-group" }, ps = { class: "di-form-group" }, ys = { class: "di-form-group" }, bs = { class: "di-form-group" }, ms = { class: "di-editor-footer" }, hs = { class: "di-editor-actions" }, fs = /* @__PURE__ */ ye({
  __name: "DevElementEditor",
  setup(h) {
    const l = be(), c = p("note"), g = p(""), P = p(""), T = p(""), V = p(""), q = p(""), x = p("navigate"), b = p(""), X = p("GET"), K = p(""), N = p(""), z = p(""), w = p("info"), d = p(""), o = p(""), k = p(""), $ = p(""), f = p(""), C = p(""), R = p(""), A = p(""), S = p(""), _ = p(""), j = p(""), D = p(""), Z = p(""), ne = p(!1), me = se(() => l.editingElementId !== null), ee = se(() => l.editingElementId);
    Ee(ee, (O) => {
      var t, i, oe, de, ue, W;
      if (O) {
        const r = l.getElementConfig(O);
        r != null && r.fieldInfo && (g.value = r.fieldInfo.table || "", P.value = r.fieldInfo.column || "", T.value = r.fieldInfo.type || "", V.value = ((t = r.fieldInfo.validation) == null ? void 0 : t.join(", ")) || "", q.value = r.fieldInfo.description || ""), r != null && r.actionInfo && (x.value = r.actionInfo.type || "navigate", b.value = r.actionInfo.target || "", X.value = r.actionInfo.method || "GET", K.value = r.actionInfo.description || ""), r != null && r.note && (N.value = r.note.text || "", z.value = r.note.author || "", w.value = r.note.type || "info"), r != null && r.links && (d.value = r.links.testPath || "", o.value = r.links.figmaUrl || "", k.value = r.links.githubIssue || "", $.value = r.links.githubPr || "", f.value = r.links.relatedDocs || ""), r != null && r.devMeta && (C.value = ((i = r.devMeta.usedStores) == null ? void 0 : i.join(", ")) || "", R.value = ((oe = r.devMeta.usedComponents) == null ? void 0 : oe.join(", ")) || "", A.value = ((de = r.devMeta.i18nKeys) == null ? void 0 : de.join(", ")) || "", S.value = ((ue = r.devMeta.designTokens) == null ? void 0 : ue.join(", ")) || "", _.value = r.devMeta.accessibility || "", j.value = r.devMeta.responsive || ""), r != null && r.sourceBinding && (D.value = r.sourceBinding.type || "", Z.value = r.sourceBinding.source || "", ne.value = r.sourceBinding.isStatic || !1), (W = r == null ? void 0 : r.note) != null && W.text ? c.value = "note" : r != null && r.fieldInfo ? c.value = "field" : r != null && r.actionInfo ? c.value = "action" : r != null && r.links ? c.value = "links" : r != null && r.devMeta ? c.value = "meta" : c.value = "note";
      } else
        H();
    });
    function H() {
      g.value = "", P.value = "", T.value = "", V.value = "", q.value = "", x.value = "navigate", b.value = "", X.value = "GET", K.value = "", N.value = "", z.value = "", w.value = "info", d.value = "", o.value = "", k.value = "", $.value = "", f.value = "", C.value = "", R.value = "", A.value = "", S.value = "", _.value = "", j.value = "", D.value = "", Z.value = "", ne.value = !1, c.value = "note";
    }
    function n() {
      l.stopEditing(), H();
    }
    function J() {
      if (ee.value)
        try {
          const O = document.querySelector(ee.value);
          if (!O) return;
          const t = l.autoDetectElementInfo(O, ee.value);
          t.sourceBinding && (D.value = t.sourceBinding.type || "", Z.value = t.sourceBinding.source || "", ne.value = t.sourceBinding.isStatic || !1, t.sourceBinding.isStatic && !N.value && (N.value = "固定文言", w.value = "info"));
        } catch (O) {
          console.error("[DevInspector] Auto-detect failed:", O);
        }
    }
    function v() {
      if (!ee.value) return;
      const O = g.value && P.value ? {
        table: g.value,
        column: P.value,
        type: T.value || void 0,
        validation: V.value ? V.value.split(",").map((W) => W.trim()) : void 0,
        description: q.value || void 0
      } : void 0, t = b.value ? {
        type: x.value,
        target: b.value,
        method: x.value === "api" ? X.value : void 0,
        description: K.value || void 0
      } : void 0, i = N.value ? {
        text: N.value,
        author: z.value || void 0,
        type: w.value
      } : void 0, oe = d.value || o.value || k.value || $.value || f.value ? {
        testPath: d.value || void 0,
        figmaUrl: o.value || void 0,
        githubIssue: k.value || void 0,
        githubPr: $.value || void 0,
        relatedDocs: f.value || void 0
      } : void 0, de = C.value || R.value || A.value || S.value || _.value || j.value ? {
        usedStores: C.value ? C.value.split(",").map((W) => W.trim()) : void 0,
        usedComponents: R.value ? R.value.split(",").map((W) => W.trim()) : void 0,
        i18nKeys: A.value ? A.value.split(",").map((W) => W.trim()) : void 0,
        designTokens: S.value ? S.value.split(",").map((W) => W.trim()) : void 0,
        accessibility: _.value || void 0,
        responsive: j.value || void 0
      } : void 0, ue = D.value ? {
        type: D.value,
        source: Z.value || void 0,
        isStatic: ne.value
      } : void 0;
      l.setElementConfig(ee.value, {
        fieldInfo: O,
        actionInfo: t,
        note: i,
        links: oe,
        devMeta: de,
        sourceBinding: ue
      }), n();
    }
    function le() {
      ee.value && (l.deleteElementConfig(ee.value), n());
    }
    const he = ["VARCHAR", "TEXT", "INT", "BIGINT", "BOOLEAN", "DATE", "DATETIME", "TIMESTAMP", "JSON"], te = p(""), ae = p(!1), fe = se(() => l.searchBindings(te.value).slice(0, 20));
    function De(O) {
      O.db && (g.value = O.db.table, P.value = O.db.column, T.value = O.db.type || ""), Z.value = O.binding, D.value = "api", ae.value = !1, te.value = "";
    }
    const Te = [
      { value: "navigate", label: "画面遷移" },
      { value: "api", label: "API呼び出し" },
      { value: "modal", label: "モーダル表示" },
      { value: "emit", label: "イベント発火" },
      { value: "function", label: "関数実行" }
    ], Ue = ["GET", "POST", "PUT", "DELETE", "PATCH"], Ae = [
      { value: "info", label: "情報", icon: Xe, color: "#60a5fa" },
      { value: "warning", label: "注意", icon: He, color: "#fbbf24" },
      { value: "todo", label: "TODO", icon: Oe, color: "#10b981" },
      { value: "question", label: "質問", icon: Ge, color: "#a78bfa" }
    ];
    return (O, t) => (a(), F(ie, { to: "body" }, [
      me.value ? (a(), u("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: pe(n, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", hl, [
          e("div", fl, [
            t[31] || (t[31] = e("h3", null, "要素情報を編集", -1)),
            e("div", kl, [
              e("button", {
                onClick: J,
                class: "di-btn-auto",
                title: "自動検出"
              }, [
                I(s(tt), { style: { width: "16px", height: "16px" } })
              ]),
              e("button", {
                onClick: n,
                class: "di-editor-close"
              }, [
                I(s(xe), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          ne.value ? (a(), u("div", gl, [...t[32] || (t[32] = [
            e("span", { class: "di-static-badge" }, "固定文言", -1),
            e("span", { class: "di-static-hint" }, "このテキストはソースコードに直接記述されています", -1)
          ])])) : D.value ? (a(), u("div", xl, [
            e("span", {
              class: Y(["di-binding-badge", "di-binding-" + D.value])
            }, y(D.value), 3),
            Z.value ? (a(), u("span", wl, y(Z.value), 1)) : m("", !0)
          ])) : m("", !0),
          e("div", $l, [
            e("button", {
              onClick: t[0] || (t[0] = (i) => c.value = "note"),
              class: Y(["di-editor-tab", { active: c.value === "note" }]),
              style: G(c.value === "note" ? { color: "#10b981", borderColor: "#10b981", background: "rgba(16, 185, 129, 0.1)" } : {})
            }, [
              I(s(Ye), { style: { width: "12px", height: "12px" } }),
              t[33] || (t[33] = B(" メモ ", -1))
            ], 6),
            e("button", {
              onClick: t[1] || (t[1] = (i) => c.value = "field"),
              class: Y(["di-editor-tab", { active: c.value === "field" }]),
              style: G(c.value === "field" ? { color: "#60a5fa", borderColor: "#60a5fa", background: "rgba(96, 165, 250, 0.1)" } : {})
            }, [
              I(s(Ie), { style: { width: "12px", height: "12px" } }),
              t[34] || (t[34] = B(" データ ", -1))
            ], 6),
            e("button", {
              onClick: t[2] || (t[2] = (i) => c.value = "action"),
              class: Y(["di-editor-tab", { active: c.value === "action" }]),
              style: G(c.value === "action" ? { color: "#a78bfa", borderColor: "#a78bfa", background: "rgba(167, 139, 250, 0.1)" } : {})
            }, [
              I(s(lt), { style: { width: "12px", height: "12px" } }),
              t[35] || (t[35] = B(" アクション ", -1))
            ], 6),
            e("button", {
              onClick: t[3] || (t[3] = (i) => c.value = "links"),
              class: Y(["di-editor-tab", { active: c.value === "links" }]),
              style: G(c.value === "links" ? { color: "#f59e0b", borderColor: "#f59e0b", background: "rgba(245, 158, 11, 0.1)" } : {})
            }, [
              I(s(Ke), { style: { width: "12px", height: "12px" } }),
              t[36] || (t[36] = B(" リンク ", -1))
            ], 6),
            e("button", {
              onClick: t[4] || (t[4] = (i) => c.value = "meta"),
              class: Y(["di-editor-tab", { active: c.value === "meta" }]),
              style: G(c.value === "meta" ? { color: "#ec4899", borderColor: "#ec4899", background: "rgba(236, 72, 153, 0.1)" } : {})
            }, [
              I(s(Qe), { style: { width: "12px", height: "12px" } }),
              t[37] || (t[37] = B(" 開発情報 ", -1))
            ], 6)
          ]),
          e("div", Cl, [
            c.value === "note" ? (a(), u(L, { key: 0 }, [
              e("div", Il, [
                t[38] || (t[38] = e("label", { class: "di-form-label" }, "タイプ", -1)),
                e("div", _l, [
                  (a(), u(L, null, Q(Ae, (i) => e("button", {
                    key: i.value,
                    onClick: (oe) => w.value = i.value,
                    class: "di-note-type-btn",
                    style: G(w.value === i.value ? { color: i.color, borderColor: i.color, background: i.color + "15" } : {})
                  }, [
                    (a(), F(Ve(i.icon), {
                      style: G([{ width: "16px", height: "16px" }, { color: w.value === i.value ? i.color : "#64748b" }])
                    }, null, 8, ["style"])),
                    e("span", {
                      style: G({ color: w.value === i.value ? i.color : "#94a3b8" })
                    }, y(i.label), 5)
                  ], 12, Ml)), 64))
                ])
              ]),
              e("div", El, [
                t[39] || (t[39] = e("label", { class: "di-form-label" }, "メモ内容 *", -1)),
                E(e("textarea", {
                  "onUpdate:modelValue": t[5] || (t[5] = (i) => N.value = i),
                  rows: "4",
                  placeholder: "この要素についてのメモ、説明、注意事項など...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, N.value]
                ])
              ]),
              e("div", Pl, [
                t[40] || (t[40] = e("label", { class: "di-form-label" }, "記入者（オプション）", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[6] || (t[6] = (i) => z.value = i),
                  type: "text",
                  placeholder: "名前",
                  class: "di-input"
                }, null, 512), [
                  [U, z.value]
                ])
              ])
            ], 64)) : m("", !0),
            c.value === "field" ? (a(), u(L, { key: 1 }, [
              e("div", Sl, [
                e("div", Dl, [
                  e("label", Tl, [
                    I(s(Ie), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[41] || (t[41] = B(" CLI解析から選択 ", -1))
                  ]),
                  e("div", Ul, [
                    E(e("input", {
                      "onUpdate:modelValue": t[7] || (t[7] = (i) => te.value = i),
                      onFocus: t[8] || (t[8] = (i) => ae.value = !0),
                      type: "text",
                      placeholder: "バインディングを検索... (例: notification, user.name)",
                      class: "di-input di-binding-search"
                    }, null, 544), [
                      [U, te.value]
                    ]),
                    te.value ? (a(), u("button", {
                      key: 0,
                      onClick: t[9] || (t[9] = (i) => {
                        te.value = "", ae.value = !1;
                      }),
                      class: "di-binding-clear"
                    }, [
                      I(s(xe), { style: { width: "14px", height: "14px" } })
                    ])) : m("", !0)
                  ]),
                  ae.value && fe.value.length > 0 ? (a(), u("div", Al, [
                    (a(!0), u(L, null, Q(fe.value, (i) => (a(), u("button", {
                      key: i.binding,
                      onClick: (oe) => De(i),
                      class: Y(["di-binding-item", { "has-db": !!i.db }])
                    }, [
                      e("div", Vl, [
                        e("span", Bl, y(i.binding), 1),
                        i.db ? (a(), u("span", Rl, y(i.db.table) + "." + y(i.db.column), 1)) : m("", !0)
                      ]),
                      e("span", jl, y(i.component), 1)
                    ], 10, Ll))), 128))
                  ])) : ae.value && te.value && fe.value.length === 0 ? (a(), u("div", Hl, " 該当するバインディングが見つかりません ")) : m("", !0)
                ])
              ]),
              t[48] || (t[48] = e("div", { class: "di-form-divider" }, [
                e("span", null, "または手動入力")
              ], -1)),
              e("div", Ol, [
                e("div", ql, [
                  t[42] || (t[42] = e("label", { class: "di-form-label" }, "テーブル名 *", -1)),
                  E(e("input", {
                    "onUpdate:modelValue": t[10] || (t[10] = (i) => g.value = i),
                    type: "text",
                    placeholder: "users",
                    class: "di-input"
                  }, null, 512), [
                    [U, g.value]
                  ])
                ]),
                e("div", zl, [
                  t[43] || (t[43] = e("label", { class: "di-form-label" }, "カラム名 *", -1)),
                  E(e("input", {
                    "onUpdate:modelValue": t[11] || (t[11] = (i) => P.value = i),
                    type: "text",
                    placeholder: "name",
                    class: "di-input"
                  }, null, 512), [
                    [U, P.value]
                  ])
                ])
              ]),
              e("div", Fl, [
                t[45] || (t[45] = e("label", { class: "di-form-label" }, "データ型", -1)),
                E(e("select", {
                  "onUpdate:modelValue": t[12] || (t[12] = (i) => T.value = i),
                  class: "di-select"
                }, [
                  t[44] || (t[44] = e("option", { value: "" }, "選択してください", -1)),
                  (a(), u(L, null, Q(he, (i) => e("option", {
                    key: i,
                    value: i
                  }, y(i), 9, Nl)), 64))
                ], 512), [
                  [ke, T.value]
                ])
              ]),
              e("div", Gl, [
                t[46] || (t[46] = e("label", { class: "di-form-label" }, "バリデーション (カンマ区切り)", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[13] || (t[13] = (i) => V.value = i),
                  type: "text",
                  placeholder: "required, max:255",
                  class: "di-input"
                }, null, 512), [
                  [U, V.value]
                ])
              ]),
              e("div", Xl, [
                t[47] || (t[47] = e("label", { class: "di-form-label" }, "説明", -1)),
                E(e("textarea", {
                  "onUpdate:modelValue": t[14] || (t[14] = (i) => q.value = i),
                  rows: "2",
                  placeholder: "このフィールドの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, q.value]
                ])
              ])
            ], 64)) : m("", !0),
            c.value === "action" ? (a(), u(L, { key: 2 }, [
              e("div", Kl, [
                t[49] || (t[49] = e("label", { class: "di-form-label" }, "アクションタイプ", -1)),
                E(e("select", {
                  "onUpdate:modelValue": t[15] || (t[15] = (i) => x.value = i),
                  class: "di-select"
                }, [
                  (a(), u(L, null, Q(Te, (i) => e("option", {
                    key: i.value,
                    value: i.value
                  }, y(i.label), 9, Yl)), 64))
                ], 512), [
                  [ke, x.value]
                ])
              ]),
              x.value === "api" ? (a(), u("div", Zl, [
                e("div", Jl, [
                  t[50] || (t[50] = e("label", { class: "di-form-label" }, "メソッド", -1)),
                  E(e("select", {
                    "onUpdate:modelValue": t[16] || (t[16] = (i) => X.value = i),
                    class: "di-select"
                  }, [
                    (a(), u(L, null, Q(Ue, (i) => e("option", {
                      key: i,
                      value: i
                    }, y(i), 9, Wl)), 64))
                  ], 512), [
                    [ke, X.value]
                  ])
                ]),
                e("div", Ql, [
                  t[51] || (t[51] = e("label", { class: "di-form-label" }, "エンドポイント", -1)),
                  E(e("input", {
                    "onUpdate:modelValue": t[17] || (t[17] = (i) => b.value = i),
                    type: "text",
                    placeholder: "/api/tasks",
                    class: "di-input"
                  }, null, 512), [
                    [U, b.value]
                  ])
                ])
              ])) : (a(), u("div", es, [
                e("label", ts, y(x.value === "navigate" ? "遷移先パス" : x.value === "modal" ? "モーダル名" : x.value === "emit" ? "イベント名" : "関数名"), 1),
                E(e("input", {
                  "onUpdate:modelValue": t[18] || (t[18] = (i) => b.value = i),
                  type: "text",
                  placeholder: x.value === "navigate" ? "/tasks" : x.value === "modal" ? "ConfirmDialog" : x.value === "emit" ? "onSubmit" : "handleClick",
                  class: "di-input"
                }, null, 8, ls), [
                  [U, b.value]
                ])
              ])),
              e("div", ss, [
                t[52] || (t[52] = e("label", { class: "di-form-label" }, "説明", -1)),
                E(e("textarea", {
                  "onUpdate:modelValue": t[19] || (t[19] = (i) => K.value = i),
                  rows: "2",
                  placeholder: "このアクションの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, K.value]
                ])
              ])
            ], 64)) : m("", !0),
            c.value === "links" ? (a(), u(L, { key: 3 }, [
              e("div", ns, [
                t[53] || (t[53] = e("label", { class: "di-form-label" }, "テストファイルパス", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[20] || (t[20] = (i) => d.value = i),
                  type: "text",
                  placeholder: "src/__tests__/components/MyComponent.test.ts",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, d.value]
                ])
              ]),
              e("div", is, [
                t[54] || (t[54] = e("label", { class: "di-form-label" }, "Figma URL", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[21] || (t[21] = (i) => o.value = i),
                  type: "text",
                  placeholder: "https://www.figma.com/design/...",
                  class: "di-input"
                }, null, 512), [
                  [U, o.value]
                ])
              ]),
              e("div", os, [
                e("div", as, [
                  t[55] || (t[55] = e("label", { class: "di-form-label" }, "GitHub Issue", -1)),
                  E(e("input", {
                    "onUpdate:modelValue": t[22] || (t[22] = (i) => k.value = i),
                    type: "text",
                    placeholder: "#123",
                    class: "di-input"
                  }, null, 512), [
                    [U, k.value]
                  ])
                ]),
                e("div", ds, [
                  t[56] || (t[56] = e("label", { class: "di-form-label" }, "GitHub PR", -1)),
                  E(e("input", {
                    "onUpdate:modelValue": t[23] || (t[23] = (i) => $.value = i),
                    type: "text",
                    placeholder: "#456",
                    class: "di-input"
                  }, null, 512), [
                    [U, $.value]
                  ])
                ])
              ]),
              e("div", us, [
                t[57] || (t[57] = e("label", { class: "di-form-label" }, "関連ドキュメント", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[24] || (t[24] = (i) => f.value = i),
                  type: "text",
                  placeholder: "https://docs.example.com/...",
                  class: "di-input"
                }, null, 512), [
                  [U, f.value]
                ])
              ])
            ], 64)) : m("", !0),
            c.value === "meta" ? (a(), u(L, { key: 4 }, [
              e("div", rs, [
                t[58] || (t[58] = e("label", { class: "di-form-label" }, "使用Piniaストア (カンマ区切り)", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[25] || (t[25] = (i) => C.value = i),
                  type: "text",
                  placeholder: "useUserStore, useThemeStore",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, C.value]
                ])
              ]),
              e("div", cs, [
                t[59] || (t[59] = e("label", { class: "di-form-label" }, "使用コンポーネント (カンマ区切り)", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[26] || (t[26] = (i) => R.value = i),
                  type: "text",
                  placeholder: "Button, Modal, Input",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, R.value]
                ])
              ]),
              e("div", vs, [
                t[60] || (t[60] = e("label", { class: "di-form-label" }, "i18nキー (カンマ区切り)", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[27] || (t[27] = (i) => A.value = i),
                  type: "text",
                  placeholder: "common.save, errors.required",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, A.value]
                ])
              ]),
              e("div", ps, [
                t[61] || (t[61] = e("label", { class: "di-form-label" }, "デザイントークン (カンマ区切り)", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[28] || (t[28] = (i) => S.value = i),
                  type: "text",
                  placeholder: "primaryColor, secondaryColor",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, S.value]
                ])
              ]),
              e("div", ys, [
                t[62] || (t[62] = e("label", { class: "di-form-label" }, "アクセシビリティ", -1)),
                E(e("textarea", {
                  "onUpdate:modelValue": t[29] || (t[29] = (i) => _.value = i),
                  rows: "2",
                  placeholder: "キーボード操作、スクリーンリーダー対応などのメモ...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, _.value]
                ])
              ]),
              e("div", bs, [
                t[63] || (t[63] = e("label", { class: "di-form-label" }, "レスポンシブ動作", -1)),
                E(e("textarea", {
                  "onUpdate:modelValue": t[30] || (t[30] = (i) => j.value = i),
                  rows: "2",
                  placeholder: "モバイルでの表示変更、ブレークポイントなど...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, j.value]
                ])
              ])
            ], 64)) : m("", !0)
          ]),
          e("div", ms, [
            e("button", {
              onClick: le,
              class: "di-btn-delete"
            }, [
              I(s(Se), { style: { width: "14px", height: "14px" } }),
              t[64] || (t[64] = B(" 削除 ", -1))
            ]),
            e("div", hs, [
              e("button", {
                onClick: n,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: v,
                class: "di-btn-save"
              }, [
                I(s(We), { style: { width: "14px", height: "14px" } }),
                t[65] || (t[65] = B(" 保存 ", -1))
              ])
            ])
          ])
        ])
      ])) : m("", !0)
    ]));
  }
}), ks = /* @__PURE__ */ we(fs, [["__scopeId", "data-v-07ec2673"]]), gs = {
  key: 0,
  "data-dev-inspector": "",
  class: "di-loading-overlay"
}, xs = { class: "di-highlight-label" }, ws = {
  key: 2,
  "data-dev-inspector": "",
  class: "di-pick-banner"
}, $s = ["onClick"], Cs = ["onClick"], Is = {
  "data-dev-inspector": "",
  class: "di-scan-banner"
}, _s = ["onClick"], Ms = { class: "di-analysis-type" }, Es = {
  key: 0,
  class: "di-analysis-db"
}, Ps = ["onClick"], Ss = {
  key: 0,
  class: "di-analysis-text"
}, Ds = {
  "data-dev-inspector": "",
  class: "di-analysis-banner"
}, Ts = /* @__PURE__ */ ye({
  __name: "DevPickOverlay",
  setup(h) {
    const l = be(), c = p(null), g = p(null), P = p(0), T = p(0);
    function V(w) {
      var o;
      const d = l.getElementConfig(w);
      if (!(d != null && d.sourceBinding)) {
        const k = ((o = d == null ? void 0 : d.note) == null ? void 0 : o.type) || "info";
        return {
          info: "#60a5fa",
          warning: "#fbbf24",
          todo: "#10b981",
          question: "#a78bfa"
        }[k] || "#60a5fa";
      }
      return d.sourceBinding.isStatic ? "#10b981" : d.sourceBinding.type === "v-model" ? "#8b5cf6" : d.sourceBinding.type === "api" ? "#f59e0b" : "#60a5fa";
    }
    const q = se(() => {
      var $, f;
      const w = P.value, d = T.value, o = [];
      if (!l.isEnabled) return o;
      const k = l.getConfiguredSelectors();
      for (const C of k)
        try {
          const R = document.querySelector(C);
          if (R) {
            const A = R.getBoundingClientRect(), S = l.getElementConfig(C), _ = (($ = S == null ? void 0 : S.sourceBinding) == null ? void 0 : $.isStatic) || !1, j = ((f = S == null ? void 0 : S.sourceBinding) == null ? void 0 : f.type) || "";
            let D = "";
            _ ? D = "固定" : j === "v-model" ? D = "フォーム" : j === "api" ? D = "データ" : D = "メモ", o.push({
              selector: C,
              top: `${A.top + w}px`,
              left: `${A.left + d}px`,
              width: `${A.width}px`,
              height: `${A.height}px`,
              color: V(C),
              isStatic: _,
              label: D
            });
          }
        } catch {
        }
      return o;
    }), x = se(() => {
      var k;
      const w = P.value, d = T.value, o = [];
      if (!l.isEnabled || l.scanResults.length === 0) return o;
      for (const $ of l.scanResults)
        try {
          const f = document.querySelector($.selector);
          if (f) {
            const C = f.getBoundingClientRect();
            o.push({
              selector: $.selector,
              top: `${C.top + w}px`,
              left: `${C.left + d}px`,
              width: `${C.width}px`,
              height: `${C.height}px`,
              isStatic: ((k = $.detected.sourceBinding) == null ? void 0 : k.isStatic) || !1
            });
          }
        } catch {
        }
      return o;
    }), b = se(() => {
      const w = P.value, d = T.value, o = [], k = l.analysisFilter;
      if (k === "none" || !l.isEnabled || l.analysisResults.length === 0) return o;
      for (const $ of l.analysisResults) {
        if (!$.matched) continue;
        const f = $.element, C = f.db && (f.db.table || f.db.column), R = f.api && f.api.endpoint, A = f.type === "static", S = f.type === "data";
        if (k === "db-api") {
          if (!C && !R) continue;
        } else if (k === "static") {
          if (!A) continue;
        } else if (k === "data") {
          if (!S) continue;
        } else if (k === "other" && (C || R || A || S))
          continue;
        try {
          const _ = document.querySelector($.selector);
          if (_) {
            const j = _.getBoundingClientRect();
            if (j.width > window.innerWidth * 0.8 || j.height > window.innerHeight * 0.5)
              continue;
            let D = "";
            f.db && (D = `${f.db.table}.${f.db.column}`);
            let Z = "";
            f.api && (Z = `${f.api.method} ${f.api.endpoint}`), o.push({
              selector: $.selector,
              top: `${j.top + w}px`,
              left: `${j.left + d}px`,
              width: `${j.width}px`,
              height: `${j.height}px`,
              type: f.type,
              text: f.text || f.binding || "",
              dbInfo: D,
              apiInfo: Z
            });
          }
        } catch {
        }
      }
      return o;
    });
    function X(w) {
      if (!l.isPickMode) return;
      if (w.target.closest("[data-dev-inspector]")) {
        c.value = null, g.value = null, l.setHoveredSelector(null);
        return;
      }
      const o = document.elementFromPoint(w.clientX, w.clientY);
      if (!o || o === document.body || o === document.documentElement) {
        c.value = null, g.value = null, l.setHoveredSelector(null);
        return;
      }
      if (o.closest("[data-dev-inspector]"))
        return;
      g.value = o;
      const k = o.getBoundingClientRect();
      c.value = {
        top: `${k.top + window.scrollY}px`,
        left: `${k.left + window.scrollX}px`,
        width: `${k.width}px`,
        height: `${k.height}px`
      };
      const $ = l.generateSelector(o);
      l.setHoveredSelector($);
    }
    function K(w) {
      if (!(!l.isPickMode || w.target.closest("[data-dev-inspector]")) && (w.preventDefault(), w.stopPropagation(), g.value)) {
        const o = l.generateSelector(g.value);
        l.startEditing(o), l.togglePickMode();
      }
    }
    function N(w) {
      w.key === "Escape" && l.isPickMode && l.togglePickMode();
    }
    function z() {
      P.value = window.scrollY, T.value = window.scrollX;
    }
    return Pe(() => {
      window.addEventListener("mousemove", X, !0), window.addEventListener("click", K, !0), window.addEventListener("keydown", N), window.addEventListener("scroll", z), window.addEventListener("resize", z);
    }), Be(() => {
      window.removeEventListener("mousemove", X, !0), window.removeEventListener("click", K, !0), window.removeEventListener("keydown", N), window.removeEventListener("scroll", z), window.removeEventListener("resize", z);
    }), Ee(() => l.isPickMode, (w) => {
      w || (c.value = null, g.value = null);
    }), (w, d) => (a(), F(ie, { to: "body" }, [
      s(l).isInitializing ? (a(), u("div", gs, [...d[2] || (d[2] = [
        e("div", { class: "di-loading-content" }, [
          e("div", { class: "di-loading-spinner" }),
          e("span", { class: "di-loading-text" }, "Developer Mode 起動中...")
        ], -1)
      ])])) : m("", !0),
      s(l).isPickMode && c.value ? (a(), u("div", {
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
        e("div", xs, y(s(l).hoveredSelector), 1)
      ], 4)) : m("", !0),
      s(l).isPickMode ? (a(), u("div", ws, [...d[3] || (d[3] = [
        e("span", null, "要素をクリックしてメモを追加", -1),
        e("kbd", null, "ESC", -1),
        e("span", { class: "di-pick-hint" }, "でキャンセル", -1)
      ])])) : m("", !0),
      s(l).isEnabled && !s(l).isPickMode && !s(l).editingElementId && s(l).scanResults.length === 0 && s(l).analysisResults.length === 0 ? (a(!0), u(L, { key: 3 }, Q(q.value, (o) => (a(), u("div", {
        key: o.selector,
        "data-dev-inspector": "",
        class: "di-annotation-box",
        style: G({
          top: o.top,
          left: o.left,
          width: o.width,
          height: o.height,
          borderColor: o.color,
          backgroundColor: o.color + "15"
        }),
        onClick: (k) => s(l).startEditing(o.selector)
      }, [
        e("div", {
          class: "di-annotation-label",
          style: G({ backgroundColor: o.color })
        }, y(o.label), 5)
      ], 12, $s))), 128)) : m("", !0),
      s(l).isEnabled && !s(l).editingElementId && x.value.length > 0 && s(l).analysisResults.length === 0 ? (a(), u(L, { key: 4 }, [
        (a(!0), u(L, null, Q(x.value, (o) => (a(), u("div", {
          key: "scan-" + o.selector,
          "data-dev-inspector": "",
          class: Y(["di-scan-highlight", { "di-scan-static": o.isStatic }]),
          style: G({
            top: o.top,
            left: o.left,
            width: o.width,
            height: o.height
          }),
          onClick: (k) => s(l).startEditing(o.selector)
        }, [
          e("div", {
            class: Y(["di-scan-label", { "di-scan-label-static": o.isStatic }])
          }, y(o.isStatic ? "固定文言" : "動的データ"), 3)
        ], 14, Cs))), 128)),
        e("div", Is, [
          e("span", null, y(x.value.length) + "件の要素を検出", 1),
          e("button", {
            onClick: d[0] || (d[0] = (o) => s(l).clearScanResults()),
            class: "di-scan-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : m("", !0),
      s(l).isEnabled && !s(l).editingElementId && b.value.length > 0 ? (a(), u(L, { key: 5 }, [
        (a(!0), u(L, null, Q(b.value, (o) => (a(), u("div", {
          key: "analysis-" + o.selector,
          "data-dev-inspector": "",
          class: Y(["di-analysis-highlight", {
            "di-analysis-static": o.type === "static",
            "di-analysis-data": o.type === "data",
            "di-analysis-form": o.type === "form",
            "di-analysis-button": o.type === "button",
            "di-analysis-link": o.type === "link"
          }]),
          style: G({
            top: o.top,
            left: o.left,
            width: o.width,
            height: o.height
          }),
          onClick: (k) => s(l).startEditing(o.selector)
        }, [
          e("div", {
            class: Y(["di-analysis-label", "di-analysis-label-" + (o.dbInfo ? "db" : o.type)])
          }, [
            e("span", Ms, y(o.dbInfo ? "DB" : o.type === "static" ? "固定" : o.type === "data" ? "データ" : o.type), 1),
            o.dbInfo ? (a(), u("span", Es, y(o.dbInfo), 1)) : m("", !0),
            e("button", {
              class: "di-analysis-delete",
              onClick: pe((k) => s(l).removeAnalysisResult(o.selector), ["stop"]),
              title: "この要素を非表示"
            }, "×", 8, Ps)
          ], 2),
          o.text && o.text.length < 30 ? (a(), u("div", Ss, y(o.text), 1)) : m("", !0)
        ], 14, _s))), 128)),
        e("div", Ds, [
          e("span", null, "📊 分析データ: " + y(b.value.length) + "件の要素", 1),
          e("button", {
            onClick: d[1] || (d[1] = (o) => s(l).clearAnalysisResults()),
            class: "di-analysis-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : m("", !0)
    ]));
  }
}), Us = /* @__PURE__ */ we(Ts, [["__scopeId", "data-v-6de853d4"]]), As = {
  key: 0,
  "data-dev-inspector": ""
}, Ls = /* @__PURE__ */ ye({
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
    const l = h, c = be();
    return Pe(() => {
      c.init({
        storageKey: l.storageKey,
        enabledInProduction: l.enabledInProduction,
        initialAnnotations: l.initialAnnotations
      });
    }), (g, P) => s(c).isAvailable ? (a(), u("div", As, [
      I(ml),
      I(ks),
      I(Us)
    ])) : m("", !0);
  }
}), Rs = {
  install(h, l = {}) {
    const { autoRegister: c = !0, ...g } = l;
    c && h.component("DevInspector", Ls), h.provide("devInspectorOptions", g);
  }
};
export {
  ks as DevElementEditor,
  Ls as DevInspector,
  ml as DevPanel,
  Us as DevPickOverlay,
  Rs as VueDevInspector,
  Rs as default,
  Os as useDevInspector,
  be as useDevInspectorStore
};
