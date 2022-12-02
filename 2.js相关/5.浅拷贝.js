//方法1 调用Object.assign({},{})

// const _shallowClone = (target) => {
//   // 补全代码
//   return Object.assign({}, target);
// };

//方法2 写一个简单循环
const _shallowClone = (target) => {
  // 补全代码
  const newObj = {};
  for (const key in target) {
    newObj[key] = target[key];
  }
  return newObj;
};
