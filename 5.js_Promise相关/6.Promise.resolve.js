Promise.myResolve = function (value) {
  // 是Promise实例，直接返回即可
  if (value && value instanceof Promise) {
    return value;
  }
  // 否则其他情况一律再通过Promise包装一下
  return new Promise((resolve) => {
    resolve(value);
  });
};
