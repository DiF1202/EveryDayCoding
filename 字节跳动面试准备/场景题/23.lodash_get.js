//实现lodash.get
// 当obj = {a: {b: {c: 1}}}，path = "a.b.c" 输出 1
// 当obj = {a: {b: {c: 1}}}，path = "a.b" 输出 {c：1}
// 当obj = {a: {b: {c: 1}}}，path = "a.d" 输出 undefined

let testObj = { a: { b: { c: 1 } } };
var object = { a: [{ b: { c: 3 } }] };
// function get(obj, path) {
//   let arr = path.split(".");
//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//       obj = obj[arr[i]];
//     } else {
//       obj = "undefined";
//     }
//   }
// }

function get(obj, path) {
  // let arr = path.split(".");
  let newPath = [];
  if (Array.isArray(path)) {
    newPath = path;
  } else {
    // 先将字符串中的'['、']'去除替换为'.'，split分割成数组形式
    newPath = path.replace(/\[/g, ".").replace(/\]/g, "").split(".");
  }
  return newPath.reduce((temp, item) => {
    return (temp || {})[item];
  }, obj);
}

console.log(get(object, "a[0].b.c"));
