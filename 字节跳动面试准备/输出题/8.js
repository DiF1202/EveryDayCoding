var a = function () {
  this.b = 3;
};
var c = new a();
a.prototype.b = 9;
var b = 7;
a();
// 给出下面的执行结果
console.log(b);
console.log(c.b);

// var a = function () {
//   this.name = 3;
// };
// var c = new a();
// a.prototype.b = 9;
// console.log(c.b);

setTimeout(function () {
  console.log("setTimeout");
});
new Promise(function (resolve) {
  console.log("promise");
  for (var i = 0; i < 10000; i++) {
    if (i === 10) {
      console.log("for");
    }
    if (i === 9999) {
      resolve("resolve");
    }
  }
}).then(function (val) {
  console.log(val);
});
console.log("console");