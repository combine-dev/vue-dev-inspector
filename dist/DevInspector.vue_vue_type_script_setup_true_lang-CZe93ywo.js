import { h as Ml, defineComponent as ol, inject as vl, ref as h, computed as H, watch as ll, openBlock as n, createElementBlock as i, Fragment as T, createBlock as vt, Teleport as Dt, unref as a, createVNode as I, createCommentVNode as p, createElementVNode as e, normalizeClass as A, toDisplayString as v, withDirectives as b, renderList as S, createTextVNode as j, withModifiers as te, vModelText as w, withKeys as Vt, vShow as Jt, normalizeStyle as nt, vModelSelect as we, resolveDynamicComponent as po, vModelCheckbox as dl, onMounted as Ol, onUnmounted as jl } from "vue";
import { a as nl } from "./useDevInspector-B-Cj4Ejw.js";
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
const mo = (le) => le.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), W = (le, k) => ({ size: r, strokeWidth: D = 2, absoluteStrokeWidth: q, color: J, class: oe, ...ce }, { attrs: be, slots: Y }) => Ml(
  "svg",
  {
    ...ul,
    width: r || ul.width,
    height: r || ul.height,
    stroke: J || ul.stroke,
    "stroke-width": q ? Number(D) * 24 / Number(r) : D,
    ...be,
    class: ["lucide", `lucide-${mo(le)}`],
    ...ce
  },
  [
    ...k.map((me) => Ml(...me)),
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
const Kt = W("DatabaseIcon", [
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
const ql = W("FileSpreadsheetIcon", [
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
const Hl = W("SaveIcon", [
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
const $t = W("XIcon", [
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
async function Ao(le, k, r = {}) {
  var De;
  const D = await import("./xlsx-BopDBbWb.js"), { systemName: q = "System", author: J = "" } = r, oe = /* @__PURE__ */ new Date(), ce = `${oe.getFullYear()}/${oe.getMonth() + 1}/${oe.getDate()}`, be = D.utils.book_new(), Y = [];
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
    (le == null ? void 0 : le.name) || "",
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
    J,
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
    (le == null ? void 0 : le.componentPath) || "",
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
    (le == null ? void 0 : le.figmaUrl) || ""
  ]), Y.push([]), Y.push(["機能概要"]), Y.push([(le == null ? void 0 : le.description) || ""]), Y.push([]), Y.push(["画面レイアウト　figmaURL"]), Y.push([(le == null ? void 0 : le.figmaUrl) || ""]), Y.push([]), le != null && le.apis && le.apis.length > 0 && (Y.push(["API一覧"]), Y.push(["", "メソッド", "", "エンドポイント", "", "", "", "", "", "", "", "説明"]), le.apis.forEach((U) => {
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
  ]), Object.values(k).forEach((U, Ve) => {
    var Oe, Me, ye;
    const Ee = U.id;
    let Pe = "", st = "", Z = "";
    if ((Oe = U.note) != null && Oe.text && (Pe = U.note.text), U.fieldInfo && (Pe += Pe ? `
` : "", Pe += `DB: ${U.fieldInfo.table}.${U.fieldInfo.column}`, U.fieldInfo.type && (Pe += ` (${U.fieldInfo.type})`), U.fieldInfo.description && (Pe += `
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
      const B = [];
      U.links.testPath && B.push(`テスト: ${U.links.testPath}`), U.links.figmaUrl && B.push(`Figma: ${U.links.figmaUrl}`), U.links.githubIssue && B.push(`Issue: ${U.links.githubIssue}`), U.links.githubPr && B.push(`PR: ${U.links.githubPr}`), B.length > 0 && (Z += Z ? `

` : "", Z += B.join(`
`));
    }
    if (U.devMeta) {
      const B = [];
      (Me = U.devMeta.usedStores) != null && Me.length && B.push(`Store: ${U.devMeta.usedStores.join(", ")}`), (ye = U.devMeta.usedComponents) != null && ye.length && B.push(`Components: ${U.devMeta.usedComponents.join(", ")}`), U.devMeta.accessibility && B.push(`A11y: ${U.devMeta.accessibility}`), U.devMeta.responsive && B.push(`Responsive: ${U.devMeta.responsive}`), B.length > 0 && (Z += Z ? `

` : "", Z += `[開発情報]
` + B.join(`
`));
    }
    Y.push([
      "",
      Ve + 1,
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
      st,
      "",
      "",
      "",
      "",
      "",
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
  const Ue = D.utils.aoa_to_sheet(Y);
  Ue["!cols"] = [
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
  ], D.utils.book_append_sheet(be, Ue, "画面設計書");
  const _e = `画面仕様書_${((De = le == null ? void 0 : le.name) == null ? void 0 : De.replace(/[/\\?%*:|"<>]/g, "-")) || "screen"}_${ce.replace(/\//g, "")}.xlsx`;
  return D.writeFile(be, _e), _e;
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
}, Ko = {
  key: 0,
  class: "di-tab-badge"
}, zo = { class: "di-edit-section" }, Go = { class: "di-note-toggle-badge" }, Yo = {
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
}, Fn = ["onDragstart", "onClick", "onMouseenter"], On = { class: "di-element-item-body" }, jn = { class: "di-element-item-label" }, qn = ["onClick"], Hn = {
  key: 1,
  class: "di-tree-children"
}, Rn = {
  key: 0,
  class: "di-rename-row"
}, Kn = ["onKeydown", "onBlur"], zn = ["onClick", "onDragover", "onDragleave", "onDrop"], Gn = { class: "di-tree-icon" }, Yn = { class: "di-count-badge" }, Xn = ["onClick"], Wn = { key: 2 }, Zn = {
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
}, qs = { class: "di-unannotated-summary" }, Hs = { key: 0 }, Rs = { key: 1 }, Ks = { key: 2 }, zs = { class: "di-unannotated-list" }, Gs = ["onMouseenter"], Ys = { class: "di-unannotated-text" }, Xs = ["onClick"], Ws = ["onClick"], Zs = {
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
}, ji = { class: "di-cross-search-page-header" }, qi = {
  key: 0,
  class: "di-cross-search-page-name"
}, Hi = ["onClick"], Ri = { class: "di-cross-search-field" }, Ki = {
  key: 0,
  class: "di-cross-search-context"
}, zi = { class: "di-card di-screen-flow-section" }, Gi = {
  key: 0,
  class: "di-screen-flow-badge"
}, Yi = {
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
}, qa = { class: "di-master-editor-footer" }, Ha = ["disabled"], Ra = { class: "di-section" }, Ka = {
  class: "di-section-header",
  style: { "margin-bottom": "8px" }
}, za = {
  key: 0,
  class: "di-section-badge"
}, Ga = ["onClick"], Ya = { class: "di-batch-item-info" }, Xa = { class: "di-batch-item-name" }, Wa = {
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
}, Fd = ["onKeyup"], Od = ["onKeyup"], jd = ["onClick", "disabled"], qd = ["onClick"], Hd = {
  key: 0,
  class: "di-er-card-relations"
}, Rd = { class: "di-er-rel-type" }, Kd = ["onClick"], zd = { class: "di-er-add-section" }, Gd = { style: { display: "flex", gap: "6px", "flex-wrap": "wrap" } }, Yd = {
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
  setup(le) {
    const k = vl("teleportTarget", "body"), r = nl(), D = h("elements"), q = h(!1), J = h(!1), oe = h(""), ce = h(""), be = h(!1), Y = h(""), me = h(""), Ue = h("has_many"), Ce = h(!1), _e = h(""), De = h(null), U = h(""), Ve = h(""), Ee = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, Pe = H(() => r.currentScreenSpec), st = H(() => r.getScreenConfig()), Z = H(() => {
      var x;
      const u = st.value, t = Pe.value;
      return !u && !t ? null : {
        name: (u == null ? void 0 : u.name) || (t == null ? void 0 : t.name) || "",
        description: (u == null ? void 0 : u.description) || (t == null ? void 0 : t.description) || "",
        componentPath: (u == null ? void 0 : u.componentPath) || (t == null ? void 0 : t.componentPath) || "",
        figmaUrl: (u == null ? void 0 : u.figmaUrl) || (t == null ? void 0 : t.figmaUrl) || "",
        apis: (u == null ? void 0 : u.apis) || ((x = t == null ? void 0 : t.apis) == null ? void 0 : x.map((P) => ({ ...P, loadTiming: void 0 }))) || [],
        auth: (u == null ? void 0 : u.auth) || null,
        notes: (u == null ? void 0 : u.notes) || (t != null && t.notes ? t.notes.join(`
`) : "")
      };
    }), Oe = H(() => Object.keys(r.elementConfigs).length), Me = H(() => {
      const u = typeof window < "u" ? window.location.pathname : "/";
      return Object.entries(r.elementConfigs).filter(([, t]) => !t.pagePath || t.pagePath === u).map(([t, x]) => {
        var s, m, c;
        let P = "";
        return (s = x.note) != null && s.text ? P = x.note.text : x.fieldInfo ? P = `${x.fieldInfo.table}.${x.fieldInfo.column}` : (m = x.actionInfo) != null && m.description ? P = x.actionInfo.description : (c = x.actionInfo) != null && c.type ? (P = { navigate: "画面遷移", api: "API", modal: "モーダル", emit: "イベント", function: "関数", csv_export: "CSV出力", csv_import: "CSV取込", email: "メール送信" }[x.actionInfo.type] || x.actionInfo.type, x.actionInfo.target && (P += ` → ${x.actionInfo.target}`)) : x.formInfo && (P = x.formInfo.label || x.formInfo.inputType || "フォーム"), P || (P = t), { id: t, desc: P, type: x.elementType, isConditional: !!x.isConditional, tabContext: x.tabContext || "", modalName: x.modalName || "", config: x };
      });
    }), ye = H(() => {
      const u = r.noteHighlightFilter, t = r.noteTableFilter;
      let x = Me.value;
      return t !== "all" && (x = x.filter((P) => {
        var c;
        const s = P.config;
        return ((c = s.fieldInfoList) != null && c.length ? s.fieldInfoList : s.fieldInfo ? [s.fieldInfo] : []).some(($) => $.table === t || $.table.startsWith(t + "."));
      })), u === "all" ? x : x.filter((P) => {
        var M, ae, ie, wt, al;
        const s = P.config, m = (M = s.note) == null ? void 0 : M.displayType, c = !!((ae = s.note) != null && ae.condition || (ie = s.note) != null && ie.conditionColumn), $ = !!((wt = s.note) != null && wt.storedCalc);
        switch (u) {
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
    }), B = H(() => ye.value.filter((u) => !u.isConditional && !u.tabContext));
    function E(u) {
      let t = u.elements.length;
      for (const x of Object.values(u.children)) t += E(x);
      return t;
    }
    function g(u, t) {
      const x = {};
      return u.forEach((P) => {
        const s = P[t];
        if (!s) return;
        const m = s.split(">").map(($) => $.trim()).filter(Boolean);
        let c = x;
        for (let $ = 0; $ < m.length; $++) {
          const M = m[$];
          c[M] || (c[M] = { elements: [], children: {} }), $ === m.length - 1 && c[M].elements.push(P), c = c[M].children;
        }
      }), x;
    }
    const O = H(() => g(
      ye.value.filter((u) => u.tabContext && !u.isConditional),
      "tabContext"
    )), ee = H(() => ye.value.filter((u) => u.tabContext && !u.isConditional)), ne = h(!0), G = h(!1), K = h({}), L = H(() => ye.value.filter((u) => u.isConditional)), _ = H(() => ye.value.filter((u) => u.isConditional && u.modalName)), V = H(() => g(_.value, "modalName")), fe = H(() => ye.value.filter((u) => u.isConditional && !u.modalName)), X = h(!1), de = h({}), ue = H(() => Object.values(r.elementConfigs).filter((u) => {
      var t, x;
      return !!((t = u.note) != null && t.text || (x = u.note) != null && x.displayType);
    }).length), qe = H(() => {
      const u = r.noteHighlightFilter;
      return u === "all" ? ue.value : Object.values(r.elementConfigs).filter((t) => {
        var m, c, $, M, ae, ie, wt;
        if (!((m = t.note) != null && m.text || (c = t.note) != null && c.displayType || t.elementType)) return !1;
        const x = ($ = t.note) == null ? void 0 : $.displayType, P = !!((M = t.note) != null && M.condition || (ae = t.note) != null && ae.conditionColumn), s = !!((ie = t.note) != null && ie.storedCalc);
        switch (u) {
          case "db":
            return x === "db_direct" || x === "db_formatted";
          case "calculated":
            return x === "calculated";
          case "storedCalc":
            return s;
          case "static":
            return x === "static";
          case "conditional":
            return P;
          case "action":
            return t.elementType === "action";
          case "form":
            return t.elementType === "form";
          case "other":
            return x === "other" || !x && !t.elementType && !!((wt = t.note) != null && wt.text);
          default:
            return !0;
        }
      }).length;
    }), Xe = H(() => {
      var x;
      const u = /* @__PURE__ */ new Set(), t = typeof window < "u" ? window.location.pathname : "/";
      for (const P of Object.values(r.elementConfigs)) {
        if (P.pagePath && P.pagePath !== t) continue;
        const s = (x = P.fieldInfoList) != null && x.length ? P.fieldInfoList : P.fieldInfo ? [P.fieldInfo] : [];
        for (const m of s)
          m.table && (u.add(m.table), m.table.includes(".") && u.add(m.table.split(".")[0]));
      }
      return Array.from(u).sort();
    });
    function yt() {
      const u = r.exportConfigs();
      navigator.clipboard.writeText(u), q.value = !1;
    }
    function pt() {
      const u = r.exportConfigs(), t = new Blob([u], { type: "application/json" }), x = URL.createObjectURL(t), P = document.createElement("a");
      P.href = x, P.download = "dev-mode-configs.json", P.click(), URL.revokeObjectURL(x), q.value = !1;
    }
    function it() {
      r.downloadAnnotations();
    }
    async function at() {
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
    function dt() {
      try {
        r.importConfigs(oe.value), oe.value = "", ce.value = "", J.value = !1;
      } catch {
        ce.value = "JSONの形式が正しくありません";
      }
    }
    function Qe(u) {
      var s;
      const x = (s = u.target.files) == null ? void 0 : s[0];
      if (!x) return;
      const P = new FileReader();
      P.onload = (m) => {
        var c;
        oe.value = (c = m.target) == null ? void 0 : c.result;
      }, P.readAsText(x);
    }
    function ut() {
      confirm("すべての要素設定を削除しますか？") && r.clearAllConfigs();
    }
    const rt = H(() => {
      if (!r.erFocusTable) return r.erTables;
      const u = r.erRelations.filter((t) => t.fromTable === r.erFocusTable || t.toTable === r.erFocusTable).flatMap((t) => [t.fromTable, t.toTable]);
      return r.erTables.filter((t) => t === r.erFocusTable || u.includes(t));
    });
    function Ne(u) {
      return r.erRelations.filter((t) => t.fromTable === u || t.toTable === u);
    }
    function ge() {
      !Y.value || !me.value || (r.addTableRelation({
        fromTable: Y.value,
        toTable: me.value,
        type: Ue.value
      }), Y.value = "", me.value = "", be.value = !1);
    }
    function Be(u) {
      return r.manualTables.some((t) => t.name === u);
    }
    function Se(u, t) {
      const x = r.manualTables.find((P) => P.name === u);
      return !!(x != null && x.columns.some((P) => P.column === t));
    }
    function ct() {
      const u = _e.value.trim();
      u && (r.addManualTable(u), _e.value = "", Ce.value = !1);
    }
    function Tt(u) {
      r.removeManualTable(u);
    }
    function gt(u) {
      De.value = u, U.value = "", Ve.value = "";
    }
    function et(u) {
      const t = U.value.trim();
      t && (r.addManualColumn(u, t, Ve.value.trim() || void 0), U.value = "", Ve.value = "");
    }
    h("/dev-inspector-analysis.json"), h(!1), h(""), h(0), h(!1);
    const Et = [
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
    const Ct = H(() => r.brokenAnnotations.length);
    ll(() => r.isPanelOpen, (u) => {
      u && r.detectBrokenAnnotations();
    });
    function zt() {
      confirm(`${Ct.value}件の壊れたメモを削除しますか？`) && r.deleteBrokenAnnotations();
    }
    const mt = h(!1), ft = h(null), pe = h({
      table: "",
      column: "",
      name: "",
      columnType: "",
      description: "",
      entries: [],
      transitions: []
    }), kt = H(() => Object.keys(r.masterDefinitions).length), Qt = H(() => {
      const u = Object.values(r.masterDefinitions), t = {};
      for (const x of u)
        t[x.table] || (t[x.table] = []), t[x.table].push(x);
      return t;
    });
    function jt(u) {
      if (u) {
        const t = r.getMasterDefinition(u);
        t && (ft.value = u, pe.value = {
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
      const u = pe.value;
      if (!u.table || !u.column) return;
      const t = `${u.table}.${u.column}`, x = u.transitions.filter((s) => s.from || s.to || s.trigger), P = {
        id: t,
        table: u.table,
        column: u.column,
        name: u.name || u.column,
        columnType: u.columnType || void 0,
        description: u.description || void 0,
        entries: u.entries.filter((s) => s.value || s.label),
        transitions: x.length > 0 ? x : void 0,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      r.setMasterDefinition(P), mt.value = !1;
    }
    function ze() {
      pe.value.entries.push({ value: "", label: "" });
    }
    function He(u) {
      pe.value.entries.splice(u, 1);
    }
    function We() {
      pe.value.transitions.push({ from: "", to: "", trigger: "" });
    }
    function Pt(u) {
      pe.value.transitions.splice(u, 1);
    }
    function Q(u) {
      confirm(`マスタ定義「${u}」を削除しますか？`) && r.deleteMasterDefinition(u);
    }
    const he = h(!1), ve = h(null), R = h({
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
    }), Re = h(""), Ke = h(""), Ae = H(() => Object.keys(r.batchDefinitions).length), Ie = H(() => Object.values(r.batchDefinitions));
    function d(u) {
      if (u) {
        const t = r.getBatchDefinition(u);
        t && (ve.value = u, R.value = {
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
        ve.value = null, R.value = {
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
      Re.value = "", Ke.value = "", he.value = !0;
    }
    function qt() {
      const u = R.value;
      if (!u.name) return;
      const x = {
        id: ve.value || `batch_${u.name.replace(/\s+/g, "_").toLowerCase()}_${Date.now()}`,
        name: u.name,
        schedule: u.schedule || void 0,
        trigger: u.trigger || void 0,
        description: u.description || void 0,
        inputTables: u.inputTables.length > 0 ? u.inputTables : void 0,
        outputTables: u.outputTables.length > 0 ? u.outputTables : void 0,
        steps: u.steps.filter((P) => P.description).map((P, s) => ({ ...P, order: s + 1 })),
        timeout: u.timeout || void 0,
        retryPolicy: u.retryPolicy || void 0,
        notifyOnError: u.notifyOnError || void 0,
        notifyOnComplete: u.notifyOnComplete || void 0,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      r.setBatchDefinition(x), he.value = !1;
    }
    function It() {
      const u = R.value.steps.length + 1;
      R.value.steps.push({ order: u, description: "" });
    }
    function se(u) {
      R.value.steps.splice(u, 1);
    }
    function $e(u) {
      var t;
      confirm(`バッチ定義「${((t = r.getBatchDefinition(u)) == null ? void 0 : t.name) || u}」を削除しますか？`) && r.deleteBatchDefinition(u);
    }
    function bt() {
      const u = Re.value.trim();
      u && !R.value.inputTables.includes(u) && R.value.inputTables.push(u), Re.value = "";
    }
    function tt(u) {
      R.value.inputTables.splice(u, 1);
    }
    function Ge() {
      const u = Ke.value.trim();
      u && !R.value.outputTables.includes(u) && R.value.outputTables.push(u), Ke.value = "";
    }
    function Mt(u) {
      R.value.outputTables.splice(u, 1);
    }
    const je = [
      { value: "column", label: "カラム", placeholder: "users.email, orders..." },
      { value: "api", label: "API", placeholder: "GET /api/users..." },
      { value: "text", label: "テキスト", placeholder: "メモ、説明文で検索..." }
    ], lt = H(() => {
      var u;
      return ((u = je.find((t) => t.value === r.crossSearchMode)) == null ? void 0 : u.placeholder) || "検索...";
    }), Bt = H(() => {
      const u = {};
      for (const t of r.crossSearchResults)
        u[t.pagePath] || (u[t.pagePath] = { pagePath: t.pagePath, pageName: t.pageName, items: [] }), u[t.pagePath].items.push(t);
      return Object.values(u);
    }), At = H(() => Bt.value.length), Ze = H(() => {
      const u = r.unannotatedElements;
      return {
        binding: u.filter((t) => t.category === "binding").length,
        form: u.filter((t) => t.category === "form").length,
        action: u.filter((t) => t.category === "action").length
      };
    });
    function F() {
      r.showUnannotatedDetection ? (r.showUnannotatedDetection = !1, r.unannotatedElements = [], r.hoveredUnannotatedSelector = null) : (r.showUnannotatedDetection = !0, r.detectUnannotatedElements());
    }
    function ke(u) {
      r.unannotatedElements = r.unannotatedElements.filter((t) => t.selector !== u);
    }
    function Le(u) {
      r.hoveredUnannotatedSelector = u;
      try {
        const t = document.querySelector(u);
        if (!t) return;
        const x = t.getBoundingClientRect();
        (x.bottom < 0 || x.top > window.innerHeight) && t.scrollIntoView({ behavior: "smooth", block: "center" });
      } catch {
      }
    }
    function Ye() {
      r.hoveredUnannotatedSelector = null;
    }
    function re(u) {
      r.hoveredSelector = u;
      try {
        const t = document.querySelector(u);
        if (!t) return;
        const x = t.getBoundingClientRect();
        (x.bottom < 0 || x.top > window.innerHeight) && t.scrollIntoView({ behavior: "smooth", block: "center" });
      } catch {
      }
    }
    function N() {
      r.hoveredSelector = null;
    }
    const xe = h(null), Te = h(null);
    function St(u, t) {
      xe.value = t, u.dataTransfer && (u.dataTransfer.effectAllowed = "move", u.dataTransfer.setData("text/plain", t));
    }
    function Lt() {
      xe.value = null, Te.value = null;
    }
    function Je(u, t) {
      u.preventDefault(), u.dataTransfer && (u.dataTransfer.dropEffect = "move"), Te.value = t;
    }
    function Ft(u, t) {
      const x = u.relatedTarget, P = u.currentTarget;
      P && x && P.contains(x) || Te.value === t && (Te.value = null);
    }
    function Ot(u, t) {
      u.preventDefault(), Te.value = null;
      const x = xe.value;
      if (xe.value = null, !(!x || !r.elementConfigs[x])) {
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
    const Ut = h(null), ot = h("");
    function Ht(u, t, x) {
      x.stopPropagation(), Ut.value = u, ot.value = t;
    }
    function xt(u) {
      const t = ot.value.trim();
      if (Ut.value = null, !!t) {
        if (u.startsWith("tab:")) {
          const x = u.slice(4), P = x.split(" > ");
          P[P.length - 1] = t;
          const s = P.join(" > ");
          if (x === s) return;
          for (const [$, M] of Object.entries(r.elementConfigs))
            M.tabContext && (M.tabContext === x ? r.setElementConfig($, { tabContext: s }) : M.tabContext.startsWith(x + " > ") && r.setElementConfig($, { tabContext: s + M.tabContext.slice(x.length) }));
          const m = x.replace(/ > /g, ">"), c = s.replace(/ > /g, ">");
          K.value[m] !== void 0 && (K.value[c] = K.value[m], delete K.value[m]);
        } else if (u.startsWith("modal:")) {
          const x = u.slice(6), P = x.split(" > ");
          P[P.length - 1] = t;
          const s = P.join(" > ");
          if (x === s) return;
          for (const [$, M] of Object.entries(r.elementConfigs))
            M.modalName && (M.modalName === x ? r.setElementConfig($, { modalName: s }) : M.modalName.startsWith(x + " > ") && r.setElementConfig($, { modalName: s + M.modalName.slice(x.length) }));
          const m = x.replace(/ > /g, ">"), c = s.replace(/ > /g, ">");
          de.value[m] !== void 0 && (de.value[c] = de.value[m], delete de.value[m]);
        }
      }
    }
    function ml() {
      Ut.value = null, ot.value = "";
    }
    function Gt(u, t) {
      u.key === "Enter" ? xt(t) : u.key === "Escape" && ml();
    }
    const el = h(null), Yt = h("");
    function ht(u, t) {
      el.value = u, Yt.value = "";
    }
    function _t() {
      const u = Yt.value.trim();
      if (el.value = null, !!u)
        for (const t of fe.value)
          r.setElementConfig(t.id, { modalName: u, isConditional: !0 });
    }
    function Xt() {
      el.value = null, Yt.value = "";
    }
    const sl = H(() => typeof window < "u" ? window.location.pathname : "/"), fl = H(() => {
      const u = r.screenFlowData, t = {};
      for (const x of u.edges) {
        if (!t[x.from]) {
          const P = u.nodes.find((s) => s.path === x.from) || { path: x.from, name: x.from, annotationCount: 0 };
          t[x.from] = { node: P, edges: [] };
        }
        t[x.from].edges.push(x);
      }
      return Object.values(t);
    });
    function il(u) {
      u && r.startEditing(u);
    }
    return (u, t) => {
      var x, P;
      return n(), i(T, null, [
        (n(), vt(Dt, { to: a(k) }, [
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
        (n(), vt(Dt, { to: a(k) }, [
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
                I(a($t), { style: { width: "20px", height: "20px" } })
              ])
            ]),
            e("div", jo, [
              e("button", {
                onClick: t[2] || (t[2] = (s) => D.value = "elements"),
                class: A(["di-tab-btn", { active: D.value === "elements" }])
              }, [
                I(a(Al), { style: { width: "14px", height: "14px" } }),
                t[82] || (t[82] = e("span", null, "要素設定", -1)),
                Oe.value > 0 ? (n(), i("span", qo, v(Oe.value), 1)) : p("", !0)
              ], 2),
              e("button", {
                onClick: t[3] || (t[3] = (s) => D.value = "masters"),
                class: A(["di-tab-btn", { active: D.value === "masters" }])
              }, [
                I(a(Kt), { style: { width: "14px", height: "14px" } }),
                t[83] || (t[83] = e("span", null, "マスタ", -1)),
                kt.value > 0 ? (n(), i("span", Ho, v(kt.value), 1)) : p("", !0)
              ], 2),
              e("button", {
                onClick: t[4] || (t[4] = (s) => D.value = "batches"),
                class: A(["di-tab-btn", { active: D.value === "batches" }])
              }, [
                I(a(Dl), { style: { width: "14px", height: "14px" } }),
                t[84] || (t[84] = e("span", null, "バッチ", -1)),
                Ae.value > 0 ? (n(), i("span", Ro, v(Ae.value), 1)) : p("", !0)
              ], 2),
              e("button", {
                onClick: t[5] || (t[5] = (s) => D.value = "tables"),
                class: A(["di-tab-btn", { active: D.value === "tables" }])
              }, [
                I(a(El), { style: { width: "14px", height: "14px" } }),
                t[85] || (t[85] = e("span", null, "テーブル", -1)),
                a(r).erTables.length > 0 ? (n(), i("span", Ko, v(a(r).erTables.length), 1)) : p("", !0)
              ], 2),
              e("button", {
                onClick: t[6] || (t[6] = (s) => D.value = "export"),
                class: A(["di-tab-btn", { active: D.value === "export" }])
              }, [
                I(a(hl), { style: { width: "14px", height: "14px" } }),
                t[86] || (t[86] = e("span", null, "出力", -1))
              ], 2)
            ]),
            b(e("div", zo, [
              e("button", {
                onClick: t[7] || (t[7] = //@ts-ignore
                (...s) => a(r).togglePickMode && a(r).togglePickMode(...s)),
                class: A(["di-pick-btn", { active: a(r).isPickMode }])
              }, [
                I(a(Bl), { style: { width: "16px", height: "16px" } }),
                e("span", null, v(a(r).isPickMode ? "要素選択中..." : "任意の要素にメモを追加"), 1)
              ], 2),
              ue.value > 0 ? (n(), i("button", {
                key: 0,
                onClick: t[8] || (t[8] = //@ts-ignore
                (...s) => a(r).toggleNoteHighlights && a(r).toggleNoteHighlights(...s)),
                class: A(["di-note-toggle-btn", { active: a(r).showNoteHighlights }])
              }, [
                a(r).showNoteHighlights ? (n(), vt(a(Co), {
                  key: 0,
                  style: { width: "14px", height: "14px" }
                })) : (n(), vt(a(wo), {
                  key: 1,
                  style: { width: "14px", height: "14px" }
                })),
                t[87] || (t[87] = e("span", null, "メモハイライト", -1)),
                e("span", Go, v(a(r).noteHighlightFilter === "all" ? ue.value : `${qe.value}/${ue.value}`), 1)
              ], 2)) : p("", !0),
              ue.value > 0 && a(r).showNoteHighlights ? (n(), i("div", Yo, [
                e("div", Xo, [
                  (n(), i(T, null, S(Et, (s) => e("button", {
                    key: s.value,
                    onClick: (m) => a(r).noteHighlightFilter = s.value,
                    class: A(["di-filter-btn", { active: a(r).noteHighlightFilter === s.value }])
                  }, v(s.label), 11, Wo)), 64))
                ])
              ])) : p("", !0),
              ue.value > 0 && a(r).showNoteHighlights && Xe.value.length > 0 ? (n(), i("div", Zo, [
                t[88] || (t[88] = e("span", { class: "di-filter-label" }, "テーブル:", -1)),
                e("div", Jo, [
                  e("button", {
                    onClick: t[9] || (t[9] = (s) => a(r).noteTableFilter = "all"),
                    class: A(["di-filter-btn", { active: a(r).noteTableFilter === "all" }])
                  }, " すべて ", 2),
                  (n(!0), i(T, null, S(Xe.value, (s) => (n(), i("button", {
                    key: s,
                    onClick: (m) => a(r).noteTableFilter = s,
                    class: A(["di-filter-btn", { active: a(r).noteTableFilter === s }])
                  }, v(s), 11, Qo))), 128))
                ])
              ])) : p("", !0),
              Me.value.length > 0 ? (n(), i("div", No, [
                e("div", en, [
                  I(a(Al), { style: { width: "14px", height: "14px", color: "#94a3b8" } }),
                  t[89] || (t[89] = e("span", null, "登録済み要素", -1)),
                  e("span", tn, [
                    j(v(ye.value.length), 1),
                    ye.value.length !== Me.value.length ? (n(), i("span", ln, " / " + v(Me.value.length), 1)) : p("", !0)
                  ])
                ]),
                e("div", on, [
                  B.value.length > 0 || Te.value === "__page__" ? (n(), i("div", nn, [
                    e("button", {
                      class: A(["di-tree-group-header", { "di-drop-target": Te.value === "__page__" }]),
                      onClick: t[10] || (t[10] = (s) => ne.value = !ne.value),
                      onDragover: t[11] || (t[11] = (s) => Je(s, "__page__")),
                      onDragleave: t[12] || (t[12] = (s) => Ft(s, "__page__")),
                      onDrop: t[13] || (t[13] = (s) => Ot(s, "__page__"))
                    }, [
                      e("span", sn, v(ne.value ? "▼" : "▶"), 1),
                      t[90] || (t[90] = e("span", null, "タブ外", -1)),
                      e("span", an, v(B.value.length), 1)
                    ], 34),
                    ne.value ? (n(), i("div", dn, [
                      (n(!0), i(T, null, S(B.value, (s) => (n(), i("div", {
                        key: s.id,
                        class: A(["di-element-item", { "di-element-item-active": a(r).hoveredSelector === s.id, "di-dragging": xe.value === s.id }]),
                        draggable: "true",
                        onDragstart: (m) => St(m, s.id),
                        onDragend: Lt,
                        onClick: (m) => a(r).startEditing(s.id),
                        onMouseenter: (m) => re(s.id),
                        onMouseleave: N
                      }, [
                        e("span", {
                          class: A(["di-element-type-badge", "di-element-type-" + (s.type || "other")])
                        }, v(s.type === "datasource" ? "DB" : s.type === "action" ? "Act" : s.type === "form" ? "Form" : s.type === "chart" ? "Chart" : "-"), 3),
                        e("div", rn, [
                          e("div", cn, v(s.desc), 1)
                        ]),
                        e("button", {
                          class: "di-element-delete-btn",
                          onClick: te((m) => a(r).deleteElementConfig(s.id), ["stop"]),
                          title: "削除"
                        }, "×", 8, vn)
                      ], 42, un))), 128))
                    ])) : p("", !0)
                  ])) : p("", !0),
                  ee.value.length > 0 || xe.value && !((x = Te.value) != null && x.startsWith("modal:")) && Te.value !== "__modal_unnamed__" ? (n(), i("div", pn, [
                    e("button", {
                      class: "di-tree-group-header",
                      onClick: t[14] || (t[14] = (s) => G.value = !G.value)
                    }, [
                      e("span", mn, v(G.value ? "▼" : "▶"), 1),
                      t[91] || (t[91] = e("span", null, "タブ内", -1)),
                      e("span", fn, v(ee.value.length), 1)
                    ]),
                    G.value ? (n(), i("div", bn, [
                      (n(!0), i(T, null, S(O.value, (s, m) => (n(), i("div", {
                        key: "t1-" + m,
                        class: "di-tree-subgroup"
                      }, [
                        Ut.value === "tab:" + m ? (n(), i("div", hn, [
                          t[92] || (t[92] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                          b(e("input", {
                            class: "di-rename-input",
                            "onUpdate:modelValue": t[15] || (t[15] = (c) => ot.value = c),
                            onKeydown: (c) => Gt(c, "tab:" + m),
                            onBlur: (c) => xt("tab:" + m),
                            ref_for: !0,
                            ref: "renameInputRef",
                            autofocus: ""
                          }, null, 40, yn), [
                            [w, ot.value]
                          ])
                        ])) : (n(), i("button", {
                          key: 1,
                          class: A(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": Te.value === "tab:" + m }]),
                          onClick: (c) => K.value[m] = !K.value[m],
                          onDragover: (c) => Je(c, "tab:" + m),
                          onDragleave: (c) => Ft(c, "tab:" + m),
                          onDrop: (c) => Ot(c, "tab:" + m)
                        }, [
                          e("span", kn, v(K.value[m] ? "▼" : "▶"), 1),
                          t[93] || (t[93] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                          e("span", null, v(m), 1),
                          e("span", xn, v(E(s)), 1),
                          e("span", {
                            class: "di-rename-btn",
                            onClick: (c) => Ht("tab:" + m, String(m), c),
                            title: "名前変更"
                          }, "✏", 8, wn)
                        ], 42, gn)),
                        K.value[m] ? (n(), i("div", Cn, [
                          s.elements.length > 0 ? (n(), i("div", _n, [
                            (n(!0), i(T, null, S(s.elements, (c) => (n(), i("div", {
                              key: c.id,
                              class: A(["di-element-item", { "di-element-item-active": a(r).hoveredSelector === c.id, "di-dragging": xe.value === c.id }]),
                              draggable: "true",
                              onDragstart: ($) => St($, c.id),
                              onDragend: Lt,
                              onClick: ($) => a(r).startEditing(c.id),
                              onMouseenter: ($) => re(c.id),
                              onMouseleave: N
                            }, [
                              e("span", {
                                class: A(["di-element-type-badge", "di-element-type-" + (c.type || "other")])
                              }, v(c.type === "datasource" ? "DB" : c.type === "action" ? "Act" : c.type === "form" ? "Form" : c.type === "chart" ? "Chart" : "-"), 3),
                              e("div", Tn, [
                                e("div", In, v(c.desc), 1)
                              ]),
                              e("button", {
                                class: "di-element-delete-btn",
                                onClick: te(($) => a(r).deleteElementConfig(c.id), ["stop"]),
                                title: "削除"
                              }, "×", 8, Mn)
                            ], 42, $n))), 128))
                          ])) : p("", !0),
                          Object.keys(s.children).length > 0 ? (n(), i("div", Sn, [
                            (n(!0), i(T, null, S(s.children, (c, $) => (n(), i("div", {
                              key: "t2-" + $,
                              class: "di-tree-subgroup"
                            }, [
                              Ut.value === "tab:" + m + " > " + $ ? (n(), i("div", Un, [
                                t[94] || (t[94] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                                b(e("input", {
                                  class: "di-rename-input",
                                  "onUpdate:modelValue": t[16] || (t[16] = (M) => ot.value = M),
                                  onKeydown: (M) => Gt(M, "tab:" + m + " > " + $),
                                  onBlur: (M) => xt("tab:" + m + " > " + $),
                                  autofocus: ""
                                }, null, 40, Dn), [
                                  [w, ot.value]
                                ])
                              ])) : (n(), i("button", {
                                key: 1,
                                class: A(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": Te.value === "tab:" + m + " > " + $ }]),
                                onClick: (M) => K.value[m + ">" + $] = !K.value[m + ">" + $],
                                onDragover: (M) => Je(M, "tab:" + m + " > " + $),
                                onDragleave: (M) => Ft(M, "tab:" + m + " > " + $),
                                onDrop: (M) => Ot(M, "tab:" + m + " > " + $)
                              }, [
                                e("span", En, v(K.value[m + ">" + $] ? "▼" : "▶"), 1),
                                t[95] || (t[95] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                                e("span", null, v($), 1),
                                e("span", Pn, v(E(c)), 1),
                                e("span", {
                                  class: "di-rename-btn",
                                  onClick: (M) => Ht("tab:" + m + " > " + $, String($), M),
                                  title: "名前変更"
                                }, "✏", 8, Bn)
                              ], 42, Vn)),
                              K.value[m + ">" + $] ? (n(), i("div", An, [
                                c.elements.length > 0 ? (n(), i("div", Ln, [
                                  (n(!0), i(T, null, S(c.elements, (M) => (n(), i("div", {
                                    key: M.id,
                                    class: A(["di-element-item", { "di-element-item-active": a(r).hoveredSelector === M.id, "di-dragging": xe.value === M.id }]),
                                    draggable: "true",
                                    onDragstart: (ae) => St(ae, M.id),
                                    onDragend: Lt,
                                    onClick: (ae) => a(r).startEditing(M.id),
                                    onMouseenter: (ae) => re(M.id),
                                    onMouseleave: N
                                  }, [
                                    e("span", {
                                      class: A(["di-element-type-badge", "di-element-type-" + (M.type || "other")])
                                    }, v(M.type === "datasource" ? "DB" : M.type === "action" ? "Act" : M.type === "form" ? "Form" : M.type === "chart" ? "Chart" : "-"), 3),
                                    e("div", On, [
                                      e("div", jn, v(M.desc), 1)
                                    ]),
                                    e("button", {
                                      class: "di-element-delete-btn",
                                      onClick: te((ae) => a(r).deleteElementConfig(M.id), ["stop"]),
                                      title: "削除"
                                    }, "×", 8, qn)
                                  ], 42, Fn))), 128))
                                ])) : p("", !0),
                                Object.keys(c.children).length > 0 ? (n(), i("div", Hn, [
                                  (n(!0), i(T, null, S(c.children, (M, ae) => (n(), i("div", {
                                    key: "t3-" + ae,
                                    class: "di-tree-subgroup"
                                  }, [
                                    Ut.value === "tab:" + m + " > " + $ + " > " + ae ? (n(), i("div", Rn, [
                                      t[96] || (t[96] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                                      b(e("input", {
                                        class: "di-rename-input",
                                        "onUpdate:modelValue": t[17] || (t[17] = (ie) => ot.value = ie),
                                        onKeydown: (ie) => Gt(ie, "tab:" + m + " > " + $ + " > " + ae),
                                        onBlur: (ie) => xt("tab:" + m + " > " + $ + " > " + ae),
                                        autofocus: ""
                                      }, null, 40, Kn), [
                                        [w, ot.value]
                                      ])
                                    ])) : (n(), i("button", {
                                      key: 1,
                                      class: A(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": Te.value === "tab:" + m + " > " + $ + " > " + ae }]),
                                      onClick: (ie) => K.value[m + ">" + $ + ">" + ae] = !K.value[m + ">" + $ + ">" + ae],
                                      onDragover: (ie) => Je(ie, "tab:" + m + " > " + $ + " > " + ae),
                                      onDragleave: (ie) => Ft(ie, "tab:" + m + " > " + $ + " > " + ae),
                                      onDrop: (ie) => Ot(ie, "tab:" + m + " > " + $ + " > " + ae)
                                    }, [
                                      e("span", Gn, v(K.value[m + ">" + $ + ">" + ae] ? "▼" : "▶"), 1),
                                      t[97] || (t[97] = e("span", { class: "di-tree-badge di-tree-badge-tab" }, "T", -1)),
                                      e("span", null, v(ae), 1),
                                      e("span", Yn, v(E(M)), 1),
                                      e("span", {
                                        class: "di-rename-btn",
                                        onClick: (ie) => Ht("tab:" + m + " > " + $ + " > " + ae, String(ae), ie),
                                        title: "名前変更"
                                      }, "✏", 8, Xn)
                                    ], 42, zn)),
                                    K.value[m + ">" + $ + ">" + ae] ? (n(), i("div", Wn, [
                                      M.elements.length > 0 ? (n(), i("div", Zn, [
                                        (n(!0), i(T, null, S(M.elements, (ie) => (n(), i("div", {
                                          key: ie.id,
                                          class: A(["di-element-item", { "di-element-item-active": a(r).hoveredSelector === ie.id, "di-dragging": xe.value === ie.id }]),
                                          draggable: "true",
                                          onDragstart: (wt) => St(wt, ie.id),
                                          onDragend: Lt,
                                          onClick: (wt) => a(r).startEditing(ie.id),
                                          onMouseenter: (wt) => re(ie.id),
                                          onMouseleave: N
                                        }, [
                                          e("span", {
                                            class: A(["di-element-type-badge", "di-element-type-" + (ie.type || "other")])
                                          }, v(ie.type === "datasource" ? "DB" : ie.type === "action" ? "Act" : ie.type === "form" ? "Form" : ie.type === "chart" ? "Chart" : "-"), 3),
                                          e("div", Qn, [
                                            e("div", Nn, v(ie.desc), 1)
                                          ]),
                                          e("button", {
                                            class: "di-element-delete-btn",
                                            onClick: te((wt) => a(r).deleteElementConfig(ie.id), ["stop"]),
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
                  L.value.length > 0 || xe.value && ((P = Te.value) != null && P.startsWith("modal:") || Te.value === "__modal_unnamed__") ? (n(), i("div", ts, [
                    e("button", {
                      class: "di-tree-group-header",
                      onClick: t[18] || (t[18] = (s) => X.value = !X.value)
                    }, [
                      e("span", ls, v(X.value ? "▼" : "▶"), 1),
                      t[98] || (t[98] = e("span", null, "モーダル", -1)),
                      e("span", os, v(L.value.length), 1)
                    ]),
                    X.value ? (n(), i("div", ns, [
                      (n(!0), i(T, null, S(V.value, (s, m) => (n(), i("div", {
                        key: "m1-" + m,
                        class: "di-tree-subgroup"
                      }, [
                        Ut.value === "modal:" + m ? (n(), i("div", ss, [
                          t[99] || (t[99] = e("span", { class: "di-tree-badge di-tree-badge-modal" }, "M", -1)),
                          b(e("input", {
                            class: "di-rename-input",
                            "onUpdate:modelValue": t[19] || (t[19] = (c) => ot.value = c),
                            onKeydown: (c) => Gt(c, "modal:" + m),
                            onBlur: (c) => xt("modal:" + m),
                            autofocus: ""
                          }, null, 40, is), [
                            [w, ot.value]
                          ])
                        ])) : (n(), i("button", {
                          key: 1,
                          class: A(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": Te.value === "modal:" + m }]),
                          onClick: (c) => de.value[String(m)] = !de.value[String(m)],
                          onDragover: (c) => Je(c, "modal:" + m),
                          onDragleave: (c) => Ft(c, "modal:" + m),
                          onDrop: (c) => Ot(c, "modal:" + m)
                        }, [
                          e("span", ds, v(de.value[String(m)] ? "▼" : "▶"), 1),
                          t[100] || (t[100] = e("span", { class: "di-tree-badge di-tree-badge-modal" }, "M", -1)),
                          e("span", null, v(m), 1),
                          e("span", us, v(E(s)), 1),
                          e("span", {
                            class: "di-rename-btn",
                            onClick: (c) => Ht("modal:" + m, String(m), c),
                            title: "名前変更"
                          }, "✏", 8, rs)
                        ], 42, as)),
                        de.value[String(m)] ? (n(), i("div", cs, [
                          s.elements.length > 0 ? (n(), i("div", vs, [
                            (n(!0), i(T, null, S(s.elements, (c) => (n(), i("div", {
                              key: c.id,
                              class: A(["di-element-item", { "di-element-item-active": a(r).hoveredSelector === c.id, "di-dragging": xe.value === c.id }]),
                              draggable: "true",
                              onDragstart: ($) => St($, c.id),
                              onDragend: Lt,
                              onClick: ($) => a(r).startEditing(c.id),
                              onMouseenter: ($) => re(c.id),
                              onMouseleave: N
                            }, [
                              e("span", {
                                class: A(["di-element-type-badge", "di-element-type-" + (c.type || "other")])
                              }, v(c.type === "datasource" ? "DB" : c.type === "action" ? "Act" : c.type === "form" ? "Form" : c.type === "chart" ? "Chart" : "-"), 3),
                              e("div", ms, [
                                e("div", fs, v(c.desc), 1)
                              ]),
                              e("button", {
                                class: "di-element-delete-btn",
                                onClick: te(($) => a(r).deleteElementConfig(c.id), ["stop"]),
                                title: "削除"
                              }, "×", 8, bs)
                            ], 42, ps))), 128))
                          ])) : p("", !0),
                          Object.keys(s.children).length > 0 ? (n(), i("div", hs, [
                            (n(!0), i(T, null, S(s.children, (c, $) => (n(), i("div", {
                              key: "m2-" + $,
                              class: "di-tree-subgroup"
                            }, [
                              Ut.value === "modal:" + m + " > " + $ ? (n(), i("div", ys, [
                                t[101] || (t[101] = e("span", { class: "di-tree-badge di-tree-badge-modal" }, "M", -1)),
                                b(e("input", {
                                  class: "di-rename-input",
                                  "onUpdate:modelValue": t[20] || (t[20] = (M) => ot.value = M),
                                  onKeydown: (M) => Gt(M, "modal:" + m + " > " + $),
                                  onBlur: (M) => xt("modal:" + m + " > " + $),
                                  autofocus: ""
                                }, null, 40, gs), [
                                  [w, ot.value]
                                ])
                              ])) : (n(), i("button", {
                                key: 1,
                                class: A(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": Te.value === "modal:" + m + " > " + $ }]),
                                onClick: (M) => de.value[m + ">" + $] = !de.value[m + ">" + $],
                                onDragover: (M) => Je(M, "modal:" + m + " > " + $),
                                onDragleave: (M) => Ft(M, "modal:" + m + " > " + $),
                                onDrop: (M) => Ot(M, "modal:" + m + " > " + $)
                              }, [
                                e("span", xs, v(de.value[m + ">" + $] ? "▼" : "▶"), 1),
                                t[102] || (t[102] = e("span", { class: "di-tree-badge di-tree-badge-modal" }, "M", -1)),
                                e("span", null, v($), 1),
                                e("span", ws, v(E(c)), 1),
                                e("span", {
                                  class: "di-rename-btn",
                                  onClick: (M) => Ht("modal:" + m + " > " + $, String($), M),
                                  title: "名前変更"
                                }, "✏", 8, Cs)
                              ], 42, ks)),
                              de.value[m + ">" + $] ? (n(), i("div", _s, [
                                c.elements.length > 0 ? (n(), i("div", $s, [
                                  (n(!0), i(T, null, S(c.elements, (M) => (n(), i("div", {
                                    key: M.id,
                                    class: A(["di-element-item", { "di-element-item-active": a(r).hoveredSelector === M.id, "di-dragging": xe.value === M.id }]),
                                    draggable: "true",
                                    onDragstart: (ae) => St(ae, M.id),
                                    onDragend: Lt,
                                    onClick: (ae) => a(r).startEditing(M.id),
                                    onMouseenter: (ae) => re(M.id),
                                    onMouseleave: N
                                  }, [
                                    e("span", {
                                      class: A(["di-element-type-badge", "di-element-type-" + (M.type || "other")])
                                    }, v(M.type === "datasource" ? "DB" : M.type === "action" ? "Act" : M.type === "form" ? "Form" : M.type === "chart" ? "Chart" : "-"), 3),
                                    e("div", Is, [
                                      e("div", Ms, v(M.desc), 1)
                                    ]),
                                    e("button", {
                                      class: "di-element-delete-btn",
                                      onClick: te((ae) => a(r).deleteElementConfig(M.id), ["stop"]),
                                      title: "削除"
                                    }, "×", 8, Ss)
                                  ], 42, Ts))), 128))
                                ])) : p("", !0)
                              ])) : p("", !0)
                            ]))), 128))
                          ])) : p("", !0)
                        ])) : p("", !0)
                      ]))), 128)),
                      fe.value.length > 0 || Te.value === "__modal_unnamed__" ? (n(), i("div", Us, [
                        el.value === "__unnamed__" ? (n(), i("div", Ds, [
                          t[103] || (t[103] = e("span", { class: "di-tree-badge di-tree-badge-modal" }, "M", -1)),
                          b(e("input", {
                            class: "di-rename-input",
                            "onUpdate:modelValue": t[21] || (t[21] = (s) => Yt.value = s),
                            onKeydown: [
                              Vt(_t, ["enter"]),
                              Vt(Xt, ["escape"])
                            ],
                            onBlur: _t,
                            autofocus: ""
                          }, null, 544), [
                            [w, Yt.value]
                          ])
                        ])) : (n(), i("button", {
                          key: 1,
                          class: A(["di-tree-group-header di-tree-subgroup-header", { "di-drop-target": Te.value === "__modal_unnamed__" }]),
                          onClick: t[23] || (t[23] = (s) => de.value.__unnamed = !de.value.__unnamed),
                          onDragover: t[24] || (t[24] = (s) => Je(s, "__modal_unnamed__")),
                          onDragleave: t[25] || (t[25] = (s) => Ft(s, "__modal_unnamed__")),
                          onDrop: t[26] || (t[26] = (s) => Ot(s, "__modal_unnamed__"))
                        }, [
                          e("span", Vs, v(de.value.__unnamed ? "▼" : "▶"), 1),
                          t[104] || (t[104] = e("span", { class: "di-tree-badge di-tree-badge-modal" }, "M", -1)),
                          t[105] || (t[105] = e("span", null, "未分類", -1)),
                          e("span", Es, v(fe.value.length), 1),
                          e("span", {
                            class: "di-rename-btn",
                            onClick: t[22] || (t[22] = te((s) => ht("__unnamed__"), ["stop"])),
                            title: "モーダル名を設定"
                          }, "✏")
                        ], 34)),
                        de.value.__unnamed ? (n(), i("div", Ps, [
                          (n(!0), i(T, null, S(fe.value, (s) => (n(), i("div", {
                            key: s.id,
                            class: A(["di-element-item", { "di-element-item-active": a(r).hoveredSelector === s.id, "di-dragging": xe.value === s.id }]),
                            draggable: "true",
                            onDragstart: (m) => St(m, s.id),
                            onDragend: Lt,
                            onClick: (m) => a(r).startEditing(s.id),
                            onMouseenter: (m) => re(s.id),
                            onMouseleave: N
                          }, [
                            e("span", {
                              class: A(["di-element-type-badge", "di-element-type-" + (s.type || "other")])
                            }, v(s.type === "datasource" ? "DB" : s.type === "action" ? "Act" : s.type === "form" ? "Form" : s.type === "chart" ? "Chart" : "-"), 3),
                            e("div", As, [
                              e("div", Ls, v(s.desc), 1)
                            ]),
                            e("button", {
                              class: "di-element-delete-btn",
                              onClick: te((m) => a(r).deleteElementConfig(s.id), ["stop"]),
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
                onClick: F,
                class: A(["di-unannotated-btn", { active: a(r).showUnannotatedDetection }])
              }, [
                I(a(ko), { style: { width: "14px", height: "14px" } }),
                e("span", null, v(a(r).showUnannotatedDetection ? "未登録検出 ON" : "未登録要素を検出"), 1),
                a(r).unannotatedElements.length > 0 ? (n(), i("span", Os, v(a(r).unannotatedElements.length), 1)) : p("", !0)
              ], 2),
              a(r).showUnannotatedDetection && a(r).unannotatedElements.length > 0 ? (n(), i("div", js, [
                e("div", qs, [
                  j(v(a(r).unannotatedElements.length) + "件検出: ", 1),
                  Ze.value.binding > 0 ? (n(), i("span", Hs, "バインディング " + v(Ze.value.binding), 1)) : p("", !0),
                  Ze.value.form > 0 ? (n(), i("span", Rs, " / フォーム " + v(Ze.value.form), 1)) : p("", !0),
                  Ze.value.action > 0 ? (n(), i("span", Ks, " / アクション " + v(Ze.value.action), 1)) : p("", !0)
                ]),
                e("div", zs, [
                  (n(!0), i(T, null, S(a(r).unannotatedElements, (s) => (n(), i("div", {
                    key: s.selector,
                    class: A(["di-unannotated-item", { "di-unannotated-item-active": a(r).hoveredUnannotatedSelector === s.selector, ["di-unannotated-item-" + s.category]: a(r).hoveredUnannotatedSelector === s.selector }]),
                    onMouseenter: (m) => Le(s.selector),
                    onMouseleave: Ye
                  }, [
                    e("span", {
                      class: A(["di-unannotated-category", "di-unannotated-cat-" + s.category])
                    }, v(s.category === "binding" ? "DB" : s.category === "form" ? "Form" : "Act"), 3),
                    e("span", Ys, v(s.text || s.tagName), 1),
                    e("button", {
                      onClick: (m) => a(r).quickAnnotate(s.selector, s.suggestedType),
                      class: "di-unannotated-register"
                    }, " 登録 ", 8, Xs),
                    e("button", {
                      onClick: (m) => ke(s.selector),
                      class: "di-unannotated-dismiss"
                    }, [
                      I(a($t), { style: { width: "10px", height: "10px" } })
                    ], 8, Ws)
                  ], 42, Gs))), 128))
                ])
              ])) : p("", !0),
              a(r).showUnannotatedDetection && a(r).unannotatedElements.length === 0 ? (n(), i("div", Zs, " 未登録の要素はありません ")) : p("", !0),
              Ct.value > 0 ? (n(), i("div", Js, [
                e("div", Qs, [
                  I(a(bo), { style: { width: "14px", height: "14px", color: "#f59e0b" } }),
                  e("span", null, v(Ct.value) + "件のメモが見つかりません", 1)
                ]),
                t[108] || (t[108] = e("div", { class: "di-broken-desc" }, "コード変更によりセレクタが壊れた可能性があります", -1)),
                e("div", Ns, [
                  (n(!0), i(T, null, S(a(r).brokenAnnotations, (s) => {
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
                          t[106] || (t[106] = j(" 再設定 ", -1))
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
                    onClick: zt,
                    class: "di-broken-delete-btn"
                  }, [
                    I(a(tl), { style: { width: "12px", height: "12px" } }),
                    t[107] || (t[107] = j(" まとめて削除 ", -1))
                  ])
                ])
              ])) : p("", !0),
              p("", !0)
            ], 512), [
              [Jt, D.value === "elements"]
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
                        t[118] || (t[118] = j(" ログイン必須 ", -1))
                      ])) : p("", !0),
                      (n(!0), i(T, null, S(Z.value.auth.roles || [], (s) => (n(), i("span", {
                        key: s,
                        class: "di-auth-badge di-auth-role"
                      }, [
                        I(a(Vo), { style: { width: "11px", height: "11px" } }),
                        j(" " + v(s), 1)
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
                      (n(!0), i(T, null, S(Z.value.apis, (s, m) => (n(), i("div", {
                        key: m,
                        class: "di-api-item"
                      }, [
                        e("span", {
                          class: "di-method-badge",
                          style: nt({ backgroundColor: Ee[s.method] + "20", color: Ee[s.method] })
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
                    j("この画面の仕様情報は"),
                    e("br"),
                    j("まだ登録されていません")
                  ], -1)),
                  e("button", {
                    onClick: t[30] || (t[30] = (s) => a(r).editingScreen = !0),
                    class: "di-screen-register-btn"
                  }, [
                    I(a(Ll), { style: { width: "14px", height: "14px" } }),
                    t[123] || (t[123] = j(" 画面情報を登録 ", -1))
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
                      (n(), i(T, null, S(je, (s) => e("button", {
                        key: s.value,
                        onClick: (m) => a(r).crossSearchMode = s.value,
                        class: A(["di-filter-btn", { active: a(r).crossSearchMode === s.value }])
                      }, v(s.label), 11, Ai)), 64))
                    ]),
                    b(e("input", {
                      "onUpdate:modelValue": t[31] || (t[31] = (s) => a(r).crossSearchQuery = s),
                      type: "text",
                      class: "di-cross-search-input",
                      placeholder: lt.value
                    }, null, 8, Li), [
                      [w, a(r).crossSearchQuery]
                    ]),
                    a(r).crossSearchQuery.trim() ? (n(), i("div", Fi, v(a(r).crossSearchResults.length) + "件 (" + v(At.value) + "画面) ", 1)) : p("", !0),
                    Bt.value.length > 0 ? (n(), i("div", Oi, [
                      (n(!0), i(T, null, S(Bt.value, (s) => (n(), i("div", {
                        key: s.pagePath,
                        class: "di-cross-search-group"
                      }, [
                        e("div", ji, [
                          j(v(s.pagePath) + " ", 1),
                          s.pageName !== s.pagePath ? (n(), i("span", qi, "(" + v(s.pageName) + ")", 1)) : p("", !0)
                        ]),
                        (n(!0), i(T, null, S(s.items, (m, c) => (n(), i("div", {
                          key: c,
                          class: A(["di-cross-search-item", m.elementType ? "di-cross-item-" + m.elementType : ""]),
                          onClick: ($) => m.selector && a(r).startEditing(m.selector)
                        }, [
                          e("span", Ri, v(m.matchedField), 1),
                          m.matchContext ? (n(), i("span", Ki, v(m.matchContext), 1)) : p("", !0)
                        ], 10, Hi))), 128))
                      ]))), 128))
                    ])) : p("", !0)
                  ])
                ]),
                e("div", zi, [
                  e("button", {
                    onClick: t[32] || (t[32] = (s) => a(r).showScreenFlow = !a(r).showScreenFlow),
                    class: A(["di-screen-flow-toggle", { active: a(r).showScreenFlow }])
                  }, [
                    I(a(El), { style: { width: "14px", height: "14px" } }),
                    t[127] || (t[127] = e("span", null, "画面フロー", -1)),
                    a(r).screenFlowData.edges.length > 0 ? (n(), i("span", Gi, v(a(r).screenFlowData.nodes.length) + "画面 / " + v(a(r).screenFlowData.edges.length) + "遷移 ", 1)) : p("", !0)
                  ], 2),
                  a(r).showScreenFlow ? (n(), i("div", Yi, [
                    a(r).screenFlowData.edges.length === 0 ? (n(), i("div", Xi, " navigate型のアクションが登録されていません ")) : p("", !0),
                    (n(!0), i(T, null, S(fl.value, (s) => (n(), i("div", {
                      key: s.node.path,
                      class: "di-flow-group"
                    }, [
                      e("div", {
                        class: A(["di-flow-node", { "di-flow-node-current": s.node.path === sl.value }])
                      }, [
                        e("span", Wi, v(s.node.path), 1),
                        s.node.name !== s.node.path ? (n(), i("span", Zi, "(" + v(s.node.name) + ")", 1)) : p("", !0)
                      ], 2),
                      (n(!0), i(T, null, S(s.edges, (m) => (n(), i("div", {
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
                      (n(!0), i(T, null, S(a(r).screenFlowData.orphanPages, (s) => (n(), i("span", {
                        key: s.path,
                        class: "di-flow-orphan-item"
                      }, v(s.path), 1))), 128))
                    ])) : p("", !0)
                  ])) : p("", !0)
                ])
              ], 512), [
                [Jt, D.value === "elements"]
              ]),
              b(e("div", null, [
                e("div", ta, [
                  e("div", la, [
                    I(a(Kt), { style: { width: "16px", height: "16px", color: "#a78bfa" } }),
                    t[130] || (t[130] = e("span", null, "マスタ定義", -1)),
                    kt.value > 0 ? (n(), i("span", oa, v(kt.value), 1)) : p("", !0),
                    e("button", {
                      onClick: t[33] || (t[33] = (s) => jt()),
                      class: "di-btn-icon",
                      style: { "margin-left": "auto" },
                      title: "新規追加"
                    }, [
                      I(a(Rt), { style: { width: "14px", height: "14px" } })
                    ])
                  ]),
                  kt.value > 0 ? (n(!0), i(T, { key: 0 }, S(Qt.value, (s, m) => (n(), i("div", {
                    key: m,
                    class: "di-master-table-group"
                  }, [
                    e("div", na, v(m), 1),
                    (n(!0), i(T, null, S(s, (c) => (n(), i("div", {
                      key: c.id,
                      class: "di-master-item",
                      onClick: ($) => jt(c.id)
                    }, [
                      e("div", ia, [
                        e("span", aa, "." + v(c.column), 1),
                        c.columnType ? (n(), i("span", da, v(c.columnType), 1)) : p("", !0),
                        e("span", ua, v(c.name), 1)
                      ]),
                      e("div", ra, [
                        (n(!0), i(T, null, S(c.entries.slice(0, 5), ($, M) => (n(), i("span", {
                          key: M,
                          class: "di-master-entry-chip",
                          style: nt($.color ? { borderColor: $.color, color: $.color } : {})
                        }, v($.value) + "=" + v($.label), 5))), 128)),
                        c.entries.length > 5 ? (n(), i("span", ca, "+" + v(c.entries.length - 5), 1)) : p("", !0)
                      ])
                    ], 8, sa))), 128))
                  ]))), 128)) : (n(), i("div", {
                    key: 1,
                    class: "di-master-empty",
                    onClick: t[34] || (t[34] = (s) => jt())
                  }, [...t[131] || (t[131] = [
                    e("span", null, "テーブル.カラムのマスタ値を定義", -1)
                  ])]))
                ]),
                (n(), vt(Dt, { to: a(k) }, [
                  mt.value ? (n(), i("div", {
                    key: 0,
                    "data-dev-inspector": "",
                    class: "di-modal-overlay",
                    onClick: t[43] || (t[43] = te((s) => mt.value = !1, ["self"]))
                  }, [
                    e("div", va, [
                      e("div", pa, [
                        e("h3", null, v(ft.value ? "マスタ定義を編集" : "新規マスタ定義"), 1),
                        e("button", {
                          onClick: t[35] || (t[35] = (s) => mt.value = !1),
                          class: "di-close-btn"
                        }, [
                          I(a($t), { style: { width: "16px", height: "16px" } })
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
                            onClick: ze,
                            class: "di-btn-icon",
                            title: "追加"
                          }, [
                            I(a(Rt), { style: { width: "14px", height: "14px" } })
                          ])
                        ]),
                        e("div", $a, [
                          (n(!0), i(T, null, S(pe.value.entries, (s, m) => (n(), i("div", {
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
                              onClick: (c) => He(m),
                              class: "di-btn-icon di-btn-icon-danger"
                            }, [
                              I(a($t), { style: { width: "12px", height: "12px" } })
                            ], 8, Ua)
                          ]))), 128))
                        ]),
                        e("div", Da, [
                          t[138] || (t[138] = e("label", null, "状態遷移", -1)),
                          e("button", {
                            onClick: We,
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
                          (n(!0), i(T, null, S(pe.value.transitions, (s, m) => (n(), i("div", {
                            key: m,
                            class: "di-transition-row"
                          }, [
                            b(e("select", {
                              "onUpdate:modelValue": (c) => s.from = c,
                              class: "di-transition-select di-transition-col-from"
                            }, [
                              t[139] || (t[139] = e("option", { value: "" }, "-", -1)),
                              (n(!0), i(T, null, S(pe.value.entries.filter((c) => c.value), (c) => (n(), i("option", {
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
                              (n(!0), i(T, null, S(pe.value.entries.filter((c) => c.value), (c) => (n(), i("option", {
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
                              onClick: (c) => Pt(m),
                              class: "di-btn-icon di-btn-icon-danger"
                            }, [
                              I(a($t), { style: { width: "12px", height: "12px" } })
                            ], 8, Oa)
                          ]))), 128))
                        ])) : (n(), i("div", ja, " 状態遷移を定義（任意） "))
                      ]),
                      e("div", qa, [
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
                        }, "保存", 8, Ha)
                      ])
                    ])
                  ])) : p("", !0)
                ], 8, ["to"]))
              ], 512), [
                [Jt, D.value === "masters"]
              ]),
              b(e("div", null, [
                e("div", Ra, [
                  e("div", Ka, [
                    I(a(Dl), { style: { width: "16px", height: "16px", color: "#f59e0b" } }),
                    t[144] || (t[144] = e("span", null, "バッチ処理", -1)),
                    Ae.value > 0 ? (n(), i("span", za, v(Ae.value), 1)) : p("", !0),
                    e("button", {
                      onClick: t[44] || (t[44] = (s) => d()),
                      class: "di-btn-icon",
                      style: { "margin-left": "auto" },
                      title: "新規追加"
                    }, [
                      I(a(Rt), { style: { width: "14px", height: "14px" } })
                    ])
                  ]),
                  Ae.value > 0 ? (n(!0), i(T, { key: 0 }, S(Ie.value, (s) => (n(), i("div", {
                    key: s.id,
                    class: "di-batch-item",
                    onClick: (m) => d(s.id)
                  }, [
                    e("div", Ya, [
                      e("div", Xa, v(s.name), 1),
                      s.schedule ? (n(), i("div", Wa, v(s.schedule), 1)) : p("", !0)
                    ])
                  ], 8, Ga))), 128)) : (n(), i("div", {
                    key: 1,
                    class: "di-batch-empty",
                    onClick: t[45] || (t[45] = (s) => d())
                  }, [...t[145] || (t[145] = [
                    e("span", null, "バッチ処理を定義", -1)
                  ])]))
                ]),
                (n(), vt(Dt, { to: a(k) }, [
                  he.value ? (n(), i("div", {
                    key: 0,
                    "data-dev-inspector": "",
                    class: "di-modal-overlay",
                    onClick: t[61] || (t[61] = te((s) => he.value = !1, ["self"]))
                  }, [
                    e("div", Za, [
                      e("div", Ja, [
                        e("h3", null, v(ve.value ? "バッチ処理を編集" : "新規バッチ処理"), 1),
                        e("button", {
                          onClick: t[46] || (t[46] = (s) => he.value = !1),
                          class: "di-close-btn"
                        }, [
                          I(a($t), { style: { width: "16px", height: "16px" } })
                        ])
                      ]),
                      e("div", Qa, [
                        e("div", Na, [
                          e("div", ed, [
                            t[146] || (t[146] = e("label", null, "バッチ名 *", -1)),
                            b(e("input", {
                              "onUpdate:modelValue": t[47] || (t[47] = (s) => R.value.name = s),
                              placeholder: "月次レポート生成"
                            }, null, 512), [
                              [w, R.value.name]
                            ])
                          ]),
                          e("div", td, [
                            t[147] || (t[147] = e("label", null, "スケジュール", -1)),
                            b(e("input", {
                              "onUpdate:modelValue": t[48] || (t[48] = (s) => R.value.schedule = s),
                              placeholder: "毎月1日 AM2:00"
                            }, null, 512), [
                              [w, R.value.schedule]
                            ])
                          ])
                        ]),
                        e("div", ld, [
                          e("div", od, [
                            t[148] || (t[148] = e("label", null, "手動トリガー", -1)),
                            b(e("input", {
                              "onUpdate:modelValue": t[49] || (t[49] = (s) => R.value.trigger = s),
                              placeholder: "管理画面から実行"
                            }, null, 512), [
                              [w, R.value.trigger]
                            ])
                          ])
                        ]),
                        e("div", nd, [
                          t[149] || (t[149] = e("label", null, "説明", -1)),
                          b(e("textarea", {
                            "onUpdate:modelValue": t[50] || (t[50] = (s) => R.value.description = s),
                            rows: "2",
                            placeholder: "バッチ処理の概要..."
                          }, null, 512), [
                            [w, R.value.description]
                          ])
                        ]),
                        t[159] || (t[159] = e("div", { class: "di-batch-section-label" }, "入出力テーブル", -1)),
                        e("div", sd, [
                          e("div", id, [
                            t[150] || (t[150] = e("label", null, "入力テーブル", -1)),
                            e("div", ad, [
                              (n(!0), i(T, null, S(R.value.inputTables, (s, m) => (n(), i("span", {
                                key: m,
                                class: "di-batch-tag"
                              }, [
                                j(v(s) + " ", 1),
                                e("button", {
                                  onClick: (c) => tt(m),
                                  class: "di-batch-tag-remove"
                                }, "×", 8, dd)
                              ]))), 128)),
                              b(e("input", {
                                "onUpdate:modelValue": t[51] || (t[51] = (s) => Re.value = s),
                                onKeydown: t[52] || (t[52] = Vt(te((s) => bt(), ["prevent"]), ["enter"])),
                                type: "text",
                                placeholder: "テーブル名",
                                class: "di-batch-tag-input"
                              }, null, 544), [
                                [w, Re.value]
                              ])
                            ])
                          ]),
                          e("div", ud, [
                            t[151] || (t[151] = e("label", null, "出力テーブル", -1)),
                            e("div", rd, [
                              (n(!0), i(T, null, S(R.value.outputTables, (s, m) => (n(), i("span", {
                                key: m,
                                class: "di-batch-tag"
                              }, [
                                j(v(s) + " ", 1),
                                e("button", {
                                  onClick: (c) => Mt(m),
                                  class: "di-batch-tag-remove"
                                }, "×", 8, cd)
                              ]))), 128)),
                              b(e("input", {
                                "onUpdate:modelValue": t[53] || (t[53] = (s) => Ke.value = s),
                                onKeydown: t[54] || (t[54] = Vt(te((s) => Ge(), ["prevent"]), ["enter"])),
                                type: "text",
                                placeholder: "テーブル名",
                                class: "di-batch-tag-input"
                              }, null, 544), [
                                [w, Ke.value]
                              ])
                            ])
                          ])
                        ]),
                        e("div", vd, [
                          t[152] || (t[152] = j(" 処理ステップ ", -1)),
                          e("button", {
                            onClick: It,
                            class: "di-btn-icon",
                            style: { "margin-left": "auto" },
                            title: "ステップ追加"
                          }, [
                            I(a(Rt), { style: { width: "14px", height: "14px" } })
                          ])
                        ]),
                        R.value.steps.length > 0 ? (n(), i("div", pd, [
                          t[154] || (t[154] = e("div", { class: "di-batch-steps-header" }, [
                            e("span", { class: "di-batch-step-no" }, "No"),
                            e("span", { class: "di-batch-step-desc" }, "処理内容"),
                            e("span", { class: "di-batch-step-target" }, "対象"),
                            e("span", { class: "di-batch-step-type" }, "種別"),
                            e("span", { class: "di-batch-step-error" }, "エラー処理"),
                            e("span", { class: "di-batch-step-act" })
                          ], -1)),
                          (n(!0), i(T, null, S(R.value.steps, (s, m) => (n(), i("div", {
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
                              onClick: (c) => se(m),
                              class: "di-btn-icon di-btn-icon-danger"
                            }, [
                              I(a($t), { style: { width: "12px", height: "12px" } })
                            ], 8, gd)
                          ]))), 128))
                        ])) : p("", !0),
                        t[160] || (t[160] = e("div", { class: "di-batch-section-label" }, "運用設定", -1)),
                        e("div", kd, [
                          e("div", xd, [
                            t[155] || (t[155] = e("label", null, "タイムアウト", -1)),
                            b(e("input", {
                              "onUpdate:modelValue": t[55] || (t[55] = (s) => R.value.timeout = s),
                              placeholder: "30分"
                            }, null, 512), [
                              [w, R.value.timeout]
                            ])
                          ]),
                          e("div", wd, [
                            t[156] || (t[156] = e("label", null, "リトライ", -1)),
                            b(e("input", {
                              "onUpdate:modelValue": t[56] || (t[56] = (s) => R.value.retryPolicy = s),
                              placeholder: "3回まで、5分間隔"
                            }, null, 512), [
                              [w, R.value.retryPolicy]
                            ])
                          ])
                        ]),
                        e("div", Cd, [
                          e("div", _d, [
                            t[157] || (t[157] = e("label", null, "エラー通知先", -1)),
                            b(e("input", {
                              "onUpdate:modelValue": t[57] || (t[57] = (s) => R.value.notifyOnError = s),
                              placeholder: "admin@example.com"
                            }, null, 512), [
                              [w, R.value.notifyOnError]
                            ])
                          ]),
                          e("div", $d, [
                            t[158] || (t[158] = e("label", null, "完了通知先", -1)),
                            b(e("input", {
                              "onUpdate:modelValue": t[58] || (t[58] = (s) => R.value.notifyOnComplete = s),
                              placeholder: "manager@example.com"
                            }, null, 512), [
                              [w, R.value.notifyOnComplete]
                            ])
                          ])
                        ])
                      ]),
                      e("div", Td, [
                        ve.value ? (n(), i("button", {
                          key: 0,
                          onClick: t[59] || (t[59] = (s) => {
                            $e(ve.value), he.value = !1;
                          }),
                          class: "di-btn-small di-btn-danger"
                        }, "削除")) : p("", !0),
                        t[161] || (t[161] = e("div", { style: { flex: "1" } }, null, -1)),
                        e("button", {
                          onClick: t[60] || (t[60] = (s) => he.value = !1),
                          class: "di-btn-small"
                        }, "キャンセル"),
                        e("button", {
                          onClick: qt,
                          class: "di-btn-small di-btn-primary",
                          disabled: !R.value.name
                        }, "保存", 8, Id)
                      ])
                    ])
                  ])) : p("", !0)
                ], 8, ["to"]))
              ], 512), [
                [Jt, D.value === "batches"]
              ]),
              b(e("div", null, [
                e("div", Md, [
                  e("button", {
                    onClick: t[62] || (t[62] = (s) => a(r).erFocusTable = null),
                    class: A(["di-filter-chip", { active: !a(r).erFocusTable }])
                  }, "全テーブル", 2),
                  (n(!0), i(T, null, S(a(r).erTables, (s) => (n(), i("button", {
                    key: s,
                    onClick: (m) => a(r).erFocusTable = a(r).erFocusTable === s ? null : s,
                    class: A(["di-filter-chip", { active: a(r).erFocusTable === s }])
                  }, v(s), 11, Sd))), 128))
                ]),
                e("div", Ud, [
                  (n(!0), i(T, null, S(rt.value, (s) => {
                    var m;
                    return n(), i("div", {
                      key: s,
                      class: A(["di-er-card", { "di-er-card-focused": a(r).erFocusTable === s }]),
                      onClick: (c) => a(r).erFocusTable = a(r).erFocusTable === s ? null : s
                    }, [
                      e("div", Vd, [
                        e("span", null, v(s), 1),
                        Be(s) ? (n(), i("button", {
                          key: 0,
                          onClick: te((c) => Tt(s), ["stop"]),
                          class: "di-er-rel-delete"
                        }, "×", 8, Ed)) : p("", !0)
                      ]),
                      e("div", Pd, [
                        (n(!0), i(T, null, S(a(r).erTableColumns[s] || [], (c) => (n(), i("div", {
                          key: c.column,
                          class: "di-er-col"
                        }, [
                          e("span", null, v(c.column), 1),
                          c.type ? (n(), i("span", Bd, v(c.type), 1)) : p("", !0),
                          Se(s, c.column) ? (n(), i("button", {
                            key: 1,
                            onClick: te(($) => a(r).removeManualColumn(s, c.column), ["stop"]),
                            class: "di-er-rel-delete"
                          }, "×", 8, Ad)) : p("", !0)
                        ]))), 128)),
                        (m = a(r).erTableColumns[s]) != null && m.length ? p("", !0) : (n(), i("div", Ld, "カラム未定義")),
                        De.value === s ? (n(), i("div", {
                          key: 1,
                          class: "di-er-add-col-form",
                          onClick: t[65] || (t[65] = te(() => {
                          }, ["stop"]))
                        }, [
                          b(e("input", {
                            "onUpdate:modelValue": t[63] || (t[63] = (c) => U.value = c),
                            placeholder: "カラム名",
                            onKeyup: Vt((c) => et(s), ["enter"])
                          }, null, 40, Fd), [
                            [w, U.value]
                          ]),
                          b(e("input", {
                            "onUpdate:modelValue": t[64] || (t[64] = (c) => Ve.value = c),
                            placeholder: "型",
                            onKeyup: Vt((c) => et(s), ["enter"])
                          }, null, 40, Od), [
                            [w, Ve.value]
                          ]),
                          e("button", {
                            onClick: (c) => et(s),
                            disabled: !U.value.trim(),
                            class: "di-er-add-col-btn"
                          }, "+", 8, jd)
                        ])) : (n(), i("button", {
                          key: 2,
                          onClick: te((c) => gt(s), ["stop"]),
                          class: "di-er-add-col-trigger"
                        }, "+ カラム", 8, qd))
                      ]),
                      Ne(s).length ? (n(), i("div", Hd, [
                        (n(!0), i(T, null, S(Ne(s), (c) => (n(), i("div", {
                          key: c.id,
                          class: "di-er-relation"
                        }, [
                          e("span", Rd, v(c.type), 1),
                          e("span", null, "→ " + v(c.fromTable === s ? c.toTable : c.fromTable), 1),
                          c.inferred ? p("", !0) : (n(), i("button", {
                            key: 0,
                            onClick: te(($) => a(r).removeTableRelation(c.id), ["stop"]),
                            class: "di-er-rel-delete"
                          }, "×", 8, Kd))
                        ]))), 128))
                      ])) : p("", !0)
                    ], 10, Dd);
                  }), 128))
                ]),
                e("div", zd, [
                  e("div", Gd, [
                    e("button", {
                      onClick: t[66] || (t[66] = (s) => {
                        Ce.value = !Ce.value, be.value = !1;
                      }),
                      class: "di-btn-small"
                    }, [
                      I(a(Rt), { style: { width: "12px", height: "12px" } }),
                      t[162] || (t[162] = j(" テーブル追加 ", -1))
                    ]),
                    e("button", {
                      onClick: t[67] || (t[67] = (s) => {
                        be.value = !be.value, Ce.value = !1;
                      }),
                      class: "di-btn-small"
                    }, [
                      I(a(Rt), { style: { width: "12px", height: "12px" } }),
                      t[163] || (t[163] = j(" リレーション追加 ", -1))
                    ])
                  ]),
                  Ce.value ? (n(), i("div", Yd, [
                    b(e("input", {
                      "onUpdate:modelValue": t[68] || (t[68] = (s) => _e.value = s),
                      placeholder: "テーブル名",
                      onKeyup: Vt(ct, ["enter"]),
                      style: { background: "#1e1e1e", border: "1px solid #333", color: "#ccc", "border-radius": "4px", padding: "4px 6px", "font-size": "11px", outline: "none" }
                    }, null, 544), [
                      [w, _e.value]
                    ]),
                    e("button", {
                      onClick: ct,
                      disabled: !_e.value.trim(),
                      class: "di-btn-small di-btn-primary"
                    }, "追加", 8, Xd)
                  ])) : p("", !0),
                  be.value ? (n(), i("div", Wd, [
                    b(e("select", {
                      "onUpdate:modelValue": t[69] || (t[69] = (s) => Y.value = s)
                    }, [
                      t[164] || (t[164] = e("option", { value: "" }, "From テーブル", -1)),
                      (n(!0), i(T, null, S(a(r).erTables, (s) => (n(), i("option", {
                        key: s,
                        value: s
                      }, v(s), 9, Zd))), 128))
                    ], 512), [
                      [we, Y.value]
                    ]),
                    b(e("select", {
                      "onUpdate:modelValue": t[70] || (t[70] = (s) => Ue.value = s)
                    }, [...t[165] || (t[165] = [
                      e("option", { value: "has_many" }, "has_many", -1),
                      e("option", { value: "belongs_to" }, "belongs_to", -1),
                      e("option", { value: "has_one" }, "has_one", -1),
                      e("option", { value: "many_to_many" }, "many_to_many", -1)
                    ])], 512), [
                      [we, Ue.value]
                    ]),
                    b(e("select", {
                      "onUpdate:modelValue": t[71] || (t[71] = (s) => me.value = s)
                    }, [
                      t[166] || (t[166] = e("option", { value: "" }, "To テーブル", -1)),
                      (n(!0), i(T, null, S(a(r).erTables, (s) => (n(), i("option", {
                        key: s,
                        value: s
                      }, v(s), 9, Jd))), 128))
                    ], 512), [
                      [we, me.value]
                    ]),
                    e("button", {
                      onClick: ge,
                      disabled: !Y.value || !me.value,
                      class: "di-btn-small di-btn-primary"
                    }, "追加", 8, Qd)
                  ])) : p("", !0)
                ])
              ], 512), [
                [Jt, D.value === "tables"]
              ]),
              b(e("div", null, [
                e("div", Nd, [
                  e("button", {
                    onClick: it,
                    class: "di-btn-green"
                  }, [
                    I(a($o), { style: { width: "16px", height: "16px" } }),
                    t[167] || (t[167] = j(" Git管理用に保存 ", -1))
                  ]),
                  e("button", {
                    onClick: at,
                    class: "di-btn-blue"
                  }, [
                    I(a(ql), { style: { width: "16px", height: "16px" } }),
                    t[168] || (t[168] = j(" 画面仕様書 (xlsx) 出力 ", -1))
                  ]),
                  e("button", {
                    onClick: t[72] || (t[72] = (s) => a(r).downloadSddSpec()),
                    class: "di-btn-green-outline"
                  }, [
                    I(a(rl), { style: { width: "16px", height: "16px" } }),
                    t[169] || (t[169] = j(" SDD仕様書 (md) ", -1))
                  ]),
                  e("button", {
                    onClick: t[73] || (t[73] = (s) => a(r).downloadClientSpec()),
                    class: "di-btn-blue-outline"
                  }, [
                    I(a(rl), { style: { width: "16px", height: "16px" } }),
                    t[170] || (t[170] = j(" 納品用仕様書 (md) ", -1))
                  ])
                ]),
                t[178] || (t[178] = e("p", { class: "di-export-hint" }, [
                  j(" JSON: "),
                  e("code", null, "dev-annotations.json"),
                  j(" に配置してcommit ")
                ], -1)),
                e("div", eu, [
                  e("button", {
                    onClick: t[74] || (t[74] = (s) => q.value = !0),
                    class: "di-btn-small"
                  }, [
                    I(a(hl), { style: { width: "14px", height: "14px" } }),
                    t[171] || (t[171] = j(" エクスポート ", -1))
                  ]),
                  e("button", {
                    onClick: t[75] || (t[75] = (s) => J.value = !0),
                    class: "di-btn-small"
                  }, [
                    I(a(Po), { style: { width: "14px", height: "14px" } }),
                    t[172] || (t[172] = j(" インポート ", -1))
                  ]),
                  Oe.value > 0 ? (n(), i("button", {
                    key: 0,
                    onClick: ut,
                    class: "di-btn-small di-btn-danger"
                  }, [
                    I(a(tl), { style: { width: "14px", height: "14px" } }),
                    t[173] || (t[173] = j(" 全削除 ", -1))
                  ])) : p("", !0)
                ]),
                Oe.value > 0 || kt.value > 0 || Ae.value > 0 ? (n(), i("div", tu, [
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
                    e("span", au, v(Ae.value) + "件", 1)
                  ])
                ])) : p("", !0)
              ], 512), [
                [Jt, D.value === "export"]
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
        (n(), vt(Dt, { to: a(k) }, [
          a(r).isEnabled ? (n(), i("div", du, [...t[180] || (t[180] = [
            e("span", { class: "di-indicator-dot" }, null, -1),
            j(" Developer Mode ", -1)
          ])])) : p("", !0)
        ], 8, ["to"])),
        (n(), vt(Dt, { to: a(k) }, [
          q.value ? (n(), i("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: t[77] || (t[77] = te((s) => q.value = !1, ["self"])),
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
                  onClick: t[76] || (t[76] = (s) => q.value = !1),
                  class: "di-btn-small"
                }, "閉じる"),
                e("button", {
                  onClick: pt,
                  class: "di-btn-small di-btn-gray"
                }, [
                  I(a(hl), { style: { width: "14px", height: "14px" } }),
                  t[181] || (t[181] = j(" ファイル保存 ", -1))
                ]),
                e("button", {
                  onClick: yt,
                  class: "di-btn-small di-btn-primary"
                }, "コピー")
              ])
            ])
          ])) : p("", !0)
        ], 8, ["to"])),
        (n(), vt(Dt, { to: a(k) }, [
          J.value ? (n(), i("div", {
            key: 0,
            class: "di-modal-overlay",
            onClick: t[80] || (t[80] = te((s) => J.value = !1, ["self"])),
            "data-dev-inspector": ""
          }, [
            e("div", vu, [
              t[184] || (t[184] = e("h3", { class: "di-modal-title" }, "設定をインポート", -1)),
              e("label", pu, [
                e("input", {
                  type: "file",
                  accept: ".json",
                  onChange: Qe
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
                    J.value = !1, oe.value = "", ce.value = "";
                  }),
                  class: "di-btn-small"
                }, " キャンセル "),
                e("button", {
                  onClick: dt,
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
}), pl = (le, k) => {
  const r = le.__vccOpts || le;
  for (const [D, q] of k)
    r[D] = q;
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
}, Ou = { class: "di-field-tags-list" }, ju = { class: "di-field-tag-name" }, qu = {
  key: 0,
  class: "di-field-tag-type"
}, Hu = ["onClick"], Ru = {
  key: 1,
  class: "di-binding-selector"
}, Ku = { class: "di-form-group" }, zu = { class: "di-form-label" }, Gu = { class: "di-binding-search-wrapper" }, Yu = {
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
}, qr = { class: "di-form-group" }, Hr = { class: "di-form-group di-suggest-wrapper" }, Rr = { class: "di-form-row" }, Kr = { class: "di-form-group" }, zr = {
  key: 0,
  class: "di-form-group"
}, Gr = { class: "di-form-row" }, Yr = { class: "di-form-group" }, Xr = {
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
}, Bc = ["onUpdate:modelValue"], Ac = ["value"], Lc = ["onUpdate:modelValue"], Fc = ["onUpdate:modelValue"], Oc = ["onUpdate:modelValue"], jc = ["onClick"], qc = { class: "di-form-divider" }, Hc = { class: "di-form-row" }, Rc = { class: "di-form-group" }, Kc = { class: "di-form-group" }, zc = { class: "di-form-row" }, Gc = { class: "di-form-group" }, Yc = { class: "di-form-group" }, Xc = { class: "di-form-group" }, Wc = { class: "di-form-group" }, Zc = { class: "di-form-group" }, Jc = { class: "di-form-group" }, Qc = { class: "di-email-variables-input" }, Nc = ["onClick"], ev = { class: "di-form-group" }, tv = { class: "di-form-group" }, lv = { class: "di-form-group" }, ov = { class: "di-form-divider" }, nv = { class: "di-form-group" }, sv = {
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
}, qv = { class: "di-form-group di-suggest-wrapper" }, Hv = { class: "di-calc-tags-input" }, Rv = ["onClick"], Kv = ["placeholder"], zv = { class: "di-form-group" }, Gv = { class: "di-form-group" }, Yv = { class: "di-form-group" }, Xv = { class: "di-form-group" }, Wv = { class: "di-form-group" }, Zv = { class: "di-form-group" }, Jv = { class: "di-form-row" }, Qv = { class: "di-form-group di-form-half" }, Nv = { class: "di-form-group di-form-half" }, ep = { class: "di-csv-columns-section" }, tp = {
  key: 0,
  class: "di-csv-columns-table"
}, lp = ["onUpdate:modelValue"], op = ["onUpdate:modelValue"], np = ["onUpdate:modelValue"], sp = { class: "di-csv-col-act" }, ip = ["onClick", "disabled"], ap = ["onClick", "disabled"], dp = ["onClick"], up = { class: "di-form-group" }, rp = { class: "di-form-group" }, cp = { class: "di-form-group" }, vp = { class: "di-form-group" }, pp = { class: "di-editor-footer" }, mp = { class: "di-editor-actions" }, fp = /* @__PURE__ */ ol({
  __name: "DevElementEditor",
  setup(le) {
    const k = nl(), r = vl("teleportTarget", "body"), D = h("datasource"), q = h(""), J = h(""), oe = h(""), ce = h(""), be = h(""), Y = h(!1), me = h([]), Ue = h(""), Ce = h(""), _e = h(""), De = h(""), U = h([]), Ve = h("UTF-8"), Ee = h(","), Pe = h(!0), st = h(""), Z = h(""), Oe = h(""), Me = h(void 0), ye = h(""), B = h(""), E = h(""), g = h([]), O = h(""), ee = h(""), ne = h(""), G = h(""), K = h(""), L = h(""), _ = h(""), V = h([]), fe = h(""), X = h(""), de = h(""), ue = h(""), qe = h(!0), Xe = h(""), yt = h(""), pt = h(""), it = h(!1), at = h(""), dt = h(""), Qe = h(""), ut = h(""), rt = h(""), Ne = h(""), ge = h([]), Be = h(""), Se = h(""), ct = h(""), Tt = h(""), gt = h(""), et = h(""), Et = h(!1), Ct = h(!1), zt = H(() => {
      const y = /* @__PURE__ */ new Set();
      for (const l of Object.values(k.elementConfigs))
        l.tabContext && y.add(l.tabContext);
      return [...y].sort();
    }), mt = H(() => {
      const y = /* @__PURE__ */ new Set();
      for (const l of Object.values(k.elementConfigs))
        l.modalName && y.add(l.modalName);
      return [...y].sort();
    }), ft = H(() => {
      const y = gt.value.toLowerCase();
      return y ? zt.value.filter((l) => l.toLowerCase().includes(y)) : zt.value;
    }), pe = H(() => {
      const y = et.value.toLowerCase();
      return y ? mt.value.filter((l) => l.toLowerCase().includes(y)) : mt.value;
    });
    function kt(y) {
      gt.value = y, Et.value = !1;
    }
    function Qt(y) {
      et.value = y, Ct.value = !1;
    }
    function jt() {
      setTimeout(() => {
        Et.value = !1;
      }, 150);
    }
    function Nt() {
      setTimeout(() => {
        Ct.value = !1;
      }, 150);
    }
    const ze = h(!1), He = h([]), We = H(() => {
      if (he.value.length > 0) {
        const y = he.value[0];
        if (y.table && y.column) return `${y.table}.${y.column}`;
      }
      return "";
    }), Pt = H(() => We.value && k.getMasterDefinition(We.value) || null), Q = h("db_direct"), he = h([]), ve = h(""), R = h(""), Re = h(""), Ke = h(""), Ae = h(""), Ie = h([]), d = h(""), qt = h(!1), It = h(""), se = h(""), $e = h(""), bt = h(""), tt = h(""), Ge = h(!1), Mt = h(""), je = h([]), lt = h(""), Bt = h(!1), At = h(""), Ze = h(""), F = h(""), ke = h(""), Le = h(""), Ye = h(!1), re = h(""), N = h(""), xe = h(""), Te = h(!1), St = H(() => N.value ? {
      data: "data",
      "v-model": "v-model",
      prop: "prop",
      static: "static",
      computed: "computed",
      store: "store",
      api: "data"
      // legacy compatibility
    }[N.value] || N.value : ""), Lt = H(() => k.editingElementId !== null), Je = H(() => k.editingElementId), Ft = H(() => q.value === "csv_export" || q.value === "csv_import"), Ot = H(() => q.value === "email"), Ut = H(() => Ft.value || Ot.value), ot = [
      { value: "db_direct", label: "DBカラム (そのまま)", icon: Kt, color: "#3b82f6", description: "DBの値をそのまま表示" },
      { value: "db_formatted", label: "DBカラム (整形)", icon: cl, color: "#8b5cf6", description: "DBの値を整形して表示" },
      { value: "calculated", label: "計算値", icon: Sl, color: "#f59e0b", description: "複数カラムから計算" },
      { value: "static", label: "固定文言", icon: Eo, color: "#10b981", description: "コード内の固定テキスト" },
      { value: "other", label: "その他メモ", icon: Mo, color: "#94a3b8", description: "自由メモ" }
    ];
    ll(Je, (y) => {
      var l;
      if (y) {
        const o = k.getElementConfig(y);
        try {
          const f = document.querySelector(y);
          if (f) {
            o != null && o.elementType ? D.value = o.elementType : D.value = k.detectElementType(f);
            const z = f.querySelector("[data-di-binding]") || (f.hasAttribute("data-di-binding") ? f : null) || f.closest("[data-di-binding]");
            if (z) {
              const Fe = z.getAttribute("data-di-binding"), Wt = z.getAttribute("data-di-db"), bl = z.getAttribute("data-di-db-type"), Zt = z.getAttribute("data-di-db-comment");
              if (Fe && (xe.value = Fe, N.value = "data", Te.value = !1), Wt) {
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
        o != null && o.fieldInfoList && o.fieldInfoList.length > 0 ? he.value = o.fieldInfoList.map((f) => ({ ...f })) : o != null && o.fieldInfo && (he.value = [{ ...o.fieldInfo }]), ve.value = "", R.value = "", Re.value = "", Ke.value = "", o != null && o.note && (re.value = o.note.text || re.value, Q.value = o.note.displayType || Q.value, Ae.value = o.note.formatDescription || "", It.value = o.note.sampleValue || "", se.value = o.note.decimalHandling || "", $e.value = o.note.unit || "", bt.value = o.note.nullDisplay || "", tt.value = o.note.displayFormat || "", Xl(o.note.calcDescription || "", o.note.calcSources || []), Ge.value = o.note.storedCalc || !1, Mt.value = o.note.storedCalcLogic || "", je.value = o.note.storedCalcSources ? [...o.note.storedCalcSources] : [], At.value = o.note.storedCalcTiming || "", Ze.value = o.note.condition || "", F.value = o.note.conditionColumn || "", ke.value = o.note.hiddenBehavior || "", Le.value = o.note.hiddenNote || "", Ye.value = !!(o.note.condition || o.note.conditionColumn)), o != null && o.sourceBinding && (N.value = o.sourceBinding.type || N.value, xe.value = o.sourceBinding.source || xe.value, Te.value = o.sourceBinding.isStatic || !1), gt.value = (o == null ? void 0 : o.tabContext) || k.detectTabContext(y) || "";
        const C = k.detectModalName(y);
        if (et.value = (o == null ? void 0 : o.modalName) || C || "", o != null && o.actionInfo) {
          if (q.value = o.actionInfo.type || "", J.value = o.actionInfo.target || "", oe.value = o.actionInfo.method || "", ce.value = o.actionInfo.description || "", o.actionInfo.csvSpec) {
            const f = o.actionInfo.csvSpec;
            U.value = f.columns.map((z) => ({ ...z })), Ve.value = f.encoding || "UTF-8", Ee.value = f.delimiter || ",", Pe.value = f.hasHeaderRow !== !1, st.value = f.filenamePattern || "", Z.value = f.sortOrder || "", Oe.value = f.filterCondition || "", Me.value = f.maxRows, ye.value = f.errorHandling || "", B.value = f.duplicateHandling || "", E.value = f.preValidation || "", g.value = f.errorDefs ? f.errorDefs.map((z) => ({ ...z })) : [];
          }
          if (o.actionInfo.emailSpec) {
            const f = o.actionInfo.emailSpec;
            O.value = f.trigger || "", ee.value = f.to || "", ne.value = f.cc || "", G.value = f.bcc || "", K.value = f.subject || "", L.value = f.bodyTemplate || "", _.value = f.templatePath || "", V.value = f.variables ? [...f.variables] : [], X.value = f.attachments || "", de.value = f.conditions || "", ue.value = f.errorHandling || "";
          }
        }
        if (o != null && o.formInfo && (be.value = o.formInfo.inputType || "", Y.value = o.formInfo.required || !1, me.value = o.formInfo.validation ? [...o.formInfo.validation] : [], Ce.value = o.formInfo.placeholder || "", _e.value = o.formInfo.defaultValue || "", De.value = o.formInfo.description || ""), (l = o == null ? void 0 : o.actionInfo) != null && l.sortSpec) {
          const f = o.actionInfo.sortSpec;
          qe.value = f.sortable !== !1, Xe.value = f.sortType || "", yt.value = f.sortKey || "", pt.value = f.defaultDirection || "", it.value = f.isDefaultSort || !1, at.value = f.unsortedOrder || "", dt.value = f.description || "";
        }
        if (o != null && o.chartSpec) {
          const f = o.chartSpec;
          Qe.value = f.chartType || "", ut.value = f.title || "", rt.value = f.xAxis || "", Ne.value = f.yAxis || "", ge.value = f.series ? f.series.map((z) => ({ ...z })) : [], Be.value = f.dataSource || "", Se.value = f.aggregation || "", ct.value = f.filters || "", Tt.value = f.description || "";
        }
      } else
        Ht();
    });
    function Ht() {
      D.value = "datasource", Q.value = "db_direct", he.value = [], ve.value = "", R.value = "", Re.value = "", Ke.value = "", Ae.value = "", It.value = "", se.value = "", $e.value = "", bt.value = "", tt.value = "", Ie.value = [], d.value = "", Ge.value = !1, Mt.value = "", je.value = [], lt.value = "", At.value = "", Ze.value = "", F.value = "", ke.value = "", Le.value = "", Ye.value = !1, re.value = "", N.value = "", xe.value = "", Te.value = !1, q.value = "", J.value = "", oe.value = "", ce.value = "", U.value = [], Ve.value = "UTF-8", Ee.value = ",", Pe.value = !0, st.value = "", Z.value = "", Oe.value = "", Me.value = void 0, ye.value = "", B.value = "", E.value = "", g.value = [], be.value = "", Y.value = !1, me.value = [], Ue.value = "", Ce.value = "", _e.value = "", De.value = "", O.value = "", ee.value = "", ne.value = "", G.value = "", K.value = "", L.value = "", _.value = "", V.value = [], fe.value = "", X.value = "", de.value = "", ue.value = "", qe.value = !0, Xe.value = "", yt.value = "", pt.value = "", it.value = !1, at.value = "", dt.value = "", Qe.value = "", ut.value = "", rt.value = "", Ne.value = "", ge.value = [], Be.value = "", Se.value = "", ct.value = "", Tt.value = "", gt.value = "", et.value = "", ze.value = !1, He.value = [];
    }
    function xt() {
      k.stopEditing(), Ht();
    }
    function ml() {
      if (Je.value)
        try {
          const y = document.querySelector(Je.value);
          if (!y) return;
          const l = k.autoDetectElementInfo(y, Je.value);
          l.sourceBinding && (N.value = l.sourceBinding.type || "", xe.value = l.sourceBinding.source || "", Te.value = l.sourceBinding.isStatic || !1, l.sourceBinding.isStatic && !Q.value && (Q.value = "static", re.value = re.value || "固定文言")), l.fieldInfo && (he.value.push({
            table: l.fieldInfo.table || "",
            column: l.fieldInfo.column || "",
            type: l.fieldInfo.type || void 0,
            description: l.fieldInfo.description || void 0
          }), Q.value || (Q.value = "db_direct")), l.note && !re.value && (re.value = l.note.text || "");
        } catch (y) {
          console.error("[DevInspector] Auto-detect failed:", y);
        }
    }
    function Gt() {
      if (!Je.value) return;
      const y = [...he.value];
      (Q.value === "db_direct" || Q.value === "db_formatted") && ve.value && R.value && y.push({
        table: ve.value,
        column: R.value,
        type: Re.value || void 0,
        description: Ke.value || void 0
      });
      const l = y.length > 0 ? y : void 0, o = y.length > 0 ? y[0] : void 0, C = Q.value === "db_direct" || Q.value === "db_formatted", f = Q.value || re.value ? {
        text: re.value || "",
        displayType: Q.value,
        formatDescription: Q.value === "db_formatted" && Ae.value || void 0,
        calcDescription: Q.value === "calculated" && Yl() || void 0,
        calcSources: Q.value === "calculated" && kl().length > 0 ? kl() : void 0,
        // 保存済み計算値 (db_direct / db_formatted のみ)
        storedCalc: C && Ge.value ? !0 : void 0,
        storedCalcLogic: C && Ge.value && Mt.value || void 0,
        storedCalcSources: C && Ge.value && je.value.length > 0 ? je.value : void 0,
        storedCalcTiming: C && Ge.value && At.value || void 0,
        sampleValue: It.value || void 0,
        decimalHandling: se.value || void 0,
        unit: $e.value || void 0,
        nullDisplay: bt.value || void 0,
        displayFormat: tt.value || void 0,
        condition: Ze.value || void 0,
        conditionColumn: F.value || void 0,
        hiddenBehavior: ke.value || void 0,
        hiddenNote: Le.value || void 0
      } : void 0, z = N.value ? {
        type: N.value,
        source: xe.value || void 0,
        isStatic: Te.value
      } : void 0, Fe = D.value === "action" && q.value ? {
        type: q.value,
        target: J.value || void 0,
        method: oe.value ? oe.value : void 0,
        description: ce.value || void 0,
        csvSpec: so(),
        emailSpec: io(),
        sortSpec: co()
      } : void 0, Wt = D.value === "form" ? {
        inputType: be.value || void 0,
        required: Y.value || void 0,
        validation: me.value.length > 0 ? me.value : void 0,
        placeholder: Ce.value || void 0,
        defaultValue: _e.value || void 0,
        description: De.value || void 0
      } : void 0, bl = D.value === "chart" && Qe.value ? {
        chartType: Qe.value,
        title: ut.value || void 0,
        xAxis: rt.value || void 0,
        yAxis: Ne.value || void 0,
        series: ge.value.filter((Zt) => Zt.label || Zt.field).length > 0 ? ge.value.filter((Zt) => Zt.label || Zt.field) : void 0,
        dataSource: Be.value || void 0,
        aggregation: Se.value || void 0,
        filters: ct.value || void 0,
        description: Tt.value || void 0
      } : void 0;
      k.setElementConfig(Je.value, {
        elementType: D.value,
        fieldInfo: o,
        fieldInfoList: l,
        actionInfo: Fe,
        formInfo: Wt,
        chartSpec: bl,
        note: f,
        sourceBinding: z,
        tabContext: gt.value || void 0,
        modalName: et.value || void 0,
        isConditional: et.value ? !0 : void 0
      }), ze.value && We.value && vo(), xt();
    }
    function el() {
      Je.value && (k.deleteElementConfig(Je.value), xt());
    }
    const Yt = [
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
    ], ht = h(""), _t = h(!1), Xt = H(() => k.searchSchemaColumns(ht.value).slice(0, 30));
    function sl(y) {
      he.value.push({
        table: y.table,
        column: y.column,
        type: y.type || void 0,
        description: y.comment || void 0
      }), _t.value = !1, ht.value = "";
    }
    function fl() {
      !ve.value || !R.value || (he.value.push({
        table: ve.value,
        column: R.value,
        type: Re.value || void 0,
        description: Ke.value || void 0
      }), ve.value = "", R.value = "", Re.value = "", Ke.value = "");
    }
    function il(y) {
      he.value.splice(y, 1);
    }
    const u = H(() => k.getSchemaColumns().length > 0), t = h(!1), x = h(!1), P = H(() => {
      var C;
      const y = /* @__PURE__ */ new Set();
      for (const f of Object.values(k.elementConfigs))
        if (f.fieldInfoList)
          for (const z of f.fieldInfoList)
            z.table && y.add(z.table);
        else (C = f.fieldInfo) != null && C.table && y.add(f.fieldInfo.table);
      for (const f of k.getSchemaColumns())
        y.add(f.table);
      const l = [...y].sort();
      if (!ve.value) return l;
      const o = ve.value.toLowerCase();
      return l.filter((f) => f.toLowerCase().includes(o));
    }), s = H(() => {
      var C;
      const y = /* @__PURE__ */ new Set();
      for (const f of Object.values(k.elementConfigs))
        if (f.fieldInfoList)
          for (const z of f.fieldInfoList)
            z.column && (!ve.value || z.table === ve.value) && y.add(z.column);
        else (C = f.fieldInfo) != null && C.column && (!ve.value || f.fieldInfo.table === ve.value) && y.add(f.fieldInfo.column);
      for (const f of k.getSchemaColumns())
        (!ve.value || f.table === ve.value) && y.add(f.column);
      const l = [...y].sort();
      if (!R.value) return l;
      const o = R.value.toLowerCase();
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
      if (ve.value = y, t.value = !1, R.value) {
        const l = k.getSchemaColumns().find((o) => o.table === y && o.column === R.value);
        l && (Re.value = l.type || "", Ke.value = l.comment || "");
      }
    }
    function M(y) {
      if (R.value = y, x.value = !1, ve.value) {
        const l = k.getSchemaColumns().find((o) => o.table === ve.value && o.column === y);
        l && (Re.value = l.type || "", Ke.value = l.comment || "");
      }
    }
    const ae = H(() => {
      var C, f;
      const y = /* @__PURE__ */ new Set();
      for (const z of Object.values(k.elementConfigs))
        if (z.fieldInfoList)
          for (const Fe of z.fieldInfoList)
            Fe.table && Fe.column && y.add(`${Fe.table}.${Fe.column}`);
        else (C = z.fieldInfo) != null && C.table && ((f = z.fieldInfo) != null && f.column) && y.add(`${z.fieldInfo.table}.${z.fieldInfo.column}`);
      for (const z of k.getSchemaColumns())
        y.add(z.fullName);
      const l = [...y].sort();
      if (!d.value) return l;
      const o = d.value.trim().toLowerCase();
      if (/^[a-z0-9_.]+$/i.test(o)) {
        const z = l.filter((Fe) => Fe.toLowerCase().includes(o));
        if (z.length > 0) return z;
      }
      return l;
    });
    function ie(y) {
      d.value.trim() && Ie.value.push({ type: "text", value: d.value }), Ie.value.push({ type: "tag", value: y }), d.value = "";
    }
    function wt(y) {
      Ie.value.splice(y, 1);
    }
    function al(y) {
      if (y.key === "Backspace" && !d.value && Ie.value.length > 0) {
        const l = Ie.value.pop();
        l.type === "text" && (d.value = l.value);
      }
    }
    function Rl() {
      setTimeout(() => {
        qt.value = !1;
      }, 150);
    }
    const gl = H(() => {
      var C, f;
      const y = /* @__PURE__ */ new Set();
      for (const z of k.getSchemaColumns())
        y.add(z.fullName);
      for (const z of Object.values(k.elementConfigs))
        if (z.fieldInfoList)
          for (const Fe of z.fieldInfoList)
            Fe.table && Fe.column && y.add(`${Fe.table}.${Fe.column}`);
        else (C = z.fieldInfo) != null && C.table && ((f = z.fieldInfo) != null && f.column) && y.add(`${z.fieldInfo.table}.${z.fieldInfo.column}`);
      const l = [...y].sort();
      if (!lt.value) return l;
      const o = lt.value.trim().toLowerCase();
      return l.filter((z) => z.toLowerCase().includes(o));
    });
    function Kl() {
      setTimeout(() => {
        Bt.value = !1;
      }, 150);
    }
    function zl() {
      const y = lt.value.trim();
      y && !je.value.includes(y) && je.value.push(y), lt.value = "";
    }
    function Gl(y) {
      je.value.includes(y) || je.value.push(y), lt.value = "";
    }
    function Yl() {
      const y = Ie.value.map((l) => l.value);
      return d.value.trim() && y.push(d.value.trim()), y.join(" ").replace(/\s+/g, " ").trim();
    }
    function kl() {
      return Ie.value.filter((y) => y.type === "tag").map((y) => y.value);
    }
    function Xl(y, l) {
      if (!y && l.length === 0) {
        Ie.value = [], d.value = "";
        return;
      }
      if (l.length === 0) {
        Ie.value = [], d.value = y;
        return;
      }
      const o = [];
      let C = y;
      for (const z of l) {
        const Fe = C.indexOf(z);
        if (Fe >= 0) {
          const Wt = C.substring(0, Fe).trim();
          Wt && o.push({ type: "text", value: Wt }), o.push({ type: "tag", value: z }), C = C.substring(Fe + z.length);
        }
      }
      const f = C.trim();
      f && o.push({ type: "text", value: f }), o.length === 0 ? d.value = y : (Ie.value = o, d.value = "");
    }
    function Wl() {
      const y = Ue.value.trim();
      y && !me.value.includes(y) && me.value.push(y), Ue.value = "";
    }
    function Zl(y) {
      me.value.splice(y, 1);
    }
    function Jl(y) {
      y.key === "Backspace" && !Ue.value && me.value.length > 0 && me.value.pop();
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
      const C = U.value[y];
      U.value[y] = U.value[o], U.value[o] = C, U.value = [...U.value];
    }
    function eo() {
      ge.value.push({ label: "", field: "", color: "#3b82f6" });
    }
    function to(y) {
      ge.value.splice(y, 1);
    }
    function wl(y, l) {
      const o = y + l;
      if (o < 0 || o >= ge.value.length) return;
      const C = ge.value[y];
      ge.value[y] = ge.value[o], ge.value[o] = C, ge.value = [...ge.value];
    }
    function lo() {
      g.value.push({ condition: "", message: "", column: "", severity: "error" });
    }
    function oo(y) {
      g.value.splice(y, 1);
    }
    const no = H(() => U.value.filter((y) => y.name).map((y) => y.name));
    function so() {
      if (q.value !== "csv_export" && q.value !== "csv_import") return;
      const y = g.value.filter((l) => l.condition || l.message);
      return {
        columns: U.value.filter((l) => l.name),
        encoding: Ve.value || void 0,
        delimiter: Ee.value || void 0,
        hasHeaderRow: Pe.value,
        filenamePattern: st.value || void 0,
        sortOrder: Z.value || void 0,
        filterCondition: Oe.value || void 0,
        maxRows: Me.value || void 0,
        errorHandling: ye.value || void 0,
        duplicateHandling: B.value || void 0,
        preValidation: E.value || void 0,
        errorDefs: y.length > 0 ? y : void 0
      };
    }
    function io() {
      if (q.value === "email")
        return {
          trigger: O.value || "",
          to: ee.value || "",
          cc: ne.value || void 0,
          bcc: G.value || void 0,
          subject: K.value || "",
          bodyTemplate: L.value || void 0,
          templatePath: _.value || void 0,
          variables: V.value.length > 0 ? V.value : void 0,
          attachments: X.value || void 0,
          conditions: de.value || void 0,
          errorHandling: ue.value || void 0
        };
    }
    function ao() {
      const y = fe.value.trim();
      y && !V.value.includes(y) && V.value.push(y), fe.value = "";
    }
    function uo(y) {
      V.value.splice(y, 1);
    }
    function ro(y) {
      y.key === "Backspace" && !fe.value && V.value.length > 0 && V.value.pop();
    }
    function co() {
      if (q.value === "sort")
        return {
          sortable: qe.value,
          sortType: Xe.value ? Xe.value : void 0,
          sortKey: yt.value || void 0,
          defaultDirection: pt.value ? pt.value : void 0,
          isDefaultSort: it.value || void 0,
          unsortedOrder: at.value || void 0,
          description: dt.value || void 0
        };
    }
    ll(We, (y) => {
      if (y) {
        const l = k.getMasterDefinition(y);
        l ? (He.value = l.entries.map((o) => ({ ...o })), ze.value = !0) : (He.value = [], ze.value = !1);
      } else
        He.value = [], ze.value = !1;
    });
    function Cl() {
      ze.value = !ze.value, ze.value && He.value.length === 0 && He.value.push({ value: "", label: "" });
    }
    function _l() {
      He.value.push({ value: "", label: "" });
    }
    function $l(y) {
      He.value.splice(y, 1);
    }
    function vo() {
      var f;
      if (!We.value) return;
      const [y, l] = We.value.split(".");
      if (!y || !l) return;
      const o = He.value.filter((z) => z.value || z.label);
      if (o.length === 0) {
        k.deleteMasterDefinition(We.value);
        return;
      }
      const C = k.getMasterDefinition(We.value);
      k.setMasterDefinition({
        id: We.value,
        table: y,
        column: l,
        name: (C == null ? void 0 : C.name) || l,
        columnType: (C == null ? void 0 : C.columnType) || ((f = he.value[0]) == null ? void 0 : f.type),
        description: C == null ? void 0 : C.description,
        entries: o,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      });
    }
    return (y, l) => (n(), vt(Dt, { to: a(r) }, [
      Lt.value ? (n(), i("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: te(xt, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", {
          class: A(["di-editor-modal", { "di-editor-modal-wide": Ut.value }])
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
                onClick: xt,
                class: "di-editor-close"
              }, [
                I(a($t), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          St.value ? (n(), i("div", xu, [
            e("span", {
              class: A(["di-source-badge", "di-source-" + N.value])
            }, v(St.value), 3),
            xe.value ? (n(), i("span", wu, v(xe.value), 1)) : p("", !0)
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
                  onFocus: l[1] || (l[1] = (o) => Et.value = !0),
                  onBlur: jt,
                  autocomplete: "off"
                }, null, 544), [
                  [w, gt.value]
                ]),
                Et.value && ft.value.length > 0 ? (n(), i("div", Tu, [
                  (n(!0), i(T, null, S(ft.value, (o) => (n(), i("div", {
                    key: o,
                    class: "di-dropdown-item",
                    onMousedown: te((C) => kt(o), ["prevent"])
                  }, v(o), 41, Iu))), 128))
                ])) : p("", !0)
              ])
            ]),
            e("div", Mu, [
              l[96] || (l[96] = e("label", { class: "di-context-label di-context-label-modal" }, "モーダル:", -1)),
              e("div", Su, [
                b(e("input", {
                  "onUpdate:modelValue": l[2] || (l[2] = (o) => et.value = o),
                  type: "text",
                  class: "di-context-input",
                  placeholder: "例: 確認ダイアログ",
                  onFocus: l[3] || (l[3] = (o) => Ct.value = !0),
                  onBlur: Nt,
                  autocomplete: "off"
                }, null, 544), [
                  [w, et.value]
                ]),
                Ct.value && pe.value.length > 0 ? (n(), i("div", Uu, [
                  (n(!0), i(T, null, S(pe.value, (o) => (n(), i("div", {
                    key: o,
                    class: "di-dropdown-item",
                    onMousedown: te((C) => Qt(o), ["prevent"])
                  }, v(o), 41, Du))), 128))
                ])) : p("", !0)
              ])
            ])
          ]),
          e("div", Vu, [
            e("button", {
              onClick: l[4] || (l[4] = (o) => D.value = "datasource"),
              class: A(["di-editor-tab", { "di-editor-tab-active": D.value === "datasource" }])
            }, [
              I(a(Kt), { style: { width: "14px", height: "14px" } }),
              l[97] || (l[97] = j(" データソース ", -1))
            ], 2),
            e("button", {
              onClick: l[5] || (l[5] = (o) => D.value = "action"),
              class: A(["di-editor-tab", { "di-editor-tab-active": D.value === "action" }])
            }, [
              I(a(Bo), { style: { width: "14px", height: "14px" } }),
              l[98] || (l[98] = j(" アクション ", -1))
            ], 2),
            e("button", {
              onClick: l[6] || (l[6] = (o) => D.value = "form"),
              class: A(["di-editor-tab", { "di-editor-tab-active": D.value === "form" }])
            }, [
              I(a(_o), { style: { width: "14px", height: "14px" } }),
              l[99] || (l[99] = j(" フォーム ", -1))
            ], 2),
            e("button", {
              onClick: l[7] || (l[7] = (o) => D.value = "chart"),
              class: A(["di-editor-tab", { "di-editor-tab-active": D.value === "chart" }])
            }, [
              I(a(yo), { style: { width: "14px", height: "14px" } }),
              l[100] || (l[100] = j(" チャート ", -1))
            ], 2)
          ]),
          e("div", Eu, [
            D.value === "datasource" ? (n(), i(T, { key: 0 }, [
              e("div", Pu, [
                l[101] || (l[101] = e("label", { class: "di-form-label" }, "表示タイプ", -1)),
                e("div", Bu, [
                  (n(), i(T, null, S(ot, (o) => e("button", {
                    key: o.value,
                    onClick: (C) => Q.value = o.value,
                    class: A(["di-display-type-card", { "di-display-type-active": Q.value === o.value }]),
                    style: nt(Q.value === o.value ? { borderColor: o.color, background: o.color + "18" } : {})
                  }, [
                    (n(), vt(po(o.icon), {
                      style: nt([{ width: "20px", height: "20px" }, { color: Q.value === o.value ? o.color : "#64748b" }])
                    }, null, 8, ["style"])),
                    e("span", {
                      class: "di-display-type-label",
                      style: nt({ color: Q.value === o.value ? o.color : "#94a3b8" })
                    }, v(o.label), 5),
                    e("span", Lu, v(o.description), 1)
                  ], 14, Au)), 64))
                ])
              ]),
              Q.value === "db_direct" || Q.value === "db_formatted" ? (n(), i(T, { key: 0 }, [
                he.value.length > 0 ? (n(), i("div", Fu, [
                  l[102] || (l[102] = e("label", { class: "di-form-label" }, "登録済みカラム", -1)),
                  e("div", Ou, [
                    (n(!0), i(T, null, S(he.value, (o, C) => (n(), i("div", {
                      key: C,
                      class: "di-field-tag"
                    }, [
                      e("span", ju, v(o.table) + "." + v(o.column), 1),
                      o.type ? (n(), i("span", qu, v(o.type), 1)) : p("", !0),
                      e("button", {
                        onClick: (f) => il(C),
                        class: "di-field-tag-remove"
                      }, "×", 8, Hu)
                    ]))), 128))
                  ])
                ])) : p("", !0),
                u.value ? (n(), i("div", Ru, [
                  e("div", Ku, [
                    e("label", zu, [
                      I(a(Kt), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                      l[103] || (l[103] = j(" schema.rb から選択 ", -1))
                    ]),
                    e("div", Gu, [
                      b(e("input", {
                        "onUpdate:modelValue": l[8] || (l[8] = (o) => ht.value = o),
                        onFocus: l[9] || (l[9] = (o) => _t.value = !0),
                        type: "text",
                        placeholder: "テーブル.カラムを検索... (例: users, email)",
                        class: "di-input di-binding-search"
                      }, null, 544), [
                        [w, ht.value]
                      ]),
                      ht.value ? (n(), i("button", {
                        key: 0,
                        onClick: l[10] || (l[10] = (o) => {
                          ht.value = "", _t.value = !1;
                        }),
                        class: "di-binding-clear"
                      }, [
                        I(a($t), { style: { width: "14px", height: "14px" } })
                      ])) : p("", !0)
                    ]),
                    _t.value && Xt.value.length > 0 ? (n(), i("div", Yu, [
                      (n(!0), i(T, null, S(Xt.value, (o) => (n(), i("button", {
                        key: o.fullName,
                        onClick: (C) => sl(o),
                        class: "di-binding-item has-db"
                      }, [
                        e("div", Wu, [
                          e("span", Zu, v(o.fullName), 1),
                          e("span", Ju, v(o.type), 1)
                        ]),
                        o.comment ? (n(), i("span", Qu, v(o.comment), 1)) : p("", !0)
                      ], 8, Xu))), 128))
                    ])) : _t.value && ht.value && Xt.value.length === 0 ? (n(), i("div", Nu, " 該当するカラムが見つかりません ")) : p("", !0)
                  ])
                ])) : p("", !0),
                u.value ? (n(), i("div", er, [...l[104] || (l[104] = [
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
                    t.value && P.value.length > 0 ? (n(), i("div", or, [
                      (n(!0), i(T, null, S(P.value.slice(0, 10), (o) => (n(), i("button", {
                        key: o,
                        onMousedown: te((C) => $(o), ["prevent"]),
                        class: "di-suggest-item"
                      }, v(o), 41, nr))), 128))
                    ])) : p("", !0)
                  ]),
                  e("div", sr, [
                    l[106] || (l[106] = e("label", { class: "di-form-label" }, "カラム名 *", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[14] || (l[14] = (o) => R.value = o),
                      onFocus: l[15] || (l[15] = (o) => x.value = !0),
                      onBlur: l[16] || (l[16] = (o) => c()),
                      type: "text",
                      placeholder: "name",
                      class: "di-input",
                      autocomplete: "off"
                    }, null, 544), [
                      [w, R.value]
                    ]),
                    x.value && s.value.length > 0 ? (n(), i("div", ir, [
                      (n(!0), i(T, null, S(s.value.slice(0, 10), (o) => (n(), i("button", {
                        key: o,
                        onMousedown: te((C) => M(o), ["prevent"]),
                        class: "di-suggest-item"
                      }, v(o), 41, ar))), 128))
                    ])) : p("", !0)
                  ])
                ]),
                e("div", dr, [
                  l[108] || (l[108] = e("label", { class: "di-form-label" }, "データ型", -1)),
                  b(e("select", {
                    "onUpdate:modelValue": l[17] || (l[17] = (o) => Re.value = o),
                    class: "di-select"
                  }, [
                    l[107] || (l[107] = e("option", { value: "" }, "選択してください", -1)),
                    (n(), i(T, null, S(Yt, (o) => e("option", {
                      key: o,
                      value: o
                    }, v(o), 9, ur)), 64))
                  ], 512), [
                    [we, Re.value]
                  ])
                ]),
                e("button", {
                  onClick: fl,
                  class: "di-btn-add-field",
                  disabled: !ve.value || !R.value
                }, " + カラムを追加 ", 8, rr),
                We.value ? (n(), i("div", cr, [
                  e("button", {
                    onClick: Cl,
                    class: A(["di-btn-condition-toggle", { "di-condition-active": ze.value }])
                  }, [
                    I(a(Pl), { style: { width: "14px", height: "14px" } }),
                    l[109] || (l[109] = j(" マスタ値を定義 ", -1)),
                    Pt.value ? (n(), i("span", vr, v(Pt.value.entries.length) + "件", 1)) : p("", !0)
                  ], 2),
                  ze.value ? (n(), i("div", pr, [
                    He.value.length > 0 ? (n(), i("div", mr, [
                      l[110] || (l[110] = e("div", { class: "di-master-entries-header" }, [
                        e("span", { class: "di-master-col-val" }, "値"),
                        e("span", { class: "di-master-col-lbl" }, "ラベル"),
                        e("span", { class: "di-master-col-color" }, "色"),
                        e("span", { class: "di-master-col-act" })
                      ], -1)),
                      (n(!0), i(T, null, S(He.value, (o, C) => (n(), i("div", {
                        key: C,
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
                          onClick: (f) => $l(C),
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
                    "onUpdate:modelValue": l[18] || (l[18] = (o) => Ae.value = o),
                    rows: "2",
                    placeholder: "YYYY年MM月DD日 に整形、姓 + 名 で結合 など",
                    class: "di-textarea"
                  }, null, 512), [
                    [w, Ae.value]
                  ])
                ])) : p("", !0),
                e("div", kr, [
                  e("button", {
                    onClick: l[19] || (l[19] = (o) => Ge.value = !Ge.value),
                    class: A(["di-btn-condition-toggle", { "di-condition-active": Ge.value }])
                  }, [
                    I(a(Sl), { style: { width: "14px", height: "14px" } }),
                    l[112] || (l[112] = j(" このカラムは計算値を保存している ", -1)),
                    Ge.value ? (n(), i("span", xr, "設定あり")) : p("", !0)
                  ], 2)
                ]),
                Ge.value ? (n(), i("div", wr, [
                  e("div", Cr, [
                    l[113] || (l[113] = e("label", { class: "di-form-label" }, "計算ロジック", -1)),
                    b(e("textarea", {
                      "onUpdate:modelValue": l[20] || (l[20] = (o) => Mt.value = o),
                      rows: "2",
                      placeholder: "SUM(order_items.price * quantity)、unit_price × quantity など",
                      class: "di-textarea di-textarea-mono"
                    }, null, 512), [
                      [w, Mt.value]
                    ])
                  ]),
                  e("div", _r, [
                    l[114] || (l[114] = e("label", { class: "di-form-label" }, "元データ（テーブル.カラム）", -1)),
                    e("div", $r, [
                      (n(!0), i(T, null, S(je.value, (o, C) => (n(), i("span", {
                        key: C,
                        class: "di-calc-tag"
                      }, [
                        j(v(o) + " ", 1),
                        e("button", {
                          onClick: te((f) => je.value.splice(C, 1), ["stop"]),
                          class: "di-calc-tag-remove"
                        }, "×", 8, Tr)
                      ]))), 128)),
                      b(e("input", {
                        "onUpdate:modelValue": l[21] || (l[21] = (o) => lt.value = o),
                        onFocus: l[22] || (l[22] = (o) => Bt.value = !0),
                        onBlur: Kl,
                        onKeydown: l[23] || (l[23] = Vt(te((o) => zl(), ["prevent"]), ["enter"])),
                        type: "text",
                        placeholder: "order_items.price",
                        class: "di-calc-tags-field",
                        autocomplete: "off"
                      }, null, 544), [
                        [w, lt.value]
                      ])
                    ]),
                    Bt.value && gl.value.length > 0 ? (n(), i("div", Ir, [
                      (n(!0), i(T, null, S(gl.value.slice(0, 12), (o) => (n(), i("button", {
                        key: o,
                        onMousedown: te((C) => Gl(o), ["prevent"]),
                        class: "di-suggest-item"
                      }, [
                        I(a(Kt), { style: { width: "10px", height: "10px", opacity: "0.5", "flex-shrink": "0" } }),
                        j(" " + v(o), 1)
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
                    var C;
                    return (C = y.$refs.calcInputEl) == null ? void 0 : C.focus();
                  })
                }, [
                  (n(!0), i(T, null, S(Ie.value, (o, C) => (n(), i(T, { key: C }, [
                    o.type === "tag" ? (n(), i("span", Dr, [
                      j(v(o.value) + " ", 1),
                      e("button", {
                        onClick: te((f) => wt(C), ["stop"]),
                        class: "di-calc-tag-remove"
                      }, "×", 8, Vr)
                    ])) : (n(), i("span", Er, v(o.value), 1))
                  ], 64))), 128)),
                  b(e("input", {
                    ref: "calcInputEl",
                    "onUpdate:modelValue": l[25] || (l[25] = (o) => d.value = o),
                    onFocus: l[26] || (l[26] = (o) => qt.value = !0),
                    onBlur: l[27] || (l[27] = (o) => Rl()),
                    onKeydown: al,
                    type: "text",
                    placeholder: Ie.value.length === 0 ? "カラムを選択 or 自由入力 (例: × 2)" : "",
                    class: "di-calc-tags-field",
                    autocomplete: "off"
                  }, null, 40, Pr), [
                    [w, d.value]
                  ])
                ]),
                qt.value && ae.value.length > 0 ? (n(), i("div", Br, [
                  (n(!0), i(T, null, S(ae.value.slice(0, 12), (o) => (n(), i("button", {
                    key: o,
                    onMousedown: te((C) => ie(o), ["prevent"]),
                    class: "di-suggest-item"
                  }, [
                    I(a(Kt), { style: { width: "10px", height: "10px", opacity: "0.5", "flex-shrink": "0" } }),
                    j(" " + v(o), 1)
                  ], 40, Ar))), 128))
                ])) : p("", !0),
                l[119] || (l[119] = e("span", { class: "di-form-hint" }, "DBカラムはドロップダウンから挿入、演算子や数値はそのまま入力", -1))
              ])) : p("", !0),
              Q.value === "static" || Q.value === "other" ? (n(), i("div", Lr, [
                l[120] || (l[120] = e("label", { class: "di-form-label" }, "メモ", -1)),
                b(e("textarea", {
                  "onUpdate:modelValue": l[29] || (l[29] = (o) => re.value = o),
                  rows: "4",
                  placeholder: "この要素についてのメモ...",
                  class: "di-textarea"
                }, null, 512), [
                  [w, re.value]
                ])
              ])) : p("", !0),
              Q.value && Q.value !== "other" ? (n(), i(T, { key: 3 }, [
                e("div", Fr, [
                  e("button", {
                    onClick: l[30] || (l[30] = (o) => Ye.value = !Ye.value),
                    class: A(["di-btn-condition-toggle", { "di-condition-active": Ye.value || Ze.value }])
                  }, [
                    I(a(Fl), { style: { width: "14px", height: "14px" } }),
                    l[121] || (l[121] = j(" 条件付き表示 ", -1)),
                    Ze.value ? (n(), i("span", Or, "設定あり")) : p("", !0)
                  ], 2)
                ]),
                Ye.value ? (n(), i("div", jr, [
                  e("div", qr, [
                    l[122] || (l[122] = e("label", { class: "di-form-label" }, "表示条件", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[31] || (l[31] = (o) => Ze.value = o),
                      type: "text",
                      placeholder: "管理者ロール時のみ / ステータスがactiveの時",
                      class: "di-input"
                    }, null, 512), [
                      [w, Ze.value]
                    ])
                  ]),
                  e("div", Hr, [
                    l[123] || (l[123] = e("label", { class: "di-form-label" }, "判定カラム", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[32] || (l[32] = (o) => F.value = o),
                      type: "text",
                      placeholder: "users.role / orders.status",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [w, F.value]
                    ])
                  ]),
                  e("div", Rr, [
                    e("div", Kr, [
                      l[125] || (l[125] = e("label", { class: "di-form-label" }, "条件不一致時の挙動", -1)),
                      b(e("select", {
                        "onUpdate:modelValue": l[33] || (l[33] = (o) => ke.value = o),
                        class: "di-select"
                      }, [...l[124] || (l[124] = [
                        e("option", { value: "" }, "未指定", -1),
                        e("option", { value: "hidden" }, "非表示", -1),
                        e("option", { value: "disabled" }, "無効化 (グレーアウト)", -1),
                        e("option", { value: "different_value" }, "別の値を表示", -1),
                        e("option", { value: "empty" }, "空欄", -1)
                      ])], 512), [
                        [we, ke.value]
                      ])
                    ])
                  ]),
                  ke.value === "different_value" ? (n(), i("div", zr, [
                    l[126] || (l[126] = e("label", { class: "di-form-label" }, "代わりに表示する値", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[34] || (l[34] = (o) => Le.value = o),
                      type: "text",
                      placeholder: "「権限がありません」/ 「***」",
                      class: "di-input"
                    }, null, 512), [
                      [w, Le.value]
                    ])
                  ])) : p("", !0)
                ])) : p("", !0)
              ], 64)) : p("", !0),
              Q.value === "db_direct" || Q.value === "db_formatted" || Q.value === "calculated" ? (n(), i(T, { key: 4 }, [
                l[134] || (l[134] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "表示の詳細")
                ], -1)),
                e("div", Gr, [
                  e("div", Yr, [
                    l[127] || (l[127] = e("label", { class: "di-form-label" }, "サンプル値", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[35] || (l[35] = (o) => It.value = o),
                      type: "text",
                      placeholder: "12,500 / 田中太郎",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [w, It.value]
                    ])
                  ]),
                  e("div", Xr, [
                    l[128] || (l[128] = e("label", { class: "di-form-label" }, "単位", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[36] || (l[36] = (o) => $e.value = o),
                      type: "text",
                      placeholder: "円 / %",
                      class: "di-input"
                    }, null, 512), [
                      [w, $e.value]
                    ])
                  ])
                ]),
                e("div", Wr, [
                  e("div", Zr, [
                    l[130] || (l[130] = e("label", { class: "di-form-label" }, "小数点の扱い", -1)),
                    b(e("select", {
                      "onUpdate:modelValue": l[37] || (l[37] = (o) => se.value = o),
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
                      [we, se.value]
                    ])
                  ]),
                  e("div", Jr, [
                    l[131] || (l[131] = e("label", { class: "di-form-label" }, "NULL/ゼロ時", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[38] || (l[38] = (o) => bt.value = o),
                      type: "text",
                      placeholder: "- / 0 / 非表示 / N/A",
                      class: "di-input"
                    }, null, 512), [
                      [w, bt.value]
                    ])
                  ])
                ]),
                e("div", Qr, [
                  l[132] || (l[132] = e("label", { class: "di-form-label" }, "表示フォーマット", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": l[39] || (l[39] = (o) => tt.value = o),
                    type: "text",
                    placeholder: "カンマ区切り / ¥記号付き / YYYY/MM/DD",
                    class: "di-input"
                  }, null, 512), [
                    [w, tt.value]
                  ])
                ]),
                e("div", Nr, [
                  l[133] || (l[133] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                  b(e("textarea", {
                    "onUpdate:modelValue": l[40] || (l[40] = (o) => re.value = o),
                    rows: "2",
                    placeholder: "補足情報があれば...",
                    class: "di-textarea"
                  }, null, 512), [
                    [w, re.value]
                  ])
                ])
              ], 64)) : p("", !0)
            ], 64)) : p("", !0),
            D.value === "action" ? (n(), i(T, { key: 1 }, [
              e("div", ec, [
                l[136] || (l[136] = e("label", { class: "di-form-label" }, "アクションタイプ", -1)),
                b(e("select", {
                  "onUpdate:modelValue": l[41] || (l[41] = (o) => q.value = o),
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
                  [we, q.value]
                ])
              ]),
              e("div", tc, [
                l[137] || (l[137] = e("label", { class: "di-form-label" }, "ターゲット", -1)),
                b(e("input", {
                  "onUpdate:modelValue": l[42] || (l[42] = (o) => J.value = o),
                  type: "text",
                  placeholder: q.value === "navigate" ? "/tasks" : q.value === "api" ? "/api/users" : q.value === "modal" ? "confirm-dialog" : q.value === "csv_export" ? "/api/export/users" : q.value === "csv_import" ? "/api/import/users" : "",
                  class: "di-input di-input-mono"
                }, null, 8, lc), [
                  [w, J.value]
                ])
              ]),
              q.value === "api" ? (n(), i("div", oc, [
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
              q.value === "csv_export" || q.value === "csv_import" ? (n(), i(T, { key: 1 }, [
                e("div", sc, [
                  e("span", null, [
                    I(a(ql), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    l[141] || (l[141] = j(" CSV仕様", -1))
                  ])
                ]),
                e("div", ic, [
                  l[148] || (l[148] = e("label", { class: "di-form-label" }, "ファイル設定", -1)),
                  e("div", ac, [
                    e("div", dc, [
                      l[143] || (l[143] = e("label", { class: "di-form-label" }, "エンコーディング", -1)),
                      b(e("select", {
                        "onUpdate:modelValue": l[45] || (l[45] = (o) => Ve.value = o),
                        class: "di-select"
                      }, [...l[142] || (l[142] = [
                        e("option", { value: "UTF-8" }, "UTF-8", -1),
                        e("option", { value: "Shift_JIS" }, "Shift_JIS", -1),
                        e("option", { value: "EUC-JP" }, "EUC-JP", -1),
                        e("option", { value: "UTF-8 BOM" }, "UTF-8 BOM", -1)
                      ])], 512), [
                        [we, Ve.value]
                      ])
                    ]),
                    e("div", uc, [
                      l[145] || (l[145] = e("label", { class: "di-form-label" }, "区切り文字", -1)),
                      b(e("select", {
                        "onUpdate:modelValue": l[46] || (l[46] = (o) => Ee.value = o),
                        class: "di-select"
                      }, [...l[144] || (l[144] = [
                        e("option", { value: "," }, "カンマ (,)", -1),
                        e("option", { value: "	" }, "タブ", -1),
                        e("option", { value: "|" }, "パイプ (|)", -1)
                      ])], 512), [
                        [we, Ee.value]
                      ])
                    ])
                  ]),
                  e("div", rc, [
                    e("label", cc, [
                      b(e("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": l[47] || (l[47] = (o) => Pe.value = o),
                        class: "di-checkbox"
                      }, null, 512), [
                        [dl, Pe.value]
                      ]),
                      l[146] || (l[146] = j(" ヘッダー行あり ", -1))
                    ])
                  ]),
                  e("div", vc, [
                    l[147] || (l[147] = e("label", { class: "di-form-label" }, "ファイル名パターン", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[48] || (l[48] = (o) => st.value = o),
                      type: "text",
                      placeholder: "users_{YYYYMMDD}.csv",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [w, st.value]
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
                    (n(!0), i(T, null, S(U.value, (o, C) => (n(), i("div", {
                      key: C,
                      class: "di-csv-column-row"
                    }, [
                      e("span", fc, v(C + 1), 1),
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
                          onClick: (f) => xl(C, -1),
                          disabled: C === 0,
                          class: "di-csv-move-btn",
                          title: "上へ"
                        }, [
                          I(a(Ul), { style: { width: "12px", height: "12px" } })
                        ], 8, _c),
                        e("button", {
                          onClick: (f) => xl(C, 1),
                          disabled: C === U.value.length - 1,
                          class: "di-csv-move-btn",
                          title: "下へ"
                        }, [
                          I(a(yl), { style: { width: "12px", height: "12px" } })
                        ], 8, $c),
                        e("button", {
                          onClick: (f) => Nl(C),
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
                q.value === "csv_export" ? (n(), i(T, { key: 0 }, [
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
                      "onUpdate:modelValue": l[51] || (l[51] = (o) => Me.value = o),
                      type: "number",
                      placeholder: "10000",
                      class: "di-input"
                    }, null, 512), [
                      [
                        w,
                        Me.value,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ], 64)) : p("", !0),
                q.value === "csv_import" ? (n(), i(T, { key: 1 }, [
                  l[161] || (l[161] = e("div", { class: "di-form-divider" }, [
                    e("span", null, "取込オプション")
                  ], -1)),
                  e("div", Uc, [
                    l[157] || (l[157] = e("label", { class: "di-form-label" }, "エラー処理", -1)),
                    b(e("select", {
                      "onUpdate:modelValue": l[52] || (l[52] = (o) => ye.value = o),
                      class: "di-select"
                    }, [...l[156] || (l[156] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "stop_on_first" }, "最初のエラーで停止", -1),
                      e("option", { value: "skip_and_continue" }, "スキップして続行", -1),
                      e("option", { value: "collect_all" }, "全エラー収集", -1)
                    ])], 512), [
                      [we, ye.value]
                    ])
                  ]),
                  e("div", Dc, [
                    l[159] || (l[159] = e("label", { class: "di-form-label" }, "重複処理", -1)),
                    b(e("select", {
                      "onUpdate:modelValue": l[53] || (l[53] = (o) => B.value = o),
                      class: "di-select"
                    }, [...l[158] || (l[158] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "skip" }, "スキップ", -1),
                      e("option", { value: "overwrite" }, "上書き", -1),
                      e("option", { value: "error" }, "エラー", -1)
                    ])], 512), [
                      [we, B.value]
                    ])
                  ]),
                  e("div", Vc, [
                    l[160] || (l[160] = e("label", { class: "di-form-label" }, "事前バリデーション", -1)),
                    b(e("textarea", {
                      "onUpdate:modelValue": l[54] || (l[54] = (o) => E.value = o),
                      rows: "2",
                      placeholder: "取込前のチェック内容...",
                      class: "di-textarea"
                    }, null, 512), [
                      [w, E.value]
                    ])
                  ])
                ], 64)) : p("", !0),
                l[165] || (l[165] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "エラー定義")
                ], -1)),
                e("div", Ec, [
                  g.value.length > 0 ? (n(), i("div", Pc, [
                    l[164] || (l[164] = e("div", { class: "di-csv-columns-header" }, [
                      e("span", { class: "di-csv-err-col" }, "対象列"),
                      e("span", { class: "di-csv-err-cond" }, "エラー条件"),
                      e("span", { class: "di-csv-err-msg" }, "エラーメッセージ"),
                      e("span", { class: "di-csv-err-sev" }, "種別"),
                      e("span", { class: "di-csv-err-act" })
                    ], -1)),
                    (n(!0), i(T, null, S(g.value, (o, C) => (n(), i("div", {
                      key: C,
                      class: "di-csv-column-row"
                    }, [
                      b(e("select", {
                        "onUpdate:modelValue": (f) => o.column = f,
                        class: "di-csv-select di-csv-err-col"
                      }, [
                        l[162] || (l[162] = e("option", { value: "" }, "（全体）", -1)),
                        (n(!0), i(T, null, S(no.value, (f) => (n(), i("option", {
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
                        onClick: (f) => oo(C),
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
              q.value === "email" ? (n(), i(T, { key: 2 }, [
                e("div", qc, [
                  e("span", null, [
                    I(a(Io), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    l[166] || (l[166] = j(" メール基本設定", -1))
                  ])
                ]),
                e("div", Hc, [
                  e("div", Rc, [
                    l[167] || (l[167] = e("label", { class: "di-form-label" }, "トリガー *", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[55] || (l[55] = (o) => O.value = o),
                      type: "text",
                      placeholder: "注文確定時、ボタンクリック",
                      class: "di-input"
                    }, null, 512), [
                      [w, O.value]
                    ])
                  ]),
                  e("div", Kc, [
                    l[168] || (l[168] = e("label", { class: "di-form-label" }, "宛先 *", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[56] || (l[56] = (o) => ee.value = o),
                      type: "text",
                      placeholder: "ユーザーメール、管理者固定",
                      class: "di-input"
                    }, null, 512), [
                      [w, ee.value]
                    ])
                  ])
                ]),
                e("div", zc, [
                  e("div", Gc, [
                    l[169] || (l[169] = e("label", { class: "di-form-label" }, "CC", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[57] || (l[57] = (o) => ne.value = o),
                      type: "text",
                      placeholder: "CC宛先",
                      class: "di-input"
                    }, null, 512), [
                      [w, ne.value]
                    ])
                  ]),
                  e("div", Yc, [
                    l[170] || (l[170] = e("label", { class: "di-form-label" }, "BCC", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[58] || (l[58] = (o) => G.value = o),
                      type: "text",
                      placeholder: "BCC宛先",
                      class: "di-input"
                    }, null, 512), [
                      [w, G.value]
                    ])
                  ])
                ]),
                e("div", Xc, [
                  l[171] || (l[171] = e("label", { class: "di-form-label" }, "件名テンプレート *", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": l[59] || (l[59] = (o) => K.value = o),
                    type: "text",
                    placeholder: "【注文確認】ご注文番号 {orderNumber}",
                    class: "di-input"
                  }, null, 512), [
                    [w, K.value]
                  ])
                ]),
                e("div", Wc, [
                  l[172] || (l[172] = e("label", { class: "di-form-label" }, "本文テンプレート概要", -1)),
                  b(e("textarea", {
                    "onUpdate:modelValue": l[60] || (l[60] = (o) => L.value = o),
                    rows: "3",
                    placeholder: "本文の概要を記述...",
                    class: "di-textarea"
                  }, null, 512), [
                    [w, L.value]
                  ])
                ]),
                e("div", Zc, [
                  l[173] || (l[173] = e("label", { class: "di-form-label" }, "テンプレートファイルパス", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": l[61] || (l[61] = (o) => _.value = o),
                    type: "text",
                    placeholder: "resources/mail/order_confirm.blade.php",
                    class: "di-input di-input-mono"
                  }, null, 512), [
                    [w, _.value]
                  ])
                ]),
                l[178] || (l[178] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "差し込み変数")
                ], -1)),
                e("div", Jc, [
                  e("div", Qc, [
                    (n(!0), i(T, null, S(V.value, (o, C) => (n(), i("span", {
                      key: C,
                      class: "di-calc-tag"
                    }, [
                      j(v(o) + " ", 1),
                      e("button", {
                        onClick: te((f) => uo(C), ["stop"]),
                        class: "di-calc-tag-remove"
                      }, "×", 8, Nc)
                    ]))), 128)),
                    b(e("input", {
                      "onUpdate:modelValue": l[62] || (l[62] = (o) => fe.value = o),
                      onKeydown: [
                        l[63] || (l[63] = Vt(te((o) => ao(), ["prevent"]), ["enter"])),
                        ro
                      ],
                      type: "text",
                      placeholder: "変数名を入力してEnter (例: userName)",
                      class: "di-calc-tags-field",
                      autocomplete: "off"
                    }, null, 544), [
                      [w, fe.value]
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
                    "onUpdate:modelValue": l[65] || (l[65] = (o) => de.value = o),
                    type: "text",
                    placeholder: "メール送信設定がONの場合",
                    class: "di-input"
                  }, null, 512), [
                    [w, de.value]
                  ])
                ]),
                e("div", lv, [
                  l[177] || (l[177] = e("label", { class: "di-form-label" }, "エラー処理", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": l[66] || (l[66] = (o) => ue.value = o),
                    type: "text",
                    placeholder: "キューに入れてリトライ",
                    class: "di-input"
                  }, null, 512), [
                    [w, ue.value]
                  ])
                ])
              ], 64)) : p("", !0),
              q.value === "sort" ? (n(), i(T, { key: 3 }, [
                e("div", ov, [
                  e("span", null, [
                    I(a(ho), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    l[180] || (l[180] = j(" ソート設定", -1))
                  ])
                ]),
                e("div", nv, [
                  e("label", sv, [
                    b(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": l[67] || (l[67] = (o) => qe.value = o),
                      class: "di-checkbox"
                    }, null, 512), [
                      [dl, qe.value]
                    ]),
                    l[181] || (l[181] = j(" このカラムはソート可能 ", -1))
                  ])
                ]),
                qe.value ? (n(), i(T, { key: 0 }, [
                  e("div", iv, [
                    e("div", av, [
                      l[183] || (l[183] = e("label", { class: "di-form-label" }, "データ型", -1)),
                      b(e("select", {
                        "onUpdate:modelValue": l[68] || (l[68] = (o) => Xe.value = o),
                        class: "di-select"
                      }, [...l[182] || (l[182] = [
                        e("option", { value: "" }, "未指定", -1),
                        e("option", { value: "string" }, "文字列", -1),
                        e("option", { value: "number" }, "数値", -1),
                        e("option", { value: "date" }, "日付", -1),
                        e("option", { value: "custom" }, "カスタム", -1)
                      ])], 512), [
                        [we, Xe.value]
                      ])
                    ]),
                    e("div", dv, [
                      l[185] || (l[185] = e("label", { class: "di-form-label" }, "デフォルト方向", -1)),
                      b(e("select", {
                        "onUpdate:modelValue": l[69] || (l[69] = (o) => pt.value = o),
                        class: "di-select"
                      }, [...l[184] || (l[184] = [
                        e("option", { value: "" }, "未指定", -1),
                        e("option", { value: "asc" }, "昇順 (A→Z, 1→9)", -1),
                        e("option", { value: "desc" }, "降順 (Z→A, 9→1)", -1)
                      ])], 512), [
                        [we, pt.value]
                      ])
                    ])
                  ]),
                  e("div", uv, [
                    l[186] || (l[186] = e("label", { class: "di-form-label" }, "ソートキー (DBカラム/APIフィールド)", -1)),
                    b(e("input", {
                      "onUpdate:modelValue": l[70] || (l[70] = (o) => yt.value = o),
                      type: "text",
                      placeholder: "users.name / created_at",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [w, yt.value]
                    ])
                  ]),
                  e("div", rv, [
                    e("label", cv, [
                      b(e("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": l[71] || (l[71] = (o) => it.value = o),
                        class: "di-checkbox"
                      }, null, 512), [
                        [dl, it.value]
                      ]),
                      l[187] || (l[187] = j(" 初期表示時のデフォルトソート ", -1))
                    ])
                  ])
                ], 64)) : p("", !0),
                e("div", vv, [
                  l[188] || (l[188] = e("label", { class: "di-form-label" }, "未ソート時の並び順", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": l[72] || (l[72] = (o) => at.value = o),
                    type: "text",
                    placeholder: "ID昇順 / 登録日降順 / APIレスポンス順",
                    class: "di-input"
                  }, null, 512), [
                    [w, at.value]
                  ])
                ]),
                e("div", pv, [
                  l[189] || (l[189] = e("label", { class: "di-form-label" }, "補足", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": l[73] || (l[73] = (o) => dt.value = o),
                    type: "text",
                    placeholder: "サーバーサイドソート / ページネーション時はリセット",
                    class: "di-input"
                  }, null, 512), [
                    [w, dt.value]
                  ])
                ])
              ], 64)) : p("", !0),
              e("div", mv, [
                l[190] || (l[190] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                b(e("textarea", {
                  "onUpdate:modelValue": l[74] || (l[74] = (o) => re.value = o),
                  rows: "2",
                  placeholder: "補足情報があれば...",
                  class: "di-textarea"
                }, null, 512), [
                  [w, re.value]
                ])
              ])
            ], 64)) : p("", !0),
            D.value === "form" ? (n(), i(T, { key: 2 }, [
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
                  (n(!0), i(T, null, S(he.value, (o, C) => (n(), i("div", {
                    key: C,
                    class: "di-field-tag"
                  }, [
                    e("span", yv, v(o.table) + "." + v(o.column), 1),
                    o.type ? (n(), i("span", gv, v(o.type), 1)) : p("", !0),
                    e("button", {
                      onClick: (f) => il(C),
                      class: "di-field-tag-remove"
                    }, "×", 8, kv)
                  ]))), 128))
                ])
              ])) : p("", !0),
              u.value ? (n(), i("div", xv, [
                e("div", wv, [
                  e("label", Cv, [
                    I(a(Kt), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    l[194] || (l[194] = j(" 対応するDBカラム ", -1))
                  ]),
                  e("div", _v, [
                    b(e("input", {
                      "onUpdate:modelValue": l[76] || (l[76] = (o) => ht.value = o),
                      onFocus: l[77] || (l[77] = (o) => _t.value = !0),
                      type: "text",
                      placeholder: "テーブル.カラムを検索...",
                      class: "di-input di-binding-search"
                    }, null, 544), [
                      [w, ht.value]
                    ]),
                    ht.value ? (n(), i("button", {
                      key: 0,
                      onClick: l[78] || (l[78] = (o) => {
                        ht.value = "", _t.value = !1;
                      }),
                      class: "di-binding-clear"
                    }, [
                      I(a($t), { style: { width: "14px", height: "14px" } })
                    ])) : p("", !0)
                  ]),
                  _t.value && Xt.value.length > 0 ? (n(), i("div", $v, [
                    (n(!0), i(T, null, S(Xt.value, (o) => (n(), i("button", {
                      key: o.fullName,
                      onClick: (C) => sl(o),
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
              We.value && (be.value === "select" || be.value === "radio" || be.value === "checkbox") ? (n(), i("div", Dv, [
                e("button", {
                  onClick: Cl,
                  class: A(["di-btn-condition-toggle", { "di-condition-active": ze.value }])
                }, [
                  I(a(Pl), { style: { width: "14px", height: "14px" } }),
                  l[195] || (l[195] = j(" 選択肢を定義 ", -1)),
                  Pt.value ? (n(), i("span", Vv, v(Pt.value.entries.length) + "件", 1)) : p("", !0)
                ], 2),
                ze.value ? (n(), i("div", Ev, [
                  He.value.length > 0 ? (n(), i("div", Pv, [
                    l[196] || (l[196] = e("div", { class: "di-master-entries-header" }, [
                      e("span", { class: "di-master-col-val" }, "値"),
                      e("span", { class: "di-master-col-lbl" }, "ラベル"),
                      e("span", { class: "di-master-col-color" }, "色"),
                      e("span", { class: "di-master-col-act" })
                    ], -1)),
                    (n(!0), i(T, null, S(He.value, (o, C) => (n(), i("div", {
                      key: C,
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
                        onClick: (f) => $l(C),
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
                  class: A(["di-btn-condition-toggle", { "di-condition-active": Y.value }])
                }, [
                  I(a(Fl), { style: { width: "14px", height: "14px" } }),
                  l[197] || (l[197] = j(" 必須入力 ", -1)),
                  Y.value ? (n(), i("span", jv, "必須")) : p("", !0)
                ], 2)
              ]),
              e("div", qv, [
                l[198] || (l[198] = e("label", { class: "di-form-label" }, "バリデーションルール", -1)),
                e("div", Hv, [
                  (n(!0), i(T, null, S(me.value, (o, C) => (n(), i("span", {
                    key: C,
                    class: "di-calc-tag",
                    style: { background: "#ec4899" }
                  }, [
                    j(v(o) + " ", 1),
                    e("button", {
                      onClick: te((f) => Zl(C), ["stop"]),
                      class: "di-calc-tag-remove"
                    }, "×", 8, Rv)
                  ]))), 128)),
                  b(e("input", {
                    "onUpdate:modelValue": l[80] || (l[80] = (o) => Ue.value = o),
                    onKeydown: [
                      l[81] || (l[81] = Vt(te((o) => Wl(), ["prevent"]), ["enter"])),
                      Jl
                    ],
                    type: "text",
                    placeholder: me.value.length === 0 ? "max:255, email, 必須 など (Enter で追加)" : "",
                    class: "di-calc-tags-field",
                    autocomplete: "off"
                  }, null, 40, Kv), [
                    [w, Ue.value]
                  ])
                ]),
                l[199] || (l[199] = e("span", { class: "di-form-hint" }, "Enter で追加、Backspace で削除", -1))
              ]),
              e("div", zv, [
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
              e("div", Gv, [
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
              e("div", Yv, [
                l[202] || (l[202] = e("label", { class: "di-form-label" }, "説明", -1)),
                b(e("textarea", {
                  "onUpdate:modelValue": l[84] || (l[84] = (o) => De.value = o),
                  rows: "3",
                  placeholder: "このフォーム要素の説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [w, De.value]
                ])
              ]),
              e("div", Xv, [
                l[203] || (l[203] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                b(e("textarea", {
                  "onUpdate:modelValue": l[85] || (l[85] = (o) => re.value = o),
                  rows: "2",
                  placeholder: "補足情報があれば...",
                  class: "di-textarea"
                }, null, 512), [
                  [w, re.value]
                ])
              ])
            ], 64)) : p("", !0),
            D.value === "chart" ? (n(), i(T, { key: 3 }, [
              e("div", Wv, [
                l[205] || (l[205] = e("label", { class: "di-form-label" }, "チャート種別", -1)),
                b(e("select", {
                  "onUpdate:modelValue": l[86] || (l[86] = (o) => Qe.value = o),
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
                  [we, Qe.value]
                ])
              ]),
              e("div", Zv, [
                l[206] || (l[206] = e("label", { class: "di-form-label" }, "タイトル", -1)),
                b(e("input", {
                  "onUpdate:modelValue": l[87] || (l[87] = (o) => ut.value = o),
                  type: "text",
                  placeholder: "例: 月別受講者数",
                  class: "di-input"
                }, null, 512), [
                  [w, ut.value]
                ])
              ]),
              e("div", Jv, [
                e("div", Qv, [
                  l[207] || (l[207] = e("label", { class: "di-form-label" }, "X軸", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": l[88] || (l[88] = (o) => rt.value = o),
                    type: "text",
                    placeholder: "例: 月, 日付",
                    class: "di-input"
                  }, null, 512), [
                    [w, rt.value]
                  ])
                ]),
                e("div", Nv, [
                  l[208] || (l[208] = e("label", { class: "di-form-label" }, "Y軸", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": l[89] || (l[89] = (o) => Ne.value = o),
                    type: "text",
                    placeholder: "例: 件数, 金額",
                    class: "di-input"
                  }, null, 512), [
                    [w, Ne.value]
                  ])
                ])
              ]),
              e("div", ep, [
                l[210] || (l[210] = e("label", { class: "di-form-label" }, "系列定義", -1)),
                ge.value.length > 0 ? (n(), i("div", tp, [
                  l[209] || (l[209] = e("div", { class: "di-csv-columns-header" }, [
                    e("span", { class: "di-chart-col-label" }, "系列名"),
                    e("span", { class: "di-chart-col-field" }, "フィールド"),
                    e("span", { class: "di-chart-col-color" }, "色"),
                    e("span", { class: "di-csv-col-act" })
                  ], -1)),
                  (n(!0), i(T, null, S(ge.value, (o, C) => (n(), i("div", {
                    key: C,
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
                        onClick: (f) => wl(C, -1),
                        disabled: C === 0,
                        class: "di-csv-move-btn",
                        title: "上へ"
                      }, [
                        I(a(Ul), { style: { width: "12px", height: "12px" } })
                      ], 8, ip),
                      e("button", {
                        onClick: (f) => wl(C, 1),
                        disabled: C === ge.value.length - 1,
                        class: "di-csv-move-btn",
                        title: "下へ"
                      }, [
                        I(a(yl), { style: { width: "12px", height: "12px" } })
                      ], 8, ap),
                      e("button", {
                        onClick: (f) => to(C),
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
                  "onUpdate:modelValue": l[90] || (l[90] = (o) => Be.value = o),
                  type: "text",
                  placeholder: "例: GET /api/stats/monthly",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [w, Be.value]
                ])
              ]),
              e("div", rp, [
                l[212] || (l[212] = e("label", { class: "di-form-label" }, "集計方法", -1)),
                b(e("input", {
                  "onUpdate:modelValue": l[91] || (l[91] = (o) => Se.value = o),
                  type: "text",
                  placeholder: "例: 月別集計, GROUP BY month",
                  class: "di-input"
                }, null, 512), [
                  [w, Se.value]
                ])
              ]),
              e("div", cp, [
                l[213] || (l[213] = e("label", { class: "di-form-label" }, "フィルタ条件", -1)),
                b(e("input", {
                  "onUpdate:modelValue": l[92] || (l[92] = (o) => ct.value = o),
                  type: "text",
                  placeholder: "例: 直近12ヶ月, status=active",
                  class: "di-input"
                }, null, 512), [
                  [w, ct.value]
                ])
              ]),
              e("div", vp, [
                l[214] || (l[214] = e("label", { class: "di-form-label" }, "説明", -1)),
                b(e("textarea", {
                  "onUpdate:modelValue": l[93] || (l[93] = (o) => Tt.value = o),
                  rows: "3",
                  placeholder: "このチャートの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [w, Tt.value]
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
              l[215] || (l[215] = j(" 削除 ", -1))
            ]),
            e("div", mp, [
              e("button", {
                onClick: xt,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: Gt,
                class: "di-btn-save"
              }, [
                I(a(Hl), { style: { width: "14px", height: "14px" } }),
                l[216] || (l[216] = j(" 保存 ", -1))
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
  setup(le) {
    const k = nl(), r = vl("teleportTarget", "body"), D = h(null), q = h(null), J = h(0), oe = h(0), ce = h(0), be = {
      db_direct: "#3b82f6",
      db_formatted: "#8b5cf6",
      calculated: "#f59e0b",
      static: "#10b981",
      other: "#94a3b8"
    }, Y = {
      action: "#a78bfa",
      form: "#ec4899"
    };
    function me(B) {
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
      }[B] || B;
    }
    function Ue(B) {
      var g, O;
      const E = k.getElementConfig(B);
      if (E != null && E.elementType && Y[E.elementType])
        return Y[E.elementType];
      if ((g = E == null ? void 0 : E.note) != null && g.displayType)
        return be[E.note.displayType] || "#60a5fa";
      if (!(E != null && E.sourceBinding)) {
        const ee = ((O = E == null ? void 0 : E.note) == null ? void 0 : O.type) || "info";
        return {
          info: "#60a5fa",
          warning: "#fbbf24",
          todo: "#10b981",
          question: "#a78bfa"
        }[ee] || "#60a5fa";
      }
      return E.sourceBinding.isStatic ? "#10b981" : E.sourceBinding.type === "v-model" ? "#8b5cf6" : E.sourceBinding.type === "api" ? "#f59e0b" : "#60a5fa";
    }
    function Ce(B) {
      var K, L, _, V, fe, X;
      const E = k.noteHighlightFilter, g = k.noteTableFilter, O = k.getElementConfig(B);
      if (!O || g !== "all" && !((K = O.fieldInfoList) != null && K.length ? O.fieldInfoList : O.fieldInfo ? [O.fieldInfo] : []).some((qe) => qe.table === g || qe.table.startsWith(g + ".")))
        return !1;
      if (E === "all") return !0;
      const ee = (L = O.note) == null ? void 0 : L.displayType, ne = !!((_ = O.note) != null && _.condition || (V = O.note) != null && V.conditionColumn), G = !!((fe = O.note) != null && fe.storedCalc);
      switch (E) {
        case "db":
          return ee === "db_direct" || ee === "db_formatted";
        case "calculated":
          return ee === "calculated";
        case "storedCalc":
          return G;
        case "static":
          return ee === "static";
        case "conditional":
          return ne;
        case "action":
          return O.elementType === "action";
        case "form":
          return O.elementType === "form";
        case "other":
          return ee === "other" || !ee && !O.elementType && !!((X = O.note) != null && X.text);
        default:
          return !0;
      }
    }
    function _e() {
      var ee, ne;
      const B = document.querySelector("dialog[open]");
      if (B) return B;
      const E = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
      for (const G of E) {
        const K = G.getBoundingClientRect();
        if (K.width > 0 && K.height > 0) return G;
      }
      const g = '.v-overlay--active .v-overlay__content, .el-dialog__wrapper:not([style*="display: none"]) .el-dialog, .modal.show .modal-dialog, .modal-overlay[style*="display: block"], .v-dialog--active';
      try {
        const G = document.querySelector(g);
        if (G) {
          const K = G.getBoundingClientRect();
          if (K.width > 0 && K.height > 0) return G;
        }
      } catch {
      }
      const O = document.querySelectorAll(".fixed.inset-0, .fixed.inset-x-0.inset-y-0, [data-modal], [data-overlay]");
      for (const G of O) {
        if (((ee = G.dataset) == null ? void 0 : ee.devInspector) !== void 0) continue;
        const K = getComputedStyle(G), L = parseInt(K.zIndex, 10);
        if (isNaN(L) || L < 40) continue;
        const _ = G.getBoundingClientRect();
        if (_.width >= window.innerWidth * 0.9 && _.height >= window.innerHeight * 0.9)
          return G;
      }
      for (const G of document.body.children) {
        if (((ne = G.dataset) == null ? void 0 : ne.devInspector) !== void 0) continue;
        const K = getComputedStyle(G);
        if (K.position !== "fixed") continue;
        const L = parseInt(K.zIndex, 10);
        if (isNaN(L) || L < 40) continue;
        const _ = G.getBoundingClientRect();
        if (_.width >= window.innerWidth * 0.9 && _.height >= window.innerHeight * 0.9)
          return G;
      }
      return null;
    }
    function De(B, E) {
      return E.contains(B);
    }
    const U = H(() => {
      var ne, G, K, L, _, V, fe, X, de, ue, qe, Xe, yt, pt, it, at, dt, Qe, ut, rt, Ne, ge, Be, Se, ct, Tt, gt, et, Et, Ct, zt, mt, ft, pe, kt, Qt, jt, Nt, ze, He, We, Pt, Q, he, ve, R, Re;
      const B = J.value, E = oe.value;
      ce.value;
      const g = [];
      if (!k.isEnabled) return g;
      const O = _e(), ee = k.getConfiguredSelectors();
      for (const Ke of ee)
        try {
          const Ae = document.querySelector(Ke);
          if (Ae) {
            if (O && !De(Ae, O)) continue;
            const Ie = Ae.getBoundingClientRect();
            if (Ie.width === 0 || Ie.height === 0 || !Ae.offsetParent && Ae.tagName !== "BODY" && getComputedStyle(Ae).position !== "fixed") continue;
            const d = k.getElementConfig(Ke), qt = ((ne = d == null ? void 0 : d.sourceBinding) == null ? void 0 : ne.isStatic) || !1, It = ((G = d == null ? void 0 : d.sourceBinding) == null ? void 0 : G.type) || "";
            let se = "", $e = "";
            const bt = (K = d == null ? void 0 : d.note) == null ? void 0 : K.displayType, tt = [];
            if ((L = d == null ? void 0 : d.note) != null && L.sampleValue ? tt.push(`例: ${d.note.sampleValue}${d.note.unit ? d.note.unit : ""}`) : (_ = d == null ? void 0 : d.note) != null && _.unit && tt.push(`単位: ${d.note.unit}`), (V = d == null ? void 0 : d.note) != null && V.decimalHandling) {
              const F = { round: "四捨五入", floor: "切り捨て", ceil: "切り上げ", decimal_1: "小数第1位", decimal_2: "小数第2位", integer: "整数" };
              tt.push(F[d.note.decimalHandling] || d.note.decimalHandling);
            }
            (fe = d == null ? void 0 : d.note) != null && fe.nullDisplay && tt.push(`NULL時: ${d.note.nullDisplay}`), (X = d == null ? void 0 : d.note) != null && X.displayFormat && tt.push(d.note.displayFormat);
            const Ge = tt.length > 0 ? `
${tt.join(" / ")}` : "", Mt = !!((de = d == null ? void 0 : d.note) != null && de.condition || (ue = d == null ? void 0 : d.note) != null && ue.conditionColumn);
            let je = "";
            if (Mt) {
              const F = { hidden: "非表示", disabled: "無効化", different_value: "別の値", empty: "空欄" }, ke = [];
              (qe = d == null ? void 0 : d.note) != null && qe.condition && ke.push(d.note.condition), (Xe = d == null ? void 0 : d.note) != null && Xe.conditionColumn && ke.push(`判定: ${d.note.conditionColumn}`), (yt = d == null ? void 0 : d.note) != null && yt.hiddenBehavior && ke.push(`不一致時: ${F[d.note.hiddenBehavior] || d.note.hiddenBehavior}`), (pt = d == null ? void 0 : d.note) != null && pt.hiddenNote && ke.push(`→ ${d.note.hiddenNote}`), je = `
条件: ${ke.join(" / ")}`;
            }
            const lt = Mt ? " ⚡" : "";
            if ((d == null ? void 0 : d.elementType) === "action" && (d != null && d.actionInfo)) {
              const F = d.actionInfo;
              F.type === "navigate" ? se = `遷移: ${F.target || "?"}` : F.type === "api" ? se = `API: ${F.method || "GET"} ${F.target || "?"}` : F.type === "modal" ? se = `モーダル: ${F.target || "?"}` : F.type === "emit" ? se = `イベント: ${F.target || "?"}` : F.type === "function" ? se = `関数: ${F.target || "?"}` : se = "アクション", $e = (F.description || se) + ((it = d == null ? void 0 : d.note) != null && it.text ? `
${d.note.text}` : "");
            } else if ((d == null ? void 0 : d.elementType) === "form" && (d != null && d.formInfo)) {
              const F = d.formInfo, ke = (at = d == null ? void 0 : d.fieldInfoList) != null && at.length ? d.fieldInfoList : d != null && d.fieldInfo ? [d.fieldInfo] : [], Le = ke.length > 0 ? ke.map((xe) => `${xe.table}.${xe.column}`).join(", ") : "", Ye = ke.length > 0 ? `${ke[0].table}.${ke[0].column}` : "", re = Ye ? k.getMasterDefinition(Ye) : null;
              F.inputType === "select" ? se = `選択: ${Le || F.description || "?"}${re ? ` (${re.entries.length}件)` : ""}` : F.inputType === "textarea" ? se = `テキスト: ${Le || F.description || "?"}` : F.inputType === "checkbox" ? se = `チェック: ${Le || F.description || "?"}` : F.inputType === "radio" ? se = `ラジオ: ${Le || F.description || "?"}` : se = `入力: ${Le || F.description || F.inputType || "?"}`, F.required && (se += " (必須)");
              const N = [];
              F.description && N.push(F.description), (dt = F.validation) != null && dt.length && N.push(`検証: ${F.validation.join(", ")}`), F.placeholder && N.push(`placeholder: ${F.placeholder}`), F.defaultValue && N.push(`初期値: ${F.defaultValue}`), $e = N.join(`
`) + ((Qe = d == null ? void 0 : d.note) != null && Qe.text ? `
${d.note.text}` : "");
            } else if ((d == null ? void 0 : d.elementType) === "action")
              se = "アクション", $e = ((ut = d == null ? void 0 : d.note) == null ? void 0 : ut.text) || "";
            else if ((d == null ? void 0 : d.elementType) === "form")
              se = "フォーム", $e = ((rt = d == null ? void 0 : d.note) == null ? void 0 : rt.text) || "";
            else if (bt === "db_direct") {
              const F = (Ne = d == null ? void 0 : d.fieldInfoList) != null && Ne.length ? d.fieldInfoList : d != null && d.fieldInfo ? [d.fieldInfo] : [];
              if (F.length > 0) {
                const ke = F.map((N) => `${N.table}.${N.column}`).join(", "), Le = `${F[0].table}.${F[0].column}`, Ye = k.getMasterDefinition(Le), re = Ye ? ` (${Ye.entries.length}値)` : "";
                se = `DB: ${ke}${re}${lt}`, $e = F.map((N) => `${N.table}.${N.column}${N.type ? ` (${N.type})` : ""}`).join(`
`) + Ge + je + ((ge = d == null ? void 0 : d.note) != null && ge.text ? `
${d.note.text}` : "");
              }
            } else if (bt === "db_formatted") {
              const F = (Be = d == null ? void 0 : d.fieldInfoList) != null && Be.length ? d.fieldInfoList : d != null && d.fieldInfo ? [d.fieldInfo] : [];
              if (F.length > 0) {
                const ke = F.map((N) => `${N.table}.${N.column}`).join(", "), Le = `${F[0].table}.${F[0].column}`, Ye = k.getMasterDefinition(Le), re = Ye ? ` (${Ye.entries.length}値)` : "";
                se = `DB: ${ke} (整形)${re}${lt}`, $e = F.map((N) => `${N.table}.${N.column}`).join(`
`) + ((Se = d == null ? void 0 : d.note) != null && Se.formatDescription ? `
整形: ${d.note.formatDescription}` : "") + Ge + je + ((ct = d == null ? void 0 : d.note) != null && ct.text ? `
${d.note.text}` : "");
              }
            } else bt === "calculated" ? (se = "計算値" + ((Tt = d == null ? void 0 : d.note) != null && Tt.unit ? ` (${d.note.unit})` : "") + lt, $e = (((gt = d == null ? void 0 : d.note) == null ? void 0 : gt.calcDescription) || "計算値") + ((Et = (et = d == null ? void 0 : d.note) == null ? void 0 : et.calcSources) != null && Et.length ? `
参照: ${d.note.calcSources.join(", ")}` : "") + Ge + je + ((Ct = d == null ? void 0 : d.note) != null && Ct.text ? `
${d.note.text}` : "")) : bt === "static" ? (se = "固定" + lt, $e = (((zt = d == null ? void 0 : d.note) == null ? void 0 : zt.text) || "固定文言") + je) : bt === "other" ? (se = "メモ", $e = ((mt = d == null ? void 0 : d.note) == null ? void 0 : mt.text) || "") : (ft = d == null ? void 0 : d.fieldInfoList) != null && ft.length || (pe = d == null ? void 0 : d.fieldInfo) != null && pe.table && ((kt = d == null ? void 0 : d.fieldInfo) != null && kt.column) ? (se = `DB: ${((Qt = d == null ? void 0 : d.fieldInfoList) != null && Qt.length ? d.fieldInfoList : d != null && d.fieldInfo ? [d.fieldInfo] : []).map((Le) => `${Le.table}.${Le.column}`).join(", ")}`, $e = ((jt = d == null ? void 0 : d.note) == null ? void 0 : jt.text) || "") : qt ? (se = "固定", $e = ((Nt = d == null ? void 0 : d.note) == null ? void 0 : Nt.text) || "固定文言") : It === "v-model" ? (se = "フォーム", $e = ((ze = d == null ? void 0 : d.note) == null ? void 0 : ze.text) || "") : It === "api" ? (se = "データ", $e = ((He = d == null ? void 0 : d.note) == null ? void 0 : He.text) || "") : (We = d == null ? void 0 : d.note) != null && We.type ? (se = {
              info: "情報",
              warning: "注意",
              todo: "TODO",
              question: "質問"
            }[d.note.type] || "メモ", $e = ((Pt = d == null ? void 0 : d.note) == null ? void 0 : Pt.text) || "") : (se = "メモ", $e = ((Q = d == null ? void 0 : d.note) == null ? void 0 : Q.text) || "");
            const Bt = $e || ((he = d == null ? void 0 : d.note) == null ? void 0 : he.text) || "", At = ((ve = d == null ? void 0 : d.note) == null ? void 0 : ve.type) || "info", Ze = !!((R = d == null ? void 0 : d.note) != null && R.text || (Re = d == null ? void 0 : d.note) != null && Re.displayType);
            g.push({
              selector: Ke,
              top: `${Ie.top + B}px`,
              left: `${Ie.left + E}px`,
              width: `${Ie.width}px`,
              height: `${Ie.height}px`,
              color: Ue(Ke),
              isStatic: qt,
              label: se,
              noteText: Bt,
              noteType: At,
              hasNote: Ze
            });
          }
        } catch {
        }
      return g;
    }), Ve = H(() => {
      var ee;
      const B = J.value, E = oe.value;
      ce.value;
      const g = [];
      if (!k.isEnabled || k.scanResults.length === 0) return g;
      const O = _e();
      for (const ne of k.scanResults)
        try {
          const G = document.querySelector(ne.selector);
          if (G) {
            if (O && !De(G, O)) continue;
            const K = G.getBoundingClientRect();
            g.push({
              selector: ne.selector,
              top: `${K.top + B}px`,
              left: `${K.left + E}px`,
              width: `${K.width}px`,
              height: `${K.height}px`,
              isStatic: ((ee = ne.detected.sourceBinding) == null ? void 0 : ee.isStatic) || !1
            });
          }
        } catch {
        }
      return g;
    }), Ee = H(() => {
      var ne, G;
      const B = J.value, E = oe.value;
      ce.value;
      const g = [], O = k.analysisFilter;
      if (O === "none" || !k.isEnabled || k.analysisResults.length === 0) return g;
      const ee = _e();
      for (const K of k.analysisResults) {
        if (!K.matched) continue;
        const L = K.element;
        try {
          const _ = document.querySelector(K.selector);
          if (!_ || ee && !De(_, ee)) continue;
          const V = _.getBoundingClientRect();
          if (V.width === 0 || V.height === 0 || !_.offsetParent && _.tagName !== "BODY" && getComputedStyle(_).position !== "fixed" || V.width > window.innerWidth * 0.8 || V.height > window.innerHeight * 0.5)
            continue;
          const fe = _.querySelector("[data-di-binding]") || (_.hasAttribute("data-di-binding") ? _ : null);
          let X = "", de = L.binding || "";
          const ue = [...L.tags || []];
          if (fe) {
            const Se = fe.getAttribute("data-di-db"), ct = fe.getAttribute("data-di-binding");
            Se && (X = Se, ue.includes("db") || ue.push("db")), ct && (de = ct);
          }
          !X && L.db && (X = `${L.db.table}.${L.db.column}`, ue.includes("db") || ue.push("db"));
          let qe = "";
          L.api && (qe = `${L.api.method} ${L.api.endpoint}`, ue.includes("api") || ue.push("api"));
          let Xe = "";
          if (de) {
            const Se = k.getApiSourceForBinding(de);
            Se && Se.endpoint ? Xe = `${Se.method || "GET"} ${Se.endpoint}` : Se && Se.composable && (Xe = Se.composable);
          }
          const yt = (ne = L.conditional) == null ? void 0 : ne.expression, pt = (G = L.modal) == null ? void 0 : G.target, it = !!X || ue.includes("db"), at = !!qe || ue.includes("api"), dt = ue.includes("form"), Qe = ue.includes("button"), ut = ue.includes("link"), rt = ue.includes("modal"), Ne = ue.includes("conditional"), ge = ue.includes("computed");
          if (O === "db-api") {
            if (!it && !at) continue;
          } else if (O === "form") {
            if (!dt) continue;
          } else if (O === "button") {
            if (!Qe) continue;
          } else if (O === "link") {
            if (!ut) continue;
          } else if (O === "modal") {
            if (!rt) continue;
          } else if (O === "conditional") {
            if (!Ne) continue;
          } else if (O === "computed") {
            if (!ge) continue;
          } else if (O === "other" && (it || at || dt || Qe || ut || rt || Ne || ge))
            continue;
          let Be = "other";
          it ? Be = "db" : at ? Be = "api" : dt ? Be = "form" : Qe ? Be = "button" : ut ? Be = "link" : rt ? Be = "modal" : Ne ? Be = "conditional" : ge && (Be = "computed"), g.push({
            selector: K.selector,
            top: `${V.top + B}px`,
            left: `${V.left + E}px`,
            width: `${V.width}px`,
            height: `${V.height}px`,
            tags: ue,
            primaryTag: Be,
            text: L.text || de || "",
            dbInfo: X,
            apiInfo: qe,
            apiSource: Xe,
            conditionalExpr: yt,
            modalTarget: pt
          });
        } catch {
        }
      }
      return g;
    }), Pe = H(() => {
      const B = J.value, E = oe.value;
      ce.value;
      const g = [];
      if (!k.isEnabled || !k.showUnannotatedDetection || k.unannotatedElements.length === 0) return g;
      const O = _e();
      for (const ee of k.unannotatedElements)
        try {
          const ne = document.querySelector(ee.selector);
          if (!ne || O && !De(ne, O)) continue;
          const G = ne.getBoundingClientRect();
          if (G.width === 0 || G.height === 0 || !ne.offsetParent && ne.tagName !== "BODY" && getComputedStyle(ne).position !== "fixed") continue;
          g.push({
            selector: ee.selector,
            top: `${G.top + B}px`,
            left: `${G.left + E}px`,
            width: `${G.width}px`,
            height: `${G.height}px`,
            category: ee.category,
            text: ee.text
          });
        } catch {
        }
      return g;
    });
    function st(B) {
      if (!k.isPickMode) return;
      if (B.target.closest("[data-dev-inspector]")) {
        D.value = null, q.value = null, k.setHoveredSelector(null);
        return;
      }
      const g = document.elementFromPoint(B.clientX, B.clientY);
      if (!g || g === document.body || g === document.documentElement) {
        D.value = null, q.value = null, k.setHoveredSelector(null);
        return;
      }
      if (g.closest("[data-dev-inspector]"))
        return;
      q.value = g;
      const O = g.getBoundingClientRect();
      D.value = {
        top: `${O.top + window.scrollY}px`,
        left: `${O.left + window.scrollX}px`,
        width: `${O.width}px`,
        height: `${O.height}px`
      };
      const ee = k.generateSelector(g);
      k.setHoveredSelector(ee);
    }
    function Z(B) {
      if (!(!k.isPickMode || B.target.closest("[data-dev-inspector]")) && (B.preventDefault(), B.stopPropagation(), q.value)) {
        const g = k.generateSelector(q.value);
        if (k.remapTargetId) {
          k.remapAnnotation(k.remapTargetId, g), k.remapTargetId = null, k.togglePickMode(), k.openPanel();
          return;
        }
        k.startEditing(g), k.togglePickMode();
      }
    }
    function Oe(B) {
      B.key === "Escape" && k.isPickMode && (k.remapTargetId = null, k.togglePickMode());
    }
    function Me() {
      J.value = window.scrollY, oe.value = window.scrollX, ce.value++;
    }
    let ye = null;
    return Ol(() => {
      window.addEventListener("mousemove", st, !0), window.addEventListener("click", Z, !0), window.addEventListener("keydown", Oe), window.addEventListener("scroll", Me), window.addEventListener("resize", Me);
      let B = null;
      ye = new MutationObserver(() => {
        B && clearTimeout(B), B = setTimeout(() => {
          ce.value++;
        }, 100);
      }), ye.observe(document.body, { childList: !0, subtree: !0 });
    }), jl(() => {
      window.removeEventListener("mousemove", st, !0), window.removeEventListener("click", Z, !0), window.removeEventListener("keydown", Oe), window.removeEventListener("scroll", Me), window.removeEventListener("resize", Me), ye == null || ye.disconnect();
    }), ll(() => k.isPickMode, (B) => {
      B || (D.value = null, q.value = null);
    }), (B, E) => (n(), vt(Dt, { to: a(r) }, [
      a(k).isInitializing ? (n(), i("div", hp, [...E[1] || (E[1] = [
        e("div", { class: "di-loading-content" }, [
          e("div", { class: "di-loading-spinner" }),
          e("span", { class: "di-loading-text" }, "Developer Mode 起動中...")
        ], -1)
      ])])) : p("", !0),
      a(k).isPickMode && D.value ? (n(), i("div", {
        key: 1,
        "data-dev-inspector": "",
        class: "di-highlight",
        style: nt({
          top: D.value.top,
          left: D.value.left,
          width: D.value.width,
          height: D.value.height
        })
      }, [
        e("div", yp, v(a(k).hoveredSelector), 1)
      ], 4)) : p("", !0),
      a(k).isPickMode ? (n(), i("div", {
        key: 2,
        "data-dev-inspector": "",
        class: "di-pick-banner",
        style: nt(a(k).remapTargetId ? { background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)" } : {})
      }, [
        e("span", null, v(a(k).remapTargetId ? "新しい要素をクリックして再設定" : "要素をクリックしてメモを追加"), 1),
        E[2] || (E[2] = e("kbd", null, "ESC", -1)),
        E[3] || (E[3] = e("span", { class: "di-pick-hint" }, "でキャンセル", -1))
      ], 4)) : p("", !0),
      a(k).isEnabled && !a(k).isPickMode && !a(k).editingElementId ? (n(!0), i(T, { key: 3 }, S(U.value, (g) => b((n(), i("div", {
        key: g.selector,
        "data-dev-inspector": "",
        class: A([
          g.hasNote ? "di-note-highlight" : "di-annotation-box",
          { "di-element-hovered-pulse": a(k).hoveredSelector === g.selector }
        ]),
        style: nt({
          top: g.top,
          left: g.left,
          width: g.width,
          height: g.height,
          borderColor: (g.hasNote, g.color),
          backgroundColor: a(k).hoveredSelector === g.selector ? g.color + "30" : g.color + (g.hasNote ? "18" : "15")
        }),
        onClick: (O) => a(k).startEditing(g.selector)
      }, [
        g.hasNote ? (n(), i("div", kp, [
          e("span", {
            class: "di-note-indicator",
            style: nt({ backgroundColor: g.color })
          }, null, 4),
          e("div", {
            class: "di-annotation-label",
            style: nt({ backgroundColor: g.color })
          }, v(g.label), 5)
        ])) : (n(), i("div", {
          key: 1,
          class: "di-annotation-label",
          style: nt({ backgroundColor: g.color })
        }, v(g.label), 5))
      ], 14, gp)), [
        [Jt, !g.hasNote || a(k).showNoteHighlights && Ce(g.selector)]
      ])), 128)) : p("", !0),
      a(k).isEnabled && !a(k).editingElementId && Ve.value.length > 0 && a(k).analysisResults.length === 0 ? (n(), i(T, { key: 4 }, [
        (n(!0), i(T, null, S(Ve.value, (g) => (n(), i("div", {
          key: "scan-" + g.selector,
          "data-dev-inspector": "",
          class: A(["di-scan-highlight", { "di-scan-static": g.isStatic }]),
          style: nt({
            top: g.top,
            left: g.left,
            width: g.width,
            height: g.height
          }),
          onClick: (O) => a(k).startEditing(g.selector)
        }, [
          e("div", {
            class: A(["di-scan-label", { "di-scan-label-static": g.isStatic }])
          }, v(g.isStatic ? "固定文言" : "動的データ"), 3)
        ], 14, xp))), 128)),
        e("div", wp, [
          e("span", null, v(Ve.value.length) + "件の要素を検出", 1),
          e("button", {
            onClick: E[0] || (E[0] = (g) => a(k).clearScanResults()),
            class: "di-scan-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : p("", !0),
      a(k).isEnabled && !a(k).editingElementId && Ee.value.length > 0 ? (n(), i(T, { key: 5 }, [
        (n(!0), i(T, null, S(Ee.value, (g) => (n(), i("div", {
          key: "analysis-" + g.selector,
          "data-dev-inspector": "",
          class: A(["di-analysis-highlight", "di-analysis-" + g.primaryTag]),
          style: nt({
            top: g.top,
            left: g.left,
            width: g.width,
            height: g.height
          }),
          onClick: (O) => a(k).startEditing(g.selector)
        }, [
          e("div", {
            class: A(["di-analysis-label", "di-analysis-label-" + g.primaryTag])
          }, [
            e("span", _p, v(me(g.primaryTag)), 1),
            g.tags.length > 1 ? (n(), i("span", $p, "+" + v(g.tags.length - 1), 1)) : p("", !0),
            g.dbInfo ? (n(), i("span", Tp, v(g.dbInfo), 1)) : p("", !0),
            g.apiSource ? (n(), i("span", Ip, "← " + v(g.apiSource), 1)) : p("", !0),
            g.conditionalExpr ? (n(), i("span", Mp, v(g.conditionalExpr), 1)) : p("", !0),
            e("button", {
              class: "di-analysis-delete",
              onClick: te((O) => a(k).removeAnalysisResult(g.selector), ["stop"]),
              title: "この要素を非表示"
            }, "×", 8, Sp)
          ], 2),
          g.text && g.text.length < 30 ? (n(), i("div", Up, v(g.text), 1)) : p("", !0)
        ], 14, Cp))), 128)),
        e("div", Dp, [
          e("span", null, "📊 分析データ: " + v(Ee.value.length) + "件の要素", 1)
        ])
      ], 64)) : p("", !0),
      a(k).isEnabled && !a(k).isPickMode && !a(k).editingElementId && Pe.value.length > 0 ? (n(!0), i(T, { key: 6 }, S(Pe.value, (g) => (n(), i("div", {
        key: "unannotated-" + g.selector,
        "data-dev-inspector": "",
        class: A(["di-unannotated-highlight", {
          "di-unannotated-hovered": a(k).hoveredUnannotatedSelector === g.selector,
          ["di-unannotated-hovered-" + g.category]: a(k).hoveredUnannotatedSelector === g.selector
        }]),
        style: nt({
          top: g.top,
          left: g.left,
          width: g.width,
          height: g.height
        }),
        onClick: (O) => a(k).quickAnnotate(g.selector, g.category === "form" ? "form" : g.category === "action" ? "action" : "datasource")
      }, [
        e("div", {
          class: A(["di-unannotated-label", { ["di-unannotated-label-" + g.category]: a(k).hoveredUnannotatedSelector === g.selector }])
        }, [
          e("span", null, v(g.category === "binding" ? "DB" : g.category === "form" ? "Form" : "Act"), 1),
          g.text ? (n(), i("span", Ep, v(g.text), 1)) : p("", !0)
        ], 2)
      ], 14, Vp))), 128)) : p("", !0)
    ], 8, ["to"]));
  }
}), Bp = /* @__PURE__ */ pl(Pp, [["__scopeId", "data-v-12aca2d6"]]), Ap = { class: "di-editor-modal" }, Lp = { class: "di-editor-header" }, Fp = { class: "di-header-actions" }, Op = { class: "di-path-badge" }, jp = { class: "di-editor-content" }, qp = { class: "di-form-group" }, Hp = { class: "di-form-group" }, Rp = { class: "di-form-section" }, Kp = { class: "di-form-section-header" }, zp = { class: "di-api-header-actions" }, Gp = { class: "di-dropdown-wrapper" }, Yp = {
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
  setup(le) {
    const k = nl(), r = vl("teleportTarget", "body"), D = h(""), q = h(""), J = h([]), oe = h(!1), ce = h(""), be = h(""), Y = h(""), me = h(""), Ue = h(!1), Ce = h([]), _e = h(!1), De = H(() => typeof window < "u" ? window.location.pathname : "/");
    ll(() => k.editingScreen, (L) => {
      L && U();
    });
    function U() {
      var _, V, fe, X;
      const L = k.getScreenConfig();
      L ? (D.value = L.name, q.value = L.description || "", J.value = L.apis.map((de) => ({ ...de })), oe.value = ((_ = L.auth) == null ? void 0 : _.required) || !1, ce.value = ((fe = (V = L.auth) == null ? void 0 : V.roles) == null ? void 0 : fe.join(", ")) || "", be.value = ((X = L.auth) == null ? void 0 : X.description) || "", Y.value = L.figmaUrl || "", me.value = L.notes || "") : Ve();
    }
    function Ve() {
      D.value = "", q.value = "", J.value = [], oe.value = !1, ce.value = "", be.value = "", Y.value = "", me.value = "";
    }
    function Ee() {
      k.editingScreen = !1, Ve();
    }
    function Pe() {
      J.value.push({
        method: "GET",
        endpoint: "",
        description: "",
        loadTiming: "onMount"
      });
    }
    function st(L) {
      J.value.splice(L, 1);
    }
    function Z() {
      if (!D.value.trim()) return;
      const L = {
        path: De.value,
        name: D.value.trim(),
        description: q.value.trim() || void 0,
        apis: J.value.filter((_) => _.endpoint.trim()),
        auth: oe.value || ce.value.trim() ? {
          required: oe.value,
          roles: ce.value.trim() ? ce.value.split(",").map((_) => _.trim()).filter(Boolean) : void 0,
          description: be.value.trim() || void 0
        } : void 0,
        figmaUrl: Y.value.trim() || void 0,
        notes: me.value.trim() || void 0,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      k.setScreenConfig(L), Ee();
    }
    function Oe() {
      k.deleteScreenConfig(De.value), Ee();
    }
    const Me = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, ye = {
      onMount: "読込時",
      action: "アクション",
      conditional: "条件付き"
    };
    function B() {
      Ce.value = k.suggestScreenApis(), Ue.value = !0;
    }
    function E(L) {
      return J.value.some(
        (_) => _.method === L.method && _.endpoint === L.endpoint
      );
    }
    const g = H(() => Ce.value.filter((L) => !E(L)));
    function O(L) {
      E(L) || J.value.push({ ...L });
    }
    function ee() {
      for (const L of g.value)
        J.value.push({ ...L });
    }
    function ne() {
      setTimeout(() => {
        _e.value = !1;
      }, 150);
    }
    const G = ["GET", "POST", "PUT", "DELETE", "PATCH"], K = [
      { value: "onMount", label: "画面読込時" },
      { value: "action", label: "アクション時" },
      { value: "conditional", label: "条件付き" }
    ];
    return (L, _) => (n(), vt(Dt, { to: a(r) }, [
      a(k).editingScreen ? (n(), i("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: te(Ee, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", Ap, [
          e("div", Lp, [
            _[9] || (_[9] = e("h3", null, "画面情報を編集", -1)),
            e("div", Fp, [
              e("span", Op, v(De.value), 1),
              e("button", {
                onClick: Ee,
                class: "di-editor-close"
              }, [
                I(a($t), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          e("div", jp, [
            e("div", qp, [
              _[10] || (_[10] = e("label", { class: "di-form-label" }, "画面名 *", -1)),
              b(e("input", {
                "onUpdate:modelValue": _[0] || (_[0] = (V) => D.value = V),
                type: "text",
                placeholder: "ユーザー詳細",
                class: "di-input"
              }, null, 512), [
                [w, D.value]
              ])
            ]),
            e("div", Hp, [
              _[11] || (_[11] = e("label", { class: "di-form-label" }, "画面の説明", -1)),
              b(e("textarea", {
                "onUpdate:modelValue": _[1] || (_[1] = (V) => q.value = V),
                rows: "2",
                placeholder: "この画面の概要...",
                class: "di-textarea"
              }, null, 512), [
                [w, q.value]
              ])
            ]),
            e("div", Rp, [
              e("div", Kp, [
                _[15] || (_[15] = e("label", { class: "di-form-label" }, "API一覧", -1)),
                e("div", zp, [
                  e("button", {
                    onClick: B,
                    class: "di-btn-suggest",
                    title: "要素情報からAPI推定"
                  }, [
                    I(a(cl), { style: { width: "13px", height: "13px" } }),
                    _[12] || (_[12] = j(" 自動推定 ", -1))
                  ]),
                  e("div", Gp, [
                    Ce.value.length > 0 ? (n(), i("button", {
                      key: 0,
                      onClick: _[2] || (_[2] = (V) => _e.value = !_e.value),
                      onBlur: _[3] || (_[3] = (V) => ne()),
                      class: "di-btn-dropdown",
                      title: "推定結果から選択"
                    }, [
                      I(a(yl), { style: { width: "13px", height: "13px" } }),
                      _[13] || (_[13] = j(" 候補から選択 ", -1))
                    ], 32)) : p("", !0),
                    _e.value && Ce.value.length > 0 ? (n(), i("div", Yp, [
                      g.value.length > 0 ? (n(), i("div", Xp, [
                        e("button", {
                          onMousedown: te(ee, ["prevent"]),
                          class: "di-suggestion-add-all"
                        }, " すべて追加 (" + v(g.value.length) + ") ", 33)
                      ])) : p("", !0),
                      (n(!0), i(T, null, S(Ce.value, (V, fe) => (n(), i("button", {
                        key: fe,
                        onMousedown: te((X) => O(V), ["prevent"]),
                        class: A(["di-suggestion-item", { "di-suggestion-added": E(V) }]),
                        disabled: E(V)
                      }, [
                        e("span", {
                          class: "di-suggestion-method",
                          style: nt({ backgroundColor: Me[V.method] + "20", color: Me[V.method] })
                        }, v(V.method), 5),
                        e("code", Zp, v(V.endpoint), 1),
                        V.loadTiming ? (n(), i("span", Jp, v(ye[V.loadTiming] || V.loadTiming), 1)) : p("", !0),
                        E(V) ? (n(), vt(a(go), {
                          key: 1,
                          style: { width: "12px", height: "12px", color: "#10b981", "flex-shrink": "0" }
                        })) : p("", !0)
                      ], 42, Wp))), 128)),
                      Ce.value.length === 0 ? (n(), i("div", Qp, " 推定結果がありません ")) : p("", !0)
                    ])) : p("", !0)
                  ]),
                  e("button", {
                    onClick: Pe,
                    class: "di-btn-add"
                  }, [
                    I(a(Rt), { style: { width: "14px", height: "14px" } }),
                    _[14] || (_[14] = j(" 手動追加 ", -1))
                  ])
                ])
              ]),
              Ue.value && Ce.value.length > 0 && g.value.length > 0 ? (n(), i("div", Np, [
                I(a(cl), { style: { width: "13px", height: "13px", color: "#f59e0b", "flex-shrink": "0" } }),
                e("span", null, v(Ce.value.length) + "件のAPIを推定しました", 1),
                e("button", {
                  onMousedown: te(ee, ["prevent"]),
                  class: "di-suggestion-banner-btn"
                }, "すべて追加", 32)
              ])) : Ue.value && Ce.value.length === 0 ? (n(), i("div", e1, [..._[16] || (_[16] = [
                e("span", null, "要素のDB情報からAPIを推定できませんでした。要素にDB情報を登録してください。", -1)
              ])])) : p("", !0),
              J.value.length === 0 && !Ue.value ? (n(), i("div", t1, " APIが未登録です。「自動推定」で要素情報からAPIを推定できます。 ")) : p("", !0),
              (n(!0), i(T, null, S(J.value, (V, fe) => (n(), i("div", {
                key: fe,
                class: "di-api-entry"
              }, [
                e("div", l1, [
                  b(e("select", {
                    "onUpdate:modelValue": (X) => V.method = X,
                    class: "di-select di-select-method"
                  }, [
                    (n(), i(T, null, S(G, (X) => e("option", {
                      key: X,
                      value: X
                    }, v(X), 9, n1)), 64))
                  ], 8, o1), [
                    [we, V.method]
                  ]),
                  b(e("input", {
                    "onUpdate:modelValue": (X) => V.endpoint = X,
                    type: "text",
                    placeholder: "/api/users/:id",
                    class: "di-input di-input-endpoint"
                  }, null, 8, s1), [
                    [w, V.endpoint]
                  ]),
                  e("button", {
                    onClick: (X) => st(fe),
                    class: "di-btn-remove"
                  }, [
                    I(a(So), { style: { width: "14px", height: "14px" } })
                  ], 8, i1)
                ]),
                e("div", a1, [
                  b(e("input", {
                    "onUpdate:modelValue": (X) => V.description = X,
                    type: "text",
                    placeholder: "説明（任意）",
                    class: "di-input di-input-desc"
                  }, null, 8, d1), [
                    [w, V.description]
                  ]),
                  b(e("select", {
                    "onUpdate:modelValue": (X) => V.loadTiming = X,
                    class: "di-select di-select-timing"
                  }, [
                    (n(), i(T, null, S(K, (X) => e("option", {
                      key: X.value,
                      value: X.value
                    }, v(X.label), 9, r1)), 64))
                  ], 8, u1), [
                    [we, V.loadTiming]
                  ])
                ])
              ]))), 128))
            ]),
            e("div", c1, [
              _[20] || (_[20] = e("label", { class: "di-form-label" }, "認証設定", -1)),
              e("div", v1, [
                e("button", {
                  onClick: _[4] || (_[4] = (V) => oe.value = !oe.value),
                  class: A(["di-toggle-btn", { active: oe.value }])
                }, [
                  e("span", {
                    class: A(["di-toggle-knob", { active: oe.value }])
                  }, null, 2)
                ], 2),
                _[17] || (_[17] = e("span", { class: "di-auth-label" }, "ログイン必須", -1))
              ]),
              oe.value ? (n(), i("div", p1, [
                e("div", m1, [
                  _[18] || (_[18] = e("label", { class: "di-form-label" }, "必要ロール（カンマ区切り）", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": _[5] || (_[5] = (V) => ce.value = V),
                    type: "text",
                    placeholder: "admin, manager",
                    class: "di-input"
                  }, null, 512), [
                    [w, ce.value]
                  ])
                ]),
                e("div", f1, [
                  _[19] || (_[19] = e("label", { class: "di-form-label" }, "認証メモ", -1)),
                  b(e("input", {
                    "onUpdate:modelValue": _[6] || (_[6] = (V) => be.value = V),
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
              _[21] || (_[21] = e("label", { class: "di-form-label" }, "Figma URL", -1)),
              b(e("input", {
                "onUpdate:modelValue": _[7] || (_[7] = (V) => Y.value = V),
                type: "text",
                placeholder: "https://www.figma.com/design/...",
                class: "di-input"
              }, null, 512), [
                [w, Y.value]
              ])
            ]),
            e("div", h1, [
              _[22] || (_[22] = e("label", { class: "di-form-label" }, "メモ", -1)),
              b(e("textarea", {
                "onUpdate:modelValue": _[8] || (_[8] = (V) => me.value = V),
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
              _[23] || (_[23] = j(" 削除 ", -1))
            ]),
            e("div", g1, [
              e("button", {
                onClick: Ee,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: Z,
                class: "di-btn-save",
                disabled: !D.value.trim()
              }, [
                I(a(Hl), { style: { width: "14px", height: "14px" } }),
                _[24] || (_[24] = j(" 保存 ", -1))
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
  setup(le) {
    const k = le, r = nl();
    function D(J) {
      J.ctrlKey && J.shiftKey && (J.key === "D" || J.key === "d") && (J.preventDefault(), r.togglePanel());
    }
    function q() {
      r.togglePanel();
    }
    return Ol(() => {
      r.init({
        storageKey: k.storageKey,
        enabledInProduction: k.enabledInProduction,
        initialAnnotations: k.initialAnnotations
      }), window.addEventListener("keydown", D), window.addEventListener("dev-inspector-toggle", q);
    }), jl(() => {
      window.removeEventListener("keydown", D), window.removeEventListener("dev-inspector-toggle", q);
    }), (J, oe) => a(r).isAvailable ? (n(), i("div", C1, [
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
