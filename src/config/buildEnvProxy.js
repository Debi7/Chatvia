"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
exports.buildEnvProxy = void 0
var buildEnvProxy = function (source, transformKey) {
  return new Proxy(
    {},
    {
      get: function (_, key) {
        var keyStr = String(key)
        var envKey = transformKey ? transformKey(keyStr) : keyStr
        return source[envKey]
      },
    },
  )
}
exports.buildEnvProxy = buildEnvProxy

// buildEnvProxy.js

// export const buildEnvProxy = <T extends Record<string, unknown>>(
//   source: T,
//   transformKey: (key: string) => string,
// ) =>
//   new Proxy({} as T, {
//     get(_, key) {
//       const keyStr = String(key);
//       const envKey = transformKey ? transformKey(keyStr) : keyStr;

//       return source[envKey];
//     },
//   });

// TODO верно?
//  вариант js-файла
// buildEnvProxy.js
// import PropTypes from "prop-types"

// export const buildEnvProxy = (source, transformKey) => {
//   new Proxy(
//     { source },
//     {
//       get(_, key) {
//         const keyStr = String(key)
//         const envKey = transformKey ? transformKey(keyStr) : keyStr

//         return source[envKey]
//       },
//     },
//   )
// }

// buildEnvProxy.propTypes = {
//   source: import.meta.env,
//   transformKey: PropTypes.func,
//   key: PropTypes.string,
// }
