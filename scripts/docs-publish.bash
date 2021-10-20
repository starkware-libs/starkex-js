#!/bin/bash

yarn run docs:generate
yarn run format
git add .
git commit --amend -m "chore: update docs"
