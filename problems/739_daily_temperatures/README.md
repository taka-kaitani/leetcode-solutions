# LeetCode 739 - Daily Temperatures

## Problem  
- [LeetCode Link](https://leetcode.com/problems/daily-temperatures/)

## My Solution

### Code
- [solution.php](./solution.php)
- We use a monotonic stack to keep track of indices of days whose warmer temperature has not yet been found.
- While iterating through the temperatures:
  - For the current day, compare it with the day at the top of the stack.
  - If the current temperature is warmer, pop the stack and record the differences of indices as the answer.
- The stack is maintained in a way that temperatures are in **strictly decreasing order** from bottom to top.

### Time & Space Complexity
- Time  : $O(n)$ - each index is pushed and popped at most once
- Space : $O(n)$
