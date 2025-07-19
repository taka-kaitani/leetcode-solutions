<?php
/**
 * LeetCode Problem: 724. Find Pivot Index
 * https://leetcode.com/problems/find-pivot-index/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Find the pivot index of an array.
     * The pivot index is the index where the sum of the numbers to the left
     * is equal to the sum of the numbers to the right.
     * @param  int[] $nums
     * @return int   -1 if no pivot index exists, otherwise the pivot index
     */
    function pivotIndex(array $nums): int
    {
        $totalSum = array_sum($nums);
        $sumLeft  = 0;

        foreach ($nums as $i => $num) {
            $sumRight = $totalSum - $sumLeft - $num;

            if ($sumLeft === $sumRight) {
                return $i;
            }

            $sumLeft += $num;
        }

        return -1;
    }
}