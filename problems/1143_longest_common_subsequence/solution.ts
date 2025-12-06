/**
 * LeetCode Problem: 1143. Longest Common Subsequence
 * https://leetcode.com/problems/longest-common-subsequence/
 *
 * Solution by Takanori Kaitani
 */
function longestCommonSubsequence(text1: string, text2: string): number {
    const m = text1.length;
    const n = text2.length;
    const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (text1[i] === text2[j]) dp[i + 1][j + 1] = dp[i][j] + 1;
            else dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
        }
    }

    return dp[m][n];
}

/**
 * # Approach
 * - Use dynamic programming (DP) to find the length
 *   of the longest common subsequence (LCS) of `text1` and `text2`.
 * 
 * - Maintain 2D array `dp` where `dp[i][j]` represents
 *   the length of LCS of `text1[0..i-1]` and `text2[0..j-1]`.
 * 
 * - Transition:
 *   - If `text1[i] === text2[j]`, these characters can be part of the LCS:
 *     - `dp[i + 1][j + 1] = dp[i][j] + 1`
 *   - Otherwise, the LCS up to `(i, j)` must come from either:
 *     - skipping `text1[i]` -> `dp[i][j + 1]`
 *     - or skipping `text2[j]` -> `dp[i + 1][j]`
 *     So we take:
 *     - `dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1])`
 * 
 * - After filling the table, `dp[m][n]` is the length of teh LCS of the full strings.
 * 
 * # Complexity
 * - Time: O(m × n)
 * - Space: O(m × n)
 */
