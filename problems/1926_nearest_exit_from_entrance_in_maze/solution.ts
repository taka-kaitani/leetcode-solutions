/**
 * LeetCode Problem: 1926. Nearest Exit from Entrance in Maze
 * https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/
 *
 * Solution by Takanori Kaitani
 */
function nearestExit(maze: string[][], entrance: [number, number]): number {
    const m = maze.length;
    const n = maze[0].length;
    const visited = Array.from({ length: m }, () => new Array<boolean>(n).fill(false));
    const dir = [[0,1], [0,-1], [1,0], [-1,0]];

    let steps = 0;
    let curr: [number, number][] = [entrance];
    visited[entrance[0]][entrance[1]] = true;
    while (curr.length) {
        steps++;
        const next: [number, number][] = [];
        for (const [y, x] of curr) {
            for (const [dy, dx] of dir) {
                const [ny, nx] = [y + dy, x + dx];
                if (
                    0 <= ny && ny < m &&
                    0 <= nx && nx < n &&
                    maze[ny][nx] === '.' &&
                    !visited[ny][nx]
                ) {
                    if (
                        0 === ny || ny === m - 1 ||
                        0 === nx || nx === n - 1
                    ) {
                        return steps;
                    }
                    visited[ny][nx] = true;
                    next.push([ny, nx]);
                }
            }
        }

        curr = next;
    }

    return -1; // No exits
}

/**
 * # Approach
 * - Use breadth-first search (BFS) to find the minimum number of steps needed
 *   to reach any exit from the entrance.
 *
 * - Maintain:
 *   - `visited`: a 2D boolean array marking cells we have already enqueued,
 *     so we never visit the same position more than once.
 *   - `curr`: the list of positions to process for the current step count.
 *   - `next`: the list of positions `[ny, nx]` to process in the next step.
 *   - `steps`: the number of moves taken from the entrance; incremented each time
 *     we move from `curr` to `next` (i.e., each BFS level).
 *
 * - For each cell `[y, x]` in `curr`, explore its four neighbors `[ny, nx]`.
 *   Enqueue a neighbor into `next` only if:
 *     - it lies inside the grid:
 *       `0 <= ny && ny < m && 0 <= nx && nx < n`
 *     - it is a valid path:
 *       `maze[ny][nx] === '.'`
 *     - it has not been visited yet:
 *       `!visited[ny][nx]`
 *
 * - When we are about to enqueue a neighbor `[ny, nx]`, if it lies on the boundary
 *   (`ny === 0 || ny === m - 1 || nx === 0 || nx === n - 1`) and is not the entrance,
 *   we can return `steps` because BFS guarantees this is the minimum distance.
 *
 * - If BFS finishes without finding any exit, return `-1`.
 *
 * # Complexity
 * - Let `m` be the number of rows and `n` be the number of columns.
 * - Time:  O(m × n), since each cell is processed at most once and each has up to 4 neighbors.
 * - Space: O(m × n) for the `visited` array and the BFS frontier in the worst case.
 */
