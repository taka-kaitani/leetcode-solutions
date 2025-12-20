/**
 * LeetCode Problem: 45. Jump Game II
 * https://leetcode.com/problems/jump-game-ii/
 *
 * Solution by Takanori Kaitani
 */
function jump(nums: number[]): number {
    const n = nums.length;
    let jumps = 0;
    let currentEnd = 0; // farthest index reachable with current number of jumps
    let farthest = 0;   // farthest index reachable with one more jump while scanning the current layer

    for (let i = 0; i < n - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);

        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;
            if (currentEnd >= n - 1) break;
        }
    }

    return jumps;
}

/**
 * # Approach
 * - Greedy one-pass, similar to BFS by layer.
 * - Maintain:
 *   - `currentEnd`: farthest reachable index with `jumps` jumps.
 *   - `farthest`: farthest reachable index with `jumps + 1` jumps while scanning the current range.
 * - Iterate i from n-2:
 *   - Update `farthest = max(farthest, i + nums[i])`.
 *   - When i reaches `currentEnd`, we must take a jump:
 *     - `jumps++`, and set `currentEnd = farthest` to move the next layer.
 * 
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1)
 */
