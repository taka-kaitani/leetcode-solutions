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
        let next = curr.next;
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
 * - Reverse the linked list in-place by re-wiring the `next` pointers.
 * - Maintain two pointers during traversal:
 *    - `prev`: the node that should come *after* the current node in the reversed list
 *    - `curr`: the node currently being processed
 *
 * - For each node:
 *    1. Temporarily store the next node (`next`)
 *    2. Reverse the link: make `curr.next` point to `prev`
 *    3. Move `prev` forward to `curr`
 *    4. Move `curr` forward to `next`
 *
 * - When traversal finishes, `prev` will be the new head of the reversed list.
 *
 * # Complexity
 * - Time:  O(n), because each node is processed exactly once.
 * - Space: O(1), because reversal is done in-place using only a few pointers.
 */
