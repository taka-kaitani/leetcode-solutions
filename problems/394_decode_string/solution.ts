/**
 * LeetCode Problem: 394. Decode String
 * https://leetcode.com/problems/decode-string/
 *
 * Solution by Takanori Kaitani
 */
function decodeString(s: string): string {
    let decoded: string = '';
    const n = s.length;
    let i = 0;
    while (i < n) {
        if (!isNaN(Number(s[i]))) {
            // Decode outer 'xxx[]'
            let timeString: string = '';
            while (s[i] !== '[') {
                timeString += s[i];
                i++;
            }
            const repeatCount: number = Number(timeString);
            i++; // Skip '['

            let depth = 1;
            let inside: string = '';
            while (!(s[i] === ']' && depth === 1)) {
                if (s[i] === ']')      depth--;
                else if (s[i] === '[') depth++;
                inside += s[i];
                i++;
            }

            // Decode inside string and Repeat it
            inside = decodeString(inside);
            for (let t = 0; t < repeatCount; t++) decoded += inside;

        } else {
            decoded += s[i];
        }

        i++;
    }

    return decoded;
};
