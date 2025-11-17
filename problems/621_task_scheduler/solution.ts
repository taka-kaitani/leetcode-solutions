/**
 * LeetCode Problem: 621. Task Scheduler
 * https://leetcode.com/problems/task-scheduler/
 *
 * Solution by Takanori Kaitani
 */
function leastInterval(tasks: string[], n: number): number {
    const freq: number[] = Array(26).fill(0); // A-Z
    const codeA = 'A'.charCodeAt(0);
    for (const t of tasks) {
        freq[t.charCodeAt(0) - codeA]++;
    }

    // Find the most frequent character(s)
    const maxFreq = Math.max(...freq);
    const countMax = freq.filter(n => n === maxFreq).length;

    const partCount = maxFreq - 1;
    const partLength = n + 1;
    const emptyFrame = partCount * partLength + countMax;

    return Math.max(tasks.length, emptyFrame);
}


/**
 * # Approach
 * - 
 * 
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1)
 */
