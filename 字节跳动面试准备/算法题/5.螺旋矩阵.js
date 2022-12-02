//螺旋矩阵
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];
  const res = [];
  let top = 0,
    bottom = matrix.length - 1,
    left = 0,
    right = matrix[0].length - 1;
  while (top < bottom && left < right) {
    for (let i = left; i < right; i++) res.push(matrix[top][i]); // 上层
    for (let i = top; i < bottom; i++) res.push(matrix[i][right]); // 右层
    for (let i = right; i > left; i--) res.push(matrix[bottom][i]); // 下层
    for (let i = bottom; i > top; i--) res.push(matrix[i][left]); // 左层
    right--;
    top++;
    bottom--;
    left++; // 四个边界同时收缩，进入内层
  }
  if (top === bottom)
    // 剩下一行，从左到右依次添加
    for (let i = left; i <= right; i++) res.push(matrix[top][i]);
  else if (left === right)
    // 剩下一列，从上到下依次添加
    for (let i = top; i <= bottom; i++) res.push(matrix[i][left]);
  return res;
};

// 四个边界
// 上边界 top : 0
// 下边界 bottom : matrix.length - 1
// 左边界 left : 0
// 右边界 right : matrix[0].length - 1
