var sortList = function (head) {
  //特判
  if (!head) return null;
  //全部切断
  let s = [];
  while (head) {
    let t = head.next;
    head.next = null;
    s.push(head);
    head = t;
  }
  //排序
  s.sort((a, b) => a.val - b.val);
  //重组
  for (let i = 0; i < s.length - 1; i++) {
    s[i].next = s[i + 1];
  }
  return s[0];
};
