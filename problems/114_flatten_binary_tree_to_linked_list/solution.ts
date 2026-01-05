/**
 * LeetCode Problem: 114. Flatten Binary Tree to Linked List
 * https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
 *
 * Solution by Takanori Kaitani
 */
function flatten(root: TreeNode | null): void {
    let prev: TreeNode | null = null;

    function dfs(node: TreeNode | null): void {
        if (!node) return;

        dfs(node.right);
        dfs(node.left);

        node.right = prev;
        node.left = null;
        prev = node;
    }

    dfs(root);
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
 * - Flatten the tree in-place using reverse preorder DFS (right -> left -> node).
 * - Maintain a pointer `prev`:
 *   - `prev` always points to the head of the already-flattened list
 *     (the part that should come AFTER the current node).
 * - DFS steps for each node:
 *   1) Flatten right subtree
 *   2) Flatten left subtree
 *   3) Rewire current node:
 *      - node.right = prev   (connect to the already-built list)
 *      - node.left = null    (required by the problem)
 *      - prev = node         (move the list head to current node)
 *
 * # Complexity
 * - Time:  O(n)  (each node is visited once)
 * - Space: O(h)  recursion stack, where h is the tree height
 */
