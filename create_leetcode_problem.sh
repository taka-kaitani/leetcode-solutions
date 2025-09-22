#!/bin/bash

# 引数チェック
if [ $# -lt 4 ]; then
  echo "Usage  : ./create_leetcode_problem.sh <ProblemNumber> <ProblemTitle> <Difficulty> <Tag1> [Tag2] [Tag3] ..."
  echo "Example: ./create_leetcode_problem.sh 1768 'Merge Strings Alternately' e 'Two Pointers' 'String'"
  echo "Difficulty: e (Easy), m (Medium), h (Hard)"
  exit 1
fi

# 引数を処理
PROBLEM_NUMBER=$1
PROBLEM_TITLE="$2"
DIFFICULTY="$3"
shift 3
TAGS=("$@")

# 難易度の妥当性チェック
case "$DIFFICULTY" in
    "e"|"m"|"h") ;;
    *)
        echo "Invalid difficulty: $DIFFICULTY"
        echo "Use: e (Easy), m (Medium), h (Hard)"
        exit 1
        ;;
esac

# スネークケースのフォルダ名生成
FOLDER_NAME="problems/$(echo "${PROBLEM_NUMBER}_$(echo "$PROBLEM_TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/ /_/g')")"

# LeetCode URL用スラッグ生成
LEETCODE_SLUG=$(echo "$PROBLEM_TITLE" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
LEETCODE_URL="https://leetcode.com/problems/${LEETCODE_SLUG}/"

# フォルダ作成
mkdir -p "$FOLDER_NAME"

# solution.php 作成
cat <<EOF > "$FOLDER_NAME/solution.php"
<?php
/**
 * LeetCode Problem: ${PROBLEM_NUMBER}. ${PROBLEM_TITLE}
 * ${LEETCODE_URL}
 *
 * Solution by Takanori Kaitani
 */

EOF

# README.md 作成
cat <<EOF > "$FOLDER_NAME/README.md"
# LeetCode ${PROBLEM_NUMBER} - ${PROBLEM_TITLE}

## Problem  
- [LeetCode Link](${LEETCODE_URL})

## My Solution

### Code
- [solution.php](./solution.php)
- 

### Time & Space Complexity
- Time  : \$O(n)\$
- Space : \$O(1)\$
EOF

echo "✅ Folder created: $FOLDER_NAME"

# タグの更新
echo "🏷️  Updating tags..."
if [ -x "./leetcode-tag-updater/update_tags.sh" ]; then
    # update_tags.shは相対パスでproblemsディレクトリを参照するので、
    # カレントディレクトリをleetcode-tag-updaterに変更して実行
    (cd "./leetcode-tag-updater" && ./update_tags.sh "$PROBLEM_NUMBER" "$DIFFICULTY" "${TAGS[@]}")
    echo "✅ Tags updated successfully"
else
    echo "⚠️  Tag updater script not found or not executable"
    echo "Please run manually: cd leetcode-tag-updater && ./update_tags.sh $PROBLEM_NUMBER $DIFFICULTY ${TAGS[*]}"
fi

# Git操作（コミットとPush）
# update_solution.sh 内で push するので、ここではコメントアウト
# git add "$FOLDER_NAME"
# git commit -m "Add solution for ${PROBLEM_NUMBER}: ${PROBLEM_TITLE}"
# git push

# echo "🚀 Git pushed!"