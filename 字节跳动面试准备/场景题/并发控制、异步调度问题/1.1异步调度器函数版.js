/* 
标题
并发请求限制

题目描述
【背景】​
一般浏览器会限制并发请求数，微信小程序之前也限制过最多请求不超过10个。​
现在，让我们来实现一下这个功能。​
【问题描述】​
实现这样一个函数scheduler，函数入参为并发最大次数。​
如下最终输出顺序： 2、3、 1、 4​
一开始，1、2两个任务进入队列​
500ms时，2完成，输出2，任务3进队​
800ms时，3完成，输出3，任务4进队​
1000ms时，1完成，输出1​
1200ms时，4完成，输出4​
*/
// -----------------mock一些请求​

const request1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });

const request2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 500);
  });
const request3 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 300);
  });
const request4 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(4);
    }, 400);
  });
// -----------------最多并发2个请求​
function scheduler(max) {
  // 最大并行数为 10 max = max > 10 ? 10 : max; // 用 async/await 语法实现不定数量异步任务串行执行
  let count = 0;
  const queue = [];
  async function _addReq(reqf) {
    if (count >= max) {
      await new Promise((resolve, reject) => {
        queue.push(resolve);
      });
    }
    count++;
    const result = await reqf();
    count--;
    if (queue.length) {
      queue.shift()();
    }
    return result;
  }
  return _addReq;
}

const addRequest = scheduler(2);
addRequest(request1).then((res) => {
  console.log(res);
});
addRequest(request2).then((res) => {
  console.log(res);
});
addRequest(request3).then((res) => {
  console.log(res);
});
addRequest(request4).then((res) => {
  console.log(res);
});
