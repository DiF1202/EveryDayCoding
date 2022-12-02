// LC 704 二分查找
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  //这是可以等于的
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};

