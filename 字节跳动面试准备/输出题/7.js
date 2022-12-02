//1也是关于this的，还有闭包，和一面差不多

//2. 作用域？变量提升？
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
//3也是关于event loop的，和一面的执行顺序差不多，让具体解释了一下宏任务和微任务
