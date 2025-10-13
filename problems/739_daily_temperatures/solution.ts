/**
 * LeetCode Problem: 739. Daily Temperatures
 * https://leetcode.com/problems/daily-temperatures/
 *
 * Solution by Takanori Kaitani
 */
function dailyTemperatures(temperatures: number[]): number[] {
    let stack :number[] = [];
    let res = new Array(temperatures.length).fill(0);
    for (const [i, t] of temperatures.entries()) {
        while (stack.length && temperatures[stack.at(-1)!] < t) {
            const idx = stack.pop()!;
            res[idx] = i - idx;
        }
        stack.push(i);
    }

    return res;
};

/**
 * # approach
 * - Use a monotonic decreasing stack to keep indices of `temperatures`.
 * - For each day, pop indices from the stack while the current temperature is higher.
 *   - For each popped index, record the number of days until a warmer temperature.
 * - Push the current day's index onto the stack.
 * 
 * # Complexity
 * - Time: O(n) each index is pushed and popped at most once.
 * - Space: O(n) for the stack
 */