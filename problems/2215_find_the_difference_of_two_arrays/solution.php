<?php
/**
 * LeetCode Problem: 2215. Find the Difference of Two Arrays
 * https://leetcode.com/problems/find-the-difference-of-two-arrays/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Find the difference between two arrays.
     * @param  int[] $nums1
     * @param  int[] $nums2
     * @return array int[][]
     */
    function findDifference(array $nums1, array $nums2): array
    {
        $set1 = array_flip($nums1);
        $set2 = array_flip($nums2);

        $res1 = [];
        $res2 = [];

        foreach ($set1 as $num => $_) {
            if (!isset($set2[$num])) {
                $res1[] = $num;
            }
        }

        foreach ($set2 as $num => $_) {
            if (!isset($set1[$num])) {
                $res2[] = $num;
            }
        }

        return [$res1, $res2];
    }
}