/**
 * LeetCode Problem: 338. Counting Bits
 * https://leetcode.com/problems/counting-bits/
 *
 * Solution by Takanori Kaitani
 */
function countBits(n: number): number[] {
    let res: number[] = [0];
    for (let i = 1; i<= n; i++) {
        res.push((res[i >> 1]) + (i & 1));
    }

    return res;
};
