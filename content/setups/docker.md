---
title: 'Docker'
description: 'Docker + VM setup'
date: 2020-01-24
tags: ["devops"]
---

## VM Setup

https://docs.docker.com/engine/install/ubuntu/

Update the apt package index and install packages to allow apt to use a repository over HTTPS

```text
sudo apt-get update

sudo apt-get install \
  apt-transport-https \
  ca-certificates \
  curl \
  gnupg-agent \
  software-properties-common
```

Add Docker’s official GPG key

```text
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

Add docker repository to apt-source 

```text
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

Install Docker Engine

```text
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

Configure Docker daemon

```text
sudo nano /lib/systemd/system/docker.service

ExecStart=/usr/bin/docker daemon -H fd:// -H tcp://0.0.0.0:2375
```

Resolve issues with permission

```text
Docker-Problem: ‘Got permission denied while trying to connect to the Docker daemon socket

sudo usermod -a -G docker $USER
```

Install an OpenSSH server

```text
sudo apt install openssh-server
```

Copy (id_rsa.pub) from the host OS and paste it in the guest VM's ssh directory

```text
id_rsa.pub <- PK
.ssh/authorized_keys <- Directory

sudo usermod -a -G docker $USER
```

Configure VirtualBox

```text
Settings -> Network -> NAT -> Port forwarding -> Add rule ->
Name: ssh, Protocol: TCP, Host-Port: 2522, Guest-Port: 22

ssh 127.0.0.1 -p 2522
```

Enable docker service

```text
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

Install Docker client (host OS)

```text
https://gist.github.com/kekru/4e6d49b4290a4eebc7b597c07eaf61f2#download-docker-client
```

Set a DOCKER_HOST environment variable (host OS)
```text
DOCKER_HOST=ssh://[USER]@127.0.0.1:2522
```