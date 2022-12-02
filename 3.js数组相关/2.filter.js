const array = [3, 4, 5, 6, 7];
//数组filter
let res = array.filter((item, index, data) => {
  //   console.log(data);
  return item > 5;
});

// console.log(res);

//自己实现filter
Array.prototype._filter = function (fn, thisArgs) {
  if (Object.prototype.toString.call(fn) !== '[object Function]') {
    throw 'Error in params';
  }
  const cur = this;
  const len = cur.length; //一定要存一下len
  const res = [];
  for (let i = 0; i < len; i++) {
    if (fn.call(thisArgs, cur[i], i, cur)) {
      res.push(cur[i]);
    }
  }
  return res;
};

//test
let res1 = array._filter((item, index, data) => {
  return item > 5;
});
console.log(res1);
