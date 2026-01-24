/**
 * LeetCode Problem: 205. Isomorphic Strings
 * https://leetcode.com/problems/isomorphic-strings/
 *
 * Solution by Takanori Kaitani
 */
function isIsomorphic(s: string, t: string): boolean {
    const st = new Map<string, string>(); // s[i] => t[i]
    const ts = new Map<string, string>(); // t[i] => s[i]

    for (let i = 0; i < s.length; i++) {
        const a = s[i], b = t[i];

        if (st.has(a) && st.get(a) !== b) return false;
        if (st.has(b) && st.get(b) !== a) return false;

        st.set(a, b);
        ts.set(b, a);
    }

    return true;
}

/**
 * # Approach
 * - We need a one-to-one mapping between characters in `s` and `t`.
 * - Maintain two hash maps:
 *   - `st`: maps s[i] -> t[i]
 *   - `ts`: maps t[i] -> s[i]
 * - For each index i:
 *   - If an existing mapping conflicts in either direction, return false.
 *   - Otherwise, record/confirm the mapping.
 *
 * # Complexity
 * - Time:  O(n)
 * - Space: O(k) where k is the number of distinct characters (worst-case O(n))
 */
