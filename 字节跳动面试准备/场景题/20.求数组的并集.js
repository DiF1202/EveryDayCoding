// 13. 实现一个函数  可以接收三个参数 前两个是一个数组 两个数组取并集，
// 去掉重合元素，第三个参数为一个处理函数，处理数组中每个元素
// func([1, 1, 2, 2, 3], [2, , 3, 4])
// [1,1,4]     func([1,1,2.1,2.2,3 ],[2,,3,4],Math.floor)   //[1,1,4]

function func(arr1, arr2, everFn) {
  const set = new Set(arr1);
  const res = [];
  for (const item of arr2) {
    if (set.has(item)) res.push(item);
  }
  return res.map((item) => everFn(item));
}

console.log(func([1, 1, 2.1, 2.2, 3], [2, 2.2, 3, 4], Math.floor));
