import { h as gl, defineComponent as Kt, inject as Nt, ref as y, computed as H, watch as zt, openBlock as n, createElementBlock as s, Fragment as M, createBlock as ft, Teleport as wt, unref as d, createVNode as I, createCommentVNode as v, createElementVNode as e, normalizeClass as L, toDisplayString as c, withDirectives as h, renderList as D, createTextVNode as O, withModifiers as de, vModelText as w, withKeys as Bt, vShow as jt, normalizeStyle as dt, vModelSelect as Me, resolveDynamicComponent as co, vModelCheckbox as Wt, onMounted as Sl, onUnmounted as vo } from "vue";
import { a as Gt } from "./useDevInspector-Dky8gUa2.js";
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Zt = {
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
const po = (N) => N.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), W = (N, k) => ({ size: r, strokeWidth: V = 2, absoluteStrokeWidth: q, color: ue, class: te, ...re }, { attrs: we, slots: Z }) => gl(
  "svg",
  {
    ...Zt,
    width: r || Zt.width,
    height: r || Zt.height,
    stroke: ue || Zt.stroke,
    "stroke-width": q ? Number(V) * 24 / Number(r) : V,
    ...we,
    class: ["lucide", `lucide-${po(N)}`],
    ...re
  },
  [
    ...k.map((Ce) => gl(...Ce)),
    ...Z.default ? [Z.default()] : []
  ]
);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mo = W("AlertCircleIcon", [
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
const fo = W("AlertTriangleIcon", [
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
const bo = W("ArrowUpDownIcon", [
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
const ho = W("BarChart3Icon", [
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
const kl = W("CalculatorIcon", [
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
const yo = W("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nl = W("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xl = W("ChevronUpIcon", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const go = W("ClipboardListIcon", [
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
const wl = W("ClockIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cl = W("CodeIcon", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mt = W("DatabaseIcon", [
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
const ol = W("DownloadIcon", [
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
const ko = W("ExternalLinkIcon", [
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
const xo = W("EyeOffIcon", [
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
const wo = W("EyeIcon", [
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ul = W("FileSpreadsheetIcon", [
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
const Jt = W("FileTextIcon", [
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
const Co = W("FormInputIcon", [
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
const $o = W("GitBranchIcon", [
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
const _o = W("GitMergeIcon", [
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
const $l = W("ListIcon", [
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
const To = W("LockIcon", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Io = W("MailIcon", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mo = W("MessageSquareIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const So = W("MinusIcon", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _l = W("MousePointer2Icon", [
  ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tl = W("PenLineIcon", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Il = W("PenSquareIcon", [
  ["path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1qinfi" }],
  ["path", { d: "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z", key: "w2jsv5" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qt = W("PlusIcon", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dl = W("SaveIcon", [
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
const Uo = W("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Do = W("ServerIcon", [
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
const Ml = W("ShieldQuestionIcon", [
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
const Vo = W("ShieldIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rt = W("Trash2Icon", [
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
const Eo = W("TypeIcon", [
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
const Po = W("UploadIcon", [
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
const Qt = W("Wand2Icon", [
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
const xt = W("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bo = W("ZapIcon", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
]);
async function Ao(N, k, r = {}) {
  var be;
  const V = await import("./xlsx-BopDBbWb.js"), { systemName: q = "System", author: ue = "" } = r, te = /* @__PURE__ */ new Date(), re = `${te.getFullYear()}/${te.getMonth() + 1}/${te.getDate()}`, we = V.utils.book_new(), Z = [];
  Z.push([
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
    q,
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
    (N == null ? void 0 : N.name) || "",
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
    ue,
    "",
    "作成日",
    "",
    "",
    "",
    "",
    re
  ]), Z.push([]), Z.push([
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
    (N == null ? void 0 : N.componentPath) || "",
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
    (N == null ? void 0 : N.figmaUrl) || ""
  ]), Z.push([]), Z.push(["機能概要"]), Z.push([(N == null ? void 0 : N.description) || ""]), Z.push([]), Z.push(["画面レイアウト　figmaURL"]), Z.push([(N == null ? void 0 : N.figmaUrl) || ""]), Z.push([]), N != null && N.apis && N.apis.length > 0 && (Z.push(["API一覧"]), Z.push(["", "メソッド", "", "エンドポイント", "", "", "", "", "", "", "", "説明"]), N.apis.forEach((S) => {
    Z.push(["", S.method, "", S.endpoint, "", "", "", "", "", "", "", S.description]);
  }), Z.push([])), Z.push(["画面項目　ヘッダーフッターは省く"]), Z.push([
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
  ]), Object.values(k).forEach((S, Se) => {
    var Ge, ne, qe;
    const Ee = S.id;
    let Pe = "", ot = "", he = "";
    if ((Ge = S.note) != null && Ge.text && (Pe = S.note.text), S.fieldInfo && (Pe += Pe ? `
` : "", Pe += `DB: ${S.fieldInfo.table}.${S.fieldInfo.column}`, S.fieldInfo.type && (Pe += ` (${S.fieldInfo.type})`), S.fieldInfo.description && (Pe += `
${S.fieldInfo.description}`)), S.actionInfo && (he = `[${{
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行",
      csv_export: "CSV出力",
      csv_import: "CSV取込",
      email: "メール送信",
      sort: "ソート"
    }[S.actionInfo.type] || S.actionInfo.type}]`, S.actionInfo.target && (he += ` ${S.actionInfo.method || ""} ${S.actionInfo.target}`), S.actionInfo.description && (he += `
${S.actionInfo.description}`)), S.links) {
      const E = [];
      S.links.testPath && E.push(`テスト: ${S.links.testPath}`), S.links.figmaUrl && E.push(`Figma: ${S.links.figmaUrl}`), S.links.githubIssue && E.push(`Issue: ${S.links.githubIssue}`), S.links.githubPr && E.push(`PR: ${S.links.githubPr}`), E.length > 0 && (he += he ? `

` : "", he += E.join(`
`));
    }
    if (S.devMeta) {
      const E = [];
      (ne = S.devMeta.usedStores) != null && ne.length && E.push(`Store: ${S.devMeta.usedStores.join(", ")}`), (qe = S.devMeta.usedComponents) != null && qe.length && E.push(`Components: ${S.devMeta.usedComponents.join(", ")}`), S.devMeta.accessibility && E.push(`A11y: ${S.devMeta.accessibility}`), S.devMeta.responsive && E.push(`Responsive: ${S.devMeta.responsive}`), E.length > 0 && (he += he ? `

` : "", he += `[開発情報]
` + E.join(`
`));
    }
    Z.push([
      "",
      Se + 1,
      "",
      Ee,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      Pe,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ot,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      he
    ]);
  });
  const le = V.utils.aoa_to_sheet(Z);
  le["!cols"] = [
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
  ], V.utils.book_append_sheet(we, le, "画面設計書");
  const _e = `画面仕様書_${((be = N == null ? void 0 : N.name) == null ? void 0 : be.replace(/[/\\?%*:|"<>]/g, "-")) || "screen"}_${re.replace(/\//g, "")}.xlsx`;
  return V.writeFile(we, _e), _e;
}
const Lo = {
  key: 0,
  class: "di-panel",
  "data-dev-inspector": ""
}, Fo = { class: "di-header" }, Oo = { class: "di-header-title" }, jo = { class: "di-tab-bar" }, qo = {
  key: 0,
  class: "di-tab-badge"
}, Ho = {
  key: 0,
  class: "di-tab-badge"
}, Ro = {
  key: 0,
  class: "di-tab-badge"
}, zo = { class: "di-edit-section" }, Ko = { class: "di-note-toggle-badge" }, Go = {
  key: 1,
  class: "di-note-filter"
}, Yo = { class: "di-filter-buttons" }, Xo = ["onClick"], Wo = {
  key: 2,
  class: "di-element-list-section"
}, Zo = { class: "di-element-list-header" }, Jo = { class: "di-count-badge" }, Qo = { key: 0 }, No = { class: "di-element-tree" }, en = {
  key: 0,
  class: "di-tree-group"
}, tn = { class: "di-tree-icon" }, ln = { class: "di-count-badge" }, on = {
  key: 0,
  class: "di-element-list"
}, nn = ["onDragstart", "onClick", "onMouseenter"], sn = { class: "di-element-item-body" }, an = { class: "di-element-item-label" }, dn = ["onClick"], un = {
  key: 1,
  class: "di-tree-group"
}, rn = { class: "di-tree-icon" }, cn = { class: "di-count-badge" }, vn = {
  key: 0,
  class: "di-tree-children"
}, pn = {
  key: 0,
  class: "di-rename-row"
}, mn = ["onKeydown", "onBlur"], fn = ["onClick", "onDragover", "onDragleave", "onDrop"], bn = { class: "di-tree-icon" }, hn = { class: "di-count-badge" }, yn = ["onClick"], gn = { key: 2 }, kn = {
  key: 0,
  class: "di-element-list"
}, xn = ["onDragstart", "onClick", "onMouseenter"], wn = { class: "di-element-item-body" }, Cn = { class: "di-element-item-label" }, $n = ["onClick"], _n = {
  key: 1,
  class: "di-tree-children"
}, Tn = {
  key: 0,
  class: "di-rename-row"
}, In = ["onKeydown", "onBlur"], Mn = ["onClick", "onDragover", "onDragleave", "onDrop"], Sn = { class: "di-tree-icon" }, Un = { class: "di-count-badge" }, Dn = ["onClick"], Vn = { key: 2 }, En = {
  key: 0,
  class: "di-element-list"
}, Pn = ["onDragstart", "onClick", "onMouseenter"], Bn = { class: "di-element-item-body" }, An = { class: "di-element-item-label" }, Ln = ["onClick"], Fn = {
  key: 1,
  class: "di-tree-children"
}, On = {
  key: 0,
  class: "di-rename-row"
}, jn = ["onKeydown", "onBlur"], qn = ["onClick", "onDragover", "onDragleave", "onDrop"], Hn = { class: "di-tree-icon" }, Rn = { class: "di-count-badge" }, zn = ["onClick"], Kn = { key: 2 }, Gn = {
  key: 0,
  class: "di-element-list"
}, Yn = ["onDragstart", "onClick", "onMouseenter"], Xn = { class: "di-element-item-body" }, Wn = { class: "di-element-item-label" }, Zn = ["onClick"], Jn = {
  key: 2,
  class: "di-tree-group"
}, Qn = { class: "di-tree-icon" }, Nn = { class: "di-count-badge" }, es = {
  key: 0,
  class: "di-tree-children"
}, ts = {
  key: 0,
  class: "di-rename-row"
}, ls = ["onKeydown", "onBlur"], os = ["onClick", "onDragover", "onDragleave", "onDrop"], ns = { class: "di-tree-icon" }, ss = { class: "di-count-badge" }, is = ["onClick"], as = { key: 2 }, ds = {
  key: 0,
  class: "di-element-list"
}, us = ["onDragstart", "onClick", "onMouseenter"], rs = { class: "di-element-item-body" }, cs = { class: "di-element-item-label" }, vs = ["onClick"], ps = {
  key: 1,
  class: "di-tree-children"
}, ms = {
  key: 0,
  class: "di-rename-row"
}, fs = ["onKeydown", "onBlur"], bs = ["onClick", "onDragover", "onDragleave", "onDrop"], hs = { class: "di-tree-icon" }, ys = { class: "di-count-badge" }, gs = ["onClick"], ks = { key: 2 }, xs = {
  key: 0,
  class: "di-element-list"
}, ws = ["onDragstart", "onClick", "onMouseenter"], Cs = { class: "di-element-item-body" }, $s = { class: "di-element-item-label" }, _s = ["onClick"], Ts = {
  key: 0,
  class: "di-tree-subgroup"
}, Is = {
  key: 0,
  class: "di-rename-row"
}, Ms = { class: "di-tree-icon" }, Ss = { class: "di-count-badge" }, Us = {
  key: 2,
  class: "di-element-list"
}, Ds = ["onDragstart", "onClick", "onMouseenter"], Vs = { class: "di-element-item-body" }, Es = { class: "di-element-item-label" }, Ps = ["onClick"], Bs = {
  key: 0,
  class: "di-unannotated-badge"
}, As = {
  key: 3,
  class: "di-unannotated-results"
}, Ls = { class: "di-unannotated-summary" }, Fs = { key: 0 }, Os = { key: 1 }, js = { key: 2 }, qs = { class: "di-unannotated-list" }, Hs = ["onMouseenter"], Rs = { class: "di-unannotated-text" }, zs = ["onClick"], Ks = ["onClick"], Gs = {
  key: 4,
  class: "di-unannotated-empty"
}, Ys = {
  key: 5,
  class: "di-broken-warning"
}, Xs = { class: "di-broken-header" }, Ws = { class: "di-broken-list" }, Zs = { class: "di-broken-item-info" }, Js = { class: "di-broken-item-note" }, Qs = { class: "di-broken-item-selector" }, Ns = { class: "di-broken-item-actions" }, ei = ["onClick"], ti = ["onClick"], li = { class: "di-broken-actions" }, oi = { class: "di-content" }, ni = { class: "di-section" }, si = { class: "di-screen-header" }, ii = { class: "di-screen-name" }, ai = {
  key: 0,
  class: "di-screen-desc"
}, di = {
  key: 1,
  class: "di-auth-badges"
}, ui = {
  key: 0,
  class: "di-auth-badge di-auth-required"
}, ri = {
  key: 1,
  class: "di-auth-note"
}, ci = {
  key: 0,
  class: "di-card"
}, vi = { class: "di-card-label" }, pi = { class: "di-code-blue" }, mi = {
  key: 1,
  class: "di-card"
}, fi = { class: "di-card-label" }, bi = ["href"], hi = {
  key: 2,
  class: "di-card"
}, yi = { class: "di-card-label" }, gi = { class: "di-api-list" }, ki = { class: "di-api-info" }, xi = { class: "di-api-endpoint" }, wi = {
  key: 0,
  class: "di-api-desc"
}, Ci = {
  key: 0,
  class: "di-api-timing-badge"
}, $i = {
  key: 3,
  class: "di-card"
}, _i = { class: "di-card-label" }, Ti = { class: "di-screen-notes" }, Ii = {
  key: 1,
  class: "di-no-spec"
}, Mi = { class: "di-card di-cross-search-section" }, Si = { class: "di-cross-search-header" }, Ui = { class: "di-cross-search-body" }, Di = {
  class: "di-filter-buttons",
  style: { "margin-bottom": "8px" }
}, Vi = ["onClick"], Ei = ["placeholder"], Pi = {
  key: 0,
  class: "di-cross-search-count"
}, Bi = {
  key: 1,
  class: "di-cross-search-results"
}, Ai = { class: "di-cross-search-page-header" }, Li = {
  key: 0,
  class: "di-cross-search-page-name"
}, Fi = ["onClick"], Oi = { class: "di-cross-search-field" }, ji = {
  key: 0,
  class: "di-cross-search-context"
}, qi = { class: "di-card di-screen-flow-section" }, Hi = {
  key: 0,
  class: "di-screen-flow-badge"
}, Ri = {
  key: 0,
  class: "di-screen-flow-body"
}, zi = {
  key: 0,
  class: "di-screen-flow-empty"
}, Ki = { class: "di-flow-node-path" }, Gi = {
  key: 0,
  class: "di-flow-node-name"
}, Yi = ["onClick"], Xi = { class: "di-flow-target" }, Wi = {
  key: 0,
  class: "di-flow-edge-label"
}, Zi = {
  key: 1,
  class: "di-flow-orphans"
}, Ji = { class: "di-section" }, Qi = {
  class: "di-section-header",
  style: { "margin-bottom": "8px" }
}, Ni = {
  key: 0,
  class: "di-section-badge"
}, ea = { class: "di-master-table-name" }, ta = ["onClick"], la = { class: "di-master-item-header" }, oa = { class: "di-master-col-name" }, na = {
  key: 0,
  class: "di-master-col-type"
}, sa = { class: "di-master-item-name" }, ia = { class: "di-master-entries-preview" }, aa = {
  key: 0,
  class: "di-master-entry-more"
}, da = { class: "di-master-editor" }, ua = { class: "di-master-editor-header" }, ra = { class: "di-master-editor-body" }, ca = { class: "di-master-row" }, va = { class: "di-master-field" }, pa = ["disabled"], ma = { class: "di-master-field" }, fa = ["disabled"], ba = { class: "di-master-row" }, ha = { class: "di-master-field" }, ya = { class: "di-master-field" }, ga = {
  class: "di-master-field",
  style: { "margin-bottom": "12px" }
}, ka = { class: "di-master-entries-header" }, xa = { class: "di-master-entries-list" }, wa = ["onUpdate:modelValue"], Ca = ["onUpdate:modelValue"], $a = ["onUpdate:modelValue"], _a = ["onUpdate:modelValue"], Ta = ["onClick"], Ia = {
  class: "di-master-entries-header",
  style: { "margin-top": "16px" }
}, Ma = {
  key: 0,
  class: "di-master-entries-list"
}, Sa = ["onUpdate:modelValue"], Ua = ["value"], Da = ["onUpdate:modelValue"], Va = ["value"], Ea = ["onUpdate:modelValue"], Pa = ["onUpdate:modelValue"], Ba = ["onClick"], Aa = {
  key: 1,
  class: "di-master-empty",
  style: { "margin-top": "4px", "font-size": "11px" }
}, La = { class: "di-master-editor-footer" }, Fa = ["disabled"], Oa = { class: "di-section" }, ja = {
  class: "di-section-header",
  style: { "margin-bottom": "8px" }
}, qa = {
  key: 0,
  class: "di-section-badge"
}, Ha = ["onClick"], Ra = { class: "di-batch-item-info" }, za = { class: "di-batch-item-name" }, Ka = {
  key: 0,
  class: "di-batch-item-schedule"
}, Ga = { class: "di-batch-editor" }, Ya = { class: "di-batch-editor-header" }, Xa = { class: "di-batch-editor-body" }, Wa = { class: "di-batch-row" }, Za = { class: "di-batch-field" }, Ja = { class: "di-batch-field" }, Qa = { class: "di-batch-row" }, Na = { class: "di-batch-field" }, ed = {
  class: "di-batch-field",
  style: { "margin-bottom": "12px" }
}, td = { class: "di-batch-row" }, ld = { class: "di-batch-field" }, od = { class: "di-batch-tags-input" }, nd = ["onClick"], sd = { class: "di-batch-field" }, id = { class: "di-batch-tags-input" }, ad = ["onClick"], dd = { class: "di-batch-section-label" }, ud = { key: 0 }, rd = { class: "di-batch-step-no" }, cd = ["onUpdate:modelValue"], vd = ["onUpdate:modelValue"], pd = ["onUpdate:modelValue"], md = ["onUpdate:modelValue"], fd = ["onClick"], bd = { class: "di-batch-row" }, hd = { class: "di-batch-field" }, yd = { class: "di-batch-field" }, gd = { class: "di-batch-row" }, kd = { class: "di-batch-field" }, xd = { class: "di-batch-field" }, wd = { class: "di-batch-editor-footer" }, Cd = ["disabled"], $d = { class: "di-export-buttons" }, _d = { class: "di-action-buttons" }, Td = {
  key: 0,
  class: "di-export-summary"
}, Id = { class: "di-export-summary-row" }, Md = { class: "di-export-summary-count" }, Sd = { class: "di-export-summary-row" }, Ud = { class: "di-export-summary-count" }, Dd = { class: "di-export-summary-row" }, Vd = { class: "di-export-summary-count" }, Ed = {
  key: 0,
  class: "di-indicator",
  "data-dev-inspector": ""
}, Pd = { class: "di-modal" }, Bd = ["value"], Ad = { class: "di-modal-actions" }, Ld = { class: "di-modal" }, Fd = { class: "di-file-drop" }, Od = {
  key: 0,
  class: "di-error"
}, jd = { class: "di-modal-actions" }, qd = ["disabled"], Hd = /* @__PURE__ */ Kt({
  __name: "DevPanel",
  setup(N) {
    const k = Nt("teleportTarget", "body"), r = Gt(), V = y("elements"), q = y(!1), ue = y(!1), te = y(""), re = y(""), we = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, Z = H(() => r.currentScreenSpec), Ce = H(() => r.getScreenConfig()), le = H(() => {
      var x;
      const u = Ce.value, l = Z.value;
      return !u && !l ? null : {
        name: (u == null ? void 0 : u.name) || (l == null ? void 0 : l.name) || "",
        description: (u == null ? void 0 : u.description) || (l == null ? void 0 : l.description) || "",
        componentPath: (u == null ? void 0 : u.componentPath) || (l == null ? void 0 : l.componentPath) || "",
        figmaUrl: (u == null ? void 0 : u.figmaUrl) || (l == null ? void 0 : l.figmaUrl) || "",
        apis: (u == null ? void 0 : u.apis) || ((x = l == null ? void 0 : l.apis) == null ? void 0 : x.map((F) => ({ ...F, loadTiming: void 0 }))) || [],
        auth: (u == null ? void 0 : u.auth) || null,
        notes: (u == null ? void 0 : u.notes) || (l != null && l.notes ? l.notes.join(`
`) : "")
      };
    }), $e = H(() => Object.keys(r.elementConfigs).length), _e = H(() => {
      const u = typeof window < "u" ? window.location.pathname : "/";
      return Object.entries(r.elementConfigs).filter(([, l]) => !l.pagePath || l.pagePath === u).map(([l, x]) => {
        var i, f, p;
        let F = "";
        return (i = x.note) != null && i.text ? F = x.note.text : x.fieldInfo ? F = `${x.fieldInfo.table}.${x.fieldInfo.column}` : (f = x.actionInfo) != null && f.description ? F = x.actionInfo.description : (p = x.actionInfo) != null && p.type ? (F = { navigate: "画面遷移", api: "API", modal: "モーダル", emit: "イベント", function: "関数", csv_export: "CSV出力", csv_import: "CSV取込", email: "メール送信" }[x.actionInfo.type] || x.actionInfo.type, x.actionInfo.target && (F += ` → ${x.actionInfo.target}`)) : x.formInfo && (F = x.formInfo.label || x.formInfo.inputType || "フォーム"), F || (F = l), { id: l, desc: F, type: x.elementType, isConditional: !!x.isConditional, tabContext: x.tabContext || "", modalName: x.modalName || "", config: x };
      });
    }), be = H(() => {
      const u = r.noteHighlightFilter;
      return u === "all" ? _e.value : _e.value.filter((l) => {
        var p, T, $, ae, oe;
        const x = l.config, F = (p = x.note) == null ? void 0 : p.displayType, i = !!((T = x.note) != null && T.condition || ($ = x.note) != null && $.conditionColumn), f = !!((ae = x.note) != null && ae.storedCalc);
        switch (u) {
          case "db":
            return F === "db_direct" || F === "db_formatted";
          case "calculated":
            return F === "calculated";
          case "storedCalc":
            return f;
          case "static":
            return F === "static";
          case "conditional":
            return i;
          case "action":
            return x.elementType === "action";
          case "form":
            return x.elementType === "form";
          case "other":
            return F === "other" || !F && !x.elementType && !!((oe = x.note) != null && oe.text);
          default:
            return !0;
        }
      });
    }), S = H(() => be.value.filter((u) => !u.isConditional && !u.tabContext));
    function Se(u) {
      let l = u.elements.length;
      for (const x of Object.values(u.children)) l += Se(x);
      return l;
    }
    function Ee(u, l) {
      const x = {};
      return u.forEach((F) => {
        const i = F[l];
        if (!i) return;
        const f = i.split(">").map((T) => T.trim()).filter(Boolean);
        let p = x;
        for (let T = 0; T < f.length; T++) {
          const $ = f[T];
          p[$] || (p[$] = { elements: [], children: {} }), T === f.length - 1 && p[$].elements.push(F), p = p[$].children;
        }
      }), x;
    }
    const Pe = H(() => Ee(
      be.value.filter((u) => u.tabContext && !u.isConditional),
      "tabContext"
    )), ot = H(() => be.value.filter((u) => u.tabContext && !u.isConditional)), he = y(!0), Ge = y(!1), ne = y({}), qe = H(() => be.value.filter((u) => u.isConditional)), E = H(() => be.value.filter((u) => u.isConditional && u.modalName)), B = H(() => Ee(E.value, "modalName")), g = H(() => be.value.filter((u) => u.isConditional && !u.modalName)), j = y(!1), z = y({}), se = H(() => Object.values(r.elementConfigs).filter((u) => {
      var l, x;
      return !!((l = u.note) != null && l.text || (x = u.note) != null && x.displayType);
    }).length), K = H(() => {
      const u = r.noteHighlightFilter;
      return u === "all" ? se.value : Object.values(r.elementConfigs).filter((l) => {
        var f, p, T, $, ae, oe, Tt;
        if (!((f = l.note) != null && f.text || (p = l.note) != null && p.displayType || l.elementType)) return !1;
        const x = (T = l.note) == null ? void 0 : T.displayType, F = !!(($ = l.note) != null && $.condition || (ae = l.note) != null && ae.conditionColumn), i = !!((oe = l.note) != null && oe.storedCalc);
        switch (u) {
          case "db":
            return x === "db_direct" || x === "db_formatted";
          case "calculated":
            return x === "calculated";
          case "storedCalc":
            return i;
          case "static":
            return x === "static";
          case "conditional":
            return F;
          case "action":
            return l.elementType === "action";
          case "form":
            return l.elementType === "form";
          case "other":
            return x === "other" || !x && !l.elementType && !!((Tt = l.note) != null && Tt.text);
          default:
            return !0;
        }
      }).length;
    });
    function ee() {
      const u = r.exportConfigs();
      navigator.clipboard.writeText(u), q.value = !1;
    }
    function A() {
      const u = r.exportConfigs(), l = new Blob([u], { type: "application/json" }), x = URL.createObjectURL(l), F = document.createElement("a");
      F.href = x, F.download = "dev-mode-configs.json", F.click(), URL.revokeObjectURL(x), q.value = !1;
    }
    function _() {
      r.downloadAnnotations();
    }
    async function U() {
      try {
        await Ao(
          r.currentScreenSpec,
          r.elementConfigs,
          { systemName: "System" }
        );
      } catch (u) {
        console.error("Failed to export xlsx:", u), alert("xlsx export failed. Make sure xlsx package is installed.");
      }
    }
    function Te() {
      try {
        r.importConfigs(te.value), te.value = "", re.value = "", ue.value = !1;
      } catch {
        re.value = "JSONの形式が正しくありません";
      }
    }
    function J(u) {
      var i;
      const x = (i = u.target.files) == null ? void 0 : i[0];
      if (!x) return;
      const F = new FileReader();
      F.onload = (f) => {
        var p;
        te.value = (p = f.target) == null ? void 0 : p.result;
      }, F.readAsText(x);
    }
    function Ze() {
      confirm("すべての要素設定を削除しますか？") && r.clearAllConfigs();
    }
    y("/dev-inspector-analysis.json"), y(!1), y(""), y(0), y(!1);
    const ye = [
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
    H(() => r.getCurrentPageApis());
    const Je = H(() => r.brokenAnnotations.length);
    zt(() => r.isPanelOpen, (u) => {
      u && r.detectBrokenAnnotations();
    });
    function nt() {
      confirm(`${Je.value}件の壊れたメモを削除しますか？`) && r.deleteBrokenAnnotations();
    }
    const Ye = y(!1), He = y(null), Q = y({
      table: "",
      column: "",
      name: "",
      columnType: "",
      description: "",
      entries: [],
      transitions: []
    }), Be = H(() => Object.keys(r.masterDefinitions).length), ut = H(() => {
      const u = Object.values(r.masterDefinitions), l = {};
      for (const x of u)
        l[x.table] || (l[x.table] = []), l[x.table].push(x);
      return l;
    });
    function Qe(u) {
      if (u) {
        const l = r.getMasterDefinition(u);
        l && (He.value = u, Q.value = {
          table: l.table,
          column: l.column,
          name: l.name,
          columnType: l.columnType || "",
          description: l.description || "",
          entries: [...l.entries.map((x) => ({ ...x }))],
          transitions: l.transitions ? l.transitions.map((x) => ({ ...x })) : []
        });
      } else
        He.value = null, Q.value = {
          table: "",
          column: "",
          name: "",
          columnType: "",
          description: "",
          entries: [{ value: "", label: "" }],
          transitions: []
        };
      Ye.value = !0;
    }
    function rt() {
      const u = Q.value;
      if (!u.table || !u.column) return;
      const l = `${u.table}.${u.column}`, x = u.transitions.filter((i) => i.from || i.to || i.trigger), F = {
        id: l,
        table: u.table,
        column: u.column,
        name: u.name || u.column,
        columnType: u.columnType || void 0,
        description: u.description || void 0,
        entries: u.entries.filter((i) => i.value || i.label),
        transitions: x.length > 0 ? x : void 0,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      r.setMasterDefinition(F), Ye.value = !1;
    }
    function ct() {
      Q.value.entries.push({ value: "", label: "" });
    }
    function vt(u) {
      Q.value.entries.splice(u, 1);
    }
    function xe() {
      Q.value.transitions.push({ from: "", to: "", trigger: "" });
    }
    function Ae(u) {
      Q.value.transitions.splice(u, 1);
    }
    function Ue(u) {
      confirm(`マスタ定義「${u}」を削除しますか？`) && r.deleteMasterDefinition(u);
    }
    const Re = y(!1), st = y(null), G = y({
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
    }), Ne = y(""), bt = y(""), it = H(() => Object.keys(r.batchDefinitions).length), St = H(() => Object.values(r.batchDefinitions));
    function Ct(u) {
      if (u) {
        const l = r.getBatchDefinition(u);
        l && (st.value = u, G.value = {
          name: l.name,
          schedule: l.schedule || "",
          trigger: l.trigger || "",
          description: l.description || "",
          inputTables: l.inputTables ? [...l.inputTables] : [],
          outputTables: l.outputTables ? [...l.outputTables] : [],
          steps: l.steps.map((x) => ({ ...x })),
          timeout: l.timeout || "",
          retryPolicy: l.retryPolicy || "",
          notifyOnError: l.notifyOnError || "",
          notifyOnComplete: l.notifyOnComplete || ""
        });
      } else
        st.value = null, G.value = {
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
      Ne.value = "", bt.value = "", Re.value = !0;
    }
    function Ut() {
      const u = G.value;
      if (!u.name) return;
      const x = {
        id: st.value || `batch_${u.name.replace(/\s+/g, "_").toLowerCase()}_${Date.now()}`,
        name: u.name,
        schedule: u.schedule || void 0,
        trigger: u.trigger || void 0,
        description: u.description || void 0,
        inputTables: u.inputTables.length > 0 ? u.inputTables : void 0,
        outputTables: u.outputTables.length > 0 ? u.outputTables : void 0,
        steps: u.steps.filter((F) => F.description).map((F, i) => ({ ...F, order: i + 1 })),
        timeout: u.timeout || void 0,
        retryPolicy: u.retryPolicy || void 0,
        notifyOnError: u.notifyOnError || void 0,
        notifyOnComplete: u.notifyOnComplete || void 0,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      r.setBatchDefinition(x), Re.value = !1;
    }
    function Dt() {
      const u = G.value.steps.length + 1;
      G.value.steps.push({ order: u, description: "" });
    }
    function At(u) {
      G.value.steps.splice(u, 1);
    }
    function Lt(u) {
      var l;
      confirm(`バッチ定義「${((l = r.getBatchDefinition(u)) == null ? void 0 : l.name) || u}」を削除しますか？`) && r.deleteBatchDefinition(u);
    }
    function Ft() {
      const u = Ne.value.trim();
      u && !G.value.inputTables.includes(u) && G.value.inputTables.push(u), Ne.value = "";
    }
    function Ot(u) {
      G.value.inputTables.splice(u, 1);
    }
    function et() {
      const u = bt.value.trim();
      u && !G.value.outputTables.includes(u) && G.value.outputTables.push(u), bt.value = "";
    }
    function Xe(u) {
      G.value.outputTables.splice(u, 1);
    }
    const tt = [
      { value: "column", label: "カラム", placeholder: "users.email, orders..." },
      { value: "api", label: "API", placeholder: "GET /api/users..." },
      { value: "text", label: "テキスト", placeholder: "メモ、説明文で検索..." }
    ], $t = H(() => {
      var u;
      return ((u = tt.find((l) => l.value === r.crossSearchMode)) == null ? void 0 : u.placeholder) || "検索...";
    }), Y = H(() => {
      const u = {};
      for (const l of r.crossSearchResults)
        u[l.pagePath] || (u[l.pagePath] = { pagePath: l.pagePath, pageName: l.pageName, items: [] }), u[l.pagePath].items.push(l);
      return Object.values(u);
    }), De = H(() => Y.value.length), ce = H(() => {
      const u = r.unannotatedElements;
      return {
        binding: u.filter((l) => l.category === "binding").length,
        form: u.filter((l) => l.category === "form").length,
        action: u.filter((l) => l.category === "action").length
      };
    });
    function Le() {
      r.showUnannotatedDetection ? (r.showUnannotatedDetection = !1, r.unannotatedElements = [], r.hoveredUnannotatedSelector = null) : (r.showUnannotatedDetection = !0, r.detectUnannotatedElements());
    }
    function pt(u) {
      r.unannotatedElements = r.unannotatedElements.filter((l) => l.selector !== u);
    }
    function mt(u) {
      r.hoveredUnannotatedSelector = u;
      try {
        const l = document.querySelector(u);
        if (!l) return;
        const x = l.getBoundingClientRect();
        (x.bottom < 0 || x.top > window.innerHeight) && l.scrollIntoView({ behavior: "smooth", block: "center" });
      } catch {
      }
    }
    function gt() {
      r.hoveredUnannotatedSelector = null;
    }
    function ge(u) {
      r.hoveredSelector = u;
      try {
        const l = document.querySelector(u);
        if (!l) return;
        const x = l.getBoundingClientRect();
        (x.bottom < 0 || x.top > window.innerHeight) && l.scrollIntoView({ behavior: "smooth", block: "center" });
      } catch {
      }
    }
    function a() {
      r.hoveredSelector = null;
    }
    const Fe = y(null), fe = y(null);
    function X(u, l) {
      Fe.value = l, u.dataTransfer && (u.dataTransfer.effectAllowed = "move", u.dataTransfer.setData("text/plain", l));
    }
    function ve() {
      Fe.value = null, fe.value = null;
    }
    function ze(u, l) {
      u.preventDefault(), u.dataTransfer && (u.dataTransfer.dropEffect = "move"), fe.value = l;
    }
    function Ve(u, l) {
      const x = u.relatedTarget, F = u.currentTarget;
      F && x && F.contains(x) || fe.value === l && (fe.value = null);
    }
    function Ie(u, l) {
      u.preventDefault(), fe.value = null;
      const x = Fe.value;
      if (Fe.value = null, !(!x || !r.elementConfigs[x])) {
        if (l === "__page__")
          r.setElementConfig(x, { tabContext: void 0, modalName: void 0, isConditional: !1 });
        else if (l.startsWith("tab:")) {
          const i = l.slice(4);
          r.setElementConfig(x, { tabContext: i, modalName: void 0, isConditional: !1 });
        } else if (l === "__modal_unnamed__")
          r.setElementConfig(x, { isConditional: !0, modalName: void 0, tabContext: void 0 });
        else if (l.startsWith("modal:")) {
          const i = l.slice(6);
          r.setElementConfig(x, { isConditional: !0, modalName: i, tabContext: void 0 });
        }
      }
    }
    const lt = y(null), pe = y("");
    function Ke(u, l, x) {
      x.stopPropagation(), lt.value = u, pe.value = l;
    }
    function yt(u) {
      const l = pe.value.trim();
      if (lt.value = null, !!l) {
        if (u.startsWith("tab:")) {
          const x = u.slice(4), F = x.split(" > ");
          F[F.length - 1] = l;
          const i = F.join(" > ");
          if (x === i) return;
          for (const [T, $] of Object.entries(r.elementConfigs))
            $.tabContext && ($.tabContext === x ? r.setElementConfig(T, { tabContext: i }) : $.tabContext.startsWith(x + " > ") && r.setElementConfig(T, { tabContext: i + $.tabContext.slice(x.length) }));
          const f = x.replace(/ > /g, ">"), p = i.replace(/ > /g, ">");
          ne.value[f] !== void 0 && (ne.value[p] = ne.value[f], delete ne.value[f]);
        } else if (u.startsWith("modal:")) {
          const x = u.slice(6), F = x.split(" > ");
          F[F.length - 1] = l;
          const i = F.join(" > ");
          if (x === i) return;
          for (const [T, $] of Object.entries(r.elementConfigs))
            $.modalName && ($.modalName === x ? r.setElementConfig(T, { modalName: i }) : $.modalName.startsWith(x + " > ") && r.setElementConfig(T, { modalName: i + $.modalName.slice(x.length) }));
          const f = x.replace(/ > /g, ">"), p = i.replace(/ > /g, ">");
          z.value[f] !== void 0 && (z.value[p] = z.value[f], delete z.value[f]);
        }
      }
    }
    function _t() {
      lt.value = null, pe.value = "";
    }
    function at(u, l) {
      u.key === "Enter" ? yt(l) : u.key === "Escape" && _t();
    }
    const P = y(null), me = y("");
    function Oe(u, l) {
      P.value = u, me.value = "";
    }
    function We() {
      const u = me.value.trim();
      if (P.value = null, !!u)
        for (const l of g.value)
          r.setElementConfig(l.id, { modalName: u, isConditional: !0 });
    }
    function ke() {
      P.value = null, me.value = "";
    }
    const ie = H(() => typeof window < "u" ? window.location.pathname : "/"), ht = H(() => {
      const u = r.screenFlowData, l = {};
      for (const x of u.edges) {
        if (!l[x.from]) {
          const F = u.nodes.find((i) => i.path === x.from) || { path: x.from, name: x.from, annotationCount: 0 };
          l[x.from] = { node: F, edges: [] };
        }
        l[x.from].edges.push(x);
      }
      return Object.values(l);
    });
    function Vt(u) {
      u && r.startEditing(u);
    }
    return (u, l) => {
      var x, F;
      return n(), s(M, null, [
        (n(), ft(wt, { to: d(k) }, [
          d(r).isEnabled && !d(r).isPanelOpen ? (n(), s("button", {
            key: 0,
            onClick: l[0] || (l[0] = //@ts-ignore
            (...i) => d(r).openPanel && d(r).openPanel(...i)),
            class: "di-fab",
            title: "画面仕様を表示",
            "data-dev-inspector": ""
          }, [
            I(d(Jt), { style: { width: "20px", height: "20px" } })
          ])) : v("", !0)
        ], 8, ["to"])),
        (n(), ft(wt, { to: d(k) }, [
          d(r).isEnabled && d(r).isPanelOpen ? (n(), s("div", Lo, [
            e("div", Fo, [
              e("div", Oo, [
                I(d(Cl), { style: { width: "20px", height: "20px", color: "#60a5fa" } }),
                l[69] || (l[69] = e("span", null, "Developer Mode", -1))
              ]),
              e("button", {
                onClick: l[1] || (l[1] = //@ts-ignore
                (...i) => d(r).closePanel && d(r).closePanel(...i)),
                class: "di-close-btn"
              }, [
                I(d(xt), { style: { width: "20px", height: "20px" } })
              ])
            ]),
            e("div", jo, [
              e("button", {
                onClick: l[2] || (l[2] = (i) => V.value = "elements"),
                class: L(["di-tab-btn", { active: V.value === "elements" }])
              }, [
                I(d(Tl), { style: { width: "14px", height: "14px" } }),
                l[70] || (l[70] = e("span", null, "要素設定", -1)),
                $e.value > 0 ? (n(), s("span", qo, c($e.value), 1)) : v("", !0)
              ], 2),
              e("button", {
                onClick: l[3] || (l[3] = (i) => V.value = "masters"),
                class: L(["di-tab-btn", { active: V.value === "masters" }])
              }, [
                I(d(Mt), { style: { width: "14px", height: "14px" } }),
                l[71] || (l[71] = e("span", null, "マスタ", -1)),
                Be.value > 0 ? (n(), s("span", Ho, c(Be.value), 1)) : v("", !0)
              ], 2),
              e("button", {
                onClick: l[4] || (l[4] = (i) => V.value = "batches"),
                class: L(["di-tab-btn", { active: V.value === "batches" }])
              }, [
                I(d(wl), { style: { width: "14px", height: "14px" } }),
                l[72] || (l[72] = e("span", null, "バッチ", -1)),
                it.value > 0 ? (n(), s("span", Ro, c(it.value), 1)) : v("", !0)
              ], 2),
              e("button", {
                onClick: l[5] || (l[5] = (i) => V.value = "export"),
                class: L(["di-tab-btn", { active: V.value === "export" }])
              }, [
                I(d(ol), { style: { width: "14px", height: "14px" } }),
                l[73] || (l[73] = e("span", null, "出力", -1))
              ], 2)
            ]),
            h(e("div", zo, [
              e("button", {
                onClick: l[6] || (l[6] = //@ts-ignore
                (...i) => d(r).togglePickMode && d(r).togglePickMode(...i)),
                class: L(["di-pick-btn", { active: d(r).isPickMode }])
              }, [
                I(d(_l), { style: { width: "16px", height: "16px" } }),
                e("span", null, c(d(r).isPickMode ? "要素選択中..." : "任意の要素にメモを追加"), 1)
              ], 2),
              se.value > 0 ? (n(), s("button", {
                key: 0,
                onClick: l[7] || (l[7] = //@ts-ignore
                (...i) => d(r).toggleNoteHighlights && d(r).toggleNoteHighlights(...i)),
                class: L(["di-note-toggle-btn", { active: d(r).showNoteHighlights }])
              }, [
                d(r).showNoteHighlights ? (n(), ft(d(wo), {
                  key: 0,
                  style: { width: "14px", height: "14px" }
                })) : (n(), ft(d(xo), {
                  key: 1,
                  style: { width: "14px", height: "14px" }
                })),
                l[74] || (l[74] = e("span", null, "メモハイライト", -1)),
                e("span", Ko, c(d(r).noteHighlightFilter === "all" ? se.value : `${K.value}/${se.value}`), 1)
              ], 2)) : v("", !0),
              se.value > 0 && d(r).showNoteHighlights ? (n(), s("div", Go, [
                e("div", Yo, [
                  (n(), s(M, null, D(ye, (i) => e("button", {
                    key: i.value,
                    onClick: (f) => d(r).noteHighlightFilter = i.value,
                    class: L(["di-filter-btn", { active: d(r).noteHighlightFilter === i.value }])
                  }, c(i.label), 11, Xo)), 64))
                ])
              ])) : v("", !0),
              _e.value.length > 0 ? (n(), s("div", Wo, [
                e("div", Zo, [
                  I(d(Tl), { style: { width: "14px", height: "14px", color: "#94a3b8" } }),
                  l[75] || (l[75] = e("span", null, "登録済み要素", -1)),
                  e("span", Jo, [
                    O(c(be.value.length), 1),
                    be.value.length !== _e.value.length ? (n(), s("span", Qo, " / " + c(_e.value.length), 1)) : v("", !0)
                  ])
                ]),
                e("div", No, [
                  S.value.length > 0 || fe.value === "__page__" ? (n(), s("div", en, [
                    e("button", {
                      class: L(["di-tree-group-header", { "di-drop-target": fe.value === "__page__" }]),
                      onClick: l[8] || (l[8] = (i) => he.value = !he.value),
                      onDragover: l[9] || (l[9] = (i) => ze(i, "__page__")),
                      onDragleave: l[10] || (l[10] = (i) => Ve(i, "__page__")),
                      onDrop: l[11] || (l[11] = (i) => Ie(i, "__page__"))
                    }, [
                      e("span", tn, c(he.value ? "▼" : "▶"), 1),
                      l[76] || (l[76] = e("span", null, "タブ外", -1)),
                      e("span", ln, c(S.value.length), 1)
                    ], 34),
                    he.value ? (n(), s("div", on, [
                      (n(!0), s(M, null, D(S.value, (i) => (n(), s("div", {
                        key: i.id,
                        class: L(["di-element-item", { "di-element-item-active": d(r).hoveredSelector === i.id, "di-dragging": Fe.value === i.id }]),
                        draggable: "true",
                        onDragstart: (f) => X(f, i.id),
                        onDragend: ve,
                        onClick: (f) => d(r).startEditing(i.id),
                        onMouseenter: (f) => ge(i.id),
                        onMouseleave: a
                      }, [
                        e("span", {
                          class: L(["di-element-type-badge", "di-element-type-" + (i.type || "other")])
                        }, c(i.type === "datasource" ? "DB" : i.type === "action" ? "Act" : i.type === "form" ? "Form" : i.type === "chart" ? "Chart" : "-"), 3),
                        e("div", sn, [
                          e("div", an, c(i.desc), 1)
                        ]),
                        e("button", {
                          class: "di-element-delete-btn",
                          onClick: de((f) => d(r).deleteElementConfig(i.id), ["stop"]),
                          title: "削除"
                        }, "×", 8, dn)
                      ], 42, nn))), 128))
                    ])) : v("", !0)
                  ])) : v("", !0),
                  ot.value.length > 0 || Fe.value && !((x = fe.value) != null && x.startsWith("modal:")) && fe.value !== "__modal_unnamed__" ? (n(), s("div", un, [
                    e("button", {
                      class: "di-tree-group-header",
                      onClick: l[12] || (l[12] = (i) => Ge.value = !Ge.value)
                    }, [
                      e("span", rn, c(Ge.value ? "▼" : "▶"), 1),
                      l[77] || (l[77] = e("span", null, "タブ内", -1)),
                      e("span", cn, c(ot.value.length), 1)
                    ]),
                    Ge.value ? (n(), s("div", vn, [
                      (n(!0), s(M, null, D(Pe.value, (i, f) => (n(), s("div", {
                        key: "t1-" + f,
                        class: "di-tree-subgroup"
                      }, [
                        lt.value === "tab:" + f ? (n(), s("div", pn, [
                          l[78] || (l[78] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                          h(e("input", {
                            class: "di-rename-input",
                            "onUpdate:modelValue": l[13] || (l[13] = (p) => pe.value = p),
                            onKeydown: (p) => at(p, "tab:" + f),
                            onBlur: (p) => yt("tab:" + f),
                            ref_for: !0,
                            ref: "renameInputRef",
                            autofocus: ""
                          }, null, 40, mn), [
                            [w, pe.value]
                          ])
                        ])) : (n(), s("button", {
                          key: 1,
                          class: L(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": fe.value === "tab:" + f }]),
                          onClick: (p) => ne.value[f] = !ne.value[f],
                          onDragover: (p) => ze(p, "tab:" + f),
                          onDragleave: (p) => Ve(p, "tab:" + f),
                          onDrop: (p) => Ie(p, "tab:" + f)
                        }, [
                          e("span", bn, c(ne.value[f] ? "▼" : "▶"), 1),
                          l[79] || (l[79] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                          e("span", null, c(f), 1),
                          e("span", hn, c(Se(i)), 1),
                          e("span", {
                            class: "di-rename-btn",
                            onClick: (p) => Ke("tab:" + f, String(f), p),
                            title: "名前変更"
                          }, "✏", 8, yn)
                        ], 42, fn)),
                        ne.value[f] ? (n(), s("div", gn, [
                          i.elements.length > 0 ? (n(), s("div", kn, [
                            (n(!0), s(M, null, D(i.elements, (p) => (n(), s("div", {
                              key: p.id,
                              class: L(["di-element-item", { "di-element-item-active": d(r).hoveredSelector === p.id, "di-dragging": Fe.value === p.id }]),
                              draggable: "true",
                              onDragstart: (T) => X(T, p.id),
                              onDragend: ve,
                              onClick: (T) => d(r).startEditing(p.id),
                              onMouseenter: (T) => ge(p.id),
                              onMouseleave: a
                            }, [
                              e("span", {
                                class: L(["di-element-type-badge", "di-element-type-" + (p.type || "other")])
                              }, c(p.type === "datasource" ? "DB" : p.type === "action" ? "Act" : p.type === "form" ? "Form" : p.type === "chart" ? "Chart" : "-"), 3),
                              e("div", wn, [
                                e("div", Cn, c(p.desc), 1)
                              ]),
                              e("button", {
                                class: "di-element-delete-btn",
                                onClick: de((T) => d(r).deleteElementConfig(p.id), ["stop"]),
                                title: "削除"
                              }, "×", 8, $n)
                            ], 42, xn))), 128))
                          ])) : v("", !0),
                          Object.keys(i.children).length > 0 ? (n(), s("div", _n, [
                            (n(!0), s(M, null, D(i.children, (p, T) => (n(), s("div", {
                              key: "t2-" + T,
                              class: "di-tree-subgroup"
                            }, [
                              lt.value === "tab:" + f + " > " + T ? (n(), s("div", Tn, [
                                l[80] || (l[80] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                                h(e("input", {
                                  class: "di-rename-input",
                                  "onUpdate:modelValue": l[14] || (l[14] = ($) => pe.value = $),
                                  onKeydown: ($) => at($, "tab:" + f + " > " + T),
                                  onBlur: ($) => yt("tab:" + f + " > " + T),
                                  autofocus: ""
                                }, null, 40, In), [
                                  [w, pe.value]
                                ])
                              ])) : (n(), s("button", {
                                key: 1,
                                class: L(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": fe.value === "tab:" + f + " > " + T }]),
                                onClick: ($) => ne.value[f + ">" + T] = !ne.value[f + ">" + T],
                                onDragover: ($) => ze($, "tab:" + f + " > " + T),
                                onDragleave: ($) => Ve($, "tab:" + f + " > " + T),
                                onDrop: ($) => Ie($, "tab:" + f + " > " + T)
                              }, [
                                e("span", Sn, c(ne.value[f + ">" + T] ? "▼" : "▶"), 1),
                                l[81] || (l[81] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                                e("span", null, c(T), 1),
                                e("span", Un, c(Se(p)), 1),
                                e("span", {
                                  class: "di-rename-btn",
                                  onClick: ($) => Ke("tab:" + f + " > " + T, String(T), $),
                                  title: "名前変更"
                                }, "✏", 8, Dn)
                              ], 42, Mn)),
                              ne.value[f + ">" + T] ? (n(), s("div", Vn, [
                                p.elements.length > 0 ? (n(), s("div", En, [
                                  (n(!0), s(M, null, D(p.elements, ($) => (n(), s("div", {
                                    key: $.id,
                                    class: L(["di-element-item", { "di-element-item-active": d(r).hoveredSelector === $.id, "di-dragging": Fe.value === $.id }]),
                                    draggable: "true",
                                    onDragstart: (ae) => X(ae, $.id),
                                    onDragend: ve,
                                    onClick: (ae) => d(r).startEditing($.id),
                                    onMouseenter: (ae) => ge($.id),
                                    onMouseleave: a
                                  }, [
                                    e("span", {
                                      class: L(["di-element-type-badge", "di-element-type-" + ($.type || "other")])
                                    }, c($.type === "datasource" ? "DB" : $.type === "action" ? "Act" : $.type === "form" ? "Form" : $.type === "chart" ? "Chart" : "-"), 3),
                                    e("div", Bn, [
                                      e("div", An, c($.desc), 1)
                                    ]),
                                    e("button", {
                                      class: "di-element-delete-btn",
                                      onClick: de((ae) => d(r).deleteElementConfig($.id), ["stop"]),
                                      title: "削除"
                                    }, "×", 8, Ln)
                                  ], 42, Pn))), 128))
                                ])) : v("", !0),
                                Object.keys(p.children).length > 0 ? (n(), s("div", Fn, [
                                  (n(!0), s(M, null, D(p.children, ($, ae) => (n(), s("div", {
                                    key: "t3-" + ae,
                                    class: "di-tree-subgroup"
                                  }, [
                                    lt.value === "tab:" + f + " > " + T + " > " + ae ? (n(), s("div", On, [
                                      l[82] || (l[82] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                                      h(e("input", {
                                        class: "di-rename-input",
                                        "onUpdate:modelValue": l[15] || (l[15] = (oe) => pe.value = oe),
                                        onKeydown: (oe) => at(oe, "tab:" + f + " > " + T + " > " + ae),
                                        onBlur: (oe) => yt("tab:" + f + " > " + T + " > " + ae),
                                        autofocus: ""
                                      }, null, 40, jn), [
                                        [w, pe.value]
                                      ])
                                    ])) : (n(), s("button", {
                                      key: 1,
                                      class: L(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": fe.value === "tab:" + f + " > " + T + " > " + ae }]),
                                      onClick: (oe) => ne.value[f + ">" + T + ">" + ae] = !ne.value[f + ">" + T + ">" + ae],
                                      onDragover: (oe) => ze(oe, "tab:" + f + " > " + T + " > " + ae),
                                      onDragleave: (oe) => Ve(oe, "tab:" + f + " > " + T + " > " + ae),
                                      onDrop: (oe) => Ie(oe, "tab:" + f + " > " + T + " > " + ae)
                                    }, [
                                      e("span", Hn, c(ne.value[f + ">" + T + ">" + ae] ? "▼" : "▶"), 1),
                                      l[83] || (l[83] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                                      e("span", null, c(ae), 1),
                                      e("span", Rn, c(Se($)), 1),
                                      e("span", {
                                        class: "di-rename-btn",
                                        onClick: (oe) => Ke("tab:" + f + " > " + T + " > " + ae, String(ae), oe),
                                        title: "名前変更"
                                      }, "✏", 8, zn)
                                    ], 42, qn)),
                                    ne.value[f + ">" + T + ">" + ae] ? (n(), s("div", Kn, [
                                      $.elements.length > 0 ? (n(), s("div", Gn, [
                                        (n(!0), s(M, null, D($.elements, (oe) => (n(), s("div", {
                                          key: oe.id,
                                          class: L(["di-element-item", { "di-element-item-active": d(r).hoveredSelector === oe.id, "di-dragging": Fe.value === oe.id }]),
                                          draggable: "true",
                                          onDragstart: (Tt) => X(Tt, oe.id),
                                          onDragend: ve,
                                          onClick: (Tt) => d(r).startEditing(oe.id),
                                          onMouseenter: (Tt) => ge(oe.id),
                                          onMouseleave: a
                                        }, [
                                          e("span", {
                                            class: L(["di-element-type-badge", "di-element-type-" + (oe.type || "other")])
                                          }, c(oe.type === "datasource" ? "DB" : oe.type === "action" ? "Act" : oe.type === "form" ? "Form" : oe.type === "chart" ? "Chart" : "-"), 3),
                                          e("div", Xn, [
                                            e("div", Wn, c(oe.desc), 1)
                                          ]),
                                          e("button", {
                                            class: "di-element-delete-btn",
                                            onClick: de((Tt) => d(r).deleteElementConfig(oe.id), ["stop"]),
                                            title: "削除"
                                          }, "×", 8, Zn)
                                        ], 42, Yn))), 128))
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
                  qe.value.length > 0 || Fe.value && ((F = fe.value) != null && F.startsWith("modal:") || fe.value === "__modal_unnamed__") ? (n(), s("div", Jn, [
                    e("button", {
                      class: "di-tree-group-header",
                      onClick: l[16] || (l[16] = (i) => j.value = !j.value)
                    }, [
                      e("span", Qn, c(j.value ? "▼" : "▶"), 1),
                      l[84] || (l[84] = e("span", null, "モーダル", -1)),
                      e("span", Nn, c(qe.value.length), 1)
                    ]),
                    j.value ? (n(), s("div", es, [
                      (n(!0), s(M, null, D(B.value, (i, f) => (n(), s("div", {
                        key: "m1-" + f,
                        class: "di-tree-subgroup"
                      }, [
                        lt.value === "modal:" + f ? (n(), s("div", ts, [
                          l[85] || (l[85] = e("span", { class: "di-tree-badge di-tree-badge-modal" }, "M", -1)),
                          h(e("input", {
                            class: "di-rename-input",
                            "onUpdate:modelValue": l[17] || (l[17] = (p) => pe.value = p),
                            onKeydown: (p) => at(p, "modal:" + f),
                            onBlur: (p) => yt("modal:" + f),
                            autofocus: ""
                          }, null, 40, ls), [
                            [w, pe.value]
                          ])
                        ])) : (n(), s("button", {
                          key: 1,
                          class: L(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": fe.value === "modal:" + f }]),
                          onClick: (p) => z.value[String(f)] = !z.value[String(f)],
                          onDragover: (p) => ze(p, "modal:" + f),
                          onDragleave: (p) => Ve(p, "modal:" + f),
                          onDrop: (p) => Ie(p, "modal:" + f)
                        }, [
                          e("span", ns, c(z.value[String(f)] ? "▼" : "▶"), 1),
                          l[86] || (l[86] = e("span", { class: "di-tree-badge di-tree-badge-modal" }, "M", -1)),
                          e("span", null, c(f), 1),
                          e("span", ss, c(Se(i)), 1),
                          e("span", {
                            class: "di-rename-btn",
                            onClick: (p) => Ke("modal:" + f, String(f), p),
                            title: "名前変更"
                          }, "✏", 8, is)
                        ], 42, os)),
                        z.value[String(f)] ? (n(), s("div", as, [
                          i.elements.length > 0 ? (n(), s("div", ds, [
                            (n(!0), s(M, null, D(i.elements, (p) => (n(), s("div", {
                              key: p.id,
                              class: L(["di-element-item", { "di-element-item-active": d(r).hoveredSelector === p.id, "di-dragging": Fe.value === p.id }]),
                              draggable: "true",
                              onDragstart: (T) => X(T, p.id),
                              onDragend: ve,
                              onClick: (T) => d(r).startEditing(p.id),
                              onMouseenter: (T) => ge(p.id),
                              onMouseleave: a
                            }, [
                              e("span", {
                                class: L(["di-element-type-badge", "di-element-type-" + (p.type || "other")])
                              }, c(p.type === "datasource" ? "DB" : p.type === "action" ? "Act" : p.type === "form" ? "Form" : p.type === "chart" ? "Chart" : "-"), 3),
                              e("div", rs, [
                                e("div", cs, c(p.desc), 1)
                              ]),
                              e("button", {
                                class: "di-element-delete-btn",
                                onClick: de((T) => d(r).deleteElementConfig(p.id), ["stop"]),
                                title: "削除"
                              }, "×", 8, vs)
                            ], 42, us))), 128))
                          ])) : v("", !0),
                          Object.keys(i.children).length > 0 ? (n(), s("div", ps, [
                            (n(!0), s(M, null, D(i.children, (p, T) => (n(), s("div", {
                              key: "m2-" + T,
                              class: "di-tree-subgroup"
                            }, [
                              lt.value === "modal:" + f + " > " + T ? (n(), s("div", ms, [
                                l[87] || (l[87] = e("span", { class: "di-tree-badge di-tree-badge-modal" }, "M", -1)),
                                h(e("input", {
                                  class: "di-rename-input",
                                  "onUpdate:modelValue": l[18] || (l[18] = ($) => pe.value = $),
                                  onKeydown: ($) => at($, "modal:" + f + " > " + T),
                                  onBlur: ($) => yt("modal:" + f + " > " + T),
                                  autofocus: ""
                                }, null, 40, fs), [
                                  [w, pe.value]
                                ])
                              ])) : (n(), s("button", {
                                key: 1,
                                class: L(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": fe.value === "modal:" + f + " > " + T }]),
                                onClick: ($) => z.value[f + ">" + T] = !z.value[f + ">" + T],
                                onDragover: ($) => ze($, "modal:" + f + " > " + T),
                                onDragleave: ($) => Ve($, "modal:" + f + " > " + T),
                                onDrop: ($) => Ie($, "modal:" + f + " > " + T)
                              }, [
                                e("span", hs, c(z.value[f + ">" + T] ? "▼" : "▶"), 1),
                                l[88] || (l[88] = e("span", { class: "di-tree-badge di-tree-badge-modal" }, "M", -1)),
                                e("span", null, c(T), 1),
                                e("span", ys, c(Se(p)), 1),
                                e("span", {
                                  class: "di-rename-btn",
                                  onClick: ($) => Ke("modal:" + f + " > " + T, String(T), $),
                                  title: "名前変更"
                                }, "✏", 8, gs)
                              ], 42, bs)),
                              z.value[f + ">" + T] ? (n(), s("div", ks, [
                                p.elements.length > 0 ? (n(), s("div", xs, [
                                  (n(!0), s(M, null, D(p.elements, ($) => (n(), s("div", {
                                    key: $.id,
                                    class: L(["di-element-item", { "di-element-item-active": d(r).hoveredSelector === $.id, "di-dragging": Fe.value === $.id }]),
                                    draggable: "true",
                                    onDragstart: (ae) => X(ae, $.id),
                                    onDragend: ve,
                                    onClick: (ae) => d(r).startEditing($.id),
                                    onMouseenter: (ae) => ge($.id),
                                    onMouseleave: a
                                  }, [
                                    e("span", {
                                      class: L(["di-element-type-badge", "di-element-type-" + ($.type || "other")])
                                    }, c($.type === "datasource" ? "DB" : $.type === "action" ? "Act" : $.type === "form" ? "Form" : $.type === "chart" ? "Chart" : "-"), 3),
                                    e("div", Cs, [
                                      e("div", $s, c($.desc), 1)
                                    ]),
                                    e("button", {
                                      class: "di-element-delete-btn",
                                      onClick: de((ae) => d(r).deleteElementConfig($.id), ["stop"]),
                                      title: "削除"
                                    }, "×", 8, _s)
                                  ], 42, ws))), 128))
                                ])) : v("", !0)
                              ])) : v("", !0)
                            ]))), 128))
                          ])) : v("", !0)
                        ])) : v("", !0)
                      ]))), 128)),
                      g.value.length > 0 || fe.value === "__modal_unnamed__" ? (n(), s("div", Ts, [
                        P.value === "__unnamed__" ? (n(), s("div", Is, [
                          l[89] || (l[89] = e("span", { class: "di-tree-badge di-tree-badge-modal" }, "M", -1)),
                          h(e("input", {
                            class: "di-rename-input",
                            "onUpdate:modelValue": l[19] || (l[19] = (i) => me.value = i),
                            onKeydown: [
                              Bt(We, ["enter"]),
                              Bt(ke, ["escape"])
                            ],
                            onBlur: We,
                            autofocus: ""
                          }, null, 544), [
                            [w, me.value]
                          ])
                        ])) : (n(), s("button", {
                          key: 1,
                          class: L(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": fe.value === "__modal_unnamed__" }]),
                          onClick: l[21] || (l[21] = (i) => z.value.__unnamed = !z.value.__unnamed),
                          onDragover: l[22] || (l[22] = (i) => ze(i, "__modal_unnamed__")),
                          onDragleave: l[23] || (l[23] = (i) => Ve(i, "__modal_unnamed__")),
                          onDrop: l[24] || (l[24] = (i) => Ie(i, "__modal_unnamed__"))
                        }, [
                          e("span", Ms, c(z.value.__unnamed ? "▼" : "▶"), 1),
                          l[90] || (l[90] = e("span", { class: "di-tree-badge di-tree-badge-modal" }, "M", -1)),
                          l[91] || (l[91] = e("span", null, "未分類", -1)),
                          e("span", Ss, c(g.value.length), 1),
                          e("span", {
                            class: "di-rename-btn",
                            onClick: l[20] || (l[20] = de((i) => Oe("__unnamed__"), ["stop"])),
                            title: "モーダル名を設定"
                          }, "✏")
                        ], 34)),
                        z.value.__unnamed ? (n(), s("div", Us, [
                          (n(!0), s(M, null, D(g.value, (i) => (n(), s("div", {
                            key: i.id,
                            class: L(["di-element-item", { "di-element-item-active": d(r).hoveredSelector === i.id, "di-dragging": Fe.value === i.id }]),
                            draggable: "true",
                            onDragstart: (f) => X(f, i.id),
                            onDragend: ve,
                            onClick: (f) => d(r).startEditing(i.id),
                            onMouseenter: (f) => ge(i.id),
                            onMouseleave: a
                          }, [
                            e("span", {
                              class: L(["di-element-type-badge", "di-element-type-" + (i.type || "other")])
                            }, c(i.type === "datasource" ? "DB" : i.type === "action" ? "Act" : i.type === "form" ? "Form" : i.type === "chart" ? "Chart" : "-"), 3),
                            e("div", Vs, [
                              e("div", Es, c(i.desc), 1)
                            ]),
                            e("button", {
                              class: "di-element-delete-btn",
                              onClick: de((f) => d(r).deleteElementConfig(i.id), ["stop"]),
                              title: "削除"
                            }, "×", 8, Ps)
                          ], 42, Ds))), 128))
                        ])) : v("", !0)
                      ])) : v("", !0)
                    ])) : v("", !0)
                  ])) : v("", !0)
                ])
              ])) : v("", !0),
              e("button", {
                onClick: Le,
                class: L(["di-unannotated-btn", { active: d(r).showUnannotatedDetection }])
              }, [
                I(d(go), { style: { width: "14px", height: "14px" } }),
                e("span", null, c(d(r).showUnannotatedDetection ? "未登録検出 ON" : "未登録要素を検出"), 1),
                d(r).unannotatedElements.length > 0 ? (n(), s("span", Bs, c(d(r).unannotatedElements.length), 1)) : v("", !0)
              ], 2),
              d(r).showUnannotatedDetection && d(r).unannotatedElements.length > 0 ? (n(), s("div", As, [
                e("div", Ls, [
                  O(c(d(r).unannotatedElements.length) + "件検出: ", 1),
                  ce.value.binding > 0 ? (n(), s("span", Fs, "バインディング " + c(ce.value.binding), 1)) : v("", !0),
                  ce.value.form > 0 ? (n(), s("span", Os, " / フォーム " + c(ce.value.form), 1)) : v("", !0),
                  ce.value.action > 0 ? (n(), s("span", js, " / アクション " + c(ce.value.action), 1)) : v("", !0)
                ]),
                e("div", qs, [
                  (n(!0), s(M, null, D(d(r).unannotatedElements, (i) => (n(), s("div", {
                    key: i.selector,
                    class: L(["di-unannotated-item", { "di-unannotated-item-active": d(r).hoveredUnannotatedSelector === i.selector, ["di-unannotated-item-" + i.category]: d(r).hoveredUnannotatedSelector === i.selector }]),
                    onMouseenter: (f) => mt(i.selector),
                    onMouseleave: gt
                  }, [
                    e("span", {
                      class: L(["di-unannotated-category", "di-unannotated-cat-" + i.category])
                    }, c(i.category === "binding" ? "DB" : i.category === "form" ? "Form" : "Act"), 3),
                    e("span", Rs, c(i.text || i.tagName), 1),
                    e("button", {
                      onClick: (f) => d(r).quickAnnotate(i.selector, i.suggestedType),
                      class: "di-unannotated-register"
                    }, " 登録 ", 8, zs),
                    e("button", {
                      onClick: (f) => pt(i.selector),
                      class: "di-unannotated-dismiss"
                    }, [
                      I(d(xt), { style: { width: "10px", height: "10px" } })
                    ], 8, Ks)
                  ], 42, Hs))), 128))
                ])
              ])) : v("", !0),
              d(r).showUnannotatedDetection && d(r).unannotatedElements.length === 0 ? (n(), s("div", Gs, " 未登録の要素はありません ")) : v("", !0),
              Je.value > 0 ? (n(), s("div", Ys, [
                e("div", Xs, [
                  I(d(fo), { style: { width: "14px", height: "14px", color: "#f59e0b" } }),
                  e("span", null, c(Je.value) + "件のメモが見つかりません", 1)
                ]),
                l[94] || (l[94] = e("div", { class: "di-broken-desc" }, "コード変更によりセレクタが壊れた可能性があります", -1)),
                e("div", Ws, [
                  (n(!0), s(M, null, D(d(r).brokenAnnotations, (i) => {
                    var f, p;
                    return n(), s("div", {
                      key: i,
                      class: "di-broken-item"
                    }, [
                      e("div", Zs, [
                        e("div", Js, c(((p = (f = d(r).elementConfigs[i]) == null ? void 0 : f.note) == null ? void 0 : p.text) || "(メモなし)"), 1),
                        e("div", Qs, c(i), 1)
                      ]),
                      e("div", Ns, [
                        e("button", {
                          onClick: (T) => d(r).startRemap(i),
                          class: "di-broken-remap-btn",
                          title: "新しい要素に再設定"
                        }, [
                          I(d(_l), { style: { width: "12px", height: "12px" } }),
                          l[92] || (l[92] = O(" 再設定 ", -1))
                        ], 8, ei),
                        e("button", {
                          onClick: (T) => {
                            d(r).deleteElementConfig(i), d(r).detectBrokenAnnotations();
                          },
                          class: "di-broken-item-delete",
                          title: "削除"
                        }, [
                          I(d(Rt), { style: { width: "12px", height: "12px" } })
                        ], 8, ti)
                      ])
                    ]);
                  }), 128))
                ]),
                e("div", li, [
                  e("button", {
                    onClick: nt,
                    class: "di-broken-delete-btn"
                  }, [
                    I(d(Rt), { style: { width: "12px", height: "12px" } }),
                    l[93] || (l[93] = O(" まとめて削除 ", -1))
                  ])
                ])
              ])) : v("", !0),
              v("", !0)
            ], 512), [
              [jt, V.value === "elements"]
            ]),
            e("div", oi, [
              h(e("div", null, [
                le.value ? (n(), s(M, { key: 0 }, [
                  e("div", ni, [
                    e("div", si, [
                      e("h2", ii, c(le.value.name), 1),
                      e("button", {
                        onClick: l[27] || (l[27] = (i) => d(r).editingScreen = !0),
                        class: "di-screen-edit-btn",
                        title: "画面情報を編集"
                      }, [
                        I(d(Il), { style: { width: "14px", height: "14px" } })
                      ])
                    ]),
                    le.value.description ? (n(), s("p", ai, c(le.value.description), 1)) : v("", !0),
                    le.value.auth ? (n(), s("div", di, [
                      le.value.auth.required ? (n(), s("span", ui, [
                        I(d(To), { style: { width: "11px", height: "11px" } }),
                        l[104] || (l[104] = O(" ログイン必須 ", -1))
                      ])) : v("", !0),
                      (n(!0), s(M, null, D(le.value.auth.roles || [], (i) => (n(), s("span", {
                        key: i,
                        class: "di-auth-badge di-auth-role"
                      }, [
                        I(d(Vo), { style: { width: "11px", height: "11px" } }),
                        O(" " + c(i), 1)
                      ]))), 128)),
                      le.value.auth.description ? (n(), s("span", ri, c(le.value.auth.description), 1)) : v("", !0)
                    ])) : v("", !0)
                  ]),
                  le.value.componentPath ? (n(), s("div", ci, [
                    e("div", vi, [
                      I(d(Cl), { style: { width: "16px", height: "16px" } }),
                      l[105] || (l[105] = e("span", null, "Component Path", -1))
                    ]),
                    e("code", pi, c(le.value.componentPath), 1)
                  ])) : v("", !0),
                  le.value.figmaUrl ? (n(), s("div", mi, [
                    e("div", fi, [
                      I(d(ko), { style: { width: "16px", height: "16px" } }),
                      l[106] || (l[106] = e("span", null, "Figma Design", -1))
                    ]),
                    e("a", {
                      href: le.value.figmaUrl,
                      target: "_blank",
                      class: "di-link-purple"
                    }, c(le.value.figmaUrl), 9, bi)
                  ])) : v("", !0),
                  le.value.apis.length ? (n(), s("div", hi, [
                    e("div", yi, [
                      I(d(Do), { style: { width: "16px", height: "16px" } }),
                      l[107] || (l[107] = e("span", null, "API Endpoints", -1))
                    ]),
                    e("div", gi, [
                      (n(!0), s(M, null, D(le.value.apis, (i, f) => (n(), s("div", {
                        key: f,
                        class: "di-api-item"
                      }, [
                        e("span", {
                          class: "di-method-badge",
                          style: dt({ backgroundColor: we[i.method] + "20", color: we[i.method] })
                        }, c(i.method), 5),
                        e("div", ki, [
                          e("code", xi, c(i.endpoint), 1),
                          i.description ? (n(), s("p", wi, c(i.description), 1)) : v("", !0)
                        ]),
                        i.loadTiming ? (n(), s("span", Ci, c(i.loadTiming === "onMount" ? "読込時" : i.loadTiming === "action" ? "アクション" : "条件付き"), 1)) : v("", !0)
                      ]))), 128))
                    ])
                  ])) : v("", !0),
                  le.value.notes ? (n(), s("div", $i, [
                    e("div", _i, [
                      I(d(mo), { style: { width: "16px", height: "16px" } }),
                      l[108] || (l[108] = e("span", null, "Notes", -1))
                    ]),
                    e("p", Ti, c(le.value.notes), 1)
                  ])) : v("", !0)
                ], 64)) : (n(), s("div", Ii, [
                  I(d(Jt), { style: { width: "48px", height: "48px", color: "#334155" } }),
                  l[110] || (l[110] = e("p", null, [
                    O("この画面の仕様情報は"),
                    e("br"),
                    O("まだ登録されていません")
                  ], -1)),
                  e("button", {
                    onClick: l[28] || (l[28] = (i) => d(r).editingScreen = !0),
                    class: "di-screen-register-btn"
                  }, [
                    I(d(Il), { style: { width: "14px", height: "14px" } }),
                    l[109] || (l[109] = O(" 画面情報を登録 ", -1))
                  ])
                ])),
                e("div", Mi, [
                  e("div", Si, [
                    I(d(Uo), { style: { width: "14px", height: "14px", color: "#94a3b8" } }),
                    l[111] || (l[111] = e("span", null, "横断検索", -1))
                  ]),
                  l[112] || (l[112] = e("div", { class: "di-cross-search-desc" }, "全画面のメモを横断検索。カラム名・APIエンドポイント・メモ内テキストで絞り込めます。", -1)),
                  e("div", Ui, [
                    e("div", Di, [
                      (n(), s(M, null, D(tt, (i) => e("button", {
                        key: i.value,
                        onClick: (f) => d(r).crossSearchMode = i.value,
                        class: L(["di-filter-btn", { active: d(r).crossSearchMode === i.value }])
                      }, c(i.label), 11, Vi)), 64))
                    ]),
                    h(e("input", {
                      "onUpdate:modelValue": l[29] || (l[29] = (i) => d(r).crossSearchQuery = i),
                      type: "text",
                      class: "di-cross-search-input",
                      placeholder: $t.value
                    }, null, 8, Ei), [
                      [w, d(r).crossSearchQuery]
                    ]),
                    d(r).crossSearchQuery.trim() ? (n(), s("div", Pi, c(d(r).crossSearchResults.length) + "件 (" + c(De.value) + "画面) ", 1)) : v("", !0),
                    Y.value.length > 0 ? (n(), s("div", Bi, [
                      (n(!0), s(M, null, D(Y.value, (i) => (n(), s("div", {
                        key: i.pagePath,
                        class: "di-cross-search-group"
                      }, [
                        e("div", Ai, [
                          O(c(i.pagePath) + " ", 1),
                          i.pageName !== i.pagePath ? (n(), s("span", Li, "(" + c(i.pageName) + ")", 1)) : v("", !0)
                        ]),
                        (n(!0), s(M, null, D(i.items, (f, p) => (n(), s("div", {
                          key: p,
                          class: L(["di-cross-search-item", f.elementType ? "di-cross-item-" + f.elementType : ""]),
                          onClick: (T) => f.selector && d(r).startEditing(f.selector)
                        }, [
                          e("span", Oi, c(f.matchedField), 1),
                          f.matchContext ? (n(), s("span", ji, c(f.matchContext), 1)) : v("", !0)
                        ], 10, Fi))), 128))
                      ]))), 128))
                    ])) : v("", !0)
                  ])
                ]),
                e("div", qi, [
                  e("button", {
                    onClick: l[30] || (l[30] = (i) => d(r).showScreenFlow = !d(r).showScreenFlow),
                    class: L(["di-screen-flow-toggle", { active: d(r).showScreenFlow }])
                  }, [
                    I(d(_o), { style: { width: "14px", height: "14px" } }),
                    l[113] || (l[113] = e("span", null, "画面フロー", -1)),
                    d(r).screenFlowData.edges.length > 0 ? (n(), s("span", Hi, c(d(r).screenFlowData.nodes.length) + "画面 / " + c(d(r).screenFlowData.edges.length) + "遷移 ", 1)) : v("", !0)
                  ], 2),
                  d(r).showScreenFlow ? (n(), s("div", Ri, [
                    d(r).screenFlowData.edges.length === 0 ? (n(), s("div", zi, " navigate型のアクションが登録されていません ")) : v("", !0),
                    (n(!0), s(M, null, D(ht.value, (i) => (n(), s("div", {
                      key: i.node.path,
                      class: "di-flow-group"
                    }, [
                      e("div", {
                        class: L(["di-flow-node", { "di-flow-node-current": i.node.path === ie.value }])
                      }, [
                        e("span", Ki, c(i.node.path), 1),
                        i.node.name !== i.node.path ? (n(), s("span", Gi, "(" + c(i.node.name) + ")", 1)) : v("", !0)
                      ], 2),
                      (n(!0), s(M, null, D(i.edges, (f) => (n(), s("div", {
                        key: f.from + f.to,
                        class: "di-flow-edge",
                        onClick: (p) => Vt(f.selector)
                      }, [
                        l[114] || (l[114] = e("span", { class: "di-flow-arrow" }, "→", -1)),
                        e("span", Xi, c(f.to), 1),
                        f.label ? (n(), s("span", Wi, "[" + c(f.label) + "]", 1)) : v("", !0)
                      ], 8, Yi))), 128))
                    ]))), 128)),
                    d(r).screenFlowData.orphanPages.length > 0 ? (n(), s("div", Zi, [
                      l[115] || (l[115] = e("div", { class: "di-flow-orphans-header" }, "遷移なしのページ", -1)),
                      (n(!0), s(M, null, D(d(r).screenFlowData.orphanPages, (i) => (n(), s("span", {
                        key: i.path,
                        class: "di-flow-orphan-item"
                      }, c(i.path), 1))), 128))
                    ])) : v("", !0)
                  ])) : v("", !0)
                ])
              ], 512), [
                [jt, V.value === "elements"]
              ]),
              h(e("div", null, [
                e("div", Ji, [
                  e("div", Qi, [
                    I(d(Mt), { style: { width: "16px", height: "16px", color: "#a78bfa" } }),
                    l[116] || (l[116] = e("span", null, "マスタ定義", -1)),
                    Be.value > 0 ? (n(), s("span", Ni, c(Be.value), 1)) : v("", !0),
                    e("button", {
                      onClick: l[31] || (l[31] = (i) => Qe()),
                      class: "di-btn-icon",
                      style: { "margin-left": "auto" },
                      title: "新規追加"
                    }, [
                      I(d(qt), { style: { width: "14px", height: "14px" } })
                    ])
                  ]),
                  Be.value > 0 ? (n(!0), s(M, { key: 0 }, D(ut.value, (i, f) => (n(), s("div", {
                    key: f,
                    class: "di-master-table-group"
                  }, [
                    e("div", ea, c(f), 1),
                    (n(!0), s(M, null, D(i, (p) => (n(), s("div", {
                      key: p.id,
                      class: "di-master-item",
                      onClick: (T) => Qe(p.id)
                    }, [
                      e("div", la, [
                        e("span", oa, "." + c(p.column), 1),
                        p.columnType ? (n(), s("span", na, c(p.columnType), 1)) : v("", !0),
                        e("span", sa, c(p.name), 1)
                      ]),
                      e("div", ia, [
                        (n(!0), s(M, null, D(p.entries.slice(0, 5), (T, $) => (n(), s("span", {
                          key: $,
                          class: "di-master-entry-chip",
                          style: dt(T.color ? { borderColor: T.color, color: T.color } : {})
                        }, c(T.value) + "=" + c(T.label), 5))), 128)),
                        p.entries.length > 5 ? (n(), s("span", aa, "+" + c(p.entries.length - 5), 1)) : v("", !0)
                      ])
                    ], 8, ta))), 128))
                  ]))), 128)) : (n(), s("div", {
                    key: 1,
                    class: "di-master-empty",
                    onClick: l[32] || (l[32] = (i) => Qe())
                  }, [...l[117] || (l[117] = [
                    e("span", null, "テーブル.カラムのマスタ値を定義", -1)
                  ])]))
                ]),
                (n(), ft(wt, { to: d(k) }, [
                  Ye.value ? (n(), s("div", {
                    key: 0,
                    "data-dev-inspector": "",
                    class: "di-modal-overlay",
                    onClick: l[41] || (l[41] = de((i) => Ye.value = !1, ["self"]))
                  }, [
                    e("div", da, [
                      e("div", ua, [
                        e("h3", null, c(He.value ? "マスタ定義を編集" : "新規マスタ定義"), 1),
                        e("button", {
                          onClick: l[33] || (l[33] = (i) => Ye.value = !1),
                          class: "di-close-btn"
                        }, [
                          I(d(xt), { style: { width: "16px", height: "16px" } })
                        ])
                      ]),
                      e("div", ra, [
                        e("div", ca, [
                          e("div", va, [
                            l[118] || (l[118] = e("label", null, "テーブル", -1)),
                            h(e("input", {
                              "onUpdate:modelValue": l[34] || (l[34] = (i) => Q.value.table = i),
                              placeholder: "orders",
                              disabled: !!He.value
                            }, null, 8, pa), [
                              [w, Q.value.table]
                            ])
                          ]),
                          e("div", ma, [
                            l[119] || (l[119] = e("label", null, "カラム", -1)),
                            h(e("input", {
                              "onUpdate:modelValue": l[35] || (l[35] = (i) => Q.value.column = i),
                              placeholder: "status",
                              disabled: !!He.value
                            }, null, 8, fa), [
                              [w, Q.value.column]
                            ])
                          ])
                        ]),
                        e("div", ba, [
                          e("div", ha, [
                            l[120] || (l[120] = e("label", null, "表示名", -1)),
                            h(e("input", {
                              "onUpdate:modelValue": l[36] || (l[36] = (i) => Q.value.name = i),
                              placeholder: "ステータス"
                            }, null, 512), [
                              [w, Q.value.name]
                            ])
                          ]),
                          e("div", ya, [
                            l[121] || (l[121] = e("label", null, "型", -1)),
                            h(e("input", {
                              "onUpdate:modelValue": l[37] || (l[37] = (i) => Q.value.columnType = i),
                              placeholder: "integer"
                            }, null, 512), [
                              [w, Q.value.columnType]
                            ])
                          ])
                        ]),
                        e("div", ga, [
                          l[122] || (l[122] = e("label", null, "説明", -1)),
                          h(e("input", {
                            "onUpdate:modelValue": l[38] || (l[38] = (i) => Q.value.description = i),
                            placeholder: "注文のステータスを管理"
                          }, null, 512), [
                            [w, Q.value.description]
                          ])
                        ]),
                        e("div", ka, [
                          l[123] || (l[123] = e("label", null, "マスタ値", -1)),
                          e("button", {
                            onClick: ct,
                            class: "di-btn-icon",
                            title: "追加"
                          }, [
                            I(d(qt), { style: { width: "14px", height: "14px" } })
                          ])
                        ]),
                        e("div", xa, [
                          (n(!0), s(M, null, D(Q.value.entries, (i, f) => (n(), s("div", {
                            key: f,
                            class: "di-master-entry-row"
                          }, [
                            h(e("input", {
                              "onUpdate:modelValue": (p) => i.value = p,
                              placeholder: "値",
                              class: "di-master-entry-value"
                            }, null, 8, wa), [
                              [w, i.value]
                            ]),
                            h(e("input", {
                              "onUpdate:modelValue": (p) => i.label = p,
                              placeholder: "ラベル",
                              class: "di-master-entry-label"
                            }, null, 8, Ca), [
                              [w, i.label]
                            ]),
                            h(e("input", {
                              "onUpdate:modelValue": (p) => i.color = p,
                              placeholder: "#色",
                              class: "di-master-entry-color"
                            }, null, 8, $a), [
                              [w, i.color]
                            ]),
                            h(e("input", {
                              "onUpdate:modelValue": (p) => i.description = p,
                              placeholder: "説明",
                              class: "di-master-entry-desc"
                            }, null, 8, _a), [
                              [w, i.description]
                            ]),
                            e("button", {
                              onClick: (p) => vt(f),
                              class: "di-btn-icon di-btn-icon-danger"
                            }, [
                              I(d(xt), { style: { width: "12px", height: "12px" } })
                            ], 8, Ta)
                          ]))), 128))
                        ]),
                        e("div", Ia, [
                          l[124] || (l[124] = e("label", null, "状態遷移", -1)),
                          e("button", {
                            onClick: xe,
                            class: "di-btn-icon",
                            title: "遷移を追加"
                          }, [
                            I(d(qt), { style: { width: "14px", height: "14px" } })
                          ])
                        ]),
                        Q.value.transitions.length > 0 ? (n(), s("div", Ma, [
                          l[128] || (l[128] = e("div", { class: "di-transition-header" }, [
                            e("span", { class: "di-transition-col-from" }, "遷移元"),
                            e("span", { class: "di-transition-col-arrow" }, "→"),
                            e("span", { class: "di-transition-col-to" }, "遷移先"),
                            e("span", { class: "di-transition-col-trigger" }, "トリガー"),
                            e("span", { class: "di-transition-col-condition" }, "条件"),
                            e("span", { class: "di-transition-col-act" })
                          ], -1)),
                          (n(!0), s(M, null, D(Q.value.transitions, (i, f) => (n(), s("div", {
                            key: f,
                            class: "di-transition-row"
                          }, [
                            h(e("select", {
                              "onUpdate:modelValue": (p) => i.from = p,
                              class: "di-transition-select di-transition-col-from"
                            }, [
                              l[125] || (l[125] = e("option", { value: "" }, "-", -1)),
                              (n(!0), s(M, null, D(Q.value.entries.filter((p) => p.value), (p) => (n(), s("option", {
                                key: p.value,
                                value: p.value
                              }, c(p.label || p.value), 9, Ua))), 128))
                            ], 8, Sa), [
                              [Me, i.from]
                            ]),
                            l[127] || (l[127] = e("span", { class: "di-transition-col-arrow" }, "→", -1)),
                            h(e("select", {
                              "onUpdate:modelValue": (p) => i.to = p,
                              class: "di-transition-select di-transition-col-to"
                            }, [
                              l[126] || (l[126] = e("option", { value: "" }, "-", -1)),
                              (n(!0), s(M, null, D(Q.value.entries.filter((p) => p.value), (p) => (n(), s("option", {
                                key: p.value,
                                value: p.value
                              }, c(p.label || p.value), 9, Va))), 128))
                            ], 8, Da), [
                              [Me, i.to]
                            ]),
                            h(e("input", {
                              "onUpdate:modelValue": (p) => i.trigger = p,
                              placeholder: "トリガー",
                              class: "di-transition-input di-transition-col-trigger"
                            }, null, 8, Ea), [
                              [w, i.trigger]
                            ]),
                            h(e("input", {
                              "onUpdate:modelValue": (p) => i.condition = p,
                              placeholder: "条件",
                              class: "di-transition-input di-transition-col-condition"
                            }, null, 8, Pa), [
                              [w, i.condition]
                            ]),
                            e("button", {
                              onClick: (p) => Ae(f),
                              class: "di-btn-icon di-btn-icon-danger"
                            }, [
                              I(d(xt), { style: { width: "12px", height: "12px" } })
                            ], 8, Ba)
                          ]))), 128))
                        ])) : (n(), s("div", Aa, " 状態遷移を定義（任意） "))
                      ]),
                      e("div", La, [
                        He.value ? (n(), s("button", {
                          key: 0,
                          onClick: l[39] || (l[39] = (i) => {
                            Ue(He.value), Ye.value = !1;
                          }),
                          class: "di-btn-small di-btn-danger"
                        }, "削除")) : v("", !0),
                        l[129] || (l[129] = e("div", { style: { flex: "1" } }, null, -1)),
                        e("button", {
                          onClick: l[40] || (l[40] = (i) => Ye.value = !1),
                          class: "di-btn-small"
                        }, "キャンセル"),
                        e("button", {
                          onClick: rt,
                          class: "di-btn-small di-btn-primary",
                          disabled: !Q.value.table || !Q.value.column
                        }, "保存", 8, Fa)
                      ])
                    ])
                  ])) : v("", !0)
                ], 8, ["to"]))
              ], 512), [
                [jt, V.value === "masters"]
              ]),
              h(e("div", null, [
                e("div", Oa, [
                  e("div", ja, [
                    I(d(wl), { style: { width: "16px", height: "16px", color: "#f59e0b" } }),
                    l[130] || (l[130] = e("span", null, "バッチ処理", -1)),
                    it.value > 0 ? (n(), s("span", qa, c(it.value), 1)) : v("", !0),
                    e("button", {
                      onClick: l[42] || (l[42] = (i) => Ct()),
                      class: "di-btn-icon",
                      style: { "margin-left": "auto" },
                      title: "新規追加"
                    }, [
                      I(d(qt), { style: { width: "14px", height: "14px" } })
                    ])
                  ]),
                  it.value > 0 ? (n(!0), s(M, { key: 0 }, D(St.value, (i) => (n(), s("div", {
                    key: i.id,
                    class: "di-batch-item",
                    onClick: (f) => Ct(i.id)
                  }, [
                    e("div", Ra, [
                      e("div", za, c(i.name), 1),
                      i.schedule ? (n(), s("div", Ka, c(i.schedule), 1)) : v("", !0)
                    ])
                  ], 8, Ha))), 128)) : (n(), s("div", {
                    key: 1,
                    class: "di-batch-empty",
                    onClick: l[43] || (l[43] = (i) => Ct())
                  }, [...l[131] || (l[131] = [
                    e("span", null, "バッチ処理を定義", -1)
                  ])]))
                ]),
                (n(), ft(wt, { to: d(k) }, [
                  Re.value ? (n(), s("div", {
                    key: 0,
                    "data-dev-inspector": "",
                    class: "di-modal-overlay",
                    onClick: l[59] || (l[59] = de((i) => Re.value = !1, ["self"]))
                  }, [
                    e("div", Ga, [
                      e("div", Ya, [
                        e("h3", null, c(st.value ? "バッチ処理を編集" : "新規バッチ処理"), 1),
                        e("button", {
                          onClick: l[44] || (l[44] = (i) => Re.value = !1),
                          class: "di-close-btn"
                        }, [
                          I(d(xt), { style: { width: "16px", height: "16px" } })
                        ])
                      ]),
                      e("div", Xa, [
                        e("div", Wa, [
                          e("div", Za, [
                            l[132] || (l[132] = e("label", null, "バッチ名 *", -1)),
                            h(e("input", {
                              "onUpdate:modelValue": l[45] || (l[45] = (i) => G.value.name = i),
                              placeholder: "月次レポート生成"
                            }, null, 512), [
                              [w, G.value.name]
                            ])
                          ]),
                          e("div", Ja, [
                            l[133] || (l[133] = e("label", null, "スケジュール", -1)),
                            h(e("input", {
                              "onUpdate:modelValue": l[46] || (l[46] = (i) => G.value.schedule = i),
                              placeholder: "毎月1日 AM2:00"
                            }, null, 512), [
                              [w, G.value.schedule]
                            ])
                          ])
                        ]),
                        e("div", Qa, [
                          e("div", Na, [
                            l[134] || (l[134] = e("label", null, "手動トリガー", -1)),
                            h(e("input", {
                              "onUpdate:modelValue": l[47] || (l[47] = (i) => G.value.trigger = i),
                              placeholder: "管理画面から実行"
                            }, null, 512), [
                              [w, G.value.trigger]
                            ])
                          ])
                        ]),
                        e("div", ed, [
                          l[135] || (l[135] = e("label", null, "説明", -1)),
                          h(e("textarea", {
                            "onUpdate:modelValue": l[48] || (l[48] = (i) => G.value.description = i),
                            rows: "2",
                            placeholder: "バッチ処理の概要..."
                          }, null, 512), [
                            [w, G.value.description]
                          ])
                        ]),
                        l[145] || (l[145] = e("div", { class: "di-batch-section-label" }, "入出力テーブル", -1)),
                        e("div", td, [
                          e("div", ld, [
                            l[136] || (l[136] = e("label", null, "入力テーブル", -1)),
                            e("div", od, [
                              (n(!0), s(M, null, D(G.value.inputTables, (i, f) => (n(), s("span", {
                                key: f,
                                class: "di-batch-tag"
                              }, [
                                O(c(i) + " ", 1),
                                e("button", {
                                  onClick: (p) => Ot(f),
                                  class: "di-batch-tag-remove"
                                }, "×", 8, nd)
                              ]))), 128)),
                              h(e("input", {
                                "onUpdate:modelValue": l[49] || (l[49] = (i) => Ne.value = i),
                                onKeydown: l[50] || (l[50] = Bt(de((i) => Ft(), ["prevent"]), ["enter"])),
                                type: "text",
                                placeholder: "テーブル名",
                                class: "di-batch-tag-input"
                              }, null, 544), [
                                [w, Ne.value]
                              ])
                            ])
                          ]),
                          e("div", sd, [
                            l[137] || (l[137] = e("label", null, "出力テーブル", -1)),
                            e("div", id, [
                              (n(!0), s(M, null, D(G.value.outputTables, (i, f) => (n(), s("span", {
                                key: f,
                                class: "di-batch-tag"
                              }, [
                                O(c(i) + " ", 1),
                                e("button", {
                                  onClick: (p) => Xe(f),
                                  class: "di-batch-tag-remove"
                                }, "×", 8, ad)
                              ]))), 128)),
                              h(e("input", {
                                "onUpdate:modelValue": l[51] || (l[51] = (i) => bt.value = i),
                                onKeydown: l[52] || (l[52] = Bt(de((i) => et(), ["prevent"]), ["enter"])),
                                type: "text",
                                placeholder: "テーブル名",
                                class: "di-batch-tag-input"
                              }, null, 544), [
                                [w, bt.value]
                              ])
                            ])
                          ])
                        ]),
                        e("div", dd, [
                          l[138] || (l[138] = O(" 処理ステップ ", -1)),
                          e("button", {
                            onClick: Dt,
                            class: "di-btn-icon",
                            style: { "margin-left": "auto" },
                            title: "ステップ追加"
                          }, [
                            I(d(qt), { style: { width: "14px", height: "14px" } })
                          ])
                        ]),
                        G.value.steps.length > 0 ? (n(), s("div", ud, [
                          l[140] || (l[140] = e("div", { class: "di-batch-steps-header" }, [
                            e("span", { class: "di-batch-step-no" }, "No"),
                            e("span", { class: "di-batch-step-desc" }, "処理内容"),
                            e("span", { class: "di-batch-step-target" }, "対象"),
                            e("span", { class: "di-batch-step-type" }, "種別"),
                            e("span", { class: "di-batch-step-error" }, "エラー処理"),
                            e("span", { class: "di-batch-step-act" })
                          ], -1)),
                          (n(!0), s(M, null, D(G.value.steps, (i, f) => (n(), s("div", {
                            key: f,
                            class: "di-batch-step-row"
                          }, [
                            e("span", rd, c(f + 1), 1),
                            h(e("input", {
                              "onUpdate:modelValue": (p) => i.description = p,
                              placeholder: "処理内容",
                              class: "di-batch-step-input di-batch-step-desc"
                            }, null, 8, cd), [
                              [w, i.description]
                            ]),
                            h(e("input", {
                              "onUpdate:modelValue": (p) => i.target = p,
                              placeholder: "対象テーブル",
                              class: "di-batch-step-input di-batch-step-target"
                            }, null, 8, vd), [
                              [w, i.target]
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
                            ])], 8, pd), [
                              [Me, i.type]
                            ]),
                            h(e("input", {
                              "onUpdate:modelValue": (p) => i.errorHandling = p,
                              placeholder: "エラー時",
                              class: "di-batch-step-input di-batch-step-error"
                            }, null, 8, md), [
                              [w, i.errorHandling]
                            ]),
                            e("button", {
                              onClick: (p) => At(f),
                              class: "di-btn-icon di-btn-icon-danger"
                            }, [
                              I(d(xt), { style: { width: "12px", height: "12px" } })
                            ], 8, fd)
                          ]))), 128))
                        ])) : v("", !0),
                        l[146] || (l[146] = e("div", { class: "di-batch-section-label" }, "運用設定", -1)),
                        e("div", bd, [
                          e("div", hd, [
                            l[141] || (l[141] = e("label", null, "タイムアウト", -1)),
                            h(e("input", {
                              "onUpdate:modelValue": l[53] || (l[53] = (i) => G.value.timeout = i),
                              placeholder: "30分"
                            }, null, 512), [
                              [w, G.value.timeout]
                            ])
                          ]),
                          e("div", yd, [
                            l[142] || (l[142] = e("label", null, "リトライ", -1)),
                            h(e("input", {
                              "onUpdate:modelValue": l[54] || (l[54] = (i) => G.value.retryPolicy = i),
                              placeholder: "3回まで、5分間隔"
                            }, null, 512), [
                              [w, G.value.retryPolicy]
                            ])
                          ])
                        ]),
                        e("div", gd, [
                          e("div", kd, [
                            l[143] || (l[143] = e("label", null, "エラー通知先", -1)),
                            h(e("input", {
                              "onUpdate:modelValue": l[55] || (l[55] = (i) => G.value.notifyOnError = i),
                              placeholder: "admin@example.com"
                            }, null, 512), [
                              [w, G.value.notifyOnError]
                            ])
                          ]),
                          e("div", xd, [
                            l[144] || (l[144] = e("label", null, "完了通知先", -1)),
                            h(e("input", {
                              "onUpdate:modelValue": l[56] || (l[56] = (i) => G.value.notifyOnComplete = i),
                              placeholder: "manager@example.com"
                            }, null, 512), [
                              [w, G.value.notifyOnComplete]
                            ])
                          ])
                        ])
                      ]),
                      e("div", wd, [
                        st.value ? (n(), s("button", {
                          key: 0,
                          onClick: l[57] || (l[57] = (i) => {
                            Lt(st.value), Re.value = !1;
                          }),
                          class: "di-btn-small di-btn-danger"
                        }, "削除")) : v("", !0),
                        l[147] || (l[147] = e("div", { style: { flex: "1" } }, null, -1)),
                        e("button", {
                          onClick: l[58] || (l[58] = (i) => Re.value = !1),
                          class: "di-btn-small"
                        }, "キャンセル"),
                        e("button", {
                          onClick: Ut,
                          class: "di-btn-small di-btn-primary",
                          disabled: !G.value.name
                        }, "保存", 8, Cd)
                      ])
                    ])
                  ])) : v("", !0)
                ], 8, ["to"]))
              ], 512), [
                [jt, V.value === "batches"]
              ]),
              h(e("div", null, [
                e("div", $d, [
                  e("button", {
                    onClick: _,
                    class: "di-btn-green"
                  }, [
                    I(d($o), { style: { width: "16px", height: "16px" } }),
                    l[148] || (l[148] = O(" Git管理用に保存 ", -1))
                  ]),
                  e("button", {
                    onClick: U,
                    class: "di-btn-blue"
                  }, [
                    I(d(Ul), { style: { width: "16px", height: "16px" } }),
                    l[149] || (l[149] = O(" 画面仕様書 (xlsx) 出力 ", -1))
                  ]),
                  e("button", {
                    onClick: l[60] || (l[60] = (i) => d(r).downloadSddSpec()),
                    class: "di-btn-green-outline"
                  }, [
                    I(d(Jt), { style: { width: "16px", height: "16px" } }),
                    l[150] || (l[150] = O(" SDD仕様書 (md) ", -1))
                  ]),
                  e("button", {
                    onClick: l[61] || (l[61] = (i) => d(r).downloadClientSpec()),
                    class: "di-btn-blue-outline"
                  }, [
                    I(d(Jt), { style: { width: "16px", height: "16px" } }),
                    l[151] || (l[151] = O(" 納品用仕様書 (md) ", -1))
                  ])
                ]),
                l[159] || (l[159] = e("p", { class: "di-export-hint" }, [
                  O(" JSON: "),
                  e("code", null, "dev-annotations.json"),
                  O(" に配置してcommit ")
                ], -1)),
                e("div", _d, [
                  e("button", {
                    onClick: l[62] || (l[62] = (i) => q.value = !0),
                    class: "di-btn-small"
                  }, [
                    I(d(ol), { style: { width: "14px", height: "14px" } }),
                    l[152] || (l[152] = O(" エクスポート ", -1))
                  ]),
                  e("button", {
                    onClick: l[63] || (l[63] = (i) => ue.value = !0),
                    class: "di-btn-small"
                  }, [
                    I(d(Po), { style: { width: "14px", height: "14px" } }),
                    l[153] || (l[153] = O(" インポート ", -1))
                  ]),
                  $e.value > 0 ? (n(), s("button", {
                    key: 0,
                    onClick: Ze,
                    class: "di-btn-small di-btn-danger"
                  }, [
                    I(d(Rt), { style: { width: "14px", height: "14px" } }),
                    l[154] || (l[154] = O(" 全削除 ", -1))
                  ])) : v("", !0)
                ]),
                $e.value > 0 || Be.value > 0 || it.value > 0 ? (n(), s("div", Td, [
                  l[158] || (l[158] = e("div", { class: "di-export-summary-title" }, "登録状況", -1)),
                  e("div", Id, [
                    l[155] || (l[155] = e("span", null, "要素設定", -1)),
                    e("span", Md, c($e.value) + "件", 1)
                  ]),
                  e("div", Sd, [
                    l[156] || (l[156] = e("span", null, "マスタ定義", -1)),
                    e("span", Ud, c(Be.value) + "件", 1)
                  ]),
                  e("div", Dd, [
                    l[157] || (l[157] = e("span", null, "バッチ処理", -1)),
                    e("span", Vd, c(it.value) + "件", 1)
                  ])
                ])) : v("", !0)
              ], 512), [
                [jt, V.value === "export"]
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
        ], 8, ["to"])),
        (n(), ft(wt, { to: d(k) }, [
          d(r).isEnabled ? (n(), s("div", Ed, [...l[161] || (l[161] = [
            e("span", { class: "di-indicator-dot" }, null, -1),
            O(" Developer Mode ", -1)
          ])])) : v("", !0)
        ], 8, ["to"])),
        (n(), ft(wt, { to: d(k) }, [
          q.value ? (n(), s("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: l[65] || (l[65] = de((i) => q.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", Pd, [
              l[163] || (l[163] = e("h3", { class: "di-modal-title" }, "設定をエクスポート", -1)),
              e("textarea", {
                readonly: "",
                value: d(r).exportConfigs(),
                class: "di-modal-textarea"
              }, null, 8, Bd),
              e("div", Ad, [
                e("button", {
                  onClick: l[64] || (l[64] = (i) => q.value = !1),
                  class: "di-btn-small"
                }, "閉じる"),
                e("button", {
                  onClick: A,
                  class: "di-btn-small di-btn-gray"
                }, [
                  I(d(ol), { style: { width: "14px", height: "14px" } }),
                  l[162] || (l[162] = O(" ファイル保存 ", -1))
                ]),
                e("button", {
                  onClick: ee,
                  class: "di-btn-small di-btn-primary"
                }, "コピー")
              ])
            ])
          ])) : v("", !0)
        ], 8, ["to"])),
        (n(), ft(wt, { to: d(k) }, [
          ue.value ? (n(), s("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: l[68] || (l[68] = de((i) => ue.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", Ld, [
              l[165] || (l[165] = e("h3", { class: "di-modal-title" }, "設定をインポート", -1)),
              e("label", Fd, [
                e("input", {
                  type: "file",
                  accept: ".json",
                  onChange: J
                }, null, 32),
                l[164] || (l[164] = e("span", null, "JSONファイルをドラッグまたはクリック", -1))
              ]),
              h(e("textarea", {
                "onUpdate:modelValue": l[66] || (l[66] = (i) => te.value = i),
                placeholder: "またはJSONを直接貼り付け...",
                class: "di-modal-textarea di-modal-textarea-input"
              }, null, 512), [
                [w, te.value]
              ]),
              re.value ? (n(), s("p", Od, c(re.value), 1)) : v("", !0),
              e("div", jd, [
                e("button", {
                  onClick: l[67] || (l[67] = (i) => {
                    ue.value = !1, te.value = "", re.value = "";
                  }),
                  class: "di-btn-small"
                }, " キャンセル "),
                e("button", {
                  onClick: Te,
                  disabled: !te.value,
                  class: "di-btn-small di-btn-primary"
                }, " インポート ", 8, qd)
              ])
            ])
          ])) : v("", !0)
        ], 8, ["to"]))
      ], 64);
    };
  }
}), el = (N, k) => {
  const r = N.__vccOpts || N;
  for (const [V, q] of k)
    r[V] = q;
  return r;
}, Rd = /* @__PURE__ */ el(Hd, [["__scopeId", "data-v-fe3fc659"]]), zd = { class: "di-editor-header" }, Kd = { class: "di-header-actions" }, Gd = {
  key: 0,
  class: "di-source-badge-row"
}, Yd = {
  key: 0,
  class: "di-source-detail"
}, Xd = { class: "di-context-row" }, Wd = { class: "di-context-field di-context-field-dropdown" }, Zd = { class: "di-dropdown-wrapper" }, Jd = {
  key: 0,
  class: "di-dropdown-list"
}, Qd = ["onMousedown"], Nd = { class: "di-context-field di-context-field-dropdown" }, eu = { class: "di-dropdown-wrapper" }, tu = {
  key: 0,
  class: "di-dropdown-list"
}, lu = ["onMousedown"], ou = { class: "di-editor-tabs" }, nu = { class: "di-editor-content" }, su = { class: "di-form-group" }, iu = { class: "di-display-type-grid" }, au = ["onClick"], du = { class: "di-display-type-desc" }, uu = {
  key: 0,
  class: "di-field-tags"
}, ru = { class: "di-field-tags-list" }, cu = { class: "di-field-tag-name" }, vu = {
  key: 0,
  class: "di-field-tag-type"
}, pu = ["onClick"], mu = {
  key: 1,
  class: "di-binding-selector"
}, fu = { class: "di-form-group" }, bu = { class: "di-form-label" }, hu = { class: "di-binding-search-wrapper" }, yu = {
  key: 0,
  class: "di-binding-list"
}, gu = ["onClick"], ku = { class: "di-binding-item-main" }, xu = { class: "di-binding-name" }, wu = { class: "di-binding-type" }, Cu = {
  key: 0,
  class: "di-binding-component"
}, $u = {
  key: 1,
  class: "di-binding-empty"
}, _u = {
  key: 2,
  class: "di-form-divider"
}, Tu = { class: "di-form-row" }, Iu = { class: "di-form-group di-suggest-wrapper" }, Mu = {
  key: 0,
  class: "di-suggest-list"
}, Su = ["onMousedown"], Uu = { class: "di-form-group di-suggest-wrapper" }, Du = {
  key: 0,
  class: "di-suggest-list"
}, Vu = ["onMousedown"], Eu = { class: "di-form-group" }, Pu = ["value"], Bu = ["disabled"], Au = {
  key: 3,
  class: "di-master-inline"
}, Lu = {
  key: 0,
  class: "di-condition-badge",
  style: { background: "#a78bfa" }
}, Fu = {
  key: 0,
  class: "di-master-inline-section"
}, Ou = {
  key: 0,
  class: "di-master-entries-table"
}, ju = ["onUpdate:modelValue"], qu = ["onUpdate:modelValue"], Hu = ["onUpdate:modelValue"], Ru = ["onClick"], zu = {
  key: 4,
  class: "di-form-group"
}, Ku = { class: "di-stored-calc-toggle" }, Gu = {
  key: 0,
  class: "di-condition-badge"
}, Yu = {
  key: 5,
  class: "di-stored-calc-section"
}, Xu = { class: "di-form-group" }, Wu = { class: "di-form-group di-suggest-wrapper" }, Zu = { class: "di-stored-calc-tags" }, Ju = ["onClick"], Qu = {
  key: 0,
  class: "di-suggest-list"
}, Nu = ["onMousedown"], er = { class: "di-form-group" }, tr = {
  key: 1,
  class: "di-form-group di-suggest-wrapper"
}, lr = {
  key: 0,
  class: "di-calc-tag"
}, or = ["onClick"], nr = {
  key: 1,
  class: "di-calc-text"
}, sr = ["placeholder"], ir = {
  key: 0,
  class: "di-suggest-list"
}, ar = ["onMousedown"], dr = {
  key: 2,
  class: "di-form-group"
}, ur = { class: "di-condition-toggle" }, rr = {
  key: 0,
  class: "di-condition-badge"
}, cr = {
  key: 0,
  class: "di-condition-section"
}, vr = { class: "di-form-group" }, pr = { class: "di-form-group di-suggest-wrapper" }, mr = { class: "di-form-row" }, fr = { class: "di-form-group" }, br = {
  key: 0,
  class: "di-form-group"
}, hr = { class: "di-form-row" }, yr = { class: "di-form-group" }, gr = {
  class: "di-form-group",
  style: { flex: "0 0 80px" }
}, kr = { class: "di-form-row" }, xr = { class: "di-form-group" }, wr = { class: "di-form-group" }, Cr = { class: "di-form-group" }, $r = { class: "di-form-group" }, _r = { class: "di-form-group" }, Tr = { class: "di-form-group" }, Ir = ["placeholder"], Mr = {
  key: 0,
  class: "di-form-group"
}, Sr = { class: "di-form-group" }, Ur = { class: "di-form-divider" }, Dr = { class: "di-csv-file-settings" }, Vr = { class: "di-form-row" }, Er = { class: "di-form-group" }, Pr = { class: "di-form-group" }, Br = {
  class: "di-form-row",
  style: { "align-items": "center" }
}, Ar = { class: "di-csv-checkbox-label" }, Lr = { class: "di-form-group" }, Fr = { class: "di-csv-columns-section" }, Or = {
  key: 0,
  class: "di-csv-columns-table"
}, jr = { class: "di-csv-col-no" }, qr = ["onUpdate:modelValue"], Hr = ["onUpdate:modelValue"], Rr = ["onUpdate:modelValue"], zr = ["onUpdate:modelValue"], Kr = { class: "di-csv-col-req di-csv-checkbox-center" }, Gr = ["onUpdate:modelValue"], Yr = ["onUpdate:modelValue"], Xr = { class: "di-csv-col-act" }, Wr = ["onClick", "disabled"], Zr = ["onClick", "disabled"], Jr = ["onClick"], Qr = { class: "di-form-group" }, Nr = { class: "di-form-group" }, ec = { class: "di-form-group" }, tc = { class: "di-form-group" }, lc = { class: "di-form-group" }, oc = { class: "di-form-group" }, nc = { class: "di-csv-error-section" }, sc = {
  key: 0,
  class: "di-csv-columns-table"
}, ic = ["onUpdate:modelValue"], ac = ["value"], dc = ["onUpdate:modelValue"], uc = ["onUpdate:modelValue"], rc = ["onUpdate:modelValue"], cc = ["onClick"], vc = { class: "di-form-divider" }, pc = { class: "di-form-row" }, mc = { class: "di-form-group" }, fc = { class: "di-form-group" }, bc = { class: "di-form-row" }, hc = { class: "di-form-group" }, yc = { class: "di-form-group" }, gc = { class: "di-form-group" }, kc = { class: "di-form-group" }, xc = { class: "di-form-group" }, wc = { class: "di-form-group" }, Cc = { class: "di-email-variables-input" }, $c = ["onClick"], _c = { class: "di-form-group" }, Tc = { class: "di-form-group" }, Ic = { class: "di-form-group" }, Mc = { class: "di-form-divider" }, Sc = { class: "di-form-group" }, Uc = {
  class: "di-form-label",
  style: { display: "flex", "align-items": "center", gap: "8px" }
}, Dc = { class: "di-form-row" }, Vc = { class: "di-form-group" }, Ec = { class: "di-form-group" }, Pc = { class: "di-form-group" }, Bc = { class: "di-form-group" }, Ac = {
  class: "di-form-label",
  style: { display: "flex", "align-items": "center", gap: "8px" }
}, Lc = { class: "di-form-group" }, Fc = { class: "di-form-group" }, Oc = { class: "di-form-group" }, jc = { class: "di-form-group" }, qc = {
  key: 0,
  class: "di-field-tags"
}, Hc = { class: "di-field-tags-list" }, Rc = { class: "di-field-tag-name" }, zc = {
  key: 0,
  class: "di-field-tag-type"
}, Kc = ["onClick"], Gc = {
  key: 1,
  class: "di-binding-selector"
}, Yc = { class: "di-form-group" }, Xc = { class: "di-form-label" }, Wc = { class: "di-binding-search-wrapper" }, Zc = {
  key: 0,
  class: "di-binding-list"
}, Jc = ["onClick"], Qc = { class: "di-binding-item-main" }, Nc = { class: "di-binding-name" }, ev = { class: "di-binding-type" }, tv = {
  key: 0,
  class: "di-binding-component"
}, lv = {
  key: 2,
  class: "di-master-inline"
}, ov = {
  key: 0,
  class: "di-condition-badge",
  style: { background: "#a78bfa" }
}, nv = {
  key: 0,
  class: "di-master-inline-section"
}, sv = {
  key: 0,
  class: "di-master-entries-table"
}, iv = ["onUpdate:modelValue"], av = ["onUpdate:modelValue"], dv = ["onUpdate:modelValue"], uv = ["onClick"], rv = { class: "di-condition-toggle" }, cv = {
  key: 0,
  class: "di-condition-badge"
}, vv = { class: "di-form-group di-suggest-wrapper" }, pv = { class: "di-calc-tags-input" }, mv = ["onClick"], fv = ["placeholder"], bv = { class: "di-form-group" }, hv = { class: "di-form-group" }, yv = { class: "di-form-group" }, gv = { class: "di-form-group" }, kv = { class: "di-form-group" }, xv = { class: "di-form-group" }, wv = { class: "di-form-row" }, Cv = { class: "di-form-group di-form-half" }, $v = { class: "di-form-group di-form-half" }, _v = { class: "di-csv-columns-section" }, Tv = {
  key: 0,
  class: "di-csv-columns-table"
}, Iv = ["onUpdate:modelValue"], Mv = ["onUpdate:modelValue"], Sv = ["onUpdate:modelValue"], Uv = { class: "di-csv-col-act" }, Dv = ["onClick", "disabled"], Vv = ["onClick", "disabled"], Ev = ["onClick"], Pv = { class: "di-form-group" }, Bv = { class: "di-form-group" }, Av = { class: "di-form-group" }, Lv = { class: "di-form-group" }, Fv = { class: "di-editor-footer" }, Ov = { class: "di-editor-actions" }, jv = /* @__PURE__ */ Kt({
  __name: "DevElementEditor",
  setup(N) {
    const k = Gt(), r = Nt("teleportTarget", "body"), V = y("datasource"), q = y(""), ue = y(""), te = y(""), re = y(""), we = y(""), Z = y(!1), Ce = y([]), le = y(""), $e = y(""), _e = y(""), be = y(""), S = y([]), Se = y("UTF-8"), Ee = y(","), Pe = y(!0), ot = y(""), he = y(""), Ge = y(""), ne = y(void 0), qe = y(""), E = y(""), B = y(""), g = y([]), j = y(""), z = y(""), se = y(""), K = y(""), ee = y(""), A = y(""), _ = y(""), U = y([]), Te = y(""), J = y(""), Ze = y(""), ye = y(""), Je = y(!0), nt = y(""), Ye = y(""), He = y(""), Q = y(!1), Be = y(""), ut = y(""), Qe = y(""), rt = y(""), ct = y(""), vt = y(""), xe = y([]), Ae = y(""), Ue = y(""), Re = y(""), st = y(""), G = y(""), Ne = y(""), bt = y(!1), it = y(!1), St = H(() => {
      const b = /* @__PURE__ */ new Set();
      for (const t of Object.values(k.elementConfigs))
        t.tabContext && b.add(t.tabContext);
      return [...b].sort();
    }), Ct = H(() => {
      const b = /* @__PURE__ */ new Set();
      for (const t of Object.values(k.elementConfigs))
        t.modalName && b.add(t.modalName);
      return [...b].sort();
    }), Ut = H(() => {
      const b = G.value.toLowerCase();
      return b ? St.value.filter((t) => t.toLowerCase().includes(b)) : St.value;
    }), Dt = H(() => {
      const b = Ne.value.toLowerCase();
      return b ? Ct.value.filter((t) => t.toLowerCase().includes(b)) : Ct.value;
    });
    function At(b) {
      G.value = b, bt.value = !1;
    }
    function Lt(b) {
      Ne.value = b, it.value = !1;
    }
    function Ft() {
      setTimeout(() => {
        bt.value = !1;
      }, 150);
    }
    function Ot() {
      setTimeout(() => {
        it.value = !1;
      }, 150);
    }
    const et = y(!1), Xe = y([]), tt = H(() => {
      if (De.value.length > 0) {
        const b = De.value[0];
        if (b.table && b.column) return `${b.table}.${b.column}`;
      }
      return "";
    }), $t = H(() => tt.value && k.getMasterDefinition(tt.value) || null), Y = y("db_direct"), De = y([]), ce = y(""), Le = y(""), pt = y(""), mt = y(""), gt = y(""), ge = y([]), a = y(""), Fe = y(!1), fe = y(""), X = y(""), ve = y(""), ze = y(""), Ve = y(""), Ie = y(!1), lt = y(""), pe = y([]), Ke = y(""), yt = y(!1), _t = y(""), at = y(""), P = y(""), me = y(""), Oe = y(""), We = y(!1), ke = y(""), ie = y(""), ht = y(""), Vt = y(!1), u = H(() => ie.value ? {
      data: "data",
      "v-model": "v-model",
      prop: "prop",
      static: "static",
      computed: "computed",
      store: "store",
      api: "data"
      // legacy compatibility
    }[ie.value] || ie.value : ""), l = H(() => k.editingElementId !== null), x = H(() => k.editingElementId), F = H(() => q.value === "csv_export" || q.value === "csv_import"), i = H(() => q.value === "email"), f = H(() => F.value || i.value), p = [
      { value: "db_direct", label: "DBカラム (そのまま)", icon: Mt, color: "#3b82f6", description: "DBの値をそのまま表示" },
      { value: "db_formatted", label: "DBカラム (整形)", icon: Qt, color: "#8b5cf6", description: "DBの値を整形して表示" },
      { value: "calculated", label: "計算値", icon: kl, color: "#f59e0b", description: "複数カラムから計算" },
      { value: "static", label: "固定文言", icon: Eo, color: "#10b981", description: "コード内の固定テキスト" },
      { value: "other", label: "その他メモ", icon: Mo, color: "#94a3b8", description: "自由メモ" }
    ];
    zt(x, (b) => {
      var t;
      if (b) {
        const o = k.getElementConfig(b);
        try {
          const m = document.querySelector(b);
          if (m) {
            o != null && o.elementType ? V.value = o.elementType : V.value = k.detectElementType(m);
            const R = m.querySelector("[data-di-binding]") || (m.hasAttribute("data-di-binding") ? m : null) || m.closest("[data-di-binding]");
            if (R) {
              const je = R.getAttribute("data-di-binding"), Et = R.getAttribute("data-di-db"), ll = R.getAttribute("data-di-db-type"), Pt = R.getAttribute("data-di-db-comment");
              if (je && (ht.value = je, ie.value = "data", Vt.value = !1), Et) {
                const [hl, yl] = Et.split(".");
                hl && yl && (De.value.push({
                  table: hl,
                  column: yl,
                  type: ll || void 0,
                  description: Pt || void 0
                }), Y.value || (Y.value = "db_direct"));
              }
            }
          }
        } catch (m) {
          console.warn("[DevInspector] Failed to read element:", m);
        }
        o != null && o.fieldInfoList && o.fieldInfoList.length > 0 ? De.value = o.fieldInfoList.map((m) => ({ ...m })) : o != null && o.fieldInfo && (De.value = [{ ...o.fieldInfo }]), ce.value = "", Le.value = "", pt.value = "", mt.value = "", o != null && o.note && (ke.value = o.note.text || ke.value, Y.value = o.note.displayType || Y.value, gt.value = o.note.formatDescription || "", fe.value = o.note.sampleValue || "", X.value = o.note.decimalHandling || "", ve.value = o.note.unit || "", ze.value = o.note.nullDisplay || "", Ve.value = o.note.displayFormat || "", Gl(o.note.calcDescription || "", o.note.calcSources || []), Ie.value = o.note.storedCalc || !1, lt.value = o.note.storedCalcLogic || "", pe.value = o.note.storedCalcSources ? [...o.note.storedCalcSources] : [], _t.value = o.note.storedCalcTiming || "", at.value = o.note.condition || "", P.value = o.note.conditionColumn || "", me.value = o.note.hiddenBehavior || "", Oe.value = o.note.hiddenNote || "", We.value = !!(o.note.condition || o.note.conditionColumn)), o != null && o.sourceBinding && (ie.value = o.sourceBinding.type || ie.value, ht.value = o.sourceBinding.source || ht.value, Vt.value = o.sourceBinding.isStatic || !1), G.value = (o == null ? void 0 : o.tabContext) || k.detectTabContext(b) || "";
        const C = k.detectModalName(b);
        if (Ne.value = (o == null ? void 0 : o.modalName) || C || "", o != null && o.actionInfo) {
          if (q.value = o.actionInfo.type || "", ue.value = o.actionInfo.target || "", te.value = o.actionInfo.method || "", re.value = o.actionInfo.description || "", o.actionInfo.csvSpec) {
            const m = o.actionInfo.csvSpec;
            S.value = m.columns.map((R) => ({ ...R })), Se.value = m.encoding || "UTF-8", Ee.value = m.delimiter || ",", Pe.value = m.hasHeaderRow !== !1, ot.value = m.filenamePattern || "", he.value = m.sortOrder || "", Ge.value = m.filterCondition || "", ne.value = m.maxRows, qe.value = m.errorHandling || "", E.value = m.duplicateHandling || "", B.value = m.preValidation || "", g.value = m.errorDefs ? m.errorDefs.map((R) => ({ ...R })) : [];
          }
          if (o.actionInfo.emailSpec) {
            const m = o.actionInfo.emailSpec;
            j.value = m.trigger || "", z.value = m.to || "", se.value = m.cc || "", K.value = m.bcc || "", ee.value = m.subject || "", A.value = m.bodyTemplate || "", _.value = m.templatePath || "", U.value = m.variables ? [...m.variables] : [], J.value = m.attachments || "", Ze.value = m.conditions || "", ye.value = m.errorHandling || "";
          }
        }
        if (o != null && o.formInfo && (we.value = o.formInfo.inputType || "", Z.value = o.formInfo.required || !1, Ce.value = o.formInfo.validation ? [...o.formInfo.validation] : [], $e.value = o.formInfo.placeholder || "", _e.value = o.formInfo.defaultValue || "", be.value = o.formInfo.description || ""), (t = o == null ? void 0 : o.actionInfo) != null && t.sortSpec) {
          const m = o.actionInfo.sortSpec;
          Je.value = m.sortable !== !1, nt.value = m.sortType || "", Ye.value = m.sortKey || "", He.value = m.defaultDirection || "", Q.value = m.isDefaultSort || !1, Be.value = m.unsortedOrder || "", ut.value = m.description || "";
        }
        if (o != null && o.chartSpec) {
          const m = o.chartSpec;
          Qe.value = m.chartType || "", rt.value = m.title || "", ct.value = m.xAxis || "", vt.value = m.yAxis || "", xe.value = m.series ? m.series.map((R) => ({ ...R })) : [], Ae.value = m.dataSource || "", Ue.value = m.aggregation || "", Re.value = m.filters || "", st.value = m.description || "";
        }
      } else
        T();
    });
    function T() {
      V.value = "datasource", Y.value = "db_direct", De.value = [], ce.value = "", Le.value = "", pt.value = "", mt.value = "", gt.value = "", fe.value = "", X.value = "", ve.value = "", ze.value = "", Ve.value = "", ge.value = [], a.value = "", Ie.value = !1, lt.value = "", pe.value = [], Ke.value = "", _t.value = "", at.value = "", P.value = "", me.value = "", Oe.value = "", We.value = !1, ke.value = "", ie.value = "", ht.value = "", Vt.value = !1, q.value = "", ue.value = "", te.value = "", re.value = "", S.value = [], Se.value = "UTF-8", Ee.value = ",", Pe.value = !0, ot.value = "", he.value = "", Ge.value = "", ne.value = void 0, qe.value = "", E.value = "", B.value = "", g.value = [], we.value = "", Z.value = !1, Ce.value = [], le.value = "", $e.value = "", _e.value = "", be.value = "", j.value = "", z.value = "", se.value = "", K.value = "", ee.value = "", A.value = "", _.value = "", U.value = [], Te.value = "", J.value = "", Ze.value = "", ye.value = "", Je.value = !0, nt.value = "", Ye.value = "", He.value = "", Q.value = !1, Be.value = "", ut.value = "", Qe.value = "", rt.value = "", ct.value = "", vt.value = "", xe.value = [], Ae.value = "", Ue.value = "", Re.value = "", st.value = "", G.value = "", Ne.value = "", et.value = !1, Xe.value = [];
    }
    function $() {
      k.stopEditing(), T();
    }
    function ae() {
      if (x.value)
        try {
          const b = document.querySelector(x.value);
          if (!b) return;
          const t = k.autoDetectElementInfo(b, x.value);
          t.sourceBinding && (ie.value = t.sourceBinding.type || "", ht.value = t.sourceBinding.source || "", Vt.value = t.sourceBinding.isStatic || !1, t.sourceBinding.isStatic && !Y.value && (Y.value = "static", ke.value = ke.value || "固定文言")), t.fieldInfo && (De.value.push({
            table: t.fieldInfo.table || "",
            column: t.fieldInfo.column || "",
            type: t.fieldInfo.type || void 0,
            description: t.fieldInfo.description || void 0
          }), Y.value || (Y.value = "db_direct")), t.note && !ke.value && (ke.value = t.note.text || "");
        } catch (b) {
          console.error("[DevInspector] Auto-detect failed:", b);
        }
    }
    function oe() {
      if (!x.value) return;
      const b = [...De.value];
      (Y.value === "db_direct" || Y.value === "db_formatted") && ce.value && Le.value && b.push({
        table: ce.value,
        column: Le.value,
        type: pt.value || void 0,
        description: mt.value || void 0
      });
      const t = b.length > 0 ? b : void 0, o = b.length > 0 ? b[0] : void 0, C = Y.value === "db_direct" || Y.value === "db_formatted", m = Y.value || ke.value ? {
        text: ke.value || "",
        displayType: Y.value,
        formatDescription: Y.value === "db_formatted" && gt.value || void 0,
        calcDescription: Y.value === "calculated" && Kl() || void 0,
        calcSources: Y.value === "calculated" && cl().length > 0 ? cl() : void 0,
        // 保存済み計算値 (db_direct / db_formatted のみ)
        storedCalc: C && Ie.value ? !0 : void 0,
        storedCalcLogic: C && Ie.value && lt.value || void 0,
        storedCalcSources: C && Ie.value && pe.value.length > 0 ? pe.value : void 0,
        storedCalcTiming: C && Ie.value && _t.value || void 0,
        sampleValue: fe.value || void 0,
        decimalHandling: X.value || void 0,
        unit: ve.value || void 0,
        nullDisplay: ze.value || void 0,
        displayFormat: Ve.value || void 0,
        condition: at.value || void 0,
        conditionColumn: P.value || void 0,
        hiddenBehavior: me.value || void 0,
        hiddenNote: Oe.value || void 0
      } : void 0, R = ie.value ? {
        type: ie.value,
        source: ht.value || void 0,
        isStatic: Vt.value
      } : void 0, je = V.value === "action" && q.value ? {
        type: q.value,
        target: ue.value || void 0,
        method: te.value ? te.value : void 0,
        description: re.value || void 0,
        csvSpec: oo(),
        emailSpec: no(),
        sortSpec: uo()
      } : void 0, Et = V.value === "form" ? {
        inputType: we.value || void 0,
        required: Z.value || void 0,
        validation: Ce.value.length > 0 ? Ce.value : void 0,
        placeholder: $e.value || void 0,
        defaultValue: _e.value || void 0,
        description: be.value || void 0
      } : void 0, ll = V.value === "chart" && Qe.value ? {
        chartType: Qe.value,
        title: rt.value || void 0,
        xAxis: ct.value || void 0,
        yAxis: vt.value || void 0,
        series: xe.value.filter((Pt) => Pt.label || Pt.field).length > 0 ? xe.value.filter((Pt) => Pt.label || Pt.field) : void 0,
        dataSource: Ae.value || void 0,
        aggregation: Ue.value || void 0,
        filters: Re.value || void 0,
        description: st.value || void 0
      } : void 0;
      k.setElementConfig(x.value, {
        elementType: V.value,
        fieldInfo: o,
        fieldInfoList: t,
        actionInfo: je,
        formInfo: Et,
        chartSpec: ll,
        note: m,
        sourceBinding: R,
        tabContext: G.value || void 0,
        modalName: Ne.value || void 0,
        isConditional: Ne.value ? !0 : void 0
      }), et.value && tt.value && ro(), $();
    }
    function Tt() {
      x.value && (k.deleteElementConfig(x.value), $());
    }
    const Vl = [
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
    ], kt = y(""), It = y(!1), Ht = H(() => k.searchSchemaColumns(kt.value).slice(0, 30));
    function sl(b) {
      De.value.push({
        table: b.table,
        column: b.column,
        type: b.type || void 0,
        description: b.comment || void 0
      }), It.value = !1, kt.value = "";
    }
    function El() {
      !ce.value || !Le.value || (De.value.push({
        table: ce.value,
        column: Le.value,
        type: pt.value || void 0,
        description: mt.value || void 0
      }), ce.value = "", Le.value = "", pt.value = "", mt.value = "");
    }
    function il(b) {
      De.value.splice(b, 1);
    }
    const tl = H(() => k.getSchemaColumns().length > 0), Yt = y(!1), Xt = y(!1), al = H(() => {
      var C;
      const b = /* @__PURE__ */ new Set();
      for (const m of Object.values(k.elementConfigs))
        if (m.fieldInfoList)
          for (const R of m.fieldInfoList)
            R.table && b.add(R.table);
        else (C = m.fieldInfo) != null && C.table && b.add(m.fieldInfo.table);
      for (const m of k.getSchemaColumns())
        b.add(m.table);
      const t = [...b].sort();
      if (!ce.value) return t;
      const o = ce.value.toLowerCase();
      return t.filter((m) => m.toLowerCase().includes(o));
    }), dl = H(() => {
      var C;
      const b = /* @__PURE__ */ new Set();
      for (const m of Object.values(k.elementConfigs))
        if (m.fieldInfoList)
          for (const R of m.fieldInfoList)
            R.column && (!ce.value || R.table === ce.value) && b.add(R.column);
        else (C = m.fieldInfo) != null && C.column && (!ce.value || m.fieldInfo.table === ce.value) && b.add(m.fieldInfo.column);
      for (const m of k.getSchemaColumns())
        (!ce.value || m.table === ce.value) && b.add(m.column);
      const t = [...b].sort();
      if (!Le.value) return t;
      const o = Le.value.toLowerCase();
      return t.filter((m) => m.toLowerCase().includes(o));
    });
    function Pl() {
      setTimeout(() => {
        Yt.value = !1;
      }, 150);
    }
    function Bl() {
      setTimeout(() => {
        Xt.value = !1;
      }, 150);
    }
    function Al(b) {
      if (ce.value = b, Yt.value = !1, Le.value) {
        const t = k.getSchemaColumns().find((o) => o.table === b && o.column === Le.value);
        t && (pt.value = t.type || "", mt.value = t.comment || "");
      }
    }
    function Ll(b) {
      if (Le.value = b, Xt.value = !1, ce.value) {
        const t = k.getSchemaColumns().find((o) => o.table === ce.value && o.column === b);
        t && (pt.value = t.type || "", mt.value = t.comment || "");
      }
    }
    const ul = H(() => {
      var C, m;
      const b = /* @__PURE__ */ new Set();
      for (const R of Object.values(k.elementConfigs))
        if (R.fieldInfoList)
          for (const je of R.fieldInfoList)
            je.table && je.column && b.add(`${je.table}.${je.column}`);
        else (C = R.fieldInfo) != null && C.table && ((m = R.fieldInfo) != null && m.column) && b.add(`${R.fieldInfo.table}.${R.fieldInfo.column}`);
      for (const R of k.getSchemaColumns())
        b.add(R.fullName);
      const t = [...b].sort();
      if (!a.value) return t;
      const o = a.value.trim().toLowerCase();
      if (/^[a-z0-9_.]+$/i.test(o)) {
        const R = t.filter((je) => je.toLowerCase().includes(o));
        if (R.length > 0) return R;
      }
      return t;
    });
    function Fl(b) {
      a.value.trim() && ge.value.push({ type: "text", value: a.value }), ge.value.push({ type: "tag", value: b }), a.value = "";
    }
    function Ol(b) {
      ge.value.splice(b, 1);
    }
    function jl(b) {
      if (b.key === "Backspace" && !a.value && ge.value.length > 0) {
        const t = ge.value.pop();
        t.type === "text" && (a.value = t.value);
      }
    }
    function ql() {
      setTimeout(() => {
        Fe.value = !1;
      }, 150);
    }
    const rl = H(() => {
      var C, m;
      const b = /* @__PURE__ */ new Set();
      for (const R of k.getSchemaColumns())
        b.add(R.fullName);
      for (const R of Object.values(k.elementConfigs))
        if (R.fieldInfoList)
          for (const je of R.fieldInfoList)
            je.table && je.column && b.add(`${je.table}.${je.column}`);
        else (C = R.fieldInfo) != null && C.table && ((m = R.fieldInfo) != null && m.column) && b.add(`${R.fieldInfo.table}.${R.fieldInfo.column}`);
      const t = [...b].sort();
      if (!Ke.value) return t;
      const o = Ke.value.trim().toLowerCase();
      return t.filter((R) => R.toLowerCase().includes(o));
    });
    function Hl() {
      setTimeout(() => {
        yt.value = !1;
      }, 150);
    }
    function Rl() {
      const b = Ke.value.trim();
      b && !pe.value.includes(b) && pe.value.push(b), Ke.value = "";
    }
    function zl(b) {
      pe.value.includes(b) || pe.value.push(b), Ke.value = "";
    }
    function Kl() {
      const b = ge.value.map((t) => t.value);
      return a.value.trim() && b.push(a.value.trim()), b.join(" ").replace(/\s+/g, " ").trim();
    }
    function cl() {
      return ge.value.filter((b) => b.type === "tag").map((b) => b.value);
    }
    function Gl(b, t) {
      if (!b && t.length === 0) {
        ge.value = [], a.value = "";
        return;
      }
      if (t.length === 0) {
        ge.value = [], a.value = b;
        return;
      }
      const o = [];
      let C = b;
      for (const R of t) {
        const je = C.indexOf(R);
        if (je >= 0) {
          const Et = C.substring(0, je).trim();
          Et && o.push({ type: "text", value: Et }), o.push({ type: "tag", value: R }), C = C.substring(je + R.length);
        }
      }
      const m = C.trim();
      m && o.push({ type: "text", value: m }), o.length === 0 ? a.value = b : (ge.value = o, a.value = "");
    }
    function Yl() {
      const b = le.value.trim();
      b && !Ce.value.includes(b) && Ce.value.push(b), le.value = "";
    }
    function Xl(b) {
      Ce.value.splice(b, 1);
    }
    function Wl(b) {
      b.key === "Backspace" && !le.value && Ce.value.length > 0 && Ce.value.pop();
    }
    function Zl() {
      S.value.push({ name: "", dbMapping: "", type: "string", required: !1, description: "" });
    }
    function Jl(b) {
      S.value.splice(b, 1);
    }
    function vl(b, t) {
      const o = b + t;
      if (o < 0 || o >= S.value.length) return;
      const C = S.value[b];
      S.value[b] = S.value[o], S.value[o] = C, S.value = [...S.value];
    }
    function Ql() {
      xe.value.push({ label: "", field: "", color: "#3b82f6" });
    }
    function Nl(b) {
      xe.value.splice(b, 1);
    }
    function pl(b, t) {
      const o = b + t;
      if (o < 0 || o >= xe.value.length) return;
      const C = xe.value[b];
      xe.value[b] = xe.value[o], xe.value[o] = C, xe.value = [...xe.value];
    }
    function eo() {
      g.value.push({ condition: "", message: "", column: "", severity: "error" });
    }
    function to(b) {
      g.value.splice(b, 1);
    }
    const lo = H(() => S.value.filter((b) => b.name).map((b) => b.name));
    function oo() {
      if (q.value !== "csv_export" && q.value !== "csv_import") return;
      const b = g.value.filter((t) => t.condition || t.message);
      return {
        columns: S.value.filter((t) => t.name),
        encoding: Se.value || void 0,
        delimiter: Ee.value || void 0,
        hasHeaderRow: Pe.value,
        filenamePattern: ot.value || void 0,
        sortOrder: he.value || void 0,
        filterCondition: Ge.value || void 0,
        maxRows: ne.value || void 0,
        errorHandling: qe.value || void 0,
        duplicateHandling: E.value || void 0,
        preValidation: B.value || void 0,
        errorDefs: b.length > 0 ? b : void 0
      };
    }
    function no() {
      if (q.value === "email")
        return {
          trigger: j.value || "",
          to: z.value || "",
          cc: se.value || void 0,
          bcc: K.value || void 0,
          subject: ee.value || "",
          bodyTemplate: A.value || void 0,
          templatePath: _.value || void 0,
          variables: U.value.length > 0 ? U.value : void 0,
          attachments: J.value || void 0,
          conditions: Ze.value || void 0,
          errorHandling: ye.value || void 0
        };
    }
    function so() {
      const b = Te.value.trim();
      b && !U.value.includes(b) && U.value.push(b), Te.value = "";
    }
    function io(b) {
      U.value.splice(b, 1);
    }
    function ao(b) {
      b.key === "Backspace" && !Te.value && U.value.length > 0 && U.value.pop();
    }
    function uo() {
      if (q.value === "sort")
        return {
          sortable: Je.value,
          sortType: nt.value ? nt.value : void 0,
          sortKey: Ye.value || void 0,
          defaultDirection: He.value ? He.value : void 0,
          isDefaultSort: Q.value || void 0,
          unsortedOrder: Be.value || void 0,
          description: ut.value || void 0
        };
    }
    zt(tt, (b) => {
      if (b) {
        const t = k.getMasterDefinition(b);
        t ? (Xe.value = t.entries.map((o) => ({ ...o })), et.value = !0) : (Xe.value = [], et.value = !1);
      } else
        Xe.value = [], et.value = !1;
    });
    function ml() {
      et.value = !et.value, et.value && Xe.value.length === 0 && Xe.value.push({ value: "", label: "" });
    }
    function fl() {
      Xe.value.push({ value: "", label: "" });
    }
    function bl(b) {
      Xe.value.splice(b, 1);
    }
    function ro() {
      var m;
      if (!tt.value) return;
      const [b, t] = tt.value.split(".");
      if (!b || !t) return;
      const o = Xe.value.filter((R) => R.value || R.label);
      if (o.length === 0) {
        k.deleteMasterDefinition(tt.value);
        return;
      }
      const C = k.getMasterDefinition(tt.value);
      k.setMasterDefinition({
        id: tt.value,
        table: b,
        column: t,
        name: (C == null ? void 0 : C.name) || t,
        columnType: (C == null ? void 0 : C.columnType) || ((m = De.value[0]) == null ? void 0 : m.type),
        description: C == null ? void 0 : C.description,
        entries: o,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      });
    }
    return (b, t) => (n(), ft(wt, { to: d(r) }, [
      l.value ? (n(), s("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: de($, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", {
          class: L(["di-editor-modal", { "di-editor-modal-wide": f.value }])
        }, [
          e("div", zd, [
            t[94] || (t[94] = e("h3", null, "要素情報を編集", -1)),
            e("div", Kd, [
              e("button", {
                onClick: ae,
                class: "di-btn-auto",
                title: "自動検出"
              }, [
                I(d(Qt), { style: { width: "16px", height: "16px" } })
              ]),
              e("button", {
                onClick: $,
                class: "di-editor-close"
              }, [
                I(d(xt), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          u.value ? (n(), s("div", Gd, [
            e("span", {
              class: L(["di-source-badge", "di-source-" + ie.value])
            }, c(u.value), 3),
            ht.value ? (n(), s("span", Yd, c(ht.value), 1)) : v("", !0)
          ])) : v("", !0),
          e("div", Xd, [
            e("div", Wd, [
              t[95] || (t[95] = e("label", { class: "di-context-label di-context-label-tab" }, "タブ:", -1)),
              e("div", Zd, [
                h(e("input", {
                  "onUpdate:modelValue": t[0] || (t[0] = (o) => G.value = o),
                  type: "text",
                  class: "di-context-input",
                  placeholder: "例: 予習, 受講者一覧",
                  onFocus: t[1] || (t[1] = (o) => bt.value = !0),
                  onBlur: Ft,
                  autocomplete: "off"
                }, null, 544), [
                  [w, G.value]
                ]),
                bt.value && Ut.value.length > 0 ? (n(), s("div", Jd, [
                  (n(!0), s(M, null, D(Ut.value, (o) => (n(), s("div", {
                    key: o,
                    class: "di-dropdown-item",
                    onMousedown: de((C) => At(o), ["prevent"])
                  }, c(o), 41, Qd))), 128))
                ])) : v("", !0)
              ])
            ]),
            e("div", Nd, [
              t[96] || (t[96] = e("label", { class: "di-context-label di-context-label-modal" }, "モーダル:", -1)),
              e("div", eu, [
                h(e("input", {
                  "onUpdate:modelValue": t[2] || (t[2] = (o) => Ne.value = o),
                  type: "text",
                  class: "di-context-input",
                  placeholder: "例: 確認ダイアログ",
                  onFocus: t[3] || (t[3] = (o) => it.value = !0),
                  onBlur: Ot,
                  autocomplete: "off"
                }, null, 544), [
                  [w, Ne.value]
                ]),
                it.value && Dt.value.length > 0 ? (n(), s("div", tu, [
                  (n(!0), s(M, null, D(Dt.value, (o) => (n(), s("div", {
                    key: o,
                    class: "di-dropdown-item",
                    onMousedown: de((C) => Lt(o), ["prevent"])
                  }, c(o), 41, lu))), 128))
                ])) : v("", !0)
              ])
            ])
          ]),
          e("div", ou, [
            e("button", {
              onClick: t[4] || (t[4] = (o) => V.value = "datasource"),
              class: L(["di-editor-tab", { "di-editor-tab-active": V.value === "datasource" }])
            }, [
              I(d(Mt), { style: { width: "14px", height: "14px" } }),
              t[97] || (t[97] = O(" データソース ", -1))
            ], 2),
            e("button", {
              onClick: t[5] || (t[5] = (o) => V.value = "action"),
              class: L(["di-editor-tab", { "di-editor-tab-active": V.value === "action" }])
            }, [
              I(d(Bo), { style: { width: "14px", height: "14px" } }),
              t[98] || (t[98] = O(" アクション ", -1))
            ], 2),
            e("button", {
              onClick: t[6] || (t[6] = (o) => V.value = "form"),
              class: L(["di-editor-tab", { "di-editor-tab-active": V.value === "form" }])
            }, [
              I(d(Co), { style: { width: "14px", height: "14px" } }),
              t[99] || (t[99] = O(" フォーム ", -1))
            ], 2),
            e("button", {
              onClick: t[7] || (t[7] = (o) => V.value = "chart"),
              class: L(["di-editor-tab", { "di-editor-tab-active": V.value === "chart" }])
            }, [
              I(d(ho), { style: { width: "14px", height: "14px" } }),
              t[100] || (t[100] = O(" チャート ", -1))
            ], 2)
          ]),
          e("div", nu, [
            V.value === "datasource" ? (n(), s(M, { key: 0 }, [
              e("div", su, [
                t[101] || (t[101] = e("label", { class: "di-form-label" }, "表示タイプ", -1)),
                e("div", iu, [
                  (n(), s(M, null, D(p, (o) => e("button", {
                    key: o.value,
                    onClick: (C) => Y.value = o.value,
                    class: L(["di-display-type-card", { "di-display-type-active": Y.value === o.value }]),
                    style: dt(Y.value === o.value ? { borderColor: o.color, background: o.color + "18" } : {})
                  }, [
                    (n(), ft(co(o.icon), {
                      style: dt([{ width: "20px", height: "20px" }, { color: Y.value === o.value ? o.color : "#64748b" }])
                    }, null, 8, ["style"])),
                    e("span", {
                      class: "di-display-type-label",
                      style: dt({ color: Y.value === o.value ? o.color : "#94a3b8" })
                    }, c(o.label), 5),
                    e("span", du, c(o.description), 1)
                  ], 14, au)), 64))
                ])
              ]),
              Y.value === "db_direct" || Y.value === "db_formatted" ? (n(), s(M, { key: 0 }, [
                De.value.length > 0 ? (n(), s("div", uu, [
                  t[102] || (t[102] = e("label", { class: "di-form-label" }, "登録済みカラム", -1)),
                  e("div", ru, [
                    (n(!0), s(M, null, D(De.value, (o, C) => (n(), s("div", {
                      key: C,
                      class: "di-field-tag"
                    }, [
                      e("span", cu, c(o.table) + "." + c(o.column), 1),
                      o.type ? (n(), s("span", vu, c(o.type), 1)) : v("", !0),
                      e("button", {
                        onClick: (m) => il(C),
                        class: "di-field-tag-remove"
                      }, "×", 8, pu)
                    ]))), 128))
                  ])
                ])) : v("", !0),
                tl.value ? (n(), s("div", mu, [
                  e("div", fu, [
                    e("label", bu, [
                      I(d(Mt), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                      t[103] || (t[103] = O(" schema.rb から選択 ", -1))
                    ]),
                    e("div", hu, [
                      h(e("input", {
                        "onUpdate:modelValue": t[8] || (t[8] = (o) => kt.value = o),
                        onFocus: t[9] || (t[9] = (o) => It.value = !0),
                        type: "text",
                        placeholder: "テーブル.カラムを検索... (例: users, email)",
                        class: "di-input di-binding-search"
                      }, null, 544), [
                        [w, kt.value]
                      ]),
                      kt.value ? (n(), s("button", {
                        key: 0,
                        onClick: t[10] || (t[10] = (o) => {
                          kt.value = "", It.value = !1;
                        }),
                        class: "di-binding-clear"
                      }, [
                        I(d(xt), { style: { width: "14px", height: "14px" } })
                      ])) : v("", !0)
                    ]),
                    It.value && Ht.value.length > 0 ? (n(), s("div", yu, [
                      (n(!0), s(M, null, D(Ht.value, (o) => (n(), s("button", {
                        key: o.fullName,
                        onClick: (C) => sl(o),
                        class: "di-binding-item has-db"
                      }, [
                        e("div", ku, [
                          e("span", xu, c(o.fullName), 1),
                          e("span", wu, c(o.type), 1)
                        ]),
                        o.comment ? (n(), s("span", Cu, c(o.comment), 1)) : v("", !0)
                      ], 8, gu))), 128))
                    ])) : It.value && kt.value && Ht.value.length === 0 ? (n(), s("div", $u, " 該当するカラムが見つかりません ")) : v("", !0)
                  ])
                ])) : v("", !0),
                tl.value ? (n(), s("div", _u, [...t[104] || (t[104] = [
                  e("span", null, "または手動入力", -1)
                ])])) : v("", !0),
                e("div", Tu, [
                  e("div", Iu, [
                    t[105] || (t[105] = e("label", { class: "di-form-label" }, "テーブル名 *", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[11] || (t[11] = (o) => ce.value = o),
                      onFocus: t[12] || (t[12] = (o) => Yt.value = !0),
                      onBlur: t[13] || (t[13] = (o) => Pl()),
                      type: "text",
                      placeholder: "users",
                      class: "di-input",
                      autocomplete: "off"
                    }, null, 544), [
                      [w, ce.value]
                    ]),
                    Yt.value && al.value.length > 0 ? (n(), s("div", Mu, [
                      (n(!0), s(M, null, D(al.value.slice(0, 10), (o) => (n(), s("button", {
                        key: o,
                        onMousedown: de((C) => Al(o), ["prevent"]),
                        class: "di-suggest-item"
                      }, c(o), 41, Su))), 128))
                    ])) : v("", !0)
                  ]),
                  e("div", Uu, [
                    t[106] || (t[106] = e("label", { class: "di-form-label" }, "カラム名 *", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[14] || (t[14] = (o) => Le.value = o),
                      onFocus: t[15] || (t[15] = (o) => Xt.value = !0),
                      onBlur: t[16] || (t[16] = (o) => Bl()),
                      type: "text",
                      placeholder: "name",
                      class: "di-input",
                      autocomplete: "off"
                    }, null, 544), [
                      [w, Le.value]
                    ]),
                    Xt.value && dl.value.length > 0 ? (n(), s("div", Du, [
                      (n(!0), s(M, null, D(dl.value.slice(0, 10), (o) => (n(), s("button", {
                        key: o,
                        onMousedown: de((C) => Ll(o), ["prevent"]),
                        class: "di-suggest-item"
                      }, c(o), 41, Vu))), 128))
                    ])) : v("", !0)
                  ])
                ]),
                e("div", Eu, [
                  t[108] || (t[108] = e("label", { class: "di-form-label" }, "データ型", -1)),
                  h(e("select", {
                    "onUpdate:modelValue": t[17] || (t[17] = (o) => pt.value = o),
                    class: "di-select"
                  }, [
                    t[107] || (t[107] = e("option", { value: "" }, "選択してください", -1)),
                    (n(), s(M, null, D(Vl, (o) => e("option", {
                      key: o,
                      value: o
                    }, c(o), 9, Pu)), 64))
                  ], 512), [
                    [Me, pt.value]
                  ])
                ]),
                e("button", {
                  onClick: El,
                  class: "di-btn-add-field",
                  disabled: !ce.value || !Le.value
                }, " + カラムを追加 ", 8, Bu),
                tt.value ? (n(), s("div", Au, [
                  e("button", {
                    onClick: ml,
                    class: L(["di-btn-condition-toggle", { "di-condition-active": et.value }])
                  }, [
                    I(d($l), { style: { width: "14px", height: "14px" } }),
                    t[109] || (t[109] = O(" マスタ値を定義 ", -1)),
                    $t.value ? (n(), s("span", Lu, c($t.value.entries.length) + "件", 1)) : v("", !0)
                  ], 2),
                  et.value ? (n(), s("div", Fu, [
                    Xe.value.length > 0 ? (n(), s("div", Ou, [
                      t[110] || (t[110] = e("div", { class: "di-master-entries-header" }, [
                        e("span", { class: "di-master-col-val" }, "値"),
                        e("span", { class: "di-master-col-lbl" }, "ラベル"),
                        e("span", { class: "di-master-col-color" }, "色"),
                        e("span", { class: "di-master-col-act" })
                      ], -1)),
                      (n(!0), s(M, null, D(Xe.value, (o, C) => (n(), s("div", {
                        key: C,
                        class: "di-master-entry-row"
                      }, [
                        h(e("input", {
                          "onUpdate:modelValue": (m) => o.value = m,
                          placeholder: "1",
                          class: "di-master-input di-master-col-val"
                        }, null, 8, ju), [
                          [w, o.value]
                        ]),
                        h(e("input", {
                          "onUpdate:modelValue": (m) => o.label = m,
                          placeholder: "受付",
                          class: "di-master-input di-master-col-lbl"
                        }, null, 8, qu), [
                          [w, o.label]
                        ]),
                        h(e("input", {
                          "onUpdate:modelValue": (m) => o.color = m,
                          type: "color",
                          class: "di-master-color-input"
                        }, null, 8, Hu), [
                          [w, o.color]
                        ]),
                        e("button", {
                          onClick: (m) => bl(C),
                          class: "di-master-entry-remove"
                        }, "×", 8, Ru)
                      ]))), 128))
                    ])) : v("", !0),
                    e("button", {
                      onClick: fl,
                      class: "di-btn-add-field",
                      style: { "margin-top": "4px" }
                    }, " + 値を追加 ")
                  ])) : v("", !0)
                ])) : v("", !0),
                Y.value === "db_formatted" ? (n(), s("div", zu, [
                  t[111] || (t[111] = e("label", { class: "di-form-label" }, "整形方法", -1)),
                  h(e("textarea", {
                    "onUpdate:modelValue": t[18] || (t[18] = (o) => gt.value = o),
                    rows: "2",
                    placeholder: "YYYY年MM月DD日 に整形、姓 + 名 で結合 など",
                    class: "di-textarea"
                  }, null, 512), [
                    [w, gt.value]
                  ])
                ])) : v("", !0),
                e("div", Ku, [
                  e("button", {
                    onClick: t[19] || (t[19] = (o) => Ie.value = !Ie.value),
                    class: L(["di-btn-condition-toggle", { "di-condition-active": Ie.value }])
                  }, [
                    I(d(kl), { style: { width: "14px", height: "14px" } }),
                    t[112] || (t[112] = O(" このカラムは計算値を保存している ", -1)),
                    Ie.value ? (n(), s("span", Gu, "設定あり")) : v("", !0)
                  ], 2)
                ]),
                Ie.value ? (n(), s("div", Yu, [
                  e("div", Xu, [
                    t[113] || (t[113] = e("label", { class: "di-form-label" }, "計算ロジック", -1)),
                    h(e("textarea", {
                      "onUpdate:modelValue": t[20] || (t[20] = (o) => lt.value = o),
                      rows: "2",
                      placeholder: "SUM(order_items.price * quantity)、unit_price × quantity など",
                      class: "di-textarea di-textarea-mono"
                    }, null, 512), [
                      [w, lt.value]
                    ])
                  ]),
                  e("div", Wu, [
                    t[114] || (t[114] = e("label", { class: "di-form-label" }, "元データ（テーブル.カラム）", -1)),
                    e("div", Zu, [
                      (n(!0), s(M, null, D(pe.value, (o, C) => (n(), s("span", {
                        key: C,
                        class: "di-calc-tag"
                      }, [
                        O(c(o) + " ", 1),
                        e("button", {
                          onClick: de((m) => pe.value.splice(C, 1), ["stop"]),
                          class: "di-calc-tag-remove"
                        }, "×", 8, Ju)
                      ]))), 128)),
                      h(e("input", {
                        "onUpdate:modelValue": t[21] || (t[21] = (o) => Ke.value = o),
                        onFocus: t[22] || (t[22] = (o) => yt.value = !0),
                        onBlur: Hl,
                        onKeydown: t[23] || (t[23] = Bt(de((o) => Rl(), ["prevent"]), ["enter"])),
                        type: "text",
                        placeholder: "order_items.price",
                        class: "di-calc-tags-field",
                        autocomplete: "off"
                      }, null, 544), [
                        [w, Ke.value]
                      ])
                    ]),
                    yt.value && rl.value.length > 0 ? (n(), s("div", Qu, [
                      (n(!0), s(M, null, D(rl.value.slice(0, 12), (o) => (n(), s("button", {
                        key: o,
                        onMousedown: de((C) => zl(o), ["prevent"]),
                        class: "di-suggest-item"
                      }, [
                        I(d(Mt), { style: { width: "10px", height: "10px", opacity: "0.5", "flex-shrink": "0" } }),
                        O(" " + c(o), 1)
                      ], 40, Nu))), 128))
                    ])) : v("", !0),
                    t[115] || (t[115] = e("span", { class: "di-form-hint" }, "Enter で追加、またはドロップダウンから選択", -1))
                  ]),
                  e("div", er, [
                    t[117] || (t[117] = e("label", { class: "di-form-label" }, "計算タイミング", -1)),
                    h(e("select", {
                      "onUpdate:modelValue": t[24] || (t[24] = (o) => _t.value = o),
                      class: "di-select"
                    }, [...t[116] || (t[116] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "on_save" }, "保存時（アプリ側で計算）", -1),
                      e("option", { value: "trigger" }, "DBトリガー", -1),
                      e("option", { value: "batch" }, "バッチ（定期実行）", -1),
                      e("option", { value: "realtime" }, "リアルタイム（ビュー/マテビュー）", -1)
                    ])], 512), [
                      [Me, _t.value]
                    ])
                  ])
                ])) : v("", !0)
              ], 64)) : v("", !0),
              Y.value === "calculated" ? (n(), s("div", tr, [
                t[118] || (t[118] = e("label", { class: "di-form-label" }, "計算ロジック", -1)),
                e("div", {
                  class: "di-calc-tags-input",
                  onClick: t[28] || (t[28] = (o) => {
                    var C;
                    return (C = b.$refs.calcInputEl) == null ? void 0 : C.focus();
                  })
                }, [
                  (n(!0), s(M, null, D(ge.value, (o, C) => (n(), s(M, { key: C }, [
                    o.type === "tag" ? (n(), s("span", lr, [
                      O(c(o.value) + " ", 1),
                      e("button", {
                        onClick: de((m) => Ol(C), ["stop"]),
                        class: "di-calc-tag-remove"
                      }, "×", 8, or)
                    ])) : (n(), s("span", nr, c(o.value), 1))
                  ], 64))), 128)),
                  h(e("input", {
                    ref: "calcInputEl",
                    "onUpdate:modelValue": t[25] || (t[25] = (o) => a.value = o),
                    onFocus: t[26] || (t[26] = (o) => Fe.value = !0),
                    onBlur: t[27] || (t[27] = (o) => ql()),
                    onKeydown: jl,
                    type: "text",
                    placeholder: ge.value.length === 0 ? "カラムを選択 or 自由入力 (例: × 2)" : "",
                    class: "di-calc-tags-field",
                    autocomplete: "off"
                  }, null, 40, sr), [
                    [w, a.value]
                  ])
                ]),
                Fe.value && ul.value.length > 0 ? (n(), s("div", ir, [
                  (n(!0), s(M, null, D(ul.value.slice(0, 12), (o) => (n(), s("button", {
                    key: o,
                    onMousedown: de((C) => Fl(o), ["prevent"]),
                    class: "di-suggest-item"
                  }, [
                    I(d(Mt), { style: { width: "10px", height: "10px", opacity: "0.5", "flex-shrink": "0" } }),
                    O(" " + c(o), 1)
                  ], 40, ar))), 128))
                ])) : v("", !0),
                t[119] || (t[119] = e("span", { class: "di-form-hint" }, "DBカラムはドロップダウンから挿入、演算子や数値はそのまま入力", -1))
              ])) : v("", !0),
              Y.value === "static" || Y.value === "other" ? (n(), s("div", dr, [
                t[120] || (t[120] = e("label", { class: "di-form-label" }, "メモ", -1)),
                h(e("textarea", {
                  "onUpdate:modelValue": t[29] || (t[29] = (o) => ke.value = o),
                  rows: "4",
                  placeholder: "この要素についてのメモ...",
                  class: "di-textarea"
                }, null, 512), [
                  [w, ke.value]
                ])
              ])) : v("", !0),
              Y.value && Y.value !== "other" ? (n(), s(M, { key: 3 }, [
                e("div", ur, [
                  e("button", {
                    onClick: t[30] || (t[30] = (o) => We.value = !We.value),
                    class: L(["di-btn-condition-toggle", { "di-condition-active": We.value || at.value }])
                  }, [
                    I(d(Ml), { style: { width: "14px", height: "14px" } }),
                    t[121] || (t[121] = O(" 条件付き表示 ", -1)),
                    at.value ? (n(), s("span", rr, "設定あり")) : v("", !0)
                  ], 2)
                ]),
                We.value ? (n(), s("div", cr, [
                  e("div", vr, [
                    t[122] || (t[122] = e("label", { class: "di-form-label" }, "表示条件", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[31] || (t[31] = (o) => at.value = o),
                      type: "text",
                      placeholder: "管理者ロール時のみ / ステータスがactiveの時",
                      class: "di-input"
                    }, null, 512), [
                      [w, at.value]
                    ])
                  ]),
                  e("div", pr, [
                    t[123] || (t[123] = e("label", { class: "di-form-label" }, "判定カラム", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[32] || (t[32] = (o) => P.value = o),
                      type: "text",
                      placeholder: "users.role / orders.status",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [w, P.value]
                    ])
                  ]),
                  e("div", mr, [
                    e("div", fr, [
                      t[125] || (t[125] = e("label", { class: "di-form-label" }, "条件不一致時の挙動", -1)),
                      h(e("select", {
                        "onUpdate:modelValue": t[33] || (t[33] = (o) => me.value = o),
                        class: "di-select"
                      }, [...t[124] || (t[124] = [
                        e("option", { value: "" }, "未指定", -1),
                        e("option", { value: "hidden" }, "非表示", -1),
                        e("option", { value: "disabled" }, "無効化 (グレーアウト)", -1),
                        e("option", { value: "different_value" }, "別の値を表示", -1),
                        e("option", { value: "empty" }, "空欄", -1)
                      ])], 512), [
                        [Me, me.value]
                      ])
                    ])
                  ]),
                  me.value === "different_value" ? (n(), s("div", br, [
                    t[126] || (t[126] = e("label", { class: "di-form-label" }, "代わりに表示する値", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[34] || (t[34] = (o) => Oe.value = o),
                      type: "text",
                      placeholder: "「権限がありません」/ 「***」",
                      class: "di-input"
                    }, null, 512), [
                      [w, Oe.value]
                    ])
                  ])) : v("", !0)
                ])) : v("", !0)
              ], 64)) : v("", !0),
              Y.value === "db_direct" || Y.value === "db_formatted" || Y.value === "calculated" ? (n(), s(M, { key: 4 }, [
                t[134] || (t[134] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "表示の詳細")
                ], -1)),
                e("div", hr, [
                  e("div", yr, [
                    t[127] || (t[127] = e("label", { class: "di-form-label" }, "サンプル値", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[35] || (t[35] = (o) => fe.value = o),
                      type: "text",
                      placeholder: "12,500 / 田中太郎",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [w, fe.value]
                    ])
                  ]),
                  e("div", gr, [
                    t[128] || (t[128] = e("label", { class: "di-form-label" }, "単位", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[36] || (t[36] = (o) => ve.value = o),
                      type: "text",
                      placeholder: "円 / %",
                      class: "di-input"
                    }, null, 512), [
                      [w, ve.value]
                    ])
                  ])
                ]),
                e("div", kr, [
                  e("div", xr, [
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
                  e("div", wr, [
                    t[131] || (t[131] = e("label", { class: "di-form-label" }, "NULL/ゼロ時", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[38] || (t[38] = (o) => ze.value = o),
                      type: "text",
                      placeholder: "- / 0 / 非表示 / N/A",
                      class: "di-input"
                    }, null, 512), [
                      [w, ze.value]
                    ])
                  ])
                ]),
                e("div", Cr, [
                  t[132] || (t[132] = e("label", { class: "di-form-label" }, "表示フォーマット", -1)),
                  h(e("input", {
                    "onUpdate:modelValue": t[39] || (t[39] = (o) => Ve.value = o),
                    type: "text",
                    placeholder: "カンマ区切り / ¥記号付き / YYYY/MM/DD",
                    class: "di-input"
                  }, null, 512), [
                    [w, Ve.value]
                  ])
                ]),
                e("div", $r, [
                  t[133] || (t[133] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                  h(e("textarea", {
                    "onUpdate:modelValue": t[40] || (t[40] = (o) => ke.value = o),
                    rows: "2",
                    placeholder: "補足情報があれば...",
                    class: "di-textarea"
                  }, null, 512), [
                    [w, ke.value]
                  ])
                ])
              ], 64)) : v("", !0)
            ], 64)) : v("", !0),
            V.value === "action" ? (n(), s(M, { key: 1 }, [
              e("div", _r, [
                t[136] || (t[136] = e("label", { class: "di-form-label" }, "アクションタイプ", -1)),
                h(e("select", {
                  "onUpdate:modelValue": t[41] || (t[41] = (o) => q.value = o),
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
                  [Me, q.value]
                ])
              ]),
              e("div", Tr, [
                t[137] || (t[137] = e("label", { class: "di-form-label" }, "ターゲット", -1)),
                h(e("input", {
                  "onUpdate:modelValue": t[42] || (t[42] = (o) => ue.value = o),
                  type: "text",
                  placeholder: q.value === "navigate" ? "/tasks" : q.value === "api" ? "/api/users" : q.value === "modal" ? "confirm-dialog" : q.value === "csv_export" ? "/api/export/users" : q.value === "csv_import" ? "/api/import/users" : "",
                  class: "di-input di-input-mono"
                }, null, 8, Ir), [
                  [w, ue.value]
                ])
              ]),
              q.value === "api" ? (n(), s("div", Mr, [
                t[139] || (t[139] = e("label", { class: "di-form-label" }, "HTTPメソッド", -1)),
                h(e("select", {
                  "onUpdate:modelValue": t[43] || (t[43] = (o) => te.value = o),
                  class: "di-select"
                }, [...t[138] || (t[138] = [
                  e("option", { value: "" }, "選択してください", -1),
                  e("option", { value: "GET" }, "GET", -1),
                  e("option", { value: "POST" }, "POST", -1),
                  e("option", { value: "PUT" }, "PUT", -1),
                  e("option", { value: "DELETE" }, "DELETE", -1),
                  e("option", { value: "PATCH" }, "PATCH", -1)
                ])], 512), [
                  [Me, te.value]
                ])
              ])) : v("", !0),
              e("div", Sr, [
                t[140] || (t[140] = e("label", { class: "di-form-label" }, "説明", -1)),
                h(e("textarea", {
                  "onUpdate:modelValue": t[44] || (t[44] = (o) => re.value = o),
                  rows: "3",
                  placeholder: "このアクションの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [w, re.value]
                ])
              ]),
              q.value === "csv_export" || q.value === "csv_import" ? (n(), s(M, { key: 1 }, [
                e("div", Ur, [
                  e("span", null, [
                    I(d(Ul), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[141] || (t[141] = O(" CSV仕様", -1))
                  ])
                ]),
                e("div", Dr, [
                  t[148] || (t[148] = e("label", { class: "di-form-label" }, "ファイル設定", -1)),
                  e("div", Vr, [
                    e("div", Er, [
                      t[143] || (t[143] = e("label", { class: "di-form-label" }, "エンコーディング", -1)),
                      h(e("select", {
                        "onUpdate:modelValue": t[45] || (t[45] = (o) => Se.value = o),
                        class: "di-select"
                      }, [...t[142] || (t[142] = [
                        e("option", { value: "UTF-8" }, "UTF-8", -1),
                        e("option", { value: "Shift_JIS" }, "Shift_JIS", -1),
                        e("option", { value: "EUC-JP" }, "EUC-JP", -1),
                        e("option", { value: "UTF-8 BOM" }, "UTF-8 BOM", -1)
                      ])], 512), [
                        [Me, Se.value]
                      ])
                    ]),
                    e("div", Pr, [
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
                  e("div", Br, [
                    e("label", Ar, [
                      h(e("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": t[47] || (t[47] = (o) => Pe.value = o),
                        class: "di-checkbox"
                      }, null, 512), [
                        [Wt, Pe.value]
                      ]),
                      t[146] || (t[146] = O(" ヘッダー行あり ", -1))
                    ])
                  ]),
                  e("div", Lr, [
                    t[147] || (t[147] = e("label", { class: "di-form-label" }, "ファイル名パターン", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[48] || (t[48] = (o) => ot.value = o),
                      type: "text",
                      placeholder: "users_{YYYYMMDD}.csv",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [w, ot.value]
                    ])
                  ])
                ]),
                e("div", Fr, [
                  t[151] || (t[151] = e("label", { class: "di-form-label" }, "CSV列定義", -1)),
                  S.value.length > 0 ? (n(), s("div", Or, [
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
                    (n(!0), s(M, null, D(S.value, (o, C) => (n(), s("div", {
                      key: C,
                      class: "di-csv-column-row"
                    }, [
                      e("span", jr, c(C + 1), 1),
                      h(e("input", {
                        "onUpdate:modelValue": (m) => o.name = m,
                        placeholder: "項目名",
                        class: "di-csv-input di-csv-col-name"
                      }, null, 8, qr), [
                        [w, o.name]
                      ]),
                      h(e("input", {
                        "onUpdate:modelValue": (m) => o.dbMapping = m,
                        placeholder: "table.col",
                        class: "di-csv-input di-csv-col-db"
                      }, null, 8, Hr), [
                        [w, o.dbMapping]
                      ]),
                      h(e("input", {
                        "onUpdate:modelValue": (m) => o.processing = m,
                        placeholder: "姓+名, IF...",
                        class: "di-csv-input di-csv-col-proc"
                      }, null, 8, Rr), [
                        [w, o.processing]
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
                      ])], 8, zr), [
                        [Me, o.type]
                      ]),
                      e("label", Kr, [
                        h(e("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": (m) => o.required = m,
                          class: "di-checkbox"
                        }, null, 8, Gr), [
                          [Wt, o.required]
                        ])
                      ]),
                      h(e("input", {
                        "onUpdate:modelValue": (m) => o.description = m,
                        placeholder: "備考",
                        class: "di-csv-input di-csv-col-desc"
                      }, null, 8, Yr), [
                        [w, o.description]
                      ]),
                      e("div", Xr, [
                        e("button", {
                          onClick: (m) => vl(C, -1),
                          disabled: C === 0,
                          class: "di-csv-move-btn",
                          title: "上へ"
                        }, [
                          I(d(xl), { style: { width: "12px", height: "12px" } })
                        ], 8, Wr),
                        e("button", {
                          onClick: (m) => vl(C, 1),
                          disabled: C === S.value.length - 1,
                          class: "di-csv-move-btn",
                          title: "下へ"
                        }, [
                          I(d(nl), { style: { width: "12px", height: "12px" } })
                        ], 8, Zr),
                        e("button", {
                          onClick: (m) => Jl(C),
                          class: "di-csv-remove-btn",
                          title: "削除"
                        }, "×", 8, Jr)
                      ])
                    ]))), 128))
                  ])) : v("", !0),
                  e("button", {
                    onClick: Zl,
                    class: "di-btn-add-field"
                  }, " + 列を追加 ")
                ]),
                q.value === "csv_export" ? (n(), s(M, { key: 0 }, [
                  t[155] || (t[155] = e("div", { class: "di-form-divider" }, [
                    e("span", null, "出力オプション")
                  ], -1)),
                  e("div", Qr, [
                    t[152] || (t[152] = e("label", { class: "di-form-label" }, "ソート順", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[49] || (t[49] = (o) => he.value = o),
                      type: "text",
                      placeholder: "created_at DESC",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [w, he.value]
                    ])
                  ]),
                  e("div", Nr, [
                    t[153] || (t[153] = e("label", { class: "di-form-label" }, "抽出条件", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[50] || (t[50] = (o) => Ge.value = o),
                      type: "text",
                      placeholder: "status = 'active'",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [w, Ge.value]
                    ])
                  ]),
                  e("div", ec, [
                    t[154] || (t[154] = e("label", { class: "di-form-label" }, "最大行数", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[51] || (t[51] = (o) => ne.value = o),
                      type: "number",
                      placeholder: "10000",
                      class: "di-input"
                    }, null, 512), [
                      [
                        w,
                        ne.value,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ], 64)) : v("", !0),
                q.value === "csv_import" ? (n(), s(M, { key: 1 }, [
                  t[161] || (t[161] = e("div", { class: "di-form-divider" }, [
                    e("span", null, "取込オプション")
                  ], -1)),
                  e("div", tc, [
                    t[157] || (t[157] = e("label", { class: "di-form-label" }, "エラー処理", -1)),
                    h(e("select", {
                      "onUpdate:modelValue": t[52] || (t[52] = (o) => qe.value = o),
                      class: "di-select"
                    }, [...t[156] || (t[156] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "stop_on_first" }, "最初のエラーで停止", -1),
                      e("option", { value: "skip_and_continue" }, "スキップして続行", -1),
                      e("option", { value: "collect_all" }, "全エラー収集", -1)
                    ])], 512), [
                      [Me, qe.value]
                    ])
                  ]),
                  e("div", lc, [
                    t[159] || (t[159] = e("label", { class: "di-form-label" }, "重複処理", -1)),
                    h(e("select", {
                      "onUpdate:modelValue": t[53] || (t[53] = (o) => E.value = o),
                      class: "di-select"
                    }, [...t[158] || (t[158] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "skip" }, "スキップ", -1),
                      e("option", { value: "overwrite" }, "上書き", -1),
                      e("option", { value: "error" }, "エラー", -1)
                    ])], 512), [
                      [Me, E.value]
                    ])
                  ]),
                  e("div", oc, [
                    t[160] || (t[160] = e("label", { class: "di-form-label" }, "事前バリデーション", -1)),
                    h(e("textarea", {
                      "onUpdate:modelValue": t[54] || (t[54] = (o) => B.value = o),
                      rows: "2",
                      placeholder: "取込前のチェック内容...",
                      class: "di-textarea"
                    }, null, 512), [
                      [w, B.value]
                    ])
                  ])
                ], 64)) : v("", !0),
                t[165] || (t[165] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "エラー定義")
                ], -1)),
                e("div", nc, [
                  g.value.length > 0 ? (n(), s("div", sc, [
                    t[164] || (t[164] = e("div", { class: "di-csv-columns-header" }, [
                      e("span", { class: "di-csv-err-col" }, "対象列"),
                      e("span", { class: "di-csv-err-cond" }, "エラー条件"),
                      e("span", { class: "di-csv-err-msg" }, "エラーメッセージ"),
                      e("span", { class: "di-csv-err-sev" }, "種別"),
                      e("span", { class: "di-csv-err-act" })
                    ], -1)),
                    (n(!0), s(M, null, D(g.value, (o, C) => (n(), s("div", {
                      key: C,
                      class: "di-csv-column-row"
                    }, [
                      h(e("select", {
                        "onUpdate:modelValue": (m) => o.column = m,
                        class: "di-csv-select di-csv-err-col"
                      }, [
                        t[162] || (t[162] = e("option", { value: "" }, "（全体）", -1)),
                        (n(!0), s(M, null, D(lo.value, (m) => (n(), s("option", {
                          key: m,
                          value: m
                        }, c(m), 9, ac))), 128))
                      ], 8, ic), [
                        [Me, o.column]
                      ]),
                      h(e("input", {
                        "onUpdate:modelValue": (m) => o.condition = m,
                        placeholder: "必須項目が空",
                        class: "di-csv-input di-csv-err-cond"
                      }, null, 8, dc), [
                        [w, o.condition]
                      ]),
                      h(e("input", {
                        "onUpdate:modelValue": (m) => o.message = m,
                        placeholder: "○○は必須です",
                        class: "di-csv-input di-csv-err-msg"
                      }, null, 8, uc), [
                        [w, o.message]
                      ]),
                      h(e("select", {
                        "onUpdate:modelValue": (m) => o.severity = m,
                        class: "di-csv-select di-csv-err-sev"
                      }, [...t[163] || (t[163] = [
                        e("option", { value: "error" }, "エラー", -1),
                        e("option", { value: "warning" }, "警告", -1)
                      ])], 8, rc), [
                        [Me, o.severity]
                      ]),
                      e("button", {
                        onClick: (m) => to(C),
                        class: "di-csv-remove-btn",
                        title: "削除"
                      }, "×", 8, cc)
                    ]))), 128))
                  ])) : v("", !0),
                  e("button", {
                    onClick: eo,
                    class: "di-btn-add-field"
                  }, " + エラー定義を追加 ")
                ])
              ], 64)) : v("", !0),
              q.value === "email" ? (n(), s(M, { key: 2 }, [
                e("div", vc, [
                  e("span", null, [
                    I(d(Io), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[166] || (t[166] = O(" メール基本設定", -1))
                  ])
                ]),
                e("div", pc, [
                  e("div", mc, [
                    t[167] || (t[167] = e("label", { class: "di-form-label" }, "トリガー *", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[55] || (t[55] = (o) => j.value = o),
                      type: "text",
                      placeholder: "注文確定時、ボタンクリック",
                      class: "di-input"
                    }, null, 512), [
                      [w, j.value]
                    ])
                  ]),
                  e("div", fc, [
                    t[168] || (t[168] = e("label", { class: "di-form-label" }, "宛先 *", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[56] || (t[56] = (o) => z.value = o),
                      type: "text",
                      placeholder: "ユーザーメール、管理者固定",
                      class: "di-input"
                    }, null, 512), [
                      [w, z.value]
                    ])
                  ])
                ]),
                e("div", bc, [
                  e("div", hc, [
                    t[169] || (t[169] = e("label", { class: "di-form-label" }, "CC", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[57] || (t[57] = (o) => se.value = o),
                      type: "text",
                      placeholder: "CC宛先",
                      class: "di-input"
                    }, null, 512), [
                      [w, se.value]
                    ])
                  ]),
                  e("div", yc, [
                    t[170] || (t[170] = e("label", { class: "di-form-label" }, "BCC", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[58] || (t[58] = (o) => K.value = o),
                      type: "text",
                      placeholder: "BCC宛先",
                      class: "di-input"
                    }, null, 512), [
                      [w, K.value]
                    ])
                  ])
                ]),
                e("div", gc, [
                  t[171] || (t[171] = e("label", { class: "di-form-label" }, "件名テンプレート *", -1)),
                  h(e("input", {
                    "onUpdate:modelValue": t[59] || (t[59] = (o) => ee.value = o),
                    type: "text",
                    placeholder: "【注文確認】ご注文番号 {orderNumber}",
                    class: "di-input"
                  }, null, 512), [
                    [w, ee.value]
                  ])
                ]),
                e("div", kc, [
                  t[172] || (t[172] = e("label", { class: "di-form-label" }, "本文テンプレート概要", -1)),
                  h(e("textarea", {
                    "onUpdate:modelValue": t[60] || (t[60] = (o) => A.value = o),
                    rows: "3",
                    placeholder: "本文の概要を記述...",
                    class: "di-textarea"
                  }, null, 512), [
                    [w, A.value]
                  ])
                ]),
                e("div", xc, [
                  t[173] || (t[173] = e("label", { class: "di-form-label" }, "テンプレートファイルパス", -1)),
                  h(e("input", {
                    "onUpdate:modelValue": t[61] || (t[61] = (o) => _.value = o),
                    type: "text",
                    placeholder: "resources/mail/order_confirm.blade.php",
                    class: "di-input di-input-mono"
                  }, null, 512), [
                    [w, _.value]
                  ])
                ]),
                t[178] || (t[178] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "差し込み変数")
                ], -1)),
                e("div", wc, [
                  e("div", Cc, [
                    (n(!0), s(M, null, D(U.value, (o, C) => (n(), s("span", {
                      key: C,
                      class: "di-calc-tag"
                    }, [
                      O(c(o) + " ", 1),
                      e("button", {
                        onClick: de((m) => io(C), ["stop"]),
                        class: "di-calc-tag-remove"
                      }, "×", 8, $c)
                    ]))), 128)),
                    h(e("input", {
                      "onUpdate:modelValue": t[62] || (t[62] = (o) => Te.value = o),
                      onKeydown: [
                        t[63] || (t[63] = Bt(de((o) => so(), ["prevent"]), ["enter"])),
                        ao
                      ],
                      type: "text",
                      placeholder: "変数名を入力してEnter (例: userName)",
                      class: "di-calc-tags-field",
                      autocomplete: "off"
                    }, null, 544), [
                      [w, Te.value]
                    ])
                  ]),
                  t[174] || (t[174] = e("span", { class: "di-form-hint" }, "Enter で追加", -1))
                ]),
                t[179] || (t[179] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "オプション")
                ], -1)),
                e("div", _c, [
                  t[175] || (t[175] = e("label", { class: "di-form-label" }, "添付ファイル", -1)),
                  h(e("input", {
                    "onUpdate:modelValue": t[64] || (t[64] = (o) => J.value = o),
                    type: "text",
                    placeholder: "添付ファイルの説明",
                    class: "di-input"
                  }, null, 512), [
                    [w, J.value]
                  ])
                ]),
                e("div", Tc, [
                  t[176] || (t[176] = e("label", { class: "di-form-label" }, "送信条件", -1)),
                  h(e("input", {
                    "onUpdate:modelValue": t[65] || (t[65] = (o) => Ze.value = o),
                    type: "text",
                    placeholder: "メール送信設定がONの場合",
                    class: "di-input"
                  }, null, 512), [
                    [w, Ze.value]
                  ])
                ]),
                e("div", Ic, [
                  t[177] || (t[177] = e("label", { class: "di-form-label" }, "エラー処理", -1)),
                  h(e("input", {
                    "onUpdate:modelValue": t[66] || (t[66] = (o) => ye.value = o),
                    type: "text",
                    placeholder: "キューに入れてリトライ",
                    class: "di-input"
                  }, null, 512), [
                    [w, ye.value]
                  ])
                ])
              ], 64)) : v("", !0),
              q.value === "sort" ? (n(), s(M, { key: 3 }, [
                e("div", Mc, [
                  e("span", null, [
                    I(d(bo), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[180] || (t[180] = O(" ソート設定", -1))
                  ])
                ]),
                e("div", Sc, [
                  e("label", Uc, [
                    h(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": t[67] || (t[67] = (o) => Je.value = o),
                      class: "di-checkbox"
                    }, null, 512), [
                      [Wt, Je.value]
                    ]),
                    t[181] || (t[181] = O(" このカラムはソート可能 ", -1))
                  ])
                ]),
                Je.value ? (n(), s(M, { key: 0 }, [
                  e("div", Dc, [
                    e("div", Vc, [
                      t[183] || (t[183] = e("label", { class: "di-form-label" }, "データ型", -1)),
                      h(e("select", {
                        "onUpdate:modelValue": t[68] || (t[68] = (o) => nt.value = o),
                        class: "di-select"
                      }, [...t[182] || (t[182] = [
                        e("option", { value: "" }, "未指定", -1),
                        e("option", { value: "string" }, "文字列", -1),
                        e("option", { value: "number" }, "数値", -1),
                        e("option", { value: "date" }, "日付", -1),
                        e("option", { value: "custom" }, "カスタム", -1)
                      ])], 512), [
                        [Me, nt.value]
                      ])
                    ]),
                    e("div", Ec, [
                      t[185] || (t[185] = e("label", { class: "di-form-label" }, "デフォルト方向", -1)),
                      h(e("select", {
                        "onUpdate:modelValue": t[69] || (t[69] = (o) => He.value = o),
                        class: "di-select"
                      }, [...t[184] || (t[184] = [
                        e("option", { value: "" }, "未指定", -1),
                        e("option", { value: "asc" }, "昇順 (A→Z, 1→9)", -1),
                        e("option", { value: "desc" }, "降順 (Z→A, 9→1)", -1)
                      ])], 512), [
                        [Me, He.value]
                      ])
                    ])
                  ]),
                  e("div", Pc, [
                    t[186] || (t[186] = e("label", { class: "di-form-label" }, "ソートキー (DBカラム/APIフィールド)", -1)),
                    h(e("input", {
                      "onUpdate:modelValue": t[70] || (t[70] = (o) => Ye.value = o),
                      type: "text",
                      placeholder: "users.name / created_at",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [w, Ye.value]
                    ])
                  ]),
                  e("div", Bc, [
                    e("label", Ac, [
                      h(e("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": t[71] || (t[71] = (o) => Q.value = o),
                        class: "di-checkbox"
                      }, null, 512), [
                        [Wt, Q.value]
                      ]),
                      t[187] || (t[187] = O(" 初期表示時のデフォルトソート ", -1))
                    ])
                  ])
                ], 64)) : v("", !0),
                e("div", Lc, [
                  t[188] || (t[188] = e("label", { class: "di-form-label" }, "未ソート時の並び順", -1)),
                  h(e("input", {
                    "onUpdate:modelValue": t[72] || (t[72] = (o) => Be.value = o),
                    type: "text",
                    placeholder: "ID昇順 / 登録日降順 / APIレスポンス順",
                    class: "di-input"
                  }, null, 512), [
                    [w, Be.value]
                  ])
                ]),
                e("div", Fc, [
                  t[189] || (t[189] = e("label", { class: "di-form-label" }, "補足", -1)),
                  h(e("input", {
                    "onUpdate:modelValue": t[73] || (t[73] = (o) => ut.value = o),
                    type: "text",
                    placeholder: "サーバーサイドソート / ページネーション時はリセット",
                    class: "di-input"
                  }, null, 512), [
                    [w, ut.value]
                  ])
                ])
              ], 64)) : v("", !0),
              e("div", Oc, [
                t[190] || (t[190] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                h(e("textarea", {
                  "onUpdate:modelValue": t[74] || (t[74] = (o) => ke.value = o),
                  rows: "2",
                  placeholder: "補足情報があれば...",
                  class: "di-textarea"
                }, null, 512), [
                  [w, ke.value]
                ])
              ])
            ], 64)) : v("", !0),
            V.value === "form" ? (n(), s(M, { key: 2 }, [
              e("div", jc, [
                t[192] || (t[192] = e("label", { class: "di-form-label" }, "入力タイプ", -1)),
                h(e("select", {
                  "onUpdate:modelValue": t[75] || (t[75] = (o) => we.value = o),
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
                  [Me, we.value]
                ])
              ]),
              De.value.length > 0 ? (n(), s("div", qc, [
                t[193] || (t[193] = e("label", { class: "di-form-label" }, "対応カラム", -1)),
                e("div", Hc, [
                  (n(!0), s(M, null, D(De.value, (o, C) => (n(), s("div", {
                    key: C,
                    class: "di-field-tag"
                  }, [
                    e("span", Rc, c(o.table) + "." + c(o.column), 1),
                    o.type ? (n(), s("span", zc, c(o.type), 1)) : v("", !0),
                    e("button", {
                      onClick: (m) => il(C),
                      class: "di-field-tag-remove"
                    }, "×", 8, Kc)
                  ]))), 128))
                ])
              ])) : v("", !0),
              tl.value ? (n(), s("div", Gc, [
                e("div", Yc, [
                  e("label", Xc, [
                    I(d(Mt), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[194] || (t[194] = O(" 対応するDBカラム ", -1))
                  ]),
                  e("div", Wc, [
                    h(e("input", {
                      "onUpdate:modelValue": t[76] || (t[76] = (o) => kt.value = o),
                      onFocus: t[77] || (t[77] = (o) => It.value = !0),
                      type: "text",
                      placeholder: "テーブル.カラムを検索...",
                      class: "di-input di-binding-search"
                    }, null, 544), [
                      [w, kt.value]
                    ]),
                    kt.value ? (n(), s("button", {
                      key: 0,
                      onClick: t[78] || (t[78] = (o) => {
                        kt.value = "", It.value = !1;
                      }),
                      class: "di-binding-clear"
                    }, [
                      I(d(xt), { style: { width: "14px", height: "14px" } })
                    ])) : v("", !0)
                  ]),
                  It.value && Ht.value.length > 0 ? (n(), s("div", Zc, [
                    (n(!0), s(M, null, D(Ht.value, (o) => (n(), s("button", {
                      key: o.fullName,
                      onClick: (C) => sl(o),
                      class: "di-binding-item has-db"
                    }, [
                      e("div", Qc, [
                        e("span", Nc, c(o.fullName), 1),
                        e("span", ev, c(o.type), 1)
                      ]),
                      o.comment ? (n(), s("span", tv, c(o.comment), 1)) : v("", !0)
                    ], 8, Jc))), 128))
                  ])) : v("", !0)
                ])
              ])) : v("", !0),
              tt.value && (we.value === "select" || we.value === "radio" || we.value === "checkbox") ? (n(), s("div", lv, [
                e("button", {
                  onClick: ml,
                  class: L(["di-btn-condition-toggle", { "di-condition-active": et.value }])
                }, [
                  I(d($l), { style: { width: "14px", height: "14px" } }),
                  t[195] || (t[195] = O(" 選択肢を定義 ", -1)),
                  $t.value ? (n(), s("span", ov, c($t.value.entries.length) + "件", 1)) : v("", !0)
                ], 2),
                et.value ? (n(), s("div", nv, [
                  Xe.value.length > 0 ? (n(), s("div", sv, [
                    t[196] || (t[196] = e("div", { class: "di-master-entries-header" }, [
                      e("span", { class: "di-master-col-val" }, "値"),
                      e("span", { class: "di-master-col-lbl" }, "ラベル"),
                      e("span", { class: "di-master-col-color" }, "色"),
                      e("span", { class: "di-master-col-act" })
                    ], -1)),
                    (n(!0), s(M, null, D(Xe.value, (o, C) => (n(), s("div", {
                      key: C,
                      class: "di-master-entry-row"
                    }, [
                      h(e("input", {
                        "onUpdate:modelValue": (m) => o.value = m,
                        placeholder: "1",
                        class: "di-master-input di-master-col-val"
                      }, null, 8, iv), [
                        [w, o.value]
                      ]),
                      h(e("input", {
                        "onUpdate:modelValue": (m) => o.label = m,
                        placeholder: "受付",
                        class: "di-master-input di-master-col-lbl"
                      }, null, 8, av), [
                        [w, o.label]
                      ]),
                      h(e("input", {
                        "onUpdate:modelValue": (m) => o.color = m,
                        type: "color",
                        class: "di-master-color-input"
                      }, null, 8, dv), [
                        [w, o.color]
                      ]),
                      e("button", {
                        onClick: (m) => bl(C),
                        class: "di-master-entry-remove"
                      }, "×", 8, uv)
                    ]))), 128))
                  ])) : v("", !0),
                  e("button", {
                    onClick: fl,
                    class: "di-btn-add-field",
                    style: { "margin-top": "4px" }
                  }, " + 値を追加 ")
                ])) : v("", !0)
              ])) : v("", !0),
              e("div", rv, [
                e("button", {
                  onClick: t[79] || (t[79] = (o) => Z.value = !Z.value),
                  class: L(["di-btn-condition-toggle", { "di-condition-active": Z.value }])
                }, [
                  I(d(Ml), { style: { width: "14px", height: "14px" } }),
                  t[197] || (t[197] = O(" 必須入力 ", -1)),
                  Z.value ? (n(), s("span", cv, "必須")) : v("", !0)
                ], 2)
              ]),
              e("div", vv, [
                t[198] || (t[198] = e("label", { class: "di-form-label" }, "バリデーションルール", -1)),
                e("div", pv, [
                  (n(!0), s(M, null, D(Ce.value, (o, C) => (n(), s("span", {
                    key: C,
                    class: "di-calc-tag",
                    style: { background: "#ec4899" }
                  }, [
                    O(c(o) + " ", 1),
                    e("button", {
                      onClick: de((m) => Xl(C), ["stop"]),
                      class: "di-calc-tag-remove"
                    }, "×", 8, mv)
                  ]))), 128)),
                  h(e("input", {
                    "onUpdate:modelValue": t[80] || (t[80] = (o) => le.value = o),
                    onKeydown: [
                      t[81] || (t[81] = Bt(de((o) => Yl(), ["prevent"]), ["enter"])),
                      Wl
                    ],
                    type: "text",
                    placeholder: Ce.value.length === 0 ? "max:255, email, 必須 など (Enter で追加)" : "",
                    class: "di-calc-tags-field",
                    autocomplete: "off"
                  }, null, 40, fv), [
                    [w, le.value]
                  ])
                ]),
                t[199] || (t[199] = e("span", { class: "di-form-hint" }, "Enter で追加、Backspace で削除", -1))
              ]),
              e("div", bv, [
                t[200] || (t[200] = e("label", { class: "di-form-label" }, "プレースホルダー", -1)),
                h(e("input", {
                  "onUpdate:modelValue": t[82] || (t[82] = (o) => $e.value = o),
                  type: "text",
                  placeholder: "例: user@example.com",
                  class: "di-input"
                }, null, 512), [
                  [w, $e.value]
                ])
              ]),
              e("div", hv, [
                t[201] || (t[201] = e("label", { class: "di-form-label" }, "デフォルト値", -1)),
                h(e("input", {
                  "onUpdate:modelValue": t[83] || (t[83] = (o) => _e.value = o),
                  type: "text",
                  placeholder: "初期値",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [w, _e.value]
                ])
              ]),
              e("div", yv, [
                t[202] || (t[202] = e("label", { class: "di-form-label" }, "説明", -1)),
                h(e("textarea", {
                  "onUpdate:modelValue": t[84] || (t[84] = (o) => be.value = o),
                  rows: "3",
                  placeholder: "このフォーム要素の説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [w, be.value]
                ])
              ]),
              e("div", gv, [
                t[203] || (t[203] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                h(e("textarea", {
                  "onUpdate:modelValue": t[85] || (t[85] = (o) => ke.value = o),
                  rows: "2",
                  placeholder: "補足情報があれば...",
                  class: "di-textarea"
                }, null, 512), [
                  [w, ke.value]
                ])
              ])
            ], 64)) : v("", !0),
            V.value === "chart" ? (n(), s(M, { key: 3 }, [
              e("div", kv, [
                t[205] || (t[205] = e("label", { class: "di-form-label" }, "チャート種別", -1)),
                h(e("select", {
                  "onUpdate:modelValue": t[86] || (t[86] = (o) => Qe.value = o),
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
                  [Me, Qe.value]
                ])
              ]),
              e("div", xv, [
                t[206] || (t[206] = e("label", { class: "di-form-label" }, "タイトル", -1)),
                h(e("input", {
                  "onUpdate:modelValue": t[87] || (t[87] = (o) => rt.value = o),
                  type: "text",
                  placeholder: "例: 月別受講者数",
                  class: "di-input"
                }, null, 512), [
                  [w, rt.value]
                ])
              ]),
              e("div", wv, [
                e("div", Cv, [
                  t[207] || (t[207] = e("label", { class: "di-form-label" }, "X軸", -1)),
                  h(e("input", {
                    "onUpdate:modelValue": t[88] || (t[88] = (o) => ct.value = o),
                    type: "text",
                    placeholder: "例: 月, 日付",
                    class: "di-input"
                  }, null, 512), [
                    [w, ct.value]
                  ])
                ]),
                e("div", $v, [
                  t[208] || (t[208] = e("label", { class: "di-form-label" }, "Y軸", -1)),
                  h(e("input", {
                    "onUpdate:modelValue": t[89] || (t[89] = (o) => vt.value = o),
                    type: "text",
                    placeholder: "例: 件数, 金額",
                    class: "di-input"
                  }, null, 512), [
                    [w, vt.value]
                  ])
                ])
              ]),
              e("div", _v, [
                t[210] || (t[210] = e("label", { class: "di-form-label" }, "系列定義", -1)),
                xe.value.length > 0 ? (n(), s("div", Tv, [
                  t[209] || (t[209] = e("div", { class: "di-csv-columns-header" }, [
                    e("span", { class: "di-chart-col-label" }, "系列名"),
                    e("span", { class: "di-chart-col-field" }, "フィールド"),
                    e("span", { class: "di-chart-col-color" }, "色"),
                    e("span", { class: "di-csv-col-act" })
                  ], -1)),
                  (n(!0), s(M, null, D(xe.value, (o, C) => (n(), s("div", {
                    key: C,
                    class: "di-csv-column-row"
                  }, [
                    h(e("input", {
                      "onUpdate:modelValue": (m) => o.label = m,
                      placeholder: "予習",
                      class: "di-csv-input di-chart-col-label"
                    }, null, 8, Iv), [
                      [w, o.label]
                    ]),
                    h(e("input", {
                      "onUpdate:modelValue": (m) => o.field = m,
                      placeholder: "preview_count",
                      class: "di-csv-input di-chart-col-field"
                    }, null, 8, Mv), [
                      [w, o.field]
                    ]),
                    h(e("input", {
                      "onUpdate:modelValue": (m) => o.color = m,
                      type: "color",
                      class: "di-master-color-input"
                    }, null, 8, Sv), [
                      [w, o.color]
                    ]),
                    e("div", Uv, [
                      e("button", {
                        onClick: (m) => pl(C, -1),
                        disabled: C === 0,
                        class: "di-csv-move-btn",
                        title: "上へ"
                      }, [
                        I(d(xl), { style: { width: "12px", height: "12px" } })
                      ], 8, Dv),
                      e("button", {
                        onClick: (m) => pl(C, 1),
                        disabled: C === xe.value.length - 1,
                        class: "di-csv-move-btn",
                        title: "下へ"
                      }, [
                        I(d(nl), { style: { width: "12px", height: "12px" } })
                      ], 8, Vv),
                      e("button", {
                        onClick: (m) => Nl(C),
                        class: "di-csv-remove-btn",
                        title: "削除"
                      }, "×", 8, Ev)
                    ])
                  ]))), 128))
                ])) : v("", !0),
                e("button", {
                  onClick: Ql,
                  class: "di-btn-add-field"
                }, " + 系列を追加 ")
              ]),
              e("div", Pv, [
                t[211] || (t[211] = e("label", { class: "di-form-label" }, "データ取得元", -1)),
                h(e("input", {
                  "onUpdate:modelValue": t[90] || (t[90] = (o) => Ae.value = o),
                  type: "text",
                  placeholder: "例: GET /api/stats/monthly",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [w, Ae.value]
                ])
              ]),
              e("div", Bv, [
                t[212] || (t[212] = e("label", { class: "di-form-label" }, "集計方法", -1)),
                h(e("input", {
                  "onUpdate:modelValue": t[91] || (t[91] = (o) => Ue.value = o),
                  type: "text",
                  placeholder: "例: 月別集計, GROUP BY month",
                  class: "di-input"
                }, null, 512), [
                  [w, Ue.value]
                ])
              ]),
              e("div", Av, [
                t[213] || (t[213] = e("label", { class: "di-form-label" }, "フィルタ条件", -1)),
                h(e("input", {
                  "onUpdate:modelValue": t[92] || (t[92] = (o) => Re.value = o),
                  type: "text",
                  placeholder: "例: 直近12ヶ月, status=active",
                  class: "di-input"
                }, null, 512), [
                  [w, Re.value]
                ])
              ]),
              e("div", Lv, [
                t[214] || (t[214] = e("label", { class: "di-form-label" }, "説明", -1)),
                h(e("textarea", {
                  "onUpdate:modelValue": t[93] || (t[93] = (o) => st.value = o),
                  rows: "3",
                  placeholder: "このチャートの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [w, st.value]
                ])
              ])
            ], 64)) : v("", !0)
          ]),
          e("div", Fv, [
            e("button", {
              onClick: Tt,
              class: "di-btn-delete"
            }, [
              I(d(Rt), { style: { width: "14px", height: "14px" } }),
              t[215] || (t[215] = O(" 削除 ", -1))
            ]),
            e("div", Ov, [
              e("button", {
                onClick: $,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: oe,
                class: "di-btn-save"
              }, [
                I(d(Dl), { style: { width: "14px", height: "14px" } }),
                t[216] || (t[216] = O(" 保存 ", -1))
              ])
            ])
          ])
        ], 2)
      ])) : v("", !0)
    ], 8, ["to"]));
  }
}), qv = /* @__PURE__ */ el(jv, [["__scopeId", "data-v-9d5a69a4"]]), Hv = {
  key: 0,
  "data-dev-inspector": "",
  class: "di-loading-overlay"
}, Rv = { class: "di-highlight-label" }, zv = ["onClick"], Kv = {
  key: 0,
  class: "di-note-label-row"
}, Gv = ["onClick"], Yv = {
  "data-dev-inspector": "",
  class: "di-scan-banner"
}, Xv = ["onClick"], Wv = { class: "di-analysis-type" }, Zv = {
  key: 0,
  class: "di-analysis-tags"
}, Jv = {
  key: 1,
  class: "di-analysis-db"
}, Qv = {
  key: 2,
  class: "di-analysis-api-source"
}, Nv = {
  key: 3,
  class: "di-analysis-conditional"
}, ep = ["onClick"], tp = {
  key: 0,
  class: "di-analysis-text"
}, lp = {
  "data-dev-inspector": "",
  class: "di-analysis-banner"
}, op = ["onClick"], np = {
  key: 0,
  class: "di-unannotated-label-text"
}, sp = /* @__PURE__ */ Kt({
  __name: "DevPickOverlay",
  setup(N) {
    const k = Gt(), r = Nt("teleportTarget", "body"), V = y(null), q = y(null), ue = y(0), te = y(0), re = y(0), we = {
      db_direct: "#3b82f6",
      db_formatted: "#8b5cf6",
      calculated: "#f59e0b",
      static: "#10b981",
      other: "#94a3b8"
    }, Z = {
      action: "#a78bfa",
      form: "#ec4899"
    };
    function Ce(E) {
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
      }[E] || E;
    }
    function le(E) {
      var g, j;
      const B = k.getElementConfig(E);
      if (B != null && B.elementType && Z[B.elementType])
        return Z[B.elementType];
      if ((g = B == null ? void 0 : B.note) != null && g.displayType)
        return we[B.note.displayType] || "#60a5fa";
      if (!(B != null && B.sourceBinding)) {
        const z = ((j = B == null ? void 0 : B.note) == null ? void 0 : j.type) || "info";
        return {
          info: "#60a5fa",
          warning: "#fbbf24",
          todo: "#10b981",
          question: "#a78bfa"
        }[z] || "#60a5fa";
      }
      return B.sourceBinding.isStatic ? "#10b981" : B.sourceBinding.type === "v-model" ? "#8b5cf6" : B.sourceBinding.type === "api" ? "#f59e0b" : "#60a5fa";
    }
    function $e(E) {
      var K, ee, A, _, U;
      const B = k.noteHighlightFilter;
      if (B === "all") return !0;
      const g = k.getElementConfig(E);
      if (!g) return !1;
      const j = (K = g.note) == null ? void 0 : K.displayType, z = !!((ee = g.note) != null && ee.condition || (A = g.note) != null && A.conditionColumn), se = !!((_ = g.note) != null && _.storedCalc);
      switch (B) {
        case "db":
          return j === "db_direct" || j === "db_formatted";
        case "calculated":
          return j === "calculated";
        case "storedCalc":
          return se;
        case "static":
          return j === "static";
        case "conditional":
          return z;
        case "action":
          return g.elementType === "action";
        case "form":
          return g.elementType === "form";
        case "other":
          return j === "other" || !j && !g.elementType && !!((U = g.note) != null && U.text);
        default:
          return !0;
      }
    }
    function _e() {
      var z, se;
      const E = document.querySelector("dialog[open]");
      if (E) return E;
      const B = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
      for (const K of B) {
        const ee = K.getBoundingClientRect();
        if (ee.width > 0 && ee.height > 0) return K;
      }
      const g = '.v-overlay--active .v-overlay__content, .el-dialog__wrapper:not([style*="display: none"]) .el-dialog, .modal.show .modal-dialog, .modal-overlay[style*="display: block"], .v-dialog--active';
      try {
        const K = document.querySelector(g);
        if (K) {
          const ee = K.getBoundingClientRect();
          if (ee.width > 0 && ee.height > 0) return K;
        }
      } catch {
      }
      const j = document.querySelectorAll(".fixed.inset-0, .fixed.inset-x-0.inset-y-0, [data-modal], [data-overlay]");
      for (const K of j) {
        if (((z = K.dataset) == null ? void 0 : z.devInspector) !== void 0) continue;
        const ee = getComputedStyle(K), A = parseInt(ee.zIndex, 10);
        if (isNaN(A) || A < 40) continue;
        const _ = K.getBoundingClientRect();
        if (_.width >= window.innerWidth * 0.9 && _.height >= window.innerHeight * 0.9)
          return K;
      }
      for (const K of document.body.children) {
        if (((se = K.dataset) == null ? void 0 : se.devInspector) !== void 0) continue;
        const ee = getComputedStyle(K);
        if (ee.position !== "fixed") continue;
        const A = parseInt(ee.zIndex, 10);
        if (isNaN(A) || A < 40) continue;
        const _ = K.getBoundingClientRect();
        if (_.width >= window.innerWidth * 0.9 && _.height >= window.innerHeight * 0.9)
          return K;
      }
      return null;
    }
    function be(E, B) {
      return B.contains(E);
    }
    const S = H(() => {
      var se, K, ee, A, _, U, Te, J, Ze, ye, Je, nt, Ye, He, Q, Be, ut, Qe, rt, ct, vt, xe, Ae, Ue, Re, st, G, Ne, bt, it, St, Ct, Ut, Dt, At, Lt, Ft, Ot, et, Xe, tt, $t, Y, De, ce, Le, pt;
      const E = ue.value, B = te.value;
      re.value;
      const g = [];
      if (!k.isEnabled) return g;
      const j = _e(), z = k.getConfiguredSelectors();
      for (const mt of z)
        try {
          const gt = document.querySelector(mt);
          if (gt) {
            if (j && !be(gt, j)) continue;
            const ge = gt.getBoundingClientRect(), a = k.getElementConfig(mt), Fe = ((se = a == null ? void 0 : a.sourceBinding) == null ? void 0 : se.isStatic) || !1, fe = ((K = a == null ? void 0 : a.sourceBinding) == null ? void 0 : K.type) || "";
            let X = "", ve = "";
            const ze = (ee = a == null ? void 0 : a.note) == null ? void 0 : ee.displayType, Ve = [];
            if ((A = a == null ? void 0 : a.note) != null && A.sampleValue ? Ve.push(`例: ${a.note.sampleValue}${a.note.unit ? a.note.unit : ""}`) : (_ = a == null ? void 0 : a.note) != null && _.unit && Ve.push(`単位: ${a.note.unit}`), (U = a == null ? void 0 : a.note) != null && U.decimalHandling) {
              const P = { round: "四捨五入", floor: "切り捨て", ceil: "切り上げ", decimal_1: "小数第1位", decimal_2: "小数第2位", integer: "整数" };
              Ve.push(P[a.note.decimalHandling] || a.note.decimalHandling);
            }
            (Te = a == null ? void 0 : a.note) != null && Te.nullDisplay && Ve.push(`NULL時: ${a.note.nullDisplay}`), (J = a == null ? void 0 : a.note) != null && J.displayFormat && Ve.push(a.note.displayFormat);
            const Ie = Ve.length > 0 ? `
${Ve.join(" / ")}` : "", lt = !!((Ze = a == null ? void 0 : a.note) != null && Ze.condition || (ye = a == null ? void 0 : a.note) != null && ye.conditionColumn);
            let pe = "";
            if (lt) {
              const P = { hidden: "非表示", disabled: "無効化", different_value: "別の値", empty: "空欄" }, me = [];
              (Je = a == null ? void 0 : a.note) != null && Je.condition && me.push(a.note.condition), (nt = a == null ? void 0 : a.note) != null && nt.conditionColumn && me.push(`判定: ${a.note.conditionColumn}`), (Ye = a == null ? void 0 : a.note) != null && Ye.hiddenBehavior && me.push(`不一致時: ${P[a.note.hiddenBehavior] || a.note.hiddenBehavior}`), (He = a == null ? void 0 : a.note) != null && He.hiddenNote && me.push(`→ ${a.note.hiddenNote}`), pe = `
条件: ${me.join(" / ")}`;
            }
            const Ke = lt ? " ⚡" : "";
            if ((a == null ? void 0 : a.elementType) === "action" && (a != null && a.actionInfo)) {
              const P = a.actionInfo;
              P.type === "navigate" ? X = `遷移: ${P.target || "?"}` : P.type === "api" ? X = `API: ${P.method || "GET"} ${P.target || "?"}` : P.type === "modal" ? X = `モーダル: ${P.target || "?"}` : P.type === "emit" ? X = `イベント: ${P.target || "?"}` : P.type === "function" ? X = `関数: ${P.target || "?"}` : X = "アクション", ve = (P.description || X) + ((Q = a == null ? void 0 : a.note) != null && Q.text ? `
${a.note.text}` : "");
            } else if ((a == null ? void 0 : a.elementType) === "form" && (a != null && a.formInfo)) {
              const P = a.formInfo, me = (Be = a == null ? void 0 : a.fieldInfoList) != null && Be.length ? a.fieldInfoList : a != null && a.fieldInfo ? [a.fieldInfo] : [], Oe = me.length > 0 ? me.map((ht) => `${ht.table}.${ht.column}`).join(", ") : "", We = me.length > 0 ? `${me[0].table}.${me[0].column}` : "", ke = We ? k.getMasterDefinition(We) : null;
              P.inputType === "select" ? X = `選択: ${Oe || P.description || "?"}${ke ? ` (${ke.entries.length}件)` : ""}` : P.inputType === "textarea" ? X = `テキスト: ${Oe || P.description || "?"}` : P.inputType === "checkbox" ? X = `チェック: ${Oe || P.description || "?"}` : P.inputType === "radio" ? X = `ラジオ: ${Oe || P.description || "?"}` : X = `入力: ${Oe || P.description || P.inputType || "?"}`, P.required && (X += " (必須)");
              const ie = [];
              P.description && ie.push(P.description), (ut = P.validation) != null && ut.length && ie.push(`検証: ${P.validation.join(", ")}`), P.placeholder && ie.push(`placeholder: ${P.placeholder}`), P.defaultValue && ie.push(`初期値: ${P.defaultValue}`), ve = ie.join(`
`) + ((Qe = a == null ? void 0 : a.note) != null && Qe.text ? `
${a.note.text}` : "");
            } else if ((a == null ? void 0 : a.elementType) === "action")
              X = "アクション", ve = ((rt = a == null ? void 0 : a.note) == null ? void 0 : rt.text) || "";
            else if ((a == null ? void 0 : a.elementType) === "form")
              X = "フォーム", ve = ((ct = a == null ? void 0 : a.note) == null ? void 0 : ct.text) || "";
            else if (ze === "db_direct") {
              const P = (vt = a == null ? void 0 : a.fieldInfoList) != null && vt.length ? a.fieldInfoList : a != null && a.fieldInfo ? [a.fieldInfo] : [];
              if (P.length > 0) {
                const me = P.map((ie) => `${ie.table}.${ie.column}`).join(", "), Oe = `${P[0].table}.${P[0].column}`, We = k.getMasterDefinition(Oe), ke = We ? ` (${We.entries.length}値)` : "";
                X = `DB: ${me}${ke}${Ke}`, ve = P.map((ie) => `${ie.table}.${ie.column}${ie.type ? ` (${ie.type})` : ""}`).join(`
`) + Ie + pe + ((xe = a == null ? void 0 : a.note) != null && xe.text ? `
${a.note.text}` : "");
              }
            } else if (ze === "db_formatted") {
              const P = (Ae = a == null ? void 0 : a.fieldInfoList) != null && Ae.length ? a.fieldInfoList : a != null && a.fieldInfo ? [a.fieldInfo] : [];
              if (P.length > 0) {
                const me = P.map((ie) => `${ie.table}.${ie.column}`).join(", "), Oe = `${P[0].table}.${P[0].column}`, We = k.getMasterDefinition(Oe), ke = We ? ` (${We.entries.length}値)` : "";
                X = `DB: ${me} (整形)${ke}${Ke}`, ve = P.map((ie) => `${ie.table}.${ie.column}`).join(`
`) + ((Ue = a == null ? void 0 : a.note) != null && Ue.formatDescription ? `
整形: ${a.note.formatDescription}` : "") + Ie + pe + ((Re = a == null ? void 0 : a.note) != null && Re.text ? `
${a.note.text}` : "");
              }
            } else ze === "calculated" ? (X = "計算値" + ((st = a == null ? void 0 : a.note) != null && st.unit ? ` (${a.note.unit})` : "") + Ke, ve = (((G = a == null ? void 0 : a.note) == null ? void 0 : G.calcDescription) || "計算値") + ((bt = (Ne = a == null ? void 0 : a.note) == null ? void 0 : Ne.calcSources) != null && bt.length ? `
参照: ${a.note.calcSources.join(", ")}` : "") + Ie + pe + ((it = a == null ? void 0 : a.note) != null && it.text ? `
${a.note.text}` : "")) : ze === "static" ? (X = "固定" + Ke, ve = (((St = a == null ? void 0 : a.note) == null ? void 0 : St.text) || "固定文言") + pe) : ze === "other" ? (X = "メモ", ve = ((Ct = a == null ? void 0 : a.note) == null ? void 0 : Ct.text) || "") : (Ut = a == null ? void 0 : a.fieldInfoList) != null && Ut.length || (Dt = a == null ? void 0 : a.fieldInfo) != null && Dt.table && ((At = a == null ? void 0 : a.fieldInfo) != null && At.column) ? (X = `DB: ${((Lt = a == null ? void 0 : a.fieldInfoList) != null && Lt.length ? a.fieldInfoList : a != null && a.fieldInfo ? [a.fieldInfo] : []).map((Oe) => `${Oe.table}.${Oe.column}`).join(", ")}`, ve = ((Ft = a == null ? void 0 : a.note) == null ? void 0 : Ft.text) || "") : Fe ? (X = "固定", ve = ((Ot = a == null ? void 0 : a.note) == null ? void 0 : Ot.text) || "固定文言") : fe === "v-model" ? (X = "フォーム", ve = ((et = a == null ? void 0 : a.note) == null ? void 0 : et.text) || "") : fe === "api" ? (X = "データ", ve = ((Xe = a == null ? void 0 : a.note) == null ? void 0 : Xe.text) || "") : (tt = a == null ? void 0 : a.note) != null && tt.type ? (X = {
              info: "情報",
              warning: "注意",
              todo: "TODO",
              question: "質問"
            }[a.note.type] || "メモ", ve = (($t = a == null ? void 0 : a.note) == null ? void 0 : $t.text) || "") : (X = "メモ", ve = ((Y = a == null ? void 0 : a.note) == null ? void 0 : Y.text) || "");
            const yt = ve || ((De = a == null ? void 0 : a.note) == null ? void 0 : De.text) || "", _t = ((ce = a == null ? void 0 : a.note) == null ? void 0 : ce.type) || "info", at = !!((Le = a == null ? void 0 : a.note) != null && Le.text || (pt = a == null ? void 0 : a.note) != null && pt.displayType);
            g.push({
              selector: mt,
              top: `${ge.top + E}px`,
              left: `${ge.left + B}px`,
              width: `${ge.width}px`,
              height: `${ge.height}px`,
              color: le(mt),
              isStatic: Fe,
              label: X,
              noteText: yt,
              noteType: _t,
              hasNote: at
            });
          }
        } catch {
        }
      return g;
    }), Se = H(() => {
      var z;
      const E = ue.value, B = te.value;
      re.value;
      const g = [];
      if (!k.isEnabled || k.scanResults.length === 0) return g;
      const j = _e();
      for (const se of k.scanResults)
        try {
          const K = document.querySelector(se.selector);
          if (K) {
            if (j && !be(K, j)) continue;
            const ee = K.getBoundingClientRect();
            g.push({
              selector: se.selector,
              top: `${ee.top + E}px`,
              left: `${ee.left + B}px`,
              width: `${ee.width}px`,
              height: `${ee.height}px`,
              isStatic: ((z = se.detected.sourceBinding) == null ? void 0 : z.isStatic) || !1
            });
          }
        } catch {
        }
      return g;
    }), Ee = H(() => {
      var se, K;
      const E = ue.value, B = te.value;
      re.value;
      const g = [], j = k.analysisFilter;
      if (j === "none" || !k.isEnabled || k.analysisResults.length === 0) return g;
      const z = _e();
      for (const ee of k.analysisResults) {
        if (!ee.matched) continue;
        const A = ee.element;
        try {
          const _ = document.querySelector(ee.selector);
          if (!_ || z && !be(_, z)) continue;
          const U = _.getBoundingClientRect();
          if (U.width > window.innerWidth * 0.8 || U.height > window.innerHeight * 0.5)
            continue;
          const Te = _.querySelector("[data-di-binding]") || (_.hasAttribute("data-di-binding") ? _ : null);
          let J = "", Ze = A.binding || "";
          const ye = [...A.tags || []];
          if (Te) {
            const Ue = Te.getAttribute("data-di-db"), Re = Te.getAttribute("data-di-binding");
            Ue && (J = Ue, ye.includes("db") || ye.push("db")), Re && (Ze = Re);
          }
          !J && A.db && (J = `${A.db.table}.${A.db.column}`, ye.includes("db") || ye.push("db"));
          let Je = "";
          A.api && (Je = `${A.api.method} ${A.api.endpoint}`, ye.includes("api") || ye.push("api"));
          let nt = "";
          if (Ze) {
            const Ue = k.getApiSourceForBinding(Ze);
            Ue && Ue.endpoint ? nt = `${Ue.method || "GET"} ${Ue.endpoint}` : Ue && Ue.composable && (nt = Ue.composable);
          }
          const Ye = (se = A.conditional) == null ? void 0 : se.expression, He = (K = A.modal) == null ? void 0 : K.target, Q = !!J || ye.includes("db"), Be = !!Je || ye.includes("api"), ut = ye.includes("form"), Qe = ye.includes("button"), rt = ye.includes("link"), ct = ye.includes("modal"), vt = ye.includes("conditional"), xe = ye.includes("computed");
          if (j === "db-api") {
            if (!Q && !Be) continue;
          } else if (j === "form") {
            if (!ut) continue;
          } else if (j === "button") {
            if (!Qe) continue;
          } else if (j === "link") {
            if (!rt) continue;
          } else if (j === "modal") {
            if (!ct) continue;
          } else if (j === "conditional") {
            if (!vt) continue;
          } else if (j === "computed") {
            if (!xe) continue;
          } else if (j === "other" && (Q || Be || ut || Qe || rt || ct || vt || xe))
            continue;
          let Ae = "other";
          Q ? Ae = "db" : Be ? Ae = "api" : ut ? Ae = "form" : Qe ? Ae = "button" : rt ? Ae = "link" : ct ? Ae = "modal" : vt ? Ae = "conditional" : xe && (Ae = "computed"), g.push({
            selector: ee.selector,
            top: `${U.top + E}px`,
            left: `${U.left + B}px`,
            width: `${U.width}px`,
            height: `${U.height}px`,
            tags: ye,
            primaryTag: Ae,
            text: A.text || Ze || "",
            dbInfo: J,
            apiInfo: Je,
            apiSource: nt,
            conditionalExpr: Ye,
            modalTarget: He
          });
        } catch {
        }
      }
      return g;
    }), Pe = H(() => {
      const E = ue.value, B = te.value;
      re.value;
      const g = [];
      if (!k.isEnabled || !k.showUnannotatedDetection || k.unannotatedElements.length === 0) return g;
      const j = _e();
      for (const z of k.unannotatedElements)
        try {
          const se = document.querySelector(z.selector);
          if (!se || j && !be(se, j)) continue;
          const K = se.getBoundingClientRect();
          g.push({
            selector: z.selector,
            top: `${K.top + E}px`,
            left: `${K.left + B}px`,
            width: `${K.width}px`,
            height: `${K.height}px`,
            category: z.category,
            text: z.text
          });
        } catch {
        }
      return g;
    });
    function ot(E) {
      if (!k.isPickMode) return;
      if (E.target.closest("[data-dev-inspector]")) {
        V.value = null, q.value = null, k.setHoveredSelector(null);
        return;
      }
      const g = document.elementFromPoint(E.clientX, E.clientY);
      if (!g || g === document.body || g === document.documentElement) {
        V.value = null, q.value = null, k.setHoveredSelector(null);
        return;
      }
      if (g.closest("[data-dev-inspector]"))
        return;
      q.value = g;
      const j = g.getBoundingClientRect();
      V.value = {
        top: `${j.top + window.scrollY}px`,
        left: `${j.left + window.scrollX}px`,
        width: `${j.width}px`,
        height: `${j.height}px`
      };
      const z = k.generateSelector(g);
      k.setHoveredSelector(z);
    }
    function he(E) {
      if (!(!k.isPickMode || E.target.closest("[data-dev-inspector]")) && (E.preventDefault(), E.stopPropagation(), q.value)) {
        const g = k.generateSelector(q.value);
        if (k.remapTargetId) {
          k.remapAnnotation(k.remapTargetId, g), k.remapTargetId = null, k.togglePickMode(), k.openPanel();
          return;
        }
        k.startEditing(g), k.togglePickMode();
      }
    }
    function Ge(E) {
      E.key === "Escape" && k.isPickMode && (k.remapTargetId = null, k.togglePickMode());
    }
    function ne() {
      ue.value = window.scrollY, te.value = window.scrollX, re.value++;
    }
    let qe = null;
    return Sl(() => {
      window.addEventListener("mousemove", ot, !0), window.addEventListener("click", he, !0), window.addEventListener("keydown", Ge), window.addEventListener("scroll", ne), window.addEventListener("resize", ne);
      let E = null;
      qe = new MutationObserver(() => {
        E && clearTimeout(E), E = setTimeout(() => {
          re.value++;
        }, 100);
      }), qe.observe(document.body, { childList: !0, subtree: !0 });
    }), vo(() => {
      window.removeEventListener("mousemove", ot, !0), window.removeEventListener("click", he, !0), window.removeEventListener("keydown", Ge), window.removeEventListener("scroll", ne), window.removeEventListener("resize", ne), qe == null || qe.disconnect();
    }), zt(() => k.isPickMode, (E) => {
      E || (V.value = null, q.value = null);
    }), (E, B) => (n(), ft(wt, { to: d(r) }, [
      d(k).isInitializing ? (n(), s("div", Hv, [...B[1] || (B[1] = [
        e("div", { class: "di-loading-content" }, [
          e("div", { class: "di-loading-spinner" }),
          e("span", { class: "di-loading-text" }, "Developer Mode 起動中...")
        ], -1)
      ])])) : v("", !0),
      d(k).isPickMode && V.value ? (n(), s("div", {
        key: 1,
        "data-dev-inspector": "",
        class: "di-highlight",
        style: dt({
          top: V.value.top,
          left: V.value.left,
          width: V.value.width,
          height: V.value.height
        })
      }, [
        e("div", Rv, c(d(k).hoveredSelector), 1)
      ], 4)) : v("", !0),
      d(k).isPickMode ? (n(), s("div", {
        key: 2,
        "data-dev-inspector": "",
        class: "di-pick-banner",
        style: dt(d(k).remapTargetId ? { background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)" } : {})
      }, [
        e("span", null, c(d(k).remapTargetId ? "新しい要素をクリックして再設定" : "要素をクリックしてメモを追加"), 1),
        B[2] || (B[2] = e("kbd", null, "ESC", -1)),
        B[3] || (B[3] = e("span", { class: "di-pick-hint" }, "でキャンセル", -1))
      ], 4)) : v("", !0),
      d(k).isEnabled && !d(k).isPickMode && !d(k).editingElementId ? (n(!0), s(M, { key: 3 }, D(S.value, (g) => h((n(), s("div", {
        key: g.selector,
        "data-dev-inspector": "",
        class: L([
          g.hasNote ? "di-note-highlight" : "di-annotation-box",
          { "di-element-hovered-pulse": d(k).hoveredSelector === g.selector }
        ]),
        style: dt({
          top: g.top,
          left: g.left,
          width: g.width,
          height: g.height,
          borderColor: (g.hasNote, g.color),
          backgroundColor: d(k).hoveredSelector === g.selector ? g.color + "30" : g.color + (g.hasNote ? "18" : "15")
        }),
        onClick: (j) => d(k).startEditing(g.selector)
      }, [
        g.hasNote ? (n(), s("div", Kv, [
          e("span", {
            class: "di-note-indicator",
            style: dt({ backgroundColor: g.color })
          }, null, 4),
          e("div", {
            class: "di-annotation-label",
            style: dt({ backgroundColor: g.color })
          }, c(g.label), 5)
        ])) : (n(), s("div", {
          key: 1,
          class: "di-annotation-label",
          style: dt({ backgroundColor: g.color })
        }, c(g.label), 5))
      ], 14, zv)), [
        [jt, !g.hasNote || d(k).showNoteHighlights && $e(g.selector)]
      ])), 128)) : v("", !0),
      d(k).isEnabled && !d(k).editingElementId && Se.value.length > 0 && d(k).analysisResults.length === 0 ? (n(), s(M, { key: 4 }, [
        (n(!0), s(M, null, D(Se.value, (g) => (n(), s("div", {
          key: "scan-" + g.selector,
          "data-dev-inspector": "",
          class: L(["di-scan-highlight", { "di-scan-static": g.isStatic }]),
          style: dt({
            top: g.top,
            left: g.left,
            width: g.width,
            height: g.height
          }),
          onClick: (j) => d(k).startEditing(g.selector)
        }, [
          e("div", {
            class: L(["di-scan-label", { "di-scan-label-static": g.isStatic }])
          }, c(g.isStatic ? "固定文言" : "動的データ"), 3)
        ], 14, Gv))), 128)),
        e("div", Yv, [
          e("span", null, c(Se.value.length) + "件の要素を検出", 1),
          e("button", {
            onClick: B[0] || (B[0] = (g) => d(k).clearScanResults()),
            class: "di-scan-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : v("", !0),
      d(k).isEnabled && !d(k).editingElementId && Ee.value.length > 0 ? (n(), s(M, { key: 5 }, [
        (n(!0), s(M, null, D(Ee.value, (g) => (n(), s("div", {
          key: "analysis-" + g.selector,
          "data-dev-inspector": "",
          class: L(["di-analysis-highlight", "di-analysis-" + g.primaryTag]),
          style: dt({
            top: g.top,
            left: g.left,
            width: g.width,
            height: g.height
          }),
          onClick: (j) => d(k).startEditing(g.selector)
        }, [
          e("div", {
            class: L(["di-analysis-label", "di-analysis-label-" + g.primaryTag])
          }, [
            e("span", Wv, c(Ce(g.primaryTag)), 1),
            g.tags.length > 1 ? (n(), s("span", Zv, "+" + c(g.tags.length - 1), 1)) : v("", !0),
            g.dbInfo ? (n(), s("span", Jv, c(g.dbInfo), 1)) : v("", !0),
            g.apiSource ? (n(), s("span", Qv, "← " + c(g.apiSource), 1)) : v("", !0),
            g.conditionalExpr ? (n(), s("span", Nv, c(g.conditionalExpr), 1)) : v("", !0),
            e("button", {
              class: "di-analysis-delete",
              onClick: de((j) => d(k).removeAnalysisResult(g.selector), ["stop"]),
              title: "この要素を非表示"
            }, "×", 8, ep)
          ], 2),
          g.text && g.text.length < 30 ? (n(), s("div", tp, c(g.text), 1)) : v("", !0)
        ], 14, Xv))), 128)),
        e("div", lp, [
          e("span", null, "📊 分析データ: " + c(Ee.value.length) + "件の要素", 1)
        ])
      ], 64)) : v("", !0),
      d(k).isEnabled && !d(k).isPickMode && !d(k).editingElementId && Pe.value.length > 0 ? (n(!0), s(M, { key: 6 }, D(Pe.value, (g) => (n(), s("div", {
        key: "unannotated-" + g.selector,
        "data-dev-inspector": "",
        class: L(["di-unannotated-highlight", {
          "di-unannotated-hovered": d(k).hoveredUnannotatedSelector === g.selector,
          ["di-unannotated-hovered-" + g.category]: d(k).hoveredUnannotatedSelector === g.selector
        }]),
        style: dt({
          top: g.top,
          left: g.left,
          width: g.width,
          height: g.height
        }),
        onClick: (j) => d(k).quickAnnotate(g.selector, g.category === "form" ? "form" : g.category === "action" ? "action" : "datasource")
      }, [
        e("div", {
          class: L(["di-unannotated-label", { ["di-unannotated-label-" + g.category]: d(k).hoveredUnannotatedSelector === g.selector }])
        }, [
          e("span", null, c(g.category === "binding" ? "DB" : g.category === "form" ? "Form" : "Act"), 1),
          g.text ? (n(), s("span", np, c(g.text), 1)) : v("", !0)
        ], 2)
      ], 14, op))), 128)) : v("", !0)
    ], 8, ["to"]));
  }
}), ip = /* @__PURE__ */ el(sp, [["__scopeId", "data-v-e7ca005a"]]), ap = { class: "di-editor-modal" }, dp = { class: "di-editor-header" }, up = { class: "di-header-actions" }, rp = { class: "di-path-badge" }, cp = { class: "di-editor-content" }, vp = { class: "di-form-group" }, pp = { class: "di-form-group" }, mp = { class: "di-form-section" }, fp = { class: "di-form-section-header" }, bp = { class: "di-api-header-actions" }, hp = { class: "di-dropdown-wrapper" }, yp = {
  key: 1,
  class: "di-suggestion-dropdown"
}, gp = {
  key: 0,
  class: "di-suggestion-actions"
}, kp = ["onMousedown", "disabled"], xp = { class: "di-suggestion-endpoint" }, wp = {
  key: 0,
  class: "di-suggestion-timing"
}, Cp = {
  key: 1,
  class: "di-suggestion-empty"
}, $p = {
  key: 0,
  class: "di-suggestion-banner"
}, _p = {
  key: 1,
  class: "di-suggestion-banner di-suggestion-banner-empty"
}, Tp = {
  key: 2,
  class: "di-empty-hint"
}, Ip = { class: "di-api-entry-row" }, Mp = ["onUpdate:modelValue"], Sp = ["value"], Up = ["onUpdate:modelValue"], Dp = ["onClick"], Vp = { class: "di-api-entry-row2" }, Ep = ["onUpdate:modelValue"], Pp = ["onUpdate:modelValue"], Bp = ["value"], Ap = { class: "di-form-section" }, Lp = { class: "di-auth-row" }, Fp = {
  key: 0,
  class: "di-auth-details"
}, Op = { class: "di-form-group" }, jp = { class: "di-form-group" }, qp = { class: "di-form-group" }, Hp = { class: "di-form-group" }, Rp = { class: "di-editor-footer" }, zp = { class: "di-editor-actions" }, Kp = ["disabled"], Gp = /* @__PURE__ */ Kt({
  __name: "DevScreenEditor",
  setup(N) {
    const k = Gt(), r = Nt("teleportTarget", "body"), V = y(""), q = y(""), ue = y([]), te = y(!1), re = y(""), we = y(""), Z = y(""), Ce = y(""), le = y(!1), $e = y([]), _e = y(!1), be = H(() => typeof window < "u" ? window.location.pathname : "/");
    zt(() => k.editingScreen, (A) => {
      A && S();
    });
    function S() {
      var _, U, Te, J;
      const A = k.getScreenConfig();
      A ? (V.value = A.name, q.value = A.description || "", ue.value = A.apis.map((Ze) => ({ ...Ze })), te.value = ((_ = A.auth) == null ? void 0 : _.required) || !1, re.value = ((Te = (U = A.auth) == null ? void 0 : U.roles) == null ? void 0 : Te.join(", ")) || "", we.value = ((J = A.auth) == null ? void 0 : J.description) || "", Z.value = A.figmaUrl || "", Ce.value = A.notes || "") : Se();
    }
    function Se() {
      V.value = "", q.value = "", ue.value = [], te.value = !1, re.value = "", we.value = "", Z.value = "", Ce.value = "";
    }
    function Ee() {
      k.editingScreen = !1, Se();
    }
    function Pe() {
      ue.value.push({
        method: "GET",
        endpoint: "",
        description: "",
        loadTiming: "onMount"
      });
    }
    function ot(A) {
      ue.value.splice(A, 1);
    }
    function he() {
      if (!V.value.trim()) return;
      const A = {
        path: be.value,
        name: V.value.trim(),
        description: q.value.trim() || void 0,
        apis: ue.value.filter((_) => _.endpoint.trim()),
        auth: te.value || re.value.trim() ? {
          required: te.value,
          roles: re.value.trim() ? re.value.split(",").map((_) => _.trim()).filter(Boolean) : void 0,
          description: we.value.trim() || void 0
        } : void 0,
        figmaUrl: Z.value.trim() || void 0,
        notes: Ce.value.trim() || void 0,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      k.setScreenConfig(A), Ee();
    }
    function Ge() {
      k.deleteScreenConfig(be.value), Ee();
    }
    const ne = {
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
    function E() {
      $e.value = k.suggestScreenApis(), le.value = !0;
    }
    function B(A) {
      return ue.value.some(
        (_) => _.method === A.method && _.endpoint === A.endpoint
      );
    }
    const g = H(() => $e.value.filter((A) => !B(A)));
    function j(A) {
      B(A) || ue.value.push({ ...A });
    }
    function z() {
      for (const A of g.value)
        ue.value.push({ ...A });
    }
    function se() {
      setTimeout(() => {
        _e.value = !1;
      }, 150);
    }
    const K = ["GET", "POST", "PUT", "DELETE", "PATCH"], ee = [
      { value: "onMount", label: "画面読込時" },
      { value: "action", label: "アクション時" },
      { value: "conditional", label: "条件付き" }
    ];
    return (A, _) => (n(), ft(wt, { to: d(r) }, [
      d(k).editingScreen ? (n(), s("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: de(Ee, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", ap, [
          e("div", dp, [
            _[9] || (_[9] = e("h3", null, "画面情報を編集", -1)),
            e("div", up, [
              e("span", rp, c(be.value), 1),
              e("button", {
                onClick: Ee,
                class: "di-editor-close"
              }, [
                I(d(xt), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          e("div", cp, [
            e("div", vp, [
              _[10] || (_[10] = e("label", { class: "di-form-label" }, "画面名 *", -1)),
              h(e("input", {
                "onUpdate:modelValue": _[0] || (_[0] = (U) => V.value = U),
                type: "text",
                placeholder: "ユーザー詳細",
                class: "di-input"
              }, null, 512), [
                [w, V.value]
              ])
            ]),
            e("div", pp, [
              _[11] || (_[11] = e("label", { class: "di-form-label" }, "画面の説明", -1)),
              h(e("textarea", {
                "onUpdate:modelValue": _[1] || (_[1] = (U) => q.value = U),
                rows: "2",
                placeholder: "この画面の概要...",
                class: "di-textarea"
              }, null, 512), [
                [w, q.value]
              ])
            ]),
            e("div", mp, [
              e("div", fp, [
                _[15] || (_[15] = e("label", { class: "di-form-label" }, "API一覧", -1)),
                e("div", bp, [
                  e("button", {
                    onClick: E,
                    class: "di-btn-suggest",
                    title: "要素情報からAPI推定"
                  }, [
                    I(d(Qt), { style: { width: "13px", height: "13px" } }),
                    _[12] || (_[12] = O(" 自動推定 ", -1))
                  ]),
                  e("div", hp, [
                    $e.value.length > 0 ? (n(), s("button", {
                      key: 0,
                      onClick: _[2] || (_[2] = (U) => _e.value = !_e.value),
                      onBlur: _[3] || (_[3] = (U) => se()),
                      class: "di-btn-dropdown",
                      title: "推定結果から選択"
                    }, [
                      I(d(nl), { style: { width: "13px", height: "13px" } }),
                      _[13] || (_[13] = O(" 候補から選択 ", -1))
                    ], 32)) : v("", !0),
                    _e.value && $e.value.length > 0 ? (n(), s("div", yp, [
                      g.value.length > 0 ? (n(), s("div", gp, [
                        e("button", {
                          onMousedown: de(z, ["prevent"]),
                          class: "di-suggestion-add-all"
                        }, " すべて追加 (" + c(g.value.length) + ") ", 33)
                      ])) : v("", !0),
                      (n(!0), s(M, null, D($e.value, (U, Te) => (n(), s("button", {
                        key: Te,
                        onMousedown: de((J) => j(U), ["prevent"]),
                        class: L(["di-suggestion-item", { "di-suggestion-added": B(U) }]),
                        disabled: B(U)
                      }, [
                        e("span", {
                          class: "di-suggestion-method",
                          style: dt({ backgroundColor: ne[U.method] + "20", color: ne[U.method] })
                        }, c(U.method), 5),
                        e("code", xp, c(U.endpoint), 1),
                        U.loadTiming ? (n(), s("span", wp, c(qe[U.loadTiming] || U.loadTiming), 1)) : v("", !0),
                        B(U) ? (n(), ft(d(yo), {
                          key: 1,
                          style: { width: "12px", height: "12px", color: "#10b981", "flex-shrink": "0" }
                        })) : v("", !0)
                      ], 42, kp))), 128)),
                      $e.value.length === 0 ? (n(), s("div", Cp, " 推定結果がありません ")) : v("", !0)
                    ])) : v("", !0)
                  ]),
                  e("button", {
                    onClick: Pe,
                    class: "di-btn-add"
                  }, [
                    I(d(qt), { style: { width: "14px", height: "14px" } }),
                    _[14] || (_[14] = O(" 手動追加 ", -1))
                  ])
                ])
              ]),
              le.value && $e.value.length > 0 && g.value.length > 0 ? (n(), s("div", $p, [
                I(d(Qt), { style: { width: "13px", height: "13px", color: "#f59e0b", "flex-shrink": "0" } }),
                e("span", null, c($e.value.length) + "件のAPIを推定しました", 1),
                e("button", {
                  onMousedown: de(z, ["prevent"]),
                  class: "di-suggestion-banner-btn"
                }, "すべて追加", 32)
              ])) : le.value && $e.value.length === 0 ? (n(), s("div", _p, [..._[16] || (_[16] = [
                e("span", null, "要素のDB情報からAPIを推定できませんでした。要素にDB情報を登録してください。", -1)
              ])])) : v("", !0),
              ue.value.length === 0 && !le.value ? (n(), s("div", Tp, " APIが未登録です。「自動推定」で要素情報からAPIを推定できます。 ")) : v("", !0),
              (n(!0), s(M, null, D(ue.value, (U, Te) => (n(), s("div", {
                key: Te,
                class: "di-api-entry"
              }, [
                e("div", Ip, [
                  h(e("select", {
                    "onUpdate:modelValue": (J) => U.method = J,
                    class: "di-select di-select-method"
                  }, [
                    (n(), s(M, null, D(K, (J) => e("option", {
                      key: J,
                      value: J
                    }, c(J), 9, Sp)), 64))
                  ], 8, Mp), [
                    [Me, U.method]
                  ]),
                  h(e("input", {
                    "onUpdate:modelValue": (J) => U.endpoint = J,
                    type: "text",
                    placeholder: "/api/users/:id",
                    class: "di-input di-input-endpoint"
                  }, null, 8, Up), [
                    [w, U.endpoint]
                  ]),
                  e("button", {
                    onClick: (J) => ot(Te),
                    class: "di-btn-remove"
                  }, [
                    I(d(So), { style: { width: "14px", height: "14px" } })
                  ], 8, Dp)
                ]),
                e("div", Vp, [
                  h(e("input", {
                    "onUpdate:modelValue": (J) => U.description = J,
                    type: "text",
                    placeholder: "説明（任意）",
                    class: "di-input di-input-desc"
                  }, null, 8, Ep), [
                    [w, U.description]
                  ]),
                  h(e("select", {
                    "onUpdate:modelValue": (J) => U.loadTiming = J,
                    class: "di-select di-select-timing"
                  }, [
                    (n(), s(M, null, D(ee, (J) => e("option", {
                      key: J.value,
                      value: J.value
                    }, c(J.label), 9, Bp)), 64))
                  ], 8, Pp), [
                    [Me, U.loadTiming]
                  ])
                ])
              ]))), 128))
            ]),
            e("div", Ap, [
              _[20] || (_[20] = e("label", { class: "di-form-label" }, "認証設定", -1)),
              e("div", Lp, [
                e("button", {
                  onClick: _[4] || (_[4] = (U) => te.value = !te.value),
                  class: L(["di-toggle-btn", { active: te.value }])
                }, [
                  e("span", {
                    class: L(["di-toggle-knob", { active: te.value }])
                  }, null, 2)
                ], 2),
                _[17] || (_[17] = e("span", { class: "di-auth-label" }, "ログイン必須", -1))
              ]),
              te.value ? (n(), s("div", Fp, [
                e("div", Op, [
                  _[18] || (_[18] = e("label", { class: "di-form-label" }, "必要ロール（カンマ区切り）", -1)),
                  h(e("input", {
                    "onUpdate:modelValue": _[5] || (_[5] = (U) => re.value = U),
                    type: "text",
                    placeholder: "admin, manager",
                    class: "di-input"
                  }, null, 512), [
                    [w, re.value]
                  ])
                ]),
                e("div", jp, [
                  _[19] || (_[19] = e("label", { class: "di-form-label" }, "認証メモ", -1)),
                  h(e("input", {
                    "onUpdate:modelValue": _[6] || (_[6] = (U) => we.value = U),
                    type: "text",
                    placeholder: "自分のデータのみ閲覧可",
                    class: "di-input"
                  }, null, 512), [
                    [w, we.value]
                  ])
                ])
              ])) : v("", !0)
            ]),
            e("div", qp, [
              _[21] || (_[21] = e("label", { class: "di-form-label" }, "Figma URL", -1)),
              h(e("input", {
                "onUpdate:modelValue": _[7] || (_[7] = (U) => Z.value = U),
                type: "text",
                placeholder: "https://www.figma.com/design/...",
                class: "di-input"
              }, null, 512), [
                [w, Z.value]
              ])
            ]),
            e("div", Hp, [
              _[22] || (_[22] = e("label", { class: "di-form-label" }, "メモ", -1)),
              h(e("textarea", {
                "onUpdate:modelValue": _[8] || (_[8] = (U) => Ce.value = U),
                rows: "3",
                placeholder: "この画面に関するメモ...",
                class: "di-textarea"
              }, null, 512), [
                [w, Ce.value]
              ])
            ])
          ]),
          e("div", Rp, [
            e("button", {
              onClick: Ge,
              class: "di-btn-delete"
            }, [
              I(d(Rt), { style: { width: "14px", height: "14px" } }),
              _[23] || (_[23] = O(" 削除 ", -1))
            ]),
            e("div", zp, [
              e("button", {
                onClick: Ee,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: he,
                class: "di-btn-save",
                disabled: !V.value.trim()
              }, [
                I(d(Dl), { style: { width: "14px", height: "14px" } }),
                _[24] || (_[24] = O(" 保存 ", -1))
              ], 8, Kp)
            ])
          ])
        ])
      ])) : v("", !0)
    ], 8, ["to"]));
  }
}), Yp = /* @__PURE__ */ el(Gp, [["__scopeId", "data-v-f0e1b0be"]]), Xp = {
  key: 0,
  "data-dev-inspector": ""
}, Jp = /* @__PURE__ */ Kt({
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
  setup(N) {
    const k = N, r = Gt();
    return Sl(() => {
      r.init({
        storageKey: k.storageKey,
        enabledInProduction: k.enabledInProduction,
        initialAnnotations: k.initialAnnotations
      });
    }), (V, q) => d(r).isAvailable ? (n(), s("div", Xp, [
      I(Rd),
      I(qv),
      I(Yp),
      I(ip)
    ])) : v("", !0);
  }
});
export {
  qv as D,
  Jp as _,
  Rd as a,
  ip as b,
  Yp as c
};
