// list: 数组对象
// id: 每条数据的id
// pid: 每条数据的父节点对应字段
// pid:null 没有父节点的数据

const list = [
  { id: 04, pid: 03 },
  { id: 01, pid: null },
  { id: 02, pid: null },
  { id: 03, pid: 01 },
  { id: 05, pid: 01 },
  { id: 06, pid: 03 },
  { id: 07, pid: 02 },
  { id: 09, pid: 02 },
  { id: 10, pid: 07 }
];

// function toTree(data) {
//   let result = [];
//   if (!Array.isArray(data)) {
//     return result;
//   }
//   data.forEach((item) => {
//     console.log(item);
//     delete item.children;
//   });
//   let map = {};
//   data.forEach((item) => {
//     map[item.id] = item;
//   });
//   data.forEach((item) => {
//     let parent = map[item.pid];
//     if (parent) {
//       (parent.children || (parent.children = [])).push(item);
//     } else {
//       result.push(item);
//     }
//   });
//   return result;
// }

function toTree(data) {
  let result = [];
  //如果值是 Array，则为true; 否则为false。
  if (!Array.isArray(data)) {
    return result;
  }
  //根据父节点进行拼接子节点，
  data.forEach(item => {
    // console.log(item);
    delete item.children; //已经有的话就删掉
  });
  //把每一项的引用放入map对象里
  let map = {};
  data.forEach(item => {
    map[item.id] = item;
  });
  //再次遍历数组 决定item的去向
  data.forEach(item => {
    let parent = map[item.pid];
    if (parent) {
      // 如果 map[item.pid] 有值 则 parent 为 item 的父级
      // 判断 parent 里有无children 如果没有则创建 如果有则直接把 item push到children里
      (parent.children || (parent.children = [])).push(item);
    } else {
      // 如果 map[item.pid] 找不到值 说明此 item 为 第一级
      result.push(item);
    }
  });
  return result;
}
console.log(toTree(list));
