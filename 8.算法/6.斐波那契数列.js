// 递归
function fn(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fn(n - 2) + fn(n - 1);
}
// 优化
function fibonacci2(n) {
  const arr = [1, 1, 2];
  const arrLen = arr.length;

  if (n <= arrLen) {
    return arr[n];
  }

  for (let i = arrLen; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[arr.length - 1];
}
// 非递归
function fn(n) {
  let pre1 = 1;
  let pre2 = 1;
  let current = 2;

  if (n <= 2) {
    return current;
  }

  for (let i = 2; i < n; i++) {
    pre1 = pre2;
    pre2 = current;
    current = pre1 + pre2;
  }

  return current;
}
