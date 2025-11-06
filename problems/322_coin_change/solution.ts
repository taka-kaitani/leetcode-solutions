/**
 * LeetCode Problem: 322. Coin Change
 * https://leetcode.com/problems/coin-change/
 *
 * Solution by Takanori Kaitani
 */
function coinChange(coins: number[], amount: number): number {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (const c of coins) {
        for (let i = c; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - c] + 1);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};

/**
 * # Approach
 * - Use bottom-up dynamic programming with an array `dp`
 *   where dp[i] represents the minimum coins needed to make amount i.
 * - Initialize dp[0] = 0 and all others to Infinity.
 * - For each coin, update dp[i] = min(dp[i], dp[i - coin] + 1) for i ≥ coin.
 * - Return dp[amount], or -1 if it's still Infinity.
 * 
 * # Complexity
 * - Time:  O(n × amount)
 * - Space: O(n)
 */
