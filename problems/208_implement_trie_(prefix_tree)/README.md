# LeetCode 208 - Implement Trie (Prefix Tree)

## Problem  
- [LeetCode Link](https://leetcode.com/problems/implement-trie-prefix-tree/)

## My Solution

### Code
- [solution.php](./solution.php)
- [solution.ts](./solution.ts)
- We implement a Trie (prefix tree) data structure to support word insertions and prefix-based searches.
- Each node stores:
  - `children`: a mapping from characters to the next TrieNode
  - `isEnd`: a boolean flag that makes the end of a complete word
- Operations:
  - `insert(word)`: traverse or create nodes for each character of `word`
  - `search(word)`: traverse nodes for each character and check the end flag
  - `startWith(prefix)`: traverse nodes for each character in `prefix`; success if all characters are found

### Time & Space Complexity
- Let `L` be the length of the input string (`word` or `prefix`)
- Time  :
  - `insert`: $O(L)$
  - `search`: $O(L)$
  - `startWith`: $O(L)$
- Space : $O(N)$ in the worst case, where `N` is the number of inserted words 
  - optimized by sharing common prefix among words
