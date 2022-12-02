//函数柯里化
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

const add = (x, y, z, m, n) => x + y + z + m + n;
//  fun(1)(2,3)(4,5)() = 15
// console.log(add(1, 2, 3));

const curryAdd = curry(add);
console.log(curryAdd(1)(2, 3)(4, 5));
