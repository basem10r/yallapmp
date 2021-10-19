var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    scss    = require('gulp-scss'),
    connect = require('gulp-connect'),
    pug     = require('gulp-pug'),
    plumber = require('gulp-plumber'),
    rename  = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    uglify  = require('gulp-uglify'),
    pngquant = require('imagemin-pngquant');
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    wait = require('gulp-wait');

function reload(done) {
  connect.server({
    livereload: true,
    port: 8080
  });
  done();
}



function styles() {
  return (
    gulp.src([
      `src/sass/styles.scss`,
      `src/sass/vendors/bootstrap/bootstrap.scss`,
    ])
    .pipe(plumber())
    .pipe(wait(200))
    .pipe(sass())
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 3 versions'],
      cascade: false
    }))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload())
  );
}


function scripts() {
  return (
    gulp.src('src/js/scripts.js')
    .pipe(plumber())
    .pipe(gulp.dest('dist/js'))
    .pipe(uglify())
    .pipe(rename('scripts.min.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload())
  );
}

function concatScripts(){
  return (
    gulp.src([`src/js/vendors/jquery-3.5.1.min.js`,`src/js/vendors/*`,`src/js/plugins/*`])
    .pipe(plumber())
    .pipe(concat('core.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(uglify())
    .pipe(rename('core.min.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload())
  );
}

function html() {
  return (
    gulp.src('*.html')
    .pipe(plumber())
    .pipe(connect.reload())
  );
}

function views() {
  return (
    gulp.src('src/pug/pages/*.pug')
    .pipe(plumber())
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload())
  )
}
function compressImage(){
  return (
    gulp.src('src/images/*')
    .pipe(imagemin([
          pngquant({quality: [0.5, 0.5]})
    ]))
    .pipe(gulp.dest('dist/images'))
  )
}
function copy(){
  return gulp 
    .src(
      'src/**/fonts/**/*'
      )
    .pipe(gulp.dest('./dist'))
};

function watchTask(done) {
  gulp.watch('*.html', html);
  gulp.watch('src/sass/**/*.scss', styles);
  gulp.watch('src/js/scripts.js', scripts);
  gulp.watch('src/pug/**/*.pug', views);
  done();
}

const watch = gulp.parallel(watchTask, reload);
const build = gulp.series(gulp.parallel(styles, scripts,concatScripts, html, views,copy,compressImage));

exports.reload = reload;
exports.styles = styles;
exports.scripts = scripts;
exports.html = html;
exports.views = views;
exports.watch = watch;
exports.build = build;
exports.default = watch;
exports.concatScripts = concatScripts;
exports.copy = copy;
exports.compressImage = compressImage;