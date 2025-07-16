<?php
/**
 * LeetCode Problem: 1004. Max Consecutive Ones III
 * https://leetcode.com/problems/max-consecutive-ones-iii/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Find the maximum length of a contiguous subarray with at most k zeros.
     * @param int[] $nums
     * @param int   $k
     * @return int
     */
    function longestOnes(array $nums, int $k): int
    {
        $n = count($nums);
        $left = 0;
        $zeroCount = 0;
        $maxLen = 0;

        for ($right = 0; $right < $n; $right++) {
            if ($nums[$right] === 0) {
                $zeroCount++;
            }

            // If we have more than k zeros, move the left pointer
            while ($zeroCount > $k) {
                if ($nums[$left] === 0) {
                    $zeroCount--;
                }
                $left++;
            }

            $maxLen = max($maxLen, $right - $left + 1);
        }

        return $maxLen;
    }
}