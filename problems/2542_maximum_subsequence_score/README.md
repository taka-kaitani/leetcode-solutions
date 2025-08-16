# LeetCode 2542 - Maximum Subsequence Score

## Problem  
- [LeetCode Link](https://leetcode.com/problems/maximum-subsequence-score/)

## My Solution

### Code
- [solution.php](./solution.php)
- We use a greedy approach to maximize the score.
- Before the traversal, we sort the pairs `[nums1, nums2]` in descending order by `nums2`
  so that we can efficiently track the minimum of the selected `nums2`.
- We use a `SplMinHeap` to maintain the `k` selected elements from  nums1
  and their running sum.

### Time & Space Complexity
- Time  : $O(n \log k)$
- Space : $O(n)$
