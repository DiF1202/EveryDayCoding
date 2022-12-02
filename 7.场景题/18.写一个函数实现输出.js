// 输入50a6we8y20x
// 输出50个a，6个we，8个y，20个x
function getStr(str) {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 0 && str[i] <= 9) {
      res.push(str[i]);
    } else {
      let count = Number(res.join(""));

      while (count > 0) {
        console.log(str[i]);
        count--;
      }
      count = 0;
      res = [];
    }
  }
}

const printStr = (str) => {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 0 && str[i] <= 9) {
      res.push(str[i]);
    } else {
      let count = Number(res.join(""));
      while (count > 0) {
        console.log(str[i]);
        count--;
      }
      count = 0;
      res = [];
    }
  }
};

printStr("50a6we8y20x");
