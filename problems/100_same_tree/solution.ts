/**
 * LeetCode Problem: 100. Same Tree
 * https://leetcode.com/problems/same-tree/
 *
 * Solution by Takanori Kaitani
 */
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p || !q) return !p && !q;
    if (p.val !== q.val) return false;

    return (
        isSameTree(p.left, q.left) &&
        isSameTree(p.right, q.right)
    );
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
 * - Recursive DFS to check whether two binary trees are identical.
 * - At each pair of nodes (p, q):
 *   - If both are null, they match.
 *   - If only one is null, they differ.
 *   - If values differ, return false.
 *   - Otherwise, recurse on left children and right.
 *
 * # Complexity
 * - Let n be the number of nodes.
 * - Time:  O(n)
 * - Space: O(h) recursion stack, where h is the tree height
 *   (O(log n) for balanced, O(n) for skewed).
 */
