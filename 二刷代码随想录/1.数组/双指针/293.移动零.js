var moveZeroes = function (nums) {
  let slow = (fast = 0);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  while (slow < fast) {
    nums[slow++] = 0;
  }
  return nums;
};
