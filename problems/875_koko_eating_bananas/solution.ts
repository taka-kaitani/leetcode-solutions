/**
 * LeetCode Problem: 875. Koko Eating Bananas
 * https://leetcode.com/problems/koko-eating-bananas/
 *
 * Solution by Takanori Kaitani
 */
function minEatingSpeed(piles: number[], h: number): number {
    let left = 1;
    let right = Math.max(...piles);
    while (left < right) {
        const speed = Math.floor((left + right) / 2);
        if (timeSpent(piles, speed) > h) left = speed + 1;
        else right = speed;
    }

    return right;
};

function timeSpent(piles: number[], speed: number): number {
    let spent = 0;
    for (const p of piles) {
        spent += Math.ceil(p / speed);
    }
    return spent;
}