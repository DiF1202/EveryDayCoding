class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.value = data;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  //根据给出的父节点，判断将新节点插在其左还是其右
  insertByFather(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left) {
        insertNode(node.left, newNode);
      } else {
        node.left = newNode;
      }
    } else {
      if (node.right) {
        insertNode(node.right, newNode);
      } else {
        node.right = newNode;
      }
    }
  }
  //创建并插入节点
  insert(value) {
    let node = new Node(value);
    if (this.root) {
      insertNode(this.root, node);
    } else {
      this.root = node;
    }
  }
  //前序遍历
  preOrder(node) {
    if (node) {
      console.log(node.valu);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
  //中序遍历
  inOrder(node) {
    if (node) {
      this.midOrder(node.left);
      console.log(node.value);
      this.midOrder(node.right);
    }
  }
  //后序遍历
  postOrder(node) {
    if (node) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value);
    }
  }
}
