// // config.gettersMap.ts

// import type { Config } from './config.types.ts';

// import { getString } from './configGetters/getString.ts';
// import { getNumber } from './configGetters/getNumber.ts';
// import { getBoolean } from './configGetters/getBoolean.ts';

// export const CONFIG_GETTERS_MAP: {
//   [K in keyof Config]: (target: Record<string, unknown>, key: K) => Config[K];
// } = {
//   APP_TITLE: getString,
//   APP_VERSION: getNumber,
//   SHOW_VERSION: getBoolean,
//   COMMENTED_REQUIRED_VALUE: getString
// };

// config.gettersMap.js

// TODO файл config.types.js НЕ создался
// import type { Config } from './config.types.js';

"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
exports.CONFIG_GETTERS_MAP = void 0
var getString_js_1 = require("./configGetters/getString.js")
var getNumber_js_1 = require("./configGetters/getNumber.js")
var getBoolean_js_1 = require("./configGetters/getBoolean.js")
exports.CONFIG_GETTERS_MAP = {
  APP_TITLE: getString_js_1.getString,
  APP_VERSION: getNumber_js_1.getNumber,
  SHOW_VERSION: getBoolean_js_1.getBoolean,
  COMMENTED_REQUIRED_VALUE: getString_js_1.getString,
}
