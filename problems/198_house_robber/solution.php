<?php
/**
 * LeetCode Problem: 198. House Robber
 * https://leetcode.com/problems/house-robber/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Compute maximum amount of money that the House Robber can rob
     * 
     * @param int[] $nums Array that represent amount of money of each house
     * @return int
     */
    function rob(array $nums): int
    {
        $prevMax = [0, 0];
        $currMax = 0;
        for ($i = 0, $n = count($nums); $i < $n; $i++) {
            $currMax = max($prevMax[0] + $nums[$i], $prevMax[1]);

            // Update prevMax
            $prevMax[0] = $prevMax[1];
            $prevMax[1] = $currMax;
        }

        return $currMax;
    }
}