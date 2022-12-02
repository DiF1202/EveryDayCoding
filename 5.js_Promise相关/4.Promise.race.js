function myPromiseRace(promises) {
  if (!Array.isArray(promises)) {
    throw new Error("promises are not Array");
  }
  return new Promise((resolve, reject) => {
    promises.forEach((p) => {
      Promise.resolve(p).then(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  });
}

let testArr = [Promise.resolve(3), Promise.resolve(44)];
// console.log(Array.isArray(testArr));
let p = myPromiseRace(testArr);
console.log(p);
setTimeout(function () {
  console.log("the stack is now empty");
  console.log(p);
});
