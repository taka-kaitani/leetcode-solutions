/**
 * LeetCode Problem: 430. Flatten a Multilevel Doubly Linked List
 * https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
 *
 * Solution by Takanori Kaitani
 */
function flatten(head: _Node | null): _Node | null {
    if (head) flattenAndGetTail(head);
    return head;
}

function flattenAndGetTail(node: _Node): _Node {
    let curr: _Node | null = node;
    let tail: _Node = node;

    while (curr) {
        const next: _Node | null = curr.next;
        if (curr.child) {
            curr.next = curr.child;
            curr.child.prev = curr;

            tail = flattenAndGetTail(curr.child);
            tail.next = next;
            if (next) next.prev = tail;

            curr.child = null;
            curr = curr.next;
        } else {
            tail = curr;
            curr = next;
        }
    }

    return tail;
}

/**
 * Definition for _Node.
 */
class _Node {
    val: number
    prev: _Node | null
    next: _Node | null
    child: _Node | null

    constructor(val?: number, prev? : _Node, next? : _Node, child? : _Node) {
        this.val = (val===undefined ? 0 : val);
        this.prev = (prev===undefined ? null : prev);
        this.next = (next===undefined ? null : next);
        this.child = (child===undefined ? null : child);
    }
}

/**
 * # Approach
 * - Use a recursive approach to flatten a given node.
 * 
 * # Complexity
 * - Time:  O(n)
 * - Space: O(L) where L is the depth of child nodes.
 */
