function debounce(fn, delay) {
  // 1.定义一个定时器, 保存上一次的定时器
  let timer = null;
  let flag = true;
  // 2.真正执行的函数
  const _debounce = function (...args) {
    // 取消上一次的定时器
    if (timer) clearTimeout(timer);
    // 延迟执行
    if (flag) {
      fn.apply(this, args);
      flag = false;
    }
    timer = setTimeout(() => {
      // 外部传入的真正要执行的函数
      fn.apply(this, args);
    }, delay);
  };
  return _debounce;
}

// function debounce(fn, delay) {
//   let timer = null;
//   const _debounce = function (...args) {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.call(this, ...args);
//     }, delay);
//   };
//   return _debounce;
// }

function debounce(fn, delay) {
  let timer = null;
  const _debounce = function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, ...args);
    }, delay);
  };
  return _debounce;
}
