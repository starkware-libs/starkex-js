#!/bin/bash

yarn run docs:generate
yarn run format
git add .
git commit -m "chore: update docs"
