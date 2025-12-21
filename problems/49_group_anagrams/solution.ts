/**
 * LeetCode Problem: 49. Group Anagrams
 * https://leetcode.com/problems/group-anagrams/
 *
 * Solution by Takanori Kaitani
 */
function groupAnagrams(strs: string[]): string[][] {
    const group = new Map<string, string[]>();
    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        group.set(sortedStr, [...group.get(sortedStr) ?? [], str]);
    }

    return [...group.values()];
}

/**
 * # Approach
 * - Use a hash map from a canonical key to a list of original strings.
 * - Canonical key: sort the characters of each string; all anagrams produce the same key.
 * - Append each string to its key’s bucket, then return all buckets.
 *
 * # Complexity
 * - Let n be strs.length, and s be the max string length.
 * - Time:  O(n * s log s) (sorting each string)
 * - Space: O(n * s) total for the stored strings/groups (excluding input), plus O(s) temp per sort
 */
