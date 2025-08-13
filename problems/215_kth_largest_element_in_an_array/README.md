# LeetCode 215 - Kth Largest Element in an Array

## Problem  
- [LeetCode Link](https://leetcode.com/problems/kth-largest-element-in-an-array/)

## My Solution

### Code
- [solution.php](./solution.php)
- We use the Quickselect algorithm to find `k`th largest element.
- Instead of standard Lomuto/Hoare partition, we use a 3-way partition.

### Why 3-way partition?
- In standard partitioning, all elements `< pivot` and `>= pivot` are split into two groups.
  If the array contains many duplicates of the pivot,
  those duplicates may all end up in one group, leading to unbalanced partitions and degraded performance.
- A 3-way partition explicitly groups the array into:
  - elements `< pivot`
  - elements `= pivot`
  - elements `> pivot`
- This reduces the recursion/search space significantly when duplicates are present, 
  keeping the expected time complexity close to $O(n)$ even for arrays with many equal value.

### Time & Space Complexity
- Time
  - Average : $O(n)$
  - Worst   : $O(n^2)$ (rare, when pivot selection is poor every time)
- Space : $O(1)$ (in-space)
