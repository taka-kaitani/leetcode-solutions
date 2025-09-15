/**
 * LeetCode Problem: 11. Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/
 *
 * Solution by Takanori Kaitani
 */
function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    while (left < right) {
        maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]) left++;
        else right--;
    }

    return maxArea;
}
