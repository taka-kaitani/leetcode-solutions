# LeetCode 714 - Best Time to Buy and Sell Stock with Transaction Fee

## Problem  
- [LeetCode Link](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)

## My Solution

### Code
- [solution.php](./solution.php)
- [solution.ts](./solution.ts)
- We use dynamic programming approach to compute the maximum profit from stock trading with a transaction fee (applied when selling).
- On each day, we maintain two states;
  - `cash`: maximum profit when NOT holding a stock at the end of day `i`
  - `hold`: maximum profit when holding ONE share at the end of day `i`

### Time & Space Complexity
- Time  : $O(n)$
- Space : $O(1)$
