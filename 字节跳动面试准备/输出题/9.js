// 伪代码，大概是这个意思
function Foo() {
  try {
    console.log(this);
    console.log(this.a);
  } catch (err) {}

  this.a = function () {
    console.log(2);
  };

  return Foo;
}

Object.prototype.a = function () {
  console.log(5);
};

obj.foo = function () {
  console.log(4);
};

obj.foo();
var obj = new Foo();
