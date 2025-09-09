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
 * Determines whether two binary trees are leaf-similar.
 * 
 * Two trees are considered leaf-similar if the sequence of their leaf values,
 * read from left to right, is identical.
 * 
 * @param root1 The root node of the first binary tree
 * @param root2 The root node of the second binary tree
 * @returns True if both trees are leaf-similar; otherwise, false.
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
