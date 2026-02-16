/**
 * LeetCode Problem: 347. Top K Frequent Elements
 * https://leetcode.com/problems/top-k-frequent-elements/
 *
 * Solution by Takanori Kaitani
 */
function topKFrequent(nums: number[], k: number): number[] {
    // Count frequency of each number
    const freq = new Map<number, number>();
    for (const num of nums) {
        freq.set(num, (freq.get(num) ?? 0) + 1);
    }

    // Convert map to array of [number, frequency] pairs
    const pairs = [...freq];

    // Use quickselect to partition into top k frequent elements
    let left = 0;
    let right = pairs.length - 1;
    const target = k - 1;
    while (left < right) {
        const pivotIdx = partition(pairs, left, right);

        if (pivotIdx < target) {
            left = pivotIdx + 1;
        } else if (pivotIdx > target) {
            right = pivotIdx - 1;
        } else {
            break;
        }
    }

    return pairs.slice(0, k).map(([num]) => num);
}

function partition(arr: [number, number][], left: number, right: number): number {
    const pivotFreq = arr[right][1];
    let boundary = left - 1;

    // Move all elements with freq > pivotFreq to the left
    for (let i = left; i < right; i++) {
        if (arr[i][1] > pivotFreq) {
            boundary++;
            [arr[boundary], arr[i]] = [arr[i], arr[boundary]];
        }
    }

    // Place pivot at correct position
    boundary++;
    [arr[boundary], arr[right]] = [arr[right], arr[boundary]];
    return boundary;
}

/**
 * # Approach
 * - Count frequency of each element using a Map
 * - Use quickselect to partition frequencies into [> pivot] and [<= pivot]
 *   - If we have exactly k elements with frequency > pivot, return them
 *   - If > k elements, search left (more large elements needed)
 *   - If < k but >= k including pivot, return first k (found enough)
 *   - If < k including pivot, search right (need more elements)
 *
 * # Complexity
 * - Time:  O(n) average, O(n²) worst case (quickselect with random pivot)
 * - Space: O(n) for frequency map
 */
