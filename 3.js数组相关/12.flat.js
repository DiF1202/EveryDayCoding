let arr = [1, [2, [3, 4, 5]]];

const flat = (arr, depth = 1) => {
  const res = [];
  for (const item of arr) {
    if (Array.isArray(item) && depth > 0) {
      res.push(...flat(item, depth - 1));
    } else {
      res.push(item);
    }
  }
  return res;
};

console.log(flat(arr, 2));

Array.prototype.myFlat = function (depth = 1) {
  const flat = (depth = 1) => {
    const res = [];
    for (const item of this) {
      if (Array.isArray(item) && depth > 0) {
        res.push(...flat(item, depth - 1));
      } else {
        res.push(item);
      }
    }
  };
  return flat(1);
};
const arr1 = [1, 2, 3, [1, 2, [3]]];
console.log(arr1.myFlat(1));
