/**
 * LeetCode Problem: 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * Solution by Takanori Kaitani
 */
function lengthOfLongestSubstring(s: string): number {
    let maxLen = 0;
    const seen = new Set<string>();
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        const ch = s[right];
        while (seen.has(ch)) seen.delete(s[left++]);
        seen.add(ch);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};

/**
 * # Approach
 * - Use a sliding window to find the longest substring
 *   that contains only unique characters.
 * - Maintain a Set to track the current window's characters.
 * - When a duplicate is found, move the left pointer
 *   until the window becomes unique again.
 * 
 * # Complexity
 * - Time: O(n)
 * - Space: O(L) where L is the number of unique characters in the substring
 */
