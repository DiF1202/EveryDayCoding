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
  // let initIndex; //初始化 //决定从第一项开始遍历还是第二项开始遍历
  // let acc; //累加器
  let initIndex = arguments.length === 1 ? 1 : 0; //如果只传入了一个参数, 那就从第二个参数开始遍历，不然就从第二个开始遍历
  let acc = arguments.length === 1 ? arr[0] : initValue; //不传入的时候 应该是为undefined,那数组从第二个开始遍历
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
