// 方法一
//生成随机字符串的函数
function fn1(length) {
  let res = Math.random() // 生成随机数字, eg: 0.123456
    .toString(36) // 转化成36进制 : "0.4fzyo82mvyr"
    .slice(-length); // 截取最后八位 : "yo82mvyr"
  return res;
}
console.log(fn1(10));

// 方法二 可以指定长度和字符集
function randomString(length, chars) {
  var result = "";
  for (var i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}
var rString = randomString(
  32,
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
);
console.log(rString);
