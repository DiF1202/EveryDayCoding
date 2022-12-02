function MyPromiseAll(promises, limit) {
  return new Promise((resolve, reject) => {
    let count = 0; //计数器
    let result = []; //结果
    const len = promises.length;

    if (len === 0) {
      return resolve(result);
    }

    for (let i = 0; i < limit; i++) {
      // 注意有的数组项有可能不是Promise，需要手动转化一下
      Promise.resolve(promises[i])
        .then((res) => {
          result[i] = res;
          if (len == ++count) {
            resolve(result);
          }
        })
        .catch((e) => {
          reject(e);
        });
    }
      
  });
}
