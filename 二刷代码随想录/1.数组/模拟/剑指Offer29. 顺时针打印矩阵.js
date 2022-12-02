var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];
  const res = [];
  //定义边界
  let top = 0,
    bottom = matrix.length - 1,
    left = 0,
    right = matrix[0].length - 1;

  //开始从外层一层一层向内遍历
  while (top < bottom && left < right) {
    //上层
    for (let i = left; i < right; i++) {
      res.push(matrix[top][i]);
    }
    //右层
    for (let i = top; i < bottom; i++) {
      res.push(matrix[i][right]);
    }
    //下层
    for (let i = right; i > left; i--) {
      res.push(matrix[bottom][i]);
    }
    //左层
    for (let i = bottom; i > top; i--) {
      res.push(matrix[i][left]);
    }

    //收缩一下四个边界
    right--;
    top++;
    bottom--;
    left++;
  }
  //剩下一行的情况
  if (top === bottom) {
    //从左向右依次添加
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
  } else if (left === right) {
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][left]);
    }
  }
  return res;
};
