//原型式继承
// 利用一个空对象作为中介，将某个对象直接赋值给空对象构造函数的原型。
function create(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

// Object.create
// 缺点:
// ● 原型链继承多个实例的引用类型属性指向相同，存在篡改的可能。
// ● 无法传递参数
