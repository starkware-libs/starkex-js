#!/bin/bash

yarn run build
mv dist/* .
npm publish --access public
