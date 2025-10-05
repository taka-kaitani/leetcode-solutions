/**
 * LeetCode Problem: 1926. Nearest Exit from Entrance in Maze
 * https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/
 *
 * Solution by Takanori Kaitani
 */
function nearestExit(maze: string[][], entrance: [number, number]): number {
    const bottom = maze.length - 1;
    const right  = maze[0].length - 1;
    const dirs = [[0,-1],[0,1],[-1,0],[1,0]]; // left, right, up and down
    let currArr: [number, number][] = [entrance];
    maze[entrance[0]][entrance[1]] = 'v'; // Mark visited
    let step = 0;

    while (currArr.length) {
        step++;
        let nextArr: [number, number][] = [];
        for (const curr of currArr) {
            for (const dir of dirs) {
                const next: [number, number] = [curr[0] + dir[0], curr[1] + dir[1]];
                if (isValidRoute(maze, next)) {
                    if (isExit(bottom, right, next)) return step;
                    nextArr.push(next);
                    maze[next[0]][next[1]] = 'v'; // Mark visited
                }
            }
        }

        currArr = nextArr;
    }

    return -1;
};

function isExit(bottom: number, right: number, curr: [number, number]): boolean {
    return (
        [0, bottom].includes(curr[0]) ||
        [0, right].includes(curr[1])
    );
}

function isValidRoute(maze: string[][], curr: [number, number]): boolean {
    return (
        curr[0] >= 0 && curr[0] < maze.length &&
        curr[1] >= 0 && curr[1] < maze[0].length &&
        maze[curr[0]][curr[1]] === '.'
    );
}
