/**
 * LeetCode Problem: 1268. Search Suggestions System
 * https://leetcode.com/problems/search-suggestions-system/
 *
 * Solution by Takanori Kaitani
 */
function suggestedProducts(products: string[], searchWord: string): string[][] {
    products.sort();

    let res: string[][] = [];
    let prefix = '';
    for (const ch of searchWord) {
        prefix += ch;

        // Binary search lower bound
        let left = 0;
        let right = products.length - 1;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (products[mid].localeCompare(prefix) < 0) left = mid + 1;
            else right = mid;
        }

        // Collect up to 3 suggestions
        let suggest: string[] = [];
        for (let i = 0; i < 3 && left + i < products.length; i++) {
            if (products[left + i].startsWith(prefix)) {
                suggest.push(products[left + i]);
            } else {
                break;
            }
        }
        res.push(suggest);
    }

    return res;
}
