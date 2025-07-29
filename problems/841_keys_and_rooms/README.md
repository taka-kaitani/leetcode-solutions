# LeetCode 841 - Keys and Rooms

## Problem  
- [LeetCode Link](https://leetcode.com/problems/keys-and-rooms/)

## My Solution

### Code
- [solution.php](./solution.php)
- We perform a graf traversal starting from room 0.
- At each step, we unlock new rooms by collecting keys found in the current room.
- We track visited rooms using a set to avoid revisiting.
- The process continues until no rooms can be unlocked.
- Finally, we check whether all rooms have been visited;

### Time & Space Complexity
- Time  : $O(V + E)$
- Space : $O(V)$
  - $V$ : number of rooms
  - $E$ : total number of keys
