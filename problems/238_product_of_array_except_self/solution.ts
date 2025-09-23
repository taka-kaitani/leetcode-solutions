/**
 * LeetCode Problem: 238. Product of Array Except Self
 * https://leetcode.com/problems/product-of-array-except-self/
 *
 * Solution by Takanori Kaitani
 */
function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    let res: number[] = Array(n).fill(1);
    let prefix: number = 1;
    let suffix: number = 1;

    for (let i = 0; i < n; i++) {
        res[i]     *= prefix;
        res[n-1-i] *= suffix;
        prefix *= nums[i];
        suffix *= nums[n-1-i];
    }

    return res;
};

const input = [1,2,3,4];
console.log(productExceptSelf(input));