// LC 31. 下一个排列
/*
    比如[1,5,2,4,3,2];
    首先第一步, 先从右边往左边找 找到一个 左边小于右边的元素。 即[1,5,(2),4,3,2];
    第二步 再往 右边找到一个比2大的数。即3 [1,5,(2),4,(3),2],交换可以得到[1,5,3,4,2,2]。 然后4，2，2是递减的。
    然后再422 后面反转就可以。
*/

var nextPermutation = function (nums) {
  let i = nums.length - 2;
  //找到一个从右往左边找 找到第一个 左边>右边 下表
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  //如果i>=0就找到了。 不是不是 则全部都是递减的一个状态
  if (i >= 0) {
    let j = nums.length - 1;
    //找到第一个比nums[i] 小的数
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }
    //交换两个数
    [nums[j], nums[i]] = [nums[i], nums[j]];
  }

  //然后就是为了反转后面的 都是递减的一个规律 直接反转
  let l = i + 1;
  let r = nums.length - 1;
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }
};
