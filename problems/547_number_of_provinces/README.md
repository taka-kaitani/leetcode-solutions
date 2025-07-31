# LeetCode 547 - Number of Provinces

## Problem  
- [LeetCode Link](https://leetcode.com/problems/number-of-provinces/)

## My Solution

### Code
- [solution.php](./solution.php)
- We iterate over each city and use DFS to explore all connected cities.
- If a city is not yet visited, we start a DFS and mark all reachable cities as visited.
- Each DFS call returns an updated visited array to ensure no side effects.

### Time & Space Complexity
- Time  : $O(n^2)$
- Space : $O(n)$
