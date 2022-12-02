//基本计算器
var calculate = function (s) {
  let stack = [],
    n = 0,
    sign = "+"; // stack存数字, sign存上一个符号
  for (let i = 0; i <= s.length; i++) {
    if (s[i] === " ") continue;
    if (s[i] <= "9" && s[i] >= "0") {
      n = n * 10 + parseInt(s[i]);
      continue;
    }
    switch (sign) {
      case "+":
        stack.push(n);
        break;
      case "-":
        stack.push(-n);
        break;
      case "*":
        stack.push(stack.pop() * n);
        break;
      case "/":
        stack.push((stack.pop() / n) | 0);
        break;
    }
    sign = s[i];
    n = 0;
  }
  return stack.reduce((acc, curr) => acc + curr, 0);
};
