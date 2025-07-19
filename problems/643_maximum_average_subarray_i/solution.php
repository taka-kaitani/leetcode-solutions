<?php
/**
 * LeetCode Problem: 643. Maximum Average Subarray I
 * https://leetcode.com/problems/maximum-average-subarray-i/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Finds the maximum average of a subarray of length k.
     * @param  int[] $nums
     * @param  int   $k
     * @return float
     */
    function findMaxAverage(array $nums, int $k): float
    {
        $sum = array_sum(array_slice($nums, 0, $k));
        $max_sum = $sum;

        $count_nums = count($nums);
        for ($i = $k; $i < $count_nums; $i++) {
            $sum += $nums[$i] - $nums[$i - $k];
            $max_sum = max($max_sum, $sum);
        }

        return $max_sum / $k;
    }
}