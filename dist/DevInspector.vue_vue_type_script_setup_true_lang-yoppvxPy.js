import { h as Ml, defineComponent as ol, inject as vl, ref as h, computed as q, watch as ll, openBlock as n, createElementBlock as i, Fragment as T, createBlock as ct, Teleport as Vt, unref as a, createVNode as I, createCommentVNode as p, createElementVNode as e, normalizeClass as L, toDisplayString as v, withDirectives as b, renderList as D, createTextVNode as H, withModifiers as N, vModelText as w, withKeys as Et, vShow as Jt, normalizeStyle as ot, vModelSelect as we, resolveDynamicComponent as po, vModelCheckbox as dl, onMounted as Ol, onUnmounted as jl } from "vue";
import { a as nl } from "./useDevInspector-6fbuGVh4.js";
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ul = {
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
const mo = (ee) => ee.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), W = (ee, g) => ({ size: r, strokeWidth: E = 2, absoluteStrokeWidth: R, color: ue, class: oe, ...ce }, { attrs: be, slots: Y }) => Ml(
  "svg",
  {
    ...ul,
    width: r || ul.width,
    height: r || ul.height,
    stroke: ue || ul.stroke,
    "stroke-width": R ? Number(E) * 24 / Number(r) : E,
    ...be,
    class: ["lucide", `lucide-${mo(ee)}`],
    ...ce
  },
  [
    ...g.map((me) => Ml(...me)),
    ...Y.default ? [Y.default()] : []
  ]
);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fo = W("AlertCircleIcon", [
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
const bo = W("AlertTriangleIcon", [
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
const ho = W("ArrowUpDownIcon", [
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
const yo = W("BarChart3Icon", [
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
const Sl = W("CalculatorIcon", [
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
const go = W("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yl = W("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ul = W("ChevronUpIcon", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ko = W("ClipboardListIcon", [
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
const Dl = W("ClockIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vl = W("CodeIcon", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zt = W("DatabaseIcon", [
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
const hl = W("DownloadIcon", [
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
const xo = W("ExternalLinkIcon", [
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
const wo = W("EyeOffIcon", [
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
const Co = W("EyeIcon", [
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hl = W("FileSpreadsheetIcon", [
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
const rl = W("FileTextIcon", [
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
const _o = W("FormInputIcon", [
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
const El = W("GitMergeIcon", [
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
const Pl = W("ListIcon", [
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
const Bl = W("MousePointer2Icon", [
  ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Al = W("PenLineIcon", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ll = W("PenSquareIcon", [
  ["path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1qinfi" }],
  ["path", { d: "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z", key: "w2jsv5" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rt = W("PlusIcon", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ql = W("SaveIcon", [
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
const Fl = W("ShieldQuestionIcon", [
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
const tl = W("Trash2Icon", [
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
const cl = W("Wand2Icon", [
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
const It = W("XIcon", [
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
async function Ao(ee, g, r = {}) {
  var Be;
  const E = await import("./xlsx-BopDBbWb.js"), { systemName: R = "System", author: ue = "" } = r, oe = /* @__PURE__ */ new Date(), ce = `${oe.getFullYear()}/${oe.getMonth() + 1}/${oe.getDate()}`, be = E.utils.book_new(), Y = [];
  Y.push([
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
    R,
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
    (ee == null ? void 0 : ee.name) || "",
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
    ce
  ]), Y.push([]), Y.push([
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
    (ee == null ? void 0 : ee.componentPath) || "",
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
    (ee == null ? void 0 : ee.figmaUrl) || ""
  ]), Y.push([]), Y.push(["機能概要"]), Y.push([(ee == null ? void 0 : ee.description) || ""]), Y.push([]), Y.push(["画面レイアウト　figmaURL"]), Y.push([(ee == null ? void 0 : ee.figmaUrl) || ""]), Y.push([]), ee != null && ee.apis && ee.apis.length > 0 && (Y.push(["API一覧"]), Y.push(["", "メソッド", "", "エンドポイント", "", "", "", "", "", "", "", "説明"]), ee.apis.forEach((U) => {
    Y.push(["", U.method, "", U.endpoint, "", "", "", "", "", "", "", U.description]);
  }), Y.push([])), Y.push(["画面項目　ヘッダーフッターは省く"]), Y.push([
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
  ]), Object.values(g).forEach((U, qe) => {
    var Oe, je, $e;
    const Ae = U.id;
    let Ue = "", nt = "", Z = "";
    if ((Oe = U.note) != null && Oe.text && (Ue = U.note.text), U.fieldInfo && (Ue += Ue ? `
` : "", Ue += `DB: ${U.fieldInfo.table}.${U.fieldInfo.column}`, U.fieldInfo.type && (Ue += ` (${U.fieldInfo.type})`), U.fieldInfo.description && (Ue += `
${U.fieldInfo.description}`)), U.actionInfo && (Z = `[${{
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行",
      csv_export: "CSV出力",
      csv_import: "CSV取込",
      email: "メール送信",
      sort: "ソート"
    }[U.actionInfo.type] || U.actionInfo.type}]`, U.actionInfo.target && (Z += ` ${U.actionInfo.method || ""} ${U.actionInfo.target}`), U.actionInfo.description && (Z += `
${U.actionInfo.description}`)), U.links) {
      const re = [];
      U.links.testPath && re.push(`テスト: ${U.links.testPath}`), U.links.figmaUrl && re.push(`Figma: ${U.links.figmaUrl}`), U.links.githubIssue && re.push(`Issue: ${U.links.githubIssue}`), U.links.githubPr && re.push(`PR: ${U.links.githubPr}`), re.length > 0 && (Z += Z ? `

` : "", Z += re.join(`
`));
    }
    if (U.devMeta) {
      const re = [];
      (je = U.devMeta.usedStores) != null && je.length && re.push(`Store: ${U.devMeta.usedStores.join(", ")}`), ($e = U.devMeta.usedComponents) != null && $e.length && re.push(`Components: ${U.devMeta.usedComponents.join(", ")}`), U.devMeta.accessibility && re.push(`A11y: ${U.devMeta.accessibility}`), U.devMeta.responsive && re.push(`Responsive: ${U.devMeta.responsive}`), re.length > 0 && (Z += Z ? `

` : "", Z += `[開発情報]
` + re.join(`
`));
    }
    Y.push([
      "",
      qe + 1,
      "",
      Ae,
      "",
      "",
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
      nt,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      Z
    ]);
  });
  const Pe = E.utils.aoa_to_sheet(Y);
  Pe["!cols"] = [
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
  ], E.utils.book_append_sheet(be, Pe, "画面設計書");
  const _e = `画面仕様書_${((Be = ee == null ? void 0 : ee.name) == null ? void 0 : Be.replace(/[/\\?%*:|"<>]/g, "-")) || "screen"}_${ce.replace(/\//g, "")}.xlsx`;
  return E.writeFile(be, _e), _e;
}
const Lo = {
  key: 0,
  class: "di-panel",
  "data-dev-inspector": ""
}, Fo = { class: "di-header" }, Oo = { class: "di-header-title" }, jo = { class: "di-tab-bar" }, Ho = {
  key: 0,
  class: "di-tab-badge"
}, qo = {
  key: 0,
  class: "di-tab-badge"
}, Ro = {
  key: 0,
  class: "di-tab-badge"
}, zo = {
  key: 0,
  class: "di-tab-badge"
}, Ko = { class: "di-edit-section" }, Yo = { class: "di-note-toggle-badge" }, Go = {
  key: 1,
  class: "di-note-filter"
}, Xo = { class: "di-filter-buttons" }, Wo = ["onClick"], Zo = {
  key: 2,
  class: "di-note-filter"
}, Jo = { class: "di-filter-buttons" }, Qo = ["onClick"], No = {
  key: 3,
  class: "di-element-list-section"
}, en = { class: "di-element-list-header" }, tn = { class: "di-count-badge" }, ln = { key: 0 }, on = { class: "di-element-tree" }, nn = {
  key: 0,
  class: "di-tree-group"
}, sn = { class: "di-tree-icon" }, an = { class: "di-count-badge" }, dn = {
  key: 0,
  class: "di-element-list"
}, un = ["onDragstart", "onClick", "onMouseenter"], rn = { class: "di-element-item-body" }, cn = { class: "di-element-item-label" }, vn = ["onClick"], pn = {
  key: 1,
  class: "di-tree-group"
}, mn = { class: "di-tree-icon" }, fn = { class: "di-count-badge" }, bn = {
  key: 0,
  class: "di-tree-children"
}, hn = {
  key: 0,
  class: "di-rename-row"
}, yn = ["onKeydown", "onBlur"], gn = ["onClick", "onDragover", "onDragleave", "onDrop"], kn = { class: "di-tree-icon" }, xn = { class: "di-count-badge" }, wn = ["onClick"], Cn = { key: 2 }, _n = {
  key: 0,
  class: "di-element-list"
}, $n = ["onDragstart", "onClick", "onMouseenter"], Tn = { class: "di-element-item-body" }, In = { class: "di-element-item-label" }, Mn = ["onClick"], Sn = {
  key: 1,
  class: "di-tree-children"
}, Un = {
  key: 0,
  class: "di-rename-row"
}, Dn = ["onKeydown", "onBlur"], Vn = ["onClick", "onDragover", "onDragleave", "onDrop"], En = { class: "di-tree-icon" }, Pn = { class: "di-count-badge" }, Bn = ["onClick"], An = { key: 2 }, Ln = {
  key: 0,
  class: "di-element-list"
}, Fn = ["onDragstart", "onClick", "onMouseenter"], On = { class: "di-element-item-body" }, jn = { class: "di-element-item-label" }, Hn = ["onClick"], qn = {
  key: 1,
  class: "di-tree-children"
}, Rn = {
  key: 0,
  class: "di-rename-row"
}, zn = ["onKeydown", "onBlur"], Kn = ["onClick", "onDragover", "onDragleave", "onDrop"], Yn = { class: "di-tree-icon" }, Gn = { class: "di-count-badge" }, Xn = ["onClick"], Wn = { key: 2 }, Zn = {
  key: 0,
  class: "di-element-list"
}, Jn = ["onDragstart", "onClick", "onMouseenter"], Qn = { class: "di-element-item-body" }, Nn = { class: "di-element-item-label" }, es = ["onClick"], ts = {
  key: 2,
  class: "di-tree-group"
}, ls = { class: "di-tree-icon" }, os = { class: "di-count-badge" }, ns = {
  key: 0,
  class: "di-tree-children"
}, ss = {
  key: 0,
  class: "di-rename-row"
}, is = ["onKeydown", "onBlur"], as = ["onClick", "onDragover", "onDragleave", "onDrop"], ds = { class: "di-tree-icon" }, us = { class: "di-count-badge" }, rs = ["onClick"], cs = { key: 2 }, vs = {
  key: 0,
  class: "di-element-list"
}, ps = ["onDragstart", "onClick", "onMouseenter"], ms = { class: "di-element-item-body" }, fs = { class: "di-element-item-label" }, bs = ["onClick"], hs = {
  key: 1,
  class: "di-tree-children"
}, ys = {
  key: 0,
  class: "di-rename-row"
}, gs = ["onKeydown", "onBlur"], ks = ["onClick", "onDragover", "onDragleave", "onDrop"], xs = { class: "di-tree-icon" }, ws = { class: "di-count-badge" }, Cs = ["onClick"], _s = { key: 2 }, $s = {
  key: 0,
  class: "di-element-list"
}, Ts = ["onDragstart", "onClick", "onMouseenter"], Is = { class: "di-element-item-body" }, Ms = { class: "di-element-item-label" }, Ss = ["onClick"], Us = {
  key: 0,
  class: "di-tree-subgroup"
}, Ds = {
  key: 0,
  class: "di-rename-row"
}, Vs = { class: "di-tree-icon" }, Es = { class: "di-count-badge" }, Ps = {
  key: 2,
  class: "di-element-list"
}, Bs = ["onDragstart", "onClick", "onMouseenter"], As = { class: "di-element-item-body" }, Ls = { class: "di-element-item-label" }, Fs = ["onClick"], Os = {
  key: 0,
  class: "di-unannotated-badge"
}, js = {
  key: 4,
  class: "di-unannotated-results"
}, Hs = { class: "di-unannotated-summary" }, qs = { key: 0 }, Rs = { key: 1 }, zs = { key: 2 }, Ks = { class: "di-unannotated-list" }, Ys = ["onMouseenter"], Gs = { class: "di-unannotated-text" }, Xs = ["onClick"], Ws = ["onClick"], Zs = {
  key: 5,
  class: "di-unannotated-empty"
}, Js = {
  key: 6,
  class: "di-broken-warning"
}, Qs = { class: "di-broken-header" }, Ns = { class: "di-broken-list" }, ei = { class: "di-broken-item-info" }, ti = { class: "di-broken-item-note" }, li = { class: "di-broken-item-selector" }, oi = { class: "di-broken-item-actions" }, ni = ["onClick"], si = ["onClick"], ii = { class: "di-broken-actions" }, ai = { class: "di-content" }, di = { class: "di-section" }, ui = { class: "di-screen-header" }, ri = { class: "di-screen-name" }, ci = {
  key: 0,
  class: "di-screen-desc"
}, vi = {
  key: 1,
  class: "di-auth-badges"
}, pi = {
  key: 0,
  class: "di-auth-badge di-auth-required"
}, mi = {
  key: 1,
  class: "di-auth-note"
}, fi = {
  key: 0,
  class: "di-card"
}, bi = { class: "di-card-label" }, hi = { class: "di-code-blue" }, yi = {
  key: 1,
  class: "di-card"
}, gi = { class: "di-card-label" }, ki = ["href"], xi = {
  key: 2,
  class: "di-card"
}, wi = { class: "di-card-label" }, Ci = { class: "di-api-list" }, _i = { class: "di-api-info" }, $i = { class: "di-api-endpoint" }, Ti = {
  key: 0,
  class: "di-api-desc"
}, Ii = {
  key: 0,
  class: "di-api-timing-badge"
}, Mi = {
  key: 3,
  class: "di-card"
}, Si = { class: "di-card-label" }, Ui = { class: "di-screen-notes" }, Di = {
  key: 1,
  class: "di-no-spec"
}, Vi = { class: "di-card di-cross-search-section" }, Ei = { class: "di-cross-search-header" }, Pi = { class: "di-cross-search-body" }, Bi = {
  class: "di-filter-buttons",
  style: { "margin-bottom": "8px" }
}, Ai = ["onClick"], Li = ["placeholder"], Fi = {
  key: 0,
  class: "di-cross-search-count"
}, Oi = {
  key: 1,
  class: "di-cross-search-results"
}, ji = { class: "di-cross-search-page-header" }, Hi = {
  key: 0,
  class: "di-cross-search-page-name"
}, qi = ["onClick"], Ri = { class: "di-cross-search-field" }, zi = {
  key: 0,
  class: "di-cross-search-context"
}, Ki = { class: "di-card di-screen-flow-section" }, Yi = {
  key: 0,
  class: "di-screen-flow-badge"
}, Gi = {
  key: 0,
  class: "di-screen-flow-body"
}, Xi = {
  key: 0,
  class: "di-screen-flow-empty"
}, Wi = { class: "di-flow-node-path" }, Zi = {
  key: 0,
  class: "di-flow-node-name"
}, Ji = ["onClick"], Qi = { class: "di-flow-target" }, Ni = {
  key: 0,
  class: "di-flow-edge-label"
}, ea = {
  key: 1,
  class: "di-flow-orphans"
}, ta = { class: "di-section" }, la = {
  class: "di-section-header",
  style: { "margin-bottom": "8px" }
}, oa = {
  key: 0,
  class: "di-section-badge"
}, na = { class: "di-master-table-name" }, sa = ["onClick"], ia = { class: "di-master-item-header" }, aa = { class: "di-master-col-name" }, da = {
  key: 0,
  class: "di-master-col-type"
}, ua = { class: "di-master-item-name" }, ra = { class: "di-master-entries-preview" }, ca = {
  key: 0,
  class: "di-master-entry-more"
}, va = { class: "di-master-editor" }, pa = { class: "di-master-editor-header" }, ma = { class: "di-master-editor-body" }, fa = { class: "di-master-row" }, ba = { class: "di-master-field" }, ha = ["disabled"], ya = { class: "di-master-field" }, ga = ["disabled"], ka = { class: "di-master-row" }, xa = { class: "di-master-field" }, wa = { class: "di-master-field" }, Ca = {
  class: "di-master-field",
  style: { "margin-bottom": "12px" }
}, _a = { class: "di-master-entries-header" }, $a = { class: "di-master-entries-list" }, Ta = ["onUpdate:modelValue"], Ia = ["onUpdate:modelValue"], Ma = ["onUpdate:modelValue"], Sa = ["onUpdate:modelValue"], Ua = ["onClick"], Da = {
  class: "di-master-entries-header",
  style: { "margin-top": "16px" }
}, Va = {
  key: 0,
  class: "di-master-entries-list"
}, Ea = ["onUpdate:modelValue"], Pa = ["value"], Ba = ["onUpdate:modelValue"], Aa = ["value"], La = ["onUpdate:modelValue"], Fa = ["onUpdate:modelValue"], Oa = ["onClick"], ja = {
  key: 1,
  class: "di-master-empty",
  style: { "margin-top": "4px", "font-size": "11px" }
}, Ha = { class: "di-master-editor-footer" }, qa = ["disabled"], Ra = { class: "di-section" }, za = {
  class: "di-section-header",
  style: { "margin-bottom": "8px" }
}, Ka = {
  key: 0,
  class: "di-section-badge"
}, Ya = ["onClick"], Ga = { class: "di-batch-item-info" }, Xa = { class: "di-batch-item-name" }, Wa = {
  key: 0,
  class: "di-batch-item-schedule"
}, Za = { class: "di-batch-editor" }, Ja = { class: "di-batch-editor-header" }, Qa = { class: "di-batch-editor-body" }, Na = { class: "di-batch-row" }, ed = { class: "di-batch-field" }, td = { class: "di-batch-field" }, ld = { class: "di-batch-row" }, od = { class: "di-batch-field" }, nd = {
  class: "di-batch-field",
  style: { "margin-bottom": "12px" }
}, sd = { class: "di-batch-row" }, id = { class: "di-batch-field" }, ad = { class: "di-batch-tags-input" }, dd = ["onClick"], ud = { class: "di-batch-field" }, rd = { class: "di-batch-tags-input" }, cd = ["onClick"], vd = { class: "di-batch-section-label" }, pd = { key: 0 }, md = { class: "di-batch-step-no" }, fd = ["onUpdate:modelValue"], bd = ["onUpdate:modelValue"], hd = ["onUpdate:modelValue"], yd = ["onUpdate:modelValue"], gd = ["onClick"], kd = { class: "di-batch-row" }, xd = { class: "di-batch-field" }, wd = { class: "di-batch-field" }, Cd = { class: "di-batch-row" }, _d = { class: "di-batch-field" }, $d = { class: "di-batch-field" }, Td = { class: "di-batch-editor-footer" }, Id = ["disabled"], Md = { class: "di-er-controls" }, Sd = ["onClick"], Ud = { class: "di-er-grid" }, Dd = ["onClick"], Vd = { class: "di-er-card-header" }, Ed = ["onClick"], Pd = { class: "di-er-card-columns" }, Bd = {
  key: 0,
  class: "di-er-col-type"
}, Ad = ["onClick"], Ld = {
  key: 0,
  class: "di-er-empty"
}, Fd = ["onKeyup"], Od = ["onKeyup"], jd = ["onClick", "disabled"], Hd = ["onClick"], qd = {
  key: 0,
  class: "di-er-card-relations"
}, Rd = { class: "di-er-rel-type" }, zd = ["onClick"], Kd = { class: "di-er-add-section" }, Yd = { style: { display: "flex", gap: "6px", "flex-wrap": "wrap" } }, Gd = {
  key: 0,
  class: "di-er-add-form"
}, Xd = ["disabled"], Wd = {
  key: 1,
  class: "di-er-add-form"
}, Zd = ["value"], Jd = ["value"], Qd = ["disabled"], Nd = { class: "di-export-buttons" }, eu = { class: "di-action-buttons" }, tu = {
  key: 0,
  class: "di-export-summary"
}, lu = { class: "di-export-summary-row" }, ou = { class: "di-export-summary-count" }, nu = { class: "di-export-summary-row" }, su = { class: "di-export-summary-count" }, iu = { class: "di-export-summary-row" }, au = { class: "di-export-summary-count" }, du = {
  key: 0,
  class: "di-indicator",
  "data-dev-inspector": ""
}, uu = { class: "di-modal" }, ru = ["value"], cu = { class: "di-modal-actions" }, vu = { class: "di-modal" }, pu = { class: "di-file-drop" }, mu = {
  key: 0,
  class: "di-error"
}, fu = { class: "di-modal-actions" }, bu = ["disabled"], hu = /* @__PURE__ */ ol({
  __name: "DevPanel",
  setup(ee) {
    const g = vl("teleportTarget", "body"), r = nl(), E = h("elements"), R = h(!1), ue = h(!1), oe = h(""), ce = h(""), be = h(!1), Y = h(""), me = h(""), Pe = h("has_many"), Ce = h(!1), _e = h(""), Be = h(null), U = h(""), qe = h(""), Ae = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, Ue = q(() => r.currentScreenSpec), nt = q(() => r.getScreenConfig()), Z = q(() => {
      var x;
      const d = nt.value, t = Ue.value;
      return !d && !t ? null : {
        name: (d == null ? void 0 : d.name) || (t == null ? void 0 : t.name) || "",
        description: (d == null ? void 0 : d.description) || (t == null ? void 0 : t.description) || "",
        componentPath: (d == null ? void 0 : d.componentPath) || (t == null ? void 0 : t.componentPath) || "",
        figmaUrl: (d == null ? void 0 : d.figmaUrl) || (t == null ? void 0 : t.figmaUrl) || "",
        apis: (d == null ? void 0 : d.apis) || ((x = t == null ? void 0 : t.apis) == null ? void 0 : x.map((A) => ({ ...A, loadTiming: void 0 }))) || [],
        auth: (d == null ? void 0 : d.auth) || null,
        notes: (d == null ? void 0 : d.notes) || (t != null && t.notes ? t.notes.join(`
`) : "")
      };
    }), Oe = q(() => Object.keys(r.elementConfigs).length), je = q(() => {
      const d = typeof window < "u" ? window.location.pathname : "/";
      return Object.entries(r.elementConfigs).filter(([, t]) => !t.pagePath || t.pagePath === d).map(([t, x]) => {
        var s, m, c;
        let A = "";
        return (s = x.note) != null && s.text ? A = x.note.text : x.fieldInfo ? A = `${x.fieldInfo.table}.${x.fieldInfo.column}` : (m = x.actionInfo) != null && m.description ? A = x.actionInfo.description : (c = x.actionInfo) != null && c.type ? (A = { navigate: "画面遷移", api: "API", modal: "モーダル", emit: "イベント", function: "関数", csv_export: "CSV出力", csv_import: "CSV取込", email: "メール送信" }[x.actionInfo.type] || x.actionInfo.type, x.actionInfo.target && (A += ` → ${x.actionInfo.target}`)) : x.formInfo && (A = x.formInfo.label || x.formInfo.inputType || "フォーム"), A || (A = t), { id: t, desc: A, type: x.elementType, isConditional: !!x.isConditional, tabContext: x.tabContext || "", modalName: x.modalName || "", config: x };
      });
    }), $e = q(() => {
      const d = r.noteHighlightFilter, t = r.noteTableFilter;
      let x = je.value;
      return t !== "all" && (x = x.filter((A) => {
        var c;
        const s = A.config;
        return ((c = s.fieldInfoList) != null && c.length ? s.fieldInfoList : s.fieldInfo ? [s.fieldInfo] : []).some(($) => $.table === t || $.table.startsWith(t + "."));
      })), d === "all" ? x : x.filter((A) => {
        var M, de, se, Ct, al;
        const s = A.config, m = (M = s.note) == null ? void 0 : M.displayType, c = !!((de = s.note) != null && de.condition || (se = s.note) != null && se.conditionColumn), $ = !!((Ct = s.note) != null && Ct.storedCalc);
        switch (d) {
          case "db":
            return m === "db_direct" || m === "db_formatted";
          case "calculated":
            return m === "calculated";
          case "storedCalc":
            return $;
          case "static":
            return m === "static";
          case "conditional":
            return c;
          case "action":
            return s.elementType === "action";
          case "form":
            return s.elementType === "form";
          case "other":
            return m === "other" || !m && !s.elementType && !!((al = s.note) != null && al.text);
          default:
            return !0;
        }
      });
    }), re = q(() => $e.value.filter((d) => !d.isConditional && !d.tabContext));
    function j(d) {
      let t = d.elements.length;
      for (const x of Object.values(d.children)) t += j(x);
      return t;
    }
    function V(d, t) {
      const x = {};
      return d.forEach((A) => {
        const s = A[t];
        if (!s) return;
        const m = s.split(">").map(($) => $.trim()).filter(Boolean);
        let c = x;
        for (let $ = 0; $ < m.length; $++) {
          const M = m[$];
          c[M] || (c[M] = { elements: [], children: {} }), $ === m.length - 1 && c[M].elements.push(A), c = c[M].children;
        }
      }), x;
    }
    const k = q(() => V(
      $e.value.filter((d) => d.tabContext && !d.isConditional),
      "tabContext"
    )), F = q(() => $e.value.filter((d) => d.tabContext && !d.isConditional)), J = h(!0), te = h(!1), P = h({}), B = q(() => $e.value.filter((d) => d.isConditional)), C = q(() => $e.value.filter((d) => d.isConditional && d.modalName)), S = q(() => V(C.value, "modalName")), ie = q(() => $e.value.filter((d) => d.isConditional && !d.modalName)), X = h(!1), le = h({}), De = q(() => Object.values(r.elementConfigs).filter((d) => {
      var t, x;
      return !!((t = d.note) != null && t.text || (x = d.note) != null && x.displayType);
    }).length), fe = q(() => {
      const d = r.noteHighlightFilter;
      return d === "all" ? De.value : Object.values(r.elementConfigs).filter((t) => {
        var m, c, $, M, de, se, Ct;
        if (!((m = t.note) != null && m.text || (c = t.note) != null && c.displayType || t.elementType)) return !1;
        const x = ($ = t.note) == null ? void 0 : $.displayType, A = !!((M = t.note) != null && M.condition || (de = t.note) != null && de.conditionColumn), s = !!((se = t.note) != null && se.storedCalc);
        switch (d) {
          case "db":
            return x === "db_direct" || x === "db_formatted";
          case "calculated":
            return x === "calculated";
          case "storedCalc":
            return s;
          case "static":
            return x === "static";
          case "conditional":
            return A;
          case "action":
            return t.elementType === "action";
          case "form":
            return t.elementType === "form";
          case "other":
            return x === "other" || !x && !t.elementType && !!((Ct = t.note) != null && Ct.text);
          default:
            return !0;
        }
      }).length;
    }), He = q(() => {
      var x;
      const d = /* @__PURE__ */ new Set(), t = typeof window < "u" ? window.location.pathname : "/";
      for (const A of Object.values(r.elementConfigs)) {
        if (A.pagePath && A.pagePath !== t) continue;
        const s = (x = A.fieldInfoList) != null && x.length ? A.fieldInfoList : A.fieldInfo ? [A.fieldInfo] : [];
        for (const m of s)
          m.table && (d.add(m.table), m.table.includes(".") && d.add(m.table.split(".")[0]));
      }
      return Array.from(d).sort();
    });
    function st() {
      const d = r.exportConfigs();
      navigator.clipboard.writeText(d), R.value = !1;
    }
    function vt() {
      const d = r.exportConfigs(), t = new Blob([d], { type: "application/json" }), x = URL.createObjectURL(t), A = document.createElement("a");
      A.href = x, A.download = "dev-mode-configs.json", A.click(), URL.revokeObjectURL(x), R.value = !1;
    }
    function yt() {
      r.downloadAnnotations();
    }
    async function it() {
      try {
        await Ao(
          r.currentScreenSpec,
          r.elementConfigs,
          { systemName: "System" }
        );
      } catch (d) {
        console.error("Failed to export xlsx:", d), alert("xlsx export failed. Make sure xlsx package is installed.");
      }
    }
    function at() {
      try {
        r.importConfigs(oe.value), oe.value = "", ce.value = "", ue.value = !1;
      } catch {
        ce.value = "JSONの形式が正しくありません";
      }
    }
    function Ne(d) {
      var s;
      const x = (s = d.target.files) == null ? void 0 : s[0];
      if (!x) return;
      const A = new FileReader();
      A.onload = (m) => {
        var c;
        oe.value = (c = m.target) == null ? void 0 : c.result;
      }, A.readAsText(x);
    }
    function dt() {
      confirm("すべての要素設定を削除しますか？") && r.clearAllConfigs();
    }
    const ut = q(() => {
      if (!r.erFocusTable) return r.erTables;
      const d = r.erRelations.filter((t) => t.fromTable === r.erFocusTable || t.toTable === r.erFocusTable).flatMap((t) => [t.fromTable, t.toTable]);
      return r.erTables.filter((t) => t === r.erFocusTable || d.includes(t));
    });
    function et(d) {
      return r.erRelations.filter((t) => t.fromTable === d || t.toTable === d);
    }
    function xe() {
      !Y.value || !me.value || (r.addTableRelation({
        fromTable: Y.value,
        toTable: me.value,
        type: Pe.value
      }), Y.value = "", me.value = "", be.value = !1);
    }
    function rt(d) {
      return r.manualTables.some((t) => t.name === d);
    }
    function Le(d, t) {
      const x = r.manualTables.find((A) => A.name === d);
      return !!(x != null && x.columns.some((A) => A.column === t));
    }
    function Se() {
      const d = _e.value.trim();
      d && (r.addManualTable(d), _e.value = "", Ce.value = !1);
    }
    function pt(d) {
      r.removeManualTable(d);
    }
    function gt(d) {
      Be.value = d, U.value = "", qe.value = "";
    }
    function tt(d) {
      const t = U.value.trim();
      t && (r.addManualColumn(d, t, qe.value.trim() || void 0), U.value = "", qe.value = "");
    }
    h("/dev-inspector-analysis.json"), h(!1), h(""), h(0), h(!1);
    const Pt = [
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
    q(() => r.getCurrentPageApis());
    const _t = q(() => r.brokenAnnotations.length);
    ll(() => r.isPanelOpen, (d) => {
      d && r.detectBrokenAnnotations();
    });
    function Kt() {
      confirm(`${_t.value}件の壊れたメモを削除しますか？`) && r.deleteBrokenAnnotations();
    }
    const mt = h(!1), ft = h(null), pe = h({
      table: "",
      column: "",
      name: "",
      columnType: "",
      description: "",
      entries: [],
      transitions: []
    }), kt = q(() => Object.keys(r.masterDefinitions).length), Qt = q(() => {
      const d = Object.values(r.masterDefinitions), t = {};
      for (const x of d)
        t[x.table] || (t[x.table] = []), t[x.table].push(x);
      return t;
    });
    function Ht(d) {
      if (d) {
        const t = r.getMasterDefinition(d);
        t && (ft.value = d, pe.value = {
          table: t.table,
          column: t.column,
          name: t.name,
          columnType: t.columnType || "",
          description: t.description || "",
          entries: [...t.entries.map((x) => ({ ...x }))],
          transitions: t.transitions ? t.transitions.map((x) => ({ ...x })) : []
        });
      } else
        ft.value = null, pe.value = {
          table: "",
          column: "",
          name: "",
          columnType: "",
          description: "",
          entries: [{ value: "", label: "" }],
          transitions: []
        };
      mt.value = !0;
    }
    function Nt() {
      const d = pe.value;
      if (!d.table || !d.column) return;
      const t = `${d.table}.${d.column}`, x = d.transitions.filter((s) => s.from || s.to || s.trigger), A = {
        id: t,
        table: d.table,
        column: d.column,
        name: d.name || d.column,
        columnType: d.columnType || void 0,
        description: d.description || void 0,
        entries: d.entries.filter((s) => s.value || s.label),
        transitions: x.length > 0 ? x : void 0,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      r.setMasterDefinition(A), mt.value = !1;
    }
    function Ye() {
      pe.value.entries.push({ value: "", label: "" });
    }
    function Re(d) {
      pe.value.entries.splice(d, 1);
    }
    function Ge() {
      pe.value.transitions.push({ from: "", to: "", trigger: "" });
    }
    function Bt(d) {
      pe.value.transitions.splice(d, 1);
    }
    function Q(d) {
      confirm(`マスタ定義「${d}」を削除しますか？`) && r.deleteMasterDefinition(d);
    }
    const he = h(!1), ve = h(null), z = h({
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
    }), ze = h(""), Xe = h(""), Ke = q(() => Object.keys(r.batchDefinitions).length), Me = q(() => Object.values(r.batchDefinitions));
    function ye(d) {
      if (d) {
        const t = r.getBatchDefinition(d);
        t && (ve.value = d, z.value = {
          name: t.name,
          schedule: t.schedule || "",
          trigger: t.trigger || "",
          description: t.description || "",
          inputTables: t.inputTables ? [...t.inputTables] : [],
          outputTables: t.outputTables ? [...t.outputTables] : [],
          steps: t.steps.map((x) => ({ ...x })),
          timeout: t.timeout || "",
          retryPolicy: t.retryPolicy || "",
          notifyOnError: t.notifyOnError || "",
          notifyOnComplete: t.notifyOnComplete || ""
        });
      } else
        ve.value = null, z.value = {
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
      ze.value = "", Xe.value = "", he.value = !0;
    }
    function u() {
      const d = z.value;
      if (!d.name) return;
      const x = {
        id: ve.value || `batch_${d.name.replace(/\s+/g, "_").toLowerCase()}_${Date.now()}`,
        name: d.name,
        schedule: d.schedule || void 0,
        trigger: d.trigger || void 0,
        description: d.description || void 0,
        inputTables: d.inputTables.length > 0 ? d.inputTables : void 0,
        outputTables: d.outputTables.length > 0 ? d.outputTables : void 0,
        steps: d.steps.filter((A) => A.description).map((A, s) => ({ ...A, order: s + 1 })),
        timeout: d.timeout || void 0,
        retryPolicy: d.retryPolicy || void 0,
        notifyOnError: d.notifyOnError || void 0,
        notifyOnComplete: d.notifyOnComplete || void 0,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      r.setBatchDefinition(x), he.value = !1;
    }
    function Mt() {
      const d = z.value.steps.length + 1;
      z.value.steps.push({ order: d, description: "" });
    }
    function St(d) {
      z.value.steps.splice(d, 1);
    }
    function ne(d) {
      var t;
      confirm(`バッチ定義「${((t = r.getBatchDefinition(d)) == null ? void 0 : t.name) || d}」を削除しますか？`) && r.deleteBatchDefinition(d);
    }
    function Te() {
      const d = ze.value.trim();
      d && !z.value.inputTables.includes(d) && z.value.inputTables.push(d), ze.value = "";
    }
    function bt(d) {
      z.value.inputTables.splice(d, 1);
    }
    function Ve() {
      const d = Xe.value.trim();
      d && !z.value.outputTables.includes(d) && z.value.outputTables.push(d), Xe.value = "";
    }
    function $t(d) {
      z.value.outputTables.splice(d, 1);
    }
    const We = [
      { value: "column", label: "カラム", placeholder: "users.email, orders..." },
      { value: "api", label: "API", placeholder: "GET /api/users..." },
      { value: "text", label: "テキスト", placeholder: "メモ、説明文で検索..." }
    ], Ze = q(() => {
      var d;
      return ((d = We.find((t) => t.value === r.crossSearchMode)) == null ? void 0 : d.placeholder) || "検索...";
    }), xt = q(() => {
      const d = {};
      for (const t of r.crossSearchResults)
        d[t.pagePath] || (d[t.pagePath] = { pagePath: t.pagePath, pageName: t.pageName, items: [] }), d[t.pagePath].items.push(t);
      return Object.values(d);
    }), At = q(() => xt.value.length), Je = q(() => {
      const d = r.unannotatedElements;
      return {
        binding: d.filter((t) => t.category === "binding").length,
        form: d.filter((t) => t.category === "form").length,
        action: d.filter((t) => t.category === "action").length
      };
    });
    function Lt() {
      r.showUnannotatedDetection ? (r.showUnannotatedDetection = !1, r.unannotatedElements = [], r.hoveredUnannotatedSelector = null) : (r.showUnannotatedDetection = !0, r.detectUnannotatedElements());
    }
    function O(d) {
      r.unannotatedElements = r.unannotatedElements.filter((t) => t.selector !== d);
    }
    function Ie(d) {
      r.hoveredUnannotatedSelector = d;
      try {
        const t = document.querySelector(d);
        if (!t) return;
        const x = t.getBoundingClientRect();
        (x.bottom < 0 || x.top > window.innerHeight) && t.scrollIntoView({ behavior: "smooth", block: "center" });
      } catch {
      }
    }
    function Ee() {
      r.hoveredUnannotatedSelector = null;
    }
    function ae(d) {
      r.hoveredSelector = d;
      try {
        const t = document.querySelector(d);
        if (!t) return;
        const x = t.getBoundingClientRect();
        (x.bottom < 0 || x.top > window.innerHeight) && t.scrollIntoView({ behavior: "smooth", block: "center" });
      } catch {
      }
    }
    function ke() {
      r.hoveredSelector = null;
    }
    const G = h(null), ge = h(null);
    function Ut(d, t) {
      G.value = t, d.dataTransfer && (d.dataTransfer.effectAllowed = "move", d.dataTransfer.setData("text/plain", t));
    }
    function Ft() {
      G.value = null, ge.value = null;
    }
    function Qe(d, t) {
      d.preventDefault(), d.dataTransfer && (d.dataTransfer.dropEffect = "move"), ge.value = t;
    }
    function Ot(d, t) {
      const x = d.relatedTarget, A = d.currentTarget;
      A && x && A.contains(x) || ge.value === t && (ge.value = null);
    }
    function jt(d, t) {
      d.preventDefault(), ge.value = null;
      const x = G.value;
      if (G.value = null, !(!x || !r.elementConfigs[x])) {
        if (t === "__page__")
          r.setElementConfig(x, { tabContext: void 0, modalName: void 0, isConditional: !1 });
        else if (t.startsWith("tab:")) {
          const s = t.slice(4);
          r.setElementConfig(x, { tabContext: s, modalName: void 0, isConditional: !1 });
        } else if (t === "__modal_unnamed__")
          r.setElementConfig(x, { isConditional: !0, modalName: void 0, tabContext: void 0 });
        else if (t.startsWith("modal:")) {
          const s = t.slice(6);
          r.setElementConfig(x, { isConditional: !0, modalName: s, tabContext: void 0 });
        }
      }
    }
    const Dt = h(null), lt = h("");
    function qt(d, t, x) {
      x.stopPropagation(), Dt.value = d, lt.value = t;
    }
    function wt(d) {
      const t = lt.value.trim();
      if (Dt.value = null, !!t) {
        if (d.startsWith("tab:")) {
          const x = d.slice(4), A = x.split(" > ");
          A[A.length - 1] = t;
          const s = A.join(" > ");
          if (x === s) return;
          for (const [$, M] of Object.entries(r.elementConfigs))
            M.tabContext && (M.tabContext === x ? r.setElementConfig($, { tabContext: s }) : M.tabContext.startsWith(x + " > ") && r.setElementConfig($, { tabContext: s + M.tabContext.slice(x.length) }));
          const m = x.replace(/ > /g, ">"), c = s.replace(/ > /g, ">");
          P.value[m] !== void 0 && (P.value[c] = P.value[m], delete P.value[m]);
        } else if (d.startsWith("modal:")) {
          const x = d.slice(6), A = x.split(" > ");
          A[A.length - 1] = t;
          const s = A.join(" > ");
          if (x === s) return;
          for (const [$, M] of Object.entries(r.elementConfigs))
            M.modalName && (M.modalName === x ? r.setElementConfig($, { modalName: s }) : M.modalName.startsWith(x + " > ") && r.setElementConfig($, { modalName: s + M.modalName.slice(x.length) }));
          const m = x.replace(/ > /g, ">"), c = s.replace(/ > /g, ">");
          le.value[m] !== void 0 && (le.value[c] = le.value[m], delete le.value[m]);
        }
      }
    }
    function ml() {
      Dt.value = null, lt.value = "";
    }
    function Yt(d, t) {
      d.key === "Enter" ? wt(t) : d.key === "Escape" && ml();
    }
    const el = h(null), Gt = h("");
    function ht(d, t) {
      el.value = d, Gt.value = "";
    }
    function Tt() {
      const d = Gt.value.trim();
      if (el.value = null, !!d)
        for (const t of ie.value)
          r.setElementConfig(t.id, { modalName: d, isConditional: !0 });
    }
    function Xt() {
      el.value = null, Gt.value = "";
    }
    const sl = q(() => typeof window < "u" ? window.location.pathname : "/"), fl = q(() => {
      const d = r.screenFlowData, t = {};
      for (const x of d.edges) {
        if (!t[x.from]) {
          const A = d.nodes.find((s) => s.path === x.from) || { path: x.from, name: x.from, annotationCount: 0 };
          t[x.from] = { node: A, edges: [] };
        }
        t[x.from].edges.push(x);
      }
      return Object.values(t);
    });
    function il(d) {
      d && r.startEditing(d);
    }
    return (d, t) => {
      var x, A;
      return n(), i(T, null, [
        (n(), ct(Vt, { to: a(g) }, [
          a(r).isEnabled && !a(r).isPanelOpen ? (n(), i("button", {
            key: 0,
            onClick: t[0] || (t[0] = //@ts-ignore
            (...s) => a(r).openPanel && a(r).openPanel(...s)),
            class: "di-fab",
            title: "画面仕様を表示",
            "data-dev-inspector": ""
          }, [
            I(a(rl), { style: { width: "20px", height: "20px" } })
          ])) : p("", !0)
        ], 8, ["to"])),
        (n(), ct(Vt, { to: a(g) }, [
          a(r).isEnabled && a(r).isPanelOpen ? (n(), i("div", Lo, [
            e("div", Fo, [
              e("div", Oo, [
                I(a(Vl), { style: { width: "20px", height: "20px", color: "#60a5fa" } }),
                t[81] || (t[81] = e("span", null, "Developer Mode", -1))
              ]),
              e("button", {
                onClick: t[1] || (t[1] = //@ts-ignore
                (...s) => a(r).closePanel && a(r).closePanel(...s)),
                class: "di-close-btn"
              }, [
                I(a(It), { style: { width: "20px", height: "20px" } })
              ])
            ]),
            e("div", jo, [
              e("button", {
                onClick: t[2] || (t[2] = (s) => E.value = "elements"),
                class: L(["di-tab-btn", { active: E.value === "elements" }])
              }, [
                I(a(Al), { style: { width: "14px", height: "14px" } }),
                t[82] || (t[82] = e("span", null, "要素設定", -1)),
                Oe.value > 0 ? (n(), i("span", Ho, v(Oe.value), 1)) : p("", !0)
              ], 2),
              e("button", {
                onClick: t[3] || (t[3] = (s) => E.value = "masters"),
                class: L(["di-tab-btn", { active: E.value === "masters" }])
              }, [
                I(a(zt), { style: { width: "14px", height: "14px" } }),
                t[83] || (t[83] = e("span", null, "マスタ", -1)),
                kt.value > 0 ? (n(), i("span", qo, v(kt.value), 1)) : p("", !0)
              ], 2),
              e("button", {
                onClick: t[4] || (t[4] = (s) => E.value = "batches"),
                class: L(["di-tab-btn", { active: E.value === "batches" }])
              }, [
                I(a(Dl), { style: { width: "14px", height: "14px" } }),
                t[84] || (t[84] = e("span", null, "バッチ", -1)),
                Ke.value > 0 ? (n(), i("span", Ro, v(Ke.value), 1)) : p("", !0)
              ], 2),
              e("button", {
                onClick: t[5] || (t[5] = (s) => E.value = "tables"),
                class: L(["di-tab-btn", { active: E.value === "tables" }])
              }, [
                I(a(El), { style: { width: "14px", height: "14px" } }),
                t[85] || (t[85] = e("span", null, "テーブル", -1)),
                a(r).erTables.length > 0 ? (n(), i("span", zo, v(a(r).erTables.length), 1)) : p("", !0)
              ], 2),
              e("button", {
                onClick: t[6] || (t[6] = (s) => E.value = "export"),
                class: L(["di-tab-btn", { active: E.value === "export" }])
              }, [
                I(a(hl), { style: { width: "14px", height: "14px" } }),
                t[86] || (t[86] = e("span", null, "出力", -1))
              ], 2)
            ]),
            b(e("div", Ko, [
              e("button", {
                onClick: t[7] || (t[7] = //@ts-ignore
                (...s) => a(r).togglePickMode && a(r).togglePickMode(...s)),
                class: L(["di-pick-btn", { active: a(r).isPickMode }])
              }, [
                I(a(Bl), { style: { width: "16px", height: "16px" } }),
                e("span", null, v(a(r).isPickMode ? "要素選択中..." : "任意の要素にメモを追加"), 1)
              ], 2),
              De.value > 0 ? (n(), i("button", {
                key: 0,
                onClick: t[8] || (t[8] = //@ts-ignore
                (...s) => a(r).toggleNoteHighlights && a(r).toggleNoteHighlights(...s)),
                class: L(["di-note-toggle-btn", { active: a(r).showNoteHighlights }])
              }, [
                a(r).showNoteHighlights ? (n(), ct(a(Co), {
                  key: 0,
                  style: { width: "14px", height: "14px" }
                })) : (n(), ct(a(wo), {
                  key: 1,
                  style: { width: "14px", height: "14px" }
                })),
                t[87] || (t[87] = e("span", null, "メモハイライト", -1)),
                e("span", Yo, v(a(r).noteHighlightFilter === "all" ? De.value : `${fe.value}/${De.value}`), 1)
              ], 2)) : p("", !0),
              De.value > 0 && a(r).showNoteHighlights ? (n(), i("div", Go, [
                e("div", Xo, [
                  (n(), i(T, null, D(Pt, (s) => e("button", {
                    key: s.value,
                    onClick: (m) => a(r).noteHighlightFilter = s.value,
                    class: L(["di-filter-btn", { active: a(r).noteHighlightFilter === s.value }])
                  }, v(s.label), 11, Wo)), 64))
                ])
              ])) : p("", !0),
              De.value > 0 && a(r).showNoteHighlights && He.value.length > 0 ? (n(), i("div", Zo, [
                t[88] || (t[88] = e("span", { class: "di-filter-label" }, "テーブル:", -1)),
                e("div", Jo, [
                  e("button", {
                    onClick: t[9] || (t[9] = (s) => a(r).noteTableFilter = "all"),
                    class: L(["di-filter-btn", { active: a(r).noteTableFilter === "all" }])
                  }, " すべて ", 2),
                  (n(!0), i(T, null, D(He.value, (s) => (n(), i("button", {
                    key: s,
                    onClick: (m) => a(r).noteTableFilter = s,
                    class: L(["di-filter-btn", { active: a(r).noteTableFilter === s }])
                  }, v(s), 11, Qo))), 128))
                ])
              ])) : p("", !0),
              je.value.length > 0 ? (n(), i("div", No, [
                e("div", en, [
                  I(a(Al), { style: { width: "14px", height: "14px", color: "#94a3b8" } }),
                  t[89] || (t[89] = e("span", null, "登録済み要素", -1)),
                  e("span", tn, [
                    H(v($e.value.length), 1),
                    $e.value.length !== je.value.length ? (n(), i("span", ln, " / " + v(je.value.length), 1)) : p("", !0)
                  ])
                ]),
                e("div", on, [
                  re.value.length > 0 || ge.value === "__page__" ? (n(), i("div", nn, [
                    e("button", {
                      class: L(["di-tree-group-header", { "di-drop-target": ge.value === "__page__" }]),
                      onClick: t[10] || (t[10] = (s) => J.value = !J.value),
                      onDragover: t[11] || (t[11] = (s) => Qe(s, "__page__")),
                      onDragleave: t[12] || (t[12] = (s) => Ot(s, "__page__")),
                      onDrop: t[13] || (t[13] = (s) => jt(s, "__page__"))
                    }, [
                      e("span", sn, v(J.value ? "▼" : "▶"), 1),
                      t[90] || (t[90] = e("span", null, "タブ外", -1)),
                      e("span", an, v(re.value.length), 1)
                    ], 34),
                    J.value ? (n(), i("div", dn, [
                      (n(!0), i(T, null, D(re.value, (s) => (n(), i("div", {
                        key: s.id,
                        class: L(["di-element-item", { "di-element-item-active": a(r).hoveredSelector === s.id, "di-dragging": G.value === s.id }]),
                        draggable: "true",
                        onDragstart: (m) => Ut(m, s.id),
                        onDragend: Ft,
                        onClick: (m) => a(r).startEditing(s.id),
                        onMouseenter: (m) => ae(s.id),
                        onMouseleave: ke
                      }, [
                        e("span", {
                          class: L(["di-element-type-badge", "di-element-type-" + (s.type || "other")])
                        }, v(s.type === "datasource" ? "DB" : s.type === "action" ? "Act" : s.type === "form" ? "Form" : s.type === "chart" ? "Chart" : "-"), 3),
                        e("div", rn, [
                          e("div", cn, v(s.desc), 1)
                        ]),
                        e("button", {
                          class: "di-element-delete-btn",
                          onClick: N((m) => a(r).deleteElementConfig(s.id), ["stop"]),
                          title: "削除"
                        }, "×", 8, vn)
                      ], 42, un))), 128))
                    ])) : p("", !0)
                  ])) : p("", !0),
                  F.value.length > 0 || G.value && !((x = ge.value) != null && x.startsWith("modal:")) && ge.value !== "__modal_unnamed__" ? (n(), i("div", pn, [
                    e("button", {
                      class: "di-tree-group-header",
                      onClick: t[14] || (t[14] = (s) => te.value = !te.value)
                    }, [
                      e("span", mn, v(te.value ? "▼" : "▶"), 1),
                      t[91] || (t[91] = e("span", null, "タブ内", -1)),
                      e("span", fn, v(F.value.length), 1)
                    ]),
                    te.value ? (n(), i("div", bn, [
                      (n(!0), i(T, null, D(k.value, (s, m) => (n(), i("div", {
                        key: "t1-" + m,
                        class: "di-tree-subgroup"
                      }, [
                        Dt.value === "tab:" + m ? (n(), i("div", hn, [
                          t[92] || (t[92] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                          b(e("input", {
                            class: "di-rename-input",
                            "onUpdate:modelValue": t[15] || (t[15] = (c) => lt.value = c),
                            onKeydown: (c) => Yt(c, "tab:" + m),
                            onBlur: (c) => wt("tab:" + m),
                            ref_for: !0,
                            ref: "renameInputRef",
                            autofocus: ""
                          }, null, 40, yn), [
                            [w, lt.value]
                          ])
                        ])) : (n(), i("button", {
                          key: 1,
                          class: L(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": ge.value === "tab:" + m }]),
                          onClick: (c) => P.value[m] = !P.value[m],
                          onDragover: (c) => Qe(c, "tab:" + m),
                          onDragleave: (c) => Ot(c, "tab:" + m),
                          onDrop: (c) => jt(c, "tab:" + m)
                        }, [
                          e("span", kn, v(P.value[m] ? "▼" : "▶"), 1),
                          t[93] || (t[93] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                          e("span", null, v(m), 1),
                          e("span", xn, v(j(s)), 1),
                          e("span", {
                            class: "di-rename-btn",
                            onClick: (c) => qt("tab:" + m, String(m), c),
                            title: "名前変更"
                          }, "✏", 8, wn)
                        ], 42, gn)),
                        P.value[m] ? (n(), i("div", Cn, [
                          s.elements.length > 0 ? (n(), i("div", _n, [
                            (n(!0), i(T, null, D(s.elements, (c) => (n(), i("div", {
                              key: c.id,
                              class: L(["di-element-item", { "di-element-item-active": a(r).hoveredSelector === c.id, "di-dragging": G.value === c.id }]),
                              draggable: "true",
                              onDragstart: ($) => Ut($, c.id),
                              onDragend: Ft,
                              onClick: ($) => a(r).startEditing(c.id),
                              onMouseenter: ($) => ae(c.id),
                              onMouseleave: ke
                            }, [
                              e("span", {
                                class: L(["di-element-type-badge", "di-element-type-" + (c.type || "other")])
                              }, v(c.type === "datasource" ? "DB" : c.type === "action" ? "Act" : c.type === "form" ? "Form" : c.type === "chart" ? "Chart" : "-"), 3),
                              e("div", Tn, [
                                e("div", In, v(c.desc), 1)
                              ]),
                              e("button", {
                                class: "di-element-delete-btn",
                                onClick: N(($) => a(r).deleteElementConfig(c.id), ["stop"]),
                                title: "削除"
                              }, "×", 8, Mn)
                            ], 42, $n))), 128))
                          ])) : p("", !0),
                          Object.keys(s.children).length > 0 ? (n(), i("div", Sn, [
                            (n(!0), i(T, null, D(s.children, (c, $) => (n(), i("div", {
                              key: "t2-" + $,
                              class: "di-tree-subgroup"
                            }, [
                              Dt.value === "tab:" + m + " > " + $ ? (n(), i("div", Un, [
                                t[94] || (t[94] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                                b(e("input", {
                                  class: "di-rename-input",
                                  "onUpdate:modelValue": t[16] || (t[16] = (M) => lt.value = M),
                                  onKeydown: (M) => Yt(M, "tab:" + m + " > " + $),
                                  onBlur: (M) => wt("tab:" + m + " > " + $),
                                  autofocus: ""
                                }, null, 40, Dn), [
                                  [w, lt.value]
                                ])
                              ])) : (n(), i("button", {
                                key: 1,
                                class: L(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": ge.value === "tab:" + m + " > " + $ }]),
                                onClick: (M) => P.value[m + ">" + $] = !P.value[m + ">" + $],
                                onDragover: (M) => Qe(M, "tab:" + m + " > " + $),
                                onDragleave: (M) => Ot(M, "tab:" + m + " > " + $),
                                onDrop: (M) => jt(M, "tab:" + m + " > " + $)
                              }, [
                                e("span", En, v(P.value[m + ">" + $] ? "▼" : "▶"), 1),
                                t[95] || (t[95] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                                e("span", null, v($), 1),
                                e("span", Pn, v(j(c)), 1),
                                e("span", {
                                  class: "di-rename-btn",
                                  onClick: (M) => qt("tab:" + m + " > " + $, String($), M),
                                  title: "名前変更"
                                }, "✏", 8, Bn)
                              ], 42, Vn)),
                              P.value[m + ">" + $] ? (n(), i("div", An, [
                                c.elements.length > 0 ? (n(), i("div", Ln, [
                                  (n(!0), i(T, null, D(c.elements, (M) => (n(), i("div", {
                                    key: M.id,
                                    class: L(["di-element-item", { "di-element-item-active": a(r).hoveredSelector === M.id, "di-dragging": G.value === M.id }]),
                                    draggable: "true",
                                    onDragstart: (de) => Ut(de, M.id),
                                    onDragend: Ft,
                                    onClick: (de) => a(r).startEditing(M.id),
                                    onMouseenter: (de) => ae(M.id),
                                    onMouseleave: ke
                                  }, [
                                    e("span", {
                                      class: L(["di-element-type-badge", "di-element-type-" + (M.type || "other")])
                                    }, v(M.type === "datasource" ? "DB" : M.type === "action" ? "Act" : M.type === "form" ? "Form" : M.type === "chart" ? "Chart" : "-"), 3),
                                    e("div", On, [
                                      e("div", jn, v(M.desc), 1)
                                    ]),
                                    e("button", {
                                      class: "di-element-delete-btn",
                                      onClick: N((de) => a(r).deleteElementConfig(M.id), ["stop"]),
                                      title: "削除"
                                    }, "×", 8, Hn)
                                  ], 42, Fn))), 128))
                                ])) : p("", !0),
                                Object.keys(c.children).length > 0 ? (n(), i("div", qn, [
                                  (n(!0), i(T, null, D(c.children, (M, de) => (n(), i("div", {
                                    key: "t3-" + de,
                                    class: "di-tree-subgroup"
                                  }, [
                                    Dt.value === "tab:" + m + " > " + $ + " > " + de ? (n(), i("div", Rn, [
                                      t[96] || (t[96] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                                      b(e("input", {
                                        class: "di-rename-input",
                                        "onUpdate:modelValue": t[17] || (t[17] = (se) => lt.value = se),
                                        onKeydown: (se) => Yt(se, "tab:" + m + " > " + $ + " > " + de),
                                        onBlur: (se) => wt("tab:" + m + " > " + $ + " > " + de),
                                        autofocus: ""
                                      }, null, 40, zn), [
                                        [w, lt.value]
                                      ])
                                    ])) : (n(), i("button", {
                                      key: 1,
                                      class: L(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": ge.value === "tab:" + m + " > " + $ + " > " + de }]),
                                      onClick: (se) => P.value[m + ">" + $ + ">" + de] = !P.value[m + ">" + $ + ">" + de],
                                      onDragover: (se) => Qe(se, "tab:" + m + " > " + $ + " > " + de),
                                      onDragleave: (se) => Ot(se, "tab:" + m + " > " + $ + " > " + de),
                                      onDrop: (se) => jt(se, "tab:" + m + " > " + $ + " > " + de)
                                    }, [
                                      e("span", Yn, v(P.value[m + ">" + $ + ">" + de] ? "▼" : "▶"), 1),
                                      t[97] || (t[97] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                                      e("span", null, v(de), 1),
                                      e("span", Gn, v(j(M)), 1),
                                      e("span", {
                                        class: "di-rename-btn",
                                        onClick: (se) => qt("tab:" + m + " > " + $ + " > " + de, String(de), se),
                                        title: "名前変更"
                                      }, "✏", 8, Xn)
                                    ], 42, Kn)),
                                    P.value[m + ">" + $ + ">" + de] ? (n(), i("div", Wn, [
                                      M.elements.length > 0 ? (n(), i("div", Zn, [
                                        (n(!0), i(T, null, D(M.elements, (se) => (n(), i("div", {
                                          key: se.id,
                                          class: L(["di-element-item", { "di-element-item-active": a(r).hoveredSelector === se.id, "di-dragging": G.value === se.id }]),
                                          draggable: "true",
                                          onDragstart: (Ct) => Ut(Ct, se.id),
                                          onDragend: Ft,
                                          onClick: (Ct) => a(r).startEditing(se.id),
                                          onMouseenter: (Ct) => ae(se.id),
                                          onMouseleave: ke
                                        }, [
                                          e("span", {
                                            class: L(["di-element-type-badge", "di-element-type-" + (se.type || "other")])
                                          }, v(se.type === "datasource" ? "DB" : se.type === "action" ? "Act" : se.type === "form" ? "Form" : se.type === "chart" ? "Chart" : "-"), 3),
                                          e("div", Qn, [
                                            e("div", Nn, v(se.desc), 1)
                                          ]),
                                          e("button", {
                                            class: "di-element-delete-btn",
                                            onClick: N((Ct) => a(r).deleteElementConfig(se.id), ["stop"]),
                                            title: "削除"
                                          }, "×", 8, es)
                                        ], 42, Jn))), 128))
                                      ])) : p("", !0)
                                    ])) : p("", !0)
                                  ]))), 128))
                                ])) : p("", !0)
                              ])) : p("", !0)
                            ]))), 128))
                          ])) : p("", !0)
                        ])) : p("", !0)
                      ]))), 128))
                    ])) : p("", !0)
                  ])) : p("", !0),
                  B.value.length > 0 || G.value && ((A = ge.value) != null && A.startsWith("modal:") || ge.value === "__modal_unnamed__") ? (n(), i("div", ts, [
                    e("button", {
                      class: "di-tree-group-header",
                      onClick: t[18] || (t[18] = (s) => X.value = !X.value)
                    }, [
                      e("span", ls, v(X.value ? "▼" : "▶"), 1),
                      t[98] || (t[98] = e("span", null, "モーダル", -1)),
                      e("span", os, v(B.value.length), 1)
                    ]),
                    X.value ? (n(), i("div", ns, [
                      (n(!0), i(T, null, D(S.value, (s, m) => (n(), i("div", {
                        key: "m1-" + m,
                        class: "di-tree-subgroup"
                      }, [
                        Dt.value === "modal:" + m ? (n(), i("div", ss, [
                          t[99] || (t[99] = e("span", { class: "di-tree-badge di-tree-badge-modal" }, "M", -1)),
                          b(e("input", {
                            class: "di-rename-input",
                            "onUpdate:modelValue": t[19] || (t[19] = (c) => lt.value = c),
                            onKeydown: (c) => Yt(c, "modal:" + m),
                            onBlur: (c) => wt("modal:" + m),
                            autofocus: ""
                          }, null, 40, is), [
                            [w, lt.value]
                          ])
                        ])) : (n(), i("button", {
                          key: 1,
                          class: L(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": ge.value === "modal:" + m }]),
                          onClick: (c) => le.value[String(m)] = !le.value[String(m)],
                          onDragover: (c) => Qe(c, "modal:" + m),
                          onDragleave: (c) => Ot(c, "modal:" + m),
                          onDrop: (c) => jt(c, "modal:" + m)
                        }, [
                          e("span", ds, v(le.value[String(m)] ? "▼" : "▶"), 1),
                          t[100] || (t[100] = e("span", { class: "di-tree-badge di-tree-badge-modal" }, "M", -1)),
                          e("span", null, v(m), 1),
                          e("span", us, v(j(s)), 1),
                          e("span", {
                            class: "di-rename-btn",
                            onClick: (c) => qt("modal:" + m, String(m), c),
                            title: "名前変更"
                          }, "✏", 8, rs)
                        ], 42, as)),
                        le.value[String(m)] ? (n(), i("div", cs, [
                          s.elements.length > 0 ? (n(), i("div", vs, [
                            (n(!0), i(T, null, D(s.elements, (c) => (n(), i("div", {
                              key: c.id,
                              class: L(["di-element-item", { "di-element-item-active": a(r).hoveredSelector === c.id, "di-dragging": G.value === c.id }]),
                              draggable: "true",
                              onDragstart: ($) => Ut($, c.id),
                              onDragend: Ft,
                              onClick: ($) => a(r).startEditing(c.id),
                              onMouseenter: ($) => ae(c.id),
                              onMouseleave: ke
                            }, [
                              e("span", {
                                class: L(["di-element-type-badge", "di-element-type-" + (c.type || "other")])
                              }, v(c.type === "datasource" ? "DB" : c.type === "action" ? "Act" : c.type === "form" ? "Form" : c.type === "chart" ? "Chart" : "-"), 3),
                              e("div", ms, [
                                e("div", fs, v(c.desc), 1)
                              ]),
                              e("button", {
                                class: "di-element-delete-btn",
                                onClick: N(($) => a(r).deleteElementConfig(c.id), ["stop"]),
                                title: "削除"
                              }, "×", 8, bs)
                            ], 42, ps))), 128))
                          ])) : p("", !0),
                          Object.keys(s.children).length > 0 ? (n(), i("div", hs, [
                            (n(!0), i(T, null, D(s.children, (c, $) => (n(), i("div", {
                              key: "m2-" + $,
                              class: "di-tree-subgroup"
                            }, [
                              Dt.value === "modal:" + m + " > " + $ ? (n(), i("div", ys, [
                                t[101] || (t[101] = e("span", { class: "di-tree-badge di-tree-badge-modal" }, "M", -1)),
                                b(e("input", {
                                  class: "di-rename-input",
                                  "onUpdate:modelValue": t[20] || (t[20] = (M) => lt.value = M),
                                  onKeydown: (M) => Yt(M, "modal:" + m + " > " + $),
                                  onBlur: (M) => wt("modal:" + m + " > " + $),
                                  autofocus: ""
                                }, null, 40, gs), [
                                  [w, lt.value]
                                ])
                              ])) : (n(), i("button", {
                                key: 1,
                                class: L(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": ge.value === "modal:" + m + " > " + $ }]),
                                onClick: (M) => le.value[m + ">" + $] = !le.value[m + ">" + $],
                                onDragover: (M) => Qe(M, "modal:" + m + " > " + $),
                                onDragleave: (M) => Ot(M, "modal:" + m + " > " + $),
                                onDrop: (M) => jt(M, "modal:" + m + " > " + $)
                              }, [
                                e("span", xs, v(le.value[m + ">" + $] ? "▼" : "▶"), 1),
                                t[102] || (t[102] = e("span", { class: "di-tree-badge di-tree-badge-modal" }, "M", -1)),
                                e("span", null, v($), 1),
                                e("span", ws, v(j(c)), 1),
                                e("span", {
                                  class: "di-rename-btn",
                                  onClick: (M) => qt("modal:" + m + " > " + $, String($), M),
                                  title: "名前変更"
                                }, "✏", 8, Cs)
                              ], 42, ks)),
                              le.value[m + ">" + $] ? (n(), i("div", _s, [
                                c.elements.length > 0 ? (n(), i("div", $s, [
                                  (n(!0), i(T, null, D(c.elements, (M) => (n(), i("div", {
                                    key: M.id,
                                    class: L(["di-element-item", { "di-element-item-active": a(r).hoveredSelector === M.id, "di-dragging": G.value === M.id }]),
                                    draggable: "true",
                                    onDragstart: (de) => Ut(de, M.id),
                                    onDragend: Ft,
                                    onClick: (de) => a(r).startEditing(M.id),
                                    onMouseenter: (de) => ae(M.id),
                                    onMouseleave: ke
                                  }, [
                                    e("span", {
                                      class: L(["di-element-type-badge", "di-element-type-" + (M.type || "other")])
                                    }, v(M.type === "datasource" ? "DB" : M.type === "action" ? "Act" : M.type === "form" ? "Form" : M.type === "chart" ? "Chart" : "-"), 3),
                                    e("div", Is, [
                                      e("div", Ms, v(M.desc), 1)
                                    ]),
                                    e("button", {
                                      class: "di-element-delete-btn",
                                      onClick: N((de) => a(r).deleteElementConfig(M.id), ["stop"]),
                                      title: "削除"
                                    }, "×", 8, Ss)
                                  ], 42, Ts))), 128))
                                ])) : p("", !0)
                              ])) : p("", !0)
                            ]))), 128))
                          ])) : p("", !0)
                        ])) : p("", !0)
                      ]))), 128)),
                      ie.value.length > 0 || ge.value === "__modal_unnamed__" ? (n(), i("div", Us, [
                        el.value === "__unnamed__" ? (n(), i("div", Ds, [
                          t[103] || (t[103] = e("span", { class: "di-tree-badge di-tree-badge-modal" }, "M", -1)),
                          b(e("input", {
                            class: "di-rename-input",
                            "onUpdate:modelValue": t[21] || (t[21] = (s) => Gt.value = s),
                            onKeydown: [
                              Et(Tt, ["enter"]),
                              Et(Xt, ["escape"])
                            ],
                            onBlur: Tt,
                            autofocus: ""
                          }, null, 544), [
                            [w, Gt.value]
                          ])
                        ])) : (n(), i("button", {
                          key: 1,
                          class: L(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": ge.value === "__modal_unnamed__" }]),
                          onClick: t[23] || (t[23] = (s) => le.value.__unnamed = !le.value.__unnamed),
                          onDragover: t[24] || (t[24] = (s) => Qe(s, "__modal_unnamed__")),
                          onDragleave: t[25] || (t[25] = (s) => Ot(s, "__modal_unnamed__")),
                          onDrop: t[26] || (t[26] = (s) => jt(s, "__modal_unnamed__"))
                        }, [
                          e("span", Vs, v(le.value.__unnamed ? "▼" : "▶"), 1),
                          t[104] || (t[104] = e("span", { class: "di-tree-badge di-tree-badge-modal" }, "M", -1)),
                          t[105] || (t[105] = e("span", null, "未分類", -1)),
                          e("span", Es, v(ie.value.length), 1),
                          e("span", {
                            class: "di-rename-btn",
                            onClick: t[22] || (t[22] = N((s) => ht("__unnamed__"), ["stop"])),
                            title: "モーダル名を設定"
                          }, "✏")
                        ], 34)),
                        le.value.__unnamed ? (n(), i("div", Ps, [
                          (n(!0), i(T, null, D(ie.value, (s) => (n(), i("div", {
                            key: s.id,
                            class: L(["di-element-item", { "di-element-item-active": a(r).hoveredSelector === s.id, "di-dragging": G.value === s.id }]),
                            draggable: "true",
                            onDragstart: (m) => Ut(m, s.id),
                            onDragend: Ft,
                            onClick: (m) => a(r).startEditing(s.id),
                            onMouseenter: (m) => ae(s.id),
                            onMouseleave: ke
                          }, [
                            e("span", {
                              class: L(["di-element-type-badge", "di-element-type-" + (s.type || "other")])
                            }, v(s.type === "datasource" ? "DB" : s.type === "action" ? "Act" : s.type === "form" ? "Form" : s.type === "chart" ? "Chart" : "-"), 3),
                            e("div", As, [
                              e("div", Ls, v(s.desc), 1)
                            ]),
                            e("button", {
                              class: "di-element-delete-btn",
                              onClick: N((m) => a(r).deleteElementConfig(s.id), ["stop"]),
                              title: "削除"
                            }, "×", 8, Fs)
                          ], 42, Bs))), 128))
                        ])) : p("", !0)
                      ])) : p("", !0)
                    ])) : p("", !0)
                  ])) : p("", !0)
                ])
              ])) : p("", !0),
              e("button", {
                onClick: Lt,
                class: L(["di-unannotated-btn", { active: a(r).showUnannotatedDetection }])
              }, [
                I(a(ko), { style: { width: "14px", height: "14px" } }),
                e("span", null, v(a(r).showUnannotatedDetection ? "未登録検出 ON" : "未登録要素を検出"), 1),
                a(r).unannotatedElements.length > 0 ? (n(), i("span", Os, v(a(r).unannotatedElements.length), 1)) : p("", !0)
              ], 2),
              a(r).showUnannotatedDetection && a(r).unannotatedElements.length > 0 ? (n(), i("div", js, [
                e("div", Hs, [
                  H(v(a(r).unannotatedElements.length) + "件検出: ", 1),
                  Je.value.binding > 0 ? (n(), i("span", qs, "バインディング " + v(Je.value.binding), 1)) : p("", !0),
                  Je.value.form > 0 ? (n(), i("span", Rs, " / フォーム " + v(Je.value.form), 1)) : p("", !0),
                  Je.value.action > 0 ? (n(), i("span", zs, " / アクション " + v(Je.value.action), 1)) : p("", !0)
                ]),
                e("div", Ks, [
                  (n(!0), i(T, null, D(a(r).unannotatedElements, (s) => (n(), i("div", {
                    key: s.selector,
                    class: L(["di-unannotated-item", { "di-unannotated-item-active": a(r).hoveredUnannotatedSelector === s.selector, ["di-unannotated-item-" + s.category]: a(r).hoveredUnannotatedSelector === s.selector }]),
                    onMouseenter: (m) => Ie(s.selector),
                    onMouseleave: Ee
                  }, [
                    e("span", {
                      class: L(["di-unannotated-category", "di-unannotated-cat-" + s.category])
                    }, v(s.category === "binding" ? "DB" : s.category === "form" ? "Form" : "Act"), 3),
                    e("span", Gs, v(s.text || s.tagName), 1),
                    e("button", {
                      onClick: (m) => a(r).quickAnnotate(s.selector, s.suggestedType),
                      class: "di-unannotated-register"
                    }, " 登録 ", 8, Xs),
                    e("button", {
                      onClick: (m) => O(s.selector),
                      class: "di-unannotated-dismiss"
                    }, [
                      I(a(It), { style: { width: "10px", height: "10px" } })
                    ], 8, Ws)
                  ], 42, Ys))), 128))
                ])
              ])) : p("", !0),
              a(r).showUnannotatedDetection && a(r).unannotatedElements.length === 0 ? (n(), i("div", Zs, " 未登録の要素はありません ")) : p("", !0),
              _t.value > 0 ? (n(), i("div", Js, [
                e("div", Qs, [
                  I(a(bo), { style: { width: "14px", height: "14px", color: "#f59e0b" } }),
                  e("span", null, v(_t.value) + "件のメモが見つかりません", 1)
                ]),
                t[108] || (t[108] = e("div", { class: "di-broken-desc" }, "コード変更によりセレクタが壊れた可能性があります", -1)),
                e("div", Ns, [
                  (n(!0), i(T, null, D(a(r).brokenAnnotations, (s) => {
                    var m, c;
                    return n(), i("div", {
                      key: s,
                      class: "di-broken-item"
                    }, [
                      e("div", ei, [
                        e("div", ti, v(((c = (m = a(r).elementConfigs[s]) == null ? void 0 : m.note) == null ? void 0 : c.text) || "(メモなし)"), 1),
                        e("div", li, v(s), 1)
                      ]),
                      e("div", oi, [
                        e("button", {
                          onClick: ($) => a(r).startRemap(s),
                          class: "di-broken-remap-btn",
                          title: "新しい要素に再設定"
                        }, [
                          I(a(Bl), { style: { width: "12px", height: "12px" } }),
                          t[106] || (t[106] = H(" 再設定 ", -1))
                        ], 8, ni),
                        e("button", {
                          onClick: ($) => {
                            a(r).deleteElementConfig(s), a(r).detectBrokenAnnotations();
                          },
                          class: "di-broken-item-delete",
                          title: "削除"
                        }, [
                          I(a(tl), { style: { width: "12px", height: "12px" } })
                        ], 8, si)
                      ])
                    ]);
                  }), 128))
                ]),
                e("div", ii, [
                  e("button", {
                    onClick: Kt,
                    class: "di-broken-delete-btn"
                  }, [
                    I(a(tl), { style: { width: "12px", height: "12px" } }),
                    t[107] || (t[107] = H(" まとめて削除 ", -1))
                  ])
                ])
              ])) : p("", !0),
              p("", !0)
            ], 512), [
              [Jt, E.value === "elements"]
            ]),
            e("div", ai, [
              b(e("div", null, [
                Z.value ? (n(), i(T, { key: 0 }, [
                  e("div", di, [
                    e("div", ui, [
                      e("h2", ri, v(Z.value.name), 1),
                      e("button", {
                        onClick: t[29] || (t[29] = (s) => a(r).editingScreen = !0),
                        class: "di-screen-edit-btn",
                        title: "画面情報を編集"
                      }, [
                        I(a(Ll), { style: { width: "14px", height: "14px" } })
                      ])
                    ]),
                    Z.value.description ? (n(), i("p", ci, v(Z.value.description), 1)) : p("", !0),
                    Z.value.auth ? (n(), i("div", vi, [
                      Z.value.auth.required ? (n(), i("span", pi, [
                        I(a(To), { style: { width: "11px", height: "11px" } }),
                        t[118] || (t[118] = H(" ログイン必須 ", -1))
                      ])) : p("", !0),
                      (n(!0), i(T, null, D(Z.value.auth.roles || [], (s) => (n(), i("span", {
                        key: s,
                        class: "di-auth-badge di-auth-role"
                      }, [
                        I(a(Vo), { style: { width: "11px", height: "11px" } }),
                        H(" " + v(s), 1)
                      ]))), 128)),
                      Z.value.auth.description ? (n(), i("span", mi, v(Z.value.auth.description), 1)) : p("", !0)
                    ])) : p("", !0)
                  ]),
                  Z.value.componentPath ? (n(), i("div", fi, [
                    e("div", bi, [
                      I(a(Vl), { style: { width: "16px", height: "16px" } }),
                      t[119] || (t[119] = e("span", null, "Component Path", -1))
                    ]),
                    e("code", hi, v(Z.value.componentPath), 1)
                  ])) : p("", !0),
                  Z.value.figmaUrl ? (n(), i("div", yi, [
                    e("div", gi, [
                      I(a(xo), { style: { width: "16px", height: "16px" } }),
                      t[120] || (t[120] = e("span", null, "Figma Design", -1))
                    ]),
                    e("a", {
                      href: Z.value.figmaUrl,
                      target: "_blank",
                      class: "di-link-purple"
                    }, v(Z.value.figmaUrl), 9, ki)
                  ])) : p("", !0),
                  Z.value.apis.length ? (n(), i("div", xi, [
                    e("div", wi, [
                      I(a(Do), { style: { width: "16px", height: "16px" } }),
                      t[121] || (t[121] = e("span", null, "API Endpoints", -1))
                    ]),
                    e("div", Ci, [
                      (n(!0), i(T, null, D(Z.value.apis, (s, m) => (n(), i("div", {
                        key: m,
                        class: "di-api-item"
                      }, [
                        e("span", {
                          class: "di-method-badge",
                          style: ot({ backgroundColor: Ae[s.method] + "20", color: Ae[s.method] })
                        }, v(s.method), 5),
                        e("div", _i, [
                          e("code", $i, v(s.endpoint), 1),
                          s.description ? (n(), i("p", Ti, v(s.description), 1)) : p("", !0)
                        ]),
                        s.loadTiming ? (n(), i("span", Ii, v(s.loadTiming === "onMount" ? "読込時" : s.loadTiming === "action" ? "アクション" : "条件付き"), 1)) : p("", !0)
                      ]))), 128))
                    ])
                  ])) : p("", !0),
                  Z.value.notes ? (n(), i("div", Mi, [
                    e("div", Si, [
                      I(a(fo), { style: { width: "16px", height: "16px" } }),
                      t[122] || (t[122] = e("span", null, "Notes", -1))
                    ]),
                    e("p", Ui, v(Z.value.notes), 1)
                  ])) : p("", !0)
                ], 64)) : (n(), i("div", Di, [
                  I(a(rl), { style: { width: "48px", height: "48px", color: "#334155" } }),
                  t[124] || (t[124] = e("p", null, [
                    H("この画面の仕様情報は"),
                    e("br"),
                    H("まだ登録されていません")
                  ], -1)),
                  e("button", {
                    onClick: t[30] || (t[30] = (s) => a(r).editingScreen = !0),
                    class: "di-screen-register-btn"
                  }, [
                    I(a(Ll), { style: { width: "14px", height: "14px" } }),
                    t[123] || (t[123] = H(" 画面情報を登録 ", -1))
                  ])
                ])),
                e("div", Vi, [
                  e("div", Ei, [
                    I(a(Uo), { style: { width: "14px", height: "14px", color: "#94a3b8" } }),
                    t[125] || (t[125] = e("span", null, "横断検索", -1))
                  ]),
                  t[126] || (t[126] = e("div", { class: "di-cross-search-desc" }, "全画面のメモを横断検索。カラム名・APIエンドポイント・メモ内テキストで絞り込めます。", -1)),
                  e("div", Pi, [
                    e("div", Bi, [
                      (n(), i(T, null, D(We, (s) => e("button", {
                        key: s.value,
                        onClick: (m) => a(r).crossSearchMode = s.value,
                        class: L(["di-filter-btn", { active: a(r).crossSearchMode === s.value }])
                      }, v(s.label), 11, Ai)), 64))
                    ]),
                    b(e("input", {
                      "onUpdate:modelValue": t[31] || (t[31] = (s) => a(r).crossSearchQuery = s),
                      type: "text",
                      class: "di-cross-search-input",
                      placeholder: Ze.value
                    }, null, 8, Li), [
                      [w, a(r).crossSearchQuery]
                    ]),
                    a(r).crossSearchQuery.trim() ? (n(), i("div", Fi, v(a(r).crossSearchResults.length) + "件 (" + v(At.value) + "画面) ", 1)) : p("", !0),
                    xt.value.length > 0 ? (n(), i("div", Oi, [
                      (n(!0), i(T, null, D(xt.value, (s) => (n(), i("div", {
                        key: s.pagePath,
                        class: "di-cross-search-group"
                      }, [
                        e("div", ji, [
                          H(v(s.pagePath) + " ", 1),
                          s.pageName !== s.pagePath ? (n(), i("span", Hi, "(" + v(s.pageName) + ")", 1)) : p("", !0)
                        ]),
                        (n(!0), i(T, null, D(s.items, (m, c) => (n(), i("div", {
                          key: c,
                          class: L(["di-cross-search-item", m.elementType ? "di-cross-item-" + m.elementType : ""]),
                          onClick: ($) => m.selector && a(r).startEditing(m.selector)
                        }, [
                          e("span", Ri, v(m.matchedField), 1),
                          m.matchContext ? (n(), i("span", zi, v(m.matchContext), 1)) : p("", !0)
                        ], 10, qi))), 128))
                      ]))), 128))
                    ])) : p("", !0)
                  ])
                ]),
                e("div", Ki, [
                  e("button", {
                    onClick: t[32] || (t[32] = (s) => a(r).showScreenFlow = !a(r).showScreenFlow),
                    class: L(["di-screen-flow-toggle", { active: a(r).showScreenFlow }])
                  }, [
                    I(a(El), { style: { width: "14px", height: "14px" } }),
                    t[127] || (t[127] = e("span", null, "画面フロー", -1)),
                    a(r).screenFlowData.edges.length > 0 ? (n(), i("span", Yi, v(a(r).screenFlowData.nodes.length) + "画面 / " + v(a(r).screenFlowData.edges.length) + "遷移 ", 1)) : p("", !0)
                  ], 2),
                  a(r).showScreenFlow ? (n(), i("div", Gi, [
                    a(r).screenFlowData.edges.length === 0 ? (n(), i("div", Xi, " navigate型のアクションが登録されていません ")) : p("", !0),
                    (n(!0), i(T, null, D(fl.value, (s) => (n(), i("div", {
                      key: s.node.path,
                      class: "di-flow-group"
                    }, [
                      e("div", {
                        class: L(["di-flow-node", { "di-flow-node-current": s.node.path === sl.value }])
                      }, [
                        e("span", Wi, v(s.node.path), 1),
                        s.node.name !== s.node.path ? (n(), i("span", Zi, "(" + v(s.node.name) + ")", 1)) : p("", !0)
                      ], 2),
                      (n(!0), i(T, null, D(s.edges, (m) => (n(), i("div", {
                        key: m.from + m.to,
                        class: "di-flow-edge",
                        onClick: (c) => il(m.selector)
                      }, [
                        t[128] || (t[128] = e("span", { class: "di-flow-arrow" }, "→", -1)),
                        e("span", Qi, v(m.to), 1),
                        m.label ? (n(), i("span", Ni, "[" + v(m.label) + "]", 1)) : p("", !0)
                      ], 8, Ji))), 128))
                    ]))), 128)),
                    a(r).screenFlowData.orphanPages.length > 0 ? (n(), i("div", ea, [
                      t[129] || (t[129] = e("div", { class: "di-flow-orphans-header" }, "遷移なしのページ", -1)),
                      (n(!0), i(T, null, D(a(r).screenFlowData.orphanPages, (s) => (n(), i("span", {
                        key: s.path,
                        class: "di-flow-orphan-item"
                      }, v(s.path), 1))), 128))
                    ])) : p("", !0)
                  ])) : p("", !0)
                ])
              ], 512), [
                [Jt, E.value === "elements"]
              ]),
              b(e("div", null, [
                e("div", ta, [
                  e("div", la, [
                    I(a(zt), { style: { width: "16px", height: "16px", color: "#a78bfa" } }),
                    t[130] || (t[130] = e("span", null, "マスタ定義", -1)),
                    kt.value > 0 ? (n(), i("span", oa, v(kt.value), 1)) : p("", !0),
                    e("button", {
                      onClick: t[33] || (t[33] = (s) => Ht()),
                      class: "di-btn-icon",
                      style: { "margin-left": "auto" },
                      title: "新規追加"
                    }, [
                      I(a(Rt), { style: { width: "14px", height: "14px" } })
                    ])
                  ]),
                  kt.value > 0 ? (n(!0), i(T, { key: 0 }, D(Qt.value, (s, m) => (n(), i("div", {
                    key: m,
                    class: "di-master-table-group"
                  }, [
                    e("div", na, v(m), 1),
                    (n(!0), i(T, null, D(s, (c) => (n(), i("div", {
                      key: c.id,
                      class: "di-master-item",
                      onClick: ($) => Ht(c.id)
                    }, [
                      e("div", ia, [
                        e("span", aa, "." + v(c.column), 1),
                        c.columnType ? (n(), i("span", da, v(c.columnType), 1)) : p("", !0),
                        e("span", ua, v(c.name), 1)
                      ]),
                      e("div", ra, [
                        (n(!0), i(T, null, D(c.entries.slice(0, 5), ($, M) => (n(), i("span", {
                          key: M,
                          class: "di-master-entry-chip",
                          style: ot($.color ? { borderColor: $.color, color: $.color } : {})
                        }, v($.value) + "=" + v($.label), 5))), 128)),
                        c.entries.length > 5 ? (n(), i("span", ca, "+" + v(c.entries.length - 5), 1)) : p("", !0)
                      ])
                    ], 8, sa))), 128))
                  ]))), 128)) : (n(), i("div", {
                    key: 1,
                    class: "di-master-empty",
                    onClick: t[34] || (t[34] = (s) => Ht())
                  }, [...t[131] || (t[131] = [
                    e("span", null, "テーブル.カラムのマスタ値を定義", -1)
                  ])]))
                ]),
                (n(), ct(Vt, { to: a(g) }, [
                  mt.value ? (n(), i("div", {
                    key: 0,
                    "data-dev-inspector": "",
                    class: "di-modal-overlay",
                    onClick: t[43] || (t[43] = N((s) => mt.value = !1, ["self"]))
                  }, [
                    e("div", va, [
                      e("div", pa, [
                        e("h3", null, v(ft.value ? "マスタ定義を編集" : "新規マスタ定義"), 1),
                        e("button", {
                          onClick: t[35] || (t[35] = (s) => mt.value = !1),
                          class: "di-close-btn"
                        }, [
                          I(a(It), { style: { width: "16px", height: "16px" } })
                        ])
                      ]),
                      e("div", ma, [
                        e("div", fa, [
                          e("div", ba, [
                            t[132] || (t[132] = e("label", null, "テーブル", -1)),
                            b(e("input", {
                              "onUpdate:modelValue": t[36] || (t[36] = (s) => pe.value.table = s),
                              placeholder: "orders",
                              disabled: !!ft.value
                            }, null, 8, ha), [
                              [w, pe.value.table]
                            ])
                          ]),
                          e("div", ya, [
                            t[133] || (t[133] = e("label", null, "カラム", -1)),
                            b(e("input", {
                              "onUpdate:modelValue": t[37] || (t[37] = (s) => pe.value.column = s),
                              placeholder: "status",
                              disabled: !!ft.value
                            }, null, 8, ga), [
                              [w, pe.value.column]
                            ])
                          ])
                        ]),
                        e("div", ka, [
                          e("div", xa, [
                            t[134] || (t[134] = e("label", null, "表示名", -1)),
                            b(e("input", {
                              "onUpdate:modelValue": t[38] || (t[38] = (s) => pe.value.name = s),
                              placeholder: "ステータス"
                            }, null, 512), [
                              [w, pe.value.name]
                            ])
                          ]),
                          e("div", wa, [
                            t[135] || (t[135] = e("label", null, "型", -1)),
                            b(e("input", {
                              "onUpdate:modelValue": t[39] || (t[39] = (s) => pe.value.columnType = s),
                              placeholder: "integer"
                            }, null, 512), [
                              [w, pe.value.columnType]
                            ])
                          ])
                        ]),
                        e("div", Ca, [
                          t[136] || (t[136] = e("label", null, "説明", -1)),
                          b(e("input", {
                            "onUpdate:modelValue": t[40] || (t[40] = (s) => pe.value.description = s),
                            placeholder: "注文のステータスを管理"
                          }, null, 512), [
                            [w, pe.value.description]
                          ])
                        ]),
                        e("div", _a, [
                          t[137] || (t[137] = e("label", null, "マスタ値", -1)),
                          e("button", {
                            onClick: Ye,
                            class: "di-btn-icon",
                            title: "追加"
                          }, [
                            I(a(Rt), { style: { width: "14px", height: "14px" } })
                          ])
                        ]),
                        e("div", $a, [
                          (n(!0), i(T, null, D(pe.value.entries, (s, m) => (n(), i("div", {
                            key: m,
                            class: "di-master-entry-row"
                          }, [
                            b(e("input", {
                              "onUpdate:modelValue": (c) => s.value = c,
                              placeholder: "値",
                              class: "di-master-entry-value"
                            }, null, 8, Ta), [
                              [w, s.value]
                            ]),
                            b(e("input", {
                              "onUpdate:modelValue": (c) => s.label = c,
                              placeholder: "ラベル",
                              class: "di-master-entry-label"
                            }, null, 8, Ia), [
                              [w, s.label]
                            ]),
                            b(e("input", {
                              "onUpdate:modelValue": (c) => s.color = c,
                              placeholder: "#色",
                              class: "di-master-entry-color"
                            }, null, 8, Ma), [
                              [w, s.color]
                            ]),
                            b(e("input", {
                              "onUpdate:modelValue": (c) => s.description = c,
                              placeholder: "説明",
                              class: "di-master-entry-desc"
                            }, null, 8, Sa), [
                              [w, s.description]
                            ]),
                            e("button", {
                              onClick: (c) => Re(m),
                              class: "di-btn-icon di-btn-icon-danger"
                            }, [
                              I(a(It), { style: { width: "12px", height: "12px" } })
                            ], 8, Ua)
                          ]))), 128))
                        ]),
                        e("div", Da, [
                          t[138] || (t[138] = e("label", null, "状態遷移", -1)),
                          e("button", {
                            onClick: Ge,
                            class: "di-btn-icon",
                            title: "遷移を追加"
                          }, [
                            I(a(Rt), { style: { width: "14px", height: "14px" } })
                          ])
                        ]),
                        pe.value.transitions.length > 0 ? (n(), i("div", Va, [
                          t[142] || (t[142] = e("div", { class: "di-transition-header" }, [
                            e("span", { class: "di-transition-col-from" }, "遷移元"),
                            e("span", { class: "di-transition-col-arrow" }, "→"),
                            e("span", { class: "di-transition-col-to" }, "遷移先"),
                            e("span", { class: "di-transition-col-trigger" }, "トリガー"),
                            e("span", { class: "di-transition-col-condition" }, "条件"),
                            e("span", { class: "di-transition-col-act" })
                          ], -1)),
                          (n(!0), i(T, null, D(pe.value.transitions, (s, m) => (n(), i("div", {
                            key: m,
                            class: "di-transition-row"
                          }, [
                            b(e("select", {
                              "onUpdate:modelValue": (c) => s.from = c,
                              class: "di-transition-select di-transition-col-from"
                            }, [
                              t[139] || (t[139] = e("option", { value: "" }, "-", -1)),
                              (n(!0), i(T, null, D(pe.value.entries.filter((c) => c.value), (c) => (n(), i("option", {
                                key: c.value,
                                value: c.value
                              }, v(c.label || c.value), 9, Pa))), 128))
                            ], 8, Ea), [
                              [we, s.from]
                            ]),
                            t[141] || (t[141] = e("span", { class: "di-transition-col-arrow" }, "→", -1)),
                            b(e("select", {
                              "onUpdate:modelValue": (c) => s.to = c,
                              class: "di-transition-select di-transition-col-to"
                            }, [
                              t[140] || (t[140] = e("option", { value: "" }, "-", -1)),
                              (n(!0), i(T, null, D(pe.value.entries.filter((c) => c.value), (c) => (n(), i("option", {
                                key: c.value,
                                value: c.value
                              }, v(c.label || c.value), 9, Aa))), 128))
                            ], 8, Ba), [
                              [we, s.to]
                            ]),
                            b(e("input", {
                              "onUpdate:modelValue": (c) => s.trigger = c,
                              placeholder: "トリガー",
                              class: "di-transition-input di-transition-col-trigger"
                            }, null, 8, La), [
                              [w, s.trigger]
                            ]),
                            b(e("input", {
                              "onUpdate:modelValue": (c) => s.condition = c,
                              placeholder: "条件",
                              class: "di-transition-input di-transition-col-condition"
                            }, null, 8, Fa), [
                              [w, s.condition]
                            ]),
                            e("button", {
                              onClick: (c) => Bt(m),
                              class: "di-btn-icon di-btn-icon-danger"
                            }, [
                              I(a(It), { style: { width: "12px", height: "12px" } })
                            ], 8, Oa)
                          ]))), 128))
                        ])) : (n(), i("div", ja, " 状態遷移を定義（任意） "))
                      ]),
                      e("div", Ha, [
                        ft.value ? (n(), i("button", {
                          key: 0,
                          onClick: t[41] || (t[41] = (s) => {
                            Q(ft.value), mt.value = !1;
                          }),
                          class: "di-btn-small di-btn-danger"
                        }, "削除")) : p("", !0),
                        t[143] || (t[143] = e("div", { style: { flex: "1" } }, null, -1)),
                        e("button", {
                          onClick: t[42] || (t[42] = (s) => mt.value = !1),
                          class: "di-btn-small"
                        }, "キャンセル"),
                        e("button", {
                          onClick: Nt,
                          class: "di-btn-small di-btn-primary",
                          disabled: !pe.value.table || !pe.value.column
                        }, "保存", 8, qa)
                      ])
                    ])
                  ])) : p("", !0)
                ], 8, ["to"]))
              ], 512), [
                [Jt, E.value === "masters"]
              ]),
              b(e("div", null, [
                e("div", Ra, [
                  e("div", za, [
                    I(a(Dl), { style: { width: "16px", height: "16px", color: "#f59e0b" } }),
                    t[144] || (t[144] = e("span", null, "バッチ処理", -1)),
                    Ke.value > 0 ? (n(), i("span", Ka, v(Ke.value), 1)) : p("", !0),
                    e("button", {
                      onClick: t[44] || (t[44] = (s) => ye()),
                      class: "di-btn-icon",
                      style: { "margin-left": "auto" },
                      title: "新規追加"
                    }, [
                      I(a(Rt), { style: { width: "14px", height: "14px" } })
                    ])
                  ]),
                  Ke.value > 0 ? (n(!0), i(T, { key: 0 }, D(Me.value, (s) => (n(), i("div", {
                    key: s.id,
                    class: "di-batch-item",
                    onClick: (m) => ye(s.id)
                  }, [
                    e("div", Ga, [
                      e("div", Xa, v(s.name), 1),
                      s.schedule ? (n(), i("div", Wa, v(s.schedule), 1)) : p("", !0)
                    ])
                  ], 8, Ya))), 128)) : (n(), i("div", {
                    key: 1,
                    class: "di-batch-empty",
                    onClick: t[45] || (t[45] = (s) => ye())
                  }, [...t[145] || (t[145] = [
                    e("span", null, "バッチ処理を定義", -1)
                  ])]))
                ]),
                (n(), ct(Vt, { to: a(g) }, [
                  he.value ? (n(), i("div", {
                    key: 0,
                    "data-dev-inspector": "",
                    class: "di-modal-overlay",
                    onClick: t[61] || (t[61] = N((s) => he.value = !1, ["self"]))
                  }, [
                    e("div", Za, [
                      e("div", Ja, [
                        e("h3", null, v(ve.value ? "バッチ処理を編集" : "新規バッチ処理"), 1),
                        e("button", {
                          onClick: t[46] || (t[46] = (s) => he.value = !1),
                          class: "di-close-btn"
                        }, [
                          I(a(It), { style: { width: "16px", height: "16px" } })
                        ])
                      ]),
                      e("div", Qa, [
                        e("div", Na, [
                          e("div", ed, [
                            t[146] || (t[146] = e("label", null, "バッチ名 *", -1)),
                            b(e("input", {
                              "onUpdate:modelValue": t[47] || (t[47] = (s) => z.value.name = s),
                              placeholder: "月次レポート生成"
                            }, null, 512), [
                              [w, z.value.name]
                            ])
                          ]),
                          e("div", td, [
                            t[147] || (t[147] = e("label", null, "スケジュール", -1)),
                            b(e("input", {
                              "onUpdate:modelValue": t[48] || (t[48] = (s) => z.value.schedule = s),
                              placeholder: "毎月1日 AM2:00"
                            }, null, 512), [
                              [w, z.value.schedule]
                            ])
                          ])
                        ]),
                        e("div", ld, [
                          e("div", od, [
                            t[148] || (t[148] = e("label", null, "手動トリガー", -1)),
                            b(e("input", {
                              "onUpdate:modelValue": t[49] || (t[49] = (s) => z.value.trigger = s),
                              placeholder: "管理画面から実行"
                            }, null, 512), [
                              [w, z.value.trigger]
                            ])
                          ])
                        ]),
                        e("div", nd, [
                          t[149] || (t[149] = e("label", null, "説明", -1)),
                          b(e("textarea", {
                            "onUpdate:modelValue": t[50] || (t[50] = (s) => z.value.description = s),
                            rows: "2",
                            placeholder: "バッチ処理の概要..."
                          }, null, 512), [
                            [w, z.value.description]
                          ])
                        ]),
                        t[159] || (t[159] = e("div", { class: "di-batch-section-label" }, "入出力テーブル", -1)),
                        e("div", sd, [
                          e("div", id, [
                            t[150] || (t[150] = e("label", null, "入力テーブル", -1)),
                            e("div", ad, [
                              (n(!0), i(T, null, D(z.value.inputTables, (s, m) => (n(), i("span", {
                                key: m,
                                class: "di-batch-tag"
                              }, [
                                H(v(s) + " ", 1),
                                e("button", {
                                  onClick: (c) => bt(m),
                                  class: "di-batch-tag-remove"
                                }, "×", 8, dd)
                              ]))), 128)),
                              b(e("input", {
                                "onUpdate:modelValue": t[51] || (t[51] = (s) => ze.value = s),
                                onKeydown: t[52] || (t[52] = Et(N((s) => Te(), ["prevent"]), ["enter"])),
                                type: "text",
                                placeholder: "テーブル名",
                                class: "di-batch-tag-input"
                              }, null, 544), [
                                [w, ze.value]
                              ])
                            ])
                          ]),
                          e("div", ud, [
                            t[151] || (t[151] = e("label", null, "出力テーブル", -1)),
                            e("div", rd, [
                              (n(!0), i(T, null, D(z.value.outputTables, (s, m) => (n(), i("span", {
                                key: m,
                                class: "di-batch-tag"
                              }, [
                                H(v(s) + " ", 1),
                                e("button", {
                                  onClick: (c) => $t(m),
                                  class: "di-batch-tag-remove"
                                }, "×", 8, cd)
                              ]))), 128)),
                              b(e("input", {
                                "onUpdate:modelValue": t[53] || (t[53] = (s) => Xe.value = s),
                                onKeydown: t[54] || (t[54] = Et(N((s) => Ve(), ["prevent"]), ["enter"])),
                                type: "text",
                                placeholder: "テーブル名",
                                class: "di-batch-tag-input"
                              }, null, 544), [
                                [w, Xe.value]
                              ])
                            ])
                          ])
                        ]),
                        e("div", vd, [
                          t[152] || (t[152] = H(" 処理ステップ ", -1)),
                          e("button", {
                            onClick: Mt,
                            class: "di-btn-icon",
                            style: { "margin-left": "auto" },
                            title: "ステップ追加"
                          }, [
                            I(a(Rt), { style: { width: "14px", height: "14px" } })
                          ])
                        ]),
                        z.value.steps.length > 0 ? (n(), i("div", pd, [
                          t[154] || (t[154] = e("div", { class: "di-batch-steps-header" }, [
                            e("span", { class: "di-batch-step-no" }, "No"),
                            e("span", { class: "di-batch-step-desc" }, "処理内容"),
                            e("span", { class: "di-batch-step-target" }, "対象"),
                            e("span", { class: "di-batch-step-type" }, "種別"),
                            e("span", { class: "di-batch-step-error" }, "エラー処理"),
                            e("span", { class: "di-batch-step-act" })
                          ], -1)),
                          (n(!0), i(T, null, D(z.value.steps, (s, m) => (n(), i("div", {
                            key: m,
                            class: "di-batch-step-row"
                          }, [
                            e("span", md, v(m + 1), 1),
                            b(e("input", {
                              "onUpdate:modelValue": (c) => s.description = c,
                              placeholder: "処理内容",
                              class: "di-batch-step-input di-batch-step-desc"
                            }, null, 8, fd), [
                              [w, s.description]
                            ]),
                            b(e("input", {
                              "onUpdate:modelValue": (c) => s.target = c,
                              placeholder: "対象テーブル",
                              class: "di-batch-step-input di-batch-step-target"
                            }, null, 8, bd), [
                              [w, s.target]
                            ]),
                            b(e("select", {
                              "onUpdate:modelValue": (c) => s.type = c,
                              class: "di-batch-step-select di-batch-step-type"
                            }, [...t[153] || (t[153] = [
                              e("option", { value: "" }, "-", -1),
                              e("option", { value: "query" }, "query", -1),
                              e("option", { value: "api" }, "api", -1),
                              e("option", { value: "file" }, "file", -1),
                              e("option", { value: "mail" }, "mail", -1),
                              e("option", { value: "other" }, "other", -1)
                            ])], 8, hd), [
                              [we, s.type]
                            ]),
                            b(e("input", {
                              "onUpdate:modelValue": (c) => s.errorHandling = c,
                              placeholder: "エラー時",
                              class: "di-batch-step-input di-batch-step-error"
                            }, null, 8, yd), [
                              [w, s.errorHandling]
                            ]),
                            e("button", {
                              onClick: (c) => St(m),
                              class: "di-btn-icon di-btn-icon-danger"
                            }, [
                              I(a(It), { style: { width: "12px", height: "12px" } })
                            ], 8, gd)
                          ]))), 128))
                        ])) : p("", !0),
                        t[160] || (t[160] = e("div", { class: "di-batch-section-label" }, "運用設定", -1)),
                        e("div", kd, [
                          e("div", xd, [
                            t[155] || (t[155] = e("label", null, "タイムアウト", -1)),
                            b(e("input", {
                              "onUpdate:modelValue": t[55] || (t[55] = (s) => z.value.timeout = s),
                              placeholder: "30分"
                            }, null, 512), [
                              [w, z.value.timeout]
                            ])
                          ]),
                          e("div", wd, [
                            t[156] || (t[156] = e("label", null, "リトライ", -1)),
                            b(e("input", {
                              "onUpdate:modelValue": t[56] || (t[56] = (s) => z.value.retryPolicy = s),
                              placeholder: "3回まで、5分間隔"
                            }, null, 512), [
                              [w, z.value.retryPolicy]
                            ])
                          ])
                        ]),
                        e("div", Cd, [
                          e("div", _d, [
                            t[157] || (t[157] = e("label", null, "エラー通知先", -1)),
                            b(e("input", {
                              "onUpdate:modelValue": t[57] || (t[57] = (s) => z.value.notifyOnError = s),
                              placeholder: "admin@example.com"
                            }, null, 512), [
                              [w, z.value.notifyOnError]
                            ])
                          ]),
                          e("div", $d, [
                            t[158] || (t[158] = e("label", null, "完了通知先", -1)),
                            b(e("input", {
                              "onUpdate:modelValue": t[58] || (t[58] = (s) => z.value.notifyOnComplete = s),
                              placeholder: "manager@example.com"
                            }, null, 512), [
                              [w, z.value.notifyOnComplete]
                            ])
                          ])
                        ])
                      ]),
                      e("div", Td, [
                        ve.value ? (n(), i("button", {
                          key: 0,
                          onClick: t[59] || (t[59] = (s) => {
                            ne(ve.value), he.value = !1;
                          }),
                          class: "di-btn-small di-btn-danger"
                        }, "削除")) : p("", !0),
                        t[161] || (t[161] = e("div", { style: { flex: "1" } }, null, -1)),
                        e("button", {
                          onClick: t[60] || (t[60] = (s) => he.value = !1),
                          class: "di-btn-small"
                        }, "キャンセル"),
                        e("button", {
                          onClick: u,
                          class: "di-btn-small di-btn-primary",
                          disabled: !z.value.name
                        }, "保存", 8, Id)
                      ])
                    ])
                  ])) : p("", !0)
                ], 8, ["to"]))
              ], 512), [
                [Jt, E.value === "batches"]
              ]),
              b(e("div", null, [
                e("div", Md, [
                  e("button", {
                    onClick: t[62] || (t[62] = (s) => a(r).erFocusTable = null),
                    class: L(["di-filter-chip", { active: !a(r).erFocusTable }])
                  }, "全テーブル", 2),
                  (n(!0), i(T, null, D(a(r).erTables, (s) => (n(), i("button", {
                    key: s,
                    onClick: (m) => a(r).erFocusTable = a(r).erFocusTable === s ? null : s,
                    class: L(["di-filter-chip", { active: a(r).erFocusTable === s }])
                  }, v(s), 11, Sd))), 128))
                ]),
                e("div", Ud, [
                  (n(!0), i(T, null, D(ut.value, (s) => {
                    var m;
                    return n(), i("div", {
                      key: s,
                      class: L(["di-er-card", { "di-er-card-focused": a(r).erFocusTable === s }]),
                      onClick: (c) => a(r).erFocusTable = a(r).erFocusTable === s ? null : s
                    }, [
                      e("div", Vd, [
                        e("span", null, v(s), 1),
                        rt(s) ? (n(), i("button", {
                          key: 0,
                          onClick: N((c) => pt(s), ["stop"]),
                          class: "di-er-rel-delete"
                        }, "×", 8, Ed)) : p("", !0)
                      ]),
                      e("div", Pd, [
                        (n(!0), i(T, null, D(a(r).erTableColumns[s] || [], (c) => (n(), i("div", {
                          key: c.column,
                          class: "di-er-col"
                        }, [
                          e("span", null, v(c.column), 1),
                          c.type ? (n(), i("span", Bd, v(c.type), 1)) : p("", !0),
                          Le(s, c.column) ? (n(), i("button", {
                            key: 1,
                            onClick: N(($) => a(r).removeManualColumn(s, c.column), ["stop"]),
                            class: "di-er-rel-delete"
                          }, "×", 8, Ad)) : p("", !0)
                        ]))), 128)),
                        (m = a(r).erTableColumns[s]) != null && m.length ? p("", !0) : (n(), i("div", Ld, "カラム未定義")),
                        Be.value === s ? (n(), i("div", {
                          key: 1,
                          class: "di-er-add-col-form",
                          onClick: t[65] || (t[65] = N(() => {
                          }, ["stop"]))
                        }, [
                          b(e("input", {
                            "onUpdate:modelValue": t[63] || (t[63] = (c) => U.value = c),
                            placeholder: "カラム名",
                            onKeyup: Et((c) => tt(s), ["enter"])
                          }, null, 40, Fd), [
                            [w, U.value]
                          ]),
                          b(e("input", {
                            "onUpdate:modelValue": t[64] || (t[64] = (c) => qe.value = c),
                            placeholder: "型",
                            onKeyup: Et((c) => tt(s), ["enter"])
                          }, null, 40, Od), [
                            [w, qe.value]
                          ]),
                          e("button", {
                            onClick: (c) => tt(s),
                            disabled: !U.value.trim(),
                            class: "di-er-add-col-btn"
                          }, "+", 8, jd)
                        ])) : (n(), i("button", {
                          key: 2,
                          onClick: N((c) => gt(s), ["stop"]),
                          class: "di-er-add-col-trigger"
                        }, "+ カラム", 8, Hd))
                      ]),
                      et(s).length ? (n(), i("div", qd, [
                        (n(!0), i(T, null, D(et(s), (c) => (n(), i("div", {
                          key: c.id,
                          class: "di-er-relation"
                        }, [
                          e("span", Rd, v(c.type), 1),
                          e("span", null, "→ " + v(c.fromTable === s ? c.toTable : c.fromTable), 1),
                          c.inferred ? p("", !0) : (n(), i("button", {
                            key: 0,
                            onClick: N(($) => a(r).removeTableRelation(c.id), ["stop"]),
                            class: "di-er-rel-delete"
                          }, "×", 8, zd))
                        ]))), 128))
                      ])) : p("", !0)
                    ], 10, Dd);
                  }), 128))
                ]),
                e("div", Kd, [
                  e("div", Yd, [
                    e("button", {
                      onClick: t[66] || (t[66] = (s) => {
                        Ce.value = !Ce.value, be.value = !1;
                      }),
                      class: "di-btn-small"
                    }, [
                      I(a(Rt), { style: { width: "12px", height: "12px" } }),
                      t[162] || (t[162] = H(" テーブル追加 ", -1))
                    ]),
                    e("button", {
                      onClick: t[67] || (t[67] = (s) => {
                        be.value = !be.value, Ce.value = !1;
                      }),
                      class: "di-btn-small"
                    }, [
                      I(a(Rt), { style: { width: "12px", height: "12px" } }),
                      t[163] || (t[163] = H(" リレーション追加 ", -1))
                    ])
                  ]),
                  Ce.value ? (n(), i("div", Gd, [
                    b(e("input", {
                      "onUpdate:modelValue": t[68] || (t[68] = (s) => _e.value = s),
                      placeholder: "テーブル名",
                      onKeyup: Et(Se, ["enter"]),
                      style: { background: "#1e1e1e", border: "1px solid #333", color: "#ccc", "border-radius": "4px", padding: "4px 6px", "font-size": "11px", outline: "none" }
                    }, null, 544), [
                      [w, _e.value]
                    ]),
                    e("button", {
                      onClick: Se,
                      disabled: !_e.value.trim(),
                      class: "di-btn-small di-btn-primary"
                    }, "追加", 8, Xd)
                  ])) : p("", !0),
                  be.value ? (n(), i("div", Wd, [
                    b(e("select", {
                      "onUpdate:modelValue": t[69] || (t[69] = (s) => Y.value = s)
                    }, [
                      t[164] || (t[164] = e("option", { value: "" }, "From テーブル", -1)),
                      (n(!0), i(T, null, D(a(r).erTables, (s) => (n(), i("option", {
                        key: s,
                        value: s
                      }, v(s), 9, Zd))), 128))
                    ], 512), [
                      [we, Y.value]
                    ]),
                    b(e("select", {
                      "onUpdate:modelValue": t[70] || (t[70] = (s) => Pe.value = s)
                    }, [...t[165] || (t[165] = [
                      e("option", { value: "has_many" }, "has_many", -1),
                      e("option", { value: "belongs_to" }, "belongs_to", -1),
                      e("option", { value: "has_one" }, "has_one", -1),
                      e("option", { value: "many_to_many" }, "many_to_many", -1)
                    ])], 512), [
                      [we, Pe.value]
                    ]),
                    b(e("select", {
                      "onUpdate:modelValue": t[71] || (t[71] = (s) => me.value = s)
                    }, [
                      t[166] || (t[166] = e("option", { value: "" }, "To テーブル", -1)),
                      (n(!0), i(T, null, D(a(r).erTables, (s) => (n(), i("option", {
                        key: s,
                        value: s
                      }, v(s), 9, Jd))), 128))
                    ], 512), [
                      [we, me.value]
                    ]),
                    e("button", {
                      onClick: xe,
                      disabled: !Y.value || !me.value,
                      class: "di-btn-small di-btn-primary"
                    }, "追加", 8, Qd)
                  ])) : p("", !0)
                ])
              ], 512), [
                [Jt, E.value === "tables"]
              ]),
              b(e("div", null, [
                e("div", Nd, [
                  e("button", {
                    onClick: yt,
                    class: "di-btn-green"
                  }, [
                    I(a($o), { style: { width: "16px", height: "16px" } }),
                    t[167] || (t[167] = H(" Git管理用に保存 ", -1))
                  ]),
                  e("button", {
                    onClick: it,
                    class: "di-btn-blue"
                  }, [
                    I(a(Hl), { style: { width: "16px", height: "16px" } }),
                    t[168] || (t[168] = H(" 画面仕様書 (xlsx) 出力 ", -1))
                  ]),
                  e("button", {
                    onClick: t[72] || (t[72] = (s) => a(r).downloadSddSpec()),
                    class: "di-btn-green-outline"
                  }, [
                    I(a(rl), { style: { width: "16px", height: "16px" } }),
                    t[169] || (t[169] = H(" SDD仕様書 (md) ", -1))
                  ]),
                  e("button", {
                    onClick: t[73] || (t[73] = (s) => a(r).downloadClientSpec()),
                    class: "di-btn-blue-outline"
                  }, [
                    I(a(rl), { style: { width: "16px", height: "16px" } }),
                    t[170] || (t[170] = H(" 納品用仕様書 (md) ", -1))
                  ])
                ]),
                t[178] || (t[178] = e("p", { class: "di-export-hint" }, [
                  H(" JSON: "),
                  e("code", null, "dev-annotations.json"),
                  H(" に配置してcommit ")
                ], -1)),
                e("div", eu, [
                  e("button", {
                    onClick: t[74] || (t[74] = (s) => R.value = !0),
                    class: "di-btn-small"
                  }, [
                    I(a(hl), { style: { width: "14px", height: "14px" } }),
                    t[171] || (t[171] = H(" エクスポート ", -1))
                  ]),
                  e("button", {
                    onClick: t[75] || (t[75] = (s) => ue.value = !0),
                    class: "di-btn-small"
                  }, [
                    I(a(Po), { style: { width: "14px", height: "14px" } }),
                    t[172] || (t[172] = H(" インポート ", -1))
                  ]),
                  Oe.value > 0 ? (n(), i("button", {
                    key: 0,
                    onClick: dt,
                    class: "di-btn-small di-btn-danger"
                  }, [
                    I(a(tl), { style: { width: "14px", height: "14px" } }),
                    t[173] || (t[173] = H(" 全削除 ", -1))
                  ])) : p("", !0)
                ]),
                Oe.value > 0 || kt.value > 0 || Ke.value > 0 ? (n(), i("div", tu, [
                  t[177] || (t[177] = e("div", { class: "di-export-summary-title" }, "登録状況", -1)),
                  e("div", lu, [
                    t[174] || (t[174] = e("span", null, "要素設定", -1)),
                    e("span", ou, v(Oe.value) + "件", 1)
                  ]),
                  e("div", nu, [
                    t[175] || (t[175] = e("span", null, "マスタ定義", -1)),
                    e("span", su, v(kt.value) + "件", 1)
                  ]),
                  e("div", iu, [
                    t[176] || (t[176] = e("span", null, "バッチ処理", -1)),
                    e("span", au, v(Ke.value) + "件", 1)
                  ])
                ])) : p("", !0)
              ], 512), [
                [Jt, E.value === "export"]
              ])
            ]),
            t[179] || (t[179] = e("div", { class: "di-footer" }, [
              e("kbd", null, "Ctrl"),
              e("span", null, "+"),
              e("kbd", null, "Shift"),
              e("span", null, "+"),
              e("kbd", null, "D"),
              e("span", { class: "di-footer-text" }, "で開発者モード切替")
            ], -1))
          ])) : p("", !0)
        ], 8, ["to"])),
        (n(), ct(Vt, { to: a(g) }, [
          a(r).isEnabled ? (n(), i("div", du, [...t[180] || (t[180] = [
            e("span", { class: "di-indicator-dot" }, null, -1),
            H(" Developer Mode ", -1)
          ])])) : p("", !0)
        ], 8, ["to"])),
        (n(), ct(Vt, { to: a(g) }, [
          R.value ? (n(), i("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: t[77] || (t[77] = N((s) => R.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", uu, [
              t[182] || (t[182] = e("h3", { class: "di-modal-title" }, "設定をエクスポート", -1)),
              e("textarea", {
                readonly: "",
                value: a(r).exportConfigs(),
                class: "di-modal-textarea"
              }, null, 8, ru),
              e("div", cu, [
                e("button", {
                  onClick: t[76] || (t[76] = (s) => R.value = !1),
                  class: "di-btn-small"
                }, "閉じる"),
                e("button", {
                  onClick: vt,
                  class: "di-btn-small di-btn-gray"
                }, [
                  I(a(hl), { style: { width: "14px", height: "14px" } }),
                  t[181] || (t[181] = H(" ファイル保存 ", -1))
                ]),
                e("button", {
                  onClick: st,
                  class: "di-btn-small di-btn-primary"
                }, "コピー")
              ])
            ])
          ])) : p("", !0)
        ], 8, ["to"])),
        (n(), ct(Vt, { to: a(g) }, [
          ue.value ? (n(), i("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: t[80] || (t[80] = N((s) => ue.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", vu, [
              t[184] || (t[184] = e("h3", { class: "di-modal-title" }, "設定をインポート", -1)),
              e("label", pu, [
                e("input", {
                  type: "file",
                  accept: ".json",
                  onChange: Ne
                }, null, 32),
                t[183] || (t[183] = e("span", null, "JSONファイルをドラッグまたはクリック", -1))
              ]),
              b(e("textarea", {
                "onUpdate:modelValue": t[78] || (t[78] = (s) => oe.value = s),
                placeholder: "またはJSONを直接貼り付け...",
                class: "di-modal-textarea di-modal-textarea-input"
              }, null, 512), [
                [w, oe.value]
              ]),
              ce.value ? (n(), i("p", mu, v(ce.value), 1)) : p("", !0),
              e("div", fu, [
                e("button", {
                  onClick: t[79] || (t[79] = (s) => {
                    ue.value = !1, oe.value = "", ce.value = "";
                  }),
                  class: "di-btn-small"
                }, " キャンセル "),
                e("button", {
                  onClick: at,
                  disabled: !oe.value,
                  class: "di-btn-small di-btn-primary"
                }, " インポート ", 8, bu)
              ])
            ])
          ])) : p("", !0)
        ], 8, ["to"]))
      ], 64);
    };
  }
}), pl = (ee, g) => {
  const r = ee.__vccOpts || ee;
  for (const [E, R] of g)
    r[E] = R;
  return r;
}, yu = /* @__PURE__ */ pl(hu, [["__scopeId", "data-v-f586c7b8"]]), gu = { class: "di-editor-header" }, ku = { class: "di-header-actions" }, xu = {
  key: 0,
  class: "di-source-badge-row"
}, wu = {
  key: 0,
  class: "di-source-detail"
}, Cu = { class: "di-context-row" }, _u = { class: "di-context-field di-context-field-dropdown" }, $u = { class: "di-dropdown-wrapper" }, Tu = {
  key: 0,
  class: "di-dropdown-list"
}, Iu = ["onMousedown"], Mu = { class: "di-context-field di-context-field-dropdown" }, Su = { class: "di-dropdown-wrapper" }, Uu = {
  key: 0,
  class: "di-dropdown-list"
}, Du = ["onMousedown"], Vu = { class: "di-editor-tabs" }, Eu = { class: "di-editor-content" }, Pu = { class: "di-form-group" }, Bu = { class: "di-display-type-grid" }, Au = ["onClick"], Lu = { class: "di-display-type-desc" }, Fu = {
  key: 0,
  class: "di-field-tags"
}, Ou = { class: "di-field-tags-list" }, ju = { class: "di-field-tag-name" }, Hu = {
  key: 0,
  class: "di-field-tag-type"
}, qu = ["onClick"], Ru = {
  key: 1,
  class: "di-binding-selector"
}, zu = { class: "di-form-group" }, Ku = { class: "di-form-label" }, Yu = { class: "di-binding-search-wrapper" }, Gu = {
  key: 0,
  class: "di-binding-list"
}, Xu = ["onClick"], Wu = { class: "di-binding-item-main" }, Zu = { class: "di-binding-name" }, Ju = { class: "di-binding-type" }, Qu = {
  key: 0,
  class: "di-binding-component"
}, Nu = {
  key: 1,
  class: "di-binding-empty"
}, er = {
  key: 2,
  class: "di-form-divider"
}, tr = { class: "di-form-row" }, lr = { class: "di-form-group di-suggest-wrapper" }, or = {
  key: 0,
  class: "di-suggest-list"
}, nr = ["onMousedown"], sr = { class: "di-form-group di-suggest-wrapper" }, ir = {
  key: 0,
  class: "di-suggest-list"
}, ar = ["onMousedown"], dr = { class: "di-form-group" }, ur = ["value"], rr = ["disabled"], cr = {
  key: 3,
  class: "di-master-inline"
}, vr = {
  key: 0,
  class: "di-condition-badge",
  style: { background: "#a78bfa" }
}, pr = {
  key: 0,
  class: "di-master-inline-section"
}, mr = {
  key: 0,
  class: "di-master-entries-table"
}, fr = ["onUpdate:modelValue"], br = ["onUpdate:modelValue"], hr = ["onUpdate:modelValue"], yr = ["onClick"], gr = {
  key: 4,
  class: "di-form-group"
}, kr = { class: "di-stored-calc-toggle" }, xr = {
  key: 0,
  class: "di-condition-badge"
}, wr = {
  key: 5,
  class: "di-stored-calc-section"
}, Cr = { class: "di-form-group" }, _r = { class: "di-form-group di-suggest-wrapper" }, $r = { class: "di-stored-calc-tags" }, Tr = ["onClick"], Ir = {
  key: 0,
  class: "di-suggest-list"
}, Mr = ["onMousedown"], Sr = { class: "di-form-group" }, Ur = {
  key: 1,
  class: "di-form-group di-suggest-wrapper"
}, Dr = {
  key: 0,
  class: "di-calc-tag"
}, Vr = ["onClick"], Er = {
  key: 1,
  class: "di-calc-text"
}, Pr = ["placeholder"], Br = {
  key: 0,
  class: "di-suggest-list"
}, Ar = ["onMousedown"], Lr = {
  key: 2,
  class: "di-form-group"
}, Fr = { class: "di-condition-toggle" }, Or = {
  key: 0,
  class: "di-condition-badge"
}, jr = {
  key: 0,
  class: "di-condition-section"
}, Hr = { class: "di-form-group" }, qr = { class: "di-form-group di-suggest-wrapper" }, Rr = { class: "di-form-row" }, zr = { class: "di-form-group" }, Kr = {
  key: 0,
  class: "di-form-group"
}, Yr = { class: "di-form-row" }, Gr = { class: "di-form-group" }, Xr = {
  class: "di-form-group",
  style: { flex: "0 0 80px" }
}, Wr = { class: "di-form-row" }, Zr = { class: "di-form-group" }, Jr = { class: "di-form-group" }, Qr = { class: "di-form-group" }, Nr = { class: "di-form-group" }, ec = { class: "di-form-group" }, tc = { class: "di-form-group" }, lc = ["placeholder"], oc = {
  key: 0,
  class: "di-form-group"
}, nc = { class: "di-form-group" }, sc = { class: "di-form-divider" }, ic = { class: "di-csv-file-settings" }, ac = { class: "di-form-row" }, dc = { class: "di-form-group" }, uc = { class: "di-form-group" }, rc = {
  class: "di-form-row",
  style: { "align-items": "center" }
}, cc = { class: "di-csv-checkbox-label" }, vc = { class: "di-form-group" }, pc = { class: "di-csv-columns-section" }, mc = {
  key: 0,
  class: "di-csv-columns-table"
}, fc = { class: "di-csv-col-no" }, bc = ["onUpdate:modelValue"], hc = ["onUpdate:modelValue"], yc = ["onUpdate:modelValue"], gc = ["onUpdate:modelValue"], kc = { class: "di-csv-col-req di-csv-checkbox-center" }, xc = ["onUpdate:modelValue"], wc = ["onUpdate:modelValue"], Cc = { class: "di-csv-col-act" }, _c = ["onClick", "disabled"], $c = ["onClick", "disabled"], Tc = ["onClick"], Ic = { class: "di-form-group" }, Mc = { class: "di-form-group" }, Sc = { class: "di-form-group" }, Uc = { class: "di-form-group" }, Dc = { class: "di-form-group" }, Vc = { class: "di-form-group" }, Ec = { class: "di-csv-error-section" }, Pc = {
  key: 0,
  class: "di-csv-columns-table"
}, Bc = ["onUpdate:modelValue"], Ac = ["value"], Lc = ["onUpdate:modelValue"], Fc = ["onUpdate:modelValue"], Oc = ["onUpdate:modelValue"], jc = ["onClick"], Hc = { class: "di-form-divider" }, qc = { class: "di-form-row" }, Rc = { class: "di-form-group" }, zc = { class: "di-form-group" }, Kc = { class: "di-form-row" }, Yc = { class: "di-form-group" }, Gc = { class: "di-form-group" }, Xc = { class: "di-form-group" }, Wc = { class: "di-form-group" }, Zc = { class: "di-form-group" }, Jc = { class: "di-form-group" }, Qc = { class: "di-email-variables-input" }, Nc = ["onClick"], ev = { class: "di-form-group" }, tv = { class: "di-form-group" }, lv = { class: "di-form-group" }, ov = { class: "di-form-divider" }, nv = { class: "di-form-group" }, sv = {
  class: "di-form-label",
  style: { display: "flex", "align-items": "center", gap: "8px" }
}, iv = { class: "di-form-row" }, av = { class: "di-form-group" }, dv = { class: "di-form-group" }, uv = { class: "di-form-group" }, rv = { class: "di-form-group" }, cv = {
  class: "di-form-label",
  style: { display: "flex", "align-items": "center", gap: "8px" }
}, vv = { class: "di-form-group" }, pv = { class: "di-form-group" }, mv = { class: "di-form-group" }, fv = { class: "di-form-group" }, bv = {
  key: 0,
  class: "di-field-tags"
}, hv = { class: "di-field-tags-list" }, yv = { class: "di-field-tag-name" }, gv = {
  key: 0,
  class: "di-field-tag-type"
}, kv = ["onClick"], xv = {
  key: 1,
  class: "di-binding-selector"
}, wv = { class: "di-form-group" }, Cv = { class: "di-form-label" }, _v = { class: "di-binding-search-wrapper" }, $v = {
  key: 0,
  class: "di-binding-list"
}, Tv = ["onClick"], Iv = { class: "di-binding-item-main" }, Mv = { class: "di-binding-name" }, Sv = { class: "di-binding-type" }, Uv = {
  key: 0,
  class: "di-binding-component"
}, Dv = {
  key: 2,
  class: "di-master-inline"
}, Vv = {
  key: 0,
  class: "di-condition-badge",
  style: { background: "#a78bfa" }
}, Ev = {
  key: 0,
  class: "di-master-inline-section"
}, Pv = {
  key: 0,
  class: "di-master-entries-table"
}, Bv = ["onUpdate:modelValue"], Av = ["onUpdate:modelValue"], Lv = ["onUpdate:modelValue"], Fv = ["onClick"], Ov = { class: "di-condition-toggle" }, jv = {
  key: 0,
  class: "di-condition-badge"
}, Hv = { class: "di-form-group di-suggest-wrapper" }, qv = { class: "di-calc-tags-input" }, Rv = ["onClick"], zv = ["placeholder"], Kv = { class: "di-form-group" }, Yv = { class: "di-form-group" }, Gv = { class: "di-form-group" }, Xv = { class: "di-form-group" }, Wv = { class: "di-form-group" }, Zv = { class: "di-form-group" }, Jv = { class: "di-form-row" }, Qv = { class: "di-form-group di-form-half" }, Nv = { class: "di-form-group di-form-half" }, ep = { class: "di-csv-columns-section" }, tp = {
  key: 0,
  class: "di-csv-columns-table"
}, lp = ["onUpdate:modelValue"], op = ["onUpdate:modelValue"], np = ["onUpdate:modelValue"], sp = { class: "di-csv-col-act" }, ip = ["onClick", "disabled"], ap = ["onClick", "disabled"], dp = ["onClick"], up = { class: "di-form-group" }, rp = { class: "di-form-group" }, cp = { class: "di-form-group" }, vp = { class: "di-form-group" }, pp = { class: "di-editor-footer" }, mp = { class: "di-editor-actions" }, fp = /* @__PURE__ */ ol({
  __name: "DevElementEditor",
  setup(ee) {
    const g = nl(), r = vl("teleportTarget", "body"), E = h("datasource"), R = h(""), ue = h(""), oe = h(""), ce = h(""), be = h(""), Y = h(!1), me = h([]), Pe = h(""), Ce = h(""), _e = h(""), Be = h(""), U = h([]), qe = h("UTF-8"), Ae = h(","), Ue = h(!0), nt = h(""), Z = h(""), Oe = h(""), je = h(void 0), $e = h(""), re = h(""), j = h(""), V = h([]), k = h(""), F = h(""), J = h(""), te = h(""), P = h(""), B = h(""), C = h(""), S = h([]), ie = h(""), X = h(""), le = h(""), De = h(""), fe = h(!0), He = h(""), st = h(""), vt = h(""), yt = h(!1), it = h(""), at = h(""), Ne = h(""), dt = h(""), ut = h(""), et = h(""), xe = h([]), rt = h(""), Le = h(""), Se = h(""), pt = h(""), gt = h(""), tt = h(""), Pt = h(!1), _t = h(!1), Kt = q(() => {
      const y = /* @__PURE__ */ new Set();
      for (const l of Object.values(g.elementConfigs))
        l.tabContext && y.add(l.tabContext);
      return [...y].sort();
    }), mt = q(() => {
      const y = /* @__PURE__ */ new Set();
      for (const l of Object.values(g.elementConfigs))
        l.modalName && y.add(l.modalName);
      return [...y].sort();
    }), ft = q(() => {
      const y = gt.value.toLowerCase();
      return y ? Kt.value.filter((l) => l.toLowerCase().includes(y)) : Kt.value;
    }), pe = q(() => {
      const y = tt.value.toLowerCase();
      return y ? mt.value.filter((l) => l.toLowerCase().includes(y)) : mt.value;
    });
    function kt(y) {
      gt.value = y, Pt.value = !1;
    }
    function Qt(y) {
      tt.value = y, _t.value = !1;
    }
    function Ht() {
      setTimeout(() => {
        Pt.value = !1;
      }, 150);
    }
    function Nt() {
      setTimeout(() => {
        _t.value = !1;
      }, 150);
    }
    const Ye = h(!1), Re = h([]), Ge = q(() => {
      if (he.value.length > 0) {
        const y = he.value[0];
        if (y.table && y.column) return `${y.table}.${y.column}`;
      }
      return "";
    }), Bt = q(() => Ge.value && g.getMasterDefinition(Ge.value) || null), Q = h("db_direct"), he = h([]), ve = h(""), z = h(""), ze = h(""), Xe = h(""), Ke = h(""), Me = h([]), ye = h(""), u = h(!1), Mt = h(""), St = h(""), ne = h(""), Te = h(""), bt = h(""), Ve = h(!1), $t = h(""), We = h([]), Ze = h(""), xt = h(!1), At = h(""), Je = h(""), Lt = h(""), O = h(""), Ie = h(""), Ee = h(!1), ae = h(""), ke = h(""), G = h(""), ge = h(!1), Ut = q(() => ke.value ? {
      data: "data",
      "v-model": "v-model",
      prop: "prop",
      static: "static",
      computed: "computed",
      store: "store",
      api: "data"
      // legacy compatibility
    }[ke.value] || ke.value : ""), Ft = q(() => g.editingElementId !== null), Qe = q(() => g.editingElementId), Ot = q(() => R.value === "csv_export" || R.value === "csv_import"), jt = q(() => R.value === "email"), Dt = q(() => Ot.value || jt.value), lt = [
      { value: "db_direct", label: "DBカラム (そのまま)", icon: zt, color: "#3b82f6", description: "DBの値をそのまま表示" },
      { value: "db_formatted", label: "DBカラム (整形)", icon: cl, color: "#8b5cf6", description: "DBの値を整形して表示" },
      { value: "calculated", label: "計算値", icon: Sl, color: "#f59e0b", description: "複数カラムから計算" },
      { value: "static", label: "固定文言", icon: Eo, color: "#10b981", description: "コード内の固定テキスト" },
      { value: "other", label: "その他メモ", icon: Mo, color: "#94a3b8", description: "自由メモ" }
    ];
    ll(Qe, (y) => {
      var l;
      if (y) {
        const o = g.getElementConfig(y);
        try {
          const f = document.querySelector(y);
          if (f) {
            o != null && o.elementType ? E.value = o.elementType : E.value = g.detectElementType(f);
            const K = f.querySelector("[data-di-binding]") || (f.hasAttribute("data-di-binding") ? f : null) || f.closest("[data-di-binding]");
            if (K) {
              const Fe = K.getAttribute("data-di-binding"), Wt = K.getAttribute("data-di-db"), bl = K.getAttribute("data-di-db-type"), Zt = K.getAttribute("data-di-db-comment");
              if (Fe && (G.value = Fe, ke.value = "data", ge.value = !1), Wt) {
                const [Tl, Il] = Wt.split(".");
                Tl && Il && (he.value.push({
                  table: Tl,
                  column: Il,
                  type: bl || void 0,
                  description: Zt || void 0
                }), Q.value || (Q.value = "db_direct"));
              }
            }
          }
        } catch (f) {
          console.warn("[DevInspector] Failed to read element:", f);
        }
        o != null && o.fieldInfoList && o.fieldInfoList.length > 0 ? he.value = o.fieldInfoList.map((f) => ({ ...f })) : o != null && o.fieldInfo && (he.value = [{ ...o.fieldInfo }]), ve.value = "", z.value = "", ze.value = "", Xe.value = "", o != null && o.note && (ae.value = o.note.text || ae.value, Q.value = o.note.displayType || Q.value, Ke.value = o.note.formatDescription || "", Mt.value = o.note.sampleValue || "", St.value = o.note.decimalHandling || "", ne.value = o.note.unit || "", Te.value = o.note.nullDisplay || "", bt.value = o.note.displayFormat || "", Xl(o.note.calcDescription || "", o.note.calcSources || []), Ve.value = o.note.storedCalc || !1, $t.value = o.note.storedCalcLogic || "", We.value = o.note.storedCalcSources ? [...o.note.storedCalcSources] : [], At.value = o.note.storedCalcTiming || "", Je.value = o.note.condition || "", Lt.value = o.note.conditionColumn || "", O.value = o.note.hiddenBehavior || "", Ie.value = o.note.hiddenNote || "", Ee.value = !!(o.note.condition || o.note.conditionColumn)), o != null && o.sourceBinding && (ke.value = o.sourceBinding.type || ke.value, G.value = o.sourceBinding.source || G.value, ge.value = o.sourceBinding.isStatic || !1), gt.value = (o == null ? void 0 : o.tabContext) || g.detectTabContext(y) || "";
        const _ = g.detectModalName(y);
        if (tt.value = (o == null ? void 0 : o.modalName) || _ || "", o != null && o.actionInfo) {
          if (R.value = o.actionInfo.type || "", ue.value = o.actionInfo.target || "", oe.value = o.actionInfo.method || "", ce.value = o.actionInfo.description || "", o.actionInfo.csvSpec) {
            const f = o.actionInfo.csvSpec;
            U.value = f.columns.map((K) => ({ ...K })), qe.value = f.encoding || "UTF-8", Ae.value = f.delimiter || ",", Ue.value = f.hasHeaderRow !== !1, nt.value = f.filenamePattern || "", Z.value = f.sortOrder || "", Oe.value = f.filterCondition || "", je.value = f.maxRows, $e.value = f.errorHandling || "", re.value = f.duplicateHandling || "", j.value = f.preValidation || "", V.value = f.errorDefs ? f.errorDefs.map((K) => ({ ...K })) : [];
          }
          if (o.actionInfo.emailSpec) {
            const f = o.actionInfo.emailSpec;
            k.value = f.trigger || "", F.value = f.to || "", J.value = f.cc || "", te.value = f.bcc || "", P.value = f.subject || "", B.value = f.bodyTemplate || "", C.value = f.templatePath || "", S.value = f.variables ? [...f.variables] : [], X.value = f.attachments || "", le.value = f.conditions || "", De.value = f.errorHandling || "";
          }
        }
        if (o != null && o.formInfo && (be.value = o.formInfo.inputType || "", Y.value = o.formInfo.required || !1, me.value = o.formInfo.validation ? [...o.formInfo.validation] : [], Ce.value = o.formInfo.placeholder || "", _e.value = o.formInfo.defaultValue || "", Be.value = o.formInfo.description || ""), (l = o == null ? void 0 : o.actionInfo) != null && l.sortSpec) {
          const f = o.actionInfo.sortSpec;
          fe.value = f.sortable !== !1, He.value = f.sortType || "", st.value = f.sortKey || "", vt.value = f.defaultDirection || "", yt.value = f.isDefaultSort || !1, it.value = f.unsortedOrder || "", at.value = f.description || "";
        }
        if (o != null && o.chartSpec) {
          const f = o.chartSpec;
          Ne.value = f.chartType || "", dt.value = f.title || "", ut.value = f.xAxis || "", et.value = f.yAxis || "", xe.value = f.series ? f.series.map((K) => ({ ...K })) : [], rt.value = f.dataSource || "", Le.value = f.aggregation || "", Se.value = f.filters || "", pt.value = f.description || "";
        }
      } else
        qt();
    });
    function qt() {
      E.value = "datasource", Q.value = "db_direct", he.value = [], ve.value = "", z.value = "", ze.value = "", Xe.value = "", Ke.value = "", Mt.value = "", St.value = "", ne.value = "", Te.value = "", bt.value = "", Me.value = [], ye.value = "", Ve.value = !1, $t.value = "", We.value = [], Ze.value = "", At.value = "", Je.value = "", Lt.value = "", O.value = "", Ie.value = "", Ee.value = !1, ae.value = "", ke.value = "", G.value = "", ge.value = !1, R.value = "", ue.value = "", oe.value = "", ce.value = "", U.value = [], qe.value = "UTF-8", Ae.value = ",", Ue.value = !0, nt.value = "", Z.value = "", Oe.value = "", je.value = void 0, $e.value = "", re.value = "", j.value = "", V.value = [], be.value = "", Y.value = !1, me.value = [], Pe.value = "", Ce.value = "", _e.value = "", Be.value = "", k.value = "", F.value = "", J.value = "", te.value = "", P.value = "", B.value = "", C.value = "", S.value = [], ie.value = "", X.value = "", le.value = "", De.value = "", fe.value = !0, He.value = "", st.value = "", vt.value = "", yt.value = !1, it.value = "", at.value = "", Ne.value = "", dt.value = "", ut.value = "", et.value = "", xe.value = [], rt.value = "", Le.value = "", Se.value = "", pt.value = "", gt.value = "", tt.value = "", Ye.value = !1, Re.value = [];
    }
    function wt() {
      g.stopEditing(), qt();
    }
    function ml() {
      if (Qe.value)
        try {
          const y = document.querySelector(Qe.value);
          if (!y) return;
          const l = g.autoDetectElementInfo(y, Qe.value);
          l.sourceBinding && (ke.value = l.sourceBinding.type || "", G.value = l.sourceBinding.source || "", ge.value = l.sourceBinding.isStatic || !1, l.sourceBinding.isStatic && !Q.value && (Q.value = "static", ae.value = ae.value || "固定文言")), l.fieldInfo && (he.value.push({
            table: l.fieldInfo.table || "",
            column: l.fieldInfo.column || "",
            type: l.fieldInfo.type || void 0,
            description: l.fieldInfo.description || void 0
          }), Q.value || (Q.value = "db_direct")), l.note && !ae.value && (ae.value = l.note.text || "");
        } catch (y) {
          console.error("[DevInspector] Auto-detect failed:", y);
        }
    }
    function Yt() {
      if (!Qe.value) return;
      const y = [...he.value];
      (Q.value === "db_direct" || Q.value === "db_formatted") && ve.value && z.value && y.push({
        table: ve.value,
        column: z.value,
        type: ze.value || void 0,
        description: Xe.value || void 0
      });
      const l = y.length > 0 ? y : void 0, o = y.length > 0 ? y[0] : void 0, _ = Q.value === "db_direct" || Q.value === "db_formatted", f = Q.value || ae.value ? {
        text: ae.value || "",
        displayType: Q.value,
        formatDescription: Q.value === "db_formatted" && Ke.value || void 0,
        calcDescription: Q.value === "calculated" && Gl() || void 0,
        calcSources: Q.value === "calculated" && kl().length > 0 ? kl() : void 0,
        // 保存済み計算値 (db_direct / db_formatted のみ)
        storedCalc: _ && Ve.value ? !0 : void 0,
        storedCalcLogic: _ && Ve.value && $t.value || void 0,
        storedCalcSources: _ && Ve.value && We.value.length > 0 ? We.value : void 0,
        storedCalcTiming: _ && Ve.value && At.value || void 0,
        sampleValue: Mt.value || void 0,
        decimalHandling: St.value || void 0,
        unit: ne.value || void 0,
        nullDisplay: Te.value || void 0,
        displayFormat: bt.value || void 0,
        condition: Je.value || void 0,
        conditionColumn: Lt.value || void 0,
        hiddenBehavior: O.value || void 0,
        hiddenNote: Ie.value || void 0
      } : void 0, K = ke.value ? {
        type: ke.value,
        source: G.value || void 0,
        isStatic: ge.value
      } : void 0, Fe = E.value === "action" && R.value ? {
        type: R.value,
        target: ue.value || void 0,
        method: oe.value ? oe.value : void 0,
        description: ce.value || void 0,
        csvSpec: so(),
        emailSpec: io(),
        sortSpec: co()
      } : void 0, Wt = E.value === "form" ? {
        inputType: be.value || void 0,
        required: Y.value || void 0,
        validation: me.value.length > 0 ? me.value : void 0,
        placeholder: Ce.value || void 0,
        defaultValue: _e.value || void 0,
        description: Be.value || void 0
      } : void 0, bl = E.value === "chart" && Ne.value ? {
        chartType: Ne.value,
        title: dt.value || void 0,
        xAxis: ut.value || void 0,
        yAxis: et.value || void 0,
        series: xe.value.filter((Zt) => Zt.label || Zt.field).length > 0 ? xe.value.filter((Zt) => Zt.label || Zt.field) : void 0,
        dataSource: rt.value || void 0,
        aggregation: Le.value || void 0,
        filters: Se.value || void 0,
        description: pt.value || void 0
      } : void 0;
      g.setElementConfig(Qe.value, {
        elementType: E.value,
        fieldInfo: o,
        fieldInfoList: l,
        actionInfo: Fe,
        formInfo: Wt,
        chartSpec: bl,
        note: f,
        sourceBinding: K,
        tabContext: gt.value || void 0,
        modalName: tt.value || void 0,
        isConditional: tt.value ? !0 : void 0
      }), Ye.value && Ge.value && vo(), wt();
    }
    function el() {
      Qe.value && (g.deleteElementConfig(Qe.value), wt());
    }
    const Gt = [
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
    ], ht = h(""), Tt = h(!1), Xt = q(() => g.searchSchemaColumns(ht.value).slice(0, 30));
    function sl(y) {
      he.value.push({
        table: y.table,
        column: y.column,
        type: y.type || void 0,
        description: y.comment || void 0
      }), Tt.value = !1, ht.value = "";
    }
    function fl() {
      !ve.value || !z.value || (he.value.push({
        table: ve.value,
        column: z.value,
        type: ze.value || void 0,
        description: Xe.value || void 0
      }), ve.value = "", z.value = "", ze.value = "", Xe.value = "");
    }
    function il(y) {
      he.value.splice(y, 1);
    }
    const d = q(() => g.getSchemaColumns().length > 0), t = h(!1), x = h(!1), A = q(() => {
      var _;
      const y = /* @__PURE__ */ new Set();
      for (const f of Object.values(g.elementConfigs))
        if (f.fieldInfoList)
          for (const K of f.fieldInfoList)
            K.table && y.add(K.table);
        else (_ = f.fieldInfo) != null && _.table && y.add(f.fieldInfo.table);
      for (const f of g.getSchemaColumns())
        y.add(f.table);
      const l = [...y].sort();
      if (!ve.value) return l;
      const o = ve.value.toLowerCase();
      return l.filter((f) => f.toLowerCase().includes(o));
    }), s = q(() => {
      var _;
      const y = /* @__PURE__ */ new Set();
      for (const f of Object.values(g.elementConfigs))
        if (f.fieldInfoList)
          for (const K of f.fieldInfoList)
            K.column && (!ve.value || K.table === ve.value) && y.add(K.column);
        else (_ = f.fieldInfo) != null && _.column && (!ve.value || f.fieldInfo.table === ve.value) && y.add(f.fieldInfo.column);
      for (const f of g.getSchemaColumns())
        (!ve.value || f.table === ve.value) && y.add(f.column);
      const l = [...y].sort();
      if (!z.value) return l;
      const o = z.value.toLowerCase();
      return l.filter((f) => f.toLowerCase().includes(o));
    });
    function m() {
      setTimeout(() => {
        t.value = !1;
      }, 150);
    }
    function c() {
      setTimeout(() => {
        x.value = !1;
      }, 150);
    }
    function $(y) {
      if (ve.value = y, t.value = !1, z.value) {
        const l = g.getSchemaColumns().find((o) => o.table === y && o.column === z.value);
        l && (ze.value = l.type || "", Xe.value = l.comment || "");
      }
    }
    function M(y) {
      if (z.value = y, x.value = !1, ve.value) {
        const l = g.getSchemaColumns().find((o) => o.table === ve.value && o.column === y);
        l && (ze.value = l.type || "", Xe.value = l.comment || "");
      }
    }
    const de = q(() => {
      var _, f;
      const y = /* @__PURE__ */ new Set();
      for (const K of Object.values(g.elementConfigs))
        if (K.fieldInfoList)
          for (const Fe of K.fieldInfoList)
            Fe.table && Fe.column && y.add(`${Fe.table}.${Fe.column}`);
        else (_ = K.fieldInfo) != null && _.table && ((f = K.fieldInfo) != null && f.column) && y.add(`${K.fieldInfo.table}.${K.fieldInfo.column}`);
      for (const K of g.getSchemaColumns())
        y.add(K.fullName);
      const l = [...y].sort();
      if (!ye.value) return l;
      const o = ye.value.trim().toLowerCase();
      if (/^[a-z0-9_.]+$/i.test(o)) {
        const K = l.filter((Fe) => Fe.toLowerCase().includes(o));
        if (K.length > 0) return K;
      }
      return l;
    });
    function se(y) {
      ye.value.trim() && Me.value.push({ type: "text", value: ye.value }), Me.value.push({ type: "tag", value: y }), ye.value = "";
    }
    function Ct(y) {
      Me.value.splice(y, 1);
    }
    function al(y) {
      if (y.key === "Backspace" && !ye.value && Me.value.length > 0) {
        const l = Me.value.pop();
        l.type === "text" && (ye.value = l.value);
      }
    }
    function Rl() {
      setTimeout(() => {
        u.value = !1;
      }, 150);
    }
    const gl = q(() => {
      var _, f;
      const y = /* @__PURE__ */ new Set();
      for (const K of g.getSchemaColumns())
        y.add(K.fullName);
      for (const K of Object.values(g.elementConfigs))
        if (K.fieldInfoList)
          for (const Fe of K.fieldInfoList)
            Fe.table && Fe.column && y.add(`${Fe.table}.${Fe.column}`);
        else (_ = K.fieldInfo) != null && _.table && ((f = K.fieldInfo) != null && f.column) && y.add(`${K.fieldInfo.table}.${K.fieldInfo.column}`);
      const l = [...y].sort();
      if (!Ze.value) return l;
      const o = Ze.value.trim().toLowerCase();
      return l.filter((K) => K.toLowerCase().includes(o));
    });
    function zl() {
      setTimeout(() => {
        xt.value = !1;
      }, 150);
    }
    function Kl() {
      const y = Ze.value.trim();
      y && !We.value.includes(y) && We.value.push(y), Ze.value = "";
    }
    function Yl(y) {
      We.value.includes(y) || We.value.push(y), Ze.value = "";
    }
    function Gl() {
      const y = Me.value.map((l) => l.value);
      return ye.value.trim() && y.push(ye.value.trim()), y.join(" ").replace(/\s+/g, " ").trim();
    }
    function kl() {
      return Me.value.filter((y) => y.type === "tag").map((y) => y.value);
    }
    function Xl(y, l) {
      if (!y && l.length === 0) {
        Me.value = [], ye.value = "";
        return;
      }
      if (l.length === 0) {
        Me.value = [], ye.value = y;
        return;
      }
      const o = [];
      let _ = y;
      for (const K of l) {
        const Fe = _.indexOf(K);
        if (Fe >= 0) {
          const Wt = _.substring(0, Fe).trim();
          Wt && o.push({ type: "text", value: Wt }), o.push({ type: "tag", value: K }), _ = _.substring(Fe + K.length);
        }
      }
      const f = _.trim();
      f && o.push({ type: "text", value: f }), o.length === 0 ? ye.value = y : (Me.value = o, ye.value = "");
    }
    function Wl() {
      const y = Pe.value.trim();
      y && !me.value.includes(y) && me.value.push(y), Pe.value = "";
    }
    function Zl(y) {
      me.value.splice(y, 1);
    }
    function Jl(y) {
      y.key === "Backspace" && !Pe.value && me.value.length > 0 && me.value.pop();
    }
    function Ql() {
      U.value.push({ name: "", dbMapping: "", type: "string", required: !1, description: "" });
    }
    function Nl(y) {
      U.value.splice(y, 1);
    }
    function xl(y, l) {
      const o = y + l;
      if (o < 0 || o >= U.value.length) return;
      const _ = U.value[y];
      U.value[y] = U.value[o], U.value[o] = _, U.value = [...U.value];
    }
    function eo() {
      xe.value.push({ label: "", field: "", color: "#3b82f6" });
    }
    function to(y) {
      xe.value.splice(y, 1);
    }
    function wl(y, l) {
      const o = y + l;
      if (o < 0 || o >= xe.value.length) return;
      const _ = xe.value[y];
      xe.value[y] = xe.value[o], xe.value[o] = _, xe.value = [...xe.value];
    }
    function lo() {
      V.value.push({ condition: "", message: "", column: "", severity: "error" });
    }
    function oo(y) {
      V.value.splice(y, 1);
    }
    const no = q(() => U.value.filter((y) => y.name).map((y) => y.name));
    function so() {
      if (R.value !== "csv_export" && R.value !== "csv_import") return;
      const y = V.value.filter((l) => l.condition || l.message);
      return {
        columns: U.value.filter((l) => l.name),
        encoding: qe.value || void 0,
        delimiter: Ae.value || void 0,
        hasHeaderRow: Ue.value,
        filenamePattern: nt.value || void 0,
        sortOrder: Z.value || void 0,
        filterCondition: Oe.value || void 0,
        maxRows: je.value || void 0,
        errorHandling: $e.value || void 0,
        duplicateHandling: re.value || void 0,
        preValidation: j.value || void 0,
        errorDefs: y.length > 0 ? y : void 0
      };
    }
    function io() {
      if (R.value === "email")
        return {
          trigger: k.value || "",
          to: F.value || "",
          cc: J.value || void 0,
          bcc: te.value || void 0,
          subject: P.value || "",
          bodyTemplate: B.value || void 0,
          templatePath: C.value || void 0,
          variables: S.value.length > 0 ? S.value : void 0,
          attachments: X.value || void 0,
          conditions: le.value || void 0,
          errorHandling: De.value || void 0
        };
    }
    function ao() {
      const y = ie.value.trim();
      y && !S.value.includes(y) && S.value.push(y), ie.value = "";
    }
    function uo(y) {
      S.value.splice(y, 1);
    }
    function ro(y) {
      y.key === "Backspace" && !ie.value && S.value.length > 0 && S.value.pop();
    }
    function co() {
      if (R.value === "sort")
        return {
          sortable: fe.value,
          sortType: He.value ? He.value : void 0,
          sortKey: st.value || void 0,
          defaultDirection: vt.value ? vt.value : void 0,
          isDefaultSort: yt.value || void 0,
          unsortedOrder: it.value || void 0,
          description: at.value || void 0
        };
    }
    ll(Ge, (y) => {
      if (y) {
        const l = g.getMasterDefinition(y);
        l ? (Re.value = l.entries.map((o) => ({ ...o })), Ye.value = !0) : (Re.value = [], Ye.value = !1);
      } else
        Re.value = [], Ye.value = !1;
    });
    function Cl() {
      Ye.value = !Ye.value, Ye.value && Re.value.length === 0 && Re.value.push({ value: "", label: "" });
    }
    function _l() {
      Re.value.push({ value: "", label: "" });
    }
    function $l(y) {
      Re.value.splice(y, 1);
    }
    function vo() {
      var f;
      if (!Ge.value) return;
      const [y, l] = Ge.value.split(".");
      if (!y || !l) return;
      const o = Re.value.filter((K) => K.value || K.label);
      if (o.length === 0) {
        g.deleteMasterDefinition(Ge.value);
        return;
      }
      const _ = g.getMasterDefinition(Ge.value);
      g.setMasterDefinition({
        id: Ge.value,
        table: y,
        column: l,
        name: (_ == null ? void 0 : _.name) || l,
        columnType: (_ == null ? void 0 : _.columnType) || ((f = he.value[0]) == null ? void 0 : f.type),
        description: _ == null ? void 0 : _.description,
        entries: o,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      });
    }
    return (y, l) => (n(), ct(Vt, { to: a(r) }, [
      Ft.value ? (n(), i("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: N(wt, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", {
          class: L(["di-editor-modal", { "di-editor-modal-wide": Dt.value }])
        }, [
          e("div", gu, [
            l[94] || (l[94] = e("h3", null, "要素情報を編集", -1)),
            e("div", ku, [
              e("button", {
                onClick: ml,
                class: "di-btn-auto",
                title: "自動検出"
              }, [
                I(a(cl), { style: { width: "16px", height: "16px" } })
              ]),
              e("button", {
                onClick: wt,
                class: "di-editor-close"
              }, [
                I(a(It), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          Ut.value ? (n(), i("div", xu, [
            e("span", {
              class: L(["di-source-badge", "di-source-" + ke.value])
            }, v(Ut.value), 3),
            G.value ? (n(), i("span", wu, v(G.value), 1)) : p("", !0)
          ])) : p("", !0),
          e("div", Cu, [
            e("div", _u, [
              l[95] || (l[95] = e("label", { class: "di-context-label di-context-label-tab" }, "タブ:", -1)),
              e("div", $u, [
                b(e("input", {
                  "onUpdate:modelValue": l[0] || (l[0] = (o) => gt.value = o),
                  type: "text",
                  class: "di-context-input",
                  placeholder: "例: 予習, 受講者一覧",
                  onFocus: l[1] || (l[1] = (o) => Pt.value = !0),
                  onBlur: Ht,
                  autocomplete: "off"
                }, null, 544), [
                  [w, gt.value]
                ]),
                Pt.value && ft.value.length > 0 ? (n(), i("div", Tu, [
                  (n(!0), i(T, null, D(ft.value, (o) => (n(), i("div", {
                    key: o,
                    class: "di-dropdown-item",
                    onMousedown: N((_) => kt(o), ["prevent"])
                  }, v(o), 41, Iu))), 128))
                ])) : p("", !0)
              ])
            ]),
            e("div", Mu, [
              l[96] || (l[96] = e("label", { class: "di-context-label di-context-label-modal" }, "モーダル:", -1)),
              e("div", Su, [
                b(e("input", {
                  "onUpdate:modelValue": l[2] || (l[2] = (o) => tt.value = o),
                  type: "text",
                  class: "di-context-input",
                  placeholder: "例: 確認ダイアログ",
                  onFocus: l[3] || (l[3] = (o) => _t.value = !0),
                  onBlur: Nt,
                  autocomplete: "off"
                }, null, 544), [
                  [w, tt.value]
                ]),
                _t.value && pe.value.length > 0 ? (n(), i("div", Uu, [
                  (n(!0), i(T, null, D(pe.value, (o) => (n(), i("div", {
                    key: o,
                    class: "di-dropdown-item",
                    onMousedown: N((_) => Qt(o), ["prevent"])
                  }, v(o), 41, Du))), 128))
                ])) : p("", !0)
              ])
            ])
          ]),
          e("div", Vu, [
            e("button", {
              onClick: l[4] || (l[4] = (o) => E.value = "datasource"),
              class: L(["di-editor-tab", { "di-editor-tab-active": E.value === "datasource" }])
            }, [
              I(a(zt), { style: { width: "14px", height: "14px" } }),
              l[97] || (l[97] = H(" データソース ", -1))
            ], 2),
            e("button", {
              onClick: l[5] || (l[5] = (o) => E.value = "action"),
              class: L(["di-editor-tab", { "di-editor-tab-active": E.value === "action" }])
            }, [
              I(a(Bo), { style: { width: "14px", height: "14px" } }),
              l[98] || (l[98] = H(" アクション ", -1))
            ], 2),
            e("button", {
              onClick: l[6] || (l[6] = (o) => E.value = "form"),
              class: L(["di-editor-tab", { "di-editor-tab-active": E.value === "form" }])
            }, [
              I(a(_o), { style: { width: "14px", height: "14px" } }),
              l[99] || (l[99] = H(" フォーム ", -1))
            ], 2),
            e("button", {
              onClick: l[7] || (l[7] = (o) => E.value = "chart"),
              class: L(["di-editor-tab", { "di-editor-tab-active": E.value === "chart" }])
            }, [
              I(a(yo), { style: { width: "14px", height: "14px" } }),
              l[100] || (l[100] = H(" チャート ", -1))
            ], 2)
          ]),
          e("div", Eu, [
            E.value === "datasource" ? (n(), i(T, { key: 0 }, [
              e("div", Pu, [
                l[101] || (l[101] = e("label", { class: "di-form-label" }, "表示タイプ", -1)),
                e("div", Bu, [
                  (n(), i(T, null, D(lt, (o) => e("button", {
                    key: o.value,
                    onClick: (_) => Q.value = o.value,
                    class: L(["di-display-type-card", { "di-display-type-active": Q.value === o.value }]),
                    style: ot(Q.value === o.value ? { borderColor: o.color, background: o.color + "18" } : {})
                  }, [
                    (n(), ct(po(o.icon), {
                      style: ot([{ width: "20px", height: "20px" }, { color: Q.value === o.value ? o.color : "#64748b" }])
                    }, null, 8, ["style"])),
                    e("span", {
                      class: "di-display-type-label",
                      style: ot({ color: Q.value === o.value ? o.color : "#94a3b8" })
                    }, v(o.label), 5),
                    e("span", Lu, v(o.description), 1)
                  ], 14, Au)), 64))
                ])
              ]),
              Q.value === "db_direct" || Q.value === "db_formatted" ? (n(), i(T, { key: 0 }, [
                he.value.length > 0 ? (n(), i("div", Fu, [
                  l[102] || (l[102] = e("label", { class: "di-form-label" }, "登録済みカラム", -1)),
                  e("div", Ou, [
                    (n(!0), i(T, null, D(he.value, (o, _) => (n(), i("div", {
                      key: _,
                      class: "di-field-tag"
                    }, [
                      e("span", ju, v(o.table) + "." + v(o.column), 1),
                      o.type ? (n(), i("span", Hu, v(o.type), 1)) : p("", !0),
                      e("button", {
                        onClick: (f) => il(_),
                        class: "di-field-tag-remove"
                      }, "×", 8, qu)
                    ]))), 128))
                  ])
                ])) : p("", !0),
                d.value ? (n(), i("div", Ru, [
                  e("div", zu, [
                    e("label", Ku, [
                      I(a(zt), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                      l[103] || (l[103] = H(" schema.rb から選択 ", -1))
                    ]),
                    e("div", Yu, [
                      b(e("input", {
                        "onUpdate:modelValue": l[8] || (l[8] = (o) => ht.value = o),
                        onFocus: l[9] || (l[9] = (o) => Tt.value = !0),
                        type: "text",
                        placeholder: "テーブル.カラムを検索... (例: users, email)",
                        class: "di-input di-binding-search"
                      }, null, 544), [
                        [w, ht.value]
                      ]),
                      ht.value ? (n(), i("button", {
                        key: 0,
                        onClick: l[10] || (l[10] = (o) => {
                          ht.value = "", Tt.value = !1;
                        }),
                        class: "di-binding-clear"
                      }, [
                        I(a(It), { style: { width: "14px", height: "14px" } })
                      ])) : p("", !0)
                    ]),
                    Tt.value && Xt.value.length > 0 ? (n(), i("div", Gu, [
                      (n(!0), i(T, null, D(Xt.value, (o) => (n(), i("button", {
                        key: o.fullName,
                        onClick: (_) => sl(o),
                        class: "di-binding-item has-db"
                      }, [
                        e("div", Wu, [
                          e("span", Zu, v(o.fullName), 1),
                          e("span", Ju, v(o.type), 1)
                        ]),
                        o.comment ? (n(), i("span", Qu, v(o.comment), 1)) : p("", !0)
                      ], 8, Xu))), 128))
                    ])) : Tt.value && ht.value && Xt.value.length === 0 ? (n(), i("div", Nu, " 該当するカラムが見つかりません ")) : p("", !0)
                  ])
                ])) : p("", !0),
                d.value ? (n(), i("div", er, [...l[104] || (l[104] = [
                  e("span", null, "または手動入力", -1)
                ])])) : p("", !0),
                e("div", tr, [
                  e("div", lr, [
                    l[105] || (l[105] = e("label", { class: "di-form-label" }, "テーブル名 *", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[11] || (l[11] = (o) => ve.value = o),
                      onFocus: l[12] || (l[12] = (o) => t.value = !0),
                      onBlur: l[13] || (l[13] = (o) => m()),
                      type: "text",
                      placeholder: "users, users.sheets",
                      class: "di-input",
                      autocomplete: "off"
                    }, null, 544), [
                      [w, ve.value]
                    ]),
                    t.value && A.value.length > 0 ? (n(), i("div", or, [
                      (n(!0), i(T, null, D(A.value.slice(0, 10), (o) => (n(), i("button", {
                        key: o,
                        onMousedown: N((_) => $(o), ["prevent"]),
                        class: "di-suggest-item"
                      }, v(o), 41, nr))), 128))
                    ])) : p("", !0)
                  ]),
                  e("div", sr, [
                    l[106] || (l[106] = e("label", { class: "di-form-label" }, "カラム名 *", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[14] || (l[14] = (o) => z.value = o),
                      onFocus: l[15] || (l[15] = (o) => x.value = !0),
                      onBlur: l[16] || (l[16] = (o) => c()),
                      type: "text",
                      placeholder: "name",
                      class: "di-input",
                      autocomplete: "off"
                    }, null, 544), [
                      [w, z.value]
                    ]),
                    x.value && s.value.length > 0 ? (n(), i("div", ir, [
                      (n(!0), i(T, null, D(s.value.slice(0, 10), (o) => (n(), i("button", {
                        key: o,
                        onMousedown: N((_) => M(o), ["prevent"]),
                        class: "di-suggest-item"
                      }, v(o), 41, ar))), 128))
                    ])) : p("", !0)
                  ])
                ]),
                e("div", dr, [
                  l[108] || (l[108] = e("label", { class: "di-form-label" }, "データ型", -1)),
                  b(e("select", {
                    "onUpdate:modelValue": l[17] || (l[17] = (o) => ze.value = o),
                    class: "di-select"
                  }, [
                    l[107] || (l[107] = e("option", { value: "" }, "選択してください", -1)),
                    (n(), i(T, null, D(Gt, (o) => e("option", {
                      key: o,
                      value: o
                    }, v(o), 9, ur)), 64))
                  ], 512), [
                    [we, ze.value]
                  ])
                ]),
                e("button", {
                  onClick: fl,
                  class: "di-btn-add-field",
                  disabled: !ve.value || !z.value
                }, " + カラムを追加 ", 8, rr),
                Ge.value ? (n(), i("div", cr, [
                  e("button", {
                    onClick: Cl,
                    class: L(["di-btn-condition-toggle", { "di-condition-active": Ye.value }])
                  }, [
                    I(a(Pl), { style: { width: "14px", height: "14px" } }),
                    l[109] || (l[109] = H(" マスタ値を定義 ", -1)),
                    Bt.value ? (n(), i("span", vr, v(Bt.value.entries.length) + "件", 1)) : p("", !0)
                  ], 2),
                  Ye.value ? (n(), i("div", pr, [
                    Re.value.length > 0 ? (n(), i("div", mr, [
                      l[110] || (l[110] = e("div", { class: "di-master-entries-header" }, [
                        e("span", { class: "di-master-col-val" }, "値"),
                        e("span", { class: "di-master-col-lbl" }, "ラベル"),
                        e("span", { class: "di-master-col-color" }, "色"),
                        e("span", { class: "di-master-col-act" })
                      ], -1)),
                      (n(!0), i(T, null, D(Re.value, (o, _) => (n(), i("div", {
                        key: _,
                        class: "di-master-entry-row"
                      }, [
                        b(e("input", {
                          "onUpdate:modelValue": (f) => o.value = f,
                          placeholder: "1",
                          class: "di-master-input di-master-col-val"
                        }, null, 8, fr), [
                          [w, o.value]
                        ]),
                        b(e("input", {
                          "onUpdate:modelValue": (f) => o.label = f,
                          placeholder: "受付",
                          class: "di-master-input di-master-col-lbl"
                        }, null, 8, br), [
                          [w, o.label]
                        ]),
                        b(e("input", {
                          "onUpdate:modelValue": (f) => o.color = f,
                          type: "color",
                          class: "di-master-color-input"
                        }, null, 8, hr), [
                          [w, o.color]
                        ]),
                        e("button", {
                          onClick: (f) => $l(_),
                          class: "di-master-entry-remove"
                        }, "×", 8, yr)
                      ]))), 128))
                    ])) : p("", !0),
                    e("button", {
                      onClick: _l,
                      class: "di-btn-add-field",
                      style: { "margin-top": "4px" }
                    }, " + 値を追加 ")
                  ])) : p("", !0)
                ])) : p("", !0),
                Q.value === "db_formatted" ? (n(), i("div", gr, [
                  l[111] || (l[111] = e("label", { class: "di-form-label" }, "整形方法", -1)),
                  b(e("textarea", {
                    "onUpdate:modelValue": l[18] || (l[18] = (o) => Ke.value = o),
                    rows: "2",
                    placeholder: "YYYY年MM月DD日 に整形、姓 + 名 で結合 など",
                    class: "di-textarea"
                  }, null, 512), [
                    [w, Ke.value]
                  ])
                ])) : p("", !0),
                e("div", kr, [
                  e("button", {
                    onClick: l[19] || (l[19] = (o) => Ve.value = !Ve.value),
                    class: L(["di-btn-condition-toggle", { "di-condition-active": Ve.value }])
                  }, [
                    I(a(Sl), { style: { width: "14px", height: "14px" } }),
                    l[112] || (l[112] = H(" このカラムは計算値を保存している ", -1)),
                    Ve.value ? (n(), i("span", xr, "設定あり")) : p("", !0)
                  ], 2)
                ]),
                Ve.value ? (n(), i("div", wr, [
                  e("div", Cr, [
                    l[113] || (l[113] = e("label", { class: "di-form-label" }, "計算ロジック", -1)),
                    b(e("textarea", {
                      "onUpdate:modelValue": l[20] || (l[20] = (o) => $t.value = o),
                      rows: "2",
                      placeholder: "SUM(order_items.price * quantity)、unit_price × quantity など",
                      class: "di-textarea di-textarea-mono"
                    }, null, 512), [
                      [w, $t.value]
                    ])
                  ]),
                  e("div", _r, [
                    l[114] || (l[114] = e("label", { class: "di-form-label" }, "元データ（テーブル.カラム）", -1)),
                    e("div", $r, [
                      (n(!0), i(T, null, D(We.value, (o, _) => (n(), i("span", {
                        key: _,
                        class: "di-calc-tag"
                      }, [
                        H(v(o) + " ", 1),
                        e("button", {
                          onClick: N((f) => We.value.splice(_, 1), ["stop"]),
                          class: "di-calc-tag-remove"
                        }, "×", 8, Tr)
                      ]))), 128)),
                      b(e("input", {
                        "onUpdate:modelValue": l[21] || (l[21] = (o) => Ze.value = o),
                        onFocus: l[22] || (l[22] = (o) => xt.value = !0),
                        onBlur: zl,
                        onKeydown: l[23] || (l[23] = Et(N((o) => Kl(), ["prevent"]), ["enter"])),
                        type: "text",
                        placeholder: "order_items.price",
                        class: "di-calc-tags-field",
                        autocomplete: "off"
                      }, null, 544), [
                        [w, Ze.value]
                      ])
                    ]),
                    xt.value && gl.value.length > 0 ? (n(), i("div", Ir, [
                      (n(!0), i(T, null, D(gl.value.slice(0, 12), (o) => (n(), i("button", {
                        key: o,
                        onMousedown: N((_) => Yl(o), ["prevent"]),
                        class: "di-suggest-item"
                      }, [
                        I(a(zt), { style: { width: "10px", height: "10px", opacity: "0.5", "flex-shrink": "0" } }),
                        H(" " + v(o), 1)
                      ], 40, Mr))), 128))
                    ])) : p("", !0),
                    l[115] || (l[115] = e("span", { class: "di-form-hint" }, "Enter で追加、またはドロップダウンから選択", -1))
                  ]),
                  e("div", Sr, [
                    l[117] || (l[117] = e("label", { class: "di-form-label" }, "計算タイミング", -1)),
                    b(e("select", {
                      "onUpdate:modelValue": l[24] || (l[24] = (o) => At.value = o),
                      class: "di-select"
                    }, [...l[116] || (l[116] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "on_save" }, "保存時（アプリ側で計算）", -1),
                      e("option", { value: "trigger" }, "DBトリガー", -1),
                      e("option", { value: "batch" }, "バッチ（定期実行）", -1),
                      e("option", { value: "realtime" }, "リアルタイム（ビュー/マテビュー）", -1)
                    ])], 512), [
                      [we, At.value]
                    ])
                  ])
                ])) : p("", !0)
              ], 64)) : p("", !0),
              Q.value === "calculated" ? (n(), i("div", Ur, [
                l[118] || (l[118] = e("label", { class: "di-form-label" }, "計算ロジック", -1)),
                e("div", {
                  class: "di-calc-tags-input",
                  onClick: l[28] || (l[28] = (o) => {
                    var _;
                    return (_ = y.$refs.calcInputEl) == null ? void 0 : _.focus();
                  })
                }, [
                  (n(!0), i(T, null, D(Me.value, (o, _) => (n(), i(T, { key: _ }, [
                    o.type === "tag" ? (n(), i("span", Dr, [
                      H(v(o.value) + " ", 1),
                      e("button", {
                        onClick: N((f) => Ct(_), ["stop"]),
                        class: "di-calc-tag-remove"
                      }, "×", 8, Vr)
                    ])) : (n(), i("span", Er, v(o.value), 1))
                  ], 64))), 128)),
                  b(e("input", {
                    ref: "calcInputEl",
                    "onUpdate:modelValue": l[25] || (l[25] = (o) => ye.value = o),
                    onFocus: l[26] || (l[26] = (o) => u.value = !0),
                    onBlur: l[27] || (l[27] = (o) => Rl()),
                    onKeydown: al,
                    type: "text",
                    placeholder: Me.value.length === 0 ? "カラムを選択 or 自由入力 (例: × 2)" : "",
                    class: "di-calc-tags-field",
                    autocomplete: "off"
                  }, null, 40, Pr), [
                    [w, ye.value]
                  ])
                ]),
                u.value && de.value.length > 0 ? (n(), i("div", Br, [
                  (n(!0), i(T, null, D(de.value.slice(0, 12), (o) => (n(), i("button", {
                    key: o,
                    onMousedown: N((_) => se(o), ["prevent"]),
                    class: "di-suggest-item"
                  }, [
                    I(a(zt), { style: { width: "10px", height: "10px", opacity: "0.5", "flex-shrink": "0" } }),
                    H(" " + v(o), 1)
                  ], 40, Ar))), 128))
                ])) : p("", !0),
                l[119] || (l[119] = e("span", { class: "di-form-hint" }, "DBカラムはドロップダウンから挿入、演算子や数値はそのまま入力", -1))
              ])) : p("", !0),
              Q.value === "static" || Q.value === "other" ? (n(), i("div", Lr, [
                l[120] || (l[120] = e("label", { class: "di-form-label" }, "メモ", -1)),
                b(e("textarea", {
                  "onUpdate:modelValue": l[29] || (l[29] = (o) => ae.value = o),
                  rows: "4",
                  placeholder: "この要素についてのメモ...",
                  class: "di-textarea"
                }, null, 512), [
                  [w, ae.value]
                ])
              ])) : p("", !0),
              Q.value && Q.value !== "other" ? (n(), i(T, { key: 3 }, [
                e("div", Fr, [
                  e("button", {
                    onClick: l[30] || (l[30] = (o) => Ee.value = !Ee.value),
                    class: L(["di-btn-condition-toggle", { "di-condition-active": Ee.value || Je.value }])
                  }, [
                    I(a(Fl), { style: { width: "14px", height: "14px" } }),
                    l[121] || (l[121] = H(" 条件付き表示 ", -1)),
                    Je.value ? (n(), i("span", Or, "設定あり")) : p("", !0)
                  ], 2)
                ]),
                Ee.value ? (n(), i("div", jr, [
                  e("div", Hr, [
                    l[122] || (l[122] = e("label", { class: "di-form-label" }, "表示条件", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[31] || (l[31] = (o) => Je.value = o),
                      type: "text",
                      placeholder: "管理者ロール時のみ / ステータスがactiveの時",
                      class: "di-input"
                    }, null, 512), [
                      [w, Je.value]
                    ])
                  ]),
                  e("div", qr, [
                    l[123] || (l[123] = e("label", { class: "di-form-label" }, "判定カラム", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[32] || (l[32] = (o) => Lt.value = o),
                      type: "text",
                      placeholder: "users.role / orders.status",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [w, Lt.value]
                    ])
                  ]),
                  e("div", Rr, [
                    e("div", zr, [
                      l[125] || (l[125] = e("label", { class: "di-form-label" }, "条件不一致時の挙動", -1)),
                      b(e("select", {
                        "onUpdate:modelValue": l[33] || (l[33] = (o) => O.value = o),
                        class: "di-select"
                      }, [...l[124] || (l[124] = [
                        e("option", { value: "" }, "未指定", -1),
                        e("option", { value: "hidden" }, "非表示", -1),
                        e("option", { value: "disabled" }, "無効化 (グレーアウト)", -1),
                        e("option", { value: "different_value" }, "別の値を表示", -1),
                        e("option", { value: "empty" }, "空欄", -1)
                      ])], 512), [
                        [we, O.value]
                      ])
                    ])
                  ]),
                  O.value === "different_value" ? (n(), i("div", Kr, [
                    l[126] || (l[126] = e("label", { class: "di-form-label" }, "代わりに表示する値", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[34] || (l[34] = (o) => Ie.value = o),
                      type: "text",
                      placeholder: "「権限がありません」/ 「***」",
                      class: "di-input"
                    }, null, 512), [
                      [w, Ie.value]
                    ])
                  ])) : p("", !0)
                ])) : p("", !0)
              ], 64)) : p("", !0),
              Q.value === "db_direct" || Q.value === "db_formatted" || Q.value === "calculated" ? (n(), i(T, { key: 4 }, [
                l[134] || (l[134] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "表示の詳細")
                ], -1)),
                e("div", Yr, [
                  e("div", Gr, [
                    l[127] || (l[127] = e("label", { class: "di-form-label" }, "サンプル値", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[35] || (l[35] = (o) => Mt.value = o),
                      type: "text",
                      placeholder: "12,500 / 田中太郎",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [w, Mt.value]
                    ])
                  ]),
                  e("div", Xr, [
                    l[128] || (l[128] = e("label", { class: "di-form-label" }, "単位", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[36] || (l[36] = (o) => ne.value = o),
                      type: "text",
                      placeholder: "円 / %",
                      class: "di-input"
                    }, null, 512), [
                      [w, ne.value]
                    ])
                  ])
                ]),
                e("div", Wr, [
                  e("div", Zr, [
                    l[130] || (l[130] = e("label", { class: "di-form-label" }, "小数点の扱い", -1)),
                    b(e("select", {
                      "onUpdate:modelValue": l[37] || (l[37] = (o) => St.value = o),
                      class: "di-select"
                    }, [...l[129] || (l[129] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "round" }, "四捨五入", -1),
                      e("option", { value: "floor" }, "切り捨て", -1),
                      e("option", { value: "ceil" }, "切り上げ", -1),
                      e("option", { value: "decimal_1" }, "小数第1位まで", -1),
                      e("option", { value: "decimal_2" }, "小数第2位まで", -1),
                      e("option", { value: "integer" }, "整数のみ", -1)
                    ])], 512), [
                      [we, St.value]
                    ])
                  ]),
                  e("div", Jr, [
                    l[131] || (l[131] = e("label", { class: "di-form-label" }, "NULL/ゼロ時", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[38] || (l[38] = (o) => Te.value = o),
                      type: "text",
                      placeholder: "- / 0 / 非表示 / N/A",
                      class: "di-input"
                    }, null, 512), [
                      [w, Te.value]
                    ])
                  ])
                ]),
                e("div", Qr, [
                  l[132] || (l[132] = e("label", { class: "di-form-label" }, "表示フォーマット", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": l[39] || (l[39] = (o) => bt.value = o),
                    type: "text",
                    placeholder: "カンマ区切り / ¥記号付き / YYYY/MM/DD",
                    class: "di-input"
                  }, null, 512), [
                    [w, bt.value]
                  ])
                ]),
                e("div", Nr, [
                  l[133] || (l[133] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                  b(e("textarea", {
                    "onUpdate:modelValue": l[40] || (l[40] = (o) => ae.value = o),
                    rows: "2",
                    placeholder: "補足情報があれば...",
                    class: "di-textarea"
                  }, null, 512), [
                    [w, ae.value]
                  ])
                ])
              ], 64)) : p("", !0)
            ], 64)) : p("", !0),
            E.value === "action" ? (n(), i(T, { key: 1 }, [
              e("div", ec, [
                l[136] || (l[136] = e("label", { class: "di-form-label" }, "アクションタイプ", -1)),
                b(e("select", {
                  "onUpdate:modelValue": l[41] || (l[41] = (o) => R.value = o),
                  class: "di-select"
                }, [...l[135] || (l[135] = [
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
                  [we, R.value]
                ])
              ]),
              e("div", tc, [
                l[137] || (l[137] = e("label", { class: "di-form-label" }, "ターゲット", -1)),
                b(e("input", {
                  "onUpdate:modelValue": l[42] || (l[42] = (o) => ue.value = o),
                  type: "text",
                  placeholder: R.value === "navigate" ? "/tasks" : R.value === "api" ? "/api/users" : R.value === "modal" ? "confirm-dialog" : R.value === "csv_export" ? "/api/export/users" : R.value === "csv_import" ? "/api/import/users" : "",
                  class: "di-input di-input-mono"
                }, null, 8, lc), [
                  [w, ue.value]
                ])
              ]),
              R.value === "api" ? (n(), i("div", oc, [
                l[139] || (l[139] = e("label", { class: "di-form-label" }, "HTTPメソッド", -1)),
                b(e("select", {
                  "onUpdate:modelValue": l[43] || (l[43] = (o) => oe.value = o),
                  class: "di-select"
                }, [...l[138] || (l[138] = [
                  e("option", { value: "" }, "選択してください", -1),
                  e("option", { value: "GET" }, "GET", -1),
                  e("option", { value: "POST" }, "POST", -1),
                  e("option", { value: "PUT" }, "PUT", -1),
                  e("option", { value: "DELETE" }, "DELETE", -1),
                  e("option", { value: "PATCH" }, "PATCH", -1)
                ])], 512), [
                  [we, oe.value]
                ])
              ])) : p("", !0),
              e("div", nc, [
                l[140] || (l[140] = e("label", { class: "di-form-label" }, "説明", -1)),
                b(e("textarea", {
                  "onUpdate:modelValue": l[44] || (l[44] = (o) => ce.value = o),
                  rows: "3",
                  placeholder: "このアクションの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [w, ce.value]
                ])
              ]),
              R.value === "csv_export" || R.value === "csv_import" ? (n(), i(T, { key: 1 }, [
                e("div", sc, [
                  e("span", null, [
                    I(a(Hl), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    l[141] || (l[141] = H(" CSV仕様", -1))
                  ])
                ]),
                e("div", ic, [
                  l[148] || (l[148] = e("label", { class: "di-form-label" }, "ファイル設定", -1)),
                  e("div", ac, [
                    e("div", dc, [
                      l[143] || (l[143] = e("label", { class: "di-form-label" }, "エンコーディング", -1)),
                      b(e("select", {
                        "onUpdate:modelValue": l[45] || (l[45] = (o) => qe.value = o),
                        class: "di-select"
                      }, [...l[142] || (l[142] = [
                        e("option", { value: "UTF-8" }, "UTF-8", -1),
                        e("option", { value: "Shift_JIS" }, "Shift_JIS", -1),
                        e("option", { value: "EUC-JP" }, "EUC-JP", -1),
                        e("option", { value: "UTF-8 BOM" }, "UTF-8 BOM", -1)
                      ])], 512), [
                        [we, qe.value]
                      ])
                    ]),
                    e("div", uc, [
                      l[145] || (l[145] = e("label", { class: "di-form-label" }, "区切り文字", -1)),
                      b(e("select", {
                        "onUpdate:modelValue": l[46] || (l[46] = (o) => Ae.value = o),
                        class: "di-select"
                      }, [...l[144] || (l[144] = [
                        e("option", { value: "," }, "カンマ (,)", -1),
                        e("option", { value: "	" }, "タブ", -1),
                        e("option", { value: "|" }, "パイプ (|)", -1)
                      ])], 512), [
                        [we, Ae.value]
                      ])
                    ])
                  ]),
                  e("div", rc, [
                    e("label", cc, [
                      b(e("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": l[47] || (l[47] = (o) => Ue.value = o),
                        class: "di-checkbox"
                      }, null, 512), [
                        [dl, Ue.value]
                      ]),
                      l[146] || (l[146] = H(" ヘッダー行あり ", -1))
                    ])
                  ]),
                  e("div", vc, [
                    l[147] || (l[147] = e("label", { class: "di-form-label" }, "ファイル名パターン", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[48] || (l[48] = (o) => nt.value = o),
                      type: "text",
                      placeholder: "users_{YYYYMMDD}.csv",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [w, nt.value]
                    ])
                  ])
                ]),
                e("div", pc, [
                  l[151] || (l[151] = e("label", { class: "di-form-label" }, "CSV列定義", -1)),
                  U.value.length > 0 ? (n(), i("div", mc, [
                    l[150] || (l[150] = e("div", { class: "di-csv-columns-header" }, [
                      e("span", { class: "di-csv-col-no" }, "No"),
                      e("span", { class: "di-csv-col-name" }, "項目名"),
                      e("span", { class: "di-csv-col-db" }, "DBマッピング"),
                      e("span", { class: "di-csv-col-proc" }, "加工"),
                      e("span", { class: "di-csv-col-type" }, "型"),
                      e("span", { class: "di-csv-col-req" }, "必須"),
                      e("span", { class: "di-csv-col-desc" }, "説明"),
                      e("span", { class: "di-csv-col-act" })
                    ], -1)),
                    (n(!0), i(T, null, D(U.value, (o, _) => (n(), i("div", {
                      key: _,
                      class: "di-csv-column-row"
                    }, [
                      e("span", fc, v(_ + 1), 1),
                      b(e("input", {
                        "onUpdate:modelValue": (f) => o.name = f,
                        placeholder: "項目名",
                        class: "di-csv-input di-csv-col-name"
                      }, null, 8, bc), [
                        [w, o.name]
                      ]),
                      b(e("input", {
                        "onUpdate:modelValue": (f) => o.dbMapping = f,
                        placeholder: "table.col",
                        class: "di-csv-input di-csv-col-db"
                      }, null, 8, hc), [
                        [w, o.dbMapping]
                      ]),
                      b(e("input", {
                        "onUpdate:modelValue": (f) => o.processing = f,
                        placeholder: "姓+名, IF...",
                        class: "di-csv-input di-csv-col-proc"
                      }, null, 8, yc), [
                        [w, o.processing]
                      ]),
                      b(e("select", {
                        "onUpdate:modelValue": (f) => o.type = f,
                        class: "di-csv-select di-csv-col-type"
                      }, [...l[149] || (l[149] = [
                        e("option", { value: "" }, "-", -1),
                        e("option", { value: "string" }, "string", -1),
                        e("option", { value: "integer" }, "integer", -1),
                        e("option", { value: "decimal" }, "decimal", -1),
                        e("option", { value: "date" }, "date", -1),
                        e("option", { value: "datetime" }, "datetime", -1),
                        e("option", { value: "boolean" }, "boolean", -1)
                      ])], 8, gc), [
                        [we, o.type]
                      ]),
                      e("label", kc, [
                        b(e("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": (f) => o.required = f,
                          class: "di-checkbox"
                        }, null, 8, xc), [
                          [dl, o.required]
                        ])
                      ]),
                      b(e("input", {
                        "onUpdate:modelValue": (f) => o.description = f,
                        placeholder: "備考",
                        class: "di-csv-input di-csv-col-desc"
                      }, null, 8, wc), [
                        [w, o.description]
                      ]),
                      e("div", Cc, [
                        e("button", {
                          onClick: (f) => xl(_, -1),
                          disabled: _ === 0,
                          class: "di-csv-move-btn",
                          title: "上へ"
                        }, [
                          I(a(Ul), { style: { width: "12px", height: "12px" } })
                        ], 8, _c),
                        e("button", {
                          onClick: (f) => xl(_, 1),
                          disabled: _ === U.value.length - 1,
                          class: "di-csv-move-btn",
                          title: "下へ"
                        }, [
                          I(a(yl), { style: { width: "12px", height: "12px" } })
                        ], 8, $c),
                        e("button", {
                          onClick: (f) => Nl(_),
                          class: "di-csv-remove-btn",
                          title: "削除"
                        }, "×", 8, Tc)
                      ])
                    ]))), 128))
                  ])) : p("", !0),
                  e("button", {
                    onClick: Ql,
                    class: "di-btn-add-field"
                  }, " + 列を追加 ")
                ]),
                R.value === "csv_export" ? (n(), i(T, { key: 0 }, [
                  l[155] || (l[155] = e("div", { class: "di-form-divider" }, [
                    e("span", null, "出力オプション")
                  ], -1)),
                  e("div", Ic, [
                    l[152] || (l[152] = e("label", { class: "di-form-label" }, "ソート順", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[49] || (l[49] = (o) => Z.value = o),
                      type: "text",
                      placeholder: "created_at DESC",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [w, Z.value]
                    ])
                  ]),
                  e("div", Mc, [
                    l[153] || (l[153] = e("label", { class: "di-form-label" }, "抽出条件", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[50] || (l[50] = (o) => Oe.value = o),
                      type: "text",
                      placeholder: "status = 'active'",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [w, Oe.value]
                    ])
                  ]),
                  e("div", Sc, [
                    l[154] || (l[154] = e("label", { class: "di-form-label" }, "最大行数", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[51] || (l[51] = (o) => je.value = o),
                      type: "number",
                      placeholder: "10000",
                      class: "di-input"
                    }, null, 512), [
                      [
                        w,
                        je.value,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ], 64)) : p("", !0),
                R.value === "csv_import" ? (n(), i(T, { key: 1 }, [
                  l[161] || (l[161] = e("div", { class: "di-form-divider" }, [
                    e("span", null, "取込オプション")
                  ], -1)),
                  e("div", Uc, [
                    l[157] || (l[157] = e("label", { class: "di-form-label" }, "エラー処理", -1)),
                    b(e("select", {
                      "onUpdate:modelValue": l[52] || (l[52] = (o) => $e.value = o),
                      class: "di-select"
                    }, [...l[156] || (l[156] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "stop_on_first" }, "最初のエラーで停止", -1),
                      e("option", { value: "skip_and_continue" }, "スキップして続行", -1),
                      e("option", { value: "collect_all" }, "全エラー収集", -1)
                    ])], 512), [
                      [we, $e.value]
                    ])
                  ]),
                  e("div", Dc, [
                    l[159] || (l[159] = e("label", { class: "di-form-label" }, "重複処理", -1)),
                    b(e("select", {
                      "onUpdate:modelValue": l[53] || (l[53] = (o) => re.value = o),
                      class: "di-select"
                    }, [...l[158] || (l[158] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "skip" }, "スキップ", -1),
                      e("option", { value: "overwrite" }, "上書き", -1),
                      e("option", { value: "error" }, "エラー", -1)
                    ])], 512), [
                      [we, re.value]
                    ])
                  ]),
                  e("div", Vc, [
                    l[160] || (l[160] = e("label", { class: "di-form-label" }, "事前バリデーション", -1)),
                    b(e("textarea", {
                      "onUpdate:modelValue": l[54] || (l[54] = (o) => j.value = o),
                      rows: "2",
                      placeholder: "取込前のチェック内容...",
                      class: "di-textarea"
                    }, null, 512), [
                      [w, j.value]
                    ])
                  ])
                ], 64)) : p("", !0),
                l[165] || (l[165] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "エラー定義")
                ], -1)),
                e("div", Ec, [
                  V.value.length > 0 ? (n(), i("div", Pc, [
                    l[164] || (l[164] = e("div", { class: "di-csv-columns-header" }, [
                      e("span", { class: "di-csv-err-col" }, "対象列"),
                      e("span", { class: "di-csv-err-cond" }, "エラー条件"),
                      e("span", { class: "di-csv-err-msg" }, "エラーメッセージ"),
                      e("span", { class: "di-csv-err-sev" }, "種別"),
                      e("span", { class: "di-csv-err-act" })
                    ], -1)),
                    (n(!0), i(T, null, D(V.value, (o, _) => (n(), i("div", {
                      key: _,
                      class: "di-csv-column-row"
                    }, [
                      b(e("select", {
                        "onUpdate:modelValue": (f) => o.column = f,
                        class: "di-csv-select di-csv-err-col"
                      }, [
                        l[162] || (l[162] = e("option", { value: "" }, "（全体）", -1)),
                        (n(!0), i(T, null, D(no.value, (f) => (n(), i("option", {
                          key: f,
                          value: f
                        }, v(f), 9, Ac))), 128))
                      ], 8, Bc), [
                        [we, o.column]
                      ]),
                      b(e("input", {
                        "onUpdate:modelValue": (f) => o.condition = f,
                        placeholder: "必須項目が空",
                        class: "di-csv-input di-csv-err-cond"
                      }, null, 8, Lc), [
                        [w, o.condition]
                      ]),
                      b(e("input", {
                        "onUpdate:modelValue": (f) => o.message = f,
                        placeholder: "○○は必須です",
                        class: "di-csv-input di-csv-err-msg"
                      }, null, 8, Fc), [
                        [w, o.message]
                      ]),
                      b(e("select", {
                        "onUpdate:modelValue": (f) => o.severity = f,
                        class: "di-csv-select di-csv-err-sev"
                      }, [...l[163] || (l[163] = [
                        e("option", { value: "error" }, "エラー", -1),
                        e("option", { value: "warning" }, "警告", -1)
                      ])], 8, Oc), [
                        [we, o.severity]
                      ]),
                      e("button", {
                        onClick: (f) => oo(_),
                        class: "di-csv-remove-btn",
                        title: "削除"
                      }, "×", 8, jc)
                    ]))), 128))
                  ])) : p("", !0),
                  e("button", {
                    onClick: lo,
                    class: "di-btn-add-field"
                  }, " + エラー定義を追加 ")
                ])
              ], 64)) : p("", !0),
              R.value === "email" ? (n(), i(T, { key: 2 }, [
                e("div", Hc, [
                  e("span", null, [
                    I(a(Io), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    l[166] || (l[166] = H(" メール基本設定", -1))
                  ])
                ]),
                e("div", qc, [
                  e("div", Rc, [
                    l[167] || (l[167] = e("label", { class: "di-form-label" }, "トリガー *", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[55] || (l[55] = (o) => k.value = o),
                      type: "text",
                      placeholder: "注文確定時、ボタンクリック",
                      class: "di-input"
                    }, null, 512), [
                      [w, k.value]
                    ])
                  ]),
                  e("div", zc, [
                    l[168] || (l[168] = e("label", { class: "di-form-label" }, "宛先 *", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[56] || (l[56] = (o) => F.value = o),
                      type: "text",
                      placeholder: "ユーザーメール、管理者固定",
                      class: "di-input"
                    }, null, 512), [
                      [w, F.value]
                    ])
                  ])
                ]),
                e("div", Kc, [
                  e("div", Yc, [
                    l[169] || (l[169] = e("label", { class: "di-form-label" }, "CC", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[57] || (l[57] = (o) => J.value = o),
                      type: "text",
                      placeholder: "CC宛先",
                      class: "di-input"
                    }, null, 512), [
                      [w, J.value]
                    ])
                  ]),
                  e("div", Gc, [
                    l[170] || (l[170] = e("label", { class: "di-form-label" }, "BCC", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[58] || (l[58] = (o) => te.value = o),
                      type: "text",
                      placeholder: "BCC宛先",
                      class: "di-input"
                    }, null, 512), [
                      [w, te.value]
                    ])
                  ])
                ]),
                e("div", Xc, [
                  l[171] || (l[171] = e("label", { class: "di-form-label" }, "件名テンプレート *", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": l[59] || (l[59] = (o) => P.value = o),
                    type: "text",
                    placeholder: "【注文確認】ご注文番号 {orderNumber}",
                    class: "di-input"
                  }, null, 512), [
                    [w, P.value]
                  ])
                ]),
                e("div", Wc, [
                  l[172] || (l[172] = e("label", { class: "di-form-label" }, "本文テンプレート概要", -1)),
                  b(e("textarea", {
                    "onUpdate:modelValue": l[60] || (l[60] = (o) => B.value = o),
                    rows: "3",
                    placeholder: "本文の概要を記述...",
                    class: "di-textarea"
                  }, null, 512), [
                    [w, B.value]
                  ])
                ]),
                e("div", Zc, [
                  l[173] || (l[173] = e("label", { class: "di-form-label" }, "テンプレートファイルパス", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": l[61] || (l[61] = (o) => C.value = o),
                    type: "text",
                    placeholder: "resources/mail/order_confirm.blade.php",
                    class: "di-input di-input-mono"
                  }, null, 512), [
                    [w, C.value]
                  ])
                ]),
                l[178] || (l[178] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "差し込み変数")
                ], -1)),
                e("div", Jc, [
                  e("div", Qc, [
                    (n(!0), i(T, null, D(S.value, (o, _) => (n(), i("span", {
                      key: _,
                      class: "di-calc-tag"
                    }, [
                      H(v(o) + " ", 1),
                      e("button", {
                        onClick: N((f) => uo(_), ["stop"]),
                        class: "di-calc-tag-remove"
                      }, "×", 8, Nc)
                    ]))), 128)),
                    b(e("input", {
                      "onUpdate:modelValue": l[62] || (l[62] = (o) => ie.value = o),
                      onKeydown: [
                        l[63] || (l[63] = Et(N((o) => ao(), ["prevent"]), ["enter"])),
                        ro
                      ],
                      type: "text",
                      placeholder: "変数名を入力してEnter (例: userName)",
                      class: "di-calc-tags-field",
                      autocomplete: "off"
                    }, null, 544), [
                      [w, ie.value]
                    ])
                  ]),
                  l[174] || (l[174] = e("span", { class: "di-form-hint" }, "Enter で追加", -1))
                ]),
                l[179] || (l[179] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "オプション")
                ], -1)),
                e("div", ev, [
                  l[175] || (l[175] = e("label", { class: "di-form-label" }, "添付ファイル", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": l[64] || (l[64] = (o) => X.value = o),
                    type: "text",
                    placeholder: "添付ファイルの説明",
                    class: "di-input"
                  }, null, 512), [
                    [w, X.value]
                  ])
                ]),
                e("div", tv, [
                  l[176] || (l[176] = e("label", { class: "di-form-label" }, "送信条件", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": l[65] || (l[65] = (o) => le.value = o),
                    type: "text",
                    placeholder: "メール送信設定がONの場合",
                    class: "di-input"
                  }, null, 512), [
                    [w, le.value]
                  ])
                ]),
                e("div", lv, [
                  l[177] || (l[177] = e("label", { class: "di-form-label" }, "エラー処理", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": l[66] || (l[66] = (o) => De.value = o),
                    type: "text",
                    placeholder: "キューに入れてリトライ",
                    class: "di-input"
                  }, null, 512), [
                    [w, De.value]
                  ])
                ])
              ], 64)) : p("", !0),
              R.value === "sort" ? (n(), i(T, { key: 3 }, [
                e("div", ov, [
                  e("span", null, [
                    I(a(ho), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    l[180] || (l[180] = H(" ソート設定", -1))
                  ])
                ]),
                e("div", nv, [
                  e("label", sv, [
                    b(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": l[67] || (l[67] = (o) => fe.value = o),
                      class: "di-checkbox"
                    }, null, 512), [
                      [dl, fe.value]
                    ]),
                    l[181] || (l[181] = H(" このカラムはソート可能 ", -1))
                  ])
                ]),
                fe.value ? (n(), i(T, { key: 0 }, [
                  e("div", iv, [
                    e("div", av, [
                      l[183] || (l[183] = e("label", { class: "di-form-label" }, "データ型", -1)),
                      b(e("select", {
                        "onUpdate:modelValue": l[68] || (l[68] = (o) => He.value = o),
                        class: "di-select"
                      }, [...l[182] || (l[182] = [
                        e("option", { value: "" }, "未指定", -1),
                        e("option", { value: "string" }, "文字列", -1),
                        e("option", { value: "number" }, "数値", -1),
                        e("option", { value: "date" }, "日付", -1),
                        e("option", { value: "custom" }, "カスタム", -1)
                      ])], 512), [
                        [we, He.value]
                      ])
                    ]),
                    e("div", dv, [
                      l[185] || (l[185] = e("label", { class: "di-form-label" }, "デフォルト方向", -1)),
                      b(e("select", {
                        "onUpdate:modelValue": l[69] || (l[69] = (o) => vt.value = o),
                        class: "di-select"
                      }, [...l[184] || (l[184] = [
                        e("option", { value: "" }, "未指定", -1),
                        e("option", { value: "asc" }, "昇順 (A→Z, 1→9)", -1),
                        e("option", { value: "desc" }, "降順 (Z→A, 9→1)", -1)
                      ])], 512), [
                        [we, vt.value]
                      ])
                    ])
                  ]),
                  e("div", uv, [
                    l[186] || (l[186] = e("label", { class: "di-form-label" }, "ソートキー (DBカラム/APIフィールド)", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[70] || (l[70] = (o) => st.value = o),
                      type: "text",
                      placeholder: "users.name / created_at",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [w, st.value]
                    ])
                  ]),
                  e("div", rv, [
                    e("label", cv, [
                      b(e("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": l[71] || (l[71] = (o) => yt.value = o),
                        class: "di-checkbox"
                      }, null, 512), [
                        [dl, yt.value]
                      ]),
                      l[187] || (l[187] = H(" 初期表示時のデフォルトソート ", -1))
                    ])
                  ])
                ], 64)) : p("", !0),
                e("div", vv, [
                  l[188] || (l[188] = e("label", { class: "di-form-label" }, "未ソート時の並び順", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": l[72] || (l[72] = (o) => it.value = o),
                    type: "text",
                    placeholder: "ID昇順 / 登録日降順 / APIレスポンス順",
                    class: "di-input"
                  }, null, 512), [
                    [w, it.value]
                  ])
                ]),
                e("div", pv, [
                  l[189] || (l[189] = e("label", { class: "di-form-label" }, "補足", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": l[73] || (l[73] = (o) => at.value = o),
                    type: "text",
                    placeholder: "サーバーサイドソート / ページネーション時はリセット",
                    class: "di-input"
                  }, null, 512), [
                    [w, at.value]
                  ])
                ])
              ], 64)) : p("", !0),
              e("div", mv, [
                l[190] || (l[190] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                b(e("textarea", {
                  "onUpdate:modelValue": l[74] || (l[74] = (o) => ae.value = o),
                  rows: "2",
                  placeholder: "補足情報があれば...",
                  class: "di-textarea"
                }, null, 512), [
                  [w, ae.value]
                ])
              ])
            ], 64)) : p("", !0),
            E.value === "form" ? (n(), i(T, { key: 2 }, [
              e("div", fv, [
                l[192] || (l[192] = e("label", { class: "di-form-label" }, "入力タイプ", -1)),
                b(e("select", {
                  "onUpdate:modelValue": l[75] || (l[75] = (o) => be.value = o),
                  class: "di-select"
                }, [...l[191] || (l[191] = [
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
                  [we, be.value]
                ])
              ]),
              he.value.length > 0 ? (n(), i("div", bv, [
                l[193] || (l[193] = e("label", { class: "di-form-label" }, "対応カラム", -1)),
                e("div", hv, [
                  (n(!0), i(T, null, D(he.value, (o, _) => (n(), i("div", {
                    key: _,
                    class: "di-field-tag"
                  }, [
                    e("span", yv, v(o.table) + "." + v(o.column), 1),
                    o.type ? (n(), i("span", gv, v(o.type), 1)) : p("", !0),
                    e("button", {
                      onClick: (f) => il(_),
                      class: "di-field-tag-remove"
                    }, "×", 8, kv)
                  ]))), 128))
                ])
              ])) : p("", !0),
              d.value ? (n(), i("div", xv, [
                e("div", wv, [
                  e("label", Cv, [
                    I(a(zt), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    l[194] || (l[194] = H(" 対応するDBカラム ", -1))
                  ]),
                  e("div", _v, [
                    b(e("input", {
                      "onUpdate:modelValue": l[76] || (l[76] = (o) => ht.value = o),
                      onFocus: l[77] || (l[77] = (o) => Tt.value = !0),
                      type: "text",
                      placeholder: "テーブル.カラムを検索...",
                      class: "di-input di-binding-search"
                    }, null, 544), [
                      [w, ht.value]
                    ]),
                    ht.value ? (n(), i("button", {
                      key: 0,
                      onClick: l[78] || (l[78] = (o) => {
                        ht.value = "", Tt.value = !1;
                      }),
                      class: "di-binding-clear"
                    }, [
                      I(a(It), { style: { width: "14px", height: "14px" } })
                    ])) : p("", !0)
                  ]),
                  Tt.value && Xt.value.length > 0 ? (n(), i("div", $v, [
                    (n(!0), i(T, null, D(Xt.value, (o) => (n(), i("button", {
                      key: o.fullName,
                      onClick: (_) => sl(o),
                      class: "di-binding-item has-db"
                    }, [
                      e("div", Iv, [
                        e("span", Mv, v(o.fullName), 1),
                        e("span", Sv, v(o.type), 1)
                      ]),
                      o.comment ? (n(), i("span", Uv, v(o.comment), 1)) : p("", !0)
                    ], 8, Tv))), 128))
                  ])) : p("", !0)
                ])
              ])) : p("", !0),
              Ge.value && (be.value === "select" || be.value === "radio" || be.value === "checkbox") ? (n(), i("div", Dv, [
                e("button", {
                  onClick: Cl,
                  class: L(["di-btn-condition-toggle", { "di-condition-active": Ye.value }])
                }, [
                  I(a(Pl), { style: { width: "14px", height: "14px" } }),
                  l[195] || (l[195] = H(" 選択肢を定義 ", -1)),
                  Bt.value ? (n(), i("span", Vv, v(Bt.value.entries.length) + "件", 1)) : p("", !0)
                ], 2),
                Ye.value ? (n(), i("div", Ev, [
                  Re.value.length > 0 ? (n(), i("div", Pv, [
                    l[196] || (l[196] = e("div", { class: "di-master-entries-header" }, [
                      e("span", { class: "di-master-col-val" }, "値"),
                      e("span", { class: "di-master-col-lbl" }, "ラベル"),
                      e("span", { class: "di-master-col-color" }, "色"),
                      e("span", { class: "di-master-col-act" })
                    ], -1)),
                    (n(!0), i(T, null, D(Re.value, (o, _) => (n(), i("div", {
                      key: _,
                      class: "di-master-entry-row"
                    }, [
                      b(e("input", {
                        "onUpdate:modelValue": (f) => o.value = f,
                        placeholder: "1",
                        class: "di-master-input di-master-col-val"
                      }, null, 8, Bv), [
                        [w, o.value]
                      ]),
                      b(e("input", {
                        "onUpdate:modelValue": (f) => o.label = f,
                        placeholder: "受付",
                        class: "di-master-input di-master-col-lbl"
                      }, null, 8, Av), [
                        [w, o.label]
                      ]),
                      b(e("input", {
                        "onUpdate:modelValue": (f) => o.color = f,
                        type: "color",
                        class: "di-master-color-input"
                      }, null, 8, Lv), [
                        [w, o.color]
                      ]),
                      e("button", {
                        onClick: (f) => $l(_),
                        class: "di-master-entry-remove"
                      }, "×", 8, Fv)
                    ]))), 128))
                  ])) : p("", !0),
                  e("button", {
                    onClick: _l,
                    class: "di-btn-add-field",
                    style: { "margin-top": "4px" }
                  }, " + 値を追加 ")
                ])) : p("", !0)
              ])) : p("", !0),
              e("div", Ov, [
                e("button", {
                  onClick: l[79] || (l[79] = (o) => Y.value = !Y.value),
                  class: L(["di-btn-condition-toggle", { "di-condition-active": Y.value }])
                }, [
                  I(a(Fl), { style: { width: "14px", height: "14px" } }),
                  l[197] || (l[197] = H(" 必須入力 ", -1)),
                  Y.value ? (n(), i("span", jv, "必須")) : p("", !0)
                ], 2)
              ]),
              e("div", Hv, [
                l[198] || (l[198] = e("label", { class: "di-form-label" }, "バリデーションルール", -1)),
                e("div", qv, [
                  (n(!0), i(T, null, D(me.value, (o, _) => (n(), i("span", {
                    key: _,
                    class: "di-calc-tag",
                    style: { background: "#ec4899" }
                  }, [
                    H(v(o) + " ", 1),
                    e("button", {
                      onClick: N((f) => Zl(_), ["stop"]),
                      class: "di-calc-tag-remove"
                    }, "×", 8, Rv)
                  ]))), 128)),
                  b(e("input", {
                    "onUpdate:modelValue": l[80] || (l[80] = (o) => Pe.value = o),
                    onKeydown: [
                      l[81] || (l[81] = Et(N((o) => Wl(), ["prevent"]), ["enter"])),
                      Jl
                    ],
                    type: "text",
                    placeholder: me.value.length === 0 ? "max:255, email, 必須 など (Enter で追加)" : "",
                    class: "di-calc-tags-field",
                    autocomplete: "off"
                  }, null, 40, zv), [
                    [w, Pe.value]
                  ])
                ]),
                l[199] || (l[199] = e("span", { class: "di-form-hint" }, "Enter で追加、Backspace で削除", -1))
              ]),
              e("div", Kv, [
                l[200] || (l[200] = e("label", { class: "di-form-label" }, "プレースホルダー", -1)),
                b(e("input", {
                  "onUpdate:modelValue": l[82] || (l[82] = (o) => Ce.value = o),
                  type: "text",
                  placeholder: "例: user@example.com",
                  class: "di-input"
                }, null, 512), [
                  [w, Ce.value]
                ])
              ]),
              e("div", Yv, [
                l[201] || (l[201] = e("label", { class: "di-form-label" }, "デフォルト値", -1)),
                b(e("input", {
                  "onUpdate:modelValue": l[83] || (l[83] = (o) => _e.value = o),
                  type: "text",
                  placeholder: "初期値",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [w, _e.value]
                ])
              ]),
              e("div", Gv, [
                l[202] || (l[202] = e("label", { class: "di-form-label" }, "説明", -1)),
                b(e("textarea", {
                  "onUpdate:modelValue": l[84] || (l[84] = (o) => Be.value = o),
                  rows: "3",
                  placeholder: "このフォーム要素の説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [w, Be.value]
                ])
              ]),
              e("div", Xv, [
                l[203] || (l[203] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                b(e("textarea", {
                  "onUpdate:modelValue": l[85] || (l[85] = (o) => ae.value = o),
                  rows: "2",
                  placeholder: "補足情報があれば...",
                  class: "di-textarea"
                }, null, 512), [
                  [w, ae.value]
                ])
              ])
            ], 64)) : p("", !0),
            E.value === "chart" ? (n(), i(T, { key: 3 }, [
              e("div", Wv, [
                l[205] || (l[205] = e("label", { class: "di-form-label" }, "チャート種別", -1)),
                b(e("select", {
                  "onUpdate:modelValue": l[86] || (l[86] = (o) => Ne.value = o),
                  class: "di-select"
                }, [...l[204] || (l[204] = [
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
                  [we, Ne.value]
                ])
              ]),
              e("div", Zv, [
                l[206] || (l[206] = e("label", { class: "di-form-label" }, "タイトル", -1)),
                b(e("input", {
                  "onUpdate:modelValue": l[87] || (l[87] = (o) => dt.value = o),
                  type: "text",
                  placeholder: "例: 月別受講者数",
                  class: "di-input"
                }, null, 512), [
                  [w, dt.value]
                ])
              ]),
              e("div", Jv, [
                e("div", Qv, [
                  l[207] || (l[207] = e("label", { class: "di-form-label" }, "X軸", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": l[88] || (l[88] = (o) => ut.value = o),
                    type: "text",
                    placeholder: "例: 月, 日付",
                    class: "di-input"
                  }, null, 512), [
                    [w, ut.value]
                  ])
                ]),
                e("div", Nv, [
                  l[208] || (l[208] = e("label", { class: "di-form-label" }, "Y軸", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": l[89] || (l[89] = (o) => et.value = o),
                    type: "text",
                    placeholder: "例: 件数, 金額",
                    class: "di-input"
                  }, null, 512), [
                    [w, et.value]
                  ])
                ])
              ]),
              e("div", ep, [
                l[210] || (l[210] = e("label", { class: "di-form-label" }, "系列定義", -1)),
                xe.value.length > 0 ? (n(), i("div", tp, [
                  l[209] || (l[209] = e("div", { class: "di-csv-columns-header" }, [
                    e("span", { class: "di-chart-col-label" }, "系列名"),
                    e("span", { class: "di-chart-col-field" }, "フィールド"),
                    e("span", { class: "di-chart-col-color" }, "色"),
                    e("span", { class: "di-csv-col-act" })
                  ], -1)),
                  (n(!0), i(T, null, D(xe.value, (o, _) => (n(), i("div", {
                    key: _,
                    class: "di-csv-column-row"
                  }, [
                    b(e("input", {
                      "onUpdate:modelValue": (f) => o.label = f,
                      placeholder: "予習",
                      class: "di-csv-input di-chart-col-label"
                    }, null, 8, lp), [
                      [w, o.label]
                    ]),
                    b(e("input", {
                      "onUpdate:modelValue": (f) => o.field = f,
                      placeholder: "preview_count",
                      class: "di-csv-input di-chart-col-field"
                    }, null, 8, op), [
                      [w, o.field]
                    ]),
                    b(e("input", {
                      "onUpdate:modelValue": (f) => o.color = f,
                      type: "color",
                      class: "di-master-color-input"
                    }, null, 8, np), [
                      [w, o.color]
                    ]),
                    e("div", sp, [
                      e("button", {
                        onClick: (f) => wl(_, -1),
                        disabled: _ === 0,
                        class: "di-csv-move-btn",
                        title: "上へ"
                      }, [
                        I(a(Ul), { style: { width: "12px", height: "12px" } })
                      ], 8, ip),
                      e("button", {
                        onClick: (f) => wl(_, 1),
                        disabled: _ === xe.value.length - 1,
                        class: "di-csv-move-btn",
                        title: "下へ"
                      }, [
                        I(a(yl), { style: { width: "12px", height: "12px" } })
                      ], 8, ap),
                      e("button", {
                        onClick: (f) => to(_),
                        class: "di-csv-remove-btn",
                        title: "削除"
                      }, "×", 8, dp)
                    ])
                  ]))), 128))
                ])) : p("", !0),
                e("button", {
                  onClick: eo,
                  class: "di-btn-add-field"
                }, " + 系列を追加 ")
              ]),
              e("div", up, [
                l[211] || (l[211] = e("label", { class: "di-form-label" }, "データ取得元", -1)),
                b(e("input", {
                  "onUpdate:modelValue": l[90] || (l[90] = (o) => rt.value = o),
                  type: "text",
                  placeholder: "例: GET /api/stats/monthly",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [w, rt.value]
                ])
              ]),
              e("div", rp, [
                l[212] || (l[212] = e("label", { class: "di-form-label" }, "集計方法", -1)),
                b(e("input", {
                  "onUpdate:modelValue": l[91] || (l[91] = (o) => Le.value = o),
                  type: "text",
                  placeholder: "例: 月別集計, GROUP BY month",
                  class: "di-input"
                }, null, 512), [
                  [w, Le.value]
                ])
              ]),
              e("div", cp, [
                l[213] || (l[213] = e("label", { class: "di-form-label" }, "フィルタ条件", -1)),
                b(e("input", {
                  "onUpdate:modelValue": l[92] || (l[92] = (o) => Se.value = o),
                  type: "text",
                  placeholder: "例: 直近12ヶ月, status=active",
                  class: "di-input"
                }, null, 512), [
                  [w, Se.value]
                ])
              ]),
              e("div", vp, [
                l[214] || (l[214] = e("label", { class: "di-form-label" }, "説明", -1)),
                b(e("textarea", {
                  "onUpdate:modelValue": l[93] || (l[93] = (o) => pt.value = o),
                  rows: "3",
                  placeholder: "このチャートの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [w, pt.value]
                ])
              ])
            ], 64)) : p("", !0)
          ]),
          e("div", pp, [
            e("button", {
              onClick: el,
              class: "di-btn-delete"
            }, [
              I(a(tl), { style: { width: "14px", height: "14px" } }),
              l[215] || (l[215] = H(" 削除 ", -1))
            ]),
            e("div", mp, [
              e("button", {
                onClick: wt,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: Yt,
                class: "di-btn-save"
              }, [
                I(a(ql), { style: { width: "14px", height: "14px" } }),
                l[216] || (l[216] = H(" 保存 ", -1))
              ])
            ])
          ])
        ], 2)
      ])) : p("", !0)
    ], 8, ["to"]));
  }
}), bp = /* @__PURE__ */ pl(fp, [["__scopeId", "data-v-6216bf9b"]]), hp = {
  key: 0,
  "data-dev-inspector": "",
  class: "di-loading-overlay"
}, yp = { class: "di-highlight-label" }, gp = ["onClick"], kp = {
  key: 0,
  class: "di-note-label-row"
}, xp = ["onClick"], wp = {
  "data-dev-inspector": "",
  class: "di-scan-banner"
}, Cp = ["onClick"], _p = { class: "di-analysis-type" }, $p = {
  key: 0,
  class: "di-analysis-tags"
}, Tp = {
  key: 1,
  class: "di-analysis-db"
}, Ip = {
  key: 2,
  class: "di-analysis-api-source"
}, Mp = {
  key: 3,
  class: "di-analysis-conditional"
}, Sp = ["onClick"], Up = {
  key: 0,
  class: "di-analysis-text"
}, Dp = {
  "data-dev-inspector": "",
  class: "di-analysis-banner"
}, Vp = ["onClick"], Ep = {
  key: 0,
  class: "di-unannotated-label-text"
}, Pp = /* @__PURE__ */ ol({
  __name: "DevPickOverlay",
  setup(ee) {
    const g = nl(), r = vl("teleportTarget", "body"), E = h(null), R = h(null), ue = h(0), oe = h(0), ce = h(0), be = {
      db_direct: "#3b82f6",
      db_formatted: "#8b5cf6",
      calculated: "#f59e0b",
      static: "#10b981",
      other: "#94a3b8"
    }, Y = {
      action: "#a78bfa",
      form: "#ec4899"
    };
    function me(j) {
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
      }[j] || j;
    }
    function Pe(j) {
      var k, F;
      const V = g.getElementConfig(j);
      if (V != null && V.elementType && Y[V.elementType])
        return Y[V.elementType];
      if ((k = V == null ? void 0 : V.note) != null && k.displayType)
        return be[V.note.displayType] || "#60a5fa";
      if (!(V != null && V.sourceBinding)) {
        const J = ((F = V == null ? void 0 : V.note) == null ? void 0 : F.type) || "info";
        return {
          info: "#60a5fa",
          warning: "#fbbf24",
          todo: "#10b981",
          question: "#a78bfa"
        }[J] || "#60a5fa";
      }
      return V.sourceBinding.isStatic ? "#10b981" : V.sourceBinding.type === "v-model" ? "#8b5cf6" : V.sourceBinding.type === "api" ? "#f59e0b" : "#60a5fa";
    }
    function Ce(j) {
      var B, C, S, ie, X, le;
      const V = g.noteHighlightFilter, k = g.noteTableFilter, F = g.getElementConfig(j);
      if (!F || k !== "all" && !((B = F.fieldInfoList) != null && B.length ? F.fieldInfoList : F.fieldInfo ? [F.fieldInfo] : []).some((He) => He.table === k || He.table.startsWith(k + ".")))
        return !1;
      if (V === "all") return !0;
      const J = (C = F.note) == null ? void 0 : C.displayType, te = !!((S = F.note) != null && S.condition || (ie = F.note) != null && ie.conditionColumn), P = !!((X = F.note) != null && X.storedCalc);
      switch (V) {
        case "db":
          return J === "db_direct" || J === "db_formatted";
        case "calculated":
          return J === "calculated";
        case "storedCalc":
          return P;
        case "static":
          return J === "static";
        case "conditional":
          return te;
        case "action":
          return F.elementType === "action";
        case "form":
          return F.elementType === "form";
        case "other":
          return J === "other" || !J && !F.elementType && !!((le = F.note) != null && le.text);
        default:
          return !0;
      }
    }
    function _e(j) {
      let V = j.parentElement;
      for (; V && V !== document.body; ) {
        const k = getComputedStyle(V);
        if (k.display === "none" || (k.overflow === "hidden" || k.overflowY === "hidden") && V.clientHeight === 0) return !0;
        V = V.parentElement;
      }
      return !1;
    }
    function Be() {
      var J, te;
      const j = document.querySelector("dialog[open]");
      if (j) return j;
      const V = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
      for (const P of V) {
        const B = P.getBoundingClientRect();
        if (B.width > 0 && B.height > 0) return P;
      }
      const k = '.v-overlay--active .v-overlay__content, .el-dialog__wrapper:not([style*="display: none"]) .el-dialog, .modal.show .modal-dialog, .modal-overlay[style*="display: block"], .v-dialog--active';
      try {
        const P = document.querySelector(k);
        if (P) {
          const B = P.getBoundingClientRect();
          if (B.width > 0 && B.height > 0) return P;
        }
      } catch {
      }
      const F = document.querySelectorAll(".fixed.inset-0, .fixed.inset-x-0.inset-y-0, [data-modal], [data-overlay]");
      for (const P of F) {
        if (((J = P.dataset) == null ? void 0 : J.devInspector) !== void 0) continue;
        const B = getComputedStyle(P), C = parseInt(B.zIndex, 10);
        if (isNaN(C) || C < 40) continue;
        const S = P.getBoundingClientRect();
        if (S.width >= window.innerWidth * 0.9 && S.height >= window.innerHeight * 0.9)
          return P;
      }
      for (const P of document.body.children) {
        if (((te = P.dataset) == null ? void 0 : te.devInspector) !== void 0) continue;
        const B = getComputedStyle(P);
        if (B.position !== "fixed") continue;
        const C = parseInt(B.zIndex, 10);
        if (isNaN(C) || C < 40) continue;
        const S = P.getBoundingClientRect();
        if (S.width >= window.innerWidth * 0.9 && S.height >= window.innerHeight * 0.9)
          return P;
      }
      return null;
    }
    function U(j, V) {
      return V.contains(j);
    }
    const qe = q(() => {
      var te, P, B, C, S, ie, X, le, De, fe, He, st, vt, yt, it, at, Ne, dt, ut, et, xe, rt, Le, Se, pt, gt, tt, Pt, _t, Kt, mt, ft, pe, kt, Qt, Ht, Nt, Ye, Re, Ge, Bt, Q, he, ve, z, ze, Xe;
      const j = ue.value, V = oe.value;
      ce.value;
      const k = [];
      if (!g.isEnabled) return k;
      const F = Be(), J = g.getConfiguredSelectors();
      for (const Ke of J)
        try {
          const Me = document.querySelector(Ke);
          if (Me) {
            if (F && !U(Me, F)) continue;
            const ye = Me.getBoundingClientRect();
            if (ye.width === 0 || ye.height === 0 || !Me.offsetParent && Me.tagName !== "BODY" && getComputedStyle(Me).position !== "fixed" || _e(Me)) continue;
            const u = g.getElementConfig(Ke), Mt = ((te = u == null ? void 0 : u.sourceBinding) == null ? void 0 : te.isStatic) || !1, St = ((P = u == null ? void 0 : u.sourceBinding) == null ? void 0 : P.type) || "";
            let ne = "", Te = "";
            const bt = (B = u == null ? void 0 : u.note) == null ? void 0 : B.displayType, Ve = [];
            if ((C = u == null ? void 0 : u.note) != null && C.sampleValue ? Ve.push(`例: ${u.note.sampleValue}${u.note.unit ? u.note.unit : ""}`) : (S = u == null ? void 0 : u.note) != null && S.unit && Ve.push(`単位: ${u.note.unit}`), (ie = u == null ? void 0 : u.note) != null && ie.decimalHandling) {
              const O = { round: "四捨五入", floor: "切り捨て", ceil: "切り上げ", decimal_1: "小数第1位", decimal_2: "小数第2位", integer: "整数" };
              Ve.push(O[u.note.decimalHandling] || u.note.decimalHandling);
            }
            (X = u == null ? void 0 : u.note) != null && X.nullDisplay && Ve.push(`NULL時: ${u.note.nullDisplay}`), (le = u == null ? void 0 : u.note) != null && le.displayFormat && Ve.push(u.note.displayFormat);
            const $t = Ve.length > 0 ? `
${Ve.join(" / ")}` : "", We = !!((De = u == null ? void 0 : u.note) != null && De.condition || (fe = u == null ? void 0 : u.note) != null && fe.conditionColumn);
            let Ze = "";
            if (We) {
              const O = { hidden: "非表示", disabled: "無効化", different_value: "別の値", empty: "空欄" }, Ie = [];
              (He = u == null ? void 0 : u.note) != null && He.condition && Ie.push(u.note.condition), (st = u == null ? void 0 : u.note) != null && st.conditionColumn && Ie.push(`判定: ${u.note.conditionColumn}`), (vt = u == null ? void 0 : u.note) != null && vt.hiddenBehavior && Ie.push(`不一致時: ${O[u.note.hiddenBehavior] || u.note.hiddenBehavior}`), (yt = u == null ? void 0 : u.note) != null && yt.hiddenNote && Ie.push(`→ ${u.note.hiddenNote}`), Ze = `
条件: ${Ie.join(" / ")}`;
            }
            const xt = We ? " ⚡" : "";
            if ((u == null ? void 0 : u.elementType) === "action" && (u != null && u.actionInfo)) {
              const O = u.actionInfo;
              O.type === "navigate" ? ne = `遷移: ${O.target || "?"}` : O.type === "api" ? ne = `API: ${O.method || "GET"} ${O.target || "?"}` : O.type === "modal" ? ne = `モーダル: ${O.target || "?"}` : O.type === "emit" ? ne = `イベント: ${O.target || "?"}` : O.type === "function" ? ne = `関数: ${O.target || "?"}` : ne = "アクション", Te = (O.description || ne) + ((it = u == null ? void 0 : u.note) != null && it.text ? `
${u.note.text}` : "");
            } else if ((u == null ? void 0 : u.elementType) === "form" && (u != null && u.formInfo)) {
              const O = u.formInfo, Ie = (at = u == null ? void 0 : u.fieldInfoList) != null && at.length ? u.fieldInfoList : u != null && u.fieldInfo ? [u.fieldInfo] : [], Ee = Ie.length > 0 ? Ie.map((ge) => `${ge.table}.${ge.column}`).join(", ") : "", ae = Ie.length > 0 ? `${Ie[0].table}.${Ie[0].column}` : "", ke = ae ? g.getMasterDefinition(ae) : null;
              O.inputType === "select" ? ne = `選択: ${Ee || O.description || "?"}${ke ? ` (${ke.entries.length}件)` : ""}` : O.inputType === "textarea" ? ne = `テキスト: ${Ee || O.description || "?"}` : O.inputType === "checkbox" ? ne = `チェック: ${Ee || O.description || "?"}` : O.inputType === "radio" ? ne = `ラジオ: ${Ee || O.description || "?"}` : ne = `入力: ${Ee || O.description || O.inputType || "?"}`, O.required && (ne += " (必須)");
              const G = [];
              O.description && G.push(O.description), (Ne = O.validation) != null && Ne.length && G.push(`検証: ${O.validation.join(", ")}`), O.placeholder && G.push(`placeholder: ${O.placeholder}`), O.defaultValue && G.push(`初期値: ${O.defaultValue}`), Te = G.join(`
`) + ((dt = u == null ? void 0 : u.note) != null && dt.text ? `
${u.note.text}` : "");
            } else if ((u == null ? void 0 : u.elementType) === "action")
              ne = "アクション", Te = ((ut = u == null ? void 0 : u.note) == null ? void 0 : ut.text) || "";
            else if ((u == null ? void 0 : u.elementType) === "form")
              ne = "フォーム", Te = ((et = u == null ? void 0 : u.note) == null ? void 0 : et.text) || "";
            else if (bt === "db_direct") {
              const O = (xe = u == null ? void 0 : u.fieldInfoList) != null && xe.length ? u.fieldInfoList : u != null && u.fieldInfo ? [u.fieldInfo] : [];
              if (O.length > 0) {
                const Ie = O.map((G) => `${G.table}.${G.column}`).join(", "), Ee = `${O[0].table}.${O[0].column}`, ae = g.getMasterDefinition(Ee), ke = ae ? ` (${ae.entries.length}値)` : "";
                ne = `DB: ${Ie}${ke}${xt}`, Te = O.map((G) => `${G.table}.${G.column}${G.type ? ` (${G.type})` : ""}`).join(`
`) + $t + Ze + ((rt = u == null ? void 0 : u.note) != null && rt.text ? `
${u.note.text}` : "");
              }
            } else if (bt === "db_formatted") {
              const O = (Le = u == null ? void 0 : u.fieldInfoList) != null && Le.length ? u.fieldInfoList : u != null && u.fieldInfo ? [u.fieldInfo] : [];
              if (O.length > 0) {
                const Ie = O.map((G) => `${G.table}.${G.column}`).join(", "), Ee = `${O[0].table}.${O[0].column}`, ae = g.getMasterDefinition(Ee), ke = ae ? ` (${ae.entries.length}値)` : "";
                ne = `DB: ${Ie} (整形)${ke}${xt}`, Te = O.map((G) => `${G.table}.${G.column}`).join(`
`) + ((Se = u == null ? void 0 : u.note) != null && Se.formatDescription ? `
整形: ${u.note.formatDescription}` : "") + $t + Ze + ((pt = u == null ? void 0 : u.note) != null && pt.text ? `
${u.note.text}` : "");
              }
            } else bt === "calculated" ? (ne = "計算値" + ((gt = u == null ? void 0 : u.note) != null && gt.unit ? ` (${u.note.unit})` : "") + xt, Te = (((tt = u == null ? void 0 : u.note) == null ? void 0 : tt.calcDescription) || "計算値") + ((_t = (Pt = u == null ? void 0 : u.note) == null ? void 0 : Pt.calcSources) != null && _t.length ? `
参照: ${u.note.calcSources.join(", ")}` : "") + $t + Ze + ((Kt = u == null ? void 0 : u.note) != null && Kt.text ? `
${u.note.text}` : "")) : bt === "static" ? (ne = "固定" + xt, Te = (((mt = u == null ? void 0 : u.note) == null ? void 0 : mt.text) || "固定文言") + Ze) : bt === "other" ? (ne = "メモ", Te = ((ft = u == null ? void 0 : u.note) == null ? void 0 : ft.text) || "") : (pe = u == null ? void 0 : u.fieldInfoList) != null && pe.length || (kt = u == null ? void 0 : u.fieldInfo) != null && kt.table && ((Qt = u == null ? void 0 : u.fieldInfo) != null && Qt.column) ? (ne = `DB: ${((Ht = u == null ? void 0 : u.fieldInfoList) != null && Ht.length ? u.fieldInfoList : u != null && u.fieldInfo ? [u.fieldInfo] : []).map((Ee) => `${Ee.table}.${Ee.column}`).join(", ")}`, Te = ((Nt = u == null ? void 0 : u.note) == null ? void 0 : Nt.text) || "") : Mt ? (ne = "固定", Te = ((Ye = u == null ? void 0 : u.note) == null ? void 0 : Ye.text) || "固定文言") : St === "v-model" ? (ne = "フォーム", Te = ((Re = u == null ? void 0 : u.note) == null ? void 0 : Re.text) || "") : St === "api" ? (ne = "データ", Te = ((Ge = u == null ? void 0 : u.note) == null ? void 0 : Ge.text) || "") : (Bt = u == null ? void 0 : u.note) != null && Bt.type ? (ne = {
              info: "情報",
              warning: "注意",
              todo: "TODO",
              question: "質問"
            }[u.note.type] || "メモ", Te = ((Q = u == null ? void 0 : u.note) == null ? void 0 : Q.text) || "") : (ne = "メモ", Te = ((he = u == null ? void 0 : u.note) == null ? void 0 : he.text) || "");
            const At = Te || ((ve = u == null ? void 0 : u.note) == null ? void 0 : ve.text) || "", Je = ((z = u == null ? void 0 : u.note) == null ? void 0 : z.type) || "info", Lt = !!((ze = u == null ? void 0 : u.note) != null && ze.text || (Xe = u == null ? void 0 : u.note) != null && Xe.displayType);
            k.push({
              selector: Ke,
              top: `${ye.top + j}px`,
              left: `${ye.left + V}px`,
              width: `${ye.width}px`,
              height: `${ye.height}px`,
              color: Pe(Ke),
              isStatic: Mt,
              label: ne,
              noteText: At,
              noteType: Je,
              hasNote: Lt
            });
          }
        } catch {
        }
      return k;
    }), Ae = q(() => {
      var J;
      const j = ue.value, V = oe.value;
      ce.value;
      const k = [];
      if (!g.isEnabled || g.scanResults.length === 0) return k;
      const F = Be();
      for (const te of g.scanResults)
        try {
          const P = document.querySelector(te.selector);
          if (P) {
            if (F && !U(P, F)) continue;
            const B = P.getBoundingClientRect();
            if (B.width === 0 || B.height === 0 || !P.offsetParent && P.tagName !== "BODY" && getComputedStyle(P).position !== "fixed" || _e(P)) continue;
            k.push({
              selector: te.selector,
              top: `${B.top + j}px`,
              left: `${B.left + V}px`,
              width: `${B.width}px`,
              height: `${B.height}px`,
              isStatic: ((J = te.detected.sourceBinding) == null ? void 0 : J.isStatic) || !1
            });
          }
        } catch {
        }
      return k;
    }), Ue = q(() => {
      var te, P;
      const j = ue.value, V = oe.value;
      ce.value;
      const k = [], F = g.analysisFilter;
      if (F === "none" || !g.isEnabled || g.analysisResults.length === 0) return k;
      const J = Be();
      for (const B of g.analysisResults) {
        if (!B.matched) continue;
        const C = B.element;
        try {
          const S = document.querySelector(B.selector);
          if (!S || J && !U(S, J)) continue;
          const ie = S.getBoundingClientRect();
          if (ie.width === 0 || ie.height === 0 || !S.offsetParent && S.tagName !== "BODY" && getComputedStyle(S).position !== "fixed" || _e(S) || ie.width > window.innerWidth * 0.8 || ie.height > window.innerHeight * 0.5)
            continue;
          const X = S.querySelector("[data-di-binding]") || (S.hasAttribute("data-di-binding") ? S : null);
          let le = "", De = C.binding || "";
          const fe = [...C.tags || []];
          if (X) {
            const Se = X.getAttribute("data-di-db"), pt = X.getAttribute("data-di-binding");
            Se && (le = Se, fe.includes("db") || fe.push("db")), pt && (De = pt);
          }
          !le && C.db && (le = `${C.db.table}.${C.db.column}`, fe.includes("db") || fe.push("db"));
          let He = "";
          C.api && (He = `${C.api.method} ${C.api.endpoint}`, fe.includes("api") || fe.push("api"));
          let st = "";
          if (De) {
            const Se = g.getApiSourceForBinding(De);
            Se && Se.endpoint ? st = `${Se.method || "GET"} ${Se.endpoint}` : Se && Se.composable && (st = Se.composable);
          }
          const vt = (te = C.conditional) == null ? void 0 : te.expression, yt = (P = C.modal) == null ? void 0 : P.target, it = !!le || fe.includes("db"), at = !!He || fe.includes("api"), Ne = fe.includes("form"), dt = fe.includes("button"), ut = fe.includes("link"), et = fe.includes("modal"), xe = fe.includes("conditional"), rt = fe.includes("computed");
          if (F === "db-api") {
            if (!it && !at) continue;
          } else if (F === "form") {
            if (!Ne) continue;
          } else if (F === "button") {
            if (!dt) continue;
          } else if (F === "link") {
            if (!ut) continue;
          } else if (F === "modal") {
            if (!et) continue;
          } else if (F === "conditional") {
            if (!xe) continue;
          } else if (F === "computed") {
            if (!rt) continue;
          } else if (F === "other" && (it || at || Ne || dt || ut || et || xe || rt))
            continue;
          let Le = "other";
          it ? Le = "db" : at ? Le = "api" : Ne ? Le = "form" : dt ? Le = "button" : ut ? Le = "link" : et ? Le = "modal" : xe ? Le = "conditional" : rt && (Le = "computed"), k.push({
            selector: B.selector,
            top: `${ie.top + j}px`,
            left: `${ie.left + V}px`,
            width: `${ie.width}px`,
            height: `${ie.height}px`,
            tags: fe,
            primaryTag: Le,
            text: C.text || De || "",
            dbInfo: le,
            apiInfo: He,
            apiSource: st,
            conditionalExpr: vt,
            modalTarget: yt
          });
        } catch {
        }
      }
      return k;
    }), nt = q(() => {
      const j = ue.value, V = oe.value;
      ce.value;
      const k = [];
      if (!g.isEnabled || !g.showUnannotatedDetection || g.unannotatedElements.length === 0) return k;
      const F = Be();
      for (const J of g.unannotatedElements)
        try {
          const te = document.querySelector(J.selector);
          if (!te || F && !U(te, F)) continue;
          const P = te.getBoundingClientRect();
          if (P.width === 0 || P.height === 0 || !te.offsetParent && te.tagName !== "BODY" && getComputedStyle(te).position !== "fixed" || _e(te)) continue;
          k.push({
            selector: J.selector,
            top: `${P.top + j}px`,
            left: `${P.left + V}px`,
            width: `${P.width}px`,
            height: `${P.height}px`,
            category: J.category,
            text: J.text
          });
        } catch {
        }
      return k;
    });
    function Z(j) {
      if (!g.isPickMode) return;
      if (j.target.closest("[data-dev-inspector]")) {
        E.value = null, R.value = null, g.setHoveredSelector(null);
        return;
      }
      const k = document.elementFromPoint(j.clientX, j.clientY);
      if (!k || k === document.body || k === document.documentElement) {
        E.value = null, R.value = null, g.setHoveredSelector(null);
        return;
      }
      if (k.closest("[data-dev-inspector]"))
        return;
      R.value = k;
      const F = k.getBoundingClientRect();
      E.value = {
        top: `${F.top + window.scrollY}px`,
        left: `${F.left + window.scrollX}px`,
        width: `${F.width}px`,
        height: `${F.height}px`
      };
      const J = g.generateSelector(k);
      g.setHoveredSelector(J);
    }
    function Oe(j) {
      if (!(!g.isPickMode || j.target.closest("[data-dev-inspector]")) && (j.preventDefault(), j.stopPropagation(), R.value)) {
        const k = g.generateSelector(R.value);
        if (g.remapTargetId) {
          g.remapAnnotation(g.remapTargetId, k), g.remapTargetId = null, g.togglePickMode(), g.openPanel();
          return;
        }
        g.startEditing(k), g.togglePickMode();
      }
    }
    function je(j) {
      j.key === "Escape" && g.isPickMode && (g.remapTargetId = null, g.togglePickMode());
    }
    function $e() {
      ue.value = window.scrollY, oe.value = window.scrollX, ce.value++;
    }
    let re = null;
    return Ol(() => {
      window.addEventListener("mousemove", Z, !0), window.addEventListener("click", Oe, !0), window.addEventListener("keydown", je), window.addEventListener("scroll", $e), window.addEventListener("resize", $e);
      let j = null;
      re = new MutationObserver(() => {
        j && clearTimeout(j), j = setTimeout(() => {
          ce.value++;
        }, 100);
      }), re.observe(document.body, { childList: !0, subtree: !0 });
    }), jl(() => {
      window.removeEventListener("mousemove", Z, !0), window.removeEventListener("click", Oe, !0), window.removeEventListener("keydown", je), window.removeEventListener("scroll", $e), window.removeEventListener("resize", $e), re == null || re.disconnect();
    }), ll(() => g.isPickMode, (j) => {
      j || (E.value = null, R.value = null);
    }), (j, V) => (n(), ct(Vt, { to: a(r) }, [
      a(g).isInitializing ? (n(), i("div", hp, [...V[1] || (V[1] = [
        e("div", { class: "di-loading-content" }, [
          e("div", { class: "di-loading-spinner" }),
          e("span", { class: "di-loading-text" }, "Developer Mode 起動中...")
        ], -1)
      ])])) : p("", !0),
      a(g).isPickMode && E.value ? (n(), i("div", {
        key: 1,
        "data-dev-inspector": "",
        class: "di-highlight",
        style: ot({
          top: E.value.top,
          left: E.value.left,
          width: E.value.width,
          height: E.value.height
        })
      }, [
        e("div", yp, v(a(g).hoveredSelector), 1)
      ], 4)) : p("", !0),
      a(g).isPickMode ? (n(), i("div", {
        key: 2,
        "data-dev-inspector": "",
        class: "di-pick-banner",
        style: ot(a(g).remapTargetId ? { background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)" } : {})
      }, [
        e("span", null, v(a(g).remapTargetId ? "新しい要素をクリックして再設定" : "要素をクリックしてメモを追加"), 1),
        V[2] || (V[2] = e("kbd", null, "ESC", -1)),
        V[3] || (V[3] = e("span", { class: "di-pick-hint" }, "でキャンセル", -1))
      ], 4)) : p("", !0),
      a(g).isEnabled && !a(g).isPickMode && !a(g).editingElementId ? (n(!0), i(T, { key: 3 }, D(qe.value, (k) => b((n(), i("div", {
        key: k.selector,
        "data-dev-inspector": "",
        class: L([
          k.hasNote ? "di-note-highlight" : "di-annotation-box",
          { "di-element-hovered-pulse": a(g).hoveredSelector === k.selector }
        ]),
        style: ot({
          top: k.top,
          left: k.left,
          width: k.width,
          height: k.height,
          borderColor: (k.hasNote, k.color),
          backgroundColor: a(g).hoveredSelector === k.selector ? k.color + "30" : k.color + (k.hasNote ? "18" : "15")
        }),
        onClick: (F) => a(g).startEditing(k.selector)
      }, [
        k.hasNote ? (n(), i("div", kp, [
          e("span", {
            class: "di-note-indicator",
            style: ot({ backgroundColor: k.color })
          }, null, 4),
          e("div", {
            class: "di-annotation-label",
            style: ot({ backgroundColor: k.color })
          }, v(k.label), 5)
        ])) : (n(), i("div", {
          key: 1,
          class: "di-annotation-label",
          style: ot({ backgroundColor: k.color })
        }, v(k.label), 5))
      ], 14, gp)), [
        [Jt, !k.hasNote || a(g).showNoteHighlights && Ce(k.selector)]
      ])), 128)) : p("", !0),
      a(g).isEnabled && !a(g).editingElementId && Ae.value.length > 0 && a(g).analysisResults.length === 0 ? (n(), i(T, { key: 4 }, [
        (n(!0), i(T, null, D(Ae.value, (k) => (n(), i("div", {
          key: "scan-" + k.selector,
          "data-dev-inspector": "",
          class: L(["di-scan-highlight", { "di-scan-static": k.isStatic }]),
          style: ot({
            top: k.top,
            left: k.left,
            width: k.width,
            height: k.height
          }),
          onClick: (F) => a(g).startEditing(k.selector)
        }, [
          e("div", {
            class: L(["di-scan-label", { "di-scan-label-static": k.isStatic }])
          }, v(k.isStatic ? "固定文言" : "動的データ"), 3)
        ], 14, xp))), 128)),
        e("div", wp, [
          e("span", null, v(Ae.value.length) + "件の要素を検出", 1),
          e("button", {
            onClick: V[0] || (V[0] = (k) => a(g).clearScanResults()),
            class: "di-scan-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : p("", !0),
      a(g).isEnabled && !a(g).editingElementId && Ue.value.length > 0 ? (n(), i(T, { key: 5 }, [
        (n(!0), i(T, null, D(Ue.value, (k) => (n(), i("div", {
          key: "analysis-" + k.selector,
          "data-dev-inspector": "",
          class: L(["di-analysis-highlight", "di-analysis-" + k.primaryTag]),
          style: ot({
            top: k.top,
            left: k.left,
            width: k.width,
            height: k.height
          }),
          onClick: (F) => a(g).startEditing(k.selector)
        }, [
          e("div", {
            class: L(["di-analysis-label", "di-analysis-label-" + k.primaryTag])
          }, [
            e("span", _p, v(me(k.primaryTag)), 1),
            k.tags.length > 1 ? (n(), i("span", $p, "+" + v(k.tags.length - 1), 1)) : p("", !0),
            k.dbInfo ? (n(), i("span", Tp, v(k.dbInfo), 1)) : p("", !0),
            k.apiSource ? (n(), i("span", Ip, "← " + v(k.apiSource), 1)) : p("", !0),
            k.conditionalExpr ? (n(), i("span", Mp, v(k.conditionalExpr), 1)) : p("", !0),
            e("button", {
              class: "di-analysis-delete",
              onClick: N((F) => a(g).removeAnalysisResult(k.selector), ["stop"]),
              title: "この要素を非表示"
            }, "×", 8, Sp)
          ], 2),
          k.text && k.text.length < 30 ? (n(), i("div", Up, v(k.text), 1)) : p("", !0)
        ], 14, Cp))), 128)),
        e("div", Dp, [
          e("span", null, "📊 分析データ: " + v(Ue.value.length) + "件の要素", 1)
        ])
      ], 64)) : p("", !0),
      a(g).isEnabled && !a(g).isPickMode && !a(g).editingElementId && nt.value.length > 0 ? (n(!0), i(T, { key: 6 }, D(nt.value, (k) => (n(), i("div", {
        key: "unannotated-" + k.selector,
        "data-dev-inspector": "",
        class: L(["di-unannotated-highlight", {
          "di-unannotated-hovered": a(g).hoveredUnannotatedSelector === k.selector,
          ["di-unannotated-hovered-" + k.category]: a(g).hoveredUnannotatedSelector === k.selector
        }]),
        style: ot({
          top: k.top,
          left: k.left,
          width: k.width,
          height: k.height
        }),
        onClick: (F) => a(g).quickAnnotate(k.selector, k.category === "form" ? "form" : k.category === "action" ? "action" : "datasource")
      }, [
        e("div", {
          class: L(["di-unannotated-label", { ["di-unannotated-label-" + k.category]: a(g).hoveredUnannotatedSelector === k.selector }])
        }, [
          e("span", null, v(k.category === "binding" ? "DB" : k.category === "form" ? "Form" : "Act"), 1),
          k.text ? (n(), i("span", Ep, v(k.text), 1)) : p("", !0)
        ], 2)
      ], 14, Vp))), 128)) : p("", !0)
    ], 8, ["to"]));
  }
}), Bp = /* @__PURE__ */ pl(Pp, [["__scopeId", "data-v-07ca574d"]]), Ap = { class: "di-editor-modal" }, Lp = { class: "di-editor-header" }, Fp = { class: "di-header-actions" }, Op = { class: "di-path-badge" }, jp = { class: "di-editor-content" }, Hp = { class: "di-form-group" }, qp = { class: "di-form-group" }, Rp = { class: "di-form-section" }, zp = { class: "di-form-section-header" }, Kp = { class: "di-api-header-actions" }, Yp = { class: "di-dropdown-wrapper" }, Gp = {
  key: 1,
  class: "di-suggestion-dropdown"
}, Xp = {
  key: 0,
  class: "di-suggestion-actions"
}, Wp = ["onMousedown", "disabled"], Zp = { class: "di-suggestion-endpoint" }, Jp = {
  key: 0,
  class: "di-suggestion-timing"
}, Qp = {
  key: 1,
  class: "di-suggestion-empty"
}, Np = {
  key: 0,
  class: "di-suggestion-banner"
}, e1 = {
  key: 1,
  class: "di-suggestion-banner di-suggestion-banner-empty"
}, t1 = {
  key: 2,
  class: "di-empty-hint"
}, l1 = { class: "di-api-entry-row" }, o1 = ["onUpdate:modelValue"], n1 = ["value"], s1 = ["onUpdate:modelValue"], i1 = ["onClick"], a1 = { class: "di-api-entry-row2" }, d1 = ["onUpdate:modelValue"], u1 = ["onUpdate:modelValue"], r1 = ["value"], c1 = { class: "di-form-section" }, v1 = { class: "di-auth-row" }, p1 = {
  key: 0,
  class: "di-auth-details"
}, m1 = { class: "di-form-group" }, f1 = { class: "di-form-group" }, b1 = { class: "di-form-group" }, h1 = { class: "di-form-group" }, y1 = { class: "di-editor-footer" }, g1 = { class: "di-editor-actions" }, k1 = ["disabled"], x1 = /* @__PURE__ */ ol({
  __name: "DevScreenEditor",
  setup(ee) {
    const g = nl(), r = vl("teleportTarget", "body"), E = h(""), R = h(""), ue = h([]), oe = h(!1), ce = h(""), be = h(""), Y = h(""), me = h(""), Pe = h(!1), Ce = h([]), _e = h(!1), Be = q(() => typeof window < "u" ? window.location.pathname : "/");
    ll(() => g.editingScreen, (B) => {
      B && U();
    });
    function U() {
      var C, S, ie, X;
      const B = g.getScreenConfig();
      B ? (E.value = B.name, R.value = B.description || "", ue.value = B.apis.map((le) => ({ ...le })), oe.value = ((C = B.auth) == null ? void 0 : C.required) || !1, ce.value = ((ie = (S = B.auth) == null ? void 0 : S.roles) == null ? void 0 : ie.join(", ")) || "", be.value = ((X = B.auth) == null ? void 0 : X.description) || "", Y.value = B.figmaUrl || "", me.value = B.notes || "") : qe();
    }
    function qe() {
      E.value = "", R.value = "", ue.value = [], oe.value = !1, ce.value = "", be.value = "", Y.value = "", me.value = "";
    }
    function Ae() {
      g.editingScreen = !1, qe();
    }
    function Ue() {
      ue.value.push({
        method: "GET",
        endpoint: "",
        description: "",
        loadTiming: "onMount"
      });
    }
    function nt(B) {
      ue.value.splice(B, 1);
    }
    function Z() {
      if (!E.value.trim()) return;
      const B = {
        path: Be.value,
        name: E.value.trim(),
        description: R.value.trim() || void 0,
        apis: ue.value.filter((C) => C.endpoint.trim()),
        auth: oe.value || ce.value.trim() ? {
          required: oe.value,
          roles: ce.value.trim() ? ce.value.split(",").map((C) => C.trim()).filter(Boolean) : void 0,
          description: be.value.trim() || void 0
        } : void 0,
        figmaUrl: Y.value.trim() || void 0,
        notes: me.value.trim() || void 0,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      g.setScreenConfig(B), Ae();
    }
    function Oe() {
      g.deleteScreenConfig(Be.value), Ae();
    }
    const je = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, $e = {
      onMount: "読込時",
      action: "アクション",
      conditional: "条件付き"
    };
    function re() {
      Ce.value = g.suggestScreenApis(), Pe.value = !0;
    }
    function j(B) {
      return ue.value.some(
        (C) => C.method === B.method && C.endpoint === B.endpoint
      );
    }
    const V = q(() => Ce.value.filter((B) => !j(B)));
    function k(B) {
      j(B) || ue.value.push({ ...B });
    }
    function F() {
      for (const B of V.value)
        ue.value.push({ ...B });
    }
    function J() {
      setTimeout(() => {
        _e.value = !1;
      }, 150);
    }
    const te = ["GET", "POST", "PUT", "DELETE", "PATCH"], P = [
      { value: "onMount", label: "画面読込時" },
      { value: "action", label: "アクション時" },
      { value: "conditional", label: "条件付き" }
    ];
    return (B, C) => (n(), ct(Vt, { to: a(r) }, [
      a(g).editingScreen ? (n(), i("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: N(Ae, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", Ap, [
          e("div", Lp, [
            C[9] || (C[9] = e("h3", null, "画面情報を編集", -1)),
            e("div", Fp, [
              e("span", Op, v(Be.value), 1),
              e("button", {
                onClick: Ae,
                class: "di-editor-close"
              }, [
                I(a(It), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          e("div", jp, [
            e("div", Hp, [
              C[10] || (C[10] = e("label", { class: "di-form-label" }, "画面名 *", -1)),
              b(e("input", {
                "onUpdate:modelValue": C[0] || (C[0] = (S) => E.value = S),
                type: "text",
                placeholder: "ユーザー詳細",
                class: "di-input"
              }, null, 512), [
                [w, E.value]
              ])
            ]),
            e("div", qp, [
              C[11] || (C[11] = e("label", { class: "di-form-label" }, "画面の説明", -1)),
              b(e("textarea", {
                "onUpdate:modelValue": C[1] || (C[1] = (S) => R.value = S),
                rows: "2",
                placeholder: "この画面の概要...",
                class: "di-textarea"
              }, null, 512), [
                [w, R.value]
              ])
            ]),
            e("div", Rp, [
              e("div", zp, [
                C[15] || (C[15] = e("label", { class: "di-form-label" }, "API一覧", -1)),
                e("div", Kp, [
                  e("button", {
                    onClick: re,
                    class: "di-btn-suggest",
                    title: "要素情報からAPI推定"
                  }, [
                    I(a(cl), { style: { width: "13px", height: "13px" } }),
                    C[12] || (C[12] = H(" 自動推定 ", -1))
                  ]),
                  e("div", Yp, [
                    Ce.value.length > 0 ? (n(), i("button", {
                      key: 0,
                      onClick: C[2] || (C[2] = (S) => _e.value = !_e.value),
                      onBlur: C[3] || (C[3] = (S) => J()),
                      class: "di-btn-dropdown",
                      title: "推定結果から選択"
                    }, [
                      I(a(yl), { style: { width: "13px", height: "13px" } }),
                      C[13] || (C[13] = H(" 候補から選択 ", -1))
                    ], 32)) : p("", !0),
                    _e.value && Ce.value.length > 0 ? (n(), i("div", Gp, [
                      V.value.length > 0 ? (n(), i("div", Xp, [
                        e("button", {
                          onMousedown: N(F, ["prevent"]),
                          class: "di-suggestion-add-all"
                        }, " すべて追加 (" + v(V.value.length) + ") ", 33)
                      ])) : p("", !0),
                      (n(!0), i(T, null, D(Ce.value, (S, ie) => (n(), i("button", {
                        key: ie,
                        onMousedown: N((X) => k(S), ["prevent"]),
                        class: L(["di-suggestion-item", { "di-suggestion-added": j(S) }]),
                        disabled: j(S)
                      }, [
                        e("span", {
                          class: "di-suggestion-method",
                          style: ot({ backgroundColor: je[S.method] + "20", color: je[S.method] })
                        }, v(S.method), 5),
                        e("code", Zp, v(S.endpoint), 1),
                        S.loadTiming ? (n(), i("span", Jp, v($e[S.loadTiming] || S.loadTiming), 1)) : p("", !0),
                        j(S) ? (n(), ct(a(go), {
                          key: 1,
                          style: { width: "12px", height: "12px", color: "#10b981", "flex-shrink": "0" }
                        })) : p("", !0)
                      ], 42, Wp))), 128)),
                      Ce.value.length === 0 ? (n(), i("div", Qp, " 推定結果がありません ")) : p("", !0)
                    ])) : p("", !0)
                  ]),
                  e("button", {
                    onClick: Ue,
                    class: "di-btn-add"
                  }, [
                    I(a(Rt), { style: { width: "14px", height: "14px" } }),
                    C[14] || (C[14] = H(" 手動追加 ", -1))
                  ])
                ])
              ]),
              Pe.value && Ce.value.length > 0 && V.value.length > 0 ? (n(), i("div", Np, [
                I(a(cl), { style: { width: "13px", height: "13px", color: "#f59e0b", "flex-shrink": "0" } }),
                e("span", null, v(Ce.value.length) + "件のAPIを推定しました", 1),
                e("button", {
                  onMousedown: N(F, ["prevent"]),
                  class: "di-suggestion-banner-btn"
                }, "すべて追加", 32)
              ])) : Pe.value && Ce.value.length === 0 ? (n(), i("div", e1, [...C[16] || (C[16] = [
                e("span", null, "要素のDB情報からAPIを推定できませんでした。要素にDB情報を登録してください。", -1)
              ])])) : p("", !0),
              ue.value.length === 0 && !Pe.value ? (n(), i("div", t1, " APIが未登録です。「自動推定」で要素情報からAPIを推定できます。 ")) : p("", !0),
              (n(!0), i(T, null, D(ue.value, (S, ie) => (n(), i("div", {
                key: ie,
                class: "di-api-entry"
              }, [
                e("div", l1, [
                  b(e("select", {
                    "onUpdate:modelValue": (X) => S.method = X,
                    class: "di-select di-select-method"
                  }, [
                    (n(), i(T, null, D(te, (X) => e("option", {
                      key: X,
                      value: X
                    }, v(X), 9, n1)), 64))
                  ], 8, o1), [
                    [we, S.method]
                  ]),
                  b(e("input", {
                    "onUpdate:modelValue": (X) => S.endpoint = X,
                    type: "text",
                    placeholder: "/api/users/:id",
                    class: "di-input di-input-endpoint"
                  }, null, 8, s1), [
                    [w, S.endpoint]
                  ]),
                  e("button", {
                    onClick: (X) => nt(ie),
                    class: "di-btn-remove"
                  }, [
                    I(a(So), { style: { width: "14px", height: "14px" } })
                  ], 8, i1)
                ]),
                e("div", a1, [
                  b(e("input", {
                    "onUpdate:modelValue": (X) => S.description = X,
                    type: "text",
                    placeholder: "説明（任意）",
                    class: "di-input di-input-desc"
                  }, null, 8, d1), [
                    [w, S.description]
                  ]),
                  b(e("select", {
                    "onUpdate:modelValue": (X) => S.loadTiming = X,
                    class: "di-select di-select-timing"
                  }, [
                    (n(), i(T, null, D(P, (X) => e("option", {
                      key: X.value,
                      value: X.value
                    }, v(X.label), 9, r1)), 64))
                  ], 8, u1), [
                    [we, S.loadTiming]
                  ])
                ])
              ]))), 128))
            ]),
            e("div", c1, [
              C[20] || (C[20] = e("label", { class: "di-form-label" }, "認証設定", -1)),
              e("div", v1, [
                e("button", {
                  onClick: C[4] || (C[4] = (S) => oe.value = !oe.value),
                  class: L(["di-toggle-btn", { active: oe.value }])
                }, [
                  e("span", {
                    class: L(["di-toggle-knob", { active: oe.value }])
                  }, null, 2)
                ], 2),
                C[17] || (C[17] = e("span", { class: "di-auth-label" }, "ログイン必須", -1))
              ]),
              oe.value ? (n(), i("div", p1, [
                e("div", m1, [
                  C[18] || (C[18] = e("label", { class: "di-form-label" }, "必要ロール（カンマ区切り）", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": C[5] || (C[5] = (S) => ce.value = S),
                    type: "text",
                    placeholder: "admin, manager",
                    class: "di-input"
                  }, null, 512), [
                    [w, ce.value]
                  ])
                ]),
                e("div", f1, [
                  C[19] || (C[19] = e("label", { class: "di-form-label" }, "認証メモ", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": C[6] || (C[6] = (S) => be.value = S),
                    type: "text",
                    placeholder: "自分のデータのみ閲覧可",
                    class: "di-input"
                  }, null, 512), [
                    [w, be.value]
                  ])
                ])
              ])) : p("", !0)
            ]),
            e("div", b1, [
              C[21] || (C[21] = e("label", { class: "di-form-label" }, "Figma URL", -1)),
              b(e("input", {
                "onUpdate:modelValue": C[7] || (C[7] = (S) => Y.value = S),
                type: "text",
                placeholder: "https://www.figma.com/design/...",
                class: "di-input"
              }, null, 512), [
                [w, Y.value]
              ])
            ]),
            e("div", h1, [
              C[22] || (C[22] = e("label", { class: "di-form-label" }, "メモ", -1)),
              b(e("textarea", {
                "onUpdate:modelValue": C[8] || (C[8] = (S) => me.value = S),
                rows: "3",
                placeholder: "この画面に関するメモ...",
                class: "di-textarea"
              }, null, 512), [
                [w, me.value]
              ])
            ])
          ]),
          e("div", y1, [
            e("button", {
              onClick: Oe,
              class: "di-btn-delete"
            }, [
              I(a(tl), { style: { width: "14px", height: "14px" } }),
              C[23] || (C[23] = H(" 削除 ", -1))
            ]),
            e("div", g1, [
              e("button", {
                onClick: Ae,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: Z,
                class: "di-btn-save",
                disabled: !E.value.trim()
              }, [
                I(a(ql), { style: { width: "14px", height: "14px" } }),
                C[24] || (C[24] = H(" 保存 ", -1))
              ], 8, k1)
            ])
          ])
        ])
      ])) : p("", !0)
    ], 8, ["to"]));
  }
}), w1 = /* @__PURE__ */ pl(x1, [["__scopeId", "data-v-f0e1b0be"]]), C1 = {
  key: 0,
  "data-dev-inspector": ""
}, T1 = /* @__PURE__ */ ol({
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
  setup(ee) {
    const g = ee, r = nl();
    function E() {
      r.toggle();
    }
    return Ol(() => {
      r.init({
        storageKey: g.storageKey,
        enabledInProduction: g.enabledInProduction,
        initialAnnotations: g.initialAnnotations
      }), window.addEventListener("dev-inspector-toggle", E);
    }), jl(() => {
      window.removeEventListener("dev-inspector-toggle", E);
    }), (R, ue) => a(r).isAvailable ? (n(), i("div", C1, [
      I(yu),
      I(bp),
      I(w1),
      I(Bp)
    ])) : p("", !0);
  }
});
export {
  bp as D,
  T1 as _,
  yu as a,
  Bp as b,
  w1 as c
};
