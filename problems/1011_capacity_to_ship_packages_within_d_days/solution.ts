/**
 * LeetCode Problem: 1011. Capacity To Ship Packages Within D Days
 * https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
 *
 * Solution by Takanori Kaitani
 */
function shipWithinDays(weights: number[], days: number): number {
    let left = Math.max(...weights);
    let right = weights.reduce((a, b) => a + b, 0);

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (daysSpent(weights, mid) > days) left = mid + 1;
        else right = mid;
    }

    return right;
};

function daysSpent(weights: number[], capacity: number): number {
    let spent = 1;
    let shipped = 0;
    for (const n of weights) {
        if (shipped + n <= capacity) shipped += n;
        else {
            spent++;
            shipped = n;
        }
    }

    return spent;
}

/**
 * # Approach
 * - Use a binary search to minimize the capacity of ship
 *   to carry all of `weights` within `days` days.
 * - When start the binary search,
 *   - Left boundary: maximum weight
 *   - Right boundary: (maximum weight) × (average count of weight per day)
 * - For each step, compute the days spent with capacity `mid`
 *   by using a helper function `daysSpent`.
 * 
 * # Complexity
 * Where n is the length of `weight`;
 * - Time:  O(n log(sum(weight)))
 *   - O(n) to find the maximum weight
 *   - O(log(sum(weight))) for binary search
 *   - O(n) for each calling `daysSpent()`
 * - Space: O(n) for `...weight`
 */
