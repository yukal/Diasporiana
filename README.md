# Diasporiana
Adaptive html template (based on [Bootstrap 4 alpha](https://v4-alpha.getbootstrap.com/getting-started/introduction/))


This is the charity project of Ukrainian Internet Library.
The project of preserving the [intellectual heritage of Ukrainian immigration](http://diasporiana.org.ua/pro-proekt/).


visit [diasporiana.org.ua](http://diasporiana.org.ua/), [preview](http://wdev.adr.com.ua/)

## Init

    # Install
    $ bash build.sh

    # Or manualy:
    $ npm install


## Build

    $ gulp build

    # Build partials
    $ gulp html
    $ gulp sass
    $ gulp js

    # Copies assets files
    $ gulp assets

    # Clean build dir
    $ gulp clean

    # To run watcher
    # (will start "build" command at first)
    $ gulp

