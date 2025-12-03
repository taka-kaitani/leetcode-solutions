/**
 * LeetCode Problem: 875. Koko Eating Bananas
 * https://leetcode.com/problems/koko-eating-bananas/
 *
 * Solution by Takanori Kaitani
 */
function minEatingSpeed(piles: number[], h: number): number {
    let left = 1;
    let right = Math.max(...piles);

    function canEatAll(speed: number): boolean {
        const spent = piles.reduce((prev, pile) => prev + Math.ceil(pile / speed), 0);
        return spent <= h;
    }

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canEatAll(mid)) right = mid;
        else                left = mid + 1;
    }

    return left;
}

/**
 * # Approach
 * - Use binary search to find the minimum integer eating speed such that
 *   Koko can finish all bananas within `h` hours.
 *
 * - Define the search range for the speed:
 *   - `left = 1`: the minimum possible positive speed.
 *   - `right = max(piles)`: at this speed, Koko can finish the largest pile in 1 hour,
 *     so it is always sufficient to finish all piles within `h` hours.
 *
 * - For a given speed `mid`, check feasibility with `canEatAll(mid)`:
 *   - For each pile, compute the required hours as `ceil(pile / mid)`.
 *   - Sum over all piles and check whether the total hours is `<= h`.
 *
 * - Binary search:
 *   - While `left < right`:
 *     - Let `mid = floor((left + right) / 2)`.
 *     - If `canEatAll(mid)` is true, we can try a smaller speed: `right = mid`.
 *     - Otherwise, we need a larger speed: `left = mid + 1`.
 *   - At the end, `left` is the minimum speed that allows Koko to finish in time.
 *
 * # Complexity
 * - Let `n` be the number of piles and `M` be the maximum pile size.
 * - Time:  O(n log M)
 * - Space: O(1) extra space
 */
