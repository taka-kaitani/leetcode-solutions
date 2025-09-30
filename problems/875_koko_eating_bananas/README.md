# LeetCode 875 - Koko Eating Bananas

## Problem  
- [LeetCode Link](https://leetcode.com/problems/koko-eating-bananas/)

## My Solution

### Code
- [solution.php](./solution.php)
- [solution.ts](./solution.ts)
- We use a binary search to find the minimum eating speed (bananas per hour)
  such that Koko can finish all bananas within `h` hours.

### Time & Space Complexity
- Time  : $O(n \cdot \log m)$
  - $n$ : number of `piles`
  - $m$ : maximum element of `piles`
  - We perform binary search over the range [1, m]
- Space : $O(1)$
