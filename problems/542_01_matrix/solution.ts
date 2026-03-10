/**
 * LeetCode Problem: 542. 01 Matrix
 * https://leetcode.com/problems/01-matrix/
 *
 * Solution by Takanori Kaitani
 */
function updateMatrix(mat: number[][]): number[][] {
    const m = mat.length;
    const n = mat[0].length;
    let curr: [number, number][] = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) curr.push([i, j]);
            else mat[i][j] = -1; // Mark as non-visited 1
        }
    }

    const dirs = [[0,1], [0,-1], [1,0], [-1,0]];
    let dist = 1;
    while (curr.length > 0) {
        const next: [number, number][] = [];
        for (const [y, x] of curr) {
            for (const [dy, dx] of dirs) {
                const ny = y + dy;
                const nx = x + dx;
                if (
                    0 <= ny && ny < m &&
                    0 <= nx && nx < n &&
                    mat[ny][nx] === -1 // non-visited 1
                ) {
                    mat[ny][nx] = dist;
                    next.push([ny, nx]);
                }
            }
        }
        curr = next;
        dist++;
    }

    return mat;
}

/**
 * # Approach
 * - Multi-source BFS to find the nearest 0 from 1 in the matrix.
 * - First scan:
 *   - Push the 0 cells into BFS frontier `curr`.
 *   - Update the cell `1` into `-1` as non-visited.
 * - Then, multi-source BFS:
 *   - Maintain:
 *     - dist: minimum distance from 0 cell
 *     - next: next queue
 *   - For each frontier cell, if the neighbor cell is not visited,
 *     write the `dist` and push it into the next frontier.
 * 
 * # Complexity
 * - Time:  O(m * n)
 * - Space: O(m * n) for queue `curr` and `next`
 */
