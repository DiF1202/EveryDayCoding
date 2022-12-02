//给Common这个类 加上类型判断 要求能判断正则 Date等...
//类型判断函数
var Common = {
  //write on here
  getType: function (obj) {
    //对null进行类型判断
    if (obj === null) {
      return "null";
    }
    //对其他类型进行处理
    const get_type = (obj) => {
      return Object.prototype.toString
        .call(obj)
        .replace("[object ", "")
        .replace("]", "")
        .toLowerCase();
    };
    //基本数据类型用type进行判断，其他用刚刚封装好的那个判断，null的话已经单独处理了所以不怕
    return typeof obj === "object" ? get_type(obj) : typeof obj;
  },
};

console.log(Common.getType(1));
console.log(Common.getType("str"));
console.log(Common.getType([]));
console.log(Common.getType(new Date()));
