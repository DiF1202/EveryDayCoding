const arr = [1, 2, 3, 4, 5];

// const res = arr.reduce((pre, cur) => {
//   return pre + cur;
// }, 0);

// console.log(res);

//手写reduce
Array.prototype._reduce = function (fn, initValue) {
  if (Object.prototype.toString.call(fn) !== "[object Function]") {
    throw "Error in params";
  }
  const arr = this;
  let initIndex; //初始化
  let acc; //累加器
  initIndex = arguments.length === 1 ? 1 : 0;//一个参数 就从数组第1项开始， 两个参数就从数组第0项开始
  acc = arguments.length === 1 ? arr[0] : initValue; //不传入的时候 应该是为undefined
  for (let i = initIndex; i < arr.length; i++) {
    acc = fn(acc, arr[i], i, arr);
  }
  return acc;
};

//test
const res = arr._reduce((pre, cur) => {
  return pre + cur;
}, 0);

console.log(res);
