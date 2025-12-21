/**
 * LeetCode Problem: 50. Pow(x, n)
 * https://leetcode.com/problems/powx-n/
 *
 * Solution by Takanori Kaitani
 */
function myPow(x: number, n: number): number {
    if (x === 0) return 0;

    function positivePow(n: number): number {
        if (n === 0) return 1;
        if (n === 1) return x;
        const halfPow = positivePow(Math.floor(n / 2));
        const mod = n % 2 ? x : 1;
        return halfPow * halfPow * mod;
    }

    return n < 0
        ? 1 / positivePow(-n)
        : positivePow(n)
    ;
}

/**
 * # Approach
 * - Exponentiation by squaring.
 * - For n >= 0:
 *   - x^n = (x^(n/2))^2                if n is even
 *   - x^n = (x^(floor(n/2)))^2 * x     if n is odd
 * - For n < 0: x^n = 1 / x^(-n)
 *
 * # Complexity
 * - Time:  O(log |n|)
 * - Space: O(log |n|) due to recursion stack
 */
