/**
 * LeetCode Problem: 289. Game of Life
 * https://leetcode.com/problems/game-of-life/
 *
 * Solution by Takanori Kaitani
 */
function gameOfLife(board: number[][]): void {
    const m = board.length;
    const n = board[0].length;
    const dirs = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    function countLiveNeighbor(i: number, j: number): number {
        let count = 0;
        for (const [dy, dx] of dirs) {
            const [y, x] = [i + dy, j + dx];
            if (
                0 <= y && y < m &&
                0 <= x && x < n
            ) {
                count += board[y][x] & 1;
            }
        }
        return count;
    }

    // Add the next states
    // e.g. 1 -> 01 (current: 1, next: 0)
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const neighbor = countLiveNeighbor(i, j);
            if ((board[i][j] === 1 && neighbor === 2) || neighbor === 3) {
                board[i][j] |= 2; // next: live
            }
        }
    }

    // Remove the current states
    // e.g. 01 -> 0 (next: 0)
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            board[i][j] >>>= 1;
        }
    }
}

/**
 * # Approach
 * - In-place update using bit encoding.
 *   - Bit 0 (LSB) stores the current state (0/1).
 *   - Bit 1 stores the next state.
 *
 * - Pass 1: compute next state for each cell and write it into bit 1.
 *   - Count `neighbor` = number of live neighbors by reading `board[y][x] & 1`
 *     (so we always use the original state even after we start writing next states).
 *   - Rules:
 *     - If current cell is live (1): it stays live iff `neighbor` is 2 or 3.
 *     - If current cell is dead (0): it becomes live iff `neighbor` is 3.
 *   - If next state is live, set bit 1 (e.g. `board[i][j] |= 2`).
 *
 * - Pass 2: finalize by shifting right one bit (`board[i][j] >>>= 1`),
 *   so the next state becomes the current state.
 *
 * # Complexity
 * - Time:  O(m * n)
 * - Space: O(1) extra
 */
