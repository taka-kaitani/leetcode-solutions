/**
 * LeetCode Problem: 46. Permutations
 * https://leetcode.com/problems/permutations/
 *
 * Solution by Takanori Kaitani
 */
function permute(nums: number[]): number[][] {
    const n = nums.length;
    const res: number[][] = [];
    const path: number[] = [];
    const used: boolean[] = Array(n).fill(false);

    function dfs(): void {
        if (path.length === n) {
            res.push([...path]);
            return;
        }

        for (let i = 0; i < n; i++) {
            if (used[i]) continue;
            path.push(nums[i]);
            used[i] = true;
            dfs();
            path.pop();
            used[i] = false;
        }
    }

    dfs();
    return res;
}

/**
 * # Approach
 * - Backtracking (DFS) to generate all permutations.
 * - `path` stores the current permutation being built.
 * - `used[i]` indicates whether nums[i] is already in `path`.
 * - At each step, try every unused element, mark it used, recurse, then backtrack.
 * 
 * # Complexity
 * - Time:  O(n * n!) (n! permutations, each of length n)
 * - Space: O(n)
 */
