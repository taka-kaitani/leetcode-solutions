/**
 * LeetCode Problem: 42. Trapping Rain Water
 * https://leetcode.com/problems/trapping-rain-water/
 *
 * Solution by Takanori Kaitani
 */
function trap(height: number[]): number {
    let water = 0;
    let stack: number[] = []; // indices whose values are strictly decreasing
    for (let i = 0; i < height.length; i++) {
        const h = height[i];
        while (stack.length && height[stack.at(-1)!] <= h) {
            const bottom = height[stack.pop()!];
            if (!stack.length) break;
            const depth = Math.min(h, height[stack.at(-1)!]) - bottom;
            const width = i - stack.at(-1)! - 1
            water += width * depth;
        }
        stack.push(i);
    }

    return water;
};

/**
 * # Approach
 * - Use a monotonic decreasing stack to find trapped water between bars.
 * - Traverse the array while maintain the stack of indices.
 * - When the current bar is higher than the top of the stack,
 *   a volley is formed.
 *   - Pop the middled bar (the bottom of the volley)
 *   - Use the new top of the stack as the left boundary
 *   - Calculate the trapped water as (width * height difference)
 * - Accumulate the result of for each such volley.
 * 
 * # Complexity
 * - Time:  O(n) each index is pushed and popped at most once
 * - Space: O(n) stack of indices
 */
