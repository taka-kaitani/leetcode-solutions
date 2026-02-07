/**
 * LeetCode Problem: 275. H-Index II
 * https://leetcode.com/problems/h-index-ii/
 *
 * Solution by Takanori Kaitani
 */
function hIndex(citations: number[]): number {
    const n = citations.length;
    let left = 0;
    let right = n;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (citations[mid] < n - mid) left = mid + 1;
        else right = mid;
    }

    return n - left;
}

/**
 * # Approach
 * - `citations` is sorted in ascending order.
 * - If we choose index `i` as the first paper included in the top group,
 *   then the number of papers in that group is `h = n - i`.
 * - This `h` is valid if `citations[i] >= h`.
 * - The predicate `citations[i] >= n - i` is monotone over `i`,
 *   so we binary-search the leftmost index where it becomes true.
 * - Answer is `n - left`.
 *
 * # Complexity
 * - Time:  O(log n)
 * - Space: O(1)
 */
