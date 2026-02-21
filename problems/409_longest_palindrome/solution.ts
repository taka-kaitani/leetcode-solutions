/**
 * LeetCode Problem: 409. Longest Palindrome
 * https://leetcode.com/problems/longest-palindrome/
 *
 * Solution by Takanori Kaitani
 */
function longestPalindrome(s: string): number {
    const freq = new Map<string, number>();
    for (const c of s) {
        freq.set(c, (freq.get(c) ?? 0) + 1);
    }

    let hasOdd = 0; // 0: no odd freq, 1: at least 1 odd freq
    let evenCount = 0;
    for (const f of freq.values()) {
        const lsd = f & 1;
        if (lsd === 1) hasOdd = 1;
        evenCount += (f - lsd);
    }

    return evenCount + hasOdd; // odd letter is at the center
}

/**
 * # Approach
 * - Use a hash map to count the frequency of each letter (uppercase and lowercase English letter).
 * - For each character, use the even portion of its frequency.
 *   - Sum up: `evenCount += (f - lsd)` where lsd is 1 if f is odd, 0 if even.
 * - We can place at most 1 character with odd frequency in the center.
 * - The final result is `evenCount + hasOdd`.
 * 
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1)
 */
