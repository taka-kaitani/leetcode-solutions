/**
 * LeetCode Problem: 2215. Find the Difference of Two Arrays
 * https://leetcode.com/problems/find-the-difference-of-two-arrays/
 *
 * Solution by Takanori Kaitani
 */
function findDifference(nums1: number[], nums2: number[]): number[][] {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    return [
        [...set1].filter(x => !set2.has(x)),
        [...set2].filter(x => !set1.has(x))
    ];
};
