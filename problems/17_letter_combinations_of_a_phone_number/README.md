# LeetCode 17 - Letter Combinations of a Phone Number

## Problem  
- [LeetCode Link](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

## My Solution

### Code
- [solution.php](./solution.php)
- We iterate over the input digits and build all possible letter combinations
  based on the classic phone keypad mapping.

### Time & Space Complexity
- Time  : $O(4 ^ n \cdot n)$
- Space : $O(4 ^ n \cdot n)$
- Up to 4 choices per digit (e.g., digit '7' maps to 4 letters)
