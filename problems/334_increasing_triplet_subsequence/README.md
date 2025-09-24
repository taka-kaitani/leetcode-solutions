# LeetCode 334 - Increasing Triplet Subsequence

## Problem  
- [LeetCode Link](https://leetcode.com/problems/increasing-triplet-subsequence/)

## My Solution

### Code
- [solution.php](./solution.php)
- [solution.ts](./solution.ts)
- We use a greedy linear scan with two variables:
  - `first` : the smallest value seen so far
  - `second`: the smallest value greater than `first` seen so far

### Time & Space Complexity
- Time  : O(n)
- Space : O(1)
