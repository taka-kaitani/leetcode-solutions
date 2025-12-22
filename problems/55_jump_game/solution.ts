/**
 * LeetCode Problem: 55. Jump Game
 * https://leetcode.com/problems/jump-game/
 *
 * Solution by Takanori Kaitani
 */
function canJump(nums: number[]): boolean {
    let farthest = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > farthest) return false;
        farthest = Math.max(farthest, i + nums[i]);
    }
    return true;
}

/**
 * # Approach
 * - Greedy one-pass scan.
 * - Maintain `farthest` as the farthest index reachable so far.
 * - For each index i:
 *   - If i > farthest, index i is not reachable -> return false.
 *   - Otherwise update farthest = max(farthest, i + nums[i]).
 * - If we finish the scan without getting stuck, the last index is reachable.
 *
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1)
 */
