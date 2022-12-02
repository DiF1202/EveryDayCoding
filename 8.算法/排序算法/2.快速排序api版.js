//api小快排
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let left = [];
  let right = [];
  let current = arr.splice(0, 1);
  // console.log(current);
  for (const item of arr) {
    if (item < current) {
      left.push(item);
    } else {
      right.push(item);
    }
  }
  return quickSort(left).concat(current, quickSort(right));
}

let arr = [5, 3, 7, 6, 4, 1, 0, 2, 9, 10, 8];

console.log(quickSort(arr));
