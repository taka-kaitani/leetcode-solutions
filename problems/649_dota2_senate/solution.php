<?php
/**
 * LeetCode Problem: 649. Dota2 Senate
 * https://leetcode.com/problems/dota2-senate/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Predict the party victory in the Dota2 Senate game.
     * @param string $senate
     * @return string
     */
    function predictPartyVictory(string $senate): string
    {
        // Iterate rounds
        $banRightR = $banRightD = 0;
        while (true) {
            $queue = [];
            $countR = $countD = 0;

            // Process each senator in the current round
            for ($i = 0, $n = strlen($senate); $i < $n; $i++) {
                if ($senate[$i] === 'R') {
                    if ($banRightR > 0) {
                        // Senator is banned
                        $banRightR--;
                    } else {
                        // Senator survives
                        $queue[] = 'R';
                        $countR++;
                        $banRightD++;
                    }
                } else {
                    if ($banRightD > 0) {
                        // Senator is banned
                        $banRightD--;
                    } else {
                        // Senator survives
                        $queue[] = 'D';
                        $countD++;
                        $banRightR++;
                    }
                }
            }

            if ($countD === 0) return 'Radiant';
            if ($countR === 0) return 'Dire';

            $senate = implode('', $queue);
        }
    }
}