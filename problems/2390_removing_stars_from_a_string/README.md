# LeetCode 2390 - Removing Stars From a String

## Problem  
- [LeetCode Link](https://leetcode.com/problems/removing-stars-from-a-string/)

## My Solution

### Code
- [solution.php](./solution.php)
- We use a stack to track the indices of non-* characters:
- When a * is found, remove it and the most recent non-* by clearing both the array.

### Time & Space Complexity
- Time  : $O(n)$
- Space : $O(n)$
