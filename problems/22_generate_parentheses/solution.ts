/**
 * LeetCode Problem: 22. Generate Parentheses
 * https://leetcode.com/problems/generate-parentheses/
 *
 * Solution by Takanori Kaitani
 */
function generateParenthesis(n: number): string[] {
    const res: string[] = [];

    function backtrack(path: string, open: number, close: number): void {
        if (path.length === 2 * n) {
            res.push(path);
            return;
        }

        if (open < n)     backtrack(path + '(', open + 1, close);
        if (close < open) backtrack(path + ')', open, close + 1);
    }

    backtrack('', 0, 0);
    return res;
}

/**
 * # Approach
 * - Backtracking (DFS) to generate all valid parentheses strings of length 2n.
 *
 * - State in each call:
 *   - `path`: current string
 *   - `open`: number of '(' used so far
 *   - `close`: number of ')' used so far
 *
 * - Rules / invariants:
 *   - We can add '(' if open < n.
 *   - We can add ')' only if close < open (so no prefix is ever invalid).
 *
 * - Base case:
 *   - When path.length === 2 * n, `path` is complete and valid; add it to results.
 *
 * # Complexity
 * - Let Cn be the n-th Catalan number (the number of valid strings).
 * - Time:  O(Cn * n) (output Cn strings, each of length 2n)
 * - Space: O(n) recursion depth (excluding output)
 */
