<?php
/**
 * LeetCode Problem: 875. Koko Eating Bananas
 * https://leetcode.com/problems/koko-eating-bananas/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Find the minimum eating speed so that Koko can finish all bananas in h hours.
     * 
     * @param int[] $piles
     * @param int   $h
     * @return int
     */
    function minEatingSpeed(array $piles, int $h): int
    {
        $left = 1;
        $right = max($piles);
        while ($left < $right) {
            $mid = intdiv($left + $right, 2);

            // Calculate total hours spent with current eating speed `mid`
            $spent = 0;
            foreach ($piles as $pile) {
                $spent += intdiv($pile + $mid - 1, $mid);
            }

            if ($spent <= $h) {
                $right = $mid;
            } else {
                $left = $mid + 1;
            }
        }

        return $left;
    }
}