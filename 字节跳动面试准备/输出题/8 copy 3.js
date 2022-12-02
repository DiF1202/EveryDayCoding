const obj = {
  birth: 1990,
  getAge: function (year) {
    let fn = (y) => y - this.birth;
    return fn.call({ birth: 2000 }, year);
  },
};
console.log(obj.getAge(2020));
