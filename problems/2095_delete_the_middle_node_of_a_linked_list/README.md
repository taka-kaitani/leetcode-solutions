# LeetCode 2095 - Delete the Middle Node of a Linked List

## Problem  
- [LeetCode Link](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/)

## My Solution

### Code
- [solution.php](./solution.php)
- The algorithm makes two passes through the linked list:
  1. The first pass counts the total number of nodes.
  2. The second pass deletes the middle node based on the count.
- This version avoids the two-pointer technique for a simpler and potentially faster implementation.

### Time & Space Complexity
- Time  : $O(n)$
- Space : $O(1)$
