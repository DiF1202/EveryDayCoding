const getBigInt = (a, b) => {
  a = a + "";
  b = b + "";
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
  }
  return res.reverse().join("");
};
console.log(getBigInt(1, 2097));

// 其主要的思路如下：

// 首先用字符串的方式来保存大数，这样数字在数学表示上就不会发生变化
// 初始化res，temp来保存中间的计算结果，并将两个字符串转化为数组，以便进行每一位的加法运算
// 将两个数组的对应的位进行相加，两个数相加的结果可能大于10，所以可能要仅为，对10进行取余操作，将结果保存在当前位
// 判断当前位是否大于9，也就是是否会进位，若是则将temp赋值为true，因为在加法运算中，true会自动隐式转化为1，以便于下一次相加
// 重复上述操作，直至计算结束
