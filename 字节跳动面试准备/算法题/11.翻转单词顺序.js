// "the sky is blue";
// "blue is sky the";
//反转单词顺序
// 先用空格分隔为数组
// 用另一个数组存放倒过来的顺序
// 为了去掉单词中出现多个空格的情况，需要判断arr[i]是否为空
// 返回字符串
const reverseWords = (s) => {
  const arr = s.split(" ");
  const res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] && res.push(arr[i]);
  }
  return res.join(" ");
};
