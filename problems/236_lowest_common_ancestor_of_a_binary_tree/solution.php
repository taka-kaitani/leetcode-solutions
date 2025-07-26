<?php
/**
 * LeetCode Problem: 236. Lowest Common Ancestor of a Binary Tree
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 *
 * Solution by Takanori Kaitani
 */
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     public $val = null;
 *     public $left = null;
 *     public $right = null;
 *     function __construct($value) { $this->val = $value; }
 * }
 */

class Solution {
    /**
     * Find the lowest common ancestor of two nodes in a binary tree.
     * @param TreeNode $root
     * @param TreeNode $p
     * @param TreeNode $q
     * @return TreeNode
     */
    function lowestCommonAncestor($root, $p, $q)
    {
        if (!$root || $root === $p || $root === $q) return $root;

        $left  = $this->lowestCommonAncestor($root->left, $p, $q);
        $right = $this->lowestCommonAncestor($root->right, $p, $q);

        // This is the LCA
        if ($left && $right) return $root;

        return $left ?? $right;
    }
}