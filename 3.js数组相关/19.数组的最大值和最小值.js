let ary = [12, 24, 13, 8, 35, 15];
//获取数组中最大值和最小值
//1、通过sort进行排序
function maxNumber(ary) {
  return ary.sort((a, b) => {
    return a - b;
  })[ary.length - 1];
}
//2、for循环实现
function maxNumber1(ary) {
  let a = ary[0];
  for (let i = 1; i < ary.length; i++) {
    if (ary[i] > a) {
      a = ary[i];
    }
  }
  return a;
}
//3、Max和min方法实现
function maxNumber2(ary) {
  return Math.max(...ary);
}
//4、基于apply实现
function maxNumber2(ary) {
  return Math.max.apply(window, ary);
}
console.log(maxNumber(ary));
console.log(maxNumber(ary));
console.log(maxNumber2(ary));
console.log(Math.max.apply(window, ary));
