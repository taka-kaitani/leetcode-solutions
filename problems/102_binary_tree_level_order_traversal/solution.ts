/**
 * LeetCode Problem: 102. Binary Tree Level Order Traversal
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 *
 * Solution by Takanori Kaitani
 */
function levelOrder(root: TreeNode | null): number[][] {
    const res: number[][] = [];
    if (!root) return res;

    let curr: TreeNode[] = [root];
    while (curr.length > 0) {
        const next: TreeNode[] = [];
        const level: number[] = [];
        for (const node of curr) {
            level.push(node.val);
            if (node.left) next.push(node.left);
            if (node.right) next.push(node.right);
        }
        res.push(level);
        curr = next;
    }

    return res;
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
 * - Iterative BFS (level-order traversal).
 * - Maintain:
 *   - `curr`: nodes in the current level
 *   - `next`: nodes in the next level
 *   - `level`: values collected from `curr`
 * - For each level, collect values and build `next`, then move to the next level.
 *
 * # Complexity
 * - Time:  O(n)
 * - Space: O(w) where w is the maximum width of the tree (worst-case O(n))
 */
