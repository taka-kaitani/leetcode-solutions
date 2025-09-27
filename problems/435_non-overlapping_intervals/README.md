# LeetCode 435 - Non-overlapping Intervals

## Problem  
- [LeetCode Link](https://leetcode.com/problems/non-overlapping-intervals/)

## My Solution

### Code
- [solution.php](./solution.php)
- [solution.ts](./solution.ts)
- We use a greedy approach to maximize the number of non-overlapping intervals.
- First, we sort the intervals by their end times in ascending order.
- The answer is the total number of intervals minus the number we can keep.

### Time & Space Complexity
- Time  : $O(n \log n)$
- Space : $O(1)$ extra
