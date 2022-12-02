// function throttle(fn, interval) {
//   let lastTime = 0;
//   const _throttle = function (...args) {
//     const nowTime = new Date().getTime();
//     const remainTime = interval - (nowTime - lastTime);
//     if (remainTime <= 0) {
//       fn.call(...args);
//       lastTime = nowTime;
//     }
//   };
//   return _throttle;
// }
// 想想;判断下临界事件？比如鼠标抬起的时候再执行一次？
function throttle(fn, delay) {
  let last = 0;
  const _throttle = function (...args) {
    const now = new Date().getTime();
    if (now - last >= delay) {
      fn.call(this, ...args);
      last = now;
    }
  };
  return _throttle;
}

// 最后一次也能触发
function throttle(fn, delay) {
  let last = 0;
  let timer = null;
  const _throttle = function (...args) {
    const now = new Date().getTime();
    const temp = now - last;
    if (temp >= delay) {
      fn.call(this, ...args);
      last = now;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    } else if (!timer) {
      timer = setTimeout(() => {
        fn.call(this, ...args);
        timer = null;
      }, delay - temp);
    }
  };
  return _throttle;
}

// delay - (now - last);
// delay / 2;

// 时间也没达到 但是触发时间达到了 也进行
function throttle(fn, delay) {
  let last = 0;
  const _throttle = function (...args) {
    const now = new Date().getTime();
    if (now - last >= delay) {
      fn.call(this, ...args);
      last = now;
    }
  };
  return _throttle;
}
