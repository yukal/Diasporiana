# Diasporiana HTML template
This Html template was developed for the [Diasporiana](http://diasporiana.org.ua/) project but still not used.
The template is based on [Bootstrap 4 alpha](https://v4-alpha.getbootstrap.com/getting-started/introduction/), [scss](https://sass-lang.com/), [Gulp](https://gulpjs.com/)

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
