/**
 * LeetCode Problem: 74. Search a 2D Matrix
 * https://leetcode.com/problems/search-a-2d-matrix/
 *
 * Solution by Takanori Kaitani
 */
function searchMatrix(matrix: number[][], target: number): boolean {
    const m = matrix.length;
    const n = matrix[0].length;
    if (matrix[0][0] > target || matrix[m - 1][n - 1] < target) return false;

    // Binary search the first column
    let left = 0, right = m - 1;
    while (left < right) {
        const mid = Math.ceil((left + right) / 2);
        if (matrix[mid][0] > target) right = mid - 1;
        else                         left = mid;
    }
    const row = left;

    // Binary search the target row
    left = 0, right = n - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (matrix[row][mid] === target) return true;
        if (matrix[row][mid] > target) right = mid - 1;
        else                           left = mid + 1;
    }

    return false;
}

/**
 * # Approach
 * - Two binary searches.
 * - 1) Row selection (on the first column):
 *    - Find the last row `row` such that matrix[row][0] <= target.
 * - 2) Binary search within that row to check if target exists.
 *
 * # Complexity
 * - Time:  O(log m + log n)
 * - Space: O(1)
 */
