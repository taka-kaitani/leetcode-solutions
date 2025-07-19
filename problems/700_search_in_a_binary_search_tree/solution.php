<?php
/**
 * LeetCode Problem: 700. Search in a Binary Search Tree
 * https://leetcode.com/problems/search-in-a-binary-search-tree/
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
     * Search for a value in a binary search tree.
     * @param  TreeNode $root
     * @param  int      $val
     * @return TreeNode|null
     */
    function searchBST($root, int $val)
    {
        if ($root === null || $root->val === $val) {
            return $root;
        }

        if ($val < $root->val) {
            return $this->searchBST($root->left, $val);
        } else {
            return $this->searchBST($root->right, $val);
        }
    }
}