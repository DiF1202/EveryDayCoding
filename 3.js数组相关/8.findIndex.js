let arr = [1, 3, 4, 23, 14, 55];
Array.prototype.myFindIndex = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};
let n = arr.myFindIndex((item) => {
  return item > 10;
});
console.log(n);
