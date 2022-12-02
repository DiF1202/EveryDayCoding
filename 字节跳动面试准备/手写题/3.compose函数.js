//手写组合函数
//手写compose函数

const add1 = (x) => x + 1;
const mul3 = (x) => x * 3;
const div2 = (x) => x / 2;
// div2(mul3(add1(add1(0)))); //=>3

const operate = compose(div2, mul3, add1, add1);
// operate(0) //=>相当于div2(mul3(add1(add1(0))))
// operate(2) //=>相当于div2(mul3(add1(add1(2))))

function compose(...args) {
  return function composed(result) {
    // 拷贝一份保存函数的数组
    let list = args.slice();
    while (list.length > 0) {
      // 将最后一个函数从列表尾部拿出
      // 并执行它
      result = list.pop()(result);
    }
    return result;
  };
}
