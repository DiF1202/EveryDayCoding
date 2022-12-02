var sortedSquares = function (nums) {
  //双指针法
  const len = nums.length;
  let left = 0,
    right = len - 1;
  let resArr = new Array(len).fill(0);
  let k = len - 1;

  while (left <= right) {
    const doubleLeft = nums[left] * nums[left];
    const doubleRight = nums[right] * nums[right];
    if (doubleLeft > doubleRight) {
      resArr[k--] = doubleLeft;
      left++;
    } else {
      resArr[k--] = doubleRight;
      right--;
    }
  }

  return resArr;
};
