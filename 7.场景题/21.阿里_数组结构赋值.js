// ++++++++++++++++++++++++++++++++++++++++++++++++++++
/**
 * 题目四：解构赋值
 * 请实现一个通用的Array解构赋值方法 destructuringArray，
 * 可将目标数组（targetArray）通过ES6的解构格式（formater），输出解构结果对象
 */

// Example
destructuringArray = function (targetArray, formater) {
  // write code here
  const strArr = formater.slice(1, formater.length - 1).split(",");
  let resObj = {};
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i][0] === "[") {
      console.log("111");
      resObj = { ...resObj, ...destructuringArray(targetArray[i], strArr[i]) };
    } else {
      resObj[strArr[i]] = targetArray[i];
    }
  }
  return resObj;
};
let result = destructuringArray([1, [2, 3], 4], "[a,[b],c]");
console.log(result);
// result： { a:1, b:2, c:4 }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
