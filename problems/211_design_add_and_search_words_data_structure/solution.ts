/**
 * LeetCode Problem: 211. Design Add and Search Words Data Structure
 * https://leetcode.com/problems/design-add-and-search-words-data-structure/
 *
 * Solution by Takanori Kaitani
 */
class WordDictionary {
    private root = new TrieNode();

    private dfs(word: string, node: TrieNode, idx: number): boolean {
        if (idx === word.length) return node.isEnd;

        const ch = word[idx];
        const nextIdx = idx + 1;

        if (ch !== '.') {
            if (!node.children.has(ch)) return false;
            return this.dfs(word, node.children.get(ch)!, nextIdx);
        }

        // wildcard '.'
        for (const child of node.children.values()) {
            if (this.dfs(word, child, nextIdx)) return true;
        }

        return false;
    }

    addWord(word: string): void {
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
        return this.dfs(word, this.root, 0);
    }
}

class TrieNode {
    children = new Map<string, TrieNode>();
    isEnd = false;
}

/**
 * # Approach
 * - Store all added words in a Trie.
 * - Each TrieNode keeps:
 *   - `children`: map char -> child node
 *   - `isEnd`: whether a word ends at this node
 *
 * - addWord(word):
 *   - Walk/create nodes for each character.
 *   - Mark `isEnd = true` at the last node.
 *
 * - search(word):
 *   - DFS over the trie.
 *   - When the current character is a normal letter, follow that single edge.
 *   - When the character is '.', it can match any letter:
 *     try all child nodes and return true if any path matches.
 *
 * # Complexity
 * - Let L be the length of the query word.
 * - addWord: O(L)
 * - search: With k wildcards '.', worst-case O(Σ^k * L) where Σ is max branching factor (e.g., 26).
 * - Space: O(C) where C is the total number of characters inserted (total trie nodes).
 */
