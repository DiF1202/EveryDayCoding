class LinkNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Initialize your data structure here.
 * 单链表 储存头尾节点 和 节点数量
 */
var MyLinkedList = function () {
  this._size = 0;
  this._tail = null;
  this._head = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.getNode = function (index) {
  if (index < 0 || index >= this._size) return null;
  // 创建虚拟头节点
  let cur = new LinkNode(0, this._head);
  // 0 -> head
  while (index-- >= 0) {
    cur = cur.next;
  }
  return cur;
};
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this._size) return -1;
  // 获取当前节点
  return this.getNode(index).val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new LinkNode(val, this._head);
  this._head = node;
  this._size++;
  if (!this._tail) {
    this._tail = node;
  }
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new LinkNode(val, null);
  this._size++;
  if (this._tail) {
    this._tail.next = node;
    this._tail = node;
    return;
  }
  this._tail = node;
  this._head = node;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this._size) return;
  if (index <= 0) {
    this.addAtHead(val);
    return;
  }
  if (index === this._size) {
    this.addAtTail(val);
    return;
  }
  // 获取目标节点的上一个的节点
  const node = this.getNode(index - 1);
  node.next = new LinkNode(val, node.next);
  this._size++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this._size) return;
  if (index === 0) {
    this._head = this._head.next;
    // 如果删除的这个节点同时是尾节点，要处理尾节点
    if (index === this._size - 1) {
      this._tail = this._head;
    }
    this._size--;
    return;
  }
  // 获取目标节点的上一个的节点
  const node = this.getNode(index - 1);
  node.next = node.next.next;
  // 处理尾节点
  if (index === this._size - 1) {
    this._tail = node;
  }
  this._size--;
};
