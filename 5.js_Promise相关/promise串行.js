const p1 = () => {
  return Promise.resolve(1);
};
const p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 3000);
  });
};

const p3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 2000);
  });
};

//要求实现promise串行
//我的做法是async + await
const promises = [p1, p2, p3];

const TimingFn = (promises) => {
  return new Promise(async (resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      const res = await promises[i]();
      console.log(res);
    }
    resolve();
  });
};

let resultPromise = TimingFn(promises).then(() => {
  console.log("全部都串行执行完了");
});
