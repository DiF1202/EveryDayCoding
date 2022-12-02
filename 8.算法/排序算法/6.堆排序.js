/*
    1.根据初始数组去构造初始堆。
    2.每次交换第一个和最后一个元素，输出最后一个元素(最大值),然后把剩下元素重新调整为大根堆，再进行
    交换第一个元素和最后一个元素，再调整大顶堆，重复执行，直到整个数组排序完成。
*/
/*
    算法稳定性:在建堆的时候是稳定的，
    但是在堆顶和堆尾交换的时候两个相等的记录在序列中的相对位置可能发生改变。
    所以堆排序就是不稳定的。
*/
//最后一个非叶子结点的下标:(arr.length-1-1)/2 = arr.length/2-1

let arr = [29, 38, 65, 87, 78, 23, 27, 29];

function headpSort(arr) {
  //初始建堆
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, i, arr.length - 1);
  }
  //堆排序的过程
  for (let i = arr.length - 1; i > 0; i--) {
    //交换当前节点和堆顶节点
    swap(arr, 0, i);
    heapify(arr, 0, i - 1);
  }
  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function heapify(arr, i, last_index) {
  let max = i;
  //2*i+1是左孩子
  if (2 * i + 1 <= last_index && arr[2 * i + 1] > arr[max]) {
    max = 2 * i + 1; //记左节点为最大值
  }
  if (2 * i + 2 <= last_index && arr[2 * i + 2] > arr[max]) {
    max = 2 * i + 2; //记右节点为最大值
  }
  if (max != i) {
    swap(arr, i, max);
    heapify(arr, max, last_index);
  }
}

console.log(headpSort(arr));
