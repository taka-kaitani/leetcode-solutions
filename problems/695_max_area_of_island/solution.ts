/**
 * LeetCode Problem: 695. Max Area of Island
 * https://leetcode.com/problems/max-area-of-island/
 *
 * Solution by Takanori Kaitani
 */
function maxAreaOfIsland(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    let max = 0;

    function bfs(i: number, j: number): number {
        let area = 1;
        let curr: [number, number][] = [[i, j]];
        grid[i][j] = -1; // mark as visited

        while (curr.length > 0) {
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
                        area++;
                        next.push([ny, nx]);
                        grid[ny][nx] = -1; // mark as visited
                    }
                }
            }
            curr = next;
        }

        return area;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // Unvisited island
            if (grid[i][j] === 1) {
                max = Math.max(max, bfs(i, j));
            }
        }
    }

    return max;
}

/**
 * # Approach
 * - Use breadth-first search to find the largest island.
 * - Scanning every cell in `grid`, when we find unvisited island (`1`),
 *   update `max = max(max, bfs(i, j))`
 * - bfs(i, j):
 *   - BFS starting from grid[i][j] and count up `area`
 *   - Mark `-1` as visited.
 *   - Return the `area` of this island.
 * 
 * # Complexity
 * - Time:  O(m * n)
 * - Space: O(m * n)
 */
