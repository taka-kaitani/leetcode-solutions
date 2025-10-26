/**
 * LeetCode Problem: 496. Next Greater Element I
 * https://leetcode.com/problems/next-greater-element-i/
 *
 * Solution by Takanori Kaitani
 */
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    let stack: number[] = [];
    const map = new Map<number, number>(); // number => next greater

    for (const num of nums2) {
        while (stack.length && stack.at(-1)! < num) {
            map.set(stack.pop()!, num);
        }
        stack.push(num);
    }

    return nums1.map(n => map.get(n) ?? -1);
};

/**
 * # Approach
 * - Use a map to store the elements and their next greater elements.
 * - In order to maintain it, iterate `nums2` and keep a monotonic stack.
 * 
 * # Complexity
 * where n is length of nums2
 * - Time:  O(n)
 * - Space: O(n)
 */
