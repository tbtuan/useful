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

## Caching

See (Speed up workflows)[https://docs.github.com/en/actions/guides/caching-dependencies-to-speed-up-workflows]

```yml
name: Caching with npm

on: push

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2

    - name: Cache node modules
      uses: actions/cache@v2
      env:
        cache-name: cache-node-modules
      with:
        # npm cache files are stored in `~/.npm` on Linux/macOS
        path: ~/.npm
        key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
        restore-keys: |
          ${{ runner.os }}-build-${{ env.cache-name }}-
          ${{ runner.os }}-build-
          ${{ runner.os }}-

    - name: Install Dependencies
      run: npm install

    - name: Build
      run: npm build

    - name: Test
      run: npm test
```