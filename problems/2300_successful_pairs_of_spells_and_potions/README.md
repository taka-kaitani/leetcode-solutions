# LeetCode 2300 - Successful Pairs of Spells and Potions

## Problem  
- [LeetCode Link](https://leetcode.com/problems/successful-pairs-of-spells-and-potions/)

## My Solution

### Code
- [solution.php](./solution.php)
- [solution.ts](./solution.ts)
- For each spell, we compute how many potions can form a successful pair (i.e., spell × potion ≥ success).
- To optimize the search, we sort the `potions` array in advance and apply binary search for each spell.

### Time & Space Complexity
- Time  : $O((n + m) \log m)$
- Space : $O(1)$
