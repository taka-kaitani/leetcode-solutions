/**
 * LeetCode Problem: 72. Edit Distance
 * https://leetcode.com/problems/edit-distance/
 *
 * Solution by Takanori Kaitani
 */
function minDistance(word1: string, word2: string): number {
    const dp = Array.from({ length: word1.length + 1 }, () => Array(word2.length + 1).fill(0));
    for (let i = 0; i <= word1.length; i++) dp[i][0] = i;
    for (let j = 0; j <= word2.length; j++) dp[0][j] = j;

    for (let i = 0; i < word1.length; i++) {
        const ch1 = word1[i];
        for (let j = 0; j < word2.length; j++) {
            const ch2 = word2[j];
            if (ch1 === ch2) {
                dp[i + 1][j + 1] = dp[i][j];
            } else {
                dp[i + 1][j + 1] = Math.min(
                    dp[i][j] + 1,     // Replace
                    dp[i][j + 1] + 1, // Delete
                    dp[i + 1][j] + 1, // Insert
                );
            }
        }
    }

    return dp[word1.length][word2.length];
};

/**
 * # Approach
 * - Use dynamic programming to compute the minimum number of operations
 *   required to convert `word1` to `word2`.
 * - Allowed operations:
 *   - Insert a character
 *   - Delete a character
 *   - Replace a character
 * - Maintain a 2D array `dp`, where `dp[i][j]` represents the minimum operations
 *   to convert `word1[0...i-1]` to `word2[0...j-1]`.
 * - Initialization:
 *   - `dp[i][0] = i`  (delete all `i` chars)
 *   - `dp[0][j] = j`  (insert all `j` chars)
 * - Transition:
 *   - If `word[i] === word[j]`, `dp[i+1][j+1] = dp[i][j]`.
 *   - Otherwise, `dp[i + 1][j + 1]` is the minimum of the 3 operations:
 *     - `dp[i][j] + 1` as replacement
 *     - `dp[i][j + 1] + 1` as deletion
 *     - `dp[i + 1][j] + 1` as insertion
 * - Return `dp[word1.length][word2.length]` as the final result.
 * 
 * # Complexity
 * - Time:  O(m × n)
 * - Space: O(m × n)
 */
