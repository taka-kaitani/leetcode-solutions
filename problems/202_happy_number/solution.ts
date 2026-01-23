/**
 * LeetCode Problem: 202. Happy Number
 * https://leetcode.com/problems/happy-number/
 *
 * Solution by Takanori Kaitani
 */
function isHappy(n: number): boolean {
    const seen = new Set<number>();

    while (!seen.has(n)) {
        seen.add(n);

        let x = n;
        let sum = 0;
        while (x > 0) {
            const d = x % 10;
            sum += d * d;
            x = Math.floor(x / 10);
        }

        if (sum === 1) return true;
        n = sum;
    }

    return false;
}

/**
 * # Approach
 * - Use a set to detect a cycle.
 * - Repeat:
 *   - Compute `sum` = sum of squares of digits of `n`.
 *   - If `sum === 1`, return true (happy number).
 *   - If we have seen `sum` before, we are in a loop -> return false.
 *   - Otherwise set `n = sum` and continue.
 *
 * # Complexity
 * - Let d be the number of digits in n.
 * - Time:  O(d * t), where t is the number of iterations until reaching 1 or repeating
 *          (t is small / constant-bounded for fixed-size integers).
 * - Space: O(t) for the set (also small / constant-bounded in practice).
 */
