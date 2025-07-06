<?php
/**
 * LeetCode Problem: 104. Maximum Depth of Binary Tree
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
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
     * Find the maximum depth of a binary tree.
     * @param  TreeNode $root
     * @return int
     */
    function maxDepth($root): int
    {
        if ($root === null) {
            return 0;
        }

        $leftDepth  = $this->maxDepth($root->left);
        $rightDepth = $this->maxDepth($root->right);

        return max($leftDepth, $rightDepth) + 1;
    }
}