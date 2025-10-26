/**
 * LeetCode Problem: 503. Next Greater Element II
 * https://leetcode.com/problems/next-greater-element-ii/
 *
 * Solution by Takanori Kaitani
 */
function nextGreaterElements(nums: number[]): number[] {
    const n = nums.length
    let stack: number[] = []; // indices
    let res = new Array(n).fill(-1);

    // Iterate twice to simulate circular array
    for (let i = 0; i < 2 * nums.length; i++) {
        const num = nums[i % n];
        while (stack.length && nums[stack.at(-1)!] < num) {
            res[stack.pop()!] = num;
        }

        if (i < n) stack.push(i);
    }

    return res;
};

/**
 * # Approach
 * - Use a monotonic decreasing stack to track elements
 *   whose next greater element has not found yet.
 * - To handle the circular nature, iterate the array twice
 *   and use modulo (i % n) for index wrapping.
 * - Each element is pushed and popped at most once.
 * 
 * # Complexity
 * - Time:  O(n)
 * - Space: O(n)
 */