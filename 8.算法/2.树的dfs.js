//前序遍历
var previousTraversal = function (root, res = []) {
  if (!root) return res;
  res.push(root.val);
  previousTraversal(root.left, res);
  previousTraversal(root.right, right);
  return res;
};

//中序遍历
var midTraversal = function (root, res = []) {
  if (!root) return res;
  midTraversal(root.left, (res = []));
  res.push(root.val);
  midTraversal(root.right, (res = []));
  return res;
};

//后序遍历
var postTraversal = function (root, res = []) {
  if (!root) return res;
  postTraversal(root.left, res);
  postTraversal(root.right, res);
  res.push(root.val);
  return res;
};
