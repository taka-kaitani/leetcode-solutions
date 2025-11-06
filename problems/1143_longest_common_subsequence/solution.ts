/**
 * LeetCode Problem: 1143. Longest Common Subsequence
 * https://leetcode.com/problems/longest-common-subsequence/
 *
 * Solution by Takanori Kaitani
 */
function longestCommonSubsequence(text1: string, text2: string): number {
    let dp = [...Array(text1.length + 1)].map(() => Array(text2.length + 1).fill(0));

    for (let i = 0; i < text1.length; i++) {
        const ch1 = text1[i];
        for (let j = 0; j < text2.length; j++) {
            const ch2 = text2[j];
            if (ch1 === ch2) dp[i + 1][j + 1] =  dp[i][j] + 1;
            else dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j]);
        }
    }

    return dp[text1.length][text2.length];
};

/**
 * # Approach
 * - Use dynamic programming to find the length of  longest common subsequence (LCS)
 *   between `text1` and `text2`.
 * - Maintain a 2D array `dp`, where `dp[i][j]` represents the LSC length
 *   of `text1[0...i-1]` and `text2[0...j-1]`.
 * - Transition;
 *   - If `text1[i-1] === text2[j-1], then `dp[i][j] = dp[i-1][j-1] + 1`.
 *   - Otherwise, `dp[i][j] = max(dp[i][j-1], dp[i-1][j])`.
 * - Finally, return `dp[m][n]` where `m` and `n` are the length of `text1` and `text2`.
 * 
 * # Complexity
 * - Time:  O(m × n)
 * - Space: O(m × n)
 */
