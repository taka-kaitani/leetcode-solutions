/**
 * LeetCode Problem: 139. Word Break
 * https://leetcode.com/problems/word-break/
 *
 * Solution by Takanori Kaitani
 */
function wordBreak(s: string, wordDict: string[]): boolean {
    const n = s.length;
    const set = new Set<string>(wordDict);
    const dp = new Array(n).fill(false); // dp[i]: whether s[0..i] can be segmented

    for (let i = 0; i < n; i++) {
        const prefix = s.slice(0, i + 1);
        if (set.has(prefix)) {
            dp[i] = true;
            continue;
        }

        for (let j = 0; j < i; j++) {
            if (dp[j] && set.has(prefix.slice(j + 1, i + 1))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[n - 1];
}

/**
 * # Approach
 * - Dynamic programming + hash set for fast dictionary lookup.
 * - Let `dp[i]` mean: the prefix `s[0..i]` can be segmented into dictionary words.
 * - Transition:
 *   - `dp[i]` is true if either:
 *     - `s[0..i]` itself is in the dictionary, or
 *     - there exists `j` (0 <= j < i) such that:
 *       - `dp[j]` is true, and
 *       - `s[j+1..i]` is in the dictionary.
 * - The answer is `dp[n - 1]`.
 *
 * # Complexity
 * - Let n = `s.length`, and w = `wordDict.length`.
 * - Time:  O(n^2) dictionary checks (substring creation adds overhead in JS/TS).
 * - Space: O(n + w) for `dp` and the set.
 */
