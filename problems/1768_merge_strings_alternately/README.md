# LeetCode 1768 - Merge Strings Alternately

## Problem  
- [LeetCode Link](https://leetcode.com/problems/merge-strings-alternately/)

## My Solution

### Code
- [solution.php](./solution.php)
- Convert both strings to arrays using str_split(), and loop up to the longer length.
- Use the null coalescing operator (??) to simplify handling of out-of-bound characters.

### Time & Space Complexity
- Time  : O(n + m)
- Space : O(n + m)