# LeetCode 450 - Delete Node in a BST

## Problem  
- [LeetCode Link](https://leetcode.com/problems/delete-node-in-a-bst/)

## My Solution

### Code
- [solution.php](./solution.php)
- [solution.ts](./solution.ts)
- We search for the node to delete by leveraging the properties of a BST.
- Once the node is found, we locate the maximum node in its left subtree (the inorder predecessor).
- We replace the target node's value with the inorder predecessor's value.
- Finally, we recursively delete the inorder predecessor.

### Time & Space Complexity
- Time  : $O(h)$
- Space : $O(h)$
- $h$ : the height of the tree