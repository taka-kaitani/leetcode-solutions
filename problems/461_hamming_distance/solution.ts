/**
 * LeetCode Problem: 461. Hamming Distance
 * https://leetcode.com/problems/hamming-distance/
 *
 * Solution by Takanori Kaitani
 */
function hammingDistance(x: number, y: number): number {
    return (x ^ y).toString(2).split('0').join('').length;
}

/**
 * # Approach
 * - Count the `1`s in XOR(x, y).
 * 
 * # Complexity
 * - Time:  O(1)
 * - Space: O(1)
 */
