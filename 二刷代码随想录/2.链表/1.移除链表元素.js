var removeElements = function (head, val) {
  const ret = new ListNode(0, head); //创建虚拟节点
  let cur = ret; //工具人cur;

  while (cur.next) {
    if (cur.next.val == val) {
      cur.next = cur.next.next;
      continue;
    }
    cur = cur.next;
  }

  return ret.next;
};
