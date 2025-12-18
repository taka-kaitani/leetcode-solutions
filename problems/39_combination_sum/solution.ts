/**
 * LeetCode Problem: 39. Combination Sum
 * https://leetcode.com/problems/combination-sum/
 *
 * Solution by Takanori Kaitani
 */
function combinationSum(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b);
    const res: number[][] = [];
    const path: number[] = [];

    function dfs(start: number, remain: number): void {
        if (remain === 0) {
            res.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            const val = candidates[i];
            if (val > remain) break;

            path.push(val);
            dfs(i, remain - val);
            path.pop();
        }
    }

    dfs(0, target);
    return res;
}

/**
 * # Approach
 * - Backtracking (DFS) to build combinations whose sum equals `target`.
 * - Sort `candidates` ascending to enable pruning.
 *
 * - DFS state:
 *   - `path`: current combination being built
 *   - `remain`: remaining sum to reach `target`
 *   - `start`: the first index we are allowed to use next
 *
 * - Transitions:
 *   - Iterate i from `start` to end:
 *     - Let val = candidates[i]
 *     - If val > remain, break (because candidates are sorted, later values are also too large).
 *     - Choose val: push to `path`, recurse with (start = i) to allow reuse, and remain - val.
 *     - Backtrack: pop from `path`.
 *
 * - Base case:
 *   - If remain === 0, `path` is a valid combination; add a copy to results.
 *
 * # Complexity
 * - Sorting: O(n log n)
 * - DFS: Exponential in the worst case (depends on number of valid combinations).
 * - Space: O(target / min(candidates)) recursion depth (excluding output).
 */
