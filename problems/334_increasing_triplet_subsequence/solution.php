<?php
/**
 * LeetCode Problem: 334. Increasing Triplet Subsequence
 * https://leetcode.com/problems/increasing-triplet-subsequence/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Check if there exists an increasing triplet subsequence in the array.
     * @param int[] $nums
     * @return bool
     */
    function increasingTriplet(array $nums): bool
    {
        $first = PHP_INT_MAX;
        $second = PHP_INT_MAX;

        foreach ($nums as $num) {
            if ($num <= $first) {
                $first = $num;
            } elseif ($num <= $second) {
                $second = $num;
            } else {
                return true;
            }
        }

        return false;
    }
}