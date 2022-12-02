function myPromiseRace(promises) {
  if (Array.isArray(promises)) {
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
