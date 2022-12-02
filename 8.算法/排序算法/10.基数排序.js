/*
    基数排序:
    基数排序是按照低位先排序，然后手机；再按照高位排序，然后再收集；依次类推，直到最高位。
*/
/*
    算法稳定性:
    基数排序是稳定的，是分别排序，分别收集，是一种稳定性的算法
    时间复杂度:为O(N*M),其中N为数据个数，M为数据位数
*/

var counter = [];
function radixSort(arr, maxDigit) {
  var mod = 10;
  var dev = 1;
  for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
    for (var j = 0; j < arr.length; j++) {
      var bucket = parseInt((arr[j] % mod) / dev);
      if (counter[bucket] == null) {
        counter[bucket] = [];
      }
      counter[bucket].push(arr[j]);
    }
    var pos = 0;
    for (var j = 0; j < counter.length; j++) {
      var value = null;
      if (counter[j] != null) {
        while ((value = counter[j].shift()) != null) {
          arr[pos++] = value;
        }
      }
    }
  }
  return arr;
}

