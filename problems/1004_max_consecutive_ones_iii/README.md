# LeetCode 1004 - Max Consecutive Ones III

## Problem  
- [LeetCode Link](https://leetcode.com/problems/max-consecutive-ones-iii/)

## My Solution

### Code
- [solution.php](./solution.php)
- We use a sliding window approach to track the number of 0s.
- When the number of flipped 0s exceeds `k`, move the `left` pointer to the position after the earliest flipped 0.

### Time & Space Complexity
- Time  : O(n)
- Space : O(1)
