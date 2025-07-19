<?php
/**
 * LeetCode Problem: 605. Can Place Flowers
 * https://leetcode.com/problems/can-place-flowers/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Determine if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.
     * @param  int[] $flowerbed
     * @param  int   $n
     * @return bool
     */
    function canPlaceFlowers(array $flowerbed, int $n): bool
    {
        $count = 0;
        $length = count($flowerbed);

        for ($i = 0; $i < $length; $i++) {
            if (
                $flowerbed[$i] === 0 &&
                ($i === 0           || $flowerbed[$i - 1] === 0) &&
                ($i === $length - 1 || $flowerbed[$i + 1] === 0)
            ) {
                // Place a flower here
                $flowerbed[$i] = 1;
                $count++;
            }

            if ($count >= $n) {
                return true;
            }
        }

        return $count >= $n;
    }
}