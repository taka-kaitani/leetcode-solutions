/**
 * LeetCode Problem: 1552. Magnetic Force Between Two Balls
 * https://leetcode.com/problems/magnetic-force-between-two-balls/
 *
 * Solution by Takanori Kaitani
 */
function maxDistance(position: number[], m: number): number {
    // Sort position
    position.sort((a, b) => a - b);

    // Binary search
    let left = 1;
    let right = position.at(-1)! - position[0];
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (ballsDistributed(position, mid) < m) right = mid - 1;
        else left = mid + 1;
    }

    return right;
};

function ballsDistributed(position: number[], minDistance: number): number {
    let count = 1;
    let lastPlaced = position[0];
    for (let i = 1; i < position.length; i++) {
        if (position[i] - lastPlaced >= minDistance) {
            count++;
            lastPlaced = position[i];
        }
    }

    return count;
}

/**
 * # Approach
 * - Use binary search to maximize the minimum magnetic force between any two balls
 *   when distribute `m` balls.
 * 
 * # Complexity
 * - Time:  O(n logD)
 *   - n is length of `position`
 *   - D is (max(position) - min(position))
 * - Space: O(1)
 */

