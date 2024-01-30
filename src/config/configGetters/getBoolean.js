"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
exports.getBoolean = void 0
var getBoolean = function (target, key) {
  var value = target[key]
  try {
    if (value === "true" || value === true) return true
    if (value === "false" || value === false) return false
    throw new Error()
  } catch (_a) {
    throw new Error('Config value for "'.concat(key, '" is not a boolean: "').concat(value, '"'))
  }
}
exports.getBoolean = getBoolean

// //getBoolean.ts

// export const getBoolean = (
//   target: Record<string, unknown>,
//   key: string,
// ): boolean => {
//   const value = target[key];

//   try {
//     if (value === 'true' || value === true) return true;
//     if (value === 'false' || value === false) return false;

//     throw new Error();
//   } catch {
//     throw new Error(`Config value for "${key}" is not a boolean: "${value}"`);
//   }
// };

// TODO вариант файла на js - верно?
// getBoolean.js

// import PropTypes from "prop-types"

// export const getBoolean = (target, key) => {
//   const value = target[key]

//   try {
//     if (value === "true" || value === true) return true
//     if (value === "false" || value === false) return false

//     throw new Error()
//   } catch {
//     throw new Error(`Config value for "${key}" is not a boolean: "${value}"`)
//   }
// }

// // TODO boolean: PropTypes.boolean - ?
// getBoolean.propTypes = {
//   target: import.meta.env,
//   key: PropTypes.string,
// }
