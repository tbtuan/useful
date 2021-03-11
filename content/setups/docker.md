---
title: 'Docker'
description: 'Docker setup'
date: 2020-03-04
tags: ["devops"]
---


## Related

- [Devops](/links/devops)
## Resources

- [Docker Hub](https://hub.docker.com/)

## Dockerfile

- [Dockerfile reference](https://docs.docker.com/engine/reference/builder/)

```dockerfile
ENTRYPOINT ["", ..., ""]

CMD ["", ..., ""]
```

## VM Setup

https://docs.docker.com/engine/install/ubuntu/

Update the apt package index and install packages to allow apt to use a repository over HTTPS (guest OS)

```text
sudo apt-get update

sudo apt-get install \
  apt-transport-https \
  ca-certificates \
  curl \
  gnupg-agent \
  software-properties-common
```

Add Docker’s official GPG key (guest OS)

```text
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

Add docker repository to apt-source  (guest OS)

```text
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

Install Docker Engine (guest OS)

```text
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

Configure Docker daemon (guest OS)

```text
sudo nano /lib/systemd/system/docker.service

ExecStart=/usr/bin/docker daemon -H fd:// -H tcp://0.0.0.0:2375
```

Resolve issues with permission (guest OS)

```text
Docker-Problem: ‘Got permission denied while trying to connect to the Docker daemon socket

sudo usermod -a -G docker $USER
```

Install an OpenSSH server (guest OS)

```text
sudo apt install openssh-server
```

Generate a RSA key (host OS)
```text
Common issues on Windows OpenSSH
warning: agent returned different signature type ssh-rsa (expected rsa-sha2-512)

ssh-keygen -m PEM -t RSA
```

Configure VirtualBox (host OS)

```text
Settings -> Network -> NAT -> Port forwarding -> Add rule ->
Name: ssh, Protocol: TCP, Host-Port: 2522, Guest-Port: 22

ssh 127.0.0.1 -p 2522
```

Copy the content of "id_rsa.pub" from the host OS and paste it in the guest VM's "authorized_keys" file (guest OS)

```text
id_rsa.pub <- PK
~/.ssh/authorized_keys <- File

sudo nano ~/.ssh/authorized_keys
```

Enable docker service (guest OS)

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

Install docker for VSCode (host OS)
```text
Issues which might occur:
In case the installation fails, the extension has to be installed manually using the extension file

Docker (ms-azuretools.vscode-docker)
```

Start docker (guest OS)
```text
sudo dockerd
```


