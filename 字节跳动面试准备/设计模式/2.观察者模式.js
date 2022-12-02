class EventEmitter {
  constructor() {
    this.eventMap = {};
  }

  on(event, fn) {
    if (!this.eventMap[event]) this.eventMap[event] = [];
    this.eventMap[event].push(fn);
  }

  emit(event, ...args) {
    this.eventMap[event]?.forEach((fn) => {
      fn.call(null, ...args);
    });
  }

  off(event, fn) {
    if (!this.eventMap[event]) return;
    this.eventMap[event] = this.eventMap[event].filter((cn) => fn !== cn);
  }

  once(event, fn) {
    const callback = (...args) => {
      fn(...args);
      this.off(event, callback);
    };
    this.on(event, callback);
  }
}

let s1 = new EventEmitter();
let f1 = function (name, age) {
  console.log(name, age);
};
let f2 = function (name, age) {
  console.log("hello", name, age);
};
// s1.on("aaa", f1);
// s1.once("aaa", f1);
// s1.on("aaa", f1);
// s1.on("aaa", f2);
// s1.on("bbb", f2);
// s1.off("bbb", f2);
// s1.emit("aaa", "张三", 19);
// s1.emit("aaa", "张三", 19);
// s1.emit("aaa", "张三", 20);
