//跳马
// 注意象棋棋盘是7 * 7，然后象棋每次跳日
let count = 0;
function solution(x0, y0, xn, yn, n) {
  // 递归出口
  if (n == 0) {
    if (x0 == xn && y0 == yn) {
      count++;
      return 1;
    }
    return 0;
  }
  let arr = getNextSteps(x0, y0);
  let sum = 0;
  //   console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    sum += solution(arr[i][0], arr[i][1], xn, yn, n - 1);
  }
  return sum;
}
let c = solution(0, 0, 5, 6, 5);
// console.log(count);  console.log(c);
// 用于判断它的下一步跳的情况，在最中间时一共有8种跳跃情况
function getNextSteps(x, y) {
  let arr = [];
  // 往第一象限跳
  if (x <= 4 && y >= 1) {
    arr.push([x + 2, y - 1]);
  }
  if (x <= 5 && y >= 2) {
    arr.push([x + 1, y - 2]);
  }
  // 往第二象限跳
  if (x >= 2 && y >= 1) {
    arr.push([x - 2, y - 1]);
  }
  if (x >= 1 && y >= 2) {
    arr.push([x - 1, y - 2]);
  }
  // 往第三象限跳
  if (x >= 2 && y <= 5) {
    arr.push([x - 2, y + 1]);
  }
  if (x >= 1 && y <= 4) {
    arr.push([x - 1, y + 2]);
  }
  // 往第四象限跳
  if (x <= 4 && y <= 5) {
    arr.push([x + 2, y + 1]);
  }
  if (x <= 5 && y <= 4) {
    arr.push([x + 1, y + 2]);
  }
  return arr;
}
//
let arr = getNextSteps(0, 0);
console.log(arr);
