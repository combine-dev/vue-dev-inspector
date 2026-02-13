import { h as Ot, defineComponent as wt, ref as h, computed as z, watch as $t, openBlock as n, createElementBlock as i, Fragment as C, createBlock as Me, Teleport as ut, unref as u, createVNode as $, createCommentVNode as c, createElementVNode as e, normalizeClass as R, toDisplayString as v, withDirectives as f, renderList as E, createTextVNode as D, vModelText as k, vShow as ht, normalizeStyle as Oe, withModifiers as ve, vModelSelect as Ie, withKeys as kt, resolveDynamicComponent as Ul, vModelCheckbox as jt, onMounted as Zt, onUnmounted as Vl } from "vue";
import { u as Ct } from "./useDevInspector-BWEfypHj.js";
import { a as Vc } from "./useDevInspector-BWEfypHj.js";
import { default as Mc } from "./vite.js";
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var _t = {
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
const Sl = (N) => N.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), j = (N, a) => ({ size: I, strokeWidth: U = 2, absoluteStrokeWidth: K, color: J, class: ne, ...ae }, { attrs: pe, slots: L }) => Ot(
  "svg",
  {
    ..._t,
    width: I || _t.width,
    height: I || _t.height,
    stroke: J || _t.stroke,
    "stroke-width": K ? Number(U) * 24 / Number(I) : U,
    ...pe,
    class: ["lucide", `lucide-${Sl(N)}`],
    ...ae
  },
  [
    ...a.map((G) => Ot(...G)),
    ...L.default ? [L.default()] : []
  ]
);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ml = j("AlertCircleIcon", [
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
const El = j("AlertTriangleIcon", [
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
const Nt = j("CalculatorIcon", [
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
const Dl = j("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qt = j("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pl = j("ChevronUpIcon", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ll = j("ClipboardListIcon", [
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
const Ht = j("ClockIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qt = j("CodeIcon", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pt = j("DatabaseIcon", [
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
const gt = j("DownloadIcon", [
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
const Bl = j("ExternalLinkIcon", [
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
const Al = j("EyeOffIcon", [
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
const Fl = j("EyeIcon", [
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wt = j("FileSpreadsheetIcon", [
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
const It = j("FileTextIcon", [
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
const Ol = j("FormInputIcon", [
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
const jl = j("GitBranchIcon", [
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
const Nl = j("GitMergeIcon", [
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
const Rt = j("ListIcon", [
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
const zt = j("Loader2Icon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hl = j("LockIcon", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ql = j("MailIcon", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rl = j("MessageSquareIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zl = j("MinusIcon", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yt = j("MousePointer2Icon", [
  ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kt = j("PenLineIcon", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gt = j("PenSquareIcon", [
  ["path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1qinfi" }],
  ["path", { d: "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z", key: "w2jsv5" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yt = j("PlusIcon", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const el = j("SaveIcon", [
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
const Yl = j("ScanIcon", [
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
const Kl = j("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xt = j("ServerIcon", [
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
const Jt = j("ShieldQuestionIcon", [
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
const Gl = j("ShieldIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xt = j("Trash2Icon", [
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
const Xl = j("TypeIcon", [
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
const Jl = j("UploadIcon", [
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
const Tt = j("Wand2Icon", [
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
const Qe = j("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zl = j("ZapIcon", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
]);
async function Ql(N, a, I = {}) {
  var ie;
  const U = await import("./xlsx-BopDBbWb.js"), { systemName: K = "System", author: J = "" } = I, ne = /* @__PURE__ */ new Date(), ae = `${ne.getFullYear()}/${ne.getMonth() + 1}/${ne.getDate()}`, pe = U.utils.book_new(), L = [];
  L.push([
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
    K,
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
    J,
    "",
    "作成日",
    "",
    "",
    "",
    "",
    ae
  ]), L.push([]), L.push([
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
  ]), L.push([]), L.push(["機能概要"]), L.push([(N == null ? void 0 : N.description) || ""]), L.push([]), L.push(["画面レイアウト　figmaURL"]), L.push([(N == null ? void 0 : N.figmaUrl) || ""]), L.push([]), N != null && N.apis && N.apis.length > 0 && (L.push(["API一覧"]), L.push(["", "メソッド", "", "エンドポイント", "", "", "", "", "", "", "", "説明"]), N.apis.forEach((S) => {
    L.push(["", S.method, "", S.endpoint, "", "", "", "", "", "", "", S.description]);
  }), L.push([])), L.push(["画面項目　ヘッダーフッターは省く"]), L.push([
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
  ]), Object.values(a).forEach((S, Ue) => {
    var p, V, X;
    const je = S.id;
    let me = "", H = "", _ = "";
    if ((p = S.note) != null && p.text && (me = S.note.text), S.fieldInfo && (me += me ? `
` : "", me += `DB: ${S.fieldInfo.table}.${S.fieldInfo.column}`, S.fieldInfo.type && (me += ` (${S.fieldInfo.type})`), S.fieldInfo.description && (me += `
${S.fieldInfo.description}`)), S.actionInfo && (_ = `[${{
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行",
      csv_export: "CSV出力",
      csv_import: "CSV取込",
      email: "メール送信"
    }[S.actionInfo.type] || S.actionInfo.type}]`, S.actionInfo.target && (_ += ` ${S.actionInfo.method || ""} ${S.actionInfo.target}`), S.actionInfo.description && (_ += `
${S.actionInfo.description}`)), S.links) {
      const P = [];
      S.links.testPath && P.push(`テスト: ${S.links.testPath}`), S.links.figmaUrl && P.push(`Figma: ${S.links.figmaUrl}`), S.links.githubIssue && P.push(`Issue: ${S.links.githubIssue}`), S.links.githubPr && P.push(`PR: ${S.links.githubPr}`), P.length > 0 && (_ += _ ? `

` : "", _ += P.join(`
`));
    }
    if (S.devMeta) {
      const P = [];
      (V = S.devMeta.usedStores) != null && V.length && P.push(`Store: ${S.devMeta.usedStores.join(", ")}`), (X = S.devMeta.usedComponents) != null && X.length && P.push(`Components: ${S.devMeta.usedComponents.join(", ")}`), S.devMeta.accessibility && P.push(`A11y: ${S.devMeta.accessibility}`), S.devMeta.responsive && P.push(`Responsive: ${S.devMeta.responsive}`), P.length > 0 && (_ += _ ? `

` : "", _ += `[開発情報]
` + P.join(`
`));
    }
    L.push([
      "",
      Ue + 1,
      "",
      je,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      me,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      H,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      _
    ]);
  });
  const se = U.utils.aoa_to_sheet(L);
  se["!cols"] = [
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
  ], U.utils.book_append_sheet(pe, se, "画面設計書");
  const Te = `画面仕様書_${((ie = N == null ? void 0 : N.name) == null ? void 0 : ie.replace(/[/\\?%*:|"<>]/g, "-")) || "screen"}_${ae.replace(/\//g, "")}.xlsx`;
  return U.writeFile(pe, Te), Te;
}
const Wl = {
  key: 0,
  class: "di-panel",
  "data-dev-inspector": ""
}, es = { class: "di-header" }, ts = { class: "di-header-title" }, ls = { class: "di-tab-bar" }, ss = {
  key: 0,
  class: "di-tab-badge"
}, os = {
  key: 0,
  class: "di-tab-badge"
}, ns = {
  key: 0,
  class: "di-tab-badge"
}, is = { class: "di-edit-section" }, as = { class: "di-note-toggle-badge" }, ds = {
  key: 1,
  class: "di-note-filter"
}, us = { class: "di-filter-buttons" }, rs = ["onClick"], cs = {
  key: 0,
  class: "di-unannotated-badge"
}, vs = {
  key: 2,
  class: "di-unannotated-results"
}, ps = { class: "di-unannotated-summary" }, ms = { key: 0 }, fs = { key: 1 }, hs = { key: 2 }, ys = { class: "di-unannotated-list" }, bs = ["onMouseenter"], gs = { class: "di-unannotated-text" }, ks = ["onClick"], xs = ["onClick"], $s = {
  key: 3,
  class: "di-unannotated-empty"
}, ws = {
  key: 4,
  class: "di-broken-warning"
}, Cs = { class: "di-broken-header" }, _s = { class: "di-broken-list" }, Is = { class: "di-broken-item-info" }, Ts = { class: "di-broken-item-note" }, Us = { class: "di-broken-item-selector" }, Vs = { class: "di-broken-item-actions" }, Ss = ["onClick"], Ms = ["onClick"], Es = { class: "di-broken-actions" }, Ds = { class: "di-analysis-section" }, Ps = { class: "di-analysis-header" }, Ls = { class: "di-analysis-input" }, Bs = { class: "di-analysis-buttons" }, As = ["disabled"], Fs = ["disabled"], Os = {
  key: 0,
  class: "di-analysis-error"
}, js = {
  key: 1,
  class: "di-analysis-status"
}, Ns = { class: "di-analysis-count" }, Hs = {
  key: 2,
  class: "di-analysis-filter"
}, qs = { class: "di-filter-buttons" }, Rs = ["onClick"], zs = {
  key: 0,
  class: "di-hidden-actions"
}, Ys = ["disabled"], Ks = { key: 1 }, Gs = { key: 2 }, Xs = {
  key: 3,
  class: "di-page-apis"
}, Js = {
  key: 0,
  class: "di-api-group"
}, Zs = { class: "di-api-group-header" }, Qs = { class: "di-api-group-count" }, Ws = { class: "di-api-group-list" }, eo = { class: "di-api-endpoint" }, to = {
  key: 0,
  class: "di-api-variable"
}, lo = { class: "di-api-trigger" }, so = {
  key: 1,
  class: "di-api-group"
}, oo = { class: "di-api-group-header" }, no = { class: "di-api-group-count" }, io = { class: "di-api-group-list" }, ao = { class: "di-api-endpoint" }, uo = {
  key: 0,
  class: "di-api-variable"
}, ro = { class: "di-content" }, co = { class: "di-cross-search-section" }, vo = {
  key: 0,
  class: "di-cross-search-body"
}, po = {
  class: "di-filter-buttons",
  style: { "margin-bottom": "8px" }
}, mo = ["onClick"], fo = ["placeholder"], ho = {
  key: 0,
  class: "di-cross-search-count"
}, yo = {
  key: 1,
  class: "di-cross-search-results"
}, bo = { class: "di-cross-search-page-header" }, go = {
  key: 0,
  class: "di-cross-search-page-name"
}, ko = ["onClick"], xo = { class: "di-cross-search-field" }, $o = {
  key: 0,
  class: "di-cross-search-context"
}, wo = { class: "di-screen-flow-section" }, Co = {
  key: 0,
  class: "di-screen-flow-badge"
}, _o = {
  key: 0,
  class: "di-screen-flow-body"
}, Io = {
  key: 0,
  class: "di-screen-flow-empty"
}, To = { class: "di-flow-node-path" }, Uo = {
  key: 0,
  class: "di-flow-node-name"
}, Vo = ["onClick"], So = { class: "di-flow-target" }, Mo = {
  key: 0,
  class: "di-flow-edge-label"
}, Eo = {
  key: 1,
  class: "di-flow-orphans"
}, Do = { class: "di-section" }, Po = { class: "di-screen-header" }, Lo = { class: "di-screen-name" }, Bo = {
  key: 0,
  class: "di-screen-desc"
}, Ao = {
  key: 1,
  class: "di-auth-badges"
}, Fo = {
  key: 0,
  class: "di-auth-badge di-auth-required"
}, Oo = {
  key: 1,
  class: "di-auth-note"
}, jo = {
  key: 0,
  class: "di-card"
}, No = { class: "di-card-label" }, Ho = { class: "di-code-blue" }, qo = {
  key: 1,
  class: "di-card"
}, Ro = { class: "di-card-label" }, zo = ["href"], Yo = {
  key: 2,
  class: "di-card"
}, Ko = { class: "di-card-label" }, Go = { class: "di-api-list" }, Xo = { class: "di-api-info" }, Jo = { class: "di-api-endpoint" }, Zo = {
  key: 0,
  class: "di-api-desc"
}, Qo = {
  key: 0,
  class: "di-api-timing-badge"
}, Wo = {
  key: 3,
  class: "di-card"
}, en = { class: "di-card-label" }, tn = { class: "di-screen-notes" }, ln = {
  key: 1,
  class: "di-no-spec"
}, sn = { class: "di-card" }, on = { class: "di-card-header" }, nn = { class: "di-card-label" }, an = { class: "di-count-badge" }, dn = { class: "di-section" }, un = {
  class: "di-section-header",
  style: { "margin-bottom": "8px" }
}, rn = {
  key: 0,
  class: "di-section-badge"
}, cn = { class: "di-master-table-name" }, vn = ["onClick"], pn = { class: "di-master-item-header" }, mn = { class: "di-master-col-name" }, fn = {
  key: 0,
  class: "di-master-col-type"
}, hn = { class: "di-master-item-name" }, yn = { class: "di-master-entries-preview" }, bn = {
  key: 0,
  class: "di-master-entry-more"
}, gn = { class: "di-master-editor" }, kn = { class: "di-master-editor-header" }, xn = { class: "di-master-editor-body" }, $n = { class: "di-master-row" }, wn = { class: "di-master-field" }, Cn = ["disabled"], _n = { class: "di-master-field" }, In = ["disabled"], Tn = { class: "di-master-row" }, Un = { class: "di-master-field" }, Vn = { class: "di-master-field" }, Sn = {
  class: "di-master-field",
  style: { "margin-bottom": "12px" }
}, Mn = { class: "di-master-entries-header" }, En = { class: "di-master-entries-list" }, Dn = ["onUpdate:modelValue"], Pn = ["onUpdate:modelValue"], Ln = ["onUpdate:modelValue"], Bn = ["onUpdate:modelValue"], An = ["onClick"], Fn = {
  class: "di-master-entries-header",
  style: { "margin-top": "16px" }
}, On = {
  key: 0,
  class: "di-master-entries-list"
}, jn = ["onUpdate:modelValue"], Nn = ["value"], Hn = ["onUpdate:modelValue"], qn = ["value"], Rn = ["onUpdate:modelValue"], zn = ["onUpdate:modelValue"], Yn = ["onClick"], Kn = {
  key: 1,
  class: "di-master-empty",
  style: { "margin-top": "4px", "font-size": "11px" }
}, Gn = { class: "di-master-editor-footer" }, Xn = ["disabled"], Jn = { class: "di-section" }, Zn = {
  class: "di-section-header",
  style: { "margin-bottom": "8px" }
}, Qn = {
  key: 0,
  class: "di-section-badge"
}, Wn = ["onClick"], ei = { class: "di-batch-item-info" }, ti = { class: "di-batch-item-name" }, li = {
  key: 0,
  class: "di-batch-item-schedule"
}, si = { class: "di-batch-editor" }, oi = { class: "di-batch-editor-header" }, ni = { class: "di-batch-editor-body" }, ii = { class: "di-batch-row" }, ai = { class: "di-batch-field" }, di = { class: "di-batch-field" }, ui = { class: "di-batch-row" }, ri = { class: "di-batch-field" }, ci = {
  class: "di-batch-field",
  style: { "margin-bottom": "12px" }
}, vi = { class: "di-batch-row" }, pi = { class: "di-batch-field" }, mi = { class: "di-batch-tags-input" }, fi = ["onClick"], hi = { class: "di-batch-field" }, yi = { class: "di-batch-tags-input" }, bi = ["onClick"], gi = { class: "di-batch-section-label" }, ki = { key: 0 }, xi = { class: "di-batch-step-no" }, $i = ["onUpdate:modelValue"], wi = ["onUpdate:modelValue"], Ci = ["onUpdate:modelValue"], _i = ["onUpdate:modelValue"], Ii = ["onClick"], Ti = { class: "di-batch-row" }, Ui = { class: "di-batch-field" }, Vi = { class: "di-batch-field" }, Si = { class: "di-batch-row" }, Mi = { class: "di-batch-field" }, Ei = { class: "di-batch-field" }, Di = { class: "di-batch-editor-footer" }, Pi = ["disabled"], Li = { class: "di-export-buttons" }, Bi = { class: "di-action-buttons" }, Ai = {
  key: 0,
  class: "di-export-summary"
}, Fi = { class: "di-export-summary-row" }, Oi = { class: "di-export-summary-count" }, ji = { class: "di-export-summary-row" }, Ni = { class: "di-export-summary-count" }, Hi = { class: "di-export-summary-row" }, qi = { class: "di-export-summary-count" }, Ri = {
  key: 0,
  class: "di-indicator",
  "data-dev-inspector": ""
}, zi = { class: "di-modal" }, Yi = ["value"], Ki = { class: "di-modal-actions" }, Gi = { class: "di-modal" }, Xi = { class: "di-file-drop" }, Ji = {
  key: 0,
  class: "di-error"
}, Zi = { class: "di-modal-actions" }, Qi = ["disabled"], Wi = /* @__PURE__ */ wt({
  __name: "DevPanel",
  setup(N) {
    const a = Ct(), I = h("elements"), U = h(!1), K = h(!1), J = h(""), ne = h(""), ae = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, pe = z(() => a.currentScreenSpec), L = z(() => a.getScreenConfig()), G = z(() => {
      var o;
      const r = L.value, l = pe.value;
      return !r && !l ? null : {
        name: (r == null ? void 0 : r.name) || (l == null ? void 0 : l.name) || "",
        description: (r == null ? void 0 : r.description) || (l == null ? void 0 : l.description) || "",
        componentPath: (r == null ? void 0 : r.componentPath) || (l == null ? void 0 : l.componentPath) || "",
        figmaUrl: (r == null ? void 0 : r.figmaUrl) || (l == null ? void 0 : l.figmaUrl) || "",
        apis: (r == null ? void 0 : r.apis) || ((o = l == null ? void 0 : l.apis) == null ? void 0 : o.map((w) => ({ ...w, loadTiming: void 0 }))) || [],
        auth: (r == null ? void 0 : r.auth) || null,
        notes: (r == null ? void 0 : r.notes) || (l != null && l.notes ? l.notes.join(`
`) : "")
      };
    }), se = z(() => Object.keys(a.elementConfigs).length), be = z(() => Object.values(a.elementConfigs).filter((r) => {
      var l, o;
      return !!((l = r.note) != null && l.text || (o = r.note) != null && o.displayType);
    }).length), Te = z(() => {
      const r = a.noteHighlightFilter;
      return r === "all" ? be.value : Object.values(a.elementConfigs).filter((l) => {
        var we, Ge, at, rt, Pe, Ye, dt;
        if (!((we = l.note) != null && we.text || (Ge = l.note) != null && Ge.displayType || l.elementType)) return !1;
        const o = (at = l.note) == null ? void 0 : at.displayType, w = !!((rt = l.note) != null && rt.condition || (Pe = l.note) != null && Pe.conditionColumn), g = !!((Ye = l.note) != null && Ye.storedCalc);
        switch (r) {
          case "db":
            return o === "db_direct" || o === "db_formatted";
          case "calculated":
            return o === "calculated";
          case "storedCalc":
            return g;
          case "static":
            return o === "static";
          case "conditional":
            return w;
          case "action":
            return l.elementType === "action";
          case "form":
            return l.elementType === "form";
          case "other":
            return o === "other" || !o && !l.elementType && !!((dt = l.note) != null && dt.text);
          default:
            return !0;
        }
      }).length;
    });
    function ie() {
      const r = a.exportConfigs();
      navigator.clipboard.writeText(r), U.value = !1;
    }
    function S() {
      const r = a.exportConfigs(), l = new Blob([r], { type: "application/json" }), o = URL.createObjectURL(l), w = document.createElement("a");
      w.href = o, w.download = "dev-mode-configs.json", w.click(), URL.revokeObjectURL(o), U.value = !1;
    }
    function Ue() {
      a.downloadAnnotations();
    }
    async function je() {
      try {
        await Ql(
          a.currentScreenSpec,
          a.elementConfigs,
          { systemName: "System" }
        );
      } catch (r) {
        console.error("Failed to export xlsx:", r), alert("xlsx export failed. Make sure xlsx package is installed.");
      }
    }
    function me() {
      try {
        a.importConfigs(J.value), J.value = "", ne.value = "", K.value = !1;
      } catch {
        ne.value = "JSONの形式が正しくありません";
      }
    }
    function H(r) {
      var g;
      const o = (g = r.target.files) == null ? void 0 : g[0];
      if (!o) return;
      const w = new FileReader();
      w.onload = (we) => {
        var Ge;
        J.value = (Ge = we.target) == null ? void 0 : Ge.result;
      }, w.readAsText(o);
    }
    function _() {
      confirm("すべての要素設定を削除しますか？") && a.clearAllConfigs();
    }
    const p = h("/dev-inspector-analysis.json"), V = h(!1), X = h(""), P = h(0), Z = h(!1), oe = [
      { value: "all", label: "すべて" },
      { value: "db", label: "DB" },
      { value: "calculated", label: "計算値" },
      { value: "storedCalc", label: "保存計算値" },
      { value: "static", label: "固定" },
      { value: "conditional", label: "条件付き" },
      { value: "action", label: "アクション" },
      { value: "form", label: "フォーム" },
      { value: "other", label: "その他" }
    ], fe = [
      { value: "all", label: "すべて" },
      { value: "db-api", label: "DB/API" },
      { value: "form", label: "フォーム" },
      { value: "button", label: "ボタン" },
      { value: "link", label: "リンク" },
      { value: "modal", label: "モーダル" },
      { value: "conditional", label: "条件" },
      { value: "computed", label: "計算" },
      { value: "other", label: "その他" },
      { value: "none", label: "非表示" }
    ], te = z(() => a.getCurrentPageApis()), Ce = {
      onMount: "画面読込時",
      useFetch: "useFetch",
      useAsyncData: "useAsyncData",
      watch: "watch",
      action: "アクション",
      unknown: "不明"
    };
    async function Ve() {
      V.value = !0, X.value = "";
      try {
        if (await a.loadAnalysisData(p.value), a.analysisData) {
          const r = Object.values(a.analysisData.components).reduce((l, o) => l + o.elements.length, 0);
          alert(`分析データを読み込みました（${Object.keys(a.analysisData.components).length}コンポーネント、${r}要素）`);
        } else
          X.value = "分析データの読み込みに失敗しました";
      } catch (r) {
        X.value = `読み込みエラー: ${r}`;
      } finally {
        V.value = !1;
      }
    }
    async function A() {
      if (!a.analysisData) {
        alert("先に分析データを読み込んでください");
        return;
      }
      P.value = await a.applyAnalysisToPage();
    }
    const y = z(() => a.brokenAnnotations.length);
    $t(() => a.isPanelOpen, (r) => {
      r && a.detectBrokenAnnotations();
    });
    function T() {
      confirm(`${y.value}件の壊れたメモを削除しますか？`) && a.deleteBrokenAnnotations();
    }
    const le = h(!1), q = h(null), Y = h({
      table: "",
      column: "",
      name: "",
      columnType: "",
      description: "",
      entries: [],
      transitions: []
    }), ke = z(() => Object.keys(a.masterDefinitions).length), ge = z(() => {
      const r = Object.values(a.masterDefinitions), l = {};
      for (const o of r)
        l[o.table] || (l[o.table] = []), l[o.table].push(o);
      return l;
    });
    function re(r) {
      if (r) {
        const l = a.getMasterDefinition(r);
        l && (q.value = r, Y.value = {
          table: l.table,
          column: l.column,
          name: l.name,
          columnType: l.columnType || "",
          description: l.description || "",
          entries: [...l.entries.map((o) => ({ ...o }))],
          transitions: l.transitions ? l.transitions.map((o) => ({ ...o })) : []
        });
      } else
        q.value = null, Y.value = {
          table: "",
          column: "",
          name: "",
          columnType: "",
          description: "",
          entries: [{ value: "", label: "" }],
          transitions: []
        };
      le.value = !0;
    }
    function xe() {
      const r = Y.value;
      if (!r.table || !r.column) return;
      const l = `${r.table}.${r.column}`, o = r.transitions.filter((g) => g.from || g.to || g.trigger), w = {
        id: l,
        table: r.table,
        column: r.column,
        name: r.name || r.column,
        columnType: r.columnType || void 0,
        description: r.description || void 0,
        entries: r.entries.filter((g) => g.value || g.label),
        transitions: o.length > 0 ? o : void 0,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      a.setMasterDefinition(w), le.value = !1;
    }
    function He() {
      Y.value.entries.push({ value: "", label: "" });
    }
    function B(r) {
      Y.value.entries.splice(r, 1);
    }
    function de() {
      Y.value.transitions.push({ from: "", to: "", trigger: "" });
    }
    function W(r) {
      Y.value.transitions.splice(r, 1);
    }
    function ee(r) {
      confirm(`マスタ定義「${r}」を削除しますか？`) && a.deleteMasterDefinition(r);
    }
    const Q = h(!1), $e = h(null), F = h({
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
    }), he = h(""), ue = h(""), Ne = z(() => Object.keys(a.batchDefinitions).length), We = z(() => Object.values(a.batchDefinitions));
    function Ke(r) {
      if (r) {
        const l = a.getBatchDefinition(r);
        l && ($e.value = r, F.value = {
          name: l.name,
          schedule: l.schedule || "",
          trigger: l.trigger || "",
          description: l.description || "",
          inputTables: l.inputTables ? [...l.inputTables] : [],
          outputTables: l.outputTables ? [...l.outputTables] : [],
          steps: l.steps.map((o) => ({ ...o })),
          timeout: l.timeout || "",
          retryPolicy: l.retryPolicy || "",
          notifyOnError: l.notifyOnError || "",
          notifyOnComplete: l.notifyOnComplete || ""
        });
      } else
        $e.value = null, F.value = {
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
      he.value = "", ue.value = "", Q.value = !0;
    }
    function et() {
      const r = F.value;
      if (!r.name) return;
      const o = {
        id: $e.value || `batch_${r.name.replace(/\s+/g, "_").toLowerCase()}_${Date.now()}`,
        name: r.name,
        schedule: r.schedule || void 0,
        trigger: r.trigger || void 0,
        description: r.description || void 0,
        inputTables: r.inputTables.length > 0 ? r.inputTables : void 0,
        outputTables: r.outputTables.length > 0 ? r.outputTables : void 0,
        steps: r.steps.filter((w) => w.description).map((w, g) => ({ ...w, order: g + 1 })),
        timeout: r.timeout || void 0,
        retryPolicy: r.retryPolicy || void 0,
        notifyOnError: r.notifyOnError || void 0,
        notifyOnComplete: r.notifyOnComplete || void 0,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      a.setBatchDefinition(o), Q.value = !1;
    }
    function tt() {
      const r = F.value.steps.length + 1;
      F.value.steps.push({ order: r, description: "" });
    }
    function lt(r) {
      F.value.steps.splice(r, 1);
    }
    function Ee(r) {
      var l;
      confirm(`バッチ定義「${((l = a.getBatchDefinition(r)) == null ? void 0 : l.name) || r}」を削除しますか？`) && a.deleteBatchDefinition(r);
    }
    function st() {
      const r = he.value.trim();
      r && !F.value.inputTables.includes(r) && F.value.inputTables.push(r), he.value = "";
    }
    function Le(r) {
      F.value.inputTables.splice(r, 1);
    }
    function qe() {
      const r = ue.value.trim();
      r && !F.value.outputTables.includes(r) && F.value.outputTables.push(r), ue.value = "";
    }
    function ct(r) {
      F.value.outputTables.splice(r, 1);
    }
    async function ot() {
      Z.value = !0;
      try {
        a.clearHiddenSelectors(), a.analysisData && await a.applyAnalysisToPage();
      } finally {
        Z.value = !1;
      }
    }
    const Re = [
      { value: "column", label: "カラム", placeholder: "users.email, orders..." },
      { value: "api", label: "API", placeholder: "GET /api/users..." },
      { value: "text", label: "テキスト", placeholder: "メモ、説明文で検索..." }
    ], nt = z(() => {
      var r;
      return ((r = Re.find((l) => l.value === a.crossSearchMode)) == null ? void 0 : r.placeholder) || "検索...";
    }), ze = z(() => {
      const r = {};
      for (const l of a.crossSearchResults)
        r[l.pagePath] || (r[l.pagePath] = { pagePath: l.pagePath, pageName: l.pageName, items: [] }), r[l.pagePath].items.push(l);
      return Object.values(r);
    }), it = z(() => ze.value.length), De = z(() => {
      const r = a.unannotatedElements;
      return {
        binding: r.filter((l) => l.category === "binding").length,
        form: r.filter((l) => l.category === "form").length,
        action: r.filter((l) => l.category === "action").length
      };
    });
    function ye() {
      a.showUnannotatedDetection ? (a.showUnannotatedDetection = !1, a.unannotatedElements = [], a.hoveredUnannotatedSelector = null) : (a.showUnannotatedDetection = !0, a.detectUnannotatedElements());
    }
    function Be(r) {
      a.unannotatedElements = a.unannotatedElements.filter((l) => l.selector !== r);
    }
    function Ae(r) {
      a.hoveredUnannotatedSelector = r;
      try {
        const l = document.querySelector(r);
        if (!l) return;
        const o = l.getBoundingClientRect();
        (o.bottom < 0 || o.top > window.innerHeight) && l.scrollIntoView({ behavior: "smooth", block: "center" });
      } catch {
      }
    }
    function Je() {
      a.hoveredUnannotatedSelector = null;
    }
    const vt = z(() => typeof window < "u" ? window.location.pathname : "/"), d = z(() => {
      const r = a.screenFlowData, l = {};
      for (const o of r.edges) {
        if (!l[o.from]) {
          const w = r.nodes.find((g) => g.path === o.from) || { path: o.from, name: o.from, annotationCount: 0 };
          l[o.from] = { node: w, edges: [] };
        }
        l[o.from].edges.push(o);
      }
      return Object.values(l);
    });
    function mt(r) {
      r && a.startEditing(r);
    }
    return (r, l) => (n(), i(C, null, [
      (n(), Me(ut, { to: "body" }, [
        u(a).isEnabled && !u(a).isPanelOpen ? (n(), i("button", {
          key: 0,
          onClick: l[0] || (l[0] = //@ts-ignore
          (...o) => u(a).openPanel && u(a).openPanel(...o)),
          class: "di-fab",
          title: "画面仕様を表示",
          "data-dev-inspector": ""
        }, [
          $(u(It), { style: { width: "20px", height: "20px" } })
        ])) : c("", !0)
      ])),
      (n(), Me(ut, { to: "body" }, [
        u(a).isEnabled && u(a).isPanelOpen ? (n(), i("div", Wl, [
          e("div", es, [
            e("div", ts, [
              $(u(qt), { style: { width: "20px", height: "20px", color: "#60a5fa" } }),
              l[53] || (l[53] = e("span", null, "Developer Mode", -1))
            ]),
            e("button", {
              onClick: l[1] || (l[1] = //@ts-ignore
              (...o) => u(a).closePanel && u(a).closePanel(...o)),
              class: "di-close-btn"
            }, [
              $(u(Qe), { style: { width: "20px", height: "20px" } })
            ])
          ]),
          e("div", ls, [
            e("button", {
              onClick: l[2] || (l[2] = (o) => I.value = "elements"),
              class: R(["di-tab-btn", { active: I.value === "elements" }])
            }, [
              $(u(Kt), { style: { width: "14px", height: "14px" } }),
              l[54] || (l[54] = e("span", null, "要素設定", -1)),
              se.value > 0 ? (n(), i("span", ss, v(se.value), 1)) : c("", !0)
            ], 2),
            e("button", {
              onClick: l[3] || (l[3] = (o) => I.value = "masters"),
              class: R(["di-tab-btn", { active: I.value === "masters" }])
            }, [
              $(u(pt), { style: { width: "14px", height: "14px" } }),
              l[55] || (l[55] = e("span", null, "マスタ", -1)),
              ke.value > 0 ? (n(), i("span", os, v(ke.value), 1)) : c("", !0)
            ], 2),
            e("button", {
              onClick: l[4] || (l[4] = (o) => I.value = "batches"),
              class: R(["di-tab-btn", { active: I.value === "batches" }])
            }, [
              $(u(Ht), { style: { width: "14px", height: "14px" } }),
              l[56] || (l[56] = e("span", null, "バッチ", -1)),
              Ne.value > 0 ? (n(), i("span", ns, v(Ne.value), 1)) : c("", !0)
            ], 2),
            e("button", {
              onClick: l[5] || (l[5] = (o) => I.value = "export"),
              class: R(["di-tab-btn", { active: I.value === "export" }])
            }, [
              $(u(gt), { style: { width: "14px", height: "14px" } }),
              l[57] || (l[57] = e("span", null, "出力", -1))
            ], 2)
          ]),
          f(e("div", is, [
            e("button", {
              onClick: l[6] || (l[6] = //@ts-ignore
              (...o) => u(a).togglePickMode && u(a).togglePickMode(...o)),
              class: R(["di-pick-btn", { active: u(a).isPickMode }])
            }, [
              $(u(Yt), { style: { width: "16px", height: "16px" } }),
              e("span", null, v(u(a).isPickMode ? "要素選択中..." : "任意の要素にメモを追加"), 1)
            ], 2),
            be.value > 0 ? (n(), i("button", {
              key: 0,
              onClick: l[7] || (l[7] = //@ts-ignore
              (...o) => u(a).toggleNoteHighlights && u(a).toggleNoteHighlights(...o)),
              class: R(["di-note-toggle-btn", { active: u(a).showNoteHighlights }])
            }, [
              u(a).showNoteHighlights ? (n(), Me(u(Fl), {
                key: 0,
                style: { width: "14px", height: "14px" }
              })) : (n(), Me(u(Al), {
                key: 1,
                style: { width: "14px", height: "14px" }
              })),
              l[58] || (l[58] = e("span", null, "メモハイライト", -1)),
              e("span", as, v(u(a).noteHighlightFilter === "all" ? be.value : `${Te.value}/${be.value}`), 1)
            ], 2)) : c("", !0),
            be.value > 0 && u(a).showNoteHighlights ? (n(), i("div", ds, [
              e("div", us, [
                (n(), i(C, null, E(oe, (o) => e("button", {
                  key: o.value,
                  onClick: (w) => u(a).noteHighlightFilter = o.value,
                  class: R(["di-filter-btn", { active: u(a).noteHighlightFilter === o.value }])
                }, v(o.label), 11, rs)), 64))
              ])
            ])) : c("", !0),
            e("button", {
              onClick: ye,
              class: R(["di-unannotated-btn", { active: u(a).showUnannotatedDetection }])
            }, [
              $(u(Ll), { style: { width: "14px", height: "14px" } }),
              e("span", null, v(u(a).showUnannotatedDetection ? "未登録検出 ON" : "未登録要素を検出"), 1),
              u(a).unannotatedElements.length > 0 ? (n(), i("span", cs, v(u(a).unannotatedElements.length), 1)) : c("", !0)
            ], 2),
            u(a).showUnannotatedDetection && u(a).unannotatedElements.length > 0 ? (n(), i("div", vs, [
              e("div", ps, [
                D(v(u(a).unannotatedElements.length) + "件検出: ", 1),
                De.value.binding > 0 ? (n(), i("span", ms, "バインディング " + v(De.value.binding), 1)) : c("", !0),
                De.value.form > 0 ? (n(), i("span", fs, " / フォーム " + v(De.value.form), 1)) : c("", !0),
                De.value.action > 0 ? (n(), i("span", hs, " / アクション " + v(De.value.action), 1)) : c("", !0)
              ]),
              e("div", ys, [
                (n(!0), i(C, null, E(u(a).unannotatedElements, (o) => (n(), i("div", {
                  key: o.selector,
                  class: R(["di-unannotated-item", { "di-unannotated-item-active": u(a).hoveredUnannotatedSelector === o.selector, ["di-unannotated-item-" + o.category]: u(a).hoveredUnannotatedSelector === o.selector }]),
                  onMouseenter: (w) => Ae(o.selector),
                  onMouseleave: Je
                }, [
                  e("span", {
                    class: R(["di-unannotated-category", "di-unannotated-cat-" + o.category])
                  }, v(o.category === "binding" ? "DB" : o.category === "form" ? "Form" : "Act"), 3),
                  e("span", gs, v(o.text || o.tagName), 1),
                  e("button", {
                    onClick: (w) => u(a).quickAnnotate(o.selector, o.suggestedType),
                    class: "di-unannotated-register"
                  }, " 登録 ", 8, ks),
                  e("button", {
                    onClick: (w) => Be(o.selector),
                    class: "di-unannotated-dismiss"
                  }, [
                    $(u(Qe), { style: { width: "10px", height: "10px" } })
                  ], 8, xs)
                ], 42, bs))), 128))
              ])
            ])) : c("", !0),
            u(a).showUnannotatedDetection && u(a).unannotatedElements.length === 0 ? (n(), i("div", $s, " 未登録の要素はありません ")) : c("", !0),
            y.value > 0 ? (n(), i("div", ws, [
              e("div", Cs, [
                $(u(El), { style: { width: "14px", height: "14px", color: "#f59e0b" } }),
                e("span", null, v(y.value) + "件のメモが見つかりません", 1)
              ]),
              l[61] || (l[61] = e("div", { class: "di-broken-desc" }, "コード変更によりセレクタが壊れた可能性があります", -1)),
              e("div", _s, [
                (n(!0), i(C, null, E(u(a).brokenAnnotations, (o) => {
                  var w, g;
                  return n(), i("div", {
                    key: o,
                    class: "di-broken-item"
                  }, [
                    e("div", Is, [
                      e("div", Ts, v(((g = (w = u(a).elementConfigs[o]) == null ? void 0 : w.note) == null ? void 0 : g.text) || "(メモなし)"), 1),
                      e("div", Us, v(o), 1)
                    ]),
                    e("div", Vs, [
                      e("button", {
                        onClick: (we) => u(a).startRemap(o),
                        class: "di-broken-remap-btn",
                        title: "新しい要素に再設定"
                      }, [
                        $(u(Yt), { style: { width: "12px", height: "12px" } }),
                        l[59] || (l[59] = D(" 再設定 ", -1))
                      ], 8, Ss),
                      e("button", {
                        onClick: (we) => {
                          u(a).deleteElementConfig(o), u(a).detectBrokenAnnotations();
                        },
                        class: "di-broken-item-delete",
                        title: "削除"
                      }, [
                        $(u(xt), { style: { width: "12px", height: "12px" } })
                      ], 8, Ms)
                    ])
                  ]);
                }), 128))
              ]),
              e("div", Es, [
                e("button", {
                  onClick: T,
                  class: "di-broken-delete-btn"
                }, [
                  $(u(xt), { style: { width: "12px", height: "12px" } }),
                  l[60] || (l[60] = D(" まとめて削除 ", -1))
                ])
              ])
            ])) : c("", !0),
            e("div", Ds, [
              e("div", Ps, [
                $(u(Xt), { style: { width: "16px", height: "16px", color: "#3b82f6" } }),
                l[62] || (l[62] = e("span", null, "CLIソース解析", -1))
              ]),
              e("div", Ls, [
                f(e("input", {
                  "onUpdate:modelValue": l[8] || (l[8] = (o) => p.value = o),
                  type: "text",
                  class: "di-analysis-url",
                  placeholder: "/dev-inspector-analysis.json"
                }, null, 512), [
                  [k, p.value]
                ])
              ]),
              e("div", Bs, [
                e("button", {
                  onClick: Ve,
                  class: "di-analysis-btn",
                  disabled: V.value
                }, [
                  V.value ? (n(), Me(u(zt), {
                    key: 0,
                    class: "di-spin",
                    style: { width: "14px", height: "14px" }
                  })) : (n(), Me(u(gt), {
                    key: 1,
                    style: { width: "14px", height: "14px" }
                  })),
                  l[63] || (l[63] = e("span", null, "読み込み", -1))
                ], 8, As),
                e("button", {
                  onClick: A,
                  class: "di-analysis-btn di-analysis-btn-apply",
                  disabled: !u(a).analysisData
                }, [
                  $(u(Yl), { style: { width: "14px", height: "14px" } }),
                  l[64] || (l[64] = e("span", null, "ページに適用", -1))
                ], 8, Fs)
              ]),
              X.value ? (n(), i("div", Os, v(X.value), 1)) : c("", !0),
              u(a).analysisResults.length > 0 ? (n(), i("div", js, [
                e("span", Ns, v(u(a).analysisResults.filter((o) => o.matched).length), 1),
                e("span", null, "/ " + v(u(a).analysisResults.length) + " 要素がマッチ", 1)
              ])) : c("", !0),
              u(a).analysisResults.length > 0 ? (n(), i("div", Hs, [
                l[66] || (l[66] = e("span", { class: "di-filter-label" }, "表示フィルター:", -1)),
                e("div", qs, [
                  (n(), i(C, null, E(fe, (o) => e("button", {
                    key: o.value,
                    onClick: (w) => u(a).analysisFilter = o.value,
                    class: R(["di-filter-btn", { active: u(a).analysisFilter === o.value }])
                  }, v(o.label), 11, Rs)), 64))
                ]),
                u(a).hiddenAnalysisSelectors.size > 0 ? (n(), i("div", zs, [
                  e("button", {
                    onClick: ot,
                    class: "di-restore-btn",
                    disabled: Z.value
                  }, [
                    Z.value ? (n(), Me(u(zt), {
                      key: 0,
                      class: "di-spin",
                      style: { width: "12px", height: "12px" }
                    })) : c("", !0),
                    Z.value ? (n(), i("span", Ks, "リセット中...")) : (n(), i("span", Gs, "非表示 (" + v(u(a).hiddenAnalysisSelectors.size) + ") をリセット", 1))
                  ], 8, Ys),
                  e("button", {
                    onClick: l[9] || (l[9] = (o) => u(a).downloadChanges()),
                    class: "di-export-changes-btn",
                    title: "削除した要素をエクスポート (CLI merge用)"
                  }, [
                    $(u(gt), { style: { width: "12px", height: "12px" } }),
                    l[65] || (l[65] = e("span", null, "変更をエクスポート", -1))
                  ])
                ])) : c("", !0)
              ])) : c("", !0),
              te.value.pageLoad.length > 0 || te.value.action.length > 0 ? (n(), i("div", Xs, [
                te.value.pageLoad.length > 0 ? (n(), i("div", Js, [
                  e("div", Zs, [
                    l[67] || (l[67] = e("span", { class: "di-api-group-icon" }, "📡", -1)),
                    l[68] || (l[68] = e("span", null, "画面読込時のAPI", -1)),
                    e("span", Qs, v(te.value.pageLoad.length), 1)
                  ]),
                  e("div", Ws, [
                    (n(!0), i(C, null, E(te.value.pageLoad, (o) => (n(), i("div", {
                      key: o.endpoint + o.method,
                      class: "di-api-group-item"
                    }, [
                      e("span", {
                        class: R(["di-api-method", "di-api-method-" + o.method.toLowerCase()])
                      }, v(o.method), 3),
                      e("code", eo, v(o.endpoint || o.composable), 1),
                      o.variable ? (n(), i("span", to, "→ " + v(o.variable), 1)) : c("", !0),
                      e("span", lo, v(Ce[o.loadTrigger]), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                te.value.action.length > 0 ? (n(), i("div", so, [
                  e("div", oo, [
                    l[69] || (l[69] = e("span", { class: "di-api-group-icon" }, "👆", -1)),
                    l[70] || (l[70] = e("span", null, "アクション時のAPI", -1)),
                    e("span", no, v(te.value.action.length), 1)
                  ]),
                  e("div", io, [
                    (n(!0), i(C, null, E(te.value.action, (o) => (n(), i("div", {
                      key: o.endpoint + o.method,
                      class: "di-api-group-item"
                    }, [
                      e("span", {
                        class: R(["di-api-method", "di-api-method-" + o.method.toLowerCase()])
                      }, v(o.method), 3),
                      e("code", ao, v(o.endpoint || o.composable), 1),
                      o.variable ? (n(), i("span", uo, "→ " + v(o.variable), 1)) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0)
              ])) : c("", !0)
            ])
          ], 512), [
            [ht, I.value === "elements"]
          ]),
          e("div", ro, [
            f(e("div", null, [
              e("div", co, [
                e("button", {
                  onClick: l[10] || (l[10] = (o) => u(a).showCrossSearch = !u(a).showCrossSearch),
                  class: R(["di-cross-search-toggle", { active: u(a).showCrossSearch }])
                }, [
                  $(u(Kl), { style: { width: "14px", height: "14px" } }),
                  l[71] || (l[71] = e("span", null, "横断検索", -1))
                ], 2),
                u(a).showCrossSearch ? (n(), i("div", vo, [
                  e("div", po, [
                    (n(), i(C, null, E(Re, (o) => e("button", {
                      key: o.value,
                      onClick: (w) => u(a).crossSearchMode = o.value,
                      class: R(["di-filter-btn", { active: u(a).crossSearchMode === o.value }])
                    }, v(o.label), 11, mo)), 64))
                  ]),
                  f(e("input", {
                    "onUpdate:modelValue": l[11] || (l[11] = (o) => u(a).crossSearchQuery = o),
                    type: "text",
                    class: "di-cross-search-input",
                    placeholder: nt.value
                  }, null, 8, fo), [
                    [k, u(a).crossSearchQuery]
                  ]),
                  u(a).crossSearchQuery.trim() ? (n(), i("div", ho, v(u(a).crossSearchResults.length) + "件 (" + v(it.value) + "画面) ", 1)) : c("", !0),
                  ze.value.length > 0 ? (n(), i("div", yo, [
                    (n(!0), i(C, null, E(ze.value, (o) => (n(), i("div", {
                      key: o.pagePath,
                      class: "di-cross-search-group"
                    }, [
                      e("div", bo, [
                        D(v(o.pagePath) + " ", 1),
                        o.pageName !== o.pagePath ? (n(), i("span", go, "(" + v(o.pageName) + ")", 1)) : c("", !0)
                      ]),
                      (n(!0), i(C, null, E(o.items, (w, g) => (n(), i("div", {
                        key: g,
                        class: R(["di-cross-search-item", w.elementType ? "di-cross-item-" + w.elementType : ""]),
                        onClick: (we) => w.selector && u(a).startEditing(w.selector)
                      }, [
                        e("span", xo, v(w.matchedField), 1),
                        w.matchContext ? (n(), i("span", $o, v(w.matchContext), 1)) : c("", !0)
                      ], 10, ko))), 128))
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ]),
              e("div", wo, [
                e("button", {
                  onClick: l[12] || (l[12] = (o) => u(a).showScreenFlow = !u(a).showScreenFlow),
                  class: R(["di-screen-flow-toggle", { active: u(a).showScreenFlow }])
                }, [
                  $(u(Nl), { style: { width: "14px", height: "14px" } }),
                  l[72] || (l[72] = e("span", null, "画面フロー", -1)),
                  u(a).screenFlowData.edges.length > 0 ? (n(), i("span", Co, v(u(a).screenFlowData.nodes.length) + "画面 / " + v(u(a).screenFlowData.edges.length) + "遷移 ", 1)) : c("", !0)
                ], 2),
                u(a).showScreenFlow ? (n(), i("div", _o, [
                  u(a).screenFlowData.edges.length === 0 ? (n(), i("div", Io, " navigate型のアクションが登録されていません ")) : c("", !0),
                  (n(!0), i(C, null, E(d.value, (o) => (n(), i("div", {
                    key: o.node.path,
                    class: "di-flow-group"
                  }, [
                    e("div", {
                      class: R(["di-flow-node", { "di-flow-node-current": o.node.path === vt.value }])
                    }, [
                      e("span", To, v(o.node.path), 1),
                      o.node.name !== o.node.path ? (n(), i("span", Uo, "(" + v(o.node.name) + ")", 1)) : c("", !0)
                    ], 2),
                    (n(!0), i(C, null, E(o.edges, (w) => (n(), i("div", {
                      key: w.from + w.to,
                      class: "di-flow-edge",
                      onClick: (g) => mt(w.selector)
                    }, [
                      l[73] || (l[73] = e("span", { class: "di-flow-arrow" }, "→", -1)),
                      e("span", So, v(w.to), 1),
                      w.label ? (n(), i("span", Mo, "[" + v(w.label) + "]", 1)) : c("", !0)
                    ], 8, Vo))), 128))
                  ]))), 128)),
                  u(a).screenFlowData.orphanPages.length > 0 ? (n(), i("div", Eo, [
                    l[74] || (l[74] = e("div", { class: "di-flow-orphans-header" }, "遷移なしのページ", -1)),
                    (n(!0), i(C, null, E(u(a).screenFlowData.orphanPages, (o) => (n(), i("span", {
                      key: o.path,
                      class: "di-flow-orphan-item"
                    }, v(o.path), 1))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ]),
              G.value ? (n(), i(C, { key: 0 }, [
                e("div", Do, [
                  e("div", Po, [
                    e("h2", Lo, v(G.value.name), 1),
                    e("button", {
                      onClick: l[13] || (l[13] = (o) => u(a).editingScreen = !0),
                      class: "di-screen-edit-btn",
                      title: "画面情報を編集"
                    }, [
                      $(u(Gt), { style: { width: "14px", height: "14px" } })
                    ])
                  ]),
                  G.value.description ? (n(), i("p", Bo, v(G.value.description), 1)) : c("", !0),
                  G.value.auth ? (n(), i("div", Ao, [
                    G.value.auth.required ? (n(), i("span", Fo, [
                      $(u(Hl), { style: { width: "11px", height: "11px" } }),
                      l[75] || (l[75] = D(" ログイン必須 ", -1))
                    ])) : c("", !0),
                    (n(!0), i(C, null, E(G.value.auth.roles || [], (o) => (n(), i("span", {
                      key: o,
                      class: "di-auth-badge di-auth-role"
                    }, [
                      $(u(Gl), { style: { width: "11px", height: "11px" } }),
                      D(" " + v(o), 1)
                    ]))), 128)),
                    G.value.auth.description ? (n(), i("span", Oo, v(G.value.auth.description), 1)) : c("", !0)
                  ])) : c("", !0)
                ]),
                G.value.componentPath ? (n(), i("div", jo, [
                  e("div", No, [
                    $(u(qt), { style: { width: "16px", height: "16px" } }),
                    l[76] || (l[76] = e("span", null, "Component Path", -1))
                  ]),
                  e("code", Ho, v(G.value.componentPath), 1)
                ])) : c("", !0),
                G.value.figmaUrl ? (n(), i("div", qo, [
                  e("div", Ro, [
                    $(u(Bl), { style: { width: "16px", height: "16px" } }),
                    l[77] || (l[77] = e("span", null, "Figma Design", -1))
                  ]),
                  e("a", {
                    href: G.value.figmaUrl,
                    target: "_blank",
                    class: "di-link-purple"
                  }, v(G.value.figmaUrl), 9, zo)
                ])) : c("", !0),
                G.value.apis.length ? (n(), i("div", Yo, [
                  e("div", Ko, [
                    $(u(Xt), { style: { width: "16px", height: "16px" } }),
                    l[78] || (l[78] = e("span", null, "API Endpoints", -1))
                  ]),
                  e("div", Go, [
                    (n(!0), i(C, null, E(G.value.apis, (o, w) => (n(), i("div", {
                      key: w,
                      class: "di-api-item"
                    }, [
                      e("span", {
                        class: "di-method-badge",
                        style: Oe({ backgroundColor: ae[o.method] + "20", color: ae[o.method] })
                      }, v(o.method), 5),
                      e("div", Xo, [
                        e("code", Jo, v(o.endpoint), 1),
                        o.description ? (n(), i("p", Zo, v(o.description), 1)) : c("", !0)
                      ]),
                      o.loadTiming ? (n(), i("span", Qo, v(o.loadTiming === "onMount" ? "読込時" : o.loadTiming === "action" ? "アクション" : "条件付き"), 1)) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                G.value.notes ? (n(), i("div", Wo, [
                  e("div", en, [
                    $(u(Ml), { style: { width: "16px", height: "16px" } }),
                    l[79] || (l[79] = e("span", null, "Notes", -1))
                  ]),
                  e("p", tn, v(G.value.notes), 1)
                ])) : c("", !0)
              ], 64)) : (n(), i("div", ln, [
                $(u(It), { style: { width: "48px", height: "48px", color: "#334155" } }),
                l[81] || (l[81] = e("p", null, [
                  D("この画面の仕様情報は"),
                  e("br"),
                  D("まだ登録されていません")
                ], -1)),
                e("button", {
                  onClick: l[14] || (l[14] = (o) => u(a).editingScreen = !0),
                  class: "di-screen-register-btn"
                }, [
                  $(u(Gt), { style: { width: "14px", height: "14px" } }),
                  l[80] || (l[80] = D(" 画面情報を登録 ", -1))
                ])
              ])),
              e("div", sn, [
                e("div", on, [
                  e("div", nn, [
                    $(u(Kt), { style: { width: "16px", height: "16px" } }),
                    l[82] || (l[82] = e("span", null, "登録済み要素", -1)),
                    e("span", an, v(se.value), 1)
                  ])
                ])
              ])
            ], 512), [
              [ht, I.value === "elements"]
            ]),
            f(e("div", null, [
              e("div", dn, [
                e("div", un, [
                  $(u(pt), { style: { width: "16px", height: "16px", color: "#a78bfa" } }),
                  l[83] || (l[83] = e("span", null, "マスタ定義", -1)),
                  ke.value > 0 ? (n(), i("span", rn, v(ke.value), 1)) : c("", !0),
                  e("button", {
                    onClick: l[15] || (l[15] = (o) => re()),
                    class: "di-btn-icon",
                    style: { "margin-left": "auto" },
                    title: "新規追加"
                  }, [
                    $(u(yt), { style: { width: "14px", height: "14px" } })
                  ])
                ]),
                ke.value > 0 ? (n(!0), i(C, { key: 0 }, E(ge.value, (o, w) => (n(), i("div", {
                  key: w,
                  class: "di-master-table-group"
                }, [
                  e("div", cn, v(w), 1),
                  (n(!0), i(C, null, E(o, (g) => (n(), i("div", {
                    key: g.id,
                    class: "di-master-item",
                    onClick: (we) => re(g.id)
                  }, [
                    e("div", pn, [
                      e("span", mn, "." + v(g.column), 1),
                      g.columnType ? (n(), i("span", fn, v(g.columnType), 1)) : c("", !0),
                      e("span", hn, v(g.name), 1)
                    ]),
                    e("div", yn, [
                      (n(!0), i(C, null, E(g.entries.slice(0, 5), (we, Ge) => (n(), i("span", {
                        key: Ge,
                        class: "di-master-entry-chip",
                        style: Oe(we.color ? { borderColor: we.color, color: we.color } : {})
                      }, v(we.value) + "=" + v(we.label), 5))), 128)),
                      g.entries.length > 5 ? (n(), i("span", bn, "+" + v(g.entries.length - 5), 1)) : c("", !0)
                    ])
                  ], 8, vn))), 128))
                ]))), 128)) : (n(), i("div", {
                  key: 1,
                  class: "di-master-empty",
                  onClick: l[16] || (l[16] = (o) => re())
                }, [...l[84] || (l[84] = [
                  e("span", null, "テーブル.カラムのマスタ値を定義", -1)
                ])]))
              ]),
              (n(), Me(ut, { to: "body" }, [
                le.value ? (n(), i("div", {
                  key: 0,
                  "data-dev-inspector": "",
                  class: "di-modal-overlay",
                  onClick: l[25] || (l[25] = ve((o) => le.value = !1, ["self"]))
                }, [
                  e("div", gn, [
                    e("div", kn, [
                      e("h3", null, v(q.value ? "マスタ定義を編集" : "新規マスタ定義"), 1),
                      e("button", {
                        onClick: l[17] || (l[17] = (o) => le.value = !1),
                        class: "di-close-btn"
                      }, [
                        $(u(Qe), { style: { width: "16px", height: "16px" } })
                      ])
                    ]),
                    e("div", xn, [
                      e("div", $n, [
                        e("div", wn, [
                          l[85] || (l[85] = e("label", null, "テーブル", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[18] || (l[18] = (o) => Y.value.table = o),
                            placeholder: "orders",
                            disabled: !!q.value
                          }, null, 8, Cn), [
                            [k, Y.value.table]
                          ])
                        ]),
                        e("div", _n, [
                          l[86] || (l[86] = e("label", null, "カラム", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[19] || (l[19] = (o) => Y.value.column = o),
                            placeholder: "status",
                            disabled: !!q.value
                          }, null, 8, In), [
                            [k, Y.value.column]
                          ])
                        ])
                      ]),
                      e("div", Tn, [
                        e("div", Un, [
                          l[87] || (l[87] = e("label", null, "表示名", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[20] || (l[20] = (o) => Y.value.name = o),
                            placeholder: "ステータス"
                          }, null, 512), [
                            [k, Y.value.name]
                          ])
                        ]),
                        e("div", Vn, [
                          l[88] || (l[88] = e("label", null, "型", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[21] || (l[21] = (o) => Y.value.columnType = o),
                            placeholder: "integer"
                          }, null, 512), [
                            [k, Y.value.columnType]
                          ])
                        ])
                      ]),
                      e("div", Sn, [
                        l[89] || (l[89] = e("label", null, "説明", -1)),
                        f(e("input", {
                          "onUpdate:modelValue": l[22] || (l[22] = (o) => Y.value.description = o),
                          placeholder: "注文のステータスを管理"
                        }, null, 512), [
                          [k, Y.value.description]
                        ])
                      ]),
                      e("div", Mn, [
                        l[90] || (l[90] = e("label", null, "マスタ値", -1)),
                        e("button", {
                          onClick: He,
                          class: "di-btn-icon",
                          title: "追加"
                        }, [
                          $(u(yt), { style: { width: "14px", height: "14px" } })
                        ])
                      ]),
                      e("div", En, [
                        (n(!0), i(C, null, E(Y.value.entries, (o, w) => (n(), i("div", {
                          key: w,
                          class: "di-master-entry-row"
                        }, [
                          f(e("input", {
                            "onUpdate:modelValue": (g) => o.value = g,
                            placeholder: "値",
                            class: "di-master-entry-value"
                          }, null, 8, Dn), [
                            [k, o.value]
                          ]),
                          f(e("input", {
                            "onUpdate:modelValue": (g) => o.label = g,
                            placeholder: "ラベル",
                            class: "di-master-entry-label"
                          }, null, 8, Pn), [
                            [k, o.label]
                          ]),
                          f(e("input", {
                            "onUpdate:modelValue": (g) => o.color = g,
                            placeholder: "#色",
                            class: "di-master-entry-color"
                          }, null, 8, Ln), [
                            [k, o.color]
                          ]),
                          f(e("input", {
                            "onUpdate:modelValue": (g) => o.description = g,
                            placeholder: "説明",
                            class: "di-master-entry-desc"
                          }, null, 8, Bn), [
                            [k, o.description]
                          ]),
                          e("button", {
                            onClick: (g) => B(w),
                            class: "di-btn-icon di-btn-icon-danger"
                          }, [
                            $(u(Qe), { style: { width: "12px", height: "12px" } })
                          ], 8, An)
                        ]))), 128))
                      ]),
                      e("div", Fn, [
                        l[91] || (l[91] = e("label", null, "状態遷移", -1)),
                        e("button", {
                          onClick: de,
                          class: "di-btn-icon",
                          title: "遷移を追加"
                        }, [
                          $(u(yt), { style: { width: "14px", height: "14px" } })
                        ])
                      ]),
                      Y.value.transitions.length > 0 ? (n(), i("div", On, [
                        l[95] || (l[95] = e("div", { class: "di-transition-header" }, [
                          e("span", { class: "di-transition-col-from" }, "遷移元"),
                          e("span", { class: "di-transition-col-arrow" }, "→"),
                          e("span", { class: "di-transition-col-to" }, "遷移先"),
                          e("span", { class: "di-transition-col-trigger" }, "トリガー"),
                          e("span", { class: "di-transition-col-condition" }, "条件"),
                          e("span", { class: "di-transition-col-act" })
                        ], -1)),
                        (n(!0), i(C, null, E(Y.value.transitions, (o, w) => (n(), i("div", {
                          key: w,
                          class: "di-transition-row"
                        }, [
                          f(e("select", {
                            "onUpdate:modelValue": (g) => o.from = g,
                            class: "di-transition-select di-transition-col-from"
                          }, [
                            l[92] || (l[92] = e("option", { value: "" }, "-", -1)),
                            (n(!0), i(C, null, E(Y.value.entries.filter((g) => g.value), (g) => (n(), i("option", {
                              key: g.value,
                              value: g.value
                            }, v(g.label || g.value), 9, Nn))), 128))
                          ], 8, jn), [
                            [Ie, o.from]
                          ]),
                          l[94] || (l[94] = e("span", { class: "di-transition-col-arrow" }, "→", -1)),
                          f(e("select", {
                            "onUpdate:modelValue": (g) => o.to = g,
                            class: "di-transition-select di-transition-col-to"
                          }, [
                            l[93] || (l[93] = e("option", { value: "" }, "-", -1)),
                            (n(!0), i(C, null, E(Y.value.entries.filter((g) => g.value), (g) => (n(), i("option", {
                              key: g.value,
                              value: g.value
                            }, v(g.label || g.value), 9, qn))), 128))
                          ], 8, Hn), [
                            [Ie, o.to]
                          ]),
                          f(e("input", {
                            "onUpdate:modelValue": (g) => o.trigger = g,
                            placeholder: "トリガー",
                            class: "di-transition-input di-transition-col-trigger"
                          }, null, 8, Rn), [
                            [k, o.trigger]
                          ]),
                          f(e("input", {
                            "onUpdate:modelValue": (g) => o.condition = g,
                            placeholder: "条件",
                            class: "di-transition-input di-transition-col-condition"
                          }, null, 8, zn), [
                            [k, o.condition]
                          ]),
                          e("button", {
                            onClick: (g) => W(w),
                            class: "di-btn-icon di-btn-icon-danger"
                          }, [
                            $(u(Qe), { style: { width: "12px", height: "12px" } })
                          ], 8, Yn)
                        ]))), 128))
                      ])) : (n(), i("div", Kn, " 状態遷移を定義（任意） "))
                    ]),
                    e("div", Gn, [
                      q.value ? (n(), i("button", {
                        key: 0,
                        onClick: l[23] || (l[23] = (o) => {
                          ee(q.value), le.value = !1;
                        }),
                        class: "di-btn-small di-btn-danger"
                      }, "削除")) : c("", !0),
                      l[96] || (l[96] = e("div", { style: { flex: "1" } }, null, -1)),
                      e("button", {
                        onClick: l[24] || (l[24] = (o) => le.value = !1),
                        class: "di-btn-small"
                      }, "キャンセル"),
                      e("button", {
                        onClick: xe,
                        class: "di-btn-small di-btn-primary",
                        disabled: !Y.value.table || !Y.value.column
                      }, "保存", 8, Xn)
                    ])
                  ])
                ])) : c("", !0)
              ]))
            ], 512), [
              [ht, I.value === "masters"]
            ]),
            f(e("div", null, [
              e("div", Jn, [
                e("div", Zn, [
                  $(u(Ht), { style: { width: "16px", height: "16px", color: "#f59e0b" } }),
                  l[97] || (l[97] = e("span", null, "バッチ処理", -1)),
                  Ne.value > 0 ? (n(), i("span", Qn, v(Ne.value), 1)) : c("", !0),
                  e("button", {
                    onClick: l[26] || (l[26] = (o) => Ke()),
                    class: "di-btn-icon",
                    style: { "margin-left": "auto" },
                    title: "新規追加"
                  }, [
                    $(u(yt), { style: { width: "14px", height: "14px" } })
                  ])
                ]),
                Ne.value > 0 ? (n(!0), i(C, { key: 0 }, E(We.value, (o) => (n(), i("div", {
                  key: o.id,
                  class: "di-batch-item",
                  onClick: (w) => Ke(o.id)
                }, [
                  e("div", ei, [
                    e("div", ti, v(o.name), 1),
                    o.schedule ? (n(), i("div", li, v(o.schedule), 1)) : c("", !0)
                  ])
                ], 8, Wn))), 128)) : (n(), i("div", {
                  key: 1,
                  class: "di-batch-empty",
                  onClick: l[27] || (l[27] = (o) => Ke())
                }, [...l[98] || (l[98] = [
                  e("span", null, "バッチ処理を定義", -1)
                ])]))
              ]),
              (n(), Me(ut, { to: "body" }, [
                Q.value ? (n(), i("div", {
                  key: 0,
                  "data-dev-inspector": "",
                  class: "di-modal-overlay",
                  onClick: l[43] || (l[43] = ve((o) => Q.value = !1, ["self"]))
                }, [
                  e("div", si, [
                    e("div", oi, [
                      e("h3", null, v($e.value ? "バッチ処理を編集" : "新規バッチ処理"), 1),
                      e("button", {
                        onClick: l[28] || (l[28] = (o) => Q.value = !1),
                        class: "di-close-btn"
                      }, [
                        $(u(Qe), { style: { width: "16px", height: "16px" } })
                      ])
                    ]),
                    e("div", ni, [
                      e("div", ii, [
                        e("div", ai, [
                          l[99] || (l[99] = e("label", null, "バッチ名 *", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[29] || (l[29] = (o) => F.value.name = o),
                            placeholder: "月次レポート生成"
                          }, null, 512), [
                            [k, F.value.name]
                          ])
                        ]),
                        e("div", di, [
                          l[100] || (l[100] = e("label", null, "スケジュール", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[30] || (l[30] = (o) => F.value.schedule = o),
                            placeholder: "毎月1日 AM2:00"
                          }, null, 512), [
                            [k, F.value.schedule]
                          ])
                        ])
                      ]),
                      e("div", ui, [
                        e("div", ri, [
                          l[101] || (l[101] = e("label", null, "手動トリガー", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[31] || (l[31] = (o) => F.value.trigger = o),
                            placeholder: "管理画面から実行"
                          }, null, 512), [
                            [k, F.value.trigger]
                          ])
                        ])
                      ]),
                      e("div", ci, [
                        l[102] || (l[102] = e("label", null, "説明", -1)),
                        f(e("textarea", {
                          "onUpdate:modelValue": l[32] || (l[32] = (o) => F.value.description = o),
                          rows: "2",
                          placeholder: "バッチ処理の概要..."
                        }, null, 512), [
                          [k, F.value.description]
                        ])
                      ]),
                      l[112] || (l[112] = e("div", { class: "di-batch-section-label" }, "入出力テーブル", -1)),
                      e("div", vi, [
                        e("div", pi, [
                          l[103] || (l[103] = e("label", null, "入力テーブル", -1)),
                          e("div", mi, [
                            (n(!0), i(C, null, E(F.value.inputTables, (o, w) => (n(), i("span", {
                              key: w,
                              class: "di-batch-tag"
                            }, [
                              D(v(o) + " ", 1),
                              e("button", {
                                onClick: (g) => Le(w),
                                class: "di-batch-tag-remove"
                              }, "×", 8, fi)
                            ]))), 128)),
                            f(e("input", {
                              "onUpdate:modelValue": l[33] || (l[33] = (o) => he.value = o),
                              onKeydown: l[34] || (l[34] = kt(ve((o) => st(), ["prevent"]), ["enter"])),
                              type: "text",
                              placeholder: "テーブル名",
                              class: "di-batch-tag-input"
                            }, null, 544), [
                              [k, he.value]
                            ])
                          ])
                        ]),
                        e("div", hi, [
                          l[104] || (l[104] = e("label", null, "出力テーブル", -1)),
                          e("div", yi, [
                            (n(!0), i(C, null, E(F.value.outputTables, (o, w) => (n(), i("span", {
                              key: w,
                              class: "di-batch-tag"
                            }, [
                              D(v(o) + " ", 1),
                              e("button", {
                                onClick: (g) => ct(w),
                                class: "di-batch-tag-remove"
                              }, "×", 8, bi)
                            ]))), 128)),
                            f(e("input", {
                              "onUpdate:modelValue": l[35] || (l[35] = (o) => ue.value = o),
                              onKeydown: l[36] || (l[36] = kt(ve((o) => qe(), ["prevent"]), ["enter"])),
                              type: "text",
                              placeholder: "テーブル名",
                              class: "di-batch-tag-input"
                            }, null, 544), [
                              [k, ue.value]
                            ])
                          ])
                        ])
                      ]),
                      e("div", gi, [
                        l[105] || (l[105] = D(" 処理ステップ ", -1)),
                        e("button", {
                          onClick: tt,
                          class: "di-btn-icon",
                          style: { "margin-left": "auto" },
                          title: "ステップ追加"
                        }, [
                          $(u(yt), { style: { width: "14px", height: "14px" } })
                        ])
                      ]),
                      F.value.steps.length > 0 ? (n(), i("div", ki, [
                        l[107] || (l[107] = e("div", { class: "di-batch-steps-header" }, [
                          e("span", { class: "di-batch-step-no" }, "No"),
                          e("span", { class: "di-batch-step-desc" }, "処理内容"),
                          e("span", { class: "di-batch-step-target" }, "対象"),
                          e("span", { class: "di-batch-step-type" }, "種別"),
                          e("span", { class: "di-batch-step-error" }, "エラー処理"),
                          e("span", { class: "di-batch-step-act" })
                        ], -1)),
                        (n(!0), i(C, null, E(F.value.steps, (o, w) => (n(), i("div", {
                          key: w,
                          class: "di-batch-step-row"
                        }, [
                          e("span", xi, v(w + 1), 1),
                          f(e("input", {
                            "onUpdate:modelValue": (g) => o.description = g,
                            placeholder: "処理内容",
                            class: "di-batch-step-input di-batch-step-desc"
                          }, null, 8, $i), [
                            [k, o.description]
                          ]),
                          f(e("input", {
                            "onUpdate:modelValue": (g) => o.target = g,
                            placeholder: "対象テーブル",
                            class: "di-batch-step-input di-batch-step-target"
                          }, null, 8, wi), [
                            [k, o.target]
                          ]),
                          f(e("select", {
                            "onUpdate:modelValue": (g) => o.type = g,
                            class: "di-batch-step-select di-batch-step-type"
                          }, [...l[106] || (l[106] = [
                            e("option", { value: "" }, "-", -1),
                            e("option", { value: "query" }, "query", -1),
                            e("option", { value: "api" }, "api", -1),
                            e("option", { value: "file" }, "file", -1),
                            e("option", { value: "mail" }, "mail", -1),
                            e("option", { value: "other" }, "other", -1)
                          ])], 8, Ci), [
                            [Ie, o.type]
                          ]),
                          f(e("input", {
                            "onUpdate:modelValue": (g) => o.errorHandling = g,
                            placeholder: "エラー時",
                            class: "di-batch-step-input di-batch-step-error"
                          }, null, 8, _i), [
                            [k, o.errorHandling]
                          ]),
                          e("button", {
                            onClick: (g) => lt(w),
                            class: "di-btn-icon di-btn-icon-danger"
                          }, [
                            $(u(Qe), { style: { width: "12px", height: "12px" } })
                          ], 8, Ii)
                        ]))), 128))
                      ])) : c("", !0),
                      l[113] || (l[113] = e("div", { class: "di-batch-section-label" }, "運用設定", -1)),
                      e("div", Ti, [
                        e("div", Ui, [
                          l[108] || (l[108] = e("label", null, "タイムアウト", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[37] || (l[37] = (o) => F.value.timeout = o),
                            placeholder: "30分"
                          }, null, 512), [
                            [k, F.value.timeout]
                          ])
                        ]),
                        e("div", Vi, [
                          l[109] || (l[109] = e("label", null, "リトライ", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[38] || (l[38] = (o) => F.value.retryPolicy = o),
                            placeholder: "3回まで、5分間隔"
                          }, null, 512), [
                            [k, F.value.retryPolicy]
                          ])
                        ])
                      ]),
                      e("div", Si, [
                        e("div", Mi, [
                          l[110] || (l[110] = e("label", null, "エラー通知先", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[39] || (l[39] = (o) => F.value.notifyOnError = o),
                            placeholder: "admin@example.com"
                          }, null, 512), [
                            [k, F.value.notifyOnError]
                          ])
                        ]),
                        e("div", Ei, [
                          l[111] || (l[111] = e("label", null, "完了通知先", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[40] || (l[40] = (o) => F.value.notifyOnComplete = o),
                            placeholder: "manager@example.com"
                          }, null, 512), [
                            [k, F.value.notifyOnComplete]
                          ])
                        ])
                      ])
                    ]),
                    e("div", Di, [
                      $e.value ? (n(), i("button", {
                        key: 0,
                        onClick: l[41] || (l[41] = (o) => {
                          Ee($e.value), Q.value = !1;
                        }),
                        class: "di-btn-small di-btn-danger"
                      }, "削除")) : c("", !0),
                      l[114] || (l[114] = e("div", { style: { flex: "1" } }, null, -1)),
                      e("button", {
                        onClick: l[42] || (l[42] = (o) => Q.value = !1),
                        class: "di-btn-small"
                      }, "キャンセル"),
                      e("button", {
                        onClick: et,
                        class: "di-btn-small di-btn-primary",
                        disabled: !F.value.name
                      }, "保存", 8, Pi)
                    ])
                  ])
                ])) : c("", !0)
              ]))
            ], 512), [
              [ht, I.value === "batches"]
            ]),
            f(e("div", null, [
              e("div", Li, [
                e("button", {
                  onClick: Ue,
                  class: "di-btn-green"
                }, [
                  $(u(jl), { style: { width: "16px", height: "16px" } }),
                  l[115] || (l[115] = D(" Git管理用に保存 ", -1))
                ]),
                e("button", {
                  onClick: je,
                  class: "di-btn-blue"
                }, [
                  $(u(Wt), { style: { width: "16px", height: "16px" } }),
                  l[116] || (l[116] = D(" 画面仕様書 (xlsx) 出力 ", -1))
                ]),
                e("button", {
                  onClick: l[44] || (l[44] = (o) => u(a).downloadSddSpec()),
                  class: "di-btn-green-outline"
                }, [
                  $(u(It), { style: { width: "16px", height: "16px" } }),
                  l[117] || (l[117] = D(" SDD仕様書 (md) ", -1))
                ]),
                e("button", {
                  onClick: l[45] || (l[45] = (o) => u(a).downloadClientSpec()),
                  class: "di-btn-blue-outline"
                }, [
                  $(u(It), { style: { width: "16px", height: "16px" } }),
                  l[118] || (l[118] = D(" 納品用仕様書 (md) ", -1))
                ])
              ]),
              l[126] || (l[126] = e("p", { class: "di-export-hint" }, [
                D(" JSON: "),
                e("code", null, "dev-annotations.json"),
                D(" に配置してcommit ")
              ], -1)),
              e("div", Bi, [
                e("button", {
                  onClick: l[46] || (l[46] = (o) => U.value = !0),
                  class: "di-btn-small"
                }, [
                  $(u(gt), { style: { width: "14px", height: "14px" } }),
                  l[119] || (l[119] = D(" エクスポート ", -1))
                ]),
                e("button", {
                  onClick: l[47] || (l[47] = (o) => K.value = !0),
                  class: "di-btn-small"
                }, [
                  $(u(Jl), { style: { width: "14px", height: "14px" } }),
                  l[120] || (l[120] = D(" インポート ", -1))
                ]),
                se.value > 0 ? (n(), i("button", {
                  key: 0,
                  onClick: _,
                  class: "di-btn-small di-btn-danger"
                }, [
                  $(u(xt), { style: { width: "14px", height: "14px" } }),
                  l[121] || (l[121] = D(" 全削除 ", -1))
                ])) : c("", !0)
              ]),
              se.value > 0 || ke.value > 0 || Ne.value > 0 ? (n(), i("div", Ai, [
                l[125] || (l[125] = e("div", { class: "di-export-summary-title" }, "登録状況", -1)),
                e("div", Fi, [
                  l[122] || (l[122] = e("span", null, "要素設定", -1)),
                  e("span", Oi, v(se.value) + "件", 1)
                ]),
                e("div", ji, [
                  l[123] || (l[123] = e("span", null, "マスタ定義", -1)),
                  e("span", Ni, v(ke.value) + "件", 1)
                ]),
                e("div", Hi, [
                  l[124] || (l[124] = e("span", null, "バッチ処理", -1)),
                  e("span", qi, v(Ne.value) + "件", 1)
                ])
              ])) : c("", !0)
            ], 512), [
              [ht, I.value === "export"]
            ])
          ]),
          l[127] || (l[127] = e("div", { class: "di-footer" }, [
            e("kbd", null, "Ctrl"),
            e("span", null, "+"),
            e("kbd", null, "Shift"),
            e("span", null, "+"),
            e("kbd", null, "D"),
            e("span", { class: "di-footer-text" }, "で開発者モード切替")
          ], -1))
        ])) : c("", !0)
      ])),
      (n(), Me(ut, { to: "body" }, [
        u(a).isEnabled ? (n(), i("div", Ri, [...l[128] || (l[128] = [
          e("span", { class: "di-indicator-dot" }, null, -1),
          D(" Developer Mode ", -1)
        ])])) : c("", !0)
      ])),
      (n(), Me(ut, { to: "body" }, [
        U.value ? (n(), i("div", {
          key: 0,
          class: "di-modal-overlay",
          onClick: l[49] || (l[49] = ve((o) => U.value = !1, ["self"])),
          "data-dev-inspector": ""
        }, [
          e("div", zi, [
            l[130] || (l[130] = e("h3", { class: "di-modal-title" }, "設定をエクスポート", -1)),
            e("textarea", {
              readonly: "",
              value: u(a).exportConfigs(),
              class: "di-modal-textarea"
            }, null, 8, Yi),
            e("div", Ki, [
              e("button", {
                onClick: l[48] || (l[48] = (o) => U.value = !1),
                class: "di-btn-small"
              }, "閉じる"),
              e("button", {
                onClick: S,
                class: "di-btn-small di-btn-gray"
              }, [
                $(u(gt), { style: { width: "14px", height: "14px" } }),
                l[129] || (l[129] = D(" ファイル保存 ", -1))
              ]),
              e("button", {
                onClick: ie,
                class: "di-btn-small di-btn-primary"
              }, "コピー")
            ])
          ])
        ])) : c("", !0)
      ])),
      (n(), Me(ut, { to: "body" }, [
        K.value ? (n(), i("div", {
          key: 0,
          class: "di-modal-overlay",
          onClick: l[52] || (l[52] = ve((o) => K.value = !1, ["self"])),
          "data-dev-inspector": ""
        }, [
          e("div", Gi, [
            l[132] || (l[132] = e("h3", { class: "di-modal-title" }, "設定をインポート", -1)),
            e("label", Xi, [
              e("input", {
                type: "file",
                accept: ".json",
                onChange: H
              }, null, 32),
              l[131] || (l[131] = e("span", null, "JSONファイルをドラッグまたはクリック", -1))
            ]),
            f(e("textarea", {
              "onUpdate:modelValue": l[50] || (l[50] = (o) => J.value = o),
              placeholder: "またはJSONを直接貼り付け...",
              class: "di-modal-textarea di-modal-textarea-input"
            }, null, 512), [
              [k, J.value]
            ]),
            ne.value ? (n(), i("p", Ji, v(ne.value), 1)) : c("", !0),
            e("div", Zi, [
              e("button", {
                onClick: l[51] || (l[51] = (o) => {
                  K.value = !1, J.value = "", ne.value = "";
                }),
                class: "di-btn-small"
              }, " キャンセル "),
              e("button", {
                onClick: me,
                disabled: !J.value,
                class: "di-btn-small di-btn-primary"
              }, " インポート ", 8, Qi)
            ])
          ])
        ])) : c("", !0)
      ]))
    ], 64));
  }
}), Ut = (N, a) => {
  const I = N.__vccOpts || N;
  for (const [U, K] of a)
    I[U] = K;
  return I;
}, ea = /* @__PURE__ */ Ut(Wi, [["__scopeId", "data-v-652cd6ce"]]), ta = { class: "di-editor-header" }, la = { class: "di-header-actions" }, sa = {
  key: 0,
  class: "di-static-indicator"
}, oa = {
  key: 1,
  class: "di-binding-indicator"
}, na = {
  key: 0,
  class: "di-binding-source"
}, ia = { class: "di-editor-tabs" }, aa = { class: "di-editor-content" }, da = { class: "di-form-group" }, ua = { class: "di-display-type-grid" }, ra = ["onClick"], ca = { class: "di-display-type-desc" }, va = {
  key: 0,
  class: "di-field-tags"
}, pa = { class: "di-field-tags-list" }, ma = { class: "di-field-tag-name" }, fa = {
  key: 0,
  class: "di-field-tag-type"
}, ha = ["onClick"], ya = {
  key: 1,
  class: "di-binding-selector"
}, ba = { class: "di-form-group" }, ga = { class: "di-form-label" }, ka = { class: "di-binding-search-wrapper" }, xa = {
  key: 0,
  class: "di-binding-list"
}, $a = ["onClick"], wa = { class: "di-binding-item-main" }, Ca = { class: "di-binding-name" }, _a = { class: "di-binding-type" }, Ia = {
  key: 0,
  class: "di-binding-component"
}, Ta = {
  key: 1,
  class: "di-binding-empty"
}, Ua = {
  key: 2,
  class: "di-form-divider"
}, Va = { class: "di-form-row" }, Sa = { class: "di-form-group di-suggest-wrapper" }, Ma = {
  key: 0,
  class: "di-suggest-list"
}, Ea = ["onMousedown"], Da = { class: "di-form-group di-suggest-wrapper" }, Pa = {
  key: 0,
  class: "di-suggest-list"
}, La = ["onMousedown"], Ba = { class: "di-form-group" }, Aa = ["value"], Fa = ["disabled"], Oa = {
  key: 3,
  class: "di-master-inline"
}, ja = {
  key: 0,
  class: "di-condition-badge",
  style: { background: "#a78bfa" }
}, Na = {
  key: 0,
  class: "di-master-inline-section"
}, Ha = {
  key: 0,
  class: "di-master-entries-table"
}, qa = ["onUpdate:modelValue"], Ra = ["onUpdate:modelValue"], za = ["onUpdate:modelValue"], Ya = ["onClick"], Ka = {
  key: 4,
  class: "di-form-group"
}, Ga = { class: "di-stored-calc-toggle" }, Xa = {
  key: 0,
  class: "di-condition-badge"
}, Ja = {
  key: 5,
  class: "di-stored-calc-section"
}, Za = { class: "di-form-group" }, Qa = { class: "di-form-group di-suggest-wrapper" }, Wa = { class: "di-stored-calc-tags" }, ed = ["onClick"], td = {
  key: 0,
  class: "di-suggest-list"
}, ld = ["onMousedown"], sd = { class: "di-form-group" }, od = {
  key: 1,
  class: "di-form-group di-suggest-wrapper"
}, nd = {
  key: 0,
  class: "di-calc-tag"
}, id = ["onClick"], ad = {
  key: 1,
  class: "di-calc-text"
}, dd = ["placeholder"], ud = {
  key: 0,
  class: "di-suggest-list"
}, rd = ["onMousedown"], cd = {
  key: 2,
  class: "di-form-group"
}, vd = { class: "di-condition-toggle" }, pd = {
  key: 0,
  class: "di-condition-badge"
}, md = {
  key: 0,
  class: "di-condition-section"
}, fd = { class: "di-form-group" }, hd = { class: "di-form-group di-suggest-wrapper" }, yd = { class: "di-form-row" }, bd = { class: "di-form-group" }, gd = {
  key: 0,
  class: "di-form-group"
}, kd = { class: "di-form-row" }, xd = { class: "di-form-group" }, $d = {
  class: "di-form-group",
  style: { flex: "0 0 80px" }
}, wd = { class: "di-form-row" }, Cd = { class: "di-form-group" }, _d = { class: "di-form-group" }, Id = { class: "di-form-group" }, Td = { class: "di-form-group" }, Ud = { class: "di-form-group" }, Vd = { class: "di-form-group" }, Sd = ["placeholder"], Md = {
  key: 0,
  class: "di-form-group"
}, Ed = { class: "di-form-group" }, Dd = { class: "di-form-divider" }, Pd = { class: "di-csv-file-settings" }, Ld = { class: "di-form-row" }, Bd = { class: "di-form-group" }, Ad = { class: "di-form-group" }, Fd = {
  class: "di-form-row",
  style: { "align-items": "center" }
}, Od = { class: "di-csv-checkbox-label" }, jd = { class: "di-form-group" }, Nd = { class: "di-csv-columns-section" }, Hd = {
  key: 0,
  class: "di-csv-columns-table"
}, qd = { class: "di-csv-col-no" }, Rd = ["onUpdate:modelValue"], zd = ["onUpdate:modelValue"], Yd = ["onUpdate:modelValue"], Kd = ["onUpdate:modelValue"], Gd = { class: "di-csv-col-req di-csv-checkbox-center" }, Xd = ["onUpdate:modelValue"], Jd = ["onUpdate:modelValue"], Zd = { class: "di-csv-col-act" }, Qd = ["onClick", "disabled"], Wd = ["onClick", "disabled"], eu = ["onClick"], tu = { class: "di-form-group" }, lu = { class: "di-form-group" }, su = { class: "di-form-group" }, ou = { class: "di-form-group" }, nu = { class: "di-form-group" }, iu = { class: "di-form-group" }, au = { class: "di-csv-error-section" }, du = {
  key: 0,
  class: "di-csv-columns-table"
}, uu = ["onUpdate:modelValue"], ru = ["value"], cu = ["onUpdate:modelValue"], vu = ["onUpdate:modelValue"], pu = ["onUpdate:modelValue"], mu = ["onClick"], fu = { class: "di-form-divider" }, hu = { class: "di-form-row" }, yu = { class: "di-form-group" }, bu = { class: "di-form-group" }, gu = { class: "di-form-row" }, ku = { class: "di-form-group" }, xu = { class: "di-form-group" }, $u = { class: "di-form-group" }, wu = { class: "di-form-group" }, Cu = { class: "di-form-group" }, _u = { class: "di-form-group" }, Iu = { class: "di-email-variables-input" }, Tu = ["onClick"], Uu = { class: "di-form-group" }, Vu = { class: "di-form-group" }, Su = { class: "di-form-group" }, Mu = { class: "di-form-group" }, Eu = { class: "di-form-group" }, Du = {
  key: 0,
  class: "di-field-tags"
}, Pu = { class: "di-field-tags-list" }, Lu = { class: "di-field-tag-name" }, Bu = {
  key: 0,
  class: "di-field-tag-type"
}, Au = ["onClick"], Fu = {
  key: 1,
  class: "di-binding-selector"
}, Ou = { class: "di-form-group" }, ju = { class: "di-form-label" }, Nu = { class: "di-binding-search-wrapper" }, Hu = {
  key: 0,
  class: "di-binding-list"
}, qu = ["onClick"], Ru = { class: "di-binding-item-main" }, zu = { class: "di-binding-name" }, Yu = { class: "di-binding-type" }, Ku = {
  key: 0,
  class: "di-binding-component"
}, Gu = {
  key: 2,
  class: "di-master-inline"
}, Xu = {
  key: 0,
  class: "di-condition-badge",
  style: { background: "#a78bfa" }
}, Ju = {
  key: 0,
  class: "di-master-inline-section"
}, Zu = {
  key: 0,
  class: "di-master-entries-table"
}, Qu = ["onUpdate:modelValue"], Wu = ["onUpdate:modelValue"], er = ["onUpdate:modelValue"], tr = ["onClick"], lr = { class: "di-condition-toggle" }, sr = {
  key: 0,
  class: "di-condition-badge"
}, or = { class: "di-form-group di-suggest-wrapper" }, nr = { class: "di-calc-tags-input" }, ir = ["onClick"], ar = ["placeholder"], dr = { class: "di-form-group" }, ur = { class: "di-form-group" }, rr = { class: "di-form-group" }, cr = { class: "di-form-group" }, vr = { class: "di-editor-footer" }, pr = { class: "di-editor-actions" }, mr = /* @__PURE__ */ wt({
  __name: "DevElementEditor",
  setup(N) {
    const a = Ct(), I = h("datasource"), U = h(""), K = h(""), J = h(""), ne = h(""), ae = h(""), pe = h(!1), L = h([]), G = h(""), se = h(""), be = h(""), Te = h(""), ie = h([]), S = h("UTF-8"), Ue = h(","), je = h(!0), me = h(""), H = h(""), _ = h(""), p = h(void 0), V = h(""), X = h(""), P = h(""), Z = h([]), oe = h(""), fe = h(""), te = h(""), Ce = h(""), Ve = h(""), A = h(""), y = h(""), T = h([]), le = h(""), q = h(""), Y = h(""), ke = h(""), ge = h(!1), re = h([]), xe = z(() => {
      if (de.value.length > 0) {
        const m = de.value[0];
        if (m.table && m.column) return `${m.table}.${m.column}`;
      }
      return "";
    }), He = z(() => xe.value && a.getMasterDefinition(xe.value) || null), B = h("db_direct"), de = h([]), W = h(""), ee = h(""), Q = h(""), $e = h(""), F = h(""), he = h([]), ue = h(""), Ne = h(!1), We = h(""), Ke = h(""), et = h(""), tt = h(""), lt = h(""), Ee = h(!1), st = h(""), Le = h([]), qe = h(""), ct = h(!1), ot = h(""), Re = h(""), nt = h(""), ze = h(""), it = h(""), De = h(!1), ye = h(""), Be = h(""), Ae = h(""), Je = h(!1), vt = z(() => a.editingElementId !== null), d = z(() => a.editingElementId), mt = z(() => U.value === "csv_export" || U.value === "csv_import"), r = z(() => U.value === "email"), l = z(() => mt.value || r.value), o = [
      { value: "db_direct", label: "DBカラム (そのまま)", icon: pt, color: "#3b82f6", description: "DBの値をそのまま表示" },
      { value: "db_formatted", label: "DBカラム (整形)", icon: Tt, color: "#8b5cf6", description: "DBの値を整形して表示" },
      { value: "calculated", label: "計算値", icon: Nt, color: "#f59e0b", description: "複数カラムから計算" },
      { value: "static", label: "固定文言", icon: Xl, color: "#10b981", description: "コード内の固定テキスト" },
      { value: "other", label: "その他メモ", icon: Rl, color: "#94a3b8", description: "自由メモ" }
    ];
    $t(d, (m) => {
      if (m) {
        const t = a.getElementConfig(m);
        try {
          const s = document.querySelector(m);
          if (s) {
            t != null && t.elementType ? I.value = t.elementType : I.value = a.detectElementType(s);
            const b = s.querySelector("[data-di-binding]") || (s.hasAttribute("data-di-binding") ? s : null) || s.closest("[data-di-binding]");
            if (b) {
              const x = b.getAttribute("data-di-binding"), O = b.getAttribute("data-di-db"), _e = b.getAttribute("data-di-db-type"), ft = b.getAttribute("data-di-db-comment");
              if (x && (Ae.value = x, Be.value = "api", Je.value = !1), O) {
                const [At, Ft] = O.split(".");
                At && Ft && (de.value.push({
                  table: At,
                  column: Ft,
                  type: _e || void 0,
                  description: ft || void 0
                }), B.value || (B.value = "db_direct"));
              }
            }
          }
        } catch (s) {
          console.warn("[DevInspector] Failed to read element:", s);
        }
        if (t != null && t.fieldInfoList && t.fieldInfoList.length > 0 ? de.value = t.fieldInfoList.map((s) => ({ ...s })) : t != null && t.fieldInfo && (de.value = [{ ...t.fieldInfo }]), W.value = "", ee.value = "", Q.value = "", $e.value = "", t != null && t.note && (ye.value = t.note.text || ye.value, B.value = t.note.displayType || B.value, F.value = t.note.formatDescription || "", We.value = t.note.sampleValue || "", Ke.value = t.note.decimalHandling || "", et.value = t.note.unit || "", tt.value = t.note.nullDisplay || "", lt.value = t.note.displayFormat || "", pl(t.note.calcDescription || "", t.note.calcSources || []), Ee.value = t.note.storedCalc || !1, st.value = t.note.storedCalcLogic || "", Le.value = t.note.storedCalcSources ? [...t.note.storedCalcSources] : [], ot.value = t.note.storedCalcTiming || "", Re.value = t.note.condition || "", nt.value = t.note.conditionColumn || "", ze.value = t.note.hiddenBehavior || "", it.value = t.note.hiddenNote || "", De.value = !!(t.note.condition || t.note.conditionColumn)), t != null && t.sourceBinding && (Be.value = t.sourceBinding.type || Be.value, Ae.value = t.sourceBinding.source || Ae.value, Je.value = t.sourceBinding.isStatic || !1), t != null && t.actionInfo) {
          if (U.value = t.actionInfo.type || "", K.value = t.actionInfo.target || "", J.value = t.actionInfo.method || "", ne.value = t.actionInfo.description || "", t.actionInfo.csvSpec) {
            const s = t.actionInfo.csvSpec;
            ie.value = s.columns.map((b) => ({ ...b })), S.value = s.encoding || "UTF-8", Ue.value = s.delimiter || ",", je.value = s.hasHeaderRow !== !1, me.value = s.filenamePattern || "", H.value = s.sortOrder || "", _.value = s.filterCondition || "", p.value = s.maxRows, V.value = s.errorHandling || "", X.value = s.duplicateHandling || "", P.value = s.preValidation || "", Z.value = s.errorDefs ? s.errorDefs.map((b) => ({ ...b })) : [];
          }
          if (t.actionInfo.emailSpec) {
            const s = t.actionInfo.emailSpec;
            oe.value = s.trigger || "", fe.value = s.to || "", te.value = s.cc || "", Ce.value = s.bcc || "", Ve.value = s.subject || "", A.value = s.bodyTemplate || "", y.value = s.templatePath || "", T.value = s.variables ? [...s.variables] : [], q.value = s.attachments || "", Y.value = s.conditions || "", ke.value = s.errorHandling || "";
          }
        }
        t != null && t.formInfo && (ae.value = t.formInfo.inputType || "", pe.value = t.formInfo.required || !1, L.value = t.formInfo.validation ? [...t.formInfo.validation] : [], se.value = t.formInfo.placeholder || "", be.value = t.formInfo.defaultValue || "", Te.value = t.formInfo.description || "");
      } else
        w();
    });
    function w() {
      I.value = "datasource", B.value = "db_direct", de.value = [], W.value = "", ee.value = "", Q.value = "", $e.value = "", F.value = "", We.value = "", Ke.value = "", et.value = "", tt.value = "", lt.value = "", he.value = [], ue.value = "", Ee.value = !1, st.value = "", Le.value = [], qe.value = "", ot.value = "", Re.value = "", nt.value = "", ze.value = "", it.value = "", De.value = !1, ye.value = "", Be.value = "", Ae.value = "", Je.value = !1, U.value = "", K.value = "", J.value = "", ne.value = "", ie.value = [], S.value = "UTF-8", Ue.value = ",", je.value = !0, me.value = "", H.value = "", _.value = "", p.value = void 0, V.value = "", X.value = "", P.value = "", Z.value = [], ae.value = "", pe.value = !1, L.value = [], G.value = "", se.value = "", be.value = "", Te.value = "", oe.value = "", fe.value = "", te.value = "", Ce.value = "", Ve.value = "", A.value = "", y.value = "", T.value = [], le.value = "", q.value = "", Y.value = "", ke.value = "", ge.value = !1, re.value = [];
    }
    function g() {
      a.stopEditing(), w();
    }
    function we() {
      if (d.value)
        try {
          const m = document.querySelector(d.value);
          if (!m) return;
          const t = a.autoDetectElementInfo(m, d.value);
          t.sourceBinding && (Be.value = t.sourceBinding.type || "", Ae.value = t.sourceBinding.source || "", Je.value = t.sourceBinding.isStatic || !1, t.sourceBinding.isStatic && !B.value && (B.value = "static", ye.value = ye.value || "固定文言")), t.fieldInfo && (de.value.push({
            table: t.fieldInfo.table || "",
            column: t.fieldInfo.column || "",
            type: t.fieldInfo.type || void 0,
            description: t.fieldInfo.description || void 0
          }), B.value || (B.value = "db_direct")), t.note && !ye.value && (ye.value = t.note.text || "");
        } catch (m) {
          console.error("[DevInspector] Auto-detect failed:", m);
        }
    }
    function Ge() {
      if (!d.value) return;
      const m = [...de.value];
      (B.value === "db_direct" || B.value === "db_formatted") && W.value && ee.value && m.push({
        table: W.value,
        column: ee.value,
        type: Q.value || void 0,
        description: $e.value || void 0
      });
      const t = m.length > 0 ? m : void 0, s = m.length > 0 ? m[0] : void 0, b = B.value === "db_direct" || B.value === "db_formatted", x = B.value || ye.value ? {
        text: ye.value || "",
        displayType: B.value,
        formatDescription: B.value === "db_formatted" && F.value || void 0,
        calcDescription: B.value === "calculated" && vl() || void 0,
        calcSources: B.value === "calculated" && Et().length > 0 ? Et() : void 0,
        // 保存済み計算値 (db_direct / db_formatted のみ)
        storedCalc: b && Ee.value ? !0 : void 0,
        storedCalcLogic: b && Ee.value && st.value || void 0,
        storedCalcSources: b && Ee.value && Le.value.length > 0 ? Le.value : void 0,
        storedCalcTiming: b && Ee.value && ot.value || void 0,
        sampleValue: We.value || void 0,
        decimalHandling: Ke.value || void 0,
        unit: et.value || void 0,
        nullDisplay: tt.value || void 0,
        displayFormat: lt.value || void 0,
        condition: Re.value || void 0,
        conditionColumn: nt.value || void 0,
        hiddenBehavior: ze.value || void 0,
        hiddenNote: it.value || void 0
      } : void 0, O = Be.value ? {
        type: Be.value,
        source: Ae.value || void 0,
        isStatic: Je.value
      } : void 0, _e = I.value === "action" && U.value ? {
        type: U.value,
        target: K.value || void 0,
        method: J.value ? J.value : void 0,
        description: ne.value || void 0,
        csvSpec: $l(),
        emailSpec: wl()
      } : void 0, ft = I.value === "form" ? {
        inputType: ae.value || void 0,
        required: pe.value || void 0,
        validation: L.value.length > 0 ? L.value : void 0,
        placeholder: se.value || void 0,
        defaultValue: be.value || void 0,
        description: Te.value || void 0
      } : void 0;
      a.setElementConfig(d.value, {
        elementType: I.value,
        fieldInfo: s,
        fieldInfoList: t,
        actionInfo: _e,
        formInfo: ft,
        note: x,
        sourceBinding: O
      }), ge.value && xe.value && Tl(), g();
    }
    function at() {
      d.value && (a.deleteElementConfig(d.value), g());
    }
    const rt = [
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
    ], Pe = h(""), Ye = h(!1), dt = z(() => a.searchSchemaColumns(Pe.value).slice(0, 30));
    function M(m) {
      de.value.push({
        table: m.table,
        column: m.column,
        type: m.type || void 0,
        description: m.comment || void 0
      }), Ye.value = !1, Pe.value = "";
    }
    function Se() {
      !W.value || !ee.value || (de.value.push({
        table: W.value,
        column: ee.value,
        type: Q.value || void 0,
        description: $e.value || void 0
      }), W.value = "", ee.value = "", Q.value = "", $e.value = "");
    }
    function Fe(m) {
      de.value.splice(m, 1);
    }
    const Xe = z(() => a.getSchemaColumns().length > 0), Ze = h(!1), ce = h(!1), bt = z(() => {
      var b;
      const m = /* @__PURE__ */ new Set();
      for (const x of Object.values(a.elementConfigs))
        if (x.fieldInfoList)
          for (const O of x.fieldInfoList)
            O.table && m.add(O.table);
        else (b = x.fieldInfo) != null && b.table && m.add(x.fieldInfo.table);
      for (const x of a.getSchemaColumns())
        m.add(x.table);
      const t = [...m].sort();
      if (!W.value) return t;
      const s = W.value.toLowerCase();
      return t.filter((x) => x.toLowerCase().includes(s));
    }), Vt = z(() => {
      var b;
      const m = /* @__PURE__ */ new Set();
      for (const x of Object.values(a.elementConfigs))
        if (x.fieldInfoList)
          for (const O of x.fieldInfoList)
            O.column && (!W.value || O.table === W.value) && m.add(O.column);
        else (b = x.fieldInfo) != null && b.column && (!W.value || x.fieldInfo.table === W.value) && m.add(x.fieldInfo.column);
      for (const x of a.getSchemaColumns())
        (!W.value || x.table === W.value) && m.add(x.column);
      const t = [...m].sort();
      if (!ee.value) return t;
      const s = ee.value.toLowerCase();
      return t.filter((x) => x.toLowerCase().includes(s));
    });
    function tl() {
      setTimeout(() => {
        Ze.value = !1;
      }, 150);
    }
    function ll() {
      setTimeout(() => {
        ce.value = !1;
      }, 150);
    }
    function sl(m) {
      if (W.value = m, Ze.value = !1, ee.value) {
        const t = a.getSchemaColumns().find((s) => s.table === m && s.column === ee.value);
        t && (Q.value = t.type || "", $e.value = t.comment || "");
      }
    }
    function ol(m) {
      if (ee.value = m, ce.value = !1, W.value) {
        const t = a.getSchemaColumns().find((s) => s.table === W.value && s.column === m);
        t && (Q.value = t.type || "", $e.value = t.comment || "");
      }
    }
    const St = z(() => {
      var b, x;
      const m = /* @__PURE__ */ new Set();
      for (const O of Object.values(a.elementConfigs))
        if (O.fieldInfoList)
          for (const _e of O.fieldInfoList)
            _e.table && _e.column && m.add(`${_e.table}.${_e.column}`);
        else (b = O.fieldInfo) != null && b.table && ((x = O.fieldInfo) != null && x.column) && m.add(`${O.fieldInfo.table}.${O.fieldInfo.column}`);
      for (const O of a.getSchemaColumns())
        m.add(O.fullName);
      const t = [...m].sort();
      if (!ue.value) return t;
      const s = ue.value.trim().toLowerCase();
      if (/^[a-z0-9_.]+$/i.test(s)) {
        const O = t.filter((_e) => _e.toLowerCase().includes(s));
        if (O.length > 0) return O;
      }
      return t;
    });
    function nl(m) {
      ue.value.trim() && he.value.push({ type: "text", value: ue.value }), he.value.push({ type: "tag", value: m }), ue.value = "";
    }
    function il(m) {
      he.value.splice(m, 1);
    }
    function al(m) {
      if (m.key === "Backspace" && !ue.value && he.value.length > 0) {
        const t = he.value.pop();
        t.type === "text" && (ue.value = t.value);
      }
    }
    function dl() {
      setTimeout(() => {
        Ne.value = !1;
      }, 150);
    }
    const Mt = z(() => {
      var b, x;
      const m = /* @__PURE__ */ new Set();
      for (const O of a.getSchemaColumns())
        m.add(O.fullName);
      for (const O of Object.values(a.elementConfigs))
        if (O.fieldInfoList)
          for (const _e of O.fieldInfoList)
            _e.table && _e.column && m.add(`${_e.table}.${_e.column}`);
        else (b = O.fieldInfo) != null && b.table && ((x = O.fieldInfo) != null && x.column) && m.add(`${O.fieldInfo.table}.${O.fieldInfo.column}`);
      const t = [...m].sort();
      if (!qe.value) return t;
      const s = qe.value.trim().toLowerCase();
      return t.filter((O) => O.toLowerCase().includes(s));
    });
    function ul() {
      setTimeout(() => {
        ct.value = !1;
      }, 150);
    }
    function rl() {
      const m = qe.value.trim();
      m && !Le.value.includes(m) && Le.value.push(m), qe.value = "";
    }
    function cl(m) {
      Le.value.includes(m) || Le.value.push(m), qe.value = "";
    }
    function vl() {
      const m = he.value.map((t) => t.value);
      return ue.value.trim() && m.push(ue.value.trim()), m.join(" ").replace(/\s+/g, " ").trim();
    }
    function Et() {
      return he.value.filter((m) => m.type === "tag").map((m) => m.value);
    }
    function pl(m, t) {
      if (!m && t.length === 0) {
        he.value = [], ue.value = "";
        return;
      }
      if (t.length === 0) {
        he.value = [], ue.value = m;
        return;
      }
      const s = [];
      let b = m;
      for (const O of t) {
        const _e = b.indexOf(O);
        if (_e >= 0) {
          const ft = b.substring(0, _e).trim();
          ft && s.push({ type: "text", value: ft }), s.push({ type: "tag", value: O }), b = b.substring(_e + O.length);
        }
      }
      const x = b.trim();
      x && s.push({ type: "text", value: x }), s.length === 0 ? ue.value = m : (he.value = s, ue.value = "");
    }
    function ml() {
      const m = G.value.trim();
      m && !L.value.includes(m) && L.value.push(m), G.value = "";
    }
    function fl(m) {
      L.value.splice(m, 1);
    }
    function hl(m) {
      m.key === "Backspace" && !G.value && L.value.length > 0 && L.value.pop();
    }
    function yl() {
      ie.value.push({ name: "", dbMapping: "", type: "string", required: !1, description: "" });
    }
    function bl(m) {
      ie.value.splice(m, 1);
    }
    function Dt(m, t) {
      const s = m + t;
      if (s < 0 || s >= ie.value.length) return;
      const b = ie.value[m];
      ie.value[m] = ie.value[s], ie.value[s] = b, ie.value = [...ie.value];
    }
    function gl() {
      Z.value.push({ condition: "", message: "", column: "", severity: "error" });
    }
    function kl(m) {
      Z.value.splice(m, 1);
    }
    const xl = z(() => ie.value.filter((m) => m.name).map((m) => m.name));
    function $l() {
      if (U.value !== "csv_export" && U.value !== "csv_import") return;
      const m = Z.value.filter((t) => t.condition || t.message);
      return {
        columns: ie.value.filter((t) => t.name),
        encoding: S.value || void 0,
        delimiter: Ue.value || void 0,
        hasHeaderRow: je.value,
        filenamePattern: me.value || void 0,
        sortOrder: H.value || void 0,
        filterCondition: _.value || void 0,
        maxRows: p.value || void 0,
        errorHandling: V.value || void 0,
        duplicateHandling: X.value || void 0,
        preValidation: P.value || void 0,
        errorDefs: m.length > 0 ? m : void 0
      };
    }
    function wl() {
      if (U.value === "email")
        return {
          trigger: oe.value || "",
          to: fe.value || "",
          cc: te.value || void 0,
          bcc: Ce.value || void 0,
          subject: Ve.value || "",
          bodyTemplate: A.value || void 0,
          templatePath: y.value || void 0,
          variables: T.value.length > 0 ? T.value : void 0,
          attachments: q.value || void 0,
          conditions: Y.value || void 0,
          errorHandling: ke.value || void 0
        };
    }
    function Cl() {
      const m = le.value.trim();
      m && !T.value.includes(m) && T.value.push(m), le.value = "";
    }
    function _l(m) {
      T.value.splice(m, 1);
    }
    function Il(m) {
      m.key === "Backspace" && !le.value && T.value.length > 0 && T.value.pop();
    }
    $t(xe, (m) => {
      if (m) {
        const t = a.getMasterDefinition(m);
        t ? (re.value = t.entries.map((s) => ({ ...s })), ge.value = !0) : (re.value = [], ge.value = !1);
      } else
        re.value = [], ge.value = !1;
    });
    function Pt() {
      ge.value = !ge.value, ge.value && re.value.length === 0 && re.value.push({ value: "", label: "" });
    }
    function Lt() {
      re.value.push({ value: "", label: "" });
    }
    function Bt(m) {
      re.value.splice(m, 1);
    }
    function Tl() {
      var x;
      if (!xe.value) return;
      const [m, t] = xe.value.split(".");
      if (!m || !t) return;
      const s = re.value.filter((O) => O.value || O.label);
      if (s.length === 0) {
        a.deleteMasterDefinition(xe.value);
        return;
      }
      const b = a.getMasterDefinition(xe.value);
      a.setMasterDefinition({
        id: xe.value,
        table: m,
        column: t,
        name: (b == null ? void 0 : b.name) || t,
        columnType: (b == null ? void 0 : b.columnType) || ((x = de.value[0]) == null ? void 0 : x.type),
        description: b == null ? void 0 : b.description,
        entries: s,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      });
    }
    return (m, t) => (n(), Me(ut, { to: "body" }, [
      vt.value ? (n(), i("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: ve(g, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", {
          class: R(["di-editor-modal", { "di-editor-modal-wide": l.value }])
        }, [
          e("div", ta, [
            t[74] || (t[74] = e("h3", null, "要素情報を編集", -1)),
            e("div", la, [
              e("button", {
                onClick: we,
                class: "di-btn-auto",
                title: "自動検出"
              }, [
                $(u(Tt), { style: { width: "16px", height: "16px" } })
              ]),
              e("button", {
                onClick: g,
                class: "di-editor-close"
              }, [
                $(u(Qe), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          Je.value ? (n(), i("div", sa, [...t[75] || (t[75] = [
            e("span", { class: "di-static-badge" }, "固定文言", -1),
            e("span", { class: "di-static-hint" }, "このテキストはソースコードに直接記述されています", -1)
          ])])) : Be.value ? (n(), i("div", oa, [
            e("span", {
              class: R(["di-binding-badge", "di-binding-" + Be.value])
            }, v(Be.value), 3),
            Ae.value ? (n(), i("span", na, v(Ae.value), 1)) : c("", !0)
          ])) : c("", !0),
          e("div", ia, [
            e("button", {
              onClick: t[0] || (t[0] = (s) => I.value = "datasource"),
              class: R(["di-editor-tab", { "di-editor-tab-active": I.value === "datasource" }])
            }, [
              $(u(pt), { style: { width: "14px", height: "14px" } }),
              t[76] || (t[76] = D(" データソース ", -1))
            ], 2),
            e("button", {
              onClick: t[1] || (t[1] = (s) => I.value = "action"),
              class: R(["di-editor-tab", { "di-editor-tab-active": I.value === "action" }])
            }, [
              $(u(Zl), { style: { width: "14px", height: "14px" } }),
              t[77] || (t[77] = D(" アクション ", -1))
            ], 2),
            e("button", {
              onClick: t[2] || (t[2] = (s) => I.value = "form"),
              class: R(["di-editor-tab", { "di-editor-tab-active": I.value === "form" }])
            }, [
              $(u(Ol), { style: { width: "14px", height: "14px" } }),
              t[78] || (t[78] = D(" フォーム ", -1))
            ], 2)
          ]),
          e("div", aa, [
            I.value === "datasource" ? (n(), i(C, { key: 0 }, [
              e("div", da, [
                t[79] || (t[79] = e("label", { class: "di-form-label" }, "表示タイプ", -1)),
                e("div", ua, [
                  (n(), i(C, null, E(o, (s) => e("button", {
                    key: s.value,
                    onClick: (b) => B.value = s.value,
                    class: R(["di-display-type-card", { "di-display-type-active": B.value === s.value }]),
                    style: Oe(B.value === s.value ? { borderColor: s.color, background: s.color + "18" } : {})
                  }, [
                    (n(), Me(Ul(s.icon), {
                      style: Oe([{ width: "20px", height: "20px" }, { color: B.value === s.value ? s.color : "#64748b" }])
                    }, null, 8, ["style"])),
                    e("span", {
                      class: "di-display-type-label",
                      style: Oe({ color: B.value === s.value ? s.color : "#94a3b8" })
                    }, v(s.label), 5),
                    e("span", ca, v(s.description), 1)
                  ], 14, ra)), 64))
                ])
              ]),
              B.value === "db_direct" || B.value === "db_formatted" ? (n(), i(C, { key: 0 }, [
                de.value.length > 0 ? (n(), i("div", va, [
                  t[80] || (t[80] = e("label", { class: "di-form-label" }, "登録済みカラム", -1)),
                  e("div", pa, [
                    (n(!0), i(C, null, E(de.value, (s, b) => (n(), i("div", {
                      key: b,
                      class: "di-field-tag"
                    }, [
                      e("span", ma, v(s.table) + "." + v(s.column), 1),
                      s.type ? (n(), i("span", fa, v(s.type), 1)) : c("", !0),
                      e("button", {
                        onClick: (x) => Fe(b),
                        class: "di-field-tag-remove"
                      }, "×", 8, ha)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                Xe.value ? (n(), i("div", ya, [
                  e("div", ba, [
                    e("label", ga, [
                      $(u(pt), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                      t[81] || (t[81] = D(" schema.rb から選択 ", -1))
                    ]),
                    e("div", ka, [
                      f(e("input", {
                        "onUpdate:modelValue": t[3] || (t[3] = (s) => Pe.value = s),
                        onFocus: t[4] || (t[4] = (s) => Ye.value = !0),
                        type: "text",
                        placeholder: "テーブル.カラムを検索... (例: users, email)",
                        class: "di-input di-binding-search"
                      }, null, 544), [
                        [k, Pe.value]
                      ]),
                      Pe.value ? (n(), i("button", {
                        key: 0,
                        onClick: t[5] || (t[5] = (s) => {
                          Pe.value = "", Ye.value = !1;
                        }),
                        class: "di-binding-clear"
                      }, [
                        $(u(Qe), { style: { width: "14px", height: "14px" } })
                      ])) : c("", !0)
                    ]),
                    Ye.value && dt.value.length > 0 ? (n(), i("div", xa, [
                      (n(!0), i(C, null, E(dt.value, (s) => (n(), i("button", {
                        key: s.fullName,
                        onClick: (b) => M(s),
                        class: "di-binding-item has-db"
                      }, [
                        e("div", wa, [
                          e("span", Ca, v(s.fullName), 1),
                          e("span", _a, v(s.type), 1)
                        ]),
                        s.comment ? (n(), i("span", Ia, v(s.comment), 1)) : c("", !0)
                      ], 8, $a))), 128))
                    ])) : Ye.value && Pe.value && dt.value.length === 0 ? (n(), i("div", Ta, " 該当するカラムが見つかりません ")) : c("", !0)
                  ])
                ])) : c("", !0),
                Xe.value ? (n(), i("div", Ua, [...t[82] || (t[82] = [
                  e("span", null, "または手動入力", -1)
                ])])) : c("", !0),
                e("div", Va, [
                  e("div", Sa, [
                    t[83] || (t[83] = e("label", { class: "di-form-label" }, "テーブル名 *", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[6] || (t[6] = (s) => W.value = s),
                      onFocus: t[7] || (t[7] = (s) => Ze.value = !0),
                      onBlur: t[8] || (t[8] = (s) => tl()),
                      type: "text",
                      placeholder: "users",
                      class: "di-input",
                      autocomplete: "off"
                    }, null, 544), [
                      [k, W.value]
                    ]),
                    Ze.value && bt.value.length > 0 ? (n(), i("div", Ma, [
                      (n(!0), i(C, null, E(bt.value.slice(0, 10), (s) => (n(), i("button", {
                        key: s,
                        onMousedown: ve((b) => sl(s), ["prevent"]),
                        class: "di-suggest-item"
                      }, v(s), 41, Ea))), 128))
                    ])) : c("", !0)
                  ]),
                  e("div", Da, [
                    t[84] || (t[84] = e("label", { class: "di-form-label" }, "カラム名 *", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[9] || (t[9] = (s) => ee.value = s),
                      onFocus: t[10] || (t[10] = (s) => ce.value = !0),
                      onBlur: t[11] || (t[11] = (s) => ll()),
                      type: "text",
                      placeholder: "name",
                      class: "di-input",
                      autocomplete: "off"
                    }, null, 544), [
                      [k, ee.value]
                    ]),
                    ce.value && Vt.value.length > 0 ? (n(), i("div", Pa, [
                      (n(!0), i(C, null, E(Vt.value.slice(0, 10), (s) => (n(), i("button", {
                        key: s,
                        onMousedown: ve((b) => ol(s), ["prevent"]),
                        class: "di-suggest-item"
                      }, v(s), 41, La))), 128))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", Ba, [
                  t[86] || (t[86] = e("label", { class: "di-form-label" }, "データ型", -1)),
                  f(e("select", {
                    "onUpdate:modelValue": t[12] || (t[12] = (s) => Q.value = s),
                    class: "di-select"
                  }, [
                    t[85] || (t[85] = e("option", { value: "" }, "選択してください", -1)),
                    (n(), i(C, null, E(rt, (s) => e("option", {
                      key: s,
                      value: s
                    }, v(s), 9, Aa)), 64))
                  ], 512), [
                    [Ie, Q.value]
                  ])
                ]),
                e("button", {
                  onClick: Se,
                  class: "di-btn-add-field",
                  disabled: !W.value || !ee.value
                }, " + カラムを追加 ", 8, Fa),
                xe.value ? (n(), i("div", Oa, [
                  e("button", {
                    onClick: Pt,
                    class: R(["di-btn-condition-toggle", { "di-condition-active": ge.value }])
                  }, [
                    $(u(Rt), { style: { width: "14px", height: "14px" } }),
                    t[87] || (t[87] = D(" マスタ値を定義 ", -1)),
                    He.value ? (n(), i("span", ja, v(He.value.entries.length) + "件", 1)) : c("", !0)
                  ], 2),
                  ge.value ? (n(), i("div", Na, [
                    re.value.length > 0 ? (n(), i("div", Ha, [
                      t[88] || (t[88] = e("div", { class: "di-master-entries-header" }, [
                        e("span", { class: "di-master-col-val" }, "値"),
                        e("span", { class: "di-master-col-lbl" }, "ラベル"),
                        e("span", { class: "di-master-col-color" }, "色"),
                        e("span", { class: "di-master-col-act" })
                      ], -1)),
                      (n(!0), i(C, null, E(re.value, (s, b) => (n(), i("div", {
                        key: b,
                        class: "di-master-entry-row"
                      }, [
                        f(e("input", {
                          "onUpdate:modelValue": (x) => s.value = x,
                          placeholder: "1",
                          class: "di-master-input di-master-col-val"
                        }, null, 8, qa), [
                          [k, s.value]
                        ]),
                        f(e("input", {
                          "onUpdate:modelValue": (x) => s.label = x,
                          placeholder: "受付",
                          class: "di-master-input di-master-col-lbl"
                        }, null, 8, Ra), [
                          [k, s.label]
                        ]),
                        f(e("input", {
                          "onUpdate:modelValue": (x) => s.color = x,
                          type: "color",
                          class: "di-master-color-input"
                        }, null, 8, za), [
                          [k, s.color]
                        ]),
                        e("button", {
                          onClick: (x) => Bt(b),
                          class: "di-master-entry-remove"
                        }, "×", 8, Ya)
                      ]))), 128))
                    ])) : c("", !0),
                    e("button", {
                      onClick: Lt,
                      class: "di-btn-add-field",
                      style: { "margin-top": "4px" }
                    }, " + 値を追加 ")
                  ])) : c("", !0)
                ])) : c("", !0),
                B.value === "db_formatted" ? (n(), i("div", Ka, [
                  t[89] || (t[89] = e("label", { class: "di-form-label" }, "整形方法", -1)),
                  f(e("textarea", {
                    "onUpdate:modelValue": t[13] || (t[13] = (s) => F.value = s),
                    rows: "2",
                    placeholder: "YYYY年MM月DD日 に整形、姓 + 名 で結合 など",
                    class: "di-textarea"
                  }, null, 512), [
                    [k, F.value]
                  ])
                ])) : c("", !0),
                e("div", Ga, [
                  e("button", {
                    onClick: t[14] || (t[14] = (s) => Ee.value = !Ee.value),
                    class: R(["di-btn-condition-toggle", { "di-condition-active": Ee.value }])
                  }, [
                    $(u(Nt), { style: { width: "14px", height: "14px" } }),
                    t[90] || (t[90] = D(" このカラムは計算値を保存している ", -1)),
                    Ee.value ? (n(), i("span", Xa, "設定あり")) : c("", !0)
                  ], 2)
                ]),
                Ee.value ? (n(), i("div", Ja, [
                  e("div", Za, [
                    t[91] || (t[91] = e("label", { class: "di-form-label" }, "計算ロジック", -1)),
                    f(e("textarea", {
                      "onUpdate:modelValue": t[15] || (t[15] = (s) => st.value = s),
                      rows: "2",
                      placeholder: "SUM(order_items.price * quantity)、unit_price × quantity など",
                      class: "di-textarea di-textarea-mono"
                    }, null, 512), [
                      [k, st.value]
                    ])
                  ]),
                  e("div", Qa, [
                    t[92] || (t[92] = e("label", { class: "di-form-label" }, "元データ（テーブル.カラム）", -1)),
                    e("div", Wa, [
                      (n(!0), i(C, null, E(Le.value, (s, b) => (n(), i("span", {
                        key: b,
                        class: "di-calc-tag"
                      }, [
                        D(v(s) + " ", 1),
                        e("button", {
                          onClick: ve((x) => Le.value.splice(b, 1), ["stop"]),
                          class: "di-calc-tag-remove"
                        }, "×", 8, ed)
                      ]))), 128)),
                      f(e("input", {
                        "onUpdate:modelValue": t[16] || (t[16] = (s) => qe.value = s),
                        onFocus: t[17] || (t[17] = (s) => ct.value = !0),
                        onBlur: ul,
                        onKeydown: t[18] || (t[18] = kt(ve((s) => rl(), ["prevent"]), ["enter"])),
                        type: "text",
                        placeholder: "order_items.price",
                        class: "di-calc-tags-field",
                        autocomplete: "off"
                      }, null, 544), [
                        [k, qe.value]
                      ])
                    ]),
                    ct.value && Mt.value.length > 0 ? (n(), i("div", td, [
                      (n(!0), i(C, null, E(Mt.value.slice(0, 12), (s) => (n(), i("button", {
                        key: s,
                        onMousedown: ve((b) => cl(s), ["prevent"]),
                        class: "di-suggest-item"
                      }, [
                        $(u(pt), { style: { width: "10px", height: "10px", opacity: "0.5", "flex-shrink": "0" } }),
                        D(" " + v(s), 1)
                      ], 40, ld))), 128))
                    ])) : c("", !0),
                    t[93] || (t[93] = e("span", { class: "di-form-hint" }, "Enter で追加、またはドロップダウンから選択", -1))
                  ]),
                  e("div", sd, [
                    t[95] || (t[95] = e("label", { class: "di-form-label" }, "計算タイミング", -1)),
                    f(e("select", {
                      "onUpdate:modelValue": t[19] || (t[19] = (s) => ot.value = s),
                      class: "di-select"
                    }, [...t[94] || (t[94] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "on_save" }, "保存時（アプリ側で計算）", -1),
                      e("option", { value: "trigger" }, "DBトリガー", -1),
                      e("option", { value: "batch" }, "バッチ（定期実行）", -1),
                      e("option", { value: "realtime" }, "リアルタイム（ビュー/マテビュー）", -1)
                    ])], 512), [
                      [Ie, ot.value]
                    ])
                  ])
                ])) : c("", !0)
              ], 64)) : c("", !0),
              B.value === "calculated" ? (n(), i("div", od, [
                t[96] || (t[96] = e("label", { class: "di-form-label" }, "計算ロジック", -1)),
                e("div", {
                  class: "di-calc-tags-input",
                  onClick: t[23] || (t[23] = (s) => {
                    var b;
                    return (b = m.$refs.calcInputEl) == null ? void 0 : b.focus();
                  })
                }, [
                  (n(!0), i(C, null, E(he.value, (s, b) => (n(), i(C, { key: b }, [
                    s.type === "tag" ? (n(), i("span", nd, [
                      D(v(s.value) + " ", 1),
                      e("button", {
                        onClick: ve((x) => il(b), ["stop"]),
                        class: "di-calc-tag-remove"
                      }, "×", 8, id)
                    ])) : (n(), i("span", ad, v(s.value), 1))
                  ], 64))), 128)),
                  f(e("input", {
                    ref: "calcInputEl",
                    "onUpdate:modelValue": t[20] || (t[20] = (s) => ue.value = s),
                    onFocus: t[21] || (t[21] = (s) => Ne.value = !0),
                    onBlur: t[22] || (t[22] = (s) => dl()),
                    onKeydown: al,
                    type: "text",
                    placeholder: he.value.length === 0 ? "カラムを選択 or 自由入力 (例: × 2)" : "",
                    class: "di-calc-tags-field",
                    autocomplete: "off"
                  }, null, 40, dd), [
                    [k, ue.value]
                  ])
                ]),
                Ne.value && St.value.length > 0 ? (n(), i("div", ud, [
                  (n(!0), i(C, null, E(St.value.slice(0, 12), (s) => (n(), i("button", {
                    key: s,
                    onMousedown: ve((b) => nl(s), ["prevent"]),
                    class: "di-suggest-item"
                  }, [
                    $(u(pt), { style: { width: "10px", height: "10px", opacity: "0.5", "flex-shrink": "0" } }),
                    D(" " + v(s), 1)
                  ], 40, rd))), 128))
                ])) : c("", !0),
                t[97] || (t[97] = e("span", { class: "di-form-hint" }, "DBカラムはドロップダウンから挿入、演算子や数値はそのまま入力", -1))
              ])) : c("", !0),
              B.value === "static" || B.value === "other" ? (n(), i("div", cd, [
                t[98] || (t[98] = e("label", { class: "di-form-label" }, "メモ", -1)),
                f(e("textarea", {
                  "onUpdate:modelValue": t[24] || (t[24] = (s) => ye.value = s),
                  rows: "4",
                  placeholder: "この要素についてのメモ...",
                  class: "di-textarea"
                }, null, 512), [
                  [k, ye.value]
                ])
              ])) : c("", !0),
              B.value && B.value !== "other" ? (n(), i(C, { key: 3 }, [
                e("div", vd, [
                  e("button", {
                    onClick: t[25] || (t[25] = (s) => De.value = !De.value),
                    class: R(["di-btn-condition-toggle", { "di-condition-active": De.value || Re.value }])
                  }, [
                    $(u(Jt), { style: { width: "14px", height: "14px" } }),
                    t[99] || (t[99] = D(" 条件付き表示 ", -1)),
                    Re.value ? (n(), i("span", pd, "設定あり")) : c("", !0)
                  ], 2)
                ]),
                De.value ? (n(), i("div", md, [
                  e("div", fd, [
                    t[100] || (t[100] = e("label", { class: "di-form-label" }, "表示条件", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[26] || (t[26] = (s) => Re.value = s),
                      type: "text",
                      placeholder: "管理者ロール時のみ / ステータスがactiveの時",
                      class: "di-input"
                    }, null, 512), [
                      [k, Re.value]
                    ])
                  ]),
                  e("div", hd, [
                    t[101] || (t[101] = e("label", { class: "di-form-label" }, "判定カラム", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[27] || (t[27] = (s) => nt.value = s),
                      type: "text",
                      placeholder: "users.role / orders.status",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [k, nt.value]
                    ])
                  ]),
                  e("div", yd, [
                    e("div", bd, [
                      t[103] || (t[103] = e("label", { class: "di-form-label" }, "条件不一致時の挙動", -1)),
                      f(e("select", {
                        "onUpdate:modelValue": t[28] || (t[28] = (s) => ze.value = s),
                        class: "di-select"
                      }, [...t[102] || (t[102] = [
                        e("option", { value: "" }, "未指定", -1),
                        e("option", { value: "hidden" }, "非表示", -1),
                        e("option", { value: "disabled" }, "無効化 (グレーアウト)", -1),
                        e("option", { value: "different_value" }, "別の値を表示", -1),
                        e("option", { value: "empty" }, "空欄", -1)
                      ])], 512), [
                        [Ie, ze.value]
                      ])
                    ])
                  ]),
                  ze.value === "different_value" ? (n(), i("div", gd, [
                    t[104] || (t[104] = e("label", { class: "di-form-label" }, "代わりに表示する値", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[29] || (t[29] = (s) => it.value = s),
                      type: "text",
                      placeholder: "「権限がありません」/ 「***」",
                      class: "di-input"
                    }, null, 512), [
                      [k, it.value]
                    ])
                  ])) : c("", !0)
                ])) : c("", !0)
              ], 64)) : c("", !0),
              B.value === "db_direct" || B.value === "db_formatted" || B.value === "calculated" ? (n(), i(C, { key: 4 }, [
                t[112] || (t[112] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "表示の詳細")
                ], -1)),
                e("div", kd, [
                  e("div", xd, [
                    t[105] || (t[105] = e("label", { class: "di-form-label" }, "サンプル値", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[30] || (t[30] = (s) => We.value = s),
                      type: "text",
                      placeholder: "12,500 / 田中太郎",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [k, We.value]
                    ])
                  ]),
                  e("div", $d, [
                    t[106] || (t[106] = e("label", { class: "di-form-label" }, "単位", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[31] || (t[31] = (s) => et.value = s),
                      type: "text",
                      placeholder: "円 / %",
                      class: "di-input"
                    }, null, 512), [
                      [k, et.value]
                    ])
                  ])
                ]),
                e("div", wd, [
                  e("div", Cd, [
                    t[108] || (t[108] = e("label", { class: "di-form-label" }, "小数点の扱い", -1)),
                    f(e("select", {
                      "onUpdate:modelValue": t[32] || (t[32] = (s) => Ke.value = s),
                      class: "di-select"
                    }, [...t[107] || (t[107] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "round" }, "四捨五入", -1),
                      e("option", { value: "floor" }, "切り捨て", -1),
                      e("option", { value: "ceil" }, "切り上げ", -1),
                      e("option", { value: "decimal_1" }, "小数第1位まで", -1),
                      e("option", { value: "decimal_2" }, "小数第2位まで", -1),
                      e("option", { value: "integer" }, "整数のみ", -1)
                    ])], 512), [
                      [Ie, Ke.value]
                    ])
                  ]),
                  e("div", _d, [
                    t[109] || (t[109] = e("label", { class: "di-form-label" }, "NULL/ゼロ時", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[33] || (t[33] = (s) => tt.value = s),
                      type: "text",
                      placeholder: "- / 0 / 非表示 / N/A",
                      class: "di-input"
                    }, null, 512), [
                      [k, tt.value]
                    ])
                  ])
                ]),
                e("div", Id, [
                  t[110] || (t[110] = e("label", { class: "di-form-label" }, "表示フォーマット", -1)),
                  f(e("input", {
                    "onUpdate:modelValue": t[34] || (t[34] = (s) => lt.value = s),
                    type: "text",
                    placeholder: "カンマ区切り / ¥記号付き / YYYY/MM/DD",
                    class: "di-input"
                  }, null, 512), [
                    [k, lt.value]
                  ])
                ]),
                e("div", Td, [
                  t[111] || (t[111] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                  f(e("textarea", {
                    "onUpdate:modelValue": t[35] || (t[35] = (s) => ye.value = s),
                    rows: "2",
                    placeholder: "補足情報があれば...",
                    class: "di-textarea"
                  }, null, 512), [
                    [k, ye.value]
                  ])
                ])
              ], 64)) : c("", !0)
            ], 64)) : c("", !0),
            I.value === "action" ? (n(), i(C, { key: 1 }, [
              e("div", Ud, [
                t[114] || (t[114] = e("label", { class: "di-form-label" }, "アクションタイプ", -1)),
                f(e("select", {
                  "onUpdate:modelValue": t[36] || (t[36] = (s) => U.value = s),
                  class: "di-select"
                }, [...t[113] || (t[113] = [
                  e("option", { value: "" }, "選択してください", -1),
                  e("option", { value: "navigate" }, "画面遷移", -1),
                  e("option", { value: "api" }, "API呼び出し", -1),
                  e("option", { value: "modal" }, "モーダル表示", -1),
                  e("option", { value: "emit" }, "イベント発火", -1),
                  e("option", { value: "function" }, "関数実行", -1),
                  e("option", { value: "csv_export" }, "CSV出力", -1),
                  e("option", { value: "csv_import" }, "CSV取込", -1),
                  e("option", { value: "email" }, "メール送信", -1)
                ])], 512), [
                  [Ie, U.value]
                ])
              ]),
              e("div", Vd, [
                t[115] || (t[115] = e("label", { class: "di-form-label" }, "ターゲット", -1)),
                f(e("input", {
                  "onUpdate:modelValue": t[37] || (t[37] = (s) => K.value = s),
                  type: "text",
                  placeholder: U.value === "navigate" ? "/tasks" : U.value === "api" ? "/api/users" : U.value === "modal" ? "confirm-dialog" : U.value === "csv_export" ? "/api/export/users" : U.value === "csv_import" ? "/api/import/users" : "",
                  class: "di-input di-input-mono"
                }, null, 8, Sd), [
                  [k, K.value]
                ])
              ]),
              U.value === "api" ? (n(), i("div", Md, [
                t[117] || (t[117] = e("label", { class: "di-form-label" }, "HTTPメソッド", -1)),
                f(e("select", {
                  "onUpdate:modelValue": t[38] || (t[38] = (s) => J.value = s),
                  class: "di-select"
                }, [...t[116] || (t[116] = [
                  e("option", { value: "" }, "選択してください", -1),
                  e("option", { value: "GET" }, "GET", -1),
                  e("option", { value: "POST" }, "POST", -1),
                  e("option", { value: "PUT" }, "PUT", -1),
                  e("option", { value: "DELETE" }, "DELETE", -1),
                  e("option", { value: "PATCH" }, "PATCH", -1)
                ])], 512), [
                  [Ie, J.value]
                ])
              ])) : c("", !0),
              e("div", Ed, [
                t[118] || (t[118] = e("label", { class: "di-form-label" }, "説明", -1)),
                f(e("textarea", {
                  "onUpdate:modelValue": t[39] || (t[39] = (s) => ne.value = s),
                  rows: "3",
                  placeholder: "このアクションの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [k, ne.value]
                ])
              ]),
              U.value === "csv_export" || U.value === "csv_import" ? (n(), i(C, { key: 1 }, [
                e("div", Dd, [
                  e("span", null, [
                    $(u(Wt), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[119] || (t[119] = D(" CSV仕様", -1))
                  ])
                ]),
                e("div", Pd, [
                  t[126] || (t[126] = e("label", { class: "di-form-label" }, "ファイル設定", -1)),
                  e("div", Ld, [
                    e("div", Bd, [
                      t[121] || (t[121] = e("label", { class: "di-form-label" }, "エンコーディング", -1)),
                      f(e("select", {
                        "onUpdate:modelValue": t[40] || (t[40] = (s) => S.value = s),
                        class: "di-select"
                      }, [...t[120] || (t[120] = [
                        e("option", { value: "UTF-8" }, "UTF-8", -1),
                        e("option", { value: "Shift_JIS" }, "Shift_JIS", -1),
                        e("option", { value: "EUC-JP" }, "EUC-JP", -1),
                        e("option", { value: "UTF-8 BOM" }, "UTF-8 BOM", -1)
                      ])], 512), [
                        [Ie, S.value]
                      ])
                    ]),
                    e("div", Ad, [
                      t[123] || (t[123] = e("label", { class: "di-form-label" }, "区切り文字", -1)),
                      f(e("select", {
                        "onUpdate:modelValue": t[41] || (t[41] = (s) => Ue.value = s),
                        class: "di-select"
                      }, [...t[122] || (t[122] = [
                        e("option", { value: "," }, "カンマ (,)", -1),
                        e("option", { value: "	" }, "タブ", -1),
                        e("option", { value: "|" }, "パイプ (|)", -1)
                      ])], 512), [
                        [Ie, Ue.value]
                      ])
                    ])
                  ]),
                  e("div", Fd, [
                    e("label", Od, [
                      f(e("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": t[42] || (t[42] = (s) => je.value = s),
                        class: "di-checkbox"
                      }, null, 512), [
                        [jt, je.value]
                      ]),
                      t[124] || (t[124] = D(" ヘッダー行あり ", -1))
                    ])
                  ]),
                  e("div", jd, [
                    t[125] || (t[125] = e("label", { class: "di-form-label" }, "ファイル名パターン", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[43] || (t[43] = (s) => me.value = s),
                      type: "text",
                      placeholder: "users_{YYYYMMDD}.csv",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [k, me.value]
                    ])
                  ])
                ]),
                e("div", Nd, [
                  t[129] || (t[129] = e("label", { class: "di-form-label" }, "CSV列定義", -1)),
                  ie.value.length > 0 ? (n(), i("div", Hd, [
                    t[128] || (t[128] = e("div", { class: "di-csv-columns-header" }, [
                      e("span", { class: "di-csv-col-no" }, "No"),
                      e("span", { class: "di-csv-col-name" }, "項目名"),
                      e("span", { class: "di-csv-col-db" }, "DBマッピング"),
                      e("span", { class: "di-csv-col-proc" }, "加工"),
                      e("span", { class: "di-csv-col-type" }, "型"),
                      e("span", { class: "di-csv-col-req" }, "必須"),
                      e("span", { class: "di-csv-col-desc" }, "説明"),
                      e("span", { class: "di-csv-col-act" })
                    ], -1)),
                    (n(!0), i(C, null, E(ie.value, (s, b) => (n(), i("div", {
                      key: b,
                      class: "di-csv-column-row"
                    }, [
                      e("span", qd, v(b + 1), 1),
                      f(e("input", {
                        "onUpdate:modelValue": (x) => s.name = x,
                        placeholder: "項目名",
                        class: "di-csv-input di-csv-col-name"
                      }, null, 8, Rd), [
                        [k, s.name]
                      ]),
                      f(e("input", {
                        "onUpdate:modelValue": (x) => s.dbMapping = x,
                        placeholder: "table.col",
                        class: "di-csv-input di-csv-col-db"
                      }, null, 8, zd), [
                        [k, s.dbMapping]
                      ]),
                      f(e("input", {
                        "onUpdate:modelValue": (x) => s.processing = x,
                        placeholder: "姓+名, IF...",
                        class: "di-csv-input di-csv-col-proc"
                      }, null, 8, Yd), [
                        [k, s.processing]
                      ]),
                      f(e("select", {
                        "onUpdate:modelValue": (x) => s.type = x,
                        class: "di-csv-select di-csv-col-type"
                      }, [...t[127] || (t[127] = [
                        e("option", { value: "" }, "-", -1),
                        e("option", { value: "string" }, "string", -1),
                        e("option", { value: "integer" }, "integer", -1),
                        e("option", { value: "decimal" }, "decimal", -1),
                        e("option", { value: "date" }, "date", -1),
                        e("option", { value: "datetime" }, "datetime", -1),
                        e("option", { value: "boolean" }, "boolean", -1)
                      ])], 8, Kd), [
                        [Ie, s.type]
                      ]),
                      e("label", Gd, [
                        f(e("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": (x) => s.required = x,
                          class: "di-checkbox"
                        }, null, 8, Xd), [
                          [jt, s.required]
                        ])
                      ]),
                      f(e("input", {
                        "onUpdate:modelValue": (x) => s.description = x,
                        placeholder: "備考",
                        class: "di-csv-input di-csv-col-desc"
                      }, null, 8, Jd), [
                        [k, s.description]
                      ]),
                      e("div", Zd, [
                        e("button", {
                          onClick: (x) => Dt(b, -1),
                          disabled: b === 0,
                          class: "di-csv-move-btn",
                          title: "上へ"
                        }, [
                          $(u(Pl), { style: { width: "12px", height: "12px" } })
                        ], 8, Qd),
                        e("button", {
                          onClick: (x) => Dt(b, 1),
                          disabled: b === ie.value.length - 1,
                          class: "di-csv-move-btn",
                          title: "下へ"
                        }, [
                          $(u(Qt), { style: { width: "12px", height: "12px" } })
                        ], 8, Wd),
                        e("button", {
                          onClick: (x) => bl(b),
                          class: "di-csv-remove-btn",
                          title: "削除"
                        }, "×", 8, eu)
                      ])
                    ]))), 128))
                  ])) : c("", !0),
                  e("button", {
                    onClick: yl,
                    class: "di-btn-add-field"
                  }, " + 列を追加 ")
                ]),
                U.value === "csv_export" ? (n(), i(C, { key: 0 }, [
                  t[133] || (t[133] = e("div", { class: "di-form-divider" }, [
                    e("span", null, "出力オプション")
                  ], -1)),
                  e("div", tu, [
                    t[130] || (t[130] = e("label", { class: "di-form-label" }, "ソート順", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[44] || (t[44] = (s) => H.value = s),
                      type: "text",
                      placeholder: "created_at DESC",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [k, H.value]
                    ])
                  ]),
                  e("div", lu, [
                    t[131] || (t[131] = e("label", { class: "di-form-label" }, "抽出条件", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[45] || (t[45] = (s) => _.value = s),
                      type: "text",
                      placeholder: "status = 'active'",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [k, _.value]
                    ])
                  ]),
                  e("div", su, [
                    t[132] || (t[132] = e("label", { class: "di-form-label" }, "最大行数", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[46] || (t[46] = (s) => p.value = s),
                      type: "number",
                      placeholder: "10000",
                      class: "di-input"
                    }, null, 512), [
                      [
                        k,
                        p.value,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ], 64)) : c("", !0),
                U.value === "csv_import" ? (n(), i(C, { key: 1 }, [
                  t[139] || (t[139] = e("div", { class: "di-form-divider" }, [
                    e("span", null, "取込オプション")
                  ], -1)),
                  e("div", ou, [
                    t[135] || (t[135] = e("label", { class: "di-form-label" }, "エラー処理", -1)),
                    f(e("select", {
                      "onUpdate:modelValue": t[47] || (t[47] = (s) => V.value = s),
                      class: "di-select"
                    }, [...t[134] || (t[134] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "stop_on_first" }, "最初のエラーで停止", -1),
                      e("option", { value: "skip_and_continue" }, "スキップして続行", -1),
                      e("option", { value: "collect_all" }, "全エラー収集", -1)
                    ])], 512), [
                      [Ie, V.value]
                    ])
                  ]),
                  e("div", nu, [
                    t[137] || (t[137] = e("label", { class: "di-form-label" }, "重複処理", -1)),
                    f(e("select", {
                      "onUpdate:modelValue": t[48] || (t[48] = (s) => X.value = s),
                      class: "di-select"
                    }, [...t[136] || (t[136] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "skip" }, "スキップ", -1),
                      e("option", { value: "overwrite" }, "上書き", -1),
                      e("option", { value: "error" }, "エラー", -1)
                    ])], 512), [
                      [Ie, X.value]
                    ])
                  ]),
                  e("div", iu, [
                    t[138] || (t[138] = e("label", { class: "di-form-label" }, "事前バリデーション", -1)),
                    f(e("textarea", {
                      "onUpdate:modelValue": t[49] || (t[49] = (s) => P.value = s),
                      rows: "2",
                      placeholder: "取込前のチェック内容...",
                      class: "di-textarea"
                    }, null, 512), [
                      [k, P.value]
                    ])
                  ])
                ], 64)) : c("", !0),
                t[143] || (t[143] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "エラー定義")
                ], -1)),
                e("div", au, [
                  Z.value.length > 0 ? (n(), i("div", du, [
                    t[142] || (t[142] = e("div", { class: "di-csv-columns-header" }, [
                      e("span", { class: "di-csv-err-col" }, "対象列"),
                      e("span", { class: "di-csv-err-cond" }, "エラー条件"),
                      e("span", { class: "di-csv-err-msg" }, "エラーメッセージ"),
                      e("span", { class: "di-csv-err-sev" }, "種別"),
                      e("span", { class: "di-csv-err-act" })
                    ], -1)),
                    (n(!0), i(C, null, E(Z.value, (s, b) => (n(), i("div", {
                      key: b,
                      class: "di-csv-column-row"
                    }, [
                      f(e("select", {
                        "onUpdate:modelValue": (x) => s.column = x,
                        class: "di-csv-select di-csv-err-col"
                      }, [
                        t[140] || (t[140] = e("option", { value: "" }, "（全体）", -1)),
                        (n(!0), i(C, null, E(xl.value, (x) => (n(), i("option", {
                          key: x,
                          value: x
                        }, v(x), 9, ru))), 128))
                      ], 8, uu), [
                        [Ie, s.column]
                      ]),
                      f(e("input", {
                        "onUpdate:modelValue": (x) => s.condition = x,
                        placeholder: "必須項目が空",
                        class: "di-csv-input di-csv-err-cond"
                      }, null, 8, cu), [
                        [k, s.condition]
                      ]),
                      f(e("input", {
                        "onUpdate:modelValue": (x) => s.message = x,
                        placeholder: "○○は必須です",
                        class: "di-csv-input di-csv-err-msg"
                      }, null, 8, vu), [
                        [k, s.message]
                      ]),
                      f(e("select", {
                        "onUpdate:modelValue": (x) => s.severity = x,
                        class: "di-csv-select di-csv-err-sev"
                      }, [...t[141] || (t[141] = [
                        e("option", { value: "error" }, "エラー", -1),
                        e("option", { value: "warning" }, "警告", -1)
                      ])], 8, pu), [
                        [Ie, s.severity]
                      ]),
                      e("button", {
                        onClick: (x) => kl(b),
                        class: "di-csv-remove-btn",
                        title: "削除"
                      }, "×", 8, mu)
                    ]))), 128))
                  ])) : c("", !0),
                  e("button", {
                    onClick: gl,
                    class: "di-btn-add-field"
                  }, " + エラー定義を追加 ")
                ])
              ], 64)) : c("", !0),
              U.value === "email" ? (n(), i(C, { key: 2 }, [
                e("div", fu, [
                  e("span", null, [
                    $(u(ql), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[144] || (t[144] = D(" メール基本設定", -1))
                  ])
                ]),
                e("div", hu, [
                  e("div", yu, [
                    t[145] || (t[145] = e("label", { class: "di-form-label" }, "トリガー *", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[50] || (t[50] = (s) => oe.value = s),
                      type: "text",
                      placeholder: "注文確定時、ボタンクリック",
                      class: "di-input"
                    }, null, 512), [
                      [k, oe.value]
                    ])
                  ]),
                  e("div", bu, [
                    t[146] || (t[146] = e("label", { class: "di-form-label" }, "宛先 *", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[51] || (t[51] = (s) => fe.value = s),
                      type: "text",
                      placeholder: "ユーザーメール、管理者固定",
                      class: "di-input"
                    }, null, 512), [
                      [k, fe.value]
                    ])
                  ])
                ]),
                e("div", gu, [
                  e("div", ku, [
                    t[147] || (t[147] = e("label", { class: "di-form-label" }, "CC", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[52] || (t[52] = (s) => te.value = s),
                      type: "text",
                      placeholder: "CC宛先",
                      class: "di-input"
                    }, null, 512), [
                      [k, te.value]
                    ])
                  ]),
                  e("div", xu, [
                    t[148] || (t[148] = e("label", { class: "di-form-label" }, "BCC", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[53] || (t[53] = (s) => Ce.value = s),
                      type: "text",
                      placeholder: "BCC宛先",
                      class: "di-input"
                    }, null, 512), [
                      [k, Ce.value]
                    ])
                  ])
                ]),
                e("div", $u, [
                  t[149] || (t[149] = e("label", { class: "di-form-label" }, "件名テンプレート *", -1)),
                  f(e("input", {
                    "onUpdate:modelValue": t[54] || (t[54] = (s) => Ve.value = s),
                    type: "text",
                    placeholder: "【注文確認】ご注文番号 {orderNumber}",
                    class: "di-input"
                  }, null, 512), [
                    [k, Ve.value]
                  ])
                ]),
                e("div", wu, [
                  t[150] || (t[150] = e("label", { class: "di-form-label" }, "本文テンプレート概要", -1)),
                  f(e("textarea", {
                    "onUpdate:modelValue": t[55] || (t[55] = (s) => A.value = s),
                    rows: "3",
                    placeholder: "本文の概要を記述...",
                    class: "di-textarea"
                  }, null, 512), [
                    [k, A.value]
                  ])
                ]),
                e("div", Cu, [
                  t[151] || (t[151] = e("label", { class: "di-form-label" }, "テンプレートファイルパス", -1)),
                  f(e("input", {
                    "onUpdate:modelValue": t[56] || (t[56] = (s) => y.value = s),
                    type: "text",
                    placeholder: "resources/mail/order_confirm.blade.php",
                    class: "di-input di-input-mono"
                  }, null, 512), [
                    [k, y.value]
                  ])
                ]),
                t[156] || (t[156] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "差し込み変数")
                ], -1)),
                e("div", _u, [
                  e("div", Iu, [
                    (n(!0), i(C, null, E(T.value, (s, b) => (n(), i("span", {
                      key: b,
                      class: "di-calc-tag"
                    }, [
                      D(v(s) + " ", 1),
                      e("button", {
                        onClick: ve((x) => _l(b), ["stop"]),
                        class: "di-calc-tag-remove"
                      }, "×", 8, Tu)
                    ]))), 128)),
                    f(e("input", {
                      "onUpdate:modelValue": t[57] || (t[57] = (s) => le.value = s),
                      onKeydown: [
                        t[58] || (t[58] = kt(ve((s) => Cl(), ["prevent"]), ["enter"])),
                        Il
                      ],
                      type: "text",
                      placeholder: "変数名を入力してEnter (例: userName)",
                      class: "di-calc-tags-field",
                      autocomplete: "off"
                    }, null, 544), [
                      [k, le.value]
                    ])
                  ]),
                  t[152] || (t[152] = e("span", { class: "di-form-hint" }, "Enter で追加", -1))
                ]),
                t[157] || (t[157] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "オプション")
                ], -1)),
                e("div", Uu, [
                  t[153] || (t[153] = e("label", { class: "di-form-label" }, "添付ファイル", -1)),
                  f(e("input", {
                    "onUpdate:modelValue": t[59] || (t[59] = (s) => q.value = s),
                    type: "text",
                    placeholder: "添付ファイルの説明",
                    class: "di-input"
                  }, null, 512), [
                    [k, q.value]
                  ])
                ]),
                e("div", Vu, [
                  t[154] || (t[154] = e("label", { class: "di-form-label" }, "送信条件", -1)),
                  f(e("input", {
                    "onUpdate:modelValue": t[60] || (t[60] = (s) => Y.value = s),
                    type: "text",
                    placeholder: "メール送信設定がONの場合",
                    class: "di-input"
                  }, null, 512), [
                    [k, Y.value]
                  ])
                ]),
                e("div", Su, [
                  t[155] || (t[155] = e("label", { class: "di-form-label" }, "エラー処理", -1)),
                  f(e("input", {
                    "onUpdate:modelValue": t[61] || (t[61] = (s) => ke.value = s),
                    type: "text",
                    placeholder: "キューに入れてリトライ",
                    class: "di-input"
                  }, null, 512), [
                    [k, ke.value]
                  ])
                ])
              ], 64)) : c("", !0),
              e("div", Mu, [
                t[158] || (t[158] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                f(e("textarea", {
                  "onUpdate:modelValue": t[62] || (t[62] = (s) => ye.value = s),
                  rows: "2",
                  placeholder: "補足情報があれば...",
                  class: "di-textarea"
                }, null, 512), [
                  [k, ye.value]
                ])
              ])
            ], 64)) : c("", !0),
            I.value === "form" ? (n(), i(C, { key: 2 }, [
              e("div", Eu, [
                t[160] || (t[160] = e("label", { class: "di-form-label" }, "入力タイプ", -1)),
                f(e("select", {
                  "onUpdate:modelValue": t[63] || (t[63] = (s) => ae.value = s),
                  class: "di-select"
                }, [...t[159] || (t[159] = [
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
                  [Ie, ae.value]
                ])
              ]),
              de.value.length > 0 ? (n(), i("div", Du, [
                t[161] || (t[161] = e("label", { class: "di-form-label" }, "対応カラム", -1)),
                e("div", Pu, [
                  (n(!0), i(C, null, E(de.value, (s, b) => (n(), i("div", {
                    key: b,
                    class: "di-field-tag"
                  }, [
                    e("span", Lu, v(s.table) + "." + v(s.column), 1),
                    s.type ? (n(), i("span", Bu, v(s.type), 1)) : c("", !0),
                    e("button", {
                      onClick: (x) => Fe(b),
                      class: "di-field-tag-remove"
                    }, "×", 8, Au)
                  ]))), 128))
                ])
              ])) : c("", !0),
              Xe.value ? (n(), i("div", Fu, [
                e("div", Ou, [
                  e("label", ju, [
                    $(u(pt), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[162] || (t[162] = D(" 対応するDBカラム ", -1))
                  ]),
                  e("div", Nu, [
                    f(e("input", {
                      "onUpdate:modelValue": t[64] || (t[64] = (s) => Pe.value = s),
                      onFocus: t[65] || (t[65] = (s) => Ye.value = !0),
                      type: "text",
                      placeholder: "テーブル.カラムを検索...",
                      class: "di-input di-binding-search"
                    }, null, 544), [
                      [k, Pe.value]
                    ]),
                    Pe.value ? (n(), i("button", {
                      key: 0,
                      onClick: t[66] || (t[66] = (s) => {
                        Pe.value = "", Ye.value = !1;
                      }),
                      class: "di-binding-clear"
                    }, [
                      $(u(Qe), { style: { width: "14px", height: "14px" } })
                    ])) : c("", !0)
                  ]),
                  Ye.value && dt.value.length > 0 ? (n(), i("div", Hu, [
                    (n(!0), i(C, null, E(dt.value, (s) => (n(), i("button", {
                      key: s.fullName,
                      onClick: (b) => M(s),
                      class: "di-binding-item has-db"
                    }, [
                      e("div", Ru, [
                        e("span", zu, v(s.fullName), 1),
                        e("span", Yu, v(s.type), 1)
                      ]),
                      s.comment ? (n(), i("span", Ku, v(s.comment), 1)) : c("", !0)
                    ], 8, qu))), 128))
                  ])) : c("", !0)
                ])
              ])) : c("", !0),
              xe.value && (ae.value === "select" || ae.value === "radio" || ae.value === "checkbox") ? (n(), i("div", Gu, [
                e("button", {
                  onClick: Pt,
                  class: R(["di-btn-condition-toggle", { "di-condition-active": ge.value }])
                }, [
                  $(u(Rt), { style: { width: "14px", height: "14px" } }),
                  t[163] || (t[163] = D(" 選択肢を定義 ", -1)),
                  He.value ? (n(), i("span", Xu, v(He.value.entries.length) + "件", 1)) : c("", !0)
                ], 2),
                ge.value ? (n(), i("div", Ju, [
                  re.value.length > 0 ? (n(), i("div", Zu, [
                    t[164] || (t[164] = e("div", { class: "di-master-entries-header" }, [
                      e("span", { class: "di-master-col-val" }, "値"),
                      e("span", { class: "di-master-col-lbl" }, "ラベル"),
                      e("span", { class: "di-master-col-color" }, "色"),
                      e("span", { class: "di-master-col-act" })
                    ], -1)),
                    (n(!0), i(C, null, E(re.value, (s, b) => (n(), i("div", {
                      key: b,
                      class: "di-master-entry-row"
                    }, [
                      f(e("input", {
                        "onUpdate:modelValue": (x) => s.value = x,
                        placeholder: "1",
                        class: "di-master-input di-master-col-val"
                      }, null, 8, Qu), [
                        [k, s.value]
                      ]),
                      f(e("input", {
                        "onUpdate:modelValue": (x) => s.label = x,
                        placeholder: "受付",
                        class: "di-master-input di-master-col-lbl"
                      }, null, 8, Wu), [
                        [k, s.label]
                      ]),
                      f(e("input", {
                        "onUpdate:modelValue": (x) => s.color = x,
                        type: "color",
                        class: "di-master-color-input"
                      }, null, 8, er), [
                        [k, s.color]
                      ]),
                      e("button", {
                        onClick: (x) => Bt(b),
                        class: "di-master-entry-remove"
                      }, "×", 8, tr)
                    ]))), 128))
                  ])) : c("", !0),
                  e("button", {
                    onClick: Lt,
                    class: "di-btn-add-field",
                    style: { "margin-top": "4px" }
                  }, " + 値を追加 ")
                ])) : c("", !0)
              ])) : c("", !0),
              e("div", lr, [
                e("button", {
                  onClick: t[67] || (t[67] = (s) => pe.value = !pe.value),
                  class: R(["di-btn-condition-toggle", { "di-condition-active": pe.value }])
                }, [
                  $(u(Jt), { style: { width: "14px", height: "14px" } }),
                  t[165] || (t[165] = D(" 必須入力 ", -1)),
                  pe.value ? (n(), i("span", sr, "必須")) : c("", !0)
                ], 2)
              ]),
              e("div", or, [
                t[166] || (t[166] = e("label", { class: "di-form-label" }, "バリデーションルール", -1)),
                e("div", nr, [
                  (n(!0), i(C, null, E(L.value, (s, b) => (n(), i("span", {
                    key: b,
                    class: "di-calc-tag",
                    style: { background: "#ec4899" }
                  }, [
                    D(v(s) + " ", 1),
                    e("button", {
                      onClick: ve((x) => fl(b), ["stop"]),
                      class: "di-calc-tag-remove"
                    }, "×", 8, ir)
                  ]))), 128)),
                  f(e("input", {
                    "onUpdate:modelValue": t[68] || (t[68] = (s) => G.value = s),
                    onKeydown: [
                      t[69] || (t[69] = kt(ve((s) => ml(), ["prevent"]), ["enter"])),
                      hl
                    ],
                    type: "text",
                    placeholder: L.value.length === 0 ? "max:255, email, 必須 など (Enter で追加)" : "",
                    class: "di-calc-tags-field",
                    autocomplete: "off"
                  }, null, 40, ar), [
                    [k, G.value]
                  ])
                ]),
                t[167] || (t[167] = e("span", { class: "di-form-hint" }, "Enter で追加、Backspace で削除", -1))
              ]),
              e("div", dr, [
                t[168] || (t[168] = e("label", { class: "di-form-label" }, "プレースホルダー", -1)),
                f(e("input", {
                  "onUpdate:modelValue": t[70] || (t[70] = (s) => se.value = s),
                  type: "text",
                  placeholder: "例: user@example.com",
                  class: "di-input"
                }, null, 512), [
                  [k, se.value]
                ])
              ]),
              e("div", ur, [
                t[169] || (t[169] = e("label", { class: "di-form-label" }, "デフォルト値", -1)),
                f(e("input", {
                  "onUpdate:modelValue": t[71] || (t[71] = (s) => be.value = s),
                  type: "text",
                  placeholder: "初期値",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [k, be.value]
                ])
              ]),
              e("div", rr, [
                t[170] || (t[170] = e("label", { class: "di-form-label" }, "説明", -1)),
                f(e("textarea", {
                  "onUpdate:modelValue": t[72] || (t[72] = (s) => Te.value = s),
                  rows: "3",
                  placeholder: "このフォーム要素の説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [k, Te.value]
                ])
              ]),
              e("div", cr, [
                t[171] || (t[171] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                f(e("textarea", {
                  "onUpdate:modelValue": t[73] || (t[73] = (s) => ye.value = s),
                  rows: "2",
                  placeholder: "補足情報があれば...",
                  class: "di-textarea"
                }, null, 512), [
                  [k, ye.value]
                ])
              ])
            ], 64)) : c("", !0)
          ]),
          e("div", vr, [
            e("button", {
              onClick: at,
              class: "di-btn-delete"
            }, [
              $(u(xt), { style: { width: "14px", height: "14px" } }),
              t[172] || (t[172] = D(" 削除 ", -1))
            ]),
            e("div", pr, [
              e("button", {
                onClick: g,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: Ge,
                class: "di-btn-save"
              }, [
                $(u(el), { style: { width: "14px", height: "14px" } }),
                t[173] || (t[173] = D(" 保存 ", -1))
              ])
            ])
          ])
        ], 2)
      ])) : c("", !0)
    ]));
  }
}), fr = /* @__PURE__ */ Ut(mr, [["__scopeId", "data-v-d0c9d835"]]), hr = {
  key: 0,
  "data-dev-inspector": "",
  class: "di-loading-overlay"
}, yr = { class: "di-highlight-label" }, br = ["onClick"], gr = {
  key: 0,
  class: "di-note-label-row"
}, kr = ["onClick"], xr = {
  "data-dev-inspector": "",
  class: "di-scan-banner"
}, $r = ["onClick"], wr = { class: "di-analysis-type" }, Cr = {
  key: 0,
  class: "di-analysis-tags"
}, _r = {
  key: 1,
  class: "di-analysis-db"
}, Ir = {
  key: 2,
  class: "di-analysis-api-source"
}, Tr = {
  key: 3,
  class: "di-analysis-conditional"
}, Ur = ["onClick"], Vr = {
  key: 0,
  class: "di-analysis-text"
}, Sr = {
  "data-dev-inspector": "",
  class: "di-analysis-banner"
}, Mr = ["onClick"], Er = {
  key: 0,
  class: "di-unannotated-label-text"
}, Dr = /* @__PURE__ */ wt({
  __name: "DevPickOverlay",
  setup(N) {
    const a = Ct(), I = h(null), U = h(null), K = h(0), J = h(0), ne = {
      db_direct: "#3b82f6",
      db_formatted: "#8b5cf6",
      calculated: "#f59e0b",
      static: "#10b981",
      other: "#94a3b8"
    }, ae = {
      action: "#a78bfa",
      form: "#ec4899"
    };
    function pe(H) {
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
    function L(H) {
      var p, V;
      const _ = a.getElementConfig(H);
      if (_ != null && _.elementType && ae[_.elementType])
        return ae[_.elementType];
      if ((p = _ == null ? void 0 : _.note) != null && p.displayType)
        return ne[_.note.displayType] || "#60a5fa";
      if (!(_ != null && _.sourceBinding)) {
        const X = ((V = _ == null ? void 0 : _.note) == null ? void 0 : V.type) || "info";
        return {
          info: "#60a5fa",
          warning: "#fbbf24",
          todo: "#10b981",
          question: "#a78bfa"
        }[X] || "#60a5fa";
      }
      return _.sourceBinding.isStatic ? "#10b981" : _.sourceBinding.type === "v-model" ? "#8b5cf6" : _.sourceBinding.type === "api" ? "#f59e0b" : "#60a5fa";
    }
    function G(H) {
      var Z, oe, fe, te, Ce;
      const _ = a.noteHighlightFilter;
      if (_ === "all") return !0;
      const p = a.getElementConfig(H);
      if (!p) return !1;
      const V = (Z = p.note) == null ? void 0 : Z.displayType, X = !!((oe = p.note) != null && oe.condition || (fe = p.note) != null && fe.conditionColumn), P = !!((te = p.note) != null && te.storedCalc);
      switch (_) {
        case "db":
          return V === "db_direct" || V === "db_formatted";
        case "calculated":
          return V === "calculated";
        case "storedCalc":
          return P;
        case "static":
          return V === "static";
        case "conditional":
          return X;
        case "action":
          return p.elementType === "action";
        case "form":
          return p.elementType === "form";
        case "other":
          return V === "other" || !V && !p.elementType && !!((Ce = p.note) != null && Ce.text);
        default:
          return !0;
      }
    }
    const se = z(() => {
      var X, P, Z, oe, fe, te, Ce, Ve, A, y, T, le, q, Y, ke, ge, re, xe, He, B, de, W, ee, Q, $e, F, he, ue, Ne, We, Ke, et, tt, lt, Ee, st, Le, qe, ct, ot, Re, nt, ze, it, De, ye, Be;
      const H = K.value, _ = J.value, p = [];
      if (!a.isEnabled) return p;
      const V = a.getConfiguredSelectors();
      for (const Ae of V)
        try {
          const Je = document.querySelector(Ae);
          if (Je) {
            const vt = Je.getBoundingClientRect(), d = a.getElementConfig(Ae), mt = ((X = d == null ? void 0 : d.sourceBinding) == null ? void 0 : X.isStatic) || !1, r = ((P = d == null ? void 0 : d.sourceBinding) == null ? void 0 : P.type) || "";
            let l = "", o = "";
            const w = (Z = d == null ? void 0 : d.note) == null ? void 0 : Z.displayType, g = [];
            if ((oe = d == null ? void 0 : d.note) != null && oe.sampleValue ? g.push(`例: ${d.note.sampleValue}${d.note.unit ? d.note.unit : ""}`) : (fe = d == null ? void 0 : d.note) != null && fe.unit && g.push(`単位: ${d.note.unit}`), (te = d == null ? void 0 : d.note) != null && te.decimalHandling) {
              const M = { round: "四捨五入", floor: "切り捨て", ceil: "切り上げ", decimal_1: "小数第1位", decimal_2: "小数第2位", integer: "整数" };
              g.push(M[d.note.decimalHandling] || d.note.decimalHandling);
            }
            (Ce = d == null ? void 0 : d.note) != null && Ce.nullDisplay && g.push(`NULL時: ${d.note.nullDisplay}`), (Ve = d == null ? void 0 : d.note) != null && Ve.displayFormat && g.push(d.note.displayFormat);
            const we = g.length > 0 ? `
${g.join(" / ")}` : "", Ge = !!((A = d == null ? void 0 : d.note) != null && A.condition || (y = d == null ? void 0 : d.note) != null && y.conditionColumn);
            let at = "";
            if (Ge) {
              const M = { hidden: "非表示", disabled: "無効化", different_value: "別の値", empty: "空欄" }, Se = [];
              (T = d == null ? void 0 : d.note) != null && T.condition && Se.push(d.note.condition), (le = d == null ? void 0 : d.note) != null && le.conditionColumn && Se.push(`判定: ${d.note.conditionColumn}`), (q = d == null ? void 0 : d.note) != null && q.hiddenBehavior && Se.push(`不一致時: ${M[d.note.hiddenBehavior] || d.note.hiddenBehavior}`), (Y = d == null ? void 0 : d.note) != null && Y.hiddenNote && Se.push(`→ ${d.note.hiddenNote}`), at = `
条件: ${Se.join(" / ")}`;
            }
            const rt = Ge ? " ⚡" : "";
            if ((d == null ? void 0 : d.elementType) === "action" && (d != null && d.actionInfo)) {
              const M = d.actionInfo;
              M.type === "navigate" ? l = `遷移: ${M.target || "?"}` : M.type === "api" ? l = `API: ${M.method || "GET"} ${M.target || "?"}` : M.type === "modal" ? l = `モーダル: ${M.target || "?"}` : M.type === "emit" ? l = `イベント: ${M.target || "?"}` : M.type === "function" ? l = `関数: ${M.target || "?"}` : l = "アクション", o = (M.description || l) + ((ke = d == null ? void 0 : d.note) != null && ke.text ? `
${d.note.text}` : "");
            } else if ((d == null ? void 0 : d.elementType) === "form" && (d != null && d.formInfo)) {
              const M = d.formInfo, Se = (ge = d == null ? void 0 : d.fieldInfoList) != null && ge.length ? d.fieldInfoList : d != null && d.fieldInfo ? [d.fieldInfo] : [], Fe = Se.length > 0 ? Se.map((bt) => `${bt.table}.${bt.column}`).join(", ") : "", Xe = Se.length > 0 ? `${Se[0].table}.${Se[0].column}` : "", Ze = Xe ? a.getMasterDefinition(Xe) : null;
              M.inputType === "select" ? l = `選択: ${Fe || M.description || "?"}${Ze ? ` (${Ze.entries.length}件)` : ""}` : M.inputType === "textarea" ? l = `テキスト: ${Fe || M.description || "?"}` : M.inputType === "checkbox" ? l = `チェック: ${Fe || M.description || "?"}` : M.inputType === "radio" ? l = `ラジオ: ${Fe || M.description || "?"}` : l = `入力: ${Fe || M.description || M.inputType || "?"}`, M.required && (l += " (必須)");
              const ce = [];
              M.description && ce.push(M.description), (re = M.validation) != null && re.length && ce.push(`検証: ${M.validation.join(", ")}`), M.placeholder && ce.push(`placeholder: ${M.placeholder}`), M.defaultValue && ce.push(`初期値: ${M.defaultValue}`), o = ce.join(`
`) + ((xe = d == null ? void 0 : d.note) != null && xe.text ? `
${d.note.text}` : "");
            } else if ((d == null ? void 0 : d.elementType) === "action")
              l = "アクション", o = ((He = d == null ? void 0 : d.note) == null ? void 0 : He.text) || "";
            else if ((d == null ? void 0 : d.elementType) === "form")
              l = "フォーム", o = ((B = d == null ? void 0 : d.note) == null ? void 0 : B.text) || "";
            else if (w === "db_direct") {
              const M = (de = d == null ? void 0 : d.fieldInfoList) != null && de.length ? d.fieldInfoList : d != null && d.fieldInfo ? [d.fieldInfo] : [];
              if (M.length > 0) {
                const Se = M.map((ce) => `${ce.table}.${ce.column}`).join(", "), Fe = `${M[0].table}.${M[0].column}`, Xe = a.getMasterDefinition(Fe), Ze = Xe ? ` (${Xe.entries.length}値)` : "";
                l = `DB: ${Se}${Ze}${rt}`, o = M.map((ce) => `${ce.table}.${ce.column}${ce.type ? ` (${ce.type})` : ""}`).join(`
`) + we + at + ((W = d == null ? void 0 : d.note) != null && W.text ? `
${d.note.text}` : "");
              }
            } else if (w === "db_formatted") {
              const M = (ee = d == null ? void 0 : d.fieldInfoList) != null && ee.length ? d.fieldInfoList : d != null && d.fieldInfo ? [d.fieldInfo] : [];
              if (M.length > 0) {
                const Se = M.map((ce) => `${ce.table}.${ce.column}`).join(", "), Fe = `${M[0].table}.${M[0].column}`, Xe = a.getMasterDefinition(Fe), Ze = Xe ? ` (${Xe.entries.length}値)` : "";
                l = `DB: ${Se} (整形)${Ze}${rt}`, o = M.map((ce) => `${ce.table}.${ce.column}`).join(`
`) + ((Q = d == null ? void 0 : d.note) != null && Q.formatDescription ? `
整形: ${d.note.formatDescription}` : "") + we + at + (($e = d == null ? void 0 : d.note) != null && $e.text ? `
${d.note.text}` : "");
              }
            } else w === "calculated" ? (l = "計算値" + ((F = d == null ? void 0 : d.note) != null && F.unit ? ` (${d.note.unit})` : "") + rt, o = (((he = d == null ? void 0 : d.note) == null ? void 0 : he.calcDescription) || "計算値") + ((Ne = (ue = d == null ? void 0 : d.note) == null ? void 0 : ue.calcSources) != null && Ne.length ? `
参照: ${d.note.calcSources.join(", ")}` : "") + we + at + ((We = d == null ? void 0 : d.note) != null && We.text ? `
${d.note.text}` : "")) : w === "static" ? (l = "固定" + rt, o = (((Ke = d == null ? void 0 : d.note) == null ? void 0 : Ke.text) || "固定文言") + at) : w === "other" ? (l = "メモ", o = ((et = d == null ? void 0 : d.note) == null ? void 0 : et.text) || "") : (tt = d == null ? void 0 : d.fieldInfoList) != null && tt.length || (lt = d == null ? void 0 : d.fieldInfo) != null && lt.table && ((Ee = d == null ? void 0 : d.fieldInfo) != null && Ee.column) ? (l = `DB: ${((st = d == null ? void 0 : d.fieldInfoList) != null && st.length ? d.fieldInfoList : d != null && d.fieldInfo ? [d.fieldInfo] : []).map((Fe) => `${Fe.table}.${Fe.column}`).join(", ")}`, o = ((Le = d == null ? void 0 : d.note) == null ? void 0 : Le.text) || "") : mt ? (l = "固定", o = ((qe = d == null ? void 0 : d.note) == null ? void 0 : qe.text) || "固定文言") : r === "v-model" ? (l = "フォーム", o = ((ct = d == null ? void 0 : d.note) == null ? void 0 : ct.text) || "") : r === "api" ? (l = "データ", o = ((ot = d == null ? void 0 : d.note) == null ? void 0 : ot.text) || "") : (Re = d == null ? void 0 : d.note) != null && Re.type ? (l = {
              info: "情報",
              warning: "注意",
              todo: "TODO",
              question: "質問"
            }[d.note.type] || "メモ", o = ((nt = d == null ? void 0 : d.note) == null ? void 0 : nt.text) || "") : (l = "メモ", o = ((ze = d == null ? void 0 : d.note) == null ? void 0 : ze.text) || "");
            const Pe = o || ((it = d == null ? void 0 : d.note) == null ? void 0 : it.text) || "", Ye = ((De = d == null ? void 0 : d.note) == null ? void 0 : De.type) || "info", dt = !!((ye = d == null ? void 0 : d.note) != null && ye.text || (Be = d == null ? void 0 : d.note) != null && Be.displayType);
            p.push({
              selector: Ae,
              top: `${vt.top + H}px`,
              left: `${vt.left + _}px`,
              width: `${vt.width}px`,
              height: `${vt.height}px`,
              color: L(Ae),
              isStatic: mt,
              label: l,
              noteText: Pe,
              noteType: Ye,
              hasNote: dt
            });
          }
        } catch {
        }
      return p;
    }), be = z(() => {
      var V;
      const H = K.value, _ = J.value, p = [];
      if (!a.isEnabled || a.scanResults.length === 0) return p;
      for (const X of a.scanResults)
        try {
          const P = document.querySelector(X.selector);
          if (P) {
            const Z = P.getBoundingClientRect();
            p.push({
              selector: X.selector,
              top: `${Z.top + H}px`,
              left: `${Z.left + _}px`,
              width: `${Z.width}px`,
              height: `${Z.height}px`,
              isStatic: ((V = X.detected.sourceBinding) == null ? void 0 : V.isStatic) || !1
            });
          }
        } catch {
        }
      return p;
    }), Te = z(() => {
      var X, P;
      const H = K.value, _ = J.value, p = [], V = a.analysisFilter;
      if (V === "none" || !a.isEnabled || a.analysisResults.length === 0) return p;
      for (const Z of a.analysisResults) {
        if (!Z.matched) continue;
        const oe = Z.element;
        try {
          const fe = document.querySelector(Z.selector);
          if (!fe) continue;
          const te = fe.getBoundingClientRect();
          if (te.width > window.innerWidth * 0.8 || te.height > window.innerHeight * 0.5)
            continue;
          const Ce = fe.querySelector("[data-di-binding]") || (fe.hasAttribute("data-di-binding") ? fe : null);
          let Ve = "", A = oe.binding || "";
          const y = [...oe.tags || []];
          if (Ce) {
            const Q = Ce.getAttribute("data-di-db"), $e = Ce.getAttribute("data-di-binding");
            Q && (Ve = Q, y.includes("db") || y.push("db")), $e && (A = $e);
          }
          !Ve && oe.db && (Ve = `${oe.db.table}.${oe.db.column}`, y.includes("db") || y.push("db"));
          let T = "";
          oe.api && (T = `${oe.api.method} ${oe.api.endpoint}`, y.includes("api") || y.push("api"));
          let le = "";
          if (A) {
            const Q = a.getApiSourceForBinding(A);
            Q && Q.endpoint ? le = `${Q.method || "GET"} ${Q.endpoint}` : Q && Q.composable && (le = Q.composable);
          }
          const q = (X = oe.conditional) == null ? void 0 : X.expression, Y = (P = oe.modal) == null ? void 0 : P.target, ke = !!Ve || y.includes("db"), ge = !!T || y.includes("api"), re = y.includes("form"), xe = y.includes("button"), He = y.includes("link"), B = y.includes("modal"), de = y.includes("conditional"), W = y.includes("computed");
          if (V === "db-api") {
            if (!ke && !ge) continue;
          } else if (V === "form") {
            if (!re) continue;
          } else if (V === "button") {
            if (!xe) continue;
          } else if (V === "link") {
            if (!He) continue;
          } else if (V === "modal") {
            if (!B) continue;
          } else if (V === "conditional") {
            if (!de) continue;
          } else if (V === "computed") {
            if (!W) continue;
          } else if (V === "other" && (ke || ge || re || xe || He || B || de || W))
            continue;
          let ee = "other";
          ke ? ee = "db" : ge ? ee = "api" : re ? ee = "form" : xe ? ee = "button" : He ? ee = "link" : B ? ee = "modal" : de ? ee = "conditional" : W && (ee = "computed"), p.push({
            selector: Z.selector,
            top: `${te.top + H}px`,
            left: `${te.left + _}px`,
            width: `${te.width}px`,
            height: `${te.height}px`,
            tags: y,
            primaryTag: ee,
            text: oe.text || A || "",
            dbInfo: Ve,
            apiInfo: T,
            apiSource: le,
            conditionalExpr: q,
            modalTarget: Y
          });
        } catch {
        }
      }
      return p;
    }), ie = z(() => {
      const H = K.value, _ = J.value, p = [];
      if (!a.isEnabled || !a.showUnannotatedDetection || a.unannotatedElements.length === 0) return p;
      for (const V of a.unannotatedElements)
        try {
          const X = document.querySelector(V.selector);
          if (!X) continue;
          const P = X.getBoundingClientRect();
          p.push({
            selector: V.selector,
            top: `${P.top + H}px`,
            left: `${P.left + _}px`,
            width: `${P.width}px`,
            height: `${P.height}px`,
            category: V.category,
            text: V.text
          });
        } catch {
        }
      return p;
    });
    function S(H) {
      if (!a.isPickMode) return;
      if (H.target.closest("[data-dev-inspector]")) {
        I.value = null, U.value = null, a.setHoveredSelector(null);
        return;
      }
      const p = document.elementFromPoint(H.clientX, H.clientY);
      if (!p || p === document.body || p === document.documentElement) {
        I.value = null, U.value = null, a.setHoveredSelector(null);
        return;
      }
      if (p.closest("[data-dev-inspector]"))
        return;
      U.value = p;
      const V = p.getBoundingClientRect();
      I.value = {
        top: `${V.top + window.scrollY}px`,
        left: `${V.left + window.scrollX}px`,
        width: `${V.width}px`,
        height: `${V.height}px`
      };
      const X = a.generateSelector(p);
      a.setHoveredSelector(X);
    }
    function Ue(H) {
      if (!(!a.isPickMode || H.target.closest("[data-dev-inspector]")) && (H.preventDefault(), H.stopPropagation(), U.value)) {
        const p = a.generateSelector(U.value);
        if (a.remapTargetId) {
          a.remapAnnotation(a.remapTargetId, p), a.remapTargetId = null, a.togglePickMode(), a.openPanel();
          return;
        }
        a.startEditing(p), a.togglePickMode();
      }
    }
    function je(H) {
      H.key === "Escape" && a.isPickMode && (a.remapTargetId = null, a.togglePickMode());
    }
    function me() {
      K.value = window.scrollY, J.value = window.scrollX;
    }
    return Zt(() => {
      window.addEventListener("mousemove", S, !0), window.addEventListener("click", Ue, !0), window.addEventListener("keydown", je), window.addEventListener("scroll", me), window.addEventListener("resize", me);
    }), Vl(() => {
      window.removeEventListener("mousemove", S, !0), window.removeEventListener("click", Ue, !0), window.removeEventListener("keydown", je), window.removeEventListener("scroll", me), window.removeEventListener("resize", me);
    }), $t(() => a.isPickMode, (H) => {
      H || (I.value = null, U.value = null);
    }), (H, _) => (n(), Me(ut, { to: "body" }, [
      u(a).isInitializing ? (n(), i("div", hr, [..._[1] || (_[1] = [
        e("div", { class: "di-loading-content" }, [
          e("div", { class: "di-loading-spinner" }),
          e("span", { class: "di-loading-text" }, "Developer Mode 起動中...")
        ], -1)
      ])])) : c("", !0),
      u(a).isPickMode && I.value ? (n(), i("div", {
        key: 1,
        "data-dev-inspector": "",
        class: "di-highlight",
        style: Oe({
          top: I.value.top,
          left: I.value.left,
          width: I.value.width,
          height: I.value.height
        })
      }, [
        e("div", yr, v(u(a).hoveredSelector), 1)
      ], 4)) : c("", !0),
      u(a).isPickMode ? (n(), i("div", {
        key: 2,
        "data-dev-inspector": "",
        class: "di-pick-banner",
        style: Oe(u(a).remapTargetId ? { background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)" } : {})
      }, [
        e("span", null, v(u(a).remapTargetId ? "新しい要素をクリックして再設定" : "要素をクリックしてメモを追加"), 1),
        _[2] || (_[2] = e("kbd", null, "ESC", -1)),
        _[3] || (_[3] = e("span", { class: "di-pick-hint" }, "でキャンセル", -1))
      ], 4)) : c("", !0),
      u(a).isEnabled && !u(a).isPickMode && !u(a).editingElementId ? (n(!0), i(C, { key: 3 }, E(se.value, (p) => f((n(), i("div", {
        key: p.selector,
        "data-dev-inspector": "",
        class: R(p.hasNote ? "di-note-highlight" : "di-annotation-box"),
        style: Oe({
          top: p.top,
          left: p.left,
          width: p.width,
          height: p.height,
          borderColor: (p.hasNote, p.color),
          backgroundColor: p.color + (p.hasNote ? "18" : "15")
        }),
        onClick: (V) => u(a).startEditing(p.selector)
      }, [
        p.hasNote ? (n(), i("div", gr, [
          e("span", {
            class: "di-note-indicator",
            style: Oe({ backgroundColor: p.color })
          }, null, 4),
          e("div", {
            class: "di-annotation-label",
            style: Oe({ backgroundColor: p.color })
          }, v(p.label), 5)
        ])) : (n(), i("div", {
          key: 1,
          class: "di-annotation-label",
          style: Oe({ backgroundColor: p.color })
        }, v(p.label), 5))
      ], 14, br)), [
        [ht, !p.hasNote || u(a).showNoteHighlights && G(p.selector)]
      ])), 128)) : c("", !0),
      u(a).isEnabled && !u(a).editingElementId && be.value.length > 0 && u(a).analysisResults.length === 0 ? (n(), i(C, { key: 4 }, [
        (n(!0), i(C, null, E(be.value, (p) => (n(), i("div", {
          key: "scan-" + p.selector,
          "data-dev-inspector": "",
          class: R(["di-scan-highlight", { "di-scan-static": p.isStatic }]),
          style: Oe({
            top: p.top,
            left: p.left,
            width: p.width,
            height: p.height
          }),
          onClick: (V) => u(a).startEditing(p.selector)
        }, [
          e("div", {
            class: R(["di-scan-label", { "di-scan-label-static": p.isStatic }])
          }, v(p.isStatic ? "固定文言" : "動的データ"), 3)
        ], 14, kr))), 128)),
        e("div", xr, [
          e("span", null, v(be.value.length) + "件の要素を検出", 1),
          e("button", {
            onClick: _[0] || (_[0] = (p) => u(a).clearScanResults()),
            class: "di-scan-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : c("", !0),
      u(a).isEnabled && !u(a).editingElementId && Te.value.length > 0 ? (n(), i(C, { key: 5 }, [
        (n(!0), i(C, null, E(Te.value, (p) => (n(), i("div", {
          key: "analysis-" + p.selector,
          "data-dev-inspector": "",
          class: R(["di-analysis-highlight", "di-analysis-" + p.primaryTag]),
          style: Oe({
            top: p.top,
            left: p.left,
            width: p.width,
            height: p.height
          }),
          onClick: (V) => u(a).startEditing(p.selector)
        }, [
          e("div", {
            class: R(["di-analysis-label", "di-analysis-label-" + p.primaryTag])
          }, [
            e("span", wr, v(pe(p.primaryTag)), 1),
            p.tags.length > 1 ? (n(), i("span", Cr, "+" + v(p.tags.length - 1), 1)) : c("", !0),
            p.dbInfo ? (n(), i("span", _r, v(p.dbInfo), 1)) : c("", !0),
            p.apiSource ? (n(), i("span", Ir, "← " + v(p.apiSource), 1)) : c("", !0),
            p.conditionalExpr ? (n(), i("span", Tr, v(p.conditionalExpr), 1)) : c("", !0),
            e("button", {
              class: "di-analysis-delete",
              onClick: ve((V) => u(a).removeAnalysisResult(p.selector), ["stop"]),
              title: "この要素を非表示"
            }, "×", 8, Ur)
          ], 2),
          p.text && p.text.length < 30 ? (n(), i("div", Vr, v(p.text), 1)) : c("", !0)
        ], 14, $r))), 128)),
        e("div", Sr, [
          e("span", null, "📊 分析データ: " + v(Te.value.length) + "件の要素", 1)
        ])
      ], 64)) : c("", !0),
      u(a).isEnabled && !u(a).isPickMode && !u(a).editingElementId && ie.value.length > 0 ? (n(!0), i(C, { key: 6 }, E(ie.value, (p) => (n(), i("div", {
        key: "unannotated-" + p.selector,
        "data-dev-inspector": "",
        class: R(["di-unannotated-highlight", {
          "di-unannotated-hovered": u(a).hoveredUnannotatedSelector === p.selector,
          ["di-unannotated-hovered-" + p.category]: u(a).hoveredUnannotatedSelector === p.selector
        }]),
        style: Oe({
          top: p.top,
          left: p.left,
          width: p.width,
          height: p.height
        }),
        onClick: (V) => u(a).quickAnnotate(p.selector, p.category === "form" ? "form" : p.category === "action" ? "action" : "datasource")
      }, [
        e("div", {
          class: R(["di-unannotated-label", { ["di-unannotated-label-" + p.category]: u(a).hoveredUnannotatedSelector === p.selector }])
        }, [
          e("span", null, v(p.category === "binding" ? "DB" : p.category === "form" ? "Form" : "Act"), 1),
          p.text ? (n(), i("span", Er, v(p.text), 1)) : c("", !0)
        ], 2)
      ], 14, Mr))), 128)) : c("", !0)
    ]));
  }
}), Pr = /* @__PURE__ */ Ut(Dr, [["__scopeId", "data-v-03d274cc"]]), Lr = { class: "di-editor-modal" }, Br = { class: "di-editor-header" }, Ar = { class: "di-header-actions" }, Fr = { class: "di-path-badge" }, Or = { class: "di-editor-content" }, jr = { class: "di-form-group" }, Nr = { class: "di-form-group" }, Hr = { class: "di-form-section" }, qr = { class: "di-form-section-header" }, Rr = { class: "di-api-header-actions" }, zr = { class: "di-dropdown-wrapper" }, Yr = {
  key: 1,
  class: "di-suggestion-dropdown"
}, Kr = {
  key: 0,
  class: "di-suggestion-actions"
}, Gr = ["onMousedown", "disabled"], Xr = { class: "di-suggestion-endpoint" }, Jr = {
  key: 0,
  class: "di-suggestion-timing"
}, Zr = {
  key: 1,
  class: "di-suggestion-empty"
}, Qr = {
  key: 0,
  class: "di-suggestion-banner"
}, Wr = {
  key: 1,
  class: "di-suggestion-banner di-suggestion-banner-empty"
}, ec = {
  key: 2,
  class: "di-empty-hint"
}, tc = { class: "di-api-entry-row" }, lc = ["onUpdate:modelValue"], sc = ["value"], oc = ["onUpdate:modelValue"], nc = ["onClick"], ic = { class: "di-api-entry-row2" }, ac = ["onUpdate:modelValue"], dc = ["onUpdate:modelValue"], uc = ["value"], rc = { class: "di-form-section" }, cc = { class: "di-auth-row" }, vc = {
  key: 0,
  class: "di-auth-details"
}, pc = { class: "di-form-group" }, mc = { class: "di-form-group" }, fc = { class: "di-form-group" }, hc = { class: "di-form-group" }, yc = { class: "di-editor-footer" }, bc = { class: "di-editor-actions" }, gc = ["disabled"], kc = /* @__PURE__ */ wt({
  __name: "DevScreenEditor",
  setup(N) {
    const a = Ct(), I = h(""), U = h(""), K = h([]), J = h(!1), ne = h(""), ae = h(""), pe = h(""), L = h(""), G = h(!1), se = h([]), be = h(!1), Te = z(() => typeof window < "u" ? window.location.pathname : "/");
    $t(() => a.editingScreen, (A) => {
      A && ie();
    });
    function ie() {
      var y, T, le, q;
      const A = a.getScreenConfig();
      A ? (I.value = A.name, U.value = A.description || "", K.value = A.apis.map((Y) => ({ ...Y })), J.value = ((y = A.auth) == null ? void 0 : y.required) || !1, ne.value = ((le = (T = A.auth) == null ? void 0 : T.roles) == null ? void 0 : le.join(", ")) || "", ae.value = ((q = A.auth) == null ? void 0 : q.description) || "", pe.value = A.figmaUrl || "", L.value = A.notes || "") : S();
    }
    function S() {
      I.value = "", U.value = "", K.value = [], J.value = !1, ne.value = "", ae.value = "", pe.value = "", L.value = "";
    }
    function Ue() {
      a.editingScreen = !1, S();
    }
    function je() {
      K.value.push({
        method: "GET",
        endpoint: "",
        description: "",
        loadTiming: "onMount"
      });
    }
    function me(A) {
      K.value.splice(A, 1);
    }
    function H() {
      if (!I.value.trim()) return;
      const A = {
        path: Te.value,
        name: I.value.trim(),
        description: U.value.trim() || void 0,
        apis: K.value.filter((y) => y.endpoint.trim()),
        auth: J.value || ne.value.trim() ? {
          required: J.value,
          roles: ne.value.trim() ? ne.value.split(",").map((y) => y.trim()).filter(Boolean) : void 0,
          description: ae.value.trim() || void 0
        } : void 0,
        figmaUrl: pe.value.trim() || void 0,
        notes: L.value.trim() || void 0,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      a.setScreenConfig(A), Ue();
    }
    function _() {
      a.deleteScreenConfig(Te.value), Ue();
    }
    const p = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, V = {
      onMount: "読込時",
      action: "アクション",
      conditional: "条件付き"
    };
    function X() {
      se.value = a.suggestScreenApis(), G.value = !0;
    }
    function P(A) {
      return K.value.some(
        (y) => y.method === A.method && y.endpoint === A.endpoint
      );
    }
    const Z = z(() => se.value.filter((A) => !P(A)));
    function oe(A) {
      P(A) || K.value.push({ ...A });
    }
    function fe() {
      for (const A of Z.value)
        K.value.push({ ...A });
    }
    function te() {
      setTimeout(() => {
        be.value = !1;
      }, 150);
    }
    const Ce = ["GET", "POST", "PUT", "DELETE", "PATCH"], Ve = [
      { value: "onMount", label: "画面読込時" },
      { value: "action", label: "アクション時" },
      { value: "conditional", label: "条件付き" }
    ];
    return (A, y) => (n(), Me(ut, { to: "body" }, [
      u(a).editingScreen ? (n(), i("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: ve(Ue, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", Lr, [
          e("div", Br, [
            y[9] || (y[9] = e("h3", null, "画面情報を編集", -1)),
            e("div", Ar, [
              e("span", Fr, v(Te.value), 1),
              e("button", {
                onClick: Ue,
                class: "di-editor-close"
              }, [
                $(u(Qe), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          e("div", Or, [
            e("div", jr, [
              y[10] || (y[10] = e("label", { class: "di-form-label" }, "画面名 *", -1)),
              f(e("input", {
                "onUpdate:modelValue": y[0] || (y[0] = (T) => I.value = T),
                type: "text",
                placeholder: "ユーザー詳細",
                class: "di-input"
              }, null, 512), [
                [k, I.value]
              ])
            ]),
            e("div", Nr, [
              y[11] || (y[11] = e("label", { class: "di-form-label" }, "画面の説明", -1)),
              f(e("textarea", {
                "onUpdate:modelValue": y[1] || (y[1] = (T) => U.value = T),
                rows: "2",
                placeholder: "この画面の概要...",
                class: "di-textarea"
              }, null, 512), [
                [k, U.value]
              ])
            ]),
            e("div", Hr, [
              e("div", qr, [
                y[15] || (y[15] = e("label", { class: "di-form-label" }, "API一覧", -1)),
                e("div", Rr, [
                  e("button", {
                    onClick: X,
                    class: "di-btn-suggest",
                    title: "要素情報からAPI推定"
                  }, [
                    $(u(Tt), { style: { width: "13px", height: "13px" } }),
                    y[12] || (y[12] = D(" 自動推定 ", -1))
                  ]),
                  e("div", zr, [
                    se.value.length > 0 ? (n(), i("button", {
                      key: 0,
                      onClick: y[2] || (y[2] = (T) => be.value = !be.value),
                      onBlur: y[3] || (y[3] = (T) => te()),
                      class: "di-btn-dropdown",
                      title: "推定結果から選択"
                    }, [
                      $(u(Qt), { style: { width: "13px", height: "13px" } }),
                      y[13] || (y[13] = D(" 候補から選択 ", -1))
                    ], 32)) : c("", !0),
                    be.value && se.value.length > 0 ? (n(), i("div", Yr, [
                      Z.value.length > 0 ? (n(), i("div", Kr, [
                        e("button", {
                          onMousedown: ve(fe, ["prevent"]),
                          class: "di-suggestion-add-all"
                        }, " すべて追加 (" + v(Z.value.length) + ") ", 33)
                      ])) : c("", !0),
                      (n(!0), i(C, null, E(se.value, (T, le) => (n(), i("button", {
                        key: le,
                        onMousedown: ve((q) => oe(T), ["prevent"]),
                        class: R(["di-suggestion-item", { "di-suggestion-added": P(T) }]),
                        disabled: P(T)
                      }, [
                        e("span", {
                          class: "di-suggestion-method",
                          style: Oe({ backgroundColor: p[T.method] + "20", color: p[T.method] })
                        }, v(T.method), 5),
                        e("code", Xr, v(T.endpoint), 1),
                        T.loadTiming ? (n(), i("span", Jr, v(V[T.loadTiming] || T.loadTiming), 1)) : c("", !0),
                        P(T) ? (n(), Me(u(Dl), {
                          key: 1,
                          style: { width: "12px", height: "12px", color: "#10b981", "flex-shrink": "0" }
                        })) : c("", !0)
                      ], 42, Gr))), 128)),
                      se.value.length === 0 ? (n(), i("div", Zr, " 推定結果がありません ")) : c("", !0)
                    ])) : c("", !0)
                  ]),
                  e("button", {
                    onClick: je,
                    class: "di-btn-add"
                  }, [
                    $(u(yt), { style: { width: "14px", height: "14px" } }),
                    y[14] || (y[14] = D(" 手動追加 ", -1))
                  ])
                ])
              ]),
              G.value && se.value.length > 0 && Z.value.length > 0 ? (n(), i("div", Qr, [
                $(u(Tt), { style: { width: "13px", height: "13px", color: "#f59e0b", "flex-shrink": "0" } }),
                e("span", null, v(se.value.length) + "件のAPIを推定しました", 1),
                e("button", {
                  onMousedown: ve(fe, ["prevent"]),
                  class: "di-suggestion-banner-btn"
                }, "すべて追加", 32)
              ])) : G.value && se.value.length === 0 ? (n(), i("div", Wr, [...y[16] || (y[16] = [
                e("span", null, "要素のDB情報からAPIを推定できませんでした。要素にDB情報を登録してください。", -1)
              ])])) : c("", !0),
              K.value.length === 0 && !G.value ? (n(), i("div", ec, " APIが未登録です。「自動推定」で要素情報からAPIを推定できます。 ")) : c("", !0),
              (n(!0), i(C, null, E(K.value, (T, le) => (n(), i("div", {
                key: le,
                class: "di-api-entry"
              }, [
                e("div", tc, [
                  f(e("select", {
                    "onUpdate:modelValue": (q) => T.method = q,
                    class: "di-select di-select-method"
                  }, [
                    (n(), i(C, null, E(Ce, (q) => e("option", {
                      key: q,
                      value: q
                    }, v(q), 9, sc)), 64))
                  ], 8, lc), [
                    [Ie, T.method]
                  ]),
                  f(e("input", {
                    "onUpdate:modelValue": (q) => T.endpoint = q,
                    type: "text",
                    placeholder: "/api/users/:id",
                    class: "di-input di-input-endpoint"
                  }, null, 8, oc), [
                    [k, T.endpoint]
                  ]),
                  e("button", {
                    onClick: (q) => me(le),
                    class: "di-btn-remove"
                  }, [
                    $(u(zl), { style: { width: "14px", height: "14px" } })
                  ], 8, nc)
                ]),
                e("div", ic, [
                  f(e("input", {
                    "onUpdate:modelValue": (q) => T.description = q,
                    type: "text",
                    placeholder: "説明（任意）",
                    class: "di-input di-input-desc"
                  }, null, 8, ac), [
                    [k, T.description]
                  ]),
                  f(e("select", {
                    "onUpdate:modelValue": (q) => T.loadTiming = q,
                    class: "di-select di-select-timing"
                  }, [
                    (n(), i(C, null, E(Ve, (q) => e("option", {
                      key: q.value,
                      value: q.value
                    }, v(q.label), 9, uc)), 64))
                  ], 8, dc), [
                    [Ie, T.loadTiming]
                  ])
                ])
              ]))), 128))
            ]),
            e("div", rc, [
              y[20] || (y[20] = e("label", { class: "di-form-label" }, "認証設定", -1)),
              e("div", cc, [
                e("button", {
                  onClick: y[4] || (y[4] = (T) => J.value = !J.value),
                  class: R(["di-toggle-btn", { active: J.value }])
                }, [
                  e("span", {
                    class: R(["di-toggle-knob", { active: J.value }])
                  }, null, 2)
                ], 2),
                y[17] || (y[17] = e("span", { class: "di-auth-label" }, "ログイン必須", -1))
              ]),
              J.value ? (n(), i("div", vc, [
                e("div", pc, [
                  y[18] || (y[18] = e("label", { class: "di-form-label" }, "必要ロール（カンマ区切り）", -1)),
                  f(e("input", {
                    "onUpdate:modelValue": y[5] || (y[5] = (T) => ne.value = T),
                    type: "text",
                    placeholder: "admin, manager",
                    class: "di-input"
                  }, null, 512), [
                    [k, ne.value]
                  ])
                ]),
                e("div", mc, [
                  y[19] || (y[19] = e("label", { class: "di-form-label" }, "認証メモ", -1)),
                  f(e("input", {
                    "onUpdate:modelValue": y[6] || (y[6] = (T) => ae.value = T),
                    type: "text",
                    placeholder: "自分のデータのみ閲覧可",
                    class: "di-input"
                  }, null, 512), [
                    [k, ae.value]
                  ])
                ])
              ])) : c("", !0)
            ]),
            e("div", fc, [
              y[21] || (y[21] = e("label", { class: "di-form-label" }, "Figma URL", -1)),
              f(e("input", {
                "onUpdate:modelValue": y[7] || (y[7] = (T) => pe.value = T),
                type: "text",
                placeholder: "https://www.figma.com/design/...",
                class: "di-input"
              }, null, 512), [
                [k, pe.value]
              ])
            ]),
            e("div", hc, [
              y[22] || (y[22] = e("label", { class: "di-form-label" }, "メモ", -1)),
              f(e("textarea", {
                "onUpdate:modelValue": y[8] || (y[8] = (T) => L.value = T),
                rows: "3",
                placeholder: "この画面に関するメモ...",
                class: "di-textarea"
              }, null, 512), [
                [k, L.value]
              ])
            ])
          ]),
          e("div", yc, [
            e("button", {
              onClick: _,
              class: "di-btn-delete"
            }, [
              $(u(xt), { style: { width: "14px", height: "14px" } }),
              y[23] || (y[23] = D(" 削除 ", -1))
            ]),
            e("div", bc, [
              e("button", {
                onClick: Ue,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: H,
                class: "di-btn-save",
                disabled: !I.value.trim()
              }, [
                $(u(el), { style: { width: "14px", height: "14px" } }),
                y[24] || (y[24] = D(" 保存 ", -1))
              ], 8, gc)
            ])
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), xc = /* @__PURE__ */ Ut(kc, [["__scopeId", "data-v-a3b58e7a"]]), $c = {
  key: 0,
  "data-dev-inspector": ""
}, wc = /* @__PURE__ */ wt({
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
    const a = N, I = Ct();
    return Zt(() => {
      I.init({
        storageKey: a.storageKey,
        enabledInProduction: a.enabledInProduction,
        initialAnnotations: a.initialAnnotations
      });
    }), (U, K) => u(I).isAvailable ? (n(), i("div", $c, [
      $(ea),
      $(fr),
      $(xc),
      $(Pr)
    ])) : c("", !0);
  }
}), Ic = {
  install(N, a = {}) {
    const { autoRegister: I = !0, ...U } = a;
    I && N.component("DevInspector", wc), N.provide("devInspectorOptions", U);
  }
};
export {
  fr as DevElementEditor,
  wc as DevInspector,
  ea as DevPanel,
  Pr as DevPickOverlay,
  xc as DevScreenEditor,
  Ic as VueDevInspector,
  Ic as default,
  Vc as useDevInspector,
  Ct as useDevInspectorStore,
  Mc as vitePluginDevInspector
};
