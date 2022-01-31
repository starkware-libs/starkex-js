#!/bin/bash

yarn run docs:generate
yarn run format
git add .
git commit --amend --no-edit
