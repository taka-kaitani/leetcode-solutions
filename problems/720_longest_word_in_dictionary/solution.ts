/**
 * LeetCode Problem: 720. Longest Word in Dictionary
 * https://leetcode.com/problems/longest-word-in-dictionary/
 *
 * Solution by Takanori Kaitani
 */
function longestWord(words: string[]): string {
    const trie = new Trie();
    for (const word of words) trie.insert(word);

    let best = '';

    function dfs(node: TrieNode, path: string): void {
        if (
            path.length > best.length ||
            (path.length === best.length && path < best)
        ) {
            best = path;
        }

        for (const ch of [...node.children.keys()]) {
            const child = node.children.get(ch)!;
            if (child.isEnd) dfs(child, path + ch);
        }
    }

    dfs(trie.root, '');

    return best;
}

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
}

class TrieNode {
    public children = new Map<string, TrieNode>();
    public isEnd = false;
}

/**
 * # Approach
 * - Insert all words into a Trie, marking the end of each word with `isEnd = true`.
 * - Perform a depth-first search (DFS) on the Trie to find the longest valid word.
 * - A word is valid only if **every prefix** is also a complete word.
 *   This is naturally enforced by exploring only child nodes where `child.isEnd === true`.
 * - During DFS:
 *   - Maintain a string `path` representing the current word we are building.
 *   - Whenever `path` becomes longer than the current `best` (or equal length but lexicographically smaller),
 *     update `best`.
 *   - Explore child nodes.
 * - Return the longest valid word found (`best`).
 *
 * # Complexity
 * - Time:  O(n · m)
 *   where n is the number of words and m is the maximum length of a word.
 * - Space: O(total characters in all words) for the Trie.
 */
