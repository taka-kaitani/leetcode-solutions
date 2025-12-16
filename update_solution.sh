#!/bin/bash

# 引数チェック
if [ $# -lt 1 ]; then
  echo "Usage  : ./update_solution.sh <ProblemNumber>"
  echo "Example: ./update_solution.sh 1768"
  exit 1
fi

PROBLEM_NUMBER=$1

# 対象ディレクトリを探す（problemsディレクトリ内で数字で始まるディレクトリを対象）
FOLDER_PATH=$(find ./problems -type d -name "${PROBLEM_NUMBER}_*" | head -n 1)

if [ -z "$FOLDER_PATH" ]; then
  echo "❌ Folder for problem ${PROBLEM_NUMBER} not found in problems directory."
  echo "Available problems:"
  ls -1 ./problems | grep -E "^[0-9]+_" | cut -d'_' -f1 | sort -n | head -10
  echo "... (showing first 10)"
  exit 1
fi

# Git 操作
git add "$FOLDER_PATH"
git add "tags/"  # タグファイルも追加
git add "problem_list.md"  # 結果リストも追加
git commit -m "Add solution and README for ${PROBLEM_NUMBER}"
git push

echo "✅ Changes pushed for problem ${PROBLEM_NUMBER}!"