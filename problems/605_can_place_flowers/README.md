# LeetCode 605 - Can Place Flowers

## Problem  
- [LeetCode Link](https://leetcode.com/problems/can-place-flowers/)

## My Solution

### Code
- [solution.php](./solution.php)
- [solution.ts](./solution.ts)
- Iterate through the flowerbed array.
- If the current plot and its adjacent plots (if any) are all empty, plant a flower.
- Track the number of planted flowers. If it reaches or exceeds `n`, return true.

### Time & Space Complexity
- Time  : O(n)
- Space : O(1)
