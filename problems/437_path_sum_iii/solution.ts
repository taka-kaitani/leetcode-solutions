/**
 * LeetCode Problem: 437. Path Sum III
 * https://leetcode.com/problems/path-sum-iii/
 *
 * Solution by Takanori Kaitani
 */
function pathSum(root: TreeNode | null, targetSum: number): number {
    const prefixSums = new Map<number, number>();
    prefixSums.set(0, 1);
    return dfs(root, targetSum, prefixSums, 0);
};

function dfs(
    node: TreeNode | null,
    targetSum: number,
    prefixSums: Map<number, number>,
    currentSum: number
): number {
    if (!node) return 0;

    currentSum += node.val;
    const countHere = prefixSums.get(currentSum - targetSum) ?? 0;
    prefixSums.set(currentSum, (prefixSums.get(currentSum) ?? 0) + 1);

    const left  = dfs(node.left,  targetSum, prefixSums, currentSum);
    const right = dfs(node.right, targetSum, prefixSums, currentSum);

    prefixSums.set(currentSum, prefixSums.get(currentSum)! - 1);
    return countHere + left + right;
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
 * - Use a Depth-First Search (DFS) to count all paths whose node values sum to `targetSum`.
 * - Maintain a hash map `prefixSums` where:
 *     - The key is a cumulative sum from the root to the current node.
 *     - The value is how many times this sum has occurred along the current traversal path.
 * - For each node:
 *     1. Add the current node’s value to the running `currentSum`.
 *     2. The number of valid paths ending at this node equals
 *        `prefixSums.get(currentSum - targetSum)` (the number of times a prefix sum existed
 *        that would make the path sum to `targetSum`).
 *     3. Record the current sum in `prefixSums`, then recurse to children.
 *     4. Backtrack (decrement the count of the current sum) before returning
 *        to avoid polluting sibling subtrees.
 *
 * # Complexity
 * - Time:  O(n), where n is the number of nodes in the tree.
 * - Space: O(h), where h is the height of the tree
 *          (O(log n) for balanced, O(n) for skewed trees).
 */
