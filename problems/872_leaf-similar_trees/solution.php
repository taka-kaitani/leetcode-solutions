<?php
/**
 * LeetCode Problem: 872. Leaf-Similar Trees
 * https://leetcode.com/problems/leaf-similar-trees/
 *
 * Solution by Takanori Kaitani
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     public $val = null;
 *     public $left = null;
 *     public $right = null;
 *     function __construct($val = 0, $left = null, $right = null) {
 *         $this->val = $val;
 *         $this->left = $left;
 *         $this->right = $right;
 *     }
 * }
 */
class Solution {

    /**
     * Check if two binary trees are leaf-similar.
     * @param TreeNode $root1
     * @param TreeNode $root2
     * @return bool
     */
    function leafSimilar($root1, $root2): bool
    {
        return $this->getLeaves($root1) === $this->getLeaves($root2);
    }

    /**
     * Get the leaf values of a binary tree.
     * @param TreeNode $node
     * @return array
     */
    private function getLeaves($node): array
    {
        if ($node === null) {
            return [];
        }

        if ($node->left === null && $node->right === null) {
            return [$node->val];
        }

        return array_merge(
            $this->getLeaves($node->left),
            $this->getLeaves($node->right)
        );
    }
}
