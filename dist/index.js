import { h as de, defineComponent as oe, ref as f, computed as _, openBlock as d, createElementBlock as p, Fragment as A, createVNode as v, Transition as S, withCtx as B, unref as i, createCommentVNode as C, createElementVNode as e, normalizeClass as F, toDisplayString as L, renderList as G, normalizeStyle as X, createTextVNode as V, createBlock as Y, Teleport as le, withModifiers as ae, withDirectives as M, vModelText as U, watch as ve, resolveDynamicComponent as be, vModelSelect as ne, onMounted as fe, onUnmounted as Ue } from "vue";
import { u as se } from "./useDevInspector-BwEXh74O.js";
import { a as cl } from "./useDevInspector-BwEXh74O.js";
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var te = {
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
const je = (c) => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), $ = (c, s) => ({ size: r, strokeWidth: m = 2, absoluteStrokeWidth: P, color: j, class: D, ...k }, { attrs: h, slots: x }) => de(
  "svg",
  {
    ...te,
    width: r || te.width,
    height: r || te.height,
    stroke: j || te.stroke,
    "stroke-width": P ? Number(m) * 24 / Number(r) : m,
    ...h,
    class: ["lucide", `lucide-${je(c)}`],
    ...k
  },
  [
    ...s.map((O) => de(...O)),
    ...x.default ? [x.default()] : []
  ]
);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ve = $("AlertCircleIcon", [
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
const ye = $("AlertTriangleIcon", [
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
const me = $("CheckSquareIcon", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ue = $("CodeIcon", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const De = $("DatabaseIcon", [
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
const pe = $("DownloadIcon", [
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
const Le = $("ExternalLinkIcon", [
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
const ze = $("FileSpreadsheetIcon", [
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
const ce = $("FileTextIcon", [
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
const Ae = $("GitBranchIcon", [
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
const he = $("HelpCircleIcon", [
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
const Oe = $("LinkIcon", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qe = $("MessageSquareIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ne = $("MousePointer2Icon", [
  ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xe = $("PenLineIcon", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const He = $("SaveIcon", [
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
const ge = $("Trash2Icon", [
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
const Se = $("UploadIcon", [
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
const ke = $("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Be = $("ZapIcon", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
]);
async function Ge(c, s, r = {}) {
  var u;
  const m = await import("./xlsx-BopDBbWb.js"), { systemName: P = "System", author: j = "" } = r, D = /* @__PURE__ */ new Date(), k = `${D.getFullYear()}/${D.getMonth() + 1}/${D.getDate()}`, h = m.utils.book_new(), x = [];
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
    j,
    "",
    "作成日",
    "",
    "",
    "",
    "",
    k
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
  ]), x.push([]), x.push(["機能概要"]), x.push([(c == null ? void 0 : c.description) || ""]), x.push([]), x.push(["画面レイアウト　figmaURL"]), x.push([(c == null ? void 0 : c.figmaUrl) || ""]), x.push([]), c != null && c.apis && c.apis.length > 0 && (x.push(["API一覧"]), x.push(["", "メソッド", "", "エンドポイント", "", "", "", "", "", "", "", "説明"]), c.apis.forEach((n) => {
    x.push(["", n.method, "", n.endpoint, "", "", "", "", "", "", "", n.description]);
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
  ]), Object.values(s).forEach((n, E) => {
    var N, q, R;
    const l = n.id;
    let b = "", y = "", g = "";
    if ((N = n.note) != null && N.text && (b = n.note.text), n.fieldInfo && (b += b ? `
` : "", b += `DB: ${n.fieldInfo.table}.${n.fieldInfo.column}`, n.fieldInfo.type && (b += ` (${n.fieldInfo.type})`), n.fieldInfo.description && (b += `
${n.fieldInfo.description}`)), n.actionInfo && (g = `[${{
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行"
    }[n.actionInfo.type] || n.actionInfo.type}]`, n.actionInfo.target && (g += ` ${n.actionInfo.method || ""} ${n.actionInfo.target}`), n.actionInfo.description && (g += `
${n.actionInfo.description}`)), n.links) {
      const T = [];
      n.links.testPath && T.push(`テスト: ${n.links.testPath}`), n.links.figmaUrl && T.push(`Figma: ${n.links.figmaUrl}`), n.links.githubIssue && T.push(`Issue: ${n.links.githubIssue}`), n.links.githubPr && T.push(`PR: ${n.links.githubPr}`), T.length > 0 && (g += g ? `

` : "", g += T.join(`
`));
    }
    if (n.devMeta) {
      const T = [];
      (q = n.devMeta.usedStores) != null && q.length && T.push(`Store: ${n.devMeta.usedStores.join(", ")}`), (R = n.devMeta.usedComponents) != null && R.length && T.push(`Components: ${n.devMeta.usedComponents.join(", ")}`), n.devMeta.accessibility && T.push(`A11y: ${n.devMeta.accessibility}`), n.devMeta.responsive && T.push(`Responsive: ${n.devMeta.responsive}`), T.length > 0 && (g += g ? `

` : "", g += `[開発情報]
` + T.join(`
`));
    }
    x.push([
      "",
      E + 1,
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
      b,
      "",
      "",
      "",
      "",
      "",
      "",
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
      g
    ]);
  });
  const z = m.utils.aoa_to_sheet(x);
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
  ], m.utils.book_append_sheet(h, z, "画面設計書");
  const I = `画面仕様書_${((u = c == null ? void 0 : c.name) == null ? void 0 : u.replace(/[/\\?%*:|"<>]/g, "-")) || "screen"}_${k.replace(/\//g, "")}.xlsx`;
  return m.writeFile(h, I), I;
}
const Xe = {
  key: 0,
  class: "fixed top-0 right-0 z-[9999] w-[360px] h-full bg-[#0f172a] text-white shadow-2xl overflow-hidden flex flex-col",
  "data-dev-inspector": ""
}, Ke = { class: "flex items-center justify-between px-4 py-3 bg-[#1e293b] border-b border-[#334155]" }, Ye = { class: "flex items-center gap-2" }, Je = { class: "px-4 py-3 bg-[#1e293b]/50 border-b border-[#334155]" }, Ze = { class: "flex items-center justify-between" }, Qe = { class: "flex items-center gap-2" }, We = { class: "text-[12px] font-medium" }, _e = { class: "flex-1 overflow-y-auto p-4 space-y-4" }, et = { class: "text-[18px] font-bold text-white mb-1" }, tt = { class: "text-[12px] text-[#94a3b8]" }, lt = { class: "bg-[#1e293b] rounded-lg p-3" }, ot = { class: "flex items-center gap-2 text-[11px] text-[#64748b] mb-2" }, st = { class: "text-[12px] text-[#60a5fa] font-mono break-all" }, nt = {
  key: 0,
  class: "bg-[#1e293b] rounded-lg p-3"
}, at = { class: "flex items-center gap-2 text-[11px] text-[#64748b] mb-2" }, it = ["href"], rt = {
  key: 1,
  class: "bg-[#1e293b] rounded-lg p-3"
}, dt = { class: "flex items-center gap-2 text-[11px] text-[#64748b] mb-3" }, ut = { class: "space-y-2" }, pt = { class: "flex-1" }, ct = { class: "text-[11px] text-[#e2e8f0] font-mono" }, xt = { class: "text-[10px] text-[#64748b] mt-0.5" }, vt = {
  key: 2,
  class: "bg-[#1e293b] rounded-lg p-3"
}, bt = { class: "flex items-center gap-2 text-[11px] text-[#64748b] mb-2" }, ft = { class: "space-y-1" }, yt = {
  key: 1,
  class: "text-center py-8"
}, mt = { class: "bg-[#1e293b] rounded-lg p-3" }, ht = { class: "flex items-center justify-between mb-3" }, wt = { class: "flex items-center gap-2 text-[11px] text-[#64748b]" }, gt = { class: "px-1.5 py-0.5 bg-[#334155] rounded text-[10px]" }, kt = {
  key: 0,
  class: "space-y-2 mb-3"
}, It = {
  key: 1,
  class: "text-[10px] text-[#64748b] mb-3"
}, Mt = { class: "flex flex-wrap gap-2" }, Ct = {
  key: 0,
  class: "fixed top-2 left-1/2 -translate-x-1/2 z-[9998] px-3 py-1.5 bg-[#1e293b] text-[#60a5fa] text-[11px] font-medium rounded-full shadow-lg flex items-center gap-2",
  "data-dev-inspector": ""
}, Et = {
  key: 0,
  class: "text-[#fbbf24]"
}, $t = { class: "bg-[#1e293b] rounded-xl shadow-2xl w-[400px] p-4" }, Pt = ["value"], Tt = { class: "flex justify-end gap-2 mt-3" }, Ut = { class: "bg-[#1e293b] rounded-xl shadow-2xl w-[400px] p-4" }, jt = { class: "mb-3" }, Vt = { class: "flex items-center justify-center w-full h-[60px] border-2 border-dashed border-[#334155] rounded-lg cursor-pointer hover:border-[#60a5fa] transition-colors" }, Dt = {
  key: 0,
  class: "text-[10px] text-[#ef4444] mt-1"
}, Lt = { class: "flex justify-end gap-2 mt-3" }, zt = ["disabled"], At = /* @__PURE__ */ oe({
  __name: "DevPanel",
  setup(c) {
    const s = se(), r = f(!1), m = f(!1), P = f(""), j = f(""), D = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, k = _(() => s.currentScreenSpec), h = _(() => Object.keys(s.elementConfigs).length);
    function x() {
      const E = s.exportConfigs();
      navigator.clipboard.writeText(E), r.value = !1;
    }
    function O() {
      const E = s.exportConfigs(), l = new Blob([E], { type: "application/json" }), b = URL.createObjectURL(l), y = document.createElement("a");
      y.href = b, y.download = "dev-mode-configs.json", y.click(), URL.revokeObjectURL(b), r.value = !1;
    }
    function z() {
      s.downloadAnnotations();
    }
    async function w() {
      try {
        await Ge(
          s.currentScreenSpec,
          s.elementConfigs,
          { systemName: "System" }
        );
      } catch (E) {
        console.error("Failed to export xlsx:", E), alert("xlsx export failed. Make sure xlsx package is installed.");
      }
    }
    function I() {
      try {
        s.importConfigs(P.value), P.value = "", j.value = "", m.value = !1;
      } catch {
        j.value = "JSONの形式が正しくありません";
      }
    }
    function u(E) {
      var g;
      const b = (g = E.target.files) == null ? void 0 : g[0];
      if (!b) return;
      const y = new FileReader();
      y.onload = (N) => {
        var q;
        P.value = (q = N.target) == null ? void 0 : q.result;
      }, y.readAsText(b);
    }
    function n() {
      confirm("すべての要素設定を削除しますか？") && s.clearAllConfigs();
    }
    return (E, l) => (d(), p(A, null, [
      v(S, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "opacity-0 scale-95",
        "enter-to-class": "opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-150",
        "leave-from-class": "opacity-100 scale-100",
        "leave-to-class": "opacity-0 scale-95"
      }, {
        default: B(() => [
          i(s).isEnabled && !i(s).isPanelOpen ? (d(), p("button", {
            key: 0,
            onClick: l[0] || (l[0] = //@ts-ignore
            (...b) => i(s).openPanel && i(s).openPanel(...b)),
            class: "fixed bottom-4 right-4 z-[9998] w-12 h-12 bg-[#1e293b] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#334155] transition-colors",
            title: "画面仕様を表示",
            "data-dev-inspector": ""
          }, [
            v(i(ce), { class: "w-5 h-5" })
          ])) : C("", !0)
        ]),
        _: 1
      }),
      v(S, {
        "enter-active-class": "transition ease-out duration-300",
        "enter-from-class": "translate-x-full",
        "enter-to-class": "translate-x-0",
        "leave-active-class": "transition ease-in duration-200",
        "leave-from-class": "translate-x-0",
        "leave-to-class": "translate-x-full"
      }, {
        default: B(() => {
          var b;
          return [
            i(s).isEnabled && i(s).isPanelOpen ? (d(), p("div", Xe, [
              e("div", Ke, [
                e("div", Ye, [
                  v(i(ue), { class: "w-5 h-5 text-[#60a5fa]" }),
                  l[11] || (l[11] = e("span", { class: "font-bold text-[14px]" }, "Developer Mode", -1))
                ]),
                e("button", {
                  onClick: l[1] || (l[1] = //@ts-ignore
                  (...y) => i(s).closePanel && i(s).closePanel(...y)),
                  class: "p-1 hover:bg-[#334155] rounded transition-colors"
                }, [
                  v(i(ke), { class: "w-5 h-5" })
                ])
              ]),
              e("div", Je, [
                e("div", Ze, [
                  e("div", Qe, [
                    v(i(xe), { class: "w-4 h-4 text-[#fbbf24]" }),
                    l[12] || (l[12] = e("span", { class: "text-[12px]" }, "編集モード", -1))
                  ]),
                  e("button", {
                    onClick: l[2] || (l[2] = //@ts-ignore
                    (...y) => i(s).toggleEditMode && i(s).toggleEditMode(...y)),
                    class: F(["relative w-[44px] h-[24px] rounded-full transition-colors", i(s).isEditMode ? "bg-[#fbbf24]" : "bg-[#334155]"])
                  }, [
                    e("span", {
                      class: F(["absolute top-[2px] w-[20px] h-[20px] bg-white rounded-full shadow transition-transform", i(s).isEditMode ? "translate-x-[22px]" : "translate-x-[2px]"])
                    }, null, 2)
                  ], 2)
                ]),
                l[13] || (l[13] = e("p", { class: "text-[10px] text-[#64748b] mt-1.5" }, " ONにすると、要素をクリックして情報を編集できます ", -1)),
                e("button", {
                  onClick: l[3] || (l[3] = //@ts-ignore
                  (...y) => i(s).togglePickMode && i(s).togglePickMode(...y)),
                  class: F(["mt-3 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg transition-colors", i(s).isPickMode ? "bg-[#10b981] text-white" : "bg-[#0f172a] text-[#94a3b8] hover:text-white hover:bg-[#334155]"])
                }, [
                  v(i(Ne), { class: "w-4 h-4" }),
                  e("span", We, L(i(s).isPickMode ? "要素選択中..." : "任意の要素にメモを追加"), 1)
                ], 2)
              ]),
              e("div", _e, [
                k.value ? (d(), p(A, { key: 0 }, [
                  e("div", null, [
                    e("h2", et, L(k.value.name), 1),
                    e("p", tt, L(k.value.description), 1)
                  ]),
                  e("div", lt, [
                    e("div", ot, [
                      v(i(ue), { class: "w-4 h-4" }),
                      l[14] || (l[14] = e("span", null, "Component Path", -1))
                    ]),
                    e("code", st, L(k.value.componentPath), 1)
                  ]),
                  k.value.figmaUrl ? (d(), p("div", nt, [
                    e("div", at, [
                      v(i(Le), { class: "w-4 h-4" }),
                      l[15] || (l[15] = e("span", null, "Figma Design", -1))
                    ]),
                    e("a", {
                      href: k.value.figmaUrl,
                      target: "_blank",
                      class: "text-[12px] text-[#a78bfa] hover:underline font-mono break-all"
                    }, L(k.value.figmaUrl), 9, it)
                  ])) : C("", !0),
                  k.value.apis.length ? (d(), p("div", rt, [
                    e("div", dt, [
                      v(i(Re), { class: "w-4 h-4" }),
                      l[16] || (l[16] = e("span", null, "API Endpoints", -1))
                    ]),
                    e("div", ut, [
                      (d(!0), p(A, null, G(k.value.apis, (y, g) => (d(), p("div", {
                        key: g,
                        class: "flex items-start gap-2"
                      }, [
                        e("span", {
                          class: "text-[10px] font-bold px-1.5 py-0.5 rounded min-w-[45px] text-center",
                          style: X({ backgroundColor: D[y.method] + "20", color: D[y.method] })
                        }, L(y.method), 5),
                        e("div", pt, [
                          e("code", ct, L(y.endpoint), 1),
                          e("p", xt, L(y.description), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : C("", !0),
                  (b = k.value.notes) != null && b.length ? (d(), p("div", vt, [
                    e("div", bt, [
                      v(i(Ve), { class: "w-4 h-4" }),
                      l[17] || (l[17] = e("span", null, "Notes", -1))
                    ]),
                    e("ul", ft, [
                      (d(!0), p(A, null, G(k.value.notes, (y, g) => (d(), p("li", {
                        key: g,
                        class: "text-[12px] text-[#94a3b8] flex items-start gap-2"
                      }, [
                        l[18] || (l[18] = e("span", { class: "text-[#64748b]" }, "•", -1)),
                        e("span", null, L(y), 1)
                      ]))), 128))
                    ])
                  ])) : C("", !0)
                ], 64)) : (d(), p("div", yt, [
                  v(i(ce), { class: "w-12 h-12 text-[#334155] mx-auto mb-3" }),
                  l[19] || (l[19] = e("p", { class: "text-[14px] text-[#64748b]" }, [
                    V("この画面の仕様情報は"),
                    e("br"),
                    V("まだ登録されていません")
                  ], -1))
                ])),
                e("div", mt, [
                  e("div", ht, [
                    e("div", wt, [
                      v(i(xe), { class: "w-4 h-4" }),
                      l[20] || (l[20] = e("span", null, "登録済み要素", -1)),
                      e("span", gt, L(h.value), 1)
                    ])
                  ]),
                  h.value > 0 ? (d(), p("div", kt, [
                    e("button", {
                      onClick: z,
                      class: "w-full flex items-center justify-center gap-2 px-4 py-2.5 text-[12px] text-white bg-[#10b981] hover:bg-[#059669] rounded-lg transition-colors"
                    }, [
                      v(i(Ae), { class: "w-4 h-4" }),
                      l[21] || (l[21] = V(" Git管理用に保存 ", -1))
                    ]),
                    e("button", {
                      onClick: w,
                      class: "w-full flex items-center justify-center gap-2 px-4 py-2.5 text-[12px] text-white bg-[#3b82f6] hover:bg-[#2563eb] rounded-lg transition-colors"
                    }, [
                      v(i(ze), { class: "w-4 h-4" }),
                      l[22] || (l[22] = V(" 画面仕様書 (xlsx) 出力 ", -1))
                    ])
                  ])) : C("", !0),
                  h.value > 0 ? (d(), p("p", It, [...l[23] || (l[23] = [
                    V(" JSON: ", -1),
                    e("code", { class: "text-[#60a5fa]" }, "dev-annotations.json", -1),
                    V(" に配置してcommit ", -1)
                  ])])) : C("", !0),
                  e("div", Mt, [
                    e("button", {
                      onClick: l[4] || (l[4] = (y) => r.value = !0),
                      class: "flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] text-[#94a3b8] hover:text-white bg-[#0f172a] hover:bg-[#334155] rounded-lg transition-colors"
                    }, [
                      v(i(pe), { class: "w-3.5 h-3.5" }),
                      l[24] || (l[24] = V(" エクスポート ", -1))
                    ]),
                    e("button", {
                      onClick: l[5] || (l[5] = (y) => m.value = !0),
                      class: "flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] text-[#94a3b8] hover:text-white bg-[#0f172a] hover:bg-[#334155] rounded-lg transition-colors"
                    }, [
                      v(i(Se), { class: "w-3.5 h-3.5" }),
                      l[25] || (l[25] = V(" インポート ", -1))
                    ]),
                    h.value > 0 ? (d(), p("button", {
                      key: 0,
                      onClick: n,
                      class: "flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] text-[#ef4444] hover:bg-[#ef4444]/10 rounded-lg transition-colors"
                    }, [
                      v(i(ge), { class: "w-3.5 h-3.5" }),
                      l[26] || (l[26] = V(" 全削除 ", -1))
                    ])) : C("", !0)
                  ])
                ])
              ]),
              l[27] || (l[27] = e("div", { class: "px-4 py-3 bg-[#1e293b] border-t border-[#334155] text-[10px] text-[#64748b]" }, [
                e("kbd", { class: "px-1.5 py-0.5 bg-[#334155] rounded text-[#94a3b8]" }, "Ctrl"),
                e("span", { class: "mx-1" }, "+"),
                e("kbd", { class: "px-1.5 py-0.5 bg-[#334155] rounded text-[#94a3b8]" }, "Shift"),
                e("span", { class: "mx-1" }, "+"),
                e("kbd", { class: "px-1.5 py-0.5 bg-[#334155] rounded text-[#94a3b8]" }, "D"),
                e("span", { class: "ml-2" }, "で開発者モード切替")
              ], -1))
            ])) : C("", !0)
          ];
        }),
        _: 1
      }),
      v(S, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "opacity-0 -translate-y-2",
        "enter-to-class": "opacity-100 translate-y-0",
        "leave-active-class": "transition ease-in duration-150",
        "leave-from-class": "opacity-100 translate-y-0",
        "leave-to-class": "opacity-0 -translate-y-2"
      }, {
        default: B(() => [
          i(s).isEnabled ? (d(), p("div", Ct, [
            l[28] || (l[28] = e("span", { class: "w-2 h-2 bg-[#60a5fa] rounded-full animate-pulse" }, null, -1)),
            l[29] || (l[29] = V(" Developer Mode ", -1)),
            i(s).isEditMode ? (d(), p("span", Et, "• 編集中")) : C("", !0)
          ])) : C("", !0)
        ]),
        _: 1
      }),
      (d(), Y(le, { to: "body" }, [
        v(S, {
          "enter-active-class": "transition ease-out duration-200",
          "enter-from-class": "opacity-0",
          "enter-to-class": "opacity-100",
          "leave-active-class": "transition ease-in duration-150",
          "leave-from-class": "opacity-100",
          "leave-to-class": "opacity-0"
        }, {
          default: B(() => [
            r.value ? (d(), p("div", {
              key: 0,
              class: "fixed inset-0 z-[10001] flex items-center justify-center bg-black/50",
              onClick: l[7] || (l[7] = ae((b) => r.value = !1, ["self"])),
              "data-dev-inspector": ""
            }, [
              e("div", $t, [
                l[31] || (l[31] = e("h3", { class: "text-white font-bold text-[14px] mb-3" }, "設定をエクスポート", -1)),
                e("textarea", {
                  readonly: "",
                  value: i(s).exportConfigs(),
                  class: "w-full h-[200px] px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-[#94a3b8] text-[11px] font-mono resize-none"
                }, null, 8, Pt),
                e("div", Tt, [
                  e("button", {
                    onClick: l[6] || (l[6] = (b) => r.value = !1),
                    class: "px-4 py-1.5 text-[11px] text-[#94a3b8] hover:text-white hover:bg-[#334155] rounded-lg transition-colors"
                  }, " 閉じる "),
                  e("button", {
                    onClick: O,
                    class: "flex items-center gap-1.5 px-4 py-1.5 text-[11px] text-white bg-[#334155] hover:bg-[#475569] rounded-lg transition-colors"
                  }, [
                    v(i(pe), { class: "w-3.5 h-3.5" }),
                    l[30] || (l[30] = V(" ファイル保存 ", -1))
                  ]),
                  e("button", {
                    onClick: x,
                    class: "px-4 py-1.5 text-[11px] text-white bg-[#3b82f6] hover:bg-[#2563eb] rounded-lg transition-colors"
                  }, " コピー ")
                ])
              ])
            ])) : C("", !0)
          ]),
          _: 1
        })
      ])),
      (d(), Y(le, { to: "body" }, [
        v(S, {
          "enter-active-class": "transition ease-out duration-200",
          "enter-from-class": "opacity-0",
          "enter-to-class": "opacity-100",
          "leave-active-class": "transition ease-in duration-150",
          "leave-from-class": "opacity-100",
          "leave-to-class": "opacity-0"
        }, {
          default: B(() => [
            m.value ? (d(), p("div", {
              key: 0,
              class: "fixed inset-0 z-[10001] flex items-center justify-center bg-black/50",
              onClick: l[10] || (l[10] = ae((b) => m.value = !1, ["self"])),
              "data-dev-inspector": ""
            }, [
              e("div", Ut, [
                l[33] || (l[33] = e("h3", { class: "text-white font-bold text-[14px] mb-3" }, "設定をインポート", -1)),
                e("div", jt, [
                  e("label", Vt, [
                    e("input", {
                      type: "file",
                      accept: ".json",
                      class: "hidden",
                      onChange: u
                    }, null, 32),
                    l[32] || (l[32] = e("span", { class: "text-[11px] text-[#64748b]" }, "JSONファイルをドラッグまたはクリック", -1))
                  ])
                ]),
                M(e("textarea", {
                  "onUpdate:modelValue": l[8] || (l[8] = (b) => P.value = b),
                  placeholder: "またはJSONを直接貼り付け...",
                  class: "w-full h-[150px] px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[11px] font-mono resize-none placeholder-[#475569] focus:border-[#60a5fa] focus:outline-none"
                }, null, 512), [
                  [U, P.value]
                ]),
                j.value ? (d(), p("p", Dt, L(j.value), 1)) : C("", !0),
                e("div", Lt, [
                  e("button", {
                    onClick: l[9] || (l[9] = (b) => {
                      m.value = !1, P.value = "", j.value = "";
                    }),
                    class: "px-4 py-1.5 text-[11px] text-[#94a3b8] hover:text-white hover:bg-[#334155] rounded-lg transition-colors"
                  }, " キャンセル "),
                  e("button", {
                    onClick: I,
                    disabled: !P.value,
                    class: "px-4 py-1.5 text-[11px] text-white bg-[#3b82f6] hover:bg-[#2563eb] rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  }, " インポート ", 8, zt)
                ])
              ])
            ])) : C("", !0)
          ]),
          _: 1
        })
      ]))
    ], 64));
  }
}), Ot = { class: "bg-[#1e293b] rounded-xl shadow-2xl w-[420px] max-h-[80vh] overflow-hidden" }, qt = { class: "flex items-center justify-between px-4 py-3 bg-[#0f172a] border-b border-[#334155]" }, Nt = { class: "flex border-b border-[#334155] overflow-x-auto" }, Ht = { class: "p-4 space-y-3 max-h-[400px] overflow-y-auto" }, Rt = { class: "grid grid-cols-4 gap-2" }, Ft = ["onClick"], St = { class: "grid grid-cols-2 gap-3" }, Bt = ["value"], Gt = ["value"], Xt = {
  key: 0,
  class: "grid grid-cols-[100px_1fr] gap-3"
}, Kt = ["value"], Yt = { key: 1 }, Jt = { class: "block text-[10px] text-[#64748b] mb-1" }, Zt = ["placeholder"], Qt = { class: "grid grid-cols-2 gap-3" }, Wt = { class: "flex items-center justify-between px-4 py-3 bg-[#0f172a] border-t border-[#334155]" }, _t = { class: "flex items-center gap-2" }, el = /* @__PURE__ */ oe({
  __name: "DevElementEditor",
  setup(c) {
    const s = se(), r = f("note"), m = f(""), P = f(""), j = f(""), D = f(""), k = f(""), h = f("navigate"), x = f(""), O = f("GET"), z = f(""), w = f(""), I = f(""), u = f("info"), n = f(""), E = f(""), l = f(""), b = f(""), y = f(""), g = f(""), N = f(""), q = f(""), R = f(""), T = f(""), K = f(""), Ie = _(() => s.editingElementId !== null), J = _(() => s.editingElementId);
    ve(J, (Q) => {
      var t, o, W, ee, H, re;
      if (Q) {
        const a = s.getElementConfig(Q);
        a != null && a.fieldInfo && (m.value = a.fieldInfo.table || "", P.value = a.fieldInfo.column || "", j.value = a.fieldInfo.type || "", D.value = ((t = a.fieldInfo.validation) == null ? void 0 : t.join(", ")) || "", k.value = a.fieldInfo.description || ""), a != null && a.actionInfo && (h.value = a.actionInfo.type || "navigate", x.value = a.actionInfo.target || "", O.value = a.actionInfo.method || "GET", z.value = a.actionInfo.description || ""), a != null && a.note && (w.value = a.note.text || "", I.value = a.note.author || "", u.value = a.note.type || "info"), a != null && a.links && (n.value = a.links.testPath || "", E.value = a.links.figmaUrl || "", l.value = a.links.githubIssue || "", b.value = a.links.githubPr || "", y.value = a.links.relatedDocs || ""), a != null && a.devMeta && (g.value = ((o = a.devMeta.usedStores) == null ? void 0 : o.join(", ")) || "", N.value = ((W = a.devMeta.usedComponents) == null ? void 0 : W.join(", ")) || "", q.value = ((ee = a.devMeta.i18nKeys) == null ? void 0 : ee.join(", ")) || "", R.value = ((H = a.devMeta.designTokens) == null ? void 0 : H.join(", ")) || "", T.value = a.devMeta.accessibility || "", K.value = a.devMeta.responsive || ""), (re = a == null ? void 0 : a.note) != null && re.text ? r.value = "note" : a != null && a.fieldInfo ? r.value = "field" : a != null && a.actionInfo ? r.value = "action" : a != null && a.links ? r.value = "links" : a != null && a.devMeta ? r.value = "meta" : r.value = "note";
      } else
        ie();
    });
    function ie() {
      m.value = "", P.value = "", j.value = "", D.value = "", k.value = "", h.value = "navigate", x.value = "", O.value = "GET", z.value = "", w.value = "", I.value = "", u.value = "info", n.value = "", E.value = "", l.value = "", b.value = "", y.value = "", g.value = "", N.value = "", q.value = "", R.value = "", T.value = "", K.value = "", r.value = "note";
    }
    function Z() {
      s.stopEditing(), ie();
    }
    function Me() {
      if (!J.value) return;
      const Q = m.value && P.value ? {
        table: m.value,
        column: P.value,
        type: j.value || void 0,
        validation: D.value ? D.value.split(",").map((H) => H.trim()) : void 0,
        description: k.value || void 0
      } : void 0, t = x.value ? {
        type: h.value,
        target: x.value,
        method: h.value === "api" ? O.value : void 0,
        description: z.value || void 0
      } : void 0, o = w.value ? {
        text: w.value,
        author: I.value || void 0,
        type: u.value
      } : void 0, W = n.value || E.value || l.value || b.value || y.value ? {
        testPath: n.value || void 0,
        figmaUrl: E.value || void 0,
        githubIssue: l.value || void 0,
        githubPr: b.value || void 0,
        relatedDocs: y.value || void 0
      } : void 0, ee = g.value || N.value || q.value || R.value || T.value || K.value ? {
        usedStores: g.value ? g.value.split(",").map((H) => H.trim()) : void 0,
        usedComponents: N.value ? N.value.split(",").map((H) => H.trim()) : void 0,
        i18nKeys: q.value ? q.value.split(",").map((H) => H.trim()) : void 0,
        designTokens: R.value ? R.value.split(",").map((H) => H.trim()) : void 0,
        accessibility: T.value || void 0,
        responsive: K.value || void 0
      } : void 0;
      s.setElementConfig(J.value, {
        fieldInfo: Q,
        actionInfo: t,
        note: o,
        links: W,
        devMeta: ee
      }), Z();
    }
    function Ce() {
      J.value && (s.deleteElementConfig(J.value), Z());
    }
    const Ee = ["VARCHAR", "TEXT", "INT", "BIGINT", "BOOLEAN", "DATE", "DATETIME", "TIMESTAMP", "JSON"], $e = [
      { value: "navigate", label: "画面遷移" },
      { value: "api", label: "API呼び出し" },
      { value: "modal", label: "モーダル表示" },
      { value: "emit", label: "イベント発火" },
      { value: "function", label: "関数実行" }
    ], Pe = ["GET", "POST", "PUT", "DELETE", "PATCH"], Te = [
      { value: "info", label: "情報", icon: we, color: "#60a5fa" },
      { value: "warning", label: "注意", icon: ye, color: "#fbbf24" },
      { value: "todo", label: "TODO", icon: me, color: "#10b981" },
      { value: "question", label: "質問", icon: he, color: "#a78bfa" }
    ];
    return (Q, t) => (d(), Y(le, { to: "body" }, [
      v(S, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "leave-active-class": "transition ease-in duration-150",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: B(() => [
          Ie.value ? (d(), p("div", {
            key: 0,
            class: "fixed inset-0 z-[10000] flex items-center justify-center bg-black/50",
            onClick: ae(Z, ["self"]),
            "data-dev-inspector": ""
          }, [
            e("div", Ot, [
              e("div", qt, [
                t[28] || (t[28] = e("h3", { class: "text-white font-bold text-[14px]" }, "要素情報を編集", -1)),
                e("button", {
                  onClick: Z,
                  class: "p-1 text-[#94a3b8] hover:text-white hover:bg-[#334155] rounded transition-colors"
                }, [
                  v(i(ke), { class: "w-5 h-5" })
                ])
              ]),
              e("div", Nt, [
                e("button", {
                  onClick: t[0] || (t[0] = (o) => r.value = "note"),
                  class: F(["flex items-center justify-center gap-1 px-2.5 py-2.5 text-[10px] font-medium transition-colors whitespace-nowrap", r.value === "note" ? "text-[#10b981] border-b-2 border-[#10b981] bg-[#10b981]/10" : "text-[#94a3b8] hover:text-white"])
                }, [
                  v(i(qe), { class: "w-3 h-3" }),
                  t[29] || (t[29] = V(" メモ ", -1))
                ], 2),
                e("button", {
                  onClick: t[1] || (t[1] = (o) => r.value = "field"),
                  class: F(["flex items-center justify-center gap-1 px-2.5 py-2.5 text-[10px] font-medium transition-colors whitespace-nowrap", r.value === "field" ? "text-[#60a5fa] border-b-2 border-[#60a5fa] bg-[#60a5fa]/10" : "text-[#94a3b8] hover:text-white"])
                }, [
                  v(i(De), { class: "w-3 h-3" }),
                  t[30] || (t[30] = V(" データ ", -1))
                ], 2),
                e("button", {
                  onClick: t[2] || (t[2] = (o) => r.value = "action"),
                  class: F(["flex items-center justify-center gap-1 px-2.5 py-2.5 text-[10px] font-medium transition-colors whitespace-nowrap", r.value === "action" ? "text-[#a78bfa] border-b-2 border-[#a78bfa] bg-[#a78bfa]/10" : "text-[#94a3b8] hover:text-white"])
                }, [
                  v(i(Be), { class: "w-3 h-3" }),
                  t[31] || (t[31] = V(" アクション ", -1))
                ], 2),
                e("button", {
                  onClick: t[3] || (t[3] = (o) => r.value = "links"),
                  class: F(["flex items-center justify-center gap-1 px-2.5 py-2.5 text-[10px] font-medium transition-colors whitespace-nowrap", r.value === "links" ? "text-[#f59e0b] border-b-2 border-[#f59e0b] bg-[#f59e0b]/10" : "text-[#94a3b8] hover:text-white"])
                }, [
                  v(i(Oe), { class: "w-3 h-3" }),
                  t[32] || (t[32] = V(" リンク ", -1))
                ], 2),
                e("button", {
                  onClick: t[4] || (t[4] = (o) => r.value = "meta"),
                  class: F(["flex items-center justify-center gap-1 px-2.5 py-2.5 text-[10px] font-medium transition-colors whitespace-nowrap", r.value === "meta" ? "text-[#ec4899] border-b-2 border-[#ec4899] bg-[#ec4899]/10" : "text-[#94a3b8] hover:text-white"])
                }, [
                  v(i(Fe), { class: "w-3 h-3" }),
                  t[33] || (t[33] = V(" 開発情報 ", -1))
                ], 2)
              ]),
              e("div", Ht, [
                r.value === "note" ? (d(), p(A, { key: 0 }, [
                  e("div", null, [
                    t[34] || (t[34] = e("label", { class: "block text-[10px] text-[#64748b] mb-2" }, "タイプ", -1)),
                    e("div", Rt, [
                      (d(), p(A, null, G(Te, (o) => e("button", {
                        key: o.value,
                        onClick: (W) => u.value = o.value,
                        class: F(["flex flex-col items-center gap-1 p-2 rounded-lg border transition-colors", u.value === o.value ? "border-current bg-current/10" : "border-[#334155] hover:border-[#475569]"]),
                        style: X(u.value === o.value ? { color: o.color, borderColor: o.color } : {})
                      }, [
                        (d(), Y(be(o.icon), {
                          class: "w-4 h-4",
                          style: X({ color: u.value === o.value ? o.color : "#64748b" })
                        }, null, 8, ["style"])),
                        e("span", {
                          class: "text-[10px]",
                          style: X({ color: u.value === o.value ? o.color : "#94a3b8" })
                        }, L(o.label), 5)
                      ], 14, Ft)), 64))
                    ])
                  ]),
                  e("div", null, [
                    t[35] || (t[35] = e("label", { class: "block text-[10px] text-[#64748b] mb-1" }, "メモ内容 *", -1)),
                    M(e("textarea", {
                      "onUpdate:modelValue": t[5] || (t[5] = (o) => w.value = o),
                      rows: "4",
                      placeholder: "この要素についてのメモ、説明、注意事項など...",
                      class: "w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#10b981] focus:outline-none resize-none"
                    }, null, 512), [
                      [U, w.value]
                    ])
                  ]),
                  e("div", null, [
                    t[36] || (t[36] = e("label", { class: "block text-[10px] text-[#64748b] mb-1" }, "記入者（オプション）", -1)),
                    M(e("input", {
                      "onUpdate:modelValue": t[6] || (t[6] = (o) => I.value = o),
                      type: "text",
                      placeholder: "名前",
                      class: "w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#10b981] focus:outline-none"
                    }, null, 512), [
                      [U, I.value]
                    ])
                  ])
                ], 64)) : C("", !0),
                r.value === "field" ? (d(), p(A, { key: 1 }, [
                  e("div", St, [
                    e("div", null, [
                      t[37] || (t[37] = e("label", { class: "block text-[10px] text-[#64748b] mb-1" }, "テーブル名 *", -1)),
                      M(e("input", {
                        "onUpdate:modelValue": t[7] || (t[7] = (o) => m.value = o),
                        type: "text",
                        placeholder: "users",
                        class: "w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#60a5fa] focus:outline-none"
                      }, null, 512), [
                        [U, m.value]
                      ])
                    ]),
                    e("div", null, [
                      t[38] || (t[38] = e("label", { class: "block text-[10px] text-[#64748b] mb-1" }, "カラム名 *", -1)),
                      M(e("input", {
                        "onUpdate:modelValue": t[8] || (t[8] = (o) => P.value = o),
                        type: "text",
                        placeholder: "name",
                        class: "w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#60a5fa] focus:outline-none"
                      }, null, 512), [
                        [U, P.value]
                      ])
                    ])
                  ]),
                  e("div", null, [
                    t[40] || (t[40] = e("label", { class: "block text-[10px] text-[#64748b] mb-1" }, "データ型", -1)),
                    M(e("select", {
                      "onUpdate:modelValue": t[9] || (t[9] = (o) => j.value = o),
                      class: "w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] focus:border-[#60a5fa] focus:outline-none"
                    }, [
                      t[39] || (t[39] = e("option", { value: "" }, "選択してください", -1)),
                      (d(), p(A, null, G(Ee, (o) => e("option", {
                        key: o,
                        value: o
                      }, L(o), 9, Bt)), 64))
                    ], 512), [
                      [ne, j.value]
                    ])
                  ]),
                  e("div", null, [
                    t[41] || (t[41] = e("label", { class: "block text-[10px] text-[#64748b] mb-1" }, "バリデーション (カンマ区切り)", -1)),
                    M(e("input", {
                      "onUpdate:modelValue": t[10] || (t[10] = (o) => D.value = o),
                      type: "text",
                      placeholder: "required, max:255",
                      class: "w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#60a5fa] focus:outline-none"
                    }, null, 512), [
                      [U, D.value]
                    ])
                  ]),
                  e("div", null, [
                    t[42] || (t[42] = e("label", { class: "block text-[10px] text-[#64748b] mb-1" }, "説明", -1)),
                    M(e("textarea", {
                      "onUpdate:modelValue": t[11] || (t[11] = (o) => k.value = o),
                      rows: "2",
                      placeholder: "このフィールドの説明...",
                      class: "w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#60a5fa] focus:outline-none resize-none"
                    }, null, 512), [
                      [U, k.value]
                    ])
                  ])
                ], 64)) : C("", !0),
                r.value === "action" ? (d(), p(A, { key: 2 }, [
                  e("div", null, [
                    t[43] || (t[43] = e("label", { class: "block text-[10px] text-[#64748b] mb-1" }, "アクションタイプ", -1)),
                    M(e("select", {
                      "onUpdate:modelValue": t[12] || (t[12] = (o) => h.value = o),
                      class: "w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] focus:border-[#a78bfa] focus:outline-none"
                    }, [
                      (d(), p(A, null, G($e, (o) => e("option", {
                        key: o.value,
                        value: o.value
                      }, L(o.label), 9, Gt)), 64))
                    ], 512), [
                      [ne, h.value]
                    ])
                  ]),
                  h.value === "api" ? (d(), p("div", Xt, [
                    e("div", null, [
                      t[44] || (t[44] = e("label", { class: "block text-[10px] text-[#64748b] mb-1" }, "メソッド", -1)),
                      M(e("select", {
                        "onUpdate:modelValue": t[13] || (t[13] = (o) => O.value = o),
                        class: "w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] focus:border-[#a78bfa] focus:outline-none"
                      }, [
                        (d(), p(A, null, G(Pe, (o) => e("option", {
                          key: o,
                          value: o
                        }, L(o), 9, Kt)), 64))
                      ], 512), [
                        [ne, O.value]
                      ])
                    ]),
                    e("div", null, [
                      t[45] || (t[45] = e("label", { class: "block text-[10px] text-[#64748b] mb-1" }, "エンドポイント", -1)),
                      M(e("input", {
                        "onUpdate:modelValue": t[14] || (t[14] = (o) => x.value = o),
                        type: "text",
                        placeholder: "/api/tasks",
                        class: "w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#a78bfa] focus:outline-none"
                      }, null, 512), [
                        [U, x.value]
                      ])
                    ])
                  ])) : (d(), p("div", Yt, [
                    e("label", Jt, L(h.value === "navigate" ? "遷移先パス" : h.value === "modal" ? "モーダル名" : h.value === "emit" ? "イベント名" : "関数名"), 1),
                    M(e("input", {
                      "onUpdate:modelValue": t[15] || (t[15] = (o) => x.value = o),
                      type: "text",
                      placeholder: h.value === "navigate" ? "/tasks" : h.value === "modal" ? "ConfirmDialog" : h.value === "emit" ? "onSubmit" : "handleClick",
                      class: "w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#a78bfa] focus:outline-none"
                    }, null, 8, Zt), [
                      [U, x.value]
                    ])
                  ])),
                  e("div", null, [
                    t[46] || (t[46] = e("label", { class: "block text-[10px] text-[#64748b] mb-1" }, "説明", -1)),
                    M(e("textarea", {
                      "onUpdate:modelValue": t[16] || (t[16] = (o) => z.value = o),
                      rows: "2",
                      placeholder: "このアクションの説明...",
                      class: "w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#a78bfa] focus:outline-none resize-none"
                    }, null, 512), [
                      [U, z.value]
                    ])
                  ])
                ], 64)) : C("", !0),
                r.value === "links" ? (d(), p(A, { key: 3 }, [
                  e("div", null, [
                    t[47] || (t[47] = e("label", { class: "block text-[10px] text-[#64748b] mb-1" }, "テストファイルパス", -1)),
                    M(e("input", {
                      "onUpdate:modelValue": t[17] || (t[17] = (o) => n.value = o),
                      type: "text",
                      placeholder: "src/__tests__/components/MyComponent.test.ts",
                      class: "w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#f59e0b] focus:outline-none font-mono"
                    }, null, 512), [
                      [U, n.value]
                    ])
                  ]),
                  e("div", null, [
                    t[48] || (t[48] = e("label", { class: "block text-[10px] text-[#64748b] mb-1" }, "Figma URL", -1)),
                    M(e("input", {
                      "onUpdate:modelValue": t[18] || (t[18] = (o) => E.value = o),
                      type: "text",
                      placeholder: "https://www.figma.com/design/...",
                      class: "w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#f59e0b] focus:outline-none"
                    }, null, 512), [
                      [U, E.value]
                    ])
                  ]),
                  e("div", Qt, [
                    e("div", null, [
                      t[49] || (t[49] = e("label", { class: "block text-[10px] text-[#64748b] mb-1" }, "GitHub Issue", -1)),
                      M(e("input", {
                        "onUpdate:modelValue": t[19] || (t[19] = (o) => l.value = o),
                        type: "text",
                        placeholder: "#123",
                        class: "w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#f59e0b] focus:outline-none"
                      }, null, 512), [
                        [U, l.value]
                      ])
                    ]),
                    e("div", null, [
                      t[50] || (t[50] = e("label", { class: "block text-[10px] text-[#64748b] mb-1" }, "GitHub PR", -1)),
                      M(e("input", {
                        "onUpdate:modelValue": t[20] || (t[20] = (o) => b.value = o),
                        type: "text",
                        placeholder: "#456",
                        class: "w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#f59e0b] focus:outline-none"
                      }, null, 512), [
                        [U, b.value]
                      ])
                    ])
                  ]),
                  e("div", null, [
                    t[51] || (t[51] = e("label", { class: "block text-[10px] text-[#64748b] mb-1" }, "関連ドキュメント", -1)),
                    M(e("input", {
                      "onUpdate:modelValue": t[21] || (t[21] = (o) => y.value = o),
                      type: "text",
                      placeholder: "https://docs.example.com/...",
                      class: "w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#f59e0b] focus:outline-none"
                    }, null, 512), [
                      [U, y.value]
                    ])
                  ])
                ], 64)) : C("", !0),
                r.value === "meta" ? (d(), p(A, { key: 4 }, [
                  e("div", null, [
                    t[52] || (t[52] = e("label", { class: "block text-[10px] text-[#64748b] mb-1" }, "使用Piniaストア (カンマ区切り)", -1)),
                    M(e("input", {
                      "onUpdate:modelValue": t[22] || (t[22] = (o) => g.value = o),
                      type: "text",
                      placeholder: "useUserStore, useThemeStore",
                      class: "w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#ec4899] focus:outline-none font-mono"
                    }, null, 512), [
                      [U, g.value]
                    ])
                  ]),
                  e("div", null, [
                    t[53] || (t[53] = e("label", { class: "block text-[10px] text-[#64748b] mb-1" }, "使用コンポーネント (カンマ区切り)", -1)),
                    M(e("input", {
                      "onUpdate:modelValue": t[23] || (t[23] = (o) => N.value = o),
                      type: "text",
                      placeholder: "Button, Modal, Input",
                      class: "w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#ec4899] focus:outline-none font-mono"
                    }, null, 512), [
                      [U, N.value]
                    ])
                  ]),
                  e("div", null, [
                    t[54] || (t[54] = e("label", { class: "block text-[10px] text-[#64748b] mb-1" }, "i18nキー (カンマ区切り)", -1)),
                    M(e("input", {
                      "onUpdate:modelValue": t[24] || (t[24] = (o) => q.value = o),
                      type: "text",
                      placeholder: "common.save, errors.required",
                      class: "w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#ec4899] focus:outline-none font-mono"
                    }, null, 512), [
                      [U, q.value]
                    ])
                  ]),
                  e("div", null, [
                    t[55] || (t[55] = e("label", { class: "block text-[10px] text-[#64748b] mb-1" }, "デザイントークン (カンマ区切り)", -1)),
                    M(e("input", {
                      "onUpdate:modelValue": t[25] || (t[25] = (o) => R.value = o),
                      type: "text",
                      placeholder: "primaryColor, secondaryColor",
                      class: "w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#ec4899] focus:outline-none font-mono"
                    }, null, 512), [
                      [U, R.value]
                    ])
                  ]),
                  e("div", null, [
                    t[56] || (t[56] = e("label", { class: "block text-[10px] text-[#64748b] mb-1" }, "アクセシビリティ", -1)),
                    M(e("textarea", {
                      "onUpdate:modelValue": t[26] || (t[26] = (o) => T.value = o),
                      rows: "2",
                      placeholder: "キーボード操作、スクリーンリーダー対応などのメモ...",
                      class: "w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#ec4899] focus:outline-none resize-none"
                    }, null, 512), [
                      [U, T.value]
                    ])
                  ]),
                  e("div", null, [
                    t[57] || (t[57] = e("label", { class: "block text-[10px] text-[#64748b] mb-1" }, "レスポンシブ動作", -1)),
                    M(e("textarea", {
                      "onUpdate:modelValue": t[27] || (t[27] = (o) => K.value = o),
                      rows: "2",
                      placeholder: "モバイルでの表示変更、ブレークポイントなど...",
                      class: "w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#ec4899] focus:outline-none resize-none"
                    }, null, 512), [
                      [U, K.value]
                    ])
                  ])
                ], 64)) : C("", !0)
              ]),
              e("div", Wt, [
                e("button", {
                  onClick: Ce,
                  class: "flex items-center gap-1.5 px-3 py-1.5 text-[11px] text-[#ef4444] hover:bg-[#ef4444]/10 rounded-lg transition-colors"
                }, [
                  v(i(ge), { class: "w-3.5 h-3.5" }),
                  t[58] || (t[58] = V(" 削除 ", -1))
                ]),
                e("div", _t, [
                  e("button", {
                    onClick: Z,
                    class: "px-4 py-1.5 text-[11px] text-[#94a3b8] hover:text-white hover:bg-[#334155] rounded-lg transition-colors"
                  }, " キャンセル "),
                  e("button", {
                    onClick: Me,
                    class: "flex items-center gap-1.5 px-4 py-1.5 text-[11px] text-white bg-[#3b82f6] hover:bg-[#2563eb] rounded-lg transition-colors"
                  }, [
                    v(i(He), { class: "w-3.5 h-3.5" }),
                    t[59] || (t[59] = V(" 保存 ", -1))
                  ])
                ])
              ])
            ])
          ])) : C("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), tl = { class: "absolute -top-6 left-0 px-2 py-0.5 bg-[#10b981] text-white text-[10px] font-mono rounded whitespace-nowrap max-w-[300px] truncate" }, ll = {
  key: 0,
  "data-dev-inspector": "",
  class: "fixed top-12 left-1/2 -translate-x-1/2 z-[9998] px-4 py-2 bg-[#10b981] text-white text-[12px] font-medium rounded-lg shadow-lg flex items-center gap-3"
}, ol = ["title", "onClick"], sl = /* @__PURE__ */ oe({
  __name: "DevPickOverlay",
  setup(c) {
    const s = se(), r = f(null), m = f(null);
    function P(w) {
      const I = s.getElementConfig(w);
      if (!(I != null && I.note)) return null;
      const u = {
        info: we,
        warning: ye,
        todo: me,
        question: he
      }, n = {
        info: "#60a5fa",
        warning: "#fbbf24",
        todo: "#10b981",
        question: "#a78bfa"
      };
      return {
        icon: u[I.note.type || "info"],
        color: n[I.note.type || "info"],
        text: I.note.text
      };
    }
    const j = f(0), D = f(0), k = _(() => {
      const w = j.value, I = D.value, u = [];
      if (!s.isEnabled) return u;
      const n = s.getConfiguredSelectors();
      for (const E of n)
        try {
          const l = document.querySelector(E);
          if (l) {
            const b = l.getBoundingClientRect();
            u.push({
              selector: E,
              element: l,
              top: b.top + w - 4,
              left: b.right + I + 4,
              noteInfo: P(E)
            });
          }
        } catch {
        }
      return u;
    });
    function h(w) {
      if (!s.isPickMode) return;
      if (w.target.closest("[data-dev-inspector]")) {
        r.value = null, m.value = null, s.setHoveredSelector(null);
        return;
      }
      const u = document.elementFromPoint(w.clientX, w.clientY);
      if (!u || u === document.body || u === document.documentElement) {
        r.value = null, m.value = null, s.setHoveredSelector(null);
        return;
      }
      if (u.closest("[data-dev-inspector]"))
        return;
      m.value = u;
      const n = u.getBoundingClientRect();
      r.value = {
        top: `${n.top + window.scrollY}px`,
        left: `${n.left + window.scrollX}px`,
        width: `${n.width}px`,
        height: `${n.height}px`
      };
      const E = s.generateSelector(u);
      s.setHoveredSelector(E);
    }
    function x(w) {
      if (!(!s.isPickMode || w.target.closest("[data-dev-inspector]")) && (w.preventDefault(), w.stopPropagation(), m.value)) {
        const u = s.generateSelector(m.value);
        s.startEditing(u), s.togglePickMode();
      }
    }
    function O(w) {
      w.key === "Escape" && s.isPickMode && s.togglePickMode();
    }
    function z() {
      j.value = window.scrollY, D.value = window.scrollX;
    }
    return fe(() => {
      window.addEventListener("mousemove", h, !0), window.addEventListener("click", x, !0), window.addEventListener("keydown", O), window.addEventListener("scroll", z), window.addEventListener("resize", z);
    }), Ue(() => {
      window.removeEventListener("mousemove", h, !0), window.removeEventListener("click", x, !0), window.removeEventListener("keydown", O), window.removeEventListener("scroll", z), window.removeEventListener("resize", z);
    }), ve(() => s.isPickMode, (w) => {
      w || (r.value = null, m.value = null);
    }), (w, I) => (d(), Y(le, { to: "body" }, [
      i(s).isPickMode && r.value ? (d(), p("div", {
        key: 0,
        "data-dev-inspector": "",
        class: "fixed pointer-events-none z-[9997] border-2 border-[#10b981] bg-[#10b981]/10 transition-all duration-75",
        style: X({
          top: r.value.top,
          left: r.value.left,
          width: r.value.width,
          height: r.value.height
        })
      }, [
        e("div", tl, L(i(s).hoveredSelector), 1)
      ], 4)) : C("", !0),
      v(S, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "opacity-0 -translate-y-4",
        "enter-to-class": "opacity-100 translate-y-0",
        "leave-active-class": "transition ease-in duration-150",
        "leave-from-class": "opacity-100 translate-y-0",
        "leave-to-class": "opacity-0 -translate-y-4"
      }, {
        default: B(() => [
          i(s).isPickMode ? (d(), p("div", ll, [...I[0] || (I[0] = [
            e("span", null, "要素をクリックしてメモを追加", -1),
            e("kbd", { class: "px-1.5 py-0.5 bg-white/20 rounded text-[10px]" }, "ESC", -1),
            e("span", { class: "text-[10px] opacity-80" }, "でキャンセル", -1)
          ])])) : C("", !0)
        ]),
        _: 1
      }),
      i(s).isEnabled && !i(s).isPickMode && !i(s).isEditMode ? (d(!0), p(A, { key: 1 }, G(k.value, (u) => (d(), p("div", {
        key: u.selector,
        "data-dev-inspector": "",
        class: "fixed z-[9996] pointer-events-none",
        style: X({
          top: `${u.top}px`,
          left: `${u.left}px`
        })
      }, [
        u.noteInfo ? (d(), p("div", {
          key: 0,
          class: "w-4 h-4 rounded-full flex items-center justify-center shadow-md pointer-events-auto cursor-pointer",
          style: X({ backgroundColor: u.noteInfo.color }),
          title: u.noteInfo.text,
          onClick: (n) => i(s).startEditing(u.selector)
        }, [
          (d(), Y(be(u.noteInfo.icon), { class: "w-2.5 h-2.5 text-white" }))
        ], 12, ol)) : C("", !0)
      ], 4))), 128)) : C("", !0)
    ]));
  }
}), nl = {
  key: 0,
  "data-dev-inspector": ""
}, al = /* @__PURE__ */ oe({
  __name: "DevInspector",
  props: {
    storageKey: { default: "devInspector:elementConfigs" },
    enabledInProduction: { type: Boolean, default: !1 },
    initialAnnotations: {}
  },
  setup(c) {
    const s = c, r = se();
    return fe(() => {
      r.init({
        storageKey: s.storageKey,
        enabledInProduction: s.enabledInProduction,
        initialAnnotations: s.initialAnnotations
      });
    }), (m, P) => i(r).isAvailable ? (d(), p("div", nl, [
      v(At),
      v(el),
      v(sl)
    ])) : C("", !0);
  }
}), dl = {
  install(c, s = {}) {
    const { autoRegister: r = !0, ...m } = s;
    r && c.component("DevInspector", al), c.provide("devInspectorOptions", m);
  }
};
export {
  el as DevElementEditor,
  al as DevInspector,
  At as DevPanel,
  sl as DevPickOverlay,
  dl as VueDevInspector,
  dl as default,
  cl as useDevInspector,
  se as useDevInspectorStore
};
