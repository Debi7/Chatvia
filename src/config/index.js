// index.js
// import { buildEnvProxy } from "./buildEnvProxy.js"
// const ENV = buildEnvProxy(import.meta.env, (key) => `VITE_${key}`)

// import { buildEnvProxy } from './buildEnvProxy.ts';
// import { buildConfigProxy } from './buildConfigProxy.ts';
// import { CONFIG_GETTERS_MAP } from './config.gettersMap.ts';

// import type { Config } from './config.types.ts';

// const ENV = buildEnvProxy<Record<string, unknown>>(
//   import.meta.env,
//   (key) => `VITE_${key}`,
// );

// export const CONFIG = buildConfigProxy<Config>({
//   env: ENV,
//   envGettersMap: CONFIG_GETTERS_MAP,
// });

"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
var buildEnvProxy_js_1 = require("./buildEnvProxy.js")
var ENV = (0, buildEnvProxy_js_1.buildEnvProxy)(import.meta.env, function (key) {
  return "VITE_".concat(key)
})

Object.defineProperty(exports, "__esModule", { value: true })
exports.CONFIG = void 0
var buildEnvProxy_js_1 = require("./buildEnvProxy.js")
var buildConfigProxy_js_1 = require("./buildConfigProxy.js")
var config_gettersMap_js_1 = require("./config.gettersMap.js")
var ENV = (0, buildEnvProxy_js_1.buildEnvProxy)(import.meta.env, function (key) {
  return "VITE_".concat(key)
})
exports.CONFIG = (0, buildConfigProxy_js_1.buildConfigProxy)({
  env: ENV,
  envGettersMap: config_gettersMap_js_1.CONFIG_GETTERS_MAP,
})
