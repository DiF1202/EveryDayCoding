/*
    桶排序:
    算法思路:
    桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。
    为了使桶排序更加高效，我们需要做到这两点：

    在额外空间充足的情况下，尽量增大桶的数量
    使用的映射函数能够将输入的 N 个数据均匀的分配到 K 个桶中
    同时，对于桶中元素的排序，选择何种比较排序算法对于性能的影响至关重要。

    1. 什么时候最快
    当输入的数据可以均匀的分配到每一个桶中。

    2. 什么时候最慢
    当输入的数据被分配到了同一个桶中。

*/
/*
  桶排序是取决于桶内排序使用的算法。
  最好情况是O(n),
  如果数组全部堆在一个桶里面 那看你使用的算法  最坏的情况就是O(n^2)
*/
let arr = [29, 38, 65, 87, 78, 23, 27, 29];

function bucketSort(arr, bucketSize) {
  //获取max
  //min
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  //桶的初始化
  const DEFAULT_BUCKET_SIZE = 5; // 设置桶的默认数量为5
  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
  let bucketCount = Math.floor((max - min) / bucketSize) + 1;
  let buckets = new Array(bucketCount);

  for (i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  //利用映射函数将数据分配到各个桶中
  for (i = 0; i < arr.length; i++) {
    buckets[Math.floor((arr[i] - min) / bucketSize)].push(arr[i]);
  }

  const res = [];
  for (i = 0; i < buckets.length; i++) {
    buckets[i].sort((a, b) => a - b); // 对每个桶进行排序，这里使用了内置api 可以用快排,插入排序等。。
    for (var j = 0; j < buckets[i].length; j++) {
      res.push(buckets[i][j]);
    }
  }
  return res;
}

console.log(bucketSort(arr));
