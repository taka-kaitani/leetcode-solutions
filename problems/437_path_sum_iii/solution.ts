/**
 * LeetCode Problem: 437. Path Sum III
 * https://leetcode.com/problems/path-sum-iii/
 *
 * Solution by Takanori Kaitani
 */
function pathSum(root: TreeNode | null, targetSum: number): number {
    const prefixCount = new Map<number, number>();
    prefixCount.set(0, 1);
    let res = 0;

    /**
     * count up `res` when find the path which equals `targetSum`
     */
    function dfs(node: TreeNode | null, currSum: number): void {
        if (!node) return;
        currSum += node.val;

        res += prefixCount.get(currSum - targetSum) ?? 0;

        prefixCount.set(currSum, (prefixCount.get(currSum) ?? 0) + 1);

        if (node.left) dfs(node.left, currSum);
        if (node.right) dfs(node.right, currSum);

        // Backtracking
        prefixCount.set(currSum, prefixCount.get(currSum)! - 1);
    }

    dfs(root, 0);
    return res;
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
 * - Use depth-first search (DFS) to count all downward paths whose sums equal `targetSum`.
 *
 * - Maintain a map `prefixCount`:
 *   - key: prefix sum along the current root-to-node path
 *   - value: how many times this prefix sum has appeared on that path
 *
 * - DFS:
 *   - `currSum` represents the sum of values from the root to the current node.
 *   - Any path ending at the current node with sum `targetSum` satisfies
 *     `currSum - prevSum = targetSum`, so `prevSum = currSum - targetSum`.
 *   - If `prefixCount` contains `currSum - targetSum`, add its count to the result.
 *   - Increment the count for `currSum` in `prefixCount` before exploring children.
 *   - Recursively explore left and right subtrees with the updated `currSum`.
 *   - After returning from the children, decrement the count for `currSum`
 *     in `prefixCount` to backtrack and restore the state for other paths.
 *
 * # Complexity
 * - Let n be the number of nodes and h be the height of the tree.
 * - Time:  O(n), each node is visited once and we do O(1) work per node.
 * - Space: O(h) for recursion and prefix sums on the current path:
 *          O(log n) for a balanced tree, O(n) for a skewed tree.
 */
