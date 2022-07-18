/**
 * Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 * 
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 function mergeTwoLists(list1, list2) {
    if (!list1) return list2
    if (!list2) return list1
    
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    }
    else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }
};

/**
 * Explanation
 * 
 * If value of one list doesn't exists (means you are at the end) return the other list as it might have elements left
 * check the smallest value and send recurse through the whole array by using next element of array having smallest element.
 */