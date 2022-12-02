//填充数组
Array.prototype.myFill = function (initValue, start = 0, end) {
  //end可以小于0,所以要进行一个判断
  end = end < 0 ? this.length + end : end;
  for (let i = start; i < end; i++) {
    this[i] = value;
  }
  return this;
};
let arr = [3, 3, 21, 3, 14, 12, 4, 1, 2];
console.log(arr.myFill(1, 3, 5));
