// sum(1,2)(3)(4)(5,6,7)()返回28
// sum()返回0

// 不是柯里化。
// 参数数量任意，括号数量任意，实现sum作者：Joseph_666
//实现一个闭包加法

function sum(...rest) {
  let args = rest;
  if (args.length === 0) return 0;

  return function partialSum(...rest) {
    args = [...args, ...rest];
    if (rest.length === 0) {
      return args.reduce((pre, cur) => pre + cur);
    } else {
      return partialSum;
    }
  };
}

console.log(sum());
console.log(sum(1, 2)(3)(4)(5, 6, 7)());
