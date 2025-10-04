# LeetCode 1466 - Reorder Routes to Make All Paths Lead to the City Zero

## Problem  
- [LeetCode Link](https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/)

## My Solution

### Code
- [solution.php](./solution.php)
- [solution.ts](./solution.ts)
- We recursively count the number of reordering the directions by using DFS approach.
- Before exploring the roads, we store the directions in `$graph`.
- We perform a DFS approach to count the number of roads that need to be reordered.
- Before traversal, we construct an adjacency list `$graph` that stores both the neighbors and the direction needs to be changed.

### Time & Space Complexity
- Time  : $O(n)$
- Space : $O(n)$
