# Diasporiana
Adaptive html template (based on [Bootstrap 4 alpha](https://v4-alpha.getbootstrap.com/getting-started/introduction/))


This is the charity project of Ukrainian Internet Library.
The project of preserving the [intellectual heritage of Ukrainian immigration](http://diasporiana.org.ua/pro-proekt/).


visit [diasporiana.org.ua](http://diasporiana.org.ua/), [preview](http://wdev.adr.com.ua/)

## Init

```bash
# Install
$ bash build.sh

# Or manualy:
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

# Clear build directory
$ gulp clean

# Default task
# (will alternately start these tasks: "build", "watch")
$ gulp
```
