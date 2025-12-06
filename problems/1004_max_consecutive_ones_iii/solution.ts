/**
 * LeetCode Problem: 1004. Max Consecutive Ones III
 * https://leetcode.com/problems/max-consecutive-ones-iii/
 *
 * Solution by Takanori Kaitani
 */
function longestOnes(nums: number[], k: number): number {
    let left = 0;
    let right = 0;
    while (right < nums.length) {
        if (nums[right] === 0) k--;
        right++;
        if (k < 0) {
            if (nums[left] === 0) k++;
            left++;
        }
    }

    return right - left;
}

/**
 * # Approach
 * - Use a sliding window to find the maximum number of consecutive `1`'s in `nums`
 *   after flipping `k` zeros.
 * 
 * - Maintain
 *   - `left` and `right`: the windows's boundaries, representing the range `[left, right)`.
 *   - `k`: how many zeros we are still allowed to flip in the current window.
 * 
 * - At each step:
 *   - If `nums[right] === 0`, treat it as flipped and decrement `k`.
 *   - Move `right` one step to the right to expand the window.
 *   - If `k < 0`, the window has used more than the allowed number of zero flips:
 *     - If `nums[left] === 0`, we are removing a flipped zero from the window,
 *       so increment `k` to give back one flip.
 *     - Move `left` one step to the right to shrink the window until it becomes valid again.
 * 
 * - Because `right` only moves forward and we shrink from the left
 *   only when the window is invalid, the final [left, right) is the largest valid window.
 *   Return `right - left` as its size.
 * 
 * # Complexity
 * - Time: O(n)
 * - Space: O(1)
 */
