<?php
/**
 * LeetCode Problem: 1926. Nearest Exit from Entrance in Maze
 * https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * @param string[][] $maze
     * @param int[]      $entrance
     * @return int
     */
    function nearestExit(array $maze, array $entrance): int
    {
        $mazeBottom = array_key_last($maze);
        $mazeRight  = array_key_last($maze[0]);
        $visited = array_fill(0, $mazeBottom + 1, array_fill(0, $mazeRight + 1, false));
        $currSpots = [];

        if ($entrance[0] !== 0) {
            $currSpots[] = [$entrance[0] - 1, $entrance[1]];
        }
        if ($entrance[0] !== $mazeBottom) {
            $currSpots[] = [$entrance[0] + 1, $entrance[1]];
        }
        if ($entrance[1] !== 0) {
            $currSpots[] = [$entrance[0], $entrance[1] - 1];
        }
        if ($entrance[1] !== $mazeRight) {
            $currSpots[] = [$entrance[0], $entrance[1] + 1];
        }
        $visited[$entrance[0]][$entrance[1]] = true;
        $step = 1;

        while ($currSpots) {
            $nextSpots = [];
            foreach ($currSpots as $curr) {
                if ($visited[$curr[0]][$curr[1]] || $maze[$curr[0]][$curr[1]] === '+') continue;

                if (
                    $curr[0] === 0 ||
                    $curr[0] === $mazeBottom ||
                    $curr[1] === 0 ||
                    $curr[1] === $mazeRight
                ) {
                    // Reach an exit
                    return $step;
                }

                $visited[$curr[0]][$curr[1]] = true;
                $dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
                foreach ($dirs as [$dr, $dc]) {
                    $nextSpots[] = [$curr[0] + $dr, $curr[1] + $dc];
                }
            }

            $step++;
            $currSpots = $nextSpots;
        }

        return -1;
    }

}