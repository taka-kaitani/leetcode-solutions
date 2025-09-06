<?php
/**
 * LeetCode Problem: 435. Non-overlapping Intervals
 * https://leetcode.com/problems/non-overlapping-intervals/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Count the minimum number of intervals to remove
     * to make the rest of the intervals non-overlapping.
     * 
     * @param int[][] $intervals
     * @return int
     */
    function eraseOverlapIntervals(array $intervals): int
    {
        usort($intervals, fn($a, $b) => $a[1] <=> $b[1]);

        $end = -INF;
        $count = 0;
        foreach ($intervals as [$s, $e]) {
            if ($s >= $end) { // non-overlap
                $count++;
                $end = $e;
            }
        }

        return count($intervals) - $count;
    }
}