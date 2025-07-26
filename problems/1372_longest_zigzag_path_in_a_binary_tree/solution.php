<?php
/**
 * LeetCode Problem: 1372. Longest ZigZag Path in a Binary Tree
 * https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/
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
     * Find the longest zigzag path in a binary tree.
     * @param TreeNode $root
     * @return int
     */
    function longestZigZag($root): int
    {
        $res = $this->dfs($root);
        return $res['maxLength'];
    }

    /**
     * Depth-first search to calculate the longest zigzag path.
     * @param TreeNode $root
     * @return array {
     *   'left'      => int,  // Length of the zigzag path starting from the left child
     *   'right'     => int,  // Length of the zigzag path starting from the right child
     *   'maxLength' => int   // Maximum length of any zigzag path found
     * }
     */
    private function dfs($root): array
    {
        if (!$root) {
            return ['left' => -1, 'right' => -1, 'maxLength' => -1];
        }

        $leftRes  = $this->dfs($root->left);
        $rightRes = $this->dfs($root->right);

        $leftPath  = $leftRes['right'] + 1;
        $rightPath = $rightRes['left'] + 1;
        $maxLength = max($leftPath, $rightPath, $leftRes['maxLength'], $rightRes['maxLength']);

        return [
            'left'  => $leftPath,
            'right' => $rightPath,
            'maxLength' => $maxLength
        ];
    }
}