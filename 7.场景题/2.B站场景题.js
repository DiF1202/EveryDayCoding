[
  {
    name: "可乐",
    categories: ["热门", "饮料"],
  },
  {
    name: "苹果",
    categories: ["热门", "食物"],
  },
  {
    name: "洗衣液",
    categories: ["生活用品"],
  },
];

[
  { name: "热门", categories: ["可乐", "苹果"] },
  { name: "饮料", categories: ["可乐"] },
  { name: "食物", categories: ["苹果"] },
  { name: "生活用品", categories: ["洗衣液"] },
];

function changeArr(data) {
  let newArr = [];
  let map = new Map();
  for (const item of data) {
    for (const cat of item.categories) {
      if (map.has(cat)) {
        map.set(cat, [...map.get(cat), item.name]);
      } else {
        map.set(cat, [item.name]);
      }
    }
  }
  for (const [key, value] of map) {
    let obj = {};
    obj.name = key;
    obj.categories = value;
    newArr.push(obj);
  }
  return newArr;
}
console.log(changeArr(arr));
