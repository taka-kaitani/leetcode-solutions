# LeetCode 392 - Is Subsequence

## Problem  
- [LeetCode Link](https://leetcode.com/problems/is-subsequence/)

## My Solution

### Code
- [solution.php](./solution.php)
- Use two pointers: one for $s and one for $t.
- Advance the $s pointer only when characters match.
- If the $s pointer reaches the end, $s is a subsequence of $t.

### Time & Space Complexity
- Time  : O(n)
- Space : O(1)
