// Promise.allSettled 的结果数组中可能包含以下两种格式的数据

// {status:"fulfilled", value:result} 对于成功的响应
// {status:"rejected", reason:error} 对于 error

Promise.myAllSettled = promises => {
  return new Promise((resolve, rj) => {
    let count = 0;
    let result = [];
    const len = promises.length;
    // 数组是空的话，直接返回空数据
    if (len === 0) {
      return resolve([]);
    }
    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then(res => {
          count += 1;
          // 成功属性设置
          result[i] = {
            status: 'fulfilled',
            value: res
          };

          if (count === len) {
            resolve(result);
          }
        })
        .catch(err => {
          count += 1;
          // 失败属性设置
          result[i] = {
            status: 'rejected',
            reason: err
          };

          if (count === len) {
            resolve(result);
          }
        });
    });
  });
};

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, 'three');
});

Promise.myAllSettled([p1, p2, p3])
  .then(values => {
    console.log('resolve: ', values);
  })
  .catch(err => {
    console.log('reject: ', err);
  });
