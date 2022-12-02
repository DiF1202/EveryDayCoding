// ["hello","ello","llo"] =>return "llo"
var longestCommonPrefix = function (strs) {
  if (strs?.length == 0) return "";
  let ans = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    while (j < ans.length && j < strs[i].length) {
      if (ans[j] != strs[i][j]) {
        break;
      }
      j++;
    }
    ans = ans.substr(0, j);
    if (ans === "") return ans;
  }
  return ans;
};

const strs = ["hello", "ello", "llo"];

console.log(longestCommonPrefix(strs));
