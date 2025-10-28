/**
 * LeetCode Problem: 402. Remove K Digits
 * https://leetcode.com/problems/remove-k-digits/
 *
 * Solution by Takanori Kaitani
 */
function removeKdigits(num: string, k: number): string {
    const stack: string[] = [];

    for (const ch of num) {
        while (stack.length && k > 0 && stack.at(-1)! > ch) {
            stack.pop();
            k--;
        }
        stack.push(ch);
    }

    // If still need to remove digits, remove from the end
    while (k > 0) {
        stack.pop();
        k--;
    }

    // Build the final result
    let res = stack.join('').replace(/^0+/, '');
    return res === '' ? '0' : res;
}