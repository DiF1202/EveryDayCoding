//数据整理的题目
const obj = {
  data: [
    ['xiaoming', 'male', '18', 'beijing', '2020-01-02'],
    ['xiaofang', 'female', '18', 'shanghai', '2020-03-02']
  ],
  columns: [
    { name: 'name', note: '' },
    { name: 'gender', note: '' },
    { name: 'age', note: '' },
    { name: 'address', note: '' },
    { name: 'registerTime', note: '' }
  ]
};
function format(obj) {
  const { data, columns } = obj;
  const res = [];
  data.forEach(arr => {
    let resObj = {};
    for (let i = 0; i < arr.length; i++) {
      resObj[columns[i].name] = arr[i];
    }
    res.push(resObj);
  });
  return res;
}

function format(obj) {
  const { data, columns } = obj;
  const res = [];
  data.forEach(arr => {
    let resObj = {};
    for (let i = 0; i < arr.length; i++) {
      resObj[columns[i].name] = arr[i];
    }
    res.push(resObj);
  });
  return res;
}
gm;

console.log(format(obj));
// 输出下面结果
// [
//     { name: 'xiaoming', 'gender': 'male', age: '18', address: 'beijing', registerTime: '2020-01-02' },

//     { name: 'xiaofang', 'gender': 'female', age: '18', address: 'shanghai', registerTime: '2020-03-02' },
// ]
