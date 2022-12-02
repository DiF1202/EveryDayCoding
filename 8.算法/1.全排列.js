//状态变量:
//1.递归到第几层depth;
//2.已经选了哪些数path？ 是一个栈
//布尔数组used
var permute = function (nums) {
  const res = [],
    path = [];
  backtracking(nums, nums.length, []);
  return res;

  function backtracking(n, k, used) {
    if (path.length === k) {
      res.push(Array.from(path));
      return;
    }
    for (let i = 0; i < k; i++) {
      if (used[i]) continue;
      path.push(n[i]);
      used[i] = true; // 同支
      backtracking(n, k, used);
      path.pop();
      used[i] = false;
    }
  }
};