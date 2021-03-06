---
title: 'VirtualBox'
description: 'Virtual machine'
date: 2021-03-04
tags: ["virtual-machine"]
---

## Resources

- [Documentation](https://docs.oracle.com/en/virtualization/virtualbox/)

## Increase image size (Linux)

Virtualbox (host os)

```text
File -> Virtual Media Manager -> Select a .vdi (snapshots/subdisks etc) -> Size ... GB -> Save
```

Install gparted (guest OS)

```text
sudo apt install gparted

sudo gparted
Select a disk -> Right click -> Resize/move
```



