/**
 * LeetCode Problem: 86. Partition List
 * https://leetcode.com/problems/partition-list/
 *
 * Solution by Takanori Kaitani
 */
function partition(head: ListNode | null, x: number): ListNode | null {
    let small = new ListNode(0);
    let large = new ListNode(0);
    let nodeS = small;
    let nodeL = large;
    let curr = head;
    while (curr) {
        if (curr.val < x) {
            nodeS.next = curr;
            nodeS = nodeS.next;
        } else {
            nodeL.next = curr;
            nodeL = nodeL.next;
        }
        curr = curr.next;
    }
    nodeL.next = null;
    nodeS.next = large.next;

    return small.next;
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
 * - Use two dummy heads to build two lists:
 *   - `small`: nodes with value < x
 *   - `large`: nodes with value >= x
 * - Maintain tail pointers for both lists to append in O(1).
 * - Traverse the original list:
 *   - If curr.val < x, append curr to `small`.
 *   - Else, append curr to `large`.
 * - Terminate the `large` list (set its tail.next = null) to avoid cycles,
 *   then connect smallTail.next = largeHead.next.
 *
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1) extra
 */
