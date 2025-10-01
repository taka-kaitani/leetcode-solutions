/**
 * LeetCode Problem: 1143. Longest Common Subsequence
 * https://leetcode.com/problems/longest-common-subsequence/
 *
 * Solution by Takanori Kaitani
 */
function longestCommonSubsequence(text1: string, text2: string): number {
    const len1 = text1.length;
    const len2 = text2.length;
    let dp = Array.from({length: len1 + 1}, () => new Array(len2 + 1).fill(0));

    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            if (text1[i] === text2[j]) {
                dp[i+1][j+1] = dp[i][j] + 1;
            } else {
                dp[i+1][j+1] = Math.max(dp[i+1][j], dp[i][j+1]);
            }
        }
    }

    return dp[len1][len2];
};
