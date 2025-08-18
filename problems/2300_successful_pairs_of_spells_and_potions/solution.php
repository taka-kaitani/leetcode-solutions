<?php
/**
 * LeetCode Problem: 2300. Successful Pairs of Spells and Potions
 * https://leetcode.com/problems/successful-pairs-of-spells-and-potions/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Return the number of successful pairs for each spell,
     * where a pair (spell, potion) is successful if spell * potion >= success.
     * 
     * @param int[] $spells
     * @param int[] $potions
     * @param int   $success
     * @return int[]
     */
    function successfulPairs(array $spells, array $potions, int $success): array
    {
        sort($potions);
        $m = count($potions);
        $pairs = [];

        foreach ($spells as $i => $s) {
            // Binary Search
            $left = 0;
            $right = $m;
            while ($left < $right) {
                $mid = intdiv($left + $right, 2);
                if ($s * $potions[$mid] < $success) {
                    $left = $mid + 1;
                } else {
                    $right = $mid;
                }
            }

            $pairs[$i] = $m - $left;
        }

        return $pairs;
    }
}