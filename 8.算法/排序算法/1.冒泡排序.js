// https://www.runoob.com/w3cnote/ten-sorting-algorithm.html
let arr = [9, 8, 5, 4, 2, 0];

function bubbleSort(arr) {
  //跑n-1躺
  for (let i = 1; i < arr.length; i++) {
    //i=1 j=4
    //i=2 j=3
    //j=arr.length-1
    for (let j = 0; j <= arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr));
// [ 0, 2, 4, 5, 8, 9 ]

//算法思路比较相邻元素，如果第一个比第二大就交换它们两个;
//对每一对相邻元素做相同的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数

//算法稳定性: 冒牌排序是稳定性的。
//时间复杂度:O(n^2)
