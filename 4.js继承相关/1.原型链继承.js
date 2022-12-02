function Person() {
  this.name = "why";
}
Person.prototype.eating = function () {
  console.log(this.name + "正在吃饭");
};
function Student() {
  this.sno = 111;
}
Student.prototype = new Person(); //核心语句
Student.prototype.sleepting = function () {
  console.log(this.name + "正在睡觉");
};
let stu = new Student();
stu.eating();

// 缺点
// 1.打印子类实例，子类继承到的属性是永远看不见得
// 2.多个实例对引用类型的操作会被篡改。
// 比如创建出来了两个实例。两个实例的属性中 有引用数据类型，一方的改变可能会影响另外一个实例上的引用数据类型。
// 3.前端实现类的过程中都没有传递参数。
