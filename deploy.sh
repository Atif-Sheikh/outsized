#!/bin/bash
set -e
git checkout master
git pull origin master
git merge --ff-only origin/master
yarn
NODE_ENV=production yarn build
pm2 delete -s webapp || :
NODE_ENV=production pm2 start ecosystem.config.js --env production
# pm2 monit webapp