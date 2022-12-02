// LC 24
// 两两交换链表中的节点
var swapPairs = function (head) {
  //创建虚拟节点
  let ret = new ListNode(0, head);
  let temp = ret;

  while (temp.next && temp.next.next) {
    let cur = temp.next.next;
    let pre = temp.next;
    pre.next = cur.next;
    cur.next = pre;
    temp.next = cur;
    temp = pre;
  }

  return ret.next;
};
