let arr = [1, 3, 4, 23, 14, 55];
Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return -1;
};
let n = arr.find(item => {
  return item > 10;
});
console.log(n);

//找到索引
//没找到就是-1
