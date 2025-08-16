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
        $n = count($nums1);
        $pairs = [];
        for ($i = 0; $i < $n; $i++) {
            $pairs[] = [$nums1[$i], $nums2[$i]];
        }
        usort($pairs, fn($x, $y) => $y[1] <=> $x[1]); // by nums2 desc

        $heap = new SplMinHeap();
        $sum1 = 0;
        $max = 0;

        foreach ($pairs as [$num1, $num2]) {
            $heap->insert($num1);
            $sum1 += $num1;

            if ($heap->count() > $k) {
                $sum1 -= $heap->extract();
            }
            if ($heap->count() === $k) {
                $max = max($max, $sum1 * $num2);
            }
        }
        return $max;
    }
}