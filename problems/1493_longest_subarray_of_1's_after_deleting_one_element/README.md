# LeetCode 1493 - Longest Subarray of 1's After Deleting One Element

## Problem  
- [LeetCode Link](https://leetcode.com/problems/longest-subarray-of-1's-after-deleting-one-element/)

## My Solution

### Code
- [solution.php](./solution.php)
- We use a sliding window technique to find the longest subarray containing only 1s after deleting exactly one element.
  - We track the index of the last seen 0 (`zeroIndex`).
  - When we encounter a second 0, we move the `left` pointer just past the previous 0.
  - At each step, we calculate the current window size (`right - left`) and update the maximum length accordingly.
  - This ensures we evaluate subarrays containing at most one 0, which can be removed to get only 1s.

### Time & Space Complexity
- Time  : O(n)
- Space : O(1)
