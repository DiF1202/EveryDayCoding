//实现一个观察者模式,拥有四个方法on,off,once,trigger

class EventEmitter {
  constructor() {
    //定义一个容器
    this.arrayList = {};
  }
  //=>订阅消息
  on(name, fn) {
    if (this.arrayList[name] && !this.arrayList[name].includes(fn)) {
      this.arrayList[name].push(fn);
    } else {
      this.arrayList[name] = [fn];
    }
  }
  //=>移除消息
  off(name, fn) {
    if (this.arrayList[name]) {
      let index = this.arrayList[name].indexOf(fn);
      this.arrayList[name].splice(index, 1);
      console.log(this.arrayList);
    }
  }
  //=>发布消息
  emit(name, once = false, ...args) {
    if (this.arrayList[name]) {
      let task = [...this.arrayList[name]];
      for (let key of task) {
        key.call(this, ...args);
      }
      if (once) {
        delete this.arrayList[name];
      }
    }
  }
}
let s1 = new EventEmitter();
let f1 = function (name, age) {
  console.log(name, age);
};
let f2 = function (name, age) {
  console.log("hello", name, age);
};
s1.on("aaa", f1);
s1.on("aaa", f1);
s1.on("aaa", f2);
s1.on("bbb", f2);
s1.off("bbb", f2);
s1.emit("aaa", true, "张三", 19);
