/**
 * LeetCode Problem: 79. Word Search
 * https://leetcode.com/problems/word-search/
 *
 * Solution by Takanori Kaitani
 */
function exist(board: string[][], word: string): boolean {
    const m = board.length;
    const n = board[0].length;

    // DFS
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    function dfs(idx: number, y: number, x: number): boolean {
        if (idx === word.length) return true;
        for (const [dy, dx] of dirs) {
            const ny = y + dy;
            const nx = x + dx;
            if (
                0 <= ny && ny < m && 0 <= nx && nx < n &&
                board[ny][nx] === word[idx]
            ) {
                board[ny][nx] = '#'; // Mark as visited
                if (dfs(idx + 1, ny, nx)) return true;
                board[ny][nx] = word[idx]; // Backtrack
            }
        }
        return false;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0]) {
                board[i][j] = '#'; // Mark as visited
                if (dfs(1, i, j)) return true;
                board[i][j] = word[0]; // Backtrack
            }
        }
    }

    return false;
}

/**
 * # Approach
 * - Backtracking DFS from every cell that matches word[0].
 * - Use in-place marking (set board[y][x] = '#') to prevent reusing a cell in the current path.
 * - At each step idx, try 4 directions to match word[idx]; backtrack if it fails.
 *
 * # Complexity
 * - Let m,n be board size and L be word.length.
 * - Time:  O(m * n * 3^L) worst case.
 * - Space: O(L) recursion stack, O(1) extra (in-place visited marking).
 */
