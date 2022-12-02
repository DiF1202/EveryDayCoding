// 模拟一百条数据 const message = new Array(100).fill(''); for (let i = 0; i < 100; i++) {  message[i] = '第' + i + '条数据'; } // 模拟请求一千条数据

const message = new Array(100).fill("");
for (let i = 0; i < 100; i++) {
  message[i] = "第" + i + "条数据";
}

function axiosGet(idx) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message[idx]);
    }, 1000 * Math.random());
  });
}

// async ＋ promise 解决方案
async function asyncProcess(max = 10) {
  const task = [];
  const ans = [];
  for (let i = 0; i < 100; i++) {
    const p = axiosGet(i).then((res) => {
      console.log(res, task.length);
      ans.push(res);
      task.splice(task.indexOf(p), 1);
    });
    task.push(p);
    if (task.length === max) {
      await Promise.race(task);
    }
  }
  await Promise.allSettled(task);
  return ans;
}
