# LeetCode 790 - Domino and Tromino Tiling

## Problem  
- [LeetCode Link](https://leetcode.com/problems/domino-and-tromino-tiling/)

## My Solution

### Code
- [solution.php](./solution.php)
- We use dynamic programming to count the number of ways to tile to 2×n board with dominoes and trominoes.
- The key idea is to track two states;
  - `dp[n]`: the number of ways to fully cover a 2×n board
  - `g[n]`: the number of ways to cover a 2×n board leaving a single-cell protrusion (incomplete state)
- Using these states, we can build recursions to handle both domino placements and tromino placements efficiently.

### Time & Space Complexity
- Time  : $O(n)$
- Space : $O(n)$
