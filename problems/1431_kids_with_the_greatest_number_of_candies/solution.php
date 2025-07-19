<?php
/**
 * LeetCode Problem: 1431. Kids With the Greatest Number of Candies
 * https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Determine which kids have the greatest number of candies after receiving extra candies.
     * @param  int[]  $candies
     * @param  int    $extraCandies
     * @return bool[]
     */
    function kidsWithCandies(array $candies, int $extraCandies): array
    {
        $result = [];
        $maxCandies = max($candies);

        foreach ($candies as $candy) {
            $result[] = $candy + $extraCandies >= $maxCandies;
        }

        return $result;
    }
}