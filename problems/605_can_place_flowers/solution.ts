/**
 * LeetCode Problem: 605. Can Place Flowers
 * https://leetcode.com/problems/can-place-flowers/
 *
 * Solution by Takanori Kaitani
 */
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    const size = flowerbed.length;
    let planted: number = 0;
    let isPlantedPrev: boolean = false; // to avoid mutating input

    for (let i = 0; i < size; i++) {
        if (flowerbed[i] === 1) {
            // Already planted
            isPlantedPrev = true;
        } else if (isPlantedPrev || (i + 1 < size && flowerbed[i + 1] === 1)) {
            // Can't plant new flower
            isPlantedPrev = false;
        } else {
            // Plant new flower
            planted++;
            isPlantedPrev = true;
        }
    }

    return planted >= n;
};
