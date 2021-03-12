---
title: "OpenSSH"
description: "ssh, scp commands"
date: 2021-03-12
tags: ["ssh"]
---

- [OpenSSH Manual](https://www.openssh.com/manual.html)
## ssh

| Description           | Command                 |
| --------------------- | ----------------------- |
| Remote ssh connection | `ssh [user]@[remote_host]` |
| Use a specific ssh private key | `scp -i [private_key] [user]@[remote_host]`


## scp

| Description           | Command                 |
| --------------------- | ----------------------- |
| Copy a file (filepath) to a remote host (remote_host) using a specific port | `scp [filepath] -P [port] [user]@[remote_host]:[remote_filepath]` |
| Remote to local | `scp [remote_host]:[remote_filepath] [filepath]` |
| Recursive copy | `scp -r [remote_host]:[remote_filepath] [filepath]` |
| Use a specific ssh private key | `scp -i [private_key] [filepath] [remote_host]:[remote_filepath]` |

## ssh-keygen

| Description           | Command                 |
| --------------------- | ----------------------- |
| Generate a key | `ssh-keygen` |
| Remove host (remote_host) from known_hosts | `ssh-keygen -R [remote_host]` |
| Generate a RSA key (PEM format) | `ssh-keygen -m PEM -t RSA` |
