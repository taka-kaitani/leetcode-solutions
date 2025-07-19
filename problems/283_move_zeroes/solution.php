<?php
/**
 * LeetCode Problem: 283. Move Zeroes
 * https://leetcode.com/problems/move-zeroes/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Move all zeroes to the end while maintaining the order of non-zero elements.
     * @param  int[] $nums
     * @return void
     */
    function moveZeroes(array &$nums): void
    {
        $insertPos = 0;

        // Move non-zero elements to the front
        foreach ($nums as $num) {
            if ($num !== 0) {
                $nums[$insertPos++] = $num;
            }
        }

        // Fill the rest with zeroes
        while ($insertPos < count($nums)) {
            $nums[$insertPos++] = 0;
        }
    }
}