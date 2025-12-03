/**
 * LeetCode Problem: 450. Delete Node in a BST
 * https://leetcode.com/problems/delete-node-in-a-bst/
 *
 * Solution by Takanori Kaitani
 */
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) return null;

    if (root.val < key)     root.right = deleteNode(root.right, key);
    else if (root.val > key) root.left = deleteNode(root.left, key);
    else {
        if (!root.left) return root.right;
        if (!root.right) return root.left;

        let succ = root.right!;
        while (succ.left) succ = succ.left;
        const accVal = succ.val;
        root.val = accVal;
        root.right = deleteNode(root.right, accVal);
    }

    return root;
}

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
 * - Use a recursive approach to delete the target node from the BST while
 *   preserving the BST property.
 *
 * - Base case:
 *   - If `root` is null, there is nothing to delete; return null.
 *
 * - Recursive cases:
 *   - If `root.val < key`, the target node (if it exists) must be in the right subtree,
 *     so recursively delete from `root.right`.
 *   - If `root.val > key`, the target node must be in the left subtree,
 *     so recursively delete from `root.left`.
 *   - If `root.val === key`, we have found the node to delete:
 *     - If the node has at most one child:
 *       - If `root.left` is null, return `root.right`.
 *       - If `root.right` is null, return `root.left`.
 *     - If the node has two children:
 *       - Find the in-order successor by taking the leftmost node in the right subtree.
 *       - Copy the successor's value into the current node (`root.val`).
 *       - Recursively delete the successor node from the right subtree.
 *
 * # Complexity
 * - Let `h` be the height of the tree and `n` the number of nodes.
 * - Time:  O(h), because we follow at most one path down the tree.
 *          O(log n) for a balanced tree, O(n) for a skewed tree.
 * - Space: O(h) due to recursion stack.
 *          O(log n) for a balanced tree, O(n) for a skewed tree.
 */
