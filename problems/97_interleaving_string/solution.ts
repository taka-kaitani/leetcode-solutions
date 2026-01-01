/**
 * LeetCode Problem: 97. Interleaving String
 * https://leetcode.com/problems/interleaving-string/
 *
 * Solution by Takanori Kaitani
 */
function isInterleave(s1: string, s2: string, s3: string): boolean {
    const m = s1.length;
    const n = s2.length;
    if (m + n !== s3.length) return false;

    // dp[j]: whether s1[0..i) and s2[0..j) can form s3[0..i+j)
    let dp = new Array(n + 1).fill(false);

    // i = 0
    dp[0] = true;
    for (let j = 1; j <= n; j++) {
        if (s2[j - 1] !== s3[j - 1]) break;
        dp[j] = true;
    }

    for (let i = 1; i <= m; i++) {
        // j = 0
        dp[0] = dp[0] && s1[i - 1] === s3[i - 1];

        for (let j = 1; j <= n; j++) {
            const ch3 = s3[i + j - 1];
            dp[j] = (
                dp[j] && s1[i - 1] === ch3 ||
                dp[j - 1] && s2[j - 1] === ch3
            );
        }
    }

    return dp[n];
}

/**
 * # Approach
 * - Dynamic Programming with 1D compression.
 * - Let DP[i][j] be true if s1[0..i) and s2[0..j) can form s3[0..i+j).
 * - Transition:
 *   - Take from s1: DP[i][j] |= DP[i-1][j] if s1[i-1] == s3[i+j-1]
 *   - Take from s2: DP[i][j] |= DP[i][j-1] if s2[j-1] == s3[i+j-1]
 * - Compress DP rows into a 1D array `dp[j]`.
 *
 * # Complexity
 * - Time:  O(m * n)
 * - Space: O(n)
 */
