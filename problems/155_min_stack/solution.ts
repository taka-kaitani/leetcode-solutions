/**
 * LeetCode Problem: 155. Min Stack
 * https://leetcode.com/problems/min-stack/
 *
 * Solution by Takanori Kaitani
 */
class MinStack {
    private stack: number[] = [];
    private mins: number[] = [Infinity];

    push(val: number): void {
        this.stack.push(val);
        this.mins.push(Math.min(
            this.mins[this.mins.length - 1],
            val
        ));
    }

    pop(): void {
        this.stack.pop();
        this.mins.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.mins[this.mins.length - 1];
    }
}

/**
 * # Approach
 * - Use two stacks.
 *   - `stack`: stores the actual values.
 *   - `mins`: stores the running minimums.
 *     - Keep a sentinel `Infinity` at the bottom.
 *     - After each push, append `min(previousMin, val)`.
 *     - This guarantees `mins[mins.length - 1]` is always the minimum of the current stack.
 * - `pop()` removes one element from both stacks, keeping them aligned.
 *
 * # Complexity
 * - Time:  O(1) per operation
 * - Space: O(n)
 */
