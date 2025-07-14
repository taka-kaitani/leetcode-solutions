<?php
/**
 * LeetCode Problem: 1679. Max Number of K-Sum Pairs
 * https://leetcode.com/problems/max-number-of-k-sum-pairs/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Find the maximum number of operations that can be performed
     * to form pairs of elements in the array that sum up to k.
     * @param int[] $nums
     * @param int   $k
     * @return int
     */
    function maxOperations(array $nums, int $k): int
    {
        $count = 0;
        $map = [];

        foreach ($nums as $n) {
            $target = $k - $n;
            if (!empty($map[$target])) {
                $map[$target]--;
                $count++;
            } else {
                $map[$n] = ($map[$n] ?? 0) + 1;
            }
        }

        return $count;
    }
}