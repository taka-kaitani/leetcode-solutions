# LeetCode 236 - Lowest Common Ancestor of a Binary Tree

## Problem  
- [LeetCode Link](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)

## My Solution

### Code
- [solution.php](./solution.php)
- We recursively explore the tree to find the two nodes `p` and `q`.
- If a node matches either `p` or `q`, we return it as a potential ancestor.
- If both left and right subtrees return non-null, the current node is the lowest common ancestor.

### Time & Space Complexity
- Time  : $O(n)$
  - $n$ : the number of nodes in the tree
- Space : $O(h)$
  - $h$ : the height of the tree
