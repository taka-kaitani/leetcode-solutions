/**
 * LeetCode Problem: 172. Factorial Trailing Zeroes
 * https://leetcode.com/problems/factorial-trailing-zeroes/
 *
 * Solution by Takanori Kaitani
 */
function trailingZeroes(n: number): number {
    let count = 0;
    for (let i = 5; i <= n; i *= 5) {
        count += Math.floor(n / i);
    }

    return count;
}

/**
 * # Approach
 * - A trailing zero is created by a factor of 10, and 10 = 2 * 5.
 * - In `n!`, there are always more factors of 2 than factors of 5,
 *   so the number of trailing zeros equals the number of factors of 5.
 * - Count how many times 5 divides `n!`:
 *   - `floor(n/5)` counts numbers contributing at least one 5
 *   - `floor(n/25)` counts extra 5s from multiples of 25
 *   - `floor(n/125)`, ...
 * - Sum them up.
 *
 * # Complexity
 * - Time:  O(log_5 n)
 * - Space: O(1)
 */
