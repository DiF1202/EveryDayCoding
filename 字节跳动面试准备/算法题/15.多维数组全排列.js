//输入：[['A', 'B'], ['a', 'b'], ['1', '2']];
//输出：['Aa1','Aa2','Ab1','Ab2','Ba1','Ba2','Bb1','Bb2']
//多维数组全排列
let test = [
  ["A", "B"],
  ["a", "b"],
  ["1", "2"],
];

function pailie(arr) {
  let res = [];
  const dfs = (path, index) => {
    if (path.length == arr.length) {
      res.push(path);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (i == index) {
          dfs(path + arr[i][j], index + 1);
        }
      }
    }
  };
  dfs("", 0);
  return res;
}

console.log(pailie(test));
