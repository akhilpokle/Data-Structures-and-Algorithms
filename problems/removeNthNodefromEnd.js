var removeNthFromEnd = function(head, n) {
    let fast = head;
    let slow = head;
    while(n-- > 0){
          fast = fast.next;
    }
    let prev = null;
    while(fast != null){
        fast = fast.next;
        prev = slow;
        slow = slow.next;
    }
    if(prev == null){
        return head.next;
    }
    prev.next = slow.next;
    slow.next = null;
    return head;

};
