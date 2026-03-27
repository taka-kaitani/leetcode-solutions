/**
 * LeetCode Problem: 720. Longest Word in Dictionary
 * https://leetcode.com/problems/longest-word-in-dictionary/
 *
 * Solution by Takanori Kaitani
 */
function longestWord(words: string[]): string {
    words.sort();

    let longest = '';
    const built = new Set(['']);
    for (const word of words) {
        if (built.has(word.slice(0, -1))) {
            built.add(word);
            if (word.length > longest.length) longest = word;
        }
    }

    return longest;
}

/**
 * # Approach
 * - Sort `words` for these reasons:
 *   - We process shorter words first (e.g. 'a' -> 'ap' -> 'app' ...).
 *   - We return the longest word with the smallest lexicographical order.
 * - Use a Set to track words that can be built one character at a time.
 *   - Initialize with '' so single-character words are always buildable.
 *   - For each word, if word[0..length - 2] is in the set, the word can be built.
 *     - Update longest if the word is strictly longer (strict > gives smallest lexicographical order).
 *
 * # Complexity
 * - Let c be total characters in words
 * - Time: O(n log n + c)
 * - Space: O(c)
 */
