<?php
/**
 * LeetCode Problem: 136. Single Number
 * https://leetcode.com/problems/single-number/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Find the single number in an array where every other number appears twice.
     * @param int[] $nums
     * @return int
     */
    function singleNumber(array $nums): int
    {
        $result = 0;
        foreach ($nums as $num) {
            $result ^= $num;
        }
        return $result;
    }
}