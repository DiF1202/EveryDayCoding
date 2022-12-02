var thirdMax = function (nums) {
  let temp = Array.from(new Set(nums)).sort((a, b) => {
    return b - a;
  });
  let len = temp.length;
  if (len < 3) {
    return temp[0];
  }
  return temp[2];
};
// LC 414. 第三大的数
// 第三大的数
