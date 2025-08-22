# LeetCode 216 - Combination Sum III

## Problem  
- [LeetCode Link](https://leetcode.com/problems/combination-sum-iii/)

## My Solution

### Code
- [solution.php](./solution.php)
- We use a backtracking approach to explore all valid combinations of `k` distinct numbers that sum up to `n`.

### Time & Space Complexity
- Time  : $O(\binom{9}{k} \cdot k)$
  - We generate all combinations of `k` distinct numbers from 1 to 9, and each combination takes up to $O(k)$ time to construct and validate.
- Space : $O(k)$
  - Due to recursion and the current path stored during backtracking.
