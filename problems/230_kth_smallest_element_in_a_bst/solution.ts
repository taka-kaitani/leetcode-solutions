/**
 * LeetCode Problem: 230. Kth Smallest Element in a BST
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
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

function kthSmallest(root: TreeNode | null, k: number): number {
    let count = 0;
    let stack: TreeNode[] = [];
    let curr = root;

    while (stack.length || curr) {
        // Go left as far as possible
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }

        // Visit node
        curr = stack.pop()!;
        count++;
        if (count === k) return curr.val;

        // Move to right subtree
        curr = curr.right;
    }

    return -1; // This won't occur
};

/**
 * # Approach
 * - Use an **iterative inorder traversal** to visit nodes in ascending order.
 * - Maintain a stack to simulate recursion.
 * - Increment a counter each time a node is visited.
 * - Once the counter reaches `k`, return that node’s value (the k-th smallest element).
 *
 * # Complexity
 * - Time:  O(h + k), where h is the tree height.
 * - Space: O(h)
 *   - O(log n) for a balanced tree
 *   - O(n) for a skewed tree
 */
