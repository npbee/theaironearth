var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_eddbeae8 = require("../../chunks/index-eddbeae8.js");
var app = "";
const _layout = (0, import_index_eddbeae8.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<meta name="${"viewport"}" content="${"initial-scale=1.0, width=device-width"}" key="${"viewport"}" data-svelte="svelte-f9dxit">`, ""}

<main>${slots.default ? slots.default({}) : ``}</main>`;
});
