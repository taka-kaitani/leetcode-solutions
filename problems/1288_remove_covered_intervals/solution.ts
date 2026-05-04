/**
 * LeetCode Problem: 1288. Remove Covered Intervals
 * https://leetcode.com/problems/remove-covered-intervals/
 *
 * Solution by Takanori Kaitani
 */
function removeCoveredIntervals(intervals: number[][]): number {
    // sort
    intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

    // check each intervals
    let count = intervals.length;
    let coverR = 0;
    for (const [l, r] of intervals) {
        if (r <= coverR) count--;
        else coverR = r;
    }

    return count;
}

/**
 * # Approach
 * - Sort intervals
 *     1. in ascending order with left boundaries `a[0] - b[0]`
 *     2. in descending order with right boundaries `a[1] - b[1]`
 *   to maintain the interval that can be cover the current interval so far.
 * - For each interval,
 *   - Maintain coverR: right most boundary seen so far
 *   - If it is covered by other interval, decrement `count`.
 *   - Otherwise, expand the `coverR`
 * 
 * # Complexity
 * - Time:  O(n log n) for sorting
 * - Space: O(1) extra
 */
