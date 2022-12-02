function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}

// 1.callback实现
const task = (timer, light, callback) => {
  setTimeout(() => {
    if (light === "red") {
      red();
    } else if (light === "green") {
      green();
    } else if (light === "yellow") {
      yellow();
    }
    callback();
  }, timer);
};
const step = () => {
  task(3000, "red", () => {
    task(2000, "green", () => {
      task(1000, "yellow", step);
    });
  });
};
step();

//promise实现
const task1 = (timer, light) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (light === "red") {
        red();
      } else if (light === "green") {
        green();
      } else if (light === "yellow") {
        yellow();
      }
      resolve();
    }, timer);
  });
const step1 = () => {
  task(3000, "red")
    .then(() => task(2000, "green"))
    .then(() => task(2100, "yellow"))
    .then(step);
};
step();

//结合async/await实现
const taskRunner = async () => {
  await task(3000, "red");
  await task(2000, "green");
  await task(2100, "yellow");
  taskRunner();
};
taskRunner();
