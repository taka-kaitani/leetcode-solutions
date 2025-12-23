/**
 * LeetCode Problem: 56. Merge Intervals
 * https://leetcode.com/problems/merge-intervals/
 *
 * Solution by Takanori Kaitani
 */
function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0]);
    const res: number[][] = [];
    let left = intervals[0][0];
    let right = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        if (start > right) {
            res.push([left, right]);
            left = start;
            right = end;
        } else {
            right = Math.max(right, end);
        }
    }
    res.push([left, right]);

    return res;
}

/**
 * # Approach
 * - Sort intervals by start ascending.
 * - Sweep through intervals while maintaining the current merged interval [left, right].
 *   - If the next interval starts after `right`, there is no overlap:
 *     push [left, right] and start a new merged interval.
 *   - Otherwise, extend `right = max(right, end)`.
 *
 * # Complexity
 * - Time:  O(n log n) for sorting + O(n) for the sweep
 * - Space: O(log n) for sorting stack (implementation-dependent), O(1) extra during sweep (excluding output)
 */
