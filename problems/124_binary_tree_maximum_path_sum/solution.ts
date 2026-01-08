/**
 * LeetCode Problem: 124. Binary Tree Maximum Path Sum
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/
 *
 * Solution by Takanori Kaitani
 */
function maxPathSum(root: TreeNode | null): number {
    function dfs(node: TreeNode | null): [number, number] {
        if (!node) return [-Infinity, 0];

        const [bestL, bestFromNodeL] = dfs(node.left);
        const [bestR, bestFromNodeR] = dfs(node.right);

        const left = Math.max(0, bestFromNodeL);
        const right = Math.max(0, bestFromNodeR);

        const bestFromNode = node.val + Math.max(left, right);
        const throughNode = node.val + left + right;
        const best = Math.max(throughNode, bestL, bestR);

        return [best, bestFromNode];
    }

    return dfs(root)[0];
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
 * - DFS that returns two values for each node:
 *   - `best`: maximum path sum anywhere in this subtree
 *   - `bestFromNode`: maximum path sum of a path that starts at this node and goes downward
 *     (so it can be extended by the parent; it chooses at most one child branch).
 * - Base case for null:
 *   - best = -Infinity (so it won’t be chosen as an answer)
 *   - bestFromNode = 0 (no contribution to parent)
 * - Transition:
 *   - left  = max(0, bestFromNodeL)
 *   - right = max(0, bestFromNodeR)
 *   - bestFromNode = node.val + max(left, right)
 *   - throughNode  = node.val + left + right   // path using both sides
 *   - best = max(bestL, bestR, throughNode)
 *
 * # Complexity
 * - Time:  O(n)
 * - Space: O(h) recursion stack (h = tree height; worst-case O(n))
 */
