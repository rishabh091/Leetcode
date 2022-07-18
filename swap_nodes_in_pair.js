/**
 * Given a linked list, swap every two adjacent nodes and return its head.
 * You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
 * 
 * Input: head = [1,2,3,4]
 * Output: [2,1,4,3]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    if (!head) return head
    
    let temp = head.val
    let ptr = head
    
    while (ptr && ptr.next) {
        temp = ptr.next.val
        ptr.next.val = ptr.val
        ptr.val = temp
        
        ptr = ptr.next.next
    }
    
    return head
};

/**
 * Explanation:
 * 
 * Check head is null, if true return head
 * Iterate through ptr and ptr.next, swapping values of 2 nodes,
 * Travserse linkedlist skipping 1 element.
 * Return head
 */