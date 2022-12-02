let bfs = function (root) {
  let res = [],
    queue = [root];
  if (!root) return res;
  while (queue.length) {
    //记录当前层级节点数
    let length = queue.length;
    //创建一个空数组[] 来存放此层节点
    let curLevel = [];
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      curLevel.push(node.val);
      if (node?.left) queue.push(node.left);
      if (node?.right) queue.push(node.right);
    }
    //把每层的结果放到结果数组
    res.push(curLevel);
  }

  return res;
};
