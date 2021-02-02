---
title: 'Setups'
metaTitle: 'Setups'
metaDescription: 'Setting up things such as config files'
date: 2020-01-24
---

## Apache

Documentation
https://httpd.apache.org/docs/2.4/ssl/ssl_howto.html

TLS 1.2/1.3 only (.conf inside "/sites-available")

```text
LoadModule ssl_module modules/mod_ssl.so

<VirtualHost *:443>
    ServerName www.example.com
    DocumentRoot /var/www/html

    SSLEngine on
    SSLProtocol -all +TLSv1.2 +TLSv1.3
    SSLCertificateFile /etc/letsencrypt/live/example.com/cert.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/example.com/privkey.pem
</VirtualHost>
```

## Docker

### VSCode + Virtualbox Ubuntu Docker

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

## LAMP



## Github Action

### Firebase

Receive [FIREBASE_TOKEN] with firebase login:ci

Store the token inside the repository (Setting -> Secrets)

```yml
name: CI

on:
  push:
    branches:
      - master
      - release/*

jobs:
  firebase-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@master
      - uses: actions/setup-node@master
        with:
          node-version: '10.x'
      - run: npm install
      - run: npm run build
      - name: Firebase Deploy
        run: |
          sudo npm install -g firebase-tools
          firebase deploy --token ${{ secrets.FIREBASE_TOKEN }}
```

## VSCode

Useful extensions

- [emmet](https://docs.emmet.io/)
- [Live Server](https://ritwickdey.github.io/vscode-live-server/)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Prettier

```text
Settings -> Editor: Default Formatter -> esbenp.prettier-vscode
```