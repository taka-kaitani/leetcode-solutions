# LeetCode 2352 - Equal Row and Column Pairs

## Problem  
- [LeetCode Link](https://leetcode.com/problems/equal-row-and-column-pairs/)

## My Solution

### Code
- [solution.php](./solution.php)
- [solution.ts](./solution.ts)
- We convert each row and column into comma-separated string to easily compare them.
- All columns are preprocessed into string format and stored in an array.
- Then, for each row, we compare it against all columns to count the number of match.

### Time & Space Complexity
- Time : $O(n^2)$
- Space : $O(n)$
