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
 * - The first element of preorder is the root.
 * - Find that root value in inorder to split the tree into left and right subtrees.
 * - Recursively build left and right subtrees using the corresponding subarrays.
 *
 * # Complexity
 * - Time:  O(n^2) worst case (linear search in inorder per recursion + slicing)
 * - Space: O(n^2) worst case due to creating subarrays (plus recursion stack)
 */
