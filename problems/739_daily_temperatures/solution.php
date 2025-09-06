<?php
/**
 * LeetCode Problem: 739. Daily Temperatures
 * https://leetcode.com/problems/daily-temperatures/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Return the array `answer` where `answer[i]` is the number of days
     * you must wait after the i-th day to encounter a warmer temperature.
     * 
     * @param int[] $temperatures
     * @return int[]
     */
    function dailyTemperatures(array $temperatures): array
    {
        $n = count($temperatures);
        $stack = []; // Stores indices
        $answer = array_fill(0, $n, 0);

        for ($i = 0; $i < $n; $i++) {
            while (!empty($stack) && $temperatures[end($stack)] < $temperatures[$i]) {
                $idx = array_pop($stack);
                $answer[$idx] = $i - $idx;
            }
            $stack[] = $i;
        }

        return $answer;
    }
}
