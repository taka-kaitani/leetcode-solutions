/**
 * LeetCode Problem: 279. Perfect Squares
 * https://leetcode.com/problems/perfect-squares/
 *
 * Solution by Takanori Kaitani
 */
function numSquares(n: number): number {
    const squares: number[] = [];
    for (let i = 1; i * i <= n; i++) {
        squares.push(i * i);
    }

    const dp: number[] = new Array(n + 1).fill(n);
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
        for (const square of squares) {
            if (square > i) break;
            dp[i] = Math.min(dp[i], dp[i - square] + 1);
        }
    }

    return dp[n];
}

/**
 * # Approach
 * - Dynamic Programming (unbounded knapsack style).
 * - Precompute all perfect squares `sq` such that `sq <= n`.
 * - Let `dp[i]` be the minimum number of perfect squares that sum to `i`.
 *   - Base: `dp[0] = 0`
 *   - Transition:
 *     - For each `i` from 1..n, try using one square `sq` (sq <= i):
 *       `dp[i] = min(dp[i], dp[i - sq] + 1)`
 * - The answer is `dp[n]`.
 *
 * # Complexity
 * - Let k = floor(sqrt(n)) be the number of squares <= n.
 * - Time:  O(n * k) = O(n * sqrt(n))
 * - Space: O(n)
 */
