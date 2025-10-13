/**
 * LeetCode Problem: 2542. Maximum Subsequence Score
 * https://leetcode.com/problems/maximum-subsequence-score/
 *
 * Solution by Takanori Kaitani
 */

// Helper MinHeap class
class MyMinHeap {
    private heap: number[] = [];

    private swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    private bubbleUp(i: number): void {
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.heap[i] >= this.heap[parent]) break;
            this.swap(i, parent);
            i = parent;
        }
    }

    private bubbleDown(i: number): void {
        const n = this.heap.length;
        while (true) {
            const left  = i * 2 + 1;
            const right = i * 2 + 2;
            let smallest = i;

            if (left  < n && this.heap[left]  < this.heap[smallest]) smallest = left;
            if (right < n && this.heap[right] < this.heap[smallest]) smallest = right;

            if (smallest === i) break;

            this.swap(i, smallest);
            i = smallest;
        }
    }

    push(val: number): void {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    pop(): number | undefined {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.bubbleDown(0);
        return top;
    }

    // peek(): {}

    size(): number {
        return this.heap.length;
    }
}

function maxScore(nums1: number[], nums2: number[], k: number): number {
    // Sort indices of nums2 by nums2 descending
    const indices = nums2.map((_, i) => i);
    indices.sort((a, b) => nums2[b] - nums2[a]);

    const heap1 = new MyMinHeap();
    let sum = 0;
    let max = -Infinity;
    for (const i of indices) {
        sum += nums1[i];
        heap1.push(nums1[i]);

        if (heap1.size() > k) sum -= heap1.pop()!;
        if (heap1.size() === k) max = Math.max(max, sum * nums2[i]);
    }

    return max;
};

/**
 * # Approach
 * - We traverse each elements of `nums1` and `nums2` in descending order of `nums2`
 *   to easily minimize the `nums2`.
 * - At each step, we keep track MinHeap of `nums1`
 *   to minimize the sum of selected elements of `nums1`.
 * - Since we don't have built-in MinHeap in ts, we make new helper class `MyMinHeap`.
 * - This works because for each potential minimum multiplier,
 *   choosing the k largest nums1 values gives the best score.
 * 
 * # Complexity
 * - Time
 *   - Sorting: O(n log n)
 *   - Heap operations over n elements: O(n log k)
 *   Total: O(n log n)
 * - Space: O(n) for indices + O(k) for heap
 */
