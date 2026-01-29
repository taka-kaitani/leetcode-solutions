/**
 * LeetCode Problem: 221. Maximal Square
 * https://leetcode.com/problems/maximal-square/
 *
 * Solution by Takanori Kaitani
 */
function maximalSquare(matrix: string[][]): number {
    const m = matrix.length;
    const n = matrix[0].length;
    let prevRow = new Array(n).fill(0);
    let maxLen = 0

    // row-0
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === '1') {
            prevRow[j] = 1;
            maxLen = 1;
        }
    }

    // Scan from row-1
    for (let i = 1; i < m; i++) {
        let currRow = new Array(n).fill(0);
        if (matrix[i][0] === '1') {
            currRow[0] = 1;
            maxLen = Math.max(maxLen, 1);
        }

        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === '1') {
                currRow[j] = Math.min(prevRow[j - 1], prevRow[j], currRow[j - 1]) + 1;
                maxLen = Math.max(maxLen, currRow[j]);
            }
        }

        prevRow = currRow;
    }

    return maxLen ** 2;
}

/**
 * # Approach
 * - Dynamic Programming (row-compressed).
 * - Let dp[i][j] be the side length of the largest all-1 square whose bottom-right corner is matrix[i][j].
 * - Transition:
 *   - If matrix[i][j] === '0', dp[i][j] = 0.
 *   - If matrix[i][j] === '1', dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1.
 *     (A square can only be extended if top, left, and top-left can support it.)
 *
 * - Use two 1D arrays:
 *   - `prevRow[j]` = dp value for the previous row (i - 1).
 *   - `currRow[j]` = dp value for the current row i.
 * - Track `maxLen` = maximum side length seen so far, and return maxLen^2.
 *
 * # Complexity
 * - Time:  O(m * n)
 * - Space: O(n)
 */
