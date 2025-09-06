# LeetCode 901 - Online Stock Span

## Problem  
- [LeetCode Link](https://leetcode.com/problems/online-stock-span/)

## My Solution

### Code
- [solution.php](./solution.php)
- We use a monotonic stack to keep track of days and their spans.
- By maintaining the prices in strictly decreasing order within the stack,
  we can combine spans and avoid unnecessary traversal.

### Time & Space Complexity
- Time  : $O(n)$ total, i.e. $O(1)$ amortized per operation
- Space : $O(n)$ in the worst case (for the stack)
