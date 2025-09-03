# LeetCode 1268 - Search Suggestions System

## Problem  
- [LeetCode Link](https://leetcode.com/problems/search-suggestions-system/)

## My Solution

### Code
- [solution.php](./solution.php)
- We sort the products list and, for each prefix of `searchWord`,
  use binary search (`lowerBound`) to find the range of matching products.
- From the range, we collect up to 3 lexicographically smallest matches.

### Time & Space Complexity
- Let `P` = number of products, `L` = max length of searchWord.
- Time  : $O((P + L) \log P)$
  - Sorting: $O(P \log P)$
  - For each of `L` prefixes:
    - Binary search: $O(\log P)$
    - Collect up to 3 results: $O(1)$
- Space : $O(1)$ extra (excluding output)