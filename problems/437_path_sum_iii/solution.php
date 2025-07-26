<?php
/**
 * LeetCode Problem: 437. Path Sum III
 * https://leetcode.com/problems/path-sum-iii/
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
     * Counts the number of paths that sum to a given value in a binary tree.
     * @param TreeNode $root
     * @param int $targetSum
     * @return int
     */
    function pathSum($root, int $targetSum): int
    {
        return $this->countTargetPath($root, $targetSum, []);
    }

    /**
     * Helper function to count paths with the given target sum.
     * @param TreeNode $root
     * @param int $targetSum
     * @param array $seenSums
     * @return int
     */
    private function countTargetPath($root, int $targetSum, array $seenSums): int
    {
        $count = 0;
        if ($root === null) return $count;

        $seenSums[] = 0; // Add a new entry for the current node
        foreach ($seenSums as &$sum) {
            $sum += $root->val;
            if ($sum === $targetSum) $count++;
        }
        unset($sum);

        $count += $this->countTargetPath($root->left, $targetSum, $seenSums);
        $count += $this->countTargetPath($root->right, $targetSum, $seenSums);

        return $count;
    }
}