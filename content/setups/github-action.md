---
title: 'Github Action'
description: 'Github action workflow'
date: 2020-01-24
tags: ["devops", "cicd"]
---

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