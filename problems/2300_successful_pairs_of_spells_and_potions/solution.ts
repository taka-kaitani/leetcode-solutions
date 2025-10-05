/**
 * LeetCode Problem: 2300. Successful Pairs of Spells and Potions
 * https://leetcode.com/problems/successful-pairs-of-spells-and-potions/
 *
 * Solution by Takanori Kaitani
 */
function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    const m = spells.length;
    const n = potions.length;
    let spellsArr: [number,number][] = new Array();
    for (let i = 0; i < m; i++) {
        spellsArr.push([i, spells[i]]);
    }
    spellsArr.sort((a, b) => b[1] - a[1]); // sort spells DESC keeping their indices
    potions.sort((a, b) => a - b);         // sort potions ASC

    let pairs: [number, number][] = [];
    let j: number = 0; // index of potions
    for (const [i, spell] of spellsArr) {
        while (j < n && spell * potions[j] < success) j++;
        pairs.push([i, n - j]);
    }

    let orderedRes: number[] = new Array(m);
    for (const [i, count] of pairs) {
        orderedRes[i] = count;
    }

    return orderedRes;
};
