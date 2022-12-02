/*
    计数排序:拿空间换时间的算法
    算法思路:
    计数排序是一种非比较排序算法,其核心在于将输入的数据转化为键存储在额外开辟的数组空间中。作为一种线性时间复杂度的排序，
    计数排序要求输入的数据必须是有确定范围的整数。
    代码优化:我们考虑一个问题，如何数据是101 103 110 120这种要开辟一个121大小的数组，前100个位置都是空的，这无疑是一种浪费，
    因此我们可以把数组的大小设置成max-min+1。这时，我们向数组中计数的时候，下标要减去一个偏移量min,输出数组的时候，要加上这个偏移量min。

*/
/*
  计数排序是稳定的。
  时间复杂度为O(n+k) n是数组长度,k是数组的范围。
*/
let arr = [29, 38, 65, 87, 78, 23, 27, 29];

function countingSort(arr, maxValue) {
  let bucket = new Array(maxValue + 1),
    sortedIndex = 0;
  (arrLen = arr.length), (bucketLen = maxValue + 1);

  for (let i = 0; i < arrLen; i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0;
    }
    bucket[arr[i]]++;
  }

  for (let j = 0; j < bucketLen; j++) {
    while (bucket[j] > 0) {
      arr[sortedIndex++] = j;
      bucket[j]--;
    }
  }

  return arr;
}

console.log(countingSort(arr, 87));
