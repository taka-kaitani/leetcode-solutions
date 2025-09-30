/**
 * LeetCode Problem: 790. Domino and Tromino Tiling
 * https://leetcode.com/problems/domino-and-tromino-tiling/
 *
 * Solution by Takanori Kaitani
 */
function numTilings(n: number): number {
    if (n === 1) return 1;
    const MOD = 1e9 + 7;
    let flat0 = 1;
    let flat1 = 2;
    let bumpy1 = 2;

    for (let i = 2; i < n; i++) {
        [flat0, flat1, bumpy1] = [
            flat1,
            (flat0 + flat1 + bumpy1) % MOD,
            (2 * flat0 + bumpy1) % MOD
        ];
    }

    return flat1;
};
