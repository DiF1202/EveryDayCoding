const message = new Array(100).fill("");
for (let i = 0; i < 100; i++) {
  message[i] = "第" + i + "条数据";
}
// 模拟请求一千条数据
function axiosGet(idx) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message[idx]);
    }, 1000 * Math.random());
  });
}
// async + promise
async function Process(max = 10) {
  let pools = [];
  let result = [];
  for (let i = 0; i < 100; i++) {
    let p = axiosGet(i).then((res) => {
      console.log(res);
      result.push(res);
      pools.splice(pools.indexOf(p), 1);
    });
    pools.push(p);
    if (pools.length === max) {
      await Promise.race(pools);
    }
  }
  await Promise.allSettled(pools);
  return result;
}
Process().then((res) => {
  console.log(res);
});
