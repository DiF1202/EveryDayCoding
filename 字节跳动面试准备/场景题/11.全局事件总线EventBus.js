// 全局事件总线 EventBus - 单例模式
// 观察者模式：定义对象间一种一对多的依赖关系，使得每当一个对象改变状态，则所有依赖它的对象都会得到通知并自动更新
// 某对象注册一个事件，在发生某些变化时发出(emit)该事件，其他监听(on)了该事件的对象提供回调函数，在事件发生时被调用

const EventBus = {
  subs: {},
  //=>订阅消息
  on(event, fn) {
    if (!this.subs[event]) this.subs[event] = [];
    this.subs[event].push(fn);
  },
  //=>发布消息
  emit(event, ...args) {
    if (this.subs[event]) {
      this.subs[event].forEach((fn) => fn(...args));
    }
  },
  //只能执行一次
  once(event, fn) {
    const callback = (...args) => {
      fn(...args);
      this.off(event, callback);
    };
    this.on(event, callback);
  },
  //=>移除消息
  off(event, fn) {
    if (this.subs[event]) {
      const index = this.subs[event].indexOf(fn);
      if (index !== -1) this.subs[event].splice(index, 1);
    }
  },
};

// 测试

EventBus.on("hello", (name) => console.log("hello", name));
EventBus.emit("hello", "bytedance"); // hello dasen

// const fn = (name) => console.log("你好", name);
// EventBus.on("你好", fn);
// EventBus.emit("你好", "大森"); // 你好 大森
// EventBus.off("你好", fn);
// EventBus.emit("你好", "大森"); // (无事发生)

// EventBus.once("你好", fn);
// EventBus.emit("你好", "大森"); // 你好 大森
// EventBus.emit("你好", "大森"); // (无事发生)
