/**
 * LeetCode Problem: 872. Leaf-Similar Trees
 * https://leetcode.com/problems/leaf-similar-trees/
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

/**
 * Return whether two given trees are leaf-similar.
 * They are leaf-similar when if their leaf value sequence is the same.
 * 
 * @param root1
 * @param root2
 * @returns 
 */
function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    return arraysEqual(dfs(root1, []), dfs(root2, []));
};

function dfs(root: TreeNode | null, leaves: number[]): number[] {
    if (root === null) return [];

    if (root.left === null && root.right === null) {
        leaves.push(root.val);
        return leaves;
    }

    if (root.left !== null)  leaves = dfs(root.left, leaves);
    if (root.right !== null) leaves = dfs(root.right, leaves);

    return leaves;
}

function arraysEqual(arr1: number[], arr2: number[]): boolean {
    const n :number = arr1.length;
    if (n !== arr2.length) return false;

    for (let i = 0; i < n; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }

    return true;
}
