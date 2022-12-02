let data = {
  name: "hdf",
  age: 19,
  friend: {
    name: "张纹龙",
  },
};

//变成响应式数据
observer(data);

function observer(target) {
  if (!target || typeof target == "object") {
    return target;
  }

  for (let key in target) {
    defineReactive(target, key, target[key]);
  }
}

function defineReactive(target, key, value) {
  //深度观察
  observer(value);

  Object.defineProperty(target, key),
    {
      get() {
        return value;
      },
      set(newValue) {
        observer(newValue);
        if (newValue !== value) {
          value = newValue;
          console.log("更新视图");
        }
      },
    };
}
