/**
 * LeetCode Problem: 1268. Search Suggestions System
 * https://leetcode.com/problems/search-suggestions-system/
 *
 * Solution by Takanori Kaitani
 */
function suggestedProducts(products: string[], searchWord: string): string[][] {
    const trie = new suggestTrie();
    products.sort(); // lexicographical
    for (const p of products) trie.insert(p);

    return trie.getSuggestion(searchWord);
}

class suggestTrie {
    root = new TrieNode();
    private readonly codeA = 'a'.charCodeAt(0);

    insert(word: string): void {
        let node = this.root;
        for (const ch of word) {
            const idx = ch.charCodeAt(0) - this.codeA;
            if (!node.children[idx]) node.children[idx] = new TrieNode();
            node = node.children[idx];
            if (node.suggestion.length < 3) node.suggestion.push(word);
        }
    }

    getSuggestion(word: string): string[][] {
        const n = word.length;
        const res: string[][] = Array.from({ length: n }, () => []);
        let node = this.root;
        for (let i = 0; i < n; i++) {
            const charIdx = word[i].charCodeAt(0) - this.codeA;
            if (!node.children[charIdx]) return res;
            res[i] = node.children[charIdx].suggestion;
            node = node.children[charIdx];
        }
        return res;
    }
}

class TrieNode {
    children = Array<TrieNode | undefined>(26).fill(undefined);
    suggestion: string[] = []; // at most 3 suggestions
}

/**
 * # Approach
 * - Use a Trie (prefix tree) to implement the search suggestion system.
 *
 * - First, sort `products` lexicographically. This guarantees that when we insert
 *   products into the trie, we encounter them in sorted order.
 *
 * - Each Trie node stores:
 *   - `children[0..25]`: child pointers for characters 'a' to 'z'.
 *   - `suggestion`: a list of up to 3 product strings whose prefixes pass through this node.
 *
 * - `insert(word)`:
 *   - Traverse the trie following each character of `word`.
 *   - For each node along the path, if its `suggestion` list has fewer than 3 entries,
 *     append `word` to it.
 *   - Because `products` is sorted beforehand, these suggestions are always the
 *     lexicographically smallest up to 3 products for that prefix.
 *
 * - `getSuggestion(searchWord)`:
 *   - For each prefix `searchWord[0..i]`:
 *     - Move one step down in the trie.
 *     - If the next node does not exist, there are no further suggestions; return
 *       the result with empty arrays for the remaining prefixes.
 *     - Otherwise, take the node’s `suggestion` list as the suggestions for this prefix.
 *
 * - Finally, return the collected suggestions for all prefixes of `searchWord`.
 *
 * # Complexity
 * - Let:
 *   - n be the number of products,
 *   - M be the maximum length of a product,
 *   - w be the length of `searchWord`,
 *   - C be the total number of characters across all products (C ≈ n · M).
 * - Time:
 *   - Sorting products: O(M · n log n)
 *   - Inserting into trie: O(C)
 *   - Querying with `searchWord`: O(w)
 *   - Overall: O(M · n log n + w)
 * - Space:
 *   - O(C) for the trie nodes and suggestion lists.
 */
