/**
 * LeetCode Problem: 236. Lowest Common Ancestor of a Binary Tree
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 *
 * Solution by Takanori Kaitani
 */
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
    if (!root || root === p || root === q) return root;

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (!left) return right;
    if (!right) return left;

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

/**
 * # Approach
 * - Use a recursive depth-first search (DFS) to find the lowest common ancestor (LCA).
 * 
 * - For each node `root`, the function returns:
 *   - `null` if neither `p` nor `q` in found in its subtree.
 *   - `p` of `q` if one of them is found in its subtree.
 *   - The LCA node if both `p` and `q` are found in different branches of its left and right subtree.
 * 
 * - Reference:
 *   - Base case:
 *     - If `root` is `null`, return `null`.
 *     - If `root` is `p` or `q`, return `root`.
 *   - Recursively compute:
 *     - `left = lowestCommonAncestor(root.left, p, q)`
 *     - `right = lowestCommonAncestor(root.right, p, q)`
 *   - If `left` is `null`, return `right` since left subtree doesn't have `p` or `q` or the LCA.
 *   - If `right` is `null`, return `left` for the same reason.
 *   - Otherwise, return `root` as the LCA because both `left` and `right` are non-null.
 * 
 * # Complexity
 * - Time: O(n) where n is number of nodes
 * - Space: O(h) where h is the height of tree, O(log n) for balanced, O(n) for skewed tree.
 */
