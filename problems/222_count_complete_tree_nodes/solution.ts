/**
 * LeetCode Problem: 222. Count Complete Tree Nodes
 * https://leetcode.com/problems/count-complete-tree-nodes/
 *
 * Solution by Takanori Kaitani
 */
function countNodes(root: TreeNode | null): number {
    if (!root) return 0;

    let hLeft = 0;
    let node: TreeNode | null = root;
    while (node) {
        hLeft++;
        node = node.left;
    }

    let hRight = 0;
    node = root;
    while (node) {
        hRight++;
        node = node.right;
    }

    if (hLeft === hRight) return (2 ** hLeft) - 1;

    return countNodes(root.left) + countNodes(root.right) + 1;
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
 * - Leverage the "complete binary tree" property.
 * - Compute:
 *   - `hLeft`: height by following left pointers from `root`
 *   - `hRight`: height by following right pointers from `root`
 * - If `hLeft === hRight`, the subtree is a perfect binary tree,
 *   so its node count is `2^hLeft - 1`.
 * - Otherwise, recurse on left and right subtrees and add 1 for the root.
 *
 * # Complexity
 * - Time:  O((log n)^2)
 * - Space: O(log n) (recursion stack)
 */
