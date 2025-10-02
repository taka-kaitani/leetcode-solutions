/**
 * LeetCode Problem: 1318. Minimum Flips to Make a OR b Equal to c
 * https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/
 *
 * Solution by Takanori Kaitani
 */
function minFlips(a: number, b: number, c: number): number {
    let flip = 0;
    let shiftA = a;
    let shiftB = b;
    let shiftC = c;
    for (let i = 0; i < 32; i++) {
        const digA = shiftA & 1;
        const digB = shiftB & 1;
        const digC = shiftC & 1;

        if ((digA | digB) !== digC) {
            flip += (digC === 0) ? (digA + digB) : 1;
        }

        shiftA >>>= 1;
        shiftB >>>= 1;
        shiftC >>>= 1;
    }

    return flip;
};
