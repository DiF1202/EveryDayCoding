const fn = (url) => {
  // 实际场景这里用axios等请求库 发请求即可 也不用设置延时
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("完成一个任务", url, new Date());
      resolve({ url, date: new Date() });
    }, 1000);
  });
};

function limitQueue(urls, limit) {
  // 完成任务数
  let i = 0;
  // 填充满执行队列
  for (let i = 0; i < limit; i++) {
    run();
  }
  // 执行一个任务
  function run() {
    // 构造待执行任务 当该任务完成后 如果还有待完成的任务 继续执行任务
    new Promise((resolve, reject) => {
      const url = urls[i];
      i++;
      resolve(fn(url));
    }).then(() => {
      if (i < urls.length) run();
    });
  }
}

const urls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

(async (_) => {
  await limitQueue(urls, 4);
})();
