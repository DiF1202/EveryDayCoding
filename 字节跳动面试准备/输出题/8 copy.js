let value = 1;
function foo() {
  console.log(value);
}
function bar() {
  let value = 2;
  foo();
}
bar(); //1
