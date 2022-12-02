//所有都是false才会返回false
//有一个对就对了
let arr = [1, 3, 4, 23, 14, 55];
Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};
let n = arr.mySome((item) => {
  return item > 100;
});
console.log(n);
