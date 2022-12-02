// 输入((2+3)+(3*4))+2，输出['(2 + 3)+(3 * 4)',   '2 + 3',  '3 * 4']
//对算术表达式进行拆分
let a = "((2+3)+(3*4))+2";

function fn(str) {
  let res = [];
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(") {
      stack.push(i);
    } else if (str[i] == ")") {
      let left = stack.pop();
      res.push(str.slice(left + 1, i));
    }
  }
  return res;
}

console.log(fn("((2+3)+(3*4))+2"));

console.log(fn(a));
