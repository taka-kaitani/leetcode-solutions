/**
 * LeetCode Problem: 518. Coin Change II
 * https://leetcode.com/problems/coin-change-ii/
 *
 * Solution by Takanori Kaitani
 */
function change(amount: number, coins: number[]): number {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;

    for (const coin of coins) {
        for (let j = coin; j <= amount; j++) {
            dp[j] += dp[j - coin];
        }
    }

    return dp[amount];
}

/**
 * # Approach
 * - Unbounded knapsack DP. dp[i] = number of combinations to make amount i.
 * - Base case: dp[0] = 1 (one way to make 0: use nothing).
 * - For each coin, update dp[j] += dp[j - coin] for j from coin to amount.
 * - Outer loop over coins (not amounts) ensures we count combinations, not permutations.
 *
 * # Complexity
 * - Time:  O(amount * coins.length)
 * - Space: O(amount)
 */
