var obj = {
  a: {
    b: {
      c: 1,
      d: 1,
    },
  },
  e: {
    f: 1,
  },
};

// const res = {
//   "a.b.c": 1,
//   "a.b.d": 1,
//   "e.f": 1,
// };

function flat(obj) {
  let res = {};
  const stack = [];
  let temp = {};
  for (const key in obj) {
    if (key) {
      if (typeof key[value] == !"object") {
          stack.push(key);
          
      }
    }
  }
}

console.log(flat(obj));

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// // 1 2 4 3 5 7 6 8 9

// const getNum = (n) => {

// }
