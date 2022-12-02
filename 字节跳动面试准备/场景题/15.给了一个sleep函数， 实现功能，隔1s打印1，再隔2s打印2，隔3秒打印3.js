//给了一个sleep函数， 实现功能，隔1s打印1，再隔2s打印2，隔3秒打印3
function sleep(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, timeout);
  });
}

//async+await实现
async function main() {
  // 写代码
  await sleep(1000);
  console.log(1);
  await sleep(2000);
  console.log(2);
  await sleep(3000);
  console.log(3);
  main();
}

//不是很优雅的实现
function print() {
  sleep(1000)
    .then(() => {
      console.log(1);
      return sleep(2000);
    })
    .then(() => {
      console.log(2);
      return sleep(3000);
    })
    .then(() => {
      console.log(3);
      print();
    });
}

print();
