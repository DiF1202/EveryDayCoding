const arr = [3, 4, 5, 6, 7];

//手写map,reduce实现map

// arr.map((item, index, arr) => { return item + 1 }, this);
//看看原本的map
//接受两个参数一个是函数 一个是this
//函数中接受的参数是 每一个item index索引 arr数组本身

Array.prototype._map = function (fn, thisArgs) {
  if (Object.prototype.toString.call(fn) !== "[object Function]") {
    throw "Error in params";
  }
  const res = [];
  const arr = this;
  const len = arr.length; //length要单独取出来，不然如果调用第三个参数arr会导致错误

  for (let i = 0; i < len; i++) {
    res[i] = fn.call(thisArgs, arr[i], i, arr);
  }
  return res;
};

// //test测试
// const arr1 = arr._map((item, index, arr) => arr.push(1));
// // console.log(arr1);

Array.prototype._map = function (fn, thisArgs) {
  let res = [];
  let arr = this;
  thisArgs = thisArgs || [];
  arr.reduce((pre, cur, index, arr) => {
    return res.push(fn.call(thisArgs, cur, index, arr));
  }, []);
  return res;
};
// let arr=[1,2,3]
console.log(arr._map((item, index, arr) => item * 2));
