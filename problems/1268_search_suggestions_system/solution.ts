/**
 * LeetCode Problem: 1268. Search Suggestions System
 * https://leetcode.com/problems/search-suggestions-system/
 *
 * Solution by Takanori Kaitani
 */
function suggestedProducts(products: string[], searchWord: string): string[][] {
    // 1. build a trie from products
    const trie = new Trie();
    for (const p of products) trie.insert(p);

    // 2. build a result for each prefix of searchWord
    return trie.getSuggestions(searchWord);
}

class Trie {
    root = new TrieNode();
    private readonly idxA: number = 'a'.charCodeAt(0);

    insert(word: string): void {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const idx: number = word.charCodeAt(i) - this.idxA;
            if (node.children[idx] === undefined) {
                node.children[idx] = new TrieNode();
            }

            node = node.children[idx]!;
            node.suggestions.push(word);
            node.suggestions.sort();
            if (node.suggestions.length === 4) node.suggestions.pop();
        }
    }

    getSuggestions(word: string): string[][] {
        const res: string[][] = Array.from({ length: word.length }, () => []);
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const idx = word.charCodeAt(i) - this.idxA;
            if (node.children[idx] === undefined) break;
            node = node.children[idx]!;
            res[i] = node.suggestions;
        }
        return res;
    }
}

class TrieNode {
    children = Array<TrieNode | undefined>(26).fill(undefined);
    suggestions: string[] = []; // at most 3 suggestions
}

/**
 * # Approach
 * - Use a trie to suggest 3 product for each character in `searchWord`.
 * - insert:
 *   - build a nested trie which has
 *     - children: child nested trie
 *     - suggestions:
 *       - at most 3 suggestions in lexicographical order
 * - getSuggestions:
 *   - get suggestions for each character in input word.
 *   - if trie has not built, break (the result is empty array)
 * 
 * # Complexity
 * - Time: O(n)
 * - Space: O(n)
 */
