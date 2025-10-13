/**
 * LeetCode Problem: 1004. Max Consecutive Ones III
 * https://leetcode.com/problems/max-consecutive-ones-iii/
 *
 * Solution by Takanori Kaitani
 */
function longestOnes(nums: number[], k: number): number {
    let left = 0;
    let flipped = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) flipped++;

        if (flipped > k) {
            if (nums[left] === 0) flipped--;
            left++;
        }
    }

    return nums.length - left;
}
