//其实本质就是闭包
const once = (fn) => {
  let tag = true;
  return () => {
    if (tag) {
      fn();
      tag = false;
    } else {
      return;
    }
  };
};

const print = () => {
  console.log("aaa");
};

onceFn = once(print);
onceFn();
onceFn();
onceFn();
//实现一个只执行一次函数
