/**
 * LeetCode Problem: 373. Find K Pairs with Smallest Sums
 * https://leetcode.com/problems/find-k-pairs-with-smallest-sums/
 *
 * Solution by Takanori Kaitani
 */
function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    const heap = new MyMinHeap();
    const end = Math.min(nums1.length, k);
    for (let i = 0; i < end; i++) {
        heap.push(nums1[i] + nums2[0], i, 0);
    }

    const res: [number, number][] = [];
    while (res.length < k) {
        const [idx1, idx2] = heap.pop()!;
        res.push([nums1[idx1], nums2[idx2]]);
        if (idx2 + 1 < nums2.length) {
            heap.push(nums1[idx1] + nums2[idx2 + 1], idx1, idx2 + 1);
        }
    }

    return res;
}

/**
 * heap: [
 *   nums1[idx1] + nums2[idx2],
 *   idx1,
 *   idx2
 * ][]
 */
class MyMinHeap {
    private heap: [number, number, number][] = [];

    private swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    private bubbleUp(i: number): void {
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.heap[i][0] >= this.heap[parent][0]) return;
            this.swap(i, parent);
            i = parent;
        }
    }

    private bubbleDown(): void {
        let i = 0;
        while (true) {
            const left = (i * 2) + 1
            const right = (i * 2) + 2
            let smallest = i;
            if (
                left < this.heap.length &&
                this.heap[left][0] < this.heap[smallest][0]
            ) {
                smallest = left;
            }
            if (
                right < this.heap.length &&
                this.heap[right][0] < this.heap[smallest][0]
            ) {
                smallest = right;
            }

            if (i === smallest) return;
            this.swap(i, smallest);
            i = smallest;
        }
    }

    push(sum: number, idx1: number, idx2: number): void {
        this.heap.push([sum, idx1, idx2]);
        this.bubbleUp(this.heap.length - 1);
    }

    pop(): [number, number] | undefined {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) {
            const [_, idx1, idx2] = this.heap.pop()!;
            return [idx1, idx2];
        }

        const [_, idx1, idx2] = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.bubbleDown();
        return [idx1, idx2];
    }
}

/**
 * # Approach
 * - Use a priority queue (min-heap) to extract the pairs with the smallest sums.
 * - Because nums1 and nums2 are sorted in non-decreasing order:
 *   - The smallest possible pairs start at (i, 0) for i = 0...min(k-1, nums1.length-1).
 *   - Push the first k candidate pairs into the heap:
 *       [nums1[i] + nums2[0], i, 0]
 *
 * - Repeatedly extract the smallest pair from the heap until we have k results:
 *   1. Pop the smallest entry [sum, i, j] from the heap.
 *   2. Append [nums1[i], nums2[j]] to the result array.
 *   3. Push the next pair in the same row: (i, j + 1),  
 *      because (i, j+1) is the next larger sum after (i, j) in that row.
 *      We never push (i+1, j), since that row's initial candidate (i+1, 0)
 *      was already inserted at the start.
 *
 * # Complexity
 * - Time:  O(k log k)
 *   - Each heap push/pop costs log k, and we do at most k pops.
 * - Space: O(k)
 *   - Heap stores at most k elements.
 */
