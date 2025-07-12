<?php
/**
 * LeetCode Problem: 338. Counting Bits
 * https://leetcode.com/problems/counting-bits/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Count the number of 1's in the binary representation of each number from 0 to n.
     * @param int $n
     * @return int[]
     */
    function countBits($n) :array
    {
        $res = [0];

        for ($i = 1; $i <= $n; $i++) {
            $res[$i] = $res[$i >> 1] + ($i & 1);
        }

        return $res;
    }
}