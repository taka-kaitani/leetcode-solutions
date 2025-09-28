/**
 * LeetCode Problem: 450. Delete Node in a BST
 * https://leetcode.com/problems/delete-node-in-a-bst/
 *
 * Solution by Takanori Kaitani
 */
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) return null;

    if      (key < root.val) root.left = deleteNode(root.left, key);
    else if (key > root.val) root.right =  deleteNode(root.right, key);
    else {
        if (!root.right) return root.left;
        if (!root.left) return root.right;

        // Search for a successor
        let succ = root.right;
        while (succ.left) succ = succ.left;
        root.val = succ.val;
        root.right = deleteNode(root.right, succ.val);
    }

    return root;
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