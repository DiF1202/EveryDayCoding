function myNew(fn, ...args) {
  if (Object.prototype.toString.call(fn) !== '[object Function]') {
    throw 'Error in params';
  }
  //1.定义一个空对象
  const obj = {};
  //2.隐式原型指向构造函数的显式原型
  //   let __proto__ = Object.getPrototypeOf(obj);
  //   __proto__ = Object.create(fn.prototype);
  // obj.__proto__ = Object.create(fn.prototype);
  obj.__proto__ = Object.create(obj, fn.prototype);

  //3.执行构造函数,this指向空对象
  let ret = fn.call(obj, ...args);

  //对返回值做个保护判断
  return ret instanceof Object ? ret : obj;
}

//test

function Person(name, age) {
  this.name = name;
  this.age = age;
}
let person1 = myNew(Person, '张三', 15);
console.log(person1);

let person2 = new Person('李四', 15);
console.log(person2);

function myNew(fn, ...args) {
  if (Object.prototype.toString.call(fn) !== '[object Function]') {
    throw 'Error in params';
  }
  let obj = {};
  obj = Object.create(fn.prototype);
  let ret = fn.call(obj, ...args);
  return ret instanceof Object ? ret : obj;
}
