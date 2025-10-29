/**
 * LeetCode Problem: 1004. Max Consecutive Ones III
 * https://leetcode.com/problems/max-consecutive-ones-iii/
 *
 * Solution by Takanori Kaitani
 */
function longestOnes(nums: number[], k: number): number {
    let left = 0;
    let right = 0;
    let flipped = 0;

    while (right < nums.length) {
        if (nums[right++] === 0) flipped++;

        if (flipped > k) {
            if (nums[left++] === 0) flipped--;
        }
    }

    return right - left;
}

/**
  * # Approach
  * - Use a sliding window where we track up to `k` zeros that can be
flipped.
  * - Expand the window by moving `right`, contract from `left` when k < 0.
  *
  * # Complexity
  * - Time:  O(n)
  * - Space: O(1)
  */