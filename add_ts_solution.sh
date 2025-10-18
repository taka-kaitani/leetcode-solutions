#!/bin/bash

# Usage: ./add_ts_solution.sh <problem_number>
#
# This script adds a TypeScript solution file for a LeetCode problem.
#
# If the problem folder exists:
#   - Creates solution.ts (or deletes content from line 7 onwards if it already exists)
#   - Updates README.md to include the TypeScript solution
#
# If the problem folder does not exist:
#   - Prompts for problem title, difficulty, and tags
#   - Creates a new folder: problems/<number>_<title>/
#   - Generates README.md and solution.ts
#   - Calls update_tags.sh to manage tags
#
# Examples:
#   ./add_ts_solution.sh 1
#
# When prompted for tags, use quotes for multi-word tags:
#   Enter tags: Array "Prefix Sum" "Hash Table"
#
# Tag input examples:
#   - Single word tags: Array Stack Queue
#   - Multi-word tags: "Prefix Sum" "Hash Table" "Sliding Window"
#   - Mixed: Array "Prefix Sum" Queue "Two Pointers"

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
    echo "Problem folder for problem number $PROBLEM_NUM does not exist"

    # Prompt user for problem title
    read -p "Enter problem title (e.g., 'Two Sum'): " PROBLEM_TITLE

    if [ -z "$PROBLEM_TITLE" ]; then
        echo "Error: Problem title is required"
        exit 1
    fi

    # Create folder name: problem_number_problem-title
    FOLDER_NAME="${PROBLEM_NUM}_$(echo "$PROBLEM_TITLE" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')"
    PROBLEM_DIR="problems/$FOLDER_NAME/"

    # Create the directory
    mkdir -p "$PROBLEM_DIR"
    echo "Created new directory: $PROBLEM_DIR"

    # Generate problem URL from title
    URL_SLUG=$(echo "$PROBLEM_TITLE" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
    PROBLEM_URL="https://leetcode.com/problems/${URL_SLUG}/"
    echo "Generated URL: $PROBLEM_URL"

    # Prompt for difficulty
    read -p "Enter difficulty (e: Easy, m: Medium, h: Hard): " DIFFICULTY

    # Prompt for tags
    read -p "Enter tags (space-separated, e.g., 'Array Hash Table'): " TAGS_INPUT

    # Create README.md
    README_FILE="$PROBLEM_DIR/README.md"
    cat > "$README_FILE" << EOF
# LeetCode $PROBLEM_NUM - $PROBLEM_TITLE

## Problem
- [LeetCode Link]($PROBLEM_URL)

## My Solution
- [solution.ts](./solution.ts)

EOF
    echo "Created $README_FILE"

    # Create solution.ts
    TS_FILE="$PROBLEM_DIR/solution.ts"
    cat > "$TS_FILE" << EOF
/**
 * LeetCode Problem: $PROBLEM_NUM. $PROBLEM_TITLE
 * $PROBLEM_URL
 *
 * Solution by Takanori Kaitani
 */

EOF
    echo "Created $TS_FILE"

    # Call update_tags.sh if difficulty and tags were provided
    if [ -n "$DIFFICULTY" ] && [ -n "$TAGS_INPUT" ]; then
        echo "Updating tags..."

        # Parse tags - handle tags with spaces by looking for quoted strings
        # Convert input like: Array "Prefix Sum" "Hash Table"
        # Into proper array of arguments
        eval "TAGS_ARRAY=($TAGS_INPUT)"

        cd leetcode-tag-updater
        ./update_tags.sh "$PROBLEM_NUM" "$DIFFICULTY" "${TAGS_ARRAY[@]}"
        cd ..
        echo "Tags updated successfully"
    else
        echo "Skipping tag update (difficulty or tags not provided)"
    fi

    echo "Successfully created new problem folder and files for problem $PROBLEM_NUM"
    exit 0
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

# Create or update TypeScript solution file
if [ -f "$TS_FILE" ]; then
    echo "File $TS_FILE already exists"
    # Keep only the first 6 lines and remove everything from line 7 onwards
    sed -i '' '7,$d' "$TS_FILE"
    echo "Deleted content from line 7 onwards in $TS_FILE"
else
    # Create new TypeScript solution file
    cat > "$TS_FILE" << EOF
/**
 * LeetCode Problem: $PROBLEM_NUM. $PROBLEM_TITLE
 * $PROBLEM_URL
 *
 * Solution by Takanori Kaitani
 */

EOF
    echo "Created $TS_FILE"
fi

echo "Successfully added TypeScript solution template for problem $PROBLEM_NUM"