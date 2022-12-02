// 1.先写一题promise,封装一个工具函数输入一个promiseA返回一个promiseB如果超过1s没返回则抛出异常如果正常则输出正确的值。
const promiseA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("111");
  }, 500);
});

const timing = () => {
  return new Promise((reject) => {
    setTimeout(() => {
      reject("timeout");
    }, 1000);
  });
};

const raceTiming = (promiseA) => {
  const arr = [timing(), promiseA];
  const PromiseB = Promise.race(arr)
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
  return PromiseB;
};

const PromiseB = raceTiming(promiseA);
console.log(PromiseB);
