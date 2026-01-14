/**
 * LeetCode Problem: 148. Sort List
 * https://leetcode.com/problems/sort-list/
 *
 * Solution by Takanori Kaitani
 */
function tmp(head: ListNode | null): ListNode | null {
    const listNodes: ListNode[] = [];
    let node: ListNode | null = head;
    while (node) {
        listNodes.push(node);
        node = node.next;
    }

    listNodes.sort((a, b) => a.val - b.val);

    let dummy = new ListNode();
    node = dummy;
    for (const ln of listNodes) {
        ln.next = null;
        node.next = ln;
        node = ln;
    }

    return dummy.next;
}

function sortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    // 1) Split the list into two halves
    const mid = split(head);

    // 2) Sort each half
    const left = sortList(head);
    const right = sortList(mid);

    // 3) Merge sorted halves
    return merge(left, right);
}

/**
 * Split the list into [head ...] and [mid ...]
 * Returns the head of the second half (mid).
 */
function split(head: ListNode): ListNode | null {
    let slow: ListNode = head;
    let fast: ListNode | null = head;
    let prev: ListNode | null = null;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next!;
        fast = fast.next.next;
    }

    // cut the list
    if (prev) prev.next = null;

    return slow; // head of second half
}

/** Merge two sorted linked lists */
function merge(a: ListNode | null, b: ListNode | null): ListNode | null {
    const dummy = new ListNode(0);
    let tail = dummy;

    while (a && b) {
        if (a.val <= b.val) {
            tail.next = a;
            a = a.next;
        } else {
            tail.next = b;
            b = b.next;
        }
        tail = tail.next;
        tail.next = null; // keep links clean (optional but safe)
    }

    tail.next = a ?? b;
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

const h = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))));
sortList(h);

/**
 * # Approach
 * - 
 * 
 * # Complexity
 * - Time:  O()
 * - Space: O()
 */
