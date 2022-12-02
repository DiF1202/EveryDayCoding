// 实现一个sleep函数
function sleep(time) {
  Promise.resolve("").then(() => {
    setTimeout(() => {
      console.log(500);
    }, time);
  });
}

sleep(1000);
