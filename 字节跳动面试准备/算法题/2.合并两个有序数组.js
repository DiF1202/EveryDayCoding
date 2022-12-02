//合并两个有序数组
var merge = function (nums1, m, nums2, n) {
  const queue = [];
  let i = 0,
    j = 0;
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      queue.push(nums1[i]);
      i++;
    } else {
      queue.push(nums2[j]);
      j++;
    }
  }
  // 如果num1已遍历完，将num2剩下的所有元素入队
  if (i == m && j < n) {
    while (j < n) {
      queue.push(nums2[j]);
      j++;
    }
  }
  // 如果num2已遍历完，将num1剩下的所有元素入队
  if (j == n && i < m) {
    while (i < m) {
      queue.push(nums1[i]);
      i++;
    }
  }
  // 将queue即为所求
  for (let i = 0; i < queue.length; i++) {
    nums1[i] = queue[i];
  }
};
