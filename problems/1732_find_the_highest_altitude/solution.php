<?php
/**
 * LeetCode Problem: 1732. Find the Highest Altitude
 * https://leetcode.com/problems/find-the-highest-altitude/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Finds the highest altitude after a series of gains and losses.
     * @param  int[] $gain
     * @return int
     */
    function largestAltitude(array $gain): int
    {
        $max_alt = $alt = 0;
        foreach ($gain as $val) {
            $alt += $val;
            $max_alt = max($max_alt, $alt);
        }

        return $max_alt;
    }
}