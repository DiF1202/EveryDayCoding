//LC 9. 回文数
//回文数字
var isPalindrome = function (x) {
  let temp = x.toString();
  let i = 0,
    j = temp.length - 1;

  while (i < j) {
    if (temp[i] == temp[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }

  return true;
};
