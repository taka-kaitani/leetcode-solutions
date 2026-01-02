/**
 * LeetCode Problem: 103. Binary Tree Zigzag Level Order Traversal
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 *
 * Solution by Takanori Kaitani
 */
function zigzagLevelOrder(root: TreeNode | null): number[][] {
    const res: number[][] = [];
    if (!root) return res;

    let curr: TreeNode[] = [root];
    let reverse = false;
    while (curr.length) {
        const vals: number[] = [];
        const next: TreeNode[] = [];
        while (curr.length) {
            const node = curr.pop()!;
            vals.push(node.val);
            if (reverse) {
                if (node.right) next.push(node.right);
                if (node.left) next.push(node.left);
            } else {
                if (node.left) next.push(node.left);
                if (node.right) next.push(node.right);
            }
        }
        reverse = !reverse;
        res.push(vals);
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
 * - Level-order traversal using two stacks (implemented with arrays + pop()).
 * - Maintain:
 *   - `curr`: stack of nodes in the current level
 *   - `next`: stack of nodes for the next level
 *   - `reverse`: direction flag for the current level
 * - For each level:
 *   - Pop nodes from `curr` and append their values to `vals`.
 *   - Push children into `next` in an order that prepares the zigzag traversal:
 *     - If `reverse` is false (left-to-right), push left then right.
 *     - If `reverse` is true  (right-to-left), push right then left.
 *   - After finishing the level, swap `curr = next` and toggle `reverse`.
 *
 * # Complexity
 * - Time:  O(n)
 * - Space: O(w) where w is the maximum width of the tree (worst-case O(n))
 */
