/**
 * LeetCode Problem: 700. Search in a Binary Search Tree
 * https://leetcode.com/problems/search-in-a-binary-search-tree/
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

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    while (root !== null && root.val !== val) {
        root = root.val < val ? root.right : root.left;
    }
    return root;
};
