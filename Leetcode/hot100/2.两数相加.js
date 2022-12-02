var addTwoNumbers = function (l1, l2) {
    //虚拟头节点
    let ret = new ListNode(-1);

    let p = ret;

    //进位
    let carry = 0;
    //开始执行加法，两条链表走完且没有进位时才能结束循环
    while (l1 != null || l2 != null || carry > 0) {
        // 先加上上次的进位
        let val = carry;
        if (l1 != null) {
            val += l1.val;
            l1 = l1.next;
        }
        if (l2 != null) {
            val += l2.val;
            l2 = l2.next;
        }
        // 处理进位情况
        carry = Math.floor(val / 10);
        val = val % 10;
        // 构建新节点
        p.next = new ListNode(val);
        p = p.next;
    }
    return ret.next
};
