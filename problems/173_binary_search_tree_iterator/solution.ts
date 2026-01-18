/**
 * LeetCode Problem: 173. Binary Search Tree Iterator
 * https://leetcode.com/problems/binary-search-tree-iterator/
 *
 * Solution by Takanori Kaitani
 */
class BSTIterator {
    private stack: TreeNode[] = [];

    private pushLeftSpine(start: TreeNode): void {
        let node: TreeNode | null = start;
        while (node) {
            this.stack.push(node);
            node = node.left;
        }
    }

    constructor(root: TreeNode | null) {
        if (root) this.pushLeftSpine(root);
    }

    next(): number {
        const curr = this.stack.pop()!;
        if (curr.right) this.pushLeftSpine(curr.right);

        return curr.val;
    }

    hasNext(): boolean {
        return this.stack.length > 0;
    }
}

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

/**
 * # Approach
 * - Use a stack to simulate an in-order traversal lazily.
 * - Invariant: the top of the stack is always the next smallest node to return.
 * - Initialization: push the left spine from the root (go left while pushing nodes).
 * - next():
 *   - Pop the top node `curr` (this is the next smallest).
 *   - If `curr` has a right child, push the left spine of `curr.right`
 *     to expose the next smallest nodes in that subtree.
 *   - Return `curr.val`.
 * - hasNext(): true if the stack is non-empty.
 *
 * # Complexity
 * - Space: O(h), where h is the tree height (stack holds a root-to-leaf path).
 * - Time:
 *   - next():
 *     - amortized O(1) (each node is pushed/popped at most once overall),
 *     - worst-case O(h) for a single call.
 *   - hasNext(): O(1)
 */
