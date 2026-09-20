/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        // stack can be used here.
        if (!head) return null;

        let sequence: ListNode[] = [];
        let trav = head;

        while(trav != null){
            sequence.push(trav);
            trav = trav.next;
        }

        head = sequence.pop();
        trav = head;

        while(sequence.length > 0){
            let node = sequence.pop();
            trav.next = node;
            trav = trav.next;
        }
        
        if (trav) trav.next = null;

        return head;
    }
}
