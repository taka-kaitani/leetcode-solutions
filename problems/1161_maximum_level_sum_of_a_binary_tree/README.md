# LeetCode 1161 - Maximum Level Sum of a Binary Tree

## Problem  
- [LeetCode Link](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/)

## My Solution

### Code
- [solution.php](./solution.php)
- We perform a breadth-first search (BFS) to traverse the nodes level by level.
- At each level, we calculate the sum of the node values and track the maximum sum.

### Time & Space Complexity
- Time  : $O(n)$
  - $n$ : the number of nodes in the binary tree.
- Space : $O(w)$
  - $w$ : the maximum width of the binary tree (the maximum number of nodes at any level).
