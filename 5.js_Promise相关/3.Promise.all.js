function MyPromiseAll(promises) {
  if (Array.isArray(promises)) {
    throw new Error('promises are not Array');
  }
  return new Promise((resolve, reject) => {
    let count = 0; //计数器
    let result = []; //结果
    const len = promises.length;

    if (len === 0) {
      return resolve(result);
    }

    for (let i = 0; i < len; i++) {
      // 注意有的数组项有可能不是Promise，需要手动转化一下
      Promise.resolve(promises[i])
        .then(res => {
          result[i] = res;
          if (len == ++count) {
            resolve(result);
          }
        })
        .catch(e => {
          reject(e);
        });
    }
  });
}

//test
const p1 = Promise.resolve(1);
const p2 = new Promise(resolve => {
  setTimeout(() => resolve(2), 1000);
});
const p3 = new Promise(resolve => {
  setTimeout(() => resolve(3), 3000);
});

const p4 = Promise.reject('err4');
const p5 = Promise.reject('err5');

const p11 = MyPromiseAll([p1, p2, p3])
  .then(console.log) // [ 1, 2, 3 ]
  .catch(console.log);

// 2. 有一个Promise失败了
const p12 = Promise.myAll([p1, p2, p4]).then(console.log).catch(console.log); // err4
