<?php
/**
 * LeetCode Problem: 735. Asteroid Collision
 * https://leetcode.com/problems/asteroid-collision/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Simulates asteroid collisions.
     * @param int[] $asteroids
     * @return int[]
     */
    function asteroidCollision(array $asteroids): array
    {
        $stack = [];

        foreach ($asteroids as $asteroid) {
            $alive = true;

            while (!empty($stack) && $asteroid < 0 && end($stack) > 0) {
                $top = end($stack);

                // The top asteroid on the stack is destroyed
                if ($top <= abs($asteroid)) {
                    array_pop($stack);
                }
                // The current asteroid is destroyed
                if ($top >= abs($asteroid)) {
                    $alive = false;
                    break;
                }
            }

            if ($alive) {
                $stack[] = $asteroid;
            }
        }

        return $stack;
    }
}