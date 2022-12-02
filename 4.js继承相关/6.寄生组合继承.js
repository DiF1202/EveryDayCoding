// 整体思路
// 1.盗用构造函数 .call
// 2.原型赋值   Object.create()
// 3.修改constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.running = function () {
  console.log("我会跑");
};

function Student(name, age, Number) {
  Person.call(this, name, age); //核心代码
  this.Number = Number;
}

inheritPrototype(Student, Person);

//原型赋值+修改constructor
function inheritPrototype(children, parent) {
  children.prototype = Object.create(parent.prototype);
  // children.prototype.constructor = children;
  Object.defineProperty(children.prototype, "constructor", {
    value: children,
    enumerable: false,
    configurable: true,
    writable: true,
  });
}

var stu1 = new Student("hdf", 20, 123456);
console.log(stu1);
stu1.running();
