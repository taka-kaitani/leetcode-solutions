/**
 * LeetCode Problem: 412. Fizz Buzz
 * https://leetcode.com/problems/fizz-buzz/
 *
 * Solution by Takanori Kaitani
 */
function fizzBuzz(n: number): string[] {
    const res: string[] = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0)     res.push('FizzBuzz');
        else if (i % 3 === 0) res.push('Fizz');
        else if (i % 5 === 0) res.push('Buzz');
        else                  res.push(String(i));
    }
    return res;
}

/**
 * # Approach
 * - For each i in [1..n]
 *   - If i is divisible by 3 and 5, result is 'FizzBuzz'
 *   - If i is divisible by 3, result is 'Fizz'
 *   - If i is divisible by 5, result is 'Buzz'
 *   - Otherwise, result is String(i)
 * 
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1) for extra
 */
