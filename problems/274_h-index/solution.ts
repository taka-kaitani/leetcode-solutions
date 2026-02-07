/**
 * LeetCode Problem: 274. H-Index
 * https://leetcode.com/problems/h-index/
 *
 * Solution by Takanori Kaitani
 */
function hIndex(citations: number[]): number {
    citations.sort((a, b) => b - a);
    let left = 0;
    let right = citations.length;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (citations[mid] > mid) left = mid + 1;
        else right = mid;
    }

    return left;
}

/**
 * # Approach
 * - Sort citations in descending order.
 * - After sorting, h-index is the maximum h such that `citations[h - 1] >= h`.
 * - Use binary search to find the first index `i` where `citations[i] < i + 1`.
 *   Then `i` is the answer (exactly i papers have at least i citations).
 *
 * # Complexity
 * - Time:  O(n log n) due to sorting
 * - Space: O(1) extra (or O(log n) depending on the sort implementation)
 */
