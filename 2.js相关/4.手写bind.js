Function.prototype._bind = function (thisArg, ...argArray) {
  const fn = this;

  thisArg =
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;

  function proxyFn(...args) {
    const tag = Symbol("mybind");
    thisArg[tag] = fn;
    const finalArgs = [...argArray, ...args];
    const result = thisArg[tag](...finalArgs);
    delete thisArg[tag];
    return result;
  }

  return proxyFn;
};
