class LinkedList {
    constructor(value, next) {
        this.value = (value == undefined ? 0 : value);
        this.next = (next == undefined ? null : next);
    }
}

const mergeKLists = (lists) => {
    if (!lists || lists.length === 0) return null;
  
    while (lists.length > 1) {
      let mergedLists = [];
  
      for (let i = 0; i < lists.length; i += 2) {
        list1 = lists[i];
        list2 = i + 1 < lists.length ? lists[i + 1] : null;
  
        mergedLists.push(mergeTwoLists(list1, list2));//merge two lists at once
      }
  
      lists = mergedLists;
    }
  
    return lists[0];
};

const mergeSortedLinkedListRecursive = function(head1 , head2){
    if(head1 == null) { return head2 ;} //return only the pointer not complete list
    if(head2 == null ){ return head1 ;}
    if(head1.val < head2.val){
        head1.next = mergeSortedLinkedListRecursive(head1.next , head2);
        return head1;
    }else{
        head2.next = mergeSortedLinkedListRecursive(head1 , head2.next);
        return head2;
    }
}

// 1->2->4
// 1->3->4


// (1 < 1) false === else [1.next = 1->2->3->4->4 so l2 = 1->1->2->3->4->4]​

//     1.next = (1,3)​

// (1<2)  true === if    [1.next = 2->3->4->4 so l1 = 1->2->3->4->4]​ returns 1->2->3->4->4

//     1.next = (2,3)​

// (2<3) true === if     [2.next = 3->4->4  so l1 = 2->3->4->4] returns ​2->3->4->4

//      2.next = (4,3)​

// (4<3) false=== else [3.next = 4->4 so l2 =3->4->4] returns 3->4->4​

//      3.next = (4,4)​

// (4<4) false === else  [4.next = 4    so l2 =4->4 ] returns 4->4​

//       4.next = (4,null)​

// ​

// ​

// Return because l2 was null so return l1 where l1 was 4