/**
 * LeetCode Problem: 113. Path Sum II
 * https://leetcode.com/problems/path-sum-ii/
 *
 * Solution by Takanori Kaitani
 */
function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    const res: number[][] = [];
    const path: number[] = [];

    function pushTargetToRes(root: TreeNode | null, remain: number): void {
        if (!root) return;

        path.push(root.val);
        remain -= root.val;
        if (remain === 0 && !root.left && !root.right) {
            // Add the path to result array
            res.push([...path]);
        } else {
            pushTargetToRes(root.left, remain);
            pushTargetToRes(root.right, remain);
        }

        path.pop(); // backtrack
    }

    pushTargetToRes(root, targetSum);

    return res;
};

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
 * - Perform a depth-first search (DFS) traversal.
 * - Maintain the current path and remaining sum at each node.
 * - When reaching a leaf where the remaining sum is zero, add a copy of the path to the result.
 * - Use backtracking to reuse the same path array and reduce memory allocations.
 *
 * # Complexity
 * - Time:  O(n), where n is the number of nodes.
 * - Space: O(h), where h is the height of the tree.
 *   - Recursive call stack + current path.
 */
