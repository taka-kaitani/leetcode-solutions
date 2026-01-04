/**
 * LeetCode Problem: 105. Construct Binary Tree from Preorder and Inorder Traversal
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 *
 * Solution by Takanori Kaitani
 */
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const n = preorder.length;
    if (n === 0) return null;

    const inIdx = new Map<number, number>();
    for (let i = 0; i < n; i++) inIdx.set(inorder[i], i);

    let pre = 0;

    /**
     * Build subtree from inorder[inLeft, inRight]
     */
    function helper(inLeft: number, inRight: number): TreeNode | null {
        if (inLeft > inRight) return null;

        const rootVal = preorder[pre++];
        const root = new TreeNode(rootVal);
        const mid = inIdx.get(rootVal)!;

        root.left = helper(inLeft, mid - 1);
        root.right = helper(mid + 1, inRight);

        return root;
    }

    return helper(0, n - 1);
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
 * - Preorder visits: root -> left -> right.
 * - Inorder visits: left -> root -> right.
 * - The next unused element in preorder is always the current subtree root.
 * - Use a hash map from node value to its index in inorder to split the inorder range
 *   into left and right subtrees in O(1).
 * - Recursively build subtrees using inorder index ranges (no array slicing).
 *
 * # Complexity
 * - Time:  O(n)  (each node is processed once; inorder index lookup is O(1))
 * - Space: O(n)  for the hash map + O(h) recursion stack (h = tree height)
 */
