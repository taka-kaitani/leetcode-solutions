<?php
/**
 * LeetCode Problem: 1161. Maximum Level Sum of a Binary Tree
 * https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/
 *
 * Solution by Takanori Kaitani
 */

// Definition for a binary tree node.
class TreeNode {
    public $val = null;
    public $left = null;
    public $right = null;
    function __construct($val = 0, $left = null, $right = null) {
        $this->val = $val;
        $this->left = $left;
        $this->right = $right;
    }
}

class Solution {

    /**
     * Find the level of a binary tree that has the maximum sum of node values.
     * @param TreeNode $root
     * @return int
     */
    function maxLevelSum(TreeNode $root): int
    {
        $maxSum = PHP_INT_MIN;
        $maxLevel = 0;
        $level = 1;
        $nodes = [$root];

        while ($nodes) {
            $sum = 0;
            $nextNodes = [];

            // Sum up values of the current level and prepare the nodes for the next level
            foreach ($nodes as $node) {
                $sum += $node->val;
                if ($node->left)  $nextNodes[] = $node->left;
                if ($node->right) $nextNodes[] = $node->right;
            }

            // Update max sum and level
            if ($sum > $maxSum) {
                $maxSum = $sum;
                $maxLevel = $level;
            }

            $level++;
            $nodes = $nextNodes;
        }

        return $maxLevel;
    }
}