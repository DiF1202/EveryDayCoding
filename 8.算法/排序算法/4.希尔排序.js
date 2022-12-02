/*
    希尔排序:希尔排序也是一种插入排序,它是简单插入排序经过改进之后的一个更高效的版本，也称为缩小增量排序。
    
    算法思路:是把记录按照下标的一定增量分组，对每组使用直接插入排序算法排序;随着增量逐渐减少，每组包含的元素越多，当增量减至1，整个元素恰被分为1组。
*/
/*
    算法稳定性:
    插入排序是稳定的。
    但是再希尔排序种，相同的元素可能再各自的插入排序种移动，最后其稳定性就会被打乱，
    所以希尔排序是不稳定的算法。
    时间复杂度:
    O(nlog2n) - O(n^2)
*/ 

let arr = [29, 38, 65, 87, 78, 23, 27, 72, 55, 48];

/*
    第一躺增量为5也就是分为5组;
    下标0和5为一组 29 23
    下标1和6为一组 38 27
    。。。。

    第二趟增量为5/2 = 2 为2组;
    ....

    第三躺增量为1 也就是1组;

    增量为1 就是简单的插入排序了。
*/

function shellSort(arr) {
  for (
    let gap = Math.floor(arr.length / 2);
    gap > 0;
    gap = Math.floor(gap / 2)
  ) {
    for (let i = gap; i < arr.length; i++) {
      for (let j = i; j >= gap; j = j - gap) {
        if (arr[j] < arr[j - gap]) {
          //交换
          swap(arr, j, j - gap);
        } else {
          break;
        }
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

console.log(shellSort(arr));
