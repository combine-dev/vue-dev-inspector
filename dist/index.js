import { h as ul, defineComponent as Lt, ref as k, computed as j, watch as At, openBlock as s, createElementBlock as n, Fragment as I, createBlock as pt, Teleport as _t, unref as r, createVNode as C, createCommentVNode as v, createElementVNode as e, normalizeClass as A, toDisplayString as c, withDirectives as b, renderList as M, createTextVNode as O, vModelText as x, vShow as Mt, normalizeStyle as it, withModifiers as Ie, vModelSelect as Se, withKeys as Pt, resolveDynamicComponent as Nl, vModelCheckbox as Ht, onMounted as gl, onUnmounted as eo } from "vue";
import { u as Ot } from "./useDevInspector-DEA9TxPt.js";
import { a as Pp } from "./useDevInspector-DEA9TxPt.js";
import { default as Ap } from "./vite.js";
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var qt = {
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
const to = (W) => W.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), X = (W, a) => ({ size: U, strokeWidth: E = 2, absoluteStrokeWidth: te, color: oe, class: ie, ...ke }, { attrs: we, slots: z }) => ul(
  "svg",
  {
    ...qt,
    width: U || qt.width,
    height: U || qt.height,
    stroke: oe || qt.stroke,
    "stroke-width": te ? Number(E) * 24 / Number(U) : E,
    ...we,
    class: ["lucide", `lucide-${to(W)}`],
    ...ke
  },
  [
    ...a.map((le) => ul(...le)),
    ...z.default ? [z.default()] : []
  ]
);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lo = X("AlertCircleIcon", [
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
const oo = X("AlertTriangleIcon", [
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
const so = X("ArrowUpDownIcon", [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const no = X("BarChart3Icon", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rl = X("CalculatorIcon", [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
  ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const io = X("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wt = X("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cl = X("ChevronUpIcon", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ao = X("ClipboardListIcon", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M12 11h4", key: "1jrz19" }],
  ["path", { d: "M12 16h4", key: "n85exb" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vl = X("ClockIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pl = X("CodeIcon", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ut = X("DatabaseIcon", [
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
const Xt = X("DownloadIcon", [
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
const uo = X("ExternalLinkIcon", [
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
const ro = X("EyeOffIcon", [
  ["path", { d: "M9.88 9.88a3 3 0 1 0 4.24 4.24", key: "1jxqfv" }],
  [
    "path",
    {
      d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
      key: "9wicm4"
    }
  ],
  [
    "path",
    { d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61", key: "1jreej" }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const co = X("EyeIcon", [
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kl = X("FileSpreadsheetIcon", [
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
const Rt = X("FileTextIcon", [
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
const vo = X("FormInputIcon", [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M17 12h.01", key: "1m0b6t" }],
  ["path", { d: "M7 12h.01", key: "eqddd0" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const po = X("GitBranchIcon", [
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
const mo = X("GitMergeIcon", [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M6 21V9a9 9 0 0 0 9 9", key: "7kw0sc" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ml = X("ListIcon", [
  ["line", { x1: "8", x2: "21", y1: "6", y2: "6", key: "7ey8pc" }],
  ["line", { x1: "8", x2: "21", y1: "12", y2: "12", key: "rjfblc" }],
  ["line", { x1: "8", x2: "21", y1: "18", y2: "18", key: "c3b1m8" }],
  ["line", { x1: "3", x2: "3.01", y1: "6", y2: "6", key: "1g7gq3" }],
  ["line", { x1: "3", x2: "3.01", y1: "12", y2: "12", key: "1pjlvk" }],
  ["line", { x1: "3", x2: "3.01", y1: "18", y2: "18", key: "28t2mc" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fo = X("LockIcon", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = X("MailIcon", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ho = X("MessageSquareIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yo = X("MinusIcon", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fl = X("MousePointer2Icon", [
  ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bl = X("PenLineIcon", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hl = X("PenSquareIcon", [
  ["path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1qinfi" }],
  ["path", { d: "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z", key: "w2jsv5" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vt = X("PlusIcon", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xl = X("SaveIcon", [
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
const go = X("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ko = X("ServerIcon", [
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
const yl = X("ShieldQuestionIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3", key: "mhlwft" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xo = X("ShieldIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bt = X("Trash2Icon", [
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
const wo = X("TypeIcon", [
  ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
  ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $o = X("UploadIcon", [
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
const zt = X("Wand2Icon", [
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
const xt = X("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Co = X("ZapIcon", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
]);
async function _o(W, a, U = {}) {
  var ce;
  const E = await import("./xlsx-BopDBbWb.js"), { systemName: te = "System", author: oe = "" } = U, ie = /* @__PURE__ */ new Date(), ke = `${ie.getFullYear()}/${ie.getMonth() + 1}/${ie.getDate()}`, we = E.utils.book_new(), z = [];
  z.push([
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
    te,
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
    (W == null ? void 0 : W.name) || "",
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
    oe,
    "",
    "作成日",
    "",
    "",
    "",
    "",
    ke
  ]), z.push([]), z.push([
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
    (W == null ? void 0 : W.componentPath) || "",
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
    (W == null ? void 0 : W.figmaUrl) || ""
  ]), z.push([]), z.push(["機能概要"]), z.push([(W == null ? void 0 : W.description) || ""]), z.push([]), z.push(["画面レイアウト　figmaURL"]), z.push([(W == null ? void 0 : W.figmaUrl) || ""]), z.push([]), W != null && W.apis && W.apis.length > 0 && (z.push(["API一覧"]), z.push(["", "メソッド", "", "エンドポイント", "", "", "", "", "", "", "", "説明"]), W.apis.forEach((V) => {
    z.push(["", V.method, "", V.endpoint, "", "", "", "", "", "", "", V.description]);
  }), z.push([])), z.push(["画面項目　ヘッダーフッターは省く"]), z.push([
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
  ]), Object.values(a).forEach((V, Pe) => {
    var se, qe, H;
    const at = V.id;
    let Ue = "", Xe = "", fe = "";
    if ((se = V.note) != null && se.text && (Ue = V.note.text), V.fieldInfo && (Ue += Ue ? `
` : "", Ue += `DB: ${V.fieldInfo.table}.${V.fieldInfo.column}`, V.fieldInfo.type && (Ue += ` (${V.fieldInfo.type})`), V.fieldInfo.description && (Ue += `
${V.fieldInfo.description}`)), V.actionInfo && (fe = `[${{
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行",
      csv_export: "CSV出力",
      csv_import: "CSV取込",
      email: "メール送信",
      sort: "ソート"
    }[V.actionInfo.type] || V.actionInfo.type}]`, V.actionInfo.target && (fe += ` ${V.actionInfo.method || ""} ${V.actionInfo.target}`), V.actionInfo.description && (fe += `
${V.actionInfo.description}`)), V.links) {
      const S = [];
      V.links.testPath && S.push(`テスト: ${V.links.testPath}`), V.links.figmaUrl && S.push(`Figma: ${V.links.figmaUrl}`), V.links.githubIssue && S.push(`Issue: ${V.links.githubIssue}`), V.links.githubPr && S.push(`PR: ${V.links.githubPr}`), S.length > 0 && (fe += fe ? `

` : "", fe += S.join(`
`));
    }
    if (V.devMeta) {
      const S = [];
      (qe = V.devMeta.usedStores) != null && qe.length && S.push(`Store: ${V.devMeta.usedStores.join(", ")}`), (H = V.devMeta.usedComponents) != null && H.length && S.push(`Components: ${V.devMeta.usedComponents.join(", ")}`), V.devMeta.accessibility && S.push(`A11y: ${V.devMeta.accessibility}`), V.devMeta.responsive && S.push(`Responsive: ${V.devMeta.responsive}`), S.length > 0 && (fe += fe ? `

` : "", fe += `[開発情報]
` + S.join(`
`));
    }
    z.push([
      "",
      Pe + 1,
      "",
      at,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      Ue,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      Xe,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      fe
    ]);
  });
  const pe = E.utils.aoa_to_sheet(z);
  pe["!cols"] = [
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
  ], E.utils.book_append_sheet(we, pe, "画面設計書");
  const me = `画面仕様書_${((ce = W == null ? void 0 : W.name) == null ? void 0 : ce.replace(/[/\\?%*:|"<>]/g, "-")) || "screen"}_${ke.replace(/\//g, "")}.xlsx`;
  return E.writeFile(we, me), me;
}
const Io = {
  key: 0,
  class: "di-panel",
  "data-dev-inspector": ""
}, To = { class: "di-header" }, So = { class: "di-header-title" }, Uo = { class: "di-tab-bar" }, Do = {
  key: 0,
  class: "di-tab-badge"
}, Mo = {
  key: 0,
  class: "di-tab-badge"
}, Vo = {
  key: 0,
  class: "di-tab-badge"
}, Eo = { class: "di-edit-section" }, Po = { class: "di-note-toggle-badge" }, Bo = {
  key: 1,
  class: "di-note-filter"
}, Ao = { class: "di-filter-buttons" }, Lo = ["onClick"], Oo = {
  key: 2,
  class: "di-element-list-section"
}, Fo = { class: "di-element-list-header" }, jo = { class: "di-count-badge" }, Ho = { key: 0 }, qo = { class: "di-element-tree" }, Ro = {
  key: 0,
  class: "di-tree-group"
}, zo = { class: "di-tree-icon" }, Ko = { class: "di-count-badge" }, Go = {
  key: 0,
  class: "di-element-list"
}, Yo = ["onDragstart", "onClick", "onMouseenter"], Xo = { class: "di-element-item-body" }, Wo = { class: "di-element-item-label" }, Zo = {
  key: 1,
  class: "di-tree-group"
}, Jo = { class: "di-tree-icon" }, Qo = { class: "di-count-badge" }, No = {
  key: 0,
  class: "di-tree-children"
}, es = {
  key: 0,
  class: "di-rename-row"
}, ts = ["onKeydown", "onBlur"], ls = ["onClick", "onDragover", "onDragleave", "onDrop"], os = { class: "di-tree-icon" }, ss = { class: "di-count-badge" }, ns = ["onClick"], is = { key: 2 }, as = {
  key: 0,
  class: "di-element-list"
}, ds = ["onDragstart", "onClick", "onMouseenter"], us = { class: "di-element-item-body" }, rs = { class: "di-element-item-label" }, cs = {
  key: 1,
  class: "di-tree-children"
}, vs = {
  key: 0,
  class: "di-rename-row"
}, ps = ["onKeydown", "onBlur"], ms = ["onClick", "onDragover", "onDragleave", "onDrop"], fs = { class: "di-tree-icon" }, bs = { class: "di-count-badge" }, hs = ["onClick"], ys = { key: 2 }, gs = {
  key: 0,
  class: "di-element-list"
}, ks = ["onDragstart", "onClick", "onMouseenter"], xs = { class: "di-element-item-body" }, ws = { class: "di-element-item-label" }, $s = {
  key: 1,
  class: "di-tree-children"
}, Cs = {
  key: 0,
  class: "di-rename-row"
}, _s = ["onKeydown", "onBlur"], Is = ["onClick", "onDragover", "onDragleave", "onDrop"], Ts = { class: "di-tree-icon" }, Ss = { class: "di-count-badge" }, Us = ["onClick"], Ds = { key: 2 }, Ms = {
  key: 0,
  class: "di-element-list"
}, Vs = ["onDragstart", "onClick", "onMouseenter"], Es = { class: "di-element-item-body" }, Ps = { class: "di-element-item-label" }, Bs = {
  key: 2,
  class: "di-tree-group"
}, As = { class: "di-tree-icon" }, Ls = { class: "di-count-badge" }, Os = {
  key: 0,
  class: "di-tree-children"
}, Fs = {
  key: 0,
  class: "di-rename-row"
}, js = ["onKeydown", "onBlur"], Hs = ["onClick", "onDragover", "onDragleave", "onDrop"], qs = { class: "di-tree-icon" }, Rs = { class: "di-count-badge" }, zs = ["onClick"], Ks = { key: 2 }, Gs = {
  key: 0,
  class: "di-element-list"
}, Ys = ["onDragstart", "onClick", "onMouseenter"], Xs = { class: "di-element-item-body" }, Ws = { class: "di-element-item-label" }, Zs = {
  key: 1,
  class: "di-tree-children"
}, Js = {
  key: 0,
  class: "di-rename-row"
}, Qs = ["onKeydown", "onBlur"], Ns = ["onClick", "onDragover", "onDragleave", "onDrop"], en = { class: "di-tree-icon" }, tn = { class: "di-count-badge" }, ln = ["onClick"], on = { key: 2 }, sn = {
  key: 0,
  class: "di-element-list"
}, nn = ["onDragstart", "onClick", "onMouseenter"], an = { class: "di-element-item-body" }, dn = { class: "di-element-item-label" }, un = {
  key: 0,
  class: "di-tree-subgroup"
}, rn = { class: "di-tree-icon" }, cn = { class: "di-count-badge" }, vn = {
  key: 0,
  class: "di-element-list"
}, pn = ["onDragstart", "onClick", "onMouseenter"], mn = { class: "di-element-item-body" }, fn = { class: "di-element-item-label" }, bn = {
  key: 0,
  class: "di-unannotated-badge"
}, hn = {
  key: 3,
  class: "di-unannotated-results"
}, yn = { class: "di-unannotated-summary" }, gn = { key: 0 }, kn = { key: 1 }, xn = { key: 2 }, wn = { class: "di-unannotated-list" }, $n = ["onMouseenter"], Cn = { class: "di-unannotated-text" }, _n = ["onClick"], In = ["onClick"], Tn = {
  key: 4,
  class: "di-unannotated-empty"
}, Sn = {
  key: 5,
  class: "di-broken-warning"
}, Un = { class: "di-broken-header" }, Dn = { class: "di-broken-list" }, Mn = { class: "di-broken-item-info" }, Vn = { class: "di-broken-item-note" }, En = { class: "di-broken-item-selector" }, Pn = { class: "di-broken-item-actions" }, Bn = ["onClick"], An = ["onClick"], Ln = { class: "di-broken-actions" }, On = { class: "di-content" }, Fn = { class: "di-section" }, jn = { class: "di-screen-header" }, Hn = { class: "di-screen-name" }, qn = {
  key: 0,
  class: "di-screen-desc"
}, Rn = {
  key: 1,
  class: "di-auth-badges"
}, zn = {
  key: 0,
  class: "di-auth-badge di-auth-required"
}, Kn = {
  key: 1,
  class: "di-auth-note"
}, Gn = {
  key: 0,
  class: "di-card"
}, Yn = { class: "di-card-label" }, Xn = { class: "di-code-blue" }, Wn = {
  key: 1,
  class: "di-card"
}, Zn = { class: "di-card-label" }, Jn = ["href"], Qn = {
  key: 2,
  class: "di-card"
}, Nn = { class: "di-card-label" }, ei = { class: "di-api-list" }, ti = { class: "di-api-info" }, li = { class: "di-api-endpoint" }, oi = {
  key: 0,
  class: "di-api-desc"
}, si = {
  key: 0,
  class: "di-api-timing-badge"
}, ni = {
  key: 3,
  class: "di-card"
}, ii = { class: "di-card-label" }, ai = { class: "di-screen-notes" }, di = {
  key: 1,
  class: "di-no-spec"
}, ui = { class: "di-card di-cross-search-section" }, ri = { class: "di-cross-search-header" }, ci = { class: "di-cross-search-body" }, vi = {
  class: "di-filter-buttons",
  style: { "margin-bottom": "8px" }
}, pi = ["onClick"], mi = ["placeholder"], fi = {
  key: 0,
  class: "di-cross-search-count"
}, bi = {
  key: 1,
  class: "di-cross-search-results"
}, hi = { class: "di-cross-search-page-header" }, yi = {
  key: 0,
  class: "di-cross-search-page-name"
}, gi = ["onClick"], ki = { class: "di-cross-search-field" }, xi = {
  key: 0,
  class: "di-cross-search-context"
}, wi = { class: "di-card di-screen-flow-section" }, $i = {
  key: 0,
  class: "di-screen-flow-badge"
}, Ci = {
  key: 0,
  class: "di-screen-flow-body"
}, _i = {
  key: 0,
  class: "di-screen-flow-empty"
}, Ii = { class: "di-flow-node-path" }, Ti = {
  key: 0,
  class: "di-flow-node-name"
}, Si = ["onClick"], Ui = { class: "di-flow-target" }, Di = {
  key: 0,
  class: "di-flow-edge-label"
}, Mi = {
  key: 1,
  class: "di-flow-orphans"
}, Vi = { class: "di-section" }, Ei = {
  class: "di-section-header",
  style: { "margin-bottom": "8px" }
}, Pi = {
  key: 0,
  class: "di-section-badge"
}, Bi = { class: "di-master-table-name" }, Ai = ["onClick"], Li = { class: "di-master-item-header" }, Oi = { class: "di-master-col-name" }, Fi = {
  key: 0,
  class: "di-master-col-type"
}, ji = { class: "di-master-item-name" }, Hi = { class: "di-master-entries-preview" }, qi = {
  key: 0,
  class: "di-master-entry-more"
}, Ri = { class: "di-master-editor" }, zi = { class: "di-master-editor-header" }, Ki = { class: "di-master-editor-body" }, Gi = { class: "di-master-row" }, Yi = { class: "di-master-field" }, Xi = ["disabled"], Wi = { class: "di-master-field" }, Zi = ["disabled"], Ji = { class: "di-master-row" }, Qi = { class: "di-master-field" }, Ni = { class: "di-master-field" }, ea = {
  class: "di-master-field",
  style: { "margin-bottom": "12px" }
}, ta = { class: "di-master-entries-header" }, la = { class: "di-master-entries-list" }, oa = ["onUpdate:modelValue"], sa = ["onUpdate:modelValue"], na = ["onUpdate:modelValue"], ia = ["onUpdate:modelValue"], aa = ["onClick"], da = {
  class: "di-master-entries-header",
  style: { "margin-top": "16px" }
}, ua = {
  key: 0,
  class: "di-master-entries-list"
}, ra = ["onUpdate:modelValue"], ca = ["value"], va = ["onUpdate:modelValue"], pa = ["value"], ma = ["onUpdate:modelValue"], fa = ["onUpdate:modelValue"], ba = ["onClick"], ha = {
  key: 1,
  class: "di-master-empty",
  style: { "margin-top": "4px", "font-size": "11px" }
}, ya = { class: "di-master-editor-footer" }, ga = ["disabled"], ka = { class: "di-section" }, xa = {
  class: "di-section-header",
  style: { "margin-bottom": "8px" }
}, wa = {
  key: 0,
  class: "di-section-badge"
}, $a = ["onClick"], Ca = { class: "di-batch-item-info" }, _a = { class: "di-batch-item-name" }, Ia = {
  key: 0,
  class: "di-batch-item-schedule"
}, Ta = { class: "di-batch-editor" }, Sa = { class: "di-batch-editor-header" }, Ua = { class: "di-batch-editor-body" }, Da = { class: "di-batch-row" }, Ma = { class: "di-batch-field" }, Va = { class: "di-batch-field" }, Ea = { class: "di-batch-row" }, Pa = { class: "di-batch-field" }, Ba = {
  class: "di-batch-field",
  style: { "margin-bottom": "12px" }
}, Aa = { class: "di-batch-row" }, La = { class: "di-batch-field" }, Oa = { class: "di-batch-tags-input" }, Fa = ["onClick"], ja = { class: "di-batch-field" }, Ha = { class: "di-batch-tags-input" }, qa = ["onClick"], Ra = { class: "di-batch-section-label" }, za = { key: 0 }, Ka = { class: "di-batch-step-no" }, Ga = ["onUpdate:modelValue"], Ya = ["onUpdate:modelValue"], Xa = ["onUpdate:modelValue"], Wa = ["onUpdate:modelValue"], Za = ["onClick"], Ja = { class: "di-batch-row" }, Qa = { class: "di-batch-field" }, Na = { class: "di-batch-field" }, ed = { class: "di-batch-row" }, td = { class: "di-batch-field" }, ld = { class: "di-batch-field" }, od = { class: "di-batch-editor-footer" }, sd = ["disabled"], nd = { class: "di-export-buttons" }, id = { class: "di-action-buttons" }, ad = {
  key: 0,
  class: "di-export-summary"
}, dd = { class: "di-export-summary-row" }, ud = { class: "di-export-summary-count" }, rd = { class: "di-export-summary-row" }, cd = { class: "di-export-summary-count" }, vd = { class: "di-export-summary-row" }, pd = { class: "di-export-summary-count" }, md = {
  key: 0,
  class: "di-indicator",
  "data-dev-inspector": ""
}, fd = { class: "di-modal" }, bd = ["value"], hd = { class: "di-modal-actions" }, yd = { class: "di-modal" }, gd = { class: "di-file-drop" }, kd = {
  key: 0,
  class: "di-error"
}, xd = { class: "di-modal-actions" }, wd = ["disabled"], $d = /* @__PURE__ */ Lt({
  __name: "DevPanel",
  setup(W) {
    const a = Ot(), U = k("elements"), E = k(!1), te = k(!1), oe = k(""), ie = k(""), ke = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, we = j(() => a.currentScreenSpec), z = j(() => a.getScreenConfig()), le = j(() => {
      var y;
      const u = z.value, l = we.value;
      return !u && !l ? null : {
        name: (u == null ? void 0 : u.name) || (l == null ? void 0 : l.name) || "",
        description: (u == null ? void 0 : u.description) || (l == null ? void 0 : l.description) || "",
        componentPath: (u == null ? void 0 : u.componentPath) || (l == null ? void 0 : l.componentPath) || "",
        figmaUrl: (u == null ? void 0 : u.figmaUrl) || (l == null ? void 0 : l.figmaUrl) || "",
        apis: (u == null ? void 0 : u.apis) || ((y = l == null ? void 0 : l.apis) == null ? void 0 : y.map((B) => ({ ...B, loadTiming: void 0 }))) || [],
        auth: (u == null ? void 0 : u.auth) || null,
        notes: (u == null ? void 0 : u.notes) || (l != null && l.notes ? l.notes.join(`
`) : "")
      };
    }), pe = j(() => Object.keys(a.elementConfigs).length), Te = j(() => {
      const u = typeof window < "u" ? window.location.pathname : "/";
      return Object.entries(a.elementConfigs).filter(([, l]) => !l.pagePath || l.pagePath === u).map(([l, y]) => {
        var i, p, f;
        let B = "";
        return (i = y.note) != null && i.text ? B = y.note.text : y.fieldInfo ? B = `${y.fieldInfo.table}.${y.fieldInfo.column}` : (p = y.actionInfo) != null && p.description ? B = y.actionInfo.description : (f = y.actionInfo) != null && f.type ? (B = { navigate: "画面遷移", api: "API", modal: "モーダル", emit: "イベント", function: "関数", csv_export: "CSV出力", csv_import: "CSV取込", email: "メール送信" }[y.actionInfo.type] || y.actionInfo.type, y.actionInfo.target && (B += ` → ${y.actionInfo.target}`)) : y.formInfo && (B = y.formInfo.label || y.formInfo.inputType || "フォーム"), B || (B = l), { id: l, desc: B, type: y.elementType, isConditional: !!y.isConditional, tabContext: y.tabContext || "", modalName: y.modalName || "", config: y };
      });
    }), me = j(() => {
      const u = a.noteHighlightFilter;
      return u === "all" ? Te.value : Te.value.filter((l) => {
        var f, _, T, ae, K;
        const y = l.config, B = (f = y.note) == null ? void 0 : f.displayType, i = !!((_ = y.note) != null && _.condition || (T = y.note) != null && T.conditionColumn), p = !!((ae = y.note) != null && ae.storedCalc);
        switch (u) {
          case "db":
            return B === "db_direct" || B === "db_formatted";
          case "calculated":
            return B === "calculated";
          case "storedCalc":
            return p;
          case "static":
            return B === "static";
          case "conditional":
            return i;
          case "action":
            return y.elementType === "action";
          case "form":
            return y.elementType === "form";
          case "other":
            return B === "other" || !B && !y.elementType && !!((K = y.note) != null && K.text);
          default:
            return !0;
        }
      });
    }), ce = j(() => me.value.filter((u) => !u.isConditional && !u.tabContext));
    function V(u) {
      let l = u.elements.length;
      for (const y of Object.values(u.children)) l += V(y);
      return l;
    }
    function Pe(u, l) {
      const y = {};
      return u.forEach((B) => {
        const i = B[l];
        if (!i) return;
        const p = i.split(">").map((_) => _.trim()).filter(Boolean);
        let f = y;
        for (let _ = 0; _ < p.length; _++) {
          const T = p[_];
          f[T] || (f[T] = { elements: [], children: {} }), _ === p.length - 1 && f[T].elements.push(B), f = f[T].children;
        }
      }), y;
    }
    const at = j(() => Pe(
      me.value.filter((u) => u.tabContext && !u.isConditional),
      "tabContext"
    )), Ue = j(() => me.value.filter((u) => u.tabContext && !u.isConditional)), Xe = k(!0), fe = k(!1), se = k({}), qe = j(() => me.value.filter((u) => u.isConditional)), H = j(() => me.value.filter((u) => u.isConditional && u.modalName)), S = j(() => Pe(H.value, "modalName")), h = j(() => me.value.filter((u) => u.isConditional && !u.modalName)), F = k(!1), q = k({}), ne = j(() => Object.values(a.elementConfigs).filter((u) => {
      var l, y;
      return !!((l = u.note) != null && l.text || (y = u.note) != null && y.displayType);
    }).length), R = j(() => {
      const u = a.noteHighlightFilter;
      return u === "all" ? ne.value : Object.values(a.elementConfigs).filter((l) => {
        var p, f, _, T, ae, K, nt;
        if (!((p = l.note) != null && p.text || (f = l.note) != null && f.displayType || l.elementType)) return !1;
        const y = (_ = l.note) == null ? void 0 : _.displayType, B = !!((T = l.note) != null && T.condition || (ae = l.note) != null && ae.conditionColumn), i = !!((K = l.note) != null && K.storedCalc);
        switch (u) {
          case "db":
            return y === "db_direct" || y === "db_formatted";
          case "calculated":
            return y === "calculated";
          case "storedCalc":
            return i;
          case "static":
            return y === "static";
          case "conditional":
            return B;
          case "action":
            return l.elementType === "action";
          case "form":
            return l.elementType === "form";
          case "other":
            return y === "other" || !y && !l.elementType && !!((nt = l.note) != null && nt.text);
          default:
            return !0;
        }
      }).length;
    });
    function ee() {
      const u = a.exportConfigs();
      navigator.clipboard.writeText(u), E.value = !1;
    }
    function P() {
      const u = a.exportConfigs(), l = new Blob([u], { type: "application/json" }), y = URL.createObjectURL(l), B = document.createElement("a");
      B.href = y, B.download = "dev-mode-configs.json", B.click(), URL.revokeObjectURL(y), E.value = !1;
    }
    function $() {
      a.downloadAnnotations();
    }
    async function D() {
      try {
        await _o(
          a.currentScreenSpec,
          a.elementConfigs,
          { systemName: "System" }
        );
      } catch (u) {
        console.error("Failed to export xlsx:", u), alert("xlsx export failed. Make sure xlsx package is installed.");
      }
    }
    function $e() {
      try {
        a.importConfigs(oe.value), oe.value = "", ie.value = "", te.value = !1;
      } catch {
        ie.value = "JSONの形式が正しくありません";
      }
    }
    function Q(u) {
      var i;
      const y = (i = u.target.files) == null ? void 0 : i[0];
      if (!y) return;
      const B = new FileReader();
      B.onload = (p) => {
        var f;
        oe.value = (f = p.target) == null ? void 0 : f.result;
      }, B.readAsText(y);
    }
    function We() {
      confirm("すべての要素設定を削除しますか？") && a.clearAllConfigs();
    }
    k("/dev-inspector-analysis.json"), k(!1), k(""), k(0), k(!1);
    const be = [
      { value: "all", label: "すべて" },
      { value: "db", label: "DB" },
      { value: "calculated", label: "計算値" },
      { value: "storedCalc", label: "保存計算値" },
      { value: "static", label: "固定" },
      { value: "conditional", label: "条件付き" },
      { value: "action", label: "アクション" },
      { value: "form", label: "フォーム" },
      { value: "other", label: "その他" }
    ];
    j(() => a.getCurrentPageApis());
    const Ze = j(() => a.brokenAnnotations.length);
    At(() => a.isPanelOpen, (u) => {
      u && a.detectBrokenAnnotations();
    });
    function tt() {
      confirm(`${Ze.value}件の壊れたメモを削除しますか？`) && a.deleteBrokenAnnotations();
    }
    const Ke = k(!1), Re = k(null), N = k({
      table: "",
      column: "",
      name: "",
      columnType: "",
      description: "",
      entries: [],
      transitions: []
    }), Be = j(() => Object.keys(a.masterDefinitions).length), dt = j(() => {
      const u = Object.values(a.masterDefinitions), l = {};
      for (const y of u)
        l[y.table] || (l[y.table] = []), l[y.table].push(y);
      return l;
    });
    function Je(u) {
      if (u) {
        const l = a.getMasterDefinition(u);
        l && (Re.value = u, N.value = {
          table: l.table,
          column: l.column,
          name: l.name,
          columnType: l.columnType || "",
          description: l.description || "",
          entries: [...l.entries.map((y) => ({ ...y }))],
          transitions: l.transitions ? l.transitions.map((y) => ({ ...y })) : []
        });
      } else
        Re.value = null, N.value = {
          table: "",
          column: "",
          name: "",
          columnType: "",
          description: "",
          entries: [{ value: "", label: "" }],
          transitions: []
        };
      Ke.value = !0;
    }
    function ut() {
      const u = N.value;
      if (!u.table || !u.column) return;
      const l = `${u.table}.${u.column}`, y = u.transitions.filter((i) => i.from || i.to || i.trigger), B = {
        id: l,
        table: u.table,
        column: u.column,
        name: u.name || u.column,
        columnType: u.columnType || void 0,
        description: u.description || void 0,
        entries: u.entries.filter((i) => i.value || i.label),
        transitions: y.length > 0 ? y : void 0,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      a.setMasterDefinition(B), Ke.value = !1;
    }
    function rt() {
      N.value.entries.push({ value: "", label: "" });
    }
    function ct(u) {
      N.value.entries.splice(u, 1);
    }
    function ge() {
      N.value.transitions.push({ from: "", to: "", trigger: "" });
    }
    function Ae(u) {
      N.value.transitions.splice(u, 1);
    }
    function De(u) {
      confirm(`マスタ定義「${u}」を削除しますか？`) && a.deleteMasterDefinition(u);
    }
    const ze = k(!1), lt = k(null), G = k({
      name: "",
      schedule: "",
      trigger: "",
      description: "",
      inputTables: [],
      outputTables: [],
      steps: [],
      timeout: "",
      retryPolicy: "",
      notifyOnError: "",
      notifyOnComplete: ""
    }), ot = k(""), wt = k(""), ft = j(() => Object.keys(a.batchDefinitions).length), Qe = j(() => Object.values(a.batchDefinitions));
    function Le(u) {
      if (u) {
        const l = a.getBatchDefinition(u);
        l && (lt.value = u, G.value = {
          name: l.name,
          schedule: l.schedule || "",
          trigger: l.trigger || "",
          description: l.description || "",
          inputTables: l.inputTables ? [...l.inputTables] : [],
          outputTables: l.outputTables ? [...l.outputTables] : [],
          steps: l.steps.map((y) => ({ ...y })),
          timeout: l.timeout || "",
          retryPolicy: l.retryPolicy || "",
          notifyOnError: l.notifyOnError || "",
          notifyOnComplete: l.notifyOnComplete || ""
        });
      } else
        lt.value = null, G.value = {
          name: "",
          schedule: "",
          trigger: "",
          description: "",
          inputTables: [],
          outputTables: [],
          steps: [{ order: 1, description: "" }],
          timeout: "",
          retryPolicy: "",
          notifyOnError: "",
          notifyOnComplete: ""
        };
      ot.value = "", wt.value = "", ze.value = !0;
    }
    function et() {
      const u = G.value;
      if (!u.name) return;
      const y = {
        id: lt.value || `batch_${u.name.replace(/\s+/g, "_").toLowerCase()}_${Date.now()}`,
        name: u.name,
        schedule: u.schedule || void 0,
        trigger: u.trigger || void 0,
        description: u.description || void 0,
        inputTables: u.inputTables.length > 0 ? u.inputTables : void 0,
        outputTables: u.outputTables.length > 0 ? u.outputTables : void 0,
        steps: u.steps.filter((B) => B.description).map((B, i) => ({ ...B, order: i + 1 })),
        timeout: u.timeout || void 0,
        retryPolicy: u.retryPolicy || void 0,
        notifyOnError: u.notifyOnError || void 0,
        notifyOnComplete: u.notifyOnComplete || void 0,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      a.setBatchDefinition(y), ze.value = !1;
    }
    function It() {
      const u = G.value.steps.length + 1;
      G.value.steps.push({ order: u, description: "" });
    }
    function Z(u) {
      G.value.steps.splice(u, 1);
    }
    function Me(u) {
      var l;
      confirm(`バッチ定義「${((l = a.getBatchDefinition(u)) == null ? void 0 : l.name) || u}」を削除しますか？`) && a.deleteBatchDefinition(u);
    }
    function he() {
      const u = ot.value.trim();
      u && !G.value.inputTables.includes(u) && G.value.inputTables.push(u), ot.value = "";
    }
    function Oe(u) {
      G.value.inputTables.splice(u, 1);
    }
    function vt() {
      const u = wt.value.trim();
      u && !G.value.outputTables.includes(u) && G.value.outputTables.push(u), wt.value = "";
    }
    function bt(u) {
      G.value.outputTables.splice(u, 1);
    }
    const gt = [
      { value: "column", label: "カラム", placeholder: "users.email, orders..." },
      { value: "api", label: "API", placeholder: "GET /api/users..." },
      { value: "text", label: "テキスト", placeholder: "メモ、説明文で検索..." }
    ], Ge = j(() => {
      var u;
      return ((u = gt.find((l) => l.value === a.crossSearchMode)) == null ? void 0 : u.placeholder) || "検索...";
    }), Ce = j(() => {
      const u = {};
      for (const l of a.crossSearchResults)
        u[l.pagePath] || (u[l.pagePath] = { pagePath: l.pagePath, pageName: l.pageName, items: [] }), u[l.pagePath].items.push(l);
      return Object.values(u);
    }), Tt = j(() => Ce.value.length), st = j(() => {
      const u = a.unannotatedElements;
      return {
        binding: u.filter((l) => l.category === "binding").length,
        form: u.filter((l) => l.category === "form").length,
        action: u.filter((l) => l.category === "action").length
      };
    });
    function $t() {
      a.showUnannotatedDetection ? (a.showUnannotatedDetection = !1, a.unannotatedElements = [], a.hoveredUnannotatedSelector = null) : (a.showUnannotatedDetection = !0, a.detectUnannotatedElements());
    }
    function Ct(u) {
      a.unannotatedElements = a.unannotatedElements.filter((l) => l.selector !== u);
    }
    function ht(u) {
      a.hoveredUnannotatedSelector = u;
      try {
        const l = document.querySelector(u);
        if (!l) return;
        const y = l.getBoundingClientRect();
        (y.bottom < 0 || y.top > window.innerHeight) && l.scrollIntoView({ behavior: "smooth", block: "center" });
      } catch {
      }
    }
    function kt() {
      a.hoveredUnannotatedSelector = null;
    }
    function xe(u) {
      a.hoveredSelector = u;
      try {
        const l = document.querySelector(u);
        if (!l) return;
        const y = l.getBoundingClientRect();
        (y.bottom < 0 || y.top > window.innerHeight) && l.scrollIntoView({ behavior: "smooth", block: "center" });
      } catch {
      }
    }
    function d() {
      a.hoveredSelector = null;
    }
    const ve = k(null), de = k(null);
    function J(u, l) {
      ve.value = l, u.dataTransfer && (u.dataTransfer.effectAllowed = "move", u.dataTransfer.setData("text/plain", l));
    }
    function ue() {
      ve.value = null, de.value = null;
    }
    function Ve(u, l) {
      u.preventDefault(), u.dataTransfer && (u.dataTransfer.dropEffect = "move"), de.value = l;
    }
    function Ee(u, l) {
      const y = u.relatedTarget, B = u.currentTarget;
      B && y && B.contains(y) || de.value === l && (de.value = null);
    }
    function Ye(u, l) {
      u.preventDefault(), de.value = null;
      const y = ve.value;
      if (ve.value = null, !(!y || !a.elementConfigs[y])) {
        if (l === "__page__")
          a.setElementConfig(y, { tabContext: void 0, modalName: void 0, isConditional: !1 });
        else if (l.startsWith("tab:")) {
          const i = l.slice(4);
          a.setElementConfig(y, { tabContext: i, modalName: void 0, isConditional: !1 });
        } else if (l === "__modal_unnamed__")
          a.setElementConfig(y, { isConditional: !0, modalName: void 0, tabContext: void 0 });
        else if (l.startsWith("modal:")) {
          const i = l.slice(6);
          a.setElementConfig(y, { isConditional: !0, modalName: i, tabContext: void 0 });
        }
      }
    }
    const Ne = k(null), ye = k("");
    function re(u, l, y) {
      y.stopPropagation(), Ne.value = u, ye.value = l;
    }
    function Fe(u) {
      const l = ye.value.trim();
      if (Ne.value = null, !!l) {
        if (u.startsWith("tab:")) {
          const y = u.slice(4), B = y.split(" > ");
          B[B.length - 1] = l;
          const i = B.join(" > ");
          if (y === i) return;
          for (const [_, T] of Object.entries(a.elementConfigs))
            T.tabContext && (T.tabContext === y ? a.setElementConfig(_, { tabContext: i }) : T.tabContext.startsWith(y + " > ") && a.setElementConfig(_, { tabContext: i + T.tabContext.slice(y.length) }));
          const p = y.replace(/ > /g, ">"), f = i.replace(/ > /g, ">");
          se.value[p] !== void 0 && (se.value[f] = se.value[p], delete se.value[p]);
        } else if (u.startsWith("modal:")) {
          const y = u.slice(6), B = y.split(" > ");
          B[B.length - 1] = l;
          const i = B.join(" > ");
          if (y === i) return;
          for (const [_, T] of Object.entries(a.elementConfigs))
            T.modalName && (T.modalName === y ? a.setElementConfig(_, { modalName: i }) : T.modalName.startsWith(y + " > ") && a.setElementConfig(_, { modalName: i + T.modalName.slice(y.length) }));
          const p = y.replace(/ > /g, ">"), f = i.replace(/ > /g, ">");
          q.value[p] !== void 0 && (q.value[f] = q.value[p], delete q.value[p]);
        }
      }
    }
    function yt() {
      Ne.value = null, ye.value = "";
    }
    function mt(u, l) {
      u.key === "Enter" ? Fe(l) : u.key === "Escape" && yt();
    }
    const L = j(() => typeof window < "u" ? window.location.pathname : "/"), je = j(() => {
      const u = a.screenFlowData, l = {};
      for (const y of u.edges) {
        if (!l[y.from]) {
          const B = u.nodes.find((i) => i.path === y.from) || { path: y.from, name: y.from, annotationCount: 0 };
          l[y.from] = { node: B, edges: [] };
        }
        l[y.from].edges.push(y);
      }
      return Object.values(l);
    });
    function _e(u) {
      u && a.startEditing(u);
    }
    return (u, l) => {
      var y, B;
      return s(), n(I, null, [
        (s(), pt(_t, { to: "body" }, [
          r(a).isEnabled && !r(a).isPanelOpen ? (s(), n("button", {
            key: 0,
            onClick: l[0] || (l[0] = //@ts-ignore
            (...i) => r(a).openPanel && r(a).openPanel(...i)),
            class: "di-fab",
            title: "画面仕様を表示",
            "data-dev-inspector": ""
          }, [
            C(r(Rt), { style: { width: "20px", height: "20px" } })
          ])) : v("", !0)
        ])),
        (s(), pt(_t, { to: "body" }, [
          r(a).isEnabled && r(a).isPanelOpen ? (s(), n("div", Io, [
            e("div", To, [
              e("div", So, [
                C(r(pl), { style: { width: "20px", height: "20px", color: "#60a5fa" } }),
                l[67] || (l[67] = e("span", null, "Developer Mode", -1))
              ]),
              e("button", {
                onClick: l[1] || (l[1] = //@ts-ignore
                (...i) => r(a).closePanel && r(a).closePanel(...i)),
                class: "di-close-btn"
              }, [
                C(r(xt), { style: { width: "20px", height: "20px" } })
              ])
            ]),
            e("div", Uo, [
              e("button", {
                onClick: l[2] || (l[2] = (i) => U.value = "elements"),
                class: A(["di-tab-btn", { active: U.value === "elements" }])
              }, [
                C(r(bl), { style: { width: "14px", height: "14px" } }),
                l[68] || (l[68] = e("span", null, "要素設定", -1)),
                pe.value > 0 ? (s(), n("span", Do, c(pe.value), 1)) : v("", !0)
              ], 2),
              e("button", {
                onClick: l[3] || (l[3] = (i) => U.value = "masters"),
                class: A(["di-tab-btn", { active: U.value === "masters" }])
              }, [
                C(r(Ut), { style: { width: "14px", height: "14px" } }),
                l[69] || (l[69] = e("span", null, "マスタ", -1)),
                Be.value > 0 ? (s(), n("span", Mo, c(Be.value), 1)) : v("", !0)
              ], 2),
              e("button", {
                onClick: l[4] || (l[4] = (i) => U.value = "batches"),
                class: A(["di-tab-btn", { active: U.value === "batches" }])
              }, [
                C(r(vl), { style: { width: "14px", height: "14px" } }),
                l[70] || (l[70] = e("span", null, "バッチ", -1)),
                ft.value > 0 ? (s(), n("span", Vo, c(ft.value), 1)) : v("", !0)
              ], 2),
              e("button", {
                onClick: l[5] || (l[5] = (i) => U.value = "export"),
                class: A(["di-tab-btn", { active: U.value === "export" }])
              }, [
                C(r(Xt), { style: { width: "14px", height: "14px" } }),
                l[71] || (l[71] = e("span", null, "出力", -1))
              ], 2)
            ]),
            b(e("div", Eo, [
              e("button", {
                onClick: l[6] || (l[6] = //@ts-ignore
                (...i) => r(a).togglePickMode && r(a).togglePickMode(...i)),
                class: A(["di-pick-btn", { active: r(a).isPickMode }])
              }, [
                C(r(fl), { style: { width: "16px", height: "16px" } }),
                e("span", null, c(r(a).isPickMode ? "要素選択中..." : "任意の要素にメモを追加"), 1)
              ], 2),
              ne.value > 0 ? (s(), n("button", {
                key: 0,
                onClick: l[7] || (l[7] = //@ts-ignore
                (...i) => r(a).toggleNoteHighlights && r(a).toggleNoteHighlights(...i)),
                class: A(["di-note-toggle-btn", { active: r(a).showNoteHighlights }])
              }, [
                r(a).showNoteHighlights ? (s(), pt(r(co), {
                  key: 0,
                  style: { width: "14px", height: "14px" }
                })) : (s(), pt(r(ro), {
                  key: 1,
                  style: { width: "14px", height: "14px" }
                })),
                l[72] || (l[72] = e("span", null, "メモハイライト", -1)),
                e("span", Po, c(r(a).noteHighlightFilter === "all" ? ne.value : `${R.value}/${ne.value}`), 1)
              ], 2)) : v("", !0),
              ne.value > 0 && r(a).showNoteHighlights ? (s(), n("div", Bo, [
                e("div", Ao, [
                  (s(), n(I, null, M(be, (i) => e("button", {
                    key: i.value,
                    onClick: (p) => r(a).noteHighlightFilter = i.value,
                    class: A(["di-filter-btn", { active: r(a).noteHighlightFilter === i.value }])
                  }, c(i.label), 11, Lo)), 64))
                ])
              ])) : v("", !0),
              Te.value.length > 0 ? (s(), n("div", Oo, [
                e("div", Fo, [
                  C(r(bl), { style: { width: "14px", height: "14px", color: "#94a3b8" } }),
                  l[73] || (l[73] = e("span", null, "登録済み要素", -1)),
                  e("span", jo, [
                    O(c(me.value.length), 1),
                    me.value.length !== Te.value.length ? (s(), n("span", Ho, " / " + c(Te.value.length), 1)) : v("", !0)
                  ])
                ]),
                e("div", qo, [
                  ce.value.length > 0 || de.value === "__page__" ? (s(), n("div", Ro, [
                    e("button", {
                      class: A(["di-tree-group-header", { "di-drop-target": de.value === "__page__" }]),
                      onClick: l[8] || (l[8] = (i) => Xe.value = !Xe.value),
                      onDragover: l[9] || (l[9] = (i) => Ve(i, "__page__")),
                      onDragleave: l[10] || (l[10] = (i) => Ee(i, "__page__")),
                      onDrop: l[11] || (l[11] = (i) => Ye(i, "__page__"))
                    }, [
                      e("span", zo, c(Xe.value ? "▼" : "▶"), 1),
                      l[74] || (l[74] = e("span", null, "タブ外", -1)),
                      e("span", Ko, c(ce.value.length), 1)
                    ], 34),
                    Xe.value ? (s(), n("div", Go, [
                      (s(!0), n(I, null, M(ce.value, (i) => (s(), n("div", {
                        key: i.id,
                        class: A(["di-element-item", { "di-element-item-active": r(a).hoveredSelector === i.id, "di-dragging": ve.value === i.id }]),
                        draggable: "true",
                        onDragstart: (p) => J(p, i.id),
                        onDragend: ue,
                        onClick: (p) => r(a).startEditing(i.id),
                        onMouseenter: (p) => xe(i.id),
                        onMouseleave: d
                      }, [
                        e("span", {
                          class: A(["di-element-type-badge", "di-element-type-" + (i.type || "other")])
                        }, c(i.type === "datasource" ? "DB" : i.type === "action" ? "Act" : i.type === "form" ? "Form" : "-"), 3),
                        e("div", Xo, [
                          e("div", Wo, c(i.desc), 1)
                        ])
                      ], 42, Yo))), 128))
                    ])) : v("", !0)
                  ])) : v("", !0),
                  Ue.value.length > 0 || ve.value && !((y = de.value) != null && y.startsWith("modal:")) && de.value !== "__modal_unnamed__" ? (s(), n("div", Zo, [
                    e("button", {
                      class: "di-tree-group-header",
                      onClick: l[12] || (l[12] = (i) => fe.value = !fe.value)
                    }, [
                      e("span", Jo, c(fe.value ? "▼" : "▶"), 1),
                      l[75] || (l[75] = e("span", null, "タブ内", -1)),
                      e("span", Qo, c(Ue.value.length), 1)
                    ]),
                    fe.value ? (s(), n("div", No, [
                      (s(!0), n(I, null, M(at.value, (i, p) => (s(), n("div", {
                        key: "t1-" + p,
                        class: "di-tree-subgroup"
                      }, [
                        Ne.value === "tab:" + p ? (s(), n("div", es, [
                          l[76] || (l[76] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                          b(e("input", {
                            class: "di-rename-input",
                            "onUpdate:modelValue": l[13] || (l[13] = (f) => ye.value = f),
                            onKeydown: (f) => mt(f, "tab:" + p),
                            onBlur: (f) => Fe("tab:" + p),
                            ref_for: !0,
                            ref: "renameInputRef",
                            autofocus: ""
                          }, null, 40, ts), [
                            [x, ye.value]
                          ])
                        ])) : (s(), n("button", {
                          key: 1,
                          class: A(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": de.value === "tab:" + p }]),
                          onClick: (f) => se.value[p] = !se.value[p],
                          onDragover: (f) => Ve(f, "tab:" + p),
                          onDragleave: (f) => Ee(f, "tab:" + p),
                          onDrop: (f) => Ye(f, "tab:" + p)
                        }, [
                          e("span", os, c(se.value[p] ? "▼" : "▶"), 1),
                          l[77] || (l[77] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                          e("span", null, c(p), 1),
                          e("span", ss, c(V(i)), 1),
                          e("span", {
                            class: "di-rename-btn",
                            onClick: (f) => re("tab:" + p, String(p), f),
                            title: "名前変更"
                          }, "✏", 8, ns)
                        ], 42, ls)),
                        se.value[p] ? (s(), n("div", is, [
                          i.elements.length > 0 ? (s(), n("div", as, [
                            (s(!0), n(I, null, M(i.elements, (f) => (s(), n("div", {
                              key: f.id,
                              class: A(["di-element-item", { "di-element-item-active": r(a).hoveredSelector === f.id, "di-dragging": ve.value === f.id }]),
                              draggable: "true",
                              onDragstart: (_) => J(_, f.id),
                              onDragend: ue,
                              onClick: (_) => r(a).startEditing(f.id),
                              onMouseenter: (_) => xe(f.id),
                              onMouseleave: d
                            }, [
                              e("span", {
                                class: A(["di-element-type-badge", "di-element-type-" + (f.type || "other")])
                              }, c(f.type === "datasource" ? "DB" : f.type === "action" ? "Act" : f.type === "form" ? "Form" : "-"), 3),
                              e("div", us, [
                                e("div", rs, c(f.desc), 1)
                              ])
                            ], 42, ds))), 128))
                          ])) : v("", !0),
                          Object.keys(i.children).length > 0 ? (s(), n("div", cs, [
                            (s(!0), n(I, null, M(i.children, (f, _) => (s(), n("div", {
                              key: "t2-" + _,
                              class: "di-tree-subgroup"
                            }, [
                              Ne.value === "tab:" + p + " > " + _ ? (s(), n("div", vs, [
                                l[78] || (l[78] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                                b(e("input", {
                                  class: "di-rename-input",
                                  "onUpdate:modelValue": l[14] || (l[14] = (T) => ye.value = T),
                                  onKeydown: (T) => mt(T, "tab:" + p + " > " + _),
                                  onBlur: (T) => Fe("tab:" + p + " > " + _),
                                  autofocus: ""
                                }, null, 40, ps), [
                                  [x, ye.value]
                                ])
                              ])) : (s(), n("button", {
                                key: 1,
                                class: A(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": de.value === "tab:" + p + " > " + _ }]),
                                onClick: (T) => se.value[p + ">" + _] = !se.value[p + ">" + _],
                                onDragover: (T) => Ve(T, "tab:" + p + " > " + _),
                                onDragleave: (T) => Ee(T, "tab:" + p + " > " + _),
                                onDrop: (T) => Ye(T, "tab:" + p + " > " + _)
                              }, [
                                e("span", fs, c(se.value[p + ">" + _] ? "▼" : "▶"), 1),
                                l[79] || (l[79] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                                e("span", null, c(_), 1),
                                e("span", bs, c(V(f)), 1),
                                e("span", {
                                  class: "di-rename-btn",
                                  onClick: (T) => re("tab:" + p + " > " + _, String(_), T),
                                  title: "名前変更"
                                }, "✏", 8, hs)
                              ], 42, ms)),
                              se.value[p + ">" + _] ? (s(), n("div", ys, [
                                f.elements.length > 0 ? (s(), n("div", gs, [
                                  (s(!0), n(I, null, M(f.elements, (T) => (s(), n("div", {
                                    key: T.id,
                                    class: A(["di-element-item", { "di-element-item-active": r(a).hoveredSelector === T.id, "di-dragging": ve.value === T.id }]),
                                    draggable: "true",
                                    onDragstart: (ae) => J(ae, T.id),
                                    onDragend: ue,
                                    onClick: (ae) => r(a).startEditing(T.id),
                                    onMouseenter: (ae) => xe(T.id),
                                    onMouseleave: d
                                  }, [
                                    e("span", {
                                      class: A(["di-element-type-badge", "di-element-type-" + (T.type || "other")])
                                    }, c(T.type === "datasource" ? "DB" : T.type === "action" ? "Act" : T.type === "form" ? "Form" : "-"), 3),
                                    e("div", xs, [
                                      e("div", ws, c(T.desc), 1)
                                    ])
                                  ], 42, ks))), 128))
                                ])) : v("", !0),
                                Object.keys(f.children).length > 0 ? (s(), n("div", $s, [
                                  (s(!0), n(I, null, M(f.children, (T, ae) => (s(), n("div", {
                                    key: "t3-" + ae,
                                    class: "di-tree-subgroup"
                                  }, [
                                    Ne.value === "tab:" + p + " > " + _ + " > " + ae ? (s(), n("div", Cs, [
                                      l[80] || (l[80] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                                      b(e("input", {
                                        class: "di-rename-input",
                                        "onUpdate:modelValue": l[15] || (l[15] = (K) => ye.value = K),
                                        onKeydown: (K) => mt(K, "tab:" + p + " > " + _ + " > " + ae),
                                        onBlur: (K) => Fe("tab:" + p + " > " + _ + " > " + ae),
                                        autofocus: ""
                                      }, null, 40, _s), [
                                        [x, ye.value]
                                      ])
                                    ])) : (s(), n("button", {
                                      key: 1,
                                      class: A(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": de.value === "tab:" + p + " > " + _ + " > " + ae }]),
                                      onClick: (K) => se.value[p + ">" + _ + ">" + ae] = !se.value[p + ">" + _ + ">" + ae],
                                      onDragover: (K) => Ve(K, "tab:" + p + " > " + _ + " > " + ae),
                                      onDragleave: (K) => Ee(K, "tab:" + p + " > " + _ + " > " + ae),
                                      onDrop: (K) => Ye(K, "tab:" + p + " > " + _ + " > " + ae)
                                    }, [
                                      e("span", Ts, c(se.value[p + ">" + _ + ">" + ae] ? "▼" : "▶"), 1),
                                      l[81] || (l[81] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                                      e("span", null, c(ae), 1),
                                      e("span", Ss, c(V(T)), 1),
                                      e("span", {
                                        class: "di-rename-btn",
                                        onClick: (K) => re("tab:" + p + " > " + _ + " > " + ae, String(ae), K),
                                        title: "名前変更"
                                      }, "✏", 8, Us)
                                    ], 42, Is)),
                                    se.value[p + ">" + _ + ">" + ae] ? (s(), n("div", Ds, [
                                      T.elements.length > 0 ? (s(), n("div", Ms, [
                                        (s(!0), n(I, null, M(T.elements, (K) => (s(), n("div", {
                                          key: K.id,
                                          class: A(["di-element-item", { "di-element-item-active": r(a).hoveredSelector === K.id, "di-dragging": ve.value === K.id }]),
                                          draggable: "true",
                                          onDragstart: (nt) => J(nt, K.id),
                                          onDragend: ue,
                                          onClick: (nt) => r(a).startEditing(K.id),
                                          onMouseenter: (nt) => xe(K.id),
                                          onMouseleave: d
                                        }, [
                                          e("span", {
                                            class: A(["di-element-type-badge", "di-element-type-" + (K.type || "other")])
                                          }, c(K.type === "datasource" ? "DB" : K.type === "action" ? "Act" : K.type === "form" ? "Form" : "-"), 3),
                                          e("div", Es, [
                                            e("div", Ps, c(K.desc), 1)
                                          ])
                                        ], 42, Vs))), 128))
                                      ])) : v("", !0)
                                    ])) : v("", !0)
                                  ]))), 128))
                                ])) : v("", !0)
                              ])) : v("", !0)
                            ]))), 128))
                          ])) : v("", !0)
                        ])) : v("", !0)
                      ]))), 128))
                    ])) : v("", !0)
                  ])) : v("", !0),
                  qe.value.length > 0 || ve.value && ((B = de.value) != null && B.startsWith("modal:") || de.value === "__modal_unnamed__") ? (s(), n("div", Bs, [
                    e("button", {
                      class: "di-tree-group-header",
                      onClick: l[16] || (l[16] = (i) => F.value = !F.value)
                    }, [
                      e("span", As, c(F.value ? "▼" : "▶"), 1),
                      l[82] || (l[82] = e("span", null, "モーダル", -1)),
                      e("span", Ls, c(qe.value.length), 1)
                    ]),
                    F.value ? (s(), n("div", Os, [
                      (s(!0), n(I, null, M(S.value, (i, p) => (s(), n("div", {
                        key: "m1-" + p,
                        class: "di-tree-subgroup"
                      }, [
                        Ne.value === "modal:" + p ? (s(), n("div", Fs, [
                          l[83] || (l[83] = e("span", { class: "di-tree-badge di-tree-badge-modal" }, "M", -1)),
                          b(e("input", {
                            class: "di-rename-input",
                            "onUpdate:modelValue": l[17] || (l[17] = (f) => ye.value = f),
                            onKeydown: (f) => mt(f, "modal:" + p),
                            onBlur: (f) => Fe("modal:" + p),
                            autofocus: ""
                          }, null, 40, js), [
                            [x, ye.value]
                          ])
                        ])) : (s(), n("button", {
                          key: 1,
                          class: A(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": de.value === "modal:" + p }]),
                          onClick: (f) => q.value[String(p)] = !q.value[String(p)],
                          onDragover: (f) => Ve(f, "modal:" + p),
                          onDragleave: (f) => Ee(f, "modal:" + p),
                          onDrop: (f) => Ye(f, "modal:" + p)
                        }, [
                          e("span", qs, c(q.value[String(p)] ? "▼" : "▶"), 1),
                          l[84] || (l[84] = e("span", { class: "di-tree-badge di-tree-badge-modal" }, "M", -1)),
                          e("span", null, c(p), 1),
                          e("span", Rs, c(V(i)), 1),
                          e("span", {
                            class: "di-rename-btn",
                            onClick: (f) => re("modal:" + p, String(p), f),
                            title: "名前変更"
                          }, "✏", 8, zs)
                        ], 42, Hs)),
                        q.value[String(p)] ? (s(), n("div", Ks, [
                          i.elements.length > 0 ? (s(), n("div", Gs, [
                            (s(!0), n(I, null, M(i.elements, (f) => (s(), n("div", {
                              key: f.id,
                              class: A(["di-element-item", { "di-element-item-active": r(a).hoveredSelector === f.id, "di-dragging": ve.value === f.id }]),
                              draggable: "true",
                              onDragstart: (_) => J(_, f.id),
                              onDragend: ue,
                              onClick: (_) => r(a).startEditing(f.id),
                              onMouseenter: (_) => xe(f.id),
                              onMouseleave: d
                            }, [
                              e("span", {
                                class: A(["di-element-type-badge", "di-element-type-" + (f.type || "other")])
                              }, c(f.type === "datasource" ? "DB" : f.type === "action" ? "Act" : f.type === "form" ? "Form" : "-"), 3),
                              e("div", Xs, [
                                e("div", Ws, c(f.desc), 1)
                              ])
                            ], 42, Ys))), 128))
                          ])) : v("", !0),
                          Object.keys(i.children).length > 0 ? (s(), n("div", Zs, [
                            (s(!0), n(I, null, M(i.children, (f, _) => (s(), n("div", {
                              key: "m2-" + _,
                              class: "di-tree-subgroup"
                            }, [
                              Ne.value === "modal:" + p + " > " + _ ? (s(), n("div", Js, [
                                l[85] || (l[85] = e("span", { class: "di-tree-badge di-tree-badge-modal" }, "M", -1)),
                                b(e("input", {
                                  class: "di-rename-input",
                                  "onUpdate:modelValue": l[18] || (l[18] = (T) => ye.value = T),
                                  onKeydown: (T) => mt(T, "modal:" + p + " > " + _),
                                  onBlur: (T) => Fe("modal:" + p + " > " + _),
                                  autofocus: ""
                                }, null, 40, Qs), [
                                  [x, ye.value]
                                ])
                              ])) : (s(), n("button", {
                                key: 1,
                                class: A(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": de.value === "modal:" + p + " > " + _ }]),
                                onClick: (T) => q.value[p + ">" + _] = !q.value[p + ">" + _],
                                onDragover: (T) => Ve(T, "modal:" + p + " > " + _),
                                onDragleave: (T) => Ee(T, "modal:" + p + " > " + _),
                                onDrop: (T) => Ye(T, "modal:" + p + " > " + _)
                              }, [
                                e("span", en, c(q.value[p + ">" + _] ? "▼" : "▶"), 1),
                                l[86] || (l[86] = e("span", { class: "di-tree-badge di-tree-badge-modal" }, "M", -1)),
                                e("span", null, c(_), 1),
                                e("span", tn, c(V(f)), 1),
                                e("span", {
                                  class: "di-rename-btn",
                                  onClick: (T) => re("modal:" + p + " > " + _, String(_), T),
                                  title: "名前変更"
                                }, "✏", 8, ln)
                              ], 42, Ns)),
                              q.value[p + ">" + _] ? (s(), n("div", on, [
                                f.elements.length > 0 ? (s(), n("div", sn, [
                                  (s(!0), n(I, null, M(f.elements, (T) => (s(), n("div", {
                                    key: T.id,
                                    class: A(["di-element-item", { "di-element-item-active": r(a).hoveredSelector === T.id, "di-dragging": ve.value === T.id }]),
                                    draggable: "true",
                                    onDragstart: (ae) => J(ae, T.id),
                                    onDragend: ue,
                                    onClick: (ae) => r(a).startEditing(T.id),
                                    onMouseenter: (ae) => xe(T.id),
                                    onMouseleave: d
                                  }, [
                                    e("span", {
                                      class: A(["di-element-type-badge", "di-element-type-" + (T.type || "other")])
                                    }, c(T.type === "datasource" ? "DB" : T.type === "action" ? "Act" : T.type === "form" ? "Form" : "-"), 3),
                                    e("div", an, [
                                      e("div", dn, c(T.desc), 1)
                                    ])
                                  ], 42, nn))), 128))
                                ])) : v("", !0)
                              ])) : v("", !0)
                            ]))), 128))
                          ])) : v("", !0)
                        ])) : v("", !0)
                      ]))), 128)),
                      h.value.length > 0 || de.value === "__modal_unnamed__" ? (s(), n("div", un, [
                        e("button", {
                          class: A(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": de.value === "__modal_unnamed__" }]),
                          onClick: l[19] || (l[19] = (i) => q.value.__unnamed = !q.value.__unnamed),
                          onDragover: l[20] || (l[20] = (i) => Ve(i, "__modal_unnamed__")),
                          onDragleave: l[21] || (l[21] = (i) => Ee(i, "__modal_unnamed__")),
                          onDrop: l[22] || (l[22] = (i) => Ye(i, "__modal_unnamed__"))
                        }, [
                          e("span", rn, c(q.value.__unnamed ? "▼" : "▶"), 1),
                          l[87] || (l[87] = e("span", { class: "di-tree-badge di-tree-badge-modal" }, "M", -1)),
                          l[88] || (l[88] = e("span", null, "未分類", -1)),
                          e("span", cn, c(h.value.length), 1)
                        ], 34),
                        q.value.__unnamed ? (s(), n("div", vn, [
                          (s(!0), n(I, null, M(h.value, (i) => (s(), n("div", {
                            key: i.id,
                            class: A(["di-element-item", { "di-element-item-active": r(a).hoveredSelector === i.id, "di-dragging": ve.value === i.id }]),
                            draggable: "true",
                            onDragstart: (p) => J(p, i.id),
                            onDragend: ue,
                            onClick: (p) => r(a).startEditing(i.id),
                            onMouseenter: (p) => xe(i.id),
                            onMouseleave: d
                          }, [
                            e("span", {
                              class: A(["di-element-type-badge", "di-element-type-" + (i.type || "other")])
                            }, c(i.type === "datasource" ? "DB" : i.type === "action" ? "Act" : i.type === "form" ? "Form" : "-"), 3),
                            e("div", mn, [
                              e("div", fn, c(i.desc), 1)
                            ])
                          ], 42, pn))), 128))
                        ])) : v("", !0)
                      ])) : v("", !0)
                    ])) : v("", !0)
                  ])) : v("", !0)
                ])
              ])) : v("", !0),
              e("button", {
                onClick: $t,
                class: A(["di-unannotated-btn", { active: r(a).showUnannotatedDetection }])
              }, [
                C(r(ao), { style: { width: "14px", height: "14px" } }),
                e("span", null, c(r(a).showUnannotatedDetection ? "未登録検出 ON" : "未登録要素を検出"), 1),
                r(a).unannotatedElements.length > 0 ? (s(), n("span", bn, c(r(a).unannotatedElements.length), 1)) : v("", !0)
              ], 2),
              r(a).showUnannotatedDetection && r(a).unannotatedElements.length > 0 ? (s(), n("div", hn, [
                e("div", yn, [
                  O(c(r(a).unannotatedElements.length) + "件検出: ", 1),
                  st.value.binding > 0 ? (s(), n("span", gn, "バインディング " + c(st.value.binding), 1)) : v("", !0),
                  st.value.form > 0 ? (s(), n("span", kn, " / フォーム " + c(st.value.form), 1)) : v("", !0),
                  st.value.action > 0 ? (s(), n("span", xn, " / アクション " + c(st.value.action), 1)) : v("", !0)
                ]),
                e("div", wn, [
                  (s(!0), n(I, null, M(r(a).unannotatedElements, (i) => (s(), n("div", {
                    key: i.selector,
                    class: A(["di-unannotated-item", { "di-unannotated-item-active": r(a).hoveredUnannotatedSelector === i.selector, ["di-unannotated-item-" + i.category]: r(a).hoveredUnannotatedSelector === i.selector }]),
                    onMouseenter: (p) => ht(i.selector),
                    onMouseleave: kt
                  }, [
                    e("span", {
                      class: A(["di-unannotated-category", "di-unannotated-cat-" + i.category])
                    }, c(i.category === "binding" ? "DB" : i.category === "form" ? "Form" : "Act"), 3),
                    e("span", Cn, c(i.text || i.tagName), 1),
                    e("button", {
                      onClick: (p) => r(a).quickAnnotate(i.selector, i.suggestedType),
                      class: "di-unannotated-register"
                    }, " 登録 ", 8, _n),
                    e("button", {
                      onClick: (p) => Ct(i.selector),
                      class: "di-unannotated-dismiss"
                    }, [
                      C(r(xt), { style: { width: "10px", height: "10px" } })
                    ], 8, In)
                  ], 42, $n))), 128))
                ])
              ])) : v("", !0),
              r(a).showUnannotatedDetection && r(a).unannotatedElements.length === 0 ? (s(), n("div", Tn, " 未登録の要素はありません ")) : v("", !0),
              Ze.value > 0 ? (s(), n("div", Sn, [
                e("div", Un, [
                  C(r(oo), { style: { width: "14px", height: "14px", color: "#f59e0b" } }),
                  e("span", null, c(Ze.value) + "件のメモが見つかりません", 1)
                ]),
                l[91] || (l[91] = e("div", { class: "di-broken-desc" }, "コード変更によりセレクタが壊れた可能性があります", -1)),
                e("div", Dn, [
                  (s(!0), n(I, null, M(r(a).brokenAnnotations, (i) => {
                    var p, f;
                    return s(), n("div", {
                      key: i,
                      class: "di-broken-item"
                    }, [
                      e("div", Mn, [
                        e("div", Vn, c(((f = (p = r(a).elementConfigs[i]) == null ? void 0 : p.note) == null ? void 0 : f.text) || "(メモなし)"), 1),
                        e("div", En, c(i), 1)
                      ]),
                      e("div", Pn, [
                        e("button", {
                          onClick: (_) => r(a).startRemap(i),
                          class: "di-broken-remap-btn",
                          title: "新しい要素に再設定"
                        }, [
                          C(r(fl), { style: { width: "12px", height: "12px" } }),
                          l[89] || (l[89] = O(" 再設定 ", -1))
                        ], 8, Bn),
                        e("button", {
                          onClick: (_) => {
                            r(a).deleteElementConfig(i), r(a).detectBrokenAnnotations();
                          },
                          class: "di-broken-item-delete",
                          title: "削除"
                        }, [
                          C(r(Bt), { style: { width: "12px", height: "12px" } })
                        ], 8, An)
                      ])
                    ]);
                  }), 128))
                ]),
                e("div", Ln, [
                  e("button", {
                    onClick: tt,
                    class: "di-broken-delete-btn"
                  }, [
                    C(r(Bt), { style: { width: "12px", height: "12px" } }),
                    l[90] || (l[90] = O(" まとめて削除 ", -1))
                  ])
                ])
              ])) : v("", !0),
              v("", !0)
            ], 512), [
              [Mt, U.value === "elements"]
            ]),
            e("div", On, [
              b(e("div", null, [
                le.value ? (s(), n(I, { key: 0 }, [
                  e("div", Fn, [
                    e("div", jn, [
                      e("h2", Hn, c(le.value.name), 1),
                      e("button", {
                        onClick: l[25] || (l[25] = (i) => r(a).editingScreen = !0),
                        class: "di-screen-edit-btn",
                        title: "画面情報を編集"
                      }, [
                        C(r(hl), { style: { width: "14px", height: "14px" } })
                      ])
                    ]),
                    le.value.description ? (s(), n("p", qn, c(le.value.description), 1)) : v("", !0),
                    le.value.auth ? (s(), n("div", Rn, [
                      le.value.auth.required ? (s(), n("span", zn, [
                        C(r(fo), { style: { width: "11px", height: "11px" } }),
                        l[101] || (l[101] = O(" ログイン必須 ", -1))
                      ])) : v("", !0),
                      (s(!0), n(I, null, M(le.value.auth.roles || [], (i) => (s(), n("span", {
                        key: i,
                        class: "di-auth-badge di-auth-role"
                      }, [
                        C(r(xo), { style: { width: "11px", height: "11px" } }),
                        O(" " + c(i), 1)
                      ]))), 128)),
                      le.value.auth.description ? (s(), n("span", Kn, c(le.value.auth.description), 1)) : v("", !0)
                    ])) : v("", !0)
                  ]),
                  le.value.componentPath ? (s(), n("div", Gn, [
                    e("div", Yn, [
                      C(r(pl), { style: { width: "16px", height: "16px" } }),
                      l[102] || (l[102] = e("span", null, "Component Path", -1))
                    ]),
                    e("code", Xn, c(le.value.componentPath), 1)
                  ])) : v("", !0),
                  le.value.figmaUrl ? (s(), n("div", Wn, [
                    e("div", Zn, [
                      C(r(uo), { style: { width: "16px", height: "16px" } }),
                      l[103] || (l[103] = e("span", null, "Figma Design", -1))
                    ]),
                    e("a", {
                      href: le.value.figmaUrl,
                      target: "_blank",
                      class: "di-link-purple"
                    }, c(le.value.figmaUrl), 9, Jn)
                  ])) : v("", !0),
                  le.value.apis.length ? (s(), n("div", Qn, [
                    e("div", Nn, [
                      C(r(ko), { style: { width: "16px", height: "16px" } }),
                      l[104] || (l[104] = e("span", null, "API Endpoints", -1))
                    ]),
                    e("div", ei, [
                      (s(!0), n(I, null, M(le.value.apis, (i, p) => (s(), n("div", {
                        key: p,
                        class: "di-api-item"
                      }, [
                        e("span", {
                          class: "di-method-badge",
                          style: it({ backgroundColor: ke[i.method] + "20", color: ke[i.method] })
                        }, c(i.method), 5),
                        e("div", ti, [
                          e("code", li, c(i.endpoint), 1),
                          i.description ? (s(), n("p", oi, c(i.description), 1)) : v("", !0)
                        ]),
                        i.loadTiming ? (s(), n("span", si, c(i.loadTiming === "onMount" ? "読込時" : i.loadTiming === "action" ? "アクション" : "条件付き"), 1)) : v("", !0)
                      ]))), 128))
                    ])
                  ])) : v("", !0),
                  le.value.notes ? (s(), n("div", ni, [
                    e("div", ii, [
                      C(r(lo), { style: { width: "16px", height: "16px" } }),
                      l[105] || (l[105] = e("span", null, "Notes", -1))
                    ]),
                    e("p", ai, c(le.value.notes), 1)
                  ])) : v("", !0)
                ], 64)) : (s(), n("div", di, [
                  C(r(Rt), { style: { width: "48px", height: "48px", color: "#334155" } }),
                  l[107] || (l[107] = e("p", null, [
                    O("この画面の仕様情報は"),
                    e("br"),
                    O("まだ登録されていません")
                  ], -1)),
                  e("button", {
                    onClick: l[26] || (l[26] = (i) => r(a).editingScreen = !0),
                    class: "di-screen-register-btn"
                  }, [
                    C(r(hl), { style: { width: "14px", height: "14px" } }),
                    l[106] || (l[106] = O(" 画面情報を登録 ", -1))
                  ])
                ])),
                e("div", ui, [
                  e("div", ri, [
                    C(r(go), { style: { width: "14px", height: "14px", color: "#94a3b8" } }),
                    l[108] || (l[108] = e("span", null, "横断検索", -1))
                  ]),
                  l[109] || (l[109] = e("div", { class: "di-cross-search-desc" }, "全画面のメモを横断検索。カラム名・APIエンドポイント・メモ内テキストで絞り込めます。", -1)),
                  e("div", ci, [
                    e("div", vi, [
                      (s(), n(I, null, M(gt, (i) => e("button", {
                        key: i.value,
                        onClick: (p) => r(a).crossSearchMode = i.value,
                        class: A(["di-filter-btn", { active: r(a).crossSearchMode === i.value }])
                      }, c(i.label), 11, pi)), 64))
                    ]),
                    b(e("input", {
                      "onUpdate:modelValue": l[27] || (l[27] = (i) => r(a).crossSearchQuery = i),
                      type: "text",
                      class: "di-cross-search-input",
                      placeholder: Ge.value
                    }, null, 8, mi), [
                      [x, r(a).crossSearchQuery]
                    ]),
                    r(a).crossSearchQuery.trim() ? (s(), n("div", fi, c(r(a).crossSearchResults.length) + "件 (" + c(Tt.value) + "画面) ", 1)) : v("", !0),
                    Ce.value.length > 0 ? (s(), n("div", bi, [
                      (s(!0), n(I, null, M(Ce.value, (i) => (s(), n("div", {
                        key: i.pagePath,
                        class: "di-cross-search-group"
                      }, [
                        e("div", hi, [
                          O(c(i.pagePath) + " ", 1),
                          i.pageName !== i.pagePath ? (s(), n("span", yi, "(" + c(i.pageName) + ")", 1)) : v("", !0)
                        ]),
                        (s(!0), n(I, null, M(i.items, (p, f) => (s(), n("div", {
                          key: f,
                          class: A(["di-cross-search-item", p.elementType ? "di-cross-item-" + p.elementType : ""]),
                          onClick: (_) => p.selector && r(a).startEditing(p.selector)
                        }, [
                          e("span", ki, c(p.matchedField), 1),
                          p.matchContext ? (s(), n("span", xi, c(p.matchContext), 1)) : v("", !0)
                        ], 10, gi))), 128))
                      ]))), 128))
                    ])) : v("", !0)
                  ])
                ]),
                e("div", wi, [
                  e("button", {
                    onClick: l[28] || (l[28] = (i) => r(a).showScreenFlow = !r(a).showScreenFlow),
                    class: A(["di-screen-flow-toggle", { active: r(a).showScreenFlow }])
                  }, [
                    C(r(mo), { style: { width: "14px", height: "14px" } }),
                    l[110] || (l[110] = e("span", null, "画面フロー", -1)),
                    r(a).screenFlowData.edges.length > 0 ? (s(), n("span", $i, c(r(a).screenFlowData.nodes.length) + "画面 / " + c(r(a).screenFlowData.edges.length) + "遷移 ", 1)) : v("", !0)
                  ], 2),
                  r(a).showScreenFlow ? (s(), n("div", Ci, [
                    r(a).screenFlowData.edges.length === 0 ? (s(), n("div", _i, " navigate型のアクションが登録されていません ")) : v("", !0),
                    (s(!0), n(I, null, M(je.value, (i) => (s(), n("div", {
                      key: i.node.path,
                      class: "di-flow-group"
                    }, [
                      e("div", {
                        class: A(["di-flow-node", { "di-flow-node-current": i.node.path === L.value }])
                      }, [
                        e("span", Ii, c(i.node.path), 1),
                        i.node.name !== i.node.path ? (s(), n("span", Ti, "(" + c(i.node.name) + ")", 1)) : v("", !0)
                      ], 2),
                      (s(!0), n(I, null, M(i.edges, (p) => (s(), n("div", {
                        key: p.from + p.to,
                        class: "di-flow-edge",
                        onClick: (f) => _e(p.selector)
                      }, [
                        l[111] || (l[111] = e("span", { class: "di-flow-arrow" }, "→", -1)),
                        e("span", Ui, c(p.to), 1),
                        p.label ? (s(), n("span", Di, "[" + c(p.label) + "]", 1)) : v("", !0)
                      ], 8, Si))), 128))
                    ]))), 128)),
                    r(a).screenFlowData.orphanPages.length > 0 ? (s(), n("div", Mi, [
                      l[112] || (l[112] = e("div", { class: "di-flow-orphans-header" }, "遷移なしのページ", -1)),
                      (s(!0), n(I, null, M(r(a).screenFlowData.orphanPages, (i) => (s(), n("span", {
                        key: i.path,
                        class: "di-flow-orphan-item"
                      }, c(i.path), 1))), 128))
                    ])) : v("", !0)
                  ])) : v("", !0)
                ])
              ], 512), [
                [Mt, U.value === "elements"]
              ]),
              b(e("div", null, [
                e("div", Vi, [
                  e("div", Ei, [
                    C(r(Ut), { style: { width: "16px", height: "16px", color: "#a78bfa" } }),
                    l[113] || (l[113] = e("span", null, "マスタ定義", -1)),
                    Be.value > 0 ? (s(), n("span", Pi, c(Be.value), 1)) : v("", !0),
                    e("button", {
                      onClick: l[29] || (l[29] = (i) => Je()),
                      class: "di-btn-icon",
                      style: { "margin-left": "auto" },
                      title: "新規追加"
                    }, [
                      C(r(Vt), { style: { width: "14px", height: "14px" } })
                    ])
                  ]),
                  Be.value > 0 ? (s(!0), n(I, { key: 0 }, M(dt.value, (i, p) => (s(), n("div", {
                    key: p,
                    class: "di-master-table-group"
                  }, [
                    e("div", Bi, c(p), 1),
                    (s(!0), n(I, null, M(i, (f) => (s(), n("div", {
                      key: f.id,
                      class: "di-master-item",
                      onClick: (_) => Je(f.id)
                    }, [
                      e("div", Li, [
                        e("span", Oi, "." + c(f.column), 1),
                        f.columnType ? (s(), n("span", Fi, c(f.columnType), 1)) : v("", !0),
                        e("span", ji, c(f.name), 1)
                      ]),
                      e("div", Hi, [
                        (s(!0), n(I, null, M(f.entries.slice(0, 5), (_, T) => (s(), n("span", {
                          key: T,
                          class: "di-master-entry-chip",
                          style: it(_.color ? { borderColor: _.color, color: _.color } : {})
                        }, c(_.value) + "=" + c(_.label), 5))), 128)),
                        f.entries.length > 5 ? (s(), n("span", qi, "+" + c(f.entries.length - 5), 1)) : v("", !0)
                      ])
                    ], 8, Ai))), 128))
                  ]))), 128)) : (s(), n("div", {
                    key: 1,
                    class: "di-master-empty",
                    onClick: l[30] || (l[30] = (i) => Je())
                  }, [...l[114] || (l[114] = [
                    e("span", null, "テーブル.カラムのマスタ値を定義", -1)
                  ])]))
                ]),
                (s(), pt(_t, { to: "body" }, [
                  Ke.value ? (s(), n("div", {
                    key: 0,
                    "data-dev-inspector": "",
                    class: "di-modal-overlay",
                    onClick: l[39] || (l[39] = Ie((i) => Ke.value = !1, ["self"]))
                  }, [
                    e("div", Ri, [
                      e("div", zi, [
                        e("h3", null, c(Re.value ? "マスタ定義を編集" : "新規マスタ定義"), 1),
                        e("button", {
                          onClick: l[31] || (l[31] = (i) => Ke.value = !1),
                          class: "di-close-btn"
                        }, [
                          C(r(xt), { style: { width: "16px", height: "16px" } })
                        ])
                      ]),
                      e("div", Ki, [
                        e("div", Gi, [
                          e("div", Yi, [
                            l[115] || (l[115] = e("label", null, "テーブル", -1)),
                            b(e("input", {
                              "onUpdate:modelValue": l[32] || (l[32] = (i) => N.value.table = i),
                              placeholder: "orders",
                              disabled: !!Re.value
                            }, null, 8, Xi), [
                              [x, N.value.table]
                            ])
                          ]),
                          e("div", Wi, [
                            l[116] || (l[116] = e("label", null, "カラム", -1)),
                            b(e("input", {
                              "onUpdate:modelValue": l[33] || (l[33] = (i) => N.value.column = i),
                              placeholder: "status",
                              disabled: !!Re.value
                            }, null, 8, Zi), [
                              [x, N.value.column]
                            ])
                          ])
                        ]),
                        e("div", Ji, [
                          e("div", Qi, [
                            l[117] || (l[117] = e("label", null, "表示名", -1)),
                            b(e("input", {
                              "onUpdate:modelValue": l[34] || (l[34] = (i) => N.value.name = i),
                              placeholder: "ステータス"
                            }, null, 512), [
                              [x, N.value.name]
                            ])
                          ]),
                          e("div", Ni, [
                            l[118] || (l[118] = e("label", null, "型", -1)),
                            b(e("input", {
                              "onUpdate:modelValue": l[35] || (l[35] = (i) => N.value.columnType = i),
                              placeholder: "integer"
                            }, null, 512), [
                              [x, N.value.columnType]
                            ])
                          ])
                        ]),
                        e("div", ea, [
                          l[119] || (l[119] = e("label", null, "説明", -1)),
                          b(e("input", {
                            "onUpdate:modelValue": l[36] || (l[36] = (i) => N.value.description = i),
                            placeholder: "注文のステータスを管理"
                          }, null, 512), [
                            [x, N.value.description]
                          ])
                        ]),
                        e("div", ta, [
                          l[120] || (l[120] = e("label", null, "マスタ値", -1)),
                          e("button", {
                            onClick: rt,
                            class: "di-btn-icon",
                            title: "追加"
                          }, [
                            C(r(Vt), { style: { width: "14px", height: "14px" } })
                          ])
                        ]),
                        e("div", la, [
                          (s(!0), n(I, null, M(N.value.entries, (i, p) => (s(), n("div", {
                            key: p,
                            class: "di-master-entry-row"
                          }, [
                            b(e("input", {
                              "onUpdate:modelValue": (f) => i.value = f,
                              placeholder: "値",
                              class: "di-master-entry-value"
                            }, null, 8, oa), [
                              [x, i.value]
                            ]),
                            b(e("input", {
                              "onUpdate:modelValue": (f) => i.label = f,
                              placeholder: "ラベル",
                              class: "di-master-entry-label"
                            }, null, 8, sa), [
                              [x, i.label]
                            ]),
                            b(e("input", {
                              "onUpdate:modelValue": (f) => i.color = f,
                              placeholder: "#色",
                              class: "di-master-entry-color"
                            }, null, 8, na), [
                              [x, i.color]
                            ]),
                            b(e("input", {
                              "onUpdate:modelValue": (f) => i.description = f,
                              placeholder: "説明",
                              class: "di-master-entry-desc"
                            }, null, 8, ia), [
                              [x, i.description]
                            ]),
                            e("button", {
                              onClick: (f) => ct(p),
                              class: "di-btn-icon di-btn-icon-danger"
                            }, [
                              C(r(xt), { style: { width: "12px", height: "12px" } })
                            ], 8, aa)
                          ]))), 128))
                        ]),
                        e("div", da, [
                          l[121] || (l[121] = e("label", null, "状態遷移", -1)),
                          e("button", {
                            onClick: ge,
                            class: "di-btn-icon",
                            title: "遷移を追加"
                          }, [
                            C(r(Vt), { style: { width: "14px", height: "14px" } })
                          ])
                        ]),
                        N.value.transitions.length > 0 ? (s(), n("div", ua, [
                          l[125] || (l[125] = e("div", { class: "di-transition-header" }, [
                            e("span", { class: "di-transition-col-from" }, "遷移元"),
                            e("span", { class: "di-transition-col-arrow" }, "→"),
                            e("span", { class: "di-transition-col-to" }, "遷移先"),
                            e("span", { class: "di-transition-col-trigger" }, "トリガー"),
                            e("span", { class: "di-transition-col-condition" }, "条件"),
                            e("span", { class: "di-transition-col-act" })
                          ], -1)),
                          (s(!0), n(I, null, M(N.value.transitions, (i, p) => (s(), n("div", {
                            key: p,
                            class: "di-transition-row"
                          }, [
                            b(e("select", {
                              "onUpdate:modelValue": (f) => i.from = f,
                              class: "di-transition-select di-transition-col-from"
                            }, [
                              l[122] || (l[122] = e("option", { value: "" }, "-", -1)),
                              (s(!0), n(I, null, M(N.value.entries.filter((f) => f.value), (f) => (s(), n("option", {
                                key: f.value,
                                value: f.value
                              }, c(f.label || f.value), 9, ca))), 128))
                            ], 8, ra), [
                              [Se, i.from]
                            ]),
                            l[124] || (l[124] = e("span", { class: "di-transition-col-arrow" }, "→", -1)),
                            b(e("select", {
                              "onUpdate:modelValue": (f) => i.to = f,
                              class: "di-transition-select di-transition-col-to"
                            }, [
                              l[123] || (l[123] = e("option", { value: "" }, "-", -1)),
                              (s(!0), n(I, null, M(N.value.entries.filter((f) => f.value), (f) => (s(), n("option", {
                                key: f.value,
                                value: f.value
                              }, c(f.label || f.value), 9, pa))), 128))
                            ], 8, va), [
                              [Se, i.to]
                            ]),
                            b(e("input", {
                              "onUpdate:modelValue": (f) => i.trigger = f,
                              placeholder: "トリガー",
                              class: "di-transition-input di-transition-col-trigger"
                            }, null, 8, ma), [
                              [x, i.trigger]
                            ]),
                            b(e("input", {
                              "onUpdate:modelValue": (f) => i.condition = f,
                              placeholder: "条件",
                              class: "di-transition-input di-transition-col-condition"
                            }, null, 8, fa), [
                              [x, i.condition]
                            ]),
                            e("button", {
                              onClick: (f) => Ae(p),
                              class: "di-btn-icon di-btn-icon-danger"
                            }, [
                              C(r(xt), { style: { width: "12px", height: "12px" } })
                            ], 8, ba)
                          ]))), 128))
                        ])) : (s(), n("div", ha, " 状態遷移を定義（任意） "))
                      ]),
                      e("div", ya, [
                        Re.value ? (s(), n("button", {
                          key: 0,
                          onClick: l[37] || (l[37] = (i) => {
                            De(Re.value), Ke.value = !1;
                          }),
                          class: "di-btn-small di-btn-danger"
                        }, "削除")) : v("", !0),
                        l[126] || (l[126] = e("div", { style: { flex: "1" } }, null, -1)),
                        e("button", {
                          onClick: l[38] || (l[38] = (i) => Ke.value = !1),
                          class: "di-btn-small"
                        }, "キャンセル"),
                        e("button", {
                          onClick: ut,
                          class: "di-btn-small di-btn-primary",
                          disabled: !N.value.table || !N.value.column
                        }, "保存", 8, ga)
                      ])
                    ])
                  ])) : v("", !0)
                ]))
              ], 512), [
                [Mt, U.value === "masters"]
              ]),
              b(e("div", null, [
                e("div", ka, [
                  e("div", xa, [
                    C(r(vl), { style: { width: "16px", height: "16px", color: "#f59e0b" } }),
                    l[127] || (l[127] = e("span", null, "バッチ処理", -1)),
                    ft.value > 0 ? (s(), n("span", wa, c(ft.value), 1)) : v("", !0),
                    e("button", {
                      onClick: l[40] || (l[40] = (i) => Le()),
                      class: "di-btn-icon",
                      style: { "margin-left": "auto" },
                      title: "新規追加"
                    }, [
                      C(r(Vt), { style: { width: "14px", height: "14px" } })
                    ])
                  ]),
                  ft.value > 0 ? (s(!0), n(I, { key: 0 }, M(Qe.value, (i) => (s(), n("div", {
                    key: i.id,
                    class: "di-batch-item",
                    onClick: (p) => Le(i.id)
                  }, [
                    e("div", Ca, [
                      e("div", _a, c(i.name), 1),
                      i.schedule ? (s(), n("div", Ia, c(i.schedule), 1)) : v("", !0)
                    ])
                  ], 8, $a))), 128)) : (s(), n("div", {
                    key: 1,
                    class: "di-batch-empty",
                    onClick: l[41] || (l[41] = (i) => Le())
                  }, [...l[128] || (l[128] = [
                    e("span", null, "バッチ処理を定義", -1)
                  ])]))
                ]),
                (s(), pt(_t, { to: "body" }, [
                  ze.value ? (s(), n("div", {
                    key: 0,
                    "data-dev-inspector": "",
                    class: "di-modal-overlay",
                    onClick: l[57] || (l[57] = Ie((i) => ze.value = !1, ["self"]))
                  }, [
                    e("div", Ta, [
                      e("div", Sa, [
                        e("h3", null, c(lt.value ? "バッチ処理を編集" : "新規バッチ処理"), 1),
                        e("button", {
                          onClick: l[42] || (l[42] = (i) => ze.value = !1),
                          class: "di-close-btn"
                        }, [
                          C(r(xt), { style: { width: "16px", height: "16px" } })
                        ])
                      ]),
                      e("div", Ua, [
                        e("div", Da, [
                          e("div", Ma, [
                            l[129] || (l[129] = e("label", null, "バッチ名 *", -1)),
                            b(e("input", {
                              "onUpdate:modelValue": l[43] || (l[43] = (i) => G.value.name = i),
                              placeholder: "月次レポート生成"
                            }, null, 512), [
                              [x, G.value.name]
                            ])
                          ]),
                          e("div", Va, [
                            l[130] || (l[130] = e("label", null, "スケジュール", -1)),
                            b(e("input", {
                              "onUpdate:modelValue": l[44] || (l[44] = (i) => G.value.schedule = i),
                              placeholder: "毎月1日 AM2:00"
                            }, null, 512), [
                              [x, G.value.schedule]
                            ])
                          ])
                        ]),
                        e("div", Ea, [
                          e("div", Pa, [
                            l[131] || (l[131] = e("label", null, "手動トリガー", -1)),
                            b(e("input", {
                              "onUpdate:modelValue": l[45] || (l[45] = (i) => G.value.trigger = i),
                              placeholder: "管理画面から実行"
                            }, null, 512), [
                              [x, G.value.trigger]
                            ])
                          ])
                        ]),
                        e("div", Ba, [
                          l[132] || (l[132] = e("label", null, "説明", -1)),
                          b(e("textarea", {
                            "onUpdate:modelValue": l[46] || (l[46] = (i) => G.value.description = i),
                            rows: "2",
                            placeholder: "バッチ処理の概要..."
                          }, null, 512), [
                            [x, G.value.description]
                          ])
                        ]),
                        l[142] || (l[142] = e("div", { class: "di-batch-section-label" }, "入出力テーブル", -1)),
                        e("div", Aa, [
                          e("div", La, [
                            l[133] || (l[133] = e("label", null, "入力テーブル", -1)),
                            e("div", Oa, [
                              (s(!0), n(I, null, M(G.value.inputTables, (i, p) => (s(), n("span", {
                                key: p,
                                class: "di-batch-tag"
                              }, [
                                O(c(i) + " ", 1),
                                e("button", {
                                  onClick: (f) => Oe(p),
                                  class: "di-batch-tag-remove"
                                }, "×", 8, Fa)
                              ]))), 128)),
                              b(e("input", {
                                "onUpdate:modelValue": l[47] || (l[47] = (i) => ot.value = i),
                                onKeydown: l[48] || (l[48] = Pt(Ie((i) => he(), ["prevent"]), ["enter"])),
                                type: "text",
                                placeholder: "テーブル名",
                                class: "di-batch-tag-input"
                              }, null, 544), [
                                [x, ot.value]
                              ])
                            ])
                          ]),
                          e("div", ja, [
                            l[134] || (l[134] = e("label", null, "出力テーブル", -1)),
                            e("div", Ha, [
                              (s(!0), n(I, null, M(G.value.outputTables, (i, p) => (s(), n("span", {
                                key: p,
                                class: "di-batch-tag"
                              }, [
                                O(c(i) + " ", 1),
                                e("button", {
                                  onClick: (f) => bt(p),
                                  class: "di-batch-tag-remove"
                                }, "×", 8, qa)
                              ]))), 128)),
                              b(e("input", {
                                "onUpdate:modelValue": l[49] || (l[49] = (i) => wt.value = i),
                                onKeydown: l[50] || (l[50] = Pt(Ie((i) => vt(), ["prevent"]), ["enter"])),
                                type: "text",
                                placeholder: "テーブル名",
                                class: "di-batch-tag-input"
                              }, null, 544), [
                                [x, wt.value]
                              ])
                            ])
                          ])
                        ]),
                        e("div", Ra, [
                          l[135] || (l[135] = O(" 処理ステップ ", -1)),
                          e("button", {
                            onClick: It,
                            class: "di-btn-icon",
                            style: { "margin-left": "auto" },
                            title: "ステップ追加"
                          }, [
                            C(r(Vt), { style: { width: "14px", height: "14px" } })
                          ])
                        ]),
                        G.value.steps.length > 0 ? (s(), n("div", za, [
                          l[137] || (l[137] = e("div", { class: "di-batch-steps-header" }, [
                            e("span", { class: "di-batch-step-no" }, "No"),
                            e("span", { class: "di-batch-step-desc" }, "処理内容"),
                            e("span", { class: "di-batch-step-target" }, "対象"),
                            e("span", { class: "di-batch-step-type" }, "種別"),
                            e("span", { class: "di-batch-step-error" }, "エラー処理"),
                            e("span", { class: "di-batch-step-act" })
                          ], -1)),
                          (s(!0), n(I, null, M(G.value.steps, (i, p) => (s(), n("div", {
                            key: p,
                            class: "di-batch-step-row"
                          }, [
                            e("span", Ka, c(p + 1), 1),
                            b(e("input", {
                              "onUpdate:modelValue": (f) => i.description = f,
                              placeholder: "処理内容",
                              class: "di-batch-step-input di-batch-step-desc"
                            }, null, 8, Ga), [
                              [x, i.description]
                            ]),
                            b(e("input", {
                              "onUpdate:modelValue": (f) => i.target = f,
                              placeholder: "対象テーブル",
                              class: "di-batch-step-input di-batch-step-target"
                            }, null, 8, Ya), [
                              [x, i.target]
                            ]),
                            b(e("select", {
                              "onUpdate:modelValue": (f) => i.type = f,
                              class: "di-batch-step-select di-batch-step-type"
                            }, [...l[136] || (l[136] = [
                              e("option", { value: "" }, "-", -1),
                              e("option", { value: "query" }, "query", -1),
                              e("option", { value: "api" }, "api", -1),
                              e("option", { value: "file" }, "file", -1),
                              e("option", { value: "mail" }, "mail", -1),
                              e("option", { value: "other" }, "other", -1)
                            ])], 8, Xa), [
                              [Se, i.type]
                            ]),
                            b(e("input", {
                              "onUpdate:modelValue": (f) => i.errorHandling = f,
                              placeholder: "エラー時",
                              class: "di-batch-step-input di-batch-step-error"
                            }, null, 8, Wa), [
                              [x, i.errorHandling]
                            ]),
                            e("button", {
                              onClick: (f) => Z(p),
                              class: "di-btn-icon di-btn-icon-danger"
                            }, [
                              C(r(xt), { style: { width: "12px", height: "12px" } })
                            ], 8, Za)
                          ]))), 128))
                        ])) : v("", !0),
                        l[143] || (l[143] = e("div", { class: "di-batch-section-label" }, "運用設定", -1)),
                        e("div", Ja, [
                          e("div", Qa, [
                            l[138] || (l[138] = e("label", null, "タイムアウト", -1)),
                            b(e("input", {
                              "onUpdate:modelValue": l[51] || (l[51] = (i) => G.value.timeout = i),
                              placeholder: "30分"
                            }, null, 512), [
                              [x, G.value.timeout]
                            ])
                          ]),
                          e("div", Na, [
                            l[139] || (l[139] = e("label", null, "リトライ", -1)),
                            b(e("input", {
                              "onUpdate:modelValue": l[52] || (l[52] = (i) => G.value.retryPolicy = i),
                              placeholder: "3回まで、5分間隔"
                            }, null, 512), [
                              [x, G.value.retryPolicy]
                            ])
                          ])
                        ]),
                        e("div", ed, [
                          e("div", td, [
                            l[140] || (l[140] = e("label", null, "エラー通知先", -1)),
                            b(e("input", {
                              "onUpdate:modelValue": l[53] || (l[53] = (i) => G.value.notifyOnError = i),
                              placeholder: "admin@example.com"
                            }, null, 512), [
                              [x, G.value.notifyOnError]
                            ])
                          ]),
                          e("div", ld, [
                            l[141] || (l[141] = e("label", null, "完了通知先", -1)),
                            b(e("input", {
                              "onUpdate:modelValue": l[54] || (l[54] = (i) => G.value.notifyOnComplete = i),
                              placeholder: "manager@example.com"
                            }, null, 512), [
                              [x, G.value.notifyOnComplete]
                            ])
                          ])
                        ])
                      ]),
                      e("div", od, [
                        lt.value ? (s(), n("button", {
                          key: 0,
                          onClick: l[55] || (l[55] = (i) => {
                            Me(lt.value), ze.value = !1;
                          }),
                          class: "di-btn-small di-btn-danger"
                        }, "削除")) : v("", !0),
                        l[144] || (l[144] = e("div", { style: { flex: "1" } }, null, -1)),
                        e("button", {
                          onClick: l[56] || (l[56] = (i) => ze.value = !1),
                          class: "di-btn-small"
                        }, "キャンセル"),
                        e("button", {
                          onClick: et,
                          class: "di-btn-small di-btn-primary",
                          disabled: !G.value.name
                        }, "保存", 8, sd)
                      ])
                    ])
                  ])) : v("", !0)
                ]))
              ], 512), [
                [Mt, U.value === "batches"]
              ]),
              b(e("div", null, [
                e("div", nd, [
                  e("button", {
                    onClick: $,
                    class: "di-btn-green"
                  }, [
                    C(r(po), { style: { width: "16px", height: "16px" } }),
                    l[145] || (l[145] = O(" Git管理用に保存 ", -1))
                  ]),
                  e("button", {
                    onClick: D,
                    class: "di-btn-blue"
                  }, [
                    C(r(kl), { style: { width: "16px", height: "16px" } }),
                    l[146] || (l[146] = O(" 画面仕様書 (xlsx) 出力 ", -1))
                  ]),
                  e("button", {
                    onClick: l[58] || (l[58] = (i) => r(a).downloadSddSpec()),
                    class: "di-btn-green-outline"
                  }, [
                    C(r(Rt), { style: { width: "16px", height: "16px" } }),
                    l[147] || (l[147] = O(" SDD仕様書 (md) ", -1))
                  ]),
                  e("button", {
                    onClick: l[59] || (l[59] = (i) => r(a).downloadClientSpec()),
                    class: "di-btn-blue-outline"
                  }, [
                    C(r(Rt), { style: { width: "16px", height: "16px" } }),
                    l[148] || (l[148] = O(" 納品用仕様書 (md) ", -1))
                  ])
                ]),
                l[156] || (l[156] = e("p", { class: "di-export-hint" }, [
                  O(" JSON: "),
                  e("code", null, "dev-annotations.json"),
                  O(" に配置してcommit ")
                ], -1)),
                e("div", id, [
                  e("button", {
                    onClick: l[60] || (l[60] = (i) => E.value = !0),
                    class: "di-btn-small"
                  }, [
                    C(r(Xt), { style: { width: "14px", height: "14px" } }),
                    l[149] || (l[149] = O(" エクスポート ", -1))
                  ]),
                  e("button", {
                    onClick: l[61] || (l[61] = (i) => te.value = !0),
                    class: "di-btn-small"
                  }, [
                    C(r($o), { style: { width: "14px", height: "14px" } }),
                    l[150] || (l[150] = O(" インポート ", -1))
                  ]),
                  pe.value > 0 ? (s(), n("button", {
                    key: 0,
                    onClick: We,
                    class: "di-btn-small di-btn-danger"
                  }, [
                    C(r(Bt), { style: { width: "14px", height: "14px" } }),
                    l[151] || (l[151] = O(" 全削除 ", -1))
                  ])) : v("", !0)
                ]),
                pe.value > 0 || Be.value > 0 || ft.value > 0 ? (s(), n("div", ad, [
                  l[155] || (l[155] = e("div", { class: "di-export-summary-title" }, "登録状況", -1)),
                  e("div", dd, [
                    l[152] || (l[152] = e("span", null, "要素設定", -1)),
                    e("span", ud, c(pe.value) + "件", 1)
                  ]),
                  e("div", rd, [
                    l[153] || (l[153] = e("span", null, "マスタ定義", -1)),
                    e("span", cd, c(Be.value) + "件", 1)
                  ]),
                  e("div", vd, [
                    l[154] || (l[154] = e("span", null, "バッチ処理", -1)),
                    e("span", pd, c(ft.value) + "件", 1)
                  ])
                ])) : v("", !0)
              ], 512), [
                [Mt, U.value === "export"]
              ])
            ]),
            l[157] || (l[157] = e("div", { class: "di-footer" }, [
              e("kbd", null, "Ctrl"),
              e("span", null, "+"),
              e("kbd", null, "Shift"),
              e("span", null, "+"),
              e("kbd", null, "D"),
              e("span", { class: "di-footer-text" }, "で開発者モード切替")
            ], -1))
          ])) : v("", !0)
        ])),
        (s(), pt(_t, { to: "body" }, [
          r(a).isEnabled ? (s(), n("div", md, [...l[158] || (l[158] = [
            e("span", { class: "di-indicator-dot" }, null, -1),
            O(" Developer Mode ", -1)
          ])])) : v("", !0)
        ])),
        (s(), pt(_t, { to: "body" }, [
          E.value ? (s(), n("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: l[63] || (l[63] = Ie((i) => E.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", fd, [
              l[160] || (l[160] = e("h3", { class: "di-modal-title" }, "設定をエクスポート", -1)),
              e("textarea", {
                readonly: "",
                value: r(a).exportConfigs(),
                class: "di-modal-textarea"
              }, null, 8, bd),
              e("div", hd, [
                e("button", {
                  onClick: l[62] || (l[62] = (i) => E.value = !1),
                  class: "di-btn-small"
                }, "閉じる"),
                e("button", {
                  onClick: P,
                  class: "di-btn-small di-btn-gray"
                }, [
                  C(r(Xt), { style: { width: "14px", height: "14px" } }),
                  l[159] || (l[159] = O(" ファイル保存 ", -1))
                ]),
                e("button", {
                  onClick: ee,
                  class: "di-btn-small di-btn-primary"
                }, "コピー")
              ])
            ])
          ])) : v("", !0)
        ])),
        (s(), pt(_t, { to: "body" }, [
          te.value ? (s(), n("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: l[66] || (l[66] = Ie((i) => te.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", yd, [
              l[162] || (l[162] = e("h3", { class: "di-modal-title" }, "設定をインポート", -1)),
              e("label", gd, [
                e("input", {
                  type: "file",
                  accept: ".json",
                  onChange: Q
                }, null, 32),
                l[161] || (l[161] = e("span", null, "JSONファイルをドラッグまたはクリック", -1))
              ]),
              b(e("textarea", {
                "onUpdate:modelValue": l[64] || (l[64] = (i) => oe.value = i),
                placeholder: "またはJSONを直接貼り付け...",
                class: "di-modal-textarea di-modal-textarea-input"
              }, null, 512), [
                [x, oe.value]
              ]),
              ie.value ? (s(), n("p", kd, c(ie.value), 1)) : v("", !0),
              e("div", xd, [
                e("button", {
                  onClick: l[65] || (l[65] = (i) => {
                    te.value = !1, oe.value = "", ie.value = "";
                  }),
                  class: "di-btn-small"
                }, " キャンセル "),
                e("button", {
                  onClick: $e,
                  disabled: !oe.value,
                  class: "di-btn-small di-btn-primary"
                }, " インポート ", 8, wd)
              ])
            ])
          ])) : v("", !0)
        ]))
      ], 64);
    };
  }
}), Kt = (W, a) => {
  const U = W.__vccOpts || W;
  for (const [E, te] of a)
    U[E] = te;
  return U;
}, Cd = /* @__PURE__ */ Kt($d, [["__scopeId", "data-v-c37f314f"]]), _d = { class: "di-editor-header" }, Id = { class: "di-header-actions" }, Td = {
  key: 0,
  class: "di-source-badge-row"
}, Sd = {
  key: 0,
  class: "di-source-detail"
}, Ud = { class: "di-context-row" }, Dd = { class: "di-context-field" }, Md = { id: "di-tab-names" }, Vd = ["value"], Ed = { class: "di-context-field" }, Pd = { id: "di-modal-names" }, Bd = ["value"], Ad = { class: "di-editor-tabs" }, Ld = { class: "di-editor-content" }, Od = { class: "di-form-group" }, Fd = { class: "di-display-type-grid" }, jd = ["onClick"], Hd = { class: "di-display-type-desc" }, qd = {
  key: 0,
  class: "di-field-tags"
}, Rd = { class: "di-field-tags-list" }, zd = { class: "di-field-tag-name" }, Kd = {
  key: 0,
  class: "di-field-tag-type"
}, Gd = ["onClick"], Yd = {
  key: 1,
  class: "di-binding-selector"
}, Xd = { class: "di-form-group" }, Wd = { class: "di-form-label" }, Zd = { class: "di-binding-search-wrapper" }, Jd = {
  key: 0,
  class: "di-binding-list"
}, Qd = ["onClick"], Nd = { class: "di-binding-item-main" }, eu = { class: "di-binding-name" }, tu = { class: "di-binding-type" }, lu = {
  key: 0,
  class: "di-binding-component"
}, ou = {
  key: 1,
  class: "di-binding-empty"
}, su = {
  key: 2,
  class: "di-form-divider"
}, nu = { class: "di-form-row" }, iu = { class: "di-form-group di-suggest-wrapper" }, au = {
  key: 0,
  class: "di-suggest-list"
}, du = ["onMousedown"], uu = { class: "di-form-group di-suggest-wrapper" }, ru = {
  key: 0,
  class: "di-suggest-list"
}, cu = ["onMousedown"], vu = { class: "di-form-group" }, pu = ["value"], mu = ["disabled"], fu = {
  key: 3,
  class: "di-master-inline"
}, bu = {
  key: 0,
  class: "di-condition-badge",
  style: { background: "#a78bfa" }
}, hu = {
  key: 0,
  class: "di-master-inline-section"
}, yu = {
  key: 0,
  class: "di-master-entries-table"
}, gu = ["onUpdate:modelValue"], ku = ["onUpdate:modelValue"], xu = ["onUpdate:modelValue"], wu = ["onClick"], $u = {
  key: 4,
  class: "di-form-group"
}, Cu = { class: "di-stored-calc-toggle" }, _u = {
  key: 0,
  class: "di-condition-badge"
}, Iu = {
  key: 5,
  class: "di-stored-calc-section"
}, Tu = { class: "di-form-group" }, Su = { class: "di-form-group di-suggest-wrapper" }, Uu = { class: "di-stored-calc-tags" }, Du = ["onClick"], Mu = {
  key: 0,
  class: "di-suggest-list"
}, Vu = ["onMousedown"], Eu = { class: "di-form-group" }, Pu = {
  key: 1,
  class: "di-form-group di-suggest-wrapper"
}, Bu = {
  key: 0,
  class: "di-calc-tag"
}, Au = ["onClick"], Lu = {
  key: 1,
  class: "di-calc-text"
}, Ou = ["placeholder"], Fu = {
  key: 0,
  class: "di-suggest-list"
}, ju = ["onMousedown"], Hu = {
  key: 2,
  class: "di-form-group"
}, qu = { class: "di-condition-toggle" }, Ru = {
  key: 0,
  class: "di-condition-badge"
}, zu = {
  key: 0,
  class: "di-condition-section"
}, Ku = { class: "di-form-group" }, Gu = { class: "di-form-group di-suggest-wrapper" }, Yu = { class: "di-form-row" }, Xu = { class: "di-form-group" }, Wu = {
  key: 0,
  class: "di-form-group"
}, Zu = { class: "di-form-row" }, Ju = { class: "di-form-group" }, Qu = {
  class: "di-form-group",
  style: { flex: "0 0 80px" }
}, Nu = { class: "di-form-row" }, er = { class: "di-form-group" }, tr = { class: "di-form-group" }, lr = { class: "di-form-group" }, or = { class: "di-form-group" }, sr = { class: "di-form-group" }, nr = { class: "di-form-group" }, ir = ["placeholder"], ar = {
  key: 0,
  class: "di-form-group"
}, dr = { class: "di-form-group" }, ur = { class: "di-form-divider" }, rr = { class: "di-csv-file-settings" }, cr = { class: "di-form-row" }, vr = { class: "di-form-group" }, pr = { class: "di-form-group" }, mr = {
  class: "di-form-row",
  style: { "align-items": "center" }
}, fr = { class: "di-csv-checkbox-label" }, br = { class: "di-form-group" }, hr = { class: "di-csv-columns-section" }, yr = {
  key: 0,
  class: "di-csv-columns-table"
}, gr = { class: "di-csv-col-no" }, kr = ["onUpdate:modelValue"], xr = ["onUpdate:modelValue"], wr = ["onUpdate:modelValue"], $r = ["onUpdate:modelValue"], Cr = { class: "di-csv-col-req di-csv-checkbox-center" }, _r = ["onUpdate:modelValue"], Ir = ["onUpdate:modelValue"], Tr = { class: "di-csv-col-act" }, Sr = ["onClick", "disabled"], Ur = ["onClick", "disabled"], Dr = ["onClick"], Mr = { class: "di-form-group" }, Vr = { class: "di-form-group" }, Er = { class: "di-form-group" }, Pr = { class: "di-form-group" }, Br = { class: "di-form-group" }, Ar = { class: "di-form-group" }, Lr = { class: "di-csv-error-section" }, Or = {
  key: 0,
  class: "di-csv-columns-table"
}, Fr = ["onUpdate:modelValue"], jr = ["value"], Hr = ["onUpdate:modelValue"], qr = ["onUpdate:modelValue"], Rr = ["onUpdate:modelValue"], zr = ["onClick"], Kr = { class: "di-form-divider" }, Gr = { class: "di-form-row" }, Yr = { class: "di-form-group" }, Xr = { class: "di-form-group" }, Wr = { class: "di-form-row" }, Zr = { class: "di-form-group" }, Jr = { class: "di-form-group" }, Qr = { class: "di-form-group" }, Nr = { class: "di-form-group" }, ec = { class: "di-form-group" }, tc = { class: "di-form-group" }, lc = { class: "di-email-variables-input" }, oc = ["onClick"], sc = { class: "di-form-group" }, nc = { class: "di-form-group" }, ic = { class: "di-form-group" }, ac = { class: "di-form-divider" }, dc = { class: "di-form-group" }, uc = {
  class: "di-form-label",
  style: { display: "flex", "align-items": "center", gap: "8px" }
}, rc = { class: "di-form-row" }, cc = { class: "di-form-group" }, vc = { class: "di-form-group" }, pc = { class: "di-form-group" }, mc = { class: "di-form-group" }, fc = {
  class: "di-form-label",
  style: { display: "flex", "align-items": "center", gap: "8px" }
}, bc = { class: "di-form-group" }, hc = { class: "di-form-group" }, yc = { class: "di-form-group" }, gc = { class: "di-form-group" }, kc = {
  key: 0,
  class: "di-field-tags"
}, xc = { class: "di-field-tags-list" }, wc = { class: "di-field-tag-name" }, $c = {
  key: 0,
  class: "di-field-tag-type"
}, Cc = ["onClick"], _c = {
  key: 1,
  class: "di-binding-selector"
}, Ic = { class: "di-form-group" }, Tc = { class: "di-form-label" }, Sc = { class: "di-binding-search-wrapper" }, Uc = {
  key: 0,
  class: "di-binding-list"
}, Dc = ["onClick"], Mc = { class: "di-binding-item-main" }, Vc = { class: "di-binding-name" }, Ec = { class: "di-binding-type" }, Pc = {
  key: 0,
  class: "di-binding-component"
}, Bc = {
  key: 2,
  class: "di-master-inline"
}, Ac = {
  key: 0,
  class: "di-condition-badge",
  style: { background: "#a78bfa" }
}, Lc = {
  key: 0,
  class: "di-master-inline-section"
}, Oc = {
  key: 0,
  class: "di-master-entries-table"
}, Fc = ["onUpdate:modelValue"], jc = ["onUpdate:modelValue"], Hc = ["onUpdate:modelValue"], qc = ["onClick"], Rc = { class: "di-condition-toggle" }, zc = {
  key: 0,
  class: "di-condition-badge"
}, Kc = { class: "di-form-group di-suggest-wrapper" }, Gc = { class: "di-calc-tags-input" }, Yc = ["onClick"], Xc = ["placeholder"], Wc = { class: "di-form-group" }, Zc = { class: "di-form-group" }, Jc = { class: "di-form-group" }, Qc = { class: "di-form-group" }, Nc = { class: "di-form-group" }, ev = { class: "di-form-group" }, tv = { class: "di-form-row" }, lv = { class: "di-form-group di-form-half" }, ov = { class: "di-form-group di-form-half" }, sv = { class: "di-csv-columns-section" }, nv = {
  key: 0,
  class: "di-csv-columns-table"
}, iv = ["onUpdate:modelValue"], av = ["onUpdate:modelValue"], dv = ["onUpdate:modelValue"], uv = { class: "di-csv-col-act" }, rv = ["onClick", "disabled"], cv = ["onClick", "disabled"], vv = ["onClick"], pv = { class: "di-form-group" }, mv = { class: "di-form-group" }, fv = { class: "di-form-group" }, bv = { class: "di-form-group" }, hv = { class: "di-editor-footer" }, yv = { class: "di-editor-actions" }, gv = /* @__PURE__ */ Lt({
  __name: "DevElementEditor",
  setup(W) {
    const a = Ot(), U = k("datasource"), E = k(""), te = k(""), oe = k(""), ie = k(""), ke = k(""), we = k(!1), z = k([]), le = k(""), pe = k(""), Te = k(""), me = k(""), ce = k([]), V = k("UTF-8"), Pe = k(","), at = k(!0), Ue = k(""), Xe = k(""), fe = k(""), se = k(void 0), qe = k(""), H = k(""), S = k(""), h = k([]), F = k(""), q = k(""), ne = k(""), R = k(""), ee = k(""), P = k(""), $ = k(""), D = k([]), $e = k(""), Q = k(""), We = k(""), be = k(""), Ze = k(!0), tt = k(""), Ke = k(""), Re = k(""), N = k(!1), Be = k(""), dt = k(""), Je = k(""), ut = k(""), rt = k(""), ct = k(""), ge = k([]), Ae = k(""), De = k(""), ze = k(""), lt = k(""), G = k(""), ot = k(""), wt = j(() => {
      const g = /* @__PURE__ */ new Set();
      for (const t of Object.values(a.elementConfigs))
        t.tabContext && g.add(t.tabContext);
      return [...g].sort();
    }), ft = j(() => {
      const g = /* @__PURE__ */ new Set();
      for (const t of Object.values(a.elementConfigs))
        t.modalName && g.add(t.modalName);
      return [...g].sort();
    }), Qe = k(!1), Le = k([]), et = j(() => {
      if (Me.value.length > 0) {
        const g = Me.value[0];
        if (g.table && g.column) return `${g.table}.${g.column}`;
      }
      return "";
    }), It = j(() => et.value && a.getMasterDefinition(et.value) || null), Z = k("db_direct"), Me = k([]), he = k(""), Oe = k(""), vt = k(""), bt = k(""), gt = k(""), Ge = k([]), Ce = k(""), Tt = k(!1), st = k(""), $t = k(""), Ct = k(""), ht = k(""), kt = k(""), xe = k(!1), d = k(""), ve = k([]), de = k(""), J = k(!1), ue = k(""), Ve = k(""), Ee = k(""), Ye = k(""), Ne = k(""), ye = k(!1), re = k(""), Fe = k(""), yt = k(""), mt = k(!1), L = j(() => Fe.value ? {
      data: "data",
      "v-model": "v-model",
      prop: "prop",
      static: "static",
      computed: "computed",
      store: "store",
      api: "data"
      // legacy compatibility
    }[Fe.value] || Fe.value : ""), je = j(() => a.editingElementId !== null), _e = j(() => a.editingElementId), u = j(() => E.value === "csv_export" || E.value === "csv_import"), l = j(() => E.value === "email"), y = j(() => u.value || l.value), B = [
      { value: "db_direct", label: "DBカラム (そのまま)", icon: Ut, color: "#3b82f6", description: "DBの値をそのまま表示" },
      { value: "db_formatted", label: "DBカラム (整形)", icon: zt, color: "#8b5cf6", description: "DBの値を整形して表示" },
      { value: "calculated", label: "計算値", icon: rl, color: "#f59e0b", description: "複数カラムから計算" },
      { value: "static", label: "固定文言", icon: wo, color: "#10b981", description: "コード内の固定テキスト" },
      { value: "other", label: "その他メモ", icon: ho, color: "#94a3b8", description: "自由メモ" }
    ];
    At(_e, (g) => {
      var t;
      if (g) {
        const o = a.getElementConfig(g);
        try {
          const m = document.querySelector(g);
          if (m) {
            o != null && o.elementType ? U.value = o.elementType : U.value = a.detectElementType(m);
            const w = m.querySelector("[data-di-binding]") || (m.hasAttribute("data-di-binding") ? m : null) || m.closest("[data-di-binding]");
            if (w) {
              const Y = w.getAttribute("data-di-binding"), He = w.getAttribute("data-di-db"), Dt = w.getAttribute("data-di-db-type"), Yt = w.getAttribute("data-di-db-comment");
              if (Y && (yt.value = Y, Fe.value = "data", mt.value = !1), He) {
                const [St, dl] = He.split(".");
                St && dl && (Me.value.push({
                  table: St,
                  column: dl,
                  type: Dt || void 0,
                  description: Yt || void 0
                }), Z.value || (Z.value = "db_direct"));
              }
            }
          }
        } catch (m) {
          console.warn("[DevInspector] Failed to read element:", m);
        }
        if (o != null && o.fieldInfoList && o.fieldInfoList.length > 0 ? Me.value = o.fieldInfoList.map((m) => ({ ...m })) : o != null && o.fieldInfo && (Me.value = [{ ...o.fieldInfo }]), he.value = "", Oe.value = "", vt.value = "", bt.value = "", o != null && o.note && (re.value = o.note.text || re.value, Z.value = o.note.displayType || Z.value, gt.value = o.note.formatDescription || "", st.value = o.note.sampleValue || "", $t.value = o.note.decimalHandling || "", Ct.value = o.note.unit || "", ht.value = o.note.nullDisplay || "", kt.value = o.note.displayFormat || "", Bl(o.note.calcDescription || "", o.note.calcSources || []), xe.value = o.note.storedCalc || !1, d.value = o.note.storedCalcLogic || "", ve.value = o.note.storedCalcSources ? [...o.note.storedCalcSources] : [], ue.value = o.note.storedCalcTiming || "", Ve.value = o.note.condition || "", Ee.value = o.note.conditionColumn || "", Ye.value = o.note.hiddenBehavior || "", Ne.value = o.note.hiddenNote || "", ye.value = !!(o.note.condition || o.note.conditionColumn)), o != null && o.sourceBinding && (Fe.value = o.sourceBinding.type || Fe.value, yt.value = o.sourceBinding.source || yt.value, mt.value = o.sourceBinding.isStatic || !1), G.value = (o == null ? void 0 : o.tabContext) || a.detectTabContext(g) || "", ot.value = (o == null ? void 0 : o.modalName) || o != null && o.isConditional && a.detectModalName(g) || "", o != null && o.actionInfo) {
          if (E.value = o.actionInfo.type || "", te.value = o.actionInfo.target || "", oe.value = o.actionInfo.method || "", ie.value = o.actionInfo.description || "", o.actionInfo.csvSpec) {
            const m = o.actionInfo.csvSpec;
            ce.value = m.columns.map((w) => ({ ...w })), V.value = m.encoding || "UTF-8", Pe.value = m.delimiter || ",", at.value = m.hasHeaderRow !== !1, Ue.value = m.filenamePattern || "", Xe.value = m.sortOrder || "", fe.value = m.filterCondition || "", se.value = m.maxRows, qe.value = m.errorHandling || "", H.value = m.duplicateHandling || "", S.value = m.preValidation || "", h.value = m.errorDefs ? m.errorDefs.map((w) => ({ ...w })) : [];
          }
          if (o.actionInfo.emailSpec) {
            const m = o.actionInfo.emailSpec;
            F.value = m.trigger || "", q.value = m.to || "", ne.value = m.cc || "", R.value = m.bcc || "", ee.value = m.subject || "", P.value = m.bodyTemplate || "", $.value = m.templatePath || "", D.value = m.variables ? [...m.variables] : [], Q.value = m.attachments || "", We.value = m.conditions || "", be.value = m.errorHandling || "";
          }
        }
        if (o != null && o.formInfo && (ke.value = o.formInfo.inputType || "", we.value = o.formInfo.required || !1, z.value = o.formInfo.validation ? [...o.formInfo.validation] : [], pe.value = o.formInfo.placeholder || "", Te.value = o.formInfo.defaultValue || "", me.value = o.formInfo.description || ""), (t = o == null ? void 0 : o.actionInfo) != null && t.sortSpec) {
          const m = o.actionInfo.sortSpec;
          Ze.value = m.sortable !== !1, tt.value = m.sortType || "", Ke.value = m.sortKey || "", Re.value = m.defaultDirection || "", N.value = m.isDefaultSort || !1, Be.value = m.unsortedOrder || "", dt.value = m.description || "";
        }
        if (o != null && o.chartSpec) {
          const m = o.chartSpec;
          Je.value = m.chartType || "", ut.value = m.title || "", rt.value = m.xAxis || "", ct.value = m.yAxis || "", ge.value = m.series ? m.series.map((w) => ({ ...w })) : [], Ae.value = m.dataSource || "", De.value = m.aggregation || "", ze.value = m.filters || "", lt.value = m.description || "";
        }
      } else
        i();
    });
    function i() {
      U.value = "datasource", Z.value = "db_direct", Me.value = [], he.value = "", Oe.value = "", vt.value = "", bt.value = "", gt.value = "", st.value = "", $t.value = "", Ct.value = "", ht.value = "", kt.value = "", Ge.value = [], Ce.value = "", xe.value = !1, d.value = "", ve.value = [], de.value = "", ue.value = "", Ve.value = "", Ee.value = "", Ye.value = "", Ne.value = "", ye.value = !1, re.value = "", Fe.value = "", yt.value = "", mt.value = !1, E.value = "", te.value = "", oe.value = "", ie.value = "", ce.value = [], V.value = "UTF-8", Pe.value = ",", at.value = !0, Ue.value = "", Xe.value = "", fe.value = "", se.value = void 0, qe.value = "", H.value = "", S.value = "", h.value = [], ke.value = "", we.value = !1, z.value = [], le.value = "", pe.value = "", Te.value = "", me.value = "", F.value = "", q.value = "", ne.value = "", R.value = "", ee.value = "", P.value = "", $.value = "", D.value = [], $e.value = "", Q.value = "", We.value = "", be.value = "", Ze.value = !0, tt.value = "", Ke.value = "", Re.value = "", N.value = !1, Be.value = "", dt.value = "", Je.value = "", ut.value = "", rt.value = "", ct.value = "", ge.value = [], Ae.value = "", De.value = "", ze.value = "", lt.value = "", G.value = "", ot.value = "", Qe.value = !1, Le.value = [];
    }
    function p() {
      a.stopEditing(), i();
    }
    function f() {
      if (_e.value)
        try {
          const g = document.querySelector(_e.value);
          if (!g) return;
          const t = a.autoDetectElementInfo(g, _e.value);
          t.sourceBinding && (Fe.value = t.sourceBinding.type || "", yt.value = t.sourceBinding.source || "", mt.value = t.sourceBinding.isStatic || !1, t.sourceBinding.isStatic && !Z.value && (Z.value = "static", re.value = re.value || "固定文言")), t.fieldInfo && (Me.value.push({
            table: t.fieldInfo.table || "",
            column: t.fieldInfo.column || "",
            type: t.fieldInfo.type || void 0,
            description: t.fieldInfo.description || void 0
          }), Z.value || (Z.value = "db_direct")), t.note && !re.value && (re.value = t.note.text || "");
        } catch (g) {
          console.error("[DevInspector] Auto-detect failed:", g);
        }
    }
    function _() {
      if (!_e.value) return;
      const g = [...Me.value];
      (Z.value === "db_direct" || Z.value === "db_formatted") && he.value && Oe.value && g.push({
        table: he.value,
        column: Oe.value,
        type: vt.value || void 0,
        description: bt.value || void 0
      });
      const t = g.length > 0 ? g : void 0, o = g.length > 0 ? g[0] : void 0, m = Z.value === "db_direct" || Z.value === "db_formatted", w = Z.value || re.value ? {
        text: re.value || "",
        displayType: Z.value,
        formatDescription: Z.value === "db_formatted" && gt.value || void 0,
        calcDescription: Z.value === "calculated" && Pl() || void 0,
        calcSources: Z.value === "calculated" && ll().length > 0 ? ll() : void 0,
        // 保存済み計算値 (db_direct / db_formatted のみ)
        storedCalc: m && xe.value ? !0 : void 0,
        storedCalcLogic: m && xe.value && d.value || void 0,
        storedCalcSources: m && xe.value && ve.value.length > 0 ? ve.value : void 0,
        storedCalcTiming: m && xe.value && ue.value || void 0,
        sampleValue: st.value || void 0,
        decimalHandling: $t.value || void 0,
        unit: Ct.value || void 0,
        nullDisplay: ht.value || void 0,
        displayFormat: kt.value || void 0,
        condition: Ve.value || void 0,
        conditionColumn: Ee.value || void 0,
        hiddenBehavior: Ye.value || void 0,
        hiddenNote: Ne.value || void 0
      } : void 0, Y = Fe.value ? {
        type: Fe.value,
        source: yt.value || void 0,
        isStatic: mt.value
      } : void 0, He = U.value === "action" && E.value ? {
        type: E.value,
        target: te.value || void 0,
        method: oe.value ? oe.value : void 0,
        description: ie.value || void 0,
        csvSpec: Gl(),
        emailSpec: Yl(),
        sortSpec: Jl()
      } : void 0, Dt = U.value === "form" ? {
        inputType: ke.value || void 0,
        required: we.value || void 0,
        validation: z.value.length > 0 ? z.value : void 0,
        placeholder: pe.value || void 0,
        defaultValue: Te.value || void 0,
        description: me.value || void 0
      } : void 0, Yt = U.value === "chart" && Je.value ? {
        chartType: Je.value,
        title: ut.value || void 0,
        xAxis: rt.value || void 0,
        yAxis: ct.value || void 0,
        series: ge.value.filter((St) => St.label || St.field).length > 0 ? ge.value.filter((St) => St.label || St.field) : void 0,
        dataSource: Ae.value || void 0,
        aggregation: De.value || void 0,
        filters: ze.value || void 0,
        description: lt.value || void 0
      } : void 0;
      a.setElementConfig(_e.value, {
        elementType: U.value,
        fieldInfo: o,
        fieldInfoList: t,
        actionInfo: He,
        formInfo: Dt,
        chartSpec: Yt,
        note: w,
        sourceBinding: Y,
        tabContext: G.value || void 0,
        modalName: ot.value || void 0,
        isConditional: ot.value ? !0 : void 0
      }), Qe.value && et.value && Ql(), p();
    }
    function T() {
      _e.value && (a.deleteElementConfig(_e.value), p());
    }
    const ae = [
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
      "VARCHAR",
      "TEXT",
      "INT",
      "BIGINT",
      "BOOLEAN",
      "DATE",
      "DATETIME",
      "TIMESTAMP",
      "JSON"
    ], K = k(""), nt = k(!1), Et = j(() => a.searchSchemaColumns(K.value).slice(0, 30));
    function Zt(g) {
      Me.value.push({
        table: g.table,
        column: g.column,
        type: g.type || void 0,
        description: g.comment || void 0
      }), nt.value = !1, K.value = "";
    }
    function wl() {
      !he.value || !Oe.value || (Me.value.push({
        table: he.value,
        column: Oe.value,
        type: vt.value || void 0,
        description: bt.value || void 0
      }), he.value = "", Oe.value = "", vt.value = "", bt.value = "");
    }
    function Jt(g) {
      Me.value.splice(g, 1);
    }
    const Gt = j(() => a.getSchemaColumns().length > 0), Ft = k(!1), jt = k(!1), Qt = j(() => {
      var m;
      const g = /* @__PURE__ */ new Set();
      for (const w of Object.values(a.elementConfigs))
        if (w.fieldInfoList)
          for (const Y of w.fieldInfoList)
            Y.table && g.add(Y.table);
        else (m = w.fieldInfo) != null && m.table && g.add(w.fieldInfo.table);
      for (const w of a.getSchemaColumns())
        g.add(w.table);
      const t = [...g].sort();
      if (!he.value) return t;
      const o = he.value.toLowerCase();
      return t.filter((w) => w.toLowerCase().includes(o));
    }), Nt = j(() => {
      var m;
      const g = /* @__PURE__ */ new Set();
      for (const w of Object.values(a.elementConfigs))
        if (w.fieldInfoList)
          for (const Y of w.fieldInfoList)
            Y.column && (!he.value || Y.table === he.value) && g.add(Y.column);
        else (m = w.fieldInfo) != null && m.column && (!he.value || w.fieldInfo.table === he.value) && g.add(w.fieldInfo.column);
      for (const w of a.getSchemaColumns())
        (!he.value || w.table === he.value) && g.add(w.column);
      const t = [...g].sort();
      if (!Oe.value) return t;
      const o = Oe.value.toLowerCase();
      return t.filter((w) => w.toLowerCase().includes(o));
    });
    function $l() {
      setTimeout(() => {
        Ft.value = !1;
      }, 150);
    }
    function Cl() {
      setTimeout(() => {
        jt.value = !1;
      }, 150);
    }
    function _l(g) {
      if (he.value = g, Ft.value = !1, Oe.value) {
        const t = a.getSchemaColumns().find((o) => o.table === g && o.column === Oe.value);
        t && (vt.value = t.type || "", bt.value = t.comment || "");
      }
    }
    function Il(g) {
      if (Oe.value = g, jt.value = !1, he.value) {
        const t = a.getSchemaColumns().find((o) => o.table === he.value && o.column === g);
        t && (vt.value = t.type || "", bt.value = t.comment || "");
      }
    }
    const el = j(() => {
      var m, w;
      const g = /* @__PURE__ */ new Set();
      for (const Y of Object.values(a.elementConfigs))
        if (Y.fieldInfoList)
          for (const He of Y.fieldInfoList)
            He.table && He.column && g.add(`${He.table}.${He.column}`);
        else (m = Y.fieldInfo) != null && m.table && ((w = Y.fieldInfo) != null && w.column) && g.add(`${Y.fieldInfo.table}.${Y.fieldInfo.column}`);
      for (const Y of a.getSchemaColumns())
        g.add(Y.fullName);
      const t = [...g].sort();
      if (!Ce.value) return t;
      const o = Ce.value.trim().toLowerCase();
      if (/^[a-z0-9_.]+$/i.test(o)) {
        const Y = t.filter((He) => He.toLowerCase().includes(o));
        if (Y.length > 0) return Y;
      }
      return t;
    });
    function Tl(g) {
      Ce.value.trim() && Ge.value.push({ type: "text", value: Ce.value }), Ge.value.push({ type: "tag", value: g }), Ce.value = "";
    }
    function Sl(g) {
      Ge.value.splice(g, 1);
    }
    function Ul(g) {
      if (g.key === "Backspace" && !Ce.value && Ge.value.length > 0) {
        const t = Ge.value.pop();
        t.type === "text" && (Ce.value = t.value);
      }
    }
    function Dl() {
      setTimeout(() => {
        Tt.value = !1;
      }, 150);
    }
    const tl = j(() => {
      var m, w;
      const g = /* @__PURE__ */ new Set();
      for (const Y of a.getSchemaColumns())
        g.add(Y.fullName);
      for (const Y of Object.values(a.elementConfigs))
        if (Y.fieldInfoList)
          for (const He of Y.fieldInfoList)
            He.table && He.column && g.add(`${He.table}.${He.column}`);
        else (m = Y.fieldInfo) != null && m.table && ((w = Y.fieldInfo) != null && w.column) && g.add(`${Y.fieldInfo.table}.${Y.fieldInfo.column}`);
      const t = [...g].sort();
      if (!de.value) return t;
      const o = de.value.trim().toLowerCase();
      return t.filter((Y) => Y.toLowerCase().includes(o));
    });
    function Ml() {
      setTimeout(() => {
        J.value = !1;
      }, 150);
    }
    function Vl() {
      const g = de.value.trim();
      g && !ve.value.includes(g) && ve.value.push(g), de.value = "";
    }
    function El(g) {
      ve.value.includes(g) || ve.value.push(g), de.value = "";
    }
    function Pl() {
      const g = Ge.value.map((t) => t.value);
      return Ce.value.trim() && g.push(Ce.value.trim()), g.join(" ").replace(/\s+/g, " ").trim();
    }
    function ll() {
      return Ge.value.filter((g) => g.type === "tag").map((g) => g.value);
    }
    function Bl(g, t) {
      if (!g && t.length === 0) {
        Ge.value = [], Ce.value = "";
        return;
      }
      if (t.length === 0) {
        Ge.value = [], Ce.value = g;
        return;
      }
      const o = [];
      let m = g;
      for (const Y of t) {
        const He = m.indexOf(Y);
        if (He >= 0) {
          const Dt = m.substring(0, He).trim();
          Dt && o.push({ type: "text", value: Dt }), o.push({ type: "tag", value: Y }), m = m.substring(He + Y.length);
        }
      }
      const w = m.trim();
      w && o.push({ type: "text", value: w }), o.length === 0 ? Ce.value = g : (Ge.value = o, Ce.value = "");
    }
    function Al() {
      const g = le.value.trim();
      g && !z.value.includes(g) && z.value.push(g), le.value = "";
    }
    function Ll(g) {
      z.value.splice(g, 1);
    }
    function Ol(g) {
      g.key === "Backspace" && !le.value && z.value.length > 0 && z.value.pop();
    }
    function Fl() {
      ce.value.push({ name: "", dbMapping: "", type: "string", required: !1, description: "" });
    }
    function jl(g) {
      ce.value.splice(g, 1);
    }
    function ol(g, t) {
      const o = g + t;
      if (o < 0 || o >= ce.value.length) return;
      const m = ce.value[g];
      ce.value[g] = ce.value[o], ce.value[o] = m, ce.value = [...ce.value];
    }
    function Hl() {
      ge.value.push({ label: "", field: "", color: "#3b82f6" });
    }
    function ql(g) {
      ge.value.splice(g, 1);
    }
    function sl(g, t) {
      const o = g + t;
      if (o < 0 || o >= ge.value.length) return;
      const m = ge.value[g];
      ge.value[g] = ge.value[o], ge.value[o] = m, ge.value = [...ge.value];
    }
    function Rl() {
      h.value.push({ condition: "", message: "", column: "", severity: "error" });
    }
    function zl(g) {
      h.value.splice(g, 1);
    }
    const Kl = j(() => ce.value.filter((g) => g.name).map((g) => g.name));
    function Gl() {
      if (E.value !== "csv_export" && E.value !== "csv_import") return;
      const g = h.value.filter((t) => t.condition || t.message);
      return {
        columns: ce.value.filter((t) => t.name),
        encoding: V.value || void 0,
        delimiter: Pe.value || void 0,
        hasHeaderRow: at.value,
        filenamePattern: Ue.value || void 0,
        sortOrder: Xe.value || void 0,
        filterCondition: fe.value || void 0,
        maxRows: se.value || void 0,
        errorHandling: qe.value || void 0,
        duplicateHandling: H.value || void 0,
        preValidation: S.value || void 0,
        errorDefs: g.length > 0 ? g : void 0
      };
    }
    function Yl() {
      if (E.value === "email")
        return {
          trigger: F.value || "",
          to: q.value || "",
          cc: ne.value || void 0,
          bcc: R.value || void 0,
          subject: ee.value || "",
          bodyTemplate: P.value || void 0,
          templatePath: $.value || void 0,
          variables: D.value.length > 0 ? D.value : void 0,
          attachments: Q.value || void 0,
          conditions: We.value || void 0,
          errorHandling: be.value || void 0
        };
    }
    function Xl() {
      const g = $e.value.trim();
      g && !D.value.includes(g) && D.value.push(g), $e.value = "";
    }
    function Wl(g) {
      D.value.splice(g, 1);
    }
    function Zl(g) {
      g.key === "Backspace" && !$e.value && D.value.length > 0 && D.value.pop();
    }
    function Jl() {
      if (E.value === "sort")
        return {
          sortable: Ze.value,
          sortType: tt.value ? tt.value : void 0,
          sortKey: Ke.value || void 0,
          defaultDirection: Re.value ? Re.value : void 0,
          isDefaultSort: N.value || void 0,
          unsortedOrder: Be.value || void 0,
          description: dt.value || void 0
        };
    }
    At(et, (g) => {
      if (g) {
        const t = a.getMasterDefinition(g);
        t ? (Le.value = t.entries.map((o) => ({ ...o })), Qe.value = !0) : (Le.value = [], Qe.value = !1);
      } else
        Le.value = [], Qe.value = !1;
    });
    function nl() {
      Qe.value = !Qe.value, Qe.value && Le.value.length === 0 && Le.value.push({ value: "", label: "" });
    }
    function il() {
      Le.value.push({ value: "", label: "" });
    }
    function al(g) {
      Le.value.splice(g, 1);
    }
    function Ql() {
      var w;
      if (!et.value) return;
      const [g, t] = et.value.split(".");
      if (!g || !t) return;
      const o = Le.value.filter((Y) => Y.value || Y.label);
      if (o.length === 0) {
        a.deleteMasterDefinition(et.value);
        return;
      }
      const m = a.getMasterDefinition(et.value);
      a.setMasterDefinition({
        id: et.value,
        table: g,
        column: t,
        name: (m == null ? void 0 : m.name) || t,
        columnType: (m == null ? void 0 : m.columnType) || ((w = Me.value[0]) == null ? void 0 : w.type),
        description: m == null ? void 0 : m.description,
        entries: o,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      });
    }
    return (g, t) => (s(), pt(_t, { to: "body" }, [
      je.value ? (s(), n("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: Ie(p, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", {
          class: A(["di-editor-modal", { "di-editor-modal-wide": y.value }])
        }, [
          e("div", _d, [
            t[92] || (t[92] = e("h3", null, "要素情報を編集", -1)),
            e("div", Id, [
              e("button", {
                onClick: f,
                class: "di-btn-auto",
                title: "自動検出"
              }, [
                C(r(zt), { style: { width: "16px", height: "16px" } })
              ]),
              e("button", {
                onClick: p,
                class: "di-editor-close"
              }, [
                C(r(xt), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          L.value ? (s(), n("div", Td, [
            e("span", {
              class: A(["di-source-badge", "di-source-" + Fe.value])
            }, c(L.value), 3),
            yt.value ? (s(), n("span", Sd, c(yt.value), 1)) : v("", !0)
          ])) : v("", !0),
          e("div", Ud, [
            e("div", Dd, [
              t[93] || (t[93] = e("label", { class: "di-context-label di-context-label-tab" }, "タブ:", -1)),
              b(e("input", {
                "onUpdate:modelValue": t[0] || (t[0] = (o) => G.value = o),
                type: "text",
                list: "di-tab-names",
                class: "di-context-input",
                placeholder: "例: 予習, 受講者一覧"
              }, null, 512), [
                [x, G.value]
              ]),
              e("datalist", Md, [
                (s(!0), n(I, null, M(wt.value, (o) => (s(), n("option", {
                  key: o,
                  value: o
                }, null, 8, Vd))), 128))
              ])
            ]),
            e("div", Ed, [
              t[94] || (t[94] = e("label", { class: "di-context-label di-context-label-modal" }, "モーダル:", -1)),
              b(e("input", {
                "onUpdate:modelValue": t[1] || (t[1] = (o) => ot.value = o),
                type: "text",
                list: "di-modal-names",
                class: "di-context-input",
                placeholder: "例: 確認ダイアログ"
              }, null, 512), [
                [x, ot.value]
              ]),
              e("datalist", Pd, [
                (s(!0), n(I, null, M(ft.value, (o) => (s(), n("option", {
                  key: o,
                  value: o
                }, null, 8, Bd))), 128))
              ])
            ])
          ]),
          e("div", Ad, [
            e("button", {
              onClick: t[2] || (t[2] = (o) => U.value = "datasource"),
              class: A(["di-editor-tab", { "di-editor-tab-active": U.value === "datasource" }])
            }, [
              C(r(Ut), { style: { width: "14px", height: "14px" } }),
              t[95] || (t[95] = O(" データソース ", -1))
            ], 2),
            e("button", {
              onClick: t[3] || (t[3] = (o) => U.value = "action"),
              class: A(["di-editor-tab", { "di-editor-tab-active": U.value === "action" }])
            }, [
              C(r(Co), { style: { width: "14px", height: "14px" } }),
              t[96] || (t[96] = O(" アクション ", -1))
            ], 2),
            e("button", {
              onClick: t[4] || (t[4] = (o) => U.value = "form"),
              class: A(["di-editor-tab", { "di-editor-tab-active": U.value === "form" }])
            }, [
              C(r(vo), { style: { width: "14px", height: "14px" } }),
              t[97] || (t[97] = O(" フォーム ", -1))
            ], 2),
            e("button", {
              onClick: t[5] || (t[5] = (o) => U.value = "chart"),
              class: A(["di-editor-tab", { "di-editor-tab-active": U.value === "chart" }])
            }, [
              C(r(no), { style: { width: "14px", height: "14px" } }),
              t[98] || (t[98] = O(" チャート ", -1))
            ], 2)
          ]),
          e("div", Ld, [
            U.value === "datasource" ? (s(), n(I, { key: 0 }, [
              e("div", Od, [
                t[99] || (t[99] = e("label", { class: "di-form-label" }, "表示タイプ", -1)),
                e("div", Fd, [
                  (s(), n(I, null, M(B, (o) => e("button", {
                    key: o.value,
                    onClick: (m) => Z.value = o.value,
                    class: A(["di-display-type-card", { "di-display-type-active": Z.value === o.value }]),
                    style: it(Z.value === o.value ? { borderColor: o.color, background: o.color + "18" } : {})
                  }, [
                    (s(), pt(Nl(o.icon), {
                      style: it([{ width: "20px", height: "20px" }, { color: Z.value === o.value ? o.color : "#64748b" }])
                    }, null, 8, ["style"])),
                    e("span", {
                      class: "di-display-type-label",
                      style: it({ color: Z.value === o.value ? o.color : "#94a3b8" })
                    }, c(o.label), 5),
                    e("span", Hd, c(o.description), 1)
                  ], 14, jd)), 64))
                ])
              ]),
              Z.value === "db_direct" || Z.value === "db_formatted" ? (s(), n(I, { key: 0 }, [
                Me.value.length > 0 ? (s(), n("div", qd, [
                  t[100] || (t[100] = e("label", { class: "di-form-label" }, "登録済みカラム", -1)),
                  e("div", Rd, [
                    (s(!0), n(I, null, M(Me.value, (o, m) => (s(), n("div", {
                      key: m,
                      class: "di-field-tag"
                    }, [
                      e("span", zd, c(o.table) + "." + c(o.column), 1),
                      o.type ? (s(), n("span", Kd, c(o.type), 1)) : v("", !0),
                      e("button", {
                        onClick: (w) => Jt(m),
                        class: "di-field-tag-remove"
                      }, "×", 8, Gd)
                    ]))), 128))
                  ])
                ])) : v("", !0),
                Gt.value ? (s(), n("div", Yd, [
                  e("div", Xd, [
                    e("label", Wd, [
                      C(r(Ut), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                      t[101] || (t[101] = O(" schema.rb から選択 ", -1))
                    ]),
                    e("div", Zd, [
                      b(e("input", {
                        "onUpdate:modelValue": t[6] || (t[6] = (o) => K.value = o),
                        onFocus: t[7] || (t[7] = (o) => nt.value = !0),
                        type: "text",
                        placeholder: "テーブル.カラムを検索... (例: users, email)",
                        class: "di-input di-binding-search"
                      }, null, 544), [
                        [x, K.value]
                      ]),
                      K.value ? (s(), n("button", {
                        key: 0,
                        onClick: t[8] || (t[8] = (o) => {
                          K.value = "", nt.value = !1;
                        }),
                        class: "di-binding-clear"
                      }, [
                        C(r(xt), { style: { width: "14px", height: "14px" } })
                      ])) : v("", !0)
                    ]),
                    nt.value && Et.value.length > 0 ? (s(), n("div", Jd, [
                      (s(!0), n(I, null, M(Et.value, (o) => (s(), n("button", {
                        key: o.fullName,
                        onClick: (m) => Zt(o),
                        class: "di-binding-item has-db"
                      }, [
                        e("div", Nd, [
                          e("span", eu, c(o.fullName), 1),
                          e("span", tu, c(o.type), 1)
                        ]),
                        o.comment ? (s(), n("span", lu, c(o.comment), 1)) : v("", !0)
                      ], 8, Qd))), 128))
                    ])) : nt.value && K.value && Et.value.length === 0 ? (s(), n("div", ou, " 該当するカラムが見つかりません ")) : v("", !0)
                  ])
                ])) : v("", !0),
                Gt.value ? (s(), n("div", su, [...t[102] || (t[102] = [
                  e("span", null, "または手動入力", -1)
                ])])) : v("", !0),
                e("div", nu, [
                  e("div", iu, [
                    t[103] || (t[103] = e("label", { class: "di-form-label" }, "テーブル名 *", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": t[9] || (t[9] = (o) => he.value = o),
                      onFocus: t[10] || (t[10] = (o) => Ft.value = !0),
                      onBlur: t[11] || (t[11] = (o) => $l()),
                      type: "text",
                      placeholder: "users",
                      class: "di-input",
                      autocomplete: "off"
                    }, null, 544), [
                      [x, he.value]
                    ]),
                    Ft.value && Qt.value.length > 0 ? (s(), n("div", au, [
                      (s(!0), n(I, null, M(Qt.value.slice(0, 10), (o) => (s(), n("button", {
                        key: o,
                        onMousedown: Ie((m) => _l(o), ["prevent"]),
                        class: "di-suggest-item"
                      }, c(o), 41, du))), 128))
                    ])) : v("", !0)
                  ]),
                  e("div", uu, [
                    t[104] || (t[104] = e("label", { class: "di-form-label" }, "カラム名 *", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": t[12] || (t[12] = (o) => Oe.value = o),
                      onFocus: t[13] || (t[13] = (o) => jt.value = !0),
                      onBlur: t[14] || (t[14] = (o) => Cl()),
                      type: "text",
                      placeholder: "name",
                      class: "di-input",
                      autocomplete: "off"
                    }, null, 544), [
                      [x, Oe.value]
                    ]),
                    jt.value && Nt.value.length > 0 ? (s(), n("div", ru, [
                      (s(!0), n(I, null, M(Nt.value.slice(0, 10), (o) => (s(), n("button", {
                        key: o,
                        onMousedown: Ie((m) => Il(o), ["prevent"]),
                        class: "di-suggest-item"
                      }, c(o), 41, cu))), 128))
                    ])) : v("", !0)
                  ])
                ]),
                e("div", vu, [
                  t[106] || (t[106] = e("label", { class: "di-form-label" }, "データ型", -1)),
                  b(e("select", {
                    "onUpdate:modelValue": t[15] || (t[15] = (o) => vt.value = o),
                    class: "di-select"
                  }, [
                    t[105] || (t[105] = e("option", { value: "" }, "選択してください", -1)),
                    (s(), n(I, null, M(ae, (o) => e("option", {
                      key: o,
                      value: o
                    }, c(o), 9, pu)), 64))
                  ], 512), [
                    [Se, vt.value]
                  ])
                ]),
                e("button", {
                  onClick: wl,
                  class: "di-btn-add-field",
                  disabled: !he.value || !Oe.value
                }, " + カラムを追加 ", 8, mu),
                et.value ? (s(), n("div", fu, [
                  e("button", {
                    onClick: nl,
                    class: A(["di-btn-condition-toggle", { "di-condition-active": Qe.value }])
                  }, [
                    C(r(ml), { style: { width: "14px", height: "14px" } }),
                    t[107] || (t[107] = O(" マスタ値を定義 ", -1)),
                    It.value ? (s(), n("span", bu, c(It.value.entries.length) + "件", 1)) : v("", !0)
                  ], 2),
                  Qe.value ? (s(), n("div", hu, [
                    Le.value.length > 0 ? (s(), n("div", yu, [
                      t[108] || (t[108] = e("div", { class: "di-master-entries-header" }, [
                        e("span", { class: "di-master-col-val" }, "値"),
                        e("span", { class: "di-master-col-lbl" }, "ラベル"),
                        e("span", { class: "di-master-col-color" }, "色"),
                        e("span", { class: "di-master-col-act" })
                      ], -1)),
                      (s(!0), n(I, null, M(Le.value, (o, m) => (s(), n("div", {
                        key: m,
                        class: "di-master-entry-row"
                      }, [
                        b(e("input", {
                          "onUpdate:modelValue": (w) => o.value = w,
                          placeholder: "1",
                          class: "di-master-input di-master-col-val"
                        }, null, 8, gu), [
                          [x, o.value]
                        ]),
                        b(e("input", {
                          "onUpdate:modelValue": (w) => o.label = w,
                          placeholder: "受付",
                          class: "di-master-input di-master-col-lbl"
                        }, null, 8, ku), [
                          [x, o.label]
                        ]),
                        b(e("input", {
                          "onUpdate:modelValue": (w) => o.color = w,
                          type: "color",
                          class: "di-master-color-input"
                        }, null, 8, xu), [
                          [x, o.color]
                        ]),
                        e("button", {
                          onClick: (w) => al(m),
                          class: "di-master-entry-remove"
                        }, "×", 8, wu)
                      ]))), 128))
                    ])) : v("", !0),
                    e("button", {
                      onClick: il,
                      class: "di-btn-add-field",
                      style: { "margin-top": "4px" }
                    }, " + 値を追加 ")
                  ])) : v("", !0)
                ])) : v("", !0),
                Z.value === "db_formatted" ? (s(), n("div", $u, [
                  t[109] || (t[109] = e("label", { class: "di-form-label" }, "整形方法", -1)),
                  b(e("textarea", {
                    "onUpdate:modelValue": t[16] || (t[16] = (o) => gt.value = o),
                    rows: "2",
                    placeholder: "YYYY年MM月DD日 に整形、姓 + 名 で結合 など",
                    class: "di-textarea"
                  }, null, 512), [
                    [x, gt.value]
                  ])
                ])) : v("", !0),
                e("div", Cu, [
                  e("button", {
                    onClick: t[17] || (t[17] = (o) => xe.value = !xe.value),
                    class: A(["di-btn-condition-toggle", { "di-condition-active": xe.value }])
                  }, [
                    C(r(rl), { style: { width: "14px", height: "14px" } }),
                    t[110] || (t[110] = O(" このカラムは計算値を保存している ", -1)),
                    xe.value ? (s(), n("span", _u, "設定あり")) : v("", !0)
                  ], 2)
                ]),
                xe.value ? (s(), n("div", Iu, [
                  e("div", Tu, [
                    t[111] || (t[111] = e("label", { class: "di-form-label" }, "計算ロジック", -1)),
                    b(e("textarea", {
                      "onUpdate:modelValue": t[18] || (t[18] = (o) => d.value = o),
                      rows: "2",
                      placeholder: "SUM(order_items.price * quantity)、unit_price × quantity など",
                      class: "di-textarea di-textarea-mono"
                    }, null, 512), [
                      [x, d.value]
                    ])
                  ]),
                  e("div", Su, [
                    t[112] || (t[112] = e("label", { class: "di-form-label" }, "元データ（テーブル.カラム）", -1)),
                    e("div", Uu, [
                      (s(!0), n(I, null, M(ve.value, (o, m) => (s(), n("span", {
                        key: m,
                        class: "di-calc-tag"
                      }, [
                        O(c(o) + " ", 1),
                        e("button", {
                          onClick: Ie((w) => ve.value.splice(m, 1), ["stop"]),
                          class: "di-calc-tag-remove"
                        }, "×", 8, Du)
                      ]))), 128)),
                      b(e("input", {
                        "onUpdate:modelValue": t[19] || (t[19] = (o) => de.value = o),
                        onFocus: t[20] || (t[20] = (o) => J.value = !0),
                        onBlur: Ml,
                        onKeydown: t[21] || (t[21] = Pt(Ie((o) => Vl(), ["prevent"]), ["enter"])),
                        type: "text",
                        placeholder: "order_items.price",
                        class: "di-calc-tags-field",
                        autocomplete: "off"
                      }, null, 544), [
                        [x, de.value]
                      ])
                    ]),
                    J.value && tl.value.length > 0 ? (s(), n("div", Mu, [
                      (s(!0), n(I, null, M(tl.value.slice(0, 12), (o) => (s(), n("button", {
                        key: o,
                        onMousedown: Ie((m) => El(o), ["prevent"]),
                        class: "di-suggest-item"
                      }, [
                        C(r(Ut), { style: { width: "10px", height: "10px", opacity: "0.5", "flex-shrink": "0" } }),
                        O(" " + c(o), 1)
                      ], 40, Vu))), 128))
                    ])) : v("", !0),
                    t[113] || (t[113] = e("span", { class: "di-form-hint" }, "Enter で追加、またはドロップダウンから選択", -1))
                  ]),
                  e("div", Eu, [
                    t[115] || (t[115] = e("label", { class: "di-form-label" }, "計算タイミング", -1)),
                    b(e("select", {
                      "onUpdate:modelValue": t[22] || (t[22] = (o) => ue.value = o),
                      class: "di-select"
                    }, [...t[114] || (t[114] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "on_save" }, "保存時（アプリ側で計算）", -1),
                      e("option", { value: "trigger" }, "DBトリガー", -1),
                      e("option", { value: "batch" }, "バッチ（定期実行）", -1),
                      e("option", { value: "realtime" }, "リアルタイム（ビュー/マテビュー）", -1)
                    ])], 512), [
                      [Se, ue.value]
                    ])
                  ])
                ])) : v("", !0)
              ], 64)) : v("", !0),
              Z.value === "calculated" ? (s(), n("div", Pu, [
                t[116] || (t[116] = e("label", { class: "di-form-label" }, "計算ロジック", -1)),
                e("div", {
                  class: "di-calc-tags-input",
                  onClick: t[26] || (t[26] = (o) => {
                    var m;
                    return (m = g.$refs.calcInputEl) == null ? void 0 : m.focus();
                  })
                }, [
                  (s(!0), n(I, null, M(Ge.value, (o, m) => (s(), n(I, { key: m }, [
                    o.type === "tag" ? (s(), n("span", Bu, [
                      O(c(o.value) + " ", 1),
                      e("button", {
                        onClick: Ie((w) => Sl(m), ["stop"]),
                        class: "di-calc-tag-remove"
                      }, "×", 8, Au)
                    ])) : (s(), n("span", Lu, c(o.value), 1))
                  ], 64))), 128)),
                  b(e("input", {
                    ref: "calcInputEl",
                    "onUpdate:modelValue": t[23] || (t[23] = (o) => Ce.value = o),
                    onFocus: t[24] || (t[24] = (o) => Tt.value = !0),
                    onBlur: t[25] || (t[25] = (o) => Dl()),
                    onKeydown: Ul,
                    type: "text",
                    placeholder: Ge.value.length === 0 ? "カラムを選択 or 自由入力 (例: × 2)" : "",
                    class: "di-calc-tags-field",
                    autocomplete: "off"
                  }, null, 40, Ou), [
                    [x, Ce.value]
                  ])
                ]),
                Tt.value && el.value.length > 0 ? (s(), n("div", Fu, [
                  (s(!0), n(I, null, M(el.value.slice(0, 12), (o) => (s(), n("button", {
                    key: o,
                    onMousedown: Ie((m) => Tl(o), ["prevent"]),
                    class: "di-suggest-item"
                  }, [
                    C(r(Ut), { style: { width: "10px", height: "10px", opacity: "0.5", "flex-shrink": "0" } }),
                    O(" " + c(o), 1)
                  ], 40, ju))), 128))
                ])) : v("", !0),
                t[117] || (t[117] = e("span", { class: "di-form-hint" }, "DBカラムはドロップダウンから挿入、演算子や数値はそのまま入力", -1))
              ])) : v("", !0),
              Z.value === "static" || Z.value === "other" ? (s(), n("div", Hu, [
                t[118] || (t[118] = e("label", { class: "di-form-label" }, "メモ", -1)),
                b(e("textarea", {
                  "onUpdate:modelValue": t[27] || (t[27] = (o) => re.value = o),
                  rows: "4",
                  placeholder: "この要素についてのメモ...",
                  class: "di-textarea"
                }, null, 512), [
                  [x, re.value]
                ])
              ])) : v("", !0),
              Z.value && Z.value !== "other" ? (s(), n(I, { key: 3 }, [
                e("div", qu, [
                  e("button", {
                    onClick: t[28] || (t[28] = (o) => ye.value = !ye.value),
                    class: A(["di-btn-condition-toggle", { "di-condition-active": ye.value || Ve.value }])
                  }, [
                    C(r(yl), { style: { width: "14px", height: "14px" } }),
                    t[119] || (t[119] = O(" 条件付き表示 ", -1)),
                    Ve.value ? (s(), n("span", Ru, "設定あり")) : v("", !0)
                  ], 2)
                ]),
                ye.value ? (s(), n("div", zu, [
                  e("div", Ku, [
                    t[120] || (t[120] = e("label", { class: "di-form-label" }, "表示条件", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": t[29] || (t[29] = (o) => Ve.value = o),
                      type: "text",
                      placeholder: "管理者ロール時のみ / ステータスがactiveの時",
                      class: "di-input"
                    }, null, 512), [
                      [x, Ve.value]
                    ])
                  ]),
                  e("div", Gu, [
                    t[121] || (t[121] = e("label", { class: "di-form-label" }, "判定カラム", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": t[30] || (t[30] = (o) => Ee.value = o),
                      type: "text",
                      placeholder: "users.role / orders.status",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [x, Ee.value]
                    ])
                  ]),
                  e("div", Yu, [
                    e("div", Xu, [
                      t[123] || (t[123] = e("label", { class: "di-form-label" }, "条件不一致時の挙動", -1)),
                      b(e("select", {
                        "onUpdate:modelValue": t[31] || (t[31] = (o) => Ye.value = o),
                        class: "di-select"
                      }, [...t[122] || (t[122] = [
                        e("option", { value: "" }, "未指定", -1),
                        e("option", { value: "hidden" }, "非表示", -1),
                        e("option", { value: "disabled" }, "無効化 (グレーアウト)", -1),
                        e("option", { value: "different_value" }, "別の値を表示", -1),
                        e("option", { value: "empty" }, "空欄", -1)
                      ])], 512), [
                        [Se, Ye.value]
                      ])
                    ])
                  ]),
                  Ye.value === "different_value" ? (s(), n("div", Wu, [
                    t[124] || (t[124] = e("label", { class: "di-form-label" }, "代わりに表示する値", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": t[32] || (t[32] = (o) => Ne.value = o),
                      type: "text",
                      placeholder: "「権限がありません」/ 「***」",
                      class: "di-input"
                    }, null, 512), [
                      [x, Ne.value]
                    ])
                  ])) : v("", !0)
                ])) : v("", !0)
              ], 64)) : v("", !0),
              Z.value === "db_direct" || Z.value === "db_formatted" || Z.value === "calculated" ? (s(), n(I, { key: 4 }, [
                t[132] || (t[132] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "表示の詳細")
                ], -1)),
                e("div", Zu, [
                  e("div", Ju, [
                    t[125] || (t[125] = e("label", { class: "di-form-label" }, "サンプル値", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": t[33] || (t[33] = (o) => st.value = o),
                      type: "text",
                      placeholder: "12,500 / 田中太郎",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [x, st.value]
                    ])
                  ]),
                  e("div", Qu, [
                    t[126] || (t[126] = e("label", { class: "di-form-label" }, "単位", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": t[34] || (t[34] = (o) => Ct.value = o),
                      type: "text",
                      placeholder: "円 / %",
                      class: "di-input"
                    }, null, 512), [
                      [x, Ct.value]
                    ])
                  ])
                ]),
                e("div", Nu, [
                  e("div", er, [
                    t[128] || (t[128] = e("label", { class: "di-form-label" }, "小数点の扱い", -1)),
                    b(e("select", {
                      "onUpdate:modelValue": t[35] || (t[35] = (o) => $t.value = o),
                      class: "di-select"
                    }, [...t[127] || (t[127] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "round" }, "四捨五入", -1),
                      e("option", { value: "floor" }, "切り捨て", -1),
                      e("option", { value: "ceil" }, "切り上げ", -1),
                      e("option", { value: "decimal_1" }, "小数第1位まで", -1),
                      e("option", { value: "decimal_2" }, "小数第2位まで", -1),
                      e("option", { value: "integer" }, "整数のみ", -1)
                    ])], 512), [
                      [Se, $t.value]
                    ])
                  ]),
                  e("div", tr, [
                    t[129] || (t[129] = e("label", { class: "di-form-label" }, "NULL/ゼロ時", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": t[36] || (t[36] = (o) => ht.value = o),
                      type: "text",
                      placeholder: "- / 0 / 非表示 / N/A",
                      class: "di-input"
                    }, null, 512), [
                      [x, ht.value]
                    ])
                  ])
                ]),
                e("div", lr, [
                  t[130] || (t[130] = e("label", { class: "di-form-label" }, "表示フォーマット", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": t[37] || (t[37] = (o) => kt.value = o),
                    type: "text",
                    placeholder: "カンマ区切り / ¥記号付き / YYYY/MM/DD",
                    class: "di-input"
                  }, null, 512), [
                    [x, kt.value]
                  ])
                ]),
                e("div", or, [
                  t[131] || (t[131] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                  b(e("textarea", {
                    "onUpdate:modelValue": t[38] || (t[38] = (o) => re.value = o),
                    rows: "2",
                    placeholder: "補足情報があれば...",
                    class: "di-textarea"
                  }, null, 512), [
                    [x, re.value]
                  ])
                ])
              ], 64)) : v("", !0)
            ], 64)) : v("", !0),
            U.value === "action" ? (s(), n(I, { key: 1 }, [
              e("div", sr, [
                t[134] || (t[134] = e("label", { class: "di-form-label" }, "アクションタイプ", -1)),
                b(e("select", {
                  "onUpdate:modelValue": t[39] || (t[39] = (o) => E.value = o),
                  class: "di-select"
                }, [...t[133] || (t[133] = [
                  e("option", { value: "" }, "選択してください", -1),
                  e("option", { value: "navigate" }, "画面遷移", -1),
                  e("option", { value: "api" }, "API呼び出し", -1),
                  e("option", { value: "modal" }, "モーダル表示", -1),
                  e("option", { value: "emit" }, "イベント発火", -1),
                  e("option", { value: "function" }, "関数実行", -1),
                  e("option", { value: "csv_export" }, "CSV出力", -1),
                  e("option", { value: "csv_import" }, "CSV取込", -1),
                  e("option", { value: "email" }, "メール送信", -1),
                  e("option", { value: "sort" }, "ソート", -1)
                ])], 512), [
                  [Se, E.value]
                ])
              ]),
              e("div", nr, [
                t[135] || (t[135] = e("label", { class: "di-form-label" }, "ターゲット", -1)),
                b(e("input", {
                  "onUpdate:modelValue": t[40] || (t[40] = (o) => te.value = o),
                  type: "text",
                  placeholder: E.value === "navigate" ? "/tasks" : E.value === "api" ? "/api/users" : E.value === "modal" ? "confirm-dialog" : E.value === "csv_export" ? "/api/export/users" : E.value === "csv_import" ? "/api/import/users" : "",
                  class: "di-input di-input-mono"
                }, null, 8, ir), [
                  [x, te.value]
                ])
              ]),
              E.value === "api" ? (s(), n("div", ar, [
                t[137] || (t[137] = e("label", { class: "di-form-label" }, "HTTPメソッド", -1)),
                b(e("select", {
                  "onUpdate:modelValue": t[41] || (t[41] = (o) => oe.value = o),
                  class: "di-select"
                }, [...t[136] || (t[136] = [
                  e("option", { value: "" }, "選択してください", -1),
                  e("option", { value: "GET" }, "GET", -1),
                  e("option", { value: "POST" }, "POST", -1),
                  e("option", { value: "PUT" }, "PUT", -1),
                  e("option", { value: "DELETE" }, "DELETE", -1),
                  e("option", { value: "PATCH" }, "PATCH", -1)
                ])], 512), [
                  [Se, oe.value]
                ])
              ])) : v("", !0),
              e("div", dr, [
                t[138] || (t[138] = e("label", { class: "di-form-label" }, "説明", -1)),
                b(e("textarea", {
                  "onUpdate:modelValue": t[42] || (t[42] = (o) => ie.value = o),
                  rows: "3",
                  placeholder: "このアクションの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [x, ie.value]
                ])
              ]),
              E.value === "csv_export" || E.value === "csv_import" ? (s(), n(I, { key: 1 }, [
                e("div", ur, [
                  e("span", null, [
                    C(r(kl), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[139] || (t[139] = O(" CSV仕様", -1))
                  ])
                ]),
                e("div", rr, [
                  t[146] || (t[146] = e("label", { class: "di-form-label" }, "ファイル設定", -1)),
                  e("div", cr, [
                    e("div", vr, [
                      t[141] || (t[141] = e("label", { class: "di-form-label" }, "エンコーディング", -1)),
                      b(e("select", {
                        "onUpdate:modelValue": t[43] || (t[43] = (o) => V.value = o),
                        class: "di-select"
                      }, [...t[140] || (t[140] = [
                        e("option", { value: "UTF-8" }, "UTF-8", -1),
                        e("option", { value: "Shift_JIS" }, "Shift_JIS", -1),
                        e("option", { value: "EUC-JP" }, "EUC-JP", -1),
                        e("option", { value: "UTF-8 BOM" }, "UTF-8 BOM", -1)
                      ])], 512), [
                        [Se, V.value]
                      ])
                    ]),
                    e("div", pr, [
                      t[143] || (t[143] = e("label", { class: "di-form-label" }, "区切り文字", -1)),
                      b(e("select", {
                        "onUpdate:modelValue": t[44] || (t[44] = (o) => Pe.value = o),
                        class: "di-select"
                      }, [...t[142] || (t[142] = [
                        e("option", { value: "," }, "カンマ (,)", -1),
                        e("option", { value: "	" }, "タブ", -1),
                        e("option", { value: "|" }, "パイプ (|)", -1)
                      ])], 512), [
                        [Se, Pe.value]
                      ])
                    ])
                  ]),
                  e("div", mr, [
                    e("label", fr, [
                      b(e("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": t[45] || (t[45] = (o) => at.value = o),
                        class: "di-checkbox"
                      }, null, 512), [
                        [Ht, at.value]
                      ]),
                      t[144] || (t[144] = O(" ヘッダー行あり ", -1))
                    ])
                  ]),
                  e("div", br, [
                    t[145] || (t[145] = e("label", { class: "di-form-label" }, "ファイル名パターン", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": t[46] || (t[46] = (o) => Ue.value = o),
                      type: "text",
                      placeholder: "users_{YYYYMMDD}.csv",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [x, Ue.value]
                    ])
                  ])
                ]),
                e("div", hr, [
                  t[149] || (t[149] = e("label", { class: "di-form-label" }, "CSV列定義", -1)),
                  ce.value.length > 0 ? (s(), n("div", yr, [
                    t[148] || (t[148] = e("div", { class: "di-csv-columns-header" }, [
                      e("span", { class: "di-csv-col-no" }, "No"),
                      e("span", { class: "di-csv-col-name" }, "項目名"),
                      e("span", { class: "di-csv-col-db" }, "DBマッピング"),
                      e("span", { class: "di-csv-col-proc" }, "加工"),
                      e("span", { class: "di-csv-col-type" }, "型"),
                      e("span", { class: "di-csv-col-req" }, "必須"),
                      e("span", { class: "di-csv-col-desc" }, "説明"),
                      e("span", { class: "di-csv-col-act" })
                    ], -1)),
                    (s(!0), n(I, null, M(ce.value, (o, m) => (s(), n("div", {
                      key: m,
                      class: "di-csv-column-row"
                    }, [
                      e("span", gr, c(m + 1), 1),
                      b(e("input", {
                        "onUpdate:modelValue": (w) => o.name = w,
                        placeholder: "項目名",
                        class: "di-csv-input di-csv-col-name"
                      }, null, 8, kr), [
                        [x, o.name]
                      ]),
                      b(e("input", {
                        "onUpdate:modelValue": (w) => o.dbMapping = w,
                        placeholder: "table.col",
                        class: "di-csv-input di-csv-col-db"
                      }, null, 8, xr), [
                        [x, o.dbMapping]
                      ]),
                      b(e("input", {
                        "onUpdate:modelValue": (w) => o.processing = w,
                        placeholder: "姓+名, IF...",
                        class: "di-csv-input di-csv-col-proc"
                      }, null, 8, wr), [
                        [x, o.processing]
                      ]),
                      b(e("select", {
                        "onUpdate:modelValue": (w) => o.type = w,
                        class: "di-csv-select di-csv-col-type"
                      }, [...t[147] || (t[147] = [
                        e("option", { value: "" }, "-", -1),
                        e("option", { value: "string" }, "string", -1),
                        e("option", { value: "integer" }, "integer", -1),
                        e("option", { value: "decimal" }, "decimal", -1),
                        e("option", { value: "date" }, "date", -1),
                        e("option", { value: "datetime" }, "datetime", -1),
                        e("option", { value: "boolean" }, "boolean", -1)
                      ])], 8, $r), [
                        [Se, o.type]
                      ]),
                      e("label", Cr, [
                        b(e("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": (w) => o.required = w,
                          class: "di-checkbox"
                        }, null, 8, _r), [
                          [Ht, o.required]
                        ])
                      ]),
                      b(e("input", {
                        "onUpdate:modelValue": (w) => o.description = w,
                        placeholder: "備考",
                        class: "di-csv-input di-csv-col-desc"
                      }, null, 8, Ir), [
                        [x, o.description]
                      ]),
                      e("div", Tr, [
                        e("button", {
                          onClick: (w) => ol(m, -1),
                          disabled: m === 0,
                          class: "di-csv-move-btn",
                          title: "上へ"
                        }, [
                          C(r(cl), { style: { width: "12px", height: "12px" } })
                        ], 8, Sr),
                        e("button", {
                          onClick: (w) => ol(m, 1),
                          disabled: m === ce.value.length - 1,
                          class: "di-csv-move-btn",
                          title: "下へ"
                        }, [
                          C(r(Wt), { style: { width: "12px", height: "12px" } })
                        ], 8, Ur),
                        e("button", {
                          onClick: (w) => jl(m),
                          class: "di-csv-remove-btn",
                          title: "削除"
                        }, "×", 8, Dr)
                      ])
                    ]))), 128))
                  ])) : v("", !0),
                  e("button", {
                    onClick: Fl,
                    class: "di-btn-add-field"
                  }, " + 列を追加 ")
                ]),
                E.value === "csv_export" ? (s(), n(I, { key: 0 }, [
                  t[153] || (t[153] = e("div", { class: "di-form-divider" }, [
                    e("span", null, "出力オプション")
                  ], -1)),
                  e("div", Mr, [
                    t[150] || (t[150] = e("label", { class: "di-form-label" }, "ソート順", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": t[47] || (t[47] = (o) => Xe.value = o),
                      type: "text",
                      placeholder: "created_at DESC",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [x, Xe.value]
                    ])
                  ]),
                  e("div", Vr, [
                    t[151] || (t[151] = e("label", { class: "di-form-label" }, "抽出条件", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": t[48] || (t[48] = (o) => fe.value = o),
                      type: "text",
                      placeholder: "status = 'active'",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [x, fe.value]
                    ])
                  ]),
                  e("div", Er, [
                    t[152] || (t[152] = e("label", { class: "di-form-label" }, "最大行数", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": t[49] || (t[49] = (o) => se.value = o),
                      type: "number",
                      placeholder: "10000",
                      class: "di-input"
                    }, null, 512), [
                      [
                        x,
                        se.value,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ], 64)) : v("", !0),
                E.value === "csv_import" ? (s(), n(I, { key: 1 }, [
                  t[159] || (t[159] = e("div", { class: "di-form-divider" }, [
                    e("span", null, "取込オプション")
                  ], -1)),
                  e("div", Pr, [
                    t[155] || (t[155] = e("label", { class: "di-form-label" }, "エラー処理", -1)),
                    b(e("select", {
                      "onUpdate:modelValue": t[50] || (t[50] = (o) => qe.value = o),
                      class: "di-select"
                    }, [...t[154] || (t[154] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "stop_on_first" }, "最初のエラーで停止", -1),
                      e("option", { value: "skip_and_continue" }, "スキップして続行", -1),
                      e("option", { value: "collect_all" }, "全エラー収集", -1)
                    ])], 512), [
                      [Se, qe.value]
                    ])
                  ]),
                  e("div", Br, [
                    t[157] || (t[157] = e("label", { class: "di-form-label" }, "重複処理", -1)),
                    b(e("select", {
                      "onUpdate:modelValue": t[51] || (t[51] = (o) => H.value = o),
                      class: "di-select"
                    }, [...t[156] || (t[156] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "skip" }, "スキップ", -1),
                      e("option", { value: "overwrite" }, "上書き", -1),
                      e("option", { value: "error" }, "エラー", -1)
                    ])], 512), [
                      [Se, H.value]
                    ])
                  ]),
                  e("div", Ar, [
                    t[158] || (t[158] = e("label", { class: "di-form-label" }, "事前バリデーション", -1)),
                    b(e("textarea", {
                      "onUpdate:modelValue": t[52] || (t[52] = (o) => S.value = o),
                      rows: "2",
                      placeholder: "取込前のチェック内容...",
                      class: "di-textarea"
                    }, null, 512), [
                      [x, S.value]
                    ])
                  ])
                ], 64)) : v("", !0),
                t[163] || (t[163] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "エラー定義")
                ], -1)),
                e("div", Lr, [
                  h.value.length > 0 ? (s(), n("div", Or, [
                    t[162] || (t[162] = e("div", { class: "di-csv-columns-header" }, [
                      e("span", { class: "di-csv-err-col" }, "対象列"),
                      e("span", { class: "di-csv-err-cond" }, "エラー条件"),
                      e("span", { class: "di-csv-err-msg" }, "エラーメッセージ"),
                      e("span", { class: "di-csv-err-sev" }, "種別"),
                      e("span", { class: "di-csv-err-act" })
                    ], -1)),
                    (s(!0), n(I, null, M(h.value, (o, m) => (s(), n("div", {
                      key: m,
                      class: "di-csv-column-row"
                    }, [
                      b(e("select", {
                        "onUpdate:modelValue": (w) => o.column = w,
                        class: "di-csv-select di-csv-err-col"
                      }, [
                        t[160] || (t[160] = e("option", { value: "" }, "（全体）", -1)),
                        (s(!0), n(I, null, M(Kl.value, (w) => (s(), n("option", {
                          key: w,
                          value: w
                        }, c(w), 9, jr))), 128))
                      ], 8, Fr), [
                        [Se, o.column]
                      ]),
                      b(e("input", {
                        "onUpdate:modelValue": (w) => o.condition = w,
                        placeholder: "必須項目が空",
                        class: "di-csv-input di-csv-err-cond"
                      }, null, 8, Hr), [
                        [x, o.condition]
                      ]),
                      b(e("input", {
                        "onUpdate:modelValue": (w) => o.message = w,
                        placeholder: "○○は必須です",
                        class: "di-csv-input di-csv-err-msg"
                      }, null, 8, qr), [
                        [x, o.message]
                      ]),
                      b(e("select", {
                        "onUpdate:modelValue": (w) => o.severity = w,
                        class: "di-csv-select di-csv-err-sev"
                      }, [...t[161] || (t[161] = [
                        e("option", { value: "error" }, "エラー", -1),
                        e("option", { value: "warning" }, "警告", -1)
                      ])], 8, Rr), [
                        [Se, o.severity]
                      ]),
                      e("button", {
                        onClick: (w) => zl(m),
                        class: "di-csv-remove-btn",
                        title: "削除"
                      }, "×", 8, zr)
                    ]))), 128))
                  ])) : v("", !0),
                  e("button", {
                    onClick: Rl,
                    class: "di-btn-add-field"
                  }, " + エラー定義を追加 ")
                ])
              ], 64)) : v("", !0),
              E.value === "email" ? (s(), n(I, { key: 2 }, [
                e("div", Kr, [
                  e("span", null, [
                    C(r(bo), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[164] || (t[164] = O(" メール基本設定", -1))
                  ])
                ]),
                e("div", Gr, [
                  e("div", Yr, [
                    t[165] || (t[165] = e("label", { class: "di-form-label" }, "トリガー *", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": t[53] || (t[53] = (o) => F.value = o),
                      type: "text",
                      placeholder: "注文確定時、ボタンクリック",
                      class: "di-input"
                    }, null, 512), [
                      [x, F.value]
                    ])
                  ]),
                  e("div", Xr, [
                    t[166] || (t[166] = e("label", { class: "di-form-label" }, "宛先 *", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": t[54] || (t[54] = (o) => q.value = o),
                      type: "text",
                      placeholder: "ユーザーメール、管理者固定",
                      class: "di-input"
                    }, null, 512), [
                      [x, q.value]
                    ])
                  ])
                ]),
                e("div", Wr, [
                  e("div", Zr, [
                    t[167] || (t[167] = e("label", { class: "di-form-label" }, "CC", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": t[55] || (t[55] = (o) => ne.value = o),
                      type: "text",
                      placeholder: "CC宛先",
                      class: "di-input"
                    }, null, 512), [
                      [x, ne.value]
                    ])
                  ]),
                  e("div", Jr, [
                    t[168] || (t[168] = e("label", { class: "di-form-label" }, "BCC", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": t[56] || (t[56] = (o) => R.value = o),
                      type: "text",
                      placeholder: "BCC宛先",
                      class: "di-input"
                    }, null, 512), [
                      [x, R.value]
                    ])
                  ])
                ]),
                e("div", Qr, [
                  t[169] || (t[169] = e("label", { class: "di-form-label" }, "件名テンプレート *", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": t[57] || (t[57] = (o) => ee.value = o),
                    type: "text",
                    placeholder: "【注文確認】ご注文番号 {orderNumber}",
                    class: "di-input"
                  }, null, 512), [
                    [x, ee.value]
                  ])
                ]),
                e("div", Nr, [
                  t[170] || (t[170] = e("label", { class: "di-form-label" }, "本文テンプレート概要", -1)),
                  b(e("textarea", {
                    "onUpdate:modelValue": t[58] || (t[58] = (o) => P.value = o),
                    rows: "3",
                    placeholder: "本文の概要を記述...",
                    class: "di-textarea"
                  }, null, 512), [
                    [x, P.value]
                  ])
                ]),
                e("div", ec, [
                  t[171] || (t[171] = e("label", { class: "di-form-label" }, "テンプレートファイルパス", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": t[59] || (t[59] = (o) => $.value = o),
                    type: "text",
                    placeholder: "resources/mail/order_confirm.blade.php",
                    class: "di-input di-input-mono"
                  }, null, 512), [
                    [x, $.value]
                  ])
                ]),
                t[176] || (t[176] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "差し込み変数")
                ], -1)),
                e("div", tc, [
                  e("div", lc, [
                    (s(!0), n(I, null, M(D.value, (o, m) => (s(), n("span", {
                      key: m,
                      class: "di-calc-tag"
                    }, [
                      O(c(o) + " ", 1),
                      e("button", {
                        onClick: Ie((w) => Wl(m), ["stop"]),
                        class: "di-calc-tag-remove"
                      }, "×", 8, oc)
                    ]))), 128)),
                    b(e("input", {
                      "onUpdate:modelValue": t[60] || (t[60] = (o) => $e.value = o),
                      onKeydown: [
                        t[61] || (t[61] = Pt(Ie((o) => Xl(), ["prevent"]), ["enter"])),
                        Zl
                      ],
                      type: "text",
                      placeholder: "変数名を入力してEnter (例: userName)",
                      class: "di-calc-tags-field",
                      autocomplete: "off"
                    }, null, 544), [
                      [x, $e.value]
                    ])
                  ]),
                  t[172] || (t[172] = e("span", { class: "di-form-hint" }, "Enter で追加", -1))
                ]),
                t[177] || (t[177] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "オプション")
                ], -1)),
                e("div", sc, [
                  t[173] || (t[173] = e("label", { class: "di-form-label" }, "添付ファイル", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": t[62] || (t[62] = (o) => Q.value = o),
                    type: "text",
                    placeholder: "添付ファイルの説明",
                    class: "di-input"
                  }, null, 512), [
                    [x, Q.value]
                  ])
                ]),
                e("div", nc, [
                  t[174] || (t[174] = e("label", { class: "di-form-label" }, "送信条件", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": t[63] || (t[63] = (o) => We.value = o),
                    type: "text",
                    placeholder: "メール送信設定がONの場合",
                    class: "di-input"
                  }, null, 512), [
                    [x, We.value]
                  ])
                ]),
                e("div", ic, [
                  t[175] || (t[175] = e("label", { class: "di-form-label" }, "エラー処理", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": t[64] || (t[64] = (o) => be.value = o),
                    type: "text",
                    placeholder: "キューに入れてリトライ",
                    class: "di-input"
                  }, null, 512), [
                    [x, be.value]
                  ])
                ])
              ], 64)) : v("", !0),
              E.value === "sort" ? (s(), n(I, { key: 3 }, [
                e("div", ac, [
                  e("span", null, [
                    C(r(so), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[178] || (t[178] = O(" ソート設定", -1))
                  ])
                ]),
                e("div", dc, [
                  e("label", uc, [
                    b(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": t[65] || (t[65] = (o) => Ze.value = o),
                      class: "di-checkbox"
                    }, null, 512), [
                      [Ht, Ze.value]
                    ]),
                    t[179] || (t[179] = O(" このカラムはソート可能 ", -1))
                  ])
                ]),
                Ze.value ? (s(), n(I, { key: 0 }, [
                  e("div", rc, [
                    e("div", cc, [
                      t[181] || (t[181] = e("label", { class: "di-form-label" }, "データ型", -1)),
                      b(e("select", {
                        "onUpdate:modelValue": t[66] || (t[66] = (o) => tt.value = o),
                        class: "di-select"
                      }, [...t[180] || (t[180] = [
                        e("option", { value: "" }, "未指定", -1),
                        e("option", { value: "string" }, "文字列", -1),
                        e("option", { value: "number" }, "数値", -1),
                        e("option", { value: "date" }, "日付", -1),
                        e("option", { value: "custom" }, "カスタム", -1)
                      ])], 512), [
                        [Se, tt.value]
                      ])
                    ]),
                    e("div", vc, [
                      t[183] || (t[183] = e("label", { class: "di-form-label" }, "デフォルト方向", -1)),
                      b(e("select", {
                        "onUpdate:modelValue": t[67] || (t[67] = (o) => Re.value = o),
                        class: "di-select"
                      }, [...t[182] || (t[182] = [
                        e("option", { value: "" }, "未指定", -1),
                        e("option", { value: "asc" }, "昇順 (A→Z, 1→9)", -1),
                        e("option", { value: "desc" }, "降順 (Z→A, 9→1)", -1)
                      ])], 512), [
                        [Se, Re.value]
                      ])
                    ])
                  ]),
                  e("div", pc, [
                    t[184] || (t[184] = e("label", { class: "di-form-label" }, "ソートキー (DBカラム/APIフィールド)", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": t[68] || (t[68] = (o) => Ke.value = o),
                      type: "text",
                      placeholder: "users.name / created_at",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [x, Ke.value]
                    ])
                  ]),
                  e("div", mc, [
                    e("label", fc, [
                      b(e("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": t[69] || (t[69] = (o) => N.value = o),
                        class: "di-checkbox"
                      }, null, 512), [
                        [Ht, N.value]
                      ]),
                      t[185] || (t[185] = O(" 初期表示時のデフォルトソート ", -1))
                    ])
                  ])
                ], 64)) : v("", !0),
                e("div", bc, [
                  t[186] || (t[186] = e("label", { class: "di-form-label" }, "未ソート時の並び順", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": t[70] || (t[70] = (o) => Be.value = o),
                    type: "text",
                    placeholder: "ID昇順 / 登録日降順 / APIレスポンス順",
                    class: "di-input"
                  }, null, 512), [
                    [x, Be.value]
                  ])
                ]),
                e("div", hc, [
                  t[187] || (t[187] = e("label", { class: "di-form-label" }, "補足", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": t[71] || (t[71] = (o) => dt.value = o),
                    type: "text",
                    placeholder: "サーバーサイドソート / ページネーション時はリセット",
                    class: "di-input"
                  }, null, 512), [
                    [x, dt.value]
                  ])
                ])
              ], 64)) : v("", !0),
              e("div", yc, [
                t[188] || (t[188] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                b(e("textarea", {
                  "onUpdate:modelValue": t[72] || (t[72] = (o) => re.value = o),
                  rows: "2",
                  placeholder: "補足情報があれば...",
                  class: "di-textarea"
                }, null, 512), [
                  [x, re.value]
                ])
              ])
            ], 64)) : v("", !0),
            U.value === "form" ? (s(), n(I, { key: 2 }, [
              e("div", gc, [
                t[190] || (t[190] = e("label", { class: "di-form-label" }, "入力タイプ", -1)),
                b(e("select", {
                  "onUpdate:modelValue": t[73] || (t[73] = (o) => ke.value = o),
                  class: "di-select"
                }, [...t[189] || (t[189] = [
                  e("option", { value: "" }, "選択してください", -1),
                  e("option", { value: "text" }, "テキスト (text)", -1),
                  e("option", { value: "number" }, "数値 (number)", -1),
                  e("option", { value: "email" }, "メール (email)", -1),
                  e("option", { value: "password" }, "パスワード (password)", -1),
                  e("option", { value: "tel" }, "電話番号 (tel)", -1),
                  e("option", { value: "url" }, "URL (url)", -1),
                  e("option", { value: "date" }, "日付 (date)", -1),
                  e("option", { value: "datetime-local" }, "日時 (datetime-local)", -1),
                  e("option", { value: "select" }, "セレクト (select)", -1),
                  e("option", { value: "textarea" }, "テキストエリア (textarea)", -1),
                  e("option", { value: "checkbox" }, "チェックボックス (checkbox)", -1),
                  e("option", { value: "radio" }, "ラジオボタン (radio)", -1),
                  e("option", { value: "file" }, "ファイル (file)", -1)
                ])], 512), [
                  [Se, ke.value]
                ])
              ]),
              Me.value.length > 0 ? (s(), n("div", kc, [
                t[191] || (t[191] = e("label", { class: "di-form-label" }, "対応カラム", -1)),
                e("div", xc, [
                  (s(!0), n(I, null, M(Me.value, (o, m) => (s(), n("div", {
                    key: m,
                    class: "di-field-tag"
                  }, [
                    e("span", wc, c(o.table) + "." + c(o.column), 1),
                    o.type ? (s(), n("span", $c, c(o.type), 1)) : v("", !0),
                    e("button", {
                      onClick: (w) => Jt(m),
                      class: "di-field-tag-remove"
                    }, "×", 8, Cc)
                  ]))), 128))
                ])
              ])) : v("", !0),
              Gt.value ? (s(), n("div", _c, [
                e("div", Ic, [
                  e("label", Tc, [
                    C(r(Ut), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[192] || (t[192] = O(" 対応するDBカラム ", -1))
                  ]),
                  e("div", Sc, [
                    b(e("input", {
                      "onUpdate:modelValue": t[74] || (t[74] = (o) => K.value = o),
                      onFocus: t[75] || (t[75] = (o) => nt.value = !0),
                      type: "text",
                      placeholder: "テーブル.カラムを検索...",
                      class: "di-input di-binding-search"
                    }, null, 544), [
                      [x, K.value]
                    ]),
                    K.value ? (s(), n("button", {
                      key: 0,
                      onClick: t[76] || (t[76] = (o) => {
                        K.value = "", nt.value = !1;
                      }),
                      class: "di-binding-clear"
                    }, [
                      C(r(xt), { style: { width: "14px", height: "14px" } })
                    ])) : v("", !0)
                  ]),
                  nt.value && Et.value.length > 0 ? (s(), n("div", Uc, [
                    (s(!0), n(I, null, M(Et.value, (o) => (s(), n("button", {
                      key: o.fullName,
                      onClick: (m) => Zt(o),
                      class: "di-binding-item has-db"
                    }, [
                      e("div", Mc, [
                        e("span", Vc, c(o.fullName), 1),
                        e("span", Ec, c(o.type), 1)
                      ]),
                      o.comment ? (s(), n("span", Pc, c(o.comment), 1)) : v("", !0)
                    ], 8, Dc))), 128))
                  ])) : v("", !0)
                ])
              ])) : v("", !0),
              et.value && (ke.value === "select" || ke.value === "radio" || ke.value === "checkbox") ? (s(), n("div", Bc, [
                e("button", {
                  onClick: nl,
                  class: A(["di-btn-condition-toggle", { "di-condition-active": Qe.value }])
                }, [
                  C(r(ml), { style: { width: "14px", height: "14px" } }),
                  t[193] || (t[193] = O(" 選択肢を定義 ", -1)),
                  It.value ? (s(), n("span", Ac, c(It.value.entries.length) + "件", 1)) : v("", !0)
                ], 2),
                Qe.value ? (s(), n("div", Lc, [
                  Le.value.length > 0 ? (s(), n("div", Oc, [
                    t[194] || (t[194] = e("div", { class: "di-master-entries-header" }, [
                      e("span", { class: "di-master-col-val" }, "値"),
                      e("span", { class: "di-master-col-lbl" }, "ラベル"),
                      e("span", { class: "di-master-col-color" }, "色"),
                      e("span", { class: "di-master-col-act" })
                    ], -1)),
                    (s(!0), n(I, null, M(Le.value, (o, m) => (s(), n("div", {
                      key: m,
                      class: "di-master-entry-row"
                    }, [
                      b(e("input", {
                        "onUpdate:modelValue": (w) => o.value = w,
                        placeholder: "1",
                        class: "di-master-input di-master-col-val"
                      }, null, 8, Fc), [
                        [x, o.value]
                      ]),
                      b(e("input", {
                        "onUpdate:modelValue": (w) => o.label = w,
                        placeholder: "受付",
                        class: "di-master-input di-master-col-lbl"
                      }, null, 8, jc), [
                        [x, o.label]
                      ]),
                      b(e("input", {
                        "onUpdate:modelValue": (w) => o.color = w,
                        type: "color",
                        class: "di-master-color-input"
                      }, null, 8, Hc), [
                        [x, o.color]
                      ]),
                      e("button", {
                        onClick: (w) => al(m),
                        class: "di-master-entry-remove"
                      }, "×", 8, qc)
                    ]))), 128))
                  ])) : v("", !0),
                  e("button", {
                    onClick: il,
                    class: "di-btn-add-field",
                    style: { "margin-top": "4px" }
                  }, " + 値を追加 ")
                ])) : v("", !0)
              ])) : v("", !0),
              e("div", Rc, [
                e("button", {
                  onClick: t[77] || (t[77] = (o) => we.value = !we.value),
                  class: A(["di-btn-condition-toggle", { "di-condition-active": we.value }])
                }, [
                  C(r(yl), { style: { width: "14px", height: "14px" } }),
                  t[195] || (t[195] = O(" 必須入力 ", -1)),
                  we.value ? (s(), n("span", zc, "必須")) : v("", !0)
                ], 2)
              ]),
              e("div", Kc, [
                t[196] || (t[196] = e("label", { class: "di-form-label" }, "バリデーションルール", -1)),
                e("div", Gc, [
                  (s(!0), n(I, null, M(z.value, (o, m) => (s(), n("span", {
                    key: m,
                    class: "di-calc-tag",
                    style: { background: "#ec4899" }
                  }, [
                    O(c(o) + " ", 1),
                    e("button", {
                      onClick: Ie((w) => Ll(m), ["stop"]),
                      class: "di-calc-tag-remove"
                    }, "×", 8, Yc)
                  ]))), 128)),
                  b(e("input", {
                    "onUpdate:modelValue": t[78] || (t[78] = (o) => le.value = o),
                    onKeydown: [
                      t[79] || (t[79] = Pt(Ie((o) => Al(), ["prevent"]), ["enter"])),
                      Ol
                    ],
                    type: "text",
                    placeholder: z.value.length === 0 ? "max:255, email, 必須 など (Enter で追加)" : "",
                    class: "di-calc-tags-field",
                    autocomplete: "off"
                  }, null, 40, Xc), [
                    [x, le.value]
                  ])
                ]),
                t[197] || (t[197] = e("span", { class: "di-form-hint" }, "Enter で追加、Backspace で削除", -1))
              ]),
              e("div", Wc, [
                t[198] || (t[198] = e("label", { class: "di-form-label" }, "プレースホルダー", -1)),
                b(e("input", {
                  "onUpdate:modelValue": t[80] || (t[80] = (o) => pe.value = o),
                  type: "text",
                  placeholder: "例: user@example.com",
                  class: "di-input"
                }, null, 512), [
                  [x, pe.value]
                ])
              ]),
              e("div", Zc, [
                t[199] || (t[199] = e("label", { class: "di-form-label" }, "デフォルト値", -1)),
                b(e("input", {
                  "onUpdate:modelValue": t[81] || (t[81] = (o) => Te.value = o),
                  type: "text",
                  placeholder: "初期値",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [x, Te.value]
                ])
              ]),
              e("div", Jc, [
                t[200] || (t[200] = e("label", { class: "di-form-label" }, "説明", -1)),
                b(e("textarea", {
                  "onUpdate:modelValue": t[82] || (t[82] = (o) => me.value = o),
                  rows: "3",
                  placeholder: "このフォーム要素の説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [x, me.value]
                ])
              ]),
              e("div", Qc, [
                t[201] || (t[201] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                b(e("textarea", {
                  "onUpdate:modelValue": t[83] || (t[83] = (o) => re.value = o),
                  rows: "2",
                  placeholder: "補足情報があれば...",
                  class: "di-textarea"
                }, null, 512), [
                  [x, re.value]
                ])
              ])
            ], 64)) : v("", !0),
            U.value === "chart" ? (s(), n(I, { key: 3 }, [
              e("div", Nc, [
                t[203] || (t[203] = e("label", { class: "di-form-label" }, "チャート種別", -1)),
                b(e("select", {
                  "onUpdate:modelValue": t[84] || (t[84] = (o) => Je.value = o),
                  class: "di-select"
                }, [...t[202] || (t[202] = [
                  e("option", { value: "" }, "選択してください", -1),
                  e("option", { value: "bar" }, "棒グラフ (bar)", -1),
                  e("option", { value: "line" }, "折れ線グラフ (line)", -1),
                  e("option", { value: "pie" }, "円グラフ (pie)", -1),
                  e("option", { value: "area" }, "エリアチャート (area)", -1),
                  e("option", { value: "scatter" }, "散布図 (scatter)", -1),
                  e("option", { value: "doughnut" }, "ドーナツ (doughnut)", -1),
                  e("option", { value: "radar" }, "レーダー (radar)", -1),
                  e("option", { value: "other" }, "その他 (other)", -1)
                ])], 512), [
                  [Se, Je.value]
                ])
              ]),
              e("div", ev, [
                t[204] || (t[204] = e("label", { class: "di-form-label" }, "タイトル", -1)),
                b(e("input", {
                  "onUpdate:modelValue": t[85] || (t[85] = (o) => ut.value = o),
                  type: "text",
                  placeholder: "例: 月別受講者数",
                  class: "di-input"
                }, null, 512), [
                  [x, ut.value]
                ])
              ]),
              e("div", tv, [
                e("div", lv, [
                  t[205] || (t[205] = e("label", { class: "di-form-label" }, "X軸", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": t[86] || (t[86] = (o) => rt.value = o),
                    type: "text",
                    placeholder: "例: 月, 日付",
                    class: "di-input"
                  }, null, 512), [
                    [x, rt.value]
                  ])
                ]),
                e("div", ov, [
                  t[206] || (t[206] = e("label", { class: "di-form-label" }, "Y軸", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": t[87] || (t[87] = (o) => ct.value = o),
                    type: "text",
                    placeholder: "例: 件数, 金額",
                    class: "di-input"
                  }, null, 512), [
                    [x, ct.value]
                  ])
                ])
              ]),
              e("div", sv, [
                t[208] || (t[208] = e("label", { class: "di-form-label" }, "系列定義", -1)),
                ge.value.length > 0 ? (s(), n("div", nv, [
                  t[207] || (t[207] = e("div", { class: "di-csv-columns-header" }, [
                    e("span", { class: "di-chart-col-label" }, "系列名"),
                    e("span", { class: "di-chart-col-field" }, "フィールド"),
                    e("span", { class: "di-chart-col-color" }, "色"),
                    e("span", { class: "di-csv-col-act" })
                  ], -1)),
                  (s(!0), n(I, null, M(ge.value, (o, m) => (s(), n("div", {
                    key: m,
                    class: "di-csv-column-row"
                  }, [
                    b(e("input", {
                      "onUpdate:modelValue": (w) => o.label = w,
                      placeholder: "予習",
                      class: "di-csv-input di-chart-col-label"
                    }, null, 8, iv), [
                      [x, o.label]
                    ]),
                    b(e("input", {
                      "onUpdate:modelValue": (w) => o.field = w,
                      placeholder: "preview_count",
                      class: "di-csv-input di-chart-col-field"
                    }, null, 8, av), [
                      [x, o.field]
                    ]),
                    b(e("input", {
                      "onUpdate:modelValue": (w) => o.color = w,
                      type: "color",
                      class: "di-master-color-input"
                    }, null, 8, dv), [
                      [x, o.color]
                    ]),
                    e("div", uv, [
                      e("button", {
                        onClick: (w) => sl(m, -1),
                        disabled: m === 0,
                        class: "di-csv-move-btn",
                        title: "上へ"
                      }, [
                        C(r(cl), { style: { width: "12px", height: "12px" } })
                      ], 8, rv),
                      e("button", {
                        onClick: (w) => sl(m, 1),
                        disabled: m === ge.value.length - 1,
                        class: "di-csv-move-btn",
                        title: "下へ"
                      }, [
                        C(r(Wt), { style: { width: "12px", height: "12px" } })
                      ], 8, cv),
                      e("button", {
                        onClick: (w) => ql(m),
                        class: "di-csv-remove-btn",
                        title: "削除"
                      }, "×", 8, vv)
                    ])
                  ]))), 128))
                ])) : v("", !0),
                e("button", {
                  onClick: Hl,
                  class: "di-btn-add-field"
                }, " + 系列を追加 ")
              ]),
              e("div", pv, [
                t[209] || (t[209] = e("label", { class: "di-form-label" }, "データ取得元", -1)),
                b(e("input", {
                  "onUpdate:modelValue": t[88] || (t[88] = (o) => Ae.value = o),
                  type: "text",
                  placeholder: "例: GET /api/stats/monthly",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [x, Ae.value]
                ])
              ]),
              e("div", mv, [
                t[210] || (t[210] = e("label", { class: "di-form-label" }, "集計方法", -1)),
                b(e("input", {
                  "onUpdate:modelValue": t[89] || (t[89] = (o) => De.value = o),
                  type: "text",
                  placeholder: "例: 月別集計, GROUP BY month",
                  class: "di-input"
                }, null, 512), [
                  [x, De.value]
                ])
              ]),
              e("div", fv, [
                t[211] || (t[211] = e("label", { class: "di-form-label" }, "フィルタ条件", -1)),
                b(e("input", {
                  "onUpdate:modelValue": t[90] || (t[90] = (o) => ze.value = o),
                  type: "text",
                  placeholder: "例: 直近12ヶ月, status=active",
                  class: "di-input"
                }, null, 512), [
                  [x, ze.value]
                ])
              ]),
              e("div", bv, [
                t[212] || (t[212] = e("label", { class: "di-form-label" }, "説明", -1)),
                b(e("textarea", {
                  "onUpdate:modelValue": t[91] || (t[91] = (o) => lt.value = o),
                  rows: "3",
                  placeholder: "このチャートの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [x, lt.value]
                ])
              ])
            ], 64)) : v("", !0)
          ]),
          e("div", hv, [
            e("button", {
              onClick: T,
              class: "di-btn-delete"
            }, [
              C(r(Bt), { style: { width: "14px", height: "14px" } }),
              t[213] || (t[213] = O(" 削除 ", -1))
            ]),
            e("div", yv, [
              e("button", {
                onClick: p,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: _,
                class: "di-btn-save"
              }, [
                C(r(xl), { style: { width: "14px", height: "14px" } }),
                t[214] || (t[214] = O(" 保存 ", -1))
              ])
            ])
          ])
        ], 2)
      ])) : v("", !0)
    ]));
  }
}), kv = /* @__PURE__ */ Kt(gv, [["__scopeId", "data-v-3993bf99"]]), xv = {
  key: 0,
  "data-dev-inspector": "",
  class: "di-loading-overlay"
}, wv = { class: "di-highlight-label" }, $v = ["onClick"], Cv = {
  key: 0,
  class: "di-note-label-row"
}, _v = ["onClick"], Iv = {
  "data-dev-inspector": "",
  class: "di-scan-banner"
}, Tv = ["onClick"], Sv = { class: "di-analysis-type" }, Uv = {
  key: 0,
  class: "di-analysis-tags"
}, Dv = {
  key: 1,
  class: "di-analysis-db"
}, Mv = {
  key: 2,
  class: "di-analysis-api-source"
}, Vv = {
  key: 3,
  class: "di-analysis-conditional"
}, Ev = ["onClick"], Pv = {
  key: 0,
  class: "di-analysis-text"
}, Bv = {
  "data-dev-inspector": "",
  class: "di-analysis-banner"
}, Av = ["onClick"], Lv = {
  key: 0,
  class: "di-unannotated-label-text"
}, Ov = /* @__PURE__ */ Lt({
  __name: "DevPickOverlay",
  setup(W) {
    const a = Ot(), U = k(null), E = k(null), te = k(0), oe = k(0), ie = k(0), ke = {
      db_direct: "#3b82f6",
      db_formatted: "#8b5cf6",
      calculated: "#f59e0b",
      static: "#10b981",
      other: "#94a3b8"
    }, we = {
      action: "#a78bfa",
      form: "#ec4899"
    };
    function z(H) {
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
      }[H] || H;
    }
    function le(H) {
      var h, F;
      const S = a.getElementConfig(H);
      if (S != null && S.elementType && we[S.elementType])
        return we[S.elementType];
      if ((h = S == null ? void 0 : S.note) != null && h.displayType)
        return ke[S.note.displayType] || "#60a5fa";
      if (!(S != null && S.sourceBinding)) {
        const q = ((F = S == null ? void 0 : S.note) == null ? void 0 : F.type) || "info";
        return {
          info: "#60a5fa",
          warning: "#fbbf24",
          todo: "#10b981",
          question: "#a78bfa"
        }[q] || "#60a5fa";
      }
      return S.sourceBinding.isStatic ? "#10b981" : S.sourceBinding.type === "v-model" ? "#8b5cf6" : S.sourceBinding.type === "api" ? "#f59e0b" : "#60a5fa";
    }
    function pe(H) {
      var R, ee, P, $, D;
      const S = a.noteHighlightFilter;
      if (S === "all") return !0;
      const h = a.getElementConfig(H);
      if (!h) return !1;
      const F = (R = h.note) == null ? void 0 : R.displayType, q = !!((ee = h.note) != null && ee.condition || (P = h.note) != null && P.conditionColumn), ne = !!(($ = h.note) != null && $.storedCalc);
      switch (S) {
        case "db":
          return F === "db_direct" || F === "db_formatted";
        case "calculated":
          return F === "calculated";
        case "storedCalc":
          return ne;
        case "static":
          return F === "static";
        case "conditional":
          return q;
        case "action":
          return h.elementType === "action";
        case "form":
          return h.elementType === "form";
        case "other":
          return F === "other" || !F && !h.elementType && !!((D = h.note) != null && D.text);
        default:
          return !0;
      }
    }
    function Te() {
      var q, ne;
      const H = document.querySelector("dialog[open]");
      if (H) return H;
      const S = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
      for (const R of S) {
        const ee = R.getBoundingClientRect();
        if (ee.width > 0 && ee.height > 0) return R;
      }
      const h = '.v-overlay--active .v-overlay__content, .el-dialog__wrapper:not([style*="display: none"]) .el-dialog, .modal.show .modal-dialog, .modal-overlay[style*="display: block"], .v-dialog--active';
      try {
        const R = document.querySelector(h);
        if (R) {
          const ee = R.getBoundingClientRect();
          if (ee.width > 0 && ee.height > 0) return R;
        }
      } catch {
      }
      const F = document.querySelectorAll(".fixed.inset-0, .fixed.inset-x-0.inset-y-0, [data-modal], [data-overlay]");
      for (const R of F) {
        if (((q = R.dataset) == null ? void 0 : q.devInspector) !== void 0) continue;
        const ee = getComputedStyle(R), P = parseInt(ee.zIndex, 10);
        if (isNaN(P) || P < 40) continue;
        const $ = R.getBoundingClientRect();
        if ($.width >= window.innerWidth * 0.9 && $.height >= window.innerHeight * 0.9)
          return R;
      }
      for (const R of document.body.children) {
        if (((ne = R.dataset) == null ? void 0 : ne.devInspector) !== void 0) continue;
        const ee = getComputedStyle(R);
        if (ee.position !== "fixed") continue;
        const P = parseInt(ee.zIndex, 10);
        if (isNaN(P) || P < 40) continue;
        const $ = R.getBoundingClientRect();
        if ($.width >= window.innerWidth * 0.9 && $.height >= window.innerHeight * 0.9)
          return R;
      }
      return null;
    }
    function me(H, S) {
      return S.contains(H);
    }
    const ce = j(() => {
      var ne, R, ee, P, $, D, $e, Q, We, be, Ze, tt, Ke, Re, N, Be, dt, Je, ut, rt, ct, ge, Ae, De, ze, lt, G, ot, wt, ft, Qe, Le, et, It, Z, Me, he, Oe, vt, bt, gt, Ge, Ce, Tt, st, $t, Ct;
      const H = te.value, S = oe.value;
      ie.value;
      const h = [];
      if (!a.isEnabled) return h;
      const F = Te(), q = a.getConfiguredSelectors();
      for (const ht of q)
        try {
          const kt = document.querySelector(ht);
          if (kt) {
            if (F && !me(kt, F)) continue;
            const xe = kt.getBoundingClientRect(), d = a.getElementConfig(ht), ve = ((ne = d == null ? void 0 : d.sourceBinding) == null ? void 0 : ne.isStatic) || !1, de = ((R = d == null ? void 0 : d.sourceBinding) == null ? void 0 : R.type) || "";
            let J = "", ue = "";
            const Ve = (ee = d == null ? void 0 : d.note) == null ? void 0 : ee.displayType, Ee = [];
            if ((P = d == null ? void 0 : d.note) != null && P.sampleValue ? Ee.push(`例: ${d.note.sampleValue}${d.note.unit ? d.note.unit : ""}`) : ($ = d == null ? void 0 : d.note) != null && $.unit && Ee.push(`単位: ${d.note.unit}`), (D = d == null ? void 0 : d.note) != null && D.decimalHandling) {
              const L = { round: "四捨五入", floor: "切り捨て", ceil: "切り上げ", decimal_1: "小数第1位", decimal_2: "小数第2位", integer: "整数" };
              Ee.push(L[d.note.decimalHandling] || d.note.decimalHandling);
            }
            ($e = d == null ? void 0 : d.note) != null && $e.nullDisplay && Ee.push(`NULL時: ${d.note.nullDisplay}`), (Q = d == null ? void 0 : d.note) != null && Q.displayFormat && Ee.push(d.note.displayFormat);
            const Ye = Ee.length > 0 ? `
${Ee.join(" / ")}` : "", Ne = !!((We = d == null ? void 0 : d.note) != null && We.condition || (be = d == null ? void 0 : d.note) != null && be.conditionColumn);
            let ye = "";
            if (Ne) {
              const L = { hidden: "非表示", disabled: "無効化", different_value: "別の値", empty: "空欄" }, je = [];
              (Ze = d == null ? void 0 : d.note) != null && Ze.condition && je.push(d.note.condition), (tt = d == null ? void 0 : d.note) != null && tt.conditionColumn && je.push(`判定: ${d.note.conditionColumn}`), (Ke = d == null ? void 0 : d.note) != null && Ke.hiddenBehavior && je.push(`不一致時: ${L[d.note.hiddenBehavior] || d.note.hiddenBehavior}`), (Re = d == null ? void 0 : d.note) != null && Re.hiddenNote && je.push(`→ ${d.note.hiddenNote}`), ye = `
条件: ${je.join(" / ")}`;
            }
            const re = Ne ? " ⚡" : "";
            if ((d == null ? void 0 : d.elementType) === "action" && (d != null && d.actionInfo)) {
              const L = d.actionInfo;
              L.type === "navigate" ? J = `遷移: ${L.target || "?"}` : L.type === "api" ? J = `API: ${L.method || "GET"} ${L.target || "?"}` : L.type === "modal" ? J = `モーダル: ${L.target || "?"}` : L.type === "emit" ? J = `イベント: ${L.target || "?"}` : L.type === "function" ? J = `関数: ${L.target || "?"}` : J = "アクション", ue = (L.description || J) + ((N = d == null ? void 0 : d.note) != null && N.text ? `
${d.note.text}` : "");
            } else if ((d == null ? void 0 : d.elementType) === "form" && (d != null && d.formInfo)) {
              const L = d.formInfo, je = (Be = d == null ? void 0 : d.fieldInfoList) != null && Be.length ? d.fieldInfoList : d != null && d.fieldInfo ? [d.fieldInfo] : [], _e = je.length > 0 ? je.map((B) => `${B.table}.${B.column}`).join(", ") : "", u = je.length > 0 ? `${je[0].table}.${je[0].column}` : "", l = u ? a.getMasterDefinition(u) : null;
              L.inputType === "select" ? J = `選択: ${_e || L.description || "?"}${l ? ` (${l.entries.length}件)` : ""}` : L.inputType === "textarea" ? J = `テキスト: ${_e || L.description || "?"}` : L.inputType === "checkbox" ? J = `チェック: ${_e || L.description || "?"}` : L.inputType === "radio" ? J = `ラジオ: ${_e || L.description || "?"}` : J = `入力: ${_e || L.description || L.inputType || "?"}`, L.required && (J += " (必須)");
              const y = [];
              L.description && y.push(L.description), (dt = L.validation) != null && dt.length && y.push(`検証: ${L.validation.join(", ")}`), L.placeholder && y.push(`placeholder: ${L.placeholder}`), L.defaultValue && y.push(`初期値: ${L.defaultValue}`), ue = y.join(`
`) + ((Je = d == null ? void 0 : d.note) != null && Je.text ? `
${d.note.text}` : "");
            } else if ((d == null ? void 0 : d.elementType) === "action")
              J = "アクション", ue = ((ut = d == null ? void 0 : d.note) == null ? void 0 : ut.text) || "";
            else if ((d == null ? void 0 : d.elementType) === "form")
              J = "フォーム", ue = ((rt = d == null ? void 0 : d.note) == null ? void 0 : rt.text) || "";
            else if (Ve === "db_direct") {
              const L = (ct = d == null ? void 0 : d.fieldInfoList) != null && ct.length ? d.fieldInfoList : d != null && d.fieldInfo ? [d.fieldInfo] : [];
              if (L.length > 0) {
                const je = L.map((y) => `${y.table}.${y.column}`).join(", "), _e = `${L[0].table}.${L[0].column}`, u = a.getMasterDefinition(_e), l = u ? ` (${u.entries.length}値)` : "";
                J = `DB: ${je}${l}${re}`, ue = L.map((y) => `${y.table}.${y.column}${y.type ? ` (${y.type})` : ""}`).join(`
`) + Ye + ye + ((ge = d == null ? void 0 : d.note) != null && ge.text ? `
${d.note.text}` : "");
              }
            } else if (Ve === "db_formatted") {
              const L = (Ae = d == null ? void 0 : d.fieldInfoList) != null && Ae.length ? d.fieldInfoList : d != null && d.fieldInfo ? [d.fieldInfo] : [];
              if (L.length > 0) {
                const je = L.map((y) => `${y.table}.${y.column}`).join(", "), _e = `${L[0].table}.${L[0].column}`, u = a.getMasterDefinition(_e), l = u ? ` (${u.entries.length}値)` : "";
                J = `DB: ${je} (整形)${l}${re}`, ue = L.map((y) => `${y.table}.${y.column}`).join(`
`) + ((De = d == null ? void 0 : d.note) != null && De.formatDescription ? `
整形: ${d.note.formatDescription}` : "") + Ye + ye + ((ze = d == null ? void 0 : d.note) != null && ze.text ? `
${d.note.text}` : "");
              }
            } else Ve === "calculated" ? (J = "計算値" + ((lt = d == null ? void 0 : d.note) != null && lt.unit ? ` (${d.note.unit})` : "") + re, ue = (((G = d == null ? void 0 : d.note) == null ? void 0 : G.calcDescription) || "計算値") + ((wt = (ot = d == null ? void 0 : d.note) == null ? void 0 : ot.calcSources) != null && wt.length ? `
参照: ${d.note.calcSources.join(", ")}` : "") + Ye + ye + ((ft = d == null ? void 0 : d.note) != null && ft.text ? `
${d.note.text}` : "")) : Ve === "static" ? (J = "固定" + re, ue = (((Qe = d == null ? void 0 : d.note) == null ? void 0 : Qe.text) || "固定文言") + ye) : Ve === "other" ? (J = "メモ", ue = ((Le = d == null ? void 0 : d.note) == null ? void 0 : Le.text) || "") : (et = d == null ? void 0 : d.fieldInfoList) != null && et.length || (It = d == null ? void 0 : d.fieldInfo) != null && It.table && ((Z = d == null ? void 0 : d.fieldInfo) != null && Z.column) ? (J = `DB: ${((Me = d == null ? void 0 : d.fieldInfoList) != null && Me.length ? d.fieldInfoList : d != null && d.fieldInfo ? [d.fieldInfo] : []).map((_e) => `${_e.table}.${_e.column}`).join(", ")}`, ue = ((he = d == null ? void 0 : d.note) == null ? void 0 : he.text) || "") : ve ? (J = "固定", ue = ((Oe = d == null ? void 0 : d.note) == null ? void 0 : Oe.text) || "固定文言") : de === "v-model" ? (J = "フォーム", ue = ((vt = d == null ? void 0 : d.note) == null ? void 0 : vt.text) || "") : de === "api" ? (J = "データ", ue = ((bt = d == null ? void 0 : d.note) == null ? void 0 : bt.text) || "") : (gt = d == null ? void 0 : d.note) != null && gt.type ? (J = {
              info: "情報",
              warning: "注意",
              todo: "TODO",
              question: "質問"
            }[d.note.type] || "メモ", ue = ((Ge = d == null ? void 0 : d.note) == null ? void 0 : Ge.text) || "") : (J = "メモ", ue = ((Ce = d == null ? void 0 : d.note) == null ? void 0 : Ce.text) || "");
            const Fe = ue || ((Tt = d == null ? void 0 : d.note) == null ? void 0 : Tt.text) || "", yt = ((st = d == null ? void 0 : d.note) == null ? void 0 : st.type) || "info", mt = !!(($t = d == null ? void 0 : d.note) != null && $t.text || (Ct = d == null ? void 0 : d.note) != null && Ct.displayType);
            h.push({
              selector: ht,
              top: `${xe.top + H}px`,
              left: `${xe.left + S}px`,
              width: `${xe.width}px`,
              height: `${xe.height}px`,
              color: le(ht),
              isStatic: ve,
              label: J,
              noteText: Fe,
              noteType: yt,
              hasNote: mt
            });
          }
        } catch {
        }
      return h;
    }), V = j(() => {
      var q;
      const H = te.value, S = oe.value;
      ie.value;
      const h = [];
      if (!a.isEnabled || a.scanResults.length === 0) return h;
      const F = Te();
      for (const ne of a.scanResults)
        try {
          const R = document.querySelector(ne.selector);
          if (R) {
            if (F && !me(R, F)) continue;
            const ee = R.getBoundingClientRect();
            h.push({
              selector: ne.selector,
              top: `${ee.top + H}px`,
              left: `${ee.left + S}px`,
              width: `${ee.width}px`,
              height: `${ee.height}px`,
              isStatic: ((q = ne.detected.sourceBinding) == null ? void 0 : q.isStatic) || !1
            });
          }
        } catch {
        }
      return h;
    }), Pe = j(() => {
      var ne, R;
      const H = te.value, S = oe.value;
      ie.value;
      const h = [], F = a.analysisFilter;
      if (F === "none" || !a.isEnabled || a.analysisResults.length === 0) return h;
      const q = Te();
      for (const ee of a.analysisResults) {
        if (!ee.matched) continue;
        const P = ee.element;
        try {
          const $ = document.querySelector(ee.selector);
          if (!$ || q && !me($, q)) continue;
          const D = $.getBoundingClientRect();
          if (D.width > window.innerWidth * 0.8 || D.height > window.innerHeight * 0.5)
            continue;
          const $e = $.querySelector("[data-di-binding]") || ($.hasAttribute("data-di-binding") ? $ : null);
          let Q = "", We = P.binding || "";
          const be = [...P.tags || []];
          if ($e) {
            const De = $e.getAttribute("data-di-db"), ze = $e.getAttribute("data-di-binding");
            De && (Q = De, be.includes("db") || be.push("db")), ze && (We = ze);
          }
          !Q && P.db && (Q = `${P.db.table}.${P.db.column}`, be.includes("db") || be.push("db"));
          let Ze = "";
          P.api && (Ze = `${P.api.method} ${P.api.endpoint}`, be.includes("api") || be.push("api"));
          let tt = "";
          if (We) {
            const De = a.getApiSourceForBinding(We);
            De && De.endpoint ? tt = `${De.method || "GET"} ${De.endpoint}` : De && De.composable && (tt = De.composable);
          }
          const Ke = (ne = P.conditional) == null ? void 0 : ne.expression, Re = (R = P.modal) == null ? void 0 : R.target, N = !!Q || be.includes("db"), Be = !!Ze || be.includes("api"), dt = be.includes("form"), Je = be.includes("button"), ut = be.includes("link"), rt = be.includes("modal"), ct = be.includes("conditional"), ge = be.includes("computed");
          if (F === "db-api") {
            if (!N && !Be) continue;
          } else if (F === "form") {
            if (!dt) continue;
          } else if (F === "button") {
            if (!Je) continue;
          } else if (F === "link") {
            if (!ut) continue;
          } else if (F === "modal") {
            if (!rt) continue;
          } else if (F === "conditional") {
            if (!ct) continue;
          } else if (F === "computed") {
            if (!ge) continue;
          } else if (F === "other" && (N || Be || dt || Je || ut || rt || ct || ge))
            continue;
          let Ae = "other";
          N ? Ae = "db" : Be ? Ae = "api" : dt ? Ae = "form" : Je ? Ae = "button" : ut ? Ae = "link" : rt ? Ae = "modal" : ct ? Ae = "conditional" : ge && (Ae = "computed"), h.push({
            selector: ee.selector,
            top: `${D.top + H}px`,
            left: `${D.left + S}px`,
            width: `${D.width}px`,
            height: `${D.height}px`,
            tags: be,
            primaryTag: Ae,
            text: P.text || We || "",
            dbInfo: Q,
            apiInfo: Ze,
            apiSource: tt,
            conditionalExpr: Ke,
            modalTarget: Re
          });
        } catch {
        }
      }
      return h;
    }), at = j(() => {
      const H = te.value, S = oe.value;
      ie.value;
      const h = [];
      if (!a.isEnabled || !a.showUnannotatedDetection || a.unannotatedElements.length === 0) return h;
      const F = Te();
      for (const q of a.unannotatedElements)
        try {
          const ne = document.querySelector(q.selector);
          if (!ne || F && !me(ne, F)) continue;
          const R = ne.getBoundingClientRect();
          h.push({
            selector: q.selector,
            top: `${R.top + H}px`,
            left: `${R.left + S}px`,
            width: `${R.width}px`,
            height: `${R.height}px`,
            category: q.category,
            text: q.text
          });
        } catch {
        }
      return h;
    });
    function Ue(H) {
      if (!a.isPickMode) return;
      if (H.target.closest("[data-dev-inspector]")) {
        U.value = null, E.value = null, a.setHoveredSelector(null);
        return;
      }
      const h = document.elementFromPoint(H.clientX, H.clientY);
      if (!h || h === document.body || h === document.documentElement) {
        U.value = null, E.value = null, a.setHoveredSelector(null);
        return;
      }
      if (h.closest("[data-dev-inspector]"))
        return;
      E.value = h;
      const F = h.getBoundingClientRect();
      U.value = {
        top: `${F.top + window.scrollY}px`,
        left: `${F.left + window.scrollX}px`,
        width: `${F.width}px`,
        height: `${F.height}px`
      };
      const q = a.generateSelector(h);
      a.setHoveredSelector(q);
    }
    function Xe(H) {
      if (!(!a.isPickMode || H.target.closest("[data-dev-inspector]")) && (H.preventDefault(), H.stopPropagation(), E.value)) {
        const h = a.generateSelector(E.value);
        if (a.remapTargetId) {
          a.remapAnnotation(a.remapTargetId, h), a.remapTargetId = null, a.togglePickMode(), a.openPanel();
          return;
        }
        a.startEditing(h), a.togglePickMode();
      }
    }
    function fe(H) {
      H.key === "Escape" && a.isPickMode && (a.remapTargetId = null, a.togglePickMode());
    }
    function se() {
      te.value = window.scrollY, oe.value = window.scrollX, ie.value++;
    }
    let qe = null;
    return gl(() => {
      window.addEventListener("mousemove", Ue, !0), window.addEventListener("click", Xe, !0), window.addEventListener("keydown", fe), window.addEventListener("scroll", se), window.addEventListener("resize", se);
      let H = null;
      qe = new MutationObserver(() => {
        H && clearTimeout(H), H = setTimeout(() => {
          ie.value++;
        }, 100);
      }), qe.observe(document.body, { childList: !0, subtree: !0 });
    }), eo(() => {
      window.removeEventListener("mousemove", Ue, !0), window.removeEventListener("click", Xe, !0), window.removeEventListener("keydown", fe), window.removeEventListener("scroll", se), window.removeEventListener("resize", se), qe == null || qe.disconnect();
    }), At(() => a.isPickMode, (H) => {
      H || (U.value = null, E.value = null);
    }), (H, S) => (s(), pt(_t, { to: "body" }, [
      r(a).isInitializing ? (s(), n("div", xv, [...S[1] || (S[1] = [
        e("div", { class: "di-loading-content" }, [
          e("div", { class: "di-loading-spinner" }),
          e("span", { class: "di-loading-text" }, "Developer Mode 起動中...")
        ], -1)
      ])])) : v("", !0),
      r(a).isPickMode && U.value ? (s(), n("div", {
        key: 1,
        "data-dev-inspector": "",
        class: "di-highlight",
        style: it({
          top: U.value.top,
          left: U.value.left,
          width: U.value.width,
          height: U.value.height
        })
      }, [
        e("div", wv, c(r(a).hoveredSelector), 1)
      ], 4)) : v("", !0),
      r(a).isPickMode ? (s(), n("div", {
        key: 2,
        "data-dev-inspector": "",
        class: "di-pick-banner",
        style: it(r(a).remapTargetId ? { background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)" } : {})
      }, [
        e("span", null, c(r(a).remapTargetId ? "新しい要素をクリックして再設定" : "要素をクリックしてメモを追加"), 1),
        S[2] || (S[2] = e("kbd", null, "ESC", -1)),
        S[3] || (S[3] = e("span", { class: "di-pick-hint" }, "でキャンセル", -1))
      ], 4)) : v("", !0),
      r(a).isEnabled && !r(a).isPickMode && !r(a).editingElementId ? (s(!0), n(I, { key: 3 }, M(ce.value, (h) => b((s(), n("div", {
        key: h.selector,
        "data-dev-inspector": "",
        class: A([
          h.hasNote ? "di-note-highlight" : "di-annotation-box",
          { "di-element-hovered-pulse": r(a).hoveredSelector === h.selector }
        ]),
        style: it({
          top: h.top,
          left: h.left,
          width: h.width,
          height: h.height,
          borderColor: (h.hasNote, h.color),
          backgroundColor: r(a).hoveredSelector === h.selector ? h.color + "30" : h.color + (h.hasNote ? "18" : "15")
        }),
        onClick: (F) => r(a).startEditing(h.selector)
      }, [
        h.hasNote ? (s(), n("div", Cv, [
          e("span", {
            class: "di-note-indicator",
            style: it({ backgroundColor: h.color })
          }, null, 4),
          e("div", {
            class: "di-annotation-label",
            style: it({ backgroundColor: h.color })
          }, c(h.label), 5)
        ])) : (s(), n("div", {
          key: 1,
          class: "di-annotation-label",
          style: it({ backgroundColor: h.color })
        }, c(h.label), 5))
      ], 14, $v)), [
        [Mt, !h.hasNote || r(a).showNoteHighlights && pe(h.selector)]
      ])), 128)) : v("", !0),
      r(a).isEnabled && !r(a).editingElementId && V.value.length > 0 && r(a).analysisResults.length === 0 ? (s(), n(I, { key: 4 }, [
        (s(!0), n(I, null, M(V.value, (h) => (s(), n("div", {
          key: "scan-" + h.selector,
          "data-dev-inspector": "",
          class: A(["di-scan-highlight", { "di-scan-static": h.isStatic }]),
          style: it({
            top: h.top,
            left: h.left,
            width: h.width,
            height: h.height
          }),
          onClick: (F) => r(a).startEditing(h.selector)
        }, [
          e("div", {
            class: A(["di-scan-label", { "di-scan-label-static": h.isStatic }])
          }, c(h.isStatic ? "固定文言" : "動的データ"), 3)
        ], 14, _v))), 128)),
        e("div", Iv, [
          e("span", null, c(V.value.length) + "件の要素を検出", 1),
          e("button", {
            onClick: S[0] || (S[0] = (h) => r(a).clearScanResults()),
            class: "di-scan-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : v("", !0),
      r(a).isEnabled && !r(a).editingElementId && Pe.value.length > 0 ? (s(), n(I, { key: 5 }, [
        (s(!0), n(I, null, M(Pe.value, (h) => (s(), n("div", {
          key: "analysis-" + h.selector,
          "data-dev-inspector": "",
          class: A(["di-analysis-highlight", "di-analysis-" + h.primaryTag]),
          style: it({
            top: h.top,
            left: h.left,
            width: h.width,
            height: h.height
          }),
          onClick: (F) => r(a).startEditing(h.selector)
        }, [
          e("div", {
            class: A(["di-analysis-label", "di-analysis-label-" + h.primaryTag])
          }, [
            e("span", Sv, c(z(h.primaryTag)), 1),
            h.tags.length > 1 ? (s(), n("span", Uv, "+" + c(h.tags.length - 1), 1)) : v("", !0),
            h.dbInfo ? (s(), n("span", Dv, c(h.dbInfo), 1)) : v("", !0),
            h.apiSource ? (s(), n("span", Mv, "← " + c(h.apiSource), 1)) : v("", !0),
            h.conditionalExpr ? (s(), n("span", Vv, c(h.conditionalExpr), 1)) : v("", !0),
            e("button", {
              class: "di-analysis-delete",
              onClick: Ie((F) => r(a).removeAnalysisResult(h.selector), ["stop"]),
              title: "この要素を非表示"
            }, "×", 8, Ev)
          ], 2),
          h.text && h.text.length < 30 ? (s(), n("div", Pv, c(h.text), 1)) : v("", !0)
        ], 14, Tv))), 128)),
        e("div", Bv, [
          e("span", null, "📊 分析データ: " + c(Pe.value.length) + "件の要素", 1)
        ])
      ], 64)) : v("", !0),
      r(a).isEnabled && !r(a).isPickMode && !r(a).editingElementId && at.value.length > 0 ? (s(!0), n(I, { key: 6 }, M(at.value, (h) => (s(), n("div", {
        key: "unannotated-" + h.selector,
        "data-dev-inspector": "",
        class: A(["di-unannotated-highlight", {
          "di-unannotated-hovered": r(a).hoveredUnannotatedSelector === h.selector,
          ["di-unannotated-hovered-" + h.category]: r(a).hoveredUnannotatedSelector === h.selector
        }]),
        style: it({
          top: h.top,
          left: h.left,
          width: h.width,
          height: h.height
        }),
        onClick: (F) => r(a).quickAnnotate(h.selector, h.category === "form" ? "form" : h.category === "action" ? "action" : "datasource")
      }, [
        e("div", {
          class: A(["di-unannotated-label", { ["di-unannotated-label-" + h.category]: r(a).hoveredUnannotatedSelector === h.selector }])
        }, [
          e("span", null, c(h.category === "binding" ? "DB" : h.category === "form" ? "Form" : "Act"), 1),
          h.text ? (s(), n("span", Lv, c(h.text), 1)) : v("", !0)
        ], 2)
      ], 14, Av))), 128)) : v("", !0)
    ]));
  }
}), Fv = /* @__PURE__ */ Kt(Ov, [["__scopeId", "data-v-ea64398c"]]), jv = { class: "di-editor-modal" }, Hv = { class: "di-editor-header" }, qv = { class: "di-header-actions" }, Rv = { class: "di-path-badge" }, zv = { class: "di-editor-content" }, Kv = { class: "di-form-group" }, Gv = { class: "di-form-group" }, Yv = { class: "di-form-section" }, Xv = { class: "di-form-section-header" }, Wv = { class: "di-api-header-actions" }, Zv = { class: "di-dropdown-wrapper" }, Jv = {
  key: 1,
  class: "di-suggestion-dropdown"
}, Qv = {
  key: 0,
  class: "di-suggestion-actions"
}, Nv = ["onMousedown", "disabled"], ep = { class: "di-suggestion-endpoint" }, tp = {
  key: 0,
  class: "di-suggestion-timing"
}, lp = {
  key: 1,
  class: "di-suggestion-empty"
}, op = {
  key: 0,
  class: "di-suggestion-banner"
}, sp = {
  key: 1,
  class: "di-suggestion-banner di-suggestion-banner-empty"
}, np = {
  key: 2,
  class: "di-empty-hint"
}, ip = { class: "di-api-entry-row" }, ap = ["onUpdate:modelValue"], dp = ["value"], up = ["onUpdate:modelValue"], rp = ["onClick"], cp = { class: "di-api-entry-row2" }, vp = ["onUpdate:modelValue"], pp = ["onUpdate:modelValue"], mp = ["value"], fp = { class: "di-form-section" }, bp = { class: "di-auth-row" }, hp = {
  key: 0,
  class: "di-auth-details"
}, yp = { class: "di-form-group" }, gp = { class: "di-form-group" }, kp = { class: "di-form-group" }, xp = { class: "di-form-group" }, wp = { class: "di-editor-footer" }, $p = { class: "di-editor-actions" }, Cp = ["disabled"], _p = /* @__PURE__ */ Lt({
  __name: "DevScreenEditor",
  setup(W) {
    const a = Ot(), U = k(""), E = k(""), te = k([]), oe = k(!1), ie = k(""), ke = k(""), we = k(""), z = k(""), le = k(!1), pe = k([]), Te = k(!1), me = j(() => typeof window < "u" ? window.location.pathname : "/");
    At(() => a.editingScreen, (P) => {
      P && ce();
    });
    function ce() {
      var $, D, $e, Q;
      const P = a.getScreenConfig();
      P ? (U.value = P.name, E.value = P.description || "", te.value = P.apis.map((We) => ({ ...We })), oe.value = (($ = P.auth) == null ? void 0 : $.required) || !1, ie.value = (($e = (D = P.auth) == null ? void 0 : D.roles) == null ? void 0 : $e.join(", ")) || "", ke.value = ((Q = P.auth) == null ? void 0 : Q.description) || "", we.value = P.figmaUrl || "", z.value = P.notes || "") : V();
    }
    function V() {
      U.value = "", E.value = "", te.value = [], oe.value = !1, ie.value = "", ke.value = "", we.value = "", z.value = "";
    }
    function Pe() {
      a.editingScreen = !1, V();
    }
    function at() {
      te.value.push({
        method: "GET",
        endpoint: "",
        description: "",
        loadTiming: "onMount"
      });
    }
    function Ue(P) {
      te.value.splice(P, 1);
    }
    function Xe() {
      if (!U.value.trim()) return;
      const P = {
        path: me.value,
        name: U.value.trim(),
        description: E.value.trim() || void 0,
        apis: te.value.filter(($) => $.endpoint.trim()),
        auth: oe.value || ie.value.trim() ? {
          required: oe.value,
          roles: ie.value.trim() ? ie.value.split(",").map(($) => $.trim()).filter(Boolean) : void 0,
          description: ke.value.trim() || void 0
        } : void 0,
        figmaUrl: we.value.trim() || void 0,
        notes: z.value.trim() || void 0,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      a.setScreenConfig(P), Pe();
    }
    function fe() {
      a.deleteScreenConfig(me.value), Pe();
    }
    const se = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, qe = {
      onMount: "読込時",
      action: "アクション",
      conditional: "条件付き"
    };
    function H() {
      pe.value = a.suggestScreenApis(), le.value = !0;
    }
    function S(P) {
      return te.value.some(
        ($) => $.method === P.method && $.endpoint === P.endpoint
      );
    }
    const h = j(() => pe.value.filter((P) => !S(P)));
    function F(P) {
      S(P) || te.value.push({ ...P });
    }
    function q() {
      for (const P of h.value)
        te.value.push({ ...P });
    }
    function ne() {
      setTimeout(() => {
        Te.value = !1;
      }, 150);
    }
    const R = ["GET", "POST", "PUT", "DELETE", "PATCH"], ee = [
      { value: "onMount", label: "画面読込時" },
      { value: "action", label: "アクション時" },
      { value: "conditional", label: "条件付き" }
    ];
    return (P, $) => (s(), pt(_t, { to: "body" }, [
      r(a).editingScreen ? (s(), n("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: Ie(Pe, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", jv, [
          e("div", Hv, [
            $[9] || ($[9] = e("h3", null, "画面情報を編集", -1)),
            e("div", qv, [
              e("span", Rv, c(me.value), 1),
              e("button", {
                onClick: Pe,
                class: "di-editor-close"
              }, [
                C(r(xt), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          e("div", zv, [
            e("div", Kv, [
              $[10] || ($[10] = e("label", { class: "di-form-label" }, "画面名 *", -1)),
              b(e("input", {
                "onUpdate:modelValue": $[0] || ($[0] = (D) => U.value = D),
                type: "text",
                placeholder: "ユーザー詳細",
                class: "di-input"
              }, null, 512), [
                [x, U.value]
              ])
            ]),
            e("div", Gv, [
              $[11] || ($[11] = e("label", { class: "di-form-label" }, "画面の説明", -1)),
              b(e("textarea", {
                "onUpdate:modelValue": $[1] || ($[1] = (D) => E.value = D),
                rows: "2",
                placeholder: "この画面の概要...",
                class: "di-textarea"
              }, null, 512), [
                [x, E.value]
              ])
            ]),
            e("div", Yv, [
              e("div", Xv, [
                $[15] || ($[15] = e("label", { class: "di-form-label" }, "API一覧", -1)),
                e("div", Wv, [
                  e("button", {
                    onClick: H,
                    class: "di-btn-suggest",
                    title: "要素情報からAPI推定"
                  }, [
                    C(r(zt), { style: { width: "13px", height: "13px" } }),
                    $[12] || ($[12] = O(" 自動推定 ", -1))
                  ]),
                  e("div", Zv, [
                    pe.value.length > 0 ? (s(), n("button", {
                      key: 0,
                      onClick: $[2] || ($[2] = (D) => Te.value = !Te.value),
                      onBlur: $[3] || ($[3] = (D) => ne()),
                      class: "di-btn-dropdown",
                      title: "推定結果から選択"
                    }, [
                      C(r(Wt), { style: { width: "13px", height: "13px" } }),
                      $[13] || ($[13] = O(" 候補から選択 ", -1))
                    ], 32)) : v("", !0),
                    Te.value && pe.value.length > 0 ? (s(), n("div", Jv, [
                      h.value.length > 0 ? (s(), n("div", Qv, [
                        e("button", {
                          onMousedown: Ie(q, ["prevent"]),
                          class: "di-suggestion-add-all"
                        }, " すべて追加 (" + c(h.value.length) + ") ", 33)
                      ])) : v("", !0),
                      (s(!0), n(I, null, M(pe.value, (D, $e) => (s(), n("button", {
                        key: $e,
                        onMousedown: Ie((Q) => F(D), ["prevent"]),
                        class: A(["di-suggestion-item", { "di-suggestion-added": S(D) }]),
                        disabled: S(D)
                      }, [
                        e("span", {
                          class: "di-suggestion-method",
                          style: it({ backgroundColor: se[D.method] + "20", color: se[D.method] })
                        }, c(D.method), 5),
                        e("code", ep, c(D.endpoint), 1),
                        D.loadTiming ? (s(), n("span", tp, c(qe[D.loadTiming] || D.loadTiming), 1)) : v("", !0),
                        S(D) ? (s(), pt(r(io), {
                          key: 1,
                          style: { width: "12px", height: "12px", color: "#10b981", "flex-shrink": "0" }
                        })) : v("", !0)
                      ], 42, Nv))), 128)),
                      pe.value.length === 0 ? (s(), n("div", lp, " 推定結果がありません ")) : v("", !0)
                    ])) : v("", !0)
                  ]),
                  e("button", {
                    onClick: at,
                    class: "di-btn-add"
                  }, [
                    C(r(Vt), { style: { width: "14px", height: "14px" } }),
                    $[14] || ($[14] = O(" 手動追加 ", -1))
                  ])
                ])
              ]),
              le.value && pe.value.length > 0 && h.value.length > 0 ? (s(), n("div", op, [
                C(r(zt), { style: { width: "13px", height: "13px", color: "#f59e0b", "flex-shrink": "0" } }),
                e("span", null, c(pe.value.length) + "件のAPIを推定しました", 1),
                e("button", {
                  onMousedown: Ie(q, ["prevent"]),
                  class: "di-suggestion-banner-btn"
                }, "すべて追加", 32)
              ])) : le.value && pe.value.length === 0 ? (s(), n("div", sp, [...$[16] || ($[16] = [
                e("span", null, "要素のDB情報からAPIを推定できませんでした。要素にDB情報を登録してください。", -1)
              ])])) : v("", !0),
              te.value.length === 0 && !le.value ? (s(), n("div", np, " APIが未登録です。「自動推定」で要素情報からAPIを推定できます。 ")) : v("", !0),
              (s(!0), n(I, null, M(te.value, (D, $e) => (s(), n("div", {
                key: $e,
                class: "di-api-entry"
              }, [
                e("div", ip, [
                  b(e("select", {
                    "onUpdate:modelValue": (Q) => D.method = Q,
                    class: "di-select di-select-method"
                  }, [
                    (s(), n(I, null, M(R, (Q) => e("option", {
                      key: Q,
                      value: Q
                    }, c(Q), 9, dp)), 64))
                  ], 8, ap), [
                    [Se, D.method]
                  ]),
                  b(e("input", {
                    "onUpdate:modelValue": (Q) => D.endpoint = Q,
                    type: "text",
                    placeholder: "/api/users/:id",
                    class: "di-input di-input-endpoint"
                  }, null, 8, up), [
                    [x, D.endpoint]
                  ]),
                  e("button", {
                    onClick: (Q) => Ue($e),
                    class: "di-btn-remove"
                  }, [
                    C(r(yo), { style: { width: "14px", height: "14px" } })
                  ], 8, rp)
                ]),
                e("div", cp, [
                  b(e("input", {
                    "onUpdate:modelValue": (Q) => D.description = Q,
                    type: "text",
                    placeholder: "説明（任意）",
                    class: "di-input di-input-desc"
                  }, null, 8, vp), [
                    [x, D.description]
                  ]),
                  b(e("select", {
                    "onUpdate:modelValue": (Q) => D.loadTiming = Q,
                    class: "di-select di-select-timing"
                  }, [
                    (s(), n(I, null, M(ee, (Q) => e("option", {
                      key: Q.value,
                      value: Q.value
                    }, c(Q.label), 9, mp)), 64))
                  ], 8, pp), [
                    [Se, D.loadTiming]
                  ])
                ])
              ]))), 128))
            ]),
            e("div", fp, [
              $[20] || ($[20] = e("label", { class: "di-form-label" }, "認証設定", -1)),
              e("div", bp, [
                e("button", {
                  onClick: $[4] || ($[4] = (D) => oe.value = !oe.value),
                  class: A(["di-toggle-btn", { active: oe.value }])
                }, [
                  e("span", {
                    class: A(["di-toggle-knob", { active: oe.value }])
                  }, null, 2)
                ], 2),
                $[17] || ($[17] = e("span", { class: "di-auth-label" }, "ログイン必須", -1))
              ]),
              oe.value ? (s(), n("div", hp, [
                e("div", yp, [
                  $[18] || ($[18] = e("label", { class: "di-form-label" }, "必要ロール（カンマ区切り）", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": $[5] || ($[5] = (D) => ie.value = D),
                    type: "text",
                    placeholder: "admin, manager",
                    class: "di-input"
                  }, null, 512), [
                    [x, ie.value]
                  ])
                ]),
                e("div", gp, [
                  $[19] || ($[19] = e("label", { class: "di-form-label" }, "認証メモ", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": $[6] || ($[6] = (D) => ke.value = D),
                    type: "text",
                    placeholder: "自分のデータのみ閲覧可",
                    class: "di-input"
                  }, null, 512), [
                    [x, ke.value]
                  ])
                ])
              ])) : v("", !0)
            ]),
            e("div", kp, [
              $[21] || ($[21] = e("label", { class: "di-form-label" }, "Figma URL", -1)),
              b(e("input", {
                "onUpdate:modelValue": $[7] || ($[7] = (D) => we.value = D),
                type: "text",
                placeholder: "https://www.figma.com/design/...",
                class: "di-input"
              }, null, 512), [
                [x, we.value]
              ])
            ]),
            e("div", xp, [
              $[22] || ($[22] = e("label", { class: "di-form-label" }, "メモ", -1)),
              b(e("textarea", {
                "onUpdate:modelValue": $[8] || ($[8] = (D) => z.value = D),
                rows: "3",
                placeholder: "この画面に関するメモ...",
                class: "di-textarea"
              }, null, 512), [
                [x, z.value]
              ])
            ])
          ]),
          e("div", wp, [
            e("button", {
              onClick: fe,
              class: "di-btn-delete"
            }, [
              C(r(Bt), { style: { width: "14px", height: "14px" } }),
              $[23] || ($[23] = O(" 削除 ", -1))
            ]),
            e("div", $p, [
              e("button", {
                onClick: Pe,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: Xe,
                class: "di-btn-save",
                disabled: !U.value.trim()
              }, [
                C(r(xl), { style: { width: "14px", height: "14px" } }),
                $[24] || ($[24] = O(" 保存 ", -1))
              ], 8, Cp)
            ])
          ])
        ])
      ])) : v("", !0)
    ]));
  }
}), Ip = /* @__PURE__ */ Kt(_p, [["__scopeId", "data-v-a3b58e7a"]]), Tp = {
  key: 0,
  "data-dev-inspector": ""
}, Sp = /* @__PURE__ */ Lt({
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
  setup(W) {
    const a = W, U = Ot();
    return gl(() => {
      U.init({
        storageKey: a.storageKey,
        enabledInProduction: a.enabledInProduction,
        initialAnnotations: a.initialAnnotations
      });
    }), (E, te) => r(U).isAvailable ? (s(), n("div", Tp, [
      C(Cd),
      C(kv),
      C(Ip),
      C(Fv)
    ])) : v("", !0);
  }
}), Mp = {
  install(W, a = {}) {
    const { autoRegister: U = !0, ...E } = a;
    U && W.component("DevInspector", Sp), W.provide("devInspectorOptions", E);
  }
};
export {
  kv as DevElementEditor,
  Sp as DevInspector,
  Cd as DevPanel,
  Fv as DevPickOverlay,
  Ip as DevScreenEditor,
  Mp as VueDevInspector,
  Mp as default,
  Pp as useDevInspector,
  Ot as useDevInspectorStore,
  Ap as vitePluginDevInspector
};
