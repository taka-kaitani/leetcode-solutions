/**
 * LeetCode Problem: 1926. Nearest Exit from Entrance in Maze
 * https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/
 *
 * Solution by Takanori Kaitani
 */
function nearestExit(maze: string[][], entrance: [number, number]): number {
    const m = maze.length;
    const n = maze[0].length;
    const dr = [[0,-1], [0,1], [-1,0], [1,0]];
    let visited = Array.from({ length : m }, () => Array(n).fill(false));
    visited[entrance[0]][entrance[1]] = true;
    let queue: [number, number][] = [entrance];
    let front = 0;
    let steps = 0;

    while (queue.length > front) {
        const size = queue.length - front;
        steps++;
        for (let k = 0; k < size; k++) {
            const [y, x] = queue[front++];
            for (const [dy, dx] of dr) {
                const ny = y + dy, nx = x + dx;
                if (
                    0 <= ny && ny < m && 0 <= nx && nx < n &&
                    maze[ny][nx] === '.' &&
                    !visited[ny][nx]
                ) {
                    if (ny === 0 || ny === m - 1 || nx === 0 || nx === n - 1) {
                        return steps; // reached an exit
                    }
                    visited[ny][nx] = true;
                    queue.push([ny, nx]);
                }
            }
        }
    }

    return -1; // no exits
}

/**
 * # Approach
 * - Use an iterative Breadth-First Search (BFS) to find the minimum number of steps
 *   required to reach an exit.
 * - Maintain a 2D `visited` array so each cell is processed at most once.
 * - Use a queue (implemented as an array with a moving `front` index) to perform BFS:
 *     - `queue.push()` adds new cells to visit.
 *     - `queue[front++]` removes cells in O(1) time without using `.shift()`.
 * - For each BFS layer, process all nodes currently in the queue to ensure the first
 *   time we reach an exit corresponds to the shortest path.
 *
 * # Complexity
 * - Time:  O(m × n), since each cell is visited at most once.
 * - Space: O(m × n) for the visited array and queue.
 */
