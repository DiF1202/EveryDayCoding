//设计一个LazyMan类
// new LazyMan('tony').sleep(10).eat('lunch')   输出：Hi I am Tony  等待十秒  I am eating lunch
class LazyMan {
  constructor(name) {
    this.name = name;
    this.taskList = [];
    console.log(`Hi I am ${this.name}`);
    setTimeout(() => {
      this.next();
    }, 0);
  }
  eat(food) {
    const that = this;
    const fn = ((n) => {
      return function () {
        console.log(`I am eating ${n}`);
        that.next();
      };
    })(food);
    this.taskList.push(fn);
    return this;
  }
  sleep(time) {
    const that = this;
    const fn = ((t) => {
      return function () {
        setTimeout(() => {
          console.log(`等待了${t}秒`);
          that.next();
        }, t * 1000);
      };
    })(time);
    this.taskList.push(fn);
    return this;
  }
  sleepFirst(time) {
    const that = this;
    const fn = ((t) => {
      return function () {
        setTimeout(() => {
          console.log(`等待了${t}秒`);
          that.next();
        }, t * 1000);
      };
    })(time);
    this.taskList.unshift(fn);
    return this;
  }
  next() {
    const fn = this.taskList.shift();
    fn && fn();
  }
}
new LazyMan("tony").sleep(10).eat("lunch");
