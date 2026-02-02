/**
 * LeetCode Problem: 242. Valid Anagram
 * https://leetcode.com/problems/valid-anagram/
 *
 * Solution by Takanori Kaitani
 */
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const freq = new Array(26).fill(0);
    const codeA = 'a'.charCodeAt(0);
    for (let i = 0; i < s.length; i++) {
        const idx = s.charCodeAt(i) - codeA;
        freq[idx]++;
    }

    for (let i = 0; i < t.length; i++) {
        const idx = t.charCodeAt(i) - codeA;
        if (freq[idx] === 0) return false;
        freq[idx]--;
    }

    return true;
}

/**
 * # Approach
 * - Use a fixed-size frequency array for lowercase English letters.
 * - If `s` and `t` have different lengths, they cannot be anagrams.
 * - Count frequencies of characters in `s`.
 * - Scan `t` and decrement the matching frequency:
 *   - If any character in `t` tries to decrement a zero count,
 *     then `t` contains that character more times than `s` -> not an anagram.
 * - If we finish the scan without mismatch, the strings are anagrams.
 *
 * # Complexity
 * - Time:  O(n), where n is the string length.
 * - Space: O(1) because the frequency array size is constant (26 letters).
 */
