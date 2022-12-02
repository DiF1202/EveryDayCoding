//LC 复原IP地址
//回溯
var restoreIpAddresses = function (s) {
  const res = [],
    path = [];
  backtracking(0, 0);
  return res;
  function backtracking(i) {
    const len = path.length;
    if (len > 4) return;
    if (len === 4 && i === s.length) {
      res.push(path.join("."));
      return;
    }
    for (let j = i; j < s.length; j++) {
      const str = s.substr(i, j - i + 1);
      if (str.length > 3 || +str > 255) break;
      if (str.length > 1 && str[0] === "0") break;
      path.push(str);
      backtracking(j + 1);
      path.pop();
    }
  }
};
