class Tree {
  constructor(val, left, right) {
    this.left = left == undefined ? null : left;
    this.right = right == undefined ? null : right;
    this.val = val == undefined ? 0 : val;
  }
}
// 后续遍历求节点和
function treeNode(root) {
  if (!root) {
    return 0;
  }
  // console.log(root.val);
  let left = treeNode(root.left); //一直遍历到左子树的叶子节点，由于叶子节点无左节点了，也就是其左节点为null了已经，所以就会返回0
  let right = treeNode(root.right); // 返回0
  let sum = left + right + root.val; //拿到以当前节点为根的树的和
  console.log(sum);
  return sum;
}
let tree = new Tree(1, new Tree(2, new Tree(4), new Tree(5)), new Tree(3));
console.log(treeNode(tree));

//后序遍历
var postTraversal = function (root, sum = 0) {
  if (!root) return sum;
  postTraversal(root.left, sum);
  postTraversal(root.right, sum);
  sum += root.val;
  return sum;
};

//后序遍历求树结点的和
