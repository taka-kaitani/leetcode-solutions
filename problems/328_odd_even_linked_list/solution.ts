/**
 * LeetCode Problem: 328. Odd Even Linked List
 * https://leetcode.com/problems/odd-even-linked-list/
 *
 * Solution by Takanori Kaitani
 */
function oddEvenList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    let evenHead: ListNode | null = head.next;
    let odd:  ListNode | null = head;
    let even: ListNode | null = evenHead;

    while (even && even.next) {
        // Remove the even node from `odd`
        odd.next = even.next;
        odd = odd.next;

        // Add the even node into `even`
        even.next = odd.next;
        even = even.next;
    }

    odd.next = evenHead;
    return head;
};

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

// test input
let inputArr: number[] = [1,2,3,4,5,6];

// test code
let input = new ListNode(inputArr[0]);
let inputRoot = input;
const n = inputArr.length;
for (let i = 1; i < n; i++) {
    inputRoot.next = new ListNode(inputArr[i]);
    inputRoot = inputRoot.next;
}

function listToArray(node: ListNode | null): number[] {
    if (!node) return [];

    let res: number[] = [];
    let root: ListNode | null = node;
    while (root) {
        res.push(root.val);
        root = root.next;
    }

    return res;
}

// test output
console.log(listToArray(oddEvenList(input)));