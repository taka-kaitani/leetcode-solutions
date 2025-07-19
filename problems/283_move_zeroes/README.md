# LeetCode 283 - Move Zeroes

## Problem  
- [LeetCode Link](https://leetcode.com/problems/move-zeroes/)

## My Solution

### Code
- [solution.php](./solution.php)
- Use the two-pointer technique to overwrite non-zero elements from the beginning.
- First pointer (`insertPos`) tracks the position to write the next non-zero element.
- In the first pass, shift all non-zero elements to the front.
- In the second pass, fill the remaining positions with `0`.

### Time & Space Complexity
- Time  : O(n)
- Space : O(1)
