## :flags: Requirements

Make sure [Node JS](https://nodejs.org), [NPM](https://www.npmjs.com) and [Gulp](http://gulpjs.com/) already installed on your computer.

## :hammer_and_wrench: Install

- Execute `npm install`.

## :fire: Run

- Execute `npm start` or `gulp`.
- Open `http://localhost:8080/` on your web browser.

## :bulb: Build

- Execute `gulp build`.

## :open_file_folder: Folders Structure

```
+ dist
  + css
  + fonts
  + images
  + js
- index.html
+ src
  + js
  + pug
    + base
    + layouts
    + pages
    + partials
  + sass
    + base
    + components
    + layouts
    + pages
    + sections
    + vendors
    - styles.sass : Import all sass files.
```

## :postbox: Gulp Plugins

- [gulp-connect](https://www.npmjs.com/package/gulp-connect) : Run webserver (with livereload).
- [gulp-plumber](https://www.npmjs.com/package/gulp-plumber) : Prevent pipe breaking caused by errors from gulp plugins.
- [gulp-pug](https://www.npmjs.com/package/gulp-pug) : Gulp plugin for compiling Pug templates, compile Pug into HTML.
- [gulp-rename](https://www.npmjs.com/package/gulp-rename) : Gulp plugin to rename files easily, adding `.min` suffix.
- [gulp-sass](https://www.npmjs.com/package/gulp-sass) : Compile your Sass into CSS.
- [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) : Minify your JS.
