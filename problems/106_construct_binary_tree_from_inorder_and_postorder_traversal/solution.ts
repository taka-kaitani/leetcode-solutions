/**
 * LeetCode Problem: 106. Construct Binary Tree from Inorder and Postorder Traversal
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 *
 * Solution by Takanori Kaitani
 */
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    const n = inorder.length;
    if (n === 0) return  null;

    // Map value -> index in inorder for O(1) splits
    const inIdx = new Map<number, number>();
    for (let i = 0; i < n; i++) inIdx.set(inorder[i], i);

    let post = n - 1;

    function helper(inLeft: number, inRight: number): TreeNode | null {
        if (inLeft > inRight) return null;

        const rootVal = postorder[post--];
        const root = new TreeNode(rootVal);
        const mid = inIdx.get(rootVal)!;

        root.right = helper(mid + 1, inRight);
        root.left = helper(inLeft, mid - 1);

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
 * - Postorder visits: left -> right -> root.
 * - Inorder visits:   left -> root -> right.
 * - Scan `postorder` from the end:
 *   - The next unused element is always the root of the current subtree.
 * - Use a hash map (value -> inorder index) to split the inorder range into
 *   left and right subtrees in O(1).
 * - Recursively build subtrees using inorder index ranges (no array slicing):
 *   - Build the right subtree first, then the left subtree (because we consume postorder backwards).
 *
 * # Complexity
 * - Time:  O(n)  (each node is processed once; inorder index lookup is O(1))
 * - Space: O(n)  for the hash map + O(h) recursion stack (h = tree height)
 */
