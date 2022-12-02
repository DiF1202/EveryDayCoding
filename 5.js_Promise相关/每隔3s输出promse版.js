// //promise版本
// const printTime = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(new Date());
//       resolve();
//     }, 3000);
//   });
// };

// const fn = () => {
//   Promise.resolve()
//     .then(() => {
//       return printTime();
//     })
//     .then(() => {
//       return fn();
//     });
// };

// fn();

// // Promise版本
// for (let i = 0; i < 5; i++) {
//   Promise.resolve(i).then((result) => {
//     setTimeout(() => {
//       console.log(result);
//     }, time * result);
//   });
// }

// function print() {
//   Promise.resolve()
//     .then(() => {
//       setTimeout(() => {
//         console.log(new Date());
//       }, 1000);
//     })
//     .then(() => {
//       print();
//     });
// }

//大森版
function print() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(new Date());
      resolve();
    }, 3000);
  }).then(() => {
    print();
  });
}

print();
