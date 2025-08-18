<?php
/**
 * LeetCode Problem: 162. Find Peak Element
 * https://leetcode.com/problems/find-peak-element/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Find the peak element
     * a peak element is strictly greater than its neighbors
     * ss
     * @param int[] $nums
     * @return int
     */
    function findPeakElement(array $nums): int
    {
        $left = 0;
        $right = count($nums) - 1;

        // Binary Search
        while ($left < $right) {
            $mid = intdiv($left + $right, 2);
            if ($nums[$mid] < $nums[$mid + 1]) {
                // peak is in the right part
                $left = $mid + 1;
            } else { // >
                // peak is in the left part
                $right = $mid;
            }
        }

        return $left;
    }
}