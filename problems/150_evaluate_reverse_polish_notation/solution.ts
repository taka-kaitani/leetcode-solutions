/**
 * LeetCode Problem: 150. Evaluate Reverse Polish Notation
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 *
 * Solution by Takanori Kaitani
 */
function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for (const token of tokens) {
        if (!isNaN(Number(token))) {
            stack.push(Number(token));
            continue;
        }

        const b = stack.pop()!;
        const a = stack.pop()!;

        switch (token) {
            case '+': stack.push(a + b); break;
            case '-': stack.push(a - b); break;
            case '*': stack.push(a * b); break;
            case '/': stack.push(Math.trunc(a / b)); break;
        }
    }

    return stack[0];
}

/**
 * # Approach
 * - Use a stack to evaluate Reverse Polish Notation (postfix expression).
 * - Scan tokens left to right:
 *   - If token is a number, push it.
 *   - If token is an operator, pop two numbers (a, b), compute `a op b`,
 *     and push the result back.
 * - The final stack element is the answer.
 *
 * # Complexity
 * - Time:  O(n)
 * - Space: O(n) in the worst case (stack)
 */
