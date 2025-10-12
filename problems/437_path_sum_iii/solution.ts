/**
 * LeetCode Problem: 437. Path Sum III
 * https://leetcode.com/problems/path-sum-iii/
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

function pathSum(root: TreeNode | null, targetSum: number): number {
    const prefixCount = new Map<number, number>();
    prefixCount.set(0, 1);

    function dfs(root: TreeNode | null, currSum: number): number {
        if (!root) return 0;

        currSum += root.val;
        let count = prefixCount.get(currSum - targetSum) ?? 0;

        prefixCount.set(currSum, (prefixCount.get(currSum) ?? 0) + 1);
        count += dfs(root.left, currSum);
        count += dfs(root.right, currSum);

        // backtrack
        prefixCount.set(currSum, prefixCount.get(currSum)! - 1);

        return count;
    }

    return dfs(root, 0);
};