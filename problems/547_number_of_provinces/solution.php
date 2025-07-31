<?php
/**
 * LeetCode Problem: 547. Number of Provinces
 * https://leetcode.com/problems/number-of-provinces/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Count the number of provinces
     * @param int[][] $isConnected
     * @return int
     */
    function findCircleNum(array $isConnected): int
    {
        $count = 0;
        $n = count($isConnected);
        $visited = array_fill(0, $n, false);
        for ($i = 0; $i < $n; $i++) {
            if (!$visited[$i]) {
                $visited[$i] = true;
                $visited = $this->dfs($isConnected, $n, $i, $visited);
                $count++;
            }
        }

        return $count;
    }

    /**
     * Record visited cities
     * @param int[][] $isConnected
     * @param int     $n            length of $isConnected
     * @param int     $city         current city number
     * @param int[]   $visited
     * @return array
     */
    private function dfs(array $isConnected, int $n, int $city, array $visited): array
    {
        foreach ($isConnected[$city] as $next => $connected) {
            if (!$visited[$next] && $connected === 1) {
                $visited[$next] = true;
                $visited = $this->dfs($isConnected, $n, $next, $visited);
            }
        }

        return $visited;
    }
}