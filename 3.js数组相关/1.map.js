const arr = [3, 4, 5, 6, 7];
//数组map方法
// arr.map((item, index, arr) => { return item + 1 }, this);
//看看原本的map
//接受两个参数一个是函数 一个是this
//函数中接受的参数是 每一个item index索引 arr数组本身

Array.prototype._map = function (fn, thisArgs) {
  if (Object.prototype.toString.call(fn) !== '[object Function]') {
    throw 'Error in params';
  }
  const res = [];
  const cur = this;
  const len = cur.length; //length要222222222222555555555562单独取出来，不然如果调用第三个参数arr会导致错误

  for (let i = 0; i < len; i++) {
    //绑定this后传入 三个参数
    //1.item
    //2.index
    //3.数组本身
    res[i] = fn.call(thisArgs, cur[i], i, cur);
  }
  return res;
};

//test测试
// const arr1 = arr._map((item, index, arr) => arr.push(1));
// console.log(arr1);

const test = [1, 2, 3, 4, 5];
let testA = test.map((item, index, arr) => {
  // console.log(arr);
  // console.log(index);
  return item + 1;
});
console.log(testA);
