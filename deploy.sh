#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd dist
# deploying to https://<USERNAME>.github.io
git push -f git@github.com.alalse/alalse.github.io.git master
cd -