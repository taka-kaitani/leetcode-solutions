<?php
/**
 * LeetCode Problem: 216. Combination Sum III
 * https://leetcode.com/problems/combination-sum-iii/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Find al possible combinations of `k` distinct numbers that sum up to `n`.
     * 
     * @param int $k Number of elements in each combination
     * @param int $n Target sum value
     * @return int[][] List of valid combinations
     */
    function combinationSum3(int $k, int $n): array
    {
        $result = [];
        $this->backtrack($k, $n, [], 0, $result);

        return $result;
    }

    private function backtrack(int $targetSize, int $targetSum, array $nums, int $sum, array &$result): void
    {
        $n = count($nums);
        if ($n === $targetSize && $sum === $targetSum) {
            $result[] = $nums;
            return;
        }

        $last = $nums[$n - 1];

        if ($n > $targetSize || $sum > $targetSum || $last === 9) {
            return;
        }

        for ($i = $last + 1; $i <= 9; $i++) {
            $nums[] = $i;
            $this->backtrack($targetSize, $targetSum, $nums, $sum + $i, $result);
            array_pop($nums);
        }
    }
}
