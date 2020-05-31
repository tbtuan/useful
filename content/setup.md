---
title: 'Setup'
metaTitle: 'This is the title tag of this page'
metaDescription: 'This is the meta description'
---

# Apache

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

# Github Action

## Firebase

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

# VSCode

Useful extensions

- [emmet](https://docs.emmet.io/)
- [Live Server](https://ritwickdey.github.io/vscode-live-server/)
