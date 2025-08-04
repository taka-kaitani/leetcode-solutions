<?php
/**
 * LeetCode Problem: 399. Evaluate Division
 * https://leetcode.com/problems/evaluate-division/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Evaluates division results based on the given equations and values.
     * For each query, returns the result of the division if it can be determined, or -1.0 otherwise.
     * 
     * @param string[][] $equations
     * @param float[]    $values
     * @param string[][] $queries
     * @return float[]
     */
    function calcEquation(array $equations, array $values, array $queries): array
    {
        $graph = [];
        foreach ($equations as $i => [$dividend, $divisor]) {
            $graph[$dividend][$divisor] = $values[$i];
            $graph[$divisor][$dividend] = 1 / $values[$i];
        }

        $results = [];
        foreach ($queries as [$dividend, $divisor]) {
            $results[] = $this->dfs($graph, [], $dividend, $divisor);
        }

        return $results;
    }

    /**
     * Performs a depth-first search to evaluate the result of dividend / divisor.
     * Returns -1.0 if no valid path exists between the two variables.
     * 
     * @param array $graph
     * @param array $visited
     * @param string $dividend
     * @param string $divisor
     * @return float
     */
    private function dfs(array $graph, array $visited, string $dividend, string $divisor): float
    {
        if (!isset($graph[$dividend]) || isset($visited[$dividend])) return -1.0;
        if ($dividend === $divisor) return 1.0;
        if (isset($graph[$dividend][$divisor])) return $graph[$dividend][$divisor];

        $visited[$dividend] = true;
        foreach ($graph[$dividend] as $tmpDivisor => $val) {
            $res = (float)$this->dfs($graph, $visited, $tmpDivisor, $divisor);
            if ($res !== -1.0) return $val * $res;
        }

        return -1.0;
    }
}