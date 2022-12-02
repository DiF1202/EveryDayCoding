// 3. 面试官说可不可以不用promise -- 我用了递归
function dfs() {
  setTimeout(() => {
    console.log("hellow world");
    dfs();
  }, 5000);
}
dfs();
// 4. 面试官说加上次数呢 -- 加一个times呗
function dfs(times) {
  if (times) {
    setTimeout(() => {
      console.log("hellow world");
      dfs(times - 1);
    }, 5000);
  }
}
dfs(10);
// 5. 面试官说用户可以控制是否终止输出 -- 我用了全局变量
let times = true;
function dfs() {
  if (times) {
    setTimeout(() => {
      console.log("hellow world");
      dfs();
    }, 5000);
  }
}
function stop() {
  times = false;
}
dfs();
// 6. 面试官说这样不安全 -- 那就闭包呗
function startConsole() {
  let times = true;
  function dfs() {
    if (times) {
      setTimeout(() => {
        console.log("hellow world");
        dfs();
      }, 5000);
    }
  }
  dfs();
  return () => (times = false);
}
