<?php
/**
 * LeetCode Problem: 2542. Maximum Subsequence Score
 * https://leetcode.com/problems/maximum-subsequence-score/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Maximize score = (sum of chosen nums1) * (min of chosen nums2) with exactly k pairs.
     * 
     * @param int[] $nums1
     * @param int[] $nums2
     * @param int   $k
     * @return int
     */
    function maxScore($nums1, $nums2, $k): int
    {
        array_multisort($nums2, SORT_DESC, $nums1);

        $heap = new SplMinHeap();
        $sum1 = 0;
        $max = 0;

        $n = count($nums1);
        for ($i = 0; $i < $n; $i++) {
            $heap->insert($nums1[$i]);
            $sum1 += $nums1[$i];

            if ($heap->count() > $k) {
                $sum1 -= $heap->extract();
            }
            if ($heap->count() === $k) {
                $max = max($max, $sum1 * $nums2[$i]);
            }
        }
        return $max;
    }
}