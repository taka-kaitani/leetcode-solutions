/**
 * LeetCode Problem: 1020. Number of Enclaves
 * https://leetcode.com/problems/number-of-enclaves/
 *
 * Solution by Takanori Kaitani
 */
function numEnclaves(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const dirs: number[][] = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    function bfs(i: number, j: number): void {
        grid[i][j] = 0; // mark visited
        let curr: [number, number][] = [[i, j]];
        while (curr.length) {
            const next: [number, number][] = [];
            for (const [y, x] of curr) {
                for (const [dy, dx] of dirs) {
                    const ny = y + dy;
                    const nx = x + dx;
                    if (
                        0 <= ny && ny < m &&
                        0 <= nx && nx < n &&
                        grid[ny][nx] === 1
                    ) {
                        grid[ny][nx] = 0; // mark visited
                        next.push([ny, nx]);
                    }
                }
            }
            curr = next;
        }
    }

    // BFS from border and rewrite 1 into 0
    for (let i = 0; i < m; i++) {
        if (grid[i][0] === 1) bfs(i, 0);
        if (grid[i][n - 1] === 1) bfs(i, n - 1);
    }
    for (let j = 1; j < n - 1; j++) {
        if (grid[0][j] === 1) bfs(0, j);
        if (grid[m - 1][j] === 1) bfs(m - 1, j);
    }

    // count the remaining 1
    let count: number = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) count++;
        }
    }

    return count;
}

/**
 * # Approach
 * - Use a bfs to update cells 1 which is connected with border into 0.
 * - After update them, the total remaining 1 is the result.
 * 
 * # Complexity
 * - Time:  O(m * n)
 * - Space: O(m * n)
 */
