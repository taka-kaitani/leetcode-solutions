# LeetCode 1448 - Count Good Nodes in Binary Tree

## Problem  
- [LeetCode Link](https://leetcode.com/problems/count-good-nodes-in-binary-tree/)

## My Solution

### Code
- [solution.php](./solution.php)
- We perform a depth-first search (DFS) approach from the root, keeping track of the maximum value seen along the path.
- A node is considered "good" if it is greater than or equal to all the nodes on the path from the root to that node.

### Time & Space Complexity
- Time  : $O(n)$
  - where $n$ is the number of nodes in the binary tree
- Space : $O(h)$
  - where $h$ is the height of the tree
