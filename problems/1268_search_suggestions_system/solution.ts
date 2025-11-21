/**
 * LeetCode Problem: 1268. Search Suggestions System
 * https://leetcode.com/problems/search-suggestions-system/
 *
 * Solution by Takanori Kaitani
 */
function suggestedProducts(products: string[], searchWord: string): string[][] {
    const trie = new Trie();
    products.sort();
    for (const p of products) trie.insert(p);

    const n = searchWord.length;
    const code_a = 'a'.charCodeAt(0);
    let res: string[][] = Array.from({ length : n }, () => []);
    let node = trie.root;

    for (let i = 0; i < n; i++) {
        const idx = searchWord.charCodeAt(i) - code_a;
        if (!node || !node.children[idx]) break;

        node = node.children[idx]!;
        res[i] = node.suggestions;
    }

    return res;
}

class TrieNode {
    children: Array<TrieNode | null> = new Array(26).fill(null);
    suggestions: string[] = []; // store up to 3 smallest lexicographical words
}
class Trie {
    root = new TrieNode();

    insert(word: string): void {
        const code_a = 'a'.charCodeAt(0);
        let node = this.root;
        for (const ch of word) {
            const idx = ch.charCodeAt(0) - code_a;
            if (!node.children[idx]) node.children[idx] = new TrieNode();
            node = node.children[idx];

            if (node.suggestions.length < 3) node.suggestions.push(word);
        }
    }
}

/**
 * # Approach
 * - Use a Trie to efficiently retrieve up to 3 lexicographically smallest
 *   product names for each prefix of `searchWord`.
 *
 * - Sort `products` first so that when inserting into the Trie,
 *   each node’s `suggestions` list naturally receives words in
 *   lexicographical order.
 *
 * - Each TrieNode stores:
 *   - `children`: an array of 26 nodes for 'a'–'z'
 *   - `suggestions`: up to 3 smallest products that share this prefix
 *
 * - While inserting a word, at each character’s node:
 *     if the `suggestions` list contains < 3 items, append the word.
 *
 * - To answer the query, traverse the trie following the prefix characters.
 *   For each character:
 *     - If the child node exists, append its `suggestions`.
 *     - If not, the rest of the results are empty lists.
 *
 * # Complexity
 * - Time:
 *     Insertion:  O(sum of all characters in `products`)
 *     Query:      O(length of searchWord)
 * - Space:
 *     O(sum of all characters in `products`)
 */
