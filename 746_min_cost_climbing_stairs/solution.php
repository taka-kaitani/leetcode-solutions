<?php
/**
 * LeetCode Problem: 746. Min Cost Climbing Stairs
 * https://leetcode.com/problems/min-cost-climbing-stairs/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Find the minimum cost to reach the top of the stairs.
     * @param int[] $cost
     * @return int
     */
    function minCostClimbingStairs(array $cost): int
    {
        $n = count($cost);
        $minCost = array_fill(0, $n + 1, 0); // Initialize an array to store the minimum cost to reach each step

        for ($i = 2; $i <= $n; $i++) {
            $minCost[$i] = min(
                $minCost[$i - 1] + $cost[$i - 1],
                $minCost[$i - 2] + $cost[$i - 2]
            );
        }

        return $minCost[$n];
    }
}