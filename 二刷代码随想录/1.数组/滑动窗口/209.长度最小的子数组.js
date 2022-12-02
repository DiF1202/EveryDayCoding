var minSubArrayLen = function (target, nums) {
  //滑动窗口
  const len = nums.length;
  let l = (r = sum = 0); //初始化窗口和总和。
  let res = len + 1; //最大的res不会对len大
  while (r < len) {
    sum += nums[r++];

    while (sum >= target) {
      res = Math.min(res, r - l);
      sum -= nums[l++];
    }
  }

  return res > len ? 0 : res;
};
