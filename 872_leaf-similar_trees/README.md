# LeetCode 872 - Leaf-Similar Trees

## Problem  
- [LeetCode Link](https://leetcode.com/problems/leaf-similar-trees/)

## My Solution

### Code
- [solution.php](./solution.php)
- Use depth-first search (DFS) to collect leaf node values from each tree.

### Time & Space Complexity
- Time  : O(n + m)
  - n: Number of nodes in `$root1` 
  - m: Number of nodes in `$root2` 
- Space : O(l1, l2)
  - l1, l2: Number of leaf nodes in each tree
