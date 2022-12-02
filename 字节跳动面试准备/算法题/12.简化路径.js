// leetcode 71.简化路径
var simplifyPath = function (path) {
  const dir = path.split("/"),
    stack = [];
  for (let name of dir) {
    if (name === "." || name === "") continue;
    if (name === "..") {
      stack.length && stack.pop();
      continue;
    }
    stack.push(name);
  }
  return "/" + stack.join("/");
};
