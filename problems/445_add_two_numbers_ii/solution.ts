/**
 * LeetCode Problem: 445. Add Two Numbers II
 * https://leetcode.com/problems/add-two-numbers-ii/
 *
 * Solution by Takanori Kaitani
 */
function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode | null {
    let num1 = 0n;
    let node1: ListNode | null = l1;
    while (node1) {
        num1 = num1 * 10n + BigInt(node1.val);
        node1 = node1.next;
    }

    let num2 = 0n;
    let node2: ListNode | null = l2;
    while (node2) {
        num2 = num2 * 10n + BigInt(node2.val);
        node2 = node2.next;
    }

    let resNum = num1 + num2;
    if (resNum === 0n) return new ListNode(0, null);

    let head = null;
    while (resNum > 0) {
        const digit = resNum % 10n;
        head = new ListNode(Number(digit), head);
        resNum /= 10n;
    }

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
 * - Convert l1 and l2 into BigInts and sum up them (resNum).
 * - Create new ListNode for each digit of resNum.
 * 
 * # Complexity
 * - Time:  O(m + n)
 * - Space: O(m + n)
 */
