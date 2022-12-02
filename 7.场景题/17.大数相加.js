// 1098+2098
//大数相加
const getBigInt = (a, b) => {
  a = a + '';
  b = b + '';
  let i = a.length - 1;
  let j = b.length - 1;
  let curry = 0; //中间值 8+4 curry存进去
  const res = [];
  while (i >= 0 || j >= 0 || curry !== 0) {
    let left = i >= 0 ? Number(a[i]) : 0;
    let right = j >= 0 ? Number(b[j]) : 0;
    let result = left + right + curry;
    res.push(result % 10);
    curry = Math.floor(result / 10);
    i--;
    j--;
    2;
  }
  return res.reverse().join('');
};
console.log(getBigInt(1, 097));
