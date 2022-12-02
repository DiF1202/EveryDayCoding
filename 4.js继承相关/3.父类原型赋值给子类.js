// 父类: 公共属性和方法
function Person(name, age, friends) {
  // this = stu
  this.name = name;
  this.age = age;
  this.friends = friends;
}

Person.prototype.eating = function () {
  console.log(this.name + " eating~");
};

// 子类: 特有属性和方法
function Student(name, age, friends, sno) {
  Person.call(this, name, age, friends);
  // this.name = name
  // this.age = age
  // this.friends = friends
  this.sno = 111;
}

// 直接将父类的原型赋值给子类, 作为子类的原型
Student.prototype = Person.prototype;

Student.prototype.studying = function () {
  console.log(this.name + " studying~");
};

// name/sno
var stu = new Student("why", 18, ["kobe"], 111);
console.log(stu);
stu.eating();

// 1.引用对象不会互相影响。传参问题解决
// 缺点:父类构造函数被调用了两次，给子类元素上造成了一些没必要存在的元素。
