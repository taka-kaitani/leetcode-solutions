<?php
/**
 * LeetCode Problem: 1493. Longest Subarray of 1's After Deleting One Element
 * https://leetcode.com/problems/longest-subarray-of-1's-after-deleting-one-element/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Find the length of the longest subarray of 1's after deleting one element.
     * @param int[] $nums
     * @return int
     */
    function longestSubarray(array $nums): int
    {
        $n = count($nums);
        $left = 0;
        $zeroIndex = -1;
        $maxLen = 0;
        for ($right = 0; $right < $n; $right++) {
            if ($nums[$right] === 0) {
                if ($zeroIndex !== -1) {
                    $left = $zeroIndex + 1;
                }
                $zeroIndex = $right;
            }

            $maxLen = max($maxLen, $right - $left);
        }

        return $maxLen;
    }
}