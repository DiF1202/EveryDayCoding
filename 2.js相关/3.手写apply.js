// fn.apply(obj,[1,2,3,4])
Function.prototype._apply = function (thisArg, argArray) {
  const fn = this;
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;
  thisArg.fn = fn;
  let result;
  argArray = argArray || [];
  result = thisArg.fn(...argArray);
  delete thisArg.fn;
  // 4.返回结果
  return result;
};

Function.prototype._apply = function (thisArg, argArray) {
  // 1.获取到要执行的函数
  var fn = this;

  // 2.处理绑定的thisArg
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;

  // 3.执行函数
  thisArg.fn = fn;
  var result;
  // if (!argArray) { // argArray是没有值(没有传参数)
  //   result = thisArg.fn()
  // } else { // 有传参数
  //   result = thisArg.fn(...argArray)
  // }

  // argArray = argArray ? argArray: []
  argArray = argArray || [];
  result = thisArg.fn(...argArray);

  delete thisArg.fn;

  // 4.返回结果
  return result;
};
