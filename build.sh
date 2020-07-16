#!/usr/bin/bash

function IS_ABSENT {
  return `which "$1" 2>/dev/null | grep -cm1 "$1"`
}

if IS_ABSENT 'gulp'; then
  npm install --global gulp-cli
fi

# Init Node modules
if [ ! -d "node_modules" ]; then
  npm install

  # install dependencies
  # npm install --save-dev browser-sync jquery

  # install gulp dependencies
  # npm install --save-dev gulp gulp-load-plugins gulp-pug gulp-rename gulp-rigger gulp-sass gulp-coffee gulp-clean gulp-uglify
fi

# Run command to build project
gulp build
