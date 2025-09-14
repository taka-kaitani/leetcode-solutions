/**
 * LeetCode Problem: 1071. Greatest Common Divisor of Strings
 * https://leetcode.com/problems/greatest-common-divisor-of-strings/
 *
 * Solution by Takanori Kaitani
 */
function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 !== str2 + str1) return ''; // No common divisor exists

    let a = str1.length;
    let b = str2.length; // After the loop, `b` will be gcd(length1, length2)
    while (a % b !== 0) {
        [a, b] = [b, a % b];
    }

    return str1.slice(0, b);
};
