// 手写高阶函数, 只有第一次调用时会执行并返回结果, 之后的调用都返回之前的执行结果;
//只能调用一次的高阶函数
function cacheHandler(fn) {
  //TO DO
  let once = true;
  let res;
  let tempRes;
  if (once) {
    tempRes = fn();
    res = function temp() {
      return tempRes;
    };
    once = false;
  }
  return res;
}
function fn() {
  return Math.random();
}
const cache = cacheHandler(fn);
console.log(cache()); //比如第一次调用生成了0.9280871909977753
console.log(cache()); //那么第二次调用也要返回0.9280871909977753
console.log(cache()); //那么第二次调用也要返回0.9280871909977753
console.log(cache()); //那么第二次调用也要返回0.9280871909977753
console.log(cache()); //那么第二次调用也要返回0.9280871909977753
