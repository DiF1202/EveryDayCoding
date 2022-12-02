//  后序遍历就是天然的回溯过程，最先处理的一定是叶子节点。
//  这题后序遍历 左右根
var lowestCommonAncestor = function (root, p, q) {
  // 使用递归的方法
  // 需要从下到上，所以使用后序遍历
  // 1. 确定递归的函数
  const travelTree = function (root, p, q) {
    // 2. 确定递归终止条件
    if (root === null || root === p || root === q) {
      return root;
    }
    // 3. 确定递归单层逻辑
    let left = travelTree(root.left, p, q);
    let right = travelTree(root.right, p, q);
    if (left !== null && right !== null) {
      return root;
    }
    if (left === null) {
      return right;
    }
    return left;
  };
  return travelTree(root, p, q);
};

//二叉树的最近公共祖先
