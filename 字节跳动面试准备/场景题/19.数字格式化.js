//无小数版
const thousandSeparator = function (n) {
  //先转字符串
  n = n.toString();
  let count = 0;
  const arr = [];
  for (let i = n.length - 1; i >= 0; i--) {
    count++;
    if (count < 4) {
      arr.push(n[i]);
    } else {
      arr.push(...[".", n[i]]);
      count = 1;
    }
  }
  return arr.reverse().join("");
};

//有小数版

let format = (n) => {
  let num = n.toString(); // 转成字符串
  let intPart = ""; //整数
  let decimals = ""; //小数
  if (num.indexOf(".") != -1) {
    decimals = num.split(".")[1];
    intPart = num.split(".")[0];
  } else {
    intPart = num;
  }
  let count = 0;
  const res = [];
  for (let i = intPart.length - 1; i >= 0; i--) {
    count++;
    if (count < 4) {
      res.push(intPart[i]);
    } else {
      res.push(...[",", intPart[i]]);
      count = 1;
    }
  }
  return decimals.length == 0
    ? res.reverse().join("")
    : res.reverse().join("") + "." + decimals;
};

format(12323.33); // '12,323.33'
