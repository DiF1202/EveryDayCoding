function Person() {}
let p = new Person();
// 写出p与Person的关系（尽可能多） ↓我的回答
console.log(p.__proto__ === Person.prototype); // true
console.log(p.constructor === Person); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(p instanceof Person); // true
console.log(p instanceof Object); // true
