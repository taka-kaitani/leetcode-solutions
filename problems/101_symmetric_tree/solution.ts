/**
 * LeetCode Problem: 101. Symmetric Tree
 * https://leetcode.com/problems/symmetric-tree/
 *
 * Solution by Takanori Kaitani
 */
function isSymmetric(root: TreeNode): boolean {
    if (!root) return false;
    let currL = [root.left];
    let currR = [root.right];
    while (currL.length > 0 || currR.length > 0) {
        if (currL.length !== currR.length) return false;
        const n = currL.length;

        // Compare left and right layers
        for (let i = 0; i < n; i++) {
            const l = currL[i];
            const r = currR[n - 1 - i];
            if (!l && !r) continue;
            if (!l || !r) return false;
            if (l.val !== r.val) return false;
        }

        // Build the next layers
        const nextL = [];
        const nextR = [];
        for (const l of currL) {
            if (!l) continue;
            nextL.push(l.left);
            nextL.push(l.right);
        }
        for (const r of currR) {
            if (!r) continue;
            nextR.push(r.left);
            nextR.push(r.right);
        }
        currL = nextL;
        currR = nextR;
    }

    return true;
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
 * - Iterative BFS by levels to check whether the tree is symmetric.
 * - Maintain two arrays for each level (including nulls to preserve structure):
 *   - `currL`: nodes from the left subtree in left-to-right order
 *   - `currR`: nodes from the right subtree in left-to-right order
 * - For each level, compare nodes in mirror positions:
 *   - `currL[i]` must match `currR[n - 1 - i]` (both null, or both non-null with same value).
 * - Build the next level arrays from current nodes and repeat.
 * - If all levels match, the tree is symmetric.
 *
 * # Complexity
 * - Time:  O(n)
 * - Space: O(w) where w is the maximum width of the tree (worst-case O(n))
 */
