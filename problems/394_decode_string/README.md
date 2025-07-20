# LeetCode 394 - Decode String

## Problem  
- [LeetCode Link](https://leetcode.com/problems/decode-string/)

## My Solution

### Code
- [solution.php](./solution.php)
- We decode the string by recursively processing bracketed substrings and repeating them according to their prefix number.

### Time & Space Complexity
- Time  : $O(n × m)$
  - $n$ : length of the string
  - $m$ : maximum depth of nested brackets.
- Space : $O(n)$