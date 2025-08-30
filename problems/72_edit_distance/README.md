# LeetCode 72 - Edit Distance

## Problem  
- [LeetCode Link](https://leetcode.com/problems/edit-distance/)

## My Solution

### Code
- [solution.php](./solution.php)
- We use dynamic programming to find the minimum number of operations required to convert `word1` to `word2`.
- The allowed operations are:
  - Delete a character of `word1`
  - Insert a character into `word1`
  - Replace a character of `word1` with another
- `dp[i][j]` represents the minimum number of operations to convert the first `i` chars of `word1` to first `j` chars of `word2`.

### Time & Space Complexity
- Time  : $O(m \cdot n)$
- Space : $O(m \cdot n)$
- where `m = len(word1)` and `n = len(word2)`