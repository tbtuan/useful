---
title: 'VirtualBox'
description: 'Virtual machine'
date: 2022-12-13
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

## Shared folder

- [Gist](https://gist.github.com/estorgio/1d679f962e8209f8a9232f7593683265)

mount to the shared folder
```text
sudo mount -t vboxsf shared ~/shared
```


