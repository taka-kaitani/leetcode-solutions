/**
 * LeetCode Problem: 763. Partition Labels
 * https://leetcode.com/problems/partition-labels/
 *
 * Solution by Takanori Kaitani
 */
function partitionLabels(s: string): number[] {
    // 1. build a last-occurrence map
    const map = new Map<string, number>();
    for (let i = 0; i < s.length; i++) map.set(s[i], i);

    // 2. sweep left to right
    const res: number[] = [];
    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, map.get(s[i])!);
        if (i === end) {
            res.push(end - start + 1);
            start = i + 1;
        }
    }

    return res;
}

/**
 * # Approach
 * - Use a greedy approach.
 * - Build a last-occurrence map for each character.
 * - Sweep left to right.
 *   - Maintain the boundaries `start` and `end` of the current group.
 *   - For each character in `s`;
 *     - Expand `end = max(end, map.get(s[i]))`
 *     - If we reach the end of the group;
 *       - `end - start + 1` becomes the one result.
 *       - Initialize the `start` for the next group.
 * 
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1) for map is less than O(26)
 */
