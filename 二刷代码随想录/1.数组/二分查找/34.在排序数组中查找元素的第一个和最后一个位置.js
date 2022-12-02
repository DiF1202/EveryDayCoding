//二分法
var searchRange = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    mid;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      break;
    }
  }
  if (left > right) return [-1, -1];
  let i = (j = mid);
  while (nums[i] == nums[i - 1]) i--; //向左边边搜索;
  while (nums[j] == nums[j + 1]) j++; //向右边搜索
  return [i, j];
};
