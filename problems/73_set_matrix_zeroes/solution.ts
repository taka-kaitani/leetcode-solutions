/**
 * LeetCode Problem: 73. Set Matrix Zeroes
 * https://leetcode.com/problems/set-matrix-zeroes/
 *
 * Solution by Takanori Kaitani
 */
function setZeroes(matrix: number[][]): void {
    const m = matrix.length;
    const n = matrix[0].length;

    const hasFirstColZero = matrix.some(row => row[0] === 0);
    const hasFirstRowZero = matrix[0].includes(0);

    // Use first row and first column as marker storage
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Zero out cells based on markers (excluding first row/column)
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if (hasFirstColZero) {
        for (let i = 0; i < m; i++) matrix[i][0] = 0;
    }
    if (hasFirstRowZero) {
        for (let j = 0; j < n; j++) matrix[0][j] = 0;
    }
}

/**
 * # Approach
 * - Use the first row and first column as O(1) marker storage:
 *   - If matrix[i][j] is 0, mark its row and column by setting:
 *     - `matrix[i][0] = 0`
 *     - `matrix[0][j] = 0`
 * - Because the first row/col are used as markers,
 *   separately record whether they originally contains zeros.
 * - After marking, zero out all cells (except first row/col) whose row or column is marked.
 * - Finally, zero out the first row/col if needed.
 * 
 * # Complexity
 * - Time:  O(m * n)
 * - Space: O(1)
 */
