/**
 * LeetCode Problem: 326. Power of Three
 * https://leetcode.com/problems/power-of-three/
 *
 * Solution by Takanori Kaitani
 */
function isPowerOfThree(n: number): boolean {
    if (n === 0) return false;
    while (n % 3 === 0) n /= 3;
    return n === 1;
}

/**
 * # Approach
 * - Return false if n is 0 (not a power of 3)
 * - Divide n by 3 while n is divisible by 3.
 * - If it becomes 1, it was a power of 3; return true.
 * - Otherwise return false.
 * 
 * # Complexity
 * - Time:  O(log n)
 * - Space: O(1)
 */
