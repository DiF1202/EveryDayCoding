const curry = (fn, ...args) => {
  //fn需要的参数是否够了？
  if (args.length >= fn.length) {
    return fn(...args);
  }

  //递归调用
  return (...rest) => {
    return curry(fn, ...args, ...rest);
  };

  //不够的话 拼接参数，直到执行fn并返回结果
};

// function curry(fn, ...args) {
//   return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
// }
const add = (x, y, z) => {
  return x + y + z;
};

var carrAdd = curry(add);
console.log(carrAdd(10)(20)(30));
