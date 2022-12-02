let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr);

//反转数组

const reverseArr = (arr) => {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
};

console.log(reverseArr(arr));
