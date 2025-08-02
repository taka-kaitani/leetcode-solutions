<?php
/**
 * LeetCode Problem: 1466. Reorder Routes to Make All Paths Lead to the City Zero
 * https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Count the number of reordering the direction.
     * 
     * @param int $n
     * @param int[][] $connections
     * @return int
     */
    function minReorder(int $n, array $connections): int
    {
        // $graph = [
        //     int $city => [
        //         [int $neighbor, bool $needsChange]
        //     ]
        // ]
        $graph = array_fill(0, $n, []);
        foreach ($connections as [$from, $to]) {
            $graph[$from][] = [$to, true];
            $graph[$to][] = [$from, false];
        }

        $visited = array_fill(0, $n, false);
        return $this->dfs(0, $graph, $visited);
    }

    /**
     * Recursively count the number of reordering the direction.
     * 
     * @param integer $city
     * @param array $graph
     * @param array $visited
     * @return integer
     */
    private function dfs(int $city, array $graph, array &$visited): int
    {
        $visited[$city] = true;
        $changed = 0;

        foreach ($graph[$city] as [$neighbor, $needsChange]) {
            if ($visited[$neighbor]) continue;
            if ($needsChange) $changed++;

            $changed += $this->dfs($neighbor, $graph, $visited);
        }

        return $changed;
    }
}