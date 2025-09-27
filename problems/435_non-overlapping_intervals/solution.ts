/**
 * LeetCode Problem: 435. Non-overlapping Intervals
 * https://leetcode.com/problems/non-overlapping-intervals/
 *
 * Solution by Takanori Kaitani
 */
function eraseOverlapIntervals(intervals: [number, number][]): number {
    intervals.sort((a, b) => a[1] - b[1]);

    let end = -Infinity;
    let remove = 0;
    for (const [s, e] of intervals) {
        if (s < end) remove++;
        else         end = e;
    }

    return remove;
};
