let obj = {
  val: 14,
  left: {
    val: 4,
    left: {
      val: 5,
      left: null,
      right: null,
    },
    right: {
      val: 8,
      left: null,
      right: null,
    },
  },
  right: {
    val: 7,
    left: {
      val: 7,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
};
const getMinN = (root, n) => {
  let stack = [root];
  let i = 0,
    j = 0;
  let map = new Map();
  while (stack.length) {
    let len = stack.length;
    i++;
    while (len--) {
      const n = stack.shift();
      j++;
      map.set({ val: n.val }, [i, j]);
      if (n.left) stack.push(n.left);
      if (n.right) stack.push(n.right);
    }
    j = 0;
  }
  // 得到排序的map数据
  let sortArr = [...map.entries()].sort((a, b) => a[0].val - b[0].val);
  // 找到一样的
  let ans = sortArr.filter(
    (item, index, arr) => index >= n - 1 && arr[n - 1][0].val == item[0].val
  );
  // 加工一波
  ans = ans.map((item) => item[1]);
  return ans;
};
console.log(getMinN(obj, 4));
