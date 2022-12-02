function side(arr) {
  arr[0] = arr[2];
}

function add(a, b, c = 3) {
  c = 10;
  console.log(3);
  console.log('>>', arguments);
  side(arguments);
  return a + b + c;
}

console.log(add(1, 2, 3));
