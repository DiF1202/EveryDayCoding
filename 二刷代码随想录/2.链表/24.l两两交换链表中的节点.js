var swapPairs = function (head) {
  //创建虚拟节点
  let ret = new ListNode(0, head);
  let cur = ret;

  while (cur.next && cur.next.next) {
    let cur = cur.next.next;
    let pre = cur.next;
    pre.next = cur.next;
    cur.next = pre;
    cur.next = cur;
    cur = pre;
  }

  return ret.next;
};
