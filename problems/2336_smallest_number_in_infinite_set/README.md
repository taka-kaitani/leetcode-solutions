# LeetCode 2336 - Smallest Number in Infinite Set

## Problem  
- [LeetCode Link](https://leetcode.com/problems/smallest-number-in-infinite-set/)

## My Solution

### Code
- [solution.php](./solution.php)
-	A naive approach would require tracking all numbers explicitly, which is impossible for an infinite set.
-	By separating:
  -	Finite part: numbers in the heap (already popped and then added back)
  -	Infinite tail: numbers starting from $next onward (never popped yet)
we avoid storing the infinite sequence and keep operations efficient.

### Time & Space Complexity
- `popSmallest()`
  - Time : 
    - $O(log m)$ in worst case (when extracting from heap, m = size of heap)
    - $O(1)$ if taking from $next (infinite tail)
- `addBack()`
  - Time :
    - $O(log m)$ when inserting into heap
    - $O(1)$ for duplicate check
- Space : $O(m)$ for heap + hash set, where m = number of numbers currently stored in the heap
