//迭代法
var reverseList = function (head) {
  if (!head || !head.next) return head;
  let temp = null,
    pre = null,
    cur = head;
  while (cur) {
    temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
};

//递归法
const reverse = (pre, head) => {
  if (!head) return pre;
  const temp = head.next;
  head.next = pre;
  pre = head;
  return reverse(pre, temp);
};
var reverseList = function (head) {
  return reverse(null, head);
};
