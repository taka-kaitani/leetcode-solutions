/**
 * LeetCode Problem: 617. Merge Two Binary Trees
 * https://leetcode.com/problems/merge-two-binary-trees/
 *
 * Solution by Takanori Kaitani
 */
function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    if (!root1 || !root2) return root1 || root2;

    return new TreeNode(
        root1.val + root2.val,
        mergeTrees(root1.left, root2.left),
        mergeTrees(root1.right, root2.right)
    )
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
 * - Use a recursive approach to merge two binary trees.
 * - Base cases:
 *   - If both are null, return null.
 *   - If one of them is null, return the other non-null one.
 * - Return new tree which:
 *   - val   = root1.val + root2.val
 *   - left  = mergeTrees(root1.left, root2.left)
 *   - right = mergeTrees(root1.right, root2.right)
 * 
 * # Complexity
 * - Time:  O(m + n) where m, n is total node of root1 and root2
 * - Space: O(h) where h is the maximum height of root1 and root2
 */
