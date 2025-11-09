/**
 * LeetCode Problem: 235. Lowest Common Ancestor of a Binary Search Tree
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
    const minVal = Math.min(p.val, q.val);
    const maxVal = Math.max(p.val, q.val);
    let curr = root;
    while (curr) {
        if      (curr.val > maxVal) curr = curr.left;
        else if (curr.val < minVal) curr = curr.right;
        else return curr; // LCA
    }

    return null; // This won't occur
};

/**
 * # Approach
 * - Use the BST property to locate the LCA:
 *   - If both `p` and `q` are smaller than the current node, move left.
 *   - If both are larger, move right.
 *   - Otherwise, return current node is the split point => the LCA.
 * 
 * # Complexity
 * - Time:  O(h) h is the height of the tree
 *   - O(log n) for a balanced tree
 *   - O(n) for a skewed tree
 * - Space: O(1)
 */
