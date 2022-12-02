//利用promise实现一个sleep函数

const sleep = (times) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, times);
  }).then(() => {
    console.log("11");
  });
};

sleep();

