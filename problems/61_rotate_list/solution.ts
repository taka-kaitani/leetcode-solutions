/**
 * LeetCode Problem: 61. Rotate List
 * https://leetcode.com/problems/rotate-list/
 *
 * Solution by Takanori Kaitani
 */
function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || !head.next) return head;

    let tail = head;
    let n = 1;
    while (tail.next) {
        n++;
        tail = tail.next;
    }

    k %= n;
    if (k === 0) return head;

    tail.next = head;

    const stepsToNewTail = n - k - 1;
    let newTail = head;
    for (let i = 0; i < stepsToNewTail; i++) {
        newTail = newTail.next!;
    }

    const newHead = newTail.next!;
    newTail.next = null;
    return newHead;
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
 * - First pass: find the length `n` and the tail node.
 * - Reduce rotations: `k %= n`. If k == 0, return head.
 * - Make the list circular: `tail.next = head`.
 * - Find `newTail` at index `n - k - 1` (0-indexed) from the original head.
 * - `newHead = newTail.next`.
 * - Break the cycle: `newTail.next = null`.
 * - Return `newHead`.
 *
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1)
 */
