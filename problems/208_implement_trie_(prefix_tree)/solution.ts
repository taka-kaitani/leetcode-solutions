/**
 * LeetCode Problem: 208. Implement Trie (Prefix Tree)
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 *
 * Solution by Takanori Kaitani
 */
class Trie {
    private trie = new Map<string, any>();

    insert(word: string): void {
        let curr = this.trie;
        for (const ch of word) {
            if (!curr.has(ch)) curr.set(ch, new Map());
            curr = curr.get(ch);
        }
        curr.set('isEnd', true);
    }

    search(word: string): boolean {
        let curr = this.trie;
        for (const ch of word) {
            if (!curr.has(ch)) return false;
            curr = curr.get(ch)!;
        }
        return curr.get('isEnd') === true;
    }

    startsWith(prefix: string): boolean {
        let curr = this.trie;
        for (const ch of prefix) {
            if (!curr.has(ch)) return false;
            curr = curr.get(ch)!;
        }
        return true;
    }
}

/**
 * # Approach
 * - Use a nested Map structure to represent a Trie (prefix tree).
 *   - Each character maps to another Map, representing the next node.
 *   - A special key `"isEnd"` marks the end of a complete word.
 *
 * - Operations:
 *   - insert(word)
 *     - Traverse/create nodes for each character.
 *     - After the final character, set `isEnd = true` to mark a full word.
 *
 *   - search(word)
 *     - Traverse the Trie following each character.
 *     - Return true only if all characters exist **and** `isEnd === true`.
 *
 *   - startsWith(prefix)
 *     - Traverse the Trie following each character.
 *     - Return true if all prefix characters exist (no need to check `isEnd`).
 *
 * # Complexity
 * - Time:  O(n) per operation, where n is the length of the input string.
 * - Space: O(total number of inserted characters)
 */
