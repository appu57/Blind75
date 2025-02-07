class LinkedList {
    constructor(value, next) {
        this.value = (value == undefined ? 0 : value);
        this.next = (next == undefined ? null : next);
    }
}
const detectCycle = function(head){
    const fast = head;
    const slow = head;
    while(fast != slow){
        fast = fast.next.next;
        slow = slow.next;
        if(fast == slow){
            return true;
        }
    }
    return false;
}