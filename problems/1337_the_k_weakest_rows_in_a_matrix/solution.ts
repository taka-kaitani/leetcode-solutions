/**
 * LeetCode Problem: 1337. The K Weakest Rows in a Matrix
 * https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
 *
 * Solution by Takanori Kaitani
 */
function kWeakestRows(mat: number[][], k: number): number[] {
    // traverse the grid from top to bottom
    const m = mat.length;
    const n = mat[0].length;

    const res: number[] = [];
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < m; i++) {
            if (
                mat[i][j] === 0 &&
                (j === 0 || mat[i][j - 1] === 1)
            ) {
                res.push(i);
                if (res.length === k) return res;
            }
        }
    }

    // res is not enough
    for (let i = 0; i < m; i++) {
        if (mat[i][n - 1] === 1) {
            res.push(i);
            if (res.length === k) return res;
        }
    }

    return res;
}

/**
 * # Approach
 * - Traverse the grid from top to bottom.
 * - If we find the first `0` in the row;
 *   - push the row into a result array.
 *   - return the array if it is full (the length reaches `k`).
 * - This traversal order achieve the rule of this problem.
 * 
 * # Complexity
 * - Time:  O(m * n)
 * - Space: O(1) extra
 */
