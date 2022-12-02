// JS实现一个带并发限制的异步调度器Schduler,保证同时运行的任务最多有两个。完善代码。

class Scheduler {
  constructor() {
    this.queue = [];
    this.doingJobs = 0;
  }

  add(promiseCreater) {
    return new Promise((resolve, reject) => {
      // 关键是给传过来的函数加个回调属性，当resolved的时候，就能返回对应的结果了。
      promiseCreater.resolve = resolve;
      promiseCreater.reject = reject;

      this.queue.push(promiseCreater);
      this.run();
    });
  }

  run() {
    if (this.doingJobs < 2 && this.queue.length) {
      this.doingJobs += 1;
      const task = this.queue.shift();
      task()
        .then(res => {
          task.resolve(res);
        })
        .catch(err => {
          task.reject(err);
        })
        .finally(() => {
          this.doingJobs -= 1;
          this.run();
        });
    }
  }
}

const timeout = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const scheduler = new Scheduler();

const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order));
};

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');

//output:2 3 14 4
//一开始,1、2两个任务进入队列
// 500ms时,2完成,输出2,任务3进队
// 800ms时,3完成,输出3,任务4进队
// 1000ms,1完成,输出1
// 1200ms时4完成,输出4
