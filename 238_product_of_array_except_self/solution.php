<?php
/**
 * LeetCode Problem: 238. Product of Array Except Self
 * https://leetcode.com/problems/product-of-array-except-self/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Calculate the product of array except self.
     * @param int[] $nums
     * @return int[]
     */
    function productExceptSelf(array $nums): array
    {
        $n = count($nums);
        $res = array_fill(0, $n, 1);

        // Prefix product
        $left = 1;
        for ($i = 0; $i < $n; $i++) {
            $res[$i] *= $left;
            $left *= $nums[$i];
        }

        // Suffix product
        $right = 1;
        for ($i = $n - 1; $i >= 0; $i--) {
            $res[$i] *= $right;
            $right *= $nums[$i];
        }

        return $res;
    }
}