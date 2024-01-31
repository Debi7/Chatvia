// // buildConfigProxy.ts

// export const buildConfigProxy = <T extends Record<string, unknown>>({
//   env,
//   envGettersMap,
// }: {
//   env: Record<string, unknown>;
//   envGettersMap: {
//     [K in keyof T]: (target: Record<string, unknown>, key: K) => T[K];
//   };
// }) =>
//   new Proxy({} as T, {
//     get(_, key) {
//       const keyStr = String(key);
//       const getter = envGettersMap[keyStr];

//       if (!getter || typeof getter !== 'function') {
//         throw new Error(`Config: Proxy getter for "${keyStr}" is not defined`);
//       }

//       return getter(env, keyStr);
//     },
//   });

"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
exports.buildConfigProxy = void 0
var buildConfigProxy = function (_a) {
  var env = _a.env,
    envGettersMap = _a.envGettersMap
  return new Proxy(
    {},
    {
      get: function (_, key) {
        var keyStr = String(key)
        var getter = envGettersMap[keyStr]
        if (!getter || typeof getter !== "function") {
          throw new Error('Config: Proxy getter for "'.concat(keyStr, '" is not defined'))
        }
        return getter(env, keyStr)
      },
    },
  )
}
exports.buildConfigProxy = buildConfigProxy
