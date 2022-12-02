const arr = [1, 2, 3, 344, 2, 2, 2, 2, 2, 2, 2, 2, 2, 22, 2, 2, 2, 1];
//数组去重
//方法一 用set去重
function removeSameItem(arr) {
  return Array.from(new Set(arr));
}

//方法2用 indexOf去重
function removeSameItem(arr) {
  let result = [];
  for (const item of arr) {
    if (result.indexOf(item) == -1) {
      result.push(item);
    }
  }
  return result;
}

// 第三种:循环+includes 解决
function unique(obj) {
  let arr = [];
  for (let i in obj) {
    if (!arr.includes(obj[i])) {
      arr.push(obj[i]);
    }
  }
  return arr;
}

//第四种利用Map
function removeSameItem(arr) {
  let result = [];
  let map = new Map();
  for (const item of arr) {
    if (!map.has(item)) {
      result.push(item);
      map.set(item, item);
    }
  }
  return result;
}
// console.log(removeSameItem(arr));
