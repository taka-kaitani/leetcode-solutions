#!/bin/bash

# Check if at least three arguments are provided (problem number, difficulty, and at least one tag)
if [ "$#" -lt 3 ]; then
    echo "Usage: $0 <problem_number> <difficulty> <tag1> [<tag2> ... <tagN>]"
    echo "Difficulty: e (Easy), m (Medium), h (Hard)"
    exit 1
fi

PROBLEM_NUMBER=$1
DIFFICULTY_INPUT=$2
shift 2
TAGS=("$@")

# Validate problem number (must be a positive integer)
if ! [[ "$PROBLEM_NUMBER" =~ ^[0-9]+$ ]]; then
    echo "Error: Problem number must be a positive integer"
    echo "Invalid problem number: $PROBLEM_NUMBER"
    exit 1
fi

# Check if the problem directory exists
PROBLEM_DIR="../problems"
PROBLEM_PATH=""
for dir in "$PROBLEM_DIR"/${PROBLEM_NUMBER}_*/; do
    if [[ -d "$dir" ]]; then
        PROBLEM_PATH="$dir"
        break
    fi
done

if [[ -z "$PROBLEM_PATH" ]]; then
    echo "Error: Problem ${PROBLEM_NUMBER} not found in problems directory"
    echo "Available problems:"
    ls -1 "$PROBLEM_DIR" | grep -E "^[0-9]+_" | cut -d'_' -f1 | sort -n | head -10
    echo "... (showing first 10)"
    exit 1
fi

# Map difficulty input to full names
case "$DIFFICULTY_INPUT" in
    "e") DIFFICULTY="Easy" ;;
    "m") DIFFICULTY="Medium" ;;
    "h") DIFFICULTY="Hard" ;;
    *)
        echo "Invalid difficulty: $DIFFICULTY_INPUT"
        echo "Use: e (Easy), m (Medium), h (Hard)"
        exit 1
        ;;
esac

# Define the tags directory
TAGS_DIR="../tags"

# Function to update the tag markdown file
update_tag_md() {
    local tag=$1
    local tag_md="${TAGS_DIR}/${tag// /_}.md"
    local problem_name="Problem ${PROBLEM_NUMBER}"
    local problem_path="${PROBLEM_PATH}README.md"

    # Create the markdown file if it doesn't exist
    if [ ! -f "$tag_md" ]; then
        echo "# ${tag} Problems" > "$tag_md"
        echo "" >> "$tag_md"
        echo "## Easy" >> "$tag_md"
        echo "" >> "$tag_md"
        echo "## Medium" >> "$tag_md"
        echo "" >> "$tag_md"
        echo "## Hard" >> "$tag_md"
        echo "" >> "$tag_md"
    fi

    # Check if the problem is already in the file
    if grep -q "Problem ${PROBLEM_NUMBER}" "$tag_md"; then
        echo "Problem ${PROBLEM_NUMBER} already exists in ${tag} tag file"
        return
    fi

    # Find the section line number
    section_line=$(grep -n "^## ${DIFFICULTY}$" "$tag_md" | cut -d: -f1)
    
    if [ -n "$section_line" ]; then
        # Create a temporary file
        temp_file=$(mktemp)
        
        # Copy everything before the insertion point
        head -n "$section_line" "$tag_md" > "$temp_file"
        
        # Add the new problem entry
        echo "- [${problem_name}](${problem_path})" >> "$temp_file"
        
        # Add everything after the section header
        tail -n +$((section_line + 1)) "$tag_md" >> "$temp_file"
        
        # Replace the original file
        mv "$temp_file" "$tag_md"
        
        echo "Added Problem ${PROBLEM_NUMBER} to ${tag} (${DIFFICULTY})"
    else
        echo "Error: Could not find ${DIFFICULTY} section in ${tag_md}"
    fi
}

# Loop through each tag and update the corresponding markdown file
for tag in "${TAGS[@]}"; do
    update_tag_md "$tag"
done

echo "Updated tags for Problem ${PROBLEM_NUMBER} (${DIFFICULTY}) with tags: ${TAGS[*]}"