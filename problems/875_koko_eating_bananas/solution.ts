/**
 * LeetCode Problem: 875. Koko Eating Bananas
 * https://leetcode.com/problems/koko-eating-bananas/
 *
 * Solution by Takanori Kaitani
 */
function minEatingSpeed(piles: number[], h: number): number {
    let low = 1;
    let high = Math.max(...piles);
    while (low < high) {
        let hour = 0;
        const mid = Math.floor((low + high) / 2);
        for (const pile of piles) {
            hour += Math.ceil(pile / mid);
        }

        if (hour <= h) high = mid;
        else           low = mid + 1;
    }

    return low;
};
