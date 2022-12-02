var removeElement = (nums, val) => {
  //空间复杂O(1)
  //时间复杂度O(n)
  //双指针的写法。 如果遇到val一样值的元素。那就fast指针先走。slow走的慢。然后一次又一次的覆盖就好了。
  let slow = (fast = 0);
  for (const num of nums) {
    if (num !== val) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  return slow;
};
