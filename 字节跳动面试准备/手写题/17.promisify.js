// promisify的作用;
// 将原本需要通过传入回调参数来实现回调执行（或者叫同步执行）改为利用promise的.then的方式来调用,从而实现逻辑上的同步操作。

function promisify(func) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      let callback = function (...args) {
        resolve(args);
      };
      // 给func函数主动塞入一个callback，这样在func中调用callback的时候实际执行的时候就是
      // 我们这里定义的callback函数，然后在我们的callback中调用resolve,
      // 这样一来，本来想要通过回调执行的操作就可以放在then函数中进行执行了
      func.apply(null, [...args, callback]);
    });
  };
}

// foo 可以是任何需要调用回调函数的函数
function foo(str1, str2, callback) {
  setTimeout(() => {
    console.log("setTimeout");
    // callback函数是通过最后一个参数这个位置来识别的，与callback这个名字无关
    callback(str1, str2);
  }, 1000);
}

// 这里的agent已经不是foo函数，而是我们在promisify中返回的自定义匿名函数
// 所以不需要纠结是否传入callback函数。
let agent = promisify(foo);

agent("hello", "world").then((res) => {
  console.log(res);
});
