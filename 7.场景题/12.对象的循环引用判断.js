const isCycleObject = (obj, parent) => {
  const parentArr = parent || [obj];
  for (let i in obj) {
    if (typeof obj[i] === "object") {
      let flag = false;
      parentArr.forEach((pObj) => {
        if (pObj === obj[i]) {
          flag = true;
        }
      });
      if (flag) return true;
      flag = isCycleObject(obj[i], [...parentArr, obj[i]]);
      if (flag) return true;
    }
  }
  return false;
};
//对象循环引用得判断。
const a = 1;
const b = { a };
const c = { b };
const o = { d: { a: 3 }, c };
o.c.b.aa = a;

console.log(isCycleObject(o));
