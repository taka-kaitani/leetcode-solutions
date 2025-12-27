/**
 * LeetCode Problem: 71. Simplify Path
 * https://leetcode.com/problems/simplify-path/
 *
 * Solution by Takanori Kaitani
 */
function simplifyPath(path: string): string {
    const res: string[] = [];
    for (const dir of path.split('/')) {
        if (dir === '..') res.pop();
        else if (dir !== '' && dir !== '.') res.push(dir);
    }

    return '/' + res.join('/');
}

/**
 * # Approach
 * - Use a stack of directory names.
 * - Split the path by '/' and process each token:
 *   - "" or "." => ignore
 *   - ".."      => pop one directory from the stack if possible
 *   - otherwise => push the directory name
 * - Join the stack with '/' and prefix with '/' to form the canonical absolute path.
 * 
 * # Complexity
 * - Time:  O(L) (L : path length)
 * - Space: O(L)
 */
