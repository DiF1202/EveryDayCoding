// 7.实现一个方法：
// [1,2,3,4,5].copy()
// 返回[1,2,3,4,5,1,2,3,4,5]

Array.prototype.copy = function () {
  return [...this, ...this];
};

const arr = [1, 2, 3, 4, 5].copy();
console.log(arr);
