<?php
/**
 * LeetCode Problem: 452. Minimum Number of Arrows to Burst Balloons
 * https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Minimize the number of arrows that must be shot to burst all balloons.
     * 
     * @param array<int[]> $points
     * @return int
     */
    function findMinArrowShots(array $points): int
    {
        usort($points, fn($a, $b) => $a[1] <=> $b[1]);

        $end = -INF;
        $count = 0;
        foreach ($points as [$s, $e]) {
            if ($s > $end) { // new arrows needed
                $count++;
                $end = $e;
            }
        }

        return $count;
    }
}