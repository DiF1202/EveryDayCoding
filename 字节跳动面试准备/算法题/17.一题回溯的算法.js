// 输入[1,2,3,4] 3
// 输出[[1,2,3],[1,2,4],[2,3,4]];
// 回溯
var permute = function (nums, maxLen) {
  const res = [],
    path = [];
  backtracking(maxLen, 0);
  return res;

  function backtracking(maxLen, startIndex) {
    if (path.length === maxLen) {
      res.push(Array.from(path));
      return;
    }
    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i]);
      backtracking(maxLen, i + 1);
      path.pop();
    }
  }
};

console.log(permute([1, 2, 3, 4], 3));
