/**
 * LeetCode Problem: 72. Edit Distance
 * https://leetcode.com/problems/edit-distance/
 *
 * Solution by Takanori Kaitani
 */
function minDistance(word1: string, word2: string): number {
    const m = word1.length;
    const n = word2.length;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let i = 1; i <= n; i++) dp[0][i] = i;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
            else {
                dp[i][j] = 1 + Math.min(
                    dp[i][j - 1],    // insert
                    dp[i - 1][j],    // delete
                    dp[i - 1][j - 1] // replace
                );
            }
        }
    }

    return dp[m][n];
}

/**
 * # Approach
 * - Use dynamic programming to compute the minimum number of operations
 *   needed to convert `word1` into `word2`.
 * 
 * - Define a 2D array `dp` where:
 *   - `dp[i][j]` = minimum number of operations to convert `word1[0..i-1]` into `word2[0..j-1]`
 * 
 * - Base cases:
 *   - `dp[i][0] = i`: Converting a non-empty prefix of `word1` to an empty string requires `i` deletions.
 *   - `dp[0][j] = j`: Converting an empty string to a non-empty prefix of `word2` requires `j` insertions.
 * 
 * - Transition:
 *   - If `word1[i-1] === word2[j-1]`, no operation is needed:
 *     - `dp[i][j] = dp[i - 1][j - 1]`
 *   - Otherwise, consider one operation plus the best previous result:
 *     - insert:  dp[i][j] = 1 + dp[i][j - 1]
 *     - delete:  dp[i][j] = 1 + dp[i - 1][j]
 *     - replace: dp[i][j] = 1 + dp[i - 1][j - 1]
 *     - Take the minimum of these three.
 * 
 * - The answer is `dp[m][n]`, the cost to convert all of `word1` into all of `word2`.
 * 
 * # Complexity
 * - Time: O(m × n)
 * - Space: O(m × n)
 */
