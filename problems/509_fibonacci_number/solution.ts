/**
 * LeetCode Problem: 509. Fibonacci Number
 * https://leetcode.com/problems/fibonacci-number/
 *
 * Solution by Takanori Kaitani
 */
function fib(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let prev2 = 0; // fib(i - 2)
    let prev1 = 1; // fib(i - 1)
    for (let i = 2; i <= n; i++) {
        const curr = prev2 + prev1;
        prev2 = prev1;
        prev1 = curr;
    }

    return prev1;
}

/**
 * # Approach
 * - Compute fibonacci number from i=0 to i=n.
 * - Base cases:
 *   - fib(0) = 0.
 *   - fib(1) = 1.
 * - Maintain 2 previous fibonacci numbers
 *   - prev2: fib(i - 2)
 *   - prev1: fib(i - 1)
 * 
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1)
 */
