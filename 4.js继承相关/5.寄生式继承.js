// var personObj = {
//   running: function () {
//     console.log("running");
//   },
// };

// function createStudent(name) {
//   var stu = Object.create(personObj);
//   stu.name = name;
//   stu.studying = function () {
//     console.log("studying~");
//   };
//   return stu;
// }

// var stuObj = createStudent("why");
// var stuObj1 = createStudent("kobe");
// var stuObj2 = createStudent("james");

var obj1 = {
  eating: function () {
    console.log("吃饭中Ing");
  },
};

function createPerson(name) {
  var newobj1 = Object.create(obj1);
  newobj1.name = name;
  newobj1.running = function () {
    console.log("跑步中");
  };
  return newobj1;
}

var t1 = createPerson("why");
var t2 = createPerson("hdf");
t1.eating();
t2.eating();
t1.running();
t2.running();
