/**
 * LeetCode Problem: 208. Implement Trie (Prefix Tree)
 * https://leetcode.com/problems/implement-root-prefix-tree/
 *
 * Solution by Takanori Kaitani
 */
class TrieNode {
    children: (TrieNode | null)[];
    isEnd: boolean;
    constructor() {
        this.children = new Array(26).fill(null);
        this.isEnd = false;
    }
}

class Trie {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let node = this.root;
        for (const ch of word) {
            const idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
            if (!node.children[idx]) {
                node.children[idx] = new TrieNode();
            }
            node = node.children[idx]!;
        }
        node.isEnd = true;
    }

    search(word: string): boolean {
        let node = this.root;
        for (const ch of word) {
            const idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
            if (!node.children[idx]) return false;
            node = node.children[idx]!;
        }
        return node.isEnd;
    }

    startsWith(prefix: string): boolean {
        let node = this.root;
        for (const ch of prefix) {
            const idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
            if (!node.children[idx]) return false;
            node = node.children[idx]!;
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
