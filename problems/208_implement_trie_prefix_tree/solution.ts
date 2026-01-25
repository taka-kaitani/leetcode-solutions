/**
 * LeetCode Problem: 208. Implement Trie (Prefix Tree)
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 *
 * Solution by Takanori Kaitani
 */
class Trie {
    private root = new TrieNode();

    insert(word: string): void {
        let node = this.root;
        for (const ch of word) {
            if (!node.children.has(ch)) {
                node.children.set(ch, new TrieNode());
            }
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
 * - Implement a Trie (prefix tree) where each node represents one character.
 * - Each TrieNode stores:
 *   - `children`: map from character -> next TrieNode
 *   - `isEnd`: whether a complete word ends at this node
 *
 * - insert(word):
 *   - Walk from the root, creating missing child nodes for each character.
 *   - Mark `isEnd = true` at the final node.
 *
 * - search(word):
 *   - Walk the trie following each character.
 *   - Return true only if the path exists and the final node has `isEnd = true`.
 *
 * - startsWith(prefix):
 *   - Walk the trie following each character in `prefix`.
 *   - Return true if the path exists (no need to check `isEnd`).
 *
 * # Complexity
 * - Time: insert/search/startsWith: O(L) where L is the length of the query word/prefix
 * - Space: O(C) where C is the total number of characters inserted into the trie
 *     (i.e., total nodes created across all inserted words).
 */