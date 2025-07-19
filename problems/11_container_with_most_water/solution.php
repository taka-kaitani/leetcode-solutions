<?php
/**
 * LeetCode Problem: 11. Container With Most Water

 * https://leetcode.com/problems/container-with-most-water/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Find the maximum area of water that can be contained
     * between two lines represented by the height array.
     * @param int[] $height
     * @return int
     */
    function maxArea(array $height): int
    {
        $n = count($height);
        $left = 0;
        $right = $n - 1;
        $max = 0;

        while ($left < $right) {
            $max = max($max, min($height[$left], $height[$right]) * ($right - $left));
            if ($height[$left] < $height[$right]) {
                $left++;
            } else {
                $right--;
            }
        }

        return $max;
    }
}