/**
 * LeetCode Problem: 57. Insert Interval
 * https://leetcode.com/problems/insert-interval/
 *
 * Solution by Takanori Kaitani
 */
function insert(intervals: number[][], newInterval: number[]): number[][] {
    const res: number[][] = [];
    const n = intervals.length;
    let i = 0;
    let [newStart, newEnd] = newInterval;

    while (i < n && intervals[i][1] < newStart) {
        res.push([...intervals[i]]);
        i++;
    }

    // Merge all intervals that overlap with newInterval
    while (i < n && intervals[i][0] <= newEnd) {
        newStart = Math.min(newStart, intervals[i][0]);
        newEnd   = Math.max(newEnd, intervals[i][1]);
        i++;
    }
    res.push([newStart, newEnd]);

    while (i < n) {
        res.push([...intervals[i]]);
        i++;
    }

    return res;
}

/**
 * # Approach
 * - `intervals` is sorted and non-overlapping.
 * - Sweep in three phases:
 *   1) push intervals completely before newInterval
 *   2) merge all overlapping intervals into newInterval, then push the merged interval once
 *   3) push the remaining intervals
 *
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1) extra (excluding output)
 */
