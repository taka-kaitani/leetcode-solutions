<?php
/**
 * LeetCode Problem: 1207. Unique Number of Occurrences
 * https://leetcode.com/problems/unique-number-of-occurrences/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Check if the number of occurrences of each value in the array is unique.
     * @param  int[] $arr
     * @return bool
     */
    function uniqueOccurrences(array $arr): bool
    {
        // Count frequency of each number
        $occurrences = array_count_values($arr);

        // Check if all counts are unique
        return count($occurrences) === count(array_flip($occurrences));
    }
}