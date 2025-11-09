/**
 * LeetCode Problem: 98. Validate Binary Search Tree
 * https://leetcode.com/problems/validate-binary-search-tree/
 *
 * Solution by Takanori Kaitani
 */

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

function isValidBST(root: TreeNode | null): boolean {
    if (!root) return true;

    const currVal = root.val;
    return (
        dfs(root.left, -Infinity, currVal) &&
        dfs(root.right, currVal, Infinity)
    );
};

function dfs(root: TreeNode | null, low: number, high: number): boolean {
    if (!root) return true;

    const currVal = root.val;
    if (currVal <= low || currVal >= high) return false;

    return (
        dfs(root.left, low, currVal) &&
        dfs(root.right, currVal, high)
    );
}

/**
 * # Approach
 * - Use DFS recursion with value boundaries
 *   to verify whether the given Binary Tree satisfies BST properties.
 * 
 * # Complexity
 * - Time:  O(n) where n is the number of nodes
 * - Space: O(h)
 *   - where h is the height of the tree.
 *   - O(log n) for balanced tree, O(n) for skewed tree.
 */
