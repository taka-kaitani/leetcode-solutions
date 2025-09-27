# LeetCode 399 - Evaluate Division

## Problem  
- [LeetCode Link](https://leetcode.com/problems/evaluate-division/)

## My Solution

### Code
- [solution.php](./solution.php)
- [solution.ts](./solution.ts)
- We represent the given `equations` and `values` as a weighted graph.
- For each query, we perform a DFS traversal to compute the result of the division using the graph.

### Time & Space Complexity
- Time  : $O(n)$
- Space : $O(n)$
