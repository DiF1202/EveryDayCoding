//LC 209 长度最小的子数组
//滑动窗口

var minSubArrayLen = function (target, nums) {
  // 长度计算一次
  const len = nums.length;
  let l = (r = sum = 0),
    res = len + 1; // 子数组最大不会超过自身
  while (r < len) {
    sum += nums[r++];
    // 窗口滑动
    while (sum >= target) {
      // r始终为开区间 [l, r)
      res = res < r - l ? res : r - l;
      sum -= nums[l++];
    }
  }
  return res > len ? 0 : res;
};
