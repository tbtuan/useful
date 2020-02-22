# Main
* [Readme](./readme)
* [Command](#index)
* [Setup](./setup.md)
* [Shortcut](./shortcut.md)

## Index

* [Git](#Git)

### Git

- [Git Documentation](https://git-scm.com/docs)

- Start Git Bash in a certain directory
- `"C:\Program Files\Git\git-bash.exe" --cd=[PATH]`

|Description               | Command                  |
|---                       |---                        |
|Set commit name           | `git config --global user.name "[NAME]"` |
|Set Email                 | `git config --global user.email "[EMAIL]"` |
| Cleanup local branches   | `git remote prune origin`  |
| Lines Counter (Extensions e. g. *.java)       | `git ls-files "[EXTENSION]" \| xargs -n1 git blame --line-porcelain \| sed -n 's/^author //p' \| sort -f \| uniq -ic \| sort -nr`  |
| Recursive remove         | `git rm -r` |
