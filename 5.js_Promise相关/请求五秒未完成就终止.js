// 和b站的实习题一样 请求五秒未完成则终止
// 提供两个模拟的 api

const api = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("111");
    }, 1000);
  });
};

const timing = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("timeout");
    }, 5000);
  });
};

function apiTiming() {
  const arr = [timing(), api()];
  Promise.race(arr)
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e)
    });
}
function apiTiming(api) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await api();
      resolve(res);
    } catch (e) {
      reject(e);
    }
    reject("222");
  });
}

apiTiming(api).then((result) => console.log(result));
