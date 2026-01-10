/**
 * LeetCode Problem: 130. Surrounded Regions
 * https://leetcode.com/problems/surrounded-regions/
 *
 * Solution by Takanori Kaitani
 */
function solve(board: string[][]): void {
    const m = board.length;
    const n = board[0].length;
    if (m < 3 || n < 3) return;

    // Mark 'E' if the region is on the edge
    const queue: [number, number][] = [];
    function markOnEdge(y: number, x: number): void {
        if (board[y][x] !== 'O') return;
        board[y][x] = 'E';
        queue.push([y, x]);
    }

    for (let i = 1; i < m - 1; i++) {
        if (board[i][0] === 'O') markOnEdge(i, 1);
        if (board[i][n - 1] === 'O') markOnEdge(i, n - 2);
    }
    for (let j = 1; j < n - 1; j++) {
        if (board[0][j] === 'O') markOnEdge(1, j);
        if (board[m - 1][j] === 'O') markOnEdge(m - 2, j);
    }

    // BFS
    const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    for (let i = 0; i < queue.length; i++) {
        for (const [dy, dx] of dir) {
            const [ny, nx] = [queue[i][0] + dy, queue[i][1] + dx];
            if (0 < ny && ny < m - 1 && 0 < nx && nx < n - 1) {
                markOnEdge(ny, nx);
            }
        }
    }

    // Update cells not on the edge
    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            if (board[i][j] === 'E') board[i][j] = 'O'; // escaped
            else if (board[i][j] === 'O') board[i][j] = 'X'; // surrounded
        }
    }
}

/**
 * # Approach
 * - If m < 3 or n < 3, there is no interior cell, so nothing can be surrounded.
 * - Mark all interior 'O' cells that are connected to the border as escaped ('E'):
 *   - We do not mark border cells themselves (they can never be surrounded).
 *   - Instead, for every border 'O', we enqueue its adjacent interior cell (if it is 'O').
 *   - BFS from these entrances and mark every reachable interior 'O' as 'E'.
 * - Finally, scan only the interior cells:
 *   - 'O' -> 'X' (surrounded)
 *   - 'E' -> 'O' (escaped)
 *
 * # Complexity
 * - Time:  O(m * n)
 * - Space: O(m * n) worst-case queue size
 */
