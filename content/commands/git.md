---
title: "Git"
description: "Git commands"
date: 2021-03-12
tags: ["git"]
---


## Resources

- [Git Documentation](https://git-scm.com/docs)
- [Pro Git](https://git-scm.com/book/)

- Start Git Bash in a certain directory
- `"C:\Program Files\Git\git-bash.exe" --cd=[PATH]`

| Description                                 | Command                                     |
| ------------------------------------------- | --------------------------------------- |
| Fix typo in a commit | `git commit --amend -m [commit_message]`
| Rename current local branch to "new"        | `git branch -m [new]` |
| Rename "old" branch to "new" branch locally | `git branch -m [old] [new]` |
| Set commit name                             | `git config --global user.name "[name]"` |
| Set Email                                   | `git config --global user.email "[email]"` |
| Add remote (e. g. origin https://github.com/user/repo.git) | `git remote add [remote_name] [remote_url]` |
| List remote | `git remote -v` |
| Cleanup local branches                      | `git remote prune origin` |
| Lines Counter (Extensions e.g. \*.java)     | `git ls-files "[extension]" \| xargs -n1 git blame --line-porcelain \| sed -n 's/^author //p' \| sort -f \| uniq -ic \| sort -nr` |
| Recursive remove                            | `git rm -r` |
| Create a new branch and switch to it | `git checkout -b [branch_name]` |
| Delete "old" branch and push "new" branch   | `git push origin :[old] [new]` |
| Reset upstream for "new" branch             | `git push -u origin [new]` |
| Remove commits from history             | `git reset --hard [hash] && git push -f` |
