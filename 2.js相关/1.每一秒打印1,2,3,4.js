// 使用闭包实现
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  })(i);
}

// for (var i = 0; i < 5; i++) {
//   (function (i) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   })(i);
// }

// 使用 let 块级作用域
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  })();
}
