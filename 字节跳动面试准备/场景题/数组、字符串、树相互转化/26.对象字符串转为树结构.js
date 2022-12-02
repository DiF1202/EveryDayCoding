let strarr = {
  "a-b-c-d": 1,
  "a-b-c-e": 2,
  "a-b-f": 3,
  "a-j": 4,
};
// let obj = {
//   a: {
//     b: {
//       c: {
//         d: 1,
//         e: 2,
//       },
//       f: 3,
//     },
//     j: 4,
//   },
// };

function objectToTree(str) {
  let resObj = {};
  for (let key in str) {
    const arr = key.split("-");
    const len = arr.length;
    const val = str[key];
    let res = resObj;
    for (let i = 0; i < len - 1; i++) {
      if (!res[arr[i]]) res[arr[i]] = {};
      res = res[arr[i]];
    }
    res[arr[len - 1]] = val;
  }
  return resObj;
}

console.log(objectToTree(strarr));
