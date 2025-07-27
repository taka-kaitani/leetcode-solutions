# LeetCode 199 - Binary Tree Right Side View

## Problem  
- [LeetCode Link](https://leetcode.com/problems/binary-tree-right-side-view/)

## My Solution

### Code
- [solution.php](./solution.php)
- We use a breadth-first search (BFS) approach to collect the rightmost node of the binary tree at each level.
- The recursion continues level by level until no nodes remain.

### Time & Space Complexity
- Time  : $O(n)$
  - $n$ is the number of nodes in the binary tree.
- Space : $O(w)$
  - $w$ is the maximum width of the binary tree.
