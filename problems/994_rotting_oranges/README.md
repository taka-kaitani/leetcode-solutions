# LeetCode 994 - Rotting Oranges

## Problem  
- [LeetCode Link](https://leetcode.com/problems/rotting-oranges/)

## My Solution

### Code
- [solution.php](./solution.php)
- We use a multi-source BFS to find the minimum number of minutes until no fresh oranges remain.
- At each minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten; the newly rotten oranges form the next frontier.

### Time & Space Complexity
- Time  : $O(m * n)$
- Space : $O(m * n)$
