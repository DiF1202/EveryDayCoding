var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  let ans = nums.length;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
      ans = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      ans = mid;
      break;
    }
  }

  return ans;
};
