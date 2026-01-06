/**
 * LeetCode Problem: 120. Triangle
 * https://leetcode.com/problems/triangle/
 *
 * Solution by Takanori Kaitani
 */
function minimumTotal(triangle: number[][]): number {
    const n = triangle.length;
    let dp: number[] = [triangle[0][0]]; // i = 0

    for (let i = 1; i < n; i++) {
        dp.push(dp[i - 1] + triangle[i][i]); // new rightmost dp[i]
        for (let j = i - 1; j > 0; j--) {
            dp[j] = Math.min(dp[j - 1], dp[j]) + triangle[i][j];
        }
        dp[0] += triangle[i][0]; // leftmost
    }

    return Math.min(...dp);
}

/**
 * # Approach
 * - Dynamic Programming, processed row by row.
 * - Use a 1D array `dp` where after processing row `i`:
 *   - `dp[j]` = minimum path sum from the top to `triangle[i][j]`.
 * - Transition:
 *   - Rightmost and leftmost positions have only one parent.
 *   - Middle positions: dp[j] = min(dp[j-1], dp[j]) + triangle[i][j].
 * - Update `dp` from right to left so that dp[j] and dp[j-1] still refer to the previous row.
 * - After processing all rows, the answer is min value in `dp`.
 *
 * # Complexity
 * - Time:  O(n^2)
 * - Space: O(n)
 */
