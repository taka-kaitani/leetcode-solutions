---
name: review-solution
description: Review a LeetCode solution for interview readiness. Use when the user asks for a code review, feedback, or wants to check their solution.
argument-hint: "[problem-number]"
allowed-tools: Read, Grep
---

Review a LeetCode solution through an **interview readiness** lens.

## Finding the Solution File

- If a problem number is given (`$ARGUMENTS`), find the matching directory under `problems/` (e.g., `problems/123_*/solution.ts`) and read it.
- If no argument is given, read the currently open solution file in the IDE.

## Review Checklist

1. **Correctness**
   - Does the logic handle all edge cases (empty input, single element, duplicates, negatives)?
   - Are there any off-by-one errors or incorrect base cases?

2. **Complexity Analysis**
   - Are time and space complexity comments present and accurate?
   - Is there a simpler approach with equivalent complexity?

3. **Interview Clarity**
   - Could this be written and explained in a 45-minute interview?
   - Are variable names clear and self-explanatory?
   - Is the logic easy to trace without running it?

4. **Interview Anti-patterns** (flag these)
   - Premature optimization that adds complexity without benefit
   - Over-abstracted code for a simple problem
   - Missing edge case handling
   - Variable names that obscure logic (e.g., `a`, `b`, `tmp` without clear context)

## Output Format

Give concise, direct feedback:
- Start with a one-line verdict: pass / needs minor fixes / needs rework
- List specific issues with line references if applicable
- Suggest a simpler alternative only if it's meaningfully better for an interview context
- Do not rewrite the solution unless explicitly asked
