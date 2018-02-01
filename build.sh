#!/bin/bash

# Gulp
#npm i --save-dev gulp gulp-load-plugins gulp-rename gulp-rigger gulp-sass gulp-coffee gulp-clean gulp-uglify browser-sync jquery

# Init Node modules
if [ ! -d "node_modules" ]; then
  npm i
fi

# Install Gulp
hasGulp=$(which gulp)
if [ -z "${hasGulp// }" ]; then
  sudo npm install gulp-cli -g
  sudo npm install gulp -D
fi

# Alternative
# Install Gulp
#if [ ! -d "node_modules/gulp" ]; then
#  sudo npm install gulp-cli -g
#  sudo npm install gulp -D
#fi

gulp build
