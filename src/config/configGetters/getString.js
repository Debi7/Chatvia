"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
exports.getString = void 0
var getString = function (target, key) {
  var strValue = target[key]
  try {
    if (typeof strValue === "string") return strValue
    throw new Error()
  } catch (_a) {
    throw new Error('Config value for "'.concat(key, '" is not a string: "').concat(strValue, '"'))
  }
}
exports.getString = getString

// // getString.ts

// export const getString = (
//   target: Record<string, unknown>,
//   key: string,
// ): string => {
//   const strValue = target[key];

//   try {
//     if (typeof strValue === 'string') return strValue;

//     throw new Error();
//   } catch {
//     throw new Error(`Config value for "${key}" is not a string: "${strValue}"`);
//   }
// };

// getString.js
// import PropTypes from "prop-types"

// export const getString = (target, key) => {
//   const strValue = target[key]

//   try {
//     if (typeof strValue === "string") return strValue

//     throw new Error()
//   } catch {
//     throw new Error(`Config value for "${key}" is not a string: "${strValue}"`)
//   }
// }

// getString.propTypes = {
//   target: import.meta.env,
//   key: PropTypes.string,
// }
