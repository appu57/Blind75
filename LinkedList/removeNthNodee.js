class LinkedList {
    constructor(value, next) {
        this.value = (value == undefined ? 0 : value);
        this.next = (next == undefined ? null : next);
    }
}

const remove = function(head , index){
    const dummy = new LinkedList(-1,head);
    const fast = dummy;
    const slow = dummy;
    const temp = head;
    const length =0;
    // while(temp != null){
    //     length++;
    //     temp = temp.next;
    // }
    while(index-- > 0){
        fast = fast.next;
    }
    while(fast != null){
        slow = slow.next;
        fast = fast.next
    }
    slow.next = slow.next.next;
    return dummy.next;
}