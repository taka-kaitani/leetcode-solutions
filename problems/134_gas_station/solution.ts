/**
 * LeetCode Problem: 134. Gas Station
 * https://leetcode.com/problems/gas-station/
 *
 * Solution by Takanori Kaitani
 */
function canCompleteCircuit(gas: number[], cost: number[]): number {
    const n = gas.length;
    let total = 0; // total net gas across all stations
    let tank = 0;  // current tank starting from `start`
    let start = 0;

    for (let i = 0; i < n; i++) {
        const diff = gas[i] - cost[i];
        tank += diff;
        total += diff;

        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }

    return total < 0 ? -1 : start;
}

/**
 * # Approach
 * - Single pass scan greedy.
 * - Maintain:
 *   - `total`: tank if we start from 0 (it allows negative number).
 *   - `start`: start index of the current traversal.
 *   - `tank`: current tank if we start from `start`.
 * - For each traversal from `start`:
 *   - Proceed as far as we can (until `i > n && tank >= 0`)
 *   - After the traverse, update `total += tank`.
 * - After scanning:
 *   - If `total < 0`, we can't visit all the gas station from any `start`.
 *   - Otherwise, `start` is the result.
 * 
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1)
 */
