/**
 * LeetCode Problem: 92. Reverse Linked List II
 * https://leetcode.com/problems/reverse-linked-list-ii/
 *
 * Solution by Takanori Kaitani
 */
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (left === right) return head;

    let prefix = null;
    let curr = head;
    for (let i = 1; i < left; i++) {
        prefix = curr;
        curr = curr!.next;
    }

    if (!curr) return head;

    // Reverse
    const end = curr;
    let prev = null;
    for (let i = left; i < right; i++) {
        const next: ListNode | null = curr!.next;
        curr!.next = prev;
        prev = curr!;
        curr = next;
    }

    // Combine all lists
    const next = curr!.next;
    curr!.next = prev;
    end.next = next;

    if (!prefix) return curr;

    prefix!.next = curr;
    return head;
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
 * - If left === right, nothing to reverse.
 * - Move `curr` to the node at position `left`, and keep:
 *   - `prefix`: the node just before `left` (null if left === 1)
 *   - `end`: the original node at `left` (it becomes the tail after reversal)
 * - Reverse the sublist from `left` to `right` by standard pointer reversal.
 * - Reconnect:
 *   - `end.next` points to the node after `right`
 *   - if `prefix` exists, `prefix.next` points to the new head of the reversed sublist
 *   - otherwise, the new head is the `right` node (`curr`)
 *
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1)
 */
