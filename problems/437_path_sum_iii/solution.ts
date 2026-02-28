/**
 * LeetCode Problem: 437. Path Sum III
 * https://leetcode.com/problems/path-sum-iii/
 *
 * Solution by Takanori Kaitani
 */
function pathSum(root: TreeNode | null, targetSum: number): number {
    let currSum: number = 0;
    const prefixSumMap = new Map<number, number>(); // sum -> freq
    prefixSumMap.set(0, 1);
    let count = 0;

    function dfs(node: TreeNode | null): void {
        if (!node) return;

        // Check all paths that end at this node
        currSum += node.val;
        count += (prefixSumMap.get(currSum - targetSum) ?? 0)

        // Explore subtree
        prefixSumMap.set(currSum, (prefixSumMap.get(currSum) ?? 0) + 1);
        dfs(node.left);
        dfs(node.right);

        // backtrack
        prefixSumMap.set(currSum, prefixSumMap.get(currSum)! - 1);
        currSum -= node.val;
    }

    dfs(root);
    return count;
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
 * - Use DFS with a prefix sum map (sum -> frequency on current path).
 * - Initialize map with {0: 1} to handle paths starting from the root.
 * - At each node, `prefixSumMap.get(currSum - targetSum)` gives the number of
 *   valid paths ending at this node.
 * - Backtrack by decrementing the map entry on the way up.
 *
 * # Complexity
 * - Time: O(n)
 * - Space: O(n)
 */