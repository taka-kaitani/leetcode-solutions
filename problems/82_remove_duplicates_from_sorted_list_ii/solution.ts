/**
 * LeetCode Problem: 82. Remove Duplicates from Sorted List II
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
 *
 * Solution by Takanori Kaitani
 */
function deleteDuplicates(head: ListNode | null): ListNode | null {
    const dummy = new ListNode(0, head);
    let prev = dummy;
    let curr = head;
    while (curr) {
        let duplicated = false;
        while (curr.next && curr.next.val === curr.val) {
            duplicated = true;
            curr = curr.next;
        }

        if (duplicated) prev.next = curr.next;
        else            prev = curr;
        curr = curr.next;
    }

    return dummy.next;
}

/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


/**
 * # Approach
 * - Use a dummy head to handle cases where the original head must be removed.
 * - Maintain two pointers:
 *   `prev`: last node that is confirmed to be kept in the result list
 *   `curr`: scans the list to detect duplicate runs
 * - For each run of equal values:
 *   - If the run length > 1, link `prev.next` to the node after the run (skip all duplicates).
 *   - Otherwise, advance prev to keep the single node.
 * 
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1)
 */
