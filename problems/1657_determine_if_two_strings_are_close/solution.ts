/**
 * LeetCode Problem: 1657. Determine if Two Strings Are Close
 * https://leetcode.com/problems/determine-if-two-strings-are-close/
 *
 * Solution by Takanori Kaitani
 */
function closeStrings(word1: string, word2: string): boolean {
    const n = word1.length;
    if (word2.length !== n) return false;

    // Store the number of each seen character
    let seen1 = new Map<string, number>();
    let seen2 = new Map<string, number>();
    for (let i = 0; i < n; i++) {
        const ch1 = word1[i];
        const ch2 = word2[i];
        seen1.set(ch1, (seen1.get(ch1) ?? 0) + 1);
        seen2.set(ch2, (seen2.get(ch2) ?? 0) + 1);
    }

    const letters = seen1.size;
    if (letters !== seen2.size) return false; // different number of letters

    let counts1 = [];
    let counts2 = [];
    for (const ch of seen1.keys()) {
        if (!seen2.has(ch)) return false; // letter in only one word
        counts1.push(seen1.get(ch)!);
        counts2.push(seen2.get(ch)!);
    }

    counts1.sort();
    counts2.sort();
    for (let i = 0; i < letters; i++) {
        if (counts1[i] !== counts2[i]) return false; // different count
    }

    return true;
};
