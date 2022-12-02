Promise.myReject = function (value) {
  return new Promise((_, reject) => {
    reject(value);
  });
};

// 测试一下
Promise.myReject(new Error("fail")).then(
  () => console.log("Resolved"),
  (err) => console.log("Rejected", err)
);

// Rejected Error: fail
//    at <anonymous>:9:18
