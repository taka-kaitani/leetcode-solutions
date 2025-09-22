#!/bin/bash

# Check if problem number is provided
if [ $# -eq 0 ]; then
    echo "Error: Please provide a problem number as an argument"
    echo "Usage: $0 <problem_number>"
    exit 1
fi

PROBLEM_NUM=$1

# Find the problem folder (must start with problem number followed by underscore)
PROBLEM_DIR=""
for dir in problems/*/; do
    if [[ "$dir" == *"/${PROBLEM_NUM}_"* ]]; then
        PROBLEM_DIR="$dir"
        break
    fi
done

# Check if problem folder exists
if [ -z "$PROBLEM_DIR" ] || [ ! -d "$PROBLEM_DIR" ]; then
    echo "Error: Problem folder for problem number $PROBLEM_NUM does not exist"
    exit 1
fi

# Get the problem name from the directory
PROBLEM_NAME=$(basename "$PROBLEM_DIR")

echo "Found problem directory: $PROBLEM_DIR"

# Create solution.ts file based on solution.php structure
TS_FILE="$PROBLEM_DIR/solution.ts"

# Read the PHP file to extract problem info
PHP_FILE="$PROBLEM_DIR/solution.php"
if [ ! -f "$PHP_FILE" ]; then
    echo "Error: solution.php not found in $PROBLEM_DIR"
    exit 1
fi

# Extract problem number and title from PHP file
PROBLEM_TITLE=$(grep -o "LeetCode Problem: [0-9]*\. [^*]*" "$PHP_FILE" | sed 's/LeetCode Problem: [0-9]*\. //')
PROBLEM_URL=$(grep -o "https://leetcode.com/problems/[^/]*/" "$PHP_FILE")

# Create TypeScript solution file
cat > "$TS_FILE" << EOF
/**
 * LeetCode Problem: $PROBLEM_NUM. $PROBLEM_TITLE
 * $PROBLEM_URL
 *
 * Solution by Takanori Kaitani
 */

EOF

echo "Created $TS_FILE"

# Update README.md to include TypeScript reference
README_FILE="$PROBLEM_DIR/README.md"
if [ -f "$README_FILE" ]; then
    # Check if TypeScript reference already exists
    if ! grep -q "solution.ts" "$README_FILE"; then
        # Find the line with solution.php and add solution.ts after it
        sed -i '' '/- \[solution\.php\]/a\
- [solution.ts](./solution.ts)
' "$README_FILE"
        echo "Updated $README_FILE with TypeScript reference"
    else
        echo "TypeScript reference already exists in $README_FILE"
    fi
else
    echo "Warning: README.md not found in $PROBLEM_DIR"
fi

echo "Successfully added TypeScript solution template for problem $PROBLEM_NUM"