import { h as hl, defineComponent as zt, ref as y, computed as j, watch as Rt, openBlock as n, createElementBlock as s, Fragment as I, createBlock as mt, Teleport as xt, unref as u, createVNode as T, createCommentVNode as v, createElementVNode as e, normalizeClass as A, toDisplayString as c, withDirectives as h, renderList as D, createTextVNode as O, withModifiers as de, vModelText as x, withKeys as Pt, vShow as Ft, normalizeStyle as it, vModelSelect as Me, resolveDynamicComponent as uo, vModelCheckbox as Xt, onMounted as Il, onUnmounted as ro } from "vue";
import { u as Kt } from "./useDevInspector-BJcLznvE.js";
import { a as Np } from "./useDevInspector-BJcLznvE.js";
import { default as t1 } from "./vite.js";
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Wt = {
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
const co = (Z) => Z.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), W = (Z, a) => ({ size: S, strokeWidth: P = 2, absoluteStrokeWidth: ee, color: oe, class: ue, ...Ce }, { attrs: $e, slots: G }) => hl(
  "svg",
  {
    ...Wt,
    width: S || Wt.width,
    height: S || Wt.height,
    stroke: oe || Wt.stroke,
    "stroke-width": ee ? Number(P) * 24 / Number(S) : P,
    ...$e,
    class: ["lucide", `lucide-${co(Z)}`],
    ...Ce
  },
  [
    ...a.map((te) => hl(...te)),
    ...G.default ? [G.default()] : []
  ]
);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vo = W("AlertCircleIcon", [
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
const po = W("AlertTriangleIcon", [
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
const mo = W("ArrowUpDownIcon", [
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
const fo = W("BarChart3Icon", [
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
const yl = W("CalculatorIcon", [
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
const bo = W("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ll = W("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gl = W("ChevronUpIcon", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ho = W("ClipboardListIcon", [
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
const kl = W("ClockIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xl = W("CodeIcon", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const It = W("DatabaseIcon", [
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
const tl = W("DownloadIcon", [
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
const yo = W("ExternalLinkIcon", [
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
const go = W("EyeOffIcon", [
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
const ko = W("EyeIcon", [
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ml = W("FileSpreadsheetIcon", [
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
const Zt = W("FileTextIcon", [
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
const xo = W("FormInputIcon", [
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
const wo = W("GitBranchIcon", [
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
const Co = W("GitMergeIcon", [
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
const wl = W("ListIcon", [
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
const $o = W("LockIcon", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _o = W("MailIcon", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const To = W("MessageSquareIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Io = W("MinusIcon", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cl = W("MousePointer2Icon", [
  ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $l = W("PenLineIcon", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _l = W("PenSquareIcon", [
  ["path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1qinfi" }],
  ["path", { d: "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z", key: "w2jsv5" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jt = W("PlusIcon", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sl = W("SaveIcon", [
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
const Mo = W("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const So = W("ServerIcon", [
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
const Tl = W("ShieldQuestionIcon", [
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
const Uo = W("ShieldIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ht = W("Trash2Icon", [
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
const Do = W("TypeIcon", [
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
const Vo = W("UploadIcon", [
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
const Jt = W("Wand2Icon", [
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
const kt = W("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eo = W("ZapIcon", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
]);
async function Po(Z, a, S = {}) {
  var me;
  const P = await import("./xlsx-BopDBbWb.js"), { systemName: ee = "System", author: oe = "" } = S, ue = /* @__PURE__ */ new Date(), Ce = `${ue.getFullYear()}/${ue.getMonth() + 1}/${ue.getDate()}`, $e = P.utils.book_new(), G = [];
  G.push([
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
    ee,
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
    (Z == null ? void 0 : Z.name) || "",
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
    Ce
  ]), G.push([]), G.push([
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
    (Z == null ? void 0 : Z.componentPath) || "",
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
    (Z == null ? void 0 : Z.figmaUrl) || ""
  ]), G.push([]), G.push(["機能概要"]), G.push([(Z == null ? void 0 : Z.description) || ""]), G.push([]), G.push(["画面レイアウト　figmaURL"]), G.push([(Z == null ? void 0 : Z.figmaUrl) || ""]), G.push([]), Z != null && Z.apis && Z.apis.length > 0 && (G.push(["API一覧"]), G.push(["", "メソッド", "", "エンドポイント", "", "", "", "", "", "", "", "説明"]), Z.apis.forEach((E) => {
    G.push(["", E.method, "", E.endpoint, "", "", "", "", "", "", "", E.description]);
  }), G.push([])), G.push(["画面項目　ヘッダーフッターは省く"]), G.push([
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
  ]), Object.values(a).forEach((E, Ee) => {
    var ne, je, H;
    const at = E.id;
    let Se = "", Xe = "", ye = "";
    if ((ne = E.note) != null && ne.text && (Se = E.note.text), E.fieldInfo && (Se += Se ? `
` : "", Se += `DB: ${E.fieldInfo.table}.${E.fieldInfo.column}`, E.fieldInfo.type && (Se += ` (${E.fieldInfo.type})`), E.fieldInfo.description && (Se += `
${E.fieldInfo.description}`)), E.actionInfo && (ye = `[${{
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行",
      csv_export: "CSV出力",
      csv_import: "CSV取込",
      email: "メール送信",
      sort: "ソート"
    }[E.actionInfo.type] || E.actionInfo.type}]`, E.actionInfo.target && (ye += ` ${E.actionInfo.method || ""} ${E.actionInfo.target}`), E.actionInfo.description && (ye += `
${E.actionInfo.description}`)), E.links) {
      const M = [];
      E.links.testPath && M.push(`テスト: ${E.links.testPath}`), E.links.figmaUrl && M.push(`Figma: ${E.links.figmaUrl}`), E.links.githubIssue && M.push(`Issue: ${E.links.githubIssue}`), E.links.githubPr && M.push(`PR: ${E.links.githubPr}`), M.length > 0 && (ye += ye ? `

` : "", ye += M.join(`
`));
    }
    if (E.devMeta) {
      const M = [];
      (je = E.devMeta.usedStores) != null && je.length && M.push(`Store: ${E.devMeta.usedStores.join(", ")}`), (H = E.devMeta.usedComponents) != null && H.length && M.push(`Components: ${E.devMeta.usedComponents.join(", ")}`), E.devMeta.accessibility && M.push(`A11y: ${E.devMeta.accessibility}`), E.devMeta.responsive && M.push(`Responsive: ${E.devMeta.responsive}`), M.length > 0 && (ye += ye ? `

` : "", ye += `[開発情報]
` + M.join(`
`));
    }
    G.push([
      "",
      Ee + 1,
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
      Se,
      "",
      "",
      "",
      "",
      "",
      "",
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
      ye
    ]);
  });
  const be = P.utils.aoa_to_sheet(G);
  be["!cols"] = [
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
  ], P.utils.book_append_sheet($e, be, "画面設計書");
  const he = `画面仕様書_${((me = Z == null ? void 0 : Z.name) == null ? void 0 : me.replace(/[/\\?%*:|"<>]/g, "-")) || "screen"}_${Ce.replace(/\//g, "")}.xlsx`;
  return P.writeFile($e, he), he;
}
const Bo = {
  key: 0,
  class: "di-panel",
  "data-dev-inspector": ""
}, Ao = { class: "di-header" }, Lo = { class: "di-header-title" }, Oo = { class: "di-tab-bar" }, Fo = {
  key: 0,
  class: "di-tab-badge"
}, jo = {
  key: 0,
  class: "di-tab-badge"
}, qo = {
  key: 0,
  class: "di-tab-badge"
}, Ho = { class: "di-edit-section" }, Ro = { class: "di-note-toggle-badge" }, zo = {
  key: 1,
  class: "di-note-filter"
}, Ko = { class: "di-filter-buttons" }, Go = ["onClick"], Yo = {
  key: 2,
  class: "di-element-list-section"
}, Xo = { class: "di-element-list-header" }, Wo = { class: "di-count-badge" }, Zo = { key: 0 }, Jo = { class: "di-element-tree" }, Qo = {
  key: 0,
  class: "di-tree-group"
}, No = { class: "di-tree-icon" }, en = { class: "di-count-badge" }, tn = {
  key: 0,
  class: "di-element-list"
}, ln = ["onDragstart", "onClick", "onMouseenter"], on = { class: "di-element-item-body" }, nn = { class: "di-element-item-label" }, sn = ["onClick"], an = {
  key: 1,
  class: "di-tree-group"
}, dn = { class: "di-tree-icon" }, un = { class: "di-count-badge" }, rn = {
  key: 0,
  class: "di-tree-children"
}, cn = {
  key: 0,
  class: "di-rename-row"
}, vn = ["onKeydown", "onBlur"], pn = ["onClick", "onDragover", "onDragleave", "onDrop"], mn = { class: "di-tree-icon" }, fn = { class: "di-count-badge" }, bn = ["onClick"], hn = { key: 2 }, yn = {
  key: 0,
  class: "di-element-list"
}, gn = ["onDragstart", "onClick", "onMouseenter"], kn = { class: "di-element-item-body" }, xn = { class: "di-element-item-label" }, wn = ["onClick"], Cn = {
  key: 1,
  class: "di-tree-children"
}, $n = {
  key: 0,
  class: "di-rename-row"
}, _n = ["onKeydown", "onBlur"], Tn = ["onClick", "onDragover", "onDragleave", "onDrop"], In = { class: "di-tree-icon" }, Mn = { class: "di-count-badge" }, Sn = ["onClick"], Un = { key: 2 }, Dn = {
  key: 0,
  class: "di-element-list"
}, Vn = ["onDragstart", "onClick", "onMouseenter"], En = { class: "di-element-item-body" }, Pn = { class: "di-element-item-label" }, Bn = ["onClick"], An = {
  key: 1,
  class: "di-tree-children"
}, Ln = {
  key: 0,
  class: "di-rename-row"
}, On = ["onKeydown", "onBlur"], Fn = ["onClick", "onDragover", "onDragleave", "onDrop"], jn = { class: "di-tree-icon" }, qn = { class: "di-count-badge" }, Hn = ["onClick"], Rn = { key: 2 }, zn = {
  key: 0,
  class: "di-element-list"
}, Kn = ["onDragstart", "onClick", "onMouseenter"], Gn = { class: "di-element-item-body" }, Yn = { class: "di-element-item-label" }, Xn = ["onClick"], Wn = {
  key: 2,
  class: "di-tree-group"
}, Zn = { class: "di-tree-icon" }, Jn = { class: "di-count-badge" }, Qn = {
  key: 0,
  class: "di-tree-children"
}, Nn = {
  key: 0,
  class: "di-rename-row"
}, es = ["onKeydown", "onBlur"], ts = ["onClick", "onDragover", "onDragleave", "onDrop"], ls = { class: "di-tree-icon" }, os = { class: "di-count-badge" }, ns = ["onClick"], ss = { key: 2 }, is = {
  key: 0,
  class: "di-element-list"
}, as = ["onDragstart", "onClick", "onMouseenter"], ds = { class: "di-element-item-body" }, us = { class: "di-element-item-label" }, rs = ["onClick"], cs = {
  key: 1,
  class: "di-tree-children"
}, vs = {
  key: 0,
  class: "di-rename-row"
}, ps = ["onKeydown", "onBlur"], ms = ["onClick", "onDragover", "onDragleave", "onDrop"], fs = { class: "di-tree-icon" }, bs = { class: "di-count-badge" }, hs = ["onClick"], ys = { key: 2 }, gs = {
  key: 0,
  class: "di-element-list"
}, ks = ["onDragstart", "onClick", "onMouseenter"], xs = { class: "di-element-item-body" }, ws = { class: "di-element-item-label" }, Cs = ["onClick"], $s = {
  key: 0,
  class: "di-tree-subgroup"
}, _s = {
  key: 0,
  class: "di-rename-row"
}, Ts = { class: "di-tree-icon" }, Is = { class: "di-count-badge" }, Ms = {
  key: 2,
  class: "di-element-list"
}, Ss = ["onDragstart", "onClick", "onMouseenter"], Us = { class: "di-element-item-body" }, Ds = { class: "di-element-item-label" }, Vs = ["onClick"], Es = {
  key: 0,
  class: "di-unannotated-badge"
}, Ps = {
  key: 3,
  class: "di-unannotated-results"
}, Bs = { class: "di-unannotated-summary" }, As = { key: 0 }, Ls = { key: 1 }, Os = { key: 2 }, Fs = { class: "di-unannotated-list" }, js = ["onMouseenter"], qs = { class: "di-unannotated-text" }, Hs = ["onClick"], Rs = ["onClick"], zs = {
  key: 4,
  class: "di-unannotated-empty"
}, Ks = {
  key: 5,
  class: "di-broken-warning"
}, Gs = { class: "di-broken-header" }, Ys = { class: "di-broken-list" }, Xs = { class: "di-broken-item-info" }, Ws = { class: "di-broken-item-note" }, Zs = { class: "di-broken-item-selector" }, Js = { class: "di-broken-item-actions" }, Qs = ["onClick"], Ns = ["onClick"], ei = { class: "di-broken-actions" }, ti = { class: "di-content" }, li = { class: "di-section" }, oi = { class: "di-screen-header" }, ni = { class: "di-screen-name" }, si = {
  key: 0,
  class: "di-screen-desc"
}, ii = {
  key: 1,
  class: "di-auth-badges"
}, ai = {
  key: 0,
  class: "di-auth-badge di-auth-required"
}, di = {
  key: 1,
  class: "di-auth-note"
}, ui = {
  key: 0,
  class: "di-card"
}, ri = { class: "di-card-label" }, ci = { class: "di-code-blue" }, vi = {
  key: 1,
  class: "di-card"
}, pi = { class: "di-card-label" }, mi = ["href"], fi = {
  key: 2,
  class: "di-card"
}, bi = { class: "di-card-label" }, hi = { class: "di-api-list" }, yi = { class: "di-api-info" }, gi = { class: "di-api-endpoint" }, ki = {
  key: 0,
  class: "di-api-desc"
}, xi = {
  key: 0,
  class: "di-api-timing-badge"
}, wi = {
  key: 3,
  class: "di-card"
}, Ci = { class: "di-card-label" }, $i = { class: "di-screen-notes" }, _i = {
  key: 1,
  class: "di-no-spec"
}, Ti = { class: "di-card di-cross-search-section" }, Ii = { class: "di-cross-search-header" }, Mi = { class: "di-cross-search-body" }, Si = {
  class: "di-filter-buttons",
  style: { "margin-bottom": "8px" }
}, Ui = ["onClick"], Di = ["placeholder"], Vi = {
  key: 0,
  class: "di-cross-search-count"
}, Ei = {
  key: 1,
  class: "di-cross-search-results"
}, Pi = { class: "di-cross-search-page-header" }, Bi = {
  key: 0,
  class: "di-cross-search-page-name"
}, Ai = ["onClick"], Li = { class: "di-cross-search-field" }, Oi = {
  key: 0,
  class: "di-cross-search-context"
}, Fi = { class: "di-card di-screen-flow-section" }, ji = {
  key: 0,
  class: "di-screen-flow-badge"
}, qi = {
  key: 0,
  class: "di-screen-flow-body"
}, Hi = {
  key: 0,
  class: "di-screen-flow-empty"
}, Ri = { class: "di-flow-node-path" }, zi = {
  key: 0,
  class: "di-flow-node-name"
}, Ki = ["onClick"], Gi = { class: "di-flow-target" }, Yi = {
  key: 0,
  class: "di-flow-edge-label"
}, Xi = {
  key: 1,
  class: "di-flow-orphans"
}, Wi = { class: "di-section" }, Zi = {
  class: "di-section-header",
  style: { "margin-bottom": "8px" }
}, Ji = {
  key: 0,
  class: "di-section-badge"
}, Qi = { class: "di-master-table-name" }, Ni = ["onClick"], ea = { class: "di-master-item-header" }, ta = { class: "di-master-col-name" }, la = {
  key: 0,
  class: "di-master-col-type"
}, oa = { class: "di-master-item-name" }, na = { class: "di-master-entries-preview" }, sa = {
  key: 0,
  class: "di-master-entry-more"
}, ia = { class: "di-master-editor" }, aa = { class: "di-master-editor-header" }, da = { class: "di-master-editor-body" }, ua = { class: "di-master-row" }, ra = { class: "di-master-field" }, ca = ["disabled"], va = { class: "di-master-field" }, pa = ["disabled"], ma = { class: "di-master-row" }, fa = { class: "di-master-field" }, ba = { class: "di-master-field" }, ha = {
  class: "di-master-field",
  style: { "margin-bottom": "12px" }
}, ya = { class: "di-master-entries-header" }, ga = { class: "di-master-entries-list" }, ka = ["onUpdate:modelValue"], xa = ["onUpdate:modelValue"], wa = ["onUpdate:modelValue"], Ca = ["onUpdate:modelValue"], $a = ["onClick"], _a = {
  class: "di-master-entries-header",
  style: { "margin-top": "16px" }
}, Ta = {
  key: 0,
  class: "di-master-entries-list"
}, Ia = ["onUpdate:modelValue"], Ma = ["value"], Sa = ["onUpdate:modelValue"], Ua = ["value"], Da = ["onUpdate:modelValue"], Va = ["onUpdate:modelValue"], Ea = ["onClick"], Pa = {
  key: 1,
  class: "di-master-empty",
  style: { "margin-top": "4px", "font-size": "11px" }
}, Ba = { class: "di-master-editor-footer" }, Aa = ["disabled"], La = { class: "di-section" }, Oa = {
  class: "di-section-header",
  style: { "margin-bottom": "8px" }
}, Fa = {
  key: 0,
  class: "di-section-badge"
}, ja = ["onClick"], qa = { class: "di-batch-item-info" }, Ha = { class: "di-batch-item-name" }, Ra = {
  key: 0,
  class: "di-batch-item-schedule"
}, za = { class: "di-batch-editor" }, Ka = { class: "di-batch-editor-header" }, Ga = { class: "di-batch-editor-body" }, Ya = { class: "di-batch-row" }, Xa = { class: "di-batch-field" }, Wa = { class: "di-batch-field" }, Za = { class: "di-batch-row" }, Ja = { class: "di-batch-field" }, Qa = {
  class: "di-batch-field",
  style: { "margin-bottom": "12px" }
}, Na = { class: "di-batch-row" }, ed = { class: "di-batch-field" }, td = { class: "di-batch-tags-input" }, ld = ["onClick"], od = { class: "di-batch-field" }, nd = { class: "di-batch-tags-input" }, sd = ["onClick"], id = { class: "di-batch-section-label" }, ad = { key: 0 }, dd = { class: "di-batch-step-no" }, ud = ["onUpdate:modelValue"], rd = ["onUpdate:modelValue"], cd = ["onUpdate:modelValue"], vd = ["onUpdate:modelValue"], pd = ["onClick"], md = { class: "di-batch-row" }, fd = { class: "di-batch-field" }, bd = { class: "di-batch-field" }, hd = { class: "di-batch-row" }, yd = { class: "di-batch-field" }, gd = { class: "di-batch-field" }, kd = { class: "di-batch-editor-footer" }, xd = ["disabled"], wd = { class: "di-export-buttons" }, Cd = { class: "di-action-buttons" }, $d = {
  key: 0,
  class: "di-export-summary"
}, _d = { class: "di-export-summary-row" }, Td = { class: "di-export-summary-count" }, Id = { class: "di-export-summary-row" }, Md = { class: "di-export-summary-count" }, Sd = { class: "di-export-summary-row" }, Ud = { class: "di-export-summary-count" }, Dd = {
  key: 0,
  class: "di-indicator",
  "data-dev-inspector": ""
}, Vd = { class: "di-modal" }, Ed = ["value"], Pd = { class: "di-modal-actions" }, Bd = { class: "di-modal" }, Ad = { class: "di-file-drop" }, Ld = {
  key: 0,
  class: "di-error"
}, Od = { class: "di-modal-actions" }, Fd = ["disabled"], jd = /* @__PURE__ */ zt({
  __name: "DevPanel",
  setup(Z) {
    const a = Kt(), S = y("elements"), P = y(!1), ee = y(!1), oe = y(""), ue = y(""), Ce = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, $e = j(() => a.currentScreenSpec), G = j(() => a.getScreenConfig()), te = j(() => {
      var k;
      const r = G.value, l = $e.value;
      return !r && !l ? null : {
        name: (r == null ? void 0 : r.name) || (l == null ? void 0 : l.name) || "",
        description: (r == null ? void 0 : r.description) || (l == null ? void 0 : l.description) || "",
        componentPath: (r == null ? void 0 : r.componentPath) || (l == null ? void 0 : l.componentPath) || "",
        figmaUrl: (r == null ? void 0 : r.figmaUrl) || (l == null ? void 0 : l.figmaUrl) || "",
        apis: (r == null ? void 0 : r.apis) || ((k = l == null ? void 0 : l.apis) == null ? void 0 : k.map((L) => ({ ...L, loadTiming: void 0 }))) || [],
        auth: (r == null ? void 0 : r.auth) || null,
        notes: (r == null ? void 0 : r.notes) || (l != null && l.notes ? l.notes.join(`
`) : "")
      };
    }), be = j(() => Object.keys(a.elementConfigs).length), Ie = j(() => {
      const r = typeof window < "u" ? window.location.pathname : "/";
      return Object.entries(a.elementConfigs).filter(([, l]) => !l.pagePath || l.pagePath === r).map(([l, k]) => {
        var i, f, p;
        let L = "";
        return (i = k.note) != null && i.text ? L = k.note.text : k.fieldInfo ? L = `${k.fieldInfo.table}.${k.fieldInfo.column}` : (f = k.actionInfo) != null && f.description ? L = k.actionInfo.description : (p = k.actionInfo) != null && p.type ? (L = { navigate: "画面遷移", api: "API", modal: "モーダル", emit: "イベント", function: "関数", csv_export: "CSV出力", csv_import: "CSV取込", email: "メール送信" }[k.actionInfo.type] || k.actionInfo.type, k.actionInfo.target && (L += ` → ${k.actionInfo.target}`)) : k.formInfo && (L = k.formInfo.label || k.formInfo.inputType || "フォーム"), L || (L = l), { id: l, desc: L, type: k.elementType, isConditional: !!k.isConditional, tabContext: k.tabContext || "", modalName: k.modalName || "", config: k };
      });
    }), he = j(() => {
      const r = a.noteHighlightFilter;
      return r === "all" ? Ie.value : Ie.value.filter((l) => {
        var p, _, C, ae, le;
        const k = l.config, L = (p = k.note) == null ? void 0 : p.displayType, i = !!((_ = k.note) != null && _.condition || (C = k.note) != null && C.conditionColumn), f = !!((ae = k.note) != null && ae.storedCalc);
        switch (r) {
          case "db":
            return L === "db_direct" || L === "db_formatted";
          case "calculated":
            return L === "calculated";
          case "storedCalc":
            return f;
          case "static":
            return L === "static";
          case "conditional":
            return i;
          case "action":
            return k.elementType === "action";
          case "form":
            return k.elementType === "form";
          case "other":
            return L === "other" || !L && !k.elementType && !!((le = k.note) != null && le.text);
          default:
            return !0;
        }
      });
    }), me = j(() => he.value.filter((r) => !r.isConditional && !r.tabContext));
    function E(r) {
      let l = r.elements.length;
      for (const k of Object.values(r.children)) l += E(k);
      return l;
    }
    function Ee(r, l) {
      const k = {};
      return r.forEach((L) => {
        const i = L[l];
        if (!i) return;
        const f = i.split(">").map((_) => _.trim()).filter(Boolean);
        let p = k;
        for (let _ = 0; _ < f.length; _++) {
          const C = f[_];
          p[C] || (p[C] = { elements: [], children: {} }), _ === f.length - 1 && p[C].elements.push(L), p = p[C].children;
        }
      }), k;
    }
    const at = j(() => Ee(
      he.value.filter((r) => r.tabContext && !r.isConditional),
      "tabContext"
    )), Se = j(() => he.value.filter((r) => r.tabContext && !r.isConditional)), Xe = y(!0), ye = y(!1), ne = y({}), je = j(() => he.value.filter((r) => r.isConditional)), H = j(() => he.value.filter((r) => r.isConditional && r.modalName)), M = j(() => Ee(H.value, "modalName")), g = j(() => he.value.filter((r) => r.isConditional && !r.modalName)), F = y(!1), R = y({}), se = j(() => Object.values(a.elementConfigs).filter((r) => {
      var l, k;
      return !!((l = r.note) != null && l.text || (k = r.note) != null && k.displayType);
    }).length), z = j(() => {
      const r = a.noteHighlightFilter;
      return r === "all" ? se.value : Object.values(a.elementConfigs).filter((l) => {
        var f, p, _, C, ae, le, _t;
        if (!((f = l.note) != null && f.text || (p = l.note) != null && p.displayType || l.elementType)) return !1;
        const k = (_ = l.note) == null ? void 0 : _.displayType, L = !!((C = l.note) != null && C.condition || (ae = l.note) != null && ae.conditionColumn), i = !!((le = l.note) != null && le.storedCalc);
        switch (r) {
          case "db":
            return k === "db_direct" || k === "db_formatted";
          case "calculated":
            return k === "calculated";
          case "storedCalc":
            return i;
          case "static":
            return k === "static";
          case "conditional":
            return L;
          case "action":
            return l.elementType === "action";
          case "form":
            return l.elementType === "form";
          case "other":
            return k === "other" || !k && !l.elementType && !!((_t = l.note) != null && _t.text);
          default:
            return !0;
        }
      }).length;
    });
    function N() {
      const r = a.exportConfigs();
      navigator.clipboard.writeText(r), P.value = !1;
    }
    function B() {
      const r = a.exportConfigs(), l = new Blob([r], { type: "application/json" }), k = URL.createObjectURL(l), L = document.createElement("a");
      L.href = k, L.download = "dev-mode-configs.json", L.click(), URL.revokeObjectURL(k), P.value = !1;
    }
    function $() {
      a.downloadAnnotations();
    }
    async function U() {
      try {
        await Po(
          a.currentScreenSpec,
          a.elementConfigs,
          { systemName: "System" }
        );
      } catch (r) {
        console.error("Failed to export xlsx:", r), alert("xlsx export failed. Make sure xlsx package is installed.");
      }
    }
    function _e() {
      try {
        a.importConfigs(oe.value), oe.value = "", ue.value = "", ee.value = !1;
      } catch {
        ue.value = "JSONの形式が正しくありません";
      }
    }
    function J(r) {
      var i;
      const k = (i = r.target.files) == null ? void 0 : i[0];
      if (!k) return;
      const L = new FileReader();
      L.onload = (f) => {
        var p;
        oe.value = (p = f.target) == null ? void 0 : p.result;
      }, L.readAsText(k);
    }
    function We() {
      confirm("すべての要素設定を削除しますか？") && a.clearAllConfigs();
    }
    y("/dev-inspector-analysis.json"), y(!1), y(""), y(0), y(!1);
    const ge = [
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
    Rt(() => a.isPanelOpen, (r) => {
      r && a.detectBrokenAnnotations();
    });
    function lt() {
      confirm(`${Ze.value}件の壊れたメモを削除しますか？`) && a.deleteBrokenAnnotations();
    }
    const Ke = y(!1), qe = y(null), Q = y({
      table: "",
      column: "",
      name: "",
      columnType: "",
      description: "",
      entries: [],
      transitions: []
    }), Pe = j(() => Object.keys(a.masterDefinitions).length), dt = j(() => {
      const r = Object.values(a.masterDefinitions), l = {};
      for (const k of r)
        l[k.table] || (l[k.table] = []), l[k.table].push(k);
      return l;
    });
    function Je(r) {
      if (r) {
        const l = a.getMasterDefinition(r);
        l && (qe.value = r, Q.value = {
          table: l.table,
          column: l.column,
          name: l.name,
          columnType: l.columnType || "",
          description: l.description || "",
          entries: [...l.entries.map((k) => ({ ...k }))],
          transitions: l.transitions ? l.transitions.map((k) => ({ ...k })) : []
        });
      } else
        qe.value = null, Q.value = {
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
      const r = Q.value;
      if (!r.table || !r.column) return;
      const l = `${r.table}.${r.column}`, k = r.transitions.filter((i) => i.from || i.to || i.trigger), L = {
        id: l,
        table: r.table,
        column: r.column,
        name: r.name || r.column,
        columnType: r.columnType || void 0,
        description: r.description || void 0,
        entries: r.entries.filter((i) => i.value || i.label),
        transitions: k.length > 0 ? k : void 0,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      a.setMasterDefinition(L), Ke.value = !1;
    }
    function rt() {
      Q.value.entries.push({ value: "", label: "" });
    }
    function ct(r) {
      Q.value.entries.splice(r, 1);
    }
    function we() {
      Q.value.transitions.push({ from: "", to: "", trigger: "" });
    }
    function Be(r) {
      Q.value.transitions.splice(r, 1);
    }
    function Ue(r) {
      confirm(`マスタ定義「${r}」を削除しますか？`) && a.deleteMasterDefinition(r);
    }
    const He = y(!1), ot = y(null), K = y({
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
    }), Qe = y(""), ft = y(""), nt = j(() => Object.keys(a.batchDefinitions).length), Mt = j(() => Object.values(a.batchDefinitions));
    function wt(r) {
      if (r) {
        const l = a.getBatchDefinition(r);
        l && (ot.value = r, K.value = {
          name: l.name,
          schedule: l.schedule || "",
          trigger: l.trigger || "",
          description: l.description || "",
          inputTables: l.inputTables ? [...l.inputTables] : [],
          outputTables: l.outputTables ? [...l.outputTables] : [],
          steps: l.steps.map((k) => ({ ...k })),
          timeout: l.timeout || "",
          retryPolicy: l.retryPolicy || "",
          notifyOnError: l.notifyOnError || "",
          notifyOnComplete: l.notifyOnComplete || ""
        });
      } else
        ot.value = null, K.value = {
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
      Qe.value = "", ft.value = "", He.value = !0;
    }
    function St() {
      const r = K.value;
      if (!r.name) return;
      const k = {
        id: ot.value || `batch_${r.name.replace(/\s+/g, "_").toLowerCase()}_${Date.now()}`,
        name: r.name,
        schedule: r.schedule || void 0,
        trigger: r.trigger || void 0,
        description: r.description || void 0,
        inputTables: r.inputTables.length > 0 ? r.inputTables : void 0,
        outputTables: r.outputTables.length > 0 ? r.outputTables : void 0,
        steps: r.steps.filter((L) => L.description).map((L, i) => ({ ...L, order: i + 1 })),
        timeout: r.timeout || void 0,
        retryPolicy: r.retryPolicy || void 0,
        notifyOnError: r.notifyOnError || void 0,
        notifyOnComplete: r.notifyOnComplete || void 0,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      a.setBatchDefinition(k), He.value = !1;
    }
    function Ut() {
      const r = K.value.steps.length + 1;
      K.value.steps.push({ order: r, description: "" });
    }
    function Bt(r) {
      K.value.steps.splice(r, 1);
    }
    function At(r) {
      var l;
      confirm(`バッチ定義「${((l = a.getBatchDefinition(r)) == null ? void 0 : l.name) || r}」を削除しますか？`) && a.deleteBatchDefinition(r);
    }
    function Lt() {
      const r = Qe.value.trim();
      r && !K.value.inputTables.includes(r) && K.value.inputTables.push(r), Qe.value = "";
    }
    function Ot(r) {
      K.value.inputTables.splice(r, 1);
    }
    function Ne() {
      const r = ft.value.trim();
      r && !K.value.outputTables.includes(r) && K.value.outputTables.push(r), ft.value = "";
    }
    function Ge(r) {
      K.value.outputTables.splice(r, 1);
    }
    const et = [
      { value: "column", label: "カラム", placeholder: "users.email, orders..." },
      { value: "api", label: "API", placeholder: "GET /api/users..." },
      { value: "text", label: "テキスト", placeholder: "メモ、説明文で検索..." }
    ], Ct = j(() => {
      var r;
      return ((r = et.find((l) => l.value === a.crossSearchMode)) == null ? void 0 : r.placeholder) || "検索...";
    }), Y = j(() => {
      const r = {};
      for (const l of a.crossSearchResults)
        r[l.pagePath] || (r[l.pagePath] = { pagePath: l.pagePath, pageName: l.pageName, items: [] }), r[l.pagePath].items.push(l);
      return Object.values(r);
    }), De = j(() => Y.value.length), re = j(() => {
      const r = a.unannotatedElements;
      return {
        binding: r.filter((l) => l.category === "binding").length,
        form: r.filter((l) => l.category === "form").length,
        action: r.filter((l) => l.category === "action").length
      };
    });
    function Ae() {
      a.showUnannotatedDetection ? (a.showUnannotatedDetection = !1, a.unannotatedElements = [], a.hoveredUnannotatedSelector = null) : (a.showUnannotatedDetection = !0, a.detectUnannotatedElements());
    }
    function vt(r) {
      a.unannotatedElements = a.unannotatedElements.filter((l) => l.selector !== r);
    }
    function pt(r) {
      a.hoveredUnannotatedSelector = r;
      try {
        const l = document.querySelector(r);
        if (!l) return;
        const k = l.getBoundingClientRect();
        (k.bottom < 0 || k.top > window.innerHeight) && l.scrollIntoView({ behavior: "smooth", block: "center" });
      } catch {
      }
    }
    function yt() {
      a.hoveredUnannotatedSelector = null;
    }
    function ke(r) {
      a.hoveredSelector = r;
      try {
        const l = document.querySelector(r);
        if (!l) return;
        const k = l.getBoundingClientRect();
        (k.bottom < 0 || k.top > window.innerHeight) && l.scrollIntoView({ behavior: "smooth", block: "center" });
      } catch {
      }
    }
    function d() {
      a.hoveredSelector = null;
    }
    const Le = y(null), fe = y(null);
    function X(r, l) {
      Le.value = l, r.dataTransfer && (r.dataTransfer.effectAllowed = "move", r.dataTransfer.setData("text/plain", l));
    }
    function ce() {
      Le.value = null, fe.value = null;
    }
    function Re(r, l) {
      r.preventDefault(), r.dataTransfer && (r.dataTransfer.dropEffect = "move"), fe.value = l;
    }
    function Ve(r, l) {
      const k = r.relatedTarget, L = r.currentTarget;
      L && k && L.contains(k) || fe.value === l && (fe.value = null);
    }
    function Te(r, l) {
      r.preventDefault(), fe.value = null;
      const k = Le.value;
      if (Le.value = null, !(!k || !a.elementConfigs[k])) {
        if (l === "__page__")
          a.setElementConfig(k, { tabContext: void 0, modalName: void 0, isConditional: !1 });
        else if (l.startsWith("tab:")) {
          const i = l.slice(4);
          a.setElementConfig(k, { tabContext: i, modalName: void 0, isConditional: !1 });
        } else if (l === "__modal_unnamed__")
          a.setElementConfig(k, { isConditional: !0, modalName: void 0, tabContext: void 0 });
        else if (l.startsWith("modal:")) {
          const i = l.slice(6);
          a.setElementConfig(k, { isConditional: !0, modalName: i, tabContext: void 0 });
        }
      }
    }
    const tt = y(null), ve = y("");
    function ze(r, l, k) {
      k.stopPropagation(), tt.value = r, ve.value = l;
    }
    function ht(r) {
      const l = ve.value.trim();
      if (tt.value = null, !!l) {
        if (r.startsWith("tab:")) {
          const k = r.slice(4), L = k.split(" > ");
          L[L.length - 1] = l;
          const i = L.join(" > ");
          if (k === i) return;
          for (const [_, C] of Object.entries(a.elementConfigs))
            C.tabContext && (C.tabContext === k ? a.setElementConfig(_, { tabContext: i }) : C.tabContext.startsWith(k + " > ") && a.setElementConfig(_, { tabContext: i + C.tabContext.slice(k.length) }));
          const f = k.replace(/ > /g, ">"), p = i.replace(/ > /g, ">");
          ne.value[f] !== void 0 && (ne.value[p] = ne.value[f], delete ne.value[f]);
        } else if (r.startsWith("modal:")) {
          const k = r.slice(6), L = k.split(" > ");
          L[L.length - 1] = l;
          const i = L.join(" > ");
          if (k === i) return;
          for (const [_, C] of Object.entries(a.elementConfigs))
            C.modalName && (C.modalName === k ? a.setElementConfig(_, { modalName: i }) : C.modalName.startsWith(k + " > ") && a.setElementConfig(_, { modalName: i + C.modalName.slice(k.length) }));
          const f = k.replace(/ > /g, ">"), p = i.replace(/ > /g, ">");
          R.value[f] !== void 0 && (R.value[p] = R.value[f], delete R.value[f]);
        }
      }
    }
    function $t() {
      tt.value = null, ve.value = "";
    }
    function st(r, l) {
      r.key === "Enter" ? ht(l) : r.key === "Escape" && $t();
    }
    const V = y(null), pe = y("");
    function Oe(r, l) {
      V.value = r, pe.value = "";
    }
    function Ye() {
      const r = pe.value.trim();
      if (V.value = null, !!r)
        for (const l of g.value)
          a.setElementConfig(l.id, { modalName: r, isConditional: !0 });
    }
    function xe() {
      V.value = null, pe.value = "";
    }
    const ie = j(() => typeof window < "u" ? window.location.pathname : "/"), bt = j(() => {
      const r = a.screenFlowData, l = {};
      for (const k of r.edges) {
        if (!l[k.from]) {
          const L = r.nodes.find((i) => i.path === k.from) || { path: k.from, name: k.from, annotationCount: 0 };
          l[k.from] = { node: L, edges: [] };
        }
        l[k.from].edges.push(k);
      }
      return Object.values(l);
    });
    function Dt(r) {
      r && a.startEditing(r);
    }
    return (r, l) => {
      var k, L;
      return n(), s(I, null, [
        (n(), mt(xt, { to: "body" }, [
          u(a).isEnabled && !u(a).isPanelOpen ? (n(), s("button", {
            key: 0,
            onClick: l[0] || (l[0] = //@ts-ignore
            (...i) => u(a).openPanel && u(a).openPanel(...i)),
            class: "di-fab",
            title: "画面仕様を表示",
            "data-dev-inspector": ""
          }, [
            T(u(Zt), { style: { width: "20px", height: "20px" } })
          ])) : v("", !0)
        ])),
        (n(), mt(xt, { to: "body" }, [
          u(a).isEnabled && u(a).isPanelOpen ? (n(), s("div", Bo, [
            e("div", Ao, [
              e("div", Lo, [
                T(u(xl), { style: { width: "20px", height: "20px", color: "#60a5fa" } }),
                l[69] || (l[69] = e("span", null, "Developer Mode", -1))
              ]),
              e("button", {
                onClick: l[1] || (l[1] = //@ts-ignore
                (...i) => u(a).closePanel && u(a).closePanel(...i)),
                class: "di-close-btn"
              }, [
                T(u(kt), { style: { width: "20px", height: "20px" } })
              ])
            ]),
            e("div", Oo, [
              e("button", {
                onClick: l[2] || (l[2] = (i) => S.value = "elements"),
                class: A(["di-tab-btn", { active: S.value === "elements" }])
              }, [
                T(u($l), { style: { width: "14px", height: "14px" } }),
                l[70] || (l[70] = e("span", null, "要素設定", -1)),
                be.value > 0 ? (n(), s("span", Fo, c(be.value), 1)) : v("", !0)
              ], 2),
              e("button", {
                onClick: l[3] || (l[3] = (i) => S.value = "masters"),
                class: A(["di-tab-btn", { active: S.value === "masters" }])
              }, [
                T(u(It), { style: { width: "14px", height: "14px" } }),
                l[71] || (l[71] = e("span", null, "マスタ", -1)),
                Pe.value > 0 ? (n(), s("span", jo, c(Pe.value), 1)) : v("", !0)
              ], 2),
              e("button", {
                onClick: l[4] || (l[4] = (i) => S.value = "batches"),
                class: A(["di-tab-btn", { active: S.value === "batches" }])
              }, [
                T(u(kl), { style: { width: "14px", height: "14px" } }),
                l[72] || (l[72] = e("span", null, "バッチ", -1)),
                nt.value > 0 ? (n(), s("span", qo, c(nt.value), 1)) : v("", !0)
              ], 2),
              e("button", {
                onClick: l[5] || (l[5] = (i) => S.value = "export"),
                class: A(["di-tab-btn", { active: S.value === "export" }])
              }, [
                T(u(tl), { style: { width: "14px", height: "14px" } }),
                l[73] || (l[73] = e("span", null, "出力", -1))
              ], 2)
            ]),
            h(e("div", Ho, [
              e("button", {
                onClick: l[6] || (l[6] = //@ts-ignore
                (...i) => u(a).togglePickMode && u(a).togglePickMode(...i)),
                class: A(["di-pick-btn", { active: u(a).isPickMode }])
              }, [
                T(u(Cl), { style: { width: "16px", height: "16px" } }),
                e("span", null, c(u(a).isPickMode ? "要素選択中..." : "任意の要素にメモを追加"), 1)
              ], 2),
              se.value > 0 ? (n(), s("button", {
                key: 0,
                onClick: l[7] || (l[7] = //@ts-ignore
                (...i) => u(a).toggleNoteHighlights && u(a).toggleNoteHighlights(...i)),
                class: A(["di-note-toggle-btn", { active: u(a).showNoteHighlights }])
              }, [
                u(a).showNoteHighlights ? (n(), mt(u(ko), {
                  key: 0,
                  style: { width: "14px", height: "14px" }
                })) : (n(), mt(u(go), {
                  key: 1,
                  style: { width: "14px", height: "14px" }
                })),
                l[74] || (l[74] = e("span", null, "メモハイライト", -1)),
                e("span", Ro, c(u(a).noteHighlightFilter === "all" ? se.value : `${z.value}/${se.value}`), 1)
              ], 2)) : v("", !0),
              se.value > 0 && u(a).showNoteHighlights ? (n(), s("div", zo, [
                e("div", Ko, [
                  (n(), s(I, null, D(ge, (i) => e("button", {
                    key: i.value,
                    onClick: (f) => u(a).noteHighlightFilter = i.value,
                    class: A(["di-filter-btn", { active: u(a).noteHighlightFilter === i.value }])
                  }, c(i.label), 11, Go)), 64))
                ])
              ])) : v("", !0),
              Ie.value.length > 0 ? (n(), s("div", Yo, [
                e("div", Xo, [
                  T(u($l), { style: { width: "14px", height: "14px", color: "#94a3b8" } }),
                  l[75] || (l[75] = e("span", null, "登録済み要素", -1)),
                  e("span", Wo, [
                    O(c(he.value.length), 1),
                    he.value.length !== Ie.value.length ? (n(), s("span", Zo, " / " + c(Ie.value.length), 1)) : v("", !0)
                  ])
                ]),
                e("div", Jo, [
                  me.value.length > 0 || fe.value === "__page__" ? (n(), s("div", Qo, [
                    e("button", {
                      class: A(["di-tree-group-header", { "di-drop-target": fe.value === "__page__" }]),
                      onClick: l[8] || (l[8] = (i) => Xe.value = !Xe.value),
                      onDragover: l[9] || (l[9] = (i) => Re(i, "__page__")),
                      onDragleave: l[10] || (l[10] = (i) => Ve(i, "__page__")),
                      onDrop: l[11] || (l[11] = (i) => Te(i, "__page__"))
                    }, [
                      e("span", No, c(Xe.value ? "▼" : "▶"), 1),
                      l[76] || (l[76] = e("span", null, "タブ外", -1)),
                      e("span", en, c(me.value.length), 1)
                    ], 34),
                    Xe.value ? (n(), s("div", tn, [
                      (n(!0), s(I, null, D(me.value, (i) => (n(), s("div", {
                        key: i.id,
                        class: A(["di-element-item", { "di-element-item-active": u(a).hoveredSelector === i.id, "di-dragging": Le.value === i.id }]),
                        draggable: "true",
                        onDragstart: (f) => X(f, i.id),
                        onDragend: ce,
                        onClick: (f) => u(a).startEditing(i.id),
                        onMouseenter: (f) => ke(i.id),
                        onMouseleave: d
                      }, [
                        e("span", {
                          class: A(["di-element-type-badge", "di-element-type-" + (i.type || "other")])
                        }, c(i.type === "datasource" ? "DB" : i.type === "action" ? "Act" : i.type === "form" ? "Form" : i.type === "chart" ? "Chart" : "-"), 3),
                        e("div", on, [
                          e("div", nn, c(i.desc), 1)
                        ]),
                        e("button", {
                          class: "di-element-delete-btn",
                          onClick: de((f) => u(a).deleteElementConfig(i.id), ["stop"]),
                          title: "削除"
                        }, "×", 8, sn)
                      ], 42, ln))), 128))
                    ])) : v("", !0)
                  ])) : v("", !0),
                  Se.value.length > 0 || Le.value && !((k = fe.value) != null && k.startsWith("modal:")) && fe.value !== "__modal_unnamed__" ? (n(), s("div", an, [
                    e("button", {
                      class: "di-tree-group-header",
                      onClick: l[12] || (l[12] = (i) => ye.value = !ye.value)
                    }, [
                      e("span", dn, c(ye.value ? "▼" : "▶"), 1),
                      l[77] || (l[77] = e("span", null, "タブ内", -1)),
                      e("span", un, c(Se.value.length), 1)
                    ]),
                    ye.value ? (n(), s("div", rn, [
                      (n(!0), s(I, null, D(at.value, (i, f) => (n(), s("div", {
                        key: "t1-" + f,
                        class: "di-tree-subgroup"
                      }, [
                        tt.value === "tab:" + f ? (n(), s("div", cn, [
                          l[78] || (l[78] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                          h(e("input", {
                            class: "di-rename-input",
                            "onUpdate:modelValue": l[13] || (l[13] = (p) => ve.value = p),
                            onKeydown: (p) => st(p, "tab:" + f),
                            onBlur: (p) => ht("tab:" + f),
                            ref_for: !0,
                            ref: "renameInputRef",
                            autofocus: ""
                          }, null, 40, vn), [
                            [x, ve.value]
                          ])
                        ])) : (n(), s("button", {
                          key: 1,
                          class: A(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": fe.value === "tab:" + f }]),
                          onClick: (p) => ne.value[f] = !ne.value[f],
                          onDragover: (p) => Re(p, "tab:" + f),
                          onDragleave: (p) => Ve(p, "tab:" + f),
                          onDrop: (p) => Te(p, "tab:" + f)
                        }, [
                          e("span", mn, c(ne.value[f] ? "▼" : "▶"), 1),
                          l[79] || (l[79] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                          e("span", null, c(f), 1),
                          e("span", fn, c(E(i)), 1),
                          e("span", {
                            class: "di-rename-btn",
                            onClick: (p) => ze("tab:" + f, String(f), p),
                            title: "名前変更"
                          }, "✏", 8, bn)
                        ], 42, pn)),
                        ne.value[f] ? (n(), s("div", hn, [
                          i.elements.length > 0 ? (n(), s("div", yn, [
                            (n(!0), s(I, null, D(i.elements, (p) => (n(), s("div", {
                              key: p.id,
                              class: A(["di-element-item", { "di-element-item-active": u(a).hoveredSelector === p.id, "di-dragging": Le.value === p.id }]),
                              draggable: "true",
                              onDragstart: (_) => X(_, p.id),
                              onDragend: ce,
                              onClick: (_) => u(a).startEditing(p.id),
                              onMouseenter: (_) => ke(p.id),
                              onMouseleave: d
                            }, [
                              e("span", {
                                class: A(["di-element-type-badge", "di-element-type-" + (p.type || "other")])
                              }, c(p.type === "datasource" ? "DB" : p.type === "action" ? "Act" : p.type === "form" ? "Form" : p.type === "chart" ? "Chart" : "-"), 3),
                              e("div", kn, [
                                e("div", xn, c(p.desc), 1)
                              ]),
                              e("button", {
                                class: "di-element-delete-btn",
                                onClick: de((_) => u(a).deleteElementConfig(p.id), ["stop"]),
                                title: "削除"
                              }, "×", 8, wn)
                            ], 42, gn))), 128))
                          ])) : v("", !0),
                          Object.keys(i.children).length > 0 ? (n(), s("div", Cn, [
                            (n(!0), s(I, null, D(i.children, (p, _) => (n(), s("div", {
                              key: "t2-" + _,
                              class: "di-tree-subgroup"
                            }, [
                              tt.value === "tab:" + f + " > " + _ ? (n(), s("div", $n, [
                                l[80] || (l[80] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                                h(e("input", {
                                  class: "di-rename-input",
                                  "onUpdate:modelValue": l[14] || (l[14] = (C) => ve.value = C),
                                  onKeydown: (C) => st(C, "tab:" + f + " > " + _),
                                  onBlur: (C) => ht("tab:" + f + " > " + _),
                                  autofocus: ""
                                }, null, 40, _n), [
                                  [x, ve.value]
                                ])
                              ])) : (n(), s("button", {
                                key: 1,
                                class: A(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": fe.value === "tab:" + f + " > " + _ }]),
                                onClick: (C) => ne.value[f + ">" + _] = !ne.value[f + ">" + _],
                                onDragover: (C) => Re(C, "tab:" + f + " > " + _),
                                onDragleave: (C) => Ve(C, "tab:" + f + " > " + _),
                                onDrop: (C) => Te(C, "tab:" + f + " > " + _)
                              }, [
                                e("span", In, c(ne.value[f + ">" + _] ? "▼" : "▶"), 1),
                                l[81] || (l[81] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                                e("span", null, c(_), 1),
                                e("span", Mn, c(E(p)), 1),
                                e("span", {
                                  class: "di-rename-btn",
                                  onClick: (C) => ze("tab:" + f + " > " + _, String(_), C),
                                  title: "名前変更"
                                }, "✏", 8, Sn)
                              ], 42, Tn)),
                              ne.value[f + ">" + _] ? (n(), s("div", Un, [
                                p.elements.length > 0 ? (n(), s("div", Dn, [
                                  (n(!0), s(I, null, D(p.elements, (C) => (n(), s("div", {
                                    key: C.id,
                                    class: A(["di-element-item", { "di-element-item-active": u(a).hoveredSelector === C.id, "di-dragging": Le.value === C.id }]),
                                    draggable: "true",
                                    onDragstart: (ae) => X(ae, C.id),
                                    onDragend: ce,
                                    onClick: (ae) => u(a).startEditing(C.id),
                                    onMouseenter: (ae) => ke(C.id),
                                    onMouseleave: d
                                  }, [
                                    e("span", {
                                      class: A(["di-element-type-badge", "di-element-type-" + (C.type || "other")])
                                    }, c(C.type === "datasource" ? "DB" : C.type === "action" ? "Act" : C.type === "form" ? "Form" : C.type === "chart" ? "Chart" : "-"), 3),
                                    e("div", En, [
                                      e("div", Pn, c(C.desc), 1)
                                    ]),
                                    e("button", {
                                      class: "di-element-delete-btn",
                                      onClick: de((ae) => u(a).deleteElementConfig(C.id), ["stop"]),
                                      title: "削除"
                                    }, "×", 8, Bn)
                                  ], 42, Vn))), 128))
                                ])) : v("", !0),
                                Object.keys(p.children).length > 0 ? (n(), s("div", An, [
                                  (n(!0), s(I, null, D(p.children, (C, ae) => (n(), s("div", {
                                    key: "t3-" + ae,
                                    class: "di-tree-subgroup"
                                  }, [
                                    tt.value === "tab:" + f + " > " + _ + " > " + ae ? (n(), s("div", Ln, [
                                      l[82] || (l[82] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                                      h(e("input", {
                                        class: "di-rename-input",
                                        "onUpdate:modelValue": l[15] || (l[15] = (le) => ve.value = le),
                                        onKeydown: (le) => st(le, "tab:" + f + " > " + _ + " > " + ae),
                                        onBlur: (le) => ht("tab:" + f + " > " + _ + " > " + ae),
                                        autofocus: ""
                                      }, null, 40, On), [
                                        [x, ve.value]
                                      ])
                                    ])) : (n(), s("button", {
                                      key: 1,
                                      class: A(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": fe.value === "tab:" + f + " > " + _ + " > " + ae }]),
                                      onClick: (le) => ne.value[f + ">" + _ + ">" + ae] = !ne.value[f + ">" + _ + ">" + ae],
                                      onDragover: (le) => Re(le, "tab:" + f + " > " + _ + " > " + ae),
                                      onDragleave: (le) => Ve(le, "tab:" + f + " > " + _ + " > " + ae),
                                      onDrop: (le) => Te(le, "tab:" + f + " > " + _ + " > " + ae)
                                    }, [
                                      e("span", jn, c(ne.value[f + ">" + _ + ">" + ae] ? "▼" : "▶"), 1),
                                      l[83] || (l[83] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                                      e("span", null, c(ae), 1),
                                      e("span", qn, c(E(C)), 1),
                                      e("span", {
                                        class: "di-rename-btn",
                                        onClick: (le) => ze("tab:" + f + " > " + _ + " > " + ae, String(ae), le),
                                        title: "名前変更"
                                      }, "✏", 8, Hn)
                                    ], 42, Fn)),
                                    ne.value[f + ">" + _ + ">" + ae] ? (n(), s("div", Rn, [
                                      C.elements.length > 0 ? (n(), s("div", zn, [
                                        (n(!0), s(I, null, D(C.elements, (le) => (n(), s("div", {
                                          key: le.id,
                                          class: A(["di-element-item", { "di-element-item-active": u(a).hoveredSelector === le.id, "di-dragging": Le.value === le.id }]),
                                          draggable: "true",
                                          onDragstart: (_t) => X(_t, le.id),
                                          onDragend: ce,
                                          onClick: (_t) => u(a).startEditing(le.id),
                                          onMouseenter: (_t) => ke(le.id),
                                          onMouseleave: d
                                        }, [
                                          e("span", {
                                            class: A(["di-element-type-badge", "di-element-type-" + (le.type || "other")])
                                          }, c(le.type === "datasource" ? "DB" : le.type === "action" ? "Act" : le.type === "form" ? "Form" : le.type === "chart" ? "Chart" : "-"), 3),
                                          e("div", Gn, [
                                            e("div", Yn, c(le.desc), 1)
                                          ]),
                                          e("button", {
                                            class: "di-element-delete-btn",
                                            onClick: de((_t) => u(a).deleteElementConfig(le.id), ["stop"]),
                                            title: "削除"
                                          }, "×", 8, Xn)
                                        ], 42, Kn))), 128))
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
                  je.value.length > 0 || Le.value && ((L = fe.value) != null && L.startsWith("modal:") || fe.value === "__modal_unnamed__") ? (n(), s("div", Wn, [
                    e("button", {
                      class: "di-tree-group-header",
                      onClick: l[16] || (l[16] = (i) => F.value = !F.value)
                    }, [
                      e("span", Zn, c(F.value ? "▼" : "▶"), 1),
                      l[84] || (l[84] = e("span", null, "モーダル", -1)),
                      e("span", Jn, c(je.value.length), 1)
                    ]),
                    F.value ? (n(), s("div", Qn, [
                      (n(!0), s(I, null, D(M.value, (i, f) => (n(), s("div", {
                        key: "m1-" + f,
                        class: "di-tree-subgroup"
                      }, [
                        tt.value === "modal:" + f ? (n(), s("div", Nn, [
                          l[85] || (l[85] = e("span", { class: "di-tree-badge di-tree-badge-modal" }, "M", -1)),
                          h(e("input", {
                            class: "di-rename-input",
                            "onUpdate:modelValue": l[17] || (l[17] = (p) => ve.value = p),
                            onKeydown: (p) => st(p, "modal:" + f),
                            onBlur: (p) => ht("modal:" + f),
                            autofocus: ""
                          }, null, 40, es), [
                            [x, ve.value]
                          ])
                        ])) : (n(), s("button", {
                          key: 1,
                          class: A(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": fe.value === "modal:" + f }]),
                          onClick: (p) => R.value[String(f)] = !R.value[String(f)],
                          onDragover: (p) => Re(p, "modal:" + f),
                          onDragleave: (p) => Ve(p, "modal:" + f),
                          onDrop: (p) => Te(p, "modal:" + f)
                        }, [
                          e("span", ls, c(R.value[String(f)] ? "▼" : "▶"), 1),
                          l[86] || (l[86] = e("span", { class: "di-tree-badge di-tree-badge-modal" }, "M", -1)),
                          e("span", null, c(f), 1),
                          e("span", os, c(E(i)), 1),
                          e("span", {
                            class: "di-rename-btn",
                            onClick: (p) => ze("modal:" + f, String(f), p),
                            title: "名前変更"
                          }, "✏", 8, ns)
                        ], 42, ts)),
                        R.value[String(f)] ? (n(), s("div", ss, [
                          i.elements.length > 0 ? (n(), s("div", is, [
                            (n(!0), s(I, null, D(i.elements, (p) => (n(), s("div", {
                              key: p.id,
                              class: A(["di-element-item", { "di-element-item-active": u(a).hoveredSelector === p.id, "di-dragging": Le.value === p.id }]),
                              draggable: "true",
                              onDragstart: (_) => X(_, p.id),
                              onDragend: ce,
                              onClick: (_) => u(a).startEditing(p.id),
                              onMouseenter: (_) => ke(p.id),
                              onMouseleave: d
                            }, [
                              e("span", {
                                class: A(["di-element-type-badge", "di-element-type-" + (p.type || "other")])
                              }, c(p.type === "datasource" ? "DB" : p.type === "action" ? "Act" : p.type === "form" ? "Form" : p.type === "chart" ? "Chart" : "-"), 3),
                              e("div", ds, [
                                e("div", us, c(p.desc), 1)
                              ]),
                              e("button", {
                                class: "di-element-delete-btn",
                                onClick: de((_) => u(a).deleteElementConfig(p.id), ["stop"]),
                                title: "削除"
                              }, "×", 8, rs)
                            ], 42, as))), 128))
                          ])) : v("", !0),
                          Object.keys(i.children).length > 0 ? (n(), s("div", cs, [
                            (n(!0), s(I, null, D(i.children, (p, _) => (n(), s("div", {
                              key: "m2-" + _,
                              class: "di-tree-subgroup"
                            }, [
                              tt.value === "modal:" + f + " > " + _ ? (n(), s("div", vs, [
                                l[87] || (l[87] = e("span", { class: "di-tree-badge di-tree-badge-modal" }, "M", -1)),
                                h(e("input", {
                                  class: "di-rename-input",
                                  "onUpdate:modelValue": l[18] || (l[18] = (C) => ve.value = C),
                                  onKeydown: (C) => st(C, "modal:" + f + " > " + _),
                                  onBlur: (C) => ht("modal:" + f + " > " + _),
                                  autofocus: ""
                                }, null, 40, ps), [
                                  [x, ve.value]
                                ])
                              ])) : (n(), s("button", {
                                key: 1,
                                class: A(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": fe.value === "modal:" + f + " > " + _ }]),
                                onClick: (C) => R.value[f + ">" + _] = !R.value[f + ">" + _],
                                onDragover: (C) => Re(C, "modal:" + f + " > " + _),
                                onDragleave: (C) => Ve(C, "modal:" + f + " > " + _),
                                onDrop: (C) => Te(C, "modal:" + f + " > " + _)
                              }, [
                                e("span", fs, c(R.value[f + ">" + _] ? "▼" : "▶"), 1),
                                l[88] || (l[88] = e("span", { class: "di-tree-badge di-tree-badge-modal" }, "M", -1)),
                                e("span", null, c(_), 1),
                                e("span", bs, c(E(p)), 1),
                                e("span", {
                                  class: "di-rename-btn",
                                  onClick: (C) => ze("modal:" + f + " > " + _, String(_), C),
                                  title: "名前変更"
                                }, "✏", 8, hs)
                              ], 42, ms)),
                              R.value[f + ">" + _] ? (n(), s("div", ys, [
                                p.elements.length > 0 ? (n(), s("div", gs, [
                                  (n(!0), s(I, null, D(p.elements, (C) => (n(), s("div", {
                                    key: C.id,
                                    class: A(["di-element-item", { "di-element-item-active": u(a).hoveredSelector === C.id, "di-dragging": Le.value === C.id }]),
                                    draggable: "true",
                                    onDragstart: (ae) => X(ae, C.id),
                                    onDragend: ce,
                                    onClick: (ae) => u(a).startEditing(C.id),
                                    onMouseenter: (ae) => ke(C.id),
                                    onMouseleave: d
                                  }, [
                                    e("span", {
                                      class: A(["di-element-type-badge", "di-element-type-" + (C.type || "other")])
                                    }, c(C.type === "datasource" ? "DB" : C.type === "action" ? "Act" : C.type === "form" ? "Form" : C.type === "chart" ? "Chart" : "-"), 3),
                                    e("div", xs, [
                                      e("div", ws, c(C.desc), 1)
                                    ]),
                                    e("button", {
                                      class: "di-element-delete-btn",
                                      onClick: de((ae) => u(a).deleteElementConfig(C.id), ["stop"]),
                                      title: "削除"
                                    }, "×", 8, Cs)
                                  ], 42, ks))), 128))
                                ])) : v("", !0)
                              ])) : v("", !0)
                            ]))), 128))
                          ])) : v("", !0)
                        ])) : v("", !0)
                      ]))), 128)),
                      g.value.length > 0 || fe.value === "__modal_unnamed__" ? (n(), s("div", $s, [
                        V.value === "__unnamed__" ? (n(), s("div", _s, [
                          l[89] || (l[89] = e("span", { class: "di-tree-badge di-tree-badge-modal" }, "M", -1)),
                          h(e("input", {
                            class: "di-rename-input",
                            "onUpdate:modelValue": l[19] || (l[19] = (i) => pe.value = i),
                            onKeydown: [
                              Pt(Ye, ["enter"]),
                              Pt(xe, ["escape"])
                            ],
                            onBlur: Ye,
                            autofocus: ""
                          }, null, 544), [
                            [x, pe.value]
                          ])
                        ])) : (n(), s("button", {
                          key: 1,
                          class: A(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": fe.value === "__modal_unnamed__" }]),
                          onClick: l[21] || (l[21] = (i) => R.value.__unnamed = !R.value.__unnamed),
                          onDragover: l[22] || (l[22] = (i) => Re(i, "__modal_unnamed__")),
                          onDragleave: l[23] || (l[23] = (i) => Ve(i, "__modal_unnamed__")),
                          onDrop: l[24] || (l[24] = (i) => Te(i, "__modal_unnamed__"))
                        }, [
                          e("span", Ts, c(R.value.__unnamed ? "▼" : "▶"), 1),
                          l[90] || (l[90] = e("span", { class: "di-tree-badge di-tree-badge-modal" }, "M", -1)),
                          l[91] || (l[91] = e("span", null, "未分類", -1)),
                          e("span", Is, c(g.value.length), 1),
                          e("span", {
                            class: "di-rename-btn",
                            onClick: l[20] || (l[20] = de((i) => Oe("__unnamed__"), ["stop"])),
                            title: "モーダル名を設定"
                          }, "✏")
                        ], 34)),
                        R.value.__unnamed ? (n(), s("div", Ms, [
                          (n(!0), s(I, null, D(g.value, (i) => (n(), s("div", {
                            key: i.id,
                            class: A(["di-element-item", { "di-element-item-active": u(a).hoveredSelector === i.id, "di-dragging": Le.value === i.id }]),
                            draggable: "true",
                            onDragstart: (f) => X(f, i.id),
                            onDragend: ce,
                            onClick: (f) => u(a).startEditing(i.id),
                            onMouseenter: (f) => ke(i.id),
                            onMouseleave: d
                          }, [
                            e("span", {
                              class: A(["di-element-type-badge", "di-element-type-" + (i.type || "other")])
                            }, c(i.type === "datasource" ? "DB" : i.type === "action" ? "Act" : i.type === "form" ? "Form" : i.type === "chart" ? "Chart" : "-"), 3),
                            e("div", Us, [
                              e("div", Ds, c(i.desc), 1)
                            ]),
                            e("button", {
                              class: "di-element-delete-btn",
                              onClick: de((f) => u(a).deleteElementConfig(i.id), ["stop"]),
                              title: "削除"
                            }, "×", 8, Vs)
                          ], 42, Ss))), 128))
                        ])) : v("", !0)
                      ])) : v("", !0)
                    ])) : v("", !0)
                  ])) : v("", !0)
                ])
              ])) : v("", !0),
              e("button", {
                onClick: Ae,
                class: A(["di-unannotated-btn", { active: u(a).showUnannotatedDetection }])
              }, [
                T(u(ho), { style: { width: "14px", height: "14px" } }),
                e("span", null, c(u(a).showUnannotatedDetection ? "未登録検出 ON" : "未登録要素を検出"), 1),
                u(a).unannotatedElements.length > 0 ? (n(), s("span", Es, c(u(a).unannotatedElements.length), 1)) : v("", !0)
              ], 2),
              u(a).showUnannotatedDetection && u(a).unannotatedElements.length > 0 ? (n(), s("div", Ps, [
                e("div", Bs, [
                  O(c(u(a).unannotatedElements.length) + "件検出: ", 1),
                  re.value.binding > 0 ? (n(), s("span", As, "バインディング " + c(re.value.binding), 1)) : v("", !0),
                  re.value.form > 0 ? (n(), s("span", Ls, " / フォーム " + c(re.value.form), 1)) : v("", !0),
                  re.value.action > 0 ? (n(), s("span", Os, " / アクション " + c(re.value.action), 1)) : v("", !0)
                ]),
                e("div", Fs, [
                  (n(!0), s(I, null, D(u(a).unannotatedElements, (i) => (n(), s("div", {
                    key: i.selector,
                    class: A(["di-unannotated-item", { "di-unannotated-item-active": u(a).hoveredUnannotatedSelector === i.selector, ["di-unannotated-item-" + i.category]: u(a).hoveredUnannotatedSelector === i.selector }]),
                    onMouseenter: (f) => pt(i.selector),
                    onMouseleave: yt
                  }, [
                    e("span", {
                      class: A(["di-unannotated-category", "di-unannotated-cat-" + i.category])
                    }, c(i.category === "binding" ? "DB" : i.category === "form" ? "Form" : "Act"), 3),
                    e("span", qs, c(i.text || i.tagName), 1),
                    e("button", {
                      onClick: (f) => u(a).quickAnnotate(i.selector, i.suggestedType),
                      class: "di-unannotated-register"
                    }, " 登録 ", 8, Hs),
                    e("button", {
                      onClick: (f) => vt(i.selector),
                      class: "di-unannotated-dismiss"
                    }, [
                      T(u(kt), { style: { width: "10px", height: "10px" } })
                    ], 8, Rs)
                  ], 42, js))), 128))
                ])
              ])) : v("", !0),
              u(a).showUnannotatedDetection && u(a).unannotatedElements.length === 0 ? (n(), s("div", zs, " 未登録の要素はありません ")) : v("", !0),
              Ze.value > 0 ? (n(), s("div", Ks, [
                e("div", Gs, [
                  T(u(po), { style: { width: "14px", height: "14px", color: "#f59e0b" } }),
                  e("span", null, c(Ze.value) + "件のメモが見つかりません", 1)
                ]),
                l[94] || (l[94] = e("div", { class: "di-broken-desc" }, "コード変更によりセレクタが壊れた可能性があります", -1)),
                e("div", Ys, [
                  (n(!0), s(I, null, D(u(a).brokenAnnotations, (i) => {
                    var f, p;
                    return n(), s("div", {
                      key: i,
                      class: "di-broken-item"
                    }, [
                      e("div", Xs, [
                        e("div", Ws, c(((p = (f = u(a).elementConfigs[i]) == null ? void 0 : f.note) == null ? void 0 : p.text) || "(メモなし)"), 1),
                        e("div", Zs, c(i), 1)
                      ]),
                      e("div", Js, [
                        e("button", {
                          onClick: (_) => u(a).startRemap(i),
                          class: "di-broken-remap-btn",
                          title: "新しい要素に再設定"
                        }, [
                          T(u(Cl), { style: { width: "12px", height: "12px" } }),
                          l[92] || (l[92] = O(" 再設定 ", -1))
                        ], 8, Qs),
                        e("button", {
                          onClick: (_) => {
                            u(a).deleteElementConfig(i), u(a).detectBrokenAnnotations();
                          },
                          class: "di-broken-item-delete",
                          title: "削除"
                        }, [
                          T(u(Ht), { style: { width: "12px", height: "12px" } })
                        ], 8, Ns)
                      ])
                    ]);
                  }), 128))
                ]),
                e("div", ei, [
                  e("button", {
                    onClick: lt,
                    class: "di-broken-delete-btn"
                  }, [
                    T(u(Ht), { style: { width: "12px", height: "12px" } }),
                    l[93] || (l[93] = O(" まとめて削除 ", -1))
                  ])
                ])
              ])) : v("", !0),
              v("", !0)
            ], 512), [
              [Ft, S.value === "elements"]
            ]),
            e("div", ti, [
              h(e("div", null, [
                te.value ? (n(), s(I, { key: 0 }, [
                  e("div", li, [
                    e("div", oi, [
                      e("h2", ni, c(te.value.name), 1),
                      e("button", {
                        onClick: l[27] || (l[27] = (i) => u(a).editingScreen = !0),
                        class: "di-screen-edit-btn",
                        title: "画面情報を編集"
                      }, [
                        T(u(_l), { style: { width: "14px", height: "14px" } })
                      ])
                    ]),
                    te.value.description ? (n(), s("p", si, c(te.value.description), 1)) : v("", !0),
                    te.value.auth ? (n(), s("div", ii, [
                      te.value.auth.required ? (n(), s("span", ai, [
                        T(u($o), { style: { width: "11px", height: "11px" } }),
                        l[104] || (l[104] = O(" ログイン必須 ", -1))
                      ])) : v("", !0),
                      (n(!0), s(I, null, D(te.value.auth.roles || [], (i) => (n(), s("span", {
                        key: i,
                        class: "di-auth-badge di-auth-role"
                      }, [
                        T(u(Uo), { style: { width: "11px", height: "11px" } }),
                        O(" " + c(i), 1)
                      ]))), 128)),
                      te.value.auth.description ? (n(), s("span", di, c(te.value.auth.description), 1)) : v("", !0)
                    ])) : v("", !0)
                  ]),
                  te.value.componentPath ? (n(), s("div", ui, [
                    e("div", ri, [
                      T(u(xl), { style: { width: "16px", height: "16px" } }),
                      l[105] || (l[105] = e("span", null, "Component Path", -1))
                    ]),
                    e("code", ci, c(te.value.componentPath), 1)
                  ])) : v("", !0),
                  te.value.figmaUrl ? (n(), s("div", vi, [
                    e("div", pi, [
                      T(u(yo), { style: { width: "16px", height: "16px" } }),
                      l[106] || (l[106] = e("span", null, "Figma Design", -1))
                    ]),
                    e("a", {
                      href: te.value.figmaUrl,
                      target: "_blank",
                      class: "di-link-purple"
                    }, c(te.value.figmaUrl), 9, mi)
                  ])) : v("", !0),
                  te.value.apis.length ? (n(), s("div", fi, [
                    e("div", bi, [
                      T(u(So), { style: { width: "16px", height: "16px" } }),
                      l[107] || (l[107] = e("span", null, "API Endpoints", -1))
                    ]),
                    e("div", hi, [
                      (n(!0), s(I, null, D(te.value.apis, (i, f) => (n(), s("div", {
                        key: f,
                        class: "di-api-item"
                      }, [
                        e("span", {
                          class: "di-method-badge",
                          style: it({ backgroundColor: Ce[i.method] + "20", color: Ce[i.method] })
                        }, c(i.method), 5),
                        e("div", yi, [
                          e("code", gi, c(i.endpoint), 1),
                          i.description ? (n(), s("p", ki, c(i.description), 1)) : v("", !0)
                        ]),
                        i.loadTiming ? (n(), s("span", xi, c(i.loadTiming === "onMount" ? "読込時" : i.loadTiming === "action" ? "アクション" : "条件付き"), 1)) : v("", !0)
                      ]))), 128))
                    ])
                  ])) : v("", !0),
                  te.value.notes ? (n(), s("div", wi, [
                    e("div", Ci, [
                      T(u(vo), { style: { width: "16px", height: "16px" } }),
                      l[108] || (l[108] = e("span", null, "Notes", -1))
                    ]),
                    e("p", $i, c(te.value.notes), 1)
                  ])) : v("", !0)
                ], 64)) : (n(), s("div", _i, [
                  T(u(Zt), { style: { width: "48px", height: "48px", color: "#334155" } }),
                  l[110] || (l[110] = e("p", null, [
                    O("この画面の仕様情報は"),
                    e("br"),
                    O("まだ登録されていません")
                  ], -1)),
                  e("button", {
                    onClick: l[28] || (l[28] = (i) => u(a).editingScreen = !0),
                    class: "di-screen-register-btn"
                  }, [
                    T(u(_l), { style: { width: "14px", height: "14px" } }),
                    l[109] || (l[109] = O(" 画面情報を登録 ", -1))
                  ])
                ])),
                e("div", Ti, [
                  e("div", Ii, [
                    T(u(Mo), { style: { width: "14px", height: "14px", color: "#94a3b8" } }),
                    l[111] || (l[111] = e("span", null, "横断検索", -1))
                  ]),
                  l[112] || (l[112] = e("div", { class: "di-cross-search-desc" }, "全画面のメモを横断検索。カラム名・APIエンドポイント・メモ内テキストで絞り込めます。", -1)),
                  e("div", Mi, [
                    e("div", Si, [
                      (n(), s(I, null, D(et, (i) => e("button", {
                        key: i.value,
                        onClick: (f) => u(a).crossSearchMode = i.value,
                        class: A(["di-filter-btn", { active: u(a).crossSearchMode === i.value }])
                      }, c(i.label), 11, Ui)), 64))
                    ]),
                    h(e("input", {
                      "onUpdate:modelValue": l[29] || (l[29] = (i) => u(a).crossSearchQuery = i),
                      type: "text",
                      class: "di-cross-search-input",
                      placeholder: Ct.value
                    }, null, 8, Di), [
                      [x, u(a).crossSearchQuery]
                    ]),
                    u(a).crossSearchQuery.trim() ? (n(), s("div", Vi, c(u(a).crossSearchResults.length) + "件 (" + c(De.value) + "画面) ", 1)) : v("", !0),
                    Y.value.length > 0 ? (n(), s("div", Ei, [
                      (n(!0), s(I, null, D(Y.value, (i) => (n(), s("div", {
                        key: i.pagePath,
                        class: "di-cross-search-group"
                      }, [
                        e("div", Pi, [
                          O(c(i.pagePath) + " ", 1),
                          i.pageName !== i.pagePath ? (n(), s("span", Bi, "(" + c(i.pageName) + ")", 1)) : v("", !0)
                        ]),
                        (n(!0), s(I, null, D(i.items, (f, p) => (n(), s("div", {
                          key: p,
                          class: A(["di-cross-search-item", f.elementType ? "di-cross-item-" + f.elementType : ""]),
                          onClick: (_) => f.selector && u(a).startEditing(f.selector)
                        }, [
                          e("span", Li, c(f.matchedField), 1),
                          f.matchContext ? (n(), s("span", Oi, c(f.matchContext), 1)) : v("", !0)
                        ], 10, Ai))), 128))
                      ]))), 128))
                    ])) : v("", !0)
                  ])
                ]),
                e("div", Fi, [
                  e("button", {
                    onClick: l[30] || (l[30] = (i) => u(a).showScreenFlow = !u(a).showScreenFlow),
                    class: A(["di-screen-flow-toggle", { active: u(a).showScreenFlow }])
                  }, [
                    T(u(Co), { style: { width: "14px", height: "14px" } }),
                    l[113] || (l[113] = e("span", null, "画面フロー", -1)),
                    u(a).screenFlowData.edges.length > 0 ? (n(), s("span", ji, c(u(a).screenFlowData.nodes.length) + "画面 / " + c(u(a).screenFlowData.edges.length) + "遷移 ", 1)) : v("", !0)
                  ], 2),
                  u(a).showScreenFlow ? (n(), s("div", qi, [
                    u(a).screenFlowData.edges.length === 0 ? (n(), s("div", Hi, " navigate型のアクションが登録されていません ")) : v("", !0),
                    (n(!0), s(I, null, D(bt.value, (i) => (n(), s("div", {
                      key: i.node.path,
                      class: "di-flow-group"
                    }, [
                      e("div", {
                        class: A(["di-flow-node", { "di-flow-node-current": i.node.path === ie.value }])
                      }, [
                        e("span", Ri, c(i.node.path), 1),
                        i.node.name !== i.node.path ? (n(), s("span", zi, "(" + c(i.node.name) + ")", 1)) : v("", !0)
                      ], 2),
                      (n(!0), s(I, null, D(i.edges, (f) => (n(), s("div", {
                        key: f.from + f.to,
                        class: "di-flow-edge",
                        onClick: (p) => Dt(f.selector)
                      }, [
                        l[114] || (l[114] = e("span", { class: "di-flow-arrow" }, "→", -1)),
                        e("span", Gi, c(f.to), 1),
                        f.label ? (n(), s("span", Yi, "[" + c(f.label) + "]", 1)) : v("", !0)
                      ], 8, Ki))), 128))
                    ]))), 128)),
                    u(a).screenFlowData.orphanPages.length > 0 ? (n(), s("div", Xi, [
                      l[115] || (l[115] = e("div", { class: "di-flow-orphans-header" }, "遷移なしのページ", -1)),
                      (n(!0), s(I, null, D(u(a).screenFlowData.orphanPages, (i) => (n(), s("span", {
                        key: i.path,
                        class: "di-flow-orphan-item"
                      }, c(i.path), 1))), 128))
                    ])) : v("", !0)
                  ])) : v("", !0)
                ])
              ], 512), [
                [Ft, S.value === "elements"]
              ]),
              h(e("div", null, [
                e("div", Wi, [
                  e("div", Zi, [
                    T(u(It), { style: { width: "16px", height: "16px", color: "#a78bfa" } }),
                    l[116] || (l[116] = e("span", null, "マスタ定義", -1)),
                    Pe.value > 0 ? (n(), s("span", Ji, c(Pe.value), 1)) : v("", !0),
                    e("button", {
                      onClick: l[31] || (l[31] = (i) => Je()),
                      class: "di-btn-icon",
                      style: { "margin-left": "auto" },
                      title: "新規追加"
                    }, [
                      T(u(jt), { style: { width: "14px", height: "14px" } })
                    ])
                  ]),
                  Pe.value > 0 ? (n(!0), s(I, { key: 0 }, D(dt.value, (i, f) => (n(), s("div", {
                    key: f,
                    class: "di-master-table-group"
                  }, [
                    e("div", Qi, c(f), 1),
                    (n(!0), s(I, null, D(i, (p) => (n(), s("div", {
                      key: p.id,
                      class: "di-master-item",
                      onClick: (_) => Je(p.id)
                    }, [
                      e("div", ea, [
                        e("span", ta, "." + c(p.column), 1),
                        p.columnType ? (n(), s("span", la, c(p.columnType), 1)) : v("", !0),
                        e("span", oa, c(p.name), 1)
                      ]),
                      e("div", na, [
                        (n(!0), s(I, null, D(p.entries.slice(0, 5), (_, C) => (n(), s("span", {
                          key: C,
                          class: "di-master-entry-chip",
                          style: it(_.color ? { borderColor: _.color, color: _.color } : {})
                        }, c(_.value) + "=" + c(_.label), 5))), 128)),
                        p.entries.length > 5 ? (n(), s("span", sa, "+" + c(p.entries.length - 5), 1)) : v("", !0)
                      ])
                    ], 8, Ni))), 128))
                  ]))), 128)) : (n(), s("div", {
                    key: 1,
                    class: "di-master-empty",
                    onClick: l[32] || (l[32] = (i) => Je())
                  }, [...l[117] || (l[117] = [
                    e("span", null, "テーブル.カラムのマスタ値を定義", -1)
                  ])]))
                ]),
                (n(), mt(xt, { to: "body" }, [
                  Ke.value ? (n(), s("div", {
                    key: 0,
                    "data-dev-inspector": "",
                    class: "di-modal-overlay",
                    onClick: l[41] || (l[41] = de((i) => Ke.value = !1, ["self"]))
                  }, [
                    e("div", ia, [
                      e("div", aa, [
                        e("h3", null, c(qe.value ? "マスタ定義を編集" : "新規マスタ定義"), 1),
                        e("button", {
                          onClick: l[33] || (l[33] = (i) => Ke.value = !1),
                          class: "di-close-btn"
                        }, [
                          T(u(kt), { style: { width: "16px", height: "16px" } })
                        ])
                      ]),
                      e("div", da, [
                        e("div", ua, [
                          e("div", ra, [
                            l[118] || (l[118] = e("label", null, "テーブル", -1)),
                            h(e("input", {
                              "onUpdate:modelValue": l[34] || (l[34] = (i) => Q.value.table = i),
                              placeholder: "orders",
                              disabled: !!qe.value
                            }, null, 8, ca), [
                              [x, Q.value.table]
                            ])
                          ]),
                          e("div", va, [
                            l[119] || (l[119] = e("label", null, "カラム", -1)),
                            h(e("input", {
                              "onUpdate:modelValue": l[35] || (l[35] = (i) => Q.value.column = i),
                              placeholder: "status",
                              disabled: !!qe.value
                            }, null, 8, pa), [
                              [x, Q.value.column]
                            ])
                          ])
                        ]),
                        e("div", ma, [
                          e("div", fa, [
                            l[120] || (l[120] = e("label", null, "表示名", -1)),
                            h(e("input", {
                              "onUpdate:modelValue": l[36] || (l[36] = (i) => Q.value.name = i),
                              placeholder: "ステータス"
                            }, null, 512), [
                              [x, Q.value.name]
                            ])
                          ]),
                          e("div", ba, [
                            l[121] || (l[121] = e("label", null, "型", -1)),
                            h(e("input", {
                              "onUpdate:modelValue": l[37] || (l[37] = (i) => Q.value.columnType = i),
                              placeholder: "integer"
                            }, null, 512), [
                              [x, Q.value.columnType]
                            ])
                          ])
                        ]),
                        e("div", ha, [
                          l[122] || (l[122] = e("label", null, "説明", -1)),
                          h(e("input", {
                            "onUpdate:modelValue": l[38] || (l[38] = (i) => Q.value.description = i),
                            placeholder: "注文のステータスを管理"
                          }, null, 512), [
                            [x, Q.value.description]
                          ])
                        ]),
                        e("div", ya, [
                          l[123] || (l[123] = e("label", null, "マスタ値", -1)),
                          e("button", {
                            onClick: rt,
                            class: "di-btn-icon",
                            title: "追加"
                          }, [
                            T(u(jt), { style: { width: "14px", height: "14px" } })
                          ])
                        ]),
                        e("div", ga, [
                          (n(!0), s(I, null, D(Q.value.entries, (i, f) => (n(), s("div", {
                            key: f,
                            class: "di-master-entry-row"
                          }, [
                            h(e("input", {
                              "onUpdate:modelValue": (p) => i.value = p,
                              placeholder: "値",
                              class: "di-master-entry-value"
                            }, null, 8, ka), [
                              [x, i.value]
                            ]),
                            h(e("input", {
                              "onUpdate:modelValue": (p) => i.label = p,
                              placeholder: "ラベル",
                              class: "di-master-entry-label"
                            }, null, 8, xa), [
                              [x, i.label]
                            ]),
                            h(e("input", {
                              "onUpdate:modelValue": (p) => i.color = p,
                              placeholder: "#色",
                              class: "di-master-entry-color"
                            }, null, 8, wa), [
                              [x, i.color]
                            ]),
                            h(e("input", {
                              "onUpdate:modelValue": (p) => i.description = p,
                              placeholder: "説明",
                              class: "di-master-entry-desc"
                            }, null, 8, Ca), [
                              [x, i.description]
                            ]),
                            e("button", {
                              onClick: (p) => ct(f),
                              class: "di-btn-icon di-btn-icon-danger"
                            }, [
                              T(u(kt), { style: { width: "12px", height: "12px" } })
                            ], 8, $a)
                          ]))), 128))
                        ]),
                        e("div", _a, [
                          l[124] || (l[124] = e("label", null, "状態遷移", -1)),
                          e("button", {
                            onClick: we,
                            class: "di-btn-icon",
                            title: "遷移を追加"
                          }, [
                            T(u(jt), { style: { width: "14px", height: "14px" } })
                          ])
                        ]),
                        Q.value.transitions.length > 0 ? (n(), s("div", Ta, [
                          l[128] || (l[128] = e("div", { class: "di-transition-header" }, [
                            e("span", { class: "di-transition-col-from" }, "遷移元"),
                            e("span", { class: "di-transition-col-arrow" }, "→"),
                            e("span", { class: "di-transition-col-to" }, "遷移先"),
                            e("span", { class: "di-transition-col-trigger" }, "トリガー"),
                            e("span", { class: "di-transition-col-condition" }, "条件"),
                            e("span", { class: "di-transition-col-act" })
                          ], -1)),
                          (n(!0), s(I, null, D(Q.value.transitions, (i, f) => (n(), s("div", {
                            key: f,
                            class: "di-transition-row"
                          }, [
                            h(e("select", {
                              "onUpdate:modelValue": (p) => i.from = p,
                              class: "di-transition-select di-transition-col-from"
                            }, [
                              l[125] || (l[125] = e("option", { value: "" }, "-", -1)),
                              (n(!0), s(I, null, D(Q.value.entries.filter((p) => p.value), (p) => (n(), s("option", {
                                key: p.value,
                                value: p.value
                              }, c(p.label || p.value), 9, Ma))), 128))
                            ], 8, Ia), [
                              [Me, i.from]
                            ]),
                            l[127] || (l[127] = e("span", { class: "di-transition-col-arrow" }, "→", -1)),
                            h(e("select", {
                              "onUpdate:modelValue": (p) => i.to = p,
                              class: "di-transition-select di-transition-col-to"
                            }, [
                              l[126] || (l[126] = e("option", { value: "" }, "-", -1)),
                              (n(!0), s(I, null, D(Q.value.entries.filter((p) => p.value), (p) => (n(), s("option", {
                                key: p.value,
                                value: p.value
                              }, c(p.label || p.value), 9, Ua))), 128))
                            ], 8, Sa), [
                              [Me, i.to]
                            ]),
                            h(e("input", {
                              "onUpdate:modelValue": (p) => i.trigger = p,
                              placeholder: "トリガー",
                              class: "di-transition-input di-transition-col-trigger"
                            }, null, 8, Da), [
                              [x, i.trigger]
                            ]),
                            h(e("input", {
                              "onUpdate:modelValue": (p) => i.condition = p,
                              placeholder: "条件",
                              class: "di-transition-input di-transition-col-condition"
                            }, null, 8, Va), [
                              [x, i.condition]
                            ]),
                            e("button", {
                              onClick: (p) => Be(f),
                              class: "di-btn-icon di-btn-icon-danger"
                            }, [
                              T(u(kt), { style: { width: "12px", height: "12px" } })
                            ], 8, Ea)
                          ]))), 128))
                        ])) : (n(), s("div", Pa, " 状態遷移を定義（任意） "))
                      ]),
                      e("div", Ba, [
                        qe.value ? (n(), s("button", {
                          key: 0,
                          onClick: l[39] || (l[39] = (i) => {
                            Ue(qe.value), Ke.value = !1;
                          }),
                          class: "di-btn-small di-btn-danger"
                        }, "削除")) : v("", !0),
                        l[129] || (l[129] = e("div", { style: { flex: "1" } }, null, -1)),
                        e("button", {
                          onClick: l[40] || (l[40] = (i) => Ke.value = !1),
                          class: "di-btn-small"
                        }, "キャンセル"),
                        e("button", {
                          onClick: ut,
                          class: "di-btn-small di-btn-primary",
                          disabled: !Q.value.table || !Q.value.column
                        }, "保存", 8, Aa)
                      ])
                    ])
                  ])) : v("", !0)
                ]))
              ], 512), [
                [Ft, S.value === "masters"]
              ]),
              h(e("div", null, [
                e("div", La, [
                  e("div", Oa, [
                    T(u(kl), { style: { width: "16px", height: "16px", color: "#f59e0b" } }),
                    l[130] || (l[130] = e("span", null, "バッチ処理", -1)),
                    nt.value > 0 ? (n(), s("span", Fa, c(nt.value), 1)) : v("", !0),
                    e("button", {
                      onClick: l[42] || (l[42] = (i) => wt()),
                      class: "di-btn-icon",
                      style: { "margin-left": "auto" },
                      title: "新規追加"
                    }, [
                      T(u(jt), { style: { width: "14px", height: "14px" } })
                    ])
                  ]),
                  nt.value > 0 ? (n(!0), s(I, { key: 0 }, D(Mt.value, (i) => (n(), s("div", {
                    key: i.id,
                    class: "di-batch-item",
                    onClick: (f) => wt(i.id)
                  }, [
                    e("div", qa, [
                      e("div", Ha, c(i.name), 1),
                      i.schedule ? (n(), s("div", Ra, c(i.schedule), 1)) : v("", !0)
                    ])
                  ], 8, ja))), 128)) : (n(), s("div", {
                    key: 1,
                    class: "di-batch-empty",
                    onClick: l[43] || (l[43] = (i) => wt())
                  }, [...l[131] || (l[131] = [
                    e("span", null, "バッチ処理を定義", -1)
                  ])]))
                ]),
                (n(), mt(xt, { to: "body" }, [
                  He.value ? (n(), s("div", {
                    key: 0,
                    "data-dev-inspector": "",
                    class: "di-modal-overlay",
                    onClick: l[59] || (l[59] = de((i) => He.value = !1, ["self"]))
                  }, [
                    e("div", za, [
                      e("div", Ka, [
                        e("h3", null, c(ot.value ? "バッチ処理を編集" : "新規バッチ処理"), 1),
                        e("button", {
                          onClick: l[44] || (l[44] = (i) => He.value = !1),
                          class: "di-close-btn"
                        }, [
                          T(u(kt), { style: { width: "16px", height: "16px" } })
                        ])
                      ]),
                      e("div", Ga, [
                        e("div", Ya, [
                          e("div", Xa, [
                            l[132] || (l[132] = e("label", null, "バッチ名 *", -1)),
                            h(e("input", {
                              "onUpdate:modelValue": l[45] || (l[45] = (i) => K.value.name = i),
                              placeholder: "月次レポート生成"
                            }, null, 512), [
                              [x, K.value.name]
                            ])
                          ]),
                          e("div", Wa, [
                            l[133] || (l[133] = e("label", null, "スケジュール", -1)),
                            h(e("input", {
                              "onUpdate:modelValue": l[46] || (l[46] = (i) => K.value.schedule = i),
                              placeholder: "毎月1日 AM2:00"
                            }, null, 512), [
                              [x, K.value.schedule]
                            ])
                          ])
                        ]),
                        e("div", Za, [
                          e("div", Ja, [
                            l[134] || (l[134] = e("label", null, "手動トリガー", -1)),
                            h(e("input", {
                              "onUpdate:modelValue": l[47] || (l[47] = (i) => K.value.trigger = i),
                              placeholder: "管理画面から実行"
                            }, null, 512), [
                              [x, K.value.trigger]
                            ])
                          ])
                        ]),
                        e("div", Qa, [
                          l[135] || (l[135] = e("label", null, "説明", -1)),
                          h(e("textarea", {
                            "onUpdate:modelValue": l[48] || (l[48] = (i) => K.value.description = i),
                            rows: "2",
                            placeholder: "バッチ処理の概要..."
                          }, null, 512), [
                            [x, K.value.description]
                          ])
                        ]),
                        l[145] || (l[145] = e("div", { class: "di-batch-section-label" }, "入出力テーブル", -1)),
                        e("div", Na, [
                          e("div", ed, [
                            l[136] || (l[136] = e("label", null, "入力テーブル", -1)),
                            e("div", td, [
                              (n(!0), s(I, null, D(K.value.inputTables, (i, f) => (n(), s("span", {
                                key: f,
                                class: "di-batch-tag"
                              }, [
                                O(c(i) + " ", 1),
                                e("button", {
                                  onClick: (p) => Ot(f),
                                  class: "di-batch-tag-remove"
                                }, "×", 8, ld)
                              ]))), 128)),
                              h(e("input", {
                                "onUpdate:modelValue": l[49] || (l[49] = (i) => Qe.value = i),
                                onKeydown: l[50] || (l[50] = Pt(de((i) => Lt(), ["prevent"]), ["enter"])),
                                type: "text",
                                placeholder: "テーブル名",
                                class: "di-batch-tag-input"
                              }, null, 544), [
                                [x, Qe.value]
                              ])
                            ])
                          ]),
                          e("div", od, [
                            l[137] || (l[137] = e("label", null, "出力テーブル", -1)),
                            e("div", nd, [
                              (n(!0), s(I, null, D(K.value.outputTables, (i, f) => (n(), s("span", {
                                key: f,
                                class: "di-batch-tag"
                              }, [
                                O(c(i) + " ", 1),
                                e("button", {
                                  onClick: (p) => Ge(f),
                                  class: "di-batch-tag-remove"
                                }, "×", 8, sd)
                              ]))), 128)),
                              h(e("input", {
                                "onUpdate:modelValue": l[51] || (l[51] = (i) => ft.value = i),
                                onKeydown: l[52] || (l[52] = Pt(de((i) => Ne(), ["prevent"]), ["enter"])),
                                type: "text",
                                placeholder: "テーブル名",
                                class: "di-batch-tag-input"
                              }, null, 544), [
                                [x, ft.value]
                              ])
                            ])
                          ])
                        ]),
                        e("div", id, [
                          l[138] || (l[138] = O(" 処理ステップ ", -1)),
                          e("button", {
                            onClick: Ut,
                            class: "di-btn-icon",
                            style: { "margin-left": "auto" },
                            title: "ステップ追加"
                          }, [
                            T(u(jt), { style: { width: "14px", height: "14px" } })
                          ])
                        ]),
                        K.value.steps.length > 0 ? (n(), s("div", ad, [
                          l[140] || (l[140] = e("div", { class: "di-batch-steps-header" }, [
                            e("span", { class: "di-batch-step-no" }, "No"),
                            e("span", { class: "di-batch-step-desc" }, "処理内容"),
                            e("span", { class: "di-batch-step-target" }, "対象"),
                            e("span", { class: "di-batch-step-type" }, "種別"),
                            e("span", { class: "di-batch-step-error" }, "エラー処理"),
                            e("span", { class: "di-batch-step-act" })
                          ], -1)),
                          (n(!0), s(I, null, D(K.value.steps, (i, f) => (n(), s("div", {
                            key: f,
                            class: "di-batch-step-row"
                          }, [
                            e("span", dd, c(f + 1), 1),
                            h(e("input", {
                              "onUpdate:modelValue": (p) => i.description = p,
                              placeholder: "処理内容",
                              class: "di-batch-step-input di-batch-step-desc"
                            }, null, 8, ud), [
                              [x, i.description]
                            ]),
                            h(e("input", {
                              "onUpdate:modelValue": (p) => i.target = p,
                              placeholder: "対象テーブル",
                              class: "di-batch-step-input di-batch-step-target"
                            }, null, 8, rd), [
                              [x, i.target]
                            ]),
                            h(e("select", {
                              "onUpdate:modelValue": (p) => i.type = p,
                              class: "di-batch-step-select di-batch-step-type"
                            }, [...l[139] || (l[139] = [
                              e("option", { value: "" }, "-", -1),
                              e("option", { value: "query" }, "query", -1),
                              e("option", { value: "api" }, "api", -1),
                              e("option", { value: "file" }, "file", -1),
                              e("option", { value: "mail" }, "mail", -1),
                              e("option", { value: "other" }, "other", -1)
                            ])], 8, cd), [
                              [Me, i.type]
                            ]),
                            h(e("input", {
                              "onUpdate:modelValue": (p) => i.errorHandling = p,
                              placeholder: "エラー時",
                              class: "di-batch-step-input di-batch-step-error"
                            }, null, 8, vd), [
                              [x, i.errorHandling]
                            ]),
                            e("button", {
                              onClick: (p) => Bt(f),
                              class: "di-btn-icon di-btn-icon-danger"
                            }, [
                              T(u(kt), { style: { width: "12px", height: "12px" } })
                            ], 8, pd)
                          ]))), 128))
                        ])) : v("", !0),
                        l[146] || (l[146] = e("div", { class: "di-batch-section-label" }, "運用設定", -1)),
                        e("div", md, [
                          e("div", fd, [
                            l[141] || (l[141] = e("label", null, "タイムアウト", -1)),
                            h(e("input", {
                              "onUpdate:modelValue": l[53] || (l[53] = (i) => K.value.timeout = i),
                              placeholder: "30分"
                            }, null, 512), [
                              [x, K.value.timeout]
                            ])
                          ]),
                          e("div", bd, [
                            l[142] || (l[142] = e("label", null, "リトライ", -1)),
                            h(e("input", {
                              "onUpdate:modelValue": l[54] || (l[54] = (i) => K.value.retryPolicy = i),
                              placeholder: "3回まで、5分間隔"
                            }, null, 512), [
                              [x, K.value.retryPolicy]
                            ])
                          ])
                        ]),
                        e("div", hd, [
                          e("div", yd, [
                            l[143] || (l[143] = e("label", null, "エラー通知先", -1)),
                            h(e("input", {
                              "onUpdate:modelValue": l[55] || (l[55] = (i) => K.value.notifyOnError = i),
                              placeholder: "admin@example.com"
                            }, null, 512), [
                              [x, K.value.notifyOnError]
                            ])
                          ]),
                          e("div", gd, [
                            l[144] || (l[144] = e("label", null, "完了通知先", -1)),
                            h(e("input", {
                              "onUpdate:modelValue": l[56] || (l[56] = (i) => K.value.notifyOnComplete = i),
                              placeholder: "manager@example.com"
                            }, null, 512), [
                              [x, K.value.notifyOnComplete]
                            ])
                          ])
                        ])
                      ]),
                      e("div", kd, [
                        ot.value ? (n(), s("button", {
                          key: 0,
                          onClick: l[57] || (l[57] = (i) => {
                            At(ot.value), He.value = !1;
                          }),
                          class: "di-btn-small di-btn-danger"
                        }, "削除")) : v("", !0),
                        l[147] || (l[147] = e("div", { style: { flex: "1" } }, null, -1)),
                        e("button", {
                          onClick: l[58] || (l[58] = (i) => He.value = !1),
                          class: "di-btn-small"
                        }, "キャンセル"),
                        e("button", {
                          onClick: St,
                          class: "di-btn-small di-btn-primary",
                          disabled: !K.value.name
                        }, "保存", 8, xd)
                      ])
                    ])
                  ])) : v("", !0)
                ]))
              ], 512), [
                [Ft, S.value === "batches"]
              ]),
              h(e("div", null, [
                e("div", wd, [
                  e("button", {
                    onClick: $,
                    class: "di-btn-green"
                  }, [
                    T(u(wo), { style: { width: "16px", height: "16px" } }),
                    l[148] || (l[148] = O(" Git管理用に保存 ", -1))
                  ]),
                  e("button", {
                    onClick: U,
                    class: "di-btn-blue"
                  }, [
                    T(u(Ml), { style: { width: "16px", height: "16px" } }),
                    l[149] || (l[149] = O(" 画面仕様書 (xlsx) 出力 ", -1))
                  ]),
                  e("button", {
                    onClick: l[60] || (l[60] = (i) => u(a).downloadSddSpec()),
                    class: "di-btn-green-outline"
                  }, [
                    T(u(Zt), { style: { width: "16px", height: "16px" } }),
                    l[150] || (l[150] = O(" SDD仕様書 (md) ", -1))
                  ]),
                  e("button", {
                    onClick: l[61] || (l[61] = (i) => u(a).downloadClientSpec()),
                    class: "di-btn-blue-outline"
                  }, [
                    T(u(Zt), { style: { width: "16px", height: "16px" } }),
                    l[151] || (l[151] = O(" 納品用仕様書 (md) ", -1))
                  ])
                ]),
                l[159] || (l[159] = e("p", { class: "di-export-hint" }, [
                  O(" JSON: "),
                  e("code", null, "dev-annotations.json"),
                  O(" に配置してcommit ")
                ], -1)),
                e("div", Cd, [
                  e("button", {
                    onClick: l[62] || (l[62] = (i) => P.value = !0),
                    class: "di-btn-small"
                  }, [
                    T(u(tl), { style: { width: "14px", height: "14px" } }),
                    l[152] || (l[152] = O(" エクスポート ", -1))
                  ]),
                  e("button", {
                    onClick: l[63] || (l[63] = (i) => ee.value = !0),
                    class: "di-btn-small"
                  }, [
                    T(u(Vo), { style: { width: "14px", height: "14px" } }),
                    l[153] || (l[153] = O(" インポート ", -1))
                  ]),
                  be.value > 0 ? (n(), s("button", {
                    key: 0,
                    onClick: We,
                    class: "di-btn-small di-btn-danger"
                  }, [
                    T(u(Ht), { style: { width: "14px", height: "14px" } }),
                    l[154] || (l[154] = O(" 全削除 ", -1))
                  ])) : v("", !0)
                ]),
                be.value > 0 || Pe.value > 0 || nt.value > 0 ? (n(), s("div", $d, [
                  l[158] || (l[158] = e("div", { class: "di-export-summary-title" }, "登録状況", -1)),
                  e("div", _d, [
                    l[155] || (l[155] = e("span", null, "要素設定", -1)),
                    e("span", Td, c(be.value) + "件", 1)
                  ]),
                  e("div", Id, [
                    l[156] || (l[156] = e("span", null, "マスタ定義", -1)),
                    e("span", Md, c(Pe.value) + "件", 1)
                  ]),
                  e("div", Sd, [
                    l[157] || (l[157] = e("span", null, "バッチ処理", -1)),
                    e("span", Ud, c(nt.value) + "件", 1)
                  ])
                ])) : v("", !0)
              ], 512), [
                [Ft, S.value === "export"]
              ])
            ]),
            l[160] || (l[160] = e("div", { class: "di-footer" }, [
              e("kbd", null, "Ctrl"),
              e("span", null, "+"),
              e("kbd", null, "Shift"),
              e("span", null, "+"),
              e("kbd", null, "D"),
              e("span", { class: "di-footer-text" }, "で開発者モード切替")
            ], -1))
          ])) : v("", !0)
        ])),
        (n(), mt(xt, { to: "body" }, [
          u(a).isEnabled ? (n(), s("div", Dd, [...l[161] || (l[161] = [
            e("span", { class: "di-indicator-dot" }, null, -1),
            O(" Developer Mode ", -1)
          ])])) : v("", !0)
        ])),
        (n(), mt(xt, { to: "body" }, [
          P.value ? (n(), s("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: l[65] || (l[65] = de((i) => P.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", Vd, [
              l[163] || (l[163] = e("h3", { class: "di-modal-title" }, "設定をエクスポート", -1)),
              e("textarea", {
                readonly: "",
                value: u(a).exportConfigs(),
                class: "di-modal-textarea"
              }, null, 8, Ed),
              e("div", Pd, [
                e("button", {
                  onClick: l[64] || (l[64] = (i) => P.value = !1),
                  class: "di-btn-small"
                }, "閉じる"),
                e("button", {
                  onClick: B,
                  class: "di-btn-small di-btn-gray"
                }, [
                  T(u(tl), { style: { width: "14px", height: "14px" } }),
                  l[162] || (l[162] = O(" ファイル保存 ", -1))
                ]),
                e("button", {
                  onClick: N,
                  class: "di-btn-small di-btn-primary"
                }, "コピー")
              ])
            ])
          ])) : v("", !0)
        ])),
        (n(), mt(xt, { to: "body" }, [
          ee.value ? (n(), s("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: l[68] || (l[68] = de((i) => ee.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", Bd, [
              l[165] || (l[165] = e("h3", { class: "di-modal-title" }, "設定をインポート", -1)),
              e("label", Ad, [
                e("input", {
                  type: "file",
                  accept: ".json",
                  onChange: J
                }, null, 32),
                l[164] || (l[164] = e("span", null, "JSONファイルをドラッグまたはクリック", -1))
              ]),
              h(e("textarea", {
                "onUpdate:modelValue": l[66] || (l[66] = (i) => oe.value = i),
                placeholder: "またはJSONを直接貼り付け...",
                class: "di-modal-textarea di-modal-textarea-input"
              }, null, 512), [
                [x, oe.value]
              ]),
              ue.value ? (n(), s("p", Ld, c(ue.value), 1)) : v("", !0),
              e("div", Od, [
                e("button", {
                  onClick: l[67] || (l[67] = (i) => {
                    ee.value = !1, oe.value = "", ue.value = "";
                  }),
                  class: "di-btn-small"
                }, " キャンセル "),
                e("button", {
                  onClick: _e,
                  disabled: !oe.value,
                  class: "di-btn-small di-btn-primary"
                }, " インポート ", 8, Fd)
              ])
            ])
          ])) : v("", !0)
        ]))
      ], 64);
    };
  }
}), Qt = (Z, a) => {
  const S = Z.__vccOpts || Z;
  for (const [P, ee] of a)
    S[P] = ee;
  return S;
}, qd = /* @__PURE__ */ Qt(jd, [["__scopeId", "data-v-98af0e78"]]), Hd = { class: "di-editor-header" }, Rd = { class: "di-header-actions" }, zd = {
  key: 0,
  class: "di-source-badge-row"
}, Kd = {
  key: 0,
  class: "di-source-detail"
}, Gd = { class: "di-context-row" }, Yd = { class: "di-context-field di-context-field-dropdown" }, Xd = { class: "di-dropdown-wrapper" }, Wd = {
  key: 0,
  class: "di-dropdown-list"
}, Zd = ["onMousedown"], Jd = { class: "di-context-field di-context-field-dropdown" }, Qd = { class: "di-dropdown-wrapper" }, Nd = {
  key: 0,
  class: "di-dropdown-list"
}, eu = ["onMousedown"], tu = { class: "di-editor-tabs" }, lu = { class: "di-editor-content" }, ou = { class: "di-form-group" }, nu = { class: "di-display-type-grid" }, su = ["onClick"], iu = { class: "di-display-type-desc" }, au = {
  key: 0,
  class: "di-field-tags"
}, du = { class: "di-field-tags-list" }, uu = { class: "di-field-tag-name" }, ru = {
  key: 0,
  class: "di-field-tag-type"
}, cu = ["onClick"], vu = {
  key: 1,
  class: "di-binding-selector"
}, pu = { class: "di-form-group" }, mu = { class: "di-form-label" }, fu = { class: "di-binding-search-wrapper" }, bu = {
  key: 0,
  class: "di-binding-list"
}, hu = ["onClick"], yu = { class: "di-binding-item-main" }, gu = { class: "di-binding-name" }, ku = { class: "di-binding-type" }, xu = {
  key: 0,
  class: "di-binding-component"
}, wu = {
  key: 1,
  class: "di-binding-empty"
}, Cu = {
  key: 2,
  class: "di-form-divider"
}, $u = { class: "di-form-row" }, _u = { class: "di-form-group di-suggest-wrapper" }, Tu = {
  key: 0,
  class: "di-suggest-list"
}, Iu = ["onMousedown"], Mu = { class: "di-form-group di-suggest-wrapper" }, Su = {
  key: 0,
  class: "di-suggest-list"
}, Uu = ["onMousedown"], Du = { class: "di-form-group" }, Vu = ["value"], Eu = ["disabled"], Pu = {
  key: 3,
  class: "di-master-inline"
}, Bu = {
  key: 0,
  class: "di-condition-badge",
  style: { background: "#a78bfa" }
}, Au = {
  key: 0,
  class: "di-master-inline-section"
}, Lu = {
  key: 0,
  class: "di-master-entries-table"
}, Ou = ["onUpdate:modelValue"], Fu = ["onUpdate:modelValue"], ju = ["onUpdate:modelValue"], qu = ["onClick"], Hu = {
  key: 4,
  class: "di-form-group"
}, Ru = { class: "di-stored-calc-toggle" }, zu = {
  key: 0,
  class: "di-condition-badge"
}, Ku = {
  key: 5,
  class: "di-stored-calc-section"
}, Gu = { class: "di-form-group" }, Yu = { class: "di-form-group di-suggest-wrapper" }, Xu = { class: "di-stored-calc-tags" }, Wu = ["onClick"], Zu = {
  key: 0,
  class: "di-suggest-list"
}, Ju = ["onMousedown"], Qu = { class: "di-form-group" }, Nu = {
  key: 1,
  class: "di-form-group di-suggest-wrapper"
}, er = {
  key: 0,
  class: "di-calc-tag"
}, tr = ["onClick"], lr = {
  key: 1,
  class: "di-calc-text"
}, or = ["placeholder"], nr = {
  key: 0,
  class: "di-suggest-list"
}, sr = ["onMousedown"], ir = {
  key: 2,
  class: "di-form-group"
}, ar = { class: "di-condition-toggle" }, dr = {
  key: 0,
  class: "di-condition-badge"
}, ur = {
  key: 0,
  class: "di-condition-section"
}, rr = { class: "di-form-group" }, cr = { class: "di-form-group di-suggest-wrapper" }, vr = { class: "di-form-row" }, pr = { class: "di-form-group" }, mr = {
  key: 0,
  class: "di-form-group"
}, fr = { class: "di-form-row" }, br = { class: "di-form-group" }, hr = {
  class: "di-form-group",
  style: { flex: "0 0 80px" }
}, yr = { class: "di-form-row" }, gr = { class: "di-form-group" }, kr = { class: "di-form-group" }, xr = { class: "di-form-group" }, wr = { class: "di-form-group" }, Cr = { class: "di-form-group" }, $r = { class: "di-form-group" }, _r = ["placeholder"], Tr = {
  key: 0,
  class: "di-form-group"
}, Ir = { class: "di-form-group" }, Mr = { class: "di-form-divider" }, Sr = { class: "di-csv-file-settings" }, Ur = { class: "di-form-row" }, Dr = { class: "di-form-group" }, Vr = { class: "di-form-group" }, Er = {
  class: "di-form-row",
  style: { "align-items": "center" }
}, Pr = { class: "di-csv-checkbox-label" }, Br = { class: "di-form-group" }, Ar = { class: "di-csv-columns-section" }, Lr = {
  key: 0,
  class: "di-csv-columns-table"
}, Or = { class: "di-csv-col-no" }, Fr = ["onUpdate:modelValue"], jr = ["onUpdate:modelValue"], qr = ["onUpdate:modelValue"], Hr = ["onUpdate:modelValue"], Rr = { class: "di-csv-col-req di-csv-checkbox-center" }, zr = ["onUpdate:modelValue"], Kr = ["onUpdate:modelValue"], Gr = { class: "di-csv-col-act" }, Yr = ["onClick", "disabled"], Xr = ["onClick", "disabled"], Wr = ["onClick"], Zr = { class: "di-form-group" }, Jr = { class: "di-form-group" }, Qr = { class: "di-form-group" }, Nr = { class: "di-form-group" }, ec = { class: "di-form-group" }, tc = { class: "di-form-group" }, lc = { class: "di-csv-error-section" }, oc = {
  key: 0,
  class: "di-csv-columns-table"
}, nc = ["onUpdate:modelValue"], sc = ["value"], ic = ["onUpdate:modelValue"], ac = ["onUpdate:modelValue"], dc = ["onUpdate:modelValue"], uc = ["onClick"], rc = { class: "di-form-divider" }, cc = { class: "di-form-row" }, vc = { class: "di-form-group" }, pc = { class: "di-form-group" }, mc = { class: "di-form-row" }, fc = { class: "di-form-group" }, bc = { class: "di-form-group" }, hc = { class: "di-form-group" }, yc = { class: "di-form-group" }, gc = { class: "di-form-group" }, kc = { class: "di-form-group" }, xc = { class: "di-email-variables-input" }, wc = ["onClick"], Cc = { class: "di-form-group" }, $c = { class: "di-form-group" }, _c = { class: "di-form-group" }, Tc = { class: "di-form-divider" }, Ic = { class: "di-form-group" }, Mc = {
  class: "di-form-label",
  style: { display: "flex", "align-items": "center", gap: "8px" }
}, Sc = { class: "di-form-row" }, Uc = { class: "di-form-group" }, Dc = { class: "di-form-group" }, Vc = { class: "di-form-group" }, Ec = { class: "di-form-group" }, Pc = {
  class: "di-form-label",
  style: { display: "flex", "align-items": "center", gap: "8px" }
}, Bc = { class: "di-form-group" }, Ac = { class: "di-form-group" }, Lc = { class: "di-form-group" }, Oc = { class: "di-form-group" }, Fc = {
  key: 0,
  class: "di-field-tags"
}, jc = { class: "di-field-tags-list" }, qc = { class: "di-field-tag-name" }, Hc = {
  key: 0,
  class: "di-field-tag-type"
}, Rc = ["onClick"], zc = {
  key: 1,
  class: "di-binding-selector"
}, Kc = { class: "di-form-group" }, Gc = { class: "di-form-label" }, Yc = { class: "di-binding-search-wrapper" }, Xc = {
  key: 0,
  class: "di-binding-list"
}, Wc = ["onClick"], Zc = { class: "di-binding-item-main" }, Jc = { class: "di-binding-name" }, Qc = { class: "di-binding-type" }, Nc = {
  key: 0,
  class: "di-binding-component"
}, ev = {
  key: 2,
  class: "di-master-inline"
}, tv = {
  key: 0,
  class: "di-condition-badge",
  style: { background: "#a78bfa" }
}, lv = {
  key: 0,
  class: "di-master-inline-section"
}, ov = {
  key: 0,
  class: "di-master-entries-table"
}, nv = ["onUpdate:modelValue"], sv = ["onUpdate:modelValue"], iv = ["onUpdate:modelValue"], av = ["onClick"], dv = { class: "di-condition-toggle" }, uv = {
  key: 0,
  class: "di-condition-badge"
}, rv = { class: "di-form-group di-suggest-wrapper" }, cv = { class: "di-calc-tags-input" }, vv = ["onClick"], pv = ["placeholder"], mv = { class: "di-form-group" }, fv = { class: "di-form-group" }, bv = { class: "di-form-group" }, hv = { class: "di-form-group" }, yv = { class: "di-form-group" }, gv = { class: "di-form-group" }, kv = { class: "di-form-row" }, xv = { class: "di-form-group di-form-half" }, wv = { class: "di-form-group di-form-half" }, Cv = { class: "di-csv-columns-section" }, $v = {
  key: 0,
  class: "di-csv-columns-table"
}, _v = ["onUpdate:modelValue"], Tv = ["onUpdate:modelValue"], Iv = ["onUpdate:modelValue"], Mv = { class: "di-csv-col-act" }, Sv = ["onClick", "disabled"], Uv = ["onClick", "disabled"], Dv = ["onClick"], Vv = { class: "di-form-group" }, Ev = { class: "di-form-group" }, Pv = { class: "di-form-group" }, Bv = { class: "di-form-group" }, Av = { class: "di-editor-footer" }, Lv = { class: "di-editor-actions" }, Ov = /* @__PURE__ */ zt({
  __name: "DevElementEditor",
  setup(Z) {
    const a = Kt(), S = y("datasource"), P = y(""), ee = y(""), oe = y(""), ue = y(""), Ce = y(""), $e = y(!1), G = y([]), te = y(""), be = y(""), Ie = y(""), he = y(""), me = y([]), E = y("UTF-8"), Ee = y(","), at = y(!0), Se = y(""), Xe = y(""), ye = y(""), ne = y(void 0), je = y(""), H = y(""), M = y(""), g = y([]), F = y(""), R = y(""), se = y(""), z = y(""), N = y(""), B = y(""), $ = y(""), U = y([]), _e = y(""), J = y(""), We = y(""), ge = y(""), Ze = y(!0), lt = y(""), Ke = y(""), qe = y(""), Q = y(!1), Pe = y(""), dt = y(""), Je = y(""), ut = y(""), rt = y(""), ct = y(""), we = y([]), Be = y(""), Ue = y(""), He = y(""), ot = y(""), K = y(""), Qe = y(""), ft = y(!1), nt = y(!1), Mt = j(() => {
      const b = /* @__PURE__ */ new Set();
      for (const t of Object.values(a.elementConfigs))
        t.tabContext && b.add(t.tabContext);
      return [...b].sort();
    }), wt = j(() => {
      const b = /* @__PURE__ */ new Set();
      for (const t of Object.values(a.elementConfigs))
        t.modalName && b.add(t.modalName);
      return [...b].sort();
    }), St = j(() => {
      const b = K.value.toLowerCase();
      return b ? Mt.value.filter((t) => t.toLowerCase().includes(b)) : Mt.value;
    }), Ut = j(() => {
      const b = Qe.value.toLowerCase();
      return b ? wt.value.filter((t) => t.toLowerCase().includes(b)) : wt.value;
    });
    function Bt(b) {
      K.value = b, ft.value = !1;
    }
    function At(b) {
      Qe.value = b, nt.value = !1;
    }
    function Lt() {
      setTimeout(() => {
        ft.value = !1;
      }, 150);
    }
    function Ot() {
      setTimeout(() => {
        nt.value = !1;
      }, 150);
    }
    const Ne = y(!1), Ge = y([]), et = j(() => {
      if (De.value.length > 0) {
        const b = De.value[0];
        if (b.table && b.column) return `${b.table}.${b.column}`;
      }
      return "";
    }), Ct = j(() => et.value && a.getMasterDefinition(et.value) || null), Y = y("db_direct"), De = y([]), re = y(""), Ae = y(""), vt = y(""), pt = y(""), yt = y(""), ke = y([]), d = y(""), Le = y(!1), fe = y(""), X = y(""), ce = y(""), Re = y(""), Ve = y(""), Te = y(!1), tt = y(""), ve = y([]), ze = y(""), ht = y(!1), $t = y(""), st = y(""), V = y(""), pe = y(""), Oe = y(""), Ye = y(!1), xe = y(""), ie = y(""), bt = y(""), Dt = y(!1), r = j(() => ie.value ? {
      data: "data",
      "v-model": "v-model",
      prop: "prop",
      static: "static",
      computed: "computed",
      store: "store",
      api: "data"
      // legacy compatibility
    }[ie.value] || ie.value : ""), l = j(() => a.editingElementId !== null), k = j(() => a.editingElementId), L = j(() => P.value === "csv_export" || P.value === "csv_import"), i = j(() => P.value === "email"), f = j(() => L.value || i.value), p = [
      { value: "db_direct", label: "DBカラム (そのまま)", icon: It, color: "#3b82f6", description: "DBの値をそのまま表示" },
      { value: "db_formatted", label: "DBカラム (整形)", icon: Jt, color: "#8b5cf6", description: "DBの値を整形して表示" },
      { value: "calculated", label: "計算値", icon: yl, color: "#f59e0b", description: "複数カラムから計算" },
      { value: "static", label: "固定文言", icon: Do, color: "#10b981", description: "コード内の固定テキスト" },
      { value: "other", label: "その他メモ", icon: To, color: "#94a3b8", description: "自由メモ" }
    ];
    Rt(k, (b) => {
      var t;
      if (b) {
        const o = a.getElementConfig(b);
        try {
          const m = document.querySelector(b);
          if (m) {
            o != null && o.elementType ? S.value = o.elementType : S.value = a.detectElementType(m);
            const q = m.querySelector("[data-di-binding]") || (m.hasAttribute("data-di-binding") ? m : null) || m.closest("[data-di-binding]");
            if (q) {
              const Fe = q.getAttribute("data-di-binding"), Vt = q.getAttribute("data-di-db"), el = q.getAttribute("data-di-db-type"), Et = q.getAttribute("data-di-db-comment");
              if (Fe && (bt.value = Fe, ie.value = "data", Dt.value = !1), Vt) {
                const [fl, bl] = Vt.split(".");
                fl && bl && (De.value.push({
                  table: fl,
                  column: bl,
                  type: el || void 0,
                  description: Et || void 0
                }), Y.value || (Y.value = "db_direct"));
              }
            }
          }
        } catch (m) {
          console.warn("[DevInspector] Failed to read element:", m);
        }
        o != null && o.fieldInfoList && o.fieldInfoList.length > 0 ? De.value = o.fieldInfoList.map((m) => ({ ...m })) : o != null && o.fieldInfo && (De.value = [{ ...o.fieldInfo }]), re.value = "", Ae.value = "", vt.value = "", pt.value = "", o != null && o.note && (xe.value = o.note.text || xe.value, Y.value = o.note.displayType || Y.value, yt.value = o.note.formatDescription || "", fe.value = o.note.sampleValue || "", X.value = o.note.decimalHandling || "", ce.value = o.note.unit || "", Re.value = o.note.nullDisplay || "", Ve.value = o.note.displayFormat || "", zl(o.note.calcDescription || "", o.note.calcSources || []), Te.value = o.note.storedCalc || !1, tt.value = o.note.storedCalcLogic || "", ve.value = o.note.storedCalcSources ? [...o.note.storedCalcSources] : [], $t.value = o.note.storedCalcTiming || "", st.value = o.note.condition || "", V.value = o.note.conditionColumn || "", pe.value = o.note.hiddenBehavior || "", Oe.value = o.note.hiddenNote || "", Ye.value = !!(o.note.condition || o.note.conditionColumn)), o != null && o.sourceBinding && (ie.value = o.sourceBinding.type || ie.value, bt.value = o.sourceBinding.source || bt.value, Dt.value = o.sourceBinding.isStatic || !1), K.value = (o == null ? void 0 : o.tabContext) || a.detectTabContext(b) || "";
        const w = a.detectModalName(b);
        if (Qe.value = (o == null ? void 0 : o.modalName) || w || "", o != null && o.actionInfo) {
          if (P.value = o.actionInfo.type || "", ee.value = o.actionInfo.target || "", oe.value = o.actionInfo.method || "", ue.value = o.actionInfo.description || "", o.actionInfo.csvSpec) {
            const m = o.actionInfo.csvSpec;
            me.value = m.columns.map((q) => ({ ...q })), E.value = m.encoding || "UTF-8", Ee.value = m.delimiter || ",", at.value = m.hasHeaderRow !== !1, Se.value = m.filenamePattern || "", Xe.value = m.sortOrder || "", ye.value = m.filterCondition || "", ne.value = m.maxRows, je.value = m.errorHandling || "", H.value = m.duplicateHandling || "", M.value = m.preValidation || "", g.value = m.errorDefs ? m.errorDefs.map((q) => ({ ...q })) : [];
          }
          if (o.actionInfo.emailSpec) {
            const m = o.actionInfo.emailSpec;
            F.value = m.trigger || "", R.value = m.to || "", se.value = m.cc || "", z.value = m.bcc || "", N.value = m.subject || "", B.value = m.bodyTemplate || "", $.value = m.templatePath || "", U.value = m.variables ? [...m.variables] : [], J.value = m.attachments || "", We.value = m.conditions || "", ge.value = m.errorHandling || "";
          }
        }
        if (o != null && o.formInfo && (Ce.value = o.formInfo.inputType || "", $e.value = o.formInfo.required || !1, G.value = o.formInfo.validation ? [...o.formInfo.validation] : [], be.value = o.formInfo.placeholder || "", Ie.value = o.formInfo.defaultValue || "", he.value = o.formInfo.description || ""), (t = o == null ? void 0 : o.actionInfo) != null && t.sortSpec) {
          const m = o.actionInfo.sortSpec;
          Ze.value = m.sortable !== !1, lt.value = m.sortType || "", Ke.value = m.sortKey || "", qe.value = m.defaultDirection || "", Q.value = m.isDefaultSort || !1, Pe.value = m.unsortedOrder || "", dt.value = m.description || "";
        }
        if (o != null && o.chartSpec) {
          const m = o.chartSpec;
          Je.value = m.chartType || "", ut.value = m.title || "", rt.value = m.xAxis || "", ct.value = m.yAxis || "", we.value = m.series ? m.series.map((q) => ({ ...q })) : [], Be.value = m.dataSource || "", Ue.value = m.aggregation || "", He.value = m.filters || "", ot.value = m.description || "";
        }
      } else
        _();
    });
    function _() {
      S.value = "datasource", Y.value = "db_direct", De.value = [], re.value = "", Ae.value = "", vt.value = "", pt.value = "", yt.value = "", fe.value = "", X.value = "", ce.value = "", Re.value = "", Ve.value = "", ke.value = [], d.value = "", Te.value = !1, tt.value = "", ve.value = [], ze.value = "", $t.value = "", st.value = "", V.value = "", pe.value = "", Oe.value = "", Ye.value = !1, xe.value = "", ie.value = "", bt.value = "", Dt.value = !1, P.value = "", ee.value = "", oe.value = "", ue.value = "", me.value = [], E.value = "UTF-8", Ee.value = ",", at.value = !0, Se.value = "", Xe.value = "", ye.value = "", ne.value = void 0, je.value = "", H.value = "", M.value = "", g.value = [], Ce.value = "", $e.value = !1, G.value = [], te.value = "", be.value = "", Ie.value = "", he.value = "", F.value = "", R.value = "", se.value = "", z.value = "", N.value = "", B.value = "", $.value = "", U.value = [], _e.value = "", J.value = "", We.value = "", ge.value = "", Ze.value = !0, lt.value = "", Ke.value = "", qe.value = "", Q.value = !1, Pe.value = "", dt.value = "", Je.value = "", ut.value = "", rt.value = "", ct.value = "", we.value = [], Be.value = "", Ue.value = "", He.value = "", ot.value = "", K.value = "", Qe.value = "", Ne.value = !1, Ge.value = [];
    }
    function C() {
      a.stopEditing(), _();
    }
    function ae() {
      if (k.value)
        try {
          const b = document.querySelector(k.value);
          if (!b) return;
          const t = a.autoDetectElementInfo(b, k.value);
          t.sourceBinding && (ie.value = t.sourceBinding.type || "", bt.value = t.sourceBinding.source || "", Dt.value = t.sourceBinding.isStatic || !1, t.sourceBinding.isStatic && !Y.value && (Y.value = "static", xe.value = xe.value || "固定文言")), t.fieldInfo && (De.value.push({
            table: t.fieldInfo.table || "",
            column: t.fieldInfo.column || "",
            type: t.fieldInfo.type || void 0,
            description: t.fieldInfo.description || void 0
          }), Y.value || (Y.value = "db_direct")), t.note && !xe.value && (xe.value = t.note.text || "");
        } catch (b) {
          console.error("[DevInspector] Auto-detect failed:", b);
        }
    }
    function le() {
      if (!k.value) return;
      const b = [...De.value];
      (Y.value === "db_direct" || Y.value === "db_formatted") && re.value && Ae.value && b.push({
        table: re.value,
        column: Ae.value,
        type: vt.value || void 0,
        description: pt.value || void 0
      });
      const t = b.length > 0 ? b : void 0, o = b.length > 0 ? b[0] : void 0, w = Y.value === "db_direct" || Y.value === "db_formatted", m = Y.value || xe.value ? {
        text: xe.value || "",
        displayType: Y.value,
        formatDescription: Y.value === "db_formatted" && yt.value || void 0,
        calcDescription: Y.value === "calculated" && Rl() || void 0,
        calcSources: Y.value === "calculated" && ul().length > 0 ? ul() : void 0,
        // 保存済み計算値 (db_direct / db_formatted のみ)
        storedCalc: w && Te.value ? !0 : void 0,
        storedCalcLogic: w && Te.value && tt.value || void 0,
        storedCalcSources: w && Te.value && ve.value.length > 0 ? ve.value : void 0,
        storedCalcTiming: w && Te.value && $t.value || void 0,
        sampleValue: fe.value || void 0,
        decimalHandling: X.value || void 0,
        unit: ce.value || void 0,
        nullDisplay: Re.value || void 0,
        displayFormat: Ve.value || void 0,
        condition: st.value || void 0,
        conditionColumn: V.value || void 0,
        hiddenBehavior: pe.value || void 0,
        hiddenNote: Oe.value || void 0
      } : void 0, q = ie.value ? {
        type: ie.value,
        source: bt.value || void 0,
        isStatic: Dt.value
      } : void 0, Fe = S.value === "action" && P.value ? {
        type: P.value,
        target: ee.value || void 0,
        method: oe.value ? oe.value : void 0,
        description: ue.value || void 0,
        csvSpec: to(),
        emailSpec: lo(),
        sortSpec: io()
      } : void 0, Vt = S.value === "form" ? {
        inputType: Ce.value || void 0,
        required: $e.value || void 0,
        validation: G.value.length > 0 ? G.value : void 0,
        placeholder: be.value || void 0,
        defaultValue: Ie.value || void 0,
        description: he.value || void 0
      } : void 0, el = S.value === "chart" && Je.value ? {
        chartType: Je.value,
        title: ut.value || void 0,
        xAxis: rt.value || void 0,
        yAxis: ct.value || void 0,
        series: we.value.filter((Et) => Et.label || Et.field).length > 0 ? we.value.filter((Et) => Et.label || Et.field) : void 0,
        dataSource: Be.value || void 0,
        aggregation: Ue.value || void 0,
        filters: He.value || void 0,
        description: ot.value || void 0
      } : void 0;
      a.setElementConfig(k.value, {
        elementType: S.value,
        fieldInfo: o,
        fieldInfoList: t,
        actionInfo: Fe,
        formInfo: Vt,
        chartSpec: el,
        note: m,
        sourceBinding: q,
        tabContext: K.value || void 0,
        modalName: Qe.value || void 0,
        isConditional: Qe.value ? !0 : void 0
      }), Ne.value && et.value && ao(), C();
    }
    function _t() {
      k.value && (a.deleteElementConfig(k.value), C());
    }
    const Ul = [
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
    ], gt = y(""), Tt = y(!1), qt = j(() => a.searchSchemaColumns(gt.value).slice(0, 30));
    function ol(b) {
      De.value.push({
        table: b.table,
        column: b.column,
        type: b.type || void 0,
        description: b.comment || void 0
      }), Tt.value = !1, gt.value = "";
    }
    function Dl() {
      !re.value || !Ae.value || (De.value.push({
        table: re.value,
        column: Ae.value,
        type: vt.value || void 0,
        description: pt.value || void 0
      }), re.value = "", Ae.value = "", vt.value = "", pt.value = "");
    }
    function nl(b) {
      De.value.splice(b, 1);
    }
    const Nt = j(() => a.getSchemaColumns().length > 0), Gt = y(!1), Yt = y(!1), sl = j(() => {
      var w;
      const b = /* @__PURE__ */ new Set();
      for (const m of Object.values(a.elementConfigs))
        if (m.fieldInfoList)
          for (const q of m.fieldInfoList)
            q.table && b.add(q.table);
        else (w = m.fieldInfo) != null && w.table && b.add(m.fieldInfo.table);
      for (const m of a.getSchemaColumns())
        b.add(m.table);
      const t = [...b].sort();
      if (!re.value) return t;
      const o = re.value.toLowerCase();
      return t.filter((m) => m.toLowerCase().includes(o));
    }), il = j(() => {
      var w;
      const b = /* @__PURE__ */ new Set();
      for (const m of Object.values(a.elementConfigs))
        if (m.fieldInfoList)
          for (const q of m.fieldInfoList)
            q.column && (!re.value || q.table === re.value) && b.add(q.column);
        else (w = m.fieldInfo) != null && w.column && (!re.value || m.fieldInfo.table === re.value) && b.add(m.fieldInfo.column);
      for (const m of a.getSchemaColumns())
        (!re.value || m.table === re.value) && b.add(m.column);
      const t = [...b].sort();
      if (!Ae.value) return t;
      const o = Ae.value.toLowerCase();
      return t.filter((m) => m.toLowerCase().includes(o));
    });
    function Vl() {
      setTimeout(() => {
        Gt.value = !1;
      }, 150);
    }
    function El() {
      setTimeout(() => {
        Yt.value = !1;
      }, 150);
    }
    function Pl(b) {
      if (re.value = b, Gt.value = !1, Ae.value) {
        const t = a.getSchemaColumns().find((o) => o.table === b && o.column === Ae.value);
        t && (vt.value = t.type || "", pt.value = t.comment || "");
      }
    }
    function Bl(b) {
      if (Ae.value = b, Yt.value = !1, re.value) {
        const t = a.getSchemaColumns().find((o) => o.table === re.value && o.column === b);
        t && (vt.value = t.type || "", pt.value = t.comment || "");
      }
    }
    const al = j(() => {
      var w, m;
      const b = /* @__PURE__ */ new Set();
      for (const q of Object.values(a.elementConfigs))
        if (q.fieldInfoList)
          for (const Fe of q.fieldInfoList)
            Fe.table && Fe.column && b.add(`${Fe.table}.${Fe.column}`);
        else (w = q.fieldInfo) != null && w.table && ((m = q.fieldInfo) != null && m.column) && b.add(`${q.fieldInfo.table}.${q.fieldInfo.column}`);
      for (const q of a.getSchemaColumns())
        b.add(q.fullName);
      const t = [...b].sort();
      if (!d.value) return t;
      const o = d.value.trim().toLowerCase();
      if (/^[a-z0-9_.]+$/i.test(o)) {
        const q = t.filter((Fe) => Fe.toLowerCase().includes(o));
        if (q.length > 0) return q;
      }
      return t;
    });
    function Al(b) {
      d.value.trim() && ke.value.push({ type: "text", value: d.value }), ke.value.push({ type: "tag", value: b }), d.value = "";
    }
    function Ll(b) {
      ke.value.splice(b, 1);
    }
    function Ol(b) {
      if (b.key === "Backspace" && !d.value && ke.value.length > 0) {
        const t = ke.value.pop();
        t.type === "text" && (d.value = t.value);
      }
    }
    function Fl() {
      setTimeout(() => {
        Le.value = !1;
      }, 150);
    }
    const dl = j(() => {
      var w, m;
      const b = /* @__PURE__ */ new Set();
      for (const q of a.getSchemaColumns())
        b.add(q.fullName);
      for (const q of Object.values(a.elementConfigs))
        if (q.fieldInfoList)
          for (const Fe of q.fieldInfoList)
            Fe.table && Fe.column && b.add(`${Fe.table}.${Fe.column}`);
        else (w = q.fieldInfo) != null && w.table && ((m = q.fieldInfo) != null && m.column) && b.add(`${q.fieldInfo.table}.${q.fieldInfo.column}`);
      const t = [...b].sort();
      if (!ze.value) return t;
      const o = ze.value.trim().toLowerCase();
      return t.filter((q) => q.toLowerCase().includes(o));
    });
    function jl() {
      setTimeout(() => {
        ht.value = !1;
      }, 150);
    }
    function ql() {
      const b = ze.value.trim();
      b && !ve.value.includes(b) && ve.value.push(b), ze.value = "";
    }
    function Hl(b) {
      ve.value.includes(b) || ve.value.push(b), ze.value = "";
    }
    function Rl() {
      const b = ke.value.map((t) => t.value);
      return d.value.trim() && b.push(d.value.trim()), b.join(" ").replace(/\s+/g, " ").trim();
    }
    function ul() {
      return ke.value.filter((b) => b.type === "tag").map((b) => b.value);
    }
    function zl(b, t) {
      if (!b && t.length === 0) {
        ke.value = [], d.value = "";
        return;
      }
      if (t.length === 0) {
        ke.value = [], d.value = b;
        return;
      }
      const o = [];
      let w = b;
      for (const q of t) {
        const Fe = w.indexOf(q);
        if (Fe >= 0) {
          const Vt = w.substring(0, Fe).trim();
          Vt && o.push({ type: "text", value: Vt }), o.push({ type: "tag", value: q }), w = w.substring(Fe + q.length);
        }
      }
      const m = w.trim();
      m && o.push({ type: "text", value: m }), o.length === 0 ? d.value = b : (ke.value = o, d.value = "");
    }
    function Kl() {
      const b = te.value.trim();
      b && !G.value.includes(b) && G.value.push(b), te.value = "";
    }
    function Gl(b) {
      G.value.splice(b, 1);
    }
    function Yl(b) {
      b.key === "Backspace" && !te.value && G.value.length > 0 && G.value.pop();
    }
    function Xl() {
      me.value.push({ name: "", dbMapping: "", type: "string", required: !1, description: "" });
    }
    function Wl(b) {
      me.value.splice(b, 1);
    }
    function rl(b, t) {
      const o = b + t;
      if (o < 0 || o >= me.value.length) return;
      const w = me.value[b];
      me.value[b] = me.value[o], me.value[o] = w, me.value = [...me.value];
    }
    function Zl() {
      we.value.push({ label: "", field: "", color: "#3b82f6" });
    }
    function Jl(b) {
      we.value.splice(b, 1);
    }
    function cl(b, t) {
      const o = b + t;
      if (o < 0 || o >= we.value.length) return;
      const w = we.value[b];
      we.value[b] = we.value[o], we.value[o] = w, we.value = [...we.value];
    }
    function Ql() {
      g.value.push({ condition: "", message: "", column: "", severity: "error" });
    }
    function Nl(b) {
      g.value.splice(b, 1);
    }
    const eo = j(() => me.value.filter((b) => b.name).map((b) => b.name));
    function to() {
      if (P.value !== "csv_export" && P.value !== "csv_import") return;
      const b = g.value.filter((t) => t.condition || t.message);
      return {
        columns: me.value.filter((t) => t.name),
        encoding: E.value || void 0,
        delimiter: Ee.value || void 0,
        hasHeaderRow: at.value,
        filenamePattern: Se.value || void 0,
        sortOrder: Xe.value || void 0,
        filterCondition: ye.value || void 0,
        maxRows: ne.value || void 0,
        errorHandling: je.value || void 0,
        duplicateHandling: H.value || void 0,
        preValidation: M.value || void 0,
        errorDefs: b.length > 0 ? b : void 0
      };
    }
    function lo() {
      if (P.value === "email")
        return {
          trigger: F.value || "",
          to: R.value || "",
          cc: se.value || void 0,
          bcc: z.value || void 0,
          subject: N.value || "",
          bodyTemplate: B.value || void 0,
          templatePath: $.value || void 0,
          variables: U.value.length > 0 ? U.value : void 0,
          attachments: J.value || void 0,
          conditions: We.value || void 0,
          errorHandling: ge.value || void 0
        };
    }
    function oo() {
      const b = _e.value.trim();
      b && !U.value.includes(b) && U.value.push(b), _e.value = "";
    }
    function no(b) {
      U.value.splice(b, 1);
    }
    function so(b) {
      b.key === "Backspace" && !_e.value && U.value.length > 0 && U.value.pop();
    }
    function io() {
      if (P.value === "sort")
        return {
          sortable: Ze.value,
          sortType: lt.value ? lt.value : void 0,
          sortKey: Ke.value || void 0,
          defaultDirection: qe.value ? qe.value : void 0,
          isDefaultSort: Q.value || void 0,
          unsortedOrder: Pe.value || void 0,
          description: dt.value || void 0
        };
    }
    Rt(et, (b) => {
      if (b) {
        const t = a.getMasterDefinition(b);
        t ? (Ge.value = t.entries.map((o) => ({ ...o })), Ne.value = !0) : (Ge.value = [], Ne.value = !1);
      } else
        Ge.value = [], Ne.value = !1;
    });
    function vl() {
      Ne.value = !Ne.value, Ne.value && Ge.value.length === 0 && Ge.value.push({ value: "", label: "" });
    }
    function pl() {
      Ge.value.push({ value: "", label: "" });
    }
    function ml(b) {
      Ge.value.splice(b, 1);
    }
    function ao() {
      var m;
      if (!et.value) return;
      const [b, t] = et.value.split(".");
      if (!b || !t) return;
      const o = Ge.value.filter((q) => q.value || q.label);
      if (o.length === 0) {
        a.deleteMasterDefinition(et.value);
        return;
      }
      const w = a.getMasterDefinition(et.value);
      a.setMasterDefinition({
        id: et.value,
        table: b,
        column: t,
        name: (w == null ? void 0 : w.name) || t,
        columnType: (w == null ? void 0 : w.columnType) || ((m = De.value[0]) == null ? void 0 : m.type),
        description: w == null ? void 0 : w.description,
        entries: o,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      });
    }
    return (b, t) => (n(), mt(xt, { to: "body" }, [
      l.value ? (n(), s("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: de(C, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", {
          class: A(["di-editor-modal", { "di-editor-modal-wide": f.value }])
        }, [
          e("div", Hd, [
            t[94] || (t[94] = e("h3", null, "要素情報を編集", -1)),
            e("div", Rd, [
              e("button", {
                onClick: ae,
                class: "di-btn-auto",
                title: "自動検出"
              }, [
                T(u(Jt), { style: { width: "16px", height: "16px" } })
              ]),
              e("button", {
                onClick: C,
                class: "di-editor-close"
              }, [
                T(u(kt), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          r.value ? (n(), s("div", zd, [
            e("span", {
              class: A(["di-source-badge", "di-source-" + ie.value])
            }, c(r.value), 3),
            bt.value ? (n(), s("span", Kd, c(bt.value), 1)) : v("", !0)
          ])) : v("", !0),
          e("div", Gd, [
            e("div", Yd, [
              t[95] || (t[95] = e("label", { class: "di-context-label di-context-label-tab" }, "タブ:", -1)),
              e("div", Xd, [
                h(e("input", {
                  "onUpdate:modelValue": t[0] || (t[0] = (o) => K.value = o),
                  type: "text",
                  class: "di-context-input",
                  placeholder: "例: 予習, 受講者一覧",
                  onFocus: t[1] || (t[1] = (o) => ft.value = !0),
                  onBlur: Lt,
                  autocomplete: "off"
                }, null, 544), [
                  [x, K.value]
                ]),
                ft.value && St.value.length > 0 ? (n(), s("div", Wd, [
                  (n(!0), s(I, null, D(St.value, (o) => (n(), s("div", {
                    key: o,
                    class: "di-dropdown-item",
                    onMousedown: de((w) => Bt(o), ["prevent"])
                  }, c(o), 41, Zd))), 128))
                ])) : v("", !0)
              ])
            ]),
            e("div", Jd, [
              t[96] || (t[96] = e("label", { class: "di-context-label di-context-label-modal" }, "モーダル:", -1)),
              e("div", Qd, [
                h(e("input", {
                  "onUpdate:modelValue": t[2] || (t[2] = (o) => Qe.value = o),
                  type: "text",
                  class: "di-context-input",
                  placeholder: "例: 確認ダイアログ",
                  onFocus: t[3] || (t[3] = (o) => nt.value = !0),
                  onBlur: Ot,
                  autocomplete: "off"
                }, null, 544), [
                  [x, Qe.value]
                ]),
                nt.value && Ut.value.length > 0 ? (n(), s("div", Nd, [
                  (n(!0), s(I, null, D(Ut.value, (o) => (n(), s("div", {
                    key: o,
                    class: "di-dropdown-item",
                    onMousedown: de((w) => At(o), ["prevent"])
                  }, c(o), 41, eu))), 128))
                ])) : v("", !0)
              ])
            ])
          ]),
          e("div", tu, [
            e("button", {
              onClick: t[4] || (t[4] = (o) => S.value = "datasource"),
              class: A(["di-editor-tab", { "di-editor-tab-active": S.value === "datasource" }])
            }, [
              T(u(It), { style: { width: "14px", height: "14px" } }),
              t[97] || (t[97] = O(" データソース ", -1))
            ], 2),
            e("button", {
              onClick: t[5] || (t[5] = (o) => S.value = "action"),
              class: A(["di-editor-tab", { "di-editor-tab-active": S.value === "action" }])
            }, [
              T(u(Eo), { style: { width: "14px", height: "14px" } }),
              t[98] || (t[98] = O(" アクション ", -1))
            ], 2),
            e("button", {
              onClick: t[6] || (t[6] = (o) => S.value = "form"),
              class: A(["di-editor-tab", { "di-editor-tab-active": S.value === "form" }])
            }, [
              T(u(xo), { style: { width: "14px", height: "14px" } }),
              t[99] || (t[99] = O(" フォーム ", -1))
            ], 2),
            e("button", {
              onClick: t[7] || (t[7] = (o) => S.value = "chart"),
              class: A(["di-editor-tab", { "di-editor-tab-active": S.value === "chart" }])
            }, [
              T(u(fo), { style: { width: "14px", height: "14px" } }),
              t[100] || (t[100] = O(" チャート ", -1))
            ], 2)
          ]),
          e("div", lu, [
            S.value === "datasource" ? (n(), s(I, { key: 0 }, [
              e("div", ou, [
                t[101] || (t[101] = e("label", { class: "di-form-label" }, "表示タイプ", -1)),
                e("div", nu, [
                  (n(), s(I, null, D(p, (o) => e("button", {
                    key: o.value,
                    onClick: (w) => Y.value = o.value,
                    class: A(["di-display-type-card", { "di-display-type-active": Y.value === o.value }]),
                    style: it(Y.value === o.value ? { borderColor: o.color, background: o.color + "18" } : {})
                  }, [
                    (n(), mt(uo(o.icon), {
                      style: it([{ width: "20px", height: "20px" }, { color: Y.value === o.value ? o.color : "#64748b" }])
                    }, null, 8, ["style"])),
                    e("span", {
                      class: "di-display-type-label",
                      style: it({ color: Y.value === o.value ? o.color : "#94a3b8" })
                    }, c(o.label), 5),
                    e("span", iu, c(o.description), 1)
                  ], 14, su)), 64))
                ])
              ]),
              Y.value === "db_direct" || Y.value === "db_formatted" ? (n(), s(I, { key: 0 }, [
                De.value.length > 0 ? (n(), s("div", au, [
                  t[102] || (t[102] = e("label", { class: "di-form-label" }, "登録済みカラム", -1)),
                  e("div", du, [
                    (n(!0), s(I, null, D(De.value, (o, w) => (n(), s("div", {
                      key: w,
                      class: "di-field-tag"
                    }, [
                      e("span", uu, c(o.table) + "." + c(o.column), 1),
                      o.type ? (n(), s("span", ru, c(o.type), 1)) : v("", !0),
                      e("button", {
                        onClick: (m) => nl(w),
                        class: "di-field-tag-remove"
                      }, "×", 8, cu)
                    ]))), 128))
                  ])
                ])) : v("", !0),
                Nt.value ? (n(), s("div", vu, [
                  e("div", pu, [
                    e("label", mu, [
                      T(u(It), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                      t[103] || (t[103] = O(" schema.rb から選択 ", -1))
                    ]),
                    e("div", fu, [
                      h(e("input", {
                        "onUpdate:modelValue": t[8] || (t[8] = (o) => gt.value = o),
                        onFocus: t[9] || (t[9] = (o) => Tt.value = !0),
                        type: "text",
                        placeholder: "テーブル.カラムを検索... (例: users, email)",
                        class: "di-input di-binding-search"
                      }, null, 544), [
                        [x, gt.value]
                      ]),
                      gt.value ? (n(), s("button", {
                        key: 0,
                        onClick: t[10] || (t[10] = (o) => {
                          gt.value = "", Tt.value = !1;
                        }),
                        class: "di-binding-clear"
                      }, [
                        T(u(kt), { style: { width: "14px", height: "14px" } })
                      ])) : v("", !0)
                    ]),
                    Tt.value && qt.value.length > 0 ? (n(), s("div", bu, [
                      (n(!0), s(I, null, D(qt.value, (o) => (n(), s("button", {
                        key: o.fullName,
                        onClick: (w) => ol(o),
                        class: "di-binding-item has-db"
                      }, [
                        e("div", yu, [
                          e("span", gu, c(o.fullName), 1),
                          e("span", ku, c(o.type), 1)
                        ]),
                        o.comment ? (n(), s("span", xu, c(o.comment), 1)) : v("", !0)
                      ], 8, hu))), 128))
                    ])) : Tt.value && gt.value && qt.value.length === 0 ? (n(), s("div", wu, " 該当するカラムが見つかりません ")) : v("", !0)
                  ])
                ])) : v("", !0),
                Nt.value ? (n(), s("div", Cu, [...t[104] || (t[104] = [
                  e("span", null, "または手動入力", -1)
                ])])) : v("", !0),
                e("div", $u, [
                  e("div", _u, [
                    t[105] || (t[105] = e("label", { class: "di-form-label" }, "テーブル名 *", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[11] || (t[11] = (o) => re.value = o),
                      onFocus: t[12] || (t[12] = (o) => Gt.value = !0),
                      onBlur: t[13] || (t[13] = (o) => Vl()),
                      type: "text",
                      placeholder: "users",
                      class: "di-input",
                      autocomplete: "off"
                    }, null, 544), [
                      [x, re.value]
                    ]),
                    Gt.value && sl.value.length > 0 ? (n(), s("div", Tu, [
                      (n(!0), s(I, null, D(sl.value.slice(0, 10), (o) => (n(), s("button", {
                        key: o,
                        onMousedown: de((w) => Pl(o), ["prevent"]),
                        class: "di-suggest-item"
                      }, c(o), 41, Iu))), 128))
                    ])) : v("", !0)
                  ]),
                  e("div", Mu, [
                    t[106] || (t[106] = e("label", { class: "di-form-label" }, "カラム名 *", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[14] || (t[14] = (o) => Ae.value = o),
                      onFocus: t[15] || (t[15] = (o) => Yt.value = !0),
                      onBlur: t[16] || (t[16] = (o) => El()),
                      type: "text",
                      placeholder: "name",
                      class: "di-input",
                      autocomplete: "off"
                    }, null, 544), [
                      [x, Ae.value]
                    ]),
                    Yt.value && il.value.length > 0 ? (n(), s("div", Su, [
                      (n(!0), s(I, null, D(il.value.slice(0, 10), (o) => (n(), s("button", {
                        key: o,
                        onMousedown: de((w) => Bl(o), ["prevent"]),
                        class: "di-suggest-item"
                      }, c(o), 41, Uu))), 128))
                    ])) : v("", !0)
                  ])
                ]),
                e("div", Du, [
                  t[108] || (t[108] = e("label", { class: "di-form-label" }, "データ型", -1)),
                  h(e("select", {
                    "onUpdate:modelValue": t[17] || (t[17] = (o) => vt.value = o),
                    class: "di-select"
                  }, [
                    t[107] || (t[107] = e("option", { value: "" }, "選択してください", -1)),
                    (n(), s(I, null, D(Ul, (o) => e("option", {
                      key: o,
                      value: o
                    }, c(o), 9, Vu)), 64))
                  ], 512), [
                    [Me, vt.value]
                  ])
                ]),
                e("button", {
                  onClick: Dl,
                  class: "di-btn-add-field",
                  disabled: !re.value || !Ae.value
                }, " + カラムを追加 ", 8, Eu),
                et.value ? (n(), s("div", Pu, [
                  e("button", {
                    onClick: vl,
                    class: A(["di-btn-condition-toggle", { "di-condition-active": Ne.value }])
                  }, [
                    T(u(wl), { style: { width: "14px", height: "14px" } }),
                    t[109] || (t[109] = O(" マスタ値を定義 ", -1)),
                    Ct.value ? (n(), s("span", Bu, c(Ct.value.entries.length) + "件", 1)) : v("", !0)
                  ], 2),
                  Ne.value ? (n(), s("div", Au, [
                    Ge.value.length > 0 ? (n(), s("div", Lu, [
                      t[110] || (t[110] = e("div", { class: "di-master-entries-header" }, [
                        e("span", { class: "di-master-col-val" }, "値"),
                        e("span", { class: "di-master-col-lbl" }, "ラベル"),
                        e("span", { class: "di-master-col-color" }, "色"),
                        e("span", { class: "di-master-col-act" })
                      ], -1)),
                      (n(!0), s(I, null, D(Ge.value, (o, w) => (n(), s("div", {
                        key: w,
                        class: "di-master-entry-row"
                      }, [
                        h(e("input", {
                          "onUpdate:modelValue": (m) => o.value = m,
                          placeholder: "1",
                          class: "di-master-input di-master-col-val"
                        }, null, 8, Ou), [
                          [x, o.value]
                        ]),
                        h(e("input", {
                          "onUpdate:modelValue": (m) => o.label = m,
                          placeholder: "受付",
                          class: "di-master-input di-master-col-lbl"
                        }, null, 8, Fu), [
                          [x, o.label]
                        ]),
                        h(e("input", {
                          "onUpdate:modelValue": (m) => o.color = m,
                          type: "color",
                          class: "di-master-color-input"
                        }, null, 8, ju), [
                          [x, o.color]
                        ]),
                        e("button", {
                          onClick: (m) => ml(w),
                          class: "di-master-entry-remove"
                        }, "×", 8, qu)
                      ]))), 128))
                    ])) : v("", !0),
                    e("button", {
                      onClick: pl,
                      class: "di-btn-add-field",
                      style: { "margin-top": "4px" }
                    }, " + 値を追加 ")
                  ])) : v("", !0)
                ])) : v("", !0),
                Y.value === "db_formatted" ? (n(), s("div", Hu, [
                  t[111] || (t[111] = e("label", { class: "di-form-label" }, "整形方法", -1)),
                  h(e("textarea", {
                    "onUpdate:modelValue": t[18] || (t[18] = (o) => yt.value = o),
                    rows: "2",
                    placeholder: "YYYY年MM月DD日 に整形、姓 + 名 で結合 など",
                    class: "di-textarea"
                  }, null, 512), [
                    [x, yt.value]
                  ])
                ])) : v("", !0),
                e("div", Ru, [
                  e("button", {
                    onClick: t[19] || (t[19] = (o) => Te.value = !Te.value),
                    class: A(["di-btn-condition-toggle", { "di-condition-active": Te.value }])
                  }, [
                    T(u(yl), { style: { width: "14px", height: "14px" } }),
                    t[112] || (t[112] = O(" このカラムは計算値を保存している ", -1)),
                    Te.value ? (n(), s("span", zu, "設定あり")) : v("", !0)
                  ], 2)
                ]),
                Te.value ? (n(), s("div", Ku, [
                  e("div", Gu, [
                    t[113] || (t[113] = e("label", { class: "di-form-label" }, "計算ロジック", -1)),
                    h(e("textarea", {
                      "onUpdate:modelValue": t[20] || (t[20] = (o) => tt.value = o),
                      rows: "2",
                      placeholder: "SUM(order_items.price * quantity)、unit_price × quantity など",
                      class: "di-textarea di-textarea-mono"
                    }, null, 512), [
                      [x, tt.value]
                    ])
                  ]),
                  e("div", Yu, [
                    t[114] || (t[114] = e("label", { class: "di-form-label" }, "元データ（テーブル.カラム）", -1)),
                    e("div", Xu, [
                      (n(!0), s(I, null, D(ve.value, (o, w) => (n(), s("span", {
                        key: w,
                        class: "di-calc-tag"
                      }, [
                        O(c(o) + " ", 1),
                        e("button", {
                          onClick: de((m) => ve.value.splice(w, 1), ["stop"]),
                          class: "di-calc-tag-remove"
                        }, "×", 8, Wu)
                      ]))), 128)),
                      h(e("input", {
                        "onUpdate:modelValue": t[21] || (t[21] = (o) => ze.value = o),
                        onFocus: t[22] || (t[22] = (o) => ht.value = !0),
                        onBlur: jl,
                        onKeydown: t[23] || (t[23] = Pt(de((o) => ql(), ["prevent"]), ["enter"])),
                        type: "text",
                        placeholder: "order_items.price",
                        class: "di-calc-tags-field",
                        autocomplete: "off"
                      }, null, 544), [
                        [x, ze.value]
                      ])
                    ]),
                    ht.value && dl.value.length > 0 ? (n(), s("div", Zu, [
                      (n(!0), s(I, null, D(dl.value.slice(0, 12), (o) => (n(), s("button", {
                        key: o,
                        onMousedown: de((w) => Hl(o), ["prevent"]),
                        class: "di-suggest-item"
                      }, [
                        T(u(It), { style: { width: "10px", height: "10px", opacity: "0.5", "flex-shrink": "0" } }),
                        O(" " + c(o), 1)
                      ], 40, Ju))), 128))
                    ])) : v("", !0),
                    t[115] || (t[115] = e("span", { class: "di-form-hint" }, "Enter で追加、またはドロップダウンから選択", -1))
                  ]),
                  e("div", Qu, [
                    t[117] || (t[117] = e("label", { class: "di-form-label" }, "計算タイミング", -1)),
                    h(e("select", {
                      "onUpdate:modelValue": t[24] || (t[24] = (o) => $t.value = o),
                      class: "di-select"
                    }, [...t[116] || (t[116] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "on_save" }, "保存時（アプリ側で計算）", -1),
                      e("option", { value: "trigger" }, "DBトリガー", -1),
                      e("option", { value: "batch" }, "バッチ（定期実行）", -1),
                      e("option", { value: "realtime" }, "リアルタイム（ビュー/マテビュー）", -1)
                    ])], 512), [
                      [Me, $t.value]
                    ])
                  ])
                ])) : v("", !0)
              ], 64)) : v("", !0),
              Y.value === "calculated" ? (n(), s("div", Nu, [
                t[118] || (t[118] = e("label", { class: "di-form-label" }, "計算ロジック", -1)),
                e("div", {
                  class: "di-calc-tags-input",
                  onClick: t[28] || (t[28] = (o) => {
                    var w;
                    return (w = b.$refs.calcInputEl) == null ? void 0 : w.focus();
                  })
                }, [
                  (n(!0), s(I, null, D(ke.value, (o, w) => (n(), s(I, { key: w }, [
                    o.type === "tag" ? (n(), s("span", er, [
                      O(c(o.value) + " ", 1),
                      e("button", {
                        onClick: de((m) => Ll(w), ["stop"]),
                        class: "di-calc-tag-remove"
                      }, "×", 8, tr)
                    ])) : (n(), s("span", lr, c(o.value), 1))
                  ], 64))), 128)),
                  h(e("input", {
                    ref: "calcInputEl",
                    "onUpdate:modelValue": t[25] || (t[25] = (o) => d.value = o),
                    onFocus: t[26] || (t[26] = (o) => Le.value = !0),
                    onBlur: t[27] || (t[27] = (o) => Fl()),
                    onKeydown: Ol,
                    type: "text",
                    placeholder: ke.value.length === 0 ? "カラムを選択 or 自由入力 (例: × 2)" : "",
                    class: "di-calc-tags-field",
                    autocomplete: "off"
                  }, null, 40, or), [
                    [x, d.value]
                  ])
                ]),
                Le.value && al.value.length > 0 ? (n(), s("div", nr, [
                  (n(!0), s(I, null, D(al.value.slice(0, 12), (o) => (n(), s("button", {
                    key: o,
                    onMousedown: de((w) => Al(o), ["prevent"]),
                    class: "di-suggest-item"
                  }, [
                    T(u(It), { style: { width: "10px", height: "10px", opacity: "0.5", "flex-shrink": "0" } }),
                    O(" " + c(o), 1)
                  ], 40, sr))), 128))
                ])) : v("", !0),
                t[119] || (t[119] = e("span", { class: "di-form-hint" }, "DBカラムはドロップダウンから挿入、演算子や数値はそのまま入力", -1))
              ])) : v("", !0),
              Y.value === "static" || Y.value === "other" ? (n(), s("div", ir, [
                t[120] || (t[120] = e("label", { class: "di-form-label" }, "メモ", -1)),
                h(e("textarea", {
                  "onUpdate:modelValue": t[29] || (t[29] = (o) => xe.value = o),
                  rows: "4",
                  placeholder: "この要素についてのメモ...",
                  class: "di-textarea"
                }, null, 512), [
                  [x, xe.value]
                ])
              ])) : v("", !0),
              Y.value && Y.value !== "other" ? (n(), s(I, { key: 3 }, [
                e("div", ar, [
                  e("button", {
                    onClick: t[30] || (t[30] = (o) => Ye.value = !Ye.value),
                    class: A(["di-btn-condition-toggle", { "di-condition-active": Ye.value || st.value }])
                  }, [
                    T(u(Tl), { style: { width: "14px", height: "14px" } }),
                    t[121] || (t[121] = O(" 条件付き表示 ", -1)),
                    st.value ? (n(), s("span", dr, "設定あり")) : v("", !0)
                  ], 2)
                ]),
                Ye.value ? (n(), s("div", ur, [
                  e("div", rr, [
                    t[122] || (t[122] = e("label", { class: "di-form-label" }, "表示条件", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[31] || (t[31] = (o) => st.value = o),
                      type: "text",
                      placeholder: "管理者ロール時のみ / ステータスがactiveの時",
                      class: "di-input"
                    }, null, 512), [
                      [x, st.value]
                    ])
                  ]),
                  e("div", cr, [
                    t[123] || (t[123] = e("label", { class: "di-form-label" }, "判定カラム", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[32] || (t[32] = (o) => V.value = o),
                      type: "text",
                      placeholder: "users.role / orders.status",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [x, V.value]
                    ])
                  ]),
                  e("div", vr, [
                    e("div", pr, [
                      t[125] || (t[125] = e("label", { class: "di-form-label" }, "条件不一致時の挙動", -1)),
                      h(e("select", {
                        "onUpdate:modelValue": t[33] || (t[33] = (o) => pe.value = o),
                        class: "di-select"
                      }, [...t[124] || (t[124] = [
                        e("option", { value: "" }, "未指定", -1),
                        e("option", { value: "hidden" }, "非表示", -1),
                        e("option", { value: "disabled" }, "無効化 (グレーアウト)", -1),
                        e("option", { value: "different_value" }, "別の値を表示", -1),
                        e("option", { value: "empty" }, "空欄", -1)
                      ])], 512), [
                        [Me, pe.value]
                      ])
                    ])
                  ]),
                  pe.value === "different_value" ? (n(), s("div", mr, [
                    t[126] || (t[126] = e("label", { class: "di-form-label" }, "代わりに表示する値", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[34] || (t[34] = (o) => Oe.value = o),
                      type: "text",
                      placeholder: "「権限がありません」/ 「***」",
                      class: "di-input"
                    }, null, 512), [
                      [x, Oe.value]
                    ])
                  ])) : v("", !0)
                ])) : v("", !0)
              ], 64)) : v("", !0),
              Y.value === "db_direct" || Y.value === "db_formatted" || Y.value === "calculated" ? (n(), s(I, { key: 4 }, [
                t[134] || (t[134] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "表示の詳細")
                ], -1)),
                e("div", fr, [
                  e("div", br, [
                    t[127] || (t[127] = e("label", { class: "di-form-label" }, "サンプル値", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[35] || (t[35] = (o) => fe.value = o),
                      type: "text",
                      placeholder: "12,500 / 田中太郎",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [x, fe.value]
                    ])
                  ]),
                  e("div", hr, [
                    t[128] || (t[128] = e("label", { class: "di-form-label" }, "単位", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[36] || (t[36] = (o) => ce.value = o),
                      type: "text",
                      placeholder: "円 / %",
                      class: "di-input"
                    }, null, 512), [
                      [x, ce.value]
                    ])
                  ])
                ]),
                e("div", yr, [
                  e("div", gr, [
                    t[130] || (t[130] = e("label", { class: "di-form-label" }, "小数点の扱い", -1)),
                    h(e("select", {
                      "onUpdate:modelValue": t[37] || (t[37] = (o) => X.value = o),
                      class: "di-select"
                    }, [...t[129] || (t[129] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "round" }, "四捨五入", -1),
                      e("option", { value: "floor" }, "切り捨て", -1),
                      e("option", { value: "ceil" }, "切り上げ", -1),
                      e("option", { value: "decimal_1" }, "小数第1位まで", -1),
                      e("option", { value: "decimal_2" }, "小数第2位まで", -1),
                      e("option", { value: "integer" }, "整数のみ", -1)
                    ])], 512), [
                      [Me, X.value]
                    ])
                  ]),
                  e("div", kr, [
                    t[131] || (t[131] = e("label", { class: "di-form-label" }, "NULL/ゼロ時", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[38] || (t[38] = (o) => Re.value = o),
                      type: "text",
                      placeholder: "- / 0 / 非表示 / N/A",
                      class: "di-input"
                    }, null, 512), [
                      [x, Re.value]
                    ])
                  ])
                ]),
                e("div", xr, [
                  t[132] || (t[132] = e("label", { class: "di-form-label" }, "表示フォーマット", -1)),
                  h(e("input", {
                    "onUpdate:modelValue": t[39] || (t[39] = (o) => Ve.value = o),
                    type: "text",
                    placeholder: "カンマ区切り / ¥記号付き / YYYY/MM/DD",
                    class: "di-input"
                  }, null, 512), [
                    [x, Ve.value]
                  ])
                ]),
                e("div", wr, [
                  t[133] || (t[133] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                  h(e("textarea", {
                    "onUpdate:modelValue": t[40] || (t[40] = (o) => xe.value = o),
                    rows: "2",
                    placeholder: "補足情報があれば...",
                    class: "di-textarea"
                  }, null, 512), [
                    [x, xe.value]
                  ])
                ])
              ], 64)) : v("", !0)
            ], 64)) : v("", !0),
            S.value === "action" ? (n(), s(I, { key: 1 }, [
              e("div", Cr, [
                t[136] || (t[136] = e("label", { class: "di-form-label" }, "アクションタイプ", -1)),
                h(e("select", {
                  "onUpdate:modelValue": t[41] || (t[41] = (o) => P.value = o),
                  class: "di-select"
                }, [...t[135] || (t[135] = [
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
                  [Me, P.value]
                ])
              ]),
              e("div", $r, [
                t[137] || (t[137] = e("label", { class: "di-form-label" }, "ターゲット", -1)),
                h(e("input", {
                  "onUpdate:modelValue": t[42] || (t[42] = (o) => ee.value = o),
                  type: "text",
                  placeholder: P.value === "navigate" ? "/tasks" : P.value === "api" ? "/api/users" : P.value === "modal" ? "confirm-dialog" : P.value === "csv_export" ? "/api/export/users" : P.value === "csv_import" ? "/api/import/users" : "",
                  class: "di-input di-input-mono"
                }, null, 8, _r), [
                  [x, ee.value]
                ])
              ]),
              P.value === "api" ? (n(), s("div", Tr, [
                t[139] || (t[139] = e("label", { class: "di-form-label" }, "HTTPメソッド", -1)),
                h(e("select", {
                  "onUpdate:modelValue": t[43] || (t[43] = (o) => oe.value = o),
                  class: "di-select"
                }, [...t[138] || (t[138] = [
                  e("option", { value: "" }, "選択してください", -1),
                  e("option", { value: "GET" }, "GET", -1),
                  e("option", { value: "POST" }, "POST", -1),
                  e("option", { value: "PUT" }, "PUT", -1),
                  e("option", { value: "DELETE" }, "DELETE", -1),
                  e("option", { value: "PATCH" }, "PATCH", -1)
                ])], 512), [
                  [Me, oe.value]
                ])
              ])) : v("", !0),
              e("div", Ir, [
                t[140] || (t[140] = e("label", { class: "di-form-label" }, "説明", -1)),
                h(e("textarea", {
                  "onUpdate:modelValue": t[44] || (t[44] = (o) => ue.value = o),
                  rows: "3",
                  placeholder: "このアクションの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [x, ue.value]
                ])
              ]),
              P.value === "csv_export" || P.value === "csv_import" ? (n(), s(I, { key: 1 }, [
                e("div", Mr, [
                  e("span", null, [
                    T(u(Ml), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[141] || (t[141] = O(" CSV仕様", -1))
                  ])
                ]),
                e("div", Sr, [
                  t[148] || (t[148] = e("label", { class: "di-form-label" }, "ファイル設定", -1)),
                  e("div", Ur, [
                    e("div", Dr, [
                      t[143] || (t[143] = e("label", { class: "di-form-label" }, "エンコーディング", -1)),
                      h(e("select", {
                        "onUpdate:modelValue": t[45] || (t[45] = (o) => E.value = o),
                        class: "di-select"
                      }, [...t[142] || (t[142] = [
                        e("option", { value: "UTF-8" }, "UTF-8", -1),
                        e("option", { value: "Shift_JIS" }, "Shift_JIS", -1),
                        e("option", { value: "EUC-JP" }, "EUC-JP", -1),
                        e("option", { value: "UTF-8 BOM" }, "UTF-8 BOM", -1)
                      ])], 512), [
                        [Me, E.value]
                      ])
                    ]),
                    e("div", Vr, [
                      t[145] || (t[145] = e("label", { class: "di-form-label" }, "区切り文字", -1)),
                      h(e("select", {
                        "onUpdate:modelValue": t[46] || (t[46] = (o) => Ee.value = o),
                        class: "di-select"
                      }, [...t[144] || (t[144] = [
                        e("option", { value: "," }, "カンマ (,)", -1),
                        e("option", { value: "	" }, "タブ", -1),
                        e("option", { value: "|" }, "パイプ (|)", -1)
                      ])], 512), [
                        [Me, Ee.value]
                      ])
                    ])
                  ]),
                  e("div", Er, [
                    e("label", Pr, [
                      h(e("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": t[47] || (t[47] = (o) => at.value = o),
                        class: "di-checkbox"
                      }, null, 512), [
                        [Xt, at.value]
                      ]),
                      t[146] || (t[146] = O(" ヘッダー行あり ", -1))
                    ])
                  ]),
                  e("div", Br, [
                    t[147] || (t[147] = e("label", { class: "di-form-label" }, "ファイル名パターン", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[48] || (t[48] = (o) => Se.value = o),
                      type: "text",
                      placeholder: "users_{YYYYMMDD}.csv",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [x, Se.value]
                    ])
                  ])
                ]),
                e("div", Ar, [
                  t[151] || (t[151] = e("label", { class: "di-form-label" }, "CSV列定義", -1)),
                  me.value.length > 0 ? (n(), s("div", Lr, [
                    t[150] || (t[150] = e("div", { class: "di-csv-columns-header" }, [
                      e("span", { class: "di-csv-col-no" }, "No"),
                      e("span", { class: "di-csv-col-name" }, "項目名"),
                      e("span", { class: "di-csv-col-db" }, "DBマッピング"),
                      e("span", { class: "di-csv-col-proc" }, "加工"),
                      e("span", { class: "di-csv-col-type" }, "型"),
                      e("span", { class: "di-csv-col-req" }, "必須"),
                      e("span", { class: "di-csv-col-desc" }, "説明"),
                      e("span", { class: "di-csv-col-act" })
                    ], -1)),
                    (n(!0), s(I, null, D(me.value, (o, w) => (n(), s("div", {
                      key: w,
                      class: "di-csv-column-row"
                    }, [
                      e("span", Or, c(w + 1), 1),
                      h(e("input", {
                        "onUpdate:modelValue": (m) => o.name = m,
                        placeholder: "項目名",
                        class: "di-csv-input di-csv-col-name"
                      }, null, 8, Fr), [
                        [x, o.name]
                      ]),
                      h(e("input", {
                        "onUpdate:modelValue": (m) => o.dbMapping = m,
                        placeholder: "table.col",
                        class: "di-csv-input di-csv-col-db"
                      }, null, 8, jr), [
                        [x, o.dbMapping]
                      ]),
                      h(e("input", {
                        "onUpdate:modelValue": (m) => o.processing = m,
                        placeholder: "姓+名, IF...",
                        class: "di-csv-input di-csv-col-proc"
                      }, null, 8, qr), [
                        [x, o.processing]
                      ]),
                      h(e("select", {
                        "onUpdate:modelValue": (m) => o.type = m,
                        class: "di-csv-select di-csv-col-type"
                      }, [...t[149] || (t[149] = [
                        e("option", { value: "" }, "-", -1),
                        e("option", { value: "string" }, "string", -1),
                        e("option", { value: "integer" }, "integer", -1),
                        e("option", { value: "decimal" }, "decimal", -1),
                        e("option", { value: "date" }, "date", -1),
                        e("option", { value: "datetime" }, "datetime", -1),
                        e("option", { value: "boolean" }, "boolean", -1)
                      ])], 8, Hr), [
                        [Me, o.type]
                      ]),
                      e("label", Rr, [
                        h(e("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": (m) => o.required = m,
                          class: "di-checkbox"
                        }, null, 8, zr), [
                          [Xt, o.required]
                        ])
                      ]),
                      h(e("input", {
                        "onUpdate:modelValue": (m) => o.description = m,
                        placeholder: "備考",
                        class: "di-csv-input di-csv-col-desc"
                      }, null, 8, Kr), [
                        [x, o.description]
                      ]),
                      e("div", Gr, [
                        e("button", {
                          onClick: (m) => rl(w, -1),
                          disabled: w === 0,
                          class: "di-csv-move-btn",
                          title: "上へ"
                        }, [
                          T(u(gl), { style: { width: "12px", height: "12px" } })
                        ], 8, Yr),
                        e("button", {
                          onClick: (m) => rl(w, 1),
                          disabled: w === me.value.length - 1,
                          class: "di-csv-move-btn",
                          title: "下へ"
                        }, [
                          T(u(ll), { style: { width: "12px", height: "12px" } })
                        ], 8, Xr),
                        e("button", {
                          onClick: (m) => Wl(w),
                          class: "di-csv-remove-btn",
                          title: "削除"
                        }, "×", 8, Wr)
                      ])
                    ]))), 128))
                  ])) : v("", !0),
                  e("button", {
                    onClick: Xl,
                    class: "di-btn-add-field"
                  }, " + 列を追加 ")
                ]),
                P.value === "csv_export" ? (n(), s(I, { key: 0 }, [
                  t[155] || (t[155] = e("div", { class: "di-form-divider" }, [
                    e("span", null, "出力オプション")
                  ], -1)),
                  e("div", Zr, [
                    t[152] || (t[152] = e("label", { class: "di-form-label" }, "ソート順", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[49] || (t[49] = (o) => Xe.value = o),
                      type: "text",
                      placeholder: "created_at DESC",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [x, Xe.value]
                    ])
                  ]),
                  e("div", Jr, [
                    t[153] || (t[153] = e("label", { class: "di-form-label" }, "抽出条件", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[50] || (t[50] = (o) => ye.value = o),
                      type: "text",
                      placeholder: "status = 'active'",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [x, ye.value]
                    ])
                  ]),
                  e("div", Qr, [
                    t[154] || (t[154] = e("label", { class: "di-form-label" }, "最大行数", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[51] || (t[51] = (o) => ne.value = o),
                      type: "number",
                      placeholder: "10000",
                      class: "di-input"
                    }, null, 512), [
                      [
                        x,
                        ne.value,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ], 64)) : v("", !0),
                P.value === "csv_import" ? (n(), s(I, { key: 1 }, [
                  t[161] || (t[161] = e("div", { class: "di-form-divider" }, [
                    e("span", null, "取込オプション")
                  ], -1)),
                  e("div", Nr, [
                    t[157] || (t[157] = e("label", { class: "di-form-label" }, "エラー処理", -1)),
                    h(e("select", {
                      "onUpdate:modelValue": t[52] || (t[52] = (o) => je.value = o),
                      class: "di-select"
                    }, [...t[156] || (t[156] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "stop_on_first" }, "最初のエラーで停止", -1),
                      e("option", { value: "skip_and_continue" }, "スキップして続行", -1),
                      e("option", { value: "collect_all" }, "全エラー収集", -1)
                    ])], 512), [
                      [Me, je.value]
                    ])
                  ]),
                  e("div", ec, [
                    t[159] || (t[159] = e("label", { class: "di-form-label" }, "重複処理", -1)),
                    h(e("select", {
                      "onUpdate:modelValue": t[53] || (t[53] = (o) => H.value = o),
                      class: "di-select"
                    }, [...t[158] || (t[158] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "skip" }, "スキップ", -1),
                      e("option", { value: "overwrite" }, "上書き", -1),
                      e("option", { value: "error" }, "エラー", -1)
                    ])], 512), [
                      [Me, H.value]
                    ])
                  ]),
                  e("div", tc, [
                    t[160] || (t[160] = e("label", { class: "di-form-label" }, "事前バリデーション", -1)),
                    h(e("textarea", {
                      "onUpdate:modelValue": t[54] || (t[54] = (o) => M.value = o),
                      rows: "2",
                      placeholder: "取込前のチェック内容...",
                      class: "di-textarea"
                    }, null, 512), [
                      [x, M.value]
                    ])
                  ])
                ], 64)) : v("", !0),
                t[165] || (t[165] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "エラー定義")
                ], -1)),
                e("div", lc, [
                  g.value.length > 0 ? (n(), s("div", oc, [
                    t[164] || (t[164] = e("div", { class: "di-csv-columns-header" }, [
                      e("span", { class: "di-csv-err-col" }, "対象列"),
                      e("span", { class: "di-csv-err-cond" }, "エラー条件"),
                      e("span", { class: "di-csv-err-msg" }, "エラーメッセージ"),
                      e("span", { class: "di-csv-err-sev" }, "種別"),
                      e("span", { class: "di-csv-err-act" })
                    ], -1)),
                    (n(!0), s(I, null, D(g.value, (o, w) => (n(), s("div", {
                      key: w,
                      class: "di-csv-column-row"
                    }, [
                      h(e("select", {
                        "onUpdate:modelValue": (m) => o.column = m,
                        class: "di-csv-select di-csv-err-col"
                      }, [
                        t[162] || (t[162] = e("option", { value: "" }, "（全体）", -1)),
                        (n(!0), s(I, null, D(eo.value, (m) => (n(), s("option", {
                          key: m,
                          value: m
                        }, c(m), 9, sc))), 128))
                      ], 8, nc), [
                        [Me, o.column]
                      ]),
                      h(e("input", {
                        "onUpdate:modelValue": (m) => o.condition = m,
                        placeholder: "必須項目が空",
                        class: "di-csv-input di-csv-err-cond"
                      }, null, 8, ic), [
                        [x, o.condition]
                      ]),
                      h(e("input", {
                        "onUpdate:modelValue": (m) => o.message = m,
                        placeholder: "○○は必須です",
                        class: "di-csv-input di-csv-err-msg"
                      }, null, 8, ac), [
                        [x, o.message]
                      ]),
                      h(e("select", {
                        "onUpdate:modelValue": (m) => o.severity = m,
                        class: "di-csv-select di-csv-err-sev"
                      }, [...t[163] || (t[163] = [
                        e("option", { value: "error" }, "エラー", -1),
                        e("option", { value: "warning" }, "警告", -1)
                      ])], 8, dc), [
                        [Me, o.severity]
                      ]),
                      e("button", {
                        onClick: (m) => Nl(w),
                        class: "di-csv-remove-btn",
                        title: "削除"
                      }, "×", 8, uc)
                    ]))), 128))
                  ])) : v("", !0),
                  e("button", {
                    onClick: Ql,
                    class: "di-btn-add-field"
                  }, " + エラー定義を追加 ")
                ])
              ], 64)) : v("", !0),
              P.value === "email" ? (n(), s(I, { key: 2 }, [
                e("div", rc, [
                  e("span", null, [
                    T(u(_o), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[166] || (t[166] = O(" メール基本設定", -1))
                  ])
                ]),
                e("div", cc, [
                  e("div", vc, [
                    t[167] || (t[167] = e("label", { class: "di-form-label" }, "トリガー *", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[55] || (t[55] = (o) => F.value = o),
                      type: "text",
                      placeholder: "注文確定時、ボタンクリック",
                      class: "di-input"
                    }, null, 512), [
                      [x, F.value]
                    ])
                  ]),
                  e("div", pc, [
                    t[168] || (t[168] = e("label", { class: "di-form-label" }, "宛先 *", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[56] || (t[56] = (o) => R.value = o),
                      type: "text",
                      placeholder: "ユーザーメール、管理者固定",
                      class: "di-input"
                    }, null, 512), [
                      [x, R.value]
                    ])
                  ])
                ]),
                e("div", mc, [
                  e("div", fc, [
                    t[169] || (t[169] = e("label", { class: "di-form-label" }, "CC", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[57] || (t[57] = (o) => se.value = o),
                      type: "text",
                      placeholder: "CC宛先",
                      class: "di-input"
                    }, null, 512), [
                      [x, se.value]
                    ])
                  ]),
                  e("div", bc, [
                    t[170] || (t[170] = e("label", { class: "di-form-label" }, "BCC", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[58] || (t[58] = (o) => z.value = o),
                      type: "text",
                      placeholder: "BCC宛先",
                      class: "di-input"
                    }, null, 512), [
                      [x, z.value]
                    ])
                  ])
                ]),
                e("div", hc, [
                  t[171] || (t[171] = e("label", { class: "di-form-label" }, "件名テンプレート *", -1)),
                  h(e("input", {
                    "onUpdate:modelValue": t[59] || (t[59] = (o) => N.value = o),
                    type: "text",
                    placeholder: "【注文確認】ご注文番号 {orderNumber}",
                    class: "di-input"
                  }, null, 512), [
                    [x, N.value]
                  ])
                ]),
                e("div", yc, [
                  t[172] || (t[172] = e("label", { class: "di-form-label" }, "本文テンプレート概要", -1)),
                  h(e("textarea", {
                    "onUpdate:modelValue": t[60] || (t[60] = (o) => B.value = o),
                    rows: "3",
                    placeholder: "本文の概要を記述...",
                    class: "di-textarea"
                  }, null, 512), [
                    [x, B.value]
                  ])
                ]),
                e("div", gc, [
                  t[173] || (t[173] = e("label", { class: "di-form-label" }, "テンプレートファイルパス", -1)),
                  h(e("input", {
                    "onUpdate:modelValue": t[61] || (t[61] = (o) => $.value = o),
                    type: "text",
                    placeholder: "resources/mail/order_confirm.blade.php",
                    class: "di-input di-input-mono"
                  }, null, 512), [
                    [x, $.value]
                  ])
                ]),
                t[178] || (t[178] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "差し込み変数")
                ], -1)),
                e("div", kc, [
                  e("div", xc, [
                    (n(!0), s(I, null, D(U.value, (o, w) => (n(), s("span", {
                      key: w,
                      class: "di-calc-tag"
                    }, [
                      O(c(o) + " ", 1),
                      e("button", {
                        onClick: de((m) => no(w), ["stop"]),
                        class: "di-calc-tag-remove"
                      }, "×", 8, wc)
                    ]))), 128)),
                    h(e("input", {
                      "onUpdate:modelValue": t[62] || (t[62] = (o) => _e.value = o),
                      onKeydown: [
                        t[63] || (t[63] = Pt(de((o) => oo(), ["prevent"]), ["enter"])),
                        so
                      ],
                      type: "text",
                      placeholder: "変数名を入力してEnter (例: userName)",
                      class: "di-calc-tags-field",
                      autocomplete: "off"
                    }, null, 544), [
                      [x, _e.value]
                    ])
                  ]),
                  t[174] || (t[174] = e("span", { class: "di-form-hint" }, "Enter で追加", -1))
                ]),
                t[179] || (t[179] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "オプション")
                ], -1)),
                e("div", Cc, [
                  t[175] || (t[175] = e("label", { class: "di-form-label" }, "添付ファイル", -1)),
                  h(e("input", {
                    "onUpdate:modelValue": t[64] || (t[64] = (o) => J.value = o),
                    type: "text",
                    placeholder: "添付ファイルの説明",
                    class: "di-input"
                  }, null, 512), [
                    [x, J.value]
                  ])
                ]),
                e("div", $c, [
                  t[176] || (t[176] = e("label", { class: "di-form-label" }, "送信条件", -1)),
                  h(e("input", {
                    "onUpdate:modelValue": t[65] || (t[65] = (o) => We.value = o),
                    type: "text",
                    placeholder: "メール送信設定がONの場合",
                    class: "di-input"
                  }, null, 512), [
                    [x, We.value]
                  ])
                ]),
                e("div", _c, [
                  t[177] || (t[177] = e("label", { class: "di-form-label" }, "エラー処理", -1)),
                  h(e("input", {
                    "onUpdate:modelValue": t[66] || (t[66] = (o) => ge.value = o),
                    type: "text",
                    placeholder: "キューに入れてリトライ",
                    class: "di-input"
                  }, null, 512), [
                    [x, ge.value]
                  ])
                ])
              ], 64)) : v("", !0),
              P.value === "sort" ? (n(), s(I, { key: 3 }, [
                e("div", Tc, [
                  e("span", null, [
                    T(u(mo), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[180] || (t[180] = O(" ソート設定", -1))
                  ])
                ]),
                e("div", Ic, [
                  e("label", Mc, [
                    h(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": t[67] || (t[67] = (o) => Ze.value = o),
                      class: "di-checkbox"
                    }, null, 512), [
                      [Xt, Ze.value]
                    ]),
                    t[181] || (t[181] = O(" このカラムはソート可能 ", -1))
                  ])
                ]),
                Ze.value ? (n(), s(I, { key: 0 }, [
                  e("div", Sc, [
                    e("div", Uc, [
                      t[183] || (t[183] = e("label", { class: "di-form-label" }, "データ型", -1)),
                      h(e("select", {
                        "onUpdate:modelValue": t[68] || (t[68] = (o) => lt.value = o),
                        class: "di-select"
                      }, [...t[182] || (t[182] = [
                        e("option", { value: "" }, "未指定", -1),
                        e("option", { value: "string" }, "文字列", -1),
                        e("option", { value: "number" }, "数値", -1),
                        e("option", { value: "date" }, "日付", -1),
                        e("option", { value: "custom" }, "カスタム", -1)
                      ])], 512), [
                        [Me, lt.value]
                      ])
                    ]),
                    e("div", Dc, [
                      t[185] || (t[185] = e("label", { class: "di-form-label" }, "デフォルト方向", -1)),
                      h(e("select", {
                        "onUpdate:modelValue": t[69] || (t[69] = (o) => qe.value = o),
                        class: "di-select"
                      }, [...t[184] || (t[184] = [
                        e("option", { value: "" }, "未指定", -1),
                        e("option", { value: "asc" }, "昇順 (A→Z, 1→9)", -1),
                        e("option", { value: "desc" }, "降順 (Z→A, 9→1)", -1)
                      ])], 512), [
                        [Me, qe.value]
                      ])
                    ])
                  ]),
                  e("div", Vc, [
                    t[186] || (t[186] = e("label", { class: "di-form-label" }, "ソートキー (DBカラム/APIフィールド)", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[70] || (t[70] = (o) => Ke.value = o),
                      type: "text",
                      placeholder: "users.name / created_at",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [x, Ke.value]
                    ])
                  ]),
                  e("div", Ec, [
                    e("label", Pc, [
                      h(e("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": t[71] || (t[71] = (o) => Q.value = o),
                        class: "di-checkbox"
                      }, null, 512), [
                        [Xt, Q.value]
                      ]),
                      t[187] || (t[187] = O(" 初期表示時のデフォルトソート ", -1))
                    ])
                  ])
                ], 64)) : v("", !0),
                e("div", Bc, [
                  t[188] || (t[188] = e("label", { class: "di-form-label" }, "未ソート時の並び順", -1)),
                  h(e("input", {
                    "onUpdate:modelValue": t[72] || (t[72] = (o) => Pe.value = o),
                    type: "text",
                    placeholder: "ID昇順 / 登録日降順 / APIレスポンス順",
                    class: "di-input"
                  }, null, 512), [
                    [x, Pe.value]
                  ])
                ]),
                e("div", Ac, [
                  t[189] || (t[189] = e("label", { class: "di-form-label" }, "補足", -1)),
                  h(e("input", {
                    "onUpdate:modelValue": t[73] || (t[73] = (o) => dt.value = o),
                    type: "text",
                    placeholder: "サーバーサイドソート / ページネーション時はリセット",
                    class: "di-input"
                  }, null, 512), [
                    [x, dt.value]
                  ])
                ])
              ], 64)) : v("", !0),
              e("div", Lc, [
                t[190] || (t[190] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                h(e("textarea", {
                  "onUpdate:modelValue": t[74] || (t[74] = (o) => xe.value = o),
                  rows: "2",
                  placeholder: "補足情報があれば...",
                  class: "di-textarea"
                }, null, 512), [
                  [x, xe.value]
                ])
              ])
            ], 64)) : v("", !0),
            S.value === "form" ? (n(), s(I, { key: 2 }, [
              e("div", Oc, [
                t[192] || (t[192] = e("label", { class: "di-form-label" }, "入力タイプ", -1)),
                h(e("select", {
                  "onUpdate:modelValue": t[75] || (t[75] = (o) => Ce.value = o),
                  class: "di-select"
                }, [...t[191] || (t[191] = [
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
                  [Me, Ce.value]
                ])
              ]),
              De.value.length > 0 ? (n(), s("div", Fc, [
                t[193] || (t[193] = e("label", { class: "di-form-label" }, "対応カラム", -1)),
                e("div", jc, [
                  (n(!0), s(I, null, D(De.value, (o, w) => (n(), s("div", {
                    key: w,
                    class: "di-field-tag"
                  }, [
                    e("span", qc, c(o.table) + "." + c(o.column), 1),
                    o.type ? (n(), s("span", Hc, c(o.type), 1)) : v("", !0),
                    e("button", {
                      onClick: (m) => nl(w),
                      class: "di-field-tag-remove"
                    }, "×", 8, Rc)
                  ]))), 128))
                ])
              ])) : v("", !0),
              Nt.value ? (n(), s("div", zc, [
                e("div", Kc, [
                  e("label", Gc, [
                    T(u(It), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[194] || (t[194] = O(" 対応するDBカラム ", -1))
                  ]),
                  e("div", Yc, [
                    h(e("input", {
                      "onUpdate:modelValue": t[76] || (t[76] = (o) => gt.value = o),
                      onFocus: t[77] || (t[77] = (o) => Tt.value = !0),
                      type: "text",
                      placeholder: "テーブル.カラムを検索...",
                      class: "di-input di-binding-search"
                    }, null, 544), [
                      [x, gt.value]
                    ]),
                    gt.value ? (n(), s("button", {
                      key: 0,
                      onClick: t[78] || (t[78] = (o) => {
                        gt.value = "", Tt.value = !1;
                      }),
                      class: "di-binding-clear"
                    }, [
                      T(u(kt), { style: { width: "14px", height: "14px" } })
                    ])) : v("", !0)
                  ]),
                  Tt.value && qt.value.length > 0 ? (n(), s("div", Xc, [
                    (n(!0), s(I, null, D(qt.value, (o) => (n(), s("button", {
                      key: o.fullName,
                      onClick: (w) => ol(o),
                      class: "di-binding-item has-db"
                    }, [
                      e("div", Zc, [
                        e("span", Jc, c(o.fullName), 1),
                        e("span", Qc, c(o.type), 1)
                      ]),
                      o.comment ? (n(), s("span", Nc, c(o.comment), 1)) : v("", !0)
                    ], 8, Wc))), 128))
                  ])) : v("", !0)
                ])
              ])) : v("", !0),
              et.value && (Ce.value === "select" || Ce.value === "radio" || Ce.value === "checkbox") ? (n(), s("div", ev, [
                e("button", {
                  onClick: vl,
                  class: A(["di-btn-condition-toggle", { "di-condition-active": Ne.value }])
                }, [
                  T(u(wl), { style: { width: "14px", height: "14px" } }),
                  t[195] || (t[195] = O(" 選択肢を定義 ", -1)),
                  Ct.value ? (n(), s("span", tv, c(Ct.value.entries.length) + "件", 1)) : v("", !0)
                ], 2),
                Ne.value ? (n(), s("div", lv, [
                  Ge.value.length > 0 ? (n(), s("div", ov, [
                    t[196] || (t[196] = e("div", { class: "di-master-entries-header" }, [
                      e("span", { class: "di-master-col-val" }, "値"),
                      e("span", { class: "di-master-col-lbl" }, "ラベル"),
                      e("span", { class: "di-master-col-color" }, "色"),
                      e("span", { class: "di-master-col-act" })
                    ], -1)),
                    (n(!0), s(I, null, D(Ge.value, (o, w) => (n(), s("div", {
                      key: w,
                      class: "di-master-entry-row"
                    }, [
                      h(e("input", {
                        "onUpdate:modelValue": (m) => o.value = m,
                        placeholder: "1",
                        class: "di-master-input di-master-col-val"
                      }, null, 8, nv), [
                        [x, o.value]
                      ]),
                      h(e("input", {
                        "onUpdate:modelValue": (m) => o.label = m,
                        placeholder: "受付",
                        class: "di-master-input di-master-col-lbl"
                      }, null, 8, sv), [
                        [x, o.label]
                      ]),
                      h(e("input", {
                        "onUpdate:modelValue": (m) => o.color = m,
                        type: "color",
                        class: "di-master-color-input"
                      }, null, 8, iv), [
                        [x, o.color]
                      ]),
                      e("button", {
                        onClick: (m) => ml(w),
                        class: "di-master-entry-remove"
                      }, "×", 8, av)
                    ]))), 128))
                  ])) : v("", !0),
                  e("button", {
                    onClick: pl,
                    class: "di-btn-add-field",
                    style: { "margin-top": "4px" }
                  }, " + 値を追加 ")
                ])) : v("", !0)
              ])) : v("", !0),
              e("div", dv, [
                e("button", {
                  onClick: t[79] || (t[79] = (o) => $e.value = !$e.value),
                  class: A(["di-btn-condition-toggle", { "di-condition-active": $e.value }])
                }, [
                  T(u(Tl), { style: { width: "14px", height: "14px" } }),
                  t[197] || (t[197] = O(" 必須入力 ", -1)),
                  $e.value ? (n(), s("span", uv, "必須")) : v("", !0)
                ], 2)
              ]),
              e("div", rv, [
                t[198] || (t[198] = e("label", { class: "di-form-label" }, "バリデーションルール", -1)),
                e("div", cv, [
                  (n(!0), s(I, null, D(G.value, (o, w) => (n(), s("span", {
                    key: w,
                    class: "di-calc-tag",
                    style: { background: "#ec4899" }
                  }, [
                    O(c(o) + " ", 1),
                    e("button", {
                      onClick: de((m) => Gl(w), ["stop"]),
                      class: "di-calc-tag-remove"
                    }, "×", 8, vv)
                  ]))), 128)),
                  h(e("input", {
                    "onUpdate:modelValue": t[80] || (t[80] = (o) => te.value = o),
                    onKeydown: [
                      t[81] || (t[81] = Pt(de((o) => Kl(), ["prevent"]), ["enter"])),
                      Yl
                    ],
                    type: "text",
                    placeholder: G.value.length === 0 ? "max:255, email, 必須 など (Enter で追加)" : "",
                    class: "di-calc-tags-field",
                    autocomplete: "off"
                  }, null, 40, pv), [
                    [x, te.value]
                  ])
                ]),
                t[199] || (t[199] = e("span", { class: "di-form-hint" }, "Enter で追加、Backspace で削除", -1))
              ]),
              e("div", mv, [
                t[200] || (t[200] = e("label", { class: "di-form-label" }, "プレースホルダー", -1)),
                h(e("input", {
                  "onUpdate:modelValue": t[82] || (t[82] = (o) => be.value = o),
                  type: "text",
                  placeholder: "例: user@example.com",
                  class: "di-input"
                }, null, 512), [
                  [x, be.value]
                ])
              ]),
              e("div", fv, [
                t[201] || (t[201] = e("label", { class: "di-form-label" }, "デフォルト値", -1)),
                h(e("input", {
                  "onUpdate:modelValue": t[83] || (t[83] = (o) => Ie.value = o),
                  type: "text",
                  placeholder: "初期値",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [x, Ie.value]
                ])
              ]),
              e("div", bv, [
                t[202] || (t[202] = e("label", { class: "di-form-label" }, "説明", -1)),
                h(e("textarea", {
                  "onUpdate:modelValue": t[84] || (t[84] = (o) => he.value = o),
                  rows: "3",
                  placeholder: "このフォーム要素の説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [x, he.value]
                ])
              ]),
              e("div", hv, [
                t[203] || (t[203] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                h(e("textarea", {
                  "onUpdate:modelValue": t[85] || (t[85] = (o) => xe.value = o),
                  rows: "2",
                  placeholder: "補足情報があれば...",
                  class: "di-textarea"
                }, null, 512), [
                  [x, xe.value]
                ])
              ])
            ], 64)) : v("", !0),
            S.value === "chart" ? (n(), s(I, { key: 3 }, [
              e("div", yv, [
                t[205] || (t[205] = e("label", { class: "di-form-label" }, "チャート種別", -1)),
                h(e("select", {
                  "onUpdate:modelValue": t[86] || (t[86] = (o) => Je.value = o),
                  class: "di-select"
                }, [...t[204] || (t[204] = [
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
                  [Me, Je.value]
                ])
              ]),
              e("div", gv, [
                t[206] || (t[206] = e("label", { class: "di-form-label" }, "タイトル", -1)),
                h(e("input", {
                  "onUpdate:modelValue": t[87] || (t[87] = (o) => ut.value = o),
                  type: "text",
                  placeholder: "例: 月別受講者数",
                  class: "di-input"
                }, null, 512), [
                  [x, ut.value]
                ])
              ]),
              e("div", kv, [
                e("div", xv, [
                  t[207] || (t[207] = e("label", { class: "di-form-label" }, "X軸", -1)),
                  h(e("input", {
                    "onUpdate:modelValue": t[88] || (t[88] = (o) => rt.value = o),
                    type: "text",
                    placeholder: "例: 月, 日付",
                    class: "di-input"
                  }, null, 512), [
                    [x, rt.value]
                  ])
                ]),
                e("div", wv, [
                  t[208] || (t[208] = e("label", { class: "di-form-label" }, "Y軸", -1)),
                  h(e("input", {
                    "onUpdate:modelValue": t[89] || (t[89] = (o) => ct.value = o),
                    type: "text",
                    placeholder: "例: 件数, 金額",
                    class: "di-input"
                  }, null, 512), [
                    [x, ct.value]
                  ])
                ])
              ]),
              e("div", Cv, [
                t[210] || (t[210] = e("label", { class: "di-form-label" }, "系列定義", -1)),
                we.value.length > 0 ? (n(), s("div", $v, [
                  t[209] || (t[209] = e("div", { class: "di-csv-columns-header" }, [
                    e("span", { class: "di-chart-col-label" }, "系列名"),
                    e("span", { class: "di-chart-col-field" }, "フィールド"),
                    e("span", { class: "di-chart-col-color" }, "色"),
                    e("span", { class: "di-csv-col-act" })
                  ], -1)),
                  (n(!0), s(I, null, D(we.value, (o, w) => (n(), s("div", {
                    key: w,
                    class: "di-csv-column-row"
                  }, [
                    h(e("input", {
                      "onUpdate:modelValue": (m) => o.label = m,
                      placeholder: "予習",
                      class: "di-csv-input di-chart-col-label"
                    }, null, 8, _v), [
                      [x, o.label]
                    ]),
                    h(e("input", {
                      "onUpdate:modelValue": (m) => o.field = m,
                      placeholder: "preview_count",
                      class: "di-csv-input di-chart-col-field"
                    }, null, 8, Tv), [
                      [x, o.field]
                    ]),
                    h(e("input", {
                      "onUpdate:modelValue": (m) => o.color = m,
                      type: "color",
                      class: "di-master-color-input"
                    }, null, 8, Iv), [
                      [x, o.color]
                    ]),
                    e("div", Mv, [
                      e("button", {
                        onClick: (m) => cl(w, -1),
                        disabled: w === 0,
                        class: "di-csv-move-btn",
                        title: "上へ"
                      }, [
                        T(u(gl), { style: { width: "12px", height: "12px" } })
                      ], 8, Sv),
                      e("button", {
                        onClick: (m) => cl(w, 1),
                        disabled: w === we.value.length - 1,
                        class: "di-csv-move-btn",
                        title: "下へ"
                      }, [
                        T(u(ll), { style: { width: "12px", height: "12px" } })
                      ], 8, Uv),
                      e("button", {
                        onClick: (m) => Jl(w),
                        class: "di-csv-remove-btn",
                        title: "削除"
                      }, "×", 8, Dv)
                    ])
                  ]))), 128))
                ])) : v("", !0),
                e("button", {
                  onClick: Zl,
                  class: "di-btn-add-field"
                }, " + 系列を追加 ")
              ]),
              e("div", Vv, [
                t[211] || (t[211] = e("label", { class: "di-form-label" }, "データ取得元", -1)),
                h(e("input", {
                  "onUpdate:modelValue": t[90] || (t[90] = (o) => Be.value = o),
                  type: "text",
                  placeholder: "例: GET /api/stats/monthly",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [x, Be.value]
                ])
              ]),
              e("div", Ev, [
                t[212] || (t[212] = e("label", { class: "di-form-label" }, "集計方法", -1)),
                h(e("input", {
                  "onUpdate:modelValue": t[91] || (t[91] = (o) => Ue.value = o),
                  type: "text",
                  placeholder: "例: 月別集計, GROUP BY month",
                  class: "di-input"
                }, null, 512), [
                  [x, Ue.value]
                ])
              ]),
              e("div", Pv, [
                t[213] || (t[213] = e("label", { class: "di-form-label" }, "フィルタ条件", -1)),
                h(e("input", {
                  "onUpdate:modelValue": t[92] || (t[92] = (o) => He.value = o),
                  type: "text",
                  placeholder: "例: 直近12ヶ月, status=active",
                  class: "di-input"
                }, null, 512), [
                  [x, He.value]
                ])
              ]),
              e("div", Bv, [
                t[214] || (t[214] = e("label", { class: "di-form-label" }, "説明", -1)),
                h(e("textarea", {
                  "onUpdate:modelValue": t[93] || (t[93] = (o) => ot.value = o),
                  rows: "3",
                  placeholder: "このチャートの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [x, ot.value]
                ])
              ])
            ], 64)) : v("", !0)
          ]),
          e("div", Av, [
            e("button", {
              onClick: _t,
              class: "di-btn-delete"
            }, [
              T(u(Ht), { style: { width: "14px", height: "14px" } }),
              t[215] || (t[215] = O(" 削除 ", -1))
            ]),
            e("div", Lv, [
              e("button", {
                onClick: C,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: le,
                class: "di-btn-save"
              }, [
                T(u(Sl), { style: { width: "14px", height: "14px" } }),
                t[216] || (t[216] = O(" 保存 ", -1))
              ])
            ])
          ])
        ], 2)
      ])) : v("", !0)
    ]));
  }
}), Fv = /* @__PURE__ */ Qt(Ov, [["__scopeId", "data-v-da301784"]]), jv = {
  key: 0,
  "data-dev-inspector": "",
  class: "di-loading-overlay"
}, qv = { class: "di-highlight-label" }, Hv = ["onClick"], Rv = {
  key: 0,
  class: "di-note-label-row"
}, zv = ["onClick"], Kv = {
  "data-dev-inspector": "",
  class: "di-scan-banner"
}, Gv = ["onClick"], Yv = { class: "di-analysis-type" }, Xv = {
  key: 0,
  class: "di-analysis-tags"
}, Wv = {
  key: 1,
  class: "di-analysis-db"
}, Zv = {
  key: 2,
  class: "di-analysis-api-source"
}, Jv = {
  key: 3,
  class: "di-analysis-conditional"
}, Qv = ["onClick"], Nv = {
  key: 0,
  class: "di-analysis-text"
}, ep = {
  "data-dev-inspector": "",
  class: "di-analysis-banner"
}, tp = ["onClick"], lp = {
  key: 0,
  class: "di-unannotated-label-text"
}, op = /* @__PURE__ */ zt({
  __name: "DevPickOverlay",
  setup(Z) {
    const a = Kt(), S = y(null), P = y(null), ee = y(0), oe = y(0), ue = y(0), Ce = {
      db_direct: "#3b82f6",
      db_formatted: "#8b5cf6",
      calculated: "#f59e0b",
      static: "#10b981",
      other: "#94a3b8"
    }, $e = {
      action: "#a78bfa",
      form: "#ec4899"
    };
    function G(H) {
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
    function te(H) {
      var g, F;
      const M = a.getElementConfig(H);
      if (M != null && M.elementType && $e[M.elementType])
        return $e[M.elementType];
      if ((g = M == null ? void 0 : M.note) != null && g.displayType)
        return Ce[M.note.displayType] || "#60a5fa";
      if (!(M != null && M.sourceBinding)) {
        const R = ((F = M == null ? void 0 : M.note) == null ? void 0 : F.type) || "info";
        return {
          info: "#60a5fa",
          warning: "#fbbf24",
          todo: "#10b981",
          question: "#a78bfa"
        }[R] || "#60a5fa";
      }
      return M.sourceBinding.isStatic ? "#10b981" : M.sourceBinding.type === "v-model" ? "#8b5cf6" : M.sourceBinding.type === "api" ? "#f59e0b" : "#60a5fa";
    }
    function be(H) {
      var z, N, B, $, U;
      const M = a.noteHighlightFilter;
      if (M === "all") return !0;
      const g = a.getElementConfig(H);
      if (!g) return !1;
      const F = (z = g.note) == null ? void 0 : z.displayType, R = !!((N = g.note) != null && N.condition || (B = g.note) != null && B.conditionColumn), se = !!(($ = g.note) != null && $.storedCalc);
      switch (M) {
        case "db":
          return F === "db_direct" || F === "db_formatted";
        case "calculated":
          return F === "calculated";
        case "storedCalc":
          return se;
        case "static":
          return F === "static";
        case "conditional":
          return R;
        case "action":
          return g.elementType === "action";
        case "form":
          return g.elementType === "form";
        case "other":
          return F === "other" || !F && !g.elementType && !!((U = g.note) != null && U.text);
        default:
          return !0;
      }
    }
    function Ie() {
      var R, se;
      const H = document.querySelector("dialog[open]");
      if (H) return H;
      const M = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
      for (const z of M) {
        const N = z.getBoundingClientRect();
        if (N.width > 0 && N.height > 0) return z;
      }
      const g = '.v-overlay--active .v-overlay__content, .el-dialog__wrapper:not([style*="display: none"]) .el-dialog, .modal.show .modal-dialog, .modal-overlay[style*="display: block"], .v-dialog--active';
      try {
        const z = document.querySelector(g);
        if (z) {
          const N = z.getBoundingClientRect();
          if (N.width > 0 && N.height > 0) return z;
        }
      } catch {
      }
      const F = document.querySelectorAll(".fixed.inset-0, .fixed.inset-x-0.inset-y-0, [data-modal], [data-overlay]");
      for (const z of F) {
        if (((R = z.dataset) == null ? void 0 : R.devInspector) !== void 0) continue;
        const N = getComputedStyle(z), B = parseInt(N.zIndex, 10);
        if (isNaN(B) || B < 40) continue;
        const $ = z.getBoundingClientRect();
        if ($.width >= window.innerWidth * 0.9 && $.height >= window.innerHeight * 0.9)
          return z;
      }
      for (const z of document.body.children) {
        if (((se = z.dataset) == null ? void 0 : se.devInspector) !== void 0) continue;
        const N = getComputedStyle(z);
        if (N.position !== "fixed") continue;
        const B = parseInt(N.zIndex, 10);
        if (isNaN(B) || B < 40) continue;
        const $ = z.getBoundingClientRect();
        if ($.width >= window.innerWidth * 0.9 && $.height >= window.innerHeight * 0.9)
          return z;
      }
      return null;
    }
    function he(H, M) {
      return M.contains(H);
    }
    const me = j(() => {
      var se, z, N, B, $, U, _e, J, We, ge, Ze, lt, Ke, qe, Q, Pe, dt, Je, ut, rt, ct, we, Be, Ue, He, ot, K, Qe, ft, nt, Mt, wt, St, Ut, Bt, At, Lt, Ot, Ne, Ge, et, Ct, Y, De, re, Ae, vt;
      const H = ee.value, M = oe.value;
      ue.value;
      const g = [];
      if (!a.isEnabled) return g;
      const F = Ie(), R = a.getConfiguredSelectors();
      for (const pt of R)
        try {
          const yt = document.querySelector(pt);
          if (yt) {
            if (F && !he(yt, F)) continue;
            const ke = yt.getBoundingClientRect(), d = a.getElementConfig(pt), Le = ((se = d == null ? void 0 : d.sourceBinding) == null ? void 0 : se.isStatic) || !1, fe = ((z = d == null ? void 0 : d.sourceBinding) == null ? void 0 : z.type) || "";
            let X = "", ce = "";
            const Re = (N = d == null ? void 0 : d.note) == null ? void 0 : N.displayType, Ve = [];
            if ((B = d == null ? void 0 : d.note) != null && B.sampleValue ? Ve.push(`例: ${d.note.sampleValue}${d.note.unit ? d.note.unit : ""}`) : ($ = d == null ? void 0 : d.note) != null && $.unit && Ve.push(`単位: ${d.note.unit}`), (U = d == null ? void 0 : d.note) != null && U.decimalHandling) {
              const V = { round: "四捨五入", floor: "切り捨て", ceil: "切り上げ", decimal_1: "小数第1位", decimal_2: "小数第2位", integer: "整数" };
              Ve.push(V[d.note.decimalHandling] || d.note.decimalHandling);
            }
            (_e = d == null ? void 0 : d.note) != null && _e.nullDisplay && Ve.push(`NULL時: ${d.note.nullDisplay}`), (J = d == null ? void 0 : d.note) != null && J.displayFormat && Ve.push(d.note.displayFormat);
            const Te = Ve.length > 0 ? `
${Ve.join(" / ")}` : "", tt = !!((We = d == null ? void 0 : d.note) != null && We.condition || (ge = d == null ? void 0 : d.note) != null && ge.conditionColumn);
            let ve = "";
            if (tt) {
              const V = { hidden: "非表示", disabled: "無効化", different_value: "別の値", empty: "空欄" }, pe = [];
              (Ze = d == null ? void 0 : d.note) != null && Ze.condition && pe.push(d.note.condition), (lt = d == null ? void 0 : d.note) != null && lt.conditionColumn && pe.push(`判定: ${d.note.conditionColumn}`), (Ke = d == null ? void 0 : d.note) != null && Ke.hiddenBehavior && pe.push(`不一致時: ${V[d.note.hiddenBehavior] || d.note.hiddenBehavior}`), (qe = d == null ? void 0 : d.note) != null && qe.hiddenNote && pe.push(`→ ${d.note.hiddenNote}`), ve = `
条件: ${pe.join(" / ")}`;
            }
            const ze = tt ? " ⚡" : "";
            if ((d == null ? void 0 : d.elementType) === "action" && (d != null && d.actionInfo)) {
              const V = d.actionInfo;
              V.type === "navigate" ? X = `遷移: ${V.target || "?"}` : V.type === "api" ? X = `API: ${V.method || "GET"} ${V.target || "?"}` : V.type === "modal" ? X = `モーダル: ${V.target || "?"}` : V.type === "emit" ? X = `イベント: ${V.target || "?"}` : V.type === "function" ? X = `関数: ${V.target || "?"}` : X = "アクション", ce = (V.description || X) + ((Q = d == null ? void 0 : d.note) != null && Q.text ? `
${d.note.text}` : "");
            } else if ((d == null ? void 0 : d.elementType) === "form" && (d != null && d.formInfo)) {
              const V = d.formInfo, pe = (Pe = d == null ? void 0 : d.fieldInfoList) != null && Pe.length ? d.fieldInfoList : d != null && d.fieldInfo ? [d.fieldInfo] : [], Oe = pe.length > 0 ? pe.map((bt) => `${bt.table}.${bt.column}`).join(", ") : "", Ye = pe.length > 0 ? `${pe[0].table}.${pe[0].column}` : "", xe = Ye ? a.getMasterDefinition(Ye) : null;
              V.inputType === "select" ? X = `選択: ${Oe || V.description || "?"}${xe ? ` (${xe.entries.length}件)` : ""}` : V.inputType === "textarea" ? X = `テキスト: ${Oe || V.description || "?"}` : V.inputType === "checkbox" ? X = `チェック: ${Oe || V.description || "?"}` : V.inputType === "radio" ? X = `ラジオ: ${Oe || V.description || "?"}` : X = `入力: ${Oe || V.description || V.inputType || "?"}`, V.required && (X += " (必須)");
              const ie = [];
              V.description && ie.push(V.description), (dt = V.validation) != null && dt.length && ie.push(`検証: ${V.validation.join(", ")}`), V.placeholder && ie.push(`placeholder: ${V.placeholder}`), V.defaultValue && ie.push(`初期値: ${V.defaultValue}`), ce = ie.join(`
`) + ((Je = d == null ? void 0 : d.note) != null && Je.text ? `
${d.note.text}` : "");
            } else if ((d == null ? void 0 : d.elementType) === "action")
              X = "アクション", ce = ((ut = d == null ? void 0 : d.note) == null ? void 0 : ut.text) || "";
            else if ((d == null ? void 0 : d.elementType) === "form")
              X = "フォーム", ce = ((rt = d == null ? void 0 : d.note) == null ? void 0 : rt.text) || "";
            else if (Re === "db_direct") {
              const V = (ct = d == null ? void 0 : d.fieldInfoList) != null && ct.length ? d.fieldInfoList : d != null && d.fieldInfo ? [d.fieldInfo] : [];
              if (V.length > 0) {
                const pe = V.map((ie) => `${ie.table}.${ie.column}`).join(", "), Oe = `${V[0].table}.${V[0].column}`, Ye = a.getMasterDefinition(Oe), xe = Ye ? ` (${Ye.entries.length}値)` : "";
                X = `DB: ${pe}${xe}${ze}`, ce = V.map((ie) => `${ie.table}.${ie.column}${ie.type ? ` (${ie.type})` : ""}`).join(`
`) + Te + ve + ((we = d == null ? void 0 : d.note) != null && we.text ? `
${d.note.text}` : "");
              }
            } else if (Re === "db_formatted") {
              const V = (Be = d == null ? void 0 : d.fieldInfoList) != null && Be.length ? d.fieldInfoList : d != null && d.fieldInfo ? [d.fieldInfo] : [];
              if (V.length > 0) {
                const pe = V.map((ie) => `${ie.table}.${ie.column}`).join(", "), Oe = `${V[0].table}.${V[0].column}`, Ye = a.getMasterDefinition(Oe), xe = Ye ? ` (${Ye.entries.length}値)` : "";
                X = `DB: ${pe} (整形)${xe}${ze}`, ce = V.map((ie) => `${ie.table}.${ie.column}`).join(`
`) + ((Ue = d == null ? void 0 : d.note) != null && Ue.formatDescription ? `
整形: ${d.note.formatDescription}` : "") + Te + ve + ((He = d == null ? void 0 : d.note) != null && He.text ? `
${d.note.text}` : "");
              }
            } else Re === "calculated" ? (X = "計算値" + ((ot = d == null ? void 0 : d.note) != null && ot.unit ? ` (${d.note.unit})` : "") + ze, ce = (((K = d == null ? void 0 : d.note) == null ? void 0 : K.calcDescription) || "計算値") + ((ft = (Qe = d == null ? void 0 : d.note) == null ? void 0 : Qe.calcSources) != null && ft.length ? `
参照: ${d.note.calcSources.join(", ")}` : "") + Te + ve + ((nt = d == null ? void 0 : d.note) != null && nt.text ? `
${d.note.text}` : "")) : Re === "static" ? (X = "固定" + ze, ce = (((Mt = d == null ? void 0 : d.note) == null ? void 0 : Mt.text) || "固定文言") + ve) : Re === "other" ? (X = "メモ", ce = ((wt = d == null ? void 0 : d.note) == null ? void 0 : wt.text) || "") : (St = d == null ? void 0 : d.fieldInfoList) != null && St.length || (Ut = d == null ? void 0 : d.fieldInfo) != null && Ut.table && ((Bt = d == null ? void 0 : d.fieldInfo) != null && Bt.column) ? (X = `DB: ${((At = d == null ? void 0 : d.fieldInfoList) != null && At.length ? d.fieldInfoList : d != null && d.fieldInfo ? [d.fieldInfo] : []).map((Oe) => `${Oe.table}.${Oe.column}`).join(", ")}`, ce = ((Lt = d == null ? void 0 : d.note) == null ? void 0 : Lt.text) || "") : Le ? (X = "固定", ce = ((Ot = d == null ? void 0 : d.note) == null ? void 0 : Ot.text) || "固定文言") : fe === "v-model" ? (X = "フォーム", ce = ((Ne = d == null ? void 0 : d.note) == null ? void 0 : Ne.text) || "") : fe === "api" ? (X = "データ", ce = ((Ge = d == null ? void 0 : d.note) == null ? void 0 : Ge.text) || "") : (et = d == null ? void 0 : d.note) != null && et.type ? (X = {
              info: "情報",
              warning: "注意",
              todo: "TODO",
              question: "質問"
            }[d.note.type] || "メモ", ce = ((Ct = d == null ? void 0 : d.note) == null ? void 0 : Ct.text) || "") : (X = "メモ", ce = ((Y = d == null ? void 0 : d.note) == null ? void 0 : Y.text) || "");
            const ht = ce || ((De = d == null ? void 0 : d.note) == null ? void 0 : De.text) || "", $t = ((re = d == null ? void 0 : d.note) == null ? void 0 : re.type) || "info", st = !!((Ae = d == null ? void 0 : d.note) != null && Ae.text || (vt = d == null ? void 0 : d.note) != null && vt.displayType);
            g.push({
              selector: pt,
              top: `${ke.top + H}px`,
              left: `${ke.left + M}px`,
              width: `${ke.width}px`,
              height: `${ke.height}px`,
              color: te(pt),
              isStatic: Le,
              label: X,
              noteText: ht,
              noteType: $t,
              hasNote: st
            });
          }
        } catch {
        }
      return g;
    }), E = j(() => {
      var R;
      const H = ee.value, M = oe.value;
      ue.value;
      const g = [];
      if (!a.isEnabled || a.scanResults.length === 0) return g;
      const F = Ie();
      for (const se of a.scanResults)
        try {
          const z = document.querySelector(se.selector);
          if (z) {
            if (F && !he(z, F)) continue;
            const N = z.getBoundingClientRect();
            g.push({
              selector: se.selector,
              top: `${N.top + H}px`,
              left: `${N.left + M}px`,
              width: `${N.width}px`,
              height: `${N.height}px`,
              isStatic: ((R = se.detected.sourceBinding) == null ? void 0 : R.isStatic) || !1
            });
          }
        } catch {
        }
      return g;
    }), Ee = j(() => {
      var se, z;
      const H = ee.value, M = oe.value;
      ue.value;
      const g = [], F = a.analysisFilter;
      if (F === "none" || !a.isEnabled || a.analysisResults.length === 0) return g;
      const R = Ie();
      for (const N of a.analysisResults) {
        if (!N.matched) continue;
        const B = N.element;
        try {
          const $ = document.querySelector(N.selector);
          if (!$ || R && !he($, R)) continue;
          const U = $.getBoundingClientRect();
          if (U.width > window.innerWidth * 0.8 || U.height > window.innerHeight * 0.5)
            continue;
          const _e = $.querySelector("[data-di-binding]") || ($.hasAttribute("data-di-binding") ? $ : null);
          let J = "", We = B.binding || "";
          const ge = [...B.tags || []];
          if (_e) {
            const Ue = _e.getAttribute("data-di-db"), He = _e.getAttribute("data-di-binding");
            Ue && (J = Ue, ge.includes("db") || ge.push("db")), He && (We = He);
          }
          !J && B.db && (J = `${B.db.table}.${B.db.column}`, ge.includes("db") || ge.push("db"));
          let Ze = "";
          B.api && (Ze = `${B.api.method} ${B.api.endpoint}`, ge.includes("api") || ge.push("api"));
          let lt = "";
          if (We) {
            const Ue = a.getApiSourceForBinding(We);
            Ue && Ue.endpoint ? lt = `${Ue.method || "GET"} ${Ue.endpoint}` : Ue && Ue.composable && (lt = Ue.composable);
          }
          const Ke = (se = B.conditional) == null ? void 0 : se.expression, qe = (z = B.modal) == null ? void 0 : z.target, Q = !!J || ge.includes("db"), Pe = !!Ze || ge.includes("api"), dt = ge.includes("form"), Je = ge.includes("button"), ut = ge.includes("link"), rt = ge.includes("modal"), ct = ge.includes("conditional"), we = ge.includes("computed");
          if (F === "db-api") {
            if (!Q && !Pe) continue;
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
            if (!we) continue;
          } else if (F === "other" && (Q || Pe || dt || Je || ut || rt || ct || we))
            continue;
          let Be = "other";
          Q ? Be = "db" : Pe ? Be = "api" : dt ? Be = "form" : Je ? Be = "button" : ut ? Be = "link" : rt ? Be = "modal" : ct ? Be = "conditional" : we && (Be = "computed"), g.push({
            selector: N.selector,
            top: `${U.top + H}px`,
            left: `${U.left + M}px`,
            width: `${U.width}px`,
            height: `${U.height}px`,
            tags: ge,
            primaryTag: Be,
            text: B.text || We || "",
            dbInfo: J,
            apiInfo: Ze,
            apiSource: lt,
            conditionalExpr: Ke,
            modalTarget: qe
          });
        } catch {
        }
      }
      return g;
    }), at = j(() => {
      const H = ee.value, M = oe.value;
      ue.value;
      const g = [];
      if (!a.isEnabled || !a.showUnannotatedDetection || a.unannotatedElements.length === 0) return g;
      const F = Ie();
      for (const R of a.unannotatedElements)
        try {
          const se = document.querySelector(R.selector);
          if (!se || F && !he(se, F)) continue;
          const z = se.getBoundingClientRect();
          g.push({
            selector: R.selector,
            top: `${z.top + H}px`,
            left: `${z.left + M}px`,
            width: `${z.width}px`,
            height: `${z.height}px`,
            category: R.category,
            text: R.text
          });
        } catch {
        }
      return g;
    });
    function Se(H) {
      if (!a.isPickMode) return;
      if (H.target.closest("[data-dev-inspector]")) {
        S.value = null, P.value = null, a.setHoveredSelector(null);
        return;
      }
      const g = document.elementFromPoint(H.clientX, H.clientY);
      if (!g || g === document.body || g === document.documentElement) {
        S.value = null, P.value = null, a.setHoveredSelector(null);
        return;
      }
      if (g.closest("[data-dev-inspector]"))
        return;
      P.value = g;
      const F = g.getBoundingClientRect();
      S.value = {
        top: `${F.top + window.scrollY}px`,
        left: `${F.left + window.scrollX}px`,
        width: `${F.width}px`,
        height: `${F.height}px`
      };
      const R = a.generateSelector(g);
      a.setHoveredSelector(R);
    }
    function Xe(H) {
      if (!(!a.isPickMode || H.target.closest("[data-dev-inspector]")) && (H.preventDefault(), H.stopPropagation(), P.value)) {
        const g = a.generateSelector(P.value);
        if (a.remapTargetId) {
          a.remapAnnotation(a.remapTargetId, g), a.remapTargetId = null, a.togglePickMode(), a.openPanel();
          return;
        }
        a.startEditing(g), a.togglePickMode();
      }
    }
    function ye(H) {
      H.key === "Escape" && a.isPickMode && (a.remapTargetId = null, a.togglePickMode());
    }
    function ne() {
      ee.value = window.scrollY, oe.value = window.scrollX, ue.value++;
    }
    let je = null;
    return Il(() => {
      window.addEventListener("mousemove", Se, !0), window.addEventListener("click", Xe, !0), window.addEventListener("keydown", ye), window.addEventListener("scroll", ne), window.addEventListener("resize", ne);
      let H = null;
      je = new MutationObserver(() => {
        H && clearTimeout(H), H = setTimeout(() => {
          ue.value++;
        }, 100);
      }), je.observe(document.body, { childList: !0, subtree: !0 });
    }), ro(() => {
      window.removeEventListener("mousemove", Se, !0), window.removeEventListener("click", Xe, !0), window.removeEventListener("keydown", ye), window.removeEventListener("scroll", ne), window.removeEventListener("resize", ne), je == null || je.disconnect();
    }), Rt(() => a.isPickMode, (H) => {
      H || (S.value = null, P.value = null);
    }), (H, M) => (n(), mt(xt, { to: "body" }, [
      u(a).isInitializing ? (n(), s("div", jv, [...M[1] || (M[1] = [
        e("div", { class: "di-loading-content" }, [
          e("div", { class: "di-loading-spinner" }),
          e("span", { class: "di-loading-text" }, "Developer Mode 起動中...")
        ], -1)
      ])])) : v("", !0),
      u(a).isPickMode && S.value ? (n(), s("div", {
        key: 1,
        "data-dev-inspector": "",
        class: "di-highlight",
        style: it({
          top: S.value.top,
          left: S.value.left,
          width: S.value.width,
          height: S.value.height
        })
      }, [
        e("div", qv, c(u(a).hoveredSelector), 1)
      ], 4)) : v("", !0),
      u(a).isPickMode ? (n(), s("div", {
        key: 2,
        "data-dev-inspector": "",
        class: "di-pick-banner",
        style: it(u(a).remapTargetId ? { background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)" } : {})
      }, [
        e("span", null, c(u(a).remapTargetId ? "新しい要素をクリックして再設定" : "要素をクリックしてメモを追加"), 1),
        M[2] || (M[2] = e("kbd", null, "ESC", -1)),
        M[3] || (M[3] = e("span", { class: "di-pick-hint" }, "でキャンセル", -1))
      ], 4)) : v("", !0),
      u(a).isEnabled && !u(a).isPickMode && !u(a).editingElementId ? (n(!0), s(I, { key: 3 }, D(me.value, (g) => h((n(), s("div", {
        key: g.selector,
        "data-dev-inspector": "",
        class: A([
          g.hasNote ? "di-note-highlight" : "di-annotation-box",
          { "di-element-hovered-pulse": u(a).hoveredSelector === g.selector }
        ]),
        style: it({
          top: g.top,
          left: g.left,
          width: g.width,
          height: g.height,
          borderColor: (g.hasNote, g.color),
          backgroundColor: u(a).hoveredSelector === g.selector ? g.color + "30" : g.color + (g.hasNote ? "18" : "15")
        }),
        onClick: (F) => u(a).startEditing(g.selector)
      }, [
        g.hasNote ? (n(), s("div", Rv, [
          e("span", {
            class: "di-note-indicator",
            style: it({ backgroundColor: g.color })
          }, null, 4),
          e("div", {
            class: "di-annotation-label",
            style: it({ backgroundColor: g.color })
          }, c(g.label), 5)
        ])) : (n(), s("div", {
          key: 1,
          class: "di-annotation-label",
          style: it({ backgroundColor: g.color })
        }, c(g.label), 5))
      ], 14, Hv)), [
        [Ft, !g.hasNote || u(a).showNoteHighlights && be(g.selector)]
      ])), 128)) : v("", !0),
      u(a).isEnabled && !u(a).editingElementId && E.value.length > 0 && u(a).analysisResults.length === 0 ? (n(), s(I, { key: 4 }, [
        (n(!0), s(I, null, D(E.value, (g) => (n(), s("div", {
          key: "scan-" + g.selector,
          "data-dev-inspector": "",
          class: A(["di-scan-highlight", { "di-scan-static": g.isStatic }]),
          style: it({
            top: g.top,
            left: g.left,
            width: g.width,
            height: g.height
          }),
          onClick: (F) => u(a).startEditing(g.selector)
        }, [
          e("div", {
            class: A(["di-scan-label", { "di-scan-label-static": g.isStatic }])
          }, c(g.isStatic ? "固定文言" : "動的データ"), 3)
        ], 14, zv))), 128)),
        e("div", Kv, [
          e("span", null, c(E.value.length) + "件の要素を検出", 1),
          e("button", {
            onClick: M[0] || (M[0] = (g) => u(a).clearScanResults()),
            class: "di-scan-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : v("", !0),
      u(a).isEnabled && !u(a).editingElementId && Ee.value.length > 0 ? (n(), s(I, { key: 5 }, [
        (n(!0), s(I, null, D(Ee.value, (g) => (n(), s("div", {
          key: "analysis-" + g.selector,
          "data-dev-inspector": "",
          class: A(["di-analysis-highlight", "di-analysis-" + g.primaryTag]),
          style: it({
            top: g.top,
            left: g.left,
            width: g.width,
            height: g.height
          }),
          onClick: (F) => u(a).startEditing(g.selector)
        }, [
          e("div", {
            class: A(["di-analysis-label", "di-analysis-label-" + g.primaryTag])
          }, [
            e("span", Yv, c(G(g.primaryTag)), 1),
            g.tags.length > 1 ? (n(), s("span", Xv, "+" + c(g.tags.length - 1), 1)) : v("", !0),
            g.dbInfo ? (n(), s("span", Wv, c(g.dbInfo), 1)) : v("", !0),
            g.apiSource ? (n(), s("span", Zv, "← " + c(g.apiSource), 1)) : v("", !0),
            g.conditionalExpr ? (n(), s("span", Jv, c(g.conditionalExpr), 1)) : v("", !0),
            e("button", {
              class: "di-analysis-delete",
              onClick: de((F) => u(a).removeAnalysisResult(g.selector), ["stop"]),
              title: "この要素を非表示"
            }, "×", 8, Qv)
          ], 2),
          g.text && g.text.length < 30 ? (n(), s("div", Nv, c(g.text), 1)) : v("", !0)
        ], 14, Gv))), 128)),
        e("div", ep, [
          e("span", null, "📊 分析データ: " + c(Ee.value.length) + "件の要素", 1)
        ])
      ], 64)) : v("", !0),
      u(a).isEnabled && !u(a).isPickMode && !u(a).editingElementId && at.value.length > 0 ? (n(!0), s(I, { key: 6 }, D(at.value, (g) => (n(), s("div", {
        key: "unannotated-" + g.selector,
        "data-dev-inspector": "",
        class: A(["di-unannotated-highlight", {
          "di-unannotated-hovered": u(a).hoveredUnannotatedSelector === g.selector,
          ["di-unannotated-hovered-" + g.category]: u(a).hoveredUnannotatedSelector === g.selector
        }]),
        style: it({
          top: g.top,
          left: g.left,
          width: g.width,
          height: g.height
        }),
        onClick: (F) => u(a).quickAnnotate(g.selector, g.category === "form" ? "form" : g.category === "action" ? "action" : "datasource")
      }, [
        e("div", {
          class: A(["di-unannotated-label", { ["di-unannotated-label-" + g.category]: u(a).hoveredUnannotatedSelector === g.selector }])
        }, [
          e("span", null, c(g.category === "binding" ? "DB" : g.category === "form" ? "Form" : "Act"), 1),
          g.text ? (n(), s("span", lp, c(g.text), 1)) : v("", !0)
        ], 2)
      ], 14, tp))), 128)) : v("", !0)
    ]));
  }
}), np = /* @__PURE__ */ Qt(op, [["__scopeId", "data-v-ea64398c"]]), sp = { class: "di-editor-modal" }, ip = { class: "di-editor-header" }, ap = { class: "di-header-actions" }, dp = { class: "di-path-badge" }, up = { class: "di-editor-content" }, rp = { class: "di-form-group" }, cp = { class: "di-form-group" }, vp = { class: "di-form-section" }, pp = { class: "di-form-section-header" }, mp = { class: "di-api-header-actions" }, fp = { class: "di-dropdown-wrapper" }, bp = {
  key: 1,
  class: "di-suggestion-dropdown"
}, hp = {
  key: 0,
  class: "di-suggestion-actions"
}, yp = ["onMousedown", "disabled"], gp = { class: "di-suggestion-endpoint" }, kp = {
  key: 0,
  class: "di-suggestion-timing"
}, xp = {
  key: 1,
  class: "di-suggestion-empty"
}, wp = {
  key: 0,
  class: "di-suggestion-banner"
}, Cp = {
  key: 1,
  class: "di-suggestion-banner di-suggestion-banner-empty"
}, $p = {
  key: 2,
  class: "di-empty-hint"
}, _p = { class: "di-api-entry-row" }, Tp = ["onUpdate:modelValue"], Ip = ["value"], Mp = ["onUpdate:modelValue"], Sp = ["onClick"], Up = { class: "di-api-entry-row2" }, Dp = ["onUpdate:modelValue"], Vp = ["onUpdate:modelValue"], Ep = ["value"], Pp = { class: "di-form-section" }, Bp = { class: "di-auth-row" }, Ap = {
  key: 0,
  class: "di-auth-details"
}, Lp = { class: "di-form-group" }, Op = { class: "di-form-group" }, Fp = { class: "di-form-group" }, jp = { class: "di-form-group" }, qp = { class: "di-editor-footer" }, Hp = { class: "di-editor-actions" }, Rp = ["disabled"], zp = /* @__PURE__ */ zt({
  __name: "DevScreenEditor",
  setup(Z) {
    const a = Kt(), S = y(""), P = y(""), ee = y([]), oe = y(!1), ue = y(""), Ce = y(""), $e = y(""), G = y(""), te = y(!1), be = y([]), Ie = y(!1), he = j(() => typeof window < "u" ? window.location.pathname : "/");
    Rt(() => a.editingScreen, (B) => {
      B && me();
    });
    function me() {
      var $, U, _e, J;
      const B = a.getScreenConfig();
      B ? (S.value = B.name, P.value = B.description || "", ee.value = B.apis.map((We) => ({ ...We })), oe.value = (($ = B.auth) == null ? void 0 : $.required) || !1, ue.value = ((_e = (U = B.auth) == null ? void 0 : U.roles) == null ? void 0 : _e.join(", ")) || "", Ce.value = ((J = B.auth) == null ? void 0 : J.description) || "", $e.value = B.figmaUrl || "", G.value = B.notes || "") : E();
    }
    function E() {
      S.value = "", P.value = "", ee.value = [], oe.value = !1, ue.value = "", Ce.value = "", $e.value = "", G.value = "";
    }
    function Ee() {
      a.editingScreen = !1, E();
    }
    function at() {
      ee.value.push({
        method: "GET",
        endpoint: "",
        description: "",
        loadTiming: "onMount"
      });
    }
    function Se(B) {
      ee.value.splice(B, 1);
    }
    function Xe() {
      if (!S.value.trim()) return;
      const B = {
        path: he.value,
        name: S.value.trim(),
        description: P.value.trim() || void 0,
        apis: ee.value.filter(($) => $.endpoint.trim()),
        auth: oe.value || ue.value.trim() ? {
          required: oe.value,
          roles: ue.value.trim() ? ue.value.split(",").map(($) => $.trim()).filter(Boolean) : void 0,
          description: Ce.value.trim() || void 0
        } : void 0,
        figmaUrl: $e.value.trim() || void 0,
        notes: G.value.trim() || void 0,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      a.setScreenConfig(B), Ee();
    }
    function ye() {
      a.deleteScreenConfig(he.value), Ee();
    }
    const ne = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, je = {
      onMount: "読込時",
      action: "アクション",
      conditional: "条件付き"
    };
    function H() {
      be.value = a.suggestScreenApis(), te.value = !0;
    }
    function M(B) {
      return ee.value.some(
        ($) => $.method === B.method && $.endpoint === B.endpoint
      );
    }
    const g = j(() => be.value.filter((B) => !M(B)));
    function F(B) {
      M(B) || ee.value.push({ ...B });
    }
    function R() {
      for (const B of g.value)
        ee.value.push({ ...B });
    }
    function se() {
      setTimeout(() => {
        Ie.value = !1;
      }, 150);
    }
    const z = ["GET", "POST", "PUT", "DELETE", "PATCH"], N = [
      { value: "onMount", label: "画面読込時" },
      { value: "action", label: "アクション時" },
      { value: "conditional", label: "条件付き" }
    ];
    return (B, $) => (n(), mt(xt, { to: "body" }, [
      u(a).editingScreen ? (n(), s("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: de(Ee, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", sp, [
          e("div", ip, [
            $[9] || ($[9] = e("h3", null, "画面情報を編集", -1)),
            e("div", ap, [
              e("span", dp, c(he.value), 1),
              e("button", {
                onClick: Ee,
                class: "di-editor-close"
              }, [
                T(u(kt), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          e("div", up, [
            e("div", rp, [
              $[10] || ($[10] = e("label", { class: "di-form-label" }, "画面名 *", -1)),
              h(e("input", {
                "onUpdate:modelValue": $[0] || ($[0] = (U) => S.value = U),
                type: "text",
                placeholder: "ユーザー詳細",
                class: "di-input"
              }, null, 512), [
                [x, S.value]
              ])
            ]),
            e("div", cp, [
              $[11] || ($[11] = e("label", { class: "di-form-label" }, "画面の説明", -1)),
              h(e("textarea", {
                "onUpdate:modelValue": $[1] || ($[1] = (U) => P.value = U),
                rows: "2",
                placeholder: "この画面の概要...",
                class: "di-textarea"
              }, null, 512), [
                [x, P.value]
              ])
            ]),
            e("div", vp, [
              e("div", pp, [
                $[15] || ($[15] = e("label", { class: "di-form-label" }, "API一覧", -1)),
                e("div", mp, [
                  e("button", {
                    onClick: H,
                    class: "di-btn-suggest",
                    title: "要素情報からAPI推定"
                  }, [
                    T(u(Jt), { style: { width: "13px", height: "13px" } }),
                    $[12] || ($[12] = O(" 自動推定 ", -1))
                  ]),
                  e("div", fp, [
                    be.value.length > 0 ? (n(), s("button", {
                      key: 0,
                      onClick: $[2] || ($[2] = (U) => Ie.value = !Ie.value),
                      onBlur: $[3] || ($[3] = (U) => se()),
                      class: "di-btn-dropdown",
                      title: "推定結果から選択"
                    }, [
                      T(u(ll), { style: { width: "13px", height: "13px" } }),
                      $[13] || ($[13] = O(" 候補から選択 ", -1))
                    ], 32)) : v("", !0),
                    Ie.value && be.value.length > 0 ? (n(), s("div", bp, [
                      g.value.length > 0 ? (n(), s("div", hp, [
                        e("button", {
                          onMousedown: de(R, ["prevent"]),
                          class: "di-suggestion-add-all"
                        }, " すべて追加 (" + c(g.value.length) + ") ", 33)
                      ])) : v("", !0),
                      (n(!0), s(I, null, D(be.value, (U, _e) => (n(), s("button", {
                        key: _e,
                        onMousedown: de((J) => F(U), ["prevent"]),
                        class: A(["di-suggestion-item", { "di-suggestion-added": M(U) }]),
                        disabled: M(U)
                      }, [
                        e("span", {
                          class: "di-suggestion-method",
                          style: it({ backgroundColor: ne[U.method] + "20", color: ne[U.method] })
                        }, c(U.method), 5),
                        e("code", gp, c(U.endpoint), 1),
                        U.loadTiming ? (n(), s("span", kp, c(je[U.loadTiming] || U.loadTiming), 1)) : v("", !0),
                        M(U) ? (n(), mt(u(bo), {
                          key: 1,
                          style: { width: "12px", height: "12px", color: "#10b981", "flex-shrink": "0" }
                        })) : v("", !0)
                      ], 42, yp))), 128)),
                      be.value.length === 0 ? (n(), s("div", xp, " 推定結果がありません ")) : v("", !0)
                    ])) : v("", !0)
                  ]),
                  e("button", {
                    onClick: at,
                    class: "di-btn-add"
                  }, [
                    T(u(jt), { style: { width: "14px", height: "14px" } }),
                    $[14] || ($[14] = O(" 手動追加 ", -1))
                  ])
                ])
              ]),
              te.value && be.value.length > 0 && g.value.length > 0 ? (n(), s("div", wp, [
                T(u(Jt), { style: { width: "13px", height: "13px", color: "#f59e0b", "flex-shrink": "0" } }),
                e("span", null, c(be.value.length) + "件のAPIを推定しました", 1),
                e("button", {
                  onMousedown: de(R, ["prevent"]),
                  class: "di-suggestion-banner-btn"
                }, "すべて追加", 32)
              ])) : te.value && be.value.length === 0 ? (n(), s("div", Cp, [...$[16] || ($[16] = [
                e("span", null, "要素のDB情報からAPIを推定できませんでした。要素にDB情報を登録してください。", -1)
              ])])) : v("", !0),
              ee.value.length === 0 && !te.value ? (n(), s("div", $p, " APIが未登録です。「自動推定」で要素情報からAPIを推定できます。 ")) : v("", !0),
              (n(!0), s(I, null, D(ee.value, (U, _e) => (n(), s("div", {
                key: _e,
                class: "di-api-entry"
              }, [
                e("div", _p, [
                  h(e("select", {
                    "onUpdate:modelValue": (J) => U.method = J,
                    class: "di-select di-select-method"
                  }, [
                    (n(), s(I, null, D(z, (J) => e("option", {
                      key: J,
                      value: J
                    }, c(J), 9, Ip)), 64))
                  ], 8, Tp), [
                    [Me, U.method]
                  ]),
                  h(e("input", {
                    "onUpdate:modelValue": (J) => U.endpoint = J,
                    type: "text",
                    placeholder: "/api/users/:id",
                    class: "di-input di-input-endpoint"
                  }, null, 8, Mp), [
                    [x, U.endpoint]
                  ]),
                  e("button", {
                    onClick: (J) => Se(_e),
                    class: "di-btn-remove"
                  }, [
                    T(u(Io), { style: { width: "14px", height: "14px" } })
                  ], 8, Sp)
                ]),
                e("div", Up, [
                  h(e("input", {
                    "onUpdate:modelValue": (J) => U.description = J,
                    type: "text",
                    placeholder: "説明（任意）",
                    class: "di-input di-input-desc"
                  }, null, 8, Dp), [
                    [x, U.description]
                  ]),
                  h(e("select", {
                    "onUpdate:modelValue": (J) => U.loadTiming = J,
                    class: "di-select di-select-timing"
                  }, [
                    (n(), s(I, null, D(N, (J) => e("option", {
                      key: J.value,
                      value: J.value
                    }, c(J.label), 9, Ep)), 64))
                  ], 8, Vp), [
                    [Me, U.loadTiming]
                  ])
                ])
              ]))), 128))
            ]),
            e("div", Pp, [
              $[20] || ($[20] = e("label", { class: "di-form-label" }, "認証設定", -1)),
              e("div", Bp, [
                e("button", {
                  onClick: $[4] || ($[4] = (U) => oe.value = !oe.value),
                  class: A(["di-toggle-btn", { active: oe.value }])
                }, [
                  e("span", {
                    class: A(["di-toggle-knob", { active: oe.value }])
                  }, null, 2)
                ], 2),
                $[17] || ($[17] = e("span", { class: "di-auth-label" }, "ログイン必須", -1))
              ]),
              oe.value ? (n(), s("div", Ap, [
                e("div", Lp, [
                  $[18] || ($[18] = e("label", { class: "di-form-label" }, "必要ロール（カンマ区切り）", -1)),
                  h(e("input", {
                    "onUpdate:modelValue": $[5] || ($[5] = (U) => ue.value = U),
                    type: "text",
                    placeholder: "admin, manager",
                    class: "di-input"
                  }, null, 512), [
                    [x, ue.value]
                  ])
                ]),
                e("div", Op, [
                  $[19] || ($[19] = e("label", { class: "di-form-label" }, "認証メモ", -1)),
                  h(e("input", {
                    "onUpdate:modelValue": $[6] || ($[6] = (U) => Ce.value = U),
                    type: "text",
                    placeholder: "自分のデータのみ閲覧可",
                    class: "di-input"
                  }, null, 512), [
                    [x, Ce.value]
                  ])
                ])
              ])) : v("", !0)
            ]),
            e("div", Fp, [
              $[21] || ($[21] = e("label", { class: "di-form-label" }, "Figma URL", -1)),
              h(e("input", {
                "onUpdate:modelValue": $[7] || ($[7] = (U) => $e.value = U),
                type: "text",
                placeholder: "https://www.figma.com/design/...",
                class: "di-input"
              }, null, 512), [
                [x, $e.value]
              ])
            ]),
            e("div", jp, [
              $[22] || ($[22] = e("label", { class: "di-form-label" }, "メモ", -1)),
              h(e("textarea", {
                "onUpdate:modelValue": $[8] || ($[8] = (U) => G.value = U),
                rows: "3",
                placeholder: "この画面に関するメモ...",
                class: "di-textarea"
              }, null, 512), [
                [x, G.value]
              ])
            ])
          ]),
          e("div", qp, [
            e("button", {
              onClick: ye,
              class: "di-btn-delete"
            }, [
              T(u(Ht), { style: { width: "14px", height: "14px" } }),
              $[23] || ($[23] = O(" 削除 ", -1))
            ]),
            e("div", Hp, [
              e("button", {
                onClick: Ee,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: Xe,
                class: "di-btn-save",
                disabled: !S.value.trim()
              }, [
                T(u(Sl), { style: { width: "14px", height: "14px" } }),
                $[24] || ($[24] = O(" 保存 ", -1))
              ], 8, Rp)
            ])
          ])
        ])
      ])) : v("", !0)
    ]));
  }
}), Kp = /* @__PURE__ */ Qt(zp, [["__scopeId", "data-v-a3b58e7a"]]), Gp = {
  key: 0,
  "data-dev-inspector": ""
}, Yp = /* @__PURE__ */ zt({
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
  setup(Z) {
    const a = Z, S = Kt();
    return Il(() => {
      S.init({
        storageKey: a.storageKey,
        enabledInProduction: a.enabledInProduction,
        initialAnnotations: a.initialAnnotations
      });
    }), (P, ee) => u(S).isAvailable ? (n(), s("div", Gp, [
      T(qd),
      T(Fv),
      T(Kp),
      T(np)
    ])) : v("", !0);
  }
}), Zp = {
  install(Z, a = {}) {
    const { autoRegister: S = !0, ...P } = a;
    S && Z.component("DevInspector", Yp), Z.provide("devInspectorOptions", P);
  }
};
export {
  Fv as DevElementEditor,
  Yp as DevInspector,
  qd as DevPanel,
  np as DevPickOverlay,
  Kp as DevScreenEditor,
  Zp as VueDevInspector,
  Zp as default,
  Np as useDevInspector,
  Kt as useDevInspectorStore,
  t1 as vitePluginDevInspector
};
