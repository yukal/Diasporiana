# Diasporiana HTML template
This Html template and [the logotype](https://raw.githubusercontent.com/yukal/template-diasporiana/master/source/img/assets/logo.svg) was developed for the [Diasporiana](http://diasporiana.org.ua/) project but still not used.
The template is based on [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5), [CSS3](https://developer.mozilla.org/en-US/docs/Archive/CSS3), [SCSS](https://sass-lang.com/), [Bootstrap 4 alpha](https://v4-alpha.getbootstrap.com/getting-started/introduction/), [pug](https://pugjs.org/), and [Gulp](https://gulpjs.com/) usage as streaming build system on Node.js

Please visit a [preview page](http://diasporiana.epizy.com/) of the template.

## Init

Make sure you have installed the Gulp CLI
```bash
# To check it run the command, as a result it should show a path to Gulp CLI
$ which gulp

# If Gulp CLI is absent, install it with a command
$ npm install --global gulp-cli

# Install other dependencies for the project
$ npm install
```

## Build

```bash
$ gulp build

# Build partials
$ gulp html
$ gulp css
$ gulp js

# Copy assets into a build
$ gulp assets

# Removes all files from the build including the directory
$ gulp clean

# Starts watcher with the BrowserSync
$ gulp watch

# As a default task will start the watcher
$ gulp
```
