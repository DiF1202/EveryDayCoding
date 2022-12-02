var name = "window";
const obj = {
  name: "obj",
  sayName: function () {
    console.log(this.name);
  },
};
obj.sayMyName = () => {
  console.log(this.name);
};
const fn1 = obj.sayName();
const fn2 = obj.sayMyName();
fn1(); // window
obj.sayName(); // obj
fn2(); // window
obj.sayMyName(); // window
