/**
 * LeetCode Problem: 228. Summary Ranges
 * https://leetcode.com/problems/summary-ranges/
 *
 * Solution by Takanori Kaitani
 */
function summaryRanges(nums: number[]): string[] {
    const n = nums.length;
    if (n === 0) return [];

    const res: string[] = [];
    let start = nums[0];
    for (let i = 1; i < n; i++) {
        if (nums[i] - nums[i - 1] === 1) continue;

        if (start === nums[i - 1]) res.push(String(start));
        else res.push(String(start) + '->' + String(nums[i - 1]));
        start = nums[i];
    }

    if (start === nums[n - 1]) res.push(String(start));
    else res.push(String(start) + '->' + String(nums[n - 1]));

    return res;
}

/**
 * # Approach
 * - Linear scan and build ranges on the fly.
 * - Keep `start` as the first value of the current consecutive range.
 * - When a break in consecutiveness is found at index i:
 *   - The current range ends at `nums[i - 1]`.
 *   - If `start === nums[i - 1]`, push `"start"`.
 *   - Otherwise, push `"start->end"`.
 *   - Start a new range at `nums[i]`.
 * - After the loop, flush the last range the same way.
 *
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1) extra (excluding the output array), O(n) including output
 */
