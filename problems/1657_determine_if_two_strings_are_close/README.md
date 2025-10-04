# LeetCode 1657 - Determine if Two Strings Are Close

## Problem  
- [LeetCode Link](https://leetcode.com/problems/determine-if-two-strings-are-close/)

## My Solution

### Code
- [solution.php](./solution.php)
- [solution.ts](./solution.ts)
- Steps:
  1. Use `count_chars()` to get the frequency map for both string.
  2. Compare the character sets via `array_keys()`.
  3. Sort and compare the frequency value to confirm frequency pattern match.

### Time & Space Complexity
- Time  : O(n + k log k)
  - n: length of the string
  - k: number of unique characters (max 26 for lower case English)
- Space : O(k)
