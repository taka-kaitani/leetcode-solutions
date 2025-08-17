# LeetCode 2462 - Total Cost to Hire K Workers

## Problem  
- [LeetCode Link](https://leetcode.com/problems/total-cost-to-hire-k-workers/)

## My Solution

### Code
- [solution.php](./solution.php)
- We maintain two min-heaps (`healL`, `heapR`) to track the smallest costs
  among at most `candidates` workers from the left side and the right side.
- At each hiring step, we compare the tops of both heaps and hire the cheaper one.
- After hiring, we move the next unseen worker from that side into the corresponding heap.

### Time & Space Complexity
- Time  : $O((n + k) \log candidates)$
- Space : $O(candidates)$