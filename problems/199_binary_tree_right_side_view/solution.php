<?php
/**
 * LeetCode Problem: 199. Binary Tree Right Side View
 * https://leetcode.com/problems/binary-tree-right-side-view/
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
     * Returns the Right Side View of Binary Tree
     * @param TreeNode $root
     * @return int[]
     */
    function rightSideView($root): array
    {
        if (!$root) return [];

        return $this->collectRightSideView([$root], []);
    }

    /**
     * Recursively collects the rightmost nodes of the binary tree
     * @param TreeNode[] $nodes
     * @param int[] $rightList
     * @return int[]
     */
    private function collectRightSideView(array $nodes, array $rightList): array
    {
        $rightList[] = end($nodes)->val;

        $nextNodes = [];
        foreach ($nodes as $node) {
            if ($node->left) $nextNodes[] = $node->left;
            if ($node->right) $nextNodes[] = $node->right;
        }

        if ($nextNodes) {
            $rightList = $this->collectRightSideView($nextNodes, $rightList);
        }

        return $rightList;
    }
}