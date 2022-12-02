//fn.call(obj,1,2,3,4,5,6)
// 给所有的函数添加一个hycall的方法
Function.prototype._call = function (thisArg, ...args) {
  const fn = this;
  //对this加一层判断
  thisArg =
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;
  const tag = Symbol("mycall");
  thisArg[tag] = fn;
  const result = thisArg[tag](...args);
  delete thisArg[tag];

  return result;
};

Function.prototype_call = function (thisArg, ...args) {
  // 在这里可以去执行调用的那个函数(foo)
  // 问题: 得可以获取到是哪一个函数执行了hycall
  // 1.获取需要被执行的函数
  const fn = this;

  // 2.对thisArg转成对象类型(防止它传入的是非对象类型)
  thisArg =
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;

  // 3.调用需要被执行的函数
  const tag = Symbol("mycall");
  thisArg[tag] = fn;
  const result = thisArg[tag](...args);
  delete thisArg[tag];

  // 4.将最终的结果返回出去
  return result;
};
