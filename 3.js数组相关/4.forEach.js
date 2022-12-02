//无返回值,调用callback
let arr = [1, 3, 4, 23, 14, 55];
//简单的forEach方法
Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

arr.myForEach((item, i, arr) => {
  console.log(item, i, arr);
});

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
