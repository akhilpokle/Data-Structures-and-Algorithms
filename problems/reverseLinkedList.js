/**********************************************************************
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

**********************************************************************/

function reverseList(head) {
    var prev = null;
    while (head) {
        var next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}
