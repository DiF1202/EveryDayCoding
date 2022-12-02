// 字符串有效性验证 isValid：{}, [], ()是否匹配（栈实现）
//验证字符串有效性
// 输入 "123{23[2a(d)]}34" 输出true

let testStr = "123{23[2a(d)]}34";

function fn(str) {
  const stack = [];
  const map = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  const tag = ")}]";

  for (let i = 0; i < str.length; i++) {
    if (str[i] in map) {
      stack.push(str[i]);
      continue;
    }
    if (tag.indexOf(str[i]) != -1 && map[stack.pop()] !== str[i]) {
      return false;
    }
  }

  return !stack.length;
}

let res = fn(testStr);
console.log(res);
