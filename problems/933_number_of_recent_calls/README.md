# LeetCode 933 - Number of Recent Calls

## Problem  
- [LeetCode Link](https://leetcode.com/problems/number-of-recent-calls/)

## My Solution

### Code
- [solution.php](./solution.php)
- [solution.ts](./solution.ts)
- Use queue to store timestamps of recent `ping` calls.
- Each time `ping($t)` is called, we:
  - Add `$t` to the end of the queue.
  - Remove all timestamps less than `$t - 3000` from the queue.

### Time & Space Complexity
- Time  : O(1)
- Space : O(n)
