/**
 * LeetCode Problem: 200. Number of Islands
 * https://leetcode.com/problems/number-of-islands/
 *
 * Solution by Takanori Kaitani
 */
function numIslands(grid: string[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const dr = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let visited = Array.from({ length : m}, () => new Array(n).fill(false));
    let queue: [number, number][] = [];
    let islands = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (visited[i][j] || grid[i][j] === '0') continue;

            // New island
            islands++;
            visited[i][j] = true;
            queue.push([i, j]);

            // Visit all spots of this island
            while (queue.length) {
                const [y, x] = queue.pop()!;
                for (const [dy, dx] of dr) {
                    const ny = y + dy;
                    const nx = x + dx;
                    if (
                        0 <= ny && ny < m &&
                        0 <= nx && nx < n &&
                        !visited[ny][nx] &&
                        grid[ny][nx] === '1'
                    ) {
                        visited[ny][nx] = true;
                        queue.push([ny, nx]);
                    }
                }
            }
        }
    }

    return islands;
}

/**
 * # Approach
 * - Use BFS (or DFS) to traverse each connected component of '1's.
 * - When an unvisited land cell ('1') is found, this cell starts a new island.
 * - Perform BFS to visit and mark all land cells connected to it.
 * - Mark cells as visited when they are added to the queue to prevent duplicates.
 *
 * # Complexity
 * - Time:  O(m × n) — each cell is processed once.
 * - Space: O(m × n) — visited matrix + queue in worst case.
 */
