# LeetCode 452 - Minimum Number of Arrows to Burst Balloons

## Problem  
- [LeetCode Link](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)

## My Solution

### Code
- [solution.php](./solution.php)
- We use a greedy approach to minimize the number of arrows required.
- First, sort the balloons by their end coordinate.
- Then, iterate through the balloons:
  - If the current balloon starts after the last arrow position, shoot a new arrow at its end.
  - Otherwise, the balloon is already burst by the previous arrow.

### Time & Space Complexity
- Time  : $O(n \log n)$
- Space : $O(1)$ extra
