/**
 * LeetCode Problem: 117. Populating Next Right Pointers in Each Node II
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
 *
 * Solution by Takanori Kaitani
 */
function connect(root: _Node | null): _Node | null {
    if (!root) return null;

    let levelHead: _Node | null = root; // leftmost node of the current level

    while (levelHead) {
        const dummy = new _Node(0);     // dummy head for the next level
        let tail: _Node = dummy;        // tail pointer to build the next level list
        let node: _Node | null = levelHead;
        while (node) {
            if (node.left) {
                tail.next = node.left;
                tail = tail.next;
            }
            if (node.right) {
                tail.next = node.right;
                tail = tail.next;
            }
            node = node.next;
        }

        tail.next = null;          // terminate next level
        levelHead = dummy.next;    // move down to the next level
    }

    return root;
}

/**
 * Definition for _Node.
 */
class _Node {
    val: number
    left: _Node | null
    right: _Node | null
    next: _Node | null

    constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
        this.next = (next===undefined ? null : next)
    }
}


/**
 * # Approach
 * - Level-by-level traversal without extra queue.
 * - Maintain:
 *   - `levelHead`: leftmost node of the current level
 *   - `dummy`: dummy head for the next level (dummy.next becomes the next level's head)
 *   - `tail`: tail pointer to append children into the next level list
 * - For each level:
 *   - Walk nodes in the current level using `node = node.next`.
 *   - Append `node.left` then `node.right` to the next level list if they exist.
 *   - Move down: `levelHead = dummy.next`.
 *
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1) extra
 */
