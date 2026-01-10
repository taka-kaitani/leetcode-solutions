/**
 * LeetCode Problem: 129. Sum Root to Leaf Numbers
 * https://leetcode.com/problems/sum-root-to-leaf-numbers/
 *
 * Solution by Takanori Kaitani
 */
function sumNumbers(root: TreeNode | null): number {
    function dfs(node: TreeNode | null, curr: number): number {
        if (!node) return 0;

        const next = 10 * curr + node.val;
        if (!node.left && !node.right) return next;

        return dfs(node.left, next) + dfs(node.right, next);
    }

    return dfs(root, 0);
}

/**
 * Definition for a binary tree node.
 */
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
 * - DFS with numeric accumulation.
 * - Maintain:
 *   - `curr`: the number represented by the path from the root to the current node.
 * - At each node:
 *   - Update `next = curr * 10 + node.val`.
 *   - If the node is a leaf, `next` is one completed root-to-leaf number -> add it.
 *   - Otherwise, keep exploring left/right and sum their results.
 *
 * # Complexity
 * - Time:  O(n)  (each node is visited once)
 * - Space: O(h)  recursion stack, where h is the tree height
 */
