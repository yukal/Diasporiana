# Diasporiana HTML template
This Html template and [the logotype](https://github.com/yukal/html-template-Diasporiana/blob/master/source/img/assets/logo.svg) was developed for the [Diasporiana](http://diasporiana.org.ua/) project but still not used.
The template is based on [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5), [CSS3](https://developer.mozilla.org/en-US/docs/Archive/CSS3), [SCSS](https://sass-lang.com/), [Bootstrap 4 alpha](https://v4-alpha.getbootstrap.com/getting-started/introduction/), and [Gulp](https://gulpjs.com/) usage as streaming build system on Node.js

Please visit a [preview page](http://diasporiana.epizy.com/) of the template.

## Init

```bash
$ npm install
```

## Build

```bash
$ gulp build

# Build partials
$ gulp html
$ gulp sass
$ gulp js

# Copy assets into a build
$ gulp assets

# Removes all of the files from the build directory
$ gulp clean

# Default task
# (will alternately start these tasks: "build", "watch")
$ gulp
```
