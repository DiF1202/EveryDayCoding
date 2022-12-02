/*
    选择排序:
    算法思路:以由小到大为例，首先在未排序序列中找到最小元素，存放到排序序列的起始位置,然后再从剩余未排序元素中继续寻找最小值，
    然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。
*/
/*
    选择排序是不稳定的!!!!;因为会不停的交换顺序。
    时间复杂度O(n^2);
*/ 

let arr = [29, 38, 65, 87, 78, 23, 27, 29];

//第一轮:找到最小值23,跟第1个位置29交换，得到有序集合{23}
//第二轮:从无序集合中找到最小值27,跟第二个位置38交换,得到有序集合{23,27};

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min_index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }
    //用最小值替换
    swap(arr, i, min_index);
  }
  return arr;
}
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(selectionSort(arr));
