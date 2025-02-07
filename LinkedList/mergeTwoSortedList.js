class LinkedList {
    constructor(value, next) {
        this.value = (value == undefined ? 0 : value);
        this.next = (next == undefined ? null : next);
    }
}

const mergeSortedLinkedList = function(head1 , head2) {
    let dummy = new LinkedList(-1);//never use head of any linkedlist directly
    let temp = dummy;
    while(head1 != null && head2 != null){
        if(head1.val < head2.val){
            temp.next = head1;
            head1 = head1.next;
        }else{
            temp.next = head2;
            head2 = head2.next;
        }
        temp = temp.next;
    }
    temp.next = head1 == null? head2 : head1;//if head1 is shorter then attach the rest of head2
    return dummy.next;
}
// https://github.com/maddhruv/leetcode-blind-75-javascript/blob/main/merge-two-sorted-lists.js

const mergeSortedLinkedListRecursive = function(head1 , head2){
    if(!head1 || !head2) return head1 || head2;//which is not null is returned
    if(head1.val < head2.val){
        head1.next = mergeSortedLinkedListRecursive(head1.next , head2);
        return head1;
    }else{
        head2.next = mergeSortedLinkedListRecursive(head1 , head2.next);
        return head2;
    }
}