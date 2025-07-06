# LeetCode 104 - Maximum Depth of Binary Tree

## Problem  
- [LeetCode Link](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

## My Solution

### Code
- [solution.php](./solution.php)
- We use recursive depth-first search (DFS) approach.
- At each node, we compute the depth of its left and right subtrees and return the maximum of the two plus one.

### Time & Space Complexity
- Time  : O(n)
- Space : O(h)
  - Due to the recursion stack, where h is the height of the tree.
