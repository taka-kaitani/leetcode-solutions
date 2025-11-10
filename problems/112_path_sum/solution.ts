/**
 * LeetCode Problem: 112. Path Sum
 * https://leetcode.com/problems/path-sum/
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) return false;

    const nextTarget = targetSum - root.val;
    if (nextTarget === 0 && !root.left && !root.right) return true;

    const left  = hasPathSum(root.left, nextTarget);
    const right = hasPathSum(root.right, nextTarget);

    return left || right;
}

/**
 * # Approach
 * - Use a DFS to determine whether given the binary tree has a root-to-leaf
 *   that adding up all the values along the path equals `targetSum`.
 * 
 * # Complexity
 * - Time:  O(n) where n is the number of the nodes
 * - Space: O(h) where h is the height of the tree
 *   - O(log n) for balanced trees, O(n) for skewed trees
 */
