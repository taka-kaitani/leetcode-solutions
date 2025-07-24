<?php
/**
 * LeetCode Problem: 1448. Count Good Nodes in Binary Tree
 * https://leetcode.com/problems/count-good-nodes-in-binary-tree/
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
     * Counts the number of good nodes in a binary tree.
     * A good node is defined as a node whose value is greater than or equal to
     * the maximum value encountered on the path from the root to that node.
     * @param TreeNode $root
     * @return int
     */
    function goodNodes($root): int
    {
        return $this->countGoodNodes($root, $root->val);
    }

    /**
     * Helper function to count good nodes recursively.
     * @param TreeNode $root
     * @param int $max
     * @return int
     */
    private function countGoodNodes($root, int $max): int
    {
        if ($root === null) return 0;

        $count = 0;
        if ($root->val >= $max) {
            $count++;
            $max = $root->val;
        }

        $count += $this->countGoodNodes($root->left, $max);
        $count += $this->countGoodNodes($root->right, $max);

        return $count;
    }
}