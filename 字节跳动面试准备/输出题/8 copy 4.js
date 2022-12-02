window.name = "ByteDance";
function A() {
  this.name = 123;
}
A.prototype.getA = function () {
  return this.name + 1;
};
let a = new A();
let funcA = a.getA;
console.log(funcA()); //ByteDance1
console.log(a.getA()); //124
