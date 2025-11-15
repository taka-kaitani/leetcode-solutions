/**
 * LeetCode Problem: 450. Delete Node in a BST
 * https://leetcode.com/problems/delete-node-in-a-bst/
 *
 * Solution by Takanori Kaitani
 */
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) return null;

    if      (root.val > key) root.left = deleteNode(root.left, key);
    else if (root.val < key) root.right = deleteNode(root.right, key);
    else {
        // Delete this node
        if (!root.left) return root.right;
        if (!root.right) return root.left;

        // Find inorder successor
        let succ = root.right;
        while (succ.left) succ = succ.left;

        root.val = succ.val;
        root.right = deleteNode(root.right, succ.val);
    }

    return root;
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
 * - Use recursion to locate and delete the node with value `key`.
 * - Once the node is found:
 *   - If it has only one child, return that child directly.
 *   - If it has two children, replace its value with its inorder successor
 *     (the smallest value in its right subtree), then delete the successor.
 * - Ensure each recursive call returns the updated subtree so parent pointers remain correct.
 *
 * # Complexity
 * - Time:  O(h), where h is the height of the BST.
 *          O(log n) for balanced trees, O(n) for skewed trees.
 * - Space: O(h) recursion stack.
 */
