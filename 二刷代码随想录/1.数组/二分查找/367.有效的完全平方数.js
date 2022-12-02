var isPerfectSquare = function (num) {
  let left = 0,
    right = num;
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    const square = mid * mid;
    if (square < num) {
      left = mid + 1;
    } else if (square > num) {
      right = mid - 1;
    } else {
      return true;
    }
  }
  return false;
};
