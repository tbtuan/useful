---
title: "Commands"
metaTitle: "Commands - /useful"
metaDescription: "Commands for CLIs"
---

## Git

- [Git Documentation](https://git-scm.com/docs)

- Start Git Bash in a certain directory
- `"C:\Program Files\Git\git-bash.exe" --cd=[PATH]`

| Description                                 | Command                                                                                                                           |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Set commit name                             | `git config --global user.name "[NAME]"`                                                                                          |
| Set Email                                   | `git config --global user.email "[EMAIL]"`                                                                                        |
| Cleanup local branches                      | `git remote prune origin`                                                                                                         |
| Lines Counter (Extensions e.g. \*.java)     | `git ls-files "[EXTENSION]" \| xargs -n1 git blame --line-porcelain \| sed -n 's/^author //p' \| sort -f \| uniq -ic \| sort -nr` |
| Recursive remove                            | `git rm -r`                                                                                                                       |
| Rename current local branch to "new"        | `git branch -m [NEW]`                                                                                                             |
| Rename "old" branch to "new" branch locally | `git branch -m [OLD] [NEW]`                                                                                                       |
| Delete "old" branch and push "new" branch   | `git push origin :[OLD] [NEW]`                                                                                                    |
| Reset upstream for "new" branch             | `git push -u origin [NEW]`                                                                                                        |

## npm

- [npm - CLI documentation](https://docs.npmjs.com/cli-documentation/cli)

| Description                                                                          | Command                              |
| ------------------------------------------------------------------------------------ | ------------------------------------ |
| Install a certain "version" of "package" globally (e.g. npm install eslint@5.2.0 -g) | `npm install [PACKAGE]@[VERSION] -g` |
| Install "package" and save for development purpose (used for test suites etc.)       | `install [PACKAGE] --save-dev"`      |
| Clean cache                                                                          | `npm cache clean --force`            |

## ssh

- [OpenSSH Manual](https://www.openssh.com/manual.html)

| Description           | Command                 |
| --------------------- | ----------------------- |
| Remote ssh connection | `ssh [user]@[hostname]` |
