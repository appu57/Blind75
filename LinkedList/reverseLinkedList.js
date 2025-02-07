class LinkedList {
    constructor(value, next) {
        this.value = (value == undefined ? 0 : value);
        this.next = (next == undefined ? null : next);
    }
}

var reverseLinkedList = function (head) {
    const prev = null;
    const curr = head;
    while (curr.next != null) {
       const next = curr.next;
       curr.next = prev; //reverse the pointer(next) of curr to point to prev
       prev = curr;//move the prev and curr by 1 index
       curr = next;//move the prev and curr by 1 index
    }
    return prev;
}