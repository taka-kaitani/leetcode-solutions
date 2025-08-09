<?php
/**
 * LeetCode Problem: 994. Rotting Oranges
 * https://leetcode.com/problems/rotting-oranges/
 *
 * Solution by Takanori Kaitani
 */
class Solution {
    private const FRESH  = 1;
    private const ROTTEN = 2;

    /**
     * Find the minimum number of minutes that must elapse until no cell has a fresh orange
     * @param integer[][] $grid
     * @return integer    Minutes to rot all fresh oranges, or -1 if impossible
     */
    function orangesRotting(array $grid): int
    {
        $freshCount = 0;
        $curr = [];
        foreach ($grid as $r => $row) {
            foreach ($row as $c => $val) {
                if ($val === self::FRESH) $freshCount++;
                elseif ($val === self::ROTTEN) $curr[] = [$r, $c];
            }
        }

        if ($freshCount === 0) return 0;

        $dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        $minutes = 0;

        while (!empty($curr)) {
            $next = [];
            foreach ($curr as [$r, $c]) {
                // Rot the adjacent fresh oranges
                foreach ($dirs as [$dr, $dc]) {
                    if (isset($grid[$r + $dr][$c + $dc]) && $grid[$r + $dr][$c + $dc] === self::FRESH) {
                        $grid[$r + $dr][$c + $dc] = self::ROTTEN;
                        $freshCount--;
                        $next[] = [$r + $dr, $c + $dc];
                    }
                }
            }

            if (empty($next)) break;
            $curr = $next;
            $minutes++;
        }

        return $freshCount === 0 ? $minutes : -1;
    }
}