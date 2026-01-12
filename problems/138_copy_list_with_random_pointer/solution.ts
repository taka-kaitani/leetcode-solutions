/**
 * LeetCode Problem: 138. Copy List with Random Pointer
 * https://leetcode.com/problems/copy-list-with-random-pointer/
 *
 * Solution by Takanori Kaitani
 */
function copyRandomList(head: _Node | null): _Node | null {
    if (!head) return null;

    const map = new Map<_Node, _Node>();

    // Create copy nodes
    let old: _Node | null = head;
    while (old) {
        map.set(old, new _Node(old.val));
        old = old.next;
    }

    // Wire up `next` and `random`
    old = head;
    while (old) {
        const copy = map.get(old)!;
        copy.next = old.next ? map.get(old.next)! : null;
        copy.random = old.random ? map.get(old.random)! : null;
        old = old.next;
    }

    return map.get(head)!;
}

/**
 * Definition for _Node.
 */
class _Node {
    val: number
    next: _Node | null
    random: _Node | null

    constructor(val?: number, next?: _Node, random?: _Node) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
        this.random = (random===undefined ? null : random)
    }
}

/**
 * # Approach
 * - Use a hash map to keep the correspondence between original nodes and copied nodes.
 * - Pass 1: create a copied node for each original node and store `map[old] = copy`.
 * - Pass 2: for each original node:
 *   - Set `copy.next` using `map[old.next]` (or null).
 *   - Set `copy.random` using `map[old.random]` (or null).
 * - Return `map[head]` as the copied head.
 *
 * # Complexity
 * - Time:  O(n)  (two linear passes)
 * - Space: O(n)  (hash map storing n nodes)
 */
