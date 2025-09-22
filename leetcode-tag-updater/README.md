# leetcode-tag-updater/leetcode-tag-updater/README.md

# LeetCode Tag Updater

This project provides a simple shell script to manage and update tags for LeetCode problems in markdown files. The script allows you to add problem information under specified tags, creating the necessary markdown files if they do not exist.

## Usage

To use the `update_tags.sh` script, run the following command in your terminal:

```
./update_tags.sh <problem_number> <tag1> <tag2> ...
```

- `<problem_number>`: The number of the LeetCode problem (an integer).
- `<tag1>`, `<tag2>`, ...: The names of the tags you want to associate with the problem. You can specify multiple tags.

## Example

To update the tags for problem number 123 with tags "Array", "Dynamic Programming", and "Medium", you would run:

```
./update_tags.sh 123 "Array" "Dynamic Programming" "Medium"
```

This command will update the corresponding markdown files for the specified tags, adding the problem information under the appropriate sections.

## Notes

- Ensure that you have the necessary permissions to execute the script.
- The script will create markdown files in the `tags` directory if they do not already exist.
- The tags will be organized under their respective difficulty levels (Easy, Medium, Hard) in the markdown files.