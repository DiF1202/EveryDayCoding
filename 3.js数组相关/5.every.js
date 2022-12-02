//一个是false 就直接返回false
let arr = [1, -3, 4, 23, 14, 55];
Array.prototype.myEvery = function (callbakc) {
  for (let i = 0; i < this.length; i++) {
    if (!callbakc(this[i], i, this)) {
      return false;
    }
  }
  return true;
};
let n = arr.myEvery(item => {
  return item > 0;
});
console.log(n);
