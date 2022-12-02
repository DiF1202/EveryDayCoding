//字符串里面找到第k个唯一出现1次的字符串
function print(str, k) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  const res = [];
  for (const p in obj) {
    if (obj[p] === 1) {
      res.push(p);
    }
  }
  return res.splice(k - 1, 1);
}

console.log(print("aaabbbsxxp", 2)); //x
