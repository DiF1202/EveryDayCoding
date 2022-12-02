/*
    插入算法思路:把n个排序的算法看成一个有序表和一个无序表。开始时有序表只有一个元素，无需表中包含n-1个元素,
    排序过程中每次从无序表中取出第一个元素,将它插入到有序表中的适当位置，使之成为新的有序表，重复n-1次可以完成排序过程。
*/
/*
    插入算法是稳定的,
    算法复杂度O(n^2)
*/
let arr = [5, 2, 4, 6, 1, 3];

//5 是有序 2,4,6,1,3无序。
//2 5 有序 4 6 1 3 无序。
//2 4 5有序 6 1 3 无序。
//2 4 5 6有序 1 3无序
//1 2 4 5 6 有序 3无序
//1 2 3 4 5 6可以了.

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        //交换位置
        swap(arr, j, j - 1);
      } else {
        break;
      }
    }
  }
  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(insertSort(arr));
