//数组根据对象去重
//[{a:1, b:2},{a:1},{a:1}, {a:1, b:{c:1}}, {b:{c:1}, a:1}]
// => [{a:1, b:2}, {a:1}, {a:1, b:{c:1}}]

let testArr = [
  { a: 1, b: 2 },
  { a: 1 },
  { a: 1 },
  { a: 1, b: { c: 1 } },
  { b: { c: 1 }, a: 1 },
];

function fn(arr) {
  const map = new Map();
  for (const item of arr) {
    const tempStr = JSON.stringify(item).split("").sort().join("");
    if (!map.has(tempStr)) {
      map.set(tempStr, item);
    }
  }
  return map.values();
}
console.log(fn(testArr));
// console.log(JSON.stringify({ a: 1, b: { c: 1 } }));
