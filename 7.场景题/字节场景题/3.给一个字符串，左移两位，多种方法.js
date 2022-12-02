let str = "hdfhdfhdf";

// function changeStr(str) {
//   let temp = str.substr(0, 2);
//   return str.substr(2, str.length) + temp;
// }

function changeStr(str) {
  let arr = str.split("");
  let temp = arr.splice(0, 2);
  return [...arr, ...temp].join("");
}

console.log(changeStr(str));
