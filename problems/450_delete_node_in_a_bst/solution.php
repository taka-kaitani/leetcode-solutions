<?php
/**
 * LeetCode Problem: 450. Delete Node in a BST
 * https://leetcode.com/problems/delete-node-in-a-bst/
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
     * @param TreeNode $root
     * @param int $key
     * @return TreeNode
     */
    function deleteNode(?TreeNode $root, int $key): ?TreeNode
    {
        if (!$root) return $root;

        if ($root->val > $key) {
            $root->left = $this->deleteNode($root->left, $key);
        } elseif ($root->val < $key) {
            $root->right = $this->deleteNode($root->right, $key);
        } else {
            // This node is the one to be deleted
            if (!$root->left) return $root->right;
            if (!$root->right) return $root->left;

            // Find the maximum node in the left subtree (inorder predecessor)
            $maxNode = $root->left;
            while ($maxNode->right) {
                $maxNode = $maxNode->right;
            }

            // Replace current node's value with the predecessor's value
            $root->val = $maxNode->val;

            // Recursively delete the predecessor node
            $root->left = $this->deleteNode($root->left, $maxNode->val);
        }

        return $root;
    }
}