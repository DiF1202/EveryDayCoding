//给一个Urls数组，要求实现一个函数，按最快并且按顺序返回回来 打印出请求回来的返回值
function randomDelay(id) {
  //模拟随机时间返回结果
  const delay = Math.random() * 10000;
  return new Promise(resolve =>
    setTimeout(() => {
      setTimeout(() => resolve(`url${id}返回了`), 0);
    }, delay)
  );
}

async function foo(urls) {
  const t0 = Date.now();
  const promises = [];
  for (const url of urls) {
    promises.push(randomDelay(url));
  }
  for (const p of promises) {
    console.log(await p);
  }
  setTimeout(console.log, 0, `共用时${Date.now() - t0}ms`);
}

const urls = ['1', '2', '3', '4'];
foo(urls);
