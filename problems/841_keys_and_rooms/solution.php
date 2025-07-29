<?php
/**
 * LeetCode Problem: 841. Keys and Rooms
 * https://leetcode.com/problems/keys-and-rooms/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Check whether all rooms are reachable from room 0.
     * @param int[][] $rooms
     * @return bool
     */
    function canVisitAllRooms(array $rooms): bool
    {
        $currRooms = [0 => true];
        $visited = [0 => true];

        while ($currRooms) {
            $nextRooms = [];

            // Collect keys in current room
            foreach ($currRooms as $curr => $v) {
                foreach ($rooms[$curr] as $key) {
                    if (!isset($nextRooms[$key]) && !isset($visited[$key])) {
                        $nextRooms[$key] = true;
                        $visited[$key] = true;
                    }
                }
            }

            $currRooms = $nextRooms;
        }

        return count($visited) === count($rooms);
    }
}