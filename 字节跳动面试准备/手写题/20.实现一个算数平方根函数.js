/* 
//算术平方根函数
        @param num:目标数 n:精度
        @return Number
*/
function sqrt(num, n) {
  for (let i = 0; i < num; i++) {
    if (i * i == num) {
      return i;
    }
    if (i * i >= num) {
      let index = i - 1;
      while (num - index * index > n) {
        index += n / 2;
      }
      return index;
    }
  }
}
console.log(sqrt(10, 0.1));
