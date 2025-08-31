<?php
/**
 * LeetCode Problem: 1318. Minimum Flips to Make a OR b Equal to c
 * https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Compute the minimum flips required in some bits of `a` and `b` to make (`a` OR `b` === `c`)
     * @param int $a
     * @param int $b
     * @param int $c
     * @return int
     */
    function minFlips(int $a, int $b, int $c): int
    {
        $flip = 0;
        for ($i = 0; $i < 32; $i++) {
            $bitA = ($a >> $i) & 1;
            $bitB = ($b >> $i) & 1;
            $bitC = ($c >> $i) & 1;

            if ($bitC === 0) {
                if ($bitA === 1) $flip++;
                if ($bitB === 1) $flip++;
            } elseif ($bitA == 0 && $bitB == 0) {
                $flip++;
            }
        }

        return $flip;
    }
}
