const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

function compileScss() {
  return src('src/styles/*.scss')
    .pipe(sass())
    .pipe(prefix('last 2 versions'))
    .pipe(minify())
    .pipe(dest('dist/styles'));
}

function browserServe(done) {
  browserSync.init({
    server: {
      baseDir: '.',
    },
  });
  done();
}

function browserReload(done) {
  browserSync.reload();
  done();
}

function watchTask() {
  watch('*.html', browserReload);
  watch('src/styles/*.scss', series(compileScss, browserReload));
}

exports.default = series(compileScss, browserServe, browserReload, watchTask);
