/**
 * LeetCode Problem: 208. Implement Trie (Prefix Tree)
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 *
 * Solution by Takanori Kaitani
 */
class Trie {
    root = new TrieNode();

    insert(word: string): void {
        let node = this.root;
        for (const ch of word) {
            if (!node.children.has(ch)) node.children.set(ch, new TrieNode());
            node = node.children.get(ch)!;
        }
        node.isEnd = true;
    }

    search(word: string): boolean {
        let node = this.root;
        for (const ch of word) {
            if (!node.children.has(ch)) return false;
            node = node.children.get(ch)!;
        }

        return node.isEnd;
    }

    startsWith(prefix: string): boolean {
        let node = this.root;
        for (const ch of prefix) {
            if (!node.children.has(ch)) return false;
            node = node.children.get(ch)!;
        }

        return true;
    }
}

class TrieNode {
    children = new Map<string, TrieNode>();
    isEnd = false;
}

/**
 * # Approach
 * - Implement a Trie (prefix tree) where each node represents a prefix.
 * - Each `TrieNode` stores:
 *   - `children`: a map from character to the next `TrieNode`.
 *   - `isEnd`: a boolean flag indicating whether this node marks the end of a word.
 *
 * - `insert(word)`:
 *   - Starting from the root, iterate over each character in `word`.
 *   - For each character, move to the corresponding child node, creating it if it does not exist.
 *   - After processing all characters, mark the final node’s `isEnd` as `true`.
 *
 * - `search(word)`:
 *   - Traverse the trie following the characters of `word`.
 *   - If at any point the next character does not exist in `children`, return `false`.
 *   - After the traversal, return `true` only if the final node’s `isEnd` flag is `true`.
 *
 * - `startsWith(prefix)`:
 *   - Similar to `search`, but we only need to verify that we can traverse
 *     all characters in `prefix`.
 *   - If traversal succeeds, return `true` regardless of `isEnd`.
 *
 * # Complexity
 * - Let `L` be the length of the input string (`word` or `prefix`).
 * - Time:  O(L) for `insert`, `search`, and `startsWith`.
 * - Space: O(T) where `T` is the total number of characters stored across all inserted words.
 */
