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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_eddbeae8 = require("../../chunks/index-eddbeae8.js");
const Routes = (0, import_index_eddbeae8.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>The Air on Earth</title>`, ""}<meta name="${"description"}" content="${"Ambient/pop/electronic music project based in San Francisco"}" data-svelte="svelte-1knmc60"><meta property="${"og:description"}" content="${"Ambient/pop/electronic music project based in San Francisco"}" data-svelte="svelte-1knmc60"><meta property="${"og:url"}" content="${"https://theaironearth.com"}" data-svelte="svelte-1knmc60"><meta name="${"twitter:description"}" content="${"Ambient/pop/electronic music project based in San Francisco"}" data-svelte="svelte-1knmc60">`, ""}

<h1 class="${"text-3xl"}">Welcome to SvelteKit</h1>
<p>Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to read the documentation</p>`;
});
