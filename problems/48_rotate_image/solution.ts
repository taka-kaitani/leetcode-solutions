/**
 * LeetCode Problem: 48. Rotate Image
 * https://leetcode.com/problems/rotate-image/
 *
 * Solution by Takanori Kaitani
 */
function rotate(matrix: number[][]): void {
    const n = matrix.length;
    const end = n - 1;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = i; j < end - i; j++) {
            const top = matrix[i][j];
            const right = matrix[j][end - i];
            const bottom = matrix[end - i][end - j];
            const left = matrix[end - j][i];
            matrix[i][j] = left;
            matrix[j][end - i] = top;
            matrix[end - i][end - j] = right;
            matrix[end - j][i] = bottom;
        }
    }
}

/**
 * # Approach
 * - In-place rotation by processing the matrix layer by layer (outer ring → inner ring).
 * - For each layer `i`:
 *   - The layer spans rows/cols from `i` to `n - 1 - i`.
 *   - For each position `j` along the top edge of the layer, rotate the 4 corresponding cells:
 *     left -> top, top -> right, right -> bottom, bottom -> left.
 *
 * # Complexity
 * - Time:  O(n^2) (each cell moves once)
 * - Space: O(1)
 */
