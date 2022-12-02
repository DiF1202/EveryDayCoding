//Leetcode 剑指 Offer II 099. 最小路径之和
//最小路径和
var minPathSum = function (grid) {
  const m = grid.length,
    n = grid[0].length;
  let min = Infinity;

  function dfs(i, j, sum) {
    if (i >= m || j >= n) return;
    sum += grid[i][j];

    if (i === m - 1 && j === n - 1) min = Math.min(min, sum);

    dfs(i + 1, j, sum);
    dfs(i, j + 1, sum);
  }

  dfs(0, 0, 0);
  return min;
};

// var minPathSum = function (grid) {
//     const m = grid.length, n = grid[0].length
//     const minSum = new Map();

//     function dfs(i, j) {
//         if (i >= m || j >= n) return Infinity;
//         if (i === m - 1 && j === n - 1) return grid[i][j];

//         const key = i + '-' + j;
//         if (minSum.has(key)) return minSum.get(key);

//         const min = Math.min(dfs(i + 1, j), dfs(i, j + 1)) + grid[i][j];
//         return minSum.set(key, min), min;
//     }

//     return dfs(0, 0);
// };
