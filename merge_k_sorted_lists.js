/**
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it.
 * 
 * Input: lists = [[1,4,5],[1,3,4],[2,6]]
 * Output: [1,1,2,3,4,4,5,6]
 * Explanation: The linked-lists are:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * merging them into one sorted list:
 * 1->1->2->3->4->4->5->6
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    function sortList(l1, l2) {
        if (!l1) return l2
        if (!l2) return l1
        
        if (l1.val < l2.val) {
            l1.next = sortList(l1.next, l2)
            return l1
        }
        else {
            l2.next = sortList(l1, l2.next)
            return l2
        }
    }
    
    if (!lists.length) return null
    
    let ans = lists[0]
    for (let i = 1; i < lists.length; i++) {
        ans = sortList(ans, lists[i])
    }
    
    return ans
};

/**
 * Explanation:
 * 
 * Write a function to merge 2 sorted linked lists.
 * Create a list equal to 0 index list present in input array.
 * Traverse through all list and sort and merge list present in ith position with starting list.
 * The end list will be the merged lists of all sorted lists.
 */