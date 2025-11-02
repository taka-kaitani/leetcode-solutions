/**
 * LeetCode Problem: 1482. Minimum Number of Days to Make m Bouquets
 * https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/
 *
 * Solution by Takanori Kaitani
 */
function minDays(bloomDay: number[], m: number, k: number): number {
    if (m * k > bloomDay.length) return -1; // Impossible to make m bouquets

    // Binary search
    let left = 0;
    let right = Math.max(...bloomDay);
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (bouquets(bloomDay, mid, k) >= m) right = mid;
        else left = mid + 1;
    }

    return right;
};

function bouquets(bloomDay: number[], day: number, flowers: number): number {
    let count = 0; // Number of bouquets
    let currentBouquet = 0; // Number of flowers in the current bouquet
    for (let i = 0; i < bloomDay.length; i++) {
        const bloom: boolean = bloomDay[i] <= day;
        if (!bloom) {
            currentBouquet = 0;
        } else if (currentBouquet + 1 === flowers) {
            count++;
            currentBouquet = 0;
        } else {
            currentBouquet++;
        }
    }

    return count;
}

/**
 * # Approach
 * - Use binary search to find the minimum number of days
 *   required to make at least `m` bouquets, each consisting of `k` adjacent flowers.
 * - For each candidate day `mid`, use a greedy check (`bouquets()`):
 *   count how many bouquets can be made by day `mid`.
 *   - If we can find ≧ `m`, try fewer days.
 *   - Otherwise, increase the day count.
 * 
 * # Complexity
 * - Time:  O(n log max(bloomDay))
 *   - n: number of flowers
 *   - D: max(bloomDay)
 * - Space: O(1)
 */

