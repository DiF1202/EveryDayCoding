// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 移动零
// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。

// 输入: nums = [0, 1, 0, 3, 12];
// 输出: [1, 3, 12, 0, 0];

var moveZeroes = function (nums) {
  let fast = 0,
    slow = 0;
  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  while (slow < nums.length) {
    nums[slow] = 0;
    slow++;
  }
};
