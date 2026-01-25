/**
 * LeetCode Problem: 206. Reverse Linked List
 * https://leetcode.com/problems/reverse-linked-list/
 *
 * Solution by Takanori Kaitani
 */
function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let curr: ListNode | null = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}

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
 * - Iterative one-pass reversal.
 * - Maintain three pointers:
 *   - `prev`: head of the already-reversed part
 *   - `curr`: current node being processed
 *   - `next`: saved next node (so we don't lose the rest of the list)
 * - For each node:
 *   1) Save `next = curr.next`
 *   2) Reverse the link: `curr.next = prev`
 *   3) Advance: `prev = curr`, `curr = next`
 * - At the end, `prev` is the new head.
 *
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1)
 */
