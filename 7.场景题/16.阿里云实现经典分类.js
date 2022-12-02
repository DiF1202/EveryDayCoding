// 将arr转换成下面这样子
const arr = [
  { a: 1, b: 2 },
  { a: 2, b: 3 },
  { a: 1, b: 4 },
  { a: 2, b: 5 },
];
// [[{ a: 1, b: 2 },{ a: 1, b: 4 }],[{ a: 2, b: 3 },{ a: 2, b: 5 }]]

const getName = (arr) => {
  const res = [];
  const map = new Map();
  for (let key of arr) {
    if (!map.has(key.a)) {
      map.set(key.a, [key]);
    } else {
      map.set(key.a, [...map.get(key.a), key]);
    }
  }
  for (const [key, value] of map) {
    res.push(value);
  }
  console.log(res);
};

getName(arr);
