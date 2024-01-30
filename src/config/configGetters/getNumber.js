"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
exports.getNumber = void 0
var getNumber = function (target, key) {
  var value = target[key]
  try {
    var numValue = Number(value)
    if (isFinite(numValue) && !isNaN(numValue)) return numValue
    throw new Error()
  } catch (_a) {
    throw new Error('Config value for "'.concat(key, '" is not a number: "').concat(value, '"'))
  }
}
exports.getNumber = getNumber

// getNumber.ts

// export const getNumber = (
//   target: Record<string, unknown>,
//   key: string,
// ): number => {
//   const value = target[key];

//   try {
//     const numValue = Number(value);

//     if (isFinite(numValue) && !isNaN(numValue)) return numValue;

//     throw new Error();
//   } catch {
//     throw new Error(`Config value for "${key}" is not a number: "${value}"`);
//   }
// };

// getNumber.js
// import PropTypes from "prop-types"

// export const getNumber = (target, key) => {
//   const value = target[key]

//   try {
//     const numValue = Number(value)

//     if (isFinite(numValue) && !isNaN(numValue)) return numValue

//     throw new Error()
//   } catch {
//     throw new Error(`Config value for "${key}" is not a number: "${value}"`)
//   }
// }

// getNumber.propTypes = {
//   target: import.meta.env,
//   key: PropTypes.string,
// }
