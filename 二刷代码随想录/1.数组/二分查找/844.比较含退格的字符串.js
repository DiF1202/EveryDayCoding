var backspaceCompare = function (S, T) {
  const fn = (s, stack = []) => {
    for (let i = 0; i < s.length; i++) {
      s[i] === "#" ? stack.pop() : stack.push(s[i]);
    }
    return stack.join("");
  };
  return fn(S) === fn(T);
};
// 遇字母，放入栈，遇到#，弹出栈。两栈转字符串，比较是否相等
